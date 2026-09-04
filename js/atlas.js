/* In-app atlas: maps, timelines, and diagrams for the share screen. */

const ATLAS = {
  exileMap: {
    title: "Judah → Babylon",
    caption: "Daniel’s world. Jerusalem is a small hill town. Babylon is the center of the map now."
  },
  israelMap: {
    title: "Galilee · Samaria · Judea",
    caption: "John’s Gospel walks this spine: Cana and Capernaum in the north, Jacob’s well in Samaria, Jerusalem and Bethany in the south."
  },
  churchesMap: {
    title: "Seven churches on a mail route",
    caption: "Real towns in Asia Minor, in the order a courier would walk them. Revelation 2–3 is a circuit, not a code."
  },
  statue: {
    title: "The statue in the dream — Daniel 2",
    caption: "One image, four metals, a stone not cut by hands. How readers name the kingdoms is on the teacher side. The picture is the text."
  },
  beasts: {
    title: "Four beasts from the sea — Daniel 7",
    caption: "Same pulse as the statue, different camera. A little horn with a mouth comes last."
  },
  weeks: {
    title: "Seventy sevens — Daniel 9:24–27",
    caption: "Seven + sixty-two + one. The fight is not the arithmetic. The fight is whether the last seven already ran."
  },
  timeline: {
    title: "From exile to the apostles",
    caption: "The years between the Testaments were not blank. Empires moved. A lamp was lit again."
  },
  revelationPath: {
    title: "How Revelation is built",
    caption: "Letters, then a throne, then seals, trumpets, bowls, then a city. Worship frames the wars."
  },
  templePlan: {
    title: "Ezekiel’s measured house — a sketch",
    caption: "Not to scale for today’s Temple Mount. The holy district in the land grant is about eight miles on a side."
  },
  paulineTimeline: {
    title: "Paul's dated years",
    caption: "Everything else in Paul's life is counted forward or backward from one hard peg: Gallio's year in Corinth, fixed by a stone inscription found at Delphi."
  }
};

function svgExileMap(){
  return `<svg class="atlas-svg" viewBox="0 0 640 360" role="img" aria-label="Map of the exile from Judah to Babylon">
    <rect width="640" height="360" fill="#f3efe2"/>
    <path d="M20 40 C180 20, 260 80, 300 140 C340 80, 420 40, 620 70 L620 340 L20 340 Z" fill="#d7ecf4"/>
    <path d="M40 200 C120 180, 180 210, 220 250 C280 300, 360 310, 500 280 C560 265, 610 250, 630 240 L630 350 L40 350 Z" fill="#e8d9a0"/>
    <path d="M80 220 C160 200, 210 230, 250 260 C300 290, 400 300, 520 270" fill="none" stroke="#b45309" stroke-width="6" stroke-dasharray="10 8" stroke-linecap="round"/>
    <circle cx="160" cy="230" r="8" fill="#7f1d1d"/>
    <text x="172" y="226" class="atlas-label">Jerusalem</text>
    <text x="172" y="244" class="atlas-sub">Judah</text>
    <circle cx="500" cy="268" r="10" fill="#b45309"/>
    <text x="512" y="264" class="atlas-label">Babylon</text>
    <text x="512" y="282" class="atlas-sub">Shinar</text>
    <text x="330" y="210" class="atlas-sub" fill="#9a3412">exile road →</text>
    <text x="70" y="80" class="atlas-sea">Great Sea</text>
    <text x="430" y="120" class="atlas-sea">Mesopotamia</text>
  </svg>`;
}

function svgIsraelMap(){
  return `<svg class="atlas-svg" viewBox="0 0 420 520" role="img" aria-label="Map of Galilee Samaria and Judea">
    <rect width="420" height="520" fill="#f3efe2"/>
    <path d="M20 40 L90 80 L80 500 L20 500 Z" fill="#cfe7f2"/>
    <ellipse cx="250" cy="90" rx="36" ry="22" fill="#7eb6d0"/>
    <text x="292" y="94" class="atlas-sub">Sea of Galilee</text>
    <path d="M250 112 C248 180, 255 240, 258 300 C262 360, 270 400, 280 455" fill="none" stroke="#7eb6d0" stroke-width="6"/>
    <ellipse cx="292" cy="478" rx="28" ry="18" fill="#c4a882"/>
    <text x="324" y="482" class="atlas-sub">Dead Sea</text>
    <circle cx="200" cy="70" r="6" fill="#b45309"/><text x="212" y="74" class="atlas-label">Cana</text>
    <circle cx="268" cy="108" r="6" fill="#b45309"/><text x="280" y="112" class="atlas-label">Capernaum</text>
    <circle cx="210" cy="230" r="6" fill="#047857"/><text x="222" y="234" class="atlas-label">Jacob's well</text>
    <text x="222" y="252" class="atlas-sub">Samaria</text>
    <circle cx="228" cy="355" r="7" fill="#7f1d1d"/><text x="240" y="352" class="atlas-label">Jerusalem</text>
    <circle cx="250" cy="368" r="5" fill="#7c3aed"/><text x="262" y="380" class="atlas-label">Bethany</text>
    <text x="30" y="30" class="atlas-kicker">NORTH</text>
    <text x="30" y="160" class="atlas-region">GALILEE</text>
    <text x="30" y="250" class="atlas-region">SAMARIA</text>
    <text x="30" y="370" class="atlas-region">JUDEA</text>
  </svg>`;
}

function svgChurchesMap(){
  const cities = [
    [90,260,'Ephesus'],[110,190,'Smyrna'],[150,120,'Pergamum'],
    [230,150,'Thyatira'],[280,170,'Sardis'],[330,200,'Philadelphia'],[360,250,'Laodicea']
  ];
  const line = cities.map((c,i)=> (i? 'L':'M') + c[0] + ',' + c[1]).join(' ');
  return `<svg class="atlas-svg" viewBox="0 0 520 340" role="img" aria-label="Seven churches of Asia">
    <rect width="520" height="340" fill="#e7f3f8"/>
    <path d="M0 220 C80 200, 140 230, 200 250 C300 280, 400 240, 520 210 L520 340 L0 340 Z" fill="#d7c39a"/>
    <circle cx="40" cy="300" r="10" fill="#64748b"/>
    <text x="56" y="304" class="atlas-sub">Patmos</text>
    <path d="${line}" fill="none" stroke="#b45309" stroke-width="4" stroke-dasharray="7 6"/>
    ${cities.map(([x,y,n],i)=> `<g>
      <circle cx="${x}" cy="${y}" r="8" fill="#b45309"/>
      <text x="${x+12}" y="${y-8}" class="atlas-label">${i+1}. ${n}</text>
    </g>`).join('')}
  </svg>`;
}

function svgStatue(){
  return `<svg class="atlas-svg" viewBox="0 0 280 420" role="img" aria-label="Daniel 2 statue">
    <rect width="280" height="420" fill="#f7f1e3"/>
    <ellipse cx="110" cy="400" rx="70" ry="12" fill="#c4b48a"/>
    <circle cx="110" cy="58" r="32" fill="#d4a017"/>
    <rect x="78" y="88" width="64" height="70" rx="8" fill="#c0c7d1"/>
    <rect x="70" y="158" width="80" height="70" rx="6" fill="#b87333"/>
    <rect x="86" y="228" width="18" height="110" fill="#4b5563"/>
    <rect x="116" y="228" width="18" height="110" fill="#4b5563"/>
    <rect x="84" y="338" width="22" height="28" fill="#6b7280"/>
    <rect x="114" y="338" width="22" height="28" fill="#b45309"/>
    <circle cx="210" cy="330" r="22" fill="#78716c"/>
    <path d="M188 330 L84 350" stroke="#444" stroke-width="3"/>
    <text x="150" y="64" class="atlas-label">Gold — head</text>
    <text x="150" y="122" class="atlas-label">Silver — chest</text>
    <text x="160" y="192" class="atlas-label">Bronze — middle</text>
    <text x="160" y="280" class="atlas-label">Iron — legs</text>
    <text x="160" y="390" class="atlas-label">Iron + clay — feet</text>
    <text x="186" y="318" class="atlas-sub">stone</text>
  </svg>`;
}

function svgBeasts(){
  const cards = [
    ['1','Lion + wings','Speed, then a human heart'],
    ['2','Bear, one side up','Three ribs — devour'],
    ['3','Leopard, four wings','Four heads, given rule'],
    ['4','Terrible fourth','Iron teeth, ten horns']
  ];
  return `<div class="beast-row">${cards.map(c => `
    <div class="beast-card">
      <div class="beast-num">${c[0]}</div>
      <div class="beast-name">${c[1]}</div>
      <div class="beast-note">${c[2]}</div>
    </div>`).join('')}</div>`;
}

function svgWeeks(){
  return `<div class="weeks-bar">
    <div class="week-seg week-7"><span>7</span><em>rebuild</em></div>
    <div class="week-seg week-62"><span>62</span><em>to an anointed one</em></div>
    <div class="week-seg week-gap"><span>?</span><em>some readers put a gap here</em></div>
    <div class="week-seg week-1"><span>1</span><em>last seven</em></div>
  </div>`;
}

function svgTimeline(){
  const ticks = [
    ['586','Exile'],['539','Cyrus'],['516','Temple'],['167','Antiochus'],
    ['164','Hanukkah'],['63','Rome'],['30','Cross'],['70','Temple falls']
  ];
  return `<div class="time-line">
    <div class="time-rail"></div>
    ${ticks.map(t => `<div class="time-tick"><b>${t[0]}</b><span>${t[1]}</span></div>`).join('')}
  </div>`;
}

function svgPaulineTimeline(){
  const ticks = [
    ['~34','Conversion'],['48–49','1st journey'],['50–52','Corinth (Gallio, AD 51)'],
    ['54–55','1 Corinthians'],['55–56','2 Corinthians'],['56–57','Romans'],
    ['60–62','Rome custody'],['~65','Death under Nero']
  ];
  return `<div class="time-line pauline-time-line">
    <div class="time-rail"></div>
    ${ticks.map(t => `<div class="time-tick"><b>${t[0]}</b><span>${t[1]}</span></div>`).join('')}
  </div>`;
}

function svgRevPath(){
  const steps = ['7 churches','Throne','Seals','Trumpets','Bowls','City'];
  return `<div class="rev-path">${steps.map((s,i)=> `<div class="rev-step"><i>${i+1}</i><span>${s}</span></div>${i<steps.length-1?'<div class="rev-arrow">→</div>':''}`).join('')}</div>`;
}

function svgTemple(){
  return `<svg class="atlas-svg" viewBox="0 0 400 400" role="img" aria-label="Sketch of Ezekiel temple courts">
    <rect width="400" height="400" fill="#f3efe2"/>
    <rect x="20" y="20" width="360" height="360" fill="none" stroke="#8a6d1f" stroke-width="6"/>
    <rect x="90" y="90" width="220" height="220" fill="#f7f1e3" stroke="#b45309" stroke-width="4"/>
    <rect x="150" y="130" width="100" height="140" fill="#e8d9a8" stroke="#7f1d1d" stroke-width="3"/>
    <rect x="175" y="250" width="50" height="30" fill="#b45309"/>
    <path d="M200 270 C260 280, 320 300, 390 330" fill="none" stroke="#0284c7" stroke-width="6"/>
    <text x="28" y="44" class="atlas-sub">outer square</text>
    <text x="155" y="122" class="atlas-sub">inner court</text>
    <text x="168" y="200" class="atlas-label">house</text>
    <text x="300" y="348" class="atlas-sub">river east →</text>
  </svg>`;
}

const ATLAS_RENDER = {
  exileMap: svgExileMap,
  israelMap: svgIsraelMap,
  churchesMap: svgChurchesMap,
  statue: svgStatue,
  beasts: svgBeasts,
  weeks: svgWeeks,
  timeline: svgTimeline,
  revelationPath: svgRevPath,
  templePlan: svgTemple,
  paulineTimeline: svgPaulineTimeline
};

function defaultVisualsFor(s){
  const book = s.book, ch = String(s.chNum || '');
  if (book === 'Daniel') {
    if (ch === '1') return ['exileMap'];
    if (ch === '2') return ['statue','exileMap'];
    if (ch === '3') return ['exileMap'];
    if (ch === '7') return ['beasts','statue'];
    if (ch === '8') return ['beasts','timeline'];
    if (ch === '9') return ['weeks','timeline'];
    if (ch === '11') return ['timeline','exileMap'];
    return ['exileMap'];
  }
  if (book === 'Revelation') {
    if (ch === '1' || ch.indexOf('2') === 0) return ['churchesMap','revelationPath'];
    if (ch === '4' || ch === '5') return ['revelationPath'];
    if (ch === '20' || ch === '21' || ch === '22') return ['revelationPath'];
    return ['revelationPath','churchesMap'];
  }
  if (book === 'John') {
    if (ch === '4') return ['israelMap'];
    if (ch === '2' || ch === '6') return ['israelMap'];
    if (['11','12','18','19'].indexOf(ch) >= 0) return ['israelMap'];
    return ['israelMap'];
  }
  if (book === 'Between the Testaments') return ['timeline','exileMap'];
  return [];
}

const PHOTO_DEFAULTS = {
  'Daniel|1': [{src:'images/babylon-gate.jpg', alt:'Ishtar Gate', caption:'The gate into the city that swallowed Judah.'}],
  'Daniel|3': [{src:'images/fiery-furnace.jpg', alt:'Furnace', caption:'The furnace — and a fourth figure the king cannot name.'}],
  'Daniel|6': [{src:'images/lions-den.jpg', alt:'Lions', caption:'The den. The edict was about prayer.'}],
  'Revelation|1': [{src:'images/patmos.jpg', alt:'Patmos', caption:'Patmos — prison island, open heaven.'}],
  // Rev 2-3 dropped the duplicate Patmos photo (2026-09-04) - that chapter already gets the churchesMap SVG below, and a 'Churches' caption on a Patmos-island photo was actually mislabeled (Patmos isn't where the 7 churches were).
  'John|4': [{src:'images/jacobs-well.jpg', alt:'Well', caption:'Noon at the well no respectable rabbi was supposed to visit.'}],
  'Between the Testaments|Azariah': [{src:'images/fiery-furnace.jpg', alt:'Furnace', caption:'Same fire. Some Bibles let the three men pray out loud.'}],
  'Between the Testaments|Maccabees': [{src:'images/scrolls.jpg', alt:'Scrolls', caption:'The library between Malachi and Matthew.'}]
};

function visualsHTML(s){
  const ids = (s.visuals && s.visuals.length) ? s.visuals : defaultVisualsFor(s);
  const extraPhotos = s.photos || PHOTO_DEFAULTS[s.book + '|' + s.chNum] || [];
  if (!ids.length && !extraPhotos.length) return '';
  let html = '<div class="atlas-wrap">';
  extraPhotos.forEach(p => {
    const isExternal = /^https?:\/\//i.test(p.src);
    const imgAttr = isExternal ? `data-cache-key="${p.src}"` : `src="${p.src}"`;
    html += `<figure class="atlas-fig"><img ${imgAttr} alt="${p.alt||''}" onerror="this.closest('.atlas-fig').style.display='none'" loading="lazy"><figcaption>${p.caption||''}</figcaption></figure>`;
  });
  ids.forEach(id => {
    const meta = ATLAS[id];
    const draw = ATLAS_RENDER[id];
    if (!meta || !draw) return;
    html += `<figure class="atlas-fig atlas-fig-draw">
      <div class="atlas-fig-title">${meta.title}</div>
      ${draw()}
      <figcaption>${meta.caption}</figcaption>
    </figure>`;
  });
  html += '</div>';
  return html;
}
