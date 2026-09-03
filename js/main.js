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

let currentSegment = null; // set by cohorts.js when resuming a class mid-chapter; null = whole chapter

function render(){
  const s = SESSIONS[current];
  updateTranslationSelect();
  document.getElementById('pane-display').innerHTML = displayHTML(s, currentSegment);
  document.getElementById('pane-teacher').innerHTML = teacherHTML(s, currentSegment);
  document.getElementById('prev-btn').disabled = current === 0;
  document.getElementById('next-btn').disabled = current === SESSIONS.length - 1;
  if (popoutWin && !popoutWin.closed) {
    popoutWin.postMessage({ type: 'GROUP_STUDY_UPDATE', html: displayHTML(s, currentSegment), title: `Study Guide — ${s.book} ${s.chNum}` }, '*');
  }
  updateSyncStatus();
  renderNavList();
  wireSpeechReader();
  wireNotesSection();
  wireQASection();
  if (typeof renderSittingsDesk === 'function') renderSittingsDesk();
  if (typeof wireCohortsDesk === 'function') wireCohortsDesk();
  if (typeof wirePreloadBar === 'function') wirePreloadBar(s);
}

document.getElementById('prev-btn').onclick = () => { if(current>0){current--; currentSegment=null; render(); window.scrollTo(0,0);} };
document.getElementById('next-btn').onclick = () => { if(current<SESSIONS.length-1){current++; currentSegment=null; render(); window.scrollTo(0,0);} };

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
      currentSegment = null;
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

function openCohorts(){ document.getElementById('cohorts-modal').classList.add('open'); closeDrawer(); if (typeof renderCohortsList === 'function') renderCohortsList(); }
function closeCohorts(){ document.getElementById('cohorts-modal').classList.remove('open'); }
const btnCohorts = document.getElementById('btn-open-cohorts');
if (btnCohorts) btnCohorts.onclick = openCohorts;
const btnCohortsClose = document.getElementById('btn-cohorts-close');
if (btnCohortsClose) btnCohortsClose.onclick = closeCohorts;
const cohortsModal = document.getElementById('cohorts-modal');
if (cohortsModal) cohortsModal.addEventListener('click', function(e){ if (e.target === cohortsModal) closeCohorts(); });
if (typeof wireCohortsDesk === 'function') wireCohortsDesk();

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
  const rawScope = document.getElementById('planner-scope').value;
  const scopeLabel = document.getElementById('planner-scope').selectedOptions[0].textContent;
  // Custom ranges get baked into an explicit "custom:lo-hi" scope value so a saved class
  // can be recomputed later even if the planner's own range selects show something else.
  const scopeValue = (rawScope === 'custom')
    ? `custom:${Math.min(parseInt(rangeStartSel.value),parseInt(rangeEndSel.value))}-${Math.max(parseInt(rangeStartSel.value),parseInt(rangeEndSel.value))}`
    : rawScope;

  const scoped = getScopedSessions();
  if (scoped.length === 0) {
    document.getElementById('planner-result').innerHTML = `<p style="color:#b91c1c;"><strong>No lessons in that range.</strong> Check your start/end lesson selection.</p>`;
    return;
  }

  let warning = '';
  if (mins < 25) {
    warning += `<p style="color:#b91c1c;"><strong>Heads up:</strong> these lessons are built for a 30–45 minute discussion. At ${mins} minutes you may need to cut discussion short most meetings.</p>`;
  }

  // buildMeetingUnits (js/cohorts.js) turns the scoped lesson list into one entry per
  // meeting — pairing light lessons, or splitting an overlong chapter into parts, each
  // with its exact stopping point computed in advance, not discovered live.
  const units = (typeof buildMeetingUnits === 'function') ? buildMeetingUnits(scoped, mins) : scoped.map(x => ({ kind:'whole', label:`Lesson ${x.i+1}: ${x.s.chapterLabel}`, estMin: x.estMin }));
  const splitCount = units.filter(u => u.kind === 'segment').length;
  if (splitCount) {
    warning += `<p>${splitCount} chapter${splitCount===1?'':'s'} won't fit in ${mins} minutes in one sitting, so this plan splits ${splitCount===1?'it':'them'} into parts — each with its own stopping point, shown below.</p>`;
  }
  const pairedCount = units.filter(u => u.kind === 'paired').length;
  if (pairedCount) {
    warning += `<p>Since you have ${mins} minutes and some lessons run light, this plan pairs two per meeting where it fits.</p>`;
  }

  const totalMeetings = units.length;
  const totalWeeks = Math.ceil(totalMeetings / freq);
  const startDate = startVal ? new Date(startVal + 'T00:00:00') : null;

  let rows = '';
  let meetingNum = 0;
  let idx = 0;
  for (let week = 1; week <= totalWeeks; week++) {
    for (let m = 0; m < freq && idx < units.length; m++) {
      meetingNum++;
      const unit = units[idx];
      let dateStr = '';
      if (startDate) {
        const d = new Date(startDate);
        d.setDate(d.getDate() + (meetingNum - 1) * Math.round(7/freq));
        dateStr = d.toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' });
      }
      const over = unit.estMin > mins * 1.3;
      const rowClass = over ? ' style="background:#fef2f2;"' : '';
      const estBadge = over
        ? `<span style="color:#b91c1c; font-weight:700;">~${unit.estMin} min ⚠️</span>`
        : `<span style="color:#6b5c3c;">~${unit.estMin} min</span>`;
      rows += `<tr${rowClass}><td>Week ${week}</td><td>${dateStr || ('Meeting ' + meetingNum)}</td><td>${unit.label}<br>${estBadge}</td></tr>`;
      idx++;
    }
  }

  window.LAST_PLAN = { scopeValue, scopeLabel, freq, mins, startDateISO: startVal || '' };

  document.getElementById('planner-result').innerHTML = `
    ${warning}
    <p><strong>Run until it ends:</strong> ${scoped.length} lesson${scoped.length===1?'':'s'} (${totalMeetings} meeting${totalMeetings===1?'':'s'} once split/paired), ${freq}× a week, ${mins} min nights → <strong>${totalMeetings} meetings</strong> (${totalWeeks} weeks if you never skip). No stop date. If you miss a week, slide everything down. The list does not expire.</p>
    <p style="font-size:0.75rem; color:#6b5c3c;">Covering: ${scopeLabel}</p>
    <table><thead><tr><th>Week</th><th>${startDate ? 'Date' : 'Meeting'}</th><th>Covers</th></tr></thead>
    <tbody>${rows}</tbody></table>
    <button onclick="window.print()" style="margin-top:14px; width:100%; background:#0369a1; color:#fff; border:none; padding:10px; border-radius:8px; font-weight:700; cursor:pointer;">Print This Plan</button>
    <div style="margin-top:14px; padding-top:14px; border-top:1px solid #eee;">
      <label style="display:block; font-size:0.8rem; font-weight:700; color:#6b5c3c; margin-bottom:6px;">Name this class to bookmark it — resume it later from "My Classes"</label>
      <div style="display:flex; gap:8px;">
        <input type="text" id="cohort-name-input" placeholder="e.g. Tuesday Night Daniel Group" style="flex:1; padding:9px 12px; border-radius:8px; border:1px solid #ddd; font-family:-apple-system,sans-serif; font-size:0.9rem; box-sizing:border-box;">
        <button type="button" onclick="window.saveLastPlanAsCohort()" style="background:#7c3aed;color:#fff;border:none;padding:9px 16px;border-radius:8px;font-weight:700;cursor:pointer;">💾 Save as a Class</button>
      </div>
      <p id="cohort-save-confirm" style="font-size:0.8rem; color:#047857; margin-top:6px; display:none;">Saved — find it under "My Classes" in the menu.</p>
    </div>
  `;
};

window.saveLastPlanAsCohort = function(){
  if (!window.LAST_PLAN || typeof createCohort !== 'function') return;
  const nameInput = document.getElementById('cohort-name-input');
  const name = (nameInput && nameInput.value.trim()) || 'Untitled class';
  const p = window.LAST_PLAN;
  createCohort(name, p.scopeValue, p.scopeLabel, p.freq, p.mins, p.startDateISO);
  const confirmEl = document.getElementById('cohort-save-confirm');
  if (confirmEl) confirmEl.style.display = 'block';
  if (typeof renderCohortsList === 'function') renderCohortsList();
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