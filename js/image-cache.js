// image-cache.js — caches externally-linked images (museum/archive art that lives on
// someone else's server, not bundled in this repo's images/ folder) into IndexedDB so
// they can be fetched once on good wifi and then shown from disk with zero network use
// later — the same idea as js/versebox.js's scripture preload, for pictures instead of
// verses. Bundled local photos (images/*.jpg) never touch this file; they're already on
// disk and load instantly with or without internet.
//
// How a cacheable image gets into the page: js/atlas.js gives it
// <img data-cache-key="URL"> instead of <img src="URL">, so the browser never starts an
// automatic fetch. wireImageCache() below finds those tags, serves them from IndexedDB
// if already cached, and otherwise fetches once and caches for next time.

(function () {
  const DB_NAME = 'lw-image-cache-db';
  const STORE = 'images';
  let dbPromise = null;

  function openDb() {
    if (dbPromise) return dbPromise;
    dbPromise = new Promise((resolve, reject) => {
      if (typeof indexedDB === 'undefined') { reject(new Error('IndexedDB unavailable')); return; }
      const req = indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = function () { req.result.createObjectStore(STORE); };
      req.onsuccess = function () { resolve(req.result); };
      req.onerror = function () { reject(req.error); };
    });
    return dbPromise;
  }

  function getCachedBlob(url) {
    return openDb().then(db => new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readonly');
      const req = tx.objectStore(STORE).get(url);
      req.onsuccess = function () { resolve(req.result ? req.result.blob : null); };
      req.onerror = function () { reject(req.error); };
    })).catch(() => null);
  }

  function putCachedBlob(url, blob) {
    return openDb().then(db => new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readwrite');
      tx.objectStore(STORE).put({ blob, cachedAt: Date.now() }, url);
      tx.oncomplete = function () { resolve(); };
      tx.onerror = function () { reject(tx.error); };
    })).catch(() => { /* IndexedDB unavailable/full — image still shows, just won't cache */ });
  }

  function isExternal(url) {
    return typeof url === 'string' && /^https?:\/\//i.test(url);
  }

  // Every external image URL a session actually shows (custom s.photos, or the
  // hardcoded PHOTO_DEFAULTS fallback keyed the same way atlas.js looks them up).
  function collectSessionImageUrls(s) {
    const list = (s.photos && s.photos.length) ? s.photos
      : (typeof PHOTO_DEFAULTS !== 'undefined' ? (PHOTO_DEFAULTS[s.book + '|' + s.chNum] || []) : []);
    return list.map(p => p.src).filter(isExternal);
  }
  window.collectSessionImageUrls = collectSessionImageUrls;

  window.countCachedSessionImages = async function (s) {
    const urls = collectSessionImageUrls(s);
    let cached = 0;
    for (const url of urls) {
      if (await getCachedBlob(url)) cached++;
    }
    return { cached, total: urls.length };
  };

  let preloadToken = 0;
  window.preloadSessionImages = async function (s, onProgress) {
    const myToken = ++preloadToken;
    const urls = collectSessionImageUrls(s);
    let done = 0;
    const total = urls.length;
    if (onProgress) onProgress(done, total);
    if (!total) return { done: 0, total: 0 };

    for (const url of urls) {
      if (myToken !== preloadToken) return { done, total };
      const existing = await getCachedBlob(url);
      if (!existing) {
        try {
          const res = await fetch(url);
          if (res.ok) await putCachedBlob(url, await res.blob());
        } catch (e) { /* offline or blocked — leave uncached, live <img> fallback still works if online later */ }
      }
      done++;
      if (onProgress) onProgress(done, total);
    }
    return { done, total };
  };

  // Turn a Blob into a self-contained data: URL (base64). Unlike an object URL made
  // with URL.createObjectURL, a data: URL keeps working in a totally different
  // document/window — including the Teams-share popout window, which opens on its own
  // blob: origin and can't read object URLs created back in the main tab.
  function blobToDataURL(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  // The popout window (js/popout.js) is a separate document built from an HTML *string*
  // via postMessage/innerHTML — it never runs this file, so <img data-cache-key> tags
  // sent to it would just sit blank forever. This resolves every data-cache-key in a
  // rendered HTML string to a real, portable src (cached blob → data: URL, or a fresh
  // fetch cached for next time) BEFORE that string ever leaves the main page. Called by
  // js/main.js and js/popout.js whenever they build the HTML they hand to the popout.
  window.resolveCacheKeyImagesInHTML = async function (html) {
    if (!html || html.indexOf('data-cache-key=') === -1) return html;
    const re = /data-cache-key="([^"]+)"/g;
    const urls = new Set();
    let m;
    while ((m = re.exec(html))) urls.add(m[1]);

    const resolved = {};
    await Promise.all(Array.from(urls).map(async (url) => {
      let blob = await getCachedBlob(url);
      if (!blob) {
        try {
          const res = await fetch(url);
          if (res.ok) {
            blob = await res.blob();
            putCachedBlob(url, blob);
          }
        } catch (e) { /* offline/blocked — fall back to a live hotlink attempt below */ }
      }
      if (blob) {
        try { resolved[url] = await blobToDataURL(blob); } catch (e) { /* leave unresolved */ }
      }
    }));

    return html.replace(/data-cache-key="([^"]+)"/g, (full, url) => {
      // Cached (or just fetched): a portable data: URL that works in any window.
      // Otherwise: fall back to the plain live URL so the popout's own browser still
      // has a shot at loading it directly, same as any normal <img src>.
      return 'src="' + (resolved[url] || url) + '"';
    });
  };

  // Swap every <img data-cache-key> in `root` to a cached blob if we have one; otherwise
  // fetch it once (normal network cost, same as any first image load) and cache it for
  // next time. Local (non-http) images never get a data-cache-key, so they're untouched.
  window.wireImageCache = function (root) {
    root = root || document;
    const imgs = root.querySelectorAll('img[data-cache-key]:not([data-cache-wired])');
    imgs.forEach(img => {
      img.setAttribute('data-cache-wired', '1');
      const url = img.getAttribute('data-cache-key');
      getCachedBlob(url).then(blob => {
        if (blob) { img.src = URL.createObjectURL(blob); return; }
        return fetch(url).then(res => {
          if (!res.ok) throw new Error('image fetch failed');
          return res.blob();
        }).then(blob => {
          putCachedBlob(url, blob);
          img.src = URL.createObjectURL(blob);
        });
      }).catch(() => {
        const fig = img.closest('.atlas-fig');
        if (fig) fig.style.display = 'none';
      });
    });
  };
})();
