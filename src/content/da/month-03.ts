import type { MonthContent, Source } from '../types';
import { dailyId, weeklyId, wrapId } from '../types';

const NHS_PERIODS: Source = {
  label: 'NHS: Periods',
  url: 'https://www.nhs.uk/conditions/periods/',
};
const NHS_PAIN: Source = {
  label: 'NHS: Period pain',
  url: 'https://www.nhs.uk/conditions/period-pain/',
};
const NHS_HEAVY: Source = {
  label: 'NHS: Heavy periods',
  url: 'https://www.nhs.uk/conditions/heavy-periods/',
};
const NHS_ENDO: Source = {
  label: 'NHS: Endometriosis',
  url: 'https://www.nhs.uk/conditions/endometriosis/',
};
const NHS_IRON: Source = {
  label: 'NHS: Iron deficiency anaemia',
  url: 'https://www.nhs.uk/conditions/iron-deficiency-anaemia/',
};
const NHS_TSS: Source = {
  label: 'NHS: Toxic shock syndrome',
  url: 'https://www.nhs.uk/conditions/toxic-shock-syndrome/',
};
const NHS_FIBROIDS: Source = {
  label: 'NHS: Fibroids',
  url: 'https://www.nhs.uk/conditions/fibroids/',
};
const NHS_IRREGULAR: Source = {
  label: 'NHS: Irregular periods',
  url: 'https://www.nhs.uk/conditions/irregular-periods/',
};
const ACOG_DYSMENORRHEA: Source = {
  label: 'ACOG: Dysmenorrhea: Painful Periods',
  url: 'https://www.acog.org/womens-health/faqs/dysmenorrhea-painful-periods',
};
const ACOG_HEAVY: Source = {
  label: 'ACOG: Heavy Menstrual Bleeding',
  url: 'https://www.acog.org/womens-health/faqs/heavy-menstrual-bleeding',
};
const SUNDHED_DK: Source = {
  label: 'Sundhed.dk: Menstruationscyklus',
  url: 'https://www.sundhed.dk/borger/patienthaandbogen/kvindesygdomme/om-kvindesygdomme/menstruationscyklus/',
};

const M = 3;

export const month03: MonthContent = {
  month: M,
  theme: 'Menstruationsfasen',
  focus:
    'Smerte, træthed og blødning: praktisk hjælp, varme, ro, og hvad du skal lade være med at sige, mens du står der med varmepuden.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'Denne måned: de dage, hvor det er sværest',
      insight:
        'I måned 1 lærte du, at menstruationen er dag 1-5, at hormonerne er i bund, og at varme virker. Tillykke, du kan nu det, de fleste glemte lige efter 7. klasse. Denne måned går vi i dybden. Menstruationen er den fase, hvor hun har mest brug for konkret hjælp og mindst overskud til at bede om den. Det, du gør her, bliver husket. Det, du ikke gør, bliver desværre husket endnu bedre. Vi skal igennem kramper og smertestillende, kraftig blødning og jern, produkterne i skabet, søvn, arbejde, sex, humør og de sætninger, der aldrig hjælper. Målet er ikke, at du bliver ekspert. Målet er, at hendes næste menstruation bliver lidt lettere end den sidste, fordi du for en gangs skyld vidste, hvad der skulle til.',
      action:
        'Se i appen, hvornår næste menstruation forventes, og skriv datoen ind i din egen kalender. Overraskelse er ikke en strategi.',
      phaseTags: [],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: 'Kramper: hvad der egentlig sker',
      insight:
        'Livmoderen er en muskel. Ikke et begreb, en muskel, ligesom din lægmuskel, bare med et vigtigere job. Når slimhinden skal ud, frigives prostaglandiner, som får muskelvæggen til at trække sig sammen i bølger. Under kraftige sammentrækninger klemmes blodkarrene i væggen, så musklen kortvarigt mangler ilt. Det er den dybe, murrende eller jagende smerte, hun mærker. Prostaglandiner går også ud i blodet og forklarer, hvorfor nogle samtidig får kvalme, løs mave og hovedpine. Smerten er typisk værst de første 24-48 timer, hvor der frigives mest prostaglandin, og aftager derefter. Den kan stråle ud i lænden og ned i lårene. Det er ikke indbildning eller lav smertetærskel. Det er en muskel, der arbejder hårdt uden nok ilt. Husk, hvordan dine lår havde det efter dit sidste løb. Nu i to døgn, indefra, uden medalje.',
      action:
        'Fortæl hende, at du nu ved, hvorfor kramperne stråler ud i lænd og lår, og spørg, hvor det plejer at sidde hos hende.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN, ACOG_DYSMENORRHEA],
    },
    {
      id: dailyId(M, 3),
      month: M,
      day: 3,
      title: 'Smertestillende: timing slår dosis',
      insight:
        'Ibuprofen og naproxen hæmmer dannelsen af prostaglandiner. De virker derfor bedst, når de tages ved de allerførste tegn eller den dag, blødningen forventes, før smerten er bygget op. Tages de, når smerten er på toppen, skal de først indhente alt det prostaglandin, der allerede er i blodet. Det svarer til at sætte en røgalarm op, mens køkkenet brænder. De skal tages med mad, og pakkens maksimumdosis må ikke overskrides. Har hun astma, mavesår eller nyreproblemer, skal hun spørge apoteket eller lægen, om ibuprofen er okay. Paracetamol er et alternativ, som også kan kombineres. Din rolle er ikke at dosere. Du er hverken apoteket eller lægen, uanset hvor meget du har læst i aften. Din rolle er at sørge for, at pillerne er i huset og inden for rækkevidde, når dag 1 kommer.',
      action:
        'Tjek, at det smertestillende, hun plejer at bruge, er i huset og ikke udløbet. Læg det et sted, hun kan nå uden at rejse sig.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'Varme: hvordan og hvor',
      insight:
        'Varme på maven eller lænden afslapper livmoderens muskelvæg og øger blodgennemstrømningen, så musklen får den ilt, den mangler. I studier virker vedvarende varme omtrent lige så godt som ibuprofen, og de to kan kombineres. Det praktiske betyder noget. Varmen skal ligge på nedre mave eller lænd, ikke på brystkassen, og den skal holde i 20-30 minutter ad gangen. En varmedunk med håndklæde om, en elektrisk varmepude, et varmt bad eller bruseren direkte på lænden virker alle. Varmeplastre til huden kan bruges på arbejde. Det, der oftest fejler, er ikke metoden. Det er, at varmepuden ligger bagerst i et skab bag juledekorationerne, og at ingen henter den. Den har en ledning. Din bedste ven i dag er en stikkontakt.',
      action:
        'Læg varmepuden eller varmedunken frem synligt, gerne ved sofaen eller sengen, så den er klar, uden at nogen skal lede.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'Hvile eller bevægelse? Begge dele',
      insight:
        'To ting virker mod kramper, og de lyder som modsætninger: hvile og bevægelse. Let bevægelse, som en gåtur, forsigtig udstrækning eller cykling i roligt tempo, øger blodgennemstrømningen til underlivet og frigiver endorfiner, kroppens egne smertestillende. Hård træning på dag 1 er derimod for meget for de fleste, så lad være med at foreslå den løbetur, du selv har udskudt i tre uger. Hvile virker, fordi smerte og blodtab trætter, og fordi stress spænder muskler op. Kunsten er at tilbyde begge uden at presse. En gåtur rundt om blokken, hvis hun har lyst, ellers sofaen. Det er hende, der mærker, hvad kroppen har brug for i dag. Du mærker ingenting, og det er helt i orden. Din opgave er at gøre begge dele lette at vælge.',
      action:
        'Tilbyd en kort gåtur sammen, og gør det tydeligt, at et nej er lige så godt et svar som et ja.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: '"Menstruationsinfluenza" er en rigtig ting',
      insight:
        'Mange kvinder beskriver dagene lige før og omkring dag 1 som at være ved at få influenza: ømme muskler, kuldegysninger, tung hovedpine, kvalme, træthed ned i knoglerne. Det kaldes populært menstruationsinfluenza. Det er ikke en diagnose og ikke en infektion, men symptomerne er ægte. Forklaringen er formentlig, at prostaglandiner går fra livmoderen ud i blodet og påvirker hele kroppen, samtidig med at østrogen og progesteron rammer bunden. Det aftager typisk, når blødningen er i gang. Egentlig feber hører ikke med; feber er noget andet og skal tages alvorligt. Det vigtigste for dig er at vide, at hun ikke er "bare lidt træt", men reelt sløj. Tænk på, hvordan du selv opfører dig med en forkølelse. Det er omtrent det niveau af omsorg, der forventes. Bare uden at nogen har bedt om det.',
      action:
        'Spørg, om hun kender følelsen af at være influenzaramt op til menstruationen. Behandl de dage, som du ville behandle en forkølet partner.',
      phaseTags: ['luteal', 'menstrual'],
      sources: [NHS_PAIN],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'Kraftig blødning: hvad det er',
      insight:
        'Hvor meget er for meget? Du kan ikke vurdere det udefra, og du skal heller ikke prøve. Lægerne bruger konkrete tegn: bind eller tampon skal skiftes hver time eller hver anden time i flere timer, blødning gennem tøj eller sengetøj, behov for to produkter samtidig, klumper større end en 2-krone, blødning over 7 dage, eller at hun må stå op om natten for at skifte. Det kaldes kraftig menstruation og rammer omkring hver fjerde kvinde. Årsagen kan være hormonel, fibromer eller polypper, eller sjældnere en blødningsforstyrrelse. Det kan behandles med alt fra tranexamsyre til hormonspiral. Mange lever med det i årevis, fordi de tror, at deres normale er alles normale. Du ser det udefra, og det gør din stemme værdifuld. Brug den roligt, og brug den kun én gang ad gangen.',
      action:
        'Læs tegnene på listen, og spørg roligt, om hun genkender nogen af dem. Hvis ja, så foreslå en tid hos lægen.',
      phaseTags: ['menstrual'],
      sources: [NHS_HEAVY, ACOG_HEAVY],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: 'Jern: mere end en bøf',
      insight:
        'Blodtab er jerntab, og kraftige menstruationer er den mest almindelige årsag til jernmangel hos kvinder i den fødedygtige alder. Tegnene er træthed, der ikke forsvinder med søvn, åndenød på trapper, blege læber, hjertebanken, hovedpine og kolde hænder. Det ligner almindelig travlhed, og derfor bliver det overset. Jern fra kød, fisk og æg optages bedst. Jern fra linser, bønner, havregryn og grønne blade optages bedre med C-vitamin til, og dårligere med kaffe, te eller mælk lige ved måltidet. Så nej, du løser det ikke ved at stege en bøf med et stolt udtryk i ansigtet. Jerntilskud skal ikke tages i blinde. En blodprøve hos lægen viser, om der er behov, og for meget jern er heller ikke sundt. Din opgave er at lægge mærke til tegnene, ikke at stille diagnosen ved komfuret.',
      action:
        'Læg mærke til, om hun er usædvanligt træt og forpustet uden for menstruationen. Hvis ja, så foreslå en blodprøve i stedet for at gætte.',
      phaseTags: ['menstrual', 'follicular'],
      sources: [NHS_IRON, NHS_HEAVY],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'Bind: hvad de forskellige er til',
      insight:
        'Bind kommer i mange varianter, og forskellen er ikke pynt. Trusseindlæg er til pletblødning og de sidste dage. Normale bind er til almindelige dage, og "super" eller "natbind" er længere og tykkere til kraftige dage og til natten, hvor man ligger ned, og blodet løber bagud. Vinger holder bindet på plads. Genanvendelige stofbind vaskes og bruges igen. Et bind skiftes typisk hver 4-6 timer og oftere på kraftige dage, ikke primært af hygiejnegrunde, men fordi det bliver ubehageligt. Hvis du ved, hvilken type og størrelse hun bruger, kan du købe ind uden at spørge. Hvis du ikke ved det, ender du foran hylden med telefonen i hånden og skriver "hvilken en var det nu?" til en, der ligger med kramper. Det er en overraskende stor lettelse for mange, når du bare ved det.',
      action:
        'Tag et billede af den pakke, hun bruger, så du har mærke og størrelse på telefonen, næste gang du handler.',
      phaseTags: [],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 10),
      month: M,
      day: 10,
      title: 'Tamponer og de 8 timer',
      insight:
        'Tamponer sidder inde i skeden og suger blodet op, før det kommer ud. De kommer i sugeevner fra "mini" til "super plus", og reglen er at bruge den mindste sugeevne, der rækker, og skifte hver 4-8 timer. En tampon må aldrig sidde over 8 timer, og det er derfor, mange bruger bind om natten. Grunden er toksisk shocksyndrom, TSS, en meget sjælden, men alvorlig bakterieinfektion. Tegnene er pludselig høj feber, influenzalignende symptomer, udslæt som solskoldning, svimmelhed og forvirring. Kommer det under menstruation med tampon, er det akut lægehjælp. Du behøver ikke at være bange for tamponer. Du behøver heller ikke at forstå, hvordan de sidder; det klarer hun fint uden dig. Men du skal kende det ene tegn, som ikke må overses. Det er en af de få ting i denne app, du skal lære udenad.',
      action:
        'Læg to sætninger på hukommelsen: "Højst 8 timer" og "høj feber med tampon = læge nu". Sig dem til hende, hvis hun ikke kender dem.',
      phaseTags: [],
      sources: [NHS_TSS, NHS_PERIODS],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'Kop og menstruationstrusser',
      insight:
        'Menstruationskoppen er en lille, blød silikonekop, der sidder i skeden og opsamler blodet i stedet for at suge det op. Den kan sidde i op til 8-12 timer, tømmes, skylles og bruges igen i årevis. Den gør det også let at se, hvor meget hun faktisk bløder, hvilket er nyttigt, hvis lægen spørger. Menstruationstrusser er undertøj med et indbygget sugende lag, som vaskes og genbruges; de bruges alene på lette dage og som backup på kraftige dage og om natten. Begge dele kræver, at der er varmt vand, sæbe og en vask, hun kan bruge i ro. Hvis hun bruger kop, er det ikke pinligt, at den ligger til tørre på badeværelset. Det er ikke en genstand, du skal stirre på, flytte eller spørge ind til. Den er der, ligesom din tandbørste. Gå videre.',
      action:
        'Sørg for, at badeværelset er ryddet og har sæbe, rent håndklæde og en fri vask. Det er den praktiske støtte til både kop og bind.',
      phaseTags: [],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: 'Det, der skal være i huset',
      insight:
        'Det meste af den praktiske hjælp handler om, at de rigtige ting er der, før de skal bruges. Listen er kort: hendes produkter i den type og størrelse, hun bruger, med en reserve til de kraftige dage; smertestillende, der ikke er udløbet; en varmedunk eller varmepude, der virker; nem mad med jern i, der kan laves på ti minutter; et mørkt håndklæde til sengen; og vaskemiddel til pletter. Hertil noget, hun selv har lyst til: bestemt te, chokolade, en serie. Det tager en halv time at samle, og det gør dag 1 til en helt anden dag. Hemmeligheden er at gøre det i follikel- eller lutealfasen. Ikke den morgen, hun vågner med kramper, og du står i døren med jakken halvt på og spørger, om Netto mon har åbnet.',
      action:
        'Gå listen igennem i dag, og fyld op, hvor der mangler. Skriv de ting ned, du ikke ved, hvad hun foretrækker, og spørg.',
      phaseTags: ['luteal'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: 'Blodpletter er hverdag, ikke katastrofe',
      insight:
        'Der kommer blod på tøj, sengetøj og en sjælden gang på sofaen. Det sker for stort set alle, oftest om natten eller på de kraftige dage, og det kan være pinligt og stressende, hvis omgivelserne reagerer. Omgivelserne er dig. Den praktiske del: skyl pletten i koldt vand så hurtigt som muligt, aldrig varmt, for varme får blodet til at sætte sig fast. Vask derefter almindeligt. En ekstra madras- eller lagenbeskytter og et mørkt håndklæde under hende om natten tager bekymringen. Den vigtigste del er dog din reaktion. Et lagen kan vaskes. Dit ansigtsudtryk kan ikke trækkes tilbage. Det, der bliver husket, er ikke pletten. Det er, om du sukkede, eller om du bare skiftede lagnet, som var det en helt almindelig tirsdag.',
      action:
        'Læg et mørkt håndklæde ved sengen, og hvis der er en plet: skyl i koldt vand og skift uden en kommentar.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'Søvn i de første nætter',
      insight:
        'Søvnen er ofte dårligst nat 1 og 2. Kramperne vækker hende, hun bekymrer sig for at bløde igennem, kropstemperaturen skifter, når progesteron forsvinder, og smerte gør den dybe søvn kortere. Dårlig søvn forstærker så smerte og humør næste dag. Det, der hjælper, er praktisk: smertestillende taget en halv time før sengetid, hvis hun bruger det; varme på lænden, når hun lægger sig; natbind, kop eller menstruationstrusser, så hun tør sove igennem; et mørkt håndklæde; og fred til at gå tidligt i seng uden at blive spurgt, om hun er sur. Hun går i seng klokken 21. Det er ikke en kommentar til dig. Det er klokken 21. Nogle sover bedst i fosterstilling eller med en pude under knæene, som aflaster lænden. Den pude kan du godt finde. Det er lige dit niveau.',
      action:
        'Foreslå tidlig sengetid i aften, og gør soveværelset klar: varmepude, vand og en ekstra pude til at lægge under knæene.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN],
    },
    {
      id: dailyId(M, 15),
      month: M,
      day: 15,
      title: 'Sex under menstruationen: hendes valg',
      insight:
        'Sex under menstruationen er sikkert, og der er ikke noget uhygiejnisk ved det. Nogle kvinder har mere lyst i de dage, andre slet ingen, og begge dele er normale. For nogle lindrer orgasme kramperne, fordi livmoderen afspændes bagefter. Hvis I begge har lyst, gør et mørkt håndklæde og en tur i badet det praktiske let. To ting skal I vide: graviditet er stadig mulig, fordi sæd lever op til fem dage, og korte cyklusser kan have ægløsning tæt på blødningens slutning; og kønssygdomme smitter lettere med blod. Den vigtigste regel er dog enkel: det er hendes krop, hendes smerte og hendes valg, og et nej kræver ingen forklaring. Hvis du står og venter på forklaringen, er det dig, der har misforstået opgaven. Opgaven er at sige det højt, før spørgsmålet overhovedet opstår.',
      action:
        'Sig det højt, uden for situationen: "Nærhed i de dage er helt op til dig, og du behøver ikke forklare et nej." Og mén det.',
      phaseTags: ['menstrual'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'Humøret dag 1-2: lettelse og tomhed',
      insight:
        'Når blødningen begynder, forsvinder PMS-symptomerne typisk inden for et døgn, fordi hormonerne er holdt op med at falde. Mange mærker en lettelse: tårerne sidder ikke løst længere, verden er mindre skarp. Samtidig er energien i bund, smerten på toppen, og humøret kan blive fladt, stille eller tomt snarere end irriteret. Hun kan virke fjern eller kort for hovedet, uden at der er noget galt mellem jer. Det er ikke noget, du har gjort. Det er sjældent noget, du har gjort, men det er en anden samtale. Det, der hjælper, er at lade hende være i fred uden at trække sig: være i samme rum, tage det praktiske, ikke kræve samtale. Fra dag 3-4 stiger østrogen igen, og humøret følger med op, ofte mærkbart fra den ene dag til den anden. Du skal ikke gøre noget for at få det til at ske. Du skal bare ikke ødelægge det imens.',
      action:
        'Hvis hun er stille i dag, så spørg ikke "er der noget galt?". Sæt dig ved siden af hende med noget, du selv laver, og lad roen være nok.',
      phaseTags: ['menstrual'],
      sources: [SUNDHED_DK],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'Det, du ikke skal sige',
      insight:
        'Nogle sætninger gør mere skade end tavshed, og du har sikkert sagt mindst én af dem. "Er det virkelig så slemt?" fortæller hende, at du tvivler. "Min ekskæreste havde ikke så ondt" sammenligner en smerte, du ikke kan måle, og nævner din ekskæreste, hvilket aldrig har hjulpet nogen. "Du er så følsom i dag" gør hendes menstruation til et karaktertræk. "Har du taget en pille?" som første replik lyder som "hold op med at have ondt". Vittigheder om blod og humør lander aldrig dag 1, uanset hvor tætte I er, og uanset hvor sjov du synes, du er. Og "det er jo bare menstruation" er den værste, fordi den normaliserer noget, der måske ikke er normalt. Det, der virker i stedet, er kort og konkret: "Det ser ud til at gøre ondt. Skal jeg hente varmen?" Færre ord, mere varme. Bogstaveligt.',
      action:
        'Find den sætning på listen, du selv er kommet tættest på, og beslut dig for, hvad du siger i stedet næste gang.',
      phaseTags: ['menstrual'],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'Menstruation på arbejde',
      insight:
        'De fleste kvinder arbejder, som om intet er hændt, mens de har kramper, blødning og lav energi. Det koster. Møder, der ikke kan flyttes, toiletter, der er langt væk, uniformer i lyse farver og lange transporttider gør dag 1 og 2 til en logistisk øvelse oven i smerten. Kun få taler om det på jobbet, og mange tager smertestillende på tidspunkter, der passer til kalenderen frem for til kroppen. Til sammenligning har du meldt dig syg med en lidt tung hovedpine. Det, du kan gøre, ligger uden om arbejdstiden: en rolig morgen, en madpakke, der er lavet, at hun ikke også skal hente børn eller handle på vej hjem, og at aftenen ikke kræver noget af hende. Du kan ikke tage kramperne med på arbejde. Du kan tage resten, og resten er faktisk ret meget.',
      action:
        'Hvis hun skal på arbejde med menstruation i dag eller i morgen: tag én af hendes opgaver før eller efter arbejdstid, uden at annoncere det.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 19),
      month: M,
      day: 19,
      title: 'Sociale planer: flyt dem uden drama',
      insight:
        'Middage, fester, ture og familiebesøg lander tit på dag 1 eller 2, fordi ingen havde kalenderen fremme, da aftalen blev lavet. Nu har du den. Det er hele pointen med appen, så brug den til andet end at kigge. Når appen forventer menstruation, er det bedste, du kan gøre, at holde de to første dage lette, og det næstbedste er at være den, der aflyser eller flytter, når det bliver nødvendigt. Ikke med "hun har det ikke så godt", som får folk til at spørge, og ikke med hendes menstruation som forklaring, medmindre hun selv vil dele det. Det er hendes oplysning, ikke din samtaleåbner. "Vi må flytte det, kan vi finde en anden dag?" er nok. Hun skal ikke stå med både kramperne og de sociale forhandlinger. Forhandlingerne kan du klare. Kramperne kan du ikke.',
      action:
        'Kig i kalenderen på de to dage, hvor menstruationen forventes. Ligger der noget tungt, så spørg hende, om du skal flytte det.',
      phaseTags: ['menstrual', 'luteal'],
    },
    {
      id: dailyId(M, 20),
      month: M,
      day: 20,
      title: 'Hovedpine, kvalme og løs mave',
      insight:
        'Kramper er ikke det eneste, prostaglandiner laver. Fordi de går ud i blodet, kan de påvirke tarmen, så mange får løs mave, oppustethed eller kvalme dag 1 og 2. Nogle får omvendt forstoppelse i dagene før. Hovedpine er også almindelig, både fordi østrogen falder brat, og fordi blodtab, dårlig søvn og for lidt væske trækker samme vej. Menstruationsmigræne er en kendt undertype, som rammer i dagene omkring dag 1 og kan være hårdere end almindelig migræne. Det, der hjælper, er enkelt: vand, regelmæssig mad, det smertestillende hun plejer, mørke og ro. Og at hun ikke skal forklare, hvorfor hun løber på toilettet. Du skal ikke spørge, hvad der skete derinde. Du skal fylde vandflasken og lade være med at se spørgende ud. Det sidste er sværere, end det lyder.',
      action:
        'Fyld en flaske vand, og sæt den ved hende. Lav noget let at spise, som ikke belaster maven, for eksempel havregrød, ris eller toast.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN, SUNDHED_DK],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: 'Dag 3-5: skiftet kommer',
      insight:
        'De fleste mærker en tydelig forandring fra omkring dag 3. Blødningen bliver lettere og mørkere, kramperne forsvinder eller bliver til en svag murren, og østrogen er begyndt at stige, så energi og humør vender langsomt tilbage. Det er ikke en kontakt, der bliver tændt, men en kurve, og den kan variere fra måned til måned. Så lad være med at sige "nå, så er du frisk igen" på dag 3. Du gætter, og du gætter højt. Det er derimod et godt tidspunkt at lægge mærke til, hvad der hjalp de første dage, mens det er frisk i hukommelsen. Blev varmen brugt? Var der noget, der manglede? Blev noget sagt, der ikke skulle være sagt, og var det dig? Det, I finder ud af nu, bliver næste måneds plan.',
      action:
        'Spørg hende: "Hvad var det mest hjælpsomme, jeg gjorde de sidste dage, og hvad manglede?" Skriv svaret i en note i kalenderen, også hvis det stikker lidt.',
      phaseTags: ['menstrual', 'follicular'],
      sources: [SUNDHED_DK],
    },
    {
      id: dailyId(M, 22),
      month: M,
      day: 22,
      title: 'Brug de gode dage til at forberede de svære',
      insight:
        'Follikelfasen er, hvor der er overskud, og det er derfor det bedste tidspunkt at gøre menstruationen lettere. Ikke fordi hun skal bekymre sig om den, men fordi forberedelse er nemt nu og svært på dag 1. Du har sikkert prøvet at købe julegaver den 24. om formiddagen. Samme princip. Køb ind til lageret. Vask varmedunken, og tjek, at den ikke lækker. Læg mærke til, hvilken mad hun faktisk spiste, da hun havde det dårligst, og skriv det bag øret. Tal om, hvad hun bruger af produkter, og om hun har lyst til at prøve noget andet. Og tag en rolig snak om, hvor slemt det plejer at være, nu hvor smerten ikke er til stede, og samtalen kan foregå, uden at hun skal forsvare sig, og uden at du står med en varmepude og ser nervøs ud.',
      action:
        'Gør én ting i dag, som gør næste dag 1 lettere: køb ind, læg varmen klar, eller sæt en påmindelse to dage før forventet menstruation.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'Smerte og pletter midt i cyklussen',
      insight:
        'Ikke al smerte og blødning hører til menstruationen. Omkring ægløsningen mærker nogle et jag eller en murren i den ene side af underlivet, fra få minutter til et døgn eller to. Det kaldes ægløsningssmerte og er ufarligt; det skyldes, at folliklen brister og frigiver lidt væske. Enkelte får også lidt pletblødning midt i cyklussen, når østrogen dykker kortvarigt efter ægløsning. Det er værd at kende, så du ikke står med appen i hånden og meddeler, at menstruationen er kommet tre uger for tidligt. Det er den ikke. Appen ved det godt. Det er dig, der ikke gør. Er smerten derimod kraftig, varer den flere dage, eller kommer der egentlig blødning midt i cyklussen, så er det ikke noget, I skal forklare selv. Det fortjener en læge.',
      action:
        'Hvis hun nævner ondt i den ene side midt i cyklussen: tilbyd varme og en note i kalenderen, så I kan se, om det gentager sig.',
      phaseTags: ['ovulation'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 24),
      month: M,
      day: 24,
      title: 'Uregelmæssig, udeblevet eller for tæt',
      insight:
        'Cyklussen må gerne variere nogle dage fra gang til gang. Det er ikke appen, der er i stykker, og det er ikke noget, du skal regne ud i et regneark. Men der findes mønstre, der fortjener en læge: menstruation, der konsekvent kommer oftere end hver 21. dag eller sjældnere end hver 35., blødning, der varer over 7 dage, blødning mellem menstruationerne eller efter sex, eller menstruation, der udebliver i tre måneder uden graviditet. Årsagerne spænder fra stress, vægtændring og hård træning til PCOS, stofskiftet og perimenopause. Langt de fleste er ufarlige, men flere kan behandles, og udeblevet menstruation over lang tid påvirker knoglerne. Appens kalender gør mønstret synligt. Det er en af de bedste grunde til at logge, også når alt er normalt, og også når du synes, det er kedeligt.',
      action:
        'Åbn kalenderen, og se på de sidste loggede cyklusser sammen. Er der noget, der stikker ud, så foreslå, at hun nævner det for lægen.',
      phaseTags: [],
      sources: [NHS_IRREGULAR, NHS_PERIODS],
    },
    {
      id: dailyId(M, 25),
      month: M,
      day: 25,
      title: 'Når smerten er ud over det normale',
      insight:
        'Almindelige menstruationssmerter aftager med varme og håndkøbsmedicin og forsvinder efter et par dage. Smerter, der ikke reagerer på det, der giver sygedage hver måned, der kommer uden for menstruationen, ved sex, ved toiletbesøg, eller sammen med meget kraftig blødning, kan være tegn på endometriose, adenomyose eller fibromer. Endometriose rammer omkring 1 ud af 10, og der går i gennemsnit mange år fra første symptom til diagnose, fordi smerten normaliseres af alle, inklusive hende selv. Du kan ikke vide, hvad det er, og det skal du heller ikke. Luk fanen med søgeresultaterne. Du skal være den, der siger: "Det her er ikke noget, du bare skal holde ud", og som mener det. Det er ikke en stor sætning. Den er bare sjældent blevet sagt.',
      action:
        'Spørg, om hun nogensinde har talt med en læge om sine smerter. Hvis ikke, og de slår hende ud, så tilbyd at booke tiden og tage med.',
      phaseTags: ['menstrual'],
      sources: [NHS_ENDO, NHS_FIBROIDS],
    },
    {
      id: dailyId(M, 26),
      month: M,
      day: 26,
      title: 'Sådan bakker du op ved lægen',
      insight:
        'Et lægebesøg om menstruationssmerter eller blødning bliver bedre af forberedelse, og det er noget, du kan hjælpe med. Læger spørger typisk: hvor mange dage bløder du, hvor ofte skifter du på de værste dage, hvor stærk er smerten fra 1 til 10, hvor sidder den, hvad har du prøvet, og forhindrer det dig i noget? Appens kalender og noter er præcis den slags svar. Skriv de tre vigtigste punkter ned før tiden, og hjælp hende med at holde fast i dem, hvis samtalen glider. Din rolle derinde er ikke at forklare lægen, hvad prostaglandiner er. Lægen ved det. Din rolle er at være den, der har set det udefra og kan sige "hun har måttet melde sig syg tre måneder i træk". Det bliver taget alvorligt. Mere, end det burde, men sådan er det.',
      action:
        'Tilbyd at hjælpe med at skrive tre punkter ned til næste lægebesøg, ud fra det I kan se i kalenderen. Tilbyd at tage med, hvis hun vil.',
      phaseTags: [],
      sources: [NHS_HEAVY, NHS_PAIN],
    },
    {
      id: dailyId(M, 27),
      month: M,
      day: 27,
      title: 'To dage før: gør klar',
      insight:
        'Når appen siger, at menstruationen forventes om et par dage, begynder den praktiske del. Nu er det ikke længere lager, men logistik: Er de næste to dage rimeligt tomme? Er der nem mad i køleskabet, og er det mad, ikke en halv agurk og tre slags sennep? Ligger varmen fremme, og er pillerne inden for rækkevidde? Har hun produkter i tasken til arbejde? Er der et mørkt håndklæde ved sengen? Det er også nu, at smertestillende kan begynde at gøre nytte, hvis hun plejer at have stærke smerter, og lægen har sagt god for det: mange tager den første dosis ved allerførste tegn, og nogle allerede den dag, blødningen forventes. Det er hendes beslutning. Din er at gøre alt det andet klar, uden at holde tale om det.',
      action:
        'Gå de fem ting igennem i dag: kalender, mad, varme, smertestillende, produkter i tasken. Fyld op, og læg frem.',
      phaseTags: ['luteal'],
      sources: [NHS_PAIN],
    },
    {
      id: dailyId(M, 28),
      month: M,
      day: 28,
      title: 'Den lille omsorg, der bliver husket',
      insight:
        'Det er sjældent de store gestusser, der bliver husket fra en menstruation. Ingen har nogensinde sagt "husker du den buket, han kom slæbende med på dag 1?". Det er de små: en kop te, der bare står der, et tæppe, der bliver lagt over, at fjernbetjeningen ligger ved hende, at du tog opvasken uden at nævne det, at du ikke spurgte "hvad skal vi lave i aften", men bare sagde "jeg laver noget nemt". Fælles for dem er, at de ikke kræver et svar. Hun skal ikke sige tak, ikke vælge, ikke forklare. Hvis du er i tvivl om, hvad hun vil have, så vælg den mindste ting og gør den. Omsorg uden spørgsmål er den letteste at tage imod, når energien er væk. Omsorg med en forventning om ros er bare en opgave mere.',
      action:
        'Gør én lille ting i dag uden at spørge og uden at nævne det: te, tæppe, opvask, en lampe, der bliver tændt. Vent ikke på tak.',
      phaseTags: ['menstrual'],
    },
    {
      id: dailyId(M, 29),
      month: M,
      day: 29,
      title: 'Hendes egen plan',
      insight:
        'Alt i denne måned er generelle råd. Hendes menstruation er specifik, og hun er ikke et gennemsnit i en artikel. Nogle vil have varme og selskab, andre vil have mørke og ro. Nogle vil gerne have en hånd på lænden, andre kan ikke holde ud at blive rørt. Nogle bliver glade for, at du husker datoen, andre synes, det er for meget. Du kan ikke gætte dig til det, og du har sikkert allerede prøvet. Den eneste måde at finde ud af det på er at spørge, når hun har det godt, og at skrive svaret ned. Tre spørgsmål er nok: Hvad hjælper mest de første dage? Hvad skal jeg lade være med? Hvad skal jeg gøre uden at spørge? Svarene er hendes plan, og den slår enhver artikel, inklusive denne.',
      action:
        'Stil de tre spørgsmål i dag, og skriv svarene i en note i appen, så du kan finde dem, når næste menstruation kommer.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 30),
      month: M,
      day: 30,
      title: 'Måned 3: det har du lært',
      insight:
        'Du ved nu, hvorfor kramper gør ondt, og at varme og smertestillende taget tidligt er de to ting, der virker bedst. Du kender tegnene på kraftig blødning og jernmangel, og du ved, at begge fortjener en blodprøve frem for et gæt fra dig. Du kender forskellen på bind, tamponer, kop og menstruationstrusser og reglen om 8 timer. Du ved, at menstruationsinfluenza er ægte, at humøret dag 1-2 er fladt snarere end skarpt, at sex er hendes valg, og at smerte, der slår hende ud, fortjener en læge. Vigtigst: du ved, at det meste af hjælpen er praktisk, stille og gjort på forhånd. Du er med andre ord blevet en mand, der ved, hvor varmepuden ligger. Det er mere, end det lyder. Næste måned handler om det modsatte: overskuddet i follikelfasen.',
      action:
        'Fortæl hende de tre ting fra denne måned, du vil holde fast i. Tag så månedens quiz.',
      phaseTags: [],
    },
  ],
  weekly: [
    {
      id: weeklyId(M, 1),
      month: M,
      week: 1,
      title: 'Kramper: hvad der sker, og hvad der virker',
      body: [
        'Menstruationssmerter er så almindelige, at de næsten ikke tæller som et symptom. Mere end halvdelen af alle, der menstruerer, har smerter i nogle dage hver måned, og for omkring hver tiende er de så kraftige, at de forstyrrer hverdagen. Alligevel ved de færreste partnere, hvad der egentlig sker, og hvorfor de simple råd virker. De fleste har en teori. Den er som regel forkert. Det er denne artikel til.',
        'Livmoderen er en muskel, og når slimhinden skal afstødes, frigiver den prostaglandiner, stoffer der får muskelvæggen til at trække sig sammen i bølger. Sammentrækningerne klemmer blodkarrene i væggen, så musklen kortvarigt mangler ilt, og det er den dybe, sugende eller jagende smerte. Jo mere prostaglandin, jo kraftigere kramper; kvinder med stærke smerter har målbart højere niveauer. Det er altså ikke "forskellig smertetærskel", som du måske har hørt dig selv sige. Det er forskellig kemi. Prostaglandinerne går også ud i blodet og forklarer kvalme, løs mave, hovedpine og den influenzaagtige sløjhed, mange mærker. Smerten er typisk værst de første 24-48 timer og kan stråle ud i lænd og lår.',
        'Behandlingen følger mekanismen. Ibuprofen og naproxen hæmmer dannelsen af prostaglandiner, og det er derfor, timing betyder mere end dosis: taget ved de allerførste tegn, eller den dag blødningen forventes, forhindrer de smerten i at bygge op. Taget på toppen af smerten skal de først indhente det, der allerede er i blodet. De tages med mad, aldrig over pakkens maksimum, og har hun astma, mavesår eller nyreproblemer, skal apoteket eller lægen spørges først. Paracetamol er et alternativ og kan kombineres. Hormonel prævention, især p-piller og hormonspiral, dæmper for mange smerten markant, fordi slimhinden bliver tyndere. Det er en samtale med lægen, ikke et råd fra dig. Du har læst én artikel. Lægen har læst resten.',
        'Varme er det andet ben. Vedvarende varme på nedre mave eller lænd afslapper muskelvæggen og øger blodgennemstrømningen, så musklen får ilt. I studier virker det omtrent lige så godt som ibuprofen, og de to kan kombineres. Det skal være 20-30 minutter ad gangen: varmedunk, elektrisk varmepude, varmt bad eller varmeplaster på arbejde. Let bevægelse, som en gåtur eller forsigtig udstrækning, frigiver endorfiner og hjælper flere, end man skulle tro, mens hård træning dag 1 er for meget for de fleste. TENS, små elektriske impulser på huden, virker for nogle og kan lånes eller købes billigt. Hvile virker, fordi smerte og blodtab trætter. Ingen af delene er avancerede. Det avancerede er at få dem frem, før nogen beder om det.',
        'Hvad betyder det for dig? At det meste kan gøres klar på forhånd, og at "på forhånd" betyder i går, ikke om ti minutter. Smertestillende, der ikke er udløbet, inden for rækkevidde. Varmen frem, synligt, så ingen skal lede. En kalender, der er let de to første dage. Og en holdning, der siger: jeg tvivler ikke på, at det gør ondt. Din vigtigste sætning er ikke "har du taget en pille?", som lyder som "hold op med at have ondt", men "det ser ud til at gøre ondt, skal jeg hente varmen?". Den første er et spørgsmål, hun skal svare på. Den anden er en handling med et spørgsmålstegn bagpå.',
        'Til sidst grænsen, og her holder vi op med at være sjove. Almindelige menstruationssmerter reagerer på varme og håndkøbsmedicin og forsvinder efter et par dage. Smerter, der ikke gør, der giver sygedage hver måned, der kommer uden for menstruationen, ved sex eller toiletbesøg, eller sammen med meget kraftig blødning, kan være endometriose, adenomyose eller fibromer, og de kan behandles. Det er ikke din opgave at vide hvilken. Det er din opgave at være den, der ikke normaliserer det, og som siger: det her fortjener en læge.',
      ],
      conversationQuestion:
        'Hvor stærke er dine kramper typisk på en skala fra 1 til 10, og hvad har du prøvet, der faktisk virker? Er der noget, du gerne vil have, jeg gør anderledes de første dage?',
      sources: [NHS_PAIN, ACOG_DYSMENORRHEA, NHS_ENDO],
    },
    {
      id: weeklyId(M, 2),
      month: M,
      week: 2,
      title: 'Blødning, jern og det, der skal være i skabet',
      body: [
        'Blødningen er den del af menstruationen, der er mest synlig og mindst omtalt. Hvor meget er normalt, hvad gør blodtabet ved kroppen, og hvad skal der egentlig være i badeværelsesskabet? Her er det, du skal vide for at kunne hjælpe uden at skulle spørge om alt. Og uden at ringe hjem fra hylden med bind, som var det en gidselforhandling.',
        'Den samlede blodmængde over en menstruation er typisk 30-40 ml, men det kan føles som langt mere, fordi blodet blandes med slimhinde og væske. Blødningen er ofte kraftigst dag 1 og 2 og bliver lettere og mørkere mod slutningen. Klumper er normale, især om morgenen, når blodet har samlet sig. Grænsen for kraftig menstruation er cirka 80 ml, men ingen står med et målebæger, så lægerne bruger tegn i stedet: bind eller tampon skal skiftes hver time eller hver anden time i flere timer, blødning gennem tøj eller sengetøj, to produkter samtidig, klumper større end en 2-krone, blødning over 7 dage, eller at hun må op om natten for at skifte. Kraftig menstruation rammer omkring hver fjerde kvinde og kan behandles.',
        'Blodtab er jerntab, og kraftige menstruationer er den mest almindelige årsag til jernmangel hos kvinder i den fødedygtige alder. Jernmangel ligner almindelig travlhed: træthed, der ikke går væk med søvn, åndenød på trapper, hjertebanken, hovedpine, kolde hænder, blege læber. Derfor bliver den overset, af hende og af alle omkring hende, inklusive dig, der tænkte "hun har bare haft en lang uge". Jern fra kød, fisk og æg optages bedst; jern fra linser, bønner, havregryn og grønne blade optages bedre med C-vitamin til og dårligere med kaffe, te eller mælk lige ved måltidet. Men mad kan ikke fylde et stort underskud op, og tilskud skal ikke tages i blinde. En blodprøve hos lægen er det rigtige svar, både fordi for lidt jern og for meget jern er skadeligt. Din bøf er velment. Den er ikke en behandling.',
        'Så produkterne, og her er der mere at lære, end du tror. Bind ligger uden på og findes som trusseindlæg til lette dage, normale, og super eller natbind til kraftige dage og natten; de skiftes typisk hver 4-6 timer. Tamponer sidder inde i skeden, findes i sugeevner fra mini til super plus, og reglen er at bruge den mindste, der rækker, og skifte hver 4-8 timer, aldrig over 8, på grund af den sjældne, men alvorlige infektion toksisk shocksyndrom. Menstruationskoppen er en blød silikonekop, der opsamler i stedet for at suge, kan sidde op til 8-12 timer og genbruges i årevis. Menstruationstrusser har et indbygget sugende lag og bruges alene på lette dage eller som backup. De fleste bruger en kombination, og de fleste har en fast favorit i mærke og størrelse. "Dem i den blå pakke" er ikke en størrelse.',
        'Det, der skal være i huset, er derfor konkret: hendes produkter i den type og størrelse, hun bruger, med reserve til kraftige dage; smertestillende, der ikke er udløbet; varmedunk eller varmepude; nem mad med jern, der kan laves på ti minutter; et mørkt håndklæde til sengen; og koldt vand og vaskemiddel til pletter. Blod på lagenet skylles i koldt vand, aldrig varmt, som får det til at sætte sig fast. Det er den ene vaskeregel, du skal kunne udenad. Og hvis der er en plet, bliver det ikke husket, hvem der vaskede lagenet, men om nogen sukkede. Du ved godt, hvem "nogen" er.',
        'Det vigtigste, du kan gøre i denne uge, er at fjerne gætteriet. Find ud af, hvad hun bruger, og tag et billede af pakken. Læg mærke til, om hun er usædvanligt træt og forpustet også uden for menstruationen. Og hvis hun genkender bare ét af tegnene på kraftig blødning, så sig det, mange aldrig får sagt: det er ikke sikkert, at dit normale er normalt, og det kan behandles.',
      ],
      conversationQuestion:
        'Hvilke produkter bruger du, og er der noget, du gerne vil have, at jeg altid sørger for, der er i huset? Har du nogensinde tænkt, at du bløder mere end andre?',
      sources: [NHS_HEAVY, NHS_IRON, NHS_TSS, ACOG_HEAVY],
    },
    {
      id: weeklyId(M, 3),
      month: M,
      week: 3,
      title: 'Hverdagen dag 1 til 5: søvn, arbejde, planer og nærhed',
      body: [
        'Menstruationen foregår ikke i et vakuum. Den foregår midt i en uge med arbejde, aftaler, søvn, mad og et forhold, hvor den ene part står med en varmepude og ikke helt ved, hvad han skal med den. Det er der, den bliver svær, og det er der, du kan gøre en forskel, som ikke kræver medicinsk viden, men en kalender og lidt omtanke.',
        'Start med humøret, fordi det bliver misforstået oftest, typisk af dig. Når blødningen begynder, holder hormonerne op med at falde, og PMS-symptomerne forsvinder typisk inden for et døgn. Mange mærker lettelse. Men energien er i bund, smerten på toppen, og for mange kommer den influenzaagtige sløjhed, som populært kaldes menstruationsinfluenza: ømme muskler, kuldegysninger, hovedpine, kvalme. Det er ikke en infektion, men symptomerne er ægte, og feber hører ikke med. Humøret dag 1-2 er derfor typisk fladt, stille og indadvendt snarere end irriteret. Hun kan virke fjern, uden at der er noget galt mellem jer. Det er ikke en gåde, du skal løse. Fra dag 3-4 stiger østrogen, og de fleste mærker et tydeligt skift tilbage.',
        'Søvnen er ofte dårligst nat 1 og 2: kramper vækker, bekymring for at bløde igennem holder vågen, og smerte gør den dybe søvn kortere. Dårlig søvn forstærker så smerte og humør næste dag. Det, der hjælper, er praktisk: smertestillende en halv time før sengetid, hvis hun bruger det; varme på lænden; natbind, kop eller menstruationstrusser, så hun tør sove igennem; et mørkt håndklæde under hende; en pude under knæene til lænden; og fred til at gå tidligt i seng uden at blive spurgt, om hun er sur. Hun er ikke sur. Klokken er 21, og hun har ondt. Det er hele forklaringen.',
        'Arbejdet fortsætter, som om intet er hændt. Møder, der ikke kan flyttes, toiletter langt væk, lange transporttider og smertestillende taget efter kalenderen frem for efter kroppen. Du kan ikke tage kramperne med på arbejde, men du kan tage alt det udenom: en rolig morgen, madpakke, at hun ikke også skal hente, handle og lave mad, og en aften, der ikke kræver noget. Sociale planer lander ofte på dag 1 og 2, fordi ingen havde kalenderen fremme, da de blev lavet. Nu har du den, så den undskyldning er brugt op. Hold de to første dage lette, og vær den, der flytter aftalen, når det bliver nødvendigt, uden at bruge hendes menstruation som forklaring, medmindre hun selv vil dele det. "Vi må flytte det" er en hel sætning. Den behøver ikke en sygehistorie bagpå.',
        'Sex under menstruationen er sikkert og hverken uhygiejnisk eller forkert. Nogle har mere lyst i de dage, andre slet ingen, og for nogle lindrer orgasme kramperne. Et mørkt håndklæde gør det praktiske let. Graviditet er stadig mulig, fordi sæd lever op til fem dage, og kønssygdomme smitter lettere med blod. Men reglen over alle andre er, at det er hendes krop, hendes smerte og hendes valg, og at et nej ikke skal forklares. Sig det højt, uden for situationen, så hun ikke skal gætte, hvad du forventer. Du har sikkert et ansigtsudtryk, du ikke selv kender til. Ordene er mere pålidelige.',
        'Det, der binder det hele sammen, er omsorg uden spørgsmål. En kop te, der bare står der. Et tæppe. Opvasken taget uden kommentar. "Jeg laver noget nemt" i stedet for "hvad vil du?". Fælles for dem er, at de ikke kræver et svar; hun skal ikke vælge, takke eller forklare. Når energien er væk, er det den letteste hjælp at tage imod, og det er den, der bliver husket. Ikke fordi du gjorde det, men fordi du holdt mund, mens du gjorde det.',
        'Og til sidst noget, du skal lade være med. Spørg ikke "er der noget galt?", når hun er stille. Træk dig ikke, fordi hun ikke taler. Lad ikke aftalerne blive hendes forhandling. Og tag ikke lav lyst, lav energi eller et tidligt sengetidspunkt personligt. Det handler om en krop, der bruger sine ressourcer på noget andet, og det går over om få dage. Du overlever det. Det er faktisk det letteste job i huset.',
      ],
      conversationQuestion:
        'Hvordan vil du helst have mig de første to dage: tæt på, i nærheden eller i fred? Og er der noget i vores hverdag, du gerne vil have, jeg tager automatisk, når din menstruation kommer?',
      sources: [NHS_PERIODS, NHS_PAIN],
    },
    {
      id: weeklyId(M, 4),
      month: M,
      week: 4,
      title: 'Hvad du siger, hvad du ikke siger, og hvornår det fortjener en læge',
      body: [
        'Det meste af hjælpen under menstruationen er praktisk. Men den bliver værdiløs, hvis ordene omkring den er forkerte. Du kan hente varmepuden og ødelægge det hele med én sætning på vej hen til sofaen. Den sidste artikel i denne måned handler om sprog: hvad der lukker, hvad der åbner, og hvordan du taler om det, der måske ikke er normalt.',
        'Der er sætninger, der gør mere skade end tavshed. "Er det virkelig så slemt?" siger, at du tvivler. "Min ekskæreste havde ikke så ondt" sammenligner en smerte, ingen kan måle udefra, og minder alle om, at du har en ekskæreste. "Du er så følsom i dag" gør hendes menstruation til et karaktertræk. "Har du taget en pille?" som første replik lyder som "hold op med at have ondt". Vittigheder om blod og humør lander aldrig dag 1, uanset hvor tætte I er. Du er ikke undtagelsen. Og "det er jo bare menstruation" er den værste, fordi den normaliserer noget, der måske ikke er normalt, og fordi hun højst sandsynligt har hørt den før, fra læger, mødre og veninder.',
        'Det, der åbner, er kort og konkret. "Det ser ud til at gøre ondt. Skal jeg hente varmen?" "Jeg tager aftensmaden, du skal ikke gøre noget." "Vil du have selskab, eller vil du have fred?" Sætningerne har det til fælles, at de tror på hende, tilbyder noget bestemt og ikke kræver, at hun forklarer sig. Hvis du ikke ved, hvad hun vil have, så vælg den mindste ting og gør den. Et forkert tilbud er langt bedre end et spørgsmål, hun skal bruge energi på at besvare. Et forkert tæppe er stadig et tæppe.',
        'Der er også en samtale, der ikke skal foregå dag 1: den om, hvor slemt det egentlig er. Den hører til follikelfasen, når smerten ikke er der, og hun ikke skal forsvare sig. Spørg der: Hvor stærk er smerten typisk fra 1 til 10? Har den nogensinde forhindret dig i noget? Har du talt med en læge om den? Har du nogensinde tænkt, at du bløder mere end andre? Svarene overrasker ofte begge parter, fordi hukommelsen om smerte er kort, og fordi mange aldrig er blevet spurgt. Det kan godt være, du bliver den første. Det er ikke en præstation. Det er en påmindelse om, hvor få der har spurgt.',
        'Så grænsen, én gang til, fordi den er vigtig, og her er der ingen punchline. Almindelige menstruationssmerter reagerer på varme og håndkøbsmedicin og forsvinder efter et par dage. Fortjener en læge: smerter, der ikke reagerer, der giver sygedage hver måned, der kommer uden for menstruationen, ved sex eller toiletbesøg; blødning, der opfylder tegnene på kraftig menstruation; menstruation, der kommer oftere end hver 21. dag eller sjældnere end hver 35., varer over 7 dage, eller udebliver i tre måneder uden graviditet; blødning mellem menstruationer eller efter sex; og træthed og åndenød, der kan være jernmangel. Endometriose rammer omkring 1 ud af 10, fibromer er almindelige, og begge kan behandles. Der går i gennemsnit mange år til diagnosen, netop fordi alle omkring hende sagde, at det var normalt.',
        'Din rolle ved lægen er konkret. Læger spørger: hvor mange dage bløder du, hvor ofte skifter du på de værste dage, hvor stærk er smerten, hvor sidder den, hvad har du prøvet, forhindrer det dig i noget? Appens kalender og noter er præcis den slags svar. Hjælp med at skrive tre punkter ned før tiden, og tilbyd at tage med. Du skal ikke sige noget klogt derinde. En partner, der kan sige "hun har måttet melde sig syg tre måneder i træk", bliver hørt på en anden måde, end hun bliver, når hun sidder alene og har vænnet sig til at nedtone det.',
        'Til sidst: det hele er ikke en opgave, du skal løse, og der er ingen, der deler diplomer ud. Menstruationen kommer igen næste måned og måneden efter. Det, der virker, er ikke én stor indsats, men et lager, der er fyldt op, en kalender, der er let, en varmepude, der ligger fremme, og en partner, der ikke tvivler på, at det gør ondt. Det er kedeligt, gentageligt og præcis det, der bliver husket.',
      ],
      conversationQuestion:
        'Har nogen nogensinde sagt til dig, at dine smerter eller din blødning "bare er normalt"? Tror du selv på det, og er der noget, du gerne vil have undersøgt, hvis jeg tager med?',
      sources: [NHS_PAIN, NHS_HEAVY, NHS_ENDO, NHS_IRREGULAR],
    },
  ],
  wrap: {
    id: wrapId(M),
    month: M,
    title: 'Måned 3: Menstruationsfasen',
    summary: [
      'Denne måned gik i dybden med de dage, hvor hun har mest brug for hjælp og mindst overskud til at bede om den. Du ved nu, at kramper er en muskel, der arbejder uden nok ilt, drevet af prostaglandiner, og at de to ting, der virker bedst, er varme på mave eller lænd og smertestillende taget ved de første tegn, ikke på toppen. Du ved, at menstruationsinfluenza, kvalme, løs mave og hovedpine hører med for mange, og at humøret dag 1-2 er fladt og indadvendt, ikke skarpt. Det er ikke dig. Det er næsten aldrig dig.',
      'Du kender tegnene på kraftig blødning og jernmangel, og du ved, at begge fortjener en blodprøve hos lægen frem for et gæt og en bøf. Du kender forskellen på bind, tamponer, kop og menstruationstrusser, reglen om højst 8 timer for en tampon, og hvad der skal være i huset før dag 1, så du ikke står i Netto og ringer hjem. Du ved, at sex under menstruation er hendes valg uden forklaring, at sociale planer og arbejde er der, du kan tage fra, og at koldt vand fjerner blodpletter.',
      'Vigtigst: du har lært, at den bedste hjælp er praktisk, stille og gjort på forhånd, at nogle sætninger gør mere skade end tavshed, og at smerte, der slår hende ud, ikke skal normaliseres, men fortjener en læge, gerne med dig ved siden af. Du er blevet en mand, der ved, hvor varmepuden ligger. Næste måned handler om det modsatte: follikelfasen, hvor energien vender tilbage, og hvordan I bruger den klogt.',
    ],
    keepDoing: [
      'Hav varme, smertestillende og hendes produkter klar to dage før forventet menstruation. Ikke to timer før.',
      'Hold de to første dage lette i kalenderen, og flyt aftaler selv, uden drama og uden sygehistorie.',
      'Gør små ting uden at spørge og uden at vente på tak: te, tæppe, opvask, nem mad.',
      'Sig "det ser ud til at gøre ondt, skal jeg hente varmen?" i stedet for "har du taget en pille?".',
      'Skriv i kalenderen, hvad der hjalp, og hvad der manglede, mens det er frisk.',
      'Sig "det her fortjener en læge", hvis smerten slår hende ud, og tilbyd at tage med.',
    ],
    quiz: [
      {
        question:
          'Hun plejer at få stærke kramper og mærker de første tegn en morgen. Hvad hjælper mest lige nu?',
        options: [
          'Vente og se, om det bliver slemt, før hun tager noget',
          'Hente det smertestillende, hun bruger, og varmen med det samme',
          'Foreslå et hårdt træningspas, "så det kommer ud af kroppen"',
          'Sige, at hun skal tage det roligt, og så gå i gang med noget andet',
        ],
        correctIndex: 1,
        explanation:
          'Ibuprofen og lignende hæmmer dannelsen af prostaglandiner og virker bedst ved de første tegn, før smerten er bygget op. Varme kan lægges på samtidig. Træningspasset gemmer du til dig selv.',
      },
      {
        question:
          'Hun fortæller, at hun skifter bind hver time flere timer i træk og altid har klumper. Hvad er den bedste reaktion?',
        options: [
          'Sige, at nogle bare bløder mere end andre',
          'Foreslå, at hun bruger tamponer i stedet',
          'Sige, at det er tegn på kraftig blødning, som kan behandles, og foreslå en lægetid',
          'Købe større bind og ikke sige mere',
        ],
        correctIndex: 2,
        explanation:
          'Skift hver time i flere timer og store klumper er blandt lægernes tegn på kraftig menstruation. Det rammer hver fjerde, kan behandles, og mange får det aldrig sagt. Større bind er ikke en behandling, det er en større pakke.',
      },
      {
        question: 'Hvad er reglen for, hvor længe en tampon må sidde?',
        options: [
          'Så længe den ikke lækker',
          'Højst 8 timer, og skift typisk hver 4-8 timer',
          'Højst 24 timer',
          'Den kan sidde hele natten og det meste af næste dag',
        ],
        correctIndex: 1,
        explanation:
          'Højst 8 timer på grund af risikoen for toksisk shocksyndrom. Pludselig høj feber med tampon under menstruation er akut lægehjælp. Det er den ene regel, du skal kunne i søvne.',
      },
      {
        question:
          'Det er dag 1. Hun er stille, ligger på sofaen og svarer kort. Hvad virker bedst?',
        options: [
          'Spørge "er der noget galt?" et par gange, for en sikkerheds skyld',
          'Gå ind i et andet rum og lade hende være i fred hele aftenen',
          'Lægge et tæppe over hende, sætte te frem og sætte sig i nærheden uden at kræve samtale',
          'Foreslå, at I går ud og får luft og ser nogle mennesker',
        ],
        correctIndex: 2,
        explanation:
          'Humøret dag 1-2 er typisk fladt og indadvendt, ikke skarpt. Omsorg uden spørgsmål og nærvær uden krav er den letteste hjælp at tage imod. "Er der noget galt?" er et spørgsmål, hun skal bruge energi på at svare på.',
      },
      {
        question:
          'Hun har haft ondt i tre uger, også uden for menstruationen, og har meldt sig syg tre måneder i træk. Hvad er rigtigt?',
        options: [
          'Det er normalt for nogle, og varme og hvile er nok',
          'Sige, at det ikke er noget, hun bare skal holde ud, og tilbyde at booke lægetid og tage med',
          'Foreslå stærkere håndkøbsmedicin',
          'Vente og se, om næste måned bliver bedre',
        ],
        correctIndex: 1,
        explanation:
          'Smerter uden for menstruationen og sygedage hver måned er ud over det normale og kan være endometriose eller andet, der kan behandles. Diagnosen forsinkes, fordi alle normaliserer smerten. Du skal ikke være en af dem.',
      },
      {
        question:
          'Appen siger, at menstruationen forventes om to dage, og der ligger en middag hos venner på dag 1. Hvad er mest hjælpsomt?',
        options: [
          'Ikke sige det til hende, så hun ikke bekymrer sig',
          'Vente og se på dagen, om hun orker det',
          'Spørge, om hun vil have, at du flytter middagen, og gøre det uden at bruge menstruationen som forklaring',
          'Aflyse uden at spørge hende, og nævne hvorfor til værterne',
        ],
        correctIndex: 2,
        explanation:
          'Hold de første dage lette, men lad hende bestemme. At du tager forhandlingen og flytter aftalen diskret sparer hende for både smerten og logistikken. Hendes menstruation er ikke din forklaring til værterne.',
      },
    ],
  },
};
