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

import { endHandover, measureRing, type RingAnchor } from '@/ui/ring-anchor';

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
 * The native splash (app.config.ts) puts the 1024x1400 image in a 598 pt square, scaled to fit:
 * 598/1400 pt per unit, so 437 pt wide, and the ring in it has Home's radius and stroke
 * (scripts/brand-svg.mjs). This copy draws the same image at the same size and place. Any
 * remaining offset to the real ring is closed with a short glide.
 */
const IMAGE_HEIGHT = 598;
const UNIT = IMAGE_HEIGHT / 1400;
const IMAGE_WIDTH = 1024 * UNIT;
const RING_OFFSET_Y = (346 - 700) * UNIT;
const RING_RADIUS = 300 * UNIT;
const HOLD_MS = 550;
const MOVE_MS = 380;
const FADE_MS = 500;
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
  const [done, setDone] = useState(false);
  const [started, setStarted] = useState(false);
  const [target, setTarget] = useState<{ x: number; y: number; scale: number } | null>(null);
  const move = useSharedValue(0);
  const fade = useSharedValue(1);
  const ringFade = useSharedValue(1);

  // Where the splash ring is on screen.
  const fromX = width / 2;
  const fromY = height / 2 + RING_OFFSET_Y;

  useEffect(() => {
    if (!ready || started) return;
    // Give Home a moment to mount and lay out, then measure its ring right before we move.
    const handle = setTimeout(() => {
      void measureRing().then((anchor: RingAnchor | null) => {
        setTarget(
          anchor
            ? {
                x: anchor.x + anchor.size / 2,
                y: anchor.y + anchor.size / 2,
                scale: (anchor.size / 2 - 12) / RING_RADIUS,
              }
            : null,
        );
        setStarted(true);
      });
    }, HOLD_MS);
    return () => clearTimeout(handle);
  }, [ready, started]);

  useEffect(() => {
    if (!started) return;
    const finish = () => {
      endHandover();
      setDone(true);
    };
    if (reduced || !target) {
      fade.value = withTiming(0, { duration: reduced ? 250 : FADE_MS }, () => runOnJS(finish)());
      ringFade.value = withTiming(0, { duration: reduced ? 250 : FADE_MS });
      return;
    }
    // 1) Heart and name fade while the ring glides onto Home's ring, over the still solid
    //    background, so there is never a moment with two rings visible.
    // 2) Then background and splash ring fade together, revealing Home's identical ring.
    const far =
      Math.hypot(target.x - fromX, target.y - fromY) > 1.5 || Math.abs(target.scale - 1) > 0.01;
    const glide = far ? MOVE_MS : 0;
    move.value = withTiming(1, { duration: glide, easing: EASE });
    fade.value = withDelay(
      glide,
      withTiming(0, { duration: FADE_MS, easing: Easing.out(Easing.quad) }),
    );
    ringFade.value = withDelay(
      glide,
      withTiming(0, { duration: FADE_MS, easing: Easing.out(Easing.quad) }, () =>
        runOnJS(finish)(),
      ),
    );
    // Only the first measurement starts the move; later layout changes must not restart it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, reduced]);

  const background = useAnimatedStyle(() => ({ opacity: fade.value }));
  const heartAndName = useAnimatedStyle(() => ({ opacity: target ? 1 - move.value : fade.value }));
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
            style={[styles.layer, box, heartAndName]}
            resizeMode="contain"
          />
          <Animated.Image
            source={scheme.text}
            style={[styles.layer, box, heartAndName]}
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
