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
  focus: 'Forstå de fire faser, og lær at aflæse hvor hun er i dag.',
  daily: [
    {
      id: dailyId(M, 1),
      month: M,
      day: 1,
      title: 'Dag 1 er første blødningsdag',
      insight:
        'En cyklus tælles fra den første dag med rigtig blødning til dagen før den næste blødning begynder. Første blødningsdag er altså cyklusdag 1, ikke den dag blødningen stopper. Det er den dato, alt andet i appen regnes ud fra: fase, forventet ægløsning og næste menstruation. En typisk cyklus er 28 dage, men alt mellem 21 og 35 dage er normalt for voksne, og få kvinder rammer præcis samme længde hver gang. Din opgave i dag er ikke at forstå det hele, men at få den ene dato på plads, som resten bygger på.',
      action:
        'Spørg hende, hvornår den seneste menstruation startede, og registrér datoen i appen, hvis den ikke allerede er der.',
      phaseTags: [],
      sources: [NHS_PERIODS, SUNDHED_DK],
    },
    {
      id: dailyId(M, 2),
      month: M,
      day: 2,
      title: 'Fire faser, én rytme',
      insight:
        'Cyklussen har fire faser: menstruation (blødningen), follikelfasen (energien vender tilbage), ægløsning (toppen) og lutealfasen (roligere, og til sidst PMS). De to første halvdele styres af østrogen, der stiger; den sidste halvdel af progesteron, der først stiger og så falder. Det er hormonernes op og ned, der får energi, humør, søvn og lyst til at skifte hen over måneden. Når du kender rytmen, holder skiftene op med at komme bag på dig.',
      action:
        'Åbn Hjem-skærmen, se hvilken fase hun er i i dag, og læs det korte faseopslag under "Faserne".',
      phaseTags: [],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 3),
      month: M,
      day: 3,
      title: 'Østrogen og progesteron, kort fortalt',
      insight:
        'Du behøver kun kende to hormoner for at forstå det meste. Østrogen bygger op: det stiger fra menstruationens slutning frem mod ægløsning og giver energi, klarhed og lyst. Progesteron holder igen: det stiger efter ægløsning, virker beroligende og lidt sløvende, og hæver kropstemperaturen en anelse. Når begge falder brat i ugen før menstruation, mærkes det som PMS. Det er ikke "humørsvingninger ud af det blå", det er et hormonfald med en forudsigelig timing.',
      action:
        'Sig sætningen højt for dig selv: "Østrogen op = overskud. Progesteron op = ro. Begge ned = sårbar." Det er hele modellen.',
      phaseTags: [],
      sources: [ACOG_CYCLE, SUNDHED_DK],
    },
    {
      id: dailyId(M, 4),
      month: M,
      day: 4,
      title: 'Hvad der faktisk sker under menstruationen',
      insight:
        'Blødningen er livmoderslimhinden, der afstødes, fordi der ikke blev et befrugtet æg at holde på. Livmoderen trækker sig sammen for at skubbe den ud, og de sammentrækninger er kramperne. Samtidig er begge hormoner på bunden, så energien er lav, især dag 1 og 2. Den samlede blodmængde er typisk kun 30-40 ml over hele perioden, men det kan føles som meget mere, og med blodet mister hun jern. En menstruation varer normalt 2-7 dage.',
      action:
        'Hvis hun har menstruation nu: tag ét praktisk gøremål fra hende uden at spørge. Hvis ikke: læg mærke til, hvad der typisk driller hende de første dage.',
      phaseTags: ['menstrual'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 5),
      month: M,
      day: 5,
      title: 'Kramper: varme virker',
      insight:
        'Menstruationssmerter skyldes stoffer kaldet prostaglandiner, der får livmoderen til at trække sig sammen. Jo mere prostaglandin, jo kraftigere kramper. Varme på maven eller lænden afslapper musklen og dæmper smerten målbart, og det er et af de bedst dokumenterede huskeråd der findes. Håndkøbsmedicin som ibuprofen virker bedst, hvis det tages ved de første tegn, ikke når smerten allerede er på toppen. Let bevægelse, som en gåtur, hjælper også flere, end man skulle tro.',
      action:
        'Sørg for, at der er en varmepude eller varmedunk i huset, og at hun ved, hvor den er. Det er en engangsinvestering i mange gode dage.',
      phaseTags: ['menstrual'],
      sources: [NHS_PAIN],
    },
    {
      id: dailyId(M, 6),
      month: M,
      day: 6,
      title: 'Træthed og jern',
      insight:
        'Trætheden i menstruationens første dage har to kilder: lave hormoner og tab af jern med blodet. Jern bærer ilt rundt i kroppen, og selv et lille underskud mærkes som tung krop og kort lunte. Kvinder med kraftige blødninger har markant større risiko for jernmangel. Jern optages bedst fra kød, fisk og æg, mens jern fra planter (linser, bønner, grønne blade) optages bedre sammen med C-vitamin. Kaffe og te lige til måltidet hæmmer optaget.',
      action:
        'Lav eller bestil et måltid med jern i dag: oksekød, linser, kikærter eller spinat, gerne med noget citrus til.',
      phaseTags: ['menstrual'],
      sources: [NHS_HEAVY],
    },
    {
      id: dailyId(M, 7),
      month: M,
      day: 7,
      title: 'Hvad er en normal blødning?',
      insight:
        'Det er svært at vurdere blodmængde udefra, så her er de tegn, lægerne bruger: bind eller tampon skal skiftes hver time i flere timer i træk, blødning der varer over 7 dage, klumper større end en 2-krone, eller blødning der gør, at hun undgår at gå ud. Det kaldes kraftig menstruation og rammer omkring hver fjerde kvinde på et tidspunkt. Det kan behandles, men mange lever med det, fordi de tror, det er normalt. Din viden gør en forskel her.',
      action:
        'Tjek, at der er bind eller tamponer i huset i den type, hun bruger. Hvis du ikke ved hvilken, så spørg. Det er ikke pinligt, det er praktisk.',
      phaseTags: ['menstrual'],
      sources: [NHS_HEAVY],
    },
    {
      id: dailyId(M, 8),
      month: M,
      day: 8,
      title: 'Energien vender tilbage',
      insight:
        'Når blødningen stopper, begynder follikelfasen for alvor. Hypofysen sender signalstoffet FSH, og en gruppe æg-follikler i æggestokkene begynder at modne. De producerer østrogen, som stiger dag for dag. Østrogen øger serotonin og dopamin i hjernen, så humør, energi og motivation stiger med. Mange beskriver det som at "vende tilbage til sig selv". Det er ofte cyklussens mest behagelige uge, og den kommer efter den mest krævende.',
      action:
        'Læg mærke til skiftet, og sig det højt: "Det virker som om du har fået energien tilbage." At blive set i det gode er lige så vigtigt som i det svære.',
      phaseTags: ['follicular'],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 9),
      month: M,
      day: 9,
      title: 'Planlæg det store nu',
      insight:
        'Follikelfasen er det bedste tidspunkt i cyklussen til alt, der kræver overskud: gæster, rejser, hårde træningspas, store beslutninger, svære samtaler. Østrogen gør hjernen mere åben for nyt og mere stressrobust. Det betyder ikke, at hun er "sig selv" nu og "ikke sig selv" resten af måneden. Det betyder, at timing er gratis hjælp. Den samme samtale kan gå godt på dag 9 og skævt på dag 26, uden at nogen af jer har gjort noget anderledes.',
      action:
        'Foreslå én ting, I skal lave sammen i denne uge, som kræver lidt energi. Kig i kalenderen og læg det inden ægløsningen.',
      phaseTags: ['follicular'],
    },
    {
      id: dailyId(M, 10),
      month: M,
      day: 10,
      title: 'Hvor lang er en normal cyklus?',
      insight:
        'For voksne er 21-35 dage normalt, og gennemsnittet er omkring 28. Cyklussen er sjældent præcis den samme længde hver gang; en variation på nogle dage er helt almindeligt. Det er første halvdel, follikelfasen, der varierer mest. Lutealfasen efter ægløsning er ret stabil på 12-14 dage. Derfor regner appen ægløsning baglæns fra den forventede menstruation, ikke forlæns fra dag 1. Efter et par loggede cyklusser bliver skønnet bedre, fordi det bygger på hendes gennemsnit i stedet for på et standardtal.',
      action:
        'Åbn indstillinger og tjek, at cykluslængden passer til det, hun selv siger. Er I i tvivl, så lad standardtallet stå, appen retter sig ind med tiden.',
      phaseTags: [],
      sources: [NHS_PERIODS, SUNDHED_DK],
    },
    {
      id: dailyId(M, 11),
      month: M,
      day: 11,
      title: 'Hvorfor cyklussen flytter sig',
      insight:
        'Stress, sygdom, dårlig søvn, rejser på tværs af tidszoner, vægtændringer og hård træning kan alle forsinke ægløsningen, og så kommer menstruationen senere. Det er kroppens måde at sige: ikke lige nu. Amning, perimenopause, PCOS og stofskiftet påvirker også cyklussen. En enkelt sen eller tidlig menstruation betyder sjældent noget. Bliver cyklussen konsekvent kortere end 21 dage, længere end 35, eller udebliver den i over tre måneder uden graviditet, er det en samtale med lægen værd.',
      action:
        'Hvis menstruationen er forsinket, så spørg nysgerrigt, ikke bekymret: "Har der været meget pres på i denne måned?" Det er oftere forklaringen end noget andet.',
      phaseTags: [],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 12),
      month: M,
      day: 12,
      title: 'At tale om det uden at gøre det akavet',
      insight:
        'Mange par taler kun om cyklussen, når noget er galt. Det gør emnet ladet. Det hjælper at tale om det, når alt er fint, i små doser og med nysgerrighed frem for analyse. "Jeg prøver at lære, hvordan din cyklus påvirker dig, så jeg kan være bedre til at hjælpe" er en sætning, de fleste tager godt imod. Undgå at forklare hende hendes egen krop, og undgå at bruge fasen som forklaring på hendes holdninger. Spørg, og lyt.',
      action:
        'Fortæl hende, at du bruger appen, og hvorfor. Spørg, om der er noget, hun gerne vil have, at du særligt lægger mærke til.',
      phaseTags: ['follicular', 'ovulation'],
    },
    {
      id: dailyId(M, 13),
      month: M,
      day: 13,
      title: 'Ægløsning: cyklussens midtpunkt',
      insight:
        'Når østrogen topper, udløser det et brat hop i hormonet LH. 24-36 timer senere brister den modne follikel, og ægget frigives. Ægget lever kun 12-24 timer. Det er det, ægløsning er: én dag, ikke en uge. Tidspunktet ligger typisk 14 dage før næste menstruation, så i en 28-dages cyklus omkring dag 14, i en 32-dages cyklus omkring dag 18. Appens dato er et skøn ud fra gennemsnit, ikke en måling. Kropstegn og ægløsningstest er mere præcise.',
      action:
        'Se på appens skønnede ægløsningsdato for denne cyklus, og læs opslaget om ægløsning under "Faserne".',
      phaseTags: ['ovulation', 'follicular'],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 14),
      month: M,
      day: 14,
      title: 'Det frugtbare vindue er et fælles ansvar',
      insight:
        'Sædceller kan overleve op til fem dage i livmoderen, og ægget lever et døgn. Derfor er de frugtbare dage de fem dage før ægløsning plus selve dagen: seks dage i alt. Det gælder uanset, om I ønsker graviditet eller ej. Ønsker I ikke graviditet, er det her prævention betyder mest, og det er ikke hendes opgave alene. Ønsker I graviditet, er dagene op til ægløsning vigtigere end dagen efter. Brug aldrig appens vindue som prævention; det er et gennemsnit, og cyklusser flytter sig.',
      action:
        'Tal om, hvordan I har det med jeres prævention lige nu, og om ansvaret ligger rimeligt fordelt. Fem minutter er nok.',
      phaseTags: ['ovulation'],
      sources: [NHS_PERIODS],
    },
    {
      id: dailyId(M, 15),
      month: M,
      day: 15,
      title: 'Tegn på ægløsning',
      insight:
        'Kroppen viser ofte, at ægløsningen nærmer sig. Udflådet bliver klart, glat og strækbart, som æggehvide. Nogle mærker et kort jag eller en murren i den ene side af underlivet, når folliklen brister. Lysten er ofte højere, huden pænere, og humøret på top. Efter ægløsningen stiger kropstemperaturen 0,3-0,5 grader, og udflådet bliver tykkere igen. Hvis I følger tegnene over nogle måneder, bliver I langt bedre til at vide, hvor i cyklussen hun er, end nogen app.',
      action:
        'Spørg, om hun selv kan mærke, hvornår hun har ægløsning, og hvad hun lægger mærke til. Mange kan, og få er blevet spurgt.',
      phaseTags: ['ovulation'],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 16),
      month: M,
      day: 16,
      title: 'Lyst gennem cyklussen',
      insight:
        'Lysten svinger med hormonerne. Omkring ægløsning er østrogen og en smule testosteron højest, og mange mærker mere lyst og mere overskud til nærhed. I lutealfasen dæmper progesteron ofte lysten, og i PMS-dagene og de første menstruationsdage er kroppen typisk mest lukket. Nogle oplever det stik modsat, og det er også normalt. Pointen er ikke at planlægge efter en tabel, men at holde op med at tage lav lyst personligt på bestemte tidspunkter i måneden.',
      action:
        'Gør det tydeligt, at nærhed ikke er en forventning i de tunge dage, og at du sætter pris på den, når den kommer.',
      phaseTags: ['ovulation', 'luteal'],
    },
    {
      id: dailyId(M, 17),
      month: M,
      day: 17,
      title: 'Lutealfasen: progesteron tager over',
      insight:
        'Efter ægløsningen bliver den tomme follikel til det gule legeme, som producerer progesteron. Progesteron gør livmoderslimhinden klar til et eventuelt befrugtet æg, hæver kropstemperaturen lidt og virker beroligende, næsten sløvende. Den første uge efter ægløsning føles derfor ofte rolig og hjemlig. Energien er ikke væk, men den er indadvendt. Bliver ægget ikke befrugtet, dør det gule legeme efter 12-14 dage, hormonerne falder, og menstruationen begynder.',
      action:
        'Foreslå en rolig aften hjemme frem for at spørge "hvad vil du?". Konkrete, lette forslag er en gave i denne fase.',
      phaseTags: ['luteal'],
      sources: [ACOG_CYCLE],
    },
    {
      id: dailyId(M, 18),
      month: M,
      day: 18,
      title: 'Søvn og temperatur',
      insight:
        'Progesteron hæver kropstemperaturen 0,3-0,5 grader i hele lutealfasen. Det er lidt, men nok til at mange sover dårligere, vågner om natten eller føler sig varme. Kombineret med det hormonfald, der kommer i den sidste uge, er dårlig søvn en af de mest oversete årsager til, at PMS-dagene føles så hårde. Et køligt soveværelse, et lettere dynetæppe og ro om aftenen hjælper mere, end man tror.',
      action:
        'Gør soveværelset køligere i aften: luft ud, skru ned for varmen, eller tilbyd at bytte til den lettere dyne.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 19),
      month: M,
      day: 19,
      title: 'Sult og trang er ikke mangel på vilje',
      insight:
        'I lutealfasen bruger kroppen omkring 100-300 kalorier mere om dagen, og progesteron øger appetitten. Samtidig falder serotonin, når østrogen falder, og kroppen søger hurtige kulhydrater for at rette op. Trangen til sødt, salt og chokolade i ugen før menstruation er altså biologi, ikke svag karakter. Regelmæssige måltider, proteiner og fibre dæmper udsvingene, og sult forstærker irritabilitet mere end noget andet i denne fase.',
      action:
        'Sørg for, at der er gode snacks i huset i denne uge: nødder, mørk chokolade, frugt, yoghurt. Og sig ikke noget om det, når de bliver spist.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 20),
      month: M,
      day: 20,
      title: 'Oppustet, øm og ikke i humør til kommentarer',
      insight:
        'Progesteron får kroppen til at holde på væske. Maven bliver oppustet, brysterne spænder og bliver ømme, og tøjet sidder anderledes. Det er forbigående og helt normalt, men det påvirker kropsbilledet mere, end mange partnere er klar over. Kommentarer om mave, vægt eller "du ser træt ud" lander hårdt i denne uge, også hvis de er kærligt ment. Fysisk nærhed skal være blid, især om brysterne.',
      action:
        'Sig noget ægte og konkret, du sætter pris på ved hende i dag, som ikke handler om udseende.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 21),
      month: M,
      day: 21,
      title: 'PMS: forstærkeren',
      insight:
        'PMS er de fysiske og følelsesmæssige symptomer, der kommer i dagene før menstruation og forsvinder, når blødningen begynder. Årsagen er det bratte fald i progesteron og østrogen, som hjernen reagerer på med lavere serotonin. Omkring tre ud af fire mærker det, og 3-8 procent har den svære form, PMDD, som er en reel lidelse med behandling. Vigtigt: PMS opfinder ikke følelser. Det forstærker dem. Det, der irriterer hende på dag 26, er ofte reelt, men lyder højere.',
      action:
        'Find PMS-vinduet i appen for denne cyklus, og sæt dig for at være den, der har tålmodighed på lager i de dage.',
      phaseTags: ['luteal'],
      sources: [NHS_PMS],
    },
    {
      id: dailyId(M, 22),
      month: M,
      day: 22,
      title: 'Reager på behovet, ikke på tonen',
      insight:
        'I PMS-dagene kommer beskeder ofte pakket ind i en skarpere tone, end de er ment. "Du har ikke tømt opvaskeren" kan betyde "jeg er udmattet og føler, jeg står alene med det hele". Reagerer du på tonen, får I en konflikt om tonen. Reagerer du på behovet, får hun hjælp, og tonen forsvinder af sig selv. Det kræver, at du tæller til tre, og at du ikke behøver have ret lige nu. Det er ikke det samme som at finde sig i hvad som helst; det er at vælge sit tidspunkt.',
      action:
        'Næste gang tonen bliver skarp: sig "det lyder som om du er presset, hvad kan jeg tage fra?" i stedet for at forsvare dig.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 23),
      month: M,
      day: 23,
      title: 'Timing af svære samtaler',
      insight:
        'De fleste par har nogle faste emner, der giver gnidninger: økonomi, familie, fordeling af opgaver, fremtid. Samtalerne er nødvendige, men tidspunktet er valgfrit. I de sidste 4-5 dage før menstruation er stressrobustheden lavest og følelserne højest, så samme samtale ender oftere i konflikt. Det er ikke en grund til at undgå emnet i en uge, men til at lægge det bevidst i follikelfasen, hvor der er overskud til at høre hinanden.',
      action:
        'Hvis der er en svær samtale, du har gået og ventet på at tage, så tjek kalenderen og læg den uden for PMS-vinduet.',
      phaseTags: ['luteal', 'follicular'],
    },
    {
      id: dailyId(M, 24),
      month: M,
      day: 24,
      title: 'Sætninger der aldrig hjælper',
      insight:
        '"Er du PMS-ramt?" "Det er bare hormonerne." "Du overreagerer." Alle tre gør det samme: de siger, at hendes oplevelse ikke tæller. Selv når hormonerne faktisk forstærker, er følelsen ægte, og at få den afvist gør den større. Det modsatte virker: at anerkende først og eventuelt tale om timing bagefter. "Jeg kan høre, at det her rammer hårdt lige nu" åbner. "Kan vi tage den i morgen, når vi begge er friske?" er okay at sige, når anerkendelsen er kommet først.',
      action:
        'Vælg én sætning fra listen, du selv har brugt, og beslut dig for et alternativ, du vil sige næste gang.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 25),
      month: M,
      day: 25,
      title: 'Smerte, der slår hende ud, er ikke normalt',
      insight:
        'Almindelige menstruationssmerter er ubehagelige, men lader sig håndtere med varme og håndkøbsmedicin. Smerter, der gør, at hun må melde sig syg, kaster op, ikke kan stå oprejst, eller som også kommer uden for menstruationen, er ikke "bare menstruation". Endometriose rammer omkring 1 ud af 10 kvinder, og i gennemsnit går der 7-10 år, før diagnosen stilles, netop fordi smerten normaliseres. Du kan ikke stille diagnosen, men du kan være den, der siger: det her fortjener en læge.',
      action:
        'Spørg, hvor slemt det plejer at være på en skala fra 1 til 10, og om det nogensinde har forhindret hende i at gøre ting. Lyt uden at bagatellisere.',
      phaseTags: ['menstrual', 'luteal'],
      sources: [NHS_ENDO, NHS_PAIN],
    },
    {
      id: dailyId(M, 26),
      month: M,
      day: 26,
      title: 'Derfor hjælper kalenderen jer begge',
      insight:
        'En logget cyklus er ikke overvågning, det er hukommelse. Efter to-tre cyklusser kan man se, om hovedpinen altid kommer dag 25, om søvnen svigter i lutealfasen, om irritationen har en fast dato. Det tager gætteriet ud af det. Hun får bekræftet, at der er mønstre og ikke bare "dårlige dage", og du får en dagbog, du kan handle på i stedet for at blive overrasket. Kalenderen fungerer kun, hvis den logges. Det skal være nemt, og det skal være hendes.',
      action:
        'Kig i kalenderen sammen i fem minutter. Spørg, om der er noget, hun gerne vil have logget, som appen ikke spørger om.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 27),
      month: M,
      day: 27,
      title: 'Find det første mønster',
      insight:
        'Du har snart fulgt en hel cyklus. Selv efter én er der noget at hente: hvilken dag energien vendte, hvornår irritationen kom, om søvnen ændrede sig, hvad der hjalp under menstruationen. Mønstre bliver først rigtigt tydelige efter tre-fire cyklusser, men det, du lægger mærke til nu, er begyndelsen. Skriv det ned. Hukommelsen om, hvordan sidste måned var, er notorisk dårlig, og især for de dage, hvor det var svært.',
      action:
        'Skriv én ting ned, du har lagt mærke til i denne cyklus, i noten på en dag i kalenderen. Bare én.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 28),
      month: M,
      day: 28,
      title: 'Klar til næste menstruation',
      insight:
        'Når appen siger, at menstruationen forventes om et par dage, er det tid til at forberede sig. Ikke stort, bare praktisk: er der bind eller tamponer, smertestillende, noget nemt at spise, en varmepude der virker? Er kalenderen de næste to dage rimeligt tom? Forberedelse er usynlig, når den lykkes; hun mærker bare, at det er lettere end sidst. Det er i den slags små ting, forståelse bliver til handling.',
      action:
        'Tjek de fire ting: bind/tamponer, smertestillende, nem mad, varme. Fyld op, hvor der mangler.',
      phaseTags: ['luteal'],
    },
    {
      id: dailyId(M, 29),
      month: M,
      day: 29,
      title: 'Din rolle: ikke at fikse, men at være der',
      insight:
        'Mange partnere vil løse. Kramperne, humøret, trætheden. Men det meste kan ikke fikses, kun gøres lettere at bære. Det, der hjælper, er ofte simpelt: at hun ikke skal forklare sig, at det praktiske bliver taget, at du ikke bliver fornærmet over lav energi, og at du bliver. Spørgsmålet "vil du have løsninger eller bare et øre?" sparer mange misforståelser, fordi svaret skifter fra dag til dag, og fra fase til fase.',
      action:
        'Stil spørgsmålet næste gang, hun fortæller om noget svært: "Vil du have forslag, eller skal jeg bare lytte?" Og gør så det, hun svarer.',
      phaseTags: [],
    },
    {
      id: dailyId(M, 30),
      month: M,
      day: 30,
      title: 'Måned 1: det har du lært',
      insight:
        'Du ved nu, at dag 1 er første blødningsdag, at cyklussen har fire faser styret af østrogen og progesteron, og at de fleste skift i energi, humør, søvn og lyst har en timing, der kan forudsiges. Du ved, at varme virker på kramper, at jern og søvn betyder noget, at PMS forstærker frem for at opfinde, og at timing af samtaler er gratis hjælp. Vigtigst: du ved, at din opgave er at lægge mærke til, spørge og handle på det praktiske. Resten af året bygger ovenpå det.',
      action:
        'Skriv tre ting ned, du har lært denne måned, og fortæl hende dem. Tag så månedens quiz.',
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
        'Hvis du kun læser én artikel i denne app, så lad det være denne. Den forklarer, hvad der sker i løbet af en cyklus, og hvorfor det betyder noget for dig som partner.',
        'En menstruationscyklus begynder på første dag med rigtig blødning, dag 1, og slutter dagen før næste blødning. Gennemsnittet er 28 dage, men 21-35 er normalt, og de fleste kvinder varierer nogle dage fra gang til gang. Det, der varierer, er næsten altid første halvdel. Anden halvdel, tiden efter ægløsning, er ret stabil på 12-14 dage.',
        'Cyklussen styres af to hovedhormoner. Østrogen bygger op. Det stiger fra menstruationens slutning frem mod ægløsning, og med det stiger energi, humør, klarhed og lyst. Progesteron holder igen. Det stiger efter ægløsning, virker beroligende og lidt sløvende, hæver kropstemperaturen en anelse og øger appetitten. Når begge hormoner falder brat i ugen før menstruationen, mærkes det som PMS.',
        'Ud fra hormonerne deler man cyklussen i fire faser. Menstruationen, dag 1 til cirka 5, hvor slimhinden afstødes, hormonerne er i bund, og energien er lav. Follikelfasen, cirka dag 6 til 13, hvor østrogen stiger, og hun får overskuddet tilbage. Ægløsningen, cirka dag 14, hvor et æg frigives og lever et døgn; ofte cyklussens højeste energi og lyst. Og lutealfasen, cirka dag 15 til 28, hvor progesteron først giver ro og derefter, i den sidste uge, falder og giver PMS-symptomer: irritabilitet, sårbarhed, oppustethed, sult og dårlig søvn.',
        'Hvorfor betyder det noget for dig? Fordi de fleste ting, der kan føles uforudsigelige, faktisk har en timing. Lav lyst dag 26 handler sjældent om dig. Kort lunte dag 25 er ofte et hormonfald, der forstærker noget reelt. Overskud dag 9 er et godt tidspunkt til det store. Når du kender rytmen, holder du op med at blive overrasket, og du kan begynde at handle før, hun beder om det.',
        'Det er ikke det samme som, at hun er "styret af hormoner". Alle mennesker påvirkes af søvn, sult, stress og hormoner. Forskellen er, at cyklussen har en kalender. Og den kalender kan du lære at læse.',
        'Den vigtigste enkelt-ting, du kan gøre i denne uge, er at få dag 1 på plads i appen. Alt andet regnes ud fra den dato. Derefter handler det om at lægge mærke til: hvornår vender energien, hvornår kommer irritationen, hvad hjælper. Det er ikke overvågning. Det er at tage hende alvorligt nok til at huske.',
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
        'Menstruationen er den del af cyklussen, alle kender til, og den, der oftest bliver misforstået. Den er både fysisk krævende og, for mange, følelsesmæssigt en lettelse, fordi PMS-dagene er overstået. Her er, hvad der sker, og hvad der hjælper.',
        'Blødningen er livmoderslimhinden, der afstødes. For at få den ud trækker livmoderen sig sammen, drevet af stoffer kaldet prostaglandiner. Jo mere prostaglandin, jo kraftigere kramper. Smerterne er typisk værst dag 1 og 2 og kan stråle ud i lænd og lår. Samtidig er både østrogen og progesteron på deres laveste, og med blodet tabes jern. Resultatet er lav energi, tung krop og for nogle hovedpine, kvalme eller løs mave.',
        'Det, der hjælper mod kramper, er godt dokumenteret. Varme på maven eller lænden afslapper livmoderen og dæmper smerten; en varmepude er ofte lige så effektiv som håndkøbsmedicin. Ibuprofen og lignende blokerer prostaglandin og virker bedst, hvis de tages ved de første tegn. Let bevægelse, som en gåtur, hjælper mange, selv om det føles kontraintuitivt. Ro, søvn og lidt ekstra mad med jern gør resten.',
        'Følelsesmæssigt er menstruationen ofte roligere end PMS-dagene, fordi hormonerne har fundet bunden og ikke længere falder. Men lav energi og smerte giver kort lunte, og behovet for at være i fred kan være stort. Det er ikke afvisning. Det er en krop, der bruger sine ressourcer på noget andet.',
        'Hvad kan du gøre? Det praktiske først: tag opgaverne uden at spørge, hav varme klar, sørg for at der er bind, tamponer og smertestillende i huset, lav mad eller bestil. Sænk tempoet i de første to dage; aflys gerne noget uden at gøre et nummer ud af det. Og spørg, hvad hun har brug for, i stedet for at gætte. Svaret kan være "ingenting", og det skal du kunne tage imod.',
        'Der er også noget, du skal lade være med. Tag ikke lav energi eller aflysninger personligt. Kommentér ikke humøret med "er det fordi du har menstruation?". Læg ikke store planer eller svære samtaler dag 1 og 2.',
        'Til sidst noget, der er vigtigt at vide: smerter, der slår hende ud, er ikke normale. Almindelige menstruationssmerter lader sig håndtere. Smerter, der giver sygedage, opkast, eller som også kommer uden for menstruationen, kan være tegn på endometriose eller andet, der kan behandles. Det tager i gennemsnit 7-10 år at få den diagnose, fordi smerten normaliseres. Du kan være den, der ikke normaliserer den.',
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
        'Midt i cyklussen sker det, alt det andet handler om: et æg frigives. Ægløsningen er både et biologisk højdepunkt og et tidspunkt, hvor ansvar mellem partnere bliver konkret. Her er, hvad du bør vide.',
        'I follikelfasen har stigende østrogen fået et æg til at modne i æggestokken. Når østrogen topper, udløser det et brat hop i hormonet LH, og 24-36 timer senere brister folliklen, og ægget frigives. Ægget lever 12-24 timer. Ægløsning er altså én dag, ikke en uge. Den ligger typisk 14 dage før næste menstruation. I en 28-dages cyklus er det omkring dag 14, i en 32-dages cyklus omkring dag 18. Appens dato er et skøn ud fra gennemsnit, ikke en måling.',
        'Kroppen viser ofte, at ægløsningen nærmer sig. Udflådet bliver klart, glat og strækbart som æggehvide. Nogle mærker et jag i den ene side af underlivet. Energi, selvtillid og lyst er ofte på cyklussens højeste, fordi østrogen og en smule testosteron topper. Efter ægløsningen stiger kropstemperaturen 0,3-0,5 grader, og udflådet bliver tykkere. Ægløsningstest, der måler LH i urinen, er den mest præcise hjemmemetode.',
        'Nu til ansvaret. Sædceller kan overleve op til fem dage i livmoderen. Sammen med æggets levetid giver det et frugtbart vindue på cirka seks dage: de fem dage før ægløsning og selve dagen. Ønsker I ikke graviditet, er det her, prævention betyder mest. Og prævention er ikke hendes opgave alene, selv om det ofte er hende, der bærer bivirkningerne. Ønsker I graviditet, er dagene op til ægløsning vigtigere end dagen efter, fordi sæden skal være der, når ægget kommer.',
        'Én ting skal siges tydeligt: brug aldrig appens frugtbare vindue som prævention. Cyklusser flytter sig med stress, sygdom og rejser, og et gennemsnit rammer ikke en enkelt måned præcist. Appen er til at forstå, ikke til at planlægge sikre dage.',
        'Lysten svinger med hormonerne hen over måneden, og ægløsningen er for mange toppen. I lutealfasen dæmper progesteron ofte lysten, og i PMS-dagene og de første menstruationsdage er kroppen typisk mest lukket. Nogle oplever det anderledes, og det er også normalt. Det vigtige er ikke at planlægge efter en tabel, men at holde op med at tage lav lyst personligt på bestemte tidspunkter, og at sætte pris på nærheden, når den kommer.',
        'Det, du kan gøre i denne uge, er at prioritere tid sammen, fordi det er cyklussens bedste dage til det. Og at tage en kort, rolig samtale om prævention: hvad bruger I, hvordan har hun det med det, og bærer én af jer mere af ansvaret end den anden.',
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
        'Ugen før menstruationen er den, der giver flest misforståelser i et forhold. Ikke fordi hun er "en anden", men fordi et hormonfald skruer op for alt det, der allerede er der. Forstår du mekanismen, kan du reagere på den rigtige måde.',
        'Efter ægløsningen producerer det gule legeme progesteron. Bliver ægget ikke befrugtet, dør det gule legeme efter 12-14 dage, og progesteron og østrogen falder brat i de sidste 5-7 dage før menstruationen. Hjernen reagerer på faldet med lavere serotonin, det signalstof der holder humøret stabilt og dæmper trang til sødt. Kroppen holder samtidig på væske, appetitten stiger, og søvnen bliver dårligere, blandt andet fordi progesteron har holdt kropstemperaturen oppe.',
        'Det mærkes som PMS: irritabilitet, sårbarhed, tårer der sidder løst, oppustethed, ømme bryster, sult, uro og en følelse af, at alting er lidt for meget. Omkring tre ud af fire kvinder mærker noget af det. Tre til otte procent har den svære form, PMDD, hvor symptomerne er så voldsomme, at de forstyrrer hverdagen; det er en reel lidelse, som kan behandles, og som fortjener en læge. Symptomerne forsvinder typisk, når blødningen begynder. Det er det, der adskiller PMS fra alt andet: timingen.',
        'Den vigtigste indsigt er denne: PMS opfinder ikke følelser. Det forstærker dem. Irritationen over, at opgaverne er skævt fordelt, er der også dag 9, men på dag 26 lyder den højere og kommer hurtigere. Sårbarheden over noget, du sagde i sidste uge, var der også før, men nu kommer tårerne. Følelserne er ægte. Forstærkeren er hormonel.',
        'Det betyder to ting for dig. For det første: afvis aldrig følelsen med "det er bare hormonerne" eller "er du PMS-ramt?". Det gør den større og fortæller hende, at hendes oplevelse ikke tæller. Anerkend først: "Jeg kan høre, at det her rammer hårdt lige nu." For det andet: reager på behovet, ikke på tonen. "Du har ikke tømt opvaskeren" betyder ofte "jeg er udmattet og føler, jeg står alene". Svarer du på tonen, får I en konflikt om tonen. Svarer du på behovet, forsvinder tonen af sig selv.',
        'Rent praktisk: sænk forventningerne til socialt og praktisk overskud i den sidste uge. Sørg for mad til tiden og snacks i huset, for sult forstærker alt. Gør soveværelset køligt. Kommentér ikke krop eller udseende. Foreslå rolige aftener i stedet for at spørge "hvad vil du?". Og læg svære samtaler uden for PMS-vinduet, ikke for at undgå dem, men for at give dem en chance.',
        'Det, du ikke skal gøre, er at gøre hendes irritation til dit problem, forsvare dig, eller trække dig i en uge. Det, der hjælper mest, er det kedeligste: at holde roen og blive. Når menstruationen kommer, falder alt til ro igen, og hun husker, hvem der blev.',
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
      'Den første måned handlede om at få modellen på plads. Cyklussen tælles fra første blødningsdag, varer typisk 21-35 dage og har fire faser: menstruation, follikelfase, ægløsning og lutealfase. Østrogen bygger op og giver overskud i første halvdel; progesteron giver ro i anden halvdel, og faldet i begge hormoner den sidste uge er det, der mærkes som PMS.',
      'Du har lært, at varme virker på kramper, at jern og søvn betyder noget, at ægløsning er én dag og det frugtbare vindue seks, at prævention er et fælles ansvar, at PMS forstærker frem for at opfinde følelser, og at timing af samtaler er gratis hjælp. Og du har lært, at din vigtigste rolle ikke er at fikse, men at lægge mærke til, spørge og tage det praktiske.',
      'Næste måned går vi i dybden med menstruationen: smerte, blødning, energi og det, du konkret kan gøre i de dage, hvor det er sværest.',
    ],
    keepDoing: [
      'Hold kalenderen opdateret sammen, så forudsigelserne bliver bedre.',
      'Sig det højt, når du kan se, at energien vender tilbage.',
      'Hav varme, smertestillende og bind eller tamponer i huset før menstruationen.',
      'Læg svære samtaler uden for PMS-vinduet.',
      'Spørg "vil du have forslag, eller skal jeg bare lytte?"',
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
          'Alt regnes fra første blødningsdag. Får du den dato rigtigt i appen, passer fase og forudsigelser bedre.',
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
          'Dag 1-2 er energien lavest. At tage det praktiske uden at forhandle er den mest konkrete hjælp.',
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
          'Sædceller lever op til fem dage, ægget et døgn. Derfor ligger vinduet før ægløsningen, og appens skøn må aldrig bruges som prævention.',
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
          'Reager på behovet, ikke på tonen. PMS forstærker en reel følelse; anerkendelse og praktisk hjælp får tonen til at forsvinde.',
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
          'Når det gule legeme dør, falder begge hormoner, serotonin følger med ned, og det giver irritabilitet, sårbarhed, sult og dårlig søvn.',
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
          'Timing er gratis hjælp. Samme samtale går oftere godt, når stressrobustheden er høj, og skævt i PMS-vinduet.',
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
          'Smerter, der slår hende ud, er ikke normale. Endometriose og andre tilstande kan behandles, men diagnosen tager år, fordi smerten normaliseres.',
      },
    ],
  },
};
