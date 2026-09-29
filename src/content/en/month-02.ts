import type { MonthContent, Source } from '../types';
import { dailyId, weeklyId, wrapId } from '../types';

const NHS_PERIODS: Source = {
  label: 'NHS: Periods',
  url: 'https://www.nhs.uk/conditions/periods/',
};
const NHS_PAIN: Source = {
  label: 'NHS: Period pain',
  url: 'https://www.nhs.uk/conditions/period-pain/',
};
const NHS_HEAVY: Source = {
  label: 'NHS: Heavy periods',
  url: 'https://www.nhs.uk/conditions/heavy-periods/',
};
const NHS_ENDO: Source = {
  label: 'NHS: Endometriosis',
  url: 'https://www.nhs.uk/conditions/endometriosis/',
};
const NHS_IRON: Source = {
  label: 'NHS: Iron deficiency anaemia',
  url: 'https://www.nhs.uk/conditions/iron-deficiency-anaemia/',
};
const NHS_TSS: Source = {
  label: 'NHS: Toxic shock syndrome',
  url: 'https://www.nhs.uk/conditions/toxic-shock-syndrome/',
};
const NHS_FIBROIDS: Source = {
  label: 'NHS: Fibroids',
  url: 'https://www.nhs.uk/conditions/fibroids/',
};
const NHS_IRREGULAR: Source = {
  label: 'NHS: Irregular periods',
  url: 'https://www.nhs.uk/conditions/irregular-periods/',
};
const ACOG_DYSMENORRHEA: Source = {
  label: 'ACOG: Dysmenorrhea: Painful Periods',
  url: 'https://www.acog.org/womens-health/faqs/dysmenorrhea-painful-periods',
};
const ACOG_HEAVY: Source = {
  label: 'ACOG: Heavy Menstrual Bleeding',
  url: 'https://www.acog.org/womens-health/faqs/heavy-menstrual-bleeding',
};

const M = 2;

export const month02: MonthContent = {
  month: M,
  theme: 'The menstrual phase',
  focus:
    'Pain, fatigue and bleeding: practical help, warmth, calm, and what not to say in the first days.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'This month: the days when it is hardest',
      insight:
        'In month 1 you learned that the period is roughly day 1-5, that hormones are at rock bottom, and that heat works. This month we go deeper. The period is the phase where she needs concrete help the most and has the least energy to ask for it. What you do here gets remembered, because it is so obvious when it is missing. We will cover cramps and painkillers, heavy bleeding and iron, the products in the cupboard, sleep, work, sex, mood, and the sentences that never help. The goal is not for you to become an expert. The goal is for her next period to be a little easier than the last one, because you knew what it took.',
      action:
        'Check in the app when the next period is expected, and put the date in your own calendar so it does not catch you off guard.',
      phaseTags: [],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: 'Cramps: what is actually happening',
      insight:
        'The uterus is a muscle. When the lining needs to come out, it releases prostaglandins, which make the muscle wall contract in waves. During strong contractions the blood vessels in the wall get squeezed, so the muscle briefly runs short of oxygen, and that is the deep, dull or stabbing pain she feels. Prostaglandins also enter the bloodstream, which explains why some get nausea, loose stools and headaches at the same time. The pain is usually worst in the first 24-48 hours, when the most prostaglandin is released, and eases after that. It can radiate into the lower back and down the thighs. It is not imagination or a low pain threshold; it is a muscle working hard without enough oxygen.',
      action:
        'Tell her you now know why cramps radiate into the back and thighs, and ask where it usually sits for her.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN, ACOG_DYSMENORRHEA],
    },
    {
      id: dailyId(M, 3),
      month: M,
      day: 3,
      title: 'Painkillers: timing beats dose',
      insight:
        'Ibuprofen and naproxen block the production of prostaglandins. That is why they work best when taken at the very first signs, or on the day the bleeding is expected, before the pain has built up. Taken when the pain is at its peak, they first have to catch up with the prostaglandin already in the blood. They should be taken with food, and the maximum dose on the pack must not be exceeded. If she has asthma, stomach ulcers or kidney problems, she should ask a pharmacist or doctor whether ibuprofen is okay; paracetamol is an alternative and can be combined. Your role is not to dose, but to make sure the pills are in the house and within reach when day 1 arrives.',
      action:
        'Check that the painkiller she usually uses is in the house and not expired. Put it somewhere she can reach without getting up.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'Heat: how and where',
      insight:
        'Heat on the belly or lower back relaxes the muscle wall of the uterus and increases blood flow, so the muscle gets the oxygen it is short of. In studies, sustained heat works about as well as ibuprofen, and the two can be combined. The practical details matter: the heat goes on the lower belly or lower back, not the chest, and it should stay on for 20-30 minutes at a time. A hot water bottle wrapped in a towel, an electric heating pad, a warm bath or a shower aimed at the lower back all work. Stick-on heat patches can be worn at work. What most often fails is not the method, but that nobody gets it out.',
      action:
        'Put the heating pad or hot water bottle out where it can be seen, by the sofa or the bed, so it is ready without anyone having to look for it.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'Rest or movement? Both',
      insight:
        "Two things work against cramps, and they sound like opposites: rest and movement. Light movement, like a walk, gentle stretching or an easy bike ride, increases blood flow to the pelvis and releases endorphins, the body's own painkillers. Hard training on day 1, on the other hand, is too much for most. Rest works because pain and blood loss are tiring, and because stress tightens muscles. The art is to offer both without pushing: a walk around the block if she feels like it, otherwise the sofa. She is the one who can feel what her body needs today. Your job is to make both easy to choose.",
      action:
        'Offer a short walk together, and make it clear that a no is just as good an answer as a yes.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: '"Period flu" is a real thing',
      insight:
        'Many women describe the days just before and around day 1 as coming down with the flu: aching muscles, chills, a heavy headache, nausea, tiredness deep in the bones. It is popularly called period flu. It is not a diagnosis and not an infection, but the symptoms are real. The likely explanation is that prostaglandins travel from the uterus into the bloodstream and affect the whole body, at the same time as estrogen and progesterone hit bottom. It usually eases once the bleeding is under way. An actual fever is not part of it; fever is something else and should be taken seriously. The main thing for you to know is that she is not "just a bit tired", but genuinely unwell.',
      action:
        'Ask whether she knows the feeling of coming down with the flu just before her period. Treat those days the way you would treat a partner with a cold.',
      phaseTags: ['luteal', 'menstrual'],
      sources: [NHS_PAIN],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'Heavy bleeding: what it is',
      insight:
        "How much is too much? Doctors use concrete signs: needing to change a pad or tampon every hour or two for several hours, bleeding through clothes or bedding, needing two products at once, clots bigger than a small coin, bleeding for more than 7 days, or having to get up at night to change. That is called heavy menstrual bleeding and affects about one in four women. The cause can be hormonal, fibroids or polyps, or more rarely a bleeding disorder. It can be treated with anything from tranexamic acid to a hormonal IUD. Many live with it for years because they assume their normal is everyone's normal. You see it from the outside, and that makes your voice valuable.",
      action:
        "Read through the signs on the list and calmly ask whether she recognises any of them. If yes, suggest booking a doctor's appointment.",
      phaseTags: ['menstrual'],
      sources: [NHS_HEAVY, ACOG_HEAVY],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: 'Iron: more than a steak',
      insight:
        'Blood loss is iron loss, and heavy periods are the most common cause of iron deficiency in women of reproductive age. The signs are tiredness that sleep does not fix, breathlessness on the stairs, pale lips, palpitations, headaches and cold hands. It looks like ordinary busyness, which is why it gets missed. Iron from meat, fish and eggs is absorbed best. Iron from lentils, beans, oats and leafy greens is absorbed better with vitamin C, and worse with coffee, tea or milk right at the meal. Iron supplements should not be taken blindly; a blood test at the doctor shows whether there is a need, and too much iron is not healthy either.',
      action:
        'Notice whether she is unusually tired and out of breath outside her period. If so, suggest a blood test instead of guessing.',
      phaseTags: ['menstrual', 'follicular'],
      sources: [NHS_IRON, NHS_HEAVY],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'Pads: what the different kinds are for',
      insight:
        'Pads come in many varieties, and the difference is not decoration. Panty liners are for spotting and the last days. Regular pads are for ordinary days, and "super" or "night" pads are longer and thicker for heavy days and for the night, when lying down makes the blood run backwards. Wings keep the pad in place. Reusable cloth pads are washed and used again. A pad is typically changed every 4-6 hours and more often on heavy days, not mainly for hygiene, but because it gets uncomfortable. If you know which type and size she uses, you can shop without asking. For many, that is a surprisingly big relief.',
      action:
        'Take a photo of the pack she uses, so you have the brand and size on your phone the next time you shop.',
      phaseTags: [],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 10),
      month: M,
      day: 10,
      title: 'Tampons and the 8-hour rule',
      insight:
        'Tampons sit inside the vagina and absorb the blood before it comes out. They come in absorbencies from "mini" to "super plus", and the rule is to use the lowest absorbency that is enough, and change every 4-8 hours. A tampon must never stay in for more than 8 hours, which is why many use pads at night. The reason is toxic shock syndrome, TSS, a very rare but serious bacterial infection. The signs are a sudden high fever, flu-like symptoms, a rash like sunburn, dizziness and confusion. If that happens during a period with a tampon in, it is emergency care. You do not need to be afraid of tampons, but you should know the one sign that must not be missed.',
      action:
        'Memorise two sentences: "8 hours at most" and "high fever with a tampon = doctor now". Say them to her if she does not know them.',
      phaseTags: [],
      sources: [NHS_TSS, NHS_PERIODS],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'Cups and period underwear',
      insight:
        'A menstrual cup is a small, soft silicone cup that sits in the vagina and collects the blood instead of absorbing it. It can stay in for up to 8-12 hours, is emptied, rinsed and reused for years. It also makes it easy to see how much she actually bleeds, which is useful if a doctor asks. Period underwear is underwear with a built-in absorbent layer that is washed and reused; it is worn alone on light days and as backup on heavy days and at night. Both need warm water, soap and a sink she can use in peace. If she uses a cup, there is nothing embarrassing about it drying in the bathroom.',
      action:
        'Make sure the bathroom is tidy and has soap, a clean towel and a free sink. That is the practical support for cups and pads alike.',
      phaseTags: [],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: 'What should be in the house',
      insight:
        'Most of the practical help comes down to the right things being there before they are needed. The list is short: her products in the type and size she uses, with a reserve for heavy days; painkillers that have not expired; a hot water bottle or heating pad that works; easy food with iron in it that can be made in ten minutes; a dark towel for the bed; and detergent for stains. Plus something she actually wants: a particular tea, chocolate, a series. It takes half an hour to gather, and it turns day 1 into a completely different day. The secret is to do it in the follicular or luteal phase, not the morning she wakes up with cramps.',
      action:
        'Go through the list today and top up what is missing. Write down the things you do not know her preference on, and ask.',
      phaseTags: ['luteal'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: 'Blood stains are everyday, not a disaster',
      insight:
        'Blood ends up on clothes, bedding and occasionally the sofa. It happens to practically everyone, most often at night or on heavy days, and it can be embarrassing and stressful if the people around react. The practical part: rinse the stain in cold water as soon as possible, never hot, because heat sets the blood into the fabric. Then wash as normal. A mattress or sheet protector and a dark towel under her at night take the worry away. The most important part, though, is your reaction. A sheet can be washed. What gets remembered is whether you sighed, or whether you just changed it.',
      action:
        'Put a dark towel by the bed, and if there is a stain: rinse in cold water and change it without a comment.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'Sleep in the first nights',
      insight:
        'Sleep is often worst on nights 1 and 2. Cramps wake her, she worries about leaking through, body temperature shifts as progesterone disappears, and pain shortens deep sleep. Poor sleep then amplifies pain and mood the next day. What helps is practical: a painkiller taken half an hour before bed, if she uses them; heat on the lower back as she lies down; night pads, a cup or period underwear so she dares to sleep through; a dark towel; and the freedom to go to bed early without being asked if she is upset. Some sleep best curled up or with a pillow under the knees, which takes the strain off the lower back.',
      action:
        'Suggest an early night tonight, and get the bedroom ready: heating pad, water and an extra pillow to put under her knees.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN],
    },
    {
      id: dailyId(M, 15),
      month: M,
      day: 15,
      title: 'Sex during the period: her choice',
      insight:
        'Sex during the period is safe, and there is nothing unhygienic about it. Some women have more desire in those days, others none at all, and both are normal. For some, orgasm relieves cramps because the uterus relaxes afterwards. If you both feel like it, a dark towel and a shower make the practical side easy. Two things to know: pregnancy is still possible, because sperm live up to five days and short cycles can have ovulation close to the end of the bleeding; and sexually transmitted infections pass more easily with blood. The most important rule, though, is simple: it is her body, her pain and her choice, and a no needs no explanation.',
      action:
        'Say it out loud, outside the moment: "Intimacy in those days is entirely up to you, and you never have to explain a no." And mean it.',
      phaseTags: ['menstrual'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'Mood on day 1-2: relief and flatness',
      insight:
        'Once the bleeding starts, PMS symptoms usually fade within a day, because the hormones have stopped falling. Many feel relief: the tears are no longer close to the surface, the world is less sharp. At the same time energy is at its lowest, pain at its peak, and mood can turn flat, quiet or empty rather than irritable. She may seem distant or short, without anything being wrong between you. What helps is leaving her in peace without withdrawing: being in the same room, taking the practical things, not demanding conversation. From day 3-4 estrogen starts rising again, and mood follows it up, often noticeably from one day to the next.',
      action:
        'If she is quiet today, do not ask "is something wrong?". Sit next to her with something of your own to do, and let the calm be enough.',
      phaseTags: ['menstrual'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'What not to say',
      insight:
        'Some sentences do more harm than silence. "Is it really that bad?" tells her you doubt her. "My ex never had it this bad" compares a pain you cannot measure. "You are so sensitive today" turns her period into a character trait. "Have you taken a pill?" as the first line sounds like "stop being in pain". Jokes about blood and mood never land on day 1, no matter how close you are. And "it is just your period" is the worst, because it normalises something that may not be normal. What works instead is short and concrete: "That looks like it hurts. Shall I get the heating pad?"',
      action:
        'Find the sentence on the list you have come closest to saying yourself, and decide what you will say instead next time.',
      phaseTags: ['menstrual'],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'Periods at work',
      insight:
        'Most women work as if nothing is happening while they have cramps, bleeding and low energy. It costs. Meetings that cannot be moved, toilets that are far away, light-coloured uniforms and long commutes turn day 1 and 2 into a logistics exercise on top of the pain. Few talk about it at work, and many take painkillers at times that suit the calendar rather than the body. What you can do sits outside working hours: a calm morning, a packed lunch already made, not having her also pick up the kids or shop on the way home, and an evening that asks nothing of her. You cannot take the cramps to work for her, but you can take the rest.',
      action:
        'If she is going to work with her period today or tomorrow: take one of her tasks before or after work, without announcing it.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 19),
      month: M,
      day: 19,
      title: 'Social plans: move them without drama',
      insight:
        'Dinners, parties, trips and family visits often land on day 1 or 2, because nobody had the calendar out when the plan was made. Now you do. When the app expects a period, the best thing you can do is keep the first two days light, and the second best is to be the one who cancels or moves things when it becomes necessary. Not with "she is not feeling well", which makes people ask, and not with her period as the reason, unless she wants to share that herself. "We need to move it, can we find another day?" is enough. She should not be stuck with both the cramps and the social negotiations.',
      action:
        'Look at the calendar for the two days the period is expected. If something heavy is there, ask her whether you should move it.',
      phaseTags: ['menstrual', 'luteal'],
    },
    {
      id: dailyId(M, 20),
      month: M,
      day: 20,
      title: 'Headache, nausea and loose stools',
      insight:
        'Cramps are not the only thing prostaglandins do. Because they enter the bloodstream, they can affect the gut, so many get loose stools, bloating or nausea on day 1 and 2. Some get the opposite, constipation, in the days before. Headaches are common too, both because estrogen drops sharply and because blood loss, poor sleep and too little fluid all pull the same way. Menstrual migraine is a known subtype that hits in the days around day 1 and can be harder than ordinary migraine. What helps is simple: water, regular food, the painkiller she usually takes, darkness and quiet. And not having to explain why she keeps going to the bathroom.',
      action:
        'Fill a bottle of water and put it next to her, and make something light that is easy on the stomach, like porridge, rice or toast.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN, NHS_PERIODS],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: 'Day 3-5: the shift arrives',
      insight:
        "Most notice a clear change from around day 3. The bleeding gets lighter and darker, the cramps disappear or fade to a faint ache, and estrogen has started to rise, so energy and mood slowly return. It is not a switch being flipped but a curve, and it can vary from month to month. It is a good moment to notice what helped in the first days while it is fresh in memory. Was the heat used? Was something missing? Was something said that should not have been? What you find out now becomes next month's plan.",
      action:
        'Ask her: "What was the most helpful thing I did these last days, and what was missing?" Write the answer in a note in the calendar.',
      phaseTags: ['menstrual', 'follicular'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 22),
      month: M,
      day: 22,
      title: 'Use the good days to prepare for the hard ones',
      insight:
        'The follicular phase is where the energy is, and that makes it the best time to make the period easier. Not because she should worry about it, but because preparation is easy now and hard on day 1. Restock the supplies. Wash the hot water bottle and check it does not leak. Notice which food she actually ate when she felt worst, and keep it in mind. Talk about which products she uses and whether she would like to try something different. And have a calm conversation about how bad it usually gets, while the pain is absent and the conversation can happen without her having to defend herself.',
      action:
        'Do one thing today that makes the next day 1 easier: shop, put the heat out, or set a reminder two days before the expected period.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'Pain and spotting mid-cycle',
      insight:
        'Not all pain and bleeding belongs to the period. Around ovulation some feel a twinge or a dull ache on one side of the lower abdomen, lasting from a few minutes to a day or two. It is called ovulation pain and is harmless; it happens when the follicle bursts and releases a little fluid. A few also get light spotting mid-cycle, when estrogen dips briefly after ovulation. It is worth knowing, so you do not think the period has arrived three weeks early. If the pain is severe, lasts several days, or there is actual bleeding mid-cycle, that is not something for you to explain yourselves; it deserves a doctor.',
      action:
        'If she mentions pain on one side mid-cycle: offer heat and a note in the calendar, so you can see whether it repeats.',
      phaseTags: ['ovulation'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 24),
      month: M,
      day: 24,
      title: 'Irregular, missing or too frequent',
      insight:
        "A cycle is allowed to vary by a few days from one time to the next. But there are patterns that deserve a doctor: periods that consistently come more often than every 21 days or less often than every 35, bleeding that lasts more than 7 days, bleeding between periods or after sex, or periods that stop for three months without pregnancy. Causes range from stress, weight change and hard training to PCOS, thyroid problems and perimenopause. The vast majority are harmless, but several can be treated, and long-term absent periods affect the bones. The app's calendar makes the pattern visible; it is one of the best reasons to log, even when everything is normal.",
      action:
        'Open the calendar and look at the last logged cycles together. If something stands out, suggest she mentions it to her doctor.',
      phaseTags: [],
      sources: [NHS_IRREGULAR, NHS_PERIODS],
    },
    {
      id: dailyId(M, 25),
      month: M,
      day: 25,
      title: 'When the pain is beyond normal',
      insight:
        'Ordinary period pain eases with heat and over-the-counter painkillers and is gone after a couple of days. Pain that does not respond to that, that causes sick days every month, that comes outside the period, during sex, when going to the toilet, or together with very heavy bleeding, can be a sign of endometriosis, adenomyosis or fibroids. Endometriosis affects around 1 in 10, and on average many years pass from first symptom to diagnosis, because the pain is normalised by everyone, including herself. You cannot know what it is, and you are not supposed to. You are supposed to be the one who says, "This is not something you just have to put up with", and means it.',
      action:
        'Ask whether she has ever talked to a doctor about her pain. If not, and it knocks her out, offer to book the appointment and come along.',
      phaseTags: ['menstrual'],
      sources: [NHS_ENDO, NHS_FIBROIDS],
    },
    {
      id: dailyId(M, 26),
      month: M,
      day: 26,
      title: 'How to back her up at the doctor',
      insight:
        'A doctor\'s appointment about period pain or bleeding goes better with preparation, and that is something you can help with. Doctors typically ask: how many days do you bleed, how often do you change on the worst days, how strong is the pain from 1 to 10, where is it, what have you tried, and does it stop you from doing anything? The app\'s calendar and notes are exactly that kind of answer. Write down the three most important points before the appointment, and help her hold on to them if the conversation drifts. Having someone along who has seen it from the outside and can say "she has had to call in sick three months in a row" gets taken seriously.',
      action:
        'Offer to help write down three points for the next appointment, based on what you can see in the calendar. Offer to come along if she wants.',
      phaseTags: [],
      sources: [NHS_HEAVY, NHS_PAIN],
    },
    {
      id: dailyId(M, 27),
      month: M,
      day: 27,
      title: 'Two days before: get ready',
      insight:
        'When the app says the period is expected in a couple of days, the practical part begins. It is no longer about stock, but logistics: are the next two days reasonably empty? Is there easy food in the fridge? Is the heat out, and are the pills within reach? Does she have products in her bag for work? Is there a dark towel by the bed? This is also when painkillers can start to do their job, if she usually has strong pain and her doctor is fine with it: many take the first dose at the very first sign, and some already on the day the bleeding is expected. That is her decision. Yours is to get everything else ready.',
      action:
        'Go through the five things today: calendar, food, heat, painkillers, products in her bag. Top up and put out.',
      phaseTags: ['luteal'],
      sources: [NHS_PAIN],
    },
    {
      id: dailyId(M, 28),
      month: M,
      day: 28,
      title: 'The small care that gets remembered',
      insight:
        'It is rarely the grand gestures that get remembered from a period. It is the small ones: a cup of tea that is just there, a blanket laid over her, the remote within reach, the dishes done without mention, not asking "what do you want to do tonight?" but simply saying "I will make something easy". What they have in common is that they need no answer. She does not have to say thank you, choose, or explain. If you are unsure what she wants, pick the smallest thing and do it. Care without questions is the easiest to accept when the energy is gone.',
      action:
        'Do one small thing today without asking and without mentioning it: tea, a blanket, the dishes, a lamp switched on. Do not wait for thanks.',
      phaseTags: ['menstrual'],
    },
    {
      id: dailyId(M, 29),
      month: M,
      day: 29,
      title: 'Her own plan',
      insight:
        'Everything in this month is general advice. Her period is specific. Some want heat and company, others want darkness and quiet. Some want a hand on the lower back, others cannot stand being touched. Some are glad you remember the date, others find it too much. The only way to find out is to ask when she is feeling well, and to write the answer down. Three questions are enough: What helps most in the first days? What should I not do? What should I do without asking? The answers are her plan, and it beats any article.',
      action:
        'Ask the three questions today, and write the answers in a note in the app so you can find them when the next period comes.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 30),
      month: M,
      day: 30,
      title: 'Month 2: what you have learned',
      insight:
        'You now know why cramps hurt, and that heat and painkillers taken early are the two things that work best. You know the signs of heavy bleeding and iron deficiency, and that both deserve a blood test rather than a guess. You know the difference between pads, tampons, cups and period underwear, and the 8-hour rule. You know that period flu is real, that mood on day 1-2 is flat rather than sharp, that sex is her choice, and that pain that knocks her out deserves a doctor. Most importantly: you know that most of the help is practical, quiet and done in advance. Next month is about the opposite: the energy of the follicular phase.',
      action:
        "Tell her the three things from this month you intend to keep doing. Then take the month's quiz.",
      phaseTags: [],
    },
  ],
  weekly: [
    {
      id: weeklyId(M, 1),
      month: M,
      week: 1,
      title: 'Cramps: what happens, and what works',
      body: [
        'Period pain is so common that it barely counts as a symptom. More than half of everyone who menstruates has pain for a few days each month, and for about one in ten it is severe enough to disrupt daily life. Yet few partners know what is actually happening, or why the simple remedies work. That is what this article is for.',
        'The uterus is a muscle, and when the lining needs to be shed, it releases prostaglandins, substances that make the muscle wall contract in waves. The contractions squeeze the blood vessels in the wall, so the muscle briefly runs short of oxygen, and that is the deep, dragging or stabbing pain. More prostaglandin means stronger cramps; women with severe pain have measurably higher levels. Prostaglandins also enter the bloodstream and explain the nausea, loose stools, headache and flu-like malaise many feel. The pain is usually worst in the first 24-48 hours and can radiate into the lower back and thighs.',
        'Treatment follows the mechanism. Ibuprofen and naproxen block the production of prostaglandins, which is why timing matters more than dose: taken at the very first signs, or on the day the bleeding is expected, they stop the pain from building. Taken at the peak, they first have to catch up with what is already in the blood. They go with food, never above the pack maximum, and if she has asthma, stomach ulcers or kidney problems, a pharmacist or doctor should be asked first. Paracetamol is an alternative and can be combined. Hormonal contraception, especially the pill and the hormonal IUD, reduces the pain markedly for many because the lining becomes thinner; that is a conversation with a doctor, not advice from you.',
        'Heat is the other leg. Sustained heat on the lower belly or lower back relaxes the muscle wall and increases blood flow, so the muscle gets oxygen. In studies it works about as well as ibuprofen, and the two can be combined. It needs 20-30 minutes at a time: a hot water bottle, an electric heating pad, a warm bath or a heat patch at work. Light movement, like a walk or gentle stretching, releases endorphins and helps more people than you would expect, while hard training on day 1 is too much for most. TENS, small electrical pulses through the skin, works for some and can be borrowed or bought cheaply. Rest works because pain and blood loss are tiring.',
        'What does that mean for you? That most of it can be prepared in advance. Painkillers that have not expired, within reach. The heat out, visible, so nobody has to search. A calendar that is light for the first two days. And an attitude that says: I do not doubt that it hurts. Your most important sentence is not "have you taken a pill?", which sounds like "stop being in pain", but "that looks like it hurts, shall I get the heating pad?".',
        'Finally, the line. Ordinary period pain responds to heat and over-the-counter painkillers and is gone after a couple of days. Pain that does not, that causes sick days every month, that comes outside the period, during sex or when going to the toilet, or together with very heavy bleeding, can be endometriosis, adenomyosis or fibroids, and they can be treated. It is not your job to know which. It is your job to be the one who does not normalise it, and who says: this deserves a doctor.',
      ],
      conversationQuestion:
        'How strong are your cramps typically on a scale from 1 to 10, and what have you tried that actually works? Is there anything you would like me to do differently in the first days?',
      sources: [NHS_PAIN, ACOG_DYSMENORRHEA, NHS_ENDO],
    },
    {
      id: weeklyId(M, 2),
      month: M,
      week: 2,
      title: 'Bleeding, iron and what belongs in the cupboard',
      body: [
        'The bleeding is the part of the period that is most visible and least talked about. How much is normal, what does the blood loss do to the body, and what should actually be in the bathroom cupboard? Here is what you need to know to help without having to ask about everything.',
        'The total blood loss over a period is typically 30-40 ml, but it can feel like far more, because the blood is mixed with lining and fluid. The bleeding is often heaviest on day 1 and 2 and gets lighter and darker towards the end. Clots are normal, especially in the morning when the blood has pooled. The threshold for heavy bleeding is about 80 ml, but nobody measures it, so doctors use signs instead: needing to change a pad or tampon every hour or two for several hours, bleeding through clothes or bedding, two products at once, clots bigger than a small coin, bleeding for more than 7 days, or having to get up at night to change. Heavy menstrual bleeding affects about one in four women and can be treated.',
        'Blood loss is iron loss, and heavy periods are the most common cause of iron deficiency in women of reproductive age. Iron deficiency looks like ordinary busyness: tiredness that sleep does not fix, breathlessness on the stairs, palpitations, headaches, cold hands, pale lips. That is why it gets missed, by her and by everyone around her. Iron from meat, fish and eggs is absorbed best; iron from lentils, beans, oats and leafy greens is absorbed better with vitamin C and worse with coffee, tea or milk right at the meal. But food cannot fill a large deficit, and supplements should not be taken blindly. A blood test at the doctor is the right answer, because both too little iron and too much iron are harmful.',
        'Then the products. Pads sit on the outside and come as panty liners for light days, regular, and super or night pads for heavy days and the night; they are typically changed every 4-6 hours. Tampons sit inside the vagina, come in absorbencies from mini to super plus, and the rule is to use the lowest that is enough and change every 4-8 hours, never more than 8, because of the rare but serious infection toxic shock syndrome. A menstrual cup is a soft silicone cup that collects rather than absorbs, can stay in for up to 8-12 hours and is reused for years. Period underwear has a built-in absorbent layer and is worn alone on light days or as backup. Most use a combination, and most have a firm favourite in brand and size.',
        'What should be in the house is therefore concrete: her products in the type and size she uses, with a reserve for heavy days; painkillers that have not expired; a hot water bottle or heating pad; easy food with iron that can be made in ten minutes; a dark towel for the bed; and cold water and detergent for stains. Blood on the sheet is rinsed in cold water, never hot, which sets it into the fabric. And if there is a stain, nobody remembers who washed the sheet, only whether somebody sighed.',
        'The most important thing you can do this week is to remove the guesswork. Find out what she uses and take a photo of the pack. Notice whether she is unusually tired and out of breath outside her period too. And if she recognises even one of the signs of heavy bleeding, say what many never get told: your normal may not be normal, and it can be treated.',
      ],
      conversationQuestion:
        'Which products do you use, and is there anything you would like me to always make sure is in the house? Have you ever thought that you bleed more than other people?',
      sources: [NHS_HEAVY, NHS_IRON, NHS_TSS, ACOG_HEAVY],
    },
    {
      id: weeklyId(M, 3),
      month: M,
      week: 3,
      title: 'Everyday life on day 1 to 5: sleep, work, plans and intimacy',
      body: [
        'The period does not happen in a vacuum. It happens in the middle of a week of work, appointments, sleep, food and a relationship. That is where it gets hard, and that is where you can make a difference that needs no medical knowledge, only a calendar and a bit of thought.',
        'Start with mood, because it is the most misunderstood. Once the bleeding starts, the hormones stop falling, and PMS symptoms usually fade within a day. Many feel relief. But energy is at rock bottom, pain at its peak, and for many the flu-like malaise arrives that is popularly called period flu: aching muscles, chills, headache, nausea. It is not an infection, but the symptoms are real, and fever is not part of it. Mood on day 1-2 is therefore typically flat, quiet and inward rather than irritable. She may seem distant without anything being wrong between you. From day 3-4 estrogen rises, and most notice a clear shift back.',
        'Sleep is often worst on nights 1 and 2: cramps wake her, worry about leaking keeps her awake, and pain shortens deep sleep. Poor sleep then amplifies pain and mood the next day. What helps is practical: a painkiller half an hour before bed, if she uses them; heat on the lower back; night pads, a cup or period underwear so she dares to sleep through; a dark towel underneath her; a pillow under the knees for the back; and the freedom to go to bed early without being asked if she is upset.',
        'Work carries on as if nothing is happening. Meetings that cannot be moved, toilets far away, long commutes, and painkillers taken by the calendar rather than by the body. You cannot take the cramps to work for her, but you can take everything around it: a calm morning, a packed lunch, not having her also collect, shop and cook, and an evening that asks nothing. Social plans often land on day 1 and 2, because nobody had the calendar out when they were made. Now you do. Keep the first two days light, and be the one who moves the plan when it becomes necessary, without using her period as the reason unless she wants to share it herself.',
        'Sex during the period is safe and neither unhygienic nor wrong. Some have more desire in those days, others none at all, and for some, orgasm eases cramps. A dark towel makes the practical side easy. Pregnancy is still possible, because sperm live up to five days, and sexually transmitted infections pass more easily with blood. But the rule above all others is that it is her body, her pain and her choice, and that a no needs no explanation. Say it out loud, outside the moment, so she does not have to guess what you expect.',
        'What ties it all together is care without questions. A cup of tea that is just there. A blanket. The dishes done without comment. "I will make something easy" instead of "what do you want?". What they have in common is that they need no answer; she does not have to choose, thank or explain. When the energy is gone, that is the easiest help to accept, and the kind that gets remembered.',
        'And finally, something to avoid. Do not ask "is something wrong?" when she is quiet. Do not withdraw because she is not talking. Do not let the plans become her negotiation. And do not take low desire, low energy or an early bedtime personally. It is about a body using its resources on something else, and it passes in a few days.',
      ],
      conversationQuestion:
        'How would you most like me to be in the first two days: close, nearby or left alone? And is there anything in our daily routine you would like me to take over automatically when your period arrives?',
      sources: [NHS_PERIODS, NHS_PAIN],
    },
    {
      id: weeklyId(M, 4),
      month: M,
      week: 4,
      title: 'What you say, what you do not say, and when it deserves a doctor',
      body: [
        'Most of the help during the period is practical. But it becomes worthless if the words around it are wrong. The last article of this month is about language: what closes, what opens, and how to talk about the things that may not be normal.',
        'There are sentences that do more harm than silence. "Is it really that bad?" says you doubt her. "My ex never had it this bad" compares a pain nobody can measure from the outside. "You are so sensitive today" turns her period into a character trait. "Have you taken a pill?" as the first line sounds like "stop being in pain". Jokes about blood and mood never land on day 1, no matter how close you are. And "it is just your period" is the worst, because it normalises something that may not be normal, and because she has most likely heard it before, from doctors, mothers and friends.',
        'What opens is short and concrete. "That looks like it hurts. Shall I get the heating pad?" "I am doing dinner, you do not have to do anything." "Do you want company, or do you want to be left alone?" The sentences have in common that they believe her, offer something specific and do not require her to explain herself. If you do not know what she wants, pick the smallest thing and do it. A wrong offer is far better than a question she has to spend energy answering.',
        'There is also a conversation that should not happen on day 1: the one about how bad it really is. That belongs in the follicular phase, when the pain is absent and she does not have to defend herself. Ask there: How strong is the pain typically from 1 to 10? Has it ever stopped you from doing something? Have you talked to a doctor about it? Have you ever thought that you bleed more than other people? The answers often surprise both of you, because memory of pain is short, and because many have never been asked.',
        'Then the line, once more, because it matters. Ordinary period pain responds to heat and over-the-counter painkillers and is gone after a couple of days. Deserves a doctor: pain that does not respond, that causes sick days every month, that comes outside the period, during sex or when going to the toilet; bleeding that meets the signs of heavy periods; periods that come more often than every 21 days or less often than every 35, last more than 7 days, or stop for three months without pregnancy; bleeding between periods or after sex; and tiredness and breathlessness that may be iron deficiency. Endometriosis affects around 1 in 10, fibroids are common, and both can be treated. On average it takes many years to get the diagnosis, precisely because everyone around her said it was normal.',
        'Your role at the doctor is concrete. Doctors ask: how many days do you bleed, how often do you change on the worst days, how strong is the pain, where is it, what have you tried, does it stop you from doing anything? The app\'s calendar and notes are exactly that kind of answer. Help write three points down before the appointment, and offer to come along. A partner who can say "she has had to call in sick three months in a row" is heard differently from the way she is heard when she sits alone and has got used to playing it down.',
        'Finally: none of this is a task you have to solve. The period comes again next month and the month after. What works is not one big effort, but a cupboard that is stocked, a calendar that is light, a heating pad that is out, and a partner who does not doubt that it hurts. It is boring, repetitive, and exactly what gets remembered.',
      ],
      conversationQuestion:
        'Has anyone ever told you that your pain or your bleeding is "just normal"? Do you believe it yourself, and is there anything you would like to have checked if I come with you?',
      sources: [NHS_PAIN, NHS_HEAVY, NHS_ENDO, NHS_IRREGULAR],
    },
  ],
  wrap: {
    id: wrapId(M),
    month: M,
    title: 'Month 2: The menstrual phase',
    summary: [
      'This month went deep into the days when she needs help the most and has the least energy to ask for it. You now know that cramps are a muscle working without enough oxygen, driven by prostaglandins, and that the two things that work best are heat on the belly or lower back and painkillers taken at the first signs, not at the peak. You know that period flu, nausea, loose stools and headaches are part of it for many, and that mood on day 1-2 is flat and inward, not sharp.',
      'You know the signs of heavy bleeding and iron deficiency, and that both deserve a blood test at the doctor rather than a guess. You know the difference between pads, tampons, cups and period underwear, the 8-hour rule for tampons, and what should be in the house before day 1. You know that sex during the period is her choice without explanation, that social plans and work are where you can take things off her, and that cold water removes blood stains.',
      'Most importantly, you have learned that the best help is practical, quiet and done in advance, that some sentences do more harm than silence, and that pain that knocks her out should not be normalised but deserves a doctor, ideally with you beside her. Next month is about the opposite: the follicular phase, where energy returns, and how to use it wisely.',
    ],
    keepDoing: [
      'Have heat, painkillers and her products ready two days before the expected period.',
      'Keep the first two days light in the calendar, and move plans yourself without drama.',
      'Do small things without asking and without waiting for thanks: tea, a blanket, the dishes, easy food.',
      'Say "that looks like it hurts, shall I get the heating pad?" instead of "have you taken a pill?".',
      'Note in the calendar what helped and what was missing, while it is fresh.',
      'Say "this deserves a doctor" if the pain knocks her out, and offer to come along.',
    ],
    quiz: [
      {
        question:
          'She usually gets strong cramps and notices the first signs one morning. What helps most right now?',
        options: [
          'Wait and see whether it gets bad before she takes anything',
          'Get the painkiller she uses and the heating pad straight away',
          'Suggest a hard workout to get it out of her system',
          'Tell her to take it easy and see how it goes',
        ],
        correctIndex: 1,
        explanation:
          'Ibuprofen and similar block the production of prostaglandins and work best at the first signs, before the pain has built up. Heat can go on at the same time.',
      },
      {
        question:
          'She tells you she changes her pad every hour for several hours in a row and always passes clots. What is the best response?',
        options: [
          'Say that some people just bleed more than others',
          'Suggest she switches to tampons',
          "Say that those are signs of heavy bleeding, which can be treated, and suggest a doctor's appointment",
          'Buy bigger pads and say nothing more',
        ],
        correctIndex: 2,
        explanation:
          'Changing every hour for several hours and large clots are among the signs doctors use for heavy menstrual bleeding. It affects one in four, can be treated, and many are never told.',
      },
      {
        question: 'What is the rule for how long a tampon can stay in?',
        options: [
          'As long as it does not leak',
          'No more than 8 hours, and change typically every 4-8 hours',
          'No more than 24 hours',
          'It can stay in all night and the next day',
        ],
        correctIndex: 1,
        explanation:
          'No more than 8 hours because of the risk of toxic shock syndrome. A sudden high fever with a tampon in during a period is emergency care.',
      },
      {
        question:
          'It is day 1. She is quiet, lying on the sofa and answering in short sentences. What works best?',
        options: [
          'Ask "is something wrong?" a couple of times',
          'Go into another room and leave her alone for the whole evening',
          'Put a blanket over her, bring tea and sit nearby without demanding conversation',
          'Suggest going out for some air and seeing some people',
        ],
        correctIndex: 2,
        explanation:
          'Mood on day 1-2 is typically flat and inward, not sharp. Care without questions and presence without demands is the easiest help to accept.',
      },
      {
        question:
          'She has been in pain for three weeks, including outside her period, and has called in sick three months in a row. What is right?',
        options: [
          'It is normal for some, and heat and rest are enough',
          'Say this is not something she just has to put up with, and offer to book an appointment and come along',
          'Suggest stronger over-the-counter painkillers',
          'Wait and see whether next month is better',
        ],
        correctIndex: 1,
        explanation:
          'Pain outside the period and sick days every month are beyond normal and can be endometriosis or something else that can be treated. Diagnosis is delayed because everyone normalises the pain.',
      },
      {
        question:
          "The app says the period is expected in two days, and there is a dinner at friends' on day 1. What is most helpful?",
        options: [
          'Do not tell her, so she does not worry',
          'Wait and see on the day whether she is up for it',
          'Ask whether she wants you to move the dinner, and do it without using her period as the reason',
          'Cancel without asking her',
        ],
        correctIndex: 2,
        explanation:
          'Keep the first days light, but let her decide. Taking on the negotiation and moving the plan discreetly spares her both the pain and the logistics.',
      },
    ],
  },
};
