function wireNotesSection(){
  const section = document.querySelector('.notes-section');
  if (!section) return;
  const key = section.dataset.notesKey;
  let starter = [];
  try { starter = JSON.parse(section.dataset.starter); } catch(e) {}

  function loadNotes(){
    const stored = localStorage.getItem(key);
    if (stored === null) {
      if (starter.length) { localStorage.setItem(key, JSON.stringify(starter)); return starter.slice(); }
      return [];
    }
    try { return JSON.parse(stored); } catch(e) { return []; }
  }
  function saveNotes(notes){ localStorage.setItem(key, JSON.stringify(notes)); }

  function renderNotes(){
    const notes = loadNotes();
    const list = section.querySelector('.notes-list');
    list.innerHTML = notes.map((n,i) => `
      <div class="notes-item">
        <div class="notes-item-text">${n}</div>
        <button class="notes-item-del" data-idx="${i}">&times;</button>
      </div>
    `).join('');
    list.querySelectorAll('.notes-item-del').forEach(btn => {
      btn.addEventListener('click', function(){
        const notes = loadNotes();
        notes.splice(parseInt(this.dataset.idx), 1);
        saveNotes(notes);
        renderNotes();
      });
    });
  }

  const input = section.querySelector('.notes-input');
  const addBtn = section.querySelector('.notes-add-btn');
  function addNote(){
    const val = input.value.trim();
    if (!val) return;
    const notes = loadNotes();
    notes.push(val);
    saveNotes(notes);
    input.value = '';
    renderNotes();
  }
  addBtn.addEventListener('click', addNote);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') addNote(); });

  renderNotes();
}