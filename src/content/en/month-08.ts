import type { MonthContent, Source } from '../types';
import { dailyId, weeklyId, wrapId } from '../types';

const NHS_MIGRAINE: Source = {
  label: 'NHS: Migraine',
  url: 'https://www.nhs.uk/conditions/migraine/',
};
const NHS_TENSION: Source = {
  label: 'NHS: Tension headaches',
  url: 'https://www.nhs.uk/conditions/tension-headaches/',
};
const NHS_PAIN: Source = {
  label: 'NHS: Period pain',
  url: 'https://www.nhs.uk/conditions/period-pain/',
};
const NHS_HEAVY: Source = {
  label: 'NHS: Heavy periods',
  url: 'https://www.nhs.uk/conditions/heavy-periods/',
};
const NHS_IRON: Source = {
  label: 'NHS: Iron deficiency anaemia',
  url: 'https://www.nhs.uk/conditions/iron-deficiency-anaemia/',
};
const NHS_ENDO: Source = {
  label: 'NHS: Endometriosis',
  url: 'https://www.nhs.uk/conditions/endometriosis/',
};
const NHS_FIBROIDS: Source = {
  label: 'NHS: Fibroids',
  url: 'https://www.nhs.uk/conditions/fibroids/',
};
const NHS_PARACETAMOL: Source = {
  label: 'NHS: Paracetamol for adults',
  url: 'https://www.nhs.uk/medicines/paracetamol-for-adults/',
};
const NHS_IBUPROFEN: Source = {
  label: 'NHS: Ibuprofen for adults',
  url: 'https://www.nhs.uk/medicines/ibuprofen-for-adults/',
};
const ACOG_DYSMENORRHEA: Source = {
  label: 'ACOG: Dysmenorrhea (painful periods)',
  url: 'https://www.acog.org/womens-health/faqs/dysmenorrhea-painful-periods',
};

const M = 8;

export const month08: MonthContent = {
  month: M,
  theme: 'Pain, fatigue and headaches',
  focus:
    'Read the patterns in her log, and be ready the day before. Not the day after, as you usually are.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'This month: you stop being surprised',
      insight:
        'Pain, fatigue and headaches are the three symptoms most women log, and the three partners most often notice too late. Not because you do not care. Because they arrive as single days, and you remember single days about as well as you remember your passwords. Last month the headache may have been on day 27. The fatigue on day 1 and 2. The back pain on day 1. In your memory they sit as "a bad week", roughly, somewhere around that weekend. The calendar in the app remembers what you do not. This month you learn to read it, so you can act a day before the symptom instead of a day after. That is the whole difference between being kind and being useful. Kind is fine. Useful is better.',
      action:
        'Open the calendar, go back one cycle, and count how many days have pain, fatigue or headache logged. Just the number. It is enough to surprise you.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: 'Prostaglandins: one substance, all of day 1',
      insight:
        'When the lining is shed, it releases prostaglandins, signalling substances that make the uterus contract. Those are the cramps. But prostaglandins do not stay politely where they were made. They also hit the bowel, which contracts and gives loose stools, and they can cause nausea, headache, chills and aching all over the body. Women with severe cramps have measurably more prostaglandin than women with mild ones. It explains why day 1 can feel like flu, and why the same medicine, ibuprofen, helps several symptoms at once: it blocks the production of prostaglandin. One mechanism, many symptoms. You do not have to memorise the word. You just have to stop believing that the belly, the back and the head are three separate problems.',
      action:
        'If she has her period: ask whether it is the belly, the back, the head or all of it. The answer tells you what to have ready next time. So remember it this time.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN, ACOG_DYSMENORRHEA],
    },
    {
      id: dailyId(M, 3),
      month: M,
      day: 3,
      title: 'Menstrual migraine comes with a schedule',
      insight:
        'Migraine is about three times as common in women as in men, and hormones are a big part of the explanation. When estrogen falls sharply just before the period, the brain of some women responds with a migraine attack. It is called menstrual migraine and typically strikes in the window from two days before to three days into the bleeding. The attacks are often longer, more severe and harder to treat than migraines at other times. It is the fall in estrogen, not the low level itself, that triggers it. That is why the attack lands so precisely, and why it can be predicted in the calendar once the pattern has been seen two or three times. In other words, it is one of the few problems in your life that sends a calendar invitation in advance. You just have to open it.',
      action:
        'Check the log: is there a headache in the days right around the start of the last two periods? Write it down if there is. Not in your head, somewhere you can find again.',
      phaseTags: ['menstrual', 'luteal'],
      sources: [NHS_MIGRAINE],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'Migraine or headache? Not the same thing, no',
      insight:
        'The word headache covers two very different things, and you have probably treated them the same your whole life. A tension headache feels like a band around the head, on both sides, pressing, and you can usually carry on with the day. A migraine is typically one-sided and throbbing, gets worse with movement, and often comes with nausea, sensitivity to light and sensitivity to sound. Some get warning signs, an aura, such as flickering vision or tingling in one hand. A migraine attack lasts from four hours to three days and makes normal life impossible. The two are treated differently, and they are logged differently. When she says "headache", it is worth knowing which she means. One needs a glass of water and a break. The other needs darkness and quiet, and you not switching on the ceiling light "just to find something".',
      action:
        'Ask her whether her headaches are usually "a band around the head" or "throbbing on one side with nausea". Remember the answer. It is one sentence, you can manage that.',
      phaseTags: [],
      sources: [NHS_MIGRAINE, NHS_TENSION],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'Early is the whole secret',
      insight:
        'The most common mistake with painkillers is waiting. Ibuprofen and similar drugs block the production of prostaglandin, but they cannot remove the prostaglandin that has already been made. Taken at the first signs, the dull ache, the pull in the lower back, the familiar heaviness, the tablet gets ahead of it. Taken when the pain is at its peak, it fights uphill for an hour. The same goes for migraine: the earlier the treatment, the better it works. Many women put it off because they do not want to "take medicine unnecessarily". But well-timed medicine is often less medicine in total. Your role is not to push. You are not the pharmacy, and you are certainly not the doctor. Your role is to make choosing early easy, and that mostly means the pack is not at the back of a drawer behind the batteries.',
      action:
        'Put the painkillers somewhere visible and easy to reach, and say: "They are there if you feel it coming." Then nothing more. No lecture.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN, NHS_MIGRAINE],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: 'Paracetamol and ibuprofen: learn the difference, you are fetching them',
      insight:
        'Two kinds of over-the-counter medicine do most of the work, and they are not the same, however alike the boxes look at the pharmacy. Ibuprofen acts on prostaglandin and is therefore the best choice for period pain; it should be taken with food and is not suitable for everyone, including people with stomach ulcers, certain heart and kidney conditions, asthma that reacts to it, and during pregnancy. Paracetamol is gentler on the stomach, does less for cramps, but is a good supplement and can be combined with ibuprofen. Follow the dosing on the pack, keep the gap between doses, and never mix products that contain the same ingredient. If she is unsure what she can take, the pharmacy is a free and good place to ask. Your job is to know the difference, so you fetch the right one and do not come home with throat lozenges.',
      action:
        'Check that there is both ibuprofen and paracetamol in the house and that the expiry dates are fine. Stock up today if anything is missing. Yes, today, not "next time I am passing anyway".',
      phaseTags: [],
      sources: [NHS_IBUPROFEN, NHS_PARACETAMOL],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'Lower back pain and heat: your friend, the plug socket',
      insight:
        'Period pain is not only in the belly. The uterus shares nerve supply with the lower back, and many feel the cramps as a deep, dull ache at the base of the spine, sometimes down into the thighs. That is called referred pain and is completely common. Heat is still the best documented home remedy: a heating pad on the lower back, a warm bath, or a hot water bottle under her back when she lies down. Heat relaxes the muscles and increases the blood flow that the prostaglandins have tightened. Gentle stretching of the lower back helps some too. You cannot remove the pain, and that is not your job. Your job is to move the heat to where it does good, without her having to get up, look for it, and discover that you put it back in the cupboard.',
      action:
        'Warm a hot water bottle or heating pad and put it ready on her side of the sofa or bed, before she asks. Before. That is the whole exercise.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: '"Period flu" exists, and you are not checking it',
      insight:
        'Many women describe the days leading into the period as feeling like coming down with something: chills, aching muscles, a heavy body, a slightly feverish feeling, nausea. It is not an official diagnosis, but the mechanism is well known. Prostaglandins and other inflammatory substances enter the bloodstream and affect the whole body, not just the uterus, and the hormone drop amplifies the experience. It typically passes once the bleeding is well under way. What helps is the same as for ordinary flu: rest, fluids, warmth, easy food and ibuprofen for the aching. What does not help is doubting whether it is "real", or standing in the doorway with a thermometer and the face of an on-call doctor. If she has logged it before, you know it is coming again. So you also know what to do.',
      action:
        'If she says she feels unwell: treat it as a sick day without discussion. Tea, blanket, and take the evening chores. All of them, not the two easy ones.',
      phaseTags: ['menstrual', 'luteal'],
      sources: [NHS_PAIN],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'The gut: the thing nobody mentions at dinner',
      insight:
        'Loose stools on the first days of the period are so common that they have a nickname in many languages, yet few talk about it. The prostaglandins that make the uterus contract also hit the bowel, which sits right next to it. The result is diarrhoea, wind, and for some nausea and even vomiting when the cramps are at their worst. It is unpleasant and embarrassing, not dangerous, and it follows the pain: less prostaglandin, calmer gut. That is why ibuprofen taken early helps the gut too. Easy, mild food, not too fatty, not too much coffee, and easy access to the bathroom do the rest. Nausea is eased by small portions and, for some, ginger. In practice that means day 1 is not the day for your famous chilli, and you do not spend forty minutes in the shower.',
      action:
        'Make something mild and easy to eat today, like rice, soup, bread or porridge, and let her skip it if she cannot. Without looking hurt.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN, ACOG_DYSMENORRHEA],
    },
    {
      id: dailyId(M, 10),
      month: M,
      day: 10,
      title: 'Ask now, while you can still get an answer',
      insight:
        'The follicular phase is the best time to talk about the hard part, because the hard part is over and the energy is back. That goes for pain too. Asking "how was your period this time?" in the middle of the cramps feels like an interrogation, and you are not good enough at interrogations to get away with it. Asking it a week later, while you cook, feels like interest. And this is when her memory of those days is still fresh enough to be accurate. Was it worse or better than last time? What helped? Was there anything she was missing? The answers are gold for next month, and they are only available if someone asks at the right time. You are the one holding the calendar. So you are the one holding the timing.',
      action:
        'Ask today: "What was the worst part of your period this time, and did anything help?" Write the answer in a note in the calendar, not on the back of a receipt.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'Fatigue that does not go away can be iron',
      insight:
        'Fatigue that returns every month can have several sources, but one is easy to miss: iron. Every period costs iron, and with heavy bleeding the loss can be more than the diet manages to replace. Iron deficiency develops slowly and shows as persistent tiredness, breathlessness on stairs, paleness, poor concentration, headaches and, for some, restless legs at night. It often gets written off as a busy life or bad sleep, typically by someone who sleeps fine himself. A simple blood test at the doctor measures haemoglobin and iron stores, and treatment is straightforward. Iron supplements should not be taken blind, though; too much iron is not good either, so do not order a kilo online tonight. If the fatigue does not lift in the follicular phase, that is a sign something else is pulling.',
      action:
        'Ask whether she has had her iron checked in the past year. If not, and she bleeds heavily, suggest it as a perfectly ordinary check-up thing, in the same tone as "should we get the tyres changed".',
      phaseTags: ['follicular'],
      sources: [NHS_IRON, NHS_HEAVY],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: 'Sleep debt: the bill arrives around day 1',
      insight:
        'Sleep follows the cycle too. In the luteal phase progesterone keeps body temperature up, and many wake more often and sleep more lightly. In the PMS days restlessness and the hormone drop interfere. On the first nights of the period, pain and leaks wake her. Each single night may only be a little worse, but over ten to twelve days it adds up to a sleep debt, which explains why irritability, headaches and pain sensitivity peak right around the bleeding: lack of sleep measurably lowers the pain threshold. The follicular phase is where the debt gets repaid, if she is allowed. An early night on day 3-8 is not laziness but repair. And you can help by protecting those nights, which among other things means not starting a conversation about the kitchen renovation at 10 pm.',
      action:
        'Suggest an early night tonight without screens, and take whatever usually keeps her up: the dishes, the packed lunches, the last check of something. You will work out what "something" is.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: 'Movement prevents pain, and you are coming along',
      insight:
        "It sounds wrong, but regular exercise is one of the best documented ways to get milder period pain. Not during the cramps, that is when you keep your walk idea to yourself, but in the weeks before. Physical activity improves blood flow in the pelvis, lowers stress hormones and releases the body's own pain-relieving substances. Women who move regularly report shorter and milder pain on average. It does not need to be hard: brisk walking, cycling, swimming or yoga all count. The follicular phase is the obvious time, because the energy and the motivation are there. Your role is not to be a coach. Nobody asked for a coach. Your role is to make it easy to get out the door, and ideally to come along, at your own pace, without talking about heart rate zones.",
      action:
        'Suggest a walk or a bike ride together today, and make it about the two of you, not "for the sake of your period". That sentence never leaves your mouth.',
      phaseTags: ['follicular'],
      sources: [NHS_PAIN, ACOG_DYSMENORRHEA],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'Water and caffeine: two boring headache sources',
      insight:
        'Two of the most common headache triggers have nothing to do with hormones, but they amplify the hormonal ones. Dehydration causes headaches on its own and makes a migraine worse, and many drink less when they feel unwell. Caffeine cuts both ways: a steady daily amount is fine and can even ease a headache, but skip the usual cup and a withdrawal headache arrives within a day. Irregular caffeine intake, a lot one day and little the next, is therefore a classic trigger. Coffee late in the day also worsens the sleep that is already fragile in the luteal phase. The simplest advice is boring: the same amount of coffee every day, none after 3 pm, and a glass of water beside it. It is not advice you should give her. It is a glass you should put down.',
      action:
        'Put a glass of water or a bottle at her place today, morning and evening, without commenting on it. No "remember to drink". Just the glass.',
      phaseTags: [],
      sources: [NHS_MIGRAINE, NHS_TENSION],
    },
    {
      id: dailyId(M, 15),
      month: M,
      day: 15,
      title: 'Ovulation pain: a twinge in the side, not a mystery',
      insight:
        'Around one in five women feel ovulation as a pain on one side of the lower abdomen, when the follicle bursts and a little fluid irritates the lining of the pelvis. It is called ovulation pain or mittelschmerz, and no, you do not have to pronounce it correctly. It lasts from a few minutes to a couple of days, can switch sides from month to month, and is usually mild and harmless. Some also feel it as heaviness or slight nausea. It is actually useful, because it is one of the most precise signs of where in the cycle she is, more precise than your guesses. Severe ovulation pain, pain with fever, or pain that comes with unusual bleeding does not belong to the normal picture and deserves a doctor.',
      action:
        "If she mentions a twinge in her side today: log it in the calendar together, and see whether the app's ovulation date matches. It is detective work, just without the raincoat.",
      phaseTags: ['ovulation'],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'Headaches mid-cycle: the ones nobody looks for',
      insight:
        'Menstrual migraine is the well-known pattern, but some women also get migraines around ovulation. The explanation is probably the sharp estrogen drop right after the estrogen peak, the same mechanism as before the period, only smaller. It rarely gets noticed, because a headache on day 14 does not "sound hormonal", and because calendars are rarely read for mid-cycle symptoms. By anyone. Ever. After a couple of logged cycles the pattern can be obvious: headaches at two points in the month, both with precise timing. If that is the case, it is important knowledge for both her and the doctor, because treatment can be planned around it. It starts with the symptom being logged, even when it does not fit what is expected. And with one person actually looking for it. That is you.',
      action:
        'Look in the calendar for headaches in the days around ovulation in the last few cycles. Tell her what you found, whatever the answer. "Nothing" is an answer too.',
      phaseTags: ['ovulation'],
      sources: [NHS_MIGRAINE],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'How to read the calendar without just staring at it',
      insight:
        'A log is only valuable if it is read, and most people read it wrong: one day at a time, like someone trying to understand a film by looking at a single frame. Read it as a line instead. Find the last two or three period starts. Count backwards from each: which day did the headache come? How many days before the bleeding did the fatigue start? How many days did the pain last? Put the numbers side by side. If they hit the same cycle day, give or take one, that is a pattern. If they land at random, it is something else. Then take the pattern and project it forward: if the headache usually comes two days before bleeding, and the app expects bleeding on Friday, Wednesday is the day to be ready. That is the whole method. It requires no training, only that you sit down.',
      action:
        'Pick one symptom she logs often and find its cycle day in the last two cycles. Work out when it is expected next time. It is mental arithmetic, you can manage.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'A symptom diary for the doctor: you are the secretary',
      insight:
        'If she is going to the doctor about pain or migraine, the best thing she can bring is a diary covering two or three cycles. The doctor needs to know: which days, how bad on a scale of 1 to 10, how long it lasted, what she took and whether it worked, and whether she had to cancel anything. That last one, loss of function, is what moves a consultation from "that is probably normal" to "we should look into this". The app\'s calendar and notes are a ready-made diary if they have been used, and can be read out or shown in five minutes. Many live with pain for years because at the doctor\'s they cannot remember how bad it really was. Your job is to make sure it is written down. Not glamorous, but it works.',
      action:
        "Ask whether there is a doctor's appointment she has been putting off. Offer to gather the pain days from the last few cycles from the calendar onto a sheet of paper. An actual sheet of paper, doctors love paper.",
      phaseTags: [],
      sources: [NHS_ENDO, NHS_MIGRAINE],
    },
    {
      id: dailyId(M, 19),
      month: M,
      day: 19,
      title: 'Joint pain and stiff mornings: carry the bags',
      insight:
        'Some women notice sore or stiff joints, especially knees, hands and lower back, in the days before and during the period. The mechanism is not fully understood, but estrogen dampens inflammation and pain, and when it falls, joints and muscles are felt more. Fluid retention in the luteal phase can make joints stiff and hands puffy, and prostaglandins add to the general aching. Women with arthritis often find their symptoms swing with the cycle. Mild, cyclical joint soreness is common and passes with the bleeding. Persistent swelling, redness, warmth, or stiffness lasting over an hour in the morning is something else and deserves a doctor. Heat, movement and avoiding heavy lifting on those days help. Heavy lifting is what you are for. Finally, a task you cannot get wrong.',
      action:
        'Take the heavy lifting today: shopping bags, the laundry basket, whatever needs moving. Do not say why, just do it. And no theatrical groaning on the way.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 20),
      month: M,
      day: 20,
      title: 'Constipation in the luteal phase: say nothing, cook greens',
      insight:
        'Where the period brings loose stools, the luteal phase often brings the opposite. Progesterone relaxes smooth muscle, including in the gut, so food moves through more slowly. The result is constipation, bloating and wind in the week before the period, often on top of the fluid retention that is already making the trousers tight. When the bleeding starts and the prostaglandins take over, it flips, often abruptly. It is one of the reasons the belly can feel so different from week to week. What helps is boring and effective: fibre from vegetables, fruit and whole grains, plenty of water, and daily movement. What does not help is commenting on the belly. Not one comment. Not even one you think is sweet. Especially not that one.',
      action:
        'Make dinner with plenty of vegetables and whole grains today, and suggest a short walk after the meal. Without explaining why there is suddenly so much broccoli.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: 'Luteal fatigue is physiology. Not an attitude.',
      insight:
        'The tiredness in the last week before the period has its own explanation. Progesterone has a sedating effect on the brain, almost like a mild tranquilliser. Body temperature is raised, which in itself costs energy and disturbs sleep. Serotonin falls along with estrogen. The body burns a little more and asks for more food. Added up, it gives a heaviness where everything takes more, and the sofa calls at 8 pm. It is not a lack of willpower, and it does not improve under pressure, not even your cheerful "shall we just quickly". It improves with sleep, meals on time, lower demands, and someone taking the practical things. If the fatigue sits on the same days in the log every month, you know exactly when to slow the pace. So do it before anyone asks you to.',
      action:
        'Look in the calendar: when is the next period expected? Clear or move one commitment in the five days before, without asking first. You may pick the one you would rather skip yourself.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 22),
      month: M,
      day: 22,
      title: 'Tension headaches: neck, screens and you, making noise',
      insight:
        'The tension headache is the most common headache of all: a pressing band around the forehead or the back of the head, on both sides, mild to moderate, without nausea. It is triggered by stress, tight neck and shoulder muscles, too long at a screen, too little sleep, too little water and skipped meals. In the luteal phase, when sleep is worse and the stress threshold lower, it comes more easily. It is treated with the simple things: a break, water, food, fresh air, heat on the neck, and paracetamol or ibuprofen if it will not let go. Frequent tension headaches, more than a couple of times a week, are a signal that everyday life is pressing too hard, not just that a tablet is missing. And everyday life is, among other things, you, the dishwasher you have not emptied, and the podcast you play without headphones.',
      action:
        'If she has a headache today: take the kids, the noise or the task out of the room for half an hour, and put water and something to eat beside her. Then leave the room yourself. You are noise too.',
      phaseTags: ['luteal'],
      sources: [NHS_TENSION],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'Act before she has to ask',
      insight:
        "This is the month's most important skill, and it is simple: the pattern in the log tells you what is coming, and you act the day before. If the migraine usually strikes two days before bleeding, you make sure of quiet, dark curtains and her medicine lying out the day before. If the fatigue usually arrives on day 26, you cook and let her go to bed early. If the back pain usually comes on day 1, the hot water bottle is filled the evening before. None of it requires her to explain herself or ask for anything, and that is the point. Asking for help costs energy she does not have on those days. Getting it without asking is the proof that someone has noticed her. It is not mind-reading. It is reading. You have had the calendar all along; now you are using it.",
      action:
        'Find the one symptom that is most predictable in her log, and make one preparation for it today, before it hits. Not a plan for a preparation. A preparation.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 24),
      month: M,
      day: 24,
      title: 'Migraine: remove the world, yourself included',
      insight:
        'A migraine attack cannot be pushed through, but it can be made smaller. Treatment needs to go in early: ibuprofen or another over-the-counter painkiller at the first sign, and triptans if the doctor has prescribed them. Then: a dark, quiet, cool room, sleep if possible, a cold cloth on the forehead or heat on the neck, small sips of water, and something light to eat against the nausea. What makes it worse is light, sound, smells, screens and having to answer questions. Yours too, including "is there anything I can do?" for the fifth time. Your role is to remove the world from her for a few hours: kids, phone, appointments, guests. "I have got everything, go and lie down" is the sentence that helps most. Afterwards she is often wiped out for a day; that is part of the attack, not an extension you get to comment on.',
      action:
        'Make sure the bedroom can be made fully dark and quiet tonight, and agree on a word she can send that means "migraine, take over". When the word comes, you do not reply with questions.',
      phaseTags: ['luteal', 'menstrual'],
      sources: [NHS_MIGRAINE],
    },
    {
      id: dailyId(M, 25),
      month: M,
      day: 25,
      title: 'When a headache deserves a doctor',
      insight:
        'Most headaches are harmless, but two kinds demand action. The acute: a headache that strikes like a thunderclap and is at its worst within a minute, a headache with fever, stiff neck or a rash, after a blow to the head, or together with weakness, trouble speaking, loss of vision or confusion. That is an emergency call, right away. The chronic: migraines several days a month, headaches that disrupt work or sleep, or attacks that are getting more frequent. That deserves an appointment with her own doctor, who can offer preventive treatment and tailor it to the cycle. If she has migraine with aura, the doctor also needs to know before she is given a combined pill with estrogen, because that combination is advised against. This is not the day for humour. This is the day you learn a list by heart.',
      action:
        'Read the emergency signs out loud to yourself once, so you know them. Then ask whether her migraines have changed over the past year.',
      phaseTags: [],
      sources: [NHS_MIGRAINE],
    },
    {
      id: dailyId(M, 26),
      month: M,
      day: 26,
      title: 'Pain that is not normal',
      insight:
        'Ordinary period pain responds to heat and ibuprofen, stays within the first couple of days, and does not stop everyday life. Anything else deserves a doctor. The signs are: pain that also comes outside the period, pain during sex, pain when passing stools or urine around the bleeding, heavy bleeding with clots, pain that painkillers do not shift, and periods that cost sick days. Behind it can be endometriosis, adenomyosis or fibroids, three conditions that are common, can be treated, and still take years to diagnose, because the pain gets normalised by everyone around her, often by her too. You do not have to guess what it is. You do not google it at 11 pm. You have to be the one who says it should not be like this.',
      action:
        'If two or more of the signs fit her: say it out loud today, "this deserves a doctor", and offer to book the appointment and come along.',
      phaseTags: ['menstrual'],
      sources: [NHS_ENDO, NHS_FIBROIDS],
    },
    {
      id: dailyId(M, 27),
      month: M,
      day: 27,
      title: 'Many tablets are a signal too, not a criticism',
      insight:
        "Painkillers are good when used well, but they have a downside: taken too often, they can cause headaches themselves. It is called medication overuse headache and typically develops when ordinary painkillers are used on 15 or more days a month, or triptans on 10 or more, for several months in a row. The headache becomes daily and dull, and each tablet gives a short break before it returns. The only way out is to stop, and that should be done with the doctor. Not with you, and not by you hiding the box behind the coffee. If you count the days in the log where she takes something and the number is approaching ten a month, it is not a sign that she is weak. It is a sign that the underlying problem needs better treatment, and that is the doctor's department.",
      action:
        'Count in the calendar how many days in the last cycle painkillers were taken. If it is over eight, mention it calmly and without judgement. Calmly. Practise the tone first if you have to.',
      phaseTags: [],
      sources: [NHS_MIGRAINE, NHS_PARACETAMOL],
    },
    {
      id: dailyId(M, 28),
      month: M,
      day: 28,
      title: 'Prepare for the period from the log, not from a checklist',
      insight:
        'Month 1 taught you the four things to have in the house: pads or tampons, painkillers, easy food and heat. That was beginner level. Now you can make it personal. The log tells you what she in particular needs: if day 1 is a back day, heat matters most; if it is a migraine day, darkness and quiet matter most; if it is the gut, mild food and a free bathroom matter most; if it is the fatigue, a cleared calendar matters most. The preparation belongs the day before the expected bleeding, not on the day, because symptoms often start before the blood. And because the prediction is an estimate, it applies from two days before. A preparation that lands is not felt as something you did. It is felt as things being easier. You get no medal. That is how you know it worked.',
      action:
        'Check the app\'s expected date for the next period. Make your own list of three things based on her log, and get them ready today. Three. Not one, and not "I have it in my head".',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 29),
      month: M,
      day: 29,
      title: 'Sentences about pain you need to retire',
      insight:
        '"It cannot be that bad." "My sister never has any trouble." "Have you tried taking a paracetamol?" "You felt bad last month too." The sentences are often kindly meant, and you have said at least one of them. They all do the same thing: they question whether the pain is real, or whether she is handling it properly. Pain cannot be seen from the outside, and women\'s pain is on average taken less seriously, including by healthcare. What she needs from you is the opposite: to be believed without proof. "That sounds really bad, what can I do?" is enough. Comparisons with others, suggestions she has heard a thousand times, and reminders that it keeps coming back never help, even when they are true. Especially when they are true.',
      action:
        'Pick one sentence from the list you have used, and tell her you have stopped using it. Ask whether there are others she wishes you would drop. Be prepared for there to be.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 30),
      month: M,
      day: 30,
      title: 'Month 8: what you know now that you did not before',
      insight:
        'You now know that prostaglandins explain cramps, loose stools, nausea and "period flu" all at once, and that ibuprofen taken early hits all of them. You know that menstrual migraine is triggered by the estrogen drop in a precise window, that tension headaches and migraines are two different things, and when a headache needs a doctor. You know that fatigue can be iron, sleep debt or progesterone, and that the log shows which. Most importantly: you know how to read the calendar as a line, find the cycle day of a symptom, and act the day before. And you know that pain that knocks her out is never "just a period". A month ago you knew she "had a bad week". That is progress. Next month builds on this with food, exercise and recovery in each phase.',
      action:
        "Tell her the two patterns you have found in her log this month, and what you plan to do about them. Then take the month's quiz. Without looking back, you have read it.",
      phaseTags: [],
    },
  ],
  weekly: [
    {
      id: weeklyId(M, 1),
      month: M,
      week: 1,
      title: 'Menstrual migraine: the estrogen drop, the timing and what you do the day before',
      body: [
        'Migraine affects around one in seven adults, and women about three times as often as men. The difference appears at puberty and fades again after menopause, and that is no coincidence: hormones are a large part of the explanation. For many women the cycle is the most reliable migraine trigger they have, and at the same time the most overlooked. Including by the person who lives with them and has had the calendar in his pocket the whole time. This article is about how it fits together, and what you can do.',
        'The mechanism is estrogen withdrawal. In the days before the period, estrogen falls sharply, and in women prone to migraine the brain responds to the fall with an attack. It is not the low level itself but the speed of the drop that triggers it. That is why the attack lands so precisely: from two days before the bleeding to three days into it. If it happens in at least two out of three cycles, doctors call it menstrual migraine. Some only get migraines then; most also get them at other times, but the attacks around the period are typically longer, more severe, more dominated by nausea and harder to treat. Some women also get a smaller attack around ovulation, when estrogen falls after its peak.',
        'A migraine attack is not just a bad headache, and it is not what you have when you forgot to eat lunch. It is typically one-sided and throbbing, worsens with movement, and comes with nausea, sensitivity to light and sensitivity to sound. It lasts from four hours to three days. Some get an aura first: flickering vision, tingling in one hand or trouble speaking for up to an hour. Afterwards there is often a "hangover day" of exhaustion and poor concentration. Menstrual migraine usually comes without aura. But ask her, because if she has migraine with aura, the doctor needs to know before she is given a combined pill with estrogen, since the combination raises the risk of stroke and is advised against.',
        'What helps? First, timing. All migraine treatment works better the earlier it is taken, and that goes for over-the-counter medicine like ibuprofen as well as prescription triptans. If the window is known from the log, the medicine can be lying out the day before. Second, the old remedies: a dark, quiet, cool room, sleep, fluids, and something light to eat against the nausea. Third, prevention, which is a conversation with the doctor: for menstrual migraine the doctor can offer treatment taken for a few days around the expected period, or hormonal methods that smooth out the estrogen drop. That requires the pattern to be documented, and that is exactly what the calendar can do, if someone can be bothered to open it.',
        'Triggers that amplify a hormonal attack are the boring ones: too little sleep, skipped meals, dehydration, irregular caffeine, alcohol, stress and screen light. For most people none of them cause a migraine alone, but in the window just before the period the threshold is lower, and then the one extra bad night tips the load. That is why sleep, food and water in the last days of the luteal phase are migraine prevention, not just good care. And that is why your idea of a late dinner with friends on the Tuesday before an expected Friday is a bad idea, however sweet.',
        'Your role has three parts. Before the attack: read the log, know the window, make sure the medicine is within reach, and protect sleep and meals in the days leading up. During the attack: remove the world from her. Kids, phone, appointments, sound, light, smells and questions. Your questions too. "I have got everything, go and lie down" is the most important sentence, and it is finished once you have said it. After the attack: expect a day of lower capacity, and write down what helped. And if the attacks are frequent, disrupt work, or are changing, be the one who says it deserves a doctor, and offer to gather the days from the calendar.',
        'One warning to finish, which you should know by heart, and here there is no joke: a headache that strikes like a thunderclap and is at its worst within a minute, a headache with fever and stiff neck, after a blow to the head, or together with weakness, trouble speaking, loss of vision or confusion, is not a migraine until proven otherwise. That is an emergency call, right away.',
      ],
      conversationQuestion:
        'If your headaches have a pattern in the cycle, where does it sit, and what would you most like me to do the day before and on the day itself?',
      sources: [NHS_MIGRAINE],
    },
    {
      id: weeklyId(M, 2),
      month: M,
      week: 2,
      title: 'The body on day 1: prostaglandins, gut, back and medicine taken in time',
      body: [
        'Month 3 covered the period as a whole. This article goes one layer deeper into the physical side: why so many different symptoms hit at once, why they are connected, and how painkillers are used so they actually work. Surprisingly many people get that last part wrong, and it is not only her.',
        'It starts with prostaglandins. When the uterine lining is shed, it releases large amounts of these signalling substances, which make the muscle of the uterus contract to push the lining out. Women with severe period pain have measurably higher levels than women with mild pain. But prostaglandins do not stay where they are made. They hit the bowel, which sits right next door, and make it contract: loose stools, wind, and for some nausea and vomiting when the cramps are at their worst. They enter the bloodstream and cause aching muscles, chills, headache and the slightly feverish feeling many call period flu. And they send the pain out into the lower back and thighs, because the uterus shares nerve supply with the back. One mechanism, many symptoms. It is not four problems you have to solve. It is one you have to understand.',
        'That is good news, because it means one treatment reaches widely. Ibuprofen and similar drugs block the enzyme that produces prostaglandin. That is why they work better for period pain than paracetamol, and why they also help the gut and the aching. But they cannot remove the prostaglandin that is already made. Taken at the first sign, the dull ache, the pull in the lower back, the familiar heaviness, the tablet gets ahead of it. Taken at the peak, it fights uphill. Many put it off because they do not want to take medicine unnecessarily. With period pain it is the other way round: early medicine is often less medicine in total. Ibuprofen should be taken with food, and it is not for everyone: with stomach ulcers, certain heart and kidney conditions, asthma that reacts to it, and in pregnancy it is a conversation with the doctor or pharmacist. Paracetamol is gentle on the stomach, does less for cramps, but can be combined with ibuprofen. Follow the pack, keep the gap between doses, and never mix two products with the same ingredient. That last one is the mistake you would make yourself.',
        "Heat is the second leg. A heating pad or hot water bottle on the belly or lower back relaxes the muscle and restores the blood flow the contractions have squeezed off. Studies show an effect on a par with over-the-counter painkillers, and the two can be used together. A warm bath works the same way. Gentle movement, a walk, helps more people than you would think, because it also increases blood flow and releases the body's own pain relievers. And in the slightly longer run, regular exercise in the weeks before is one of the best documented ways to get milder cramps. Note: the weeks before. Not day 1 at 7 am with your running shoes in your hand.",
        'The gut deserves its own paragraph, because nobody talks about it. Diarrhoea on day 1 and 2 is very common, follows the pain, and is eased by the same thing: ibuprofen early. Beyond that, mild, easy food helps, not too fatty, not too much coffee, which gets the bowel going on its own, and easy access to the bathroom. Nausea is eased by small portions, and ginger helps some. The week before, in the luteal phase, the problem is often the opposite: progesterone slows the gut, and constipation and bloating are normal. Fibre, water and movement help there. That the belly is so different from week to week is not strange; it is two different hormones taking turns in charge. You do not need an opinion on either of them. You need soup.',
        'The practical part for you: have both kinds of painkiller in the house and know the difference, so you can fetch the right one. Put them somewhere visible when the log says the period is close. Have the heat ready, not in the cupboard but at her place. Make mild food without asking whether she wants it, and let her skip it. Take the chores on day 1 and 2 as a matter of course, not as a favour to be mentioned later. And treat "I feel rough" as a sick day, not as something that needs arguing for.',
        'Finally, the line. Ordinary period pain responds to heat and ibuprofen, stays within the first days, and does not stop everyday life. Pain that medicine does not shift, that costs sick days or causes vomiting, that comes outside the bleeding or during sex, is not ordinary. It can be caused by endometriosis, adenomyosis or fibroids, all of which can be treated. You do not have to guess which. You have to say it deserves a doctor.',
      ],
      conversationQuestion:
        'What hits you hardest on day 1, the belly, the back, the head or the tiredness, and what do you want me to have ready the evening before?',
      sources: [NHS_PAIN, ACOG_DYSMENORRHEA, NHS_IBUPROFEN, NHS_PARACETAMOL],
    },
    {
      id: weeklyId(M, 3),
      month: M,
      week: 3,
      title: 'Fatigue across the cycle: iron, sleep and progesterone, and how you tell them apart',
      body: [
        'Fatigue is the symptom logged most often and taken seriously least often, because everyone is tired. You are tired too. That is not the same thing. Cyclical fatigue, the kind that returns on the same days every month, has explanations that can be told apart. And the three most important ones each call for a different response from you.',
        'The first is iron. Every period costs blood, and with the blood, iron. With normal bleeding the diet replaces the loss. With heavy bleeding, a pad or tampon changed every hour, bleeding for more than seven days, large clots, the loss can be more than the diet covers, and the iron stores empty slowly over months. Iron deficiency shows as persistent tiredness, breathlessness on stairs, paleness, headaches, poor concentration, brittle nails and, for some, restless legs at night. It usually gets written off as a busy life. The tell-tale sign is that the fatigue does not lift in the follicular phase, when energy would normally return. A blood test at the doctor measures haemoglobin and iron stores, and treatment is simple. Supplements should not be taken blind, though, because too much iron is not good either. Diet helps: meat, fish and eggs, or lentils, beans and leafy greens together with vitamin C, and coffee and tea away from the meal.',
        'The second is sleep debt. In the luteal phase progesterone keeps body temperature 0.3-0.5 degrees higher, and many sleep more lightly and wake more often. In the PMS days restlessness and the hormone drop interfere. On the first nights of the period, pain and leaks wake her. Each night may only be slightly worse, but over ten to twelve days it becomes a debt. Lack of sleep lowers the pain threshold, increases irritability and triggers headaches, so what feels like "bad PMS" or "a bad period" is often PMS or a period plus a week of poor sleep. The follicular phase is where the debt can be repaid. Early nights on day 3-8 are repair, not laziness. And no, this is not the time to show her the series you have been looking forward to.',
        'The third is progesterone itself. In the last week before the period it has a sedating effect on the brain, almost like a mild tranquilliser, while serotonin falls along with estrogen, and the body burns a little more and asks for more food. Added up, it gives a heaviness where everything takes more. It is not a lack of willpower, and it does not improve under pressure. It improves with sleep, meals on time, lower demands and someone taking the practical things. And it is entirely predictable: if the fatigue sits on the same cycle days in the log every month, you know when to slow the pace. You have no excuse for being surprised by the same week twelve times a year.',
        'Here is how to tell them apart with the calendar. Fatigue that sits only in the luteal phase and the first days of the period, and lifts clearly in the follicular phase, is hormonal and sleep-related; the answer is protected sleep and lower demands on those days. Fatigue that runs across the whole cycle, including the weeks when energy should be back, and comes with heavy bleeding, points to iron or something else; the answer is a blood test. That is not a diagnosis, it is a sorting, and it makes the conversation with the doctor better. You are not a doctor. You are the guy with the calendar, and that is actually useful.',
        'The practical part for you: protect sleep in the follicular phase by taking the evening chores and suggesting an early night without making it a project. Make sure there is food with iron in it during and after the period. Keep caffeine steady and away from the late afternoon. Slow the pace in the last luteal week, without her having to ask, and without saying "it is probably because your period is coming". You are allowed to think that sentence. You are just not allowed to say it. And if the fatigue never lifts, say it deserves a blood test, and offer to come along.',
        'What you should not do is suggest she just pull herself together, go to bed earlier "like you do", or exercise more when she is at her most tired. All three sound like help and land as criticism. Being believed is the first help; the rest comes after.',
      ],
      conversationQuestion:
        'When in your cycle is the tiredness worst, and does it lift completely when the energy comes back, or does it hang around all month?',
      sources: [NHS_IRON, NHS_HEAVY],
    },
    {
      id: weeklyId(M, 4),
      month: M,
      week: 4,
      title: 'Read the log, act the day before, and know when enough is enough',
      body: [
        "The first three articles were about mechanisms. This one is about the method: how you turn the log into action, and when the action should be a doctor's appointment. It is the shortest skill in the app and the one fewest people actually use.",
        'First, the reading. Most people read the calendar one day at a time, and then they see nothing. Read it as a line instead. Find the last two or three period starts. Count backwards and forwards from each: which cycle day did the headache come? How many days before the bleeding did the fatigue start? How many days did the pain last? Put the numbers side by side. If a symptom hits the same cycle day, give or take one, in two or three cycles, that is a pattern. If it lands at random, it is something else, and that is worth knowing too. After three or four cycles most patterns are clear, and they are often more precise than she herself thinks, because memory of bad days is poor. Your memory of them is worse. Hence the log.',
        'Then the projection. The app gives an expected date for the next period. It is an estimate, not a measurement, so allow two days of uncertainty. If the headache has a pattern of "two days before bleeding", and bleeding is expected on Friday, Wednesday is the day to be ready, and Tuesday is not too early. If the fatigue has a pattern on day 25-27, those are the days the calendar needs clearing. If the back has a pattern on day 1, the hot water bottle is filled on Thursday evening. It is not hard. It is just something nobody has done before, and something you can do in five minutes with a cup of coffee.',
        'Then the action. The point of acting the day before is not efficiency. It is that it removes the need to ask. Asking for help costs energy, and the days when she most needs help are the days when she has the least energy to ask with. Many women grit their teeth instead. When the heat, the quiet, the medicine, the food and the cleared calendar are simply there, without explanation, it is proof that someone has noticed her. That is the kind of care that gets remembered. The preparation should be concrete and small: three things, not ten, and not a project involving a shopping trip and a new heating pad with an app. And it should fit her log, not a generic list. If day 1 is a migraine day, blackout curtains matter more than soup.',
        'Then the documentation. The same log is the best preparation for a doctor\'s appointment there is. The doctor needs to know which days, how bad on a scale of 1 to 10, how long, what she took, whether it worked, and whether she had to cancel anything. That last one, loss of function, is what moves a consultation from "that is probably normal" to "we should look into this". Many live with pain for years because in the doctor\'s office they cannot remember how bad it really was. Offer to gather the pain days from the last three cycles onto one sheet of paper. It takes ten minutes, and it can save years.',
        'And finally the line, which is the whole reason the log matters. This is where the jokes stop. Ordinary period pain and ordinary headaches respond to heat, rest and over-the-counter medicine, stay within a few days, and do not stop everyday life. The signs that something else is going on are: pain outside the period, pain during sex, pain when passing stools or urine around the bleeding, heavy bleeding with clots, pain that medicine does not shift, periods that cost sick days, migraines several days a month, or painkillers on ten or more days a month. Behind it can be endometriosis, adenomyosis, fibroids or a headache disorder that needs prevention. All can be treated. None of them improve by waiting. You do not have to guess which. You have to be the one who says "this deserves a doctor", offer to book the appointment, come along, and bring the sheet of paper.',
        "That is the month's whole message in one sentence: read the log as a line, act the day before, and never normalise pain that knocks her out.",
      ],
      conversationQuestion:
        'Is there anything in your cycle you have got used to putting up with that we should take to the doctor, and what would make booking the appointment easier?',
      sources: [NHS_ENDO, NHS_FIBROIDS, NHS_MIGRAINE],
    },
  ],
  wrap: {
    id: wrapId(M),
    month: M,
    title: 'Month 8: Pain, fatigue and headaches',
    summary: [
      'This month went deep into the three symptoms most people log, and the three you have most often noticed a day too late. Prostaglandins explain cramps, loose stools, nausea, back pain and "period flu" all at once, and ibuprofen taken early hits all of them. Menstrual migraine is triggered by the estrogen drop in a window from two days before to three days into the bleeding, it is different from a tension headache, and it can be predicted and prepared for. Fatigue can be iron, sleep debt or progesterone, and the log shows which.',
      'You have learned to read the calendar as a line, find the cycle day of a symptom, and act the day before, so she does not have to ask. You have learned the ground rules for paracetamol and ibuprofen, when many tablets are a signal, when a headache is an emergency, and that pain that knocks her out, heavy bleeding, pain outside the period or during sex is never "just a period" but deserves a doctor with the log in hand. You have not become a doctor. You have become someone who looks at the calendar. That is more than most people do.',
      'Next month is about food, exercise and recovery: what you can do and eat in each phase, so the good days become more and the hard ones become easier.',
    ],
    keepDoing: [
      'Read the log as a line after every period, and write down which cycle day the symptoms hit. Write it down, do not memorise it.',
      'Act the day before: heat, medicine, darkness, mild food or a cleared calendar, depending on what her log says, not what a list says.',
      'Keep both ibuprofen and paracetamol in the house, visible when the period is close, and know the difference when you are standing at the pharmacy.',
      'Protect sleep in the follicular phase, and slow the pace in the last luteal week without asking first.',
      'Say "this deserves a doctor" out loud when the signs are there, and offer to gather the pain days on paper.',
    ],
    quiz: [
      {
        question:
          'She feels the first pull in her lower back and says "I think it is coming tomorrow". What helps most right now?',
        options: [
          'Wait and see whether it turns into anything before she takes medicine',
          'Suggest she takes ibuprofen with food now, and fill the hot water bottle',
          'Say that she managed fine last month',
          "Book a doctor's appointment straight away",
        ],
        correctIndex: 1,
        explanation:
          'Ibuprofen blocks the production of prostaglandin but does not remove what is already made. Taken early it gets ahead; taken at the peak it lags behind. Heat adds to the effect. "Wait and see" is what you usually do, and that is why you are taking the quiz.',
      },
      {
        question:
          'The log shows a headache on day 27 in three cycles in a row. The app expects the period on Friday. What do you do?',
        options: [
          'Wait until Friday and see whether she gets a headache',
          'Tell her she is going to get a headache on Wednesday',
          'Make sure on Tuesday and Wednesday that her medicine is out, the evenings are quiet, and she sleeps',
          'Suggest she cuts out coffee completely this week',
        ],
        correctIndex: 2,
        explanation:
          'Read the log as a line, project the pattern forward, and act the day before with a two-day margin. Announcing a headache to her is not an action, it is a weather forecast. And cutting caffeine abruptly causes headaches on its own; keep it steady.',
      },
      {
        question:
          'She is lying down with a throbbing headache on one side, feels sick and cannot bear light. What is the best help?',
        options: [
          'Open the window and suggest a walk in the fresh air',
          'Make the bedroom dark and quiet, take the kids and the phone, and let her sleep',
          'Sit with her and ask what triggered it',
          'Say that paracetamol is probably better than ibuprofen for migraine',
        ],
        correctIndex: 1,
        explanation:
          'That sounds like a migraine, and migraines get worse with light, sound, movement and questions. Remove the world from her for a few hours, including you and your curiosity. The treatment should ideally have gone in earlier; next time the log can help with that.',
      },
      {
        question:
          'She is tired all month, including the week after her period, and bleeds heavily with clots. What is most helpful?',
        options: [
          'Suggest she goes to bed earlier and exercises more',
          'Say that everyone is tired and it is probably work',
          'Suggest a blood test for iron at the doctor and offer to come along',
          'Buy iron supplements and put them out at breakfast',
        ],
        correctIndex: 2,
        explanation:
          'Fatigue that does not lift in the follicular phase, together with heavy bleeding, points to iron deficiency. It is measured with a simple blood test, and supplements should not be taken blind, not even the ones you found on offer.',
      },
      {
        question:
          'You count in the calendar that she took painkillers on 12 days last cycle. What is the right response?',
        options: [
          'Hide the tablets so she takes fewer',
          'Say that is far too many and she needs to cut back',
          'Mention the number calmly, and suggest she takes the log to the doctor, because the underlying problem needs better treatment',
          'Say nothing, it is her body',
        ],
        correctIndex: 2,
        explanation:
          'Painkillers on many days a month can cause headaches themselves and are a sign the underlying problem is not treated well enough. It is a conversation with the doctor, not a telling-off, and certainly not a game of hide-and-seek with the box.',
      },
      {
        question:
          'She has pain during sex, pain when passing stools during her period, and the medicine does not really help. She says it is probably normal. What do you do?',
        options: [
          'Take her word for it, she knows her body best',
          'Say "this deserves a doctor", offer to book the appointment, come along, and gather the pain days from the calendar',
          'Suggest a stronger over-the-counter painkiller from the pharmacy',
          'Google the symptoms and tell her what it is',
        ],
        correctIndex: 1,
        explanation:
          'Pain outside the bleeding, during sex or when passing stools, and pain that medicine does not shift, are signs that deserve investigation. You do not make the diagnosis; you are the one who does not normalise it, and who makes the appointment easy.',
      },
    ],
  },
};
