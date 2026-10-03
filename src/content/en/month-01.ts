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
  focus: 'Get to know the four phases, and find out where she is today without guessing.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'Day 1 is the first day of bleeding',
      insight:
        'Day 1 is the first day of real bleeding. Not the day she mentioned it, not the day you noticed, and not the day it stopped. A cycle is counted from that day to the day before the next bleeding starts. Everything else in the app is calculated from that date: the phase, the expected ovulation and the next period. So if you guess, the app guesses too, just with more decimal places. 28 days is the average, but 21 to 35 is normal for adults, and very few women hit the same number twice in a row. Your job today is not to understand the female body. It is to get one date right.',
      action:
        'Ask her when her last period started. Yes, just ask. Then log the date in the app if it is not already there.',
      phaseTags: [],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: 'Four phases, one rhythm',
      insight:
        'You have probably heard of two states: "on her period" and "not on her period". There are four. Menstruation (the bleeding), the follicular phase (energy returns), ovulation (the peak) and the luteal phase (calmer, and eventually PMS). The first two are driven by estrogen, which rises. The last half is run by progesterone, which rises first and then falls. It is the ups and downs of those hormones that make energy, mood, sleep and desire shift across the month. Once you know the rhythm, the shifts stop catching you off guard. What you used to call "a weird week" has had a date on it the whole time. You just never looked.',
      action:
        'Open the Home screen, see which phase she is in today, and read the short phase entry under "The phases". It takes a minute.',
      phaseTags: [],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 3),
      month: M,
      day: 3,
      title: 'Estrogen and progesterone, in short',
      insight:
        'Relax, you are not being asked to learn biochemistry. Two hormones will do. Estrogen builds up: it rises from the end of the period towards ovulation and brings energy, clarity and desire. Progesterone holds back: it rises after ovulation, has a calming, slightly dulling effect, and raises body temperature a little. When both drop sharply in the week before the period, that is felt as PMS. It is not "mood swings out of nowhere". It is a hormone drop with a timing you can look up in a calendar. You have two hormones to keep track of. You can name eleven footballers from the 1998 World Cup. You will manage this.',
      action:
        'Say the sentence out loud to yourself: "Estrogen up = energy. Progesterone up = calm. Both down = vulnerable." That is the whole model, and you know it now.',
      phaseTags: [],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'What actually happens during the period',
      insight:
        'Here is what you did not learn in year seven, because you were looking out of the window. The bleeding is the lining of the womb being shed, because there was no fertilised egg to hold on to. The womb contracts to push it out, and those contractions are the cramps. At the same time both hormones are at rock bottom, so energy is low, especially on days 1 and 2. The total amount of blood is typically only 30-40 ml over the whole period, but it feels like far more, and with the blood she loses iron. A period normally lasts 2-7 days. So this is a muscle working for days on end while the fuel is low. It is not "a bit of a tummy ache".',
      action:
        'If she is on her period now: take one practical chore off her hands without asking. If not: notice what usually bothers her in the first days, so you are ready next time.',
      phaseTags: ['menstrual'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'Cramps: heat works',
      insight:
        'Period pain is caused by substances called prostaglandins, which make the womb contract. The more prostaglandin, the stronger the cramps. Heat on the belly or lower back relaxes the muscle and measurably reduces the pain. It is one of the best documented home remedies there is, and it requires zero conversation. Your best friend today is a wall socket. Over-the-counter painkillers like ibuprofen work best when taken at the first signs, not when the pain has already peaked; there are no points for waiting. Light movement, like a walk, also helps more people than you would think. You do not need to understand prostaglandins. You just need to be able to find the heating pad in the dark.',
      action:
        'Make sure there is a heating pad or hot-water bottle in the house, and that she knows where it is. It is a one-off investment in a lot of better days.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: 'Fatigue and iron',
      insight:
        'The tiredness in the first days of the period has two sources: low hormones and the loss of iron with the blood. Iron carries oxygen around the body, and even a small deficit is felt as a heavy body and a short fuse. Women with heavy periods have a markedly higher risk of iron deficiency. Iron is absorbed best from meat, fish and eggs, while iron from plants (lentils, beans, leafy greens) is absorbed better together with vitamin C. Coffee and tea with the meal reduce absorption. So a cup of coffee with the steak is not the generous gesture you thought it was. You are looking at a genuine chance to help with a saucepan. That is rare, so take it.',
      action:
        'Cook or order a meal with iron in it today: beef, lentils, chickpeas or spinach, ideally with something citrus on the side. The coffee can wait until afterwards.',
      phaseTags: ['menstrual'],
      sources: [NHS_HEAVY],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'What is a normal amount of bleeding?',
      insight:
        'You cannot judge blood loss from the outside, so stop trying. Use the signs doctors use instead: a pad or tampon that needs changing every hour for several hours in a row, bleeding that lasts more than 7 days, clots larger than a 10p coin, or bleeding that makes her avoid going out. That is called heavy menstrual bleeding and affects around one in four women at some point. It can be treated, but many live with it because they assume it is normal. Your knowledge makes a difference here. And it starts in a place you may have been avoiding for years: the pad and tampon aisle at the supermarket. It does not bite.',
      action:
        'Check that there are pads or tampons in the house in the type she uses. If you do not know which, ask. It is not embarrassing, it is practical.',
      phaseTags: ['menstrual'],
      sources: [NHS_HEAVY],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: 'The energy comes back',
      insight:
        'When the bleeding stops, the follicular phase begins in earnest. The pituitary gland sends out the signal hormone FSH, and a group of egg follicles in the ovaries starts to mature. They produce estrogen, which rises day by day. Estrogen increases serotonin and dopamine in the brain, so mood, energy and motivation rise with it. Many describe it as "coming back to themselves". It is often the most pleasant week of the cycle, and it arrives right after the most demanding one. You will be tempted to take credit for the good mood. Do not. It is FSH, not you. But you are allowed to notice it and say it out loud. That is actually the important part.',
      action:
        'Notice the shift and say it out loud: "It seems like your energy is back." Being seen in the good days matters as much as in the hard ones.',
      phaseTags: ['follicular'],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'Plan the big things now',
      insight:
        'The follicular phase is the best time in the cycle for anything that takes energy: guests, travel, hard workouts, big decisions, difficult conversations. Estrogen makes the brain more open to new things and more resilient to stress. That does not mean she is "herself" now and "not herself" the rest of the month. It means timing is free help, and until now you have been paying full price. The same conversation can go well on day 9 and sideways on day 26 without either of you doing anything differently. You just picked day 26, because that was when it occurred to you. Now you have a calendar. Use it.',
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
        'Someone said 28 days in year seven, and you have believed it ever since. For adults, 21-35 days is normal, and the average is around 28. A cycle is rarely exactly the same length each time; a variation of a few days is completely ordinary. It is the first half, the follicular phase, that varies most. The luteal phase after ovulation is fairly stable at 12-14 days. That is why the app counts ovulation backwards from the expected period, not forwards from day 1. After a couple of logged cycles the estimate improves, because it is built on her average rather than a standard number. The app learns. So can you. You started from the same place, and it does not even have a calendar on the fridge.',
      action:
        'Open settings and check that the cycle length matches what she says herself. If you are unsure, leave the default; the app adjusts over time.',
      phaseTags: [],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'Why the cycle moves',
      insight:
        "Stress, illness, poor sleep, travel across time zones, weight changes and hard training can all delay ovulation, and then the period arrives later. It is the body's way of saying: not right now. Breastfeeding, perimenopause, PCOS and thyroid function affect the cycle too. A single late or early period rarely means anything, so put the phone down and stop googling. If the cycle becomes consistently shorter than 21 days, longer than 35, or goes missing for more than three months without pregnancy, that is worth a conversation with a doctor. Not with you, not with the internet. With a doctor.",
      action:
        'If the period is late, ask with curiosity rather than worry: "Has there been a lot of pressure on this month?" That is the explanation more often than anything else.',
      phaseTags: [],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: 'Talking about it without making it awkward',
      insight:
        'Many couples only talk about the cycle when something is wrong. That makes the subject loaded, a bit like only mentioning the car when it is smoking. It helps to talk about it when everything is fine, in small doses and with curiosity rather than analysis. "I am trying to learn how your cycle affects you, so I can be better at helping" is a sentence most people take well. Avoid explaining her own body to her; she has lived in it longer than you have. And never use the phase to explain away her opinions. She has opinions all 28 days. Ask, and listen. You do not need a follow-up question ready. Silence is an answer too.',
      action:
        'Tell her you are using the app, and why. Ask whether there is anything she would particularly like you to pay attention to.',
      phaseTags: ['follicular', 'ovulation'],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: 'Ovulation: the midpoint of the cycle',
      insight:
        "When estrogen peaks, it triggers a sharp surge in the hormone LH. 24-36 hours later the mature follicle bursts and the egg is released. The egg lives only 12-24 hours. That is what ovulation is: one day, not a week. If you thought it was a week, you are in good company; so did most of the room. It typically happens 14 days before the next period, so around day 14 in a 28-day cycle and around day 18 in a 32-day cycle. The app's date is an estimate based on averages, not a measurement. Body signs and ovulation tests are more precise. The app makes an educated guess. You made an uneducated one. Now you guess together, and that is genuinely progress.",
      action:
        'Look at the app\'s estimated ovulation date for this cycle, and read the entry on ovulation under "The phases". Five minutes, and you know more than yesterday.',
      phaseTags: ['ovulation', 'follicular'],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'The fertile window is a shared responsibility',
      insight:
        'Sperm can survive up to five days in the womb, and the egg lives for a day. So the fertile days are the five days before ovulation plus the day itself: six days in total. Note who supplies the five days in that sum. That is you. It applies whether or not you want a pregnancy. If you do not, this is where contraception matters most, and it is not her job alone, even if it may have looked that way so far. If you do, the days leading up to ovulation matter more than the day after. And never use the app\'s window as contraception. It is an average, cycles move, and "the app said" is not a sentence anyone wants to hear in nine months.',
      action:
        'Talk about how you both feel about your contraception right now, and whether the responsibility is fairly shared. Five minutes is enough, and you start the conversation.',
      phaseTags: ['ovulation'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 15),
      month: M,
      day: 15,
      title: 'Signs of ovulation',
      insight:
        'The body often shows that ovulation is approaching, and no, it is not something you can spot from the sofa. Discharge becomes clear, slippery and stretchy, like egg white. Some feel a brief twinge or ache on one side of the lower abdomen when the follicle bursts. Desire is often higher, skin clearer, mood at its best. After ovulation, body temperature rises 0.3-0.5 degrees and discharge becomes thicker again. If you follow the signs over a few months, you will get far better at knowing where in the cycle she is than any app. She has access to data you will never get. The only thing standing between you and that knowledge is a question you have been afraid to ask.',
      action:
        'Ask whether she can feel when she ovulates, and what she notices. Many can, and few have ever been asked.',
      phaseTags: ['ovulation'],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'Desire through the cycle',
      insight:
        'Desire moves with the hormones. Around ovulation, estrogen and a little testosterone are at their highest, and many feel more desire and more energy for closeness. In the luteal phase, progesterone often dampens desire, and in the PMS days and the first days of the period the body is typically at its most closed. Some experience the exact opposite, and that is normal too. The point is not to plan by a table; do not put ovulation in your calendar with an alarm. The point is to stop taking low desire personally at certain times of the month. Day 26 is not a referendum on you. It is progesterone, and progesterone has never heard of you.',
      action:
        'Make it clear that closeness is not an expectation on the heavy days, and that you appreciate it when it comes. Say it, and mean it.',
      phaseTags: ['ovulation', 'luteal'],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'The luteal phase: progesterone takes over',
      insight:
        'After ovulation, the empty follicle becomes the corpus luteum, which produces progesterone. Progesterone prepares the lining of the womb for a possible fertilised egg, raises body temperature slightly and has a calming, almost sedating effect. The first week after ovulation therefore often feels calm and homely. The energy is not gone, but it has turned inwards. If the egg is not fertilised, the corpus luteum dies after 12-14 days, the hormones fall, and the period begins. This is the week not to suggest a festival. It is also the week when "what do you want to do?" is a task, not an offer. Come with a suggestion. A concrete one. Not three.',
      action:
        'Suggest a quiet evening at home rather than asking "what do you want to do?". Concrete, easy suggestions are a gift in this phase, and they cost you nothing.',
      phaseTags: ['luteal'],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'Sleep and temperature',
      insight:
        'Progesterone raises body temperature by 0.3-0.5 degrees throughout the luteal phase. That sounds like nothing, until you are the one lying there 0.4 degrees too warm at three in the morning. It is enough that many sleep worse, wake during the night or feel hot. Combined with the hormone drop in the final week, poor sleep is one of the most overlooked reasons the PMS days feel so hard. A cool bedroom, a lighter duvet and a calm evening help more than you would think. You probably have an opinion about the bedroom temperature. This week your opinion is wrong, whatever it is. Open the window.',
      action:
        'Make the bedroom cooler tonight: air it out, turn the heating down, or offer to swap to the lighter duvet. You will survive with an extra jumper.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 19),
      month: M,
      day: 19,
      title: 'Hunger and cravings are not a lack of willpower',
      insight:
        'In the luteal phase the body burns around 100-300 more calories a day, and progesterone increases appetite. At the same time serotonin falls as estrogen falls, and the body goes looking for quick carbohydrates to make up for it. Cravings for sweet, salty and chocolate in the week before the period are biology, not weak character. Regular meals, protein and fibre smooth out the swings, and hunger fuels irritability more than anything else in this phase. That goes for you too, by the way. The difference is that you do not have an explanation. Your role is simple: fill the cupboard, and keep your opinion about its contents to yourself. Nobody has ever been thanked for a comment about a snack.',
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
        'Progesterone makes the body hold on to fluid. The belly feels bloated, the breasts become tight and tender, and clothes fit differently. It is temporary and completely normal, but it affects body image more than many partners realise. Comments about belly, weight or "you look tired" land hard this week, even when kindly meant. Especially when kindly meant, because then you will not even understand what went wrong. Physical closeness should be gentle, especially around the breasts. Here is the simple rule: if the sentence starts with "you look", stop. There is no good ending to it this week.',
      action:
        'Say something real and specific you appreciate about her today that has nothing to do with appearance. Think first; that is what makes it real.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: 'PMS: the amplifier',
      insight:
        'PMS is the physical and emotional symptoms that arrive in the days before the period and disappear once the bleeding starts. The cause is the sharp drop in progesterone and estrogen, which the brain answers with lower serotonin. Around three in four notice it, and 3-8 percent have the severe form, PMDD, which is a real condition with treatment. Important: PMS does not invent feelings. It amplifies them. Think of an amplifier: it does not write the music, it turns it up. What annoys her on day 26 is usually real, just louder. So if the dishwasher gets mentioned loudly, the dishwasher is still the problem. And it has been sitting there since day 9.',
      action:
        'Find the PMS window in the app for this cycle, and decide to be the one with patience in stock on those days. You stock up now, not on the day.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 22),
      month: M,
      day: 22,
      title: 'Respond to the need, not the tone',
      insight:
        'In the PMS days, messages often arrive wrapped in a sharper tone than they are meant. "You have not emptied the dishwasher" can mean "I am exhausted and feel like I am carrying everything alone". If you respond to the tone, you get a conflict about the tone, and nobody wins that one. If you respond to the need, she gets help, and the tone goes away on its own. It requires counting to three, and not needing to be right just now. You can be right on day 9, if you still feel like it; you usually will not. This is not the same as putting up with anything. It is choosing your moment, and right now the moment is wrong.',
      action:
        'Next time the tone gets sharp: say "it sounds like you are under pressure, what can I take off your plate?" instead of defending yourself. Then empty the dishwasher.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'Timing difficult conversations',
      insight:
        'Most couples have a few fixed subjects that cause friction: money, family, who does what, the future. The conversations are necessary, but the timing is optional, and you have a habit of picking the moment it pops into your head. At 11 pm. On day 27. In the last 4-5 days before the period, stress resilience is at its lowest and emotions at their highest, so the same conversation ends in conflict more often. That is not a reason to avoid the subject for a week, but to place it deliberately in the follicular phase, where there is energy to hear each other. The budget conversation does not get better by waiting until day 26. It just gets louder.',
      action:
        'If there is a difficult conversation you have been putting off, check the calendar and put it outside the PMS window. Write it down, so you do not "just remember it" again.',
      phaseTags: ['luteal', 'follicular'],
    },
    {
      id: dailyId(M, 24),
      month: M,
      day: 24,
      title: 'Sentences that never help',
      insight:
        '"Is it that time of the month?" "It is just hormones." "You are overreacting." You have said at least one of them. All three do the same thing: they say her experience does not count. Even when the hormones really are amplifying, the feeling is real, and having it dismissed makes it bigger. So you have not just lost the argument, you have made it longer. The opposite works: acknowledge first, and talk about timing afterwards if needed. "I can hear this is hitting hard right now" opens things up. "Can we take it tomorrow, when we are both fresh?" is fine to say once the acknowledgement has come first. The order is not optional. Acknowledgement first, timing after, never the other way round.',
      action:
        'Pick one sentence from the list you have used yourself, and decide on an alternative you will say next time. Practise it out loud when nobody is listening.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 25),
      month: M,
      day: 25,
      title: 'Pain that knocks her out is not normal',
      insight:
        'Ordinary period pain is unpleasant but manageable with heat and over-the-counter painkillers. Pain that makes her call in sick, throw up, be unable to stand upright, or that also comes outside the period, is not "just a period". Endometriosis affects around 1 in 10 women, and on average it takes 7-10 years to get the diagnosis, precisely because the pain gets normalised. By her, by the doctor, by people who mean well. You cannot make the diagnosis, and you should not try. But you can be the one who does not normalise it. The one who says calmly: this deserves a doctor, and I am coming with you.',
      action:
        'Ask how bad it usually is on a scale from 1 to 10, and whether it has ever stopped her from doing things. Listen without playing it down.',
      phaseTags: ['menstrual', 'luteal'],
      sources: [NHS_ENDO, NHS_PAIN],
    },
    {
      id: dailyId(M, 26),
      month: M,
      day: 26,
      title: 'Why the calendar helps you both',
      insight:
        'A logged cycle is not surveillance, it is memory. And your memory is not as good as you think. After two or three cycles you can see whether the headache always comes on day 25, whether sleep gives out in the luteal phase, whether the irritation has a fixed date. It takes the guesswork out. She gets confirmation that there are patterns and not just "bad days", and you get a diary you can act on instead of being surprised. Again. By the same thing as last month. The calendar only works if it gets logged. It has to be easy, and it has to be hers. You are not the editor. You are the reader.',
      action:
        'Look at the calendar together for five minutes. Ask whether there is anything she would like to log that the app does not ask about.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 27),
      month: M,
      day: 27,
      title: 'Find the first pattern',
      insight:
        'You have almost followed a whole cycle. Congratulations, that is one more than you have ever followed before. Even after one there is something to be had: which day the energy turned, when the irritation came, whether sleep changed, what helped during the period. Patterns only become really clear after three or four cycles, but what you notice now is the beginning. Write it down. Memory of how last month went is notoriously poor, especially for the days when it was hard. You can remember the score of a match from 2007. You cannot remember which day the heating pad helped. Hence the note.',
      action:
        'Write down one thing you noticed in this cycle, in the note on a day in the calendar. Just one. You are not writing a novel.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 28),
      month: M,
      day: 28,
      title: 'Ready for the next period',
      insight:
        'When the app says the period is expected in a couple of days, it is time to prepare. Nothing big, just practical: are there pads or tampons, painkillers, something easy to eat, a heating pad that works? Is the calendar reasonably clear for the next two days? Preparation is invisible when it succeeds; she just notices that it is easier than last time. Nobody comes round to applaud. That is how it is supposed to be. If you need praise for buying pads, write it in your own note. It is in small things like these that understanding turns into action, and that is what this app is about.',
      action:
        'Check the four things: pads/tampons, painkillers, easy food, heat. Top up whatever is missing, and do it today, not on day 1.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 29),
      month: M,
      day: 29,
      title: 'Your role: not to fix, but to be there',
      insight:
        'Many partners want to solve things. The cramps, the mood, the tiredness. You probably already have a three-point plan. But most of it cannot be fixed, only made easier to carry. What helps is often simple: that she does not have to explain herself, that the practical stuff gets done, that you do not take offence at low energy, and that you stay. The question "do you want solutions or just an ear?" saves a lot of misunderstandings, because the answer changes from day to day and from phase to phase. And when the answer is "just listen", listen. That does not mean "listen, and then present your three points". The points can wait. They always can.',
      action:
        'Ask the question next time she tells you about something hard: "Do you want suggestions, or should I just listen?" Then do what she answers. Not what you had planned.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 30),
      month: M,
      day: 30,
      title: 'Month 1: what you have learned',
      insight:
        'You now know that day 1 is the first day of bleeding, that the cycle has four phases driven by estrogen and progesterone, and that most shifts in energy, mood, sleep and desire have a timing that can be predicted. You know that heat works on cramps, that iron and sleep matter, that PMS amplifies rather than invents, and that timing conversations is free help. That is more than you knew 30 days ago, when you thought ovulation was a week. Most importantly: you know your job is to notice, ask and act on the practical. You are not done. But you are no longer the man with the blank stare and the heating pad. The rest of the year builds on this.',
      action:
        "Write down three things you learned this month, and tell her what they are. Then take the month's quiz. Yes, there is a quiz.",
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
        'If you only read one article in this app, make it this one. It explains what happens over the course of a cycle and why it matters to you as a partner. It takes five minutes, which is less than you spend choosing something to watch.',
        'A menstrual cycle begins on the first day of real bleeding, day 1, and ends the day before the next bleeding. The average is 28 days, but 21-35 is normal, and most women vary by a few days from one cycle to the next. So if you have been treating 28 as a law of nature, you have been wrong about half the months. What varies is almost always the first half. The second half, the time after ovulation, is fairly stable at 12-14 days.',
        'The cycle is run by two main hormones, and you only need to know those two. Estrogen builds up. It rises from the end of the period towards ovulation, and with it rise energy, mood, clarity and desire. Progesterone holds back. It rises after ovulation, has a calming, slightly dulling effect, raises body temperature a touch and increases appetite. When both hormones drop sharply in the week before the period, that is felt as PMS. That is the whole chemistry. The rest is timing.',
        "Based on the hormones, the cycle is divided into four phases. Menstruation, day 1 to about 5, when the lining is shed, hormones are at the bottom and energy is low. The follicular phase, about day 6 to 13, when estrogen rises and she gets her energy back. Ovulation, about day 14, when an egg is released and lives for a day; often the cycle's highest energy and desire. And the luteal phase, about day 15 to 28, when progesterone first brings calm and then, in the final week, falls and brings PMS symptoms: irritability, vulnerability, bloating, hunger and poor sleep. Four phases. You can remember four. You remember four PIN codes.",
        'Why does it matter to you? Because most of the things that can feel unpredictable actually have a timing. Low desire on day 26 is rarely about you, even though you have spent a fair amount of energy assuming it was. A short fuse on day 25 is often a hormone drop amplifying something real. Energy on day 9 is a good time for the big things. Once you know the rhythm, you stop being surprised, and you can start acting before she asks. That is the difference between being a partner and being a spectator with good intentions.',
        'This is not the same as saying she is "controlled by hormones". Everyone is affected by sleep, hunger, stress and hormones, you included, and you do not even have an excuse with a date on it. The difference is that the cycle has a calendar. And that calendar is something you can learn to read.',
        'The single most important thing you can do this week is get day 1 right in the app. Everything else is calculated from that date. After that it is about noticing: when does the energy turn, when does the irritation come, what helps. That is not surveillance. It is taking her seriously enough to remember. And your memory needs all the help it can get.',
      ],
      conversationQuestion:
        'When in your cycle do you feel best, and when is it hardest? What would you wish I knew about the hardest days?',
      sources: [NHS_PERIODS, ACOG_CYCLE],
    },
    {
      id: weeklyId(M, 2),
      month: M,
      week: 2,
      title: 'The period: the practical and the emotional',
      body: [
        'The period is the part of the cycle everyone knows about, and the one most often misunderstood. By you too, even though you have been around for a fair few by now. It is both physically demanding and, for many, an emotional relief, because the PMS days are over. Here is what happens, and what helps.',
        'The bleeding is the lining of the womb being shed. To get it out, the womb contracts, driven by substances called prostaglandins. The more prostaglandin, the stronger the cramps. The pain is typically worst on days 1 and 2 and can radiate into the lower back and thighs. At the same time both estrogen and progesterone are at their lowest, and iron is lost with the blood. The result is low energy, a heavy body and, for some, headache, nausea or loose stools. It is a muscle working for days on low fuel. You would be lying down too.',
        'What helps with cramps is well documented, so you do not need to invent anything. Heat on the belly or lower back relaxes the womb and dampens the pain; a heating pad is often as effective as over-the-counter painkillers. Ibuprofen and similar block prostaglandin and work best when taken at the first signs. Light movement, like a walk, helps many, even though it feels counterintuitive. Rest, sleep and a little extra food with iron do the rest. Heat, pills on time, a walk, food. That is the list. It is not long.',
        'Emotionally, the period is often calmer than the PMS days, because the hormones have hit the bottom and are no longer falling. But low energy and pain make for a short fuse, and the need to be left in peace can be strong. That is not rejection. It is a body spending its resources on something other than entertaining you.',
        'What can you do? The practical first: take the chores without asking, have heat ready, make sure there are pads, tampons and painkillers in the house, cook or order. "Should I make dinner?" is not help, it is one more task for her: answering you. Slow the pace in the first two days; cancel something, without making a thing of it. And ask what she needs instead of guessing. The answer may be "nothing", and you need to be able to take that without looking wounded.',
        'There are also things not to do. Do not take low energy or cancellations personally. Do not comment on her mood with "is it because you are on your period?"; if you feel the urge, go outside and say it to a wall. Do not make big plans or start hard conversations on days 1 and 2. And if you are standing there with the heating pad in your hand and no idea what to do: give it to her. That was the whole plan.',
        'Finally, something important to know: pain that knocks her out is not normal. Ordinary period pain is manageable. Pain that means sick days, vomiting, or that also comes outside the period, can be a sign of endometriosis or something else that can be treated. On average it takes 7-10 years to get that diagnosis, because the pain gets normalised. You can be the one who does not normalise it.',
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
        'In the middle of the cycle, the thing everything else revolves around happens: an egg is released. Ovulation is both a biological peak and a moment where responsibility between partners becomes concrete. Here is what you should know, and it is probably more than you knew yesterday.',
        "During the follicular phase, rising estrogen has made an egg mature in the ovary. When estrogen peaks, it triggers a sharp surge in the hormone LH, and 24-36 hours later the follicle bursts and the egg is released. The egg lives 12-24 hours. So ovulation is one day, not a week. If you thought it was a week, you are in good company, but you are still wrong. It typically happens 14 days before the next period. In a 28-day cycle that is around day 14, in a 32-day cycle around day 18. The app's date is an estimate based on averages, not a measurement.",
        "The body often shows that ovulation is approaching. Discharge becomes clear, slippery and stretchy like egg white. Some feel a twinge on one side of the lower abdomen. Energy, confidence and desire are often at the cycle's highest, because estrogen and a little testosterone peak. After ovulation, body temperature rises 0.3-0.5 degrees and discharge becomes thicker. Ovulation tests, which measure LH in urine, are the most precise home method. More precise than the app, and considerably more precise than your gut feeling.",
        "Now for the responsibility. Sperm can survive up to five days in the womb. Together with the egg's lifespan, that gives a fertile window of about six days: the five days before ovulation and the day itself. Note that five of the six days are down to your cells. If you do not want a pregnancy, this is where contraception matters most. And contraception is not her job alone, even though it is usually her carrying the side effects and you carrying the opinions. If you do want a pregnancy, the days leading up to ovulation matter more than the day after, because the sperm need to be there when the egg arrives. You turn up before the concert, not after.",
        'One thing needs saying clearly: never use the app\'s fertile window as contraception. Cycles move with stress, illness and travel, and an average does not hit any single month precisely. The app is for understanding, not for planning safe days. "The app said" is not an argument anyone wants to hear in nine months.',
        'Desire moves with the hormones across the month, and for many, ovulation is the peak. In the luteal phase, progesterone often dampens desire, and in the PMS days and the first days of the period the body is typically at its most closed. Some experience it differently, and that is normal too. The important thing is not to plan by a table, so do not set an alarm. The important thing is to stop taking low desire personally at certain times, and to appreciate closeness when it comes.',
        "What you can do this week is prioritise time together, because these are the cycle's best days for it. And have a short, calm conversation about contraception: what do you use, how does she feel about it, and does one of you carry more of the responsibility than the other. You start the conversation. It is the easiest part of the responsibility, so begin there.",
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
        'The week before the period is the one that causes the most misunderstandings in a relationship. Not because she is "someone else", but because a hormone drop turns up everything that is already there. If you understand the mechanism, you can respond the right way. If you do not, you respond the way you always have, and you have seen how that goes.',
        'After ovulation, the corpus luteum produces progesterone. If the egg is not fertilised, the corpus luteum dies after 12-14 days, and progesterone and estrogen drop sharply in the last 5-7 days before the period. The brain responds to the drop with lower serotonin, the signal substance that keeps mood stable and dampens cravings for sweet things. At the same time the body holds on to fluid, appetite rises, and sleep gets worse, partly because progesterone has been keeping body temperature up. So that is less sleep, more hunger and less serotonin all at once. Try being charming under those conditions.',
        'That is felt as PMS: irritability, vulnerability, tears close to the surface, bloating, tender breasts, hunger, restlessness and a sense that everything is a bit too much. Around three in four women notice some of it. Three to eight percent have the severe form, PMDD, where the symptoms are so intense they disrupt daily life; it is a real condition, it can be treated, and it deserves a doctor. The symptoms typically disappear once the bleeding starts. That is what sets PMS apart from everything else: the timing.',
        'The most important insight is this: PMS does not invent feelings. It amplifies them. An amplifier does not write the music, it turns it up. The irritation that chores are unevenly shared is there on day 9 too, but on day 26 it sounds louder and arrives faster. The hurt over something you said last week was there before too, but now the tears come. The feelings are real. The amplifier is hormonal. And what gets turned up is usually something you already knew about.',
        'That means two things for you. First: never dismiss the feeling with "it is just hormones" or "is it that time of the month?". It makes the feeling bigger and tells her that her experience does not count. You have lost the argument and extended it in the same sentence. Acknowledge first: "I can hear this is hitting hard right now." Second: respond to the need, not the tone. "You have not emptied the dishwasher" often means "I am exhausted and feel like I am on my own". If you answer the tone, you get a conflict about the tone. If you answer the need, the tone goes away on its own. And the dishwasher gets emptied, which it needed anyway.',
        'In practical terms: lower your expectations of social and practical energy in the final week. Make sure meals are on time and there are snacks in the house, because hunger amplifies everything. Keep the bedroom cool, even if you are cold. Do not comment on body or appearance. Suggest quiet evenings instead of asking "what do you want to do?". And place difficult conversations outside the PMS window, not to avoid them, but to give them a chance. The budget is the same on day 9. The mood is not.',
        'What you should not do is make her irritation your problem, get defensive, or withdraw for a week and call it consideration. What helps most is the most boring thing: staying calm and staying put. Nobody makes films about the man who stayed and made tea. But when the period comes, everything settles again, and she remembers who stayed.',
      ],
      conversationQuestion:
        'When you are in the PMS days, what do you most want from me: a bit of space, more closeness or practical help? And how can I tell which one it is on the day?',
      sources: [NHS_PMS],
    },
  ],
  wrap: {
    id: wrapId(M),
    month: M,
    title: 'Month 1: The cycle from A to Z',
    summary: [
      'The first month was about getting the model in place, so you are no longer working from something you heard in year seven. The cycle is counted from the first day of bleeding, typically lasts 21-35 days and has four phases: menstruation, follicular phase, ovulation and luteal phase. Estrogen builds up and brings energy in the first half; progesterone brings calm in the second half, and the drop in both hormones in the final week is what is felt as PMS.',
      'You have learned that heat works on cramps, that iron and sleep matter, that ovulation is one day and the fertile window six, that contraception is a shared responsibility, that PMS amplifies rather than invents feelings, and that timing conversations is free help. And you have learned that your most important role is not to fix, but to notice, ask and take the practical. The heating pad is still the best tool you have. You just know why now.',
      'Next month is about communication and support: language, timing, asking instead of guessing, and the conflict patterns that repeat phase by phase. You know them well. Now they get names.',
    ],
    keepDoing: [
      'Keep the calendar up to date together, so the predictions get better than your guess.',
      'Say it out loud when you can see the energy coming back.',
      'Have heat, painkillers and pads or tampons in the house before the period, not on day 1.',
      'Place difficult conversations outside the PMS window, and write them in the calendar.',
      'Ask "do you want suggestions, or should I just listen?", and then do what she answers.',
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
          'Everything is counted from the first day of bleeding. Get that date right in the app and the phase and predictions fit better. If you guess, the app guesses with you.',
      },
      {
        question:
          'She is on her period, day 2, and says she cannot face having guests tonight. What is most helpful?',
        options: [
          'Point out that you agreed to it and it will be nice',
          'Ask whether it is because she is on her period',
          'Cancel or move it yourself without making a thing of it',
          'Suggest she takes a painkiller and sees how she feels',
        ],
        correctIndex: 2,
        explanation:
          'On days 1-2 energy is at its lowest. Taking the practical without negotiating is the most concrete help. You are perfectly capable of texting the guests yourself.',
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
          "Sperm live up to five days, the egg for one. That is why the window sits before ovulation, and the app's estimate must never be used as contraception.",
      },
      {
        question:
          'It is day 26. She says sharply: "You have not emptied the dishwasher." What works best?',
        options: [
          '"Is it that time of the month?"',
          '"It sounds like you are under pressure. What can I take off your plate?"',
          '"You could just have done it yourself."',
          'Say nothing and leave the room',
        ],
        correctIndex: 1,
        explanation:
          'Respond to the need, not the tone. PMS amplifies a real feeling; acknowledgement and practical help make the tone go away. The dishwasher still needs emptying.',
      },
      {
        question: 'What causes the PMS symptoms in the week before the period?',
        options: [
          'Rising estrogen',
          'The sharp drop in progesterone and estrogen',
          'Iron deficiency',
          'Not drinking enough',
        ],
        correctIndex: 1,
        explanation:
          'When the corpus luteum dies, both hormones fall, serotonin follows them down, and that brings irritability, vulnerability, hunger and poor sleep. It is an amplifier, not an inventor.',
      },
      {
        question: 'When is it wisest to have a hard conversation about money?',
        options: [
          'Days 1-2, when she is calm',
          'In the follicular phase, when there is energy to hear each other',
          'The last days before the period, to get it over with',
          'It makes no difference',
        ],
        correctIndex: 1,
        explanation:
          'Timing is free help. The same conversation goes well more often when stress resilience is high, and sideways in the PMS window. 11 pm on day 27 is not a time, it is a mistake.',
      },
      {
        question:
          'She throws up from the pain and has to call in sick every period. What is the right response?',
        options: [
          'It is normal for some; heat and rest are enough',
          'Suggest she grits her teeth',
          'Say it deserves a doctor, and offer to come along',
          'Wait and see whether it improves with age',
        ],
        correctIndex: 2,
        explanation:
          'Pain that knocks her out is not normal. Endometriosis and other conditions can be treated, but the diagnosis takes years because the pain gets normalised. Be the one who does not.',
      },
    ],
  },
};
