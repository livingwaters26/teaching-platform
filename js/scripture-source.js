// scripture-source.js — live ESV/BSB lookup for books that don't have an embedded
// translation file (a data/*-scripture.js like daniel-scripture.js/john-scripture.js).
// Daniel, Revelation, and John keep using their embedded files untouched — nothing here
// changes how those render. Any other book (Matthew now, Acts and later books next)
// resolves its chapter text through here instead of shipping another giant embedded file.
//
// ESV is tried first, but ONLY if Will has pasted his own API key into ESV_API_KEY below —
// he has to create that key himself (free, non-commercial) at https://api.esv.org; this
// app never creates accounts on anyone's behalf. Worth knowing going in: the ESV API
// requires a custom Authorization header on every request, and a custom header on a
// cross-origin fetch always triggers a CORS preflight — most APIs built assuming a
// server-side caller (which is what api.esv.org's own docs assume) don't answer that
// preflight, so ESV may simply fail silently from inside a browser. That's fine: this
// falls straight through to BSB, which IS confirmed CORS-friendly (served as plain static
// JSON off jsDelivr's CDN, no key, public domain, via github.com/wldeh/bible-api). Either
// way the reader never sees a raw error — they get ESV, or BSB, or (only if both are
// unreachable, e.g. no internet) the old "open in Bible Gateway" link, same as before.

const ESV_API_KEY = ''; // paste your own key here once you create one at https://api.esv.org

const SCRIPTURE_LIVE_CACHE_KEY = 'lw-live-scripture-v1';
let scriptureLiveCache = {};
try {
  const raw = localStorage.getItem(SCRIPTURE_LIVE_CACHE_KEY);
  if (raw) scriptureLiveCache = JSON.parse(raw);
} catch(e) {}

const scriptureLiveInFlight = {};

function saveScriptureLiveCache(){
  try { localStorage.setItem(SCRIPTURE_LIVE_CACHE_KEY, JSON.stringify(scriptureLiveCache)); } catch(e) {}
}

function scriptureLiveCacheKey(book, ch){ return `${book}:${ch}`; }

// Books with a real embedded translation file never go through the live lookup at all.
function hasEmbeddedScripture(book){
  return typeof SCRIPTURE_BOOKS !== 'undefined' && !!SCRIPTURE_BOOKS[book];
}

function getCachedLiveChapter(book, ch){
  return scriptureLiveCache[scriptureLiveCacheKey(book, ch)] || null;
}

// Parses the ESV API's "include-verse-numbers=true" text blob — e.g.
// "[1] In the beginning God created... [2] The earth was..." — into a plain verse array.
function parseEsvVerseBlob(text){
  let cleaned = (text || '').replace(/^[^\[]*/, ''); // drop any heading before the first [n]
  cleaned = cleaned.replace(/\s*\([A-Z0-9]{2,6}\)\s*$/, ''); // strip a trailing "(ESV)" copyright tag, belt-and-suspenders
  const parts = cleaned.split(/\[(\d+)\]\s*/).filter(p => p !== '');
  const verses = [];
  for (let i = 0; i < parts.length - 1; i += 2){
    verses.push(parts[i + 1].trim());
  }
  return verses;
}

// Add an entry here only if some future book's jsDelivr/BSB folder name isn't just its
// lowercase name (e.g. "1 Corinthians" would need a slug like "1corinthians" or "1-corinthians"
// — check github.com/wldeh/bible-api/tree/main/bibles/en-bsb/books before adding a book like that).
const SCRIPTURE_BOOK_SLUGS = {};
function bookSlugFor(book){
  return SCRIPTURE_BOOK_SLUGS[book] || book.toLowerCase().replace(/\s+/g, '');
}

async function fetchEsvChapter(book, ch){
  if (!ESV_API_KEY) return null; // not configured — skip straight to BSB
  const q = encodeURIComponent(`${book} ${ch}`);
  const url = `https://api.esv.org/v3/passage/text/?q=${q}&include-verse-numbers=true&include-headings=false&include-footnotes=false&include-short-copyright=false&include-passage-references=false`;
  const res = await fetch(url, { headers: { 'Authorization': 'Token ' + ESV_API_KEY } });
  if (!res.ok) throw new Error('ESV ' + res.status);
  const data = await res.json();
  const blob = (data.passages && data.passages[0]) || '';
  const verses = parseEsvVerseBlob(blob);
  if (!verses.length) throw new Error('ESV: no verses parsed');
  return verses;
}

async function fetchBsbChapter(book, ch){
  const slug = bookSlugFor(book);
  const url = `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-bsb/books/${slug}/chapters/${ch}.json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('BSB ' + res.status);
  const data = await res.json();
  const rows = (data && data.data) || [];
  if (!rows.length) throw new Error('BSB: no verses');
  return rows.map(r => r.text);
}

// Fires the actual network lookup in the background, caches success, and re-renders —
// but only if the reader is still looking at this same chapter when the fetch lands.
// Never throws; a total failure just leaves the plain Bible Gateway link in place.
function kickOffLiveScriptureFetch(book, ch){
  const key = scriptureLiveCacheKey(book, ch);
  if (scriptureLiveCache[key] || scriptureLiveInFlight[key]) return;
  scriptureLiveInFlight[key] = true;

  (async () => {
    let verses = null, translation = null;
    try {
      verses = await fetchEsvChapter(book, ch);
      translation = 'ESV';
    } catch(e) { /* fall through to BSB */ }

    if (!verses) {
      try {
        verses = await fetchBsbChapter(book, ch);
        translation = 'BSB';
      } catch(e) { /* nothing available live right now */ }
    }

    delete scriptureLiveInFlight[key];
    if (verses && verses.length) {
      scriptureLiveCache[key] = { translation, verses };
      saveScriptureLiveCache();
      // Only re-render if the reader hasn't navigated off this chapter while we waited.
      const stillHere = typeof SESSIONS !== 'undefined' && typeof current !== 'undefined' &&
        SESSIONS[current] && SESSIONS[current].book === book &&
        SESSIONS[current].chNum.replace(/[–—-].*/, '').trim() === ch;
      if (stillHere && typeof render === 'function') render();
    }
  })();
}
