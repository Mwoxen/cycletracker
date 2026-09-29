import * as Haptics from 'expo-haptics';
import { Pressable, StyleSheet, View } from 'react-native';

import { colors, radius, spacing } from './colors';
import { Icon, Txt } from './primitives';

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
  const step = (delta: number) => {
    const next = Math.min(max, Math.max(min, value + delta));
    if (next === value) return;
    void Haptics.selectionAsync();
    onChange(next);
  };
  return (
    <View style={styles.container}>
      <Txt variant="body" color={colors.secondaryLabel} style={styles.value}>
        {format ? format(value) : String(value)}
      </Txt>
      <View style={styles.buttons}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="−"
          onPress={() => step(-1)}
          disabled={value <= min}
          style={({ pressed }) => [
            styles.button,
            styles.left,
            pressed && styles.pressed,
            value <= min && styles.disabled,
          ]}>
          <Icon name="minus" size={16} color={colors.label} weight="semibold" />
        </Pressable>
        <View style={styles.divider} />
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="+"
          onPress={() => step(1)}
          disabled={value >= max}
          style={({ pressed }) => [
            styles.button,
            styles.right,
            pressed && styles.pressed,
            value >= max && styles.disabled,
          ]}>
          <Icon name="plus" size={16} color={colors.label} weight="semibold" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  value: { minWidth: 60, textAlign: 'right' },
  buttons: {
    flexDirection: 'row',
    backgroundColor: colors.fill,
    borderRadius: 8,
    overflow: 'hidden',
  },
  button: { width: 40, height: 32, alignItems: 'center', justifyContent: 'center' },
  left: { borderTopLeftRadius: radius.card, borderBottomLeftRadius: radius.card },
  right: { borderTopRightRadius: radius.card, borderBottomRightRadius: radius.card },
  divider: {
    width: StyleSheet.hairlineWidth,
    backgroundColor: colors.separator,
    marginVertical: 6,
  },
  pressed: { opacity: 0.5 },
  disabled: { opacity: 0.3 },
});
