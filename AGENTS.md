This is an Expo (React Native) iOS app written in TypeScript. Read `README.md` for the purpose and
`SETUP.md` for the deployment pipeline before changing anything.

## Ground rules

- Expo SDK 57. Check the `expo` version in `package.json` before touching any Expo, EAS or React
  Native API; docs for this SDK live at https://docs.expo.dev/versions/v57.0.0/. Do not trust memory.
- Native-first UI: Expo Router `NativeTabs` for tabs, native stack with large titles, `formSheet`
  presentation for logging, `@expo/ui` and system controls (`Switch`, `Alert`) over JS look-alikes.
  Visual design is deliberately minimal until the design phase; keep it neutral and consistent.
- Routes live in `src/app/`. Non-route code goes in `src/engine`, `src/store`, `src/content`,
  `src/i18n`, `src/ui`, `src/hooks`, `src/notifications`.
- The cycle engine (`src/engine/cycle.ts`) is pure and fully unit tested. Change tests with behavior.
- Content is authored per language in `src/content/<lang>/month-NN.ts` following
  `docs/CONTENT_GUIDE.md`, and validated by `src/content/content.test.ts` (rules in
  `src/content/validate.ts`). A single month can be checked before registration with
  `CONTENT_MONTH=07 npx jest src/content/month.test.ts`. Every daily card must end in something the
  partner can do.
- `src/app/__tests__/screens.test.tsx` renders every route through Expo Router in Jest (real
  route files, store and i18n; native-only modules mocked in `src/test/jest.setup.tsx`). It fails
  on render loops, missing exports and React key/update errors, so run it before every build and
  add a case when you add a screen.
- Every UI string goes through i18n (`src/i18n/da.ts` is the source of truth; `en.ts` is typed
  against it so missing keys fail typecheck).
- The home-screen widget lives in `targets/widget` (Swift, built by `@bacons/apple-targets`) and
  reads JSON written by `src/widget/sync.ts` to the App Group. Keep `phase(forCycleDay:)` in Swift
  in step with `phaseForCycleDay` in `src/engine/cycle.ts`.
- Design tokens live in `src/ui/colors.ts` (warm palette via `DynamicColorIOS`). Do not hardcode
  colours in screens.
- Privacy: no analytics, no crash reporting, no network calls besides EAS Update and iCloud.
- Predictions are educational; never present them as contraception.

## Commands

```bash
npm ci
npm run lint        # eslint
npm run typecheck   # tsc --noEmit
npm test            # jest
npm run check       # all of the above plus check:compiler (React Compiler output)
npx expo config --type public   # verify app.config.ts resolves
```

Run `npm run check` before every commit. CI runs the same on every push.

## Deployment

- Push to `main` publishes an OTA update (`.github/workflows/eas-update.yml`) to the `production`
  channel (TestFlight builds) and the `expo-go` channel (Expo Go preview).
- Native builds (`.github/workflows/eas-build.yml`) run only when native-affecting files change or
  on demand. `ios/` and `android/` are generated; never commit them.
- `.eas-project-id` is written by the first EAS Update run. Do not invent a project id.
- `patches/` holds `patch-package` fixes for native dependencies (applied by `postinstall`). The
  directory is part of the fingerprint, so adding or changing a patch needs a new native build
  before OTA updates reach devices again.
