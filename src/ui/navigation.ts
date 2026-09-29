import type { NativeStackNavigationOptions } from 'expo-router';

import { colors } from './colors';

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
