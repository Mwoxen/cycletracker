# Indholdsguide: sådan skrives en måned

Appens mål: give en partner (Tracker) indsigt i, hvad hans partner går igennem i sin cyklus, og helt
konkret hvad han kan gøre for at hjælpe hende. Hvert eneste kort skal ende i noget, partneren kan
_gøre_. Brugeren (hende) ser det samme indhold fra sin side, så teksten må aldrig tale ned til hende.

## Filer

- Dansk: `src/content/da/month-NN.ts`, engelsk: `src/content/en/month-NN.ts` (NN = 02..12).
- Reference for stil, struktur og længde: `src/content/da/month-01.ts` og `src/content/en/month-01.ts`.
- Typer: `src/content/types.ts`. Brug `dailyId(M, day)`, `weeklyId(M, week)`, `wrapId(M)`.
- Eksportnavn: `export const monthNN: MonthContent` (fx `month07`).
- Registrering i `src/content/index.ts` sker centralt; rør ikke den fil.

## Struktur pr. måned (håndhæves af `src/content/content.test.ts`)

- `theme` (kort titel) og `focus` (én sætning: partnerens fokus i måneden).
- **30 daglige kort**, day 1..30. Hvert kort: `title`, `insight` (60-170 ord, sigt efter 90-130),
  `action` (mindst 6 ord, én konkret handling i dag), `phaseTags` (0-2 faser, hvor kortet passer
  bedst; tom = enhver fase), `sources` (valgfri, 1-2 kilder).
- **4 ugentlige artikler**, week 1..4: `title`, `body` (5-8 afsnit, 350-1000 ord i alt, under
  5 minutters læsning), `conversationQuestion` (slutter med "?", et spørgsmål de to kan tale om
  sammen), `sources`.
- **1 opsamling** (`wrap`): `title`, `summary` (2-3 afsnit), `keepDoing` (3-6 handlinger, der er
  værd at holde fast i), `quiz` (5-7 spørgsmål, 3-4 svarmuligheder, `correctIndex`, `explanation`).
  Quizsvar skal være handlingsorienterede: "hvad ville hjælpe mest i denne situation?", ikke kun fakta.

## Sprogparitet (håndhæves)

Dansk og engelsk skal have samme antal kort, samme `phaseTags` pr. kort (samme rækkefølge), samme
antal quizspørgsmål, samme antal svarmuligheder og samme `correctIndex`. Skriv dansk først,
oversæt derefter til naturligt engelsk (ikke ord-for-ord; samme budskab og handling).

## Tone og indhold

Appen skal både lære partneren noget og få ham til at grine. Humoren er det, der adskiller den fra
andre cyklusapps, men den er aldrig vigtigere end det, han skal lære. Hver tekst har stadig den
samme viden og den samme handling som før; humoren ligger i, hvordan det siges.

### Stemmen: køkkenstemmen

Partnerens tekster er skrevet i én stemme: en ven, der står ved komfuret og snakker, mens han
laver mad. Varm, snakkesalig, bramfri, aldrig kold. Han har været der før, han siger tingene
ligeud, og han ender altid et konkret sted. Det er en stemme, ikke en person: nævn aldrig
rigtige mennesker, kokke eller tv-programmer, hverken i teksterne eller i kode og docs.

Grebene, der gør stemmen genkendelig:

1. **Tiltale og tempo.** "Nu skal du høre", "ved du hvad", "hør her", "min ven". Korte sætninger
   blandet med en lang, der snakker sig frem til pointen. Afsnittet ender i en punchline eller i
   det, han skal gøre. Aldrig mere end ét "nu skal du høre" pr. kort.
2. **Køkkenet som billedbank.** Kroppen forklares med mad og madlavning: en muskel, der knokler
   som en langtidsstegt bov, der ikke vil slippe benet; progesteron, der skruer ned for blusset;
   ægløsning som jordbær i juni; "det er ikke en gryderet, der er ikke noget at vinde ved at
   vente". Ét eller to billeder pr. kort, ikke en hel menu. Billedet skal forklare, ikke pynte.
3. **Hyggebandeord, doseret.** "Sgu", "for søren", "for pokker" må gerne være der, "for fanden"
   og "pisse-" højst én gang pr. kort og aldrig i overskrifter, handlinger til hende eller i de
   alvorlige måneder. Aldrig "fuck", "kraftedeme" eller kønsord. Bandeordene er varme, ikke hårde.
4. **Grin ad ham, aldrig ad hende.** Han er den, der lagde sig på sofaen med en splint i fingeren,
   der købte en pizzaovn, der står og kigger ind ad vinduet, når køkkenet er lukket. Hun er
   aldrig pointen i vittigheden, og hendes krop, humør, vægt, lyst eller intelligens er aldrig
   materialet. Hun læser med fra sin side ("Det lærer din partner i dag"), så alt skal kunne
   læses højt for hende, uden at nogen krymper sig.
5. **Sex og krop må nævnes ligeud.** "Lyst til sex", "brysterne er ømme", "køkkenet er lukket".
   Direkte, aldrig klamt, aldrig som noget han har krav på. Vitsen er altid hans utålmodighed,
   aldrig hendes nej.
6. **Alvor, hvor det er alvor.** Smerte, PMDD, endometriose, PCOS, fertilitet, graviditetstab og
   "når noget afviger" (måned 7, 8, 10, 11 især): stemmen bliver stille og nærværende, som når
   man sætter sig ned ved bordet. Ingen bandeord, ingen madbilleder om det, hun går igennem.
   Humoren må kun sidde i rammen (hans kejtethed), aldrig i det, hun oplever.
7. **Humoren må ikke æde indholdet.** Insight-teksten skal stadig forklare det samme (hormoner,
   tal, hvad der sker), og handlingen skal stadig være den samme konkrete ting. En joke, der
   erstatter en forklaring, er en dårlig joke. Fakta og kilder røres ikke.
8. **Ingen klichéer.** Ikke "hormonelle kvinder", ikke "hun er på sin", ikke "farlig uge", ikke
   chokolade-jokes, ingen emojis, ingen udråbstegn i bunker. Vittigheden kommer af situationen.
9. **Handlingen ender i køkkenet, hvis den kan.** Mange af hans bedste handlinger er praktiske:
   lav mad, læg varmepuden klar som en kold øl til dig selv, kør ned og køb den nu. Men kun hvor
   det passer; en samtale er stadig en samtale.
10. **Engelsk har samme stemme, egne udtryk.** Samme greb, samme vitser, samme varme. Danske
    udtryk, der ikke kan oversættes, erstattes af et engelsk, der gør det samme ("for søren" →
    "for crying out loud", "sgu" → "honestly" eller slet ingenting). Aldrig oversat ord for ord.

### Eksempler på stemmen

Forsiden, heroens overskrift:
"Anna har brug for ro. Du har brug for at holde mund og lave kaffe."

Dag 1, "Dag 1 er første blødningsdag":
"Dag 1 er første dag med rigtig blødning. Ikke dagen hun nævnte det, og ikke dagen du opdagede,
at tonen i huset havde ændret sig. Alt i appen regnes fra den dato. Skriver du forkert, bliver
appen lige så sikker i sin sag, som du var, da du sagde, I sagtens kunne nå færgen. 28 dage er
gennemsnit, 21 til 35 er normalt, og de færreste rammer det samme tal to gange i træk. Du behøver
ikke forstå kvindekroppen i dag. Du skal få én dato rigtig. Du kan din Netflix-kode udenad, så
det her kan du godt."
Handling: "Spørg, hvornår den sidste menstruation startede. Bare spørg. Du har stillet dummere
spørgsmål til en kassemedarbejder. Og skriv datoen ind."

"Kramper: varme virker":
"Nu skal du høre. Inde i hende sidder der en muskel på størrelse med en lille pære, og den står
og knokler i tre dage for at skubbe noget ud, der ikke vil samarbejde. Det er prostaglandiner,
der sætter den i gang, og jo mere af det, jo mere ligner det en langtidsstegt bov, der ikke vil
slippe benet. Du lagde dig ned med en splint i fingeren i sidste uge. Det, der virker, er sgu
varme. Ikke en samtale, ikke en teori, ikke 'har du prøvet at trække vejret dybt'. Varme på
maven eller lænden, så musklen slapper af, ligesom et stykke smør på noget, der har haft det
hårdt. Ibuprofen skal ind ved de første tegn, ikke når hun ligger og bider i puden. Der er ikke
noget at vinde ved at vente, det er ikke en gryderet."
Handling: "Find varmepuden, før hun spørger, og læg den klar, som du ville lægge en kold øl klar
til dig selv. Har I ingen, så kør ned og køb en nu. Det er årets bedste investering, og du har
købt en pizzaovn."

"Lyst gennem cyklussen":
"Omkring ægløsning er der østrogen og lidt testosteron i gryden, og mange har simpelthen mere
lyst til sex. Det er jordbær i juni. I lutealfasen kommer progesteron og skruer ned for blusset,
og i PMS-dagene og de første blødningsdage er køkkenet lukket. Du kan stå og kigge ind ad
vinduet, så længe du vil, der kommer ikke mad. Nogle har det stik modsat, og det er også fint,
folk er forskellige, ligesom med koriander. Men sæt ikke en alarm på ægløsningen. Hun kan høre
dig åbne appen. Et nej på dag 26 handler ikke om dig. Det er progesteron, og progesteron har
aldrig smagt noget, du har lavet."

Lutealfasen, "Undgå":
"Hvis sætningen starter med 'du ser', så stopper du. Du ser træt ud, du ser sur ud. Det er den
samme sætning, og slutningen på den findes ikke."

Alvorlig måned (PMDD), samme stemme, nede i tempo:
"Det her er ikke PMS med volumen skruet op. PMDD er en tilstand, hvor de sidste dage før
menstruationen kan være rigtig svære at komme igennem, og den fortjener en læge, ikke et godt
råd. Det, du kan, er at være den, der husker datoerne, så hun ikke skal forklare det forfra hver
gang."

Notifikation: "Dagens kort er klar. Ét minut. Du kan godt."

### Det faste

- Skriv til partneren i "du", om hende i "hun/hende". Varm, konkret, uden at moralisere.
- Evidensbaseret på niveau med NHS, ACOG, Sundhed.dk, NICE. Ingen diagnoser, ingen "kur".
  Når noget kan være tegn på sygdom: sig "det fortjener en læge", ikke hvad det er.
- Forudsigelser er skøn. Skriv aldrig, at appen kan bruges som prævention.
- Ingen kropskommentarer. PMS forstærker følelser, den opfinder dem ikke.
- Handlingen ("Det kan du gøre") skal kunne gøres samme dag, uden penge eller planlægning:
  sig en sætning, gør en praktisk ting, læg mærke til noget, spørg om noget, flyt en aftale.
- Fordel kortene, så måneden dækker alle fire faser med `phaseTags`, og så ca. en tredjedel af
  kortene er uden tag (generelle).
- Kilder: `{ label: 'NHS: Periods', url: 'https://www.nhs.uk/conditions/periods/' }`. Brug kun
  URL'er, du er sikker på findes (NHS conditions-sider, ACOG FAQ, Sundhed.dk patienthåndbogen,
  NICE CKS). Udelad hellere URL end at gætte.
- Hendes egne tekster (`selfCare`, symptomtippenes `what`, hendes UI, samtalespørgsmålene i
  ugens artikel) er ikke humoristiske. De er varme og saglige som før.

## Månedstemaer

| Md  | Tema                                 | Partner-fokus                                                                              |
| --- | ------------------------------------ | ------------------------------------------------------------------------------------------ |
| 2   | Kommunikation og støtte              | Sprog, timing, at spørge i stedet for at gætte, konfliktmønstre pr. fase                   |
| 3   | Menstruationsfasen                   | Smerte, træthed, blødning: praktisk hjælp, varme, ro, hvad man ikke skal sige              |
| 4   | Follikelfasen                        | Energi og overskud stiger: planlæg det store sammen, brug overskuddet klogt                |
| 5   | Ægløsning                            | Tegn, nærhed, det frugtbare vindue: viden uden pres                                        |
| 6   | Lutealfasen                          | Progesteron, søvn, appetit: sænk forventninger, øg omsorg                                  |
| 7   | PMS og PMDD                          | Humørsvingninger og irritabilitet: hvordan du ikke tager det personligt og faktisk hjælper |
| 8   | Smerte, træthed og hovedpine         | Genkend mønstre i hendes log og reager før hun beder om det                                |
| 9   | Kost, træning og restitution         | Hvad I kan lave og spise i hver fase                                                       |
| 10  | Fertilitet, prævention og graviditet | Fælles ansvar, hvad hun bærer, hvad du kan tage                                            |
| 11  | Når noget afviger                    | Endometriose, PCOS, uregelmæssighed: tegn, hvornår I bør søge læge, hvordan du bakker op   |
| 12  | Livsfaser og årets opsamling         | Pubertet, postpartum, perimenopause, og en personlig "sådan hjælper jeg dig bedst"-plan    |

Måned 1 har allerede dækket grundmodellen (faser, hormoner, PMS som forstærker, timing af
samtaler). Senere måneder må gerne henvise til det, men skal gå i dybden og tilføje nyt, ikke
gentage.

## Tjek før aflevering

```bash
npx tsc --noEmit
npx jest src/content
npx prettier --write src/content
```
