# Handoff: Cycle Tracker – retning 1c "Intim"

## Overview
Cycle Tracker er en iOS-app til par: partneren får hver dag ét minut om, hvad der sker i cyklussen, og én ting at gøre. Denne pakke beskriver det valgte visuelle udtryk, **1c "Intim"**, som skal være appens **eneste udtryk**, med **lys og mørk tilstand** (følger systemet + manuelt valg i Indstillinger). Indhold, roller, skærme og copy er beskrevet i `DESIGN_BRIEF.md` – denne README beskriver form og opførsel.

## About the Design Files
Filerne her er **designreferencer lavet i HTML** – prototyper der viser udseende og opførsel, ikke produktionskode. Opgaven er at **genskabe designet i SwiftUI** (iOS 17+) med appens eksisterende mønstre. Åbn `Cycle Tracker 1c.dc.html` i en browser (kræver `support.js` i samme mappe) for at klikke rundt. Sprog og lys/mørk kan skiftes øverst på siden.

## Fidelity
**High-fidelity** for: I dag (partner), Dagens kort, Ugens artikel, Kalender, Registrér. Farver, typografi, afstande og animationer er endelige.
**Low-fidelity / skitse** for: Lær og Indstillinger (struktur ok, detaljer ikke færdige).
**Ikke designet endnu** (brug briefen + tokens herunder): hendes udgave af forsiden, Opsætning, Del med partner, Scan kode, Importér, Faseopslag, Månedens opsamling/quiz, Arkiv, Fejlskærm, Widget.

---

## Design Tokens

### Farver
| Token | Lys | Mørk | Brug |
|---|---|---|---|
| `bg` | `#EEE8EB` | `#0D0A0E` | Skærmbaggrund |
| `surface` | `#F8F4F6` | `#161218` | Kort, ark (Registrér) |
| `surface2` | `#E5DDE1` | `#211B24` | Indlejrede felter, segmented control-baggrund |
| `text` | `#1D161B` | `#F2EAEE` | Primær tekst |
| `text2` | `#665A61` | `#A3969E` | Sekundær tekst, labels |
| `hair` | `rgba(29,22,27,.12)` | `rgba(255,255,255,.09)` | Skillelinjer, kortkanter, chip-kanter |
| `phase.men` | `#B04D59` | `#EC8A92` | Menstruation |
| `phase.fol` | `#218373` | `#6BC4B3` | Follikelfasen |
| `phase.ovu` | `#AA732B` | `#E7B369` | Ægløsning / frugtbart vindue |
| `phase.lut` | `#725CA9` | `#AA95E8` | Lutealfasen / PMS |
| `onAccent` | `#FFFFFF` | `#140F13` | Tekst oven på en fasefarve |

(Kildeværdier i oklch: lys `L .53–.60, C .09–.13`, mørk `L .72–.80, C .09–.12`; hue men 15, fol 180, ovu 70–75, lut 295.)

**`accent`** = fasefarven for dagens fase. Hele UI'et "tones" af den aktuelle fase.
**`soft`** = `accent` blandet 20 % ind i `surface` (oklch-mix). Bruges til handlingsbokse, badges, "Gjort"-tilstand. SwiftUI: `accent.mix(with: surface, by: 0.8)` (iOS 18) eller forudberegn.
**`tint`** = fasefarve med 26 % opacitet. Bruges til frugtbart vindue i kalenderen.

### Typografi
Font: **Manrope** (Google Fonts, vægt 300–800). Bundle som custom font, og brug `.custom("Manrope", size:, relativeTo:)` så Dynamic Type virker.
| Rolle | Str. | Vægt | Linjehøjde | Spacing |
|---|---|---|---|---|
| Fasebudskab (hero) | 31 | 300 Light | 1.15 | −0.015em |
| Fasenavn i ring | 27 | 300 | – | – |
| Skærmtitel (I dag, Kalender …) | 28 | 300 | 1.05 | −0.01em |
| Læse-overskrift (kort/artikel) | 31–32 | 400 | 1.08–1.1 | −0.02em |
| Korttitel | 21 | 400 | 1.2 | −0.01em |
| Samtalespørgsmål (artikel) | 23 | 400 | 1.25 | −0.01em |
| Brødtekst, læsning | 18 | 400 | 1.62 | – |
| Brødtekst, UI | 15–16 | 400 | 1.4–1.55 | – |
| Sektionslabel | 11 | 600 | – | 0.16em, VERSALER, `text2` |
| Lille label i boks ("Det kan du gøre i dag") | 12 | 700 | – | 0.07em, VERSALER, `accent` |
| Tab-label | 11 | 600 | – | 0.14em, VERSALER |
| Fakta-tag ("≈ Skøn") | 10 | 600 | – | 0.14em, VERSALER |

Generelt: lette, store ord til budskaber; ingen fed tekst i overskrifter.

### Afstand og form
- Sidemargin: **16 pt** for kort, **24 pt** for hero og læseskærme.
- Afstand mellem sektioner: **30 pt**; label → kort: **10 pt**.
- Kortpadding: **18 pt**. Rækker i lister: **12–13 pt** vertikal.
- Hjørneradius: kort og bokse **18**, chips og knapper **kapsel (999)**, kalenderceller **12**, ark top **28**.
- Kort: `surface` + 1 pt `hair`-kant, **ingen skygge**.
- Knap, primær: transparent, 1.5 pt kant + tekst i `accent`, højde 54, kapsel, tekst 17/700.
- Knap, sekundær: 1 pt `hair`-kant, `text`, højde 50.

---

## Nøglekomponent: Cyklusringen
Placeret centreret øverst på I dag, **280×280 pt**.
- Cirklen deles i **L** segmenter (L = cykluslængde, standard 28). Dag 1 starter kl. 12 og går med uret.
- Hvert segment: bue med strøgbredde **4 pt**, mellemrum **1.1°**, radius = 280/2 − 2 − 10.
- Farve = fasefarven for den cyklusdag. **Fortid og i dag: opacitet 1. Fremtid (forudsigelse): opacitet 0.22.**
- Faser (L=28, P=blødningsdage=5, ov=L−14): men 1–P · fol P+1…ov−2 · ovu ov−1…ov+1 · lut ov+2…L.
- **Frugtbart vindue**: indvendig stiplet bue (2 pt, dash 2/4, rund ende) fra dag ov−5 til ov+1, 7 pt inden for ringen, farve `phase.ovu`.
- **Ægløsning**: prik r=4 i `phase.ovu` på samme indre radius, midt på dag ov.
- **Loggede dage**: prik r=2.4 i `text` uden for ringen (ringradius + 8).
- **I dag-knop**: cirkel r=8, fyld `bg`, kant 2 pt `accent`.
- **Glød**: bag ringen en radial gradient i `accent` (0 % → transparent ved 68 %), inset 14 %, blur 26, der "ånder" (scale .9→1.08, opacitet .4→.8, 5 s ease-in-out, uendelig).
- Midt i ringen: "CYKLUSDAG 2" (11/600, 0.2em, `text2`) og fasenavnet (27/300, `accent`).
- Indgang: segmenterne fader ind ét ad gangen (fra opacity 0, scale .72, rotation −24°; 550 ms, delay i×20 ms, easing cubic-bezier(.2,.8,.2,1)). Derefter popper knoppen (scale 0→1.3→1, 600 ms). Tegnes igen når cyklusdag/længde ændres.
- SwiftUI: `Canvas` eller `Shape` per segment med `trim`; glød som `Circle().fill(RadialGradient).blur(26)`.

**Regel: forudsigelser og registreret data skal altid kunne skelnes.** I ringen via opacitet, i kalenderen via stiplet vs. udfyldt, i fakta via "≈ Skøn" vs. "Registreret".

---

## Screens / Views

### 1. I dag (partner)
Scroll-view, top-inset under status bar. Rækkefølge:
1. **Header** (padding 10/20/16): titel "I dag" (28/300), dato under (15, `text2`), fx "Mandag 5. oktober".
2. **Hero** (centreret, padding 0 24): ring (se ovenfor) → budskab "Anna har brug for ro i dag" (31/300, balanceret linjeskift, top 6) → fasens linje (15/1.55, `text2`, max 300 bred).
3. **Fakta** (fuld bredde i hero): op til 3 rækker, hver med 1 pt `hair`-topkant, padding 12/2: tekst til venstre (15), tag til højre ("≈ SKØN" eller "REGISTRERET", 10/600). Derefter en linje med "Forudsigelser er skøn. Appen er ikke prævention og ikke lægehjælp." (12, `text2`).
   Logik: menstruation i gang → "Menstruation startet 4. okt." (registreret); "Næste menstruation om X dage" / "Menstruation i morgen" / "Menstruationen er X dage forsinket"; "Frugtbart vindue fra …" (hvis før ov+2); "Ægløsning ca. …" (hvis ≤ ov); "PMS-vinduet er åbent" (dag L−6…L).
4. **Dagens kort**: label "DAGENS KORT · DAG 12 AF 360". Kort: titel (21) · uddrag (15, `text2`) · "Læs dagens kort →" (15/700, `accent`) — hele toppen åbner læsning. Skillelinje. "DET KAN DU GØRE I DAG" (label, `accent`) · handlingen (16/1.42) · knap 48 høj: "Markér som gjort" (primær) ↔ "✓ Gjort" (fyld `soft`, tekst `accent`).
5. **Cyklusuge-række** (kort, padding 15/18): cirkel-badge 42 (fyld `soft`, tal 18/800 `accent`) · "Cyklusuge 1" (13, `text2`) / "Aflastning derhjemme" (17/600) · chevron. Tryk → Kalender.
6. **"Anna har registreret i dag"** (kun hvis der findes en registrering i dag): chips (13/600, fyld `soft`, tekst `accent`) for blødning, symptomer, humør, energi · "**Hvorfor:** …" · "**Det kan du gøre:** …" (fra symptomtips; første symptom med tip vinder).
7. **Det kan du gøre**: kort med 3 nummererede rækker (badge 24 rund, `soft`/`accent`, tekst 16).
8. **Ugens artikel**: label "UGENS ARTIKEL · 4 MIN". Kort: titel (20) + indlejret boks (`surface2`, radius 12, padding 14/16): "TAL OM DET SAMMEN" + spørgsmålet i kursiv med anførselstegn. Tryk → artikel.
9. **Handlinger**: "Registrér i dag" (primær, 54) · "Scan partnerens kode" (sekundær, 50) · status med 7 pt prik i `phase.fol` "Sidst synkroniseret for 2 timer siden" (13, `text2`) · "Alt gemmes kun på telefonen." (12).

Sektionerne fader op ved indgang (translateY 16→0, 500–550 ms, forskudt 60 ms).

### 2. Dagens kort (fuld skærm, push fra højre)
Sticky top med "‹ Tilbage" (17/600, `accent`). Indhold padding 6/24/60:
"DAGENS KORT · DAG 12 AF 360" (12/700, `accent`) → titel (31/400) → "1 min · Cyklussen fra A til Z" (14, `text2`) → to afsnit (18/1.62) → handlingsboks (`soft`, radius 18, padding 18: label, handling 18/600, knap 50 – "Gjort"-tilstand fyld `surface`) → række "I morgen: [titel]" + "Låses op i morgen" mellem to hair-linjer → "KILDER" + liste (14, `text2`). Åbning markerer kortet som læst.

### 3. Ugens artikel (fuld skærm, push)
Som kortet: "UGENS ARTIKEL" → titel (32) → "4 min · Et samtalespørgsmål til sidst" → 4 afsnit (18/1.62, 18 mellem) → boks "TAL OM DET SAMMEN" med spørgsmål (23/400) → "Næste uge: …" → kilder.

### 4. Kalender
Header: "Kalender" + "Cyklusdag 2 · næste menstruation 1. nov.".
1. **Cyklusuge-kort**: "Uge 41 · Cyklusuge 1 · dag 1–7" (13, `text2`) + to runde 32-knapper ‹ › (opacitet .3 når deaktiveret) · titel (23) · begrundelse (15, `text2`) · for andre uger: "Kommer om X dage" / "Var dag a–b" (13/700, `accent`) · 3 handlinger med runde 24-checkbokse (kant 2 pt `text2`; afkrydset: fyld `accent`, ✓ i `onAccent`, tekst gennemstreget `text2`). Kun indeværende uge kan krydses af. Prikker nederst: aktiv 18×6 `text`, øvrige 6×6 `hair`.
2. **Forklaring** (2 kolonner, 13, `text2`), 20×20 swatches radius 7: Menstruation (fyld `men`) · Forventet menstruation (1.5 pt stiplet `men`) · Frugtbart vindue (`tint ovu`) · Ægløsning (`tint ovu` + stiplet `ovu`) · PMS-vindue (3 pt bjælke `lut` under) · Logget (4 pt prik `text`).
3. "Vis tidligere måneder" / "Skjul …" (15/600, `accent`).
4. **Månedsgitre** (aktuel + 2 frem): titel "Oktober 2026" (19/400), ugedage M T O T F L S (11/600), 7 kolonner gap 4, celler 44 høje radius 12, tal 15/500. I dag: 800 + 2 pt ring i `text`. Registreret menstruation: fyld `men`, tekst `onAccent`. Forventet: stiplet kant. Frugtbart: tint; ægløsning: tint + stiplet. PMS: bjælke 3 pt nederst. Logget: prik øverst. Tryk på celle → Registrér for den dag (scale .9 ved tryk).

### 5. Registrér (sheet)
Dæmpning `rgba(0,0,0,.4)`, ark fra bunden (top 50 pt, `surface`, radius 28, slide op 450 ms cubic-bezier(.2,.9,.2,1)). Sticky header: grabber 36×5 · "Registrér for mandag d. 5. oktober" (21) · "✓ Gemt" (13/600, `phase.fol`, vises når dagen har data) · "Færdig" (17/700, `accent`).
Sektioner (label 13/700 versaler `text2`, 24 mellem):
- **Menstruation**: status "Menstruation i gang (startet 4. okt.)" · to fuldbredde-knapper (radius 14) "Menstruationen starter/slutter denne dag" · "Fjern menstruationsstart" (tekst `men`) når relevant.
- **Blødning**: 4-kolonne gitter.
- **Symptomer**: kapsel-chips (14/600, padding 9/13, ingen linjeskift), 16 stk., flere kan vælges.
- **Humør**: 5 chips, ét valg. **Energi**: 3-kolonne gitter.
- **Note**: tekstfelt 3 linjer, radius 14, `hair`-kant.
- "Ryd dagens registrering" (tekst `men`).
Chip valgt: fyld `accent`, tekst `onAccent`. Ikke valgt: transparent, `hair`-kant. Tryk: scale .94. Alt gemmes løbende; at sætte "Menstruationen starter" på en dag ≤ i dag flytter cyklusstart og genberegner alt.

### 6. Tab bar
Ingen ikoner. Fire labels (I DAG · LÆR · KALENDER · INDSTILLINGER, 11/600, 0.14em) fordelt jævnt; aktiv `text` med 5 pt prik i `accent` under, inaktiv `text2`. Baggrund: gradient fra transparent til `bg` (45 %), højde 92. Swipe mellem faner (jf. brief).
Overvej `TabView` med custom tab bar for at matche.

### 7. Lær og Indstillinger (skitse)
Lær: 3 tal-kort, "I dag"-liste (kort/artikel/opsamling med læst-status), Indhent/Arkiv, 4 fasekort (prik i fasefarve + typiske dage), årsprogrammets 12 måneder. Indstillinger: grupperede kort (Profil, Cyklus), segmented control for Sprog og Udseende (Lys/Mørk; i appen også "System"), privatlivstekst. Brug samme kort- og label-stil.

---

## Interactions & Behavior
- Push-skærme (kort, artikel): slide fra højre, 420 ms, cubic-bezier(.2,.85,.2,1). Native `NavigationStack` er fint.
- Sheet: native `.sheet` med `.presentationDetents([.large])`, `surface` baggrund.
- "Markér som gjort": skifter til "✓ Gjort" (bg/farve-transition 300 ms) + lille konfetti-burst (12 prikker/firkanter i de fire fasefarver, flyver 90–130 pt ud og fader på 800 ms). Haptic `.success`.
- Tryk-feedback: kort scale .98, knapper .97, chips .94.
- Fanebyt: fade 350 ms.
- Respektér **Reduce Motion**: slå segment-indgang, glød-ånding og konfetti fra.

## State Management
- `role`, `partnerName`, `language (da|en)`, `appearance (system|light|dark)`
- `cycleLength` (standard 28), `bleedDays` (5), `periodStarts: [Date]`
- `logs: [Date: DayLog]` – `DayLog { bleed?, symptoms: Set, mood?, energy?, note, periodStart, periodEnd }`
- Afledt: cyklusdag, fase, cyklusuge (ceil(dag/7), max 4), forudsigelser.
- Program: `programStart`, `cardsRead`, `actionsDone`, `weekActionChecks [week-index: Bool]`, `streak`.
- Alt lokalt (SwiftData/Core Data), valgfri iCloud-backup. Ingen server.

## Assets
Ingen billeder eller ikoner. Fonten Manrope (SIL Open Font License) skal bundles.

## Files
- `Cycle Tracker 1c.dc.html` – klikbar reference af retning 1c (åbn i browser; `support.js` skal ligge ved siden af). Filen indeholder også kode til de fravalgte retninger 1a/1b; se kun bort fra dem.
- `support.js` – runtime til HTML-referencen.
- `DESIGN_BRIEF.md` – indhold, skærme, copy og tone (dansk).
- Al copy på dansk og engelsk ligger i `Cycle Tracker 1c.dc.html` under konstanterne `T`, `PHASES`, `WEEKS`, `TIPS`, `CARD`, `ART` (kort- og artikeltekster er eksempeltekst).
