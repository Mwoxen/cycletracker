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

const M = 9;

export const month09: MonthContent = {
  month: M,
  theme: 'Food, exercise and recovery',
  focus:
    'Make the good choice the easy choice: you run the fridge, the kitchen and the evening, not her plate.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'Food shifts things. It does not cure.',
      insight:
        'Here is what this month is about: food, exercise and recovery. And it starts with an honest frame. No diet removes PMS, and no training plan removes cramps, not even the one you found on YouTube at 11 pm. But food, movement and sleep are the three dials that are easiest to turn in everyday life, and they shift things you can measure: iron levels, blood sugar, sleep quality and pain. The good thing is that they are shared. You eat the same food, sleep in the same bed and can walk the same route. Your role is not to become her coach. Nobody asked for a coach, and nobody asked for a macros chart on the fridge. Your role is to make the good choice the easy choice for both of you, without anyone having to explain themselves.',
      action:
        'Ask her today: "Is there anything about food or sleep you would like us to do differently this month?" Then listen, the way you leave a sauce alone to thicken, without poking at it. Not even the thing about the fish.',
      phaseTags: [],
      sources: [NHS_EATWELL],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: 'Iron: the bill for the bleeding',
      insight:
        'Every period costs iron, and women of childbearing age are the group most often short of it. Think of it as a bill that arrives every month, whether or not anyone asked if it suits. Iron carries oxygen around the blood, and a low store shows up as tiredness that sleep does not fix, breathlessness on stairs, cold hands, headaches and a short fuse. If she has heavy periods, the risk is markedly higher. Iron comes in two forms: haem iron from meat, fish and offal, which is absorbed easily, and non-haem iron from lentils, beans, tofu, oats and leafy greens, which is absorbed less well. Both count, and the period week is when it makes most sense to think about it. You do not need to explain the difference. You need to be able to cook lentils. Weeks of tiredness deserve a blood test, not a theory from you.',
      action:
        'Put iron on the dinner table today without saying the word iron: meat, lentils, beans or chickpeas. Just cook it. No lecture with dessert, and no pointing at the pot saying "this one is for you".',
      phaseTags: ['menstrual'],
      sources: [NHS_IRON],
    },
    {
      id: dailyId(M, 3),
      month: M,
      day: 3,
      title: 'Vitamin C: the key to plant iron',
      insight:
        'Iron from plants is absorbed several times less well than iron from meat, but it can be helped along. Vitamin C in the same meal makes non-haem iron far easier to absorb, and it is one of the best documented combinations in nutrition. It needs no supplement and no app. Peppers, broccoli, citrus, kiwi, strawberries and tomatoes are enough, as long as they are on the plate at the same time. A lentil soup with lemon. A bean salad with peppers. Porridge with berries. If she eats little or no meat, the combination is not a detail but the foundation, like a good stock under a sauce. And you can do it in the kitchen without saying a word about diet. That is really the whole point: you squeeze a lemon, you do not give a speech.',
      action:
        'At dinner: put something with vitamin C next to whatever has the iron. Lemon wedges, raw pepper, or an orange for dessert. No, cola does not count, however many slices of lemon are floating in it.',
      phaseTags: ['menstrual'],
      sources: [NHS_IRON, NHS_VITAMINS],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'The coffee can wait an hour',
      insight:
        'Here is a thing most people never hear. Coffee and tea contain polyphenols and tannins that bind iron in the gut and can halve absorption from a meal. This applies especially to plant iron. The effect is biggest when the drink comes with the food or right after, and small if an hour or so passes. Nobody has to give up the morning coffee. It just needs to move a little away from the iron-rich meal, much as you would not pour coffee into the soup. You will survive it, even if it does not feel that way at seven in the morning. Large amounts of milk and calcium with the meal also reduce absorption a little. It is one of the few dietary rules actually worth knowing: it is free, and it makes a real difference to a body that bleeds every month.',
      action:
        "Serve water or a glass of juice with dinner, and make the coffee or tea an hour later. You are allowed to stand and gaze longingly at the machine in the meantime, like a dog outside a butcher's.",
      phaseTags: ['menstrual', 'luteal'],
      sources: [NHS_IRON],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'Heat or cold? Both, in different places',
      insight:
        'Heat is the best documented home treatment for period cramps. A heating pad at around 40 degrees on the lower belly for a couple of hours has worked as well as ibuprofen in studies, and the two together beat either alone. Heat relaxes the uterine muscle, like butter in a warm pan, and increases blood flow. Cold does nothing for cramps, so leave the bag of frozen peas in the freezer. But cold has its place: a cold cloth on the neck for period headaches, a cool pack on tender breasts in the days before. Rule of thumb: heat for cramps and lower back, cold for headache and swelling. A warm bath in the evening covers both, because it also helps sleep. None of it requires a diagnosis from you.',
      action:
        'Fill the hot water bottle or warm the pad before she asks, and put it where she is: the sofa or the bed. Before she asks. That is the whole art, and it is no harder than switching the oven on before the guests arrive.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN, ACOG_DYSMENORRHEA],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: 'A walk, not a boot camp',
      insight:
        'It sounds wrong when you are in pain, but gentle movement eases period pain for many. A walk, easy cycling, yoga or stretching increases blood flow in the pelvis and releases the body\'s own painkillers, endorphins. Studies suggest that women who move regularly have milder cramps, and that one gentle session can take the edge off the pain right now. That is not the same as training through it. Hard training on day 1 makes it worse for some. The point is gentle activity, ideally outdoors and ideally together. Your "light jog" is only light for you. The pace is hers, and it is allowed to look like a Sunday stroll where you stop to look at dogs. It is easier to go for a walk when someone walks with you and keeps quiet about heart rate zones.',
      action:
        'Suggest a short 15-20 minute walk today, at her pace. Take a no without trying to persuade. A no is a no, not an opening bid. Take the bins out yourself if you cannot help it.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN, NHS_EXERCISE],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'Water: the most boring advice that works',
      insight:
        'Too little fluid amplifies two things that are already in play during the period and the days before: headache and fatigue. The body loses fluid with the blood, and many drink less when they feel nauseous or are lying down. Mild dehydration can also make cramps worse, because muscles become more sensitive. The recommendation is six to eight glasses of fluid a day, and everything counts: water, tea, milk, soup. Thirst is a late signal, like the smell of burning when the pan has already caught, so a bottle within reach helps more than good advice. And you have plenty of that. If the headache keeps returning around the period, it is often hormonal migraine, which deserves a doctor, not just more water and a man asking "have you remembered to drink?".',
      action:
        'Put a full glass or bottle of water where she is sitting or lying, and refill it when it is empty. Without saying "drink up". You are the waiter here, not the lifeguard.',
      phaseTags: ['menstrual', 'luteal'],
      sources: [NHS_EATWELL],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: 'Fish twice a week. Yes, you too.',
      insight:
        'Oily fish like salmon, mackerel, herring and sardines contain omega-3 fatty acids, which dampen the production of the prostaglandins that cause cramps. Several smaller studies have found that women who get omega-3 daily over a few months report milder period pain and use less painkiller. The evidence is not rock solid, because the studies are small, but the effect points the same way in most of them, and the risk of eating fish twice a week is zero. Apart from the smell in the kitchen, and that is honestly your problem. Plant sources like flaxseed, chia seeds and walnuts provide a different form of omega-3 that converts less well, but still counts. This is a change for the whole month, not just the period week. Fish cakes count. Tinned mackerel in tomato sauce counts too, it is just less impressive when you have guests.',
      action:
        'Make or buy a meal with oily fish today, or put fish on the list for two evenings in the coming week. Fish fingers are a grey area, and you know it.',
      phaseTags: [],
      sources: [NHS_EATWELL, ACOG_DYSMENORRHEA],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'The follicular phase: time to lift heavy',
      insight:
        'When the bleeding stops and estrogen rises, most people get more energy and faster recovery. Estrogen has a protective effect on muscle and helps with rebuilding after training. Some smaller studies have found that strength training concentrated in the follicular phase produced slightly more muscle growth than the same amount of training in the luteal phase. The evidence is still thin, but the principle holds: put the hard sessions where the body has the capacity for them. The burner is lit now, and this is when heavy lifts, intervals, long runs and new personal bests make the most sense. It is also when training together is most fun, because you can both go all in. Be prepared for the possibility that she lifts more than you. That is not a problem. That is data.',
      action:
        'Ask if she fancies training or running together this week, and book a specific day and time. "Some day" is not a time. It is what people say about the pizza oven.',
      phaseTags: ['follicular'],
      sources: [NHS_EXERCISE],
    },
    {
      id: dailyId(M, 10),
      month: M,
      day: 10,
      title: 'Protein is not just for guys with shakers',
      insight:
        'Muscles are built after training, not during, and that takes protein. The general recommendation for adults is around 0.8 grams per kilo of body weight a day, but with regular strength training, 1.2-1.6 grams per kilo is a reasonable target. For a woman of 65 kilos, that is roughly 80-100 grams of protein a day, spread across meals: eggs and yoghurt in the morning, beans, chicken, fish or tofu at lunch and dinner. Many women eat too little protein, especially at breakfast, and feel it as tiredness and hunger after training. It is not a "gym bro thing", and it does not come as powder from the big tub in your cupboard. Protein also keeps you full and keeps blood sugar steady, like a good base in a stew. Eggs are protein. Skyr is protein. It is not harder than that.',
      action:
        'Make sure there is protein in the first meal tomorrow: eggs, skyr, cottage cheese or beans. Get it ready tonight, so morning-you does not have to think. Morning-you has never been good at it.',
      phaseTags: ['follicular'],
      sources: [NHS_EATWELL],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'Cook together. You chop.',
      insight:
        'Listen: the follicular phase is the best time to build habits, because there is energy for it. Cooking is one of the few household tasks that can be enjoyable rather than a demand when you do it together. It is not about anything fancy, so put down the cookbook with the foams in it. It is about being in the kitchen at the same time: one chops, one stirs, music in the background. It creates conversation without it being "a conversation", and it creates shared ownership of what gets eaten. The partner who never cooks ends up commenting on the food. The one who cooks understands why things are the way they are. That is the difference many women notice most. Be the one who understands. It is cheaper than being the one who comments.',
      action:
        'Cook dinner together tonight. You pick the dish and do the shopping, so she only has to show up in the kitchen. Everything is bought before she gets home, onions included, because someone always forgets the onions. And you chop.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: 'The shopping list, first half',
      insight:
        'If you do the shopping, you decide a large part of what can end up on the plate at home. That is more power than you usually use in the supermarket. In the first half of the cycle, from the period towards ovulation, these are the things worth having in the house: iron-rich foods (beef, lentils, chickpeas, beans, oats, spinach), vitamin C alongside (peppers, citrus, kiwi, broccoli), protein for recovery (eggs, skyr, chicken, fish, tofu) and oily fish a couple of times a week. Plus whatever she actually likes. A list made only of "healthy" does not get eaten. It gets found in a jacket pocket three weeks later, next to the receipt for the pizza oven. A list that accounts for what the body loses and rebuilds is a quiet form of care.',
      action:
        "Write this week's shopping list today, and make sure at least five items come from the list above. Show it to her and ask what is missing. She knows. She just has not been asked.",
      phaseTags: ['follicular'],
      sources: [NHS_EATWELL, NHS_IRON],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: 'Her plate is not your project',
      insight:
        'There is a line between making the good choice easy and keeping watch. Comments like "do you really need more?", "haven\'t you had enough sugar today?" or "that\'s not very healthy" never help, however lovingly they are meant. They turn food into something that has to be defended, which is the exact opposite of what the body needs, especially in the luteal phase, when appetite rises for biological reasons. Your influence lies in what is in the fridge, what you cook, and what you eat yourself. You stand at the stove, not at the till. What she puts in her mouth is not your department. She is an adult, and her body is hers. That rule has no exceptions. Not even the exception you just thought of. Especially not that one.',
      action:
        'Notice today whether you are about to comment on something she eats. If so: say nothing, and chew on something yourself. Comment instead on something you will do yourself. Or on your own crisps.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'Ovulation: go for it, but warm up',
      insight:
        'Around ovulation estrogen peaks, and many people feel the highest energy, best mood and fastest recovery of the cycle. This is when the pan is hot: the hardest workout, the long hike, the race or the new activity you have been talking about since January. Some feel a brief twinge in the lower belly and a little bloating, but otherwise the body is on side. One thing is worth knowing: estrogen affects ligament stiffness, and some studies point to more knee injuries in the days around ovulation. That is not a reason to hold back, but a reason to warm up properly. Yes, you too. Two arm swings next to the car is not a warm-up, it is waving at the neighbour. Otherwise: go for it together while the body is up for it.',
      action:
        'Plan something active and slightly ambitious within the next few days: a long hike, a hard session, a swim. Not "sometime in the summer". This week. Put it in the calendar before you have time to regret it.',
      phaseTags: ['ovulation'],
      sources: [NHS_EXERCISE],
    },
    {
      id: dailyId(M, 15),
      month: M,
      day: 15,
      title: 'A glass on day 14, a bad deal on day 26',
      insight:
        'Alcohol does not land the same way all month. Around ovulation there is often an urge to celebrate, and there is nothing wrong with a glass. But in the luteal phase, and especially in the PMS days, it costs more: alcohol disrupts sleep, which is already worse because of progesterone, and it worsens mood swings and anxiety the next day. Studies have found a link between alcohol and both the frequency and severity of PMS. Alcohol also drains the body of fluid and lowers blood sugar later in the night, which amplifies restlessness and hunger. No bans, just timing: the glass that is a joy on day 14 is often a bad deal on day 26, much as a bottle of wine is great at a party and poor on a Tuesday. And "I\'ve opened a bottle, so now it has to be finished" is your logic, not her need.',
      action:
        'If you are having a drink tonight, make sure there is food and water alongside. If she is in the PMS days, suggest something alcohol-free yourself. You first, and without eyeing the bottle like an old friend.',
      phaseTags: ['ovulation', 'luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'Cycle syncing: pretty colours, thin research',
      insight:
        'You may have seen "cycle syncing": plans that tell you exactly what to eat and how to train in each phase, usually in pastel colours and with a discount code. The honest status is that there is very little research behind the detailed schedules. The body\'s energy needs rise only about 100-300 calories a day in the luteal phase, and no food "balances hormones". What holds up are the simple principles: iron and vitamin C during the period, hard sessions when energy is high, stable blood sugar and more recovery in the last week. That is ordinary good nutrition with better timing. It is the recipe, not an expensive spice blend with a backstory. Be sceptical of anything that sells supplements or requires a subscription. Be open to what she notices works for her. She has, after all, been running that body longer than any influencer.',
      action:
        'Ask her whether she has come across cycle syncing and what she thinks of it. Share the honest version from this card. Without sounding like you discovered it yourself, and without saying "I read".',
      phaseTags: [],
      sources: [NHS_EATWELL, NHS_PMS],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'Day 25, 3 pm: do not ask, serve',
      insight:
        'Listen: after ovulation, progesterone makes the body slightly less sensitive to insulin, and metabolism rises a little. That means blood sugar swings more: fast carbohydrates give a higher spike and a deeper dip. The dip is felt as sudden hunger, shakiness, irritability and a craving for more of the same. It is a large part of why the PMS days feel so unstable. The countermeasure is boring and effective: regular meals every three to four hours, protein and fibre in each, and never too long without food. A late lunch on day 25 is a well-known recipe for an argument at 3 pm. You do not win that argument with arguments. You win it with a plate you put out at 2 pm.',
      action:
        'Check when she last ate if the mood shifts this afternoon. Put something with protein out without commenting on it. Not "you\'re probably just hungry". Just the food. Let the food do the talking, not you.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'Fibre: the overlooked weapon against bloating',
      insight:
        'Fibre slows the uptake of sugar from the gut, so a meal with wholegrains, beans, vegetables and fruit gives a smoother blood sugar curve than the same calories from white bread and sweets. The recommendation is 30 grams of fibre a day, and most people get about half. You too, unless you eat oats in secret. Fibre also helps with the constipation progesterone often causes in the luteal phase, because it slows the gut down. Oats, rye bread, lentils, apples, pears, carrots, nuts and seeds are the easy sources. Together with plenty of water, it is one of the most underrated things against bloating. Swap one white product for a wholegrain one and you are on your way, the way you quietly change the butter and nobody notices. Nobody needs to know it was a project.',
      action:
        'Swap one thing in the house to wholegrain today: the bread, the rice, the pasta or the breakfast cereal. Without making a thing of it. No press release.',
      phaseTags: ['luteal'],
      sources: [NHS_EATWELL],
    },
    {
      id: dailyId(M, 19),
      month: M,
      day: 19,
      title: 'Magnesium: maybe, low risk, eat nuts',
      insight:
        'Magnesium is often recommended for PMS, typically by someone with a webshop, so here is the honest status. Some smaller studies have found that magnesium reduced bloating, breast tenderness and mood symptoms, and that combining it with B6 worked slightly better. Other studies found no effect. Overall: limited evidence, but low risk at sensible doses, and a possible benefit. Magnesium from food is beyond doubt: wholegrains, nuts, seeds, beans, dark chocolate and leafy greens are all good sources. If she is considering a supplement, that is a conversation with the pharmacist or doctor, not with an influencer, and not with you either, even though you just read this card. Especially if she takes other medication or has kidney problems.',
      action:
        'Put out nuts, seeds or dark chocolate as a snack today. That is magnesium without calling it magnesium. Do not call it magnesium.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS, NHS_VITAMINS],
    },
    {
      id: dailyId(M, 20),
      month: M,
      day: 20,
      title: 'Calcium: the best of the weak cards',
      insight:
        'Of all supplements for PMS, calcium is the one with the most consistent evidence. A larger randomised trial found that 1200 mg of calcium daily over three cycles markedly reduced mood symptoms, water retention, pain and food cravings, and later studies have pointed the same way. The mechanism is not fully clear, but calcium levels in the blood shift with estrogen. Food is the safest place to start: milk, yoghurt, cheese, calcium-fortified plant milk, sardines, almonds and kale. The daily recommendation for adults is around 700-1000 mg. Vitamin D is needed to absorb calcium, and in a northern winter it is hard to get enough from the sun alone. The sun sets at half past three. You have seen it. Yoghurt in the fridge is an easier plan than sunshine in November, and it does not even need a saucepan.',
      action:
        'Check the fridge: is there yoghurt, cheese, milk or fortified plant milk? If not, buy it today. The half-empty carton from last week does not count, and the one you are afraid to sniff counts even less.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS, ACOG_PMS],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: 'Salt, fluid and your "quick fix"',
      insight:
        'Bloating in the luteal phase happens because progesterone and estrogen affect how the kidneys handle salt and fluid. The body holds on to more, and the belly, fingers and breasts can feel swollen. It is not fat, it is water, and it goes when the period starts. A lot of salt makes it worse: ready meals, crisps, salted nuts and takeaway often contain several times the salt you would use yourself. So your "quick fix" from the pizza place is a salt bomb with cheese on top. The countermeasure is not to drink less, quite the opposite; plenty of water helps the kidneys get rid of the excess. Potassium from potatoes, bananas and vegetables helps too. And clothes that do not squeeze the belly are not a detail that week. Nor are they something you comment on.',
      action:
        'Cook from scratch tonight instead of a ready meal or takeaway, and serve plenty of water with it. From scratch means you have touched a vegetable. A pizza base does not count.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 22),
      month: M,
      day: 22,
      title: 'Caffeine: the 3 pm cup is still there at 8 pm',
      insight:
        'Caffeine has a half-life of around five hours, so a cup at 3 pm is still half active at 8 pm. Do the maths yourself on the one you had at 5. In the luteal phase, when sleep is already lighter because of progesterone and a higher body temperature, that can be the difference between dropping off and lying there flipping like a pancake. Caffeine can also amplify restlessness, palpitations and breast tenderness in the PMS days, and it is one of the few things health authorities actually recommend cutting down on for PMS. That does not mean no coffee. It means earlier coffee and fewer cups in the last week. And it is easiest if you both do it. Yes, both. Your afternoon cup is not protected just because it is yours.',
      action:
        'Make the coffee early today, and suggest something caffeine-free after lunch: herbal tea, decaf, or just water. Drink it yourself, with a face that looks content. That is the hard part.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'Turn it down, not off',
      insight:
        'In the last week before the period, many people have lower energy, worse sleep and longer recovery after hard training. Body temperature is higher, which makes heat and endurance training more demanding, and progesterone breaks down muscle a little more than estrogen builds it. It is not the time for new records, and not the time to push through when the body says no. Nor is it the time for you to say "come on, it\'s all in your head". It is not. But movement still helps mood and PMS symptoms, so the key is less intensity, not less movement. Turn the heat down, do not switch the stove off. Walks, light strength work, swimming, yoga. Regular, moderate exercise noticeably reduces PMS symptoms, and it is the consistency, not the hardness, that counts. For you too, incidentally.',
      action:
        'If you have hard training planned together this week, suggest turning it down yourself and going for a walk instead. Make it your suggestion, not her defeat. "I can\'t face intervals today" is a perfectly legal sentence.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS, NHS_EXERCISE],
    },
    {
      id: dailyId(M, 24),
      month: M,
      day: 24,
      title: 'You cannot sleep for her. You can clear the evening.',
      insight:
        'Poor sleep is the single factor that worsens PMS most, and the luteal phase makes sleep harder by itself: higher body temperature, more frequent waking, more restlessness. So sleep hygiene is not a luxury that week, it is first aid. The things that work are known: the same bedtime every day, a cool and dark bedroom, no screens for the last half hour, no caffeine after noon and no alcohol as a "sleep aid". And calm in the evening, which does not come by itself if there are still dishes, messages and plans at 10 pm. That is where you come in. Not with a lecture on sleep hygiene, but with a washing-up brush. You cannot sleep for her, but you can clear the evening for her, the way you clear up after a big meal.',
      action:
        'Take the whole evening routine today: dishes, kids, locks, lights. Say "just go to bed, I\'ve got the rest" half an hour earlier than usual. Then actually do the rest, including the pot that is sitting there soaking.',
      phaseTags: ['luteal'],
      sources: [NHS_SLEEP, NHS_PMS],
    },
    {
      id: dailyId(M, 25),
      month: M,
      day: 25,
      title: 'The shopping list, second half',
      insight:
        'The week before the period is the second half of the match, and needs change. The shopping list can reflect that. Worth having: wholegrains and fibre (oats, rye bread, brown rice, lentils), protein for every meal (eggs, skyr, chicken, fish, beans), calcium (yoghurt, cheese, milk), magnesium (nuts, seeds, dark chocolate), potassium against fluid retention (bananas, potatoes), oily fish, and good snacks for the hungry hours: fruit, nuts, cottage cheese, wholegrain crackers. Less of: ready meals, crisps, fizzy drinks, alcohol. And yes, the chocolate or crisps she actually wants. You are not shopping for a diet plan, you are shopping for a person. The purpose of the list is not to control, but to make it easy to eat regularly without having to think about it. You did the thinking in the shop.',
      action:
        'Shop for the next three days from the list above, and leave a snack with protein visibly out on the kitchen counter. Visibly. Not at the back of the cupboard behind your protein powder.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS, NHS_EATWELL],
    },
    {
      id: dailyId(M, 26),
      month: M,
      day: 26,
      title: 'What you say about the body sticks',
      insight:
        'Here is something worth knowing: what you say about the body sticks, like the smell of fried onions in the curtains. The body changes through the cycle: bloated in the luteal phase, heavier during the period, lighter around ovulation. Weight can swing a couple of kilos in a week from fluid alone. Many women know that perfectly well and still find it hard not to measure themselves by it, because the body has been commented on their whole life. What you say lands on top of that. Even "you look healthy" or "have you lost weight?" says that the body is being assessed. You meant it as a compliment. It was received as a grade. The most helpful thing is to make the body a non-topic: talk about what it can do, how the day was, what she did well. And never comment on belly, weight or portions. If you are unsure whether a sentence is a body comment, it is.',
      action:
        'Say something today about what she did or could do, not how she looked. And notice how easily the opposite comes. It comes easily. That is the point.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 27),
      month: M,
      day: 27,
      title: 'When food becomes a problem: it deserves a doctor',
      insight:
        'This card is a quiet one. Eating disorders are common, often hidden, and they do not only affect teenagers. Signs worth taking seriously: meals skipped or eaten in secret, rules that keep tightening, training that cannot be cancelled no matter what, strong distress around food she has not controlled herself, and a cycle that becomes irregular or disappears because the body lacks energy. You are not to diagnose, and you are not to monitor. Twenty-seven cards have not made you a doctor. But you may say that you are worried, and that it deserves a doctor. Without mentioning weight, without commenting on the food, and without turning it into a debate. Just: "I\'m worried about you, and I want to help." That is the whole sentence. You do not need more.',
      action:
        'If anything on the list rings true: say the sentence today, calmly and without demands. If not: keep the card, and stay attentive.',
      phaseTags: [],
      sources: [NHS_EATING],
    },
    {
      id: dailyId(M, 28),
      month: M,
      day: 28,
      title: 'Supplements: mostly advertising with a lid on',
      insight:
        'The market for supplements against PMS and period problems is enormous, and most of it is not worth the money. That includes the one you were shown in an advert at 11 pm. Status for the most talked-about: calcium has the best evidence, magnesium and B6 have weak evidence with low risk, omega-3 seems to help with pain, and vitamin D matters in the winter months. Iron supplements should only be taken if a blood test shows a deficiency, because too much iron is harmful. St John\'s wort and other herbs can interact with other medication, including the pill. The ground rule is the same as for everything else this month: food first, supplements after talking to a doctor or pharmacist, and expensive "hormone balance" products are advertising, not medicine. It is like a pricey spice blend: lovely jar, same salt. Nice packaging is not a dosage.',
      action:
        'If there are supplements in the cupboard, ask with curiosity what they are for and whether they work for her. No judgement, just interest. And no googling mid-conversation.',
      phaseTags: [],
      sources: [NHS_VITAMINS, NHS_PMS],
    },
    {
      id: dailyId(M, 29),
      month: M,
      day: 29,
      title: 'Recovery is not laziness',
      insight:
        'Recovery is the part of training and daily life that most often gets skipped, like the resting time for a roast. Muscles are built when you rest, the immune system is restored when you sleep, and mood stabilises when there are breaks. Across a cycle the need for recovery is not constant: it is highest in the first days of the period and the last week before it, lowest around ovulation. A woman who rests on day 27 is not lazy. She is wise. The culture around us rewards pushing through, and many women have learned to ignore signals until the body shouts. As a partner you can make pausing legitimate by taking the pause together with her. That means: sitting down. Without a phone. Without saying "so, shall we..." after four minutes.',
      action:
        'Sit down with her tonight, no screens and no agenda, for 20 minutes. Call it recovery, and mean it. Twenty minutes is longer than you think.',
      phaseTags: [],
      sources: [NHS_SLEEP],
    },
    {
      id: dailyId(M, 30),
      month: M,
      day: 30,
      title: 'Month 9: it has sunk in now, hopefully',
      insight:
        'So the month is in the oven, and here is what you now know. The period costs iron, and vitamin C and the timing of coffee make that iron usable. Heat works on cramps, cold on headaches, and gentle movement on both. Calcium and omega-3 have the best evidence, magnesium the weakest, and cycle syncing is sensible principles wrapped in marketing. Blood sugar swings more in the luteal phase, and regular meals with protein and fibre are the best PMS defence there is. Hard sessions belong in the first half, recovery in the second. And most importantly: your role is the fridge, the kitchen and the evening, not her plate. Comments about food and body never help; easy choices do. You have not become a nutritionist. You have become someone who does the shopping properly. That is better.',
      action:
        "Tell her the three things from this month you are going to keep doing. Then take the month's quiz without looking back at the cards. Okay, a little.",
      phaseTags: [],
    },
  ],
  weekly: [
    {
      id: weeklyId(M, 1),
      month: M,
      week: 1,
      title: 'Food and the cycle: evidence, not pastel colours',
      body: [
        'There are thousands of pieces of advice about what women should eat in each phase of the cycle, and most of it is guesswork wrapped in pretty colours. You have probably seen a few yourself and thought "that sounds right". It does. That is the problem. Here we separate what holds up from what does not, so you can spend your energy on what actually moves something.',
        'The best documented thing is iron. Every period costs iron, and iron deficiency is the most common nutritional deficiency among women of childbearing age. The symptoms are tiredness that sleep does not fix, breathlessness, headaches, poor concentration and a short fuse, and they often get blamed on everything else, typically by someone who does not bleed every month. Iron from meat, fish and offal is absorbed easily. Iron from lentils, beans, tofu, oats and leafy greens is absorbed less well, but vitamin C in the same meal makes a big difference: peppers, citrus, broccoli, kiwi. Coffee and tea with the meal reduce absorption, so move them an hour or so away. You will survive, even while staring at the machine. Iron supplements should only follow a blood test, because too much iron is harmful. If she has been tired for weeks, that is a doctor, not a theory from the sofa.',
        "The second best documented thing is blood sugar. After ovulation, progesterone makes the body slightly less sensitive to insulin, and metabolism rises by roughly 100-300 calories a day. The result is that fast carbohydrates give higher spikes and deeper dips, and the dip is felt as sudden hunger, shakiness, irritability and cravings for more. The countermeasure is not a diet, it is regularity: meals every three to four hours, protein and fibre in each, and snacks that are easy to grab. Hunger amplifies everything in the PMS days, and a late lunch is a well-known recipe for an argument. That argument is not about what you think it is about. It is about 11 o'clock.",
        'Among supplements, calcium has the most consistent evidence. A larger randomised trial found that 1200 mg daily over three cycles markedly reduced mood symptoms, water retention, pain and cravings. Omega-3 from oily fish appears in several smaller studies to reduce period pain, because it inhibits the prostaglandins that cause cramps. Magnesium and B6 have weak evidence: some studies find an effect on bloating and mood, others find none. What they all have in common is that food is the safest place to start. Dairy, sardines and kale for calcium; salmon, mackerel and herring for omega-3; nuts, seeds, wholegrains and dark chocolate for magnesium. Supplements are a conversation with a pharmacist or doctor, not with an advert. And not with you, who have just read one article.',
        'Which brings us to "cycle syncing", the idea that you should eat specific foods in each phase to "balance your hormones". The honest status is that there is almost no research behind the detailed schedules. No food balances hormones. What the schedules get right are the simple principles above: iron and vitamin C during the period, stable blood sugar and more fibre in the luteal phase, less caffeine and alcohol in the last week. That is ordinary good nutrition with better timing, not a secret ingredient. Be sceptical of anything that sells a product. Be open to what she notices herself. She has been running that body for decades. You have had the app for nine months.',
        'That brings us to the most important thing: your role. You cannot, and should not, control what she eats. Comments about portions, sugar or "is that healthy?" never help, and they turn food into something that has to be defended. Your influence is indirect and large: what gets bought, what gets cooked, what is in the fridge at 3 pm on day 25, and what you eat yourself. That last one is worth reading again. You run the kitchen, not the plate. Make the good choice the easy choice, and leave the rest to her.',
        'This week the task is simple: get iron and vitamin C on the table during the period days, and move the coffee. It is a small thing that makes a real difference to a body that bleeds every month. And you can do it without saying the word "iron" a single time.',
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
        'Exercise is one of the things with the best documented effect on both period pain and PMS. But how and when is not irrelevant. This read is about putting the intensity where the body can use it, and the recovery where the body needs it. And about how you can join in rather than stand on the sidelines shouting split times.',
        'Start with what is certain. Regular, moderate exercise noticeably reduces PMS symptoms like irritability, low mood, bloating and fatigue, and it is one of the first recommendations health authorities make. Gentle movement during the period, a walk, easy cycling or yoga, eases cramps for many, because it increases blood flow in the pelvis and releases endorphins. That is not the same as training through the pain. Hard training on day 1 makes it worse for some. Gentle activity, ideally outdoors, is the rule. "Gentle" is a word to take seriously. Your light jog is not gentle. It is just light for you.',
        'Then timing. In the follicular phase estrogen rises, and with it energy, recovery capacity and pain threshold. Estrogen has a protective effect on muscle, and some smaller studies have found that strength training concentrated in the follicular phase produced slightly more muscle growth than the same training placed in the luteal phase. The evidence is thin, and the differences between women are large, but the principle holds whatever the research ends up saying: put the hard sessions, the intervals, the long runs and the new records where the body has the capacity for them. Around ovulation, energy is at its highest for many. One detail is worth knowing: estrogen affects ligament stiffness, and there are signs of more knee injuries in the days around ovulation. That is not a reason to hold back, but a reason to warm up properly. Properly. Not the two arm swings you call a warm-up.',
        'In the luteal phase it shifts. Progesterone raises body temperature, which makes heat and long endurance sessions more demanding, sleep becomes lighter, and recovery takes longer. Progesterone breaks down muscle a little more than estrogen builds it. The last week before the period is not the time to chase records or push through when the body says no. But it is not the time to stop either, because movement is among the things that help most with PMS. You turn the heat down, you do not switch the stove off: lower intensity, not less movement. Walks, light strength work, swimming, yoga, easy cycling. Consistency counts more than hardness. That applies to you too, incidentally, but that is a different app.',
        'Recovery is the part that most often gets skipped, and it is not the same all month. The need is highest in the first days of the period and the last week before it, lowest around ovulation. Recovery is sleep, enough food, protein to rebuild after training, and breaks. A woman who rests on day 27 is not lazy. She is listening to something many have learned to ignore. The culture rewards pushing through, and that goes not least for women, who have often been told that a period must never be an excuse for anything. It can perfectly well be a reason to turn it down. And you should not be the one checking the clock while she does.',
        'What can you do? Train together when energy is high: it is more fun, and it makes the hard sessions something shared. Be prepared to be overtaken. Suggest turning it down yourself in the last week, so it becomes your suggestion and not her defeat. Walk with her in the period days, and take a no without persuading. Make sure there is protein after training and enough food in general. And take the pause together with her when it is time to pause. Exercise is not something you need to motivate her into. She does not need a coach with a whistle. It is something you can do together at the pace the cycle allows.',
        'Finally, a boundary, and there are no jokes here. Training that cannot be cancelled regardless of pain, fever or exhaustion, and a cycle that becomes irregular or disappears while the training load rises, is not discipline. It can be a sign that the body is getting too little energy, and that deserves a doctor. You are not to diagnose. You may say that you are worried.',
      ],
      conversationQuestion:
        'When in your cycle do you most feel like training hard, and when would you wish I was the one who said "let\'s just go for a walk instead"?',
      sources: [NHS_PMS, NHS_PAIN, NHS_EXERCISE],
    },
    {
      id: weeklyId(M, 3),
      month: M,
      week: 3,
      title: 'Sleep, caffeine, alcohol and heat: recovery you can do something about',
      body: [
        'If there is one thing that worsens PMS more than anything else, it is poor sleep. And the luteal phase makes sleep worse by itself. This read is about what disrupts recovery in the last week, what helps, and where you can concretely make a difference without saying a word about it. That last part matters. You are not to say a word about it.',
        'Start with why sleep gets harder. Progesterone raises body temperature by 0.3-0.5 degrees throughout the luteal phase, and a warm body falls asleep less easily and wakes more often. In the last week both progesterone and estrogen fall, and with them serotonin, which is also the building block for melatonin, the sleep hormone. The result is lighter sleep, more waking and more restlessness. It is not imagination, and it is not something she can decide her way out of. It is physiology with a calendar. You cannot fix it with "try to relax". Nobody has ever relaxed because of that sentence.',
        "Caffeine fits badly into that picture. The half-life is around five hours, so a cup at 3 pm is still half active at bedtime. Caffeine also amplifies restlessness, palpitations and breast tenderness in the PMS days, and it is one of the few dietary changes health authorities directly recommend for PMS. That does not mean no coffee. It means coffee early and fewer cups in the last week, and it is far easier if you both do it. Your afternoon cup is part of the calculation. Remember too that coffee and tea with a meal reduce iron absorption; an hour's gap is enough.",
        'Alcohol is the other big sleep disruptor. A glass makes it easier to fall asleep, but the sleep becomes shallow, and you wake earlier. In the luteal phase, when sleep is already fragile, it costs more than the rest of the month. Alcohol also drains the body of fluid and lowers blood sugar later in the night, which amplifies restlessness and hunger, and studies have found a link between alcohol and both the frequency and severity of PMS. No bans. Just timing: the glass that is a joy around ovulation is often a bad deal on day 26. "But it\'s Friday" is not an argument. It is a day of the week.',
        'Now to what helps. Sleep hygiene sounds like a luxury, but in the luteal phase it is first aid: the same bedtime every day, a cool and dark bedroom, a lighter duvet, no screens for the last half hour, and calm in the evening. Heat has its own place: a heating pad on the lower belly eases cramps as well as over-the-counter painkillers in studies, and a warm bath in the evening helps both pain and falling asleep, because the body cools down afterwards. Cold is good for other things: a cold cloth on the neck for period headaches, a cool pack on tender breasts. Enough fluid through the day prevents headaches and worsened cramps. None of it requires you to understand the physiology. It requires you to be able to find the heating pad.',
        'Here is your role. You cannot sleep for her, but you can clear the evening. Calm in the evening does not come by itself if there are still dishes, messages, children and plans at 10 pm. Take the evening routine in the last week: dishes, locks, lights, the practical things. Make the bedroom cool. Make the coffee early, and suggest something without caffeine and without alcohol yourself, so she does not have to be the one who says no. Fill the hot water bottle before she asks. It is invisible work, and it is some of the most concrete you can do to make the PMS days easier. Invisible, by the way, means you do not mention it afterwards.',
        'One last thing, and it is serious: if the sleep problems are there all month, or if the tiredness is so heavy that it affects daily life regardless of sleep, it is not the luteal phase. It could be iron deficiency, thyroid, sleep apnoea or something else that can be treated. That deserves a doctor.',
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
        'Everything this month has been about, iron, blood sugar, fibre, calcium, sleep, only works if it gets done. And it does not get done because one person tells the other what she should eat. It gets done because it is easy, because it is shared, and because nobody has to defend themselves. This read is about how you become part of the food without becoming its police. The police are not short of volunteers.',
        'Start with the practical. Whoever does the shopping decides a large part of what is possible to eat. It is a quiet power, and it can be used well. In the first half of the cycle: iron-rich foods, vitamin C alongside, protein for recovery, oily fish. In the second half: wholegrains and fibre, protein at every meal, calcium, nuts and seeds, bananas and potatoes against fluid retention, and snacks that are easy to grab: fruit, cottage cheese, wholegrain crackers. Less ready-made food and crisps, because the salt worsens bloating. And always something she actually likes, including the chocolate. A list made only of "healthy" does not get eaten. It becomes a monument in the vegetable drawer.',
        'Cooking is the other part. The partner who never cooks ends up commenting on the food. The one who cooks understands why things are the way they are. Cooking together is one of the few household tasks that can be enjoyable rather than a demand: one chops, one stirs, music in the background. It creates conversation without it being "a conversation". And it creates shared ownership. In the luteal phase, when energy is low, you are the one who cooks and has it ready on time, because a late dinner on day 25 is a well-known recipe for an argument. "On time" does not mean "when the match is over".',
        'Now the line. There is a world of difference between making the good choice easy and keeping watch. "Do you really need more?", "haven\'t you had enough sugar today?", "is that healthy?" never help, however lovingly they are meant. They turn food into something that has to be defended, and that is the opposite of what the body needs, especially in the luteal phase, when appetite rises for purely biological reasons. Your influence is what is in the fridge, what you cook, and what you eat yourself. Not what she puts in her mouth. She is an adult, and her body is hers. If you feel a comment coming, swallow it yourself.',
        'The same goes for the body. Weight swings a couple of kilos across the cycle from fluid alone, the belly is bloated in the luteal phase, and clothes fit differently. Many women know that perfectly well and still find it hard not to measure themselves by it, because the body has been commented on their whole life. Even "you look healthy" and "have you lost weight?" say that the body is being assessed. You meant to be kind. You became a judge. The most helpful thing is to make the body a non-topic and talk about what she did, what she could do, how the day was. And never comment on belly, weight or portions.',
        'Then something important to know, and here the mood turns quiet. Eating disorders are common, often hidden, and they do not only affect teenagers. Signs worth taking seriously: meals skipped or eaten in secret, rules that keep tightening, training that cannot be cancelled no matter what, strong distress around food she has not controlled herself, and a cycle that becomes irregular or disappears because the body lacks energy. You are not to diagnose, and you are not to monitor. But you may say, calmly and without mentioning weight: "I\'m worried about you, and I want to help." And that it deserves a doctor.',
        "This week's task is the simplest of the month: shop for the phase, cook the food, and say nothing about what she eats. That is not passive. It is taking responsibility for what you actually influence, and leaving the rest to her. It is also the task that is easiest to fail. Not because it is hard. Because keeping quiet is hard.",
      ],
      conversationQuestion:
        'Have I ever said something about your food or your body that stuck with you? And what would you have wanted me to do instead?',
      sources: [NHS_EATWELL, NHS_EATING, NHS_PMS],
    },
  ],
  wrap: {
    id: wrapId(M),
    month: M,
    title: 'Month 9: Food, movement, sleep and no comments',
    summary: [
      'This month was about the three dials that are easiest to turn in everyday life: food, movement and sleep. You have learned that the period costs iron, that vitamin C makes plant iron usable, and that coffee and tea with the meal reduce absorption, so the coffee can wait an hour, yours included. That blood sugar swings more in the luteal phase, and that regular meals with protein and fibre are the best defence against the instability of the PMS days. That calcium and omega-3 have the best evidence among supplements, magnesium the weakest, and that cycle syncing is sensible principles wrapped in marketing and pastel colours.',
      'You have also learned that hard training sessions belong in the follicular phase and around ovulation, that the last week calls for lower intensity and more recovery, and that gentle movement and heat are among the best documented remedies for cramps. That caffeine and alcohol cost most in the luteal phase, and that sleep hygiene that week is first aid, not luxury. And that your role is the fridge, the kitchen and the evening, never her plate or her body. You have not become a nutritionist. You have become someone who shops properly and keeps quiet. That is worth more, honestly.',
      'Next month is about fertility, contraception and pregnancy: what she carries, what you can take on, and how the responsibility becomes shared in practice.',
    ],
    keepDoing: [
      'Put iron and vitamin C on the table during the period days, and move the coffee an hour away from the meal. Without saying the word iron.',
      'Keep protein and fibre snacks visibly out in the luteal phase, and say nothing when they get eaten.',
      'Train hard together in the first half, and suggest turning it down yourself in the last week, so it is your suggestion.',
      'Take the evening routine in the week before the period, so she can go to bed when she is tired. And do not mention it afterwards.',
      'Never comment on her food, portions or body. Comment on what she does and can do. Or on your own crisps.',
    ],
    quiz: [
      {
        question:
          'She is on day 2 and has been unusually tired for several weeks, even after good nights. What helps most?',
        options: [
          'Buy a giant tub of iron supplements and place it pointedly on the table',
          'Cook iron-rich food with vitamin C alongside, and suggest a blood test at the doctor if the tiredness continues',
          'Say "it\'s normal to be tired when you have your period" and get on with your day',
          'Suggest an extra cup of coffee with the meal, it works for you after all',
        ],
        correctIndex: 1,
        explanation:
          'Weeks of tiredness can be iron deficiency, but supplements should only follow a blood test, because too much iron is harmful. Food first, doctor when in doubt. And coffee with the meal reduces iron absorption, so that was the worst option, even if it was the one you wanted.',
      },
      {
        question:
          'It is day 26, 3 pm, and she snaps at you. She has not eaten since 11. What works best?',
        options: [
          'Ask "is it PMS?"',
          'Ask whether she should not eat something healthy',
          'Put something with protein and fibre out without commenting on it',
          'Retreat to the garage and wait for better weather',
        ],
        correctIndex: 2,
        explanation:
          'Blood sugar swings more in the luteal phase, and hunger amplifies irritability. Food without comment often solves the problem. A comment makes it bigger, and the garage solves nothing, it just has no fridge.',
      },
      {
        question:
          'She asks whether magnesium works for PMS. What is the most honest and helpful answer?',
        options: [
          'Say it definitely works, and order three tubs straight away',
          'Say the evidence is limited but the risk is low, suggest nuts, seeds and wholegrains first, and supplements after a chat with the pharmacist',
          'Say it is a waste of money and she should drop the idea',
        ],
        correctIndex: 1,
        explanation:
          'Magnesium has weak evidence and low risk. Honesty about the evidence, food first and a professional for supplements is the stance that holds for every supplement. Three tubs is not evidence, it is a stockpile.',
      },
      {
        question:
          'You have planned a hard training session together on day 27, and she is clearly worn out. What is most helpful?',
        options: [
          'Push on, because exercise helps with PMS, and you read that in this app',
          'Suggest a walk or a light session instead, yourself',
          'Cancel everything and tell her to rest',
          'Train alone without saying anything and send her a screenshot of your time',
        ],
        correctIndex: 1,
        explanation:
          'In the late luteal phase the key is lower intensity, not less movement. Making it your suggestion turns it into a shared choice rather than her defeat. The screenshot of your time helps nobody.',
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
          'Any comment about the body, even a positive one, confirms that it is being assessed. Acknowledgement and something concrete help; explanations and food suggestions make it worse. The salad was a very bad idea, even with lemon.',
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
