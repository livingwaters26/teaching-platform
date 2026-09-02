const STOP_WORDS = new Set(['the','a','an','is','are','was','were','be','been','of','to','in','on','at','for','with','about','what','why','how','does','did','do','and','or','but','that','this','it','who','which','when','where','can','could','would','should','will','shall','has','have','had','not','no','so','if','then','than','as','by','from','their','they','his','her','him','she','he']);

function tokenize(text){
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(w => w.length > 2 && !STOP_WORDS.has(w));
}

let externalCommentary = [];
fetch('../data/revelation-commentary-index.json')
  .then(r => r.ok ? r.json() : [])
  .then(data => { externalCommentary = data; })
  .catch(() => { externalCommentary = []; });

function searchAllContent(query){
  const keywords = tokenize(query);
  if (keywords.length === 0) return [];
  const results = [];

  SESSIONS.forEach(s => {
    const label = `${s.book} ${s.chNum} — ${s.chapterLabel}`;
    function scoreAndPush(text, sourceType){
      const lower = text.toLowerCase();
      const hits = keywords.filter(k => lower.includes(k)).length;
      if (hits > 0) results.push({ score: hits, label, sourceType, text });
    }
    s.topics.forEach(t => scoreAndPush(t.title + '. ' + t.body, 'Topic Card'));
    s.wordStudies.forEach(w => scoreAndPush(w.word + ': ' + w.meaning, 'Word Study'));
    if (s.doctrinal) scoreAndPush(s.doctrinal, 'Doctrinal Note');
    s.points.forEach(p => scoreAndPush(p, 'Commentary'));
    s.hist.forEach(h => scoreAndPush(h, 'Historical Background'));
    s.opens.forEach(o => scoreAndPush(o, 'Open Question'));
    if (s.story) {
      scoreAndPush(s.story.scene, 'Story — Scene');
      scoreAndPush(s.story.modern, 'Story — Modern Parallel');
    }
  });

  externalCommentary.forEach(c => {
    const label = `Revelation ${c.chapter} — Full Commentary`;
    function scoreAndPush(text, sourceType){
      const lower = text.toLowerCase();
      const hits = keywords.filter(k => lower.includes(k)).length;
      if (hits > 0) results.push({ score: hits, label, sourceType, text: text });
    }
    if (c.differentViews) scoreAndPush(c.differentViews, 'Different Views (Traditions Compared)');
    if (c.myReading) scoreAndPush(c.myReading, 'My Reading (Original Language & History)');
  });

  SESSIONS.forEach(s => {
    const label = `${s.book} ${s.chNum} — ${s.chapterLabel}`;
    const notesKey = `lw-notes-${s.book}-${s.chNum}`;
    const stored = localStorage.getItem(notesKey);
    if (stored) {
      try {
        const notes = JSON.parse(stored);
        notes.forEach(n => {
          const lower = n.toLowerCase();
          const hits = keywords.filter(k => lower.includes(k)).length;
          if (hits > 0) results.push({ score: hits, label, sourceType: 'Your Study Notes', text: n });
        });
      } catch(e) {}
    }
  });

  results.sort((a,b) => b.score - a.score);
  return results.slice(0, 6);
}

function wireQASection(){
  const section = document.querySelector('.qa-section');
  if (!section) return;
  const input = section.querySelector('.qa-input');
  const btn = section.querySelector('.qa-search-btn');
  const resultsBox = section.querySelector('.qa-results');

  function doSearch(){
    const query = input.value.trim();
    if (!query) { resultsBox.innerHTML = ''; return; }
    const results = searchAllContent(query);
    if (results.length === 0) {
      resultsBox.innerHTML = '<div class="qa-no-results">No obvious matches in existing material — this might be a genuinely open question worth researching separately, or answering from your own understanding.</div>';
      return;
    }
    resultsBox.innerHTML = results.map(r => `
      <div class="qa-result-item">
        <div class="qa-result-source">${r.sourceType} — ${r.label}</div>
        <div>${typeof linkify === 'function' ? linkify(r.text) : r.text}</div>
      </div>
    `).join('');
  }

  btn.addEventListener('click', doSearch);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
}