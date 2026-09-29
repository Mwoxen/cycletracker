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
    'Learn to ask instead of guessing, to listen before you fix, and to use what you know about the phases to give more, never as an argument.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'Ask, instead of guessing',
      insight:
        'After just one month you already know a fair amount about the cycle. That is good, and it is also a trap. The more you know, the more tempting it becomes to guess: she is quiet, so she must be in the luteal phase and want to be left alone. But knowledge about phases is knowledge about averages, and she is not an average. On the same day she might want company or peace, help or to be left alone. The only thing that works every time is asking. A good question is short, concrete and easy to answer: "Do you want company, or should I give you some space?" That is not a sign you do not understand her. It shows you take her seriously as more than her phase.',
      action:
        'Ask one concrete question today instead of guessing: "What do you need most right now: company, quiet, or a hand with something?"',
      phaseTags: [],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: '"Solutions or an ear?" in practice',
      insight:
        'You know the question from month 1: "Do you want suggestions, or should I just listen?" Now we go one layer deeper, because the hard part is not asking, it is doing what she answers. If she says "just listen", your brain will produce solutions anyway, and they will push to get out. Set them aside. Nod, ask "what was the worst part of it?", and let her finish. If she says "suggestions", offer one, not five, and ask whether it fits. The answer shifts with the phase: in the follicular phase many want a sparring partner, in the luteal phase more often an ear. And it shifts from day to day. That is why you ask every time, rather than remembering the answer from last time.',
      action:
        'Next time she tells you about something hard: ask "ear or suggestions?", and if the answer is ear, ask only questions for ten minutes.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 3),
      month: M,
      day: 3,
      title: 'Validate before you fix',
      insight:
        'To validate is to acknowledge that the feeling makes sense before you do anything about it. It is not the same as agreeing with everything. "It makes sense that you are fed up with it" can be said even if you see the matter differently. When hormones drop in the week before the period, the need for validation is at its highest and the tolerance for being skipped over at its lowest. If you jump straight to the solution, she hears: your feeling is a problem that needs to go away. If you validate first, the pulse comes down, and a solution can be found together afterwards. The order is everything: first "I understand", then "what do we do?". Often the first is enough and the second becomes unnecessary.',
      action:
        'Use the sentence "it makes sense that you feel that way" once today, without following it up with a "but".',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'Name the phase without weaponising it',
      insight:
        'There is a world of difference between "is it PMS?" and "I can see in the app that it is day 25, do you want me to take a bit more off your plate today?". The first sentence uses the phase to explain her away. The second uses it to offer help. The rule is simple: the phase must never be mentioned as an argument in a disagreement, and never as a reply to a feeling. It may be mentioned as the reason you do something: cook, move an appointment, hold back on criticism. If in doubt, ask yourself whether the sentence is about what she is, or about what you are going to do. Only the latter is any use.',
      action:
        'Say one sentence today that uses the phase as the reason for your own action: "I am doing dinner this week, you do not need to think about it."',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'A signal for the hard days',
      insight:
        'Many couples wear each other down on the days when she is struggling but has no energy to explain it. She gets short, you get confused, and nobody says what is actually wrong. An agreed code fixes that. It can be a word ("grey day"), a number from 1 to 5, an emoji or a particular mug put out on the counter. The meaning is agreed in advance, when you are both calm: "When I say it, I need you to take the practical stuff and not ask questions." The signal removes the need to explain and defend on a day when there is nothing left for that. It gives her an easy way out and you a clear job.',
      action:
        'Suggest a signal today, while you are both fine: "Should we have a word for the days when you just need me to take over?"',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: 'Listen without defending',
      insight:
        'When she says something critical, your body reacts as if you are under attack. The first instinct is to explain why it is not true, or was not meant that way. It feels fair, but it stops the conversation, because now she has to fight to be heard on top of what already frustrated her. Try instead to listen to the end, repeat the core in your own words ("so you feel that I disappear when things get hard") and ask whether you have understood correctly. Only when she says yes have you earned your version, and often the need for it has gone by then. In the luteal phase, when stress tolerance is lowest, that order decides whether it becomes a conversation or a fight.',
      action:
        'Next time you get criticism: repeat her point in your own words and ask "have I understood that right?" before you say anything about yourself.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'Company or quiet?',
      insight:
        'The first days of the period mean low energy and often pain, and the need for closeness varies enormously. Some want a body next to them on the sofa, others want the house to themselves for an hour. It is easy to guess wrong in both directions: sitting close when she wants quiet, or backing off when she needed you to stay. Ask directly, and make it easy to answer: "Do you want company on the sofa, or should I go for a walk so you get some quiet?" A choice between two concrete things is easier to answer than an open "what do you want?" when the body hurts and the energy is spent.',
      action:
        'If she has her period: give her the choice between two concrete things today. If not: ask what she typically prefers on day 1 and 2.',
      phaseTags: ['menstrual'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: 'Silence is not rejection',
      insight:
        'During the period, and again in the last days before it, many withdraw into themselves. Fewer words, shorter answers, more phone, less eye contact. To a partner it can feel like cold air, and the temptation is to ask "is something wrong?" five times, which only makes it worse. Most often it is nothing between the two of you. It is a body spending its energy on pain and fatigue, with nothing left over for being sociable. The best response is to say it out loud once, calmly and without demands: "I can tell you need some quiet. I am here when you want me." And then actually be there, without keeping score.',
      action:
        'Say once today: "You do not have to be sociable with me today, I am here anyway." And then do not ask again.',
      phaseTags: ['menstrual'],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'The weekly check-in',
      insight:
        'Most important conversations in a relationship happen when something has gone wrong. That makes them loaded and badly timed. A fixed, short check-in once a week changes that. Fifteen minutes, same day, three questions: What went well this week? What was hard? What do you need in the coming week? The last question is gold, because the answer often depends on where in the cycle she is heading. "My period is due Wednesday, so Thursday evening I would like to be off duty from everything" is a sentence that only gets said if someone asks. The check-in should be phone-free and without an agenda of solving everything.',
      action:
        'Suggest a fixed time for a fifteen-minute weekly check-in, and put it in the calendar for the next four weeks.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 10),
      month: M,
      day: 10,
      title: 'How to open the big conversation',
      insight:
        'You know from month 1 that the follicular phase is the best time for hard topics. But a good time is not enough if the conversation starts wrong. Avoid dropping the topic into the middle of something else ("while we are at it, we also need to talk about money"). Ask for the conversation instead: "There is something I would like to talk about, it is about our finances. Does tonight work, or would the weekend be better?" That gives her a chance to prepare and pick her moment, and it signals that the topic matters, rather than being an accusation. Then start with what you feel and want, not with what she is doing wrong. That phrasing is half the outcome.',
      action:
        'If there is a topic you have been putting off: ask for the conversation today with the sentence "There is something I would like to talk about. When suits you?"',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'The invisible list',
      insight:
        'Mental load is all the work that cannot be seen: remembering that a birthday present needs buying, that the dentist needs booking, that the sandwich bags have run out, that your mother needs calling back. It is not the task that is heavy, it is being the one who remembers it. In many couples that list sits mostly with the woman, even when the practical chores are split evenly. And because the list is invisible, it is rarely acknowledged. The first step is to bring it into the light. Not to divide it to the minute, but so that you can see how much she carries that you have never seen. Most people are surprised by the length.',
      action:
        'Ask her to write down the invisible list tonight, everything she walks around remembering, and read it without commenting. Then ask: "What on that list would you most like to be rid of?"',
      phaseTags: [],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: 'Take ownership, not tasks',
      insight:
        'There is a difference between helping and owning. If you help, she still has to remember the task, ask for it, explain how and check that it got done. She has saved her hands but not her head. If you own a task, it is yours from start to finish: you remember it, plan it, do it and fix it if it slips. She never has to think about it again. Pick something with a fixed rhythm and the whole chain attached: all the laundry, all the packed lunches, everything to do with the car, all contact with the children\'s school or nursery. And avoid asking "how do you want it done?". Work it out yourself; that is the part that lightens the load.',
      action:
        'Pick one area today that you take over completely, tell her, and add: "You do not need to think about it any more. Not even to check."',
      phaseTags: [],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: 'Invisible work grows in the luteal phase',
      insight:
        'The invisible list is long all month, but it feels longest in the week before the period. There is a reason: when progesterone and estrogen fall, sleep gets worse, tolerance for mess gets lower and the feeling of being alone with everything gets stronger. At the same time appetite goes up and reserves go down. Tasks that were neutral on day 10 become mountains on day 25. That is why the dishwasher shows up in arguments that week and almost never in the follicular phase. The smart response is not to debate whether the split is fair, but to take more on exactly those days, without making it a trade. Fairness is measured over a month, not over an evening.',
      action:
        'Check the app. If she is within a week of her period: take two of her regular chores today and say only "that is done", nothing more.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'When she says it straight',
      insight:
        'Around ovulation estrogen peaks, and that often brings more confidence, more appetite for contact and a plainer tongue. Many women say that in those days they say things straight out that they wrap up or hold in for the rest of the month. That is a gift to your communication, if you accept it. If she gets more direct about something that annoys her, hear it as the clearest version you are ever going to get, not as a sudden change in how she sees you. Use these days to ask about the things you have been wondering about. The answers are often clearer now than on any other day of the month.',
      action:
        'Ask one question today that you have been saving up: "Is there something you have wanted to say to me for a long time but have not got round to?"',
      phaseTags: ['ovulation'],
    },
    {
      id: dailyId(M, 15),
      month: M,
      day: 15,
      title: 'Talk about desire, not just sex',
      insight:
        'Sex is one of the hardest things to talk about, even in long relationships, because a no feels like rejection and a wish feels like a demand. It helps to talk about desire as something that fluctuates, like energy and mood, and that both of you have a curve for. Around ovulation many feel more desire, in the luteal phase and during the period less, and some experience the opposite. Ask about her curve, not as a negotiation but out of curiosity: "When in the month do you feel the most desire? And what helps when it is low?" Have the conversation on a good day, not in bed, and not after a no. That is where it is safe.',
      action:
        'Have the conversation today somewhere neutral, like a walk: "I would like to understand your desire across the month better. Will you tell me about it?"',
      phaseTags: ['ovulation'],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'Saying no and hearing no',
      insight:
        'A no to intimacy in the luteal phase or during the period is mostly about body, tiredness and soreness, not about you. But a no said with guilt and a no received with disappointment quickly becomes a spiral: she starts avoiding situations where the question might come up, and you start reading distance into everything. Break the spiral by making the no safe. Say out loud that a no is a complete answer, and that you would rather have an honest no than a dutiful yes. And ask her to say what she would like instead: a hug, lying close, nothing. Closeness without expectation is the closeness that makes a later yes easy.',
      action:
        'Say today, without it being a lead-up to anything: "You can always say no to me without explaining. I will not take it personally."',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'Ask permission to give feedback',
      insight:
        'There are things you want to say that are not criticism of her as a person, but can land that way: that she gets short when she is hungry, that she promises too much to other people, that she forgets to drink water. Criticism that arrives uninvited activates defences in everyone. Criticism you have agreed to receive lands completely differently. So ask first: "Can I say something I have noticed? You are allowed to say no." If you get a yes, say one thing, concretely and without generalisations, and stop there. If you get a no, respect it and try another day. The follicular phase is the obvious time; the PMS days are not.',
      action:
        'If there is something you have noticed, ask today: "Can I share an observation? You decide whether now is the time."',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'Repair after a fight',
      insight:
        'All couples fight. What sets apart the couples that last is not the number of conflicts but how quickly and how well they repair afterwards. Repair is an attempt to restore contact: a hand on the shoulder, a cup of coffee put down beside her, a sentence like "I do not want us to be like this, can we start again?" It does not require the disagreement to be resolved. It requires one of you to go first. If the fight fell in the PMS days, it is often easiest to repair once the period has arrived and the hormones have settled; but do not wait longer than necessary. The longer the cold air, the more expensive the repair.',
      action:
        'If there is something unfinished between you: make the first move today with a small physical gesture and the sentence "can we start over?"',
      phaseTags: [],
    },
    {
      id: dailyId(M, 19),
      month: M,
      day: 19,
      title: 'Apologising well',
      insight:
        'A good apology has three parts: what you did, what it did to her, and what you will do differently. "Sorry I interrupted you while you were telling me about your day. It must have felt like I could not be bothered to listen. I will let you finish from now on." What ruins an apology is the additions: "but you also...", "if you got upset", "I was just tired". Every "but" takes the apology back. Keep it short, and do not expect forgiveness on the spot. She is allowed to need time, especially if it happened on a day when she had little to withstand it with. The apology is yours; what she does with it is hers.',
      action:
        'Is there something from the past week you owe an apology for? Say it today with the three parts and without a single "but".',
      phaseTags: [],
    },
    {
      id: dailyId(M, 20),
      month: M,
      day: 20,
      title: 'Know your conflict pattern',
      insight:
        'If you look back at your recent fights, they are probably not spread evenly across the month. Many couples have a pattern: small things escalate in the last 4-6 days before the period, and the same small things slide by in the follicular phase. That does not mean the problems are imaginary. It means the amplifier is set differently. Once you know the pattern, you can use it: agree that the recurring topics are taken in the follicular phase, and that in the luteal phase it is allowed to say "can we park this until next week?" without it being an escape. Note the days it went wrong in the app. After two months you will see the pattern in black and white.',
      action:
        'Look at the calendar together and find the last fight. Which day was it on? Agree on one sentence you are both allowed to say when the timing is bad.',
      phaseTags: ['luteal', 'follicular'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: 'Text messages on hard days',
      insight:
        'A large share of couple communication happens in writing these days, and writing lacks everything that softens: tone, face, timing. "Ok." can be read five ways, and in the PMS days the worst one gets picked more often. On the other hand a good message can carry a whole day: "Thinking of you, I am doing dinner tonight." A few simple rules help. Avoid raising anything in writing that could be misread; call, or wait until you see each other. Put extra warmth into short replies in the last week ("ok, thanks for telling me" rather than "ok"). And ask what she reads into your messages. Many are surprised by how loud a full stop can be.',
      action:
        'Send one message today whose only purpose is to make her day easier, with no questions and nothing she has to reply to.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 22),
      month: M,
      day: 22,
      title: 'Check the basics before the talk',
      insight:
        'Before you raise something, or before you react to something she has raised, three things are worth checking: Has she slept? Has she eaten? Are you within the last week before her period? Not to dismiss what she says, but to judge whether now is the moment the conversation has a chance. Hunger and poor sleep amplify irritability more than anything else, and both are common in the luteal phase. If the answer to the first two is no, start with food and rest, and have the talk afterwards. Say it without turning it into a diagnosis: "Shall we eat first and then talk about it?" is an act of care, not a brush-off.',
      action:
        'Do you have something to talk about today? First make sure you have both eaten, and ask: "Shall we do it now or after dinner?"',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'In front of friends: her call',
      insight:
        'As you learn more about the cycle, it can be tempting to share it: explaining to friends why she left early, or making a funny remark about the app. Do not, unless she has said it is fine. The cycle is her body, and how open she is about it is her choice, not yours. Some talk freely about periods with everyone, others only with you, and many sit in between and depend on who is in the room. That includes the positive: "she is ovulating, that is why she is so cheerful" is a comment on her body, even when kindly meant. Ask her what is okay to say, and to whom, and then stick to it.',
      action:
        'Ask her today: "Is there anything about your cycle, or about me using the app, that you do not want me to mention to other people?"',
      phaseTags: [],
    },
    {
      id: dailyId(M, 24),
      month: M,
      day: 24,
      title: 'With children in the house',
      insight:
        'If you have children, sooner or later they notice that mum has days when she is in pain or tired. How that is explained is her decision, and it is worth making together when things are calm. Some want periods talked about openly and matter-of-factly, because it removes shame for girls and boys alike. Others want it kept private, at least until the children ask themselves. Either way there is something you can do: show the children that you make allowances when someone is in pain, without making mum the weak one. "Mum needs some quiet today, so we are making dinner" teaches them something about care that lasts a lifetime.',
      action:
        'Ask her how she wants you to talk about periods with the children, if you have any. If not: talk about how you would want to do it one day.',
      phaseTags: ['menstrual'],
    },
    {
      id: dailyId(M, 25),
      month: M,
      day: 25,
      title: 'What stays between you',
      insight:
        'There is a difference between being open about the cycle and sharing everything. What she tells you about pain, bleeding, desire, mood and anxiety, she tells you in confidence, even when that is not said explicitly. That applies with your family, your friends and your colleagues, and it covers both the serious and the stuff that would make a good anecdote. The same goes for the app: the calendar is her data, not a topic for the dinner table. Confidentiality is part of what makes it possible for her to tell you more next time. Break it once, and the door closes a little. Better to ask once too often what may be passed on.',
      action:
        'Say it out loud today: "What you tell me about your body stays with me. Let me know if there is anything I should be especially careful with."',
      phaseTags: [],
    },
    {
      id: dailyId(M, 26),
      month: M,
      day: 26,
      title: 'When she says "it is nothing"',
      insight:
        '"It is nothing" rarely means there is nothing. More often it means: I have no energy to explain, I do not think you will understand, or I do not want to be a bother. That is especially true of pain during the period and of vulnerability in the PMS days, which many women have learned to play down. Do not push, but do not close the door either. Say something that keeps it open without demands: "Okay. If it turns into something, I would like to hear about it, even in the middle of the night." And notice whether "it is nothing" keeps coming up about the same thing. Then it is something, and it deserves a calm question on a good day.',
      action:
        'Next time she says "it is nothing": reply "okay, I am here if it turns into something", and then leave the subject alone without sulking.',
      phaseTags: ['menstrual', 'luteal'],
    },
    {
      id: dailyId(M, 27),
      month: M,
      day: 27,
      title: 'Praise that lands',
      insight:
        'Communication is not only handling the hard stuff. It is also getting the good stuff said. Praise works best when it is concrete and about something she does or is, not about looks: "I saw how you handled your boss yesterday. That was impressively calm." In the follicular phase and around ovulation many have the most capacity to take it in and believe it, and that is also when you spot it most easily. But praise is also an investment: the appreciation built up on the good days is what keeps criticism and a short fuse on the hard days from toppling anything. Five good remarks for every critical one is a relationship that lasts.',
      action:
        'Give one concrete, genuine piece of praise today about something she did this week. Not about looks, and not wrapped around a request.',
      phaseTags: ['follicular', 'ovulation'],
    },
    {
      id: dailyId(M, 28),
      month: M,
      day: 28,
      title: 'The short message on day 1',
      insight:
        'The first day of the period often lands in the middle of a workday, and she cannot just go home. What helps is not a long conversation but knowing that someone has noticed. A short message does it: "I saw it is day 1. I will do the shopping and dinner. Let me know if you want anything in particular." No questions about how she is feeling (she would then have to spend energy answering), no worry, just an action and an open door. If she has told you she does not want you commenting on day 1, respect that and do the practical things anyway, quietly. Both are communication.',
      action:
        'If it is day 1 or 2: send the short message with one concrete thing you are taking on. If not: write the message as a draft so it is ready.',
      phaseTags: ['menstrual'],
    },
    {
      id: dailyId(M, 29),
      month: M,
      day: 29,
      title: 'Say where you are yourself',
      insight:
        'Good communication goes both ways. If you only ask and never tell, you become a support function rather than a partner, and she can feel it. Say how you are doing, even when it is "I am tired and need an hour to myself", and even on the days when she is struggling. That is not taking the space from her; it is giving her a human being to be with. Just be aware of timing and size: the big worry about your job is better on a day in the follicular phase than on day 26. And when you are struggling, say what you need instead of waiting to be asked. What you ask of her, you have to dare yourself.',
      action:
        'Tell her one honest thing about how you are doing today and what you need. Brief, and without it needing to be solved.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 30),
      month: M,
      day: 30,
      title: 'Month 2: what you have learned',
      insight:
        'This month has been about words and timing. You now know that questions beat guesses, that validation comes before solutions, and that the phase must never be used as a weapon, only as a reason to give more. You have learned to listen without defending, to repair after a fight, to apologise without a "but", and to ask permission before giving feedback. You have seen that the invisible list grows in the luteal phase, that ownership is something other than help, and that what she tells you is hers to pass on. Most importantly: you have a weekly check-in and maybe a code word. Those are tools that keep working long after the app is closed.',
      action:
        'Ask her what has made the biggest difference in your communication this month. Then take the monthly quiz.',
      phaseTags: [],
    },
  ],
  weekly: [
    {
      id: weeklyId(M, 1),
      month: M,
      week: 1,
      title: 'Ask, listen, validate: the three basic moves',
      body: [
        'In month 1 you learned the basic model: the phases, the hormones, that PMS amplifies rather than invents, and that timing conversations is free help. This month is about what comes after the model: how you actually talk to each other, day by day, when knowledge about phases has to become words that help. Three moves carry most of it: ask, listen, validate.',
        'The first move is asking instead of guessing. It sounds banal, but the more you learn about the cycle, the more tempting it becomes to reason from phase to need. She is on day 24, so she wants quiet. She is on day 12, so it is fine to bring up the finances. Sometimes you hit, but every time you guess wrong, she gets the experience of being read like a table rather than as a person. Questions do not need to be long. The best ones are short and give her two concrete choices: "Company or quiet?", "Should I listen, or do you want suggestions?", "Do you want to talk about it now or after dinner?" A choice between two things takes almost no energy to answer, and that is decisive on the days when the energy is gone.',
        'The second move is listening without defending. When she says something critical, a defence activates that feels completely reasonable from the inside: it was not meant that way, you had a reason, it was her fault too. But the moment you explain yourself, she has to fight to be heard on top of what she was already frustrated about, and the conversation changes subject from her experience to your innocence. Try this order: listen to the end, repeat the core in your own words, ask whether you have understood correctly. "So you feel that I disappear into my phone when the evenings get busy, and that you are left with it all?" When she says yes, you have earned your version. Often the need for it has gone by then, because what she needed was to be understood, not to be right.',
        'The third move is validating before you fix. To validate is to acknowledge that the feeling makes sense from her side, without necessarily agreeing with the conclusion. "It makes sense that you are fed up with it" can be said even if you see the matter differently. Many partners skip that step because they want to help, and to them helping means finding a solution. But a solution that arrives before the acknowledgement sounds like "your feeling is a problem that needs to go away". In the week before the period, when the hormone drop makes everything more raw, the need for validation is highest and the tolerance for being skipped over lowest. The order is everything: first "I understand", then "what do we do?", and often the first is enough.',
        'There is one more move, and it is about what not to say. You now know a lot about phases, and that knowledge can be used in two ways. "Is it PMS?" uses the phase to explain her away; that is the phase knowledge no woman asked for. "I can see it is day 25, can I take a bit more off your plate today?" uses the phase as a reason to give more. The rule is simple and unbreakable: the phase is never mentioned as an argument in a disagreement or as a reply to a feeling. It may be the reason you cook, move an appointment or hold back a remark. If in doubt, ask yourself whether the sentence is about what she is, or about what you are going to do.',
        'You know the question "do you want suggestions, or should I just listen?" from month 1. The hard part is not asking it but doing what she answers. If she says "listen", your brain will produce solutions anyway, and they will push to get out. Set them aside and ask questions instead: "What was the worst part of it?" "What did you do then?" If she says "suggestions", offer one, not five, and ask whether it fits. The answer changes with the day and with the phase, so ask every time instead of remembering the answer from last time.',
        "This week's task is small: pick one of the three moves and use it deliberately every day this week. Notice what happens to the conversations. Most people find that they get shorter, not longer, because nobody has to fight to be heard any more.",
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
        'There is a kind of work in most homes that nobody sees, because it happens inside one head. Remembering that a present needs buying for the birthday on Friday. Knowing that the boots have got too small. That the dentist needs booking, that your mother rang, that the sandwich bags have run out. It is called mental load, and in many couples it sits mostly with the woman, even when the practical chores are split roughly evenly. This week is about bringing it into the light, and about building the conversation that keeps it visible.',
        'The heavy part of the invisible list is not the tasks. It is being the one who remembers them, plans them, delegates them and checks that they got done. When you "help", she saves her hands but not her head: she still has to ask, explain how and follow up. That is why "just tell me what to do" is a sentence that frustrates more than it helps. It moves the work of distributing the work straight back to her.',
        "The alternative is ownership. A task you own is yours from start to finish: you remember it, plan it, do it and fix it if it slips, and she never has to think about it again. Pick something with a fixed rhythm and the whole chain attached: all the laundry, all the packed lunches, everything to do with the car, all contact with the children's school or nursery. And resist the temptation to ask how she wants it done. Work it out yourself. That is precisely the part that lightens her load. If it gets done a little differently from how she would have done it, that is the price of it no longer being hers.",
        'The list is long all month, but it feels longest in the week before the period, and that is no coincidence. When progesterone and estrogen fall, sleep gets worse, tolerance for mess and noise gets lower and the feeling of being alone with it all gets stronger. Tasks that were neutral on day 10 become mountains on day 25. That is why the dishwasher shows up in arguments that week and almost never in the follicular phase. The smart response is not to debate whether the split is fair right now. It is to take more on exactly those days, without keeping score, and to measure fairness over a month rather than over an evening. She gets a period, you do not; that is an asymmetry, and a fair split takes it into account.',
        'What keeps the list visible is a fixed conversation. A weekly check-in of fifteen minutes, same day every week, no phones, three questions: What went well this week? What was hard? What do you need in the coming week? The last question is the most important, because the answer often follows the cycle: "My period is due Wednesday, so Thursday evening I would like to be off duty from everything." That is a sentence that only gets said if someone asks, and which otherwise ends up as an argument on Thursday evening. The check-in must not become a place where everything has to be solved. It is a place where things get said while they are still small.',
        'For the days when she has no energy to explain, an agreed signal helps. A word ("grey day"), a number from 1 to 5, an emoji or a particular mug put out on the counter. You agree the meaning in advance, when you are both calm: "When I send it, I need you to take the practical stuff and not ask questions." The signal removes the need to explain and defend on a day when there is nothing left for it, and it gives you a clear job instead of a guess. Many couples find the signal gets used the other way too: you can have grey days, and she can take over.',
        "This week's task: ask her to write down the invisible list, everything she walks around remembering, and read it without commenting. Then pick one area you take over completely, and put the first check-in in the calendar. Three concrete steps that together move more than a month of good intentions.",
      ],
      conversationQuestion:
        'What is on your invisible list that I have never seen? And which area would lighten your load most if I took it over completely?',
      sources: [NHS_PMS],
    },
    {
      id: weeklyId(M, 3),
      month: M,
      week: 3,
      title: 'Fights: patterns, repair and apologies',
      body: [
        'All couples fight. It is not the number of conflicts that predicts whether a relationship lasts, but how they unfold, and above all how quickly and how well they are repaired afterwards. This week we look at three things: the pattern the cycle draws in your conflicts, the repair that restores contact, and the apology that actually works.',
        'If you look back at your recent fights, they are probably not spread evenly across the month. Most couples have a pattern: small things escalate in the last four to six days before the period, and the same small things slide by in the follicular phase. That does not mean the problems are imaginary. The irritation about the uneven split is there on day 9 too. But on day 26 the amplifier is turned up, sleep is worse and tolerance is lower, so the same sentence lands harder and gets answered faster. Once you know the pattern, you can use it deliberately: recurring topics are taken in the follicular phase, and in the luteal phase either of you is allowed to say "can we park this until next week?" without it counting as an escape. Note the days it went wrong in the app. After two months you will see the pattern in black and white, and it is harder to take personally when it sits on a calendar.',
        'Before you raise something, or react to something she has raised, three things are worth checking: Has she slept? Has she eaten? Are you within the last week before her period? Not to dismiss what she says, but to judge whether the conversation has a chance right now. Hunger and poor sleep amplify irritability more than anything else, and both are common in the luteal phase. If the answer to the first two is no, start with food and rest. "Shall we eat first and then talk about it?" is an act of care, not a brush-off, when it is said without turning her state into a diagnosis.',
        'When it has gone wrong anyway, repair comes next. Repair is any attempt to restore contact before the disagreement is resolved: a hand on the shoulder, a cup of coffee put down beside her, a sentence like "I do not want us to be like this. Can we start again?" It requires one of you to go first, and it does not have to be the one who is most in the right. If the fight fell in the PMS days, it is often easiest to repair once the period has arrived and the hormones have hit bottom; but do not wait longer than necessary. The longer the cold air, the more expensive the repair, and the more the story about what the other one meant grows.',
        'Sometimes repair requires an apology, and a good apology has three parts: what you did, what it did to her, and what you will do differently. "Sorry I interrupted you while you were telling me about your day. It must have felt like I could not be bothered to listen. I will let you finish from now on." What ruins an apology is the additions: "but you also...", "if you got upset", "I was just tired". Every "but" takes the apology back. And "sorry if you felt..." is not an apology, it is a claim that the problem is her feeling. Keep it short. Do not expect forgiveness on the spot; she is allowed to need time. The apology is yours, what she does with it is hers.',
        'The last move is about preventing the fight. There are things you want to say that are not criticism of her as a person, but can land that way. Uninvited criticism activates defences in everyone. Criticism you have agreed to receive lands differently. So ask: "Can I say something I have noticed? You are allowed to say no." If you get a yes, say one thing, concretely, without "always" and "never", and stop there. If you get a no, respect it and try another day. The follicular phase is the obvious time. And remember that the same applies the other way round: she can ask permission too, and you are allowed to say "not today".',
        'This week\'s task: find your most recent fight in the calendar and see which day it fell on. Agree on one sentence you are both allowed to use when the timing is bad, and one small gesture that means "can we start over?". Then the tools are in place before they are needed.',
      ],
      conversationQuestion:
        'What do I typically do after a fight that makes it harder to find our way back to each other? And what would you wish I did instead?',
      sources: [NHS_PMS],
    },
    {
      id: weeklyId(M, 4),
      month: M,
      week: 4,
      title: 'Desire, privacy and everyone else',
      body: [
        'The last topics of this month are the ones most couples talk about least: desire, and what may be said to whom. Both are about trust, and both get easier when they are taken on a good day rather than in the moment they turn into a problem.',
        'Sex is one of the hardest things to talk about, even in long relationships, because a no feels like rejection and a wish feels like a demand. It helps to talk about desire as something that fluctuates, like energy and mood, and that you both have a curve for. Around ovulation many feel more desire, in the luteal phase and during the period less, and some experience the opposite or something else entirely. Ask about her curve out of curiosity, not as a negotiation: "When in the month do you feel the most desire? What helps when it is low? Is there something that switches it off that I do not know about?" Have the conversation on a walk or at the kitchen table, not in bed and not after a no. That is where it is safe.',
        'A no in the luteal phase or during the period is mostly about body, tiredness and soreness, not about you. But a no said with guilt and received with disappointment quickly becomes a spiral: she starts avoiding situations where the question might come up, and you start reading distance into everything. Break the spiral by making the no safe. Say out loud that a no is a complete answer, and that you would rather have an honest no than a dutiful yes. Ask her to say what she would like instead: a hug, lying close, nothing. Closeness without expectation is the closeness that makes a later yes easy. And notice whether it is always you who asks. If so, try a month where you only receive.',
        'Now to everyone else. The more you know about the cycle, the more tempting it becomes to share it: explaining to friends why she left early, making a funny remark about the app, or saying "she is ovulating, that is why she is so cheerful". Do not, unless she has said it is fine. The cycle is her body, and how open she is about it is her choice. Some talk freely about periods with everyone, others only with you, and many sit in between and depend on who is in the room. That includes the kindly meant. A comment about her phase in company is a comment on her body, whichever way it points.',
        'If you have children, sooner or later they notice that mum has days of pain or tiredness. How that is explained is her decision, and it is worth making together while things are calm. Some want periods talked about openly and matter-of-factly, because it removes shame for girls and boys alike. Others want it kept private, at least until the children ask themselves. Either way you can show the children how to make allowances when someone is in pain, without making mum the weak one. "Mum needs some quiet today, so we are making dinner" teaches them something about care that lasts a lifetime.',
        'Finally, what stays between you. What she tells you about pain, bleeding, desire, mood and anxiety, she tells you in confidence, even when that is not said explicitly. That applies with your family, your friends and colleagues, and it covers both the serious and the stuff that would make a good anecdote. The calendar in the app is her data, not a topic for the dinner table. Confidentiality is what makes her tell you more next time. Break it once, and the door closes a little. Better to ask once too often what may be passed on.',
        'And one last thing, which the whole month has been about without saying so: communication goes both ways. If you only ask and never tell, you become a support function rather than a partner. Say how you are doing, even when it is "I am tired and need an hour to myself". Choose timing and size with care, but say it. What you ask her to dare, you have to dare yourself.',
      ],
      conversationQuestion:
        'Is there anything about your cycle, your desire or your body that you want me to keep entirely to myself? And is there anything you wish I dared to ask you about?',
    },
  ],
  wrap: {
    id: wrapId(M),
    month: M,
    title: 'Month 2: Communication and support',
    summary: [
      'This month was about turning knowledge into words. Three basic moves carry most of it: ask instead of guessing, listen to the end without defending yourself, and validate the feeling before you suggest a solution. On top of them sits the rule that must never be broken: the phase may be used as a reason to give more, never as an argument in a disagreement or as a reply to a feeling.',
      'You have learned that the invisible list is the heaviest part of the housework, that it grows in the luteal phase, and that ownership lightens the load where "help" does not. You have seen how fights follow the pattern of the cycle, how to repair before the disagreement is resolved, what an apology without a "but" looks like, and why feedback lands better when you have asked permission. And you have talked about desire and no on a good day, and about what is hers to share with friends, children and family.',
      'Next month we go deeper into the period itself: pain, bleeding, energy, and what you can concretely do on the days when it is hardest.',
    ],
    keepDoing: [
      'Keep the fifteen-minute weekly check-in: what went well, what was hard, what do you need?',
      'Ask "ear or suggestions?", and then do what she answers.',
      'Use your signal for the hard days, and take over without questions when it comes.',
      'Own at least one area of the home completely, from remembering to doing.',
      'Ask permission before giving feedback, and apologise without a "but".',
      'Keep what she tells you about her body between you, unless she says otherwise.',
    ],
    quiz: [
      {
        question:
          'She comes home on day 25, drops her bag and says: "I am so fed up with my boss." What helps most?',
        options: [
          '"Have you tried talking to HR about it?"',
          '"It makes sense that you are fed up with it. Do you want an ear or suggestions?"',
          '"It is probably partly because you are a bit PMS-y today."',
          '"That does not sound so bad."',
        ],
        correctIndex: 1,
        explanation:
          'Validate first, then ask what she needs. Solutions before acknowledgement sound like the feeling is the problem, and the phase must never be used to explain a feeling.',
      },
      {
        question:
          'You have noticed that she promises too much to other people and burns out from it. When and how do you say it?',
        options: [
          'Day 26 in the evening, right when it has just happened again',
          'In front of friends, as a loving joke',
          'In the follicular phase, after asking "can I share an observation?"',
          'Not at all, it is her business',
        ],
        correctIndex: 2,
        explanation:
          'Feedback you have agreed to receive lands completely differently from uninvited criticism. Timing it in the follicular phase gives it the best chance.',
      },
      {
        question:
          'You fought last night and there is cold air today. Neither of you has said anything. What is best?',
        options: [
          'Wait for her to come first; she was the one who started it',
          'Write a long message with your version of what happened',
          'Make a small gesture, like a cup of coffee, and say "can we start over?"',
        ],
        correctIndex: 2,
        explanation:
          'Repair needs one of you to go first, and it does not have to wait for the disagreement to be resolved. The longer the cold air, the more expensive it gets.',
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
          'A good apology has three parts: what you did, what it did to her, and what you will do differently. "If" and "but" take it back.',
      },
      {
        question:
          'She says: "I have to remind you about everything. I am tired of being the one who remembers." What lightens the load most in the long run?',
        options: [
          'Saying "just tell me what to do and I will do it"',
          'Taking over one area completely, from remembering to doing, without her having to check',
          'Making a shared list that she keeps up to date',
          'Explaining that you have a lot on your plate too',
        ],
        correctIndex: 1,
        explanation:
          'The heavy part is being the one who remembers. Ownership takes the whole chain off her; "just tell me what to do" puts the distributing work right back on her.',
      },
      {
        question:
          'At a dinner with friends, a friend asks why she went home early. What do you do?',
        options: [
          '"She has PMS, you know how it is."',
          '"She was tired", and change the subject. The rest is hers to share.',
          'Explain the app and that she is on day 26',
          'Laugh and say "women, right?"',
        ],
        correctIndex: 1,
        explanation:
          'How open she is about her cycle is her choice. A comment about her phase in company is a comment on her body, even when kindly meant.',
      },
    ],
  },
};
