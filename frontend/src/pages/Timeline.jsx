import {
  Activity,
  AlertCircle,
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  FileText,
  HeartPulse,
  Sparkles,
  Stethoscope,
  UserRound,
} from "lucide-react";

const timelineEvents = [
  {
    date: "22 Jul 2026",
    time: "11:00 AM",
    type: "registration",
    title: "Patient registered",
    description:
      "Lakshmi Devi was registered into CuraFlow for maternal care tracking.",
    icon: UserRound,
    tag: "Registration",
  },
  {
    date: "10 Aug 2026",
    time: "09:40 AM",
    type: "visit",
    title: "Hemoglobin checked",
    description:
      "Hb recorded at 8.6 g/dL. Iron supplementation and dietary guidance were advised.",
    icon: HeartPulse,
    tag: "Health Check",
  },
  {
    date: "28 Aug 2026",
    time: "10:15 AM",
    type: "visit",
    title: "ANC visit completed",
    description:
      "Antenatal care visit completed and pregnancy progress reviewed.",
    icon: Stethoscope,
    tag: "ANC Visit",
  },
  {
    date: "12 Sep 2026",
    time: "04:30 PM",
    type: "referral",
    title: "Referral generated",
    description:
      "A referral was generated following identified maternal health risk indicators.",
    icon: FileText,
    tag: "Referral",
  },
  {
    date: "13 Sep 2026",
    time: "08:20 AM",
    type: "visit",
    title: "Visit assessment recorded",
    description:
      "BP recorded at 158/102 mmHg and Hb at 7.8 g/dL. Severe headache and swelling reported.",
    icon: ClipboardCheck,
    tag: "Visit Assessment",
    critical: true,
  },
  {
    date: "13 Sep 2026",
    time: "08:24 AM",
    type: "ai",
    title: "AI assessment completed",
    description:
      "CuraFlow analyzed the assessment and assigned a priority score of 96/100.",
    icon: Sparkles,
    tag: "AI Analysis",
    critical: true,
  },
  {
    date: "13 Sep 2026",
    time: "08:28 AM",
    type: "referral",
    title: "Referral created",
    description:
      "Prompt referral recommended to Kovilur Primary Health Centre.",
    icon: CheckCircle2,
    tag: "Referral Created",
    critical: true,
  },
  {
    date: "13 Sep 2026",
    time: "08:35 AM",
    type: "followup",
    title: "Follow-up scheduled",
    description:
      "Follow-up scheduled for 14 Sep 2026 at 10:00 AM with reminder enabled.",
    icon: CalendarDays,
    tag: "Follow-up",
  },
];

const typeStyles = {
  registration: {
    bg: "bg-slate-100",
    text: "text-slate-600",
  },
  visit: {
    bg: "bg-pink-50",
    text: "text-pink-600",
  },
  referral: {
    bg: "bg-orange-50",
    text: "text-orange-600",
  },
  ai: {
    bg: "bg-purple-50",
    text: "text-purple-600",
  },
  followup: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
  },
};

function Timeline({ onBack, onNavigate }) {
  return (
    <div className="min-h-screen bg-[#FFFAFD] text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50"
            >
              <ArrowLeft size={19} />
            </button>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-slate-900">
                  Patient Timeline
                </h1>
                <span className="hidden rounded-full bg-purple-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-purple-600 sm:inline-flex">
                  Care Journey
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Complete history of patient care and interventions
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate("profile")}
            className="hidden items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:flex"
          >
            <UserRound size={16} />
            View Profile
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
        {/* Patient banner */}
        <section className="mb-6 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
          <div className="p-5 sm:p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-pink-50 text-pink-600">
                  <HeartPulse size={27} />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-xl font-bold text-slate-900">
                      Lakshmi Devi
                    </h2>
                    <span className="rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-red-600">
                      Critical
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-slate-500">
                    CF-001 · 27 years · 32 weeks · Kovilur
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <InfoBox label="Priority" value="96/100" danger />
                <InfoBox label="Blood Group" value="B+" />
                <InfoBox label="Hb" value="7.8 g/dL" danger />
                <InfoBox label="BP" value="158/102" danger />
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 bg-slate-50/70 px-5 py-3 sm:px-6">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <AlertCircle size={14} className="text-red-500" />
                Referral pending
              </span>

              <span className="flex items-center gap-1.5">
                <CalendarDays size={14} className="text-emerald-500" />
                Follow-up: 14 Sep 2026
              </span>

              <span className="flex items-center gap-1.5">
                <Activity size={14} className="text-purple-500" />
                AI assessment completed
              </span>
            </div>
          </div>
        </section>

        {/* Summary cards */}
        <section className="mb-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <SummaryCard
            icon={ClipboardCheck}
            title="Care Events"
            value="8"
            subtitle="Recorded in timeline"
            iconClass="bg-pink-50 text-pink-600"
          />

          <SummaryCard
            icon={HeartPulse}
            title="Health Trend"
            value="Needs Attention"
            subtitle="BP & Hb require review"
            iconClass="bg-orange-50 text-orange-600"
          />

          <SummaryCard
            icon={FileText}
            title="Referral"
            value="Pending"
            subtitle="Kovilur PHC"
            iconClass="bg-purple-50 text-purple-600"
          />

          <SummaryCard
            icon={CalendarDays}
            title="Next Follow-up"
            value="Tomorrow"
            subtitle="10:00 AM"
            iconClass="bg-emerald-50 text-emerald-600"
          />
        </section>

        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* Timeline */}
          <section className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Care Journey
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Chronological record of important patient events
                </p>
              </div>

              <div className="flex w-full gap-2 overflow-x-auto sm:w-auto">
                <FilterButton active>
                  All
                </FilterButton>
                <FilterButton>Visits</FilterButton>
                <FilterButton>Referrals</FilterButton>
                <FilterButton>Follow-ups</FilterButton>
              </div>
            </div>

            <div className="relative">
              <div className="absolute bottom-4 left-[19px] top-4 w-px bg-slate-200" />

              <div className="space-y-6">
                {timelineEvents.map((event, index) => {
                  const Icon = event.icon;
                  const style = typeStyles[event.type];

                  return (
                    <div
                      key={`${event.date}-${event.time}-${index}`}
                      className="relative flex gap-4"
                    >
                      <div
                        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${style.bg} ${style.text} ring-4 ring-white`}
                      >
                        <Icon size={18} />
                      </div>

                      <div
                        className={`min-w-0 flex-1 rounded-2xl border p-4 ${
                          event.critical
                            ? "border-red-100 bg-red-50/40"
                            : "border-slate-100 bg-slate-50/50"
                        }`}
                      >
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-sm font-bold text-slate-900">
                                {event.title}
                              </h3>

                              {event.critical && (
                                <span className="rounded-full bg-red-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-red-600">
                                  Important
                                </span>
                              )}
                            </div>

                            <p className="mt-1 text-xs leading-5 text-slate-500">
                              {event.description}
                            </p>
                          </div>

                          <div className="shrink-0 sm:text-right">
                            <p className="text-xs font-semibold text-slate-700">
                              {event.date}
                            </p>
                            <p className="mt-0.5 text-[11px] text-slate-400">
                              {event.time}
                            </p>
                          </div>
                        </div>

                        <div className="mt-3 flex items-center justify-between">
                          <span
                            className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${style.bg} ${style.text}`}
                          >
                            {event.tag}
                          </span>

                          {event.type !== "registration" && (
                            <button className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 transition hover:text-pink-600">
                              Details
                              <ChevronRight size={13} />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Right panel */}
          <aside className="space-y-5">
            {/* Health trend */}
            <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-50 text-pink-600">
                  <HeartPulse size={18} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Health History
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Recent indicators
                  </p>
                </div>
              </div>

              <TrendRow
                label="Blood Pressure"
                current="158/102"
                previous="138/90"
                status="Increased"
                danger
              />

              <TrendRow
                label="Hemoglobin"
                current="7.8 g/dL"
                previous="8.6 g/dL"
                status="Decreased"
                danger
              />

              <TrendRow
                label="Weight"
                current="61.4 kg"
                previous="60.8 kg"
                status="Stable"
              />
            </div>

            {/* Care continuity */}
            <div className="rounded-3xl border border-purple-100 bg-gradient-to-br from-purple-50 to-pink-50 p-5">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-purple-600 shadow-sm">
                  <Sparkles size={18} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    CuraFlow AI Insight
                  </h3>
                  <p className="text-[11px] text-purple-500">
                    Care continuity
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-700">
                Recent assessments indicate increasing maternal risk.
                Immediate clinical review and close follow-up are recommended.
              </p>

              <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/80 px-3 py-3">
                <span className="text-xs font-semibold text-slate-600">
                  Priority Score
                </span>
                <span className="text-lg font-black text-red-600">
                  96/100
                </span>
              </div>

              <p className="mt-3 text-[10px] leading-4 text-slate-400">
                AI-generated information supports care workflows and does not
                replace professional clinical judgment.
              </p>
            </div>

            {/* Quick actions */}
            <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
              <h3 className="mb-4 text-sm font-bold text-slate-900">
                Quick Actions
              </h3>

              <button
                onClick={() => onNavigate("visit")}
                className="mb-2 flex w-full items-center justify-between rounded-xl border border-slate-100 px-3.5 py-3 text-left transition hover:border-pink-200 hover:bg-pink-50/50"
              >
                <span className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                  <ClipboardCheck size={16} className="text-pink-600" />
                  Record New Visit
                </span>
                <ChevronRight size={15} className="text-slate-400" />
              </button>

              <button
                onClick={() => onNavigate("referral")}
                className="mb-2 flex w-full items-center justify-between rounded-xl border border-slate-100 px-3.5 py-3 text-left transition hover:border-orange-200 hover:bg-orange-50/50"
              >
                <span className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                  <FileText size={16} className="text-orange-600" />
                  View Referral
                </span>
                <ChevronRight size={15} className="text-slate-400" />
              </button>

              <button
                onClick={() => onNavigate("followup")}
                className="flex w-full items-center justify-between rounded-xl border border-slate-100 px-3.5 py-3 text-left transition hover:border-emerald-200 hover:bg-emerald-50/50"
              >
                <span className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                  <CalendarDays size={16} className="text-emerald-600" />
                  View Follow-up
                </span>
                <ChevronRight size={15} className="text-slate-400" />
              </button>
            </div>
          </aside>
        </div>

        {/* Footer disclaimer */}
        <div className="mt-6 rounded-2xl border border-slate-100 bg-white px-4 py-3 text-center text-[10px] leading-4 text-slate-400">
          CuraFlow is a care-management and decision-support platform.
          Clinical decisions should always be made by qualified healthcare
          professionals.
        </div>
      </main>
    </div>
  );
}

function InfoBox({ label, value, danger = false }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 px-3 py-2.5">
      <p className="text-[10px] font-medium text-slate-400">{label}</p>
      <p
        className={`mt-0.5 text-sm font-bold ${
          danger ? "text-red-600" : "text-slate-800"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function SummaryCard({ icon: Icon, title, value, subtitle, iconClass }) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconClass}`}
        >
          <Icon size={19} />
        </div>
      </div>

      <p className="mt-4 text-xs font-medium text-slate-400">{title}</p>
      <p className="mt-1 text-base font-bold text-slate-900">{value}</p>
      <p className="mt-1 text-[11px] text-slate-400">{subtitle}</p>
    </div>
  );
}

function FilterButton({ children, active = false }) {
  return (
    <button
      className={`shrink-0 rounded-lg px-3 py-1.5 text-[10px] font-semibold transition ${
        active
          ? "bg-slate-900 text-white"
          : "bg-slate-50 text-slate-500 hover:bg-slate-100"
      }`}
    >
      {children}
    </button>
  );
}

function TrendRow({
  label,
  current,
  previous,
  status,
  danger = false,
}) {
  return (
    <div className="border-b border-slate-100 py-3 last:border-0 last:pb-0">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-slate-700">{label}</p>

        <span
          className={`text-[10px] font-semibold ${
            danger ? "text-red-500" : "text-emerald-500"
          }`}
        >
          {status}
        </span>
      </div>

      <div className="mt-2 flex items-end justify-between">
        <div>
          <p
            className={`text-sm font-bold ${
              danger ? "text-red-600" : "text-slate-800"
            }`}
          >
            {current}
          </p>
          <p className="text-[10px] text-slate-400">
            Previous: {previous}
          </p>
        </div>

        <Activity
          size={16}
          className={danger ? "text-red-400" : "text-emerald-400"}
        />
      </div>
    </div>
  );
}

export default Timeline;