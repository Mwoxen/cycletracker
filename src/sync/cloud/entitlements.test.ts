import { execFileSync } from 'node:child_process';

// The CloudKit service has to survive alongside the one react-native-cloud-storage sets; the
// order of the plugins in app.config.ts decides that, so check the resolved result.
describe('iCloud entitlements', () => {
  it('declares both CloudDocuments (backup) and CloudKit (partner sync) for one container', () => {
    const out = execFileSync('npx', ['expo', 'config', '--type', 'introspect', '--json'], {
      encoding: 'utf8',
      env: { ...process.env, NO_COLOR: '1' },
    });
    const config = JSON.parse(out.slice(out.indexOf('{')));
    const e = config.ios.entitlements;
    expect(e['com.apple.developer.icloud-services']).toEqual(
      expect.arrayContaining(['CloudDocuments', 'CloudKit']),
    );
    expect(e['com.apple.developer.icloud-container-identifiers']).toEqual([
      'iCloud.com.mwoxen.cycletracker',
    ]);
  });
});
