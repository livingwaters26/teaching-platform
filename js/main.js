function updateTranslationSelect(){
  const sel = document.getElementById('translation-select');
  if (!sel) return;
  const s = SESSIONS[current];
  const available = (typeof getAvailableTranslations === 'function') ? getAvailableTranslations(s.book) : ['ASV'];
  const prevValue = CURRENT_TRANSLATION;
  sel.innerHTML = '';
  available.forEach(t => {
    const opt = document.createElement('option');
    opt.value = t;
    opt.textContent = (typeof TRANSLATION_LABELS !== 'undefined' && TRANSLATION_LABELS[t]) ? TRANSLATION_LABELS[t] : t;
    sel.appendChild(opt);
  });
  // Keep the user's chosen translation if this book has it; otherwise fall back to first available
  if (available.includes(prevValue)) {
    sel.value = prevValue;
  } else if (available.length) {
    window.CURRENT_TRANSLATION = available[0];
    sel.value = available[0];
  }
}

document.getElementById('translation-select').addEventListener('change', function(){
  window.CURRENT_TRANSLATION = this.value;
  render();
});

function render(){
  const s = SESSIONS[current];
  updateTranslationSelect();
  document.getElementById('pane-display').innerHTML = displayHTML(s);
  document.getElementById('pane-teacher').innerHTML = teacherHTML(s);
  document.getElementById('prev-btn').disabled = current === 0;
  document.getElementById('next-btn').disabled = current === SESSIONS.length - 1;
  if (popoutWin && !popoutWin.closed) {
    popoutWin.postMessage({ type: 'GROUP_STUDY_UPDATE', html: displayHTML(s), title: `Study Guide — ${s.book} ${s.chNum}` }, '*');
  }
  updateSyncStatus();
  renderNavList();
  wireSpeechReader();
  wireNotesSection();
  wireQASection();
  if (typeof renderSittingsDesk === 'function') renderSittingsDesk();
}

document.getElementById('prev-btn').onclick = () => { if(current>0){current--; render(); window.scrollTo(0,0);} };
document.getElementById('next-btn').onclick = () => { if(current<SESSIONS.length-1){current++; render(); window.scrollTo(0,0);} };

function renderNavList(){
  const list = document.getElementById('nav-lesson-list');
  let html = '';
  let lastBook = null;
  SESSIONS.forEach((s,i) => {
    if (s.book !== lastBook) {
      html += `<div class="nav-book-group">${s.book}</div>`;
      lastBook = s.book;
    }
    html += `<button class="nav-lesson-item ${i===current?'active':''}" data-idx="${i}">Lesson ${i+1}: ${s.chapterLabel}</button>`;
  });
  list.innerHTML = html;
  list.querySelectorAll('.nav-lesson-item').forEach(btn => {
    btn.addEventListener('click', () => {
      current = parseInt(btn.dataset.idx);
      render();
      closeDrawer();
      window.scrollTo(0,0);
    });
  });
}

function openDrawer(){ document.getElementById('nav-drawer').classList.add('open'); document.getElementById('nav-overlay').classList.add('open'); }
function closeDrawer(){ document.getElementById('nav-drawer').classList.remove('open'); document.getElementById('nav-overlay').classList.remove('open'); }
document.getElementById('btn-menu').onclick = openDrawer;
document.getElementById('btn-menu-close').onclick = closeDrawer;
document.getElementById('nav-overlay').onclick = closeDrawer;

function openPlanner(){ document.getElementById('planner-modal').classList.add('open'); closeDrawer(); }
function closePlanner(){ document.getElementById('planner-modal').classList.remove('open'); }
document.getElementById('btn-open-planner').onclick = openPlanner;
document.getElementById('btn-planner-close').onclick = closePlanner;
const btnSittings = document.getElementById('btn-open-sittings');
if (btnSittings) btnSittings.onclick = openSittings;
const btnSittingsClose = document.getElementById('btn-sittings-close');
if (btnSittingsClose) btnSittingsClose.onclick = closeSittings;
const sittingsModal = document.getElementById('sittings-modal');
if (sittingsModal) sittingsModal.addEventListener('click', function(e){ if (e.target === sittingsModal) closeSittings(); });
if (typeof wireSittingsDesk === 'function') wireSittingsDesk();

(function buildBookScopeOptions(){
  const scopeSel = document.getElementById('planner-scope');
  const customOpt = scopeSel.querySelector('option[value="custom"]');
  const books = [];
  SESSIONS.forEach((s,i) => {
    let entry = books.find(b => b.book === s.book);
    if (!entry) { entry = { book: s.book, first: i, last: i }; books.push(entry); }
    entry.last = i;
  });
  books.forEach(b => {
    const opt = document.createElement('option');
    opt.value = 'book:' + b.book;
    const count = b.last - b.first + 1;
    opt.textContent = `${b.book} only (Lesson${count>1?'s':''} ${b.first+1}${b.last>b.first?'–'+(b.last+1):''})`;
    scopeSel.insertBefore(opt, customOpt);
  });
})();

const rangeStartSel = document.getElementById('planner-range-start');
const rangeEndSel = document.getElementById('planner-range-end');
SESSIONS.forEach((s,i) => {
  const label = `Lesson ${i+1}: ${s.chapterLabel}`;
  rangeStartSel.appendChild(new Option(label, i));
  rangeEndSel.appendChild(new Option(label, i));
});
rangeEndSel.value = SESSIONS.length - 1;

document.getElementById('planner-scope').addEventListener('change', function(){
  document.getElementById('planner-custom-range').style.display = this.value === 'custom' ? 'block' : 'none';
});

function estimateSessionMinutes(s){
  let verseCount = 0;
  const scripture = (typeof getVersesForChapter === 'function') ? getVersesForChapter(s.book, s.chNum) : null;
  if (scripture) verseCount = scripture.length;
  else verseCount = 20; // rough fallback for not-yet-embedded chapters

  const readingMin = (verseCount * 12) / 60; // ~12 sec/verse read aloud
  const discussionMin = s.points.length * 3.5; // real discussion per point, not just a read-off
  const refsMin = s.refs.length * 1.2;
  const historyMin = s.hist.length * 2.5;
  const opensMin = s.opens.length * 4; // open questions genuinely take longest
  const topicsMin = (s.topics ? s.topics.length : 0) * 3;
  const wordsMin = (s.wordStudies ? s.wordStudies.length : 0) * 1.5;
  const overhead = 6; // intro/hook/close

  return Math.round(readingMin + discussionMin + refsMin + historyMin + opensMin + topicsMin + wordsMin + overhead);
}

function getScopedSessions(){
  const scope = document.getElementById('planner-scope').value;
  if (scope === 'path:daniel') {
    return SESSIONS.map((s,i)=>({s,i})).filter(x => x.s.book === 'Daniel');
  }
  if (scope === 'path:dan-rev') {
    return SESSIONS.map((s,i)=>({s,i})).filter(x =>
      x.s.book === 'Daniel' || x.s.book === 'Between the Testaments' || x.s.book === 'Revelation'
    );
  }
  if (scope.indexOf('book:') === 0) {
    const bookName = scope.slice(5);
    return SESSIONS.map((s,i)=>({s,i})).filter(x => x.s.book === bookName);
  }
  if (scope === 'custom') {
    const start = parseInt(rangeStartSel.value);
    const end = parseInt(rangeEndSel.value);
    const lo = Math.min(start, end), hi = Math.max(start, end);
    return SESSIONS.map((s,i)=>({s,i})).filter(x => x.i >= lo && x.i <= hi);
  }
  return SESSIONS.map((s,i)=>({s,i}));
}

document.getElementById('btn-generate-plan').onclick = function(){
  const freq = parseInt(document.getElementById('planner-freq').value) || 1;
  const mins = parseInt(document.getElementById('planner-mins').value) || 40;
  const startVal = document.getElementById('planner-start').value;
  const startDate = startVal ? new Date(startVal + 'T00:00:00') : null;
  const scoped = getScopedSessions();

  if (scoped.length === 0) {
    document.getElementById('planner-result').innerHTML = `<p style="color:#b91c1c;"><strong>No lessons in that range.</strong> Check your start/end lesson selection.</p>`;
    return;
  }

  // Estimate real content weight per lesson, not just a flat minutes assumption
  scoped.forEach(x => { x.estMin = estimateSessionMinutes(x.s); });

  let warning = '';
  if (mins < 25) {
    warning += `<p style="color:#b91c1c;"><strong>Heads up:</strong> these lessons are built for a 30–45 minute discussion. At ${mins} minutes you may need to cut discussion short most meetings.</p>`;
  }

  // Only pair lessons per meeting if there's real spare time AND the combined content actually fits
  let lessonsPerMeeting = 1;
  if (mins >= 70) {
    const avgEst = scoped.reduce((sum,x)=>sum+x.estMin,0) / scoped.length;
    if (avgEst * 2 <= mins * 1.1) {
      lessonsPerMeeting = 2;
      warning += `<p>Since you have ${mins} minutes and these lessons run light, this plan pairs two per meeting.</p>`;
    }
  }

  const totalMeetings = Math.ceil(scoped.length / lessonsPerMeeting);
  const totalWeeks = Math.ceil(totalMeetings / freq);

  // Flag any individual lesson (or combined chunk) whose real content estimate exceeds the chosen window
  const overflowLessons = [];

  let rows = '';
  let meetingNum = 0;
  let idx = 0;
  for (let week = 1; week <= totalWeeks; week++) {
    for (let m = 0; m < freq && idx < scoped.length; m++) {
      meetingNum++;
      const chunk = scoped.slice(idx, idx + lessonsPerMeeting);
      const chunkEst = chunk.reduce((sum,x)=>sum+x.estMin,0);
      const label = chunk.map(x => `Lesson ${x.i+1}: ${x.s.chapterLabel}`).join(' + ');
      let dateStr = '';
      if (startDate) {
        const d = new Date(startDate);
        d.setDate(d.getDate() + (meetingNum - 1) * Math.round(7/freq));
        dateStr = d.toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' });
      }
      const over = chunkEst > mins * 1.15;
      if (over) {
        const splitInto = Math.ceil(chunkEst / mins);
        overflowLessons.push({ label, chunkEst, splitInto });
      }
      const rowClass = over ? ' style="background:#fef2f2;"' : '';
      const estBadge = over
        ? `<span style="color:#b91c1c; font-weight:700;">~${chunkEst} min ⚠️</span>`
        : `<span style="color:#6b5c3c;">~${chunkEst} min</span>`;
      rows += `<tr${rowClass}><td>Week ${week}</td><td>${dateStr || ('Meeting ' + meetingNum)}</td><td>${label}<br>${estBadge}</td></tr>`;
      idx += lessonsPerMeeting;
    }
  }

  if (overflowLessons.length) {
    warning += `<div style="background:#fef2f2; border:2px solid #dc2626; border-radius:10px; padding:14px; margin-top:10px;">
      <strong style="color:#991b1b;">⚠️ ${overflowLessons.length} lesson${overflowLessons.length===1?'':'s'} won't realistically fit in ${mins} minutes:</strong>
      <ul style="margin:8px 0 0; padding-left:20px;">
        ${overflowLessons.map(o => `<li><strong>${o.label}</strong> — estimated ~${o.chunkEst} min of real content. Consider splitting this into <strong>${o.splitInto} separate lessons</strong> to actually get depth, rather than rushing it in one sitting.</li>`).join('')}
      </ul>
    </div>`;
  }

  document.getElementById('planner-result').innerHTML = `
    ${warning}
    <p><strong>Run until it ends:</strong> ${scoped.length} lesson${scoped.length===1?'':'s'}, ${freq}× a week, ${mins} min nights → <strong>${totalMeetings} meetings</strong> (${totalWeeks} weeks if you never skip). No stop date. If you miss a week, slide everything down. The list does not expire.</p>
    <p style="font-size:0.75rem; color:#6b5c3c;">Covering: ${document.getElementById('planner-scope').selectedOptions[0].textContent}</p>
    <table><thead><tr><th>Week</th><th>${startDate ? 'Date' : 'Meeting'}</th><th>Covers</th></tr></thead>
    <tbody>${rows}</tbody></table>
    <button onclick="window.print()" style="margin-top:14px; width:100%; background:#0369a1; color:#fff; border:none; padding:10px; border-radius:8px; font-weight:700; cursor:pointer;">Print This Plan</button>
  `;
};

let seconds = 2700, running = false, iv;
function fmt(s){ return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0'); }
document.getElementById('btn-timer').onclick = function(){
  running = !running;
  this.textContent = running ? 'Pause' : 'Start';
  if(running){ iv = setInterval(()=>{ seconds--; document.getElementById('timer').textContent = fmt(Math.max(seconds,0)); }, 1000); }
  else clearInterval(iv);
};

if (new URLSearchParams(window.location.search).get('view') === 'student') {
  document.body.classList.add('student-mode');
}

document.getElementById('btn-copy-student-link').onclick = function(){
  const url = new URL(window.location.href);
  url.searchParams.set('view', 'student');
  navigator.clipboard.writeText(url.toString()).then(() => {
    this.textContent = '✓ Copied!';
    setTimeout(() => { this.textContent = '🔗 Copy Student-Safe Link'; }, 2000);
  }).catch(() => {
    alert('Could not copy automatically. Here is the link:\n\n' + url.toString());
  });
};

render();