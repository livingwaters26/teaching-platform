function wireSpeechReader(root){
  root = root || document;
  const bars = root.querySelectorAll('.reader-bar:not([data-wired])');
  bars.forEach(bar => {
    bar.setAttribute('data-wired', '1');
    let verses;
    try { verses = JSON.parse(bar.dataset.verses); } catch(e) { return; }
    const voiceSel = bar.querySelector('.reader-voice');
    const playBtn = bar.querySelector('.reader-play');
    const pauseBtn = bar.querySelector('.reader-pause');
    const stopBtn = bar.querySelector('.reader-stop');
    let idx = 0, isPlaying = false;

    function populateVoices(){
      const voices = speechSynthesis.getVoices().filter(v => v.lang.startsWith('en'));
      voiceSel.innerHTML = voices.map((v,i) => `<option value="${i}">${v.name}</option>`).join('') || '<option>Default voice</option>';
    }
    populateVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) speechSynthesis.onvoiceschanged = populateVoices;

    function speakNext(){
      if (idx >= verses.length) { resetButtons(); idx = 0; return; }
      const prevEl = bar.parentElement.querySelector('.verse-wrap.reading-now');
      if (prevEl) prevEl.classList.remove('reading-now');
      const curEl = bar.parentElement.querySelector('.verse-wrap[data-vidx="' + idx + '"]');
      if (curEl) {
        curEl.classList.add('reading-now');
        curEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      const utter = new SpeechSynthesisUtterance(verses[idx]);
      const voices = speechSynthesis.getVoices().filter(v => v.lang.startsWith('en'));
      const selected = voices[parseInt(voiceSel.value)];
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
      const activeEl = bar.parentElement.querySelector('.verse-wrap.reading-now');
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