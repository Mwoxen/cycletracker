import type { Phase } from '@/domain/types';

import type { PhaseSelfView } from '../types';

/** What the cycle owner reads about her own phase: neutral, addressed to her, no jokes. */
export const phasesForHer: Record<Phase, PhaseSelfView> = {
  menstrual: {
    whatHappens: [
      'Østrogen og progesteron er på deres laveste. Livmoderslimhinden afstødes, og det er det, der bløder.',
      'Livmoderen trækker sig sammen for at skubbe slimhinden ud. Det er de sammentrækninger, der giver kramper.',
      'Kroppen mister jern med blodet. Sammen med de lave hormoner giver det ofte træthed de første dage.',
    ],
    howYouMayFeel: [
      'Træt og tung, især dag 1-2.',
      'Kramper i underlivet, ondt i lænden, hovedpine.',
      'Behov for ro, varme og mindre socialt.',
      'Følelsesmæssigt ofte roligere end i PMS-dagene, men med kort lunte hvis smerterne er slemme.',
    ],
    partnerCanDo: [
      'Tag det praktiske uden at spørge: mad, opvask, børn, indkøb.',
      'Hav varme klar: varmepude, te, et tæppe. Varme dæmper kramper.',
      'Spørg "hvad har du brug for?" i stedet for at gætte, og accepter "ingenting".',
      'Sænk tempoet i planerne de første to dage. Aflys gerne noget uden at gøre et nummer ud af det.',
      'Hav smertestillende og bind/tamponer i huset, så hun ikke skal tænke på det.',
    ],
  },
  follicular: {
    whatHappens: [
      'Hypofysen sender FSH, og en gruppe follikler i æggestokkene begynder at modne et æg.',
      'Folliklerne producerer østrogen, som stiger dag for dag og bygger en ny livmoderslimhinde op.',
      'Stigende østrogen øger serotonin og dopamin. Det er derfor humør, energi og motivation typisk stiger.',
    ],
    howYouMayFeel: [
      'Mere energi, lyst til at lave ting og se mennesker.',
      'Lettere til bens, bedre søvn, klarere tanker.',
      'Mere åben over for nyt, planer og udfordringer.',
      'Huden bliver ofte pænere, og oppustetheden forsvinder.',
    ],
    partnerCanDo: [
      'Planlæg det store her: ture, fester, gæster, hårde træningspas, vigtige samtaler.',
      'Sig ja til hendes ideer. Det er ugen, hvor initiativ falder let.',
      'Læg mærke til skiftet fra menstruationen, og sig det højt: "Du virker til at have fået energien tilbage."',
      'Brug overskuddet til at få aftalt de praktiske ting, der driller senere i cyklussen.',
    ],
  },
  ovulation: {
    whatHappens: [
      'Østrogen topper og udløser et brat hop i LH. 24-36 timer senere frigives ægget.',
      'Testosteron er også lidt højere omkring ægløsning, hvilket ofte giver mere lyst.',
      'Ægget lever 12-24 timer. Sædceller kan overleve op til 5 dage, så det frugtbare vindue ligger før ægløsningen.',
    ],
    howYouMayFeel: [
      'Højeste energi og selvtillid i cyklussen.',
      'Ofte mere lyst til sex og nærhed.',
      'Nogle mærker et jag i den ene side af underlivet (mittelschmerz) eller mere udflåd.',
      'Nogle bliver ømme i brysterne eller lidt oppustede lige efter.',
    ],
    partnerCanDo: [
      'Prioritér tid til hinanden. Det er cyklussens bedste dage for nærhed.',
      'Hvis I ikke ønsker graviditet: det er nu, prævention betyder mest. Tag ansvaret sammen.',
      'Hvis I ønsker graviditet: de fem dage før ægløsning og selve dagen er de vigtigste.',
      'Læg mærke til, om hun nævner udflåd eller et jag i siden. Det er nyttige tegn at kende.',
    ],
  },
  luteal: {
    whatHappens: [
      'Den tomme follikel bliver til det gule legeme og producerer progesterone.',
      'Progesteron gør slimhinden klar til et befrugtet æg, hæver kropstemperaturen lidt og virker beroligende og sløvende.',
      'Bliver ægget ikke befrugtet, falder progesteron og østrogen brat den sidste uge. Det fald giver PMS.',
    ],
    howYouMayFeel: [
      'Første halvdel: rolig, hjemlig, lidt mere træt.',
      'Sidste 5-7 dage: irritabel, sårbar, tættere på tårerne, mere sult og trang til sødt.',
      'Oppustethed, ømme bryster, dårligere søvn, uren hud.',
      'Følelsen af at "alting er lidt for meget".',
    ],
    partnerCanDo: [
      'Sænk forventningerne til socialt og praktisk overskud i den sidste uge.',
      'Læg mærke til, når PMS-vinduet begynder, og vær den, der har tålmodighed på lager.',
      'Reager på det bagvedliggende behov, ikke på tonen.',
      'Sørg for mad til tiden og snacks i huset. Sult forstærker alt.',
      'Foreslå et roligt aftenprogram frem for at spørge "hvad vil du?".',
    ],
  },
};
