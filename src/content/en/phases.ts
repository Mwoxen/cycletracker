import type { Phase } from '@/domain/types';

import type { PhaseInfo } from '../types';

export const phases: Record<Phase, PhaseInfo> = {
  menstrual: {
    phase: 'menstrual',
    name: 'Menstruation',
    timing: 'Day 1-5 (typically 3-7 days)',
    whatHappens: [
      'Estrogen and progesterone are at rock bottom. The uterine lining is shed, and that is the bleeding. Yes, it is blood. You have cut yourself on a bread knife and lived, so you will survive this too.',
      'The uterus contracts to push the lining out, and those contractions are the cramps. That is a muscle working like a slow-roasted shoulder that will not let go of the bone. Not "a bit of a tummy ache".',
      'The body loses iron with the blood, and together with the low hormones that often means fatigue the first days. That is not laziness. That is missing iron, and a soup without salt tastes of nothing either.',
    ],
    howSheMayFeel: [
      'Tired and heavy, especially day 1-2. Not "a bit tired". Tired like you after a big Sunday roast, just without the fun part first.',
      'Cramps, lower back pain, headache. Often all at once, like every pot boiling over at the same time.',
      'A need for rest, warmth and less socialising. Listen, you count as socialising.',
      "Emotionally often calmer than in the PMS days, but with a short fuse if the pain is bad. Pain shortens everyone's fuse. You took to the sofa over a splinter, so you know.",
    ],
    whatYouCanDo: [
      'Take over the practical things without asking: food, dishes, kids, groceries. "Should I make dinner?" is not help, it is one more job for her: answering you. Turn on the hob, my friend.',
      'Have warmth ready: heating pad, tea, a blanket. Heat lets the muscle relax like a knob of butter on something that has had a hard day, and it requires zero conversation. Your best friend today is honestly a wall socket.',
      'Ask "what do you need?" instead of guessing. If the answer is "nothing", the answer is nothing. Not "are you sure?". Nothing. It is not a buffet where you go round one more time.',
      'Slow down the plans for the first two days. Cancel something without making a thing of it. There is no medal for moving a brunch, and none for announcing that you moved it either.',
      'Keep painkillers and pads or tampons in the house so she does not have to think about it. You can buy tampons. The cashier is not thinking about you. Nobody is thinking about you. You have stood in that queue with six tins of tomatoes and a pizza stone without blinking.',
    ],
    selfCare: [
      'Heat on your belly or lower back: a heating pad, a warm bath or a hot water bottle eases the cramps.',
      'Take painkillers early if you usually get cramps. Ibuprofen works best before the pain peaks.',
      'Eat iron-rich food the first days: meat, lentils, spinach, ideally with some vitamin C.',
      'Gentle movement, like a walk or light stretching, often helps cramps more than lying still.',
      'Slow down without guilt. Say no to something on the first two days.',
    ],
    avoid: [
      'Taking low energy or cancellations personally. She is not cancelling you. She is cancelling Tuesday. Tuesday comes back, it always does.',
      'Answering an opinion with "is it because you have your period?". She had that opinion last week too. The only new thing is that you just lost the argument, and you would have lost it on day 12 as well.',
      'Planning big things or hard conversations on day 1-2. Let it rest until Thursday, like a dough. It gets better for it, and you know it.',
    ],
  },
  follicular: {
    phase: 'follicular',
    name: 'Follicular phase',
    timing: 'Day 6-13 (from the bleeding stops until ovulation)',
    whatHappens: [
      'The pituitary sends FSH, and a group of follicles in the ovaries starts maturing an egg. You do not need to be able to spell pituitary. You just need to know someone is in the kitchen and they have started.',
      'The follicles produce estrogen, which rises day by day and builds a new uterine lining. The body is rebuilding, like a sourdough rising on its own, and nobody had to put it in the calendar.',
      'Rising estrogen boosts serotonin and dopamine, which is why mood, energy and motivation typically go up. It is not that you got funnier. It is estrogen, and estrogen has never laughed at anything you said.',
    ],
    howSheMayFeel: [
      'More energy, wanting to do things and see people. Yes, including the ones you hid from last time.',
      'Lighter, better sleep, clearer thinking. She remembers what you promised last week.',
      'More open to new things, plans and challenges. This is when you bring up the hike you have been talking about since March. Now, not in two weeks when you have forgotten it again.',
      'Skin often clears up and the bloating goes away. That is not something you comment on. You just know it.',
    ],
    whatYouCanDo: [
      'Plan the big things here: trips, parties, guests, hard workouts, important conversations. This is the week where "how about having my parents over?" can actually end well. Strawberries in June, my friend. Pick them.',
      'Say yes to her ideas. This is the week where initiative comes easily, so do not be the guy stirring the pot and saying "let\'s see". You have seen. Say yes.',
      'Notice the shift from the period and say it out loud: "You seem to have your energy back." That is one sentence. You can manage one sentence. You gave a twenty-minute speech about a barbecue.',
      'Use the surplus to agree on the practical things that cause friction later in the cycle. The holiday, the budget, who calls your mother. Now, while it is easy, the way you chop the onion before the pan is hot.',
    ],
    selfCare: [
      'Put the things that take courage or energy here: the hard conversation, the interview, the tough workout.',
      'Use the energy to make plans and agreements so the last week of the cycle gets easier.',
      'Say yes to social things. In this phase they usually give more than they take.',
      'Try something new. The brain is more open to learning and challenges while estrogen rises.',
      'Notice how you feel and write it down. It makes the PMS week easier to put in perspective.',
    ],
    avoid: [
      'Assuming the high energy lasts all month. It does not. Neither does yours. You just do not have an app pointing it out, you have a sofa.',
      'Pushing every hard thing to "when she feels good". Spread them out. Otherwise she gets one week a month packed with your postponed conversations, and for crying out loud, nobody ordered that menu.',
    ],
  },
  ovulation: {
    phase: 'ovulation',
    name: 'Ovulation',
    timing: 'Around day 13-16 (ovulation itself lasts about a day)',
    whatHappens: [
      'Estrogen peaks and triggers a sharp surge in LH. 24-36 hours later the egg is released. Ovulation itself is over within a day, so it is not waiting for you to finish reading. It is a poached egg, not a slow roast.',
      'Testosterone is also slightly higher around ovulation, which often means more desire. Yes, women have testosterone too. It did not come up in seventh grade, and you were looking out of the window anyway, but now you know.',
      'The egg lives 12-24 hours. Sperm can survive up to 5 days, so the fertile window lies before ovulation. Read that sentence again. Before, not on the day. You do not marinate the meat after it is cooked either.',
    ],
    howSheMayFeel: [
      'Highest energy and confidence of the cycle. Strawberries in June, and you did not water them.',
      'Often more desire for sex and closeness. Listen, that is not an alarm for you to set. She can hear you opening the app.',
      'Some feel a twinge on one side of the abdomen (mittelschmerz) or notice more discharge. Mittelschmerz is German for "middle pain". So you learned a German word today, which is one more than you brought home from Berlin.',
      'Some get tender breasts or feel a little bloated right after. You will be told if it is relevant to you. It is not.',
    ],
    whatYouCanDo: [
      'Prioritise time together. These are the best days of the cycle for closeness, so put the phone away. All the way away. In another room, in a drawer, under something.',
      'If you do not want a pregnancy: this is when contraception matters most. Share the responsibility. "I thought you had it covered" is not a method of contraception. Honestly, it is not even a sentence you can say out loud without hearing it.',
      'If you want a pregnancy: the five days before ovulation and the day itself matter most. The day after, you are late, however hard you try. There is nothing to gain by waiting, it is not a stew.',
      'Notice if she mentions discharge or a twinge in her side. They are useful signs to know. Do not make a face when the word discharge comes up. It is just a word. You have eaten oysters and said mmm.',
    ],
    selfCare: [
      "Notice your own signs: clear, stretchy discharge and a twinge in your side say more than the app's date.",
      "If you do not want a pregnancy: use contraception now. The app's estimate is not a measurement.",
      'If you want a pregnancy: the five days before ovulation and the day itself matter most.',
      'Enjoy the surplus. It is a good week for closeness, and for doing something just for yourself.',
      'Drink plenty and keep regular meals. Some feel a little bloated right after ovulation.',
    ],
    avoid: [
      "Using the app's ovulation date as contraception. It is an average, not a measurement. The app does not know what is happening in her ovaries. Neither do you, my friend. Use contraception.",
    ],
  },
  luteal: {
    phase: 'luteal',
    name: 'Luteal phase',
    timing: 'Day 17-28 (from ovulation to the next period, fairly stable at 12-14 days)',
    whatHappens: [
      'The empty follicle becomes the corpus luteum and produces progesterone. The corpus luteum is a real thing in the body, not a character from a picture book, and not something you can buy at the deli either.',
      'Progesterone prepares the lining for a fertilised egg, raises body temperature slightly and has a calming, drowsy effect. It turns the heat down under the pan, and it also explains why the duvet ends up on the floor at night.',
      'If the egg is not fertilised, progesterone and estrogen drop sharply in the last week. That drop is what causes PMS. She is not making it up, and you did not cause it. Hold on to that last part. You will need it, around Wednesday.',
    ],
    howSheMayFeel: [
      'First half: calm, homely, a bit more tired. The heat is turned down, and that is exactly what the recipe says.',
      'Last 5-7 days: irritable, vulnerable, closer to tears, hungrier and craving sweets. That is progesterone dropping, and progesterone does not check with you first.',
      'Bloating, tender breasts, worse sleep, breakouts. None of it is an invitation for you to say something.',
      'A feeling that "everything is a bit too much". You are part of everything. Honestly, you are fairly central to everything.',
    ],
    whatYouCanDo: [
      'Lower expectations for social and practical energy in the last week. This is not the week to invite four friends for dinner and say "I thought it would be nice". You did not think. That is the whole problem.',
      'Notice when the PMS window starts and be the one with patience in reserve. You do not need to announce that you noticed. Just have the reserve, the way you have a packet of pasta at the back of the cupboard.',
      'Respond to the need underneath, not the tone. "Why are the dishes still there?" means the dishes need to go. It is not an invitation to discuss tone of voice. Hands in the water, my friend.',
      'Make sure meals are on time and there are snacks in the house. Hunger amplifies everything. That goes for you too, so eat something before you answer. You have never won an argument on an empty stomach, and you have tried.',
      'Suggest a quiet evening plan rather than asking "what do you want?". "What do you want?" is a chore. "I found a film and the oven is on" is a plan. And the oven does actually have to be on.',
    ],
    selfCare: [
      'Eat on time and keep good snacks around. Blood sugar dips amplify irritation and sadness.',
      'Cut back on caffeine and alcohol in the last week. Both make sleep and mood worse.',
      'Keep moving, even when you do not feel like it. A walk eases both bloating and restlessness.',
      'Prioritise sleep: a fixed bedtime and a quiet evening. The progesterone drop makes sleep fragile.',
      'Say it out loud when the PMS week starts: "I am closer to tears this week." It takes the pressure off.',
      'If PMS wrecks everyday life every month, talk to your doctor. It can be treated.',
    ],
    avoid: [
      'Starting big discussions in the last 4-5 days before the period. The mortgage, the in-laws and where you will live in ten years can all wait until day 8. They keep fine in the fridge.',
      'Saying "you\'re just PMS-ing". The feelings are real, even if the amplifier is hormonal. If she is annoyed about something you did, then you did it. PMS just makes it clearer, like the light in a kitchen you have not cleaned.',
      'Making her irritation your problem. Stay calm and stay. If you feel the urge to say "are you in a bad mood?", go to the kitchen and say it to the extractor fan. It gives the same answer she would, just without consequences.',
    ],
  },
};
