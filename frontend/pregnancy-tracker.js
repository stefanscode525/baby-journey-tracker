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

