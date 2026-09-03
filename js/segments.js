// segments.js — splits an overlong chapter into time-bounded pieces ("parts"), book-agnostic.
//
// NOTE ON NAMING: this is deliberately called a "segment" / "part", never a "sitting" —
// js/sittings.js already owns that word for imported commute voice-notes. Don't reuse it here.
//
// A segment object looks like:
// {
//   index, total,                 // 0-based position among this chapter's parts, and how many parts total
//   book, chNum,                  // convenience copies of the parent session's book/chNum
//   label,                        // e.g. "Daniel 7, part 2 of 3" or just the chapterLabel if total===1
//   startsAt, endsAt,             // verse labels like "7:9" / "7:14", or null if we couldn't parse one
//   startVerseNum, endVerseNum,   // numeric verse bounds for slicing the scripture text, or null
//   points, refs, hist, topics, wordStudies, opens,  // the slice of the chapter's material for this part
//   isFirst, isLast,
//   estMinutes
// }

const SEGMENT_UNSPLITTABLE_BOOKS = ['Between the Testaments'];

function segmentsIsSplittable(s){
  return s && s.points && s.points.length > 1 && SEGMENT_UNSPLITTABLE_BOOKS.indexOf(s.book) === -1;
}

// Pulls "7:9" (chapter:verse, optionally a verse range) off the front of a point string
// like "7:9-10 — the Ancient of Days takes his seat...". Returns null if the point doesn't
// lead with a parseable reference (rare, but treated as a soft failure, not an error).
function segmentsParseLeadRef(text){
  if (!text) return null;
  const m = /^\s*(\d{1,3}):(\d{1,3})(?:[–—-](\d{1,3}))?/.exec(text);
  if (!m) return null;
  const v1 = parseInt(m[2], 10);
  const v2 = m[3] ? parseInt(m[3], 10) : v1;
  return { ch: m[1], v1: v1, v2: v2 };
}

function segmentsSliceProportional(arr, gi, total){
  if (!arr || !arr.length) return [];
  if (total <= 1) return arr.slice();
  const n = arr.length;
  const start = Math.floor(n * gi / total);
  const end = Math.floor(n * (gi + 1) / total);
  return arr.slice(start, Math.max(end, start));
}

function segmentsWholeChapter(s){
  const ch = s.chNum.replace(/[–—-].*/, '').trim();
  return {
    index: 0, total: 1,
    book: s.book, chNum: ch,
    label: s.chapterLabel,
    startsAt: null, endsAt: null,
    startVerseNum: null, endVerseNum: null,
    points: s.points || [],
    refs: s.refs || [],
    hist: s.hist || [],
    topics: s.topics || [],
    wordStudies: s.wordStudies || [],
    opens: s.opens || [],
    isFirst: true, isLast: true,
    estMinutes: (typeof estimateSessionMinutes === 'function') ? estimateSessionMinutes(s) : null
  };
}

// The core splitter. targetMinutes is the length of one meeting; a chapter that already
// fits comes back as a single (unsplit) segment.
function computeSegments(s, targetMinutes){
  targetMinutes = targetMinutes || 40;

  if (!segmentsIsSplittable(s)) return [segmentsWholeChapter(s)];

  const wholeEst = (typeof estimateSessionMinutes === 'function') ? estimateSessionMinutes(s) : null;
  if (wholeEst !== null && wholeEst <= targetMinutes * 1.15) return [segmentsWholeChapter(s)];

  const ch = s.chNum.replace(/[–—-].*/, '').trim();
  const verses = (typeof getVersesForChapter === 'function') ? getVersesForChapter(s.book, ch) : null;
  const verseCount = verses ? verses.length : 20;
  const readingMinTotal = (verseCount * 12) / 60;
  const overhead = 6;
  const refsMin = (s.refs ? s.refs.length : 0) * 1.2;
  const histMin = (s.hist ? s.hist.length : 0) * 2.5;
  const opensMin = (s.opens ? s.opens.length : 0) * 4;
  const topicsMin = (s.topics ? s.topics.length : 0) * 3;
  const wordsMin = (s.wordStudies ? s.wordStudies.length : 0) * 1.5;
  const supportMinTotal = refsMin + histMin + opensMin + topicsMin + wordsMin + overhead;

  const n = s.points.length;
  const perPointWeight = 3.5 + (readingMinTotal / n) + (supportMinTotal / n);

  // Greedy bin-packing in existing verse order — never reorders points, just decides
  // where to cut. Every group gets at least one point even if that overshoots slightly,
  // since a part with zero material makes no sense.
  const groups = [];
  let cur = [];
  let curEst = 0;
  for (let i = 0; i < n; i++){
    if (cur.length && (curEst + perPointWeight) > targetMinutes * 1.05){
      groups.push(cur);
      cur = [];
      curEst = 0;
    }
    cur.push(i);
    curEst += perPointWeight;
  }
  if (cur.length) groups.push(cur);

  const total = groups.length;
  if (total <= 1) return [segmentsWholeChapter(s)];

  return groups.map((idxs, gi) => {
    const firstRef = segmentsParseLeadRef(s.points[idxs[0]]);
    const lastRef = segmentsParseLeadRef(s.points[idxs[idxs.length - 1]]);
    const startsAt = firstRef ? `${firstRef.ch}:${firstRef.v1}` : null;
    const endsAt = lastRef ? `${lastRef.ch}:${lastRef.v2}` : null;
    const isLast = gi === total - 1;
    return {
      index: gi, total: total,
      book: s.book, chNum: ch,
      label: `${s.chapterLabel}, part ${gi + 1} of ${total}`,
      startsAt: startsAt, endsAt: endsAt,
      startVerseNum: firstRef ? firstRef.v1 : null,
      endVerseNum: lastRef ? lastRef.v2 : null,
      points: idxs.map(i => s.points[i]),
      refs: segmentsSliceProportional(s.refs, gi, total),
      hist: segmentsSliceProportional(s.hist, gi, total),
      topics: segmentsSliceProportional(s.topics, gi, total),
      wordStudies: segmentsSliceProportional(s.wordStudies, gi, total),
      // Opens are chapter-wide discussion questions, not point-specific: the opening hook
      // goes on part 1, the full open-question set for real discussion goes on the last part.
      opens: gi === 0 ? (s.opens && s.opens.length ? [s.opens[0]] : []) : (isLast ? (s.opens || []) : []),
      isFirst: gi === 0, isLast: isLast,
      estMinutes: Math.round(idxs.length * perPointWeight)
    };
  });
}
