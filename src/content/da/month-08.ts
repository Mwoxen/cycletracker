import type { MonthContent, Source } from '../types';
import { dailyId, weeklyId, wrapId } from '../types';

const NHS_MIGRAINE: Source = {
  label: 'NHS: Migraine',
  url: 'https://www.nhs.uk/conditions/migraine/',
};
const NHS_TENSION: Source = {
  label: 'NHS: Tension headaches',
  url: 'https://www.nhs.uk/conditions/tension-headaches/',
};
const NHS_PAIN: Source = {
  label: 'NHS: Period pain',
  url: 'https://www.nhs.uk/conditions/period-pain/',
};
const NHS_HEAVY: Source = {
  label: 'NHS: Heavy periods',
  url: 'https://www.nhs.uk/conditions/heavy-periods/',
};
const NHS_IRON: Source = {
  label: 'NHS: Iron deficiency anaemia',
  url: 'https://www.nhs.uk/conditions/iron-deficiency-anaemia/',
};
const NHS_ENDO: Source = {
  label: 'NHS: Endometriosis',
  url: 'https://www.nhs.uk/conditions/endometriosis/',
};
const NHS_FIBROIDS: Source = {
  label: 'NHS: Fibroids',
  url: 'https://www.nhs.uk/conditions/fibroids/',
};
const NHS_PARACETAMOL: Source = {
  label: 'NHS: Paracetamol for adults',
  url: 'https://www.nhs.uk/medicines/paracetamol-for-adults/',
};
const NHS_IBUPROFEN: Source = {
  label: 'NHS: Ibuprofen for adults',
  url: 'https://www.nhs.uk/medicines/ibuprofen-for-adults/',
};
const ACOG_DYSMENORRHEA: Source = {
  label: 'ACOG: Dysmenorrhea (painful periods)',
  url: 'https://www.acog.org/womens-health/faqs/dysmenorrhea-painful-periods',
};
const SUNDHED_DK_SMERTER: Source = {
  label: 'Sundhed.dk: Menstruationssmerter',
};
const SUNDHED_DK_MIGRAENE: Source = {
  label: 'Sundhed.dk: Migræne',
};

const M = 8;

export const month08: MonthContent = {
  month: M,
  theme: 'Smerte, træthed og hovedpine',
  focus: 'Læs mønstrene i hendes log, og vær klar dagen før. Ikke dagen efter, som du plejer.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'Denne måned: du holder op med at blive overrasket',
      insight:
        'Smerte, træthed og hovedpine er de tre symptomer, flest kvinder logger, og de tre, partnere oftest opdager for sent. Ikke fordi du er ligeglad. Fordi de kommer som enkeltdage, og enkeltdage husker du cirka lige så godt som dine kodeord. Hovedpinen i sidste måned lå måske på dag 27. Trætheden på dag 1 og 2. Rygsmerterne dag 1. I din hukommelse ligger de bare som "en dårlig uge", sådan cirka, omkring den der weekend. Kalenderen i appen husker det, du ikke gør. Denne måned lærer du at læse den, så du kan handle en dag før symptomet i stedet for en dag efter. Det er hele forskellen mellem at være sød og at være til hjælp. Sød er fint. Til hjælp er bedre.',
      action:
        'Åbn kalenderen, gå en cyklus tilbage, og tæl hvor mange dage der er logget smerte, træthed eller hovedpine. Bare tallet. Det er nok til at overraske dig.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: 'Prostaglandiner: ét stof, hele dag 1',
      insight:
        'Når slimhinden afstødes, frigiver den prostaglandiner, signalstoffer der får livmoderen til at trække sig sammen. Det er kramperne. Men prostaglandiner bliver ikke pænt, hvor de blev lavet. De rammer også tarmen, der trækker sig sammen og giver løs mave, og de kan give kvalme, hovedpine, kuldegysninger og ømhed i hele kroppen. Kvinder med kraftige kramper har målbart mere prostaglandin end kvinder med milde. Det forklarer, hvorfor dag 1 kan føles som influenza, og hvorfor den samme medicin, ibuprofen, hjælper mod flere symptomer på én gang: den blokerer dannelsen af prostaglandin. Én mekanisme, mange symptomer. Du behøver ikke lære ordet udenad. Du skal bare holde op med at tro, at maven, ryggen og hovedet er tre forskellige problemer.',
      action:
        'Hvis hun har menstruation: spørg, om det er maven, ryggen, hovedet eller det hele. Svaret fortæller dig, hvad du skal have klar næste gang. Så husk det denne gang.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN, ACOG_DYSMENORRHEA],
    },
    {
      id: dailyId(M, 3),
      month: M,
      day: 3,
      title: 'Menstruationsmigræne kommer med en tidsplan',
      insight:
        'Migræne er cirka tre gange så hyppig hos kvinder som hos mænd, og hormonerne er en stor del af forklaringen. Når østrogen falder brat lige før menstruationen, reagerer hjernen hos nogle med et migræneanfald. Det kaldes menstruationsmigræne og rammer typisk i vinduet fra to dage før til tre dage inde i blødningen. Anfaldene er ofte længere, kraftigere og sværere at behandle end migræne på andre tidspunkter. Det er faldet i østrogen, ikke det lave niveau i sig selv, der udløser det. Derfor ligger anfaldet så præcist, og derfor kan det forudsiges i kalenderen, når først mønstret er set to-tre gange. Det er med andre ord et af de få problemer i dit liv, der sender en kalenderinvitation i forvejen. Du skal bare åbne den.',
      action:
        'Tjek loggen: er der hovedpine i dagene lige omkring de sidste to menstruationers start? Skriv det ned, hvis ja. Ikke i hovedet, et sted du kan finde igen.',
      phaseTags: ['menstrual', 'luteal'],
      sources: [NHS_MIGRAINE, SUNDHED_DK_MIGRAENE],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'Migræne eller hovedpine? Ikke det samme, nej',
      insight:
        'Ordet hovedpine dækker over to meget forskellige ting, og du har formentlig behandlet dem ens hele dit liv. Spændingshovedpine føles som et bånd om hovedet, på begge sider, trykkende, og man kan som regel fortsætte dagen. Migræne er typisk ensidig og dunkende, forværres ved bevægelse, og kommer ofte med kvalme, lysfølsomhed og lydfølsomhed. Nogle får forvarsler, aura, i form af flimren for øjnene eller prikken i hånden. Et migræneanfald varer fra fire timer til tre døgn og gør hverdagen umulig. De to typer behandles forskelligt, og de logges forskelligt. Når hun siger "hovedpine", er det værd at vide, hvilken hun mener. Den ene kræver et glas vand og en pause. Den anden kræver mørke og ro, og at du ikke tænder loftslampen "for lige at finde noget".',
      action:
        'Spørg hende, om hendes hovedpine typisk er "bånd om hovedet" eller "dunken i den ene side med kvalme". Husk svaret. Det er én sætning, det kan du godt.',
      phaseTags: [],
      sources: [NHS_MIGRAINE, NHS_TENSION],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'Tidligt er hele hemmeligheden',
      insight:
        'Den mest almindelige fejl med smertestillende er at vente. Ibuprofen og lignende blokerer dannelsen af prostaglandin, men de kan ikke fjerne det prostaglandin, der allerede er dannet. Tages pillen ved de første tegn, murren, træk i lænden, den kendte tyngde, når den at forebygge. Tages den, når smerten er på toppen, skal den kæmpe op ad bakke i en time. Det samme gælder migræne: jo tidligere behandlingen kommer, jo bedre virker den. Mange kvinder udskyder, fordi de ikke vil "tage medicin unødigt". Men rettidig medicin er ofte mindre medicin i alt. Din rolle er ikke at presse. Du er ikke apoteket, og du er slet ikke lægen. Din rolle er at gøre det nemt at vælge tidligt, og det kræver mest, at pakken ikke ligger bagerst i en skuffe bag batterierne.',
      action:
        'Læg de smertestillende et sted, hvor de er synlige og lette at nå, og sig: "De står der, hvis du mærker det komme." Så ikke mere. Ingen foredrag.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN, NHS_MIGRAINE],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: 'Paracetamol og ibuprofen: lær forskellen, du skal hente dem',
      insight:
        'To slags håndkøbsmedicin gør det meste af arbejdet, og de er ikke det samme, uanset hvor ens æskerne ser ud på apoteket. Ibuprofen virker mod prostaglandin og er derfor det bedste valg mod menstruationssmerter; det skal tages sammen med mad og er ikke egnet for alle, blandt andet ved mavesår, visse hjerte- og nyresygdomme, astma, der reagerer på det, og under graviditet. Paracetamol er mildere mod maven, virker mindre på kramper, men er et godt supplement og kan kombineres med ibuprofen. Følg pakkens dosering, hold afstand mellem doserne, og bland aldrig flere produkter, der indeholder det samme stof. Er hun i tvivl om, hvad hun må tage, er apoteket et gratis og godt sted at spørge. Din opgave er at kende forskellen, så du henter det rigtige og ikke kommer hjem med halspastiller.',
      action:
        'Tjek, at der er både ibuprofen og paracetamol i huset, og at udløbsdatoen holder. Fyld op i dag, hvis der mangler. Ja, i dag, ikke "næste gang jeg alligevel er forbi".',
      phaseTags: [],
      sources: [NHS_IBUPROFEN, NHS_PARACETAMOL],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'Lændesmerter og varme: din ven, stikkontakten',
      insight:
        'Menstruationssmerter sidder ikke kun i maven. Livmoderen deler nerveforsyning med lænden, og mange mærker kramperne som en dyb, murrende smerte i det nederste af ryggen, nogle gange ned i lårene. Det kaldes udstrålende smerte og er helt almindeligt. Varme er stadig det bedst dokumenterede huskeråd: en varmepude på lænden, et varmt bad eller en varmedunk under ryggen, når hun ligger ned. Varmen får musklerne til at slappe af og øger blodgennemstrømningen, som prostaglandinerne har strammet. Let strækning af lænden hjælper også nogle. Du kan ikke fjerne smerten, og det er ikke din opgave. Din opgave er at flytte varmen derhen, hvor den gør gavn, uden at hun skal rejse sig, finde den, og opdage, at du har lagt den tilbage i skabet.',
      action:
        'Varm en varmedunk eller varmepude, og læg den klar på hendes side af sofaen eller sengen, før hun spørger. Før. Det er hele øvelsen.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN, SUNDHED_DK_SMERTER],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: '"Menstruationsinfluenza" findes, og du skal ikke tjekke det',
      insight:
        'Mange kvinder beskriver dagene op til og ind i menstruationen som at være ved at blive syge: kuldegysninger, ømme muskler, tung krop, let feberfornemmelse, kvalme. Det er ikke en officiel diagnose, men mekanismen er velkendt. Prostaglandiner og andre betændelsesstoffer kommer ud i blodbanen og påvirker hele kroppen, ikke kun livmoderen, og hormonfaldet forstærker oplevelsen. Det går typisk over, når blødningen er godt i gang. Det, der hjælper, er det samme som ved almindelig influenza: hvile, væske, varme, nem mad og ibuprofen mod ømheden. Det, der ikke hjælper, er at tvivle på, om det er "rigtigt", eller at stå i døren med et termometer og en mine, som om du var vagtlæge. Hvis hun har logget det før, ved du, at det kommer igen. Så ved du også, hvad du skal gøre.',
      action:
        'Hvis hun siger, hun føler sig sløj: behandl det som en sygedag uden diskussion. Te, tæppe, og tag aftenens opgaver. Alle sammen, ikke de to nemme.',
      phaseTags: ['menstrual', 'luteal'],
      sources: [NHS_PAIN],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'Maven: det, ingen nævner ved middagsbordet',
      insight:
        'Løs mave på de første menstruationsdage er så almindeligt, at det har et kælenavn på mange sprog, men få taler om det. Prostaglandinerne, der får livmoderen til at trække sig sammen, rammer også tarmen, som ligger lige ved siden af. Resultatet er diarré, luft i maven, og for nogle kvalme og endda opkastning, når kramperne er værst. Det er ubehageligt og pinligt, ikke farligt, og det følger smerten: mindre prostaglandin, roligere mave. Derfor hjælper ibuprofen taget tidligt også på maven. Nem, mild mad, ikke for fed, ikke for meget kaffe, og let adgang til badeværelset gør resten. Kvalme dæmpes af små portioner og ingefær for nogle. Det betyder i praksis, at dag 1 ikke er dagen for din berømte chili, og at du ikke sidder i bad i fyrre minutter.',
      action:
        'Lav noget mildt og nemt at spise i dag, som ris, suppe, brød eller havregrød, og lad hende springe over, hvis hun ikke kan. Uden at se såret ud.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN, ACOG_DYSMENORRHEA],
    },
    {
      id: dailyId(M, 10),
      month: M,
      day: 10,
      title: 'Spørg nu, mens du stadig kan få et svar',
      insight:
        'Follikelfasen er det bedste tidspunkt til at tale om det svære, fordi det svære er overstået, og energien er tilbage. Det gælder også smerte. At spørge "hvordan var din menstruation denne gang?" midt i kramperne føles som et forhør, og du er ikke god nok til forhør til at slippe godt fra det. At spørge det en uge senere, mens I laver mad, føles som interesse. Og det er nu, hendes hukommelse om dagene stadig er frisk nok til at være præcis. Var det værre eller bedre end sidst? Hvad hjalp? Var der noget, hun manglede? Svarene er guld til næste måned, og de er kun tilgængelige, hvis nogen spørger på det rigtige tidspunkt. Det er dig, der har kalenderen. Så det er dig, der har timingen.',
      action:
        'Spørg i dag: "Hvad var det værste ved din menstruation denne gang, og var der noget, der hjalp?" Skriv svaret i en note i kalenderen, ikke på bagsiden af en kvittering.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'Træthed, der ikke går væk, kan være jern',
      insight:
        'Træthed, der kommer igen hver måned, kan have flere kilder, men én er let at overse: jern. Hver menstruation koster jern, og ved kraftige blødninger kan tabet være større, end kosten når at erstatte. Jernmangel udvikler sig langsomt og mærkes som vedvarende træthed, forpustethed ved trapper, bleghed, koncentrationsbesvær, hovedpine og for nogle uro i benene om natten. Det bliver ofte afskrevet som travlhed eller dårlig søvn, typisk af en, der selv sover fint. En simpel blodprøve hos lægen måler hæmoglobin og jerndepoter, og behandlingen er enkel. Jerntilskud skal dog ikke tages i blinde; for meget jern er heller ikke godt, så lad være med at bestille et kilo på nettet i aften. Hvis trætheden ikke letter i follikelfasen, er det et tegn på, at noget andet trækker.',
      action:
        'Spørg, om hun har fået målt sit jern inden for det seneste år. Hvis ikke, og hun bløder kraftigt, så foreslå det som en helt almindelig tjek-ting, i samme tonefald som "skal vi skifte dæk".',
      phaseTags: ['follicular'],
      sources: [NHS_IRON, NHS_HEAVY],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: 'Søvngæld: regningen kommer omkring dag 1',
      insight:
        'Søvnen følger også cyklussen. I lutealfasen holder progesteron kropstemperaturen oppe, og mange vågner oftere og sover lettere. I PMS-dagene forstyrrer uro og hormonfald. På menstruationens første nætter vækker smerte og lækage. Hver enkelt nat er måske kun lidt dårligere, men over ti-tolv dage bliver det til en søvngæld, som forklarer, hvorfor irritabilitet, hovedpine og smertefølsomhed er værst lige omkring blødningen: søvnmangel sænker smertetærsklen målbart. Follikelfasen er der, gælden betales tilbage, hvis hun får lov. En tidlig sengetid dag 3-8 er ikke dovenskab, men reparation. Og du kan hjælpe ved at beskytte de nætter, hvilket blandt andet betyder, at du ikke starter en samtale om køkkenrenovering klokken 22.',
      action:
        'Foreslå en tidlig sengetid i aften uden skærm, og tag det, der plejer at holde hende oppe: opvasken, madpakkerne, det sidste tjek af noget. Du finder ud af, hvad "noget" er.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: 'Bevægelse forebygger smerte, og du tager med',
      insight:
        'Det lyder forkert, men regelmæssig motion er en af de bedst dokumenterede måder at få mildere menstruationssmerter på. Ikke under kramperne, der skal du holde din gåtursidé for dig selv, men i ugerne før. Fysisk aktivitet forbedrer blodgennemstrømningen i bækkenet, sænker niveauet af stresshormoner og frigiver kroppens egne smertedæmpende stoffer. Kvinder, der bevæger sig jævnligt, rapporterer i gennemsnit kortere og mildere smerter. Det behøver ikke være hårdt: rask gang, cykling, svømning eller yoga tæller. Follikelfasen er det oplagte tidspunkt, fordi energien og lysten er der. Din rolle er ikke at være træner. Ingen har bedt om en træner. Din rolle er at gøre det let at komme afsted, og allerhelst at tage med, i dit eget tempo, uden at tale om pulszoner.',
      action:
        'Foreslå en gåtur eller cykeltur sammen i dag, og gør det til jer, ikke til "for din menstruations skyld". Den sætning forlader aldrig din mund.',
      phaseTags: ['follicular'],
      sources: [NHS_PAIN, ACOG_DYSMENORRHEA],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'Væske og koffein: to kedelige hovedpine-kilder',
      insight:
        'To af de hyppigste hovedpine-udløsere har intet med hormoner at gøre, men de forstærker de hormonelle. Væskemangel giver hovedpine i sig selv og gør en migræne værre, og mange drikker mindre, når de har det dårligt. Koffein er dobbelt: en stabil daglig mængde er fint og kan endda dæmpe hovedpine, men springes den vante kop over, kommer der abstinenshovedpine inden for et døgn. Uregelmæssigt koffeinindtag, meget en dag og lidt den næste, er derfor en klassisk udløser. Kaffe sent på dagen forværrer også den søvn, der i forvejen er skrøbelig i lutealfasen. Det enkleste råd er kedeligt: samme mængde kaffe hver dag, ikke efter klokken 15, og et glas vand ved siden af. Det er ikke et råd, du skal give hende. Det er et glas, du skal stille.',
      action:
        'Stil et glas vand eller en flaske ved hendes plads i dag, morgen og aften, uden at kommentere det. Ingen "husk nu at drikke". Bare glasset.',
      phaseTags: [],
      sources: [NHS_MIGRAINE, NHS_TENSION],
    },
    {
      id: dailyId(M, 15),
      month: M,
      day: 15,
      title: 'Ægløsningssmerte: et jag i siden, ikke en gåde',
      insight:
        'Omkring hver femte kvinde mærker ægløsningen som en smerte i den ene side af underlivet, når folliklen brister og lidt væske irriterer bughinden. Det kaldes ægløsningssmerte eller mittelschmerz, og nej, du behøver ikke udtale det korrekt. Den varer fra nogle minutter til et par dage, kan skifte side fra måned til måned, og er som regel mild og harmløs. Nogle mærker den også som en tyngde eller let kvalme. Den er faktisk nyttig, fordi den er et af de mest præcise tegn på, hvor i cyklussen hun er, mere præcist end dine gæt. Kraftig ægløsningssmerte, smerte med feber, eller smerte, der kommer sammen med usædvanlig blødning, hører ikke til det normale og fortjener en læge.',
      action:
        'Hvis hun nævner et jag i siden i dag: log det i kalenderen sammen med hende, og se om appens ægløsningsdato passer. Det er detektivarbejde, bare uden regnfrakke.',
      phaseTags: ['ovulation'],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'Hovedpine midt i cyklussen: det, ingen leder efter',
      insight:
        'Menstruationsmigræne er det kendte mønster, men nogle kvinder får også migræne omkring ægløsningen. Forklaringen er formentlig det bratte østrogenfald lige efter østrogentoppen, samme mekanisme som før menstruationen, bare mindre. Det bliver sjældent opdaget, fordi hovedpine dag 14 ikke "lyder hormonel", og fordi kalendere sjældent læses for midtcyklus-symptomer. Af nogen. Nogensinde. Efter et par loggede cyklusser kan mønstret være tydeligt: hovedpine to steder i måneden, begge med præcis timing. Hvis det er tilfældet, er det vigtig viden for både hende og lægen, fordi behandling kan tilrettelægges efter det. Det starter med, at symptomet bliver logget, også når det ikke passer ind i det forventede. Og med, at én person faktisk kigger efter det. Det er dig.',
      action:
        'Kig i kalenderen efter hovedpine i dagene omkring ægløsningen i de sidste cyklusser. Fortæl hende, hvad du så, uanset svaret. "Ingenting" er også et svar.',
      phaseTags: ['ovulation'],
      sources: [NHS_MIGRAINE],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'Sådan læser du kalenderen uden at glo',
      insight:
        'En log er kun værdifuld, hvis den bliver læst, og de fleste læser den forkert: én dag ad gangen, som en, der prøver at forstå en film ved at se et enkelt billede. Læs den i stedet som en linje. Find de sidste to-tre menstruationsstarter. Tæl bagud fra hver: hvilken dag kom hovedpinen? Hvor mange dage før blødningen begyndte trætheden? Hvor mange dage varede smerten? Læg tallene ved siden af hinanden. Rammer de samme cyklusdag plus minus én, er det et mønster. Rammer de tilfældigt, er det noget andet. Så tag mønstret og læg det fremad: hvis hovedpinen plejer at komme to dage før blødning, og appen forventer blødning på fredag, er onsdag dagen at være klar. Det er hele metoden. Den kræver ingen uddannelse, kun at du sætter dig ned.',
      action:
        'Vælg ét symptom, hun logger ofte, og find dets cyklusdag i de sidste to cyklusser. Regn ud, hvornår det forventes næste gang. Det er hovedregning, du klarer det.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'Symptomdagbog til lægen: du er sekretæren',
      insight:
        'Skal hun til lægen med smerter eller migræne, er det bedste, hun kan tage med, en dagbog over to-tre cyklusser. Lægen har brug for at vide: hvilke dage, hvor slemt på en skala fra 1 til 10, hvor længe det varede, hvad hun tog og om det virkede, og om hun måtte aflyse noget. Netop det sidste, funktionstab, er det, der flytter en konsultation fra "det er nok normalt" til "det skal vi undersøge". Appens kalender og noter er en færdig dagbog, hvis de er brugt, og den kan læses op eller vises på fem minutter. Mange lever med smerter i årevis, fordi de i lægens kontor ikke kan huske, hvor slemt det egentlig var. Din opgave er at sikre, at det er skrevet ned. Ikke glamourøst, men det virker.',
      action:
        'Spørg, om der er en lægetid, hun har udskudt. Tilbyd at samle de sidste cyklussers smertedage fra kalenderen på et stykke papir. Et rigtigt stykke papir, læger elsker papir.',
      phaseTags: [],
      sources: [NHS_ENDO, NHS_MIGRAINE],
    },
    {
      id: dailyId(M, 19),
      month: M,
      day: 19,
      title: 'Ledsmerter og stive morgener: tag poserne',
      insight:
        'Nogle kvinder mærker ømme eller stive led, især knæ, hænder og lænd, i dagene før og under menstruationen. Mekanismen er ikke fuldt forstået, men østrogen har en dæmpende effekt på betændelse og smerte, og når det falder, mærkes led og muskler mere. Væskeophobning i lutealfasen kan gøre led stive og hænder hævede, og prostaglandiner bidrager til den generelle ømhed. Kvinder med gigtsygdomme oplever ofte, at symptomerne svinger med cyklussen. Mild, cyklisk ledømhed er almindelig og går over med blødningen. Vedvarende hævelse, rødme, varme eller stivhed over en time om morgenen er noget andet og fortjener en læge. Varme, bevægelse og at undgå tunge løft de dage hjælper. Tunge løft er, hvad du er til. Endelig en opgave, du ikke kan gøre forkert.',
      action:
        'Tag de tunge løft i dag: indkøbsposer, vasketøjskurven, det der skal flyttes. Sig ikke hvorfor, bare gør det. Og lad være med at stønne demonstrativt undervejs.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 20),
      month: M,
      day: 20,
      title: 'Forstoppelse i lutealfasen: hold mund, lav grønt',
      insight:
        'Hvor menstruationen giver løs mave, giver lutealfasen ofte det modsatte. Progesteron får glat muskulatur til at slappe af, også i tarmen, så maden bevæger sig langsommere igennem. Resultatet er forstoppelse, oppustethed og luft i ugen før menstruationen, ofte ovenpå den væskeophobning, der i forvejen strammer bukserne. Når blødningen begynder og prostaglandinerne tager over, vender det, ofte brat. Det er en af grundene til, at maven kan føles så forskellig fra uge til uge. Det, der hjælper, er kedeligt og effektivt: fibre fra grøntsager, frugt og fuldkorn, rigeligt vand, og daglig bevægelse. Det, der ikke hjælper, er at kommentere maven. Ikke én kommentar. Heller ikke en, du synes er sød. Særligt ikke den.',
      action:
        'Lav aftensmad med rigeligt grønt og fuldkorn i dag, og foreslå en kort gåtur efter maden. Uden at forklare, hvorfor der pludselig er så meget broccoli.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: 'Lutealtræthed er fysiologi. Ikke en holdning.',
      insight:
        'Trætheden i den sidste uge før menstruationen har sin egen forklaring. Progesteron virker sløvende på hjernen, næsten som et mildt beroligende middel. Kropstemperaturen er forhøjet, hvilket i sig selv koster energi og forstyrrer søvnen. Serotonin falder med østrogen. Kroppen forbrænder lidt mere og efterspørger mere mad. Lagt sammen giver det en tyngde, hvor alt kræver mere, og hvor sofaen kalder klokken 20. Det er ikke mangel på vilje, og det bliver ikke bedre af at blive presset, heller ikke af dit muntre "skal vi ikke lige". Det bliver bedre af søvn, mad til tiden, lavere krav, og at nogen tager det praktiske. Ligger trætheden i loggen på samme dage hver måned, ved du præcis, hvornår du skal sænke tempoet. Så gør det, før nogen beder dig om det.',
      action:
        'Kig i kalenderen: hvornår forventes næste menstruation? Ryd eller flyt én aftale i de fem dage før, uden at spørge først. Du må godt vælge den, du selv helst ville slippe for.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 22),
      month: M,
      day: 22,
      title: 'Spændingshovedpine: nakke, skærm og dig, der larmer',
      insight:
        'Spændingshovedpine er den mest almindelige hovedpine overhovedet: et trykkende bånd om panden eller nakken, på begge sider, mild til moderat, uden kvalme. Den udløses af stress, anspændte nakke- og skuldermuskler, for lang tid ved skærmen, for lidt søvn, for lidt vand og sprunget mad. I lutealfasen, hvor søvnen er dårligere og stresstærsklen lavere, kommer den lettere. Den behandles med det enkle: pause, vand, mad, frisk luft, varme på nakken, og paracetamol eller ibuprofen, hvis den ikke slipper. Hyppig spændingshovedpine, mere end et par gange om ugen, er et signal om, at hverdagen presser for hårdt, ikke bare at der mangler en pille. Og hverdagen, det er blandt andet dig, opvaskemaskinen du ikke har tømt, og den podcast, du hører uden høretelefoner.',
      action:
        'Hvis hun har hovedpine i dag: tag børnene, lyden eller opgaven ud af rummet i en halv time, og sæt vand og noget at spise ved hende. Gå så selv ud af rummet. Du er også lyd.',
      phaseTags: ['luteal'],
      sources: [NHS_TENSION],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'Reager før hun beder om det',
      insight:
        'Det er månedens vigtigste færdighed, og den er enkel: mønstret i loggen fortæller, hvad der kommer, og du handler dagen før. Plejer migrænen at ramme to dage før blødning, sørger du for stilhed, mørke gardiner og at hendes medicin ligger fremme dagen før. Plejer trætheden at komme dag 26, laver du mad og lader hende gå tidligt i seng. Plejer rygsmerterne at komme dag 1, er varmedunken fyldt aftenen før. Ingen af delene kræver, at hun forklarer sig eller beder om noget, og det er pointen. At bede om hjælp koster energi, som hun ikke har de dage. At få den uden at bede er beviset på, at nogen har lagt mærke til hende. Det er ikke tankelæsning. Det er at læse. Du har haft kalenderen hele tiden; nu bruger du den.',
      action:
        'Find det ene symptom, der er mest forudsigeligt i hendes log, og gør én forberedelse til det i dag, før det rammer. Ikke en plan om en forberedelse. En forberedelse.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 24),
      month: M,
      day: 24,
      title: 'Migræne: fjern verden, inklusive dig selv',
      insight:
        'Et migræneanfald kan ikke "tages sig sammen" igennem, men det kan gøres mindre. Behandlingen skal ind tidligt: ibuprofen eller anden håndkøbsmedicin ved første tegn, og triptaner, hvis lægen har ordineret dem. Derefter: et mørkt, stille, køligt rum, søvn hvis det er muligt, en kold klud på panden eller varme i nakken, små slurke vand, og noget let at spise mod kvalmen. Det, der forværrer, er lys, lyd, lugte, skærme og at skulle svare på spørgsmål. Også dine, også "er der noget, jeg kan gøre?" for femte gang. Din rolle er at fjerne verden fra hende i nogle timer: børn, telefon, aftaler, gæster. "Jeg tager det hele, læg dig" er den sætning, der hjælper mest. Bagefter er hun ofte udmattet i et døgn; det er en del af anfaldet, ikke en forlængelse, du må kommentere.',
      action:
        'Sørg for, at soveværelset kan gøres helt mørkt og stille i aften, og aftal et ord, hun kan sende, der betyder "migræne, tag over". Når ordet kommer, svarer du ikke med spørgsmål.',
      phaseTags: ['luteal', 'menstrual'],
      sources: [NHS_MIGRAINE],
    },
    {
      id: dailyId(M, 25),
      month: M,
      day: 25,
      title: 'Hvornår hovedpine fortjener en læge',
      insight:
        'Det meste hovedpine er ufarlig, men to slags kræver handling. Den akutte: hovedpine, der kommer som et lyn fra en klar himmel og er værst inden for et minut, hovedpine med feber, nakkestivhed eller udslæt, efter et slag mod hovedet, eller sammen med lammelse, talebesvær, synstab eller forvirring. Der ringer man 112 eller lægevagten med det samme. Den kroniske: migræne flere dage om måneden, hovedpine der forstyrrer arbejde eller søvn, eller anfald der bliver hyppigere. Det fortjener en tid hos egen læge, som kan tilbyde forebyggende behandling og tilpasse den til cyklussen. Har hun migræne med aura, skal lægen desuden vide det, før hun får p-piller med østrogen, fordi kombinationen frarådes. Det her er ikke dagen for humor. Det er dagen, hvor du lærer en liste udenad.',
      action:
        'Læs de akutte tegn højt for dig selv én gang, så du kan dem. Spørg så, om hendes migræne har ændret sig det seneste år.',
      phaseTags: [],
      sources: [NHS_MIGRAINE],
    },
    {
      id: dailyId(M, 26),
      month: M,
      day: 26,
      title: 'Smerte, der ikke er normal',
      insight:
        'Almindelige menstruationssmerter reagerer på varme og ibuprofen, holder sig til de første par dage, og forhindrer ikke hverdagen. Alt andet fortjener en læge. Tegnene er: smerte, der også kommer uden for menstruationen, smerte ved sex, smerte ved afføring eller vandladning omkring blødningen, kraftig blødning med klumper, smerter der ikke rykkes af medicin, og menstruationer der koster sygedage. Bag det kan ligge endometriose, adenomyose eller fibromer, tre tilstande, der er almindelige, kan behandles, og alligevel tager år at få stillet, fordi smerten normaliseres af alle omkring hende, ofte også af hende selv. Du skal ikke gætte, hvad det er. Du skal ikke google det klokken 23. Du skal være den, der siger, at det ikke skal være sådan.',
      action:
        'Hvis to eller flere af tegnene passer på hende: sig det højt i dag, "det her fortjener en læge", og tilbyd at booke tiden og tage med.',
      phaseTags: ['menstrual'],
      sources: [NHS_ENDO, NHS_FIBROIDS],
    },
    {
      id: dailyId(M, 27),
      month: M,
      day: 27,
      title: 'Mange piller er også et signal, ikke en kritik',
      insight:
        'Smertestillende er gode, når de bruges rigtigt, men de har en bagside: tages de for ofte, kan de selv give hovedpine. Det kaldes medicinoverforbrugshovedpine og opstår typisk, når almindelige smertestillende bruges 15 eller flere dage om måneden, eller triptaner 10 eller flere dage, i flere måneder i træk. Hovedpinen bliver daglig og dump, og hver pille giver en kort pause, hvorefter den kommer tilbage. Den eneste vej ud er at stoppe, og det bør gøres med lægen. Ikke med dig, og ikke ved at du gemmer æsken bag kaffen. Tæller du dagene i loggen, hvor hun tager noget, og tallet nærmer sig ti om måneden, er det ikke et tegn på, at hun er svag. Det er et tegn på, at grundproblemet skal behandles bedre, og det er lægens bord.',
      action:
        'Tæl i kalenderen, hvor mange dage i sidste cyklus der blev taget smertestillende. Er det over otte, så nævn det roligt og uden dom. Roligt. Øv dig på tonen først, hvis du skal.',
      phaseTags: [],
      sources: [NHS_MIGRAINE, NHS_PARACETAMOL],
    },
    {
      id: dailyId(M, 28),
      month: M,
      day: 28,
      title: 'Forbered menstruationen ud fra loggen, ikke ud fra en huskeliste',
      insight:
        'Måned 1 lærte dig de fire ting, der skal være i huset: bind eller tamponer, smertestillende, nem mad og varme. Det var begynderniveauet. Nu kan du gøre det personligt. Loggen fortæller, hvad netop hun har brug for: er dag 1 en rygdag, er varmen vigtigst; er det en migrænedag, er mørke og ro vigtigst; er det maven, er mild mad og et frit badeværelse vigtigst; er det trætheden, er en ryddet kalender vigtigst. Forberedelsen skal ligge dagen før den forventede blødning, ikke på dagen, fordi symptomerne ofte starter før blodet. Og fordi forudsigelsen er et skøn, gælder den fra to dage før. En forberedelse, der rammer, mærkes ikke som noget, du gjorde. Den mærkes som, at det var lettere. Du får ingen medalje. Det er sådan, du ved, det virkede.',
      action:
        'Tjek appens forventede dato for næste menstruation. Lav din egen liste med tre ting ud fra hendes log, og gør dem klar i dag. Tre. Ikke én, og ikke "jeg har det i hovedet".',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 29),
      month: M,
      day: 29,
      title: 'Sætninger om smerte, du skal pensionere',
      insight:
        '"Så slemt kan det da ikke være." "Min søster har aldrig noget." "Har du prøvet at tage en panodil?" "Du havde det også dårligt sidste måned." Sætningerne er ofte kærligt ment, og mindst én af dem har du sagt. De gør det samme: de sætter spørgsmålstegn ved, om smerten er ægte, eller om hun håndterer den rigtigt. Smerte kan ikke ses udefra, og kvinders smerte bliver i gennemsnit taget mindre alvorligt, også af sundhedsvæsenet. Det, hun har brug for fra dig, er det modsatte: at blive troet på uden bevis. "Det lyder virkelig slemt, hvad kan jeg gøre?" er nok. Sammenligninger med andre, forslag hun har hørt tusind gange, og påmindelser om, at det er tilbagevendende, hjælper aldrig, selv når de er sande. Især når de er sande.',
      action:
        'Vælg én sætning fra listen, du har brugt, og sig til hende, at du er holdt op med den. Spørg, om der er andre, hun ville ønske, du droppede. Forbered dig på, at der er.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 30),
      month: M,
      day: 30,
      title: 'Måned 8: det ved du nu, som du ikke vidste før',
      insight:
        'Du ved nu, at prostaglandiner forklarer kramper, løs mave, kvalme og "menstruationsinfluenza" på én gang, og at ibuprofen taget tidligt rammer dem alle. Du ved, at menstruationsmigræne udløses af østrogenfaldet i et præcist vindue, at spændingshovedpine og migræne er to forskellige ting, og hvornår hovedpine kræver en læge. Du ved, at træthed kan være jern, søvngæld eller progesteron, og at loggen viser hvilken. Vigtigst: du ved, hvordan man læser kalenderen som en linje, finder cyklusdagen for et symptom, og handler dagen før. Og du ved, at smerte, der slår hende ud, aldrig er "bare menstruation". For en måned siden vidste du, at hun "havde en dårlig uge". Det er fremskridt. Næste måned bygger vi videre med kost, træning og restitution i hver fase.',
      action:
        'Fortæl hende de to mønstre, du har fundet i hendes log denne måned, og hvad du vil gøre ved dem. Tag så månedens quiz. Uden at kigge tilbage, du har læst det.',
      phaseTags: [],
    },
  ],
  weekly: [
    {
      id: weeklyId(M, 1),
      month: M,
      week: 1,
      title: 'Menstruationsmigræne: østrogenfaldet, timingen og det, du gør dagen før',
      body: [
        'Migræne rammer omkring hver syvende voksen, og kvinder cirka tre gange så ofte som mænd. Forskellen opstår i puberteten og forsvinder igen efter overgangsalderen, og det er ikke tilfældigt: hormonerne er en stor del af forklaringen. For mange kvinder er cyklussen den mest pålidelige migræneudløser, de har, og samtidig den mest oversete. Også af den, der bor sammen med dem og har haft kalenderen i lommen hele tiden. Denne artikel handler om, hvordan det hænger sammen, og hvad du kan gøre.',
        'Mekanismen er østrogenfald. I dagene før menstruationen falder østrogen brat, og hos kvinder med anlæg for migræne reagerer hjernen på faldet med et anfald. Det er ikke det lave niveau i sig selv, men hastigheden på faldet, der udløser det. Derfor ligger anfaldet så præcist: fra to dage før blødningen til tre dage inde i den. Sker det i mindst to ud af tre cyklusser, kalder lægerne det menstruationsmigræne. Nogle får kun migræne der; de fleste får den også på andre tidspunkter, men anfaldene omkring menstruationen er typisk længere, kraftigere, mere præget af kvalme og sværere at behandle. Nogle kvinder får desuden et mindre anfald omkring ægløsningen, hvor østrogen også falder efter sin top.',
        'Et migræneanfald er ikke bare en slem hovedpine, og det er ikke det, du har, når du har glemt at spise frokost. Det er typisk ensidigt og dunkende, forværres af bevægelse, og kommer med kvalme, lysfølsomhed og lydfølsomhed. Det varer fra fire timer til tre døgn. Nogle får aura først: flimren for øjnene, prikken i hånden eller talebesvær i op til en time. Bagefter kommer ofte et "tømmermændsdøgn" med udmattelse og koncentrationsbesvær. Menstruationsmigræne kommer oftest uden aura. Men spørg hende, for har hun migræne med aura, skal lægen vide det, før hun får p-piller med østrogen, fordi kombinationen øger risikoen for blodprop og frarådes.',
        'Hvad hjælper? For det første timing. Al migrænebehandling virker bedst, jo tidligere den tages, og det gælder både håndkøbsmedicin som ibuprofen og receptpligtige triptaner. Kender man vinduet fra loggen, kan man have medicinen fremme dagen før. For det andet det gamle: mørkt, stille og køligt rum, søvn, væske, og noget let at spise mod kvalmen. For det tredje det forebyggende, som er en lægesamtale: ved menstruationsmigræne kan lægen tilbyde behandling, der tages i nogle dage omkring den forventede menstruation, eller hormonelle metoder, der udjævner østrogenfaldet. Det kræver, at mønstret er dokumenteret, og det er præcis det, kalenderen kan, hvis nogen gider åbne den.',
        'Udløsere, der forstærker et hormonelt anfald, er de kedelige: for lidt søvn, sprunget mad, væskemangel, uregelmæssig koffein, alkohol, stress og skærmlys. Ingen af dem giver migræne alene hos de fleste, men i vinduet lige før menstruationen er tærsklen lavere, og så tipper den ekstra dårlige nat læsset. Det er derfor, søvn, mad og vand i de sidste dage af lutealfasen er migræneforebyggelse, ikke bare god pleje. Og det er derfor, din idé om en sen middag med venner tirsdag før en forventet fredag er en dårlig idé, selv om den er sød.',
        'Din rolle er tredelt. Før anfaldet: læs loggen, kend vinduet, sørg for at medicinen er tilgængelig, og beskyt søvn og måltider i dagene op til. Under anfaldet: fjern verden fra hende. Børn, telefon, aftaler, lyd, lys, lugte og spørgsmål. Dine spørgsmål også. "Jeg tager det hele, læg dig" er den vigtigste sætning, og den er færdig, når du har sagt den. Efter anfaldet: forvent et døgn med lavere kapacitet, og skriv ned, hvad der hjalp. Og hvis anfaldene er hyppige, forstyrrer arbejdet, eller ændrer sig, så vær den, der siger, at det fortjener en læge, og tilbyd at samle dagene fra kalenderen.',
        'Én advarsel til sidst, som du bør kunne udenad, og her er der ingen vittighed: hovedpine, der kommer som et lyn og er værst inden for et minut, hovedpine med feber og nakkestivhed, efter et slag mod hovedet, eller sammen med lammelse, talebesvær, synstab eller forvirring, er ikke migræne, før det modsatte er bevist. Der ringer man 112 med det samme.',
      ],
      conversationQuestion:
        'Hvis din hovedpine har et mønster i cyklussen, hvornår ligger den så, og hvad ville du helst have, at jeg gjorde dagen før og på selve dagen?',
      sources: [NHS_MIGRAINE, SUNDHED_DK_MIGRAENE],
    },
    {
      id: weeklyId(M, 2),
      month: M,
      week: 2,
      title: 'Kroppen på dag 1: prostaglandiner, mave, ryg og medicin, der tages i tide',
      body: [
        'Måned 3 handlede om menstruationen som helhed. Denne artikel går et lag dybere i det fysiske: hvorfor så mange forskellige symptomer rammer på én gang, hvorfor de hænger sammen, og hvordan smertestillende bruges, så de faktisk virker. Det sidste er der overraskende mange, der gør forkert, og det er ikke kun hende.',
        'Det starter med prostaglandiner. Når livmoderslimhinden afstødes, frigiver den store mængder af disse signalstoffer, som får livmoderens muskel til at trække sig sammen for at skubbe slimhinden ud. Kvinder med kraftige menstruationssmerter har målbart højere niveauer end kvinder med milde. Men prostaglandiner bliver ikke, hvor de dannes. De rammer tarmen, som ligger lige ved siden af, og får den til at trække sig sammen: løs mave, luft og for nogle kvalme og opkastning, når kramperne er værst. De kommer ud i blodbanen og giver ømme muskler, kuldegysninger, hovedpine og den let febrile fornemmelse, mange kalder menstruationsinfluenza. Og de sender smerten ud i lænden og lårene, fordi livmoderen deler nerveforsyning med ryggen. Én mekanisme, mange symptomer. Det er ikke fire problemer, du skal løse. Det er ét, du skal forstå.',
        'Det er godt nyt, fordi det betyder, at én behandling rammer bredt. Ibuprofen og lignende midler blokerer det enzym, der danner prostaglandin. Derfor virker de bedre mod menstruationssmerter end paracetamol, og derfor hjælper de også på maven og ømheden. Men de kan ikke fjerne det prostaglandin, der allerede er dannet. Tages pillen ved første tegn, murren, træk i lænden, den kendte tyngde, forebygger den. Tages den, når smerten er på toppen, kæmper den op ad bakke. Mange udskyder, fordi de ikke vil tage medicin unødigt. Ved menstruationssmerter er det omvendt: tidlig medicin er ofte mindre medicin i alt. Ibuprofen skal tages med mad, og det er ikke for alle: ved mavesår, visse hjerte- og nyresygdomme, astma, der reagerer på det, og under graviditet er det en samtale med lægen eller apoteket. Paracetamol er skånsomt mod maven, virker mindre på kramper, men kan kombineres med ibuprofen. Følg pakken, hold afstand mellem doserne, og bland aldrig to produkter med samme stof. Det sidste er den fejl, du selv ville begå.',
        'Varme er det andet ben. En varmepude eller varmedunk på maven eller lænden får musklen til at slappe af og øger den blodgennemstrømning, som sammentrækningerne har strammet. Studier viser en effekt på niveau med håndkøbsmedicin, og de to kan bruges sammen. Et varmt bad virker på samme måde. Let bevægelse, en gåtur, hjælper flere end man tror, fordi det også øger blodgennemstrømningen og frigiver kroppens egne smertedæmpere. Og på lidt længere sigt er regelmæssig motion i ugerne før en af de bedst dokumenterede måder at få mildere kramper på. Bemærk: ugerne før. Ikke dag 1 klokken 7 med dine løbesko i hånden.',
        'Maven fortjener sit eget afsnit, fordi ingen taler om den. Diarré på dag 1 og 2 er meget almindelig, følger smerten, og dæmpes af det samme: ibuprofen tidligt. Derudover hjælper mild, nem mad, ikke for fed, ikke for meget kaffe, som i sig selv sætter gang i tarmen, og let adgang til badeværelset. Kvalme dæmpes af små portioner, og ingefær hjælper nogle. Ugen før, i lutealfasen, er problemet ofte det modsatte: progesteron gør tarmen langsom, og forstoppelse og oppustethed er normalt. Fibre, vand og bevægelse hjælper der. At maven er så forskellig fra uge til uge er ikke mærkeligt; det er to forskellige hormoner, der skiftes til at bestemme. Du skal ikke have en mening om nogen af delene. Du skal have suppe.',
        'Det praktiske for dig: hav begge slags smertestillende i huset og kend forskellen, så du kan hente det rigtige. Læg dem synligt, når loggen siger, at menstruationen nærmer sig. Hav varmen klar, ikke i skabet, men på hendes plads. Lav mild mad uden at spørge, om hun vil have den, og lad hende springe over. Tag opgaverne dag 1 og 2 som en selvfølge, ikke som en tjeneste, der skal nævnes senere. Og behandl "jeg føler mig sløj" som en sygedag, ikke som noget, der skal argumenteres for.',
        'Til sidst grænsen. Almindelige menstruationssmerter reagerer på varme og ibuprofen, holder sig til de første dage, og forhindrer ikke hverdagen. Smerter, der ikke rykkes af medicin, giver sygedage eller opkastning, kommer uden for blødningen eller ved sex, er ikke almindelige. De kan skyldes endometriose, adenomyose eller fibromer, som alle kan behandles. Du skal ikke gætte hvilken. Du skal sige, at det fortjener en læge.',
      ],
      conversationQuestion:
        'Hvad rammer dig hårdest på dag 1, maven, ryggen, hovedet eller trætheden, og hvad vil du have, at jeg har klar aftenen før?',
      sources: [NHS_PAIN, ACOG_DYSMENORRHEA, NHS_IBUPROFEN, NHS_PARACETAMOL],
    },
    {
      id: weeklyId(M, 3),
      month: M,
      week: 3,
      title: 'Træthed hen over cyklussen: jern, søvn og progesteron, og hvordan du skiller dem ad',
      body: [
        'Træthed er det symptom, der oftest logges og sjældnest tages alvorligt, fordi alle er trætte. Du er også træt. Det er ikke det samme. Cyklisk træthed, den der kommer igen på de samme dage hver måned, har forklaringer, som kan skilles ad. Og de tre vigtigste kræver hver sin reaktion fra dig.',
        'Den første er jern. Hver menstruation koster blod, og med blodet jern. Ved en normal blødning erstatter kosten tabet. Ved kraftige blødninger, bind eller tampon der skiftes hver time, blødning over syv dage, store klumper, kan tabet være større, end kosten når at dække, og jerndepoterne tømmes langsomt over måneder. Jernmangel mærkes som vedvarende træthed, forpustethed ved trapper, bleghed, hovedpine, koncentrationsbesvær, skøre negle og for nogle uro i benene om natten. Det afskrives typisk som travlhed. Kendetegnet er, at trætheden ikke letter i follikelfasen, hvor energien ellers plejer at vende tilbage. En blodprøve hos lægen måler hæmoglobin og jerndepoter, og behandlingen er enkel. Tilskud bør dog ikke tages i blinde, for for meget jern er heller ikke godt. Kosten hjælper: kød, fisk og æg, eller linser, bønner og grønne blade sammen med C-vitamin, og kaffe og te væk fra måltidet.',
        'Den anden er søvngæld. I lutealfasen holder progesteron kropstemperaturen 0,3-0,5 grader oppe, og mange sover lettere og vågner oftere. I PMS-dagene forstyrrer uro og hormonfald. På menstruationens første nætter vækker smerte og lækage. Hver nat er måske kun lidt dårligere, men over ti-tolv dage bliver det til en gæld. Søvnmangel sænker smertetærsklen, øger irritabilitet og udløser hovedpine, så det, der føles som "slem PMS" eller "slem menstruation", er ofte PMS eller menstruation plus en uges dårlig søvn. Follikelfasen er der, gælden kan betales tilbage. Tidlige sengetider dag 3-8 er reparation, ikke dovenskab. Og nej, det er ikke tidspunktet at vise hende den serie, du har glædet dig til.',
        'Den tredje er progesteron selv. I den sidste uge før menstruationen virker det sløvende på hjernen, næsten som et mildt beroligende middel, samtidig med at serotonin falder med østrogen, og kroppen forbrænder lidt mere og efterspørger mere mad. Lagt sammen giver det en tyngde, hvor alt kræver mere. Det er ikke mangel på vilje, og det bliver ikke bedre af pres. Det bliver bedre af søvn, mad til tiden, lavere krav og at nogen tager det praktiske. Og det er helt forudsigeligt: ligger trætheden i loggen på de samme cyklusdage hver måned, ved du, hvornår du skal sænke tempoet. Du har ingen undskyldning for at blive overrasket den samme uge tolv gange om året.',
        'Sådan skiller du dem ad med kalenderen. Træthed, der kun ligger i lutealfasen og de første menstruationsdage, og som letter tydeligt i follikelfasen, er hormonel og søvnrelateret; svaret er beskyttet søvn og lavere krav på de dage. Træthed, der ligger hen over hele cyklussen, også i de uger, hvor energien burde være tilbage, og som følges af kraftige blødninger, peger på jern eller noget andet; svaret er en blodprøve. Det er ikke en diagnose, det er en sortering, og den gør lægesamtalen bedre. Du er ikke læge. Du er ham med kalenderen, og det er faktisk nyttigt.',
        'Det praktiske for dig: beskyt søvnen i follikelfasen ved at tage aftenopgaverne og foreslå tidlig sengetid uden at gøre det til et projekt. Sørg for mad med jern i og efter menstruationen. Hold koffein stabilt og væk fra sen eftermiddag. Sænk tempoet i den sidste luteal-uge, uden at hun skal bede om det, og uden at sige "det er nok fordi du snart skal have menstruation". Den sætning må du gerne tænke. Du må bare ikke sige den. Og hvis trætheden aldrig letter, så sig, at det fortjener en blodprøve, og tilbyd at komme med.',
        'Det, du ikke skal gøre, er at foreslå, at hun bare tager sig sammen, går tidligere i seng "ligesom dig", eller motionerer mere, når hun er mest træt. Alle tre lyder som hjælp og lander som kritik. At blive troet på er den første hjælp; resten kommer bagefter.',
      ],
      conversationQuestion:
        'Hvornår i din cyklus er trætheden værst, og letter den helt, når energien vender tilbage, eller hænger den ved hele måneden?',
      sources: [NHS_IRON, NHS_HEAVY],
    },
    {
      id: weeklyId(M, 4),
      month: M,
      week: 4,
      title: 'Læs loggen, handl dagen før, og vid hvornår det er nok',
      body: [
        'De første tre artikler handlede om mekanismer. Denne handler om metoden: hvordan du omsætter loggen til handling, og hvornår handlingen skal være en lægetid. Det er den korteste færdighed i appen og den, færrest faktisk bruger.',
        'Først læsningen. De fleste læser kalenderen én dag ad gangen, og så ser man ingenting. Læs den i stedet som en linje. Find de sidste to-tre menstruationsstarter. Tæl bagud og fremad fra hver: hvilken cyklusdag kom hovedpinen? Hvor mange dage før blødningen begyndte trætheden? Hvor mange dage varede smerten? Læg tallene ved siden af hinanden. Rammer et symptom samme cyklusdag plus minus én i to eller tre cyklusser, er det et mønster. Rammer det tilfældigt, er det noget andet, og det er også værd at vide. Efter tre-fire cyklusser er de fleste mønstre tydelige, og de er ofte mere præcise, end hun selv tror, fordi hukommelsen om dårlige dage er dårlig. Din hukommelse om dem er værre. Derfor loggen.',
        'Så fremskrivningen. Appen giver en forventet dato for næste menstruation. Den er et skøn, ikke en måling, så regn med to dages usikkerhed. Har hovedpinen et mønster på "to dage før blødning", og blødningen forventes fredag, er onsdag dagen at være klar, og tirsdag er ikke for tidligt. Har trætheden et mønster på dag 25-27, er det de dage, kalenderen skal ryddes. Har ryggen et mønster på dag 1, er varmedunken fyldt torsdag aften. Det er ikke svært. Det er bare noget, ingen har gjort før, og noget du kan gøre med en kop kaffe på fem minutter.',
        'Så handlingen. Pointen med at handle dagen før er ikke effektivitet. Det er, at det fjerner behovet for at bede. At bede om hjælp koster energi, og de dage, hvor hun har mest brug for hjælp, er dem, hvor hun har mindst energi at bede med. Mange kvinder bider derfor tænderne sammen i stedet. Når varmen, roen, medicinen, maden og den ryddede kalender bare er der, uden forklaring, er det beviset på, at nogen har lagt mærke til hende. Det er den form for omsorg, der bliver husket. Forberedelsen skal være konkret og lille: tre ting, ikke ti, og ikke et projekt med en indkøbstur og en ny varmepude med app. Og den skal passe til hendes log, ikke til en generel liste. Er dag 1 en migrænedag, er mørke gardiner vigtigere end suppe.',
        'Så dokumentationen. Den samme log er den bedste forberedelse til en lægetid, der findes. Lægen har brug for at vide, hvilke dage, hvor slemt på en skala fra 1 til 10, hvor længe, hvad hun tog, om det virkede, og om hun måtte aflyse noget. Det sidste, funktionstab, er det, der flytter en konsultation fra "det er nok normalt" til "det skal vi undersøge". Mange lever med smerter i årevis, fordi de i lægens kontor ikke kan huske, hvor slemt det egentlig var. Tilbyd at samle de sidste tre cyklussers smertedage på ét stykke papir. Det tager ti minutter, og det kan spare år.',
        'Og til sidst grænsen, som er hele grunden til, at loggen betyder noget. Her stopper vittighederne. Almindelige menstruationssmerter og almindelig hovedpine reagerer på varme, hvile og håndkøbsmedicin, holder sig til nogle få dage, og forhindrer ikke hverdagen. Tegnene på, at noget andet er på spil, er: smerte uden for menstruationen, smerte ved sex, smerte ved afføring eller vandladning omkring blødningen, kraftig blødning med klumper, smerter der ikke rykkes af medicin, menstruationer der koster sygedage, migræne flere dage om måneden, eller smertestillende ti eller flere dage om måneden. Bag det kan ligge endometriose, adenomyose, fibromer eller en hovedpinelidelse, der skal forebygges. Alle kan behandles. Ingen af dem bliver bedre af at vente. Du skal ikke gætte hvilken. Du skal være den, der siger "det her fortjener en læge", tilbyde at booke tiden, tage med, og have papiret med.',
        'Det er månedens hele budskab i én sætning: læs loggen som en linje, handl dagen før, og normalisér aldrig smerte, der slår hende ud.',
      ],
      conversationQuestion:
        'Er der noget i din cyklus, du selv har vænnet dig til at holde ud, som vi burde tage til lægen med, og hvad ville gøre det lettere at bestille tiden?',
      sources: [NHS_ENDO, NHS_FIBROIDS, NHS_MIGRAINE],
    },
  ],
  wrap: {
    id: wrapId(M),
    month: M,
    title: 'Måned 8: Smerte, træthed og hovedpine',
    summary: [
      'Denne måned gik i dybden med de tre symptomer, flest logger, og de tre, du oftest har opdaget en dag for sent. Prostaglandiner forklarer kramper, løs mave, kvalme, rygsmerter og "menstruationsinfluenza" på én gang, og ibuprofen taget tidligt rammer dem alle. Menstruationsmigræne udløses af østrogenfaldet i et vindue fra to dage før til tre dage inde i blødningen, den er anderledes end spændingshovedpine, og den kan forudsiges og forberedes. Træthed kan være jern, søvngæld eller progesteron, og loggen viser hvilken.',
      'Du har lært at læse kalenderen som en linje, finde cyklusdagen for et symptom og handle dagen før, så hun ikke skal bede. Du har lært grundreglerne for paracetamol og ibuprofen, hvornår mange piller er et signal, hvornår hovedpine kræver 112, og at smerte, der slår hende ud, kraftig blødning, smerte uden for menstruationen eller ved sex aldrig er "bare menstruation", men fortjener en læge med loggen i hånden. Du er ikke blevet læge. Du er blevet en, der kigger i kalenderen. Det er mere, end de fleste gør.',
      'Næste måned handler om kost, træning og restitution: hvad I kan lave og spise i hver fase, så de gode dage bliver flere, og de svære bliver lettere.',
    ],
    keepDoing: [
      'Læs loggen som en linje efter hver menstruation, og skriv ned, hvilken cyklusdag symptomerne rammer. Skriv, ikke husk.',
      'Handl dagen før: varme, medicin, mørke, mild mad eller en ryddet kalender, alt efter hvad hendes log siger, ikke hvad en liste siger.',
      'Hav både ibuprofen og paracetamol i huset, synligt når menstruationen nærmer sig, og kend forskellen, når du står på apoteket.',
      'Beskyt søvnen i follikelfasen, og sænk tempoet i den sidste luteal-uge uden at spørge først.',
      'Sig "det fortjener en læge" højt, når tegnene er der, og tilbyd at samle smertedagene på papir.',
    ],
    quiz: [
      {
        question:
          'Hun mærker de første træk i lænden og siger "jeg tror, den kommer i morgen". Hvad hjælper mest lige nu?',
        options: [
          'Vente og se, om det bliver til noget, før hun tager medicin',
          'Foreslå at hun tager ibuprofen med mad nu, og fylde varmedunken',
          'Sige at hun jo klarede det fint sidste måned',
          'Booke en lægetid med det samme',
        ],
        correctIndex: 1,
        explanation:
          'Ibuprofen blokerer dannelsen af prostaglandin, men fjerner ikke det, der allerede er dannet. Taget tidligt forebygger det; taget på toppen halter det bagefter. Varme forstærker effekten. "Vente og se" er det, du plejer at gøre, og det er derfor, du tager quizzen.',
      },
      {
        question:
          'Loggen viser hovedpine dag 27 i tre cyklusser i træk. Appen forventer menstruation på fredag. Hvad gør du?',
        options: [
          'Venter til fredag og ser, om hun får hovedpine',
          'Fortæller hende, at hun får hovedpine på onsdag',
          'Sørger tirsdag-onsdag for at medicinen ligger fremme, at aftenerne er rolige, og at hun sover',
          'Foreslår at hun dropper kaffen helt i denne uge',
        ],
        correctIndex: 2,
        explanation:
          'Læs loggen som en linje, læg mønstret fremad, og handl dagen før med to dages margen. At meddele hende en hovedpine er ikke en handling, det er en vejrudsigt. Og at droppe kaffe brat giver i øvrigt selv hovedpine; hold koffein stabilt.',
      },
      {
        question:
          'Hun ligger med dunkende hovedpine i den ene side, er kvalm og kan ikke tåle lys. Hvad er den bedste hjælp?',
        options: [
          'Åbne vinduet og foreslå en gåtur i frisk luft',
          'Gøre soveværelset mørkt og stille, tage børn og telefon, og lade hende sove',
          'Sætte sig hos hende og spørge, hvad der har udløst det',
          'Sige at paracetamol nok er bedre end ibuprofen mod migræne',
        ],
        correctIndex: 1,
        explanation:
          'Det lyder som migræne, og migræne forværres af lys, lyd, bevægelse og spørgsmål. Fjern verden fra hende i nogle timer, også dig og din nysgerrighed. Behandlingen skulle helst være taget tidligere; næste gang kan loggen hjælpe med det.',
      },
      {
        question:
          'Hun er træt hele måneden, også i ugen efter menstruationen, og bløder kraftigt med klumper. Hvad er mest hjælpsomt?',
        options: [
          'Foreslå at hun går tidligere i seng og motionerer mere',
          'Sige at alle er trætte, og at det nok er arbejdet',
          'Foreslå en blodprøve for jern hos lægen og tilbyde at tage med',
          'Købe jerntilskud og stille dem ved morgenmaden',
        ],
        correctIndex: 2,
        explanation:
          'Træthed, der ikke letter i follikelfasen, sammen med kraftige blødninger, peger på jernmangel. Det måles med en simpel blodprøve, og tilskud bør ikke tages i blinde, heller ikke dem, du fandt på tilbud.',
      },
      {
        question:
          'Du tæller i kalenderen, at hun tog smertestillende 12 dage i sidste cyklus. Hvad er den rigtige reaktion?',
        options: [
          'Gemme pillerne, så hun tager færre',
          'Sige at det er alt for mange, og at hun skal holde igen',
          'Nævne tallet roligt, og foreslå at hun tager loggen med til lægen, fordi grundproblemet skal behandles bedre',
          'Ikke sige noget, det er hendes krop',
        ],
        correctIndex: 2,
        explanation:
          'Smertestillende mange dage om måneden kan selv give hovedpine og er et tegn på, at det underliggende ikke er behandlet godt nok. Det er en lægesamtale, ikke en irettesættelse, og slet ikke et gemmeleg med æsken.',
      },
      {
        question:
          'Hun har smerter ved sex, smerter når hun har afføring under menstruationen, og medicinen hjælper ikke rigtigt. Hun siger, det nok er normalt. Hvad gør du?',
        options: [
          'Tager hendes ord for det, hun kender sin krop bedst',
          'Siger "det her fortjener en læge", tilbyder at booke tiden, tage med og samle smertedagene fra kalenderen',
          'Foreslår en stærkere håndkøbsmedicin fra apoteket',
          'Googler symptomerne og fortæller hende, hvad det er',
        ],
        correctIndex: 1,
        explanation:
          'Smerte uden for blødningen, ved sex eller afføring, og smerte medicinen ikke rykker, er tegn der fortjener udredning. Du skal ikke stille diagnosen, du skal være den, der ikke normaliserer det, og gøre lægetiden let.',
      },
    ],
  },
};
