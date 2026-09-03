// Exodus — all 40 chapters.
// Merged from Will's 7 batch files (exodus-ch01-06.js ... exodus-ch35-40.js).
//
// Content-quality pass (2026-09-03): profiled all 40 chapters against the Daniel/Matthew/
// Acts/Genesis depth bar. This batch was consistently strong throughout -- every chapter
// already had 2 historical notes, 2 topic cards, views, story, and doctrinal notes; word
// counts in points ran lower than some other books (many chapters cover tabernacle-
// construction lists or legal codes that are naturally more compressed in the source text
// itself) but the actual prose was rich and well-cross-referenced throughout, not the
// telegraphic note-form seen in some Acts/Genesis chapters. Only one real gap found:
// chapter 21 had just one word study where the rest of the book has two -- patched with a
// second (lex talionis / 'eye for eye', tying to the chapter's own topic card and to
// Matthew 5:38-42). No other chapter needed rework.
//
// Course order: appended after Genesis (Daniel -> Between the Testaments -> Revelation ->
// John -> Matthew -> Acts -> Genesis -> Exodus). No local Exodus scripture/translation file
// exists yet, so this book's reading pane uses the live ESV/BSB lookup (js/scripture-source.js),
// same as Matthew, Acts, and Genesis.
window.SESSIONS = window.SESSIONS || [];
window.SESSIONS.push(
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 1 — A New King, and the Cry Under Brick",
  "chNum": "1",
  "points": [
    "1:1–7 — The names that closed Genesis are read again: sons of Israel who came into Egypt with Jacob, seventy souls. Joseph dies, and all that generation. The children of Israel are fruitful, increase abundantly, multiply, wax exceeding mighty; the land is filled with them. Genesis 1:28 and 15:13–14 are both on the table. Blessing is working. So is the clock on the sojourn.",
    "1:8–14 — A new king which knew not Joseph. Come, let us deal wisely: they are more and mightier; if war fall out they may join our enemies. Taskmasters, affliction, treasure cities Pithom and Raamses. The more they afflict them, the more they multiply. Egypt is grieved. Service is made bitter with hard bondage in mortar and in brick, and in all manner of service in the field. The book’s first politics is fear wearing the mask of wisdom.",
    "1:15–22 — Midwives Shiphrah and Puah are told to kill the sons on the stools. They fear God and do not. Pharaoh asks why. They answer with a line about Hebrew women being lively. God deals well with the midwives; houses are made for them. Then the open decree: every son ye shall cast into the river, every daughter ye shall save alive. The river that will later become blood is already a grave."
  ],
  "refs": [
    "Genesis 15:13–14 — a seed afflicted four hundred years, then judged and brought out with substance. Exodus 1 is that sentence becoming a street.",
    "Genesis 46:3–4 — I will go down with thee into Egypt; I will also surely bring thee up.",
    "Acts 7:17–19 — Stephen reads this chapter as the time of the promise drawing nigh, and the king dealing subtilly.",
    "Hebrews 11:23 — Moses’ parents hid him by faith, not afraid of the king’s commandment. The midwives belong in that same fear-of-God column.",
    "Psalm 105:24–25 — he increased his people; he turned the Egyptian heart to hate them."
  ],
  "hist": [
    "Pithom and Raamses as store-cities sit in the eastern Delta. Readers argue early Exodus (15th century, often tied to 1 Kings 6:1) versus late (13th century, Ramesses II). Name the chairs. Do not let the debate eat the chapter. The text’s load is a king who forgot Joseph and a people who cannot forget brick.",
    "Infant-killing as state policy is not unique to this story in the ancient world. What is unique is that two named working women refuse it and the narrator credits the fear of God, not a court intrigue."
  ],
  "opens": [
    "Where does ‘deal wisely’ show up in your world as a clean word for a cruel policy?",
    "The midwives fear God and lie to Pharaoh. What does the chapter praise, and what does it not bother to lecture?"
  ],
  "topics": [
    {
      "title": "Which Knew Not Joseph",
      "icon": "🧱",
      "body": "Forgetting a savior is how a house turns a guest-people into a threat. Multiplication is still the Abraham blessing. Egypt hears it as an invasion. The river is recruited as an executioner."
    },
    {
      "title": "Feared God",
      "icon": "👶",
      "body": "Shiphrah and Puah get names. Pharaoh does not. The first resistance in Exodus is not a prophet with a staff. It is two women who will not put a boy to death because God is more real than the throne."
    }
  ],
  "wordStudies": [
    {
      "word": "Deal wisely",
      "orig": "Hebrew: nithchakkemah",
      "meaning": "1:10. From chakam, be wise. Statecraft as the language of oppression. The book will later call Bezalel filled with wisdom to build a sanctuary. Wisdom has two careers in this story."
    },
    {
      "word": "Feared God",
      "orig": "Hebrew: yare’ ha’elohim",
      "meaning": "1:17, 21. Same fear Abraham named at Moriah (Genesis 22:12). Not panic. Allegiance that costs a royal order."
    }
  ],
  "doctrinal": "Teacher-only: I read 1 as history, not as a parable about generic empire. A real people is in a real Delta under a real king. I will name the date-chairs without crowning one for the room. I will not baptize the midwives’ deception into a theory that lying is fine; I will also not scold them as if the narrator is embarrassed. God making them houses is the book’s verdict. The river-decree is already the first plague in seed-form.",
  "story": {
    "scene": "A king who never met Joseph. Brick. A whispered order at a birth-stool. Two women who say no. A river waiting for sons.",
    "modern": "Policy that calls fear wisdom, and the quiet people who refuse to make the policy work."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "Early date (15th century)",
      "body": "Reads 1 Kings 6:1’s 480 years straight and often sits the oppression under an 18th-dynasty court. Strength: takes the later number at voice-value. Cost: the city-name Raamses still has to be taught."
    },
    {
      "name": "Late date (13th century)",
      "body": "Hears Raamses as Ramesside and sits the exit under the 19th dynasty. Strength: the place-name. Cost: 1 Kings 6:1 must be read as schematic or rounded."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 2 — A Basket, a Well, and a Groaning God Hears",
  "chNum": "2",
  "points": [
    "2:1–10 — A man of Levi takes a daughter of Levi. A goodly son. Three months hidden. An ark of bulrushes, slime and pitch, flags by the river’s brink. His sister stands afar off. Pharaoh’s daughter comes to wash, sees the ark, has compassion: this is one of the Hebrews’ children. Miriam offers a nurse; the mother is paid to raise her own son. He grows; he is brought to Pharaoh’s daughter; he becomes her son. She calls him Moses — ‘because I drew him out of the water.’ The decree of 1:22 is how the deliverer learns the palace.",
    "2:11–15 — When Moses is grown he goes out unto his brethren and looks on their burdens. An Egyptian smiting a Hebrew. He slays the Egyptian and hides him in the sand. The second day, two Hebrews strive. Who made thee a prince and a judge? Intendest thou to kill me as thou killedst the Egyptian? Moses fears; the thing is known. Pharaoh seeks to slay him. Moses flees to Midian.",
    "2:16–22 — A well in Midian. Seven daughters of the priest of Midian; shepherds drive them away; Moses stands up and waters their flock. Reuel / Jethro takes him in. Zipporah. A son: Gershom — ‘I have been a stranger in a strange land.’ The prince of Egypt is now a shepherd with a sojourner’s name.",
    "2:23–25 — In process of time the king of Egypt dies. Israel sighs by reason of the bondage, cries, and their cry comes up unto God. God hears their groaning. God remembers his covenant with Abraham, with Isaac, and with Jacob. God looks upon the children of Israel, and God knows. Four verbs. No staff yet. The next chapter will start from this knowing."
  ],
  "refs": [
    "Acts 7:20–29 — Stephen’s Moses: fair, learned, mighty in words and deeds, forty years in Egypt, forty in Midian. Exodus 2 is tight; Stephen fills the years.",
    "Hebrews 11:24–27 — Moses refuses to be called the son of Pharaoh’s daughter; he forsakes Egypt, not fearing the wrath of the king.",
    "Genesis 15:18; 17:7–8 — the covenant 2:24 says God remembered. Memory here is not recall. It is fidelity starting to move.",
    "Matthew 2:13–16 — another Joseph, another king killing sons, another child drawn out of danger toward Egypt. Matthew wants you to hear the rhyme. Do not flatten 2 into only that rhyme."
  ],
  "hist": [
    "Midian sits east of the Gulf of Aqaba / south of Edom in the usual map. A Levite married into a Midianite priest’s house will matter when Jethro arrives in chapter 18 and when Midian becomes an enemy in Numbers.",
    "‘Ark’ (tebah) is the same rare word as Noah’s vessel (Genesis 6–9). Two boxes sealed with pitch. One holds a family through water. One holds a baby through a river that was supposed to drown him."
  ],
  "opens": [
    "Was the slaying in the sand deliverance or a man getting ahead of God — or both in one act?",
    "2:25 says God knows. What would change in how you pray if that were the last line you had for a long time?"
  ],
  "topics": [
    {
      "title": "Drawn Out",
      "icon": "🧺",
      "body": "The basket is a tiny ark. The princess has compassion the edict did not budget for. The mother is hired by the empire to nurse the boy the empire wanted dead. Rescue in this chapter is ironic before it is mighty."
    },
    {
      "title": "God Knew",
      "icon": "👂",
      "body": "Sigh, cry, groan. Hear, remember, look, know. The verbs are the theology. Exodus does not start with Moses finding God. It starts with God refusing to treat a groan as private noise."
    }
  ],
  "wordStudies": [
    {
      "word": "Ark",
      "orig": "Hebrew: tebah",
      "meaning": "2:3. Elsewhere in the Torah only of Noah’s ark. Not the later ark of the covenant (aron). A chest that keeps a life through water."
    },
    {
      "word": "Knew",
      "orig": "Hebrew: yada‘",
      "meaning": "2:25. Not information. Covenantal attention. The same root will name the Lord’s knowing Moses face to face (33:17; Deuteronomy 34:10)."
    }
  ],
  "doctrinal": "Teacher-only: I read Moses as a real child in a real court, not as a mythic foundling borrowed from Sargon and left at that. The Sargon-legend resemblance can be named; the chapter’s load is compassion inside a death-decree and a God who hears. Hebrews 11 reads Moses’ refusal as faith. Acts 7 reads the slaying as the brothers not understanding. Hold both. Do not make 2:11–12 a license, and do not pretend the book is ashamed that he chose his people.",
  "story": {
    "scene": "Pitch on reeds. A sister in the weeds. A princess holding a Hebrew mouth. Sand over a body. A well. A name that means stranger. Then four quiet verbs over a nation that cannot get up.",
    "modern": "The long stretch where the cry has gone up and nothing visible has moved yet — except God has already used the verbs."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "Moses the failed savior",
      "body": "He sees, he strikes, he hides, he runs. Strength: 2:14 is a real rejection. Cost: Hebrews 11 will not let you call the whole move unbelief."
    },
    {
      "name": "Moses already choosing his people",
      "body": "Going out to look on their burdens is the first act of solidarity. Strength: 2:11; Hebrews 11:24–25. Cost: the sand and the flight are still in the paragraph."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 3 — The Bush, the Name, and the Land Named Again",
  "chNum": "3",
  "points": [
    "3:1–6 — Moses keeps the flock of Jethro, priest of Midian, to the backside of the desert, to Horeb, the mountain of God. The angel of the LORD appears in a flame of fire out of the midst of a bush. The bush burns and is not consumed. I will turn aside and see. God calls out of the bush: Moses, Moses. Here am I. Draw not nigh; put off thy shoes; the place is holy ground. ‘I am the God of thy father, the God of Abraham, the God of Isaac, and the God of Jacob.’ Moses hides his face. The holy God is not a new deity. He is the God of the dead men Genesis just buried — and he is not done with their names.",
    "3:7–12 — I have surely seen the affliction, heard the cry, know the sorrows. I am come down to deliver them out of the hand of the Egyptians and to bring them up unto a land flowing with milk and honey — Canaanite, Hittite, Amorite, Perizzite, Hivite, Jebusite country. Come now, I will send thee unto Pharaoh. Moses: Who am I? The answer is not a résumé. ‘Certainly I will be with thee.’ The token: ye shall serve God upon this mountain.",
    "3:13–22 — Moses: when they ask, What is his name? God: I AM THAT I AM. Say, I AM hath sent me. Say also, the LORD God of your fathers, Abraham, Isaac, Jacob, hath sent me: this is my name for ever, my memorial unto all generations. Go, gather the elders; they shall hearken. You and the elders go to the king. Let us go three days into the wilderness to sacrifice. I am sure the king will not let you go. I will stretch out my hand and smite Egypt with all my wonders. After that he will let you go. You shall not go empty. Jewels, raiment, spoil of the Egyptians — Genesis 15:14 collected in a sentence."
  ],
  "refs": [
    "Genesis 15:13–16 — the four-hundred-year affliction, the nation judged, the fourth generation coming again. 3:7–8 is that oath standing up.",
    "Matthew 22:31–32 — Jesus reads ‘God of Abraham, Isaac, and Jacob’ as proof the dead are not discarded. He takes 3:6 as still live speech.",
    "John 8:58 — before Abraham was, I am. The Gospel is not shy about this chapter’s Name.",
    "Acts 7:30–35 — the bush, the angel, the sending of the man they refused.",
    "Revelation 1:8 — which is, and which was, and which is to come."
  ],
  "hist": [
    "Horeb / Sinai is the same mountain-range in this book’s speech (3:1, 3:12; 19). Traditional maps put it in the southern peninsula; other chairs sit it in northwest Arabia or further north. Teach the uncertainty without letting the GPS fight replace the voice.",
    "‘Angel of the LORD’ in the bush and ‘God’ calling from the bush stand in one paragraph. The book will not pause to diagram the metaphysics. Later Scripture will keep both the sent-one language and the God-who-speaks language."
  ],
  "opens": [
    "Why must Moses know the Name before he knows the plan’s timetable?",
    "‘Who am I?’ is a fair question. Why is ‘I will be with thee’ treated as a complete answer?"
  ],
  "topics": [
    {
      "title": "Not Consumed",
      "icon": "🔥",
      "body": "Fire that does not eat the bush is how this book first shows holiness: present, dangerous, not annihilating the thing it fills. Israel will later become a people with that fire in their camp."
    },
    {
      "title": "I AM THAT I AM",
      "icon": "✡️",
      "body": "The Name is not a riddle for seminar. It is God giving Moses a memorial that will outlive every Pharaoh. The God of the fathers is the God who is, and who will be with the man he sends."
    }
  ],
  "wordStudies": [
    {
      "word": "I AM THAT I AM",
      "orig": "Hebrew: ehyeh asher ehyeh",
      "meaning": "3:14. Related to the divine name YHWH in 3:15. Being, presence, fidelity — ‘I will be what I will be’ is in the grain. Do not reduce it to a philosophy slogan and do not treat it as a magic password."
    },
    {
      "word": "Holy",
      "orig": "Hebrew: qodesh",
      "meaning": "3:5. First use of holy ground in the Torah’s story-flow. Shoes off is how a shepherd learns the mountain is not pasture."
    }
  ],
  "doctrinal": "Teacher-only: I read the bush as a real meeting, not as Moses’ inner weather. I read the Name as God disclosing himself, not as Israel inventing a tribal mascot. On ‘angel of the LORD’ I will say what the paragraph does — the angel appears, God speaks — and not force a full Christology lecture before the room has heard 3:6. I do read John 8 and Matthew 22 as licensed to sit on this chapter. Typology after hearing, not instead of hearing.",
  "story": {
    "scene": "A dry mountain, a flock, a bush that will not finish burning. Shoes in the dust. A name older than the fathers and younger than no one. A staffed man told that his inadequacy is not the point.",
    "modern": "The job that is too big, answered with a Presence instead of a promotion."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "YHWH newly revealed here",
      "body": "6:3 will say I was not known to the fathers by this name. Strength: Exodus marks a disclosure. Cost: Genesis already writes YHWH in the fathers’ mouths; the chairs have to talk to each other."
    },
    {
      "name": "YHWH already known, now explained",
      "body": "The fathers used the Name; Moses is given its meaning and its memorial force. Strength: Genesis. Cost: 6:3’s ‘not known’ must be read as ‘not known like this.’"
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 4 — Signs in the Hand, and a Mouth That Still Objects",
  "chNum": "4",
  "points": [
    "4:1–9 — They will not believe me. The LORD: what is that in thine hand? A rod. Cast it; it becomes a serpent; Moses flees; take it by the tail — it becomes a rod. Put thy hand in thy bosom; it is leprous as snow; again, restored. If they will not hear those two, take water of the river, pour it on dry land; it shall become blood. Three signs for a people trained to distrust speeches.",
    "4:10–17 — Moses: I am not eloquent, slow of speech, slow of tongue. The LORD: who hath made man’s mouth? I will be with thy mouth and teach thee what thou shalt say. Moses: send by the hand of him whom thou wilt send. The LORD’s anger is kindled. Aaron the Levite can speak well; he cometh forth to meet thee; he shall be thy spokesman unto the people; thou shalt be to him instead of God. Take this rod. Reluctance is heard. It is not treated as humility’s last word.",
    "4:18–26 — Jethro: go in peace. The men are dead who sought thy life. Wife and sons on an ass, rod of God in his hand. Tell Pharaoh: Israel is my son, even my firstborn; let my son go, that he may serve me; if thou refuse, I will slay thy son, even thy firstborn. Then the night lodging: the LORD meets Moses and seeks to kill him. Zipporah takes a sharp stone, circumcises her son, touches his feet: a bloody husband thou art to me. So he lets him go. The envoy of the firstborn-warning has a firstborn whose mark was not yet in his flesh.",
    "4:27–31 — Aaron is told to meet Moses in the wilderness; they kiss in the mount of God. Moses tells him all, and the signs. Gathered elders. Aaron speaks. Signs in the sight of the people. The people believe. They hear that the LORD has visited the children of Israel and seen their affliction. They bow their heads and worship. Belief here is not yet the Red Sea. It is the first yes."
  ],
  "refs": [
    "Exodus 7:1 — I have made thee a god to Pharaoh; Aaron thy prophet. 4:16 is the seed of that pairing.",
    "Genesis 17:10–14 — circumcision as covenant cut. 4:24–26 is that sign catching up with the messenger.",
    "Hosea 11:1 — out of Egypt I called my son. Matthew 2:15 will take that line. 4:22 is the firstborn-nation sentence underneath.",
    "2 Corinthians 3:5–6 — sufficiency is of God, who made us able ministers. Moses’ mouth-objection is the old version of that lesson."
  ],
  "hist": [
    "Circumcision with a flint is old-world practice (Joshua 5 still uses flint). Zipporah knows the rite. The paragraph is famously tight and the pronouns are hard. Teach the hardness. Do not invent a novel to cover it.",
    "The rod will become the staff before Pharaoh, over the river, over the sea, over the rock. Chapter 4 is where a shepherd’s tool is claimed as ‘the rod of God.’"
  ],
  "opens": [
    "When does ‘I can’t speak’ stop being honesty and start being refusal?",
    "Why does the firstborn warning to Pharaoh sit in the same chapter as a knife at a lodging-place?"
  ],
  "topics": [
    {
      "title": "What Is That in Thine Hand",
      "icon": "🪄",
      "body": "The signs are not entertainment. They take the ordinary — rod, hand, river — and show who owns Egypt’s symbols: snake, body, Nile. Belief is asked for on the far side of those pictures."
    },
    {
      "title": "My Son, My Firstborn",
      "icon": "👑",
      "body": "Israel is not first a workforce. Israel is a son. Pharaoh’s crime is holding another man’s firstborn. The tenth plague will match this sentence exactly. Read 4:22–23 before you get to the dark of 12."
    }
  ],
  "wordStudies": [
    {
      "word": "Spokesman",
      "orig": "Hebrew: peh, ‘mouth’",
      "meaning": "4:16. Aaron is Moses’ mouth. Moses is ‘instead of God’ to Aaron. Hierarchy of speech, not a demotion of the call."
    },
    {
      "word": "Visited",
      "orig": "Hebrew: paqad",
      "meaning": "4:31. Attention that acts. Genesis 50:24–25 used the same verb in Joseph’s dying charge. Exodus is that visit arriving."
    }
  ],
  "doctrinal": "Teacher-only: I read 4:24–26 as a real threat and a real circumcision, not as a stray myth pasted in. I will not pretend the pronouns are easy. I sit with the reading that the covenant mark cannot be missing on the man sent to claim a firstborn people. Zipporah’s ‘bloody husband’ is not a joke and not a smear on marriage; it is the rite named in blood. On Moses’ reluctance: anger kindled means God does not flatter self- mistrust as piety.",
  "story": {
    "scene": "A stick on the dirt becoming a thing a man runs from. A hand gone white. A river-drop turned red on sand. A mouth arguing. A wife with a flint in the dark. Elders finally putting their faces to the ground.",
    "modern": "Being sent with three proofs and still wanting a different messenger — then discovering the covenant had a mark you had postponed."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "The lodging-place attack is on Moses",
      "body": "Usual chair: Moses is the one nearly killed for the uncircumcised son. Strength: he is the sent man. Cost: the grammar is blunt and spare."
    },
    {
      "name": "The attack is on the son",
      "body": "Some hear the firstborn himself under the threat, which makes Zipporah’s cut a rescue of the boy. Strength: 4:22–23’s firstborn theme. Cost: still have to say why the LORD meets ‘him’ on the way."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 5 — Let My People Go, and Brick Without Straw",
  "chNum": "5",
  "points": [
    "5:1–9 — Moses and Aaron to Pharaoh: Thus saith the LORD God of Israel, Let my people go, that they may hold a feast unto me in the wilderness. Pharaoh: Who is the LORD, that I should obey his voice to let Israel go? I know not the LORD, neither will I let Israel go. They ask three days. Pharaoh: why do ye let the people from their works? Get you unto your burdens. The same day: no more straw; the tale of bricks shall not be diminished. They be idle; therefore they cry, saying, Let us go sacrifice.",
    "5:10–19 — Taskmasters and officers carry the order. The people scatter for stubble. The tale is required. Officers of the children of Israel — the Hebrew foremen — are beaten. Why have ye not fulfilled your task? They cry to Pharaoh. He repeats the idle-charge. The officers see they are in evil case.",
    "5:20–23 — They meet Moses and Aaron, who stand in the way. The LORD look upon you and judge; ye have made our savour to be abhorred in the eyes of Pharaoh, to put a sword in their hand to slay us. Moses returns unto the LORD: Lord, wherefore hast thou so evil entreated this people? Why is it that thou hast sent me? Since I came to Pharaoh to speak in thy name, he hath done evil to this people; neither hast thou delivered thy people at all. The first prayer after the commission is an accusation. The book lets it stand."
  ],
  "refs": [
    "Exodus 3:19 — I am sure the king of Egypt will not let you go. 5 is that sentence landing, not a surprise.",
    "Exodus 6:9 — they hearkened not unto Moses for anguish of spirit and for cruel bondage. 5 is why.",
    "Psalm 12:5 — for the oppression of the poor, for the sighing of the needy, now will I arise.",
    "1 Samuel 4:7–8 — later Philistines will remember Egypt and tremble. Pharaoh in 5 has not learned that reflex yet."
  ],
  "hist": [
    "Brick-with-straw is ordinary Nile-mud technique. Straw binds the clay. Removing the supplied straw and keeping the quota is a labor-speedup designed to break a people and smear their worship as laziness.",
    "Hebrew officers under Egyptian taskmasters is how empires work: make the oppressed police themselves, then beat them when the math fails."
  ],
  "opens": [
    "Pharaoh’s theology is one sentence: I know not the LORD. How much of chapter 5 is that ignorance, and how much is it refusal wearing ignorance?",
    "Is Moses allowed to pray 5:22–23, or do we clean that up for him?"
  ],
  "topics": [
    {
      "title": "Who Is the LORD",
      "icon": "❓",
      "body": "Pharaoh’s question is the engine of the plague cycle. Egypt will learn the Name the hard way. The people will almost unlearn hope in the same weeks."
    },
    {
      "title": "Idle — Therefore They Cry",
      "icon": "🧱",
      "body": "Worship is recoded as sloth. The quota stays. The material is withdrawn. Pain is then used as proof that the request was the problem. That pattern did not die in the Delta."
    }
  ],
  "wordStudies": [
    {
      "word": "Idle",
      "orig": "Hebrew: nirpim",
      "meaning": "5:8, 17. Slack, loose. Pharaoh’s moral diagnosis of liturgy."
    },
    {
      "word": "Delivered",
      "orig": "Hebrew: hitzalta",
      "meaning": "5:23. Moses’ charge: you have not delivered at all. 6 will answer with ‘I will redeem’ in four verbs."
    }
  ],
  "doctrinal": "Teacher-only: I read 5 as the necessary worsening. 3:19 already said the king would not let them go. Do not teach a prosperity-commission that cannot survive a worse Tuesday. Moses’ complaint is kept in Scripture; that is permission to bring failure-language into prayer without being thrown out. It is not permission to quit the sending.",
  "story": {
    "scene": "A throne that does not know the Name. An order about straw. Stubble in the fields. Rods on Hebrew backs. Two brothers blamed by their own. A prophet telling God the plan is not working.",
    "modern": "Obedience that makes life harder before it makes anything free — and a prayer that does not pretend otherwise."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "Three-day feast as ruse",
      "body": "Some hear the short request as a tactic, full departure being the real aim. Strength: 3:17 already named Canaan. Cost: the book also treats the feast-request as true worship owed now."
    },
    {
      "name": "Three-day feast as real first ask",
      "body": "Pharaoh is tested on a smaller obedience and fails it. Strength: the wording of 5:1–3. Cost: you still have the larger promise sitting in chapter 3."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 6 — I Am the LORD: Four Verbs and a Heavy Mouth",
  "chNum": "6",
  "points": [
    "6:1–8 — Now shalt thou see what I will do to Pharaoh. I am the LORD. I appeared unto Abraham, unto Isaac, and unto Jacob by the name of God Almighty (El Shaddai), but by my name Jehovah was I not known to them. I have established my covenant to give them the land of Canaan. I have heard the groaning. I have remembered my covenant. Say unto the children of Israel: I am the LORD. I will bring you out. I will rid you of their bondage. I will redeem you with a stretched out arm and with great judgments. I will take you to me for a people, and I will be to you a God. I will bring you in unto the land. I will give it you for an heritage. I am the LORD. The Name bookends a chain of verbs. This is the gospel-shape inside Exodus.",
    "6:9–13 — Moses speaks so to Israel. They hearken not, for anguish of spirit and for cruel bondage. The LORD sends Moses back to Pharaoh. Moses: behold, the children of Israel have not hearkened unto me; how then shall Pharaoh hear me, who am of uncircumcised lips? The LORD speaks to Moses and Aaron and gives them a charge unto the children of Israel and unto Pharaoh.",
    "6:14–27 — A genealogy drops in: Reuben, Simeon, then Levi in detail — Kohath, Amram, Jochebed, Aaron and Moses, Aaron’s wife Elisheba, Nadab, Abihu, Eleazar, Ithamar, Phinehas in the wings. The point of the list is not padding. The spokesmen are located in Levi before the plagues begin. These are that Aaron and Moses.",
    "6:28–30 — The section restates the sending and Moses’ mouth-objection, so chapter 7 can open on the answer. Uncircumcised lips is his name for the same slowness as 4:10. The book is not done hearing it."
  ],
  "refs": [
    "Genesis 17:1 — I am El Shaddai; walk before me. 6:3 sets that title next to YHWH.",
    "Exodus 20:2 — I am the LORD thy God, which have brought thee out. The Decalogue will stand on 6:6–7.",
    "Leviticus 26:12–13 — I will walk among you and be your God; I am the LORD that brought you out.",
    "2 Corinthians 6:16–18 — I will be their God; they shall be my people. Paul lifts the covenant formula 6:7 already spoke.",
    "Revelation 21:3 — they shall be his people, God himself with them."
  ],
  "hist": [
    "6:3 is one of the hardest sentences in the Torah for readers who have watched Genesis use YHWH from chapter 2 onward. Source-critics hear two traditions. Other readers hear a new depth of the Name, not a first introduction of the syllables. Put both chairs out. Then preach the verbs, which neither chair gets to erase.",
    "Levi’s family tree here sets up Nadab and Abihu (Leviticus 10) and Phinehas (Numbers 25). Exodus is already telling you which house will stand nearest the holy things."
  ],
  "opens": [
    "Israel cannot hear good news because of anguish. What does that do to a ministry that only blames unbelief?",
    "Which of the ‘I will’ verbs in 6:6–8 do you most need to hear as still God’s sentence, not as a slogan?"
  ],
  "topics": [
    {
      "title": "I Will, I Will, I Will, I Will",
      "icon": "📜",
      "body": "Bring out. Rid of bondage. Redeem. Take you for a people. The later feast of four cups grew from this paragraph for a reason. Rescue is not only exit. It is belonging."
    },
    {
      "title": "Anguish of Spirit",
      "icon": "💔",
      "body": "The promise is perfect. The hearers are crushed. 6:9 is pastoral realism. A bruised people may not applaud the sermon that is true."
    }
  ],
  "wordStudies": [
    {
      "word": "Redeem",
      "orig": "Hebrew: ga’al",
      "meaning": "6:6. Kin-redeemer verb. God talks like the nearest relative who buys a person out. Ruth will spend a book on this word. Exodus spends a nation on it."
    },
    {
      "word": "Uncircumcised lips",
      "orig": "Hebrew: aral sephatayim",
      "meaning": "6:12, 30. Lips with the foreskin still on — unfit, closed, not ready. Moses’ metaphor for a mouth that cannot do this job."
    }
  ],
  "doctrinal": "Teacher-only: I read 6:2–8 as the theological center of the commissioning, not as a later priestly insert you can skip. On 6:3 I name the live chairs (new Name vs new depth of the Name) and sit nearer ‘not known like this’ than ‘the fathers never heard the syllables,’ because Genesis will not go away. I will not let that fight steal the four verbs. Redeem (ga’al) is how I teach the exodus: God acting as kin.",
  "story": {
    "scene": "A Name said over a crushed workforce. Four futures spoken into a week that only got worse. A family tree to prove the speakers belong to Levi. A man still talking about his mouth.",
    "modern": "Good news arriving while the quota is still due — and a God who keeps saying I will when nobody has the breath to answer."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "6:3 as proof of separate sources",
      "body": "J uses YHWH early; P says the Name starts here. Strength: the tension is real on the page. Cost: you still have to preach the combined book the church actually reads."
    },
    {
      "name": "6:3 as deeper disclosure",
      "body": "El Shaddai was how the fathers knew him; YHWH as memorial-Name of the exodus-God is now opened. Strength: keeps Genesis and Exodus in one mouth. Cost: ‘not known’ has to be taught as quality, not as first-hearing."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 7 — A God to Pharaoh, and the River Turned",
  "chNum": "7",
  "points": [
    "7:1–7 — I have made thee a god to Pharaoh; Aaron thy prophet. I will harden Pharaoh’s heart, and multiply my signs. Pharaoh shall not hearken, that I may lay my hand upon Egypt and bring forth mine armies, my people, by great judgments. Egyptians shall know that I am the LORD. Moses is eighty, Aaron eighty-three. The contest is framed before a drop of water changes: knowledge of the Name, and a heart that will be hardened.",
    "7:8–13 — Rod becomes a serpent before Pharaoh. Magicians of Egypt do so with their enchantments; Aaron’s rod swallows their rods. Heart hardened; he hearkened not, as the LORD had said. Imitation is allowed a first success. Swallowing is the book’s comment on it.",
    "7:14–25 — Pharaoh’s heart is heavy; he refuseth to let the people go. Meet him at the river’s brink in the morning. Thus saith the LORD: let my people go, that they may serve me. In this thou shalt know that I am the LORD: I will smite the waters, and they shall be turned to blood. Fish die. River stinks. Egyptians cannot drink. Magicians do so with their enchantments. Pharaoh turns, goes into his house. Seven days are fulfilled after the LORD has smitten the river. The Nile — Egypt’s god-source in popular religion — is the first target."
  ],
  "refs": [
    "Exodus 4:22–23 — firstborn warning already spoken. The plagues are the road to that sentence, not a random list.",
    "Psalm 78:43–44 — he turned their rivers into blood. The psalm remembers this as history sung.",
    "Revelation 16:3–6 — waters become blood in a later judgment scene. The Bible is not finished with this picture.",
    "Romans 9:17–18 — for this cause I raised thee up (Exodus 9:16); he hath mercy on whom he will, and whom he will he hardeneth. Paul will sit a long time on these verbs."
  ],
  "hist": [
    "Egyptian ritual specialists (hartummim) belong in a court that treated magic as statecraft. The book grants they can copy a first layer. It will also mark where they cannot stand.",
    "Nile inundation is life in that land. Blood in the river is not a parlor color-change. It is a strike at the thing Egypt trusted to keep eating."
  ],
  "opens": [
    "What does it mean that Aaron’s rod swallows theirs — and that Pharaoh still goes home unmoved?",
    "When the book says God will harden, and also that Pharaoh hardens himself, which sentence are you tempted to delete?"
  ],
  "topics": [
    {
      "title": "That I Am the LORD",
      "icon": "🐍",
      "body": "Every plague has a purpose clause. Egypt is enrolled in a catechism it did not want. The Name is the curriculum."
    },
    {
      "title": "Harden",
      "icon": "🪨",
      "body": "The verb will keep coming. Sometimes Pharaoh does it. Sometimes the LORD does it. The book will not let you keep only the half that protects your system. Teach both sentences and let Romans 9 sit beside them later."
    }
  ],
  "wordStudies": [
    {
      "word": "Harden",
      "orig": "Hebrew: chazaq / qashah / kaved",
      "meaning": "7:3, 13, 14. Strengthen, make hard, make heavy. Different roots, one refusal. Heavy is the same family as ‘glory’ (kavod) — a heart weighted against the weight of God."
    },
    {
      "word": "Enchantments",
      "orig": "Hebrew: lehatim / latehem",
      "meaning": "7:11, 22. Secret arts. The book is willing to say they work at some level. It is not willing to say they last."
    }
  ],
  "doctrinal": "Teacher-only: I read the plagues as acts of the living God in Egypt’s public history, not as a folklore cycle about seasonal Nile events with the names filed off. Natural mechanisms can be discussed as the tools of the blow; they do not replace the Sender. On hardening I refuse both ‘Pharaoh never had a chance so the story is a puppet show’ and ‘God only watched from the balcony.’ The text uses both subjects. I will keep both.",
  "story": {
    "scene": "Two old brothers on a palace floor. Sticks that move. A staff eating staffs. Then a river a nation drinks turning into a wound that lasts a week.",
    "modern": "A copy of the sign that lets a powerful person tell himself nothing new has happened."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "Plagues as intensified natural disasters",
      "body": "Red silt, frogs after flood, gnats from mud, and so on. Strength: some sequence-theories fit the land. Cost: the timing, the warning, the discrimination later, and the magicians all have to be shrunk."
    },
    {
      "name": "Plagues as direct judgments",
      "body": "God strikes Egypt’s gods and river on a timetable Moses announces. Strength: the purpose clauses. Cost: you still live in a world where rivers have ecology, and the book is not afraid of matter."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 8 — Frogs, Gnats, Flies: When the Magicians Fail",
  "chNum": "8",
  "points": [
    "8:1–15 — Let my people go. If thou refuse, the river shall bring forth frogs. Frogs in the house, bedchamber, bed, ovens, kneadingtroughs. Aaron stretches the hand; frogs cover Egypt. Magicians do so. Pharaoh calls Moses and Aaron: Intreat the LORD, that he may take away the frogs, and I will let the people go. Moses lets Pharaoh name the time — ‘that thou mayest know that there is none like unto the LORD our God.’ Frogs die. Heaps. Land stinks. Pharaoh sees respite and hardens his heart.",
    "8:16–19 — Dust becomes lice (or gnats) throughout the land, on man and beast. Magicians try; they cannot. They tell Pharaoh: this is the finger of God. Heart hardened. The copy-machine has reached its edge.",
    "8:20–32 — Early meeting at the water again. Swarms of flies. ‘I will sever in that day the land of Goshen, in which my people dwell, that no swarms shall be there; to the end thou mayest know that I am the LORD in the midst of the earth. I will put a division between my people and thy people.’ Pharaoh bargains: sacrifice in the land. Then: go, not very far. Moses: we will go three days; our abomination would be before Egyptian eyes if we slay here. Pharaoh: intreat for me. Swarms depart. Pharaoh hardens his heart this time also and does not let them go."
  ],
  "refs": [
    "Psalm 78:45 — he sent divers sorts of flies and frogs, which destroyed them.",
    "Luke 11:20 — if I with the finger of God cast out devils. Jesus takes the magicians’ sentence and puts it on his own works.",
    "Exodus 9:4; 11:7 — the division language grows. Goshen is already a sermon about a God who can tell houses apart."
  ],
  "hist": [
    "Frogs belong to the Nile-world; Heket was a frog-headed birth-goddess in Egyptian iconography. The book never pauses to lecture comparative religion. It just puts frogs in the kneading troughs.",
    "‘Finger of God’ is how even the court specialists name a power they cannot replicate. Pharaoh hears his own men and does not yield."
  ],
  "opens": [
    "Why let Pharaoh pick the hour the frogs leave — what is Moses teaching him by the appointment?",
    "The magicians can copy, then they cannot. What should a room do with the fact that counterfeit works — until it doesn’t?"
  ],
  "topics": [
    {
      "title": "This Is the Finger of God",
      "icon": "☝️",
      "body": "The first crack in the court is not Pharaoh’s. It is his technicians admitting a limit. The sentence will travel all the way to Luke 11."
    },
    {
      "title": "A Division",
      "icon": "🏠",
      "body": "From flies onward the book starts drawing a line through the map. Judgment is not a flood that cannot tell Goshen from Memphis. The God of 8:22 is in the midst of the earth and knows his people."
    }
  ],
  "wordStudies": [
    {
      "word": "Division / severance",
      "orig": "Hebrew: pedut",
      "meaning": "8:23. A ransom-distinction, a marked-off difference. Related to redeeming. Goshen is already a redeemed zip code in advance of the night of blood."
    },
    {
      "word": "Intreat",
      "orig": "Hebrew: ‘atar",
      "meaning": "8:8, 28. Pharaoh wants Moses as his intercessor while remaining Pharaoh. The pattern will repeat: pray for me, then renege."
    }
  ],
  "doctrinal": "Teacher-only: I read the discrimination of Goshen as historical mercy, not as a later writer’s nationalism painted back on. God can judge a nation and spare a people inside it. That will matter for Passover and for every later text about a remnant. Bargaining (‘sacrifice in the land / not far’) is how a hard heart tries to keep the slaves and rent the LORD a weekend.",
  "story": {
    "scene": "Frogs in the bread dough. A king asking for prayer with a date attached. Dust becoming a bite. Magicians with empty hands. Flies that know a border.",
    "modern": "Crisis-prayer that lasts exactly as long as the smell, and a counterfeit that finally says the word God."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "Magicians as illusionists",
      "body": "Sleight and timing. Strength: keeps God unmatched. Cost: the text says they ‘did so,’ not ‘seemed to.’"
    },
    {
      "name": "Magicians as real occult power under a limit",
      "body": "Something answers them until the finger of God. Strength: 7:11–12; 8:18. Cost: you must still say their rods get eaten and their mouths finally confess."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 9 — Beasts, Boils, Hail: Now I Will Stretch Out My Hand",
  "chNum": "9",
  "points": [
    "9:1–7 — Hand of the LORD upon the cattle in the field: horses, asses, camels, oxen, sheep — a very grievous murrain. The LORD shall sever between the cattle of Israel and the cattle of Egypt; nothing shall die of Israel’s. Set time: tomorrow. And it is so. Pharaoh sends; behold, not one of Israel’s dies. Heart heavy; he does not let the people go.",
    "9:8–12 — Ashes of the furnace sprinkled toward heaven become a boil breaking forth with blains on man and on beast. Magicians cannot stand before Moses because of the boils. The LORD hardens Pharaoh’s heart. The court specialists exit the stage as sufferers, not as rivals.",
    "9:13–35 — Early: thus saith the LORD God of the Hebrews. For now I will stretch out my hand that I may smite thee and thy people with pestilence; thou shalt be cut off. ‘And in very deed for this cause have I raised thee up, for to shew in thee my power; and that my name may be declared throughout all the earth.’ Tomorrow hail. Send therefore now, gather thy cattle — the first plague with an open door for Egyptians who fear the word. He that feared the word of the LORD among the servants of Pharaoh made his servants and cattle flee into the houses. Hail, fire mingled, the worst in Egypt since it became a nation. Only in Goshen there is none. Pharaoh: I have sinned this time; the LORD is righteous; I and my people are wicked. Intreat. Moses: I will spread my hands; the hail ceases that thou mayest know the earth is the LORD’s. But as for thee and thy servants, I know that ye will not yet fear. Flax and barley smitten; wheat and rie not yet grown. Hail ceases. He sins yet more; he and his servants harden."
  ],
  "refs": [
    "Romans 9:17 — Paul quotes 9:16 as the exhibit of God’s freedom and purpose in a tyrant’s career.",
    "Joshua 10:11 — hailstones as the LORD’s weapon again in the land.",
    "Psalm 18:12–13 — hailstones and coals of fire in a theophany psalm.",
    "Revelation 16:21 — a great hail out of heaven. The picture is stocked from this chapter."
  ],
  "hist": [
    "Flax and barley mature earlier than wheat in the Egyptian agricultural year. 9:31–32 is a calendar note. It also leaves a later food-crop for the locusts of chapter 10. The narrator is watching the fields, not only the palace.",
    "‘Raised thee up’ (9:16) can be heard as ‘let you stand’ or ‘placed you on the stage.’ Either way Pharaoh’s throne is now a pulpit for a Name he will not confess."
  ],
  "opens": [
    "Some Egyptians fear the word and bring the cattle in. What does that do to a reading that treats every Egyptian as a cartoon villain?",
    "Pharaoh says ‘I have sinned this time.’ What is missing in that confession?"
  ],
  "topics": [
    {
      "title": "Raised Thee Up",
      "icon": "🌩️",
      "body": "The tyrant is not an accident God is scrambling to manage. He is on the stage so the earth can hear a Name. That sentence is heavy. Paul will not lighten it. Neither should a teacher who wants a smaller God."
    },
    {
      "title": "The Earth Is the LORD’s",
      "icon": "🌍",
      "body": "Moses’ purpose-clause after the hail. Egypt’s sky, fields, and fire do not belong to Egypt’s gods. Goshen’s quiet is the proof on the same map."
    }
  ],
  "wordStudies": [
    {
      "word": "Severing",
      "orig": "Hebrew: pala / hiphil of distinction in 9:4",
      "meaning": "The LORD makes a wonder-difference between herds. Same God who will later make a difference in 11:7 ‘that ye may know.’"
    },
    {
      "word": "Fear the word",
      "orig": "Hebrew: yare’ et-devar YHWH",
      "meaning": "9:20. Some of Pharaoh’s servants do what Pharaoh will not: treat a sentence from Moses as more solid than the open sky."
    }
  ],
  "doctrinal": "Teacher-only: 9:16 is a load-bearing beam. I will not apologize for it and I will not use it to make human responsibility a fiction — 9:20, 27, 34 are still in the chapter. Confession without surrender (‘I have sinned this time’) is how a hard heart uses religious language. The magicians’ collapse is the end of court-magic as a serious alternative.",
  "story": {
    "scene": "Dead herds on one side of a fence, living herds on the other. Ash in the air. Magicians who cannot stand. A sky of ice and fire. A few servants running cattle indoors because they believed a sentence.",
    "modern": "Hearing a warning in time to move, and a ruler using the word ‘sin’ as a weather-delay."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "9:16 as predestination exhibit",
      "body": "God’s purpose stands; Pharaoh is a vessel. Strength: Romans 9. Cost: 9:20–21’s divided servants still have to be preached."
    },
    {
      "name": "9:16 as mission-purpose",
      "body": "The raising-up is so the Name is declared in all the earth (the verse’s own purpose clause). Strength: the missions-end of the sentence. Cost: you still have the hardening verbs to face, not only the publicity."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 10 — Locusts and a Darkness That Can Be Felt",
  "chNum": "10",
  "points": [
    "10:1–20 — I have hardened his heart and the heart of his servants, that I might shew these my signs, and that thou mayest tell in the ears of thy son and of thy son’s son what things I have wrought in Egypt. How long wilt thou refuse to humble thyself? Tomorrow locusts. Servants to Pharaoh: how long shall this man be a snare? Let the men go. Moses and Aaron are brought again. Who shall go? All — young, old, sons, daughters, flocks. Pharaoh: not so; go now ye that are men. They are driven out. East wind all day and night; morning, locusts. The land is darkened. No green thing left. Pharaoh hurries: I have sinned against the LORD your God, and against you. Forgive, this once. West wind casts the locusts into the Red Sea. The LORD hardens Pharaoh’s heart.",
    "10:21–29 — Darkness over Egypt, even darkness which may be felt, three days. They see not one another, neither rise any from his place. All the children of Israel have light in their dwellings. Pharaoh: go, only let your flocks and your herds be stayed; little ones may go. Moses: our cattle also shall go; we know not with what we must serve the LORD until we come thither. The LORD hardens. Get thee from me; see my face no more; in the day thou seest my face thou shalt die. Moses: thou hast spoken well, I will see thy face again no more."
  ],
  "refs": [
    "Joel 2:1–11 — a locust army as the LORD’s day. Joel knows this picture.",
    "Psalm 105:28 — he sent darkness, and made it dark; they rebelled not against his word.",
    "Isaiah 45:7 — I form the light, and create darkness. Egypt’s sun-god does not get a vote.",
    "Matthew 27:45 — darkness over the land at the crucifixion. The Gospel writers know what darkness-at-noon means in Israel’s memory.",
    "Revelation 16:10 — the kingdom of the beast full of darkness."
  ],
  "hist": [
    "Locusts riding an east wind and leaving on a west wind is weather the region knows. The book’s claim is not that locusts are imaginary. It is that they arrive on a word, spare nothing, and leave on a word.",
    "Felt darkness for three days is a strike at the sun. Whether you imagine a hamseen dust-storm or a thicker act, the discrimination stands: light in Goshen, a nation that cannot stand up."
  ],
  "opens": [
    "Why does the telling-to-the-children purpose sit over plagues this ugly?",
    "Pharaoh will let the men go but keep the children or the flocks. Where do you still see partial release sold as obedience?"
  ],
  "topics": [
    {
      "title": "Tell Thy Son",
      "icon": "👦",
      "body": "The horrors have a classroom. 10:2 is why Israel will later eat lamb with questions from the youngest. Memory is not nostalgia. It is how a people stays free."
    },
    {
      "title": "Darkness Which May Be Felt",
      "icon": "🌑",
      "body": "Three days of a dark that has weight. Light in Israelite houses. Creation’s first word is being withheld from a throne that said ‘Who is the LORD?’"
    }
  ],
  "wordStudies": [
    {
      "word": "Humble thyself",
      "orig": "Hebrew: le‘anot",
      "meaning": "10:3. How long will you refuse to be afflicted / bowed. The ask is not information. It is a lowered neck."
    },
    {
      "word": "Felt",
      "orig": "Hebrew: yamash",
      "meaning": "10:21. Darkness that can be grope-touched. Not just the lamps out."
    }
  ],
  "doctrinal": "Teacher-only: I read the darkness as judgment on Egypt’s sun and on Pharaoh’s last bargains (leave the children, leave the flocks). Partial obedience is refusal with a religious accent. The ‘tell your son’ purpose means these chapters are meant to be catechism, not spectacle. Keep 10:29 as the end of audience — chapter 11 will be one more word, then night.",
  "story": {
    "scene": "A wind full of mouths. Green gone. A king asking forgiveness ‘this once.’ Then a dark you can put a hand into, and lamps still burning in slave quarters.",
    "modern": "Letting the adults go to church if you can keep the kids and the livelihood. Calling that compromise."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "Darkness as sirocco / dust",
      "body": "A known desert wind that blacks the day. Strength: ‘felt’ fits grit. Cost: three days and Goshen-light still have to be more than meteorology-plus-luck."
    },
    {
      "name": "Darkness as creational undoing",
      "body": "Day-one light revoked in Egypt. Strength: the creation-echo and the sun-polemic. Cost: you do not need to deny wind and dust as tools."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 11 — One Plague More",
  "chNum": "11",
  "points": [
    "11:1–3 — Yet will I bring one plague more upon Pharaoh, and upon Egypt; afterwards he will let you go hence. When he lets you go, he shall surely thrust you out hence altogether. Speak now in the ears of the people: let every man borrow of his neighbour jewels of silver and gold. The LORD gives the people favour in the sight of the Egyptians. Moses is very great in the land of Egypt, in the sight of Pharaoh’s servants and of the people.",
    "11:4–8 — About midnight will I go out into the midst of Egypt. All the firstborn in the land shall die, from the firstborn of Pharaoh that sitteth upon his throne even unto the firstborn of the maidservant behind the mill; and all the firstborn of beasts. A great cry, such as there was none like it, nor shall be. Against any of the children of Israel shall not a dog move his tongue, against man or beast: that ye may know how that the LORD doth put a difference between the Egyptians and Israel. Moses’ servants shall come down and bow. After that I will go out. He went out from Pharaoh in a great anger.",
    "11:9–10 — Pharaoh shall not hearken, that my wonders may be multiplied. Moses and Aaron did all these wonders; the LORD hardened Pharaoh’s heart; he did not let the children of Israel go out of his land. The summary closes the nine so the tenth can be its own night."
  ],
  "refs": [
    "Exodus 4:22–23 — the firstborn sentence was on the table before a single plague. 11 is not a new idea. It is the idea arriving.",
    "Genesis 15:14 — they shall come out with great substance. 11:2–3 is that oath in jewelry.",
    "Amos 5:17 — I will pass through the midst of thee. Passing-through language will split between 11:4 and 12:12, 23.",
    "Hebrews 11:28 — through faith he kept the passover and the sprinkling of blood, lest he that destroyed the firstborn should touch them."
  ],
  "hist": [
    "‘Borrow / ask’ (sha’al) is request, not a con in the Hebrew’s own mouth. Whether you hear it as back-wages for slavery or as the spoil of a defeated god-king, 12:35–36 will say they spoiled the Egyptians and the LORD gave favour.",
    "Firstborn in that world is title, heir, the future of a house. Striking firstborn is striking the next generation of the throne and of the mill."
  ],
  "opens": [
    "Why is Moses ‘very great’ in Egyptian eyes the night before the worst cry?",
    "‘Not a dog move his tongue’ — what kind of difference is that, next to a nationwide death?"
  ],
  "topics": [
    {
      "title": "One Plague More",
      "icon": "🕛",
      "body": "Midnight. The LORD himself going out. No rod mentioned. The last blow is personal in a way the frogs were not."
    },
    {
      "title": "A Difference",
      "icon": "🐕",
      "body": "The dog-silence is almost small on purpose. Judgment can be loud in one street and still as a held breath in the next. Knowing the difference is the lesson."
    }
  ],
  "wordStudies": [
    {
      "word": "Ask / borrow",
      "orig": "Hebrew: sha’al",
      "meaning": "11:2. To ask. KJV ‘borrow’ makes some readers smell a trick. The verb is request. 12:36 adds that the Egyptians granted it."
    },
    {
      "word": "Difference",
      "orig": "Hebrew: pala",
      "meaning": "11:7. A wonder-distinction. Same family as ‘wonders.’ The difference itself is one of the signs."
    }
  ],
  "doctrinal": "Teacher-only: I read the tenth as the LORD’s own passing through, not as a random infant mortality spike. It is measured to 4:22–23. I will not flinch from the moral weight — firstborn of the maidservant is in the sentence — and I will not put God in the dock as if Pharaoh’s killing of Hebrew sons in chapter 1 never happened. Favour and jewels are Genesis 15 kept. Moses’ anger is righteous exit, not a tantrum.",
  "story": {
    "scene": "A last warning spoken in a court that will not hear. Jewelry changing hands. A midnight appointment. A dog that will not bark in Goshen.",
    "modern": "The last clear sentence before a house finds out whether blood is on the door."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "Spoil as back-wages",
      "body": "Centuries of unpaid brick. Strength: the moral intuition and Genesis 15:14. Cost: the text’s own words are favour and asking, not a lawsuit."
    },
    {
      "name": "Spoil as victory-gift",
      "body": "A defeated empire sending the LORD’s people out loaded. Strength: 12:36 ‘spoiled.’ Cost: still have to say the asking was commanded, not looting at night."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 12 — Lamb, Blood, Night, and a Calendar Starts",
  "chNum": "12",
  "points": [
    "12:1–14 — This month shall be unto you the beginning of months; it is the first month of the year to you. A lamb for a house, without blemish, a male of the first year, sheep or goat, kept from the tenth to the fourteenth. Kill it in the evening. Strike the blood on the two side posts and on the upper door post. Eat the flesh that night, roast with fire, unleavened bread, bitter herbs. Loins girded, shoes on, staff in hand, in haste. It is the LORD’s passover. I will pass through the land this night and smite all the firstborn, execute judgment against all the gods of Egypt. I am the LORD. The blood shall be to you for a token upon the houses; when I see the blood, I will pass over you, and the plague shall not be upon you to destroy you. This day shall be unto you for a memorial; ye shall keep it a feast by an ordinance for ever.",
    "12:15–28 — Seven days unleavened bread; whoever eateth leaven, that soul shall be cut off. Holy convocation first day and seventh. No work except meat. Teach the son who asks, What mean ye by this service? It is the sacrifice of the LORD’s passover, who passed over the houses of the children of Israel in Egypt, when he smote the Egyptians, and delivered our houses. The people bow and worship. They do as the LORD commanded Moses and Aaron.",
    "12:29–36 — At midnight the LORD smites all the firstborn, from Pharaoh’s that sat on his throne to the captive in the dungeon, and all the firstborn of cattle. A great cry. Pharaoh calls Moses and Aaron by night: rise, get you forth; go, serve the LORD, as ye have said; take flocks and herds; be gone; and bless me also. Egyptians are urgent. They spoil the Egyptians.",
    "12:37–42 — From Rameses to Succoth, about six hundred thousand on foot that were men, beside children. A mixed multitude also. Flocks, herds. Dough before it was leavened, kneadingtroughs bound in clothes. Four hundred and thirty years, the selfsame day, hosts of the LORD go out. A night to be much observed.",
    "12:43–51 — The ordinance of the passover: no stranger eats of it; a bought servant circumcised may; a foreigner and a hired servant shall not. In one house. No bone broken. One law for the home-born and for the stranger who sojourns and is circumcised. All the hosts of the LORD go out from the land of Egypt."
  ],
  "refs": [
    "John 1:29 — behold the Lamb of God, which taketh away the sin of the world.",
    "John 19:36 — a bone of him shall not be broken. 12:46 is in that sentence.",
    "1 Corinthians 5:7–8 — Christ our passover is sacrificed for us; keep the feast, not with old leaven.",
    "1 Peter 1:18–19 — redeemed with the precious blood of Christ, as of a lamb without blemish.",
    "Hebrews 11:28 — faith kept the passover and the sprinkling of blood.",
    "Luke 22:15–20 — a later Passover night where the Lamb is also the host."
  ],
  "hist": [
    "The 430 years (12:40) sits next to Genesis 15’s 400. LXX and Samaritan include Canaan time in the 430; MT reads sojourning in Egypt. Acts 7:6 stays with 400. Name the number-tension. Do not let it steal the night.",
    "‘About 600,000 men’ plus women, children, and a mixed multitude is a very large host. Some chairs read the Hebrew ’eleph as clan rather than thousand. Others take the census straight and let the miracle be the size. Put the chairs out. Then stay with blood on wood.",
    "First month (Abib / Nisan) resets Israel’s year around redemption, not around a royal accession."
  ],
  "opens": [
    "If the blood is a token ‘to you’ and also what God says he will see, who is the night for?",
    "A mixed multitude walks out with them. What does that do to a pure-blood reading of the exodus?"
  ],
  "topics": [
    {
      "title": "When I See the Blood",
      "icon": "🩸",
      "body": "The house is not spared because it is Hebrew. It is spared because blood is on the door and they are under it eating in haste. Judgment is outside. A meal is inside. That architecture will travel the whole Bible."
    },
    {
      "title": "What Mean Ye by This Service",
      "icon": "🕯️",
      "body": "The son’s question is built into the rite. Exodus wants a nation that can answer. Memory without the meal goes thin. The meal without the answer goes magic."
    }
  ],
  "wordStudies": [
    {
      "word": "Pass over",
      "orig": "Hebrew: pasach",
      "meaning": "12:13, 23, 27. Hover over / skip / spare. The same root names the feast. Whether you hear ‘pass by’ or ‘stand over as guard,’ the blood is why the destroyer does not come in."
    },
    {
      "word": "Memorial",
      "orig": "Hebrew: zikkaron",
      "meaning": "12:14. Not a souvenir. A rite that makes the night present to the next generation."
    },
    {
      "word": "Mixed multitude",
      "orig": "Hebrew: erev rav",
      "meaning": "12:38. A great mixture. Egypt did not empty only the sons of Jacob. Numbers 11 will show the cost. The door in 12:48 is already cracked toward the circumcised stranger."
    }
  ],
  "doctrinal": "Teacher-only: I read 12 as the night that makes Israel a redeemed people, and I will let the New Testament name Christ as our Passover after the chapter has been heard as Israel’s. Do not skip the bitter herbs and the haste to get to Calvary in the first five minutes. Do not refuse Calvary when John and Paul take the lamb-language. On the numbers I name the live chairs and will not mock either the large-host reading or the clan-reading; the load is the blood and the going out. Judgment on the gods of Egypt (12:12) means this night is theology, not only rescue.",
  "story": {
    "scene": "A lamb in the house four days. Blood on the posts. Unleavened dough. A child asking why. Midnight. A cry in one street, a meal in the next. Jewelry pressed into hands. Kneading bowls slung in cloaks. A mixed crowd walking into a new first month.",
    "modern": "A family meal that is also a doorway, and a story you cannot keep if you will not answer the youngest person at the table."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "Large-host census",
      "body": "600,000 men means a nation in the millions. Strength: the face of the numbers and the ‘hosts’ language. Cost: logistics in Sinai have to be taught as provision, not shrugged."
    },
    {
      "name": "’Eleph as clan / troop",
      "body": "A smaller body of families. Strength: some later census math and wilderness questions ease. Cost: you are asking a common word to do special duty."
    },
    {
      "name": "Passover first as Israel’s night, then as Christ’s",
      "body": "The church’s long chair when it stays ordered. Strength: 1 Cor 5; John 19. Cost: none, if you will not erase 12:27’s ‘our houses’ to get there."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 13 — Firstborn, Unleavened Days, and a Bone to Carry",
  "chNum": "13",
  "points": [
    "13:1–16 — Sanctify unto me all the firstborn, whatsoever openeth the womb among the children of Israel, both of man and of beast: it is mine. Unleavened bread seven days in the month Abib, because in it thou camest out. Tell the son: this is done because of that which the LORD did unto me when I came forth out of Egypt. A sign on thine hand, a memorial between thine eyes, that the LORD’s law may be in thy mouth. Set apart the firstling of a beast; the ass thou shalt redeem with a lamb or break its neck; firstborn sons thou shalt redeem. When thy son asketh, What is this? By strength of hand the LORD brought us out, and when Pharaoh would hardly let us go, the LORD slew all the firstborn. Therefore I sacrifice and redeem. Frontlets and hand-sign again. Rescue becomes a claim on every first life in the house.",
    "13:17–22 — God leads them not through the way of the land of the Philistines, though that was near; lest peradventure the people repent when they see war, and return to Egypt. He leads the people about, through the way of the wilderness of the Red Sea. Armed, they go up. Moses takes the bones of Joseph with him: God will surely visit you. They take their journey from Succoth, encamp in Etham, in the edge of the wilderness. The LORD goes before them by day in a pillar of a cloud, to lead; by night in a pillar of fire, to give light. He taketh not away the pillar. Guidance is a presence that can be seen."
  ],
  "refs": [
    "Genesis 50:24–25 — Joseph’s oath about bones. 13:19 is that oath leaving Egypt on schedule.",
    "Joshua 24:32 — the bones buried at Shechem. Hebrews 11:22 — Joseph’s commandment concerning his bones was faith.",
    "Luke 2:23 — every male that openeth the womb shall be called holy to the Lord. Mary and Joseph still live inside 13:2.",
    "Numbers 3:12–13 — Levi taken instead of the firstborn. Chapter 13 is the claim; Numbers will be the substitution math."
  ],
  "hist": [
    "The ‘Red Sea’ in Hebrew is Yam Suph — sea of reeds. Geography chairs sit it at the Bitter Lakes, the Gulf of Suez, or the Gulf of Aqaba. The next chapter’s wall-of-water language has to govern the map-fight, not the other way round.",
    "Avoiding Philistine road is pastoral strategy. The short road is the war-road. God chooses a longer path so a newly freed people will not run home at the first garrison."
  ],
  "opens": [
    "Why does a redeemed people still have to redeem their sons?",
    "Joseph’s bones are on the march. What does it mean that freedom includes a funeral yet to come?"
  ],
  "topics": [
    {
      "title": "It Is Mine",
      "icon": "🥇",
      "body": "Firstborn belongs to the LORD because the LORD took Egypt’s firstborn and spared Israel’s. Gratitude here has a legal shape. Every later first-son in the house is a walking memory of midnight."
    },
    {
      "title": "Pillar",
      "icon": "🔥",
      "body": "Cloud by day, fire by night. Not a metaphor they have to work up. A column they can follow when they do not know the way of the wilderness."
    }
  ],
  "wordStudies": [
    {
      "word": "Sanctify",
      "orig": "Hebrew: qaddesh",
      "meaning": "13:2. Set apart as holy. Firstborn consecration is not a feeling. It is a transfer of claim."
    },
    {
      "word": "Visit",
      "orig": "Hebrew: paqad",
      "meaning": "13:19, quoting Joseph. The visit Joseph promised is the visit happening. Bones are the receipt."
    }
  ],
  "doctrinal": "Teacher-only: I read firstborn-redemption as still binding Israel to the night of 12, not as a discarded ritual. Luke 2 shows the Holy Family inside this chapter. On Yam Suph I will name the map-chairs and refuse to shrink 14’s language to a windy marsh unless the room has first heard walls of water. The pillar is how I teach guidance: God goes first, and he does not take the pillar away.",
  "story": {
    "scene": "A lamb for a firstborn son. Bread without yeast. A box of bones in the column. A cloud standing up like a person at the front of the line.",
    "modern": "Freedom that still owes the first of everything, and a God who will take the long road to keep you from running back."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "Yam Suph as marsh / reed sea",
      "body": "A reedy wetland east of the Delta. Strength: the name. Cost: 14:22, 29’s walls and dry ground have to be softened."
    },
    {
      "name": "Yam Suph as a deep gulf",
      "body": "Suez or Aqaba, water enough to drown an army. Strength: 14–15’s own poetry and depth-language. Cost: the exact basin is not pinned by a GPS verse."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 14 — Stand Still, and See the Salvation of the LORD",
  "chNum": "14",
  "points": [
    "14:1–14 — Turn and encamp before Pi-hahiroth, between Migdol and the sea, over against Baal-zephon. Pharaoh will say they are entangled in the land. I will harden his heart; he shall follow; I will be honoured upon Pharaoh and upon all his host; Egyptians shall know that I am the LORD. Six hundred chosen chariots, and all the chariots of Egypt. The children of Israel lift up their eyes; the Egyptians march after them; they are sore afraid. They cry to the LORD; they cry at Moses: were there no graves in Egypt? Better to serve than to die in the wilderness. Moses: Fear ye not, stand still, and see the salvation of the LORD, which he will shew to you to day. The Egyptians whom ye have seen to day, ye shall see them again no more for ever. The LORD shall fight for you, and ye shall hold your peace.",
    "14:15–22 — Wherefore criest thou unto me? Speak unto the children of Israel, that they go forward. Lift thou up thy rod, stretch out thine hand over the sea, and divide it. The angel of God which went before the camp removes and goes behind. The pillar of the cloud comes between Egypt and Israel: cloud and darkness to the one, light by night to the other. Moses stretches. The LORD causes the sea to go back by a strong east wind all that night, and makes the sea dry land, and the waters are divided. The children of Israel go into the midst of the sea upon the dry ground: the waters a wall unto them on their right hand and on their left.",
    "14:23–31 — Egyptians pursue into the midst of the sea. In the morning watch the LORD looks unto the host through the pillar of fire and of the cloud, and troubles them. He takes off their chariot wheels. Let us flee; the LORD fighteth for them. Stretch out thine hand. Waters return. Not so much as one of them remains. Israel sees the Egyptians dead upon the sea shore. Israel sees that great work. The people fear the LORD, and believe the LORD, and his servant Moses."
  ],
  "refs": [
    "Isaiah 43:16–17; 51:10 — a way in the sea, a path in the mighty waters. The prophets treat this night as the pattern of later rescue.",
    "Psalm 77:16–20; 106:7–12 — the waters saw God; they believed his words, they sang his praise.",
    "1 Corinthians 10:1–2 — all passed through the sea, all baptized unto Moses in the cloud and in the sea.",
    "Hebrews 11:29 — by faith they passed through the Red Sea as by dry land; the Egyptians assaying to do were drowned.",
    "Revelation 15:3 — the song of Moses the servant of God, and the song of the Lamb."
  ],
  "hist": [
    "Chariots are Egypt’s professional edge. Six hundred chosen plus the rest is a state trying to retrieve a labor force and a humiliation.",
    "East wind all night plus walls of water is the chapter holding weather and wonder in one sentence. Drop either half and you have written a different book."
  ],
  "opens": [
    "‘Were there no graves in Egypt?’ is almost funny. What does that joke reveal about how fear talks?",
    "Stand still — then go forward. How do both commands sit in one rescue?"
  ],
  "topics": [
    {
      "title": "The LORD Shall Fight for You",
      "icon": "🌊",
      "body": "Israel’s contribution in the crisis paragraph is to shut its mouth and walk between walls it did not build. Salvation here is something you see, then something you step into."
    },
    {
      "title": "A Wall on the Right and on the Left",
      "icon": "🧱",
      "body": "Dry ground is not a puddle receding to the ankles unless you cut the sentence. The same water is path and grave, depending on which side of the pillar you slept."
    }
  ],
  "wordStudies": [
    {
      "word": "Salvation",
      "orig": "Hebrew: yeshu‘ah",
      "meaning": "14:13. Rescue you can see. The name Jesus (Yeshua) will later carry this noun. Teach the sea first."
    },
    {
      "word": "Stand still",
      "orig": "Hebrew: hityatzevu",
      "meaning": "14:13. Take your stand. Not freeze forever — 14:15 will say go forward. Stillness here is the end of frantic planning."
    }
  ],
  "doctrinal": "Teacher-only: I read 14 as God actually dividing water and drowning an army, the founding miracle of the nation. Natural wind is in the verse; a muddy sandbar is not the whole verse. Paul’s ‘baptized unto Moses’ is a later reading I will allow after the narrative is told, not a replacement for it. Belief in 14:31 is fear-and-trust born of a corpse on a beach, not a mood they manufactured.",
  "story": {
    "scene": "A trapped beach. A joke about graves. A pillar moving to the rear. Wind all night. Two walls. Wheels coming off. Morning light on an army that cannot stand up.",
    "modern": "The night you cannot go back and cannot see a path — then a road through the thing that was going to kill you."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "Wind over a shallow reed-sea",
      "body": "A natural opening, Egyptians bogged. Strength: 14:21’s east wind. Cost: walls, midst of the sea, not one remaining, and 15’s depths."
    },
    {
      "name": "Divided deep water",
      "body": "The chapter’s own wall-language taken straight. Strength: 14:22, 29; 15:5, 8. Cost: you will be told this is impossible. That is not a surprise to the narrator."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 15 — The Song, the Bitter Water, and a Statute at Marah",
  "chNum": "15",
  "points": [
    "15:1–21 — Then sang Moses and the children of Israel this song unto the LORD. I will sing unto the LORD, for he hath triumphed gloriously; the horse and his rider hath he thrown into the sea. The LORD is my strength and song, and he is become my salvation. This is my God; I will prepare him an habitation. The LORD is a man of war; the LORD is his name. Pharaoh’s chariots cast into the sea. Thy right hand dashed in pieces the enemy. With the blast of thy nostrils the waters were gathered; the floods stood upright as an heap. The enemy said, I will pursue, I will divide the spoil. Thou didst blow; the sea covered them. Who is like unto thee, O LORD, among the gods? Fearful in praises, doing wonders. Thou in thy mercy hast led forth the people which thou hast redeemed. Thou shalt bring them in and plant them in the mountain of thine inheritance, the place thou hast made for thee to dwell in, the sanctuary. The LORD shall reign for ever and ever. Miriam the prophetess, Aaron’s sister, takes a timbrel; all the women go out with timbrels and dances. Sing ye to the LORD, for he hath triumphed gloriously.",
    "15:22–27 — Three days in the wilderness of Shur; no water. Marah: bitter waters. The people murmur against Moses. What shall we drink? He cries. The LORD shows him a tree; he casts it into the waters; the waters are made sweet. There he makes for them a statute and an ordinance, and there he proves them. If thou wilt diligently hearken, do that which is right, give ear to commandments, keep all his statutes, I will put none of these diseases upon thee, which I have brought upon the Egyptians: for I am the LORD that healeth thee. Elim: twelve wells, seventy palm trees. They encamp by the waters. Rescue-song to bitter cup in three days."
  ],
  "refs": [
    "Isaiah 12:2 — the LORD Jehovah is my strength and my song; he also is become my salvation. Isaiah lifts 15:2 into a later day.",
    "Revelation 15:3–4 — the song of Moses and the Lamb. Heaven is not finished singing this chapter.",
    "Psalm 73:17 — until I went into the sanctuary of God. 15:17 already sees a mountain and a dwelling.",
    "Exodus 23:25; Psalm 103:3 — the healer-name of 15:26 will keep speaking."
  ],
  "hist": [
    "Victory songs in the ancient Near East name the god who won and mock the enemy’s boast. 15 does that — and then looks past the beach to a planted sanctuary. The song is history and hope in one mouth.",
    "Marah and Elim sit on the usual south-Sinai road in traditional maps. Twelve springs / seventy palms is a numbered mercy after a numbered bitterness."
  ],
  "opens": [
    "The song already sees a sanctuary they have not built. What does that do to ‘we will believe it when we live there’?",
    "Three days from dancing to murmuring. Why does the book refuse to end on the timbrel?"
  ],
  "topics": [
    {
      "title": "The LORD Is a Man of War",
      "icon": "🥁",
      "body": "The first hymn of the nation is not a mood-song. It is about a God who fights, a right hand, a blast, a sea that stands in a heap. Soften it and you will not understand why Miriam dances."
    },
    {
      "title": "I Am the LORD That Healeth Thee",
      "icon": "🌴",
      "body": "A tree in bitter water, then a name. Healing here is covenant-tied: hearken, and the Egyptian diseases are not your portion. Elim is the picture of what that tastes like."
    }
  ],
  "wordStudies": [
    {
      "word": "Salvation",
      "orig": "Hebrew: yeshu‘ah",
      "meaning": "15:2. Same noun as 14:13, now become a song-title for God himself."
    },
    {
      "word": "Healeth",
      "orig": "Hebrew: rophe’eka — YHWH Rophe",
      "meaning": "15:26. The LORD your physician. First great title after the sea."
    }
  ],
  "doctrinal": "Teacher-only: I read 15:1–18 as Israel’s founding liturgy, not as a later insert. The sanctuary-line (15:17) is already Zion-shaped hope; I will not flatten it into ‘heaven only.’ The LORD reigning for ever is why this song can sit next to Revelation 15. Marah is the first wilderness exam: redeemed people can still curse the water. The tree is God’s means; the statute is the point.",
  "story": {
    "scene": "A beach full of singing. Timbrels. A boast the sea swallowed. Then a three-day walk to a spring that tastes like grief, a tree thrown in, and a grove with twelve mouths of water.",
    "modern": "The Sunday you cannot stop singing and the Wednesday you cannot stand the taste of the life you just asked for."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "Song as immediate response",
      "body": "They sang that day. Strength: ‘then sang.’ Cost: the polished poetry makes some hear a later hand."
    },
    {
      "name": "Song as later liturgy set back on the beach",
      "body": "A worship text placed on the event. Strength: sanctuary language looks ahead. Cost: the book still wants it in Moses’ and Miriam’s mouths."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 16 — Bread from Heaven, and a Sabbath Before Sinai",
  "chNum": "16",
  "points": [
    "16:1–12 — Wilderness of Sin, fifteenth day of the second month. The whole congregation murmurs: would to God we had died by the hand of the LORD in Egypt, when we sat by the flesh pots. Moses and Aaron: your murmurings are not against us, but against the LORD. Evening: ye shall know that the LORD hath brought you out. Morning: ye shall see the glory of the LORD. At even quails cover the camp. In the morning the dew lies; when it is gone, a small round thing, small as the hoar frost. What is it? It is the bread which the LORD hath given you to eat.",
    "16:13–31 — Gather every man according to his eating, an omer for every man. No one left over — except the greedy find worms and stink. Sixth day: double. Moses: tomorrow is the rest of the holy sabbath unto the LORD. Bake and seethe today; that which remaineth shall be laid up. Sixth-day leftovers do not stink. Seventh day: some go out to gather and find none. How long refuse ye to keep my commandments? The LORD hath given you the sabbath; therefore he giveth the sixth day bread for two days. They call the name Manna. Taste like wafers with honey. An omer to be kept for the generations, before the Testimony.",
    "16:32–36 — Fill an omer to be kept. Aaron lays it up before the Testimony, to be kept. Israel eats manna forty years, until they come to a land inhabited; they eat manna until they come unto the borders of the land of Canaan. An omer is the tenth part of an ephah."
  ],
  "refs": [
    "Deuteronomy 8:3 — he suffered thee to hunger, and fed thee with manna, that he might make thee know that man doth not live by bread only. Jesus will quote this in the wilderness (Matthew 4:4).",
    "John 6:31–35, 48–51 — our fathers did eat manna; Jesus: I am the bread of life. The Gospel argues from this chapter without erasing the frost on the ground.",
    "Psalm 78:23–25 — he rained down manna; men did eat angels’ food.",
    "Hebrews 9:4 — the golden pot that had manna in the ark’s memory."
  ],
  "hist": [
    "Sabbath as holy rest appears here as practice before the stone tablets of chapter 20. The sixth-day double portion is how a slave-people learns that the week is no longer Pharaoh’s.",
    "‘What is it?’ (man hu) is the folk etymology the chapter gives. The point is not botany. The point is a daily dependence that cannot be stockpiled without going foul — except when God says stockpile."
  ],
  "opens": [
    "Why does leftover manna rot on Tuesday and keep on Friday?",
    "They remember the flesh pots and forget the bricks. What does that do to nostalgia?"
  ],
  "topics": [
    {
      "title": "What Is It",
      "icon": "🍞",
      "body": "Daily bread with a question for a name. Enough for the day. Double before rest. A sample stored so grandchildren can see that wilderness was not a rumor."
    },
    {
      "title": "The LORD Hath Given You the Sabbath",
      "icon": "⏹️",
      "body": "Rest is gift before it is command on stone. Pharaoh’s quota had no seventh day. Manna teaches the calendar with the stomach."
    }
  ],
  "wordStudies": [
    {
      "word": "Manna",
      "orig": "Hebrew: man / man hu",
      "meaning": "16:15, 31. ‘What is it?’ A name that keeps the surprise in the bread."
    },
    {
      "word": "Sabbath",
      "orig": "Hebrew: shabbat",
      "meaning": "16:23. Cease, rest. First narrative use as a weekly holy rest for Israel. Genesis 2:3 was the pattern; this is the people learning it."
    }
  ],
  "doctrinal": "Teacher-only: I read manna as real provision on the ground, not only as a symbol waiting for John 6. John 6 is licensed and I will take it — after the omer and the worms. Sabbath in 16 is already gift-and-test; I will not wait for chapter 20 to say God cares about a seventh day. Murmuring as against the LORD (16:8) is how I teach complaint in a redeemed camp.",
  "story": {
    "scene": "A month out, a memory of stew, quail at dusk, frost that is bread at dawn, jars going foul overnight, and one jar that will outlive the forty years.",
    "modern": "Wanting yesterday’s slavery-menu, then having to trust that tomorrow’s breakfast will be there when you sleep."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "Manna as a known desert secretion / insect product",
      "body": "Some natural analogue. Strength: God often uses stuff. Cost: six-day rhythm, double Friday, forty years, and the stored omer will not fit a seasonal bug."
    },
    {
      "name": "Manna as given bread",
      "body": "The chapter’s own ‘bread from heaven.’ Strength: 16:4, 15; Psalm 78; John 6. Cost: none if you still let God use matter."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 17 — Water from the Rock, and Hands Held Up",
  "chNum": "17",
  "points": [
    "17:1–7 — Rephidim. No water. The people chide Moses. Give us water. Wherefore do ye tempt the LORD? They murmur: wherefore is this that thou hast brought us up out of Egypt, to kill us and our children and our cattle with thirst? Moses: they be almost ready to stone me. The LORD: take with thee of the elders; thy rod, the rod wherewith thou smotest the river; I will stand before thee upon the rock in Horeb; thou shalt smite the rock, and there shall come water out of it. He does. He calls the place Massah and Meribah — because of the chiding of the children of Israel, and because they tempted the LORD, saying, Is the LORD among us, or not?",
    "17:8–16 — Then came Amalek, and fought with Israel in Rephidim. Moses to Joshua: choose us out men; go fight. Tomorrow I will stand on the top of the hill with the rod of God in mine hand. Joshua fights. Moses, Aaron, and Hur go up. When Moses holds up his hand, Israel prevails; when he lets down his hand, Amalek prevails. Hands heavy. They sit him on a stone; Aaron and Hur stay up his hands, the one on the one side, the other on the other; his hands are steady until the going down of the sun. Joshua discomfits Amalek with the edge of the sword. Write this for a memorial in a book, rehearse it in the ears of Joshua: I will utterly put out the remembrance of Amalek from under heaven. Moses builds an altar: Jehovah-nissi — the LORD my banner. The LORD hath sworn that the LORD will have war with Amalek from generation to generation."
  ],
  "refs": [
    "Numbers 20:7–13 — a later rock, a different command (speak), a failure that will keep Moses out of the land. Do not mash the two scenes.",
    "1 Corinthians 10:4 — they drank of that spiritual Rock that followed them: and that Rock was Christ. Paul reads this water after you have seen the rod.",
    "Deuteronomy 25:17–19 — Amalek smote the hindmost, the faint. Remember; blot out. 17:14 is the start of that charge.",
    "Psalm 95:8–9 — harden not your heart, as in the provocation, as in the day of temptation in the wilderness."
  ],
  "hist": [
    "Amalek, in later memory, is the predator of the weak at the rear (Deuteronomy 25). Rephidim is Israel’s first battle as a free people. They fight with a sword in the valley and a rod on the hill.",
    "Writing in a book (17:14) is one of the Torah’s own notices that this story is meant to be text, not only campfire."
  ],
  "opens": [
    "‘Is the LORD among us or not?’ — why is that the question under thirst?",
    "Whose work saved the day — Joshua’s sword, Moses’ arms, Aaron and Hur’s shoulders, or the Banner on the hill?"
  ],
  "topics": [
    {
      "title": "Is the LORD Among Us",
      "icon": "🪨",
      "body": "Massah and Meribah name a test that runs both ways: they test God, God proves them. Water from the struck rock is the answer in liquid form. The names stay on the map because the question will come back."
    },
    {
      "title": "The LORD My Banner",
      "icon": "🚩",
      "body": "Hands up, hands down, a stone seat, two men holding a third. Victory is not a one-hero tale. The altar-name puts the banner where the rod was."
    }
  ],
  "wordStudies": [
    {
      "word": "Tempt / prove",
      "orig": "Hebrew: nasah (Massah)",
      "meaning": "17:2, 7. To test. Same root as God’s proving Israel in 15:25 and 16:4. The wilderness is an exam hall."
    },
    {
      "word": "Banner",
      "orig": "Hebrew: nes — YHWH Nissi",
      "meaning": "17:15. A signal-pole, a standard you rally to. The LORD himself is the pole."
    }
  ],
  "doctrinal": "Teacher-only: I keep 17 and Numbers 20 apart. Here Moses is told to strike and he obeys. Paul may call the Rock Christ; I will say that after the elders have watched water hit the dust. Amalek as a generational enemy is in the text; I will not use it as a blank check for later hatreds the chapter does not name. Prayer that needs other people’s arms is already being taught.",
  "story": {
    "scene": "A crowd with stones in mind. A rock, a rod, a standing God. Then dust of a first battle, an old man’s arms shaking, two brothers of the road holding him in the sky until sundown.",
    "modern": "Asking if God is even here because the tap is dry — and winning a fight only because someone else held your hands up."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "Amalek as a specific people",
      "body": "A real tribe, a real long war (1 Samuel 15). Strength: the names and Deuteronomy 25. Cost: later readers must not baptize every enemy as Amalek."
    },
    {
      "name": "Amalek as the type of predatory evil",
      "body": "The rear-attack becomes a picture. Strength: the memorial language. Cost: types that erase the tribe also erase the first fight Joshua actually fought."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 18 — Jethro’s Counsel, and Judges for the Camp",
  "chNum": "18",
  "points": [
    "18:1–12 — Jethro, priest of Midian, Moses’ father in law, hears all that God has done for Moses and for Israel, and that the LORD had brought Israel out. He takes Zipporah and her two sons — Gershom, Eliezer (‘the God of my father was mine help, and delivered me from the sword of Pharaoh’) — and comes to the wilderness, to the mount of God. Moses goes out to meet him, does obeisance, kisses him, they ask of the other’s welfare. Moses tells the story: all that the LORD had done unto Pharaoh, the travail, the deliverance. Jethro rejoices: Blessed be the LORD, who hath delivered you from the Egyptians and from Pharaoh. Now I know that the LORD is greater than all gods: for in the thing wherein they dealt proudly he was above them. Jethro takes burnt offering and sacrifices; Aaron and the elders eat bread with Moses’ father in law before God.",
    "18:13–27 — The next day Moses sits to judge the people from morning to evening. Jethro: what is this thing? Why sittest thou thyself alone? The people stand by thee from morning unto even. Moses: because the people come unto me to enquire of God; I judge between one and another; I make them know the statutes of God and his laws. Jethro: this thing is not good. Thou wilt surely wear away, thou and this people. Be thou for the people to God-ward, that thou mayest bring the causes unto God. Teach them ordinances and laws, shew them the way and the work. Provide out of all the people able men, such as fear God, men of truth, hating covetousness; place them over thousands, hundreds, fifties, tens. Every great matter they shall bring to thee; every small matter they shall judge. So shall it be easier. If thou shalt do this thing, and God command thee so, thou shalt be able to endure. Moses hearkens. They judge the small; the hard they bring to Moses. Jethro goes his way."
  ],
  "refs": [
    "Deuteronomy 1:9–18 — Moses retells the appointment of chiefs as his own burden-sharing. Both angles stay in the canon.",
    "Numbers 11:16–17 — later, seventy elders to bear the burden with him. 18 is the first organizational mercy.",
    "Acts 6:1–4 — the church will learn the same lesson: the word and prayer cannot be eaten by every dispute.",
    "1 Timothy 3:1–3 — able, not greedy of filthy lucre. Jethro’s job description is already moral, not only managerial."
  ],
  "hist": [
    "A Midianite priest blessing YHWH and sacrificing with Israel’s elders is a scene some rooms find awkward. The book is not embarrassed. ‘Now I know’ is a Gentile mouth confessing what Egypt would not.",
    "Tens / fifties / hundreds / thousands is a military-and-civil grid. Wilderness Israel is already too big for one man at the gate."
  ],
  "opens": [
    "Why is it important that Jethro says ‘Now I know’ after he hears the story, not before?",
    "Where is a good servant of God currently sitting from morning to evening on work other people could carry?"
  ],
  "topics": [
    {
      "title": "Now I Know",
      "icon": "🍞",
      "body": "The in-law from Midian hears the exodus and blesses the Name. The first feast after the sea that the book lingers on is elders and a priest of Midian eating bread before God."
    },
    {
      "title": "This Thing Is Not Good",
      "icon": "⚖️",
      "body": "Alone-judging will wear out the savior and the saved. Fear of God, truth, hatred of bribes — then layers. Jethro even adds ‘and God command thee so.’ Counsel is not a coup."
    }
  ],
  "wordStudies": [
    {
      "word": "Able men",
      "orig": "Hebrew: anshei chayil",
      "meaning": "18:21, 25. Men of strength / worth. Not merely available. Character is listed before capacity math."
    },
    {
      "word": "Enquire of God",
      "orig": "Hebrew: lidrosh elohim",
      "meaning": "18:15. Moses’ court is a seeking of God, not a generic civic docket. That is why the work matters — and why it must be shared."
    }
  ],
  "doctrinal": "Teacher-only: I read Jethro as true counsel under ‘if God command thee,’ not as pagan management theory sneaking into Sinai. His confession in 18:11 is one of the book’s Gentile peaks. I will not use 18 to sideline Moses; I will use it to keep leaders from baptizing burnout. Deuteronomy 1 can be taught alongside without picking a winner.",
  "story": {
    "scene": "A family reunion at the mountain. A father-in-law saying the Name out loud. Bread with elders. Then a long line of disputes, an old priest shaking his head, and a court system born before the tablets are cut.",
    "modern": "The gifted person who becomes the bottleneck, and the outsider who loves him enough to say this will kill you."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "Jethro as convert-confessor",
      "body": "‘Now I know’ is new faith. Strength: 18:11–12. Cost: he was already priest of Midian; the book does not narrate a full career-change."
    },
    {
      "name": "Jethro as a wise priest already near the truth",
      "body": "Midian has a memory of Abraham’s world (Genesis 25). Strength: the ease of the fellowship meal. Cost: 18:11 still sounds like a discovery."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 19 — A Kingdom of Priests, and a Mountain Fenced",
  "chNum": "19",
  "points": [
    "19:1–8 — Third month after going out, the same day, they come to the wilderness of Sinai. Camp before the mount. Moses goes up. Tell the house of Jacob: ye have seen what I did unto the Egyptians, and how I bare you on eagles’ wings, and brought you unto myself. Now therefore, if ye will obey my voice indeed, and keep my covenant, then ye shall be a peculiar treasure unto me above all people: for all the earth is mine. Ye shall be unto me a kingdom of priests, and an holy nation. Moses lays the words before the elders. All the people answer together: All that the LORD hath spoken we will do. Moses returns the words.",
    "19:9–15 — I come unto thee in a thick cloud, that the people may hear when I speak with thee, and believe thee for ever. Sanctify them today and tomorrow; wash their clothes; be ready against the third day: the LORD will come down in the sight of all the people upon mount Sinai. Bounds about the mount. Whosoever toucheth the mount shall be surely put to death; no hand shall touch him, but he shall be stoned or shot through. When the trumpet soundeth long, they shall come up to the mount. Be ready; come not at your wives.",
    "19:16–25 — Third day, morning: thunders, lightnings, a thick cloud, the voice of the trumpet exceeding loud. All the people in the camp tremble. Moses brings them out to meet with God. Sinai is altogether on a smoke, because the LORD descends upon it in fire; the smoke as the smoke of a furnace; the whole mount quakes greatly. The trumpet sounds long and waxes louder. Moses speaks; God answers him by a voice. The LORD comes down upon Sinai, on the top; the LORD calls Moses up. Charge the people, lest they break through unto the LORD to gaze, and many perish. Priests also must sanctify themselves. Away, get thee down, and thou shalt come up, thou, and Aaron with thee; but let not the priests and the people break through."
  ],
  "refs": [
    "1 Peter 2:9 — a royal priesthood, an holy nation, a peculiar people. Peter lifts 19:5–6 onto the church without asking Sinai to vanish.",
    "Deuteronomy 7:6–8 — peculiar people because the LORD loved you, not because you were many.",
    "Hebrews 12:18–24 — ye are not come unto the mount that burned with fire, but unto mount Sion. The contrast needs 19 to be as heavy as it is.",
    "Revelation 1:6; 5:10 — kings and priests. The destination-language of 19:6 keeps echoing."
  ],
  "hist": [
    "Third month is roughly later Pentecost timing. Acts 2 will sit another loud meeting on that season. Teach the rhyme after you have heard the trumpet.",
    "A fenced mountain is how holiness looks when a newly freed slave-camp meets the God who just drowned an army. Nearness is gift. Touching is death."
  ],
  "opens": [
    "‘All that the LORD hath spoken we will do’ — brave, or too fast?",
    "If all the earth is already his, what extra thing is ‘peculiar treasure’?"
  ],
  "topics": [
    {
      "title": "On Eagles’ Wings",
      "icon": "🦅",
      "body": "Before a single commandment is spoken, grace tells the story: I carried you; I brought you to myself. Obedience in 19:5 sits on rescue, not on a ladder they built to reach him."
    },
    {
      "title": "Kingdom of Priests",
      "icon": "⛰️",
      "body": "The whole nation is addressed as a priest-kingdom while a fence still stands around the hill. Hebrews 12 will later say there is another mountain. It will not say this one was play-acting."
    }
  ],
  "wordStudies": [
    {
      "word": "Peculiar treasure",
      "orig": "Hebrew: segullah",
      "meaning": "19:5. A king’s personal treasure, not just inventory. Malachi 3:17 will use it again."
    },
    {
      "word": "Holy nation",
      "orig": "Hebrew: goy qadosh",
      "meaning": "19:6. A people-set-apart. Nation here is a body belonging to a holy God."
    }
  ],
  "doctrinal": "Teacher-only: I read 19:4–6 as the charter of Israel, spoken after blood and sea, before tablets. The ‘if’ of 19:5 is covenant condition, not a denial that he already carried them. I will let 1 Peter take the titles for the church after Israel has been heard as the first addressee. The fence is mercy. Curiosity that breaks through is not faith.",
  "story": {
    "scene": "A camp washed and waiting. A hill smoking like a furnace. A trumpet that gets louder. A people saying yes before they have heard the ten words. Bounds in the dirt.",
    "modern": "Being carried first, then asked if you will live as treasure — with a line you are not to cross just to stare."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "19:5–6 as Israel’s standing vocation",
      "body": "The nation remains the first hearer of priest-kingdom language. Strength: ‘house of Jacob.’ Cost: later Gentile inclusion still has to be taught from other texts."
    },
    {
      "name": "19:5–6 as already open toward a wider people",
      "body": "‘All the earth is mine’ sits in the same breath. Strength: 19:5a; 1 Peter 2. Cost: do not use Peter to pretend Sinai was not spoken to Israel."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 20 — Ten Words from the Fire",
  "chNum": "20",
  "points": [
    "20:1–11 — God speaks all these words. I am the LORD thy God, which have brought thee out of the land of Egypt, out of the house of bondage. No other gods before me. No graven image, nor any likeness of anything in heaven, earth, water; no bowing, no serving. I the LORD thy God am a jealous God, visiting iniquity of the fathers upon the children unto the third and fourth generation of them that hate me; shewing mercy unto thousands of them that love me and keep my commandments. Not take the name of the LORD thy God in vain. Remember the sabbath day, to keep it holy. Six days labour; seventh is the sabbath of the LORD thy God: in it thou shalt not do any work, thou, son, daughter, servant, cattle, stranger within thy gates. For in six days the LORD made heaven and earth, the sea, and all that in them is, and rested the seventh: wherefore the LORD blessed the sabbath day, and hallowed it.",
    "20:12–17 — Honour thy father and thy mother: that thy days may be long upon the land. Thou shalt not kill. Thou shalt not commit adultery. Thou shalt not steal. Thou shalt not bear false witness against thy neighbour. Thou shalt not covet thy neighbour’s house, wife, servant, ox, ass, nor any thing that is thy neighbour’s. The second table turns from the Name to the neighbour. Covet is the inner command that unmasks the rest.",
    "20:18–26 — People see the thunderings, lightnings, noise of the trumpet, the mountain smoking. They remove and stand afar off. Speak thou with us, and we will hear; but let not God speak with us, lest we die. Moses: fear not: God is come to prove you, and that his fear may be before your faces, that ye sin not. The people stand afar off. Moses draws near unto the thick darkness where God is. Ye have seen that I have talked with you from heaven. No gods of silver and gold. An altar of earth; burnt offerings and peace offerings in all places where I record my name. I will come unto thee and bless thee. If an altar of stone, not hewn; a tool pollutes it. No steps, that thy nakedness be not discovered."
  ],
  "refs": [
    "Deuteronomy 5 — the ten words retold, sabbath grounded in the exodus as well as in creation.",
    "Matthew 5:21–48 — Jesus intensifies kill, adultery, oaths. He does not shrug the words off as starter-law.",
    "Matthew 19:18–19; Romans 13:8–10 — the neighbour-commands summarized as love.",
    "Ephesians 6:2–3 — the first command with promise.",
    "Hebrews 12:18–21 — the terror of this scene remembered so another mountain can be good news."
  ],
  "hist": [
    "Treaty-form in the ancient world often ran: I am the great king who saved you; therefore here are stipulations. Exodus 20:2 is that preamble with YHWH as the king.",
    "Numbering the ten differs slightly across Jewish and Christian chairs. The words themselves do not change. Name the count-difference if it helps; do not spend the hour on it."
  ],
  "opens": [
    "Why must ‘I brought you out’ be said before ‘no other gods’?",
    "Which word is the room most tempted to treat as interior-only, and which as public-only?"
  ],
  "topics": [
    {
      "title": "House of Bondage First",
      "icon": "🔟",
      "body": "The decalogue does not begin with an abstract moral god. It begins with a Rescuer. Obedience is answering a voice that already opened the door of the brick-house."
    },
    {
      "title": "Jealous and Merciful",
      "icon": "🔥",
      "body": "Jealous is covenant language, not a tantrum. Visiting iniquity and showing mercy to thousands sit in one mouth. The thousands-clause is longer than the third-and-fourth-clause."
    }
  ],
  "wordStudies": [
    {
      "word": "In vain",
      "orig": "Hebrew: lashshav’",
      "meaning": "20:7. Emptiness, falsehood. The Name is not a tool, a curse-word only, or a stamp on a lie."
    },
    {
      "word": "Covet",
      "orig": "Hebrew: chamad",
      "meaning": "20:17. Desire that reaches to take. Genesis 3:6 used the same root on the tree."
    },
    {
      "word": "Jealous",
      "orig": "Hebrew: qanna’",
      "meaning": "20:5. The husband’s word in a covenant. Idols are adultery against a God who already paid for the people."
    }
  ],
  "doctrinal": "Teacher-only: I read the ten words as God’s own speech to a redeemed nation, still binding as moral revelation even where the church does not keep Israel’s civil and ceremonial frame. I will not run a Sabbath tribunal from 20:8–11 alone; I will also not pretend the seventh day is a footnote. Images: I sit with the historic reading that God forbids idols and rival gods, not that every piece of church art is already a breach — and I will not mock people who are stricter. Grace first (20:2) stays the teacher’s order.",
  "story": {
    "scene": "A voice from fire. Ten sentences that rearrange a camp. A people backing away. One man walking toward the dark. An altar of dirt, no chisel, no staircase.",
    "modern": "Rules that only make sense if Someone already got you out — and a holiness that makes you want a mediator."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "Sabbath as creation ordinance still marked",
      "body": "20:11 hangs the day on Genesis 2. Strength: the text’s own because. Cost: later first-day practice has to be taught from resurrection texts, not from pretending 20 vanished."
    },
    {
      "name": "Sabbath as covenant sign for Israel",
      "body": "31:13–17 will call it a sign between the LORD and Israel. Strength: that paragraph. Cost: 20:10 already includes the stranger within the gates."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 21 — Servants, Harm, and an Eye for an Eye",
  "chNum": "21",
  "points": [
    "21:1–11 — Judgments set before them. A Hebrew servant six years; seventh he goes out free for nothing. If the master gave him a wife and children, they stay; he goes out by himself. If he says, I love my master, my wife, and my children; I will not go out free — the door, the awl, the ear; he serves for ever. A daughter sold as a maidservant is not sent out as the menservants. If she please not her master betrothed to her, she shall be redeemed; he cannot sell her to a strange nation. If he take another, her food, raiment, and marriage-duty shall not be diminished; if not, she goes out free.",
    "21:12–27 — He that smiteth a man so that he die shall surely be put to death. If a man lie not in wait, but God deliver him into his hand, a place to flee. Presumptuous murder: take him from mine altar to die. Smiting or cursing father or mother: death. Stealing a man and selling him: death. Injury that the man survives: pay for lost time and healing. A servant killed under the rod is punished; if he continue a day or two, the case is judged differently. Harm to a pregnant woman — life for life, eye for eye, tooth for tooth, wound for wound. A servant’s destroyed eye or tooth means freedom.",
    "21:28–36 — A goring ox is stoned. If the owner knew the ox was wont to push and did not keep him in, the owner dies or pays ransom. Thirty shekels if the ox gores a servant. An open pit: the owner pays. Ox against ox: they divide, unless the owner knew."
  ],
  "refs": [
    "Deuteronomy 15:12–18 — seventh-year release expanded, sent away not empty.",
    "Matthew 5:38–42 — Jesus on ‘eye for eye’ as a limit his disciples must not use for private revenge.",
    "1 Timothy 1:9–10 — law for menstealers. 21:16 sits in that list."
  ],
  "hist": [
    "This is case-law for a redeemed camp, not a defense of later race-chattel slavery. Hebrew debt-service is time-limited. Kidnapping a man to sell him is capital in the same chapter (21:16).",
    "‘Eye for eye’ in context is a judge’s ceiling — proportional penalty — not a street-fight manual."
  ],
  "opens": [
    "Why put the servant-laws first after the ten words?",
    "What does 21:16 do to anyone who wants to use Exodus as cover for selling people?"
  ],
  "topics": [
    {
      "title": "The Awl at the Door",
      "icon": "🚪",
      "body": "Freedom is the default in the seventh year. Forever-service is only by a public love-speech and a mark. The chapter puts a door on debt."
    },
    {
      "title": "Eye for Eye",
      "icon": "⚖️",
      "body": "A limit dressed as a slogan. The judge may not take a life for a tooth. Jesus will later forbid his people from using the limit as a license."
    }
  ],
  "wordStudies": [
    {
      "word": "Judgments",
      "orig": "Hebrew: mishpatim",
      "meaning": "21:1. Case rulings, the how-it-works of the ten words in a camp that already has fights and oxen."
    },
    {
      "word": "Eye for eye",
      "orig": "Hebrew: ayin tachat ayin",
      "meaning": "21:24. The lex talionis formula — 'eye in place of eye.' A courtroom ceiling on what a judge may impose, not a personal permission slip for revenge; Jesus directly addresses how his disciples must not weaponize this verse in Matthew 5:38-42."
    }
  ],
  "doctrinal": "Teacher-only: I will not baptize 21 as modern slavery apologetics, and I will not pretend the chapter is already the emancipation proclamation. It regulates a hard world toward restraint, release, and the death-penalty for man-stealing. Jesus’ ‘but I say unto you’ does not call Moses a villain; it stops disciples from weaponizing the courtroom sentence in personal spite. Name 21:21 as a hard clause; set it next to 21:26–27’s freedom-for-an-eye.",
  "story": {
    "scene": "A doorpost and an awl. A judge measuring a wound. An ox that has gored before. A girl who must not be sold abroad.",
    "modern": "The difference between a slogan about justice and a rule that actually caps what the powerful may take."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "Mishpatim as concession to hardness",
      "body": "Regulation of a wreck, like Deuteronomy 24 on divorce. Strength: Jesus’ method in Matthew 19. Cost: 21 also contains protections you should not shrug off as mere concession."
    },
    {
      "name": "Mishpatim as Israel’s civic holiness",
      "body": "How a priest-nation handles blood, debt, and beasts. Strength: the placement after 20. Cost: later states are not automatically Sinai."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 22 — Property, Strangers, and a God Who Hears the Cry",
  "chNum": "22",
  "points": [
    "22:1–15 — Stolen ox killed or sold: fivefold; sheep fourfold. Night-break-in killing: no blood-guilt; after sunrise there is. Restitution; if he has nothing, he is sold for his theft. Double for stolen live goods. Crop-fire: the kindler pays. Goods in a neighbour’s hand, disputed animals, borrowed beasts — the judges, the oath, the owner-present rule.",
    "22:16–31 — Enticed unbetrothed maid: dowry and marriage, or dowry-money if the father refuses. A sorceress shall not live. Beast-lying: death. Sacrifice to any god but the LORD: destruction. A stranger thou shalt neither vex nor oppress: for ye were strangers in Egypt. Neither afflict any widow or fatherless child. If they cry at all unto me, I will surely hear; my wrath shall wax hot; I will kill you with the sword; your wives shall be widows, and your children fatherless. No usury on the poor of my people. A pledged cloak back by sundown; it is his covering. I am gracious. Firstfruits, firstborn redeemed. Holy men shall ye be unto me."
  ],
  "refs": [
    "James 1:27 — visit the fatherless and widows. 22:22–24 is the Torah’s heat under that verse.",
    "Luke 18:1–8 — a cry to a judge. Exodus already said God is not deaf.",
    "Hebrews 13:2 — some have entertained strangers. 22:21 grounds the ethic in Egypt."
  ],
  "hist": [
    "Night-thief versus day-thief is about what you could know in the dark.",
    "Pledge-cloak returned at sundown is one of the most concrete mercy-rules in the Torah. Collateral may not become a second night of cold."
  ],
  "opens": [
    "Why does ‘ye were strangers’ keep showing up as a law, not only as a testimony?",
    "What happens to a faith that will quote the ten words and skip the widow’s cry?"
  ],
  "topics": [
    {
      "title": "I Will Surely Hear Their Cry",
      "icon": "📣",
      "body": "The God of the brick-kiln has not changed jobs. Widow, fatherless, stranger — their voice still reaches the same ear. Wrath here is protection with a sword in it."
    },
    {
      "title": "Not as an Usurer",
      "icon": "🧥",
      "body": "Poor-neighbour credit is not a business opportunity. A cloak for a pledge must go home at night. Holiness includes the temperature of another man’s sleep."
    }
  ],
  "wordStudies": [
    {
      "word": "Stranger",
      "orig": "Hebrew: ger",
      "meaning": "22:21. Sojourner. Israel’s memory of Egypt becomes a legal duty toward the person with no clan-cover."
    },
    {
      "word": "Cry",
      "orig": "Hebrew: tsa‘aq",
      "meaning": "22:23. Same family as Israel’s cry in 2:23 and 3:7. The book is rhyming on purpose."
    }
  ],
  "doctrinal": "Teacher-only: 22:21–27 is load-bearing ethics, not optional social coloring. I will preach the cry-hearing God as the same God as chapter 3. Capital clauses on sorcery and bestiality show that this holiness is not only kindness-to-strangers; it is also a fence against the rites of the nations. Do not pick only the half that fits the room’s politics.",
  "story": {
    "scene": "Double oxen paid back. A coat handed across a yard at dusk. A widow’s voice going up. A warning that the camp’s own wives could taste that same widowhood.",
    "modern": "Using someone’s poverty as interest, and discovering the God of the exodus still takes those calls."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "These mishpatim as time-bound civic code",
      "body": "For that camp, that land, those courts. Strength: some penalties are Israel-shaped. Cost: the stranger-widow-poor core keeps getting quoted later as live."
    },
    {
      "name": "These mishpatim as revealing God’s heart",
      "body": "Forms change; the cry-hearing God does not. Strength: the through-line to the prophets and James. Cost: you still have to say which penalties the church does not wield."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 23 — Courts, Calendars, and an Angel on the Road",
  "chNum": "23",
  "points": [
    "23:1–9 — No false report. No joining the wicked as an unrighteous witness. No following a multitude to do evil. No wresting judgment after the many, and no honouring the poor in his cause either — pity is not a license to twist. Enemy’s ox or ass going astray: bring it back. The ass of him that hateth you under its burden: help with him. No wresting the poor’s judgment. No slaying the innocent. Take no gift: the gift blindeth the wise. No oppressing a stranger; ye know the heart of a stranger, seeing ye were strangers.",
    "23:10–19 — Seventh year the land rests; the poor eat, and the beasts. Seventh day thou restest, that ox, ass, the son of the handmaid, and the stranger may be refreshed. Three feasts: unleavened bread in Abib; harvest of firstfruits; ingathering at year’s end. Three times in the year all thy males appear before the Lord GOD. First of the firstfruits into the house of the LORD. Not seethe a kid in his mother’s milk.",
    "23:20–33 — I send an Angel before thee, to keep thee in the way, and to bring thee into the place I have prepared. Beware of him, obey his voice, provoke him not; he will not pardon your transgressions: for my name is in him. If thou obey, I will be an enemy unto thine enemies. He will bring you in; I will cut the nations off. No bowing to their gods; overthrow, break images. I will bless bread and water, take sickness away. Not in one year, lest the land become desolate and the beast multiply — little by little. Borders from the Red Sea to the sea of the Philistines, from the desert to the river. No covenant with them nor with their gods."
  ],
  "refs": [
    "Matthew 5:44 — love your enemies. 23:4–5 is already returning an enemy’s ox.",
    "Deuteronomy 16:18–20 — judges and no gifts.",
    "Malachi 3:1 — the messenger of the covenant. 23:20–21 sits under that line.",
    "Judges 2:1–3 — an angel at Bochim: you have not obeyed."
  ],
  "hist": [
    "Sabbatical year for the land is economics and theology: the soil is not Pharaoh’s, and the poor get a legal harvest.",
    "Little by little (23:29–30) is one of the most realistic sentences in the conquest-promises. Instant occupancy would make the land feral."
  ],
  "opens": [
    "Why forbid twisting judgment for the poor as well as against them?",
    "‘My name is in him’ — how close is this Angel to the LORD himself?"
  ],
  "topics": [
    {
      "title": "You Know the Heart of a Stranger",
      "icon": "🪪",
      "body": "Not only the fact of Egypt. The heart of it. Memory is supposed to become reflex when you hold a gavel or pass an ass on the road."
    },
    {
      "title": "My Name Is in Him",
      "icon": "🕊️",
      "body": "An Angel who keeps, leads, does not pardon rebellion, and carries the Name. The book will not pause to draw the diagram."
    }
  ],
  "wordStudies": [
    {
      "word": "Gift / bribe",
      "orig": "Hebrew: shochad",
      "meaning": "23:8. A present that blinds. Wisdom is not immune."
    },
    {
      "word": "Little by little",
      "orig": "Hebrew: me‘at me‘at",
      "meaning": "23:30. Pace as mercy. Conquest-promises that ignore this line become a different religion."
    }
  ],
  "doctrinal": "Teacher-only: I read the Angel of 23:20–21 as more than a routine courier — the Name-in-him line will not let me shrink him — without forcing every later angel-text into one slot in this hour. On the nations in the land I will say what the chapter says: no covenant with their gods, little by little, borders named. I will not pretend those sentences are easy, and I will not use them as a blank map for modern states without the rest of Scripture in the room.",
  "story": {
    "scene": "A bribe sliding across a table. An enemy’s donkey in a ditch. Fields idle in a seventh year. An unseen guide with the Name in him. A map that fills slowly so the beasts do not win.",
    "modern": "Justice that will not cheat for your side, and a promise that refuses to arrive all at once just because you are impatient."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "The Angel as a created messenger",
      "body": "A high angel bearing God’s authority. Strength: ‘angel’ language. Cost: ‘my name is in him’ and ‘he will not pardon’ sound tighter than a courier."
    },
    {
      "name": "The Angel as the LORD’s own going",
      "body": "A way the invisible God goes before them. Strength: 33:14–15; the Name. Cost: you still have to speak carefully about the word angel."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 24 — Blood on the Book, a Meal on the Mount, and Forty Days",
  "chNum": "24",
  "points": [
    "24:1–8 — Come up, thou, and Aaron, Nadab, and Abihu, and seventy of the elders; worship afar off. Moses alone shall come near. Moses writes all the words of the LORD. Early: an altar under the hill, twelve pillars for twelve tribes. Young men offer burnt offerings and peace offerings. Half the blood in basons; half sprinkled on the altar. He reads the book of the covenant. They say, All that the LORD hath said will we do, and be obedient. Moses sprinkles the blood on the people: Behold the blood of the covenant, which the LORD hath made with you concerning all these words.",
    "24:9–11 — Moses, Aaron, Nadab, Abihu, and seventy elders go up. They saw the God of Israel: under his feet as it were a paved work of a sapphire stone, and as it were the body of heaven in his clearness. Upon the nobles he laid not his hand: also they saw God, and did eat and drink.",
    "24:12–18 — Come up into the mount, and be there: I will give thee tables of stone, and a law, and commandments which I have written. Moses and Joshua rise. Elders remain; Aaron and Hur will hear causes. A cloud covers the mount. The glory of the LORD abides upon Sinai six days; seventh day he calls Moses out of the midst of the cloud. The sight of the glory is like devouring fire on the top of the mount in the eyes of Israel. Moses goes into the midst of the cloud. Forty days and forty nights."
  ],
  "refs": [
    "Hebrews 9:18–22 — the first testament was dedicated with blood. The writer is standing in 24:8.",
    "Matthew 26:28 — this is my blood of the new testament. Jesus takes covenant-blood language from a night like this.",
    "Ezekiel 1:26 — a sapphire throne. 24:10 is an early floor under that later vision.",
    "Matthew 4:2 — forty days in a wilderness. Moses’ forty is already in Israel’s memory."
  ],
  "hist": [
    "Blood on altar and people is how a covenant is cut. Half and half binds both parties in the rite even though the parties are not equals.",
    "Eating and drinking while seeing God is the shock the narrator wants. 19 said touch and die. 24 says the nobles saw and ate."
  ],
  "opens": [
    "They say ‘we will do’ twice — 19:8 and 24:7 — and chapter 32 is coming. What is a vow worth on the day you make it?",
    "What does a meal under sapphire do to a faith that only knows God as fire-to-be-feared?"
  ],
  "topics": [
    {
      "title": "The Blood of the Covenant",
      "icon": "📖",
      "body": "Words written, words read, blood thrown. The relationship is not an idea they agreed on. It is a cut. Hebrews and the Last Supper will both refuse to let this sentence stay in the desert."
    },
    {
      "title": "They Saw God, and Did Eat and Drink",
      "icon": "🍽️",
      "body": "The most dangerous picnic in the book. Fire still looks like devouring fire to the camp below. On the hill, a floor like the sky, and food."
    }
  ],
  "wordStudies": [
    {
      "word": "Book of the covenant",
      "orig": "Hebrew: sefer habberit",
      "meaning": "24:7. The written words just given (20–23), now bound to a people with blood."
    },
    {
      "word": "Glory",
      "orig": "Hebrew: kavod",
      "meaning": "24:16–17. Weight, splendour. Devouring fire to the watching camp. A cloud-covered call to the man who goes in."
    }
  ],
  "doctrinal": "Teacher-only: I read 24 as the covenant’s sealing, not as pageantry. Blood on the people is why Hebrews 9 can argue the way it does. The meal-vision is real enough that the narrator repeats ‘they saw.’ I will not flatten it into a metaphor, and I will not pretend it undoes 33:20’s ‘no man shall see me and live’ — Scripture keeps both the seeing and the limit. Forty days sets up the calf: the mediator is out of sight, the fire still visible, the camp about to panic.",
  "story": {
    "scene": "Twelve stones. Basins of blood. A book read aloud. A nation wet with covenant. Sapphire underfoot. Bread in the nobles’ mouths. A man walking into fire-looking glory for forty days.",
    "modern": "Saying yes with your whole mouth, eating in the presence, then waiting at the foot of a hill when the one who speaks for you has been gone too long."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "They saw a vision / representation",
      "body": "Feet and pavement, not the essence. Strength: 33:20; ‘as it were.’ Cost: the narrator still says they saw God."
    },
    {
      "name": "They were granted a true sight under restraint",
      "body": "God showed what they could bear and did not lay his hand on them. Strength: 24:11. Cost: you still have to speak the limit of chapter 33."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 25 — Take Me an Offering: Ark, Table, Lamp",
  "chNum": "25",
  "points": [
    "25:1–9 — Speak unto the children of Israel, that they bring me an offering: of every man that giveth it willingly with his heart ye shall take my offering. Gold, silver, brass, blue, purple, scarlet, fine linen, goats’ hair, rams’ skins dyed red, badgers’ skins, shittim wood, oil, spices, onyx stones. Let them make me a sanctuary; that I may dwell among them. According to all that I shew thee, after the pattern of the tabernacle, and the pattern of all the instruments thereof, even so shall ye make it. The goal of the exodus is not only exit. It is God living in the camp.",
    "25:10–22 — An ark of shittim wood, overlaid with gold, rings and staves that are not to be taken from it. In the ark: the testimony which I shall give thee. A mercy seat of pure gold, two cherubim of beaten gold at the two ends, wings covering, faces toward the mercy seat. There I will meet with thee, and I will commune with thee from above the mercy seat, from between the two cherubim. The holiest furniture is a box for words and a lid named mercy, with guardians from Genesis 3 now facing inward toward provision.",
    "25:23–40 — A table of shittim wood overlaid with gold: dishes, spoons, covers, bowls. Shewbread always before me. A candlestick of pure gold, beaten work, three branches on a side, knops and flowers like almonds. Seven lamps. Tongs and snuffdishes of gold. Look that thou make them after their pattern, which was shewed thee in the mount."
  ],
  "refs": [
    "Hebrews 8:5; 9:4–5 — priests serve the example and shadow of heavenly things, according to the pattern shewed in the mount. The ark, manna, tables, cherubim of glory shadowing the mercy seat.",
    "Romans 3:25 — whom God hath set forth to be a propitiation. The same word-family as mercy seat in the Greek Bible.",
    "John 1:14 — the Word was made flesh, and dwelt (tabernacled) among us. The Gospel takes 25:8 as its plot.",
    "Revelation 21:3 — the tabernacle of God is with men."
  ],
  "hist": [
    "Willing-heart offering is how the sanctuary is funded. Egypt’s jewels (12:35–36) become the raw material of a dwelling. Spoil turns into worship.",
    "Cherubim last stood east of Eden with a sword. Here they are beaten out of gold and stare at a lid, not at a locked garden."
  ],
  "opens": [
    "If the point of leaving Egypt is ‘that I may dwell among them,’ what does that do to a salvation that only means escape?",
    "Why put written words inside the holiest object and name the lid mercy?"
  ],
  "topics": [
    {
      "title": "That I May Dwell Among Them",
      "icon": "🏠",
      "body": "Sanctuary is not Israel’s idea to keep God nearby. It is God’s idea to move in. Pattern on the mount means Moses is copying, not inventing."
    },
    {
      "title": "From Between the Cherubim",
      "icon": "👑",
      "body": "Meeting-place is not a statue and not an empty room. It is a covered box of testimony. Presence sits on mercy over law."
    }
  ],
  "wordStudies": [
    {
      "word": "Sanctuary / dwell",
      "orig": "Hebrew: miqdash / shakan",
      "meaning": "25:8. Holy place so that I may tabernacle among them. Shekinah later names the settled presence; the verb is already here."
    },
    {
      "word": "Mercy seat",
      "orig": "Hebrew: kapporet",
      "meaning": "25:17. Cover, place of atonement. LXX hilasterion. Romans 3:25 will put that word on Christ."
    },
    {
      "word": "Pattern",
      "orig": "Hebrew: tabnit",
      "meaning": "25:9, 40. The mount-shown form. Worship is received, not brainstormed."
    }
  ],
  "doctrinal": "Teacher-only: I read the tabernacle as God actually intending to dwell in Israel’s midst, a real tent after a real pattern. Hebrews may call it shadow; shadows are cast by something. I will take John 1:14 after 25:8 is heard as Israel’s gift. Do not skip the willing heart to get to typology. Do not skip typology once the furniture has been named.",
  "story": {
    "scene": "A list of gold and goat hair taken from willing hands. A box that will hold words. A gold lid under wings. Bread set in a quiet row. A lamp that must not be invented.",
    "modern": "Building God a house out of the stuff you walked out carrying — and finding the meeting-place is mercy over a written charge."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "Pattern as heavenly original",
      "body": "Moses saw a real upper thing. Strength: Hebrews 8:5. Cost: the book never tours that upper room for you."
    },
    {
      "name": "Pattern as God-given blueprint",
      "body": "Shown so they will not copy Egypt’s shrines. Strength: 25:9, 40. Cost: Hebrews still wants more than a floor-plan."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 26 — Curtains, Boards, and a Veil",
  "chNum": "26",
  "points": [
    "26:1–14 — Ten curtains of fine twined linen, blue, purple, scarlet, cherubim woven in — the inner skin of the house is guardians and color. Eleven goats’-hair curtains for a tent over it. Rams’ skins dyed red, and a covering of badgers’ skins above. Beauty is on the inside. Weather-leather is on the outside. The nations walking by will not see the cherubim.",
    "26:15–30 — Boards of shittim wood standing up, sockets of silver, bars of wood overlaid with gold. The house has a skeleton. It can be taken down and walk. Raise the tabernacle according to the fashion thereof which was shewed thee in the mount.",
    "26:31–37 — A veil of blue, purple, scarlet, fine twined linen, cherubim: hang it upon four pillars. The veil shall divide unto you between the holy place and the most holy. Put the mercy seat upon the ark of the testimony in the most holy place. Table north, candlestick south, outside the veil. A hanging for the door of the tent, five pillars, sockets of brass. Access is layered on purpose."
  ],
  "refs": [
    "Matthew 27:51 — the veil of the temple was rent in twain from the top to the bottom. That tear needs this chapter’s veil to mean anything.",
    "Hebrews 9:3–8; 10:19–20 — after the second veil the holiest; a new and living way through the veil, that is to say, his flesh.",
    "Leviticus 16:2 — speak unto Aaron: come not at all times into the holy place within the veil."
  ],
  "hist": [
    "A portable shrine with silver sockets and gold-faced boards is how a camping people carries holiness. Egypt built stone that stays. Israel is given a house that moves when the cloud moves.",
    "Cherubim on inner curtains means the holy place is decorated with the same guardians that mark the holiest lid. The whole inner house is a guarded garden-memory."
  ],
  "opens": [
    "Why hide the beauty under skins?",
    "What is a veil for — to keep God in, or to keep Israel alive?"
  ],
  "topics": [
    {
      "title": "Beauty Inward",
      "icon": "🧵",
      "body": "The cherubim are not a billboard. They are for the priests who go in. Holiness in this book is not advertising."
    },
    {
      "title": "The Veil Divides",
      "icon": "🚪",
      "body": "Two rooms. One nation. One man, later, once a year, with blood. When the Gospel rips a later veil, it is this architecture being opened, not a random curtain in a public hall."
    }
  ],
  "wordStudies": [
    {
      "word": "Veil",
      "orig": "Hebrew: paroket",
      "meaning": "26:31–33. The divider. Not the outer door-hanging (masak). This is the inner stop."
    },
    {
      "word": "Most holy",
      "orig": "Hebrew: qodesh haqodashim",
      "meaning": "26:33. Holy of holies. Superlative space for the box and the lid."
    }
  ],
  "doctrinal": "Teacher-only: I read the veil as real mercy-and-limit, not as God being shy. Hebrews 10 is licensed after 26 is taught as Israel’s map. Do not spend the hour only on cubits. Do not skip cubits so far that the room never sees that holiness has measurements.",
  "story": {
    "scene": "Linen with wings woven in. Goat hair. Red hides. Boards in silver feet. A curtain that makes two rooms out of one tent.",
    "modern": "A God who wants to live with you and still will not let the whole camp stroll into the back room."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "Tabernacle as copy of a heavenly shrine",
      "body": "Two rooms because heaven has a corresponding holiness. Strength: Hebrews 8–9. Cost: Exodus itself stays on the desert floor."
    },
    {
      "name": "Tabernacle as portable Sinai",
      "body": "The mountain’s graded closeness turned into cloth. Strength: 19’s bounds become 26’s veil. Cost: Hebrews still lifts your eyes higher than canvas."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 27 — Altar, Court, and Oil for a Lamp That Does Not Go Out",
  "chNum": "27",
  "points": [
    "27:1–8 — An altar of shittim wood, five cubits by five, three high, horns of it, overlaid with brass. Pans, shovels, basons, fleshhooks, firepans — all brass. A grate of network of brass, rings, staves. Hollow with boards. As it was shewed thee in the mount, so shall they make it. The first thing a worshiper meets is not the ark. It is fire and blood in the open court.",
    "27:9–19 — The court: hangings of fine twined linen, pillars and sockets of brass, hooks and fillets of silver. A hundred cubits on the south and north, fifty on the west, fifty on the east with a twenty-cubit gate of blue, purple, scarlet, embroidered. Pins of brass. A fenced yard around the house, so holiness has a public edge and a door.",
    "27:20–21 — Command the children of Israel, that they bring pure oil olive beaten for the light, to cause the lamp to burn always. In the tabernacle of the congregation without the veil, Aaron and his sons shall order it from evening to morning before the LORD. A statute for ever unto their generations. Night in the camp does not mean the holy place goes dark."
  ],
  "refs": [
    "Leviticus 6:12–13 — the fire on the altar shall be burning in it; it shall not be put out.",
    "Hebrews 13:10–13 — we have an altar; let us go forth therefore unto him without the camp.",
    "Revelation 1:12–13 — seven golden candlesticks, and one like unto the Son of man in the midst."
  ],
  "hist": [
    "Horns on altars are a known ancient form — place of blood-smear and, in later stories, a place people grab (1 Kings 1–2). Exodus just specifies them.",
    "Beaten olive oil (not the last cheap press) is a quality-demand. Light in the holy place is a national obligation, not a priest’s hobby."
  ],
  "opens": [
    "Why is the altar bronze and outside, while the furniture inside is gold?",
    "Who is responsible for the lamp — Aaron, or the people who bring the oil?"
  ],
  "topics": [
    {
      "title": "You Meet Fire First",
      "icon": "🔥",
      "body": "Court, then door, then holy place, then veil. The map is a theology. Nobody starts at the mercy seat."
    },
    {
      "title": "A Lamp to Burn Always",
      "icon": "🪔",
      "body": "Evening to morning. Beaten oil. A statute forever. Presence is not a daylight-only idea."
    }
  ],
  "wordStudies": [
    {
      "word": "Altar",
      "orig": "Hebrew: mizbeach",
      "meaning": "27:1. Place of slaughter / offering. From the verb to slay. The court is honest about cost."
    },
    {
      "word": "Always / continually",
      "orig": "Hebrew: tamid",
      "meaning": "27:20. Regular, perpetual. The same word will mark the daily offering. Faithfulness here is a schedule."
    }
  ],
  "doctrinal": "Teacher-only: Bronze altar first is the order I will keep when people want to talk only about inner light and felt presence. Blood in the court is how you get near. The perpetual lamp is Israel’s shared work. I will let Revelation’s lampstands echo after the beaten oil has been felt as a chore and a gift.",
  "story": {
    "scene": "A square of bronze with horns. A linen yard. A gate of color. A jug of beaten oil handed to a priest at dusk so the inner room will not go blind.",
    "modern": "Wanting the back-room closeness without standing first where something has to burn."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "Court as public mercy",
      "body": "A whole congregation can come to the door of the yard. Strength: the size and the gate. Cost: they still cannot walk the veil."
    },
    {
      "name": "Court as graded exclusion",
      "body": "Linen walls keep most of life outside. Strength: the pins and sockets. Cost: the gate is real, and so is the oil command on the whole people."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 28 — Holy Garments for Glory and for Beauty",
  "chNum": "28",
  "points": [
    "28:1–14 — Take Aaron thy brother, and his sons with him, from among the children of Israel, that he may minister unto me in the priest’s office: Aaron, Nadab, Abihu, Eleazar, Ithamar. Holy garments for Aaron, for glory and for beauty. Speak to the wise hearted, whom I have filled with the spirit of wisdom. Breastplate, ephod, robe, broidered coat, mitre, girdle. Gold, blue, purple, scarlet, fine linen. The ephod: two onyx stones engraved with the names of the children of Israel, six on a side, according to their birth — stones of memorial unto the children of Israel; Aaron shall bear their names before the LORD upon his two shoulders.",
    "28:15–30 — The breastplate of judgment, foursquare, four rows of stones, twelve, each a name of a tribe. Bind it by rings and chains to the ephod so it will not be loosed. Aaron shall bear the names of the children of Israel in the breastplate of judgment upon his heart, when he goeth in unto the holy place, for a memorial before the LORD continually. In the breastplate: Urim and Thummim; they shall be upon Aaron’s heart when he goeth in before the LORD. Aaron shall bear the judgment of the children of Israel upon his heart before the LORD continually.",
    "28:31–43 — Robe of the ephod, all of blue, a hole with a binding, pomegranates of blue and purple and scarlet, bells of gold between: his sound shall be heard when he goeth in unto the holy place before the LORD, and when he cometh out, that he die not. A plate of gold on the mitre: HOLINESS TO THE LORD. It shall be upon Aaron’s forehead, that Aaron may bear the iniquity of the holy things; it shall be always upon his forehead, that they may be accepted before the LORD. Coats, girdles, bonnets for glory and beauty. Linen breeches to cover nakedness from the loins even unto the thighs, worn when they come in or when they come near the altar."
  ],
  "refs": [
    "Isaiah 61:10 — he hath clothed me with the garments of salvation. Priest-clothing becomes a later hope-picture.",
    "Zechariah 3:1–5 — Joshua the high priest in filthy garments, then a change of raiment.",
    "Hebrews 5:1–4; 7:26–28 — priests taken from among men; we have a high priest who is holy, harmless, undefiled.",
    "John 17:19 — for their sakes I sanctify myself. The forehead-plate logic in another register."
  ],
  "hist": [
    "Urim and Thummim are lots or lights-and-perfections kept in the breastplate. The book never writes the user-manual. Later texts show yes-no seeking (Numbers 27:21; 1 Samuel 28:6). Teach the function: judgment on the heart, not a magic trick you can reconstruct.",
    "Bells so that he die not is how dangerous nearness is. You should hear the priest still moving."
  ],
  "opens": [
    "Why must the people be on Aaron’s shoulders and on his heart at the same time?",
    "‘That he die not’ is sewn into a robe. What does that do to casual talk about ‘coming into God’s presence’?"
  ],
  "topics": [
    {
      "title": "On His Heart Continually",
      "icon": "💎",
      "body": "Twelve names in stone. Not a speech Aaron has to remember. A weight he has to wear. Intercession here has jewelry and sweat."
    },
    {
      "title": "Holiness to the LORD",
      "icon": "✨",
      "body": "A gold plate on a forehead that bears the iniquity of the holy things so the people’s gifts can be accepted. Even offerings need a bearer."
    }
  ],
  "wordStudies": [
    {
      "word": "Glory and beauty",
      "orig": "Hebrew: kavod / tiph’eret",
      "meaning": "28:2, 40. Weight and splendour. Priestly clothes are not costume. They preach."
    },
    {
      "word": "Memorial",
      "orig": "Hebrew: zikkaron",
      "meaning": "28:12, 29. The names are there so God is reminded — and so Aaron cannot forget whose house he represents."
    }
  ],
  "doctrinal": "Teacher-only: I read Aaron’s garments as appointed mediation, not as religious theater. The names on heart and shoulder are how I teach intercession before I get to Hebrews. Urim and Thummim I will leave as given means of judgment without inventing a reconstruction. The gold plate bearing iniquity of holy things is one of the most gospel-shaped sentences in the clothing chapters — gifts themselves need covering.",
  "story": {
    "scene": "Blue and gold being cut. Two stones on a man’s shoulders with six names each. Twelve more over his ribs. Bells. A forehead that says HOLINESS so the camp’s worship will not be sent back.",
    "modern": "Someone carrying your name into a room you cannot enter — and wearing the risk so your offering can be received."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "Priesthood as restricted mediation",
      "body": "Aaron’s house only, garments required, bells required. Strength: 28:1, 35, 43. Cost: 19:6’s whole-nation priest-language still sits on the mountain."
    },
    {
      "name": "Priesthood as a vestment of the nation’s calling",
      "body": "One man dressed as the people before God. Strength: the names. Cost: Nadab and Abihu will prove the clothes are not a costume you can freelance."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 29 — Blood on an Ear, and I Will Dwell Among the Children of Israel",
  "chNum": "29",
  "points": [
    "29:1–18 — The consecration: a young bullock and two rams without blemish, unleavened bread, cakes, wafers, a basket. Wash Aaron and his sons. Put the garments on Aaron; pour the anointing oil on his head. Put coats on the sons, gird them, bonnets, the priest’s office for a perpetual statute. Bring the bullock; Aaron and his sons put their hands on its head; kill it at the door; blood on the horns of the altar with thy finger; pour the rest at the bottom; burn the fat; the rest of the bullock burn without the camp — it is a sin offering. One ram: hands on the head, blood round about the altar, cut and wash, burn all — a burnt offering, sweet savour.",
    "29:19–37 — The second ram — the ram of consecration. Hands on the head. Kill it. Blood on the tip of Aaron’s right ear, on the thumb of his right hand, on the great toe of his right foot; the same for his sons. Sprinkle blood and oil on garments. Wave breast, heave shoulder. Aaron’s holy garments for his sons after him, to be anointed in them, consecrated in them. Seven days shalt thou consecrate them. The altar also: a sin offering each day; the altar shall be most holy; whatsoever toucheth it shall be holy.",
    "29:38–46 — Two lambs of the first year day by day continually: one in the morning, the other at even, with flour, oil, wine. A continual burnt offering throughout your generations at the door of the tabernacle of the congregation before the LORD: where I will meet you, to speak there unto thee. I will meet the children of Israel, and the tabernacle shall be sanctified by my glory. I will sanctify the tabernacle and the altar; I will sanctify Aaron and his sons to minister. I will dwell among the children of Israel, and will be their God. They shall know that I am the LORD their God, that brought them forth out of the land of Egypt, that I may dwell among them: I am the LORD their God."
  ],
  "refs": [
    "Hebrews 13:11–12 — bodies of beasts burned without the camp; Jesus also suffered without the gate.",
    "Leviticus 8–9 — the consecration actually performed. 29 is the script.",
    "John 1:29 — the lamb of God. Daily lambs at the door are the drumbeat under that title.",
    "2 Corinthians 6:16 — I will dwell in them, and walk in them."
  ],
  "hist": [
    "Blood on ear, thumb, and toe is a whole-body claim: what you hear, what you handle, where you walk. Consecration is not only a hat.",
    "29:45–46 is the thesis sentence of the second half of Exodus. Egypt was left for this: dwelling."
  ],
  "opens": [
    "Why blood on an ear before a man may speak for a people?",
    "29:46 says they were brought out ‘that I may dwell among them.’ Has your reading of the exodus been too thin?"
  ],
  "topics": [
    {
      "title": "Ram of Consecration",
      "icon": "🩸",
      "body": "Hands on a head. Blood on the edge of a life. Oil and blood on clothes that will outlive Aaron. Ministry starts as something done to you, not something you feel ready for."
    },
    {
      "title": "That I May Dwell Among Them",
      "icon": "⛺",
      "body": "Morning lamb, evening lamb, forever, at the door where God meets and speaks. The daily grind is the dwelling-plan. Glory will sanctify the house. The house is for knowing the Name."
    }
  ],
  "wordStudies": [
    {
      "word": "Consecrate",
      "orig": "Hebrew: mille’ yad — ‘fill the hand’",
      "meaning": "29:9, 33. Installation is a filled hand, not a mood. The ram of filling is how a priest is put to work."
    },
    {
      "word": "Continually",
      "orig": "Hebrew: tamid",
      "meaning": "29:38, 42. The daily pair of lambs. Presence has a timetable."
    }
  ],
  "doctrinal": "Teacher-only: 29:45–46 is the doctrinal peak of the instructions. I will preach dwelling as the reason for the plagues, the sea, and the mountain. The sin-offering burned outside the camp is a line Hebrews is allowed to pick up. Do not rush to Hebrews until ear, thumb, and toe have been felt as a man’s body being claimed.",
  "story": {
    "scene": "Water on priests. Oil on a head. A bullock dying at a door. Blood on an ear. Two lambs every day the sun will come up. A sentence: I brought you out to live here with you.",
    "modern": "Being marked for a work you will do with your hearing and your hands and your walk — and a God whose endgame was never only the exit."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "Daily lambs as shadow waiting for one offering",
      "body": "Hebrews 10: the repeating is the point, and the limit. Strength: 29:38–42’s ‘throughout your generations.’ Cost: do not despise the morning that actually kept the camp in fellowship."
    },
    {
      "name": "Daily lambs as Israel’s real meeting-place",
      "body": "This is how God said he would meet them. Strength: 29:42–43. Cost: later Scripture will still call the system forward to a better priest."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 30 — Altar of Incense, Census Silver, Laver, Oil, and Spice",
  "chNum": "30",
  "points": [
    "30:1–10 — An altar to burn incense: shittim wood, a cubit by a cubit, two high, horns, gold, staves. Set it before the veil that is by the ark of the testimony, before the mercy seat. Aaron shall burn sweet incense every morning when he dresses the lamps, and at even. A perpetual incense before the LORD. No strange incense, no burnt sacrifice, no meat offering, no drink offering on it. Once in the year Aaron shall make atonement upon the horns with the blood of the sin offering of atonements.",
    "30:11–16 — When thou takest the sum of the children of Israel, every one shall give a ransom for his soul unto the LORD, that there be no plague among them. Half a shekel after the shekel of the sanctuary — an half shekel shall be the offering of the LORD. The rich shall not give more, the poor shall not give less. Appointed for the service of the tabernacle; a memorial for the children of Israel before the LORD, to make an atonement for your souls.",
    "30:17–38 — A laver of brass, and his foot, between the tent and the altar; water to wash. Aaron and his sons shall wash their hands and their feet when they go into the tent and when they come near the altar to minister, that they die not. A statute for ever. Holy anointing oil: myrrh, sweet cinnamon, calamus, cassia, olive oil. Anoint the tent, the ark, the table, the candlestick, the incense altar, the brass altar, the laver, Aaron and his sons. It is holy, and shall be holy unto you. Upon man’s flesh shall it not be poured; neither shall ye make any other like it. Perfume of spices, beaten small, put before the testimony. Whosoever shall make like unto that, to smell thereto, shall even be cut off."
  ],
  "refs": [
    "Psalm 141:2 — let my prayer be set forth before thee as incense.",
    "Luke 1:8–11 — Zacharias at the hour of incense; a people praying outside.",
    "Revelation 5:8; 8:3–4 — bowls of incense, which are the prayers of saints.",
    "Matthew 17:24–27 — the temple half-shekel still collected in Jesus’ day. He pays it with a fish’s coin."
  ],
  "hist": [
    "Equal half-shekel is one of the Torah’s clearest anti-class statements in worship finance. Soul-ransom is flat. The memorial is not a prestige gift.",
    "Washing hands and feet ‘that they die not’ keeps the same severity as the bells. Nearness has hygiene because nearness is real."
  ],
  "opens": [
    "Why is prayer-incense not allowed to become a barbecue?",
    "What does a flat half-shekel teach a rich man and a poor man standing in the same line?"
  ],
  "topics": [
    {
      "title": "Perpetual Incense",
      "icon": "💨",
      "body": "Morning lamps, evening lamps, smoke in between. The closest furniture to the veil is not another slaughter-place. It is fragrance on a schedule."
    },
    {
      "title": "No More, No Less",
      "icon": "🪙",
      "body": "Half a shekel each. Ransom that will not let money become a ranking. The plague-warning means census without ransom is dangerous — 2 Samuel 24 will remember a version of that lesson."
    }
  ],
  "wordStudies": [
    {
      "word": "Ransom",
      "orig": "Hebrew: kopher",
      "meaning": "30:12. Cover-price for a life. Related to atonement (kippur). Counting heads is not a neutral act in this book."
    },
    {
      "word": "Strange incense",
      "orig": "Hebrew: qetoret zarah",
      "meaning": "30:9. Unauthorized smoke. Nadab and Abihu will die on this principle (Leviticus 10)."
    }
  ],
  "doctrinal": "Teacher-only: Incense as prayer is a biblical reading (Psalm 141; Revelation 8) I will allow after the altar is built in the story. The half-shekel is atonement-memorial, not a temple tax joke; Matthew 17 shows it still in force in the Second Temple. Holy oil and perfume that may not be copied are how the book keeps holy things from becoming brand products.",
  "story": {
    "scene": "Gold horns with a thin line of blood once a year. Smoke at dawn and dusk. A poor man and a rich man dropping the same coin. A basin between tent and fire. A smell you are not allowed to bottle for the house.",
    "modern": "Prayer on a clock, giving that will not let you buy rank, and a holiness that refuses to be merch."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "Census silver as worship equality",
      "body": "The point is the flat ransom. Strength: 30:15. Cost: later temple practice can still warp it."
    },
    {
      "name": "Census silver as danger-management",
      "body": "Count a host without covering and plague follows. Strength: 30:12; 2 Samuel 24. Cost: do not make God allergic to numbers; make him jealous of un-atoned pride."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 31 — Bezalel Filled, and Sabbath as Sign",
  "chNum": "31",
  "points": [
    "31:1–11 — See, I have called by name Bezalel the son of Uri, the son of Hur, of the tribe of Judah. I have filled him with the spirit of God, in wisdom, and in understanding, and in knowledge, and in all manner of workmanship, to devise cunning works, to work in gold, silver, brass, stone, timber. I have given with him Aholiab of the tribe of Dan. In the hearts of all that are wise hearted I have put wisdom, that they may make all that I have commanded: tent, ark, mercy seat, furniture, garments, oil, incense. The Spirit’s first named filling in Scripture is for a craftsman, not for a preacher.",
    "31:12–18 — Verily my sabbaths ye shall keep: for it is a sign between me and you throughout your generations; that ye may know that I am the LORD that doth sanctify you. Six days may work be done; the seventh is the sabbath of rest, holy to the LORD: whosoever doeth any work in the sabbath day, he shall surely be put to death. Wherefore the children of Israel shall keep the sabbath, to observe the sabbath throughout their generations, for a perpetual covenant. It is a sign between me and the children of Israel for ever: for in six days the LORD made heaven and earth, and on the seventh day he rested, and was refreshed. He gives unto Moses, when he had made an end of communing with him upon mount Sinai, two tables of testimony, tables of stone, written with the finger of God."
  ],
  "refs": [
    "Exodus 35:30–35 — Bezalel and Aholiab named again when the work starts.",
    "Colossians 2:16–17 — sabbath as a shadow of things to come. A later chair; keep 31’s own sign-language first.",
    "Ezekiel 20:12, 20 — sabbaths given as a sign, that they might know I am the LORD that sanctify them.",
    "2 Corinthians 3:3, 7 — written not with ink, but with the Spirit; the ministration of death written and engraven in stones."
  ],
  "hist": [
    "Judah and Dan stand together at the bench — later the tribes will not always stand together. Here craft unites them under a filling.",
    "Sabbath-sign is attached to the building command on purpose. Even the sanctuary may not eat the seventh day. Holy work is still work that must stop."
  ],
  "opens": [
    "What changes if the Spirit’s first named filling is for making, not for speaking?",
    "Why hang a death-sentence sabbath-sign on the end of a blueprint for a tent of mercy?"
  ],
  "topics": [
    {
      "title": "Filled Him with the Spirit of God",
      "icon": "🛠️",
      "body": "Wisdom, understanding, knowledge, workmanship. Gold and wood. The God who spoke a world now fills a Judahite to make a room he will enter."
    },
    {
      "title": "A Sign Between Me and You",
      "icon": "✍️",
      "body": "Sabbath here is not a productivity hack. It is how Israel knows the Sanctifier. The finger of God writes stone while the mouth of God names rest."
    }
  ],
  "wordStudies": [
    {
      "word": "Filled with the Spirit",
      "orig": "Hebrew: male’ti oto ruach elohim",
      "meaning": "31:3. First explicit Spirit-filling in the Torah’s narrative. The content is skill."
    },
    {
      "word": "Sign",
      "orig": "Hebrew: ’ot",
      "meaning": "31:13, 17. Same word as the plagues’ signs and the blood-token on the door. Sabbath is a standing sign, not a one-night mark."
    }
  ],
  "doctrinal": "Teacher-only: I read Bezalel’s filling as true pneumatology — God the Spirit equipping a maker. I will not treat crafts as secular leftovers. On sabbath-as-sign I will say 31:13 names Israel as the partner of the sign, and 20:11 still hangs the day on creation. I will not run a death-penalty court from 31:15 in a church session; I will also not pretend the sentence was decoration. Tables written with the finger of God close the forty days and open the disaster of 32.",
  "story": {
    "scene": "A named craftsman from Judah, a partner from Dan, skill poured in. A warning that even sanctuary-work must clock out. Two stones coming down a mountain with a finger’s writing on them.",
    "modern": "Holy work that still has to stop, and a Spirit who cares how a hinge is made."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "Sabbath sign as Israel-specific covenant mark",
      "body": "31:13, 17 say ‘between me and the children of Israel.’ Strength: the wording. Cost: creation-grounding in the same paragraph still has to be read."
    },
    {
      "name": "Sabbath sign as creation-rest given to a people",
      "body": "The seventh day of Genesis 2 becomes Israel’s badge. Strength: 31:17. Cost: later church practice must be argued from new-covenant texts, not from silence."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 32 — A Calf, Broken Stones, and a Man Who Stands in the Breach",
  "chNum": "32",
  "points": [
    "32:1–6 — When the people see that Moses delays to come down, they gather unto Aaron: Up, make us gods, which shall go before us; as for this Moses, the man that brought us up, we wot not what is become of him. Aaron: break off the golden earrings. He fashions it with a graving tool; they have a molten calf. These be thy gods, O Israel, which brought thee up out of the land of Egypt. Aaron builds an altar, proclaims a feast to the LORD tomorrow. They rise early, offer burnt offerings and peace offerings, sit down to eat and drink, and rise up to play. The jewelry of the exodus becomes a god with a feast-name still on it.",
    "32:7–14 — The LORD to Moses: Go, get thee down; thy people, which thou broughtest out of Egypt, have corrupted themselves. They have turned aside quickly. I have seen this people; it is a stiffnecked people. Now therefore let me alone, that my wrath may wax hot, that I may consume them: and I will make of thee a great nation. Moses besought the LORD his God: LORD, why doth thy wrath wax hot against thy people, which thou hast brought forth? Wherefore should the Egyptians say, For mischief did he bring them out, to slay them in the mountains? Turn from thy fierce wrath. Remember Abraham, Isaac, and Israel, to whom thou swarest by thine own self. The LORD repented of the evil which he thought to do unto his people.",
    "32:15–29 — Moses comes down with the two tables, writing on both sides, the work of God, the writing of God. Joshua hears noise of the people as they shout: not the voice of them that shout for mastery, neither the voice of them that cry for being overcome — the noise of them that sing. Moses sees the calf and the dancing. His anger waxes hot; he casts the tables out of his hands and breaks them beneath the mount. He takes the calf, burns it, grinds it to powder, strews it on the water, makes the children of Israel drink. Aaron: thou knowest the people, that they are set on mischief. They said, Make us gods. I cast the gold into the fire, and there came out this calf. Who is on the LORD’s side? Let him come unto me. The sons of Levi gather. Put every man his sword by his side; slay every man his brother, companion, neighbour. Three thousand fall. Consecrate yourselves today to the LORD, that he may bestow upon you a blessing.",
    "32:30–35 — On the morrow Moses: ye have sinned a great sin. I will go up; peradventure I shall make an atonement. Moses: Oh, this people have sinned a great sin, and have made them gods of gold. Yet now, if thou wilt forgive their sin—; and if not, blot me, I pray thee, out of thy book which thou hast written. Whosoever hath sinned against me, him will I blot out of my book. Go, lead the people. Mine Angel shall go before thee. In the day when I visit I will visit their sin upon them. The LORD plagues the people, because they made the calf which Aaron made."
  ],
  "refs": [
    "Deuteronomy 9:8–21 — Moses retells the calf and the forty days of falling down before the LORD.",
    "Psalm 106:19–23 — they made a calf in Horeb; he said he would destroy them, had not Moses his chosen stood before him in the breach.",
    "1 Corinthians 10:7 — neither be ye idolaters, as were some of them; as it is written, The people sat down to eat and drink, and rose up to play.",
    "Romans 9:3 — I could wish that myself were accursed from Christ for my brethren. Paul knows 32:32’s shape.",
    "Acts 7:39–41 — Stephen: in their hearts they turned back into Egypt and made a calf."
  ],
  "hist": [
    "A bull-calf is a known divine-stand-in in the wider world (and later at Bethel and Dan, 1 Kings 12). Aaron tries to keep the feast ‘to the LORD’ while handing the camp a statue. That mix is the crime, not only the metal.",
    "Levi’s sword is how the tribe that will carry holy things is marked in blood. Later blessing (Deuteronomy 33:8–11) will remember they said of father and mother, I have not seen him."
  ],
  "opens": [
    "Aaron says ‘there came out this calf.’ What do we do with a leader’s lie that makes idolatry sound like an accident?",
    "Moses offers to be blotted out. Is that allowed? Does God take the offer?"
  ],
  "topics": [
    {
      "title": "These Be Thy Gods",
      "icon": "🐮",
      "body": "The delay becomes a vacuum. The vacuum gets a statue. The statue gets the exodus credited to it and a feast in the LORD’s name. Idolatry here is not atheism. It is rescue with a face you can manage."
    },
    {
      "title": "Blot Me Out",
      "icon": "📖",
      "body": "Moses will not take ‘thy people’ from God’s mouth without pushing the pronoun back. He argues Egypt’s mockery and the fathers’ oath. Then he puts his own name on the line. God will not blot Moses. He also will not pretend the sin was small."
    }
  ],
  "wordStudies": [
    {
      "word": "Stiffnecked",
      "orig": "Hebrew: qesheh-oreph",
      "meaning": "32:9. Hard of neck — an ox that will not take the yoke. The book’s name for Israel in revolt."
    },
    {
      "word": "Repented",
      "orig": "Hebrew: nacham",
      "meaning": "32:14. Relent, be moved to pity. Not ‘God learned new facts.’ The verb is how Scripture says prayer landed inside a threatened judgment."
    },
    {
      "word": "Play",
      "orig": "Hebrew: tsacheq",
      "meaning": "32:6. Laugh, sport. Same root as Isaac’s name. Paul hears idol-revel in it."
    }
  ],
  "doctrinal": "Teacher-only: I read the calf as real apostasy in a blood-covenanted camp, not as a charming folk-festival. Aaron is guilty; ‘it just came out’ is not accepted. I read 32:14 as true relenting in response to intercession, without turning God into a weather vane. Moses’ blot-me is the high-water mark of human mediation in the Torah; God refuses the swap and keeps both justice and the man. Levi’s sword is severe; I will not cute it up, and I will not use it as a template for later zeal without a word as clear as 32:27.",
  "story": {
    "scene": "Earrings in a fire. A feast with the wrong center. Stone written by a finger, smashed at the foot of the hill. Powder in a drink. A brother-tribe with swords. A man on the mountain saying, if not, blot me out.",
    "modern": "Making a manageable god when the mediator is late — and discovering someone is still willing to lose his own name for you."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "The calf as a pedestal for YHWH",
      "body": "Aaron meant the LORD, not a rival brand; the bull was a stand. Strength: ‘a feast to the LORD.’ Cost: 32:8 and the first two words of chapter 20 will not accept a stand-in."
    },
    {
      "name": "The calf as a rival god",
      "body": "‘These be thy gods which brought thee up.’ Strength: the plural and the exodus-theft. Cost: the feast-name still has to be explained as cover or confusion."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 33 — Outside the Camp, and Show Me Thy Glory",
  "chNum": "33",
  "points": [
    "33:1–6 — Depart, go up hence, thou and the people which thou hast brought up. I will send an Angel before thee. I will drive out the nations. Unto a land flowing with milk and honey: for I will not go up in the midst of thee; for thou art a stiffnecked people: lest I consume thee in the way. When the people hear these evil tidings, they mourn. No ornaments. The LORD: say unto the children of Israel, Ye are a stiffnecked people: I will come up into the midst of thee in a moment, and consume thee: therefore now put off thy ornaments from thee, that I may know what to do unto thee. They strip themselves of their ornaments by the mount Horeb.",
    "33:7–11 — Moses takes the tabernacle and pitches it without the camp, afar off. Everyone which sought the LORD went out unto the tabernacle of the congregation, which was without the camp. When Moses goes out, the people rise and stand, every man at his tent door, until he be gone in. The cloudy pillar descends and stands at the door; the LORD talks with Moses. All the people rise and worship, every man in his tent door. The LORD speaks unto Moses face to face, as a man speaketh unto his friend. Joshua, a young man, departs not out of the tabernacle.",
    "33:12–23 — Moses: thou hast not let me know whom thou wilt send with me. Yet thou hast said, I know thee by name, and thou hast also found grace in my sight. If I have found grace, shew me now thy way, that I may know thee. Separate us from all the people that are upon the face of the earth. I will do this thing also that thou hast spoken: for thou hast found grace in my sight, and I know thee by name. Moses: I beseech thee, shew me thy glory. I will make all my goodness pass before thee, and I will proclaim the name of the LORD before thee; I will be gracious to whom I will be gracious, and will shew mercy on whom I will shew mercy. Thou canst not see my face: for there shall no man see me, and live. There is a place by me; thou shalt stand upon a rock. It shall come to pass, while my glory passeth by, that I will put thee in a clift of the rock, and will cover thee with my hand while I pass by. I will take away mine hand, and thou shalt see my back parts: but my face shall not be seen."
  ],
  "refs": [
    "Hebrews 13:13 — let us go forth therefore unto him without the camp, bearing his reproach. 33:7 is the geography under that verse.",
    "Numbers 12:8 — with him will I speak mouth to mouth. Deuteronomy 34:10 — whom the LORD knew face to face.",
    "John 1:14–18 — we beheld his glory; no man hath seen God at any time; the only begotten hath declared him.",
    "Romans 9:15 — I will have mercy on whom I will have mercy. Paul quotes 33:19 as the freedom of mercy.",
    "1 Kings 19:11–13 — Elijah later stands in a cleft-like scene. The rock-and-passing God is not done."
  ],
  "hist": [
    "The tent pitched outside is not yet the patterned sanctuary of 25–31. It is a provisional meeting-place after a broken covenant. Presence has moved to the margin because the camp is unclean.",
    "Ornaments off at Horeb is the undoing of 32:2–3. The same ears that funded a calf now stand bare."
  ],
  "opens": [
    "Would you take the land with an angel and no Presence in the midst?",
    "Moses asks for glory and is promised goodness and a Name. What is the difference?"
  ],
  "topics": [
    {
      "title": "I Will Not Go Up in the Midst",
      "icon": "🚪",
      "body": "The worst sentence since midnight in Egypt. Land without nearness is, for Moses, not salvation. The people mourn because they still know enough to know what they would lose."
    },
    {
      "title": "A Clift of the Rock",
      "icon": "🪨",
      "body": "Face to face as a friend — and no one sees the face and lives. Both sentences stay. Glory will pass. A hand will cover. The back will be seen. Goodness and the Name are what a man can survive."
    }
  ],
  "wordStudies": [
    {
      "word": "Face to face",
      "orig": "Hebrew: panim el-panim",
      "meaning": "33:11. Direct speech, friend-speech. 33:20 will still forbid seeing the face. The book holds intimacy and limit in one chapter."
    },
    {
      "word": "Glory",
      "orig": "Hebrew: kavod",
      "meaning": "33:18, 22. Moses asks for the weight. God answers with goodness, Name, and a passing."
    }
  ],
  "doctrinal": "Teacher-only: I read ‘I will not go up in the midst’ as a real threat that would have kept the promise of land and gutted the point of 29:45–46. Moses’ refusal of a bare angel is the right instinct. Face-to-face and no-one-sees-my-face are not a contradiction to flatten; they are two kinds of ‘see.’ John 1:18 is allowed to sit on 33:20 after Moses has been heard. Romans 9 is allowed to sit on 33:19 after mercy has been heard as a Name-proclamation, not only as a system.",
  "story": {
    "scene": "Jewelry in a pile. A tent outside the rows. A door-cloud. A friend talking. A man asking to see. A rock with a slit in it, a hand over a pair of eyes, a goodness going by.",
    "modern": "Refusing the gift that has everything except the Giver — and asking, at the risk of death, to see more."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "Face to face as metaphor for clarity",
      "body": "Not ocular vision; unmatched communication. Strength: 33:20. Cost: 24:10 and 33:11 want more than a metaphor."
    },
    {
      "name": "Face to face as real meeting under a veil",
      "body": "Something is seen, and something is withheld. Strength: the cleft, the hand, the back. Cost: you must still say ‘no man sees me and lives’ without blinking."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 34 — Name in the Cleft, New Stones, and a Shining Face",
  "chNum": "34",
  "points": [
    "34:1–9 — Hew thee two tables of stone like unto the first: I will write upon these tables the words that were in the first tables, which thou brakest. Be ready in the morning, come up, present thyself there to me in the top of the mount. No man with thee; no flocks nor herds. The LORD descends in the cloud, stands with him there, and proclaims the name of the LORD. The LORD, The LORD God, merciful and gracious, longsuffering, and abundant in goodness and truth, keeping mercy for thousands, forgiving iniquity and transgression and sin, and that will by no means clear the guilty; visiting the iniquity of the fathers upon the children, and upon the children’s children, unto the third and to the fourth generation. Moses makes haste, bows, worships. If now I have found grace in thy sight, O Lord, let my Lord, I pray thee, go among us; for it is a stiffnecked people; pardon our iniquity and our sin, and take us for thine inheritance.",
    "34:10–28 — Behold, I make a covenant. Before all thy people I will do marvels. Observe that which I command thee this day. Drive out the nations. No covenant with the inhabitants. Break their images, cut down their groves. No other god: the LORD whose name is Jealous is a jealous God. No molten gods. Feast of unleavened bread. Firstlings mine; the ass redeemed with a lamb; firstborn sons redeemed. Six days work, seventh rest. Weeks, firstfruits, ingathering. Three times in the year all males appear before the Lord GOD, the God of Israel. No leaven with sacrifice; no leftover passover till morning. First of the firstfruits. Not seethe a kid in his mother’s milk. The LORD says: Write thou these words: for after the tenor of these words I have made a covenant with thee and with Israel. He is there with the LORD forty days and forty nights; he neither eats bread nor drinks water. He writes upon the tables the words of the covenant, the ten commandments.",
    "34:29–35 — When Moses comes down with the two tables, he wist not that the skin of his face shone while he talked with him. Aaron and the children of Israel are afraid to come nigh. Moses calls them; Aaron and the rulers return; he talks. Afterward all the children of Israel come near; he gives them in commandment all that the LORD had spoken. Till Moses had done speaking with them, he puts a vail on his face. When Moses goes in before the LORD to speak with him, he takes the vail off, until he comes out. He comes out and speaks to Israel that which he was commanded. The children of Israel see the face of Moses, that the skin of Moses’ face shone: and Moses puts the vail upon his face again, until he goes in to speak with him."
  ],
  "refs": [
    "Numbers 14:17–19 — Moses will quote 34:6–7 back to God after the spy rebellion. The Name becomes his argument.",
    "Joel 2:13; Jonah 4:2; Psalm 103:8; Nehemiah 9:17 — the later canon cannot stop citing this sentence.",
    "Micah 7:18–19 — who is a God like unto thee, that pardoneth iniquity.",
    "2 Corinthians 3:7–18 — the glory of Moses’ face, the veil, and a greater glory in Christ. Paul reads this ending at length.",
    "John 1:14 — glory, full of grace and truth. 34:6’s pair in another register."
  ],
  "hist": [
    "34:6–7 is the most reused self-description of God in the Old Testament. After a calf, this is what he says his Name means.",
    "A second forty days without bread or water is the remaking of a covenant that was already cut in blood and already smashed in stone."
  ],
  "opens": [
    "How can ‘forgiving iniquity’ and ‘will by no means clear the guilty’ live in one Name?",
    "Moses uses ‘stiffnecked’ as a reason God should stay. What kind of prayer is that?"
  ],
  "topics": [
    {
      "title": "The LORD, The LORD",
      "icon": "📛",
      "body": "Merciful, gracious, slow to anger, abundant in goodness and truth, keeping mercy for thousands, forgiving — and not clearing the guilty. The calf-camp is told both halves. A God of only half this sentence would be easier. He would also be someone else."
    },
    {
      "title": "A Face That Shone",
      "icon": "☀️",
      "body": "He does not know he is shining. The camp is afraid of the borrowed weight on a man’s skin. Veil on for them, veil off for God. Paul will spend a chapter on that rhythm. Teach the skin first."
    }
  ],
  "wordStudies": [
    {
      "word": "Merciful and gracious",
      "orig": "Hebrew: rachum vechannun",
      "meaning": "34:6. Womb-compassion and gift-favor. The Name after betrayal is not thinner. It is thicker."
    },
    {
      "word": "Goodness and truth",
      "orig": "Hebrew: chesed ve’emet",
      "meaning": "34:6. Covenant love and reliability. John’s ‘grace and truth’ is not a new invention out of nowhere."
    },
    {
      "word": "Shone",
      "orig": "Hebrew: qaran",
      "meaning": "34:29. To send out rays. The Latin tradition that heard ‘horns’ is a famous mistrack; the point is radiance."
    }
  ],
  "doctrinal": "Teacher-only: 34:6–7 is the center of how I will let this book name God after failure. I will not resolve ‘forgives’ and ‘will not clear’ by deleting a clause. The rest of Scripture will put that tension on a substitute in due time; Exodus puts it in a Name spoken over a guilty camp. I read the second tables as true renewal, not as a downgrade covenant. Paul may preach the fading glory; I will not use 2 Corinthians 3 to sneer at Moses’ face.",
  "story": {
    "scene": "A man alone on a cut rock at dawn. A cloud. A Name with two edges. New stones. Forty more days. A veil because a face has been too near a fire.",
    "modern": "Being told who God is after you have already smashed what he wrote — and finding the mercy longer than the judgment, and the judgment still in the sentence."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "34:6–7 as the Old Testament gospel",
      "body": "This is God’s own mouth after sin. Strength: the reuse across the canon. Cost: the ‘will not clear’ clause must stay in the gospel, not be edited out."
    },
    {
      "name": "34 as a lesser covenant of law after grace failed",
      "body": "Some hear a sterner rewrite. Strength: the jealous-name and the repeated bans. Cost: 34:6 is more mercy-speech than 20 was, not less."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 35 — Sabbath Again, and Willing Hearts Overflow",
  "chNum": "35",
  "points": [
    "35:1–3 — Moses gathers all the congregation. These are the words which the LORD hath commanded. Six days shall work be done, but on the seventh day there shall be to you an holy day, a sabbath of rest to the LORD: whosoever doeth work therein shall be put to death. Ye shall kindle no fire throughout your habitations upon the sabbath day. The building chapters open with rest. The house of God will not be built by eating the seventh day.",
    "35:4–19 — Take from among you an offering unto the LORD: whosoever is of a willing heart, let him bring it. Gold, silver, brass, colors, linen, skins, wood, oil, spices, stones. Every wise hearted among you shall come and make all that the LORD hath commanded — the list of 25–31 now spoken as a work-order to the camp.",
    "35:20–35 — The congregation departs. They come, every one whose heart stirred him up, and every one whom his spirit made willing. Men and women. Bracelets, earrings, rings, tablets, jewels of gold. Blue, purple, scarlet, linen, goats’ hair. Silver, brass. Acacia. Stones for the ephod and breastplate. Women whose heart stirred them up in wisdom spin. Rulers bring onyx and spice. The children of Israel bring a willing offering unto the LORD, every man and woman whose heart made them willing. The LORD has called by name Bezalel of Judah, filled him with the spirit of God in wisdom, understanding, knowledge, workmanship. He has put in his heart that he may teach, both he and Aholiab of Dan. Them hath he filled with wisdom of heart, to work all manner of work."
  ],
  "refs": [
    "2 Corinthians 9:7 — every man according as he purposeth in his heart, not grudgingly, or of necessity. 35 is the old version of that sentence in jewelry and thread.",
    "1 Chronicles 29:9 — the people rejoiced, for that they offered willingly.",
    "Exodus 31:1–6 — the filling named before the calf. 35 names it again after pardon, as the work finally starts."
  ],
  "hist": [
    "No fire in the dwellings on sabbath is a camp-specific fence around rest. The sanctuary project is not an exemption clause.",
    "Earrings funded a calf in 32. Earrings fund a sanctuary in 35. Same metal. Different heart. The book wants you to notice the rhyme."
  ],
  "opens": [
    "Why start the construction speech with a death-sentence about rest?",
    "What would have to happen in a room for giving to look like 35:21–29?"
  ],
  "topics": [
    {
      "title": "Whose Heart Stirred Him Up",
      "icon": "💛",
      "body": "Willing is the chapter’s drum. Men, women, rulers, spinners. The Spirit fills named craftsmen and also ‘all that are wise hearted.’ The calf took gold by demand. The tent takes gold by stirring."
    },
    {
      "title": "He May Teach",
      "icon": "👷",
      "body": "Bezalel is not only skilled. He is given a heart to teach. Aholiab with him. Holy making is a school, not a solo genius act."
    }
  ],
  "wordStudies": [
    {
      "word": "Willing heart",
      "orig": "Hebrew: nediv libbo",
      "meaning": "35:5, 22, 29. A free, noble, volunteer heart. Freewill is the funding model."
    },
    {
      "word": "Stirred",
      "orig": "Hebrew: nasa’ / nadav (heart lifted / made willing)",
      "meaning": "35:21, 26. Something rose in them. The narrator credits the rise, not a tax."
    }
  ],
  "doctrinal": "Teacher-only: I read 35 as the firstfruits of 34’s pardon — a camp that can give again. I will not use the sabbath-death line as a church penalty; I will use it to say holy projects do not outrank holy rest. Willing offering is how I teach stewardship from this book: not Egypt-spoil guilt, but stirred hearts after mercy.",
  "story": {
    "scene": "A rest-command before a single board is cut. Then a pile growing in a yard: earrings, goats’ hair, onyx, spun thread, a Judahite and a Danite standing up as teachers.",
    "modern": "The difference between gold demanded for a god you can see and gold carried, unasked, toward a room you may never enter."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "35 as simple obedience after renewal",
      "body": "They finally do what 25 said. Strength: the repeated lists. Cost: the willing-heart language is more than ‘they complied.’"
    },
    {
      "name": "35 as the anti-calf",
      "body": "Same gold, opposite worship. Strength: 32:2–4 next to 35:22. Cost: do not reduce the sanctuary to a rebound project."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 36 — Too Much, and the Tent Goes Up in Skill",
  "chNum": "36",
  "points": [
    "36:1–7 — Then wrought Bezalel and Aholiab, and every wise hearted man, in whom the LORD put wisdom and understanding to know how to work all manner of work for the service of the sanctuary, according to all that the LORD had commanded. Moses calls them. They receive of Moses all the offering. They bring yet unto him free offerings every morning. The wise men who do the work say unto Moses, The people bring much more than enough. Moses commands, and they cause it to be proclaimed throughout the camp: Let neither man nor woman make any more work for the offering of the sanctuary. So the people are restrained from bringing. For the stuff they had was sufficient for all the work to make it, and too much.",
    "36:8–38 — Every wise hearted man among them that wrought the work of the tabernacle makes ten curtains of linen, blue, purple, scarlet, cherubim, fifty loops, fifty taches of gold. Eleven goats’-hair curtains, taches of brass. Rams’ skins, badgers’ skins. Boards of shittim wood, sockets of silver — a hundred sockets for the boards. Bars, rings, overlay of gold. The veil of blue, purple, scarlet, linen, cherubim, four pillars, hooks of gold, sockets of silver. A hanging for the door, five pillars, chapiters and fillets overlaid with gold, sockets of brass. The pattern of 26 is no longer speech. It is cloth in a craftsman’s hands."
  ],
  "refs": [
    "1 Chronicles 29:16 — all this store cometh of thine hand, and is all thine own.",
    "2 Corinthians 8:11–15 — a readiness to will, an equality; he that gathered much had nothing over. Exodus 16’s omer and 36’s ‘too much’ are cousins.",
    "Exodus 26:1–33 — the instructions now executed almost word for word. Repetition is the point: they built what they were shown."
  ],
  "hist": [
    "‘Too much’ is a rare sentence in sacred fundraising. The restraint is as holy as the giving. Leadership here includes knowing when to shut the gate.",
    "Silver sockets as the foundation (from the census metal in 38:25–27) mean the house stands on ransom-silver."
  ],
  "opens": [
    "When was the last time a holy project said ‘stop, we have too much’?",
    "Why does the book spend so many verses repeating 26 almost line for line?"
  ],
  "topics": [
    {
      "title": "More Than Enough",
      "icon": "📦",
      "body": "Morning after morning they keep coming. The makers have to ask Moses to make it stop. Abundance after a calf is not a rounding error. It is a people who have seen 34:6."
    },
    {
      "title": "According to All That the LORD Commanded",
      "icon": "📐",
      "body": "The refrain of 36–39 starts here. Creativity is inside the pattern, not against it. Wisdom is how you obey a blueprint, not how you improve it."
    }
  ],
  "wordStudies": [
    {
      "word": "Too much",
      "orig": "Hebrew: hother",
      "meaning": "36:7. Surplus. The only surplus the book wants is the one that has to be restrained."
    },
    {
      "word": "Taches",
      "orig": "Hebrew: qerasim",
      "meaning": "36:13, 18. Clasps that turn many curtains into one house. Unity is hardware."
    }
  ],
  "doctrinal": "Teacher-only: I read the almost-verbatim building as theology, not as a tired editor. What was shown is what was made. That is how you know chapter 40’s glory is landing on the thing God asked for, not on a committee redesign. ‘Too much’ is permitted as a discipleship picture; I will not use it to scold every modern budget that still has a need.",
  "story": {
    "scene": "A work-yard at dawn, arms full again. A foreman walking to Moses. A proclamation: enough. Then loops and clasps pulling separate cloths into one room.",
    "modern": "Generosity that has to be told to stand down, and skill that is proud to copy."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "Repetition as fidelity",
      "body": "They built the pattern. Strength: ‘as the LORD commanded’ through 39. Cost: modern readers get bored; teach them why."
    },
    {
      "name": "Repetition as later priestly inventory",
      "body": "A list-culture writing it twice. Strength: the inventory feel of 38–39. Cost: you still have to preach the camp that gave too much."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 37 — Ark, Table, Lamp, Incense: The Inner Gold",
  "chNum": "37",
  "points": [
    "37:1–9 — Bezalel makes the ark of shittim wood, overlays it with gold, casts four rings, puts in the staves. He makes the mercy seat of pure gold, two cherubim of beaten gold out of the two ends, wings on high, covering the mercy seat, faces one to another, toward the mercy seat. The meeting-place exists now as an object in a yard.",
    "37:10–28 — The table, its dishes and spoons and bowls of pure gold. The candlestick of pure gold, beaten work, six branches, almonds, knops, flowers, seven lamps, tongs, snuffdishes — a talent of pure gold. The incense altar, gold, horns, staves. The holy anointing oil and the pure incense of sweet spices, according to the work of the apothecary.",
    "37:29 — Oil and incense named at the close so the inner room will have fire-smell and consecration, not only furniture."
  ],
  "refs": [
    "Hebrews 9:4–5 — ark, pot of manna, tables, rod, cherubim of glory shadowing the mercy seat. The later writer is looking at this workshop.",
    "Psalm 80:1 — thou that dwellest between the cherubim, shine forth.",
    "Revelation 8:3 — another angel with a golden censer at the golden altar."
  ],
  "hist": [
    "Beaten work (not cast in pieces and soldered as the main form) is how the cherubim and lamp are described. The gold is persuaded into wings and almond-flowers, not assembled like a toy.",
    "A talent of gold for the lampstand is a fortune standing in the holy place to keep seven flames."
  ],
  "opens": [
    "The cherubim look at the lid, not at the camp. What does that say about what holiness is for?",
    "Why name Bezalel at the ark when a whole crew is working?"
  ],
  "topics": [
    {
      "title": "Beaten Gold",
      "icon": "🕊️",
      "body": "Wings that came from hammering. The guardians of Eden now lean inward over mercy. The most expensive quiet in the book is a lid."
    },
    {
      "title": "Almonds in the Lamp",
      "icon": "🌸",
      "body": "A tree of light in gold. Jeremiah will later see an almond as a watching-tree (Jeremiah 1:11–12). Here the watching is seven flames that must be dressed every day."
    }
  ],
  "wordStudies": [
    {
      "word": "Beaten work",
      "orig": "Hebrew: miqshah",
      "meaning": "37:7, 17, 22. Hammered from a mass. One piece persuaded into glory."
    },
    {
      "word": "Apothecary",
      "orig": "Hebrew: roqeach",
      "meaning": "37:29. Mixer of sacred scent. Holiness has a recipe, and it is not to be freelanced (30:37–38)."
    }
  ],
  "doctrinal": "Teacher-only: I linger on the mercy seat being made — not only commanded — because 40 will put glory over a real lid. Typology toward propitiation is fair after the gold has weight in the story. Bezalel named at the ark keeps Spirit-filled craft attached to the holiest object, not only to the court tools.",
  "story": {
    "scene": "A wooden box disappearing under gold. A lid with two faces bent toward it. A gold tree with seven cups. A small altar that will only ever hold smoke.",
    "modern": "Spending the best you have on a room whose point is a meeting you will not personally sit in."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "Inner furniture as teaching tools",
      "body": "Every piece a doctrine: law, mercy, bread, light, prayer. Strength: the later readings. Cost: they were also tools that had to be carried and oiled."
    },
    {
      "name": "Inner furniture as working gear",
      "body": "A box, a table, a lamp, a grate for spice. Strength: the workshop verbs. Cost: Hebrews will not let you stop at gear."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 38 — Bronze, Silver Count, and a Court That Can Be Entered",
  "chNum": "38",
  "points": [
    "38:1–20 — Bezalel makes the altar of burnt offering of shittim wood, horns, brass overlay, vessels of brass, grate, rings, staves. The laver of brass and its foot of brass, of the lookingglasses of the women assembling, which assembled at the door of the tabernacle of the congregation. The court hangings, pillars, sockets of brass, hooks and fillets of silver, the embroidered gate. Pins of brass for the tabernacle and for the court.",
    "38:21–31 — This is the sum of the tabernacle, even of the tabernacle of testimony, as it was counted, according to the commandment of Moses, for the service of the Levites, by the hand of Ithamar, son of Aaron. Bezalel and Aholiab named again. Gold of the offering: twenty-nine talents and seven hundred and thirty shekels. Silver of them that were numbered of the congregation: a hundred talents, and a thousand seven hundred and seventy-five shekels, after the shekel of the sanctuary — a bekah for every man, half a shekel, for six hundred thousand and three thousand and five hundred and fifty men. The hundred talents of silver cast the sockets. The leftover silver makes hooks, caps, fillets. Brass: seventy talents and two thousand and four hundred shekels — sockets for the door, the bronze altar, the laver, the pins."
  ],
  "refs": [
    "Exodus 30:11–16 — the half-shekel ransom now become sockets. The house stands on atonement-silver.",
    "Exodus 12:37 — 600,000 men on the way out. 38:26’s 603,550 is the numbered host under that memory.",
    "1 Kings 7:23–26 — later bronze sea in the temple. 38 is the first great bronze inventory."
  ],
  "hist": [
    "Mirrors of bronze from the assembling women become a washbasin. Vanity-metal — or dignity-metal — turned into the thing that keeps a priest alive when he comes near.",
    "Ithamar holding the books is how holiness gets an audit. The sanctuary is not allergic to accounting."
  ],
  "opens": [
    "What does it mean that the sockets under the holy boards are made of ransom-silver?",
    "Why tell you the women gave their mirrors?"
  ],
  "topics": [
    {
      "title": "Lookingglasses Become a Laver",
      "icon": "🪞",
      "body": "The women who assemble at the door give the surfaces they used to look at themselves. Those surfaces become water-holders for other men’s hands. The detail is too odd to be filler."
    },
    {
      "title": "The Sum of the Tabernacle",
      "icon": "🧮",
      "body": "Gold weighed. Silver counted by heads. Brass totaled. Ithamar signs the books. Atonement money becomes architecture. The census of 30 is now a foundation you can kick."
    }
  ],
  "wordStudies": [
    {
      "word": "Lookingglasses",
      "orig": "Hebrew: mar’ot",
      "meaning": "38:8. Mirrors of polished bronze. Sight-tools given up for wash-tools."
    },
    {
      "word": "Sum / counted",
      "orig": "Hebrew: pequdei",
      "meaning": "38:21. The numbered things, the audit. Same root-family as visit / appoint (paqad)."
    }
  ],
  "doctrinal": "Teacher-only: I will preach 38:25–27 as theology — the holy house rests on equal ransom — not as a trivia table. The 603,550 will reconnect to the large-host chair of chapter 12; I still will not let the number-fight eat the sockets. Women’s mirrors are a permitted linger: nearness costs even the way you see your own face.",
  "story": {
    "scene": "A bronze square for fire. A basin that used to be mirrors. Linen walls. Then a ledger: this much gold, this much silver, this many men, these sockets.",
    "modern": "Giving up the thing you use to look at yourself so someone else can wash before they work, and letting the books be public."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "603,550 as a straight census",
      "body": "The numbered men of a large host. Strength: 38:26 next to 12:37 and Numbers 1. Cost: wilderness logistics stay huge."
    },
    {
      "name": "Census figures as schematic / clan-math",
      "body": "A smaller real body under round numbers. Strength: some later historical questions ease. Cost: 38 treats the silver as real weight from real heads."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 39 — Garments Finished, and the Work Inspected",
  "chNum": "39",
  "points": [
    "39:1–31 — Of the blue, purple, and scarlet they make cloths of service, and the holy garments for Aaron, as the LORD commanded Moses. The ephod, the curious girdle, the onyx stones on the shoulders enclosed in ouches of gold, engraved as signets, the names of the children of Israel. The breastplate foursquare, twelve stones in four rows, names of the tribes, chains of wreathen gold, rings, a lace of blue so that the breastplate is not loosed from the ephod. The robe of the ephod all of blue, bells and pomegranates. Coats of linen, the mitre, the linen bonnets, breeches, girdle. The plate of the holy crown of pure gold, writing like the engravings of a signet, HOLINESS TO THE LORD, a lace of blue, fastened on high upon the mitre, as the LORD commanded Moses.",
    "39:32–43 — Thus was all the work of the tabernacle of the tent of the congregation finished: the children of Israel did according to all that the LORD commanded Moses, so did they. They bring the tabernacle unto Moses: the tent, furniture, ark, staves, mercy seat, table, shewbread, candlestick, oil, gold altar, anointing oil, incense, brass altar, grate, laver, court hangings, pins, garments. According to all that the LORD commanded Moses, so the children of Israel made all the work. Moses looks upon all the work, and, behold, they have done it as the LORD had commanded, even so have they done it: and Moses blessed them."
  ],
  "refs": [
    "Genesis 1:31–2:3 — God sees all that he has made, behold it is very good, and blesses. 39:43 is that cadence in a yard full of cloth.",
    "Numbers 6:22–27 — the priestly blessing that will later come out of these mouths. Here Moses blesses the makers first.",
    "Hebrews 3:5 — Moses verily was faithful in all his house, as a servant."
  ],
  "hist": [
    "‘As the LORD commanded Moses’ beats through chapter 39 like a drum — seven times and more. After a calf, the refrain is the point.",
    "Signet-engraving on stones and gold plate means the names and the HOLINESS line are not embroidery that can fuzz. They are cut."
  ],
  "opens": [
    "Moses looks, sees it is as commanded, and blesses. What kind of leadership is inspection-plus-blessing?",
    "Why must HOLINESS TO THE LORD be cut like a seal, not inked like a label?"
  ],
  "topics": [
    {
      "title": "So Did They",
      "icon": "✅",
      "body": "The longest obedience sentence in the book. Not a new vision. Not an improvement. The mount-pattern standing on the dirt in pieces, waiting to be raised."
    },
    {
      "title": "Moses Blessed Them",
      "icon": "🙌",
      "body": "The last human act before chapter 40’s glory is a servant looking hard and speaking well. Craft is received as worship by a blessing, not only by a paycheck."
    }
  ],
  "wordStudies": [
    {
      "word": "Finished",
      "orig": "Hebrew: vatekhel",
      "meaning": "39:32. Brought to completion. Same family as completing a work. Genesis 2:1 is in the air."
    },
    {
      "word": "Holy crown",
      "orig": "Hebrew: nezer haqodesh",
      "meaning": "39:30. The plate as a crown-sign of consecration. Holiness sits on a forehead like royalty."
    }
  ],
  "doctrinal": "Teacher-only: 39:42–43 is how I teach ‘faithful in all his house.’ Inspection is not distrust; it is how you love a pattern. The Genesis-echo (saw / behold / blessed) is intentional in my mouth: a small world finished so that God can rest-and-dwell in it. Garments last in the list because the house needs a man who can enter it without dying.",
  "story": {
    "scene": "Twelve stones set in gold. Bells sewn. A crown-plate tied with blue. Then a silent walkthrough: every piece laid at a servant’s feet. A look. A blessing.",
    "modern": "Finishing the thing you were actually asked to make — and having the right person look at it long enough to speak well."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "39 as Genesis-echo (a world made, then filled)",
      "body": "Saw / finished / blessed, then glory. Strength: 39:32, 43; 40:33–34. Cost: it is an echo, not a second creation myth."
    },
    {
      "name": "39 as inventory close-out",
      "body": "A completion report. Strength: the list. Cost: blessing is more than a signature on a receiving-form."
    }
  ]
},
{
  "book": "Exodus",
  "slug": "exodus",
  "chapterLabel": "Chapter 40 — Raised, Anointed, and the Glory Fills the House",
  "chNum": "40",
  "points": [
    "40:1–16 — On the first day of the first month shalt thou set up the tabernacle of the tent of the congregation. Put in the ark, hang the veil, bring in the table, the candlestick, the gold altar, the hanging of the door. The brass altar before the door, the laver between tent and altar, the court. Take the anointing oil, anoint the tabernacle and all that is therein, sanctify it. Anoint the altar of burnt offering and the laver. Bring Aaron and his sons unto the door, wash them, put the holy garments on Aaron, anoint him, sanctify him. Bring his sons, put coats on them; anoint them as thou didst their father, that they may minister; their anointing shall surely be an everlasting priesthood throughout their generations. Moses does according to all that the LORD commanded him, so did he.",
    "40:17–33 — In the first month in the second year, on the first day of the month, the tabernacle is reared up. Moses rears it, sockets, boards, bars, pillars. He spreads the tent, puts the covering above. He puts the testimony into the ark, sets the staves, puts the mercy seat on. He brings the ark in, hangs the veil. He puts the table on the north, sets bread in order. He puts the candlestick on the south, lights the lamps. He puts the gold altar before the veil, burns incense. He sets up the hanging of the door. He puts the burnt-offering altar, offers the burnt offering and the meat offering. He sets the laver, puts water there; Moses and Aaron and his sons wash. He rears the court, sets up the hanging of the court gate. So Moses finished the work.",
    "40:34–38 — Then a cloud covers the tent of the congregation, and the glory of the LORD fills the tabernacle. Moses is not able to enter into the tent of the congregation, because the cloud abides thereon, and the glory of the LORD fills the tabernacle. When the cloud is taken up from over the tabernacle, the children of Israel go onward in all their journeys. If the cloud is not taken up, then they journey not till the day that it is taken up. For the cloud of the LORD is upon the tabernacle by day, and fire is on it by night, in the sight of all the house of Israel, throughout all their journeys."
  ],
  "refs": [
    "1 Kings 8:10–11 — the cloud fills Solomon’s house; the priests cannot stand to minister. 40 is the first time that sentence happens.",
    "Ezekiel 43:1–5 — glory comes into a later house by the east. The opposite of Ezekiel 10’s departure.",
    "John 1:14 — the Word dwelt among us, and we beheld his glory.",
    "Revelation 15:8; 21:3, 23 — the temple filled with smoke from the glory; the tabernacle of God with men; the Lamb is the light.",
    "Numbers 9:15–23 — the cloud-rule that will run the next book starts in these last verses."
  ],
  "hist": [
    "First day of the first month, year two: almost a year after the night of blood (12:2, 40–41). A new year had been dated from redemption. Now a house is raised on that calendar’s new year’s day.",
    "Moses cannot enter is not a demotion. It is the success of 25:8. The house is so filled that even the mediator stands outside for a moment."
  ],
  "opens": [
    "The book began with a king who did not know Joseph and a people who could not rest. It ends with fire on a tent and a people who move only when glory moves. What changed?",
    "If Moses cannot go in when the glory fills it, what is the house for?"
  ],
  "topics": [
    {
      "title": "So Moses Finished the Work",
      "icon": "🏁",
      "body": "Sockets to gate-hanging, testimony into the box, bread set in order, lamps lit, incense burned, water in the laver. Then the sentence Genesis used on a world. A servant completes what he was shown."
    },
    {
      "title": "The Glory Fills the Tabernacle",
      "icon": "☁️",
      "body": "This is why they left brick. Not a calf they could dance around. A cloud they cannot manage, fire they can see at night, a God who moves house when he moves. Leviticus will open with a voice from inside this tent. Exodus has done its job when the glory takes the keys."
    }
  ],
  "wordStudies": [
    {
      "word": "Filled",
      "orig": "Hebrew: male’",
      "meaning": "40:34–35. The same verb as Bezalel being filled with the Spirit (31:3). Skill filled a man; glory fills a house."
    },
    {
      "word": "Journeys",
      "orig": "Hebrew: mas‘eihem",
      "meaning": "40:36, 38. Pulling-up stages. The last word of the book is not arrival in Canaan. It is travel under a fire they can all see."
    }
  ],
  "doctrinal": "Teacher-only: I read 40:34–38 as the real end of Exodus and the real success of 6:7 and 29:45–46. I will not treat the glory as a special effect. I will let 1 Kings 8 and John 1 and Revelation 21 speak after this cloud has been felt as Israel’s. Moses unable to enter is the right shock: presence is gift and override. The book refuses to end in Canaan. It ends in guidance. That is not a failure of ending. It is the life of a people whose God lives with them on the road.",
  "story": {
    "scene": "New year’s day. A tent going up in order. Bread set. Lamps lit. A man finishing. Then a cloud coming down so thick the finisher cannot walk in. Night fire on canvas. A nation watching to see whether the cloud lifts.",
    "modern": "The work done right, and still not being the point — because the point walks in and takes the house, and then tells you when to move."
  },
  "starterNotes": [],
  "views": [
    {
      "name": "Glory-filling as the goal of the book",
      "body": "25:8 and 29:45 paid in full. Strength: 40:34–35. Cost: Numbers will still have to live under this cloud, and it will not always be sweet."
    },
    {
      "name": "Glory-filling as a temporary Sinai stored in cloth",
      "body": "The mountain packaged for travel. Strength: 24:16–17 next to 40:38. Cost: 25:8 wanted dwelling, not only a souvenir of the mountain."
    }
  ]
}
);
