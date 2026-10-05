import type { NativeStackNavigationOptions } from 'expo-router';

import { colors } from './colors';
import { usePhaseTheme } from './theme';

/**
 * Large-title header shared by the four tab stacks.
 * Opaque, in the app background colour: a transparent header makes iOS inset the scroll view a
 * second time under the large title, which left a tall empty band above it. No blur effect: iOS 26
 * leaves the large title undrawn when a background effect is set.
 */
export const largeTitleScreenOptions: NativeStackNavigationOptions = {
  headerLargeTitleEnabled: true,
  headerTransparent: false,
  headerBlurEffect: 'none',
  headerShadowVisible: false,
  headerLargeTitleShadowVisible: false,
  headerStyle: { backgroundColor: colors.background as string },
  headerLargeStyle: { backgroundColor: colors.background as string },
};

/** Reading screens: no large title and a back button without the previous screen's title. */
export const readingScreenOptions: NativeStackNavigationOptions = {
  title: '',
  headerLargeTitleEnabled: false,
  headerBackButtonDisplayMode: 'minimal',
};

/** The tab stack's options with the back button and header buttons in today's accent. */
export function useStackScreenOptions(): NativeStackNavigationOptions {
  const theme = usePhaseTheme();
  return { ...largeTitleScreenOptions, headerTintColor: theme.accentHex };
}
