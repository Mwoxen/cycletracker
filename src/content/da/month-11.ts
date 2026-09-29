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
const SUNDHED_ENDO: Source = {
  label: 'Sundhed.dk: Endometriose',
};
const SUNDHED_PCOS: Source = {
  label: 'Sundhed.dk: Polycystisk ovariesyndrom',
};

const M = 11;

export const month11: MonthContent = {
  month: M,
  theme: 'Når noget afviger',
  focus:
    'Genkend tegnene på endometriose, PCOS og uregelmæssighed, og vær den, der bakker op, når det fortjener en læge.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'Normalt er et interval, ikke et tal',
      insight:
        'Hele året har handlet om den typiske cyklus. Denne måned handler om det, der falder udenfor. Normalt er et bredt interval: 21-35 dage mellem menstruationer, 2-7 dages blødning, smerter der kan holdes nede med varme og håndkøbsmedicin, og PMS der forsvinder, når blødningen begynder. Afvigelse er, når noget ligger konsekvent udenfor: cyklusser, der springer måneder over, blødning der gennembløder alt, smerter der giver sygedage, eller symptomer, der bliver værre måned for måned. Én skæv cyklus betyder sjældent noget. Et mønster gør. Din rolle i denne måned er ikke at diagnosticere, men at kende tegnene godt nok til at sige: det her fortjener en læge.',
      action:
        'Kig tilbage i kalenderen på de sidste tre cyklusser. Ligger længde, blødning og smerte inden for de normale intervaller? Skriv ned, hvad der stikker ud.',
      phaseTags: [],
      sources: [NHS_IRREGULAR],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: 'Smerte, der styrer dagen, er ikke normal',
      insight:
        'Almindelige menstruationssmerter er ubehagelige, men de lader sig håndtere: en varmepude, en ibuprofen, en roligere dag. Smerter, der bestemmer, om hun kan gå på arbejde, der får hende til at kaste op, besvime eller ligge sammenkrøbet på badeværelsesgulvet, er noget andet. Det samme gælder smerter, der begynder dage før blødningen, fortsætter efter den eller kommer midt i cyklussen. Mange kvinder har lært fra teenageårene, at "sådan er det bare", ofte af mødre og læger, der selv fik det at vide. Det er den normalisering, der forsinker diagnoser med år. Du kan være den, der ikke normaliserer, uden at gøre det til et drama.',
      action:
        'Spørg hende i dag: "Har du nogensinde måttet aflyse noget eller melde dig syg på grund af smerterne?" Hvis ja, så sig, at det fortjener en læge.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN, NHS_ENDO],
    },
    {
      id: dailyId(M, 3),
      month: M,
      day: 3,
      title: 'Endometriose: væv det forkerte sted',
      insight:
        'Endometriose er en tilstand, hvor væv, der ligner livmoderslimhinden, vokser uden for livmoderen: på æggestokke, æggeledere, tarm, blære eller bughinde. Vævet reagerer på cyklussens hormoner ligesom slimhinden, så det bløder og betændes hver måned, men blodet kan ikke komme ud. Over tid giver det arvæv, sammenvoksninger og smerter, der ofte bliver værre med årene. Omkring 1 ud af 10 kvinder i den fødedygtige alder har det, hvilket gør det lige så almindeligt som diabetes. Ingen ved præcist, hvorfor det opstår, og det kan ikke ses på en almindelig undersøgelse. Det er en kronisk sygdom, ikke "slemme menstruationer".',
      action:
        'Læs NHS-siden om endometriose i dag, så du kender symptomlisten. Det tager fem minutter og gør dig til en bedre lytter.',
      phaseTags: ['menstrual'],
      sources: [NHS_ENDO, SUNDHED_ENDO],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'Endometriose viser sig ikke kun som kramper',
      insight:
        'Mange tænker på endometriose som svære menstruationssmerter, men billedet er bredere. Typiske tegn: smerter i underlivet og lænden, der begynder før blødningen; smerter ved eller efter sex; smerter ved afføring eller vandladning, især under menstruationen; kvalme, forstoppelse eller diarré, der følger cyklussen; blødning mellem menstruationer; og en træthed, der ikke forsvinder med søvn. Nogle har svært ved at blive gravide. Symptomerne varierer meget, og sværhedsgraden siger ikke noget om, hvor meget væv der er. Det er kombinationen og timingen, der tæller. Fordi symptomerne ligner tarmproblemer eller blærebetændelse, bliver de ofte behandlet som det i årevis.',
      action:
        'Gennemgå listen sammen: smerte før blødning, ved sex, ved toiletbesøg, træthed. Genkender hun to eller flere, så foreslå, at hun logger dem i appen fra i dag.',
      phaseTags: ['menstrual', 'luteal'],
      sources: [NHS_ENDO, ACOG_ENDO],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'Syv til ti år til en diagnose',
      insight:
        'Fra de første symptomer til en endometriose-diagnose går der i gennemsnit 7-10 år. Årsagerne er kendte: smerten normaliseres af hende selv og omgivelserne, symptomerne ligner andre ting, ultralyd ser ofte ikke vævet, og den sikre diagnose kræver en kikkertoperation. Mange fortæller om at være gået til lægen igen og igen og fået at vide, at det var stress, mave eller "bare menstruation". Det betyder, at det ofte ikke er kroppen, der forsinker diagnosen, men systemet omkring den. Og systemet lytter mere til en patient, der kan dokumentere et mønster over tid, end til en, der beskriver sidste måned efter hukommelsen.',
      action:
        'Spørg, hvor mange gange hun har nævnt smerter for en læge, og hvad svaret var. Bare lyt. Svaret fortæller dig, om der er et mønster af at blive afvist.',
      phaseTags: [],
      sources: [NHS_ENDO, SUNDHED_ENDO],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: 'Endometriose kan behandles, ikke kureres',
      insight:
        'Der findes ingen kur, men der findes hjælp, og det er vigtigt at vide, når diagnosen kan føles som en dom. Behandlingen har tre spor. Smertelindring: ibuprofen og lignende, varme, fysioterapi. Hormonbehandling: p-piller, hormonspiral eller andre midler, der dæmper cyklussen og dermed vævets aktivitet. Kirurgi: kikkertoperation, hvor vævet fjernes, som kan give lindring i årevis, selvom det kan komme igen. Hvad der virker, er individuelt, og det tager ofte flere forsøg at finde den rigtige kombination. Din opgave er ikke at vælge for hende, men at være tålmodig gennem forsøgene og huske, at "det virkede ikke" ikke betyder, at intet virker.',
      action:
        'Hvis hun er i behandling: spørg, hvordan det går med den, og om der er bivirkninger, hun ikke har nævnt. Hvis ikke: spørg, om hun ved, hvilke muligheder der findes.',
      phaseTags: [],
      sources: [NHS_ENDO, ACOG_ENDO],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'Adenomyose: endometriosens mindre kendte søster',
      insight:
        'Adenomyose er, når slimhindevæv vokser ind i selve livmodervæggen i stedet for udenfor. Livmoderen bliver forstørret og øm, og resultatet er ofte kraftige, langvarige menstruationer med svære kramper, tyngdefornemmelse i underlivet og smerter ved sex. Det ses oftest hos kvinder over 30 og hos dem, der har født, men kan ramme tidligere. Adenomyose og endometriose optræder ofte sammen, og symptomerne overlapper, så det kan være svært at skelne. Diagnosen stilles typisk med ultralyd eller MR-scanning, hvilket faktisk er nemmere end ved endometriose. Behandlingen ligner: smertestillende, hormonspiral eller anden hormonbehandling, og i sjældne tilfælde operation.',
      action:
        'Hvis hendes menstruationer er både kraftige og meget smertefulde, så nævn ordet adenomyose for hende i dag. Det er et ord, mange aldrig har hørt, og et spørgsmål, der er værd at stille lægen.',
      phaseTags: ['menstrual'],
      sources: [NHS_ADENO],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: 'Fibromer: godartede, men ikke ligegyldige',
      insight:
        'Fibromer er godartede knuder af muskelvæv i eller på livmoderen. De er meget almindelige; op mod hver tredje kvinde får dem på et tidspunkt, oftest mellem 30 og 50 år, og mange mærker dem aldrig. Men afhængigt af størrelse og placering kan de give kraftige og langvarige menstruationer, smerter eller tryk i underlivet, hyppig vandladning, forstoppelse, rygsmerter og smerter ved sex. De er ikke kræft og bliver det ikke. Behandlingen spænder fra ingenting, hvis de ikke generer, over medicin til at dæmpe blødningen, til operation, der fjerner fibromerne og bevarer livmoderen. Diagnosen stilles med ultralyd, som er en simpel undersøgelse.',
      action:
        'Spørg, om hun har bemærket tryk, hyppig vandladning eller at maven føles anderledes. Sammen med kraftige blødninger er det en grund til at bede lægen om en ultralydsscanning.',
      phaseTags: ['menstrual'],
      sources: [NHS_FIBROIDS],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'Kraftig blødning har konkrete tegn',
      insight:
        'Måned 1 nævnte tegnene kort. Her er de igen, fordi de er nemme at overse: bind eller tampon, der skal skiftes hver time i flere timer i træk; behov for to produkter samtidig; blødning gennem tøj eller sengetøj; klumper på størrelse med en 2-krone eller mere; blødning i over 7 dage; og at hun planlægger sit liv efter, hvor tæt der er på et toilet. Kraftige blødninger rammer omkring hver fjerde kvinde og har ofte en årsag, der kan findes: fibromer, adenomyose, polypper, hormonel ubalance, stofskifte eller blødningsforstyrrelser. Selv uden en fundet årsag kan blødningen behandles. Ingen skal leve med at gennembløde.',
      action:
        'Læg mærke til i denne menstruation, om hun skifter oftere end hver anden time, eller om der bliver købt dobbelt så mange produkter som før. Nævn det roligt, hvis ja.',
      phaseTags: ['menstrual'],
      sources: [NHS_HEAVY],
    },
    {
      id: dailyId(M, 10),
      month: M,
      day: 10,
      title: 'Jernmangel: den skjulte følgevirkning',
      insight:
        'Kraftige blødninger tømmer langsomt kroppens jerndepoter, og jernmangel udvikler sig så gradvist, at hun kan have vænnet sig til det. Tegnene: træthed, der ikke svarer til søvnen, åndenød ved trapper, hjertebanken, bleg hud, svimmelhed, hovedpine, kolde hænder og fødder, skøre negle og en mærkelig trang til at tygge is. Jernmangelanæmi er den mest almindelige mangeltilstand hos kvinder i den fødedygtige alder, og den fortjener en blodprøve, ikke gætteri. Behandlingen er jerntilskud i måneder, ikke uger, og samtidig at gøre noget ved blødningen. At tage jern på egen hånd uden blodprøve er ikke en god idé; for meget jern er også skadeligt.',
      action:
        'Hvis hun er konstant træt og bløder kraftigt: foreslå, at hun bestiller tid til en blodprøve for jern, og tilbyd at booke tiden med det samme.',
      phaseTags: ['menstrual', 'follicular'],
      sources: [NHS_ANAEMIA, NHS_HEAVY],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'PCOS: den mest almindelige hormonforstyrrelse',
      insight:
        'Polycystisk ovariesyndrom, PCOS, rammer omkring 1 ud af 10 kvinder og er den mest almindelige hormonelle tilstand hos kvinder i den fødedygtige alder. Navnet er misvisende: "cysterne" er umodne æg-follikler, ikke rigtige cyster, og man kan have PCOS uden dem. Kernen er en ubalance: æggestokkene producerer for meget af de mandlige kønshormoner, androgener, og ægløsningen bliver uregelmæssig eller udebliver. Diagnosen kræver to ud af tre: uregelmæssige cyklusser, tegn på forhøjede androgener (i blodet eller synligt), og polycystiske æggestokke på ultralyd. Det er en tilstand, der påvirker hele kroppen, fra hud til stofskifte til humør, og som ofte overses eller reduceres til "tab dig".',
      action:
        'Læs NHS-siden om PCOS, så du forstår, at det er en tilstand med mange ansigter, ikke ét symptom. Spørg bagefter, om hun har hørt om det.',
      phaseTags: [],
      sources: [NHS_PCOS, SUNDHED_PCOS],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: 'Uregelmæssig cyklus: når appen ikke kan gætte',
      insight:
        'Ved PCOS modnes follikler, men de færdiggør ofte ikke ægløsningen. Uden ægløsning dannes ikke progesteron, slimhinden bygger op uden at blive afstødt, og menstruationen kommer sent, sjældent eller slet ikke. Cyklusser på 35-90 dage eller færre end otte om året er typisk. Når den kommer, kan den være kraftig, fordi slimhinden har haft lang tid til at bygge op. Det betyder, at appens forudsigelser bliver upræcise: den regner med et mønster, som ikke er der. Det er ikke hendes fejl, og det er ikke appens. Det er tegn på, at cyklussen har brug for at blive undersøgt frem for forudsagt. Uregelmæssighed er også et almindeligt tegn ved stofskifteproblemer og efter p-pillestop.',
      action:
        'Hvis appens skøn er ramt ved siden af flere gange: sig, at det ikke er noget, hun skal logge bedre, men noget, der er værd at nævne for en læge.',
      phaseTags: ['follicular', 'ovulation'],
      sources: [NHS_PCOS, NHS_IRREGULAR],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: 'PCOS: det synlige, som ingen skal kommentere',
      insight:
        'Forhøjede androgener viser sig på huden og i håret. Akne, der fortsætter langt efter teenageårene, især langs kæbe og hals. Øget hårvækst i ansigtet, på brystet, maven eller ryggen. Tyndere hår på hovedet i et mandligt mønster. Mørke, fløjlsagtige pletter i nakken eller armhulerne, som er et tegn på insulinresistens. Og for mange en vægt, der stiger, uanset hvad de gør. Hvert af disse tegn er både medicinsk relevant og dybt personligt. Mange bruger timer og penge på at skjule dem og skammer sig over noget, der er en hormonel tilstand. Det, hun har brug for fra dig, er nul kommentarer, nul kostråd og fuld ro om, at du ser hende, ikke symptomerne.',
      action:
        'Sig i dag noget konkret, du holder af ved hende, som ikke handler om udseende. Og hvis hun selv nævner hår eller hud: sig "det må være hårdt", ikke "jeg lægger slet ikke mærke til det".',
      phaseTags: [],
      sources: [NHS_PCOS],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'PCOS, insulin og det lange løb',
      insight:
        'Mange med PCOS har insulinresistens: cellerne reagerer dårligere på insulin, kroppen producerer mere, og det høje insulin får æggestokkene til at lave flere androgener. Det er en ond cirkel, som også forklarer, hvorfor vægt er sværere at styre, og hvorfor sult og trang kan være voldsom. På længere sigt giver PCOS øget risiko for type 2-diabetes, forhøjet blodtryk og kolesterol. Derfor bør blodsukker og blodtryk tjekkes jævnligt. Motion og regelmæssige måltider hjælper reelt på insulinfølsomheden, og det er grunden til, at læger nævner livsstil. Problemet er, når det bliver det eneste, de siger. Livsstil er en del af behandlingen, ikke en dom over hendes karakter.',
      action:
        'Foreslå en fælles vane, der gavner jer begge, som en gåtur efter aftensmaden. Gør det til noget, I gør sammen, ikke noget, hun skal.',
      phaseTags: [],
      sources: [NHS_PCOS, ACOG_PCOS],
    },
    {
      id: dailyId(M, 15),
      month: M,
      day: 15,
      title: 'PCOS og fertilitet: sværere, ikke umuligt',
      insight:
        'PCOS er en af de mest almindelige årsager til nedsat fertilitet, fordi ægløsningen er uregelmæssig eller udebliver. Det betyder ikke, at graviditet er udelukket. Mange bliver gravide uden hjælp, og for dem, der har brug for det, findes veldokumenteret behandling: medicin, der sætter ægløsningen i gang, og i nogle tilfælde fertilitetsbehandling. Under graviditet er der lidt højere risiko for graviditetssukkersyge og forhøjet blodtryk, så der følges tættere op. Hvis I ønsker børn, er PCOS en grund til at søge hjælp tidligere end de sædvanlige tolv måneder, ikke til at vente og se. Og hvis I ikke ønsker børn: uregelmæssig ægløsning er ikke prævention.',
      action:
        'Hvis børn er på tale: foreslå, at I sammen bestiller en tid til lægen for at tale om, hvad PCOS betyder for jeres plan, og tag med.',
      phaseTags: ['ovulation'],
      sources: [NHS_PCOS, ACOG_PCOS],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'PCOS rammer også humøret',
      insight:
        'Kvinder med PCOS har markant højere forekomst af angst, depression og spiseforstyrrelser end andre. Årsagerne er flere: hormonerne selv, den konstante kamp med krop og vægt, uvisheden om fertilitet, og oplevelsen af ikke at blive taget alvorligt. Det er ikke svaghed, det er en del af tilstanden, og det fortjener samme opmærksomhed som blodsukkeret. Alligevel spørger få læger til det. Det, der hjælper, er at få det sagt højt: at den tunge periode kan hænge sammen med PCOS og kan behandles, og at hun ikke skal bære den alene. Tegn, du bør reagere på: tilbagetrækning, søvnproblemer, at hun holder op med at spise med jer, eller udtalelser om, at hun er værdiløs.',
      action:
        'Spørg i dag: "Hvordan har du det egentlig med det hele, ikke kroppen, men dig?" Og hvis svaret er tungt, så foreslå, at det er en del af det, lægen skal høre.',
      phaseTags: ['luteal'],
      sources: [NHS_PCOS],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'Stofskiftet påvirker cyklussen',
      insight:
        'Skjoldbruskkirtlen styrer stofskiftet, og både for lavt og for højt stofskifte kan rode med cyklussen. Lavt stofskifte giver ofte kraftige eller hyppige menstruationer, træthed, kuldskærhed, vægtstigning, tør hud, hårtab og lavt humør. Højt stofskifte giver lette eller udeblevne menstruationer, vægttab, hjertebanken, uro og varme. Stofskiftesygdom er langt mere almindelig hos kvinder end hos mænd og udvikler sig ofte langsomt, så symptomerne forveksles med stress eller alder. Det gode er, at diagnosen er en simpel blodprøve, og behandlingen er effektiv. Enhver udredning af uregelmæssige, kraftige eller udeblevne menstruationer bør inkludere en stofskifteprøve.',
      action:
        'Hvis hun har flere af tegnene, så foreslå, at hun beder om at få tjekket stofskiftet næste gang, hun alligevel er hos lægen. Det er én blodprøve mere.',
      phaseTags: [],
      sources: [NHS_THYROID],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'Når menstruationen udebliver: stress, vægt, træning',
      insight:
        'En udebleven menstruation uden graviditet har oftest en af tre forklaringer: stress, vægt eller træning. Stærk eller langvarig stress kan bremse signalerne fra hjernen til æggestokkene. Lav kropsvægt, hurtigt vægttab eller for lidt energi i forhold til forbruget kan stoppe ægløsningen helt; det ses hos kvinder, der træner hårdt uden at spise nok. Kraftig overvægt kan forstyrre på andre måder. Kroppen prioriterer overlevelse over reproduktion, og udebleven menstruation er dens signal. Udebliver menstruationen i over tre måneder, kaldes det amenorré og fortjener en læge. Ikke fordi det er farligt her og nu, men fordi længere tid uden østrogen påvirker knogler og hjerte.',
      action:
        'Hvis menstruationen har været væk et stykke tid: spørg nysgerrigt, om hun tror, det hænger sammen med pres, mad eller træning. Lyt uden at vurdere hendes valg.',
      phaseTags: [],
      sources: [NHS_MISSED],
    },
    {
      id: dailyId(M, 19),
      month: M,
      day: 19,
      title: 'Udebleven menstruation: amning og perimenopause',
      insight:
        'To andre grunde til udebleven menstruation er naturlige, men kan alligevel forvirre. Under amning hæmmer hormonet prolaktin ægløsningen, og menstruationen kan være væk i måneder. Men ægløsning kan ske før første menstruation, så amning er ikke sikker prævention. Perimenopause er årene op til overgangsalderen, typisk fra midten af fyrrerne, men nogle gange tidligere. Cyklusserne bliver først kortere, så længere og mere uregelmæssige, blødningen skifter karakter, og hedeture, dårlig søvn og humørsvingninger følger med. Det, der overrasker mange par, er, hvor tidligt det kan starte, og hvor meget det ligner PMS eller stress. Menstruation, der stopper før 40, fortjener altid en læge.',
      action:
        'Hvis hun er over 40 og cyklussen har ændret sig: spørg, om hun har tænkt på, om det kan være begyndelsen på perimenopausen. Måned 12 går i dybden med det.',
      phaseTags: [],
      sources: [NHS_MISSED, NHS_MENOPAUSE],
    },
    {
      id: dailyId(M, 20),
      month: M,
      day: 20,
      title: 'Blødning mellem menstruationer',
      insight:
        'Blødning uden for menstruationen har mange årsager, og de fleste er harmløse: en lille pletblødning omkring ægløsning, gennembrudsblødning de første måneder på ny hormonel prævention, eller en glemt p-pille. Men blødning efter sex, blødning der kommer igen og igen mellem menstruationer, eller blødning efter overgangsalderen skal altid undersøges. Årsagerne kan være polypper, fibromer, infektion, celleforandringer på livmoderhalsen eller sjældent noget alvorligere. Det er præcis den slags, mange skubber foran sig, fordi det er pinligt eller "nok ikke noget". Det er også præcis den slags, hvor en tidlig undersøgelse gør størst forskel. Sørg også for, at hun får taget de screeninger, hun tilbydes.',
      action:
        'Spørg, om hun er med i screeningsprogrammet for livmoderhalskræft, og om hun har fået den seneste invitation. Hvis hun har skubbet den, så tilbyd at hjælpe med at booke.',
      phaseTags: ['follicular', 'ovulation'],
      sources: [NHS_IRREGULAR],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: 'PMDD: når PMS ikke er PMS',
      insight:
        'Måned 7 handlede om PMS og PMDD. Her er det korte genopfrisk, fordi det hører til denne måneds tema. PMDD, præmenstruel dysforisk lidelse, rammer 3-8 procent og er ikke svær PMS, men en overfølsomhed i hjernen over for normale hormonudsving. Symptomerne er alvorlige: dyb nedtrykthed, angst, raseri, håbløshed og for nogle selvmordstanker i dagene før menstruation, som forsvinder, når blødningen kommer. Diagnosen stilles ved at logge symptomer i mindst to cyklusser, og det er netop det, appen kan hjælpe med. Behandlingen findes: antidepressiva, der virker hurtigt i denne sammenhæng, hormonbehandling og terapi. Ingen skal leve med at frygte halvdelen af hver måned.',
      action:
        'Kig i kalenderen: er der to eller flere cyklusser, hvor de sidste dage før menstruation er logget som meget tunge? Så vis hende mønstret, og foreslå, at hun tager det med til lægen.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 22),
      month: M,
      day: 22,
      title: 'Smerter ved sex er ikke noget, man bider i sig',
      insight:
        'Smerter ved sex er langt mere almindelige, end nogen taler om, og de er et symptom, ikke en præstation, der skal gennemføres. Dyb smerte ved indtrængning kan være tegn på endometriose, adenomyose, fibromer eller infektion. Smerte ved indgangen kan skyldes tørhed, hormonel prævention, hudlidelser, muskelspændinger eller tidligere smerteoplevelser, der har lært kroppen at stramme til. Mange kvinder fortsætter alligevel for ikke at skuffe, og det gør både smerten og angsten værre. Det vigtigste, du kan gøre, er at gøre det fuldstændig tydeligt, at det skal stoppe, når det gør ondt, uden sure miner, og at det er noget, I finder ud af sammen. Det fortjener en læge, ikke tålmodighed alene.',
      action:
        'Sig det højt i dag, uden for soveværelset: "Hvis noget gør ondt, så skal vi stoppe, og jeg bliver ikke ked af det." Spørg så, om der er noget, hun ikke har sagt.',
      phaseTags: ['ovulation', 'luteal'],
      sources: [NHS_ENDO],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'Appen som symptomdagbog',
      insight:
        'Det stærkeste, hun kan tage med til lægen, er ikke en beskrivelse, men et mønster. Læger arbejder med data, og "smerte 8 ud af 10 på dag 1-3 i seks cyklusser, sygedag hver gang, smerte ved afføring i menstruationen" er noget helt andet end "jeg har slemme menstruationer". Appen har allerede datoerne. Det, der mangler, er ofte det systematiske: smertescore, blødningsmængde, hvor mange produkter, hvad der blev aflyst, hvilke andre symptomer der fulgte med. Tre cyklusser er nok til at vise et mønster; to er minimum for PMDD. Det er hendes log, men du kan gøre det nemt at logge ved at minde blidt om det og ved at have set det selv.',
      action:
        'Åbn appen sammen i aften, og aftal, hvilke tre ting hun logger hver dag de næste tre cyklusser: smerte, blødning og ét symptom, hun selv vælger.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 24),
      month: M,
      day: 24,
      title: 'Spørgsmål, der er værd at stille lægen',
      insight:
        'En lægetid er kort, ofte 10-15 minutter, og det er nemt at gå derfra og først bagefter komme i tanke om det vigtigste. Derfor hjælper det at have tre til fem spørgsmål skrevet ned. Gode spørgsmål: "Hvad kan det være, og hvad kan udelukkes?" "Hvilke undersøgelser giver mening: blodprøver, ultralyd, henvisning til gynækolog?" "Hvad er næste skridt, hvis det her ikke hjælper?" "Hvornår skal jeg komme igen?" Og det vigtigste: "Kan du skrive i journalen, at jeg har bedt om at få undersøgt X?" Det sidste gør en forskel, fordi det dokumenterer, at bekymringen er rejst. Forberedelsen gør det sværere at blive sendt hjem med et skuldertræk.',
      action:
        'Tilbyd at skrive spørgsmålene ned sammen med hende i aften, gerne i noten i appen, så hun har dem på telefonen til lægetiden.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 25),
      month: M,
      day: 25,
      title: 'Tag med, uden at tage over',
      insight:
        'At have en anden med til lægen gør det nemmere at huske, hvad der blev sagt, og sværere at blive afvist. Men det er hendes konsultation, hendes krop og hendes stemme. Din rolle er at være støtte og hukommelse, ikke talsmand. Konkret: spørg først, om hun vil have dig med, og respekter et nej. Aftal på forhånd, hvad du må sige, for eksempel at bekræfte, hvor slemt det er, hvis hun selv underdriver. Sid ved siden af, ikke foran. Tag noter. Stil kun spørgsmål, I har aftalt, eller spørg hende først: "Vil du have, at jeg nævner det med sygedagene?" Efter besøget: gennemgå, hvad der blev sagt, og hvad næste skridt er. Det er opbakning, ikke overtagelse.',
      action:
        'Spørg i dag: "Vil du have mig med til lægen næste gang, og hvad vil du så have, at jeg gør og ikke gør derinde?"',
      phaseTags: [],
    },
    {
      id: dailyId(M, 26),
      month: M,
      day: 26,
      title: 'At blive afvist, og at bede om en anden mening',
      insight:
        'Mange kvinder med endometriose, PCOS eller PMDD fortæller om at være blevet sendt hjem med "det er normalt", "tab dig", "prøv p-piller" eller "du er nok stresset". Nogle gange er det rigtigt. Men når symptomerne fortsætter, er det et tegn på, at der skal spørges igen. Hun har ret til en anden mening, til at bede om henvisning til en gynækolog og til at skifte læge. Det er ikke besværligt eller utaknemmeligt; det er sådan, diagnoser bliver stillet. Det, der ofte holder hende tilbage, er tvivlen: "måske overdriver jeg". Her betyder din stemme noget. Du har set dagene, og du kan sige: du overdriver ikke, jeg var der.',
      action:
        'Hvis hun er blevet afvist: sig i dag, at du tror på hende, og tilbyd at finde ud af, hvordan man beder om en henvisning eller skifter læge. Gør det praktiske sammen.',
      phaseTags: [],
      sources: [NHS_ENDO],
    },
    {
      id: dailyId(M, 27),
      month: M,
      day: 27,
      title: 'En kronisk diagnose ændrer noget i hende',
      insight:
        'En diagnose som endometriose eller PCOS kan være en lettelse: endelig et navn, endelig en forklaring. Og samtidig en sorg: det går ikke over, det skal håndteres resten af livet, og det påvirker måske børn, arbejde og sex. Mange gennemgår noget, der ligner en sorgproces, med vrede over de tabte år, angst for fremtiden og perioder, hvor de ikke orker at tænke på det. Det er normalt, og det følger ikke en tidsplan. Det, hun har brug for, er ikke opmuntring i stil med "det kunne være værre" eller løsninger, men at du kan rumme, at hun både er lettet og ked af det samme dag, og at du ikke selv forsvinder i bekymring.',
      action:
        'Hvis hun har en diagnose: spørg i dag "hvordan har du det med den lige nu?" uden at foreslå noget. Hvis ikke: spørg, hvad hun ville føle, hvis hun fik en.',
      phaseTags: ['luteal', 'menstrual'],
    },
    {
      id: dailyId(M, 28),
      month: M,
      day: 28,
      title: 'Hverdag med en kronisk tilstand',
      insight:
        'Et liv med endometriose, adenomyose eller svær PMDD har gode dage og dårlige dage, og de dårlige er ikke altid til at forudsige. Det, der hjælper i hverdagen, er praktisk og lidt kedeligt: at planer har en plan B, at aflysninger ikke kræver forklaring eller undskyldning, at der er smertestillende, varme og nem mad på lager, at du kender hendes medicin og ved, hvornår smerten er ud over det sædvanlige. Og at du tager det praktiske uden at spørge på de dage, hvor hun ikke kan. Mange med kronisk sygdom bruger mere energi på at føle sig som en byrde end på sygdommen selv. Det kan du fjerne ved at gøre hjælpen selvfølgelig.',
      action:
        'Aftal en fast sætning, hun kan sende, når det er en dårlig dag, for eksempel bare "dårlig dag", og aftal, hvad du så gør, uden at hun skal forklare mere.',
      phaseTags: ['menstrual'],
    },
    {
      id: dailyId(M, 29),
      month: M,
      day: 29,
      title: 'Sætninger, der gør det værre, og hvad du kan sige i stedet',
      insight:
        '"Alle kvinder har ondt." "Har du prøvet at stresse mindre?" "Min søster har det også, og hun klarer sig fint." "Skal du nu til lægen igen?" "Det er sikkert bare hormonerne." Hver af dem gør det samme: de siger, at hendes oplevelse er overdrevet, og de er præcis det, hun allerede har hørt fra andre. Det modsatte er ikke svært, men det kræver, at du tåler ikke at kunne fikse det. "Det lyder helt vildt hårdt." "Jeg tror på dig." "Hvad har du brug for i dag?" "Skal jeg tage med?" "Vi finder ud af det sammen." Fem sætninger, der ikke koster noget, og som hun sandsynligvis har ventet længe på at høre.',
      action:
        'Vælg én af de fem gode sætninger, og sig den i dag i en situation, hvor den passer. Læg mærke til, hvad der sker i hendes ansigt.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 30),
      month: M,
      day: 30,
      title: 'Måned 11: det har du lært',
      insight:
        'Du kender nu tegnene på det, der afviger: smerte, der styrer dagen, blødning, der gennembløder, cyklusser, der springer måneder over, blødning mellem menstruationer, smerter ved sex, og en træthed, der ikke svarer til søvnen. Du ved, at endometriose, adenomyose, fibromer, PCOS, stofskifte og PMDD alle er almindelige, at de alle kan behandles, og at de alle tager for lang tid at få stillet, fordi symptomer normaliseres. Du ved, at appen kan være en symptomdagbog, at forberedelse til lægen betyder noget, at du kan tage med uden at tage over, og at "jeg tror på dig" er den vigtigste sætning. Du kan ikke diagnosticere. Du kan sørge for, at hun ikke går alene.',
      action:
        'Skriv de tre tegn ned, du vil holde øje med i hendes log fremover, og fortæl hende, hvad du har lært. Tag så månedens quiz.',
      phaseTags: [],
    },
  ],
  weekly: [
    {
      id: weeklyId(M, 1),
      month: M,
      week: 1,
      title: 'Endometriose og adenomyose: smerten, der ikke er normal',
      body: [
        'Hvis der er én ting, denne måned skal lære dig, er det, at menstruationssmerter har en grænse for, hvad der er normalt, og at grænsen overskrides langt oftere, end nogen taler om. Endometriose rammer omkring 1 ud af 10 kvinder i den fødedygtige alder. Det er lige så almindeligt som diabetes, og alligevel tager det i gennemsnit 7-10 år at få diagnosen. Denne artikel handler om, hvad det er, hvordan det viser sig, og hvad du kan gøre.',
        'Endometriose er en tilstand, hvor væv, der ligner livmoderslimhinden, sidder uden for livmoderen: på æggestokke, æggeledere, bughinde, tarm eller blære. Vævet reagerer på cyklussens hormoner ligesom slimhinden, så det bløder hver måned, men blodet har ingen vej ud. Det giver betændelse, arvæv og sammenvoksninger, og det er dem, der gør ondt. Adenomyose er den nære slægtning, hvor vævet vokser ind i selve livmodervæggen, så livmoderen bliver forstørret, øm og bløder kraftigt. De to optræder ofte sammen, og symptomerne overlapper.',
        'Symptomerne er bredere, end de fleste tror. Smerter i underlivet og lænden, der begynder før blødningen og kan fortsætte efter. Smerter ved eller efter sex. Smerter ved afføring eller vandladning, især under menstruationen. Kvalme, forstoppelse eller diarré, der følger cyklussen. Blødning mellem menstruationer. En træthed, der ikke svarer til søvnen. Og for nogle vanskeligheder med at blive gravid. Vigtigt: smertens styrke siger ikke noget om, hvor meget væv der er. Nogle med udbredt endometriose har få smerter, andre med lidt væv er slået ud hver måned.',
        'Hvorfor tager diagnosen så lang tid? Fordi smerten normaliseres, ofte fra teenageårene, af hende selv, af mødre og veninder, der selv har fået det at vide, og af læger, der møder "slemme menstruationer" hver dag. Fordi symptomerne ligner irritabel tarm, blærebetændelse eller stress. Fordi ultralyd ofte ikke viser vævet, og den sikre diagnose kræver en kikkertoperation. Og fordi mange kvinder efter to-tre afvisninger holder op med at spørge. Det er det sidste, du kan gøre noget ved.',
        'Der findes ingen kur, men der findes behandling, og den virker for mange. Første spor er smertelindring: ibuprofen og lignende taget tidligt, varme, fysioterapi rettet mod bækkenbunden. Andet spor er hormonbehandling: p-piller, hormonspiral eller andre midler, der dæmper cyklussen og dermed vævets aktivitet. Tredje spor er kirurgi, hvor vævet fjernes ved kikkertoperation; det kan give lindring i årevis, selvom vævet kan komme igen. Det tager ofte flere forsøg at finde den rigtige kombination, og hvert mislykket forsøg kan føles som et nederlag. Din tålmodighed betyder noget her.',
        'Hvad kan du konkret gøre? For det første: hold op med at normalisere. Når hun må aflyse, kaste op eller ligge på gulvet, så sig det højt: det er ikke normalt, det fortjener en læge. For det andet: hjælp med dokumentationen. Appen har datoerne; det, der mangler, er smertescore, sygedage og ledsagesymptomer, logget over tre cyklusser. Læger lytter til mønstre. For det tredje: tilbyd at tage med til lægen, og aftal på forhånd, hvad din rolle er. For det fjerde: hvis hun bliver afvist, så sig, at du tror på hende, og hjælp med at bede om en henvisning til gynækolog. Og for det femte: på de dårlige dage, tag det praktiske uden at spørge, og lad hende slippe for at forklare.',
        'En sidste ting. Hvis hun får diagnosen, kan det være både en lettelse og en sorg på samme tid. Endelig en forklaring, og samtidig noget, der ikke går over. Du behøver ikke at fikse den følelse. Du skal bare kunne rumme den og blive.',
      ],
      conversationQuestion:
        'Har du nogensinde haft smerter, hvor du tænkte "det her kan ikke være normalt", og hvad gjorde du med den tanke?',
      sources: [NHS_ENDO, ACOG_ENDO, NHS_ADENO],
    },
    {
      id: weeklyId(M, 2),
      month: M,
      week: 2,
      title: 'PCOS: mere end uregelmæssige cyklusser',
      body: [
        'Polycystisk ovariesyndrom, PCOS, er den mest almindelige hormonelle tilstand hos kvinder i den fødedygtige alder og rammer omkring 1 ud af 10. Alligevel er det en af de mest misforståede, både af omgivelserne og af sundhedsvæsenet, hvor det alt for ofte reduceres til "tab dig, så bliver det bedre". Denne artikel forklarer, hvad det er, hvordan det viser sig i hele kroppen, og hvordan du bakker op uden at blive endnu en stemme, der har meninger om hendes krop.',
        'Navnet er misvisende. "Cysterne" er umodne æg-follikler, ikke rigtige cyster, og man kan have PCOS uden dem. Kernen er en hormonel ubalance: æggestokkene producerer for meget af de mandlige kønshormoner, androgener, og ægløsningen bliver uregelmæssig eller udebliver. Diagnosen kræver to ud af tre kriterier: uregelmæssige eller udeblevne menstruationer, tegn på forhøjede androgener, enten i blodet eller synligt i hud og hår, og polycystiske æggestokke på ultralyd. Mange får diagnosen sent, fordi de enkelte symptomer behandles hver for sig af forskellige læger.',
        'I cyklussen betyder PCOS, at follikler begynder at modne, men ofte ikke gennemfører ægløsningen. Uden ægløsning dannes ikke progesteron, slimhinden bygger op uden at blive afstødt, og menstruationen kommer sent, sjældent eller slet ikke: cyklusser på 35-90 dage eller færre end otte om året. Når den endelig kommer, kan den være kraftig. For dig som partner betyder det, at appens forudsigelser bliver upræcise, fordi der ikke er et fast mønster at regne fra. Det er ikke noget, hun skal logge bedre; det er noget, der skal undersøges.',
        'Uden for cyklussen viser androgenerne sig på huden og i håret: akne længe efter teenageårene, øget hårvækst i ansigt og på krop, tyndere hår på hovedet. Mange har insulinresistens, hvor cellerne reagerer dårligere på insulin, kroppen laver mere, og det høje insulin får æggestokkene til at producere endnu flere androgener. Den onde cirkel forklarer, hvorfor vægt er sværere at styre, og hvorfor sult kan være voldsom. På langt sigt giver PCOS øget risiko for type 2-diabetes, forhøjet blodtryk og kolesterol, så blodsukker og blodtryk bør tjekkes jævnligt. Motion og regelmæssige måltider forbedrer reelt insulinfølsomheden, og det er derfor, læger nævner livsstil. Problemet er, når det er det eneste, de siger.',
        'Fertilitet er ofte den største bekymring. PCOS er en af de hyppigste årsager til nedsat fertilitet, fordi ægløsningen svigter. Men det er sværere, ikke umuligt: mange bliver gravide uden hjælp, og for resten findes veldokumenteret behandling, der sætter ægløsningen i gang. Ønsker I børn, er PCOS en grund til at søge hjælp tidligt frem for at vente. Ønsker I ikke børn, er uregelmæssig ægløsning ikke prævention.',
        'Det, der oftest overses, er humøret. Kvinder med PCOS har markant højere forekomst af angst, depression og spiseforstyrrelser. Hormonerne spiller ind, men det gør den daglige kamp med krop og selvbillede også, og oplevelsen af ikke at blive taget alvorligt. Få læger spørger til det. Du kan.',
        'Hvad kan du gøre? Nul kommentarer om vægt, hud eller hår, heller ikke "positive". Ingen kostråd, medmindre hun beder om dem. Fælles vaner frem for hendes projekt: en gåtur efter maden, mad I begge spiser. Læs op på tilstanden, så hun ikke skal forklare den. Spørg til, hvordan hun har det, ikke hvordan kroppen har det. Og tilbyd at tage med til lægen med en liste over alle symptomerne samlet, så de bliver set som ét billede.',
      ],
      conversationQuestion:
        'Er der noget ved din krop eller cyklus, du har lært at skjule eller ikke tale om, og hvad ville gøre det nemmere at sige højt til mig?',
      sources: [NHS_PCOS, ACOG_PCOS, SUNDHED_PCOS],
    },
    {
      id: weeklyId(M, 3),
      month: M,
      week: 3,
      title: 'Blødning, der afviger: for meget, for lidt, forkert tidspunkt',
      body: [
        'Blødning er det mest synlige i cyklussen, og alligevel er det svært for en partner at vurdere, hvad der er normalt. Denne artikel samler de tre måder, blødning kan afvige på: for kraftig, udebleven og på forkerte tidspunkter. Alle tre har almindelige årsager, som kan findes og behandles, og alle tre bliver ofte skubbet foran sig, fordi hun tror, det er normalt, eller fordi det er pinligt at tale om.',
        'Kraftig menstruation rammer omkring hver fjerde kvinde. Tegnene, læger bruger: bind eller tampon, der skal skiftes hver time i flere timer i træk; behov for to produkter samtidig; blødning gennem tøj eller sengetøj; klumper på størrelse med en 2-krone eller mere; blødning i over 7 dage; og et liv, der planlægges efter nærmeste toilet. Årsagerne er ofte fibromer, godartede muskelknuder i livmoderen, som op mod hver tredje kvinde får; adenomyose; polypper; hormonel ubalance med udebleven ægløsning; stofskifteproblemer; eller blødningsforstyrrelser. Ultralyd og blodprøver finder de fleste, og selv uden fundet årsag kan blødningen dæmpes med medicin eller hormonspiral.',
        'Den skjulte følgevirkning er jernmangel. Hver kraftig menstruation tømmer depoterne lidt mere, og det sker så gradvist, at hun vænner sig til trætheden. Tegn: en træthed, der ikke svarer til søvnen, åndenød på trapper, hjertebanken, bleg hud, svimmelhed, kolde hænder og fødder, skøre negle. Jernmangelanæmi er den mest almindelige mangeltilstand hos kvinder i den fødedygtige alder, og den kræver en blodprøve, ikke gætteri. Behandlingen er jerntilskud i måneder og samtidig at gøre noget ved blødningen. Jern på egen hånd uden blodprøve er ikke klogt; for meget er også skadeligt.',
        'Udebleven menstruation uden graviditet har oftest en forklaring, der ikke er farlig, men som fortjener opmærksomhed. Stærk eller langvarig stress bremser signalerne fra hjernen til æggestokkene. Lav vægt, hurtigt vægttab eller for lidt energi i forhold til træningen kan stoppe ægløsningen helt. Kraftig overvægt og PCOS forstyrrer på andre måder. Stofskiftesygdom, både lavt og højt, roder med cyklussen og er en simpel blodprøve at udelukke. Under amning hæmmer prolaktin ægløsningen i måneder, men ægløsning kan ske før første menstruation, så amning er ikke sikker prævention. Og perimenopausen, årene op til overgangsalderen, starter ofte tidligere, end par regner med, og ligner både PMS og stress. Udebliver menstruationen i over tre måneder, eller stopper den før 40, fortjener det en læge.',
        'Blødning mellem menstruationer er oftest harmløs: pletblødning omkring ægløsning, gennembrudsblødning på ny hormonel prævention, en glemt pille. Men blødning efter sex, gentagen blødning mellem menstruationer og enhver blødning efter overgangsalderen skal undersøges. Årsagerne kan være polypper, fibromer, infektion, celleforandringer på livmoderhalsen eller sjældent noget alvorligere. Det er præcis den slags, tidlig undersøgelse gør størst forskel ved, og præcis den slags, mange skubber. Sørg for, at hun får taget de screeninger, hun bliver inviteret til.',
        'Din rolle er praktisk og rolig. Læg mærke til, om der bliver købt dobbelt så mange produkter, om der er blod på sengetøjet, om hun er træt på en måde, søvn ikke retter. Nævn det uden drama: "Jeg har lagt mærke til, at du bløder meget. Det er der hjælp til, og jeg tager gerne med." Tilbyd at booke tiden. Sørg for, at der er jernrig mad i huset, men uden at gøre det til et projekt. Og hvis menstruationen er udeblevet, så spørg nysgerrigt frem for bekymret: er der pres på, spiser hun nok, træner hun mere end kroppen kan følge med til. Lyt uden at vurdere.',
        'Fællesnævneren for alle tre er den samme: blødning, der afviger, har oftest en grund, grunden kan findes, og det, der forsinker, er sjældent kroppen, men troen på, at det er normalt.',
      ],
      conversationQuestion:
        'Hvis du skulle beskrive din blødning for en læge i tre sætninger, hvad ville du sige, og er der noget i det, du aldrig har fået undersøgt?',
      sources: [NHS_HEAVY, NHS_MISSED, NHS_FIBROIDS, NHS_ANAEMIA],
    },
    {
      id: weeklyId(M, 4),
      month: M,
      week: 4,
      title: 'Til lægen sammen: forberedelse, opbakning og en anden mening',
      body: [
        'Alt, hvad denne måned har handlet om, ender samme sted: hos lægen. Og det er der, mange kvinder oplever, at det går galt. Ikke fordi læger er ligeglade, men fordi konsultationer er korte, symptomerne ligner andre ting, og en patient, der beskriver sidste måned efter hukommelsen, er nem at sende hjem med "se tiden an". Denne artikel handler om, hvordan I sammen gør besøget bedre, og hvad du gør, hvis hun bliver afvist.',
        'Det begynder med dokumentation. Læger arbejder med mønstre, og appen har allerede datoerne. Det, der gør forskellen, er tre cyklusser med smertescore, blødningsmængde, sygedage, aflysninger og ledsagesymptomer som smerte ved afføring, smerte ved sex eller kraftig nedtrykthed før menstruation. "Smerte 8 ud af 10 på dag 1-3 i seks cyklusser, sygedag hver gang" lukker døren for "alle har lidt ondt". For PMDD er to loggede cyklusser den formelle diagnosemetode. Du kan gøre logningen nemmere ved at aftale tre faste ting, hun logger hver dag, og ved at have kigget på mønstret selv, så I er enige om, hvad det viser.',
        'Dernæst forberedelsen. Skriv tre til fem spørgsmål ned, gerne i appen, så hun har dem på telefonen. "Hvad kan det være, og hvad kan udelukkes?" "Hvilke undersøgelser giver mening: blodprøver for jern og stofskifte, ultralyd, henvisning til gynækolog?" "Hvad er næste skridt, hvis det her ikke hjælper?" "Hvornår skal jeg komme igen?" Og: "Vil du skrive i journalen, at jeg har bedt om at få undersøgt det her?" Det sidste dokumenterer, at bekymringen er rejst, og gør det sværere at afvise samme bekymring næste gang. Læg gerne tiden i follikelfasen, hvor hun har overskud til at forberede og til at stå fast.',
        'Så selve besøget. Spørg, om hun vil have dig med, og respekter et nej. Hvis ja, så aftal på forhånd, hvad din rolle er: hukommelse, notetager og eventuelt den, der bekræfter, hvor slemt det er, hvis hun underdriver, hvilket mange gør i et konsultationsrum. Sid ved siden af, ikke foran. Tal ikke for hende. Stil kun spørgsmål, I har aftalt, eller spørg hende først. Din tilstedeværelse gør i sig selv en forskel; en patient med en pårørende ved siden af bliver sjældnere sendt hjem med et skuldertræk. Efter besøget: gennemgå, hvad der blev sagt, og hvad næste skridt er, og skriv det ned, mens I husker det.',
        'Og hvis hun bliver afvist? "Det er normalt." "Tab dig." "Prøv p-piller." "Du er nok stresset." Nogle gange er det rigtigt, og p-piller er faktisk en behandling for flere af tilstandene. Men når symptomerne fortsætter efter forsøget, er det et signal om at spørge igen. Hun har ret til at bede om en henvisning til gynækolog, til en anden mening og til at skifte læge. Det er ikke besværligt eller utaknemmeligt; det er sådan, de fleste med endometriose og PCOS til sidst fik deres diagnose. Det, der holder hende tilbage, er oftest tvivlen: "måske overdriver jeg". Her betyder din stemme noget. Du har set dagene. Du kan sige: du overdriver ikke, jeg var der, og så hjælpe med det praktiske.',
        'Til sidst: hvad enten hun får en diagnose eller ej, så er der et menneske i det. En diagnose kan være lettelse og sorg på samme dag. Et "vi fandt ikke noget" kan være både betryggende og frustrerende. Det, hun har brug for fra dig, er ikke løsninger eller opmuntring, men at du kan rumme det og bliver ved med at tage det alvorligt, også når det trækker ud. De fem sætninger fra dag 29 gælder hele vejen: det lyder hårdt, jeg tror på dig, hvad har du brug for, skal jeg tage med, vi finder ud af det sammen.',
        'Du kan ikke stille diagnosen. Men du kan sørge for, at hun møder op med et mønster i hånden, spørgsmål på telefonen og en ved sin side. Det er mere, end de fleste har med.',
      ],
      conversationQuestion:
        'Hvis du skulle til lægen med det, der bekymrer dig mest lige nu, hvad skulle jeg så gøre og ikke gøre for at være den bedste støtte?',
      sources: [NHS_ENDO, NHS_PCOS, NHS_HEAVY],
    },
  ],
  wrap: {
    id: wrapId(M),
    month: M,
    title: 'Måned 11: Når noget afviger',
    summary: [
      'Denne måned handlede om det, der falder uden for det normale, og om hvor almindeligt det er. Endometriose og PCOS rammer hver omkring 1 ud af 10, fibromer op mod hver tredje, kraftig blødning hver fjerde, og PMDD 3-8 procent. Alle kan behandles, og alle tager for lang tid at få stillet, fordi symptomerne normaliseres, ligner noget andet eller behandles hver for sig.',
      'Du har lært tegnene: smerte, der styrer dagen, blødning, der gennembløder, cyklusser, der springer måneder over, blødning mellem menstruationer eller efter sex, smerter ved sex, hud- og hårforandringer, og en træthed, der ikke svarer til søvnen. Du har lært, at appen kan være symptomdagbogen, som læger lytter til, at forberedte spørgsmål gør det sværere at blive sendt hjem, at du kan tage med uden at tage over, og at hun har ret til en anden mening.',
      'Vigtigst: du diagnosticerer ikke. Du siger "det fortjener en læge", "jeg tror på dig" og "skal jeg tage med?", og du tager det praktiske på de dårlige dage. Næste måned samler vi op på hele året og ser på livsfaserne: pubertet, tiden efter fødsel og perimenopause.',
    ],
    keepDoing: [
      'Sig "det fortjener en læge" i stedet for at normalisere smerte eller blødning.',
      'Hjælp med at logge smerte, blødning og ét symptom hver dag i tre cyklusser før en lægetid.',
      'Skriv spørgsmålene til lægen ned sammen, og tilbyd at tage med som støtte, ikke talsmand.',
      'Sig "jeg tror på dig", og hjælp med det praktiske, hvis hun vil have en anden mening.',
      'Nul kommentarer om vægt, hud og hår. Spørg til hende, ikke til kroppen.',
      'Hav en aftalt "dårlig dag"-besked og en plan for, hvad du gør, når den kommer.',
    ],
    quiz: [
      {
        question:
          'Hun kaster op af smerte og må melde sig syg de første to dage af hver menstruation, men siger "sådan har det altid været". Hvad hjælper mest?',
        options: [
          'Sige at det nok er endometriose',
          'Sige at det ikke er normalt, at det fortjener en læge, og tilbyde at logge smerten sammen i tre cyklusser',
          'Købe en bedre varmepude og stærkere smertestillende',
          'Respektere at hun kender sin krop bedst, og lade det ligge',
        ],
        correctIndex: 1,
        explanation:
          'Du stiller ikke diagnosen, men du normaliserer heller ikke. Et dokumenteret mønster over tre cyklusser er det, der får læger til at lytte.',
      },
      {
        question:
          'Hendes menstruationer er kommet med 50-70 dages mellemrum i et år, og appens skøn rammer aldrig. Hvad er den rigtige reaktion?',
        options: [
          'Bede hende logge mere præcist, så appen kan regne rigtigt',
          'Antage at det er stress og vente på, at det retter sig',
          'Sige at uregelmæssigheden i sig selv er værd at få undersøgt, og nævne at stofskifte og PCOS er almindelige forklaringer',
          'Foreslå at hun stopper med at bruge appen',
        ],
        correctIndex: 2,
        explanation:
          'Cyklusser over 35 dage eller under otte om året er et tegn i sig selv. Det er ikke et logningsproblem; det er noget, en læge bør se på med blodprøver og ultralyd.',
      },
      {
        question:
          'Hun har PCOS og nævner en aften, at hun hader den øgede hårvækst i ansigtet. Hvad er mest hjælpsomt at sige?',
        options: [
          '"Jeg lægger slet ikke mærke til det."',
          '"Har du prøvet at tabe dig? Det siger lægen jo hjælper."',
          '"Det må være hårdt at gå med. Jeg holder af dig, og det ændrer ingenting."',
          '"Det er der sikkert laser til."',
        ],
        correctIndex: 2,
        explanation:
          'At afvise, at det findes, eller springe direkte til løsninger, lukker samtalen. At anerkende, at det er hårdt, og gøre det tydeligt, at det ikke ændrer noget for dig, åbner den.',
      },
      {
        question:
          'Hun skifter tampon hver time, har blod på sengetøjet hver måned og er konstant træt. Hvad bør ske først?',
        options: [
          'Købe jerntilskud i supermarkedet og se, om trætheden forsvinder',
          'Foreslå en blodprøve for jern og en samtale med lægen om blødningen, og tilbyde at booke tiden',
          'Anbefale at hun sover mere',
          'Vente og se, om næste menstruation er lettere',
        ],
        correctIndex: 1,
        explanation:
          'Kraftig blødning plus træthed peger på jernmangel, som skal måles, ikke gættes. Både anæmien og blødningen kan behandles, og at booke tiden er konkret hjælp.',
      },
      {
        question:
          'Hun skal til lægen om sine smerter og vil gerne have dig med. Hvad er din bedste rolle derinde?',
        options: [
          'Føre ordet, så lægen forstår alvoren',
          'Sidde ved siden af, tage noter og kun sige det, I har aftalt på forhånd',
          'Vente udenfor, så hun kan tale frit',
          'Stille alle de spørgsmål, du selv har',
        ],
        correctIndex: 1,
        explanation:
          'Din tilstedeværelse gør en forskel, men det er hendes konsultation. Støtte og hukommelse, ikke talsmand. Aftal rollen før, ikke i rummet.',
      },
      {
        question:
          'Lægen sagde "prøv p-piller og se tiden an". Tre måneder senere er smerterne de samme, og hun siger: "måske overdriver jeg bare." Hvad hjælper mest?',
        options: [
          'Sige at lægen nok har ret, og at det tager tid',
          'Sige "du overdriver ikke, jeg var der", og tilbyde at hjælpe med at bede om henvisning til en gynækolog',
          'Foreslå at hun søger på nettet efter en diagnose',
          'Ringe til lægen selv og klage',
        ],
        correctIndex: 1,
        explanation:
          'Når symptomer fortsætter efter et forsøg, er det et signal om at spørge igen. Hun har ret til en anden mening, og din bekræftelse af, hvad du selv har set, er det, der ofte får hende til at bede om den.',
      },
    ],
  },
};
