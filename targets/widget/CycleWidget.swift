import SwiftUI
import WidgetKit

// MARK: - Shared state written by the app (src/widget/sync.ts)

let appGroup = "group.com.mwoxen.cycletracker"
let stateKey = "widgetState"

struct WidgetState: Codable {
    var name: String
    var isTracker: Bool
    var lang: String
    /// ISO date (yyyy-MM-dd) the values below were computed for.
    var date: String
    var cycleDay: Int
    var cycleLength: Int
    var periodLength: Int
    var lutealLength: Int
    var daysUntilPeriod: Int
    var hasData: Bool
}

enum Phase: String {
    case menstrual, follicular, ovulation, luteal

    var color: Color {
        switch self {
        case .menstrual: return Color("menstrual")
        case .follicular: return Color("follicular")
        case .ovulation: return Color("ovulation")
        case .luteal: return Color("luteal")
        }
    }

    var symbol: String {
        switch self {
        case .menstrual: return "drop.fill"
        case .follicular: return "leaf.fill"
        case .ovulation: return "sun.max.fill"
        case .luteal: return "moon.fill"
        }
    }
}

/// Mirrors phaseForCycleDay in src/engine/cycle.ts.
func phase(forCycleDay day: Int, cycleLength: Int, periodLength: Int, lutealLength: Int) -> Phase {
    let maxLuteal = max(1, cycleLength - periodLength - 2)
    let luteal = min(max(lutealLength, 7), maxLuteal)
    let ovulationDay = cycleLength - luteal + 1
    if day <= periodLength { return .menstrual }
    if day < ovulationDay - 1 { return .follicular }
    if day <= ovulationDay + 1 { return .ovulation }
    return .luteal
}

func loadState() -> WidgetState? {
    guard let defaults = UserDefaults(suiteName: appGroup),
          let raw = defaults.string(forKey: stateKey),
          let data = raw.data(using: .utf8)
    else { return nil }
    return try? JSONDecoder().decode(WidgetState.self, from: data)
}

// MARK: - Strings

struct Strings {
    let lang: String

    func phaseName(_ p: Phase) -> String {
        switch (lang, p) {
        case ("da", .menstrual): return "Menstruation"
        case ("da", .follicular): return "Follikelfasen"
        case ("da", .ovulation): return "Ægløsning"
        case ("da", .luteal): return "Lutealfasen"
        case (_, .menstrual): return "Menstruation"
        case (_, .follicular): return "Follicular"
        case (_, .ovulation): return "Ovulation"
        case (_, .luteal): return "Luteal"
        }
    }

    func cycleDay(_ n: Int) -> String { lang == "da" ? "Cyklusdag \(n)" : "Cycle day \(n)" }

    func nextPeriod(_ days: Int) -> String {
        if days < 0 {
            let late = -days
            return lang == "da"
                ? (late == 1 ? "1 dag forsinket" : "\(late) dage forsinket")
                : (late == 1 ? "1 day late" : "\(late) days late")
        }
        if days == 0 { return lang == "da" ? "Menstruation i dag" : "Period today" }
        if days == 1 { return lang == "da" ? "Menstruation i morgen" : "Period tomorrow" }
        return lang == "da" ? "Menstruation om \(days) dage" : "Period in \(days) days"
    }

    var noData: String { lang == "da" ? "Åbn appen og registrér en menstruationsstart" : "Open the app and log a period start" }
    var title: String { lang == "da" ? "Cycle Tracker" : "Cycle Tracker" }
}

// MARK: - Timeline

struct CycleEntry: TimelineEntry {
    let date: Date
    let state: WidgetState?
    /// Days elapsed since the state was written, so cycle day and countdown stay current.
    let offset: Int
}

struct CycleProvider: TimelineProvider {
    func placeholder(in context: Context) -> CycleEntry {
        CycleEntry(date: Date(), state: WidgetState(name: "Anna", isTracker: true, lang: "da", date: "", cycleDay: 9, cycleLength: 28, periodLength: 5, lutealLength: 14, daysUntilPeriod: 19, hasData: true), offset: 0)
    }

    func getSnapshot(in context: Context, completion: @escaping (CycleEntry) -> Void) {
        completion(CycleEntry(date: Date(), state: loadState() ?? placeholder(in: context).state, offset: 0))
    }

    func getTimeline(in context: Context, completion: @escaping (Timeline<CycleEntry>) -> Void) {
        let state = loadState()
        let calendar = Calendar.current
        let now = Date()
        var baseOffset = 0
        if let state = state {
            let formatter = DateFormatter()
            formatter.dateFormat = "yyyy-MM-dd"
            formatter.timeZone = TimeZone.current
            if let written = formatter.date(from: state.date) {
                baseOffset = calendar.dateComponents([.day], from: calendar.startOfDay(for: written), to: calendar.startOfDay(for: now)).day ?? 0
            }
        }
        var entries: [CycleEntry] = [CycleEntry(date: now, state: state, offset: baseOffset)]
        // One entry per upcoming midnight for a week; the app rewrites the state when opened.
        for i in 1...7 {
            if let day = calendar.date(byAdding: .day, value: i, to: calendar.startOfDay(for: now)) {
                entries.append(CycleEntry(date: day, state: state, offset: baseOffset + i))
            }
        }
        completion(Timeline(entries: entries, policy: .atEnd))
    }
}

// MARK: - Views

struct CycleWidgetView: View {
    @Environment(\.widgetFamily) var family
    let entry: CycleEntry

    var body: some View {
        if let state = entry.state, state.hasData {
            let strings = Strings(lang: state.lang)
            let rawDay = state.cycleDay + entry.offset
            let cycleLength = max(state.cycleLength, rawDay)
            let day = rawDay
            let current = phase(forCycleDay: day, cycleLength: cycleLength, periodLength: state.periodLength, lutealLength: state.lutealLength)
            let daysUntil = state.daysUntilPeriod - entry.offset
            content(state: state, strings: strings, phase: current, day: day, daysUntil: daysUntil)
        } else {
            let strings = Strings(lang: entry.state?.lang ?? "en")
            VStack(alignment: .leading, spacing: 6) {
                Image(systemName: "heart.circle.fill").font(.title2).foregroundStyle(Color("AccentColor"))
                Text(strings.noData).font(.footnote).foregroundStyle(Color("secondaryLabel"))
            }
            .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topLeading)
        }
    }

    @ViewBuilder
    func content(state: WidgetState, strings: Strings, phase: Phase, day: Int, daysUntil: Int) -> some View {
        VStack(alignment: .leading, spacing: 4) {
            HStack(spacing: 6) {
                Image(systemName: phase.symbol).foregroundStyle(phase.color)
                Text(state.isTracker ? state.name : strings.title)
                    .font(.caption).fontWeight(.semibold).foregroundStyle(Color("secondaryLabel"))
                    .lineLimit(1)
            }
            Text(strings.phaseName(phase))
                .font(family == .systemSmall ? .headline : .title3).fontWeight(.bold)
                .foregroundStyle(Color("label"))
                .lineLimit(1).minimumScaleFactor(0.8)
            Text(strings.cycleDay(day))
                .font(.subheadline).foregroundStyle(Color("label"))
            Spacer(minLength: 2)
            Text(strings.nextPeriod(daysUntil))
                .font(.caption).foregroundStyle(daysUntil < 0 ? phase.color : Color("secondaryLabel"))
                .lineLimit(2)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topLeading)
    }
}

struct CycleWidget: Widget {
    let kind: String = "CycleWidget"

    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: CycleProvider()) { entry in
            CycleWidgetView(entry: entry)
                .containerBackground(Color("WidgetBackground"), for: .widget)
                .widgetURL(URL(string: "cycletracker://"))
        }
        .configurationDisplayName("Cycle Tracker")
        .description("Fase, cyklusdag og næste menstruation. / Phase, cycle day and next period.")
        .supportedFamilies([.systemSmall, .systemMedium])
    }
}
