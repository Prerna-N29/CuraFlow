import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  Clock3,
  HeartPulse,
  Info,
  MapPin,
  Phone,
  RefreshCw,
  Sparkles,
  UserRound,
} from "lucide-react";
import { useState } from "react";

const followUpOptions = [
  {
    label: "Within 24 hours",
    value: "24h",
    description: "For urgent care coordination",
  },
  {
    label: "3 days",
    value: "3d",
    description: "Early follow-up",
  },
  {
    label: "1 week",
    value: "1w",
    description: "Routine monitoring",
  },
  {
    label: "2 weeks",
    value: "2w",
    description: "Regular follow-up",
  },
];

function FollowUp({ onBack, onNavigate }) {
  const [selectedOption, setSelectedOption] = useState("24h");
  const [followUpDate, setFollowUpDate] = useState("2026-09-14");
  const [followUpTime, setFollowUpTime] = useState("10:00");
  const [purpose, setPurpose] = useState(
    "Confirm referral completion and review maternal health status.",
  );
  const [notes, setNotes] = useState(
    "Patient has elevated BP, low hemoglobin and reported warning symptoms. Confirm that she reaches the referred facility.",
  );
  const [reminder, setReminder] = useState(true);
  const [completed, setCompleted] = useState(false);

  const handleOptionChange = (value) => {
    setSelectedOption(value);

    if (value === "24h") {
      setFollowUpDate("2026-09-14");
    }

    if (value === "3d") {
      setFollowUpDate("2026-09-16");
    }

    if (value === "1w") {
      setFollowUpDate("2026-09-20");
    }

    if (value === "2w") {
      setFollowUpDate("2026-09-27");
    }
  };

  const handleSchedule = () => {
    setCompleted(true);
  };

  const handleTimeline = () => {
    if (onNavigate) {
      onNavigate("timeline");
    }
  };

  if (completed) {
    return (
      <div className="min-h-screen bg-[#FFFAFD] text-slate-800">
        <header className="border-b border-pink-100/70 bg-[#FFFAFD]/95">
          <div className="mx-auto flex max-w-[1100px] items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={onBack}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600"
            >
              <ArrowLeft size={18} />
            </button>

            <div>
              <h1 className="text-lg font-black text-slate-800">
                Follow-up Scheduled
              </h1>

              <p className="text-xs font-medium text-slate-400">
                Follow-up has been added to the patient's care plan
              </p>
            </div>
          </div>
        </header>

        <main className="mx-auto flex max-w-[850px] flex-col items-center px-4 py-10 sm:px-6 lg:py-16">
          <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-emerald-100 text-emerald-600">
            <CheckCircle2 size={40} />
          </div>

          <h2 className="mt-6 text-center text-3xl font-black tracking-tight text-slate-800">
            Follow-up scheduled successfully
          </h2>

          <p className="mt-3 max-w-lg text-center text-sm font-medium leading-6 text-slate-500">
            CuraFlow has recorded the next follow-up for Lakshmi Devi. The
            patient now has a clear care-continuity task in the system.
          </p>

          <section className="mt-8 w-full overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
            <div className="border-b border-slate-100 bg-gradient-to-r from-pink-50 to-orange-50 p-5 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-sm font-black text-pink-600">
                  LD
                </div>

                <div>
                  <h3 className="text-sm font-black text-slate-800">
                    Lakshmi Devi
                  </h3>

                  <p className="mt-1 text-xs font-medium text-slate-400">
                    CF-001 · 27 years · 32 weeks
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-3 p-5 sm:grid-cols-3 sm:p-6">
              <div className="rounded-2xl bg-pink-50 p-4">
                <div className="flex items-center gap-2 text-pink-600">
                  <CalendarDays size={16} />
                  <span className="text-[10px] font-black uppercase tracking-wider">
                    Date
                  </span>
                </div>

                <p className="mt-2 text-sm font-black text-slate-700">
                  {followUpDate === "2026-09-14"
                    ? "14 Sep 2026"
                    : followUpDate === "2026-09-16"
                      ? "16 Sep 2026"
                      : followUpDate === "2026-09-20"
                        ? "20 Sep 2026"
                        : "27 Sep 2026"}
                </p>
              </div>

              <div className="rounded-2xl bg-violet-50 p-4">
                <div className="flex items-center gap-2 text-violet-600">
                  <Clock3 size={16} />
                  <span className="text-[10px] font-black uppercase tracking-wider">
                    Time
                  </span>
                </div>

                <p className="mt-2 text-sm font-black text-slate-700">
                  {followUpTime}
                </p>
              </div>

              <div className="rounded-2xl bg-emerald-50 p-4">
                <div className="flex items-center gap-2 text-emerald-600">
                  <CheckCircle2 size={16} />
                  <span className="text-[10px] font-black uppercase tracking-wider">
                    Reminder
                  </span>
                </div>

                <p className="mt-2 text-sm font-black text-slate-700">
                  {reminder ? "Enabled" : "Disabled"}
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 p-5 sm:p-6">
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                Follow-up Purpose
              </p>

              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                {purpose}
              </p>
            </div>
          </section>

          <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleTimeline}
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#ED4B7D] px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-pink-200 transition hover:bg-[#d93e6d]"
            >
              View Patient Timeline
              <ArrowRight size={17} />
            </button>

            <button
              type="button"
              onClick={onBack}
              className="rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-extrabold text-slate-600 transition hover:bg-slate-50"
            >
              Back to Referral
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFAFD] text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-pink-100/70 bg-[#FFFAFD]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <button
              type="button"
              onClick={onBack}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600"
            >
              <ArrowLeft size={18} />
            </button>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <div className="hidden h-9 w-9 items-center justify-center rounded-xl bg-violet-100 text-violet-600 sm:flex">
                  <CalendarDays size={18} />
                </div>

                <h1 className="truncate text-lg font-black text-slate-800">
                  Schedule Follow-up
                </h1>
              </div>

              <p className="mt-0.5 hidden text-xs font-medium text-slate-400 sm:block">
                Maintain continuity of maternal care
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-3 py-2 text-xs font-bold text-violet-600">
            <RefreshCw size={13} />
            Care Continuity
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1200px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        {/* Patient Summary */}
        <section className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm sm:p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-pink-100 text-lg font-black text-pink-600">
                LD
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl font-black text-slate-800">
                    Lakshmi Devi
                  </h2>

                  <span className="rounded-full bg-rose-50 px-2.5 py-1 text-[10px] font-black text-rose-600">
                    CRITICAL
                  </span>
                </div>

                <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-slate-400">
                  <span>CF-001</span>
                  <span>•</span>
                  <span>27 years</span>
                  <span>•</span>
                  <span>32 weeks</span>
                  <span>•</span>

                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    Kovilur
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-rose-50 px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Current Priority
              </p>

              <p className="mt-1 text-lg font-black text-rose-600">
                96 / 100
              </p>
            </div>
          </div>
        </section>

        {/* Current Referral */}
        <section className="mt-6 rounded-3xl border border-orange-100 bg-orange-50 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <div className="rounded-xl bg-orange-100 p-2.5 text-orange-600">
              <SendIcon />
            </div>

            <div>
              <h3 className="text-sm font-black text-orange-700">
                Referral follow-up required
              </h3>

              <p className="mt-1 text-xs font-medium leading-5 text-orange-700/70">
                A referral to Kovilur Primary Health Centre was created for
                Lakshmi Devi. Schedule a follow-up to confirm care continuity.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.45fr_1fr]">
          {/* Scheduling Form */}
          <section className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-violet-50 p-2.5 text-violet-600">
                <CalendarDays size={18} />
              </div>

              <div>
                <h2 className="text-base font-black text-slate-800">
                  Follow-up Schedule
                </h2>

                <p className="mt-0.5 text-xs font-medium text-slate-400">
                  Choose when the patient should be reviewed
                </p>
              </div>
            </div>

            {/* Quick Options */}
            <div className="mt-6">
              <p className="mb-3 text-xs font-extrabold text-slate-600">
                Recommended interval
              </p>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {followUpOptions.map((option) => {
                  const selected = selectedOption === option.value;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleOptionChange(option.value)}
                      className={`rounded-2xl border p-3 text-left transition ${
                        selected
                          ? "border-violet-300 bg-violet-50"
                          : "border-slate-200 bg-white hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`text-xs font-black ${
                            selected
                              ? "text-violet-600"
                              : "text-slate-600"
                          }`}
                        >
                          {option.label}
                        </span>

                        {selected && (
                          <Check
                            size={14}
                            className="text-violet-600"
                          />
                        )}
                      </div>

                      <p className="mt-1 text-[9px] font-medium leading-4 text-slate-400">
                        {option.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Date and Time */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="followUpDate"
                  className="mb-2 block text-xs font-extrabold text-slate-600"
                >
                  Follow-up Date
                </label>

                <div className="relative">
                  <CalendarDays
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="followUpDate"
                    type="date"
                    value={followUpDate}
                    onChange={(event) => {
                      setFollowUpDate(event.target.value);
                      setSelectedOption("");
                    }}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 py-3.5 pl-11 pr-4 text-sm font-bold text-slate-700 outline-none transition focus:border-pink-300 focus:bg-white focus:ring-4 focus:ring-pink-100"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="followUpTime"
                  className="mb-2 block text-xs font-extrabold text-slate-600"
                >
                  Preferred Time
                </label>

                <div className="relative">
                  <Clock3
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="followUpTime"
                    type="time"
                    value={followUpTime}
                    onChange={(event) =>
                      setFollowUpTime(event.target.value)
                    }
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 py-3.5 pl-11 pr-4 text-sm font-bold text-slate-700 outline-none transition focus:border-pink-300 focus:bg-white focus:ring-4 focus:ring-pink-100"
                  />
                </div>
              </div>
            </div>

            {/* Purpose */}
            <div className="mt-5">
              <label
                htmlFor="purpose"
                className="mb-2 block text-xs font-extrabold text-slate-600"
              >
                Follow-up Purpose
              </label>

              <textarea
                id="purpose"
                value={purpose}
                onChange={(event) => setPurpose(event.target.value)}
                rows={3}
                className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm font-medium leading-6 text-slate-700 outline-none transition focus:border-pink-300 focus:bg-white focus:ring-4 focus:ring-pink-100"
              />
            </div>

            {/* Notes */}
            <div className="mt-5">
              <label
                htmlFor="followUpNotes"
                className="mb-2 block text-xs font-extrabold text-slate-600"
              >
                Follow-up Notes
              </label>

              <textarea
                id="followUpNotes"
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                rows={4}
                className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm font-medium leading-6 text-slate-700 outline-none transition focus:border-pink-300 focus:bg-white focus:ring-4 focus:ring-pink-100"
              />
            </div>

            {/* Reminder */}
            <div className="mt-5 flex items-center justify-between gap-4 rounded-2xl border border-pink-100 bg-pink-50/60 p-4">
              <div>
                <p className="text-sm font-extrabold text-slate-700">
                  Enable follow-up reminder
                </p>

                <p className="mt-1 text-[11px] font-medium text-slate-400">
                  Keep this task visible in the ASHA worker's task list.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setReminder(!reminder)}
                className={`relative h-7 w-12 shrink-0 rounded-full transition ${
                  reminder ? "bg-pink-500" : "bg-slate-200"
                }`}
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition ${
                    reminder ? "left-6" : "left-1"
                  }`}
                />
              </button>
            </div>

            {/* Schedule Button */}
            <button
              type="button"
              onClick={handleSchedule}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#ED4B7D] px-6 py-4 text-sm font-black text-white shadow-lg shadow-pink-200 transition hover:-translate-y-0.5 hover:bg-[#d93e6d] hover:shadow-xl"
            >
              <CalendarDays size={17} />
              Schedule Follow-up
              <ArrowRight size={17} />
            </button>
          </section>

          {/* Right Column */}
          <div className="space-y-5">
            {/* Patient Contact */}
            <section className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-pink-50 p-2.5 text-pink-600">
                  <UserRound size={18} />
                </div>

                <div>
                  <h2 className="text-sm font-black text-slate-800">
                    Patient Contact
                  </h2>

                  <p className="text-xs font-medium text-slate-400">
                    For follow-up coordination
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-black text-slate-700">
                  Lakshmi Devi
                </p>

                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                    <Phone size={14} className="text-pink-500" />
                    +91 98XXX XX421
                  </div>

                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                    <MapPin size={14} className="text-emerald-500" />
                    Kovilur
                  </div>
                </div>
              </div>
            </section>

            {/* Referral Status */}
            <section className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-orange-50 p-2.5 text-orange-600">
                  <AlertCircle size={18} />
                </div>

                <div>
                  <h2 className="text-sm font-black text-slate-800">
                    Referral Status
                  </h2>

                  <p className="text-xs font-medium text-slate-400">
                    Current care coordination
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-orange-100 bg-orange-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-bold text-slate-500">
                    Referral
                  </span>

                  <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-black text-orange-600">
                    PENDING
                  </span>
                </div>

                <p className="mt-3 text-sm font-black text-slate-700">
                  Kovilur Primary Health Centre
                </p>

                <p className="mt-1 text-[11px] font-medium leading-5 text-slate-400">
                  Confirm whether the patient has reached the referred
                  facility.
                </p>
              </div>
            </section>

            {/* AI Suggestion */}
            <section className="rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-pink-50 p-5">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-violet-100 p-2.5 text-violet-600">
                  <Sparkles size={17} />
                </div>

                <div>
                  <h3 className="text-sm font-black text-slate-800">
                    CuraFlow AI suggestion
                  </h3>

                  <p className="mt-2 text-[11px] font-medium leading-5 text-slate-500">
                    Because this patient has a critical priority score and a
                    pending referral, an early follow-up is recommended in the
                    demo workflow.
                  </p>

                  <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[10px] font-black text-violet-600 shadow-sm">
                    <Clock3 size={12} />
                    Suggested: within 24 hours
                  </div>
                </div>
              </div>
            </section>

            {/* Care Continuity */}
            <section className="rounded-3xl border border-emerald-100 bg-emerald-50 p-5">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-emerald-100 p-2.5 text-emerald-600">
                  <RefreshCw size={17} />
                </div>

                <div>
                  <h3 className="text-sm font-black text-emerald-700">
                    Why follow-up matters
                  </h3>

                  <p className="mt-1 text-[11px] font-medium leading-5 text-emerald-700/70">
                    CuraFlow connects assessment, referral and follow-up so
                    that important care actions do not disappear after a
                    single visit.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Notice */}
        <section className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-100 bg-amber-50 p-4">
          <Info size={15} className="mt-0.5 shrink-0 text-amber-600" />

          <p className="text-[11px] font-medium leading-5 text-amber-700">
            Follow-up scheduling is a care-coordination feature. Timing
            should be adjusted according to clinical guidance, local
            protocols and the patient's actual condition.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-8 border-t border-slate-100 py-6 text-center">
          <p className="text-[11px] font-bold text-slate-400">
            CuraFlow AI · Follow-up & Care Continuity
          </p>

          <p className="mt-1 text-[10px] font-medium text-slate-300">
            ASHA worker workflow · Decision-support prototype
          </p>
        </footer>
      </main>
    </div>
  );
}

function SendIcon() {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

export default FollowUp;