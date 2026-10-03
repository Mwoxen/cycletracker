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

### Humorens regler

1. **Grin ad ham, aldrig ad hende.** Han er den, der står med varmepuden og ser forvirret ud,
   som siger "skal jeg lave mad?" i stedet for at lave mad, som tror en cyklus er 28 dage, fordi
   nogen sagde det i 7. klasse. Hun er aldrig pointen i vittigheden. Hun læser med fra sin side
   ("Det lærer din partner i dag"), så alt skal kunne læses højt for hende uden at nogen krymper sig.
2. **Tør og direkte, ikke fjollet.** Korte sætninger, konkrete billeder, en punchline i
   slutningen af et afsnit. Ingen emojis, ingen udråbstegn i bunker, ingen ordspil for ordspillets
   skyld. Tænk en ven, der har været der før, og som siger tingene ligeud.
3. **Må gerne være lidt grov om ham.** "Hold mund og lav kaffe", "din bedste ven i dag er en
   stikkontakt", "gå ud og sig det til en væg". Ikke bandeord i hver sætning, og aldrig om hendes
   krop, humør, vægt, lyst eller intelligens.
4. **Alvor, hvor det er alvor.** Smerte, PMDD, endometriose, PCOS, fertilitet, graviditetstab og
   "når noget afviger" (måned 7, 8, 10, 11 især): her er tonen varm og rolig. Humoren må kun sidde
   i rammen (hans forvirring, hans kejtethed), aldrig i det, hun går igennem.
5. **Humoren må ikke æde indholdet.** Insight-teksten skal stadig forklare det samme (hormoner,
   tal, hvad der sker), og handlingen skal stadig være den samme konkrete ting. En joke, der
   erstatter en forklaring, er en dårlig joke.
6. **Ingen klichéer.** Ikke "hormonelle kvinder", ikke "hun er på sin", ikke "farlig uge",
   ikke chokolade-jokes. Vittigheden skal komme af situationen, ikke af en fordom.

### Eksempler på tonen

Forsiden, fasekortets overskrift:
"Anna har brug for ro. Du har brug for at holde mund og lave kaffe."

Dag 1, "Dag 1 er første blødningsdag":
"Dag 1 er den første dag med rigtig blødning. Ikke dagen hun nævnte det, ikke dagen du lagde mærke
til det, og ikke dagen det stoppede. Alt andet i appen regnes ud fra den dato, så hvis du gætter,
gætter appen også. 28 dage er gennemsnittet, men 21 til 35 er normalt, og de færreste rammer det
samme tal to gange. Din opgave i dag er ikke at forstå kvindekroppen. Det er at få én dato rigtig."
Handling: "Spørg hende, hvornår den sidste menstruation startede. Ja, bare spørg. Og skriv det ind."

Faseopslag, menstruation, "Det kan du gøre":
"Tag det praktiske uden at spørge. 'Skal jeg lave mad?' er ikke hjælp, det er en opgave mere til
hende: at svare dig."
"Varmepude, te, tæppe. Varme virker på kramper, og det kræver nul samtale. Din bedste ven i dag
er en stikkontakt."

Lutealfasen, "Undgå":
"Kommentér ikke på hendes humør. Hvis du får lyst til at sige 'er du i dårligt humør?', så gå ud
af rummet og sig det til en væg. Væggen svarer det samme, som hun ville, bare uden konsekvenser."

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
- Hendes egne tekster (`selfCare`, symptomtippenes `what`, hendes UI) er ikke humoristiske. De
  er varme og saglige som før.

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
