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
const SUNDHED_CONTRACEPTION: Source = {
  label: 'Sundhed.dk: Contraception',
};
const SUNDHED_PREGNANCY: Source = {
  label: 'Sundhed.dk: Pregnancy',
};

const M = 10;

export const month10: MonthContent = {
  month: M,
  theme: 'Fertility, contraception and pregnancy',
  focus:
    'See what she carries in responsibility and side effects, and take what you can take. Yes, the boring parts too.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'Who carries the contraception? Spoiler: not you',
      insight:
        'Right, listen, and be honest: if someone asked which contraception you two use, could you answer without looking at her? In most couples she is the one who carries it. She remembers the pill, she gets the IUD fitted, she lives with the side effects, and she is the one who gets pregnant if it fails. That is nobody’s fault; most methods are simply built for her body. But the responsibility does not have to follow the method. You can remember, ask, pay, come along to the doctor, and you can take one of the two methods that exist for men. This month is about how the methods work, what they cost her in cycle and mood, and what happens when you want to go the other way and try for a child. The first step is modest: find out what you actually use. You know which coffee machine you own. This is the same level of knowledge.',
      action:
        'Ask her today: "What do we actually use, and how do you feel about it?" Listen to the answer. Suggest nothing yet, however good your idea feels.',
      phaseTags: [],
      sources: [NHS_CONTRACEPTION, SUNDHED_CONTRACEPTION],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: 'The pill: how it works, no guessing',
      insight:
        'You probably have a feeling that the pill "does something with hormones". That is correct, and it is also roughly all most men know. Here is the rest. The pill contains synthetic estrogen and progestogen, which keep hormones so steady that the brain never sends the LH surge that triggers ovulation. No ovulation, no pregnancy. It also thickens the mucus at the cervix and thins the womb lining. The "period" she gets in the pill-free week is a bleed triggered by the drop in hormones, not a true cycle, which is why the break can be skipped. Taken every day, the pill is over 99 percent effective. In real life, with missed pills, vomiting and travel, the figure is around 91 percent, so roughly 9 in 100 women get pregnant within a year. The daily remembering is hers, unless you share it. You remember when the match kicks off. Setting an alarm for a pill is not beyond you.',
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
        'Some things about contraception do not appear in large print on the packet. The pill gives many women lighter, more predictable bleeding and less PMS. But it can also cause headaches, tender breasts, nausea, spotting, lower desire and, for some, a flatter or lower mood. The research is not clear-cut, but a number of women find their mood improves when they stop, and only then discover what the pill had cost. Because she has taken it for years, it is hard to know what is her and what is the pill. The short-term risk of blood clots is small but real, and higher with smoking and migraine with aura. She carries all of this, often without it being talked about. And if you are thinking "she would have said something", remember how often you have said "it’s fine" about a toothache.',
      action:
        'Ask: "Is there anything about your contraception you think affects your mood or your desire?" Take the answer seriously, even if it is "I don’t know". That is a real answer.',
      phaseTags: ['luteal'],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'The mini-pill: progestogen only, and no calendar',
      insight:
        'The mini-pill contains only progestogen, no estrogen. Most newer types stop ovulation; older types work mainly by thickening the mucus at the cervix. It suits women who cannot take estrogen, for example with migraine with aura, high blood pressure or while breastfeeding. The price is often irregular bleeding: some get no periods at all, others spot for weeks, and the pattern can change from month to month. That makes the app’s predictions unreliable, because there is no real cycle to predict. The app guesses, and you should not guess along. The mini-pill is taken every day without a break, and some types must be taken within a three-hour window. That is narrower than the time you allow yourself to find your keys, and you do always find them in the end. Effectiveness is similar to the ordinary pill: over 99 percent with perfect use, around 91 in practice.',
      action:
        'If she uses the mini-pill or another progestogen method: expect bleeding without a pattern, and drop all talk of a "late" or "early" period. The app does not know, and neither do you.',
      phaseTags: [],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'The hormonal IUD',
      insight:
        'The hormonal IUD is a small T-shaped piece of plastic that the doctor places in the womb. It releases progestogen locally, thins the lining and thickens the mucus, and in some women it stops ovulation. It lasts 3-8 years depending on the type, is over 99 percent effective, and she does not have to remember anything. Many get much lighter bleeding or none at all, and it is also used to treat heavy periods. The fitting can hurt, for some a great deal, and the first 3-6 months often bring spotting and cramps. Hormone side effects such as mood swings and acne are rarer than with pills because the dose is lower, but they exist. She can feel the threads, and sometimes you can too. If that happens, the right reaction is not to announce it or turn it into an event. It is an IUD, not a sign from above.',
      action:
        'If she has or is considering an IUD: ask how the fitting was, or what worries her about it, and offer to come along and drive her home afterwards.',
      phaseTags: ['menstrual'],
      sources: [NHS_CONTRACEPTION, SUNDHED_CONTRACEPTION],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: 'The copper IUD: no hormones, full cycle',
      insight:
        'The copper IUD contains no hormones. The copper makes the environment in the womb hostile to sperm, so they cannot fertilise the egg. She keeps her own natural cycle, ovulation and everything that comes with it, so the app fits better than with hormonal methods, and everything you learned in the first months actually applies. It lasts 5-10 years and is over 99 percent effective. The price is the bleeding: it often becomes heavier, longer and more painful, especially in the first six months. For a woman who already has heavy periods, that can be too much. In return it has no mood side effects, and it can be removed whenever you like, after which fertility returns immediately. It is also the most effective emergency contraception there is. It is small, but it has a CV you would envy.',
      action:
        'If she has a copper IUD: have extra heat, painkillers and the pads or tampons she uses ready for the first days of her period. Ready means in the house, not on a shopping list.',
      phaseTags: ['menstrual'],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'The implant',
      insight:
        'The implant is a small, soft rod placed under the skin of the inner upper arm, releasing progestogen for three years. It stops ovulation and is over 99 percent effective, the most reliable method of all, because there is nothing to forget. That is more than can be said for most of us, and certainly for you and the shopping list. It is fitted and removed under local anaesthetic in a few minutes. The big drawback is the bleeding pattern: about one in five gets no periods, many get irregular or prolonged spotting, and it is the most common reason for having it taken out. Headaches, acne, tender breasts and mood changes can occur. Fertility returns quickly once it is removed. As with the mini-pill, the app becomes uncertain because the cycle is on pause. The app does not know. Now you do.',
      action:
        'Notice whether her contraception causes bleeding outside any pattern, and ask whether it bothers her. "It’s probably fine" is an assumption, not an answer.',
      phaseTags: [],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: 'The injection',
      insight:
        'The injection is a progestogen shot every 12-13 weeks that stops ovulation. Given on time it is over 99 percent effective; in practice, with late appointments, around 94. Many get no periods after a year, which some love. But it stands out in two ways. It cannot be taken out again: side effects such as weight gain, mood changes and headaches have to be ridden out until it wears off. And fertility can take up to a year to return after the last injection, which matters if you are thinking about children within the next few years. Long-term use can also cause a small loss of bone density, which normally recovers. A date every twelfth week is exactly the kind of thing that gets forgotten when only one person remembers it. You have a calendar with birthdays in it. There is room for an injection.',
      action:
        'If she has the injection: put the date of the next one in your own calendar with a reminder, so that it is not only her keeping track.',
      phaseTags: ['menstrual'],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'The condom: the method you can carry',
      insight:
        'The condom is one of the two methods that put the responsibility on your body. Used correctly every time it is 98 percent effective; in practice, with late application, the wrong size and "just this once", the figure is around 85. It is the only method that also protects against sexually transmitted infections. The most common mistake is not that it breaks, but that it is not used from the start, or that it slips off because it does not fit. Size matters more than most people think, and there are many. It is not a competition, it is a fit, like shoes. Combined with both of you knowing her fertile window, the condom is a real alternative for couples where she cannot tolerate hormones. It requires you to be the one who has them, and the one who gets them out. Not the one rummaging in the cupboard.',
      action:
        'Check whether there are condoms in the house, whether they have expired, and whether the size actually fits. Buy them yourself. It is your job to have them, not hers to remind you.',
      phaseTags: ['ovulation'],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 10),
      month: M,
      day: 10,
      title: 'Male sterilisation: fifteen minutes',
      insight:
        'A vasectomy is a 15-20 minute procedure under local anaesthetic in which the tubes that carry sperm are cut, so sperm no longer reach the ejaculate. It changes nothing about desire, erections, testosterone or the amount of fluid; sperm make up a very small part. Everything you just got nervous about stays exactly as it is. It is over 99 percent effective, more reliable and far less invasive than female sterilisation, which requires keyhole surgery under general anaesthetic. It takes 8-12 weeks before tests show the sperm are gone, so you need other contraception until then. It should be regarded as permanent; a reversal does not always work. For couples who are done having children, it is the most concrete way you can take over the whole burden. A quarter of an hour at the doctor against decades of her side effects. You have waited longer for a parcel marked "out for delivery".',
      action:
        'If you are certain you do not want more children: mention today that you have read about vasectomy, and that you are open to being the one who gets it done.',
      phaseTags: [],
      sources: [NHS_VASECTOMY],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'Fertility awareness: the honest numbers',
      insight:
        'Fertility awareness means finding the fertile window by taking your temperature every morning, tracking cervical mucus and possibly using ovulation tests, and then avoiding sex or using a condom on those days. Done very precisely, every day, with training, it can reach 99 percent. In practice, where cycles shift with stress, illness and poor sleep, and life gets in the way, around one in four women gets pregnant within a year. It is not a bad method, it is a demanding one. And now the thing you need to hear twice: this app is not it. The app estimates from averages and is built for understanding, not for planning safe days. The day you think "the app says it’s safe", you have misunderstood both the app and the word. Never use it as contraception. That holds even if you feel really sure.',
      action:
        'Say the sentence out loud to yourself: "The app’s fertile window is an estimate, not contraception." If you use fertility awareness, talk about how closely the method is actually followed, not how closely you think it is.',
      phaseTags: ['ovulation', 'follicular'],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: 'The conversation about switching',
      insight:
        'Many women stay on a method they are not happy with, because switching feels like a big deal and because nobody has asked. Perhaps she has been on the pill since her teens and never felt her own adult cycle. Perhaps she dreads a new IUD. Perhaps she is thinking of stopping altogether to see who she is without hormones. It is a decision about her body, and it is hers. Your role is to make it easier: to know what the alternatives are, to say out loud that you are willing to carry condoms or a vasectomy, and not to turn your own convenience into an argument. "But condoms aren’t as nice" is not an argument. It is a complaint, and it weighs nothing against years of side effects. You would not accept it from someone you asked to carry your shopping bags. The follicular phase is a good time for the conversation.',
      action:
        'Open the conversation today: "If you could choose freely, would you use the same as now? I’d like to take on more of it if that helps." And mean it.',
      phaseTags: ['follicular'],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: 'Emergency contraception: what, when, where',
      insight:
        'When the condom breaks or the pill is forgotten, there are three options, and none of them is called "wait and see". The levonorgestrel morning-after pill works best within three days, and the ulipristal pill within five; both delay ovulation so the sperm die before the egg arrives. They work poorly if ovulation has already happened. The copper IUD can be fitted up to five days after and is over 99 percent effective whatever the cycle day, and she can keep it afterwards. The pills are available at the pharmacy without a prescription, the sooner the better. They can cause nausea, and the next period may come earlier or later than expected. They are safe to use, but they are not a method; they are a fallback. And the trip to the pharmacy can just as well be yours. You have legs, and they can work the car.',
      action:
        'Find out where the nearest pharmacy with late opening hours is, and tell her that if there is an accident, you will fetch the morning-after pill. The same day, not "tomorrow".',
      phaseTags: ['ovulation'],
      sources: [NHS_EMERGENCY],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'When you are trying: timing without a stopwatch',
      insight:
        'If you want a child, the fertile window is the five days before ovulation and the day itself. The chance is highest in the two to three days just before, because the sperm need to be waiting when the egg arrives, and the egg only lives a day. Sex every second or third day throughout the cycle hits the window by itself, without anyone having to calculate, and without you standing there with a spreadsheet. If you want more precision, ovulation tests that measure LH in urine, and her own discharge, are better than the app’s estimate. After ovulation there is nothing more to gain that month, and it is fine to relax. And it is worth saying out loud: it is still sex, not a task. How you talk about it decides whether it stays enjoyable. "Right, it’s time" is not a good line. It never was.',
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
        'A healthy couple having regular sex without contraception has around a 20-25 percent chance of pregnancy per cycle. That sounds low, but it adds up: about 84 in 100 couples are pregnant within a year, and about 92 within two. That means six to eight months without a result is well within normal, not a sign that something is wrong. Most people expect it to go faster, because all the contraception talk since school taught them that pregnancy happens at the slightest slip. It does not. Your biology teacher exaggerated a little, for good reasons. Knowing the numbers in advance makes the first months easier for you both, and gives you a calm sentence to say when the test is negative again. Learn it by heart now, while you do not need it. You know your PIN code, after all.',
      action:
        'Tell her the number today: "Eight in ten couples take up to a year. We’re not behind." Say it before you need it.',
      phaseTags: ['luteal'],
      sources: [NHS_TRYING],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'Age: hers and yours',
      insight:
        'Women are born with all their eggs, and both the number and the quality decline with age, slowly from the early 30s and faster after 35. By 40 the chance per cycle is about a third of what it was at 30, and the risk of miscarriage is higher. That is why the advice to seek help comes earlier for women over 35. And before you lean back: men’s fertility declines too, only more gradually. Sperm quality and time to pregnancy are affected from around 40. Neither is a verdict, and many people get pregnant later. But it is worth talking honestly about timing, and not leaving the worry about the clock to her alone, as if only her body had one. You have a clock too. It just ticks more quietly, like the one in the hallway you never get round to changing for daylight saving.',
      action:
        'If children are on the table: ask whether she thinks about timing and age, and tell her what you think yourself, instead of waiting for her to bring it up.',
      phaseTags: [],
      sources: [NHS_INFERTILITY],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'Folic acid, before you start',
      insight:
        'Folic acid is the one supplement that really matters, and probably the only supplement anyone will ever ask you to remember. It markedly lowers the risk of spina bifida and other neural tube defects, and the neural tube closes as early as weeks 3-4, often before she knows she is pregnant. That is why the recommendation is 400 micrograms daily from the moment you stop contraception, up to and including week 12. Women with diabetes, epilepsy, severe obesity or a previous child with a neural tube defect are advised a higher dose through their doctor. It is a cheap tablet, sold in any supermarket, and still most people start too late. It is one of the few things in pregnancy where the timing comes before the start, and where you can be the one who remembers. It costs less than your coffee. Put it in the basket before you reach the coffee aisle.',
      action:
        'If you are trying or about to start: buy folic acid today, and put it next to whatever she uses every morning, so it is hard to forget.',
      phaseTags: ['follicular'],
      sources: [NHS_TRYING, SUNDHED_PREGNANCY],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'Your sperm: alcohol and weight',
      insight:
        'Half of the pregnancy comes from you, and your sperm is affected by how you live. That is not an insult, it is biology. Sperm take about three months to form, so what you change today shows up in your sperm by winter. Heavy drinking lowers count, motility and quality; the odd glass hardly makes a difference, but regular heavy nights do. Significant excess weight lowers testosterone and sperm quality, and so do certain medicines, anabolic steroids and some antidepressants. This is not about living perfectly. It is about the fact that when she takes folic acid, gives up wine and gets herself examined, there is something equivalent you can do, instead of fertility becoming her project alone. "I support you" with a pint in your hand is not support. It is an audience.',
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
        'The testicles hang outside the body because sperm are made best a couple of degrees below body temperature. It is not a design flaw, it is cooling. Frequent long hot baths, saunas, a laptop directly on your lap for hours and very tight underwear in the heat can lower sperm quality temporarily. The evidence is mixed, but the advice is easy to follow, and the effect wears off within a few months. Smoking is unambiguous: it lowers count and motility, damages sperm DNA and lengthens the time to pregnancy, and that includes her passive smoke. Cannabis also lowers sperm quality. It is rarely one thing alone that decides it, but it is often the sum. And this is one of the few things in this whole month that only you can do. Nobody can move the laptop for you. There is a table right there, and you have seen it.',
      action:
        'If you smoke: take today’s first concrete step, such as booking a quit-smoking appointment or setting a stop date. If you do not: keep the laptop off your lap from today.',
      phaseTags: [],
      sources: [NHS_TRYING],
    },
    {
      id: dailyId(M, 20),
      month: M,
      day: 20,
      title: 'When sex becomes a schedule',
      insight:
        'After a few months of "trying", something happens to desire in many couples. Sex in the fertile window becomes a duty, sex outside it becomes pointless, and the ovulation test decides when you have to. She can feel like a machine that has to deliver; you can feel performance pressure, and an erection on command is not a given, whatever you have told yourself. Both are normal and rarely said out loud. It helps to have sex outside the window too, just for your own sake, not to announce "it’s today", and to talk about what feels good, not only what is effective. It is not that you should forget timing. It is that you still need to like each other a year from now. Nobody has ever looked back on a good relationship and thought: "It was the schedule that did it."',
      action:
        'Suggest intimacy today, wherever she is in her cycle, without mentioning ovulation, tests or timing with a single word. Not one.',
      phaseTags: ['ovulation'],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: 'The two-week wait',
      insight:
        'The time from ovulation to the expected period is the longest in the month for couples who are trying. What makes it so hard is that the body gives nothing away: progesterone brings tender breasts, tiredness, bloating and mood swings whether the egg was fertilised or not. Early pregnancy signs and PMS are the same signs. So every bodily sensation gets read as a signal, and the app’s "PMS window" can suddenly feel like a verdict. It is easy for you to be the one who says "let’s just wait and see", but that only works if you yourself stop asking "do you feel anything?". You will want to ask. Don’t. Your calm only helps if it is not a dismissal of her worry. Calm that sounds like "just relax" is not calm. It is a closed door.',
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
        'The most reliable early sign is a missed period. Before that there can be tender, larger breasts, tiredness, nausea, needing to pee more often, a metallic taste in the mouth, going off certain foods and light spotting around the time the egg implants. Every one of them can also be PMS, a virus or poor sleep, and most pregnant women notice nothing until after the missed period. So your theory that she "seemed a bit different yesterday" is not data. A pregnancy test measures the hormone hCG in urine and is reliable from the day the period was due; testing earlier gives more false negatives because the hormone is still low. First morning urine is most concentrated. Your job is not to play detective. It is to know when testing makes sense, and to be there for the result, whatever it is.',
      action:
        'Make sure there is a pregnancy test in the house if you are trying, so it does not have to be fetched in a panic at seven in the morning. Put it somewhere she knows about.',
      phaseTags: ['luteal'],
      sources: [NHS_TRYING, SUNDHED_PREGNANCY],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'The negative test',
      insight:
        'Every negative test, or every period that arrives, is a small loss, and they get heavier over time. For her it often coincides with the low hormones and pain of menstruation, so the grief and the body hit at the same time. Many men respond by comforting with numbers: "it takes time", "next month". You know the numbers now, and you will want to use them. That is a trap. They are true, but they are not what she needs in the hour after. She needs you to be sad too, or at least to show that it is a shared loss and not her failure. Afterwards there is room for the numbers. And notice your own side: men often have nobody to talk to about this, and it wears quietly. That goes for you too, even if you think you have it handled.',
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
        'A late period is not always a pregnancy, but it can be, and for couples who do not want children the days of waiting are their own kind of unease. Stress, illness, travel and weight changes delay ovulation and therefore the period; no contraception is completely reliable either. Test from the day the period was due; if it is negative and the period is still missing a week later, test again. If she is pregnant and does not want to be, it is her decision; in Denmark the limit for abortion on request has been extended to week 18, and elsewhere the limit varies. What she needs in the waiting is not for you to panic, and not for you to brush it off. Both are tempting, and both leave her alone with it. What helps is that you are in it with her. Also on the days when nobody knows anything.',
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
        'Depending on how you count, between one in eight and one in four known pregnancies ends in miscarriage, the vast majority before week 12. If you include pregnancies lost before a test would have shown anything, the figure is higher still. The most common cause is a chromosomal error in the embryo that was there from fertilisation. It is not because she lifted something heavy, drank a cup of coffee, had sex, was stressed or "was not careful". That is worth saying out loud, because most women look for a fault in themselves. Physically it resembles a heavy period with cramps, often for one to two weeks. Emotionally it is the loss of a child they had already begun to imagine. This card is not funny, and it is not meant to be. It is the card you most want to have read before you need it.',
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
        'What helps is simple, and what hurts is well meant. Do not say "it was probably for the best", "you can just try again" or "it was early anyway". You will want to say one of them, because silence feels wrong. It is not wrong. Say "I am so sorry", and let her decide how much gets talked about. Some want it dealt with and behind them, others want it acknowledged again and again. Take the practical side: food, cancellations, messages to the people you had told. She bleeds and has cramps for up to two weeks; heat and painkillers help. Heavy bleeding, fever or foul-smelling discharge deserve a doctor. Periods typically return within 4-6 weeks, and many can try again when they are ready, physically and emotionally. Your grief counts too, and you rarely get asked.',
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
        'The advice is simple: see a doctor after 12 months of regular trying without pregnancy, and after 6 if she is over 35. Go earlier if there are known reasons: very irregular or absent periods, known endometriosis or PCOS, previous pelvic infection, several miscarriages, cancer treatment or problems with your testicles. Around one in seven couples has difficulty conceiving, and in roughly half of cases part of the explanation lies with the man. Read that sentence again if you had assumed otherwise. Waiting times for investigation can be long, so it pays to get started when the time comes. It is not giving up. It is taking it seriously together, instead of leaving her to carry the uncertainty alone while you "give it a bit more time".',
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
        'A fertility investigation always starts with both partners. For you it is a semen analysis: count, motility and shape, given after 2-7 days of abstinence, often twice a few weeks apart because the numbers vary. For her it is blood tests for hormones, ovulation and egg reserve, an ultrasound of the ovaries and uterus, and possibly a check that the fallopian tubes are open. Her part is more extensive, more uncomfortable and takes longer. Your part takes place in a small room with a cup. The least you can do is get your sample done first and without complaint, so her investigation is not waiting on yours. Many men put off the semen analysis because it feels like a verdict on them. It is information, not a grade. Nobody pins it on the fridge.',
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
        'Not all couples want the same thing, and not everyone knows what they want. One wants children now, one wants to wait; one is done, one is not; or you are both unsure and avoid the subject with impressive discipline. The one who carries the contraception often carries the doubt quietly too, cycle after cycle. Ambivalence is normal and deserves to be said out loud without turning into a negotiation. What works is talking about it without pressure and outside the PMS window, giving the honest answer rather than the diplomatic one, and making it something you return to, not something that has to be settled today. "I don’t know" is a valid answer. "You decide" is not; it just shifts the weight onto her. Whatever the answer, everything else this month still applies: contraception, side effects and responsibility remain shared.',
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
        'You now know how the main methods work and what they cost her: the pill and mini-pill in daily discipline and possible mood side effects, IUDs in fitting and bleeding, the implant and injection in irregularity. You know that condoms and vasectomy are the two methods you can carry yourself, that fertility awareness is demanding, and that the app is never contraception. If you remember only one thing from this month, let it be that. You know that most couples take up to a year, that folic acid starts beforehand, that your sperm is affected by alcohol, heat and smoking, that PMS and early pregnancy look alike, that miscarriage is common and not her fault, and when to seek help. Most important: the responsibility does not follow the method. It follows the two of you. And from today, slightly more of it follows you. That is more than you knew a month ago.',
      action:
        'Choose one thing from this month to take over from today: remembering, buying, booking an appointment or carrying the method. Tell her, and then take the quiz.',
      phaseTags: [],
    },
  ],
  weekly: [
    {
      id: weeklyId(M, 1),
      month: M,
      week: 1,
      title: 'Contraception: the methods, and what they cost her',
      body: [
        'Contraception is the place where the difference between your two bodies becomes most concrete, and where your part so far has mostly been that of a spectator. There are more than ten methods, and all but two work on her body. She carries the side effects, the daily discipline and the physical risk if the method fails. That is nobody’s fault, but it is worth seeing clearly before talking about who does what. If your knowledge so far has consisted of "the pill" and "condoms, I think", sit down, because here is the rest: the main methods, how they work, and what they typically cost in cycle and mood.',
        'The hormonal methods work by stopping ovulation, thickening the cervical mucus, or both. The combined pill pairs estrogen and progestogen and is over 99 percent effective taken every day, around 91 percent in practice. It often gives lighter bleeding and less PMS, but can cause headaches, nausea, lower desire and in some a flatter mood, and it carries a small risk of blood clots, higher with smoking and migraine with aura. The mini-pill has progestogen only and can be used where estrogen is not tolerated, but it often causes irregular or absent bleeding. The implant, a small rod in the upper arm, is the most effective method of all and lasts three years; its main drawback is unpredictable spotting. The injection every 12-13 weeks cannot be removed, and fertility can take up to a year to return.',
        'The IUDs are placed in the uterus by a doctor and last 3-10 years. The hormonal IUD releases progestogen locally, often gives much lighter bleeding or none, and is also used to treat heavy periods; mood side effects are rarer than with pills, but the fitting can hurt, and the first months often bring spotting and cramps. The copper IUD is entirely hormone-free: she keeps her own cycle, but the bleeding often becomes heavier and more painful. Both are over 99 percent effective, and both can be removed, after which fertility returns immediately.',
        'What the hormonal methods have in common is that the app becomes less useful, because there is no real cycle to predict. The bleed in the pill-free week is a hormone-triggered bleed, not a period, and the implant, mini-pill and injection can cause bleeding without any pattern. That is good to know, so you do not stand there reading "early" or "late" into something that is simply the method. The app is guessing. You do not have to guess along with it, and you can stop pretending you know.',
        'The two methods you can carry are the condom and vasectomy. The condom is 98 percent effective used correctly every time, around 85 in practice, and the only method that protects against sexually transmitted infections. Most failures come from the wrong size and late application, not from breaking, so size is a fit, not a competition. You buy shoes for your actual feet, not your ambitions. A vasectomy is a fifteen-minute procedure under local anaesthetic, over 99 percent effective, with no effect on desire or erections, and far less invasive than female sterilisation. It is permanent and requires other contraception for 8-12 weeks until the tests are clear. Fertility awareness, where you find the fertile window with temperature and mucus, can be very effective if followed precisely every day, but in practice around one in four gets pregnant within a year. And to say it as plainly as possible: this app is not contraception. It estimates from averages and is built for understanding, not for planning safe days.',
        'What can you do? First: know what you use, and ask how she feels about it. Many have used the same method for years without anyone asking, and many do not know themselves without hormones. Next: take what you can take. Remember the pill with her, put the IUD appointment or injection date in your own calendar, come along to the fitting, buy the condoms and make sure they fit, and say out loud that a vasectomy is an option once you are done having children. None of this requires you to understand hormones. It requires a calendar and a shopping bag, and you own both. And if she is considering switching or stopping, make the decision easy: her body, her choice, your willingness to carry more.',
        'The most important sentence this week is short: the responsibility does not follow the method. The method may sit in her body, but remembering, fetching, paying, coming along and worrying can be shared. It is not a big thing to do. It is just rarely done, which is exactly why there is room for you.',
      ],
      conversationQuestion:
        'If you could choose completely freely, would you use the contraception we use now? And what would you wish I took more of?',
      sources: [NHS_CONTRACEPTION, NHS_VASECTOMY, SUNDHED_CONTRACEPTION],
    },
    {
      id: weeklyId(M, 2),
      month: M,
      week: 2,
      title: 'When it goes wrong: emergency contraception and the switch conversation',
      body: [
        'Even with good contraception, accidents happen. The condom breaks, the pill is missed two days in a row, the injection appointment is overrun. What decides whether an accident becomes a pregnancy is how fast you act, and who does it. "It will probably be fine" is not an action. It is a statement you tend to make just before something goes wrong. And behind many accidents lies a method that never really fitted, and that nobody got around to discussing.',
        'There are three forms of emergency contraception. The levonorgestrel morning-after pill works best within three days, the ulipristal pill within five, and both delay ovulation so the sperm die before the egg arrives. That also means they work poorly if ovulation has already taken place; the closer to ovulation, the less effect. The copper IUD can be fitted up to five days after and is over 99 percent effective regardless of cycle day, and she can keep it as regular contraception afterwards. The pills are available at the pharmacy without a prescription. They are safe to use, but can cause nausea, and the next period may come earlier or later; if it is more than a week late, she should take a pregnancy test.',
        'The practical side here is your job as much as hers. Do you know where the nearest pharmacy with long opening hours is? Do you know that the earlier the pill is taken, the better? Can you be the one who says "I’ll get it now", rather than the one who says "it will probably be fine"? The accident is shared. So the trip to the pharmacy can just as well be yours. You do not even have to explain anything at the counter. They have heard it before, and from men who looked more awkward than you.',
        'If accidents happen often, it is time for the bigger conversation: does the method fit? Many women stay on a contraception they are not happy with because switching feels overwhelming, because they dread an IUD, or because they do not know what the alternative is. Some have been on the pill since their teens and have never felt their own adult cycle. Some suspect the pill affects their mood or desire but cannot separate it from everything else. And many never switch because the other partner has never asked. You are the other partner.',
        'The conversation about switching should happen without pressure. Not right after an accident, not in the PMS days, not as a solution to a problem you have. The follicular phase, where there is energy to hear each other, is a good time. The question is simple: "If you could choose freely, would you use what we use now?" And the answer needs room, even if it is "I don’t know" or "I want to try stopping completely and see how I feel". Your role is to know the alternatives, to say out loud that you are willing to carry condoms or a vasectomy, and to keep your own convenience out of the argument. A condom being slightly less pleasant for you does not weigh much against years of side effects for her. In fact it weighs nothing at all, and you know it.',
        'If she chooses to stop hormones, be prepared for a few months of transition. The first real cycle can take a while to arrive, bleeding can get heavier, and PMS, skin and desire can change. That is the body finding its own rhythm again, and only then does the app become properly useful. It is also where you find out how much of what you learned in the previous months actually applies to her. And until you have another method in place, the condom is not a suggestion, it is your contraception.',
        'What needs saying once more is that the app is never part of that solution. It shows an estimated fertile window, and that is for understanding, not for planning safe days. The day you use the app as contraception is the day you need the card about emergency contraception. That is not a threat. It is arithmetic, and arithmetic has never been interested in negotiating.',
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
        'When you decide to try for a child, the cycle suddenly becomes something else: no longer something to understand, but something to hit. That is a good and an awkward change at the same time, especially for you, who suddenly needs an opinion about mucus. Here is what actually raises the chances, what does not, and what your half of the work is. Yes, there is a half, and it does not consist solely of being present.',
        'The biology is the same as you learned in month 1. The egg lives a day, sperm up to five days, so the fertile window is the five days before ovulation and the day itself. The chance is highest in the two to three days just before, because the sperm need to be waiting when the egg arrives. Sex every second or third day throughout the cycle hits the window by itself, without anyone calculating. If you want more precision, ovulation tests that measure LH in urine, and her own discharge, clear and stretchy like egg white, are better than the app’s estimate, which is built on averages. After ovulation there is nothing more to do that month, and it is fine to relax. It is actually recommended.',
        'The numbers are worth knowing before you need them. A healthy couple has around a 20-25 percent chance per cycle. About 84 in 100 couples are pregnant within a year, and about 92 within two. That means half a year without a result is completely normal, whatever impression your biology teacher gave. With age the chance falls: slowly from the early 30s, faster after 35, and men’s fertility also declines gradually from around 40. That is why the advice is to see a doctor after 12 months of trying, or after 6 if she is over 35, and earlier with known problems such as very irregular periods, endometriosis, PCOS or several miscarriages. About one in seven couples needs help, and in roughly half of cases part of the explanation lies with the man.',
        'There is one thing she should do before you start: take 400 micrograms of folic acid daily. The neural tube closes in week 3-4, often before she knows she is pregnant, and folic acid markedly lowers the risk of spina bifida. So it should begin when contraception stops and continue to week 12. It is a cheap tablet, and you can be the one who buys it and puts it out. She should avoid alcohol entirely whenever she could be pregnant, and smoking is harmful throughout.',
        'Now your half. Sperm take about three months to form, so what you change now shows up in your sperm by winter. Heavy drinking lowers count and motility; the odd glass hardly matters, but regular heavy nights do. Smoking damages sperm DNA and lengthens the time to pregnancy, and that includes her passive smoke. Significant excess weight, anabolic steroids and certain medicines lower quality. The testicles need to stay a couple of degrees below body temperature, so long hot baths, saunas and a laptop on your lap for hours can cause a temporary dip. None of this requires a perfect life. It requires that there is something you do while she does all the rest, so that fertility does not become her project while you cheer from the sofa with a beer in your hand.',
        'Then the thing that is hard to measure: how you are with each other. After a few months sex easily becomes a schedule where the test decides when, and desire disappears for both. She can feel like a machine that has to deliver; you can feel performance pressure. It helps to have sex outside the window too, just for your own sake, not to announce "it’s today", and to initiate at least half the time. And the two weeks from ovulation to the expected period are the longest in the month, because PMS and early pregnancy signs are the same signs. Do not ask "do you feel anything?". You will want to. Don’t, however well you have worded it. Ask instead whether the waiting is weighing on her, and whether she wants to talk about it or have a break from it.',
        'Finally, the negative test. Every time the period comes, it is a small loss, and they get heavier. Many men comfort with numbers: "it takes time". That is true, but in the hour after, it is not what she needs. She needs it to be a shared loss and not her failure. Say "this is rubbish for me too", do something nice together, and save the numbers for tomorrow. And keep an eye on yourself: men rarely have anyone to talk to about this, and it wears quietly.',
      ],
      conversationQuestion:
        'What do the waiting and the negative tests do to you, and what do they do to me? How do we make sure it stays the two of us, and not a project?',
      sources: [NHS_TRYING, NHS_INFERTILITY, SUNDHED_PREGNANCY],
    },
    {
      id: weeklyId(M, 4),
      month: M,
      week: 4,
      title: 'Early pregnancy, loss and when to seek help',
      body: [
        'The last week is about what nobody talks about until they are in it: the first weeks of a pregnancy, the loss that is far more common than most people think, and the point at which you should seek help. It is heavy material, and there is not much to laugh at here. But it is also where your support makes the biggest difference, precisely because so few know what to say.',
        'The first signs of pregnancy are a missed period, tender and larger breasts, tiredness, nausea, needing to pee more often, a metallic taste and, for some, light spotting when the egg implants. Every single sign can also be PMS, and most notice nothing until after the missed period. A test measures the hormone hCG in urine and is reliable from the day the period was due; earlier tests give more false negatives. If the test is positive, the next step is the doctor, who confirms the pregnancy and starts the care pathway. The nausea, tiredness and swinging emotions of the first 12 weeks are hormonal and can be severe. This is not the time to ask whether she is exaggerating. It is the time to take more of the practical load than ever, and to keep coffee, alcohol, raw fish and the other things she needs to avoid off her plate without making a fuss about it. Quiet help counts double.',
        'Then the hard part. Depending on how you count, between one in eight and one in four known pregnancies ends in miscarriage, the vast majority before week 12, and the figure rises with age. Including pregnancies lost before a test would have shown anything, it is higher still. The most common cause is a chromosomal error in the embryo that was there from fertilisation. It is not because she lifted something, drank a coffee, had sex, was stressed, exercised or "was not careful". That is worth saying out loud, and more than once, because almost every woman looks for a fault in herself.',
        'Physically an early miscarriage resembles a heavy period with cramps, often for one to two weeks. Heat and painkillers help. Heavy bleeding that soaks a pad an hour, fever, foul-smelling discharge or severe pain on one side deserve a doctor, and the last can be a sign of an ectopic pregnancy, which is an emergency. Periods typically return within 4-6 weeks. Many can try again when they are ready, and most go on to have a normal pregnancy; investigation is usually offered only after three losses in a row.',
        'Emotionally it is the loss of a child they had already begun to imagine, and it is just as real at week 6 as at week 16. What hurts is well meant: "it was probably for the best", "you can just try again", "it was early anyway", "at least you know you can get pregnant". You will want to say one of them, because you want to fix something. It cannot be fixed. What helps is simple: "I am so sorry", and then letting her decide how much gets talked about, and how often. Take the practical side: food, cancellations, messages to the people you had told. Be aware that the grief can return around the date the baby would have been born, and when others around you get pregnant. And do not forget your own: men are rarely asked how they are, and many carry it alone because they think it is her loss. It is yours together.',
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
      'This month was about what your two bodies share most unequally. You have learned how the main methods work and what they cost her: the pill and mini-pill in daily discipline and possible mood side effects, IUDs in fitting and bleeding, the implant and injection in irregularity. You have learned that condoms and vasectomy are the two methods you can carry, that fertility awareness is demanding, that emergency contraception must be fetched fast and preferably by you, and that the app is never contraception. That last one is here for the third time, because it is the kind of thing people forget exactly once too often. Nobody blames you for what you did not know yesterday. But you are responsible for what you know today.',
      'You have also learned what happens when you want to go the other way: that the fertile window lies before ovulation, that most couples take up to a year, that folic acid starts beforehand, that your sperm is affected by alcohol, heat and smoking, that PMS and early pregnancy look alike, that miscarriage is common and never her fault, what to say and not to say, and when to seek help. And that the investigation starts with both of you, not only with her.',
      'Next month is about when something is off: endometriosis, PCOS and irregular cycles, which signs deserve a doctor, and how you back her up.',
    ],
    keepDoing: [
      'Ask regularly how she feels about your contraception, and say out loud what you are willing to carry.',
      'Keep condoms in the right size in the house, and buy them yourself, without being reminded.',
      'Put her IUD appointment, injection date or pill refill in your own calendar, with a reminder. You have room. It is mostly birthdays in there.',
      'After an accident: fetch the morning-after pill the same day, the sooner the better. It is your turn.',
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
          'Emergency contraception works best the earlier it is taken, and the app’s window is an estimate, never contraception. The trip to the pharmacy is as much yours, and you have time today, so use it.',
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
          'It is her body and her decision. What makes it easier is that you know the alternatives and say out loud that you will carry more. An article in a chat is not the same thing, and you know it.',
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
          'The chance is 20-25 percent per cycle, and most couples take months. The advice is a doctor after 12 months, or 6 if she is over 35. Five months is not behind, it is average.',
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
          'Folic acid must start before the pregnancy, and sperm take three months to form. Both need to begin before you start. One is her tablet, the other is your beer crate.',
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
          'In the hour after, she needs it to be a shared loss, not her failure. The numbers are true, but they belong to tomorrow. You know them by heart anyway.',
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
