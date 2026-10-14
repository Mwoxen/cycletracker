/**
 * Adds CloudKit to the iCloud services the app is signed with. `react-native-cloud-storage`
 * already declares the container and the CloudDocuments service (used for the backup); this only
 * adds CloudKit, which the partner sync (modules/cycle-sync) uses. It must be listed BEFORE that
 * plugin in app.config.ts, because mods run in reverse order.
 */
const { withEntitlementsPlist } = require('@expo/config-plugins');

const SERVICES_KEY = 'com.apple.developer.icloud-services';
const CONTAINERS_KEY = 'com.apple.developer.icloud-container-identifiers';

function withCloudKit(config) {
  return withEntitlementsPlist(config, (c) => {
    const bundleId = c.ios && c.ios.bundleIdentifier;
    if (!bundleId) throw new Error('Missing iOS bundle identifier');
    const entitlements = c.modResults;
    const services = new Set(entitlements[SERVICES_KEY] || []);
    services.add('CloudKit');
    entitlements[SERVICES_KEY] = [...services];
    const containers = new Set(entitlements[CONTAINERS_KEY] || []);
    containers.add(`iCloud.${bundleId}`);
    entitlements[CONTAINERS_KEY] = [...containers];
    return c;
  });
}

module.exports = withCloudKit;
