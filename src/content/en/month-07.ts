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
    'Understand mood swings and irritability so you stop taking them personally and actually help, instead of just looking worried.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'Day 24 and day 27 are not the same',
      insight:
        'In month 1 you learned that PMS is a hormone drop. Now we zoom in, because you have watched this from the sofa long enough. The corpus luteum, which has been making progesterone since ovulation, starts to die about a week before the period. Progesterone and estrogen do not fall in a single day but gradually over 5-7 days, and the symptoms follow the curve: first a slight restlessness and a shorter fuse, then tears, hunger and poor sleep, and the last two or three days are typically the hardest. Once the bleeding starts, the drop is over and most of it eases within a day. So you do not have to settle for knowing that she is in the window. You can know where in the window. Day 24 and day 27 are not the same, even if they look identical to a man guessing with the remote in his hand.',
      action:
        'Look up in the app how many days remain until the expected period, and check whether that matches how she is doing today. Do not guess. You guessed on the salt too. Look it up.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS, SUNDHED_PMS],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: 'Serotonin: why mood comes down too',
      insight:
        'Listen. Estrogen supports the brain\'s production and use of serotonin, the messenger that keeps mood stable, dampens anxiety and regulates sleep and appetite. When estrogen falls, serotonin activity falls with it. That is why the PMS days look like a miniature version of low serotonin in general: low mood, irritability, cravings for sweet things, poor sleep. At the same time progesterone breaks down into a substance that normally calms the brain, and that disappears too. And now the part to remember next time you feel like saying something clever about hormones over the stove: hormone levels in women with severe PMS are typically completely normal. It is the brain\'s sensitivity to the swings that differs. She does not have "too many hormones". Her brain reacts more strongly to the same shifts. Your theory from year 7 has done its bit. It can retire now, along with the haircut from the same year.',
      action:
        'Say the sentence out loud to yourself today, ideally alone in the car where nobody can hear you rehearse: "It is not the amount of hormones, it is the sensitivity." It changes how you look at her on those days.',
      phaseTags: [],
      sources: [ACOG_PMS],
    },
    {
      id: dailyId(M, 3),
      month: M,
      day: 3,
      title: 'Over 150 symptoms, and you know three',
      insight:
        'More than 150 different PMS symptoms have been described, and nobody has all of them. The physical: bloating, sore breasts, headache, tiredness, hunger, sleep problems, joint pain. The psychological: irritability, sadness, anxiety, tears, trouble concentrating, the feeling of losing control. The combination is personal and fairly stable from month to month. One woman goes quiet and tired, another short-tempered and restless, a third sorrowful. The general PMS knowledge you have from one article and one colleague at the coffee machine gets you part of the way. It is her profile you need to know. It takes two or three cycles to spot, and it is in the calendar if you log. It is not in your memory. Your memory could not even hold on to what you had for dinner yesterday.',
      action:
        'Ask her: "What are the two or three things you notice most clearly yourself in the week before?" Write the answer in a note in the app. Not in your head. We have seen what your head does to shopping lists.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'The amplifier: volume and subject',
      insight:
        'You know the sentence: PMS amplifies feelings, it does not invent them. Now here is what it means in practice. Imagine all her reactions normally pass through a filter that sorts out the small stuff and dampens the big. In the PMS days the filter is thinner. What registers on day 10 as a minor irritation and is forgotten comes through on day 26 at full size. That applies to the positive too: a loving sentence can land deeper. The important part for you is that the content is real. If she is angry that you forgot something, the hormones did not invent the forgetting. You managed that all on your own, no help needed. The volume is hormonal. The subject is real. Both deserve to be taken seriously, and only one of them is something you can do anything about. Guess which.',
      action:
        'Think back to your most recent PMS conflict and separate the two layers: what was the subject, and what was the volume? The subject is what you act on. The volume you just have to survive. You have done that before.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'PMDD: when it is more than PMS',
      insight:
        'Premenstrual dysphoric disorder, PMDD, is the severe form. It affects 3-8 percent of women of childbearing age and is a recognised diagnosis, not "bad PMS". The difference is the degree: with PMDD the psychological symptoms are so intense that they disrupt work, relationships or everyday life for a week or more every single month. Severe low mood, anxiety, rage, hopelessness, and in some, thoughts of not wanting to live. The symptoms almost completely disappear when the bleeding comes, and the good weeks are genuinely good. It is precisely that contrast that makes PMDD so exhausting, and that leaves many going for years without being taken seriously. There is treatment that works. The first step is getting it looked at. Your first step is to read this calmly, sit down at the table, and not hand out a diagnosis with the phone in one hand and a coffee in the other.',
      action:
        'Read the description again and be honest: does it sound like her everyday life in the week before? If yes, read on through this month before you say anything. Not tonight. Not in a quiet moment over the washing-up either.',
      phaseTags: [],
      sources: [NHS_PMS, ACOG_PMS],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: 'The timing is the evidence',
      insight:
        'What separates PMS and PMDD from depression and anxiety is not the symptoms but the calendar. With PMDD there is a clear symptom-free period in the follicular phase, typically from the end of the period until around ovulation. With depression there is not. Some women have both: an underlying depression that gets markedly worse in the week before. That is called premenstrual exacerbation. This is why the doctor asks for a diary and not just a description. Memory remembers the hard days and forgets the good ones, and your memory is no better than hers, whatever you believe while looking for your keys. Now that the bleeding has started, it is a good moment to notice the shift: does she come back to herself within a couple of days? That is the answer to an important question, and you do not need to ask it out loud.',
      action:
        'Notice whether her mood lifts now that the period has started. Write in today\'s note: "better" or "unchanged". One word. You have written longer messages about a football match.',
      phaseTags: ['menstrual'],
      sources: [ACOG_PMS],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'Two cycles with a diary',
      insight:
        'If you are wondering whether it could be PMDD, you already have the tool. The diagnosis is made on daily records over at least two cycles, where the symptoms must be present in the week before the period and gone in the week after. Doctors call it prospective charting, and it is not bureaucracy. It is the only way to separate PMDD from other conditions. The app calendar is exactly that kind of diary, if it is filled in every day, including the good days. Especially the good days. It is "no symptoms" on day 8 that turns "severe anxiety" on day 26 into a pattern rather than just a bad day. Yes, that means remembering it on a Tuesday when everything is fine, the match is on and you have just got comfortable. That is what you are for. That, and taking the bins out.',
      action:
        'Suggest logging mood every day for the next two cycles, and offer to be the one who reminds her, if she wants that. Ask first. Do not just remind. You are not a dishwasher that beeps.',
      phaseTags: [],
      sources: [ACOG_PMS, SUNDHED_PMS],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: 'There is treatment that works',
      insight:
        'Worth knowing before you consider a doctor: PMDD and severe PMS can be treated, and there are more options than most people think. SSRIs, the type of medication also used for depression, often work within days for PMDD rather than weeks, and some take them only in the last two weeks of the cycle. Hormonal contraception that suppresses ovulation removes the swings for some. Cognitive behavioural therapy teaches techniques for handling the thoughts when they come. Regular exercise, sleep and meals take the edge off all of it. Choosing is the doctor\'s job. Not yours, not even after two articles and a podcast you half listened to while peeling potatoes. Your job is to know that there is something to choose from, so that "this is just how it is" never gets the last word in the house.',
      action:
        'Save this sentence for a day when she doubts: "It can be treated, and you do not have to work out how on your own." Learn it by heart. You know three pizza recipes by heart, so you can manage this one.',
      phaseTags: [],
      sources: [NHS_PMS, ACOG_PMS],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'Your "mm" lands like a verdict',
      insight:
        'Now listen, because this is one of the least known and most disruptive PMS symptoms: a heightened sensitivity to rejection. A short message, an "mm" instead of an answer, looking at your phone while she talks, or going to bed without saying goodnight. Things that do not register on day 10 feel on day 26 like proof that you do not care. It is not insecurity in the relationship. It is a brain low on serotonin looking for danger, and your "mm" is the first thing it finds. Saying "I did not mean it like that" does not help. Preventing it does: a little more clarity, a little more eye contact, a little more "I am here", on precisely those days. It costs you nothing. There is nothing important on your phone anyway. There never has been.',
      action:
        'Put the phone away when she talks to you today, and say goodnight with eye contact. Not to the ceiling. Not to the pillow. To her. Small signals that land big right now.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 10),
      month: M,
      day: 10,
      title: 'Anxiety and restlessness',
      insight:
        'Many women describe PMS anxiety as an engine running too fast: restlessness in the body, thoughts going round in circles, worry about things that are otherwise manageable, and sometimes a feeling that something terrible is about to happen without being able to say what. It is linked to the calming substance that progesterone breaks down into disappearing along with the hormone drop. Anxiety in this phase is not a sign that she is weak, and not a sign that something is wrong in your life together. Your urge to prove the worry unfounded, in a calm voice with good arguments, can go on the shelf next to the other things you were sure about. Arguments do not work on anxiety. What works is being calm, concrete and close: "I am here. We take one thing at a time."',
      action:
        'If she seems anxious today, do not ask "what is wrong?" but say: "Shall we go for a walk, or would you rather I just sat here?" Then do whichever she picks. Not the one you had already counted on.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'Tears close to the surface',
      insight:
        'Crying in the PMS days often comes suddenly and over something that does not seem big: an advert, a messy kitchen, a comment. She knows it herself and is often embarrassed or annoyed about it, which brings more tears. What is happening is a low threshold, not a great sorrow. The worst thing you can do is demand an explanation or start fixing whatever she is crying about. No, you should not clean the kitchen now. You should not fetch the hoover either. You should sit down. The best thing is boring: being there, offering a hand or a cup of tea, and letting it pass on its own. If there is something behind the tears, it will come out when she is ready. And it is completely fine to say "you do not have to explain". Honestly, it is the best thing you have said all week.',
      action:
        'Next time the tears come: sit down next to her, say "you do not have to explain", and stay there for five minutes without doing anything. Five whole minutes. That is longer than you think. You have never sat still that long without a remote.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: 'Rage: the hard one',
      insight:
        'Anger is the PMS symptom both she and you would rather not talk about. But it is one of the most common with PMDD: a sudden, physical anger that comes fast and feels out of proportion, to her as well. Many describe afterwards that they watched themselves from the outside and could not stop. It is not an excuse for treating you badly, and we will come back to that. But it matters to understand that in the moment, the anger is often more physiology than intent. What escalates is answering back with the same force, which is exactly what your own body wants you to do. Your body has never had a good idea in the middle of an argument. What de-escalates is lowering your voice, taking a break and coming back later. Boring. Works.',
      action:
        'Agree with yourself on one sentence for the next time it boils over: "I am going to the kitchen for ten minutes, and then I am coming back." Say it calmly, and keep it. Both halves. Including the one where you come back.',
      phaseTags: ['luteal'],
      sources: [ACOG_PMS],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: 'Brain fog: ask fewer questions',
      insight:
        'Trouble concentrating, forgetfulness and the feeling of thinking through cotton wool are common in the days before the period, and like the other symptoms they disappear when the bleeding starts. They are linked both to the serotonin drop and to the poor sleep of the luteal phase. Brain fog is frustrating for her, especially in a job that demands an overview, and it easily causes conflict at home: a forgotten appointment, a week\'s plan that slips, a decision that cannot be made. What helps is taking cognitive load away: fewer choices, shorter messages, one thing at a time. "What are we eating, when, and is your mum coming?" is three questions, shouted from the kitchen. Ask zero. Decide dinner yourself, you have stood at that stove before. That is not talking down to her. It is taking something off her plate in a week when it is heavy.',
      action:
        'Take one planning task off her today: dinner, an appointment that needs moving, or a message that needs answering. Just say "I have got that one". Then have it. All the way, not just until it gets fiddly.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'Three seconds that save the evening',
      insight:
        'In month 1 you learned to respond to the need, not the tone. Now here is the technique in three steps. One: pause for three seconds before you say anything. It sounds trivial, but those three seconds decide whether you defend yourself or listen. Your first impulse is always defence. It has never been good, and it will not be today. Two: translate the sentence in your head. "You never help" becomes "I feel alone with this". Three: answer the translation, not the words. "It sounds like you have too much on. What do I take now?" If you get it wrong, she will correct you, and that is fine. If the tone continues even though you have answered the need, it is time for a break, not a fight. More on that later in the month. Stick around.',
      action:
        'Practise the three seconds today, in any conversation at all, including the one with the man at the corner shop: take one breath before you answer. It has to be in your body when you need it. There will be no time to look it up.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 15),
      month: M,
      day: 15,
      title: 'Repair after a conflict',
      insight:
        'All couples have conflicts in the PMS window, however well they understand the mechanism. You too, even after this month, even if you have read every single card. What decides whether the relationship takes damage is not the conflict but the repair afterwards. Once the bleeding has started and calm has returned, there is a window to pick things up. It should not be a trial about who said what, and you should not show up with a list of your points, however nicely laid out. It should be short: what happened, what can we do differently next time, and is there anything one of you needs to apologise for. She can apologise for the tone without that meaning the subject was wrong. You can apologise for defending yourself without that meaning you deserved the tone. Both can be true. At the same time. That is hard for you, I know.',
      action:
        'If there was a conflict in the latest PMS week, say today: "Can we talk about last week, briefly? Not to find blame, just to learn from it." Then keep your word on "briefly". You have a tendency.',
      phaseTags: ['menstrual'],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'Sentences that should stay in your mouth',
      insight:
        'You know the classics: "Is it PMS?", "It is just the hormones", "You are overreacting". Here are the less obvious ones that do just as much damage, and that you have probably used. At least one of them this month. "You were like this last month too" uses the calendar as a weapon. "I am not saying anything" is a defence speech dressed up as innocence. "I cannot do anything right" turns her symptom into your problem. "Shall we talk about it when you are yourself again?" says she is not herself now. The common thread is that they are all about you and make her the problem. Needing a break is not forbidden. It is how you say it: "I need ten minutes, and then I am back" says the same thing without hitting anyone. Try it. It is better than anything you have come up with yourself.',
      action:
        'Find the one sentence you are most likely to use, and write your alternative in a note on your phone. Be honest about which one. You know which one. So does she.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'What actually helps to say',
      insight:
        'The sentences that work in the PMS days have three things in common: they acknowledge, they ask for nothing, and they offer something concrete. "That sounds hard. I am here." "You do not have to explain." "I will do dinner, just lie down." "Do you want me to stay, or do you need some peace?" "I know it is a heavy week, and I think you are handling it well." Notice what is missing: no explanations of why she feels this way, no suggestions for what she should do, no questions that require an answer with reasons. None of your own theories, she has heard those. She knows what is happening in her body. She has lived in it longer than you have known her. She does not need information. She needs company. And dinner, but you are doing dinner.',
      action:
        'Pick one of the sentences and say it to her today, with no occasion and without expecting anything back. Not even a "thank you". Not even a nod. You did not do it for the points.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'Her own strategies',
      insight:
        'Most women who have had PMS for many years have developed their own ways of getting through the week. Some run, some go to bed early, some cancel everything social, some need to be alone, some the opposite. Some know that a particular meal, a bath or a particular series helps. You may know some of them, but rarely all, because she has not put them into words and because you have not asked. You have asked about plenty of other things. The follicular phase is the right time to ask, because now there is energy to think about it, and it does not feel like criticism. It is not your job to find better strategies. She has not hired a consultant, and if she had, it would not be you. Your job is to know hers, so you can back them up instead of standing in their way.',
      action:
        'Ask today: "What do you do yourself that helps in the week before? And what do I sometimes do that gets in the way?" Listen to the second part without defending yourself. That is the hard part. Sit on your hands if it helps.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 19),
      month: M,
      day: 19,
      title: 'Support the strategy, and do not run it',
      insight:
        'Once you know her strategies, the temptation is to manage them: "Were you not going to run today?" "You said you would be in bed by ten." It is well meant, and it lands as control, especially in a week when sensitivity to criticism is high. You are not her coach. You are not her calendar either, and you have never been much good at being your own. Support looks different. It is clearing the path: taking the kids so she can run, without mentioning the run. Getting the bedroom ready at half past nine without saying she ought to go to bed. Not suggesting guests that week, and that includes your brother "just popping in". And accepting that some days the strategy is lying on the sofa, and that this is also a strategy. You help most when she does not have to spend energy explaining or defending what she does.',
      action:
        'Pick one of her strategies and make room for it today without commenting on it: take a task, clear an hour or refrain from planning anything. And do not mention that you did. Not even with a look.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 20),
      month: M,
      day: 20,
      title: 'Sleep, food and movement as medicine',
      insight:
        'The three things with the best evidence for easing PMS without medication are also the three that are hardest to keep up precisely when you have PMS: regular exercise, enough sleep and regular meals. Exercise raises serotonin and dampens anxiety, sleep stabilises mood, and steady meals prevent the blood sugar dips that amplify irritability more than anything else. Less alcohol and caffeine that week also helps more people than believe in it. It is not your job to put her on a programme, and if you have already made a colour-coded chart, tear it up. Your job is to make the three things easy: a walk together after dinner, an early night without screens, and food in the house so the meal does not get skipped. The fridge is your department. It always has been, nobody told you.',
      action:
        'Suggest a 20-minute walk after dinner today, with no agenda. If she does not come, make it an early night instead. And check that there is food for tomorrow. Real food. Ketchup is not food.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: 'When it deserves a doctor',
      insight:
        'You cannot decide whether it is PMS or PMDD, and you are not supposed to. But there are signs that mean it should be assessed: if the symptoms disrupt her work, relationships or everyday life every month. If she herself says she cannot recognise herself in that week. If there are thoughts of not wanting to live, even if they "only" come in the PMS days. If you both dread the week in advance. If she has tried what she can on her own and it is not enough. One of the signs is enough. With thoughts of suicide it has to be now, not after two cycles with a diary. Everything else can wait for the right moment to talk about it. And the right moment is not while you are still standing in the middle of the kitchen with the phone in your hand and the list half read.',
      action:
        "Go through the list for yourself today. If you recognise one or more signs, read tomorrow's card before you say anything. Tomorrow. Not in five minutes. I know you.",
      phaseTags: [],
      sources: [NHS_PMS, SUNDHED_PMS],
    },
    {
      id: dailyId(M, 22),
      month: M,
      day: 22,
      title: 'How to suggest a doctor',
      insight:
        'Suggesting a doctor can sound like "there is something wrong with you" if it is said the wrong way or at the wrong time. The wrong time is in the middle of the PMS week. The right time is now, in the follicular phase, when there is calm to hear it. The wrong way is to diagnose: "I think you have PMDD." You have read an app. That is not a medical degree, however many cards you have finished. The right way is to describe and offer: "I can see the week before is really hard for you, and I have read that there is treatment. Would you consider talking to the doctor about it? I would gladly come along." If she says no, respect it and leave the door open. Not ajar with your foot in it. Open. The decision is hers. Your role is to make it possible, not to make it for her.',
      action:
        'If you recognised the signs yesterday: say the sentence today, and offer to help print or send the logged cycles to the doctor. The practical part. You are good at that. Honestly, it is the thing you are best at.',
      phaseTags: ['follicular'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'Your feelings count too',
      insight:
        'This whole month is about understanding her. But you are also a person who lives in the same house in the same week. It is okay to be hurt when the tone is sharp. It is okay to be tired of walking on eggshells. It is okay to dread the week in advance. If you swallow it, it piles up and comes out as coldness or sarcasm, typically at the worst moment, and typically as a remark you thought was rather witty. It was not. It never was. What works is having somewhere to put it: a friend, a sibling, a walk alone, a note on your phone. And telling her when calm has returned: "Last week was hard for me too." Not as an accusation. As information, the way you would mention that the milk is running out.',
      action:
        'Write three lines today about what the latest PMS week was like for you. Not to her, to yourself. Read them again in a month. Yes, you are still writing notes. It is part of the package, like emptying the dishwasher.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 24),
      month: M,
      day: 24,
      title: 'Staying calm is not putting up with everything',
      insight:
        'Keeping calm in the PMS days does not mean everything is allowed. A sharp tone, a short fuse and tears are symptoms. Belittling remarks, being called names, having things thrown at you or being shouted at in front of the children are not symptoms, and hormones do not remove responsibility. The difference matters for both of you. She has the right to a hard week. You have the right to say "you do not talk to me like that", calmly, and leave. That is not dismissing her feelings. It is a boundary, and boundaries are what let you keep being patient in the long run. Patience is not a bottomless tank, not even yours, however much you would like to think so. If the boundary is crossed every month, that is a conversation for the good week, and perhaps with help from outside.',
      action:
        'Formulate for yourself one boundary that does not depend on the cycle. Tell her in the good week, not as an ultimatum, but as information. One boundary. Not a list. You love lists, but not here.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 25),
      month: M,
      day: 25,
      title: 'Postpone, do not avoid',
      insight:
        'You now know that hard conversations should go outside the PMS window. There is a trap in that, and you have probably already fallen into it with both feet: "let us take it later" becomes "let us never take it", because there is always a reason. Then the subject grows, and it comes out in the PMS week anyway, just bigger. The difference between postponing and avoiding is whether there is a date. "Can we take it on Sunday?" is postponing. "Not now" with nothing more is avoiding, and you know that yourself, you just hoped she did not. And if she is the one raising the subject on day 26, listen first. She has the right to be heard, even when the timing is bad. What you can suggest is deciding later. Not listening later. Listening cannot be postponed. It is not a bill.',
      action:
        'Is there a subject you have been pushing ahead of you? Suggest a specific day in the next follicular phase, and put it in the calendar today. With a time. "Sometime next week" is not a date. It is an excuse with a calendar on it.',
      phaseTags: ['luteal', 'follicular'],
    },
    {
      id: dailyId(M, 26),
      month: M,
      day: 26,
      title: 'The good week is for agreements',
      insight:
        'The follicular phase is not just the pleasant week. It is also the week when you can make agreements about the hard one. With energy and distance you can talk about what worked last time, what did not, and what you want to try next. Many couples discover they have talked about PMS a hundred times, but never outside PMS. That is like holding a fire drill while the building is burning, and you are standing there with the bucket asking where the water is. The agreements do not need to be big: who does dinner that week, whether guests are a good idea, what she wants you to do when the tone gets sharp, and what you may do when you need a break yourself. Write them down. Memory is the first thing to go on day 26, and yours honestly went on day 3, along with the shopping list.',
      action:
        'Set aside 15 minutes today to make two or three agreements for the next PMS week, and write them in a note you can both find. Both. Not just in your head. We know how that goes in there.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 27),
      month: M,
      day: 27,
      title: 'The peak before the drop',
      insight:
        "Around ovulation estrogen is at its highest, and for many these are the best days of the cycle: energy, desire, mood and confidence. Worth enjoying. Also worth knowing that the drop starts from here, and that there are typically 7-10 days until the PMS window opens. That makes ovulation a natural moment to look ahead: what is in the calendar in 10-14 days? A big family party, a deadline, a trip, a hard conversation, your mother's birthday, which you have forgotten two years running? What you can move is cheapest to move now. What you cannot move you can prepare for: a smaller programme around it, a buffer of calm before and after, and an agreement that she can withdraw if she needs to. No discussion in the doorway on the day, with your jacket half on.",
      action:
        'Open the calendar, find the days the app expects to be the PMS window, and look for one thing that can be moved or made smaller. Move it today, while it is cheap. In ten days it will cost you.',
      phaseTags: ['ovulation'],
    },
    {
      id: dailyId(M, 28),
      month: M,
      day: 28,
      title: 'Agree on a signal',
      insight:
        'One of the simplest and most effective tools couples use is a signal: a word or sentence that means "I am in the window now, and it is not you". It can be as simple as "it is a heavy day" or an agreed word that means nothing else. The point is that she does not have to explain herself, and you do not have to guess. You are not good at guessing. Nobody is, but you in particular are not. The signal only works if it is agreed in advance, in a calm phase, and if you respond to it the same way every time: with lower expectations and more care, not with "oh, so that is why". It should go the other way too: a signal from you that means "I need a break, and I am coming back". And then you come back. That is the part people forget.',
      action:
        'Suggest a signal today, and agree what you do when you hear it. Test it in the coming PMS week. And respond to it, even the first time. Especially the first time.',
      phaseTags: ['ovulation'],
    },
    {
      id: dailyId(M, 29),
      month: M,
      day: 29,
      title: 'The relief when the bleeding comes',
      insight:
        'For many women with pronounced PMS the first day of the period is not a bad day but a relief. The fog lifts, the anxiety settles, and she can feel like herself again. Some describe it as waking up. It is a good moment to say something you perhaps did not get said in the week before, because you were busy holding your breath and looking as if you had it all under control: that you saw how hard it was, and that she got through it. It is also a moment when she may feel guilty about things that were said. She does not need you to confirm that it was bad. She needs you to confirm that you are still on the same team. And then it is time to log what the week was like, while you both remember it. Your memory has already started packing up.',
      action:
        'Say today: "I could see it was a hard week. Glad you are through it." And write three words together in the note about what the week was like. Three words. Not an essay. This is not an exam.',
      phaseTags: ['menstrual'],
    },
    {
      id: dailyId(M, 30),
      month: M,
      day: 30,
      title: 'Month 7: what you can do now',
      insight:
        'Now listen to what you can do. You know that PMS is a gradual hormone drop which the brain responds to with lower serotonin, and that it is the sensitivity, not the amount of hormones, that differs. You know that PMDD is a real diagnosis in 3-8 percent, that it is made with a diary over two cycles, and that there is treatment. You can recognise rejection sensitivity, anxiety, tears, rage and brain fog, and you know what to say and what not to say. You know that repair after a conflict matters more than the conflict, that staying calm is not putting up with everything, and that postponing needs a date. Most important: you know the amplifier is hormonal and the content is real, and that both deserve you. Including the version of you that learns a little slowly and still cannot find his notes.',
      action:
        "Tell her the two things from this month that have changed most in how you see the PMS week. Then take the month's quiz. Without flipping back. We can tell if you do.",
      phaseTags: [],
    },
  ],
  weekly: [
    {
      id: weeklyId(M, 1),
      month: M,
      week: 1,
      title: 'What PMS does to the brain, and what you do about it',
      body: [
        'In month 1 you got the model: hormones fall in the week before the period, and it is felt as PMS. Now listen, because in this article we go one layer deeper. The better you understand the mechanism, the less personally you take it, and the more precisely you can help. And the less often you stand in the kitchen with a wooden spoon in your hand looking as if someone changed the rules without telling you.',
        'After ovulation the corpus luteum produces progesterone, and estrogen gets a smaller second peak. If the egg is not fertilised, the corpus luteum starts to wither about a week before the period, and both hormones fall gradually over 5-7 days. It is not one drop but a curve. That is why the symptoms typically start mildly and build, and why the last two or three days before the bleeding are often the hardest.',
        "The brain feels the drop in two ways. Estrogen supports the production and effect of serotonin, the messenger that keeps mood stable, dampens anxiety and regulates sleep and appetite. When estrogen falls, serotonin activity falls with it, and in many ways it resembles a miniature version of what is seen in depression: low mood, irritability, cravings for sweet things, sleep problems. At the same time the body breaks progesterone down into a substance that has a calming effect on the brain's GABA system, the same system that alcohol and sedatives act on. When progesterone disappears, the calming effect disappears too. The result is restlessness, anxiety and a feeling that everything is a bit too much.",
        'Here is the most important thing to understand, and the thing to remember next time you are tempted to explain hormones to someone who has them: hormone levels in women with severe PMS are usually completely normal. It has been measured and compared, and the difference lies not in the amount of hormones but in how strongly the brain reacts to the swings. Some brains are more sensitive to the same shifts. So "she has too many hormones" is wrong, and "she is just sensitive" is wrong in a different way. She has a nervous system that reacts more strongly to a normal biological process. She cannot opt out of it, any more than anyone can opt out of migraine. Or any more than you can opt out of getting hungry at 10 pm.',
        'That is why the sentence from month 1 holds: PMS amplifies feelings, it does not invent them. Think of it as a filter that normally sorts out the small stuff and dampens the big. In the PMS days the filter is thinner. What registers and is forgotten on day 10 comes through at full size on day 26. That applies to irritation over a lopsided division of chores, hurt over something you said, and worry about something at work. It applies to the good as well: a loving sentence lands deeper. The content is real. The volume is hormonal. Both are real, and only one of them is something you have any influence over. And the lopsided division of chores, my friend, is not invented.',
        'What do you do with that? First: stop trying to decide whether a feeling is "real" or "hormonal". It is a false choice, and you lose it every time, including the times you think you won. The feeling is real and it is amplified, at the same time. Act on the content, and do not react to the volume. Next: learn her profile. PMS is not one thing; over 150 symptoms have been described, and every woman has her own fixed combination. Some go quiet and tired, others short-tempered and restless, others sorrowful. The general knowledge in this article gets you part of the way. Her profile, which you will find in the calendar after two or three logged cycles, gets you the rest. It is in the calendar, not in your gut feeling. Your gut feeling also said there was enough milk.',
        'And finally: because it is a curve, you can follow along. Day 24 and day 27 are not the same. Look in the app, see how many days remain until the expected period, and adjust your expectations accordingly. That is not treating her like a calendar. It is taking her biology as seriously as she has to. It takes twenty seconds and requires no special talent. You have spent longer choosing a series. You can manage it.',
      ],
      conversationQuestion:
        'How do you feel the drop yourself in the week before: does it come gradually or suddenly, and which days are the hardest for you?',
      sources: [NHS_PMS, ACOG_PMS, SUNDHED_PMS],
    },
    {
      id: weeklyId(M, 2),
      month: M,
      week: 2,
      title: 'PMDD: a real condition, and there is treatment',
      body: [
        'Three out of four women feel PMS to some degree. For 3-8 percent it is so severe that it has its own name: premenstrual dysphoric disorder, PMDD. It is a recognised diagnosis, and that needs saying clearly, because many have lived with it for years and been told it is "just PMS", "just hormones" or something they should pull themselves together about. That sentence should not come from you. Not even half of it, not even as a joke over the stove.',
        'The difference between PMS and PMDD is the degree, not the type. With PMDD the psychological symptoms dominate and are so intense that they disrupt work, relationships or everyday life for a week or more every month: severe low mood, anxiety and tension, sudden rage, the feeling of losing control, hopelessness, and in some, thoughts of not wanting to live. The symptoms begin in the week before the period, peak in the last days and almost completely disappear within a few days of the bleeding starting. The good weeks are genuinely good, and it is precisely the contrast that makes PMDD so exhausting: she knows exactly what is coming and cannot stop it.',
        'It is the calendar that separates PMDD from depression and anxiety disorders. With PMDD there is a clear symptom-free period from the end of the period until around ovulation. With depression there is not. Some women have both, an underlying depression that gets markedly worse in the week before, and that needs different treatment. That is why the diagnosis is not made on a description but on daily records over at least two cycles, where the symptoms must be present before the period and gone after. Memory remembers the hard days and forgets the good ones; the diary remembers both. The app calendar is exactly that kind of diary, if it is filled in every day, also when everything is fine. It is "no symptoms" on day 8 that turns "severe anxiety" on day 26 into a pattern. So yes, it matters on a boring Tuesday too, when there is nothing to write and you would rather not.',
        "What few people know is that PMDD can be treated, and that there are several routes. SSRIs, the type of medication also used for depression, are the first choice and work differently in PMDD than in depression: often within days rather than weeks. That is why some take them only in the last two weeks of the cycle. Hormonal contraception that suppresses ovulation removes the swings for some, especially certain types of pill. Cognitive behavioural therapy teaches techniques for recognising and handling the thoughts when they come, and has good evidence in both PMS and PMDD. Regular exercise, sleep, steady meals and less alcohol and caffeine take the edge off all of it. In very severe cases there are further options a specialist can assess. Choosing is the doctor's job. Your job is to know that there is something to choose from. You do not need to be able to explain how an SSRI works. You cannot, anyway. You cannot explain how the oven works either, and you use that every day.",
        'When does it deserve a doctor? If the symptoms disrupt her work, relationships or everyday life every month. If she herself says she cannot recognise herself in that week. If you both dread the week in advance. If she has tried what she can on her own and it is not enough. And if there are thoughts of not wanting to live, even if they "only" come in the PMS days, then it has to be now, not in two cycles. One of the signs is enough.',
        'How you suggest it matters almost as much as that you do. Not in the PMS week, where it sounds like "there is something wrong with you". In the follicular phase, where there is calm to hear it. Not as a diagnosis: "I think you have PMDD." You have read an app, not passed medical school. But as an observation and an offer: "I can see the week before is really hard for you, and I have read that there is treatment. Would you consider talking to the doctor? I would gladly come along." Offer to help bring the logged cycles to the doctor, because that is what the conversation rests on. The practical side is your strength; use it here. And if she says no, respect it and leave the door open. The decision is hers. Your role is to make it possible.',
        'Whether it is PMS or PMDD, you are not the one to make the diagnosis, and not the one to treat it. You have two things to do: take it seriously, and make the road to help shorter. It sounds like little. It is more than most get. Sit down at the table, and be the one who remembers the dates.',
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
        'The psychological PMS symptoms are the ones that hit a relationship hardest, because they come out as something that looks like a reaction to you. And your first impulse is to take it as a reaction to you. That impulse is a bad one, and you will have it for life, like your habit of saying "nearly done" half an hour before you are. This article goes through the five most common symptoms, what lies behind them, and what you concretely do when they come.',
        'Rejection sensitivity is the least known. In the PMS days a brain low on serotonin looks for danger, and small things that normally do not register become proof that you do not care: a short message, a glance at the phone while she talks, going to bed without saying goodnight. Saying "I did not mean it like that" does not help, because it is an explanation of something that has already hurt. Preventing it helps: a little more eye contact, a little more clarity, a little more "I am here", on precisely those days. Put the phone away when she talks. Say goodnight with eye contact. It costs nothing, and there is nothing important on your phone at 10 pm anyway. There was nothing at 9 pm either.',
        'Anxiety and restlessness feel like an engine running too fast: thoughts in circles, worry about things that are otherwise manageable, a feeling that something terrible is on its way. It is linked to the calming substance progesterone breaks down into disappearing with the drop. Do not argue with the anxiety, and do not prove the worry unfounded; it comes across as dismissive, however good your arguments are, and they are rarely as good as you think. Be calm, concrete and close. "I am here. We take one thing at a time." Offer a walk or simply your company, and let her choose.',
        'Tears come suddenly and over something that does not seem big. She knows it herself and gets embarrassed, which brings more tears. It is a low threshold, not a great sorrow. Do not demand an explanation, and do not start fixing what she is crying about. Sit down next to her, say "you do not have to explain", and stay. If there is something behind it, it will come when she is ready. Brain fog, trouble concentrating and forgetfulness, is the symptom that most often causes practical conflict: a forgotten appointment, a decision that cannot be made. What helps is taking cognitive load away: fewer choices, shorter messages, one thing at a time. "I have got that one" is the best sentence of the week. It requires that you then actually have it. All the way, not just until it gets boring.',
        'Rage is the symptom neither of you wants to talk about, and one of the most common with PMDD: a sudden, physical anger that comes fast and feels out of proportion, to her as well. Many describe afterwards that they watched themselves from the outside and could not stop. What escalates is answering back with the same force, which is what your body votes for every time. Your body has never won a vote worth winning. What de-escalates is lowering your voice, taking a break and coming back. And when the tone gets sharp without it being rage, use the three steps: a three-second pause, translate the sentence ("you never help" means "I feel alone with this"), and answer the translation: "It sounds like you have too much on. What do I take now?"',
        'There are sentences that always make it worse. The obvious ones: "Is it PMS?", "It is just the hormones", "You are overreacting". And the less obvious ones you have probably used: "You were like this last month too" (the calendar as a weapon), "I am not saying anything" (defence dressed up as innocence), "I cannot do anything right" (her symptom becomes your problem), "Shall we talk about it when you are yourself again?" (she is not herself now). The common thread is that they are about you and make her the problem. What works acknowledges, asks for nothing and offers something concrete: "That sounds hard. I am here." "I will do dinner, just lie down." "Do you want me to stay, or do you need some peace?" She does not need information about her own body. She needs company. And dinner. You are doing dinner.',
        'Finally, the most important part: there will be conflicts anyway. What decides whether the relationship takes damage is the repair. When the bleeding has started and calm is back, have a short conversation: what happened, what do we do differently next time, and is there anything one of you wants to apologise for. She can apologise for the tone without the subject being wrong. You can apologise for defending yourself without having deserved the tone. Both can be true at once. That is how you stay on the same team. And yes, it is still hard for you. It will keep being hard. You do it anyway.',
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
        'The first three weeks were about understanding her. This last article is about you, about what you can do together, and about keeping it up year after year. Because patience is not inexhaustible, not even yours, and a relationship where one person always adapts does not last. Neither do you, however tough you think you are.',
        'Start with your own feelings. It is okay to be hurt when the tone is sharp. It is okay to be tired of walking on eggshells, and it is okay to dread the week in advance. If you swallow it, it piles up and comes out as coldness, sarcasm or an explosion, typically at the worst moment and typically as a remark you found rather sharp yourself. It was not sharp. It was just sour. Have somewhere to put it: a friend, a sibling, a walk alone, a note on your phone. And tell her when calm has returned, not as an accusation but as information: "Last week was hard for me too." That is not making her symptoms your problem. It is being honest that you live in the same house.',
        'Then the boundaries. Staying calm does not mean everything is allowed. A sharp tone, a short fuse and tears are symptoms. Belittling remarks, being called names, having things thrown at you or being shouted at in front of the children are not symptoms, and hormones do not remove responsibility. She has the right to a hard week. You have the right to say "you do not talk to me like that", calmly, and leave the room. That is not dismissing her feelings. It is a boundary, and boundaries are what let you keep being patient in the long run. If it is crossed every month, that is a conversation for the good week, and perhaps one you need outside help with. Formulate one boundary for yourself that does not depend on the cycle, and tell her in the follicular phase. Not as an ultimatum. As information, the way you would say there is no coffee left.',
        'The same logic applies to hard conversations. In months 1 and 2 you learned to keep them outside the PMS window. The trap is that "let us take it later" becomes "let us never take it", and then the subject grows and comes out in the PMS week anyway, just bigger. The difference between postponing and avoiding is whether there is a date. "Can we take it on Sunday?" is postponing. "Not now" with nothing more is avoiding, and you know it. You have done the same with the dentist. And if she is the one raising the subject on day 26, listen first. She has the right to be heard, even when the timing is bad. What you can suggest is deciding later, not listening later.',
        'Now to her own strategies. Most women with many years of PMS have found their ways of getting through the week: running, early nights, no guests, time alone, a particular meal, a bath, a series. You know some of them, rarely all, because she has not put them into words and because you have not asked. Ask in the follicular phase: "What do you do yourself that helps? And what do I sometimes do that gets in the way?" Listen to the second part without defending yourself. And once you know the strategies, do not manage them. "Were you not going to run today?" is well meant and lands as control. You are not her coach. You do not even have a whistle. Support is clearing the path: take the kids so she can run, without mentioning the run. Get the bedroom ready without saying she ought to go to bed. Do not suggest guests that week. And accept that some days the strategy is the sofa.',
        'All of this only amounts to something once it turns into agreements, and agreements are made in the good week. Many couples have talked about PMS a hundred times, but never outside PMS. That is like holding a fire drill while the building is burning. Set aside a quarter of an hour in the follicular phase: who does dinner that week, are guests a good idea, what does she want you to do when the tone gets sharp, and what may you do when you need a break yourself. Agree on a signal, a word or a sentence that means "I am in the window, and it is not you", and a matching one from you that means "I need ten minutes, and I am coming back". Use ovulation to look 10-14 days ahead in the calendar and move or shrink whatever sits in the window. Write the agreements down somewhere you can both find them. Memory is the first thing to go on day 26, and yours is no better on day 12. Or day 5. Or today.',
        'And when the bleeding comes and the fog lifts, say what you perhaps did not get said in the week before: that you saw how hard it was, and that she got through it. She may feel guilty about things that were said. She does not need you to confirm that it was bad. She needs you to confirm that you are still on the same team. Then you log the week together while you both remember it, and you are better prepared next time. It is not a cure. It is a relationship that knows what it is dealing with. And a man who has learned to sit down.',
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
      'This month went deep into the week that causes the most misunderstandings, and where you have most often stood in the kitchen doorway looking confused. You now know that PMS is a gradual hormone drop over 5-7 days, which the brain feels as lower serotonin and lost calm, and that hormone levels are typically normal: it is the sensitivity that differs. You know the five psychological symptoms that hit a relationship hardest, rejection sensitivity, anxiety, tears, rage and brain fog, and you know that the amplifier is hormonal while the content is real.',
      'You know that PMDD affects 3-8 percent, is a real diagnosis, is made with a diary over two cycles and can be treated with SSRIs, hormonal contraception, cognitive behavioural therapy and lifestyle. You know when it deserves a doctor, and how to suggest it without playing doctor yourself. You have learned to answer a sharp tone in three steps, to repair after a conflict, what never to say, and that staying calm is not putting up with everything. And you know that agreements are made in the good week, and that postponing needs a date. A real one, with a time. Not "sometime next week".',
      'Next month is about pain, tiredness and headaches: how you recognise patterns in her log and respond before she asks.',
    ],
    keepDoing: [
      'Log mood every day, including the good days, so the pattern becomes visible. Especially the boring Tuesdays.',
      'Three-second pause, translate the sentence, answer the need. Not the words.',
      'Put the phone away and say goodnight with eye contact in the PMS week. Not to the ceiling.',
      'Have a short repair conversation once the bleeding has started. Without a list.',
      'Make agreements and a signal in the follicular phase, and write them down somewhere you can both find them.',
      'Say your own boundaries and feelings out loud in the good week, as information, not as an ultimatum.',
    ],
    quiz: [
      {
        question:
          'In the week before her period she says she cannot recognise herself, and that she dreads the week every month. What helps most?',
        options: [
          'Reassure her that three out of four have PMS, so it is completely normal',
          'Suggest in the follicular phase that she talks to the doctor, and offer to come along',
          'Tell her you have read about PMDD and you think she has it',
          'Suggest she tries running a bit more',
        ],
        correctIndex: 1,
        explanation:
          'That is one of the signs it deserves a doctor. Suggest it calmly in the good week, as an observation and an offer. The diagnosis you leave to someone with a degree in it. You have an app.',
      },
      {
        question:
          'You are wondering whether it could be PMDD. What is the most useful thing you can do over the next two months?',
        options: [
          'Wait and see whether it passes on its own',
          'Read everything about PMDD online, preferably late at night',
          'Log mood and symptoms every day, including the good days',
          'Avoid all conflict in the week before, whatever it takes',
        ],
        correctIndex: 2,
        explanation:
          'The diagnosis rests on daily records over at least two cycles. It is the symptom-free days that turn the hard days into a pattern, so the boring days count too. Late-night googling calms no one.',
      },
      {
        question: 'Day 26. She says sharply: "You never help." What is the best first step?',
        options: [
          'List what you have actually done this week, with dates',
          'A three-second pause, then: "It sounds like you have too much on. What do I take now?"',
          'Say "it is probably because you are in the window"',
          'Leave without a word and hope for the best',
        ],
        correctIndex: 1,
        explanation:
          'Translate the sentence into the need behind it, and answer that. Defence creates a conflict about the tone; help makes the tone go away. Your list of achievements helps nobody. It was short anyway.',
      },
      {
        question: 'She suddenly cries over a messy kitchen. What works best?',
        options: [
          'Ask what is really wrong, because it cannot be the kitchen',
          'Start tidying up immediately, fast and loudly',
          'Sit down next to her, say "you do not have to explain", and stay',
          'Point out that it is only a kitchen',
        ],
        correctIndex: 2,
        explanation:
          'The tears are a low threshold, not a great sorrow. Company without demanding an explanation works. Solutions and questions bring more tears, and the dishes can wait ten minutes. They have waited longer before.',
      },
      {
        question:
          'She has shouted belittling things at you in front of the children, the third month in a row. What is right?',
        options: [
          'Put up with it, it is the hormones after all',
          'Shout back, so she can feel what it is like',
          'Say calmly "you do not talk to me like that", leave, and have the conversation about the boundary in the good week',
          'Never mention it again, so there is no more conflict',
        ],
        correctIndex: 2,
        explanation:
          'Staying calm is not putting up with everything. Symptoms explain, but they do not remove responsibility. A boundary set calmly makes patience possible in the long run. Shouting back shortens it.',
      },
      {
        question:
          'There is a hard subject about money that she brings up on day 27. What do you do?',
        options: [
          'Say "not now" and leave it, again',
          'Listen first, then suggest a specific day in the next follicular phase for deciding',
          'Have the whole discussion right away, so it is over with',
          'Change the subject and hope she does not notice',
        ],
        correctIndex: 1,
        explanation:
          'Postpone the decision, not the listening. The difference between postponing and avoiding is whether there is a date. And she notices. Last time too.',
      },
    ],
  },
};
