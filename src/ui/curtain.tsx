import { useEffect, useState } from 'react';
import { StyleSheet, useColorScheme, useWindowDimensions } from 'react-native';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

import { useRingAnchor } from '@/ui/ring-anchor';

/** Same colours and images as the native splash (app.config.ts), so the handover is seamless. */
const SPLASH = {
  light: {
    background: '#EEE8EB',
    icon: require('../../assets/images/splash-icon.png'),
    ring: require('../../assets/images/splash-ring.png'),
    heart: require('../../assets/images/splash-heart.png'),
    text: require('../../assets/images/splash-text.png'),
  },
  dark: {
    background: '#0D0A0E',
    icon: require('../../assets/images/splash-icon-dark.png'),
    ring: require('../../assets/images/splash-ring-dark.png'),
    heart: require('../../assets/images/splash-heart-dark.png'),
    text: require('../../assets/images/splash-text-dark.png'),
  },
};
/**
 * The native splash draws the 1024×1400 image 437 pt wide, centred on the screen. At that size
 * the ring in it has Home's radius (128 pt) and stroke, and sits about where Home draws it
 * (scripts/brand-svg.mjs). Any remaining offset to the real ring is closed with a short glide.
 */
const IMAGE_WIDTH = 437;
const UNIT = IMAGE_WIDTH / 1024;
const IMAGE_HEIGHT = 1400 * UNIT;
const RING_OFFSET_Y = (365 - 700) * UNIT;
const RING_RADIUS = 300 * UNIT;
const HOLD_MS = 550;
const MOVE_MS = 450;
const FADE_MS = 550;
const EASE = Easing.bezier(0.2, 0.8, 0.2, 1);

/**
 * A copy of the splash screen drawn in JavaScript. It stays until the app is ready and the first
 * screen has had a moment to draw. The heart, the name and the background then fade, and the
 * splash ring, already Home's size, fades into Home's ring (with a short glide if the two sit
 * a few points apart). Without a ring on screen it simply fades out. Unmounts when done.
 */
export function Curtain({ ready }: { ready: boolean }) {
  const scheme = useColorScheme() === 'dark' ? SPLASH.dark : SPLASH.light;
  const { width, height } = useWindowDimensions();
  const reduced = useReducedMotion();
  const anchor = useRingAnchor();
  const [done, setDone] = useState(false);
  const [started, setStarted] = useState(false);
  const move = useSharedValue(0);
  const fade = useSharedValue(1);
  const ringFade = useSharedValue(1);

  // Where the splash ring is, and where Home's ring wants it.
  const fromX = width / 2;
  const fromY = height / 2 + RING_OFFSET_Y;
  const target = anchor
    ? {
        x: anchor.x + anchor.size / 2,
        y: anchor.y + anchor.size / 2,
        scale: (anchor.size / 2 - 12) / RING_RADIUS,
      }
    : null;

  useEffect(() => {
    if (!ready || started) return;
    // Give Home a moment to mount and report its ring; without one the splash just fades.
    const handle = setTimeout(() => setStarted(true), HOLD_MS);
    return () => clearTimeout(handle);
  }, [ready, started]);

  useEffect(() => {
    if (!started) return;
    const finish = () => setDone(true);
    if (reduced || !target) {
      fade.value = withTiming(0, { duration: reduced ? 250 : FADE_MS }, () => runOnJS(finish)());
      ringFade.value = withTiming(0, { duration: reduced ? 250 : FADE_MS });
      return;
    }
    move.value = withTiming(1, { duration: MOVE_MS, easing: EASE });
    fade.value = withTiming(0, { duration: FADE_MS, easing: Easing.out(Easing.quad) });
    ringFade.value = withDelay(
      MOVE_MS * 0.5,
      withTiming(0, { duration: FADE_MS }, () => runOnJS(finish)()),
    );
    // Only the first anchor starts the move; later layout changes must not restart it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, reduced]);

  const background = useAnimatedStyle(() => ({ opacity: fade.value }));
  const ring = useAnimatedStyle(() => {
    const t = move.value;
    const tx = target ? (target.x - fromX) * t : 0;
    const ty = target ? (target.y - fromY) * t : 0;
    const scale = target ? 1 + (target.scale - 1) * t : 1;
    return {
      opacity: ringFade.value,
      transform: [{ translateX: tx }, { translateY: ty }, { scale }],
    };
  });

  if (done) return null;
  const box = {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    left: width / 2 - IMAGE_WIDTH / 2,
    top: height / 2 - IMAGE_HEIGHT / 2,
  };
  return (
    <Animated.View style={styles.fill} pointerEvents="auto" testID="curtain">
      <Animated.View style={[styles.fill, { backgroundColor: scheme.background }, background]} />
      {started ? (
        <>
          <Animated.Image
            source={scheme.heart}
            style={[styles.layer, box, background]}
            resizeMode="contain"
          />
          <Animated.Image
            source={scheme.text}
            style={[styles.layer, box, background]}
            resizeMode="contain"
          />
          <Animated.Image
            source={scheme.ring}
            style={[styles.layer, box, ring]}
            resizeMode="contain"
          />
        </>
      ) : (
        <Animated.Image source={scheme.icon} style={[styles.layer, box]} resizeMode="contain" />
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  fill: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  layer: { position: 'absolute' },
});
