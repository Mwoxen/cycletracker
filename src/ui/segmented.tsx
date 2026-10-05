import * as Haptics from 'expo-haptics';
import { Pressable, StyleSheet, View } from 'react-native';

import { colors, fontFor, radius } from './colors';
import { Txt } from './primitives';

/** Compact pill segmented control for the trailing side of a settings row. */
export function Segmented<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
}) {
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
              selected && styles.selected,
              pressed && !selected && styles.pressed,
            ]}>
            <Txt
              variant="footnote"
              color={selected ? colors.label : colors.secondaryLabel}
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
  selected: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.separator,
  },
  pressed: { opacity: 0.6 },
  label: { fontFamily: fontFor(600) },
});
