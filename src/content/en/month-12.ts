import type { MonthContent, Source } from '../types';
import { dailyId, weeklyId, wrapId } from '../types';

const NHS_PERIODS: Source = {
  label: 'NHS: Periods',
  url: 'https://www.nhs.uk/conditions/periods/',
};
const ACOG_FIRST_PERIOD: Source = {
  label: 'ACOG: Your First Period',
  url: 'https://www.acog.org/womens-health/faqs/your-first-period',
};
const NHS_MENOPAUSE: Source = {
  label: 'NHS: Menopause',
  url: 'https://www.nhs.uk/conditions/menopause/',
};
const NHS_HRT: Source = {
  label: 'NHS: Hormone replacement therapy (HRT)',
  url: 'https://www.nhs.uk/conditions/hormone-replacement-therapy-hrt/',
};
const NHS_EARLY_MENOPAUSE: Source = {
  label: 'NHS: Early menopause',
  url: 'https://www.nhs.uk/conditions/early-menopause/',
};
const NHS_POST_PREGNANCY: Source = {
  label: 'NHS: Your post-pregnancy body',
  url: 'https://www.nhs.uk/conditions/baby/support-and-services/your-post-pregnancy-body/',
};
const NHS_PND: Source = {
  label: 'NHS: Postnatal depression',
  url: 'https://www.nhs.uk/conditions/post-natal-depression/',
};
const NHS_CONTRACEPTION: Source = {
  label: 'NHS: Contraception',
  url: 'https://www.nhs.uk/conditions/contraception/',
};
const NHS_MISSED_PERIODS: Source = {
  label: 'NHS: Stopped or missed periods',
  url: 'https://www.nhs.uk/conditions/stopped-or-missed-periods/',
};
const NHS_PMS: Source = {
  label: 'NHS: PMS',
  url: 'https://www.nhs.uk/conditions/pre-menstrual-syndrome/',
};

const M = 12;

export const month12: MonthContent = {
  month: M,
  theme: 'Life stages and the year in review',
  focus:
    'Understand how the cycle changes across life, and build your own plan for how you help her best.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'The cycle is not the same for life',
      insight:
        'You have spent eleven months getting to know one cycle: hers, as it is right now. But the cycle is not a fixed machine. It starts out messy in the teenage years, finds its rhythm in the 20s and 30s, disappears during pregnancy, slowly returns after childbirth, turns unpredictable in the 40s and eventually stops. Along the way, stress, illness, contraception and big life events push it back and forth. This month is about those shifts. Not so you can know everything about every life stage, but so you recognise them when they arrive and do not assume something is wrong when it is simply life moving on. At the end, we gather the whole year into one plan.',
      action:
        'Ask her: "How was your cycle ten years ago compared with now?" Listen for what has changed and what has stayed the same.',
      phaseTags: [],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: 'Puberty: the first years are irregular',
      insight:
        'The first period usually arrives between ages 10 and 15, on average around 12-13. For the first two to three years the cycle is often irregular, because the interplay between brain and ovaries is not yet settled. Many cycles happen without ovulation, and lengths between 21 and 45 days are normal for teenagers. That means periods can vanish for months and then arrive heavily without anything being wrong. Why does this matter to you? Because her relationship with her own cycle was shaped back then. Shame, confusion, or a mother who explained things well still lives in her. And because you may have a daughter, niece or stepdaughter who will be standing there soon.',
      action:
        'Ask her how she found out back then and who helped her. If there is a girl in your life, talk about how you want to do it for her.',
      phaseTags: [],
      sources: [ACOG_FIRST_PERIOD, NHS_PERIODS],
    },
    {
      id: dailyId(M, 3),
      month: M,
      day: 3,
      title: 'The 20s and 30s: the most stable time',
      insight:
        'From the mid-20s to the late 30s the cycle is, for most women, at its most regular. Ovulation happens in most cycles, the length usually varies by only a few days, and the patterns you have learned this year are clearest right here. It is also the period when the cycle is most often interrupted by other things: hormonal contraception, pregnancy, breastfeeding. So "stable" does not mean undisturbed. It means that when nothing external is acting on her, the body follows its rhythm quite precisely. That is the rhythm the app has learned to predict. Pay attention to what her normal is right now, because that is what you will measure changes against later.',
      action:
        'Open the calendar and find her average cycle length over the last few months. Say the number out loud to her and ask whether it matches her own sense of it.',
      phaseTags: ['follicular'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'Stress moves ovulation',
      insight:
        'The cycle is run from the brain, and the brain listens to stress. Under sustained pressure the hypothalamus can hold back its signals to the ovaries, so ovulation is delayed. The luteal phase after ovulation is stable at 12-14 days, so a delayed ovulation means a late period, not a short luteal phase. That is why "the period is late" in a stressful month is usually just "ovulation came late". It also means the fertile window moves with it, which is one more reason never to use the app\'s estimate as contraception. An exam, a redundancy, a sick parent or a house move can all do it. The body prioritises survival over reproduction, and that is wise.',
      action:
        'If there is a stressful stretch going on right now, say: "If the cycle misbehaves this month, I think it is the pressure. What can I take off your plate?"',
      phaseTags: ['follicular', 'ovulation'],
      sources: [NHS_MISSED_PERIODS],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'Illness, travel and big life events',
      insight:
        'It is not only mental pressure that moves the cycle. Fever and infections, surgery, travel across time zones, major weight loss or gain, very hard training, a new medication and thyroid problems can all delay ovulation or make a period disappear. A death, a divorce, a new job or a move do the same. One odd cycle is not a problem. If periods stop for more than three months without pregnancy, or the cycle becomes consistently shorter than 21 days or longer than 35, it deserves a doctor. Your role is not to explain it, but to remember it: to be able to say "that was the month your dad was in hospital" when she is puzzled by the calendar.',
      action:
        'Write a note in the calendar about the biggest thing that happened to you this year, on the date it happened. It makes the pattern readable a year from now.',
      phaseTags: [],
      sources: [NHS_MISSED_PERIODS, NHS_PERIODS],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: 'Hormonal contraception: the cycle you do not see',
      insight:
        'If she uses the pill, ring, patch, hormonal IUD, implant or injection, you are not seeing her natural cycle. Combined methods with estrogen and progestogen suppress ovulation, and the bleed in the break is a withdrawal bleed, not a real period. Progestogen-only methods like the hormonal IUD and implant often give lighter, irregular or no bleeding at all. Everything you have learned about phases therefore applies only partly. There is no ovulation to time around, and the PMS pattern is often flatter, but side effects like mood changes, headaches and lower desire can sit evenly across the month instead. She still carries it, and that burden is as real as a period is.',
      action:
        'If she uses hormonal contraception, ask whether she has side effects she has got used to without talking about them. If not, skip to the next card.',
      phaseTags: ['menstrual'],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'When contraception stops, the cycle returns',
      insight:
        'When she stops the pill, IUD, ring or implant, ovulation can return as early as the first cycle; fertility usually comes back quickly. The injection is the exception, where it can take up to a year. But "back" does not mean "like a machine". The first months can be irregular while brain and ovaries find their rhythm again. And with the natural cycle, everything the method was holding down returns too: cramps, heavier bleeding, PMS, skin that reacts. For some it is a shock, because they have been on hormones since their teens and have never known their own adult cycle. This is where what you have learned this year is worth the most.',
      action:
        'If she has stopped or is considering stopping hormonal contraception, offer to be the one who watches the calendar for the first three months, and talk about what you will use instead.',
      phaseTags: [],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: 'Pregnancy: nine months without a cycle',
      insight:
        'If the egg is fertilised around ovulation, the corpus luteum does not die. It keeps producing progesterone until the placenta takes over, and the cycle is put on hold. No period, no ovulation, no PMS in the classic sense. Instead, the high progesterone of the first trimester brings what you know from the luteal phase, in an amplified version: fatigue, nausea, sore breasts, emotions close to the surface. Much of what you have learned about the luteal phase can be reused directly. Lower expectations, take the practical load, do not comment on body or appetite, and respond to the need rather than the tone. It is the same help, just over a longer stretch.',
      action:
        'Tell her you know that what you learned about the luteal phase also applies if you ever face a pregnancy. Ask whether there is anything she would need you to remember.',
      phaseTags: ['ovulation'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'After the birth: the body heals first',
      insight:
        'After giving birth she bleeds for up to six weeks. This is called lochia and is not a period, but the uterus healing and contracting. It is heavy for the first days, turns lighter and thinner, and can pick up again with exertion. At the same time estrogen and progesterone crash once the placenta is gone, and that hormone drop is bigger than any PMS. The body is sore, sleep is broken up by a small child, and if she breastfeeds, prolactin keeps the cycle on hold. It is a stretch where everything you learned about the menstrual phase applies for weeks rather than days: heat, rest, food, iron, practical help without asking, and no expectations.',
      action:
        'If you have a small child or a birth ahead: agree who takes the night this week. If not: ask her what she has heard from friends about the time after birth that surprised her.',
      phaseTags: ['menstrual'],
      sources: [NHS_POST_PREGNANCY],
    },
    {
      id: dailyId(M, 10),
      month: M,
      day: 10,
      title: 'Breastfeeding and the return of periods',
      insight:
        'If she does not breastfeed, periods usually return six to eight weeks after the birth. If she breastfeeds fully, prolactin can suppress ovulation for many months, and periods often only return when the baby starts eating other food or sleeping longer at night. It varies enormously. Important: ovulation comes before the first period, so she can get pregnant before she has seen a single bleed. Breastfeeding is not reliable contraception unless very specific conditions are met, and that is a conversation with a midwife or doctor. The first period after birth is often heavier and more irregular than before, and it can take a few cycles before the rhythm is back.',
      action:
        'Talk about what your contraception plan would be in the months after a birth, before you are in it. It is a short conversation now and a hard one later.',
      phaseTags: [],
      sources: [NHS_POST_PREGNANCY, NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'Mood after birth: baby blues or depression',
      insight:
        'Most new mothers experience the "baby blues" around day three to five after the birth: tears, restlessness and a feeling of being overwhelmed, which passes on its own within two weeks. That is the hormone drop and the lack of sleep. Postnatal depression is something else. It affects about one in ten women, can start at any point in the first year, and does not pass on its own. Signs are persistent sadness, no joy in the baby, anxiety, guilt, withdrawal and thoughts of not being good enough. Partners can be affected too. It can be treated, and it deserves a doctor early. You are often the first to see it, because she believes she is simply a bad mother.',
      action:
        'Say this sentence to her today, wherever you are in life: "If you ever struggle after a birth, I promise to say it out loud and help you see a doctor, even if you tell me it is fine."',
      phaseTags: [],
      sources: [NHS_PND],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: 'The new cycle after a child',
      insight:
        'When the cycle returns after birth and breastfeeding, it is often not identical to before. Some get shorter cycles, some longer, some get more PMS, others less. Cramps can change character, and bleeding can get heavier. At the same time, daily life is different: less sleep, less time alone, more responsibility. That means everything you have learned about her patterns needs adjusting. It is not wasted, it is a starting point. The calendar matters more than ever, because memory is the first thing to go with a small child. And the luteal phase with a screaming baby at 3 a.m. is a completely different sport from the luteal phase alone on the sofa.',
      action:
        'If her cycle has changed after a child: ask what is different now. If not: ask what she would want you to remember if it happens one day.',
      phaseTags: ['menstrual'],
      sources: [NHS_POST_PREGNANCY],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: 'The 40s: perimenopause begins',
      insight:
        'Perimenopause means "around the menopause" and is the years when the ovaries gradually stop responding steadily. It usually begins in the 40s, often several years before the last period, and can last four to eight years. The menopause itself is a single day: the last period, which can only be confirmed once 12 months have passed without bleeding. The average age is 51, but before 45 it is called early and before 40 premature menopause, and both deserve a doctor. The first sign is often that cycles get shorter, because the follicular phase shortens while hormones begin to swing more sharply from month to month. What she knew as her rhythm becomes less reliable.',
      action:
        'Ask whether she has thought about the menopause, and what she knows about how it was for her mother. That is often the best clue to timing.',
      phaseTags: ['follicular'],
      sources: [NHS_MENOPAUSE, NHS_EARLY_MENOPAUSE],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'Irregular cycles in perimenopause',
      insight:
        'In perimenopause the cycle often jumps around. One month 24 days, the next 40, then two periods close together, then none for three months. Some cycles happen without ovulation, and then there is no progesterone and relatively more estrogen: that can bring stronger PMS, sore breasts and heavier bleeding. Other cycles ovulate as always. The app\'s predictions get worse, and that is not the app\'s fault, it is biology. What matters for you: she can still get pregnant in perimenopause, so contraception is relevant until 12 months have passed without a period after age 50, or 24 months before 50. And she can no longer "count on" her body the same way, which is frustrating.',
      action:
        'Say: "I know the predictions do not fit very well right now. Tell me what you actually feel, and I will go by that instead of the app."',
      phaseTags: ['menstrual', 'luteal'],
      sources: [NHS_MENOPAUSE, NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 15),
      month: M,
      day: 15,
      title: 'Hot flushes and night sweats',
      insight:
        "Hot flushes are the best-known symptom: a sudden wave of heat in the face, neck and chest, often with flushing, a racing heart and sweating, lasting from a few seconds to a few minutes. At night they are called night sweats, and they can soak clothes and bedding. The cause is the brain's temperature regulation becoming oversensitive as estrogen swings. Around three in four women experience them, and for many they begin while periods are still coming, often worst in the days before bleeding. Triggers can be warm rooms, alcohol, coffee, spicy food and stress. It is not dangerous, but it is embarrassing in a meeting and exhausting at night, and having it pointed out does not help.",
      action:
        'Make the bedroom cooler tonight, and put out a spare set of bedding and a nightshirt where she can reach them without turning on a light. If it is not relevant yet: remember that it will be.',
      phaseTags: ['luteal'],
      sources: [NHS_MENOPAUSE],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'Sleep in perimenopause',
      insight:
        'For many, poor sleep is the symptom that affects daily life most. Night sweats wake her, falling progesterone removes the calming effect she had in the luteal phase, and waking at 3-4 a.m. with racing thoughts is typical. Several nights in a row of broken sleep produce what you know from PMS week: a short fuse, tears close to the surface, trouble concentrating. Just without a period arriving to reset it. What helps is boring and effective: a cool bedroom, regular bedtimes, less alcohol in the evening, and not being the one who gets up for everything. Persistent sleep problems are also a good reason to see a doctor, because treatment exists.',
      action:
        'Take responsibility for one thing that normally wakes her at night or early morning: children, dog, alarm clock, the alarm on your phone. Say so before she asks.',
      phaseTags: ['luteal'],
      sources: [NHS_MENOPAUSE],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'Mood, memory and "brain fog"',
      insight:
        'Swinging estrogen affects the same brain chemicals that PMS does, just over years instead of days. Many describe low mood, anxiety, irritability, loss of confidence, and a fog where words and names disappear. It is not imagined, and it is not early dementia; these are documented symptoms that often improve when hormones settle or are treated. It hits hard because it tends to coincide with a career peaking, teenage children and ageing parents. Women in their 40s and 50s typically carry the most at once, and then this arrives on top. Your job is the same as in PMS week, only for longer: acknowledge first, take the practical load, and respond to the need, not the tone.',
      action:
        'If she forgets a word or an appointment today, do not joke about it. Instead, name something concrete she has handled well recently.',
      phaseTags: ['luteal'],
      sources: [NHS_MENOPAUSE],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'Heavier or lighter bleeding',
      insight:
        'Bleeding changes in perimenopause too. Cycles without ovulation let the lining grow for longer without progesterone, so when it finally sheds it can be heavy, prolonged and clotted. In other months the bleed is light or absent. Both are common. But the usual limits still apply: a pad or tampon changed every hour for several hours, bleeding beyond 7 days, bleeding between periods or after sex, and especially any bleeding after 12 months without a period, deserve a doctor. That last one matters: bleeding after the menopause is never "just hormones" until a doctor has said so. Heavy bleeding also drains iron, so fatigue in this stage should be taken seriously.',
      action:
        'Check that there are pads in the house in the heaviest absorbency she uses, plus painkillers. If she has mentioned the bleeding getting worse, ask whether she has talked to her doctor about it.',
      phaseTags: ['menstrual'],
      sources: [NHS_MENOPAUSE, NHS_PERIODS],
    },
    {
      id: dailyId(M, 19),
      month: M,
      day: 19,
      title: 'HRT: a conversation with the doctor, not the internet',
      insight:
        'Hormone replacement therapy, HRT, replaces the estrogen the body no longer makes, usually together with a progestogen to protect the uterine lining. It is the most effective treatment for hot flushes and night sweats and often helps sleep, mood, joint pain and vaginal dryness. Benefits and risks depend on her age, health and family history, and for most women under 60 the benefits are judged to outweigh the risks, but it is an individual assessment only a doctor can make. Non-hormonal options exist too. Much of what circulates about HRT is based on old studies and outdated numbers. Your role is not to have an opinion, but to back her getting a qualified conversation.',
      action:
        'Say: "If you ever want to talk to the doctor about the menopause, I would happily come along and take notes." That makes the visit more manageable for most people.',
      phaseTags: [],
      sources: [NHS_HRT, NHS_MENOPAUSE],
    },
    {
      id: dailyId(M, 20),
      month: M,
      day: 20,
      title: 'Menopause and life after',
      insight:
        'Once 12 months have passed without a period, the menopause has happened, and she is postmenopausal for the rest of her life. Hormones are now low and stable. For many it is a relief: no PMS, no bleeding, no contraception. Some symptoms fade over a few years, while others, like vaginal dryness, joint pain and bone loss, can continue and need attention. The risk of heart disease and osteoporosis rises once estrogen is gone, so exercise, calcium, vitamin D and check-ups matter more. Everything you learned about phases no longer applies, but what you learned about noticing, asking and acting applies for the rest of your lives. There is no calendar any more, only her.',
      action:
        'Suggest one fixed weekly activity you can do together that strengthens bones and heart: a brisk walk, a bike ride, a workout. Put it in the calendar today.',
      phaseTags: [],
      sources: [NHS_MENOPAUSE],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: 'The year in review: the model, communication and the period',
      insight:
        'The last ten days of the programme are about gathering up and building your plan. We start from the beginning. Month 1 gave you the model: day 1 is the first day of bleeding, four phases, estrogen up means energy, progesterone up means calm, both down means vulnerable. Month 2 was communication: language, timing, asking instead of guessing, and that the phase may be used as a reason to give more, never as an argument. Month 3 went deep on the period: heat for cramps, iron for fatigue, painkillers at the first signs, practical help without asking, and pain that knocks her out deserves a doctor. Three months, three very concrete habits, which you have either built or which deserve a restart now.',
      action:
        'Write down the three most important things you remember from months 1-3, and mark each one "I do this" or "I have dropped this". That is the start of your plan.',
      phaseTags: ['menstrual'],
    },
    {
      id: dailyId(M, 22),
      month: M,
      day: 22,
      title: 'The year in review: follicular phase, ovulation and luteal phase',
      insight:
        "Month 4 was the follicular phase: energy returns, and it is the time for the big, the hard and the fun. Month 5 taught you that ovulation is one day, that the fertile window is six, and that the app's estimate is never contraception. Month 6 was the luteal phase: progesterone brings calm, raises temperature, increases appetite and disturbs sleep, so a cool bedroom, good snacks and easy suggestions are help. That is the middle third of the year, and it is where the cycle swings the most: from the greatest energy to the quiet, inward time. If you remember only one thing from those three months, let it be: use the energy when it is there, and lower expectations when it is gone.",
      action:
        "Continue yesterday's list with months 4-6. Afterwards ask her which of those three months she has felt the biggest difference from you.",
      phaseTags: ['ovulation', 'luteal'],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'The year in review: PMS, pain and food',
      insight:
        'Month 7 was PMS and PMDD: the hormone drop amplifies feelings, it does not invent them. Respond to the need, not the tone. Never say "is it PMS?". And PMDD is a real condition with treatment. If you remember only one thing from the whole year, let it be: acknowledge first. Month 8 taught you to spot patterns in the log: the headache on day 25, the fatigue on day 1, and to act before she asks. Month 9 was food, exercise and recovery in each phase: iron and heat during the period, hard sessions and new things in the follicular phase, protein, fibre and sleep in the luteal phase, and that movement helps both cramps and PMS. Those are the three months where knowledge turns into routine. Routines are boring, and that is the point. What she feels is not your knowledge, but that it is easier than last year.',
      action:
        'Add months 7-9 to the list. Pick one routine that has slipped and do it today: a snack, a walk, a question asked at the right time.',
      phaseTags: ['follicular'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 24),
      month: M,
      day: 24,
      title: 'The year in review: fertility and when something is off',
      insight:
        'Month 10 was fertility, contraception and pregnancy: shared responsibility, what she carries in side effects and worry, and what you can take. Month 11 was when something is off: endometriosis, PCOS, irregularity, heavy bleeding, and when something deserves a doctor. The common thread is that you should not diagnose or decide, but you can be the one who does not normalise what is not normal, and the one who comes to the appointment and takes notes. This month added the life stages: teenage years, postpartum, perimenopause, menopause. Together, eleven months have given you something few partners have: a language and a calendar for what she goes through.',
      action:
        'Finish the list with months 10-12. Look at the whole list and count how many items say "I do this". Show her the list.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 25),
      month: M,
      day: 25,
      title: 'Your plan, part 1: what helps most in each phase',
      insight:
        'Now you build the plan, and it has to be hers, not the app\'s. Take one phase at a time and ask: what helps you most here? The answers are often surprisingly concrete. Period: "that you cook on day 1 and 2 without asking." Follicular phase: "that we plan something together I can look forward to." Ovulation: "that you prioritise time with me." Luteal phase: "that you do not take it personally when I withdraw, and that there are snacks." Write exactly what she says, not what you think. The plan does not need to be long. Four phases, one or two things per phase. It is one page that makes a whole year usable.',
      action:
        'Sit down with a cup of coffee and write "what helps most" for each of the four phases, in her words. Save it as a note in the app or on your phone.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 26),
      month: M,
      day: 26,
      title: 'Your plan, part 2: what to avoid',
      insight:
        'The second part of the plan is just as important and said aloud far less often: what should you stop doing? It can be sentences ("is it PMS?", "you look tired", "it is just hormones"), actions (big plans on day 1, hard conversations on day 26, comments about appetite in the luteal phase) or reactions (defending yourself, withdrawing for a week, joking about hot flushes). It is not a list of criticism, it is a user manual. Ask her to be honest, and receive it without explaining yourself. If she says that something you thought was helpful actually is not, that is the most valuable information you will get all year. Write it down next to part 1.',
      action:
        'Ask: "What is the one thing I do or say that you would most like me to stop doing on the hard days?" Listen, say thank you, and write it down.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 27),
      month: M,
      day: 27,
      title: 'Your plan, part 3: signals and code words',
      insight:
        'The hardest thing on the hard days is not knowing what helps, but knowing which day it is. That is why many couples benefit from agreed signals. A code word for "I need you to take over now, no questions". One for "I want company but not conversation". One for "I am not angry with you, I am just empty". It can be a word, an emoji, a colour in the calendar or a hand on the shoulder. The point is that she is spared explaining herself when she has the least energy for it, and you are spared guessing. And one signal the other way: "I can see it is a heavy day, I have got tonight."',
      action:
        'Agree on one code word or signal today for "take over, no questions". Use it the first time it becomes relevant, even if it feels silly.',
      phaseTags: ['luteal', 'menstrual'],
    },
    {
      id: dailyId(M, 28),
      month: M,
      day: 28,
      title: 'The checklist before the period',
      insight:
        "The most concrete tool from the whole year is the checklist you run when the app says the period is three to four days away. It is short: pads or tampons in the right kind, painkillers, something easy to eat on day 1 and 2, a heating pad that works, a cool bedroom, snacks in the house, and a calendar that is reasonably empty for the first two days. Add what is specific to her: iron tablets, a particular tea, you walking the dog. The list should live somewhere you see it, and the app's reminder about the expected period is your cue. Preparation is invisible when it works. She just feels that it is easier.",
      action:
        'Write your own checklist with her additions and save it in the same place as the plan. Run through it now if the period is on its way.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 29),
      month: M,
      day: 29,
      title: 'The yearly check-in and a thank you',
      insight:
        'The cycle changes, life changes, and the plan has to keep up. So agree on a fixed yearly check-in: one hour, same date every year, when you read through the plan, correct what has changed and add what is new. After a child, when contraception changes, when the 40s arrive, or simply when she says something feels different. It is also the day you say thank you. She has let you follow something private for a whole year, answered questions, put up with being asked about discharge and mood. That is trust. Say it out loud. Gratitude is not a phase, it is a habit, and it keeps everything else alive.',
      action:
        'Set a yearly reminder in the calendar titled "our plan" on today\'s date. Then tell her what you are most grateful she has shared with you this year.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 30),
      month: M,
      day: 30,
      title: 'After the programme: keep the habit alive',
      insight:
        'Tomorrow there will be no new card. What remains is the calendar, the plan, the checklist and the habit. The habit is the most important: looking at the app a couple of times a week, knowing where she is, keeping the hard stuff outside the PMS window, getting ready before the period, asking instead of guessing. It takes under a minute a day. What makes habits survive is not motivation but a fixed time and a visible consequence. The time can be the morning coffee. The consequence is that she feels the difference. You are not done learning, you are done being taught. The rest she will teach you herself.',
      action:
        'Pick a fixed time when you will open the app from now on, and tell her. Then take the last quiz of the year, and celebrate that you made it all the way.',
      phaseTags: [],
    },
  ],
  weekly: [
    {
      id: weeklyId(M, 1),
      month: M,
      week: 1,
      title: 'The cycle across a lifetime',
      body: [
        'Most of what you have learned this year is about the cycle as it is right now. But the same woman had a different cycle at 14, and she will have a different one again at 47. This article gives you the map of the whole journey, so you can recognise where you are and what is coming.',
        'It starts in puberty. The first period usually arrives between ages 10 and 15, and for the first two to three years the cycle is irregular, because the interplay between brain and ovaries is not yet settled. Many cycles happen without ovulation, and lengths between 21 and 45 days are normal for teenagers. Periods can disappear for months and come back heavily. This is also where the relationship with her own body is formed: whether it was met with information and calm or with shame and silence still lives in her. If you have a daughter, niece or stepdaughter, this is your chance to do it differently: talk about it before it happens, keep pads in the house, and let dad be someone you can ask.',
        'From the mid-20s to the late 30s the cycle is at its most regular. Ovulation in most cycles, a length that varies by only a few days, clear patterns. It is the period the app predicts best, and the one you have learned to read this year. But it is rarely undisturbed. Hormonal contraception hides the natural cycle entirely: combined methods suppress ovulation, and the bleed in the break is a withdrawal bleed, not a period. Progestogen-only methods often give light, irregular or no bleeding. The phases you know are not there, but side effects like mood changes, headaches and lower desire can sit evenly across the month, and she carries them quietly.',
        'When she stops contraception, ovulation often returns within the first cycle, except after the injection, where it can take up to a year. But the first months can be irregular, and everything the method held down comes back: cramps, heavier bleeding, PMS. For a woman who has been on hormones since her teens, it may be the first time she meets her own adult cycle. This is where what you have learned is worth the most: you can be the one who says "it is normal for it to take a few months", and who watches the calendar with her.',
        "Throughout life, outside forces move the cycle. Stress, illness, travel, weight changes, hard training, new medication and big life events can all delay ovulation. Because the luteal phase is stable at 12-14 days, a late ovulation gives a late period. It also means the fertile window moves, and that the app's estimate must never be used as contraception. One odd cycle means nothing. If periods stop for more than three months without pregnancy, or the cycle is consistently under 21 or over 35 days, it deserves a doctor.",
        'Your role through all the stages is the same, but it changes shape. In the teenage years it is about being safe to ask. In the 20s and 30s it is about learning the patterns and timing the help. When contraception changes it is about patience, and remembering that side effects are real even when they do not have a date. Under stress it is about being able to say "I think the cycle is off because there is pressure on, what can I take?" instead of getting worried.',
        'This week is about getting the overview: where has she been, and where are you now? It is a conversation few couples have had, and one most are glad to have.',
      ],
      conversationQuestion:
        'What was your cycle like as a teenager, and what do you wish someone had told you back then? Is there anything from that time you still carry with you?',
      sources: [ACOG_FIRST_PERIOD, NHS_PERIODS, NHS_CONTRACEPTION],
    },
    {
      id: weeklyId(M, 2),
      month: M,
      week: 2,
      title: 'After the birth: body, cycle and mood',
      body: [
        'Whether you have children, are expecting one or never will, the time after a birth is the life stage where everything you have learned about the cycle is put to the hardest test. The hormone drop is bigger than any PMS, sleep is gone, and the body has to heal, all while a tiny person needs everything. Here is what happens, and what you can do.',
        'During pregnancy the cycle is on hold. The corpus luteum does not die, progesterone stays high, and the placenta takes over. The first trimester therefore looks like the luteal phase in an amplified version: fatigue, nausea, sore breasts, emotions close to the surface. Everything you have learned about the luteal phase can be used directly: lower expectations, take the practical load, do not comment on body or appetite, respond to the need rather than the tone.',
        'At the birth the placenta leaves, and estrogen and progesterone crash within a few days. She bleeds for up to six weeks; that is lochia from the healing uterus, not a period. It is heavy at first, turns lighter and can pick up with exertion. The body is sore, the pelvic floor is strained, and if there are stitches or a caesarean, everything hurts. Everything you learned about the menstrual phase now applies for weeks: heat, rest, food with iron, practical help without asking, and no expectations of anything at all. The most important thing you can do is take the night as often as you can, and remove everything unnecessary from her plate.',
        'When do periods come back? If she does not breastfeed, usually after six to eight weeks. If she breastfeeds fully, prolactin suppresses ovulation, often for many months, until the baby eats other food or sleeps longer. It varies enormously. And here is the important detail: ovulation comes before the first period. She can get pregnant before she has seen a single bleed, and breastfeeding is not reliable contraception unless very specific conditions are met. That is a conversation with a midwife or doctor, and it should happen early. The first period after birth is often heavier and more irregular, and it can take a few cycles before the rhythm returns. The new rhythm is not always the old one: some get more PMS, some less, some shorter cycles.',
        'Then there is mood. Most get the "baby blues" around day three to five: tears, restlessness, feeling overwhelmed, passing within two weeks. That is the hormone drop and lack of sleep, and it needs only rest and care. Postnatal depression is something else. It affects about one in ten women, can start at any point in the first year, and does not pass on its own. The signs are persistent sadness, no joy in the baby, anxiety, guilt, withdrawal and thoughts of not being good enough. It can be treated, and the earlier the better. Partners can be affected too. The problem is that she often believes she is simply a bad mother, and so says nothing. You are often the first to see it, and the one who has to say it out loud and help her to a doctor, even when she says she is fine.',
        'The practical things that work in the months after birth are the same as in the menstrual phase, multiplied: food that is ready, sleep in unbroken blocks, no guests she has not asked for herself, no comments about her body, and a partner who does not need to be asked for anything. And one more thing: keep the calendar when she cannot. Memory is the first thing to go with a small child, and the first period after birth often arrives as a surprise.',
        'If you are not in it now, the conversation is still worth having. What has she heard from friends? What does she fear? What would she need you to remember? Having talked about it in advance makes it possible to act when the energy to explain is gone.',
      ],
      conversationQuestion:
        'If we ever have a newborn, what would you want me to take over without asking, and what would you want me to keep an eye on in you?',
      sources: [NHS_POST_PREGNANCY, NHS_PND, NHS_CONTRACEPTION],
    },
    {
      id: weeklyId(M, 3),
      month: M,
      week: 3,
      title: 'Perimenopause and menopause: the long transition',
      body: [
        'The menopause is not one day when periods stop. It is a transition of typically four to eight years, when hormones swing more than they ever have, and when many women get symptoms that neither they nor their partner recognise as hormonal. It is a period where your knowledge from this year is worth gold, and where your reaction matters more than any app.',
        'The words first. Perimenopause is the years leading up to the last period, when the ovaries gradually stop responding steadily. The menopause is the last period, which can only be confirmed once 12 months have passed without bleeding. Postmenopause is everything after. The average age at menopause is 51, and perimenopause usually begins in the 40s. Menopause before 45 is called early, and before 40 premature, and both deserve a doctor, because treatment protects bones and heart.',
        "The first sign is often that the cycle changes. The follicular phase shortens, so cycles shrink to 24-25 days. Later it jumps around: 24 days, then 40, then two periods close together, then none for three months. Some cycles happen without ovulation, and without progesterone the lining can grow for longer and shed heavily, for a long time and with clots. In other months the bleed is light or absent. The app's predictions get worse, and that is biology, not the app. She can still get pregnant, so contraception is relevant until 12 months have passed without a period after age 50, or 24 months before 50. The usual limits still apply: a pad changed every hour, bleeding beyond 7 days, bleeding between periods, and especially any bleeding after 12 months without a period, deserve a doctor.",
        'The symptoms often arrive while periods are still coming. Hot flushes and night sweats affect three in four: sudden heat, flushing, a racing heart, sweat, often worst in the days before bleeding. Sleep is broken by sweat and by waking with racing thoughts once the calming effect of progesterone is gone. Mood swings: low mood, anxiety, irritability, loss of confidence. Memory misbehaves, words disappear, concentration slips. Joints ache, skin gets dry, the vagina gets dry, and desire can drop. All of it is documented symptoms, not imagination, and it often happens at the very time she has the most on her plate in her whole life: career, teenage children, ageing parents.',
        'HRT, hormone replacement therapy, replaces the estrogen the body no longer makes, usually together with a progestogen. It is the most effective treatment for hot flushes and night sweats and often helps sleep, mood, joints and dryness. For most women under 60 the benefits are judged to outweigh the risks, but that depends on her age, health and family history, and only a doctor can assess it. Non-hormonal options exist too. Much of what circulates about HRT is based on old studies. Your role is not to have an opinion on it, but to back her getting a qualified conversation, and ideally to come along and take notes.',
        'What can you concretely do? The same as in PMS week, just over years: acknowledge first, respond to the need, not the tone, take the practical load. Keep the bedroom cool, and put out dry bedding so she can change without turning on a light. Take responsibility for what wakes her at night. Never joke about hot flushes or forgotten words, ever. Name something concrete she has handled well. Suggest movement together, because exercise protects bones and heart once estrogen is gone. And listen without fixing when she says she does not recognise herself.',
        'Once the menopause has happened, hormones are low and stable. For many it is a relief: no PMS, no bleeding, no contraception. The phases are gone, and so is the calendar. What remains is everything you have learned about noticing, asking and acting. That applies for the rest of your lives.',
      ],
      conversationQuestion:
        'What do you know about how the menopause was for your mother or other women in your family, and how do you feel about it coming to you? What do you want me to do when it does?',
      sources: [NHS_MENOPAUSE, NHS_HRT, NHS_EARLY_MENOPAUSE],
    },
    {
      id: weeklyId(M, 4),
      month: M,
      week: 4,
      title: 'Your plan: this is how I help you best',
      body: [
        "You have spent a year getting to know the cycle. Now that knowledge becomes one page you both know: your plan. It is not the app's, it is hers, written in her words, and it has to work on a day when neither of you has the energy to think. Here is how you build it.",
        'Part 1 is "what helps most in each phase". Take one phase at a time and ask her. The answers are typically concrete, and often not what you would have guessed. Period: food on day 1 and 2 without asking, heating pad, rest, no plans. Follicular phase: plan something together she looks forward to, have the hard conversations here, say out loud that the energy is back. Ovulation: prioritise time together, closeness without pressure. Luteal phase: snacks in the house, a cool bedroom, easy concrete suggestions, and not taking it personally when she withdraws. One or two things per phase. Write exactly what she says.',
        'Part 2 is "what to avoid". It is said aloud less often and matters at least as much. Sentences: "is it PMS?", "it is just hormones", "you look tired", "you are overreacting". Actions: big plans on day 1, hard conversations on day 26, comments about appetite or body in the luteal phase, jokes about hot flushes or forgotten words. Reactions: defending yourself, withdrawing for a week, making her irritation your problem. Ask her to be honest, and take it without explaining yourself. If something you thought was helpful is not, that is the most important information of the year.',
        'Part 3 is signals and code words. The hardest thing on the hard days is not knowing what helps, but knowing which day it is, without her having to explain. So agree on a code word for "take over now, no questions", one for "company but no talking", and one for "I am not angry with you, I am empty". A word, an emoji, a colour in the calendar, a hand on the shoulder. And one signal the other way: "I can see it is a heavy day, I have got tonight." Use them, even when it feels silly. They work because they remove the explanation at the moment when explaining costs the most.',
        'Part 4 is the checklist before the period. When the app says three to four days to the expected period, you run the list: pads or tampons in the right kind, painkillers, easy food for day 1 and 2, heating pad, cool bedroom, snacks, a calendar that is reasonably empty for the first two days. Plus what is specific to her: iron, a particular tea, you taking the dog. Preparation is invisible when it works. She just feels that it is easier than last time.',
        'Part 5 is the yearly check-in. The cycle changes with life: after a child, when contraception changes, when the 40s arrive, or simply when she says something feels different. Set a fixed date every year when you read through the plan, correct and add. It is also the day you say thank you. She has let you follow something private for a whole year, and that is trust. Say it out loud.',
        'Finally: the habit. Tomorrow there is no new card, and that is the point. What keeps the habit alive is a fixed time when you open the app, and a visible consequence: that she feels the difference. Under a minute a day. You are not done learning, you are done being taught. The rest she will teach you herself, if you keep asking.',
      ],
      conversationQuestion:
        'If you had to pick one thing from the whole plan that you want me never to forget, what is it? And what is the one thing you will do yourself to make it easier for me to help?',
      sources: [NHS_PMS, NHS_PERIODS],
    },
  ],
  wrap: {
    id: wrapId(M),
    month: M,
    title: 'Month 12: Life stages and the year in review',
    summary: [
      'The final month showed that the cycle is not the same for life. It is irregular in the teenage years, most stable in the 20s and 30s, hidden under hormonal contraception, paused in pregnancy, slow to return after birth and breastfeeding, unpredictable in perimenopause and eventually gone. Stress, illness and big life events move it along the way. You have learned that lochia is not a period, that ovulation comes before the first period after birth, that postnatal depression deserves a doctor early, that hot flushes, sleep problems and brain fog are real symptoms, and that HRT is a conversation with the doctor, not the internet.',
      'And you have gathered the whole year into one plan: what helps most in each phase, what to avoid, your code words, the checklist before the period and a yearly check-in. All of it rests on the same ground rule that has come back every month: acknowledge first, respond to the need rather than the tone, take the practical load without asking, and do not normalise what is not normal.',
      'The programme is over, but the habit continues. The calendar, the plan and one minute a day are all it takes. Thank you for staying the whole year.',
    ],
    keepDoing: [
      'Open the app at a fixed time, and know which phase she is in.',
      'Run the checklist when the period is three to four days away.',
      'Use your code words, and take over without questions when one is said.',
      'Respond to the need, not the tone, whatever the life stage.',
      'Say "that deserves a doctor" when something is off, and offer to come along.',
      'Hold the yearly check-in on the plan, and say thank you.',
    ],
    quiz: [
      {
        question:
          'She stopped the pill two months ago, and her cycle is irregular with cramps she has not had in years. What helps most?',
        options: [
          'Suggest she goes back on the pill',
          'Say it is normal for it to take a few months, and watch the calendar together with her',
          'Assume something must be wrong and book a doctor',
          'Say nothing, it is her body',
        ],
        correctIndex: 1,
        explanation:
          'When contraception stops, the natural cycle returns with everything the method was holding down. The first months can be irregular. Patience and a shared calendar are the best help; a doctor becomes relevant if periods stop for more than three months.',
      },
      {
        question:
          'She gave birth three weeks ago and is breastfeeding. She says she does not need contraception because her period has not come back yet. What is the right response?',
        options: [
          'She is right, breastfeeding protects',
          'Say that ovulation comes before the first period, and suggest you talk to the midwife or doctor about a plan',
          'Wait and see whether the period comes',
          'Insist she starts the pill',
        ],
        correctIndex: 1,
        explanation:
          'Ovulation comes before the first bleed, so she can get pregnant without having seen a period. Breastfeeding only protects under very specific conditions. A short conversation with a professional is the concrete help.',
      },
      {
        question:
          'Five months after the birth she is persistently sad, cries often, feels no joy in the baby and says she is just a bad mother. What helps most?',
        options: [
          'Say all new mothers feel like that and it will pass',
          'Give her more time alone',
          'Say out loud that it sounds like more than tiredness, and help her to a doctor, even if she says she is fine',
          'Wait until the baby sleeps better at night',
        ],
        correctIndex: 2,
        explanation:
          'Baby blues pass within two weeks. Persistent sadness and no joy months after the birth can be postnatal depression, which affects one in ten, can be treated and does not pass on its own. The partner often sees it first.',
      },
      {
        question:
          'She is 47, wakes up soaked in sweat, and her cycle jumps between 24 and 40 days. What is the best help tonight?',
        options: [
          'Ask whether she has considered that it is probably the menopause',
          'Make the bedroom cool, put out dry bedding, and offer to come to the doctor when she wants to talk about it',
          'Suggest she drops contraception now that the cycle is irregular',
          'Joke about it to lighten the mood',
        ],
        correctIndex: 1,
        explanation:
          'Night sweats and an irregular cycle are typical of perimenopause. Practical help tonight and support for a conversation with the doctor about options, including HRT, is what works. Contraception is still relevant, and jokes never help.',
      },
      {
        question:
          'She has gone 14 months without a period and suddenly has a bleed. What do you do?',
        options: [
          'Say it is just hormones acting up',
          'Suggest waiting a month to see',
          'Say that bleeding after the menopause always deserves a doctor, and offer to book an appointment together',
          "Check the app's prediction",
        ],
        correctIndex: 2,
        explanation:
          'Bleeding after 12 months without a period must always be checked by a doctor. It is most often harmless, but it is not something you can decide yourselves, and it should not be put off.',
      },
      {
        question:
          'The programme is over and you want to keep the habit alive. What is the most durable approach?',
        options: [
          'Re-read every card from month 1',
          'A fixed time when you open the app, your plan saved somewhere visible, and a yearly check-in with her',
          'Trust that you remember it all now',
          'Ask her to tell you when she needs something',
        ],
        correctIndex: 1,
        explanation:
          'Habits survive on fixed times and visible consequences, not on motivation. The plan in her words, the checklist and the yearly check-in are what make a year of knowledge usable in the years ahead.',
      },
    ],
  },
};
