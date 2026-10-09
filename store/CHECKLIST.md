# App Store: tjekliste til udgivelse

Alt herunder gøres i App Store Connect (https://appstoreconnect.apple.com). Teksterne ligger klar i
`store/metadata/da-DK` og `store/metadata/en-GB`; kopiér dem ind. Regn med 30-45 minutter plus Apples
review (typisk 1-3 dage).

## Før du starter

- [ ] Et build ligger i TestFlight (se `SETUP.md`), og du har selv prøvet appen på telefonen.
- [ ] **Fjern testværktøjerne, før appen sendes til review.** De ligger i den samme kode som App Store-versionen:
  langt tryk på rækken *Status* under Cycle Tracker Plus i Indstillinger (valget *Vis som Gratis (test)* og
  butikkens status, `describeCustomer` i `src/purchases/index.ts`) og langt tryk på titlen på
  betalingsskærmen (`describeStore`, `src/app/paywall.tsx`). Vis-som-gratis-kontakten er `previewFree` i
  `src/store/store.ts` og `src/entitlements/index.ts`. Ingen af dem kan give Plus, men de hører ikke hjemme
  i den udgivne app.
- [ ] GitHub Pages er slået til (Settings → Pages → Source: GitHub Actions), så
      https://mwoxen.github.io/cycletracker/privacy.html og `/support.html` svarer.

## App-information

- [ ] **Name**: Cycle Tracker. **Subtitle**: fra `subtitle.txt`.
- [ ] **Primary language**: Danish. Tilføj lokaliseringen **English (U.K.)** og udfyld begge.
- [ ] **Category**: Health & Fitness. Secondary: Education.
- [ ] **Privacy Policy URL**: `privacy_url.txt`. **Support URL**: `support_url.txt`.
- [ ] **Age rating**: svar på spørgeskemaet. "Medical/Treatment Information: Infrequent/Mild" giver 12+.
      Alt andet "None".
- [ ] **Content rights**: appen indeholder ikke tredjepartsindhold.

## App Privacy (Apple spørger, hvad appen indsamler)

- [ ] Vælg **"Data Not Collected"**. Appen sender ingen data til udvikleren eller tredjeparter.
      iCloud-backup ligger i brugerens egen konto og tæller ikke som indsamling.

## Version 1.0

- [ ] **Description**, **Keywords**, **Promotional Text**, **What's New**: fra metadata-filerne.
- [ ] **Screenshots** (det eneste, der kræver en iPhone): tag 4-6 skærmbilleder på en iPhone med
      6,7" skærm (fx iPhone 15 Pro Max / 16 Plus) og 6,1" (fx iPhone 15 / 16). Forslag: Hjem med
      fasekort og dagens kort, Lær-oversigten, et dagligt kort, Kalender, årsoversigten.
      Skjul personlige navne: brug fx "Anna" som partnernavn.
- [ ] **Build**: vælg det seneste TestFlight-build.
- [ ] **Export Compliance**: "No" til kryptering ud over standard (er allerede sat i appen via
      `ITSAppUsesNonExemptEncryption = false`, så spørgsmålet stilles måske ikke).
- [ ] **App Review Information**: kontaktoplysninger. I **Notes** skriv (kopiér):

      > Cycle Tracker is an educational app for couples about the menstrual cycle. It does not
      > provide medical advice, does not diagnose, and explicitly states that predictions must not
      > be used as contraception (see Settings → Disclaimer). All data stays on device; optional
      > iCloud backup uses the user's own account. No account is needed to test: complete onboarding
      > with any name and a recent date as "last period start". To test partner sharing, use
      > Settings → Share with partner and Scan on a second device, or paste the generated link.

- [ ] **Sign-in required**: No.
- [ ] **Release**: "Manually release this version" anbefales første gang.

## Efter godkendelse

- [ ] Tryk **Release**. Del App Store-linket med din partner.
- [ ] Fremtidige JavaScript-ændringer kommer stadig som OTA-opdateringer. Nye native builds skal
      igennem review igen (App Store Connect → ny version → vælg build).

## Hvis Apple afviser

- Guideline 1.4 (medical): henvis til disclaimeren i Settings og teksten i beskrivelsen.
- Guideline 5.1.1 (privacy): henvis til privatlivspolitikken; appen indsamler intet.
- Manglende funktion ved review: skriv i Notes, at appen kræver en logget menstruationsstart for
  at vise faser, og hvordan man gør.
