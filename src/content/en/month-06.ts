import type { MonthContent, Source } from '../types';
import { dailyId, weeklyId, wrapId } from '../types';

const NHS_PMS: Source = {
  label: 'NHS: PMS',
  url: 'https://www.nhs.uk/conditions/pre-menstrual-syndrome/',
};
const NHS_PERIODS: Source = {
  label: 'NHS: Periods',
  url: 'https://www.nhs.uk/conditions/periods/',
};
const NHS_INSOMNIA: Source = {
  label: 'NHS: Insomnia',
  url: 'https://www.nhs.uk/conditions/insomnia/',
};
const NHS_CONSTIPATION: Source = {
  label: 'NHS: Constipation',
  url: 'https://www.nhs.uk/conditions/constipation/',
};
const NHS_BREAST_PAIN: Source = {
  label: 'NHS: Breast pain',
  url: 'https://www.nhs.uk/conditions/breast-pain/',
};
const ACOG_PMS: Source = {
  label: 'ACOG: Premenstrual Syndrome (PMS)',
  url: 'https://www.acog.org/womens-health/faqs/premenstrual-syndrome',
};
const SUNDHED_DK: Source = {
  label: 'Sundhed.dk: The menstrual cycle',
  url: 'https://www.sundhed.dk/borger/patienthaandbogen/kvindesygdomme/om-kvindesygdomme/menstruationscyklus/',
};

const M = 6;

export const month06: MonthContent = {
  month: M,
  theme: 'The luteal phase',
  focus:
    'Progesterone, sleep and appetite: lower the expectations, raise the care, and stop tiptoeing around for two weeks.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'The corpus luteum: a gland with an expiry date',
      insight:
        'Now listen. Once the egg has been sent on its way, an empty follicle is left behind in the ovary, and you would probably assume it just packs up and goes home. It does not. It turns into something new: the corpus luteum, a small, temporary hormone gland that lives for 12-14 days and makes progesterone and a little estrogen. It has one job: to prepare the womb for a fertilised egg and keep it ready until the body knows whether there is a pregnancy. If there is not, it withers and the hormones fall. So the whole luteal phase, the calm start and the hard end, is run by one small structure that gets built up and torn down every single month. You have had colleagues with less responsibility and longer contracts. Honestly, you have had a sourdough starter that lasted less time.',
      action:
        'Open the app, find the estimated ovulation date for this cycle, and count 12-14 days forward. Use your fingers if you have to; it is how you count eggs anyway. That is the luteal phase, and it is what this month is about.',
      phaseTags: [],
      sources: [SUNDHED_DK],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: 'Progesterone: the hormone that turns the volume down',
      insight:
        'Progesterone is the luteal hormone, and it does more or less the opposite of estrogen. Estrogen sharpens, opens up and speeds things along. Progesterone turns the heat down. It acts on the same brain receptors as sedative medication, and one of its breakdown products, allopregnanolone, is directly sedating. That is why many women describe the luteal phase as having the volume turned down a notch: less urge to go out, more wish to be home, tired earlier in the evening. It is not laziness, and it is not low mood. It is chemistry asking the body to simmer instead of boiling over. You have a habit of reading silence as a message addressed to you. It is not, my friend. Someone set the volume to four, and it was not you who touched the dial. You could not even find the dial.',
      action:
        'If she seems quiet tonight, do not ask "is something wrong?". Sit down next to her and be quiet with her. It is harder than it sounds, especially for you, and it is the whole exercise.',
      phaseTags: ['luteal'],
      sources: [SUNDHED_DK],
    },
    {
      id: dailyId(M, 3),
      month: M,
      day: 3,
      title: 'She is literally warmer than you',
      insight:
        'Progesterone raises resting body temperature by 0.3-0.5 degrees, and it stays up for as long as the corpus luteum lives. This is so reliable that women who take their temperature every morning can see ovulation in hindsight: the day the curve jumps is the day after. For her it means she may feel warm, sleep more restlessly and struggle under a thick duvet. Some notice it clearly, others not at all. The temperature drops again just before the period, and that drop is one reason the body feels different in the last days. So when the duvet comes off in the middle of the night and you lie there freezing, it is not a declaration of war. It is half a degree. You have argued with an oven over less. A cooler bedroom is the simplest help you can give, and it only requires that you can open a window. You can manage that.',
      action:
        'Ask whether she has noticed being warmer in the second half of her cycle. Put out a lighter duvet or a blanket so there is a choice tonight. You are allowed to keep your own thick one; nobody is taking it.',
      phaseTags: ['luteal', 'ovulation'],
      sources: [SUNDHED_DK],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'Two weeks, two moods, one confused man',
      insight:
        'The luteal phase is not one dish. It is two. In the first week after ovulation progesterone is rising, estrogen is still fairly high, and the result is typically calm, contentment and a quiet kind of energy. In the last week, when the corpus luteum starts to wither, both hormones fall, and that is when tiredness, hunger, tenderness and irritability show up. Many partners lump the whole phase together as "the time before the period" and tiptoe around for two weeks like a man who got home from the pub later than agreed. It is unnecessary, and it looks odd. The first week is often a good week for closeness and everyday life. It is the last one that asks something of you. Learn to tell them apart, the way you can tell a steak that is resting from a steak that is burnt. Then you can stop tiptoeing.',
      action:
        'Work out which of the two weeks she is in now. If it is the first, enjoy it. If it is the last, clear something out of the calendar. Today, not "soon".',
      phaseTags: [],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'The good week you never notice',
      insight:
        'The days right after ovulation are the most overlooked good time in the cycle. The intensity of ovulation is over, PMS is far away, and progesterone brings a steady, homely calm. Many women describe the week as "content", "grounded" or "easy to be in". Everyday life works: cooking, a film, a walk, conversation without an agenda. Closeness often feels safe and free of pressure. Because the week is so undramatic, it rarely gets noticed, by her or by you. You do, on the other hand, remember in detail the week the dishwasher broke and you stood at the sink with the face of a man at war. That is a shame, because it is one of the best weeks for building up what you will both draw on in the hard week. Think of it as stock in the freezer. Nobody takes pictures of stock. But the day something burns, it is the stock that saves the dish.',
      action:
        'Do something completely ordinary together tonight that you both enjoy, without screens and without a purpose. Notice how easy it is. That is the whole point, and it is easy to miss.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: 'Water that has decided to stay',
      insight:
        'Progesterone and falling estrogen change how the kidneys handle salt and fluid, and the result is that the body holds on to water in the last week. That can mean 1-2 kilos on the scale, a belly that feels tight, swollen fingers and ankles and clothes that pinch, without her having eaten any differently. It clears by itself once the period starts. What helps a little: less salt, more water (paradoxically, the body lets go of fluid more easily when it is not thirsty), movement, and potassium from fruit and vegetables. What does not help is talking about it. If you feel a sentence on the subject forming in your mouth, drink a glass of water instead. Then at least one person in the house is doing something useful with fluid. And leave the salt in the cupboard tonight. You probably will not be trusted with it again anyway, not after your potatoes.',
      action:
        'Cook dinner with little salt and lots of vegetables today, and put a jug of water on the table. Say nothing about why. If she asks, you just fancied vegetables. That is your story now, and you are sticking to it.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'Tender breasts and your clumsy hug',
      insight:
        'Under the influence of progesterone the milk glands grow slightly, and breast tissue holds on to fluid. That makes the breasts heavier, denser and sore, sometimes so much that a hug or lying on her front hurts. The soreness, called cyclical breast pain, is completely normal and typically arrives in the last week before the period. A good, supportive bra helps, as do warmth and ordinary painkillers. What matters for you is touch: what felt lovely last week can be uncomfortable now. Your hug has not changed. It is still the same hug, coming in from the side like a man with both arms full of shopping bags. It just lands on something that hurts. Ask rather than assume, and take a "not today" without it turning into something about the two of you. It is not you being rejected. It is your elbow.',
      action:
        'Say today: "Tell me if anything hurts when I hug you, and I will adjust." Then do exactly that, without commenting. No "oh, is it that time again?". Just adjust.',
      phaseTags: ['luteal'],
      sources: [NHS_BREAST_PAIN],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: 'The gut has slowed down',
      insight:
        'Progesterone relaxes smooth muscle, and that includes the gut. In the luteal phase food moves more slowly through the system, like a Sunday stew on the lowest flame, and many women get constipation, a heavy stomach and more gas in the week before the period. Once bleeding starts and prostaglandins take over, it often flips to the opposite. It is one of the least talked-about cycle complaints, for understandable reasons, and one of those that contributes most to feeling bloated. Fibre, fluid and movement are what work. A walk after dinner does more than it sounds, and it is easier to take when there are two of you. You do not need to know anything about bowels to go for a walk. You just need shoes on, and to keep quiet about why you are going. You, who cannot find your shoes on a Monday morning, can honestly find them tonight.',
      action:
        'Suggest a 20-minute walk after dinner today. Not exercise, just air and movement. Sell it as "I need some air", not as a treatment. You are not a doctor, you are a man with shoes.',
      phaseTags: ['luteal'],
      sources: [NHS_CONSTIPATION],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'She needs more food, and it is not an excuse',
      insight:
        'The body burns more at rest in the luteal phase. The higher temperature, the work of the corpus luteum and the build-up of the womb lining all cost energy, and measurements show an extra 100-300 calories a day. On top of that, progesterone increases appetite directly. So hunger in the second half of the cycle is a real need, not a lack of discipline. Women who try to eat the same in every phase often end up hungry, irritable and tired in the last week, and blame themselves for it. Extra food in the luteal phase is not giving in. It is meeting a need. Her body is rebuilding something this week, a whole lining, layer by layer. Yours is doing exactly what it did last week, which was not much. If anyone gets the last portion, it is not you. And you do not get to stare at it while she takes it.',
      action:
        'Put an extra portion in the lunchbox or on her plate today, and say "it is fine to be hungrier this week, it is normal". Say it once. Not as a lecture.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 10),
      month: M,
      day: 10,
      title: 'Cravings are not weak will, it is serotonin calling',
      insight:
        'The craving for sweets and fast carbohydrates in the last week has an explanation. When estrogen falls, serotonin falls with it, and carbohydrates are the brain\'s shortcut to lifting serotonin again. At the same time, progesterone makes the body slightly less sensitive to insulin, so blood sugar swings more: it rises fast and falls fast, and the fall is felt as sudden hunger, restlessness and a short fuse. The answer is not a ban; that makes the craving worse. And no, it is not you standing in the kitchen asking "are you sure?" with a biscuit in your own hand either. The answer is stability: regular meals with protein and fibre so the dips are smaller, plus a portion of what she fancies, with no guilt attached. Your role is to have the food ready before the dip arrives, the way the onion is chopped before the pan is hot. Afterwards you are just a man with a bag of nuts and bad timing.',
      action:
        'Make sure she never gets to the point of being hungry today: offer something to eat between meals before she has to ask. If she says no thanks, eat it yourself and try again in two hours. You have never turned down a snack in your life.',
      phaseTags: ['luteal'],
      sources: [ACOG_PMS],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'Sleep gets thin, and it is not the mattress',
      insight:
        'In the first week after ovulation many women actually sleep well, because progesterone is sedating. The trouble comes in the last week: body temperature is still high while the hormones fall, and both of those disturb deep sleep. She wakes more often, lies awake in the middle of the night and wakes less rested even with the same hours in bed. Poor sleep is the single factor that amplifies PMS most, because everything else, hunger, irritation, vulnerability, gets worse with tiredness. A cool, dark bedroom, no screens in the last hour and a fixed bedtime make a measurable difference in exactly that week. And now listen: you are lying there with the phone on full brightness at 11.40pm, lighting up the bedroom like a supermarket fridge, wondering why she sleeps badly. The phone is not innocent. Neither, for crying out loud, are you.',
      action:
        'Set the bedroom up for good sleep tonight: air it out, dim the lights, put the phone in another room, and go to bed at the same time as her. Even if there is a match you wanted to see the end of. It ends how it ends.',
      phaseTags: ['luteal'],
      sources: [NHS_INSOMNIA],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: 'Exercise feels heavier, and she is not in worse shape',
      insight:
        'In the luteal phase resting heart rate sits a little higher, body temperature is up, and the body starts sweating later and holds fluid less well. That means the same run or the same session objectively feels harder, and peak performances are harder to reach. It is not because she is in worse shape. It is because the oven is set to a different temperature, and you know what happens to a cake when that is the case. Many women push harder when it feels heavy and end up disappointed in themselves. Better: expect less from the hard sessions and use the phase for gentler movement, technique and low-intensity endurance. And you? You are not her coach. You are the man who does not say "you can usually run further than that" while holding a bag of crisps. It is an important role. It mostly requires that you refrain from talking.',
      action:
        'If she trains today, say "it is normal for it to feel heavier this week". If she has cancelled training, say nothing about it. Not with your eyebrows either.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: 'Recovery takes longer, and you can steal it',
      insight:
        'It is not only performance that changes; it is also how quickly the body bounces back. In the luteal phase the hormonal support for muscle building is lower and sleep is worse, so soreness lingers and tiredness after a hard session lasts longer. Combined with a higher protein need that many do not cover, it means she can enter the last week already worn down. Recovery is not passivity. It is sleep, protein-rich food, fluid and rest days. As a partner you cannot train for her, and it would not look good if you tried; we have seen you run for a bus. But you can remove what steals recovery: late nights, skipped dinners, things she has to remember. Every time you say "remember to call...", you have taken a bite out of her rest day, like a man eating out of the pot before dinner is on the table. Make the call yourself.',
      action:
        'Make a meal with proper protein today, such as eggs, fish, chicken, beans or Greek yoghurt, and serve it without turning it into a project. No presentation of the dish, no "and what I did here was...". Just food.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'She is withdrawing from the world, not from you',
      insight:
        'One of the clearest luteal shifts is social. Where the follicular phase brings an appetite for people, novelty and going out, progesterone brings an appetite for the familiar: the sofa, the people closest to her, quiet, the same stew as last week. Many women cancel things in the last week that they said yes to with enthusiasm two weeks earlier, and feel guilty about it. It is not a character flaw; it is a hormonal shift in what feels good. For you it means that "can we just stay in?" is a perfectly legitimate answer, and that it is not you she is withdrawing from. It is the world she pulls back from a little, and you are part of home. Congratulations, my friend. You have become a piece of furniture. It is a promotion, and for crying out loud do not ruin it by suggesting a night out.',
      action:
        'Suggest a night in yourself this week, so it is not her who has to cancel. Say: "What I really want is to stay home with you." And mean it, because she can hear the difference.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 15),
      month: M,
      day: 15,
      title: 'Your offhand remark is not offhand any more',
      insight:
        'When serotonin falls in the last week, the brain\'s filter changes. Neutral remarks are more easily read as negative, and a small criticism feels like a big one. Studies show that women in the premenstrual phase respond more strongly to negative facial expressions and words. It is not that she is touchy. It is that sensitivity is temporarily turned up. So what you could say offhand last week, "haven\'t you sorted that yet?", now lands like a verdict. Same sentence. It just arrives at a different receiver, the way the same chilli is mild in the pot and pure fire on the tongue. Timing is free help once again: save that kind of thing for the follicular phase, and use this week to say the things you appreciate and usually forget to mention. You have a list. It has just never been read out loud, and honestly, it is not because it is too long.',
      action:
        'Notice one thing today you would normally correct or comment on, and let it go. Instead, say one concrete thing she did well. Concrete. "You are sweet" does not count.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'The yes from day 10 is due on day 25',
      insight:
        'Here is a pattern many couples know without being able to explain it. On day 10 she says yes to dinner at friends\', a weekend away and painting the kitchen. On day 25 all of it feels heavy, and she does not understand herself what she was thinking. The explanation is that she said yes with the estrogen brain, which is optimistic and outward-looking, and has to deliver with the progesterone brain, which wants calm and the familiar. Neither is "the real her". They are two settings on the same person, and you have both of them too, just without a calendar. You have also shopped for a five-course dinner on a Saturday morning and ended up with toast at eight. The practical answer is to put demanding things in the first half of the cycle, and to be generous with cancellations in the last week without holding them against her. "But you said yes yourself" is a sentence that has never won anything.',
      action:
        'Look at the calendar for the coming week. If something demanding sits in the last days before the period, offer to move it. You make the call. Not her.',
      phaseTags: ['luteal', 'follicular'],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'The luteal phase is the part of the cycle that can count',
      insight:
        'The luteal phase is the most stable part of the cycle. The corpus luteum lives for a fairly fixed time, typically 12-14 days, and anything from 10 to 16 days counts as normal. That is why it is the follicular phase that explains why a cycle is 25 days one month and 32 the next, while the distance from ovulation to period stays roughly the same. It is also why the app counts ovulation backwards from the expected period. So if you thought "irregular" meant the whole thing was chaos: no. One half is an egg timer that goes off on time. It is the other half that improvises, like you with a recipe. If you know her luteal length from temperature or ovulation tests, the estimate gets much better. If you do not, 14 days is a sensible guess. It is the only place in the app where your guess is welcome. Enjoy it.',
      action:
        "Ask whether she has ever counted how many days pass from ovulation to her period. If so, check that the app's number matches. If not, that was a question, not a task you just handed her.",
      phaseTags: [],
      sources: [NHS_PERIODS, SUNDHED_DK],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'A short luteal phase',
      insight:
        'If fewer than 10 days pass from ovulation to the period, it is called a short luteal phase. The corpus luteum dies earlier than usual, or produces too little progesterone, and the womb lining does not get enough time to become ready. For most women it means nothing in everyday life. For couples trying to conceive it can matter, because a fertilised egg gets less time to implant, and it is worth mentioning to a doctor. Stress, hard training, low energy intake, breastfeeding and thyroid problems can all shorten the phase. One short cycle says nothing. A consistent pattern over several months is something a doctor should look at. Here we sit down at the table for a moment. It is not you who makes the diagnosis. You have an app and a search engine; the doctor has a degree. Your job is to have noticed the pattern, and to say it calmly, without making it bigger than it is.',
      action:
        'If you track ovulation and the period often arrives less than 10 days after it, say: "I would mention this to the doctor." Otherwise, read the card again and put it away without worrying.',
      phaseTags: [],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 19),
      month: M,
      day: 19,
      title: 'Her body is not a topic. Not even the nice things.',
      insight:
        'In the last week she looks different to herself: the belly is tight, the breasts are bigger, the skin may flare up, and the scale is up with water. She knows it better than you do, and she has probably already thought about it several times today. Any comment about appearance, even "you look lovely", lands in a minefield. "Have you put on weight?" is obviously out, and if you were considering it, close the app and take a long walk with yourself. But "you look tired" and "did you sleep badly?" also tell her it shows. The rule is simple: in the luteal phase her body is not a topic of conversation unless she raises it herself. Then you listen. You do not say anything clever. You listen. It is the hardest discipline in the whole app, it costs nothing, and you, who can talk for twenty minutes about a barbecue grate, will manage it.',
      action:
        'Decide that this week you will say nothing at all about her body, weight, skin or looks. Not even something positive. If it itches, say something nice about dinner.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 20),
      month: M,
      day: 20,
      title: 'Touch with no agenda, and she can tell the difference',
      insight:
        'Touch does something good in the luteal phase, if it is the right kind. Calm, gentle, with no expectation that it should lead anywhere. A hand on her back, a foot rub, lying close under a blanket. It lowers the stress hormone cortisol and raises oxytocin, and it works wherever she is in the cycle. But in the last week the breasts are sore, the belly is tight and desire is often low, so touch that is looking for sex can feel like pressure. You think your hand on her back is neutral. It is not, if it is on its way somewhere else, and she knows about three seconds before you do. She can smell an ulterior motive the way you can smell a pan catching. Touch that is just touch is one of the most effective forms of care you have. It only works if it is genuine. And honestly, it is free.',
      action:
        'Offer a ten-minute foot rub or back rub tonight, and make it clear that that is all it is. Then keep to it. Ten minutes means ten minutes, not nine and a question.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: '"What can I do?" is one more task for her',
      insight:
        'The most effective help in the last week is boring: taking the practical things off her. Not by asking "what can I do?", because that is one more task to answer. You have just asked her to project-manage her own relief. It is like asking the guests what they want once they are already at the table. The help is seeing what is there and doing it: the dishes, the shopping, the packed lunches, the laundry, an appointment that needs moving, a call that needs making. Her capacity is lower, and everything removed from her list comes back as calm. What you should not take on is responsibility for her mood. You cannot make her happy, and it is not your job. You can make the day lighter, and then the mood is her own. The dishes are yours. The mood is hers. It is a very fair split.',
      action:
        'Find three things on the shared list that would fall to her this week, and do them today without announcing it. No "so, I have sorted out...". Just done.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 22),
      month: M,
      day: 22,
      title: 'Dinner is yours. All of it. The decision too.',
      insight:
        'In the luteal phase food becomes more than fuel. Hunger amplifies irritation, unstable blood sugar amplifies mood swings, and having to decide what to eat is a burden in itself when capacity is low. "What shall we have for dinner?" sounds like a question. It is a task, and you have just handed it over, like a waiter passing the guest the pot. What helps is predictability: meals on time, without her having to plan them, with protein and fibre so they last. And what she fancies, without a comment. Chocolate when there is a craving for chocolate is not a defeat; it is an understanding of what serotonin is asking for. Cooking for her this week, without questions, is one of the clearest ways to say "I see you". Honestly, it does not have to be good. It just has to be there, and it has to be on time.',
      action:
        'Take charge of dinner today: decide, shop, cook. Ask at most "is there anything you particularly fancy?" If the answer is "I don\'t know", you are still the one deciding.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'A quiet evening is an achievement, not a failure',
      insight:
        'In the follicular phase an evening can easily hold three things and somewhere to be. In the last week of the luteal phase the nervous system needs less input: less noise, fewer people, fewer decisions. There is a physiological reason, because falling progesterone removes the calming effect the brain has had for two weeks, and everything gets a little louder. That includes you, standing in the kitchen with a podcast on the speaker, banging the cupboard doors like a man looking for something he never put away. A quiet evening is not a boring evening. It is an evening where she does not have to perform: the sofa, a blanket, a series you both know, or nothing at all. Being able to sit in that without getting restless and suggesting things is a gift. If you feel the urge to say "shall we...", the answer is no. Stay seated.',
      action:
        'Offer an evening with no plans at all today: no guests, no errands, no "we just need to". Turn off whatever makes noise, and stay. The phone too. Especially the phone.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 24),
      month: M,
      day: 24,
      title: 'Coffee and wine hit harder this week',
      insight:
        'Two everyday things amplify luteal complaints more than most people realise. Caffeine is stimulating and diuretic: it disturbs sleep that is already fragile and can worsen breast tenderness and restlessness. Alcohol markedly lowers sleep quality, raises body temperature at night and worsens the blood sugar dip that brings hunger and a short fuse the next day. Neither is forbidden, but the effect is bigger in the last week than in the rest of the cycle. It is not your job to control what she drinks. If you find yourself taking the cup out of her hand, you are not a help, you are a problem with a beard. It is your job to make the good choice the easy choice, without commenting. Put it out. Say nothing. That is the entire technique, and it can be learned by a man who has learned to put a cup on a table.',
      action:
        'Buy or make something she likes without caffeine or alcohol for tonight: tea, an alcohol-free version, juice with sparkling water. Put it out without saying anything. Not "I bought you something healthy". Just out.',
      phaseTags: [],
      sources: [NHS_PMS, NHS_INSOMNIA],
    },
    {
      id: dailyId(M, 25),
      month: M,
      day: 25,
      title: 'When the period comes, it lifts, and you say thank you',
      insight:
        'For many women the first day of the period, despite cramps and tiredness, is a relief. Progesterone is gone, the temperature has dropped, the water leaves the body, and the head clears. The breasts stop hurting, the stomach settles, and the sensitivity that coloured the last days fades. That is worth knowing, because it shows that the luteal complaints are not her "baseline". They are a state with an expiry date, like milk. And it is a good day to acknowledge that you both got through the last week, without turning it into a comparison or a review of what went wrong. Nobody needs your evaluation, and certainly not with a star rating. What is needed is that you say thank you and do the dishes. That is two things, and you can manage both. One of them you have honestly been practising for a month.',
      action:
        'When the bleeding starts, say: "That was a hard week, thank you for holding on." Then take the practical things for the next two days. Without mentioning that you are doing it.',
      phaseTags: ['menstrual'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 26),
      month: M,
      day: 26,
      title: 'Pack for the hard week while you can still find the suitcase',
      insight:
        'The best help for the luteal phase is given two weeks early. In the follicular phase there is capacity to plan, and in the last week there is not. So now is when the calendar should be cleared for the last 5-6 days before the period, when the kitchen should be stocked with good snacks and easy food, when the hard conversation should be had, and when she can say what she wants from the hard week while she still feels like talking about it. Think of it as prepping in a kitchen: what is already chopped, you do not have to think about when the pan is hot. You know the other model: standing in a smoke-filled kitchen discovering you never bought the onions. You have tried that often enough. It takes ten minutes in the good week and saves, for crying out loud, many hours in the hard one.',
      action:
        'Set a reminder in the app or your calendar for 6 days before the expected period saying "slow down, fill the fridge". Then it happens by itself, and you do not have to remember. Which you would not have done anyway.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 27),
      month: M,
      day: 27,
      title: 'No ovulation, no luteal phase, and the app has no idea',
      insight:
        'The luteal phase can only begin if there has been an ovulation. Without ovulation there is no corpus luteum, no progesterone, no temperature rise, and any bleeding that follows is not a true period but estrogen-driven breakthrough bleeding. It happens in the odd cycle for most women, and more often under stress, after coming off the pill, with PCOS and in the years before menopause. That is why the temperature curve and ovulation tests are so useful: they show whether there actually was a luteal phase. For you it means that "she is in the luteal phase" in the app is an estimate. The app was not there. It has a calendar and a formula, the way a recipe has a cooking time but has never seen your oven. Her own signs beat the table every time, and the only thing you have to do is trust her more than your phone. Honestly, that should not be hard, but we know you.',
      action:
        'Ask whether she noticed signs of ovulation this cycle. If she did not, adjust your expectations of what the app says about the coming weeks. The app will not be offended.',
      phaseTags: ['ovulation'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 28),
      month: M,
      day: 28,
      title: 'You cannot remember last month. The log can.',
      insight:
        'Luteal complaints are individual. Some get bloating but no sore breasts, some sleep terribly, some get mostly hungry, some mostly sensitive. It is impossible to help precisely without knowing her pattern, and memory of last month is unreliable. Your memory is especially unreliable. You cannot remember what you had for dinner on Tuesday, and you cooked it. That is where the log helps: sleep, appetite, bloating, mood, tenderness, appetite for exercise. After two or three cycles you can see whether the breast tenderness always starts on day 22, whether sleep fails on days 24-27, whether she is always hungry on day 25. Then you can act on the date, not on the symptom, and that is the difference between reacting and being prepared. It is also the difference between a man with a shopping list and a man standing in the supermarket with a heat pad, unable to remember what he came for.',
      action:
        'Ask which three luteal complaints usually hit her hardest, and make sure exactly those three get logged this cycle. It is her log. It is your job to remember that it exists.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 29),
      month: M,
      day: 29,
      title: 'Lower the expectations, not the care. You had them the wrong way round.',
      insight:
        'The month\'s headline boils down to one sentence: lower the expectations, and raise the care. Expectations of social energy, of exercise, of sex, of projects, of her "being her usual self". Care in the form of food, sleep, quiet, practical help, gentle touch and no comments. The mistake many partners make is the opposite: keeping expectations up and pulling care back when she goes quiet or sharp, because it feels like rejection. So you take offence at her being quiet, and respond by going quiet yourself. Now there are two quiet people in a flat, and only one of them has a hormonal reason. The other has a bruised ego and a cold cup of coffee. That is exactly where it turns. The one who stays when it is hard, without demanding anything, is the one she remembers when it gets easy again.',
      action:
        'Pick one expectation you will lower in the coming luteal phase, and one act of care you will make a habit. Tell her both. Out loud. With words. Not with a nod from the sofa.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 30),
      month: M,
      day: 30,
      title: 'Month 6: what you have learned, and what you can do now',
      insight:
        'You now know that the corpus luteum produces progesterone for 12-14 days, that progesterone calms, raises the temperature and turns the heat down, and that the luteal phase has a calm first week and a harder last one. You know that water retention, sore breasts, a slow gut, hunger and poor sleep have physical causes, and that she genuinely needs more food and more rest. You know that criticism lands harder, that plans from the follicular phase feel heavy, and that her body is not a topic. And you know the help is concrete: food, quiet, tasks, touch without an agenda. A month ago you thought the luteal phase was a fish dish. Now you can explain the corpus luteum to a colleague over lunch. For crying out loud, do not. Next month is about PMS and PMDD, where it gets hardest. Take the quiz while you are still clever.',
      action:
        "Tell her the three things you will do differently in the next luteal phase. Then take the month's quiz. Without flicking back through the cards. We know you considered it. We saw you.",
      phaseTags: [],
    },
  ],
  weekly: [
    {
      id: weeklyId(M, 1),
      month: M,
      week: 1,
      title: 'The corpus luteum and the two weeks you thought were one',
      body: [
        'Now listen. The luteal phase is the half of the cycle partners know least about, and the one where knowledge makes the biggest difference. Ask a random man what happens after ovulation and you typically get an answer that starts with "er" and ends with "the period?", and then he looks down into his coffee. Month 1 gave you the model: progesterone up means calm, both hormones down means PMS. This month we go a layer deeper, because the luteal phase is more than a run-up to the period. It is two weeks with its own biology, its own rhythm and its own needs.',
        'It all starts with ovulation. When the follicle bursts and releases the egg, an empty shell is left behind in the ovary. Over a couple of days it is transformed into the corpus luteum, a temporary hormone gland that lives for typically 12-14 days. The corpus luteum produces progesterone, and a smaller amount of estrogen, and its job is to make the womb lining thick, blood-rich and ready to receive a fertilised egg. If a pregnancy happens, the early embryo sends a signal that keeps the corpus luteum alive. If not, it withers, the hormones fall, and the lining is shed as a period. A whole gland built up and torn down every month. Honestly, you get grumpy assembling a bookcase.',
        "Progesterone is a hormone that holds back. It acts on the same brain receptors as sedatives and sleep aids, and one of its breakdown products is directly sedating. It raises resting body temperature 0.3-0.5 degrees for as long as the corpus luteum lives. It relaxes smooth muscle in the gut and blood vessels. It increases appetite and changes how the body handles salt, fluid and blood sugar. In short: progesterone turns the heat down and lets everything simmer. That is not bad. It is just a different flame from estrogen's, and you have to learn to cook on it without fiddling with the knob the whole time.",
        "The most important thing to understand is that the luteal phase has two different faces. In the first week after ovulation progesterone rises while estrogen is still nicely high. For many the result is a calm, content, homely mood: less urge to be out, more wish for the near and familiar, a steady kind of energy and often good sleep. It is one of the cycle's best weeks for everyday life and closeness, and one of the most overlooked, because it is so undramatic. Nobody remembers a week where everything just worked, the way nobody remembers a dinner that simply tasted good. You should start.",
        'The last week is different. When the corpus luteum starts to wither, progesterone and estrogen fall together, and that is where body and mind react: fluid builds up, the breasts get sore, the gut slows down, hunger rises, sleep gets lighter, and sensitivity to criticism and noise is turned up. The temperature is still high while the hormones that kept it there disappear, and that combination is part of what makes the last nights so restless. It is not something she does. It is something that happens to her, and you need that distinction straight before you open your mouth. Also before you open the fridge and say something about what is missing.',
        'Many partners treat the whole luteal phase as "the time before the period" and tiptoe around for two weeks as if the floor were mined. It is unnecessary, it wastes a good week, and it looks strange from the outside, like a grown man trying to open a bag of crisps silently. Others notice nothing until it gets hard, and are then surprised, every month, as if it were the first time. The best approach is to know the two weeks separately: enjoy the first, and prepare for the last. The app shows where she is, but her own signs are more precise: temperature, sleep, appetite, the wish to stay home.',
        "This week your job is to spot which week she is in, and to treat them differently. In the calm week: everyday life, closeness, the ordinary. In the hard week: fewer plans, more food, more quiet, and no comments about any of it. That is the whole month's programme in one sentence. You can remember one sentence. You still know the lyrics to songs from 2004, and nobody asked you to.",
      ],
      conversationQuestion:
        'Can you feel a difference between the first and the last week after ovulation? What is the best thing about the calm week, and the hardest thing about the last one?',
      sources: [SUNDHED_DK, NHS_PERIODS, ACOG_PMS],
    },
    {
      id: weeklyId(M, 2),
      month: M,
      week: 2,
      title: 'The body in the last week: water, breasts, gut, sleep and your closed mouth',
      body: [
        'The physical complaints in the last week of the luteal phase are not imagined, and they are not small. They explain a large part of why she can seem uncomfortable, tired and short-tempered without anything being wrong between you. That is worth getting straight, because your first theory is typically that it is something you did. It usually is not, even though you have honestly done plenty. Here is what happens in the body, and what actually helps.',
        'Fluid first. Progesterone and falling estrogen change how the kidneys handle salt, and the body starts holding on to water. That can mean 1-2 kilos on the scale, a belly that feels tight and bloated, swollen fingers and ankles and clothes that pinch, without her having eaten any differently. It clears within the first days of the period. Less salt, more water, movement and potassium from fruit and vegetables help a little. Comments do not. She knows how she looks, and she has already thought about it. You have nothing to add, and that is good news, because then you can use your mouth for eating vegetables. There are too few of those on your plate as it is.',
        'Breasts next. Under the influence of progesterone the milk glands grow slightly, and the tissue holds on to fluid. The breasts get heavier, denser and sore, sometimes so much that an ordinary hug hurts. It is called cyclical breast pain, it is completely normal, and it goes away when bleeding starts. A supportive bra, warmth and ordinary painkillers help. What matters for you is touch: what was nice last week can be uncomfortable now. Your hug is the same hug, your elbow is the same elbow. They just land at a different point in the month. Ask, and take a no without making it into something.',
        'The gut slows down. Progesterone relaxes smooth muscle, including in the gut, so food moves more slowly through the system, a Sunday stew on the lowest flame. The result is constipation, a heavy stomach and more gas in the days before the period, and often the opposite when bleeding starts and prostaglandins take over. Fibre, fluid and movement are what work, and a walk after dinner does more than it sounds. It is one of the least talked-about cycle complaints, and one of those that contributes most to feeling bloated and unwell. You do not need to understand the gut. You just need to be able to find your shoes, and they are where you dropped them.',
        'Then sleep. In the first week after ovulation many sleep well, because progesterone is sedating. In the last week body temperature is still up while the hormones fall, and both disturb deep sleep. She wakes more often, lies awake in the middle of the night and wakes less rested. It is the single factor that amplifies the rest most: hunger, irritation and vulnerability all get worse with tiredness. A cool, dark bedroom, no screens in the last hour, a fixed bedtime and less caffeine and alcohol make a measurable difference in exactly that week. What does not help is you lying next to her scrolling with the sound on, glowing like a supermarket fridge. You are part of the bedroom. Behave like a part that works.',
        'Caffeine and alcohol deserve a word of their own. Caffeine is stimulating and diuretic and can worsen breast tenderness, restlessness and sleep. Alcohol lowers sleep quality, raises body temperature at night and worsens the blood sugar dip that brings hunger and a short fuse the next day. Neither is forbidden, but they hit harder in the last week. Your job is not to control what she drinks. Nobody has ever said "thank you for taking my glass", and nobody is about to. Your job is to make the good choice the easy choice: a good tea, an alcohol-free option, put out without an explanation, the way you put bread on the table without making a speech about it.',
        'What can you concretely do this week? Cook with little salt and lots of vegetables. Put water out. Suggest the walk. Keep the bedroom cool, and go to bed at the same time. Ask before you hug hard, and accept the answer. And keep every comment about body, weight and tiredness to yourself, including the kindly meant ones. It sounds like little, and it is. These are not heroics; honestly, it is just housekeeping. For her it is the difference between a week she fights through alone and a week where there is one person in the house who has understood it and still keeps quiet.',
      ],
      conversationQuestion:
        'Which of the physical complaints, bloating, sore breasts, gut or sleep, bothers you most in the week before your period? And is there anything I do that makes it worse without knowing?',
      sources: [NHS_PMS, NHS_BREAST_PAIN, NHS_CONSTIPATION, NHS_INSOMNIA],
    },
    {
      id: weeklyId(M, 3),
      month: M,
      week: 3,
      title: 'Food, exercise and energy: she needs more, and you need to keep quiet',
      body: [
        'There is a widespread idea that the body should work the same all month, and that deviations are a matter of willpower. It is an idea that typically comes from people whose bodies actually do work the same all month. That is you, the man with the same packed lunch for eleven years. For a woman in the luteal phase that idea is directly harmful. The body has different needs in the second half of the cycle, and that goes especially for food, exercise and rest.',
        'Start with energy use. In the luteal phase body temperature sits higher, the corpus luteum is working, and the womb lining is being built up. That costs energy, and measurements show an extra 100-300 calories a day. On top of that, progesterone increases appetite directly. So hunger in the last week is a real, physiological need. Women who try to eat the same in every phase often end up hungry, tired and irritable in the last week, and blame themselves for it. Extra food in the luteal phase is not giving in. It is meeting a need the body actually has. Her body is rebuilding a whole layer of the womb. Yours has mostly been on the sofa watching other people cook.',
        "Then the cravings. When estrogen falls in the last week, serotonin falls with it, and carbohydrates are the brain's fastest route to lifting it again. At the same time progesterone makes the body slightly less sensitive to insulin, so blood sugar swings more: it rises fast after something sweet and falls fast again, and the fall is felt as sudden hunger, restlessness and a short fuse. The craving for chocolate, bread and salty snacks is therefore biology, not weak character. Bans make it worse, and so does a partner eyeing the bag as if it were his. What works is stability: regular meals with protein, fibre and slow carbohydrates so the swings are smaller, plus a portion of what she fancies, with no guilt and no audience.",
        'Exercise feels heavier, and it is not imagination. In the luteal phase resting heart rate is a little higher, body temperature is up, and the body sweats later and holds fluid less well. The same run, the same set, objectively feels harder, and peak performances are harder to reach. That does not mean she is in worse shape. The oven is just set to a different temperature, and the same dough rises differently. Many push harder when it feels heavy, get disappointed and push themselves even more. The smart move is the opposite: expect less from the hard sessions in the last week and use the phase for gentler movement, technique, walks and low-intensity endurance. You are not the coach here. You are the man who says nothing about times, and who last ran when the bus was pulling away.',
        "Recovery also takes longer. The hormonal support for muscle building is lower, sleep is worse, and the protein need is higher than many cover. Soreness lingers, and tiredness after a hard session lasts longer, so she can enter the last week already worn down. Recovery is not passivity. It is sleep, protein-rich food, fluid and rest days, and all of those get harder when everyday life is pressured, and when there is someone in the house suggesting late things at ten o'clock with a glass in his hand.",
        'This is where you come in. You cannot eat or train for her, but you can remove what steals energy and recovery. Cook on time, with protein and something that lasts. Make sure there are snacks in the house that are easy to grab: nuts, fruit, yoghurt, dark chocolate. Take responsibility for dinner in the last week so she does not have to decide anything. Say "it is normal for it to feel heavier now" if she comes home disappointed from training, and say nothing if she has cancelled. And do not comment on what she eats, neither the amount nor the type. That includes "good to see you eating properly". You may have thought that sentence was sweet. Honestly, it is not. It is a verdict with a smile on, and she can taste it.',
        'The overall message is simple: she needs more food, less pressure and more rest in the second half of the cycle. Not because she is weak, but because her body is doing something yours is not. The partner who understands that makes the last week noticeably easier. The one who does not becomes one more thing to struggle with, and you would rather not be on the list right below "constipation". It is not good company.',
      ],
      conversationQuestion:
        'When in your cycle are you hungriest, and when does training feel heaviest? Is there anything I can do so you do not have to think about food that week?',
      sources: [ACOG_PMS, NHS_PMS],
    },
    {
      id: weeklyId(M, 4),
      month: M,
      week: 4,
      title:
        'The mind in the luteal phase: home, sensitivity and plans made with a different brain',
      body: [
        'The body is one half of the luteal phase. The mind is the other, and it is often here that misunderstandings between partners arise. Not because she becomes someone else, but because what feels good, meaningful and manageable shifts. If you understand the shift, you can keep up. If you do not, you stand in the doorway with your coat on asking "what just happened?", like a man walking into the kitchen after the smoke alarm has gone off. You will probably do that a couple of times anyway. But fewer.',
        'The first shift is social. Estrogen brings an appetite for people, novelty and going out. Progesterone brings an appetite for the familiar: the sofa, the people closest to her, quiet, the same dish as on Tuesday. Many women cancel things in the last week that they said yes to with enthusiasm two weeks earlier, and feel guilty about it. It is not a character flaw. It is a hormonal shift in what feels good. For you it means that "can we just stay in?" is a legitimate answer, and that it is not you she is withdrawing from. It is the world she pulls back from a little, and you are part of home. It is not a demotion. It is the best seat in the house, and honestly, you have not done much to earn it.',
        'The second shift is sensitivity. When serotonin falls in the last week, the brain\'s filter changes. Neutral remarks are more easily read as negative, and a small criticism feels like a big one. Studies show that women in the premenstrual phase respond more strongly to negative facial expressions and words. It is not that she is touchy. Sensitivity is temporarily turned up, and PMS amplifies feelings; it does not invent them. So the offhand "haven\'t you sorted that yet?", which went fine on day 10, now lands like a verdict. Same sentence, same you, different week, the way the same chilli is mild in the pot and pure fire on the tongue. Save that kind of thing for the follicular phase, and use the last week to say the things you appreciate and usually forget.',
        'The third shift is about plans. Here is a pattern many couples know: on day 10 she says yes to dinner at friends\', a weekend away and painting the kitchen. On day 25 all of it feels heavy, and she does not understand herself what she was thinking. The explanation is that she said yes with the estrogen brain, optimistic and outward-looking, and has to deliver with the progesterone brain, which wants calm. Neither is "the real her". The practical answer is to put the demanding things in the first half of the cycle, to be generous with cancellations in the last week, and never to hold an old yes against her. You are the one who calls and moves the dinner. You have a phone. You have mostly used it to look at recipes you never make.',
        'A word about length, and here we put the humour down for a moment. The luteal phase is the most stable part of the cycle: typically 12-14 days, with 10-16 counted as normal. It is the follicular phase that explains why cycles vary, not the luteal phase. If there are consistently fewer than 10 days from ovulation to period, it is called a short luteal phase. For most it means nothing in everyday life, but for couples trying to conceive it is worth mentioning to the doctor, because a fertilised egg gets less time to implant. Stress, hard training, low energy intake and thyroid problems can all shorten the phase. A single short cycle says nothing; a pattern over several months deserves a doctor, and it is something you mention calmly together, at the table, without making it bigger than it is.',
        'So what do you do? This month\'s headline: lower the expectations, and raise the care. Expectations of social energy, training, sex, projects and of her being "her usual self". Care in the form of food on time, quiet evenings, chores you simply take, gentle touch without an agenda and no comments about body or appearance. The mistake many make is the opposite: keeping expectations up and pulling care back when she goes quiet or sharp, because it feels like rejection. Then two people stand there waiting for the other to take the first step, and only one of them has a biological excuse. The other has a cold cup of coffee and a bruised ego, and neither of those is a diagnosis.',
        'The best time to prepare for the luteal phase is in the follicular phase. Clear the calendar for the last 5-6 days, stock up on easy food, have the difficult conversation, and ask her what she wants from the hard week while she still feels like talking about it. It is chopping the onion before the pan is hot. It takes ten minutes in the good week and saves hours in the hard one. And when the period comes and it all lifts, acknowledge that you got through, with no review of what went wrong. Nobody wants your report, not even the short version. The one who stays when it is hard, without demanding anything, is the one she remembers when it gets easy again.',
      ],
      conversationQuestion:
        'When you are in the last week before your period, what do you most want me to do when you cancel something or withdraw: leave you be, stay with you or take over? And how do I know which it is that day?',
      sources: [NHS_PMS, NHS_PERIODS, ACOG_PMS],
    },
  ],
  wrap: {
    id: wrapId(M),
    month: M,
    title: 'Month 6: The luteal phase, two weeks you can now tell apart',
    summary: [
      'This month was about the second half of the cycle, the one you used to call "the time before" and otherwise had no name for. After ovulation the empty follicle becomes the corpus luteum, which produces progesterone for 12-14 days. Progesterone calms, raises body temperature, relaxes the gut, increases appetite and makes the body hold on to fluid. The first week after ovulation is often calm and homely; in the last week, when the hormones fall, come bloating, sore breasts, a slow gut, hunger, poor sleep and turned-up sensitivity. Two weeks, two different jobs for you, and neither of them is called "tiptoe around".',
      'You have learned that she genuinely needs more food and more rest in the luteal phase, that the craving for sweets is blood sugar and serotonin, not weak will, that exercise feels heavier and recovery takes longer, that criticism lands harder, and that plans made in the follicular phase feel heavy when they come due. You have learned that the luteal phase is stable at 10-16 days, and that a consistently short luteal phase is something a doctor should look at if you are trying to conceive. In other words, you have learned more about the corpus luteum than you ever planned to, and more than you know about your own car.',
      'Most importantly, you have learned what helps: food on time, quiet evenings, chores you take without asking, gentle touch without an agenda, a cool bedroom and no comments about body or appearance. Lower the expectations, and raise the care. Next month we go into PMS and PMDD, where it gets hardest, and where what you have learned now becomes decisive. So hold on to it, for crying out loud. It is not a syllabus. It is your everyday life, and it starts in the kitchen.',
    ],
    keepDoing: [
      'Know the difference between the calm first week and the hard last week, and treat them differently. Do not tiptoe in either. You are too big to tiptoe.',
      'Take responsibility for dinner in the last week, and keep protein snacks in the house before anyone is hungry. Nuts count. Your crisps do not.',
      'Keep the bedroom cool, and go to bed at the same time as her in the last days before the period. The phone sleeps somewhere else, and it is fine.',
      'Say nothing about body, weight, skin or tiredness in the luteal phase, not even positively. Praise the dinner instead, even when you cooked it.',
      'Offer quiet evenings and gentle touch without an agenda, and accept a no without making it into something. Ten minutes means ten minutes.',
      'Clear the calendar for the last 5-6 days before the period while you are still in the follicular phase. You make the call. It is your phone.',
    ],
    quiz: [
      {
        question:
          'It is day 17, three days after ovulation, and she seems calm and content. What do you do?',
        options: [
          'Tiptoe carefully around; PMS could start any moment',
          'Enjoy an ordinary, cosy evening together; the first luteal week is often a good week',
          'Ask whether she is okay, because she is so quiet',
          'Suggest a big party at the weekend while she is feeling good',
        ],
        correctIndex: 1,
        explanation:
          'The luteal phase has two faces. The first week, with rising progesterone, is typically calm and homely, and calm is not the same as something being wrong. It is the last week that asks for extra. Save the tiptoeing for then, and preferably skip it altogether. You are too heavy on your feet for it to work anyway.',
      },
      {
        question:
          'Day 25: she says she is hungry again an hour after dinner and seems embarrassed about it. What helps most?',
        options: [
          'Suggest a glass of water; hunger is often thirst',
          'Say it is normal to need more food now, and find her something with protein',
          'Remind her that she had a big portion',
          'Say nothing and let her sort it out herself',
        ],
        correctIndex: 1,
        explanation:
          'The body uses 100-300 more calories a day in the luteal phase, and progesterone increases appetite. Hunger is a real need; meeting it without comment stabilises both blood sugar and mood. The glass of water you can drink yourself, and honestly, you should.',
      },
      {
        question:
          'She has slept badly three nights in a row in the luteal phase and is short-tempered. What is the most concrete help tonight?',
        options: [
          'Suggest she takes a nap tomorrow',
          'Make the bedroom cool and dark, put the phones away and go to bed at the same time',
          'Say it is probably the hormones and will pass',
          'Pour her a glass of wine so she can wind down',
        ],
        correctIndex: 1,
        explanation:
          'Progesterone keeps body temperature up, and the falling hormones make sleep light. A cool, dark room without screens is what works. Alcohol worsens sleep quality and next-day blood sugar, and "it is probably the hormones" is a diagnosis nobody asked you for. You are not a doctor; you are the man in charge of the window.',
      },
      {
        question:
          "On day 10 she said yes to dinner at friends'. Now it is day 26 and she says she cannot face it. What works best?",
        options: [
          '"But you said yes yourself, it is a bit late to cancel now"',
          'Contact the friends yourself and move it, without holding her yes against her',
          'Go alone and say she is ill',
          'Persuade her that it will be nice once she is there',
        ],
        correctIndex: 1,
        explanation:
          'The yes was said with the estrogen brain, and delivery falls in the last luteal week. Put the demanding things in the first half of the cycle, and be generous with cancellations in the last week. You make the call. You have the phone in your hand anyway; you always do.',
      },
      {
        question:
          'She puts on a jumper, looks in the mirror and sighs. It is day 24. What is the wisest thing to say?',
        options: [
          '"You look lovely"',
          '"You are probably a bit bloated, it is just water"',
          'Nothing about her body; instead something concrete you appreciate that is not about looks',
          '"Shall we go for a walk so it eases?"',
        ],
        correctIndex: 2,
        explanation:
          'In the luteal phase the body is not a topic of conversation unless she brings it up herself. Even well-meant comments tell her that it shows. And "it is just fluid" is correct biology said at the wrong time, which, for crying out loud, is your speciality. Acknowledge something else, genuine and concrete.',
      },
      {
        question:
          'You are trying to conceive, and her period consistently arrives 8 days after the ovulation test turns positive. What is the right response?',
        options: [
          'That is normal; the luteal phase varies a lot',
          'Suggest she stresses less, then it will sort itself out',
          'Say that a consistent pattern of a short luteal phase is something you should mention to the doctor, and offer to come along',
          'Wait six months and see whether it changes',
        ],
        correctIndex: 2,
        explanation:
          'Fewer than 10 days from ovulation to period is called a short luteal phase. One short cycle says nothing, but a fixed pattern can make it harder for a fertilised egg to implant, and that deserves a doctor. Not a search engine, and not advice to relax. Offer to go along, and mean it.',
      },
    ],
  },
};
