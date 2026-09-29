import type { MonthContent, Source } from '../types';
import { dailyId, weeklyId, wrapId } from '../types';

const NHS_ENDO: Source = {
  label: 'NHS: Endometriosis',
  url: 'https://www.nhs.uk/conditions/endometriosis/',
};
const ACOG_ENDO: Source = {
  label: 'ACOG: Endometriosis',
  url: 'https://www.acog.org/womens-health/faqs/endometriosis',
};
const NHS_PCOS: Source = {
  label: 'NHS: Polycystic ovary syndrome',
  url: 'https://www.nhs.uk/conditions/polycystic-ovary-syndrome-pcos/',
};
const ACOG_PCOS: Source = {
  label: 'ACOG: Polycystic Ovary Syndrome',
  url: 'https://www.acog.org/womens-health/faqs/polycystic-ovary-syndrome-pcos',
};
const NHS_FIBROIDS: Source = {
  label: 'NHS: Fibroids',
  url: 'https://www.nhs.uk/conditions/fibroids/',
};
const NHS_ADENO: Source = {
  label: 'NHS: Adenomyosis',
};
const NHS_HEAVY: Source = {
  label: 'NHS: Heavy periods',
  url: 'https://www.nhs.uk/conditions/heavy-periods/',
};
const NHS_ANAEMIA: Source = {
  label: 'NHS: Iron deficiency anaemia',
  url: 'https://www.nhs.uk/conditions/iron-deficiency-anaemia/',
};
const NHS_MISSED: Source = {
  label: 'NHS: Stopped or missed periods',
  url: 'https://www.nhs.uk/conditions/stopped-or-missed-periods/',
};
const NHS_IRREGULAR: Source = {
  label: 'NHS: Irregular periods',
  url: 'https://www.nhs.uk/conditions/irregular-periods/',
};
const NHS_THYROID: Source = {
  label: 'NHS: Underactive thyroid',
  url: 'https://www.nhs.uk/conditions/underactive-thyroid-hypothyroidism/',
};
const NHS_PMS: Source = {
  label: 'NHS: PMS',
  url: 'https://www.nhs.uk/conditions/pre-menstrual-syndrome/',
};
const NHS_PAIN: Source = {
  label: 'NHS: Period pain',
  url: 'https://www.nhs.uk/conditions/period-pain/',
};
const NHS_MENOPAUSE: Source = {
  label: 'NHS: Menopause',
  url: 'https://www.nhs.uk/conditions/menopause/',
};

const M = 11;

export const month11: MonthContent = {
  month: M,
  theme: 'When something is off',
  focus:
    'Recognise the signs of endometriosis, PCOS and irregularity, and be the one who backs her up when it deserves a doctor.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'Normal is a range, not a number',
      insight:
        'The whole year so far has been about the typical cycle. This month is about what falls outside it. Normal is a wide range: 21-35 days between periods, 2-7 days of bleeding, pain that can be managed with heat and over-the-counter painkillers, and PMS that lifts when the bleeding starts. Off is when something sits consistently outside that: cycles that skip months, bleeding that soaks through everything, pain that costs sick days, or symptoms that get worse month by month. One odd cycle rarely means anything. A pattern does. Your role this month is not to diagnose, but to know the signs well enough to say: this deserves a doctor.',
      action:
        'Look back at the last three cycles in the calendar. Do length, bleeding and pain sit within the normal ranges? Write down whatever stands out.',
      phaseTags: [],
      sources: [NHS_IRREGULAR],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: 'Pain that runs the day is not normal',
      insight:
        'Ordinary period pain is unpleasant, but it can be handled: a heating pad, an ibuprofen, a quieter day. Pain that decides whether she can go to work, that makes her vomit, faint or lie curled up on the bathroom floor, is something else. So is pain that starts days before the bleeding, continues after it, or turns up mid-cycle. Many women learned as teenagers that "this is just how it is", often from mothers and doctors who were told the same. That normalisation is what delays diagnoses by years. You can be the one who does not normalise, without turning it into a drama.',
      action:
        'Ask her today: "Have you ever had to cancel something or call in sick because of the pain?" If yes, say that it deserves a doctor.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN, NHS_ENDO],
    },
    {
      id: dailyId(M, 3),
      month: M,
      day: 3,
      title: 'Endometriosis: tissue in the wrong place',
      insight:
        'Endometriosis is a condition where tissue similar to the lining of the uterus grows outside it: on the ovaries, fallopian tubes, bowel, bladder or the lining of the pelvis. The tissue responds to the cycle hormones just like the lining does, so it bleeds and becomes inflamed every month, but the blood has nowhere to go. Over time that causes scar tissue, adhesions and pain that often gets worse with the years. Around 1 in 10 women of reproductive age have it, which makes it about as common as diabetes. Nobody knows exactly why it develops, and it cannot be seen on a routine examination. It is a chronic illness, not "bad periods".',
      action:
        'Read the NHS page on endometriosis today so you know the list of symptoms. It takes five minutes and makes you a better listener.',
      phaseTags: ['menstrual'],
      sources: [NHS_ENDO],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'Endometriosis is not only cramps',
      insight:
        'Many people think of endometriosis as severe period pain, but the picture is wider. Typical signs: pain in the pelvis and lower back that starts before the bleeding; pain during or after sex; pain when passing stools or urinating, especially during the period; nausea, constipation or diarrhoea that follows the cycle; bleeding between periods; and a tiredness that sleep does not fix. Some have trouble getting pregnant. Symptoms vary a lot, and their severity says nothing about how much tissue there is. It is the combination and the timing that count. Because the symptoms mimic bowel trouble or a bladder infection, they are often treated as that for years.',
      action:
        'Go through the list together: pain before bleeding, during sex, on the toilet, tiredness. If she recognises two or more, suggest she logs them in the app starting today.',
      phaseTags: ['menstrual', 'luteal'],
      sources: [NHS_ENDO, ACOG_ENDO],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'Seven to ten years to a diagnosis',
      insight:
        'From the first symptoms to an endometriosis diagnosis takes 7-10 years on average. The reasons are well known: the pain is normalised by her and by the people around her, the symptoms look like other things, ultrasound often does not show the tissue, and a definitive diagnosis needs keyhole surgery. Many women describe going to the doctor again and again and being told it was stress, their gut or "just periods". That means it is often not the body that delays the diagnosis, but the system around it. And that system listens more to a patient who can document a pattern over time than to one describing last month from memory.',
      action:
        'Ask how many times she has mentioned pain to a doctor and what the answer was. Just listen. The answer tells you whether there is a pattern of being dismissed.',
      phaseTags: [],
      sources: [NHS_ENDO],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: 'Endometriosis can be treated, not cured',
      insight:
        'There is no cure, but there is help, and that matters to know when a diagnosis can feel like a sentence. Treatment runs on three tracks. Pain relief: ibuprofen and similar, heat, physiotherapy. Hormonal treatment: the pill, a hormonal coil or other medicines that quieten the cycle and with it the activity of the tissue. Surgery: keyhole surgery to remove the tissue, which can bring relief for years even though it can grow back. What works is individual, and it often takes several attempts to find the right combination. Your job is not to choose for her, but to stay patient through the attempts and remember that "that did not work" does not mean nothing works.',
      action:
        'If she is in treatment: ask how it is going and whether there are side effects she has not mentioned. If not: ask whether she knows what the options are.',
      phaseTags: [],
      sources: [NHS_ENDO, ACOG_ENDO],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'Adenomyosis: the lesser-known sister',
      insight:
        'Adenomyosis is when lining tissue grows into the muscle wall of the uterus itself rather than outside it. The uterus becomes enlarged and tender, and the result is often heavy, prolonged periods with severe cramps, a feeling of heaviness in the pelvis and pain during sex. It is most common in women over 30 and those who have given birth, but can appear earlier. Adenomyosis and endometriosis often occur together, and the symptoms overlap, so they can be hard to tell apart. The diagnosis is usually made with ultrasound or an MRI scan, which is actually easier than for endometriosis. Treatment is similar: painkillers, a hormonal coil or other hormonal treatment, and in rare cases surgery.',
      action:
        'If her periods are both heavy and very painful, mention the word adenomyosis to her today. It is a word many have never heard, and a question worth asking the doctor.',
      phaseTags: ['menstrual'],
      sources: [NHS_ADENO],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: 'Fibroids: benign, but not irrelevant',
      insight:
        'Fibroids are non-cancerous growths of muscle tissue in or on the uterus. They are very common; up to one in three women develop them at some point, most often between 30 and 50, and many never notice. But depending on size and position they can cause heavy and prolonged periods, pain or pressure in the pelvis, frequent urination, constipation, back pain and pain during sex. They are not cancer and do not become cancer. Treatment ranges from nothing, if they cause no trouble, through medicines that reduce the bleeding, to surgery that removes the fibroids and keeps the uterus. The diagnosis is made with ultrasound, which is a simple examination.',
      action:
        'Ask whether she has noticed pressure, needing to pee often, or her belly feeling different. Together with heavy bleeding, that is a reason to ask the doctor for an ultrasound scan.',
      phaseTags: ['menstrual'],
      sources: [NHS_FIBROIDS],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'Heavy bleeding has concrete signs',
      insight:
        'Month 1 mentioned the signs briefly. Here they are again, because they are easy to miss: a pad or tampon that needs changing every hour for several hours in a row; needing two products at once; bleeding through clothes or bedding; clots the size of a coin or larger; bleeding for more than 7 days; and planning life around how close the nearest toilet is. Heavy periods affect around one in four women and often have a cause that can be found: fibroids, adenomyosis, polyps, hormonal imbalance, thyroid problems or bleeding disorders. Even without a cause being found, the bleeding can be treated. Nobody should have to live with soaking through.',
      action:
        'During this period, notice whether she changes more often than every two hours, or whether twice as many products are being bought as before. Mention it calmly if so.',
      phaseTags: ['menstrual'],
      sources: [NHS_HEAVY],
    },
    {
      id: dailyId(M, 10),
      month: M,
      day: 10,
      title: 'Iron deficiency: the hidden consequence',
      insight:
        'Heavy bleeding slowly drains the body of iron, and iron deficiency develops so gradually that she may have got used to it. The signs: tiredness that does not match her sleep, breathlessness on stairs, palpitations, pale skin, dizziness, headaches, cold hands and feet, brittle nails and a strange urge to chew ice. Iron deficiency anaemia is the most common deficiency in women of reproductive age, and it deserves a blood test, not guesswork. Treatment is iron supplements for months, not weeks, alongside doing something about the bleeding. Taking iron on her own without a blood test is not a good idea; too much iron is harmful too.',
      action:
        'If she is constantly tired and bleeds heavily: suggest she books a blood test for iron, and offer to book the appointment right away.',
      phaseTags: ['menstrual', 'follicular'],
      sources: [NHS_ANAEMIA, NHS_HEAVY],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'PCOS: the most common hormonal condition',
      insight:
        'Polycystic ovary syndrome, PCOS, affects around 1 in 10 women and is the most common hormonal condition in women of reproductive age. The name is misleading: the "cysts" are immature egg follicles, not real cysts, and you can have PCOS without them. The core is an imbalance: the ovaries produce too much of the male sex hormones, androgens, and ovulation becomes irregular or stops. Diagnosis needs two out of three: irregular cycles, signs of raised androgens (in the blood or visibly), and polycystic ovaries on ultrasound. It is a condition that affects the whole body, from skin to metabolism to mood, and it is often missed or reduced to "lose some weight".',
      action:
        'Read the NHS page on PCOS so you understand it is a condition with many faces, not a single symptom. Then ask whether she has heard of it.',
      phaseTags: [],
      sources: [NHS_PCOS],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: 'Irregular cycles: when the app cannot guess',
      insight:
        'With PCOS, follicles mature but often do not complete ovulation. Without ovulation there is no progesterone, the lining builds up without being shed, and the period comes late, rarely or not at all. Cycles of 35-90 days, or fewer than eight a year, are typical. When it does come, it can be heavy, because the lining has had a long time to build. That means the app’s predictions become unreliable: it assumes a pattern that is not there. That is not her fault, and it is not the app’s. It is a sign that the cycle needs investigating rather than predicting. Irregularity is also a common sign of thyroid problems and after stopping the pill.',
      action:
        'If the app’s estimate has been off several times: say that it is not something she needs to log better, but something worth mentioning to a doctor.',
      phaseTags: ['follicular', 'ovulation'],
      sources: [NHS_PCOS, NHS_IRREGULAR],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: 'PCOS: the visible part nobody should comment on',
      insight:
        'Raised androgens show in the skin and hair. Acne that continues long after the teenage years, especially along the jaw and neck. More hair growth on the face, chest, belly or back. Thinning hair on the head in a male pattern. Dark, velvety patches on the neck or in the armpits, which are a sign of insulin resistance. And for many, weight that rises no matter what they do. Each of these signs is both medically relevant and deeply personal. Many spend hours and money hiding them and feel ashamed of something that is a hormonal condition. What she needs from you is zero comments, zero diet advice and complete calm that you see her, not the symptoms.',
      action:
        'Say something concrete you love about her today that is not about looks. And if she brings up hair or skin herself: say "that must be hard", not "I honestly never notice".',
      phaseTags: [],
      sources: [NHS_PCOS],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'PCOS, insulin and the long run',
      insight:
        'Many with PCOS have insulin resistance: the cells respond less well to insulin, the body makes more, and the high insulin makes the ovaries produce more androgens. It is a vicious circle, and it also explains why weight is harder to control and why hunger and cravings can be intense. In the long term PCOS raises the risk of type 2 diabetes, high blood pressure and high cholesterol. That is why blood sugar and blood pressure should be checked regularly. Exercise and regular meals genuinely improve insulin sensitivity, which is why doctors mention lifestyle. The problem is when it is the only thing they say. Lifestyle is part of the treatment, not a verdict on her character.',
      action:
        'Suggest a shared habit that benefits you both, like a walk after dinner. Make it something you do together, not something she has to do.',
      phaseTags: [],
      sources: [NHS_PCOS, ACOG_PCOS],
    },
    {
      id: dailyId(M, 15),
      month: M,
      day: 15,
      title: 'PCOS and fertility: harder, not impossible',
      insight:
        'PCOS is one of the most common causes of reduced fertility, because ovulation is irregular or absent. That does not mean pregnancy is off the table. Many conceive without help, and for those who need it there is well-documented treatment: medicines that trigger ovulation, and in some cases fertility treatment. During pregnancy there is a somewhat higher risk of gestational diabetes and high blood pressure, so care is closer. If you want children, PCOS is a reason to seek help earlier than the usual twelve months, not to wait and see. And if you do not want children: irregular ovulation is not contraception.',
      action:
        'If children are on the table: suggest booking a doctor’s appointment together to talk about what PCOS means for your plan, and go along.',
      phaseTags: ['ovulation'],
      sources: [NHS_PCOS, ACOG_PCOS],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'PCOS affects mood too',
      insight:
        'Women with PCOS have markedly higher rates of anxiety, depression and eating disorders than others. There are several reasons: the hormones themselves, the constant struggle with body and weight, the uncertainty about fertility, and the experience of not being taken seriously. It is not weakness, it is part of the condition, and it deserves the same attention as blood sugar. Yet few doctors ask about it. What helps is saying it out loud: that the heavy stretch may be linked to PCOS and can be treated, and that she does not have to carry it alone. Signs to react to: withdrawing, sleep problems, no longer eating with you, or saying she is worthless.',
      action:
        'Ask today: "How are you really doing with all of it, not your body, but you?" And if the answer is heavy, suggest that it is part of what the doctor needs to hear.',
      phaseTags: ['luteal'],
      sources: [NHS_PCOS],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'The thyroid affects the cycle',
      insight:
        'The thyroid gland controls metabolism, and both an underactive and an overactive thyroid can disrupt the cycle. An underactive thyroid often brings heavy or frequent periods, tiredness, feeling cold, weight gain, dry skin, hair loss and low mood. An overactive one brings light or missed periods, weight loss, palpitations, restlessness and feeling hot. Thyroid disease is far more common in women than in men and often develops slowly, so the symptoms get mistaken for stress or age. The good news is that the diagnosis is a simple blood test, and treatment is effective. Any investigation of irregular, heavy or missed periods should include a thyroid test.',
      action:
        'If she has several of the signs, suggest she asks to have her thyroid checked next time she is at the doctor anyway. It is one more blood test.',
      phaseTags: [],
      sources: [NHS_THYROID],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'When the period stops: stress, weight, exercise',
      insight:
        'A missed period without pregnancy usually has one of three explanations: stress, weight or exercise. Intense or long-lasting stress can dampen the signals from the brain to the ovaries. Low body weight, rapid weight loss or too little energy for the amount used can stop ovulation altogether; it is seen in women who train hard without eating enough. Significant excess weight disrupts things in other ways. The body prioritises survival over reproduction, and a missed period is its signal. If periods stop for more than three months, it is called amenorrhoea and deserves a doctor. Not because it is dangerous right now, but because a long time without estrogen affects bones and heart.',
      action:
        'If the period has been gone for a while: ask with curiosity whether she thinks it is linked to pressure, food or training. Listen without judging her choices.',
      phaseTags: [],
      sources: [NHS_MISSED],
    },
    {
      id: dailyId(M, 19),
      month: M,
      day: 19,
      title: 'Missed periods: breastfeeding and perimenopause',
      insight:
        'Two other reasons for missed periods are natural but can still confuse. During breastfeeding the hormone prolactin suppresses ovulation, and periods can be absent for months. But ovulation can happen before the first period returns, so breastfeeding is not reliable contraception. Perimenopause is the years leading up to menopause, typically from the mid-forties but sometimes earlier. Cycles first get shorter, then longer and more irregular, the bleeding changes character, and hot flushes, poor sleep and mood swings follow. What surprises many couples is how early it can start, and how much it resembles PMS or stress. Periods that stop before 40 always deserve a doctor.',
      action:
        'If she is over 40 and the cycle has changed: ask whether she has considered that it could be the start of perimenopause. Month 12 goes deeper into it.',
      phaseTags: [],
      sources: [NHS_MISSED, NHS_MENOPAUSE],
    },
    {
      id: dailyId(M, 20),
      month: M,
      day: 20,
      title: 'Bleeding between periods',
      insight:
        'Bleeding outside the period has many causes, and most are harmless: a little spotting around ovulation, breakthrough bleeding in the first months on new hormonal contraception, or a missed pill. But bleeding after sex, bleeding that keeps recurring between periods, or any bleeding after menopause should always be checked. The causes can be polyps, fibroids, infection, cell changes on the cervix or, rarely, something more serious. It is exactly the kind of thing many put off because it is embarrassing or "probably nothing". It is also exactly the kind of thing where an early check makes the biggest difference. Make sure she also goes to the screenings she is offered.',
      action:
        'Ask whether she is up to date with cervical screening and whether she has had the latest invitation. If she has been putting it off, offer to help book it.',
      phaseTags: ['follicular', 'ovulation'],
      sources: [NHS_IRREGULAR],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: 'PMDD: when PMS is not PMS',
      insight:
        'Month 7 was about PMS and PMDD. Here is the short refresher, because it belongs in this month’s theme. PMDD, premenstrual dysphoric disorder, affects 3-8 percent and is not severe PMS but a heightened sensitivity in the brain to normal hormone swings. The symptoms are serious: deep low mood, anxiety, rage, hopelessness and for some suicidal thoughts in the days before the period, lifting when the bleeding comes. The diagnosis is made by logging symptoms for at least two cycles, and that is exactly what the app can help with. Treatment exists: antidepressants, which work quickly in this context, hormonal treatment and therapy. Nobody should have to live dreading half of every month.',
      action:
        'Look in the calendar: are there two or more cycles where the last days before the period are logged as very heavy? Then show her the pattern and suggest she brings it to the doctor.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 22),
      month: M,
      day: 22,
      title: 'Painful sex is not something to grit through',
      insight:
        'Pain during sex is far more common than anyone talks about, and it is a symptom, not a performance to be completed. Deep pain on penetration can be a sign of endometriosis, adenomyosis, fibroids or infection. Pain at the entrance can be caused by dryness, hormonal contraception, skin conditions, muscle tension or earlier painful experiences that have taught the body to clench. Many women carry on regardless so as not to disappoint, and that makes both the pain and the anxiety worse. The most important thing you can do is make it completely clear that it stops when it hurts, with no sulking, and that this is something you figure out together. It deserves a doctor, not patience alone.',
      action:
        'Say it out loud today, outside the bedroom: "If anything hurts, we stop, and I will not be upset." Then ask whether there is something she has not said.',
      phaseTags: ['ovulation', 'luteal'],
      sources: [NHS_ENDO],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'The app as a symptom diary',
      insight:
        'The strongest thing she can bring to a doctor is not a description but a pattern. Doctors work with data, and "pain 8 out of 10 on days 1-3 for six cycles, a sick day every time, pain on the toilet during the period" is something quite different from "I have bad periods". The app already has the dates. What is often missing is the systematic part: pain score, amount of bleeding, how many products, what got cancelled, which other symptoms came along. Three cycles are enough to show a pattern; two is the minimum for PMDD. It is her log, but you can make logging easier by reminding her gently and by having looked at it yourself.',
      action:
        'Open the app together tonight and agree on the three things she logs every day for the next three cycles: pain, bleeding and one symptom she picks herself.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 24),
      month: M,
      day: 24,
      title: 'Questions worth asking the doctor',
      insight:
        'A doctor’s appointment is short, often 10-15 minutes, and it is easy to leave and only afterwards think of the most important thing. That is why it helps to have three to five questions written down. Good ones: "What could this be, and what can be ruled out?" "Which tests make sense: blood tests, ultrasound, a referral to a gynaecologist?" "What is the next step if this does not help?" "When should I come back?" And the most important: "Can you note in my record that I asked to have X investigated?" That last one makes a difference, because it documents that the concern was raised. Preparation makes it harder to be sent home with a shrug.',
      action:
        'Offer to write the questions down with her tonight, ideally in a note in the app, so she has them on her phone at the appointment.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 25),
      month: M,
      day: 25,
      title: 'Go along, without taking over',
      insight:
        'Having someone else at the appointment makes it easier to remember what was said and harder to be dismissed. But it is her consultation, her body and her voice. Your role is support and memory, not spokesperson. Concretely: ask first whether she wants you there, and respect a no. Agree beforehand what you may say, for instance confirming how bad it is if she plays it down herself. Sit beside her, not in front. Take notes. Only ask questions you have agreed on, or ask her first: "Do you want me to mention the sick days?" After the visit: go over what was said and what the next step is. That is backing her up, not taking over.',
      action:
        'Ask today: "Do you want me with you at the doctor next time, and what would you want me to do and not do in there?"',
      phaseTags: [],
    },
    {
      id: dailyId(M, 26),
      month: M,
      day: 26,
      title: 'Being dismissed, and asking for a second opinion',
      insight:
        'Many women with endometriosis, PCOS or PMDD describe being sent home with "that is normal", "lose weight", "try the pill" or "you are probably stressed". Sometimes that is right. But when the symptoms continue, it is a sign to ask again. She has the right to a second opinion, to ask for a referral to a gynaecologist and to change doctors. That is not being difficult or ungrateful; it is how diagnoses get made. What usually holds her back is doubt: "maybe I am exaggerating". This is where your voice matters. You have seen the days, and you can say: you are not exaggerating, I was there.',
      action:
        'If she has been dismissed: tell her today that you believe her, and offer to find out how to ask for a referral or change doctors. Do the practical part together.',
      phaseTags: [],
      sources: [NHS_ENDO],
    },
    {
      id: dailyId(M, 27),
      month: M,
      day: 27,
      title: 'A chronic diagnosis changes something in her',
      insight:
        'A diagnosis like endometriosis or PCOS can be a relief: finally a name, finally an explanation. And at the same time a grief: it will not go away, it has to be managed for the rest of her life, and it may affect children, work and sex. Many go through something like a grieving process, with anger about the lost years, fear about the future and stretches where they cannot face thinking about it. That is normal, and it does not follow a schedule. What she needs is not encouragement like "it could be worse" or solutions, but for you to hold that she can be both relieved and sad on the same day, and for you not to disappear into worry yourself.',
      action:
        'If she has a diagnosis: ask today "how are you feeling about it right now?" without suggesting anything. If not: ask what she would feel if she got one.',
      phaseTags: ['luteal', 'menstrual'],
    },
    {
      id: dailyId(M, 28),
      month: M,
      day: 28,
      title: 'Everyday life with a chronic condition',
      insight:
        'Life with endometriosis, adenomyosis or severe PMDD has good days and bad days, and the bad ones cannot always be predicted. What helps day to day is practical and a little boring: plans have a plan B, cancellations need no explanation or apology, painkillers, heat and easy food are in stock, you know her medication and can tell when the pain is beyond the usual. And you take the practical stuff without asking on the days she cannot. Many people with chronic illness spend more energy on feeling like a burden than on the illness itself. You can remove that by making help a matter of course.',
      action:
        'Agree on a fixed message she can send when it is a bad day, for example just "bad day", and agree on what you then do, without her having to explain more.',
      phaseTags: ['menstrual'],
    },
    {
      id: dailyId(M, 29),
      month: M,
      day: 29,
      title: 'Sentences that make it worse, and what to say instead',
      insight:
        '"All women have pain." "Have you tried stressing less?" "My sister has it too and she is fine." "Are you going to the doctor again?" "It is probably just hormones." Each of them does the same thing: they say her experience is exaggerated, and they are exactly what she has already heard from others. The opposite is not hard, but it requires you to tolerate not being able to fix it. "That sounds incredibly hard." "I believe you." "What do you need today?" "Do you want me to come along?" "We will figure this out together." Five sentences that cost nothing, and that she has probably been waiting a long time to hear.',
      action:
        'Pick one of the five good sentences and say it today in a situation where it fits. Notice what happens in her face.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 30),
      month: M,
      day: 30,
      title: 'Month 11: what you have learned',
      insight:
        'You now know the signs of something being off: pain that runs the day, bleeding that soaks through, cycles that skip months, bleeding between periods, pain during sex, and tiredness that does not match her sleep. You know that endometriosis, adenomyosis, fibroids, PCOS, thyroid problems and PMDD are all common, that all of them can be treated, and that all of them take too long to diagnose because symptoms get normalised. You know the app can be a symptom diary, that preparing for the doctor matters, that you can go along without taking over, and that "I believe you" is the most important sentence. You cannot diagnose. You can make sure she does not go alone.',
      action:
        'Write down the three signs you will watch for in her log from now on, and tell her what you have learned. Then take the month’s quiz.',
      phaseTags: [],
    },
  ],
  weekly: [
    {
      id: weeklyId(M, 1),
      month: M,
      week: 1,
      title: 'Endometriosis and adenomyosis: the pain that is not normal',
      body: [
        'If this month teaches you one thing, it is that period pain has a limit to what is normal, and that the limit is crossed far more often than anyone talks about. Endometriosis affects around 1 in 10 women of reproductive age. That is as common as diabetes, and yet it takes 7-10 years on average to get the diagnosis. This article is about what it is, how it shows up, and what you can do.',
        'Endometriosis is a condition where tissue similar to the lining of the uterus sits outside it: on the ovaries, fallopian tubes, the lining of the pelvis, bowel or bladder. The tissue responds to the cycle hormones just like the lining does, so it bleeds every month, but the blood has no way out. That causes inflammation, scar tissue and adhesions, and those are what hurt. Adenomyosis is the close relative, where the tissue grows into the muscle wall of the uterus itself, so the uterus becomes enlarged, tender and bleeds heavily. The two often occur together, and the symptoms overlap.',
        'The symptoms are wider than most people think. Pain in the pelvis and lower back that starts before the bleeding and can continue after it. Pain during or after sex. Pain when passing stools or urinating, especially during the period. Nausea, constipation or diarrhoea that follows the cycle. Bleeding between periods. A tiredness that does not match her sleep. And for some, difficulty getting pregnant. Important: the intensity of the pain says nothing about how much tissue there is. Some with widespread endometriosis have little pain; others with a small amount are knocked flat every month.',
        'Why does the diagnosis take so long? Because the pain is normalised, often from the teenage years, by her, by mothers and friends who were told the same, and by doctors who see "bad periods" every day. Because the symptoms look like irritable bowel, a bladder infection or stress. Because ultrasound often does not show the tissue, and a definitive diagnosis needs keyhole surgery. And because many women stop asking after two or three dismissals. That last part is the one you can do something about.',
        'There is no cure, but there is treatment, and it works for many. The first track is pain relief: ibuprofen and similar taken early, heat, physiotherapy aimed at the pelvic floor. The second is hormonal treatment: the pill, a hormonal coil or other medicines that quieten the cycle and with it the activity of the tissue. The third is surgery, where the tissue is removed by keyhole surgery; it can bring relief for years, even though the tissue can return. It often takes several attempts to find the right combination, and every failed attempt can feel like a defeat. Your patience matters here.',
        'What can you do concretely? First: stop normalising. When she has to cancel, throw up or lie on the floor, say it out loud: that is not normal, it deserves a doctor. Second: help with the documentation. The app has the dates; what is missing is pain scores, sick days and accompanying symptoms, logged over three cycles. Doctors listen to patterns. Third: offer to go with her to the doctor, and agree beforehand what your role is. Fourth: if she is dismissed, tell her you believe her, and help ask for a referral to a gynaecologist. And fifth: on the bad days, take the practical things without asking, and let her off having to explain.',
        'One last thing. If she gets the diagnosis, it can be a relief and a grief at the same time. Finally an explanation, and at the same time something that will not go away. You do not need to fix that feeling. You just need to be able to hold it and stay.',
      ],
      conversationQuestion:
        'Have you ever had pain where you thought "this cannot be normal", and what did you do with that thought?',
      sources: [NHS_ENDO, ACOG_ENDO, NHS_ADENO],
    },
    {
      id: weeklyId(M, 2),
      month: M,
      week: 2,
      title: 'PCOS: more than irregular cycles',
      body: [
        'Polycystic ovary syndrome, PCOS, is the most common hormonal condition in women of reproductive age, affecting around 1 in 10. Yet it is one of the most misunderstood, both by the people around her and by healthcare, where it is far too often reduced to "lose weight and it will get better". This article explains what it is, how it shows up across the whole body, and how you back her up without becoming one more voice with opinions about her body.',
        'The name is misleading. The "cysts" are immature egg follicles, not real cysts, and you can have PCOS without them. The core is a hormonal imbalance: the ovaries produce too much of the male sex hormones, androgens, and ovulation becomes irregular or stops. Diagnosis requires two out of three criteria: irregular or missed periods, signs of raised androgens, either in the blood or visible in skin and hair, and polycystic ovaries on ultrasound. Many are diagnosed late because the individual symptoms are treated separately by different doctors.',
        'In the cycle, PCOS means follicles start to mature but often do not complete ovulation. Without ovulation there is no progesterone, the lining builds up without being shed, and the period comes late, rarely or not at all: cycles of 35-90 days, or fewer than eight a year. When it finally comes, it can be heavy. For you as a partner, that means the app’s predictions become unreliable, because there is no fixed pattern to calculate from. It is not something she needs to log better; it is something that needs investigating.',
        'Outside the cycle, the androgens show in skin and hair: acne long after the teenage years, more hair growth on the face and body, thinning hair on the head. Many have insulin resistance, where the cells respond less well to insulin, the body makes more, and the high insulin drives the ovaries to produce even more androgens. That vicious circle explains why weight is harder to control and why hunger can be intense. In the long term PCOS raises the risk of type 2 diabetes, high blood pressure and high cholesterol, so blood sugar and blood pressure should be checked regularly. Exercise and regular meals genuinely improve insulin sensitivity, which is why doctors mention lifestyle. The problem is when it is the only thing they say.',
        'Fertility is often the biggest worry. PCOS is one of the most frequent causes of reduced fertility, because ovulation fails. But it is harder, not impossible: many conceive without help, and for the rest there is well-documented treatment that triggers ovulation. If you want children, PCOS is a reason to seek help early rather than wait. If you do not want children, irregular ovulation is not contraception.',
        'What is most often overlooked is mood. Women with PCOS have markedly higher rates of anxiety, depression and eating disorders. The hormones play a part, but so does the daily struggle with body and self-image, and the experience of not being taken seriously. Few doctors ask about it. You can.',
        'What can you do? Zero comments about weight, skin or hair, not even "positive" ones. No diet advice unless she asks. Shared habits rather than her project: a walk after dinner, food you both eat. Read up on the condition so she does not have to explain it. Ask how she is doing, not how her body is doing. And offer to go to the doctor with a list of all the symptoms gathered in one place, so they are seen as one picture.',
      ],
      conversationQuestion:
        'Is there something about your body or your cycle you have learned to hide or not talk about, and what would make it easier to say out loud to me?',
      sources: [NHS_PCOS, ACOG_PCOS],
    },
    {
      id: weeklyId(M, 3),
      month: M,
      week: 3,
      title: 'Bleeding that is off: too much, too little, wrong time',
      body: [
        'Bleeding is the most visible part of the cycle, and yet it is hard for a partner to judge what is normal. This article gathers the three ways bleeding can be off: too heavy, missing, and at the wrong times. All three have common causes that can be found and treated, and all three often get put off because she thinks it is normal or because it is embarrassing to talk about.',
        'Heavy periods affect around one in four women. The signs doctors use: a pad or tampon that needs changing every hour for several hours in a row; needing two products at once; bleeding through clothes or bedding; clots the size of a coin or larger; bleeding for more than 7 days; and a life planned around the nearest toilet. The causes are often fibroids, benign muscle growths in the uterus that up to one in three women develop; adenomyosis; polyps; hormonal imbalance with missed ovulation; thyroid problems; or bleeding disorders. Ultrasound and blood tests find most of them, and even without a cause being found, the bleeding can be reduced with medication or a hormonal coil.',
        'The hidden consequence is iron deficiency. Every heavy period drains the stores a little more, and it happens so gradually that she gets used to the tiredness. Signs: tiredness that does not match her sleep, breathlessness on stairs, palpitations, pale skin, dizziness, cold hands and feet, brittle nails. Iron deficiency anaemia is the most common deficiency in women of reproductive age, and it needs a blood test, not guesswork. Treatment is iron supplements for months alongside doing something about the bleeding. Iron on her own without a blood test is not wise; too much is harmful too.',
        'A missed period without pregnancy usually has an explanation that is not dangerous but deserves attention. Intense or prolonged stress dampens the signals from the brain to the ovaries. Low weight, rapid weight loss or too little energy for the amount of training can stop ovulation altogether. Significant excess weight and PCOS disrupt things in other ways. Thyroid disease, both underactive and overactive, interferes with the cycle and is a simple blood test to rule out. During breastfeeding, prolactin suppresses ovulation for months, but ovulation can happen before the first period, so breastfeeding is not reliable contraception. And perimenopause, the years leading up to menopause, often starts earlier than couples expect and looks like both PMS and stress. If periods stop for more than three months, or stop before 40, it deserves a doctor.',
        'Bleeding between periods is usually harmless: spotting around ovulation, breakthrough bleeding on new hormonal contraception, a missed pill. But bleeding after sex, repeated bleeding between periods and any bleeding after menopause must be checked. The causes can be polyps, fibroids, infection, cell changes on the cervix or, rarely, something more serious. It is exactly where an early check makes the biggest difference, and exactly what many put off. Make sure she goes to the screenings she is invited to.',
        'Your role is practical and calm. Notice whether twice as many products are being bought, whether there is blood on the bedding, whether she is tired in a way sleep does not fix. Mention it without drama: "I have noticed you bleed a lot. There is help for that, and I am happy to come along." Offer to book the appointment. Keep iron-rich food in the house, but without making it a project. And if the period has gone missing, ask with curiosity rather than worry: is there pressure on, is she eating enough, is she training more than her body can keep up with. Listen without judging.',
        'The common thread for all three is the same: bleeding that is off usually has a reason, the reason can be found, and what delays things is rarely the body, but the belief that it is normal.',
      ],
      conversationQuestion:
        'If you had to describe your bleeding to a doctor in three sentences, what would you say, and is there anything in it you have never had checked?',
      sources: [NHS_HEAVY, NHS_MISSED, NHS_FIBROIDS, NHS_ANAEMIA],
    },
    {
      id: weeklyId(M, 4),
      month: M,
      week: 4,
      title: 'To the doctor together: preparation, backing and a second opinion',
      body: [
        'Everything this month has been about ends in the same place: at the doctor. And that is where many women find things go wrong. Not because doctors do not care, but because consultations are short, the symptoms look like other things, and a patient describing last month from memory is easy to send home with "let us see how it goes". This article is about how the two of you make the visit better, and what you do if she is dismissed.',
        'It starts with documentation. Doctors work with patterns, and the app already has the dates. What makes the difference is three cycles with pain scores, amount of bleeding, sick days, cancellations and accompanying symptoms like pain on the toilet, pain during sex or severe low mood before the period. "Pain 8 out of 10 on days 1-3 for six cycles, a sick day every time" closes the door on "everyone has a bit of pain". For PMDD, two logged cycles is the formal diagnostic method. You can make logging easier by agreeing on three fixed things she logs every day, and by having looked at the pattern yourself, so you agree on what it shows.',
        'Then the preparation. Write down three to five questions, ideally in the app, so she has them on her phone. "What could this be, and what can be ruled out?" "Which tests make sense: blood tests for iron and thyroid, ultrasound, a referral to a gynaecologist?" "What is the next step if this does not help?" "When should I come back?" And: "Will you note in my record that I asked to have this investigated?" That last one documents that the concern was raised and makes it harder to dismiss the same concern next time. If you can, book the appointment in the follicular phase, when she has the energy to prepare and to stand her ground.',
        'Then the visit itself. Ask whether she wants you there, and respect a no. If yes, agree beforehand what your role is: memory, note-taker and possibly the one who confirms how bad it is if she plays it down, which many do in a consulting room. Sit beside her, not in front. Do not speak for her. Only ask questions you have agreed on, or ask her first. Your presence makes a difference on its own; a patient with someone beside them is less often sent home with a shrug. After the visit: go over what was said and what the next step is, and write it down while you both remember.',
        'And if she is dismissed? "That is normal." "Lose weight." "Try the pill." "You are probably stressed." Sometimes that is right, and the pill genuinely is a treatment for several of the conditions. But when the symptoms continue after the attempt, that is a signal to ask again. She has the right to ask for a referral to a gynaecologist, to a second opinion and to change doctors. That is not being difficult or ungrateful; it is how most people with endometriosis and PCOS eventually got their diagnosis. What holds her back is usually doubt: "maybe I am exaggerating". This is where your voice matters. You have seen the days. You can say: you are not exaggerating, I was there, and then help with the practical part.',
        'Finally: whether or not she gets a diagnosis, there is a person in it. A diagnosis can be relief and grief on the same day. A "we did not find anything" can be both reassuring and frustrating. What she needs from you is not solutions or cheering up, but for you to hold it and keep taking it seriously, even when it drags on. The five sentences from day 29 apply all the way through: that sounds hard, I believe you, what do you need, do you want me to come along, we will figure this out together.',
        'You cannot make the diagnosis. But you can make sure she turns up with a pattern in hand, questions on her phone and someone at her side. That is more than most people bring.',
      ],
      conversationQuestion:
        'If you went to the doctor with what worries you most right now, what should I do and not do to be the best support?',
      sources: [NHS_ENDO, NHS_PCOS, NHS_HEAVY],
    },
  ],
  wrap: {
    id: wrapId(M),
    month: M,
    title: 'Month 11: When something is off',
    summary: [
      'This month was about what falls outside the normal, and about how common that is. Endometriosis and PCOS each affect around 1 in 10, fibroids up to one in three, heavy bleeding one in four, and PMDD 3-8 percent. All of them can be treated, and all of them take too long to diagnose because the symptoms get normalised, look like something else or are treated separately.',
      'You have learned the signs: pain that runs the day, bleeding that soaks through, cycles that skip months, bleeding between periods or after sex, pain during sex, changes in skin and hair, and tiredness that does not match her sleep. You have learned that the app can be the symptom diary doctors listen to, that prepared questions make it harder to be sent home, that you can go along without taking over, and that she has the right to a second opinion.',
      'Most importantly: you do not diagnose. You say "that deserves a doctor", "I believe you" and "do you want me to come along?", and you take the practical things on the bad days. Next month we wrap up the whole year and look at the stages of life: puberty, the time after birth and perimenopause.',
    ],
    keepDoing: [
      'Say "that deserves a doctor" instead of normalising pain or bleeding.',
      'Help log pain, bleeding and one symptom every day for three cycles before an appointment.',
      'Write the questions for the doctor down together, and offer to go along as support, not spokesperson.',
      'Say "I believe you", and help with the practical part if she wants a second opinion.',
      'Zero comments about weight, skin and hair. Ask about her, not her body.',
      'Have an agreed "bad day" message and a plan for what you do when it arrives.',
    ],
    quiz: [
      {
        question:
          'She vomits from pain and has to call in sick for the first two days of every period, but says "it has always been like this". What helps most?',
        options: [
          'Tell her it is probably endometriosis',
          'Say that it is not normal, that it deserves a doctor, and offer to log the pain together for three cycles',
          'Buy a better heating pad and stronger painkillers',
          'Respect that she knows her body best, and leave it',
        ],
        correctIndex: 1,
        explanation:
          'You do not make the diagnosis, but you do not normalise either. A documented pattern over three cycles is what gets doctors to listen.',
      },
      {
        question:
          'Her periods have come 50-70 days apart for a year, and the app’s estimate is never right. What is the right response?',
        options: [
          'Ask her to log more precisely so the app can calculate correctly',
          'Assume it is stress and wait for it to sort itself out',
          'Say that the irregularity itself is worth getting checked, and mention that thyroid problems and PCOS are common explanations',
          'Suggest she stops using the app',
        ],
        correctIndex: 2,
        explanation:
          'Cycles over 35 days or fewer than eight a year are a sign in themselves. It is not a logging problem; it is something a doctor should look at with blood tests and ultrasound.',
      },
      {
        question:
          'She has PCOS and mentions one evening that she hates the extra hair growth on her face. What is most helpful to say?',
        options: [
          '"I honestly never notice it."',
          '"Have you tried losing weight? The doctor says that helps."',
          '"That must be hard to carry. I love you, and it changes nothing."',
          '"There is probably laser for that."',
        ],
        correctIndex: 2,
        explanation:
          'Denying that it exists, or jumping straight to solutions, closes the conversation. Acknowledging that it is hard and making it clear it changes nothing for you opens it.',
      },
      {
        question:
          'She changes her tampon every hour, has blood on the bedding every month and is constantly tired. What should happen first?',
        options: [
          'Buy iron supplements at the supermarket and see if the tiredness goes',
          'Suggest a blood test for iron and a talk with the doctor about the bleeding, and offer to book the appointment',
          'Recommend she sleeps more',
          'Wait and see whether the next period is lighter',
        ],
        correctIndex: 1,
        explanation:
          'Heavy bleeding plus tiredness points to iron deficiency, which should be measured, not guessed. Both the anaemia and the bleeding can be treated, and booking the appointment is concrete help.',
      },
      {
        question:
          'She is going to the doctor about her pain and wants you there. What is your best role in the room?',
        options: [
          'Do the talking so the doctor understands how serious it is',
          'Sit beside her, take notes and only say what you agreed on beforehand',
          'Wait outside so she can speak freely',
          'Ask all the questions you have yourself',
        ],
        correctIndex: 1,
        explanation:
          'Your presence makes a difference, but it is her consultation. Support and memory, not spokesperson. Agree on the role before, not in the room.',
      },
      {
        question:
          'The doctor said "try the pill and see how it goes". Three months later the pain is the same, and she says: "maybe I am just exaggerating." What helps most?',
        options: [
          'Say the doctor is probably right and that it takes time',
          'Say "you are not exaggerating, I was there", and offer to help ask for a referral to a gynaecologist',
          'Suggest she searches online for a diagnosis',
          'Call the doctor yourself and complain',
        ],
        correctIndex: 1,
        explanation:
          'When symptoms continue after an attempt, that is a signal to ask again. She has the right to a second opinion, and your confirmation of what you have seen is often what gets her to ask for it.',
      },
    ],
  },
};
