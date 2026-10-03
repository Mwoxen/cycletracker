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

const M = 2;

export const month02: MonthContent = {
  month: M,
  theme: 'Communication and support',
  focus:
    'Learn to ask instead of guessing, to listen before you fix, and to use what you know about the phases to give more. Never as an argument. You lose anyway.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'You now know enough to guess wrong',
      insight:
        'After one month you know a fair amount about the cycle. Congratulations. It is also the most dangerous moment, because now you can guess with confidence. She is quiet, so she is in the luteal phase, so she wants to be left alone. Nice analysis. Wrong conclusion. Knowledge about phases is knowledge about averages, and she is not an average. On the same day she might want company or peace, help or to be left alone. The only thing that works every time is asking. A good question is short, concrete and easy to answer: "Do you want company, or should I give you some space?" That is not a sign you do not understand her. It is a sign you take her seriously as more than her phase. And it is cheaper than guessing wrong.',
      action:
        'Ask one concrete question today instead of guessing: "What do you need most right now: company, quiet, or a hand with something?" Then wait for the answer.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: '"Ear or ideas?" is only the first half',
      insight:
        'You know the question from month 1: "Do you want suggestions, or should I just listen?" Now comes the hard part, because the hard part is not asking. It is doing what she answers. If she says "just listen", your brain will produce solutions anyway. Five of them, ranked, with a timeline. Set them aside. Nod, ask "what was the worst part of it?", and let her finish. The brain gets its turn another day. If she says "suggestions", offer one, not five, and ask whether it fits. The answer shifts with the phase: in the follicular phase many want a sparring partner, in the luteal phase more often an ear. And it shifts from day to day. So you ask every time and do not reuse the answer from last time. You are a partner, not a thermostat.',
      action:
        'Next time she tells you about something hard: ask "ear or ideas?", and if the answer is ear, ask only questions for ten minutes. Ten whole minutes.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 3),
      month: M,
      day: 3,
      title: 'First "I get it", then everything else',
      insight:
        'Validating means acknowledging that the feeling makes sense before you do anything about it. It is not the same as agreeing with everything. "It makes sense that you are fed up with it" can be said even if you see the matter differently. You do not even need to have understood the matter yet. When hormones drop in the week before the period, the need for validation is at its highest and the tolerance for being skipped over at its lowest. Jump straight to the solution and what she hears is: your feeling is a problem that needs removing. Now you have two problems. Validate first, and the pulse comes down, and the solution can be found together afterwards. The order is everything: first "I get it", then "what do we do?". Often the first is enough and the second becomes unnecessary. That is the good news: you often get out of fixing anything.',
      action:
        'Use the sentence "it makes sense that you feel that way" once today, without following it with a "but". Not even a small one.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'The app is not a weapon',
      insight:
        'There is a world of difference between "is it PMS?" and "I can see in the app that it is day 25, do you want me to take a bit more off your plate today?". The first sentence uses the phase to explain her away. The second uses it to offer help. The first also puts you on the sofa for the night, and deservedly so. The rule is simple: the phase must never be mentioned as an argument in a disagreement, and never as an answer to a feeling. It may be mentioned as the reason you do something: cook, move an appointment, hold back on criticism. If in doubt, ask yourself whether the sentence is about what she is or about what you are going to do. Only the latter is useful. The former is just you, having read something and wanting to show it off.',
      action:
        'Say one sentence today that uses the phase as the reason for your own action: "I am doing dinner this week, you do not need to think about it." Then do it.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'A code word, so nobody has to explain anything',
      insight:
        'Many couples wear each other down on the days when she is struggling but has no energy to explain it. She gets short, you get confused and start asking questions, and now there are two problems, one of which is asking. An agreed code solves it. It can be a word ("grey day"), a number from 1 to 5, an emoji or a particular mug put out on the counter. The meaning is agreed in advance, while you are both calm: "When I say it, I need you to take the practical stuff and not ask questions." The signal removes the need to explain and defend on a day when there is nothing in the tank for it. She gets an easy way out. You get a clear task, and clear tasks are actually the thing you are best at.',
      action:
        'Suggest a signal today, while you are both doing fine: "Should we have a word for the days when you just need me to take over?"',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: 'Your inner lawyer has the day off',
      insight:
        'When she says something critical, your body reacts as if you are under attack. Your inner lawyer stands up at once: that is not true, that was not the intention, there was context. The lawyer sounds reasonable. He also ends the conversation, because now she has to fight to be heard on top of what she was already frustrated about. Send him home. Listen to the end, repeat the core in your own words ("so you feel that I disappear when things get hard") and ask whether you have understood correctly. Only when she says yes have you earned the right to give your version, and by then the need for it has often gone. In the luteal phase, when resilience to stress is at its lowest, that order decides whether it becomes a conversation or a fight. The lawyer rarely wins either.',
      action:
        'Next time you get criticism: repeat her point in your own words and ask "have I understood that right?" before you say a single word about yourself.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'Sofa or a walk: give her a menu',
      insight:
        'The first days of the period are low energy and often painful, and the need for closeness varies enormously. Some want a body next to them on the sofa, others want the house to themselves for an hour. You can guess wrong in both directions, and you have probably tried both: sat down close when she wanted peace, and backed off when she needed you to stay. Ask directly, and make it easy to answer: "Do you want company on the sofa, or should I go for a walk so you get some quiet?" A choice between two concrete things is easier to answer than an open "what do you want?" when the body hurts and the energy is spent. Think of it as a menu with two dishes. Nobody has to invent a dish today, least of all her.',
      action:
        'If she is on her period: give her the choice between two concrete things today. If not: ask what she usually prefers on day 1 and 2, and remember the answer.',
      phaseTags: ['menstrual'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: 'She is quiet. It is not about you.',
      insight:
        'During the period, and again in the last days before it, many withdraw into themselves. Fewer words, shorter answers, more phone, less eye contact. To a partner it feels like cold air, and the temptation is to ask "is something wrong?" five times. By the fifth time something is in fact wrong, and it is you. Most often it is nothing between the two of you. It is a body spending its energy on pain and tiredness, with nothing left over for being social. The best answer is to say it out loud once, calmly and without demands: "I can tell you need some quiet. I am here when you want me." And then actually be there, without keeping score and without glancing over to check whether she is nearly done needing quiet.',
      action:
        'Say once today: "You do not have to be sociable with me today, I am here anyway." And then do not ask again. Not even with your eyes.',
      phaseTags: ['menstrual'],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'Fifteen minutes a week, before anything goes wrong',
      insight:
        'Most of the important conversations in a relationship happen when something has gone wrong. At 11 pm, in the kitchen, with the washing-up as a witness. That makes them loaded and badly timed. A fixed, short check-in once a week changes that. Fifteen minutes, same day, three questions: What went well this week? What was hard? What do you need in the coming week? The last question is gold, because the answer often lines up with where in the cycle she is heading. "My period is due Wednesday, so Thursday evening I would like to be off duty from everything" is a sentence that only gets said if somebody asks. The check-in is phone-free and has no agenda of solving everything. You are not there to fix anything. You are there to ask and write it down.',
      action:
        'Suggest a fixed time for a fifteen-minute weekly check-in, and put it in the calendar for the next four weeks. Now, while you remember.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 10),
      month: M,
      day: 10,
      title: 'The big conversation does not start at the sink',
      insight:
        'You know from month 1 that the follicular phase is the best time for difficult topics. But a good time does not save a bad start. Do not throw the topic in in the middle of something else ("while we are at it, we also need to talk about money"). Nobody has ever said "while we are at it" and got a good conversation out of it. Ask for the conversation instead: "There is something I would like to talk about, it is about our finances. Does tonight work, or would the weekend be better?" That gives her the chance to prepare and pick her moment, and it signals that the topic matters, not that it is an accusation. Then start with what you feel and want, not with what she is doing wrong. That wording is half the outcome. The other half is keeping your mouth shut when she answers.',
      action:
        'If there is a topic you have been putting off: ask for the conversation today with the sentence "There is something I would like to talk about. When suits you?"',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'The list you did not know existed',
      insight:
        'Mental load is all the work that cannot be seen: remembering that the birthday present needs buying, that the dentist needs booking, that the sandwich bags have run out, that your mother needs calling back. It is not the task that is heavy. It is being the one who remembers it. In many couples that list sits mostly with the woman, even when the practical tasks are split evenly, and even when the man is completely sure he has it covered. He has his half of the list covered. He has just never seen the other half. Because the list is invisible, it is rarely acknowledged. The first step is to bring it into the light. Not to divide it to the minute, but so you can see how much she carries that you have never seen. Most people are surprised by the length. Sit down before you read.',
      action:
        'Ask her to write down the invisible list tonight, everything she walks around remembering, and read it without commenting. Then ask: "What on that list would you most like to be rid of?"',
      phaseTags: [],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: '"Just tell me what to do" is not help',
      insight:
        'There is a difference between helping and owning. If you help, she still has to remember the task, ask for it, explain how and check that it got done. She has saved her hands but not her head, and she has gained an employee who needs managing. If you own a task, it is yours from start to finish: you remember it, plan it, do it and fix it if it slips. She never has to think about it again. Pick something with a fixed rhythm and the whole chain: all the laundry, all the packed lunches, everything to do with the car, all the dealings with nursery or school. And do not ask "how do you want it done?". Work it out yourself. You have worked out harder things. That is the part that lightens her load, and it is the part most people skip.',
      action:
        'Pick one area today that you take over completely, tell her, and add: "You do not need to think about it any more. Or check."',
      phaseTags: [],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: 'Why the dishwasher joins the argument on day 25',
      insight:
        'The invisible list is long all month, but it feels longest in the week before the period. There is a reason: when progesterone and estrogen drop, sleep gets worse, tolerance for mess gets lower and the feeling of being alone with everything gets stronger. At the same time appetite goes up and energy goes down. Tasks that were neutral on day 10 become mountains on day 25. That is why the dishwasher turns up in arguments that week and almost never in the follicular phase. The dishwasher has not changed. The amplifier has. The smart response is not to debate whether the split is fair. You will not win that debate on day 25, and you probably do not deserve to win it either. Take on more on exactly those days, without turning it into a trade. Fairness is measured over a month, not over an evening.',
      action:
        'Check the app. If she is within a week of her period: take two of her regular tasks today and just say "that is done". Nothing more. No speech.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'She says it straight. Take it.',
      insight:
        'Around ovulation estrogen peaks, and that often brings more confidence, more appetite for contact and a clearer tongue. Many women say that in those days they say things straight out that they wrap up or hold back for the rest of the month. That is a gift to your communication, if you take it instead of ducking. If she gets more direct about something that annoys her, hear it as the clearest version you are going to get, not as a sudden change in how she sees you. You wanted a straight answer. Here it is. Use these days to ask about the things you have been quietly wondering about. The answers are often clearer now than on any other day of the month, so do not waste them asking where the remote is.',
      action:
        'Ask one question today that you have been sitting on: "Is there something you have wanted to tell me for a long time but have not got round to saying?"',
      phaseTags: ['ovulation'],
    },
    {
      id: dailyId(M, 15),
      month: M,
      day: 15,
      title: 'Desire has a curve. Ask about it.',
      insight:
        'Sex is one of the hardest things to talk about, even in long relationships, because a no feels like rejection and a wish feels like a demand. It helps to talk about desire as something that fluctuates, like energy and mood, and that both of you have a curve for. You too. Yours is just not the topic today. Around ovulation many feel more desire, in the luteal phase and during the period less, and some experience the opposite. Ask about her curve, not as a negotiation but out of curiosity: "When in the month do you feel most desire? And what helps when it is low?" Have the conversation on a good day, not in bed, and not after a no. There it is safe. In bed it is a negotiation, however curious you think you sound.',
      action:
        'Have the conversation today somewhere neutral, like on a walk: "I would like to understand your desire better across the month. Will you tell me about it?"',
      phaseTags: ['ovulation'],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'No is a complete sentence',
      insight:
        'A no to intimacy in the luteal phase or during the period is most often about body, tiredness and tenderness, not about you. That is hard to believe when you are lying there in the dark analysing, but it is true. A no said with guilt and received with disappointment quickly becomes a spiral: she starts avoiding situations where the question might come up, and you start reading distance into everything. Break the spiral by making the no safe. Say out loud that a no is a complete answer, and that you would rather have an honest no than a dutiful yes. Ask her to say what she would like instead: a hug, lying close, nothing. Closeness without expectation is the closeness that makes a later yes easy. Closeness with an agenda can be felt by everyone, even with the lights off.',
      action:
        'Say today, without it being a lead-up to anything: "You can always say no to me without explaining. I will not take it personally." And then do not.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'Feedback needs a ticket',
      insight:
        'There are things you want to say that are not criticism of her as a person, but can land that way: that she gets short when she is hungry, that she promises too much to other people, that she forgets to drink water. Unsolicited criticism activates defences in everyone. Try being told you snore while you are in the middle of something else. Criticism you have agreed to receive lands completely differently. So ask first: "Can I say something I have noticed? You are allowed to say no." If you get a yes, say one thing, concrete and without generalisations, and stop there. One. Not "and while we are at it". If you get a no, respect it and try another day. The follicular phase is the obvious time; the PMS days are not.',
      action:
        'If there is something you have noticed, ask today: "Can I share an observation? You decide whether now is the time." And accept the answer.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'Somebody has to go first. It is you.',
      insight:
        'All couples argue. What sets apart the couples who last is not the number of conflicts but how quickly and how well they repair afterwards. Repair is an attempt to restore contact: a hand on the shoulder, a cup of coffee put down in front of her, a sentence like "I do not want us to be like this, can we start again?" It does not require the disagreement to be resolved. It requires one of you to go first, and that does not have to be the one who lost. If the argument fell in the PMS days, it is often easiest to repair once the period has arrived and the hormones have settled; but do not wait longer than necessary. The longer the cold air, the more expensive the repair. Day one costs a cup of coffee. Day four costs a conversation. Day seven costs a weekend. Go now.',
      action:
        'If there is something unresolved between you: take the first step today with a small physical gesture and the sentence "can we start over?"',
      phaseTags: [],
    },
    {
      id: dailyId(M, 19),
      month: M,
      day: 19,
      title: 'Sorry without a "but"',
      insight:
        'A good apology has three parts: what you did, what it did to her, and what you will do differently. "Sorry I interrupted you while you were telling me about your day. It must have felt like I could not be bothered to listen. I will let you finish from now on." What ruins an apology is the add-ons: "but you were also...", "if you got upset", "I was just tired". Every "but" takes the apology back, and "sorry if" is not an apology. It is an accusation in nice wrapping paper. Keep it short, and do not expect forgiveness on the spot. She is allowed to need time, especially if it happened on a day when there was not much to withstand it with. The apology is yours. What she does with it is hers. You do not get a receipt.',
      action:
        'Is there anything from the past week you owe an apology for? Say it today with the three parts and without a single "but".',
      phaseTags: [],
    },
    {
      id: dailyId(M, 20),
      month: M,
      day: 20,
      title: 'Your arguments have a calendar',
      insight:
        'If you look back at your recent arguments, they are probably not spread evenly across the month. Many couples have a pattern: small things escalate in the last 4-6 days before the period, and the same small things slide by in the follicular phase. That does not mean the problems are imaginary. The uneven split is there on day 9 too; you just get away with it more easily. The amplifier is set differently, and that is the whole difference. Once you know the pattern, you can use it: agree that the recurring topics are taken in the follicular phase, and that in the luteal phase it is allowed to say "can we park that until next week?" without it counting as an escape. Note the days that went wrong in the app. After two months you see the pattern in black and white, and it is hard to take personally when it is sitting in a calendar.',
      action:
        'Look at the calendar together and find the last argument. Which day was it on? Agree on one sentence you are both allowed to say when the timing is bad.',
      phaseTags: ['luteal', 'follicular'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: 'A full stop can shout',
      insight:
        'A large share of couple communication happens in writing these days, and writing lacks everything that softens: tone, face, timing. "Ok." can be read five ways, and in the PMS days the worst one gets picked more often. You meant it neutrally. Nobody can see that. On the other hand a good message can carry a whole day: "Thinking of you, I am doing dinner tonight." A few simple rules help. Do not raise anything in writing that could be misread; call, or wait until you see each other. Put extra warmth into short replies in the last week ("ok, thanks for telling me" rather than "ok"). It costs four words. And ask what she reads into your messages. Many are surprised by how loud a full stop can be, and by how much offence a thumbs up can cause.',
      action:
        'Send one message today whose only purpose is to make her day easier, with no questions and nothing she has to answer.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 22),
      month: M,
      day: 22,
      title: 'Food first, then the conversation',
      insight:
        'Before you raise something, or before you react to something she has raised, three things are worth checking: Has she slept? Has she eaten? Are you within the last week before her period? Check the first two on yourself as well, by the way. Not to dismiss what she is saying, but to judge whether now is the moment the conversation has a chance. Hunger and poor sleep amplify irritability more than anything else, and both are common in the luteal phase. If the answer to the first two is no, start with food and rest, and have the conversation afterwards. Say it without turning it into a diagnosis: "Should we eat first and then talk about it?" is an act of care. "You are just hungry" is the opposite, and you know it.',
      action:
        'Do you have something to talk about today? First make sure you have both eaten, then ask: "Should we do it now or after food?"',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'You are not her spokesman',
      insight:
        'As you learn more about the cycle, it can be tempting to share it: explain to friends why she left early, or make a funny remark about the app. You have learned something new and you want to show it off. That is a fine impulse at a pub quiz and a bad one at a dinner table. Do not, unless she has said it is fine. The cycle is her body, and how open she is about it is her choice, not yours. Some talk freely about periods with everyone, others only with you, and many sit in between and depend on who is in the room. The same goes for the positive: "she is ovulating, that is why she is so cheerful" is a comment on her body, even if it is kindly meant. Ask her what is okay to say, and to whom, and then stick to it.',
      action:
        'Ask her today: "Is there anything about your cycle, or about me using the app, that you do not want me to mention to other people?"',
      phaseTags: [],
    },
    {
      id: dailyId(M, 24),
      month: M,
      day: 24,
      title: 'The children see more than you think',
      insight:
        'If you have children, sooner or later they notice that mum has days when she is in pain or tired. They typically notice before you do. How that gets explained is her decision, and it is worth making together when things are calm. Some want periods talked about openly and as something ordinary, because that removes shame for girls and boys alike. Others want it kept private, at least until the children ask themselves. Either way there is something you can do: show the children that you make allowances when somebody is in pain, without casting mum as the weak one. "Mum needs some quiet today, so we are making dinner" teaches them something about care that lasts a lifetime. It also teaches them that dad can cook, which for some children is new information.',
      action:
        'Ask her how she wants you to talk about periods with the children, if you have any. If not: talk about how you would want to do it one day.',
      phaseTags: ['menstrual'],
    },
    {
      id: dailyId(M, 25),
      month: M,
      day: 25,
      title: 'It is not an anecdote',
      insight:
        'There is a difference between being open about the cycle and sharing everything. What she tells you about pain, bleeding, desire, mood and anxiety, she tells you in confidence, even when that is never said out loud. There is no contract. It is understood, and it is the kind of understood you only discover once you have broken it. That applies with your family, your friends and your colleagues, and it applies to the serious things as well as the ones that would make a good story at Friday drinks. The same goes for the app: the calendar is her data, not a topic for the dinner table. Confidentiality is part of what makes it possible for her to tell you more next time. Break it once, and the door closes a little. Better to ask one time too many what may be passed on.',
      action:
        'Say it out loud today: "What you tell me about your body stays with me. Let me know if there is anything I should be especially careful with."',
      phaseTags: [],
    },
    {
      id: dailyId(M, 26),
      month: M,
      day: 26,
      title: '"It is nothing" is rarely nothing',
      insight:
        '"It is nothing" rarely means there is nothing. More often it means: I do not have the energy to explain, I do not think you will understand, or I do not want to be a bother. That applies especially to pain during the period and to vulnerability in the PMS days, which many women learned to play down long before they met you. Do not push, but do not close the door either. Say something that keeps it open without demands: "Okay. If it turns into something, I would like to hear about it, even in the middle of the night." And mean the part about the middle of the night. Then notice whether "it is nothing" keeps coming up about the same thing. Then it is something, and it deserves a calm question on a good day. Not an interrogation. One question.',
      action:
        'Next time she says "it is nothing": answer "okay, I am here if it turns into something", and then leave the subject alone without sulking.',
      phaseTags: ['menstrual', 'luteal'],
    },
    {
      id: dailyId(M, 27),
      month: M,
      day: 27,
      title: '"Things are fine" is not a compliment',
      insight:
        'Communication is not only handling the hard stuff. It is also getting the good stuff said, and many skip that, because "things are fine" feels like praise from the inside. It is not. Praise works best when it is concrete and about something she does or is, not about looks: "I saw how you handled your boss yesterday. That was impressively calm." In the follicular phase and around ovulation many have the most capacity to take it in and believe it, and that is also when you spot it most easily. But praise is an investment too: the appreciation built up on the good days is what stops criticism and a short fuse on the hard days from toppling anything. Five good remarks for every critical one is a relationship that lasts. Start counting.',
      action:
        'Give one concrete, genuine compliment today about something she has done this week. Not about looks, and not wrapped around a request.',
      phaseTags: ['follicular', 'ovulation'],
    },
    {
      id: dailyId(M, 28),
      month: M,
      day: 28,
      title: 'Day 1: one message, zero questions',
      insight:
        'The first day of the period often lands in the middle of a working day, and she cannot just go home. What helps is not a long conversation. It is knowing that somebody has noticed. A short message does it: "I saw it is day 1. I will do the shopping and dinner. Say if you want anything in particular." No questions about how she is feeling (she would then have to spend energy answering), no worried faces, just an action and an open door. If she has told you she does not want you commenting on day 1, respect that and do the practical things anyway, in silence. Both are communication. Silence with shopping bags in your hands is actually one of the best kinds.',
      action:
        'If it is day 1 or 2: send the short message with one concrete thing you are taking on. If not: write the message as a draft so it is ready.',
      phaseTags: ['menstrual'],
    },
    {
      id: dailyId(M, 29),
      month: M,
      day: 29,
      title: 'You get to say things too',
      insight:
        'Good communication goes both ways. If you only ask and never tell, you become a support function rather than a partner, and she feels it. Nobody wants to be in a relationship with customer service. Say how you are doing, even when it is "I am tired and need an hour to myself", and even on the days when she is struggling. That is not taking her space; it is giving her a human being to be with. Just be mindful of timing and size: the big worry about your job is better on a day in the follicular phase than on day 26. And when you are struggling, say what you need instead of waiting to be asked. What you ask of her, you have to dare yourself. Otherwise it is just an app you have read.',
      action:
        'Tell her one honest thing about how you are doing today and what you need. Short, and without it needing to be solved.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 30),
      month: M,
      day: 30,
      title: 'Month 2: you have learned to ask',
      insight:
        'This month has been about words and timing. You now know that questions beat guesses, that validation comes before solutions, and that the phase must never be used as a weapon, only as a reason to give more. You have learned to listen without a lawyer, to repair after an argument, to say sorry without a "but", and to ask permission before giving feedback. You have seen that the invisible list grows in the luteal phase, that ownership is something other than help, and that what she tells you is hers to pass on, not your Friday story. Most importantly: you have a weekly check-in and maybe a code word. Those are tools that keep working long after the app is closed. Which it should not be yet. There are ten months left.',
      action:
        'Ask her what has made the biggest difference in your communication this month. Listen to the answer. Then take the month quiz.',
      phaseTags: [],
    },
  ],
  weekly: [
    {
      id: weeklyId(M, 1),
      month: M,
      week: 1,
      title: 'Ask, listen, validate: the three moves you think you already know',
      body: [
        'In month 1 you learned the basic model: the phases, the hormones, that PMS amplifies rather than invents, and that timing conversations is free help. This month is about what comes after the model: how you actually talk to each other, day by day, when knowledge about phases has to turn into words that help. Three moves carry most of it: ask, listen, validate. They sound simple. They are. That is just not the same as you doing them.',
        'The first move is to ask instead of guessing. The more you learn about the cycle, the more tempting it becomes to reason from phase to need. She is on day 24, so she wants quiet. She is on day 12, so it is fine to bring up the finances. Sometimes you hit, and then you feel like a man with an app. But every time you guess wrong, she gets the experience of being read like a table rather than as a person. Questions do not have to be long. The best ones are short and give her two concrete options: "Company or quiet?", "Should I listen, or do you want suggestions?", "Do you want to talk about it now or after food?" A choice between two things takes almost no energy to answer, and that matters on the days when the energy is gone.',
        'The second move is to listen without defending. When she says something critical, your inner lawyer wakes up, and from the inside he sounds entirely reasonable: it was not meant like that, you had a reason, it was partly her fault too. But the moment you explain yourself, she has to fight to be heard on top of what she was already frustrated about, and the conversation changes subject from her experience to your innocence. Try the order: listen to the end, repeat the core in your own words, ask whether you have understood correctly. "So you feel that I disappear into my phone when the evenings get busy, and that you are left with it all on your own?" When she says yes, you have earned your version. Often the need for it has gone by then, because what she needed was to be understood, not to be right. The lawyer can go home. He did not have a case anyway.',
        'The third move is to validate before you fix. Validating is acknowledging that the feeling makes sense from her side, without necessarily agreeing with the conclusion. "It makes sense that you are fed up with it" can be said even if you see the matter differently. Many partners skip that step because they want to help, and to them helping means finding a solution. Preferably fast, preferably with a screwdriver. But a solution that comes before acknowledgement sounds like "your feeling is a problem that needs removing". In the week before the period, when the hormone drop makes everything more vulnerable, the need for validation is at its highest and the tolerance for being skipped over at its lowest. The order is everything: first "I get it", then "what do we do?", and often the first is enough.',
        'There is one more move, and it is about what not to say. You now know a lot about phases, and that knowledge can be used in two ways. "Is it PMS?" uses the phase to explain her away; that is the kind of phase knowledge no woman has asked for. "I can see it is day 25, can I take a bit more off your plate today?" uses the phase as a reason to give more. The rule is simple and unbreakable: the phase must never be mentioned as an argument in a disagreement or as an answer to a feeling. It may be the reason you cook, move an appointment or hold back a remark. If in doubt, ask yourself whether the sentence is about what she is or about what you are going to do. If you are still in doubt, cook.',
        'The question "do you want suggestions, or should I just listen?" you know from month 1. The hard part is not asking it but doing what she answers. If she says "listen", your brain will produce solutions anyway, numbered and ready to use. Set them aside and ask questions instead: "What was the worst part of it?" "What did you do then?" If she says "suggestions", offer one, not five, and ask whether it fits. The answer changes with the day and with the phase, so ask every time instead of remembering the answer from last time.',
        'The task for the week is small: pick one of the three moves and use it deliberately every day this week. Notice what happens to the conversations. Most people find they get shorter, not longer, because nobody has to fight to be heard any more. It is the only way you will ever get shorter conversations, so take it.',
      ],
      conversationQuestion:
        'When did you last feel really heard by me, and what did I do there? And what do I typically do that makes you stop telling me things?',
      sources: [NHS_PMS],
    },
    {
      id: weeklyId(M, 2),
      month: M,
      week: 2,
      title: 'The invisible list and the weekly check-in',
      body: [
        'There is a kind of work in most homes that nobody sees, because it happens inside one head. Remembering that the birthday present needs buying by Friday. Knowing that the boots have got too small. That the dentist needs booking, that your mother has called, that the sandwich bags have run out. It is called mental load, and in many couples it sits mostly with the woman, even when the practical tasks are split roughly evenly, and even when the man says with full conviction "but I do half". He does half of what can be seen. This week is about bringing the rest into the light, and about building the conversation that keeps it visible.',
        'The heavy part of the invisible list is not the tasks. It is being the one who remembers them, plans them, delegates them and checks that they got done. When you "help", she saves her hands but not her head: she still has to ask, explain how and follow up. That is why "just tell me what to do" is a sentence that frustrates more than it helps. It sounds generous. It just moves the work of distributing the work back to her, and now she has an employee as well.',
        'The alternative is ownership. A task you own is yours from start to finish: you remember it, plan it, do it and fix it if it slips, and she never has to think about it again. Pick something with a fixed rhythm and the whole chain: all the laundry, all the packed lunches, everything to do with the car, all the dealings with nursery or school. And resist the temptation to ask how she wants it done. Work it out yourself. You have assembled furniture without reading the instructions; you can work out packed lunches. That is exactly the part that lightens her load. If it gets done a bit differently from how she would do it, that is the price of it no longer being hers.',
        'The list is long all month, but it feels longest in the week before the period, and that is no coincidence. When progesterone and estrogen drop, sleep gets worse, tolerance for mess and noise gets lower and the feeling of being alone with it gets stronger. Tasks that were neutral on day 10 become mountains on day 25. That is why the dishwasher turns up in arguments that week and almost never in the follicular phase. The dishwasher is the same. The amplifier has been turned up. The smart response is not to debate whether the split is fair right now. It is to take on more on exactly those days, without keeping score, and to measure fairness over a month rather than over an evening. She gets a period, you do not; that is an asymmetry, and a fair split accounts for it. A spreadsheet does not.',
        'What keeps the list visible is a fixed conversation. A weekly fifteen-minute check-in, same day every week, no phones, three questions: What went well this week? What was hard? What do you need in the coming week? The last question is the most important, because the answer often follows the cycle: "My period is due Wednesday, so Thursday evening I would like to be off duty from everything." That is a sentence that only gets said if somebody asks, and that otherwise ends up as an argument on Thursday evening with you standing confused, holding a saucepan. The check-in must not become a place where everything has to be solved. It is a place where things get said while they are small.',
        'For the days when she has no energy to explain, an agreed signal helps. A word ("grey day"), a number from 1 to 5, an emoji or a particular mug put out on the counter. You agree the meaning in advance, when you are both calm: "When I send it, I need you to take the practical stuff and not ask questions." The signal removes the need to explain and defend yourself on a day with nothing in the tank for it, and it gives you a clear task instead of a guess. Many couples find the signal gets used the other way too: you can have grey days, and she can take over. You are allowed to need quiet. You are just not allowed to expect anyone to guess it.',
        'The task for the week: ask her to write down the invisible list, everything she walks around remembering, and read it without commenting. Not "that is not so bad", not "I could have done that". Just read. Then pick one area you take over completely, and put the first check-in in the calendar. Three concrete steps that together move more than a month of good intentions.',
      ],
      conversationQuestion:
        'What is on your invisible list that I have never seen? And which area would lighten your load the most if I took it over completely?',
      sources: [NHS_PMS],
    },
    {
      id: weeklyId(M, 3),
      month: M,
      week: 3,
      title: 'Arguments: patterns, repair and apologies without a "but"',
      body: [
        'All couples argue. It is not the number of conflicts that predicts whether a relationship lasts, but how they play out, and above all how quickly and how well they get repaired afterwards. That is good news if you were planning to get better at arguing. This week we look at three things: the pattern the cycle draws in your conflicts, the repair that restores contact, and the apology that actually works.',
        'If you look back at your recent arguments, they are probably not spread evenly across the month. Most couples have a pattern: small things escalate in the last four to six days before the period, and the same small things slide by in the follicular phase. That does not mean the problems are imaginary. The irritation over the uneven split is there on day 9 too; you just get away with a remark. On day 26 the amplifier is set higher, sleep is worse and tolerance lower, so the same sentence lands harder and gets answered faster. Once you know the pattern, you can use it deliberately: recurring topics are taken in the follicular phase, and in the luteal phase either of you is allowed to say "can we park that until next week?" without it counting as an escape. Note the days that went wrong in the app. After two months you see the pattern in black and white, and it is harder to take personally when it is sitting in a calendar.',
        'Before you raise something, or react to something she has raised, three things are worth checking: Has she slept? Has she eaten? Are you within the last week before her period? Not to dismiss what she is saying, but to judge whether the conversation has a chance right now. Hunger and poor sleep amplify irritability more than anything else, and both are common in the luteal phase. Check the first two on yourself, by the way, before you start feeling clever. If the answer is no, start with food and rest. "Should we eat first and then talk about it?" is an act of care, not a brush-off, when it is said without turning her state into a diagnosis. "You are just hungry" is a diagnosis. You are not a doctor.',
        'When it has gone wrong anyway, repair comes next. Repair is any attempt to restore contact before the disagreement is resolved: a hand on the shoulder, a cup of coffee put down in front of her, a sentence like "I do not want us to be like this. Can we start again?" It requires one of you to go first, and that does not have to be the one who is most right. In fact it is rarely the one who is most right, and that is a lesson in itself. If the argument fell in the PMS days, it is often easiest to repair once the period has arrived and the hormones have hit the bottom; but do not wait longer than necessary. The longer the cold air, the more expensive the repair, and the more the story about what the other one meant keeps growing.',
        'Sometimes repair needs an apology, and a good apology has three parts: what you did, what it did to her, and what you will do differently. "Sorry I interrupted you while you were telling me about your day. It must have felt like I could not be bothered to listen. I will let you finish from now on." What ruins an apology is the add-ons: "but you were also...", "if you got upset", "I was just tired". Every "but" takes the apology back. And "sorry if you felt..." is not an apology, it is a claim that the problem is her feeling, wrapped up as politeness. Keep it short. Do not expect forgiveness on the spot; she is allowed to need time. The apology is yours, what she does with it is hers. You do not get a receipt, and you do not ask for one.',
        'The last move is about preventing the argument. There are things you want to say that are not criticism of her as a person, but can land that way. Unsolicited criticism activates defences in everyone, including you, as you know if anyone has ever commented on your driving. Criticism you have agreed to receive lands differently. So ask: "Can I say something I have noticed? You are allowed to say no." If you get a yes, say one thing, concrete, without "always" and "never", and stop there. If you get a no, respect it and try another day. The follicular phase is the obvious time. And remember that it works the other way too: she may ask permission as well, and you may say "not today" as well.',
        'The task for the week: find your most recent argument in the calendar and see which day it fell on. Agree on one sentence you are both allowed to use when the timing is bad, and one small gesture that means "can we start over?". Then the tools are in place before they are needed. And they will be needed. That is the one thing you can be sure of.',
      ],
      conversationQuestion:
        'What do I typically do after an argument that makes it harder for us to find our way back to each other? And what would you wish I did instead?',
      sources: [NHS_PMS],
    },
    {
      id: weeklyId(M, 4),
      month: M,
      week: 4,
      title: 'Desire, privacy and everyone else',
      body: [
        'The last topics of this month are the ones most couples talk about least: desire, and what may be said to whom. Both are about trust, and both get easier when they are raised on a good day instead of at the moment they become a problem. That moment is typically 11 pm in the bedroom, and nobody has ever got wiser there.',
        'Sex is one of the hardest things to talk about, even in long relationships, because a no feels like rejection and a wish feels like a demand. It helps to talk about desire as something that fluctuates, like energy and mood, and that you both have a curve for. Around ovulation many feel more desire, in the luteal phase and during the period less, and some experience the opposite or something else entirely. Ask about her curve out of curiosity, not as a negotiation: "When in the month do you feel most desire? What helps when it is low? Is there anything that switches it off that I do not know about?" Be prepared for the answer to the last one to be about you. Have the conversation on a walk or at the kitchen table, not in bed and not after a no. That is where it is safe.',
        'A no in the luteal phase or during the period is most often about body, tiredness and tenderness, not about you. But a no said with guilt and received with disappointment quickly becomes a spiral: she starts avoiding situations where the question might come up, and you start reading distance into everything, including the way she puts the milk back. Break the spiral by making the no safe. Say out loud that a no is a complete answer, and that you would rather have an honest no than a dutiful yes. Ask her to say what she would like instead: a hug, lying close, nothing. Closeness without expectation is the closeness that makes a later yes easy. And notice whether it is always you who asks. If so, try a month where you only receive. It is harder than it sounds.',
        'Then there is everyone else. The more you know about the cycle, the more tempting it becomes to share it: explain to friends why she left early, make a funny remark about the app, or say "she is ovulating, that is why she is so cheerful". You have learned something, and it is tempting to perform it. Do not, unless she has said it is fine. The cycle is her body, and how open she is about it is her choice. Some talk freely about periods with everyone, others only with you, and many sit in between and depend on who is in the room. That includes the kindly meant. A comment on her phase in company is a comment on her body, whichever way it points. You are not her press officer.',
        'If you have children, sooner or later they notice that mum has days with pain or tiredness. They usually notice before you do. How that gets explained is her decision, and it is worth making together while things are calm. Some want periods talked about openly and as something ordinary, because that removes shame for girls and boys alike. Others want it kept private, at least until the children ask themselves. Either way you can show the children how to make allowances when somebody is in pain, without casting mum as the weak one. "Mum needs some quiet today, so we are making dinner" teaches them something about care that lasts a lifetime.',
        'Finally, what stays between the two of you. What she tells you about pain, bleeding, desire, mood and anxiety, she tells you in confidence, even when that is never said out loud. That applies with your family, your friends and colleagues, and it applies to the serious things as well as the ones that would make a good story at Friday drinks. The calendar in the app is her data, not a topic for the dinner table. Confidentiality is what makes her tell you more next time. Break it once, and the door closes a little. Better to ask one time too many what may be passed on. That feels awkward for three seconds. The alternative feels awkward for three months.',
        'And one last thing, which the whole month has been about without saying so: communication goes both ways. If you only ask and never tell, you become a support function rather than a partner, and nobody wants to be in a relationship with customer service. Say how you are doing, even when it is "I am tired and need an hour to myself". Choose timing and size with care, but say it. What you ask her to dare, you have to dare yourself.',
      ],
      conversationQuestion:
        'Is there anything about your cycle, your desire or your body that you would like me to keep entirely to myself? And is there anything you wish I dared to ask you about?',
    },
  ],
  wrap: {
    id: wrapId(M),
    month: M,
    title: 'Month 2: Communication and support',
    summary: [
      'This month was about turning knowledge into words, and about discovering that the words are the hard part. The three basic moves carry most of it: ask instead of guessing, listen to the end without calling in your inner lawyer, and validate the feeling before you suggest a solution. On top of them sits the rule that must never be broken: the phase may be used as a reason to give more, never as an argument in a disagreement or as an answer to a feeling. The app is not a weapon. It is a shopping list.',
      'You have learned that the invisible list is the heaviest part of the housework, that it grows in the luteal phase, and that ownership lightens the load where "just tell me" does not. You have seen how arguments follow the calendar of the cycle, how to repair before the disagreement is resolved, what an apology without a "but" looks like, and why feedback lands better when you have asked permission. And you have talked about desire and no on a good day, and about what is hers to share with friends, children and family. Not your Friday story.',
      'Next month we go deep into the period itself: pain, bleeding, energy and what you can concretely do on the days when it is hardest. Dig out the heating pad now.',
    ],
    keepDoing: [
      'Keep the fifteen-minute weekly check-in: what went well, what was hard, what do you need? No phones.',
      'Ask "ear or ideas?", and then actually do what she answers.',
      'Use your signal for the hard days, and take over without questions when it comes.',
      'Own at least one area of the home completely, from remembering to doing. Without asking how.',
      'Ask permission before giving feedback, and apologise without a "but".',
      'Keep what she tells you about her body between the two of you, unless she says otherwise.',
    ],
    quiz: [
      {
        question:
          'She comes home on day 25, drops her bag and says: "I am so sick of my boss." What helps most?',
        options: [
          '"Have you tried talking to HR about it?"',
          '"It makes sense that you are sick of it. Do you want an ear or ideas?"',
          '"It is probably partly because you are a bit PMS-y today."',
          '"That does not sound so bad."',
        ],
        correctIndex: 1,
        explanation:
          'Validate first, then ask what she needs. Solutions before acknowledgement sound like the feeling is the problem. And the phase as an explanation for a feeling is the sentence that puts you on the sofa for the night.',
      },
      {
        question:
          'You have noticed that she promises too much to other people and burns out from it. When and how do you say it?',
        options: [
          'Day 26 in the evening, right after it has happened again',
          'In front of friends, as a loving joke',
          'In the follicular phase, after asking "can I share an observation?"',
          'Not at all, it is her business',
        ],
        correctIndex: 2,
        explanation:
          'Feedback you have agreed to receive lands completely differently from unsolicited criticism. Timing it in the follicular phase gives it the best chance. In front of friends gives it the worst.',
      },
      {
        question:
          'You argued last night, and there is cold air today. Neither of you has said anything. What is best?',
        options: [
          'Wait for her to come first; she started it',
          'Write a long message with your version of what happened',
          'Make a small gesture, like a cup of coffee, and say "can we start over?"',
        ],
        correctIndex: 2,
        explanation:
          'Repair requires one person to go first, and it does not need to wait for the disagreement to be resolved. The longer the cold air, the more expensive it gets. Day one costs a cup of coffee.',
      },
      {
        question: 'Which apology works best?',
        options: [
          '"Sorry if you got upset."',
          '"Sorry, but you were pretty harsh too."',
          '"Sorry I interrupted you. It must have felt like I could not be bothered to listen. I will let you finish from now on."',
          '"Okay, okay, sorry then."',
        ],
        correctIndex: 2,
        explanation:
          'A good apology has three parts: what you did, what it did to her, and what you will do differently. "If" and "but" take it back. "Okay, okay" is not an apology, it is a surrender with a bad attitude.',
      },
      {
        question:
          'She says: "I have to remind you of everything. I am tired of being the one who remembers." What lightens the load most in the long run?',
        options: [
          'Say "just tell me what to do and I will do it"',
          'Take over one area completely, from remembering to doing, without her having to check',
          'Make a shared list that she keeps updated',
          'Explain that you have a lot on your plate too',
        ],
        correctIndex: 1,
        explanation:
          'The heavy part is being the one who remembers. Ownership takes the whole chain off her. "Just tell me what to do" sounds generous and puts the work of distributing the work back on her, now with an employee on top.',
      },
      {
        question:
          'At a dinner with friends, a friend asks why she went home early. What do you do?',
        options: [
          '"She has PMS, you know how it is."',
          '"She was tired", and change the subject. The rest is hers to share.',
          'Tell them about the app and that she is on day 26',
          'Make a joke about it and hope nobody tells her',
        ],
        correctIndex: 1,
        explanation:
          'How open she is about her cycle is her choice. A comment on her phase in company is a comment on her body, even when it is kindly meant. And somebody always tells her.',
      },
    ],
  },
};
