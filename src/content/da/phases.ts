import type { Phase } from '@/domain/types';

import type { PhaseInfo } from '../types';

export const phases: Record<Phase, PhaseInfo> = {
  menstrual: {
    phase: 'menstrual',
    name: 'Menstruation',
    timing: 'Dag 1-5 (typisk 3-7 dage)',
    whatHappens: [
      'Østrogen og progesteron er på deres laveste. Livmoderslimhinden afstødes, og det er det, der bløder. Ja, det er blod. Du kan godt klare det.',
      'Livmoderen trækker sig sammen for at skubbe slimhinden ud. Det er de sammentrækninger, der giver kramper. Det er en muskel, der arbejder, ikke "lidt ondt i maven".',
      'Kroppen mister jern med blodet. Sammen med de lave hormoner giver det ofte træthed de første dage. Det er ikke dovenskab. Det er jern, der mangler.',
    ],
    howSheMayFeel: [
      'Træt og tung, især dag 1-2. Ikke "lidt træt". Træt.',
      'Kramper i underlivet, ondt i lænden, hovedpine. Ofte på samme tid.',
      'Behov for ro, varme og mindre socialt. Du tæller med som socialt.',
      'Følelsesmæssigt ofte roligere end i PMS-dagene, men med kort lunte hvis smerterne er slemme. Smerte gør alle korte i lunten. Også dig, når du har en splint i fingeren.',
    ],
    whatYouCanDo: [
      'Tag det praktiske uden at spørge: mad, opvask, børn, indkøb. "Skal jeg lave mad?" er ikke hjælp. Det er en opgave mere til hende: at svare dig.',
      'Hav varme klar: varmepude, te, et tæppe. Varme dæmper kramper og kræver nul samtale. Din bedste ven i dag er en stikkontakt.',
      'Spørg "hvad har du brug for?" i stedet for at gætte. Hvis svaret er "ingenting", så er svaret ingenting. Ikke "er du sikker?". Ingenting.',
      'Sænk tempoet i planerne de første to dage. Aflys gerne noget uden at gøre et nummer ud af det. Du får ikke en medalje for at flytte en brunch.',
      'Hav smertestillende og bind/tamponer i huset, så hun ikke skal tænke på det. Du kan godt købe tamponer. Kassemedarbejderen tænker ikke på dig. Ingen tænker på dig.',
    ],
    selfCare: [
      'Varme på maven eller lænden: varmepude, varmt bad eller en varm flaske dæmper kramperne.',
      'Tag smertestillende tidligt, hvis du plejer at få kramper. Ibuprofen virker bedst, før smerten topper.',
      'Spis jernrigt de første dage: kød, linser, spinat, og gerne noget med C-vitamin til.',
      'Let bevægelse, fx en gåtur eller blid udstrækning, hjælper ofte mere på kramper end at ligge stille.',
      'Sæt tempoet ned uden dårlig samvittighed. Sig nej til noget de første to dage.',
    ],
    avoid: [
      'At tage lav energi eller aflysninger personligt. Hun aflyser ikke dig. Hun aflyser tirsdag.',
      'At spørge "er det fordi du har menstruation?" som svar på en holdning. Holdningen var der også i sidste uge. Det eneste nye er, at du lige har tabt diskussionen.',
      'At planlægge store ting eller svære samtaler dag 1-2. Det kan vente til torsdag, og det ved du godt.',
    ],
  },
  follicular: {
    phase: 'follicular',
    name: 'Follikelfasen',
    timing: 'Dag 6-13 (fra blødningen stopper til ægløsning)',
    whatHappens: [
      'Hypofysen sender FSH, og en gruppe follikler i æggestokkene begynder at modne et æg. Du behøver ikke kunne stave til hypofysen. Du skal bare vide, at den er i gang.',
      'Folliklerne producerer østrogen, som stiger dag for dag og bygger en ny livmoderslimhinde op. Kroppen bygger altså op igen, helt uden at du har sat det i kalenderen.',
      'Stigende østrogen øger serotonin og dopamin. Det er derfor humør, energi og motivation typisk stiger. Det er ikke dig, der er blevet sjovere. Det er østrogen.',
    ],
    howSheMayFeel: [
      'Mere energi, lyst til at lave ting og se mennesker.',
      'Lettere til bens, bedre søvn, klarere tanker.',
      'Mere åben over for nyt, planer og udfordringer. Det er nu, du skal nævne den vandretur, du har talt om siden marts.',
      'Huden bliver ofte pænere, og oppustetheden forsvinder.',
    ],
    whatYouCanDo: [
      'Planlæg det store her: ture, fester, gæster, hårde træningspas, vigtige samtaler. Det er den uge, hvor "skal vi ikke have mine forældre på besøg?" faktisk kan ende godt.',
      'Sig ja til hendes ideer. Det er ugen, hvor initiativ falder let, så vær ikke ham, der siger "lad os lige se". Du har set. Sig ja.',
      'Læg mærke til skiftet fra menstruationen, og sig det højt: "Du virker til at have fået energien tilbage." Det er én sætning. Du kan godt sige én sætning.',
      'Brug overskuddet til at få aftalt de praktiske ting, der driller senere i cyklussen. Ferien, budgettet, hvem der ringer til din mor. Nu, mens det er nemt.',
    ],
    selfCare: [
      'Læg det, der kræver mod eller energi, her: den svære samtale, jobsamtalen, det hårde træningspas.',
      'Brug energien på at få lavet aftaler og planer, så den sidste uge i cyklussen bliver lettere.',
      'Sig ja til det sociale. Det giver typisk mere, end det tager, i denne fase.',
      'Prøv noget nyt. Hjernen er mere åben for læring og udfordringer, når østrogen stiger.',
      'Læg mærke til, hvordan du har det, og skriv det ned. Det gør PMS-ugen nemmere at sætte i perspektiv.',
    ],
    avoid: [
      'At antage at den høje energi holder hele måneden. Det gør den ikke. Det gør din heller ikke. Du har bare ikke en app, der siger det.',
      'At skubbe alle svære ting til "når hun har det godt". Fordel dem. Ellers får hun én uge om måneden, der er fyldt med dine udskudte samtaler.',
    ],
  },
  ovulation: {
    phase: 'ovulation',
    name: 'Ægløsning',
    timing: 'Ca. dag 13-16 (selve ægløsningen varer et døgn)',
    whatHappens: [
      'Østrogen topper og udløser et brat hop i LH. 24-36 timer senere frigives ægget. Selve ægløsningen er overstået på et døgn, så den venter ikke på, at du har læst færdig.',
      'Testosteron er også lidt højere omkring ægløsning, hvilket ofte giver mere lyst. Ja, kvinder har også testosteron. Det kom ikke med i 7. klasse, men nu ved du det.',
      'Ægget lever 12-24 timer. Sædceller kan overleve op til 5 dage, så det frugtbare vindue ligger før ægløsningen. Læs den sætning igen. Før, ikke på dagen.',
    ],
    howSheMayFeel: [
      'Højeste energi og selvtillid i cyklussen.',
      'Ofte mere lyst til sex og nærhed.',
      'Nogle mærker et jag i den ene side af underlivet (mittelschmerz) eller mere udflåd. Mittelschmerz er tysk for "mellemsmerte". Så har du lært et tysk ord i dag.',
      'Nogle bliver ømme i brysterne eller lidt oppustede lige efter.',
    ],
    whatYouCanDo: [
      'Prioritér tid til hinanden. Det er cyklussens bedste dage for nærhed, så læg telefonen væk. Helt væk. I et andet rum.',
      'Hvis I ikke ønsker graviditet: det er nu, prævention betyder mest. Tag ansvaret sammen. "Jeg troede, du havde styr på det" er ikke en præventionsmetode.',
      'Hvis I ønsker graviditet: de fem dage før ægløsning og selve dagen er de vigtigste. Dagen efter er du for sent på den, uanset hvor meget du gør dig umage.',
      'Læg mærke til, om hun nævner udflåd eller et jag i siden. Det er nyttige tegn at kende. Lav ikke et ansigt, når ordet udflåd falder. Det er bare et ord.',
    ],
    selfCare: [
      'Læg mærke til dine egne tegn: klart, strækbart udflåd og et jag i siden fortæller mere end appens dato.',
      'Hvis du ikke ønsker graviditet: brug prævention nu. Appens skøn er ikke en måling.',
      'Hvis du ønsker graviditet: de fem dage før ægløsning og selve dagen er de vigtigste.',
      'Nyd overskuddet. Det er en god uge til nærhed, og til at gøre noget kun for dig selv.',
      'Drik rigeligt og hold et jævnt måltidsmønster. Nogle mærker lidt oppustethed lige efter ægløsning.',
    ],
    avoid: [
      'At bruge appens ægløsningsdato som prævention. Den er et gennemsnit, ikke en måling. Appen ved ikke, hvad der sker i hendes æggestokke. Det gør du heller ikke. Brug prævention.',
    ],
  },
  luteal: {
    phase: 'luteal',
    name: 'Lutealfasen',
    timing: 'Dag 17-28 (fra ægløsning til næste menstruation, ret stabilt 12-14 dage)',
    whatHappens: [
      'Den tomme follikel bliver til det gule legeme og producerer progesteron. Det gule legeme er en rigtig ting i kroppen, ikke en figur fra en børnebog.',
      'Progesteron gør slimhinden klar til et befrugtet æg, hæver kropstemperaturen lidt og virker beroligende og sløvende. Det forklarer også, hvorfor dynen ender på gulvet om natten.',
      'Bliver ægget ikke befrugtet, falder progesteron og østrogen brat den sidste uge. Det fald giver PMS. Det er ikke noget, hun finder på, og det er ikke noget, du har gjort. Hold fast i det sidste. Du får brug for det.',
    ],
    howSheMayFeel: [
      'Første halvdel: rolig, hjemlig, lidt mere træt.',
      'Sidste 5-7 dage: irritabel, sårbar, tættere på tårerne, mere sult og trang til sødt.',
      'Oppustethed, ømme bryster, dårligere søvn, uren hud.',
      'Følelsen af at "alting er lidt for meget". Du er en del af alting.',
    ],
    whatYouCanDo: [
      'Sænk forventningerne til socialt og praktisk overskud i den sidste uge. Det er ikke ugen, hvor du inviterer fire venner til middag og siger "jeg tænkte, det kunne være hyggeligt".',
      'Læg mærke til, når PMS-vinduet begynder, og vær den, der har tålmodighed på lager. Du behøver ikke sige, at du har lagt mærke til det. Bare hav lageret.',
      'Reager på det bagvedliggende behov, ikke på tonen. "Hvorfor står opvasken der stadig?" betyder, at opvasken skal væk. Det er ikke en invitation til at diskutere tonefald.',
      'Sørg for mad til tiden og snacks i huset. Sult forstærker alt. Det gælder også dig, så spis selv noget, før du svarer.',
      'Foreslå et roligt aftenprogram frem for at spørge "hvad vil du?". "Hvad vil du?" er en opgave. "Jeg har fundet en film og tændt ovnen" er en plan.',
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
      'At starte store diskussioner de sidste 4-5 dage før menstruation. Boligøkonomi, svigerfamilie og hvor I skal bo om ti år kan alle vente til dag 8.',
      'At sige "du er bare PMS-ramt". Følelserne er ægte, selv om forstærkeren er hormonel. Er hun irriteret over noget, du har gjort, så har du gjort det. PMS gør det bare tydeligere.',
      'At gøre hendes irritation til dit problem. Hold roen og bliv. Hvis du får lyst til at sige "er du i dårligt humør?", så gå ud af rummet og sig det til en væg. Væggen svarer det samme, som hun ville, bare uden konsekvenser.',
    ],
  },
};
