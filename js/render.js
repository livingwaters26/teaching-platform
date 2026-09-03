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

function scriptureLabelText(s){
  const ch = s.chNum.replace(/[\u2013\u2014-].*/, '').trim();
  if (typeof getChapterPersonalText === 'function' && getChapterPersonalText(s.book, ch)) {
    return 'your own text';
  }
  if (typeof hasEmbeddedScripture === 'function' && hasEmbeddedScripture(s.book)) {
    return (typeof CURRENT_TRANSLATION !== 'undefined') ? CURRENT_TRANSLATION : 'ASV';
  }
  if (typeof getCachedLiveChapter === 'function') {
    const cached = getCachedLiveChapter(s.book, ch);
    if (cached) return cached.translation + ' \u2014 live';
  }
  return 'looking up live text\u2026';
}

function renderScriptureBlock(s, seg){
  const ch = s.chNum.replace(/[\u2013\u2014-].*/, '').trim();

  if (typeof getChapterPersonalText === 'function') {
    const personal = getChapterPersonalText(s.book, ch);
    if (personal) {
      const paras = personal.split(/\n\s*\n/).filter(p => p.trim());
      const versesJson = JSON.stringify(paras.length ? paras : [personal]).replace(/"/g, '&quot;');
      const reader = `
        <div class="reader-bar" data-verses="${versesJson}">
          <select class="reader-voice"></select>
          <button class="reader-play">\ud83d\udd0a Read Aloud</button>
          <button class="reader-pause" style="display:none;">\u23f8 Pause</button>
          <button class="reader-stop" style="display:none;">\u23f9 Stop</button>
        </div>`;
      return `<div class="scripture-live-note">This is your own text for this chapter, saved in "My Recordings" \u2014 not a translation.</div>` +
        reader + '<div class="scripture-text">' + (paras.length ? paras : [personal]).map((p,i)=>`<span class="verse-wrap" data-vidx="${i}">${p} </span>`).join('') + '</div>';
    }
  }

  let verses = getVersesForChapter(s.book, ch);
  let liveNote = '';
  if (!verses && typeof getCachedLiveChapter === 'function') {
    const cached = getCachedLiveChapter(s.book, ch);
    if (cached) {
      verses = cached.verses;
      liveNote = `<div class="scripture-live-note">Live text from ${cached.translation}${cached.translation === 'BSB' ? ' (public domain)' : ''} \u2014 fetched live, not saved in this file.</div>`;
    } else if (typeof kickOffLiveScriptureFetch === 'function') {
      kickOffLiveScriptureFetch(s.book, ch);
    }
  }
  if (verses) {
    let startIdx = 0, endIdx = verses.length - 1, offset = 0;
    const scoped = seg && seg.total > 1 && seg.startVerseNum;
    if (scoped) {
      startIdx = Math.max(0, seg.startVerseNum - 1);
      offset = startIdx;
      if (seg.endVerseNum) endIdx = Math.min(verses.length - 1, seg.endVerseNum - 1);
    }
    const slice = scoped ? verses.slice(startIdx, endIdx + 1) : verses;
    const versesJson = JSON.stringify(slice).replace(/"/g, '&quot;');
    const reader = `
      <div class="reader-bar" data-verses="${versesJson}">
        <select class="reader-voice"></select>
        <button class="reader-play">🔊 Read Aloud</button>
        <button class="reader-pause" style="display:none;">⏸ Pause</button>
        <button class="reader-stop" style="display:none;">⏹ Stop</button>
      </div>`;
    return liveNote + reader + '<div class="scripture-text">' + slice.map((v,i)=>`<span class="verse-wrap" data-vidx="${i}"><span class="vn">${i+1+offset}</span> ${v} </span>`).join('') + '</div>';
  }
  return `<a class="scripture-link" href="${bibleLink(s.book, s.chNum)}" target="_blank">Open ${s.book} ${s.chNum} to read aloud &rarr;</a>
    <div class="scripture-live-note" style="margin-top:8px;">Looking up live text online (BSB, or ESV if configured)&hellip; it'll appear here automatically once found.</div>`;
}

let current = 0;

// Cross-reference auto-linking: books already loaded in this app (Daniel, Revelation)
// are left as plain text — everything else links out to Bible Gateway (ASV).
const LOCAL_BOOKS = ['Daniel', 'Revelation', 'John'];
function linkify(text){
  if (!text) return text;
  return linkifyReferences(text, LOCAL_BOOKS);
}

function displayHTML(s, seg){
  const scoped = seg && seg.total > 1;
  const topicsArr = scoped ? seg.topics : s.topics;
  const wordsArr = scoped ? seg.wordStudies : s.wordStudies;
  const histArr = scoped ? seg.hist : s.hist;

  const heroImg = (!scoped || seg.isFirst) && (s.hero && s.hero.src)
    ? `<div class="hero-image"><img src="${s.hero.src}" alt="${s.hero.alt || ''}" onerror="this.parentElement.style.display='none'"><div class="hero-caption">${s.hero.caption || ''}</div></div>`
    : (!scoped || seg.isFirst) && (s.book === 'Daniel' && s.chNum === '1')
    ? `<div class="hero-image"><img src="images/babylon-gate.jpg" alt="The Ishtar Gate of ancient Babylon"><div class="hero-caption">The Ishtar Gate — the ceremonial entrance into the Babylon where Daniel lived and served.</div></div>`
    : '';
  const topicsHTML = (topicsArr && topicsArr.length) ? topicsArr.map(t => `
    <div class="topic-card">
      <div class="topic-icon">${t.icon}</div>
      <div class="topic-title">${t.title}</div>
      <div class="topic-body">${linkify(t.body)}</div>
    </div>
  `).join('') : '';

  const wordStudiesHTML = (wordsArr && wordsArr.length) ? `
    <div class="word-cards-wrap">
      <div class="word-cards-label">📖 Words Worth Knowing</div>
      <div class="word-cards-grid">
        ${wordsArr.map(w => `
          <div class="word-card">
            <div class="word-card-term">${w.word}</div>
            <div class="word-card-orig">${w.orig}</div>
            <div class="word-card-meaning">${linkify(w.meaning)}</div>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  const partNote = scoped ? `<div class="meta" style="margin-top:6px;">Part ${seg.index+1} of ${seg.total}${seg.startsAt ? ' — picks up at ' + s.book + ' ' + seg.startsAt : ''}</div>` : '';
  const continuesNote = (scoped && !seg.isLast) ? `<div class="block" style="text-align:center; font-style:italic; color:#6b5c3c;">We'll continue next time${seg.endVerseNum ? ' at ' + s.book + ' ' + seg.chNum + ':' + (seg.endVerseNum+1) : ''}.</div>` : '';

  return `
    <div class="pane-label">Shareable Display — Share This on Zoom</div>
    <div class="session-head">
      <div class="eyebrow">${s.book}</div>
      <h1>${s.chapterLabel}</h1>
      ${partNote}
    </div>
    ${heroImg}
    ${(!scoped && typeof visualsHTML === 'function') ? visualsHTML(s) : ''}
    <div class="block reading">
      <div class="block-label"><span>Scripture (${scriptureLabelText(s)})</span></div>
      ${renderScriptureBlock(s, seg)}
    </div>
    ${topicsHTML ? `<div class="topics-grid">${topicsHTML}</div>` : ''}
    ${wordStudiesHTML}
    ${(histArr && histArr.length) ? `<div class="block history">
      <div class="block-label"><span>Background &amp; Context</span></div>
      ${histArr.map(h => `<div class="point">${linkify(h)}</div>`).join('')}
    </div>` : ''}
    ${(s.views && s.views.length && (!scoped || seg.isLast)) ? `<div class="block views-block">
      <div class="block-label"><span>How Readers Take This</span></div>
      <p class="views-lead">Same text. Different chairs at the table. We are reading to understand — not to crown a camp.</p>
      ${s.views.map(v => `<div class="view-card"><div class="view-name">${v.name}</div><div class="view-body">${linkify(v.body)}</div></div>`).join('')}
    </div>` : ''}
    ${(s.apocryphaNote && (!scoped || seg.isLast)) ? `<div class="block apocrypha-block">
      <div class="block-label"><span>What Some Bibles Include Here</span></div>
      <div class="point">${linkify(s.apocryphaNote)}</div>
    </div>` : ''}
    ${continuesNote}
  `;
}

const BOOK_AUTHORS = {
  'Daniel': 'the prophet Daniel',
  'Revelation': 'John',
  'John': 'John',
  'Matthew': 'Matthew',
  'Acts': 'Luke',
  'Genesis': 'Moses',
  'Exodus': 'Moses',
  'Ruth': 'the narrator'
};

const BOOK_INTROS = {
  'John': `<p><strong>Before we open to chapter one, here's the setting for the whole book of John.</strong> This Gospel is traditionally attributed to the apostle John, likely written later than Matthew, Mark, and Luke — many scholars place it around AD 85–95, though that date isn't settled. It's structurally different from the other three Gospels: no birth narrative, no parables in the usual sense, and it's built around seven specific miracles John calls "signs," each pointing to who Jesus is. John states his own purpose plainly near the end of the book: these things are written so readers would believe Jesus is the Christ, the Son of God, and have life in his name. That stated purpose is worth keeping in view through every chapter.</p>`,
  'Daniel': `<p><strong>This group has already walked a long stretch of the Old Testament.</strong> That 270 days was the map. This study is the slow walk through one book that map kept pointing at. You have heard Daniel at surface speed. We are going back through it on purpose, chapter by chapter, because Revelation will use this book as its dictionary — beasts, horns, times, a kingdom that does not come from the quarry of empire.</p>
    <p><strong>The path for this room is Daniel, then Revelation, then John.</strong> Do not skip ahead to the churches or the thousand years until this book has been heard in order. Chapters 1–6 are court stories. Chapters 7–12 are visions in Daniel's own voice. We will name the main views when a text forks. We will not crown a camp on night one.</p>
    <p>Daniel was a young Jewish noble taken in 605 BC, the first of three deportations (605, 597, 586). He served under Nebuchadnezzar, Belshazzar, Darius, and into the year of Cyrus — a life that spans the whole exile. Tonight is chapter 1: a name change, a table, and a resolve.</p>`,
  'Revelation': `<p><strong>You just finished Daniel on purpose.</strong> John is going to spend this book rereading that one: a beast from the sea, a mouth that wears out the saints, times and half a time, a kingdom given to one like a son of man. When something in Revelation feels like a code, flip back to Daniel before you buy a chart.</p>
    <p>It was written by John — most likely the apostle — exiled on Patmos. Date is honestly disputed: Nero years (mid-60s) or Domitian years (mid-90s). Both dates change how some scenes land; we will not pretend that is settled. It is a letter to seven real churches in Asia Minor under pressure to bow to Rome. After this book we start John, where the same writer (or the same circle) tells you who the Lamb is before you ever met the throne.</p>`,
  'Matthew': `<p><strong>You just finished John on purpose, and now we're going back to the beginning of the story John assumed you already knew.</strong> Matthew is traditionally attributed to the apostle Matthew (Levi), the tax collector Jesus called in chapter 9 — most scholars place its writing sometime between AD 60–90, likely for a largely Jewish-Christian audience. Where John argues from seven signs, Matthew argues from fulfillment: watch for "this was to fulfill what was spoken by the prophet" running through the whole book, because Matthew is building the case that Jesus is the promised Son of David and Son of Abraham the Hebrew Scriptures were pointing to all along.</p>
    <p>The book is built around five major teaching blocks — the Sermon on the Mount (5–7), the mission discourse (10), the kingdom parables (13), teaching on the church (18), and the Olivet Discourse on the end (24–25) — each one closed out with some version of "when Jesus had finished saying these things." That structure is worth naming for your group early: it is not a loose collection of stories, it is five deliberate blocks of teaching stitched together with narrative.</p>`,
  'Acts': `<p><strong>You just finished Matthew, the story of what Jesus did and taught.</strong> Acts is volume two of the same two-part work — written by Luke, the physician and travel companion of Paul, as a direct sequel to his own Gospel of Luke (Acts opens by referring back to "my former book"). Most scholars date it to the early-to-mid 60s AD, though some place it later. Where the Gospels tell you what Jesus began to do and teach, Acts tells you what Jesus kept doing and teaching through his followers, by the Holy Spirit, after he ascended. Watch the hinge verse early on — the risen Jesus tells the apostles they will be his witnesses "in Jerusalem, and in all Judea and Samaria, and to the end of the earth" — because that sentence is the outline of the entire book: the church starts in Jerusalem, breaks out into Judea and Samaria, and then follows Paul out into the Gentile world.</p>
    <p>A quick honesty note for your group: this study currently runs Acts chapters 1 through 18 — from Pentecost through the Jerusalem council and the launch of Paul's third missionary journey. Chapters 19 through 28 (the riot at Ephesus, the arrests, the shipwreck, and Paul finally reaching Rome) aren't written yet, so the course will simply pause at chapter 18 for now.</p>`,
  'Genesis': `<p><strong>You just finished Acts — the church going out to the ends of the earth — and now we're going all the way back to the beginning of the story that whole mission assumes.</strong> Genesis is traditionally attributed to Moses, written for a people who had just left Egypt and needed to know who made the world, why it broke, and which family God had already chosen to fix it through. The book is built out of ten "toledot" markers — "these are the generations of..." — that structure it into two unequal halves: eleven chapters covering everything from creation to Babel, then thirty-nine chapters slowing way down for four generations of one family: Abraham, Isaac, Jacob, and Joseph. Watch that pacing on purpose — Genesis is not trying to cover all of history evenly, it is narrowing the camera onto the line the rest of the Bible will follow.</p>
    <p>Every major thread the rest of Scripture pulls on gets its first thread here: the image of God, the entrance of sin, a promise of a coming deliverer spoken over a serpent, a global judgment survived by grace, a covenant cut with Abraham that names land, seed, and blessing to all nations, a stolen blessing that still lands where God said it would, and a family that walks into Egypt by faith and leaves in a coffin still waiting on the promise. If your group has just spent Acts watching the gospel reach Gentile cities, Genesis is the reminder that "all nations blessed in thee" was the plan from Abraham's own calling, chapter 12, verse 3.</p>`,
  'Exodus': `<p><strong>Genesis ended with a coffin in Egypt and a promise still unfinished — Exodus is where that promise starts moving again.</strong> Also traditionally attributed to Moses, Exodus picks up several centuries after Joseph's death: the seventy who came down into Egypt by invitation have become a nation the new Pharaoh fears and enslaves. The book has a clear shape your group should feel in the pacing: chapters 1–18 are deliverance — the cry, the burning bush, the plagues, the Passover, the sea, the wilderness — chapters 19–24 are covenant — Sinai, the Ten Commandments, the case-law that works those commandments out in ordinary disputes — and chapters 25–40 are dwelling — the tabernacle, built twice over (once as command, once as construction), because the whole point of the exodus was never merely escape. God says it plainly in 29:46: "I brought them forth out of the land of Egypt, that I may dwell among them."</p>
    <p>Watch for the name of God itself becoming an event in this book — "I AM THAT I AM" in chapter 3 — and watch how often later Scripture reaches back for this book's vocabulary: Passover lamb, redemption, the mercy seat, a mediator, a veil, glory filling a house. Paul, Hebrews, John, and Revelation all assume your group already knows Exodus by the time they get there. This study currently covers all 40 chapters, start to finish.</p>`,
  'Ruth': `<p><strong>After forty chapters of law, tabernacle, and a nation forming in a wilderness, Ruth zooms all the way down to one family, one town, and one harvest.</strong> The book never names its own author; Jewish tradition credits Samuel. It sets itself "in the days when the judges ruled" — the same violent, cyclical era the book of Judges describes — which makes this quiet, orderly, kindness-driven story a deliberate contrast to everything surrounding it in that period. And here is the detail your group needs on the table from the first page: Ruth is a Moabite. Deuteronomy 23:3 excludes Moabites from the assembly of the LORD by name, "even to the tenth generation," because of old hostility at the exodus. This book is not written in ignorance of that law. It is written in full view of it — and it ends by naming a Moabite woman as King David's great-grandmother.</p>
    <p>Underneath the romance is a legal and theological engine worth naming early: the go'el, the kinsman-redeemer, a relative with both the right and the duty to buy back land, avenge blood, or marry a widow to keep a dead man's name alive. Boaz will do all three. Watch the word chesed — usually "kindness" or "lovingkindness" — running through every chapter: Naomi asks God for it, Ruth performs it, Boaz recognizes it and then becomes it himself. This study covers all four chapters in full.</p>`
};

function teacherHTML(s, seg){
  const scoped = seg && seg.total > 1;
  const pts = scoped ? seg.points : s.points;
  const refsArr = scoped ? seg.refs : s.refs;
  const histArr = scoped ? seg.hist : s.hist;
  const opensArr = scoped ? seg.opens : s.opens;

  const bookName = BOOK_AUTHORS[s.book] || s.book;
  const isFirstOfBook = current === 0 || SESSIONS[current-1].book !== s.book;
  let script = '';

  if ((!scoped || seg.isFirst) && isFirstOfBook && BOOK_INTROS[s.book]) {
    script += BOOK_INTROS[s.book];
  }

  const lessonWhat = scoped ? `part ${seg.index+1} of ${seg.total}${seg.startsAt ? ' — picking up at ' + s.book + ' ' + seg.startsAt : ''}` : `${s.book} ${s.chNum}`;
  script += `<p><strong>Welcome to Lesson ${current+1}: ${s.chapterLabel}${scoped ? ', Part ' + (seg.index+1) + ' of ' + seg.total : ''}.</strong> Right now, on your screen, your group is looking at ${lessonWhat} — that's the passage we're reading today. <em>Pacing note: this lesson is built for a 30–45 minute discussion — reading (5 min), walkthrough and discussion (15–25 min), open questions (5–10 min), close (5 min). Adjust to your group's pace; these are estimates, not a stopwatch.</em></p>`;
  script += `<p>Go ahead and read ${scoped ? 'this part' : 'the full chapter'} aloud now, straight from the screen — either you read it, or invite someone in the group to read it. Don't summarize it first. Let them hear it in ${bookName}'s own words before we talk about any of it.</p>`;

  const scriptureForTeacher = renderScriptureBlock(s, seg);
  script += `<div class="teacher-scripture-block"><div class="teacher-scripture-label">Scripture (${scriptureLabelText(s)}) — for your own reference</div>${scriptureForTeacher}</div>`;

  if (typeof bookRecordingWidgetHTML === 'function') script += bookRecordingWidgetHTML(s);

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

  if (s.story && (!scoped || seg.isFirst)) {
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

  if (opensArr && opensArr.length) {
    script += `<p><strong>Before you dive into the discussion, here's a hook to throw out right after the reading, while it's still fresh:</strong> "${linkify(opensArr[0])}" Don't answer it yet — just let it sit with the group for a second. We'll come back to it.</p>`;
  }

  if (pts && pts.length) {
    script += `<p><strong>Now let's actually walk through ${scoped ? 'this part of the chapter' : 'this chapter'}.</strong> Go section by section, verse by verse where these callouts give you a reference — don't just read these off, put them in your own words as you go:</p>`;
    pts.forEach(p => { script += `<p>${linkify(p)}</p>`; });
  }

  if (refsArr && refsArr.length) {
    script += `<p><strong>A few places this passage is directly pulling from elsewhere in Scripture</strong> — worth having your group flip to these, or at least hear them named:</p>`;
    script += `<ul class="refs">${refsArr.map(r => `<li>${linkify(r)}</li>`).join('')}</ul>`;
  }

  if (s.doctrinal && (!scoped || seg.isLast)) {
    script += `<div class="doctrinal-note"><strong>Doctrinal note for you, the teacher — not on the shared screen as “the answer”:</strong> ${linkify(s.doctrinal)}</div>`;
  }

  if (s.views && s.views.length && (!scoped || seg.isLast)) {
    script += `<p><strong>How readers take this — say it out loud so the room hears more than one chair.</strong> Your view can be named as yours. Do not let it become the only allowed sentence.</p>`;
    s.views.forEach(v => { script += `<p><em>${v.name}.</em> ${linkify(v.body)}</p>`; });
  }

  if (s.apocryphaNote && (!scoped || seg.isLast)) {
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

  if (histArr && histArr.length) {
    script += `<p><strong>Some real background that helps this land</strong> — this is also showing on the group's screen right now:</p>`;
    histArr.forEach(h => { script += `<p>${linkify(h)}</p>`; });
  }

  if (opensArr && opensArr.length) {
    script += `<p><strong>Now go back to that question from the top of the lesson and actually open it up to the group.</strong> These are genuinely open — let people wrestle, don't hand them an answer:</p>`;
    opensArr.forEach(o => { script += `<p>${linkify(o)}</p>`; });
  }

  const nextUpLabel = scoped && !seg.isLast
    ? `Part ${seg.index+2} of ${seg.total} of ${s.chapterLabel}${seg.endsAt ? ' — picking up at ' + s.book + ' ' + seg.chNum + ':' + (seg.endVerseNum+1) : ''}`
    : (current+1 < SESSIONS.length ? SESSIONS[current+1].chapterLabel : 'the final lesson of the course — congratulations to your group for making it here');
  script += `<p><strong>Close in prayer.</strong> Then let them know next time, we're moving to <em>${nextUpLabel}</em>.</p>`;

  return `
    <div class="pane-label">Teacher Script — Keep on Your Own Screen</div>
    <div class="session-head">
      <div class="eyebrow">Lesson ${current+1} of ${SESSIONS.length} &middot; ${s.book} Group Study${scoped ? ' &middot; Part ' + (seg.index+1) + ' of ' + seg.total : ''}</div>
      <h1>${s.chapterLabel}</h1>
      <div class="meta">Target: 30–45 minutes${scoped && seg.estMinutes ? ' &middot; this part est. ~' + seg.estMinutes + ' min' : ''}</div>
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