/* Sittings = commute sessions from the phone/tablet notes app.
   This browser never records audio. It stores the exported text so a
   sitting can walk into the lesson that verse belongs to. */

const SITTINGS_KEY = 'lw-sittings-v1';

const CANON_BOOKS = [
  'Genesis','Exodus','Leviticus','Numbers','Deuteronomy',
  'Joshua','Judges','Ruth','1 Samuel','2 Samuel','1 Kings','2 Kings',
  '1 Chronicles','2 Chronicles','Ezra','Nehemiah','Esther','Job',
  'Psalm','Psalms','Proverbs','Ecclesiastes','Song of Solomon','Song of Songs',
  'Isaiah','Jeremiah','Lamentations','Ezekiel','Daniel',
  'Hosea','Joel','Amos','Obadiah','Jonah','Micah','Nahum','Habakkuk',
  'Zephaniah','Haggai','Zechariah','Malachi',
  'Matthew','Mark','Luke','John','Acts','Romans',
  '1 Corinthians','2 Corinthians','Galatians','Ephesians','Philippians','Colossians',
  '1 Thessalonians','2 Thessalonians','1 Timothy','2 Timothy','Titus','Philemon',
  'Hebrews','James','1 Peter','2 Peter','1 John','2 John','3 John','Jude','Revelation',
  'Tobit','Judith','Wisdom','Sirach','Baruch','1 Maccabees','2 Maccabees',
  'Between the Testaments'
];

function loadSittings(){
  try {
    const raw = localStorage.getItem(SITTINGS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) { return []; }
}
function saveSittings(list){
  localStorage.setItem(SITTINGS_KEY, JSON.stringify(list));
}

function newId(prefix){
  return prefix + '-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 7);
}

function detectBook(line){
  if (!line) return null;
  const clean = line.replace(/^[#>*\-\s]+/, '').trim();
  for (let i = 0; i < CANON_BOOKS.length; i++) {
    const b = CANON_BOOKS[i];
    const re = new RegExp('(?:^|\\b)' + b.replace(/\s+/g, '\\s+') + '(?:\\b|$)', 'i');
    if (re.test(clean)) return b === 'Psalms' ? 'Psalm' : b;
  }
  return null;
}

function detectRef(line){
  if (!line) return null;
  const m = line.match(/\b(\d?\s?[A-Za-z][A-Za-z]+(?:\s+[A-Za-z]+)?)\s+(\d{1,3}):(\d{1,3})(?:-(\d{1,3}))?/);
  if (m) {
    const book = detectBook(m[1]) || m[1];
    return { book: book, chapter: m[2], verse: m[3], verseEnd: m[4] || null, raw: m[0] };
  }
  const m2 = line.match(/\b(?:ch(?:apter)?\.?\s*)?(\d{1,3}):(\d{1,3})\b/i);
  if (m2) return { book: null, chapter: m2[1], verse: m2[2], verseEnd: null, raw: m2[0] };
  return null;
}

function detectTimestamp(line){
  const m = line && line.match(/\b(\d{1,2}:\d{2}(?::\d{2})?)\b/);
  return m ? m[1] : null;
}

function splitNoteBlocks(text){
  const normalized = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const chunks = normalized.split(/\n\s*\n+/);
  return chunks.map(c => c.trim()).filter(Boolean);
}

function parseNoteBlock(block, fallbackBook, fallbackDate, sourceName){
  const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
  if (!lines.length) return null;

  let book = detectBook(lines[0]) || fallbackBook;
  let ref = null;
  let timestamp = null;
  let context = '';
  let dateLabel = fallbackDate || '';
  const spoken = [];

  lines.forEach((line, idx) => {
    const lower = line.toLowerCase();
    if (lower.startsWith('context:')) {
      context = line.slice(line.indexOf(':') + 1).trim();
      return;
    }
    if (lower.startsWith('caption:') || lower.startsWith('verse context:')) {
      context = line.slice(line.indexOf(':') + 1).trim();
      return;
    }
    const maybeBook = detectBook(line);
    if (maybeBook && idx < 3) book = book || maybeBook;
    const maybeRef = detectRef(line);
    if (maybeRef && !ref) {
      ref = maybeRef;
      if (maybeRef.book) book = maybeRef.book;
    }
    const ts = detectTimestamp(line);
    if (ts && /time|stamp|•|·|\d{1,2}:\d{2}/i.test(line)) timestamp = timestamp || ts;
    const dateM = line.match(/\b(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}|[A-Z][a-z]+ \d{1,2},?\s+\d{4}|\d{4}-\d{2}-\d{2})\b/);
    if (dateM && !dateLabel) dateLabel = dateM[1];

    const isMeta = maybeBook && idx === 0
      || lower.startsWith('context:')
      || lower.startsWith('book')
      || (maybeRef && line.length < 40);
    if (!isMeta && idx > 0) spoken.push(line);
  });

  if (!spoken.length) {
    // last non-meta line is the spoken note
    const last = lines[lines.length - 1];
    if (last && !detectRef(last) && !/^context:/i.test(last)) spoken.push(last);
  }

  const text = spoken.join(' ').trim();
  if (!text && !context) return null;

  return {
    id: newId('note'),
    book: book || 'Unknown',
    chapter: ref ? String(ref.chapter) : '',
    verse: ref ? String(ref.verse) : '',
    refRaw: ref ? ref.raw : '',
    timestamp: timestamp || '',
    dateLabel: dateLabel,
    context: context,
    text: text || context,
    sourceFile: sourceName || '',
    clipPath: ''
  };
}

function parseExportText(raw, sourceName){
  const name = sourceName || '';
  const dateFromName = (name.match(/(\d{1,2}[-.]\d{1,2}[-.]\d{2,4})/) || [])[1] || '';
  const blocks = splitNoteBlocks(raw);
  const notes = [];
  let currentBook = null;
  let currentDate = dateFromName;
  let currentTitle = name.replace(/\.txt$/i, '');

  blocks.forEach(block => {
    const first = block.split('\n')[0].trim();
    if (/^all[_\s-]?notes/i.test(first) || /^today/i.test(first)) return;
    if (/^[A-Z][a-z]+ \d{1,2}, \d{4}$/.test(first) || /^\d{4}-\d{2}-\d{2}$/.test(first)) {
      currentDate = first;
      return;
    }
    const bookOnly = detectBook(first);
    if (bookOnly && block.split('\n').length === 1) {
      currentBook = bookOnly;
      currentTitle = first;
      return;
    }
    const note = parseNoteBlock(block, currentBook, currentDate, name);
    if (note) {
      if (note.book && note.book !== 'Unknown') currentBook = note.book;
      notes.push(note);
    }
  });
  return { title: currentTitle || name || 'Imported sitting', dateLabel: currentDate, notes };
}

function addSittingFromParse(parsed, sourceName){
  const sittings = loadSittings();
  const sitting = {
    id: newId('sit'),
    title: parsed.title || sourceName || 'Sitting',
    dateLabel: parsed.dateLabel || new Date().toLocaleDateString(),
    sourceFile: sourceName || '',
    importedAt: new Date().toISOString(),
    notes: parsed.notes
  };
  sittings.unshift(sitting);
  saveSittings(sittings);
  return sitting;
}

function deleteSitting(id){
  saveSittings(loadSittings().filter(s => s.id !== id));
}

function allImportedNotes(){
  const out = [];
  loadSittings().forEach(s => {
    (s.notes || []).forEach(n => out.push(Object.assign({ sittingId: s.id, sittingTitle: s.title, sittingDate: s.dateLabel }, n)));
  });
  return out;
}

function chapterOfLesson(chNum){
  if (!chNum) return '';
  return String(chNum).replace(/[\u2013\u2014-].*/, '').replace(/[^0-9].*/, '').trim();
}

function sittingNotesForLesson(book, chNum){
  const ch = chapterOfLesson(chNum);
  const bookLc = (book || '').toLowerCase();
  return allImportedNotes().filter(n => {
    const nb = (n.book || '').toLowerCase();
    if (nb !== bookLc && !(bookLc === 'psalm' && nb === 'psalms')) {
      // Between the Testaments sittings can attach to Daniel additions
      if (!(bookLc.indexOf('between') === 0 && /maccabees|azariah|daniel/i.test(nb))) return false;
    }
    if (!ch) return true;
    if (!n.chapter) return true;
    return String(n.chapter) === String(ch);
  });
}

function sittingsWithNotes(){
  return loadSittings().filter(s => s.notes && s.notes.length);
}

function jumpToNote(note){
  if (typeof SESSIONS === 'undefined') return false;
  const bookLc = (note.book || '').toLowerCase();
  const ch = String(note.chapter || '');
  let idx = SESSIONS.findIndex(s => s.book.toLowerCase() === bookLc && chapterOfLesson(s.chNum) === ch);
  if (idx < 0) idx = SESSIONS.findIndex(s => s.book.toLowerCase() === bookLc);
  if (idx < 0) return false;
  current = idx;
  if (typeof render === 'function') render();
  window.scrollTo(0, 0);
  return true;
}

function sittingNotesHTML(book, chNum){
  const notes = sittingNotesForLesson(book, chNum);
  if (!notes.length) return '';
  return `<div class="sitting-notes-callout">
    <div class="sitting-notes-label">From your sittings — pause-and-talk notes for this chapter</div>
    ${notes.map(n => `
      <div class="sitting-note">
        <div class="sitting-note-meta">${[n.refRaw || (n.verse ? 'v' + n.verse : ''), n.timestamp, n.sittingDate || n.dateLabel, n.sittingTitle].filter(Boolean).join(' · ')}</div>
        ${n.context ? `<div class="sitting-note-ctx">On screen: ${n.context}</div>` : ''}
        <div class="sitting-note-text">${n.text}</div>
      </div>
    `).join('')}
    <p class="sitting-notes-hint">These came from a commute export. Weave them in your voice. They do not print on the share screen.</p>
  </div>`;
}

function renderSittingsDesk(){
  const root = document.getElementById('sittings-list');
  if (!root) return;
  const sittings = loadSittings();
  const continueEl = document.getElementById('sittings-continue');
  if (continueEl) {
    const annotated = sittingsWithNotes();
    if (!annotated.length) {
      continueEl.innerHTML = '<p class="nav-drawer-note">Nothing annotated yet. Import a sitting export after a drive.</p>';
    } else {
      continueEl.innerHTML = annotated.slice(0, 8).map(s =>
        `<button class="sitting-chip" data-sit="${s.id}">${s.title} · ${s.notes.length} note${s.notes.length===1?'':'s'}</button>`
      ).join('');
    }
  }
  if (!sittings.length) {
    root.innerHTML = '<p class="planner-future-note">No sittings stored in this browser yet. On the phone: Pause → talk → Stop → Export from Today’s Notes → share the .txt here.</p>';
    return;
  }
  root.innerHTML = sittings.map(s => `
    <div class="sitting-card" data-sit="${s.id}">
      <div class="sitting-card-head">
        <strong>${s.title}</strong>
        <span>${s.dateLabel || ''} · ${s.notes.length} note${s.notes.length===1?'':'s'}</span>
      </div>
      ${(s.notes||[]).map(n => `
        <button class="sitting-note-jump" data-book="${n.book||''}" data-ch="${n.chapter||''}" data-nid="${n.id}">
          <span class="sitting-note-jump-ref">${n.book || ''} ${n.refRaw || (n.chapter ? n.chapter + (n.verse?':'+n.verse:'') : '')} ${n.timestamp||''}</span>
          <span class="sitting-note-jump-text">${(n.text||'').slice(0,140)}</span>
        </button>
      `).join('')}
      <button class="sitting-delete" data-del="${s.id}">Remove sitting from this browser</button>
    </div>
  `).join('');
}

function wireSittingsDesk(){
  const importBtn = document.getElementById('btn-import-sitting');
  const fileInput = document.getElementById('sitting-file');
  const pasteBtn = document.getElementById('btn-paste-sitting');
  const pasteBox = document.getElementById('sitting-paste');
  if (importBtn && fileInput) {
    importBtn.onclick = () => fileInput.click();
    fileInput.onchange = function(){
      const file = this.files && this.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(){
        const parsed = parseExportText(String(reader.result || ''), file.name);
        if (!parsed.notes.length) {
          alert('No notes found in that file. Check it looks like the commute export (book, verse/time, Context:, then your words).');
          return;
        }
        addSittingFromParse(parsed, file.name);
        renderSittingsDesk();
        if (typeof render === 'function') render();
      };
      reader.readAsText(file);
      this.value = '';
    };
  }
  if (pasteBtn && pasteBox) {
    pasteBtn.onclick = function(){
      const raw = pasteBox.value.trim();
      if (!raw) return;
      const parsed = parseExportText(raw, 'pasted-notes.txt');
      if (!parsed.notes.length) {
        alert('Could not see note blocks in that paste.');
        return;
      }
      addSittingFromParse(parsed, 'pasted-notes.txt');
      pasteBox.value = '';
      renderSittingsDesk();
      if (typeof render === 'function') render();
    };
  }
  const list = document.getElementById('sittings-list');
  if (list) {
    list.addEventListener('click', function(e){
      const del = e.target.closest('[data-del]');
      if (del) {
        deleteSitting(del.getAttribute('data-del'));
        renderSittingsDesk();
        if (typeof render === 'function') render();
        return;
      }
      const jump = e.target.closest('.sitting-note-jump');
      if (jump) {
        const ok = jumpToNote({ book: jump.getAttribute('data-book'), chapter: jump.getAttribute('data-ch') });
        if (ok) closeSittings();
      }
    });
  }
  const cont = document.getElementById('sittings-continue');
  if (cont) {
    cont.addEventListener('click', function(e){
      const chip = e.target.closest('[data-sit]');
      if (!chip) return;
      openSittings();
      const card = document.querySelector('.sitting-card[data-sit="'+chip.getAttribute('data-sit')+'"]');
      if (card) card.scrollIntoView({ block: 'center' });
    });
  }
}

function openSittings(){
  const m = document.getElementById('sittings-modal');
  if (!m) return;
  renderSittingsDesk();
  m.classList.add('open');
  if (typeof closeDrawer === 'function') closeDrawer();
}
function closeSittings(){
  const m = document.getElementById('sittings-modal');
  if (m) m.classList.remove('open');
}
