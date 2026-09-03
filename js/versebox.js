// Floating scripture-reference popup box + "preload scriptures for today" cache.
//
// Every reference linkified by linkifyReferences() (in render.js) — local book
// (Daniel/Revelation/John) or not — becomes a clickable trigger with
// data-book/data-ch/data-v1/data-v2 attributes and class "verse-ref-link".
// This file wires ONE delegated click handler on document, so it works for
// references in both the student display pane and the teacher pane, and for
// any pane re-rendered later — nothing needs to be re-wired per render.
//
// The box itself is appended once to <body> (not inside either pane), so it
// shows on both the teacher view and the student-safe link, and it keeps
// showing the last-clicked reference until another one is clicked.

(function () {
  // bible-api.com only carries public-domain translations. Map the app's
  // in-house translation codes onto the closest thing it actually has;
  // anything else falls back to KJV with a note in the popup.
  const API_TRANSLATION_MAP = { ASV: 'asv', KJV: 'kjv' };
  const DEFAULT_API_TRANSLATION = 'kjv';

  function apiTranslationFor(pref) {
    return API_TRANSLATION_MAP[pref] || DEFAULT_API_TRANSLATION;
  }

  function cacheKey(book, ch, v1, v2, apiTrans) {
    return `lw-verse-cache::${apiTrans}::${book}|${ch}:${v1}${v2 ? '-' + v2 : ''}`;
  }

  function readCache(key) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  function writeCache(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* storage full/unavailable — fine, just won't cache */ }
  }

  function refLabel(book, ch, v1, v2) {
    return `${book} ${ch}:${v1}${v2 ? '-' + v2 : ''}`;
  }

  // ---- The floating box itself ----

  function ensureBox() {
    let box = document.getElementById('verse-popup-box');
    if (box) return box;
    box = document.createElement('div');
    box.id = 'verse-popup-box';
    box.className = 'verse-popup-box collapsed';
    box.innerHTML = `
      <div class="verse-popup-header">
        <span class="verse-popup-ref">Click any scripture reference</span>
        <div class="verse-popup-actions">
          <a class="verse-popup-extlink" href="#" target="_blank" rel="noopener" style="display:none;">Bible Gateway &#8599;</a>
          <button type="button" class="verse-popup-min" title="Minimize">&ndash;</button>
        </div>
      </div>
      <div class="verse-popup-body">Click a highlighted reference anywhere on this page &mdash; the verse shows up here, and stays until you click another.</div>
    `;
    document.body.appendChild(box);
    box.querySelector('.verse-popup-min').addEventListener('click', function () {
      box.classList.toggle('collapsed');
      this.textContent = box.classList.contains('collapsed') ? '+' : '–';
    });
    box.querySelector('.verse-popup-header').addEventListener('click', function (e) {
      if (e.target.closest('.verse-popup-actions')) return;
      box.classList.remove('collapsed');
      box.querySelector('.verse-popup-min').textContent = '–';
    });
    return box;
  }

  function setBoxLoading(label) {
    const box = ensureBox();
    box.classList.remove('collapsed');
    box.querySelector('.verse-popup-min').textContent = '–';
    box.querySelector('.verse-popup-ref').textContent = label;
    box.querySelector('.verse-popup-body').innerHTML = '<span class="verse-popup-loading">Loading&hellip;</span>';
    box.querySelector('.verse-popup-extlink').style.display = 'none';
  }

  function setBoxContent(label, html, extUrl) {
    const box = ensureBox();
    box.classList.remove('collapsed');
    box.querySelector('.verse-popup-min').textContent = '–';
    box.querySelector('.verse-popup-ref').textContent = label;
    box.querySelector('.verse-popup-body').innerHTML = html;
    const ext = box.querySelector('.verse-popup-extlink');
    if (extUrl) { ext.href = extUrl; ext.style.display = 'inline'; }
    else ext.style.display = 'none';
  }

  function localVerseHTML(book, ch, v1, v2) {
    const verses = (typeof getVersesForChapter === 'function') ? getVersesForChapter(book, ch) : null;
    if (!verses) return null;
    const start = parseInt(v1, 10), end = v2 ? parseInt(v2, 10) : start;
    let out = '';
    for (let n = start; n <= end; n++) {
      if (verses[n - 1]) out += `<span class="verse-popup-vn">${n}</span> ${verses[n - 1]} `;
    }
    return out || null;
  }

  async function fetchExternalVerse(book, ch, v1, v2, pref) {
    const apiTrans = apiTranslationFor(pref);
    const key = cacheKey(book, ch, v1, v2, apiTrans);
    const cached = readCache(key);
    if (cached) return cached;
    const ref = `${book} ${ch}:${v1}${v2 ? '-' + v2 : ''}`;
    const url = `https://bible-api.com/${encodeURIComponent(ref)}?translation=${apiTrans}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('lookup failed');
    const data = await res.json();
    const text = (data.verses && data.verses.length)
      ? data.verses.map(v => `<span class="verse-popup-vn">${v.verse}</span> ${(v.text || '').trim()} `).join('')
      : (data.text || '').trim();
    if (!text) throw new Error('empty result');
    writeCache(key, text);
    return text;
  }

  window.showVersePopup = async function (book, ch, v1, v2) {
    const label = refLabel(book, ch, v1, v2);
    const isLocal = (typeof LOCAL_BOOKS !== 'undefined') && LOCAL_BOOKS.includes(book);
    const pref = (typeof CURRENT_TRANSLATION !== 'undefined') ? CURRENT_TRANSLATION : 'ASV';
    const extUrl = (typeof bibleLink === 'function') ? bibleLink(book, ch, v2 ? `${v1}-${v2}` : v1) : null;

    if (isLocal) {
      const html = localVerseHTML(book, ch, v1, v2);
      if (html) { setBoxContent(label, html, extUrl); return; }
      // Book is one of the local ones, but this particular chapter isn't in the
      // embedded data for any translation — fall through to the live lookup below.
    }

    setBoxLoading(label);
    try {
      const text = await fetchExternalVerse(book, ch, v1, v2, pref);
      const apiTrans = apiTranslationFor(pref);
      const note = (apiTrans.toUpperCase() !== String(pref).toUpperCase())
        ? `<div class="verse-popup-note">Shown in ${apiTrans.toUpperCase()} (public domain) &mdash; ${pref} isn't available via free lookup.</div>`
        : '';
      setBoxContent(label, text + note, extUrl);
    } catch (e) {
      setBoxContent(label, `<span class="verse-popup-error">Couldn't load this verse (offline, or reference not recognized).</span>`, extUrl);
    }
  };

  // Delegated click handling — one listener on document covers every reference
  // link in both panes, now and after any future re-render.
  document.addEventListener('click', function (e) {
    const link = e.target.closest('.verse-ref-link');
    if (!link) return;
    e.preventDefault();
    const book = link.dataset.book, ch = link.dataset.ch, v1 = link.dataset.v1;
    const v2 = link.dataset.v2 || null;
    if (!book || !ch || !v1) return;
    window.showVersePopup(book, ch, v1, v2);
  });

  // ---- Preload scriptures for the day ----

  function collectSessionReferences(s) {
    const pattern = /\b(\d\s?[A-Z][a-z]+|[A-Z][a-z]+)\s(\d{1,3}):(\d{1,3})(?:-(\d{1,3}))?\b/g;
    const fields = [];
    (s.points || []).forEach(t => fields.push(t));
    (s.refs || []).forEach(t => fields.push(t));
    (s.hist || []).forEach(t => fields.push(t));
    (s.opens || []).forEach(t => fields.push(t));
    (s.topics || []).forEach(t => fields.push(t.body || ''));
    (s.wordStudies || []).forEach(w => fields.push(w.meaning || ''));
    if (s.doctrinal) fields.push(s.doctrinal);
    if (s.story) { fields.push(s.story.scene || ''); fields.push(s.story.modern || ''); }
    (s.views || []).forEach(v => fields.push(v.body || ''));
    if (s.apocryphaNote) fields.push(s.apocryphaNote);

    const seen = new Set();
    const out = [];
    fields.forEach(text => {
      if (!text) return;
      pattern.lastIndex = 0;
      let m;
      while ((m = pattern.exec(text))) {
        const book = m[1], ch = m[2], v1 = m[3], v2 = m[4];
        const isLocal = (typeof LOCAL_BOOKS !== 'undefined') && LOCAL_BOOKS.includes(book);
        if (isLocal) continue; // already instant from embedded data — nothing to preload
        const key = `${book}|${ch}:${v1}${v2 ? '-' + v2 : ''}`;
        if (seen.has(key)) continue;
        seen.add(key);
        out.push({ book, ch, v1, v2 });
      }
    });
    return out;
  }

  let preloadRunToken = 0;

  window.preloadSessionScriptures = async function (s, onProgress) {
    const myToken = ++preloadRunToken;
    const refs = collectSessionReferences(s);
    const pref = (typeof CURRENT_TRANSLATION !== 'undefined') ? CURRENT_TRANSLATION : 'ASV';
    let done = 0;
    const total = refs.length;
    if (onProgress) onProgress(done, total);
    if (!total) return { done: 0, total: 0 };

    for (const r of refs) {
      if (myToken !== preloadRunToken) return { done, total }; // superseded by a newer preload/session change
      const key = cacheKey(r.book, r.ch, r.v1, r.v2, apiTranslationFor(pref));
      if (!readCache(key)) {
        try { await fetchExternalVerse(r.book, r.ch, r.v1, r.v2, pref); }
        catch (e) { /* leave uncached — clicking it later will just retry the fetch */ }
      }
      done++;
      if (onProgress) onProgress(done, total);
    }
    return { done, total };
  };

  window.countCachedSessionScriptures = function (s) {
    const refs = collectSessionReferences(s);
    const pref = (typeof CURRENT_TRANSLATION !== 'undefined') ? CURRENT_TRANSLATION : 'ASV';
    const apiTrans = apiTranslationFor(pref);
    let cached = 0;
    refs.forEach(r => { if (readCache(cacheKey(r.book, r.ch, r.v1, r.v2, apiTrans))) cached++; });
    return { cached, total: refs.length };
  };

  // Wires the "Scriptures preloaded: X of Y" bar at the top of the teacher
  // script for the currently-shown session. Called from main.js's render().
  window.wirePreloadBar = function (s) {
    const statusEl = document.getElementById('preload-status');
    const btn = document.getElementById('preload-btn');
    if (!statusEl || !btn) return;

    function refreshStatus() {
      const { cached, total } = window.countCachedSessionScriptures(s);
      if (total === 0) {
        statusEl.textContent = 'All of today’s references are local — nothing to preload.';
        btn.style.display = 'none';
      } else {
        statusEl.textContent = `Scriptures preloaded: ${cached} of ${total}`;
        btn.style.display = cached >= total ? 'none' : 'inline-block';
      }
    }

    refreshStatus();
    btn.onclick = function () {
      btn.disabled = true;
      btn.textContent = 'Preloading…';
      window.preloadSessionScriptures(s, (done, total) => {
        statusEl.textContent = `Scriptures preloaded: ${done} of ${total}`;
      }).then(() => {
        btn.disabled = false;
        btn.textContent = '⬇ Preload Scriptures for Today';
        refreshStatus();
      });
    };
  };
})();
