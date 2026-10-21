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

/// Mirrors effectiveLuteal in src/engine/cycle.ts: the ovulation day of a typical cycle.
func ovulationDay(cycleLength: Int, periodLength: Int, lutealLength: Int) -> Int {
    let maxLuteal = max(1, cycleLength - periodLength - 2)
    let luteal = min(max(lutealLength, 7), maxLuteal)
    return cycleLength - luteal + 1
}

/// Mirrors phaseForCycleDay in src/engine/cycle.ts.
func phase(forCycleDay day: Int, cycleLength: Int, periodLength: Int, lutealLength: Int) -> Phase {
    let ovulation = ovulationDay(cycleLength: cycleLength, periodLength: periodLength, lutealLength: lutealLength)
    if day <= periodLength { return .menstrual }
    if day < ovulation - 1 { return .follicular }
    if day <= ovulation + 1 { return .ovulation }
    return .luteal
}

/// Mirrors FERTILE_DAYS_BEFORE_OVULATION and PMS_WINDOW_DAYS in src/engine/cycle.ts.
let fertileDaysBeforeOvulation = 5
let pmsWindowDays = 5

struct PhaseSpan: Identifiable {
    let phase: Phase
    /// 1-based first and last cycle day of the span.
    let from: Int
    let to: Int
    var id: String { phase.rawValue }
}

/// The four phases of a typical cycle as consecutive day spans, for the ring.
func phaseSpans(cycleLength: Int, periodLength: Int, lutealLength: Int) -> [PhaseSpan] {
    var spans: [PhaseSpan] = []
    var start = 1
    var current = phase(forCycleDay: 1, cycleLength: cycleLength, periodLength: periodLength, lutealLength: lutealLength)
    if cycleLength >= 2 {
        for day in 2...cycleLength {
            let p = phase(forCycleDay: day, cycleLength: cycleLength, periodLength: periodLength, lutealLength: lutealLength)
            if p != current {
                spans.append(PhaseSpan(phase: current, from: start, to: day - 1))
                start = day
                current = p
            }
        }
    }
    spans.append(PhaseSpan(phase: current, from: start, to: cycleLength))
    return spans
}

/// One line under the phase: where today sits in relation to bleeding, the fertile window or PMS.
func hint(strings: Strings, phase: Phase, day: Int, cycleLength: Int, periodLength: Int, lutealLength: Int) -> String? {
    let ovulation = ovulationDay(cycleLength: cycleLength, periodLength: periodLength, lutealLength: lutealLength)
    switch phase {
    case .menstrual:
        return day <= periodLength ? strings.bleedingDay(day) : nil
    case .follicular:
        let fertileStart = ovulation - fertileDaysBeforeOvulation
        return day < fertileStart ? strings.fertileIn(fertileStart - day) : strings.fertileNow
    case .ovulation:
        return strings.fertileNow
    case .luteal:
        let pmsStart = cycleLength - pmsWindowDays + 1
        return day < pmsStart ? strings.pmsIn(pmsStart - day) : strings.pmsNow
    }
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

    func cycleDayShort(_ n: Int) -> String { lang == "da" ? "Cyklusdag \(n)" : "Cycle day \(n)" }
    func dayBadge(_ n: Int) -> String { lang == "da" ? "DAG \(n)" : "DAY \(n)" }

    func bleedingDay(_ n: Int) -> String { lang == "da" ? "Dag \(n) af blødningen" : "Day \(n) of bleeding" }
    func fertileIn(_ days: Int) -> String {
        if days == 1 { return lang == "da" ? "Frugtbart vindue starter i morgen" : "Fertile window starts tomorrow" }
        return lang == "da" ? "Frugtbart vindue om \(days) dage" : "Fertile window in \(days) days"
    }
    var fertileNow: String { lang == "da" ? "Frugtbart vindue er i gang" : "Fertile window now" }
    func pmsIn(_ days: Int) -> String {
        if days == 1 { return lang == "da" ? "PMS-vinduet starter i morgen" : "PMS window starts tomorrow" }
        return lang == "da" ? "PMS-vinduet starter om \(days) dage" : "PMS window in \(days) days"
    }
    var pmsNow: String { lang == "da" ? "PMS-vinduet er i gang" : "PMS window now" }

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

/// The cycle as a ring (docs/design/README.md): one coloured segment per phase, 1.1° gaps,
/// day 1 at twelve o'clock, the days still ahead in the current phase at 22 %, and a knob on today.
struct CycleRing<Center: View>: View {
    let spans: [PhaseSpan]
    let day: Int
    let cycleLength: Int
    var lineWidth: CGFloat = 5
    @ViewBuilder let center: () -> Center

    private let gap = 1.1 / 360.0

    var body: some View {
        GeometryReader { geo in
            let side = min(geo.size.width, geo.size.height)
            let radius = (side - lineWidth) / 2
            let length = Double(max(cycleLength, 1))
            let today = Double(min(max(day, 1), cycleLength))
            ZStack {
                Circle().stroke(Color("track"), lineWidth: lineWidth)
                ForEach(spans) { span in
                    let start = Double(span.from - 1) / length + gap / 2
                    let end = Double(span.to) / length - gap / 2
                    let done = min(end, max(start, today / length))
                    if done > start {
                        Circle()
                            .trim(from: start, to: done)
                            .stroke(span.phase.color, style: StrokeStyle(lineWidth: lineWidth, lineCap: .butt))
                            .rotationEffect(.degrees(-90))
                    }
                    if end > done {
                        Circle()
                            .trim(from: done, to: end)
                            .stroke(span.phase.color.opacity(0.22), style: StrokeStyle(lineWidth: lineWidth, lineCap: .butt))
                            .rotationEffect(.degrees(-90))
                    }
                }
                // Trims start at three o'clock and are turned a quarter; the knob's angle includes that turn.
                let angle = 2 * Double.pi * (today - 0.5) / length - Double.pi / 2
                let knobColor = spans.first(where: { Int(today) >= $0.from && Int(today) <= $0.to })?.phase.color ?? Color("label")
                Circle()
                    .fill(Color("WidgetBackground"))
                    .overlay(Circle().stroke(knobColor, lineWidth: 2))
                    .frame(width: 12, height: 12)
                    .offset(x: radius * CGFloat(cos(angle)), y: radius * CGFloat(sin(angle)))
                center()
            }
            .frame(width: side, height: side)
            .frame(maxWidth: .infinity, maxHeight: .infinity)
        }
    }
}

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
            let spans = phaseSpans(cycleLength: cycleLength, periodLength: state.periodLength, lutealLength: state.lutealLength)
            let daysUntil = state.daysUntilPeriod - entry.offset
            let line = hint(strings: strings, phase: current, day: day, cycleLength: cycleLength, periodLength: state.periodLength, lutealLength: state.lutealLength)
            switch family {
            case .accessoryCircular:
                accessory(day: day, cycleLength: cycleLength)
            case .systemSmall:
                small(strings: strings, phase: current, day: day, cycleLength: cycleLength, spans: spans)
            default:
                medium(state: state, strings: strings, phase: current, day: day, cycleLength: cycleLength, spans: spans, daysUntil: daysUntil, line: line)
            }
        } else {
            let strings = Strings(lang: entry.state?.lang ?? "en")
            if family == .accessoryCircular {
                Image(systemName: "heart.circle").font(.title2)
            } else {
                VStack(alignment: .leading, spacing: 6) {
                    Image(systemName: "heart.circle.fill").font(.title2).foregroundStyle(Color("AccentColor"))
                    Text(strings.noData).font(.footnote).foregroundStyle(Color("secondaryLabel"))
                }
                .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topLeading)
            }
        }
    }

    /// Small: the ring fills the widget, the day and the phase sit in the middle.
    func small(strings: Strings, phase: Phase, day: Int, cycleLength: Int, spans: [PhaseSpan]) -> some View {
        CycleRing(spans: spans, day: day, cycleLength: cycleLength) {
            VStack(spacing: 3) {
                Text(strings.dayBadge(day))
                    .font(.system(size: 9, weight: .semibold)).tracking(1.4)
                    .foregroundStyle(Color("secondaryLabel"))
                Text(strings.phaseName(phase))
                    .font(.system(size: 14, weight: .medium))
                    .foregroundStyle(phase.color)
                    .lineLimit(1).minimumScaleFactor(0.7)
            }
            .padding(.horizontal, 14)
        }
        .padding(2)
    }

    /// Medium: the ring with the day number, then name, phase, next period and the hint line.
    func medium(state: WidgetState, strings: Strings, phase: Phase, day: Int, cycleLength: Int, spans: [PhaseSpan], daysUntil: Int, line: String?) -> some View {
        HStack(spacing: 14) {
            CycleRing(spans: spans, day: day, cycleLength: cycleLength) {
                Text("\(day)")
                    .font(.system(size: 24, weight: .light))
                    .foregroundStyle(Color("label"))
            }
            .frame(width: 112, height: 112)
            VStack(alignment: .leading, spacing: 5) {
                Text(state.isTracker ? "\(state.name) · \(strings.cycleDayShort(day))" : strings.cycleDayShort(day))
                    .font(.system(size: 11, weight: .semibold)).tracking(1.2).textCase(.uppercase)
                    .foregroundStyle(Color("secondaryLabel"))
                    .lineLimit(1).minimumScaleFactor(0.8)
                Text(strings.phaseName(phase))
                    .font(.system(size: 24, weight: .light))
                    .foregroundStyle(phase.color)
                    .lineLimit(1).minimumScaleFactor(0.7)
                Text(strings.nextPeriod(daysUntil))
                    .font(.system(size: 13))
                    .foregroundStyle(daysUntil < 0 ? phase.color : Color("secondaryLabel"))
                    .lineLimit(1)
                if let line = line {
                    HStack(spacing: 6) {
                        Circle().fill(phase.color).frame(width: 6, height: 6)
                        Text(line).font(.system(size: 13)).foregroundStyle(Color("secondaryLabel")).lineLimit(1).minimumScaleFactor(0.8)
                    }
                }
            }
            .frame(maxWidth: .infinity, alignment: .leading)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .leading)
    }

    /// Lock screen: a plain progress ring with the day in the middle, tinted by the system.
    func accessory(day: Int, cycleLength: Int) -> some View {
        ZStack {
            Circle().stroke(.primary.opacity(0.3), lineWidth: 6)
            Circle()
                .trim(from: 0, to: Double(min(max(day, 1), cycleLength)) / Double(max(cycleLength, 1)))
                .stroke(.primary, style: StrokeStyle(lineWidth: 6, lineCap: .round))
                .rotationEffect(.degrees(-90))
            Text("\(day)").font(.system(size: 22, weight: .medium))
        }
        .widgetAccentable()
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
        .description("Cyklusringen, fasen og næste menstruation. / The cycle ring, the phase and the next period.")
        .supportedFamilies([.systemSmall, .systemMedium, .accessoryCircular])
    }
}
