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
const NHS_HEAVY: Source = {
  label: 'NHS: Heavy periods',
  url: 'https://www.nhs.uk/conditions/heavy-periods/',
};
const NHS_CONTRACEPTION: Source = {
  label: 'NHS: Contraception',
  url: 'https://www.nhs.uk/conditions/contraception/',
};

const M = 4;

export const month04: MonthContent = {
  month: M,
  theme: 'The follicular phase',
  focus: 'Energy and capacity rise: plan the big things together, and use the surplus wisely.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'The follicular phase already starts on day 1',
      insight:
        'Technically, the follicular phase begins on the same day as the period. It runs from day 1 to ovulation, so it overlaps the bleeding. What most people experience as "the follicular phase" is the last part: the days after the bleeding, when estrogen is really on its way up. So this month is mostly about the time from the end of the period to ovulation, roughly day 6 to 13 in a 28-day cycle. But it is worth knowing that the ovaries are already at work while she is bleeding. The body prepares the next round before the previous one is finished. This month is about that preparation, what it does to energy, mood and brain, and how the two of you use the best week wisely.',
      action:
        'Look at the Home screen to see which cycle day she is on today, and work out roughly how many days there are until ovulation.',
      phaseTags: ['menstrual', 'follicular'],
      sources: [ACOG_CYCLE, NHS_PERIODS],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: 'FSH: the starting signal comes from the brain',
      insight:
        'It all starts in the brain. When the hormones hit bottom during the period, the pituitary picks that up and sends FSH, follicle-stimulating hormone, into the blood. FSH does exactly what the name says: it stimulates a small group of follicles in the ovaries, each with an immature egg inside, to grow. The follicles answer by producing estrogen. As soon as estrogen rises, it signals back to the brain to turn FSH down. It is a loop, not a switch. That also means anything that disturbs the brain, such as stress, lack of sleep and illness, can delay the start without anything being wrong with the ovaries. The follicular phase is the part of the cycle the brain has most influence over.',
      action:
        'Say the model out loud to yourself: "The brain sends FSH, the follicles answer with estrogen, estrogen brings capacity." That is the whole phase in one line.',
      phaseTags: [],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 3),
      month: M,
      day: 3,
      title: 'The follicles compete, and one wins',
      insight:
        'At the start of the phase, 10-20 follicles grow at the same time. Around day 5-7 a selection happens: the follicle most sensitive to FSH becomes dominant, and the others shrink back. The winner grows to around two centimetres and produces most of the estrogen of the cycle. That is why estrogen rises steeply in the second half of the follicular phase rather than evenly. The egg in the dominant follicle finishes maturing while the follicle prepares to burst at ovulation. It is an impressive process that happens without her feeling it, and that starts over every single cycle. Every month the body picks one egg out of a whole group, entirely on its own.',
      action:
        "Tell her one thing from today's card that you did not know before. It makes the knowledge shared without lecturing.",
      phaseTags: [],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'Estrogen builds up: lining and capacity',
      insight:
        'Estrogen from the follicles has two jobs. One is local: it makes the uterine lining grow back after the period, ready for a possible fertilised egg. The other job happens throughout the body. Estrogen affects the brain, skin, muscles, bones, blood vessels and metabolism. There are estrogen-sensitive cells almost everywhere. That is why rising estrogen is not felt only in the pelvis but as a general lift: more energy, better mood, clearer thinking, smoother skin and often better sleep. It is not a mood hormone, it is a building hormone that happens to build capacity too. The rest of the month is about what that lift means in practice, and how the two of you use it.',
      action:
        'Notice today whether there is something she does more easily or faster than a week ago, and tell her.',
      phaseTags: ['follicular'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'The shift after the period',
      insight:
        'The shift from period to follicular phase is often obvious if you look for it. The bleeding tapers off, the cramps let go, and somewhere between day 4 and 7 there is a day when she gets up and simply feels better. Many women describe it as "coming back to themselves". It is one of the most predictable transitions of the cycle, and yet most partners miss it, because we notice more when something gets worse than when it gets better. It is worth training the opposite. Being seen on the good days matters at least as much as being helped on the hard ones.',
      action:
        'If the period has just ended or is about to: ask "can you feel the energy coming back?" and listen to the answer.',
      phaseTags: ['menstrual', 'follicular'],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: 'Serotonin and dopamine: why the mood rises',
      insight:
        'Estrogen affects the two messengers that matter most for mood and motivation. Serotonin keeps mood stable and dampens unease; estrogen increases both its production and the brain\'s sensitivity to it. Dopamine drives motivation, reward and the urge to get started; it rises with estrogen too. The result is a week when things feel possible, when there is appetite for starting projects, and when the irritation threshold is higher. It is not "artificially good mood". It is the brain\'s normal chemistry with a bit of a tailwind. And it is exactly what is missing in the week before the period, when estrogen falls and takes serotonin down with it. It is the same brain, with different conditions.',
      action:
        'If there is a project at home you have both been pushing ahead of you, suggest starting on it today or tomorrow.',
      phaseTags: ['follicular'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'The words come more easily',
      insight:
        'Several studies suggest that verbal ability, the capacity to find words, express yourself and recall words, is slightly better when estrogen is high. The effect is small on average and varies a lot from person to person, so it is not a rule. But many women recognise it: conversations flow more easily mid-cycle, and the words are harder to find in the days before the period. For the two of you that means something quite concrete. The conversations where it matters that she is heard correctly, and where you both need to express yourselves precisely, are best placed here. Not because she is worse at other times, but because the conditions are better.',
      action:
        'Have one conversation today that you would normally postpone because it needs you both to express yourselves well. Pick something medium-sized, not the biggest thing.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: 'More appetite for the new',
      insight:
        'Together, estrogen and dopamine make the brain more open to new things and more willing to take a chance. It shows in small ways: wanting to try a new route, saying yes to an invitation, making a decision that has been waiting. It is also why the follicular phase is a good time to suggest changes, from swapping routines at home to discussing a job change. The same suggestion can sound like an opportunity on day 10 and like a threat on day 26. The difference is not the suggestion. Do keep in mind, though, that "more courage" is not the same as "better judgement"; the big things should still sleep on it for a night.',
      action:
        'Is there a suggestion you have been carrying around for a while? Present it today as an idea, not a decision, and let her chew on it.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'Appetite drops',
      insight:
        'Many notice that they eat less in the follicular phase. It is not imagination. Estrogen dampens appetite a little, and at the same time the body\'s energy use is slightly lower than in the luteal phase, when progesterone demands 100-300 extra calories a day. The cravings for sweet and salty that fill the week before the period are largely gone. She finds it easier to feel real hunger and real fullness. For you, the point is simple: do not measure her appetite by this week. It is low now and high in two weeks, and both are normal. And skip praise like "you are so good at eating healthily"; it turns into a reproach a fortnight from now.',
      action:
        'Make a meal today that is light and fresh, and do not ask whether she has eaten enough. She can feel that herself this week.',
      phaseTags: ['follicular'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 10),
      month: M,
      day: 10,
      title: 'Sleep is often best now',
      insight:
        'Sleep follows the cycle. In the luteal phase progesterone keeps body temperature up, and the hormone drop in the last week gives many restless nights. In the follicular phase temperature is lower, estrogen supports deep sleep, and most sleep better and wake fresher. That is one of the reasons the surplus feels so clear: she is not only hormonally up, she is also rested. It also means the week suits late evenings, early mornings and a bit more load, because there is something to draw on. But do not use the good sleep to pay off the overdraft from last week. Use it to add to the balance.',
      action:
        'Suggest an evening out or an early morning walk this week, something you would not schedule in the week before the period.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'The skin tells the same story',
      insight:
        'Estrogen makes the skin thicker, more hydrated and more elastic and keeps oil production calm. That is why the skin is often clearest in the days around ovulation and most troubled in the week before the period, when estrogen falls and progesterone increases oil. It is one of the most visible traces of the cycle, and it is worth knowing for one reason: comments. "You look fresh" is a fine sentence today. "You look tired" is a bad sentence three weeks from now. The skin is not something she controls, and it is not something you need an opinion about. But you can learn to see it as one of the signs that tell you where in the cycle she is.',
      action:
        "Notice the skin today without commenting on it. Write it in the app's note for the day if you see a pattern over the next cycles.",
      phaseTags: ['follicular', 'ovulation'],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: 'Training can be turned up',
      insight:
        'The studies are less clear-cut than fitness blogs make them out to be, but the tendency is there: many experience better performance, faster recovery and more appetite for hard training in the follicular phase. Estrogen has a protective effect on muscle, and the lower body temperature and better sleep do the rest. That does not mean she should train by a phase calendar. It means that if she feels like pushing herself this week, it is a good time, and if she feels less like it in the week before the period, that is not laziness. The most important rule is still her own sense of things. The calendar is a supplement, not a programme.',
      action:
        'Suggest a shared activity with a bit of pulse this week: a run, a long bike ride, a swim. Let her choose the intensity.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: 'Social energy: put the guests here',
      insight:
        'Social capacity is one of the things that swings most across the cycle. In the follicular phase there is typically appetite for people: dinners, family visits, parties, the big birthday. In the week before the period the same plan can feel like a burden, even though she looked forward to it when it was made. That does not mean she is unstable. It means plans are made with one brain and carried out with another. The easiest help you can give is to know the calendar: when you get invited, or when you are having guests yourselves, look at where in the cycle the date lands before you say yes. It is a simple check that saves a lot of cancellations.',
      action:
        'Look at the next social plan in the calendar. If it lands in the PMS week, suggest moving it a week earlier while that is still easy.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'Travel and the big days',
      insight:
        'Trips, moves, job interviews, exams, the big family gathering: everything that takes capacity, energy and patience with other people goes more easily, on average, in the follicular phase and around ovulation. There are no cramps, sleep is good, mood is robust, and there is courage for the unknown. You cannot always control it; exams are where they are. But what you plan yourselves, you can place wisely. A holiday that starts on day 7 is a different holiday from one that starts on day 24, with the same destination and the same budget. All it takes is looking at the app when you book. And remembering that the prediction is an estimate that can shift by a few days.',
      action:
        "Is there a trip or a big event in the making? Open the app's prediction and see which phase the dates hit.",
      phaseTags: ['follicular', 'ovulation'],
    },
    {
      id: dailyId(M, 15),
      month: M,
      day: 15,
      title: 'Hard conversations: now is the time',
      insight:
        'Month 1 mentioned it briefly, and month 2 went into it in depth: put the hard conversations outside the PMS window. This week is the other half of that advice. The follicular phase is when stress resilience is highest, the words come most easily, and there is capacity to hear each other\'s perspective without getting defensive. That goes for both of you, because conflict is an interplay. It does not mean the conversation will be pleasant. Money, division of chores, family and the future are hard topics on any day. But they have better odds now. So do not wait for it to "feel right". Raising something hard rarely feels right. Use the calendar as the basis for the decision instead.',
      action:
        'Pick the one conversation you have postponed the longest, and ask: "Do you have the capacity for us to talk about money tonight or tomorrow?"',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'Big decisions and the extra week',
      insight:
        "Decisions about housing, children, work or money are easier to make when there is clarity and capacity, and there often is now. But there is a trap: a decision made in a week of high energy and big courage also has to hold in a week of low energy. That does not mean the decision is wrong if it feels heavy on day 26. It means you should test it against both states before you sign. The best approach is to talk the big thing through in the follicular phase, let it rest for a week or so, and confirm it when you both still agree. Not because her judgement fails, but because neither of you should make a big decision on one day's mood.",
      action:
        'If you are facing something big, agree on a date about a week from now when you confirm the decision, instead of closing it today.',
      phaseTags: ['follicular', 'ovulation'],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'The danger of filling the calendar',
      insight:
        "There is a downside to the good week: it gets overbooked easily. When everything feels possible, you say yes to the dinner, the training, the project, the weekend trip and the family visit, and suddenly there are five things in a week that was also supposed to have rest in it. Capacity is not free; it gets used up. And the bill that follows often lands in the luteal phase, when she has the least to pay with. Your job is not to slow her down; it is her week and her energy. But you can be the one who keeps an eye on the total, and who makes sure the week's plan has gaps in it too.",
      action:
        "Look at the week's calendar together, and remove or move one thing so that at least one completely free evening remains.",
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'Cycle syncing: myth and evidence',
      insight:
        '"Cycle syncing", the idea of planning food, training and work precisely by cycle phase, is popular on social media. Some of it holds: energy, sleep, appetite and mood follow the hormones on average, and timing the big things is real help. Much of it does not: there is no good evidence that particular foods "balance the hormones", that particular kinds of exercise are off limits in particular phases, or that all women follow the same template. The variation between women is bigger than the difference between phases. So use the calendar as an average to plan by, not as an answer key she has to live up to. Her own experience beats any table.',
      action:
        "Ask her whether there is anything in the app's phase entries that does not fit her. Note it down, and use her answer rather than the default.",
      phaseTags: [],
    },
    {
      id: dailyId(M, 19),
      month: M,
      day: 19,
      title: 'The good weeks are hers',
      insight:
        'There is a pitfall in learning about the cycle: you start explaining everything with hormones. When she is sharp, funny and full of energy on day 10, it is not "the estrogen" that is sharp. It is her, with good conditions. Just as the irritation on day 26 is her real irritation with bad conditions. If you credit the good days to hormones, you take the credit from her, and if you blame the hard days on hormones, you take the seriousness from her. The cycle explains the conditions, not the person. So never say "you are so happy, you must be in the follicular phase". Say "you are great today". It is both true and kinder.',
      action:
        'Give her concrete recognition today for something she did well, without mentioning cycle, phase or hormones with a single word.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 20),
      month: M,
      day: 20,
      title: 'Prepare the hard weeks now',
      insight:
        'The best time to prepare for the luteal phase is while there is capacity for it. It sounds banal, but that is how understanding turns into help. Concretely: fill the freezer with a couple of easy meals. Check that there are painkillers, pads or tampons and a heating pad in the house. Look at the calendar for the week before the next period and clear it a little. Agree on who takes which of the regular chores on those days. All of that is easy now and heavy in two weeks. And it signals something important to her: that you do not only react when things are on fire, but think ahead. It is the kind of care that is hardest to see and easiest to feel.',
      action:
        'Do one of the preparations today: put two portions of food in the freezer, or check the stock of practical things and top up.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: 'Spend the surplus on the two of you',
      insight:
        'It is easy to spend the good week on all the practical things that piled up: cleaning, paperwork, projects, appointments. But remember to spend some of it on the two of you. The follicular phase and the days around ovulation are often when desire, closeness and the wish to be together are highest, and it is no accident that the relationship feels easiest here. The closeness you build now is the buffer you draw on in the PMS week. If the whole surplus goes to chores, you arrive at the luteal phase with an empty tank on both accounts. So plan something that is only for you: an evening out, a walk without phones, a slow morning in bed.',
      action:
        'Book one thing this week that is purely for the two of you, and put it in the calendar so it does not get eaten by practical tasks.',
      phaseTags: ['follicular', 'ovulation'],
    },
    {
      id: dailyId(M, 22),
      month: M,
      day: 22,
      title: 'It is the follicular phase that varies',
      insight:
        'When a cycle is longer or shorter than usual, it is almost always the follicular phase that has moved. The luteal phase is stable at 12-14 days because the corpus luteum has a fixed lifespan. The follicular phase, on the other hand, is run by the brain, and the brain responds to stress, sleep, illness, travel and weight changes by postponing ovulation. A pressured month can give a 33-day cycle instead of 28, and the extra five days are added before ovulation. That is worth knowing for two reasons: the app\'s ovulation prediction is an estimate and can shift, and a late period more often means "hard month" than anything else. The body waits until there is calm.',
      action:
        'If the current cycle looks like it will be longer than usual, ask calmly whether there has been more pressure than normal.',
      phaseTags: [],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'If the energy does not come back',
      insight:
        'Most feel a clear lift when the period is over. If that lift fails to come month after month, if she is as tired on day 10 as on day 2, it is worth taking seriously. It can be perfectly ordinary things: too little sleep, too much work, a stressful period. But persistent fatigue can also be due to iron deficiency after heavy bleeding, a thyroid that is out of balance, or low mood that does not follow the cycle. You cannot diagnose any of it, and none of it is something she should "pull herself together" about. But you can be the one who sees the pattern in the app and says: "This deserves a doctor." A blood test is quick and clears up a lot.',
      action:
        'Look at the calendar for the last two cycles. Did the energy come back after the period? If not, mention it to her today.',
      phaseTags: ['menstrual', 'follicular'],
      sources: [NHS_HEAVY],
    },
    {
      id: dailyId(M, 24),
      month: M,
      day: 24,
      title: 'She is not more "herself" now',
      insight:
        'It is tempting to think of the follicular phase as "the real her" and the rest as noise. That is a mistake, and not a harmless one. If the energetic, social, patient version is the real one, then the tired, thoughtful, direct version in the luteal phase becomes a fault to be corrected. But the thoughts of the luteal phase are often just as true; they simply come without a filter. And the optimism of the follicular phase can overlook things too. She is the whole cycle. What you learn about the phases is conditions, not truths about who she is. The most respectful stance is that she is the same person all month with different amounts of capacity, and that both versions deserve to be taken seriously.',
      action:
        'Think of something she said in the last luteal phase that you wrote off as "mood". If there was something to it, bring it up today.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 25),
      month: M,
      day: 25,
      title: 'Ovulation: the peak and the turning point',
      insight:
        'The follicular phase ends with ovulation. Estrogen peaks, LH surges, and the dominant follicle bursts and releases its egg. For many, the days right here are the absolute high point of the cycle: most energy, most desire, most confidence. And then it turns. After ovulation progesterone takes over, and already a couple of days later the energy becomes more inward and calmer. It is not a drop, but a gear change. It is worth knowing because the window for using the surplus has an end date. What you have planned should ideally lie before or around ovulation, not after. Next month is all about ovulation, so today it is enough to know that the peak is there, and that it does not last.',
      action:
        "Check the app's estimated ovulation date for this cycle, and see whether your plans for the next few days lie on the right side of it.",
      phaseTags: ['ovulation'],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 26),
      month: M,
      day: 26,
      title: 'The luteal phase: collect what you set aside',
      insight:
        'Now the preparation pays off. If you filled the freezer, cleared the calendar and agreed on who takes what during the follicular phase, the luteal phase is where it gets used. Not as a grand gesture, but as something that is simply in place. The food is there. The evening is free. The chore is already taken. That is how the good week becomes help in the hard one: not by you doing more when she feels worst, but by most of it already being done. If you did not get around to preparing anything this time, that is completely fine. Notice what is missing now, and write it down for the next follicular phase. It is a system that gets better with every round.',
      action:
        'Use one of the things you prepared today, or write down the one thing you wish you had prepared, for next time.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 27),
      month: M,
      day: 27,
      title: 'Your energy does not follow hers',
      insight:
        'One thing many partners overlook: your capacity does not follow her cycle. That means you can be the stable factor who has energy in the weeks when she has less. But it also means you need to be careful not to let her good week set the pace for both of you, so that you are used up yourself when the luteal phase comes. The best help requires that you have something to give. Look after your own sleep, your own training and your own breaks, especially in the week when everything moves fast. That is not selfishness, it is maintenance. A partner who is run down takes the tone personally and forgets to respond to the need.',
      action:
        'Put one thing in the calendar this week that is only for you: a run, an evening with friends, an early night. Stick to it.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 28),
      month: M,
      day: 28,
      title: 'Log the good days too',
      insight:
        'Most people log when something is wrong: pain, low mood, sleep problems. That is natural, but it produces a calendar that only shows problems, which is both unfair and impractical. If you also log the good days, high energy, good mood, good sleep, a day when everything flowed, you get two things. A more honest picture of the cycle having at least as many good days as hard ones. And a far better sense of when the shift comes, because you can see both ends of the curve. After three or four cycles you can say with reasonable confidence: "Around day 6 it turns." That is valuable knowledge, and it only comes from what gets logged.',
      action:
        "Log today's energy and mood in the app, even if they are good. Ask her whether she will do the same this week.",
      phaseTags: [],
    },
    {
      id: dailyId(M, 29),
      month: M,
      day: 29,
      title: 'The PMS week with the follicular phase in mind',
      insight:
        'In the last week of the luteal phase, it is easy to forget that there is a follicular phase on the other side. But that is the knowledge that makes the week easier to carry for both of you. Not as a "just wait, it will pass"; that is dismissive. But as an inner calm in you: this is a phase, it has an end date, and in about a week the energy turns. That makes it easier to keep the pace down, let the big conversations wait, and respond to the need rather than the tone. And it lets you promise something concrete: "Let us take it next week, when we both have the capacity." That is a promise you can keep, because the calendar keeps it for you.',
      action:
        'If something hard comes up in these days, say: "This is important. Can we take it next week, when there is more calm?" and set a date.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 30),
      month: M,
      day: 30,
      title: 'Month 4: what you have learned',
      insight:
        "You now know that the follicular phase begins with FSH from the brain, that the follicles answer with estrogen, and that estrogen lifts the lining, the brain, the skin, sleep and muscles alike. You know that serotonin and dopamine rise, that the words come more easily, that there is more appetite for the new, that appetite for food drops, and that training can be turned up. You know that this is the best week for guests, trips, hard conversations and big decisions, but that it must not be overbooked, and that the surplus can be used to prepare the hard week. And most importantly: you know that the good weeks are hers, not the hormones', and that she is the whole cycle, not only the peak of it.",
      action:
        "Tell her the three things from this month that have changed most about how you see her cycle. Then take the month's quiz.",
      phaseTags: [],
    },
  ],
  weekly: [
    {
      id: weeklyId(M, 1),
      month: M,
      week: 1,
      title: 'From FSH to estrogen: how a cycle is built',
      body: [
        'Month 1 gave you the model: four phases, two hormones, one rhythm. This month we go deeper into the phase that brings the most capacity and gets the least attention: the follicular phase. It is interesting for two reasons. It is biologically impressive, and it is the point in the cycle where the two of you can gain the most from planning well.',
        'First the timing. Technically, the follicular phase runs from day 1, the first day of bleeding, all the way to ovulation. So it overlaps the period. What most people experience as "the follicular phase" is the last part: the days after the bleeding, roughly day 6 to 13 in a 28-day cycle, when estrogen really rises. It is also the part of the cycle that varies most in length. The luteal phase after ovulation is fairly stable at 12-14 days, while the follicular phase can be anything from a week to several weeks, depending on what else is going on in her life.',
        'It all begins in the brain. When estrogen and progesterone hit bottom during the period, the pituitary registers it and sends FSH, follicle-stimulating hormone, into the blood. FSH makes a group of 10-20 small follicles in the ovaries grow. Each follicle is a fluid-filled sac with an immature egg inside. The follicles answer by producing estrogen, and as estrogen rises it signals back to the brain to turn FSH down. It is a feedback loop, not a switch being flipped.',
        'Around day 5-7 a selection happens. The follicle most sensitive to FSH survives when FSH falls; the others wither. The dominant follicle grows to around two centimetres and produces most of the estrogen of the cycle. That is why estrogen rises steeply in the last week before ovulation. At the same time estrogen makes the uterine lining grow back after the period, ready for a possible fertilised egg. When estrogen peaks, it triggers the LH surge, the follicle bursts, and the egg is released. That is ovulation, and it ends the follicular phase.',
        'But estrogen does not only work in the pelvis. There are estrogen-sensitive cells in the brain, skin, muscles, bones, blood vessels and metabolism. That is why the rise is felt as a general lift: more energy, steadier mood, clearer thinking, better sleep, lower appetite, smoother skin and more appetite for training, talking and seeing people. It is not a mood hormone. It is a building hormone that happens to build capacity too. Next week we look more closely at what it does to the brain.',
        'Because the follicular phase is run from the brain, it is also sensitive to everything the brain registers: stress, lack of sleep, illness, travel, hard training and weight changes. The brain responds by waiting to trigger ovulation. That is why a pressured month often gives a longer cycle, and why the app counts ovulation backwards from the expected period instead of forwards from day 1. The prediction is an estimate. The body waits until there is calm.',
        'What you can do this week is notice the shift. Somewhere between day 4 and 7 there is typically a day when she gets up and simply feels better. Say it out loud when you see it, without mentioning hormones: "It seems like you have your energy back." And suggest one thing to do together in the week ahead. It is the easiest form of help there is: paying attention to the good, not only the hard.',
      ],
      conversationQuestion:
        'When after the period can you feel the energy turning? And what is the first thing you feel like doing when it does?',
      sources: [ACOG_CYCLE, NHS_PERIODS],
    },
    {
      id: weeklyId(M, 2),
      month: M,
      week: 2,
      title: 'Estrogen and the brain: what the surplus is made of',
      body: [
        '"She has more capacity" is an imprecise description. Capacity is made of several things, each of which can be felt, and each of which has an explanation. If you know the parts, you get better at seeing them and at using them well.',
        "Start with mood. Estrogen affects two messengers in the brain. Serotonin keeps mood stable and dampens unease; estrogen increases both its production and the brain's sensitivity to it. Dopamine drives motivation, reward and the urge to get started; it rises with estrogen too. The result is a week when things feel possible, when the irritation threshold is higher, and when there is appetite for starting something. It is not artificially good mood, it is the brain's normal chemistry with a tailwind. And it is exactly what is missing in the week before the period, when estrogen falls and takes serotonin down with it. Same brain, different conditions.",
        'Then the words. Several studies suggest that verbal ability, the capacity to find words, express yourself and recall words, is slightly better when estrogen is high. The effect is small on average and varies a lot from person to person, so it is not a law. But many recognise it: conversations flow more easily mid-cycle, and the words get stuck more in the days before the period. That means the conversations where it matters that you both express yourselves precisely and are heard correctly have better conditions here.',
        'Then the courage. Together, estrogen and dopamine make the brain more open to the new and more willing to take a chance. A suggestion for change, from new routines at home to a job change, can sound like an opportunity on day 10 and like a threat on day 26. The difference is not the suggestion. But be careful not to confuse courage with judgement. Big decisions should still sleep for a week, so they also hold when the energy is lower.',
        'Then the body. In the follicular phase body temperature is lower than in the luteal phase, and estrogen supports deep sleep, so most sleep better and wake fresher. Appetite drops a little, and the cravings for sweet and salty are largely gone. Many experience better performance and faster recovery in training, even though the studies are less clear-cut than fitness blogs make them out to be. The skin is often clearest around ovulation. All of these are small effects on their own, but they stack on top of each other and become what feels like capacity.',
        'And finally the social side. Appetite for people is one of the things that swings most across the cycle. In the follicular phase there is typically a wish for dinners, family and parties. In the week before the period the same plan can feel like a burden, even though she looked forward to it when it was made. That is not instability. It is that plans are made with one brain and carried out with another.',
        'Now for the important caveat. Everything above is averages. The variation between women is bigger than the difference between phases, and some feel almost none of it while others feel all of it. Her own experience beats any table. And even when the pattern fits, it is her who is sharp, funny and energetic on day 10, not her estrogen. The hormones explain the conditions. The person is the same all month.',
        'What you can do this week: place a conversation you have postponed here. Present the suggestion you have been carrying as an idea, not a decision. Suggest an activity with a bit of pulse. Do not measure her appetite by this week, and do not comment on her skin. And give her recognition for what she does well, without mentioning the cycle with a single word.',
      ],
      conversationQuestion:
        'What do you notice most clearly yourself in the good week: the mood, the energy, the words or the appetite for new things? And is there something in it that I miss?',
      sources: [NHS_PMS, ACOG_CYCLE],
    },
    {
      id: weeklyId(M, 3),
      month: M,
      week: 3,
      title: 'Use the surplus wisely: planning without overbooking',
      body: [
        'Timing is free help. You learned that in month 1. This week is about how you do it in practice: what should go in the follicular phase, how you avoid filling it too much, and how the good week becomes help in the hard one.',
        'Start with the list of what has the best odds here: guests and parties, trips and moves, hard conversations, big decisions, hard training sessions, new projects, and anything that takes patience with other people. Not because it is impossible at other times, but because sleep is good, the cramps are gone, mood is robust, and there is courage for the unknown. The simplest habit you can adopt is to look at the app before you say yes to anything big. Where does the date land? A holiday that starts on day 7 is a different holiday from one that starts on day 24. Just remember that the prediction is an estimate that can shift by a few days.',
        'The hard conversations deserve a paragraph of their own. Money, division of chores, family, the future: the topics are hard on any day, but they have better conditions when stress resilience is high and the words come easily. That goes for both of you, because conflict is an interplay. Do not wait for it to feel right; it rarely does. Use the calendar as the basis for the decision, and ask about capacity instead of throwing the topic on the table: "Do you have the capacity for us to talk about money tonight or tomorrow?" That gives her a choice, and it signals that you have thought about the timing.',
        "Big decisions have a particular trap. A decision made in a week of high energy and big courage also has to hold in a week of low energy. That does not mean it is wrong if it feels heavy on day 26. But it does mean you should test it against both states. Talk the big thing through in the follicular phase, let it rest for a week, and confirm it when you still agree. Neither of you should make a big decision on one day's mood, and that goes for you too.",
        'Now for the danger. The good week gets overbooked easily. When everything feels possible, you say yes to the dinner, the training, the project, the weekend trip and the family visit, and suddenly there are five things in a week that was also supposed to have rest in it. Capacity is not free; it gets used up. And the bill often lands in the luteal phase, when she has the least to pay with. Your job is not to slow her down, it is her week. But you can be the one who keeps an eye on the total, and who makes sure at least one completely free evening remains.',
        'The most important use of the surplus may be the least visible one: preparing the hard week. Fill the freezer with a couple of easy meals. Check that there are painkillers, pads or tampons and a heating pad in the house. Look at the calendar for the week before the next period and clear it a little. Agree on who takes which of the regular chores on those days. All of that is easy now and heavy in two weeks. And it tells her something words cannot: that you think ahead, not only react.',
        'Two things to finish. Spend some of the surplus on the two of you as well. The follicular phase and the days around ovulation are often when desire and closeness are highest, and that closeness is the buffer you draw on in the PMS week. If the whole surplus goes to chores, you arrive at the luteal phase with an empty tank on both accounts. And watch your own pace. Your capacity does not follow her cycle, and that is a strength, but only if you do not let her good week run you down so that you are used up when she needs you most.',
      ],
      conversationQuestion:
        'If you look at the next two weeks in the calendar: what would you most like to move, and what would you most like us to put in?',
      sources: [NHS_PMS],
    },
    {
      id: weeklyId(M, 4),
      month: M,
      week: 4,
      title: 'Cycle syncing, myths and what is hers',
      body: [
        '"Cycle syncing" is the idea of planning food, training, work and social life precisely by cycle phase. It is popular on social media, and it is worth taking apart, because some of it is useful and some of it is noise. As a partner it matters that you do not end up expecting a template she does not fit into.',
        'What holds: energy, sleep, appetite, mood and desire follow the hormones on average. The follicular phase typically brings capacity, the last week of the luteal phase typically brings less. Timing hard conversations, big decisions, guests and trips is real help, which is what this month has been about. That is evidence-based at the level where the NHS and other health authorities describe the cycle.',
        'What does not hold: there is no good evidence that particular foods or seeds "balance the hormones", that particular kinds of exercise are off limits in particular phases, or that all women follow the same four-week template. The effects on performance and thinking are small on average, and the variation between women is bigger than the difference between phases. Some feel almost nothing, others feel everything. A calendar that says "you should have energy now" is not help if she does not have it. Then it is a demand.',
        'One more caveat: if she uses hormonal contraception such as the pill, the ring or a hormonal coil, much of what you have read this month does not apply, or only partly. Most of those methods hold back ovulation, and then there is no follicle maturing and no natural rise in estrogen. The bleeding on the pill is a withdrawal bleed, not a period in the biological sense. She may still feel fluctuations, but they do not necessarily follow the phase model. Ask what she uses, and let her experience lead, not the table.',
        "That brings us to the most important thing: her own experience beats any table. The app shows an average to plan by. She knows what actually happens. Ask her what fits and what does not. Log the good days too, not only the hard ones, so the calendar shows the whole picture and not only the problems. After three or four cycles you have a pattern that is hers, and that is worth more than all the blogs' templates put together.",
        'There is also a myth that is harder to spot: that the follicular phase is "the real her" and the rest is noise. If the energetic, social, patient version is the real one, then the tired, thoughtful, direct version in the luteal phase becomes a fault to be corrected. But the thoughts of the luteal phase are often just as true; they simply come without a filter. And the optimism of the follicular phase can overlook things. She is the whole cycle. What you learn about the phases is conditions, not truths about who she is.',
        'And finally: the good weeks are hers. When she is sharp, funny and full of energy on day 10, it is not the estrogen that is sharp. It is her, with good conditions. If you credit the good days to hormones, you take the credit from her; if you blame the hard days on hormones, you take the seriousness from her. Never say "you must be in the follicular phase". Say "you are great today". It is both true and kinder, and it is the attitude that makes it bearable for her that you follow her cycle at all.',
      ],
      conversationQuestion:
        'Is there anything about the way the app or I describe your cycle that does not fit you? What would you change?',
      sources: [NHS_PERIODS, NHS_CONTRACEPTION],
    },
  ],
  wrap: {
    id: wrapId(M),
    month: M,
    title: 'Month 4: The follicular phase',
    summary: [
      'This month was about the best week of the cycle and about using it wisely. The follicular phase begins with FSH from the brain, the follicles answer with estrogen, one follicle wins, and estrogen builds both the lining and the capacity. It is felt as steady mood, easier words, more appetite for the new, better sleep, lower appetite for food, greater training capacity and a wish for people. All of it averages, with more variation between women than between phases.',
      "You have learned to place guests, trips, hard conversations and big decisions here, to confirm the big decisions a week later, to keep an eye on the total so the week does not get overbooked, to prepare the hard week while there is capacity, and to spend some of the surplus on the two of you. And you have learned that she is the whole cycle, that the good weeks are hers and not the hormones', and that her experience beats any table, especially if she uses hormonal contraception.",
      'Next month is about ovulation: the signs, the closeness and the fertile window, with knowledge and without pressure.',
    ],
    keepDoing: [
      'Say it out loud when the energy turns after the period, without mentioning hormones.',
      'Check the app before you say yes to anything big, and place it in the follicular phase.',
      'Keep at least one free evening in the good week so it does not get overbooked.',
      'Fill the freezer and clear the calendar for the PMS week while there is capacity.',
      'Confirm big decisions a week after you agreed on them.',
      "Log the good days too, so the pattern becomes hers and not the app's.",
    ],
    quiz: [
      {
        question: 'What starts the follicular phase?',
        options: [
          'Progesterone from the corpus luteum',
          'FSH from the pituitary, which makes the follicles grow',
          'Iron from food after the period',
          'Ovulation',
        ],
        correctIndex: 1,
        explanation:
          'The brain sends FSH, the follicles answer with estrogen. Because the start is run from the brain, stress and lack of sleep can delay the whole phase.',
      },
      {
        question:
          'It is day 7, the period has just ended, and she seems noticeably lighter. What is most helpful?',
        options: [
          'Say "you must be in the follicular phase now"',
          'Say nothing, it is just normal after all',
          'Say "it seems like you have your energy back" and suggest something to do together',
          'Ask whether she remembered to log it',
        ],
        correctIndex: 2,
        explanation:
          'The shift after the period is one of the most predictable transitions of the cycle. Seeing it and using it, without explaining it with hormones, is the help that matters most.',
      },
      {
        question:
          'You are invited to a big party, and the date lands three days before the expected period. What do you do?',
        options: [
          'Check the app together with her and ask whether to request another date or plan to leave early',
          'Say yes, she loves parties',
          'Say no without asking her',
          'Say yes and hope for the best',
        ],
        correctIndex: 0,
        explanation:
          'Plans are made with one brain and carried out with another. A quick check of the calendar before you say yes saves many cancellations, and the decision is still hers.',
      },
      {
        question: 'It is day 10, and she has said yes to five things this week. What helps most?',
        options: [
          'Say she is overdoing it',
          'Book even more, now that there is energy',
          'Say nothing, it is her week',
          'Go through the week together and suggest moving one thing so there is a free evening',
        ],
        correctIndex: 3,
        explanation:
          'Capacity gets used up, and the bill lands in the luteal phase. Your role is not to slow her down, but to keep an eye on the total and make sure there are gaps in the plan.',
      },
      {
        question:
          'You have talked about moving, and on day 11 you both agree and are excited. What is wisest?',
        options: [
          'Sign today, while you agree',
          'Agree on a date about a week from now when you confirm the decision',
          'Wait for the luteal phase and see whether she still wants to',
          'Let her decide alone',
        ],
        correctIndex: 1,
        explanation:
          'A decision made with high energy and big courage also has to hold with low energy. Talk it through now, and confirm it a week later when you still agree.',
      },
      {
        question:
          'A blog says she should eat particular seeds and avoid running in the luteal phase. What is the best reaction?',
        options: [
          'Buy the seeds and rearrange the training by the plan',
          'Say the cycle makes no difference to training',
          'Use the app as an average and ask her what she notices herself',
          'Follow the plan for one month to test it',
        ],
        correctIndex: 2,
        explanation:
          'Timing energy and capacity has evidence; seeds that balance hormones and forbidden kinds of exercise do not. Her own experience beats any table.',
      },
    ],
  },
};
