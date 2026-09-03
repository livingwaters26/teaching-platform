// Ruth — all 4 chapters.
// Written directly (not merged from a Grok batch) at Will's request: "there is a lot there,
// shes not a hebrew, so much there i need it deep and really through." Same schema as
// data/sessions/daniel.js and the Matthew/Acts/Genesis/Exodus files, pushed toward the
// richer end of the depth bar throughout (3 hist entries where the material earns it, 3
// topic cards, 3 word studies, 2 named views per chapter on the book's real disputed points:
// the threshing-floor euphemism question in ch3, and how Ruth's inclusion sits next to
// Deuteronomy 23:3's exclusion of Moabites in ch4).
//
// Course order: appended after Exodus (Daniel -> Between the Testaments -> Revelation ->
// John -> Matthew -> Acts -> Genesis -> Exodus -> Ruth). Ruth sets itself "in the days when
// the judges ruled" (1:1), so there's a real argument for moving it to sit right after a
// future Judges study instead of after Exodus — flagged for Will, not decided here.
// No local Ruth scripture/translation file exists yet, so this book's reading pane uses the
// live ESV/BSB lookup (js/scripture-source.js), same as Matthew, Acts, Genesis, and Exodus.
window.SESSIONS = window.SESSIONS || [];
window.SESSIONS.push(
{
  "book": "Ruth",
  "slug": "ruth",
  "chapterLabel": "Chapter 1 — A Famine, a Foreign Land, and a Vow That Would Not Let Go",
  "chNum": "1",
  "points": [
    "1:1–5 — A famine hits Bethlehem-Judah — a name that means \"house of bread,\" now with none — in the days when the judges ruled, the same violent, every-man-for-himself era the book of Judges describes. Elimelech (\"my God is King\") takes his wife Naomi (\"pleasant\") and two sons across the Jordan into Moab, a nation Israel had real, remembered reasons to distrust. The sons marry Moabite women, Orpah and Ruth. Then, in the space of one verse each, Elimelech dies, and ten years later both sons die too, leaving three widows with no husbands, no children, and under this culture's law, essentially no future.",
    "1:6–10 — Naomi hears that the LORD has visited his people and given them bread again, and sets out for home. On the road she stops and urges both daughters-in-law back to their mothers' houses: \"the LORD deal kindly (chesed) with you, as ye have dealt with the dead, and with me.\" This is not a cold dismissal — it is the most Naomi has left to give them: a blessing and an honest release, because she has no more sons to offer under the custom that might otherwise provide for them (Deuteronomy 25:5–10).",
    "1:11–14 — Naomi presses the case bluntly: even if she remarried tonight and bore sons, would these young women wait years to marry them? \"It grieveth me much for your sakes that the hand of the LORD is gone out against me.\" Orpah kisses her mother-in-law and turns back — a real, ordinary, entirely reasonable choice the narrator never criticizes. Ruth does something else: she \"clave unto her\" — the same Hebrew verb (davaq) Genesis 2:24 uses for a man cleaving to his wife, borrowed here for a daughter-in-law who will not let go.",
    "1:15–18 — Naomi tries once more: \"thy sister in law is gone back unto her people, and unto her gods: return thou after thy sister in law.\" Ruth answers with the most quoted vow in the book, and one of the most misapplied — often read at weddings, though it was spoken by a widow to her mother-in-law, not a bride to a groom: \"Whither thou goest, I will go; and where thou lodgest, I will lodge: thy people shall be my people, and thy God my God: where thou diest, will I die, and there will I be buried... the LORD do so to me, and more also, if ought but death part thee and me.\" That last line is a covenant self-curse formula — the language of treaties and oaths, not sentiment. Naomi sees she is \"stedfastly minded\" and stops arguing.",
    "1:19–22 — The two women arrive in Bethlehem and the whole town stirs: \"Is this Naomi?\" Her answer is the rawest theology in the book: \"call me not Naomi, call me Mara (bitter): for the Almighty hath dealt very bitterly with me... I went out full, and the LORD hath brought me home again empty: why then call ye me Naomi, seeing the LORD hath testified against me, and the Almighty hath afflicted me?\" The narrator does not correct her. This is lament, not unbelief — the same honesty Job speaks in his own losses — and the chapter's very last line quietly starts answering it before either woman can see the answer: \"they came to Bethlehem in the beginning of barley harvest.\""
  ],
  "refs": [
    "Genesis 19:36–38 — Moab's own origin story, born of Lot and his daughter; the tainted founding sits behind Israel's later wariness of the nation.",
    "Deuteronomy 23:3–6 — Moabites excluded from the assembly of the LORD to the tenth generation, because they did not meet Israel with bread and water on the road out of Egypt and hired Balaam to curse them.",
    "Numbers 25:1–3 — Moabite women drawing Israel into worship of Baal-peor; the folk-memory sitting behind Naomi's phrase \"unto her gods.\"",
    "Genesis 2:24 — \"cleave\" (davaq), the same word Ruth's clinging uses in 1:14, ordinarily marriage-vocabulary borrowed here for loyalty between women.",
    "Job 1:21; 2:10 — a sufferer naming God's hand in genuine loss without the narrator calling it sin; the same raw honesty as Naomi's Mara-speech."
  ],
  "hist": [
    "The book explicitly sets itself \"in the days when the judges ruled\" (1:1) — the same cyclical, lawless period Judges itself describes, where \"every man did that which was right in his own eyes.\" A famine bad enough to send a Bethlehem family into enemy territory across the Jordan says something about how desperate conditions in Judah had become.",
    "Moab was not a neutral neighbor in an Israelite audience's ear. Eglon king of Moab had oppressed Israel for eighteen years (Judges 3:12–30); the Balaam episode (Numbers 22–24) was an attempted hired curse; later Moabite kings would openly war against Israel (2 Kings 3). Every early hearer of this story knew Ruth's nationality was not a footnote.",
    "Levirate custom (a dead man's brother marrying his widow to raise up an heir in his name, Deuteronomy 25:5–10) is the unspoken law behind Naomi's whole argument in 1:11–13 — she is not being dramatic when she says she cannot offer them husbands; she is naming the actual legal mechanism that would have been their only real safety net."
  ],
  "opens": [
    "Naomi blesses both daughters-in-law with the same chesed-language and sends both of them away with equal honesty. What kind of loyalty does that make Ruth's staying?",
    "The narrator never criticizes Orpah for turning back. What does it do to the story if you insist on reading her as the story's failure and Ruth as its hero?",
    "Naomi's \"call me Mara\" is never corrected by God or the narrator. What does that do to a faith that feels it must always end a hard sentence with something positive?"
  ],
  "topics": [
    {
      "title": "A Vow With No Escape Clause",
      "icon": "📜",
      "body": "Ruth's oath in 1:16–17 borrows the self-curse formula normally sworn between nations or before God at a covenant, not the language two grieving women would ordinarily use with each other. She is not being sentimental. She is binding herself with treaty-weight words to a people, a land, and a God that owe her nothing yet."
    },
    {
      "title": "Two Valid Choices",
      "icon": "🚪",
      "body": "Orpah's kiss and Ruth's cling are both left standing by the narrator as real options, not a right answer and a wrong one. Scripture does not need every departure in this story to be a failure for Ruth's staying to be extraordinary — it is extraordinary on its own."
    },
    {
      "title": "Naming Her Own Grief",
      "icon": "😢",
      "body": "Renaming herself Mara is not Naomi losing her faith. The book lets a woman say plainly that God has dealt bitterly with her, testified against her, afflicted her — and then keeps walking her straight into the story God is already writing. Lament and continued obedience are not opposites here."
    }
  ],
  "wordStudies": [
    {
      "word": "Cleave",
      "orig": "Hebrew: davaq",
      "meaning": "1:14. The same verb Genesis 2:24 uses for a man cleaving to his wife — marital-strength loyalty language, borrowed here to describe a widowed daughter-in-law's choice to stay."
    },
    {
      "word": "Kindly / lovingkindness",
      "orig": "Hebrew: chesed",
      "meaning": "1:8. The book's key word — covenant loyalty that exceeds what is owed. Naomi asks God to give it to her daughters-in-law without realizing Ruth is about to become its living definition."
    },
    {
      "word": "Bitter / Almighty",
      "orig": "Hebrew: marah / Shaddai",
      "meaning": "1:20. Naomi's self-renaming pairs a bitterness-word with God's title as the all-sufficient one — naming both her pain and her theology of who she believes caused it, in the same breath."
    }
  ],
  "doctrinal": "Teacher-only: I read Naomi's Mara-speech as genuine lament, not sin needing correction — the narrator does not rebuke her, and the rest of Scripture (Job, a large share of the Psalms) makes room for exactly this kind of complaint aimed at God's sovereignty rather than away from it. I will not turn Orpah into a villain; the text's restraint about her is itself a teaching point. I read Ruth's vow — \"thy God my God\" — as a real and total conversion, not a sentimental turn of phrase; she is doing in one sentence what the rest of the Old Testament usually assumes takes a nation generations to accomplish.",
  "story": {
    "scene": "A famine emptying the town whose name means house of bread. Ten years in a country Israel's own law told them to be wary of. Three funerals in one family. A road back to Judah with two young widows who hold no legal claim to anything. A kiss at a crossroads. A grip that will not loosen.",
    "modern": "Choosing the harder, poorer, less certain loyalty when the easier road home is standing right there, blessed and offered freely by the very person you'd be leaving."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "Ruth's vow as full religious conversion",
      "body": "\"Thy God my God\" reads as Ruth genuinely leaving Chemosh for the LORD, not merely following Naomi geographically. Strength: the vow's totality — people and God together — and the book's total silence afterward about any lingering Moabite worship."
    },
    {
      "name": "The vow as primarily kinship-loyalty language",
      "body": "Some read Ruth's oath first as an ancient Near Eastern loyalty-oath (the genre used between vassals and kings), with theology riding along rather than being the main point. Strength: the book's own interest stays fixed on chesed and redemption more than on describing Ruth's inner spiritual journey. Cost: this can undersell how radical \"thy God my God\" would have sounded to an Israelite audience."
    }
  ]
},
{
  "book": "Ruth",
  "slug": "ruth",
  "chapterLabel": "Chapter 2 — Gleaning in the Field of a Man Named Boaz",
  "chNum": "2",
  "points": [
    "2:1–3 — The narrator introduces Boaz before the plot does: a kinsman of Elimelech's family, \"a mighty man of wealth.\" Ruth asks Naomi's permission to glean — the legal right of the poor, the stranger, the fatherless, and the widow to what reapers left behind at field edges and in dropped stalks (Leviticus 19:9–10; Deuteronomy 24:19). \"Her hap was to light on a part of the field belonging unto Boaz\" — the narrator's own word for luck, sitting two verses before the story stops being about luck at all.",
    "2:4–7 — Boaz arrives from town and greets his reapers, \"The LORD be with you,\" and they answer, \"The LORD bless thee\" — an ordinary working field that still talks like a congregation. He notices the stranger immediately and asks his servant, who reports everything: the Moabite damsel who came back with Naomi, who has gleaned since morning, resting only briefly in the shelter — a quiet note of how hard she has been working before Boaz ever speaks to her.",
    "2:8–13 — Boaz speaks to Ruth directly: stay in this field, stay near my young women, drink from our water when thirsty, and he has charged the young men not to touch her. She falls on her face: \"why have I found grace in thine eyes, that thou shouldest take knowledge of me, seeing I am a stranger?\" His answer names exactly what he has heard — that she left father, mother, and her native land for a people she did not know — and blesses her: \"the LORD recompense thy work... under whose wings thou art come to trust.\" That wing-image (kanaph) is not a throwaway metaphor; it is about to become a literal request.",
    "2:14–16 — At mealtime Boaz invites her to eat bread and dip it in the vinegar alongside his own workers, and she eats until she has leftovers. Privately, he instructs the young men to let extra handfuls fall from the bundles on purpose and not to reproach her for gathering even among the sheaves themselves — generosity deliberately disguised as ordinary carelessness.",
    "2:17–23 — She threshes what she gathered: about an ephah of barley, roughly three-fifths of a bushel — an extraordinary haul for one afternoon of legal gleaning. She brings it, and her mealtime leftovers, to Naomi, who asks where she worked and, on hearing the name, blesses God aloud: \"Blessed be he of the LORD, who hath not left off his kindness to the living and to the dead... the man is near of kin unto us, one of our next kinsmen.\" That is the book's first mention of the go'el — the kinsman-redeemer role that will drive everything left to happen. Ruth keeps gleaning through both barley and wheat harvest, roughly seven weeks of ordinary, patient faithfulness before the story moves again."
  ],
  "refs": [
    "Leviticus 19:9–10; 23:22 — leave the corners of the field and the gleanings of the harvest for the poor and the stranger.",
    "Deuteronomy 24:19–21 — forgotten sheaves left deliberately for the stranger, fatherless, and widow, \"that the LORD thy God may bless thee in all the work of thine hands.\"",
    "Leviticus 25:25 — the kinsman (go'el) who may redeem a poor relative's sold land — the legal backdrop to Naomi's excitement in 2:20.",
    "Psalm 91:4 — \"under his wings shalt thou trust\" — the same kanaph-image Boaz uses of God, now spoken as a blessing over a specific, named foreign woman.",
    "Matthew 25:35 — \"I was a stranger, and ye took me in\" — a later echo of the exact welcome Boaz extends to a foreign gleaner with nothing to offer him."
  ],
  "hist": [
    "Gleaning functioned as welfare with dignity attached rather than a handout — the poor still labored all day, in the sun, alongside the community, for what they received. The law made it illegal to strip a field completely bare specifically so the system could work, but nothing in the law compelled anyone's servants to treat a gleaner with respect. That part depended entirely on people like Boaz.",
    "A lone foreign widow gleaning among unmarried young men brought real risk that the text does not spell out loudly but assumes its audience understood without being told — Boaz's specific order that the young men not \"touch\" her, and not reproach her, names a danger by addressing it rather than by describing it."
  ],
  "opens": [
    "The narrator calls it \"her hap\" that Ruth's field happened to belong to Boaz. What is the book doing by placing the word for luck two verses before the word for kinsman-redeemer?",
    "Boaz blesses and protects Ruth before he has any legal duty toward her at all. What does that do to a reading where his redemption in chapter 4 is only about following the law?"
  ],
  "topics": [
    {
      "title": "Under Whose Wings",
      "icon": "🕊️",
      "body": "Boaz's blessing in 2:12 asks God to reward Ruth \"under whose wings\" she has come to trust. Chapter 3 will have Ruth ask Boaz himself, by name, to spread his own wing over her — she is about to ask the man who prayed this blessing to become the answer to his own prayer."
    },
    {
      "title": "A Field That Still Talks Like a Congregation",
      "icon": "🌾",
      "body": "Boaz greeting his reapers with \"the LORD be with you\" is ordinary workplace speech in this story, not a special occasion. Faithfulness in Ruth does not arrive as a miracle; it looks like people who talk to God on an ordinary Tuesday in a barley field."
    },
    {
      "title": "An Ephah for a Day's Bent Back",
      "icon": "⚖️",
      "body": "The sheer size of Ruth's haul — roughly three-fifths of a bushel — tells the audience something before Naomi ever asks a question: someone in that field had been unusually generous, on purpose, before anyone told him to be."
    }
  ],
  "wordStudies": [
    {
      "word": "Hap / chance",
      "orig": "Hebrew: miqreh",
      "meaning": "2:3. \"Chance\" or \"happening\" — a word the whole book uses with a quiet irony, since nothing that follows this verse reads like chance."
    },
    {
      "word": "Grace / favor",
      "orig": "Hebrew: chen",
      "meaning": "2:10. \"Why have I found grace in thine eyes\" — the same phrase Noah finds in Genesis 6:8. Unearned favor, not payment for merit already shown."
    },
    {
      "word": "Wings / skirt",
      "orig": "Hebrew: kanaph",
      "meaning": "2:12. The same word returns literally at 3:9, when Ruth asks Boaz to spread his kanaph over her — a poetic prayer becomes, two chapters later, a concrete marriage request."
    }
  ],
  "doctrinal": "Teacher-only: I read 2:3's \"hap\" as the narrator's quiet joke — the one moment in the whole book where God's name is not directly speaking is the one event that determines everything after it, which is exactly how Scripture usually narrates providence: no visions, no angels, just a woman choosing a field, and a story that keeps calling it luck while structuring the entire plot around it. I will connect 2:12's wing-blessing forward to 3:9 on purpose; that connection is the chapter's real payload, more than the size of the ephah.",
  "story": {
    "scene": "A field at the edge of harvest. A poor foreign woman with no legal claim to anything but the leftover stalks. A landowner who notices before anyone tells him to look. Handfuls of grain dropped on purpose exactly where a stranger's hands can reach them.",
    "modern": "Generosity disguised as simply doing your job a little more carelessly than you had to."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "Boaz's kindness as simple obedience to Torah",
      "body": "He is doing what Leviticus and Deuteronomy already command of every landowner; his character shows in doing the law well and completely, not in exceeding it."
    },
    {
      "name": "Boaz's kindness as deliberately exceeding the law",
      "body": "The law required leaving gleanings behind; it did not require inviting a gleaner to the communal meal, ordering extra grain dropped on purpose, or offering personal protection. Strength: the specificity of his instructions goes well past the plain requirement. Cost: both readings can be true together — obeying a law fully often looks, in practice, like more than its bare letter demands."
    }
  ]
},
{
  "book": "Ruth",
  "slug": "ruth",
  "chapterLabel": "Chapter 3 — A Threshing Floor at Midnight",
  "chNum": "3",
  "points": [
    "3:1–5 — Naomi, thinking now of Ruth's \"rest\" — a settled home, not just survival — proposes a plan: wash, anoint, dress in her best clothing, go down to the threshing floor after Boaz has eaten and drunk and is in good spirits, note where he lies down, uncover his feet, and lie down there. \"He will tell thee what thou shalt do.\" Ruth's answer is total: \"All that thou sayest unto me I will do.\"",
    "3:6–9 — She does exactly as instructed. At midnight Boaz is startled awake to find a woman at his feet and asks who is there. Her answer is the chapter's hinge: \"I am Ruth thine handmaid: spread therefore thy skirt over thine handmaid; for thou art a near kinsman.\" She takes Boaz's own blessing-language from 2:12 — the wings under which she has come to trust — and asks him, personally and directly, to become the fulfillment of his own prayer over her. This is not a passive woman waiting quietly to be chosen; it is a direct, legally-coded marriage proposal, spoken first by her.",
    "3:10–13 — Boaz blesses her again and names her action \"a greater kindness (chesed) in the latter end than at the beginning,\" because she did not go after young men, whether rich or poor. He agrees to the substance of her request but names a complication the reader has not yet heard: \"there is a kinsman nearer than I.\" He will give that man the first legal right of refusal, exactly as custom requires — and only then, \"as the LORD liveth,\" will he redeem her himself.",
    "3:14–18 — He sends her away before dawn, before anyone could recognize a woman leaving the threshing floor, \"let it not be known that a woman came into the floor.\" He gives her six measures of barley — not payment, but a tangible pledge that he intends to finish what she began. She returns to Naomi, who tells her simply to \"sit still... until thou know how the matter will fall: for the man will not be in rest, until he have finished the thing this day.\""
  ],
  "refs": [
    "Ruth 2:12 — Boaz's own \"under whose wings\" language, now quoted back to him almost word for word in 3:9.",
    "Deuteronomy 25:5–10 — levirate marriage duty for an actual brother-in-law; Ruth's situation involves a more distant kinsman, showing the custom being extended past its narrowest legal case.",
    "Ezekiel 16:8 — \"I spread my skirt over thee... and entered into a covenant with thee\" — the same wing/skirt idiom used of God's own covenant with Israel, proof this was recognized marriage-covenant language, not an isolated oddity in Ruth.",
    "Proverbs 31:10–31 — the \"virtuous woman\" (chayil) language used of Ruth in 3:11 is the identical word later applied to the ideal wife."
  ],
  "hist": [
    "A threshing floor at night was a real, ordinary, semi-public workplace during harvest season — owners and workers commonly slept there to guard the grain from theft. Ruth's presence there under cover of darkness was legally and socially risky specifically because it looked exactly like what it was not.",
    "\"Spread thy skirt\" (kanaph) was recognized marriage-proposal idiom in the ancient Near East and later in Israel (compare Ezekiel 16:8's use of the same phrase for a covenant of marriage). Ruth is not speaking in riddles — she is using formal, legally loaded language Boaz would have recognized instantly as a marriage request tied directly to his kinsman-redeemer duty."
  ],
  "opens": [
    "Naomi plans the entire scene and Ruth executes it without a recorded objection. Whose chapter is this actually about?",
    "Boaz says Ruth's latter kindness is greater than her earlier loyalty because she did not chase younger men. What does that say about what this book considers real chesed?"
  ],
  "topics": [
    {
      "title": "She Asked First",
      "icon": "🌙",
      "body": "Courtship in this world normally ran through fathers and kinsmen negotiating over a woman, not a woman walking alone to a man at night and naming, out loud, the covenant she wants him to make. Ruth's initiative here is one of the boldest acts by any woman in Old Testament narrative, and the text never flinches from it or apologizes for her."
    },
    {
      "title": "A Word the Book Will Not Let You Skip",
      "icon": "⚖️",
      "body": "\"There is a kinsman nearer than I\" turns a romance into a legal drama with one chapter still to go. Boaz's integrity shows precisely in his refusal to shortcut the process, even in a moment when he clearly could have and clearly wanted not to wait."
    },
    {
      "title": "Sent Away Before Light",
      "icon": "🌾",
      "body": "Boaz's care for Ruth's reputation — sending her home in darkness, giving her grain as visible evidence of an honest errand rather than a secret one — shows a man actively protecting a woman's name in a scene charged with real vulnerability for her, not just for him."
    }
  ],
  "wordStudies": [
    {
      "word": "Skirt / wing",
      "orig": "Hebrew: kanaph",
      "meaning": "3:9. Ruth's direct request, completing the image Boaz himself used as a blessing in 2:12."
    },
    {
      "word": "Kinsman / near kinsman",
      "orig": "Hebrew: go'el",
      "meaning": "3:9, 12–13. The legal redeemer-role now named outright — a relative with both the right and the duty to buy back sold land, avenge blood, or marry a childless widow to preserve a dead man's name and inheritance."
    },
    {
      "word": "Virtuous woman",
      "orig": "Hebrew: eshet chayil",
      "meaning": "3:11. More literally a \"woman of strength/valor\" than \"virtuous\" — the identical phrase used of the ideal wife in Proverbs 31:10."
    }
  ],
  "doctrinal": "Teacher-only: I will name the euphemism debate honestly rather than rushing past it — \"feet\" and \"lie down\" carry a documented double meaning elsewhere in the Old Testament, and readers genuinely disagree about how much is implied here. I land on a chaste reading — a bold, legally-coded proposal, not a sexual encounter — because the text's own details argue for it: Boaz's genuine shock at finding anyone there at all, his careful protection of her reputation afterward, and his own insistence in chapter 4 on doing the redemption properly and publicly. None of that fits a man who has just taken advantage of a vulnerable woman in the dark. I will say plainly this is my reading, not settle the debate by fiat, and I will not let a room dwell on the innuendo at the expense of the chapter's real center: a woman claiming a covenant out loud, and a man who could have taken a shortcut choosing instead not to.",
  "story": {
    "scene": "Perfume and a woman's best clothes on a threshing-room floor at midnight. Grain dust still in the air. A startled man waking to find someone at his feet. One sentence that turns a harvest kindness into a marriage claim.",
    "modern": "The moment you stop waiting to be chosen and name, out loud, the exact covenant you actually want from someone who has already shown you who he is."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "A chaste, legally-coded proposal",
      "body": "Ruth's action and words are a bold but honorable claim on Boaz's kinsman-redeemer duty, nothing more. Strength: Boaz's own conduct afterward, and the narrator's own restraint in how the scene is told."
    },
    {
      "name": "A deliberately ambiguous, possibly sexually loaded scene",
      "body": "Some scholars read the \"feet\" language and the night setting as intentionally suggestive — a real test of whether Boaz would take advantage of the moment. Strength: the vocabulary genuinely carries that possibility elsewhere in the Old Testament. Cost: the text never confirms this, and everything that follows treats the encounter as chaste and Boaz's integrity as proven rather than questioned."
    }
  ]
},
{
  "book": "Ruth",
  "slug": "ruth",
  "chapterLabel": "Chapter 4 — A Gate, a Sandal, and a Son Named for Naomi",
  "chNum": "4",
  "points": [
    "4:1–2 — Boaz goes up to the gate, the town's public legal and commercial center, and, as if the story were still insisting on providence dressed as coincidence, \"behold, the kinsman of whom Boaz spake came by.\" The narrator withholds this man's real name forever, calling him only \"Ploni Almoni\" — literally \"so-and-so\" — while Boaz, Ruth, and their son will be remembered by name as long as the book is read. Boaz gathers ten elders as formal legal witnesses.",
    "4:3–6 — Boaz offers the nearer kinsman first right to redeem the parcel of land that belonged to Elimelech; the man agrees at once — until Boaz adds the rest of the obligation: \"what day thou buyest the field... thou must buy it also of Ruth the Moabitess... to raise up the name of the dead upon his inheritance.\" The man refuses: \"I cannot redeem it for myself, lest I mar mine own inheritance.\" Marrying Ruth would mean any resulting son legally belonged to the dead man's line, not his own — diluting what he could otherwise pass on at his own expense. He hands his right to Boaz outright: \"redeem thou my right to thyself; for I cannot redeem it.\"",
    "4:7–10 — The narrator pauses to explain a custom already unfamiliar by the time the book was written: a man drew off his own shoe and gave it to his neighbor to confirm a transaction. The kinsman does this and says, \"buy it for thee.\" Boaz then declares before the elders and all the people that he has bought everything that belonged to Elimelech, Chilion, and Mahlon from Naomi's hand, and has also acquired Ruth the Moabitess, Mahlon's widow, \"to be my wife, to raise up the name of the dead upon his inheritance, that the name of the dead be not cut off from among his brethren.\"",
    "4:11–12 — The elders and all the people at the gate bless the marriage with a striking three-part invocation: \"the LORD make the woman that is come into thine house like Rachel and like Leah, which two did build the house of Israel\" — Israel's own founding matriarchs — and \"let thy house be like the house of Pharez, whom Tamar bare unto Judah.\" The text itself names another foreign-flavored, scandal-shadowed birth (Genesis 38) as the pattern for what God is about to do again through a Moabite widow. Nobody standing in that gate could have known how literally this blessing would come true.",
    "4:13–17 — Boaz marries Ruth, \"and the LORD gave her conception, and she bare a son.\" The women of Bethlehem bless Naomi by name, not Ruth: \"Blessed be the LORD, which hath not left thee this day without a kinsman... he shall be unto thee a restorer of thy life, and a nourisher of thine old age: for thy daughter in law, which loveth thee, which is better to thee than seven sons, hath born him.\" Naomi takes the child into her own bosom and becomes his nurse. The neighbor women name him Obed (\"serving\") and declare, \"there is a son born to Naomi\" — the child legally and communally credited to the very family the famine had nearly erased.",
    "4:18–22 — The book closes with a genealogy that answers every question it never explicitly asked: Pharez, Hezron, Ram, Amminadab, Nahshon, Salmon, Boaz, Obed, Jesse, and David — ten generations ending in the one name every original reader had been listening for the whole time. A famine, a foreign widow, a nameless refusing kinsman, and a threshing floor at midnight all resolve into the ancestry of Israel's king."
  ],
  "refs": [
    "Genesis 38 — Judah and Tamar, explicitly invoked by name in 4:12; another story of a foreign-adjacent woman and a reluctant kinsman ending in an unlikely son who carries the line forward.",
    "Deuteronomy 25:7–10 — the levirate shoe-removal ceremony, there used to publicly shame a refusing brother-in-law; Ruth 4:7–8 uses a similar but not identical custom in a plainly neutral, transactional sense.",
    "Leviticus 25:23–28 — the law of land redemption (ge'ullah) by a near kinsman, the legal backbone of the entire scene at the gate.",
    "Matthew 1:5–6 — \"Booz begat Obed of Ruth... and Jesse begat David the king\" — the New Testament closing this exact genealogical loop by name, seventeen generations before naming Jesus.",
    "1 Samuel 16:1, 13 — David, the last name in this genealogy, will be anointed king in this same town of Bethlehem, which the story never leaves."
  ],
  "hist": [
    "The city gate functioned as the ancient Near Eastern courtroom — towns conducted legal transactions, contract witnessing, and disputes there because it was the most public, most trafficked space available; ten elders as witnesses gave a transaction the weight of what would now be a notarized, permanently recorded deed.",
    "The unnamed kinsman is a real legal figure, not merely a plot device. Under both the land-redemption law (Leviticus 25) and levirate custom (Deuteronomy 25), a nearer relative genuinely held first legal right and real financial exposure; his refusal is economically rational by his own math, since a son born to Ruth would legally belong to Mahlon's line, not his — which is exactly what makes Boaz's willingness to absorb that same cost look like chesed rather than shrewdness.",
    "Levirate custom in Ruth stretches past Deuteronomy 25's narrowest letter. Strictly, that law legislates for a deceased man's actual surviving brother; Boaz is a more distant kinsman. The book appears to broaden the custom's underlying purpose — preserving a dead man's name and inheritance — beyond its tightest legal case, blending it with the separate land-redemption law of Leviticus 25. Worth naming honestly rather than flattening into one tidy statute."
  ],
  "opens": [
    "The text withholds the nearer kinsman's real name forever while preserving Boaz's, Ruth's, and Obed's for all time. What is the narrator doing by choosing \"so-and-so\" instead of a name?",
    "The elders bless Ruth by comparing her directly to Tamar. Why would that comparison function as a blessing rather than as an insult?",
    "The child is legally Boaz and Ruth's, yet the neighbor women credit him to Naomi. What does the book's real ending tell you about who this whole story was actually for?"
  ],
  "topics": [
    {
      "title": "So-and-So",
      "icon": "🚪",
      "body": "The nearest legal heir, closer in blood than Boaz, made the economically sensible choice — and vanished from memory without a name. Scripture's genealogies remember the ones who paid a real cost for someone else's sake, not the ones who protected their own inheritance."
    },
    {
      "title": "Rachel, Leah, and Tamar",
      "icon": "👰",
      "body": "Three women, none of them romanticized in their own stories — rivalry, deception, a disguise at a roadside — get named at the gate as the pattern for what God is doing through a Moabite widow. The blessing does not ask Ruth to be respectable; it asks her to be as fruitful and as unlikely as the women who already built this family."
    },
    {
      "title": "A Son Born to Naomi",
      "icon": "👶",
      "body": "The child is legally Boaz's and Ruth's, but the neighbor women credit him to Naomi — the woman who came home from Moab calling herself Bitter. The book's real ending is not a wedding. It is an empty woman's arms getting full again, in front of the whole town that once asked, \"is this Naomi?\""
    }
  ],
  "wordStudies": [
    {
      "word": "Redeem / kinsman-redeemer",
      "orig": "Hebrew: go'el",
      "meaning": "4:1, 3–6, 8. The legal right and duty of a near relative to buy back land, avenge blood, or marry a widow to continue a dead man's name. The theological weight this word carries elsewhere — God himself named Israel's go'el (Isaiah 41:14; 43:1) — is unavoidable once you have watched Boaz actually perform the role in cash, land, and marriage."
    },
    {
      "word": "Mar mine own inheritance",
      "orig": "Hebrew: shachath",
      "meaning": "4:6. \"Spoil / ruin\" — the nearer kinsman's own stated reason for refusing. An honest, unflattering motive left plainly on the page rather than smoothed over."
    },
    {
      "word": "Restorer of life / nourisher",
      "orig": "Hebrew: meshib nephesh",
      "meaning": "4:15. The neighbor women's description of baby Obed — the same root family later used of the LORD's own restoring work (compare Psalm 23:3, \"he restoreth my soul\"). A newborn's ordinary birth described in language that will not stay small."
    }
  ],
  "doctrinal": "Teacher-only: I will not let this chapter land at \"they lived happily ever after.\" The closing genealogy is the point the whole book has been building toward: a Moabite woman — excluded by name from Israel's assembly in Deuteronomy 23:3 — becomes King David's great-grandmother, and through David, ancestor to the Messiah Matthew 1 will name outright. I read Ruth's inclusion not as Deuteronomy 23:3 being wrong, but as that law's real target — a hostile nation that tried to curse Israel, per Deuteronomy 23:4 — simply never describing a woman who had already renounced Moab, its gods, and its hostility for Naomi's people and Naomi's God back in chapter 1. Ruth does not cancel the law; she was never who it was written to exclude. I will let the room sit with Tamar's name in 4:12 rather than rushing past it — Matthew 1 will later name four women in Messiah's own genealogy (Tamar, Rahab, Ruth, Bathsheba), every one of them foreign, scandal-adjacent, or both, and not one of them there by editorial accident.",
  "story": {
    "scene": "Ten old men sitting as a courtroom at a town gate. A shoe pulled off and handed across like a signature. A blessing that reaches back to Rachel, Leah, and a scandal four generations old. A baby laid into an old woman's lap while the neighbor women do the naming out loud.",
    "modern": "Watching the family a famine nearly erased get its name back — one generation before the story finally says the word \"David\" out loud."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "Deuteronomy 23:3's exclusion as never applying to Ruth personally",
      "body": "The law targets a nation that met Israel with hostility and hired curses against it (23:4); Ruth, having renounced Moab entirely in 1:16–17, was never the person that law describes, so her inclusion does not contradict it. Strength: reads both texts as fully consistent, and takes Ruth's own conversion seriously as the reason. Cost: still has to explain why the book never states this resolution outright — it remains an inference, not a stated argument."
    },
    {
      "name": "Ruth as a deliberate widening of a narrow application of the law",
      "body": "Some readers hear the book as intentionally provocative — told partly to push back against an overly rigid ethnic reading of Deuteronomy 23:3 already circulating in Israel, by showing God's own approval of a Moabite ancestress for King David himself. Strength: fits a likely late-monarchy composition setting and the book's evident interest in legitimizing David's ancestry. Cost: risks implying the earlier law itself needed correcting, rather than simply being clarified by Ruth's own story."
    }
  ]
}
);
