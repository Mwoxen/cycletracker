import type { MonthContent, Source } from '../types';
import { dailyId, weeklyId, wrapId } from '../types';

const NHS_PERIODS: Source = {
  label: 'NHS: Periods',
  url: 'https://www.nhs.uk/conditions/periods/',
};
const ACOG_CYCLE: Source = {
  label: 'ACOG: The Menstrual Cycle',
  url: 'https://www.acog.org/womens-health/faqs/your-first-period',
};
const SUNDHED_DK: Source = {
  label: 'Sundhed.dk: Menstruationscyklus',
  url: 'https://www.sundhed.dk/borger/patienthaandbogen/kvindesygdomme/om-kvindesygdomme/menstruationscyklus/',
};
const NHS_PMS: Source = {
  label: 'NHS: PMS',
  url: 'https://www.nhs.uk/conditions/pre-menstrual-syndrome/',
};
const NHS_HEAVY: Source = {
  label: 'NHS: Heavy periods',
  url: 'https://www.nhs.uk/conditions/heavy-periods/',
};
const NHS_CONTRACEPTION: Source = {
  label: 'NHS: Contraception',
  url: 'https://www.nhs.uk/conditions/contraception/',
};

const M = 4;

export const month04: MonthContent = {
  month: M,
  theme: 'Follikelfasen',
  focus:
    'Energien er tilbage: planlæg det store sammen, og brug overskuddet klogt i stedet for bare at bruge det op.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'Follikelfasen starter allerede på dag 1',
      insight:
        'Nu skal du høre, for det her overrasker de fleste: follikelfasen begynder samme dag som menstruationen. Den løber fra dag 1 og hele vejen til ægløsningen, så den ligger oven i blødningen. Det, de fleste mærker som "follikelfasen", er den sidste del: dagene efter blødningen, hvor østrogen for alvor er på vej op. Derfor handler denne måned mest om tiden fra menstruationens slutning til ægløsning, cirka dag 6 til 13 i en 28-dages cyklus. Men læg mærke til, at æggestokkene allerede er i gang, mens hun bløder. Kroppen sætter næste gryde over, før den forrige er spist. Den er ganske enkelt bedre til at planlægge end dig, og du har stadig ikke tøet noget op til i aften. Månedens tema er, hvad der sker i den forberedelse, hvad det gør ved energi, humør og hjerne, og hvordan I bruger den bedste uge klogt.',
      action:
        'Kig på appens Hjem-skærm, hvilken cyklusdag hun er på i dag, og regn ud, hvor mange dage der cirka er til ægløsning. Brug fingrene. Det gør jeg også.',
      phaseTags: ['menstrual', 'follicular'],
      sources: [SUNDHED_DK, ACOG_CYCLE],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: 'FSH: startskuddet kommer fra hjernen',
      insight:
        'Det hele starter i hjernen. Ikke i æggestokkene, som du nok havde gættet, hvis nogen havde spurgt. Når hormonerne rammer bunden under menstruationen, opfanger hypofysen det og sender FSH, follikelstimulerende hormon, ud i blodet. FSH gør præcis det, navnet siger: det stimulerer en lille gruppe follikler i æggestokkene, hver med et umodent æg indeni, til at vokse. Folliklerne svarer igen ved at producere østrogen. Så snart østrogen stiger, giver det besked tilbage til hjernen om at skrue ned for FSH. Det er en løkke, ikke en kontakt, lidt som når man smager på saucen og salter efter. Og fordi hjernen sidder ved rattet, kan alt, der forstyrrer den, som stress, søvnmangel og sygdom, forsinke starten, uden at der er noget galt med æggestokkene. Follikelfasen er den del af cyklussen, hjernen bestemmer mest over. Så du er ikke den eneste i huset, der bliver sløv af en dårlig nats søvn. Du er bare den, der brokker sig.',
      action:
        'Sig modellen højt for dig selv, gerne henne ved komfuret: "Hjernen sender FSH, folliklerne svarer med østrogen, østrogen giver overskud." Hele fasen på én linje. Du kan nævne fire slags øl, så det her kan du også.',
      phaseTags: [],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 3),
      month: M,
      day: 3,
      title: 'Folliklerne konkurrerer, og én vinder',
      insight:
        'I begyndelsen af fasen vokser 10-20 follikler på samme tid. Det er en konkurrence, og i modsætning til din fodboldklub er der sgu én vinder hver gang. Omkring dag 5-7 sker udvælgelsen: den follikel, der er mest følsom over for FSH, bliver dominerende, og de andre synker sammen som en soufflé, ingen kiggede til. Vinderen vokser til omkring to centimeter og producerer størstedelen af cyklussens østrogen. Det er derfor, østrogen stiger stejlt i anden halvdel af follikelfasen frem for jævnt. Ægget i den dominerende follikel modner færdigt, mens folliklen forbereder sig på at briste ved ægløsningen. Alt det foregår, uden at hun mærker det, og det starter forfra hver eneste cyklus. Hver måned vælger kroppen ét æg ud af en hel gruppe, helt af sig selv og uden at spørge nogen. Du stod tyve minutter i grøntafdelingen og valgte en avocado. Den var ikke engang moden.',
      action:
        'Fortæl hende én ting fra dagens kort, du ikke vidste i forvejen. Der er nok at tage af, min ven. Det gør viden fælles uden at belære.',
      phaseTags: [],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'Østrogen bygger op: slimhinde og overskud',
      insight:
        'Østrogen fra folliklerne har to jobs, og det passer dem begge, hvilket er mere, end man kan sige om de fleste. Det ene er lokalt: det får livmoderslimhinden til at vokse igen efter menstruationen, klar til et eventuelt befrugtet æg. Det andet job foregår i hele kroppen. Østrogen påvirker hjernen, huden, musklerne, knoglerne, blodkarrene og stofskiftet. Der er østrogenfølsomme celler stort set overalt. Derfor mærkes stigende østrogen ikke kun i underlivet, men som et generelt løft: mere energi, bedre humør, klarere tanker, glattere hud og ofte bedre søvn. Det er ikke et humørhormon. Det er et byggehormon, der tilfældigvis også bygger overskud, lidt som en kok, der laver maden og så for søren også tager opvasken. Du kender typen. Du er den ikke. Resten af måneden handler om, hvad det løft konkret betyder, og hvordan I bruger det.',
      action:
        'Læg mærke til i dag, om der er noget, hun gør lettere eller hurtigere end for en uge siden, og sig det til hende. Ikke som en rapport. Bare sig det, og gå så tilbage til gryderne.',
      phaseTags: ['follicular'],
      sources: [SUNDHED_DK],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'Skiftet efter menstruationen',
      insight:
        'Skiftet fra menstruation til follikelfase er tit tydeligt, hvis man gider kigge. Blødningen aftager, kramperne slipper, og et sted mellem dag 4 og 7 kommer der en dag, hvor hun står op og bare har det bedre. Mange kvinder beskriver det som at "vende tilbage til sig selv". Det er en af cyklussens mest forudsigelige overgange, og alligevel går de fleste partnere lige forbi den. Du lagde mærke til dag 2. Du lagde mærke til dag 26, for søren om du gjorde. Dag 6 stod du bare og rørte i en gryde. Det er fordi man ser, når noget bliver værre, og overser, når det bliver bedre, ligesom man kun hører røgalarmen og aldrig den aften, hvor stegen faktisk blev god. Træn det modsatte. At blive set i de gode dage betyder mindst lige så meget som at blive hjulpet i de svære. Og det er billigere end en varmepude.',
      action:
        'Hvis menstruationen lige er slut eller ved at være det: spørg "kan du mærke, at energien er på vej tilbage?" og lyt til svaret. Hele svaret. Også den del, hvor du ikke siger noget.',
      phaseTags: ['menstrual', 'follicular'],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: 'Serotonin og dopamin: derfor stiger humøret',
      insight:
        'Østrogen påvirker de to signalstoffer, der betyder mest for humør og motivation. Serotonin holder humøret stabilt og dæmper uro; østrogen øger både produktionen og hjernens følsomhed for det. Dopamin driver motivation, belønning og lysten til at gå i gang; også det stiger med østrogen. Resultatet er en uge, hvor tingene føles mulige, hvor der er lyst til at starte projekter, og hvor irritationstærsklen er højere. Det betyder i praksis, at du slipper afsted med lidt mere i denne uge. Brug det ikke som en strategi, din lille ræv. Det er ikke "kunstigt godt humør". Det er hjernens normale kemi med lidt medvind. Og det er præcis det, der mangler i ugen før menstruation, når østrogen falder og tager serotonin med sig ned. Samme hjerne, andre forudsætninger. Ligesom dig før og efter morgenkaffen, bare med bedre dokumentation og færre lyde.',
      action:
        'Hvis der er et projekt derhjemme, I begge har skubbet foran jer i et halvt år, så foreslå at starte på det i dag eller i morgen. Ja, det projekt. Du ved godt hvilket.',
      phaseTags: ['follicular'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'Ordene sidder løsere',
      insight:
        'Flere studier peger på, at verbal formåen, altså evnen til at finde ord, formulere sig og huske ord, er lidt bedre, når østrogen er højt. Effekten er lille i gennemsnit og varierer meget fra person til person, så det er ikke en regel. Men mange kvinder genkender det: samtaler glider lettere midt i cyklussen, og det er sværere at finde ordene i dagene før menstruation. For jer betyder det noget helt konkret. De samtaler, hvor det er vigtigt, at hun bliver hørt rigtigt, og hvor I begge skal formulere jer præcist, ligger bedst her. Ikke fordi hun er dårligere på andre tidspunkter, men fordi vilkårene er bedre, ligesom brød hæver bedre i et varmt køkken. Bemærk ordet "begge". Du skal også finde ord. Og erfaringen siger sgu, at det er den sværeste del. Dit sidste bidrag til en vigtig samtale var "hm".',
      action:
        'Tag én samtale i dag, du normalt ville udskyde, fordi den kræver, at I begge formulerer jer godt. Vælg noget mellemstort. Ikke det største, du er ikke klar, og det ved vi begge to.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: 'Mere mod på det nye',
      insight:
        'Østrogen og dopamin gør sammen hjernen mere åben for det nye og mere villig til at tage en chance. Det viser sig i det små: lyst til at prøve en ny rute, sige ja til en invitation, tage en beslutning, der har ventet. Derfor er follikelfasen et godt tidspunkt at foreslå forandringer, fra at bytte om på rutiner derhjemme til at drøfte et jobskifte. Det samme forslag kan lyde som en mulighed på dag 10 og som en trussel på dag 26. Forskellen er ikke forslaget. Det er heller ikke, hvor godt du formulerede det, selv om du gerne vil tro det. Vær dog opmærksom på, at "mere mod" ikke er det samme som "bedre dømmekraft"; de store ting skal stadig hvile natten over, ligesom en god dej. Det gælder for søren også dine idéer. Især dem fra badet. Pizzaovnen kom fra badet.',
      action:
        'Har du et forslag, du har gået med længe? Fremlæg det i dag som en idé, ikke som en beslutning, og lad hende tygge på det. Uden at stå og kigge imens. Gå ud og lav noget i køkkenet.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'Appetitten falder',
      insight:
        'Mange bemærker, at de spiser mindre i follikelfasen. Det er ikke indbildning. Østrogen dæmper appetitten en smule, og samtidig er kroppens energiforbrug lidt lavere end i lutealfasen, hvor progesteron kræver 100-300 ekstra kalorier om dagen. Trangen til sødt og salt, der fylder i ugen før menstruationen, er stort set væk. Hun har lettere ved at mærke reel sult og reel mæthed. For dig er pointen enkel: lad være med at måle hendes appetit ud fra denne uge. Den er lav nu og høj om to uger, og begge dele er normale. Og drop ros som "hvor er du god til at spise sundt". Det lyder pænt i dag. Om fjorten dage er det blevet til en bebrejdelse, og du er den, der sagde det, mens du selv stod med den tredje portion. Hendes appetit er ikke et emne. Din portion er din egen sag, og den er stor nok.',
      action:
        'Lav et måltid i dag, der er let og friskt, og spørg ikke, om hun har spist nok. Hun mærker det selv i denne uge. Spis din egen mad, og hold øjnene på din egen tallerken.',
      phaseTags: ['follicular'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 10),
      month: M,
      day: 10,
      title: 'Søvnen er ofte bedst nu',
      insight:
        'Søvnen følger cyklussen. I lutealfasen holder progesteron kropstemperaturen oppe, og faldet i hormoner den sidste uge giver mange urolige nætter. I follikelfasen er temperaturen lavere, østrogen støtter den dybe søvn, og de fleste sover bedre og vågner friskere. Det er en af grundene til, at overskuddet føles så tydeligt: hun er ikke kun hormonelt oppe, hun er også udhvilet. Det betyder også, at ugen egner sig til sene aftener, tidlige morgener og lidt større belastning, fordi der er noget at tage af. Men brug ikke den gode søvn til at afdrage overtræk fra sidste uge. Brug den til at lægge til, som når man sætter en suppe over til i morgen. Og nej, det er ikke en invitation til serie-maraton til klokken to hver aften, bare fordi hun kan holde til det. Det kan du nemlig ikke. Du faldt i søvn i pausen af en fodboldkamp.',
      action:
        'Foreslå en aften ude eller en tidlig morgentur i denne uge, som I ikke ville lægge i ugen før menstruation. Mød op udhvilet. Det betyder i seng til tiden, min ven.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'Huden fortæller det samme',
      insight:
        'Østrogen gør huden tykkere, mere fugtig og mere elastisk og holder talgproduktionen i ro. Derfor er huden ofte klarest i dagene omkring ægløsningen og mest urolig i ugen før menstruationen, hvor østrogen falder og progesteron øger talgen. Det er et af de mest synlige spor af cyklussen, og det er værd at kende af én grund: kommentarer. "Du ser frisk ud" er en fin sætning i dag. "Du ser træt ud" er en dårlig sætning om tre uger, og den er for søren dårlig alle andre dage også. Huden er ikke noget, hun styrer, og den er ikke noget, du skal have en holdning til. Ingen har bedt om din holdning, og du har ærlig talt heller ikke nogen om hudpleje; du vasker ansigtet med opvaskemiddel, når sæben er væk. Men du kan lære at se huden som et af de tegn, der fortæller, hvor i cyklussen hun er. Stille. Med munden lukket.',
      action:
        'Læg mærke til huden i dag uden at kommentere den. Ikke ét ord, heller ikke et pænt. Skriv i appens note på dagen, hvis du ser et mønster over de næste cyklusser.',
      phaseTags: ['follicular', 'ovulation'],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: 'Træningen kan skrues op',
      insight:
        'Studierne er mindre entydige, end fitnessblogs vil have det til, men tendensen er der: mange oplever bedre præstation, hurtigere restitution og mere lyst til hård træning i follikelfasen. Østrogen har en beskyttende effekt på muskler, og den lavere kropstemperatur og bedre søvn gør resten. Det betyder ikke, at hun skal træne efter en fasekalender. Det betyder, at hvis hun har lyst til at presse sig i denne uge, er det et godt tidspunkt, og hvis hun har mindre lyst i ugen før menstruation, er det ikke dovenskab. Den vigtigste regel er stadig hendes egen fornemmelse. Kalenderen er et supplement, ikke et program, ligesom en opskrift er et forslag, og man smager til undervejs. Og du er ikke hendes træner. Du er en, der kan løbe med, og som muligvis bliver overhalet på den første bakke. Tag det pænt. Sig ikke, at det var skoene.',
      action:
        'Foreslå en fælles aktivitet med lidt puls i denne uge: en løbetur, en lang cykeltur, en svømmetur. Lad hende vælge intensiteten. Følg med, så godt du kan, og lad være med at tale om det bagefter.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: 'Social energi: læg gæsterne her',
      insight:
        'Socialt overskud er noget af det, der svinger mest hen over cyklussen. I follikelfasen er der typisk lyst til mennesker: middage, familiebesøg, fester, det store fødselsdagsselskab med den lange bordplan. I ugen før menstruation kan den samme aftale føles som en byrde, selv om hun glædede sig, da den blev lavet. Det betyder ikke, at hun er ustabil. Det betyder, at aftaler laves med én hjerne og afvikles med en anden. Det kender du sgu godt: du sagde ja til julefrokosten i september, og i december stod du og ledte efter en undskyldning i køleskabet. Den nemmeste hjælp, du kan give, er at kende kalenderen: når I bliver inviteret, eller når I selv skal have gæster, så se på, hvor i cyklussen datoen lander, før I siger ja. Et tjek på tyve sekunder, der sparer mange aflysninger. Og mindst én diskussion om, hvem der lovede hvad til hvem.',
      action:
        'Kig på næste sociale aftale i kalenderen. Lander den i PMS-ugen, så foreslå at flytte den en uge frem, mens det stadig er let. Ja, i dag. Ikke efter kampen.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'Rejser og de store dage',
      insight:
        'Rejser, flytninger, jobsamtaler, eksamener, det store familiearrangement: alt, der kræver overskud, energi og tålmodighed med andre mennesker, går i gennemsnit lettere i follikelfasen og omkring ægløsningen. Der er ingen kramper, søvnen er god, humøret er robust, og der er mod på det ukendte. Det kan I ikke altid styre; eksamener ligger, hvor de ligger, og din mor fylder rundt, når hun fylder rundt, og hun flytter sig ikke for en app. Men det, I selv planlægger, kan I lægge klogt. En ferie, der starter dag 7, er en anden ferie end en, der starter dag 24, med samme destination og samme budget. Det kræver kun, at I kigger på appen, når I booker. Husk, at forudsigelsen er et skøn, som kan rykke sig nogle dage. Book ikke flyet til dag 13 og kald det videnskab. Du kalder også din chili con carne for en opskrift.',
      action:
        'Er der en rejse eller et stort arrangement i støbeskeen? Åbn appens forudsigelse og se, hvilken fase datoerne rammer, før du trykker på "bestil". Før, ikke efter. Du ved godt hvorfor.',
      phaseTags: ['follicular', 'ovulation'],
    },
    {
      id: dailyId(M, 15),
      month: M,
      day: 15,
      title: 'Svære samtaler: nu er tidspunktet',
      insight:
        'Måned 1 nævnte det kort, og måned 2 gik i dybden med det: læg de svære samtaler uden for PMS-vinduet. Denne uge er den anden halvdel af det råd, den halvdel, hvor du faktisk skal gøre noget. Follikelfasen er der, hvor stressrobustheden er højest, ordene sidder løsest, og der er overskud til at høre hinandens perspektiv uden at gå i forsvar. Det gælder for jer begge, for konflikter er et samspil, og du er den ene halvdel. Det betyder ikke, at samtalen bliver behagelig. Økonomi, fordeling af opgaver, familie og fremtid er svære emner uanset dag. Men de har bedre odds nu. Så vent ikke på, at det "føles rigtigt". Det føles aldrig rigtigt at tage noget svært op, ligesom det aldrig føles rigtigt at tømme den der skuffe. Det er derfor, du har udskudt det siden marts. Brug kalenderen som beslutningsgrundlag i stedet for mavefornemmelsen. Din mavefornemmelse sagde også, at der var plads til dessert.',
      action:
        'Vælg den ene samtale, I har udskudt længst, og spørg: "Har du overskud til, at vi tager den om økonomi i aften eller i morgen?" Og tag så imod svaret. Også hvis det er "i morgen".',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'Store beslutninger og den ekstra uge',
      insight:
        'Beslutninger om bolig, børn, job eller økonomi er lettere at tage, når der er klarhed og overskud, og det er der ofte nu. Men der er en fælde: en beslutning taget i en uge med høj energi og stort mod skal også holde i en uge med lav energi. Det betyder ikke, at beslutningen er forkert, hvis den føles tung på dag 26. Det betyder, at I skal teste den mod begge tilstande, før I skriver under, ligesom man smager på saucen både varm og kold, før den kommer på menuen. Den bedste fremgangsmåde er at tale det store igennem i follikelfasen, lade det ligge en uges tid og bekræfte det, når I begge stadig er enige. Ikke fordi hendes dømmekraft svigter, men fordi ingen af jer skal tage en stor beslutning på én dags humør. Det gælder sgu også dig, og du har ikke engang en cyklus som forklaring. Du har bare lørdag og to øl.',
      action:
        'Hvis I står over for noget stort, så aftal en dato om cirka en uge, hvor I bekræfter beslutningen, i stedet for at lukke den i dag. Skriv datoen ind. Du glemmer den ellers, det har du bevist før.',
      phaseTags: ['follicular', 'ovulation'],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'Faren ved at fylde kalenderen',
      insight:
        'Der er en bagside ved den gode uge: den bliver nemt overbooket. Når alt føles muligt, siger man ja til middagen, træningen, projektet, weekendturen og familiebesøget, og pludselig ligger der fem ting i en uge, der også skulle have været til at hvile i. Overskud er ikke gratis; det bruges op. Og regningen lander ofte i lutealfasen, hvor hun har mindst at betale med. Det er lidt som at spise hele weekendens indkøb fredag aften og så stå og kigge ind i et tomt køleskab søndag. Du kender princippet. Du opfandt det. Din opgave er ikke at bremse hende; det er hendes uge og hendes energi, og ingen har udnævnt dig til bestyrer af den. Men du kan være den, der holder øje med totalen, og som sørger for, at ugens plan også har huller i. Huller er ikke spild. Huller er det, der gør, at resten holder, ligesom luft i et brød.',
      action:
        'Se på ugens kalender sammen, og fjern eller flyt én ting, så der er mindst én helt fri aften tilbage. Fri betyder fri, ikke "bare lige". Du kender godt "bare lige". Det er dit yndlingsudtryk.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'Cycle syncing: myte og evidens',
      insight:
        '"Cycle syncing", tanken om at planlægge kost, træning og arbejde nøjagtigt efter cyklusfasen, er populær på sociale medier, hvor det meste er populært i en uge. Noget af det holder: energi, søvn, appetit og humør følger hormonerne i gennemsnit, og timing af store ting er en reel hjælp. Meget af det holder ikke: der findes ingen god evidens for, at bestemte fødevarer "balancerer hormonerne", at bestemte træningsformer er forbudt i bestemte faser, eller at alle kvinder følger den samme skabelon. Variationen mellem kvinder er større end forskellen mellem faser. Så brug kalenderen som et gennemsnit at planlægge efter, ikke som en facitliste, hun skal leve op til. Hendes egen erfaring slår enhver tabel. Og den slår for søren enhver video på 45 sekunder med en, der råber om frø i et køkken, der aldrig har set en gryde.',
      action:
        'Spørg hende, om der er noget i appens faseopslag, der ikke passer på hende. Notér det, og brug hendes svar frem for standarden. Hun er kilden. Appen er et gennemsnit, og du er en, der lytter.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 19),
      month: M,
      day: 19,
      title: 'De gode uger er hendes',
      insight:
        'Der er en faldgrube i at lære om cyklussen: at man begynder at forklare alt med hormoner. Du har lige lært et nyt ord, og nu vil du bruge det på alt, ligesom dengang du opdagede røget paprika. Lad være. Når hun er skarp, sjov og fuld af energi på dag 10, er det ikke "østrogenet", der er skarpt. Det er hende, med gode vilkår. Ligesom irritationen på dag 26 er hendes ægte irritation med dårlige vilkår. Hvis du tilskriver de gode dage hormonerne, tager du æren fra hende, og hvis du tilskriver de svære dage hormonerne, tager du alvoren fra hende. Cyklussen forklarer vilkårene, ikke personen. Sig derfor aldrig "du er så glad, du må være i follikelfasen". Den sætning fortjener den stilhed, den får, og den får sgu en lang en. Sig "du er god i dag". Det er både sandt og pænere.',
      action:
        'Giv hende i dag konkret anerkendelse for noget, hun har gjort godt, uden at nævne cyklus, fase eller hormoner med ét ord. Ét ord, og du er færdig. Hold dig til maden.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 20),
      month: M,
      day: 20,
      title: 'Forbered de svære uger nu',
      insight:
        'Det bedste tidspunkt at forberede lutealfasen er, mens der er overskud til det. Det lyder banalt, men det er sådan, forståelse bliver til hjælp og ikke bare til noget, du ved og kan sige højt ved et middagsbord. Konkret: fyld fryseren med et par nemme måltider. Tjek, at der er smertestillende, bind eller tamponer og en varmepude i huset. Ja, du må gerne købe bind. Kassen bider ikke, og den har set mænd købe mærkeligere ting end det. Kig på kalenderen for ugen før næste menstruation, og ryd den lidt. Aftal, hvem der tager hvad af de faste opgaver i de dage. Alt det er let nu og tungt om to uger. Og det signalerer noget vigtigt til hende: at du ikke kun reagerer, når det brænder på, men tænker frem. Det er den form for omsorg, der er sværest at se og nemmest at mærke. Lidt som en fuld fryser.',
      action:
        'Lav én af forberedelserne i dag: læg to portioner mad i fryseren, eller tjek beholdningen af det praktiske og fyld op. Uden at annoncere det. Ingen fanfare, ingen "har du set, hvad jeg har gjort".',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: 'Brug overskuddet på jer to',
      insight:
        'Det er nemt at bruge den gode uge på alt det praktiske, der hobede sig op: rengøring, papirarbejde, projekter, aftaler. Pludselig har I haft månedens bedste uge, og det eneste, I har lavet sammen, er at samle en reol og skændes om, hvor skruerne blev af. Husk også at bruge noget af den på jer. Follikelfasen og dagene omkring ægløsningen er ofte der, hvor lyst, nærhed og lysten til at være sammen er højest, og det er ikke tilfældigt, at parforholdet føles lettest her. Den nærhed, I bygger nu, er den buffer, I trækker på i PMS-ugen, ligesom en god fond i fryseren. Hvis hele overskuddet går til opgaver, kommer I til lutealfasen med tom tank på begge konti. Så planlæg noget, der kun er for jer: en aften ude, en gåtur uden mobiler, en langsom morgen i sengen. Reolen står der stadig i næste uge. Den har ikke travlt.',
      action:
        'Book én ting i denne uge, der udelukkende er for jer to, og læg den i kalenderen, så den ikke bliver spist af praktiske gøremål. Kalenderen husker den. Det gør du ikke, det ved vi godt.',
      phaseTags: ['follicular', 'ovulation'],
    },
    {
      id: dailyId(M, 22),
      month: M,
      day: 22,
      title: 'Det er follikelfasen, der varierer',
      insight:
        'Når en cyklus er længere eller kortere end normalt, er det næsten altid follikelfasen, der har flyttet sig. Lutealfasen er stabil på 12-14 dage, fordi det gule legeme har en fast levetid. Follikelfasen derimod styres af hjernen, og hjernen reagerer på stress, søvn, sygdom, rejser og vægtændringer ved at udskyde ægløsningen. En presset måned kan give en 33-dages cyklus i stedet for 28, og de ekstra fem dage lægges til før ægløsningen. Det er godt at vide af to grunde: appens forudsigelse af ægløsning er et skøn og kan rykke sig, og en sen menstruation betyder oftere "hård måned" end noget andet. Kroppen venter, til der er ro. Så inden du begynder at tælle dage med panik i øjnene og finder fingrene frem igen: tænk først på, hvordan den sidste måned har været. Det ved du nemlig godt. Du var der selv.',
      action:
        'Hvis den nuværende cyklus ser ud til at blive længere end normalt, så spørg roligt, om der har været mere pres på end sædvanligt. Roligt. Ikke som et forhør, og ikke med appen i hånden.',
      phaseTags: [],
      sources: [NHS_PERIODS, SUNDHED_DK],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'Hvis energien ikke vender tilbage',
      insight:
        'De fleste mærker et tydeligt løft, når menstruationen er slut. Hvis det løft udebliver måned efter måned, hvis hun er lige så træt dag 10 som dag 2, er det værd at tage alvorligt. Det kan være helt almindelige ting: for lidt søvn, for meget arbejde, en periode med stress. Men vedvarende træthed kan også skyldes jernmangel efter kraftige blødninger, et stofskifte, der ikke er i balance, eller lavt humør, der ikke følger cyklussen. Ingen af delene kan du stille diagnose på, uanset hvor meget du har læst i denne app, og ingen af delene skal hun "tage sig sammen" over. Men du kan være den, der ser mønstret i appen og siger det stille: "Det her fortjener en læge." En blodprøve er hurtig og afklarer meget. Det er ikke dramatik. Det er at tage noget alvorligt, før det bliver stort. Det er det, man gør, når man holder af nogen.',
      action:
        'Kig i kalenderen på de sidste to cyklusser. Kom energien tilbage efter menstruationen? Hvis ikke, så nævn det for hende i dag, stille og uden konklusioner. Du er ikke lægen. Du er ham, der så det.',
      phaseTags: ['menstrual', 'follicular'],
      sources: [NHS_HEAVY],
    },
    {
      id: dailyId(M, 24),
      month: M,
      day: 24,
      title: 'Hun er ikke mere "sig selv" nu',
      insight:
        'Det er fristende at tænke på follikelfasen som "den rigtige hende" og resten som støj. Det er en fejl, og den er ikke harmløs. Hvis den energiske, sociale, tålmodige udgave er den ægte, bliver den trætte, tænksomme, direkte udgave i lutealfasen til en fejl, der skal rettes. Men lutealfasens tanker er ofte lige så sande; de kommer bare uden filter. Det, hun sagde om din bror på dag 25, var ikke hormoner. Det var noget, hun mente, bare uden emballage, serveret direkte fra panden. Og follikelfasens optimisme kan også overse ting. Hun er hele cyklussen. Det, du lærer om faserne, er vilkår, ikke sandheder om, hvem hun er. Den mest respektfulde holdning er, at hun er den samme person hele måneden med forskellige mængder overskud, og at begge udgaver fortjener at blive taget alvorligt. Også den, der har ret om din bror. Hun har sgu ret om din bror.',
      action:
        'Tænk på noget, hun sagde i sidste lutealfase, som du afskrev som "humør". Var der noget i det, så tag det op i dag. Der var sikkert noget i det. Det er der som regel.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 25),
      month: M,
      day: 25,
      title: 'Ægløsning: toppen og vendepunktet',
      insight:
        'Follikelfasen slutter med ægløsningen. Østrogen topper, LH stiger brat, og den dominerende follikel brister og frigiver sit æg. For mange er dagene lige her cyklussens absolutte højdepunkt: mest energi, mest lyst, mest selvtillid. Jordbær i juni. Og så vender det. Efter ægløsningen tager progesteron over, og allerede et par dage senere bliver energien mere indadvendt og roligere. Det er ikke et fald, men et gearskifte, som når man skruer ned fra kogepunkt til simre. Det er værd at kende, fordi vinduet for at bruge overskuddet har en slutdato, og den står ikke i din kalender, medmindre du har skrevet den ind. Det har du ikke. Det, I har planlagt, skal helst ligge før eller omkring ægløsningen, ikke efter. Næste måned handler kun om ægløsningen, så i dag er det nok at vide, at toppen er der, og at den ikke varer ved. Det er det, der gør den til en top.',
      action:
        'Tjek appens skønnede ægløsningsdato for denne cyklus, og se, om jeres planer for de næste dage ligger på den rigtige side af den. Flyt dem, hvis de ikke gør. I dag, ikke "på et tidspunkt".',
      phaseTags: ['ovulation'],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 26),
      month: M,
      day: 26,
      title: 'Lutealfasen: hent det, du lagde til side',
      insight:
        'Nu betaler forberedelsen sig. Hvis du i follikelfasen fyldte fryseren, ryddede kalenderen og aftalte, hvem der tager hvad, er lutealfasen der, hvor det bruges. Ikke som en stor gestus, hvor du står med portionen i hånden og venter på tak. Som noget, der bare er på plads. Maden er der. Aftenen er fri. Opgaven er allerede taget. Det er sådan, den gode uge bliver til hjælp i den svære: ikke ved at du gør mere, når hun har det værst, men ved at det meste allerede er gjort, ligesom en god kok har skåret løgene, før gæsterne kommer. Hvis du ikke nåede at forberede noget i denne omgang, er det helt fint. Du er sgu ikke den første. Læg mærke til, hvad der mangler nu, og skriv det ned til næste follikelfase. Det er et system, der bliver bedre for hver runde. Ligesom dig, forhåbentlig. Vi venter.',
      action:
        'Brug én af de ting, I forberedte, i dag, eller skriv den ene ting ned, du ville ønske, I havde forberedt, til næste gang. Skriv det i appen, ikke i hovedet. Hovedet har vi prøvet.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 27),
      month: M,
      day: 27,
      title: 'Din energi følger ikke hendes',
      insight:
        'En ting, mange partnere overser: dit overskud følger ikke hendes cyklus. Du har din egen rytme, og den er mest styret af søvn, arbejde og hvor længe du sad med telefonen i går. Det var længe. Det betyder, at du kan være den stabile faktor, som har energi i de uger, hvor hun har mindre. Men det betyder også, at du skal passe på ikke at lade hendes gode uge sætte tempoet for jer begge, så du selv er brugt op, når lutealfasen kommer. Den bedste hjælp kræver, at du selv har noget at give af. Man kan ikke servere fra en tom gryde. Sørg for din egen søvn, din egen træning og dine egne pauser, især i den uge, hvor alt går stærkt. Det er ikke egoisme, det er vedligeholdelse. En partner, der er kørt ned, tager tonen personligt og glemmer at reagere på behovet. Du har set den fyr. Du har sgu været den fyr. Vær ikke ham igen.',
      action:
        'Læg én ting i kalenderen i denne uge, der kun er til dig: en løbetur, en aften med venner, en tidlig sengetid. Hold fast i den. Det er også en opgave, og det er den eneste, du får lov at nyde.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 28),
      month: M,
      day: 28,
      title: 'Log også de gode dage',
      insight:
        'De fleste logger, når noget er galt: smerter, dårligt humør, søvnproblemer. Det er naturligt, men det giver en kalender, der kun viser problemer, og det er både urimeligt og upraktisk. Det svarer til kun at skrive ned, hvornår maden brændte på, og så konkludere, at du ikke kan lave mad. Det kan du godt. Nogenlunde. Hvis I også logger de gode dage, høj energi, godt humør, god søvn, en dag hvor alt gled, får I to ting. Et mere ærligt billede af, at cyklussen har mindst lige så mange gode dage som svære. Og en langt bedre fornemmelse af, hvornår skiftet kommer, fordi I kan se begge ender af kurven. Efter tre-fire cyklusser kan I sige med rimelig sikkerhed: "Omkring dag 6 vender det." Det er værdifuld viden, og den kommer kun fra det, der bliver logget. Ikke fra det, du mener at kunne huske. Du husker ikke engang, hvor du lagde skrællekniven.',
      action:
        'Log dagens energi og humør i appen, også hvis de er gode. Især hvis de er gode. Spørg hende, om hun vil gøre det samme i denne uge. Spørg pænt.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 29),
      month: M,
      day: 29,
      title: 'PMS-ugen med follikelfasen i baghovedet',
      insight:
        'Når du står i lutealfasens sidste uge, er det nemt at glemme, at der er en follikelfase på den anden side. Men det er præcis den viden, der gør ugen lettere at bære for jer begge. Ikke som et "bare vent, det går over"; det er afvisende, og det ved du godt, for du har prøvet det, og det gik ikke. Det gik rigtig dårligt. Men som en indre ro hos dig: dette er en fase, den har en slutdato, og om cirka en uge vender energien. Det gør det lettere at holde tempoet nede, lade de store samtaler vente og reagere på behovet frem for tonen. Og det gør det muligt at love noget konkret: "Lad os tage det i næste uge, når vi begge har overskud." Det er et løfte, du kan holde, fordi kalenderen holder det for dig. Den er bedre til det, end du er. Den har aldrig glemt en aftale, og det kan du ikke sige om dig selv.',
      action:
        'Hvis der dukker noget svært op i disse dage, så sig: "Det er vigtigt. Kan vi tage det i næste uge, hvor der er mere ro?" og sæt en dato. En rigtig dato, med tal i.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 30),
      month: M,
      day: 30,
      title: 'Måned 4: det har du lært',
      insight:
        'Du ved nu, at follikelfasen begynder med FSH fra hjernen, at folliklerne svarer med østrogen, og at østrogen løfter både slimhinde, hjerne, hud, søvn og muskler. Du ved, at serotonin og dopamin stiger, at ordene sidder løsere, at der er mere mod på det nye, at appetitten falder, og at træningen kan skrues op. Du ved, at det er den bedste uge til gæster, rejser, svære samtaler og store beslutninger, men at den ikke må overbookes, og at overskuddet kan bruges til at forberede den svære uge, ligesom man fylder fryseren før jul. Du har også lært at købe bind uden at kigge dig over skulderen. Og vigtigst: du ved, at de gode uger er hendes, ikke hormonernes, og at hun er hele cyklussen, ikke kun toppen af den. Det er sgu mere, end du vidste for en måned siden. Det var ikke svært. Det var ét minut om dagen, og du brugte længere tid på at vælge en avocado.',
      action:
        'Fortæl hende de tre ting fra måneden, der har ændret mest på, hvordan du ser hendes cyklus. Tag så månedens quiz. Uden at kigge i kortene. Du er bedre end det. Lidt.',
      phaseTags: [],
    },
  ],
  weekly: [
    {
      id: weeklyId(M, 1),
      month: M,
      week: 1,
      title: 'Fra FSH til østrogen: sådan bygges en cyklus op (uden din hjælp)',
      body: [
        'Måned 1 gav dig modellen: fire faser, to hormoner, én rytme. Har du glemt den, så gå tilbage og læs igen; vi venter, og vi har god tid. Denne måned går vi i dybden med den fase, der giver mest overskud og får mindst opmærksomhed: follikelfasen. Ingen laver film om den. Der er ingen varmepude involveret, ingen dramatik, ingen tårer. Den er alligevel interessant af to grunde. Den er biologisk imponerende, og den er det tidspunkt i cyklussen, hvor I sammen kan få mest ud af at planlægge rigtigt. Så hæld en kop kaffe op, og hør her.',
        'Først timingen, og her kommer den første overraskelse. Follikelfasen løber teknisk set fra dag 1, første blødningsdag, og helt frem til ægløsningen. Den overlapper altså menstruationen. Det, de fleste oplever som "follikelfasen", er den sidste del: dagene efter blødningen, cirka dag 6 til 13 i en 28-dages cyklus, hvor østrogen for alvor stiger. Det er også den del af cyklussen, der varierer mest i længde. Lutealfasen efter ægløsning er ret stabil på 12-14 dage, mens follikelfasen kan være alt fra en uge til flere uger, afhængigt af hvad der ellers sker i hendes liv. Så når du har regnet ægløsningen ud på fingrene og tager fejl, er det her, fejlen sidder. Det er ikke fingrene. Fingrene er fine.',
        'Det hele begynder i hjernen. Ikke i æggestokkene, som de fleste ville gætte, hvis de blev vækket klokken tre og spurgt. Når østrogen og progesteron rammer bunden under menstruationen, registrerer hypofysen det og sender FSH, follikelstimulerende hormon, ud i blodet. FSH får en gruppe på 10-20 små follikler i æggestokkene til at vokse. Hver follikel er en væskefyldt blære med et umodent æg indeni. Folliklerne svarer igen ved at producere østrogen, og når østrogen stiger, giver det besked tilbage til hjernen om at skrue ned for FSH. Det er en løkke med feedback, ikke en kontakt, der tændes. Kroppen smager til undervejs, hvor du ville have hældt hele saltbøssen i på én gang og håbet det bedste.',
        'Omkring dag 5-7 sker der en udvælgelse. Den follikel, der er mest følsom over for FSH, klarer sig, når FSH falder; de andre visner. Den dominerende follikel vokser til omkring to centimeter og producerer størstedelen af cyklussens østrogen. Derfor stiger østrogen stejlt i den sidste uge før ægløsningen. Samtidig får østrogen livmoderslimhinden til at vokse igen efter menstruationen, klar til et eventuelt befrugtet æg. Når østrogen topper, udløser det LH-stigningen, folliklen brister, og ægget frigives. Det er ægløsningen, og den slutter follikelfasen. Hele det forløb kører hver måned uden møder, uden en app og uden at nogen har bedt om det. Du kan ikke engang få tømt opvaskemaskinen uden en påmindelse.',
        'Men østrogen arbejder ikke kun i underlivet. Der er østrogenfølsomme celler i hjernen, huden, musklerne, knoglerne, blodkarrene og stofskiftet. Derfor mærkes stigningen som et generelt løft: mere energi, mere stabilt humør, klarere tanker, bedre søvn, lavere appetit, glattere hud og mere lyst til at træne, tale og se mennesker. Det er ikke et humørhormon. Det er et byggehormon, der tilfældigvis også bygger overskud, som en håndværker, der kommer til tiden og for søren også fejer op efter sig. Næste uge ser vi nærmere på, hvad det gør ved hjernen. Hendes, altså. Din er, hvad den er, og det må vi leve med.',
        'Fordi follikelfasen styres fra hjernen, er den også følsom over for alt det, hjernen registrerer: stress, søvnmangel, sygdom, rejser, hård træning og vægtændringer. Hjernen svarer ved at vente med at sætte ægløsningen i gang. Det er derfor, en presset måned ofte giver en længere cyklus, og derfor appen regner ægløsning baglæns fra den forventede menstruation i stedet for forlæns fra dag 1. Forudsigelsen er et skøn. Kroppen venter, til der er ro. Den har mere tålmodighed, end du har i køen ved kassen, og det er ikke meget at måle sig med.',
        'Det, du kan gøre i denne uge, er at lægge mærke til skiftet. Et sted mellem dag 4 og 7 kommer der typisk en dag, hvor hun står op og bare har det bedre. De fleste partnere ser det ikke, fordi de er optaget af at være lettede over, at menstruationen er ovre, og af at kigge på deres telefon. Sig det højt, når du ser det, uden at nævne hormoner: "Det virker som om du har fået energien tilbage." Og foreslå én ting, I skal lave sammen i den uge, der kommer. Det er den nemmeste form for hjælp, der findes: at være opmærksom på det gode, ikke kun det svære. Den kræver ingen indkøb, og det er sjældent, vi kan sige det her i appen.',
      ],
      conversationQuestion:
        'Hvornår efter menstruationen kan du mærke, at energien vender? Og hvad er det første, du får lyst til at gøre, når den gør?',
      sources: [ACOG_CYCLE, SUNDHED_DK, NHS_PERIODS],
    },
    {
      id: weeklyId(M, 2),
      month: M,
      week: 2,
      title: 'Østrogen og hjernen: hvad "mere overskud" egentlig består af',
      body: [
        '"Hun har mere overskud" er en upræcis beskrivelse. Det er på niveau med "bilen lyder mærkeligt" og "der mangler et eller andet i saucen". Overskud består af flere ting, som hver især kan mærkes, og som hver især har en forklaring. Kender du delene, bliver du bedre til at se dem og til at bruge dem rigtigt. Og du bliver bedre til at svare, når nogen ved et middagsbord spørger, hvad du egentlig lærer i den app. "Ting" er ikke et svar.',
        'Start med humøret. Østrogen påvirker to signalstoffer i hjernen. Serotonin holder humøret stabilt og dæmper uro; østrogen øger både produktionen og hjernens følsomhed for det. Dopamin driver motivation, belønning og lyst til at gå i gang; også det stiger med østrogen. Resultatet er en uge, hvor tingene føles mulige, hvor irritationstærsklen er højere, og hvor der er lyst til at starte på noget. Det er ikke kunstigt godt humør, det er hjernens normale kemi med medvind. Og det er præcis det, der mangler i ugen før menstruationen, når østrogen falder og tager serotonin med sig ned. Samme hjerne, andre forudsætninger. Du kender princippet fra dig selv før og efter frokost. Før frokost er du ikke til at være i nærheden af.',
        'Så ordene. Flere studier peger på, at verbal formåen, evnen til at finde ord, formulere sig og huske ord, er lidt bedre, når østrogen er højt. Effekten er lille i gennemsnit og varierer meget fra person til person, så det er ikke en lov. Men mange genkender det: samtaler glider lettere midt i cyklussen, og ordene sidder fastere i dagene før menstruation. Det betyder, at de samtaler, hvor det er vigtigt, at I begge formulerer jer præcist og bliver hørt rigtigt, har bedre vilkår her. Det løser sgu ikke dit eget ordforråd. Det er stadig dit ansvar, og "hm" tæller stadig ikke som et bidrag.',
        'Så modet. Østrogen og dopamin gør tilsammen hjernen mere åben for det nye og mere villig til at tage en chance. Et forslag om forandring, fra nye rutiner derhjemme til et jobskifte, kan lyde som en mulighed på dag 10 og som en trussel på dag 26. Forskellen er ikke forslaget, og den er heller ikke din fremragende præsentation af det, uanset hvor mange gange du øvede den i bilen. Men pas på med at forveksle mod med dømmekraft. Store beslutninger skal stadig sove en uge, så de også holder, når energien er lavere. Det gælder i øvrigt også de beslutninger, du selv får i brusebadet. Dem fra brusebadet har kostet jer en del.',
        'Så kroppen. I follikelfasen er kropstemperaturen lavere end i lutealfasen, og østrogen støtter den dybe søvn, så de fleste sover bedre og vågner friskere. Appetitten falder en smule, og trangen til sødt og salt er stort set væk. Mange oplever bedre præstation og hurtigere restitution i træning, selv om studierne er mindre entydige, end fitnessblogs vil have det til. Huden er ofte klarest omkring ægløsningen. Alt det er små effekter hver for sig, men de lægger sig oven i hinanden og bliver til det, der føles som overskud, ligesom en god suppe er fem kedelige ting i samme gryde. Ingen af delene er noget, du skal kommentere. Du skal bare vide, at de findes, og så holde mund.',
        'Og til sidst det sociale. Lysten til mennesker er noget af det, der svinger mest hen over cyklussen. I follikelfasen er der typisk lyst til middage, familie og fester. I ugen før menstruation kan den samme aftale føles som en byrde, selv om hun glædede sig, da den blev lavet. Det er ikke ustabilitet. Det er, at aftaler laves med én hjerne og afvikles med en anden. Du har selv sagt ja til ting i september, som du fortrød så grundigt i december, at du overvejede at blive syg. Forskellen er, at du ikke kunne se det komme. Det kan I nu.',
        'Nu til det vigtige forbehold. Alt ovenstående er gennemsnit. Variationen mellem kvinder er større end forskellen mellem faser, og nogle mærker næsten ingen af delene, mens andre mærker dem alle. Hendes egen erfaring slår enhver tabel. Og selv når mønstret passer, er det hende, der er skarp, sjov og energisk på dag 10, ikke hendes østrogen. Hormonerne forklarer vilkårene. Personen er den samme hele måneden. Hvis du nogensinde får lyst til at sige "det er nok østrogenet", så sig det til køleskabet i stedet. Køleskabet er ligeglad, det har hørt værre fra dig klokken to om natten, og det er en bedre afslutning.',
        'Det, du kan gøre i denne uge: læg en samtale, du har udskudt, her. Fremlæg det forslag, du har gået med, som en idé og ikke en beslutning. Foreslå en aktivitet med lidt puls. Mål ikke hendes appetit ud fra denne uge, og kommentér ikke hendes hud. Og giv hende anerkendelse for det, hun gør godt, uden at nævne cyklus med ét ord. Det sidste er sværere, end det lyder, nu hvor du har lært ordene og gerne vil bruge dem, ligesom dengang du lærte ordet "umami". Gør det alligevel.',
      ],
      conversationQuestion:
        'Hvad mærker du selv tydeligst i den gode uge: humøret, energien, ordene eller lysten til nyt? Og er der noget af det, jeg overser?',
      sources: [NHS_PMS, ACOG_CYCLE],
    },
    {
      id: weeklyId(M, 3),
      month: M,
      week: 3,
      title: 'Brug overskuddet klogt: planlægning uden at overbooke',
      body: [
        'Timing er gratis hjælp. Det lærte du i måned 1, og det er stadig det bedste tilbud i appen, bedre end noget, der nogensinde har ligget i køledisken med gul mærkat. Denne uge handler om, hvordan I gør det i praksis: hvad der skal ligge i follikelfasen, hvordan I undgår at fylde den for meget, og hvordan den gode uge bliver til hjælp i den svære. Det kræver, at du åbner en kalender. Du har en. Den ligger på telefonen ved siden af spillene, og den har ikke set dig længe.',
        'Start med listen over det, der har bedst odds her: gæster og fester, rejser og flytninger, svære samtaler, store beslutninger, hårde træningspas, nye projekter og alt, der kræver tålmodighed med andre mennesker. Ikke fordi det er umuligt på andre tidspunkter, men fordi søvnen er god, kramperne er væk, humøret er robust, og der er mod på det ukendte. Den enkleste vane, I kan indføre, er at kigge på appen, før I siger ja til noget stort. Hvor lander datoen? En ferie, der starter dag 7, er en anden ferie end en, der starter dag 24. Samme hotel, samme pris, en helt anden uge. Husk blot, at forudsigelsen er et skøn, som kan rykke sig nogle dage. Det er ikke en køreplan. Det er mere som stegetiden på en pakke: vejledende, og du skal stadig kigge i ovnen.',
        'De svære samtaler fortjener et afsnit for sig. Økonomi, fordeling af opgaver, familie, fremtid: emnerne er svære uanset dag, men de har bedre vilkår, når stressrobustheden er høj og ordene sidder løst. Det gælder jer begge, for konflikter er et samspil, og du er halvdelen af det. Vent ikke på, at det føles rigtigt; det gør det sjældent. Det er derfor, du stadig ikke har taget den. Brug kalenderen som beslutningsgrundlag, og spørg om overskud i stedet for at kaste emnet på bordet midt i aftensmaden, lige mellem kartoflerne og saucen: "Har du overskud til, at vi tager den om økonomi i aften eller i morgen?" Det giver hende et valg, og det signalerer, at du har tænkt over timingen. Det er nyt. Det bliver sgu bemærket.',
        'Store beslutninger har en særlig fælde. En beslutning, der tages i en uge med høj energi og stort mod, skal også holde i en uge med lav energi. Det betyder ikke, at den er forkert, hvis den føles tung på dag 26. Men det betyder, at I bør teste den mod begge tilstande. Tal det store igennem i follikelfasen, lad det ligge en uge, og bekræft det, når I stadig er enige. Ingen af jer skal tage en stor beslutning på én dags humør, og det gælder også dig. Du har bare ikke en kalender, der advarer dig. Du har en lørdag og en fornemmelse af, at det nok går.',
        'Nu til faren. Den gode uge bliver nemt overbooket. Når alt føles muligt, siger man ja til middagen, træningen, projektet, weekendturen og familiebesøget, og pludselig ligger der fem ting i en uge, der også skulle have været til at hvile i. Overskud er ikke gratis; det bruges op. Og regningen lander ofte i lutealfasen, hvor hun har mindst at betale med. Din opgave er ikke at bremse hende, det er hendes uge, og ingen har gjort dig til vagt. Men du kan være den, der holder øje med totalen, og som sørger for, at der er mindst én helt fri aften tilbage. En fri aften er ikke en aften, hvor der "bare lige" er noget. Du ved godt, hvad "bare lige" bliver til. Det bliver til klokken elleve.',
        'Den vigtigste brug af overskuddet er måske den mindst synlige: at forberede den svære uge. Fyld fryseren med et par nemme måltider. Tjek, at der er smertestillende, bind eller tamponer og en varmepude i huset. Ja, du kan godt købe bind. Kassen i supermarkedet har set det før, og den har set dig købe værre ting en fredag aften. Kig på kalenderen for ugen før næste menstruation, og ryd den lidt. Aftal, hvem der tager hvad af de faste opgaver i de dage. Alt det er let nu og tungt om to uger. Og det fortæller hende noget, ord ikke kan: at du tænker frem, ikke kun reagerer, når det brænder på.',
        'To ting til sidst. Brug også noget af overskuddet på jer to. Follikelfasen og dagene omkring ægløsningen er ofte der, hvor lyst og nærhed er højest, og den nærhed er den buffer, I trækker på i PMS-ugen. Går hele overskuddet til opgaver, kommer I til lutealfasen med tom tank på begge konti, og en samlet reol er en dårlig trøst, uanset hvor lige den står. Og pas på dit eget tempo. Dit overskud følger ikke hendes cyklus, og det er en styrke, men kun hvis du ikke lader hendes gode uge køre dig ned, så du selv er brugt op, når hun har mest brug for dig. En partner på reservetank hjælper ingen, og han er heller ikke sjov at spise med.',
      ],
      conversationQuestion:
        'Hvis du ser på de næste to uger i kalenderen: hvad ville du helst flytte, og hvad ville du helst have, at vi lagde ind?',
      sources: [NHS_PMS],
    },
    {
      id: weeklyId(M, 4),
      month: M,
      week: 4,
      title: 'Cycle syncing, myter og det, der er hendes',
      body: [
        '"Cycle syncing" er tanken om at planlægge kost, træning, arbejde og socialt liv nøjagtigt efter cyklusfasen. Det er populært på sociale medier, hvor det bliver præsenteret af folk med meget god belysning og meget rene køkkener. Det er værd at skille ad, for noget af det er nyttigt, og noget af det er støj. Som partner er det vigtigt, at du ikke ender med at forvente en skabelon, hun ikke passer ind i. Du er ikke her for at tjekke, om hun følger planen. Der er ingen plan. Der har aldrig været en plan.',
        'Det, der holder: energi, søvn, appetit, humør og lyst følger hormonerne i gennemsnit. Follikelfasen giver typisk overskud, lutealfasens sidste uge giver typisk mindre. Timing af svære samtaler, store beslutninger, gæster og rejser er en reel hjælp, som denne måned har handlet om. Det er evidensbaseret på det niveau, hvor NHS og andre sundhedsmyndigheder beskriver cyklussen. Det er med andre ord ikke noget, der blev fundet på i sidste uge af en, der også sælger et pulver.',
        'Det, der ikke holder: der findes ingen god evidens for, at bestemte fødevarer eller frø "balancerer hormonerne", at bestemte træningsformer er forbudt i bestemte faser, eller at alle kvinder følger den samme fire-ugers skabelon. Effekterne på præstation og tankearbejde er små i gennemsnit, og variationen mellem kvinder er større end forskellen mellem faser. Nogle mærker næsten intet, andre mærker alt. En kalender, der siger "nu bør du have energi", er ikke en hjælp, hvis hun ikke har det. Så er den et krav. Og du vil ikke være ham, der står med kalenderen i den ene hånd og en pose frø i den anden og siger "men der står altså".',
        'Ét forbehold mere, og det er vigtigt: hvis hun bruger hormonel prævention som p-piller, p-ring eller hormonspiral, gælder meget af det, du har læst denne måned, ikke eller kun delvist. De fleste af de metoder holder ægløsningen tilbage, og så er der ingen follikel, der modner, og ingen naturlig østrogenstigning. Blødningen på p-piller er en pauseblødning, ikke en menstruation i biologisk forstand. Hun kan stadig mærke udsving, men de følger ikke nødvendigvis fasemodellen. Spørg, hvad hun bruger, hvis du ikke ved det. Det burde du vide. Det burde du virkelig vide. Og lad hendes erfaring styre, ikke tabellen.',
        'Det bringer os til det vigtigste: hendes egen erfaring slår enhver tabel. Appen viser et gennemsnit at planlægge efter. Hun ved, hvad der faktisk sker. Spørg hende, hvad der passer, og hvad der ikke gør. Log også de gode dage, ikke kun de svære, så kalenderen viser hele billedet og ikke kun problemerne. Efter tre-fire cyklusser har I et mønster, der er hendes, og det er værd mere end alle bloggenes skabeloner tilsammen. Det kostede jer ét minut om dagen. Bloggen ville have solgt jer frø, og du ville sgu have købt dem.',
        'Der er også en myte, som er sværere at få øje på: at follikelfasen er "den rigtige hende" og resten støj. Hvis den energiske, sociale, tålmodige udgave er den ægte, bliver den trætte, tænksomme, direkte udgave i lutealfasen til en fejl, der skal rettes. Men lutealfasens tanker er ofte lige så sande; de kommer bare uden filter, direkte fra panden. Og follikelfasens optimisme kan overse ting. Hun er hele cyklussen. Det, du lærer om faserne, er vilkår, ikke sandheder om, hvem hun er. Du er heller ikke kun dig selv om lørdagen, selv om det er der, du er sjovest.',
        'Og til sidst: de gode uger er hendes. Når hun er skarp, sjov og fuld af energi på dag 10, er det ikke østrogenet, der er skarpt. Det er hende, med gode vilkår. Tilskriver du de gode dage hormonerne, tager du æren fra hende; tilskriver du de svære dage hormonerne, tager du alvoren fra hende. Sig aldrig "du må være i follikelfasen". Sig "du er god i dag". Det er både sandt og pænere, og det er den holdning, der gør, at hun kan holde ud, at du følger med i hendes cyklus. Det er trods alt hendes. Du har bare fået lov at kigge med, ligesom når nogen lader dig stå ved siden af ved komfuret. Rør ikke ved noget.',
      ],
      conversationQuestion:
        'Er der noget ved den måde, appen eller jeg beskriver din cyklus på, der ikke passer på dig? Hvad ville du ændre?',
      sources: [NHS_PERIODS, NHS_CONTRACEPTION],
    },
  ],
  wrap: {
    id: wrapId(M),
    month: M,
    title: 'Måned 4: Follikelfasen',
    summary: [
      'Denne måned handlede om cyklussens bedste uge og om at bruge den klogt i stedet for bare at bemærke, at det gik godt, og så gå i gang med reolen. Follikelfasen begynder med FSH fra hjernen, folliklerne svarer med østrogen, én follikel vinder, og østrogen bygger både slimhinde og overskud op. Det mærkes som stabilt humør, lettere ord, mere mod på det nye, bedre søvn, lavere appetit, større træningskapacitet og lyst til mennesker. Alt sammen gennemsnit, med større variation mellem kvinder end mellem faser. Appen er en tabel. Hun er sgu ikke.',
      'Du har lært at lægge gæster, rejser, svære samtaler og store beslutninger her, at bekræfte de store beslutninger en uge senere, at holde øje med totalen, så ugen ikke bliver overbooket, at forberede den svære uge, mens der er overskud, og at bruge noget af overskuddet på jer to og ikke kun på reolen. Og du har lært, at hun er hele cyklussen, at de gode uger er hendes og ikke hormonernes, og at hendes erfaring slår enhver tabel, især hvis hun bruger hormonel prævention. Det burde du vide nu. Vi spørger ikke igen.',
      'Næste måned handler om ægløsningen: tegnene, nærheden og det frugtbare vindue, med viden uden pres. Jordbær i juni. Du klarer det, og du sætter ikke en alarm.',
    ],
    keepDoing: [
      'Sig det højt, når energien vender efter menstruationen, uden at nævne hormoner. Ikke ét. Heller ikke et lille et.',
      'Tjek appen, før I siger ja til noget stort, og læg det i follikelfasen. Før, ikke efter.',
      'Hold mindst én fri aften i den gode uge, så den ikke bliver overbooket. Fri betyder fri, ikke "bare lige".',
      'Fyld fryseren og ryd kalenderen for PMS-ugen, mens der er overskud. Køb bindene. Kassen bider ikke.',
      'Bekræft store beslutninger en uge efter, at I blev enige. Også dine. Især dine.',
      'Log også de gode dage, så mønstret bliver hendes og ikke appens. Hukommelsen har vi prøvet.',
    ],
    quiz: [
      {
        question: 'Hvad sætter follikelfasen i gang?',
        options: [
          'Progesteron fra det gule legeme',
          'FSH fra hypofysen, som får folliklerne til at vokse',
          'Jern fra kosten efter menstruationen',
          'Ægløsningen',
        ],
        correctIndex: 1,
        explanation:
          'Hjernen sender FSH, folliklerne svarer med østrogen. Fordi starten styres fra hjernen, kan stress og søvnmangel forsinke hele fasen. Jern er godt, men det trykker ikke på knappen, uanset hvor meget spinat du steger.',
      },
      {
        question:
          'Det er dag 7, menstruationen er lige slut, og hun virker mærkbart lettere. Hvad er mest hjælpsomt?',
        options: [
          'Sige "du må være i follikelfasen nu" og se stolt ud',
          'Ikke sige noget, det er jo bare normalt',
          'Sige "det virker som om du har fået energien tilbage" og foreslå noget, I skal lave sammen',
          'Spørge, om hun har husket at logge det',
        ],
        correctIndex: 2,
        explanation:
          'Skiftet efter menstruationen er en af cyklussens mest forudsigelige overgange. At se det og bruge det, uden at forklare det med hormoner, er den hjælp, der betyder mest. Fasenavnet beholder du for dig selv, sammen med den stolte mine.',
      },
      {
        question:
          'I bliver inviteret til en stor fest, og datoen lander tre dage før forventet menstruation. Hvad gør du?',
        options: [
          'Tjekker appen sammen med hende og spørger, om I skal bede om en anden dato eller planlægge at tage tidligt hjem',
          'Siger ja, hun elsker fester',
          'Siger nej uden at spørge hende, du har jo læst appen',
          'Siger ja og håber det bedste',
        ],
        correctIndex: 0,
        explanation:
          'Aftaler laves med én hjerne og afvikles med en anden. Et hurtigt tjek af kalenderen, før I siger ja, sparer mange aflysninger. Og beslutningen er stadig hendes, ikke appens og sgu ikke din.',
      },
      {
        question: 'Det er dag 10, og hun har sagt ja til fem ting i denne uge. Hvad hjælper mest?',
        options: [
          'Sige, at hun overdriver',
          'Booke endnu mere, nu hvor der er energi',
          'Sige ingenting, det er hendes uge',
          'Se ugen igennem sammen og foreslå, at én ting flyttes, så der er en fri aften',
        ],
        correctIndex: 3,
        explanation:
          'Overskud bruges op, og regningen lander i lutealfasen. Din rolle er ikke at bremse, men at holde øje med totalen og sørge for huller i planen, ligesom luft i et brød. Du er ikke vagt. Du er den, der kan tælle til fem.',
      },
      {
        question:
          'I har talt om at flytte, og på dag 11 er I begge enige og begejstrede. Hvad er klogest?',
        options: [
          'Skrive under i dag, mens der er enighed',
          'Aftale en dato om cirka en uge, hvor I bekræfter beslutningen',
          'Vente til lutealfasen og se, om hun stadig vil',
          'Lade hende beslutte alene',
        ],
        correctIndex: 1,
        explanation:
          'En beslutning taget med høj energi og stort mod skal også holde med lav energi. Tal det igennem nu, og bekræft det en uge senere, når I stadig er enige. Det gælder jer begge, ikke kun hende. Du er ham, der købte en kajak i februar.',
      },
      {
        question:
          'En blog siger, at hun skal spise bestemte frø og undgå løb i lutealfasen. Hvad er den bedste reaktion?',
        options: [
          'Købe frøene og lægge træningen om efter planen',
          'Sige, at cyklussen ikke betyder noget for træning',
          'Bruge appen som et gennemsnit og spørge hende, hvad hun selv mærker',
          'Følge planen én måned for at teste den',
        ],
        correctIndex: 2,
        explanation:
          'Timing af energi og overskud har evidens; frø, der balancerer hormoner, og forbudte træningsformer har ikke. Hendes egen erfaring slår enhver tabel, og den slår bloggen med flere længder. Frøene kan du bruge i brødet.',
      },
    ],
  },
};
