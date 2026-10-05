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
    usesIcloudStorage: true,
    entitlements: {
      'com.apple.security.application-groups': ['group.com.mwoxen.cycletracker'],
    },
    icon: './assets/app.icon',
    appleTeamId: process.env.APPLE_TEAM_ID || undefined,
    privacyManifests: {
      NSPrivacyTracking: false,
      NSPrivacyCollectedDataTypes: [],
      NSPrivacyAccessedAPITypes: [
        {
          NSPrivacyAccessedAPIType: 'NSPrivacyAccessedAPICategoryUserDefaults',
          NSPrivacyAccessedAPITypeReasons: ['CA92.1'],
        },
        {
          NSPrivacyAccessedAPIType: 'NSPrivacyAccessedAPICategoryFileTimestamp',
          NSPrivacyAccessedAPITypeReasons: ['C617.1'],
        },
        {
          NSPrivacyAccessedAPIType: 'NSPrivacyAccessedAPICategorySystemBootTime',
          NSPrivacyAccessedAPITypeReasons: ['35F9.1'],
        },
        {
          NSPrivacyAccessedAPIType: 'NSPrivacyAccessedAPICategoryDiskSpace',
          NSPrivacyAccessedAPITypeReasons: ['E174.1'],
        },
      ],
    },
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
        backgroundColor: '#EEE8EB',
        image: './assets/images/splash-icon.png',
        imageWidth: 160,
        dark: { backgroundColor: '#0D0A0E', image: './assets/images/splash-icon-dark.png' },
      },
    ],
    ['expo-notifications', { defaultChannel: 'default' }],
    [
      'expo-camera',
      {
        cameraPermission:
          "Cycle Tracker uses the camera only to scan the QR code on your partner's phone.",
        recordAudioAndroid: false,
      },
    ],
    ['react-native-cloud-storage', { iCloudContainerEnvironment: 'Production' }],
    '@bacons/apple-targets',
  ],
  experiments: {
    typedRoutes: true,
    reactCompiler: true,
  },
  extra: {
    ...(projectId ? { eas: { projectId } } : {}),
    // RevenueCat's public iOS SDK key (not a secret, but kept out of the repo). Without it the
    // app runs free with purchases disabled.
    revenueCatIosKey: process.env.REVENUECAT_IOS_KEY || undefined,
  },
};

export default config;
