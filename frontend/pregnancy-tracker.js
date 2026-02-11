// Week-by-week data (approximate, not medical advice)
// Length ~ "crown to rump" in cm, weight in grams where given
const pregnancyWeeks = [
  {
    week: 4,
    size: "About 0.1–0.2 cm",
    weight: "Too small to measure in grams",
    comparisons: ["Poppy seed", "Grain of sand"],
    motherChanges:
      "The fertilized egg has implanted in the uterus. Hormones begin to rise, but many women still feel completely normal or just a little more tired.",
    goodToKnow:
      "In the first weeks after birth, both of you will likely be exhausted and emotionally up and down. Accept help from friends and family early instead of trying to do everything alone.",
    supportTips: [
      "Offer to take over a few everyday tasks so she can rest.",
      "Be positive and open to talking about feelings, excitement, or worries.",
    ],
  },
  {
    week: 5,
    size: "About 0.2–0.4 cm",
    weight: "Still very tiny",
    comparisons: ["Sesame seed", "Tiny dot on a page"],
    motherChanges:
      "Hormone levels are increasing quickly. She may feel more tired, emotional, or have sore breasts. Some light nausea can start.",
    goodToKnow:
      "Right after birth, visitors can be overwhelming. It helps if you both set simple boundaries in advance about who can visit, for how long, and when you need quiet time.",
    supportTips: [
      "Be patient with mood changes and reassure her that it's normal.",
      "Help with small comforts: snacks, water, and a calm environment.",
    ],
  },
  {
    week: 6,
    size: "About 0.4–0.6 cm",
    weight: "Less than 1 gram",
    comparisons: ["Lentil", "Small nail head"],
    motherChanges:
      "Nausea and food aversions can really kick in now. Smells may bother her. She might feel bloated and very tired.",
    goodToKnow:
      "Newborns often feed very frequently—sometimes every 1–2 hours. This is normal and not a sign that anything is wrong. Expect very little uninterrupted sleep at the beginning.",
    supportTips: [
      "Ask what foods smell or feel okay and adjust meals at home.",
      "Offer gentle reassurance when she feels unwell instead of trying to 'fix' it.",
    ],
  },
  {
    week: 7,
    size: "About 0.8–1.0 cm",
    weight: "Around 1 gram",
    comparisons: ["Blueberry", "Tiny gummy bear"],
    motherChanges:
      "The uterus is growing and hormones are high. She may have stronger nausea, more frequent urination, and emotional ups and downs.",
    goodToKnow:
      "After birth, the mother will bleed (lochia) for several weeks, similar to a strong period that slowly gets lighter. Knowing this in advance helps you support her with practical things like pads, laundry, and rest.",
    supportTips: [
      "Take seriously how draining nausea can be and reduce expectations at home.",
      "Offer to join her at early doctor visits if possible.",
    ],
  },
  {
    week: 8,
    size: "About 1.3–1.6 cm",
    weight: "Around 1–2 grams",
    comparisons: ["Raspberry", "Jellybean"],
    motherChanges:
      "Her body is working hard to build the placenta. Fatigue, nausea, and mood swings can still be strong.",
    goodToKnow:
      "The first days at home can feel chaotic. Having a simple routine (for example: you handle meals and laundry, she focuses on feeding and resting) makes the adjustment easier for both of you.",
    supportTips: [
      "Help create a calm routine in the evenings so she can sleep earlier.",
      "Listen more than you speak; ask what she needs instead of guessing.",
    ],
  },
  {
    week: 9,
    size: "About 2–2.3 cm",
    weight: "Around 2 grams",
    comparisons: ["Grape", "Small cherry"],
    motherChanges:
      "The embryo is starting to look more like a tiny baby. She may notice changes in her waistline and still feel very tired.",
    goodToKnow:
      "It’s very common for babies to cry a lot in the late afternoon or evening. This ‘witching hour’ phase is stressful but temporary. Taking turns holding and calming the baby helps protect both of your energy.",
    supportTips: [
      "Avoid comments about her body shape; focus on how she feels instead.",
      "Offer to handle more chores like shopping, cooking, or laundry.",
    ],
  },
  {
    week: 10,
    size: "About 3–4 cm",
    weight: "Around 4 grams",
    comparisons: ["Prune", "Strawberry"],
    motherChanges:
      "The most critical development phase is finishing. Nausea might remain but may begin to ease soon for some.",
    goodToKnow:
      "Feeding (breast or bottle) is a skill you both learn together with the baby. It rarely works perfectly from day one. Encourage professional support (midwife, lactation consultant) instead of pushing through alone.",
    supportTips: [
      "Celebrate this milestone together; this can make it feel more real.",
      "Stay flexible if she cancels plans because she’s tired or nauseous.",
    ],
  },
  {
    week: 11,
    size: "About 4–5 cm",
    weight: "Around 7–8 grams",
    comparisons: ["Fig", "Small lime"],
    motherChanges:
      "Blood volume is increasing. She may have headaches, mild dizziness, or feel out of breath more easily.",
    goodToKnow:
      "Skin‑to‑skin contact is calming for both baby and parents. Plan that you as a father also take time to hold the baby skin‑to‑skin—this helps bonding and gives the mother a short break.",
    supportTips: [
      "Encourage her to rest, drink water, and sit down when she feels light‑headed.",
      "Offer to go on gentle walks instead of intense activities.",
    ],
  },
  {
    week: 12,
    size: "About 5–6 cm",
    weight: "Around 14 grams",
    comparisons: ["Plum", "Small passion fruit"],
    motherChanges:
      "The uterus is rising out of the pelvis. Some nausea may ease, and she might feel a bit more energetic.",
    goodToKnow:
      "The first weeks are not about strict routines; they’re about getting to know the baby. It’s okay if your home is messy and meals are simple—prioritise sleep and emotional stability.",
    supportTips: [
      "If she's feeling better, enjoy a small celebration or date together.",
      "Ask how she wants to share the news with friends and family and plan it together.",
    ],
  },
  {
    week: 13,
    size: "About 7–8 cm",
    weight: "Around 23 grams",
    comparisons: ["Peach", "Lemon"],
    motherChanges:
      "She may notice a small bump and changes in her appetite. Energy often improves in the second trimester.",
    goodToKnow:
      "After birth, your relationship will change. Scheduling very small moments for the two of you—like a 10‑minute talk or a tea together—helps you stay connected as partners, not just parents.",
    supportTips: [
      "Compliment her in a genuine way that isn’t focused only on appearance.",
      "Start talking about practical topics like finances and space for the baby calmly and kindly.",
    ],
  },
  {
    week: 14,
    size: "About 8–9 cm",
    weight: "Around 40–45 grams",
    comparisons: ["Kiwi fruit", "Small orange"],
    motherChanges:
      "She might experience nasal congestion, headaches, or increased energy. The bump may be more visible.",
    goodToKnow:
      "You can already think about division of night duties after birth—for example, you handle all diaper changes after feeds during certain hours so the mother can minimise getting up and down.",
    supportTips: [
      "Offer to accompany her to checkups and be involved in questions to the doctor.",
      "Take initiative on one or two ongoing household tasks so she doesn’t need to ask.",
    ],
  },
  {
    week: 15,
    size: "About 10–11 cm",
    weight: "Around 70 grams",
    comparisons: ["Apple", "Clenched fist"],
    motherChanges:
      "She may feel stretching sensations as the uterus grows. Skin changes and veins may be more visible.",
    goodToKnow:
      "Many parents feel pressure to ‘enjoy every moment’ after birth. It’s okay if you sometimes simply feel tired, frustrated, or unsure. These feelings are normal and worth talking about openly.",
    supportTips: [
      "Be understanding if she feels self-conscious about physical changes.",
      "Offer gentle massages for legs, back, or shoulders if she’s comfortable with touch.",
    ],
  },
  {
    week: 16,
    size: "About 11–12 cm",
    weight: "Around 100 grams",
    comparisons: ["Avocado", "Small pear"],
    motherChanges:
      "She may start to feel the first tiny flutters of movement, especially if this isn’t the first pregnancy.",
    goodToKnow:
      "Think about who can be your backup support in the first weeks: a friend who can bring food, a relative who can do a grocery run, or a neighbour who can walk the dog.",
    supportTips: [
      "Share the excitement when she feels movements; this helps you bond too.",
      "Help with healthy snack options and regular meals.",
    ],
  },
  {
    week: 17,
    size: "About 12–13 cm",
    weight: "Around 140 grams",
    comparisons: ["Turnip", "Large plum"],
    motherChanges:
      "Her center of gravity is shifting. She may have back pain or feel clumsier than usual.",
    goodToKnow:
      "Babies don’t read books or schedules; some sleep in longer stretches early, others don’t. Comparing your baby to others usually creates stress—focus on your own baby’s signals and your own rhythm.",
    supportTips: [
      "Offer to carry heavy items and adjust expectations around physical tasks.",
      "Encourage gentle stretching or prenatal yoga if recommended by her doctor.",
    ],
  },
  {
    week: 18,
    size: "About 13–14 cm",
    weight: "Around 190 grams",
    comparisons: ["Bell pepper", "Sweet potato"],
    motherChanges:
      "Movements may be clearer now, like little kicks or rolls. Sleep position may start to matter more.",
    goodToKnow:
      "Noise level at home after birth doesn’t have to be zero. Babies are used to constant sounds in the womb. Everyday background noise is usually fine; your calm mood is more important than silence.",
    supportTips: [
      "Help her arrange pillows for comfortable sleep and respect early bedtimes.",
      "Ask if she’d like you to feel the movements and share that moment together.",
    ],
  },
  {
    week: 19,
    size: "About 14–15 cm",
    weight: "Around 240 grams",
    comparisons: ["Tomato", "Mango"],
    motherChanges:
      "She may have round ligament pain—sharp twinges when moving quickly. Skin may feel dry or itchy as it stretches.",
    goodToKnow:
      "In the first weeks, you may sometimes feel ‘left out’ if the baby mainly wants the mother. This often changes over time. Keep offering contact, talking, and soothing so the baby also connects strongly with you.",
    supportTips: [
      "Be patient if she moves more slowly or needs to pause often.",
      "Offer to pick up creams or oils that feel good on her skin.",
    ],
  },
  {
    week: 20,
    size: "About 16–17 cm (CRL), ~25 cm total",
    weight: "Around 300 grams",
    comparisons: ["Banana", "Artichoke"],
    motherChanges:
      "Halfway there. The anatomy scan often happens around this time. She may feel more connected to the baby.",
    goodToKnow:
      "Think early about parental leave options and how you want to structure your time off after birth. Being present in the first weeks makes a big difference for bonding and for supporting the mother’s recovery.",
    supportTips: [
      "Attend the mid‑pregnancy scan if you can; it’s a big emotional moment.",
      "Talk openly about names, hopes, and any fears you both have.",
    ],
  },
  {
    week: 21,
    size: "About 26–27 cm total length",
    weight: "Around 360 grams",
    comparisons: ["Carrot", "Large banana"],
    motherChanges:
      "She might notice stronger kicks and patterns of activity. Heartburn and leg cramps can appear.",
    goodToKnow:
      "Decide together how you want to share baby information online. Align now on what feels okay (or not) so there’s no stress later when you’re both tired and posting impulsively.",
    supportTips: [
      "Help her find comfortable evening routines that reduce heartburn, like lighter dinners.",
      "Offer leg or foot massages when cramps hit, if she likes that.",
    ],
  },
  {
    week: 22,
    size: "About 27–28 cm",
    weight: "Around 430 grams",
    comparisons: ["Papaya", "Small spaghetti squash"],
    motherChanges:
      "Weight gain is more visible. She may feel more confident and excited, but also more easily out of breath.",
    goodToKnow:
      "Babies often prefer being held upright and close to the body. Practising with a baby carrier or sling before birth can make those first weeks easier and free up your hands at home.",
    supportTips: [
      "Avoid comments about 'how big' she looks—focus on strength and admiration instead.",
      "Take breaks during walks or activities without making her feel guilty.",
    ],
  },
  {
    week: 23,
    size: "About 28–29 cm",
    weight: "Around 500 grams",
    comparisons: ["Grapefruit", "Large mango"],
    motherChanges:
      "She may experience swelling in feet or hands, back pain, or difficulty finding a comfortable sleeping position.",
    goodToKnow:
      "It’s normal if the first weeks after birth feel like a blur. Taking a few short notes or photos each day can help you both remember and also see how fast things actually change and improve.",
    supportTips: [
      "Offer to elevate her feet with pillows and bring her water.",
      "Take extra care of practical tasks in the evening so she can wind down.",
    ],
  },
  {
    week: 24,
    size: "About 30 cm",
    weight: "Around 600 grams",
    comparisons: ["Corn on the cob", "Small melon"],
    motherChanges:
      "The uterus is higher, and movements are stronger. She might start to worry more about birth and parenting.",
    goodToKnow:
      "Talk now about how you want to handle night‑time crying: who gets up when, how long you try to soothe before changing strategy, and what’s your backup plan on really hard nights.",
    supportTips: [
      "Talk about birth preferences and parenting ideas calmly and without judgement.",
      "Suggest doing a childbirth class together if that’s available.",
    ],
  },
  {
    week: 25,
    size: "About 32 cm",
    weight: "Around 700 grams",
    comparisons: ["Rutabaga", "Large eggplant"],
    motherChanges:
      "She may feel pressure in her lower back and pelvis. Sleep can become more disturbed.",
    goodToKnow:
      "Newborn poop, spit‑up, and small messes will be constant. Having simple systems like a small basket of baby supplies in each key room saves a lot of frustration later.",
    supportTips: [
      "Create a darker, calmer bedroom environment and keep screens out if possible.",
      "Offer to handle more night‑time tasks (e.g., with older children or pets).",
    ],
  },
  {
    week: 26,
    size: "About 33–34 cm",
    weight: "Around 760–900 grams",
    comparisons: ["Scallion bunch", "Small butternut squash"],
    motherChanges:
      "She could have Braxton Hicks contractions—painless tightening of the uterus. Emotional vulnerability may increase again.",
    goodToKnow:
      "After birth, many mothers experience emotional lows around day 3–5 (‘baby blues’). Strong, long‑lasting sadness or anxiety beyond that can be a sign to seek professional support—and your encouragement can be crucial.",
    supportTips: [
      "Stay calm when she shares worries; resist the urge to minimise them.",
      "Learn the basics of preterm labour signs so you both feel informed.",
    ],
  },
  {
    week: 27,
    size: "About 34–36 cm",
    weight: "Around 900–1000 grams",
    comparisons: ["Cauliflower", "Large head of lettuce"],
    motherChanges:
      "Entering the third trimester. She may be more easily exhausted and need more rest breaks.",
    goodToKnow:
      "Sleep when the baby sleeps is good advice in theory, but not always realistic. As a partner, you can protect some sleep blocks for the mother by taking the baby out for a walk or drive at specific times.",
    supportTips: [
      "Proactively suggest quieter weekends or shorter social plans.",
      "Take the lead on preparing some baby essentials so she feels supported.",
    ],
  },
  {
    week: 28,
    size: "About 36–38 cm",
    weight: "Around 1000–1200 grams",
    comparisons: ["Aubergine (eggplant)", "Coconut"],
    motherChanges:
      "Back pain, heartburn, and sleep problems can intensify. She may need more help with everyday tasks.",
    goodToKnow:
      "Have a simple list on the fridge of quick meals, emergency phone numbers, and important medical contacts. In stressful moments after birth, it helps not to rely on memory alone.",
    supportTips: [
      "Step in without being asked for obvious tasks like carrying heavy bags.",
      "Check in daily with a simple question: 'What can I take off your plate today?'",
    ],
  },
  {
    week: 29,
    size: "About 38–39 cm",
    weight: "Around 1200–1400 grams",
    comparisons: ["Butternut squash", "Large bottle of juice"],
    motherChanges:
      "She may have more vivid dreams and thoughts about birth and parenting scenarios.",
    goodToKnow:
      "Talk openly about your expectations of yourself as a father. Many men feel pressure to ‘be strong’ and not show fear; sharing honestly makes it easier to support each other later.",
    supportTips: [
      "Ask what she’s imagining about birth and listen without judgement.",
      "Start noting practical tasks: hospital bag, paperwork, transport.",
    ],
  },
  {
    week: 30,
    size: "About 39–40 cm",
    weight: "Around 1400–1500 grams",
    comparisons: ["Cabbage", "Medium pumpkin"],
    motherChanges:
      "The bump is large and heavier. Shortness of breath and pelvic pressure can be strong.",
    goodToKnow:
      "Babies grow out of clothes and equipment incredibly fast. You don’t need everything perfect on day one; having a few essentials ready and the rest on a list is usually enough.",
    supportTips: [
      "Offer your arm when walking and allow extra time for getting places.",
      "Gently remind her to rest and take breaks without sounding controlling.",
    ],
  },
  {
    week: 31,
    size: "About 41–42 cm",
    weight: "Around 1600–1800 grams",
    comparisons: ["Coconut with husk", "Big cauliflower"],
    motherChanges:
      "She may feel clumsy, swollen, and uncomfortable. Sleep is often broken.",
    goodToKnow:
      "The first weeks are not the time to fix every household project. Lowering your standards temporarily and focusing on core things (sleep, food, emotional support) helps everyone.",
    supportTips: [
      "Take over evening tasks so she can go to bed when she needs to.",
      "Reassure her that it’s okay to slow down—it’s not laziness, it’s pregnancy.",
    ],
  },
  {
    week: 32,
    size: "About 42–43 cm",
    weight: "Around 1800–2000 grams",
    comparisons: ["Jicama", "Large cantaloupe"],
    motherChanges:
      "The baby probably has a regular pattern of movement. She may feel heavy and easily overheated.",
    goodToKnow:
      "Agree now who will be the main contact point for family updates after birth. This prevents both of you from feeling pressure to answer every message while you’re exhausted.",
    supportTips: [
      "Keep cool water available and consider a fan or cooler bedroom.",
      "Offer to rub her back or feet in the evenings if she’s comfortable with it.",
    ],
  },
  {
    week: 33,
    size: "About 43–44 cm",
    weight: "Around 2000–2200 grams",
    comparisons: ["Pineapple", "Large honeydew melon"],
    motherChanges:
      "Pelvic discomfort, pressure, and back pain can increase. She may be more focused on labour preparations.",
    goodToKnow:
      "Think about your own emotional support: who can you talk to after the birth when you feel overwhelmed? Having someone you trust makes it easier not to unload everything on the mother.",
    supportTips: [
      "Go through the birth plan together and clarify your role for the big day.",
      "Make sure transport and practical logistics for getting to the hospital are clear.",
    ],
  },
  {
    week: 34,
    size: "About 45 cm",
    weight: "Around 2200–2400 grams",
    comparisons: ["Cantaloupe melon", "Small watermelon"],
    motherChanges:
      "She may have stronger Braxton Hicks contractions and feel more pressure downwards if the baby is moving lower.",
    goodToKnow:
      "After birth, time feels strange—days are long but weeks pass quickly. Remember that very intense phases (growth spurts, sleepless stretches) usually last only a few days to a couple of weeks.",
    supportTips: [
      "Stay calm when she has practice contractions; help her time them if unsure.",
      "Encourage rest days with minimal plans, especially late in the week.",
    ],
  },
  {
    week: 35,
    size: "About 46–47 cm",
    weight: "Around 2400–2600 grams",
    comparisons: ["Honeydew melon", "Bag of flour"],
    motherChanges:
      "She could feel very heavy and may struggle with simple tasks like putting on shoes.",
    goodToKnow:
      "Plan a few tiny things you personally look forward to in the first weeks, like a special breakfast ritual with the baby or a short walk every day. These anchors can help you stay grounded.",
    supportTips: [
      "Offer to help with shoes, socks, and anything that requires bending or balance.",
      "Take initiative in household organisation so she doesn’t have to manage everything mentally.",
    ],
  },
  {
    week: 36,
    size: "About 47–48 cm",
    weight: "Around 2600–2800 grams",
    comparisons: ["Small watermelon", "Large papaya"],
    motherChanges:
      "The baby may drop lower into the pelvis (engagement), which can relieve breathlessness but increase pelvic pressure.",
    goodToKnow:
      "The first weeks don’t decide everything about your future as a parent. You will both keep learning, adjusting, and improving over months and years.",
    supportTips: [
      "Drive or walk more slowly and avoid long distances without breaks.",
      "Review the hospital bag and key phone numbers together one more time.",
    ],
  },
  {
    week: 37,
    size: "About 48–49 cm",
    weight: "Around 2800–3000 grams",
    comparisons: ["Swiss chard bunch", "Large pineapple"],
    motherChanges:
      "Considered 'early term.' She may feel impatient, excited, and anxious all at once. Sleep can be very difficult.",
    goodToKnow:
      "Have realistic expectations about visitors in the first week: focus on people who genuinely help (cook, clean, hold the baby while you both shower) rather than those who just want to be entertained.",
    supportTips: [
      "Be extra kind and avoid starting unnecessary arguments; emotions are intense now.",
      "Suggest short walks, gentle stretching, and relaxing activities in the evening.",
    ],
  },
  {
    week: 38,
    size: "About 49–50 cm",
    weight: "Around 3000–3200 grams",
    comparisons: ["Leek bundle", "Round watermelon (small)"],
    motherChanges:
      "She may feel strong pelvic pressure, more discharge, and irregular contractions.",
    goodToKnow:
      "After birth, you may notice that your priorities and friendships shift. That’s normal; you’re entering a new life phase. It’s okay to say no more often while you adjust.",
    supportTips: [
      "Stay reachable by phone at all times and keep your own bag ready.",
      "Keep conversation calm and reassuring; avoid horror birth stories from others.",
    ],
  },
  {
    week: 39,
    size: "About 50–51 cm",
    weight: "Around 3200–3400 grams",
    comparisons: ["Mini pumpkin", "Large chicken"],
    motherChanges:
      "Any day now. She may feel extremely done with being pregnant and emotionally sensitive.",
    goodToKnow:
      "It’s common to feel scared right before the birth, even if you felt confident before. Prepare a few calming phrases or reminders you can say to yourself and your partner during labour.",
    supportTips: [
      "Tell her specifically what you appreciate about how she’s handled pregnancy.",
      "Help distract her with light activities or shows while staying ready to go.",
    ],
  },
  {
    week: 40,
    size: "About 51–52 cm",
    weight: "Around 3400 grams (average)",
    comparisons: ["Small watermelon", "Big loaf of bread"],
    motherChanges:
      "Due date. Only a small percentage of babies arrive exactly now. She may have mixed feelings if the baby isn’t here yet.",
    goodToKnow:
      "After the birth, nothing will be ‘perfect’—and that’s okay. Showing up with presence, kindness, and willingness to learn matters far more than doing everything exactly right.",
    supportTips: [
      "Reassure her that going past the due date is common and not her fault.",
      "Stay fully engaged: answer calls, keep your schedule flexible, and be emotionally available.",
    ],
  },
];

const MIN_WEEK = pregnancyWeeks[0].week;
const MAX_WEEK = pregnancyWeeks[pregnancyWeeks.length - 1].week;

function calculateWeekFromDueDate(dueDateStr) {
  if (!dueDateStr) return null;
  const dueDate = new Date(dueDateStr);
  const today = new Date();

  // Gestation is ~40 weeks from last menstrual period (LMP),
  // which is about 38 weeks from conception.
  const MS_PER_DAY = 24 * 60 * 60 * 1000;
  const daysUntilDue = Math.round((dueDate - today) / MS_PER_DAY);

  const gestationDays = 280; // 40 weeks * 7 days from LMP
  const daysPregnant = gestationDays - daysUntilDue;
  const week = Math.floor(daysPregnant / 7) + 1;

  if (isNaN(week)) return null;
  return week;
}

function clampWeek(week) {
  if (week < MIN_WEEK) return MIN_WEEK;
  if (week > MAX_WEEK) return MAX_WEEK;
  return week;
}

function findWeekData(week) {
  return pregnancyWeeks.find((w) => w.week === week) || pregnancyWeeks[0];
}

function formatMetaText(currentWeek, dueDateStr) {
  if (!dueDateStr) {
    return "Set the expected due date to see which week you are in.";
  }
  const today = new Date();
  const dueDate = new Date(dueDateStr);
  const MS_PER_DAY = 24 * 60 * 60 * 1000;
  const daysUntilDue = Math.round((dueDate - today) / MS_PER_DAY);

  if (daysUntilDue > 0) {
    return `Approximately week ${currentWeek}. About ${daysUntilDue} day${daysUntilDue === 1 ? "" : "s"} until the due date (estimate only).`;
  }
  if (daysUntilDue === 0) {
    return `Estimated due date is today. This is an approximate week ${currentWeek}.`;
  }
  const daysSinceDue = Math.abs(daysUntilDue);
  return `Approximately week ${currentWeek}. The estimated due date was ${daysSinceDue} day${daysSinceDue === 1 ? "" : "s"} ago.`;
}

function renderWeek(week, dueDateStr) {
  const clampedWeek = clampWeek(week);
  const data = findWeekData(clampedWeek);

  const weekLabel = document.getElementById("weekNumberLabel");
  const sizeEl = document.getElementById("babySize");
  const weightEl = document.getElementById("babyWeight");
  const comp1El = document.getElementById("comparison1");
  const comp2El = document.getElementById("comparison2");
  const motherEl = document.getElementById("motherChanges");
  const goodToKnowEl = document.getElementById("goodToKnow");
  const supportList = document.getElementById("supportTips");
  const metaEl = document.getElementById("ptMeta");
  const prevBtn = document.getElementById("prevWeekBtn");
  const nextBtn = document.getElementById("nextWeekBtn");

  if (
    !weekLabel ||
    !sizeEl ||
    !weightEl ||
    !comp1El ||
    !comp2El ||
    !motherEl ||
    !goodToKnowEl ||
    !supportList ||
    !metaEl
  ) {
    return;
  }

  weekLabel.textContent = `Week ${data.week}`;
  sizeEl.textContent = `Length: ${data.size}`;
  weightEl.textContent = `Weight: ${data.weight}`;
  comp1El.textContent = data.comparisons[0] || "";
  comp2El.textContent = data.comparisons[1] || "";
  motherEl.textContent = data.motherChanges;
  goodToKnowEl.textContent = data.goodToKnow || "";
  metaEl.textContent = formatMetaText(data.week, dueDateStr);

  supportList.innerHTML = "";
  data.supportTips.forEach((tip) => {
    const li = document.createElement("li");
    li.textContent = tip;
    supportList.appendChild(li);
  });

  if (prevBtn && nextBtn) {
    prevBtn.disabled = data.week <= MIN_WEEK;
    nextBtn.disabled = data.week >= MAX_WEEK;
  }

  // Persist last selected due date and week in localStorage
  try {
    localStorage.setItem(
      "pt_state",
      JSON.stringify({ dueDate: dueDateStr || null, week: data.week })
    );
  } catch (_) {
    // ignore storage errors
  }
}

function initPregnancyTracker() {
  const dueDateInput = document.getElementById("dueDate");
  const setDueDateBtn = document.getElementById("setDueDateBtn");
  const prevBtn = document.getElementById("prevWeekBtn");
  const nextBtn = document.getElementById("nextWeekBtn");

  let currentWeek = MIN_WEEK;
  let currentDueDate = "";

  // Load persisted state if available
  try {
    const stored = localStorage.getItem("pt_state");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.dueDate) {
        currentDueDate = parsed.dueDate;
        if (dueDateInput) {
          dueDateInput.value = parsed.dueDate;
        }
        const weekFromDate = calculateWeekFromDueDate(parsed.dueDate);
        if (weekFromDate) {
          currentWeek = clampWeek(weekFromDate);
        } else if (parsed.week) {
          currentWeek = clampWeek(parsed.week);
        }
      } else if (parsed.week) {
        currentWeek = clampWeek(parsed.week);
      }
    }
  } catch (_) {
    // ignore
  }

  renderWeek(currentWeek, currentDueDate);

  if (setDueDateBtn) {
    setDueDateBtn.addEventListener("click", () => {
      if (!dueDateInput || !dueDateInput.value) {
        currentDueDate = "";
        renderWeek(currentWeek, currentDueDate);
        return;
      }
      currentDueDate = dueDateInput.value;
      const calculatedWeek = calculateWeekFromDueDate(currentDueDate);
      if (calculatedWeek) {
        currentWeek = clampWeek(calculatedWeek);
      }
      renderWeek(currentWeek, currentDueDate);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentWeek = clampWeek(currentWeek - 1);
      renderWeek(currentWeek, currentDueDate);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentWeek = clampWeek(currentWeek + 1);
      renderWeek(currentWeek, currentDueDate);
    });
  }
}

document.addEventListener("DOMContentLoaded", initPregnancyTracker);

