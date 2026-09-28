import { SymbolView } from 'expo-symbols';
import type { PropsWithChildren, ReactNode } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  type ColorValue,
  type PressableProps,
  type ScrollViewProps,
  type StyleProp,
  type TextProps,
  type ViewStyle,
} from 'react-native';
import type { SFSymbol } from 'sf-symbols-typescript';

import { colors, radius, spacing } from './colors';

/** Scrolling screen body that plays with large titles and native tab insets. */
export function Screen({ children, contentContainerStyle, ...rest }: ScrollViewProps) {
  return (
    <ScrollView
      style={styles.screen}
      contentInsetAdjustmentBehavior="automatic"
      keyboardDismissMode="on-drag"
      contentContainerStyle={[styles.screenContent, contentContainerStyle]}
      {...rest}>
      {children}
    </ScrollView>
  );
}

type TextVariant =
  'largeTitle' | 'title' | 'headline' | 'body' | 'callout' | 'footnote' | 'caption';

export function Txt({
  variant = 'body',
  color,
  style,
  ...rest
}: TextProps & { variant?: TextVariant; color?: ColorValue }) {
  return (
    <Text
      allowFontScaling
      maxFontSizeMultiplier={1.6}
      style={[styles[variant], { color: color ?? textColor[variant] }, style]}
      {...rest}
    />
  );
}

const textColor: Record<TextVariant, ColorValue> = {
  largeTitle: colors.label,
  title: colors.label,
  headline: colors.label,
  body: colors.label,
  callout: colors.label,
  footnote: colors.secondaryLabel,
  caption: colors.secondaryLabel,
};

/** Grouped inset card, like a section in Settings. */
export function Card({ children, style }: PropsWithChildren<{ style?: StyleProp<ViewStyle> }>) {
  return <View style={[styles.card, style]}>{children}</View>;
}

export function SectionTitle({
  children,
  style,
}: PropsWithChildren<{ style?: StyleProp<ViewStyle> }>) {
  return (
    <Txt variant="footnote" style={[styles.sectionTitle, style]}>
      {String(children).toUpperCase()}
    </Txt>
  );
}

export function Symbol({
  name,
  size = 18,
  color = colors.tint,
  weight = 'medium',
}: {
  name: SFSymbol;
  size?: number;
  color?: ColorValue;
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
}) {
  return (
    <SymbolView
      name={name}
      size={size}
      tintColor={color as string}
      weight={weight}
      fallback={<View style={{ width: size, height: size }} />}
    />
  );
}

/** A tappable list row with optional leading symbol, trailing value and chevron. */
export function Row({
  title,
  subtitle,
  value,
  symbol,
  symbolColor,
  onPress,
  chevron = !!onPress,
  trailing,
  destructive,
  last,
}: {
  title: string;
  subtitle?: string;
  value?: string;
  symbol?: SFSymbol;
  symbolColor?: ColorValue;
  onPress?: () => void;
  chevron?: boolean;
  trailing?: ReactNode;
  destructive?: boolean;
  last?: boolean;
}) {
  const content = (
    <View style={[styles.row, !last && styles.rowBorder]}>
      {symbol ? (
        <View style={styles.rowSymbol}>
          <Symbol name={symbol} color={symbolColor ?? colors.tint} />
        </View>
      ) : null}
      <View style={styles.rowText}>
        <Txt color={destructive ? colors.red : colors.label}>{title}</Txt>
        {subtitle ? (
          <Txt variant="footnote" style={{ marginTop: 2 }}>
            {subtitle}
          </Txt>
        ) : null}
      </View>
      {value ? (
        <Txt variant="body" color={colors.secondaryLabel} style={styles.rowValue}>
          {value}
        </Txt>
      ) : null}
      {trailing}
      {chevron ? <Symbol name="chevron.right" size={14} color={colors.tertiaryLabel} /> : null}
    </View>
  );
  if (!onPress) return content;
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      {content}
    </Pressable>
  );
}

export function Button({
  title,
  onPress,
  variant = 'primary',
  symbol,
  disabled,
  style,
}: {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'plain' | 'destructive';
  symbol?: SFSymbol;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}) {
  const bg =
    variant === 'primary'
      ? colors.tint
      : variant === 'destructive'
        ? colors.red
        : variant === 'secondary'
          ? colors.fill
          : 'transparent';
  const fg =
    variant === 'primary' || variant === 'destructive'
      ? colors.white
      : variant === 'plain'
        ? colors.tint
        : colors.label;
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: bg, opacity: disabled ? 0.4 : pressed ? 0.7 : 1 },
        style,
      ]}>
      {symbol ? <Symbol name={symbol} color={fg} size={16} weight="semibold" /> : null}
      <Txt variant="headline" color={fg}>
        {title}
      </Txt>
    </Pressable>
  );
}

export function Chip({
  label,
  selected,
  onPress,
  color = colors.tint,
}: {
  label: string;
  selected?: boolean;
  onPress?: PressableProps['onPress'];
  color?: ColorValue;
}) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected: !!selected }}
      style={({ pressed }) => [
        styles.chip,
        { backgroundColor: selected ? color : colors.fill, opacity: pressed ? 0.7 : 1 },
      ]}>
      <Txt variant="callout" color={selected ? colors.white : colors.label}>
        {label}
      </Txt>
    </Pressable>
  );
}

export function Badge({ label, color }: { label: string; color: ColorValue }) {
  return (
    <View style={[styles.badge, { backgroundColor: color }]}>
      <Txt variant="caption" color={colors.white} style={{ fontWeight: '600' }}>
        {label}
      </Txt>
    </View>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <View style={{ gap: spacing.sm }}>
      {items.map((item, i) => (
        <View key={i} style={styles.bullet}>
          <Txt color={colors.secondaryLabel}>•</Txt>
          <Txt style={{ flex: 1 }}>{item}</Txt>
        </View>
      ))}
    </View>
  );
}

export function Paragraphs({ items }: { items: string[] }) {
  return (
    <View style={{ gap: spacing.md }}>
      {items.map((p, i) => (
        <Txt key={i} style={{ lineHeight: 24 }}>
          {p}
        </Txt>
      ))}
    </View>
  );
}

export function Gap({ size = spacing.md }: { size?: number }) {
  return <View style={{ height: size }} />;
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  screenContent: { padding: spacing.md, gap: spacing.md, paddingBottom: spacing.xl },
  largeTitle: { fontSize: 34, fontWeight: '700', letterSpacing: 0.4 },
  title: { fontSize: 22, fontWeight: '700' },
  headline: { fontSize: 17, fontWeight: '600' },
  body: { fontSize: 17 },
  callout: { fontSize: 16 },
  footnote: { fontSize: 13 },
  caption: { fontSize: 12 },
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.card,
    padding: spacing.md,
    gap: spacing.sm,
  },
  sectionTitle: { marginLeft: spacing.md, marginBottom: -spacing.sm },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 11,
    gap: spacing.sm,
    minHeight: 44,
  },
  rowBorder: { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.separator },
  rowSymbol: { width: 28, alignItems: 'center' },
  rowText: { flex: 1 },
  rowValue: { marginRight: spacing.xs },
  pressed: { opacity: 0.6 },
  button: {
    flexDirection: 'row',
    gap: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: spacing.md,
    borderRadius: radius.card,
    minHeight: 50,
  },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: radius.chip,
    minHeight: 36,
    justifyContent: 'center',
  },
  badge: { paddingVertical: 3, paddingHorizontal: 8, borderRadius: 6 },
  bullet: { flexDirection: 'row', gap: spacing.sm },
});
