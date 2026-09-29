import {
  DarkTheme,
  DefaultTheme,
  Stack,
  ThemeProvider,
  type NativeStackNavigationOptions,
} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';

import { useCloudBackup } from '@/hooks/use-cloud-backup';
import { setLanguage } from '@/i18n';
import { installNotificationHandler, syncNotifications } from '@/notifications';
import { selectActivePeriods, useStore } from '@/store/store';

void SplashScreen.preventAutoHideAsync();
installNotificationHandler();

const sheet: NativeStackNavigationOptions = {
  presentation: 'formSheet',
  sheetAllowedDetents: [0.7, 1],
  sheetGrabberVisible: true,
  headerShown: false,
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const hydrated = useStore((s) => s.hydrated);
  const profile = useStore((s) => s.profile);
  const settings = useStore((s) => s.settings);
  const periods = useStore(selectActivePeriods);
  const language = profile?.language;
  useCloudBackup();

  useEffect(() => {
    if (language) setLanguage(language);
  }, [language]);

  useEffect(() => {
    if (hydrated) void SplashScreen.hideAsync();
  }, [hydrated]);

  // Never leave the user on a blank screen if storage fails to rehydrate.
  const setHydrated = useStore((s) => s.setHydrated);
  useEffect(() => {
    const handle = setTimeout(() => setHydrated(true), 4000);
    return () => clearTimeout(handle);
  }, [setHydrated]);

  // Keep local notifications in step with the data; debounced so rapid edits only schedule once.
  useEffect(() => {
    if (!hydrated) return;
    const handle = setTimeout(() => void syncNotifications(profile, settings, periods), 1500);
    return () => clearTimeout(handle);
  }, [hydrated, profile, settings, periods]);

  if (!hydrated) return null;

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Protected guard={!!profile}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="log/[date]" options={sheet} />
          <Stack.Screen name="share" options={sheet} />
          <Stack.Screen name="scan" options={sheet} />
          <Stack.Screen name="import" options={sheet} />
        </Stack.Protected>
        <Stack.Protected guard={!profile}>
          <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        </Stack.Protected>
      </Stack>
    </ThemeProvider>
  );
}
