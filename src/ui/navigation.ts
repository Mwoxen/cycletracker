import type { NativeStackNavigationOptions } from 'expo-router';

/**
 * Large-title header shared by the four tab stacks.
 * No blur behind the large title: iOS 26 does not draw the title when a background effect is set
 * (documented in React Navigation's useHeaderConfigProps), which left an empty band at the top.
 */
export const largeTitleScreenOptions: NativeStackNavigationOptions = {
  headerLargeTitleEnabled: true,
  headerTransparent: true,
  headerBlurEffect: 'none',
  headerShadowVisible: false,
  headerLargeTitleShadowVisible: false,
  headerLargeStyle: { backgroundColor: 'transparent' },
};
