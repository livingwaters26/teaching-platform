// cohorts.js — "My Classes": named, book-agnostic bookmarks for a recurring group's plan.
//
// A cohort remembers its schedule params (scope / times-a-week / minutes / start date) and
// which meeting it's currently on, so a teacher can jump straight back to the right lesson
// (and the right part, when a chapter had to be split — see js/segments.js) without
// re-deriving anything by hand. Every meeting's exact stopping point is computed in advance
// by buildMeetingUnits(), never discovered live, so the teacher can prep the next lesson
// ahead of time.
//
// Storage is client-side only (localStorage), matching this app's no-backend pattern —
// same approach as js/sittings.js, but a different key and a different word: a "cohort"
// here is a class/group, not an imported commute note-taking session.

const COHORTS_KEY = 'lw-cohorts-v1';

// Which class THIS BROWSER TAB is currently teaching (if any) — sessionStorage on purpose,
// not localStorage. A cohort's saved schedule/position (above) is shared across every tab
// and persists between visits; "which one is active right now" is deliberately per-tab, so
// opening a second tab to look something up never hijacks the class running in tab one, and
// never leaves tab one silently scoped to whatever tab two was just doing.
const ACTIVE_COHORT_KEY = 'lw-active-cohort-v1';

function setActiveCohortId(id){
  try {
    if (id) sessionStorage.setItem(ACTIVE_COHORT_KEY, id);
    else sessionStorage.removeItem(ACTIVE_COHORT_KEY);
  } catch(e) {}
}
window.setActiveCohortId = setActiveCohortId;

function getActiveCohort(){
  let id;
  try { id = sessionStorage.getItem(ACTIVE_COHORT_KEY); } catch(e) { id = null; }
  if (!id) return null;
  const found = loadCohorts().find(c => c.id === id);
  if (!found) { setActiveCohortId(null); return null; } // stale pointer (class was deleted)
  return found;
}
window.getActiveCohort = getActiveCohort;

// Returns null unless a class is active in this tab AND the given SESSIONS index is part
// of that class's own scope — used by js/render.js's teacher-pane header so it can say
// "Lesson 3 of 25 · Tuesday Nights Daniel Group" instead of "Lesson 118 of 509 · Daniel
// Group Study" (technically true, but reads like the whole app is one endless course).
window.getActiveCohortLabelFor = function(sessionIndex){
  const cohort = getActiveCohort();
  if (!cohort) return null;
  const scoped = scopedSessionsFor(cohort.scopeValue);
  const pos = scoped.findIndex(x => x.i === sessionIndex);
  if (pos === -1) return null; // this chapter isn't part of the active class's plan
  return { name: cohort.name, num: pos + 1, total: scoped.length };
};



function loadCohorts(){
  try {
    const raw = localStorage.getItem(COHORTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch(e) { return []; }
}

function saveCohorts(list){
  try { localStorage.setItem(COHORTS_KEY, JSON.stringify(list)); } catch(e) {}
}

// Mirrors getScopedSessions() in js/main.js, but takes an explicit scope value instead of
// reading the live #planner-scope select — so a saved class can be recomputed correctly
// later even while the planner UI itself is showing something else.
function scopedSessionsFor(scopeValue){
  if (!scopeValue) return SESSIONS.map((s,i)=>({s,i}));
  if (scopeValue === 'path:daniel') {
    return SESSIONS.map((s,i)=>({s,i})).filter(x => x.s.book === 'Daniel');
  }
  if (scopeValue === 'path:dan-rev') {
    return SESSIONS.map((s,i)=>({s,i})).filter(x =>
      x.s.book === 'Daniel' || x.s.book === 'Between the Testaments' || x.s.book === 'Revelation'
    );
  }
  if (scopeValue.indexOf('book:') === 0) {
    const bookName = scopeValue.slice(5);
    return SESSIONS.map((s,i)=>({s,i})).filter(x => x.s.book === bookName);
  }
  if (scopeValue.indexOf('custom:') === 0) {
    const parts = scopeValue.slice(7).split('-');
    const lo = parseInt(parts[0], 10), hi = parseInt(parts[1], 10);
    return SESSIONS.map((s,i)=>({s,i})).filter(x => x.i >= lo && x.i <= hi);
  }
  return SESSIONS.map((s,i)=>({s,i}));
}

// Turns a scoped lesson list into one entry per meeting: a whole lesson, two paired light
// lessons (only when there's real spare time in the window), or — when a chapter is too
// big to fit — one entry per part, in verse order, each carrying its own stopping point.
// Book-agnostic: works the same for Daniel, Revelation, John, or anything added later.
function buildMeetingUnits(scoped, mins){
  const units = [];
  let i = 0;
  while (i < scoped.length) {
    const x = scoped[i];
    const est = (typeof estimateSessionMinutes === 'function') ? estimateSessionMinutes(x.s) : 40;
    if (est <= mins * 1.15) {
      if (mins >= 70 && i + 1 < scoped.length) {
        const next = scoped[i+1];
        const nextEst = (typeof estimateSessionMinutes === 'function') ? estimateSessionMinutes(next.s) : 40;
        if ((est + nextEst) <= mins * 1.1) {
          units.push({
            kind: 'paired',
            label: `Lesson ${x.i+1}: ${x.s.chapterLabel} + Lesson ${next.i+1}: ${next.s.chapterLabel}`,
            estMin: est + nextEst,
            sessionIndex: x.i, segIndex: 0, segTotal: 1
          });
          i += 2;
          continue;
        }
      }
      units.push({
        kind: 'whole',
        label: `Lesson ${x.i+1}: ${x.s.chapterLabel}`,
        estMin: est,
        sessionIndex: x.i, segIndex: 0, segTotal: 1
      });
      i += 1;
    } else {
      const segs = (typeof computeSegments === 'function') ? computeSegments(x.s, mins) : [];
      segs.forEach(seg => {
        units.push({
          kind: seg.total > 1 ? 'segment' : 'whole',
          label: `Lesson ${x.i+1}: ${seg.label}${seg.startsAt ? ' — picks up at ' + x.s.book + ' ' + seg.startsAt : ''}`,
          estMin: seg.estMinutes,
          sessionIndex: x.i, segIndex: seg.index, segTotal: seg.total
        });
      });
      i += 1;
    }
  }
  return units;
}

// Full schedule (units + dated rows) for a set of saved params — used both when a class is
// created and every time its card is re-rendered, so it always reflects the live SESSIONS data.
function scheduleForCohortParams(scopeValue, freq, mins, startDateISO){
  const scoped = scopedSessionsFor(scopeValue);
  const units = buildMeetingUnits(scoped, mins);
  const startDate = startDateISO ? new Date(startDateISO + 'T00:00:00') : null;
  const totalWeeks = Math.ceil(units.length / (freq || 1));
  let meetingNum = 0;
  const rows = [];
  let idx = 0;
  for (let week = 1; week <= totalWeeks; week++) {
    for (let m = 0; m < freq && idx < units.length; m++) {
      meetingNum++;
      let dateStr = '';
      if (startDate) {
        const d = new Date(startDate);
        d.setDate(d.getDate() + (meetingNum - 1) * Math.round(7/freq));
        dateStr = d.toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' });
      }
      rows.push({ week, meetingNum, dateStr, unit: units[idx] });
      idx++;
    }
  }
  return { units, rows, totalWeeks };
}

function createCohort(name, scopeValue, scopeLabel, freq, mins, startDateISO){
  const cohorts = loadCohorts();
  const cohort = {
    id: 'c' + Date.now().toString(36) + Math.random().toString(36).slice(2,7),
    name: name || 'Untitled class',
    scopeValue, scopeLabel: scopeLabel || '', freq: freq || 1, mins: mins || 40,
    startDateISO: startDateISO || '',
    createdAt: Date.now(),
    currentUnitIndex: 0
  };
  cohorts.unshift(cohort);
  saveCohorts(cohorts);
  return cohort;
}

function deleteCohort(id){
  saveCohorts(loadCohorts().filter(c => c.id !== id));
  if (typeof getActiveCohort === 'function') {
    let activeId;
    try { activeId = sessionStorage.getItem(ACTIVE_COHORT_KEY); } catch(e) { activeId = null; }
    if (activeId === id) setActiveCohortId(null);
  }
}

// Jumps the app's live view to a given meeting number within a cohort's schedule, setting
// the shared `current` / `currentSegment` globals (declared in js/main.js) and re-rendering.
function jumpToCohortUnit(cohort, unitIndex){
  const { units } = scheduleForCohortParams(cohort.scopeValue, cohort.freq, cohort.mins, cohort.startDateISO);
  if (!units.length) return false;
  const clamped = Math.max(0, Math.min(unitIndex, units.length - 1));
  const unit = units[clamped];
  current = unit.sessionIndex;
  currentSegment = (unit.segTotal > 1 && typeof computeSegments === 'function')
    ? computeSegments(SESSIONS[unit.sessionIndex], cohort.mins)[unit.segIndex]
    : null;
  render();
  return true;
}

function advanceCohort(id){
  const cohorts = loadCohorts();
  const cohort = cohorts.find(c => c.id === id);
  if (!cohort) return;
  const { units } = scheduleForCohortParams(cohort.scopeValue, cohort.freq, cohort.mins, cohort.startDateISO);
  cohort.currentUnitIndex = Math.min(cohort.currentUnitIndex + 1, Math.max(units.length - 1, 0));
  saveCohorts(cohorts);
  setActiveCohortId(id);
  jumpToCohortUnit(cohort, cohort.currentUnitIndex);
  if (typeof closeCohorts === 'function') closeCohorts();
  if (typeof closeDrawer === 'function') closeDrawer();
  if (typeof renderCohortsList === 'function') renderCohortsList();
}

function resumeCohort(id){
  const cohorts = loadCohorts();
  const cohort = cohorts.find(c => c.id === id);
  if (!cohort) return;
  setActiveCohortId(id);
  jumpToCohortUnit(cohort, cohort.currentUnitIndex);
  if (typeof closeCohorts === 'function') closeCohorts();
  if (typeof closeDrawer === 'function') closeDrawer();
}

function renderCohortsList(){
  const box = document.getElementById('cohorts-list');
  if (!box) return;
  const cohorts = loadCohorts();
  if (!cohorts.length) {
    box.innerHTML = `<p style="font-size:0.82rem; color:#6b5c3c; font-style:italic;">No classes saved yet. Build a plan in "Build a Meeting Plan," then use "Save as a Class" to bookmark it here.</p>`;
    return;
  }
  box.innerHTML = cohorts.map(c => {
    const { units, rows } = scheduleForCohortParams(c.scopeValue, c.freq, c.mins, c.startDateISO);
    const total = units.length;
    const idx = Math.min(c.currentUnitIndex, Math.max(total - 1, 0));
    const row = rows[idx];
    const nextLabel = units[idx] ? units[idx].label : '(nothing scheduled in this range)';
    const doneAll = total > 0 && idx >= total - 1;
    return `
      <div class="sitting-card" data-cohort-id="${c.id}">
        <div class="sitting-card-head"><strong>${c.name}</strong><span>${c.freq}&times;/wk &middot; ${c.mins} min &middot; ${c.scopeLabel}</span></div>
        <div style="font-size:0.85rem; margin-bottom:8px;">Meeting ${idx+1} of ${total}${row && row.dateStr ? ' — ' + row.dateStr : ''}: <strong>${nextLabel}</strong></div>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          <button type="button" class="notes-add-btn cohort-resume-btn" data-id="${c.id}">&#9654; Resume this lesson</button>
          <button type="button" class="notes-add-btn cohort-advance-btn" data-id="${c.id}" style="background:#047857;" ${doneAll ? 'disabled' : ''}>&#10003; Mark done &amp; advance</button>
          <button type="button" class="sitting-delete cohort-delete-btn" data-id="${c.id}">Delete class</button>
        </div>
      </div>
    `;
  }).join('');
}

function wireCohortsDesk(){
  const list = document.getElementById('cohorts-list');
  if (list && !list.dataset.wired) {
    list.dataset.wired = '1';
    list.addEventListener('click', function(e){
      const id = e.target && e.target.dataset ? e.target.dataset.id : null;
      if (!id) return;
      if (e.target.classList.contains('cohort-resume-btn')) resumeCohort(id);
      else if (e.target.classList.contains('cohort-advance-btn')) advanceCohort(id);
      else if (e.target.classList.contains('cohort-delete-btn')) {
        if (confirm('Delete this class? Its saved position will be lost.')) { deleteCohort(id); renderCohortsList(); }
      }
    });
  }
  renderCohortsList();
}
