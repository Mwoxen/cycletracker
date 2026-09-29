# Cycle Tracker

En iOS-app, der giver en partner indsigt i, hvad der sker i menstruationscyklussen, og helt konkret
hvad man kan gøre for at hjælpe. Den menstruerende bruger registrerer sin cyklus; partneren følger
med og lærer noget nyt hver dag, hver uge og hver måned i et helt år.

- **Dagligt kort** (80-150 ord) med én konkret handling.
- **Ugentlig artikel** (under 5 minutters læsning) med et samtalespørgsmål.
- **Månedlig opsamling** med en lille handlingsorienteret quiz.
- Dansk og engelsk. Alt data ligger på telefonen. Ingen server, ingen konto, ingen analytics.

## Kom i gang

Læs [SETUP.md](./SETUP.md). Det er de eneste manuelle trin.

## Teknik

|                    |                                                             |
| ------------------ | ----------------------------------------------------------- |
| Framework          | Expo SDK 57, React Native, TypeScript (strict)              |
| Navigation         | Expo Router med native tabs og native stack                 |
| Lager              | zustand + AsyncStorage, versioneret snapshot-format         |
| Build og udrulning | EAS Build → TestFlight, EAS Update (OTA) via GitHub Actions |
| Test               | Jest (cyklusmotor, snapshot-merge, indholdsschema)          |

```bash
npm ci
npm run check      # lint + typecheck + test
npm start          # dev-server til Expo Go
```

## Struktur

```
src/app          Expo Router-ruter (skærme)
src/engine       Cyklusmotor: faser, forudsigelser (ren TypeScript, fuld testdækning)
src/store        zustand-lager, snapshot-format til backup og sync
src/content      Læringsindhold pr. sprog (da/en) og leveringslogik
src/i18n         UI-strenge
src/ui           Genbrugelige komponenter
src/notifications Lokale påmindelser
src/backup       iCloud-backup og fil-eksport/import
src/sync         Payload-format til QR og deep links
```

## Status

Fase 1 (fundament, pipeline og funktionel MVP) og Fase 2 (iCloud-backup, eksport/import,
QR- og link-deling mellem partnernes telefoner) er bygget. Næste faser: resten af årets indhold,
App Store, design.

## Ansvarsfraskrivelse

Appen er lærende og informerende, ikke medicinsk rådgivning. Forudsigelser er skøn baseret på
gennemsnit og må ikke bruges som prævention.
