import { useEffect, useState } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

/** Same colours and icon as the native splash (app.config.ts), so the handover is seamless. */
const SPLASH = {
  light: { background: '#EEE8EB', icon: require('../../assets/images/splash-icon.png') },
  dark: { background: '#0D0A0E', icon: require('../../assets/images/splash-icon-dark.png') },
};
const ICON_WIDTH = 160;
const HOLD_MS = 350;
const FADE_MS = 550;

/**
 * A copy of the splash screen drawn in JavaScript. It stays until the app is ready and the first
 * screen has had a moment to draw, then fades out over it. Unmounts when done.
 */
export function Curtain({ ready }: { ready: boolean }) {
  const scheme = useColorScheme() === 'dark' ? SPLASH.dark : SPLASH.light;
  const reduced = useReducedMotion();
  const [done, setDone] = useState(false);
  const fade = useSharedValue(1);

  useEffect(() => {
    if (!ready) return;
    const finish = () => setDone(true);
    fade.value = withDelay(
      HOLD_MS,
      withTiming(0, { duration: reduced ? 250 : FADE_MS, easing: Easing.out(Easing.quad) }, () =>
        runOnJS(finish)(),
      ),
    );
  }, [ready, reduced, fade]);

  const overlay = useAnimatedStyle(() => ({ opacity: fade.value }));
  const icon = useAnimatedStyle(() => ({
    transform: [{ scale: reduced ? 1 : 1 + 0.06 * (1 - fade.value) }],
  }));

  if (done) return null;
  return (
    <Animated.View
      style={[styles.fill, styles.centre, { backgroundColor: scheme.background }, overlay]}
      pointerEvents="auto"
      testID="curtain">
      <Animated.Image source={scheme.icon} style={[styles.icon, icon]} resizeMode="contain" />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  fill: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  centre: { alignItems: 'center', justifyContent: 'center' },
  icon: { width: ICON_WIDTH, height: ICON_WIDTH },
});
