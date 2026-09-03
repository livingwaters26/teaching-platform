let popoutWin = null;

function updateSyncStatus(){
  const el = document.getElementById('sync-status');
  const closeBtn = document.getElementById('btn-close-popout');
  if (popoutWin && !popoutWin.closed) {
    el.textContent = '● Synced with popup';
    el.className = 'sync-status sync-on';
    closeBtn.style.display = 'inline-block';
  } else {
    el.textContent = '● Popup not open';
    el.className = 'sync-status sync-off';
    popoutWin = null;
    closeBtn.style.display = 'none';
  }
}

document.getElementById('btn-close-popout').onclick = function(){
  if (popoutWin && !popoutWin.closed) { popoutWin.close(); }
  popoutWin = null;
  updateSyncStatus();
};
setInterval(updateSyncStatus, 1000);

function buildPopoutHTML(s, seg){
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Study Guide — ${s.book} ${s.chNum}</title>
    <style>
      body{ font-family: Georgia, serif; background:#fffdf8; color:#1a1408; margin:0; padding:40px; }
      .session-head{ text-align:center; margin-bottom:24px; }
      .session-head .eyebrow{ font-family:-apple-system,sans-serif; font-size:0.8rem; letter-spacing:0.1em; text-transform:uppercase; color:#b45309; font-weight:700; }
      .session-head h1{ font-size:2.2rem; margin:8px 0; }
      .scripture-text{ font-size:1.4rem; line-height:2; max-width:750px; margin:0 auto; }
      .scripture-live-note{ font-family:-apple-system,sans-serif; font-size:0.85rem; color:#6b5c3c; font-style:italic; max-width:750px; margin:0 auto 10px; text-align:center; }
      .reader-bar{ max-width:750px; margin:0 auto 16px; display:flex; gap:8px; align-items:center; flex-wrap:wrap; }
      .verse-wrap.reading-now{ background:#fef3c7; border-radius:4px; box-shadow:0 0 0 3px #fef3c7; transition:background 0.3s; }
      .reader-bar select{ padding:8px 10px; border-radius:6px; border:1px solid #ccc; font-family:-apple-system,sans-serif; font-size:0.82rem; max-width:220px; }
      .reader-bar button{ background:#0369a1; color:#fff; border:none; padding:8px 14px; border-radius:6px; font-family:-apple-system,sans-serif; font-size:0.82rem; font-weight:700; cursor:pointer; }
      @media print{ .reader-bar{ display:none; } }
      .scripture-text .vn{ font-size:0.85rem; vertical-align:super; color:#b45309; font-weight:700; }
      .block{ max-width:750px; margin:0 auto 24px; }
      .block-label{ font-family:-apple-system,sans-serif; font-size:0.72rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:#d97706; margin-bottom:10px; border-bottom:1px solid #eee; padding-bottom:6px; }
      .point{ font-size:1.05rem; line-height:1.7; margin-bottom:12px; }
      .hero-image{ max-width:750px; margin:0 auto 24px; border-radius:12px; overflow:hidden; box-shadow:0 4px 16px rgba(0,0,0,0.12); }
      .hero-image img{ width:100%; display:block; max-height:320px; object-fit:cover; }
      .hero-caption{ background:#fff; padding:10px 14px; font-family:-apple-system,sans-serif; font-size:0.8rem; color:#6b5c3c; font-style:italic; }
      .topics-grid{ max-width:750px; margin:0 auto 24px; display:grid; grid-template-columns:1fr 1fr; gap:16px; }
      .topic-card{ background:linear-gradient(160deg,#fff8e8,#fffdf8); border:2px solid #e8d9a8; border-radius:14px; padding:20px; box-shadow:0 3px 10px rgba(180,83,9,0.08); }
      .topic-icon{ font-size:1.8rem; margin-bottom:8px; }
      .topic-title{ font-family:-apple-system,sans-serif; font-weight:800; font-size:1.05rem; color:#8a4f0a; margin-bottom:10px; }
      .topic-body{ font-size:0.96rem; line-height:1.65; color:#332a1a; }
      @media (max-width: 700px){ .topics-grid{ grid-template-columns:1fr; } }
      .word-cards-wrap{ max-width:750px; margin:0 auto 24px; }
      .word-cards-label{ font-family:-apple-system,sans-serif; font-size:0.72rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:#7c3aed; margin-bottom:10px; }
      .word-cards-grid{ display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:14px; }
      .word-card{ background:linear-gradient(160deg,#f3f0ff,#fdfcff); border:2px solid #ddd0f7; border-radius:14px; padding:18px; box-shadow:0 3px 10px rgba(124,58,237,0.08); }
      .word-card-term{ font-family:Georgia,serif; font-weight:800; font-size:1.25rem; color:#4c1d95; margin-bottom:6px; }
      .word-card-orig{ display:inline-block; background:#7c3aed; color:#fff; font-family:-apple-system,sans-serif; font-size:0.68rem; font-weight:700; padding:3px 10px; border-radius:999px; margin-bottom:10px; }
      .word-card-meaning{ font-size:0.9rem; line-height:1.6; color:#332a1a; }
      #po-print-btn{ position:fixed; top:16px; right:16px; background:#b45309; color:#fff; border:none; padding:10px 16px; border-radius:8px; font-family:-apple-system,sans-serif; font-weight:700; cursor:pointer; font-size:0.8rem; }
      #po-scroll-btn{ position:fixed; top:16px; right:190px; background:#0369a1; color:#fff; border:none; padding:10px 16px; border-radius:8px; font-family:-apple-system,sans-serif; font-weight:700; cursor:pointer; font-size:0.8rem; }
      @media print{ #po-print-btn, #po-scroll-btn{ display:none; } }
    </style></head>
    <body>
      <button id="po-print-btn" onclick="window.print()">Print / Save PDF</button>
      <button id="po-scroll-btn">▶ Auto-Scroll</button>
      <div id="po-content">${displayHTML(s, seg)}</div>
      <script>
        let scrolling = false, scrollTimer = null;
        const scrollBtn = document.getElementById('po-scroll-btn');

        function wireSpeechReaderPopout(){
          var bars = document.querySelectorAll('.reader-bar:not([data-wired])');
          bars.forEach(function(bar){
            bar.setAttribute('data-wired', '1');
            var verses;
            try { verses = JSON.parse(bar.dataset.verses); } catch(e) { return; }
            var voiceSel = bar.querySelector('.reader-voice');
            var playBtn = bar.querySelector('.reader-play');
            var pauseBtn = bar.querySelector('.reader-pause');
            var stopBtn = bar.querySelector('.reader-stop');
            var idx = 0, isPlaying = false;

            function populateVoices(){
              var voices = speechSynthesis.getVoices().filter(function(v){ return v.lang.indexOf('en') === 0; });
              var opts = voices.map(function(v,i){ return '<option value="' + i + '">' + v.name + '</option>'; }).join('');
              voiceSel.innerHTML = opts || '<option>Default voice</option>';
            }
            populateVoices();
            speechSynthesis.onvoiceschanged = populateVoices;

            function speakNext(){
              if (idx >= verses.length) { resetButtons(); idx = 0; return; }
              var prevEl = bar.parentElement.querySelector('.verse-wrap.reading-now');
              if (prevEl) prevEl.classList.remove('reading-now');
              var curEl = bar.parentElement.querySelector('.verse-wrap[data-vidx="' + idx + '"]');
              if (curEl) {
                curEl.classList.add('reading-now');
                curEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
              var utter = new SpeechSynthesisUtterance(verses[idx]);
              var voices = speechSynthesis.getVoices().filter(function(v){ return v.lang.indexOf('en') === 0; });
              var selected = voices[parseInt(voiceSel.value)];
              if (selected) utter.voice = selected;
              utter.rate = 0.92;
              utter.onend = function(){ idx++; if (isPlaying) speakNext(); };
              speechSynthesis.speak(utter);
            }
            function resetButtons(){
              playBtn.style.display = 'inline-block';
              pauseBtn.style.display = 'none';
              stopBtn.style.display = 'none';
              isPlaying = false;
              var activeEl = bar.parentElement.querySelector('.verse-wrap.reading-now');
              if (activeEl) activeEl.classList.remove('reading-now');
            }
            playBtn.addEventListener('click', function(){
              isPlaying = true;
              playBtn.style.display = 'none';
              pauseBtn.style.display = 'inline-block';
              stopBtn.style.display = 'inline-block';
              speakNext();
            });
            pauseBtn.addEventListener('click', function(){
              isPlaying = false;
              speechSynthesis.cancel();
              playBtn.style.display = 'inline-block';
              pauseBtn.style.display = 'none';
            });
            stopBtn.addEventListener('click', function(){
              isPlaying = false;
              idx = 0;
              speechSynthesis.cancel();
              resetButtons();
            });
          });
        }
        wireSpeechReaderPopout();

        window.addEventListener('message', function(e){
          if (e.data && e.data.type === 'GROUP_STUDY_UPDATE') {
            speechSynthesis.cancel();
            document.getElementById('po-content').innerHTML = e.data.html;
            if (e.data.title) document.title = e.data.title;
            scrolling = false;
            scrollBtn.textContent = '▶ Auto-Scroll';
            clearInterval(scrollTimer);
            window.scrollTo(0,0);
            wireSpeechReaderPopout();
          }
        });

        scrollBtn.addEventListener('click', function(){
          scrolling = !scrolling;
          scrollBtn.textContent = scrolling ? '⏸ Pause Scroll' : '▶ Auto-Scroll';
          if (scrolling) {
            scrollTimer = setInterval(function(){
              window.scrollBy({ top: 1, behavior: 'auto' });
              if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
                scrolling = false;
                scrollBtn.textContent = '▶ Auto-Scroll';
                clearInterval(scrollTimer);
              }
            }, 120);
          } else {
            clearInterval(scrollTimer);
          }
        });
      <\/script>
    </body></html>`;
}

document.getElementById('btn-popout').onclick = function(){
  const seg = (typeof currentSegment !== 'undefined') ? currentSegment : null;
  if (popoutWin && !popoutWin.closed) {
    popoutWin.focus();
    popoutWin.postMessage({ type: 'GROUP_STUDY_UPDATE', html: displayHTML(SESSIONS[current], seg), title: `Study Guide — ${SESSIONS[current].book} ${SESSIONS[current].chNum}` }, '*');
    return;
  }
  const html = buildPopoutHTML(SESSIONS[current], seg);
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  popoutWin = window.open(url, 'GroupStudyDisplay', 'width=1000,height=750,menubar=no,toolbar=no,location=no,status=no');
  if (!popoutWin) {
    alert('Your browser blocked this popup. Please allow popups for this page (check the address bar for a blocked-popup icon), then click the button again.');
  }
  updateSyncStatus();
};