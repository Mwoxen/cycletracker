import { useRouter } from 'expo-router';
import type { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

export const TABS = ['home', 'learn', 'calendar', 'settings'] as const;
export type TabName = (typeof TABS)[number];

const SWIPE_DISTANCE = 60;
const SWIPE_VELOCITY = 500;

/**
 * Lets a horizontal swipe move to the neighbouring tab, so the tab bar is not the only way
 * between "I dag", "Lær", "Kalender" and "Indstillinger". Vertical scrolling wins over the gesture.
 */
export function TabSwipe({ tab, children }: PropsWithChildren<{ tab: TabName }>) {
  const router = useRouter();
  const index = TABS.indexOf(tab);

  const go = (direction: -1 | 1) => {
    const next = TABS[index + direction];
    if (next) router.navigate(`/(tabs)/${next}`);
  };

  const pan = Gesture.Pan()
    .runOnJS(true)
    .activeOffsetX([-24, 24])
    .failOffsetY([-12, 12])
    .onEnd((e) => {
      const far = Math.abs(e.translationX) > SWIPE_DISTANCE;
      const fast = Math.abs(e.velocityX) > SWIPE_VELOCITY;
      if (!far && !fast) return;
      go(e.translationX < 0 ? 1 : -1);
    });

  return (
    <GestureDetector gesture={pan}>
      <View style={{ flex: 1 }} collapsable={false}>
        {children}
      </View>
    </GestureDetector>
  );
}
