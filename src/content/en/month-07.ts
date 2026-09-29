import type { MonthContent, Source } from '../types';
import { dailyId, weeklyId, wrapId } from '../types';

const NHS_PMS: Source = {
  label: 'NHS: PMS',
  url: 'https://www.nhs.uk/conditions/pre-menstrual-syndrome/',
};
const ACOG_PMS: Source = {
  label: 'ACOG: Premenstrual Syndrome (PMS)',
  url: 'https://www.acog.org/womens-health/faqs/premenstrual-syndrome',
};
const SUNDHED_PMS: Source = {
  label: 'Sundhed.dk: Premenstrual syndrome (PMS)',
};
const NHS_CBT: Source = {
  label: 'NHS: Cognitive behavioural therapy (CBT)',
};

const M = 7;

export const month07: MonthContent = {
  month: M,
  theme: 'PMS and PMDD',
  focus:
    'Understand mood swings and irritability so you stop taking them personally and can actually help.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'The drop, day by day',
      insight:
        'In month 1 you learned that PMS is a hormone drop. Now we look closer. The corpus luteum, which has produced progesterone since ovulation, starts to die about a week before the period. Progesterone and estrogen do not fall in a single day but gradually over 5-7 days, and the symptoms follow the curve: first a slight restlessness and a shorter fuse, then tears, hunger and poor sleep, and the last two or three days are typically the hardest. When the bleeding starts, the drop is over and most of it eases within a day. That means you can know not just that she is in the window, but where in the window. Day 24 and day 27 are not the same.',
      action:
        'Check in the app how many days remain until the expected period, and notice whether that matches how she is doing today.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS, SUNDHED_PMS],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: 'Serotonin: why mood comes down too',
      insight:
        'Estrogen supports the brain\'s production and use of serotonin, the messenger that keeps mood stable, dampens anxiety and regulates sleep and appetite. When estrogen falls, serotonin activity falls with it. That is why the PMS days look like a small-scale version of what low serotonin does in general: low mood, irritability, sugar cravings, poor sleep. At the same time progesterone breaks down into a substance that normally calms the brain, and that disappears too. The interesting part is that hormone levels in women with severe PMS are typically completely normal. It is the brain\'s sensitivity to the swings that differs. She does not have "too many hormones". Her brain reacts more strongly to the same shifts.',
      action:
        'Say this sentence to yourself today: "It is not the amount of hormones, it is the sensitivity." It changes how you see her on those days.',
      phaseTags: [],
      sources: [ACOG_PMS],
    },
    {
      id: dailyId(M, 3),
      month: M,
      day: 3,
      title: 'PMS is not one thing',
      insight:
        'More than 150 different symptoms have been described for PMS, and nobody has all of them. The physical ones: bloating, sore breasts, headache, fatigue, hunger, sleep problems, joint pain. The psychological ones: irritability, sadness, anxiety, tears, trouble concentrating, feeling out of control. The combination is personal and fairly stable from month to month. One woman goes quiet and tired, another short-tempered and restless, a third sorrowful. General PMS knowledge takes you part of the way, but it is her profile you need to know. It takes two or three cycles to spot it, and it is in the calendar if you log.',
      action:
        'Ask her: "What are the two or three things you notice most clearly in the week before?" Write the answer in a note in the app.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'The amplifier, in depth',
      insight:
        'You know the sentence: PMS amplifies feelings, it does not invent them. Here is what that means in practice. Imagine all her reactions normally pass through a filter that screens out the small stuff and softens the big stuff. In the PMS days the filter is thinner. What on day 10 registers as a minor irritation and is forgotten comes through on day 26 at full size. That goes for the positive too: a loving sentence can land deeper. The important thing for you is that the content is real. If she is angry that you forgot something, the hormones did not make up the fact that you forgot it. The volume is hormonal. The subject is real. Both deserve to be taken seriously.',
      action:
        'Think back to your latest PMS conflict and separate the two layers: what was the subject, and what was the volume? The subject is what you need to act on.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'PMDD: when it is more than PMS',
      insight:
        'Premenstrual dysphoric disorder, PMDD, is the severe form. It affects 3-8 percent of women of reproductive age and is a recognised diagnosis, not "bad PMS". The difference is degree: with PMDD the psychological symptoms are so intense that they disrupt work, relationships or daily life for a week or more every single month. Severe low mood, anxiety, rage, hopelessness, and for some, thoughts of not wanting to live. The symptoms lift almost completely once the bleeding arrives, and the good weeks are genuinely good. It is exactly that contrast that makes PMDD so exhausting, and that leaves many going years without being taken seriously. There is treatment that works. The first step is getting it looked at.',
      action:
        'Read the description again and be honest: does it sound like her week before? If yes, keep reading this month before you say anything.',
      phaseTags: [],
      sources: [NHS_PMS, ACOG_PMS],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: 'The timing is the evidence',
      insight:
        'What separates PMS and PMDD from depression and anxiety is not the symptoms but the calendar. With PMDD there is a clear symptom-free stretch in the follicular phase, typically from the end of the period to around ovulation. With depression there is not. Some women have both: an underlying depression that gets markedly worse in the week before, which is called premenstrual exacerbation. That is why a doctor asks for a diary, not just a description. Memory keeps the hard days and drops the good ones. Now that the bleeding has started is a good time to notice the shift: does she come back to herself within a couple of days? That is the answer to an important question.',
      action:
        'Notice whether her mood lifts now that the period has started. Write in today\'s note: "better" or "unchanged".',
      phaseTags: ['menstrual'],
      sources: [ACOG_PMS],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'Two cycles with a diary',
      insight:
        'If you are wondering whether it could be PMDD, you already have the tool. The diagnosis is made on daily records over at least two cycles, where the symptoms must be present in the week before the period and gone in the week after. Doctors call it prospective tracking, and it is not bureaucracy. It is the only way to tell PMDD apart from other conditions. The app\'s calendar is exactly that kind of diary, if it is filled in every day, including the good days. Especially the good days. It is "no symptoms" on day 8 that turns "intense anxiety" on day 26 into a pattern rather than just a bad day.',
      action:
        'Suggest that you log mood every day for the next two cycles, and offer to be the one who reminds her, if she wants that.',
      phaseTags: [],
      sources: [ACOG_PMS, SUNDHED_PMS],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: 'There is treatment that works',
      insight:
        'Worth knowing before you consider a doctor: PMDD and severe PMS can be treated, and there are more options than most people think. SSRIs, the type of medication also used for depression, often work within days for PMDD rather than weeks, and some women take them only in the last two weeks of the cycle. Hormonal contraception that suppresses ovulation removes the swings for some. Cognitive behavioural therapy teaches techniques for handling the thoughts when they come. Regular exercise, sleep and meals soften all of it. Choosing is the doctor\'s job. Your job is to know there is something to choose between, so "that is just how it is" does not get the last word.',
      action:
        'Save this sentence for a day when she doubts: "It can be treated, and you do not have to work out how on your own."',
      phaseTags: [],
      sources: [NHS_PMS, ACOG_PMS],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'Rejection sensitivity',
      insight:
        'One of the least known and most disruptive PMS symptoms is a heightened sensitivity to rejection. A short reply, an "mm" instead of an answer, you looking at your phone while she talks, or going to bed without saying goodnight. Things that do not register on day 10 feel on day 26 like proof that you do not care. That is not insecurity in the relationship, it is a brain low on serotonin scanning for danger. Saying "I did not mean it like that" does not help. Preventing does: a bit more clarity, a bit more eye contact, a bit more "I am here", on exactly those days. It costs you nothing and saves you both a lot.',
      action:
        'Put the phone away when she talks to you today, and say goodnight with eye contact. Small signals that land big right now.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 10),
      month: M,
      day: 10,
      title: 'Anxiety and restlessness',
      insight:
        'Many women describe PMS anxiety as an engine running too fast: restlessness in the body, thoughts going in circles, worry about things that are otherwise manageable, and sometimes a sense that something terrible is about to happen without being able to say what. It is linked to the calming substance progesterone breaks down into disappearing along with the hormone drop. Anxiety in this phase is not a sign that she is weak, and not a sign that something is wrong in your life. Arguing with the anxiety or proving the worry is unfounded does not help. Being calm, concrete and close does: "I am here. We take one thing at a time."',
      action:
        'If she seems restless today, do not ask "what is wrong?", but say: "Shall we go for a walk, or would you rather I just sit here?"',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'Tears close to the surface',
      insight:
        'Crying in the PMS days often comes suddenly and over something that does not seem big: an advert, a messy kitchen, a comment. She knows it herself and often gets embarrassed or annoyed about it, which brings more tears. What is happening is a low threshold, not a great sorrow. The worst thing you can do is demand an explanation or start solving whatever she is crying about. The best thing is boring: be there, offer a hand or a cup of tea, and let it pass on its own. If there is something behind the tears, it will come out when she is ready. And it is fine to say "you do not have to explain".',
      action:
        'Next time the tears come: sit down next to her, say "you do not have to explain", and stay for five minutes without doing anything.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: 'Rage: the hard one',
      insight:
        'Anger is the PMS symptom both of you would rather not talk about. But it is one of the most common in PMDD: a sudden, physical anger that comes fast and feels out of proportion, to her as well. Many describe afterwards that they watched themselves from the outside and could not stop. It is not an excuse for treating you badly, and we will come back to that. But it matters to understand that in that moment the anger is often more physiology than intent. What escalates is answering back with the same force. What de-escalates is lowering your own voice, taking a break and coming back later.',
      action:
        'Agree with yourself on one sentence for the next time it boils over: "I am going to the kitchen for ten minutes, and then I will be back." Say it calmly, and keep it.',
      phaseTags: ['luteal'],
      sources: [ACOG_PMS],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: 'Brain fog',
      insight:
        'Trouble concentrating, forgetfulness and the feeling of thinking through cotton wool are common in the days before the period, and like the other symptoms they clear when the bleeding starts. They are linked both to the serotonin drop and to the poor sleep of the luteal phase. Brain fog is frustrating for her, especially in a job that demands overview, and it easily creates conflict at home: she forgets an appointment, loses track of the week, or cannot make a decision. What helps is taking cognitive load away: fewer choices, shorter messages, one thing at a time. That is not talking down to her. It is taking something off her plate in a week where it is heavy.',
      action:
        'Take one planning task off her today: dinner, an appointment that needs moving, or a message that needs a reply. Just say "I have got that one".',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'How to answer a sharp tone',
      insight:
        'In month 1 you learned to respond to the need, not the tone. Here is the technique in three steps. One: pause for three seconds before you say anything. It sounds trivial, but those three seconds decide whether you defend yourself or listen. Two: translate the sentence in your head. "You never help" becomes "I feel alone with this". Three: answer the translation, not the words. "It sounds like you have too much on. What do I take now?" If you get it wrong, she will correct you, and that is fine. If the tone continues even after you have answered the need, it is time for a break, not a fight. More on that later this month.',
      action:
        'Practise the three seconds today, in any conversation at all: take one breath before you answer. It needs to live in your body when you need it.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 15),
      month: M,
      day: 15,
      title: 'Repair after a conflict',
      insight:
        'Every couple has conflicts in the PMS window, no matter how well they understand the mechanism. What decides whether the relationship takes damage is not the conflict but the repair afterwards. Once the bleeding has started and the calm has returned, there is a window for picking up the pieces. It should not be a trial about who said what. It should be short: what happened, what can we do differently next time, and is there anything one of you wants to apologise for. She can apologise for the tone without that meaning the subject was wrong. You can apologise for defending yourself without that meaning you deserved the tone. Both can be true.',
      action:
        'If there was a conflict in the latest PMS week, say today: "Can we talk about last week for a moment? Not to find blame, just to learn from it."',
      phaseTags: ['menstrual'],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'Sentences to keep to yourself',
      insight:
        'You know the classics: "Is it PMS?", "It is just hormones", "You are overreacting". Here are the less obvious ones that do just as much damage. "You were like this last month too" uses the calendar as a weapon. "I am not saying anything" is a defence dressed up as innocence. "I cannot do anything right" turns her symptom into your problem. "Shall we talk about it when you are yourself again?" says she is not herself now. What they have in common is that they are all about you and make her the problem. Needing a break is not forbidden. It is how it is said: "I need ten minutes, and then I am back" says the same thing without hitting.',
      action:
        'Find the one sentence from the list you are most likely to use, and write your alternative in a note on your phone.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'What actually helps to say',
      insight:
        'The sentences that work in the PMS days have three things in common: they acknowledge, they demand nothing, and they offer something concrete. "That sounds hard. I am here." "You do not have to explain." "I will do dinner, just lie down." "Do you want me to stay, or do you need some space?" "I know this is a heavy week, and I think you are handling it well." Notice what is missing: no explanations of why she feels this way, no suggestions about what she should do, no questions that require a reasoned answer. She knows what is happening in her body. She does not need information, she needs company.',
      action:
        'Pick one of the sentences and say it to her today, without an occasion and without expecting anything back.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'Her own strategies',
      insight:
        'Most women who have had PMS for many years have developed their own ways of getting through the week. Some run, some go to bed early, some cancel everything social, some need to be alone, some the opposite. Some know that a particular meal, a bath or a particular series helps. You probably know some of them, rarely all, because she has not put them into words. The follicular phase is the right time to ask, because now there is energy to think about it, and it does not feel like criticism. Your job is not to find better strategies. It is to know hers, so you can back them up instead of standing in the way.',
      action:
        'Ask today: "What do you do yourself that helps in the week before? And what do I sometimes do that gets in the way?" Listen to the second part without defending yourself.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 19),
      month: M,
      day: 19,
      title: 'Support the strategy without taking it over',
      insight:
        'Once you know her strategies, the temptation is to manage them: "Were you not going to run today?" "You said you would be in bed by ten." It is well meant and lands as control, especially in a week where sensitivity to criticism is high. Support looks different. It is clearing the path: taking the kids so she can run, without mentioning the run. Getting the bedroom ready at half past nine without saying she should go to bed. Not suggesting guests that week. And accepting that some days the strategy is lying on the sofa, and that this is also a strategy. You help most when she does not have to spend energy explaining or defending what she does.',
      action:
        'Pick one of her strategies and make room for it today without commenting on it: take a chore, clear an hour, or leave the evening unplanned.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 20),
      month: M,
      day: 20,
      title: 'Sleep, food and movement as medicine',
      insight:
        'The three things with the best evidence for easing PMS without medication are also the three hardest to keep up precisely when you have PMS: regular exercise, enough sleep and regular meals. Exercise raises serotonin and dampens anxiety, sleep stabilises mood, and steady meals prevent the blood sugar dips that amplify irritability more than anything else. Less alcohol and caffeine that week also helps more people than believe it. Your job is not to put her on a programme. It is to make the three things easy: a walk together after dinner, an early night without screens, and food in the house so a meal does not get skipped.',
      action:
        'Suggest a 20-minute walk after dinner today, with no agenda. If she does not want to, make it an early night instead.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: 'When it deserves a doctor',
      insight:
        'You cannot decide whether it is PMS or PMDD, and you are not supposed to. But there are signs that mean it should be assessed: if the symptoms disrupt her work, relationships or daily life every month. If she herself says she cannot recognise herself that week. If there are thoughts of not wanting to live, even if they "only" come in the PMS days. If you both dread the week in advance. If she has tried what she can on her own and it is not enough. One of the signs is enough. With thoughts of suicide it has to be now, not after two cycles with a diary. Everything else can wait for the right moment to talk about it.',
      action:
        "Go through the list for yourself today. If you recognise one or more signs, read tomorrow's card before you say anything.",
      phaseTags: [],
      sources: [NHS_PMS, SUNDHED_PMS],
    },
    {
      id: dailyId(M, 22),
      month: M,
      day: 22,
      title: 'How to suggest a doctor',
      insight:
        'Suggesting a doctor can sound like "there is something wrong with you" if it is said the wrong way or at the wrong time. The wrong time is in the middle of the PMS week. The right time is now, in the follicular phase, when there is calm to hear it. The wrong way is to diagnose: "I think you have PMDD." The right way is to describe and offer: "I can see the week before is really hard for you, and I have read that there is treatment. Would you consider talking to the doctor about it? I would happily come along." If she says no, respect it and leave the door open. The decision is hers. Your role is to make it possible, not to make it.',
      action:
        'If you recognised the signs yesterday: say the sentence today, and offer to help print or send the logged cycles to the doctor.',
      phaseTags: ['follicular'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'Your feelings count too',
      insight:
        'This whole month is about understanding her. But you are also a person living in the same house in the same week. It is okay to feel hurt when the tone is sharp. It is okay to be tired of walking on eggshells. It is okay to dread the week in advance. If you swallow it, it piles up and comes out as coldness or sarcasm, typically at the worst possible moment. What works is having somewhere to put it: a friend, a sibling, a walk alone, a note on your phone. And telling her when the calm is back: "Last week was hard for me too." Not as an accusation. As information.',
      action:
        'Write three lines today about what the latest PMS week was like for you. Not for her, for yourself. Read them again in a month.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 24),
      month: M,
      day: 24,
      title: 'Staying calm is not accepting everything',
      insight:
        'Keeping calm in the PMS days does not mean everything is allowed. A sharp tone, a short fuse and tears are symptoms. Contemptuous remarks, being called names, having things thrown at you or being shouted at in front of the children are not symptoms, and hormones do not remove responsibility. The difference matters for both of you. She has the right to a hard week. You have the right to say "you do not talk to me like that", calmly, and walk away. That is not dismissing her feelings. It is a boundary, and boundaries are what let you stay patient in the long run. If the boundary is crossed every month, that is a conversation for the good week, and perhaps one you need help with from outside.',
      action:
        'Put into words for yourself one boundary that does not depend on the cycle. Tell her in the good week, not as an ultimatum, but as information.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 25),
      month: M,
      day: 25,
      title: 'Postpone, do not avoid',
      insight:
        'You now know that difficult conversations belong outside the PMS window. There is a trap in that: "let us do it later" becomes "let us never do it", because there is always a reason. Then the subject grows and comes out in the PMS week anyway, only bigger. The difference between postponing and avoiding is whether there is a date. "Can we do it on Sunday?" is postponing. "Not now" with nothing else is avoiding. And if she is the one raising the subject on day 26, listen first. She has the right to be heard, even when the timing is poor. What you can propose is to decide later, not to listen later.',
      action:
        'Is there a subject you have been pushing ahead of you? Suggest a concrete day in the next follicular phase, and put it in the calendar today.',
      phaseTags: ['luteal', 'follicular'],
    },
    {
      id: dailyId(M, 26),
      month: M,
      day: 26,
      title: 'The good week is for agreements',
      insight:
        'The follicular phase is not just the pleasant week. It is also the week where you can make agreements about the hard one. With energy and distance you can talk about what worked last time, what did not, and what you want to try next. Many couples discover they have talked about PMS a hundred times, but never outside PMS. That is like running a fire drill while the house is burning. The agreements do not need to be big: who does dinner that week, whether guests are a good idea, what she wants you to do when the tone gets sharp, and what you may do when you need a break yourself. Write them down. Memory is the first thing to go on day 26.',
      action:
        'Set aside 15 minutes today to make two or three agreements for the next PMS week, and write them in a note you can both find.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 27),
      month: M,
      day: 27,
      title: 'The peak before the drop',
      insight:
        'Around ovulation estrogen is at its highest, and for many these are the best days of the cycle: energy, desire, mood and confidence. It is worth enjoying. It is also worth knowing that the drop starts from here, and that there are typically 7-10 days until the PMS window opens. That makes ovulation a natural time to look ahead: what is in the calendar in 10-14 days? A big family party, a deadline, a trip, a hard conversation? What you can move is cheapest to move now. What you cannot move you can prepare for: a lighter programme around it, a buffer of calm before and after, and an agreement that she may step back if she needs to.',
      action:
        'Open the calendar, find the days the app expects to be the PMS window, and look for one thing that can be moved or made smaller.',
      phaseTags: ['ovulation'],
    },
    {
      id: dailyId(M, 28),
      month: M,
      day: 28,
      title: 'Agree on a signal',
      insight:
        'One of the simplest and most effective tools couples use is a signal, a word or sentence that means "I am in the window now, and it is not you". It can be as simple as "it is a heavy day" or an agreed word that means nothing else. The point is that she does not have to explain herself and you do not have to guess. The signal only works if it is agreed in advance, in a calm phase, and if you respond to it the same way every time: with lower expectations and higher care, not with "oh, so that is why". It should go the other way too: a signal from you that means "I need a break, and I am coming back".',
      action:
        'Suggest a signal today, and agree on what you do when you hear it. Test it in the coming PMS week.',
      phaseTags: ['ovulation'],
    },
    {
      id: dailyId(M, 29),
      month: M,
      day: 29,
      title: 'The relief when the bleeding comes',
      insight:
        'For many women with pronounced PMS, the first day of the period is not a bad day but a relief. The fog lifts, the anxiety settles, and she can feel herself again. Some describe it as waking up. It is a good time to say something you may not have managed to say the week before: that you saw how hard it was, and that she got through it. It is also a time when she may feel guilty about things that were said. She does not need you to confirm that it was bad. She needs you to confirm that you are still on the same team. And then it is time to log what the week was like, while you both remember it.',
      action:
        'Say today: "I could see it was a hard week. Glad you are through it." Then write three words together in the note about how the week was.',
      phaseTags: ['menstrual'],
    },
    {
      id: dailyId(M, 30),
      month: M,
      day: 30,
      title: 'Month 7: what you have learned',
      insight:
        'You now know that PMS is a gradual hormone drop that the brain answers with lower serotonin, and that it is the sensitivity, not the amount of hormones, that differs. You know PMDD is a real diagnosis in 3-8 percent, that it is made with a diary over two cycles, and that there is treatment. You can recognise rejection sensitivity, anxiety, tears, rage and brain fog, and you know what to say and what not to say. You know repair after conflict matters more than the conflict, that staying calm is not accepting everything, and that postponing needs a date. Most importantly: you know the amplifier is hormonal and the content is real, and that both deserve you.',
      action:
        "Tell her the two things from this month that changed most in how you see the PMS week. Then take the month's quiz.",
      phaseTags: [],
    },
  ],
  weekly: [
    {
      id: weeklyId(M, 1),
      month: M,
      week: 1,
      title: 'What PMS does to the brain',
      body: [
        'In month 1 you got the model: hormones fall in the week before the period, and it is felt as PMS. This article goes one layer deeper, because the better you understand the mechanism, the less personally you take it, and the more precisely you can help.',
        'After ovulation the corpus luteum produces progesterone, and estrogen gets a smaller second peak. If the egg is not fertilised, the corpus luteum starts to wither about a week before the period, and both hormones fall gradually over 5-7 days. It is not one drop but a curve. That is why the symptoms typically start mild and build, and why the last two or three days before the bleeding are often the hardest.',
        "The brain feels the drop in two ways. Estrogen supports the production and effect of serotonin, the messenger that keeps mood stable, dampens anxiety and regulates sleep and appetite. When estrogen falls, serotonin activity falls with it, and in many ways it resembles a small-scale version of what is seen in depression: low mood, irritability, sugar cravings, sleep problems. At the same time progesterone is broken down in the body into a substance that calms the brain's GABA system, the same system alcohol and sedatives act on. When progesterone disappears, the calming effect disappears too. The result is restlessness, anxiety and a sense that everything is slightly too much.",
        'Here is the most important thing to understand: hormone levels in women with severe PMS are usually completely normal. It has been measured and compared, and the difference lies not in the amount of hormones but in how strongly the brain reacts to the swings. Some brains are more sensitive to the same shifts. That means "she has too many hormones" is wrong, and "she is just sensitive" is wrong in a different way. She has a nervous system that reacts more strongly to a normal biological process. She cannot opt out of that, any more than one can opt out of migraine.',
        'That is why the sentence from month 1 holds: PMS amplifies feelings, it does not invent them. Think of it as a filter that normally screens out the small stuff and softens the big stuff. In the PMS days the filter is thinner. What on day 10 registers and is forgotten comes through on day 26 at full size. That goes for irritation over an uneven split of chores, hurt over something you said, and worry about something at work. It goes for the good too: a loving sentence lands deeper. The content is real. The volume is hormonal. Both are genuine.',
        'What do you do with that? First: stop trying to decide whether a feeling is "real" or "hormonal". It is a false choice. The feeling is real, and it is amplified, at the same time. Act on the content, and do not react to the volume. Next: learn her profile. PMS is not one thing; more than 150 symptoms have been described, and each woman has her own fixed combination. Some go quiet and tired, others short-tempered and restless, others sorrowful. The general knowledge in this article takes you part of the way. Her profile, which you will find in the calendar after two or three logged cycles, takes you the rest.',
        'And finally: because it is a curve, you can follow along. Day 24 and day 27 are not the same. Look in the app, see how many days remain until the expected period, and adjust your expectations accordingly. That is not treating her like a calendar. It is taking her biology as seriously as she has to.',
      ],
      conversationQuestion:
        'How do you feel the drop yourself in the week before: does it come gradually or suddenly, and which days are the hardest for you?',
      sources: [NHS_PMS, ACOG_PMS, SUNDHED_PMS],
    },
    {
      id: weeklyId(M, 2),
      month: M,
      week: 2,
      title: 'PMDD: a real condition with treatment',
      body: [
        'Three out of four women feel PMS to some degree. For 3-8 percent it is so severe that it has its own name: premenstrual dysphoric disorder, PMDD. It is a recognised diagnosis, and that needs saying clearly, because many have lived with it for years and been told it is "just PMS", "just hormones" or something they should pull themselves together about.',
        'The difference between PMS and PMDD is degree, not kind. With PMDD the psychological symptoms dominate and are so intense that they disrupt work, relationships or daily life for a week or more every month: severe low mood, anxiety and tension, sudden rage, feeling out of control, hopelessness, and for some, thoughts of not wanting to live. The symptoms begin in the week before the period, peak in the last days and lift almost completely within a few days of the bleeding starting. The good weeks are genuinely good, and it is exactly that contrast that makes PMDD so exhausting: she knows precisely what is coming and cannot prevent it.',
        'It is the calendar that separates PMDD from depression and anxiety disorders. With PMDD there is a clear symptom-free stretch from the end of the period to around ovulation. With depression there is not. Some women have both, an underlying depression that gets markedly worse in the week before, and that needs different treatment. That is why the diagnosis is not made on a description but on daily records over at least two cycles, where the symptoms must be present before the period and gone after. Memory keeps the hard days and drops the good ones; a diary keeps both. The app\'s calendar is exactly that kind of diary, if it is filled in every day, including when everything is fine. It is "no symptoms" on day 8 that turns "intense anxiety" on day 26 into a pattern.',
        "What few people know is that PMDD can be treated, and that there are several routes. SSRIs, the type of medication also used for depression, are the first choice and work differently in PMDD than in depression: often within days rather than weeks. That is why some women take them only in the last two weeks of the cycle. Hormonal contraception that suppresses ovulation removes the swings for some, especially certain types of pill. Cognitive behavioural therapy teaches techniques for recognising and handling the thoughts when they come, and has good evidence in both PMS and PMDD. Regular exercise, sleep, steady meals and less alcohol and caffeine soften all of it. In very severe cases there are further options a specialist can assess. Choosing is the doctor's job. Your job is to know there is something to choose between.",
        'When does it deserve a doctor? If the symptoms disrupt her work, relationships or daily life every month. If she herself says she cannot recognise herself that week. If you both dread the week in advance. If she has tried what she can on her own and it is not enough. And if there are thoughts of not wanting to live, even if they "only" come in the PMS days, then it has to be now, not in two cycles. One of the signs is enough.',
        'How you suggest it matters almost as much as that you do. Not in the PMS week, where it sounds like "there is something wrong with you". In the follicular phase, where there is calm to hear it. Not as a diagnosis: "I think you have PMDD." But as observation and offer: "I can see the week before is really hard for you, and I have read that there is treatment. Would you consider talking to the doctor? I would be happy to come along." Offer to help bring the logged cycles to the doctor, because that is what the conversation rests on. And if she says no, respect it and leave the door open. The decision is hers. Your role is to make it possible.',
        'Whether it is PMS or PMDD, you are not the one to make the diagnosis, and not the one to treat it. You need to do two things: take it seriously, and make the road to help shorter. That is more than most people get.',
      ],
      conversationQuestion:
        'If you had to give the week before your period a score from 1 to 10 for how much it disrupts your life, what would you say? And is that a number you are okay with yourself?',
      sources: [NHS_PMS, ACOG_PMS, NHS_CBT],
    },
    {
      id: weeklyId(M, 3),
      month: M,
      week: 3,
      title: 'Sharp tone, tears and rage: how to respond',
      body: [
        'The psychological PMS symptoms are the ones that hit a relationship hardest, because they come out as something that looks like a reaction to you. This article goes through the five most common, what lies behind them, and what you concretely do when they come.',
        'Rejection sensitivity is the least known. In the PMS days a brain low on serotonin scans for danger, and small things that normally do not register become proof that you do not care: a short reply, a glance at your phone while she talks, going to bed without saying goodnight. Saying "I did not mean it like that" does not help, because it is an explanation of something that has already hurt. Preventing helps: a bit more eye contact, a bit more clarity, a bit more "I am here", on exactly those days. Put the phone away when she talks. Say goodnight with eye contact. It costs nothing.',
        'Anxiety and restlessness feel like an engine running too fast: thoughts in circles, worry about things that are otherwise manageable, a sense that something terrible is on its way. It is linked to the calming substance progesterone breaks down into disappearing with the drop. Do not argue with the anxiety, and do not prove the worry is unfounded; it comes across as dismissive. Be calm, concrete and close. "I am here. We take one thing at a time." Offer a walk or just your company, and let her choose.',
        'Tears come suddenly and over something that does not seem big. She knows it herself and gets embarrassed, which brings more tears. It is a low threshold, not a great sorrow. Do not demand an explanation, and do not start solving whatever she is crying about. Sit down next to her, say "you do not have to explain", and stay. If there is something behind it, it will come when she is ready. Brain fog, trouble concentrating and forgetfulness, is the symptom that most often causes practical conflict: a forgotten appointment, a decision that cannot be made. What helps is taking cognitive load away: fewer choices, shorter messages, one thing at a time. "I have got that one" is the best sentence of the week.',
        'Rage is the symptom neither of you wants to talk about, and one of the most common in PMDD: a sudden, physical anger that comes fast and feels out of proportion, to her as well. Many describe afterwards that they watched themselves from the outside and could not stop. What escalates is answering back with the same force. What de-escalates is lowering your voice, taking a break and coming back. And when the tone gets sharp without it being rage, use the three steps: a three-second pause, translate the sentence ("you never help" means "I feel alone with this"), and answer the translation: "It sounds like you have too much on. What do I take now?"',
        'There are sentences that always make it worse. The obvious ones: "Is it PMS?", "It is just hormones", "You are overreacting". And the less obvious: "You were like this last month too" (the calendar as a weapon), "I am not saying anything" (defence dressed as innocence), "I cannot do anything right" (her symptom becomes your problem), "Shall we talk when you are yourself again?" (she is not herself now). What they share is that they are about you and make her the problem. What works acknowledges, demands nothing and offers something concrete: "That sounds hard. I am here." "I will do dinner, just lie down." "Do you want me to stay, or do you need some space?" She does not need information about her own body. She needs company.',
        'Finally the most important thing: there will be conflicts anyway. What decides whether the relationship takes damage is the repair. Once the bleeding has started and the calm is back, have a short conversation: what happened, what do we do differently next time, and is there anything one of you wants to apologise for. She can apologise for the tone without the subject being wrong. You can apologise for defending yourself without having deserved the tone. Both can be true at once. That is how you stay on the same team.',
      ],
      conversationQuestion:
        'Which of the five, rejection sensitivity, anxiety, tears, brain fog or anger, do you know best from yourself, and what would you most like me to do when it comes?',
      sources: [NHS_PMS, ACOG_PMS],
    },
    {
      id: weeklyId(M, 4),
      month: M,
      week: 4,
      title: 'Your boundaries, her strategies and your agreements',
      body: [
        'The first three weeks were about understanding her. This last article is about you, about what you can do together, and about sustaining it year after year. Because patience is not bottomless, and a relationship where one person always adapts does not last.',
        'Start with your own feelings. It is okay to feel hurt when the tone is sharp. It is okay to be tired of walking on eggshells, and it is okay to dread the week in advance. If you swallow it, it piles up and comes out as coldness, sarcasm or an explosion, typically at the worst possible moment. Have somewhere to put it: a friend, a sibling, a walk alone, a note on your phone. And tell her when the calm is back, not as an accusation but as information: "Last week was hard for me too." That is not turning her symptoms into your problem. It is being honest that you live in the same house.',
        'Then the boundaries. Staying calm does not mean everything is allowed. A sharp tone, a short fuse and tears are symptoms. Contemptuous remarks, being called names, having things thrown at you or being shouted at in front of the children are not symptoms, and hormones do not remove responsibility. She has the right to a hard week. You have the right to say "you do not talk to me like that", calmly, and leave the room. That is not dismissing her feelings. It is a boundary, and boundaries are what let you stay patient in the long run. If it is crossed every month, that is a conversation for the good week, and perhaps one you need outside help with. Put one boundary into words for yourself that does not depend on the cycle, and tell her in the follicular phase. Not as an ultimatum. As information.',
        'The same logic applies to difficult conversations. In months 1 and 2 you learned to place them outside the PMS window. The trap is that "let us do it later" becomes "let us never do it", and then the subject grows and comes out in the PMS week anyway, only bigger. The difference between postponing and avoiding is whether there is a date. "Can we do it on Sunday?" is postponing. "Not now" with nothing else is avoiding. And if she is the one raising the subject on day 26, listen first. She has the right to be heard, even when the timing is poor. What you can propose is to decide later, not to listen later.',
        'Now to her own strategies. Most women with many years of PMS have found their ways of getting through the week: running, early nights, no guests, time alone, a particular meal, a bath, a series. You know some of them, rarely all, because she has not put them into words. Ask in the follicular phase: "What do you do yourself that helps? And what do I sometimes do that gets in the way?" Listen to the second part without defending yourself. And once you know the strategies, do not manage them. "Were you not going to run today?" is well meant and lands as control. Support is clearing the path: take the kids so she can run, without mentioning the run. Get the bedroom ready without saying she should go to bed. Do not suggest guests that week. And accept that some days the strategy is the sofa.',
        'All of this only becomes something when it becomes agreements, and agreements are made in the good week. Many couples have talked about PMS a hundred times, but never outside PMS. That is like holding a fire drill while the house is burning. Set aside a quarter of an hour in the follicular phase: who does dinner that week, are guests a good idea, what does she want you to do when the tone gets sharp, and what may you do when you need a break yourself. Agree on a signal, a word or sentence that means "I am in the window, and it is not you", and a matching one from you that means "I need ten minutes, and I am coming back". Use ovulation to look 10-14 days ahead in the calendar and move or shrink whatever sits in the window. Write the agreements down somewhere you can both find them. Memory is the first thing to go on day 26.',
        'And when the bleeding comes and the fog lifts, say what you may not have managed to say the week before: that you saw how hard it was, and that she got through it. She may feel guilty about things that were said. She does not need you to confirm it was bad. She needs you to confirm that you are still on the same team. Then log the week together while you both remember it, and you are better prepared next time. It is not a cure. It is a relationship that knows what it is dealing with.',
      ],
      conversationQuestion:
        'What should our signal be, and what do you want me to do when you use it? And what do you want me to do when I need a break myself?',
      sources: [NHS_PMS],
    },
  ],
  wrap: {
    id: wrapId(M),
    month: M,
    title: 'Month 7: PMS and PMDD',
    summary: [
      'This month went deep into the week that causes the most misunderstandings. You now know that PMS is a gradual hormone drop over 5-7 days, which the brain feels as lower serotonin and lost calm, and that hormone levels are typically normal: it is the sensitivity that differs. You know the five psychological symptoms that hit a relationship hardest, rejection sensitivity, anxiety, tears, rage and brain fog, and you know the amplifier is hormonal while the content is real.',
      'You know PMDD affects 3-8 percent, is a real diagnosis, is made with a diary over two cycles and can be treated with SSRIs, hormonal contraception, cognitive behavioural therapy and lifestyle. You know when it deserves a doctor and how to suggest it without diagnosing. You have learned to answer a sharp tone in three steps, to repair after conflict, what never to say, and that staying calm is not accepting everything. And you know agreements are made in the good week, and that postponing needs a date.',
      'Next month is about pain, fatigue and headaches: how to recognise patterns in her log and respond before she asks.',
    ],
    keepDoing: [
      'Log mood every day, including the good days, so the pattern becomes visible.',
      'Three-second pause, translate the sentence, answer the need.',
      'Put the phone away and say goodnight with eye contact in the PMS week.',
      'Have a short repair conversation once the bleeding has started.',
      'Make agreements and a signal in the follicular phase, and write them down.',
      'Say your own boundaries and feelings out loud in the good week.',
    ],
    quiz: [
      {
        question:
          'In the week before her period she says she cannot recognise herself and that she dreads the week every month. What helps most?',
        options: [
          'Say it is normal, three out of four have PMS',
          'Suggest in the follicular phase that she talks to the doctor, and offer to come along',
          'Tell her you think she has PMDD',
          'Suggest she tries running more',
        ],
        correctIndex: 1,
        explanation:
          'That is one of the signs it deserves a doctor. Suggest it calmly in the good week, as observation and offer, not as a diagnosis.',
      },
      {
        question:
          'You are wondering whether it could be PMDD. What is the most useful thing you can do over the next two months?',
        options: [
          'Wait and see whether it gets better on its own',
          'Read everything about PMDD online',
          'Log mood and symptoms every day, including the good days',
          'Avoid all conflict in the week before',
        ],
        correctIndex: 2,
        explanation:
          'The diagnosis rests on daily records over at least two cycles. It is the symptom-free days that turn the hard days into a pattern.',
      },
      {
        question: 'Day 26. She says sharply: "You never help." What is the best first step?',
        options: [
          'List everything you have actually done this week',
          'A three-second pause, then: "It sounds like you have too much on. What do I take now?"',
          'Say "it is probably because you are in the window"',
          'Leave without saying anything',
        ],
        correctIndex: 1,
        explanation:
          'Translate the sentence into the need behind it, and answer that. Defending yourself creates a conflict about the tone; helping makes the tone disappear.',
      },
      {
        question: 'She suddenly cries over a messy kitchen. What works best?',
        options: [
          'Ask what is really wrong',
          'Start cleaning up straight away',
          'Sit down next to her, say "you do not have to explain", and stay',
          'Say it is only the kitchen',
        ],
        correctIndex: 2,
        explanation:
          'The tears are a low threshold, not a great sorrow. Company without demanding an explanation works; solutions and questions bring more tears.',
      },
      {
        question:
          'She has shouted contemptuous things at you in front of the children, the third month in a row. What is right?',
        options: [
          'Put up with it, it is the hormones',
          'Shout back so she understands how it feels',
          'Say calmly "you do not talk to me like that", leave, and have the boundary conversation in the good week',
          'Never mention it again, to avoid conflict',
        ],
        correctIndex: 2,
        explanation:
          'Staying calm is not accepting everything. Symptoms explain, but do not remove responsibility. A boundary set calmly is what makes patience possible in the long run.',
      },
      {
        question:
          'There is a difficult subject about money that she brings up on day 27. What do you do?',
        options: [
          'Say "not now" and leave it',
          'Listen first, then suggest a concrete day in the next follicular phase to decide',
          'Have the whole discussion right away, so it is over with',
          'Change the subject',
        ],
        correctIndex: 1,
        explanation:
          'Postpone the decision, not the listening. The difference between postponing and avoiding is whether there is a date.',
      },
    ],
  },
};
