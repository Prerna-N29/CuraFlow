import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  HeartPulse,
  Home,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
} from "lucide-react";

const patient = {
  id: "CF-001",
  name: "Lakshmi Devi",
  age: 27,
  week: 32,
  village: "Kovilur",
  phone: "+91 98XXX XX421",
  bloodGroup: "B+",
  gravida: "G2P1",
  dueDate: "08 Nov 2026",
  bp: "158/102",
  hb: "7.8",
  weight: "61.4 kg",
  priority: "Critical",
  referral: "Pending",
  lastVisit: "13 Sep 2026",
};

const timeline = [
  {
    date: "13 Sep 2026",
    time: "08:20 AM",
    title: "Visit assessment recorded",
    description:
      "BP 158/102 mmHg and Hb 7.8 g/dL recorded during today's visit.",
    type: "alert",
  },
  {
    date: "12 Sep 2026",
    time: "04:30 PM",
    title: "Referral generated",
    description:
      "Referral to Kovilur PHC generated for further clinical assessment.",
    type: "referral",
  },
  {
    date: "28 Aug 2026",
    time: "10:15 AM",
    title: "ANC visit completed",
    description:
      "Routine antenatal check-up completed. Nutrition counselling provided.",
    type: "visit",
  },
  {
    date: "10 Aug 2026",
    time: "09:40 AM",
    title: "Hemoglobin recorded",
    description:
      "Hemoglobin measured at 8.6 g/dL. Iron supplementation advised.",
    type: "health",
  },
  {
    date: "22 Jul 2026",
    time: "11:00 AM",
    title: "Patient registered",
    description:
      "Lakshmi Devi added to the CuraFlow maternal care registry.",
    type: "registered",
  },
];

function InfoItem({ icon, label, value }) {
  return (
    <div className="rounded-2xl bg-[#FAF8F9] p-4">
      <div className="flex items-center gap-2">
        <span className="text-[#E63A6E]">{icon}</span>

        <span className="text-[9px] font-medium text-[#969EAC]">
          {label}
        </span>
      </div>

      <p className="mt-2 text-sm font-bold text-[#3C475D]">
        {value}
      </p>
    </div>
  );
}

function HealthCard({ label, value, unit, icon, warning }) {
  return (
    <div
      className={`rounded-3xl border p-5 ${
        warning
          ? "border-[#FFD0DC] bg-gradient-to-br from-[#FFF0F4] to-white"
          : "border-[#EEE7EC] bg-white"
      }`}
    >
      <div className="flex items-start justify-between">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${
            warning
              ? "bg-[#FFE0E9] text-[#E53369]"
              : "bg-[#EEF9F5] text-[#1AA27B]"
          }`}
        >
          {icon}
        </div>

        {warning && (
          <span className="rounded-full bg-[#FFE1E9] px-2.5 py-1 text-[9px] font-bold text-[#E53369]">
            Attention
          </span>
        )}
      </div>

      <p className="mt-5 text-[10px] text-[#929AAA]">
        {label}
      </p>

      <div className="mt-1 flex items-end gap-1">
        <p
          className={`text-2xl font-bold ${
            warning ? "text-[#E53369]" : "text-[#303B53]"
          }`}
        >
          {value}
        </p>

        {unit && (
          <span className="mb-1 text-[10px] text-[#929AAA]">
            {unit}
          </span>
        )}
      </div>
    </div>
  );
}

function TimelineIcon({ type }) {
  const styles = {
    alert: {
      bg: "bg-[#FFE1E9]",
      text: "text-[#E53369]",
      icon: <AlertCircle size={17} />,
    },
    referral: {
      bg: "bg-[#EEE5FF]",
      text: "text-[#8560D9]",
      icon: <FileText size={17} />,
    },
    visit: {
      bg: "bg-[#DDF8ED]",
      text: "text-[#179D76]",
      icon: <Stethoscope size={17} />,
    },
    health: {
      bg: "bg-[#FFF2D2]",
      text: "text-[#D99312]",
      icon: <HeartPulse size={17} />,
    },
    registered: {
      bg: "bg-[#E8F2FF]",
      text: "text-[#5382C4]",
      icon: <UserRound size={17} />,
    },
  };

  const style = styles[type];

  return (
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${style.bg} ${style.text}`}
    >
      {style.icon}
    </div>
  );
}

export default function PatientProfile({ onBack, onNavigate }) {
  return (
    <div className="min-h-screen bg-[#FFFAFD] text-[#202A43]">

      {/* HEADER */}
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
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#A0A7B3]">
                Patient Profile
              </p>

              <div className="mt-0.5 flex items-center gap-2">
                <h1 className="text-xl font-bold text-[#1D2942]">
                  {patient.name}
                </h1>

                <span className="rounded-full bg-[#FFE1E9] px-2.5 py-1 text-[9px] font-bold text-[#E53369]">
                  {patient.priority}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate("visit")}
            className="hidden items-center gap-2 rounded-2xl bg-gradient-to-r from-[#ED4B7D] to-[#DC3F70] px-5 py-3 text-xs font-bold text-white shadow-md shadow-pink-100 transition hover:-translate-y-0.5 hover:shadow-lg sm:flex"
          >
            <Stethoscope size={16} />
            Update Visit
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-[1550px] p-5 lg:p-8">

        {/* PATIENT HERO */}
        <section className="relative mb-6 overflow-hidden rounded-[32px] border border-[#FFDCE7] bg-gradient-to-r from-[#FFF0F5] via-[#FFF8F2] to-[#EAF9F4] p-6 lg:p-8">

          <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#FFC6D6]/40" />

          <div className="absolute bottom-[-80px] right-72 h-48 w-48 rounded-full bg-[#C7F0DF]/45" />

          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#FFC4D5] to-[#D4F0E5] text-xl font-bold text-[#4B556A] shadow-sm">
                  LD
                </div>

                <span className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#F0446F] text-white">
                  <AlertCircle size={13} />
                </span>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-2xl font-bold text-[#263149]">
                    {patient.name}
                  </h2>

                  <span className="rounded-full bg-white/80 px-3 py-1.5 text-[9px] font-bold text-[#D83268]">
                    {patient.id}
                  </span>
                </div>

                <p className="mt-2 text-xs text-[#788397]">
                  {patient.age} years • {patient.week} weeks pregnant •{" "}
                  {patient.village}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="flex items-center gap-1.5 rounded-full bg-white/75 px-3 py-1.5 text-[9px] font-semibold text-[#707B8E]">
                    <MapPin size={11} />
                    {patient.village}
                  </span>

                  <span className="flex items-center gap-1.5 rounded-full bg-white/75 px-3 py-1.5 text-[9px] font-semibold text-[#707B8E]">
                    <Phone size={11} />
                    {patient.phone}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-3xl bg-white/65 p-5 backdrop-blur">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFE0E9] text-[#E53369]">
                <HeartPulse size={25} />
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-wider text-[#929AAA]">
                  Care Priority
                </p>

                <p className="mt-1 text-2xl font-bold text-[#E53369]">
                  Critical
                </p>

                <p className="mt-1 text-[9px] text-[#929AAA]">
                  Immediate attention recommended
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ACTION BAR */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row">

          <button
            onClick={() => onNavigate("visit")}
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#ED4B7D] to-[#DC3F70] px-5 py-3.5 text-xs font-bold text-white shadow-md shadow-pink-100 transition hover:-translate-y-0.5"
          >
            <Stethoscope size={16} />
            Record New Visit
          </button>

          <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-[#E9E0E6] bg-white px-5 py-3.5 text-xs font-bold text-[#5D687C] transition hover:border-[#F1B4C7] hover:text-[#E3346B]">
            <FileText size={16} />
            Generate Referral
          </button>

          <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-[#E9E0E6] bg-white px-5 py-3.5 text-xs font-bold text-[#5D687C] transition hover:border-[#BFEBDD] hover:text-[#169A74]">
            <CalendarDays size={16} />
            Schedule Follow-up
          </button>
        </div>

        {/* HEALTH INDICATORS */}
        <section className="mb-6">

          <div className="mb-4">
            <h2 className="text-lg font-bold text-[#273149]">
              Latest Health Indicators
            </h2>

            <p className="mt-1 text-[10px] text-[#969EAC]">
              Most recent observations from patient visits
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <HealthCard
              label="Blood Pressure"
              value={patient.bp}
              unit="mmHg"
              icon={<HeartPulse size={18} />}
              warning
            />

            <HealthCard
              label="Hemoglobin"
              value={patient.hb}
              unit="g/dL"
              icon={<ActivityIcon />}
              warning
            />

            <HealthCard
              label="Pregnancy"
              value={patient.week}
              unit="weeks"
              icon={<CalendarDays size={18} />}
            />

            <HealthCard
              label="Weight"
              value={patient.weight}
              unit=""
              icon={<ActivityIcon />}
            />
          </div>
        </section>

        {/* TWO COLUMN */}
        <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">

          {/* PERSONAL / PREGNANCY */}
          <div className="space-y-6">

            <section className="rounded-[30px] border border-[#EEE7EC] bg-white p-5 shadow-sm lg:p-6">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE3EC] text-[#E6376C]">
                  <UserRound size={19} />
                </div>

                <div>
                  <h2 className="font-bold text-[#29344B]">
                    Personal & Pregnancy Details
                  </h2>

                  <p className="text-[9px] text-[#9AA2AF]">
                    Basic patient information
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">

                <InfoItem
                  icon={<UserRound size={14} />}
                  label="Age"
                  value={`${patient.age} years`}
                />

                <InfoItem
                  icon={<HeartPulse size={14} />}
                  label="Blood Group"
                  value={patient.bloodGroup}
                />

                <InfoItem
                  icon={<CalendarDays size={14} />}
                  label="Gestational Age"
                  value={`${patient.week} weeks`}
                />

                <InfoItem
                  icon={<CalendarDays size={14} />}
                  label="Expected Due Date"
                  value={patient.dueDate}
                />

                <InfoItem
                  icon={<UserRound size={14} />}
                  label="Pregnancy History"
                  value={patient.gravida}
                />

                <InfoItem
                  icon={<MapPin size={14} />}
                  label="Village"
                  value={patient.village}
                />
              </div>
            </section>

            {/* MEDICAL HISTORY */}
            <section className="rounded-[30px] border border-[#EEE7EC] bg-white p-5 shadow-sm lg:p-6">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#EEE5FF] text-[#8560D9]">
                    <FileText size={19} />
                  </div>

                  <div>
                    <h2 className="font-bold text-[#29344B]">
                      Medical & Care History
                    </h2>

                    <p className="text-[9px] text-[#9AA2AF]">
                      Important factors for ongoing care
                    </p>
                  </div>
                </div>

                <button className="text-[10px] font-bold text-[#E3356A]">
                  View Full History →
                </button>
              </div>

              <div className="mt-5 space-y-3">

                <div className="flex items-center gap-3 rounded-2xl bg-[#FFF1F4] p-4">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#E53369] shadow-sm">
                    <AlertCircle size={17} />
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-bold text-[#4B566B]">
                      Severe anemia
                    </p>

                    <p className="mt-0.5 text-[10px] text-[#929AAA]">
                      Latest Hb: 7.8 g/dL
                    </p>
                  </div>

                  <span className="rounded-full bg-[#FFE0E8] px-3 py-1.5 text-[9px] font-bold text-[#E53369]">
                    Active
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-[#FFF7E8] p-4">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#E28A14] shadow-sm">
                    <HeartPulse size={17} />
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-bold text-[#4B566B]">
                      Elevated blood pressure
                    </p>

                    <p className="mt-0.5 text-[10px] text-[#929AAA]">
                      Latest BP: 158/102 mmHg
                    </p>
                  </div>

                  <span className="rounded-full bg-[#FFEFCF] px-3 py-1.5 text-[9px] font-bold text-[#CF860B]">
                    Monitor
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-[#F0FCF8] p-4">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#1AA27B] shadow-sm">
                    <CheckCircle2 size={17} />
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-bold text-[#4B566B]">
                      Iron supplementation
                    </p>

                    <p className="mt-0.5 text-[10px] text-[#929AAA]">
                      Currently advised
                    </p>
                  </div>

                  <span className="rounded-full bg-[#DDF8ED] px-3 py-1.5 text-[9px] font-bold text-[#159A73]">
                    Active
                  </span>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">

            {/* AI SUMMARY */}
            <section className="relative overflow-hidden rounded-[30px] border border-[#E6DAFA] bg-gradient-to-br from-[#F8F2FF] via-white to-[#FFF1F6] p-5 shadow-sm lg:p-6">

              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#E7D7FF]/40" />

              <div className="relative">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#E9DDFF] text-[#8560D9]">
                    <Sparkles size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#493B68]">
                      CuraFlow AI Summary
                    </p>

                    <p className="text-[9px] text-[#978DA9]">
                      Explainable care-priority insight
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl bg-white/75 p-4">

                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-[#827791]">
                      Priority score
                    </span>

                    <span className="text-xl font-bold text-[#E53369]">
                      96/100
                    </span>
                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#EEEAF2]">
                    <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-[#ED4B7D] to-[#9D73E9]" />
                  </div>
                </div>

                <p className="mt-4 text-xs leading-5 text-[#6F657F]">
                  This patient has multiple indicators requiring
                  prompt attention. Elevated blood pressure, severe
                  anemia and a pending referral are contributing to
                  the current priority level.
                </p>

                <div className="mt-4 space-y-2">

                  {[
                    "Review BP immediately",
                    "Verify referral completion",
                    "Repeat Hb assessment",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-[10px] font-semibold text-[#71657F]"
                    >
                      <CheckCircle2
                        size={13}
                        className="text-[#9A6BE0]"
                      />
                      {item}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onNavigate("visit")}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#493B68] py-3 text-xs font-bold text-white transition hover:bg-[#3D3159]"
                >
                  Start Assessment
                  <ArrowRight size={14} />
                </button>
              </div>
            </section>

            {/* REFERRAL */}
            <section className="rounded-[30px] border border-[#FFDDE6] bg-white p-5 shadow-sm">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE4EB] text-[#E53369]">
                    <FileText size={18} />
                  </div>

                  <div>
                    <h2 className="font-bold text-[#29344B]">
                      Referral
                    </h2>

                    <p className="text-[9px] text-[#9AA2AF]">
                      Current referral status
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-[#FFE0E8] px-3 py-1.5 text-[9px] font-bold text-[#E53369]">
                  Pending
                </span>
              </div>

              <div className="mt-5 rounded-2xl bg-[#FFF7F9] p-4">

                <p className="text-[9px] text-[#969EAC]">
                  Referred facility
                </p>

                <p className="mt-1 text-sm font-bold text-[#4A556B]">
                  Kovilur Primary Health Centre
                </p>

                <p className="mt-3 text-[9px] text-[#969EAC]">
                  Reason
                </p>

                <p className="mt-1 text-xs font-semibold text-[#596478]">
                  Elevated BP and severe anemia
                </p>
              </div>

              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-[#F1D5DE] py-3 text-xs font-bold text-[#E3356A]">
                Verify Referral
                <ArrowRight size={14} />
              </button>
            </section>

            {/* FOLLOW UP */}
            <section className="rounded-[30px] border border-[#CDEFE3] bg-gradient-to-br from-[#F0FCF8] to-white p-5 shadow-sm">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#D8F7EA] text-[#169B74]">
                  <CalendarDays size={18} />
                </div>

                <div>
                  <h2 className="font-bold text-[#29344B]">
                    Next Follow-up
                  </h2>

                  <p className="text-[9px] text-[#8FA19A]">
                    Suggested care task
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3">

                <div className="flex h-12 w-12 flex-col items-center justify-center rounded-2xl bg-white shadow-sm">
                  <span className="text-[9px] font-bold text-[#9AA2AF]">
                    SEP
                  </span>

                  <span className="text-lg font-bold text-[#189B75]">
                    15
                  </span>
                </div>

                <div>
                  <p className="text-sm font-bold text-[#475269]">
                    Referral verification
                  </p>

                  <p className="mt-1 text-[10px] text-[#929AAA]">
                    Verify whether patient reached the PHC.
                  </p>
                </div>
              </div>

              <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#1AA27B] py-3 text-xs font-bold text-white">
                Mark Follow-up
                <CheckCircle2 size={14} />
              </button>
            </section>
          </div>
        </div>

        {/* TIMELINE */}
        <section className="mt-6 rounded-[30px] border border-[#EEE7EC] bg-white p-5 shadow-sm lg:p-6">

          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-[#273149]">
                  Patient Timeline
                </h2>

                <span className="rounded-full bg-[#F4F0F5] px-2.5 py-1 text-[9px] font-bold text-[#8A92A1]">
                  5 EVENTS
                </span>
              </div>

              <p className="mt-1 text-[10px] text-[#969EAC]">
                A chronological view of Lakshmi's care journey
              </p>
            </div>

            <button className="text-[10px] font-bold text-[#E3356A]">
              View Full Timeline →
            </button>
          </div>

          <div className="mt-6">

            {timeline.map((item, index) => (
              <div
                key={`${item.date}-${item.title}`}
                className="relative flex gap-4 pb-6 last:pb-0"
              >

                {index !== timeline.length - 1 && (
                  <div className="absolute left-5 top-11 h-full w-px bg-[#EDE7EC]" />
                )}

                <TimelineIcon type={item.type} />

                <div className="min-w-0 flex-1 pt-1">

                  <div className="flex flex-col justify-between gap-1 sm:flex-row">

                    <p className="text-sm font-bold text-[#465167]">
                      {item.title}
                    </p>

                    <div className="flex items-center gap-1 text-[9px] text-[#9AA2AF]">
                      <Clock3 size={10} />
                      {item.date} • {item.time}
                    </div>
                  </div>

                  <p className="mt-1 max-w-3xl text-xs leading-5 text-[#8A94A4]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DISCLAIMER */}
        <div className="mt-6 flex gap-3 rounded-2xl bg-[#F7F5FA] p-4">

          <ShieldCheck
            size={16}
            className="mt-0.5 shrink-0 text-[#8B73BA]"
          />

          <p className="text-[9px] leading-4 text-[#8E96A5]">
            CuraFlow is a decision-support platform. Patient
            information and AI-generated insights should be reviewed
            by appropriate healthcare professionals and must not
            replace clinical judgment.
          </p>
        </div>

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
            Patient record synced
          </div>
        </div>
      </main>
    </div>
  );
}

function ActivityIcon() {
  return (
    <svg
      width="18"
      height="18"
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