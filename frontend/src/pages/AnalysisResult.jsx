import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Baby,
  CheckCircle2,
  ClipboardList,
  FileText,
  HeartPulse,
  Info,
  MapPin,
  Pill,
  Send,
  Sparkles,
  Stethoscope,
} from "lucide-react";

const riskFactors = [
  {
    title: "Elevated Blood Pressure",
    value: "158/102 mmHg",
    description:
      "Blood pressure is significantly elevated and requires prompt clinical attention.",
    icon: HeartPulse,
    bg: "bg-rose-50",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    valueColor: "text-rose-600",
  },
  {
    title: "Severe Anemia",
    value: "Hb 7.8 g/dL",
    description:
      "Hemoglobin is considerably below the expected range for pregnancy.",
    icon: AlertCircle,
    bg: "bg-orange-50",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    valueColor: "text-orange-600",
  },
  {
    title: "Warning Symptoms",
    value: "2 indicators",
    description:
      "Severe headache and swelling were reported during the assessment.",
    icon: Stethoscope,
    bg: "bg-pink-50",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    valueColor: "text-pink-600",
  },
  {
    title: "Care Continuity",
    value: "Needs attention",
    description:
      "Previous referral remains incomplete and the scheduled ANC visit was missed.",
    icon: ClipboardList,
    bg: "bg-violet-50",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    valueColor: "text-violet-600",
  },
];

const recommendedActions = [
  {
    number: "01",
    title: "Arrange prompt clinical evaluation",
    description:
      "Connect the patient with the appropriate healthcare facility for clinical assessment.",
    icon: Stethoscope,
  },
  {
    number: "02",
    title: "Follow up on the pending referral",
    description:
      "Confirm whether the patient can reach the referred facility and assist with coordination.",
    icon: Send,
  },
  {
    number: "03",
    title: "Review anemia management",
    description:
      "Share the recorded hemoglobin value with the healthcare provider for appropriate evaluation.",
    icon: Pill,
  },
  {
    number: "04",
    title: "Schedule close follow-up",
    description:
      "Record the next follow-up according to the healthcare provider's recommendation.",
    icon: CalendarDaysIcon,
  },
];

function CalendarDaysIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

function ScoreRing() {
  return (
    <div className="relative flex h-44 w-44 items-center justify-center sm:h-52 sm:w-52">
      <div className="absolute inset-0 rounded-full border-[14px] border-rose-100" />

      <div
        className="absolute inset-0 rounded-full border-[14px] border-transparent border-t-rose-500 border-r-rose-500 border-b-orange-400"
        style={{
          transform: "rotate(-45deg)",
        }}
      />

      <div className="relative flex h-32 w-32 flex-col items-center justify-center rounded-full bg-white shadow-inner sm:h-38 sm:w-38">
        <span className="text-4xl font-black tracking-tight text-slate-800 sm:text-5xl">
          96
        </span>

        <span className="mt-0.5 text-xs font-bold text-slate-400">
          out of 100
        </span>
      </div>
    </div>
  );
}

function AnalysisResult({ onBack, onNavigate }) {
  const handleReferral = () => {
    if (onNavigate) {
      onNavigate("referral");
    }
  };

  const handlePatientProfile = () => {
    if (onNavigate) {
      onNavigate("profile");
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFAFD] text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-pink-100/70 bg-[#FFFAFD]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1250px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <button
              type="button"
              onClick={onBack}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600"
              aria-label="Back to visit assessment"
            >
              <ArrowLeft size={18} />
            </button>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <div className="hidden h-9 w-9 items-center justify-center rounded-xl bg-violet-100 text-violet-600 sm:flex">
                  <Sparkles size={18} />
                </div>

                <h1 className="truncate text-lg font-black tracking-tight text-slate-800">
                  AI Analysis Result
                </h1>
              </div>

              <p className="mt-0.5 hidden text-xs font-medium text-slate-400 sm:block">
                Explainable maternal care priority assessment
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-3 py-2 text-xs font-bold text-violet-600">
            <Sparkles size={13} />
            AI Engine Active
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1250px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        {/* Patient Header */}
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

                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-black text-slate-500">
                    CF-001
                  </span>
                </div>

                <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-slate-400">
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

            <button
              type="button"
              onClick={handlePatientProfile}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-extrabold text-slate-600 transition hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600"
            >
              View Patient Profile
              <ArrowRight size={14} />
            </button>
          </div>
        </section>

        {/* Main Score */}
        <section className="mt-6 overflow-hidden rounded-[2rem] border border-rose-200 bg-gradient-to-br from-rose-50 via-white to-orange-50 shadow-sm">
          <div className="relative p-6 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-rose-200/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-orange-200/25 blur-3xl" />

            <div className="relative z-10 flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
              <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3 py-1.5 text-xs font-black text-violet-600 shadow-sm">
                  <Sparkles size={14} />
                  CURAFLOW AI ASSESSMENT
                </div>

                <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-800 sm:text-4xl">
                  High priority
                  <span className="text-rose-600"> intervention needed.</span>
                </h2>

                <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-slate-500 sm:text-base">
                  Based on the information recorded during this visit,
                  CuraFlow has identified multiple indicators that require
                  prompt attention from the healthcare team.
                </p>

                <div className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-3 py-1.5 text-xs font-black text-rose-600">
                    <span className="h-2 w-2 rounded-full bg-rose-500" />
                    CRITICAL PRIORITY
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-500 shadow-sm">
                    Assessment completed
                  </span>
                </div>
              </div>

              <div className="flex shrink-0 flex-col items-center">
                <ScoreRing />

                <div className="mt-2 text-center">
                  <p className="text-xs font-black text-rose-600">
                    Critical Priority
                  </p>

                  <p className="mt-1 max-w-[220px] text-[10px] font-medium leading-4 text-slate-400">
                    Score generated from the current structured assessment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Prioritized */}
        <section className="mt-6">
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <div className="rounded-xl bg-rose-100 p-2 text-rose-600">
                <AlertCircle size={17} />
              </div>

              <div>
                <h2 className="text-lg font-black text-slate-800">
                  Why is this patient prioritized?
                </h2>

                <p className="mt-0.5 text-xs font-medium text-slate-400">
                  The main indicators contributing to the priority score
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {riskFactors.map((factor) => {
              const Icon = factor.icon;

              return (
                <div
                  key={factor.title}
                  className={`rounded-3xl border border-white p-5 shadow-sm ${factor.bg}`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`rounded-2xl p-3 ${factor.iconBg} ${factor.iconColor}`}
                    >
                      <Icon size={19} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-sm font-black text-slate-800">
                          {factor.title}
                        </h3>

                        <span
                          className={`text-xs font-black ${factor.valueColor}`}
                        >
                          {factor.value}
                        </span>
                      </div>

                      <p className="mt-2 text-xs font-medium leading-5 text-slate-500">
                        {factor.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Current Indicators */}
        <section className="mt-8 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-pink-50 p-2.5 text-pink-600">
              <HeartPulse size={18} />
            </div>

            <div>
              <h2 className="text-base font-black text-slate-800">
                Current Health Indicators
              </h2>

              <p className="mt-0.5 text-xs font-medium text-slate-400">
                Values captured during today's assessment
              </p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            <div className="rounded-2xl bg-rose-50 p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                BP
              </p>
              <p className="mt-2 text-lg font-black text-rose-600">
                158/102
              </p>
              <p className="mt-0.5 text-[10px] font-bold text-slate-400">
                mmHg
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Hemoglobin
              </p>
              <p className="mt-2 text-lg font-black text-orange-600">7.8</p>
              <p className="mt-0.5 text-[10px] font-bold text-slate-400">
                g/dL
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Weight
              </p>
              <p className="mt-2 text-lg font-black text-slate-700">61.4</p>
              <p className="mt-0.5 text-[10px] font-bold text-slate-400">
                kg
              </p>
            </div>

            <div className="rounded-2xl bg-rose-50 p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Headache
              </p>
              <p className="mt-2 text-sm font-black text-rose-600">Present</p>
              <p className="mt-0.5 text-[10px] font-bold text-slate-400">
                Severe
              </p>
            </div>

            <div className="rounded-2xl bg-rose-50 p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Swelling
              </p>
              <p className="mt-2 text-sm font-black text-rose-600">Present</p>
              <p className="mt-0.5 text-[10px] font-bold text-slate-400">
                Reported
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Baby Movement
              </p>
              <p className="mt-2 text-sm font-black text-emerald-600">
                Normal
              </p>
              <p className="mt-0.5 text-[10px] font-bold text-slate-400">
                Reported
              </p>
            </div>
          </div>
        </section>

        {/* Recommended Actions */}
        <section className="mt-8">
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <div className="rounded-xl bg-emerald-100 p-2 text-emerald-600">
                <CheckCircle2 size={17} />
              </div>

              <div>
                <h2 className="text-lg font-black text-slate-800">
                  Recommended Next Actions
                </h2>

                <p className="mt-0.5 text-xs font-medium text-slate-400">
                  Suggested care-coordination steps based on the assessment
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm sm:p-6">
            <div className="space-y-3">
              {recommendedActions.map((action) => {
                const Icon = action.icon;

                return (
                  <div
                    key={action.number}
                    className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition hover:bg-slate-50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-xs font-black text-emerald-600">
                      {action.number}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start gap-2">
                        <div className="mt-0.5 hidden text-emerald-500 sm:block">
                          <Icon size={16} />
                        </div>

                        <div>
                          <h3 className="text-sm font-black text-slate-700">
                            {action.title}
                          </h3>

                          <p className="mt-1 text-xs font-medium leading-5 text-slate-400">
                            {action.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Referral CTA */}
        <section className="mt-8 overflow-hidden rounded-[2rem] border border-pink-200 bg-gradient-to-r from-pink-50 via-white to-orange-50 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pink-100 text-pink-600">
                <Send size={20} />
              </div>

              <div>
                <h2 className="text-lg font-black text-slate-800">
                  Referral action recommended
                </h2>

                <p className="mt-1 max-w-2xl text-xs font-medium leading-5 text-slate-500">
                  A referral is currently pending for Lakshmi Devi. CuraFlow
                  can help you record the referral details and track whether
                  the patient reaches the facility.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleReferral}
              className="flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-[#ED4B7D] px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-pink-200 transition hover:-translate-y-0.5 hover:bg-[#d93e6d] hover:shadow-xl"
            >
              <Send size={17} />
              Generate Referral
              <ArrowRight size={16} />
            </button>
          </div>
        </section>

        {/* Explainable AI */}
        <section className="mt-8 rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-pink-50 p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-violet-100 p-3 text-violet-600">
              <Sparkles size={20} />
            </div>

            <div>
              <h2 className="text-sm font-black text-slate-800">
                Explainable AI
              </h2>

              <p className="mt-2 text-xs font-medium leading-6 text-slate-500">
                CuraFlow does not simply provide a priority label. The
                assessment surfaces the health indicators and care-continuity
                factors that contributed to the result so that the ASHA worker
                can understand why the patient was prioritized.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-violet-600 shadow-sm">
                  Structured indicators
                </span>

                <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-violet-600 shadow-sm">
                  Explainable reasoning
                </span>

                <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-violet-600 shadow-sm">
                  Action suggestions
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Disclaimer */}
        <section className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-100 bg-amber-50 p-4">
          <Info size={16} className="mt-0.5 shrink-0 text-amber-600" />

          <div>
            <p className="text-xs font-black text-amber-800">
              Clinical decision-support notice
            </p>

            <p className="mt-1 text-[11px] font-medium leading-5 text-amber-700/80">
              This AI-generated assessment is intended to support trained
              healthcare workers in prioritizing care. It does not diagnose
              conditions, replace clinical judgement, or provide emergency
              medical care. Final decisions must be made by qualified
              healthcare professionals.
            </p>
          </div>
        </section>

        {/* Bottom Actions */}
        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-extrabold text-slate-600 transition hover:bg-slate-50"
          >
            <ArrowLeft size={16} />
            Back to Assessment
          </button>

          <button
            type="button"
            onClick={handleReferral}
            className="flex items-center justify-center gap-2 rounded-2xl bg-[#ED4B7D] px-7 py-3.5 text-sm font-black text-white shadow-lg shadow-pink-200 transition hover:bg-[#d93e6d]"
          >
            <FileText size={17} />
            Continue to Referral
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Footer */}
        <footer className="mt-10 border-t border-slate-100 py-6 text-center">
          <p className="text-[11px] font-bold text-slate-400">
            CuraFlow AI · Explainable Maternal Care Decision Support
          </p>

          <p className="mt-1 text-[10px] font-medium text-slate-300">
            AI assists healthcare workers · Clinical judgement remains
            essential
          </p>
        </footer>
      </main>
    </div>
  );
}

export default AnalysisResult;