import type { MonthContent, Source } from '../types';
import { dailyId, weeklyId, wrapId } from '../types';

const NHS_PERIODS: Source = {
  label: 'NHS: Periods',
  url: 'https://www.nhs.uk/conditions/periods/',
};
const ACOG_CYCLE: Source = {
  label: 'ACOG: The Menstrual Cycle',
  url: 'https://www.acog.org/womens-health/faqs/your-first-period',
};
const NHS_OVULATION_PAIN: Source = {
  label: 'NHS: Ovulation pain',
  url: 'https://www.nhs.uk/conditions/ovulation-pain/',
};
const NHS_DISCHARGE: Source = {
  label: 'NHS: Vaginal discharge',
  url: 'https://www.nhs.uk/conditions/vaginal-discharge/',
};
const NHS_IRREGULAR: Source = {
  label: 'NHS: Irregular periods',
  url: 'https://www.nhs.uk/conditions/irregular-periods/',
};
const NHS_MISSED: Source = {
  label: 'NHS: Stopped or missed periods',
  url: 'https://www.nhs.uk/conditions/stopped-or-missed-periods/',
};
const NHS_PCOS: Source = {
  label: 'NHS: Polycystic ovary syndrome',
  url: 'https://www.nhs.uk/conditions/polycystic-ovary-syndrome-pcos/',
};
const NHS_CONTRACEPTION: Source = {
  label: 'NHS: Contraception',
  url: 'https://www.nhs.uk/contraception/',
};
const ACOG_FAB: Source = {
  label: 'ACOG: Fertility awareness-based methods',
  url: 'https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning',
};
const ACOG_INFERTILITY: Source = {
  label: 'ACOG: Evaluating infertility',
  url: 'https://www.acog.org/womens-health/faqs/evaluating-infertility',
};

const M = 5;

export const month05: MonthContent = {
  month: M,
  theme: 'Ovulation',
  focus:
    'Know the signs and the fertile window, and use that knowledge for closeness without pressure.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'The invisible midpoint of the cycle',
      insight:
        'This month is about the one day the rest of the cycle builds towards: ovulation. A mature egg leaves the ovary, lives for up to a day, and is either fertilised or dissolves. Everything before is preparation, everything after is the aftermath. It sounds simple, but ovulation is the most overlooked part of the cycle because it is invisible: no bleeding, no cramps, only small signs you have to know about to notice. Many feel more energy, more desire and more capacity in the days around it. The goal this month is knowledge without pressure: you know the signs and the window, and neither of you has to perform on particular dates. The date in the app is an estimate, not a measurement. We will come back to that.',
      action:
        'Look at the estimated ovulation date in the app for this cycle, and ask her whether it usually matches what she notices herself.',
      phaseTags: [],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: 'The LH surge: the starting gun',
      insight:
        'During the follicular phase a group of follicles matures in the ovary, and one becomes dominant. It produces rising amounts of estrogen, and once estrogen has stayed high for about two days the brain changes strategy: the pituitary sends a sharp wave of luteinising hormone, LH. That is the LH surge, the starting gun itself. 24-36 hours later the follicle ruptures and the egg is released. The surge typically lasts only a day and is what ovulation tests measure in urine. That is also why a test turns positive before ovulation, not on the day. For you it means this: the days she feels her very best are often the days leading up to ovulation, when estrogen peaks, not the day after.',
      action:
        'Notice whether she seems sharper and more energetic today than last week, and tell her so without explaining why.',
      phaseTags: ['follicular', 'ovulation'],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 3),
      month: M,
      day: 3,
      title: 'The egg lives for a day',
      insight:
        'When the follicle ruptures, the egg is caught by the funnel of the fallopian tube and starts its journey towards the uterus. It can be fertilised for 12-24 hours. After that it dissolves, and the cycle carries on unchanged towards the next period. That is a very short lifespan, and it is the whole reason timing matters so much for fertility. If two eggs are released it can result in non-identical twins, but that is rare. Ovulation is not usually felt as an event; most signs come before or after. So when the app says "ovulation today", it has often already happened or happens tomorrow. One day, not a week: that is the sentence to remember.',
      action:
        'Say the sentence to yourself: "The egg lives a day, sperm live five days." It explains the whole fertile window.',
      phaseTags: ['ovulation'],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'Sperm are the patient ones',
      insight:
        'Sperm can survive up to five days in the cervix and fallopian tubes if the mucus is the right kind. Around ovulation the mucus in the cervix becomes thin and slippery, and it keeps sperm alive and carries them forward. For the rest of the cycle the mucus is thick and acidic, and sperm die within hours. That is why the fertile window lies before ovulation: the sperm need to be in place and waiting when the egg arrives. Sex the day after ovulation almost never leads to pregnancy, while sex two days before is among the most fertile moments. That holds whatever you two are hoping for. Knowing how long sperm live is as much your responsibility as hers.',
      action:
        'Count five days back from the ovulation date in the app, and notice where the fertile window falls in this cycle.',
      phaseTags: ['ovulation', 'follicular'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'Six days: the fertile window',
      insight:
        'Add the egg\'s single day to the sperm\'s five, and you get the fertile window: the five days before ovulation and the day itself. The chance of pregnancy is highest in the two or three days just before ovulation and drops sharply the day after. Outside the window pregnancy is very unlikely, but the window moves, because ovulation moves. Stress, illness and travel can delay it by days or weeks, and the window shifts with it. That is why the estimate in the app cannot be used to pick "safe days". It is an average of previous cycles, not a measurement of this one. Use the window to understand her body and your shared responsibility, not to plan contraception.',
      action:
        'Open the calendar together and find the fertile window in this cycle. Talk about what it means for you right now: hope, caution, or both.',
      phaseTags: ['ovulation'],
      sources: [NHS_PERIODS, ACOG_CYCLE],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: 'The discharge tells the story',
      insight:
        'The most reliable daily sign that ovulation is approaching is the discharge from the cervix. After the period there is often little or none. As estrogen rises it becomes creamy and whitish, and in the days just before ovulation it turns clear, slippery and stretchy, like raw egg white. That is the body opening the door for sperm. After ovulation, progesterone makes it thick and sticky again within a day or two. Many women know the pattern without ever having put words to it. Discharge that smells strongly, itches or is greenish is something else and deserves a doctor. Normal discharge simply changes in step with the hormones.',
      action:
        'Ask whether she notices her discharge changing across the cycle. Ask out of curiosity, not as a test.',
      phaseTags: ['follicular', 'ovulation'],
      sources: [NHS_DISCHARGE],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'Temperature confirms it afterwards',
      insight:
        'Progesterone raises body temperature by 0.2-0.5 degrees, and the rise only happens after ovulation. If she takes her temperature every morning before getting up, a shift becomes visible: low in the first half, high in the second. The method is called basal body temperature. It does not tell you that ovulation is coming, but that it has happened. That is useful for learning her pattern and for confirming that a cycle actually had an ovulation. Fever, alcohol, poor sleep and a late night disturb the reading, so a single day says nothing. Whether she wants to measure is her choice; it is a daily effort. Your role is to make it easy, not to keep an eye on the numbers.',
      action:
        'If she takes her temperature: make sure she can do it in peace in the morning, without you starting a conversation or switching on the light.',
      phaseTags: ['luteal'],
      sources: [ACOG_FAB],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: 'Ovulation pain',
      insight:
        'Around one in five women feels ovulation as a pain on one side of the lower abdomen. It is called mittelschmerz, German for "middle pain". It can be a brief stab or a dull ache lasting hours, rarely more than a day, and typically only on the side where ovulation happens that month. The cause is probably the stretching of the follicle and a little fluid or blood irritating the lining of the abdomen. It is normal and rarely needs more than heat and perhaps an over-the-counter painkiller. Severe pain, pain with fever or vomiting, or pain lasting several days is something else and deserves a doctor. If she notices a regular pain day in the log, you have a reliable sign.',
      action:
        'Ask whether she ever feels a stab on one side in the middle of the cycle. If yes, suggest logging it as a symptom today.',
      phaseTags: ['ovulation'],
      sources: [NHS_OVULATION_PAIN],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'Ovulation tests',
      insight:
        'Ovulation tests measure LH in urine and turn positive when the surge arrives, typically 24-36 hours before ovulation. They are the most precise home method for predicting the day. She tests daily from a few days before the expected ovulation, ideally around midday, and many need five to ten sticks per cycle. Women with PCOS can have constantly raised LH and get misleading results. The test shows that the body is trying, not that the egg is actually released. It is useful if you are hoping for pregnancy, or if she wants to get to know her cycle. It is not contraception: by the time the test is positive, the most fertile days are already under way.',
      action:
        'If she uses ovulation tests: ask whether you should buy them next time, so the shopping is not always hers.',
      phaseTags: ['follicular', 'ovulation'],
      sources: [ACOG_FAB],
    },
    {
      id: dailyId(M, 10),
      month: M,
      day: 10,
      title: 'Desire and testosterone',
      insight:
        'Women produce testosterone too, and it peaks together with estrogen around ovulation. For many, the combination brings more desire, more imagination and more initiative than at other times of the month. It is biology working towards pregnancy, whether or not pregnancy is wanted. That does not mean desire arrives on demand. Tiredness, stress, conflict and children who wake up beat the hormones every time. Nor does it mean that low desire in the luteal phase is a problem to be solved. What you can use it for is understanding the rhythm and being available without demanding. Closeness she has initiated herself is the best kind.',
      action:
        'Clear space this evening without announcing it: no screens, no plans. Let her choose what the evening is for.',
      phaseTags: ['ovulation'],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'Confidence and social energy',
      insight:
        'Estrogen affects the reward system in the brain and raises serotonin and dopamine. Around ovulation many describe feeling sharper, more outgoing and more self-assured. Studies suggest women talk a little more, dress a little differently and seek more company in the days before ovulation. These are small effects, not a personality change, but they are real. It is a good time for parties, job interviews and meeting new people. It is also a time when she may need to do something without you. Wanting to see friends is not a rejection of you. It is energy that needs somewhere to go.',
      action:
        'Say yes to the social things she suggests this week, or suggest yourself that she sees friends while you hold the fort at home.',
      phaseTags: ['ovulation', 'follicular'],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: 'A no counts at the peak too',
      insight:
        'Knowledge about desire and hormones can be misused. If you have read that desire peaks at ovulation and she says no, the answer is still no. Hormones are a backdrop, not an obligation, and no estimate in an app tells you what she wants today. The worst thing the app can do is make you expectant on particular dates. The best thing it can do is make you more attentive and less personal about a refusal. She sees the same content you do. If she senses that you are counting on something because the app said so, you both lose trust in it. Closeness is something you find together, not something the calendar assigns.',
      action:
        'Say it out loud to her today: "I use the app to understand you better, not to expect anything." And mean it.',
      phaseTags: ['ovulation'],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: 'Spotting mid-cycle',
      insight:
        'Some women see light pink or brownish spotting around ovulation. It is probably caused by the brief dip in estrogen just after the LH surge, or a little blood from the follicle. It lasts a day or two and is harmless. It can be mistaken for the start of a period, but the mid-cycle timing and the small amount give it away. Spotting can also come from other things: hormonal contraception, infection, polyps or bleeding after sex. Repeated bleeding outside the period, heavy bleeding or bleeding after sex deserves a doctor. A single light spotting in the middle of the cycle is rarely anything. Best is to log it, so the pattern becomes visible.',
      action:
        'If she mentions spotting: calmly ask where in the cycle it came, and suggest noting it in the calendar.',
      phaseTags: ['ovulation'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'Cycles without ovulation',
      insight:
        'Not every cycle has an ovulation. That is called an anovulatory cycle, and it is common: in puberty, after childbirth, while breastfeeding, in the years before menopause, and now and then in anyone under stress, illness, weight loss or hard training. Without ovulation no corpus luteum forms, and so no progesterone. A period may still come, but often late, lighter or heavier than usual, and the cycle becomes irregular. A single anovulatory cycle means nothing. If they become frequent, or the period stays away for more than three months without pregnancy, it is worth a conversation with a doctor. For you it means this: a cycle that does not fit is information, not an error.',
      action:
        'If this cycle has been different from expected, ask whether there has been extra pressure on her, instead of guessing.',
      phaseTags: [],
      sources: [NHS_IRREGULAR],
    },
    {
      id: dailyId(M, 15),
      month: M,
      day: 15,
      title: 'Stress delays ovulation',
      insight:
        "The brain runs the cycle through the hypothalamus, and the hypothalamus is also the body's stress centre. Under prolonged strain, such as illness, grief, lack of sleep, travel or heavy work pressure, the signals that make the follicle mature are dampened. Ovulation is postponed, and because the luteal phase after ovulation is fairly fixed at 12-14 days, the period arrives correspondingly later. The stress has to fall in the first half of the cycle to move ovulation; after ovulation it is too late. That is the body being wise, not weak. A late period after a hard month is normal. Your best help is to remove strain in the follicular phase, where it matters most, not to worry about the date.",
      action:
        'Find one burden you can take off her this week, and do it without mentioning the cycle.',
      phaseTags: ['follicular'],
      sources: [NHS_MISSED],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'Why the date in the app is an estimate',
      insight:
        'The app calculates ovulation by subtracting about 14 days from the expected next period, which in turn is built on the average of her previous cycles. That is the best method without measurements, but it is statistics. Research shows that only a minority of women with a 28-day cycle actually ovulate on day 14; the spread is wide, even among women with regular cycles. The app does not know about this month\'s stress or illness. So the date should be read as "roughly here, give or take a few days". Her own signs, discharge, pain, tests and temperature, beat the app every time. As you log more cycles the estimate improves, but it never becomes a measurement.',
      action:
        'Open the settings and check that the cycle length is based on her own logged cycles and is not still sitting on the default value.',
      phaseTags: [],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'There are no safe days in an app',
      insight:
        'It needs saying plainly: this app is not contraception, and no calendar app is. Sperm live five days, ovulation can shift by a week, and the app guesses from the past. Even the old calendar method with strict rules has a typical failure rate where roughly one in four or five users becomes pregnant within a year. Ovulation tests do not help as contraception either, because they only turn positive when the fertile days are already under way. If you want to avoid pregnancy, you use a real method. If you want to use fertility awareness, it requires training, daily measurements and discipline. This is not about trusting her. It is about biology that cannot be negotiated.',
      action:
        'Tell her you know the app is not contraception, and ask whether your current method feels safe to her.',
      phaseTags: [],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'Fertility awareness: the honest numbers',
      insight:
        'Fertility awareness methods are a family of methods where you avoid sex or use a condom during the fertile window, determined from temperature, discharge and cycle length. Followed perfectly, the best methods are over 95 percent effective. With typical use, where life gets in the way, between roughly 2 and more than 20 out of 100 women become pregnant within a year, depending on the method. For comparison: the coil and the implant are under 1. The methods require instruction, daily recording and a partner who respects the fertile days without argument. That last part is your responsibility. If you are considering it, learn it properly, not from an app.',
      action:
        'If you use or are considering fertility awareness: agree today that the fertile window means condom or a pause, and that you never negotiate about it.',
      phaseTags: [],
      sources: [ACOG_FAB, NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 19),
      month: M,
      day: 19,
      title: 'Contraception is a shared responsibility',
      insight:
        'In the fertile window, responsibility becomes concrete. If you use condoms, that is yours. If she takes the pill, the daily side effects are hers, but reminders, doctor visits and the cost can be shared. If you do not want more children, a vasectomy is a smaller procedure than female sterilisation. The responsibility is not only practical: it is also knowing her method, knowing what happens if a pill is missed, and where emergency contraception is available. Many men cannot say what contraception their partner uses. It is not meant unkindly, but it places the whole burden in one place. This month is a good occasion to move some of it.',
      action:
        'Say it without looking it up: which contraception do you use, and what do you do if it fails? If you cannot, ask today.',
      phaseTags: ['ovulation'],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 20),
      month: M,
      day: 20,
      title: 'What she carries',
      insight:
        'Hormonal contraception is effective, but it is not free for the body. Side effects can include mood changes, lower desire, headaches, spotting, tender breasts and weight change, and the hormones flatten or remove the natural cycle, so much of what you learn here looks different in her. The copper coil can make bleeding heavier, the hormonal coil irregular. It is something she lives with every day, often without mentioning it. On the pill, ovulation is usually suppressed entirely; then the "peak" the app shows is not real. Ask how she feels about her method. Not to change it, but to know what it costs her.',
      action:
        'Ask today: "Is there anything about your contraception you are tired of?" Listen, without suggesting solutions straight away.',
      phaseTags: [],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: 'If you want a pregnancy: timing without stress',
      insight:
        'If you want a child, the advice is simple: sex every two to three days throughout the cycle hits the fertile window without turning it into a project. If you want to be more targeted, the two or three days before ovulation and the day itself matter most. The signs, egg-white discharge and a positive test, say more than the date in the app. For healthy couples under 35, about eight in ten conceive within a year; it takes time, even when everything is normal. Scheduled sex by date wears on the desire of both of you. If you have tried for a year without success, or six months if she is over 35, you both deserve an evaluation. About half of the causes lie with the man.',
      action:
        'If you are trying: say today that this is something you do together, and that she should not be the one keeping track of the dates alone.',
      phaseTags: ['ovulation', 'follicular'],
      sources: [ACOG_INFERTILITY],
    },
    {
      id: dailyId(M, 22),
      month: M,
      day: 22,
      title: 'If you do not want a pregnancy right now',
      insight:
        'Most couples have never properly talked about what they would do about an unplanned pregnancy. It is a hard conversation, and it does not get easier with a positive test in hand. A better time is now, in a calm phase, with no urgent reason. It is not about deciding everything, but about knowing where each of you stands: what would she think, what would you, what would you need. The conversation makes contraception something you share, and removes the quiet fear many carry every month in the run-up to the period. Emergency contraception works best as soon as possible, and a copper coil can be fitted within five days. That is worth knowing before it is needed.',
      action:
        'Have the conversation today, for five minutes: "What would we do if you got pregnant now?" Listen more than you talk.',
      phaseTags: [],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'The luteal phase confirms ovulation',
      insight:
        'After ovulation the empty follicle becomes the corpus luteum, which produces progesterone. It is progesterone that confirms ovulation has happened: temperature rises, discharge dries up, and she often becomes calmer and more inward. The luteal phase lasts 12-14 days regardless of cycle length, because the corpus luteum has a fixed lifespan. If it is shorter than 10 days over several cycles, that can make it harder to conceive and is worth mentioning to a doctor. The shift from the outgoing energy of ovulation to the calm of the luteal phase can come abruptly. It is not that she has grown tired of you. It is progesterone taking over.',
      action:
        'Notice the day when the energy shifts from outgoing to calm, and note it in the calendar. After three cycles you will see a pattern.',
      phaseTags: ['luteal'],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 24),
      month: M,
      day: 24,
      title: 'The period tells you about ovulation',
      insight:
        'The period is a receipt. A regular bleed arriving 12-14 days after the signs of ovulation means the cycle ovulated and worked. During the bleed both hormones are at their lowest, but already now the pituitary starts sending FSH, which begins maturing the follicles for the next cycle. In a sense the next ovulation starts on day 1. Very irregular bleeds, very long cycles or periods that stop altogether often point to ovulation being irregular or absent. That is not dangerous in itself, but it is information a doctor can use, especially if you want children. Log the start of the bleed so the cycle can be worked out.',
      action:
        'If she has her period now: check that day 1 is logged, and ask whether this cycle felt the way it usually does.',
      phaseTags: ['menstrual'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 25),
      month: M,
      day: 25,
      title: 'When ovulation goes missing',
      insight:
        'Several conditions affect ovulation directly. PCOS, polycystic ovary syndrome, affects about one in ten women and often causes rare or absent ovulation, long cycles, skin problems and increased hair growth. Thyroid disease, very low weight, hard training and high prolactin can also stop ovulation. After childbirth and during breastfeeding it is often absent for months, and in the years before menopause it becomes irregular. What they all share: the cycle becomes irregular or stops. If periods come less often than every 35 days, or stay away for three months without pregnancy, it deserves a doctor. You are not there to make the diagnosis. You are there to say it is worth checking, and to come along.',
      action:
        "Look at the calendar: have the last few cycles fallen within 21-35 days? If not, calmly suggest a doctor's appointment and offer to come along.",
      phaseTags: ['menstrual'],
      sources: [NHS_PCOS, NHS_MISSED],
    },
    {
      id: dailyId(M, 26),
      month: M,
      day: 26,
      title: 'Closeness without an agenda',
      insight:
        'For many, the days around ovulation are the best time in the cycle for closeness, but closeness is more than sex. It is sitting close, going for a walk, talking about something other than logistics, being seen. What most often ruins closeness is an agenda: the evening having to end in a particular place. She senses it, and it shifts the mood from being together to negotiating. Paradoxically, physical closeness comes more easily when it is not the goal. Use the energy of ovulation to be together in a way where both of you can relax. That builds the trust that lets closeness exist in the luteal phase too, when the hormones are not helping.',
      action:
        'Suggest a walk or a screen-free evening today, and make it clear it does not have to lead anywhere.',
      phaseTags: ['ovulation'],
    },
    {
      id: dailyId(M, 27),
      month: M,
      day: 27,
      title: 'Log the signs together',
      insight:
        'The app only becomes really useful once the signs are logged: discharge, ovulation pain, desire, energy, spotting, and tests and temperature if used. After three or four cycles you can see how many days after the period the signs typically arrive, and how well the app\'s estimate fits. That turns the app from a generic model into her own. The logging should be hers, because it is her body and her observations, but you can make it easy: ask briefly, remember what she has said, and never use the log against her. "You logged yourself that you were in the mood on Tuesday" is the fastest way to make the logging stop.',
      action:
        'Ask whether there is one sign she would like to log this cycle, and agree that it is her data, not your argument.',
      phaseTags: ['follicular', 'ovulation'],
    },
    {
      id: dailyId(M, 28),
      month: M,
      day: 28,
      title: 'When body and app disagree',
      insight:
        "Sooner or later the app says one thing and the body another. The app predicts ovulation on day 14, but the egg-white discharge does not appear until day 19. Or she feels the stab while the app still shows the follicular phase. The body is right. The app is built on averages and does not know this month. The best thing you can do is trust her over the screen and treat the mismatch as information: the cycle was perhaps longer this time, so the period will come later. If you insist on the app's date, you make her the one who is wrong about her own body. Read the app like a weather forecast: useful, but what you see out of the window wins.",
      action:
        'If the app and her signs disagree this cycle, say it out loud: "Your body knows better than the app." And adjust your expectation for the next period.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 29),
      month: M,
      day: 29,
      title: 'Her body, her knowledge',
      insight:
        'You have learned a lot about ovulation this month. The biggest pitfall now is explaining her own body to her. Many women have followed their cycle for years without using the words LH or corpus luteum, and they know exactly how it feels. Your knowledge is useful when it is used to ask better questions, remember more and act before she asks. It is harmful when it turns into corrections or into expectations about what she should feel on particular days. Some never feel ovulation at all, and that is normal too. The goal is not for you to know more than her. The goal is that she is no longer alone in knowing.',
      action:
        'Tell her one thing you have learned this month, and ask whether it matches her experience. Do not correct her answer.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 30),
      month: M,
      day: 30,
      title: 'Month 5: what you have learned',
      insight:
        'Ovulation is one day, and the fertile window is the five days before plus the day itself. The LH surge triggers it, the egg lives a day, sperm live five days. The body shows signs: egg-white discharge before, a temperature rise after, and for some a pain on one side or light spotting. Desire, energy and confidence often peak, but a no always counts. Stress delays ovulation, not every cycle has one, and the date in the app is an estimate, never contraception. Contraception and fertility are shared responsibilities, and fertility awareness is a real method with real requirements, not a calendar. Most important: knowledge is for asking, noticing and helping, not for expecting.',
      action:
        'Write down three things you will do differently around ovulation from the next cycle, tell her what they are, and take the quiz for the month.',
      phaseTags: [],
    },
  ],
  weekly: [
    {
      id: weeklyId(M, 1),
      month: M,
      week: 1,
      title: 'Ovulation in detail: from LH surge to corpus luteum',
      body: [
        'Month 1 gave you the basic model: ovulation is the midpoint of the cycle, and it falls about 14 days before the next period. This article goes one layer deeper. Not because you need to become a biologist, but because the details explain why the signs appear, when they appear, and why the date in the app can only ever be an estimate.',
        'It starts on day 1. While she is bleeding, the pituitary sends FSH, follicle-stimulating hormone, to the ovaries, and a group of 10-20 small follicles begins to grow. Each follicle holds an egg. During the first week one becomes dominant, and the rest wither away. The dominant follicle produces more and more estrogen, and that rise is what gives the follicular phase its energy and makes the uterine lining grow again.',
        'Once estrogen has stayed high for a couple of days, something unusual happens: the brain, which otherwise dampens itself at high estrogen, does the opposite and sends a sharp wave of LH, luteinising hormone. The LH surge typically lasts a day. It makes the follicle finish maturing the egg, weaken its wall and rupture. 24-36 hours after the surge the egg is released and caught by the fallopian tube. That is ovulation. It is rarely felt as an event; for most, what they notice is the days before (discharge, desire, energy) and the days after (temperature, calm).',
        'The egg lives 12-24 hours. Sperm live up to five days in the thin, slippery mucus that estrogen makes the cervix produce just before ovulation. Put the two together and you have the fertile window: the five days before ovulation plus the day itself. The chance is greatest in the two or three days just before. The day after ovulation pregnancy is very unlikely, but because nobody knows exactly when ovulation was until it is over, you cannot count backwards in real time.',
        'The empty follicle becomes the corpus luteum, which produces progesterone. Progesterone raises temperature, thickens the mucus again, matures the lining and settles the mood into something calmer. The corpus luteum lives 12-14 days. If the egg is not fertilised, it dies, the hormones fall, and the period comes. If it is fertilised, the pregnancy hormone hCG keeps the corpus luteum alive. That is why the luteal phase is so stable in length, and why the app counts ovulation backwards from the period: it is the first half that varies.',
        "And it varies a lot. Studies of thousands of cycles show that ovulation on day 14 only applies to a minority, even among women with regular 28-day cycles. Ovulation anywhere between day 10 and day 20 is common, and the same woman can vary by several days from month to month. Stress, illness and travel delay ovulation because they dampen the brain's signals to the ovaries. And some cycles have no ovulation at all; the period then often arrives late and different.",
        "That is why the date in the app is an estimate. It rests on the average of her previous cycles and on the luteal phase being about 14 days. It is the best possible calculation without measurements, but it does not know about this month. Her own signs, which next week's article is about, are always more precise. And neither of them, app or signs, is contraception.",
        'What you can take from the biology comes down to three things. Ovulation is one day. The fertile window lies before it, not after. And her best days, energy-wise, are often the days leading up to ovulation, when estrogen peaks, not the day the app marks. Know those three, and you understand most of what happens in the middle of the cycle.',
      ],
      conversationQuestion:
        'Can you feel when you ovulate, and how does it match the day the app shows?',
      sources: [ACOG_CYCLE, NHS_PERIODS],
    },
    {
      id: weeklyId(M, 2),
      month: M,
      week: 2,
      title: "The body's signs: how to read them together",
      body: [
        'The app guesses. The body knows. This week is about the four signs that tell you where she is in relation to ovulation: discharge, temperature, pain and ovulation tests. None of them is perfect alone, but together they give a picture far more precise than any calculation. And they are her signs. Your role is to know them, ask about them and make them easy to log, not to monitor.',
        'Cervical discharge is the sign that is easiest to follow daily. Just after the period there is often little or nothing, and it feels dry. As estrogen rises there is more, first creamy and whitish. In the last days before ovulation it becomes clear, slippery and stretchy like raw egg white; it can be stretched between two fingers without breaking. That is mucus designed to keep sperm alive and guide them forward. The last day of egg-white discharge typically falls on the same day as ovulation or the day before. After ovulation, progesterone makes it thick, sticky and sparse within a day or two. Discharge that smells strongly, itches or is green-yellow is something else and deserves a doctor.',
        'Basal body temperature is the resting temperature, taken every morning at the same time, before getting up, with a thermometer showing two decimals. In the first half of the cycle it is low. After ovulation, progesterone raises it by 0.2-0.5 degrees, and it stays up until the period comes. The shift confirms ovulation afterwards; it does not predict it. The reading is disturbed by fever, alcohol, poor sleep, late nights and travel, so a single day says nothing. It is the curve over three or four cycles that is valuable. It is a daily effort, and whether she wants to do it is her choice. If she does, you can help by keeping the morning quiet until she has measured.',
        'Ovulation pain, mittelschmerz, is felt by around one in five women. A stab or a dull ache on one side of the lower abdomen, typically for hours, rarely more than a day. It comes around the rupture of the follicle, so it is a reasonably precise sign if she has it. Severe pain, pain with fever or vomiting, or pain over several days is something else. Some also see light spotting mid-cycle; that is normal if it is sparse and brief, but repeated bleeding outside the period deserves a doctor.',
        'Ovulation tests measure LH in urine. A positive test means the LH surge is under way and ovulation typically follows 24-36 hours later. They are the most precise home method for predicting the day. They require daily testing from a few days before expected ovulation, ideally around midday, and they can be misleading in women with PCOS, who often have constantly raised LH. Important: the test shows that the body is trying to ovulate, not that the egg is released. And it is not contraception: by the time it is positive, the most fertile days are already under way.',
        'Put the signs together and they tell a story. Egg-white discharge and a positive test say "soon". The pain says "now". The temperature rise and dry discharge say "done". Logged over three or four cycles, they reveal how many days after the period her ovulation typically comes, and how well the app\'s estimate fits. That is how the app stops being a generic model and becomes hers.',
        'Two things for you. First: she sees the same content, and she may have followed her signs for years without using the words. Ask before you explain. Second: the log is hers. It is valuable because she owns it. If she senses that you use it to expect something, she will stop logging, and that is not her fault. Help by making it easy, remembering what she has said, and acting on the practical: heat for ovulation pain, quiet in the morning, buying tests if you use them.',
      ],
      conversationQuestion:
        'Which signs of ovulation do you notice yourself, and are there any of them you would like me to know about?',
      sources: [NHS_DISCHARGE, NHS_OVULATION_PAIN, ACOG_FAB],
    },
    {
      id: weeklyId(M, 3),
      month: M,
      week: 3,
      title: 'Desire, closeness and a no that counts',
      body: [
        'Around ovulation, estrogen peaks and a little testosterone comes with it. For many women that brings more desire, more initiative, more confidence and more appetite for company. It is biology working towards pregnancy, whether or not pregnancy is wanted. And it is the part of the cycle where most partners make the same mistake: reading a hormone pattern as a promise.',
        'Let us take the mechanism first. Estrogen raises serotonin and dopamine in the brain, which gives energy, motivation and good mood. Testosterone, which women also produce in small amounts, peaks around ovulation and is linked to desire and initiative. Studies point to small but measurable changes in the days before ovulation: women talk more, seek more company, feel more attractive. It is not a personality change; it is the same person with a little more to give. In the luteal phase, progesterone often dampens desire, and in the PMS days and the first days of the period the body is typically most closed. Some experience the exact opposite, and that is normal too.',
        'What the pattern is good for is understanding. Low desire on day 24 is rarely about you. High desire on day 13 is not something you earned. Once you know the rhythm, you stop taking it personally in either direction, and that is a great relief for a relationship. What the pattern is not good for is expecting. Hormones are a backdrop. Tiredness, stress, a conflict from yesterday, children, work and how she feels about her body right now trump the backdrop every single time.',
        'So here is the rule, and it is not up for negotiation: a no counts, even at the peak of desire. If you have read that desire peaks around ovulation and she says no, the answer is no. Not "no, but the app said". Not a sulky silence. Not a "why not?". Just no, and then another good evening. She sees exactly the same content you do. If she senses you are counting on something because the app said so, the app becomes pressure, and then you both lose what it was meant to give you. Closeness she has initiated herself is the best kind, and it only comes if she is certain that a no is free.',
        'Closeness is also more than sex. For many, the days around ovulation are the best time in the cycle to be together: a walk, a conversation about something other than logistics, laughing, planning something. What most often ruins closeness is an agenda, the evening having to end in a particular place. She senses it, and the mood shifts from being together to negotiating. Paradoxically, physical closeness comes more easily when it is not the goal. So use the energy to be together in a way where both of you can relax. That builds the trust that lets closeness exist in the luteal phase too, when the hormones are not helping.',
        'The energy of ovulation is not only for the two of you either. It is a good time for her to see friends, go to something, say yes to something social. Wanting to do something without you is not a rejection of you. It is energy that needs to be spent, and the best gift is to hold the fort at home while she spends it.',
        'Finally: if desire is gone for a long time, in every phase, it is worth talking about and perhaps mentioning to a doctor. Hormonal contraception, antidepressants, lack of sleep, pain during sex and stress can all dampen desire, and much of it can be helped. But that is a conversation, not troubleshooting, and it starts with "how are you doing?", not with "you used to".',
      ],
      conversationQuestion:
        'How do you notice your own desire shifting across the cycle, and what makes it easiest for you to say no without feeling you have to explain?',
      sources: [ACOG_CYCLE],
    },
    {
      id: weeklyId(M, 4),
      month: M,
      week: 4,
      title: 'Fertility awareness and shared responsibility',
      body: [
        'The fertile window is there whatever you hope for. For some couples it is an opportunity, for others a risk, for most both at different times of life. This article is about what lies between knowing and doing: how the cycle is actually used, what the methods can and cannot do, and why the responsibility is never hers alone.',
        'First, what the app is not. It is not contraception. It predicts ovulation from averages, sperm live five days, and ovulation can move by a week because of a cold. Even the old calendar method, where cycle lengths are calculated by fixed rules, has a typical failure rate where roughly one in four or five users becomes pregnant within a year. An app showing a window is even less than that. Ovulation tests do not help as contraception either; they only turn positive when the most fertile days are already under way.',
        'Then there is fertility awareness, or fertility awareness-based methods. It is a family of methods where the woman records signs every day, typically basal temperature and discharge, sometimes combined with cycle length, and the couple avoids sex or uses a condom in the fertile window. With perfect use the best methods are over 95 percent effective. With typical use, where readings are forgotten, signs misread and rules bent, between roughly 2 and more than 20 out of 100 women become pregnant within a year, depending on the method and how well it was learned. For comparison, fewer than 1 in 100 become pregnant with the coil or the implant. The methods require instruction, ideally from a trained teacher, daily recording, reasonably regular cycles, and a partner who respects the fertile days without argument. That last point is the whole difference between perfect and typical use, and it is yours.',
        'If you want a pregnancy, the picture flips. Then the advice is simple: sex every two to three days through the cycle hits the window without turning it into a project. If you want to be more targeted, the two or three days before ovulation and the day itself matter most, and egg-white discharge and a positive test say more than the date in the app. For healthy couples, about eight in ten conceive within a year; it takes time, even when everything is normal. If you have tried for a year without success, or six months if she is over 35, you both deserve an evaluation. About half of the causes of infertility lie wholly or partly with the man, so the evaluation is yours too.',
        'Then the responsibility. If you use condoms, that is yours. If she uses hormonal contraception, she carries the side effects every day: mood, desire, headaches, spotting, and often a cycle that is completely different from the one you have learned about here. What you can take is everything around it: knowing the method, remembering what to do if a pill is missed, knowing where emergency contraception is available, coming to the doctor, sharing the cost, buying tests and condoms, and once the family is complete, considering a vasectomy, which is a smaller procedure than female sterilisation. Many men cannot say what contraception their partner uses. It is not meant unkindly, but it puts the whole burden in one place.',
        'And then there is the conversation most couples skip: what would we do if she got pregnant now? It is hard, and it does not get easier with a positive test in hand. Have it in a calm phase, with no urgent reason, not to decide everything, but to know where each of you stands. That conversation makes contraception something you share, and removes the quiet fear many carry alone every month in the run-up to the period.',
        'In short: the app is for understanding, not contraception. Fertility awareness is a real method with real requirements and real failure rates, not a calendar. Fertility and contraception are shared, in practice and not only in principle. And the best way to show it is not to say it, but to take on one concrete task that has so far been hers.',
      ],
      conversationQuestion:
        'Which part of the responsibility for contraception or fertility sits with you right now that I could take over or share?',
      sources: [NHS_CONTRACEPTION, ACOG_FAB, ACOG_INFERTILITY],
    },
  ],
  wrap: {
    id: wrapId(M),
    month: M,
    title: 'Month 5: Ovulation',
    summary: [
      'This month went beneath the surface of the midpoint of the cycle. The LH surge triggers ovulation 24-36 hours later, the egg lives a day, sperm up to five, and that gives a six-day fertile window that lies before ovulation. The body shows signs: egg-white discharge and a positive test before, a temperature rise and dry discharge after, and for some a pain on one side or light spotting.',
      'You have learned that desire, energy and confidence often peak in the days before ovulation, and that a no still counts without explanation. That stress delays ovulation, that not every cycle has one, and that the date in the app is an estimate her signs always beat. That there are no safe days in an app, that fertility awareness is a real method with real requirements and failure rates, and that contraception and fertility are shared responsibilities in practice, not only in principle.',
      'Next month is about the luteal phase: progesterone, sleep, appetite and the calm, inward time after ovulation, where the job is to lower expectations and raise care.',
    ],
    keepDoing: [
      'Trust her signs over the date in the app, and say so out loud when they disagree.',
      'Make it easy to log discharge, pain and tests, and never use the log as an argument.',
      'Respect a no without explanation, in the middle of the cycle too.',
      'Know your contraception, and take on one concrete part of the responsibility that has so far been hers.',
      'Remove strain in the follicular phase, where stress matters most for ovulation.',
    ],
    quiz: [
      {
        question:
          'The app shows ovulation today, but she says she felt the stab on one side three days ago. What helps most?',
        options: [
          'Explain that the app is probably right because it works from averages',
          'Trust her signs and adjust your expectation for the next period',
          'Suggest she takes an ovulation test to settle it',
          'Say nothing and wait for the next cycle',
        ],
        correctIndex: 1,
        explanation:
          'The body is right. The date in the app is an estimate from previous cycles; her signs are an observation of this one. If you insist on the app, you make her the one who is wrong about her own body.',
      },
      {
        question:
          'You do not want a pregnancy right now. What can the fertile window in the app be used for?',
        options: [
          'To find safe days when you can skip the condom',
          'To understand her body and talk about your contraception, never as contraception',
          'To know when to use ovulation tests as a safeguard',
          'Nothing, it is only relevant if you want children',
        ],
        correctIndex: 1,
        explanation:
          'Sperm live five days, and ovulation can shift by a week. The app guesses from the past and is never contraception. The window is for understanding and for the conversation about shared responsibility.',
      },
      {
        question: 'It is the middle of the cycle, and she says no to sex. What do you do?',
        options: [
          'Mention that desire is usually high around now',
          'Go quiet and a little sulky for the rest of the evening',
          'Say "totally fine" and suggest a walk or a quiet evening instead',
          'Ask whether she might have PMS',
        ],
        correctIndex: 2,
        explanation:
          'A no counts, even at the peak of desire. Hormones are a backdrop, not a promise. Closeness comes most easily when she is certain that a no is free.',
      },
      {
        question:
          'Her period is ten days late after a month of illness and work pressure. What is the best response?',
        options: [
          'Say it is strange and worry out loud',
          'Calmly ask whether there has been pressure on her, and let a pregnancy test settle the rest if relevant',
          'Change the cycle length in the app so the date fits',
          'Assume the app is broken',
        ],
        correctIndex: 1,
        explanation:
          'Stress and illness in the first half of the cycle delay ovulation, and the period follows 12-14 days later. A late period after a hard month is normal; a test gives peace of mind if there is doubt.',
      },
      {
        question:
          'You are considering fertility awareness as contraception. What helps most from your side?',
        options: [
          'Say that the app already shows the fertile window, so that is enough',
          'Leave it to her, it is her body after all',
          'Learn the method properly together and agree that the fertile days mean condom or a pause, without argument',
          'Use ovulation tests as extra safety in the window',
        ],
        correctIndex: 2,
        explanation:
          "The difference between perfect and typical use is whether the rules are followed every time, and that is as much the partner's responsibility as hers. The app and ovulation tests are not contraception.",
      },
      {
        question: 'Her cycles have been 45-60 days long for six months. What helps most?',
        options: [
          'Say it must be nice to have fewer periods',
          "Calmly suggest a doctor's appointment, because it can mean irregular ovulation, and offer to come along",
          'Wait a year and see if it sorts itself out',
          'Tell her it sounds like PCOS',
        ],
        correctIndex: 1,
        explanation:
          'Cycles over 35 days for several months often point to irregular or absent ovulation. That deserves a doctor, not a diagnosis from you, and coming along is concrete support.',
      },
    ],
  },
};
