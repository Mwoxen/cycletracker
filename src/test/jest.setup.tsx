/**
 * Shared Jest setup (registered in package.json "jest.setupFilesAfterEnv").
 *
 * Mocks only what cannot run in Jest: native views without a JS fallback and native modules
 * that are absent in a plain Node environment. Everything else runs for real so the screen
 * smoke tests catch genuine runtime errors.
 */
jest.mock('@react-native-async-storage/async-storage', () =>
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

// Not covered: the native SF Symbol view. Rendered as an empty View of the requested size.
jest.mock('expo-symbols', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { View } = require('react-native');
  return {
    SymbolView: ({ name, size = 18 }: { name: string; size?: number }) => (
      <View testID={`symbol:${name}`} style={{ width: size, height: size }} />
    ),
  };
});

// Not covered: the SwiftUI-backed controls from @expo/ui. Rendered as plain Views.
jest.mock('@expo/ui/community/datetime-picker', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { View } = require('react-native');
  return { DateTimePicker: (props: object) => <View testID="datetime-picker" {...props} /> };
});
jest.mock('@expo/ui/community/segmented-control', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { View } = require('react-native');
  return { SegmentedControl: (props: object) => <View testID="segmented-control" {...props} /> };
});

// Not covered: the camera. Permissions resolve to "not yet asked".
jest.mock('expo-camera', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { View } = require('react-native');
  return {
    CameraView: (props: object) => <View testID="camera" {...props} />,
    useCameraPermissions: () => [
      { granted: false, canAskAgain: true, status: 'undetermined' },
      jest.fn(async () => ({ granted: false, canAskAgain: true, status: 'undetermined' })),
    ],
  };
});

// Not covered: iCloud and the widget App Group; both report "unavailable" as in Expo Go.
jest.mock('react-native-cloud-storage', () => ({
  CloudStorage: {
    isCloudAvailable: jest.fn(async () => false),
    exists: jest.fn(async () => false),
    readFile: jest.fn(async () => ''),
    writeFile: jest.fn(async () => undefined),
  },
  CloudStorageScope: { Documents: 'documents', AppData: 'app_data' },
}));
jest.mock('@bacons/apple-targets', () => {
  class ExtensionStorage {
    static reloadWidget = jest.fn();
    set = jest.fn();
    get = jest.fn();
    remove = jest.fn();
  }
  return { ExtensionStorage };
});

// Not covered: local notification scheduling. Permission is reported as granted.
jest.mock('expo-notifications', () => ({
  setNotificationHandler: jest.fn(),
  getPermissionsAsync: jest.fn(async () => ({ granted: true, canAskAgain: true })),
  requestPermissionsAsync: jest.fn(async () => ({ granted: true, canAskAgain: true })),
  cancelAllScheduledNotificationsAsync: jest.fn(async () => undefined),
  scheduleNotificationAsync: jest.fn(async () => 'id'),
  SchedulableTriggerInputTypes: { DAILY: 'daily', DATE: 'date' },
}));

jest.mock('expo-haptics', () => ({
  selectionAsync: jest.fn(async () => undefined),
  impactAsync: jest.fn(async () => undefined),
  notificationAsync: jest.fn(async () => undefined),
  ImpactFeedbackStyle: { Light: 'light', Medium: 'medium', Heavy: 'heavy' },
  NotificationFeedbackType: { Success: 'success', Warning: 'warning', Error: 'error' },
}));

jest.mock('expo-sharing', () => ({
  isAvailableAsync: jest.fn(async () => false),
  shareAsync: jest.fn(async () => undefined),
}));

jest.mock('expo-file-system', () => {
  class File {
    uri: string;
    exists = false;
    constructor(...parts: string[]) {
      this.uri = parts.join('/');
    }
    delete = jest.fn();
    write = jest.fn();
    text = jest.fn(async () => '');
    static pickFileAsync = jest.fn(async () => ({ canceled: true }));
  }
  return { File, Paths: { cache: 'file:///cache', document: 'file:///documents' } };
});

jest.mock('expo-updates', () => ({
  isEnabled: true,
  isEmbeddedLaunch: true,
  updateId: null,
  manifest: null,
  createdAt: null,
  checkForUpdateAsync: jest.fn(async () => ({ isAvailable: true })),
  fetchUpdateAsync: jest.fn(async () => ({ isNew: true })),
  reloadAsync: jest.fn(async () => undefined),
}));

jest.mock('expo-localization', () => ({
  getLocales: () => [{ languageCode: 'da', languageTag: 'da-DK', regionCode: 'DK' }],
}));

jest.mock('expo-web-browser', () => ({
  openBrowserAsync: jest.fn(async () => ({ type: 'cancel' })),
}));

jest.mock('expo-splash-screen', () => ({
  preventAutoHideAsync: jest.fn(async () => true),
  hideAsync: jest.fn(async () => true),
}));

// Reanimated's official mock re-exports the real package, which needs the worklets runtime;
// worklets ships its own JS-only mock for exactly this. expo-router/testing-library registers
// its own jest.mock('react-native-reanimated') that returns the official mock, so the official
// mock itself is extended with the hook the app uses that it leaves out.
jest.mock('react-native-worklets', () => jest.requireActual('react-native-worklets/src/mock'));
jest.mock('react-native-reanimated/mock', () => {
  const Reanimated = jest.requireActual('react-native-reanimated/mock');
  return { ...Reanimated, useReducedMotion: () => false };
});
jest.mock('react-native-reanimated', () =>
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('react-native-reanimated/mock'),
);

/**
 * Fail the test on console errors that mean a real runtime bug. Everything else (deprecation
 * notices, unsupported style props on the test renderer) is let through as a normal warning.
 * The failure is raised in afterEach rather than inside console.error, because throwing from
 * inside React's error reporting leaves the renderer hanging until the test times out.
 */
const FATAL_CONSOLE_ERRORS = [
  'Maximum update depth',
  'Each child in a list should have a unique',
  'Encountered two children with the same key',
  'Cannot update a component',
  'is not a function',
  'undefined is not',
  'Invariant',
];

let fatalConsoleErrors: string[] = [];
const originalError = console.error;

beforeEach(() => {
  fatalConsoleErrors = [];
  jest.spyOn(console, 'error').mockImplementation((...args: unknown[]) => {
    const text = args
      .map((a) => (a instanceof Error ? `${a.message}\n${a.stack ?? ''}` : String(a)))
      .join(' ');
    if (FATAL_CONSOLE_ERRORS.some((needle) => text.includes(needle))) {
      fatalConsoleErrors.push(text);
    }
    originalError(...args);
  });
});

afterEach(() => {
  (console.error as jest.Mock).mockRestore();
  if (fatalConsoleErrors.length > 0) {
    const [first] = fatalConsoleErrors;
    throw new Error(`console.error during test:\n${first.split('\n').slice(0, 12).join('\n')}`);
  }
});
