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
    /// "record": the share hangs on a root record; "zone": the whole zone is shared.
    static let mode = "cyclesync.mode"
  }

  private var container: CKContainer { CKContainer(identifier: Self.containerId) }
  private let defaults = UserDefaults.standard
  /// Whether this launch has already looked in iCloud for a connection the defaults do not know.
  private var rediscovered = false

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
      await self.rediscover()
      let role = self.defaults.string(forKey: Key.role) ?? ""
      var participants = 0
      if role == "owner", let zone = self.storedZone() {
        participants = await self.acceptedParticipants(in: zone)
      }
      return ["role": role, "participants": participants]
    }

    AsyncFunction("createShare") { () async throws -> String in
      try await self.reporting { try await self.createShare() }
    }

    AsyncFunction("joinShare") { (url: String) async throws in
      try await self.reporting { try await self.joinShare(url) }
    }

    AsyncFunction("write") { (name: String, payload: String) async throws in
      try await self.reporting { try await self.write(name: name, payload: payload) }
    }

    AsyncFunction("read") { (name: String) async throws -> [String: Any] in
      try await self.reporting { try await self.read(name: name) }
    }

    AsyncFunction("stop") { () async throws in
      await self.stop()
    }
  }

  // MARK: - Where things live

  /// The connection lives in iCloud, not on the phone: after a reinstall (or a restore from
  /// backup) the defaults are empty while her zone and share, or his accepted share, still exist.
  /// Looks once per launch, only while nothing is stored: first for a zone of ours in the private
  /// database (she), then for one in the shared database (he).
  private func rediscover() async {
    if rediscovered || defaults.string(forKey: Key.role) != nil { return }
    rediscovered = true
    let privateZone = CKRecordZone.ID(zoneName: Self.zoneName, ownerName: CKCurrentUserDefaultName)
    if let found = await findShare(in: container.privateCloudDatabase, zone: privateZone) {
      _ = remember(found.share, zone: privateZone, mode: found.mode)
      return
    }
    guard let zones = try? await container.sharedCloudDatabase.allRecordZones(),
      let zone = zones.first(where: { $0.zoneID.zoneName == Self.zoneName }),
      let found = await findShare(in: container.sharedCloudDatabase, zone: zone.zoneID)
    else { return }
    rememberParticipant(found.share, zone: zone.zoneID, mode: found.mode)
  }

  /// The share of a zone, whichever way it was made: on the root record, or zone-wide.
  private func findShare(in db: CKDatabase, zone: CKRecordZone.ID) async -> (share: CKShare, mode: String)? {
    let rootId = CKRecord.ID(recordName: Self.rootName, zoneID: zone)
    if let root = try? await db.record(for: rootId), let reference = root.share,
      let share = try? await db.record(for: reference.recordID) as? CKShare
    {
      return (share, "record")
    }
    let zoneShareId = CKRecord.ID(recordName: CKRecordNameZoneWideShare, zoneID: zone)
    if let share = try? await db.record(for: zoneShareId) as? CKShare {
      return (share, "zone")
    }
    return nil
  }

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

  /// An error whose text reaches the JavaScript side. Expo puts `reason` into the message, and a
  /// plain Exception or GenericException leaves it at "undefined reason".
  private func fail(_ message: String) -> Exception {
    CycleSyncError(message)
  }

  /// Errors in words: our own message when it is ours, otherwise the domain, code, the system's
  /// text and whatever else the error carries (CloudKit puts the server's explanation in there).
  private func describe(_ error: Error) -> String {
    if let own = error as? Exception { return own.reason }
    let ns = error as NSError
    var parts = ["\(ns.domain) \(ns.code)", ns.localizedDescription]
    if let ck = error as? CKError {
      if let partial = ck.partialErrorsByItemID, !partial.isEmpty {
        let each = partial.values.prefix(3).map { describe($0) }.joined(separator: " | ")
        parts.append("[\(each)]")
      }
    }
    if let underlying = ns.userInfo[NSUnderlyingErrorKey] as? NSError {
      parts.append("underlying: \(describe(underlying))")
    }
    let skip: Set<String> = [NSLocalizedDescriptionKey, NSUnderlyingErrorKey, "CKPartialErrors"]
    let rest = ns.userInfo.filter { !skip.contains($0.key) }
      .map { "\($0.key)=\($0.value)" }
      .joined(separator: ", ")
    if !rest.isEmpty { parts.append(String(rest.prefix(600))) }
    return parts.joined(separator: ": ")
  }

  /// Runs a call and turns anything it throws into an error with a readable message.
  private func reporting<T>(_ body: () async throws -> T) async throws -> T {
    do {
      return try await body()
    } catch let exception as Exception {
      throw exception
    } catch {
      throw fail(describe(error))
    }
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

    // CloudKit rejects a share in some setups without saying why, so three ways are tried in turn
    // and every failure is reported if none works:
    //   A. the root record and the share saved together (the documented way),
    //   B. the root record first, then the share on the saved root,
    //   C. a share of the whole zone, with no root record.
    var log: [String] = []

    do {
      let existing = try? await db.record(for: rootId)
      let root = existing ?? makeRoot(rootId)
      let share = makeShare(CKShare(rootRecord: root))
      let saved = try await saveShare(db, [root, share])
      return remember(saved, zone: zone.zoneID, mode: "record")
    } catch {
      log.append("A: \(describe(error))")
    }

    do {
      let (saved, _) = try await db.modifyRecords(saving: [makeRoot(rootId)], deleting: [])
      var root: CKRecord?
      for (_, result) in saved {
        if case .success(let record) = result { root = record }
      }
      if root == nil { root = try? await db.record(for: rootId) }
      guard let root = root else {
        throw fail("the root record could not be saved or read")
      }
      let share = makeShare(CKShare(rootRecord: root))
      let savedShare = try await saveShare(db, [root, share])
      return remember(savedShare, zone: zone.zoneID, mode: "record")
    } catch {
      log.append("B: \(describe(error))")
    }

    do {
      let share = makeShare(CKShare(recordZoneID: zone.zoneID))
      let saved = try await saveShare(db, [share])
      return remember(saved, zone: zone.zoneID, mode: "zone")
    } catch {
      log.append("C: \(describe(error))")
    }

    // D is a test, not a way in: the same share with read-only public access. If CloudKit accepts
    // that, it is the public read-write access it refuses, which decides how this gets fixed.
    do {
      let existing = try? await db.record(for: rootId)
      let share = CKShare(rootRecord: existing ?? makeRoot(rootId))
      share[CKShare.SystemFieldKey.title] = "Cycle Tracker" as CKRecordValue
      share.publicPermission = .readOnly
      _ = try await saveShare(db, [existing ?? makeRoot(rootId), share])
      _ = try? await db.deleteRecordZone(withID: zone.zoneID)
      log.append("D: a read-only public share IS accepted, so CloudKit refuses public read-write access")
    } catch {
      log.append("D (read-only test): \(describe(error))")
    }

    let os = ProcessInfo.processInfo.operatingSystemVersionString
    throw fail("The share could not be created (\(os)). " + log.joined(separator: "  ||  "))
  }

  private func makeRoot(_ id: CKRecord.ID) -> CKRecord {
    let root = CKRecord(recordType: Self.rootType, recordID: id)
    root["title"] = "Cycle Tracker" as CKRecordValue
    return root
  }

  private func makeShare(_ share: CKShare) -> CKShare {
    share[CKShare.SystemFieldKey.title] = "Cycle Tracker" as CKRecordValue
    // Anyone holding the link can join and write their own record; the link is only given to the partner.
    share.publicPermission = .readWrite
    return share
  }

  /// Saves the records and returns the saved share, or throws what CloudKit said about the failure.
  private func saveShare(_ db: CKDatabase, _ records: [CKRecord]) async throws -> CKShare {
    let (saved, _) = try await db.modifyRecords(saving: records, deleting: [])
    var savedShare: CKShare?
    var failures: [String] = []
    for (id, result) in saved {
      switch result {
      case .success(let record):
        if let s = record as? CKShare { savedShare = s }
      case .failure(let error):
        failures.append("\(id.recordName): \(describe(error))")
      }
    }
    if !failures.isEmpty { throw fail(failures.joined(separator: " ; ")) }
    guard let share = savedShare, share.url != nil else {
      throw fail("saved, but there is no share link")
    }
    return share
  }

  private func remember(_ share: CKShare, zone: CKRecordZone.ID, mode: String) -> String {
    defaults.set("owner", forKey: Key.role)
    defaults.set(zone.zoneName, forKey: Key.zoneName)
    defaults.set(zone.ownerName, forKey: Key.zoneOwner)
    defaults.set(share.recordID.recordName, forKey: Key.shareName)
    defaults.set(mode, forKey: Key.mode)
    return share.url?.absoluteString ?? ""
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

    let metadata = try await fetchShareMetadata(url)
    _ = try await container.accept(metadata)

    var zoneWide = false
    if #available(iOS 16.0, *) { zoneWide = metadata.hierarchicalRootRecordID == nil }
    rememberParticipant(
      metadata.share, zone: metadata.share.recordID.zoneID, mode: zoneWide ? "zone" : "record")
  }

  private func rememberParticipant(_ share: CKShare, zone: CKRecordZone.ID, mode: String) {
    defaults.set("participant", forKey: Key.role)
    defaults.set(zone.zoneName, forKey: Key.zoneName)
    defaults.set(zone.ownerName, forKey: Key.zoneOwner)
    defaults.set(share.recordID.recordName, forKey: Key.shareName)
    defaults.set(mode, forKey: Key.mode)
  }

  private func fetchShareMetadata(_ url: URL) async throws -> CKShare.Metadata {
    let container = self.container
    return try await withCheckedThrowingContinuation { continuation in
      let operation = CKFetchShareMetadataOperation(shareURLs: [url])
      operation.shouldFetchRootRecord = false
      var found: CKShare.Metadata?
      var failure: Error?
      operation.perShareMetadataResultBlock = { _, result in
        switch result {
        case .success(let metadata): found = metadata
        case .failure(let error): failure = error
        }
      }
      operation.fetchShareMetadataResultBlock = { result in
        if case .failure(let error) = result {
          continuation.resume(throwing: error)
        } else if let metadata = found {
          continuation.resume(returning: metadata)
        } else {
          continuation.resume(throwing: failure ?? CycleSyncError("The share link was not found"))
        }
      }
      container.add(operation)
    }
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
      // Child of the shared root, so the share covers it (not needed when the whole zone is shared).
      if defaults.string(forKey: Key.mode) != "zone" {
        record.parent = CKRecord.Reference(
          recordID: CKRecord.ID(recordName: Self.rootName, zoneID: zone), action: .none)
      }
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
    for key in [Key.role, Key.zoneName, Key.zoneOwner, Key.shareName, Key.mode] {
      defaults.removeObject(forKey: key)
    }
  }
}

/// Carries a message through Expo's error reporting: Expo reads `reason`, not `description`.
final class CycleSyncError: Exception, @unchecked Sendable {
  private let message: String

  init(_ message: String, file: String = #fileID, line: UInt = #line, function: String = #function) {
    self.message = message
    super.init(file: file, line: line, function: function)
  }

  override var reason: String { message }
}
