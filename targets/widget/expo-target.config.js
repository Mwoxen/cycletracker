/** @type {import('@bacons/apple-targets/app.plugin').ConfigFunction} */
module.exports = (config) => ({
  type: 'widget',
  name: 'CycleWidget',
  displayName: 'Cycle Tracker',
  bundleIdentifier: '.widget',
  deploymentTarget: '17.0',
  frameworks: ['SwiftUI', 'WidgetKit'],
  // Keep in step with `palette` and `phaseHex` in src/ui/colors.ts (docs/design/README.md).
  colors: {
    $widgetBackground: { light: '#F8F4F6', dark: '#161218' },
    $accent: { light: '#B04D59', dark: '#EC8A92' },
    menstrual: { light: '#B04D59', dark: '#EC8A92' },
    follicular: { light: '#218373', dark: '#6BC4B3' },
    ovulation: { light: '#AA732B', dark: '#E7B369' },
    luteal: { light: '#725CA9', dark: '#AA95E8' },
    label: { light: '#1D161B', dark: '#F2EAEE' },
    secondaryLabel: { light: '#665A61', dark: '#A3969E' },
  },
  entitlements: {
    'com.apple.security.application-groups':
      config.ios?.entitlements?.['com.apple.security.application-groups'] ?? [],
  },
});
