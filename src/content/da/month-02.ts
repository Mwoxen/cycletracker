import type { MonthContent, Source } from '../types';
import { dailyId, weeklyId, wrapId } from '../types';

const NHS_PMS: Source = {
  label: 'NHS: PMS',
  url: 'https://www.nhs.uk/conditions/pre-menstrual-syndrome/',
};
const NHS_PERIODS: Source = {
  label: 'NHS: Periods',
  url: 'https://www.nhs.uk/conditions/periods/',
};

const M = 2;

export const month02: MonthContent = {
  month: M,
  theme: 'Kommunikation og støtte',
  focus:
    'Lær at spørge i stedet for at gætte, at lytte før du løser, og at bruge din viden om faserne til at give mere. Aldrig som argument. Du taber alligevel.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'Du ved nu nok til at gætte forkert',
      insight:
        'Nu skal du høre. Efter én måned ved du en del om cyklussen, og tillykke med det, men det er sgu også det farligste tidspunkt, for nu kan du gætte med selvtillid. Hun er stille, altså er hun i lutealfasen, altså vil hun have ro. Flot analyse. Forkert konklusion. Viden om faser er viden om gennemsnit, og hun er ikke et gennemsnit, lige så lidt som en opskrift er et måltid. Den samme dag kan hun ønske selskab eller fred, hjælp eller at blive ladt i ro. Det eneste, der virker hver gang, er at spørge. Et godt spørgsmål er kort, konkret og let at svare på: "Vil du have selskab, eller skal jeg give dig lidt plads?" Det er ikke et tegn på, at du ikke forstår hende. Det er et tegn på, at du tager hende alvorligt som mere end sin fase. Og det er billigere end at gætte forkert. Det har du prøvet. Det kostede en hel aften.',
      action:
        'Stil ét konkret spørgsmål i dag i stedet for at gætte: "Hvad har du mest brug for lige nu: selskab, ro eller en hånd med noget?" Og vent så på svaret. Hele svaret, ikke bare starten.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: '"Øre eller forslag?" er kun første halvdel',
      insight:
        'Du kender spørgsmålet fra måned 1: "Vil du have forslag, eller skal jeg bare lytte?" Nu kommer den svære del, for det svære er ikke at spørge. Det er at gøre det, hun svarer. Svarer hun "bare lyt", vil din hjerne alligevel stå og koge løsninger. Fem styk, i prioriteret rækkefølge, med tidsplan, som en gryde, der ikke kan skrues ned. Lad den simre med låg på. Nik, spørg "hvad var det værste ved det?", og lad hende blive færdig. Hjernen får lov en anden dag. Svarer hun "forslag", så kom med ét, ikke fem, og spørg, om det passer. Svaret skifter med fasen: i follikelfasen vil mange gerne have sparring, i lutealfasen oftere et øre. Og det skifter fra dag til dag. Derfor spørger du hver gang og husker ikke svaret fra sidst. Du er en partner, ikke en termostat, og termostaten derhjemme har du for søren heller aldrig fået til at virke.',
      action:
        'Næste gang hun fortæller om noget svært: spørg "øre eller forslag?", og hvis svaret er øre, så stil kun spørgsmål i ti minutter. Ti hele minutter. Du har stået længere ved en grill.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 3),
      month: M,
      day: 3,
      title: 'Først "jeg forstår", så alt det andet',
      insight:
        'At validere betyder at anerkende, at følelsen giver mening, før du gør noget ved den. Det er ikke det samme som at være enig i alt. "Det giver mening, at du er træt af det" kan siges, selv om du ser sagen anderledes. Du behøver ikke engang have forstået sagen endnu. Når hormonerne falder i ugen før menstruationen, er behovet for validering størst, og tolerancen for at blive sprunget over mindst. Springer du direkte til løsningen, hører hun: din følelse er et problem, der skal væk. Så har du to problemer, og du kom ind med nul. Validerer du først, falder pulsen, og løsningen kan bagefter findes i fællesskab. Rækkefølgen er alt, ligesom når du bager: du kan ikke komme æggene i bagefter. Først "jeg forstår", så "hvad gør vi?". Ofte er det første nok, og det andet bliver overflødigt. Det er den gode nyhed: du slipper tit for at løse noget.',
      action:
        'Brug i dag sætningen "det giver mening, at du har det sådan" én gang, uden at følge op med et "men". Heller ikke et lille et.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'Appen er ikke et våben',
      insight:
        'Der er en verden til forskel på "er det PMS?" og "jeg kan se i appen, at det er dag 25, vil du have, at jeg tager lidt mere fra i dag?". Den første sætning bruger fasen til at forklare hende væk. Den anden bruger den til at tilbyde hjælp. Den første får dig også til at sove på sofaen, og det er sgu fortjent. Reglen er enkel: fasen må aldrig nævnes som argument i en uenighed, og aldrig som svar på en følelse. Den må gerne nævnes som grund til, at du gør noget: laver mad, flytter en aftale, holder igen med kritik. Er du i tvivl, så spørg dig selv, om sætningen handler om, hvad hun er, eller om, hvad du vil gøre. Kun det sidste er brugbart. Det første er bare dig, der har læst noget og gerne vil vise det frem. Appen er en indkøbsliste. Man slår ikke folk med en indkøbsliste.',
      action:
        'Sig i dag én sætning, der bruger fasen som grund til din egen handling: "Jeg tager aftensmaden i denne uge, du skal ikke tænke på det." Og tag den så. Hele ugen, ikke bare tirsdag.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'Et kodeord, så ingen skal forklare noget',
      insight:
        'Mange par sliber sig op på de dage, hvor hun har det svært, men ikke har energi til at forklare det. Så bliver hun kort for hovedet, du bliver forvirret og begynder at stille spørgsmål, og nu er der to problemer, hvoraf det ene står i køkkendøren og spørger. En aftalt kode løser det. Det kan være et ord ("grå dag"), et tal fra 1 til 5, en emoji eller en bestemt kop, der stilles frem på bordet. Betydningen aftales på forhånd, mens I begge er rolige: "Når jeg siger det, har jeg brug for, at du tager det praktiske og ikke stiller spørgsmål." Signalet fjerner behovet for at forklare og forsvare på en dag, hvor der ikke er overskud til det. Hun får en nem udgang. Du får en klar opgave, og klare opgaver er faktisk det, du er bedst til. Det ved alle, der har sendt dig på indkøb med en seddel.',
      action:
        'Foreslå et signal i dag, mens I begge har det fint: "Skal vi have et ord for de dage, hvor du bare har brug for, at jeg tager over?" Og lad hende vælge ordet.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: 'Din indre advokat har fri i dag',
      insight:
        'Når hun siger noget kritisk, reagerer kroppen, som om du bliver angrebet. Din indre advokat rejser sig med det samme: det passer ikke, det var ikke meningen, der var en kontekst. Advokaten lyder rimelig. Han stopper også samtalen, for nu skal hun kæmpe for at blive hørt oven i det, hun allerede var frustreret over. Send ham hjem. Han har for søren fået aftensmad. Lyt færdigt, gentag kernen med dine egne ord ("så du oplever, at jeg forsvinder, når det bliver svært") og spørg, om du har forstået det rigtigt. Først når hun siger ja, har du fortjent at give din version, og ofte er behovet for den så forsvundet, som sult efter en god frokost. I lutealfasen, hvor stressrobustheden er lavest, afgør den rækkefølge, om det bliver en samtale eller et skænderi. Advokaten vinder sjældent nogen af delene. Han har faktisk aldrig vundet. Du betaler ham stadig.',
      action:
        'Næste gang du får kritik: gentag hendes pointe med dine egne ord, og spørg "har jeg forstået det rigtigt?", før du siger ét ord om dig selv. Ét.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'Sofa eller gåtur: giv hende en menu',
      insight:
        'De første menstruationsdage er lav energi og ofte smerte, og behovet for nærhed varierer enormt. Nogle vil have en krop ved siden af sig i sofaen, andre vil have huset for sig selv i en time. Du kan gætte forkert i begge retninger, og du har sikkert prøvet begge: sat dig tæt på, da hun ville have ro, og trukket dig, da hun havde brug for, at du blev. Begge gange var du helt sikker i din sag. Spørg direkte, og gør det let at svare: "Vil du have selskab i sofaen, eller skal jeg gå en tur, så du får ro?" Et valg mellem to konkrete ting er lettere at svare på end et åbent "hvad vil du?", når kroppen har ondt, og energien er brugt op. Tænk på det som en menu med to retter. Ingen skal opfinde en ret i dag, og slet ikke hende. Du skal bare stå med menukortet og holde mund, og det første er sgu den nemme del.',
      action:
        'Hvis hun har menstruation: giv hende valget mellem to konkrete ting i dag. Hvis ikke: spørg, hvad hun typisk foretrækker dag 1 og 2, og husk svaret. Skriv det ned. Du kender din hukommelse.',
      phaseTags: ['menstrual'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: 'Hun er stille. Det handler ikke om dig.',
      insight:
        'Under menstruationen, og igen i de sidste dage før, trækker mange sig ind i sig selv. Færre ord, kortere svar, mere telefon, mindre øjenkontakt. For en partner føles det som kold luft fra køleskabet, og fristelsen er at spørge "er der noget galt?" fem gange. Femte gang er der faktisk noget galt, og det er dig. Oftest er det ikke noget imellem jer. Det er en krop, der bruger sin energi på smerte og træthed, og som ikke har overskud til at være social. Det bedste svar er at sige det højt én gang, roligt og uden krav: "Jeg kan mærke, at du har brug for lidt ro. Jeg er her, når du vil." Og så faktisk være der, uden at holde regnskab og uden at kigge over for at se, om hun snart er færdig med at have ro. Ro er ikke en steg, du kan stikke et termometer i. Den er færdig, når hun siger, den er færdig.',
      action:
        'Sig én gang i dag: "Du behøver ikke være social med mig i dag, jeg er her alligevel." Og lad så være med at spørge igen. Ikke engang med øjnene. Ikke engang med et suk.',
      phaseTags: ['menstrual'],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'Et kvarter om ugen, før noget går galt',
      insight:
        'De fleste vigtige samtaler i et forhold bliver taget, når noget er gået galt. Klokken 23, i køkkenet, med opvasken som vidne. Det gør dem ladede og dårligt timede. Et fast, kort tjek-ind én gang om ugen ændrer det. Femten minutter, samme dag, med tre spørgsmål: Hvad gik godt i denne uge? Hvad var svært? Hvad har du brug for i den kommende uge? Det sidste spørgsmål er guld, fordi svaret ofte hænger sammen med, hvor i cyklussen hun er på vej hen. "Jeg får menstruation onsdag, så torsdag aften vil jeg gerne have fri fra alt" er en sætning, der kun bliver sagt, hvis nogen spørger. Tjek-indet er uden telefon og uden en dagsorden om at løse alt. Du skal ikke løse noget. Du skal spørge og skrive ned. Det er at læse opskriften, før du går i gang. Det kunne du for søren også prøve i køkkenet.',
      action:
        'Foreslå et fast tidspunkt til et ugentligt tjek-ind på et kvarter, og læg det i kalenderen for de næste fire uger. Nu, mens du husker det. Om fem minutter gør du ikke.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 10),
      month: M,
      day: 10,
      title: 'Den store samtale starter ikke ved opvasken',
      insight:
        'Du ved fra måned 1, at follikelfasen er det bedste tidspunkt til svære emner. Men et godt tidspunkt redder ikke en dårlig start, ligesom gode råvarer ikke redder en pande, der aldrig blev varm. Kast ikke emnet ind midt i noget andet ("nu vi taler om det, så skal vi også lige tale om økonomien"). Ingen har nogensinde sagt "nu vi taler om det" og fået en god samtale ud af det. Ikke én. Bed i stedet om samtalen: "Der er noget, jeg gerne vil tale om, som handler om vores økonomi. Passer det i aften, eller hellere i weekenden?" Det giver hende mulighed for at forberede sig og vælge sit tidspunkt, og det signalerer, at emnet er vigtigt, ikke en beskyldning. Start så med det, du selv føler og ønsker, ikke med det, hun gør forkert. Den formulering er halvdelen af udfaldet. Den anden halvdel er at holde mund, når hun svarer.',
      action:
        'Hvis der er et emne, du har udskudt: bed om samtalen i dag med sætningen "Der er noget, jeg gerne vil tale om. Hvornår passer det dig?" Og tag så det tidspunkt, hun siger.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'Listen, du ikke vidste fandtes',
      insight:
        'Mental belastning er alt det arbejde, der ikke kan ses: at huske, at der skal købes gave til fødselsdagen, at tandlægen skal bookes, at der mangler madpakkepapir, at svigermor skal ringes op. Det er ikke opgaven, der er tung. Det er at være den, der husker den. I mange par ligger den liste mest hos kvinden, også når de praktiske opgaver deles ligeligt, og også når manden er helt sikker på, at han har styr på det. Han har styr på sin halvdel af listen. Han har bare aldrig set den anden. Det er som at tro, du lavede aftensmaden, fordi du stod ved panden. Fordi listen er usynlig, bliver den sjældent anerkendt. Første skridt er at få den frem i lyset. Ikke for at fordele den på minuttet, men for at du kan se, hvor meget hun bærer, som du aldrig har set. De fleste bliver overraskede over længden. Sæt dig ned, før du læser.',
      action:
        'Bed hende skrive den usynlige liste ned i aften, alt hun går og husker på, og læs den uden at kommentere. Spørg så: "Hvad på den liste vil du helst af med?" Og tag den.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: '"Sig bare til" er ikke hjælp',
      insight:
        'Der er forskel på at hjælpe og at eje. Hjælper du, skal hun stadig huske opgaven, bede om det, forklare hvordan og tjekke, at det bliver gjort. Så har hun sparet hænderne, men ikke hovedet, og hun har fået en medarbejder, der skal ledes. Ejer du en opgave, er den din fra start til slut: du husker den, planlægger den, udfører den og retter op, hvis den glipper. Hun behøver ikke tænke på den igen. Vælg noget med en fast rytme og hele kæden: al vasketøj, alle madpakker, alt omkring bilen, alle aftaler med børnenes institution. Og undgå at spørge "hvordan vil du have det gjort?". Find selv ud af det. Du har fundet ud af sværere ting. Du har fået en sous vide til at virke uden at læse manualen. Madpakker kan du sgu godt. Det er den del, der letter hende, og det er den del, de fleste springer over, fordi den kræver, at man tænker selv.',
      action:
        'Vælg i dag ét område, du overtager helt, fortæl hende det, og sig samtidig: "Du behøver ikke tænke på det mere. Heller ikke at tjekke."',
      phaseTags: [],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: 'Derfor er opvaskeren med i skænderiet dag 25',
      insight:
        'Den usynlige liste er lang hele måneden, men den føles længst i ugen før menstruationen. Der er en grund: når progesteron og østrogen falder, bliver søvnen dårligere, tolerancen for rod lavere og følelsen af at stå alene med tingene stærkere. Samtidig går appetitten op og overskuddet ned. Opgaver, der var neutrale dag 10, bliver bjerge dag 25. Det er derfor, opvaskeren dukker op i skænderier den uge og næsten aldrig i follikelfasen. Opvaskeren har ikke ændret sig. Det har forstærkeren. Det er den samme chili, bare på en dag, hvor munden i forvejen er øm. Den kloge reaktion er ikke at diskutere, om fordelingen er fair. Du vinder ikke den diskussion dag 25, og du fortjener sandsynligvis heller ikke at vinde den. Tag mere i netop de dage, uden at gøre det til en byttehandel. Fairness måles over en måned, ikke over en aften.',
      action:
        'Tjek appen. Hvis hun er inden for en uge før menstruation: tag to af hendes faste opgaver i dag, og sig blot "det er klaret". Ikke mere. Ingen tale. Ingen bukken.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'Hun siger det ligeud. Tag imod.',
      insight:
        'Omkring ægløsning er østrogen på toppen, og det giver ofte mere selvtillid, mere lyst til kontakt og en tydeligere tunge. Mange kvinder fortæller, at de i de dage siger ting lige ud, som de resten af måneden pakker ind eller holder inde. Det er en gave til jeres kommunikation, hvis du tager imod den i stedet for at dukke dig. Bliver hun mere direkte om noget, der irriterer hende, så hør det som det tydeligste, du kommer til at få, ikke som en pludselig ændring i hendes syn på dig. Du har ønsket dig klar besked. Her er den, serveret uden pynt. Brug dagene til at spørge om det, du selv har gået og undret dig over. Svarene er ofte klarere nu end på nogen anden dag i måneden, så spild dem for søren ikke på at spørge, hvor fjernbetjeningen er. Den ligger i sofaen. Den ligger altid i sofaen.',
      action:
        'Stil ét spørgsmål i dag, du har gået og gemt på: "Er der noget, du længe har villet sige til mig, men ikke har fået sagt?" Og tag imod svaret uden at blinke.',
      phaseTags: ['ovulation'],
    },
    {
      id: dailyId(M, 15),
      month: M,
      day: 15,
      title: 'Lyst har en kurve. Spørg til den.',
      insight:
        'Sex er noget af det sværeste at tale om, også i lange forhold, fordi et nej føles som en afvisning, og et ønske føles som et krav. Det hjælper at tale om lyst som noget, der svinger, ligesom energi og humør, og som begge parter har en kurve for. Også dig. Din er bare ikke emnet i dag. Omkring ægløsning har mange mere lyst, i lutealfasen og under menstruationen mindre, og nogle oplever det omvendt. Det er sæson, ikke en fejl i køkkenet. Spørg om hendes kurve, ikke som forhandling, men af nysgerrighed: "Hvornår i måneden mærker du mest lyst? Og hvad hjælper, når den er lav?" Samtalen tages på en god dag, ikke i sengen, og ikke efter et nej. Der er den ufarlig. I sengen er den en forhandling, uanset hvor nysgerrig du selv synes, du lyder. Du lyder ikke nysgerrig. Du lyder som en mand, der spørger, om køkkenet snart åbner.',
      action:
        'Tag samtalen i dag på et neutralt sted, fx en gåtur: "Jeg vil gerne forstå din lyst bedre hen over måneden. Vil du fortælle mig om den?" Og så er det hende, der taler.',
      phaseTags: ['ovulation'],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'Nej er en hel sætning',
      insight:
        "Et nej til nærhed i lutealfasen eller under menstruationen handler oftest om krop, træthed og ømhed, ikke om dig. Det er svært at tro på, når man ligger der i mørket og analyserer, som om nej'et var en sovs, der er skilt, og du skal finde fejlen. Men det er sandt. Et nej sagt med skyldfølelse og modtaget med skuffelse bliver hurtigt en spiral: hun begynder at undgå situationer, hvor spørgsmålet kan komme op, og du begynder at tolke afstand ind i alt. Bryd spiralen ved at gøre nej'et ufarligt. Sig det højt, at et nej er et komplet svar, og at du hellere vil have et ærligt nej end et pligt-ja. Bed om, at hun siger, hvad hun i stedet har lyst til: en krammer, at ligge tæt, ingenting. Nærhed uden forventning er den nærhed, der gør et senere ja let. Nærhed med en bagtanke kan alle mærke, også med lyset slukket. Du er sgu ikke så subtil, som du tror.",
      action:
        'Sig i dag, uden at det er en optakt til noget: "Du må altid sige nej til mig uden at forklare. Jeg tager det ikke personligt." Og gør det så ikke. Heller ikke om tre dage.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'Feedback kræver en billet',
      insight:
        'Der er ting, du gerne vil sige, som ikke er kritik af hende som menneske, men som kan lande sådan: at hun bliver kort i tonen, når hun er sulten, at hun lover for meget til andre, at hun glemmer at drikke vand. Kritik, der kommer uopfordret, aktiverer forsvar hos alle. Prøv selv at få at vide, at du snorker, mens du står midt i at vende en bøf. Kritik, man har sagt ja til at modtage, lander helt anderledes. Spørg derfor først: "Må jeg sige noget, jeg har lagt mærke til? Du må også godt sige nej." Får du ja, så sig én ting, konkret og uden generaliseringer, og stop der. Én. Ikke "og mens vi er ved det". "Mens vi er ved det" har ødelagt flere middage end brændt hvidløg. Får du nej, så respektér det og prøv en anden dag. Follikelfasen er det oplagte tidspunkt; PMS-dagene er det sgu ikke, og det ved du godt fra sidst.',
      action:
        'Hvis der er noget, du har lagt mærke til, så spørg i dag: "Må jeg dele en observation? Du bestemmer, om det er nu." Og accepter svaret, også hvis det er nej.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'Nogen skal gå først. Det er dig.',
      insight:
        'Alle par skændes. Det, der adskiller de par, der holder, er ikke antallet af konflikter, men hvor hurtigt og hvor godt de reparerer bagefter. Reparation er et forsøg på at genskabe kontakt: en hånd på skulderen, en kop kaffe stillet frem, en sætning som "jeg vil ikke have, at vi er sådan her, kan vi begynde igen?" Det kræver ikke, at uenigheden er løst. Det kræver, at én af jer går først, og det behøver ikke være den, der tabte. I dag er det dig. Lå skænderiet i PMS-dagene, er det ofte nemmest at reparere, når menstruationen er kommet, og hormonerne har fundet ro; men vent ikke længere end nødvendigt. Kold luft er som en gryde, der er brændt på: jo længere den står, jo mere skal der skrubbes. Dag ét koster en kop kaffe. Dag fire koster en samtale. Dag syv koster en weekend. Gå nu. Kaffen er sgu billigere.',
      action:
        'Hvis der er noget uafsluttet mellem jer: tag det første skridt i dag med en lille fysisk gestus og sætningen "kan vi begynde forfra?" Uden at tilføje noget bagefter.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 19),
      month: M,
      day: 19,
      title: 'Undskyld uden "men"',
      insight:
        'En god undskyldning har tre dele: hvad du gjorde, hvad det gjorde ved hende, og hvad du gør anderledes. "Undskyld, jeg afbrød dig, mens du fortalte om din dag. Det må have føltes, som om jeg ikke gad lytte. Jeg vil lade dig tale færdigt fremover." Det, der ødelægger en undskyldning, er tilføjelserne: "men du var også...", "hvis du blev ked af det", "jeg var jo bare træt". Hvert "men" trækker undskyldningen tilbage, og "undskyld, hvis" er ikke en undskyldning. Det er en anklage med pænt papir om. Hold den kort, og forvent ikke tilgivelse på stedet. En undskyldning er ikke en mikroovn, der bipper, når den er færdig. Hun må gerne have brug for tid, især hvis det skete på en dag, hvor der ikke var meget at stå imod med. Undskyldningen er din. Hvad hun gør med den, er hendes. Du får ikke en kvittering, og du skal for søren ikke stå og vente på en.',
      action:
        'Er der noget fra den seneste uge, du skylder en undskyldning for? Sig den i dag med de tre dele og uden ét eneste "men". Tæl dem, hvis du skal.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 20),
      month: M,
      day: 20,
      title: 'Jeres skænderier har en kalender',
      insight:
        'Kigger du tilbage på jeres seneste skænderier, ligger de sandsynligvis ikke jævnt fordelt over måneden. Mange par har et mønster: småting eskalerer i de sidste 4-6 dage før menstruation, og de samme småting glider forbi i follikelfasen. Det betyder ikke, at problemerne er indbildte. Den skæve fordeling er der også dag 9; du slipper bare lettere. Forstærkeren står forskelligt, og det er hele forskellen. Når I kender mønstret, kan I bruge det: aftal, at de tilbagevendende emner tages i follikelfasen, og at det i lutealfasen er tilladt at sige "kan vi parkere den til næste uge?" uden at det er en flugt. Notér de dage, det gik skævt, i appen. Efter to måneder ser I mønstret sort på hvidt, og det er sgu svært at tage personligt, når det står i en kalender.',
      action:
        'Kig i kalenderen sammen og find det sidste skænderi. Hvilken dag lå det på? Aftal én sætning, I begge må sige, når timingen er dårlig.',
      phaseTags: ['luteal', 'follicular'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: 'Et punktum kan råbe',
      insight:
        'En stor del af parkommunikation foregår på skrift i dag, og skrift mangler alt det, der blødgør: tone, ansigt, timing. Det er mad uden salt. "Ok." kan læses på fem måder, og i PMS-dagene vælges den værste oftere. Du mente det neutralt. Det kan ingen se. Omvendt kan en god besked bære en hel dag: "Tænker på dig, jeg tager aftensmaden i aften." Nogle enkle regler hjælper. Tag ikke noget op på skrift, som kan misforstås; ring eller vent, til I ses. Læg ekstra varme i korte svar i den sidste uge ("ok, tak fordi du siger det" frem for "ok"). Det koster fire ord. Du har brugt flere på at beskrive en burger. Og spørg, hvad hun læser ind i dine beskeder. Mange bliver overraskede over, hvordan et punktum kan lyde, og over hvor meget en tommelfinger op kan fornærme. Den tommelfinger har du sgu sendt mange af. Det ved vi godt.',
      action:
        'Send én besked i dag, der udelukkende har til formål at gøre hendes dag lettere, uden spørgsmål og uden noget, hun skal svare på. Ingen tommelfinger.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 22),
      month: M,
      day: 22,
      title: 'Mad først, så samtalen',
      insight:
        'Før du tager noget op, eller før du reagerer på noget, hun har taget op, er der tre ting værd at tjekke: Har hun sovet? Har hun spist? Er I inden for den sidste uge før menstruation? Tjek i øvrigt de to første på dig selv også. Du har sgu også en tom mave, og den har aldrig haft en god idé. Ikke for at afskrive det, hun siger, men for at vurdere, om nu er tidspunktet, hvor samtalen har en chance. Sult og dårlig søvn forstærker irritabilitet mere end noget andet, og begge er almindelige i lutealfasen. Er svaret nej på de to første, så begynd med mad og hvile, og tag samtalen bagefter. Ingen har nogensinde vundet en diskussion klokken halv syv før aftensmaden. Sig det uden at gøre det til en diagnose: "Skal vi spise først og så tale om det?" er en omsorgshandling. "Du er bare sulten" er det modsatte, og det ved du godt.',
      action:
        'Har I noget at tale om i dag? Sørg først for, at I begge har spist, og spørg: "Skal vi tage det nu eller efter maden?" Og lav så maden.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'Du er ikke hendes talsmand',
      insight:
        'Efterhånden som du ved mere om cyklussen, kan det være fristende at dele det: forklare vennerne, hvorfor hun gik tidligt, eller lave en sjov bemærkning om appen. Du har lært noget nyt, og du vil gerne vise det frem. Det er en fin impuls til et pubquiz og en dårlig impuls ved et middagsbord. Lad være, medmindre hun har sagt god for det. Cyklussen er hendes krop, og hvor åben hun er om den, er hendes valg, ikke dit. Nogle taler frit om menstruation med alle, andre kun med dig, og mange ligger imellem og afhænger af, hvem der er til stede. Det gælder også det positive: "hun har jo ægløsning, derfor er hun så glad" er en kropskommentar, selv om den er venligt ment. Spørg hende, hvad der er okay at sige, og til hvem, og hold dig så til det. Også efter den tredje øl. Især efter den tredje øl.',
      action:
        'Spørg hende i dag: "Er der noget om din cyklus, eller om at jeg bruger appen, som du ikke vil have, at jeg nævner for andre?" Og husk svaret, også i selskab.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 24),
      month: M,
      day: 24,
      title: 'Børnene ser mere, end du tror',
      insight:
        'Har I børn, opdager de før eller siden, at mor har dage, hvor hun har ondt eller er træt. De opdager det typisk før dig. Børn er sgu gode til den slags, bedre end dig, der heller ikke opdagede, at mælken var udløbet. Hvordan det forklares, er hendes beslutning, og den er værd at tage sammen, når det er roligt. Nogle vil have menstruation omtalt åbent og almindeligt, fordi det fjerner skam for både piger og drenge. Andre vil have det holdt privat, i hvert fald indtil børnene selv spørger. Uanset hvad kan du selv gøre noget: vise børnene, at man tager hensyn, når nogen har ondt, uden at gøre mor til den svage. "Mor har brug for ro i dag, så vi laver maden" lærer dem noget om omsorg, der holder hele livet. Det lærer dem også, at far kan lave mad, hvilket for nogle børn er ny information. Og for nogle fædre.',
      action:
        'Spørg hende, hvordan hun vil have, at I taler om menstruation med børnene, hvis I har nogen. Hvis ikke: tal om, hvordan I gerne vil gøre det engang.',
      phaseTags: ['menstrual'],
    },
    {
      id: dailyId(M, 25),
      month: M,
      day: 25,
      title: 'Det er ikke en anekdote',
      insight:
        'Der er forskel på at være åben om cyklussen og på at dele alt. Det, hun fortæller dig om smerte, blødning, lyst, humør og angst, fortæller hun dig i fortrolighed, også når det ikke bliver sagt eksplicit. Der er ingen kontrakt. Det er underforstået, og det er den slags underforstået, man først opdager, når man har brudt det. Det gælder over for din familie, dine venner og dine kolleger, og det gælder både det alvorlige og det, der kunne blive en god historie i fredagsbaren. Du har masser af gode historier. Den her er ikke din. Det samme gælder appen: kalenderen er hendes data, ikke et emne til middagsbordet. Fortrolighed er noget af det, der gør det muligt for hende at fortælle dig mere næste gang. Bryd den én gang, og døren lukker lidt. Spørg hellere en gang for meget, hvad der må siges videre. Det koster tre sekunders akavethed, og det har du sgu råd til.',
      action:
        'Sig det højt i dag: "Det, du fortæller mig om din krop, bliver hos mig. Sig til, hvis der er noget, jeg skal være særligt opmærksom på." Og mén det.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 26),
      month: M,
      day: 26,
      title: '"Det er ikke noget" er sjældent ikke noget',
      insight:
        '"Det er ikke noget" betyder sjældent, at der ikke er noget. Oftere betyder det: jeg har ikke energi til at forklare, jeg tror ikke, du vil forstå det, eller jeg vil ikke være til besvær. Det gælder især om smerte under menstruationen og om sårbarhed i PMS-dagene, som mange kvinder har lært at bagatellisere, længe før de mødte dig. Pres ikke, men luk heller ikke døren. Sig noget, der holder den åben uden krav: "Okay. Hvis det bliver til noget, vil jeg gerne høre om det, også midt om natten." Og mén det med midt om natten. Også klokken tre. Læg så mærke til, om "det er ikke noget" kommer ofte om det samme. Så er det noget, og det fortjener et roligt spørgsmål på en god dag. Ikke et forhør. Ikke en liste. Ét spørgsmål, og så lader du gryden stå, til hun selv løfter låget.',
      action:
        'Næste gang hun siger "det er ikke noget": svar "okay, jeg er her, hvis det bliver til noget", og lad så emnet ligge uden at surmule. Surmulen tæller som at spørge.',
      phaseTags: ['menstrual', 'luteal'],
    },
    {
      id: dailyId(M, 27),
      month: M,
      day: 27,
      title: '"Det går jo fint" er ikke en ros',
      insight:
        'Kommunikation er ikke kun at håndtere det svære. Det er også at få det gode sagt, og det springer mange over, fordi "det går jo fint" føles som en ros indefra. Det er det ikke. Det er som at sige "det var mad" og rejse sig fra bordet. Ros virker bedst, når den er konkret og handler om noget, hun gør eller er, ikke om udseende: "Jeg så, hvordan du håndterede din chef i går. Det var imponerende roligt." I follikelfasen og omkring ægløsning har mange mest overskud til at tage imod og tro på det, og det er også der, du lettest får øje på det. Men ros er også en investering: den anerkendelse, der er bygget op på de gode dage, er det, der gør, at kritik og kort lunte på de svære dage ikke vælter noget. Fem gode bemærkninger for hver kritisk er et forhold, der holder. Begynd at tælle. Du tæller sgu alt andet.',
      action:
        'Sig én konkret, ægte ros i dag om noget, hun har gjort i denne uge. Ikke om udseende, og ikke pakket ind i en anmodning. Og ikke om dine nøgler.',
      phaseTags: ['follicular', 'ovulation'],
    },
    {
      id: dailyId(M, 28),
      month: M,
      day: 28,
      title: 'Dag 1: én besked, nul spørgsmål',
      insight:
        'Første menstruationsdag rammer ofte midt i en arbejdsdag, og hun kan ikke bare gå hjem. Det, der hjælper, er ikke en lang samtale. Det er, at hun ved, at nogen har set det. En kort besked gør det: "Jeg så, at det er dag 1. Jeg køber ind og tager aftensmaden. Sig til, hvis du vil have noget bestemt." Ingen spørgsmål om, hvordan hun har det (det skal hun så bruge energi på at svare på), ingen bekymrede ansigter, ingen tre afsnit om, hvad du har læst i appen. Bare en handling og en åben dør. Hvis hun har fortalt dig, at hun ikke vil have, at du kommenterer på dag 1, så respektér det og gør det praktiske alligevel, i stilhed. Begge dele er kommunikation. Stilhed med indkøbsposer i hænderne er faktisk en af de bedste. Den er sgu bedre end det meste af det, du siger.',
      action:
        'Hvis det er dag 1 eller 2: send den korte besked med én konkret ting, du tager. Hvis ikke: skriv beskeden som kladde, så den er klar. Du har kladder til mindre.',
      phaseTags: ['menstrual'],
    },
    {
      id: dailyId(M, 29),
      month: M,
      day: 29,
      title: 'Du må også sige noget',
      insight:
        'God kommunikation går begge veje. Hvis du kun spørger og aldrig fortæller, bliver du en støttefunktion frem for en partner, og hun mærker det. Ingen vil være kæreste med en kundeservice. Ingen vil heller være kæreste med en tjener, der aldrig selv sætter sig ned og spiser. Fortæl, hvordan du har det, også når det er "jeg er træt og har brug for en time for mig selv", og også i de dage, hvor hun har det svært. Det er ikke at tage pladsen fra hende; det er at give hende et menneske at være sammen med. Vær bare bevidst om timing og størrelse: den store bekymring om dit job er bedre en dag i follikelfasen end dag 26. Og når du har det svært, så sig, hvad du har brug for, i stedet for at vente på at blive spurgt. Det, du beder hende om, skal du også selv turde. Ellers er det bare en app, du har læst.',
      action:
        'Fortæl hende én ærlig ting om, hvordan du har det i dag, og hvad du har brug for. Kort, og uden at det skal løses. "Jeg har det fint" tæller ikke.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 30),
      month: M,
      day: 30,
      title: 'Måned 2: du har lært at spørge',
      insight:
        'Denne måned har handlet om ord og timing. Du ved nu, at spørgsmål slår gæt, at validering kommer før løsninger, og at fasen aldrig må bruges som våben, kun som grund til at give mere. Du har lært at lytte uden advokat, at reparere efter et skænderi, at sige undskyld uden "men", og at bede om lov, før du giver feedback. Du har set, at den usynlige liste vokser i lutealfasen, at ejerskab er noget andet end hjælp, og at det, hun fortæller dig, er hendes at dele videre, ikke din fredagshistorie. Vigtigst: du har et ugentligt tjek-ind og måske et kodeord. Det er værktøjer, der virker længe efter, appen er lukket, ligesom en god støbejernspande holder længere end butikken, der solgte dig den. Men appen skal ikke lukkes endnu. Der er ti måneder tilbage, og du har sgu først lige lært at lave kaffen.',
      action:
        'Spørg hende, hvad der har været den største forskel i jeres kommunikation denne måned. Lyt til svaret. Tag så månedens quiz, uden at kigge i kortene.',
      phaseTags: [],
    },
  ],
  weekly: [
    {
      id: weeklyId(M, 1),
      month: M,
      week: 1,
      title: 'Spørg, lyt, validér: de tre greb, du tror, du allerede kan',
      body: [
        'I måned 1 lærte du den grundlæggende model: faserne, hormonerne, at PMS forstærker frem for at opfinde, og at timing af samtaler er gratis hjælp. Denne måned handler om det, der kommer efter modellen: hvordan I faktisk taler sammen, dag for dag, når viden om faser skal blive til ord, der hjælper. Tre greb bærer det meste: spørg, lyt, validér. De lyder simple. Det er de også, ligesom et spejlæg er simpelt. Det er bare ikke det samme som, at det lykkes hver gang.',
        'Det første greb er at spørge i stedet for at gætte. Jo mere du lærer om cyklussen, jo mere fristende bliver det at slutte fra fase til behov. Hun er dag 24, altså vil hun have ro. Hun er dag 12, altså er det fint at tage økonomien op. Nogle gange rammer du, og så føler du dig som en mand med en app. Men hver gang du gætter forkert, får hun en oplevelse af at blive læst som en tabel frem for som et menneske, og det er der sgu ingen, der har lyst til. Spørgsmål behøver ikke være lange. De bedste er korte og giver hende to konkrete valg: "Selskab eller ro?", "Skal jeg lytte, eller vil du have forslag?", "Vil du tale om det nu eller efter maden?" Et valg mellem to ting kræver næsten ingen energi at svare på, og det er afgørende på de dage, hvor energien er væk. Du står med menukortet. Hun peger.',
        'Det andet greb er at lytte uden at forsvare. Når hun siger noget kritisk, vågner din indre advokat, og han lyder fuldstændig rimelig indefra: det var ikke sådan ment, du havde en grund, det var også hendes skyld. Men i det øjeblik du forklarer dig, skal hun kæmpe for at blive hørt oven i det, hun allerede var frustreret over, og samtalen skifter emne fra hendes oplevelse til din uskyld. Prøv rækkefølgen: lyt færdigt, gentag kernen med dine egne ord, spørg om du har forstået rigtigt. "Så du oplever, at jeg forsvinder ind i telefonen, når det bliver travlt om aftenen, og at du står alene med det?" Når hun siger ja, har du fortjent din version. Ofte er behovet for den så forsvundet, fordi det, hun havde brug for, var at blive forstået, ikke at få ret. Advokaten kan gå hjem. Han havde alligevel ikke en sag, og han har for søren aldrig haft en.',
        'Det tredje greb er at validere, før du løser. At validere er at anerkende, at følelsen giver mening set fra hendes side, uden nødvendigvis at være enig i konklusionen. "Det giver mening, at du er træt af det" kan siges, selv om du ser sagen anderledes. Mange partnere springer over det led, fordi de gerne vil hjælpe, og hjælp for dem er at finde en løsning. Helst hurtigt, helst med en skruetrækker, helst før hun er færdig med sætningen. Men en løsning, der kommer før anerkendelsen, lyder som "din følelse er et problem, der skal væk". I ugen før menstruationen, hvor hormonfaldet gør alt mere sårbart, er behovet for validering størst og tolerancen for at blive sprunget over mindst. Rækkefølgen er alt, som når du bager: æggene kan ikke komme i bagefter. Først "jeg forstår", så "hvad gør vi?", og ofte er det første nok.',
        'Der er ét greb mere, som handler om, hvad du ikke skal sige. Du ved nu meget om faser, og den viden kan bruges på to måder. "Er det PMS?" bruger fasen til at forklare hende væk; det er den faseviden, ingen kvinde har bedt om. "Jeg kan se, det er dag 25, må jeg tage lidt mere fra i dag?" bruger fasen som grund til at give mere. Reglen er enkel og ubrydelig: fasen må aldrig nævnes som argument i en uenighed eller som svar på en følelse. Den må gerne være grunden til, at du laver mad, flytter en aftale eller holder igen med en bemærkning. Er du i tvivl, så spørg dig selv, om sætningen handler om, hvad hun er, eller om, hvad du vil gøre. Hvis du stadig er i tvivl, så lav mad. Det har ingen nogensinde fortrudt.',
        'Spørgsmålet "vil du have forslag, eller skal jeg bare lytte?" kender du fra måned 1. Det svære er ikke at stille det, men at gøre det, hun svarer. Svarer hun "lyt", vil din hjerne alligevel stå og koge løsninger, nummererede og klar til servering. Sæt låg på og stil i stedet spørgsmål: "Hvad var det værste ved det?" "Hvad gjorde du så?" Svarer hun "forslag", så kom med ét, ikke fem, og spørg om det passer. Svaret skifter med dagen og med fasen, så spørg hver gang i stedet for at huske svaret fra sidst.',
        'Ugens opgave er lille: vælg ét af de tre greb, og brug det bevidst hver dag i denne uge. Læg mærke til, hvad der sker med samtalerne. De fleste opdager, at de bliver kortere, ikke længere, fordi der ikke længere skal kæmpes om at blive hørt. Det er den eneste måde, du nogensinde får kortere samtaler på, så tag den, min ven. Den er sgu gratis.',
      ],
      conversationQuestion:
        'Hvornår har du sidst følt dig rigtig hørt af mig, og hvad gjorde jeg der? Og hvad gør jeg typisk, der får dig til at stoppe med at fortælle?',
      sources: [NHS_PMS],
    },
    {
      id: weeklyId(M, 2),
      month: M,
      week: 2,
      title: 'Den usynlige liste og det ugentlige tjek-ind',
      body: [
        'Der findes et arbejde i de fleste hjem, som ingen ser, fordi det foregår i ét hoved. At huske, at der skal købes gave til fødselsdagen på fredag. At vide, at støvlerne er blevet for små. At tandlægen skal bookes, at svigermor har ringet, at der mangler madpakkepapir. Det kaldes mental belastning, og i mange par ligger den mest hos kvinden, også når de praktiske opgaver deles nogenlunde ligeligt, og også når manden med fuld overbevisning siger "jamen jeg gør jo halvdelen". Han gør halvdelen af det, der kan ses. Han står ved panden og tror, han har lavet middagen. Denne uge handler om at få resten frem i lyset, og om at bygge den samtale, der holder det synligt.',
        'Det tunge ved den usynlige liste er ikke opgaverne. Det er at være den, der husker dem, planlægger dem, uddelegerer dem og tjekker, at de bliver gjort. Når du "hjælper", sparer hun hænderne, men ikke hovedet: hun skal stadig bede om det, forklare hvordan og følge op. Det er derfor "sig bare, hvad jeg skal gøre" er en sætning, der frustrerer mere, end den hjælper. Den lyder generøs. Den flytter bare arbejdet med at fordele arbejdet tilbage til hende, og nu har hun også en medarbejder, der står og venter på instruks med et viskestykke over skulderen.',
        'Alternativet er ejerskab. En opgave, du ejer, er din fra start til slut: du husker den, planlægger den, udfører den og retter op, hvis den glipper, og hun behøver aldrig tænke på den igen. Vælg noget med en fast rytme og hele kæden: alt vasketøj, alle madpakker, alt omkring bilen, al kontakt med børnenes institution. Og modstå fristelsen til at spørge, hvordan hun vil have det gjort. Find selv ud af det. Du har samlet møbler uden at læse vejledningen og fået en sous vide til at virke på ren stædighed; du kan sgu finde ud af madpakker. Det er netop den del, der letter hende. Bliver det gjort lidt anderledes, end hun ville, er det prisen for, at det ikke længere er hendes.',
        'Listen er lang hele måneden, men den føles længst i ugen før menstruationen, og det er ikke tilfældigt. Når progesteron og østrogen falder, bliver søvnen dårligere, tolerancen for rod og støj lavere og følelsen af at stå alene stærkere. Opgaver, der var neutrale dag 10, bliver bjerge dag 25. Det er derfor, opvaskeren dukker op i skænderier den uge og næsten aldrig i follikelfasen. Opvaskeren er den samme. Forstærkeren er skruet op. Den kloge reaktion er ikke at diskutere, om fordelingen er fair lige nu. Det er at tage mere i netop de dage, uden regnskab, og at måle fairness over en måned frem for over en aften. Hun får menstruation, du får ikke; det er en asymmetri, og en rimelig fordeling tager højde for den. Et regneark gør ikke, og du havde for søren heller ikke tænkt dig at lave et.',
        'Det, der holder listen synlig, er en fast samtale. Et ugentligt tjek-ind på et kvarter, samme dag hver uge, uden telefoner, med tre spørgsmål: Hvad gik godt i denne uge? Hvad var svært? Hvad har du brug for i den kommende uge? Det sidste spørgsmål er det vigtigste, fordi svaret ofte følger cyklussen: "Jeg får menstruation onsdag, så torsdag aften vil jeg gerne have fri fra alt." Det er en sætning, der kun bliver sagt, hvis nogen spørger, og som ellers ender som et skænderi torsdag aften, hvor du står forvirret med en gryde og en ske og ikke aner, hvad der gik galt. Tjek-indet må ikke blive et sted, hvor alt skal løses. Det er et sted, hvor tingene bliver sagt, mens de er små. Som at smage sovsen til undervejs i stedet for at opdage, at den var for salt, da gæsterne sad ned.',
        'Til de dage, hvor hun ikke har energi til at forklare, hjælper et aftalt signal. Et ord ("grå dag"), et tal fra 1 til 5, en emoji eller en bestemt kop, der stilles frem. Betydningen aftaler I på forhånd, når I begge er rolige: "Når jeg sender det, har jeg brug for, at du tager det praktiske og ikke stiller spørgsmål." Signalet fjerner behovet for at forklare og forsvare sig på en dag, hvor der ikke er overskud til det, og det giver dig en klar opgave i stedet for et gæt. Mange par oplever, at signalet også bruges den anden vej: du kan have grå dage, og hun kan tage over. Du må gerne have brug for ro. Du må bare ikke forvente, at nogen gætter det. Det har du selv lige brugt to uger på at lære.',
        'Ugens opgave: bed hende skrive den usynlige liste ned, alt hun går og husker på, og læs den uden at kommentere. Ikke "det er da ikke så slemt", ikke "det kunne jeg godt have gjort". Bare læs. Sæt dig ned først. Vælg så ét område, du overtager helt, og læg det første tjek-ind i kalenderen. Tre konkrete skridt, som tilsammen flytter mere end en måneds gode intentioner. Gode intentioner har aldrig smurt en madpakke.',
      ],
      conversationQuestion:
        'Hvad står der på din usynlige liste, som jeg aldrig har set? Og hvilket område ville lette dig mest, hvis jeg overtog det helt?',
      sources: [NHS_PMS],
    },
    {
      id: weeklyId(M, 3),
      month: M,
      week: 3,
      title: 'Skænderier: mønstre, reparation og undskyldninger uden "men"',
      body: [
        'Alle par skændes. Det er ikke antallet af konflikter, der forudsiger, om et forhold holder, men hvordan de forløber, og især hvor hurtigt og hvor godt der repareres bagefter. Det er gode nyheder, hvis du havde tænkt dig at blive bedre til at skændes. Det havde du. Denne uge ser vi på tre ting: det mønster, cyklussen tegner i jeres konflikter, den reparation, der genskaber kontakt, og den undskyldning, der faktisk virker.',
        'Kigger du tilbage på jeres seneste skænderier, ligger de sandsynligvis ikke jævnt fordelt over måneden. De fleste par har et mønster: småting eskalerer i de sidste fire til seks dage før menstruationen, og de samme småting glider forbi i follikelfasen. Det betyder ikke, at problemerne er indbildte. Irritationen over den skæve fordeling er der også dag 9; du slipper bare med en bemærkning. På dag 26 står forstærkeren højere, søvnen er dårligere, og tolerancen mindre, så den samme sætning lander hårdere og svares hurtigere. Samme ret, serveret på en dag, hvor alt smager stærkere. Når I kender mønstret, kan I bruge det bevidst: tilbagevendende emner tages i follikelfasen, og i lutealfasen er det tilladt for begge at sige "kan vi parkere den til næste uge?" uden at det tæller som flugt. Det er ikke at løbe fra opvasken; det er at sætte den i blød. Notér de dage, det gik skævt, i appen. Efter to måneder ser I mønstret sort på hvidt, og det er sværere at tage personligt, når det står i en kalender.',
        'Før du tager noget op, eller reagerer på noget hun har taget op, er tre ting værd at tjekke: Har hun sovet? Har hun spist? Er I inden for den sidste uge før menstruation? Ikke for at afskrive det, hun siger, men for at vurdere, om samtalen har en chance lige nu. Sult og dårlig søvn forstærker irritabilitet mere end noget andet, og begge er almindelige i lutealfasen. Tjek i øvrigt de to første på dig selv, inden du begynder at føle dig klog. Din tomme mave har aldrig haft en god idé. Er svaret nej, så begynd med mad og hvile. "Skal vi spise først og så tale om det?" er en omsorgshandling, ikke en afvisning, når den siges uden at gøre hendes tilstand til en diagnose. "Du er bare sulten" er en diagnose. Du er ikke læge. Du er en mand med en pande, og det er sgu også rigeligt.',
        'Når det alligevel er gået skævt, kommer reparationen. Reparation er ethvert forsøg på at genskabe kontakt, før uenigheden er løst: en hånd på skulderen, en kop kaffe stillet frem, en sætning som "jeg vil ikke have, at vi er sådan her. Kan vi begynde igen?" Det kræver, at én af jer går først, og det behøver ikke være den, der har mest ret. Det er faktisk sjældent den, der har mest ret, og det er en lektie i sig selv. Lå skænderiet i PMS-dagene, er det ofte lettest at reparere, når menstruationen er kommet, og hormonerne har fundet bunden; men vent ikke længere end nødvendigt. Kold luft er en gryde, der er brændt på: jo længere den står, jo mere skal der skrubbes, og jo mere vokser historien om, hvad den anden mente.',
        'Nogle gange kræver reparationen en undskyldning, og en god undskyldning har tre dele: hvad du gjorde, hvad det gjorde ved hende, og hvad du gør anderledes. "Undskyld, jeg afbrød dig, mens du fortalte om din dag. Det må have føltes, som om jeg ikke gad lytte. Jeg vil lade dig tale færdigt fremover." Det, der ødelægger en undskyldning, er tilføjelserne: "men du var også...", "hvis du blev ked af det", "jeg var jo bare træt". Hvert "men" trækker undskyldningen tilbage. Og "undskyld, hvis du følte dig..." er ikke en undskyldning, det er en påstand om, at problemet er hendes følelse, pakket ind som høflighed. Hold den kort. Forvent ikke tilgivelse på stedet; en undskyldning er ikke en mikroovn, der bipper, når den er færdig. Hun må gerne have brug for tid. Undskyldningen er din, hvad hun gør med den, er hendes. Du får ikke en kvittering, og du skal for søren ikke bede om en.',
        'Det sidste greb handler om at forebygge skænderiet. Der er ting, du gerne vil sige, som ikke er kritik af hende som menneske, men som kan lande sådan. Uopfordret kritik aktiverer forsvar hos alle, også hos dig, hvilket du ved, hvis nogen har kommenteret din kørsel eller måden, du skærer løg på. Kritik, man har sagt ja til at modtage, lander anderledes. Spørg derfor: "Må jeg sige noget, jeg har lagt mærke til? Du må også godt sige nej." Får du ja, så sig én ting, konkret, uden "altid" og "aldrig", og stop der. Får du nej, så respektér det, og prøv en anden dag. Follikelfasen er det oplagte tidspunkt. Og husk, at det samme gælder omvendt: hun må også bede om lov, og du må også sige "ikke i dag".',
        'Ugens opgave: find jeres seneste skænderi i kalenderen, og se hvilken dag det lå på. Aftal én sætning, I begge må bruge, når timingen er dårlig, og én lille gestus, der betyder "kan vi begynde forfra?". Så er værktøjerne på plads, før de skal bruges. Og de skal bruges. Det er det eneste, man kan være sikker på, ud over at opvaskeren skal tømmes igen.',
      ],
      conversationQuestion:
        'Hvad gør jeg typisk efter et skænderi, som gør det sværere at komme tilbage til hinanden? Og hvad ville du ønske, jeg gjorde i stedet?',
      sources: [NHS_PMS],
    },
    {
      id: weeklyId(M, 4),
      month: M,
      week: 4,
      title: 'Lyst, privatliv og alle de andre',
      body: [
        'De sidste emner i denne måned er dem, de fleste par taler mindst om: lyst, og hvad der må siges til hvem. Begge handler om tillid, og begge bliver lettere, når de tages på en god dag i stedet for i det øjeblik, de bliver til et problem. Det øjeblik er typisk klokken 23 i soveværelset, og der er ingen nogensinde blevet klogere. Der er for søren heller aldrig lavet god mad klokken 23.',
        'Sex er noget af det sværeste at tale om, også i lange forhold, fordi et nej føles som afvisning, og et ønske føles som et krav. Det hjælper at tale om lyst som noget, der svinger, ligesom energi og humør, og som I begge har en kurve for. Omkring ægløsning har mange mere lyst, i lutealfasen og under menstruationen mindre, og nogle oplever det omvendt eller helt anderledes. Det er sæson, ikke en fejl. Spørg om hendes kurve af nysgerrighed, ikke som forhandling: "Hvornår i måneden mærker du mest lyst? Hvad hjælper, når den er lav? Er der noget, der slukker den, som jeg ikke ved?" Forbered dig på, at svaret på det sidste kan handle om dig. Det gør det sgu tit. Tag samtalen på en gåtur eller ved køkkenbordet, ikke i sengen og ikke efter et nej. Det er der, den er ufarlig.',
        "Et nej i lutealfasen eller under menstruationen handler oftest om krop, træthed og ømhed, ikke om dig. Men et nej sagt med skyldfølelse og modtaget med skuffelse bliver hurtigt en spiral: hun begynder at undgå situationer, hvor spørgsmålet kan komme op, og du begynder at læse afstand ind i alt, også i måden hun stiller mælken på plads. Bryd spiralen ved at gøre nej'et ufarligt. Sig højt, at et nej er et komplet svar, og at du hellere vil have et ærligt nej end et pligt-ja. Bed om, at hun siger, hvad hun i stedet har lyst til: en krammer, at ligge tæt, ingenting. Nærhed uden forventning er den nærhed, der gør et senere ja let. Og læg mærke til, om det er dig, der altid spørger, som en mand, der står og kigger ind ad vinduet til et lukket køkken. Hvis ja, så prøv en måned, hvor du kun tager imod. Det er sværere, end det lyder.",
        'Så til de andre. Jo mere du ved om cyklussen, jo mere fristende bliver det at dele det: forklare vennerne, hvorfor hun gik tidligt, lave en sjov bemærkning om appen, eller sige "hun har ægløsning, derfor er hun så glad". Du har lært noget, og det er fristende at optræde med det, som en mand, der har lært at lave surdej og nu ikke kan tale om andet. Lad være, medmindre hun har sagt god for det. Cyklussen er hendes krop, og hvor åben hun er om den, er hendes valg. Nogle taler frit om menstruation med alle, andre kun med dig, og mange ligger imellem og afhænger af, hvem der er til stede. Det gælder også det venligt mente. En kommentar om hendes fase i selskab er en kropskommentar, uanset fortegn. Du er ikke hendes pressechef. Du er hendes partner, og partneren holder mund.',
        'Har I børn, opdager de før eller siden, at mor har dage med ondt eller træthed. De opdager det som regel før dig, ligesom de opdagede, at mælken var udløbet, før du gjorde. Hvordan det forklares, er hendes beslutning, og den er værd at tage sammen, mens det er roligt. Nogle vil have menstruation omtalt åbent og almindeligt, fordi det fjerner skam for både piger og drenge. Andre vil have det holdt privat, i hvert fald til børnene selv spørger. Uanset hvad kan du vise børnene, hvordan man tager hensyn, når nogen har ondt, uden at gøre mor til den svage. "Mor har brug for ro i dag, så vi laver maden" lærer dem noget om omsorg, der holder hele livet. Og at far kan lave mad, hvilket er ny information for nogle børn.',
        'Til sidst det, der skal blive mellem jer. Det, hun fortæller dig om smerte, blødning, lyst, humør og angst, fortæller hun dig i fortrolighed, også når det ikke bliver sagt eksplicit. Det gælder over for din familie, dine venner og kolleger, og det gælder både det alvorlige og det, der kunne blive en god historie i fredagsbaren. Du har andre gode historier. Kalenderen i appen er hendes data, ikke et emne til middagsbordet. Fortrolighed er det, der gør, at hun fortæller dig mere næste gang. Bryd den én gang, og døren lukker lidt. Spørg hellere en gang for meget, hvad der må siges videre. Det føles akavet i tre sekunder. Det andet føles akavet i tre måneder.',
        'Og en sidste ting, som hele måneden har handlet om, uden at sige det: kommunikation går begge veje. Hvis du kun spørger og aldrig fortæller, bliver du en støttefunktion frem for en partner, og ingen vil være kæreste med en kundeservice. Heller ikke med en tjener, der aldrig selv sætter sig ned og spiser. Fortæl, hvordan du har det, også når det er "jeg er træt og har brug for en time for mig selv". Vælg timing og størrelse med omtanke, men sig det. Det, du beder hende om at turde, skal du sgu også selv turde.',
      ],
      conversationQuestion:
        'Er der noget om din cyklus, din lyst eller din krop, som du gerne vil have, at jeg holder helt for mig selv? Og er der noget, du ville ønske, jeg turde spørge dig om?',
    },
  ],
  wrap: {
    id: wrapId(M),
    month: M,
    title: 'Måned 2: Kommunikation og støtte',
    summary: [
      'Denne måned handlede om at gøre viden til ord, og om at opdage, at ordene er den svære del. De tre grundgreb bærer det meste: spørg i stedet for at gætte, lyt færdigt uden at hente din indre advokat, og validér følelsen, før du foreslår en løsning. Oven på dem ligger reglen, der aldrig må brydes: fasen må bruges som grund til at give mere, aldrig som argument i en uenighed eller som svar på en følelse. Appen er ikke et våben. Den er en indkøbsliste, og man slår sgu ikke folk med en indkøbsliste.',
      'Du har lært, at den usynlige liste er den tungeste del af husarbejdet, at den vokser i lutealfasen, og at ejerskab letter, hvor "sig bare til" ikke gør. Du har set, hvordan skænderier følger cyklussens kalender, hvordan man reparerer, før uenigheden er løst, hvordan en undskyldning uden "men" ser ud, og hvorfor feedback lander bedre, når man har bedt om lov. Og du har talt om lyst og nej på en god dag, og om hvad der er hendes at dele med venner, børn og familie. Ikke din fredagshistorie. Du har andre.',
      'Næste måned går vi i dybden med menstruationen: smerte, blødning, energi og det, du konkret kan gøre i de dage, hvor det er sværest. Find varmepuden frem allerede nu, og læg den, hvor du ville lægge en kold øl til dig selv.',
    ],
    keepDoing: [
      'Hold det ugentlige tjek-ind på et kvarter: hvad gik godt, hvad var svært, hvad har du brug for? Uden telefon. Den ligger i den anden ende af huset.',
      'Spørg "øre eller forslag?", og gør så faktisk det, hun svarer. Også når svaret er øre.',
      'Brug jeres signal for de hårde dage, og tag over uden spørgsmål, når det kommer. Ikke ét.',
      'Ej mindst ét område i hjemmet helt, fra at huske til at udføre. Uden at spørge hvordan. Du kan godt finde ud af det.',
      'Bed om lov, før du giver feedback, og sig undskyld uden "men". Heller ikke et lille et.',
      'Hold det, hun fortæller om sin krop, mellem jer, medmindre hun siger andet. Også efter den tredje øl.',
    ],
    quiz: [
      {
        question:
          'Hun kommer hjem dag 25, smider tasken og siger: "Jeg er så træt af min chef." Hvad hjælper mest?',
        options: [
          '"Har du prøvet at tale med HR om det?"',
          '"Det giver mening, at du er træt af det. Vil du have et øre eller forslag?"',
          '"Det er nok også fordi du er lidt PMS-ramt i dag."',
          '"Det lyder nu ikke så slemt."',
        ],
        correctIndex: 1,
        explanation:
          'Validér først, spørg så hvad hun har brug for. Løsninger før anerkendelse lyder som, at følelsen er problemet. Og fasen som forklaring på en følelse er den sætning, der får dig til at sove på sofaen. Og sofaen er sgu ikke god.',
      },
      {
        question:
          'Du har lagt mærke til, at hun lover for meget til andre og bliver udbrændt af det. Hvornår og hvordan siger du det?',
        options: [
          'Dag 26 om aftenen, lige når det er sket igen',
          'Foran vennerne, som en kærlig joke',
          'I follikelfasen, efter at have spurgt "må jeg dele en observation?"',
          'Slet ikke, det er hendes sag',
        ],
        correctIndex: 2,
        explanation:
          'Feedback, man har sagt ja til at modtage, lander helt anderledes end uopfordret kritik. Timing i follikelfasen giver den bedste chance. Foran vennerne giver den dårligste, plus en meget stille køretur hjem.',
      },
      {
        question:
          'I skændtes i går aftes, og der er kold luft i dag. Ingen af jer har sagt noget. Hvad er bedst?',
        options: [
          'Vente til hun kommer først; det var hende, der begyndte',
          'Skrive en lang besked med din version af, hvad der skete',
          'Lave en lille gestus, fx en kop kaffe, og sige "kan vi begynde forfra?"',
        ],
        correctIndex: 2,
        explanation:
          'Reparation kræver, at én går først, og den behøver ikke vente på, at uenigheden er løst. Jo længere kold luft, jo dyrere bliver den, som en gryde, der brænder på. Dag ét koster en kop kaffe.',
      },
      {
        question: 'Hvilken undskyldning virker bedst?',
        options: [
          '"Undskyld, hvis du blev ked af det."',
          '"Undskyld, men du var også ret hård."',
          '"Undskyld, jeg afbrød dig. Det må have føltes, som om jeg ikke gad lytte. Jeg lader dig tale færdigt fremover."',
          '"Okay, okay, undskyld så."',
        ],
        correctIndex: 2,
        explanation:
          'En god undskyldning har tre dele: hvad du gjorde, hvad det gjorde ved hende, og hvad du gør anderledes. "Hvis" og "men" trækker den tilbage. "Okay, okay" er ikke en undskyldning, det er en kapitulation med dårlig attitude, og den har du for søren prøvet før.',
      },
      {
        question:
          'Hun siger: "Jeg skal minde dig om alt. Jeg er træt af at være den, der husker." Hvad letter mest på sigt?',
        options: [
          'Sige "sig bare, hvad jeg skal gøre, så gør jeg det"',
          'Overtage ét område helt, fra at huske til at udføre, uden at hun skal tjekke',
          'Lave en fælles liste, som hun holder opdateret',
          'Forklare, at du også har meget om ørerne',
        ],
        correctIndex: 1,
        explanation:
          'Det tunge er at være den, der husker. Ejerskab tager hele kæden fra hende. "Sig bare, hvad jeg skal gøre" lyder generøst og lægger fordelingsarbejdet tilbage hos hende, nu med en medarbejder oveni, der står med et viskestykke og venter.',
      },
      {
        question:
          'Til en middag med venner spørger en ven, hvorfor hun gik hjem tidligt. Hvad gør du?',
        options: [
          '"Hun har PMS, I ved, hvordan det er."',
          '"Hun var træt" og skifter emne. Resten er hendes at dele.',
          'Fortælle om appen og at hun er på dag 26',
          'Lave en joke om det og håbe, at ingen fortæller hende det',
        ],
        correctIndex: 1,
        explanation:
          'Hvor åben hun er om sin cyklus, er hendes valg. En kommentar om hendes fase i selskab er en kropskommentar, også når den er venligt ment. Og nogen fortæller hende det altid. Der er altid én, der husker alt.',
      },
    ],
  },
};
