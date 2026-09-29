import type { MonthContent, Source } from '../types';
import { dailyId, weeklyId, wrapId } from '../types';

const NHS_CONTRACEPTION: Source = {
  label: 'NHS: Contraception',
  url: 'https://www.nhs.uk/conditions/contraception/',
};
const NHS_EMERGENCY: Source = {
  label: 'NHS: Emergency contraception',
  url: 'https://www.nhs.uk/conditions/contraception/emergency-contraception/',
};
const NHS_VASECTOMY: Source = {
  label: 'NHS: Vasectomy',
  url: 'https://www.nhs.uk/conditions/vasectomy-male-sterilisation/',
};
const NHS_TRYING: Source = {
  label: 'NHS: Trying for a baby',
  url: 'https://www.nhs.uk/pregnancy/trying-for-a-baby/',
};
const NHS_MISCARRIAGE: Source = {
  label: 'NHS: Miscarriage',
  url: 'https://www.nhs.uk/conditions/miscarriage/',
};
const NHS_INFERTILITY: Source = {
  label: 'NHS: Infertility',
  url: 'https://www.nhs.uk/conditions/infertility/',
};

const M = 10;

export const month10: MonthContent = {
  month: M,
  theme: 'Fertility, contraception and pregnancy',
  focus: 'See what she carries in responsibility and side effects, and take what you can take.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'Who carries the contraception?',
      insight:
        'In most couples it is her who carries the contraception: she remembers the pill, she gets the coil fitted, she lives with the side effects, and she is the one who gets pregnant if it fails. That is nobody’s fault; most methods are simply built for her body. But the responsibility does not have to follow the method. You can remember, ask, pay, come along to the doctor, and you can take one of the two methods that exist for men. This month is about how the methods work, what they cost her in cycle and mood, and what happens when you want to go the other way: trying for a child. The first step is knowing what you actually use.',
      action:
        'Ask her today: "What do we actually use, and how do you feel about it?" Listen to the answer without suggesting anything yet.',
      phaseTags: [],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: 'The pill: how it works',
      insight:
        'The combined pill contains synthetic estrogen and progestogen. They keep hormone levels so steady that the brain never sends the LH surge that triggers ovulation. No ovulation, no pregnancy. At the same time the mucus in the cervix thickens and the uterine lining thins. The "period" she gets in the pill-free week is a bleed triggered by the hormone drop, not a real cycle; that is why the break can be skipped. Taken every day the pill is over 99 percent effective; in real life, with missed pills, vomiting and travel, the figure is around 91 percent. That means about 9 in 100 women get pregnant in a year. The daily remembering is her job, unless you share it.',
      action:
        'If she takes the pill: ask what time of day she takes it, and offer to be the one who reminds her when you are out or travelling.',
      phaseTags: [],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 3),
      month: M,
      day: 3,
      title: 'Side effects she may not mention',
      insight:
        'For many the pill means lighter, more predictable bleeding and less PMS. But it can also cause headaches, tender breasts, nausea, spotting, lower desire and, for some, a flatter or lower mood. The research is not conclusive, but a fair number of women find their mood improves when they stop, and only then discover what the pill had been costing them. Because she has taken it for years, it is hard to know what is her and what is the pill. The short-term risk of blood clots is small but real, and higher with smoking and migraine with aura. She carries all of that, often without it ever being discussed.',
      action:
        'Ask: "Is there anything about your contraception you think affects your mood or your desire?" And take the answer seriously, even if it is "I don’t know".',
      phaseTags: ['luteal'],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'The mini-pill: progestogen only',
      insight:
        'The mini-pill contains only progestogen, no estrogen. Most newer types stop ovulation; older types work mainly by thickening the cervical mucus. It can be used by women who cannot take estrogen, for example with migraine with aura, high blood pressure or while breastfeeding. The price is often irregular bleeding: some get no period at all, others spot for weeks, and the pattern can change from month to month. That makes the app’s predictions unreliable, because there is no real cycle to predict. The mini-pill is taken every day without a break, and some types must be taken within a three-hour window. Effectiveness is similar to the combined pill: over 99 percent with perfect use, around 91 in practice.',
      action:
        'If she uses the mini-pill or another progestogen method: remember the bleeding pattern can be irregular, and do not comment on a "late" or "early" period.',
      phaseTags: [],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'The hormonal IUD',
      insight:
        'The hormonal IUD is a small T-shaped piece of plastic that a doctor places in the uterus. It releases progestogen locally, thins the lining, thickens the mucus, and in some women stops ovulation. It lasts 3-8 years depending on the type, is over 99 percent effective, and she has nothing to remember. Many get much lighter bleeding or none at all, and it is also used as a treatment for heavy periods. The fitting can hurt, for some a lot, and the first 3-6 months often bring spotting and cramps. Hormonal side effects such as mood changes and acne are rarer than with pills because the dose is lower, but they exist. She can feel the threads, and occasionally so can you.',
      action:
        'If she has or is considering an IUD: ask what the fitting was like or what worries her about it, and offer to come along and drive home afterwards.',
      phaseTags: ['menstrual'],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: 'The copper IUD: no hormones',
      insight:
        'The copper IUD contains no hormones. The copper makes the environment in the uterus hostile to sperm, so they cannot fertilise the egg. She keeps her own natural cycle with ovulation and everything that comes with it, so the app fits better than with hormonal methods. It lasts 5-10 years and is over 99 percent effective. The price is the bleeding: it often becomes heavier, longer and more painful, especially the first six months. For a woman who already has heavy periods that can be too much. In return it is free of mood side effects, and it can be removed whenever you want, after which fertility returns immediately. It is also the most effective emergency contraception there is.',
      action:
        'If she has a copper IUD: have extra heat, painkillers and the pads or tampons she uses ready for the first days of her period.',
      phaseTags: ['menstrual'],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'The implant',
      insight:
        'The implant is a small, soft rod placed under the skin on the inside of the upper arm that releases progestogen for three years. It stops ovulation and is over 99 percent effective, the most effective method of all, because there is nothing to forget. It is fitted and removed under local anaesthetic in a few minutes. The big drawback is the bleeding pattern: about one in five gets no period, many get irregular or prolonged spotting, and that is the most common reason for having it taken out. Headaches, acne, tender breasts and mood changes occur. Fertility returns quickly once the implant is removed. As with the mini-pill, the app becomes unreliable because the cycle is on pause.',
      action:
        'Notice whether her contraception causes bleeding outside any pattern, and ask whether it bothers her instead of assuming it is fine.',
      phaseTags: [],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: 'The injection',
      insight:
        'The injection is a progestogen shot every 12-13 weeks that stops ovulation. With appointments kept on time it is over 99 percent effective; in practice, with late appointments, around 94. Many have no periods after a year, which some love. But it stands out on two points. It cannot be taken out again: side effects such as weight gain, mood changes and headaches have to be ridden out until the effect wears off. And fertility can take up to a year to return after the last injection, which matters if you are considering children in the next couple of years. It can also cause a small loss of bone density with long-term use, which usually recovers.',
      action:
        'If she has the injection: put the date of the next one in your own calendar, so she is not the only one keeping track.',
      phaseTags: ['menstrual'],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'The condom: the method you can carry',
      insight:
        'The condom is one of two methods that put the responsibility on your body. Used correctly every time it is 98 percent effective; in practice, with late application, wrong sizes and "just this once", the figure is around 85. It is the only method that also protects against sexually transmitted infections. The most common failure is not that it breaks, but that it is not used from the start, or that it slips off because it does not fit. Size matters more than most men think, and there are many. Combined with both of you knowing her fertile window, the condom is a real option for couples where she cannot tolerate hormones. It requires that you are the one who has them, and the one who gets them out.',
      action:
        'Check whether there are condoms in the house, whether they have expired, and whether the size actually fits. Buy them yourself; having them is your responsibility.',
      phaseTags: ['ovulation'],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 10),
      month: M,
      day: 10,
      title: 'Vasectomy',
      insight:
        'A vasectomy is a 15-20 minute procedure under local anaesthetic in which the tubes carrying sperm are cut, so sperm no longer reach the ejaculate. It changes nothing about desire, erections, testosterone or the volume of the ejaculate; sperm make up a tiny fraction. It is over 99 percent effective, safer and far less invasive than female sterilisation, which requires keyhole surgery under general anaesthetic. It takes 8-12 weeks before tests show the sperm are gone, so you need other contraception until then. It should be considered permanent; a reversal does not always work. For couples who are done having children, it is the most concrete way you can take over the whole burden.',
      action:
        'If you are sure you do not want more children: mention today that you have read about vasectomy and that you are open to being the one who has it done.',
      phaseTags: [],
      sources: [NHS_VASECTOMY],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'Fertility awareness: the honest numbers',
      insight:
        'Fertility awareness means finding the fertile window by taking her temperature every morning, tracking cervical mucus and perhaps using ovulation tests, then avoiding sex or using condoms on those days. Done very precisely, every day, with proper teaching, it can reach 99 percent. In practice, where cycles shift with stress, illness and poor sleep, and where life gets in the way, around one in four women gets pregnant within a year. It is not a bad method, it is a demanding one. And be honest about one thing: this app is not that method. The app estimates from averages and is built for understanding, not for planning safe days. Never use it as contraception.',
      action:
        'Say it out loud to yourself: "The app’s fertile window is an estimate, not contraception." If you use fertility awareness, talk about how closely the method is actually being followed.',
      phaseTags: ['ovulation', 'follicular'],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: 'The conversation about switching',
      insight:
        'Many women stay on a method they are not happy with because switching feels like a big deal, and because nobody has asked. Maybe she has been on the pill since her teens and has never felt her own cycle as an adult. Maybe she dreads a new IUD. Maybe she is considering stopping altogether to see who she is without hormones. It is a decision about her body, and it is hers. Your role is to make it easier: to know what the alternatives are, to say out loud that you are willing to carry condoms or a vasectomy, and not to make your own convenience an argument. The follicular phase is a good time for the conversation.',
      action:
        'Open the conversation today: "If you could choose freely, would you use what we use now? I would like to take more of it if that helps."',
      phaseTags: ['follicular'],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: 'Emergency contraception: what, when, where',
      insight:
        'When the condom breaks or the pill is forgotten, there are three options. The levonorgestrel morning-after pill works best within three days, and the ulipristal pill within five; both delay ovulation so the sperm die before the egg arrives. They work poorly if ovulation has already happened. The copper IUD can be fitted up to five days after and is over 99 percent effective regardless of cycle day, and she can keep it afterwards. The pills are available at the pharmacy without a prescription, the sooner the better. They can cause nausea, and the next period may come earlier or later than expected. They are safe to use, but they are not a method; they are a fallback, and the trip to the pharmacy can just as well be yours.',
      action:
        'Find out where the nearest pharmacy with late opening hours is, and tell her that if something goes wrong, you will fetch the morning-after pill.',
      phaseTags: ['ovulation'],
      sources: [NHS_EMERGENCY],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'When you are trying: timing without a stopwatch',
      insight:
        'If you want a child, the fertile window is the five days before ovulation and the day itself. The chance is highest in the two to three days just before, because the sperm need to be waiting when the egg arrives, and the egg only lives a day. Sex every second or third day throughout the cycle hits the window by itself, without anyone having to calculate. If you want more precision, ovulation tests that measure LH in urine, and her own discharge, are better than the app’s estimate. After ovulation there is nothing more to gain that month, and it is fine to relax. And it is worth saying out loud: it is still sex, not a task. How you talk about it decides whether it stays enjoyable.',
      action:
        'If you are trying: agree on "every other day for the next two weeks" instead of chasing one date, and be the one who initiates at least half the time.',
      phaseTags: ['ovulation', 'follicular'],
      sources: [NHS_TRYING],
    },
    {
      id: dailyId(M, 15),
      month: M,
      day: 15,
      title: 'How long does it normally take?',
      insight:
        'A healthy couple having regular sex without contraception has around a 20-25 percent chance of pregnancy per cycle. That sounds low, but it adds up: about 84 in 100 couples are pregnant within a year, and about 92 within two. That means six to eight months without a result is entirely within the normal range, not a sign that something is wrong. Most people assume it goes faster, because all the talk about contraception has taught them that pregnancy happens at the slightest slip. It does not. Knowing the numbers in advance makes the first months easier for both of you, and it gives you a calm sentence to say when the test is negative again.',
      action:
        'Tell her the number today: "Eight out of ten couples take up to a year. We are not behind." Say it before you need it.',
      phaseTags: ['luteal'],
      sources: [NHS_TRYING],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'Age: hers and yours',
      insight:
        'Women are born with all their eggs, and both the number and the quality decline with age, slowly from the early 30s and faster after 35. By 40 the chance per cycle is roughly a third of what it was at 30, and the risk of miscarriage is higher. That is why the advice to seek help comes earlier for women over 35. Men’s fertility declines too, just more gradually: sperm quality and time to pregnancy are affected from around 40. Neither is a verdict, and many people get pregnant later. But it is worth talking honestly about timing, and not leaving the worry about the clock to her alone, as if only her body had one.',
      action:
        'If children are on the table: ask whether she thinks about timing and age, and tell her what you think yourself, instead of waiting for her to raise it.',
      phaseTags: [],
      sources: [NHS_INFERTILITY],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'Folic acid, before you start',
      insight:
        'Folic acid is the one supplement that really matters. It markedly reduces the risk of spina bifida and other neural tube defects, and the neural tube closes as early as week 3-4, often before she knows she is pregnant. That is why the recommendation is 400 micrograms daily from the moment you stop contraception until the end of week 12. Women with diabetes, epilepsy, severe obesity or a previous child with a neural tube defect are advised a higher dose through their doctor. It is a cheap tablet available in any supermarket, and yet most people start too late. It is one of the few things in pregnancy where the timing comes before the start, and where you can be the one who remembers.',
      action:
        'If you are trying or about to start: buy folic acid today and put it next to whatever she uses every morning, so it is hard to forget.',
      phaseTags: ['follicular'],
      sources: [NHS_TRYING],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'Your sperm: alcohol and weight',
      insight:
        'Half of the pregnancy comes from you, and your sperm is affected by how you live. Sperm take about three months to form, so what you change today shows up in your sperm by winter. Heavy drinking lowers count, motility and quality; the odd glass hardly makes a difference, but regular heavy nights do. Significant excess weight lowers testosterone and sperm quality, and so do certain medicines, anabolic steroids and some antidepressants. This is not about living perfectly. It is about the fact that when she takes folic acid, gives up wine and gets herself examined, there is something equivalent you can do, instead of fertility becoming her project alone.',
      action:
        'Decide today on one concrete thing for the next three months: for example a two-drink limit, or alcohol-free weekdays. Tell her it is your part.',
      phaseTags: [],
      sources: [NHS_TRYING],
    },
    {
      id: dailyId(M, 19),
      month: M,
      day: 19,
      title: 'Your sperm: heat and smoking',
      insight:
        'The testicles hang outside the body because sperm form best a couple of degrees below body temperature. Frequent long hot baths, saunas, a laptop directly on your lap for hours and very tight underwear in the heat can lower sperm quality temporarily. The evidence is mixed, but the advice is easy to follow, and the effect passes within a few months. Smoking is unambiguous: it lowers count and motility, damages sperm DNA and lengthens the time to pregnancy, and that also goes for her passive smoke. Cannabis lowers sperm quality too. It is rarely one thing alone that decides it, but it is often the sum. And it is one of the few things in this whole month that only you can do.',
      action:
        'If you smoke: take today’s first concrete step, such as booking a stop-smoking appointment or setting a quit date. If you do not: keep the laptop off your lap from today.',
      phaseTags: [],
      sources: [NHS_TRYING],
    },
    {
      id: dailyId(M, 20),
      month: M,
      day: 20,
      title: 'When sex becomes a schedule',
      insight:
        'After a few months of "trying", something happens to desire in many couples. Sex in the fertile window becomes a duty, sex outside it becomes pointless, and the ovulation test decides when you have to. She can feel like a machine that has to deliver; you can feel performance pressure, and an erection on command is not a given. Both are normal and rarely said out loud. It helps to have sex outside the window too, just for your own sake, not to announce "it’s today", and to talk about what feels good, not only what is effective. It is not that you should forget timing. It is that you still need to like each other a year from now.',
      action:
        'Suggest intimacy today, wherever she is in her cycle, without mentioning ovulation, tests or timing with a single word.',
      phaseTags: ['ovulation'],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: 'The two-week wait',
      insight:
        'The time from ovulation to the expected period is the longest in the month for couples who are trying. What makes it so hard is that the body gives nothing away: progesterone brings tender breasts, tiredness, bloating and mood swings whether the egg was fertilised or not. Early pregnancy signs and PMS are the same signs. So every bodily sensation gets read as a signal, and the app’s "PMS window" can suddenly feel like a verdict. It is easy for you to be the one who says "let’s just wait and see", but that only works if you yourself stop asking "do you feel anything?". Your calm only helps if it is not a dismissal of her worry.',
      action:
        'Do not ask about symptoms today. Ask instead whether the waiting is weighing on her, and whether she would rather talk about it or have a break from it.',
      phaseTags: ['luteal'],
      sources: [NHS_TRYING],
    },
    {
      id: dailyId(M, 22),
      month: M,
      day: 22,
      title: 'Early signs of pregnancy',
      insight:
        'The most reliable early sign is a missed period. Before that there can be tender, larger breasts, tiredness, nausea, needing to pee more often, a metallic taste in the mouth, going off certain foods and light spotting around the time the egg implants. Every one of them can also be PMS, a virus or poor sleep, and most pregnant women notice nothing until after the missed period. A pregnancy test measures the hormone hCG in urine and is reliable from the day the period was due; testing earlier gives more false negatives because the hormone is still low. First morning urine is most concentrated. Your job is not to play detective, but to know when testing makes sense, and to be there for the result.',
      action:
        'Make sure there is a pregnancy test in the house if you are trying, so it does not have to be fetched in a panic. Put it somewhere she knows about.',
      phaseTags: ['luteal'],
      sources: [NHS_TRYING],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'The negative test',
      insight:
        'Every negative test, or every period that arrives, is a small loss, and they get heavier over time. For her it often coincides with the low hormones and pain of menstruation, so the grief and the body hit at the same time. Many men respond by comforting with numbers: "it takes time", "next month". That is true, but it is not what she needs in the hour after. She needs you to be sad too, or at least to show that it is a shared loss and not her failure. Afterwards there is room for the numbers. And notice your own side: men often have nobody to talk to about this, and it wears quietly.',
      action:
        'When the test is negative or the period arrives: say "this is rubbish for me too", and do something nice together the same day, without talking about the next attempt.',
      phaseTags: ['menstrual'],
    },
    {
      id: dailyId(M, 24),
      month: M,
      day: 24,
      title: 'When the period is late, and you are not trying',
      insight:
        'A late period is not always a pregnancy, but it can be, and for couples who do not want children the days of waiting are their own kind of unease. Stress, illness, travel and weight changes delay ovulation and therefore the period; no contraception is completely reliable either. Test from the day the period was due; if it is negative and the period is still missing a week later, test again. If she is pregnant and does not want to be, it is her decision, and the legal time limit for abortion varies by country. What she needs in the waiting is not for you to panic, and not for you to brush it off, but for you to be in it with her.',
      action:
        'If the period is late: calmly ask whether she wants you to fetch a test, and say that you will work it out together whatever the result.',
      phaseTags: ['menstrual', 'luteal'],
      sources: [NHS_TRYING],
    },
    {
      id: dailyId(M, 25),
      month: M,
      day: 25,
      title: 'Miscarriage is common, and it is not her fault',
      insight:
        'Depending on how you count, between one in eight and one in four known pregnancies ends in miscarriage, the vast majority before week 12. If you include pregnancies lost before a test would have shown anything, the figure is higher still. The most common cause is a chromosomal error in the embryo that was there from fertilisation. It is not because she lifted something heavy, drank a cup of coffee, had sex, was stressed or "was not careful". That is worth saying out loud, because most women look for a fault in themselves. Physically it resembles a heavy period with cramps, often for one to two weeks. Emotionally it is the loss of a child they had already begun to imagine.',
      action:
        'If you have lost a pregnancy, or do one day: say clearly "it was not anything you did". If not: read what this card says, so you can say it if the day comes.',
      phaseTags: [],
      sources: [NHS_MISCARRIAGE],
    },
    {
      id: dailyId(M, 26),
      month: M,
      day: 26,
      title: 'How to support her after a miscarriage',
      insight:
        'What helps is simple, and what hurts is well meant. Do not say "it was probably for the best", "you can just try again" or "it was early anyway". Say "I am so sorry", and let her decide how much gets talked about. Some want it dealt with and behind them, others want it acknowledged again and again. Take the practical side: food, cancellations, messages to the people you had told. She bleeds and has cramps for up to two weeks; heat and painkillers help. Heavy bleeding, fever or foul-smelling discharge deserve a doctor. Periods typically return within 4-6 weeks, and many can try again when they are ready, physically and emotionally. Your grief counts too, and you rarely get asked.',
      action:
        'Write down the three sentences you should not say and the one you should. If someone around you has lost a pregnancy: send them a message today that needs no reply.',
      phaseTags: [],
      sources: [NHS_MISCARRIAGE],
    },
    {
      id: dailyId(M, 27),
      month: M,
      day: 27,
      title: 'When do you seek help?',
      insight:
        'The advice is simple: see a doctor after 12 months of regular trying without pregnancy, and after 6 if she is over 35. Go earlier if there are known reasons: very irregular or absent periods, known endometriosis or PCOS, previous pelvic infection, several miscarriages, cancer treatment or problems with your testicles. Around one in seven couples has difficulty conceiving, and in roughly half of cases part of the explanation lies with the man. Waiting times for investigation can be long, so it pays to get started when the time comes. It is not giving up. It is taking it seriously together, instead of leaving her to carry the uncertainty alone.',
      action:
        'Count how long you have been trying. If you are at the threshold: offer to book the doctor’s appointment yourself, and book it for both of you.',
      phaseTags: [],
      sources: [NHS_INFERTILITY],
    },
    {
      id: dailyId(M, 28),
      month: M,
      day: 28,
      title: 'The investigation starts with you too',
      insight:
        'A fertility investigation always starts with both partners. For you it is a semen analysis: count, motility and shape, given after 2-7 days of abstinence, often twice a few weeks apart because the numbers vary. For her it is blood tests for hormones, ovulation and egg reserve, an ultrasound of the ovaries and uterus, and possibly a check that the fallopian tubes are open. Her part is more extensive, more uncomfortable and takes longer. The least you can do is get your sample done first and without complaint, so her investigation is not waiting on yours. Many men put off the semen analysis because it feels like a verdict on them. It is information, not a grade.',
      action:
        'If you are being investigated: book your semen analysis today if it has not been done. If not: come along to her next appointment.',
      phaseTags: ['follicular'],
      sources: [NHS_INFERTILITY],
    },
    {
      id: dailyId(M, 29),
      month: M,
      day: 29,
      title: 'When you disagree, or do not know',
      insight:
        'Not all couples want the same thing, and not everyone knows what they want. One wants children now, one wants to wait; one is done, one is not; or you are both unsure and avoid the subject. The one who carries the contraception often carries the doubt quietly too, cycle after cycle. Ambivalence is normal and deserves to be said out loud without turning into a negotiation. What works is talking about it without pressure and outside the PMS window, giving the honest answer rather than the diplomatic one, and making it something you return to, not something that has to be settled today. Whatever the answer, everything else this month still applies: contraception, side effects and responsibility remain shared.',
      action:
        'Say one honest sentence about where you stand on children and timing right now, even if it is "I don’t know". Then ask where she stands.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 30),
      month: M,
      day: 30,
      title: 'Month 10: what you have learned',
      insight:
        'You now know how the main methods work and what they cost her: the pill and mini-pill in daily discipline and possible mood side effects, IUDs in fitting and bleeding, the implant and injection in irregularity. You know that condoms and vasectomy are the two methods you can carry yourself, that fertility awareness is demanding, and that the app is never contraception. You know that most couples take up to a year, that folic acid starts beforehand, that your sperm is affected by alcohol, heat and smoking, that PMS and early pregnancy look alike, that miscarriage is common and not her fault, and when to seek help. Most importantly: the responsibility does not follow the method. It follows the two of you.',
      action:
        'Pick one thing from this month to take over from today: remembering, buying, booking or carrying the method. Tell her, then take the quiz.',
      phaseTags: [],
    },
  ],
  weekly: [
    {
      id: weeklyId(M, 1),
      month: M,
      week: 1,
      title: 'Contraception: the methods and what they cost',
      body: [
        'Contraception is the area where the difference between your two bodies becomes most concrete. There are more than ten methods, and all but two work on her body. She carries the side effects, the daily discipline and the physical risk if the method fails. That is nobody’s fault, but it is worth seeing clearly before talking about who does what. Here are the main methods, how they work, and what they typically cost in cycle and mood.',
        'The hormonal methods work by stopping ovulation, thickening the cervical mucus, or both. The combined pill pairs estrogen and progestogen and is over 99 percent effective taken every day, around 91 percent in practice. It often gives lighter bleeding and less PMS, but can cause headaches, nausea, lower desire and in some a flatter mood, and it carries a small risk of blood clots, higher with smoking and migraine with aura. The mini-pill has progestogen only and can be used where estrogen is not tolerated, but it often causes irregular or absent bleeding. The implant, a small rod in the upper arm, is the most effective method of all and lasts three years; its main drawback is unpredictable spotting. The injection every 12-13 weeks cannot be removed, and fertility can take up to a year to return.',
        'The IUDs are placed in the uterus by a doctor and last 3-10 years. The hormonal IUD releases progestogen locally, often gives much lighter bleeding or none, and is also used to treat heavy periods; mood side effects are rarer than with pills, but the fitting can hurt, and the first months often bring spotting and cramps. The copper IUD is entirely hormone-free: she keeps her own cycle, but the bleeding often becomes heavier and more painful. Both are over 99 percent effective, and both can be removed, after which fertility returns immediately.',
        'What the hormonal methods have in common is that the app becomes less useful, because there is no real cycle to predict. The bleed in the pill-free week is a hormone-triggered bleed, not a period, and the implant, mini-pill and injection can cause bleeding without any pattern. That is good to know, so you do not read "early" or "late" into something that is simply the method.',
        'The two methods you can carry are the condom and vasectomy. The condom is 98 percent effective used correctly every time, around 85 in practice, and the only method that protects against sexually transmitted infections. Most failures come from the wrong size and late application, not from breaking. A vasectomy is a fifteen-minute procedure under local anaesthetic, over 99 percent effective, with no effect on desire or erections, and far less invasive than female sterilisation. It is permanent and requires other contraception for 8-12 weeks until the tests are clear. Fertility awareness, where you find the fertile window with temperature and mucus, can be very effective if followed precisely every day, but in practice around one in four gets pregnant within a year. And to say it plainly: this app is not contraception. It estimates from averages and is built for understanding, not for planning safe days.',
        'What can you do? First: know what you use, and ask how she feels about it. Many have used the same method for years without anyone asking, and many do not know themselves without hormones. Next: take what you can take. Remember the pill with her, put the IUD appointment or injection date in your own calendar, come along to the fitting, buy the condoms and make sure they fit, and say out loud that a vasectomy is an option once you are done having children. And if she is considering switching or stopping, make the decision easy: her body, her choice, your willingness to carry more.',
        'The most important sentence this week is short: the responsibility does not follow the method. The method may sit in her body, but remembering, fetching, paying, coming along and worrying can be shared. It is not a big thing to do. It is just rarely done.',
      ],
      conversationQuestion:
        'If you could choose completely freely, would you use the contraception we use now? And what would you wish I took more of?',
      sources: [NHS_CONTRACEPTION, NHS_VASECTOMY],
    },
    {
      id: weeklyId(M, 2),
      month: M,
      week: 2,
      title: 'When it goes wrong: emergency contraception and the switch conversation',
      body: [
        'Even with good contraception, accidents happen. The condom breaks, the pill is missed two days in a row, the injection appointment is overrun. What decides whether an accident becomes a pregnancy is how fast you act, and who does it. And behind many accidents lies a method that never really fitted, and that nobody got around to discussing.',
        'There are three forms of emergency contraception. The levonorgestrel morning-after pill works best within three days, the ulipristal pill within five, and both delay ovulation so the sperm die before the egg arrives. That also means they work poorly if ovulation has already taken place; the closer to ovulation, the less effect. The copper IUD can be fitted up to five days after and is over 99 percent effective regardless of cycle day, and she can keep it as regular contraception afterwards. The pills are available at the pharmacy without a prescription. They are safe to use, but can cause nausea, and the next period may come earlier or later; if it is more than a week late, she should take a pregnancy test.',
        'The practical side here is your job as much as hers. Do you know where the nearest pharmacy with long opening hours is? Do you know that the earlier the pill is taken, the better? Can you be the one who says "I will get it now", rather than the one who says "it will probably be fine"? The accident is shared. So the trip to the pharmacy can just as well be yours.',
        'If accidents happen often, it is time for the bigger conversation: does the method fit? Many women stay on a contraception they are not happy with because switching feels overwhelming, because they dread an IUD, or because they do not know what the alternative is. Some have been on the pill since their teens and have never felt their own adult cycle. Some suspect the pill affects their mood or desire but cannot separate it from everything else. And many never switch because the other partner has never asked.',
        'The conversation about switching should happen without pressure. Not right after an accident, not in the PMS days, not as a solution to a problem you have. The follicular phase, where there is energy to hear each other, is a good time. The question is simple: "If you could choose freely, would you use what we use now?" And the answer needs room, even if it is "I don’t know" or "I want to try stopping completely and see how I feel". Your role is to know the alternatives, to say out loud that you are willing to carry condoms or a vasectomy, and to keep your own convenience out of the argument. A condom being slightly less pleasant for you does not weigh much against years of side effects for her.',
        'If she chooses to stop hormones, be prepared for a few months of transition. The first real cycle can take a while to arrive, bleeding can get heavier, and PMS, skin and desire can change. That is the body finding its own rhythm again, and only then does the app become properly useful. It is also where you find out how much of what you learned in the previous months actually applies to her. And until you have another method in place, the condom is not a suggestion, it is your contraception.',
        'What needs saying once more is that the app is never part of that solution. It shows an estimated fertile window, and that is for understanding, not for planning safe days. The day you use the app as contraception is the day you need the card about emergency contraception.',
      ],
      conversationQuestion:
        'If something went wrong today, do we both know what we would do and who would do it? And is there anything about our method we have been avoiding talking about?',
      sources: [NHS_EMERGENCY, NHS_CONTRACEPTION],
    },
    {
      id: weeklyId(M, 3),
      month: M,
      week: 3,
      title: 'Trying: timing, patience and your half',
      body: [
        'When you decide to try for a child, the cycle suddenly becomes something else: no longer something to understand, but something to hit. That is a good and a dangerous change at the same time. Here is what actually raises the chances, what does not, and what your half of the work is.',
        'The biology is the same as you learned in month 1. The egg lives a day, sperm up to five days, so the fertile window is the five days before ovulation and the day itself. The chance is highest in the two to three days just before, because the sperm need to be waiting when the egg arrives. Sex every second or third day throughout the cycle hits the window by itself, without anyone calculating. If you want more precision, ovulation tests that measure LH in urine, and her own discharge, clear and stretchy like egg white, are better than the app’s estimate, which is built on averages. After ovulation there is nothing more to do that month, and it is fine to relax.',
        'The numbers are worth knowing before you need them. A healthy couple has around a 20-25 percent chance per cycle. About 84 in 100 couples are pregnant within a year, and about 92 within two. That means half a year without a result is completely normal. With age the chance falls: slowly from the early 30s, faster after 35, and men’s fertility also declines gradually from around 40. That is why the advice is to see a doctor after 12 months of trying, or after 6 if she is over 35, and earlier with known problems such as very irregular periods, endometriosis, PCOS or several miscarriages. About one in seven couples needs help, and in roughly half of cases part of the explanation lies with the man.',
        'There is one thing she should do before you start: take 400 micrograms of folic acid daily. The neural tube closes in week 3-4, often before she knows she is pregnant, and folic acid markedly lowers the risk of spina bifida. So it should begin when contraception stops and continue to week 12. It is a cheap tablet, and you can be the one who buys it and puts it out. She should avoid alcohol entirely whenever she could be pregnant, and smoking is harmful throughout.',
        'Now your half. Sperm take about three months to form, so what you change now shows up in your sperm by winter. Heavy drinking lowers count and motility; the odd glass hardly matters, but regular heavy nights do. Smoking damages sperm DNA and lengthens the time to pregnancy, and that includes her passive smoke. Significant excess weight, anabolic steroids and certain medicines lower quality. The testicles need to stay a couple of degrees below body temperature, so long hot baths, saunas and a laptop on your lap for hours can cause a temporary dip. None of this requires a perfect life. It requires that there is something you do, while she does all the rest, so that fertility does not become her project.',
        'Then the thing that is hard to measure: how you are with each other. After a few months sex easily becomes a schedule where the test decides when, and desire disappears for both. She can feel like a machine that has to deliver; you can feel performance pressure. It helps to have sex outside the window too, just for your own sake, not to announce "it’s today", and to initiate at least half the time. And the two weeks from ovulation to the expected period are the longest in the month, because PMS and early pregnancy signs are the same signs. Do not ask "do you feel anything?". Ask whether the waiting is weighing on her, and whether she wants to talk about it or have a break from it.',
        'Finally, the negative test. Every time the period comes, it is a small loss, and they get heavier. Many men comfort with numbers: "it takes time". That is true, but in the hour after, it is not what she needs. She needs it to be a shared loss and not her failure. Say "this is rubbish for me too", do something nice together, and save the numbers for tomorrow. And keep an eye on yourself: men rarely have anyone to talk to about this, and it wears quietly.',
      ],
      conversationQuestion:
        'What do the waiting and the negative tests do to you, and what do they do to me? How do we make sure it stays the two of us, and not a project?',
      sources: [NHS_TRYING, NHS_INFERTILITY],
    },
    {
      id: weeklyId(M, 4),
      month: M,
      week: 4,
      title: 'Early pregnancy, loss and when to seek help',
      body: [
        'The last week is about what nobody talks about until they are in it: the first weeks of a pregnancy, the loss that is far more common than most people think, and the point at which you should seek help. It is heavy material. But it is also where your support makes the biggest difference, precisely because so few know what to say.',
        'The first signs of pregnancy are a missed period, tender and larger breasts, tiredness, nausea, needing to pee more often, a metallic taste and, for some, light spotting when the egg implants. Every single sign can also be PMS, and most notice nothing until after the missed period. A test measures the hormone hCG in urine and is reliable from the day the period was due; earlier tests give more false negatives. If the test is positive, the next step is the doctor, who confirms the pregnancy and starts the care pathway. The nausea, tiredness and swinging emotions of the first 12 weeks are hormonal and can be severe. This is not the time to ask whether she is exaggerating. It is the time to take more of the practical load than ever, and to keep coffee, alcohol, raw fish and the other things she needs to avoid off her plate without making a fuss about it.',
        'Then the hard part. Depending on how you count, between one in eight and one in four known pregnancies ends in miscarriage, the vast majority before week 12, and the figure rises with age. Including pregnancies lost before a test would have shown anything, it is higher still. The most common cause is a chromosomal error in the embryo that was there from fertilisation. It is not because she lifted something, drank a coffee, had sex, was stressed, exercised or "was not careful". That is worth saying out loud, and more than once, because almost every woman looks for a fault in herself.',
        'Physically an early miscarriage resembles a heavy period with cramps, often for one to two weeks. Heat and painkillers help. Heavy bleeding that soaks a pad an hour, fever, foul-smelling discharge or severe pain on one side deserve a doctor, and the last can be a sign of an ectopic pregnancy, which is an emergency. Periods typically return within 4-6 weeks. Many can try again when they are ready, and most go on to have a normal pregnancy; investigation is usually offered only after three losses in a row.',
        'Emotionally it is the loss of a child they had already begun to imagine, and it is just as real at week 6 as at week 16. What hurts is well meant: "it was probably for the best", "you can just try again", "it was early anyway", "at least you know you can get pregnant". What helps is simple: "I am so sorry", and then letting her decide how much gets talked about, and how often. Take the practical side: food, cancellations, messages to the people you had told. Be aware that the grief can return around the date the baby would have been born, and when others around you get pregnant. And do not forget your own: men are rarely asked how they are, and many carry it alone because they think it is her loss. It is yours together.',
        'When do you seek help? After 12 months of regular trying, after 6 if she is over 35, and earlier with known reasons: irregular or absent periods, endometriosis, PCOS, previous pelvic infection, several miscarriages, cancer treatment or problems with your testicles. The investigation always starts with both of you. Your part is a semen analysis, often two, a few weeks apart. Her part is blood tests, ultrasound and possibly a check of the fallopian tubes, more extensive and more uncomfortable. The least you can do is get your sample done first and without complaint, so her investigation is not waiting on yours. The semen analysis is information, not a grade. And seeking help is not giving up. It is taking it seriously together.',
        'The month ends where it began: the responsibility does not follow the method, and it does not follow the uterus either. Whether you are preventing pregnancy, trying, waiting, losing or seeking help, there is a half that is yours. It is rarely the half that hurts most. But it can make her half easier to carry.',
      ],
      conversationQuestion:
        'If we ever lose a pregnancy, what do you think you would need from me, and what would you rather not hear? And what might I need?',
      sources: [NHS_MISCARRIAGE, NHS_INFERTILITY, NHS_TRYING],
    },
  ],
  wrap: {
    id: wrapId(M),
    month: M,
    title: 'Month 10: Fertility, contraception and pregnancy',
    summary: [
      'This month was about what your two bodies share most unequally. You have learned how the main methods work and what they cost her: the pill and mini-pill in daily discipline and possible mood side effects, IUDs in fitting and bleeding, the implant and injection in irregularity. You have learned that condoms and vasectomy are the two methods you can carry, that fertility awareness is demanding, that emergency contraception must be fetched fast, and that the app is never contraception.',
      'You have also learned what happens when you want to go the other way: that the fertile window lies before ovulation, that most couples take up to a year, that folic acid starts beforehand, that your sperm is affected by alcohol, heat and smoking, that PMS and early pregnancy look alike, that miscarriage is common and never her fault, what to say and not to say, and when to seek help. And that the investigation starts with both of you.',
      'Next month is about when something is off: endometriosis, PCOS and irregular cycles, which signs deserve a doctor, and how you back her up.',
    ],
    keepDoing: [
      'Ask regularly how she feels about your contraception, and say out loud what you are willing to carry.',
      'Keep condoms in the right size in the house, and buy them yourself.',
      'Put her IUD appointment, injection date or pill refill in your own calendar.',
      'After an accident: fetch the morning-after pill the same day, the sooner the better.',
      'If you are trying: folic acid for her, less alcohol and smoke for you, and sex outside the window too.',
      'Say "it was not anything you did" and "this is rubbish for me too" when it is true.',
    ],
    quiz: [
      {
        question:
          'The condom broke last night and she has no other contraception. What is the most helpful response today?',
        options: [
          'Wait and see whether the period arrives on time',
          'Check the app to see whether it was a safe day',
          'Fetch the morning-after pill from the pharmacy today, the sooner the better',
          'Suggest she calls the doctor next week',
        ],
        correctIndex: 2,
        explanation:
          'Emergency contraception works best the earlier it is taken, and the app’s window is an estimate, never contraception. The trip to the pharmacy is as much yours.',
      },
      {
        question:
          'She has been on the pill for ten years and says she does not really know who she is without it. What helps most?',
        options: [
          'Say the pill works fine, so why change anything',
          'Say it is her choice, and that you will happily carry condoms or more if she wants to try stopping',
          'Suggest she just takes a month off and sees',
          'Find an article about side effects and send it to her',
        ],
        correctIndex: 1,
        explanation:
          'It is her body and her decision. What makes it easier is that you know the alternatives and say out loud that you will carry more.',
      },
      {
        question: 'You have been trying for a baby for five months without success. What is true?',
        options: [
          'That is unusual, and you should see a doctor now',
          'That is completely normal; about 84 in 100 couples take up to a year',
          'It suggests the problem lies with her',
          'You should have sex every day all month to raise the chance',
        ],
        correctIndex: 1,
        explanation:
          'The chance is 20-25 percent per cycle, and most couples take months. The advice is a doctor after 12 months, or 6 if she is over 35.',
      },
      {
        question:
          'You want to start trying in a couple of months. What is the most important thing you can set in motion already now?',
        options: [
          'Buy ovulation tests for her',
          'Folic acid for her from now, and cutting down on alcohol and smoking yourself',
          'Start logging her temperature every morning',
          'Nothing; it only makes sense once you are trying',
        ],
        correctIndex: 1,
        explanation:
          'Folic acid must start before the pregnancy, and sperm take three months to form. Both need to begin before you start.',
      },
      {
        question:
          'It is three days after the expected period, the test was negative, and the period has just arrived. What helps most?',
        options: [
          '"It takes time, next month will probably work."',
          '"This is rubbish for me too." And then something nice together today, without talk of the next attempt',
          'Leave her alone so she can grieve',
          'Suggest booking a doctor’s appointment',
        ],
        correctIndex: 1,
        explanation:
          'In the hour after, she needs it to be a shared loss, not her failure. The numbers are true, but they belong to tomorrow.',
      },
      {
        question: 'She has lost a pregnancy at week 8. Which sentence should you avoid?',
        options: [
          '"I am so sorry."',
          '"It was not anything you did."',
          '"It was probably for the best, and you can always try again."',
          '"Do you want to talk about it, or should I just be here?"',
        ],
        correctIndex: 2,
        explanation:
          'Well-meant comfort makes the loss smaller than it is. Acknowledge it, say it was not her fault, and let her decide how much gets talked about.',
      },
    ],
  },
};
