import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { PACKAGE_TYPE, type PurchasesPackage } from 'react-native-purchases';

import { usePlan } from '@/entitlements';
import {
  describeStore,
  loadPackages,
  purchase,
  purchasesAvailable,
  redeemOfferCode,
  restore,
} from '@/purchases';
import { colors, fontFor, radius, spacing } from '@/ui/colors';
import { Button, Card, Icon, Txt } from '@/ui/primitives';
import { usePhaseTheme } from '@/ui/theme';

const SITE = 'https://mwoxen.github.io/cycletracker';

function packageLabel(pkg: PurchasesPackage, t: (key: string) => string): string {
  if (pkg.packageType === PACKAGE_TYPE.ANNUAL) return t('plus.yearly');
  if (pkg.packageType === PACKAGE_TYPE.MONTHLY) return t('plus.monthly');
  return pkg.product.title;
}

function periodLabel(pkg: PurchasesPackage, t: (key: string) => string): string {
  return pkg.packageType === PACKAGE_TYPE.ANNUAL ? t('plus.perYear') : t('plus.perMonth');
}

/** Days of a free introductory period, when the product has one. */
function trialDays(pkg: PurchasesPackage): number | undefined {
  const intro = pkg.product.introPrice;
  if (!intro || intro.price !== 0) return undefined;
  const unit = intro.periodUnit.toUpperCase();
  const n = intro.periodNumberOfUnits;
  if (unit === 'DAY') return n;
  if (unit === 'WEEK') return n * 7;
  if (unit === 'MONTH') return n * 30;
  return undefined;
}

/**
 * The Plus sheet: what the free week leaves out, the perks as check rows, yearly and monthly
 * as selectable cards, one solid button, and the small print.
 */
export default function PaywallScreen() {
  const { t } = useTranslation();
  const theme = usePhaseTheme();
  const router = useRouter();
  const plan = usePlan();
  const [packages, setPackages] = useState<PurchasesPackage[] | undefined>();
  const [failed, setFailed] = useState(false);
  const [selected, setSelected] = useState<string | undefined>();
  const [busy, setBusy] = useState(false);

  // Loading is promise-based so no state is set synchronously inside the effect.
  const load = () =>
    loadPackages()
      .then((list) => {
        setPackages(list);
        setSelected(list[0]?.identifier);
        setFailed(false);
      })
      .catch(() => {
        setFailed(true);
        setPackages([]);
      });

  useEffect(() => {
    void load();
  }, []);

  useEffect(() => {
    if (plan === 'plus') router.back();
  }, [plan, router]);

  const chosen = packages?.find((p) => p.identifier === selected);

  const buy = async () => {
    if (!chosen) return;
    setBusy(true);
    const outcome = await purchase(chosen);
    setBusy(false);
    if (outcome === 'purchased') {
      void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      Alert.alert(t('plus.name'), t('plus.purchased'));
    } else if (outcome === 'failed') {
      Alert.alert(t('plus.name'), t('plus.purchaseFailed'));
    }
  };

  const restorePurchases = async () => {
    setBusy(true);
    try {
      const ok = await restore();
      Alert.alert(t('plus.name'), ok ? t('plus.restored') : t('plus.nothingToRestore'));
    } catch {
      Alert.alert(t('plus.name'), t('plus.purchaseFailed'));
    } finally {
      setBusy(false);
    }
  };

  const open = (path: string) => void WebBrowser.openBrowserAsync(`${SITE}/${path}`);
  const trial = chosen ? trialDays(chosen) : undefined;

  const detail = (pkg: PurchasesPackage) => {
    const days = trialDays(pkg);
    const base = `${pkg.product.priceString} ${periodLabel(pkg, t)}`;
    const extra =
      pkg.packageType === PACKAGE_TYPE.ANNUAL
        ? pkg.product.pricePerMonthString
          ? t('plus.equalsPerMonth', { price: pkg.product.pricePerMonthString })
          : undefined
        : t('plus.cancelAnytime');
    return [base, days ? t('plus.trialDays', { n: days }) : extra].filter(Boolean).join(' · ');
  };

  return (
    <ScrollView style={styles.sheet} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} hitSlop={12} accessibilityRole="button">
          <Txt variant="headline" color={theme.accent} style={styles.close}>
            {t('common.close')}
          </Txt>
        </Pressable>
      </View>
      <Pressable
        onLongPress={() =>
          void describeStore(packages ?? []).then((text) => Alert.alert('Store', text))
        }
        delayLongPress={600}
        accessible={false}
        style={styles.intro}>
        <View style={[styles.badge, { backgroundColor: theme.soft }]}>
          <Icon name="sparkles" size={26} color={theme.accent} />
        </View>
        <Txt variant="boxLabel" color={theme.accent}>
          {t('plus.name').toUpperCase()}
        </Txt>
        <Txt variant="hero" accessibilityRole="header">
          {t('plus.title')}
        </Txt>
        <Txt color={colors.secondaryLabel}>{t('plus.lead')}</Txt>
      </Pressable>

      <Card style={styles.list}>
        {(t('plus.perksShort', { returnObjects: true }) as string[]).map((perk, i, all) => (
          <View key={perk} style={[styles.perk, i < all.length - 1 && styles.perkBorder]}>
            <View style={[styles.check, { backgroundColor: theme.soft }]}>
              <Icon name="checkmark" size={12} color={theme.accent} weight="bold" />
            </View>
            <Txt style={styles.perkText}>{perk}</Txt>
          </View>
        ))}
      </Card>

      {!purchasesAvailable ? (
        <Card>
          <Txt color={colors.secondaryLabel}>{t('plus.unavailable')}</Txt>
        </Card>
      ) : packages === undefined ? (
        <Card>
          <Txt color={colors.secondaryLabel}>{t('common.loading')}</Txt>
        </Card>
      ) : failed || packages.length === 0 ? (
        <Card>
          <Txt color={colors.secondaryLabel}>{t('plus.loadFailed')}</Txt>
          <Button title={t('plus.retry')} variant="secondary" onPress={() => void load()} />
        </Card>
      ) : (
        <>
          <View style={styles.options}>
            {packages.map((pkg) => {
              const isSelected = pkg.identifier === selected;
              return (
                <Pressable
                  key={pkg.identifier}
                  onPress={() => {
                    void Haptics.selectionAsync();
                    setSelected(pkg.identifier);
                  }}
                  accessibilityRole="radio"
                  accessibilityState={{ selected: isSelected }}
                  style={[
                    styles.option,
                    isSelected && { borderColor: theme.accent, borderWidth: 1.5 },
                  ]}>
                  <View style={{ flex: 1, flexShrink: 1, marginRight: spacing.sm, gap: 3 }}>
                    <View style={styles.optionHead}>
                      <Txt variant="headline">{packageLabel(pkg, t)}</Txt>
                      {pkg.packageType === PACKAGE_TYPE.ANNUAL ? (
                        <View style={[styles.best, { backgroundColor: theme.accent }]}>
                          <Txt variant="tag" color={colors.onAccent}>
                            {t('plus.bestValue').toUpperCase()}
                          </Txt>
                        </View>
                      ) : null}
                    </View>
                    <Txt variant="footnote">{detail(pkg)}</Txt>
                  </View>
                  <Icon
                    name={isSelected ? 'checkmark.circle.fill' : 'circle'}
                    size={24}
                    color={isSelected ? theme.accent : colors.tertiaryLabel}
                  />
                </Pressable>
              );
            })}
          </View>
          <Button
            title={trial ? t('plus.buyTrial', { n: trial }) : t('plus.buy')}
            variant="filled"
            onPress={() => void buy()}
            disabled={busy || !chosen}
          />
          {chosen ? (
            <Txt variant="footnote" style={[styles.center, styles.note]}>
              {trial
                ? t('plus.trial', {
                    n: trial,
                    price: chosen.product.priceString,
                    period: periodLabel(chosen, t),
                  })
                : t('plus.renewsNote', {
                    price: chosen.product.priceString,
                    period: periodLabel(chosen, t),
                  })}
            </Txt>
          ) : null}
        </>
      )}

      <View style={[styles.soft, { backgroundColor: theme.soft }]}>
        <Icon name="heart" size={20} color={theme.accent} />
        <Txt variant="footnote" color={colors.label} style={{ flex: 1, flexShrink: 1 }}>
          {t('plus.herSideFree')}
        </Txt>
      </View>

      <View style={styles.links}>
        <Button
          title={t('plus.restore')}
          variant="plain"
          onPress={() => void restorePurchases()}
          disabled={busy || !purchasesAvailable}
        />
        <Button
          title={t('plus.redeem')}
          variant="plain"
          onPress={() => void redeemOfferCode()}
          disabled={!purchasesAvailable}
        />
      </View>
      <Txt variant="caption" style={styles.center}>
        {t('plus.legal')}
      </Txt>
      <View style={styles.links}>
        <Button title={t('plus.terms')} variant="plain" onPress={() => open('terms.html')} />
        <Button title={t('plus.privacy')} variant="plain" onPress={() => open('privacy.html')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sheet: { flex: 1, backgroundColor: colors.background },
  content: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: 60,
    gap: spacing.lg - 4,
  },
  header: { flexDirection: 'row', justifyContent: 'flex-end' },
  close: { fontFamily: fontFor(700) },
  badge: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xs,
  },
  intro: { gap: 10, alignItems: 'flex-start' },
  list: { padding: 0, paddingHorizontal: spacing.card },
  perk: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, minHeight: 44 },
  perkBorder: { borderBottomWidth: 1, borderBottomColor: colors.separator },
  check: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  perkText: { flex: 1, flexShrink: 1, marginLeft: 12 },
  options: { gap: 10 },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: radius.card,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.card,
    borderWidth: 1,
    borderColor: colors.separator,
  },
  optionHead: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  best: { borderRadius: radius.chip, paddingHorizontal: 8, paddingVertical: 3 },
  note: { marginTop: -spacing.sm },
  soft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderRadius: radius.card,
    paddingVertical: 14,
    paddingHorizontal: spacing.card,
  },
  links: { flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' },
  center: { textAlign: 'center' },
});
