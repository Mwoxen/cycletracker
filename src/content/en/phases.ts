import type { Phase } from '@/domain/types';

import type { PhaseInfo } from '../types';

export const phases: Record<Phase, PhaseInfo> = {
  menstrual: {
    phase: 'menstrual',
    name: 'Menstruation',
    timing: 'Day 1-5 (typically 3-7 days)',
    whatHappens: [
      'Estrogen and progesterone are at their lowest. The uterine lining is shed, and that is the bleeding. Yes, it is blood. You will survive.',
      'The uterus contracts to push the lining out. Those contractions are the cramps. That is a muscle doing work, not "a bit of a tummy ache".',
      'The body loses iron with the blood. Together with the low hormones this often means fatigue the first days. That is not laziness. That is missing iron.',
    ],
    howSheMayFeel: [
      'Tired and heavy, especially day 1-2. Not "a bit tired". Tired.',
      'Cramps, lower back pain, headache. Often all at once.',
      'A need for rest, warmth and less socialising. You count as socialising.',
      "Emotionally often calmer than in the PMS days, but with a short fuse if the pain is bad. Pain shortens everyone's fuse. Yours too, when you have a splinter in your finger.",
    ],
    whatYouCanDo: [
      'Take over the practical things without asking: food, dishes, kids, groceries. "Should I make dinner?" is not help. It is one more job for her: answering you.',
      'Have warmth ready: heating pad, tea, a blanket. Heat eases cramps and requires zero conversation. Your best friend today is a wall socket.',
      'Ask "what do you need?" instead of guessing. If the answer is "nothing", the answer is nothing. Not "are you sure?". Nothing.',
      'Slow down the plans for the first two days. Cancel something without making a thing of it. There is no medal for moving a brunch.',
      'Keep painkillers and pads or tampons in the house so she does not have to think about it. You can buy tampons. The cashier is not thinking about you. Nobody is thinking about you.',
    ],
    selfCare: [
      'Heat on your belly or lower back: a heating pad, a warm bath or a hot water bottle eases the cramps.',
      'Take painkillers early if you usually get cramps. Ibuprofen works best before the pain peaks.',
      'Eat iron-rich food the first days: meat, lentils, spinach, ideally with some vitamin C.',
      'Gentle movement, like a walk or light stretching, often helps cramps more than lying still.',
      'Slow down without guilt. Say no to something on the first two days.',
    ],
    avoid: [
      'Taking low energy or cancellations personally. She is not cancelling you. She is cancelling Tuesday.',
      'Answering an opinion with "is it because you have your period?". She had that opinion last week too. The only new thing is that you just lost the argument.',
      'Planning big things or hard conversations on day 1-2. It can wait until Thursday, and you know it.',
    ],
  },
  follicular: {
    phase: 'follicular',
    name: 'Follicular phase',
    timing: 'Day 6-13 (from the bleeding stops until ovulation)',
    whatHappens: [
      'The pituitary sends FSH, and a group of follicles in the ovaries starts maturing an egg. You do not need to be able to spell pituitary. You just need to know it is on the job.',
      'The follicles produce estrogen, which rises day by day and builds a new uterine lining. The body is rebuilding, and nobody had to put it in the calendar.',
      'Rising estrogen boosts serotonin and dopamine. That is why mood, energy and motivation typically go up. It is not that you got funnier. It is estrogen.',
    ],
    howSheMayFeel: [
      'More energy, wanting to do things and see people.',
      'Lighter, better sleep, clearer thinking.',
      'More open to new things, plans and challenges. This is when you bring up the hike you have been talking about since March.',
      'Skin often clears up and the bloating goes away.',
    ],
    whatYouCanDo: [
      'Plan the big things here: trips, parties, guests, hard workouts, important conversations. This is the week where "how about having my parents over?" can actually end well.',
      'Say yes to her ideas. This is the week where initiative comes easily, so do not be the guy who says "let\'s see". You have seen. Say yes.',
      'Notice the shift from the period and say it out loud: "You seem to have your energy back." That is one sentence. You can manage one sentence.',
      'Use the surplus to agree on the practical things that cause friction later in the cycle. The holiday, the budget, who calls your mother. Now, while it is easy.',
    ],
    selfCare: [
      'Put the things that take courage or energy here: the hard conversation, the interview, the tough workout.',
      'Use the energy to make plans and agreements so the last week of the cycle gets easier.',
      'Say yes to social things. In this phase they usually give more than they take.',
      'Try something new. The brain is more open to learning and challenges while estrogen rises.',
      'Notice how you feel and write it down. It makes the PMS week easier to put in perspective.',
    ],
    avoid: [
      'Assuming the high energy lasts all month. It does not. Neither does yours. You just do not have an app pointing it out.',
      'Pushing every hard thing to "when she feels good". Spread them out. Otherwise she gets one week a month packed with your postponed conversations.',
    ],
  },
  ovulation: {
    phase: 'ovulation',
    name: 'Ovulation',
    timing: 'Around day 13-16 (ovulation itself lasts about a day)',
    whatHappens: [
      'Estrogen peaks and triggers a sharp surge in LH. 24-36 hours later the egg is released. Ovulation itself is over within a day, so it is not waiting for you to finish reading.',
      'Testosterone is also slightly higher around ovulation, which often means more desire. Yes, women have testosterone too. It did not come up in seventh grade, but now you know.',
      'The egg lives 12-24 hours. Sperm can survive up to 5 days, so the fertile window lies before ovulation. Read that sentence again. Before, not on the day.',
    ],
    howSheMayFeel: [
      'Highest energy and confidence of the cycle.',
      'Often more desire for sex and closeness.',
      'Some feel a twinge on one side of the abdomen (mittelschmerz) or notice more discharge. Mittelschmerz is German for "middle pain". So you learned a German word today.',
      'Some get tender breasts or feel a little bloated right after.',
    ],
    whatYouCanDo: [
      'Prioritise time together. These are the best days of the cycle for closeness, so put the phone away. All the way away. In another room.',
      'If you do not want a pregnancy: this is when contraception matters most. Share the responsibility. "I thought you had it covered" is not a method of contraception.',
      'If you want a pregnancy: the five days before ovulation and the day itself matter most. The day after, you are late, however hard you try.',
      'Notice if she mentions discharge or a twinge in her side. They are useful signs to know. Do not make a face when the word discharge comes up. It is just a word.',
    ],
    selfCare: [
      "Notice your own signs: clear, stretchy discharge and a twinge in your side say more than the app's date.",
      "If you do not want a pregnancy: use contraception now. The app's estimate is not a measurement.",
      'If you want a pregnancy: the five days before ovulation and the day itself matter most.',
      'Enjoy the surplus. It is a good week for closeness, and for doing something just for yourself.',
      'Drink plenty and keep regular meals. Some feel a little bloated right after ovulation.',
    ],
    avoid: [
      "Using the app's ovulation date as contraception. It is an average, not a measurement. The app does not know what is happening in her ovaries. Neither do you. Use contraception.",
    ],
  },
  luteal: {
    phase: 'luteal',
    name: 'Luteal phase',
    timing: 'Day 17-28 (from ovulation to the next period, fairly stable at 12-14 days)',
    whatHappens: [
      'The empty follicle becomes the corpus luteum and produces progesterone. The corpus luteum is a real thing in the body, not a character from a picture book.',
      'Progesterone prepares the lining for a fertilised egg, raises body temperature slightly and has a calming, drowsy effect. It also explains why the duvet ends up on the floor at night.',
      'If the egg is not fertilised, progesterone and estrogen drop sharply in the last week. That drop is what causes PMS. She is not making it up, and you did not cause it. Hold on to that last part. You will need it.',
    ],
    howSheMayFeel: [
      'First half: calm, homely, a bit more tired.',
      'Last 5-7 days: irritable, vulnerable, closer to tears, hungrier and craving sweets.',
      'Bloating, tender breasts, worse sleep, breakouts.',
      'A feeling that "everything is a bit too much". You are part of everything.',
    ],
    whatYouCanDo: [
      'Lower expectations for social and practical energy in the last week. This is not the week to invite four friends for dinner and say "I thought it would be nice".',
      'Notice when the PMS window starts and be the one with patience in reserve. You do not need to announce that you noticed. Just have the reserve.',
      'Respond to the need underneath, not the tone. "Why are the dishes still there?" means the dishes need to go. It is not an invitation to discuss tone of voice.',
      'Make sure meals are on time and there are snacks in the house. Hunger amplifies everything. That goes for you too, so eat something before you answer.',
      'Suggest a quiet evening plan rather than asking "what do you want?". "What do you want?" is a chore. "I found a film and the oven is on" is a plan.',
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
      'Starting big discussions in the last 4-5 days before the period. The mortgage, the in-laws and where you will live in ten years can all wait until day 8.',
      'Saying "you\'re just PMS-ing". The feelings are real, even if the amplifier is hormonal. If she is annoyed about something you did, then you did it. PMS just makes it louder.',
      'Making her irritation your problem. Stay calm and stay. If you feel the urge to say "are you in a bad mood?", leave the room and say it to a wall. The wall gives the same answer she would, just without consequences.',
    ],
  },
};
