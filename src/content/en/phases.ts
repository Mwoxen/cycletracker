import type { Phase } from '@/domain/types';

import type { PhaseInfo } from '../types';

export const phases: Record<Phase, PhaseInfo> = {
  menstrual: {
    phase: 'menstrual',
    name: 'Menstruation',
    timing: 'Day 1-5 (typically 3-7 days)',
    whatHappens: [
      'Estrogen and progesterone are at their lowest. The uterine lining is shed, and that is the bleeding.',
      'The uterus contracts to push the lining out. Those contractions are the cramps.',
      'The body loses iron with the blood. Together with the low hormones this often means fatigue the first days.',
    ],
    howSheMayFeel: [
      'Tired and heavy, especially day 1-2.',
      'Cramps, lower back pain, headache.',
      'A need for rest, warmth and less socialising.',
      'Emotionally often calmer than in the PMS days, but with a short fuse if the pain is bad.',
    ],
    whatYouCanDo: [
      'Take over the practical things without asking: food, dishes, kids, groceries.',
      'Have warmth ready: heating pad, tea, a blanket. Heat eases cramps.',
      'Ask "what do you need?" instead of guessing, and accept "nothing".',
      'Slow down the plans for the first two days. Cancel something without making a thing of it.',
      'Keep painkillers and pads or tampons in the house so she does not have to think about it.',
    ],
    avoid: [
      'Taking low energy or cancellations personally.',
      'Answering an opinion with "is it because you have your period?".',
      'Planning big things or hard conversations on day 1-2.',
    ],
  },
  follicular: {
    phase: 'follicular',
    name: 'Follicular phase',
    timing: 'Day 6-13 (from the bleeding stops until ovulation)',
    whatHappens: [
      'The pituitary sends FSH, and a group of follicles in the ovaries starts maturing an egg.',
      'The follicles produce estrogen, which rises day by day and builds a new uterine lining.',
      'Rising estrogen boosts serotonin and dopamine. That is why mood, energy and motivation typically go up.',
    ],
    howSheMayFeel: [
      'More energy, wanting to do things and see people.',
      'Lighter, better sleep, clearer thinking.',
      'More open to new things, plans and challenges.',
      'Skin often clears up and the bloating goes away.',
    ],
    whatYouCanDo: [
      'Plan the big things here: trips, parties, guests, hard workouts, important conversations.',
      'Say yes to her ideas. This is the week where initiative comes easily.',
      'Notice the shift from the period and say it out loud: "You seem to have your energy back."',
      'Use the surplus to agree on the practical things that cause friction later in the cycle.',
    ],
    avoid: [
      'Assuming the high energy lasts all month.',
      'Pushing every hard thing to "when she feels good". Spread them out.',
    ],
  },
  ovulation: {
    phase: 'ovulation',
    name: 'Ovulation',
    timing: 'Around day 13-16 (ovulation itself lasts about a day)',
    whatHappens: [
      'Estrogen peaks and triggers a sharp surge in LH. 24-36 hours later the egg is released.',
      'Testosterone is also slightly higher around ovulation, which often means more desire.',
      'The egg lives 12-24 hours. Sperm can survive up to 5 days, so the fertile window lies before ovulation.',
    ],
    howSheMayFeel: [
      'Highest energy and confidence of the cycle.',
      'Often more desire for sex and closeness.',
      'Some feel a twinge on one side of the abdomen (mittelschmerz) or notice more discharge.',
      'Some get tender breasts or feel a little bloated right after.',
    ],
    whatYouCanDo: [
      'Prioritise time together. These are the best days of the cycle for closeness.',
      'If you do not want a pregnancy: this is when contraception matters most. Share the responsibility.',
      'If you want a pregnancy: the five days before ovulation and the day itself matter most.',
      'Notice if she mentions discharge or a twinge in her side. They are useful signs to know.',
    ],
    avoid: [
      "Using the app's ovulation date as contraception. It is an average, not a measurement.",
    ],
  },
  luteal: {
    phase: 'luteal',
    name: 'Luteal phase',
    timing: 'Day 17-28 (from ovulation to the next period, fairly stable at 12-14 days)',
    whatHappens: [
      'The empty follicle becomes the corpus luteum and produces progesterone.',
      'Progesterone prepares the lining for a fertilised egg, raises body temperature slightly and has a calming, drowsy effect.',
      'If the egg is not fertilised, progesterone and estrogen drop sharply in the last week. That drop is what causes PMS.',
    ],
    howSheMayFeel: [
      'First half: calm, homely, a bit more tired.',
      'Last 5-7 days: irritable, vulnerable, closer to tears, hungrier and craving sweets.',
      'Bloating, tender breasts, worse sleep, breakouts.',
      'A feeling that "everything is a bit too much".',
    ],
    whatYouCanDo: [
      'Lower expectations for social and practical energy in the last week.',
      'Notice when the PMS window starts and be the one with patience in reserve.',
      'Respond to the need underneath, not the tone.',
      'Make sure meals are on time and there are snacks in the house. Hunger amplifies everything.',
      'Suggest a quiet evening plan rather than asking "what do you want?".',
    ],
    avoid: [
      'Starting big discussions in the last 4-5 days before the period.',
      'Saying "you\'re just PMS-ing". The feelings are real, even if the amplifier is hormonal.',
      'Making her irritation your problem. Stay calm and stay.',
    ],
  },
};
