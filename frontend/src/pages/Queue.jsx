import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileText,
  HeartPulse,
  Search,
  Sparkles,
  Stethoscope,
  UserRound,
} from "lucide-react";
import { useState } from "react";

const patients = [
  {
    id: 1,
    name: "Lakshmi Devi",
    age: 27,
    week: 32,
    village: "Kovilur",
    score: 96,
    priority: "Critical",
    reasons: [
      "High blood pressure",
      "Severe anemia",
      "Referral pending",
    ],
    action: "Immediate PHC referral",
    lastVisit: "Today, 08:20 AM",
    status: "Needs attention",
    initials: "LD",
    bp: "158/102 mmHg",
    hb: "7.8 g/dL",
  },
  {
    id: 2,
    name: "Meena",
    age: 24,
    week: 28,
    village: "Perumalpuram",
    score: 82,
    priority: "High",
    reasons: [
      "Missed ANC appointment",
      "Low hemoglobin",
    ],
    action: "Follow-up today",
    lastVisit: "Yesterday, 04:10 PM",
    status: "Follow-up due",
    initials: "ME",
    bp: "138/88 mmHg",
    hb: "9.2 g/dL",
  },
  {
    id: 3,
    name: "Kavitha",
    age: 30,
    week: 24,
    village: "Mettur",
    score: 64,
    priority: "Medium",
    reasons: [
      "Reduced fetal movement",
      "Follow-up due",
    ],
    action: "Schedule home visit",
    lastVisit: "2 days ago",
    status: "Monitor",
    initials: "KA",
    bp: "124/82 mmHg",
    hb: "10.4 g/dL",
  },
  {
    id: 4,
    name: "Priya",
    age: 22,
    week: 20,
    village: "Kovilur",
    score: 42,
    priority: "Low",
    reasons: [
      "Routine follow-up",
      "No current warning signs",
    ],
    action: "Check-in next week",
    lastVisit: "4 days ago",
    status: "On track",
    initials: "PR",
    bp: "116/76 mmHg",
    hb: "11.2 g/dL",
  },
];

const priorityConfig = {
  Critical: {
    color: "#E93669",
    light: "bg-[#FFE1EA]",
    lighter: "bg-[#FFF3F6]",
    border: "border-[#FFC4D5]",
    icon: <AlertCircle size={17} />,
  },
  High: {
    color: "#E88A13",
    light: "bg-[#FFF0D5]",
    lighter: "bg-[#FFF9ED]",
    border: "border-[#FFDFB0]",
    icon: <AlertCircle size={17} />,
  },
  Medium: {
    color: "#C59608",
    light: "bg-[#FFF6CA]",
    lighter: "bg-[#FFFCEF]",
    border: "border-[#F7E7A0]",
    icon: <Clock3 size={17} />,
  },
  Low: {
    color: "#19A47C",
    light: "bg-[#D9F7EB]",
    lighter: "bg-[#EFFCF7]",
    border: "border-[#C0EDDD]",
    icon: <CheckCircle2 size={17} />,
  },
};

function PriorityBadge({ priority }) {
  const config = priorityConfig[priority];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold ${config.light}`}
      style={{ color: config.color }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: config.color }}
      />
      {priority}
    </span>
  );
}

function PatientCard({ patient, selected, onClick }) {
  const config = priorityConfig[patient.priority];

  return (
    <button
      onClick={onClick}
      className={`w-full rounded-[26px] border p-5 text-left transition-all ${
        selected
          ? `${config.border} bg-white shadow-lg shadow-[#e9dce3]/60`
          : "border-[#EEE7EC] bg-white hover:-translate-y-0.5 hover:border-[#F1C5D3] hover:shadow-md"
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#FFC9D8] to-[#D8F2E7] text-sm font-bold text-[#4B576C]">
            {patient.initials}
          </div>

          <span
            className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white"
            style={{ backgroundColor: config.color }}
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-bold text-[#273149]">
              {patient.name}
            </p>

            <PriorityBadge priority={patient.priority} />
          </div>

          <p className="mt-1 text-xs text-[#929BAB]">
            {patient.age} years • {patient.week} weeks •{" "}
            {patient.village}
          </p>
        </div>

        <div className="text-right">
          <p
            className="text-2xl font-bold"
            style={{ color: config.color }}
          >
            {patient.score}
          </p>

          <p className="text-[8px] font-semibold text-[#9AA2AF]">
            PRIORITY
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {patient.reasons.map((reason) => (
          <span
            key={reason}
            className={`rounded-full px-2.5 py-1 text-[9px] font-semibold ${config.lighter}`}
            style={{ color: config.color }}
          >
            {reason}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-[#F2EBEF] pt-4">
        <span className="text-[10px] text-[#8F98A7]">
          Last visit: {patient.lastVisit}
        </span>

        <ChevronDown
          size={14}
          className={`text-[#A1A8B4] transition-transform ${
            selected ? "rotate-180" : ""
          }`}
        />
      </div>
    </button>
  );
}

function ScoreRing({ score, priority }) {
  const config = priorityConfig[priority];

  const circumference = 2 * Math.PI * 51;
  const progress = (score / 100) * circumference;

  return (
    <div className="relative h-32 w-32 shrink-0">
      <svg
        className="h-full w-full -rotate-90"
        viewBox="0 0 120 120"
      >
        <circle
          cx="60"
          cy="60"
          r="51"
          fill="none"
          stroke="#F0EDF0"
          strokeWidth="9"
        />

        <circle
          cx="60"
          cy="60"
          r="51"
          fill="none"
          stroke={config.color}
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={`${progress} ${circumference}`}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className="text-3xl font-bold"
          style={{ color: config.color }}
        >
          {score}
        </span>

        <span className="text-[9px] font-medium text-[#969EAC]">
          / 100
        </span>
      </div>
    </div>
  );
}

function Metric({ icon, label, value }) {
  return (
    <div className="rounded-2xl bg-[#FAF8F9] p-3">
      <div className="flex items-center gap-2">
        <span className="text-[#E94B78]">{icon}</span>

        <span className="text-[9px] text-[#929AAA]">
          {label}
        </span>
      </div>

      <p className="mt-2 text-sm font-bold text-[#465167]">
        {value}
      </p>
    </div>
  );
}

export default function Queue({ onBack }) {
  const [selected, setSelected] = useState(patients[0]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredPatients = patients.filter((patient) => {
    const filterMatch =
      filter === "All" || patient.priority === filter;

    const searchMatch =
      patient.name.toLowerCase().includes(search.toLowerCase()) ||
      patient.village.toLowerCase().includes(search.toLowerCase());

    return filterMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-[#FFFAFD] text-[#202A43]">

      {/* TOP BAR */}
      <header className="sticky top-0 z-30 border-b border-[#F0E6EB] bg-white/95 px-5 py-4 backdrop-blur lg:px-8">
        <div className="mx-auto flex max-w-[1550px] items-center justify-between">

          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#EEE6EB] text-[#687388] transition hover:border-[#F0B3C5] hover:text-[#E7356C]"
            >
              <ArrowLeft size={18} />
            </button>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl font-bold text-[#1D2942]">
                  AI Intervention Queue
                </h1>

                <span className="flex items-center gap-1 rounded-full bg-gradient-to-r from-[#FFE0EB] to-[#EEE3FF] px-2.5 py-1 text-[9px] font-bold text-[#D93470]">
                  <Sparkles size={10} />
                  AI POWERED
                </span>
              </div>

              <p className="mt-1 text-xs text-[#949CAB]">
                Know who needs attention first — and why.
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-2 rounded-full bg-[#EDFCF7] px-4 py-2 sm:flex">
            <span className="h-2 w-2 rounded-full bg-[#25BC91]" />

            <span className="text-[10px] font-bold text-[#159873]">
              AI Engine Active
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1550px] p-5 lg:p-8">

        {/* HERO */}
        <section className="relative mb-6 overflow-hidden rounded-[30px] border border-[#FFDCE7] bg-gradient-to-r from-[#FFF0F5] via-[#FFF8F1] to-[#ECF9F4] p-6 lg:p-7">

          <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-[#FFC3D4]/35" />

          <div className="absolute -bottom-20 right-64 h-44 w-44 rounded-full bg-[#C7EFDE]/40" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#E83970] shadow-sm">
                  <Sparkles size={21} />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#263149]">
                    Today's care priorities
                  </p>

                  <p className="text-[10px] text-[#929BAB]">
                    CuraFlow analyzed the latest available patient
                    information.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">

                <div className="rounded-2xl bg-white/85 px-5 py-3 shadow-sm">
                  <p className="text-[9px] text-[#929AAA]">
                    Patients analyzed
                  </p>

                  <p className="mt-1 text-xl font-bold text-[#273149]">
                    24
                  </p>
                </div>

                <div className="rounded-2xl bg-[#FFE1EA]/80 px-5 py-3">
                  <p className="text-[9px] text-[#D46A87]">
                    Need attention
                  </p>

                  <p className="mt-1 text-xl font-bold text-[#E33269]">
                    8
                  </p>
                </div>

                <div className="rounded-2xl bg-[#DDF8ED]/80 px-5 py-3">
                  <p className="text-[9px] text-[#5B9D87]">
                    Routine care
                  </p>

                  <p className="mt-1 text-xl font-bold text-[#189D77]">
                    16
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden items-center gap-4 rounded-3xl bg-white/60 p-5 backdrop-blur lg:flex">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFE0E9] text-[#E63269]">
                <HeartPulse size={29} />
              </div>

              <div>
                <p className="text-3xl font-bold text-[#DF3F70]">
                  8
                </p>

                <p className="text-[10px] font-semibold leading-4 text-[#7D8799]">
                  patients may need
                  <br />
                  intervention today
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEARCH / FILTER */}
        <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

          <div className="relative w-full max-w-md">
            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9DA5B2]"
            />

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search patient or village..."
              className="w-full rounded-2xl border border-[#ECE5EA] bg-white py-3.5 pl-11 pr-4 text-xs text-[#39445A] outline-none transition focus:border-[#F1ABC0] focus:ring-4 focus:ring-[#FFE9EF]"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1">

            {["All", "Critical", "High", "Medium", "Low"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`shrink-0 rounded-full px-4 py-2.5 text-xs font-bold transition ${
                    filter === item
                      ? "bg-gradient-to-r from-[#ED4B7D] to-[#DC3F70] text-white shadow-md shadow-pink-100"
                      : "border border-[#EEE6EB] bg-white text-[#707B8E] hover:border-[#F3B4C7]"
                  }`}
                >
                  {item}
                </button>
              )
            )}

            <button className="flex shrink-0 items-center gap-2 rounded-full border border-[#EEE6EB] bg-white px-4 py-2.5 text-xs font-semibold text-[#707B8E]">
              <CalendarDays size={14} />
              Today
              <ChevronDown size={13} />
            </button>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">

          {/* LEFT — PATIENTS */}
          <section>

            <div className="mb-3 flex items-center justify-between px-1">
              <div>
                <h2 className="font-bold text-[#273149]">
                  Priority Patients
                </h2>

                <p className="mt-1 text-[10px] text-[#969EAC]">
                  Ordered by care priority
                </p>
              </div>

              <span className="rounded-full bg-[#F7F3F6] px-3 py-1.5 text-[10px] font-bold text-[#7E8797]">
                {filteredPatients.length} patients
              </span>
            </div>

            <div className="space-y-3">
              {filteredPatients.map((patient) => (
                <PatientCard
                  key={patient.id}
                  patient={patient}
                  selected={selected.id === patient.id}
                  onClick={() => setSelected(patient)}
                />
              ))}

              {filteredPatients.length === 0 && (
                <div className="rounded-3xl border border-dashed border-[#EADFE5] bg-white p-10 text-center">
                  <Search
                    size={28}
                    className="mx-auto text-[#C2C7D0]"
                  />

                  <p className="mt-3 text-sm font-bold text-[#697489]">
                    No patients found
                  </p>

                  <p className="mt-1 text-xs text-[#9AA2AF]">
                    Try another search or priority filter.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* RIGHT — PATIENT DETAIL */}
          <section className="xl:sticky xl:top-24 xl:self-start">

            <div className="overflow-hidden rounded-[30px] border border-[#EEE7EC] bg-white shadow-sm">

              {/* PATIENT HEADER */}
              <div className="relative overflow-hidden bg-gradient-to-br from-[#FFF0F5] via-[#FFF8F2] to-[#EDF9F5] p-6">

                <div className="absolute -right-12 -top-14 h-40 w-40 rounded-full bg-[#FFC7D8]/40" />

                <div className="relative flex items-start justify-between gap-4">

                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#FFC9D8] to-[#D5F1E6] text-sm font-bold text-[#4B576C]">
                      {selected.initials}
                    </div>

                    <div>
                      <p className="text-lg font-bold text-[#263149]">
                        {selected.name}
                      </p>

                      <p className="mt-1 text-xs text-[#8791A2]">
                        {selected.age} years • {selected.week} weeks
                      </p>

                      <p className="mt-0.5 text-[10px] text-[#A0A7B3]">
                        {selected.village}
                      </p>
                    </div>
                  </div>

                  <PriorityBadge priority={selected.priority} />
                </div>

                {/* SCORE */}
                <div className="mt-6 flex items-center gap-5">

                  <ScoreRing
                    score={selected.score}
                    priority={selected.priority}
                  />

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#929AAA]">
                      Care Priority
                    </p>

                    <p
                      className="mt-1 text-2xl font-bold"
                      style={{
                        color:
                          priorityConfig[selected.priority].color,
                      }}
                    >
                      {selected.priority}
                    </p>

                    <p className="mt-2 max-w-[200px] text-xs leading-5 text-[#788397]">
                      {selected.priority === "Critical"
                        ? "Immediate attention may be required."
                        : selected.priority === "High"
                          ? "Priority follow-up is recommended."
                          : selected.priority === "Medium"
                            ? "Continue monitoring and follow-up."
                            : "Routine care appears appropriate."}
                    </p>
                  </div>
                </div>
              </div>

              {/* DETAIL BODY */}
              <div className="p-6">

                {/* WHY */}
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEE5FF] text-[#8560D9]">
                    <Sparkles size={17} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#2D3850]">
                      Why is this patient prioritized?
                    </h3>

                    <p className="text-[9px] text-[#9AA2AF]">
                      Explainable AI assessment
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-2.5">
                  {selected.reasons.map((reason, index) => (
                    <div
                      key={reason}
                      className="flex items-center gap-3 rounded-2xl bg-[#FAF7F9] p-3"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-xs font-bold text-[#E6386D] shadow-sm">
                        {index + 1}
                      </div>

                      <p className="text-xs font-semibold text-[#586378]">
                        {reason}
                      </p>

                      <CheckCircle2
                        size={15}
                        className="ml-auto text-[#25AD84]"
                      />
                    </div>
                  ))}
                </div>

                {/* HEALTH METRICS */}
                <div className="mt-6">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-[#929AAA]">
                    Latest health indicators
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    <Metric
                      icon={<HeartPulse size={14} />}
                      label="Blood Pressure"
                      value={selected.bp}
                    />

                    <Metric
                      icon={<ActivityIcon />}
                      label="Hemoglobin"
                      value={selected.hb}
                    />
                  </div>
                </div>

                {/* ACTION */}
                <div className="mt-6 rounded-2xl border border-[#FFD9E4] bg-gradient-to-r from-[#FFF1F5] to-[#FFF9F1] p-4">

                  <div className="flex items-center gap-2">
                    <Stethoscope
                      size={17}
                      className="text-[#E6376C]"
                    />

                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#E6376C]">
                      Recommended Action
                    </p>
                  </div>

                  <p className="mt-2 text-sm font-bold text-[#364158]">
                    {selected.action}
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-[#8C95A4]">
                    Review the patient's current condition and follow
                    the appropriate care pathway.
                  </p>
                </div>

                {/* BASIC INFO */}
                <div className="mt-6 grid grid-cols-2 gap-3">

                  <Metric
                    icon={<UserRound size={14} />}
                    label="Patient"
                    value={selected.name}
                  />

                  <Metric
                    icon={<HeartPulse size={14} />}
                    label="Pregnancy"
                    value={`${selected.week} weeks`}
                  />

                  <Metric
                    icon={<Clock3 size={14} />}
                    label="Last Visit"
                    value={selected.lastVisit}
                  />

                  <Metric
                    icon={<FileText size={14} />}
                    label="Status"
                    value={selected.status}
                  />
                </div>

                {/* ACTION BUTTONS */}
                <div className="mt-6 grid grid-cols-2 gap-3">

                  <button className="rounded-2xl border border-[#EADFE5] bg-white py-3 text-xs font-bold text-[#59657A] transition hover:border-[#F0B4C7] hover:text-[#E4346B]">
                    View Patient
                  </button>

                  <button className="group flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#ED4B7D] to-[#DC3F70] py-3 text-xs font-bold text-white shadow-md shadow-pink-100 transition hover:-translate-y-0.5 hover:shadow-lg">
                    Take Action
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>

                {/* DISCLAIMER */}
                <div className="mt-5 flex gap-2 rounded-2xl bg-[#F7F5FA] p-3">
                  <AlertCircle
                    size={14}
                    className="mt-0.5 shrink-0 text-[#8B73BA]"
                  />

                  <p className="text-[9px] leading-4 text-[#8E96A5]">
                    CuraFlow provides decision support based on
                    available information. It does not replace
                    professional clinical judgment.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* BOTTOM EXPLANATION */}
        <section className="mt-6 rounded-[28px] border border-[#EDE5EA] bg-white p-5 shadow-sm lg:p-6">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFE0EB] to-[#EDE3FF] text-[#E6376C]">
              <Sparkles size={21} />
            </div>

            <div className="flex-1">
              <p className="text-sm font-bold text-[#2C3750]">
                How CuraFlow prioritizes care
              </p>

              <p className="mt-1 max-w-3xl text-xs leading-5 text-[#8B95A4]">
                The intervention queue considers available clinical
                indicators, pregnancy stage, missed care, referrals
                and follow-up status to highlight cases that may
                need attention sooner.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-[#FFE4EB] px-3 py-2 text-[9px] font-bold text-[#E93669]">
                Health indicators
              </span>

              <span className="rounded-full bg-[#EEE5FF] px-3 py-2 text-[9px] font-bold text-[#8560D9]">
                Care continuity
              </span>

              <span className="rounded-full bg-[#DDF8ED] px-3 py-2 text-[9px] font-bold text-[#199D78]">
                Follow-up
              </span>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[#F0E7EB] py-5 text-[10px] text-[#9BA2AF] sm:flex-row">
          <p>
            <span className="font-bold text-[#E33269]">
              CuraFlow
            </span>{" "}
            • AI-powered maternal care decision support
          </p>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#27C493]" />
            Intervention engine ready
          </div>
        </div>
      </main>
    </div>
  );
}

function ActivityIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12h4l3-8 4 16 3-8h4" />
    </svg>
  );
}