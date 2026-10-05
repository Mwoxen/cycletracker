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
const NHS_PMS: Source = {
  label: 'NHS: PMS',
  url: 'https://www.nhs.uk/conditions/pre-menstrual-syndrome/',
};
const NHS_PAIN: Source = {
  label: 'NHS: Period pain',
  url: 'https://www.nhs.uk/conditions/period-pain/',
};
const NHS_ENDO: Source = {
  label: 'NHS: Endometriosis',
  url: 'https://www.nhs.uk/conditions/endometriosis/',
};
const NHS_HEAVY: Source = {
  label: 'NHS: Heavy periods',
  url: 'https://www.nhs.uk/conditions/heavy-periods/',
};

const M = 1;

export const month01: MonthContent = {
  month: M,
  theme: 'Cyklussen fra A til Z',
  focus: 'Lær de fire faser at kende, og find ud af hvor hun er i dag, uden at gætte.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'Dag 1 er første blødningsdag',
      insight:
        "Dag 1 er den første dag med rigtig blødning. Ikke dagen hun nævnte det, ikke dagen du opdagede, at tonen i huset havde ændret sig, og ikke dagen det stoppede. En cyklus tælles fra den dag til dagen før næste blødning begynder. Alt i appen regnes fra den dato. Skriver du forkert, bliver appen lige så sikker i sin sag, som du var, da du sagde, I sagtens kunne nå færgen. 28 dage er gennemsnittet, 21 til 35 er normalt for voksne, og de færreste rammer det samme tal to gange i træk. Du behøver ikke forstå kvindekroppen i dag. Du skal få én dato rigtig. Du kan koden til wifi'et udenad, så det her kan du sgu godt.",
      action:
        'Spørg, hvornår den sidste menstruation startede. Bare spørg. Du har stillet dummere spørgsmål til en kassemedarbejder. Skriv datoen ind i appen.',
      phaseTags: [],
      sources: [NHS_PERIODS, SUNDHED_DK],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: 'Fire faser, én rytme',
      insight:
        'Nu skal du høre. Du har sikkert regnet med to tilstande: "har menstruation" og "har ikke". Der er fire, ligesom der er mere end to måder at stege et æg på. Menstruation (blødningen), follikelfasen (energien vender tilbage), ægløsning (toppen) og lutealfasen (roligere, og til sidst PMS). De to første styres af østrogen, der stiger. Den sidste halvdel af progesteron, der først stiger og så falder. Det er hormonernes op og ned, der får energi, humør, søvn og lyst til at skifte hen over måneden. Når du kender rytmen, holder skiftene op med at komme bag på dig. Det, du før kaldte "en mærkelig uge", har haft en dato hele tiden. Den stod i kalenderen. Du kiggede bare på kampprogrammet.',
      action:
        'Åbn Hjem-skærmen, se hvilken fase hun er i i dag, og læs det korte faseopslag under "Faserne". Et minut. Kaffen bliver ikke kold.',
      phaseTags: [],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 3),
      month: M,
      day: 3,
      title: 'Østrogen og progesteron, kort fortalt',
      insight:
        'Rolig nu, du skal ikke lære biokemi, du skal lære to ingredienser. Østrogen bygger op: det stiger fra menstruationens slutning frem mod ægløsning og giver energi, klarhed og lyst. Det er den, der tænder for blusset. Progesteron holder igen: det stiger efter ægløsning, virker beroligende og lidt sløvende, og hæver kropstemperaturen en anelse. Det skruer ned og lægger låg på. Når begge falder brat i ugen før menstruation, mærkes det som PMS. Det er ikke "humørsvingninger ud af det blå". Det er et hormonfald med en timing, der kan slås op i en kalender. To hormoner. Du kan huske elleve fodboldspillere fra 1998 og hele rækkefølgen på en kebabmenu. Det her går.',
      action:
        'Sig sætningen højt for dig selv, gerne ude i køkkenet: "Østrogen op = overskud. Progesteron op = ro. Begge ned = sårbar." Det er hele opskriften, og du kan den nu.',
      phaseTags: [],
      sources: [ACOG_CYCLE, SUNDHED_DK],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'Hvad der faktisk sker under menstruationen',
      insight:
        'Her er det, du ikke lærte i 7. klasse, fordi du sad og kiggede ud ad vinduet. Blødningen er livmoderslimhinden, der afstødes, fordi der ikke blev et befrugtet æg at holde på. Livmoderen trækker sig sammen for at skubbe den ud, og de sammentrækninger er kramperne. Samtidig er begge hormoner på bunden, så energien er lav, især dag 1 og 2. Den samlede blodmængde er typisk kun 30-40 ml over hele perioden, men det føles som meget mere, og med blodet mister hun jern. En menstruation varer normalt 2-7 dage. Det er altså en muskel, der knokler i flere dage, mens brændstoffet er lavt. Det er ikke "lidt ondt i maven". Du lagde dig på sofaen med en splint i fingeren i sidste uge.',
      action:
        'Hvis hun har menstruation nu: tag ét praktisk gøremål fra hende uden at spørge. Opvasken, aftensmaden, hunden. Hvis ikke: læg mærke til, hvad der typisk driller hende de første dage, så du står klar næste gang.',
      phaseTags: ['menstrual'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'Kramper: varme virker',
      insight:
        'Inde i hende sidder en muskel, der står og knokler for at skubbe noget ud, der ikke vil samarbejde. Det er stoffer kaldet prostaglandiner, der sætter den i gang, og jo mere af dem, jo mere ligner det en langtidsstegt bov, der ikke vil slippe benet. Det, der virker, er sgu varme. Varme på maven eller lænden afslapper musklen og dæmper smerten målbart; det er et af de bedst dokumenterede huskeråd, der findes. Ibuprofen skal ind ved de første tegn, ikke når smerten er på toppen; der er ikke noget at vinde ved at vente, det er ikke en gryderet. En gåtur hjælper også flere, end man skulle tro. Du behøver ikke forstå prostaglandiner. Du skal bare kunne finde varmepuden i mørke.',
      action:
        'Sørg for, at der er en varmepude eller varmedunk i huset, og at hun ved, hvor den er. Læg den klar som en kold øl. Du har købt en pizzaovn.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: 'Træthed og jern',
      insight:
        'Trætheden i menstruationens første dage har to kilder: lave hormoner og tab af jern med blodet. Jern bærer ilt rundt i kroppen, og selv et lille underskud mærkes som tung krop og kort lunte. Kvinder med kraftige blødninger har markant større risiko for jernmangel. Og her kommer det, du har ventet på: endelig en opgave, der foregår ved komfuret. Jern optages bedst fra kød, fisk og æg, mens jern fra planter (linser, bønner, grønne blade) optages bedre sammen med C-vitamin. Kaffe og te lige til måltidet hæmmer optaget. Så koppen kaffe til bøffen er ikke den gavmilde gestus, du troede. Du står med en reel chance for at hjælpe med en gryde. Det sker sgu ikke hver dag, så grib den.',
      action:
        'Lav eller bestil et måltid med jern i dag: oksekød, linser, kikærter eller spinat, gerne med citrus til. Kaffen venter. Det gør din tale også.',
      phaseTags: ['menstrual'],
      sources: [NHS_HEAVY],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'Hvad er en normal blødning?',
      insight:
        'Du kan ikke vurdere blodmængde udefra, så hold op med at prøve. Brug i stedet de tegn, lægerne bruger: bind eller tampon skal skiftes hver time i flere timer i træk, blødning der varer over 7 dage, klumper større end en 2-krone, eller blødning der gør, at hun undgår at gå ud. Det kaldes kraftig menstruation og rammer omkring hver fjerde kvinde på et tidspunkt. Det kan behandles, men mange lever med det, fordi de tror, det er normalt. Din viden gør en forskel her. Og den begynder et sted, du har styret udenom i årevis, som var det hylden med rosenkål: hylden med bind og tamponer i supermarkedet. Den bider ikke. Du har stået længere ved grillkullene.',
      action:
        'Tjek, at der er bind eller tamponer i huset i den type, hun bruger. Ved du ikke hvilken, så spørg. Det er ikke pinligt, det er praktisk. Som at spørge efter mel.',
      phaseTags: ['menstrual'],
      sources: [NHS_HEAVY],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: 'Energien vender tilbage',
      insight:
        'Når blødningen stopper, begynder follikelfasen for alvor. Hypofysen sender signalstoffet FSH, og en gruppe æg-follikler i æggestokkene begynder at modne. De producerer østrogen, som stiger dag for dag. Østrogen øger serotonin og dopamin i hjernen, så humør, energi og motivation stiger med. Mange beskriver det som at "vende tilbage til sig selv". Det er ofte cyklussens mest behagelige uge, og den kommer lige efter den mest krævende, ligesom kaffen efter opvasken. Nu skal du høre: du vil få lyst til at tage æren for det gode humør, fordi du lavede pasta i tirsdags. Lad være. Det er FSH, ikke dig. Men du må gerne lægge mærke til det og sige det højt. Det er faktisk det vigtige.',
      action:
        'Læg mærke til skiftet, og sig det højt: "Det virker som om du har fået energien tilbage." At blive set i det gode er lige så vigtigt som i det svære, og det koster dig ingenting.',
      phaseTags: ['follicular'],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'Planlæg det store nu',
      insight:
        'Follikelfasen er det bedste tidspunkt i cyklussen til alt, der kræver overskud: gæster, rejser, hårde træningspas, store beslutninger, svære samtaler. Østrogen gør hjernen mere åben for nyt og mere stressrobust. Det betyder ikke, at hun er "sig selv" nu og "ikke sig selv" resten af måneden. Det betyder, at timing er gratis hjælp, og du har hidtil betalt fuld pris. Den samme samtale kan gå godt på dag 9 og skævt på dag 26, uden at nogen af jer har gjort noget anderledes. Du valgte bare dag 26, fordi det var der, du kom i tanke om det, midt i en mundfuld aftensmad. Nu har du en kalender. Brug den. Det er som at forvarme ovnen: det koster ingenting, og alt bliver bedre af det.',
      action:
        'Foreslå én ting, I skal lave sammen i denne uge, som kræver lidt energi. Læg det i kalenderen inden ægløsningen. Ét forslag, ikke en buffet.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 10),
      month: M,
      day: 10,
      title: 'Hvor lang er en normal cyklus?',
      insight:
        'Nogen sagde 28 dage i 7. klasse, og du har troet på det siden, ligesom du tror på, at pasta skal koge i præcis det, der står på posen. For voksne er 21-35 dage normalt, og gennemsnittet er omkring 28. Cyklussen er sjældent præcis den samme længde hver gang; nogle dages variation er helt almindeligt. Det er første halvdel, follikelfasen, der varierer mest. Lutealfasen efter ægløsning er ret stabil på 12-14 dage. Derfor regner appen ægløsning baglæns fra den forventede menstruation, ikke forlæns fra dag 1. Efter et par loggede cyklusser bliver skønnet bedre, fordi det bygger på hendes gennemsnit i stedet for et standardtal. Appen lærer. Det kan du også. I har samme udgangspunkt, og den har ikke engang en kalender på køleskabet.',
      action:
        'Åbn indstillinger og tjek, at cykluslængden passer til det, hun selv siger. Er I i tvivl, så lad standardtallet stå; appen retter sig ind med tiden, ligesom en surdej.',
      phaseTags: [],
      sources: [NHS_PERIODS, SUNDHED_DK],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'Hvorfor cyklussen flytter sig',
      insight:
        'Stress, sygdom, dårlig søvn, rejser på tværs af tidszoner, vægtændringer og hård træning kan alle forsinke ægløsningen, og så kommer menstruationen senere. Det er kroppens måde at sige: ikke lige nu, der er andet i ovnen. Amning, perimenopause, PCOS og stofskiftet påvirker også cyklussen. En enkelt sen eller tidlig menstruation betyder sjældent noget, så læg for søren telefonen fra dig og hold op med at google. Bliver cyklussen konsekvent kortere end 21 dage, længere end 35, eller udebliver den i over tre måneder uden graviditet, er det en samtale med lægen værd. Ikke med dig, ikke med internettet, ikke med ham på arbejdet, der ved alt. Med en læge.',
      action:
        'Hvis menstruationen er forsinket, så spørg nysgerrigt, ikke bekymret: "Har der været meget pres på i denne måned?" Det er oftere forklaringen end noget som helst andet.',
      phaseTags: [],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: 'At tale om det uden at gøre det akavet',
      insight:
        'Mange par taler kun om cyklussen, når noget er galt. Det gør emnet ladet, lidt som kun at nævne ovnen, når der står røg ud af den. Det hjælper at tale om det, når alt er fint, i små doser og med nysgerrighed frem for analyse. "Jeg prøver at lære, hvordan din cyklus påvirker dig, så jeg kan være bedre til at hjælpe" er en sætning, de fleste tager godt imod. Undgå at forklare hende hendes egen krop; hun har boet i den længere end dig, og du har ikke engang læst manualen færdig. Og brug aldrig fasen som forklaring på hendes holdninger. Hun har holdninger alle 28 dage. Spørg, og lyt. Du behøver ikke have et opfølgende spørgsmål klar. Stilhed er også et svar, og det er sgu et af de bedre.',
      action:
        'Fortæl hende, at du bruger appen, og hvorfor. Spørg, om der er noget, hun gerne vil have, at du særligt lægger mærke til. Og lyt til svaret.',
      phaseTags: ['follicular', 'ovulation'],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: 'Ægløsning: cyklussens midtpunkt',
      insight:
        'Når østrogen topper, udløser det et brat hop i hormonet LH. 24-36 timer senere brister den modne follikel, og ægget frigives. Ægget lever kun 12-24 timer. Det er det, ægløsning er: én dag, ikke en uge. Jordbær i juni, ikke en hel sæson. Hvis du troede, det var en uge, er du i godt selskab; det troede de fleste i rummet. Tidspunktet ligger typisk 14 dage før næste menstruation, så i en 28-dages cyklus omkring dag 14, i en 32-dages cyklus omkring dag 18. Appens dato er et skøn ud fra gennemsnit, ikke en måling. Kropstegn og ægløsningstest er mere præcise. Appen gætter kvalificeret. Du gættede ukvalificeret, som når du smager på saucen og siger "der mangler noget". Nu gætter I sammen, og det er faktisk et fremskridt.',
      action:
        'Se på appens skønnede ægløsningsdato for denne cyklus, og læs opslaget om ægløsning under "Faserne". Fem minutter, og du ved mere end i går.',
      phaseTags: ['ovulation', 'follicular'],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'Det frugtbare vindue er et fælles ansvar',
      insight:
        'Sædceller kan overleve op til fem dage i livmoderen, og ægget lever et døgn. Derfor er de frugtbare dage de fem dage før ægløsning plus selve dagen: seks dage i alt. Læg mærke til, hvem der leverer de fem af dem i det regnestykke. Det er dig, min ven. Det gælder uanset, om I ønsker graviditet eller ej. Ønsker I ikke graviditet, er det her, prævention betyder mest, og det er ikke hendes opgave alene, selv om det måske har set sådan ud hidtil, lidt ligesom opvasken. Ønsker I graviditet, er dagene op til ægløsning vigtigere end dagen efter. Og brug aldrig appens vindue som prævention. Det er et gennemsnit, cyklusser flytter sig, og "appen sagde" er ikke en sætning, nogen vil høre om ni måneder.',
      action:
        'Tal om, hvordan I har det med jeres prævention lige nu, og om ansvaret ligger rimeligt fordelt. Fem minutter er nok, og du tager initiativet. Ja, dig.',
      phaseTags: ['ovulation'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 15),
      month: M,
      day: 15,
      title: 'Tegn på ægløsning',
      insight:
        'Kroppen viser ofte, at ægløsningen nærmer sig, og nej, det er ikke noget, du kan se fra sofaen med en pose chips. Udflådet bliver klart, glat og strækbart, som æggehvide. Nogle mærker et kort jag eller en murren i den ene side af underlivet, når folliklen brister. Lysten er ofte højere, huden pænere, og humøret på top. Efter ægløsningen stiger kropstemperaturen 0,3-0,5 grader, og udflådet bliver tykkere igen. Følger I tegnene over nogle måneder, bliver I langt bedre til at vide, hvor i cyklussen hun er, end nogen app. Hun har adgang til data, du aldrig får, ligesom din mor har en opskrift, hun aldrig giver fra sig. Det eneste, der står mellem dig og den viden, er et spørgsmål, du har været bange for at stille.',
      action:
        'Spørg, om hun selv kan mærke, hvornår hun har ægløsning, og hvad hun lægger mærke til. Mange kan, og de færreste er nogensinde blevet spurgt.',
      phaseTags: ['ovulation'],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'Lyst gennem cyklussen',
      insight:
        'Lysten svinger med hormonerne. Omkring ægløsning er der østrogen og en smule testosteron i gryden, og mange mærker simpelthen mere lyst og mere overskud til nærhed. I lutealfasen kommer progesteron og skruer ned for blusset, og i PMS-dagene og de første menstruationsdage er køkkenet typisk lukket. Du kan stå og kigge ind ad vinduet, så længe du vil, der kommer ikke mad. Nogle oplever det stik modsat, og det er også normalt, ligesom med koriander. Sæt ikke ægløsningen i din kalender med en alarm. Pointen er at holde op med at tage lav lyst personligt. Dag 26 er ikke en afstemning om dig. Det er progesteron, og progesteron har aldrig smagt noget, du har lavet.',
      action:
        'Gør det tydeligt, at nærhed ikke er en forventning i de tunge dage, og at du sætter pris på den, når den kommer. Sig det, og mén det. Og væk fra vinduet.',
      phaseTags: ['ovulation', 'luteal'],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'Lutealfasen: progesteron tager over',
      insight:
        'Efter ægløsningen bliver den tomme follikel til det gule legeme, som producerer progesteron. Progesteron gør livmoderslimhinden klar til et eventuelt befrugtet æg, hæver kropstemperaturen lidt og virker beroligende, næsten sløvende. Den første uge efter ægløsning føles derfor ofte rolig og hjemlig; energien er ikke væk, den simrer bare. Bliver ægget ikke befrugtet, dør det gule legeme efter 12-14 dage, hormonerne falder, og menstruationen begynder. Det er ugen, hvor du ikke skal foreslå festival. Det er også ugen, hvor "hvad vil du?" er en opgave, ikke et tilbud. Du spørger sgu heller ikke gæsterne, hvad de vil have at spise. Kom med ét forslag. Et konkret et. Ikke tre, ikke en menu.',
      action:
        'Foreslå en rolig aften hjemme frem for at spørge "hvad vil du?". Konkrete, lette forslag er en gave i denne fase. Det er aftensmad også, hvis du laver den.',
      phaseTags: ['luteal'],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'Søvn og temperatur',
      insight:
        'Progesteron hæver kropstemperaturen 0,3-0,5 grader i hele lutealfasen. Det lyder af ingenting, indtil du selv ligger med 0,4 grader for meget klokken tre om natten og hader dynen. Det er nok til, at mange sover dårligere, vågner om natten eller føler sig varme. Kombineret med det hormonfald, der kommer i den sidste uge, er dårlig søvn en af de mest oversete årsager til, at PMS-dagene føles så hårde. Et køligt soveværelse, en lettere dyne og ro om aftenen hjælper mere, end man tror. Du har sikkert en holdning til soveværelsets temperatur, ligesom du har en holdning til, hvor meget salt der skal i. I denne uge er din holdning forkert, uanset hvad den er. Luk vinduet op, min ven.',
      action:
        'Gør soveværelset køligere i aften: luft ud, skru ned for varmen, eller tilbyd at bytte til den lettere dyne. Du har stået ved grillen i regnvejr. Du overlever.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 19),
      month: M,
      day: 19,
      title: 'Sult og trang er ikke mangel på vilje',
      insight:
        'I lutealfasen bruger kroppen omkring 100-300 kalorier mere om dagen, og progesteron øger appetitten. Samtidig falder serotonin, når østrogen falder, og kroppen går på jagt efter hurtige kulhydrater for at rette op. Trangen til sødt, salt og chokolade i ugen før menstruation er altså biologi, ikke svag karakter. Regelmæssige måltider, proteiner og fibre dæmper udsvingene, og sult forstærker irritabilitet mere end noget andet i denne fase. Det gælder i øvrigt også dig; du bliver sgu ikke sjov af at springe frokosten over. Forskellen er, at du ikke har en forklaring. Din rolle er enkel, og den foregår endelig i køkkenet: fyld skabet, og hold din mening om indholdet for dig selv. Ingen har nogensinde fået tak for en kommentar om en snack. Ingen.',
      action:
        'Sørg for, at der er gode snacks i huset i denne uge: nødder, mørk chokolade, frugt, yoghurt. Og sig ikke et ord, når de bliver spist. Ikke ét.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 20),
      month: M,
      day: 20,
      title: 'Oppustet, øm og ikke i humør til kommentarer',
      insight:
        'Progesteron får kroppen til at holde på væske. Maven bliver oppustet, brysterne spænder og bliver ømme, og tøjet sidder anderledes. Det er forbigående og helt normalt, men det påvirker kropsbilledet mere, end mange partnere er klar over. Kommentarer om mave, vægt eller "du ser træt ud" lander hårdt i denne uge, også hvis de er kærligt ment. Især hvis de er kærligt ment, for så står du bagefter og fatter ikke, hvad der gik galt, som når kagen falder sammen. Fysisk nærhed skal være blid, især om brysterne. Her er den enkle regel: hvis sætningen begynder med "du ser", så stopper du. Du ser træt ud, du ser sur ud. Det er den samme sætning, og slutningen på den findes ikke.',
      action:
        'Sig noget ægte og konkret, du sætter pris på ved hende i dag, som ikke handler om udseende. Tænk dig om først. "Du laver god kaffe" tæller ikke.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: 'PMS: forstærkeren',
      insight:
        'PMS er de fysiske og følelsesmæssige symptomer, der kommer i dagene før menstruation og forsvinder, når blødningen begynder. Årsagen er det bratte fald i progesteron og østrogen, som hjernen reagerer på med lavere serotonin. Omkring tre ud af fire mærker det, og 3-8 procent har den svære form, PMDD, som er en reel lidelse med behandling. Nu skal du høre det vigtigste: PMS opfinder ikke følelser. Det forstærker dem. Tænk på en forstærker: den finder ikke på musikken, den skruer op. Det, der irriterer hende på dag 26, er ofte reelt, det lyder bare højere. Så hvis opvaskeren nævnes højt, er det stadig opvaskeren, der er problemet. Og den har stået der siden dag 9. Du er gået forbi den hver dag.',
      action:
        'Find PMS-vinduet i appen for denne cyklus, og sæt dig for at være den, der har tålmodighed på lager i de dage. Lageret fyldes nu, ikke når gæsterne ringer på.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 22),
      month: M,
      day: 22,
      title: 'Reager på behovet, ikke på tonen',
      insight:
        'I PMS-dagene kommer beskeder ofte pakket ind i en skarpere tone, end de er ment. "Du har ikke tømt opvaskeren" kan betyde "jeg er udmattet og føler, jeg står alene med det hele". Reagerer du på tonen, får I en konflikt om tonen, og den vinder ingen; det er som at skændes om, hvem der brændte saucen på, mens den stadig står på blusset. Reagerer du på behovet, får hun hjælp, og tonen forsvinder af sig selv. Det kræver, at du tæller til tre, og at du ikke behøver have ret lige nu. Du kan få ret på dag 9, hvis du stadig har lyst; det har du som regel ikke. Det er ikke det samme som at finde sig i hvad som helst. Det er at vælge sit tidspunkt, og lige nu er tidspunktet sgu forkert.',
      action:
        'Næste gang tonen bliver skarp: sig "det lyder som om du er presset, hvad kan jeg tage fra?" i stedet for at forsvare dig. Og tøm så opvaskeren. Hele opvaskeren, også bestikket.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'Timing af svære samtaler',
      insight:
        'De fleste par har nogle faste emner, der giver gnidninger: økonomi, familie, fordeling af opgaver, fremtid. Samtalerne er nødvendige, men tidspunktet er valgfrit, og du har en tendens til at vælge det, lige når det falder dig ind. Klokken 23. På dag 27. I de sidste 4-5 dage før menstruation er stressrobustheden lavest og følelserne højest, så samme samtale ender oftere i konflikt. Det er ikke en grund til at undgå emnet i en uge, men til at lægge det bevidst i follikelfasen, hvor der er overskud til at høre hinanden. Samtalen om budgettet bliver ikke bedre af at vente til dag 26. Den bliver bare mere højlydt. Det er ikke en bøf, der skal hvile. Det er et tidspunkt, der skal vælges.',
      action:
        'Hvis der er en svær samtale, du har gået og ventet på at tage, så tjek kalenderen og læg den uden for PMS-vinduet. Skriv den ind, så du ikke "kommer i tanke om den" igen klokken 23.',
      phaseTags: ['luteal', 'follicular'],
    },
    {
      id: dailyId(M, 24),
      month: M,
      day: 24,
      title: 'Sætninger der aldrig hjælper',
      insight:
        '"Er du PMS-ramt?" "Det er bare hormonerne." "Du overreagerer." Du har sagt mindst én af dem, og du vidste, det var dumt, allerede mens den var på vej ud af munden. Alle tre gør det samme: de siger, at hendes oplevelse ikke tæller. Selv når hormonerne faktisk forstærker, er følelsen ægte, og at få den afvist gør den større. Så du har ikke bare tabt diskussionen, du har gjort den længere. Det modsatte virker: anerkend først, og tal eventuelt om timing bagefter. "Jeg kan høre, at det her rammer hårdt lige nu" åbner. "Kan vi tage den i morgen, når vi begge er friske?" er okay at sige, når anerkendelsen er kommet først. Rækkefølgen er ikke valgfri, for søren. Anerkendelse først, timing bagefter, aldrig omvendt.',
      action:
        'Vælg én sætning fra listen, du selv har brugt, og beslut dig for et alternativ, du vil sige næste gang. Øv det gerne højt over gryderne, når ingen hører det.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 25),
      month: M,
      day: 25,
      title: 'Smerte, der slår hende ud, er ikke normalt',
      insight:
        'Sæt dig lige ned til det her. Almindelige menstruationssmerter er ubehagelige, men lader sig håndtere med varme og håndkøbsmedicin. Smerter, der gør, at hun må melde sig syg, kaster op, ikke kan stå oprejst, eller som også kommer uden for menstruationen, er ikke "bare menstruation". Endometriose rammer omkring 1 ud af 10 kvinder, og i gennemsnit går der 7-10 år, før diagnosen stilles, netop fordi smerten normaliseres. Af hende, af lægen, af folk der mener det godt. Du kan ikke stille diagnosen, og du skal ikke prøve; du behøver ikke engang forstå det hele. Men du kan være den, der ikke normaliserer det. Den, der siger roligt: det her fortjener en læge, og jeg tager med.',
      action:
        'Spørg, hvor slemt det plejer at være på en skala fra 1 til 10, og om det nogensinde har forhindret hende i at gøre ting. Lyt uden at bagatellisere eller sammenligne.',
      phaseTags: ['menstrual', 'luteal'],
      sources: [NHS_ENDO, NHS_PAIN],
    },
    {
      id: dailyId(M, 26),
      month: M,
      day: 26,
      title: 'Derfor hjælper kalenderen jer begge',
      insight:
        'En logget cyklus er ikke overvågning, det er hukommelse. Og din hukommelse er ikke så god, som du tror; du har købt mælk tre gange i denne uge. Efter to-tre cyklusser kan man se, om hovedpinen altid kommer dag 25, om søvnen svigter i lutealfasen, om irritationen har en fast dato. Det tager gætteriet ud af det. Hun får bekræftet, at der er mønstre og ikke bare "dårlige dage", og du får en dagbog, du kan handle på i stedet for at blive overrasket. Igen. Af det samme som sidste måned. Kalenderen fungerer kun, hvis den logges. Det skal være nemt, og det skal være hendes. Du er ikke redaktør. Du er læser. Du retter ikke i opskriften, du følger den.',
      action:
        'Kig i kalenderen sammen i fem minutter. Spørg, om der er noget, hun gerne vil have logget, som appen ikke spørger om. Skriv det ned.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 27),
      month: M,
      day: 27,
      title: 'Find det første mønster',
      insight:
        'Du har snart fulgt en hel cyklus. Tillykke, det er sgu en mere, end du har fulgt før. Selv efter én er der noget at hente: hvilken dag energien vendte, hvornår irritationen kom, om søvnen ændrede sig, hvad der hjalp under menstruationen. Mønstre bliver først rigtigt tydelige efter tre-fire cyklusser, men det, du lægger mærke til nu, er begyndelsen. Skriv det ned. Hukommelsen om, hvordan sidste måned var, er notorisk dårlig, især for de dage, hvor det var svært. Du kan huske resultatet af en kamp i 2007 og præcis hvor længe en bov skal have. Du kan ikke huske, hvilken dag varmepuden hjalp. Derfor noten.',
      action:
        'Skriv én ting ned, du har lagt mærke til i denne cyklus, i noten på en dag i kalenderen. Bare én. Du skal ikke skrive roman, du skal skrive en huskeseddel.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 28),
      month: M,
      day: 28,
      title: 'Klar til næste menstruation',
      insight:
        'Når appen siger, at menstruationen forventes om et par dage, er det tid til at forberede sig. Ikke stort, bare praktisk, ligesom før der kommer gæster: er der bind eller tamponer, smertestillende, noget nemt at spise, en varmepude der virker? Er kalenderen de næste to dage rimeligt tom? Forberedelse er usynlig, når den lykkes; hun mærker bare, at det er lettere end sidst. Ingen kommer og klapper. Det er sådan, det skal være, ligesom ingen roser dig for, at der var salt i pastavandet. Hvis du har brug for ros for at have købt bind, så skriv det i din egen note. Det er i den slags små ting, forståelse bliver til handling, og det er dét, denne app handler om.',
      action:
        'Tjek de fire ting: bind/tamponer, smertestillende, nem mad, varme. Fyld op i dag, ikke på dag 1. Man handler ind før festen.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 29),
      month: M,
      day: 29,
      title: 'Din rolle: ikke at fikse, men at være der',
      insight:
        'Mange partnere vil løse. Kramperne, humøret, trætheden. Du har sikkert allerede en plan med tre punkter, og du har sgu sikkert også en indkøbsliste til den. Men det meste kan ikke fikses, kun gøres lettere at bære. Det, der hjælper, er ofte simpelt: at hun ikke skal forklare sig, at det praktiske bliver taget, at du ikke bliver fornærmet over lav energi, og at du bliver. Spørgsmålet "vil du have løsninger eller bare et øre?" sparer mange misforståelser, fordi svaret skifter fra dag til dag, og fra fase til fase. Og når svaret er "bare lyt", så lyt. Det betyder ikke "lyt, og kom så med dine tre punkter". Punkterne kan vente. Det kan de altid. De står og holder sig varme i ovnen.',
      action:
        'Stil spørgsmålet næste gang, hun fortæller om noget svært: "Vil du have forslag, eller skal jeg bare lytte?" Og gør så det, hun svarer. Ikke det, du havde planlagt. Planen ryger i skuffen.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 30),
      month: M,
      day: 30,
      title: 'Måned 1: det har du lært',
      insight:
        'Du ved nu, at dag 1 er første blødningsdag, at cyklussen har fire faser styret af østrogen og progesteron, og at de fleste skift i energi, humør, søvn og lyst har en timing, der kan forudsiges. Du ved, at varme virker på kramper, at jern og søvn betyder noget, at PMS forstærker frem for at opfinde, og at timing af samtaler er gratis hjælp. Det er mere, end du vidste for 30 dage siden, hvor du troede, ægløsning var en uge, og at bind var noget, man købte i al hemmelighed. Vigtigst: du ved, at din opgave er at lægge mærke til, spørge og handle på det praktiske. Du er ikke færdig. Men du er ikke længere ham med det tomme blik ved varmepuden. Resten af året bygger ovenpå det, lag på lag, som en ordentlig lasagne.',
      action:
        'Skriv tre ting ned, du har lært denne måned, og fortæl hende dem. Tag så månedens quiz. Ja, der er en quiz. Noter er tilladt.',
      phaseTags: [],
    },
  ],
  weekly: [
    {
      id: weeklyId(M, 1),
      month: M,
      week: 1,
      title: 'Cyklussen på fem minutter',
      body: [
        'Hvis du kun læser én artikel i denne app, så lad det være denne. Den forklarer, hvad der sker i løbet af en cyklus, og hvorfor det betyder noget for dig som partner. Det tager fem minutter, hvilket er mindre, end du bruger på at vælge en serie, og betydeligt mindre, end du bruger på at vælge kul til grillen.',
        'En menstruationscyklus begynder på første dag med rigtig blødning, dag 1, og slutter dagen før næste blødning. Gennemsnittet er 28 dage, men 21-35 er normalt, og de fleste kvinder varierer nogle dage fra gang til gang. Så hvis du har regnet med 28 som en naturlov, har du været forkert på den i cirka halvdelen af månederne, og det er sgu mange måneder. Det, der varierer, er næsten altid første halvdel. Anden halvdel, tiden efter ægløsning, er ret stabil på 12-14 dage.',
        'Cyklussen styres af to hovedhormoner, og du behøver kun kende de to, ligesom du kommer langt med salt og fedt. Østrogen bygger op. Det stiger fra menstruationens slutning frem mod ægløsning, og med det stiger energi, humør, klarhed og lyst. Det tænder for blusset. Progesteron holder igen. Det stiger efter ægløsning, virker beroligende og lidt sløvende, hæver kropstemperaturen en anelse og øger appetitten. Det skruer ned og lægger låg på. Når begge hormoner falder brat i ugen før menstruationen, mærkes det som PMS. Det er hele kemien. Resten er timing.',
        'Ud fra hormonerne deler man cyklussen i fire faser. Menstruationen, dag 1 til cirka 5, hvor slimhinden afstødes, hormonerne er i bund, og energien er lav. Follikelfasen, cirka dag 6 til 13, hvor østrogen stiger, og hun får overskuddet tilbage. Ægløsningen, cirka dag 14, hvor et æg frigives og lever et døgn; ofte cyklussens højeste energi og lyst. Og lutealfasen, cirka dag 15 til 28, hvor progesteron først giver ro og derefter, i den sidste uge, falder og giver PMS-symptomer: irritabilitet, sårbarhed, oppustethed, sult og dårlig søvn. Fire faser. Du kan huske fire. Du husker fire pinkoder og hele rækkefølgen på en kebabmenu.',
        'Hvorfor betyder det noget for dig? Fordi de fleste ting, der kan føles uforudsigelige, faktisk har en timing. Lav lyst dag 26 handler sjældent om dig, selv om du har brugt en del energi på at antage det, ude i køkkenet, med ryggen til. Kort lunte dag 25 er ofte et hormonfald, der forstærker noget reelt. Overskud dag 9 er et godt tidspunkt til det store. Når du kender rytmen, holder du op med at blive overrasket, og du kan begynde at handle, før hun beder om det. Det er forskellen på at være partner og at være tilskuer med gode intentioner og et tomt blik.',
        'Det er ikke det samme som, at hun er "styret af hormoner". Alle mennesker påvirkes af søvn, sult, stress og hormoner, også dig; du har været uudholdelig hver gang, frokosten var forsinket, og du har ikke engang en undskyldning med en dato på. Forskellen er, at cyklussen har en kalender. Og den kalender kan du lære at læse.',
        'Den vigtigste enkelt-ting, du kan gøre i denne uge, er at få dag 1 på plads i appen. Alt andet regnes ud fra den dato. Derefter handler det om at lægge mærke til: hvornår vender energien, hvornår kommer irritationen, hvad hjælper. Det er ikke overvågning. Det er at tage hende alvorligt nok til at huske. Og din hukommelse har brug for al den hjælp, den kan få; du har stået i supermarkedet uden seddel, og du ved, hvordan det gik.',
      ],
      conversationQuestion:
        'Hvornår i din cyklus har du det bedst, og hvornår er det sværest? Hvad ville du ønske, jeg vidste om de sværeste dage?',
      sources: [NHS_PERIODS, ACOG_CYCLE, SUNDHED_DK],
    },
    {
      id: weeklyId(M, 2),
      month: M,
      week: 2,
      title: 'Menstruation: det praktiske og det følelsesmæssige',
      body: [
        'Menstruationen er den del af cyklussen, alle kender til, og den, der oftest bliver misforstået. Også af dig, selv om du har været med til nogle stykker efterhånden, ligesom du har set en masse fodbold uden at kunne forklare offside. Den er både fysisk krævende og, for mange, følelsesmæssigt en lettelse, fordi PMS-dagene er overstået. Her er, hvad der sker, og hvad der hjælper.',
        'Blødningen er livmoderslimhinden, der afstødes. For at få den ud trækker livmoderen sig sammen, drevet af stoffer kaldet prostaglandiner. Jo mere prostaglandin, jo kraftigere kramper. Smerterne er typisk værst dag 1 og 2 og kan stråle ud i lænd og lår. Samtidig er både østrogen og progesteron på deres laveste, og med blodet tabes jern. Resultatet er lav energi, tung krop og for nogle hovedpine, kvalme eller løs mave. Det er en muskel, der knokler i dagevis på lavt brændstof. Du ville også ligge ned. Du lagde dig ned, da du slog tåen.',
        'Det, der hjælper mod kramper, er godt dokumenteret, så du behøver ikke opfinde noget; opskriften findes. Varme på maven eller lænden afslapper livmoderen og dæmper smerten; en varmepude er ofte lige så effektiv som håndkøbsmedicin. Ibuprofen og lignende blokerer prostaglandin og virker bedst, hvis de tages ved de første tegn. Let bevægelse, som en gåtur, hjælper mange, selv om det føles kontraintuitivt. Ro, søvn og lidt ekstra mad med jern gør resten. Varme, piller til tiden, en gåtur, mad. Det er listen. Den er ikke lang. Du har skrevet længere indkøbssedler til en enkelt grillaften.',
        'Følelsesmæssigt er menstruationen ofte roligere end PMS-dagene, fordi hormonerne har fundet bunden og ikke længere falder. Men lav energi og smerte giver kort lunte, og behovet for at være i fred kan være stort. Det er ikke afvisning. Det er en krop, der bruger sine ressourcer på noget andet end at underholde dig, og du kan sgu godt underholde dig selv i to dage.',
        'Hvad kan du gøre? Det praktiske først: tag opgaverne uden at spørge, hav varme klar, sørg for at der er bind, tamponer og smertestillende i huset, lav mad eller bestil. "Skal jeg lave mad?" er ikke hjælp, det er en opgave mere til hende: at svare dig. Lav maden. Sænk tempoet i de første to dage; aflys gerne noget uden at gøre et nummer ud af det. Og spørg, hvad hun har brug for, i stedet for at gætte. Svaret kan være "ingenting", og det skal du kunne tage imod uden at se ud, som om nogen lige har sendt din sauce retur.',
        'Der er også noget, du skal lade være med. Tag ikke lav energi eller aflysninger personligt. Kommentér ikke humøret med "er det fordi du har menstruation?"; hvis du får lyst, så gå ud i haven og sig det til hækken. Læg ikke store planer eller svære samtaler dag 1 og 2. Og hvis du står med varmepuden i hånden og ikke ved, hvad du skal gøre: giv hende den. Det var hele planen. Der var ikke et trin to.',
        'Til sidst noget, der er vigtigt at vide, så sæt dig lige ned: smerter, der slår hende ud, er ikke normale. Almindelige menstruationssmerter lader sig håndtere. Smerter, der giver sygedage, opkast, eller som også kommer uden for menstruationen, kan være tegn på endometriose eller andet, der kan behandles. Det tager i gennemsnit 7-10 år at få den diagnose, fordi smerten normaliseres. Du kan være den, der ikke normaliserer den.',
      ],
      conversationQuestion:
        'Hvad er det mest hjælpsomme, jeg har gjort under din menstruation? Og hvad ville du ønske, jeg gjorde, som jeg ikke gør?',
      sources: [NHS_PAIN, NHS_HEAVY, NHS_ENDO],
    },
    {
      id: weeklyId(M, 3),
      month: M,
      week: 3,
      title: 'Ægløsning, lyst og fælles ansvar',
      body: [
        'Midt i cyklussen sker det, alt det andet handler om: et æg frigives. Ægløsningen er både et biologisk højdepunkt og et tidspunkt, hvor ansvar mellem partnere bliver konkret. Her er, hvad du bør vide, og det er sandsynligvis mere, end du vidste i går, hvor du troede, du vidste det hele.',
        'I follikelfasen har stigende østrogen fået et æg til at modne i æggestokken. Når østrogen topper, udløser det et brat hop i hormonet LH, og 24-36 timer senere brister folliklen, og ægget frigives. Ægget lever 12-24 timer. Ægløsning er altså én dag, ikke en uge. Jordbær i juni, ikke en hel sæson. Hvis du troede, det var en uge, er du i godt selskab, men du er stadig forkert på den. Den ligger typisk 14 dage før næste menstruation. I en 28-dages cyklus er det omkring dag 14, i en 32-dages cyklus omkring dag 18. Appens dato er et skøn ud fra gennemsnit, ikke en måling.',
        'Kroppen viser ofte, at ægløsningen nærmer sig. Udflådet bliver klart, glat og strækbart som æggehvide. Nogle mærker et jag i den ene side af underlivet. Energi, selvtillid og lyst er ofte på cyklussens højeste, fordi østrogen og en smule testosteron topper. Efter ægløsningen stiger kropstemperaturen 0,3-0,5 grader, og udflådet bliver tykkere. Ægløsningstest, der måler LH i urinen, er den mest præcise hjemmemetode. Mere præcis end appen, og betydeligt mere præcis end din mavefornemmelse, som også sagde, at kyllingen var færdig.',
        'Nu til ansvaret. Sædceller kan overleve op til fem dage i livmoderen. Sammen med æggets levetid giver det et frugtbart vindue på cirka seks dage: de fem dage før ægløsning og selve dagen. Bemærk, at fem af de seks dage skyldes dine celler, min ven. Ønsker I ikke graviditet, er det her, prævention betyder mest. Og prævention er ikke hendes opgave alene, selv om det ofte er hende, der bærer bivirkningerne, og dig, der bærer meningerne. Ønsker I graviditet, er dagene op til ægløsning vigtigere end dagen efter, fordi sæden skal være der, når ægget kommer. Man tænder grillen, før gæsterne kommer, ikke efter.',
        'Én ting skal siges tydeligt: brug aldrig appens frugtbare vindue som prævention. Cyklusser flytter sig med stress, sygdom og rejser, og et gennemsnit rammer ikke en enkelt måned præcist. Appen er til at forstå, ikke til at planlægge sikre dage. "Appen sagde" er ikke et argument, nogen vil høre om ni måneder.',
        'Lysten svinger med hormonerne hen over måneden, og ægløsningen er for mange toppen. I lutealfasen skruer progesteron ofte ned for blusset, og i PMS-dagene og de første menstruationsdage er køkkenet typisk lukket. Nogle oplever det anderledes, og det er også normalt. Det vigtige er ikke at planlægge efter en tabel, så sæt ikke en alarm; hun kan høre dig åbne appen. Det vigtige er at holde op med at tage lav lyst personligt på bestemte tidspunkter, og at sætte pris på nærheden, når den kommer.',
        'Det, du kan gøre i denne uge, er at prioritere tid sammen, fordi det er cyklussens bedste dage til det. Og at tage en kort, rolig samtale om prævention: hvad bruger I, hvordan har hun det med det, og bærer én af jer mere af ansvaret end den anden. Du tager initiativet til samtalen. Det er sgu den letteste del af ansvaret, så begynd der.',
      ],
      conversationQuestion:
        'Hvordan har vi det med vores prævention lige nu? Bærer én af os mere af ansvaret eller bivirkningerne end den anden, og er det okay?',
      sources: [ACOG_CYCLE, NHS_PERIODS],
    },
    {
      id: weeklyId(M, 4),
      month: M,
      week: 4,
      title: 'PMS: forstærkeren',
      body: [
        'Ugen før menstruationen er den, der giver flest misforståelser i et forhold. Ikke fordi hun er "en anden", men fordi et hormonfald skruer op for alt det, der allerede er der. Forstår du mekanismen, kan du reagere på den rigtige måde. Forstår du den ikke, reagerer du, som du plejer, og det har du jo prøvet. Du ved, hvordan det smagte.',
        'Efter ægløsningen producerer det gule legeme progesteron. Bliver ægget ikke befrugtet, dør det gule legeme efter 12-14 dage, og progesteron og østrogen falder brat i de sidste 5-7 dage før menstruationen. Hjernen reagerer på faldet med lavere serotonin, det signalstof der holder humøret stabilt og dæmper trang til sødt. Kroppen holder samtidig på væske, appetitten stiger, og søvnen bliver dårligere, blandt andet fordi progesteron har holdt kropstemperaturen oppe. Det er altså mindre søvn, mere sult og mindre serotonin på én gang. Prøv selv at være charmerende under de vilkår. Du var det ikke engang, sidst bilen skulle til syn.',
        'Det mærkes som PMS: irritabilitet, sårbarhed, tårer der sidder løst, oppustethed, ømme bryster, sult, uro og en følelse af, at alting er lidt for meget. Omkring tre ud af fire kvinder mærker noget af det. Tre til otte procent har den svære form, PMDD, hvor symptomerne er så voldsomme, at de forstyrrer hverdagen; det er en reel lidelse, som kan behandles, og som fortjener en læge. Symptomerne forsvinder typisk, når blødningen begynder. Det er det, der adskiller PMS fra alt andet: timingen.',
        'Den vigtigste indsigt er denne: PMS opfinder ikke følelser. Det forstærker dem. En forstærker finder ikke på musikken, den skruer op. Salt laver ikke retten, det får dig til at smage, hvad der allerede var i den. Irritationen over, at opgaverne er skævt fordelt, er der også dag 9, men på dag 26 lyder den højere og kommer hurtigere. Sårbarheden over noget, du sagde i sidste uge, var der også før, men nu kommer tårerne. Følelserne er ægte. Forstærkeren er hormonel. Og det, der bliver skruet op for, er som regel noget, du sgu godt vidste i forvejen.',
        'Det betyder to ting for dig. For det første: afvis aldrig følelsen med "det er bare hormonerne" eller "er du PMS-ramt?". Det gør den større og fortæller hende, at hendes oplevelse ikke tæller. Du har tabt diskussionen og forlænget den i samme sætning; det er faktisk lidt af en bedrift. Anerkend først: "Jeg kan høre, at det her rammer hårdt lige nu." For det andet: reager på behovet, ikke på tonen. "Du har ikke tømt opvaskeren" betyder ofte "jeg er udmattet og føler, jeg står alene". Svarer du på tonen, får I en konflikt om tonen. Svarer du på behovet, forsvinder tonen af sig selv. Og opvaskeren bliver tømt, hvilket den alligevel skulle.',
        'Rent praktisk: sænk forventningerne til socialt og praktisk overskud i den sidste uge. Sørg for mad til tiden og snacks i huset, for sult forstærker alt, og det er endelig en opgave, du kan løse med en gryde. Gør soveværelset køligt, også selv om du fryser. Kommentér ikke krop eller udseende. Foreslå rolige aftener i stedet for at spørge "hvad vil du?". Og læg svære samtaler uden for PMS-vinduet, ikke for at undgå dem, men for at give dem en chance. Budgettet er stadig det samme på dag 9. Stemningen er ikke.',
        'Det, du ikke skal gøre, er at gøre hendes irritation til dit problem, forsvare dig, eller trække dig i en uge og kalde det hensyn. Det, der hjælper mest, er det kedeligste: at holde roen og blive. Ingen laver film om manden, der blev og lavede te. Der er ingen pris for det, ikke engang et diplom. Men når menstruationen kommer, falder alt til ro igen, og hun husker, hvem der blev. Og hvem der lavede te.',
      ],
      conversationQuestion:
        'Når du er i PMS-dagene, hvad vil du helst have af mig: lidt afstand, mere nærhed eller praktisk hjælp? Og hvordan kan jeg vide, hvad det er den dag?',
      sources: [NHS_PMS],
    },
  ],
  wrap: {
    id: wrapId(M),
    month: M,
    title: 'Måned 1: Cyklussen fra A til Z',
    summary: [
      'Den første måned handlede om at få modellen på plads, så du ikke længere arbejder ud fra noget, du hørte i 7. klasse, mens du kiggede ud ad vinduet. Cyklussen tælles fra første blødningsdag, varer typisk 21-35 dage og har fire faser: menstruation, follikelfase, ægløsning og lutealfase. Østrogen bygger op og giver overskud i første halvdel; progesteron skruer ned for blusset i anden halvdel, og faldet i begge hormoner den sidste uge er det, der mærkes som PMS.',
      'Du har lært, at varme virker på kramper, at jern og søvn betyder noget, at ægløsning er én dag og det frugtbare vindue seks, at prævention er et fælles ansvar, at PMS forstærker frem for at opfinde følelser, og at timing af samtaler er gratis hjælp. Og du har lært, at din vigtigste rolle ikke er at fikse, men at lægge mærke til, spørge og tage det praktiske. Varmepuden er stadig det bedste værktøj, du har. Bedre end pizzaovnen. Du ved nu bare, hvorfor.',
      'Næste måned handler om kommunikation og støtte: sprog, timing, at spørge i stedet for at gætte, og de konfliktmønstre, der gentager sig fase for fase. Du kender dem sgu godt. Nu får de navne.',
    ],
    keepDoing: [
      'Hold kalenderen opdateret sammen, så forudsigelserne bliver bedre end dit gæt.',
      'Sig det højt, når du kan se, at energien vender tilbage. Og tag ikke æren.',
      'Hav varme, smertestillende og bind eller tamponer i huset før menstruationen, ikke på dag 1.',
      'Læg svære samtaler uden for PMS-vinduet, og skriv dem i kalenderen, så de ikke dukker op klokken 23.',
      'Spørg "vil du have forslag, eller skal jeg bare lytte?", og gør så det, hun svarer.',
    ],
    quiz: [
      {
        question: 'Hvilken dag er cyklusdag 1?',
        options: [
          'Dagen efter blødningen stopper',
          'Første dag med rigtig blødning',
          'Dagen for ægløsning',
          'Den første dag i måneden',
        ],
        correctIndex: 1,
        explanation:
          'Alt regnes fra første blødningsdag. Får du den dato rigtig i appen, passer fase og forudsigelser bedre. Gætter du, gætter appen med, bare med flere decimaler.',
      },
      {
        question:
          'Hun har menstruation, dag 2, og siger, hun ikke orker at have gæster i aften. Hvad er mest hjælpsomt?',
        options: [
          'Sige at I jo har aftalt det, og at det bliver hyggeligt',
          'Spørge om det er fordi hun har menstruation',
          'Aflyse eller flytte det selv uden at gøre et nummer ud af det',
          'Foreslå at hun tager en smertestillende og ser tiden an',
        ],
        correctIndex: 2,
        explanation:
          'Dag 1-2 er energien lavest. At tage det praktiske uden at forhandle er den mest konkrete hjælp. Du kan sgu godt sende en besked til gæsterne selv. Du har tommelfingre.',
      },
      {
        question: 'Hvornår i cyklussen er de frugtbare dage?',
        options: [
          'Under menstruationen',
          'Dagene lige efter ægløsning',
          'De fem dage før ægløsning og selve dagen',
          'Hele lutealfasen',
        ],
        correctIndex: 2,
        explanation:
          'Sædceller lever op til fem dage, ægget et døgn. Derfor ligger vinduet før ægløsningen, og appens skøn må aldrig bruges som prævention. Aldrig.',
      },
      {
        question:
          'Det er dag 26. Hun siger skarpt: "Du har ikke tømt opvaskeren." Hvad virker bedst?',
        options: [
          '"Er du PMS-ramt?"',
          '"Det lyder som om du er presset. Hvad kan jeg tage fra?"',
          '"Du kunne også bare selv have gjort det."',
          'Ikke sige noget og gå ud af rummet',
        ],
        correctIndex: 1,
        explanation:
          'Reager på behovet, ikke på tonen. PMS forstærker en reel følelse; anerkendelse og praktisk hjælp får tonen til at forsvinde. Opvaskeren skal stadig tømmes. Også bestikket.',
      },
      {
        question: 'Hvad forårsager PMS-symptomerne i ugen før menstruation?',
        options: [
          'Stigende østrogen',
          'Det bratte fald i progesteron og østrogen',
          'Jernmangel',
          'For lidt væske',
        ],
        correctIndex: 1,
        explanation:
          'Når det gule legeme dør, falder begge hormoner, serotonin følger med ned, og det giver irritabilitet, sårbarhed, sult og dårlig søvn. Det er en forstærker, ikke en opfinder. Salt, ikke en ny ret.',
      },
      {
        question: 'Hvornår er det klogest at tage en svær samtale om økonomi?',
        options: [
          'Dag 1-2, hvor hun er rolig',
          'I follikelfasen, hvor der er overskud til at høre hinanden',
          'De sidste dage før menstruation, så det er overstået',
          'Det er lige meget',
        ],
        correctIndex: 1,
        explanation:
          'Timing er gratis hjælp. Samme samtale går oftere godt, når stressrobustheden er høj, og skævt i PMS-vinduet. Klokken 23 på dag 27 er ikke et tidspunkt, det er en fejl, og du har begået den før.',
      },
      {
        question:
          'Hun kaster op af smerte og må melde sig syg hver menstruation. Hvad er den rigtige reaktion?',
        options: [
          'Det er normalt for nogle, varme og ro er nok',
          'Foreslå at hun bider tænderne sammen',
          'Sige at det fortjener en læge, og tilbyde at tage med',
          'Vente og se om det bliver bedre med alderen',
        ],
        correctIndex: 2,
        explanation:
          'Smerter, der slår hende ud, er ikke normale. Endometriose og andre tilstande kan behandles, men diagnosen tager år, fordi smerten normaliseres. Vær den, der ikke gør det, og den, der tager med.',
      },
    ],
  },
};
