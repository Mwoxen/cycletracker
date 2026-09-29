import type { Phase } from '@/domain/types';

import type { PhaseInfo } from '../types';

export const phases: Record<Phase, PhaseInfo> = {
  menstrual: {
    phase: 'menstrual',
    name: 'Menstruation',
    timing: 'Dag 1-5 (typisk 3-7 dage)',
    whatHappens: [
      'Østrogen og progesteron er på deres laveste. Livmoderslimhinden afstødes, og det er det, der bløder.',
      'Livmoderen trækker sig sammen for at skubbe slimhinden ud. Det er de sammentrækninger, der giver kramper.',
      'Kroppen mister jern med blodet. Sammen med de lave hormoner giver det ofte træthed de første dage.',
    ],
    howSheMayFeel: [
      'Træt og tung, især dag 1-2.',
      'Kramper i underlivet, ondt i lænden, hovedpine.',
      'Behov for ro, varme og mindre socialt.',
      'Følelsesmæssigt ofte roligere end i PMS-dagene, men med kort lunte hvis smerterne er slemme.',
    ],
    whatYouCanDo: [
      'Tag det praktiske uden at spørge: mad, opvask, børn, indkøb.',
      'Hav varme klar: varmepude, te, et tæppe. Varme dæmper kramper.',
      'Spørg "hvad har du brug for?" i stedet for at gætte, og accepter "ingenting".',
      'Sænk tempoet i planerne de første to dage. Aflys gerne noget uden at gøre et nummer ud af det.',
      'Hav smertestillende og bind/tamponer i huset, så hun ikke skal tænke på det.',
    ],
    selfCare: [
      'Varme på maven eller lænden: varmepude, varmt bad eller en varm flaske dæmper kramperne.',
      'Tag smertestillende tidligt, hvis du plejer at få kramper. Ibuprofen virker bedst, før smerten topper.',
      'Spis jernrigt de første dage: kød, linser, spinat, og gerne noget med C-vitamin til.',
      'Let bevægelse, fx en gåtur eller blid udstrækning, hjælper ofte mere på kramper end at ligge stille.',
      'Sæt tempoet ned uden dårlig samvittighed. Sig nej til noget de første to dage.',
    ],
    avoid: [
      'At tage lav energi eller aflysninger personligt.',
      'At spørge "er det fordi du har menstruation?" som svar på en holdning.',
      'At planlægge store ting eller svære samtaler dag 1-2.',
    ],
  },
  follicular: {
    phase: 'follicular',
    name: 'Follikelfasen',
    timing: 'Dag 6-13 (fra blødningen stopper til ægløsning)',
    whatHappens: [
      'Hypofysen sender FSH, og en gruppe follikler i æggestokkene begynder at modne et æg.',
      'Folliklerne producerer østrogen, som stiger dag for dag og bygger en ny livmoderslimhinde op.',
      'Stigende østrogen øger serotonin og dopamin. Det er derfor humør, energi og motivation typisk stiger.',
    ],
    howSheMayFeel: [
      'Mere energi, lyst til at lave ting og se mennesker.',
      'Lettere til bens, bedre søvn, klarere tanker.',
      'Mere åben over for nyt, planer og udfordringer.',
      'Huden bliver ofte pænere, og oppustetheden forsvinder.',
    ],
    whatYouCanDo: [
      'Planlæg det store her: ture, fester, gæster, hårde træningspas, vigtige samtaler.',
      'Sig ja til hendes ideer. Det er ugen, hvor initiativ falder let.',
      'Læg mærke til skiftet fra menstruationen, og sig det højt: "Du virker til at have fået energien tilbage."',
      'Brug overskuddet til at få aftalt de praktiske ting, der driller senere i cyklussen.',
    ],
    selfCare: [
      'Læg det, der kræver mod eller energi, her: den svære samtale, jobsamtalen, det hårde træningspas.',
      'Brug energien på at få lavet aftaler og planer, så den sidste uge i cyklussen bliver lettere.',
      'Sig ja til det sociale. Det giver typisk mere, end det tager, i denne fase.',
      'Prøv noget nyt. Hjernen er mere åben for læring og udfordringer, når østrogen stiger.',
      'Læg mærke til, hvordan du har det, og skriv det ned. Det gør PMS-ugen nemmere at sætte i perspektiv.',
    ],
    avoid: [
      'At antage at den høje energi holder hele måneden.',
      'At skubbe alle svære ting til "når hun har det godt". Fordel dem.',
    ],
  },
  ovulation: {
    phase: 'ovulation',
    name: 'Ægløsning',
    timing: 'Ca. dag 13-16 (selve ægløsningen varer et døgn)',
    whatHappens: [
      'Østrogen topper og udløser et brat hop i LH. 24-36 timer senere frigives ægget.',
      'Testosteron er også lidt højere omkring ægløsning, hvilket ofte giver mere lyst.',
      'Ægget lever 12-24 timer. Sædceller kan overleve op til 5 dage, så det frugtbare vindue ligger før ægløsningen.',
    ],
    howSheMayFeel: [
      'Højeste energi og selvtillid i cyklussen.',
      'Ofte mere lyst til sex og nærhed.',
      'Nogle mærker et jag i den ene side af underlivet (mittelschmerz) eller mere udflåd.',
      'Nogle bliver ømme i brysterne eller lidt oppustede lige efter.',
    ],
    whatYouCanDo: [
      'Prioritér tid til hinanden. Det er cyklussens bedste dage for nærhed.',
      'Hvis I ikke ønsker graviditet: det er nu, prævention betyder mest. Tag ansvaret sammen.',
      'Hvis I ønsker graviditet: de fem dage før ægløsning og selve dagen er de vigtigste.',
      'Læg mærke til, om hun nævner udflåd eller et jag i siden. Det er nyttige tegn at kende.',
    ],
    selfCare: [
      'Læg mærke til dine egne tegn: klart, strækbart udflåd og et jag i siden fortæller mere end appens dato.',
      'Hvis du ikke ønsker graviditet: brug prævention nu. Appens skøn er ikke en måling.',
      'Hvis du ønsker graviditet: de fem dage før ægløsning og selve dagen er de vigtigste.',
      'Nyd overskuddet. Det er en god uge til nærhed, og til at gøre noget kun for dig selv.',
      'Drik rigeligt og hold et jævnt måltidsmønster. Nogle mærker lidt oppustethed lige efter ægløsning.',
    ],
    avoid: ['At bruge appens ægløsningsdato som prævention. Den er et gennemsnit, ikke en måling.'],
  },
  luteal: {
    phase: 'luteal',
    name: 'Lutealfasen',
    timing: 'Dag 17-28 (fra ægløsning til næste menstruation, ret stabilt 12-14 dage)',
    whatHappens: [
      'Den tomme follikel bliver til det gule legeme og producerer progesterone.',
      'Progesteron gør slimhinden klar til et befrugtet æg, hæver kropstemperaturen lidt og virker beroligende og sløvende.',
      'Bliver ægget ikke befrugtet, falder progesteron og østrogen brat den sidste uge. Det fald giver PMS.',
    ],
    howSheMayFeel: [
      'Første halvdel: rolig, hjemlig, lidt mere træt.',
      'Sidste 5-7 dage: irritabel, sårbar, tættere på tårerne, mere sult og trang til sødt.',
      'Oppustethed, ømme bryster, dårligere søvn, uren hud.',
      'Følelsen af at "alting er lidt for meget".',
    ],
    whatYouCanDo: [
      'Sænk forventningerne til socialt og praktisk overskud i den sidste uge.',
      'Læg mærke til, når PMS-vinduet begynder, og vær den, der har tålmodighed på lager.',
      'Reager på det bagvedliggende behov, ikke på tonen.',
      'Sørg for mad til tiden og snacks i huset. Sult forstærker alt.',
      'Foreslå et roligt aftenprogram frem for at spørge "hvad vil du?".',
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
      'At starte store diskussioner de sidste 4-5 dage før menstruation.',
      'At sige "du er bare PMS-ramt". Følelserne er ægte, selv om forstærkeren er hormonel.',
      'At gøre hendes irritation til dit problem. Hold roen og bliv.',
    ],
  },
};
