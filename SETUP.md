# Opsætning: det eneste, du selv skal gøre

Alt kode, bygning og udrulning kører automatisk fra GitHub. Du skal kun give GitHub fire nøgler
og oprette appen i App Store Connect én gang. Regn med 15-20 minutter i alt.

> Hvor lægger man secrets? På GitHub: **Settings → Secrets and variables → Actions → New repository secret**
> (https://github.com/Mwoxen/cycletracker/settings/secrets/actions).

## 1. Expo-token (giver OTA-opdateringer og Expo Go-preview)

1. Gå til https://expo.dev/settings/access-tokens og tryk **Create token**. Kald det fx `github-actions`.
2. Læg tokenet i GitHub som secret **`EXPO_TOKEN`**.
3. Kør workflowet **EAS Update** én gang: https://github.com/Mwoxen/cycletracker/actions/workflows/eas-update.yml
   → **Run workflow**. Første kørsel opretter EAS-projektet og committer dets id til `.eas-project-id`.
   Herefter publiceres hver push til `main` automatisk.

**Preview i Expo Go (valgfrit, 0 kr., ingen build):**
Installer **Expo Go** fra App Store, log ind med din Expo-konto, og åbn projektet under
_Projects_ i Expo Go. Vælg kanalen `expo-go`. Det virker fra første grønne EAS Update-kørsel.

## 2. App Store Connect API-nøgle (lader EAS signere og uploade uden dig)

1. Gå til https://appstoreconnect.apple.com/access/integrations/api
   (Users and Access → Integrations → App Store Connect API → Team Keys).
2. Tryk **+** / Generate API Key. Navn: `EAS`, Access: **App Manager**.
3. Notér **Issuer ID** (øverst på siden) og nøglens **Key ID**. Download `.p8`-filen (kan kun hentes én gang).
4. Find dit **Team ID** på https://developer.apple.com/account under _Membership details_.
5. Læg fire secrets i GitHub:

| Secret           | Værdi                                                                                                    |
| ---------------- | -------------------------------------------------------------------------------------------------------- |
| `ASC_KEY_ID`     | Key ID fra trin 3                                                                                        |
| `ASC_ISSUER_ID`  | Issuer ID fra trin 3                                                                                     |
| `ASC_API_KEY_P8` | Hele indholdet af `.p8`-filen (åbn den i en teksteditor, kopiér alt inkl. `-----BEGIN PRIVATE KEY-----`) |
| `APPLE_TEAM_ID`  | Team ID fra trin 4                                                                                       |

Er din Apple Developer-konto en virksomhed, så tilføj også secret `APPLE_TEAM_TYPE` = `COMPANY_OR_ORGANIZATION`.
Ellers bruges `INDIVIDUAL`.

6. Opret signeringsnøglerne én gang fra din egen computer (EAS nægter at oprette certifikat og
   provisioning profiles uden en person ved tastaturet; herefter genbruges de af GitHub):

   ```bash
   git clone https://github.com/Mwoxen/cycletracker.git && cd cycletracker
   npm ci
   npx eas-cli login
   export APPLE_TEAM_ID=DIT_TEAM_ID        # PowerShell: $env:APPLE_TEAM_ID="DIT_TEAM_ID"
   npx eas-cli build --platform ios --profile production --no-wait
   ```

   Svar **Y** til at logge ind med dit Apple ID (tofaktorkode på telefonen) og tryk Enter til
   resten. Det opretter bundle-id'erne `com.mwoxen.cycletracker` og `.widget`, certifikat og
   provisioning profiles hos Apple og starter det første build.

7. Herefter kører workflowet **EAS Build (iOS)** selv ved push til `main`, eller på
   https://github.com/Mwoxen/cycletracker/actions/workflows/eas-build.yml → **Run workflow**.
   Builds kan følges på https://expo.dev/accounts/mwoxen/projects/cycletracker/builds.

## 3. Opret appen i App Store Connect (én gang, så builds kan sendes til TestFlight)

Apple tillader ikke, at et script opretter selve app-posten, så det er det eneste manuelle trin.

1. Gå til https://appstoreconnect.apple.com/apps → **+** → **New App**.
2. Platform: iOS. Name: `Cycle Tracker`. Primary language: Danish (eller English).
   Bundle ID: vælg `com.mwoxen.cycletracker` (den findes efter trin 2.6). SKU: `cycletracker`.
3. Åbn appen. I adressen står appens numeriske id: `https://appstoreconnect.apple.com/apps/**1234567890**/...`
   Læg det i GitHub som secret **`ASC_APP_ID`**.
4. Kør **EAS Build (iOS)** igen. Fra nu af lander alle builds automatisk i TestFlight.

## 4. TestFlight på jeres telefoner

1. Installer **TestFlight** fra App Store på begge telefoner.
2. I App Store Connect → din app → **TestFlight** → _Internal Testing_ → opret en gruppe og tilføj dig selv.
   Din partner tilføjes som bruger under _Users and Access_ (rolle: Customer Support er nok) og derefter i gruppen.
   Alternativt: _External Testing_ → offentligt link, som I begge kan åbne (kræver én kort Beta App Review).
3. Åbn TestFlight-invitationen på telefonen og installer.

Herefter henter appen selv nye JavaScript-versioner ved næste åbning efter hver push til `main`.
Kun når native afhængigheder ændres, kører der et nyt build (automatisk), og TestFlight sender en ny version.

## Om backup, deling og Expo Go

- **iCloud-backup** og **deep links** (`cycletracker://import?…`) virker kun i den rigtige app fra
  TestFlight, ikke i Expo Go. Første gang `package.json` ændres, bygger EAS automatisk en ny version.
- **QR-scanning**, **eksport/import af fil** og **Del som link** virker også i Expo Go.
- **Hjemmeskærms-widgetten** kræver ligeledes et rigtigt build. Tilføj den fra hjemmeskærmen (hold
  fingeren nede → + → Cycle Tracker), når appen er installeret fra TestFlight.
- iCloud-containeren `iCloud.com.mwoxen.cycletracker` oprettes automatisk af EAS ud fra
  app-konfigurationen, når det første build med iCloud kører. Den kræver ikke noget fra dig.

## 5. GitHub Pages (privatlivspolitik og support-side til App Store)

Gå til https://github.com/Mwoxen/cycletracker/settings/pages og sæt **Source** til **GitHub Actions**.
Det er alt. Herefter publicerer workflowet **Pages** siderne i `docs/site/` automatisk:
https://mwoxen.github.io/cycletracker/privacy.html og `/terms.html`, `/support.html`.

## 6. App Store

Når appen virker i TestFlight, følg `store/CHECKLIST.md`. Alle tekster ligger klar i
`store/metadata/`. Det eneste, der kræver en iPhone, er skærmbillederne.

## Nødplan: byg på GitHub Actions i stedet for EAS

Er de 15 gratis EAS-builds brugt op en måned, kør workflowet **iOS build (macOS fallback)**:
https://github.com/Mwoxen/cycletracker/actions/workflows/ios-build-macos.yml → **Run workflow**.
Det bygger på GitHubs egne Mac-maskiner (gratis på et offentligt repo) og uploader til TestFlight
med de samme secrets. Det tager 20-30 minutter.

## Hvis noget driller

- **EAS Update fejler med "project not found"**: slet `.eas-project-id` fra repoet og kør workflowet igen.
- **EAS Build fejler med "Credentials are not set up"**: kør trin 2.6 fra din computer igen.
- **EAS Build fejler på API-nøglen**: tjek at `.p8`-indholdet er kopieret komplet, og at nøglen har rollen App Manager.
- **Buildet er grønt men kommer ikke i TestFlight**: `ASC_APP_ID` mangler eller er forkert (trin 3).
- **Expo Go viser gammel version**: luk Expo Go helt og åbn igen; opdateringer hentes ved start.
