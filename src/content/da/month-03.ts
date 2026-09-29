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

const M = 3;

export const month03: MonthContent = {
  month: M,
  theme: 'Follikelfasen',
  focus: 'Energi og overskud stiger: planlæg det store sammen, og brug overskuddet klogt.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'Follikelfasen starter allerede på dag 1',
      insight:
        'Teknisk set begynder follikelfasen samme dag som menstruationen. Den løber fra dag 1 og helt frem til ægløsningen og overlapper altså blødningen. Det, de fleste mærker som "follikelfasen", er den sidste del: dagene efter blødningen, hvor østrogen for alvor er på vej op. Derfor handler denne måned mest om tiden fra menstruationens slutning til ægløsning, cirka dag 6 til 13 i en 28-dages cyklus. Men det er godt at vide, at arbejdet i æggestokkene allerede er i gang, mens hun bløder. Kroppen forbereder næste runde, før den forrige er afsluttet. Månedens tema er, hvad der sker i den forberedelse, hvad det gør ved energi, humør og hjerne, og hvordan I bruger den bedste uge klogt.',
      action:
        'Se på appens Hjem-skærm, hvilken cyklusdag hun er på i dag, og regn ud, hvor mange dage der cirka er til ægløsning.',
      phaseTags: ['menstrual', 'follicular'],
      sources: [SUNDHED_DK, ACOG_CYCLE],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: 'FSH: startskuddet kommer fra hjernen',
      insight:
        'Det hele starter i hjernen. Når hormonerne rammer bunden under menstruationen, opfanger hypofysen det og sender FSH, follikelstimulerende hormon, ud i blodet. FSH gør præcis det, navnet siger: det stimulerer en lille gruppe follikler i æggestokkene, hver med et umodent æg indeni, til at vokse. Folliklerne svarer igen ved at producere østrogen. Så snart østrogen stiger, giver det besked tilbage til hjernen om at skrue ned for FSH. Det er en løkke, ikke en kontakt. Det betyder også, at alt, der forstyrrer hjernen, som stress, søvnmangel og sygdom, kan forsinke starten, uden at der er noget galt med æggestokkene. Follikelfasen er den del af cyklussen, hjernen har mest indflydelse på.',
      action:
        'Sig modellen højt for dig selv: "Hjernen sender FSH, folliklerne svarer med østrogen, østrogen giver overskud." Det er hele fasen på én linje.',
      phaseTags: [],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 3),
      month: M,
      day: 3,
      title: 'Folliklerne konkurrerer, og én vinder',
      insight:
        'I begyndelsen af fasen vokser 10-20 follikler på samme tid. Omkring dag 5-7 sker der en udvælgelse: den follikel, der er mest følsom over for FSH, bliver dominerende, og de andre går i sig selv igen. Vinderen vokser til omkring to centimeter og producerer størstedelen af cyklussens østrogen. Det er derfor, østrogen stiger stejlt i anden halvdel af follikelfasen frem for jævnt. Ægget i den dominerende follikel modner færdigt, mens folliklen forbereder sig på at briste ved ægløsningen. Det er en imponerende proces, som foregår uden at hun mærker det, og som starter forfra hver eneste cyklus. Hver måned vælger kroppen ét æg ud af en hel gruppe, helt af sig selv.',
      action:
        'Fortæl hende én ting fra dagens kort, du ikke vidste i forvejen. Det gør viden fælles uden at belære.',
      phaseTags: [],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'Østrogen bygger op: slimhinde og overskud',
      insight:
        'Østrogen fra folliklerne har to jobs. Det ene er lokalt: det får livmoderslimhinden til at vokse igen efter menstruationen, klar til et eventuelt befrugtet æg. Det andet job foregår i hele kroppen. Østrogen påvirker hjernen, huden, musklerne, knoglerne, blodkarrene og stofskiftet. Der er østrogenfølsomme celler stort set overalt. Derfor mærkes stigende østrogen ikke kun i underlivet, men som et generelt løft: mere energi, bedre humør, klarere tanker, glattere hud og ofte bedre søvn. Det er ikke et humørhormon, det er et byggehormon, der tilfældigvis også bygger overskud. Resten af måneden handler om, hvad det løft konkret betyder, og hvordan I bruger det.',
      action:
        'Læg mærke til i dag, om der er noget, hun gør lettere eller hurtigere end for en uge siden, og sig det til hende.',
      phaseTags: ['follicular'],
      sources: [SUNDHED_DK],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'Skiftet efter menstruationen',
      insight:
        'Skiftet fra menstruation til follikelfase er tit tydeligt, hvis man kigger efter det. Blødningen aftager, kramperne slipper, og et sted mellem dag 4 og 7 kommer der en dag, hvor hun står op og bare har det bedre. Mange kvinder beskriver det som at "vende tilbage til sig selv". Det er en af cyklussens mest forudsigelige overgange, og alligevel overser de fleste partnere den, fordi man lægger mere mærke til, når noget bliver værre, end når det bliver bedre. Det er værd at træne det modsatte. At blive set i de gode dage betyder mindst lige så meget som at blive hjulpet i de svære.',
      action:
        'Hvis menstruationen lige er slut eller ved at være det: spørg "kan du mærke, at energien er på vej tilbage?" og lyt til svaret.',
      phaseTags: ['menstrual', 'follicular'],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: 'Serotonin og dopamin: derfor stiger humøret',
      insight:
        'Østrogen påvirker de to signalstoffer, der betyder mest for humør og motivation. Serotonin holder humøret stabilt og dæmper uro; østrogen øger både produktionen og hjernens følsomhed for det. Dopamin driver motivation, belønning og lysten til at gå i gang; også det stiger med østrogen. Resultatet er en uge, hvor tingene føles mulige, hvor der er lyst til at starte projekter, og hvor irritationstærsklen er højere. Det er ikke "kunstigt godt humør". Det er hjernens normale kemi med lidt mere medvind. Og det er præcis det, der mangler i ugen før menstruation, når østrogen falder og tager serotonin med sig. Det er den samme hjerne, med forskellige forudsætninger.',
      action:
        'Hvis der er et projekt derhjemme, I begge har skubbet foran jer, så foreslå at starte på det i dag eller i morgen.',
      phaseTags: ['follicular'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'Ordene sidder løsere',
      insight:
        'Flere studier peger på, at verbal formåen, altså evnen til at finde ord, formulere sig og huske ord, er lidt bedre, når østrogen er højt. Effekten er lille i gennemsnit og varierer meget fra person til person, så det er ikke en regel. Men mange kvinder genkender det: samtaler glider lettere midt i cyklussen, og det er sværere at finde ordene i dagene før menstruation. For jer betyder det noget helt konkret. De samtaler, hvor det er vigtigt, at hun bliver hørt rigtigt, og hvor I begge skal formulere jer præcist, ligger bedst her. Ikke fordi hun er dårligere på andre tidspunkter, men fordi vilkårene er bedre.',
      action:
        'Tag én samtale i dag, du normalt ville udskyde, fordi den kræver, at I begge formulerer jer godt. Vælg noget mellemstort, ikke det største.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: 'Mere mod på det nye',
      insight:
        'Østrogen og dopamin gør sammen hjernen mere åben for det nye og mere villig til at tage en chance. Det viser sig i det små: lyst til at prøve en ny rute, sige ja til en invitation, tage en beslutning, der har ventet. Det er også derfor, follikelfasen er et godt tidspunkt at foreslå forandringer, fra at bytte om på rutiner derhjemme til at drøfte et jobskifte. Det samme forslag kan lyde som en mulighed på dag 10 og som en trussel på dag 26. Forskellen er ikke forslaget. Vær dog opmærksom på, at "mere mod" ikke er det samme som "bedre dømmekraft"; de store ting skal stadig sove en nat.',
      action:
        'Har du et forslag, du har gået med længe? Fremlæg det i dag som en idé, ikke som en beslutning, og lad hende tygge på det.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'Appetitten falder',
      insight:
        'Mange bemærker, at de spiser mindre i follikelfasen. Det er ikke indbildning. Østrogen dæmper appetitten en smule, og samtidig er kroppens energiforbrug lidt lavere end i lutealfasen, hvor progesteron kræver 100-300 ekstra kalorier om dagen. Trangen til sødt og salt, der fylder i ugen før menstruationen, er stort set væk. Hun har lettere ved at mærke reel sult og reel mæthed. For dig er pointen enkel: lad være med at måle hendes appetit ud fra denne uge. Den er lav nu og høj om to uger, og begge dele er normale. Og undlad ros som "hvor er du god til at spise sundt"; det bliver til en bebrejdelse om fjorten dage.',
      action:
        'Lav et måltid i dag, der er let og friskt, og spørg ikke, om hun har spist nok. Hun mærker det selv i denne uge.',
      phaseTags: ['follicular'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 10),
      month: M,
      day: 10,
      title: 'Søvnen er ofte bedst nu',
      insight:
        'Søvnen følger cyklussen. I lutealfasen holder progesteron kropstemperaturen oppe, og faldet i hormoner den sidste uge giver mange urolige nætter. I follikelfasen er temperaturen lavere, østrogen støtter den dybe søvn, og de fleste sover bedre og vågner friskere. Det er en af grundene til, at overskuddet føles så tydeligt: hun er ikke kun hormonelt oppe, hun er også udhvilet. Det betyder også, at ugen egner sig til sene aftener, tidlige morgener og lidt større belastning, fordi der er noget at tage af. Men brug ikke den gode søvn til at afdrage overtræk fra sidste uge. Brug den til at lægge til.',
      action:
        'Foreslå en aften ude eller en tidlig morgentur i denne uge, som I ikke ville lægge i ugen før menstruation.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'Huden fortæller det samme',
      insight:
        'Østrogen gør huden tykkere, mere fugtig og mere elastisk og holder talgproduktionen i ro. Derfor er huden ofte klarest i dagene omkring ægløsningen og mest urolig i ugen før menstruationen, hvor østrogen falder og progesteron øger talgen. Det er et af de mest synlige spor af cyklussen, og det er værd at kende af én grund: kommentarer. "Du ser frisk ud" er en fin sætning i dag. "Du ser træt ud" er en dårlig sætning om tre uger. Huden er ikke noget, hun styrer, og den er ikke noget, du skal have en holdning til. Men du kan lære at se den som et af de tegn, der fortæller, hvor i cyklussen hun er.',
      action:
        'Læg mærke til huden i dag uden at kommentere den. Skriv i appens note på dagen, hvis du ser et mønster over de næste cyklusser.',
      phaseTags: ['follicular', 'ovulation'],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: 'Træningen kan skrues op',
      insight:
        'Studierne er mindre entydige, end fitnessblogs vil have det til, men tendensen er der: mange oplever bedre præstation, hurtigere restitution og mere lyst til hård træning i follikelfasen. Østrogen har en beskyttende effekt på muskler, og den lavere kropstemperatur og bedre søvn gør resten. Det betyder ikke, at hun skal træne efter en fasekalender. Det betyder, at hvis hun har lyst til at presse sig i denne uge, er det et godt tidspunkt, og hvis hun har mindre lyst i ugen før menstruation, er det ikke dovenskab. Den vigtigste regel er stadig hendes egen fornemmelse. Kalenderen er et supplement, ikke et program.',
      action:
        'Foreslå en fælles aktivitet med lidt puls i denne uge: en løbetur, en lang cykeltur, en svømmetur. Lad hende vælge intensiteten.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: 'Social energi: læg gæsterne her',
      insight:
        'Socialt overskud er noget af det, der svinger mest hen over cyklussen. I follikelfasen er der typisk lyst til mennesker: middage, familiebesøg, fester, det store fødselsdagsselskab. I ugen før menstruation kan den samme aftale føles som en byrde, selv om hun glædede sig, da den blev lavet. Det betyder ikke, at hun er ustabil. Det betyder, at aftaler laves med én hjerne og afvikles med en anden. Den nemmeste hjælp, du kan give, er at kende kalenderen: når I bliver inviteret, eller når I selv skal have gæster, så se på, hvor i cyklussen datoen lander, før I siger ja. Det er et simpelt tjek, som sparer mange aflysninger.',
      action:
        'Kig på næste sociale aftale i kalenderen. Lander den i PMS-ugen, så foreslå at flytte den en uge frem, mens det stadig er let.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'Rejser og de store dage',
      insight:
        'Rejser, flytninger, jobsamtaler, eksamener, det store familiearrangement: alt, der kræver overskud, energi og tålmodighed med andre mennesker, går i gennemsnit lettere i follikelfasen og omkring ægløsningen. Der er ingen kramper, søvnen er god, humøret er robust, og der er mod på det ukendte. Det kan I ikke altid styre; eksamener ligger, hvor de ligger. Men det, I selv planlægger, kan I lægge klogt. En ferie, der starter dag 7, er en anden ferie end en, der starter dag 24, med samme destination og samme budget. Det kræver kun, at I kigger på appen, når I booker. Og at I husker, at forudsigelsen er et skøn, som kan rykke sig nogle dage.',
      action:
        'Er der en rejse eller et stort arrangement i støbeskeen? Åbn appens forudsigelse og se, hvilken fase datoerne rammer.',
      phaseTags: ['follicular', 'ovulation'],
    },
    {
      id: dailyId(M, 15),
      month: M,
      day: 15,
      title: 'Svære samtaler: nu er tidspunktet',
      insight:
        'Måned 1 nævnte det kort: læg de svære samtaler uden for PMS-vinduet. Denne uge er den anden halvdel af det råd. Follikelfasen er der, hvor stressrobustheden er højest, ordene sidder løsest, og der er overskud til at høre hinandens perspektiv uden at gå i forsvar. Det gælder for jer begge, for konflikter er et samspil. Det betyder ikke, at samtalen bliver behagelig. Økonomi, fordeling af opgaver, familie og fremtid er svære emner uanset dag. Men de har bedre odds nu. Så vent ikke på, at det "føles rigtigt". Det føles sjældent rigtigt at tage noget svært op. Brug i stedet kalenderen som beslutningsgrundlag.',
      action:
        'Vælg den ene samtale, I har udskudt længst, og spørg: "Har du overskud til, at vi tager den om økonomi i aften eller i morgen?"',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'Store beslutninger og den ekstra uge',
      insight:
        'Beslutninger om bolig, børn, job eller økonomi er lettere at tage, når der er klarhed og overskud, og det er der ofte nu. Men der er en fælde: en beslutning taget i en uge med høj energi og stort mod skal også holde i en uge med lav energi. Det betyder ikke, at beslutningen er forkert, hvis den føles tung på dag 26. Det betyder, at I skal teste den mod begge tilstande, før I skriver under. Den bedste fremgangsmåde er at tale det store igennem i follikelfasen, lade det ligge en uges tid og bekræfte det, når I begge stadig er enige. Ikke fordi hendes dømmekraft svigter, men fordi ingen af jer skal tage en stor beslutning på én dags humør.',
      action:
        'Hvis I står over for noget stort, så aftal en dato om cirka en uge, hvor I bekræfter beslutningen, i stedet for at lukke den i dag.',
      phaseTags: ['follicular', 'ovulation'],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'Faren ved at fylde kalenderen',
      insight:
        'Der er en bagside ved den gode uge: den bliver nemt overbooket. Når alt føles muligt, siger man ja til middagen, træningen, projektet, weekendturen og familiebesøget, og pludselig ligger der fem ting i en uge, der også skulle have været til at hvile i. Overskud er ikke gratis; det bruges op. Og den regning, der kommer, lander ofte i lutealfasen, hvor hun har mindst at betale med. Din opgave er ikke at bremse hende; det er hendes uge og hendes energi. Men du kan være den, der holder øje med totalen, og som sørger for, at ugens plan også har huller i.',
      action:
        'Se på ugens kalender sammen, og fjern eller flyt én ting, så der er mindst én helt fri aften tilbage.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'Cycle syncing: myte og evidens',
      insight:
        '"Cycle syncing", tanken om at planlægge kost, træning og arbejde nøjagtigt efter cyklusfasen, er populær på sociale medier. Noget af det holder: energi, søvn, appetit og humør følger hormonerne i gennemsnit, og timing af store ting er en reel hjælp. Meget af det holder ikke: der findes ingen god evidens for, at bestemte fødevarer "balancerer hormonerne", at bestemte træningsformer er forbudt i bestemte faser, eller at alle kvinder følger den samme skabelon. Variationen mellem kvinder er større end forskellen mellem faser. Så brug kalenderen som et gennemsnit at planlægge efter, ikke som en facitliste, hun skal leve op til. Hendes egen erfaring slår enhver tabel.',
      action:
        'Spørg hende, om der er noget i appens faseopslag, der ikke passer på hende. Notér det, og brug hendes svar frem for standarden.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 19),
      month: M,
      day: 19,
      title: 'De gode uger er hendes',
      insight:
        'Der er en faldgrube i at lære om cyklussen: at man begynder at forklare alt med hormoner. Når hun er skarp, sjov og fuld af energi på dag 10, er det ikke "østrogenet", der er skarpt. Det er hende, med gode vilkår. Ligesom irritationen på dag 26 er hendes ægte irritation med dårlige vilkår. Hvis du tilskriver de gode dage hormonerne, tager du æren fra hende, og hvis du tilskriver de svære dage hormonerne, tager du alvoren fra hende. Cyklussen forklarer vilkårene, ikke personen. Sig derfor aldrig "du er så glad, du må være i follikelfasen". Sig "du er god i dag". Det er både sandt og pænere.',
      action:
        'Giv hende i dag konkret anerkendelse for noget, hun har gjort godt, uden at nævne cyklus, fase eller hormoner med ét ord.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 20),
      month: M,
      day: 20,
      title: 'Forbered de svære uger nu',
      insight:
        'Det bedste tidspunkt at forberede lutealfasen er, mens der er overskud til det. Det lyder banalt, men det er sådan, forståelse bliver til hjælp. Konkret: fyld fryseren med et par nemme måltider. Tjek, at der er smertestillende, bind eller tamponer og en varmepude i huset. Kig på kalenderen for ugen før næste menstruation, og ryd den lidt. Aftal, hvem der tager hvad af de faste opgaver i de dage. Alt det er let nu og tungt om to uger. Og det signalerer noget vigtigt til hende: at du ikke kun reagerer, når det brænder på, men tænker frem. Det er den form for omsorg, der er sværest at se og nemmest at mærke.',
      action:
        'Lav én af forberedelserne i dag: læg to portioner mad i fryseren, eller tjek beholdningen af det praktiske og fyld op.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: 'Brug overskuddet på jer to',
      insight:
        'Det er nemt at bruge den gode uge på alt det praktiske, der hobede sig op: rengøring, papirarbejde, projekter, aftaler. Men husk også at bruge noget af den på jer. Follikelfasen og dagene omkring ægløsningen er ofte der, hvor lyst, nærhed og lysten til at være sammen er højest, og det er ikke tilfældigt, at parforholdet føles lettest her. Den nærhed, I bygger nu, er den buffer, I trækker på i PMS-ugen. Hvis hele overskuddet går til opgaver, kommer I til lutealfasen med tom tank på begge konti. Så planlæg noget, der kun er for jer: en aften ude, en gåtur uden mobiler, en langsom morgen i sengen.',
      action:
        'Book én ting i denne uge, der udelukkende er for jer to, og læg den i kalenderen, så den ikke bliver spist af praktiske gøremål.',
      phaseTags: ['follicular', 'ovulation'],
    },
    {
      id: dailyId(M, 22),
      month: M,
      day: 22,
      title: 'Det er follikelfasen, der varierer',
      insight:
        'Når en cyklus er længere eller kortere end normalt, er det næsten altid follikelfasen, der har flyttet sig. Lutealfasen er stabil på 12-14 dage, fordi det gule legeme har en fast levetid. Follikelfasen derimod styres af hjernen, og hjernen reagerer på stress, søvn, sygdom, rejser og vægtændringer ved at udskyde ægløsningen. En presset måned kan give en 33-dages cyklus i stedet for 28, og de ekstra fem dage lægges til før ægløsningen. Det er godt at vide af to grunde: appens forudsigelse af ægløsning er et skøn og kan rykke sig, og en sen menstruation betyder oftere "hård måned" end noget andet. Kroppen venter, til der er ro.',
      action:
        'Hvis den nuværende cyklus ser ud til at blive længere end normalt, så spørg roligt, om der har været mere pres på end sædvanligt.',
      phaseTags: [],
      sources: [NHS_PERIODS, SUNDHED_DK],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'Hvis energien ikke vender tilbage',
      insight:
        'De fleste mærker et tydeligt løft, når menstruationen er slut. Hvis det løft udebliver måned efter måned, hvis hun er lige så træt dag 10 som dag 2, er det værd at tage alvorligt. Det kan være helt almindelige ting: for lidt søvn, for meget arbejde, en periode med stress. Men vedvarende træthed kan også skyldes jernmangel efter kraftige blødninger, et stofskifte, der ikke er i balance, eller lavt humør, der ikke følger cyklussen. Ingen af delene kan du stille diagnose på, og ingen af delene skal hun "tage sig sammen" over. Men du kan være den, der ser mønstret i appen og siger: "Det her fortjener en læge." En blodprøve er hurtig og afklarer meget.',
      action:
        'Kig i kalenderen på de sidste to cyklusser. Kom energien tilbage efter menstruationen? Hvis ikke, så nævn det for hende i dag.',
      phaseTags: ['menstrual', 'follicular'],
      sources: [NHS_HEAVY],
    },
    {
      id: dailyId(M, 24),
      month: M,
      day: 24,
      title: 'Hun er ikke mere "sig selv" nu',
      insight:
        'Det er fristende at tænke på follikelfasen som "den rigtige hende" og resten som støj. Det er en fejl, og den er ikke harmløs. Hvis den energiske, sociale, tålmodige udgave er den ægte, bliver den trætte, tænksomme, direkte udgave i lutealfasen til en fejl, der skal rettes. Men lutealfasens tanker er ofte lige så sande; de kommer bare uden filter. Og follikelfasens optimisme kan også overse ting. Hun er hele cyklussen. Det, du lærer om faserne, er vilkår, ikke sandheder om, hvem hun er. Den mest respektfulde holdning er, at hun er den samme person hele måneden med forskellige mængder overskud, og at begge udgaver fortjener at blive taget alvorligt.',
      action:
        'Tænk på noget, hun sagde i sidste lutealfase, som du afskrev som "humør". Var der noget i det, så tag det op i dag.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 25),
      month: M,
      day: 25,
      title: 'Ægløsning: toppen og vendepunktet',
      insight:
        'Follikelfasen slutter med ægløsningen. Østrogen topper, LH stiger brat, og den dominerende follikel brister og frigiver sit æg. For mange er dagene lige her cyklussens absolutte højdepunkt: mest energi, mest lyst, mest selvtillid. Og så vender det. Efter ægløsningen tager progesteron over, og allerede et par dage senere bliver energien mere indadvendt og roligere. Det er ikke et fald, men et gearskifte. Det er værd at kende, fordi vinduet for at bruge overskuddet har en slutdato. Det, I har planlagt, skal helst ligge før eller omkring ægløsningen, ikke efter. Næste måned handler kun om ægløsningen, så i dag er det nok at vide, at toppen er der, og at den ikke varer ved.',
      action:
        'Tjek appens skønnede ægløsningsdato for denne cyklus, og se, om jeres planer for de næste dage ligger på den rigtige side af den.',
      phaseTags: ['ovulation'],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 26),
      month: M,
      day: 26,
      title: 'Lutealfasen: hent det, du lagde til side',
      insight:
        'Nu betaler forberedelsen sig. Hvis du i follikelfasen fyldte fryseren, ryddede kalenderen og aftalte, hvem der tager hvad, er lutealfasen der, hvor det bruges. Ikke som en stor gestus, men som noget, der bare er på plads. Maden er der. Aftenen er fri. Opgaven er allerede taget. Det er sådan, den gode uge bliver til hjælp i den svære: ikke ved at du gør mere, når hun har det værst, men ved at det meste allerede er gjort. Hvis du ikke nåede at forberede noget i denne omgang, er det helt fint. Læg mærke til, hvad der mangler nu, og skriv det ned til næste follikelfase. Det er et system, der bliver bedre for hver runde.',
      action:
        'Brug én af de ting, I forberedte, i dag, eller skriv den ene ting ned, du ville ønske, I havde forberedt, til næste gang.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 27),
      month: M,
      day: 27,
      title: 'Din energi følger ikke hendes',
      insight:
        'En ting, mange partnere overser: dit overskud følger ikke hendes cyklus. Det betyder, at du kan være den stabile faktor, som har energi i de uger, hvor hun har mindre. Men det betyder også, at du skal passe på ikke at lade hendes gode uge sætte tempoet for jer begge, så du selv er brugt op, når lutealfasen kommer. Den bedste hjælp kræver, at du selv har noget at give af. Sørg for din egen søvn, din egen træning og dine egne pauser, især i den uge, hvor alt går stærkt. Det er ikke egoisme, det er vedligeholdelse. En partner, der er kørt ned, tager tonen personligt og glemmer at reagere på behovet.',
      action:
        'Læg én ting i kalenderen i denne uge, der kun er til dig: en løbetur, en aften med venner, en tidlig sengetid. Hold fast i den.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 28),
      month: M,
      day: 28,
      title: 'Log også de gode dage',
      insight:
        'De fleste logger, når noget er galt: smerter, dårligt humør, søvnproblemer. Det er naturligt, men det giver en kalender, der kun viser problemer, og det er både urimeligt og upraktisk. Hvis I også logger de gode dage, høj energi, godt humør, god søvn, en dag hvor alt gled, får I to ting. Et mere ærligt billede af, at cyklussen har mindst lige så mange gode dage som svære. Og en langt bedre fornemmelse af, hvornår skiftet kommer, fordi I kan se begge ender af kurven. Efter tre-fire cyklusser kan I sige med rimelig sikkerhed: "Omkring dag 6 vender det." Det er værdifuld viden, og den kommer kun fra det, der bliver logget.',
      action:
        'Log dagens energi og humør i appen, også hvis de er gode. Spørg hende, om hun vil gøre det samme i denne uge.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 29),
      month: M,
      day: 29,
      title: 'PMS-ugen med follikelfasen i baghovedet',
      insight:
        'Når du står i lutealfasens sidste uge, er det nemt at glemme, at der er en follikelfase på den anden side. Men det er præcis den viden, der gør ugen lettere at bære for jer begge. Ikke som et "bare vent, det går over"; det er afvisende. Men som en indre ro hos dig: dette er en fase, den har en slutdato, og om cirka en uge vender energien. Det gør det lettere at holde tempoet nede, lade de store samtaler vente og reagere på behovet frem for tonen. Og det gør det muligt at love noget konkret: "Lad os tage det i næste uge, når vi begge har overskud." Det er et løfte, du kan holde, fordi kalenderen holder det for dig.',
      action:
        'Hvis der dukker noget svært op i disse dage, så sig: "Det er vigtigt. Kan vi tage det i næste uge, hvor der er mere ro?" og sæt en dato.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 30),
      month: M,
      day: 30,
      title: 'Måned 3: det har du lært',
      insight:
        'Du ved nu, at follikelfasen begynder med FSH fra hjernen, at folliklerne svarer med østrogen, og at østrogen løfter både slimhinde, hjerne, hud, søvn og muskler. Du ved, at serotonin og dopamin stiger, at ordene sidder løsere, at der er mere mod på det nye, at appetitten falder, og at træningen kan skrues op. Du ved, at det er den bedste uge til gæster, rejser, svære samtaler og store beslutninger, men at den ikke må overbookes, og at overskuddet kan bruges til at forberede den svære uge. Og vigtigst: du ved, at de gode uger er hendes, ikke hormonernes, og at hun er hele cyklussen, ikke kun toppen af den.',
      action:
        'Fortæl hende de tre ting fra måneden, der har ændret mest på, hvordan du ser hendes cyklus. Tag så månedens quiz.',
      phaseTags: [],
    },
  ],
  weekly: [
    {
      id: weeklyId(M, 1),
      month: M,
      week: 1,
      title: 'Fra FSH til østrogen: sådan bygges en cyklus op',
      body: [
        'Måned 1 gav dig modellen: fire faser, to hormoner, én rytme. Denne måned går vi i dybden med den fase, der giver mest overskud og mindst opmærksomhed: follikelfasen. Den er interessant af to grunde. Den er biologisk imponerende, og den er det tidspunkt i cyklussen, hvor I sammen kan få mest ud af at planlægge rigtigt.',
        'Først timingen. Follikelfasen løber teknisk set fra dag 1, første blødningsdag, og helt frem til ægløsningen. Den overlapper altså menstruationen. Det, de fleste oplever som "follikelfasen", er den sidste del: dagene efter blødningen, cirka dag 6 til 13 i en 28-dages cyklus, hvor østrogen for alvor stiger. Det er også den del af cyklussen, der varierer mest i længde. Lutealfasen efter ægløsning er ret stabil på 12-14 dage, mens follikelfasen kan være alt fra en uge til flere uger, afhængigt af hvad der ellers sker i hendes liv.',
        'Det hele begynder i hjernen. Når østrogen og progesteron rammer bunden under menstruationen, registrerer hypofysen det og sender FSH, follikelstimulerende hormon, ud i blodet. FSH får en gruppe på 10-20 små follikler i æggestokkene til at vokse. Hver follikel er en væskefyldt blære med et umodent æg indeni. Folliklerne svarer igen ved at producere østrogen, og når østrogen stiger, giver det besked tilbage til hjernen om at skrue ned for FSH. Det er en løkke med feedback, ikke en kontakt, der tændes.',
        'Omkring dag 5-7 sker der en udvælgelse. Den follikel, der er mest følsom over for FSH, klarer sig, når FSH falder; de andre visner. Den dominerende follikel vokser til omkring to centimeter og producerer størstedelen af cyklussens østrogen. Derfor stiger østrogen stejlt i den sidste uge før ægløsningen. Samtidig får østrogen livmoderslimhinden til at vokse igen efter menstruationen, klar til et eventuelt befrugtet æg. Når østrogen topper, udløser det LH-stigningen, folliklen brister, og ægget frigives. Det er ægløsningen, og den slutter follikelfasen.',
        'Men østrogen arbejder ikke kun i underlivet. Der er østrogenfølsomme celler i hjernen, huden, musklerne, knoglerne, blodkarrene og stofskiftet. Derfor mærkes stigningen som et generelt løft: mere energi, mere stabilt humør, klarere tanker, bedre søvn, lavere appetit, glattere hud og mere lyst til at træne, tale og se mennesker. Det er ikke et humørhormon. Det er et byggehormon, der tilfældigvis også bygger overskud. Næste uge ser vi nærmere på, hvad det gør ved hjernen.',
        'Fordi follikelfasen styres fra hjernen, er den også følsom over for alt det, hjernen registrerer: stress, søvnmangel, sygdom, rejser, hård træning og vægtændringer. Hjernen svarer ved at vente med at sætte ægløsningen i gang. Det er derfor, en presset måned ofte giver en længere cyklus, og derfor appen regner ægløsning baglæns fra den forventede menstruation i stedet for forlæns fra dag 1. Forudsigelsen er et skøn. Kroppen venter, til der er ro.',
        'Det, du kan gøre i denne uge, er at lægge mærke til skiftet. Et sted mellem dag 4 og 7 kommer der typisk en dag, hvor hun står op og bare har det bedre. Sig det højt, når du ser det, uden at nævne hormoner: "Det virker som om du har fået energien tilbage." Og foreslå én ting, I skal lave sammen i den uge, der kommer. Det er den nemmeste form for hjælp, der findes: at være opmærksom på det gode, ikke kun det svære.',
      ],
      conversationQuestion:
        'Hvornår efter menstruationen kan du mærke, at energien vender? Og hvad er det første, du får lyst til at gøre, når den gør?',
      sources: [ACOG_CYCLE, SUNDHED_DK, NHS_PERIODS],
    },
    {
      id: weeklyId(M, 2),
      month: M,
      week: 2,
      title: 'Østrogen og hjernen: hvad overskuddet består af',
      body: [
        '"Hun har mere overskud" er en upræcis beskrivelse. Overskud består af flere ting, som hver især kan mærkes, og som hver især har en forklaring. Kender du delene, bliver du bedre til at se dem og til at bruge dem rigtigt.',
        'Start med humøret. Østrogen påvirker to signalstoffer i hjernen. Serotonin holder humøret stabilt og dæmper uro; østrogen øger både produktionen og hjernens følsomhed for det. Dopamin driver motivation, belønning og lyst til at gå i gang; også det stiger med østrogen. Resultatet er en uge, hvor tingene føles mulige, hvor irritationstærsklen er højere, og hvor der er lyst til at starte på noget. Det er ikke kunstigt godt humør, det er hjernens normale kemi med medvind. Og det er præcis det, der mangler i ugen før menstruationen, når østrogen falder og tager serotonin med sig. Samme hjerne, andre forudsætninger.',
        'Så ordene. Flere studier peger på, at verbal formåen, evnen til at finde ord, formulere sig og huske ord, er lidt bedre, når østrogen er højt. Effekten er lille i gennemsnit og varierer meget fra person til person, så det er ikke en lov. Men mange genkender det: samtaler glider lettere midt i cyklussen, og ordene sidder fastere i dagene før menstruation. Det betyder, at de samtaler, hvor det er vigtigt, at I begge formulerer jer præcist og bliver hørt rigtigt, har bedre vilkår her.',
        'Så modet. Østrogen og dopamin gør tilsammen hjernen mere åben for det nye og mere villig til at tage en chance. Et forslag om forandring, fra nye rutiner derhjemme til et jobskifte, kan lyde som en mulighed på dag 10 og som en trussel på dag 26. Forskellen er ikke forslaget. Men pas på med at forveksle mod med dømmekraft. Store beslutninger skal stadig sove en uge, så de også holder, når energien er lavere.',
        'Så kroppen. I follikelfasen er kropstemperaturen lavere end i lutealfasen, og østrogen støtter den dybe søvn, så de fleste sover bedre og vågner friskere. Appetitten falder en smule, og trangen til sødt og salt er stort set væk. Mange oplever bedre præstation og hurtigere restitution i træning, selv om studierne er mindre entydige, end fitnessblogs vil have det til. Huden er ofte klarest omkring ægløsningen. Alt det er små effekter hver for sig, men de lægger sig oven i hinanden og bliver til det, der føles som overskud.',
        'Og til sidst det sociale. Lysten til mennesker er noget af det, der svinger mest hen over cyklussen. I follikelfasen er der typisk lyst til middage, familie og fester. I ugen før menstruation kan den samme aftale føles som en byrde, selv om hun glædede sig, da den blev lavet. Det er ikke ustabilitet. Det er, at aftaler laves med én hjerne og afvikles med en anden.',
        'Nu til det vigtige forbehold. Alt ovenstående er gennemsnit. Variationen mellem kvinder er større end forskellen mellem faser, og nogle mærker næsten ingen af delene, mens andre mærker dem alle. Hendes egen erfaring slår enhver tabel. Og selv når mønstret passer, er det hende, der er skarp, sjov og energisk på dag 10, ikke hendes østrogen. Hormonerne forklarer vilkårene. Personen er den samme hele måneden.',
        'Det, du kan gøre i denne uge: læg en samtale, du har udskudt, her. Fremlæg det forslag, du har gået med, som en idé og ikke en beslutning. Foreslå en aktivitet med lidt puls. Mål ikke hendes appetit ud fra denne uge, og kommentér ikke hendes hud. Og giv hende anerkendelse for det, hun gør godt, uden at nævne cyklus med ét ord.',
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
        'Timing er gratis hjælp. Det lærte du i måned 1. Denne uge handler om, hvordan I gør det i praksis: hvad der skal ligge i follikelfasen, hvordan I undgår at fylde den for meget, og hvordan den gode uge bliver til hjælp i den svære.',
        'Start med listen over det, der har bedst odds her: gæster og fester, rejser og flytninger, svære samtaler, store beslutninger, hårde træningspas, nye projekter og alt, der kræver tålmodighed med andre mennesker. Ikke fordi det er umuligt på andre tidspunkter, men fordi søvnen er god, kramperne er væk, humøret er robust, og der er mod på det ukendte. Den enkleste vane, I kan indføre, er at kigge på appen, før I siger ja til noget stort. Hvor lander datoen? En ferie, der starter dag 7, er en anden ferie end en, der starter dag 24. Husk blot, at forudsigelsen er et skøn, som kan rykke sig nogle dage.',
        'De svære samtaler fortjener et afsnit for sig. Økonomi, fordeling af opgaver, familie, fremtid: emnerne er svære uanset dag, men de har bedre vilkår, når stressrobustheden er høj og ordene sidder løst. Det gælder jer begge, for konflikter er et samspil. Vent ikke på, at det føles rigtigt; det gør det sjældent. Brug kalenderen som beslutningsgrundlag, og spørg om overskud i stedet for at kaste emnet på bordet: "Har du overskud til, at vi tager den om økonomi i aften eller i morgen?" Det giver hende et valg, og det signalerer, at du har tænkt over timingen.',
        'Store beslutninger har en særlig fælde. En beslutning, der tages i en uge med høj energi og stort mod, skal også holde i en uge med lav energi. Det betyder ikke, at den er forkert, hvis den føles tung på dag 26. Men det betyder, at I bør teste den mod begge tilstande. Tal det store igennem i follikelfasen, lad det ligge en uge, og bekræft det, når I stadig er enige. Ingen af jer skal tage en stor beslutning på én dags humør, og det gælder også dig.',
        'Nu til faren. Den gode uge bliver nemt overbooket. Når alt føles muligt, siger man ja til middagen, træningen, projektet, weekendturen og familiebesøget, og pludselig ligger der fem ting i en uge, der også skulle have været til at hvile i. Overskud er ikke gratis; det bruges op. Og regningen lander ofte i lutealfasen, hvor hun har mindst at betale med. Din opgave er ikke at bremse hende, det er hendes uge. Men du kan være den, der holder øje med totalen, og som sørger for, at der er mindst én helt fri aften tilbage.',
        'Den vigtigste brug af overskuddet er måske den mindst synlige: at forberede den svære uge. Fyld fryseren med et par nemme måltider. Tjek, at der er smertestillende, bind eller tamponer og en varmepude i huset. Kig på kalenderen for ugen før næste menstruation, og ryd den lidt. Aftal, hvem der tager hvad af de faste opgaver i de dage. Alt det er let nu og tungt om to uger. Og det fortæller hende noget, ord ikke kan: at du tænker frem, ikke kun reagerer.',
        'To ting til sidst. Brug også noget af overskuddet på jer to. Follikelfasen og dagene omkring ægløsningen er ofte der, hvor lyst og nærhed er højest, og den nærhed er den buffer, I trækker på i PMS-ugen. Går hele overskuddet til opgaver, kommer I til lutealfasen med tom tank på begge konti. Og pas på dit eget tempo. Dit overskud følger ikke hendes cyklus, og det er en styrke, men kun hvis du ikke lader hendes gode uge køre dig ned, så du selv er brugt op, når hun har mest brug for dig.',
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
        '"Cycle syncing" er tanken om at planlægge kost, træning, arbejde og socialt liv nøjagtigt efter cyklusfasen. Det er populært på sociale medier, og det er værd at skille ad, for noget af det er nyttigt, og noget af det er støj. Som partner er det vigtigt, at du ikke ender med at forvente en skabelon, hun ikke passer ind i.',
        'Det, der holder: energi, søvn, appetit, humør og lyst følger hormonerne i gennemsnit. Follikelfasen giver typisk overskud, lutealfasens sidste uge giver typisk mindre. Timing af svære samtaler, store beslutninger, gæster og rejser er en reel hjælp, som denne måned har handlet om. Det er evidensbaseret på det niveau, hvor NHS og andre sundhedsmyndigheder beskriver cyklussen.',
        'Det, der ikke holder: der findes ingen god evidens for, at bestemte fødevarer eller frø "balancerer hormonerne", at bestemte træningsformer er forbudt i bestemte faser, eller at alle kvinder følger den samme fire-ugers skabelon. Effekterne på præstation og tankearbejde er små i gennemsnit, og variationen mellem kvinder er større end forskellen mellem faser. Nogle mærker næsten intet, andre mærker alt. En kalender, der siger "nu bør du have energi", er ikke en hjælp, hvis hun ikke har det. Så er den et krav.',
        'Ét forbehold mere: hvis hun bruger hormonel prævention som p-piller, p-ring eller hormonspiral, gælder meget af det, du har læst denne måned, ikke eller kun delvist. De fleste af de metoder holder ægløsningen tilbage, og så er der ingen follikel, der modner, og ingen naturlig østrogenstigning. Blødningen på p-piller er en pauseblødning, ikke en menstruation i biologisk forstand. Hun kan stadig mærke udsving, men de følger ikke nødvendigvis fasemodellen. Spørg, hvad hun bruger, og lad hendes erfaring styre, ikke tabellen.',
        'Det bringer os til det vigtigste: hendes egen erfaring slår enhver tabel. Appen viser et gennemsnit at planlægge efter. Hun ved, hvad der faktisk sker. Spørg hende, hvad der passer, og hvad der ikke gør. Log også de gode dage, ikke kun de svære, så kalenderen viser hele billedet og ikke kun problemerne. Efter tre-fire cyklusser har I et mønster, der er hendes, og det er værd mere end alle bloggenes skabeloner tilsammen.',
        'Der er også en myte, som er sværere at få øje på: at follikelfasen er "den rigtige hende" og resten støj. Hvis den energiske, sociale, tålmodige udgave er den ægte, bliver den trætte, tænksomme, direkte udgave i lutealfasen til en fejl, der skal rettes. Men lutealfasens tanker er ofte lige så sande; de kommer bare uden filter. Og follikelfasens optimisme kan overse ting. Hun er hele cyklussen. Det, du lærer om faserne, er vilkår, ikke sandheder om, hvem hun er.',
        'Og til sidst: de gode uger er hendes. Når hun er skarp, sjov og fuld af energi på dag 10, er det ikke østrogenet, der er skarpt. Det er hende, med gode vilkår. Tilskriver du de gode dage hormonerne, tager du æren fra hende; tilskriver du de svære dage hormonerne, tager du alvoren fra hende. Sig aldrig "du må være i follikelfasen". Sig "du er god i dag". Det er både sandt og pænere, og det er den holdning, der gør, at hun kan holde ud, at du følger med i hendes cyklus.',
      ],
      conversationQuestion:
        'Er der noget ved den måde, appen eller jeg beskriver din cyklus på, der ikke passer på dig? Hvad ville du ændre?',
      sources: [NHS_PERIODS, NHS_CONTRACEPTION],
    },
  ],
  wrap: {
    id: wrapId(M),
    month: M,
    title: 'Måned 3: Follikelfasen',
    summary: [
      'Denne måned handlede om cyklussens bedste uge og om at bruge den klogt. Follikelfasen begynder med FSH fra hjernen, folliklerne svarer med østrogen, én follikel vinder, og østrogen bygger både slimhinde og overskud op. Det mærkes som stabilt humør, lettere ord, mere mod på det nye, bedre søvn, lavere appetit, større træningskapacitet og lyst til mennesker. Alt sammen gennemsnit, med større variation mellem kvinder end mellem faser.',
      'Du har lært at lægge gæster, rejser, svære samtaler og store beslutninger her, at bekræfte de store beslutninger en uge senere, at holde øje med totalen, så ugen ikke bliver overbooket, at forberede den svære uge, mens der er overskud, og at bruge noget af overskuddet på jer to. Og du har lært, at hun er hele cyklussen, at de gode uger er hendes og ikke hormonernes, og at hendes erfaring slår enhver tabel, især hvis hun bruger hormonel prævention.',
      'Næste måned handler om ægløsningen: tegnene, nærheden og det frugtbare vindue, med viden uden pres.',
    ],
    keepDoing: [
      'Sig det højt, når energien vender efter menstruationen, uden at nævne hormoner.',
      'Tjek appen, før I siger ja til noget stort, og læg det i follikelfasen.',
      'Hold mindst én fri aften i den gode uge, så den ikke bliver overbooket.',
      'Fyld fryseren og ryd kalenderen for PMS-ugen, mens der er overskud.',
      'Bekræft store beslutninger en uge efter, at I blev enige.',
      'Log også de gode dage, så mønstret bliver hendes og ikke appens.',
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
          'Hjernen sender FSH, folliklerne svarer med østrogen. Fordi starten styres fra hjernen, kan stress og søvnmangel forsinke hele fasen.',
      },
      {
        question:
          'Det er dag 7, menstruationen er lige slut, og hun virker mærkbart lettere. Hvad er mest hjælpsomt?',
        options: [
          'Sige "du må være i follikelfasen nu"',
          'Ikke sige noget, det er jo bare normalt',
          'Sige "det virker som om du har fået energien tilbage" og foreslå noget, I skal lave sammen',
          'Spørge, om hun har husket at logge det',
        ],
        correctIndex: 2,
        explanation:
          'Skiftet efter menstruationen er en af cyklussens mest forudsigelige overgange. At se det og bruge det, uden at forklare det med hormoner, er den hjælp, der betyder mest.',
      },
      {
        question:
          'I bliver inviteret til en stor fest, og datoen lander tre dage før forventet menstruation. Hvad gør du?',
        options: [
          'Tjekker appen sammen med hende og spørger, om I skal bede om en anden dato eller planlægge at tage tidligt hjem',
          'Siger ja, hun elsker fester',
          'Siger nej uden at spørge hende',
          'Siger ja og håber det bedste',
        ],
        correctIndex: 0,
        explanation:
          'Aftaler laves med én hjerne og afvikles med en anden. Et hurtigt tjek af kalenderen før I siger ja sparer mange aflysninger, og beslutningen er stadig hendes.',
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
          'Overskud bruges op, og regningen lander i lutealfasen. Din rolle er ikke at bremse, men at holde øje med totalen og sørge for huller i planen.',
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
          'En beslutning taget med høj energi og stort mod skal også holde med lav energi. Tal det igennem nu, og bekræft det en uge senere, når I stadig er enige.',
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
          'Timing af energi og overskud har evidens; frø, der balancerer hormoner, og forbudte træningsformer har ikke. Hendes egen erfaring slår enhver tabel.',
      },
    ],
  },
};
