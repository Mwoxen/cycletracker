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
const NHS_INSOMNIA: Source = {
  label: 'NHS: Insomnia',
  url: 'https://www.nhs.uk/conditions/insomnia/',
};
const NHS_CONSTIPATION: Source = {
  label: 'NHS: Constipation',
  url: 'https://www.nhs.uk/conditions/constipation/',
};
const NHS_BREAST_PAIN: Source = {
  label: 'NHS: Breast pain',
  url: 'https://www.nhs.uk/conditions/breast-pain/',
};
const ACOG_PMS: Source = {
  label: 'ACOG: Premenstrual Syndrome (PMS)',
  url: 'https://www.acog.org/womens-health/faqs/premenstrual-syndrome',
};
const SUNDHED_DK: Source = {
  label: 'Sundhed.dk: Menstruationscyklus',
  url: 'https://www.sundhed.dk/borger/patienthaandbogen/kvindesygdomme/om-kvindesygdomme/menstruationscyklus/',
};

const M = 5;

export const month05: MonthContent = {
  month: M,
  theme: 'Lutealfasen',
  focus: 'Progesteron, søvn og appetit: sænk forventningerne, og skru op for omsorgen.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'Det gule legeme: en midlertidig kirtel',
      insight:
        'Når ægget er frigivet, står den tomme follikel tilbage i æggestokken. Den kollapser ikke bare, den bliver til noget nyt: det gule legeme, corpus luteum. Det er en lille, midlertidig hormonkirtel, der lever i 12-14 dage og producerer progesteron og en smule østrogen. Det gule legeme har én opgave: at gøre livmoderen klar til et befrugtet æg og holde den klar, indtil kroppen ved, om der er en graviditet. Er der ikke det, visner det, og hormonerne falder. Hele lutealfasen, både den rolige begyndelse og den hårde slutning, er altså styret af én lille struktur, der vokser og dør hver eneste måned.',
      action:
        'Åbn appen, find hvornår ægløsningen er skønnet i denne cyklus, og tæl 12-14 dage frem. Det er lutealfasen, og det er den, denne måned handler om.',
      phaseTags: [],
      sources: [SUNDHED_DK],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: 'Progesteron: hormonet der holder igen',
      insight:
        'Progesteron er lutealfasens hormon, og det virker næsten modsat af østrogen. Hvor østrogen skærper, åbner og giver fart, dæmper progesteron. Det virker på de samme receptorer i hjernen som beroligende medicin, og et af dets nedbrydningsprodukter, allopregnanolon, er direkte sedativt. Derfor beskriver mange lutealfasen som at få skruet lidt ned for lyden: mindre trang til at være ude, mere lyst til at være hjemme, tidligere træt om aftenen. Det er ikke dovenskab eller nedtrykthed. Det er kemi, der beder kroppen om at samle sig. Når du ved det, kan du holde op med at tolke ro som afvisning.',
      action:
        'Hvis hun virker stille i aften, så lad være med at spørge "er der noget galt?". Sæt dig ved siden af hende, og vær stille med.',
      phaseTags: ['luteal'],
      sources: [SUNDHED_DK],
    },
    {
      id: dailyId(M, 3),
      month: M,
      day: 3,
      title: 'Temperaturen stiger',
      insight:
        'Progesteron hæver hvilekropstemperaturen med 0,3-0,5 grader, og den bliver oppe, så længe det gule legeme lever. Det er så pålideligt, at kvinder, der måler temperatur hver morgen, kan se ægløsningen bagudrettet: den dag, kurven hopper op, er dagen efter. For hende betyder det, at hun kan føle sig varm, sove mere uroligt og have det svært under en tyk dyne. Nogle mærker det tydeligt, andre slet ikke. Temperaturen falder igen lige før menstruationen, og det fald er en af grundene til, at kroppen føles anderledes de sidste dage. Et køligere soveværelse er den enkleste hjælp, du kan give.',
      action:
        'Spørg, om hun har lagt mærke til, at hun er varmere i anden halvdel af cyklussen. Læg en lettere dyne eller et tæppe frem, så der er valg i nat.',
      phaseTags: ['luteal', 'ovulation'],
      sources: [SUNDHED_DK],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'To uger, to forskellige stemninger',
      insight:
        'Lutealfasen er ikke én ting. Den første uge efter ægløsning er progesteron stigende, østrogen er stadig rimeligt højt, og resultatet er typisk ro, tilfredshed og en stille form for energi. Den sidste uge, når det gule legeme begynder at visne, falder begge hormoner, og det er der, træthed, sult, ømhed og irritabilitet melder sig. Mange partnere klumper hele fasen sammen som "tiden før menstruation" og går forsigtigt rundt i to uger. Det er unødvendigt. Den første uge er ofte en god uge for nærhed og hverdag. Det er den sidste, der kræver ekstra af dig.',
      action:
        'Find ud af, hvilken af de to uger hun er i nu. Er det den første, så nyd den. Er det den sidste, så ryd noget ud af kalenderen.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'Den rolige uge',
      insight:
        'Dagene lige efter ægløsning er cyklussens mest oversete gode tid. Ægløsningens intensitet er overstået, PMS er langt væk, og progesteron giver en jævn, hjemlig ro. Mange kvinder beskriver ugen som "tilfreds", "grounded" eller "nem at være i". Det er en fase, hvor hverdagen fungerer: madlavning, film, en gåtur, snak uden dagsorden. Nærhed føles ofte trygt og uden pres. Fordi ugen er så udramatisk, bliver den sjældent bemærket, hverken af hende eller dig. Det er synd, for det er en af de bedste uger til at bygge det op, I skal tære på i den hårde uge.',
      action:
        'Lav noget helt almindeligt sammen i aften, som I begge kan lide, uden skærm og uden formål. Læg mærke til, hvor let det er.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: 'Væske, der ikke vil ud',
      insight:
        'Progesteron og det faldende østrogen påvirker, hvordan nyrerne håndterer salt og væske, og resultatet er, at kroppen holder på vand i den sidste uge. Det kan give 1-2 kilo på vægten, en mave, der spænder, hævede fingre og ankler og tøj, der strammer, uden at hun har spist anderledes. Det forsvinder af sig selv, når menstruationen starter. Det, der hjælper lidt, er mindre salt, mere vand (paradoksalt, men kroppen slipper væske lettere, når den ikke er tørstig), bevægelse og kalium fra frugt og grønt. Det, der ikke hjælper, er at tale om det.',
      action:
        'Lav aftensmad med lidt salt og meget grønt i dag, og stil en kande vand på bordet. Sig intet om, hvorfor.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'Ømme bryster',
      insight:
        'Under progesteronens indflydelse vokser mælkekirtlerne en smule, og brystvævet holder på væske. Det gør brysterne tungere, tættere og ømme, nogle gange så meget, at et kram eller en seng på maven gør ondt. Ømheden, kaldet cyklisk brystsmerte, er helt normal og kommer typisk i den sidste uge før menstruationen. En god, støttende bh hjælper, det samme gør varme og almindelig smertestillende. Det vigtige for dig er berøringen: det, der var dejligt i sidste uge, kan være ubehageligt nu. Spørg, frem for at antage, og tag et "ikke i dag" uden at det bliver til noget om jer.',
      action:
        'Sig i dag: "Sig til, hvis noget gør ondt, når jeg krammer dig, så justerer jeg." Og gør det så uden at kommentere.',
      phaseTags: ['luteal'],
      sources: [NHS_BREAST_PAIN],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: 'Maven går langsommere',
      insight:
        'Progesteron afslapper glat muskulatur, og det gælder også tarmen. I lutealfasen bevæger maden sig langsommere gennem systemet, og mange oplever forstoppelse, tung mave og mere luft i ugen før menstruationen. Når blødningen starter, og prostaglandinerne tager over, slår det ofte om til det modsatte. Det er en af de mindst omtalte cyklusgener, og en af dem, der bidrager mest til følelsen af at være oppustet. Fibre, væske og bevægelse er det, der virker. En gåtur efter aftensmaden gør mere, end det lyder, og den er lettere at tage, når man er to.',
      action:
        'Foreslå en gåtur på 20 minutter efter aftensmaden i dag. Ikke motion, bare luft og bevægelse.',
      phaseTags: ['luteal'],
      sources: [NHS_CONSTIPATION],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'Hun har faktisk brug for mere mad',
      insight:
        'Kroppens hvileforbrug stiger i lutealfasen. Den højere temperatur, det gule legemes arbejde og opbygningen af livmoderslimhinden koster energi, og målinger viser et merforbrug på omkring 100-300 kalorier om dagen. Samtidig øger progesteron appetitten direkte. Det betyder, at sulten i anden halvdel af cyklussen er et reelt behov, ikke manglende disciplin. Kvinder, der prøver at spise det samme i alle faser, ender ofte med at være sultne, irritable og trætte i den sidste uge, og med at give sig selv skylden. Ekstra mad i lutealfasen er ikke at give efter. Det er at dække et behov.',
      action:
        'Læg en ekstra portion i madpakken eller på tallerkenen i dag, og sig "du må gerne være mere sulten i den her uge, det er normalt".',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 10),
      month: M,
      day: 10,
      title: 'Trang, blodsukker og serotonin',
      insight:
        'Trangen til sødt og hurtige kulhydrater i den sidste uge har en forklaring. Når østrogen falder, falder serotonin med, og kulhydrater er hjernens genvej til at hæve serotonin igen. Samtidig gør progesteron kroppen lidt mindre følsom for insulin, så blodsukkeret svinger mere: det stiger hurtigt og falder hurtigt, og faldet mærkes som pludselig sult, uro og kort lunte. Løsningen er ikke forbud, det gør trangen værre. Løsningen er stabilitet: regelmæssige måltider med protein og fibre, så faldene bliver mindre, og gerne en portion af det, hun har lyst til, uden dårlig samvittighed.',
      action:
        'Sørg for, at hun ikke når til at være sulten i dag: tilbyd noget at spise mellem måltiderne, før hun selv beder om det.',
      phaseTags: ['luteal'],
      sources: [ACOG_PMS],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'Søvnen bliver lettere og kortere',
      insight:
        'Den første uge efter ægløsning sover mange faktisk godt, fordi progesteron er sløvende. Problemet kommer i den sidste uge: kropstemperaturen er stadig høj, mens hormonerne falder, og begge dele forstyrrer den dybe søvn. Hun vågner oftere, ligger vågen midt på natten og vågner mindre udhvilet, selv om timerne er de samme. Dårlig søvn er den enkeltfaktor, der forstærker PMS mest, fordi alt andet, sult, irritation, sårbarhed, bliver værre af træthed. Et køligt, mørkt soveværelse, ingen skærm den sidste time og en fast sengetid gør en målbar forskel i netop den uge.',
      action:
        'Gør soveværelset klar til god søvn i aften: luft ud, sluk lys, læg telefonen i et andet rum, og gå i seng samtidig med hende.',
      phaseTags: ['luteal'],
      sources: [NHS_INSOMNIA],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: 'Træningen føles tungere',
      insight:
        'I lutealfasen ligger hjertefrekvensen lidt højere i hvile, kropstemperaturen er oppe, og kroppen sveder senere og holder dårligere på væsken. Det betyder, at den samme løbetur eller det samme træningspas objektivt føles hårdere, og at toppræstationer er sværere at hente. Det er ikke, fordi hun er i dårligere form. Det er, fordi motoren kører ved en anden temperatur. Mange kvinder skruer op for indsatsen, når det føles tungt, og ender med at være skuffede over sig selv. Bedre: at forvente mindre af de hårde pas, og at bruge fasen til roligere bevægelse, teknik og udholdenhed i lavt tempo.',
      action:
        'Hvis hun træner i dag: sig "det er normalt, at det føles tungere i den her uge". Hvis hun har aflyst træning: sig ingenting om det.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: 'Restitution tager længere tid',
      insight:
        'Det er ikke kun præstationen, der ændrer sig, det er også, hvor hurtigt kroppen kommer sig. I lutealfasen er den hormonelle støtte til muskelopbygning lavere, og søvnen er dårligere, så ømhed hænger ved, og træthed efter et hårdt pas varer længere. Kombineret med et større proteinbehov, som mange ikke dækker, betyder det, at hun kan gå ind i den sidste uge allerede slidt. Restitution er ikke passivitet. Det er søvn, mad med protein, væske og hviledage. Som partner kan du ikke træne for hende, men du kan fjerne det, der stjæler restitutionen: sene aftener, sprunget aftensmad, ting hun skal huske.',
      action:
        'Lav et måltid med ordentligt protein i dag, fx æg, fisk, kylling, bønner eller skyr, og servér det uden at gøre det til et projekt.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'Lysten til at være hjemme',
      insight:
        'Et af de tydeligste skift i lutealfasen er socialt. Hvor follikelfasen giver lyst til mennesker, nyt og ud, giver progesteron lyst til det kendte: sofaen, de nære, ro. Mange kvinder aflyser ting i den sidste uge, som de sagde ja til med begejstring to uger før, og føler sig skyldige over det. Det er ikke en karakterbrist, det er et hormonelt skift i, hvad der føles rart. For dig betyder det, at "skal vi ikke bare blive hjemme?" er et helt legitimt svar, og at det ikke er dig, hun trækker sig fra. Det er verden, hun trækker sig lidt fra, og du er en del af hjemmet.',
      action:
        'Foreslå selv en aften hjemme i denne uge, så det ikke bliver hende, der skal aflyse. Sig: "Jeg har mest lyst til at blive hjemme med dig."',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 15),
      month: M,
      day: 15,
      title: 'Kritik lander hårdere',
      insight:
        'Når serotonin falder i den sidste uge, ændrer hjernens filter sig. Neutrale bemærkninger bliver lettere tolket negativt, og en lille kritik føles som en stor. Det er dokumenteret i studier, hvor kvinder i den præmenstruelle fase reagerer stærkere på negative ansigtsudtryk og ord. Det er ikke, fordi hun er nærtagende. Det er, fordi følsomheden midlertidigt er skruet op. Så det, du i sidste uge kunne sige henkastet, "har du ikke ordnet det endnu?", rammer nu som en dom. Timing er igen gratis: gem den slags til follikelfasen, og sig i denne uge de ting, du sætter pris på, som du normalt glemmer at sige.',
      action:
        'Læg mærke til én ting i dag, du normalt ville rette eller kommentere, og lad være. Sig i stedet én konkret ting, hun gjorde godt.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'Planer lagt i follikelfasen',
      insight:
        'Her er et mønster, mange par kender uden at kunne forklare det. På dag 10 siger hun ja til middag hos venner, en weekendtur og at male køkkenet. På dag 25 føles det hele tungt, og hun forstår ikke selv, hvad hun tænkte på. Forklaringen er, at hun sagde ja med østrogen-hjernen, som er optimistisk og udadvendt, og skal levere med progesteron-hjernen, som vil have ro og det kendte. Ingen af de to er "den rigtige hende". Det praktiske svar er at lægge de krævende ting i første halvdel af cyklussen, og at være rundhåndet med aflysninger i den sidste uge uden at holde det op mod hende.',
      action:
        'Kig i kalenderen for den kommende uge. Er der noget krævende, der ligger i de sidste dage før menstruationen, så tilbyd at flytte det.',
      phaseTags: ['luteal', 'follicular'],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'Hvor lang er lutealfasen?',
      insight:
        'Lutealfasen er den mest stabile del af cyklussen. Det gule legeme lever en ret fast tid, typisk 12-14 dage, og alt mellem 10 og 16 dage regnes som normalt. Derfor er det follikelfasen, der forklarer, hvorfor en cyklus er 25 dage den ene måned og 32 den næste, mens afstanden fra ægløsning til menstruation stort set er den samme. Det er også derfor, appen regner ægløsning baglæns fra den forventede menstruation. Kender I hendes lutealfaselængde fra temperatur eller ægløsningstest, bliver skønnet meget bedre. Og kender I den ikke, er 14 dage et fornuftigt gæt.',
      action:
        'Spørg, om hun nogensinde har målt, hvor mange dage der går fra ægløsning til menstruation. Hvis ja, så tjek, at appens tal passer.',
      phaseTags: [],
      sources: [NHS_PERIODS, SUNDHED_DK],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'En kort lutealfase',
      insight:
        'Er der under 10 dage fra ægløsning til menstruation, kalder man det en kort lutealfase. Det gule legeme dør tidligere end normalt, eller producerer for lidt progesteron, og livmoderslimhinden får ikke tid nok til at blive klar. For de fleste betyder det ingenting i hverdagen. For par, der forsøger at blive gravide, kan det have betydning, fordi et befrugtet æg får kortere tid til at sætte sig fast, og det er værd at nævne for lægen. Stress, hård træning, lavt energiindtag, amning og stofskiftet kan alle forkorte fasen. Én kort cyklus siger intet. Et fast mønster over flere måneder er noget, en læge bør se på.',
      action:
        'Hvis I følger ægløsning og menstruationen ofte kommer under 10 dage efter, så sig: "Det her ville jeg nævne for lægen." Ellers: læs kortet igen og læg det væk.',
      phaseTags: [],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 19),
      month: M,
      day: 19,
      title: 'Ingen kommentarer om kroppen',
      insight:
        'I den sidste uge ser hun anderledes ud for sig selv: maven er spændt, brysterne er større, huden kan blusse op, og vægten er oppe af væske. Hun ved det bedre end dig, og hun har sandsynligvis allerede tænkt over det flere gange i dag. Enhver kommentar, også "du ser dejlig ud", der handler om udseendet, lander i et minefelt. "Har du taget på?" er selvsagt udelukket, men også "du ser træt ud" og "har du sovet dårligt?" fortæller hende, at det kan ses. Reglen er enkel: i lutealfasen er kroppen ikke et samtaleemne, medmindre hun selv bringer det op. Så lytter du.',
      action:
        'Beslut dig for, at du i denne uge ikke siger noget som helst om hendes krop, vægt, hud eller udseende. Heller ikke positivt.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 20),
      month: M,
      day: 20,
      title: 'Blid berøring, uden dagsorden',
      insight:
        'Berøring gør noget godt i lutealfasen, hvis den er den rigtige slags. Rolig, blid, uden forventning om, at den skal føre til noget. En hånd på ryggen, en fodmassage, at ligge tæt under et tæppe. Det sænker stresshormonet kortisol og øger oxytocin, og det virker, uanset hvor i cyklussen hun er. Men i den sidste uge er brysterne ømme, maven spændt, og lysten ofte lav, så berøring, der leder efter sex, kan føles som pres. Forskellen er tydelig for hende, også når den ikke er det for dig. Berøring, der bare er berøring, er en af de mest effektive former for omsorg, du har.',
      action:
        'Tilbyd en fodmassage eller en rygmassage på ti minutter i aften, og gør det klart, at det er det hele. Så holder det.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: 'Tag opgaver, ikke ansvar for humøret',
      insight:
        'Den mest effektive hjælp i den sidste uge er kedelig: at tage det praktiske fra hende. Ikke ved at spørge "hvad kan jeg gøre?", for det er endnu en opgave at svare på. Ved at se, hvad der ligger, og gøre det: opvasken, indkøb, madpakker, tøjvasken, en aftale, der skal flyttes, en telefon, der skal ringes. Hendes overskud er lavere, og alt, der fjernes fra hendes liste, kommer tilbage som ro. Det, du ikke skal tage, er ansvaret for hendes humør. Du kan ikke gøre hende glad, og det er ikke din opgave. Du kan gøre dagen lettere, og så er humøret hendes eget.',
      action:
        'Find tre ting på den fælles liste, der ville falde til hende i denne uge, og gør dem i dag uden at annoncere det.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 22),
      month: M,
      day: 22,
      title: 'Mad som omsorg',
      insight:
        'I lutealfasen bliver mad til mere end brændstof. Sult forstærker irritation, ustabilt blodsukker forstærker humørsvingninger, og det at skulle beslutte, hvad der skal spises, er en byrde i sig selv, når overskuddet er lavt. Det, der hjælper, er forudsigelighed: mad til tiden, uden at hun skal planlægge den, med protein og fibre, så den holder. Og det, hun har lyst til, uden en kommentar. Chokolade, når der er trang til chokolade, er ikke et nederlag; det er en forståelse af, hvad serotonin beder om. At lave mad til hende i denne uge, uden spørgsmål, er en af de klareste måder at sige "jeg ser dig" på.',
      action:
        'Tag ansvar for aftensmaden i dag: beslut, køb ind, lav den. Spørg højst "er der noget, du har særlig lyst til?"',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'Stille aftener',
      insight:
        'I follikelfasen kan en aften godt bestå af tre ting og et sted at være. I den sidste uge af lutealfasen har nervesystemet brug for mindre input: mindre lyd, færre mennesker, færre beslutninger. Det er der en fysiologisk grund til, fordi det faldende progesteron fjerner den beroligende effekt, hjernen har haft i to uger, og alt bliver lidt mere larmende. En stille aften er ikke en kedelig aften. Det er en aften, hvor hun ikke skal præstere: sofaen, et tæppe, en serie, I begge kender, eller slet ingenting. At du kan være i det uden at blive rastløs, er en gave, og en I begge har brug for.',
      action:
        'Tilbyd en aften helt uden planer i dag: ingen gæster, ingen ærinder, ingen "vi skal lige". Sluk det, der larmer, og bliv.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 24),
      month: M,
      day: 24,
      title: 'Koffein og alkohol rammer hårdere',
      insight:
        'To hverdagsting forstærker lutealfasens gener mere, end de fleste er klar over. Koffein er stimulerende og vanddrivende: det forstyrrer en søvn, der i forvejen er skrøbelig, og kan forværre brystømhed og uro. Alkohol sænker søvnkvaliteten markant, hæver kropstemperaturen om natten og forværrer det blodsukkerfald, der giver sult og kort lunte næste dag. Ingen af delene er forbudte, men effekten er større i den sidste uge end i resten af cyklussen. Det er ikke din opgave at kontrollere, hvad hun drikker. Det er din opgave at gøre det gode valg til det lette valg, uden at kommentere.',
      action:
        'Køb eller lav noget uden koffein og alkohol, hun kan lide, til i aften: te, en alkoholfri variant, saft med brus. Stil det frem uden at sige noget.',
      phaseTags: [],
      sources: [NHS_PMS, NHS_INSOMNIA],
    },
    {
      id: dailyId(M, 25),
      month: M,
      day: 25,
      title: 'Når menstruationen kommer, letter det',
      insight:
        'For mange er den første menstruationsdag, trods kramper og træthed, en lettelse. Progesteron er væk, temperaturen er faldet, væsken forlader kroppen, og hovedet klarer op. Brysterne holder op med at gøre ondt, maven falder til ro, og den følsomhed, der prægede de sidste dage, går af. Det er værd at vide, fordi det viser, at lutealfasens gener ikke er hendes "grundtilstand". De er en tilstand med en udløbsdato. Og det er en god dag at kvittere for, at I begge kom igennem den sidste uge, uden at gøre det til en sammenligning eller en gennemgang af, hvad der gik galt.',
      action:
        'Når blødningen starter, så sig: "Det var en hård uge, tak fordi du holdt ud." Og tag det praktiske de næste to dage.',
      phaseTags: ['menstrual'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 26),
      month: M,
      day: 26,
      title: 'Forbered lutealfasen i follikelfasen',
      insight:
        'Den bedste hjælp til lutealfasen gives to uger før. I follikelfasen er der overskud til at planlægge, og den sidste uge er der ikke. Så det er nu, kalenderen skal ryddes for de sidste 5-6 dage før menstruationen, at der skal fyldes op med gode snacks og nem mad, at den svære samtale skal tages, og at hun kan sige, hvad hun ønsker sig af den hårde uge, mens hun stadig har lyst til at tale om det. Tænk på det som at pakke til en rejse: det, der er pakket, behøver man ikke tænke på undervejs. Det tager ti minutter i den gode uge og sparer mange timer i den svære.',
      action:
        'Sæt en påmindelse i appen eller kalenderen 6 dage før forventet menstruation med teksten "sænk tempoet, fyld køleskabet". Så sker det automatisk.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 27),
      month: M,
      day: 27,
      title: 'Ægløsning er startskuddet',
      insight:
        'Lutealfasen kan kun begynde, hvis der har været en ægløsning. Uden ægløsning dannes der ikke noget gult legeme, ingen progesteron, ingen temperaturstigning, og den blødning, der eventuelt kommer, er ikke en rigtig menstruation, men et østrogen-styret gennembrud. Det sker i enkelte cyklusser for de fleste, oftere under stress, efter p-piller, ved PCOS og i årene før overgangsalderen. Det er derfor, temperaturkurven og ægløsningstesten er så nyttige: de viser, om der faktisk var en lutealfase. For dig betyder det, at "hun er i lutealfasen" i appen er et skøn, og at hendes egne tegn slår tabellen.',
      action:
        'Spørg, om hun mærkede tegn på ægløsning i denne cyklus. Hvis hun ikke gjorde, så ret dine forventninger til, hvad appen siger om de næste uger.',
      phaseTags: ['ovulation'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 28),
      month: M,
      day: 28,
      title: 'Log det, der plejer at drille',
      insight:
        'Lutealfasens gener er individuelle. Nogle får oppustethed men ingen ømme bryster, nogle sover elendigt, nogle bliver mest sultne, nogle mest følsomme. Det er umuligt at hjælpe præcist uden at vide, hvad hendes mønster er, og hukommelsen om sidste måned er upålidelig. Det er der, loggen hjælper: søvn, appetit, oppustethed, humør, ømhed, træningslyst. Efter to-tre cyklusser kan I se, om brystømheden altid starter dag 22, om søvnen svigter dag 24-27, om hun altid er sulten dag 25. Så kan du handle på datoen, ikke på symptomet, og det er forskellen på at reagere og at være forberedt.',
      action:
        'Spørg, hvilke tre lutealgener der plejer at ramme hende hårdest, og sørg for, at netop de tre bliver logget i denne cyklus.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 29),
      month: M,
      day: 29,
      title: 'Sænk forventningerne, ikke omsorgen',
      insight:
        'Månedens overskrift kan koges ned til én sætning: sænk forventningerne, og skru op for omsorgen. Forventningerne til socialt overskud, til træning, til sex, til projekter, til at hun "er som hun plejer". Omsorgen i form af mad, søvn, ro, praktisk hjælp, blid berøring og ingen kommentarer. Fejlen, mange partnere begår, er det modsatte: at holde forventningerne oppe og trække omsorgen tilbage, når hun bliver stille eller skarp, fordi det føles som afvisning. Det er præcis der, det vender. Den, der bliver, når det er svært, uden at kræve noget, er den, hun husker, når det bliver let igen.',
      action:
        'Vælg én forventning, du vil sænke i den kommende lutealfase, og én omsorgshandling, du vil gøre fast. Fortæl hende begge dele.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 30),
      month: M,
      day: 30,
      title: 'Måned 5: det har du lært',
      insight:
        'Du ved nu, at det gule legeme producerer progesteron i 12-14 dage, at progesteron beroliger, hæver temperaturen og sænker tempoet, og at lutealfasen har en rolig første uge og en hårdere sidste. Du ved, at væske, ømme bryster, langsom mave, sult og dårlig søvn har fysiske årsager, og at hun faktisk har brug for mere mad og mere hvile. Du ved, at kritik lander hårdere, at planer fra follikelfasen føles tunge, og at kroppen ikke er et samtaleemne. Og du ved, at hjælpen er konkret: mad, ro, opgaver, berøring uden dagsorden. Næste måned handler om PMS og PMDD, hvor det bliver sværest.',
      action:
        'Fortæl hende de tre ting, du vil gøre anderledes i den næste lutealfase. Tag så månedens quiz.',
      phaseTags: [],
    },
  ],
  weekly: [
    {
      id: weeklyId(M, 1),
      month: M,
      week: 1,
      title: 'Det gule legeme og de to uger',
      body: [
        'Lutealfasen er den halvdel af cyklussen, partnere ved mindst om, og den, hvor viden gør størst forskel. Måned 1 gav dig modellen: progesteron op giver ro, begge hormoner ned giver PMS. I denne måned går vi et lag dybere, for lutealfasen er mere end en optakt til menstruationen. Den er to uger med sin egen biologi, sin egen rytme og sine egne behov.',
        'Det hele starter med ægløsningen. Når folliklen brister og frigiver ægget, står der en tom hinde tilbage i æggestokken. I løbet af et par dage omdannes den til det gule legeme, corpus luteum, en midlertidig hormonkirtel, der lever i typisk 12-14 dage. Det gule legeme producerer progesteron, og en mindre mængde østrogen, og dets opgave er at gøre livmoderslimhinden tyk, blodrig og klar til at modtage et befrugtet æg. Sker der en graviditet, sender det tidlige foster et signal, der holder det gule legeme i live. Sker der ikke, visner det, hormonerne falder, og slimhinden afstødes som menstruation.',
        'Progesteron er et hormon, der holder igen. Det virker på de samme receptorer i hjernen som beroligende og søvndyssende midler, og et af dets nedbrydningsprodukter er direkte sedativt. Det hæver hvilekropstemperaturen 0,3-0,5 grader, så længe det gule legeme lever. Det afslapper glat muskulatur i tarm og blodkar. Det øger appetitten og påvirker, hvordan kroppen håndterer salt, væske og blodsukker. Kort sagt: progesteron beder kroppen om at sætte farten ned og samle sig. Det er ikke dårligt. Det er bare et andet gear end østrogenets.',
        'Det vigtigste at forstå er, at lutealfasen har to forskellige ansigter. Den første uge efter ægløsning stiger progesteron, mens østrogen stadig er pænt højt. Resultatet er for mange en rolig, tilfreds, hjemlig stemning: mindre trang til at være ude, mere lyst til det nære, en jævn form for energi og ofte god søvn. Det er en af cyklussens bedste uger til hverdag og nærhed, og en af de mest oversete, fordi den er så udramatisk.',
        'Den sidste uge er anderledes. Når det gule legeme begynder at visne, falder progesteron og østrogen sammen, og det er her, kroppen og hovedet reagerer: væske hober sig op, brysterne bliver ømme, maven går langsommere, sulten stiger, søvnen bliver lettere, og følsomheden over for kritik og støj skrues op. Temperaturen er stadig høj, mens hormonerne, der holdt den oppe, forsvinder, og den kombination er noget af det, der gør de sidste nætter så urolige.',
        'Mange partnere behandler hele lutealfasen som "tiden før menstruation" og går forsigtigt rundt i to uger. Det er unødvendigt, og det er spild af en god uge. Andre lægger ikke mærke til noget, før det bliver svært, og bliver så overraskede. Det bedste er at kende de to uger hver for sig: nyd den første, og forbered dig på den sidste. Appen viser, hvor hun er, men hendes egne tegn er mere præcise: temperatur, søvn, appetit, lyst til at være hjemme.',
        'I denne uge er din opgave at få øje på, hvilken uge hun er i, og at behandle dem forskelligt. I den rolige uge: hverdag, nærhed, det almindelige. I den hårde uge: færre planer, mere mad, mere ro, og ingen kommentarer om noget af det. Det er hele månedens program i én sætning.',
      ],
      conversationQuestion:
        'Kan du selv mærke forskel på den første og den sidste uge efter ægløsning? Hvad er det bedste ved den rolige uge, og hvad er det sværeste ved den sidste?',
      sources: [SUNDHED_DK, NHS_PERIODS, ACOG_PMS],
    },
    {
      id: weeklyId(M, 2),
      month: M,
      week: 2,
      title: 'Kroppen i den sidste uge: væske, bryster, mave og søvn',
      body: [
        'De fysiske gener i lutealfasens sidste uge er ikke indbildte, og de er ikke små. De forklarer en stor del af, hvorfor hun kan virke ubekvem, træt og kort for hovedet, uden at der er noget galt mellem jer. Her er, hvad der sker i kroppen, og hvad der faktisk hjælper.',
        'Væske først. Progesteron og det faldende østrogen ændrer, hvordan nyrerne håndterer salt, og kroppen begynder at holde på vand. Det kan give 1-2 kilo på vægten, en mave, der spænder og føles oppustet, hævede fingre og ankler og tøj, der strammer, uden at hun har spist anderledes. Det forsvinder inden for de første menstruationsdage. Mindre salt, mere vand, bevægelse og kalium fra frugt og grønt hjælper lidt. Kommentarer hjælper ikke. Hun ved, hvordan hun ser ud, og hun har allerede tænkt over det.',
        'Brysterne er næste. Under progesteronens indflydelse vokser mælkekirtlerne en smule, og vævet holder på væske. Brysterne bliver tungere, tættere og ømme, nogle gange så meget, at et almindeligt kram gør ondt. Det kaldes cyklisk brystsmerte, det er helt normalt, og det forsvinder, når blødningen starter. En støttende bh, varme og almindelig smertestillende hjælper. Det vigtige for dig er berøringen: det, der var rart i sidste uge, kan være ubehageligt nu. Spørg, og tag et nej uden at gøre det til noget.',
        'Maven går langsommere. Progesteron afslapper glat muskulatur, også i tarmen, så maden bevæger sig langsommere gennem systemet. Resultatet er forstoppelse, tung mave og mere luft i dagene før menstruationen, og ofte det modsatte, når blødningen starter, og prostaglandinerne tager over. Fibre, væske og bevægelse er det, der virker, og en gåtur efter aftensmaden gør mere, end det lyder. Det er en af de mindst omtalte cyklusgener, og en af dem, der bidrager mest til følelsen af at være oppustet og utilpas.',
        'Så søvnen. Den første uge efter ægløsning sover mange godt, fordi progesteron er sløvende. Den sidste uge er kropstemperaturen stadig oppe, mens hormonerne falder, og begge dele forstyrrer den dybe søvn. Hun vågner oftere, ligger vågen midt på natten og vågner mindre udhvilet. Det er den enkeltfaktor, der forstærker resten mest: sult, irritation og sårbarhed bliver alle værre af træthed. Et køligt, mørkt soveværelse, ingen skærm den sidste time, en fast sengetid og mindre koffein og alkohol gør en målbar forskel netop i den uge.',
        'Koffein og alkohol fortjener et ord for sig. Koffein er stimulerende og vanddrivende og kan forværre både brystømhed, uro og søvn. Alkohol sænker søvnkvaliteten, hæver kropstemperaturen om natten og forværrer det blodsukkerfald, der giver sult og kort lunte næste dag. Ingen af delene er forbudte, men de rammer hårdere i den sidste uge. Din opgave er ikke at kontrollere, hvad hun drikker. Din opgave er at gøre det gode valg til det lette valg: en god te, en alkoholfri variant, uden at sige noget om hvorfor.',
        'Hvad kan du helt konkret gøre i denne uge? Lav mad med lidt salt og meget grønt. Stil vand frem. Foreslå gåturen. Gør soveværelset køligt, og gå i seng samtidig. Spørg, før du krammer hårdt, og accepter svaret. Og hold alle kommentarer om krop, vægt og træthed for dig selv, også de venligt mente. Det lyder som lidt. For hende er det forskellen på en uge, hun kæmper sig igennem alene, og en uge, hvor der er én, der har forstået det.',
      ],
      conversationQuestion:
        'Hvilken af de fysiske gener, oppustethed, ømme bryster, mave eller søvn, generer dig mest i ugen før menstruation? Og er der noget, jeg gør, som gør den værre uden at vide det?',
      sources: [NHS_PMS, NHS_BREAST_PAIN, NHS_CONSTIPATION, NHS_INSOMNIA],
    },
    {
      id: weeklyId(M, 3),
      month: M,
      week: 3,
      title: 'Mad, træning og energi i lutealfasen',
      body: [
        'Der er en udbredt idé om, at kroppen bør fungere ens hele måneden, og at afvigelser er et spørgsmål om vilje. For en kvinde i lutealfasen er den idé direkte skadelig. Kroppen har andre behov i anden halvdel af cyklussen, og det gælder især mad, træning og hvile.',
        'Start med energiforbruget. I lutealfasen ligger kropstemperaturen højere, det gule legeme arbejder, og livmoderslimhinden bygges op. Det koster energi, og målinger viser et merforbrug på omkring 100-300 kalorier om dagen. Samtidig øger progesteron appetitten direkte. Sulten i den sidste uge er altså et reelt, fysiologisk behov. Kvinder, der prøver at spise det samme i alle faser, ender ofte sultne, trætte og irritable i den sidste uge, og med at bebrejde sig selv for det. Ekstra mad i lutealfasen er ikke at give efter. Det er at dække et behov, kroppen faktisk har.',
        'Så trangen. Når østrogen falder i den sidste uge, falder serotonin med, og kulhydrater er hjernens hurtigste vej til at hæve det igen. Samtidig gør progesteron kroppen lidt mindre følsom for insulin, så blodsukkeret svinger mere: det stiger hurtigt efter noget sødt og falder hurtigt igen, og faldet mærkes som pludselig sult, uro og kort lunte. Trangen til chokolade, brød og salt snacks er derfor biologi, ikke svag karakter. Forbud gør den værre. Det, der virker, er stabilitet: regelmæssige måltider med protein, fibre og langsomme kulhydrater, så udsvingene bliver mindre, plus en portion af det, hun har lyst til, uden dårlig samvittighed.',
        'Træningen føles tungere, og det er ikke indbildning. I lutealfasen er hvilepulsen lidt højere, kropstemperaturen oppe, og kroppen sveder senere og holder dårligere på væsken. Det samme løb, det samme sæt, føles objektivt hårdere, og toppræstationer er sværere at hente. Det betyder ikke, at hun er i dårligere form. Motoren kører bare ved en anden temperatur. Mange skruer op for indsatsen, når det føles tungt, bliver skuffede og presser sig selv endnu mere. Det kloge er det modsatte: at forvente mindre af de hårde pas i den sidste uge og bruge fasen til roligere bevægelse, teknik, gåture og udholdenhed i lavt tempo.',
        'Restitution tager også længere tid. Den hormonelle støtte til muskelopbygning er lavere, søvnen er dårligere, og proteinbehovet er større, end mange dækker. Ømhed hænger ved, og træthed efter et hårdt pas varer længere, så hun kan gå ind i den sidste uge allerede slidt. Restitution er ikke passivitet. Det er søvn, mad med protein, væske og hviledage, og det er alt sammen ting, der bliver sværere, når hverdagen er presset.',
        'Her kommer du ind. Du kan ikke spise eller træne for hende, men du kan fjerne det, der stjæler energi og restitution. Lav mad til tiden, med protein og noget, der holder. Sørg for, at der er snacks i huset, som er nemme at gribe: nødder, frugt, yoghurt, mørk chokolade. Tag ansvaret for aftensmaden i den sidste uge, så hun ikke skal beslutte noget. Sig "det er normalt, at det føles tungere nu", hvis hun kommer skuffet hjem fra træning, og sig ingenting, hvis hun har aflyst. Og lad være med at kommentere, hvad hun spiser, hverken mængden eller typen. Det gælder også "godt at se, du spiser ordentligt".',
        'Det samlede budskab er enkelt: hun har brug for mere mad, mindre pres og mere hvile i anden halvdel af cyklussen. Ikke fordi hun er svag, men fordi hendes krop laver noget, din ikke laver. Den partner, der forstår det, gør den sidste uge mærkbart lettere. Den, der ikke gør, bliver en ekstra ting at kæmpe med.',
      ],
      conversationQuestion:
        'Hvornår i cyklussen er du mest sulten, og hvornår føles træningen tungest? Er der noget, jeg kan gøre, så du slipper for at tænke på mad i den uge?',
      sources: [ACOG_PMS, NHS_PMS],
    },
    {
      id: weeklyId(M, 4),
      month: M,
      week: 4,
      title: 'Sindet i lutealfasen: hjemlighed, følsomhed og tunge planer',
      body: [
        'Kroppen er den ene halvdel af lutealfasen. Sindet er den anden, og det er ofte her, misforståelserne mellem partnere opstår. Ikke fordi hun bliver en anden, men fordi det, der føles rart, meningsfuldt og overkommeligt, skifter. Forstår du skiftet, kan du følge med i stedet for at stå tilbage og undre dig.',
        'Det første skift er socialt. Østrogen giver lyst til mennesker, nyt og ud. Progesteron giver lyst til det kendte: sofaen, de nære, ro. Mange kvinder aflyser i den sidste uge ting, de sagde ja til med begejstring to uger før, og føler sig skyldige over det. Det er ikke en karakterbrist. Det er et hormonelt skift i, hvad der føles godt. For dig betyder det, at "skal vi ikke bare blive hjemme?" er et legitimt svar, og at det ikke er dig, hun trækker sig fra. Det er verden, hun trækker sig lidt fra, og du er en del af hjemmet.',
        'Det andet skift er følsomhed. Når serotonin falder i den sidste uge, ændrer hjernens filter sig. Neutrale bemærkninger tolkes lettere negativt, og en lille kritik føles som en stor. Studier viser, at kvinder i den præmenstruelle fase reagerer stærkere på negative ansigtsudtryk og ord. Det er ikke, fordi hun er nærtagende. Følsomheden er midlertidigt skruet op. Så det henkastede "har du ikke ordnet det endnu?", som gik fint på dag 10, rammer nu som en dom. Gem den slags til follikelfasen, og brug den sidste uge til at sige de ting, du sætter pris på, som du normalt glemmer.',
        'Det tredje skift handler om planer. Her er et mønster, mange par kender: på dag 10 siger hun ja til middag hos venner, weekendtur og at male køkkenet. På dag 25 føles det hele tungt, og hun forstår ikke selv, hvad hun tænkte på. Forklaringen er, at hun sagde ja med østrogen-hjernen, optimistisk og udadvendt, og skal levere med progesteron-hjernen, der vil have ro. Ingen af dem er "den rigtige hende". Det praktiske svar er at lægge det krævende i første halvdel af cyklussen, at være rundhåndet med aflysninger i den sidste uge, og aldrig at holde et gammelt ja op mod hende.',
        'Et ord om længden. Lutealfasen er cyklussens mest stabile del: typisk 12-14 dage, og 10-16 regnes som normalt. Det er follikelfasen, der forklarer, hvorfor cyklussen varierer, ikke lutealfasen. Er der fast under 10 dage fra ægløsning til menstruation, kaldes det en kort lutealfase. For de fleste betyder det ingenting i hverdagen, men for par, der forsøger at blive gravide, er det værd at nævne for lægen, fordi et befrugtet æg får kortere tid til at sætte sig fast. Stress, hård træning, lavt energiindtag og stofskiftet kan alle forkorte fasen. En enkelt kort cyklus siger intet; et mønster over flere måneder fortjener en læge.',
        'Hvad gør du så? Månedens overskrift: sænk forventningerne, og skru op for omsorgen. Forventningerne til socialt overskud, træning, sex, projekter og til, at hun "er som hun plejer". Omsorgen i form af mad til tiden, stille aftener, opgaver du bare tager, blid berøring uden dagsorden og ingen kommentarer om krop eller udseende. Fejlen, mange begår, er det modsatte: at holde forventningerne oppe og trække omsorgen tilbage, når hun bliver stille eller skarp, fordi det føles som afvisning.',
        'Det bedste tidspunkt at forberede lutealfasen er i follikelfasen. Ryd kalenderen for de sidste 5-6 dage, fyld op med nem mad, tag den svære samtale, og spørg hende, hvad hun ønsker sig af den hårde uge, mens hun stadig har lyst til at tale om det. Det tager ti minutter i den gode uge og sparer timer i den svære. Og når menstruationen så kommer, og det hele letter, så kvitter for, at I kom igennem, uden gennemgang af, hvad der gik galt. Den, der bliver, når det er svært, uden at kræve noget, er den, hun husker, når det bliver let igen.',
      ],
      conversationQuestion:
        'Når du er i den sidste uge før menstruation, hvad vil du helst have, jeg gør, når du aflyser noget eller trækker dig: lader dig være, bliver hos dig eller tager over? Og hvordan ved jeg, hvad det er den dag?',
      sources: [NHS_PMS, NHS_PERIODS, ACOG_PMS],
    },
  ],
  wrap: {
    id: wrapId(M),
    month: M,
    title: 'Måned 5: Lutealfasen',
    summary: [
      'Denne måned handlede om cyklussens anden halvdel. Efter ægløsningen bliver den tomme follikel til det gule legeme, som producerer progesteron i 12-14 dage. Progesteron beroliger, hæver kropstemperaturen, afslapper tarmen, øger appetitten og får kroppen til at holde på væske. Den første uge efter ægløsning er ofte rolig og hjemlig; den sidste uge, når hormonerne falder, kommer oppustethed, ømme bryster, langsom mave, sult, dårlig søvn og en skruet-op følsomhed.',
      'Du har lært, at hun faktisk har brug for mere mad og mere hvile i lutealfasen, at trangen til sødt er blodsukker og serotonin, ikke svag vilje, at træning føles tungere og restitution tager længere, at kritik lander hårdere, og at planer lagt i follikelfasen føles tunge, når de skal leveres. Du har lært, at lutealfasen er stabil på 10-16 dage, og at en fast kort lutealfase er noget, en læge bør se på, hvis I forsøger at blive gravide.',
      'Vigtigst har du lært, hvad der hjælper: mad til tiden, stille aftener, opgaver du tager uden at spørge, blid berøring uden dagsorden, et køligt soveværelse og ingen kommentarer om krop eller udseende. Sænk forventningerne, og skru op for omsorgen. Næste måned går vi ind i PMS og PMDD, hvor det bliver sværest, og hvor det, du har lært nu, bliver afgørende.',
    ],
    keepDoing: [
      'Kend forskel på den rolige første uge og den hårde sidste uge, og behandl dem forskelligt.',
      'Tag ansvar for aftensmaden i den sidste uge, og sørg for snacks med protein i huset.',
      'Gør soveværelset køligt, og gå i seng samtidig med hende i de sidste dage før menstruation.',
      'Sig intet om krop, vægt, hud eller træthed i lutealfasen, heller ikke positivt.',
      'Tilbyd rolige aftener og blid berøring uden dagsorden, og accepter et nej uden at gøre det til noget.',
      'Ryd kalenderen for de sidste 5-6 dage før menstruation, mens I stadig er i follikelfasen.',
    ],
    quiz: [
      {
        question:
          'Det er dag 17, tre dage efter ægløsning, og hun virker rolig og tilfreds. Hvad passer bedst?',
        options: [
          'Gå forsigtigt rundt, PMS kan starte når som helst',
          'Nyde en almindelig, hyggelig aften sammen; den første lutealuge er ofte en god uge',
          'Spørge om hun er okay, fordi hun er så stille',
          'Foreslå en stor fest i weekenden, mens hun har det godt',
        ],
        correctIndex: 1,
        explanation:
          'Lutealfasen har to ansigter. Den første uge med stigende progesteron er typisk rolig og hjemlig, og ro er ikke det samme som at noget er galt. Det er den sidste uge, der kræver ekstra.',
      },
      {
        question:
          'Dag 25: hun siger, hun er sulten igen, en time efter aftensmaden, og virker flov over det. Hvad hjælper mest?',
        options: [
          'Foreslå et glas vand, sult er ofte tørst',
          'Sige at det er normalt at have brug for mere mad nu, og finde noget med protein til hende',
          'Minde hende om, at hun spiste en stor portion',
          'Sige ingenting og lade hende selv finde ud af det',
        ],
        correctIndex: 1,
        explanation:
          'Kroppen bruger 100-300 kalorier mere om dagen i lutealfasen, og progesteron øger appetitten. Sult er et reelt behov; at dække det uden kommentar stabiliserer både blodsukker og humør.',
      },
      {
        question:
          'Hun har i lutealfasen sovet dårligt tre nætter i træk og er kort for hovedet. Hvad er den mest konkrete hjælp i aften?',
        options: [
          'Foreslå at hun tager en lur i morgen',
          'Gøre soveværelset køligt og mørkt, lægge telefonerne væk og gå i seng samtidig',
          'Sige at det nok er hormonerne, og at det går over',
          'Skænke et glas vin, så hun kan falde til ro',
        ],
        correctIndex: 1,
        explanation:
          'Progesteron holder kropstemperaturen oppe, og de faldende hormoner gør søvnen let. Et køligt, mørkt rum uden skærm er det, der virker. Alkohol forværrer søvnkvaliteten og blodsukkeret næste dag.',
      },
      {
        question:
          'På dag 10 sagde hun ja til middag hos venner. Nu er det dag 26, og hun siger, hun ikke orker. Hvad virker bedst?',
        options: [
          '"Men du sagde selv ja, det er lidt sent at aflyse nu"',
          'Selv tage kontakt til vennerne og flytte det, uden at holde hendes ja op mod hende',
          'Tage af sted alene og sige, at hun er syg',
          'Overtale hende med, at det bliver hyggeligt, når hun først er der',
        ],
        correctIndex: 1,
        explanation:
          "Ja'et blev sagt med østrogen-hjernen, og leveringen falder i den sidste lutealuge. Læg det krævende i første halvdel af cyklussen, og vær rundhåndet med aflysninger i den sidste uge.",
      },
      {
        question:
          'Hun tager en trøje på, kigger i spejlet og sukker. Det er dag 24. Hvad er det klogeste at sige?',
        options: [
          '"Du ser da dejlig ud"',
          '"Du er nok lidt oppustet, det er bare væske"',
          'Ingenting om kroppen; i stedet noget konkret, du sætter pris på, som ikke handler om udseende',
          '"Skal vi ikke gå en tur, så det letter?"',
        ],
        correctIndex: 2,
        explanation:
          'I lutealfasen er kroppen ikke et samtaleemne, medmindre hun selv bringer det op. Selv velmente kommentarer fortæller hende, at det kan ses. Anerkend noget andet, ægte og konkret.',
      },
      {
        question:
          'I forsøger at blive gravide, og hendes menstruation kommer fast 8 dage efter ægløsningstesten er positiv. Hvad er den rigtige reaktion?',
        options: [
          'Det er normalt, lutealfasen varierer meget',
          'Foreslå at hun stresser mindre, så retter det sig',
          'Sige at et fast mønster med kort lutealfase er noget, I bør nævne for lægen, og tilbyde at tage med',
          'Vente et halvt år og se, om det ændrer sig',
        ],
        correctIndex: 2,
        explanation:
          'Under 10 dage fra ægløsning til menstruation kaldes en kort lutealfase. Én kort cyklus siger intet, men et fast mønster kan gøre det sværere for et befrugtet æg at sætte sig fast, og det fortjener en læge.',
      },
    ],
  },
};
