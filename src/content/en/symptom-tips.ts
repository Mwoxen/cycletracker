import type { Symptom } from '@/domain/types';

import type { SymptomTip } from '../types';

export const symptomTips: Record<Symptom, SymptomTip> = {
  cramps: {
    what: 'The uterus contracts to shed its lining. Heat and early painkillers work best.',
    doThis: 'Get the heating pad out without being asked, and take the practical things today.',
  },
  headache: {
    what: 'Headaches around the period are often caused by the sharp estrogen drop and can be migraine.',
    doThis:
      'Dim light and noise, make sure there is water and food, and let her withdraw without explaining.',
  },
  backPain: {
    what: 'Lower back pain often accompanies cramps because the same nerves supply the area.',
    doThis: 'Offer heat on the lower back and take the heavy lifting today.',
  },
  breastTenderness: {
    what: 'Progesterone and estrogen make breast tissue swell and feel tender before the period.',
    doThis: 'Be gentle with touch and skip any comments about her body.',
  },
  bloating: {
    what: 'The body retains water in the luteal phase. It is temporary and completely normal.',
    doThis: 'Say nothing about her belly, and suggest loose clothes and a quiet evening.',
  },
  fatigue: {
    what: 'Low hormones, iron loss and poor sleep make the body heavy, especially day 1-2.',
    doThis: 'Cancel or move something today, and make sure there is a meal with iron.',
  },
  nausea: {
    what: 'Prostaglandins also affect the stomach and gut, so nausea and loose stools are common.',
    doThis: 'Small, mild meals and no pressure to join at the table.',
  },
  acne: {
    what: 'The hormone shift before the period increases oil production. It clears on its own.',
    doThis: 'No comments about her skin. Say something genuine about something else.',
  },
  cravings: {
    what: 'Serotonin falls with estrogen, and the body reaches for fast carbs. That is biology, not weak will.',
    doThis: 'Keep good snacks in the house, and say nothing when they get eaten.',
  },
  insomnia: {
    what: 'Progesterone raises body temperature and the hormone drop disturbs sleep before the period.',
    doThis: 'Make the bedroom cool and calm, and take the morning tasks tomorrow.',
  },
  lowLibido: {
    what: 'Desire often drops in the luteal phase and the first period days. It is not about you.',
    doThis: 'Show closeness without expectation: a hug, a hand, no hints.',
  },
  highLibido: {
    what: 'Around ovulation estrogen and a little testosterone peak, and desire is often highest.',
    doThis: 'Prioritise time together, and let her set the pace.',
  },
  moodSwings: {
    what: 'The hormone drop amplifies feelings that are already there. They are real; the amplifier is hormonal.',
    doThis: 'Respond to the need behind the tone, and count to three before you answer.',
  },
  anxiety: {
    what: 'Lower serotonin and GABA sensitivity in the luteal phase can bring restlessness and worry.',
    doThis: 'Slow the pace, avoid surprises, and ask "do you want suggestions or an ear?".',
  },
  irritability: {
    what: 'A short fuse in the PMS days is one of the most common symptoms and passes with the bleeding.',
    doThis: 'Do not take the tone personally. Ask what you can take off her plate today.',
  },
  sadness: {
    what: 'Sadness and tears close to the surface belong to PMS. If it gets heavy every month, it deserves a doctor.',
    doThis: 'Stay in the room, listen without fixing, and say that you are there.',
  },
};
