import * as Haptics from 'expo-haptics';
import { Pressable, StyleSheet, View } from 'react-native';

import { colors, fontFor, radius } from './colors';
import { Txt } from './primitives';
import { usePhaseTheme } from './theme';

/** Compact pill segmented control for the trailing side of a settings row. */
export function Segmented<T extends string>({
  options,
  value,
  onChange,
  stretch,
  accent,
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
  /** Fill the available width with equal segments (a control on its own, not in a row). */
  stretch?: boolean;
  /** Fill the selected segment with today's phase colour instead of the surface. */
  accent?: boolean;
}) {
  const theme = usePhaseTheme();
  const select = (next: T) => {
    if (next === value) return;
    void Haptics.selectionAsync();
    onChange(next);
  };
  return (
    <View style={styles.track} accessibilityRole="tablist">
      {options.map((o) => {
        const selected = o.value === value;
        return (
          <Pressable
            key={o.value}
            onPress={() => select(o.value)}
            accessibilityRole="button"
            accessibilityState={{ selected }}
            style={({ pressed }) => [
              styles.segment,
              stretch && styles.stretch,
              selected && styles.selected,
              selected && accent && { backgroundColor: theme.accent, borderColor: theme.accent },
              pressed && !selected && styles.pressed,
            ]}>
            <Txt
              variant="footnote"
              color={selected ? (accent ? colors.onAccent : colors.label) : colors.secondaryLabel}
              style={styles.label}>
              {o.label}
            </Txt>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    flexDirection: 'row',
    backgroundColor: colors.fill,
    borderRadius: radius.chip,
    padding: 2,
  },
  segment: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: radius.chip,
    minHeight: 28,
    justifyContent: 'center',
  },
  stretch: { flex: 1, alignItems: 'center', minHeight: 34 },
  selected: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.separator,
  },
  pressed: { opacity: 0.6 },
  label: { fontFamily: fontFor(600) },
});
