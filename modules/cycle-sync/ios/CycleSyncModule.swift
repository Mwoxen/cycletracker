import CloudKit
import ExpoModulesCore

/// Keeps the two phones in step through a private CloudKit share.
///
/// The cycle owner creates a custom zone with one root record and shares it (CKShare); the
/// partner accepts the link. Each side then writes only its own record (`from-owner` /
/// `from-partner`) and reads the other's, so the phones never overwrite each other. The
/// JavaScript side merges the data; this file only moves strings.
///
/// Records (deployed to the Production schema in the CloudKit Dashboard):
///   CoupleRoot  { title: String }
///   CoupleData  { payload: String, updatedAt: Int64 }
public class CycleSyncModule: Module {
  private static let containerId = "iCloud.com.mwoxen.cycletracker"
  private static let zoneName = "couple"
  private static let rootName = "root"
  private static let rootType = "CoupleRoot"
  private static let dataType = "CoupleData"

  private enum Key {
    static let role = "cyclesync.role"
    static let zoneName = "cyclesync.zoneName"
    static let zoneOwner = "cyclesync.zoneOwner"
    static let shareName = "cyclesync.shareName"
  }

  private var container: CKContainer { CKContainer(identifier: Self.containerId) }
  private let defaults = UserDefaults.standard

  public func definition() -> ModuleDefinition {
    Name("CycleSync")

    AsyncFunction("accountStatus") { () async throws -> String in
      switch try await self.container.accountStatus() {
      case .available: return "available"
      case .noAccount: return "noAccount"
      case .restricted: return "restricted"
      default: return "unknown"
      }
    }

    AsyncFunction("state") { () async -> [String: Any] in
      let role = self.defaults.string(forKey: Key.role) ?? ""
      var participants = 0
      if role == "owner", let zone = self.storedZone() {
        participants = await self.acceptedParticipants(in: zone)
      }
      return ["role": role, "participants": participants]
    }

    AsyncFunction("createShare") { () async throws -> String in
      try await self.createShare()
    }

    AsyncFunction("joinShare") { (url: String) async throws in
      try await self.joinShare(url)
    }

    AsyncFunction("write") { (name: String, payload: String) async throws in
      try await self.write(name: name, payload: payload)
    }

    AsyncFunction("read") { (name: String) async throws -> [String: Any] in
      try await self.read(name: name)
    }

    AsyncFunction("stop") { () async throws in
      await self.stop()
    }
  }

  // MARK: - Where things live

  private func isOwner() -> Bool { defaults.string(forKey: Key.role) == "owner" }

  /// The owner works in the private database; the partner sees the same zone in the shared one.
  private func database() -> CKDatabase {
    isOwner() ? container.privateCloudDatabase : container.sharedCloudDatabase
  }

  private func storedZone() -> CKRecordZone.ID? {
    guard let name = defaults.string(forKey: Key.zoneName),
      let owner = defaults.string(forKey: Key.zoneOwner)
    else { return nil }
    return CKRecordZone.ID(zoneName: name, ownerName: owner)
  }

  private func fail(_ message: String) -> Exception {
    GenericException(message)
  }

  // MARK: - Owner

  private func createShare() async throws -> String {
    let db = container.privateCloudDatabase

    // Reuse an existing share instead of making a second one.
    if isOwner(), let zone = storedZone(), let shareName = defaults.string(forKey: Key.shareName) {
      let id = CKRecord.ID(recordName: shareName, zoneID: zone)
      if let share = try? await db.record(for: id) as? CKShare, let url = share.url {
        return url.absoluteString
      }
    }

    let zone = CKRecordZone(zoneName: Self.zoneName)
    _ = try await db.save(zone)

    let rootId = CKRecord.ID(recordName: Self.rootName, zoneID: zone.zoneID)
    let root = CKRecord(recordType: Self.rootType, recordID: rootId)
    root["title"] = "Cycle Tracker" as CKRecordValue

    let share = CKShare(rootRecord: root)
    share[CKShare.SystemFieldKey.title] = "Cycle Tracker" as CKRecordValue
    // Anyone holding the link can join and write their own record; the link is only given to the partner.
    share.publicPermission = .readWrite

    let (saved, _) = try await db.modifyRecords(saving: [root, share], deleting: [])
    var savedShare: CKShare?
    for (_, result) in saved {
      if case .success(let record) = result, let s = record as? CKShare { savedShare = s }
    }
    guard let url = (savedShare ?? share).url else {
      throw fail("The share link was not created")
    }

    defaults.set("owner", forKey: Key.role)
    defaults.set(zone.zoneID.zoneName, forKey: Key.zoneName)
    defaults.set(zone.zoneID.ownerName, forKey: Key.zoneOwner)
    defaults.set((savedShare ?? share).recordID.recordName, forKey: Key.shareName)
    return url.absoluteString
  }

  private func acceptedParticipants(in zone: CKRecordZone.ID) async -> Int {
    guard let shareName = defaults.string(forKey: Key.shareName) else { return 0 }
    let id = CKRecord.ID(recordName: shareName, zoneID: zone)
    guard let share = try? await container.privateCloudDatabase.record(for: id) as? CKShare else {
      return 0
    }
    return share.participants.filter {
      $0.role != .owner && $0.acceptanceStatus == .accepted
    }.count
  }

  // MARK: - Partner

  private func joinShare(_ urlString: String) async throws {
    guard let url = URL(string: urlString.trimmingCharacters(in: .whitespacesAndNewlines)),
      url.host?.hasSuffix("icloud.com") == true
    else { throw fail("That is not an iCloud share link") }

    let metadata = try await container.shareMetadata(for: url, shouldFetchRootRecord: false)
    _ = try await container.accept(metadata)

    let zone = metadata.share.recordID.zoneID
    defaults.set("participant", forKey: Key.role)
    defaults.set(zone.zoneName, forKey: Key.zoneName)
    defaults.set(zone.ownerName, forKey: Key.zoneOwner)
    defaults.set(metadata.share.recordID.recordName, forKey: Key.shareName)
  }

  // MARK: - Both sides

  private func ownRecordName(_ name: String) -> CKRecord.ID? {
    guard let zone = storedZone() else { return nil }
    return CKRecord.ID(recordName: name, zoneID: zone)
  }

  private func write(name: String, payload: String) async throws {
    guard let id = ownRecordName(name), let zone = storedZone() else {
      throw fail("Not connected")
    }
    let db = database()
    let record: CKRecord
    do {
      record = try await db.record(for: id)
    } catch let error as CKError where error.code == .unknownItem {
      record = CKRecord(recordType: Self.dataType, recordID: id)
      // Child of the shared root, so the share covers it.
      record.parent = CKRecord.Reference(
        recordID: CKRecord.ID(recordName: Self.rootName, zoneID: zone), action: .none)
    }
    record["payload"] = payload as CKRecordValue
    record["updatedAt"] = Int64(Date().timeIntervalSince1970 * 1000) as CKRecordValue
    let (saved, _) = try await db.modifyRecords(
      saving: [record], deleting: [], savePolicy: .changedKeys)
    for (_, result) in saved {
      if case .failure(let error) = result { throw error }
    }
  }

  private func read(name: String) async throws -> [String: Any] {
    guard let id = ownRecordName(name) else { throw fail("Not connected") }
    do {
      let record = try await database().record(for: id)
      guard let payload = record["payload"] as? String else { return ["exists": false] }
      let updatedAt = (record["updatedAt"] as? Int64) ?? 0
      return ["exists": true, "payload": payload, "updatedAt": Double(updatedAt)]
    } catch let error as CKError where error.code == .unknownItem || error.code == .zoneNotFound {
      return ["exists": false]
    }
  }

  private func stop() async {
    if let zone = storedZone() {
      if isOwner() {
        // Deleting the zone removes the share and everything in it.
        _ = try? await container.privateCloudDatabase.deleteRecordZone(withID: zone)
      } else if let shareName = defaults.string(forKey: Key.shareName) {
        // A partner leaves a share by deleting the share record from the shared database.
        let id = CKRecord.ID(recordName: shareName, zoneID: zone)
        _ = try? await container.sharedCloudDatabase.deleteRecord(withID: id)
      }
    }
    for key in [Key.role, Key.zoneName, Key.zoneOwner, Key.shareName] {
      defaults.removeObject(forKey: key)
    }
  }
}
