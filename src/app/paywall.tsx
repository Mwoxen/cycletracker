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
import { Bullets, Button, Card, Icon, Txt } from '@/ui/primitives';
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

  return (
    <ScrollView style={styles.sheet} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View style={[styles.badge, { backgroundColor: theme.accent }]}>
          <Icon name="sparkles" size={24} color={colors.onAccent} />
        </View>
        <Pressable onPress={() => router.back()} hitSlop={12} accessibilityRole="button">
          <Txt variant="headline" color={theme.accent}>
            {t('common.close')}
          </Txt>
        </Pressable>
      </View>
      <Pressable
        onLongPress={() =>
          void describeStore(packages ?? []).then((text) => Alert.alert('Store', text))
        }
        delayLongPress={800}
        accessible={false}>
        <Txt variant="boxLabel" color={theme.accent} style={styles.kicker}>
          {t('plus.name').toUpperCase()}
        </Txt>
      </Pressable>
      <Txt variant="largeTitle">{t('plus.title')}</Txt>
      <Txt color={colors.secondaryLabel}>{t('plus.subtitle')}</Txt>
      <Card>
        <Bullets items={t('plus.perks', { returnObjects: true }) as string[]} />
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
              const days = trialDays(pkg);
              return (
                <Pressable
                  key={pkg.identifier}
                  onPress={() => {
                    void Haptics.selectionAsync();
                    setSelected(pkg.identifier);
                  }}
                  accessibilityRole="radio"
                  accessibilityState={{ selected: isSelected }}
                  style={[styles.option, isSelected && { borderColor: theme.accent }]}>
                  <View style={{ flex: 1, flexShrink: 1, marginRight: spacing.sm }}>
                    <Txt variant="headline">{packageLabel(pkg, t)}</Txt>
                    <Txt variant="footnote">
                      {pkg.product.priceString} {periodLabel(pkg, t)}
                      {days ? ` · ${t('plus.trialDays', { n: days })}` : ''}
                    </Txt>
                  </View>
                  {pkg.packageType === PACKAGE_TYPE.ANNUAL ? (
                    <View style={styles.best}>
                      <Txt variant="caption" color={colors.onAccent} style={styles.bestText}>
                        {t('plus.bestValue')}
                      </Txt>
                    </View>
                  ) : null}
                  <Icon
                    name={isSelected ? 'checkmark.circle.fill' : 'circle'}
                    size={22}
                    color={isSelected ? theme.accent : colors.tertiaryLabel}
                  />
                </Pressable>
              );
            })}
          </View>
          {chosen ? (
            <Txt variant="footnote" style={styles.center}>
              {trial
                ? t('plus.trial', {
                    n: trial,
                    price: chosen.product.priceString,
                    period: periodLabel(chosen, t),
                  })
                : `${chosen.product.priceString} ${periodLabel(chosen, t)}`}
            </Txt>
          ) : null}
          <Button
            title={trial ? t('plus.buyTrial', { n: trial }) : t('plus.buy')}
            onPress={() => void buy()}
            disabled={busy || !chosen}
          />
        </>
      )}

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
  content: { padding: spacing.md, paddingTop: spacing.lg, paddingBottom: 60, gap: spacing.md },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  badge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  kicker: { marginBottom: -spacing.sm },
  options: { gap: spacing.sm },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: radius.card,
    padding: spacing.md,
    borderWidth: 2,
    borderColor: colors.separator,
  },
  bestText: { fontFamily: fontFor(700) },
  best: {
    backgroundColor: colors.green,
    borderRadius: radius.chip,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginRight: spacing.sm,
  },
  links: { flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' },
  center: { textAlign: 'center' },
});
