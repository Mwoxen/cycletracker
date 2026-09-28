import type { ExpoConfig } from 'expo/config';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * The EAS project id is written to `.eas-project-id` by the first CI run
 * (see .github/workflows/eas-update.yml) so nobody has to paste it anywhere.
 */
function readProjectId(): string | undefined {
  if (process.env.EAS_PROJECT_ID) return process.env.EAS_PROJECT_ID;
  const file = join(__dirname, '.eas-project-id');
  if (existsSync(file)) {
    const id = readFileSync(file, 'utf8').trim();
    if (id) return id;
  }
  return undefined;
}

const projectId = readProjectId();

/**
 * Expo Go can only load updates whose runtime version matches the SDK
 * (`exposdk:57.0.0`). Real builds use the native fingerprint instead, so an
 * update is only offered to builds whose native code actually matches.
 */
const expoGoPreview = process.env.EXPO_GO_PREVIEW === '1';

const config: ExpoConfig = {
  name: 'Cycle Tracker',
  slug: 'cycletracker',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'cycletracker',
  userInterfaceStyle: 'automatic',
  platforms: ['ios'],
  runtimeVersion: { policy: expoGoPreview ? 'sdkVersion' : 'fingerprint' },
  updates: projectId
    ? {
        url: `https://u.expo.dev/${projectId}`,
        checkAutomatically: 'ON_LOAD',
        fallbackToCacheTimeout: 0,
      }
    : undefined,
  ios: {
    bundleIdentifier: 'com.mwoxen.cycletracker',
    supportsTablet: false,
    icon: './assets/expo.icon',
    infoPlist: {
      ITSAppUsesNonExemptEncryption: false,
      CFBundleAllowMixedLocalizations: true,
      CFBundleLocalizations: ['da', 'en'],
      CFBundleDevelopmentRegion: 'en',
    },
  },
  plugins: [
    'expo-router',
    'expo-localization',
    [
      'expo-splash-screen',
      {
        backgroundColor: '#ffffff',
        image: './assets/images/splash-icon.png',
        imageWidth: 120,
        dark: { backgroundColor: '#000000' },
      },
    ],
    ['expo-notifications', { defaultChannel: 'default' }],
  ],
  experiments: {
    typedRoutes: true,
    reactCompiler: true,
  },
  extra: projectId ? { eas: { projectId } } : undefined,
};

export default config;
