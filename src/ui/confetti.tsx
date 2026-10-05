import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { phaseHex } from '@/ui/colors';
import { usePhaseTheme } from '@/ui/theme';

const COUNT = 12;
const COLOURS = ['menstrual', 'follicular', 'ovulation', 'luteal'] as const;

function Particle({ index, burst }: { index: number; burst: number }) {
  const theme = usePhaseTheme();
  const t = useSharedValue(0);
  useEffect(() => {
    if (!burst) return;
    t.value = 0;
    t.value = withTiming(1, { duration: 800, easing: Easing.out(Easing.cubic) });
  }, [burst, t]);
  const angle = (index / COUNT) * Math.PI * 2 + (index % 2) * 0.3;
  const distance = 90 + (index % 3) * 20;
  const style = useAnimatedStyle(() => ({
    opacity: 1 - t.value,
    transform: [
      { translateX: Math.cos(angle) * distance * t.value },
      { translateY: Math.sin(angle) * distance * t.value },
      { rotate: `${t.value * 180}deg` },
      { scale: 0.6 + 0.6 * (1 - t.value) },
    ],
  }));
  const colour = phaseHex[COLOURS[index % COLOURS.length]][theme.dark ? 'dark' : 'light'];
  return (
    <Animated.View
      style={[
        styles.particle,
        index % 2 ? styles.square : styles.dot,
        { backgroundColor: colour },
        style,
      ]}
    />
  );
}

/**
 * A small burst of dots and squares in the four phase colours, fired every time `burst`
 * changes to a new truthy value. Renders nothing with Reduce Motion.
 */
export function Confetti({ burst }: { burst: number }) {
  const reduced = useReducedMotion();
  if (reduced || !burst) return null;
  return (
    <View pointerEvents="none" style={styles.wrap} testID="confetti">
      {Array.from({ length: COUNT }, (_, i) => (
        <Particle key={i} index={i} burst={burst} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  particle: { position: 'absolute', width: 8, height: 8 },
  dot: { borderRadius: 4 },
  square: { borderRadius: 1.5 },
});
