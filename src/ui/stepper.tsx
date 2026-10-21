import * as Haptics from 'expo-haptics';
import { Pressable, StyleSheet, View } from 'react-native';

import { colors, radius } from './colors';
import { Icon, Txt } from './primitives';
import { usePhaseTheme } from './theme';

/** Capsule stepper for a row: [−] value [+], hair outline, signs in today's accent. */
export function Stepper({
  value,
  min,
  max,
  onChange,
  format,
}: {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  format?: (value: number) => string;
}) {
  const theme = usePhaseTheme();
  const step = (delta: number) => {
    const next = Math.min(max, Math.max(min, value + delta));
    if (next === value) return;
    void Haptics.selectionAsync();
    onChange(next);
  };
  return (
    <View style={styles.container}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="−"
        onPress={() => step(-1)}
        disabled={value <= min}
        style={({ pressed }) => [styles.button, pressed && styles.pressed, value <= min && styles.disabled]}>
        <Icon name="minus" size={15} color={theme.accent} weight="semibold" />
      </Pressable>
      <Txt variant="headline" style={styles.value}>
        {format ? format(value) : String(value)}
      </Txt>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="+"
        onPress={() => step(1)}
        disabled={value >= max}
        style={({ pressed }) => [styles.button, pressed && styles.pressed, value >= max && styles.disabled]}>
        <Icon name="plus" size={15} color={theme.accent} weight="semibold" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.separator,
    borderRadius: radius.chip,
    height: 34,
    overflow: 'hidden',
  },
  button: { width: 38, height: 34, alignItems: 'center', justifyContent: 'center' },
  value: { minWidth: 64, textAlign: 'center', fontSize: 14 },
  pressed: { opacity: 0.5 },
  disabled: { opacity: 0.3 },
});
