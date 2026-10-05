import {
  DarkTheme,
  DefaultTheme,
  Stack,
  ThemeProvider,
  type ErrorBoundaryProps,
  type NativeStackNavigationOptions,
} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {
  Manrope_300Light,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold,
  useFonts,
} from '@expo-google-fonts/manrope';
import { useEffect } from 'react';
import { Appearance, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useCloudBackup } from '@/hooks/use-cloud-backup';
import { useWidgetSync } from '@/hooks/use-widget-sync';
import { setLanguage } from '@/i18n';
import { installNotificationHandler, syncNotifications } from '@/notifications';
import { configurePurchases } from '@/purchases';
import { selectActivePeriods, useStore } from '@/store/store';
import { CatchBoundary, captureConsoleErrors, errorDetails } from '@/ui/catch-boundary';
import { AppErrorBoundary } from '@/ui/error-boundary';
import { PhaseThemeProvider } from '@/ui/theme';

export function ErrorBoundary(props: ErrorBoundaryProps) {
  return <AppErrorBoundary {...props} details={errorDetails(props.error)} />;
}

captureConsoleErrors();
void SplashScreen.preventAutoHideAsync();
installNotificationHandler();

const sheet: NativeStackNavigationOptions = {
  presentation: 'formSheet',
  sheetAllowedDetents: [0.7, 1],
  sheetGrabberVisible: true,
  sheetCornerRadius: 28,
  headerShown: false,
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const hydrated = useStore((s) => s.hydrated);
  const [fontsLoaded, fontError] = useFonts({
    Manrope_300Light,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold,
  });
  // A font that fails to load falls back to the system font rather than blocking the app.
  const ready = hydrated && (fontsLoaded || !!fontError);
  const profile = useStore((s) => s.profile);
  const settings = useStore((s) => s.settings);
  const periods = useStore(selectActivePeriods);
  const language = profile?.language;
  useCloudBackup();
  useWidgetSync();

  useEffect(() => {
    if (language) setLanguage(language);
  }, [language]);

  const appearance = settings.appearance;
  useEffect(() => {
    Appearance.setColorScheme(appearance === 'system' ? 'unspecified' : appearance);
  }, [appearance]);

  useEffect(() => {
    if (ready) void SplashScreen.hideAsync();
  }, [ready]);

  useEffect(() => {
    if (hydrated) void configurePurchases();
  }, [hydrated]);

  // Never leave the user on a blank screen if storage fails to rehydrate. Only the in-memory
  // flag is flipped, so a slow rehydration can still land without the default state having been
  // persisted over the real one.
  useEffect(() => {
    const handle = setTimeout(() => {
      if (!useStore.getState().hydrated) useStore.setState({ hydrated: true });
    }, 4000);
    return () => clearTimeout(handle);
  }, []);

  // Keep local notifications in step with the data; debounced so rapid edits only schedule once.
  useEffect(() => {
    if (!hydrated) return;
    const handle = setTimeout(() => void syncNotifications(profile, settings, periods), 1500);
    return () => clearTimeout(handle);
  }, [hydrated, profile, settings, periods]);

  if (!ready) return null;

  return (
    <PhaseThemeProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <CatchBoundary>
            <Stack>
              <Stack.Protected guard={!!profile}>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="log/[date]" options={sheet} />
                <Stack.Screen name="share" options={sheet} />
                <Stack.Screen name="scan" options={sheet} />
                <Stack.Screen name="import" options={sheet} />
                <Stack.Screen name="paywall" options={sheet} />
              </Stack.Protected>
              <Stack.Protected guard={!profile}>
                <Stack.Screen name="onboarding" options={{ headerShown: false }} />
              </Stack.Protected>
            </Stack>
          </CatchBoundary>
        </ThemeProvider>
      </GestureHandlerRootView>
    </PhaseThemeProvider>
  );
}
