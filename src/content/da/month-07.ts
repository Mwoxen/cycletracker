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
  label: 'Sundhed.dk: Præmenstruelt syndrom (PMS)',
};
const NHS_CBT: Source = {
  label: 'NHS: Kognitiv adfærdsterapi (CBT)',
};

const M = 7;

export const month07: MonthContent = {
  month: M,
  theme: 'PMS og PMDD',
  focus:
    'Forstå humørsvingninger og irritabilitet, så du ikke tager dem personligt og faktisk kan hjælpe.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'Faldet, dag for dag',
      insight:
        'I måned 1 lærte du, at PMS er et hormonfald. Nu går vi tættere på. Det gule legeme, der har produceret progesteron siden ægløsningen, begynder at dø cirka en uge før menstruationen. Progesteron og østrogen falder ikke på én dag, men gradvist over 5-7 dage, og symptomerne følger kurven: først en let uro og kortere lunte, så tårer, sult og dårlig søvn, og de sidste to-tre dage typisk det hårdeste. Når blødningen begynder, er faldet overstået, og det meste letter inden for et døgn. Det betyder, at du ikke bare kan vide, at hun er i vinduet, men også hvor i vinduet. Dag 24 og dag 27 er ikke det samme.',
      action:
        'Slå op i appen, hvor mange dage der er til forventet menstruation, og læg mærke til, om det passer med, hvordan hun har det i dag.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS, SUNDHED_PMS],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: 'Serotonin: hvorfor humøret følger med ned',
      insight:
        'Østrogen støtter hjernens produktion og brug af serotonin, det signalstof der holder humøret stabilt, dæmper angst og regulerer søvn og appetit. Når østrogen falder, falder serotoninaktiviteten med. Det er derfor, PMS-dagene ligner en miniudgave af det, man ser ved lavt serotonin generelt: nedtrykthed, irritabilitet, trang til sødt, dårlig søvn. Progesteron nedbrydes samtidig til et stof, der normalt virker beroligende på hjernen, og også det forsvinder. Det interessante er, at hormonniveauerne hos kvinder med svær PMS typisk er helt normale. Det er hjernens følsomhed over for udsvingene, der er forskellig. Hun har ikke "for mange hormoner". Hendes hjerne reagerer kraftigere på de samme skift.',
      action:
        'Sig sætningen til dig selv i dag: "Det er ikke hormonmængden, det er følsomheden." Det ændrer, hvordan du ser på hende i de dage.',
      phaseTags: [],
      sources: [ACOG_PMS],
    },
    {
      id: dailyId(M, 3),
      month: M,
      day: 3,
      title: 'PMS er ikke én ting',
      insight:
        'Over 150 forskellige symptomer er beskrevet ved PMS, og ingen har dem alle. De fysiske: oppustethed, ømme bryster, hovedpine, trætthed, sult, søvnproblemer, ledsmerter. De psykiske: irritabilitet, tristhed, angst, tårer, koncentrationsbesvær, følelsen af at miste kontrollen. Kombinationen er personlig og ret stabil fra måned til måned. Én kvinde bliver stille og træt, en anden kort for hovedet og rastløs, en tredje sørgmodig. Den generelle PMS-viden hjælper dig et stykke, men det er hendes profil, du skal kende. Det tager to-tre cyklusser at få øje på den, og den står i kalenderen, hvis I logger.',
      action:
        'Spørg hende: "Hvad er de to-tre ting, du selv mærker tydeligst i ugen før?" Skriv svaret i en note i appen.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'Forstærkeren, i dybden',
      insight:
        'Du kender sætningen: PMS forstærker følelser, den opfinder dem ikke. Her er, hvad det betyder i praksis. Forestil dig, at alle hendes reaktioner normalt går gennem et filter, der sorterer det små fra og dæmper det store. I PMS-dagene er filteret tyndere. Det, der på dag 10 registreres som en lille irritation og glemmes, kommer på dag 26 igennem i fuld størrelse. Det gælder også det positive: en kærlig sætning kan ramme dybere. Det vigtige for dig er, at indholdet er ægte. Hvis hun er vred over, at du glemte noget, er det ikke hormonerne, der har fundet på, at du glemte det. Lydstyrken er hormonel. Emnet er reelt. Begge dele fortjener at blive taget alvorligt.',
      action:
        'Tænk tilbage på jeres seneste PMS-konflikt, og adskil de to lag: hvad var emnet, og hvad var lydstyrken? Emnet er det, du skal handle på.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'PMDD: når det er mere end PMS',
      insight:
        'Præmenstruel dysfori, PMDD, er den svære form. Den rammer 3-8 procent af kvinder i den fødedygtige alder og er en anerkendt diagnose, ikke "slem PMS". Forskellen er graden: ved PMDD er de psykiske symptomer så voldsomme, at de forstyrrer arbejde, relationer eller hverdag i en uge eller mere hver eneste måned. Svær nedtrykthed, angst, raseri, håbløshed, og hos nogle tanker om ikke at ville leve. Symptomerne forsvinder næsten helt, når blødningen kommer, og de gode uger er virkelig gode. Det er netop kontrasten, der gør PMDD så opslidende, og som gør, at mange går år uden at blive taget alvorligt. Der findes behandling, der virker. Første skridt er at få det set.',
      action:
        'Læs beskrivelsen igen, og vær ærlig: lyder det som hendes hverdag i ugen før? Hvis ja, så læs videre i denne måned før du siger noget.',
      phaseTags: [],
      sources: [NHS_PMS, ACOG_PMS],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: 'Timingen er beviset',
      insight:
        'Det, der adskiller PMS og PMDD fra depression og angst, er ikke symptomerne, men kalenderen. Ved PMDD er der en tydelig symptomfri periode i follikelfasen, typisk fra menstruationens slutning til omkring ægløsning. Ved depression er der ikke. Nogle kvinder har begge dele: en underliggende depression, der forværres markant i ugen før, det kaldes præmenstruel forværring. Det er derfor, lægen beder om en dagbog, ikke bare en beskrivelse. Hukommelsen husker de hårde dage og glemmer de gode. Nu, hvor blødningen er i gang, er det et godt tidspunkt at lægge mærke til skiftet: kommer hun tilbage til sig selv inden for et par dage? Det er svaret på et vigtigt spørgsmål.',
      action:
        'Læg mærke til, om humøret letter, nu hvor menstruationen er i gang. Skriv i noten til i dag: "bedre" eller "uændret".',
      phaseTags: ['menstrual'],
      sources: [ACOG_PMS],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'To cyklusser med dagbog',
      insight:
        'Hvis I overvejer, om det kunne være PMDD, har I allerede værktøjet. Diagnosen stilles på baggrund af daglige registreringer over mindst to cyklusser, hvor symptomerne skal være til stede i ugen før menstruationen og væk i ugen efter. Læger kalder det prospektiv registrering, og det er ikke bureaukrati. Det er den eneste måde at adskille PMDD fra andre tilstande på. Appens kalender er præcis sådan en dagbog, hvis den udfyldes hver dag, også de gode dage. Især de gode dage. Det er "ingen symptomer" på dag 8, der gør "voldsom angst" på dag 26 til et mønster og ikke bare til en dårlig dag.',
      action:
        'Foreslå, at I logger humør hver dag i de næste to cyklusser, og tilbyd at være den, der minder om det, hvis hun vil have det.',
      phaseTags: [],
      sources: [ACOG_PMS, SUNDHED_PMS],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: 'Der findes behandling, der virker',
      insight:
        'Det er værd at vide, før I overvejer en læge: PMDD og svær PMS kan behandles, og valgmulighederne er flere, end de fleste tror. SSRI-præparater, den type medicin der også bruges mod depression, virker ved PMDD ofte inden for få dage i stedet for uger, og nogle tager dem kun i de sidste to uger af cyklussen. Hormonel prævention, der holder ægløsningen tilbage, fjerner udsvingene for nogle. Kognitiv adfærdsterapi lærer teknikker til at håndtere tankerne, når de kommer. Regelmæssig motion, søvn og måltider dæmper det hele. Det er lægens opgave at vælge. Din opgave er at vide, at der er noget at vælge imellem, så "det er bare sådan, det er" ikke bliver det sidste ord.',
      action:
        'Gem denne sætning til en dag, hvor hun tvivler: "Det kan behandles, og du behøver ikke finde ud af hvordan alene."',
      phaseTags: [],
      sources: [NHS_PMS, ACOG_PMS],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'Afvisningsfølsomhed',
      insight:
        'Et af de mindst kendte og mest forstyrrende PMS-symptomer er en skærpet følsomhed over for afvisning. En kort besked, et "mm" i stedet for et svar, at du kigger på telefonen, mens hun taler, eller at du går i seng uden at sige godnat. Ting, der på dag 10 ikke registreres, føles på dag 26 som bevis på, at du er ligeglad. Det er ikke usikkerhed i forholdet, det er en hjerne med lavt serotonin, der leder efter fare. Det hjælper ikke at sige "det var ikke sådan ment". Det hjælper at forebygge: lidt mere tydelighed, lidt mere blik, lidt mere "jeg er her", i netop de dage. Det koster dig ingenting og sparer jer begge en del.',
      action:
        'Læg telefonen væk, når hun taler til dig i dag, og sig godnat med øjenkontakt. Små signaler, der lander stort lige nu.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 10),
      month: M,
      day: 10,
      title: 'Angst og uro',
      insight:
        'Mange kvinder beskriver PMS-angst som en motor, der kører for højt: uro i kroppen, tanker der kører i ring, bekymring om ting, der ellers er håndterbare, og nogle gange en følelse af, at noget forfærdeligt er ved at ske uden at kunne sige hvad. Det hænger sammen med, at det beroligende stof, progesteron nedbrydes til, forsvinder sammen med hormonfaldet. Angst i denne fase er ikke et tegn på, at hun er svag, og ikke et tegn på, at der er noget galt i jeres liv. Det hjælper ikke at argumentere med angsten eller at bevise, at bekymringen er ubegrundet. Det hjælper at være rolig, konkret og tæt på: "Jeg er her. Vi tager én ting ad gangen."',
      action:
        'Hvis hun virker urolig i dag, så spørg ikke "hvad er der galt?", men sig: "Skal vi gå en tur, eller vil du hellere have, jeg bare sidder her?"',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'Tårer, der sidder løst',
      insight:
        'Gråd i PMS-dagene kommer ofte pludseligt og over noget, der ikke virker stort: en reklame, et rodet køkken, en kommentar. Hun ved det selv og bliver ofte flov eller irriteret over det, hvilket giver flere tårer. Det, der sker, er en lav tærskel, ikke en stor sorg. Det værste, du kan gøre, er at kræve en forklaring eller at gå i gang med at løse det, hun græder over. Det bedste er kedeligt: at være der, tilbyde en hånd eller en kop te, og lade det gå over af sig selv. Hvis der er noget bag tårerne, kommer det frem, når hun er klar. Og det er i orden at sige "du behøver ikke forklare".',
      action:
        'Næste gang tårerne kommer: sæt dig ved siden af hende, sig "du behøver ikke forklare", og bliv siddende i fem minutter uden at gøre noget.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: 'Raseri: den svære følelse',
      insight:
        'Vrede er det PMS-symptom, både hun og du helst vil undgå at tale om. Men det er et af de mest almindelige ved PMDD: en pludselig, kropslig vrede, der kommer hurtigt og føles ude af proportion, også for hende selv. Mange beskriver bagefter, at de så sig selv udefra og ikke kunne stoppe. Det er ikke en undskyldning for at behandle dig dårligt, og det vender vi tilbage til. Men det er vigtigt at forstå, at vreden i det øjeblik ofte er mere fysiologi end hensigt. Det, der eskalerer, er at svare igen med samme styrke. Det, der de-eskalerer, er at sænke din egen stemme, tage en pause og vende tilbage senere.',
      action:
        'Aftal med dig selv én sætning til næste gang, det koger over: "Jeg går i køkkenet i ti minutter, og så kommer jeg tilbage." Sig den roligt, og hold den.',
      phaseTags: ['luteal'],
      sources: [ACOG_PMS],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: 'Hjernetåge',
      insight:
        'Koncentrationsbesvær, glemsomhed og følelsen af at tænke gennem vat er almindelige i dagene før menstruation, og de forsvinder ligesom de andre symptomer, når blødningen begynder. Det hænger sammen med både serotoninfaldet og den dårlige søvn i lutealfasen. Hjernetåge er frustrerende for hende, især i et job, der kræver overblik, og den giver nemt konflikter derhjemme: hun glemmer en aftale, mister overblikket over ugen, eller kan ikke tage en beslutning. Det, der hjælper, er at tage kognitiv belastning fra: færre valg, kortere beskeder, én ting ad gangen. Det er ikke at tale ned til hende. Det er at tage noget fra i en uge, hvor det er tungt.',
      action:
        'Tag én planlægningsopgave fra hende i dag: aftensmaden, en aftale der skal flyttes, eller en besked der skal svares på. Sig bare "den tager jeg".',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'Sådan svarer du på skarp tone',
      insight:
        'I måned 1 lærte du at reagere på behovet, ikke på tonen. Her er teknikken i tre trin. Ét: hold en pause på tre sekunder, før du siger noget. Det lyder banalt, men det er de tre sekunder, der afgør, om du forsvarer dig eller lytter. To: oversæt sætningen i hovedet. "Du hjælper aldrig til" bliver "jeg føler mig alene med det". Tre: svar på oversættelsen, ikke på ordene. "Det lyder som om du står med for meget. Hvad tager jeg nu?" Hvis du rammer forkert, retter hun dig, og det er fint. Hvis tonen fortsætter, selv om du har svaret på behovet, er det tid til en pause, ikke til en kamp. Det får du mere om senere på måneden.',
      action:
        'Øv de tre sekunder i dag, i en hvilken som helst samtale: træk vejret én gang, før du svarer. Det skal sidde i kroppen, når du får brug for det.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 15),
      month: M,
      day: 15,
      title: 'Reparation efter en konflikt',
      insight:
        'Alle par har konflikter i PMS-vinduet, uanset hvor godt de forstår mekanismen. Det, der afgør, om forholdet tager skade, er ikke konflikten, men reparationen bagefter. Når blødningen er begyndt og roen vendt tilbage, er der et vindue til at samle op. Det skal ikke være en retssag om, hvem der sagde hvad. Det skal være kort: hvad skete der, hvad kan vi gøre anderledes næste gang, og er der noget, en af jer skal sige undskyld for. Hun kan godt sige undskyld for tonen, uden at det betyder, at emnet var forkert. Du kan sige undskyld for at forsvare dig, uden at det betyder, at du fortjente tonen. Begge dele kan være sande.',
      action:
        'Hvis der var en konflikt i den seneste PMS-uge, så sig i dag: "Kan vi lige tale om i sidste uge, kort? Ikke for at finde skyld, bare for at lære af det."',
      phaseTags: ['menstrual'],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'Sætninger, du skal lade blive i munden',
      insight:
        'Du kender de klassiske: "Er du PMS-ramt?", "Det er bare hormonerne", "Du overreagerer". Her er de mindre åbenlyse, der gør lige så meget skade. "Du var også sådan sidste måned" bruger kalenderen som våben. "Jeg siger jo ingenting" er en forsvarstale forklædt som uskyld. "Jeg kan ikke gøre noget rigtigt" gør hendes symptom til dit problem. "Skal vi ikke tage den, når du er dig selv igen?" siger, at hun ikke er sig selv nu. Fællesnævneren er, at de alle handler om dig og gør hende til problemet. Det er ikke forbudt at have brug for en pause. Det er måden, det siges på: "Jeg trænger til ti minutter, og så er jeg tilbage" siger det samme uden at ramme.',
      action:
        'Find den ene af sætningerne, du er mest tilbøjelig til at bruge, og skriv dit alternativ ned på en note i din telefon.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'Det, der faktisk hjælper at sige',
      insight:
        'De sætninger, der virker i PMS-dagene, har tre ting til fælles: de anerkender, de kræver ikke noget, og de tilbyder noget konkret. "Det lyder hårdt. Jeg er her." "Du behøver ikke forklare." "Jeg tager aftensmaden, læg dig bare." "Vil du have, jeg bliver, eller skal du have lidt fred?" "Jeg ved, det er en tung uge, og jeg synes, du klarer den godt." Læg mærke til, hvad der ikke er med: ingen forklaringer på, hvorfor hun har det sådan, ingen forslag til, hvad hun burde gøre, ingen spørgsmål der kræver et svar med begrundelse. Hun ved godt, hvad der sker i hendes krop. Hun har ikke brug for information, hun har brug for selskab.',
      action:
        'Vælg én af sætningerne, og sig den til hende i dag, uden anledning og uden at forvente noget igen.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'Hendes egne strategier',
      insight:
        'De fleste kvinder, der har haft PMS i mange år, har udviklet deres egne måder at komme igennem ugen på. Nogle løber, nogle går tidligt i seng, nogle aflyser alt socialt, nogle har brug for at være alene, nogle det modsatte. Nogle ved, at et bestemt måltid, et bad eller en bestemt serie hjælper. Du kender måske nogle af dem, men sjældent alle, fordi hun ikke har sat ord på dem. Follikelfasen er det rigtige tidspunkt at spørge, for nu er der overskud til at tænke over det, og det føles ikke som kritik. Det er ikke din opgave at finde bedre strategier. Det er at kende hendes, så du kan bakke dem op i stedet for at stå i vejen for dem.',
      action:
        'Spørg i dag: "Hvad gør du selv, der hjælper i ugen før? Og hvad gør jeg nogle gange, der forstyrrer det?" Lyt til det sidste uden at forsvare dig.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 19),
      month: M,
      day: 19,
      title: 'Støt strategien uden at overtage den',
      insight:
        'Når du kender hendes strategier, er fristelsen at administrere dem: "Skulle du ikke løbe i dag?" "Du sagde jo, du ville i seng klokken ti." Det er velment og lander som kontrol, især i en uge hvor følsomheden for kritik er høj. Støtte ser anderledes ud. Det er at rydde vejen: tage børnene, så hun kan løbe, uden at nævne løbeturen. Gøre soveværelset klar klokken halv ti uden at sige, at hun burde gå i seng. Lade være med at foreslå gæster i den uge. Og acceptere, at strategien nogle dage er at ligge på sofaen, og at det også er en strategi. Du hjælper mest, når hun ikke skal bruge energi på at forklare eller forsvare det, hun gør.',
      action:
        'Vælg én af hendes strategier, og gør plads til den i dag uden at kommentere på det: tag en opgave, ryd en time eller lad være med at planlægge noget.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 20),
      month: M,
      day: 20,
      title: 'Søvn, mad og bevægelse som medicin',
      insight:
        'De tre ting, der har bedst dokumentation for at dæmpe PMS uden medicin, er også de tre, der er sværest at holde fast i, netop når man har PMS: regelmæssig motion, nok søvn og regelmæssige måltider. Motion øger serotonin og dæmper angst, søvn stabiliserer humøret, og jævne måltider forhindrer de blodsukkerfald, der forstærker irritabilitet mere end noget andet. Mindre alkohol og koffein i den uge hjælper også flere, end der tror på det. Det er ikke din opgave at sætte hende på et program. Det er at gøre de tre ting nemme: en gåtur sammen efter aftensmaden, en tidlig aften uden skærm, og at der er mad i huset, så måltidet ikke bliver sprunget over.',
      action:
        'Foreslå en gåtur på 20 minutter efter aftensmaden i dag, uden dagsorden. Går hun ikke med, så lav en tidlig aften i stedet.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: 'Hvornår det fortjener en læge',
      insight:
        'Du kan ikke afgøre, om det er PMS eller PMDD, og det skal du heller ikke. Men der er tegn, der betyder, at det bør vurderes: hvis symptomerne hver måned forstyrrer hendes arbejde, relationer eller hverdag. Hvis hun selv siger, at hun ikke kan genkende sig selv i den uge. Hvis der er tanker om ikke at ville leve, også selv om de "kun" kommer i PMS-dagene. Hvis I begge frygter ugen på forhånd. Hvis hun har prøvet det, hun kunne selv, og det ikke er nok. Ét af tegnene er nok. Ved tanker om selvmord skal det være nu, ikke efter to cyklusser med dagbog. Alt andet kan vente på det rigtige tidspunkt at tale om det.',
      action:
        'Gå listen igennem for dig selv i dag. Genkender du ét eller flere tegn, så læs morgendagens kort, før du siger noget.',
      phaseTags: [],
      sources: [NHS_PMS, SUNDHED_PMS],
    },
    {
      id: dailyId(M, 22),
      month: M,
      day: 22,
      title: 'Sådan foreslår du en læge',
      insight:
        'At foreslå en læge kan lyde som "der er noget galt med dig", hvis det siges forkert eller på det forkerte tidspunkt. Det forkerte tidspunkt er midt i PMS-ugen. Det rigtige er nu, i follikelfasen, hvor der er ro til at høre det. Den forkerte måde er at diagnosticere: "Jeg tror, du har PMDD." Den rigtige er at beskrive og tilbyde: "Jeg kan se, at ugen før er virkelig hård for dig, og jeg har læst, at der findes behandling. Vil du overveje at tale med lægen om det? Jeg tager gerne med." Hvis hun siger nej, så respekter det og lad døren stå åben. Beslutningen er hendes. Din rolle er at gøre den mulig, ikke at tage den.',
      action:
        'Hvis du genkendte tegnene i går: sig sætningen i dag, og tilbyd at hjælpe med at printe eller sende de loggede cyklusser til lægen.',
      phaseTags: ['follicular'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'Dine følelser tæller også',
      insight:
        'Hele denne måned handler om at forstå hende. Men du er også et menneske, der lever i det samme hus i den samme uge. Det er okay at blive ked af det, når tonen er skarp. Det er okay at være træt af at gå på listesko. Det er okay at være bange for ugen på forhånd. Hvis du bider det i dig, hober det sig op og kommer ud som kulde eller sarkasme, typisk på det værste tidspunkt. Det, der virker, er at have et sted at lægge det: en ven, en søskende, en gåtur alene, en note på telefonen. Og at sige det til hende, når roen er tilbage: "Sidste uge var hård for mig også." Ikke som en anklage. Som en oplysning.',
      action:
        'Skriv tre linjer i dag om, hvordan den seneste PMS-uge var for dig. Ikke til hende, til dig selv. Læs dem igen om en måned.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 24),
      month: M,
      day: 24,
      title: 'Ro er ikke det samme som at finde sig i alt',
      insight:
        'At holde roen i PMS-dagene betyder ikke, at alt er tilladt. Skarp tone, kort lunte og tårer er symptomer. Nedladende bemærkninger, at blive kaldt ting, at få smidt ting efter sig eller at blive råbt ad foran børnene er ikke symptomer, og hormonerne fritager ikke for ansvar. Forskellen er vigtig for jer begge. Hun har ret til at have en svær uge. Du har ret til at sige "sådan taler du ikke til mig", roligt, og gå. Det er ikke at afvise hendes følelser. Det er en grænse, og grænser er det, der gør, at du kan blive ved med at være tålmodig i det lange løb. Hvis grænsen overskrides hver måned, er det en samtale, der skal tages i den gode uge, og måske med hjælp udefra.',
      action:
        'Formulér for dig selv én grænse, der ikke afhænger af cyklussen. Sig den til hende i den gode uge, ikke som ultimatum, men som information.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 25),
      month: M,
      day: 25,
      title: 'Udsæt, undgå ikke',
      insight:
        'Du ved nu, at svære samtaler bør lægges uden for PMS-vinduet. Der er en fælde i det: at "vi tager den senere" bliver til "vi tager den aldrig", fordi der altid er en grund. Så vokser emnet, og det kommer ud i PMS-ugen alligevel, bare større. Forskellen mellem at udsætte og at undgå er, om der er en dato. "Kan vi tage den på søndag?" er at udsætte. "Ikke nu" uden mere er at undgå. Og hvis det er hende, der rejser emnet på dag 26, så lyt først. Hun har ret til at blive hørt, også når timingen er dårlig. Det, du kan foreslå, er at beslutte senere, ikke at lytte senere.',
      action:
        'Er der et emne, I har skubbet foran jer? Foreslå en konkret dag i næste follikelfase, og sæt den i kalenderen i dag.',
      phaseTags: ['luteal', 'follicular'],
    },
    {
      id: dailyId(M, 26),
      month: M,
      day: 26,
      title: 'Den gode uge er til aftaler',
      insight:
        'Follikelfasen er ikke bare den behagelige uge. Den er også den uge, hvor I kan lave aftaler om den svære. Med overskud og afstand kan I tale om, hvad der virkede sidst, hvad der ikke gjorde, og hvad I vil prøve næste gang. Mange par opdager, at de har talt om PMS hundrede gange, men aldrig uden for PMS. Det er som at lave brandøvelse, mens det brænder. Aftalerne behøver ikke være store: hvem tager aftensmaden i den uge, om gæster er en god idé, hvad hun vil have, du gør, når tonen bliver skarp, og hvad du må gøre, når du selv har brug for en pause. Skriv dem ned. Hukommelsen er den første, der forsvinder på dag 26.',
      action:
        'Sæt 15 minutter af i dag til at lave to-tre aftaler for næste PMS-uge, og skriv dem i en note, I begge kan finde.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 27),
      month: M,
      day: 27,
      title: 'Toppen før faldet',
      insight:
        'Omkring ægløsningen er østrogen på sit højeste, og for mange er det cyklussens bedste dage: energi, lyst, humør og selvtillid. Det er værd at nyde. Det er også værd at vide, at faldet begynder herfra, og at der typisk er 7-10 dage, til PMS-vinduet åbner. Det gør ægløsningen til et naturligt tidspunkt at kigge fremad: hvad ligger i kalenderen om 10-14 dage? En stor familiefest, en deadline, en rejse, en svær samtale? Det, du kan flytte, er billigst at flytte nu. Det, du ikke kan flytte, kan du forberede: mindre program omkring det, en buffer af ro før og efter, og en aftale om, at hun må trække sig, hvis hun har brug for det.',
      action:
        'Åbn kalenderen, find de dage, appen forventer bliver PMS-vinduet, og kig efter én ting, der kan flyttes eller gøres mindre.',
      phaseTags: ['ovulation'],
    },
    {
      id: dailyId(M, 28),
      month: M,
      day: 28,
      title: 'Aftal et signal',
      insight:
        'Et af de enkleste og mest effektive redskaber par bruger er et signal, et ord eller en sætning, der betyder "jeg er i vinduet nu, og det er ikke dig". Det kan være så simpelt som "det er en tung dag" eller et aftalt ord, der ikke betyder andet. Formålet er, at hun ikke skal forklare sig, og at du ikke skal gætte. Signalet virker kun, hvis det er aftalt på forhånd, i en rolig fase, og hvis du reagerer på det hver gang på samme måde: med lavere forventninger og højere omsorg, ikke med "nå, så det er derfor". Det må også gå den anden vej: et signal fra dig, der betyder "jeg trænger til en pause, og jeg kommer tilbage".',
      action:
        'Foreslå et signal i dag, og aftal, hvad du gør, når du hører det. Test det i den kommende PMS-uge.',
      phaseTags: ['ovulation'],
    },
    {
      id: dailyId(M, 29),
      month: M,
      day: 29,
      title: 'Lettelsen, når blødningen kommer',
      insight:
        'For mange kvinder med udtalt PMS er første menstruationsdag ikke en dårlig dag, men en lettelse. Tågen letter, angsten falder til ro, og hun kan mærke sig selv igen. Nogle beskriver det som at vågne. Det er et godt tidspunkt at sige noget, du måske ikke fik sagt i ugen før: at du så, hvor hårdt det var, og at hun kom igennem det. Det er også et tidspunkt, hvor hun kan have dårlig samvittighed over ting, der blev sagt. Der er ikke brug for, at du bekræfter, at det var slemt. Der er brug for, at du bekræfter, at I stadig er på samme hold. Og så er det tid til at logge, hvordan ugen var, mens I begge husker det.',
      action:
        'Sig i dag: "Jeg kunne se, det var en hård uge. Godt du er igennem." Og skriv sammen tre ord i noten om, hvordan ugen var.',
      phaseTags: ['menstrual'],
    },
    {
      id: dailyId(M, 30),
      month: M,
      day: 30,
      title: 'Måned 7: det har du lært',
      insight:
        'Du ved nu, at PMS er et gradvist hormonfald, som hjernen reagerer på med lavere serotonin, og at det er følsomheden, ikke hormonmængden, der er forskellig. Du ved, at PMDD er en reel diagnose hos 3-8 procent, at den stilles med dagbog over to cyklusser, og at der findes behandling. Du kan genkende afvisningsfølsomhed, angst, tårer, raseri og hjernetåge, og du ved, hvad du skal sige og lade være med at sige. Du ved, at reparation efter konflikt betyder mere end konflikten, at ro ikke er det samme som at finde sig i alt, og at udsætte kræver en dato. Vigtigst: du ved, at forstærkeren er hormonel, og indholdet er ægte, og at begge dele fortjener dig.',
      action:
        'Fortæl hende de to ting fra denne måned, der har ændret mest i, hvordan du ser på PMS-ugen. Tag så månedens quiz.',
      phaseTags: [],
    },
  ],
  weekly: [
    {
      id: weeklyId(M, 1),
      month: M,
      week: 1,
      title: 'Hvad PMS gør ved hjernen',
      body: [
        'I måned 1 fik du modellen: hormonerne falder i ugen før menstruationen, og det mærkes som PMS. I denne artikel går vi et lag dybere, for jo bedre du forstår mekanismen, jo mindre personligt tager du det, og jo mere præcist kan du hjælpe.',
        'Efter ægløsningen producerer det gule legeme progesteron, og østrogen får en mindre, anden top. Bliver ægget ikke befrugtet, begynder det gule legeme at visne omkring en uge før menstruationen, og begge hormoner falder gradvist over 5-7 dage. Det er ikke ét fald, men en kurve. Det er derfor, symptomerne typisk starter mildt og tager til, og derfor de sidste to-tre dage før blødningen ofte er de sværeste.',
        'Hjernen mærker faldet på to måder. Østrogen støtter produktionen og virkningen af serotonin, signalstoffet der holder humøret stabilt, dæmper angst og regulerer søvn og appetit. Når østrogen falder, falder serotoninaktiviteten med, og det ligner på mange måder en miniudgave af det, man ser ved depression: nedtrykthed, irritabilitet, trang til sødt, søvnproblemer. Samtidig nedbrydes progesteron i kroppen til et stof, der virker beroligende på hjernens GABA-system, det samme system som alkohol og beroligende medicin påvirker. Når progesteron forsvinder, forsvinder den beroligende effekt også. Resultatet er uro, angst og en følelse af, at alt er lidt for meget.',
        'Her kommer det vigtigste at forstå: hormonniveauerne hos kvinder med svær PMS er som regel helt normale. Man har målt og sammenlignet, og forskellen ligger ikke i mængden af hormoner, men i hvor kraftigt hjernen reagerer på udsvingene. Nogle hjerner er mere følsomme over for de samme skift. Det betyder, at "hun har for mange hormoner" er forkert, og at "hun er bare følsom" er forkert på en anden måde. Hun har et nervesystem, der reagerer stærkere på en normal biologisk proces. Det kan hun ikke vælge fra, lige så lidt som man kan vælge migræne fra.',
        'Derfor holder sætningen fra måned 1: PMS forstærker følelser, den opfinder dem ikke. Tænk på det som et filter, der normalt sorterer småting fra og dæmper de store. I PMS-dagene er filteret tyndere. Det, der på dag 10 registreres og glemmes, kommer på dag 26 igennem i fuld størrelse. Det gælder irritation over en skæv opgavefordeling, sårbarhed over noget, du sagde, og bekymring for noget på arbejdet. Det gælder også det gode: en kærlig sætning rammer dybere. Indholdet er ægte. Lydstyrken er hormonel. Begge dele er virkelige.',
        'Hvad gør du med det? Først: hold op med at forsøge at afgøre, om en følelse er "rigtig" eller "hormonel". Det er et falsk valg. Følelsen er rigtig, og den er forstærket, på samme tid. Handl på indholdet, og lad være med at reagere på lydstyrken. Dernæst: lær hendes profil. PMS er ikke én ting; over 150 symptomer er beskrevet, og hver kvinde har sin egen faste kombination. Nogle bliver stille og trætte, andre kort for hovedet og rastløse, andre sørgmodige. Den generelle viden i denne artikel hjælper et stykke. Hendes profil, som I finder i kalenderen efter to-tre loggede cyklusser, hjælper resten af vejen.',
        'Og til sidst: fordi det er en kurve, kan du følge med. Dag 24 og dag 27 er ikke det samme. Kig i appen, se hvor mange dage der er til forventet menstruation, og justér forventningerne derefter. Det er ikke at behandle hende som en kalender. Det er at tage hendes biologi lige så alvorligt, som hun selv er nødt til.',
      ],
      conversationQuestion:
        'Hvordan mærker du selv faldet i ugen før: kommer det gradvist eller pludseligt, og hvilke dage er de sværeste for dig?',
      sources: [NHS_PMS, ACOG_PMS, SUNDHED_PMS],
    },
    {
      id: weeklyId(M, 2),
      month: M,
      week: 2,
      title: 'PMDD: en reel lidelse med behandling',
      body: [
        'Tre ud af fire kvinder mærker PMS i en eller anden grad. For 3-8 procent er det så voldsomt, at det har sit eget navn: præmenstruel dysfori, PMDD. Det er en anerkendt diagnose, og det er vigtigt at sige tydeligt, for mange har gået årevis med det og fået at vide, at det "bare er PMS", "bare hormoner" eller noget, de skulle tage sig sammen over.',
        'Forskellen på PMS og PMDD er graden, ikke typen. Ved PMDD er de psykiske symptomer dominerende og så kraftige, at de forstyrrer arbejde, relationer eller hverdag i en uge eller mere hver måned: svær nedtrykthed, angst og anspændthed, pludseligt raseri, følelsen af at miste kontrollen, håbløshed, og hos nogle tanker om ikke at ville leve. Symptomerne begynder i ugen før menstruationen, topper de sidste dage og forsvinder næsten helt inden for få dage efter, at blødningen er begyndt. De gode uger er virkelig gode, og det er netop kontrasten, der gør PMDD så opslidende: hun ved præcis, hvad der kommer, og kan ikke forhindre det.',
        'Det er kalenderen, der adskiller PMDD fra depression og angstlidelser. Ved PMDD er der en tydelig symptomfri periode fra menstruationens slutning til omkring ægløsning. Ved depression er der ikke. Nogle kvinder har begge dele, en underliggende depression der bliver markant værre i ugen før, og det kræver en anden behandling. Derfor stilles diagnosen ikke på en beskrivelse, men på daglige registreringer over mindst to cyklusser, hvor symptomerne skal være til stede før menstruationen og væk efter. Hukommelsen husker de hårde dage og glemmer de gode; dagbogen husker begge. Appens kalender er præcis sådan en dagbog, hvis den udfyldes hver dag, også når alt er fint. Det er "ingen symptomer" på dag 8, der gør "voldsom angst" på dag 26 til et mønster.',
        'Det, de færreste ved, er, at PMDD kan behandles, og at der er flere veje. SSRI-præparater, den type medicin der også bruges mod depression, er førstevalg og virker anderledes ved PMDD end ved depression: ofte inden for få dage i stedet for uger. Derfor kan nogle tage dem kun i de sidste to uger af cyklussen. Hormonel prævention, der holder ægløsningen tilbage, fjerner udsvingene for nogle, især visse typer p-piller. Kognitiv adfærdsterapi lærer teknikker til at genkende og håndtere tankerne, når de kommer, og har god dokumentation ved både PMS og PMDD. Regelmæssig motion, søvn, jævne måltider og mindre alkohol og koffein dæmper det hele. I meget svære tilfælde findes der yderligere muligheder, som en speciallæge kan vurdere. Det er lægens opgave at vælge. Din opgave er at vide, at der er noget at vælge imellem.',
        'Hvornår fortjener det en læge? Hvis symptomerne hver måned forstyrrer hendes arbejde, relationer eller hverdag. Hvis hun selv siger, at hun ikke kan genkende sig selv i den uge. Hvis I begge frygter ugen på forhånd. Hvis hun har prøvet det, hun kunne selv, og det ikke rækker. Og hvis der er tanker om ikke at ville leve, også selv om de "kun" kommer i PMS-dagene, så skal det være nu, ikke om to cyklusser. Ét af tegnene er nok.',
        'Måden, du foreslår det på, betyder næsten lige så meget som at du gør det. Ikke i PMS-ugen, hvor det lyder som "der er noget galt med dig". I follikelfasen, hvor der er ro til at høre det. Ikke som diagnose: "Jeg tror, du har PMDD." Men som observation og tilbud: "Jeg kan se, at ugen før er virkelig hård for dig, og jeg har læst, at der findes behandling. Vil du overveje at tale med lægen? Jeg tager gerne med." Tilbyd at hjælpe med at få de loggede cyklusser med til lægen, for det er dem, samtalen står på. Og hvis hun siger nej, så respekter det og lad døren stå åben. Beslutningen er hendes. Din rolle er at gøre den mulig.',
        'Uanset om det er PMS eller PMDD, er det ikke dig, der skal stille diagnosen, og heller ikke dig, der skal behandle. Du skal gøre to ting: tage det alvorligt, og gøre vejen til hjælp kortere. Det er mere, end de fleste får.',
      ],
      conversationQuestion:
        'Hvis du skulle give ugen før menstruationen en karakter fra 1 til 10 for, hvor meget den forstyrrer dit liv, hvad ville du så sige? Og er det et tal, du selv er okay med?',
      sources: [NHS_PMS, ACOG_PMS, NHS_CBT],
    },
    {
      id: weeklyId(M, 3),
      month: M,
      week: 3,
      title: 'Skarp tone, tårer og raseri: sådan reagerer du',
      body: [
        'De psykiske PMS-symptomer er dem, der rammer et forhold hårdest, fordi de kommer ud som noget, der ligner en reaktion på dig. Denne artikel gennemgår de fem mest almindelige, hvad der ligger bag, og hvad du konkret gør, når de kommer.',
        'Afvisningsfølsomhed er det mindst kendte. I PMS-dagene leder en hjerne med lavt serotonin efter fare, og småting, der normalt ikke registreres, bliver til beviser på, at du er ligeglad: en kort besked, et blik på telefonen, mens hun taler, at du går i seng uden at sige godnat. Det hjælper ikke at sige "det var ikke sådan ment", for det er en forklaring på noget, der allerede har gjort ondt. Det hjælper at forebygge: lidt mere blik, lidt mere tydelighed, lidt mere "jeg er her", netop i de dage. Læg telefonen væk, når hun taler. Sig godnat med øjenkontakt. Det koster ingenting.',
        'Angst og uro føles som en motor, der kører for højt: tanker i ring, bekymring om ting, der ellers er håndterbare, en følelse af at noget forfærdeligt er på vej. Det hænger sammen med, at det beroligende stof, progesteron nedbrydes til, forsvinder med faldet. Argumentér ikke med angsten, og bevis ikke, at bekymringen er ubegrundet; det virker afvisende. Vær rolig, konkret og tæt på. "Jeg er her. Vi tager én ting ad gangen." Tilbyd en gåtur eller bare dit selskab, og lad hende vælge.',
        'Tårer kommer pludseligt og over noget, der ikke virker stort. Hun ved det selv og bliver flov, hvilket giver flere tårer. Det er en lav tærskel, ikke en stor sorg. Kræv ikke en forklaring, og gå ikke i gang med at løse det, hun græder over. Sæt dig ved siden af hende, sig "du behøver ikke forklare", og bliv siddende. Hvis der er noget bag, kommer det, når hun er klar. Hjernetåge, koncentrationsbesvær og glemsomhed, er det symptom, der oftest giver praktiske konflikter: en glemt aftale, en beslutning der ikke kan tages. Det, der hjælper, er at tage kognitiv belastning fra: færre valg, kortere beskeder, én ting ad gangen. "Den tager jeg" er den bedste sætning i den uge.',
        'Raseri er det symptom, ingen af jer vil tale om, og et af de mest almindelige ved PMDD: en pludselig, kropslig vrede, der kommer hurtigt og føles ude af proportion, også for hende. Mange beskriver bagefter, at de så sig selv udefra og ikke kunne stoppe. Det, der eskalerer, er at svare igen med samme styrke. Det, der de-eskalerer, er at sænke din stemme, tage en pause og komme tilbage. Og når tonen bliver skarp uden at det er raseri, så brug de tre trin: tre sekunders pause, oversæt sætningen ("du hjælper aldrig til" betyder "jeg føler mig alene med det"), og svar på oversættelsen: "Det lyder som om du står med for meget. Hvad tager jeg nu?"',
        'Der er sætninger, der altid gør det værre. De åbenlyse: "Er du PMS-ramt?", "Det er bare hormonerne", "Du overreagerer". Og de mindre åbenlyse: "Du var også sådan sidste måned" (kalenderen som våben), "Jeg siger jo ingenting" (forsvar forklædt som uskyld), "Jeg kan ikke gøre noget rigtigt" (hendes symptom bliver dit problem), "Skal vi tage den, når du er dig selv igen?" (hun er ikke sig selv nu). Fællesnævneren er, at de handler om dig og gør hende til problemet. Det, der virker, anerkender, kræver ikke noget og tilbyder noget konkret: "Det lyder hårdt. Jeg er her." "Jeg tager aftensmaden, læg dig bare." "Vil du have, jeg bliver, eller skal du have fred?" Hun har ikke brug for information om sin egen krop. Hun har brug for selskab.',
        'Til sidst det vigtigste: der bliver konflikter alligevel. Det, der afgør, om forholdet tager skade, er reparationen. Når blødningen er begyndt og roen tilbage, så tag en kort samtale: hvad skete der, hvad gør vi anderledes næste gang, og er der noget, en af jer vil sige undskyld for. Hun kan sige undskyld for tonen, uden at emnet var forkert. Du kan sige undskyld for at forsvare dig, uden at du fortjente tonen. Begge dele kan være sande på én gang. Det er sådan, man bliver på samme hold.',
      ],
      conversationQuestion:
        'Hvilket af de fem, afvisningsfølsomhed, angst, tårer, hjernetåge eller vrede, kender du bedst fra dig selv, og hvad vil du helst have, jeg gør, når det kommer?',
      sources: [NHS_PMS, ACOG_PMS],
    },
    {
      id: weeklyId(M, 4),
      month: M,
      week: 4,
      title: 'Dine grænser, hendes strategier og jeres aftaler',
      body: [
        'De første tre uger handlede om at forstå hende. Denne sidste artikel handler om dig, om det I kan gøre sammen, og om at holde til det år efter år. For tålmodighed er ikke uudtømmelig, og et forhold, hvor den ene altid tilpasser sig, holder ikke i længden.',
        'Start med dine egne følelser. Det er okay at blive ked af det, når tonen er skarp. Det er okay at være træt af at gå på listesko, og det er okay at frygte ugen på forhånd. Hvis du bider det i dig, hober det sig op og kommer ud som kulde, sarkasme eller en eksplosion, typisk på det værste tidspunkt. Hav et sted at lægge det: en ven, en søskende, en gåtur alene, en note på telefonen. Og sig det til hende, når roen er tilbage, ikke som anklage, men som oplysning: "Sidste uge var hård for mig også." Det er ikke at gøre hendes symptomer til dit problem. Det er at være ærlig om, at I bor i samme hus.',
        'Så til grænserne. At holde roen betyder ikke, at alt er tilladt. Skarp tone, kort lunte og tårer er symptomer. Nedladende bemærkninger, at blive kaldt ting, at få smidt ting efter sig eller at blive råbt ad foran børnene er ikke symptomer, og hormonerne fritager ikke for ansvar. Hun har ret til en svær uge. Du har ret til at sige "sådan taler du ikke til mig", roligt, og gå ud af rummet. Det er ikke at afvise hendes følelser. Det er en grænse, og grænser er det, der gør, at du kan blive ved med at være tålmodig i det lange løb. Overskrides den hver måned, er det en samtale til den gode uge, og måske en, I skal have hjælp til udefra. Formulér én grænse for dig selv, der ikke afhænger af cyklussen, og sig den til hende i follikelfasen. Ikke som ultimatum. Som information.',
        'Den samme logik gælder svære samtaler. I måned 1 og 2 lærte du at lægge dem uden for PMS-vinduet. Fælden er, at "vi tager den senere" bliver til "vi tager den aldrig", og så vokser emnet og kommer ud i PMS-ugen alligevel, bare større. Forskellen mellem at udsætte og at undgå er, om der er en dato. "Kan vi tage den på søndag?" er at udsætte. "Ikke nu" uden mere er at undgå. Og hvis det er hende, der rejser emnet på dag 26, så lyt først. Hun har ret til at blive hørt, også når timingen er dårlig. Det, du kan foreslå, er at beslutte senere, ikke at lytte senere.',
        'Nu til hendes egne strategier. De fleste kvinder med mange års PMS har fundet deres måder at komme igennem ugen på: løb, tidlig sengetid, ingen gæster, tid alene, et bestemt måltid, et bad, en serie. Du kender nogle af dem, sjældent alle, fordi hun ikke har sat ord på dem. Spørg i follikelfasen: "Hvad gør du selv, der hjælper? Og hvad gør jeg nogle gange, der forstyrrer det?" Lyt til det sidste uden at forsvare dig. Og når du kender strategierne, så administrer dem ikke. "Skulle du ikke løbe i dag?" er velment og lander som kontrol. Støtte er at rydde vejen: tag børnene, så hun kan løbe, uden at nævne løbeturen. Gør soveværelset klar uden at sige, hun burde i seng. Lad være med at foreslå gæster i den uge. Og accepter, at strategien nogle dage er sofaen.',
        'Alt det her bliver først til noget, når det bliver til aftaler, og aftaler laves i den gode uge. Mange par har talt om PMS hundrede gange, men aldrig uden for PMS. Det er som at holde brandøvelse, mens det brænder. Sæt et kvarter af i follikelfasen: hvem tager aftensmaden i den uge, er gæster en god idé, hvad vil hun have, du gør, når tonen bliver skarp, og hvad må du gøre, når du selv har brug for en pause. Aftal et signal, et ord eller en sætning, der betyder "jeg er i vinduet, og det er ikke dig", og et tilsvarende fra dig, der betyder "jeg trænger til ti minutter, og jeg kommer tilbage". Brug ægløsningen til at kigge 10-14 dage frem i kalenderen og flytte eller skrumpe det, der ligger i vinduet. Skriv aftalerne ned et sted, I begge kan finde. Hukommelsen er det første, der forsvinder på dag 26.',
        'Og når blødningen kommer, og tågen letter, så sig det, du måske ikke fik sagt i ugen før: at du så, hvor hårdt det var, og at hun kom igennem det. Hun kan have dårlig samvittighed over ting, der blev sagt. Der er ikke brug for, at du bekræfter, at det var slemt. Der er brug for, at du bekræfter, at I stadig er på samme hold. Så logger I ugen sammen, mens I begge husker den, og så er I bedre forberedt næste gang. Det er ikke en kur. Det er et forhold, der ved, hvad det har med at gøre.',
      ],
      conversationQuestion:
        'Hvad skal vores signal være, og hvad vil du have, jeg gør, når du bruger det? Og hvad vil du have, jeg gør, når jeg selv trænger til en pause?',
      sources: [NHS_PMS],
    },
  ],
  wrap: {
    id: wrapId(M),
    month: M,
    title: 'Måned 7: PMS og PMDD',
    summary: [
      'Denne måned gik i dybden med den uge, der giver flest misforståelser. Du ved nu, at PMS er et gradvist hormonfald over 5-7 dage, som hjernen mærker som lavere serotonin og tabt beroligelse, og at hormonniveauerne typisk er normale: det er følsomheden, der er forskellig. Du kender de fem psykiske symptomer, der rammer et forhold hårdest, afvisningsfølsomhed, angst, tårer, raseri og hjernetåge, og du ved, at forstærkeren er hormonel, mens indholdet er ægte.',
      'Du ved, at PMDD rammer 3-8 procent, er en reel diagnose, stilles med dagbog over to cyklusser og kan behandles med SSRI, hormonel prævention, kognitiv adfærdsterapi og livsstil. Du ved, hvornår det fortjener en læge, og hvordan du foreslår det uden at diagnosticere. Du har lært at svare på skarp tone i tre trin, at reparere efter konflikt, hvad du aldrig skal sige, og at ro ikke er det samme som at finde sig i alt. Og du ved, at aftaler laves i den gode uge, og at udsætte kræver en dato.',
      'Næste måned handler om smerte, træthed og hovedpine: hvordan du genkender mønstre i hendes log og reagerer, før hun beder om det.',
    ],
    keepDoing: [
      'Log humør hver dag, også de gode dage, så mønstret bliver synligt.',
      'Tre sekunders pause, oversæt sætningen, svar på behovet.',
      'Læg telefonen væk og sig godnat med øjenkontakt i PMS-ugen.',
      'Tag en kort reparationssamtale, når blødningen er begyndt.',
      'Lav aftaler og et signal i follikelfasen, og skriv dem ned.',
      'Sig dine egne grænser og følelser højt i den gode uge.',
    ],
    quiz: [
      {
        question:
          'Hun siger i ugen før menstruationen, at hun ikke kan genkende sig selv, og at hun frygter ugen hver måned. Hvad hjælper mest?',
        options: [
          'Sige at det er normalt, tre ud af fire har PMS',
          'Foreslå i follikelfasen, at hun taler med lægen, og tilbyde at tage med',
          'Fortælle hende at du tror, hun har PMDD',
          'Foreslå at hun prøver at løbe mere',
        ],
        correctIndex: 1,
        explanation:
          'Det er et af tegnene på, at det fortjener en læge. Foreslå det roligt i den gode uge, som observation og tilbud, ikke som diagnose.',
      },
      {
        question:
          'I overvejer, om det kan være PMDD. Hvad er det mest nyttige, I kan gøre de næste to måneder?',
        options: [
          'Vente og se om det bliver bedre af sig selv',
          'Læse alt om PMDD på nettet',
          'Logge humør og symptomer hver dag, også de gode dage',
          'Undgå alle konflikter i ugen før',
        ],
        correctIndex: 2,
        explanation:
          'Diagnosen bygger på daglige registreringer over mindst to cyklusser. Det er de symptomfri dage, der gør de svære dage til et mønster.',
      },
      {
        question:
          'Dag 26. Hun siger skarpt: "Du hjælper aldrig til." Hvad er det bedste første skridt?',
        options: [
          'Nævne alt det, du faktisk har gjort i denne uge',
          'Tre sekunders pause, og så: "Det lyder som om du står med for meget. Hvad tager jeg nu?"',
          'Sige "det er nok fordi du er i vinduet"',
          'Gå uden at sige noget',
        ],
        correctIndex: 1,
        explanation:
          'Oversæt sætningen til behovet bag, og svar på det. Forsvar giver en konflikt om tonen; hjælp får tonen til at forsvinde.',
      },
      {
        question: 'Hun græder pludseligt over et rodet køkken. Hvad virker bedst?',
        options: [
          'Spørge hvad der egentlig er galt',
          'Gå i gang med at rydde op med det samme',
          'Sætte sig ved siden af hende, sige "du behøver ikke forklare", og blive',
          'Sige at det jo bare er køkkenet',
        ],
        correctIndex: 2,
        explanation:
          'Tårerne er en lav tærskel, ikke en stor sorg. Selskab uden krav om forklaring virker; løsninger og spørgsmål giver flere tårer.',
      },
      {
        question:
          'Hun har råbt nedladende ting ad dig foran børnene, tredje måned i træk. Hvad er rigtigt?',
        options: [
          'Finde sig i det, det er hormonerne',
          'Råbe igen, så hun forstår, hvordan det føles',
          'Sige roligt "sådan taler du ikke til mig", gå, og tage samtalen om grænsen i den gode uge',
          'Aldrig nævne det igen, for at undgå konflikt',
        ],
        correctIndex: 2,
        explanation:
          'Ro er ikke det samme som at finde sig i alt. Symptomer forklarer, men fritager ikke for ansvar. En grænse sat roligt gør tålmodighed mulig i længden.',
      },
      {
        question: 'Der er et svært emne om økonomi, som hun bringer op på dag 27. Hvad gør du?',
        options: [
          'Siger "ikke nu" og lader det ligge',
          'Lytter først, og foreslår så en konkret dag i næste follikelfase til at beslutte',
          'Tager hele diskussionen med det samme, så den er overstået',
          'Skifter emne',
        ],
        correctIndex: 1,
        explanation:
          'Udsæt beslutningen, ikke lytningen. Forskellen mellem at udsætte og at undgå er, om der er en dato.',
      },
    ],
  },
};
