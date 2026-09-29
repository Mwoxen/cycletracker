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
const NHS_OVULATION_PAIN: Source = {
  label: 'NHS: Ovulation pain',
  url: 'https://www.nhs.uk/conditions/ovulation-pain/',
};
const NHS_DISCHARGE: Source = {
  label: 'NHS: Vaginal discharge',
  url: 'https://www.nhs.uk/conditions/vaginal-discharge/',
};
const NHS_IRREGULAR: Source = {
  label: 'NHS: Irregular periods',
  url: 'https://www.nhs.uk/conditions/irregular-periods/',
};
const NHS_MISSED: Source = {
  label: 'NHS: Stopped or missed periods',
  url: 'https://www.nhs.uk/conditions/stopped-or-missed-periods/',
};
const NHS_PCOS: Source = {
  label: 'NHS: Polycystic ovary syndrome',
  url: 'https://www.nhs.uk/conditions/polycystic-ovary-syndrome-pcos/',
};
const NHS_CONTRACEPTION: Source = {
  label: 'NHS: Contraception',
  url: 'https://www.nhs.uk/contraception/',
};
const ACOG_FAB: Source = {
  label: 'ACOG: Fertility awareness-based methods',
  url: 'https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning',
};
const ACOG_INFERTILITY: Source = {
  label: 'ACOG: Evaluating infertility',
  url: 'https://www.acog.org/womens-health/faqs/evaluating-infertility',
};

const M = 5;

export const month05: MonthContent = {
  month: M,
  theme: 'Ægløsning',
  focus: 'Kend tegnene og det frugtbare vindue, og brug viden til nærhed uden pres.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'Cyklussens usynlige midtpunkt',
      insight:
        'Denne måned handler om den ene dag, resten af cyklussen bygger op til: ægløsningen. Et modent æg forlader æggestokken, lever op til et døgn, og enten befrugtes det, eller også opløses det. Alt før er forberedelse, alt efter er efterspil. Det lyder simpelt, men ægløsningen er den mest oversete del af cyklussen, fordi den er usynlig: ingen blødning, ingen kramper, kun små tegn, man skal kende for at lægge mærke til. Mange mærker mere energi, mere lyst og mere overskud i dagene omkring den. Målet i denne måned er viden uden pres: at du kender tegnene og vinduet, uden at nogen af jer skal præstere på bestemte datoer. Appens dato er et skøn, ikke en måling. Det vender vi tilbage til.',
      action:
        'Se appens skønnede ægløsningsdato for denne cyklus, og spørg hende, om den plejer at passe med det, hun selv mærker.',
      phaseTags: [],
      sources: [ACOG_CYCLE, SUNDHED_DK],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: 'LH-toppen: startskuddet',
      insight:
        'I follikelfasen modner en gruppe follikler i æggestokken, og én bliver dominerende. Den producerer stigende mængder østrogen, og når østrogen har ligget højt i cirka to døgn, skifter hjernen strategi: hypofysen sender en brat bølge af luteiniserende hormon, LH. Det er LH-toppen, selve startskuddet. 24-36 timer senere brister folliklen, og ægget frigives. Toppen varer typisk kun et døgn og er det, ægløsningstest måler i urinen. Det er også derfor, testen viser positivt før ægløsningen, ikke på dagen. For dig betyder det: de dage, hvor hun føler sig allerbedst, er ofte dagene op til ægløsningen, hvor østrogen topper, ikke dagen efter.',
      action:
        'Læg mærke til, om hun virker mere klar og energisk i dag end i sidste uge, og sig det til hende uden at forklare hvorfor.',
      phaseTags: ['follicular', 'ovulation'],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 3),
      month: M,
      day: 3,
      title: 'Ægget lever et døgn',
      insight:
        'Når folliklen brister, opfanges ægget af æggelederens tragt og begynder rejsen mod livmoderen. Det kan befrugtes i 12-24 timer. Derefter går det i opløsning, og cyklussen fortsætter uændret mod menstruation. Det er en meget kort levetid, og det er hele grunden til, at timing betyder så meget for fertilitet. Frigives der to æg, kan det give tveæggede tvillinger, men det er sjældent. Ægløsningen mærkes typisk ikke som en begivenhed; de fleste tegn kommer før eller efter. Det betyder, at når appen viser "ægløsning i dag", er det ofte allerede sket eller sker i morgen. Én dag, ikke en uge: det er sætningen, du skal huske.',
      action:
        'Sig sætningen for dig selv: "Ægget lever et døgn, sæd lever fem dage." Den forklarer hele det frugtbare vindue.',
      phaseTags: ['ovulation'],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'Sædceller er de tålmodige',
      insight:
        'Sædceller kan overleve op til fem dage i livmoderhals og æggeledere, hvis udflådet er af den rigtige type. Omkring ægløsning bliver slimet i livmoderhalsen tyndt og glat, og det holder sædcellerne i live og fører dem frem. Resten af cyklussen er slimet tykt og surt, og sædceller dør inden for timer. Det er derfor, det frugtbare vindue ligger før ægløsningen: sæden skal være på plads og vente, når ægget kommer. Sex dagen efter ægløsning giver næsten aldrig graviditet, mens sex to dage før er blandt de mest frugtbare tidspunkter. Det gælder, uanset hvad I ønsker. Viden om sædens levetid er lige så meget dit ansvar som hendes.',
      action:
        'Tæl fem dage baglæns fra appens ægløsningsdato, og læg mærke til, hvor det frugtbare vindue ligger i denne cyklus.',
      phaseTags: ['ovulation', 'follicular'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'Seks dage: det frugtbare vindue',
      insight:
        'Læg æggets døgn sammen med sædens fem dage, og du får det frugtbare vindue: de fem dage før ægløsning og selve dagen. Chancen for graviditet er højest de to-tre dage lige før ægløsning og falder brat dagen efter. Uden for vinduet er graviditet meget usandsynlig, men vinduet rykker sig, fordi ægløsningen rykker sig. Stress, sygdom og rejser kan forsinke den med dage eller uger, og så flytter vinduet med. Derfor kan appens skøn ikke bruges til at vælge "sikre dage". Det er et gennemsnit af tidligere cyklusser, ikke en måling af denne. Brug vinduet til at forstå hendes krop og jeres fælles ansvar, ikke til at planlægge prævention.',
      action:
        'Åbn kalenderen sammen og find det frugtbare vindue i denne cyklus. Tal om, hvad det betyder for jer lige nu: ønske, forsigtighed eller begge dele.',
      phaseTags: ['ovulation'],
      sources: [NHS_PERIODS, ACOG_CYCLE],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: 'Udflådet fortæller det',
      insight:
        'Det mest pålidelige daglige tegn på, at ægløsningen nærmer sig, er udflådet fra livmoderhalsen. Efter menstruationen er der ofte lidt eller intet. Når østrogen stiger, bliver det cremet og hvidligt, og i dagene lige før ægløsning bliver det klart, glat og strækbart, som rå æggehvide. Det er kroppen, der åbner døren for sædceller. Efter ægløsningen gør progesteron det tykt og klistret igen inden for et døgn eller to. Mange kvinder kender mønstret uden at have sat ord på det. Udflåd, der lugter stærkt, klør eller er grønligt, er noget andet og fortjener en læge. Det normale udflåd skifter bare i takt med hormonerne.',
      action:
        'Spørg, om hun lægger mærke til, at udflådet ændrer sig hen over cyklussen. Spørg nysgerrigt, ikke som en test.',
      phaseTags: ['follicular', 'ovulation'],
      sources: [NHS_DISCHARGE],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'Temperaturen bekræfter bagefter',
      insight:
        'Progesteron hæver kropstemperaturen 0,2-0,5 grader, og stigningen sker først efter ægløsningen. Måler hun temperaturen hver morgen, før hun står op, kan man se et skift: lavt i første halvdel, højt i anden. Metoden kaldes basaltemperatur. Den fortæller ikke, at ægløsningen kommer, men at den er sket. Det er nyttigt for at lære hendes mønster at kende og for at bekræfte, at cyklussen faktisk havde ægløsning. Feber, alkohol, dårlig søvn og sen sengetid forstyrrer målingen, så en enkelt dag siger ingenting. Det er hendes valg, om hun vil måle; det er en daglig indsats. Din rolle er at gøre det nemt, ikke at holde øje med tallene.',
      action:
        'Hvis hun måler temperatur: sørg for, at hun kan gøre det i ro om morgenen, uden at du starter en samtale eller tænder lyset.',
      phaseTags: ['luteal'],
      sources: [ACOG_FAB],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: 'Ægløsningssmerter',
      insight:
        'Omkring hver femte kvinde mærker ægløsningen som en smerte i den ene side af underlivet. Det kaldes mittelschmerz, tysk for "midtsmerte". Det kan være et kort jag eller en murren i timer, sjældent mere end et døgn, og typisk kun i den side, hvor ægløsningen sker den måned. Årsagen er sandsynligvis folliklens udspiling og lidt væske eller blod, der irriterer bughinden. Det er normalt og kræver sjældent andet end varme og eventuelt håndkøbsmedicin. Kraftig smerte, smerte med feber eller opkast, eller smerte, der varer flere dage, er noget andet og fortjener en læge. Lægger hun mærke til en fast smertedag i loggen, har I et pålideligt tegn.',
      action:
        'Spørg, om hun nogensinde mærker et jag i den ene side midt i cyklussen. Hvis ja, så foreslå at logge det som symptom i dag.',
      phaseTags: ['ovulation'],
      sources: [NHS_OVULATION_PAIN],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'Ægløsningstest',
      insight:
        'Ægløsningstest måler LH i urinen og viser positivt, når toppen kommer, typisk 24-36 timer før ægløsningen. De er den mest præcise hjemmemetode til at forudsige dagen. Man tester dagligt fra nogle dage før den forventede ægløsning, gerne midt på dagen, og mange skal bruge fem til ti stave pr. cyklus. Kvinder med PCOS kan have konstant forhøjet LH og få misvisende resultater. Testen viser, at kroppen forsøger, ikke at ægget faktisk frigives. Den er nyttig, hvis I ønsker graviditet, eller hvis hun vil lære sin cyklus at kende. Den er ikke prævention: når testen er positiv, er de mest frugtbare dage allerede i gang.',
      action:
        'Hvis hun bruger ægløsningstest: spørg, om du skal købe dem næste gang, så indkøbet ikke altid er hendes.',
      phaseTags: ['follicular', 'ovulation'],
      sources: [ACOG_FAB],
    },
    {
      id: dailyId(M, 10),
      month: M,
      day: 10,
      title: 'Lyst og testosteron',
      insight:
        'Kvinder producerer også testosteron, og det topper sammen med østrogen omkring ægløsningen. Kombinationen giver for mange mere lyst, mere fantasi og mere initiativ end på andre tidspunkter i måneden. Det er biologi, der arbejder for graviditet, uanset om den er ønsket. Det betyder ikke, at lysten kommer på bestilling. Træthed, stress, konflikt og børn, der vågner, slår hormonerne hver gang. Det betyder heller ikke, at lav lyst i lutealfasen er et problem, der skal løses. Det, du kan bruge det til, er at forstå rytmen og at være til rådighed uden at kræve. Nærhed, hun selv har taget initiativ til, er den bedste slags.',
      action:
        'Ryd plads i aften uden at annoncere det: ingen skærm, ingen planer. Lad hende vælge, hvad aftenen skal bruges til.',
      phaseTags: ['ovulation'],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'Selvtillid og socialt overskud',
      insight:
        'Østrogen påvirker hjernens belønningssystem og øger serotonin og dopamin. Omkring ægløsning beskriver mange, at de føler sig skarpere, mere udadvendte og mere selvsikre. Studier peger på, at kvinder taler lidt mere, klæder sig lidt anderledes og søger mere socialt samvær i dagene op til ægløsningen. Det er små effekter, ikke en personlighedsændring, men de er reelle. Det er et godt tidspunkt til fester, jobsamtaler og at møde nye mennesker. Det er også et tidspunkt, hvor hun kan have brug for at gøre noget uden dig. At hun har lyst til at se venner, er ikke et fravalg af dig. Det er overskud, der skal bruges.',
      action:
        'Sig ja til det sociale, hun foreslår i denne uge, eller foreslå selv, at hun ser venner, mens du tager hjemmefronten.',
      phaseTags: ['ovulation', 'follicular'],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: 'Et nej gælder også på toppen',
      insight:
        'Viden om lyst og hormoner kan misbruges. Hvis du har læst, at lysten topper ved ægløsning, og hun siger nej, er svaret stadig nej. Hormoner er en baggrund, ikke en forpligtelse, og intet skøn i en app fortæller, hvad hun har lyst til i dag. Det værste, appen kan gøre, er at gøre dig forventningsfuld på bestemte datoer. Det bedste, den kan gøre, er at gøre dig mere opmærksom og mindre personlig i afvisningen. Hun ser samme indhold som dig. Hvis hun oplever, at du regner med noget, fordi appen sagde det, mister I begge tilliden til den. Nærhed er noget, I finder sammen, ikke noget, kalenderen tildeler.',
      action:
        'Sig det højt til hende i dag: "Jeg bruger appen for at forstå dig bedre, ikke for at forvente noget." Og mén det.',
      phaseTags: ['ovulation'],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: 'Pletblødning midt i cyklussen',
      insight:
        'Nogle kvinder ser en let, lyserød eller brunlig pletblødning omkring ægløsning. Det skyldes formentlig det korte fald i østrogen lige efter LH-toppen, eller lidt blod fra folliklen. Det varer en dag eller to og er ufarligt. Det kan forveksles med starten på menstruationen, men timingen midt i cyklussen og den lille mængde afslører det. Pletblødning kan også komme fra andre ting: hormonel prævention, infektion, polypper eller blødning efter sex. Gentagne blødninger uden for menstruationen, kraftig blødning eller blødning efter sex fortjener en læge. En enkelt let pletblødning midt i cyklussen er sjældent noget. Det bedste er at logge det, så mønstret bliver synligt.',
      action:
        'Hvis hun nævner pletblødning: spørg roligt, hvornår i cyklussen det kom, og foreslå at notere det i kalenderen.',
      phaseTags: ['ovulation'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'Cyklusser uden ægløsning',
      insight:
        'Ikke alle cyklusser har ægløsning. Det kaldes en anovulatorisk cyklus, og det er almindeligt: i puberteten, efter fødsel, under amning, i årene før overgangsalderen, og af og til hos alle ved stress, sygdom, vægttab eller hård træning. Uden ægløsning dannes der ikke noget gult legeme og dermed ikke progesteron. Menstruationen kan stadig komme, men ofte forsinket, lettere eller kraftigere end normalt, og cyklussen bliver uregelmæssig. En enkelt anovulatorisk cyklus betyder intet. Bliver de hyppige, eller udebliver menstruationen i over tre måneder uden graviditet, er det en samtale med lægen værd. For dig betyder det: en cyklus, der ikke passer, er information, ikke en fejl.',
      action:
        'Hvis denne cyklus har været anderledes end forventet, så spørg, om der har været noget ekstra pres på, i stedet for at gætte.',
      phaseTags: [],
      sources: [NHS_IRREGULAR],
    },
    {
      id: dailyId(M, 15),
      month: M,
      day: 15,
      title: 'Stress udskyder ægløsningen',
      insight:
        'Hjernen styrer cyklussen gennem hypothalamus, og hypothalamus er også kroppens stresscenter. Ved længerevarende belastning, som sygdom, sorg, søvnmangel, rejser eller hårdt arbejdspres, dæmpes de signaler, der får folliklen til at modne. Ægløsningen udskydes, og fordi lutealfasen efter ægløsning er ret fast på 12-14 dage, kommer menstruationen tilsvarende senere. Stressen skal ligge i første halvdel af cyklussen for at flytte ægløsningen; efter ægløsning er det for sent. Det er kroppens klogskab, ikke svaghed. En sen menstruation efter en hård måned er normalt. Din bedste hjælp er at fjerne belastning i follikelfasen, hvor den betyder mest, ikke at bekymre dig om datoen.',
      action:
        'Find én belastning, du kan tage fra hende i denne uge, og gør det uden at nævne cyklussen.',
      phaseTags: ['follicular'],
      sources: [NHS_MISSED],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'Hvorfor appens dato er et skøn',
      insight:
        'Appen beregner ægløsning ved at trække cirka 14 dage fra den forventede næste menstruation, som igen bygger på gennemsnittet af hendes tidligere cyklusser. Det er den bedste metode uden målinger, men det er statistik. Undersøgelser viser, at kun et mindretal af kvinder med en 28-dages cyklus faktisk har ægløsning på dag 14; spredningen er stor, også hos kvinder med regelmæssige cyklusser. Appen kender ikke denne måneds stress eller sygdom. Derfor skal datoen læses som "cirka her, plus minus nogle dage". Hendes egne tegn, udflåd, smerte, test og temperatur, slår appen hver gang. Efterhånden som I logger cyklusser, bliver skønnet bedre, men det bliver aldrig en måling.',
      action:
        'Åbn indstillingerne og tjek, at cykluslængden bygger på hendes egne loggede cyklusser og ikke stadig står på standardtallet.',
      phaseTags: [],
      sources: [SUNDHED_DK],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'Der findes ikke sikre dage i en app',
      insight:
        'Det skal siges direkte: denne app er ikke prævention, og det er ingen kalender-app. Sæd lever fem dage, ægløsningen kan flytte sig en uge, og appen gætter ud fra fortiden. Selv den gamle kalendermetode med strenge regler har en typisk fejlrate, hvor omkring hver fjerde til femte bruger bliver gravid på et år. Ægløsningstest hjælper ikke som prævention, fordi de først viser positivt, når de frugtbare dage allerede er i gang. Vil I undgå graviditet, bruger I en rigtig metode. Vil I bruge fertilitetsbevidsthed, kræver det oplæring, daglige målinger og disciplin. Det handler ikke om tillid til hende. Det handler om biologi, der ikke kan forhandles.',
      action:
        'Sig til hende, at du ved, at appen ikke er prævention, og spørg, om jeres nuværende metode føles tryg for hende.',
      phaseTags: [],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'Fertilitetsbevidsthed: de ærlige tal',
      insight:
        'Fertilitetsbevidsthed, på engelsk fertility awareness methods, er en samlebetegnelse for metoder, hvor man undgår sex eller bruger kondom i det frugtbare vindue, bestemt ud fra temperatur, udflåd og cykluslængde. Følges de perfekt, er de bedste metoder over 95 procent effektive. Med typisk brug, hvor livet kommer i vejen, bliver mellem cirka 2 og over 20 ud af 100 kvinder gravide på et år, afhængigt af metoden. Til sammenligning: spiral og p-stav under 1. Metoderne kræver undervisning, daglig registrering og en partner, der respekterer de frugtbare dage uden diskussion. Det sidste er dit ansvar. Hvis I overvejer det, skal I lære det ordentligt, ikke fra en app.',
      action:
        'Hvis I bruger eller overvejer fertilitetsbevidsthed: aftal i dag, at det frugtbare vindue betyder kondom eller pause, og at du aldrig forhandler om det.',
      phaseTags: [],
      sources: [ACOG_FAB, NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 19),
      month: M,
      day: 19,
      title: 'Prævention er et fælles ansvar',
      insight:
        'I det frugtbare vindue bliver ansvar konkret. Hvis I bruger kondom, er det dit. Hvis hun tager p-piller, er de daglige bivirkninger hendes, men huskestøtte, lægebesøg og udgiften kan deles. Hvis I ikke ønsker flere børn, er sterilisation af manden et mindre indgreb end af kvinden. Ansvaret er ikke kun praktisk: det er også at kende hendes metode, vide hvad der sker, hvis en pille glemmes, og hvor nødprævention fås. Mange mænd kan ikke svare på, hvilken prævention deres partner bruger. Det er ikke ondt ment, men det placerer hele byrden ét sted. Denne måned er en god anledning til at flytte noget af den.',
      action:
        'Sig uden at slå op: hvilken prævention bruger I, og hvad gør I, hvis den svigter? Kan du ikke, så spørg i dag.',
      phaseTags: ['ovulation'],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 20),
      month: M,
      day: 20,
      title: 'Det, hun bærer',
      insight:
        'Hormonel prævention er effektiv, men den er ikke gratis for kroppen. Bivirkninger kan være humørændringer, lavere lyst, hovedpine, pletblødninger, ømme bryster og vægtændring, og hormonerne udjævner eller fjerner den naturlige cyklus, så meget af det, du lærer her, ser anderledes ud hos hende. Kobberspiral kan give kraftigere blødning, hormonspiral uregelmæssig blødning. Det er noget, hun lever med hver dag, ofte uden at nævne det. På p-piller er ægløsningen typisk helt undertrykt; så er den "top", appen viser, ikke rigtig. Spørg, hvordan hun har det med sin metode. Ikke for at ændre den, men for at vide, hvad den koster hende.',
      action:
        'Spørg i dag: "Er der noget ved din prævention, du er træt af?" Lyt, uden at foreslå løsninger med det samme.',
      phaseTags: [],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: 'Hvis I ønsker graviditet: timing uden stress',
      insight:
        'Ønsker I et barn, er rådet enkelt: sex hver anden til tredje dag gennem hele cyklussen rammer det frugtbare vindue uden at gøre det til et projekt. Vil I være mere målrettede, er de to-tre dage før ægløsning og dagen selv de vigtigste. Tegnene, æggehvideudflåd og positiv test, siger mere end appens dato. For raske par under 35 bliver omkring otte ud af ti gravide inden for et år; det tager tid, også når alt er normalt. Planlagt sex på dato slider på lysten hos begge. Har I forsøgt et år uden held, eller seks måneder hvis hun er over 35, fortjener I begge en undersøgelse. Omkring halvdelen af årsagerne findes hos manden.',
      action:
        'Hvis I prøver: sig i dag, at det er noget, I gør sammen, og at hun ikke skal være den, der holder styr på datoerne alene.',
      phaseTags: ['ovulation', 'follicular'],
      sources: [ACOG_INFERTILITY],
    },
    {
      id: dailyId(M, 22),
      month: M,
      day: 22,
      title: 'Hvis I ikke ønsker graviditet lige nu',
      insight:
        'De fleste par har ikke talt ordentligt om, hvad de ville gøre ved en uplanlagt graviditet. Det er en svær samtale, og den bliver ikke lettere med en positiv test i hånden. Et bedre tidspunkt er nu, i en rolig fase, uden akut anledning. Det handler ikke om at beslutte alt, men om at kende hinandens udgangspunkt: hvad ville hun tænke, hvad ville du, hvad ville I have brug for. Samtalen gør prævention til noget, I deler, og fjerner den stille frygt, mange bærer hver måned frem mod menstruationen. Nødprævention virker bedst så hurtigt som muligt, og kobberspiral kan sættes op inden for fem dage. Det er værd at vide, før der er brug for det.',
      action:
        'Tag samtalen i dag, i fem minutter: "Hvad ville vi gøre, hvis du blev gravid nu?" Lyt mere, end du taler.',
      phaseTags: [],
      sources: [NHS_CONTRACEPTION],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'Lutealfasen bekræfter ægløsningen',
      insight:
        'Efter ægløsningen bliver den tomme follikel til det gule legeme, der producerer progesteron. Det er progesteron, der bekræfter, at ægløsningen er sket: temperaturen stiger, udflådet tørrer ind, og hun bliver ofte roligere og mere indadvendt. Lutealfasen varer 12-14 dage, uanset cykluslængde, fordi det gule legeme har en fast levetid. Er den kortere end 10 dage over flere cyklusser, kan det gøre det sværere at blive gravid og er værd at nævne for en læge. Skiftet fra ægløsningens udadvendte energi til lutealfasens ro kan komme brat. Det er ikke, at hun er blevet træt af dig. Det er progesteron, der har taget over.',
      action:
        'Læg mærke til dagen, hvor energien skifter fra udadvendt til rolig, og notér den i kalenderen. Efter tre cyklusser ser I et mønster.',
      phaseTags: ['luteal'],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 24),
      month: M,
      day: 24,
      title: 'Menstruationen fortæller om ægløsningen',
      insight:
        'Menstruationen er en kvittering. En regelmæssig blødning, der kommer 12-14 dage efter tegnene på ægløsning, betyder, at cyklussen havde ægløsning og fungerede. Under blødningen er begge hormoner i bund, men allerede nu begynder hypofysen at sende FSH, der starter modningen af næste cyklus follikler. Næste ægløsning begynder altså sådan set på dag 1. Meget uregelmæssige blødninger, meget lange cyklusser eller helt udeblevne menstruationer peger ofte på, at ægløsningen er uregelmæssig eller mangler. Det er ikke farligt i sig selv, men det er information, som en læge kan bruge, især hvis I ønsker børn. Registrér blødningens start, så cyklussen kan regnes ud.',
      action:
        'Har hun menstruation nu: tjek, at dag 1 er logget, og spørg, om denne cyklus føltes, som den plejer.',
      phaseTags: ['menstrual'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 25),
      month: M,
      day: 25,
      title: 'Når ægløsningen bliver væk',
      insight:
        'Flere tilstande påvirker ægløsningen direkte. PCOS, polycystisk ovariesyndrom, rammer omkring hver tiende kvinde og giver ofte sjældne eller udeblevne ægløsninger, lange cyklusser, hudproblemer og øget hårvækst. Stofskiftesygdom, meget lav vægt, hård træning og højt prolaktin kan også stoppe ægløsningen. Efter fødsel og under amning er den ofte fraværende i måneder, og i årene før overgangsalderen bliver den uregelmæssig. Fælles for dem alle: cyklussen bliver uregelmæssig eller stopper. Kommer menstruationen sjældnere end hver 35. dag, eller udebliver den i tre måneder uden graviditet, fortjener det en læge. Du skal ikke stille diagnosen. Du skal være den, der siger, at det er værd at undersøge, og som tager med.',
      action:
        'Kig i kalenderen: har de seneste cyklusser ligget inden for 21-35 dage? Hvis ikke, så foreslå roligt en lægetid, og tilbyd at tage med.',
      phaseTags: ['menstrual'],
      sources: [NHS_PCOS, NHS_MISSED],
    },
    {
      id: dailyId(M, 26),
      month: M,
      day: 26,
      title: 'Nærhed uden agenda',
      insight:
        'Ægløsningens dage er for mange cyklussens bedste tid til nærhed, men nærhed er mere end sex. Det er at sidde tæt, gå en tur, tale om andet end logistik, blive set. Det, der oftest ødelægger nærheden, er en agenda: at aftenen skal ende et bestemt sted. Hun mærker det, og det skifter stemningen fra samvær til forhandling. Paradoksalt nok kommer den fysiske nærhed lettere, når den ikke er målet. Brug ægløsningens overskud til at være sammen på en måde, hvor begge kan slappe af. Det bygger den tillid, der gør, at nærheden også findes i lutealfasen, hvor hormonerne ikke hjælper til.',
      action:
        'Foreslå en gåtur eller en aften uden skærm i dag, og gør det tydeligt, at det ikke skal føre til noget.',
      phaseTags: ['ovulation'],
    },
    {
      id: dailyId(M, 27),
      month: M,
      day: 27,
      title: 'Log tegnene sammen',
      insight:
        'Appen bliver først rigtig nyttig, når tegnene logges: udflåd, ægløsningssmerte, lyst, energi, pletblødning, eventuelt test og temperatur. Efter tre-fire cyklusser kan I se, hvor mange dage efter menstruationen tegnene typisk kommer, og hvor godt appens skøn passer. Det gør appen til hendes egen i stedet for en generisk model. Logningen skal være hendes, fordi det er hendes krop og hendes observationer, men du kan gøre den nem: spørge kort, huske det, hun har sagt, og aldrig bruge loggen mod hende. "Du loggede jo selv, at du havde lyst i tirsdags" er den hurtigste vej til, at loggen stopper.',
      action:
        'Spørg, om der er ét tegn, hun gerne vil logge i denne cyklus, og aftal, at det er hendes data, ikke dit argument.',
      phaseTags: ['follicular', 'ovulation'],
    },
    {
      id: dailyId(M, 28),
      month: M,
      day: 28,
      title: 'Når krop og app er uenige',
      insight:
        'Før eller siden siger appen ét og kroppen noget andet. Appen forudsiger ægløsning på dag 14, men æggehvideudflådet kommer først på dag 19. Eller hun mærker jaget, mens appen stadig viser follikelfasen. Kroppen har ret. Appen bygger på gennemsnit og kender ikke denne måned. Det bedste, du kan gøre, er at stole på hende frem for skærmen og at lade uoverensstemmelsen være information: cyklussen var måske længere denne gang, og så kommer menstruationen senere. Hvis du insisterer på appens dato, gør du hende til den, der tager fejl om sin egen krop. Læs appen som en vejrudsigt: nyttig, men det, man ser ud ad vinduet, vinder.',
      action:
        'Hvis appen og hendes tegn er uenige i denne cyklus, så sig det højt: "Din krop ved det bedre end appen." Og justér forventningen til næste menstruation.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 29),
      month: M,
      day: 29,
      title: 'Hendes krop, hendes viden',
      insight:
        'Du har lært meget om ægløsning i denne måned. Den største faldgrube er nu at forklare hende hendes egen krop. Mange kvinder har fulgt deres cyklus i årevis uden at bruge ordene LH eller gult legeme, og de ved præcist, hvordan det føles. Din viden er nyttig, når den bruges til at spørge bedre, huske mere og handle, før hun beder om det. Den er skadelig, når den bliver til rettelser eller til forventninger om, hvad hun bør mærke på bestemte dage. Nogle mærker aldrig ægløsningen, og det er også normalt. Målet er ikke, at du ved mere end hende. Målet er, at hun ikke længere er alene om at vide det.',
      action:
        'Fortæl hende én ting, du har lært denne måned, og spørg, om det passer med hendes oplevelse. Ret ikke hendes svar.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 30),
      month: M,
      day: 30,
      title: 'Måned 5: det har du lært',
      insight:
        'Ægløsning er én dag, og det frugtbare vindue er de fem dage før plus selve dagen. LH-toppen udløser den, ægget lever et døgn, sæd lever fem dage. Kroppen viser tegn: æggehvideudflåd før, temperaturstigning efter, for nogle en smerte i siden eller en let pletblødning. Lyst, energi og selvtillid topper ofte, men et nej gælder altid. Stress udskyder ægløsningen, ikke alle cyklusser har én, og appens dato er et skøn, aldrig prævention. Prævention og fertilitet er fælles ansvar, og fertilitetsbevidsthed er en rigtig metode med rigtige krav, ikke en kalender. Vigtigst: viden skal bruges til at spørge, lægge mærke til og hjælpe, ikke til at forvente.',
      action:
        'Skriv tre ting ned, du vil gøre anderledes omkring ægløsningen fra næste cyklus, fortæl hende dem, og tag månedens quiz.',
      phaseTags: [],
    },
  ],
  weekly: [
    {
      id: weeklyId(M, 1),
      month: M,
      week: 1,
      title: 'Ægløsning i detaljer: fra LH-top til gult legeme',
      body: [
        'Måned 1 gav dig grundmodellen: ægløsningen er cyklussens midtpunkt, og den ligger cirka 14 dage før næste menstruation. Denne artikel går et lag dybere. Ikke fordi du skal blive biolog, men fordi detaljerne forklarer, hvorfor tegnene kommer, hvornår de kommer, og hvorfor appens dato kun kan være et skøn.',
        'Det begynder på dag 1. Mens hun bløder, sender hypofysen FSH, follikelstimulerende hormon, til æggestokkene, og en gruppe på 10-20 små follikler begynder at vokse. Hver follikel rummer et æg. I løbet af den første uge bliver én dominerende, og resten går til grunde. Den dominerende follikel producerer stadigt mere østrogen, og det er den stigning, der giver follikelfasens energi, og som får livmoderslimhinden til at vokse igen.',
        'Når østrogen har ligget højt i et par døgn, sker der noget usædvanligt: hjernen, som ellers dæmper sig selv ved højt østrogen, gør det modsatte og sender en brat bølge af LH, luteiniserende hormon. LH-toppen varer typisk et døgn. Den får folliklen til at færdigmodne ægget, svække sin væg og briste. 24-36 timer efter toppen frigives ægget og opfanges af æggelederen. Det er ægløsningen. Den mærkes sjældent som en begivenhed; for de fleste er det, de mærker, dagene før (udflåd, lyst, energi) og dagene efter (temperatur, ro).',
        'Ægget lever 12-24 timer. Sædceller lever op til fem dage i det tynde, glatte slim, som østrogen får livmoderhalsen til at producere lige før ægløsningen. Læg de to sammen, og du har det frugtbare vindue: de fem dage før ægløsning plus selve dagen. Chancen er størst de to-tre dage lige før. Dagen efter ægløsning er graviditet meget usandsynlig, men fordi ingen ved præcis, hvornår ægløsningen var, før den er overstået, kan man ikke regne baglæns i realtid.',
        'Den tomme follikel bliver til det gule legeme, corpus luteum, der producerer progesteron. Progesteron hæver temperaturen, gør slimet tykt igen, får slimhinden til at modne og dæmper humøret til noget roligere. Det gule legeme lever 12-14 dage. Bliver ægget ikke befrugtet, dør det, hormonerne falder, og menstruationen kommer. Bliver det befrugtet, holder graviditetshormonet hCG det gule legeme i live. Det er derfor, lutealfasen er så stabil i længde, og derfor appen regner ægløsning baglæns fra menstruationen: det er første halvdel, der varierer.',
        'Og den varierer meget. Undersøgelser af tusindvis af cyklusser viser, at ægløsning på dag 14 kun rammer et mindretal, selv hos kvinder med regelmæssige 28-dages cyklusser. Ægløsning mellem dag 10 og dag 20 er almindeligt, og samme kvinde kan variere flere dage fra måned til måned. Stress, sygdom og rejser forsinker ægløsningen, fordi de dæmper hjernens signaler til æggestokkene. Og nogle cyklusser har slet ingen ægløsning; så kommer menstruationen ofte forsinket og anderledes.',
        'Det er grunden til, at appens dato er et skøn. Den bygger på gennemsnittet af hendes tidligere cyklusser og på, at lutealfasen er cirka 14 dage. Det er den bedst mulige beregning uden målinger, men den kender ikke denne måned. Hendes egne tegn, som næste uges artikel handler om, er altid mere præcise. Og ingen af delene, hverken app eller tegn, er prævention.',
        'Det, du kan tage med fra biologien, er tre ting. Ægløsning er én dag. Det frugtbare vindue ligger før den, ikke efter. Og hendes bedste dage, energimæssigt, er ofte dagene op til ægløsningen, hvor østrogen topper, ikke den dag, appen markerer. Kender du de tre, forstår du det meste af det, der sker midt i cyklussen.',
      ],
      conversationQuestion:
        'Kan du mærke, hvornår du har ægløsning, og hvordan passer det med den dag, appen viser?',
      sources: [ACOG_CYCLE, SUNDHED_DK, NHS_PERIODS],
    },
    {
      id: weeklyId(M, 2),
      month: M,
      week: 2,
      title: 'Kroppens tegn: sådan læser I dem sammen',
      body: [
        'Appen gætter. Kroppen ved. Denne uge handler om de fire tegn, der fortæller, hvor hun er i forhold til ægløsningen: udflåd, temperatur, smerte og ægløsningstest. Ingen af dem er perfekte alene, men tilsammen giver de et billede, der er langt mere præcist end nogen beregning. Og det er hendes tegn. Din rolle er at kende dem, spørge om dem og gøre det nemt at logge dem, ikke at overvåge.',
        'Udflåd fra livmoderhalsen er det tegn, der er nemmest at følge dagligt. Lige efter menstruationen er der ofte lidt eller ingenting, og det føles tørt. Når østrogen stiger, kommer der mere, først cremet og hvidligt. I de sidste dage før ægløsning bliver det klart, glat og strækbart som rå æggehvide; det kan strækkes mellem to fingre uden at briste. Det er slim, der er designet til at holde sædceller i live og lede dem frem. Den sidste dag med æggehvideudflåd ligger typisk samme dag som eller dagen før ægløsning. Efter ægløsning gør progesteron det tykt, klistret og sparsomt inden for et døgn eller to. Udflåd, der lugter stærkt, klør eller er grøn-gult, er noget andet og fortjener en læge.',
        'Basaltemperatur er hviletemperaturen, målt hver morgen på samme tid, før hun står op, med et termometer med to decimaler. I første halvdel af cyklussen ligger den lavt. Efter ægløsning hæver progesteron den med 0,2-0,5 grader, og den bliver oppe, til menstruationen kommer. Skiftet bekræfter ægløsningen bagefter; det forudsiger den ikke. Målingen forstyrres af feber, alkohol, dårlig søvn, sen sengetid og rejser, så en enkelt dag siger intet. Det er kurven over tre-fire cyklusser, der er værdifuld. Det er en daglig indsats, og det er hendes valg, om hun vil gøre den. Vil hun, kan du hjælpe ved at holde morgenen rolig, indtil hun har målt.',
        'Ægløsningssmerte, mittelschmerz, mærkes af omkring hver femte kvinde. Et jag eller en murren i den ene side af underlivet, typisk i timer, sjældent over et døgn. Det kommer omkring folliklens bristning, så det er et rimeligt præcist tegn, hvis hun har det. Kraftig smerte, smerte med feber eller opkast, eller smerte over flere dage er noget andet. Nogle ser også en let pletblødning midt i cyklussen; det er normalt, hvis det er sparsomt og kort, men gentagne blødninger uden for menstruationen fortjener en læge.',
        'Ægløsningstest måler LH i urinen. Positiv test betyder, at LH-toppen er i gang, og at ægløsningen typisk kommer 24-36 timer senere. De er den mest præcise hjemmemetode til at forudsige dagen. De kræver daglig test fra nogle dage før forventet ægløsning, helst midt på dagen, og de kan være misvisende hos kvinder med PCOS, som ofte har konstant forhøjet LH. Vigtigt: testen viser, at kroppen forsøger at få ægløsning, ikke at ægget frigives. Og den er ikke prævention: når den er positiv, er de mest frugtbare dage allerede i gang.',
        'Sæt tegnene sammen, og de fortæller en historie. Æggehvideudflåd og positiv test siger "snart". Smerten siger "nu". Temperaturstigningen og det tørre udflåd siger "overstået". Logget over tre-fire cyklusser afslører de, hvor mange dage efter menstruationen hendes ægløsning typisk kommer, og hvor godt appens skøn passer. Det er sådan, appen holder op med at være en generisk model og bliver hendes.',
        'To ting til dig. For det første: hun ser samme indhold, og hun har måske fulgt sine tegn i årevis uden at bruge ordene. Spørg, før du forklarer. For det andet: loggen er hendes. Den er værdifuld, fordi hun ejer den. Hvis hun oplever, at du bruger den til at forvente noget, holder hun op med at logge, og det er ikke hendes fejl. Hjælp ved at gøre det nemt, huske, hvad hun har sagt, og handle på det praktiske: varme ved ægløsningssmerte, ro om morgenen, indkøb af test, hvis I bruger dem.',
      ],
      conversationQuestion:
        'Hvilke tegn på ægløsning lægger du selv mærke til, og er der nogen af dem, du gerne vil have, at jeg kender?',
      sources: [NHS_DISCHARGE, NHS_OVULATION_PAIN, ACOG_FAB],
    },
    {
      id: weeklyId(M, 3),
      month: M,
      week: 3,
      title: 'Lyst, nærhed og et nej, der gælder',
      body: [
        'Omkring ægløsning topper østrogen, og en smule testosteron følger med. For mange kvinder giver det mere lyst, mere initiativ, mere selvtillid og mere lyst til socialt samvær. Det er biologi, der arbejder for graviditet, uanset om den er ønsket. Og det er den del af cyklussen, hvor flest partnere laver den samme fejl: at læse et hormonmønster som et løfte.',
        'Lad os tage mekanismen først. Østrogen øger serotonin og dopamin i hjernen, hvilket giver energi, motivation og godt humør. Testosteron, som kvinder også producerer i små mængder, topper omkring ægløsningen og hænger sammen med lyst og initiativ. Studier peger på små, men målbare ændringer i dagene op til ægløsning: kvinder taler mere, søger mere samvær, føler sig mere attraktive. Det er ikke en personlighedsændring; det er den samme person med lidt mere overskud. I lutealfasen dæmper progesteron ofte lysten, og i PMS-dagene og de første menstruationsdage er kroppen typisk mest lukket. Nogle oplever det stik modsat, og det er også normalt.',
        'Det, mønstret kan bruges til, er at forstå. Lav lyst dag 24 handler sjældent om dig. Høj lyst dag 13 er ikke noget, du har fortjent. Når du kender rytmen, holder du op med at tage det personligt begge veje, og det er en stor lettelse for et forhold. Det, mønstret ikke kan bruges til, er at forvente. Hormoner er en baggrund. Træthed, stress, en konflikt fra i går, børn, arbejde og hvordan hun har det med sin krop lige nu, trumfer baggrunden hver eneste gang.',
        'Så her er reglen, og den er ikke til forhandling: et nej gælder, også på lystens top. Hvis du har læst, at lysten topper omkring ægløsning, og hun siger nej, er svaret nej. Ikke "nej, men appen sagde". Ikke en sur stilhed. Ikke et "hvorfor ikke?". Bare nej, og så en anden god aften. Hun ser præcis samme indhold, som du gør. Hvis hun oplever, at du regner med noget, fordi appen sagde det, bliver appen til pres, og så mister I begge det, den skulle give jer. Nærhed, hun selv har taget initiativ til, er den bedste slags, og den kommer kun, hvis hun er sikker på, at et nej er gratis.',
        'Nærhed er også mere end sex. Ægløsningens dage er for mange den bedste tid i cyklussen til at være sammen: gå en tur, tale om andet end logistik, grine, planlægge noget. Det, der oftest ødelægger nærheden, er en agenda, altså at aftenen skal ende et bestemt sted. Hun mærker det, og stemningen skifter fra samvær til forhandling. Paradoksalt kommer den fysiske nærhed lettere, når den ikke er målet. Så brug overskuddet til at være sammen på en måde, hvor begge kan slappe af. Det bygger tilliden, der gør, at nærheden også findes i lutealfasen, hvor hormonerne ikke hjælper til.',
        'Ægløsningens overskud er heller ikke kun til jer to. Det er et godt tidspunkt for hende til at se venner, gå til noget, sige ja til noget socialt. At hun har lyst til at gøre noget uden dig, er ikke et fravalg af dig. Det er energi, der skal bruges, og den bedste gave er at tage hjemmefronten, mens hun bruger den.',
        'Til sidst: hvis lysten er væk over lang tid, i alle faser, er det værd at tale om og eventuelt nævne for en læge. Hormonel prævention, antidepressiv medicin, søvnmangel, smerter ved sex og stress kan alle dæmpe lysten, og meget af det kan der gøres noget ved. Men det er en samtale, ikke en fejlsøgning, og den begynder med "hvordan har du det?", ikke med "du plejede at".',
      ],
      conversationQuestion:
        'Hvordan mærker du selv, at din lyst skifter hen over cyklussen, og hvad gør det lettest for dig at sige nej uden at føle, du skal forklare dig?',
      sources: [ACOG_CYCLE],
    },
    {
      id: weeklyId(M, 4),
      month: M,
      week: 4,
      title: 'Fertilitetsbevidsthed og fælles ansvar',
      body: [
        'Det frugtbare vindue er der, uanset hvad I ønsker. For nogle par er det en mulighed, for andre en risiko, for de fleste begge dele i forskellige perioder af livet. Denne artikel handler om det, der ligger mellem viden og handling: hvordan man rent faktisk bruger cyklussen, hvad metoderne kan og ikke kan, og hvorfor ansvaret aldrig er hendes alene.',
        'Først det, appen ikke er. Den er ikke prævention. Den forudsiger ægløsning ud fra gennemsnit, sæd lever fem dage, og ægløsningen kan flytte sig en uge på grund af en forkølelse. Selv den gamle kalendermetode, hvor man regner på cykluslængder efter faste regler, har en typisk fejlrate, hvor omkring hver fjerde til femte bruger bliver gravid i løbet af et år. En app, der viser et vindue, er endnu mindre end det. Ægløsningstest hjælper heller ikke som prævention; de viser først positivt, når de mest frugtbare dage allerede er i gang.',
        'Så er der fertilitetsbevidsthed, på engelsk fertility awareness methods. Det er en samlebetegnelse for metoder, hvor kvinden hver dag registrerer tegn, typisk basaltemperatur og udflåd, eventuelt kombineret med cykluslængde, og hvor parret undgår sex eller bruger kondom i det frugtbare vindue. Med perfekt brug er de bedste metoder over 95 procent effektive. Med typisk brug, hvor målinger glemmes, tegn tolkes forkert og regler bøjes, bliver mellem cirka 2 og over 20 ud af 100 kvinder gravide på et år, afhængigt af metoden og af, hvor godt den er lært. Til sammenligning bliver under 1 ud af 100 gravide med spiral eller p-stav. Metoderne kræver oplæring, helst af en uddannet underviser, daglig registrering, nogenlunde regelmæssige cyklusser og en partner, der respekterer de frugtbare dage uden diskussion. Det sidste punkt er hele forskellen mellem perfekt og typisk brug, og det er dit.',
        'Ønsker I graviditet, vender billedet. Så er rådet enkelt: sex hver anden til tredje dag gennem cyklussen rammer vinduet uden at gøre det til et projekt. Vil I være mere målrettede, er de to-tre dage før ægløsning og selve dagen vigtigst, og æggehvideudflåd og positiv test siger mere end appens dato. For raske par bliver omkring otte ud af ti gravide inden for et år; det tager tid, også når alt er normalt. Har I prøvet et år uden held, eller seks måneder hvis hun er over 35, fortjener I begge en undersøgelse. Omkring halvdelen af årsagerne til ufrivillig barnløshed findes helt eller delvist hos manden, så undersøgelsen er også din.',
        'Så ansvaret. Hvis I bruger kondom, er det dit. Hvis hun bruger hormonel prævention, bærer hun bivirkningerne hver dag: humør, lyst, hovedpine, pletblødninger, og ofte en cyklus, der er helt anderledes end den, du har lært om her. Det, du kan tage, er alt det udenom: at kende metoden, huske, hvad man gør, hvis en pille glemmes, vide, hvor nødprævention fås, tage med til lægen, dele udgiften, købe test og kondomer, og når familien er komplet, at overveje sterilisation af manden, som er et mindre indgreb end af kvinden. Mange mænd kan ikke sige, hvilken prævention deres partner bruger. Det er ikke ondt ment, men det lægger hele byrden ét sted.',
        'Og så er der samtalen, de fleste par springer over: hvad ville vi gøre, hvis hun blev gravid nu? Den er svær, og den bliver ikke lettere med en positiv test i hånden. Tag den i en rolig fase, uden akut anledning, ikke for at beslutte alt, men for at kende hinandens udgangspunkt. Den samtale gør prævention til noget, I deler, og fjerner den stille frygt, mange bærer alene hver måned frem mod menstruationen.',
        'Kort sagt: appen er til forståelse, ikke prævention. Fertilitetsbevidsthed er en rigtig metode med rigtige krav og rigtige fejlrater, ikke en kalender. Fertilitet og prævention er fælles, i praksis og ikke kun i princippet. Og den bedste måde at vise det på er ikke at sige det, men at tage en konkret opgave, der hidtil har været hendes.',
      ],
      conversationQuestion:
        'Hvilken del af ansvaret for prævention eller fertilitet ligger hos dig lige nu, som jeg kunne tage over eller dele?',
      sources: [NHS_CONTRACEPTION, ACOG_FAB, ACOG_INFERTILITY],
    },
  ],
  wrap: {
    id: wrapId(M),
    month: M,
    title: 'Måned 5: Ægløsning',
    summary: [
      'Denne måned gik under overfladen på cyklussens midtpunkt. LH-toppen udløser ægløsningen 24-36 timer senere, ægget lever et døgn, sædceller op til fem dage, og det giver et frugtbart vindue på seks dage, der ligger før ægløsningen. Kroppen viser tegn: æggehvideudflåd og positiv test før, temperaturstigning og tørt udflåd efter, og for nogle en smerte i siden eller en let pletblødning.',
      'Du har lært, at lyst, energi og selvtillid ofte topper i dagene op til ægløsning, og at et nej alligevel gælder uden forklaring. At stress udskyder ægløsningen, at ikke alle cyklusser har én, og at appens dato er et skøn, som hendes tegn altid slår. At der ikke findes sikre dage i en app, at fertilitetsbevidsthed er en rigtig metode med rigtige krav og fejlrater, og at prævention og fertilitet er fælles ansvar i praksis, ikke kun i princippet.',
      'Næste måned handler om lutealfasen: progesteron, søvn, appetit og den rolige, indadvendte tid efter ægløsningen, hvor det handler om at sænke forventninger og øge omsorg.',
    ],
    keepDoing: [
      'Stol på hendes tegn frem for appens dato, og sig det højt, når de er uenige.',
      'Gør det nemt at logge udflåd, smerte og test, og brug aldrig loggen som argument.',
      'Respektér et nej uden forklaring, også midt i cyklussen.',
      'Kend jeres prævention, og tag en konkret del af ansvaret, der hidtil har været hendes.',
      'Fjern belastning i follikelfasen, hvor stress betyder mest for ægløsningen.',
    ],
    quiz: [
      {
        question:
          'Appen viser ægløsning i dag, men hun siger, at hun mærkede jaget i siden for tre dage siden. Hvad er mest hjælpsomt?',
        options: [
          'Forklare, at appen nok har ret, fordi den regner på gennemsnit',
          'Stole på hendes tegn og justere forventningen til næste menstruation',
          'Foreslå, at hun tager en ægløsningstest for at afgøre det',
          'Ikke sige noget og vente på næste cyklus',
        ],
        correctIndex: 1,
        explanation:
          'Kroppen har ret. Appens dato er et skøn ud fra tidligere cyklusser; hendes tegn er en observation af denne. Insisterer du på appen, gør du hende til den, der tager fejl om sin egen krop.',
      },
      {
        question: 'I ønsker ikke graviditet lige nu. Hvad kan appens frugtbare vindue bruges til?',
        options: [
          'Til at finde sikre dage, hvor I kan droppe kondom',
          'Til at forstå hendes krop og tale om jeres prævention, aldrig som prævention',
          'Til at vide, hvornår ægløsningstest skal bruges som sikkerhed',
          'Ingenting, det er kun relevant, hvis man vil have børn',
        ],
        correctIndex: 1,
        explanation:
          'Sæd lever fem dage, og ægløsningen kan flytte sig en uge. Appen gætter ud fra fortiden og er aldrig prævention. Vinduet er til forståelse og til samtalen om fælles ansvar.',
      },
      {
        question: 'Det er midt i cyklussen, og hun siger nej til sex. Hvad gør du?',
        options: [
          'Nævner, at lysten jo plejer at være høj nu',
          'Bliver stille og lidt sur resten af aftenen',
          'Siger "helt fint" og foreslår en gåtur eller en rolig aften i stedet',
          'Spørger, om hun mon har PMS',
        ],
        correctIndex: 2,
        explanation:
          'Et nej gælder, også på lystens top. Hormoner er en baggrund, ikke et løfte. Nærhed kommer lettest, når hun er sikker på, at et nej er gratis.',
      },
      {
        question:
          'Menstruationen er ti dage forsinket efter en måned med sygdom og arbejdspres. Hvad er den bedste reaktion?',
        options: [
          'Sige, at det er underligt, og bekymre dig højlydt',
          'Spørge roligt, om der har været pres på, og lade en graviditetstest afgøre resten, hvis det er relevant',
          'Ændre cykluslængden i appen, så datoen passer',
          'Antage, at appen er gået i stykker',
        ],
        correctIndex: 1,
        explanation:
          'Stress og sygdom i første halvdel af cyklussen udskyder ægløsningen, og menstruationen følger 12-14 dage efter. En sen menstruation efter en hård måned er normalt; en test giver ro, hvis der er tvivl.',
      },
      {
        question:
          'I overvejer fertilitetsbevidsthed som prævention. Hvad er mest hjælpsomt fra din side?',
        options: [
          'Sige, at appen allerede viser det frugtbare vindue, så det er nok',
          'Lade hende stå for det, det er jo hendes krop',
          'Lære metoden ordentligt sammen og aftale, at de frugtbare dage betyder kondom eller pause uden diskussion',
          'Bruge ægløsningstest som ekstra sikkerhed i vinduet',
        ],
        correctIndex: 2,
        explanation:
          'Forskellen mellem perfekt og typisk brug er, om reglerne følges hver gang, og det er partnerens ansvar lige så meget som hendes. Appen og ægløsningstest er ikke prævention.',
      },
      {
        question:
          'Hendes cyklusser har været 45-60 dage lange i et halvt år. Hvad er mest hjælpsomt?',
        options: [
          'Sige, at det da er rart med færre menstruationer',
          'Foreslå roligt en lægetid, fordi det kan betyde uregelmæssig ægløsning, og tilbyde at tage med',
          'Vente et år og se, om det retter sig',
          'Fortælle hende, at det lyder som PCOS',
        ],
        correctIndex: 1,
        explanation:
          'Cyklusser over 35 dage over flere måneder peger ofte på uregelmæssig eller manglende ægløsning. Det fortjener en læge, ikke en diagnose fra dig, og at tage med er konkret støtte.',
      },
    ],
  },
};
