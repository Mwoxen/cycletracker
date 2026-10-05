import type { Symptom } from '@/domain/types';

import type { SymptomTip } from '../types';

export const symptomTips: Record<Symptom, SymptomTip> = {
  cramps: {
    what: 'Livmoderen trækker sig sammen for at afstøde slimhinden. Varme og tidlig smertestillende virker bedst.',
    doThis:
      'Find varmepuden frem uden at spørge, og læg den klar, som du ville lægge en kold øl klar til dig selv. Tag det praktiske i dag. Stikkontakten er hendes, opvasken er din.',
  },
  headache: {
    what: 'Hovedpine omkring menstruation skyldes ofte det bratte østrogenfald og kan være migræne.',
    doThis:
      'Dæmp lys og lyd, sørg for vand og mad, og lad hende trække sig uden forklaring. Det betyder også, at du ikke kigger ind hvert tiende minut for at spørge, om det er bedre. Hun er ikke en kage, du skal holde øje med.',
  },
  backPain: {
    what: 'Smerter i lænden følger ofte kramperne, fordi de samme nerver forsyner området.',
    doThis:
      'Tilbyd varme på lænden og tag de tunge løft i dag. Ja, også den indkøbspose, du plejer at lade stå i entreen, til den sgu finder vej til køkkenet selv.',
  },
  breastTenderness: {
    what: 'Progesteron og østrogen får brystvævet til at hæve og spænde før menstruation.',
    doThis:
      'Vær blid ved berøring og undlad kommentarer om kroppen. Alle kommentarer. Også dem, du selv synes er komplimenter, og især dem, du har øvet dig på først.',
  },
  bloating: {
    what: 'Kroppen holder på væske i lutealfasen. Det er forbigående og helt normalt.',
    doThis:
      'Sig ikke noget om maven, og foreslå løst tøj og en rolig aften. Hvis du er i tvivl om, hvad "ikke noget" dækker, så er det ingenting. Du kan tale om vejret. Vejret er fint.',
  },
  fatigue: {
    what: 'Lave hormoner, tab af jern og dårlig søvn giver tung krop, især dag 1-2.',
    doThis:
      'Aflys eller flyt noget i dag, og lav et måltid med jern i. Linser tæller, spinat tæller, en bøf tæller. Chips gør ikke, uanset hvor meget du tror på dem.',
  },
  nausea: {
    what: 'Prostaglandiner påvirker også mave og tarm, så kvalme og løs mave er almindeligt.',
    doThis:
      'Små, milde måltider og ingen krav om at spise med ved bordet. Tør kiks og ristet brød er mad i dag. Din chili con carne er det ikke, og det er den heller ikke, hvis du skruer ned for chilien.',
  },
  acne: {
    what: 'Hormonskiftet før menstruation øger talgproduktionen. Det forsvinder af sig selv.',
    doThis:
      'Ingen kommentarer om huden. Sig noget ægte om noget andet. "Det var klogt, det du sagde til din chef" tæller, hvis det er sandt, og det er det nok. Hun er den kloge af jer.',
  },
  cravings: {
    what: 'Serotonin falder med østrogen, og kroppen søger hurtige kulhydrater. Det er biologi, ikke svag vilje.',
    doThis:
      'Sørg for gode snacks i huset, og sig ikke noget, når de bliver spist. Heller ikke "nå, der røg den pose". Især ikke det. Du har selv tømt en pose chips i bilen på vej hjem fra butikken, så du har ikke noget at komme med.',
  },
  insomnia: {
    what: 'Progesteron hæver kropstemperaturen og hormonfaldet forstyrrer søvnen før menstruation.',
    doThis:
      'Gør soveværelset køligt og roligt, og tag morgenopgaverne i morgen. Roligt betyder også, at din telefon ikke lyser op klokken et, fordi du lige skulle se én video til om røgede ribben.',
  },
  lowLibido: {
    what: 'Lysten falder ofte i lutealfasen og de første menstruationsdage. Det handler ikke om dig.',
    doThis:
      'Vis nærhed uden forventning: et kram, en hånd, ingen hentydninger. Et kram med bagtanke er ikke et kram, og hun kan mærke forskellen. Køkkenet er lukket, og det hjælper ikke at stå og kigge ind ad vinduet.',
  },
  highLibido: {
    what: 'Omkring ægløsning topper østrogen og lidt testosteron, og lysten er ofte højest.',
    doThis:
      'Prioritér tid til hinanden, og lad hende sætte tempoet. Din opgave er at være til stede og lægge telefonen væk. Det er jordbær i juni, min ven, og du klarer det.',
  },
  moodSwings: {
    what: 'Hormonfaldet forstærker følelser, der allerede er der. De er ægte, forstærkeren er hormonel.',
    doThis:
      'Reager på behovet bag tonen, og tæl til tre, før du svarer. Langsomt, som når du venter på, at dejen hæver. Ikke "entotre" i ét ord.',
  },
  anxiety: {
    what: 'Lavere serotonin og GABA-følsomhed i lutealfasen kan give uro og bekymring.',
    doThis:
      'Sænk tempoet, undgå overraskelser, og spørg "vil du have forslag eller et øre?". Er svaret "et øre", så luk munden og brug øret. Du har to, så det burde kunne lade sig gøre.',
  },
  irritability: {
    what: 'Kort lunte i PMS-dagene er et af de mest almindelige symptomer og går over med blødningen.',
    doThis:
      'Tag ikke tonen personligt. Spørg, hvad du kan tage fra hende i dag, og tag det så. Uden at sige "sådan" bagefter, og uden at stå ved komfuret og vente på klapsalver.',
  },
  sadness: {
    what: 'Tristhed og tårer, der sidder løst, hører til PMS. Bliver det tungt hver måned, fortjener det en læge.',
    doThis:
      'Bliv i rummet, lyt uden at fikse, og sig, at du er der. Du skal ikke finde en løsning. Du skal sidde der, og det er sværere for dig, end det lyder.',
  },
};
