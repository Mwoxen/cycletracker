import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import type { PropsWithChildren } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const TABS = ['home', 'learn', 'calendar', 'settings'] as const;
export type TabName = (typeof TABS)[number];

const SWIPE_DISTANCE = 56;
const SWIPE_VELOCITY = 600;
/** How far the content follows the finger, so a swipe feels like it moves something. */
const FOLLOW = 0.35;
const FOLLOW_MAX = 56;

/**
 * Lets a horizontal swipe move to the neighbouring tab, so the tab bar is not the only way
 * between "I dag", "Lær", "Kalender" and "Indstillinger". The content follows the finger with
 * resistance, ticks when the threshold is reached and slides out before the next tab shows.
 * Vertical scrolling wins over the gesture.
 */
export function TabSwipe({ tab, children }: PropsWithChildren<{ tab: TabName }>) {
  const router = useRouter();
  const reduced = useReducedMotion();
  const index = TABS.indexOf(tab);
  const hasPrev = index > 0;
  const hasNext = index < TABS.length - 1;
  const x = useSharedValue(0);
  const armed = useSharedValue(false);

  const go = (direction: -1 | 1) => {
    const next = TABS[index + direction];
    if (next) router.navigate(`/(tabs)/${next}`);
  };
  const tick = () => {
    void Haptics.selectionAsync();
  };

  const pan = Gesture.Pan()
    .activeOffsetX([-24, 24])
    .failOffsetY([-12, 12])
    .onUpdate((e) => {
      const allowed = (e.translationX < 0 && hasNext) || (e.translationX > 0 && hasPrev);
      const follow = allowed ? FOLLOW : FOLLOW / 4;
      x.value = Math.max(-FOLLOW_MAX, Math.min(FOLLOW_MAX, e.translationX * follow));
      const over = allowed && Math.abs(e.translationX) > SWIPE_DISTANCE;
      if (over !== armed.value) {
        armed.value = over;
        if (over) runOnJS(tick)();
      }
    })
    .onEnd((e) => {
      const allowed = (e.translationX < 0 && hasNext) || (e.translationX > 0 && hasPrev);
      const far = Math.abs(e.translationX) > SWIPE_DISTANCE;
      const fast = Math.abs(e.velocityX) > SWIPE_VELOCITY;
      armed.value = false;
      if (allowed && (far || fast)) {
        const direction: -1 | 1 = e.translationX < 0 ? 1 : -1;
        // Slide out in the swipe direction, switch, then reset so the tab is in place when revisited.
        x.value = withTiming(-direction * 80, { duration: reduced ? 0 : 120 }, () => {
          runOnJS(go)(direction);
          x.value = 0;
        });
      } else {
        x.value = withTiming(0, { duration: reduced ? 0 : 180 });
      }
    })
    .onFinalize((_e, success) => {
      if (!success) x.value = withTiming(0, { duration: 180 });
    });

  const style = useAnimatedStyle(() => ({ transform: [{ translateX: x.value }] }));

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={[{ flex: 1 }, style]} collapsable={false}>
        {children}
      </Animated.View>
    </GestureDetector>
  );
}
