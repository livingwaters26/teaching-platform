// recordings.js — "My Recordings": import your own audio (or your own text) for a whole
// book, then cue straight to wherever the current lesson's chapter starts.
//
// Storage is entirely client-side, same pattern as sittings.js/cohorts.js:
//  - Audio files can be large (a whole book), so the actual Blob lives in IndexedDB, not
//    localStorage (which has a small quota and can't hold binary well).
//  - Chapter cue-points (where chapter N starts inside the recording, in seconds) and any
//    personal text you paste in instead of a translation are small, so those live in
//    localStorage like the rest of the app's saved state.
//
// A book's own personal text (if you've saved any for a given chapter) takes priority over
// everything else in js/render.js's renderScriptureBlock — it's yours, so it wins over both
// the embedded translation files and the live ESV/BSB lookup in js/scripture-source.js.

const RECORDINGS_DB_NAME = 'lw-recordings-db';
const RECORDINGS_STORE = 'audio';
const RECORDING_CUES_KEY = 'lw-recording-cues-v1';   // { [book]: { [chNum]: seconds } }
const RECORDING_TEXT_KEY = 'lw-recording-text-v1';   // { [book]: { [chNum]: "pasted text..." } }
const RECORDING_BOOKS_KEY = 'lw-recording-books-v1'; // [book, book, ...] — which books have audio saved

let recordingsDbPromise = null;
function openRecordingsDb(){
  if (recordingsDbPromise) return recordingsDbPromise;
  recordingsDbPromise = new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') { reject(new Error('IndexedDB unavailable')); return; }
    const req = indexedDB.open(RECORDINGS_DB_NAME, 1);
    req.onupgradeneeded = function(){
      req.result.createObjectStore(RECORDINGS_STORE);
    };
    req.onsuccess = function(){ resolve(req.result); };
    req.onerror = function(){ reject(req.error); };
  });
  return recordingsDbPromise;
}

function saveBookAudio(book, file){
  return openRecordingsDb().then(db => new Promise((resolve, reject) => {
    const tx = db.transaction(RECORDINGS_STORE, 'readwrite');
    tx.objectStore(RECORDINGS_STORE).put({ blob: file, name: file.name, type: file.type, savedAt: Date.now() }, book);
    tx.oncomplete = function(){
      const books = loadRecordingBooks();
      if (!books.includes(book)) { books.push(book); saveRecordingBooks(books); }
      resolve();
    };
    tx.onerror = function(){ reject(tx.error); };
  }));
}

function getBookAudio(book){
  return openRecordingsDb().then(db => new Promise((resolve, reject) => {
    const tx = db.transaction(RECORDINGS_STORE, 'readonly');
    const req = tx.objectStore(RECORDINGS_STORE).get(book);
    req.onsuccess = function(){ resolve(req.result || null); };
    req.onerror = function(){ reject(req.error); };
  }));
}

function deleteBookAudio(book){
  return openRecordingsDb().then(db => new Promise((resolve, reject) => {
    const tx = db.transaction(RECORDINGS_STORE, 'readwrite');
    tx.objectStore(RECORDINGS_STORE).delete(book);
    tx.oncomplete = function(){
      saveRecordingBooks(loadRecordingBooks().filter(b => b !== book));
      resolve();
    };
    tx.onerror = function(){ reject(tx.error); };
  }));
}

function loadRecordingBooks(){
  try { return JSON.parse(localStorage.getItem(RECORDING_BOOKS_KEY) || '[]'); } catch(e) { return []; }
}
function saveRecordingBooks(list){
  try { localStorage.setItem(RECORDING_BOOKS_KEY, JSON.stringify(list)); } catch(e) {}
}
function bookHasRecording(book){
  return loadRecordingBooks().includes(book);
}

function loadJsonMap(key){
  try { return JSON.parse(localStorage.getItem(key) || '{}'); } catch(e) { return {}; }
}
function saveJsonMap(key, obj){
  try { localStorage.setItem(key, JSON.stringify(obj)); } catch(e) {}
}

function getChapterCue(book, ch){
  const map = loadJsonMap(RECORDING_CUES_KEY);
  return (map[book] && typeof map[book][ch] === 'number') ? map[book][ch] : null;
}
function setChapterCue(book, ch, seconds){
  const map = loadJsonMap(RECORDING_CUES_KEY);
  if (!map[book]) map[book] = {};
  map[book][ch] = seconds;
  saveJsonMap(RECORDING_CUES_KEY, map);
}

function getChapterPersonalText(book, ch){
  const map = loadJsonMap(RECORDING_TEXT_KEY);
  return (map[book] && map[book][ch]) ? map[book][ch] : null;
}
function setChapterPersonalText(book, ch, text){
  const map = loadJsonMap(RECORDING_TEXT_KEY);
  if (!map[book]) map[book] = {};
  if (text && text.trim()) map[book][ch] = text.trim();
  else if (map[book]) delete map[book][ch];
  saveJsonMap(RECORDING_TEXT_KEY, map);
}

function fmtCueTime(seconds){
  if (seconds == null) return '';
  const h = Math.floor(seconds/3600), m = Math.floor((seconds%3600)/60), s = Math.floor(seconds%60);
  return h > 0
    ? `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`
    : `${m}:${String(s).padStart(2,'0')}`;
}
function parseCueTime(str){
  if (!str) return null;
  const parts = str.trim().split(':').map(p => parseInt(p, 10));
  if (parts.some(isNaN)) return null;
  let seconds = 0;
  parts.forEach(p => { seconds = seconds * 60 + p; });
  return seconds;
}

// ---------- In-lesson widget: shows up in teacherHTML when this book has a recording ----------

function bookRecordingWidgetHTML(s){
  if (!bookHasRecording(s.book)) return '';
  const ch = s.chNum.replace(/[–—-].*/, '').trim();
  const cue = getChapterCue(s.book, ch);
  return `
    <div class="recording-widget" data-book="${s.book}" data-ch="${ch}" data-cue="${cue == null ? '' : cue}">
      <div class="recording-widget-label">🎧 Your Recording — ${s.book}</div>
      <div class="recording-widget-status">Loading your recording&hellip;</div>
      <audio class="recording-widget-audio" controls preload="none" style="width:100%; display:none;"></audio>
      <div class="recording-widget-controls" style="display:none;">
        ${cue != null
          ? `<button type="button" class="recording-widget-jump">&#9654; Play from your cue for this chapter (${fmtCueTime(cue)})</button>`
          : `<span class="recording-widget-nocue">No cue point saved for this chapter yet — set one in "My Recordings."</span>`}
      </div>
    </div>
  `;
}

function wireBookRecordingWidget(){
  const widget = document.querySelector('.recording-widget');
  if (!widget) return;
  const book = widget.dataset.book;
  const cue = widget.dataset.cue !== '' ? parseFloat(widget.dataset.cue) : null;
  const statusEl = widget.querySelector('.recording-widget-status');
  const audioEl = widget.querySelector('.recording-widget-audio');
  const controlsEl = widget.querySelector('.recording-widget-controls');
  const jumpBtn = widget.querySelector('.recording-widget-jump');

  getBookAudio(book).then(rec => {
    if (!rec || !rec.blob) { statusEl.textContent = 'Recording not found — try re-importing it in "My Recordings."'; return; }
    const url = URL.createObjectURL(rec.blob);
    audioEl.src = url;
    audioEl.style.display = 'block';
    statusEl.style.display = 'none';
    controlsEl.style.display = 'block';
    if (jumpBtn && cue != null) {
      jumpBtn.addEventListener('click', function(){
        audioEl.currentTime = cue;
        audioEl.play();
      });
    }
  }).catch(() => { statusEl.textContent = 'Could not load your recording in this browser.'; });
}

// ---------- "My Recordings" modal ----------

function allBooksInCourse(){
  const books = [];
  if (typeof SESSIONS !== 'undefined') {
    SESSIONS.forEach(s => { if (!books.includes(s.book)) books.push(s.book); });
  }
  return books;
}

function recordingsBookCardHTML(book){
  const hasAudio = bookHasRecording(book);
  const chapters = (typeof SESSIONS !== 'undefined') ? SESSIONS.filter(s => s.book === book) : [];
  const cueMap = loadJsonMap(RECORDING_CUES_KEY)[book] || {};
  const textMap = loadJsonMap(RECORDING_TEXT_KEY)[book] || {};

  const cueRows = chapters.map(s => {
    const ch = s.chNum.replace(/[–—-].*/, '').trim();
    const cue = (typeof cueMap[ch] === 'number') ? cueMap[ch] : null;
    return `
      <div class="recording-cue-row" data-book="${book}" data-ch="${ch}">
        <span class="recording-cue-label">${s.chapterLabel}</span>
        <input type="text" class="recording-cue-input" placeholder="m:ss" value="${cue != null ? fmtCueTime(cue) : ''}">
        <button type="button" class="recording-cue-set-current" ${hasAudio ? '' : 'disabled'}>Set to current</button>
      </div>`;
  }).join('');

  const textRows = chapters.map(s => {
    const ch = s.chNum.replace(/[–—-].*/, '').trim();
    const saved = textMap[ch];
    return `
      <div class="recording-text-row" data-book="${book}" data-ch="${ch}">
        <div class="recording-text-row-head"><strong>${s.chapterLabel}</strong>${saved ? ' <span style="color:#047857;">— your text saved</span>' : ''}</div>
        <textarea class="recording-text-input" placeholder="Paste your own text for this chapter (used instead of any translation)...">${saved || ''}</textarea>
        <div style="display:flex; gap:8px;">
          <button type="button" class="recording-text-save">Save this chapter's text</button>
          ${saved ? '<button type="button" class="recording-text-clear">Clear</button>' : ''}
        </div>
      </div>`;
  }).join('');

  return `
    <div class="sitting-card" data-recording-book="${book}">
      <div class="sitting-card-head"><strong>${book}</strong><span>${hasAudio ? 'Audio imported' : 'No audio imported'}</span></div>
      <input type="file" class="recording-file-input" accept="audio/*" style="display:none">
      <button type="button" class="notes-add-btn recording-upload-btn">${hasAudio ? '&#8635; Replace audio for ' + book : '&#11014; Import audio for ' + book}</button>
      ${hasAudio ? `<button type="button" class="sitting-delete recording-delete-btn" style="margin-left:8px;">Remove audio</button><audio class="recording-preview-audio" controls preload="none" style="width:100%; margin-top:10px;"></audio>` : ''}
      <div class="nav-section-label" style="color:#7c3aed; margin-top:14px;">Chapter cue points (seconds into the recording where each chapter starts)</div>
      <div class="recording-cue-list">${cueRows}</div>
      <div class="nav-section-label" style="color:#0369a1; margin-top:14px;">Your own text (optional, per chapter — overrides any translation)</div>
      <details><summary style="cursor:pointer; font-size:0.82rem; color:#6b5c3c;">Show chapter text boxes</summary>${textRows}</details>
    </div>
  `;
}

function renderRecordingsList(){
  const box = document.getElementById('recordings-list');
  if (!box) return;
  const books = allBooksInCourse();
  if (!books.length) { box.innerHTML = '<p style="font-size:0.82rem; color:#6b5c3c; font-style:italic;">No books loaded yet.</p>'; return; }
  box.innerHTML = books.map(recordingsBookCardHTML).join('');

  // Preview players for books that already have audio
  books.filter(bookHasRecording).forEach(book => {
    const card = box.querySelector(`[data-recording-book="${CSS.escape(book)}"]`);
    const audioEl = card && card.querySelector('.recording-preview-audio');
    if (!audioEl) return;
    getBookAudio(book).then(rec => {
      if (rec && rec.blob) audioEl.src = URL.createObjectURL(rec.blob);
    }).catch(() => {});
  });
}

function wireRecordingsDesk(){
  const box = document.getElementById('recordings-list');
  if (!box || box.dataset.wired) { renderRecordingsList(); return; }
  box.dataset.wired = '1';

  box.addEventListener('click', function(e){
    const card = e.target.closest('[data-recording-book]');
    if (!card) return;
    const book = card.dataset.recordingBook;

    if (e.target.classList.contains('recording-upload-btn')) {
      card.querySelector('.recording-file-input').click();
    } else if (e.target.classList.contains('recording-delete-btn')) {
      if (confirm(`Remove the imported audio for ${book}? Cue points stay saved.`)) {
        deleteBookAudio(book).then(renderRecordingsList);
      }
    } else if (e.target.classList.contains('recording-cue-set-current')) {
      const row = e.target.closest('.recording-cue-row');
      const previewAudio = card.querySelector('.recording-preview-audio');
      if (previewAudio && !isNaN(previewAudio.currentTime)) {
        row.querySelector('.recording-cue-input').value = fmtCueTime(previewAudio.currentTime);
      }
    } else if (e.target.classList.contains('recording-text-save')) {
      const row = e.target.closest('.recording-text-row');
      setChapterPersonalText(row.dataset.book, row.dataset.ch, row.querySelector('.recording-text-input').value);
      renderRecordingsList();
    } else if (e.target.classList.contains('recording-text-clear')) {
      const row = e.target.closest('.recording-text-row');
      setChapterPersonalText(row.dataset.book, row.dataset.ch, '');
      renderRecordingsList();
    }
  });

  box.addEventListener('change', function(e){
    const card = e.target.closest('[data-recording-book]');
    if (!card) return;
    const book = card.dataset.recordingBook;
    if (e.target.classList.contains('recording-file-input')) {
      const file = e.target.files[0];
      if (file) saveBookAudio(book, file).then(renderRecordingsList);
    }
  });

  box.addEventListener('blur', function(e){
    if (e.target.classList && e.target.classList.contains('recording-cue-input')) {
      const row = e.target.closest('.recording-cue-row');
      const seconds = parseCueTime(e.target.value);
      if (seconds != null) setChapterCue(row.dataset.book, row.dataset.ch, seconds);
    }
  }, true);

  renderRecordingsList();
}
