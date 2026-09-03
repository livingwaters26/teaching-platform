// Current display translation. Defaults to ASV since that's what's built for most books.
// Falls back automatically to whatever translation IS available for a given book if the
// preferred one isn't there (e.g. NRSVCE/CEV only cover John, Daniel, Revelation so far).
if (typeof window !== "undefined") { window.CURRENT_TRANSLATION = window.CURRENT_TRANSLATION || "ASV"; }

function getAvailableTranslations(book) {
  if (typeof SCRIPTURE_BOOKS === 'undefined' || !SCRIPTURE_BOOKS[book]) return [];
  return Object.keys(SCRIPTURE_BOOKS[book]);
}

function getVersesForChapter(book, ch) {
  if (typeof SCRIPTURE_BOOKS === 'undefined' || !SCRIPTURE_BOOKS[book]) return null;
  const bookTranslations = SCRIPTURE_BOOKS[book];
  const preferred = (typeof CURRENT_TRANSLATION !== 'undefined') ? CURRENT_TRANSLATION : 'ASV';
  if (bookTranslations[preferred] && bookTranslations[preferred][ch]) {
    return bookTranslations[preferred][ch];
  }
  // Fallback: use whatever translation is actually available for this book
  const available = Object.keys(bookTranslations);
  for (let i = 0; i < available.length; i++) {
    if (bookTranslations[available[i]][ch]) return bookTranslations[available[i]][ch];
  }
  return null;
}

const TRANSLATION_LABELS = {
  'ASV': 'ASV — American Standard Version',
  'NIV': 'NIV — New International Version',
  'NASB': 'NASB — New American Standard Bible',
  'NRSVCE': 'NRSVCE — New Revised Standard, Catholic Edition',
  'RSVCE': 'RSVCE — Revised Standard Version, Catholic Edition',
  'CEV': 'CEV — Contemporary English Version'
};

function bibleLink(book, chNum, verse){
  const ch = chNum.replace(/[\u2013\u2014-].*/, '').trim();
  const ref = verse ? `${book}+${ch}:${verse}` : `${book}+${ch}`;
  const preferred = (typeof CURRENT_TRANSLATION !== 'undefined') ? CURRENT_TRANSLATION : 'ASV';
  return `https://www.biblegateway.com/passage/?search=${encodeURIComponent(ref).replace(/%2B/g, '+')}&version=${preferred}`;
}

function linkifyReferences(text, localBooks){
  // Matches things like "Jeremiah 51:13" or "Isaiah 6:1-3" or "1 Kings 17:1"
  // Every match becomes a clickable trigger for the floating scripture popup box
  // (see js/versebox.js) — local books (Daniel/Revelation/John) resolve instantly
  // from the embedded data, everything else does a cached live lookup.
  const pattern = /\b(\d\s?[A-Z][a-z]+|[A-Z][a-z]+)\s(\d{1,3}):(\d{1,3})(?:-(\d{1,3}))?\b/g;
  return text.replace(pattern, function(match, book, ch, v1, v2){
    const isLocal = localBooks && localBooks.includes(book);
    const cls = isLocal ? 'verse-ref-link verse-ref-local' : 'verse-ref-link verse-ref-external';
    return `<a href="#" class="${cls}" data-book="${book}" data-ch="${ch}" data-v1="${v1}" data-v2="${v2 || ''}" onclick="return false;">${match}</a>`;
  });
}

function renderScriptureBlock(s){
  const ch = s.chNum.replace(/[\u2013\u2014-].*/, '').trim();
  let verses = getVersesForChapter(s.book, ch);
  if (verses) {
    const versesJson = JSON.stringify(verses).replace(/"/g, '&quot;');
    const reader = `
      <div class="reader-bar" data-verses="${versesJson}">
        <select class="reader-voice"></select>
        <button class="reader-play">🔊 Read Aloud</button>
        <button class="reader-pause" style="display:none;">⏸ Pause</button>
        <button class="reader-stop" style="display:none;">⏹ Stop</button>
      </div>`;
    return reader + '<div class="scripture-text">' + verses.map((v,i)=>`<span class="verse-wrap" data-vidx="${i}"><span class="vn">${i+1}</span> ${v} </span>`).join('') + '</div>';
  }
  return `<a class="scripture-link" href="${bibleLink(s.book, s.chNum)}" target="_blank">Open ${s.book} ${s.chNum} to read aloud &rarr;</a>`;
}

let current = 0;

// Cross-reference auto-linking: books already loaded in this app (Daniel, Revelation)
// are left as plain text — everything else links out to Bible Gateway (ASV).
const LOCAL_BOOKS = ['Daniel', 'Revelation', 'John'];
function linkify(text){
  if (!text) return text;
  return linkifyReferences(text, LOCAL_BOOKS);
}

function displayHTML(s){
  const heroImg = (s.hero && s.hero.src)
    ? `<div class="hero-image"><img src="${s.hero.src}" alt="${s.hero.alt || ''}" onerror="this.parentElement.style.display='none'"><div class="hero-caption">${s.hero.caption || ''}</div></div>`
    : (s.book === 'Daniel' && s.chNum === '1')
    ? `<div class="hero-image"><img src="images/babylon-gate.jpg" alt="The Ishtar Gate of ancient Babylon"><div class="hero-caption">The Ishtar Gate — the ceremonial entrance into the Babylon where Daniel lived and served.</div></div>`
    : '';
  const topicsHTML = (s.topics && s.topics.length) ? s.topics.map(t => `
    <div class="topic-card">
      <div class="topic-icon">${t.icon}</div>
      <div class="topic-title">${t.title}</div>
      <div class="topic-body">${linkify(t.body)}</div>
    </div>
  `).join('') : '';

  const wordStudiesHTML = (s.wordStudies && s.wordStudies.length) ? `
    <div class="word-cards-wrap">
      <div class="word-cards-label">📖 Words Worth Knowing</div>
      <div class="word-cards-grid">
        ${s.wordStudies.map(w => `
          <div class="word-card">
            <div class="word-card-term">${w.word}</div>
            <div class="word-card-orig">${w.orig}</div>
            <div class="word-card-meaning">${linkify(w.meaning)}</div>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  return `
    <div class="pane-label">Shareable Display — Share This on Zoom</div>
    <div class="session-head">
      <div class="eyebrow">${s.book}</div>
      <h1>${s.chapterLabel}</h1>
    </div>
    ${heroImg}
    ${typeof visualsHTML === 'function' ? visualsHTML(s) : ''}
    <div class="block reading">
      <div class="block-label"><span>Scripture (${(typeof CURRENT_TRANSLATION !== 'undefined') ? CURRENT_TRANSLATION : 'ASV'})</span></div>
      ${renderScriptureBlock(s)}
    </div>
    ${topicsHTML ? `<div class="topics-grid">${topicsHTML}</div>` : ''}
    ${wordStudiesHTML}
    ${(s.hist && s.hist.length) ? `<div class="block history">
      <div class="block-label"><span>Background &amp; Context</span></div>
      ${s.hist.map(h => `<div class="point">${linkify(h)}</div>`).join('')}
    </div>` : ''}
    ${(s.views && s.views.length) ? `<div class="block views-block">
      <div class="block-label"><span>How Readers Take This</span></div>
      <p class="views-lead">Same text. Different chairs at the table. We are reading to understand — not to crown a camp.</p>
      ${s.views.map(v => `<div class="view-card"><div class="view-name">${v.name}</div><div class="view-body">${linkify(v.body)}</div></div>`).join('')}
    </div>` : ''}
    ${s.apocryphaNote ? `<div class="block apocrypha-block">
      <div class="block-label"><span>What Some Bibles Include Here</span></div>
      <div class="point">${linkify(s.apocryphaNote)}</div>
    </div>` : ''}
  `;
}

const BOOK_AUTHORS = {
  'Daniel': 'the prophet Daniel',
  'Revelation': 'John',
  'John': 'John'
};

const BOOK_INTROS = {
  'John': `<p><strong>Before we open to chapter one, here's the setting for the whole book of John.</strong> This Gospel is traditionally attributed to the apostle John, likely written later than Matthew, Mark, and Luke — many scholars place it around AD 85–95, though that date isn't settled. It's structurally different from the other three Gospels: no birth narrative, no parables in the usual sense, and it's built around seven specific miracles John calls "signs," each pointing to who Jesus is. John states his own purpose plainly near the end of the book: these things are written so readers would believe Jesus is the Christ, the Son of God, and have life in his name. That stated purpose is worth keeping in view through every chapter.</p>`,
  'Daniel': `<p><strong>This group has already walked a long stretch of the Old Testament.</strong> That 270 days was the map. This study is the slow walk through one book that map kept pointing at. You have heard Daniel at surface speed. We are going back through it on purpose, chapter by chapter, because Revelation will use this book as its dictionary — beasts, horns, times, a kingdom that does not come from the quarry of empire.</p>
    <p><strong>The path for this room is Daniel, then Revelation, then John.</strong> Do not skip ahead to the churches or the thousand years until this book has been heard in order. Chapters 1–6 are court stories. Chapters 7–12 are visions in Daniel's own voice. We will name the main views when a text forks. We will not crown a camp on night one.</p>
    <p>Daniel was a young Jewish noble taken in 605 BC, the first of three deportations (605, 597, 586). He served under Nebuchadnezzar, Belshazzar, Darius, and into the year of Cyrus — a life that spans the whole exile. Tonight is chapter 1: a name change, a table, and a resolve.</p>`,
  'Revelation': `<p><strong>You just finished Daniel on purpose.</strong> John is going to spend this book rereading that one: a beast from the sea, a mouth that wears out the saints, times and half a time, a kingdom given to one like a son of man. When something in Revelation feels like a code, flip back to Daniel before you buy a chart.</p>
    <p>It was written by John — most likely the apostle — exiled on Patmos. Date is honestly disputed: Nero years (mid-60s) or Domitian years (mid-90s). Both dates change how some scenes land; we will not pretend that is settled. It is a letter to seven real churches in Asia Minor under pressure to bow to Rome. After this book we start John, where the same writer (or the same circle) tells you who the Lamb is before you ever met the throne.</p>`
};

function teacherHTML(s){
  const bookName = BOOK_AUTHORS[s.book] || s.book;
  const isFirstOfBook = current === 0 || SESSIONS[current-1].book !== s.book;
  let script = '';

  if (isFirstOfBook && BOOK_INTROS[s.book]) {
    script += BOOK_INTROS[s.book];
  }

  script += `<p><strong>Welcome to Lesson ${current+1}: ${s.chapterLabel}.</strong> Right now, on your screen, your group is looking at ${s.book} ${s.chNum} — that's the passage we're reading today. <em>Pacing note: this lesson is built for a 30–45 minute discussion — reading (5 min), walkthrough and discussion (15–25 min), open questions (5–10 min), close (5 min). Adjust to your group's pace; these are estimates, not a stopwatch.</em></p>`;
  script += `<p>Go ahead and read the full chapter aloud now, straight from the screen — either you read it, or invite someone in the group to read it. Don't summarize it first. Let them hear it in ${bookName}'s own words before we talk about any of it.</p>`;

  const scriptureForTeacher = renderScriptureBlock(s);
  script += `<div class="teacher-scripture-block"><div class="teacher-scripture-label">Scripture (${(typeof CURRENT_TRANSLATION !== 'undefined') ? CURRENT_TRANSLATION : 'ASV'}) — for your own reference</div>${scriptureForTeacher}</div>`;

  const myNotesKey = `lw-notes-${s.book}-${s.chNum}`;
  let myNotes = [];
  try {
    const stored = localStorage.getItem(myNotesKey);
    if (stored) myNotes = JSON.parse(stored);
    else if (s.starterNotes && s.starterNotes.length) myNotes = s.starterNotes;
  } catch(e) {}
  if (myNotes.length) {
    script += `<div class="my-notes-callout"><div class="my-notes-callout-label">Before you go further — you flagged these for this lesson:</div><ul>${myNotes.map(n => `<li>${n}</li>`).join('')}</ul><p style="margin-top:8px; font-size:0.85rem; font-style:italic;">Weave these into the discussion as they come up naturally — they're yours, not scripted for you.</p></div>`;
  }
  if (typeof sittingNotesHTML === 'function') script += sittingNotesHTML(s.book, s.chNum);

  if (s.story) {
    script += `
      <button class="story-toggle-btn" onclick="this.nextElementSibling.classList.toggle('open'); this.textContent = this.nextElementSibling.classList.contains('open') ? '📖 Hide the Story' : '📖 Tell the Story';">📖 Tell the Story</button>
      <div class="story-panel">
        <div class="story-block">
          <div class="story-label">Paint the Scene — Read or Retell This Aloud</div>
          <p>${s.story.scene.split(String.fromCharCode(10,10)).join('</p><p>')}</p>
        </div>
        <div class="story-block modern">
          <div class="story-label">A Modern Parallel</div>
          <p>${s.story.modern.split(String.fromCharCode(10,10)).join('</p><p>')}</p>
        </div>
      </div>
    `;
  }

  if (s.opens.length) {
    script += `<p><strong>Before you dive into the discussion, here's a hook to throw out right after the reading, while it's still fresh:</strong> "${linkify(s.opens[0])}" Don't answer it yet — just let it sit with the group for a second. We'll come back to it.</p>`;
  }

  if (s.points.length) {
    script += `<p><strong>Now let's actually walk through this chapter.</strong> Go section by section, verse by verse where these callouts give you a reference — don't just read these off, put them in your own words as you go:</p>`;
    s.points.forEach(p => { script += `<p>${linkify(p)}</p>`; });
  }

  if (s.refs.length) {
    script += `<p><strong>A few places this passage is directly pulling from elsewhere in Scripture</strong> — worth having your group flip to these, or at least hear them named:</p>`;
    script += `<ul class="refs">${s.refs.map(r => `<li>${linkify(r)}</li>`).join('')}</ul>`;
  }

  if (s.doctrinal) {
    script += `<div class="doctrinal-note"><strong>Doctrinal note for you, the teacher — not on the shared screen as “the answer”:</strong> ${linkify(s.doctrinal)}</div>`;
  }

  if (s.views && s.views.length) {
    script += `<p><strong>How readers take this — say it out loud so the room hears more than one chair.</strong> Your view can be named as yours. Do not let it become the only allowed sentence.</p>`;
    s.views.forEach(v => { script += `<p><em>${v.name}.</em> ${linkify(v.body)}</p>`; });
  }

  if (s.apocryphaNote) {
    script += `<p><strong>Catholic / Protestant Bible difference — keep this brief and historical.</strong> ${linkify(s.apocryphaNote)}</p>`;
  }

  const notesKey = `lw-notes-${s.book}-${s.chNum}`;
  const starterJson = JSON.stringify(s.starterNotes || []).replace(/"/g, '&quot;');
  script += `
    <div class="notes-section" data-notes-key="${notesKey}" data-starter="${starterJson}">
      <div class="notes-label">📝 Study Notes &amp; Questions — Yours, Saved Automatically</div>
      <div class="notes-list"></div>
      <div class="notes-add-row">
        <input type="text" class="notes-input" placeholder="Add a question or note for this chapter...">
        <button class="notes-add-btn">Add</button>
      </div>
    </div>
  `;

  script += `
    <div class="qa-section">
      <div class="notes-label">💬 Live Q&amp;A — Paste a Question From Teams Chat</div>
      <div class="qa-add-row">
        <input type="text" class="qa-input" placeholder="Paste or type their question here...">
        <button class="qa-search-btn">Find Relevant Material</button>
      </div>
      <div class="qa-results"></div>
    </div>
  `;

  if (s.hist.length) {
    script += `<p><strong>Some real background that helps this land</strong> — this is also showing on the group's screen right now:</p>`;
    s.hist.forEach(h => { script += `<p>${linkify(h)}</p>`; });
  }

  if (s.opens.length) {
    script += `<p><strong>Now go back to that question from the top of the lesson and actually open it up to the group.</strong> These are genuinely open — let people wrestle, don't hand them an answer:</p>`;
    s.opens.forEach(o => { script += `<p>${linkify(o)}</p>`; });
  }

  script += `<p><strong>Close in prayer.</strong> Then let them know next time, we're moving to <em>${current+1 < SESSIONS.length ? SESSIONS[current+1].chapterLabel : 'the final lesson of the course — congratulations to your group for making it here'}</em>.</p>`;

  return `
    <div class="pane-label">Teacher Script — Keep on Your Own Screen</div>
    <div class="session-head">
      <div class="eyebrow">Lesson ${current+1} of ${SESSIONS.length} &middot; ${s.book} Group Study</div>
      <h1>${s.chapterLabel}</h1>
      <div class="meta">Target: 30–45 minutes</div>
    </div>
    <div class="preload-bar">
      <span class="preload-status" id="preload-status">Scriptures: checking&hellip;</span>
      <button type="button" class="preload-btn" id="preload-btn">⬇ Preload Scriptures for Today</button>
    </div>
    <div class="block">
      <div class="block-label"><span>Your Script for This Lesson</span></div>
      <div class="script-narrative">${script}</div>
    </div>
  `;
}