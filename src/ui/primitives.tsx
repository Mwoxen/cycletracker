import { SymbolView } from 'expo-symbols';
import type { PropsWithChildren, ReactNode, RefObject } from 'react';
import {
  Pressable,
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
import { ScrollView } from 'react-native-gesture-handler';
import type { SFSymbol } from 'sf-symbols-typescript';

import { colors, fonts, radius, spacing } from './colors';

/**
 * Page title drawn in the content instead of a native large title, which iOS 26 under native
 * tabs either hides or pushes down. The status-bar distance comes from the scroll view's
 * automatic content inset (native tabs force it on), so nothing is added here.
 */
export function PageTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <View style={{ paddingTop: spacing.xs, gap: 2 }} accessibilityRole="header">
      <Txt variant="largeTitle">{title}</Txt>
      {subtitle ? <Txt variant="footnote">{subtitle}</Txt> : null}
    </View>
  );
}

/** Scrolling screen body. With `title` it draws its own page title and skips the native inset. */
export function Screen({
  children,
  contentContainerStyle,
  title,
  subtitle,
  scrollRef,
  ...rest
}: ScrollViewProps & {
  title?: string;
  subtitle?: string;
  scrollRef?: RefObject<ScrollView | null>;
}) {
  return (
    <ScrollView
      ref={scrollRef}
      style={styles.screen}
      contentInsetAdjustmentBehavior="automatic"
      keyboardDismissMode="on-drag"
      contentContainerStyle={[styles.screenContent, contentContainerStyle]}
      {...rest}>
      {title ? <PageTitle title={title} subtitle={subtitle} /> : null}
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
      maxFontSizeMultiplier={2}
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
export function Card({
  children,
  style,
  onPress,
}: PropsWithChildren<{ style?: StyleProp<ViewStyle>; onPress?: () => void }>) {
  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        style={({ pressed }) => [styles.card, style, pressed && styles.pressed]}>
        {children}
      </Pressable>
    );
  }
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

export function Icon({
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

/**
 * A tappable list row with optional leading symbol or custom lead view (a badge), trailing
 * value and chevron.
 */
export function Row({
  title,
  subtitle,
  value,
  symbol,
  symbolColor,
  lead,
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
  /** Rendered before the text, instead of `symbol` (e.g. a round badge). */
  lead?: ReactNode;
  onPress?: () => void;
  chevron?: boolean;
  trailing?: ReactNode;
  destructive?: boolean;
  last?: boolean;
}) {
  const content = (
    <View style={[styles.row, !last && styles.rowBorder]}>
      {lead ? (
        <View style={styles.rowLead}>{lead}</View>
      ) : symbol ? (
        <View style={styles.rowSymbol}>
          <Icon name={symbol} color={symbolColor ?? colors.tint} />
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
      {chevron ? <Icon name="chevron.right" size={14} color={colors.tertiaryLabel} /> : null}
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
      {symbol ? <Icon name={symbol} color={fg} size={16} weight="semibold" /> : null}
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
          <Txt color={colors.secondaryLabel} style={{ marginRight: spacing.sm }}>
            •
          </Txt>
          <Txt style={{ flex: 1, flexShrink: 1 }}>{item}</Txt>
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
  screenContent: {
    paddingTop: spacing.sm,
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.xl,
    gap: spacing.md,
  },
  // Whole-number line heights: a text frame whose measured height is a whole number survives
  // pixel-grid rounding, so iOS does not drop its last line (facebook/react-native#53450).
  largeTitle: {
    fontSize: 34,
    lineHeight: 41,
    fontWeight: '700',
    letterSpacing: 0.2,
    fontFamily: fonts?.rounded,
  },
  title: { fontSize: 22, lineHeight: 28, fontWeight: '700', fontFamily: fonts?.rounded },
  headline: { fontSize: 17, lineHeight: 22, fontWeight: '600' },
  body: { fontSize: 17, lineHeight: 22 },
  callout: { fontSize: 16, lineHeight: 21 },
  footnote: { fontSize: 13, lineHeight: 18 },
  caption: { fontSize: 12, lineHeight: 16 },
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.card,
    padding: spacing.md,
    gap: spacing.sm,
    shadowColor: '#5A3A30',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  sectionTitle: { marginLeft: spacing.md, marginBottom: -spacing.sm },
  // Rows that hold wrapping text use margins, not `gap`: Yoga measures the text without the gap
  // and clips a line that fills the width to the last few points.
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 11,
    minHeight: 44,
  },
  rowBorder: { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.separator },
  rowSymbol: { width: 28, alignItems: 'center', marginRight: spacing.sm },
  rowLead: { marginRight: spacing.sm + spacing.xs, alignItems: 'center', justifyContent: 'center' },
  rowText: { flex: 1, flexShrink: 1, marginRight: spacing.sm },
  rowValue: { marginRight: spacing.sm + spacing.xs },
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
  bullet: { flexDirection: 'row' },
});
