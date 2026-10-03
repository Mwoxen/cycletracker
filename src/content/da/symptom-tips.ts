import type { Symptom } from '@/domain/types';

import type { SymptomTip } from '../types';

export const symptomTips: Record<Symptom, SymptomTip> = {
  cramps: {
    what: 'Livmoderen trækker sig sammen for at afstøde slimhinden. Varme og tidlig smertestillende virker bedst.',
    doThis:
      'Find varmepuden frem uden at spørge, og tag det praktiske i dag. Stikkontakten er hendes. Opvasken er din.',
  },
  headache: {
    what: 'Hovedpine omkring menstruation skyldes ofte det bratte østrogenfald og kan være migræne.',
    doThis:
      'Dæmp lys og lyd, sørg for vand og mad, og lad hende trække sig uden forklaring. Det betyder også, at du ikke kigger ind hvert tiende minut for at spørge, om det er bedre.',
  },
  backPain: {
    what: 'Smerter i lænden følger ofte kramperne, fordi de samme nerver forsyner området.',
    doThis:
      'Tilbyd varme på lænden og tag de tunge løft i dag. Ja, også den indkøbspose, du plejer at lade stå i entreen.',
  },
  breastTenderness: {
    what: 'Progesteron og østrogen får brystvævet til at hæve og spænde før menstruation.',
    doThis:
      'Vær blid ved berøring og undlad kommentarer om kroppen. Alle kommentarer. Også dem, du selv synes er komplimenter.',
  },
  bloating: {
    what: 'Kroppen holder på væske i lutealfasen. Det er forbigående og helt normalt.',
    doThis:
      'Sig ikke noget om maven, og foreslå løst tøj og en rolig aften. Hvis du er i tvivl om, hvad "ikke noget" dækker, så er det ingenting.',
  },
  fatigue: {
    what: 'Lave hormoner, tab af jern og dårlig søvn giver tung krop, især dag 1-2.',
    doThis:
      'Aflys eller flyt noget i dag, og sørg for et måltid med jern. Linser tæller. Chips gør ikke, uanset hvor meget du tror på dem.',
  },
  nausea: {
    what: 'Prostaglandiner påvirker også mave og tarm, så kvalme og løs mave er almindeligt.',
    doThis:
      'Små, milde måltider og ingen krav om at spise med ved bordet. Tør kiks og ristet brød er mad i dag. Din chili con carne er det ikke.',
  },
  acne: {
    what: 'Hormonskiftet før menstruation øger talgproduktionen. Det forsvinder af sig selv.',
    doThis:
      'Ingen kommentarer om huden. Sig noget ægte om noget andet. "Det var klogt, det du sagde til din chef" tæller, hvis det er sandt.',
  },
  cravings: {
    what: 'Serotonin falder med østrogen, og kroppen søger hurtige kulhydrater. Det er biologi, ikke svag vilje.',
    doThis:
      'Sørg for gode snacks i huset, og sig ikke noget, når de bliver spist. Heller ikke "nå, der røg den pose". Især ikke det.',
  },
  insomnia: {
    what: 'Progesteron hæver kropstemperaturen og hormonfaldet forstyrrer søvnen før menstruation.',
    doThis:
      'Gør soveværelset køligt og roligt, og tag morgenopgaverne i morgen. Roligt betyder også, at din telefon ikke lyser op klokken et.',
  },
  lowLibido: {
    what: 'Lysten falder ofte i lutealfasen og de første menstruationsdage. Det handler ikke om dig.',
    doThis:
      'Vis nærhed uden forventning: et kram, en hånd, ingen hentydninger. Et kram med bagtanke er ikke et kram, og hun kan mærke forskellen.',
  },
  highLibido: {
    what: 'Omkring ægløsning topper østrogen og lidt testosteron, og lysten er ofte højest.',
    doThis:
      'Prioritér tid til hinanden, og lad hende sætte tempoet. Din opgave er at være til stede og lægge telefonen væk. Du klarer det.',
  },
  moodSwings: {
    what: 'Hormonfaldet forstærker følelser, der allerede er der. De er ægte, forstærkeren er hormonel.',
    doThis:
      'Reager på behovet bag tonen, og tæl til tre før du svarer. Langsomt. Ikke "entotre" i ét ord.',
  },
  anxiety: {
    what: 'Lavere serotonin og GABA-følsomhed i lutealfasen kan give uro og bekymring.',
    doThis:
      'Sænk tempoet, undgå overraskelser, og spørg "vil du have forslag eller et øre?". Er svaret "et øre", så luk munden og brug det.',
  },
  irritability: {
    what: 'Kort lunte i PMS-dagene er et af de mest almindelige symptomer og går over med blødningen.',
    doThis:
      'Tag ikke tonen personligt. Spørg, hvad du kan tage fra hende i dag, og tag det så. Uden at sige "sådan" bagefter.',
  },
  sadness: {
    what: 'Tristhed og tårer, der sidder løst, hører til PMS. Bliver det tungt hver måned, fortjener det en læge.',
    doThis:
      'Bliv i rummet, lyt uden at fikse, og sig at du er der. Du skal ikke finde en løsning. Du skal sidde der.',
  },
};
