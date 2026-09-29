import type { MonthContent, Source } from '../types';
import { dailyId, weeklyId, wrapId } from '../types';

const NHS_IRON: Source = {
  label: 'NHS: Iron deficiency anaemia',
  url: 'https://www.nhs.uk/conditions/iron-deficiency-anaemia/',
};
const NHS_PMS: Source = {
  label: 'NHS: PMS',
  url: 'https://www.nhs.uk/conditions/pre-menstrual-syndrome/',
};
const NHS_EATWELL: Source = {
  label: 'NHS: Eat well',
  url: 'https://www.nhs.uk/live-well/eat-well/',
};
const NHS_PAIN: Source = {
  label: 'NHS: Period pain',
  url: 'https://www.nhs.uk/conditions/period-pain/',
};
const NHS_VITAMINS: Source = {
  label: 'NHS: Vitamins and minerals',
  url: 'https://www.nhs.uk/conditions/vitamins-and-minerals/',
};
const NHS_EXERCISE: Source = {
  label: 'NHS: Exercise',
  url: 'https://www.nhs.uk/live-well/exercise/',
};
const NHS_SLEEP: Source = {
  label: 'NHS: Sleep and tiredness',
  url: 'https://www.nhs.uk/live-well/sleep-and-tiredness/',
};
const NHS_EATING: Source = {
  label: 'NHS: Eating disorders',
  url: 'https://www.nhs.uk/conditions/eating-disorders/',
};
const ACOG_PMS: Source = {
  label: 'ACOG: Premenstrual Syndrome (PMS)',
  url: 'https://www.acog.org/womens-health/faqs/premenstrual-syndrome',
};
const ACOG_DYSMENORRHEA: Source = {
  label: 'ACOG: Dysmenorrhea: Painful Periods',
  url: 'https://www.acog.org/womens-health/faqs/dysmenorrhea-painful-periods',
};

const M = 8;

export const month08: MonthContent = {
  month: M,
  theme: 'Food, exercise and recovery',
  focus:
    'Make the good choice the easy choice: what you can cook, eat and do together in each phase.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'Food shifts things, but it does not cure',
      insight:
        'This month is about food, exercise and recovery, and it starts with an honest frame: no diet removes PMS, and no training plan removes cramps. But food, movement and sleep are the three levers that are easiest to pull in everyday life, and they shift things you can measure: iron levels, blood sugar, sleep quality and pain. The good thing about them is that they are shared. You eat the same food, sleep in the same bed and can walk the same route. Your role is not to become her coach. It is to make the good choice the easy choice for both of you, without anyone having to explain themselves.',
      action:
        'Ask her today: "Is there anything about food or sleep you would like us to do differently this month?" Then listen without suggesting anything yet.',
      phaseTags: [],
      sources: [NHS_EATWELL],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: 'Iron: what the bleeding costs',
      insight:
        'Every period costs iron, and women of childbearing age are the group most often affected by iron deficiency. Iron carries oxygen in the blood, and a low store shows up as tiredness that sleep does not fix, breathlessness on stairs, cold hands, headaches and a short fuse. If she has heavy periods, the risk is markedly higher. Iron comes in two forms: haem iron from meat, fish and offal, which is absorbed easily, and non-haem iron from lentils, beans, tofu, oats and leafy greens, which is absorbed less well. Both count, and the period week is when it makes most sense to think about it. Weeks of tiredness deserve a blood test, not a theory.',
      action:
        'Put iron on the dinner table today without mentioning the word iron: meat, lentils, beans or chickpeas. Just cook it.',
      phaseTags: ['menstrual'],
      sources: [NHS_IRON],
    },
    {
      id: dailyId(M, 3),
      month: M,
      day: 3,
      title: 'Vitamin C unlocks plant iron',
      insight:
        'Iron from plants is absorbed several times less well than iron from meat, but it can be helped along. Vitamin C in the same meal makes non-haem iron far easier to absorb; it is one of the best documented combinations in nutrition. No supplement needed: peppers, broccoli, citrus, kiwi, strawberries and tomatoes are enough, as long as they are on the plate at the same time. A lentil soup with lemon, a bean salad with peppers, porridge with berries. If she eats little or no meat, that combination is not a detail but the foundation. And it is something you can do in the kitchen without saying a word about diet.',
      action:
        'At dinner: put something with vitamin C next to whatever has iron. Lemon wedges, raw pepper, or an orange for dessert.',
      phaseTags: ['menstrual'],
      sources: [NHS_IRON, NHS_VITAMINS],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'Coffee and tea with the meal',
      insight:
        'Both coffee and tea contain compounds, polyphenols and tannins, that bind iron in the gut and can halve absorption from a meal. This applies especially to plant iron. The effect is greatest when the drink is taken with the food or right after, and small if an hour or so passes. No need to drop the morning coffee, just move it away from the iron-rich meal. Large amounts of milk and calcium with the meal also reduce absorption somewhat. It is one of the few dietary rules that is actually worth knowing, because it is free, and because it can make a real difference for a woman who bleeds every month.',
      action:
        'Serve water or a glass of juice with dinner, and make the coffee or tea an hour later instead.',
      phaseTags: ['menstrual', 'luteal'],
      sources: [NHS_IRON],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'Heat or cold?',
      insight:
        'Heat is the best documented home treatment for period cramps. A heating pad at around 40 degrees on the lower belly for a couple of hours has worked as well as ibuprofen in studies, and the combination is better than either alone. Heat relaxes the uterine muscle and increases blood flow. Cold does nothing for cramps, but many find it useful for other things: a cold cloth on the neck for period headaches, a cool pack on tender breasts in the days before. Rule of thumb: heat for cramps and lower back, cold for headache and swelling. A warm bath in the evening covers both, because it also helps sleep.',
      action:
        'Fill the hot water bottle or warm the pad before she asks, and put it on the sofa or bed where she is.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN, ACOG_DYSMENORRHEA],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: 'Movement as pain relief',
      insight:
        "It sounds wrong when you are in pain, but gentle movement eases period pain for many. A walk, easy cycling, yoga or stretching increases blood flow in the pelvis and releases the body's own painkillers, endorphins. Studies suggest that women who move regularly have milder cramps, and that a single gentle session can take the edge off the pain right now. That is not the same as training through it. Hard training on day 1 makes it worse for some. The point is gentle activity, ideally outdoors, and ideally together. It is easier to go for a walk when someone walks with you.",
      action:
        'Suggest a short 15-20 minute walk today, at her pace. Take a no without trying to persuade.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN, NHS_EXERCISE],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'Fluids, headaches and blood loss',
      insight:
        'Lack of fluid amplifies two things that are already in play during the period and the days before: headache and fatigue. The body loses fluid with the blood, and many drink less when they feel nauseous or are lying down. Mild dehydration can also make cramps worse, because muscles become more sensitive. The recommendation is six to eight glasses of fluid a day, and everything counts: water, tea, milk, soup. Thirst is a late signal, so a bottle within reach helps more than good advice. If the headache keeps returning around the period, it is often hormonal migraine, which deserves a doctor, not just more water.',
      action:
        'Put a full glass or bottle of water where she is sitting or lying, and refill it when it is empty.',
      phaseTags: ['menstrual', 'luteal'],
      sources: [NHS_EATWELL],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: 'Omega-3 and pain',
      insight:
        'Oily fish like salmon, mackerel, herring and sardines contain omega-3 fatty acids, which dampen the production of the prostaglandins that cause cramps. Several smaller studies have found that women who get omega-3 daily over a few months report milder period pain and use less painkiller. The evidence is not rock solid, the studies are small, but the effect points the same way in most of them, and the risk of eating fish twice a week is zero. Plant sources like flaxseed, chia seeds and walnuts provide a different form of omega-3 that converts less well, but still counts. This is a change for the whole month, not just the period week.',
      action:
        'Make or buy a meal with oily fish today, or put fish on the list for two evenings in the coming week.',
      phaseTags: [],
      sources: [NHS_EATWELL, ACOG_DYSMENORRHEA],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'The follicular phase: time for strength',
      insight:
        'When the bleeding stops and estrogen rises, most people get more energy and faster recovery. Estrogen has a protective effect on muscle and helps with rebuilding after training. Some smaller studies have found that strength training concentrated in the follicular phase produced slightly more muscle growth than the same amount of training in the luteal phase. The evidence is still thin, but the principle holds regardless: put the hard sessions where the body has the capacity for them. This is when heavy lifts, intervals, long runs and new personal bests make the most sense. It is also when training together is most fun, because you can both go all in.',
      action:
        'Ask if she fancies training or running together this week, and book a specific day and time.',
      phaseTags: ['follicular'],
      sources: [NHS_EXERCISE],
    },
    {
      id: dailyId(M, 10),
      month: M,
      day: 10,
      title: 'Protein for recovery',
      insight:
        'Muscles are built after training, not during, and that takes protein. The general recommendation for adults is around 0.8 grams per kilo of body weight a day, but with regular strength training, 1.2-1.6 grams per kilo is a reasonable target. For a woman of 65 kilos, that is roughly 80-100 grams of protein a day, spread across meals: eggs and yoghurt in the morning, beans, chicken, fish or tofu at lunch and dinner. Many women eat too little protein, especially at breakfast, and feel it as tiredness and hunger after training. It is not a "gym bro thing". Protein also keeps you full and helps keep blood sugar stable.',
      action:
        'Make sure there is protein in the first meal tomorrow: eggs, skyr, cottage cheese or beans. Get it ready tonight.',
      phaseTags: ['follicular'],
      sources: [NHS_EATWELL],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'Cook together',
      insight:
        'The follicular phase is the best time to build habits, because there is energy for it. Cooking is one of the few household tasks that can be enjoyable rather than a demand when you do it together. It is not about making anything fancy, but about being in the kitchen at the same time: one chops, one stirs, music in the background. It creates conversation without it being "a conversation", and it creates shared ownership of what gets eaten. The partner who never cooks ends up commenting on the food. The one who cooks understands why things are the way they are. That is the difference many women notice most.',
      action:
        'Cook dinner together tonight. You pick the dish and do the shopping, so she only has to show up in the kitchen.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: 'Shopping list: first half of the cycle',
      insight:
        'If you do the shopping, you decide a large part of what is possible to eat at home. In the first half of the cycle, from the period towards ovulation, these are the things worth having in the house: iron-rich foods (beef, lentils, chickpeas, beans, oats, spinach), vitamin C alongside (peppers, citrus, kiwi, broccoli), protein for recovery (eggs, skyr, chicken, fish, tofu) and oily fish a couple of times a week. Plus whatever she actually likes. A list made only of "healthy" does not get eaten. A list that accounts for what the body loses and rebuilds is a quiet form of care.',
      action:
        "Write this week's shopping list today, and make sure at least five items come from the list above. Show it to her and ask what is missing.",
      phaseTags: ['follicular'],
      sources: [NHS_EATWELL, NHS_IRON],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: 'Her food is not your project',
      insight:
        'There is a line between making the good choice easy and keeping watch. Comments like "do you really need more?", "haven\'t you had enough sugar today?" or "that\'s not very healthy" never help, however lovingly they are meant. They turn food into something that has to be defended, which is exactly the opposite of what the body needs, especially in the luteal phase, when appetite rises for biological reasons. Your influence lies in what is in the fridge, what you cook, and what you eat yourself. Not in what she puts in her mouth. She is an adult, and her body is hers. That rule has no exceptions.',
      action:
        'Notice today whether you are about to comment on something she eats. If so: say nothing. Comment instead on something you will do yourself.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'Ovulation: use the peak',
      insight:
        'Around ovulation estrogen peaks, and many experience the highest energy, best mood and fastest recovery of the cycle. This is the time for the hardest workout, the long hike, the race or the new activity you have talked about. Some feel a brief twinge in the lower belly and a little bloating, but otherwise the body is on side. One thing is worth knowing: estrogen affects ligament stiffness, and some studies point to more knee injuries in the days around ovulation. That is not a reason to hold back, but a reason to warm up properly. Otherwise: go for it together while the body is up for it.',
      action:
        'Plan something active and slightly ambitious within the next few days: a long hike, a hard session, a swim.',
      phaseTags: ['ovulation'],
      sources: [NHS_EXERCISE],
    },
    {
      id: dailyId(M, 15),
      month: M,
      day: 15,
      title: 'Alcohol across the cycle',
      insight:
        'Alcohol does not land the same way all month. Around ovulation there is often an urge to celebrate, and there is nothing wrong with a glass. But in the luteal phase, and especially in the PMS days, it costs more: alcohol disrupts sleep, which is already worse because of progesterone, and it worsens mood swings and anxiety the next day. Studies have found a link between alcohol and both the frequency and severity of PMS. Alcohol also drains the body of fluid and lowers blood sugar later in the night, which amplifies restlessness and hunger. No bans, just timing: the glass that is a joy on day 14 is often a bad deal on day 26.',
      action:
        'If you are having a drink tonight, make sure there is food and water alongside. If she is in the PMS days, suggest something alcohol-free yourself.',
      phaseTags: ['ovulation', 'luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'Cycle syncing: myth and sense',
      insight:
        'You may have seen "cycle syncing": plans that tell you exactly what to eat and how to train in each phase. The honest status is that there is very little research behind the detailed schedules. The body\'s energy needs rise only about 100-300 calories a day in the luteal phase, and no food "balances hormones". What holds up are the simple principles: iron and vitamin C during the period, hard sessions when energy is high, stable blood sugar and more recovery in the last week. That is ordinary good nutrition with better timing, not magic. Be sceptical of anything that sells supplements or requires a subscription. Be open to what she notices works for her.',
      action:
        'Ask her whether she has come across cycle syncing and what she thinks of it. Share the honest version from this card.',
      phaseTags: [],
      sources: [NHS_EATWELL, NHS_PMS],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'The luteal phase: keep blood sugar steady',
      insight:
        'After ovulation, progesterone makes the body slightly less sensitive to insulin, and metabolism rises a little. That means blood sugar swings more: fast carbohydrates give a higher spike and a deeper dip. The dip is felt as sudden hunger, shakiness, irritability and a craving for more of the same. It is a large part of why the PMS days feel so unstable. The countermeasure is boring and effective: regular meals every three to four hours, protein and fibre in each, and never too long without food. A late lunch on day 25 is a well-known recipe for an argument at three in the afternoon.',
      action:
        'Check when she last ate if the mood shifts this afternoon. Put something with protein out without commenting on it.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'Fibre makes fullness last',
      insight:
        'Fibre slows the uptake of sugar from the gut, so a meal with wholegrains, beans, vegetables and fruit gives a smoother blood sugar curve than the same calories from white bread and sweets. The recommendation is 30 grams of fibre a day, and most people get about half. Fibre also helps with the constipation progesterone often causes in the luteal phase, because it slows the gut down. Oats, rye bread, lentils, apples, pears, carrots, nuts and seeds are the easy sources. Together with plenty of water, it is one of the most underrated things against bloating. Swap one white product for a wholegrain one and you are on your way.',
      action:
        'Swap one thing in the house to wholegrain today: the bread, the rice, the pasta or the breakfast cereal. Without making a thing of it.',
      phaseTags: ['luteal'],
      sources: [NHS_EATWELL],
    },
    {
      id: dailyId(M, 19),
      month: M,
      day: 19,
      title: 'Magnesium and PMS: what the evidence says',
      insight:
        'Magnesium is often recommended for PMS, and it is worth knowing the honest status. Some smaller studies have found that magnesium reduced bloating, breast tenderness and mood symptoms, and that combining it with B6 worked slightly better. Other studies found no effect. Overall: limited evidence, but low risk at sensible doses, and a possible benefit. Magnesium from food is beyond doubt: wholegrains, nuts, seeds, beans, dark chocolate and leafy greens are all good sources. If she is considering a supplement, that is a conversation with the pharmacist or doctor, not an influencer, especially if she takes other medication or has kidney problems.',
      action:
        'Put out nuts, seeds or dark chocolate as a snack today. That is magnesium without calling it magnesium.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS, NHS_VITAMINS],
    },
    {
      id: dailyId(M, 20),
      month: M,
      day: 20,
      title: 'Calcium and PMS: the best of the weak',
      insight:
        'Of all supplements for PMS, calcium is the one with the most consistent evidence. A larger randomised trial found that 1200 mg of calcium daily over three cycles markedly reduced mood symptoms, water retention, pain and food cravings, and later studies have pointed the same way. The mechanism is not fully clear, but calcium levels in the blood shift with estrogen. Calcium from food is the safest place to start: milk, yoghurt, cheese, calcium-fortified plant milk, sardines, almonds and kale. The daily recommendation for adults is around 700-1000 mg. Vitamin D is needed to absorb calcium, and in a northern winter it is hard to get enough from the sun alone.',
      action:
        'Check the fridge: is there yoghurt, cheese, milk or fortified plant milk? If not, buy it today.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS, ACOG_PMS],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: 'Salt, bloating and fluid',
      insight:
        'Bloating in the luteal phase happens because progesterone and estrogen affect how the kidneys handle salt and fluid. The body holds on to more, and the belly, fingers and breasts can feel swollen. It is not fat, it is water, and it goes when the period starts. A lot of salt makes it worse: ready meals, crisps, salted nuts and takeaway often contain several times the salt you would use yourself. The countermeasure is not to drink less, quite the opposite; plenty of water helps the kidneys get rid of the excess. Potassium from potatoes, bananas and vegetables helps too. And clothes that do not squeeze the belly are not a detail that week.',
      action:
        'Cook from scratch tonight instead of a ready meal or takeaway, and serve plenty of water with it.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 22),
      month: M,
      day: 22,
      title: 'Caffeine in the late luteal phase',
      insight:
        'Caffeine has a half-life of around five hours, so a cup at 3 pm is still half active at 8 pm. In the luteal phase, when sleep is already lighter because of progesterone and a higher body temperature, that can be the difference between falling asleep and tossing and turning. Caffeine can also amplify restlessness, palpitations and breast tenderness in the PMS days, and it is one of the few things health authorities actually recommend cutting down on for PMS. That does not mean no coffee. It means earlier coffee and fewer cups in the last week. And it is easiest to do if you both do it.',
      action:
        'Make the coffee early today, and suggest something caffeine-free after lunch: herbal tea, decaf, or just water.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'Lower the intensity, raise the recovery',
      insight:
        'In the last week before the period, many have lower energy, worse sleep and longer recovery after hard training. Body temperature is higher, which makes heat and endurance training more demanding, and progesterone breaks down muscle a little more than estrogen builds it. It is not the time for new records, and not the time to push through when the body says no. But movement still helps mood and PMS symptoms, so the key is less intensity, not less movement. Walks, light strength work, swimming, yoga. Regular, moderate exercise noticeably reduces PMS symptoms, and it is the consistency, not the hardness, that counts.',
      action:
        'If you have hard training planned together this week, suggest turning it down and going for a walk instead. Make it your suggestion, not her defeat.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS, NHS_EXERCISE],
    },
    {
      id: dailyId(M, 24),
      month: M,
      day: 24,
      title: 'Sleep hygiene in the hard week',
      insight:
        'Poor sleep is the single factor that worsens PMS most, and the luteal phase makes sleep harder by itself: higher body temperature, more frequent waking, more restlessness. So sleep hygiene is not a luxury concept that week, it is first aid. The things that work are known: the same bedtime every day, a cool and dark bedroom, no screens for the last half hour, no caffeine after noon and no alcohol as a "sleep aid". And calm in the evening, which does not come by itself if there are still dishes, messages and plans at 10 pm. That is where you come in. You cannot sleep for her, but you can clear the evening for her.',
      action:
        'Take the whole evening routine today: dishes, kids, locks, lights. Say "just go to bed, I\'ve got the rest" half an hour earlier than usual.',
      phaseTags: ['luteal'],
      sources: [NHS_SLEEP, NHS_PMS],
    },
    {
      id: dailyId(M, 25),
      month: M,
      day: 25,
      title: 'Shopping list: second half of the cycle',
      insight:
        'In the week before the period, needs change, and the shopping list can reflect that. Worth having: wholegrains and fibre (oats, rye bread, brown rice, lentils), protein for every meal (eggs, skyr, chicken, fish, beans), calcium (yoghurt, cheese, milk), magnesium (nuts, seeds, dark chocolate), potassium against fluid retention (bananas, potatoes), oily fish, and good snacks for the hungry hours: fruit, nuts, cottage cheese, wholegrain crackers. Less of: ready meals, crisps, fizzy drinks, alcohol. And yes, the chocolate or crisps she actually wants. The purpose of the list is not to control, but to make it easy to eat regularly without having to think about it.',
      action:
        'Shop for the next three days from the list above, and leave a snack with protein visibly out on the kitchen counter.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS, NHS_EATWELL],
    },
    {
      id: dailyId(M, 26),
      month: M,
      day: 26,
      title: 'Body image: what you say sticks',
      insight:
        'The body changes through the cycle: bloated in the luteal phase, heavier during the period, lighter around ovulation. Weight can swing a couple of kilos in a week from fluid alone. Many women know that perfectly well and still find it hard not to measure themselves by it, because the body has been commented on their whole life. What you say lands on top of that. Even "you look healthy" or "have you lost weight?" says that the body is being assessed. The most helpful thing is to make the body a non-topic: talk about what it can do, how the day was, what she did well. And never comment on belly, weight or portions.',
      action:
        'Say something today about what she did or could do, not how she looked. And notice how easily the opposite comes.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 27),
      month: M,
      day: 27,
      title: 'When food becomes a problem: it deserves a doctor',
      insight:
        'Eating disorders are common, often hidden, and they do not only affect teenagers. Signs worth taking seriously: meals skipped or eaten in secret, rules that keep tightening, training that cannot be cancelled no matter what, strong distress around food she has not controlled herself, and a cycle that becomes irregular or disappears because the body lacks energy. You are not to diagnose, and you are not to monitor. But you may say that you are worried, and that it deserves a doctor. Without mentioning weight, without commenting on the food, and without turning it into a debate. Just: "I\'m worried about you, and I want to help."',
      action:
        'If anything on the list rings true: say the sentence today, calmly and without demands. If not: keep the card, and stay attentive.',
      phaseTags: [],
      sources: [NHS_EATING],
    },
    {
      id: dailyId(M, 28),
      month: M,
      day: 28,
      title: 'Supplements: what is worth knowing',
      insight:
        'The market for supplements against PMS and period problems is enormous, and most of it is not worth the money. Status for the most talked-about: calcium has the best evidence, magnesium and B6 have weak evidence with low risk, omega-3 seems to help with pain, and vitamin D matters in the winter months. Iron supplements should only be taken if a blood test shows a deficiency, because too much iron is harmful. St John\'s wort and other herbs can interact with other medication, including the pill. The ground rule is the same as for everything else this month: food first, supplements after talking to a doctor or pharmacist, and expensive "hormone balance" products are advertising, not medicine.',
      action:
        'If there are supplements in the cupboard, ask with curiosity what they are for and whether they work for her. No judgement, just interest.',
      phaseTags: [],
      sources: [NHS_VITAMINS, NHS_PMS],
    },
    {
      id: dailyId(M, 29),
      month: M,
      day: 29,
      title: 'Recovery is not laziness',
      insight:
        'Recovery is the part of training and daily life that most often gets skipped. Muscles are built when you rest, the immune system is restored when you sleep, and mood stabilises when there are breaks. Across a cycle the need for recovery is not constant: it is highest in the first days of the period and the last week before it, lowest around ovulation. A woman who rests on day 27 is not lazy. She is wise. The culture around us rewards pushing through, and many women have learned to ignore signals until the body shouts. As a partner you can be the one who makes pausing legitimate, by taking the pause together with her.',
      action:
        'Sit down with her tonight, no screens and no agenda, for 20 minutes. Call it recovery, and mean it.',
      phaseTags: [],
      sources: [NHS_SLEEP],
    },
    {
      id: dailyId(M, 30),
      month: M,
      day: 30,
      title: 'Month 8: what you have learned',
      insight:
        'You now know that the period costs iron, and that vitamin C and the timing of coffee make that iron usable. That heat works on cramps, cold on headaches, and gentle movement on both. That calcium and omega-3 have the best evidence, magnesium the weakest, and that cycle syncing is sensible principles wrapped in marketing. That blood sugar swings more in the luteal phase, and that regular meals with protein and fibre are the best PMS defence there is. That hard sessions belong in the first half, recovery in the second. And most importantly: your role is the fridge, the kitchen and the evening, not her plate. Comments about food and body never help; easy choices do.',
      action:
        "Tell her the three things from this month you are going to keep doing. Then take the month's quiz.",
      phaseTags: [],
    },
  ],
  weekly: [
    {
      id: weeklyId(M, 1),
      month: M,
      week: 1,
      title: 'Food and the cycle: what the evidence actually supports',
      body: [
        'There are thousands of pieces of advice about what women should eat in each phase of the cycle, and most of it is guesswork wrapped in pretty colours. This article separates what holds up from what does not, so you can spend your energy on what actually moves something.',
        'The best documented thing is iron. Every period costs iron, and iron deficiency is the most common nutritional deficiency among women of childbearing age. The symptoms are tiredness that sleep does not fix, breathlessness, headaches, poor concentration and a short fuse, and they often get blamed on everything else. Iron from meat, fish and offal is absorbed easily. Iron from lentils, beans, tofu, oats and leafy greens is absorbed less well, but vitamin C in the same meal makes a big difference: peppers, citrus, broccoli, kiwi. Coffee and tea with the meal reduce absorption, so move them an hour or so away. Iron supplements should only follow a blood test, because too much iron is harmful. If she has been tired for weeks, that is a doctor, not a theory.',
        'The second best documented thing is blood sugar. After ovulation, progesterone makes the body slightly less sensitive to insulin, and metabolism rises by roughly 100-300 calories a day. The result is that fast carbohydrates give higher spikes and deeper dips, and the dip is felt as sudden hunger, shakiness, irritability and cravings for more. The countermeasure is not a diet, it is regularity: meals every three to four hours, protein and fibre in each, and snacks that are easy to grab. Hunger amplifies everything in the PMS days, and a late lunch is a well-known recipe for an argument.',
        'Among supplements, calcium has the most consistent evidence. A larger randomised trial found that 1200 mg daily over three cycles markedly reduced mood symptoms, water retention, pain and cravings. Omega-3 from oily fish appears in several smaller studies to reduce period pain, because it inhibits the prostaglandins that cause cramps. Magnesium and B6 have weak evidence: some studies find an effect on bloating and mood, others find none. What they all have in common is that food is the safest place to start. Dairy, sardines and kale for calcium; salmon, mackerel and herring for omega-3; nuts, seeds, wholegrains and dark chocolate for magnesium. Supplements are a conversation with a pharmacist or doctor, not with an advert.',
        'Which brings us to "cycle syncing", the idea that you should eat specific foods in each phase to "balance your hormones". The honest status is that there is almost no research behind the detailed schedules. No food balances hormones. What the schedules get right are the simple principles above: iron and vitamin C during the period, stable blood sugar and more fibre in the luteal phase, less caffeine and alcohol in the last week. That is ordinary good nutrition with better timing. Be sceptical of anything that sells a product. Be open to what she notices herself.',
        'That brings us to the most important thing: your role. You cannot, and should not, control what she eats. Comments about portions, sugar or "is that healthy?" never help, and they turn food into something that has to be defended. Your influence is indirect and large: what gets bought, what gets cooked, what is in the fridge at 3 pm on day 25, and what you eat yourself. Make the good choice the easy choice, and leave the rest to her.',
        'This week the task is simple: get iron and vitamin C on the table during the period days, and move the coffee. It is a small thing that makes a real difference to a body that bleeds every month.',
      ],
      conversationQuestion:
        'Is there any food you notice helps you on particular days of the cycle, and anything you would like us to have in the house more often?',
      sources: [NHS_IRON, NHS_PMS, NHS_EATWELL],
    },
    {
      id: weeklyId(M, 2),
      month: M,
      week: 2,
      title: 'Exercise across the cycle: hard when she can, gentle when she needs',
      body: [
        'Exercise is one of the things with the best documented effect on both period pain and PMS. But how and when is not irrelevant. This article is about putting the intensity where the body can use it, and the recovery where the body needs it. And about how you can join in rather than stand on the sidelines.',
        'Start with what is certain. Regular, moderate exercise noticeably reduces PMS symptoms like irritability, low mood, bloating and fatigue, and it is one of the first recommendations health authorities make. Gentle movement during the period, a walk, easy cycling, yoga, eases cramps for many, because it increases blood flow in the pelvis and releases endorphins. That is not the same as training through the pain. Hard training on day 1 makes it worse for some. Gentle activity, ideally outdoors, is the rule.',
        'Then timing. In the follicular phase estrogen rises, and with it energy, recovery capacity and pain threshold. Estrogen has a protective effect on muscle, and some smaller studies have found that strength training concentrated in the follicular phase produced slightly more muscle growth than the same training placed in the luteal phase. The evidence is thin, and the differences between women are large, but the principle holds whatever the research ends up saying: put the hard sessions, the intervals, the long runs and the new records where the body has the capacity for them. Around ovulation, energy is at its highest for many. One detail is worth knowing: estrogen affects ligament stiffness, and there are signs of more knee injuries in the days around ovulation. That is not a reason to hold back, but a reason to warm up properly.',
        'In the luteal phase it shifts. Progesterone raises body temperature, which makes heat and long endurance sessions more demanding, sleep becomes lighter, and recovery takes longer. Progesterone breaks down muscle a little more than estrogen builds it. The last week before the period is not the time to chase records or push through when the body says no. But it is not the time to stop either, because movement is among the things that help most with PMS. The key is lower intensity, not less movement: walks, light strength work, swimming, yoga, easy cycling. Consistency counts more than hardness.',
        'Recovery is the part that most often gets skipped, and it is not the same all month. The need is highest in the first days of the period and the last week before it, lowest around ovulation. Recovery is sleep, enough food, protein to rebuild after training, and breaks. A woman who rests on day 27 is not lazy. She is listening to something many have learned to ignore. The culture rewards pushing through, and that goes not least for women, who have often been told that a period must never be an excuse for anything. It can perfectly well be a reason to turn it down.',
        'What can you do? Train together when energy is high: it is more fun, and it makes the hard sessions something shared. Suggest turning it down yourself in the last week, so it becomes your suggestion and not her defeat. Walk with her in the period days, and take a no without persuading. Make sure there is protein after training and enough food in general. And take the pause together with her when it is time to pause. Exercise is not something you need to motivate her into. It is something you can do together at the pace the cycle allows.',
        'Finally, a boundary. Training that cannot be cancelled regardless of pain, fever or exhaustion, and a cycle that becomes irregular or disappears while the training load rises, is not discipline. It can be a sign that the body is getting too little energy, and that deserves a doctor. You are not to diagnose. You may say that you are worried.',
      ],
      conversationQuestion:
        'When in your cycle do you most feel like training hard, and when would you wish someone said "let\'s just go for a walk instead"?',
      sources: [NHS_PMS, NHS_PAIN, NHS_EXERCISE],
    },
    {
      id: weeklyId(M, 3),
      month: M,
      week: 3,
      title: 'Sleep, caffeine, alcohol and heat: recovery in practice',
      body: [
        'If there is one thing that worsens PMS more than anything else, it is poor sleep. And the luteal phase makes sleep worse by itself. This article is about what disrupts recovery in the last week, what helps, and where you can concretely make a difference without saying a word about it.',
        'Start with why sleep gets harder. Progesterone raises body temperature by 0.3-0.5 degrees throughout the luteal phase, and a warm body falls asleep less easily and wakes more often. In the last week both progesterone and estrogen fall, and with them serotonin, which is also the building block for melatonin, the sleep hormone. The result is lighter sleep, more waking and more restlessness. It is not imagination, and it is not something she can decide her way out of. It is physiology with a calendar.',
        "Caffeine fits badly into that picture. The half-life is around five hours, so a cup at 3 pm is still half active at bedtime. Caffeine also amplifies restlessness, palpitations and breast tenderness in the PMS days, and it is one of the few dietary changes health authorities directly recommend for PMS. That does not mean no coffee. It means coffee early and fewer cups in the last week, and it is far easier if you both do it. Remember too that coffee and tea with a meal reduce iron absorption; an hour's gap is enough.",
        'Alcohol is the other big sleep disruptor. A glass makes it easier to fall asleep, but the sleep becomes shallow, and you wake earlier. In the luteal phase, when sleep is already fragile, it costs more than the rest of the month. Alcohol also drains the body of fluid and lowers blood sugar later in the night, which amplifies restlessness and hunger, and studies have found a link between alcohol and both the frequency and severity of PMS. No bans. Just timing: the glass that is a joy around ovulation is often a bad deal on day 26.',
        'Now to what helps. Sleep hygiene sounds like a luxury concept, but in the luteal phase it is first aid: the same bedtime every day, a cool and dark bedroom, a lighter duvet, no screens for the last half hour, and calm in the evening. Heat has its own place: a heating pad on the lower belly eases cramps as well as over-the-counter painkillers in studies, and a warm bath in the evening helps both pain and falling asleep, because the body cools down afterwards. Cold is good for other things: a cold cloth on the neck for period headaches, a cool pack on tender breasts. Enough fluid through the day prevents headaches and worsened cramps.',
        'Here is your role. You cannot sleep for her, but you can clear the evening. Calm in the evening does not come by itself if there are still dishes, messages, children and plans at 10 pm. Take the evening routine in the last week: dishes, locks, lights, the practical things. Make the bedroom cool. Make the coffee early, and suggest something without caffeine and without alcohol yourself, so she does not have to be the one who says no. Fill the hot water bottle before she asks. It is invisible work, and it is some of the most concrete you can do to make the PMS days easier.',
        'One last thing: if the sleep problems are there all month, or if the tiredness is so heavy that it affects daily life regardless of sleep, it is not the luteal phase. It could be iron deficiency, thyroid, sleep apnoea or something else that can be treated. That deserves a doctor.',
      ],
      conversationQuestion:
        'What disturbs your sleep most in the week before your period, and what could I take over in the evening so you could go to bed when you are tired?',
      sources: [NHS_SLEEP, NHS_PMS, NHS_PAIN],
    },
    {
      id: weeklyId(M, 4),
      month: M,
      week: 4,
      title: 'Sharing the food without becoming the food police',
      body: [
        'Everything this month has been about, iron, blood sugar, fibre, calcium, sleep, only works if it gets done. And it does not get done because one person tells the other what she should eat. It gets done because it is easy, because it is shared, and because nobody has to defend themselves. This article is about how you become part of the food without becoming its police.',
        'Start with the practical. Whoever does the shopping decides a large part of what is possible to eat. It is a quiet power, and it can be used well. In the first half of the cycle: iron-rich foods, vitamin C alongside, protein for recovery, oily fish. In the second half: wholegrains and fibre, protein at every meal, calcium, nuts and seeds, bananas and potatoes against fluid retention, and snacks that are easy to grab: fruit, cottage cheese, wholegrain crackers. Less ready-made food and crisps, because the salt worsens bloating. And always something she actually likes, including the chocolate. A list made only of "healthy" does not get eaten.',
        'Cooking is the other part. The partner who never cooks ends up commenting on the food. The one who cooks understands why things are the way they are. Cooking together is one of the few household tasks that can be enjoyable rather than a demand: one chops, one stirs, music in the background. It creates conversation without it being "a conversation". And it creates shared ownership. In the luteal phase, when energy is low, you are the one who cooks and has it ready on time, because a late dinner on day 25 is a well-known recipe for an argument.',
        'Now the line. There is a world of difference between making the good choice easy and keeping watch. "Do you really need more?", "haven\'t you had enough sugar today?", "is that healthy?" never help, however lovingly they are meant. They turn food into something that has to be defended, and that is the opposite of what the body needs, especially in the luteal phase, when appetite rises for purely biological reasons. Your influence is what is in the fridge, what you cook, and what you eat yourself. Not what she puts in her mouth. She is an adult, and her body is hers.',
        'The same goes for the body. Weight swings a couple of kilos across the cycle from fluid alone, the belly is bloated in the luteal phase, and clothes fit differently. Many women know that perfectly well and still find it hard not to measure themselves by it, because the body has been commented on their whole life. Even "you look healthy" and "have you lost weight?" say that the body is being assessed. The most helpful thing is to make the body a non-topic and talk about what she did, what she could do, how the day was. And never comment on belly, weight or portions.',
        'Then something important to know. Eating disorders are common, often hidden, and they do not only affect teenagers. Signs worth taking seriously: meals skipped or eaten in secret, rules that keep tightening, training that cannot be cancelled no matter what, strong distress around food she has not controlled herself, and a cycle that becomes irregular or disappears because the body lacks energy. You are not to diagnose, and you are not to monitor. But you may say, calmly and without mentioning weight: "I\'m worried about you, and I want to help." And that it deserves a doctor.',
        "This week's task is the simplest of the month: shop for the phase, cook the food, and say nothing about what she eats. That is not passive. It is taking responsibility for what you actually influence, and leaving the rest to her.",
      ],
      conversationQuestion:
        'Have I ever said something about your food or your body that stuck with you? And what would you have wanted me to do instead?',
      sources: [NHS_EATWELL, NHS_EATING, NHS_PMS],
    },
  ],
  wrap: {
    id: wrapId(M),
    month: M,
    title: 'Month 8: Food, exercise and recovery',
    summary: [
      'This month was about the three levers that are easiest to pull in everyday life: food, movement and sleep. You have learned that the period costs iron, that vitamin C makes plant iron usable, and that coffee and tea with the meal reduce absorption. That blood sugar swings more in the luteal phase, and that regular meals with protein and fibre are the best defence against the instability of the PMS days. That calcium and omega-3 have the best evidence among supplements, magnesium the weakest, and that cycle syncing is sensible principles wrapped in marketing.',
      'You have also learned that hard training sessions belong in the follicular phase and around ovulation, that the last week calls for lower intensity and more recovery, and that gentle movement and heat are among the best documented remedies for cramps. That caffeine and alcohol cost most in the luteal phase, and that sleep hygiene that week is first aid, not luxury. And that your role is the fridge, the kitchen and the evening, never her plate or her body.',
      'Next month is about communication and support: language, timing, asking instead of guessing, and the conflict patterns that repeat phase by phase.',
    ],
    keepDoing: [
      'Put iron and vitamin C on the table during the period days, and move the coffee an hour away from the meal.',
      'Keep protein and fibre snacks visibly out in the luteal phase, and say nothing when they get eaten.',
      'Train hard together in the first half, and suggest turning it down yourself in the last week.',
      'Take the evening routine in the week before the period, so she can go to bed when she is tired.',
      'Never comment on her food, portions or body. Comment on what she does and can do.',
    ],
    quiz: [
      {
        question:
          'She is on day 2 and has been unusually tired for several weeks, even after good nights. What helps most?',
        options: [
          'Buy iron supplements and ask her to take them every day',
          'Cook iron-rich food with vitamin C alongside, and suggest a blood test at the doctor if the tiredness continues',
          'Say it is normal to be tired during the period',
          'Suggest an extra cup of coffee with the meal',
        ],
        correctIndex: 1,
        explanation:
          'Weeks of tiredness can be iron deficiency, but supplements should only follow a blood test, because too much iron is harmful. Food first, doctor when in doubt.',
      },
      {
        question:
          'It is day 26, 3 pm, and she snaps at you. She has not eaten since 11. What works best?',
        options: [
          'Ask whether she is premenstrual',
          'Ask whether she should not eat something healthy',
          'Put something with protein and fibre out without commenting on it',
          'Withdraw and leave her alone',
        ],
        correctIndex: 2,
        explanation:
          'Blood sugar swings more in the luteal phase, and hunger amplifies irritability. Food without comment often solves the problem; a comment makes it bigger.',
      },
      {
        question:
          'She asks whether magnesium works for PMS. What is the most honest and helpful answer?',
        options: [
          'Say it definitely works, and buy it for her',
          'Say the evidence is limited but the risk is low, suggest nuts, seeds and wholegrains first, and supplements after a chat with the pharmacist',
          'Say it is a waste of money and she should drop the idea',
        ],
        correctIndex: 1,
        explanation:
          'Magnesium has weak evidence and low risk. Honesty about the evidence, food first and a professional for supplements is the stance that holds for every supplement.',
      },
      {
        question:
          'You have planned a hard training session together on day 27, and she is clearly worn out. What is most helpful?',
        options: [
          'Push on, because exercise helps with PMS',
          'Suggest a walk or a light session instead, yourself',
          'Cancel everything and tell her to rest',
          'Train alone without saying anything',
        ],
        correctIndex: 1,
        explanation:
          'In the late luteal phase the key is lower intensity, not less movement. Making it your suggestion turns it into a shared choice rather than her defeat.',
      },
      {
        question: 'On day 24 she says: "I feel so fat today." What helps most?',
        options: [
          '"You look fine."',
          '"It\'s probably just water, it will pass."',
          'Acknowledge that it is a hard day, do not comment on the body, and offer something concrete like a warm bath or a walk',
          'Suggest you have salad tonight',
        ],
        correctIndex: 2,
        explanation:
          'Any comment about the body, even a positive one, confirms that it is being assessed. Acknowledgement and something concrete help; explanations and food suggestions make it worse.',
      },
      {
        question:
          'You have noticed she skips meals, trains no matter what, and her period has not come for several months. What is the right response?',
        options: [
          'Keep an eye on what she eats and point it out',
          'Say calmly that you are worried about her, that it deserves a doctor, and that you want to help, without mentioning weight or food',
          'Wait and see whether it passes by itself',
          'Cook more food and insist she finishes her plate',
        ],
        correctIndex: 1,
        explanation:
          'The signs can point to an eating disorder or too little energy for the body. You are not to monitor or diagnose, but to voice your worry and point to the doctor.',
      },
    ],
  },
};
