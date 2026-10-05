import type { Phase } from '@/domain/types';

import type { PhaseInfo } from '../types';

export const phases: Record<Phase, PhaseInfo> = {
  menstrual: {
    phase: 'menstrual',
    name: 'Menstruation',
    timing: 'Dag 1-5 (typisk 3-7 dage)',
    whatHappens: [
      'Østrogen og progesteron er helt i bund. Livmoderslimhinden afstødes, og det er det, der bløder. Ja, det er blod. Du har skåret dig på en brødkniv og overlevet, så det her klarer du også.',
      'Livmoderen trækker sig sammen for at skubbe slimhinden ud, og det er de sammentrækninger, der giver kramper. Det er en muskel, der knokler som en langtidsstegt bov, der ikke vil slippe benet. Ikke "lidt ondt i maven".',
      'Kroppen mister jern med blodet, og sammen med de lave hormoner giver det ofte træthed de første dage. Det er ikke dovenskab. Det er jern, der mangler, og en suppe uden salt smager heller ikke af noget.',
    ],
    howSheMayFeel: [
      'Træt og tung, især dag 1-2. Ikke "lidt træt". Træt som dig efter en julefrokost, bare uden at have haft det sjovt først.',
      'Kramper i underlivet, ondt i lænden, hovedpine. Ofte på samme tid, som når alle gryder koger over på én gang.',
      'Behov for ro, varme og mindre socialt. Hør her: du tæller med som socialt.',
      'Følelsesmæssigt ofte roligere end i PMS-dagene, men med kort lunte, hvis smerterne er slemme. Smerte gør alle korte i lunten. Du lagde dig på sofaen med en splint i fingeren, så du ved det godt.',
    ],
    whatYouCanDo: [
      'Tag det praktiske uden at spørge: mad, opvask, børn, indkøb. "Skal jeg lave mad?" er ikke hjælp, det er en opgave mere til hende: at svare dig. Tænd for blusset, min ven.',
      'Hav varme klar: varmepude, te, et tæppe. Varme får musklen til at slappe af som et stykke smør på noget, der har haft det hårdt, og det kræver nul samtale. Din bedste ven i dag er sgu en stikkontakt.',
      'Spørg "hvad har du brug for?" i stedet for at gætte. Hvis svaret er "ingenting", så er svaret ingenting. Ikke "er du sikker?". Ingenting. Det er ikke en buffet, man går forbi én gang til.',
      'Sænk tempoet i planerne de første to dage. Aflys gerne noget uden at gøre et nummer ud af det. Du får ikke en medalje for at flytte en brunch, og heller ikke for at fortælle, at du har flyttet den.',
      'Hav smertestillende og bind eller tamponer i huset, så hun ikke skal tænke på det. Du kan godt købe tamponer. Kassemedarbejderen tænker ikke på dig. Ingen tænker på dig. Du har stået i den kø med seks dåser flåede tomater og en pizzasten uden at blinke.',
    ],
    selfCare: [
      'Varme på maven eller lænden: varmepude, varmt bad eller en varm flaske dæmper kramperne.',
      'Tag smertestillende tidligt, hvis du plejer at få kramper. Ibuprofen virker bedst, før smerten topper.',
      'Spis jernrigt de første dage: kød, linser, spinat, og gerne noget med C-vitamin til.',
      'Let bevægelse, fx en gåtur eller blid udstrækning, hjælper ofte mere på kramper end at ligge stille.',
      'Sæt tempoet ned uden dårlig samvittighed. Sig nej til noget de første to dage.',
    ],
    avoid: [
      'At tage lav energi eller aflysninger personligt. Hun aflyser ikke dig. Hun aflyser tirsdag. Tirsdag kommer igen, det gør den altid.',
      'At spørge "er det fordi du har menstruation?" som svar på en holdning. Holdningen var der også i sidste uge. Det eneste nye er, at du lige har tabt diskussionen, og det havde du også gjort på dag 12.',
      'At planlægge store ting eller svære samtaler dag 1-2. Lad det hvile til torsdag ligesom en dej. Det bliver bedre af det, og det ved du godt.',
    ],
  },
  follicular: {
    phase: 'follicular',
    name: 'Follikelfasen',
    timing: 'Dag 6-13 (fra blødningen stopper til ægløsning)',
    whatHappens: [
      'Hypofysen sender FSH, og en gruppe follikler i æggestokkene begynder at modne et æg. Du behøver ikke kunne stave til hypofysen. Du skal bare vide, at der er nogen i køkkenet, og de er gået i gang.',
      'Folliklerne producerer østrogen, som stiger dag for dag og bygger en ny livmoderslimhinde op. Kroppen bygger altså op igen, som en surdej der hæver af sig selv, helt uden at du har sat det i kalenderen.',
      'Stigende østrogen øger serotonin og dopamin, og derfor stiger humør, energi og motivation typisk. Det er ikke dig, der er blevet sjovere. Det er østrogen, og østrogen har aldrig grinet ad noget, du har sagt.',
    ],
    howSheMayFeel: [
      'Mere energi, lyst til at lave ting og se mennesker. Ja, også dem, du gemte dig for sidste gang.',
      'Lettere til bens, bedre søvn, klarere tanker. Hun kan huske, hvad du lovede i sidste uge.',
      'Mere åben over for nyt, planer og udfordringer. Det er nu, du skal nævne den vandretur, du har talt om siden marts. Nu, ikke om fjorten dage, hvor du har glemt den igen.',
      'Huden bliver ofte pænere, og oppustetheden forsvinder. Det er ikke noget, du skal kommentere. Du skal bare vide det.',
    ],
    whatYouCanDo: [
      'Planlæg det store her: ture, fester, gæster, hårde træningspas, vigtige samtaler. Det er den uge, hvor "skal vi ikke have mine forældre på besøg?" faktisk kan ende godt. Jordbær i juni, min ven. Pluk dem.',
      'Sig ja til hendes ideer. Det er ugen, hvor initiativ falder let, så vær ikke ham, der står og rører i gryden og siger "lad os lige se". Du har set. Sig ja.',
      'Læg mærke til skiftet fra menstruationen, og sig det højt: "Du virker til at have fået energien tilbage." Det er én sætning. Du kan godt sige én sætning. Du har holdt tyve minutters tale om en grill.',
      'Brug overskuddet til at få aftalt de praktiske ting, der driller senere i cyklussen. Ferien, budgettet, hvem der ringer til din mor. Nu, mens det er nemt, ligesom man hakker løget, før panden er varm.',
    ],
    selfCare: [
      'Læg det, der kræver mod eller energi, her: den svære samtale, jobsamtalen, det hårde træningspas.',
      'Brug energien på at få lavet aftaler og planer, så den sidste uge i cyklussen bliver lettere.',
      'Sig ja til det sociale. Det giver typisk mere, end det tager, i denne fase.',
      'Prøv noget nyt. Hjernen er mere åben for læring og udfordringer, når østrogen stiger.',
      'Læg mærke til, hvordan du har det, og skriv det ned. Det gør PMS-ugen nemmere at sætte i perspektiv.',
    ],
    avoid: [
      'At antage, at den høje energi holder hele måneden. Det gør den ikke. Det gør din heller ikke. Du har bare ikke en app, der siger det, du har en sofa.',
      'At skubbe alle svære ting til "når hun har det godt". Fordel dem. Ellers får hun én uge om måneden, der er fyldt med dine udskudte samtaler, og det er for søren ikke en menu, nogen har bestilt.',
    ],
  },
  ovulation: {
    phase: 'ovulation',
    name: 'Ægløsning',
    timing: 'Ca. dag 13-16 (selve ægløsningen varer et døgn)',
    whatHappens: [
      'Østrogen topper og udløser et brat hop i LH. 24-36 timer senere frigives ægget. Selve ægløsningen er overstået på et døgn, så den venter ikke på, at du har læst færdig. Det er et pocheret æg, ikke en bov.',
      'Testosteron er også lidt højere omkring ægløsning, hvilket ofte giver mere lyst. Ja, kvinder har også testosteron. Det kom ikke med i 7. klasse, og du kiggede alligevel ud ad vinduet, men nu ved du det.',
      'Ægget lever 12-24 timer. Sædceller kan overleve op til 5 dage, så det frugtbare vindue ligger før ægløsningen. Læs den sætning igen. Før, ikke på dagen. Du marinerer heller ikke kødet, efter det er stegt.',
    ],
    howSheMayFeel: [
      'Højeste energi og selvtillid i cyklussen. Jordbær i juni, og du har ikke vandet dem.',
      'Ofte mere lyst til sex og nærhed. Hør her: det er ikke en alarm, du skal sætte. Hun kan høre dig åbne appen.',
      'Nogle mærker et jag i den ene side af underlivet (mittelschmerz) eller mere udflåd. Mittelschmerz er tysk for "mellemsmerte". Så har du lært et tysk ord i dag, og det er ét mere, end du fik med fra Berlin.',
      'Nogle bliver ømme i brysterne eller lidt oppustede lige efter. Du får det at vide, hvis det er relevant for dig. Det er det ikke.',
    ],
    whatYouCanDo: [
      'Prioritér tid til hinanden. Det er cyklussens bedste dage for nærhed, så læg telefonen væk. Helt væk. I et andet rum, i en skuffe, under noget.',
      'Hvis I ikke ønsker graviditet: det er nu, prævention betyder mest. Tag ansvaret sammen. "Jeg troede, du havde styr på det" er ikke en præventionsmetode. Det er sgu ikke engang en sætning, du kan sige højt uden selv at høre det.',
      'Hvis I ønsker graviditet: de fem dage før ægløsning og selve dagen er de vigtigste. Dagen efter er du for sent på den, uanset hvor meget du gør dig umage. Der er ikke noget at vinde ved at vente, det er ikke en gryderet.',
      'Læg mærke til, om hun nævner udflåd eller et jag i siden. Det er nyttige tegn at kende. Lav ikke et ansigt, når ordet udflåd falder. Det er bare et ord. Du har spist østers og sagt mmm.',
    ],
    selfCare: [
      'Læg mærke til dine egne tegn: klart, strækbart udflåd og et jag i siden fortæller mere end appens dato.',
      'Hvis du ikke ønsker graviditet: brug prævention nu. Appens skøn er ikke en måling.',
      'Hvis du ønsker graviditet: de fem dage før ægløsning og selve dagen er de vigtigste.',
      'Nyd overskuddet. Det er en god uge til nærhed, og til at gøre noget kun for dig selv.',
      'Drik rigeligt og hold et jævnt måltidsmønster. Nogle mærker lidt oppustethed lige efter ægløsning.',
    ],
    avoid: [
      'At bruge appens ægløsningsdato som prævention. Den er et gennemsnit, ikke en måling. Appen ved ikke, hvad der sker i hendes æggestokke. Det gør du heller ikke, min ven. Brug prævention.',
    ],
  },
  luteal: {
    phase: 'luteal',
    name: 'Lutealfasen',
    timing: 'Dag 17-28 (fra ægløsning til næste menstruation, ret stabilt 12-14 dage)',
    whatHappens: [
      'Den tomme follikel bliver til det gule legeme og producerer progesteron. Det gule legeme er en rigtig ting i kroppen, ikke en figur fra en børnebog, og heller ikke noget, du kan købe i en delikatesse.',
      'Progesteron gør slimhinden klar til et befrugtet æg, hæver kropstemperaturen lidt og virker beroligende og sløvende. Det skruer ned for blusset, og det forklarer også, hvorfor dynen ender på gulvet om natten.',
      'Bliver ægget ikke befrugtet, falder progesteron og østrogen brat den sidste uge. Det fald giver PMS. Det er ikke noget, hun finder på, og det er ikke noget, du har gjort. Hold fast i det sidste. Du får brug for det, cirka onsdag.',
    ],
    howSheMayFeel: [
      'Første halvdel: rolig, hjemlig, lidt mere træt. Der er skruet ned for blusset, og det er helt efter opskriften.',
      'Sidste 5-7 dage: irritabel, sårbar, tættere på tårerne, mere sult og trang til sødt. Det er progesteron, der falder, og progesteron spørger ikke dig først.',
      'Oppustethed, ømme bryster, dårligere søvn, uren hud. Ingen af delene er en invitation til, at du siger noget.',
      'Følelsen af at "alting er lidt for meget". Du er en del af alting. Du står sgu ret centralt i alting.',
    ],
    whatYouCanDo: [
      'Sænk forventningerne til socialt og praktisk overskud i den sidste uge. Det er ikke ugen, hvor du inviterer fire venner til middag og siger "jeg tænkte, det kunne være hyggeligt". Du tænkte ikke. Det er hele problemet.',
      'Læg mærke til, når PMS-vinduet begynder, og vær den, der har tålmodighed på lager. Du behøver ikke sige, at du har lagt mærke til det. Bare hav lageret, som man har en pakke pasta bagerst i skabet.',
      'Reager på det bagvedliggende behov, ikke på tonen. "Hvorfor står opvasken der stadig?" betyder, at opvasken skal væk. Det er ikke en invitation til at diskutere tonefald. Hænderne i vandet, min ven.',
      'Sørg for mad til tiden og snacks i huset. Sult forstærker alt. Det gælder også dig, så spis selv noget, før du svarer. Du har aldrig vundet en diskussion på tom mave, og du har prøvet.',
      'Foreslå et roligt aftenprogram frem for at spørge "hvad vil du?". "Hvad vil du?" er en opgave. "Jeg har fundet en film og tændt ovnen" er en plan. Og ovnen skal faktisk være tændt.',
    ],
    selfCare: [
      'Spis til tiden og hav gode snacks klar. Blodsukkerfald forstærker irritation og tristhed.',
      'Skær ned på koffein og alkohol den sidste uge. Begge dele gør søvnen og humøret dårligere.',
      'Hold fast i bevægelse, også når lysten er lille. En gåtur dæmper både oppustethed og uro.',
      'Prioritér søvn: fast sengetid og en rolig aften. Progesteronfaldet gør søvnen skrøbelig.',
      'Sig det højt, når PMS-ugen begynder: "Jeg er tættere på tårerne i denne uge." Det tager trykket af.',
      'Hvis PMS ødelægger hverdagen hver måned, så tal med din læge. Det kan behandles.',
    ],
    avoid: [
      'At starte store diskussioner de sidste 4-5 dage før menstruation. Boligøkonomi, svigerfamilie og hvor I skal bo om ti år kan alle vente til dag 8. De bliver ikke dårlige af at stå i køleskabet.',
      'At sige "du er bare PMS-ramt". Følelserne er ægte, selv om forstærkeren er hormonel. Er hun irriteret over noget, du har gjort, så har du gjort det. PMS gør det bare tydeligere, ligesom lys i et køkken, du ikke har gjort rent.',
      'At gøre hendes irritation til dit problem. Hold roen og bliv. Får du lyst til at sige "er du i dårligt humør?", så gå ud i køkkenet og sig det til emhætten. Den svarer det samme, som hun ville, bare uden konsekvenser.',
    ],
  },
};
