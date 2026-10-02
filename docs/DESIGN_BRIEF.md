# Cycle Tracker: hvad appen siger, og hvor

Dette dokument beskriver appens formål, budskaber og skærme for den, der skal komme med et nyt
designforslag. Det beskriver bevidst ikke, hvordan noget ser ud i dag. Alt herunder er indhold,
rækkefølge og handlinger, ikke form.

## Formål

Cycle Tracker er en iOS-app til par. Den ene har en menstruationscyklus. Den anden, partneren, vil
gerne forstå, hvad der sker i cyklussen, og vide helt konkret, hvad man kan gøre for at hjælpe.

Appens kerneløfte: **hver dag ét minut om, hvad der sker i dag, og én ting du kan gøre.**

Der er to roller, som får hver sin udgave af appen:

- **Partneren** (den, der "følger med"). Får et læringsprogram på 360 dage, ser hvor partneren er i
  cyklussen, og får hver dag én konkret handling.
- **Den, der har cyklussen**. Registrerer sin cyklus, ser sin egen fase og hvad hun kan gøre for
  sig selv, og kan se, hvad partneren lærer om hende.

Begge roller findes på hver sin telefon. De deler cyklusdata med hinanden via en QR-kode eller et
link. Der er ingen server, ingen konto og ingen analyse af brugerne; alt ligger på telefonen, med
frivillig backup til brugerens egen iCloud.

## Tone og faste budskaber

- Varm, konkret og uden løftede pegefingre. Aldrig klinisk, aldrig fnisende.
- Alt er skrevet til partneren som "du" og om den anden som "hun" eller ved fornavn, som indtastes
  ved opsætningen ("Anna har brug for ro i dag").
- Hvert stykke indhold slutter i noget, man kan gøre. Viden uden handling findes ikke i appen.
- Forudsigelser (næste menstruation, ægløsning, frugtbart vindue) er skøn og siges altid at være
  det. Appen gentager, at den ikke er prævention og ikke er lægehjælp.
- Privatliv nævnes eksplicit: "Alt gemmes kun på telefonen."

Cyklussens fire faser er appens grundsprog og går igen overalt:

| Fase          | Kort beskrivelse i appen                         | Partnerens budskab                       |
| ------------- | ------------------------------------------------ | ---------------------------------------- |
| Menstruation  | Blødning, lav energi, brug for ro                | "Hun har brug for ro i dag"              |
| Follikelfasen | Energien vender tilbage                          | "Hun har overskud i dag"                 |
| Ægløsning     | Toppen af energi og lyst                         | "Hun er på toppen i dag"                 |
| Lutealfasen   | Roligere, mere sårbar, PMS mod slutningen        | "Hun har brug for lidt ekstra tålmodighed" |

Ud over faserne deler appen cyklussen op i fire **cyklusuger** med hver sit fokus for partneren:

1. Aflastning derhjemme (menstruation, lav energi)
2. Planlæg og oplev (overskud, lyst til nyt)
3. Nærvær og fælles tid (ægløsning og tidlig lutealfase)
4. Tålmodighed og ro (PMS-ugen)

Hver uge har en kort begrundelse, tre konkrete handlinger, som partneren kan krydse af, og et
"jeres eget fokus", som parret selv kan skrive.

## Læringsprogrammet

Programmet varer et år og er delt i 12 måneder med hvert sit tema:

1. Cyklussen fra A til Z
2. Kommunikation og støtte
3. Menstruationsfasen
4. Follikelfasen
5. Ægløsning
6. Lutealfasen
7. PMS og PMDD
8. Smerte, træthed og hovedpine
9. Kost, træning og restitution
10. Fertilitet, prævention og graviditet
11. Når noget afviger
12. Livsfaser og årets opsamling

Hver måned indeholder:

- **30 daglige kort**: en overskrift, 80–150 ords indsigt (ét minuts læsning), én handling ("Det
  kan du gøre i dag") og kilder. Partneren kan markere handlingen som gjort. Eksempel: "Dag 1 er
  første blødningsdag" med handlingen "Spørg hende, hvornår den seneste menstruation startede, og
  registrér datoen i appen."
- **4 ugentlige artikler**: under fem minutters læsning, med et samtalespørgsmål til sidst ("Tal om
  det sammen"). Eksempel: "Hvornår i din cyklus har du det bedst, og hvornår er det sværest?"
- **1 månedlig opsamling**: "Det er værd at blive ved med" plus en lille quiz med
  handlingsorienterede spørgsmål og et resultat ("Du fik 5 af 7 rigtige").

Indhold låses op dag for dag, så man ikke kan læse forud, men altid kan læse tilbage. Ulæste ting
samles under "Indhent". Appen tæller kort læst, handlinger gjort og dage i træk.

Til opslag findes desuden et **faseopslagsværk** med en side pr. fase: "Det kan du gøre", "Hvad sker
der", "Sådan kan hun have det" og "Undgå" (for hende selv: "Det sker i kroppen", "Sådan kan du have
det", "Det kan du gøre for dig selv", "Det kan din partner gøre"). Og **symptomtips**: når hun
registrerer et symptom (fx kramper), får partneren én linje om hvorfor og én ting at gøre ("Find
varmepuden frem uden at spørge, og tag det praktiske i dag").

## Skærme

Appen har fire faner nederst: **I dag**, **Lær**, **Kalender**, **Indstillinger**. Man kan swipe
mellem dem. Derudover er der skærme, der åbner oven på fanerne.

### Opsætning (første gang appen åbnes)

Én sammenhængende gennemgang:

1. Velkomst: "Cycle Tracker hjælper en partner med at forstå, hvad der sker i cyklussen, og hvad
   man konkret kan gøre for at hjælpe. Alt gemmes kun på telefonen." Sprogvalg (dansk/engelsk).
2. "Hvem er du?": "Jeg har cyklussen" eller "Jeg er partneren", hver med én linje forklaring.
3. Navn: "Hvad hedder din partner?" eller "Hvad hedder du?".
4. "Hvornår startede den seneste menstruation?" med "Et cirka-bud er fint" og muligheden "Det ved jeg
   ikke endnu".
5. "Hvor lang er cyklussen typisk?" (28 dage almindeligt, 21–35 normalt) og "Hvor mange dage varer
   blødningen typisk?".
6. "Læringsprogrammet starter i dag. Du får ét kort hver dag i et år."
7. Ansvarsfraskrivelse og knappen "Kom i gang".

Findes der en backup i iCloud, tilbydes "Gendan og spring opsætning over" med en kort opsummering
af, hvad backuppen indeholder.

### I dag (forsiden)

Datoen som undertitel. Indholdet i rækkefølge for **partneren**:

1. **Fasen i dag**: hvilken fase hun er i, cyklusdag, det centrale budskab ("Anna har brug for ro i
   dag") og en linje om fasen. Dertil små fakta: "Næste menstruation om 12 dage", "Frugtbart vindue
   fra 14. okt.", "Ægløsning ca. 17. okt.", "PMS-vinduet er åbent", eller "Menstruationen er 2 dage
   forsinket". Tryk åbner faseopslaget.
2. **Dagens kort**: dag X af 360, kortets overskrift, begyndelsen af teksten, "Læs dagens kort", og
   handlingen "Det kan du gøre i dag" med knappen "Markér som gjort" / "Gjort".
3. **Cyklusugen**: "Cyklusuge 2 · dag 8–14", fokusoverskriften, én linje om hvorfor, "1 af 3
   gjort" for ugens handlinger, og hvor i cyklussens fire uger man er. Tryk går til kalenderen.
4. Hvis hun har registreret noget i dag: "Anna har registreret i dag", symptomerne, hvad det
   skyldes, og én ting at gøre.
5. **Det kan du gøre**: fasen og cyklusdagen, tre punkter fra fasens opslag, som kan krydses af
   (nulstilles ved ny cyklus), og "Alle 5 i faseopslaget". Tryk åbner faseopslaget.
6. **Ugens artikel**: overskrift og samtalespørgsmål. Tryk åbner artiklen.
7. Knappen "Registrér i dag" (partneren kan registrere på hendes vegne).
8. "Scan partnerens kode" og status: "Sidst synkroniseret for 2 timer siden" / "Ikke synkroniseret
   endnu".

For **hende** ser forsiden sådan ud:

1. Fasen i dag med budskabet til hende selv ("Du har brug for ro i dag") og samme fakta.
2. "Sådan kan du have det": tre punkter.
3. "Det kan du gøre for dig selv": tre punkter.
4. Cyklusugen ("Din partner har fokus på at aflaste dig derhjemme i denne uge").
5. Knappen "Registrér i dag" (den vigtigste handling for hende).
6. Hvis hun har registreret i dag: symptomerne og hvad de skyldes (ikke partnerens tip).
7. "Det lærer din partner i dag": dagens korts overskrift. Tryk åbner kortet, mærket "Skrevet til
   din partner".
8. "Del med partner" og status: "Sidst delt i går" / "Ikke delt endnu".

Uden cyklusdata viser forsiden i stedet "Ingen cyklusdata endnu" med forklaring og knappen
"Registrér menstruationsstart". Før programstart: "Programmet starter 1. okt." Efter et år: "Du har
gennemført hele årsprogrammet."

### Lær

Undertitel: "Dag 12 af 360 · måned 1". For partneren:

- Tre tal: kort læst, handlinger gjort, dage i træk.
- **I dag**: dagens kort (læst/ulæst), ugens artikel (med læsetid, fx "4 min"), månedens opsamling
  (eller "Låses op dag 30").
- **Indhent** ("3 ulæste") og **Arkiv og søgning** ("Alt du har låst op, søgbart").
- **Sådan hjælper jeg bedst**: en personlig oversigt pr. fase, bygget af hendes registreringer og
  de handlinger, partneren har gjort ("Hun registrerer oftest", humør, energi, "Det har du gjort").
- **Faserne**: de fire faseopslag med deres typiske dage.
- **Årsprogrammet**: de 12 måneder med tema og fokus, markeret som låst, i gang eller fuldført.

For hende: undertitlen "Din cyklus og din partners program", faserne, og "Din partners program"
med "I dag: [kortets overskrift]" og de 12 måneder.

Underskærme:

- **Dagens kort** (læsning): "Dagens kort · dag 12 af 360", overskrift, læsetid og månedens tema,
  selve teksten, "Det kan du gøre i dag" med gjort-markering, "I morgen: [næste kort]" når det er
  låst op, og kilder.
- **Ugens artikel**: overskrift, læsetid, "Et samtalespørgsmål til sidst", brødteksten i flere
  afsnit, samtalespørgsmålet under "Tal om det sammen", "Næste uge: …" og kilder.
- **Månedens opsamling**: "Det er værd at blive ved med" (punkter), quizzen ("Spørgsmål 3 af 7",
  "Rigtigt"/"Ikke helt", "Se resultat", "Du fik 5 af 7 rigtige", "Bedste resultat", "Tag quizzen
  igen").
- **Måned**: alle måneds kort, artikler og opsamling i rækkefølge, læst/ulæst/låst.
- **Arkiv**: søgefelt ("Søg i kort og artikler") og alt, der er låst op, mærket som dagligt kort,
  ugens artikel, opsamling eller fase.
- **Faseopslag**: fasens navn, typiske dage, og sektionerne nævnt ovenfor.
- **Sådan hjælper jeg bedst**: introduktionen "Oversigten bliver bedre for hver cyklus, der
  logges", og pr. fase: loggede dage, symptomer hun oftest registrerer, humør, energi, det
  partneren har gjort, og ét tip.

### Kalender

Undertitel: "Cyklusdag 11 · næste menstruation 27. okt."

- **Cyklusugen**: ugens nummer i kalenderen og i cyklussen med dagsinterval ("Uge 41 · Cyklusuge 2
  · dag 8–14"), fokusoverskrift, begrundelse, "Jeres fokus: …" hvis parret har skrevet ét, de tre
  handlinger (partneren kan krydse af i den aktuelle uge), og for andre uger "Kommer om 7 dage" /
  "Var dag 1–7". Man kan bladre mellem de fire uger. Hun ser i stedet "Din partner har fokus på …".
- Forklaring til kalenderen: menstruation, forventet menstruation, follikelfasen, frugtbart
  vindue, ægløsning, lutealfasen, PMS, logget.
- "Vis tidligere måneder".
- Måneder som datogitter, den aktuelle og to frem. Hver dag hører til en fase (menstruation,
  follikelfasen, frugtbart vindue, lutealfasen, PMS), og derudover markeres forventet
  menstruation, ægløsningsdagen og "logget". Tryk på en dag åbner registrering for den dag.

Uden data: "Registrér en menstruationsstart for at se faser i kalenderen."

### Registrér (åbner oven på kalender eller forside)

Titel "Registrér for onsdag d. 8. oktober". Sektioner:

- **Menstruation**: "Menstruationen starter denne dag", "Menstruationen slutter denne dag",
  status "Menstruation i gang (startet 5. okt.)", "Fjern menstruationsstart".
- **Blødning**: pletblødning, let, middel, kraftig.
- **Symptomer** (flere kan vælges): kramper, hovedpine, ondt i ryggen, ømme bryster, oppustet,
  træthed, kvalme, uren hud, trang til sødt/salt, dårlig søvn, lav lyst, høj lyst,
  humørsvingninger, uro/angst, irritabel, trist.
- **Humør**: rigtig godt, godt, okay, lidt nede, dårligt.
- **Energi**: høj, normal, lav.
- **Note**: "Noget der er værd at huske…".
- "Ryd dagens registrering". Alt gemmes løbende ("Gemt").

### Indstillinger

- **Profil**: rolle (Partner / Har cyklussen), navn, sprog, programstart.
- **Cyklus**: cykluslængde, blødningsdage, lutealfase, med noten "Bruges indtil der er logget nok
  cyklusser til at regne det ud."
- **Udseende**: system, lys, mørk.
- **Cyklusuger**: "Jeres eget fokus" for hver af de fire uger (fritekst).
- **Påmindelser**: dagens kort (med tidspunkt), daglig påmindelse om at registrere, "Menstruation
  om 2 dage", "PMS-vinduet starter", "Ny cyklusuge". Hvis notifikationer er slået fra i iOS, siges
  det.
- **Backup og deling**: iCloud-backup (til/fra, "Sidste backup i går"), "Gendan fra iCloud",
  "Eksportér data" (fil til Filer eller AirDrop), "Importér data", "Del med partner", "Scan
  partnerens kode", "Parret med Anna" / "Ikke parret endnu".
- **Om**: version, hvilken opdatering der kører, "Hent seneste opdatering", ansvarsfraskrivelse og
  privatlivstekst (citeret ovenfor).
- **Farezone**: "Slet alle data" med bekræftelse ("Profil, registreringer og læringsfremdrift
  slettes fra denne telefon. Det kan ikke fortrydes.").

### Del med partner

"Lad din partner scanne koden med Cycle Tracker, eller send linket med AirDrop eller Beskeder. Kun
cyklusdata deles, aldrig noter om dig selv fra appens indstillinger." En QR-kode, valget "Del alt"
/ "Del kun ændringer" ("Koden indeholder ændringer siden sidste deling"), "Send som link" og
"Kopiér link". Er der for meget data til en kode: "Send linket i stedet."

### Scan kode

"Peg kameraet mod QR-koden på din partners telefon." Kameraet, alternativet "Indsæt link i stedet",
og besked hvis kameraadgang mangler ("Åbn indstillinger").

### Importér fra partner

"Fra Anna" (eller "Fra en anden telefon"), en opsummering ("2 nye og 1 ændrede menstruationer, 5
nye registreringer", "Menstruationer fra 1. sep. til 8. okt."), kontakten "Dette er en backup fra
min egen telefon" (gendanner så også profil og fremdrift), knappen "Importér", og "Alt i koden er
allerede på denne telefon" når der intet nyt er.

### Fejlskærm

"Noget gik galt. Prøv igen. Hvis det bliver ved, kan du slette appens lokale data som sidste
udvej. Har du iCloud-backup, kan alt gendannes bagefter." Knapperne "Prøv igen" og "Del
fejlrapport".

## Uden for appen

- **Widget på hjemmeskærmen**: fasens navn, cyklusdag, hvor langt man er i cyklussen, og "Menstruation
  om 12 dage" / "Menstruation i morgen" / "2 dage forsinket". Uden data: "Åbn appen og registrér en
  menstruationsstart".
- **Notifikationer**: "Dagens kort er klar: Ét minut om, hvad der sker i dag, og én ting du kan
  gøre." "Hvordan har du det i dag?" (til hende). "Menstruation forventes om 2 dage: Godt tidspunkt
  at have varme, ro og lidt ekstra overskud klar." "PMS-vinduet begynder: De næste dage kan være
  mere sårbare. Sænk forventningerne, øg omsorgen." "Ny cyklusuge: Cyklusuge 3: Nærvær og fælles
  tid."

## Det, et nyt design skal kunne

- Gøre det klart på ét blik, hvilken fase hun er i, og hvad partneren skal gøre i dag.
- Bære ét minuts læsning hver dag og fem minutters læsning hver uge, så det er behageligt at læse.
- Lade to forskellige mennesker (partneren og hende) føle, at appen er skrevet til dem.
- Rumme dansk og engelsk, lys og mørk tilstand, og iOS' egne tekststørrelser.
- Holde forudsigelser tydeligt adskilt fra det, der er registreret.
