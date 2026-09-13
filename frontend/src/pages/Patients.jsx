import { useMemo, useState } from "react";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  FileText,
  HeartPulse,
  MapPin,
  Plus,
  Search,
  Sparkles,
  UserRound,
  Users,
} from "lucide-react";

const patients = [
  {
    id: "CF-001",
    name: "Lakshmi Devi",
    age: 27,
    weeks: 32,
    village: "Kovilur",
    phone: "+91 98XXX XX421",
    bp: "158/102",
    hb: "7.8",
    risk: "Critical",
    referral: "Pending",
    followUp: "Due Today",
    bloodGroup: "B+",
    gravida: "G2P1",
    dueDate: "08 Nov 2026",
    lastVisit: "13 Sep 2026",
    symptoms: ["Severe headache", "Swelling"],
  },
  {
    id: "CF-002",
    name: "Meena",
    age: 24,
    weeks: 28,
    village: "Perumalpuram",
    phone: "+91 97XXX XX615",
    bp: "138/88",
    hb: "9.2",
    risk: "High",
    referral: "Pending",
    followUp: "Due Today",
    bloodGroup: "O+",
    gravida: "G1P0",
    dueDate: "03 Dec 2026",
    lastVisit: "12 Sep 2026",
    symptoms: ["Fatigue"],
  },
  {
    id: "CF-003",
    name: "Kavitha",
    age: 30,
    weeks: 24,
    village: "Mettur",
    phone: "+91 96XXX XX284",
    bp: "124/82",
    hb: "10.4",
    risk: "Medium",
    referral: "Completed",
    followUp: "Due Tomorrow",
    bloodGroup: "A+",
    gravida: "G3P2",
    dueDate: "01 Jan 2027",
    lastVisit: "12 Sep 2026",
    symptoms: ["Mild fatigue"],
  },
  {
    id: "CF-004",
    name: "Priya",
    age: 22,
    weeks: 20,
    village: "Kovilur",
    phone: "+91 95XXX XX837",
    bp: "116/76",
    hb: "11.2",
    risk: "Low",
    referral: "None",
    followUp: "Next Week",
    bloodGroup: "B+",
    gravida: "G1P0",
    dueDate: "28 Jan 2027",
    lastVisit: "10 Sep 2026",
    symptoms: [],
  },
  {
    id: "CF-005",
    name: "Divya",
    age: 26,
    weeks: 30,
    village: "Sundarapatti",
    phone: "+91 94XXX XX529",
    bp: "132/84",
    hb: "9.8",
    risk: "High",
    referral: "Pending",
    followUp: "Due Today",
    bloodGroup: "AB+",
    gravida: "G2P1",
    dueDate: "17 Nov 2026",
    lastVisit: "11 Sep 2026",
    symptoms: ["Weakness"],
  },
  {
    id: "CF-006",
    name: "Revathi",
    age: 29,
    weeks: 18,
    village: "Mettur",
    phone: "+91 93XXX XX194",
    bp: "118/78",
    hb: "10.9",
    risk: "Low",
    referral: "None",
    followUp: "Next Week",
    bloodGroup: "O+",
    gravida: "G2P1",
    dueDate: "14 Feb 2027",
    lastVisit: "09 Sep 2026",
    symptoms: [],
  },
];

const riskConfig = {
  Critical: {
    bg: "bg-rose-50",
    text: "text-rose-600",
    border: "border-rose-200",
    dot: "bg-rose-500",
    score: 96,
  },
  High: {
    bg: "bg-orange-50",
    text: "text-orange-600",
    border: "border-orange-200",
    dot: "bg-orange-500",
    score: 82,
  },
  Medium: {
    bg: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-200",
    dot: "bg-amber-500",
    score: 64,
  },
  Low: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-200",
    dot: "bg-emerald-500",
    score: 42,
  },
};

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function getAvatarStyle(index) {
  const styles = [
    "bg-pink-100 text-pink-600",
    "bg-orange-100 text-orange-600",
    "bg-violet-100 text-violet-600",
    "bg-emerald-100 text-emerald-600",
    "bg-yellow-100 text-yellow-700",
    "bg-sky-100 text-sky-600",
  ];

  return styles[index % styles.length];
}

function StatusBadge({ risk }) {
  const config = riskConfig[risk];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold ${config.bg} ${config.text} ${config.border}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${config.dot}`} />
      {risk}
    </span>
  );
}

function MetricCard({ icon: Icon, label, value, description, iconClass }) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-2 text-3xl font-black tracking-tight text-slate-800">
            {value}
          </p>
          <p className="mt-1 text-xs font-medium text-slate-400">
            {description}
          </p>
        </div>

        <div className={`rounded-2xl p-3 ${iconClass}`}>
          <Icon size={21} strokeWidth={2.3} />
        </div>
      </div>
    </div>
  );
}

function PatientCard({ patient, index, onOpen }) {
  const config = riskConfig[patient.risk];

  return (
    <button
      type="button"
      onClick={() => onOpen(patient)}
      className="group w-full rounded-3xl border border-slate-100 bg-white p-5 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-pink-200 hover:shadow-lg"
    >
      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        {/* Patient Identity */}
        <div className="flex min-w-0 items-start gap-4 xl:w-[31%]">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-black ${getAvatarStyle(
              index,
            )}`}
          >
            {getInitials(patient.name)}
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="truncate text-base font-extrabold text-slate-800">
                {patient.name}
              </h3>
              <StatusBadge risk={patient.risk} />
            </div>

            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-slate-400">
              <span>{patient.id}</span>
              <span>•</span>
              <span>{patient.age} yrs</span>
              <span>•</span>
              <span>{patient.weeks} weeks</span>
            </div>

            <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
              <MapPin size={13} />
              {patient.village}
            </div>
          </div>
        </div>

        {/* Health Indicators */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 xl:w-[40%]">
          <div className="rounded-2xl bg-slate-50 px-3 py-2.5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Blood Pressure
            </p>
            <p
              className={`mt-1 text-sm font-extrabold ${
                patient.risk === "Critical"
                  ? "text-rose-600"
                  : "text-slate-700"
              }`}
            >
              {patient.bp}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 px-3 py-2.5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Hemoglobin
            </p>
            <p
              className={`mt-1 text-sm font-extrabold ${
                Number(patient.hb) < 8
                  ? "text-rose-600"
                  : Number(patient.hb) < 10
                    ? "text-orange-600"
                    : "text-slate-700"
              }`}
            >
              {patient.hb} g/dL
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 px-3 py-2.5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Referral
            </p>
            <p
              className={`mt-1 text-sm font-extrabold ${
                patient.referral === "Pending"
                  ? "text-orange-600"
                  : patient.referral === "Completed"
                    ? "text-emerald-600"
                    : "text-slate-700"
              }`}
            >
              {patient.referral}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 px-3 py-2.5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Follow-up
            </p>
            <p
              className={`mt-1 text-sm font-extrabold ${
                patient.followUp === "Due Today"
                  ? "text-rose-600"
                  : "text-slate-700"
              }`}
            >
              {patient.followUp}
            </p>
          </div>
        </div>

        {/* Action */}
        <div className="flex items-center justify-between gap-4 border-t border-slate-100 pt-4 xl:w-[20%] xl:justify-end xl:border-t-0 xl:pt-0">
          <div className="text-left xl:hidden">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Last Visit
            </p>
            <p className="mt-1 text-xs font-bold text-slate-600">
              {patient.lastVisit}
            </p>
          </div>

          <div className="hidden text-right xl:block">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Last Visit
            </p>
            <p className="mt-1 text-xs font-bold text-slate-600">
              {patient.lastVisit}
            </p>
          </div>

          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${config.bg} ${config.text} transition-transform group-hover:translate-x-1`}
          >
            <ArrowRight size={18} />
          </div>
        </div>
      </div>
    </button>
  );
}

function PatientPreviewModal({ patient, index, onClose, onViewProfile }) {
  if (!patient) {
    return null;
  }

  const config = riskConfig[patient.risk];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] bg-white shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-slate-100 p-6 sm:p-7">
          <div className="flex items-center gap-4">
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl text-base font-black ${getAvatarStyle(
                index,
              )}`}
            >
              {getInitials(patient.name)}
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-xl font-black text-slate-800">
                  {patient.name}
                </h2>
                <StatusBadge risk={patient.risk} />
              </div>

              <p className="mt-1 text-sm font-medium text-slate-400">
                {patient.id} · {patient.age} years · {patient.weeks} weeks
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close"
          >
            <ChevronDown size={20} className="rotate-45" />
          </button>
        </div>

        <div className="space-y-5 p-6 sm:p-7">
          {/* AI Priority */}
          <div
            className={`rounded-3xl border p-5 ${config.bg} ${config.border}`}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div
                  className={`flex items-center gap-2 text-sm font-extrabold ${config.text}`}
                >
                  <Sparkles size={17} />
                  CuraFlow AI Priority
                </div>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  Current decision-support risk assessment
                </p>
              </div>

              <div className="text-left sm:text-right">
                <p className={`text-3xl font-black ${config.text}`}>
                  {config.score}
                  <span className="text-base">/100</span>
                </p>
                <p className="text-xs font-bold text-slate-400">
                  Priority score
                </p>
              </div>
            </div>
          </div>

          {/* Health Metrics */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Blood Pressure
              </p>
              <p className="mt-2 text-lg font-black text-slate-800">
                {patient.bp}
              </p>
              <p className="mt-0.5 text-xs font-medium text-slate-400">
                mmHg
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Hemoglobin
              </p>
              <p className="mt-2 text-lg font-black text-slate-800">
                {patient.hb}
              </p>
              <p className="mt-0.5 text-xs font-medium text-slate-400">
                g/dL
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Blood Group
              </p>
              <p className="mt-2 text-lg font-black text-slate-800">
                {patient.bloodGroup}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Due Date
              </p>
              <p className="mt-2 text-sm font-black text-slate-800">
                {patient.dueDate}
              </p>
            </div>
          </div>

          {/* Care Status */}
          <div className="rounded-3xl border border-slate-100 p-5">
            <h3 className="text-sm font-extrabold text-slate-800">
              Care Status
            </h3>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-2xl bg-orange-50 p-3">
                <div className="rounded-xl bg-white p-2 text-orange-500 shadow-sm">
                  <FileText size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Referral
                  </p>
                  <p className="text-xs font-extrabold text-orange-600">
                    {patient.referral}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-rose-50 p-3">
                <div className="rounded-xl bg-white p-2 text-rose-500 shadow-sm">
                  <CalendarDays size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Follow-up
                  </p>
                  <p className="text-xs font-extrabold text-rose-600">
                    {patient.followUp}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-emerald-50 p-3">
                <div className="rounded-xl bg-white p-2 text-emerald-500 shadow-sm">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Last Visit
                  </p>
                  <p className="text-xs font-extrabold text-slate-700">
                    {patient.lastVisit}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Symptoms */}
          <div className="rounded-3xl border border-slate-100 p-5">
            <h3 className="text-sm font-extrabold text-slate-800">
              Current Indicators
            </h3>

            {patient.symptoms.length > 0 ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {patient.symptoms.map((symptom) => (
                  <span
                    key={symptom}
                    className="rounded-full bg-rose-50 px-3 py-1.5 text-xs font-bold text-rose-600"
                  >
                    {symptom}
                  </span>
                ))}
              </div>
            ) : (
              <p className="mt-3 text-sm font-medium text-slate-400">
                No concerning symptoms recorded.
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onViewProfile}
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#ED4B7D] px-5 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-pink-200 transition hover:bg-[#d93e6d]"
            >
              View Full Profile
              <ArrowRight size={17} />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="rounded-2xl border border-slate-200 px-5 py-3.5 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
            >
              Close
            </button>
          </div>

          <p className="text-center text-[11px] font-medium leading-5 text-slate-400">
            CuraFlow AI provides decision support based on available patient
            information. It does not replace clinical judgement or emergency
            medical care.
          </p>
        </div>
      </div>
    </div>
  );
}

function Patients({
  onBack,
  onNavigate,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedPatient, setSelectedPatient] = useState(null);

  const filters = [
    {
      label: "All",
      count: patients.length,
    },
    {
      label: "Critical",
      count: patients.filter((patient) => patient.risk === "Critical").length,
    },
    {
      label: "High Priority",
      count: patients.filter((patient) => patient.risk === "High").length,
    },
    {
      label: "Referral Pending",
      count: patients.filter((patient) => patient.referral === "Pending")
        .length,
    },
    {
      label: "Follow-up Due",
      count: patients.filter((patient) => patient.followUp === "Due Today")
        .length,
    },
  ];

  const filteredPatients = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return patients.filter((patient) => {
      const matchesSearch =
        !query ||
        patient.name.toLowerCase().includes(query) ||
        patient.id.toLowerCase().includes(query) ||
        patient.village.toLowerCase().includes(query) ||
        patient.phone.toLowerCase().includes(query);

      let matchesFilter = true;

      if (activeFilter === "Critical") {
        matchesFilter = patient.risk === "Critical";
      }

      if (activeFilter === "High Priority") {
        matchesFilter = patient.risk === "High";
      }

      if (activeFilter === "Referral Pending") {
        matchesFilter = patient.referral === "Pending";
      }

      if (activeFilter === "Follow-up Due") {
        matchesFilter = patient.followUp === "Due Today";
      }

      return matchesSearch && matchesFilter;
    });
  }, [activeFilter, searchTerm]);

  const handleOpenPatient = (patient) => {
    setSelectedPatient(patient);
  };

  const handleViewProfile = () => {
    setSelectedPatient(null);

    if (onNavigate) {
      onNavigate("profile");
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFAFD] text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-pink-100/70 bg-[#FFFAFD]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onBack}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600"
              aria-label="Back to dashboard"
            >
              <ArrowLeft size={18} />
            </button>

            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-100 text-pink-600">
                  <Users size={18} />
                </div>
                <h1 className="text-lg font-black tracking-tight text-slate-800">
                  Patient Management
                </h1>
              </div>

              <p className="mt-0.5 hidden text-xs font-medium text-slate-400 sm:block">
                Manage registered mothers and their care status
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-600">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Online
            </div>

            <button
              type="button"
              className="flex items-center gap-2 rounded-2xl bg-[#ED4B7D] px-4 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-pink-200 transition hover:bg-[#d93e6d]"
            >
              <Plus size={17} />
              Register New Patient
            </button>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-[#ED4B7D] px-3 py-2.5 text-xs font-extrabold text-white shadow-md shadow-pink-200 sm:hidden"
          >
            <Plus size={16} />
            <span>Register</span>
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-[1500px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-[2rem] border border-pink-100 bg-gradient-to-br from-white via-pink-50/80 to-orange-50/70 p-6 shadow-sm sm:p-8">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-pink-200/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-orange-200/25 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/80 px-3 py-1.5 text-xs font-extrabold text-pink-600 shadow-sm">
                <HeartPulse size={14} />
                MATERNAL CARE REGISTRY
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-800 sm:text-4xl">
                Every mother,
                <span className="text-[#ED4B7D]"> continuously cared for.</span>
              </h2>

              <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-slate-500 sm:text-base">
                View patient history, monitor health indicators, track
                referrals and stay ahead of follow-ups from one place.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:min-w-[500px]">
              <div className="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur">
                <p className="text-xs font-bold text-slate-400">Registered</p>
                <p className="mt-1 text-2xl font-black text-slate-800">24</p>
                <p className="mt-1 text-[10px] font-bold text-emerald-500">
                  Active records
                </p>
              </div>

              <div className="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur">
                <p className="text-xs font-bold text-slate-400">Critical</p>
                <p className="mt-1 text-2xl font-black text-rose-600">3</p>
                <p className="mt-1 text-[10px] font-bold text-rose-500">
                  Needs attention
                </p>
              </div>

              <div className="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur">
                <p className="text-xs font-bold text-slate-400">Referrals</p>
                <p className="mt-1 text-2xl font-black text-orange-600">5</p>
                <p className="mt-1 text-[10px] font-bold text-orange-500">
                  Pending
                </p>
              </div>

              <div className="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur">
                <p className="text-xs font-bold text-slate-400">Follow-ups</p>
                <p className="mt-1 text-2xl font-black text-violet-600">7</p>
                <p className="mt-1 text-[10px] font-bold text-violet-500">
                  Due soon
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Summary Cards */}
        <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            icon={Users}
            label="Total Mothers"
            value="24"
            description="Registered in your care"
            iconClass="bg-pink-50 text-pink-600"
          />

          <MetricCard
            icon={AlertCircle}
            label="Critical Cases"
            value="3"
            description="Require immediate attention"
            iconClass="bg-rose-50 text-rose-600"
          />

          <MetricCard
            icon={FileText}
            label="Pending Referrals"
            value="5"
            description="Awaiting referral action"
            iconClass="bg-orange-50 text-orange-600"
          />

          <MetricCard
            icon={CalendarDays}
            label="Follow-ups Due"
            value="7"
            description="Due today or soon"
            iconClass="bg-violet-50 text-violet-600"
          />
        </section>

        {/* Search and Filters */}
        <section className="mt-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search by name, ID, village..."
                className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-pink-300 focus:ring-4 focus:ring-pink-100"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1">
              {filters.map((filter) => {
                const active = activeFilter === filter.label;

                return (
                  <button
                    key={filter.label}
                    type="button"
                    onClick={() => setActiveFilter(filter.label)}
                    className={`flex shrink-0 items-center gap-2 rounded-xl px-3.5 py-2.5 text-xs font-extrabold transition ${
                      active
                        ? "bg-[#ED4B7D] text-white shadow-md shadow-pink-200"
                        : "border border-slate-200 bg-white text-slate-500 hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600"
                    }`}
                  >
                    {filter.label}
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                        active
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {filter.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Patient List Header */}
        <section className="mt-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-black text-slate-800">
                Patient Records
              </h2>
              <p className="mt-1 text-xs font-medium text-slate-400">
                Showing {filteredPatients.length} of {patients.length} demo
                records
              </p>
            </div>

            <div className="hidden items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-bold text-slate-400 shadow-sm sm:flex">
              <UserRound size={14} />
              {filteredPatients.length} patients
            </div>
          </div>

          {/* Patient Cards */}
          <div className="space-y-3">
            {filteredPatients.map((patient, index) => (
              <PatientCard
                key={patient.id}
                patient={patient}
                index={index}
                onOpen={handleOpenPatient}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredPatients.length === 0 && (
            <div className="rounded-3xl border border-dashed border-slate-200 bg-white p-12 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                <Search size={24} />
              </div>

              <h3 className="mt-4 text-base font-black text-slate-700">
                No patients found
              </h3>

              <p className="mx-auto mt-2 max-w-sm text-sm font-medium leading-6 text-slate-400">
                Try searching with another name, patient ID, village, or
                change the active filter.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setActiveFilter("All");
                }}
                className="mt-5 rounded-xl bg-pink-50 px-4 py-2.5 text-xs font-extrabold text-pink-600 transition hover:bg-pink-100"
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>

        {/* AI Information Banner */}
        <section className="mt-8 overflow-hidden rounded-3xl border border-violet-100 bg-gradient-to-r from-violet-50 via-white to-pink-50 p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
              <Sparkles size={21} />
            </div>

            <div className="flex-1">
              <h3 className="text-sm font-black text-slate-800">
                CuraFlow AI is continuously watching for care priorities
              </h3>

              <p className="mt-1 text-xs font-medium leading-5 text-slate-500">
                Patient indicators can be assessed to help ASHA workers
                identify who may need attention first. AI suggestions are
                explainable and intended only as decision support.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate && onNavigate("queue")}
              className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-extrabold text-violet-600 shadow-sm ring-1 ring-violet-100 transition hover:bg-violet-50"
            >
              Open AI Queue
              <ArrowRight size={15} />
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 border-t border-slate-100 py-6 text-center">
          <p className="text-[11px] font-medium text-slate-400">
            CuraFlow AI · Maternal Care Decision Support · Demo Interface
          </p>
          <p className="mt-1 text-[10px] font-medium text-slate-300">
            Designed for ASHA workers · Not a replacement for clinical
            judgement
          </p>
        </footer>
      </main>

      {/* Patient Preview Modal */}
      {selectedPatient && (
        <PatientPreviewModal
          patient={selectedPatient}
          index={patients.findIndex(
            (patient) => patient.id === selectedPatient.id,
          )}
          onClose={() => setSelectedPatient(null)}
          onViewProfile={handleViewProfile}
        />
      )}
    </div>
  );
}

export default Patients;