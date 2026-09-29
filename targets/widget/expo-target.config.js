/** @type {import('@bacons/apple-targets/app.plugin').ConfigFunction} */
module.exports = (config) => ({
  type: 'widget',
  name: 'CycleWidget',
  displayName: 'Cycle Tracker',
  bundleIdentifier: '.widget',
  deploymentTarget: '17.0',
  frameworks: ['SwiftUI', 'WidgetKit'],
  colors: {
    $widgetBackground: { light: '#FBF7F2', dark: '#161311' },
    $accent: { light: '#C4655A', dark: '#E08A7E' },
    menstrual: { light: '#D96C6C', dark: '#E58787' },
    follicular: { light: '#7FA37A', dark: '#97BD92' },
    ovulation: { light: '#E0A458', dark: '#EAB878' },
    luteal: { light: '#8C7AA6', dark: '#A896C2' },
    label: { light: '#2A211D', dark: '#F4EDE8' },
    secondaryLabel: { light: '#7A6A63', dark: '#B7A79F' },
  },
  entitlements: {
    'com.apple.security.application-groups':
      config.ios?.entitlements?.['com.apple.security.application-groups'] ?? [],
  },
});
