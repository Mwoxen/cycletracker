import type { MonthContent, Source } from '../types';
import { dailyId, weeklyId, wrapId } from '../types';

const NHS_PERIODS: Source = {
  label: 'NHS: Periods',
  url: 'https://www.nhs.uk/conditions/periods/',
};
const ACOG_FIRST_PERIOD: Source = {
  label: 'ACOG: Your First Period',
  url: 'https://www.acog.org/womens-health/faqs/your-first-period',
};
const SUNDHED_DK: Source = {
  label: 'Sundhed.dk: Menstruationscyklus',
  url: 'https://www.sundhed.dk/borger/patienthaandbogen/kvindesygdomme/om-kvindesygdomme/menstruationscyklus/',
};
const NHS_MENOPAUSE: Source = {
  label: 'NHS: Menopause',
  url: 'https://www.nhs.uk/conditions/menopause/',
};
const NHS_HRT: Source = {
  label: 'NHS: Hormone replacement therapy (HRT)',
  url: 'https://www.nhs.uk/conditions/hormone-replacement-therapy-hrt/',
};
const NHS_EARLY_MENOPAUSE: Source = {
  label: 'NHS: Early menopause',
  url: 'https://www.nhs.uk/conditions/early-menopause/',
};
const NHS_POST_PREGNANCY: Source = {
  label: 'NHS: Your post-pregnancy body',
  url: 'https://www.nhs.uk/conditions/baby/support-and-services/your-post-pregnancy-body/',
};
const NHS_PND: Source = {
  label: 'NHS: Postnatal depression',
  url: 'https://www.nhs.uk/conditions/post-natal-depression/',
};
const NHS_CONTRACEPTION: Source = {
  label: 'NHS: Contraception',
  url: 'https://www.nhs.uk/conditions/contraception/',
};
const NHS_MISSED_PERIODS: Source = {
  label: 'NHS: Stopped or missed periods',
  url: 'https://www.nhs.uk/conditions/stopped-or-missed-periods/',
};
const NHS_PMS: Source = {
  label: 'NHS: PMS',
  url: 'https://www.nhs.uk/conditions/pre-menstrual-syndrome/',
};

const M = 12;

export const month12: MonthContent = {
  month: M,
  theme: 'Livsfaser og årets opsamling',
  focus:
    'Forstå hvordan cyklussen ændrer sig gennem livet, og byg jeres egen plan for, hvordan du hjælper hende bedst, nu hvor du endelig ved, hvad du taler om.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'Cyklussen er ikke den samme hele livet',
      insight:
        "Du har brugt elleve måneder på at lære én cyklus at kende: hendes, som den er lige nu. Tillykke. Nu skal du høre den dårlige nyhed: den flytter sig. Cyklussen er ikke en fast maskine, den er mere som en opskrift, der ændrer sig med årene. Den begynder rodet i teenageårene, finder sin rytme i 20'erne og 30'erne, forsvinder under graviditet, vender langsomt tilbage efter fødsel, bliver uforudsigelig i 40'erne og stopper til sidst. Undervejs skubber stress, sygdom, prævention og store livsbegivenheder den frem og tilbage. Denne måned handler om de skift. Ikke for at du skal kunne alt om alle livsfaser, men for at du kan genkende dem, når de kommer, og ikke står med panik i øjnene, når det bare er livet, der går videre. Til sidst samler vi hele året i én plan. Den bliver kortere end denne tekst.",
      action:
        'Spørg hende: "Hvordan var din cyklus for ti år siden sammenlignet med nu?" Lyt efter, hvad der har ændret sig, og hvad der er blevet ved. Læg telefonen væk, og lad være med at nikke, mens du tænker på aftensmaden.',
      phaseTags: [],
      sources: [NHS_PERIODS, SUNDHED_DK],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: 'Puberteten: de første år er uregelmæssige',
      insight:
        'Den første menstruation kommer typisk mellem 10 og 15 år, i gennemsnit omkring 12-13. De første to-tre år er cyklussen ofte uregelmæssig, fordi samspillet mellem hjerne og æggestokke endnu ikke er indkørt. Mange cyklusser sker uden ægløsning, og længder mellem 21 og 45 dage er normale for teenagere. Menstruationen kan udeblive i måneder og så komme kraftigt, uden at noget er galt. Hvorfor skal du vide det? Fordi hendes forhold til sin egen cyklus blev formet dengang. Skam, forvirring eller en mor, der forklarede det godt, sidder i hende stadig. Og fordi du måske har en datter, niece eller bonusdatter, der snart står der. Så er du den voksne i rummet. Ja, dig, som indtil januar troede, at bind og tamponer var det samme. Det er det ikke, min ven, og nu er du den, der ved det.',
      action:
        'Spørg hende, hvordan hun fik det at vide dengang, og hvem der hjalp hende. Er der en pige i jeres liv, så tal om, hvordan I vil gøre det for hende. Du må gerne være den, hun tør spørge.',
      phaseTags: [],
      sources: [ACOG_FIRST_PERIOD, NHS_PERIODS],
    },
    {
      id: dailyId(M, 3),
      month: M,
      day: 3,
      title: "20'erne og 30'erne: den mest stabile tid",
      insight:
        'Fra midt i 20\'erne til slutningen af 30\'erne er cyklussen for de fleste mest regelmæssig. Ægløsningen sker i de fleste cyklusser, længden svinger typisk kun få dage, og mønstrene, du har lært i år, er tydeligst netop her. Det er med andre ord perioden, hvor du har haft de bedste betingelser for at følge med. Ingen undskyldninger. Det er også perioden, hvor cyklussen oftest bliver afbrudt af andre ting: hormonel prævention, graviditet, amning. Så "stabil" betyder ikke uforstyrret. Det betyder, at når intet udefra blander sig, holder kroppen sin rytme ret præcist, som en ovn, der kender sin temperatur. Det er den rytme, appen har lært at forudsige. Følg med i, hvad hendes normale er lige nu, for det er det, du skal måle ændringer op imod senere. Du kan ikke smage, at noget er anderledes, hvis du aldrig smagte på, hvordan det plejede at være.',
      action:
        'Åbn kalenderen og find hendes gennemsnitlige cykluslængde over de sidste måneder. Sig tallet højt til hende, og spørg, om det passer med hendes fornemmelse. Siger du 28 uden at kigge, starter du forfra, og det ved du godt.',
      phaseTags: ['follicular'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'Stress flytter ægløsningen',
      insight:
        'Cyklussen styres fra hjernen, og hjernen lytter til stress. Ved vedvarende pres kan hypothalamus holde igen med signalerne til æggestokkene, så ægløsningen udsættes. Lutealfasen efter ægløsning er stabil på 12-14 dage, så en udsat ægløsning giver en sen menstruation, ikke en kort lutealfase. Derfor er "menstruationen er forsinket" i en stresset måned oftest bare "ægløsningen kom sent". Det betyder også, at det frugtbare vindue flytter sig med, og derfor må appens skøn aldrig bruges som prævention. Appen gætter kvalificeret, men den gætter stadig. En eksamen, en fyring, en syg forælder eller en flytning kan alle gøre det. Kroppen vælger overlevelse frem for reproduktion, og det er sgu klogt. Den har ikke tid til at lave æg, når den tror, der står en løve i døren. Løven kan godt være hendes chef.',
      action:
        'Er der en stresset periode i gang lige nu, så sig: "Hvis cyklussen driller i denne måned, tror jeg, det hænger sammen med presset. Hvad kan jeg tage fra dig?" Og tag det så, når hun svarer. Ikke "jeg kigger på det". Tag det.',
      phaseTags: ['follicular', 'ovulation'],
      sources: [NHS_MISSED_PERIODS],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'Sygdom, rejser og store livsbegivenheder',
      insight:
        'Det er ikke kun psykisk pres, der flytter cyklussen. Feber og infektioner, en operation, rejser over tidszoner, et stort vægttab eller vægtøgning, meget hård træning, ny medicin og stofskifteproblemer kan alle udsætte ægløsningen eller få menstruationen til at udeblive. Et dødsfald, en skilsmisse, et nyt job eller en flytning gør det samme. Én skæv cyklus er ikke et problem. Udebliver menstruationen i mere end tre måneder uden graviditet, eller bliver cyklussen konsekvent kortere end 21 dage eller længere end 35, fortjener det en læge. Din rolle er ikke at forklare det. Du er ikke læge, og du har i år bevist, at du har nok at gøre med at huske, hvor varmepuden ligger. Din rolle er at huske: at kunne sige "det var måneden, hvor din far var indlagt", når hun undrer sig over kalenderen. Hukommelse er din opgave. Kalenderen er dit krydderiskab: skriv det på, så du ikke skal lede.',
      action:
        'Skriv en note i kalenderen om den største ting, der er sket for jer i år, på den dato, hvor det skete. Om et år er du den, der kan læse mønstret, og det er en god følelse, især når du slipper for at gætte.',
      phaseTags: [],
      sources: [NHS_MISSED_PERIODS, NHS_PERIODS],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: 'Hormonel prævention: cyklussen du ikke ser',
      insight:
        'Bruger hun p-piller, p-ring, p-plaster, hormonspiral, p-stav eller p-sprøjte, ser du ikke hendes naturlige cyklus. Kombinationspræparater med østrogen og gestagen holder ægløsningen nede, og blødningen i pausen er en bortfaldsblødning, ikke en rigtig menstruation. Gestagenpræparater som hormonspiral og p-stav giver ofte lettere, uregelmæssig eller slet ingen blødning. Alt det, du har lært om faser, gælder derfor kun delvist. Der er ingen ægløsning at time efter, og PMS-mønstret er ofte fladere. Før du bliver lettet: bivirkninger som humørændringer, hovedpine og lavere lyst kan i stedet ligge jævnt hen over hele måneden. Der er ingen svær uge, der er en lille, konstant afgift, hun betaler, så I to slipper for at tænke på det. Det er stadig hende, der bærer det, og den byrde er lige så reel som en menstruation. Den er bare sværere at se, så du må spørge. Ligeud, og så lytte.',
      action:
        'Bruger hun hormonel prævention, så spørg, om hun har bivirkninger, hun har vænnet sig til uden at tale om dem. Gør hun ikke, så hop videre til næste kort med god samvittighed.',
      phaseTags: ['menstrual'],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'Når præventionen stopper, vender cyklussen tilbage',
      insight:
        'Stopper hun med p-piller, spiral, ring eller stav, kan ægløsningen vende tilbage allerede i den første cyklus, og frugtbarheden kommer typisk hurtigt igen. Hurtigere, end de fleste mænd regner med. P-sprøjten er undtagelsen, hvor det kan tage op til et år. Men "tilbage" betyder ikke "som et urværk". De første måneder kan cyklussen være uregelmæssig, mens hjernen og æggestokkene finder rytmen igen. Og med den naturlige cyklus vender også alt det, præparatet holdt nede: kramper, kraftigere blødning, PMS, hud der reagerer. For nogle er det et chok, fordi de har været på hormoner siden teenageårene og aldrig har lært deres egen cyklus at kende som voksne. Her er det, du har lært i år, mest værd. Du er pludselig den i huset, der kan sige "det er normalt" og faktisk have ret. Nyd det. Det sker sjældent.',
      action:
        'Har hun stoppet eller overvejer at stoppe med hormonel prævention, så tilbyd at holde øje med kalenderen de første tre måneder, og tal om, hvad I bruger i stedet. "Vi ser lige tiden an" er ikke prævention, og det er heller ikke en plan.',
      phaseTags: [],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: 'Graviditet: ni måneder uden cyklus',
      insight:
        'Bliver ægget befrugtet omkring ægløsningen, dør det gule legeme ikke. Det bliver ved med at producere progesteron, indtil moderkagen tager over, og cyklussen sættes på pause. Der kommer ingen menstruation, ingen ægløsning, ingen PMS i klassisk forstand. Til gengæld giver det høje progesteron i første trimester det, du kender fra lutealfasen, i forstærket udgave: træthed, kvalme, ømme bryster, følelser der sidder løst. Meget af det, du har lært om lutealfasen, kan altså bruges direkte. Du har øvet dig et helt år uden at vide det, som en mand, der har lavet suppe hver søndag og pludselig skal lave mad til tolv. Sænk forventningerne, tag det praktiske, kommentér ikke krop og appetit, og reager på behovet frem for tonen. Det er den samme hjælp, bare i længere tid. Lutealfasen varer to uger. Det her varer noget længere. Træk vejret, og find varmepuden.',
      action:
        'Sig til hende, at det, du har lært om lutealfasen, også gælder, hvis I en dag står med en graviditet. Spørg, om der er noget, hun vil have, at du husker. Skriv det ned med det samme, så du faktisk husker det.',
      phaseTags: ['ovulation'],
      sources: [SUNDHED_DK],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'Efter fødslen: kroppen skal hele først',
      insight:
        'Efter en fødsel bløder hun i op til seks uger. Det kaldes efterblødning og er ikke menstruation, men livmoderen, der heler og trækker sig sammen. Den er kraftig de første dage, bliver lysere og tyndere og kan tage til igen ved anstrengelse. Samtidig falder østrogen og progesteron brat, når moderkagen er væk, og det hormonfald er større end noget PMS. Kroppen er øm, søvnen er splittet op af et lille barn, og hvis hun ammer, sætter prolaktin cyklussen på pause. Det er en periode, hvor alt det, du har lært om menstruationsfasen, gælder i uger frem for dage: varme, ro, mad, jern, praktisk hjælp uden at spørge og ingen forventninger. Hvis du nogensinde har tænkt "hvad skal jeg egentlig bruge alt det her til", så er svaret: det her. Lige præcis det her. Det er her, du står op, laver maden og tager opvasken, uden at nogen skal bede om det.',
      action:
        'Har I et lille barn eller en fødsel i vente: aftal, hvem der tager natten i denne uge. Svaret er dig. Hvis ikke: spørg hende, hvad hun har hørt fra veninder om tiden efter en fødsel, som overraskede hende.',
      phaseTags: ['menstrual'],
      sources: [NHS_POST_PREGNANCY],
    },
    {
      id: dailyId(M, 10),
      month: M,
      day: 10,
      title: 'Amning og menstruationens tilbagekomst',
      insight:
        'Ammer hun ikke, vender menstruationen typisk tilbage seks til otte uger efter fødslen. Ammer hun fuldt, kan prolaktin holde ægløsningen nede i mange måneder, og menstruationen kommer ofte først tilbage, når barnet begynder at spise andet eller sove længere om natten. Det varierer enormt. Nu det vigtige, så læs langsomt: ægløsningen kommer før den første menstruation. Hun kan altså blive gravid, før hun har set en eneste blødning. Amning er ikke sikker prævention, medmindre meget specifikke betingelser er opfyldt, og det er en samtale med jordemoder eller læge, ikke med din kammerat, der "har hørt noget". Den første menstruation efter fødsel er ofte kraftigere og mere uregelmæssig end før, og det kan tage nogle cyklusser, før rytmen er tilbage. Appen starter forfra. Det gør du ikke. Du har et forspring, og det har du sgu fortjent.',
      action:
        'Tal om, hvad jeres plan for prævention ville være i månederne efter en fødsel, før I står midt i det. Det er en kort samtale nu og en meget lang en senere.',
      phaseTags: [],
      sources: [NHS_POST_PREGNANCY, NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'Humøret efter fødsel: tudetur eller depression',
      insight:
        'De fleste nybagte mødre oplever "baby blues" omkring dag tre til fem efter fødslen: tårer, uro og en følelse af at være overvældet, som går over af sig selv inden for to uger. Det er hormonfaldet og søvnmanglen. Fødselsdepression er noget andet. Den rammer omkring hver tiende kvinde, kan komme når som helst i det første år og går ikke over af sig selv. Tegn er vedvarende tristhed, manglende glæde ved barnet, angst, skyld, tilbagetrækning og tanker om ikke at slå til. Partnere kan også rammes. Det kan behandles, og det fortjener en læge tidligt. Du er ofte den, der ser det først, fordi hun selv tror, hun bare er en dårlig mor. Det er det ene sted i hele programmet, hvor "jeg ville ikke blande mig" er det forkerte svar. Bland dig. Roligt, venligt og mere end én gang. Du behøver ikke de helt rigtige ord. Du skal bare sige det højt.',
      action:
        'Sig sætningen til hende i dag, uanset hvor I er i livet: "Hvis du en dag får det svært efter en fødsel, så lover jeg at sige det højt og hjælpe dig til en læge, også hvis du siger, det går."',
      phaseTags: [],
      sources: [NHS_PND],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: 'Den nye cyklus efter et barn',
      insight:
        'Når cyklussen vender tilbage efter fødsel og amning, er den ofte ikke identisk med før. Nogle får kortere cyklusser, nogle længere, nogle får mere PMS, andre mindre. Kramperne kan ændre karakter, og blødningen kan blive kraftigere. Samtidig er hverdagen en anden: mindre søvn, mindre tid alene, mere ansvar. Det betyder, at alt det, I har lært om hendes mønstre, skal justeres. Det er ikke spildt, det er en grundopskrift, der skal tilpasses et nyt komfur. Du har stadig lært at læse en kalender, du skal bare læse en ny. Og den er vigtigere end nogensinde, fordi hukommelsen er det første, der forsvinder med et lille barn. Din er allerede på vej ud ad døren. Lutealfasen med et skrigende barn kl. 03 er en helt anden sport end lutealfasen alene i sofaen. Samme regler, højere sværhedsgrad, ingen pause.',
      action:
        'Har hendes cyklus ændret sig efter et barn: spørg, hvad der er anderledes nu. Hvis ikke: spørg, hvad hun vil have, at du husker, hvis det sker en dag. Skriv det et sted, et barn ikke kan tegne på.',
      phaseTags: ['menstrual'],
      sources: [NHS_POST_PREGNANCY],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: "40'erne: perimenopausen begynder",
      insight:
        'Perimenopause betyder "omkring menopausen" og er årene, hvor æggestokkene gradvist holder op med at reagere stabilt. Den begynder typisk i 40\'erne, ofte flere år før den sidste menstruation, og kan vare fire til otte år. Menopausen i sig selv er én dag: den sidste menstruation, som først kan bekræftes, når der er gået 12 måneder uden blødning. Det er den eneste dato i hele appen, man først kan sætte et år bagud. Gennemsnitsalderen er 51, men før 45 kaldes den tidlig, og før 40 for tidlig overgangsalder, og begge dele fortjener en læge. Det første tegn er ofte, at cyklussen bliver kortere, fordi follikelfasen forkortes, mens hormonerne begynder at svinge kraftigere fra måned til måned. Det, hun kendte som sin rytme, bliver mindre pålidelig. Det, du kendte som din app, også. Det er ikke et tegn på, at du skal have panik. Det er et tegn på, at du skal spørge mere.',
      action:
        'Spørg, om hun har tænkt på overgangsalderen, og hvad hun ved om, hvordan den var for hendes mor. Det er ofte det bedste fingerpeg om timing. Ja, det er en voksen samtale. Du kan godt.',
      phaseTags: ['follicular'],
      sources: [NHS_MENOPAUSE, NHS_EARLY_MENOPAUSE],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'Uregelmæssige cyklusser i perimenopausen',
      insight:
        'I perimenopausen springer cyklussen ofte rundt. Én måned 24 dage, den næste 40, så to menstruationer tæt på hinanden, så ingen i tre måneder. Nogle cyklusser sker uden ægløsning, og så er der ingen progesteron og ofte mere østrogen i forhold: det kan give kraftigere PMS, ømme bryster og tungere blødning. Andre cyklusser har ægløsning som altid. Appens forudsigelser bliver dårligere, og det er ikke appens fejl, det er biologi. Det er heller ikke din fejl, hvilket for en gangs skyld er rart at kunne sige. Hun kan stadig blive gravid i perimenopausen, så prævention er relevant, indtil der er gået 12 måneder uden menstruation efter 50 år, eller 24 måneder før 50. Og hun kan ikke længere regne med sin krop på samme måde, hvilket er frustrerende. Du mister en app. Hun mister en rytme, hun har kendt i 30 år. Det er ikke det samme.',
      action:
        'Sig: "Jeg ved, at forudsigelserne ikke passer så godt lige nu. Fortæl mig, hvad du selv mærker, så går jeg efter det i stedet for appen." Hun er bedre data end telefonen.',
      phaseTags: ['menstrual', 'luteal'],
      sources: [NHS_MENOPAUSE, NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 15),
      month: M,
      day: 15,
      title: 'Hedeture og nattesved',
      insight:
        'Hedeture er det mest kendte symptom: en pludselig bølge af varme i ansigt, hals og bryst, ofte med rødme, hjertebanken og sved, som varer fra få sekunder til nogle minutter. Om natten hedder det nattesved, og det kan gennembløde tøj og sengetøj. Årsagen er, at hjernens temperaturregulering bliver overfølsom, når østrogen svinger. Omkring tre ud af fire mærker det, og for mange begynder det, mens menstruationen stadig kommer, ofte værst i dagene før blødning. Udløsere kan være varme rum, alkohol, kaffe, krydret mad og stress. Det er ikke farligt, men det er pinligt i et møde og udmattende om natten. Og det hjælper ikke at få det påpeget. Hun ved godt, at hun har det varmt. Det er sådan set hele pointen med en hedetur. Din opgave er ikke at kommentere. Den er at styre termostaten og have det tørre sengetøj klar, som en tjener, der aldrig stiller spørgsmål.',
      action:
        'Gør soveværelset køligere i aften, og læg et ekstra sæt sengetøj og en nattrøje frem, hvor hun kan nå det uden at tænde lys. Er det ikke relevant endnu, så husk, at det bliver det. Du må gerne fryse lidt.',
      phaseTags: ['luteal'],
      sources: [NHS_MENOPAUSE],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'Søvn i perimenopausen',
      insight:
        'Dårlig søvn er for mange det symptom, der påvirker hverdagen mest. Nattesved vækker hende, faldende progesteron fjerner den beroligende virkning, hun havde i lutealfasen, og opvågninger kl. 03-04 med tankemylder er typiske. Flere nætter i træk med afbrudt søvn giver det, du kender fra PMS-ugen: kort lunte, tårer der sidder løst, koncentrationsbesvær. Bare uden en menstruation, der kommer og nulstiller det. Det, der hjælper, er kedeligt og effektivt: køligt soveværelse, faste sovetider, mindre alkohol om aftenen, og at hun ikke skal være den, der står op til alt. Læs den sidste del igen. Der står "hun", og det betyder "du". Vedvarende søvnproblemer er også en god grund til lægebesøg, fordi behandling findes. Du skal ikke løse det. Du skal være den, der står op. Det er hele kvalifikationen, og den kræver ikke engang en uddannelse.',
      action:
        'Tag ansvaret for én ting, der normalt vækker hende om natten eller tidligt om morgenen: børn, hund, vækkeur, alarmen på din telefon. Sig det, før hun beder om det. Og sluk så faktisk alarmen.',
      phaseTags: ['luteal'],
      sources: [NHS_MENOPAUSE],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'Humør, hukommelse og "hjernetåge"',
      insight:
        "Svingende østrogen påvirker de samme signalstoffer i hjernen som PMS, bare over år i stedet for dage. Mange beskriver nedtrykthed, angst, irritabilitet, tab af selvtillid og en tåge, hvor ord og navne forsvinder. Det er ikke indbildning, og det er ikke begyndende demens. Det er dokumenterede symptomer, som ofte bedres, når hormonerne stabiliseres eller behandles. Det rammer hårdt, fordi det tit sker samtidig med, at karrieren topper, børnene er teenagere og forældrene bliver gamle. Kvinder i 40'erne og 50'erne bærer typisk mest på én gang, og så kommer det her oveni. Din opgave er den samme som i PMS-ugen, bare i længere tid: anerkend først, tag det praktiske, og reager på behovet, ikke på tonen. Og hvis du får lyst til at joke med et glemt ord: du har glemt hendes mors fødselsdag tre år i træk. Sid stille, og find en kalender.",
      action:
        'Glemmer hun et ord eller en aftale i dag, så lad være med at lave sjov med det. Sig i stedet noget konkret, hun har klaret godt på det seneste. Du har hele dagen til at finde på det.',
      phaseTags: ['luteal'],
      sources: [NHS_MENOPAUSE],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'Kraftigere eller lettere blødning',
      insight:
        'Blødningen ændrer sig også i perimenopausen. Cyklusser uden ægløsning lader slimhinden vokse længere uden progesteron, så når den endelig afstødes, kan det være kraftigt, langvarigt og med klumper. Andre måneder er blødningen let eller udebliver. Begge dele er almindelige. Men de samme grænser gælder som altid: bind eller tampon skiftet hver time i flere timer, blødning over 7 dage, blødning mellem menstruationer eller efter sex, og især enhver blødning efter 12 måneder uden menstruation, fortjener en læge. Det sidste er vigtigt: blødning efter menopausen er aldrig "bare hormonerne", før en læge har sagt det. Ikke dig, ikke hende, ikke internettet. En læge. Kraftig blødning tapper også jern, så træthed i denne fase skal tages alvorligt. Du lærte om jern i måned 3. Det er stadig det samme jern.',
      action:
        'Tjek, at der er bind i huset i den kraftigste størrelse, hun bruger, og smertestillende. Har hun nævnt, at blødningen er blevet værre, så spørg, om hun har talt med sin læge om det. Ja, det er to ting i dag. Du klarer det.',
      phaseTags: ['menstrual'],
      sources: [NHS_MENOPAUSE, NHS_PERIODS],
    },
    {
      id: dailyId(M, 19),
      month: M,
      day: 19,
      title: 'HRT: en samtale med lægen, ikke med internettet',
      insight:
        'Hormonbehandling i overgangsalderen, HRT, erstatter det østrogen, kroppen ikke længere laver, ofte sammen med gestagen for at beskytte livmoderslimhinden. Det er den mest effektive behandling mod hedeture og nattesved og hjælper ofte på søvn, humør, ledsmerter og tørhed i underlivet. Fordele og risici afhænger af hendes alder, helbred og familiehistorie, og for de fleste under 60 vurderes fordelene at opveje risici, men det er en individuel vurdering, som kun en læge kan lave. Der findes også ikke-hormonelle muligheder. Meget af det, der cirkulerer om HRT, bygger på gamle studier og forældede tal. Du vil på et tidspunkt have læst en overskrift og få lyst til at have en mening. Lad være. Det er ikke din gryde, og du skal ikke røre i den. Din rolle er at bakke op om, at hun får en kvalificeret samtale. Du er chauffør og referent, ikke rådgiver.',
      action:
        'Sig: "Hvis du en dag vil tale med lægen om overgangsalderen, tager jeg gerne med og skriver ned." Det gør besøget mere overskueligt for de fleste. Husk en kuglepen, der virker.',
      phaseTags: [],
      sources: [NHS_HRT, NHS_MENOPAUSE],
    },
    {
      id: dailyId(M, 20),
      month: M,
      day: 20,
      title: 'Menopausen og livet efter',
      insight:
        'Når der er gået 12 måneder uden menstruation, er menopausen indtruffet, og hun er postmenopausal resten af livet. Hormonerne er nu lave og stabile. For mange er det en lettelse: ingen PMS, ingen blødning, ingen prævention. Nogle symptomer aftager over nogle år, mens andre, som tørhed i underlivet, ledsmerter og knogletab, kan fortsætte og kræver opmærksomhed. Risikoen for hjerte-kar-sygdom og knogleskørhed stiger, når østrogen er væk, så motion, kalk, D-vitamin og lægetjek betyder mere. Alt det, du har lært om faser, gælder ikke længere. Appen kan pakke sammen. Det kan du ikke. Det, du har lært om at lægge mærke til, spørge og handle, gælder resten af livet. Der er ingen kalender længere, kun hende. Det var hele pointen fra starten. Kalenderen var støttehjul, og du kan cykle nu.',
      action:
        'Foreslå en fast ugentlig aktivitet, I kan gøre sammen, som styrker knogler og hjerte: en rask gåtur, en cykeltur, et træningspas. Sæt det i kalenderen i dag, ikke "en dag". "En dag" er ikke en ugedag.',
      phaseTags: [],
      sources: [NHS_MENOPAUSE],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: 'Året i tilbageblik: grundmodellen, kommunikation og menstruationen',
      insight:
        'De sidste ti dage handler om at samle op og bygge jeres plan. Vi starter forfra, for du var ikke helt vågen i januar. Måned 1 gav dig modellen: dag 1 er første blødningsdag, fire faser, østrogen op giver overskud, progesteron op giver ro, begge ned giver sårbarhed. Måned 2 var kommunikation: sprog, timing, at spørge i stedet for at gætte, og at fasen må bruges som grund til at give mere, aldrig som argument. Måned 3 gik i dybden med menstruationen: varme mod kramper, jern mod træthed, smertestillende ved de første tegn, praktisk hjælp uden at spørge, og at smerte, der slår hende ud, fortjener en læge. Tre måneder, tre helt konkrete vaner, ligesom tre grundopskrifter, man kan lave i søvne. Enten har du dem, eller også fortjener de en genstart nu. Begge dele er fint. Kun det tredje, "jeg vidste det godt, jeg gjorde det bare ikke", tæller ikke.',
      action:
        'Skriv de tre vigtigste ting ned, du husker fra måned 1-3, og markér hver med "gør jeg" eller "har glemt". Vær ærlig, ingen kigger, ikke engang hunden. Det er starten på jeres plan.',
      phaseTags: ['menstrual'],
    },
    {
      id: dailyId(M, 22),
      month: M,
      day: 22,
      title: 'Året i tilbageblik: follikelfase, ægløsning og lutealfase',
      insight:
        'Måned 4 handlede om follikelfasen: overskuddet vender tilbage, og det er tiden til det store, det svære og det sjove. Måned 5 lærte dig, at ægløsning er én dag, at det frugtbare vindue er seks, og at appens skøn aldrig er prævention. Har du glemt det sidste, så læs det igen. Og igen. Måned 6 handlede om lutealfasen: progesteron giver ro, hæver temperaturen, øger appetitten og forstyrrer søvnen, så køligt soveværelse, gode snacks og lette forslag er hjælp. Det er den midterste tredjedel af året, og det er her, cyklussen svinger mest: fra det største overskud til den stille, indadvendte tid. Hvis du kun husker én ting fra de tre måneder, så lad det være: brug overskuddet, når det er der, og sænk forventningerne, når det er væk. Du kan ikke planlægge en flytning til dag 26. Det er som at sætte en langtidsstegt over klokken seks, når gæsterne kommer klokken syv.',
      action:
        'Fortsæt listen fra i går med måned 4-6. Spørg hende bagefter, hvilken af de tre måneder hun har mærket mest forskel fra din side. Forbered dig på et ærligt svar.',
      phaseTags: ['ovulation', 'luteal'],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'Året i tilbageblik: PMS, smerte og kost',
      insight:
        'Måned 7 var PMS og PMDD: hormonfaldet forstærker følelser, det opfinder dem ikke. Reager på behovet, ikke på tonen. Sig aldrig "er du PMS-ramt?". Du har sikkert sagt det én gang i år alligevel. Vi taler ikke om det. PMDD er en reel lidelse med behandling. Hvis du kun husker én ting fra hele året, så lad det være: anerkend først. Måned 8 lærte dig at genkende mønstre i loggen: hovedpinen dag 25, trætheden dag 1, og at reagere, før hun beder om det. Måned 9 handlede om kost, træning og restitution i hver fase: jern og varme i menstruationen, hårde pas og nye ting i follikelfasen, protein, fibre og søvn i lutealfasen, og at bevægelse hjælper mod både kramper og PMS. Det er de tre måneder, hvor viden bliver til rutine. Rutiner er kedelige, og det er meningen, ligesom en god fond: ingen klapper af den, men alt smager bedre med. Det, hun mærker, er ikke din viden, men at det er lettere end sidste år.',
      action:
        'Tilføj måned 7-9 til listen. Vælg én rutine, der er gledet ud, og gør den i dag: en snack, en gåtur, et spørgsmål stillet på det rigtige tidspunkt. Ikke i morgen. I dag.',
      phaseTags: ['follicular'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 24),
      month: M,
      day: 24,
      title: 'Året i tilbageblik: fertilitet og når noget afviger',
      insight:
        'Måned 10 handlede om fertilitet, prævention og graviditet: fælles ansvar, hvad hun bærer af bivirkninger og bekymring, og hvad du kan tage. Måned 11 handlede om afvigelser: endometriose, PCOS, uregelmæssighed, kraftig blødning, og hvornår noget fortjener en læge. Fællesnævneren er, at du ikke skal diagnosticere eller beslutte, men at du kan være den, der ikke normaliserer det, som ikke er normalt, og den, der tager med til lægen og skriver ned. Denne måned har tilføjet livsfaserne: teenageår, postpartum, perimenopause, menopause. Sammen giver de elleve måneder dig noget, de færreste partnere har: et sprog og en kalender for det, hun går igennem. I januar kunne du dårligt sige "menstruation" uden at rømme dig. Nu kan du sige "lutealfase" i et selskab uden at skæve til hende. Det er fremskridt, uanset hvad dine venner siger. Og du har sgu lov til at være stolt.',
      action:
        'Afslut listen med måned 10-12. Kig på hele listen og tæl, hvor mange punkter der står "gør jeg" ud for. Vis hende listen, også tallet, også hvis det er lavere, end du havde håbet.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 25),
      month: M,
      day: 25,
      title: 'Jeres plan, del 1: hvad hjælper mest i hver fase',
      insight:
        'Nu bygger I planen, og den skal være hendes, ikke appens. Og ikke din. Tag én fase ad gangen og spørg: hvad hjælper dig mest her? Svarene er ofte overraskende konkrete. Menstruation: "at du laver mad dag 1 og 2 uden at spørge." Follikelfase: "at vi planlægger noget sammen, jeg glæder mig til." Ægløsning: "at du prioriterer tid med mig." Lutealfase: "at du ikke tager det personligt, når jeg trækker mig, og at der er snacks." Skriv præcis det, hun siger, ikke det, du tror. Tænker du "det ved jeg godt" under et af svarene, så skriv det alligevel. Det er dem, man glemmer først. Planen behøver ikke være lang. Fire faser, én til to ting pr. fase. Det er en side, der gør et helt år brugbart, som et opskriftskort på køleskabet. Du har læst flere hundrede kort for at nå frem til én side. Det var det værd.',
      action:
        'Sæt jer med en kop kaffe, som du selv har lavet, og skriv "hvad hjælper mest" for hver af de fire faser, med hendes ord. Gem det som en note i appen eller på telefonen.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 26),
      month: M,
      day: 26,
      title: 'Jeres plan, del 2: hvad du skal undgå',
      insight:
        'Anden del af planen er lige så vigtig og sjældnere sagt højt: hvad skal du lade være med? Det kan være sætninger ("er du PMS-ramt?", "du ser træt ud", "det er bare hormonerne"), handlinger (store planer dag 1, svære samtaler dag 26, kommentarer om appetit i lutealfasen) eller reaktioner (at forsvare dig, at trække dig i en uge, at lave sjov med hedeture). Det er ikke en kritikliste, det er en brugsanvisning. Du læser ikke brugsanvisningen til opvaskemaskinen, og det har du sgu fået at høre. Læs i det mindste den her. Bed hende være ærlig, og modtag det uden at forklare dig. Mærk efter, om du er ved at sige "jamen". Sluk for det. Siger hun, at noget, du troede var hjælpsomt, faktisk ikke er det, er det den mest værdifulde information, du får hele året. Skriv det ned ved siden af del 1.',
      action:
        'Spørg: "Hvad er det ene, jeg gør eller siger, som du helst ville have, jeg lod være med i de svære dage?" Lyt, sig tak, og skriv det ned. Intet "jamen".',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 27),
      month: M,
      day: 27,
      title: 'Jeres plan, del 3: signaler og kodeord',
      insight:
        'Det sværeste i de svære dage er ikke at vide, hvad der hjælper, men at vide, hvilken dag det er. Du har kigget i appen, men appen gætter, og du gætter oven i appens gæt. Derfor har mange par glæde af aftalte signaler. Et kodeord for "jeg har brug for, at du tager over nu, uden spørgsmål". Et for "jeg vil gerne have selskab, men ikke snakke". Et for "jeg er ikke vred på dig, jeg er bare tom". Det kan være et ord, en emoji, en farve på kalenderen eller en hånd på skulderen. Pointen er, at hun slipper for at forklare sig, når hun har mindst overskud til det, og at du slipper for at gætte, hvilket du som bekendt ikke er god til. Og et signal den anden vej: "Jeg kan se, det er en tung dag, jeg tager aftenen." Det er det ene sted i programmet, hvor du må spille helt, og så er der endda opvask bagefter.',
      action:
        'Aftal ét kodeord eller signal i dag for "tag over uden spørgsmål". Brug det første gang, det bliver relevant, også selv om det føles fjollet. Det føles fjollet. Det virker alligevel.',
      phaseTags: ['luteal', 'menstrual'],
    },
    {
      id: dailyId(M, 28),
      month: M,
      day: 28,
      title: 'Tjeklisten før menstruationen',
      insight:
        'Det mest konkrete redskab fra hele året er tjeklisten, du laver, når appen siger, at menstruationen er tre-fire dage væk. Den er kort: bind eller tamponer i den rigtige type, smertestillende, noget nemt at spise til dag 1 og 2, varmepude, der virker, et køligt soveværelse, snacks i huset, og en kalender, der er rimeligt tom de første to dage. Tilføj det, der er særligt for hende: jerntabletter, en bestemt te, at hunden bliver luftet af dig. Listen skal ligge et sted, du ser den, ikke i den skuffe, hvor gode intentioner bor, ved siden af batterierne, der ikke virker. Appens påmindelse om forventet menstruation er dit signal. Forberedelse er usynlig, når den lykkes. Hun mærker bare, at det er lettere. Ingen giver dig en medalje for, at der var bind i skabet. Det er sådan set det, der gør det til voksenlivet.',
      action:
        'Skriv jeres egen tjekliste ned med hendes tilføjelser, og gem den samme sted som planen. Tjek listen igennem, hvis menstruationen er på vej nu. Den er måske på vej nu. Kig.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 29),
      month: M,
      day: 29,
      title: 'Det årlige eftersyn og en tak',
      insight:
        'Cyklussen ændrer sig, livet ændrer sig, og planen skal følge med. Aftal derfor et fast årligt eftersyn: en time, samme dato hvert år, hvor I læser planen igennem, retter det, der har ændret sig, og tilføjer det nye. Efter et barn, ved skift af prævention, når 40\'erne melder sig, eller bare når hun siger, at noget føles anderledes. Det er også dagen, hvor du siger tak. Hun har ladet dig følge med i noget privat i et helt år, svaret på spørgsmål, tålt at blive spurgt om udflåd og humør af en mand, der i januar ikke vidste, hvad en follikel var. Det er tillid. Sig det højt. Ikke "du ved godt, jeg sætter pris på det". Højt, med ord, mens hun er i rummet. Taknemmelighed er ikke en fase, det er en vane, og den holder alt det andet i live, som salt i maden: ingen lægger mærke til det, før det mangler.',
      action:
        'Sæt en årlig påmindelse i kalenderen med titlen "vores plan" og dagens dato. Sig så til hende, hvad du er mest taknemmelig for, at hun har delt med dig i år. Hele sætningen, ikke bare "tak".',
      phaseTags: [],
    },
    {
      id: dailyId(M, 30),
      month: M,
      day: 30,
      title: 'Efter programmet: hold vanen i live',
      insight:
        'I morgen kommer der ikke et nyt kort. Ingen notifikation, ingen quiz, ingen stemme, der siger "ét minut, du kan godt". Det, der er tilbage, er kalenderen, planen, tjeklisten og vanen. Vanen er den vigtigste: at kigge i appen et par gange om ugen, at vide, hvor hun er, at lægge det svære uden for PMS-vinduet, at gøre klar før menstruationen, at spørge i stedet for at gætte. Det tager under et minut om dagen. Det, der får vaner til at overleve, er ikke motivation, for motivation forsvinder den dag, der er fodbold. Det er et fast tidspunkt og en synlig konsekvens. Tidspunktet kan være morgenkaffen. Konsekvensen er, at hun mærker forskellen. Du er ikke færdig med at lære, du er færdig med at blive undervist. Resten lærer hun dig selv. Hun har været den bedste lærer hele året. Appen var bare den, der huskede at sige det. Og du? Du kom hele vejen, min ven.',
      action:
        'Vælg et fast tidspunkt, hvor du åbner appen fremover, og sig det til hende. Tag så årets sidste quiz, og fejr, at I kom hele vejen. Du kom faktisk hele vejen.',
      phaseTags: [],
    },
  ],
  weekly: [
    {
      id: weeklyId(M, 1),
      month: M,
      week: 1,
      title: 'Cyklussen gennem et helt liv',
      body: [
        'Det meste af det, du har lært i år, handler om cyklussen, som den er lige nu. Du har lige fået styr på den. Godt gået. Og nu ændrer den sig. Den samme kvinde havde en anden cyklus som 14-årig, og hun får en anden igen som 47-årig. Den her artikel giver dig kortet over hele rejsen, så du kan genkende, hvor I er, og hvad der kommer, i stedet for at stå og se overrasket ud hvert tiende år, som en mand, der netop har lært at lave én ret og nu hører, at gæsterne er vegetarer.',
        'Det begynder i puberteten. Den første menstruation kommer typisk mellem 10 og 15 år, og de første to-tre år er cyklussen uregelmæssig, fordi samspillet mellem hjerne og æggestokke endnu ikke er indkørt. Mange cyklusser sker uden ægløsning, og længder mellem 21 og 45 dage er normale for teenagere. Menstruationen kan udeblive i måneder og komme kraftigt. Det er også her, forholdet til egen krop bliver formet: om det blev mødt med information og ro eller med skam og tavshed, sidder i hende stadig. Har I en datter, niece eller bonusdatter, er det jeres chance for at gøre det anderledes: tal om det, før det sker, hav bind i huset, og lad far være en, man kan spørge. Det kræver, at far kan sige ordet "menstruation" uden at stirre ned i gulvet. Øv dig foran spejlet, hvis det er nødvendigt.',
        "Fra midt i 20'erne til slut-30'erne er cyklussen mest regelmæssig. Ægløsning i de fleste cyklusser, en længde der kun varierer få dage, tydelige mønstre. Det er den periode, appen forudsiger bedst, og den periode, du har lært at aflæse i år. Men den er sjældent uforstyrret. Hormonel prævention skjuler den naturlige cyklus helt: kombinationspræparater holder ægløsningen nede, og blødningen i pausen er en bortfaldsblødning, ikke en menstruation. Gestagenpræparater giver ofte let, uregelmæssig eller ingen blødning. Faserne, du kender, er der ikke, men bivirkninger som humørændringer, hovedpine og lavere lyst kan ligge jævnt over måneden, og hun bærer dem stille. Så stille, at du måske aldrig har spurgt. Det kan du gøre i dag.",
        'Stopper hun med præventionen, vender ægløsningen ofte tilbage inden for den første cyklus, undtagen efter p-sprøjte, hvor det kan tage op til et år. Men de første måneder kan være uregelmæssige, og alt det, præparatet holdt nede, kommer tilbage: kramper, kraftigere blødning, PMS. For en kvinde, der har været på hormoner siden teenageårene, kan det være første gang, hun møder sin egen cyklus som voksen. Her er det, du har lært, mest værd: du kan være den, der siger "det er normalt, at det tager et par måneder", og som holder øje med kalenderen sammen med hende. Det er måske første gang i år, du ved noget om cyklussen, som hun ikke har mærket på egen krop. Brug det pænt. Det er ikke en pointe, du skal vinde.',
        'Gennem hele livet flytter ydre ting cyklussen. Stress, sygdom, rejser, vægtændringer, hård træning, ny medicin og store livsbegivenheder kan alle udsætte ægløsningen. Da lutealfasen er stabil på 12-14 dage, giver en sen ægløsning en sen menstruation. Det betyder også, at det frugtbare vindue flytter sig, og at appens skøn aldrig må bruges som prævention. Vi har sagt det hver måned. Vi siger det igen, for det er den sætning, der er lettest at glemme, når det passer en dårligt. Én skæv cyklus betyder ikke noget. Udebliver menstruationen i over tre måneder uden graviditet, eller bliver cyklussen konsekvent under 21 eller over 35 dage, fortjener det en læge.',
        'Din rolle gennem alle faserne er den samme, men den skifter form. I teenageårene handler det om at være tryg at spørge. I 20\'erne og 30\'erne om at lære mønstrene og time hjælpen. Ved præventionsskift om at have tålmodighed og huske, at bivirkninger er reelle, også når de ikke har en dato. Ved stress om at kunne sige "jeg tror, cyklussen driller, fordi der er pres på, hvad kan jeg tage fra dig?" i stedet for at blive bekymret og google i smug på toilettet.',
        'Denne uge handler om at få overblikket: hvor har hun været, og hvor er I nu? Det er en samtale, de færreste par har haft, og som de fleste bliver glade for. Du behøver ikke sige noget klogt. Du skal spørge og holde mund, i den rækkefølge. Ligesom når man står ved komfuret: først rører man, så smager man, og ingen har nogensinde fået sovsen bedre af at tale højere.',
      ],
      conversationQuestion:
        'Hvordan var din cyklus, da du var teenager, og hvad ville du ønske, nogen havde fortalt dig dengang? Er der noget fra dengang, du stadig bærer på?',
      sources: [ACOG_FIRST_PERIOD, NHS_PERIODS, NHS_CONTRACEPTION],
    },
    {
      id: weeklyId(M, 2),
      month: M,
      week: 2,
      title: 'Efter fødslen: krop, cyklus og humør',
      body: [
        'Uanset om I har børn, venter et eller aldrig får nogen, er tiden efter en fødsel den livsfase, hvor alt det, du har lært om cyklussen, bliver sat på den hårdeste prøve. Hormonfaldet er større end noget PMS, søvnen er væk, og kroppen skal hele, alt imens et lille menneske har brug for alt. Det er eksamen uden læsesal og uden pause. Her er, hvad der sker, og hvad du kan gøre.',
        'Under graviditeten er cyklussen sat på pause. Det gule legeme dør ikke, progesteron holdes højt, og moderkagen tager over. Første trimester ligner derfor lutealfasen i forstærket udgave: træthed, kvalme, ømme bryster, løse følelser. Alt det, du har lært om lutealfasen, kan bruges direkte: sænk forventningerne, tag det praktiske, kommentér ikke krop og appetit, reager på behovet frem for tonen. Du har øvet dig to uger ad gangen i et år. Nu er det den samme øvelse, bare uden at der kommer en menstruation og nulstiller.',
        'Ved fødslen forsvinder moderkagen, og østrogen og progesteron falder brat i løbet af få dage. Hun bløder i op til seks uger. Det er efterblødning fra livmoderen, der heler, ikke menstruation. Den er kraftig i starten, bliver lysere og kan tage til ved anstrengelse. Kroppen er øm, bækkenbunden er belastet, og hvis der er syninger eller kejsersnit, gør alt ondt. Alt det, du har lært om menstruationsfasen, gælder nu i uger: varme, ro, mad med jern, praktisk hjælp uden at spørge og ingen forventninger om noget som helst. Det vigtigste, du kan gøre, er at tage natten så ofte, du kan, og at fjerne alt, der ikke er nødvendigt, fra hendes tallerken. Gæster, der "bare lige kigger forbi", er ikke nødvendige. Det er dig, der siger det til dem, ikke hende.',
        'Hvornår kommer menstruationen tilbage? Ammer hun ikke, typisk efter seks til otte uger. Ammer hun fuldt, holder prolaktin ægløsningen nede, ofte i mange måneder, indtil barnet spiser andet eller sover længere. Det varierer enormt. Og her er den vigtige detalje: ægløsningen kommer før den første menstruation. Hun kan blive gravid, før hun har set en eneste blødning, og amning er ikke sikker prævention, medmindre meget specifikke betingelser er opfyldt. Det er en samtale med jordemoder eller læge, ikke med en kammerat, der har hørt noget, og den skal tages tidligt. Den første menstruation efter fødsel er ofte kraftigere og mere uregelmæssig, og det kan tage nogle cyklusser, før rytmen er tilbage. Den nye rytme er ikke altid den gamle: nogle får mere PMS, nogle mindre, nogle kortere cyklusser.',
        'Så er der humøret. De fleste får "baby blues" omkring dag tre til fem: tårer, uro, overvældelse, som går over inden for to uger. Det er hormonfaldet og søvnmanglen, og det kræver kun ro og omsorg. Fødselsdepression er noget andet. Den rammer omkring hver tiende kvinde, kan komme når som helst i det første år og går ikke over af sig selv. Tegnene er vedvarende tristhed, manglende glæde ved barnet, angst, skyld, tilbagetrækning og tanker om ikke at slå til. Den kan behandles, og jo tidligere, jo bedre. Partnere kan også rammes. Problemet er, at hun selv ofte tror, hun bare er en dårlig mor, og derfor ikke siger det. Du er ofte den, der ser det først, og den, der skal sige det højt og hjælpe hende til lægen, også når hun siger, at det går. Det er ikke at blande sig. Det er det, du er der for.',
        'Det praktiske, der virker i månederne efter en fødsel, er det samme som i menstruationsfasen, bare ganget op: mad der står klar, søvn i sammenhængende blokke, ingen gæster, hun ikke selv har bedt om, ingen kommentarer om krop og en partner, der ikke skal bedes om noget. Hvis du læste den sidste del og tænkte "hvem mon det er", så er det dig. Og én ting mere: hold kalenderen, når hun ikke kan. Hukommelsen er det første, der forsvinder med et lille barn, og den første menstruation efter fødslen kommer ofte som en overraskelse.',
        'Står I ikke i det nu, er samtalen stadig værd at tage. Hvad har hun hørt fra veninder? Hvad frygter hun? Hvad ville hun have brug for, at du husker? At have talt om det på forhånd gør det muligt at handle, når overskuddet til at forklare er væk. Og det er væk. Det er hele pointen med at tale om det nu.',
      ],
      conversationQuestion:
        'Hvis vi en dag står med et nyfødt barn, hvad vil du så have, at jeg tager over uden at spørge, og hvad vil du have, at jeg holder øje med hos dig?',
      sources: [NHS_POST_PREGNANCY, NHS_PND, NHS_CONTRACEPTION],
    },
    {
      id: weeklyId(M, 3),
      month: M,
      week: 3,
      title: 'Perimenopause og menopause: den lange overgang',
      body: [
        'Overgangsalderen er ikke én dag, hvor menstruationen stopper. Det er en overgang på typisk fire til otte år, hvor hormonerne svinger mere, end de nogensinde har gjort, og hvor mange kvinder får symptomer, som hverken de selv eller deres partner genkender som hormonelle. Det er en periode, hvor din viden fra i år er guld værd, og hvor din reaktion betyder mere end nogen app. Appen giver i øvrigt op undervejs. Det må du ikke.',
        "Ordene først. Perimenopausen er årene op til den sidste menstruation, hvor æggestokkene gradvist holder op med at reagere stabilt. Menopausen er den sidste menstruation, som først kan bekræftes, når der er gået 12 måneder uden blødning. Postmenopausen er alt derefter. Gennemsnitsalderen for menopause er 51, og perimenopausen begynder typisk i 40'erne. Kommer menopausen før 45, kaldes den tidlig, og før 40 for tidlig, og begge dele fortjener en læge, fordi behandling beskytter knogler og hjerte.",
        'Det første tegn er ofte, at cyklussen ændrer sig. Follikelfasen bliver kortere, så cyklussen forkortes til 24-25 dage. Senere springer den rundt: 24 dage, så 40, så to menstruationer tæt på hinanden, så ingen i tre måneder. Nogle cyklusser sker uden ægløsning, og uden progesteron kan slimhinden vokse længere og afstødes kraftigt, langvarigt og med klumper. Andre måneder er blødningen let eller udebliver. Appens forudsigelser bliver dårligere, og det er biologi, ikke appen. Hun kan stadig blive gravid, så prævention er relevant, indtil der er gået 12 måneder uden menstruation efter 50 år, eller 24 måneder før 50. De samme grænser gælder som altid: bind skiftet hver time, blødning over 7 dage, blødning mellem menstruationer, og især enhver blødning efter 12 måneder uden menstruation fortjener en læge.',
        'Symptomerne kommer ofte, mens menstruationen stadig kommer. Hedeture og nattesved rammer tre ud af fire: pludselig varme, rødme, hjertebanken, sved, ofte værst i dagene før blødning. Søvnen bliver afbrudt af sved og af opvågninger med tankemylder, når progesterons beroligende virkning forsvinder. Humøret svinger: nedtrykthed, angst, irritabilitet, tab af selvtillid. Hukommelsen driller, ord forsvinder, koncentrationen slipper. Led gør ondt, huden bliver tør, underlivet bliver tørt, og lysten kan falde. Alt det er dokumenterede symptomer, ikke indbildning, og det sker ofte samtidig med, at hun har mest på tallerkenen i hele sit liv: karriere, teenagebørn, gamle forældre.',
        'HRT, hormonbehandling, erstatter det østrogen, kroppen ikke længere laver, ofte sammen med gestagen. Det er den mest effektive behandling mod hedeture og nattesved og hjælper ofte på søvn, humør, led og tørhed. For de fleste under 60 vurderes fordelene at opveje risici, men det afhænger af hendes alder, helbred og familiehistorie, og kun en læge kan vurdere det. Der findes også ikke-hormonelle muligheder. Meget af det, der cirkulerer om HRT, bygger på gamle studier. Din rolle er ikke at have en holdning til det, men at bakke op om, at hun får en kvalificeret samtale, og gerne at tage med og skrive ned. Chauffør og referent. Ikke rådgiver, og slet ikke en, der har læst en overskrift.',
        'Hvad kan du konkret gøre? Det samme som i PMS-ugen, bare over år: anerkend først, reager på behovet, ikke på tonen, tag det praktiske. Gør soveværelset køligt, og læg tørt sengetøj frem, så hun kan skifte uden at tænde lys. Tag ansvaret for det, der vækker hende om natten. Lav ikke sjov med hedeture eller glemte ord, nogensinde. Har du en vittighed klar, så gem den til dig selv og en væg. Sig noget konkret, hun har klaret godt. Foreslå bevægelse sammen, fordi motion beskytter knogler og hjerte, når østrogen er væk. Og lyt uden at fikse, når hun siger, at hun ikke kan genkende sig selv.',
        'Når menopausen er indtruffet, er hormonerne lave og stabile. For mange er det en lettelse: ingen PMS, ingen blødning, ingen prævention. Faserne er væk, og det samme er kalenderen. Det, der er tilbage, er alt det, du har lært om at lægge mærke til, spørge og handle. Det gælder resten af livet. Kalenderen var støttehjul. Nu kører du uden, og du kører godt.',
      ],
      conversationQuestion:
        'Hvad ved du om, hvordan overgangsalderen var for din mor eller andre kvinder i din familie, og hvad tænker du om, at den kommer til dig? Hvad vil du have, at jeg gør, når den gør?',
      sources: [NHS_MENOPAUSE, NHS_HRT, NHS_EARLY_MENOPAUSE],
    },
    {
      id: weeklyId(M, 4),
      month: M,
      week: 4,
      title: 'Jeres plan: sådan hjælper jeg dig bedst',
      body: [
        'Du har brugt et år på at lære cyklussen at kende. Du har læst om follikler, progesteron og udflåd ved morgenkaffen og ikke sagt et ord om det til dine venner. Nu skal viden blive til én side, I begge kender: jeres plan. Den er ikke appens, den er hendes, skrevet med hendes ord, og den skal kunne bruges på en dag, hvor ingen af jer har overskud til at tænke. Tænk på den som opskriftskortet i køkkenskuffen: ikke fint, men det er det, man finder frem, når det brænder på. Sådan bygger I den.',
        'Del 1 er "hvad hjælper mest i hver fase". Tag én fase ad gangen og spørg hende. Svarene er typisk konkrete, og de er tit ikke det, du havde gættet. Menstruation: mad dag 1 og 2 uden at spørge, varmepude, ro, ingen planer. Follikelfase: planlæg noget sammen, hun glæder sig til, tag de svære samtaler her, sig højt, at energien er tilbage. Ægløsning: prioritér tid sammen, nærhed uden pres. Lutealfase: snacks i huset, køligt soveværelse, lette konkrete forslag, og at du ikke tager det personligt, når hun trækker sig. Én til to ting pr. fase. Skriv præcis det, hun siger. Ikke din oversættelse af det.',
        'Del 2 er "hvad du skal undgå". Den bliver sjældnere sagt højt og er mindst lige så vigtig. Sætninger: "er du PMS-ramt?", "det er bare hormonerne", "du ser træt ud", "du overreagerer". Handlinger: store planer dag 1, svære samtaler dag 26, kommentarer om appetit eller krop i lutealfasen, sjov med hedeture eller glemte ord. Reaktioner: at forsvare dig, at trække dig i en uge, at gøre hendes irritation til dit problem. Bed hende være ærlig, og tag imod det uden at forklare dig. Ordet "jamen" er forbudt i den samtale. Er noget, du troede var hjælpsomt, ikke det, er det årets vigtigste information. Også selv om den stikker lidt.',
        'Del 3 er signaler og kodeord. Det sværeste i de svære dage er ikke at vide, hvad der hjælper, men at vide, hvilken dag det er, uden at hun skal forklare sig. Aftal derfor et kodeord for "tag over nu, uden spørgsmål", et for "selskab, men ikke snak" og et for "jeg er ikke vred på dig, jeg er tom". Et ord, en emoji, en farve i kalenderen, en hånd på skulderen. Og ét signal den anden vej: "Jeg kan se, det er en tung dag, jeg tager aftenen." Brug dem, også når det føles fjollet. Det føles fjollet. De virker alligevel, fordi de fjerner forklaringen på det tidspunkt, hvor forklaringen er dyrest.',
        'Del 4 er tjeklisten før menstruationen. Når appen siger tre-fire dage til forventet menstruation, går du listen igennem: bind eller tamponer i den rigtige type, smertestillende, nem mad til dag 1 og 2, varmepude, køligt soveværelse, snacks, en kalender der er rimeligt tom de første to dage. Plus det, der er særligt for hende: jern, en bestemt te, at du tager hunden. Det er mise en place for hverdagen: alt er klar, før nogen har brug for det. Forberedelse er usynlig, når den lykkes. Hun mærker bare, at det er lettere end sidste gang. Ingen giver dig en medalje for bind i skabet. Det er pointen.',
        "Del 5 er det årlige eftersyn. Cyklussen ændrer sig med livet: efter et barn, ved skift af prævention, når 40'erne melder sig, eller bare når hun siger, at noget føles anderledes. Sæt en fast dato hvert år, hvor I læser planen igennem, retter og tilføjer. Det er også dagen, hvor du siger tak. Hun har ladet dig følge med i noget privat i et helt år, og det er tillid. Sig det højt. Med ord. Mens hun er i rummet.",
        'Til sidst: vanen. I morgen kommer der ikke et nyt kort, og det er meningen. Det, der får vanen til at overleve, er et fast tidspunkt, hvor du åbner appen, og en synlig konsekvens: at hun mærker forskellen. Under et minut om dagen. Du er ikke færdig med at lære, du er færdig med at blive undervist. Resten lærer hun dig selv, hvis du bliver ved med at spørge. Og du bliver ved med at spørge. Det er det, du for alvor er blevet god til i år, og du kan være stolt af det. Det er mere end nok.',
      ],
      conversationQuestion:
        'Hvis du skulle vælge én ting fra hele planen, som du vil have, at jeg aldrig glemmer, hvad er det så? Og hvad er det ene, du selv vil gøre for at gøre det lettere for mig at hjælpe?',
      sources: [NHS_PMS, NHS_PERIODS],
    },
  ],
  wrap: {
    id: wrapId(M),
    month: M,
    title: 'Måned 12: Livsfaser og årets opsamling',
    summary: [
      "Den sidste måned viste, at cyklussen ikke er den samme hele livet. Den er uregelmæssig i teenageårene, mest stabil i 20'erne og 30'erne, skjult under hormonel prævention, sat på pause i graviditeten, langsom til at vende tilbage efter fødsel og amning, uforudsigelig i perimenopausen og til sidst væk. Stress, sygdom og store livsbegivenheder flytter den undervejs. Du har lært, at efterblødning ikke er menstruation, at ægløsning kommer før første menstruation efter fødsel, at fødselsdepression fortjener en læge tidligt, at hedeture, søvnproblemer og hjernetåge er reelle symptomer, og at HRT er en samtale med lægen, ikke med internettet. Det er mere, end de fleste partnere nogensinde får at vide. Og du fik det ved morgenkaffen.",
      'Du har samlet hele året i én plan: hvad der hjælper mest i hver fase, hvad du skal undgå, jeres kodeord, tjeklisten før menstruationen og et årligt eftersyn. Alt det bygger på den samme grundregel, som er gået igen hver måned, indtil du ikke kunne undgå at huske den: anerkend først, reager på behovet frem for tonen, tag det praktiske uden at spørge, og lad være med at normalisere det, der ikke er normalt. I januar kunne du ikke sige "lutealfase" uden at kigge væk. Nu kan du det, og du ved, hvad du skal gøre bagefter.',
      'Programmet er slut, men vanen fortsætter. Kalenderen, planen og et minut om dagen er alt, der skal til. Tak fordi du blev hele året. Hun lagde mærke til det, og det var hele pointen. Du kan være stolt, min ven. Det kan du sgu.',
    ],
    keepDoing: [
      'Åbn appen på et fast tidspunkt, og vid, hvilken fase hun er i, før hun behøver at sige det.',
      'Gå tjeklisten igennem, når menstruationen er tre-fire dage væk. Bind, varmepude, mad, ro.',
      'Brug jeres kodeord, og tag over uden spørgsmål, når det bliver sagt. Uden spørgsmål betyder nul spørgsmål.',
      'Reager på behovet, ikke på tonen, uanset livsfase.',
      'Sig "det fortjener en læge", når noget afviger, og tilbyd at tage med og skrive ned.',
      'Hold det årlige eftersyn af planen, og sig tak. Højt, med hele sætningen.',
    ],
    quiz: [
      {
        question:
          'Hun stoppede med p-piller for to måneder siden, og cyklussen er uregelmæssig med kramper, hun ikke har haft i årevis. Du står med en varmepude og en bekymret mine. Hvad hjælper mest?',
        options: [
          'Foreslå at hun begynder på p-piller igen, så alt bliver som før',
          'Sige at det er normalt, at det tager nogle måneder, og holde øje med kalenderen sammen med hende',
          'Antage at der må være noget galt, og bestille lægetid i panik',
          'Ikke sige noget, det er hendes krop, og du vil ikke blande dig',
        ],
        correctIndex: 1,
        explanation:
          'Når præventionen stopper, vender den naturlige cyklus tilbage med alt, præparatet holdt nede. De første måneder kan være uregelmæssige. Tålmodighed og en fælles kalender er den bedste hjælp, og varmepuden må gerne bruges. En læge er relevant, hvis menstruationen udebliver i over tre måneder.',
      },
      {
        question:
          'Hun har født for tre uger siden og ammer. Hun siger, hun ikke behøver prævention, fordi hun ikke har fået menstruation endnu. Hvad er den rigtige reaktion?',
        options: [
          'Nikke, for amning beskytter, det har du hørt et sted',
          'Sige at ægløsningen kommer før den første menstruation, og foreslå at I taler med jordemoder eller læge om en plan',
          'Vente og se, om menstruationen kommer',
          'Insistere på at hun skal begynde på p-piller i morgen',
        ],
        correctIndex: 1,
        explanation:
          'Ægløsningen kommer før den første blødning, så hun kan blive gravid uden at have set en menstruation. Amning beskytter kun under meget specifikke betingelser, og "det har jeg hørt et sted" er ikke en af dem. En kort samtale med en fagperson er den konkrete hjælp.',
      },
      {
        question:
          'Fem måneder efter fødslen er hun vedvarende trist, græder ofte, føler ikke glæde ved barnet og siger, at hun bare er en dårlig mor. Hvad hjælper mest?',
        options: [
          'Sige at alle nybagte mødre har det sådan, og at det går over',
          'Give hende mere tid alene og håbe på det bedste',
          'Sige højt, at det lyder som mere end træthed, og hjælpe hende til en læge, også hvis hun siger, det går',
          'Vente til barnet sover bedre om natten',
        ],
        correctIndex: 2,
        explanation:
          'Baby blues går over inden for to uger. Vedvarende tristhed og manglende glæde måneder efter fødslen kan være fødselsdepression, som rammer hver tiende, kan behandles og ikke går over af sig selv. Partneren ser det ofte først, og det er her, du siger det højt.',
      },
      {
        question:
          'Hun er 47, vågner gennemblødt af sved, og cyklussen springer mellem 24 og 40 dage. Hvad er den bedste hjælp i aften?',
        options: [
          'Spørge om hun har tænkt over, at det nok er overgangsalderen, som om hun ikke selv havde bemærket det',
          'Gøre soveværelset køligt, lægge tørt sengetøj frem, og tilbyde at tage med til lægen, når hun vil tale om det',
          'Foreslå at hun dropper prævention, nu hvor cyklussen er uregelmæssig',
          'Lave sjov med det for at lette stemningen',
        ],
        correctIndex: 1,
        explanation:
          'Nattesved og uregelmæssig cyklus er typiske i perimenopausen. Praktisk hjælp i nat og opbakning til en lægesamtale om muligheder, herunder HRT, er det, der virker. Prævention er stadig relevant, og sjov hjælper aldrig. Du må gerne fryse lidt.',
      },
      {
        question:
          'Hun har haft 14 måneder uden menstruation og får pludselig en blødning. Hvad gør du?',
        options: [
          'Siger at det bare er hormonerne, der driller',
          'Foreslår at vente en måned og se',
          'Siger at blødning efter menopausen altid fortjener en læge, og tilbyder at bestille tid sammen',
          'Tjekker appens forudsigelse, som gav op for et år siden',
        ],
        correctIndex: 2,
        explanation:
          'Blødning efter 12 måneder uden menstruation skal altid undersøges af en læge. Det er oftest ufarligt, men det er ikke noget, I selv kan afgøre, og det skal ikke udsættes. Appen har ingen holdning her, og det skal du heller ikke have.',
      },
      {
        question:
          'Programmet er slut, og I skal holde vanen i live. Hvad er den mest holdbare tilgang?',
        options: [
          'Læse alle kort igennem igen fra måned 1, hver gang du er i tvivl',
          'Et fast tidspunkt hvor du åbner appen, jeres plan gemt et synligt sted, og et årligt eftersyn med hende',
          'Stole på at du husker det nu, for du er jo blevet god',
          'Bede hende sige til, når hun har brug for noget',
        ],
        correctIndex: 1,
        explanation:
          'Vaner overlever på faste tidspunkter og synlige konsekvenser, ikke på motivation. Planen med hendes ord, tjeklisten og det årlige eftersyn er det, der gør et års viden brugbar i årene fremover. Din hukommelse alene har du allerede testet i år. Den tabte.',
      },
    ],
  },
};
