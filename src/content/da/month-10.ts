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
const SUNDHED_PRAEVENTION: Source = {
  label: 'Sundhed.dk: Prævention',
};
const SUNDHED_GRAVID: Source = {
  label: 'Sundhed.dk: Graviditet',
};

const M = 10;

export const month10: MonthContent = {
  month: M,
  theme: 'Fertilitet, prævention og graviditet',
  focus: 'Se, hvad hun bærer af ansvar og bivirkninger, og tag det, du kan tage.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'Hvem bærer præventionen?',
      insight:
        'I de fleste par er det hende, der bærer præventionen: hun husker pillen, hun får spiralen lagt op, hun lever med bivirkningerne, og hun er den, der bliver gravid, hvis det går galt. Det er ikke nogens skyld; de fleste metoder er bare lavet til hendes krop. Men ansvaret behøver ikke følge metoden. Du kan huske, spørge, betale, tage med til lægen, og du kan tage en af de to metoder, der findes til mænd. Denne måned handler om, hvordan metoderne virker, hvad de koster hende i cyklus og humør, og hvad der sker, når I vil den anden vej: prøve at få et barn. Første skridt er at vide, hvad I faktisk bruger.',
      action:
        'Spørg hende i dag: "Hvad bruger vi egentlig, og hvordan har du det med det?" Lyt til svaret uden at foreslå noget endnu.',
      phaseTags: [],
      sources: [NHS_CONTRACEPTION, SUNDHED_PRAEVENTION],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: 'P-pillen: sådan virker den',
      insight:
        'Den almindelige p-pille indeholder syntetisk østrogen og gestagen. De holder hormonerne så jævne, at hjernen aldrig sender det LH-hop, der udløser ægløsning. Ingen ægløsning, ingen graviditet. Samtidig bliver slimen i livmoderhalsen tykkere, og slimhinden tyndere. Den "menstruation", hun får i pillepausen, er en blødning udløst af hormonfaldet, ikke en rigtig cyklus; derfor kan man springe pausen over. Taget hver dag er pillen over 99 procent sikker; i virkeligheden, med glemte piller, opkast og rejser, er tallet omkring 91 procent. Det betyder, at cirka 9 ud af 100 kvinder bliver gravide på et år. Den daglige huskeopgave er hendes, medmindre I deler den.',
      action:
        'Hvis hun tager p-piller: spørg, hvornår på dagen hun tager dem, og tilbyd at være den, der minder om det, når I er ude eller rejser.',
      phaseTags: [],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 3),
      month: M,
      day: 3,
      title: 'Bivirkninger, hun måske ikke nævner',
      insight:
        'P-piller giver mange en lettere og mere forudsigelig blødning og mindre PMS. Men de kan også give hovedpine, ømme bryster, kvalme, pletblødning, nedsat lyst og for nogle et fladere eller mere trykket humør. Forskningen er ikke entydig, men en del kvinder oplever, at humøret bliver bedre, når de stopper, og først da opdager de, hvad pillen havde kostet. Fordi hun har taget den i årevis, er det svært at vide, hvad der er hende, og hvad der er pillen. Den kortvarige risiko for blodpropper er lille, men reel, og større ved rygning og migræne med aura. Alt det bærer hun, ofte uden at det bliver talt om.',
      action:
        'Spørg: "Er der noget ved din prævention, du tror påvirker dit humør eller din lyst?" Og tag svaret alvorligt, også hvis det er "det ved jeg ikke".',
      phaseTags: ['luteal'],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'Minipillen: kun gestagen',
      insight:
        'Minipillen indeholder kun gestagen, ikke østrogen. De fleste nyere typer stopper ægløsningen, ældre typer virker mest ved at gøre slimen i livmoderhalsen tyk. Den kan bruges af kvinder, der ikke tåler østrogen, fx ved migræne med aura, forhøjet blodtryk eller under amning. Prisen er ofte uregelmæssig blødning: nogle får slet ingen menstruation, andre pletbløder i ugevis, og mønstret kan skifte fra måned til måned. Det gør appens forudsigelser upålidelige, fordi der ikke er en rigtig cyklus at forudsige. Minipillen tages hver dag uden pause, og nogle typer skal tages inden for et vindue på tre timer. Sikkerheden ligner den almindelige pille: over 99 procent ved perfekt brug, omkring 91 i praksis.',
      action:
        'Hvis hun bruger minipillen eller anden gestagenmetode: læg mærke til, at blødningsmønstret kan være uregelmæssigt, og lad være med at kommentere "sen" eller "tidlig" menstruation.',
      phaseTags: [],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'Hormonspiralen',
      insight:
        'Hormonspiralen er et lille T-formet plastikstykke, som lægen lægger op i livmoderen. Den afgiver gestagen lokalt, gør slimhinden tynd og slimen tyk, og hos nogle stopper den ægløsningen. Den holder i 3-8 år afhængigt af typen, er over 99 procent sikker, og hun skal ikke huske noget. Mange får meget lettere blødning eller slet ingen, og den bruges også som behandling ved kraftig menstruation. Opsætningen kan gøre ondt, hos nogle meget ondt, og de første 3-6 måneder giver ofte pletblødning og kramper. Hormonbivirkninger som humørsvingninger og acne er sjældnere end med piller, fordi dosis er lavere, men de findes. Hun kan mærke trådene, og det kan du undertiden også.',
      action:
        'Hvis hun har eller overvejer spiral: spørg, hvordan opsætningen var eller bekymrer hende, og tilbyd at tage med og køre hjem bagefter.',
      phaseTags: ['menstrual'],
      sources: [NHS_CONTRACEPTION, SUNDHED_PRAEVENTION],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: 'Kobberspiralen: uden hormoner',
      insight:
        'Kobberspiralen indeholder ingen hormoner. Kobberet gør miljøet i livmoderen fjendtligt for sædceller, så de ikke kan befrugte ægget. Hun får sin egen, naturlige cyklus med ægløsning og alt, hvad der hører til, og appen passer derfor bedre end med hormonmetoder. Den holder i 5-10 år og er over 99 procent sikker. Prisen er blødningen: den bliver ofte kraftigere, længere og mere smertefuld, især det første halve år. For en kvinde, der i forvejen har kraftig menstruation, kan det være for meget. Til gengæld er den fri for humørbivirkninger, og den kan tages ud, når I vil, hvorefter fertiliteten er tilbage med det samme. Den er også den mest effektive nødprævention, der findes.',
      action:
        'Hvis hun har kobberspiral: hav ekstra varme, smertestillende og de bind eller tamponer, hun bruger, klar til de første menstruationsdage.',
      phaseTags: ['menstrual'],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'P-staven',
      insight:
        'P-staven er en lille, blød stav, der lægges under huden på indersiden af overarmen og afgiver gestagen i tre år. Den stopper ægløsningen og er over 99 procent sikker, den sikreste metode overhovedet, fordi der ikke er noget at glemme. Den lægges og fjernes med lokalbedøvelse på få minutter. Den store ulempe er blødningsmønstret: cirka hver femte får ingen menstruation, mange får uregelmæssig eller langvarig pletblødning, og det er den mest almindelige grund til at få den taget ud. Hovedpine, acne, ømme bryster og humørændringer forekommer. Fertiliteten kommer hurtigt tilbage, når staven fjernes. Som ved minipillen bliver appen usikker, fordi cyklussen er sat på pause.',
      action:
        'Læg mærke til, om hendes prævention giver blødning uden for mønstret, og spørg, om det generer hende, i stedet for at antage, at det er fint.',
      phaseTags: [],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: 'P-sprøjten',
      insight:
        'P-sprøjten er en gestagenindsprøjtning hver 12.-13. uge, som stopper ægløsningen. Ved tiden overholdt er den over 99 procent sikker; i praksis, med forsinkede tider, omkring 94. Mange får ingen menstruation efter et år, hvilket nogle elsker. Men den skiller sig ud på to punkter. Den kan ikke tages ud igen: bivirkninger som vægtøgning, humørændringer og hovedpine skal rides af, til virkningen aftager. Og fertiliteten kan være op til et år om at vende tilbage, efter den sidste sprøjte, hvilket betyder noget, hvis I overvejer børn inden for de næste par år. Den kan også give et lille tab af knogletæthed ved langvarig brug, som normalt retter sig igen.',
      action:
        'Hvis hun får p-sprøjten: læg datoen for næste sprøjte i din egen kalender, så det ikke kun er hende, der holder styr på den.',
      phaseTags: ['menstrual'],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'Kondomet: den metode, du kan bære',
      insight:
        'Kondomet er den ene af to metoder, der lægger ansvaret på din krop. Brugt rigtigt hver gang er det 98 procent sikkert; i praksis, med sene påsætninger, forkert størrelse og "bare denne ene gang", er tallet omkring 85. Det er den eneste metode, der også beskytter mod kønssygdomme. Den mest almindelige fejl er ikke, at det springer, men at det ikke bliver brugt fra starten, eller at det glider af, fordi det ikke passer. Størrelse betyder mere, end de fleste tror, og der findes mange. Kombineret med, at I begge kender hendes frugtbare vindue, er kondomet et reelt alternativ for par, hvor hun ikke tåler hormoner. Det kræver, at du er den, der har dem, og den, der tager dem frem.',
      action:
        'Tjek, om der er kondomer i huset, om de er udløbet, og om størrelsen faktisk passer. Køb dem selv; det er dit ansvar at have dem.',
      phaseTags: ['ovulation'],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 10),
      month: M,
      day: 10,
      title: 'Sterilisation af manden',
      insight:
        'Vasektomi er et indgreb på 15-20 minutter i lokalbedøvelse, hvor sædlederne afbrydes, så sæden ikke længere kommer med i udløsningen. Det ændrer intet ved lyst, rejsning, testosteron eller udløsningens mængde; sædcellerne udgør en meget lille del. Det er over 99 procent sikkert, sikrere og langt mindre indgribende end sterilisation af kvinden, som kræver kikkertoperation i fuld bedøvelse. Der går 8-12 uger, før prøverne viser, at sæden er væk, så I skal bruge anden prævention indtil da. Det skal regnes som permanent; en tilbageførsel lykkes ikke altid. For par, der er færdige med at få børn, er det den mest konkrete måde, du kan overtage hele byrden på.',
      action:
        'Hvis I er sikre på, at I ikke skal have flere børn: nævn i dag, at du har læst om vasektomi, og at du er åben for at være den, der får det gjort.',
      phaseTags: [],
      sources: [NHS_VASECTOMY],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'Sikre perioder: de ærlige tal',
      insight:
        'Naturlig familieplanlægning betyder at finde det frugtbare vindue ved at måle temperatur hver morgen, følge slimen i livmoderhalsen og eventuelt bruge ægløsningstest, og så undgå sex eller bruge kondom i de dage. Gjort meget præcist, hver dag, med undervisning, kan det nå 99 procent. I praksis, hvor cyklusser flytter sig med stress, sygdom og dårlig søvn, og hvor livet kommer i vejen, bliver omkring hver fjerde kvinde gravid på et år. Det er ikke en dårlig metode, det er en krævende metode. Og vær ærlig om én ting: denne app er ikke den. Appen skønner ud fra gennemsnit og er lavet til at forstå, ikke til at planlægge sikre dage. Brug den aldrig som prævention.',
      action:
        'Sig sætningen højt for dig selv: "Appens frugtbare vindue er et skøn, ikke prævention." Hvis I bruger sikre perioder, så tal om, hvor meget metoden faktisk bliver fulgt.',
      phaseTags: ['ovulation', 'follicular'],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: 'Samtalen om at skifte',
      insight:
        'Mange kvinder bliver ved med en metode, de ikke er glade for, fordi det virker som en stor ting at skifte, og fordi ingen har spurgt. Måske har hun brugt p-piller siden teenageårene og aldrig mærket sin egen cyklus som voksen. Måske gruer hun for en ny spiral. Måske overvejer hun at stoppe helt for at se, hvem hun er uden hormoner. Det er en beslutning om hendes krop, og den er hendes. Din rolle er at gøre den lettere: at vide, hvad alternativerne er, at sige højt, at du er villig til at bære kondomer eller en vasektomi, og ikke at gøre din bekvemmelighed til et argument. Follikelfasen er et godt tidspunkt til samtalen.',
      action:
        'Åbn samtalen i dag: "Hvis du kunne vælge frit, ville du så bruge det samme som nu? Jeg vil gerne tage mere af det, hvis det hjælper."',
      phaseTags: ['follicular'],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: 'Nødprævention: hvad, hvornår, hvor',
      insight:
        'Når kondomet springer, eller pillen er glemt, findes der tre muligheder. Fortrydelsespillen med levonorgestrel virker bedst inden for tre døgn, og pillen med ulipristal inden for fem; begge udsætter ægløsningen, så sæden dør, før ægget kommer. De virker dårligt, hvis ægløsningen allerede er sket. Kobberspiralen kan lægges op til fem dage efter og virker over 99 procent uanset cyklusdag, og hun kan beholde den bagefter. Pillerne fås på apoteket uden recept, jo før jo bedre. De kan give kvalme, og den næste menstruation kan komme tidligere eller senere end ventet. Det er sikkert at bruge dem, men det er ikke en metode; det er en nødløsning, og turen til apoteket kan lige så godt være din.',
      action:
        'Find ud af, hvor det nærmeste apotek med længe åbent ligger, og sig til hende, at hvis uheldet er ude, henter du fortrydelsespillen.',
      phaseTags: ['ovulation'],
      sources: [NHS_EMERGENCY],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'Når I prøver: timing uden stopur',
      insight:
        'Vil I gerne have et barn, er det frugtbare vindue de fem dage før ægløsning og selve dagen. Chancen er størst de to-tre dage lige før, fordi sæden skal ligge klar, når ægget kommer, og ægget kun lever et døgn. Sex hver anden eller tredje dag gennem hele cyklussen rammer vinduet af sig selv, uden at nogen skal regne. Vil I være mere præcise, er ægløsningstest, der måler LH i urinen, og hendes eget udflåd bedre end appens skøn. Efter ægløsning er der ikke mere at hente den måned, og det er okay at slappe af. Og det er værd at sige højt: det er stadig sex, ikke en opgave. Måden, I taler om det på, afgør, om det bliver ved med at være rart.',
      action:
        'Hvis I prøver: aftal "hver anden dag i de næste to uger" i stedet for at jagte én dato, og vær den, der tager initiativet mindst halvdelen af gangene.',
      phaseTags: ['ovulation', 'follicular'],
      sources: [NHS_TRYING],
    },
    {
      id: dailyId(M, 15),
      month: M,
      day: 15,
      title: 'Hvor lang tid tager det normalt?',
      insight:
        'Et sundt par, der har sex regelmæssigt uden prævention, har omkring 20-25 procent chance for graviditet pr. cyklus. Det lyder lavt, men det lægger sig sammen: omkring 84 ud af 100 par er gravide inden for et år, og omkring 92 inden for to. Det betyder, at seks til otte måneder uden resultat er helt inden for det normale, ikke et tegn på, at noget er galt. De fleste tror, det går hurtigere, fordi al præventionssnakken har lært dem, at graviditet sker ved det mindste uheld. Det gør det ikke. At kende tallene på forhånd gør de første måneder lettere for jer begge, og det giver dig en rolig sætning at sige, når testen er negativ igen.',
      action:
        'Fortæl hende tallet i dag: "Otte ud af ti par bruger op til et år. Vi er ikke bagud." Sig det, før I får brug for det.',
      phaseTags: ['luteal'],
      sources: [NHS_TRYING],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'Alder: hendes og din',
      insight:
        'Kvinder fødes med alle deres æg, og både antallet og kvaliteten falder med alderen, langsomt fra begyndelsen af 30’erne og hurtigere efter 35. Ved 40 er chancen pr. cyklus omkring en tredjedel af, hvad den var ved 30, og risikoen for spontan abort er højere. Det er derfor, rådet om at søge hjælp kommer tidligere for kvinder over 35. Mænds fertilitet falder også, bare mere gradvist: sædkvaliteten og tiden til graviditet påvirkes fra omkring 40. Ingen af delene er en dom, og mange bliver gravide senere. Men det er værd at tale ærligt om timing, og ikke overlade bekymringen for uret til hende alene, som om det kun var hendes krop, der havde et.',
      action:
        'Hvis børn er på tale: spørg, om hun tænker på timing og alder, og fortæl hende, hvad du selv tænker, i stedet for at vente på, at hun tager det op.',
      phaseTags: [],
      sources: [NHS_INFERTILITY],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'Folinsyre, før I går i gang',
      insight:
        'Folinsyre er det ene tilskud, der virkelig betyder noget. Det nedsætter risikoen for rygmarvsbrok og andre neuralrørsdefekter markant, og neuralrøret lukker allerede i uge 3-4, ofte før hun ved, at hun er gravid. Derfor er anbefalingen 400 mikrogram dagligt fra det øjeblik, I stopper med prævention, og til og med uge 12. Kvinder med diabetes, epilepsi, svær overvægt eller tidligere barn med neuralrørsdefekt anbefales en højere dosis via lægen. Det er en billig tablet, der fås i ethvert supermarked, og alligevel begynder de fleste for sent. Det er en af de få ting i graviditet, hvor timingen ligger før starten, og hvor du kan være den, der husker.',
      action:
        'Hvis I prøver eller snart begynder: køb folinsyre i dag, og stil den ved det, hun bruger hver morgen, så den er svær at glemme.',
      phaseTags: ['follicular'],
      sources: [NHS_TRYING, SUNDHED_GRAVID],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'Din sæd: alkohol og vægt',
      insight:
        'Halvdelen af graviditeten kommer fra dig, og din sæd påvirkes af, hvordan du lever. Sædceller er omkring tre måneder om at blive dannet, så det, du ændrer i dag, ses i sæden til vinter. Meget alkohol nedsætter både antal, bevægelighed og kvalitet; enkelte glas gør næppe forskel, men jævnlige druk-aftener gør. Betydelig overvægt sænker testosteron og sædkvalitet, og det samme gør visse mediciner, anabolske steroider og nogle antidepressiva. Det handler ikke om at leve perfekt. Det handler om, at når hun tager folinsyre, dropper vin og lader sig undersøge, så er der noget tilsvarende, du kan gøre, i stedet for at fertiliteten bliver hendes projekt alene.',
      action:
        'Beslut i dag én konkret ting for de næste tre måneder: fx maks. to genstande ad gangen, eller alkoholfri hverdage. Fortæl hende, at det er din del.',
      phaseTags: [],
      sources: [NHS_TRYING],
    },
    {
      id: dailyId(M, 19),
      month: M,
      day: 19,
      title: 'Din sæd: varme og rygning',
      insight:
        'Testiklerne hænger uden for kroppen, fordi sæd dannes bedst et par grader under kropstemperatur. Hyppige lange, varme bade, sauna, en bærbar direkte på skødet i timevis og meget stramt undertøj i varme kan sænke sædkvaliteten midlertidigt. Evidensen er blandet, men rådet er nemt at følge, og effekten går over på nogle måneder. Rygning er entydigt: det nedsætter antal og bevægelighed, skader sædcellernes DNA og forlænger tiden til graviditet, og det gælder også hendes passive røg. Cannabis nedsætter også sædkvaliteten. Det er sjældent én ting alene, der afgør det, men det er tit summen. Og det er en af de få ting i hele denne måned, som kun du kan gøre.',
      action:
        'Ryger du: gør dagens første konkrete skridt, fx book en samtale om rygestop eller aftal en stopdato. Ryger du ikke: hold den bærbare af skødet fra i dag.',
      phaseTags: [],
      sources: [NHS_TRYING],
    },
    {
      id: dailyId(M, 20),
      month: M,
      day: 20,
      title: 'Når sex bliver til et skema',
      insight:
        'Efter nogle måneder med "prøve" sker der noget med lysten hos mange par. Sex i det frugtbare vindue bliver en pligt, sex udenfor bliver overflødigt, og ægløsningstesten bestemmer, hvornår I skal. Hun kan føle sig som en maskine, der skal levere; du kan føle præstationspres, og rejsning på kommando er ikke givet. Begge dele er normale og bliver sjældent sagt højt. Det hjælper at have sex også uden for vinduet, kun for jeres skyld, at lade være med at annoncere "det er i dag", og at tale om, hvad der er rart, ikke kun hvad der er effektivt. Det er ikke, fordi I skal glemme timing. Det er, fordi I stadig skal kunne lide hinanden om et år.',
      action:
        'Foreslå nærhed i dag, uanset hvor hun er i cyklussen, uden at nævne ægløsning, test eller timing med ét ord.',
      phaseTags: ['ovulation'],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: 'De to ugers ventetid',
      insight:
        'Tiden fra ægløsning til forventet menstruation er den længste i måneden for par, der prøver. Det, der gør den så hård, er, at kroppen ikke kan skelnes: progesteron giver ømme bryster, træthed, oppustethed og humørudsving, uanset om ægget blev befrugtet eller ej. Tidlige graviditetstegn og PMS er de samme tegn. Så hver kropsfornemmelse bliver læst som et signal, og appens "PMS-vindue" kan pludselig føles som en dom. Det er let for dig at være den, der siger "lad os bare vente og se", men det virker kun, hvis du selv lader være med at spørge "mærker du noget?". Din ro er kun en hjælp, hvis den ikke er en afvisning af hendes.',
      action:
        'Spørg ikke til symptomer i dag. Spørg i stedet, om ventetiden fylder, og om hun helst vil tale om det eller have en pause fra det.',
      phaseTags: ['luteal'],
      sources: [NHS_TRYING],
    },
    {
      id: dailyId(M, 22),
      month: M,
      day: 22,
      title: 'Tidlige graviditetstegn',
      insight:
        'Det sikreste tidlige tegn er en udebleven menstruation. Før det kan der være ømme, større bryster, træthed, kvalme, hyppig vandladning, metalsmag i munden, madlede og en let pletblødning omkring den tid, ægget sætter sig fast. Hvert eneste af dem kan også være PMS, en virus eller dårlig søvn, og de fleste gravide mærker først noget efter den udeblevne menstruation. En graviditetstest måler hormonet hCG i urinen og er pålidelig fra den dag, menstruationen skulle være kommet; tidligere test giver flere falsk negative, fordi hormonet endnu er lavt. Morgenurin er mest koncentreret. Din opgave er ikke at være detektiv, men at vide, hvornår det giver mening at teste, og at være der ved svaret.',
      action:
        'Sørg for, at der er en graviditetstest i huset, hvis I prøver, så den ikke skal hentes i panik. Læg den et sted, hun ved.',
      phaseTags: ['luteal'],
      sources: [NHS_TRYING, SUNDHED_GRAVID],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'Den negative test',
      insight:
        'Hver negativ test, eller hver menstruation der kommer, er et lille tab, og de bliver tungere med tiden. For hende falder det ofte sammen med menstruationens lave hormoner og smerter, så sorgen og kroppen rammer på samme tid. Mange mænd reagerer med at trøste med tal: "det tager jo tid", "næste måned". Det er sandt, men det er ikke det, hun har brug for i timen efter. Hun har brug for, at du også er ked af det, eller i det mindste viser, at det er et fælles tab og ikke hendes nederlag. Bagefter er der plads til tallene. Og læg mærke til dit eget: mænd har ofte ingen at tale med om det, og det slider stille.',
      action:
        'Når testen er negativ eller menstruationen kommer: sig "det er også surt for mig", og gør noget rart sammen samme dag, uden at tale om næste forsøg.',
      phaseTags: ['menstrual'],
    },
    {
      id: dailyId(M, 24),
      month: M,
      day: 24,
      title: 'Når menstruationen udebliver, og I ikke prøver',
      insight:
        'En forsinket menstruation er ikke altid en graviditet, men den kan være det, og for par, der ikke ønsker børn, er dagene med ventetid deres egen slags uro. Stress, sygdom, rejser og vægtændringer forsinker ægløsningen og dermed menstruationen; ingen prævention er heller helt sikker. Test fra den dag, menstruationen skulle være kommet; er den negativ og menstruationen stadig væk efter en uge, så test igen. Hvis hun er gravid og ikke ønsker at være det, er det hendes beslutning, og i Danmark er tidsgrænsen for fri abort blevet udvidet til uge 18. Det, hun har brug for i ventetiden, er ikke, at du panikker, og ikke, at du slår det hen, men at du er med.',
      action:
        'Er menstruationen forsinket: spørg roligt, om hun vil have, at du henter en test, og sig, at I finder ud af det sammen, uanset svaret.',
      phaseTags: ['menstrual', 'luteal'],
      sources: [NHS_TRYING],
    },
    {
      id: dailyId(M, 25),
      month: M,
      day: 25,
      title: 'Spontan abort er almindeligt, og det er ikke hendes skyld',
      insight:
        'Afhængigt af hvordan man tæller, ender mellem hver ottende og hver fjerde kendte graviditet i spontan abort, langt de fleste inden uge 12. Medregner man de graviditeter, der tabes før en test ville have vist noget, er tallet endnu højere. Den hyppigste årsag er en kromosomfejl i fostret, som var der fra befrugtningen. Det skyldes ikke, at hun løftede noget tungt, drak en kop kaffe, havde sex, var stresset eller "ikke passede på". Det er værd at sige højt, for de fleste kvinder leder efter en fejl hos sig selv. Fysisk ligner det en kraftig menstruation med kramper, ofte i en til to uger. Følelsesmæssigt er det et tab af et barn, de allerede havde begyndt at forestille sig.',
      action:
        'Hvis I har mistet, eller kommer til det: sig tydeligt "det var ikke noget, du gjorde". Hvis ikke: læs hvad kortet siger, så du kan sige det, hvis dagen kommer.',
      phaseTags: [],
      sources: [NHS_MISCARRIAGE],
    },
    {
      id: dailyId(M, 26),
      month: M,
      day: 26,
      title: 'Sådan støtter du efter en abort',
      insight:
        'Det, der hjælper, er enkelt, og det, der sårer, er velment. Sig ikke "det var nok bedst sådan", "I kan bare prøve igen" eller "det var jo tidligt". Sig "jeg er så ked af det", og lad hende bestemme, hvor meget der skal tales. Nogle vil have det ud af verden, andre vil have det anerkendt igen og igen. Tag det praktiske: mad, aflysninger, beskeder til dem, I havde fortalt det. Hun bløder og har kramper i op til to uger; varme og smertestillende hjælper. Kraftig blødning, feber eller ildelugtende udflåd fortjener en læge. Menstruationen vender typisk tilbage inden for 4-6 uger, og mange kan prøve igen, når de er klar, fysisk og følelsesmæssigt. Din sorg tæller også, og du får sjældent spurgt.',
      action:
        'Skriv de tre sætninger ned, du ikke skal sige, og den ene, du skal. Hvis nogen omkring jer har mistet: send dem en besked i dag, der ikke kræver svar.',
      phaseTags: [],
      sources: [NHS_MISCARRIAGE],
    },
    {
      id: dailyId(M, 27),
      month: M,
      day: 27,
      title: 'Hvornår søger man hjælp?',
      insight:
        'Rådet er enkelt: søg læge efter 12 måneders regelmæssige forsøg uden graviditet, og allerede efter 6, hvis hun er over 35. Søg tidligere, hvis der er kendte grunde: meget uregelmæssig eller udebleven menstruation, kendt endometriose eller PCOS, tidligere underlivsbetændelse, flere spontane aborter, kræftbehandling eller problemer med testiklerne hos dig. Omkring hvert syvende par oplever besvær med at blive gravide, og i cirka halvdelen af tilfældene ligger en del af forklaringen hos manden. Ventetiden på udredning kan være lang, så det er en fordel at komme i gang, når tiden er inde. Det er ikke at give op. Det er at tage det alvorligt sammen, i stedet for at lade hende bære uvisheden alene.',
      action:
        'Tæl efter, hvor længe I har prøvet. Hvis I er ved grænsen: foreslå selv at bestille tiden hos lægen, og bestil den til jer begge.',
      phaseTags: [],
      sources: [NHS_INFERTILITY],
    },
    {
      id: dailyId(M, 28),
      month: M,
      day: 28,
      title: 'Udredningen begynder også hos dig',
      insight:
        'En fertilitetsudredning starter altid med begge parter. For dig er det en sædprøve: antal, bevægelighed og form, afleveret efter 2-7 dages afholdenhed, ofte to gange med nogle ugers mellemrum, fordi tallene svinger. For hende er det blodprøver for hormoner, ægløsning og ægreserve, ultralyd af æggestokke og livmoder, og eventuelt en undersøgelse af, om æggelederne er åbne. Hendes del er mere omfattende, mere ubehagelig og tager længere tid. Det mindste, du kan gøre, er at få din prøve ordnet først og uden brok, så hendes udredning ikke venter på din. Mange mænd udskyder sædprøven, fordi den føles som en dom over dem. Den er en oplysning, ikke en karakter.',
      action:
        'Hvis I er i gang med udredning: bestil din sædprøve i dag, hvis den ikke er taget. Hvis ikke: tag med til hendes næste undersøgelse.',
      phaseTags: ['follicular'],
      sources: [NHS_INFERTILITY],
    },
    {
      id: dailyId(M, 29),
      month: M,
      day: 29,
      title: 'Når I ikke er enige, eller ikke ved det',
      insight:
        'Ikke alle par vil det samme, og ikke alle ved, hvad de vil. Én vil have børn nu, én vil vente; én er færdig, én er ikke; eller I er begge i tvivl og undgår emnet. Den, der bærer præventionen, bærer ofte også tvivlen i det stille, cyklus efter cyklus. Ambivalens er normal og fortjener at blive sagt højt uden at blive til en forhandling. Det, der virker, er at tale om det uden for pres og uden for PMS-vinduet, at sige det ærlige svar frem for det diplomatiske, og at gøre det til noget, I vender tilbage til, ikke noget, der skal afgøres i dag. Uanset svaret gælder alt det andet i denne måned: prævention, bivirkninger og ansvar er stadig fælles.',
      action:
        'Sig én ærlig sætning om, hvor du selv står med børn og timing lige nu, også hvis den lyder "jeg ved det ikke". Spørg så, hvor hun står.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 30),
      month: M,
      day: 30,
      title: 'Måned 10: det har du lært',
      insight:
        'Du ved nu, hvordan de vigtigste metoder virker, og hvad de koster hende: p-piller og minipille i daglig disciplin og mulige humørbivirkninger, spiraler i opsætning og blødning, p-stav og p-sprøjte i uregelmæssighed. Du ved, at kondom og vasektomi er de to metoder, du selv kan bære, at sikre perioder er krævende, og at appen aldrig er prævention. Du ved, at de fleste par bruger op til et år, at folinsyre skal begyndes før, at din sæd påvirkes af alkohol, varme og rygning, at PMS og tidlig graviditet ligner hinanden, at spontan abort er almindeligt og ikke hendes skyld, og hvornår I skal søge hjælp. Vigtigst: ansvaret følger ikke metoden. Det følger jer.',
      action:
        'Vælg én ting fra måneden, du vil tage over fra i dag: huske, købe, bestille tid eller bære metoden. Sig det til hende, og tag så quizzen.',
      phaseTags: [],
    },
  ],
  weekly: [
    {
      id: weeklyId(M, 1),
      month: M,
      week: 1,
      title: 'Prævention: metoderne og hvad de koster',
      body: [
        'Prævention er det område, hvor forskellen på jeres to kroppe bliver mest konkret. Der findes over ti metoder, og alle på nær to virker på hendes krop. Hun bærer bivirkningerne, den daglige disciplin og den fysiske risiko, hvis metoden svigter. Det er ikke nogens skyld, men det er værd at se klart, før man taler om, hvem der gør hvad. Her er de vigtigste metoder, hvordan de virker, og hvad de typisk koster i cyklus og humør.',
        'Hormonmetoderne virker ved at stoppe ægløsningen, gøre slimen i livmoderhalsen tyk eller begge dele. Den almindelige p-pille kombinerer østrogen og gestagen og er over 99 procent sikker taget hver dag, omkring 91 procent i praksis. Den giver ofte lettere blødning og mindre PMS, men kan give hovedpine, kvalme, nedsat lyst og hos nogle et fladere humør, og den har en lille risiko for blodpropper, som er større ved rygning og migræne med aura. Minipillen har kun gestagen og kan bruges, hvor østrogen ikke tåles, men den giver ofte uregelmæssig eller udebleven blødning. P-staven, en lille stav i overarmen, er den sikreste metode overhovedet og holder tre år; hovedulempen er uforudsigelig pletblødning. P-sprøjten hver 12.-13. uge kan ikke tages ud, og fertiliteten kan være op til et år om at vende tilbage.',
        'Spiralerne lægges op i livmoderen af en læge og holder i 3-10 år. Hormonspiralen afgiver gestagen lokalt, giver ofte meget lettere eller ingen blødning og bruges også som behandling ved kraftig menstruation; bivirkninger på humør er sjældnere end ved piller, men opsætningen kan gøre ondt, og de første måneder giver ofte pletblødning og kramper. Kobberspiralen er helt uden hormoner: hun beholder sin egen cyklus, men blødningen bliver ofte kraftigere og mere smertefuld. Begge er over 99 procent sikre, og begge kan tages ud, hvorefter fertiliteten er tilbage med det samme.',
        'Fælles for hormonmetoderne er, at appen bliver mindre brugbar, fordi der ikke er en rigtig cyklus at forudsige. Blødningen i pillepausen er en hormonudløst blødning, ikke en menstruation, og p-stav, minipille og p-sprøjte kan give blødning uden mønster. Det er godt at vide, så du ikke læser "for tidlig" eller "forsinket" ind i noget, der bare er metoden.',
        'De to metoder, du kan bære, er kondom og vasektomi. Kondomet er 98 procent sikkert brugt rigtigt hver gang, omkring 85 i praksis, og det eneste, der beskytter mod kønssygdomme. De fleste fejl skyldes forkert størrelse og sen påsætning, ikke at det springer. Vasektomi er et indgreb på et kvarter i lokalbedøvelse, over 99 procent sikkert, uden effekt på lyst eller rejsning, og langt mindre indgribende end sterilisation af kvinden. Det er permanent og kræver anden prævention i 8-12 uger, indtil prøverne er rene. Naturlig familieplanlægning, hvor man finder det frugtbare vindue med temperatur og slim, kan være meget sikker, hvis den følges præcist hver dag, men i praksis bliver omkring hver fjerde gravid på et år. Og for at sige det helt tydeligt: denne app er ikke prævention. Den skønner ud fra gennemsnit og er lavet til at forstå, ikke til at planlægge sikre dage.',
        'Hvad kan du gøre? Først: vid, hvad I bruger, og spørg, hvordan hun har det med det. Mange har brugt samme metode i årevis uden at nogen har spurgt, og mange kender ikke sig selv uden hormoner. Dernæst: tag det, du kan tage. Husk pillen med hende, læg spiraltiden eller sprøjtedatoen i din egen kalender, tag med til opsætningen, køb kondomerne og sørg for, at de passer, og sig højt, at en vasektomi er en mulighed, når I er færdige med børn. Og hvis hun overvejer at skifte eller stoppe, så gør beslutningen let: hendes krop, hendes valg, din vilje til at bære mere.',
        'Den vigtigste sætning i denne uge er kort: ansvaret følger ikke metoden. Metoden sidder måske i hendes krop, men huske, hente, betale, tage med og bekymre sig kan deles. Det er ikke stort at gøre. Det er bare sjældent, nogen gør det.',
      ],
      conversationQuestion:
        'Hvis du kunne vælge helt frit, ville du så bruge den prævention, vi bruger nu? Og hvad ville du ønske, jeg tog mere af?',
      sources: [NHS_CONTRACEPTION, NHS_VASECTOMY, SUNDHED_PRAEVENTION],
    },
    {
      id: weeklyId(M, 2),
      month: M,
      week: 2,
      title: 'Når det går galt: nødprævention og samtalen om at skifte',
      body: [
        'Selv med god prævention sker der uheld. Kondomet springer, pillen glemmes to dage i træk, sprøjtetiden bliver overskredet. Det, der afgør, om et uheld bliver til en graviditet, er, hvor hurtigt I handler, og hvem der gør det. Og bag mange uheld ligger en metode, der egentlig ikke passer, og som ingen har fået talt om.',
        'Der findes tre former for nødprævention. Fortrydelsespillen med levonorgestrel virker bedst inden for tre døgn, pillen med ulipristal inden for fem, og begge udsætter ægløsningen, så sædcellerne dør, før ægget kommer. Det betyder også, at de virker dårligt, hvis ægløsningen allerede har fundet sted; jo tættere på ægløsning, jo mindre effekt. Kobberspiralen kan lægges op til fem dage efter og er over 99 procent effektiv uanset cyklusdag, og hun kan beholde den som fast prævention bagefter. Pillerne fås på apoteket uden recept. De er sikre at bruge, men kan give kvalme, og den næste menstruation kan komme tidligere eller senere; kommer den mere end en uge for sent, bør hun tage en graviditetstest.',
        'Det praktiske her er din opgave lige så meget som hendes. Ved du, hvor det nærmeste apotek med lang åbningstid ligger? Ved du, at jo tidligere pillen tages, jo bedre? Kan du være den, der siger "jeg henter den nu", i stedet for den, der siger "det går nok"? Uheldet er fælles. Turen til apoteket kan derfor lige så godt være din.',
        'Sker uheldene tit, er det tid til den større samtale: passer metoden? Mange kvinder bliver ved med en prævention, de ikke er glade for, fordi det virker uoverskueligt at skifte, fordi de gruer for en spiral, eller fordi de ikke ved, hvad alternativet er. Nogle har taget p-piller siden teenageårene og har aldrig mærket deres egen voksne cyklus. Nogle mistænker, at pillen påvirker deres humør eller lyst, men kan ikke skille det fra alt andet. Og mange skifter ikke, fordi den anden part aldrig har spurgt.',
        'Samtalen om at skifte skal føres uden for pres. Ikke lige efter et uheld, ikke i PMS-dagene, ikke som en løsning på et problem, du har. Follikelfasen, hvor der er overskud til at høre hinanden, er et godt tidspunkt. Spørgsmålet er enkelt: "Hvis du kunne vælge frit, ville du så bruge det samme som nu?" Og svaret skal have plads, også hvis det er "jeg ved det ikke" eller "jeg vil prøve at stoppe helt og se, hvordan jeg har det". Din rolle er at kende alternativerne, at sige højt, at du er villig til at bære kondomer eller en vasektomi, og at holde din egen bekvemmelighed ude af argumenterne. At et kondom er lidt mindre behageligt for dig, vejer ikke tungt mod år af bivirkninger for hende.',
        'Vælger hun at stoppe med hormoner, så vær forberedt på nogle måneders overgang. Den første rigtige cyklus kan lade vente på sig, blødningen kan blive kraftigere, og PMS, hud og lyst kan ændre sig. Det er kroppen, der finder sin egen rytme igen, og først da bliver appen rigtigt brugbar. Det er også her, du finder ud af, hvor meget af det, du har lært i de foregående måneder, der passer på hende. Og indtil I har en anden metode på plads, er kondomet ikke et forslag, det er jeres prævention.',
        'Det, der skal siges én gang til, er, at appen aldrig er en del af den løsning. Den viser et skønnet frugtbart vindue, og det er til forståelse, ikke til at planlægge sikre dage. Den dag, I bruger appen som prævention, er den dag, I har brug for kortet om nødprævention.',
      ],
      conversationQuestion:
        'Hvis uheldet var ude i dag, ved vi så begge, hvad vi ville gøre og hvem der gjorde det? Og er der noget ved vores metode, vi har undgået at tale om?',
      sources: [NHS_EMERGENCY, NHS_CONTRACEPTION],
    },
    {
      id: weeklyId(M, 3),
      month: M,
      week: 3,
      title: 'At prøve: timing, tålmodighed og din halvdel',
      body: [
        'Når I beslutter jer for at prøve at få et barn, bliver cyklussen pludselig noget andet: ikke længere noget, der skal forstås, men noget, der skal ramme. Det er en god og en farlig forandring på samme tid. Her er, hvad der faktisk øger chancen, hvad der ikke gør, og hvad der er din halvdel af arbejdet.',
        'Biologien er den samme, som du lærte i måned 1. Ægget lever et døgn, sædceller op til fem dage, og det frugtbare vindue er derfor de fem dage før ægløsning og selve dagen. Chancen er størst de to-tre dage lige før, fordi sæden skal ligge klar, når ægget kommer. Sex hver anden eller tredje dag gennem hele cyklussen rammer vinduet af sig selv, uden at nogen skal regne. Vil I være mere præcise, er ægløsningstest, der måler LH i urinen, og hendes eget udflåd, klart og strækbart som æggehvide, bedre end appens skøn, som bygger på gennemsnit. Efter ægløsningen er der ikke mere at gøre den måned, og det er okay at slappe af.',
        'Tallene er værd at kende, før I får brug for dem. Et sundt par har omkring 20-25 procent chance pr. cyklus. Omkring 84 ud af 100 par er gravide inden for et år, og omkring 92 inden for to. Det betyder, at et halvt år uden resultat er fuldstændig normalt. Med alderen falder chancen: langsomt fra begyndelsen af 30’erne, hurtigere efter 35, og også mænds fertilitet falder gradvist fra omkring 40. Derfor er rådet at søge læge efter 12 måneders forsøg, eller allerede efter 6, hvis hun er over 35, og tidligere ved kendte problemer som meget uregelmæssig menstruation, endometriose, PCOS eller flere spontane aborter. Omkring hvert syvende par har brug for hjælp, og i cirka halvdelen af tilfældene ligger en del af forklaringen hos manden.',
        'Der er én ting, hun bør gøre, før I begynder: tage 400 mikrogram folinsyre dagligt. Neuralrøret lukker i uge 3-4, ofte før hun ved, at hun er gravid, og folinsyre nedsætter risikoen for rygmarvsbrok markant. Derfor skal det begyndes, når præventionen stoppes, og fortsættes til uge 12. Det er en billig tablet, og du kan være den, der køber den og stiller den frem. Alkohol bør hun holde helt fra, når hun kan være gravid, og rygning er skadeligt gennem hele forløbet.',
        'Nu til din halvdel. Sædceller er omkring tre måneder om at blive dannet, så det, du ændrer nu, ses i sæden til vinter. Meget alkohol nedsætter antal og bevægelighed; enkelte glas gør næppe forskel, men jævnlige druk-aftener gør. Rygning skader sædcellernes DNA og forlænger tiden til graviditet, og det gælder også passiv røg hos hende. Betydelig overvægt, anabolske steroider og visse mediciner sænker kvaliteten. Testiklerne skal holdes et par grader under kropstemperatur, så lange varme bade, sauna og en bærbar på skødet i timevis kan give et midlertidigt dyk. Ingen af delene kræver et perfekt liv. De kræver, at der er noget, du gør, når hun gør alt det andet, så fertiliteten ikke bliver hendes projekt.',
        'Så det, der er svært at måle: hvordan I har det med hinanden. Efter nogle måneder bliver sex let til et skema, hvor testen bestemmer, hvornår, og lysten forsvinder for begge. Hun kan føle sig som en maskine, der skal levere; du kan mærke præstationspres. Det hjælper at have sex også uden for vinduet, kun for jeres skyld, at lade være med at annoncere "det er i dag", og at tage initiativet mindst halvdelen af gangene. Og de to uger fra ægløsning til forventet menstruation er de længste i måneden, fordi PMS og tidlige graviditetstegn er de samme tegn. Spørg ikke "mærker du noget?". Spørg, om ventetiden fylder, og om hun vil tale om den eller have fri fra den.',
        'Til sidst den negative test. Hver gang menstruationen kommer, er det et lille tab, og de bliver tungere. Mange mænd trøster med tal: "det tager jo tid". Det er sandt, men i timen efter er det ikke det, hun har brug for. Hun har brug for, at det er et fælles tab og ikke hendes nederlag. Sig "det er også surt for mig", gør noget rart sammen, og gem tallene til i morgen. Og hold øje med dig selv: mænd har sjældent nogen at tale med om det her, og det slider stille.',
      ],
      conversationQuestion:
        'Hvad gør ventetiden og de negative tests ved dig, og hvad gør de ved mig? Hvordan sørger vi for, at det stadig er os to, og ikke et projekt?',
      sources: [NHS_TRYING, NHS_INFERTILITY, SUNDHED_GRAVID],
    },
    {
      id: weeklyId(M, 4),
      month: M,
      week: 4,
      title: 'Tidlig graviditet, tab og hvornår I søger hjælp',
      body: [
        'Den sidste uge handler om det, ingen taler om, før de står i det: de første uger af en graviditet, det tab, som er langt mere almindeligt end de fleste tror, og det tidspunkt, hvor I bør søge hjælp. Det er tungt stof. Men det er også her, din støtte gør størst forskel, netop fordi så få ved, hvad de skal sige.',
        'De første tegn på graviditet er udebleven menstruation, ømme og større bryster, træthed, kvalme, hyppig vandladning, metalsmag og for nogle en let pletblødning, når ægget sætter sig fast. Hvert eneste tegn kan også være PMS, og de fleste mærker først noget efter den udeblevne menstruation. En test måler hormonet hCG i urinen og er pålidelig fra den dag, menstruationen skulle være kommet; tidligere tests giver oftere falsk negative. Er testen positiv, er det næste skridt lægen, som bekræfter graviditeten og sætter forløbet i gang. Kvalmen, trætheden og de svingende følelser i de første 12 uger er hormonelle og kan være voldsomme. Det er ikke tiden til at spørge, om hun overdriver. Det er tiden til at tage mere af det praktiske end nogensinde og til at holde kaffe, alkohol, rå fisk og andet, hun skal undgå, ud af hendes tallerken uden at gøre et nummer ud af det.',
        'Så det svære. Afhængigt af hvordan man tæller, ender mellem hver ottende og hver fjerde kendte graviditet i spontan abort, langt de fleste inden uge 12, og tallet stiger med alderen. Medregner man de graviditeter, der tabes, før en test ville have vist noget, er det endnu højere. Den hyppigste årsag er en kromosomfejl i fostret, som var der fra befrugtningen. Det skyldes ikke, at hun løftede noget, drak en kop kaffe, havde sex, var stresset, trænede eller "ikke passede på". Det er værd at sige højt og mere end én gang, for næsten alle kvinder leder efter en fejl hos sig selv.',
        'Fysisk ligner en tidlig spontan abort en kraftig menstruation med kramper, ofte i en til to uger. Varme og smertestillende hjælper. Kraftig blødning, der gennembløder et bind i timen, feber, ildelugtende udflåd eller stærke smerter i den ene side fortjener en læge, og det sidste kan være tegn på graviditet uden for livmoderen, som er akut. Menstruationen vender typisk tilbage inden for 4-6 uger. Mange kan prøve igen, når de er klar, og de fleste får en normal graviditet bagefter; det er først ved tre tab i træk, at der tilbydes udredning.',
        'Følelsesmæssigt er det et tab af et barn, de allerede havde begyndt at forestille sig, og det er lige så virkeligt i uge 6 som i uge 16. Det, der sårer, er velment: "det var nok bedst sådan", "I kan bare prøve igen", "det var jo tidligt", "i det mindste ved I, at du kan blive gravid". Det, der hjælper, er enkelt: "jeg er så ked af det", og så at lade hende bestemme, hvor meget der skal tales, og hvor tit. Tag det praktiske: mad, aflysninger, beskeder til dem, I havde fortalt det. Vær opmærksom på, at sorgen kan komme igen ved den dato, barnet skulle have været født, og når andre omkring jer bliver gravide. Og glem ikke din egen: mænd får sjældent spurgt, hvordan de har det, og mange bærer det alene, fordi de synes, det er hendes tab. Det er jeres.',
        'Hvornår søger I hjælp? Efter 12 måneders regelmæssige forsøg, efter 6 hvis hun er over 35, og tidligere ved kendte grunde: uregelmæssig eller udebleven menstruation, endometriose, PCOS, tidligere underlivsbetændelse, flere spontane aborter, kræftbehandling eller problemer med testikler hos dig. Udredningen begynder altid hos begge. Din del er en sædprøve, ofte to, med nogle ugers mellemrum. Hendes del er blodprøver, ultralyd og eventuelt en undersøgelse af æggelederne, mere omfattende og mere ubehageligt. Det mindste, du kan gøre, er at få din prøve ordnet først og uden brok, så hendes udredning ikke venter på din. Sædprøven er en oplysning, ikke en karakter. Og at søge hjælp er ikke at give op. Det er at tage det alvorligt sammen.',
        'Måneden slutter der, hvor den begyndte: ansvaret følger ikke metoden, og det følger heller ikke livmoderen. Hvad enten I forhindrer graviditet, prøver, venter, mister eller søger hjælp, er der en halvdel, der er din. Den er sjældent den, der gør mest ondt. Men den kan gøre hendes halvdel lettere at bære.',
      ],
      conversationQuestion:
        'Hvis vi en dag mister en graviditet, hvad tror du så, du ville have brug for fra mig, og hvad ville du helst ikke høre? Og hvad ville jeg mon have brug for?',
      sources: [NHS_MISCARRIAGE, NHS_INFERTILITY, NHS_TRYING],
    },
  ],
  wrap: {
    id: wrapId(M),
    month: M,
    title: 'Måned 10: Fertilitet, prævention og graviditet',
    summary: [
      'Denne måned handlede om det, jeres to kroppe deler mest ulige. Du har lært, hvordan de vigtigste metoder virker, og hvad de koster hende: p-piller og minipille i daglig disciplin og mulige humørbivirkninger, spiraler i opsætning og blødning, p-stav og p-sprøjte i uregelmæssighed. Du har lært, at kondom og vasektomi er de to metoder, du kan bære, at sikre perioder er krævende, at nødprævention skal hentes hurtigt, og at appen aldrig er prævention.',
      'Du har også lært, hvad der sker, når I vil den anden vej: at det frugtbare vindue ligger før ægløsning, at de fleste par bruger op til et år, at folinsyre skal begyndes før, at din sæd påvirkes af alkohol, varme og rygning, at PMS og tidlig graviditet ligner hinanden, at spontan abort er almindeligt og aldrig hendes skyld, hvad man siger og ikke siger, og hvornår I søger hjælp. Og at udredningen begynder hos jer begge.',
      'Næste måned handler om, når noget afviger: endometriose, PCOS og uregelmæssig cyklus, hvilke tegn der fortjener en læge, og hvordan du bakker op.',
    ],
    keepDoing: [
      'Spørg jævnligt, hvordan hun har det med jeres prævention, og sig højt, hvad du er villig til at bære.',
      'Hav kondomer i den rigtige størrelse i huset, og køb dem selv.',
      'Læg hendes spiraltid, sprøjtedato eller pilleopfyldning i din egen kalender.',
      'Ved uheld: hent fortrydelsespillen samme dag, jo før jo bedre.',
      'Hvis I prøver: folinsyre til hende, alkohol og røg ned hos dig, og sex også uden for vinduet.',
      'Sig "det var ikke noget, du gjorde", og "det er også surt for mig", når det er sandt.',
    ],
    quiz: [
      {
        question:
          'Kondomet sprang i nat, og hun har ikke anden prævention. Hvad er den mest hjælpsomme reaktion i dag?',
        options: [
          'Vente og se, om menstruationen kommer til tiden',
          'Tjekke appen for, om det var en sikker dag',
          'Hente fortrydelsespillen på apoteket i dag, jo før jo bedre',
          'Foreslå at hun ringer til lægen i næste uge',
        ],
        correctIndex: 2,
        explanation:
          'Nødprævention virker bedst, jo tidligere den tages, og appens vindue er et skøn, aldrig prævention. Turen til apoteket er lige så meget din.',
      },
      {
        question:
          'Hun har taget p-piller i ti år og siger, hun ikke rigtig ved, hvem hun er uden. Hvad hjælper mest?',
        options: [
          'Sige at pillen jo virker fint, så hvorfor ændre noget',
          'Sige at det er hendes valg, og at du gerne bærer kondomer eller mere, hvis hun vil prøve at stoppe',
          'Foreslå at hun bare holder pause en måned og ser',
          'Finde en artikel om bivirkninger og sende den til hende',
        ],
        correctIndex: 1,
        explanation:
          'Det er hendes krop og hendes beslutning. Det, der gør den lettere, er, at du kender alternativerne og siger højt, at du vil bære mere.',
      },
      {
        question: 'I har prøvet at få et barn i fem måneder uden held. Hvad er sandt?',
        options: [
          'Det er usædvanligt, og I bør søge læge nu',
          'Det er helt normalt; omkring 84 ud af 100 par bruger op til et år',
          'Det tyder på, at problemet ligger hos hende',
          'I bør have sex hver dag hele måneden for at øge chancen',
        ],
        correctIndex: 1,
        explanation:
          'Chancen er 20-25 procent pr. cyklus, og de fleste par bruger måneder. Rådet er læge efter 12 måneder, eller 6 hvis hun er over 35.',
      },
      {
        question:
          'I vil begynde at prøve om et par måneder. Hvad er den vigtigste ting, du kan sætte i gang allerede nu?',
        options: [
          'Købe ægløsningstest til hende',
          'Folinsyre til hende fra nu, og skære ned på alkohol og røg hos dig selv',
          'Begynde at logge hendes temperatur hver morgen',
          'Ingenting; det giver først mening, når I er i gang',
        ],
        correctIndex: 1,
        explanation:
          'Folinsyre skal begyndes før graviditeten, og sædceller er tre måneder om at blive dannet. Begge dele skal i gang, før I starter.',
      },
      {
        question:
          'Det er tre dage efter forventet menstruation, testen var negativ, og menstruationen er lige kommet. Hvad hjælper mest?',
        options: [
          '"Det tager jo tid, næste måned går det nok."',
          '"Det er også surt for mig." Og så noget rart sammen i dag, uden snak om næste forsøg',
          'Lade hende være i fred, så hun kan sørge',
          'Foreslå at I booker tid hos lægen',
        ],
        correctIndex: 1,
        explanation:
          'I timen efter har hun brug for, at det er et fælles tab, ikke hendes nederlag. Tallene er sande, men de hører til i morgen.',
      },
      {
        question: 'Hun har mistet en graviditet i uge 8. Hvilken sætning skal du undgå?',
        options: [
          '"Jeg er så ked af det."',
          '"Det var ikke noget, du gjorde."',
          '"Det var nok bedst sådan, og I kan jo prøve igen."',
          '"Vil du tale om det, eller skal jeg bare være her?"',
        ],
        correctIndex: 2,
        explanation:
          'Velmente trøstesætninger gør tabet mindre, end det er. Anerkend det, sig at det ikke var hendes skyld, og lad hende bestemme, hvor meget der skal tales.',
      },
    ],
  },
};
