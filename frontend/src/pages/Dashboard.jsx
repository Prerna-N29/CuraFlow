import {
  Activity,
  AlertCircle,
  ArrowRight,
  Bell,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  FileText,
  HeartPulse,
  Home,
  LayoutDashboard,
  LogOut,
  Menu,
  Search,
  Settings,
  Sparkles,
  Stethoscope,
  Users,
  X,
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
    action: "Immediate PHC referral",
    reason: "High BP • Severe anemia • Referral pending",
    initials: "LD",
  },
  {
    id: 2,
    name: "Meena",
    age: 24,
    week: 28,
    village: "Perumalpuram",
    score: 82,
    priority: "High",
    action: "Follow-up today",
    reason: "Missed ANC visit • Low hemoglobin",
    initials: "ME",
  },
  {
    id: 3,
    name: "Kavitha",
    age: 30,
    week: 24,
    village: "Mettur",
    score: 64,
    priority: "Medium",
    action: "Schedule home visit",
    reason: "Reduced fetal movement • Follow-up due",
    initials: "KA",
  },
  {
    id: 4,
    name: "Priya",
    age: 22,
    week: 20,
    village: "Kovilur",
    score: 42,
    priority: "Low",
    action: "Check-in next week",
    reason: "Routine follow-up",
    initials: "PR",
  },
];

const priorityConfig = {
  Critical: {
    badge: "bg-[#FFE1E8] text-[#E92D62]",
    dot: "bg-[#FF4773]",
    action: "bg-[#FFF0F3] text-[#E92D62]",
  },
  High: {
    badge: "bg-[#FFF0D8] text-[#ED8415]",
    dot: "bg-[#FF9D2E]",
    action: "bg-[#FFF7E9] text-[#DF7A08]",
  },
  Medium: {
    badge: "bg-[#FFF6C9] text-[#C99500]",
    dot: "bg-[#F4C430]",
    action: "bg-[#FFFBE8] text-[#B88800]",
  },
  Low: {
    badge: "bg-[#D9F8ED] text-[#16A579]",
    dot: "bg-[#35CBA2]",
    action: "bg-[#EFFCF7] text-[#14956E]",
  },
};

function SidebarItem({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`group flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm transition-all ${
        active
          ? "bg-[#FFE2EC] font-semibold text-[#D92D65] shadow-sm"
          : "text-[#53617A] hover:bg-[#FFF2F6] hover:text-[#D92D65]"
      }`}
    >
      {icon}
      <span>{label}</span>

      {active && (
        <span className="ml-auto h-2 w-2 rounded-full bg-[#F13C73]" />
      )}
    </button>
  );
}

function StatCard({
  icon,
  label,
  value,
  subtitle,
  color,
  trend,
}) {
  const styles = {
    pink: {
      card: "border-[#FFD7E3] bg-gradient-to-br from-[#FFF1F6] to-white",
      icon: "bg-[#FFD8E5] text-[#ED3268]",
      trend: "text-[#ED3268]",
      line: "#F34B7B",
    },
    coral: {
      card: "border-[#FFD7D8] bg-gradient-to-br from-[#FFF0EF] to-white",
      icon: "bg-[#FFDADA] text-[#F04458]",
      trend: "text-[#EF4356]",
      line: "#F04458",
    },
    peach: {
      card: "border-[#FFE4BC] bg-gradient-to-br from-[#FFF8E9] to-white",
      icon: "bg-[#FFE9BD] text-[#EF8C12]",
      trend: "text-[#EF8C12]",
      line: "#F5A623",
    },
    mint: {
      card: "border-[#C9F2E5] bg-gradient-to-br from-[#EDFCF7] to-white",
      icon: "bg-[#D4F7EA] text-[#15A77D]",
      trend: "text-[#12A479]",
      line: "#28C69B",
    },
  };

  const style = styles[color];

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ${style.card}`}
    >
      <div className="flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${style.icon}`}
        >
          {icon}
        </div>

        <span className={`text-xs font-bold ${style.trend}`}>
          ↑ {trend}
        </span>
      </div>

      <p className="mt-5 text-xs font-medium text-[#68758B]">
        {label}
      </p>

      <p className="mt-1 text-3xl font-bold tracking-tight text-[#17213B]">
        {value}
      </p>

      <p className="mt-1 text-xs text-[#8B96A8]">
        {subtitle}
      </p>

      <svg
        className="absolute bottom-2 right-3 h-10 w-24 opacity-80"
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
      >
        <path
          d="M0 32 C15 27 18 35 30 25 S45 8 55 23 S70 32 78 17 S90 8 100 4"
          fill="none"
          stroke={style.line}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function PatientRow({ patient }) {
  const style = priorityConfig[patient.priority];

  return (
    <div className="group flex flex-col gap-4 border-t border-[#F1E9EE] py-4 first:border-t-0 lg:flex-row lg:items-center">
      <div
        className={`h-12 w-1 shrink-0 rounded-full ${style.dot}`}
      />

      <div className="flex min-w-0 flex-1 items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FFCBD8] to-[#D8F4EA] text-xs font-bold text-[#4A5265]">
          {patient.initials}
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-bold text-[#202A43]">
              {patient.name}
            </p>

            <span
              className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${style.badge}`}
            >
              {patient.priority}
            </span>

            <span className="rounded-full bg-[#F7F7FA] px-2 py-1 text-[10px] font-bold text-[#566078]">
              {patient.score}/100
            </span>
          </div>

          <p className="mt-1 text-xs text-[#8993A5]">
            {patient.age} yrs • {patient.week} weeks •{" "}
            {patient.village}
          </p>

          <p className="mt-1 text-xs text-[#69758A]">
            {patient.reason}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 lg:w-52">
        <div
          className={`flex-1 rounded-2xl px-3 py-2.5 text-center text-xs font-bold ${style.action}`}
        >
          {patient.action}
        </div>

        <button className="rounded-xl border border-[#ECE7ED] bg-white p-2.5 text-[#8993A5] hover:border-[#F4B5C5] hover:text-[#E72E64]">
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

function RiskChart() {
  return (
    <div className="relative mt-5 h-48">
      <div className="absolute inset-x-0 top-5 border-t border-dashed border-[#EEEAF0]" />
      <div className="absolute inset-x-0 top-16 border-t border-dashed border-[#EEEAF0]" />
      <div className="absolute inset-x-0 top-28 border-t border-dashed border-[#EEEAF0]" />
      <div className="absolute inset-x-0 top-40 border-t border-dashed border-[#EEEAF0]" />

      <svg
        viewBox="0 0 500 180"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="pinkArea"
            x1="0"
            x2="0"
            y1="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#FF6F98"
              stopOpacity="0.28"
            />
            <stop
              offset="100%"
              stopColor="#FF6F98"
              stopOpacity="0.02"
            />
          </linearGradient>
        </defs>

        <path
          d="M0 120 C40 145 60 90 105 105 S155 65 205 108 S260 60 305 88 S355 42 405 70 S455 95 500 55 L500 180 L0 180 Z"
          fill="url(#pinkArea)"
        />

        <path
          d="M0 120 C40 145 60 90 105 105 S155 65 205 108 S260 60 305 88 S355 42 405 70 S455 95 500 55"
          fill="none"
          stroke="#F34F7D"
          strokeWidth="3"
        />

        <circle cx="355" cy="42" r="6" fill="#F34F7D" />
        <circle
          cx="355"
          cy="42"
          r="13"
          fill="#F34F7D"
          opacity="0.12"
        />
      </svg>

      <div className="absolute left-[66%] top-0 rounded-2xl bg-[#FFE1EB] px-4 py-2 shadow-sm">
        <p className="text-[10px] font-medium text-[#7D6C76]">
          High Risk
        </p>

        <p className="text-sm font-bold text-[#E52E64]">
          18 cases
        </p>
      </div>

      <div className="absolute bottom-0 flex w-full justify-between text-[10px] text-[#9AA2B0]">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    </div>
  );
}

function ActiveCases() {
  return (
    <section className="rounded-3xl border border-[#EEE8EE] bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-bold text-[#1E2942]">
            Active Cases
          </h2>

          <p className="mt-1 text-[10px] text-[#98A0AF]">
            Current care distribution
          </p>
        </div>

        <button className="rounded-xl bg-[#FFF1F5] px-3 py-2 text-[10px] font-bold text-[#E52F65]">
          Details
        </button>
      </div>

      <div className="mt-5 flex items-center gap-5">
        <div className="relative flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-[conic-gradient(#FF4773_0_12.5%,#FF9D2E_12.5%_33%,#F4C430_33%_66%,#35CBA2_66%_100%)]">
          <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white">
            <span className="text-2xl font-bold text-[#1E2942]">
              24
            </span>

            <span className="text-[10px] text-[#9098A8]">
              Patients
            </span>
          </div>
        </div>

        <div className="flex-1 space-y-3">
          {[
            ["Critical", 3, "bg-[#FF4773]"],
            ["High", 5, "bg-[#FF9D2E]"],
            ["Medium", 8, "bg-[#F4C430]"],
            ["Low", 8, "bg-[#35CBA2]"],
          ].map(([label, value, color]) => (
            <div
              key={label}
              className="flex items-center gap-2"
            >
              <span
                className={`h-2.5 w-2.5 rounded-full ${color}`}
              />

              <span className="flex-1 text-xs text-[#667187]">
                {label}
              </span>

              <span className="text-xs font-bold text-[#303A50]">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TaskProgress({
  icon,
  label,
  current,
  total,
  color,
}) {
  const percentage = (current / total) * 100;

  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-xl ${color}`}
      >
        {icon}
      </div>

      <div className="flex-1">
        <div className="mb-1.5 flex justify-between">
          <span className="text-xs font-semibold text-[#5D687D]">
            {label}
          </span>

          <span className="text-[10px] text-[#929BAB]">
            {current}/{total}
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-[#F0EDF2]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#EC5D91] to-[#9D73E9]"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}

function TaskCard() {
  return (
    <section className="rounded-3xl border border-[#EEE8EE] bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-[#1E2942]">
          Task Progress
        </h2>

        <button className="flex items-center gap-1 rounded-xl bg-[#F8F5FF] px-3 py-2 text-[10px] font-semibold text-[#8060D7]">
          Today
          <ChevronDown size={12} />
        </button>
      </div>

      <div className="mt-6 space-y-5">
        <TaskProgress
          icon={<Home size={16} />}
          label="Home Visits"
          current={3}
          total={5}
          color="bg-[#FFE8EF] text-[#EC4775]"
        />

        <TaskProgress
          icon={<FileText size={16} />}
          label="Referrals"
          current={2}
          total={4}
          color="bg-[#EEE5FF] text-[#8B61DD]"
        />

        <TaskProgress
          icon={<CalendarDays size={16} />}
          label="Follow-ups"
          current={4}
          total={7}
          color="bg-[#DDF8ED] text-[#1EAF85]"
        />
      </div>
    </section>
  );
}

export default function Dashboard({
  onLogout,
  onNavigate,
}) {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFAFD] text-[#202A43]">

      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-[#F1E4EA] bg-white/95 px-5 py-4 backdrop-blur lg:hidden">

        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF9AB5] to-[#B9EAD8] text-white">
            <HeartPulse size={21} />
          </div>

          <div>
            <p className="font-bold text-[#18223A]">
              CuraFlow
            </p>

            <p className="text-[9px] text-[#969DAC]">
              Care for every tomorrow
            </p>
          </div>
        </div>

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="rounded-xl border border-[#EEE4E9] p-2 text-[#5E687B]"
        >
          {mobileMenu ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      <div className="flex min-h-screen">

        <aside
          className={`${
            mobileMenu
              ? "absolute left-0 top-[73px] z-30 block"
              : "hidden"
          } w-64 border-r border-[#F0E5EB] bg-white lg:sticky lg:top-0 lg:block lg:h-screen`}
        >
          <div className="flex h-full min-h-screen flex-col">

            <div className="hidden border-b border-[#F3E9ED] px-6 py-6 lg:block">
              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF9AB5] via-[#F8B5CB] to-[#BDEBDC] text-white shadow-md shadow-pink-100">
                  <HeartPulse size={25} />
                </div>

                <div>
                  <p className="text-xl font-bold tracking-tight text-[#18223A]">
                    CuraFlow
                  </p>

                  <p className="text-[10px] text-[#9AA1AE]">
                    Care for every tomorrow
                  </p>
                </div>
              </div>
            </div>

            <nav className="flex-1 px-4 py-6">

              <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#A2A8B4]">
                Workspace
              </p>

              <div className="space-y-1.5">

                <SidebarItem
                  active
                  icon={<LayoutDashboard size={18} />}
                  label="Dashboard"
                />

                <SidebarItem
                  icon={<Sparkles size={18} />}
                  label="Intervention Queue"
                  onClick={() => onNavigate("queue")}
                />

                <SidebarItem
                  icon={<Users size={18} />}
                  label="Patients"
                  onClick={() => onNavigate("patients")}
                />

                <SidebarItem
                  icon={<CalendarDays size={18} />}
                  label="Visits & Follow-ups"
                />

                <SidebarItem
                  icon={<ClipboardList size={18} />}
                  label="Referrals"
                />

                <SidebarItem
                  icon={<Activity size={18} />}
                  label="Reports"
                />
              </div>

              <p className="mb-3 mt-8 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#A2A8B4]">
                Support
              </p>

              <div className="space-y-1.5">

                <SidebarItem
                  icon={<FileText size={18} />}
                  label="Resources"
                />

                <SidebarItem
                  icon={<Settings size={18} />}
                  label="Settings"
                />
              </div>

              <div className="relative mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-[#FFE8F0] via-[#FFF1F5] to-[#E4F8F1] p-5">

                <div className="absolute -right-6 -top-7 h-24 w-24 rounded-full bg-[#FFADC2]/40" />

                <div className="relative text-3xl">
                  🌸
                </div>

                <p className="relative mt-3 text-sm font-bold leading-snug text-[#263149]">
                  Healthy Mothers.
                  <br />
                  Stronger Communities.
                </p>

                <p className="relative mt-2 text-[10px] leading-relaxed text-[#7F899A]">
                  Every intervention starts with noticing what matters.
                </p>

                <div className="absolute bottom-3 right-4 text-2xl opacity-70">
                  🌿
                </div>
              </div>
            </nav>

            <div className="border-t border-[#F2E8ED] p-4">
              <div className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#FFF2F6] to-[#F3FBF8] p-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD8E4] text-sm font-bold text-[#D92F65]">
                  AS
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-[#283249]">
                    Anitha S
                  </p>

                  <p className="text-[10px] text-[#969EAD]">
                    ASHA Worker
                  </p>
                </div>

                <button
                  onClick={onLogout}
                  className="rounded-lg p-2 text-[#929AAA] hover:bg-white hover:text-[#E52F65]"
                >
                  <LogOut size={16} />
                </button>
              </div>
            </div>
          </div>
        </aside>

        <main className="min-w-0 flex-1">

          <header className="hidden items-center justify-between border-b border-[#F0E7EB] bg-white px-8 py-4 lg:flex">

            <div className="relative w-full max-w-md">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9DA5B3]"
              />

              <input
                type="text"
                placeholder="Search patients, ID, village..."
                className="w-full rounded-2xl border-0 bg-[#F9F6F8] py-3 pl-11 pr-4 text-sm text-[#475168] outline-none ring-1 ring-transparent transition focus:bg-white focus:ring-[#F3B6C8]"
              />
            </div>

            <div className="ml-8 flex items-center gap-5">

              <div className="flex items-center gap-2 rounded-full border border-[#EEE5EA] bg-white px-4 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#27C493]" />

                <span className="text-xs font-bold text-[#4D596F]">
                  Online
                </span>

                <ChevronDown
                  size={13}
                  className="text-[#9AA1AE]"
                />
              </div>

              <button className="relative rounded-xl p-2.5 text-[#626C7E] hover:bg-[#FFF2F6]">
                <Bell size={20} />

                <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#F33E70] text-[8px] font-bold text-white">
                  3
                </span>
              </button>

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#FFD3DF] to-[#D4F1E6] text-xs font-bold text-[#465167]">
                  AS
                </div>

                <div>
                  <p className="text-sm font-bold text-[#263149]">
                    Anitha S
                  </p>

                  <p className="text-[10px] text-[#9AA1AE]">
                    Kovilur PHC
                  </p>
                </div>

                <ChevronDown
                  size={14}
                  className="text-[#9AA1AE]"
                />
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-[1550px] p-5 lg:p-8">

            <section className="relative mb-7 overflow-hidden rounded-[32px] border border-[#FFDCE7] bg-gradient-to-r from-[#FFF0F5] via-[#FFF8F2] to-[#EAF9F4] px-6 py-7 lg:px-8 lg:py-8">

              <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#FFC6D6]/40" />

              <div className="absolute bottom-[-90px] right-48 h-48 w-48 rounded-full bg-[#C7F0DF]/50" />

              <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_380px]">

                <div>
                  <p className="text-sm font-semibold text-[#4CA087]">
                    Sunday, 13 September 2026
                  </p>

                  <h1 className="mt-2 text-4xl font-light tracking-tight text-[#303B54] lg:text-5xl">
                    Hello,{" "}
                    <span className="font-bold text-[#18223A]">
                      Anitha
                    </span>{" "}
                    <span className="inline-block">👋</span>
                  </h1>

                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#6E788B]">
                    Here's what needs your attention today. CuraFlow
                    has prioritized the cases that may need your care
                    first.
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-xs font-semibold italic text-[#667286] shadow-sm">
                    Small care. Big change. Healthier tomorrows.
                    <span>💗</span>
                  </div>
                </div>

                <div className="relative hidden h-40 lg:block">
                  <div className="absolute right-24 top-5 text-6xl">
                    🤰🏻
                  </div>

                  <div className="absolute left-12 top-3 text-3xl">
                    🌿
                  </div>

                  <div className="absolute right-5 top-8 text-2xl">
                    💗
                  </div>

                  <div className="absolute bottom-0 right-0 rounded-2xl border border-white bg-white/70 p-4 shadow-sm backdrop-blur">
                    <p className="text-[10px] text-[#9098A8]">
                      Every mother
                    </p>

                    <p className="text-lg font-bold text-[#E62F65]">
                      matters.
                    </p>

                    <p className="mt-1 text-[9px] text-[#9AA1AE]">
                      — CuraFlow
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

              <StatCard
                icon={<Users size={22} />}
                label="Pregnant Mothers"
                value="24"
                subtitle="Under your care"
                color="pink"
                trend="12%"
              />

              <StatCard
                icon={<AlertCircle size={22} />}
                label="Critical Cases"
                value="3"
                subtitle="Need immediate attention"
                color="coral"
                trend="1"
              />

              <StatCard
                icon={<FileText size={22} />}
                label="Pending Referrals"
                value="5"
                subtitle="Require verification"
                color="peach"
                trend="2"
              />

              <StatCard
                icon={<CalendarDays size={22} />}
                label="Follow-ups Due"
                value="7"
                subtitle="Tasks for today"
                color="mint"
                trend="3"
              />
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-[1.65fr_1fr]">

              <section className="rounded-[30px] border border-[#EEE7EC] bg-white p-5 shadow-sm lg:p-6">

                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">

                  <div>
                    <div className="flex items-center gap-2">

                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFD8E5] to-[#E9DCFF] text-[#E72F68]">
                        <Sparkles size={20} />
                      </div>

                      <h2 className="text-lg font-bold text-[#1D2942]">
                        AI Intervention Queue
                      </h2>

                      <span className="rounded-full bg-gradient-to-r from-[#FFE0EC] to-[#EEE2FF] px-2.5 py-1 text-[10px] font-bold text-[#D73572]">
                        AI
                      </span>
                    </div>

                    <p className="mt-2 text-xs text-[#929BAB]">
                      Prioritized using health indicators, ANC
                      history and care continuity.
                    </p>
                  </div>

                  <button
                    onClick={() => onNavigate("queue")}
                    className="flex items-center gap-1 text-xs font-bold text-[#E3316A] hover:text-[#C92358]"
                  >
                    View All
                    <ArrowRight size={14} />
                  </button>
                </div>

                <div className="mt-5 flex gap-2 overflow-x-auto pb-1">

                  <button
                    onClick={() => onNavigate("queue")}
                    className="shrink-0 rounded-full bg-gradient-to-r from-[#ED4B7D] to-[#E82D69] px-4 py-2 text-xs font-bold text-white shadow-md shadow-pink-100"
                  >
                    All 24
                  </button>

                  <button
                    onClick={() => onNavigate("queue")}
                    className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#FFF0F4] px-4 py-2 text-xs font-semibold text-[#DF3969]"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#FF4773]" />
                    Critical 3
                  </button>

                  <button
                    onClick={() => onNavigate("queue")}
                    className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#FFF7EA] px-4 py-2 text-xs font-semibold text-[#DB7E0D]"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#FF9D2E]" />
                    High 5
                  </button>

                  <button
                    onClick={() => onNavigate("queue")}
                    className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#FFFBE8] px-4 py-2 text-xs font-semibold text-[#B88B00]"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#F4C430]" />
                    Medium 8
                  </button>

                  <button
                    onClick={() => onNavigate("queue")}
                    className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#EDFCF7] px-4 py-2 text-xs font-semibold text-[#14966F]"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#35CBA2]" />
                    Low 8
                  </button>
                </div>

                <div className="mt-3">
                  {patients.map((patient) => (
                    <PatientRow
                      key={patient.id}
                      patient={patient}
                    />
                  ))}
                </div>
              </section>

              <div className="space-y-6">

                <section className="rounded-[30px] border border-[#EEE7EC] bg-white p-5 shadow-sm">

                  <div className="flex items-start justify-between">

                    <div>
                      <h2 className="font-bold text-[#1D2942]">
                        Health Risk Overview
                      </h2>

                      <p className="mt-1 text-xs text-[#949CAB]">
                        Priority trends this week
                      </p>
                    </div>

                    <button className="flex items-center gap-2 rounded-xl border border-[#EEE7ED] bg-white px-3 py-2 text-xs font-semibold text-[#697488]">
                      This Week
                      <ChevronDown size={13} />
                    </button>
                  </div>

                  <RiskChart />
                </section>

                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
                  <ActiveCases />
                  <TaskCard />
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">

              <section className="rounded-[30px] border border-[#EEE7EC] bg-white p-5 shadow-sm lg:p-6">

                <div className="flex items-center justify-between">

                  <div>
                    <h2 className="font-bold text-[#1D2942]">
                      Today's Schedule
                    </h2>

                    <p className="mt-1 text-xs text-[#949CAB]">
                      Your upcoming care activities
                    </p>
                  </div>

                  <button className="text-xs font-bold text-[#E33269]">
                    View All →
                  </button>
                </div>

                <div className="mt-5 divide-y divide-[#F2EBEF]">

                  <div className="flex items-center gap-4 py-4 first:pt-0">
                    <span className="w-16 text-xs font-bold text-[#626E83]">
                      09:00 AM
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE5ED] text-[#E7356C]">
                      <Home size={18} />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-bold text-[#374258]">
                        Home visit — Meena
                      </p>

                      <p className="text-xs text-[#929AAA]">
                        Perumalpuram
                      </p>
                    </div>

                    <span className="rounded-full bg-[#DCF8ED] px-3 py-1.5 text-[10px] font-bold text-[#18A579]">
                      On track
                    </span>
                  </div>

                  <div className="flex items-center gap-4 py-4">
                    <span className="w-16 text-xs font-bold text-[#626E83]">
                      11:00 AM
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFE3E8] text-[#F04458]">
                      <Stethoscope size={18} />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-bold text-[#374258]">
                        PHC referral — Lakshmi Devi
                      </p>

                      <p className="text-xs text-[#929AAA]">
                        Kovilur
                      </p>
                    </div>

                    <span className="rounded-full bg-[#FFE1E8] px-3 py-1.5 text-[10px] font-bold text-[#E93466]">
                      Urgent
                    </span>
                  </div>

                  <div className="flex items-center gap-4 py-4 last:pb-0">
                    <span className="w-16 text-xs font-bold text-[#626E83]">
                      02:00 PM
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFF1CF] text-[#E59A13]">
                      <CalendarDays size={18} />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-bold text-[#374258]">
                        Follow-up — Kavitha
                      </p>

                      <p className="text-xs text-[#929AAA]">
                        Mettur
                      </p>
                    </div>

                    <span className="rounded-full bg-[#FFF3CE] px-3 py-1.5 text-[10px] font-bold text-[#C58D08]">
                      Due
                    </span>
                  </div>
                </div>
              </section>

              <section className="rounded-[30px] border border-[#EEE7EC] bg-white p-5 shadow-sm lg:p-6">

                <div className="flex items-center justify-between">

                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="font-bold text-[#1D2942]">
                        Recent Alerts
                      </h2>

                      <span className="rounded-full bg-[#FFE2EA] px-2.5 py-1 text-[10px] font-bold text-[#E63269]">
                        2 new
                      </span>
                    </div>

                    <p className="mt-1 text-xs text-[#949CAB]">
                      Updates that may need your attention
                    </p>
                  </div>

                  <button className="text-xs font-bold text-[#E33269]">
                    View All →
                  </button>
                </div>

                <div className="mt-5 space-y-3">

                  <div className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#FFF0F3] to-white p-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#EF405E] shadow-sm">
                      <AlertCircle size={18} />
                    </div>

                    <div className="flex-1">
                      <p className="text-xs font-bold text-[#3B455B]">
                        Lakshmi Devi's BP reading is high
                      </p>

                      <p className="mt-0.5 text-[10px] text-[#9BA2AF]">
                        2 hours ago
                      </p>
                    </div>

                    <ChevronRight
                      size={16}
                      className="text-[#C3C8D1]"
                    />
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#FFF9E9] to-white p-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#ED9B19] shadow-sm">
                      <CalendarDays size={18} />
                    </div>

                    <div className="flex-1">
                      <p className="text-xs font-bold text-[#3B455B]">
                        Meena missed her ANC appointment
                      </p>

                      <p className="mt-0.5 text-[10px] text-[#9BA2AF]">
                        5 hours ago
                      </p>
                    </div>

                    <ChevronRight
                      size={16}
                      className="text-[#C3C8D1]"
                    />
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#EDFDF7] to-white p-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#20AA82] shadow-sm">
                      <FileText size={18} />
                    </div>

                    <div className="flex-1">
                      <p className="text-xs font-bold text-[#3B455B]">
                        New referral request from Kovilur
                      </p>

                      <p className="mt-0.5 text-[10px] text-[#9BA2AF]">
                        Yesterday
                      </p>
                    </div>

                    <ChevronRight
                      size={16}
                      className="text-[#C3C8D1]"
                    />
                  </div>
                </div>
              </section>
            </div>

            <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[#F0E7EB] py-5 text-[10px] text-[#9BA2AF] sm:flex-row">

              <p>
                <span className="font-bold text-[#E33269]">
                  CuraFlow
                </span>{" "}
                • AI-powered maternal care decision support
              </p>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#27C493]" />
                All systems operational
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}