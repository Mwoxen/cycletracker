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
const NHS_PMS: Source = {
  label: 'NHS: PMS',
  url: 'https://www.nhs.uk/conditions/pre-menstrual-syndrome/',
};
const NHS_PAIN: Source = {
  label: 'NHS: Period pain',
  url: 'https://www.nhs.uk/conditions/period-pain/',
};
const NHS_ENDO: Source = {
  label: 'NHS: Endometriosis',
  url: 'https://www.nhs.uk/conditions/endometriosis/',
};
const NHS_HEAVY: Source = {
  label: 'NHS: Heavy periods',
  url: 'https://www.nhs.uk/conditions/heavy-periods/',
};

const M = 1;

export const month01: MonthContent = {
  month: M,
  theme: 'The cycle from A to Z',
  focus: 'Understand the four phases and learn to read where she is today.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'Day 1 is the first day of bleeding',
      insight:
        'A cycle is counted from the first day of real bleeding to the day before the next bleeding starts. The first day of bleeding is cycle day 1, not the day the bleeding stops. That date is what everything else in the app is calculated from: the phase, the expected ovulation and the next period. A typical cycle is 28 days, but anything between 21 and 35 days is normal for adults, and few women hit exactly the same length every time. Your job today is not to understand all of it, but to get the one date in place that the rest is built on.',
      action:
        'Ask her when the last period started, and log the date in the app if it is not already there.',
      phaseTags: [],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: 'Four phases, one rhythm',
      insight:
        'The cycle has four phases: menstruation (the bleeding), the follicular phase (energy returns), ovulation (the peak) and the luteal phase (calmer, and eventually PMS). The first half is driven by rising estrogen; the second half by progesterone, which first rises and then falls. It is the ups and downs of those hormones that make energy, mood, sleep and desire shift across the month. Once you know the rhythm, the shifts stop catching you off guard.',
      action:
        'Open the Home screen, see which phase she is in today, and read the short phase entry under "The phases".',
      phaseTags: [],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 3),
      month: M,
      day: 3,
      title: 'Estrogen and progesterone, in short',
      insight:
        'You only need two hormones to understand most of it. Estrogen builds up: it rises from the end of the period towards ovulation and brings energy, clarity and desire. Progesterone holds back: it rises after ovulation, has a calming, slightly drowsy effect and raises body temperature a touch. When both drop sharply in the week before the period, it is felt as PMS. That is not "mood swings out of nowhere", it is a hormone drop with a predictable timing.',
      action:
        'Say the sentence out loud to yourself: "Estrogen up = energy. Progesterone up = calm. Both down = vulnerable." That is the whole model.',
      phaseTags: [],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'What actually happens during the period',
      insight:
        'The bleeding is the uterine lining being shed because there was no fertilised egg to hold on to. The uterus contracts to push it out, and those contractions are the cramps. At the same time both hormones are at rock bottom, so energy is low, especially on day 1 and 2. The total blood loss is typically only 30-40 ml over the whole period, but it can feel like far more, and with the blood she loses iron. A period normally lasts 2-7 days.',
      action:
        'If she has her period now: take one practical chore off her hands without asking. If not: notice what typically bothers her the first days.',
      phaseTags: ['menstrual'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'Cramps: heat works',
      insight:
        'Period pain is caused by substances called prostaglandins, which make the uterus contract. More prostaglandin, stronger cramps. Heat on the belly or lower back relaxes the muscle and measurably eases the pain, and it is one of the best documented home remedies there is. Over-the-counter painkillers like ibuprofen work best if taken at the first signs, not when the pain is already at its peak. Light movement, like a walk, also helps more people than you would think.',
      action:
        'Make sure there is a heating pad or hot water bottle in the house and that she knows where it is. It is a one-off investment in many good days.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: 'Fatigue and iron',
      insight:
        'The fatigue in the first days of the period has two sources: low hormones and loss of iron with the blood. Iron carries oxygen around the body, and even a small deficit is felt as a heavy body and a short fuse. Women with heavy periods have a markedly higher risk of iron deficiency. Iron is absorbed best from meat, fish and eggs, while iron from plants (lentils, beans, leafy greens) is absorbed better together with vitamin C. Coffee and tea with the meal reduce absorption.',
      action:
        'Make or order a meal with iron today: beef, lentils, chickpeas or spinach, ideally with something citrus on the side.',
      phaseTags: ['menstrual'],
      sources: [NHS_HEAVY],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'What is a normal amount of bleeding?',
      insight:
        'Blood loss is hard to judge from the outside, so here are the signs doctors use: needing to change a pad or tampon every hour for several hours in a row, bleeding lasting more than 7 days, clots bigger than a coin, or bleeding that makes her avoid going out. That is called heavy menstrual bleeding and affects about one in four women at some point. It can be treated, but many live with it because they think it is normal. Your knowledge makes a difference here.',
      action:
        'Check that there are pads or tampons in the house in the kind she uses. If you do not know which, ask. It is not awkward, it is practical.',
      phaseTags: ['menstrual'],
      sources: [NHS_HEAVY],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: 'The energy comes back',
      insight:
        'When the bleeding stops, the follicular phase begins in earnest. The pituitary sends the signal FSH, and a group of egg follicles in the ovaries start to mature. They produce estrogen, which rises day by day. Estrogen boosts serotonin and dopamine in the brain, so mood, energy and motivation rise with it. Many describe it as "coming back to themselves". It is often the most comfortable week of the cycle, and it comes right after the most demanding one.',
      action:
        'Notice the shift and say it out loud: "It seems like you have your energy back." Being seen in the good days matters as much as in the hard ones.',
      phaseTags: ['follicular'],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'Plan the big things now',
      insight:
        'The follicular phase is the best time in the cycle for anything that takes energy: guests, trips, hard workouts, big decisions, difficult conversations. Estrogen makes the brain more open to new things and more stress-resilient. That does not mean she is "herself" now and "not herself" the rest of the month. It means timing is free help. The same conversation can go well on day 9 and sideways on day 26 without either of you doing anything differently.',
      action:
        'Suggest one thing to do together this week that takes a bit of energy. Look at the calendar and put it before ovulation.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 10),
      month: M,
      day: 10,
      title: 'How long is a normal cycle?',
      insight:
        'For adults, 21-35 days is normal, and the average is around 28. The cycle is rarely exactly the same length every time; a variation of a few days is completely common. It is the first half, the follicular phase, that varies most. The luteal phase after ovulation is fairly stable at 12-14 days. That is why the app counts ovulation backwards from the expected period, not forwards from day 1. After a couple of logged cycles the estimate improves, because it is based on her average instead of a default number.',
      action:
        'Open settings and check that the cycle length matches what she says herself. If in doubt, leave the default, the app adjusts over time.',
      phaseTags: [],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'Why the cycle moves',
      insight:
        'Stress, illness, poor sleep, travel across time zones, weight changes and hard training can all delay ovulation, and then the period comes later. It is the body saying: not right now. Breastfeeding, perimenopause, PCOS and thyroid issues also affect the cycle. A single late or early period rarely means anything. If the cycle is consistently shorter than 21 days, longer than 35, or missing for more than three months without pregnancy, it is worth a conversation with a doctor.',
      action:
        'If the period is late, ask curiously, not worried: "Has there been a lot of pressure this month?" That is more often the explanation than anything else.',
      phaseTags: [],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: 'Talking about it without making it awkward',
      insight:
        'Many couples only talk about the cycle when something is wrong. That makes the subject loaded. It helps to talk about it when everything is fine, in small doses and with curiosity rather than analysis. "I am trying to learn how your cycle affects you so I can be better at helping" is a sentence most people receive well. Avoid explaining her own body to her, and avoid using the phase as an explanation for her opinions. Ask, and listen.',
      action:
        'Tell her you are using the app and why. Ask if there is anything she would especially like you to pay attention to.',
      phaseTags: ['follicular', 'ovulation'],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: 'Ovulation: the midpoint of the cycle',
      insight:
        "When estrogen peaks, it triggers a sharp surge in the hormone LH. 24-36 hours later the mature follicle bursts and the egg is released. The egg lives only 12-24 hours. That is what ovulation is: one day, not a week. It typically happens 14 days before the next period, so in a 28-day cycle around day 14, in a 32-day cycle around day 18. The app's date is an estimate from averages, not a measurement. Body signs and ovulation tests are more precise.",
      action:
        'Look at the app\'s estimated ovulation date for this cycle, and read the entry on ovulation under "The phases".',
      phaseTags: ['ovulation', 'follicular'],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'The fertile window is a shared responsibility',
      insight:
        "Sperm can survive up to five days in the uterus, and the egg lives for a day. So the fertile days are the five days before ovulation plus the day itself: six days in total. That holds whether you want a pregnancy or not. If you do not, this is where contraception matters most, and it is not her job alone. If you do, the days leading up to ovulation matter more than the day after. Never use the app's window as contraception; it is an average, and cycles move.",
      action:
        'Talk about how you both feel about your contraception right now, and whether the responsibility is fairly shared. Five minutes is enough.',
      phaseTags: ['ovulation'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 15),
      month: M,
      day: 15,
      title: 'Signs of ovulation',
      insight:
        'The body often shows that ovulation is near. Discharge becomes clear, slippery and stretchy, like egg white. Some feel a brief twinge or ache on one side of the lower abdomen when the follicle bursts. Desire is often higher, skin clearer, and mood at its peak. After ovulation body temperature rises 0.3-0.5 degrees and discharge becomes thicker again. If you follow the signs over a few months, you both get far better at knowing where she is in the cycle than any app.',
      action:
        'Ask if she can feel when she ovulates and what she notices. Many can, and few have been asked.',
      phaseTags: ['ovulation'],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'Desire through the cycle',
      insight:
        'Desire moves with the hormones. Around ovulation estrogen and a little testosterone peak, and many feel more desire and more capacity for closeness. In the luteal phase progesterone often dampens desire, and in the PMS days and the first period days the body is typically most closed. Some experience the exact opposite, and that is normal too. The point is not to plan by a table, but to stop taking low desire personally at certain times of the month.',
      action:
        'Make it clear that closeness is not an expectation on the heavy days, and that you appreciate it when it comes.',
      phaseTags: ['ovulation', 'luteal'],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'The luteal phase: progesterone takes over',
      insight:
        'After ovulation the empty follicle becomes the corpus luteum, which produces progesterone. Progesterone prepares the uterine lining for a possible fertilised egg, raises body temperature slightly and has a calming, almost drowsy effect. The first week after ovulation therefore often feels calm and homely. The energy is not gone, but it is turned inward. If the egg is not fertilised, the corpus luteum dies after 12-14 days, the hormones fall, and the period begins.',
      action:
        'Suggest a quiet evening at home rather than asking "what do you want?". Concrete, easy suggestions are a gift in this phase.',
      phaseTags: ['luteal'],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'Sleep and temperature',
      insight:
        'Progesterone raises body temperature 0.3-0.5 degrees throughout the luteal phase. That is little, but enough that many sleep worse, wake at night or feel hot. Combined with the hormone drop in the last week, poor sleep is one of the most overlooked reasons the PMS days feel so hard. A cool bedroom, a lighter duvet and calm in the evening help more than you would think.',
      action:
        'Make the bedroom cooler tonight: air it out, turn the heating down, or offer to swap to the lighter duvet.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 19),
      month: M,
      day: 19,
      title: 'Hunger and cravings are not a lack of willpower',
      insight:
        'In the luteal phase the body burns around 100-300 more calories a day, and progesterone increases appetite. At the same time serotonin falls as estrogen falls, and the body reaches for fast carbohydrates to compensate. The craving for sweet, salty and chocolate in the week before the period is biology, not weak character. Regular meals, protein and fibre smooth out the swings, and hunger amplifies irritability more than anything else in this phase.',
      action:
        'Make sure there are good snacks in the house this week: nuts, dark chocolate, fruit, yoghurt. And say nothing when they get eaten.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 20),
      month: M,
      day: 20,
      title: 'Bloated, tender and not in the mood for comments',
      insight:
        'Progesterone makes the body retain water. The belly gets bloated, the breasts swell and become tender, and clothes fit differently. It is temporary and completely normal, but it affects body image more than many partners realise. Comments about belly, weight or "you look tired" land hard this week, even when kindly meant. Physical closeness should be gentle, especially around the breasts.',
      action:
        'Say something genuine and specific you appreciate about her today that is not about appearance.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: 'PMS: the amplifier',
      insight:
        'PMS is the physical and emotional symptoms that come in the days before the period and disappear when the bleeding starts. The cause is the sharp drop in progesterone and estrogen, which the brain answers with lower serotonin. About three in four notice it, and 3-8 percent have the severe form, PMDD, which is a real condition with treatment. Important: PMS does not invent feelings. It amplifies them. What annoys her on day 26 is often real, but sounds louder.',
      action:
        'Find the PMS window in the app for this cycle, and decide to be the one with patience in reserve on those days.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 22),
      month: M,
      day: 22,
      title: 'Respond to the need, not the tone',
      insight:
        'In the PMS days, messages often come wrapped in a sharper tone than intended. "You didn\'t empty the dishwasher" can mean "I am exhausted and feel I am carrying everything alone". If you respond to the tone, you get a conflict about the tone. If you respond to the need, she gets help and the tone disappears on its own. It requires counting to three and not needing to be right just now. That is not the same as putting up with anything; it is choosing your moment.',
      action:
        'Next time the tone gets sharp: say "it sounds like you are under pressure, what can I take off your plate?" instead of defending yourself.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'Timing difficult conversations',
      insight:
        'Most couples have a few standing topics that cause friction: money, family, division of chores, the future. The conversations are necessary, but the timing is optional. In the last 4-5 days before the period, stress resilience is lowest and emotions highest, so the same conversation ends in conflict more often. That is not a reason to avoid the topic for a week, but to deliberately place it in the follicular phase, where there is capacity to hear each other.',
      action:
        'If there is a hard conversation you have been waiting to have, check the calendar and put it outside the PMS window.',
      phaseTags: ['luteal', 'follicular'],
    },
    {
      id: dailyId(M, 24),
      month: M,
      day: 24,
      title: 'Sentences that never help',
      insight:
        '"Are you PMS-ing?" "It\'s just the hormones." "You are overreacting." All three do the same thing: they say her experience does not count. Even when the hormones really are amplifying, the feeling is real, and having it dismissed makes it bigger. The opposite works: acknowledge first and talk about timing afterwards if needed. "I can hear this is hitting hard right now" opens things up. "Can we take this tomorrow when we are both fresh?" is fine to say once the acknowledgement has come first.',
      action:
        'Pick one sentence from the list you have used yourself, and decide on an alternative you will say next time.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 25),
      month: M,
      day: 25,
      title: 'Pain that knocks her out is not normal',
      insight:
        'Ordinary period pain is unpleasant but manageable with heat and over-the-counter painkillers. Pain that makes her call in sick, throw up, be unable to stand upright, or that also comes outside the period, is not "just the period". Endometriosis affects about 1 in 10 women, and on average it takes 7-10 years to get the diagnosis, precisely because the pain gets normalised. You cannot make the diagnosis, but you can be the one who says: this deserves a doctor.',
      action:
        'Ask how bad it usually is on a scale from 1 to 10, and whether it has ever stopped her from doing things. Listen without minimising.',
      phaseTags: ['menstrual', 'luteal'],
      sources: [NHS_ENDO, NHS_PAIN],
    },
    {
      id: dailyId(M, 26),
      month: M,
      day: 26,
      title: 'Why the calendar helps you both',
      insight:
        'A logged cycle is not surveillance, it is memory. After two or three cycles you can see whether the headache always comes on day 25, whether sleep fails in the luteal phase, whether the irritation has a fixed date. It takes the guesswork out. She gets confirmation that there are patterns and not just "bad days", and you get a diary you can act on instead of being surprised. The calendar only works if it is logged. It has to be easy, and it has to be hers.',
      action:
        'Look at the calendar together for five minutes. Ask if there is anything she would like logged that the app does not ask about.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 27),
      month: M,
      day: 27,
      title: 'Find the first pattern',
      insight:
        'You have almost followed a full cycle. Even after one there is something to learn: which day the energy turned, when the irritation came, whether sleep changed, what helped during the period. Patterns only become really clear after three or four cycles, but what you notice now is the beginning. Write it down. Memory of how last month was is notoriously poor, especially for the days that were hard.',
      action:
        'Write down one thing you have noticed this cycle in the note on a day in the calendar. Just one.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 28),
      month: M,
      day: 28,
      title: 'Ready for the next period',
      insight:
        'When the app says the period is expected in a couple of days, it is time to prepare. Nothing big, just practical: are there pads or tampons, painkillers, something easy to eat, a heating pad that works? Is the calendar reasonably empty for the next two days? Preparation is invisible when it works; she just notices that it is easier than last time. It is in small things like these that understanding becomes action.',
      action:
        'Check the four things: pads/tampons, painkillers, easy food, heat. Stock up where something is missing.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 29),
      month: M,
      day: 29,
      title: 'Your role: not to fix, but to be there',
      insight:
        'Many partners want to solve. The cramps, the mood, the fatigue. But most of it cannot be fixed, only made easier to carry. What helps is often simple: that she does not have to explain herself, that the practical things get done, that you do not get offended by low energy, and that you stay. The question "do you want solutions or just an ear?" saves many misunderstandings, because the answer changes from day to day, and from phase to phase.',
      action:
        'Ask the question next time she tells you about something hard: "Do you want suggestions, or should I just listen?" Then do what she answers.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 30),
      month: M,
      day: 30,
      title: 'Month 1: what you have learned',
      insight:
        'You now know that day 1 is the first day of bleeding, that the cycle has four phases driven by estrogen and progesterone, and that most shifts in energy, mood, sleep and desire have a timing that can be predicted. You know that heat works on cramps, that iron and sleep matter, that PMS amplifies rather than invents, and that timing conversations is free help. Most importantly: you know that your job is to notice, ask and act on the practical. The rest of the year builds on that.',
      action:
        "Write down three things you have learned this month and tell her. Then take the month's quiz.",
      phaseTags: [],
    },
  ],
  weekly: [
    {
      id: weeklyId(M, 1),
      month: M,
      week: 1,
      title: 'The cycle in five minutes',
      body: [
        'If you only read one article in this app, make it this one. It explains what happens during a cycle and why it matters to you as a partner.',
        'A menstrual cycle begins on the first day of real bleeding, day 1, and ends the day before the next bleeding. The average is 28 days, but 21-35 is normal, and most women vary by a few days from one cycle to the next. What varies is almost always the first half. The second half, the time after ovulation, is fairly stable at 12-14 days.',
        'The cycle is run by two main hormones. Estrogen builds up. It rises from the end of the period towards ovulation, and with it energy, mood, clarity and desire rise. Progesterone holds back. It rises after ovulation, has a calming and slightly drowsy effect, raises body temperature a touch and increases appetite. When both hormones drop sharply in the week before the period, it is felt as PMS.',
        "Based on the hormones, the cycle is divided into four phases. Menstruation, day 1 to about 5, when the lining is shed, hormones are at the bottom and energy is low. The follicular phase, about day 6 to 13, when estrogen rises and she gets her capacity back. Ovulation, about day 14, when an egg is released and lives for a day; often the cycle's highest energy and desire. And the luteal phase, about day 15 to 28, when progesterone first brings calm and then, in the last week, falls and produces PMS symptoms: irritability, vulnerability, bloating, hunger and poor sleep.",
        'Why does this matter to you? Because most of the things that can feel unpredictable actually have a timing. Low desire on day 26 rarely has anything to do with you. A short fuse on day 25 is often a hormone drop amplifying something real. Energy on day 9 is a good time for the big things. Once you know the rhythm, you stop being surprised, and you can start acting before she has to ask.',
        'That is not the same as saying she is "controlled by hormones". Everyone is affected by sleep, hunger, stress and hormones. The difference is that the cycle has a calendar. And that calendar you can learn to read.',
        'The single most important thing you can do this week is to get day 1 into the app. Everything else is calculated from that date. After that it is about noticing: when does the energy return, when does the irritation come, what helps. That is not surveillance. It is taking her seriously enough to remember.',
      ],
      conversationQuestion:
        'When in your cycle do you feel best, and when is it hardest? What do you wish I knew about the hardest days?',
      sources: [NHS_PERIODS, ACOG_CYCLE],
    },
    {
      id: weeklyId(M, 2),
      month: M,
      week: 2,
      title: 'The period: the practical and the emotional',
      body: [
        'The period is the part of the cycle everyone knows about, and the one most often misunderstood. It is both physically demanding and, for many, an emotional relief because the PMS days are over. Here is what happens, and what helps.',
        'The bleeding is the uterine lining being shed. To get it out, the uterus contracts, driven by substances called prostaglandins. More prostaglandin, stronger cramps. The pain is typically worst on day 1 and 2 and can radiate into the lower back and thighs. At the same time both estrogen and progesterone are at their lowest, and iron is lost with the blood. The result is low energy, a heavy body and, for some, headache, nausea or loose stools.',
        'What helps against cramps is well documented. Heat on the belly or lower back relaxes the uterus and eases the pain; a heating pad is often as effective as over-the-counter painkillers. Ibuprofen and similar drugs block prostaglandin and work best if taken at the first signs. Light movement, like a walk, helps many even though it feels counterintuitive. Rest, sleep and a little extra iron-rich food do the rest.',
        'Emotionally the period is often calmer than the PMS days, because the hormones have hit bottom and are no longer falling. But low energy and pain give a short fuse, and the need to be left alone can be strong. That is not rejection. It is a body spending its resources on something else.',
        'What can you do? The practical first: take the chores without asking, have heat ready, make sure there are pads, tampons and painkillers in the house, cook or order food. Slow down the first two days; cancel something without making a thing of it. And ask what she needs instead of guessing. The answer may be "nothing", and you need to be able to accept that.',
        'There are also things to leave alone. Do not take low energy or cancellations personally. Do not comment on mood with "is it because you have your period?". Do not make big plans or have hard conversations on day 1 and 2.',
        'Finally something important to know: pain that knocks her out is not normal. Ordinary period pain is manageable. Pain that causes sick days, vomiting, or that also comes outside the period, can be a sign of endometriosis or other conditions that can be treated. It takes an average of 7-10 years to get that diagnosis, because the pain gets normalised. You can be the one who does not normalise it.',
      ],
      conversationQuestion:
        'What is the most helpful thing I have done during your period? And what do you wish I did that I do not?',
      sources: [NHS_PAIN, NHS_HEAVY, NHS_ENDO],
    },
    {
      id: weeklyId(M, 3),
      month: M,
      week: 3,
      title: 'Ovulation, desire and shared responsibility',
      body: [
        'In the middle of the cycle, the thing everything else is about happens: an egg is released. Ovulation is both a biological high point and a moment where responsibility between partners becomes concrete. Here is what you should know.',
        "During the follicular phase, rising estrogen has matured an egg in the ovary. When estrogen peaks, it triggers a sharp surge in the hormone LH, and 24-36 hours later the follicle bursts and the egg is released. The egg lives 12-24 hours. Ovulation is one day, not a week. It typically happens 14 days before the next period. In a 28-day cycle that is around day 14, in a 32-day cycle around day 18. The app's date is an estimate from averages, not a measurement.",
        "The body often shows that ovulation is near. Discharge becomes clear, slippery and stretchy like egg white. Some feel a twinge on one side of the lower abdomen. Energy, confidence and desire are often at the cycle's peak because estrogen and a little testosterone are at their highest. After ovulation, body temperature rises 0.3-0.5 degrees and discharge thickens. Ovulation tests, which measure LH in urine, are the most precise home method.",
        "Now to responsibility. Sperm can survive up to five days in the uterus. Together with the egg's lifespan, that gives a fertile window of about six days: the five days before ovulation and the day itself. If you do not want a pregnancy, this is where contraception matters most. And contraception is not her job alone, even though she usually carries the side effects. If you do want a pregnancy, the days leading up to ovulation matter more than the day after, because the sperm need to be there when the egg arrives.",
        "One thing must be said clearly: never use the app's fertile window as contraception. Cycles shift with stress, illness and travel, and an average does not hit a single month precisely. The app is for understanding, not for planning safe days.",
        'Desire moves with the hormones across the month, and ovulation is the peak for many. In the luteal phase progesterone often dampens desire, and in the PMS days and the first period days the body is typically most closed. Some experience it differently, and that is normal too. What matters is not planning by a table, but not taking low desire personally at certain times, and appreciating closeness when it comes.',
        "What you can do this week is prioritise time together, because these are the cycle's best days for it. And have a short, calm conversation about contraception: what you use, how she feels about it, and whether one of you carries more of the responsibility than the other.",
      ],
      conversationQuestion:
        'How do we feel about our contraception right now? Does one of us carry more of the responsibility or the side effects than the other, and is that okay?',
      sources: [ACOG_CYCLE, NHS_PERIODS],
    },
    {
      id: weeklyId(M, 4),
      month: M,
      week: 4,
      title: 'PMS: the amplifier',
      body: [
        'The week before the period is the one that causes the most misunderstandings in a relationship. Not because she becomes "someone else", but because a hormone drop turns up the volume on everything that is already there. If you understand the mechanism, you can respond the right way.',
        'After ovulation the corpus luteum produces progesterone. If the egg is not fertilised, the corpus luteum dies after 12-14 days, and progesterone and estrogen drop sharply in the last 5-7 days before the period. The brain answers the drop with lower serotonin, the messenger that keeps mood stable and dampens cravings. At the same time the body retains water, appetite rises, and sleep gets worse, partly because progesterone has kept body temperature up.',
        'It is felt as PMS: irritability, vulnerability, tears close to the surface, bloating, tender breasts, hunger, restlessness and a sense that everything is a bit too much. About three in four women notice some of it. Three to eight percent have the severe form, PMDD, where the symptoms are so strong they disrupt daily life; it is a real condition that can be treated and deserves a doctor. The symptoms typically vanish when the bleeding starts. That is what sets PMS apart from everything else: the timing.',
        'The most important insight is this: PMS does not invent feelings. It amplifies them. The irritation over chores being unfairly shared is there on day 9 too, but on day 26 it sounds louder and comes faster. The hurt over something you said last week was there before too, but now the tears come. The feelings are real. The amplifier is hormonal.',
        'That means two things for you. First: never dismiss the feeling with "it\'s just the hormones" or "are you PMS-ing?". That makes it bigger and tells her that her experience does not count. Acknowledge first: "I can hear this is hitting hard right now." Second: respond to the need, not the tone. "You didn\'t empty the dishwasher" often means "I am exhausted and feel alone with it". If you answer the tone, you get a conflict about the tone. If you answer the need, the tone disappears on its own.',
        'Practically: lower expectations for social and practical capacity in the last week. Make sure meals are on time and there are snacks in the house, because hunger amplifies everything. Keep the bedroom cool. Do not comment on body or appearance. Suggest quiet evenings instead of asking "what do you want?". And place hard conversations outside the PMS window, not to avoid them, but to give them a chance.',
        'What you should not do is make her irritation your problem, defend yourself, or withdraw for a week. What helps most is the most boring thing: staying calm and staying. When the period comes, everything settles again, and she remembers who stayed.',
      ],
      conversationQuestion:
        'When you are in the PMS days, what do you most want from me: a bit of distance, more closeness, or practical help? And how can I know which one it is on the day?',
      sources: [NHS_PMS],
    },
  ],
  wrap: {
    id: wrapId(M),
    month: M,
    title: 'Month 1: The cycle from A to Z',
    summary: [
      'The first month was about getting the model in place. The cycle is counted from the first day of bleeding, typically lasts 21-35 days and has four phases: menstruation, follicular phase, ovulation and luteal phase. Estrogen builds up and brings energy in the first half; progesterone brings calm in the second half, and the drop in both hormones during the last week is what is felt as PMS.',
      'You have learned that heat works on cramps, that iron and sleep matter, that ovulation is one day and the fertile window six, that contraception is a shared responsibility, that PMS amplifies rather than invents feelings, and that timing conversations is free help. And you have learned that your most important role is not to fix, but to notice, ask and take care of the practical.',
      'Next month we go deeper into the period itself: pain, bleeding, energy, and what you can concretely do on the days when it is hardest.',
    ],
    keepDoing: [
      'Keep the calendar updated together so the predictions improve.',
      'Say it out loud when you can see the energy coming back.',
      'Have heat, painkillers and pads or tampons in the house before the period.',
      'Put hard conversations outside the PMS window.',
      'Ask "do you want suggestions, or should I just listen?"',
    ],
    quiz: [
      {
        question: 'Which day is cycle day 1?',
        options: [
          'The day after the bleeding stops',
          'The first day of real bleeding',
          'The day of ovulation',
          'The first day of the month',
        ],
        correctIndex: 1,
        explanation:
          'Everything is counted from the first day of bleeding. Get that date right in the app and the phase and predictions fit better.',
      },
      {
        question:
          'She has her period, day 2, and says she cannot face having guests tonight. What is most helpful?',
        options: [
          'Say you did agree to it and it will be nice',
          'Ask if it is because she has her period',
          'Cancel or move it yourself without making a thing of it',
          'Suggest she takes a painkiller and sees how she feels',
        ],
        correctIndex: 2,
        explanation:
          'On day 1-2 energy is lowest. Taking the practical thing without negotiating is the most concrete help.',
      },
      {
        question: 'When in the cycle are the fertile days?',
        options: [
          'During the period',
          'The days right after ovulation',
          'The five days before ovulation and the day itself',
          'The whole luteal phase',
        ],
        correctIndex: 2,
        explanation:
          "Sperm live up to five days, the egg one day. So the window lies before ovulation, and the app's estimate must never be used as contraception.",
      },
      {
        question:
          'It is day 26. She says sharply: "You didn\'t empty the dishwasher." What works best?',
        options: [
          '"Are you PMS-ing?"',
          '"It sounds like you are under pressure. What can I take off your plate?"',
          '"You could have just done it yourself."',
          'Say nothing and leave the room',
        ],
        correctIndex: 1,
        explanation:
          'Respond to the need, not the tone. PMS amplifies a real feeling; acknowledgement and practical help make the tone disappear.',
      },
      {
        question: 'What causes the PMS symptoms in the week before the period?',
        options: [
          'Rising estrogen',
          'The sharp drop in progesterone and estrogen',
          'Iron deficiency',
          'Too little water',
        ],
        correctIndex: 1,
        explanation:
          'When the corpus luteum dies, both hormones fall, serotonin follows them down, and that brings irritability, vulnerability, hunger and poor sleep.',
      },
      {
        question: 'When is it wisest to have a hard conversation about money?',
        options: [
          'Day 1-2, when she is calm',
          'In the follicular phase, when there is capacity to hear each other',
          'The last days before the period, to get it over with',
          'It makes no difference',
        ],
        correctIndex: 1,
        explanation:
          'Timing is free help. The same conversation goes well more often when stress resilience is high, and sideways in the PMS window.',
      },
      {
        question:
          'She vomits from pain and has to call in sick every period. What is the right reaction?',
        options: [
          'It is normal for some, heat and rest are enough',
          'Suggest she grits her teeth',
          'Say this deserves a doctor, and offer to come along',
          'Wait and see if it gets better with age',
        ],
        correctIndex: 2,
        explanation:
          'Pain that knocks her out is not normal. Endometriosis and other conditions can be treated, but diagnosis takes years because the pain gets normalised.',
      },
    ],
  },
};
