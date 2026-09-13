import { useState } from "react";
import {
  AlertCircle,
  ArrowLeft,
  Baby,
  CalendarDays,
  Check,
  ChevronRight,
  ClipboardCheck,
  FileText,
  HeartPulse,
  Info,
  MapPin,
  Pill,
  Sparkles,
  UserRound,
} from "lucide-react";

const initialForm = {
  bloodPressure: "158/102",
  hemoglobin: "7.8",
  weight: "61.4",
  severeHeadache: true,
  blurredVision: false,
  swelling: true,
  bleeding: false,
  abdominalPain: false,
  babyMovement: "Normal",
  ancAttended: false,
  ironTablets: "Irregularly",
  referralCompleted: false,
  notes:
    "Patient reports severe headache and swelling. BP remains elevated. Previous referral is still pending.",
};

function SectionHeader({ icon: Icon, title, description, iconClass }) {
  return (
    <div className="flex items-start gap-3">
      <div className={`rounded-xl p-2.5 ${iconClass}`}>
        <Icon size={18} />
      </div>

      <div>
        <h3 className="text-sm font-black text-slate-800">{title}</h3>

        <p className="mt-0.5 text-xs font-medium leading-5 text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}

function YesNoButton({ value, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(value)}
      className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-extrabold transition ${
        selected
          ? value === "Yes"
            ? "border-emerald-300 bg-emerald-50 text-emerald-600"
            : "border-rose-300 bg-rose-50 text-rose-600"
          : "border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:bg-slate-50"
      }`}
    >
      {selected && <Check size={14} />}
      {value}
    </button>
  );
}

function ToggleField({
  label,
  description,
  value,
  onChange,
  danger = false,
}) {
  return (
    <div
      className={`flex items-center justify-between gap-4 rounded-2xl border p-4 transition ${
        value
          ? danger
            ? "border-rose-200 bg-rose-50/70"
            : "border-pink-200 bg-pink-50/60"
          : "border-slate-100 bg-slate-50/50"
      }`}
    >
      <div className="min-w-0">
        <p className="text-sm font-extrabold text-slate-700">{label}</p>

        {description && (
          <p className="mt-1 text-[11px] font-medium leading-4 text-slate-400">
            {description}
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={() => onChange(!value)}
        className={`relative h-7 w-12 shrink-0 rounded-full transition ${
          value
            ? danger
              ? "bg-rose-500"
              : "bg-pink-500"
            : "bg-slate-200"
        }`}
        aria-label={`Toggle ${label}`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition ${
            value ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}

function VisitAssessment({ onBack, onNavigate }) {
  const [form, setForm] = useState(initialForm);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);

    setTimeout(() => {
      setIsAnalyzing(false);

      if (onNavigate) {
        onNavigate("analysis");
      }
    }, 900);
  };

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
              aria-label="Back to patient profile"
            >
              <ArrowLeft size={18} />
            </button>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <div className="hidden h-9 w-9 items-center justify-center rounded-xl bg-pink-100 text-pink-600 sm:flex">
                  <ClipboardCheck size={18} />
                </div>

                <h1 className="truncate text-lg font-black tracking-tight text-slate-800">
                  Visit Assessment
                </h1>
              </div>

              <p className="mt-0.5 hidden text-xs font-medium text-slate-400 sm:block">
                Record current maternal health indicators
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-600">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Online
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1200px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        {/* Patient Summary */}
        <section className="relative overflow-hidden rounded-[2rem] border border-pink-100 bg-gradient-to-br from-white via-pink-50/70 to-orange-50/60 p-5 shadow-sm sm:p-7">
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-pink-200/30 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
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

            <div className="flex items-center gap-2 rounded-2xl border border-white bg-white/80 px-4 py-3 shadow-sm">
              <CalendarDays size={16} className="text-pink-500" />

              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Assessment Date
                </p>

                <p className="text-xs font-black text-slate-700">
                  13 September 2026
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Progress */}
        <section className="mt-6 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-black text-slate-700">
                Current Visit
              </p>

              <p className="mt-0.5 text-[11px] font-medium text-slate-400">
                Complete the assessment before AI analysis
              </p>
            </div>

            <span className="text-xs font-black text-pink-600">
              Assessment
            </span>
          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-pink-500 to-orange-400" />
          </div>
        </section>

        {/* Form */}
        <div className="mt-6 space-y-5">
          {/* Vital Indicators */}
          <section className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
            <SectionHeader
              icon={HeartPulse}
              title="Vital Health Indicators"
              description="Enter the latest measurements recorded during the visit."
              iconClass="bg-pink-50 text-pink-600"
            />

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div>
                <label
                  htmlFor="bloodPressure"
                  className="mb-2 block text-xs font-extrabold text-slate-600"
                >
                  Blood Pressure
                </label>

                <div className="relative">
                  <input
                    id="bloodPressure"
                    type="text"
                    value={form.bloodPressure}
                    onChange={(event) =>
                      updateField("bloodPressure", event.target.value)
                    }
                    className="w-full rounded-2xl border border-rose-200 bg-rose-50/50 px-4 py-3.5 pr-16 text-sm font-black text-slate-700 outline-none transition focus:border-pink-300 focus:ring-4 focus:ring-pink-100"
                  />

                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400">
                    mmHg
                  </span>
                </div>

                <p className="mt-2 flex items-center gap-1 text-[10px] font-bold text-rose-500">
                  <AlertCircle size={12} />
                  Above normal range
                </p>
              </div>

              <div>
                <label
                  htmlFor="hemoglobin"
                  className="mb-2 block text-xs font-extrabold text-slate-600"
                >
                  Hemoglobin
                </label>

                <div className="relative">
                  <input
                    id="hemoglobin"
                    type="number"
                    step="0.1"
                    value={form.hemoglobin}
                    onChange={(event) =>
                      updateField("hemoglobin", event.target.value)
                    }
                    className="w-full rounded-2xl border border-rose-200 bg-rose-50/50 px-4 py-3.5 pr-16 text-sm font-black text-slate-700 outline-none transition focus:border-pink-300 focus:ring-4 focus:ring-pink-100"
                  />

                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400">
                    g/dL
                  </span>
                </div>

                <p className="mt-2 flex items-center gap-1 text-[10px] font-bold text-rose-500">
                  <AlertCircle size={12} />
                  Low hemoglobin
                </p>
              </div>

              <div>
                <label
                  htmlFor="weight"
                  className="mb-2 block text-xs font-extrabold text-slate-600"
                >
                  Weight
                </label>

                <div className="relative">
                  <input
                    id="weight"
                    type="number"
                    step="0.1"
                    value={form.weight}
                    onChange={(event) =>
                      updateField("weight", event.target.value)
                    }
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 pr-12 text-sm font-black text-slate-700 outline-none transition focus:border-pink-300 focus:bg-white focus:ring-4 focus:ring-pink-100"
                  />

                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400">
                    kg
                  </span>
                </div>

                <p className="mt-2 text-[10px] font-bold text-slate-400">
                  Previous: 60.8 kg
                </p>
              </div>
            </div>
          </section>

          {/* Warning Signs */}
          <section className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
            <SectionHeader
              icon={AlertCircle}
              title="Warning Signs & Symptoms"
              description="Record symptoms observed or reported by the patient."
              iconClass="bg-rose-50 text-rose-600"
            />

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <ToggleField
                label="Severe Headache"
                description="Persistent or severe headache reported"
                value={form.severeHeadache}
                onChange={(value) =>
                  updateField("severeHeadache", value)
                }
                danger
              />

              <ToggleField
                label="Blurred Vision"
                description="Changes in vision or visual disturbance"
                value={form.blurredVision}
                onChange={(value) =>
                  updateField("blurredVision", value)
                }
                danger
              />

              <ToggleField
                label="Swelling"
                description="Swelling of face, hands or feet"
                value={form.swelling}
                onChange={(value) => updateField("swelling", value)}
                danger
              />

              <ToggleField
                label="Vaginal Bleeding"
                description="Any bleeding during pregnancy"
                value={form.bleeding}
                onChange={(value) => updateField("bleeding", value)}
                danger
              />

              <ToggleField
                label="Severe Abdominal Pain"
                description="Persistent or severe abdominal pain"
                value={form.abdominalPain}
                onChange={(value) =>
                  updateField("abdominalPain", value)
                }
                danger
              />
            </div>
          </section>

          {/* Pregnancy & ANC */}
          <section className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
            <SectionHeader
              icon={Baby}
              title="Pregnancy & ANC Status"
              description="Capture care continuity and current pregnancy indicators."
              iconClass="bg-orange-50 text-orange-600"
            />

            <div className="mt-6 space-y-5">
              <div>
                <p className="mb-2 text-xs font-extrabold text-slate-600">
                  Baby movement
                </p>

                <div className="flex flex-wrap gap-2">
                  {["Normal", "Reduced", "Not Felt"].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        updateField("babyMovement", option)
                      }
                      className={`rounded-xl border px-4 py-2.5 text-xs font-extrabold transition ${
                        form.babyMovement === option
                          ? option === "Normal"
                            ? "border-emerald-300 bg-emerald-50 text-emerald-600"
                            : "border-orange-300 bg-orange-50 text-orange-600"
                          : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
                      }`}
                    >
                      {form.babyMovement === option && (
                        <Check size={13} className="mr-1 inline" />
                      )}

                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4">
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-sm font-extrabold text-slate-700">
                        ANC visit attended
                      </p>

                      <p className="mt-1 text-[11px] font-medium text-slate-400">
                        Has the scheduled antenatal visit been attended?
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <YesNoButton
                        value="Yes"
                        selected={form.ancAttended === true}
                        onClick={() =>
                          updateField("ancAttended", true)
                        }
                      />

                      <YesNoButton
                        value="No"
                        selected={form.ancAttended === false}
                        onClick={() =>
                          updateField("ancAttended", false)
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-pink-50 p-2.5 text-pink-500">
                      <Pill size={17} />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-extrabold text-slate-700">
                        Iron tablets
                      </p>

                      <p className="mt-1 text-[11px] font-medium text-slate-400">
                        How regularly are iron tablets being taken?
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Regularly", "Irregularly", "Not Taking"].map(
                      (option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() =>
                            updateField("ironTablets", option)
                          }
                          className={`rounded-xl border px-3 py-2 text-[11px] font-extrabold transition ${
                            form.ironTablets === option
                              ? "border-pink-300 bg-pink-50 text-pink-600"
                              : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
                          }`}
                        >
                          {form.ironTablets === option && (
                            <Check size={12} className="mr-1 inline" />
                          )}

                          {option}
                        </button>
                      ),
                    )}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4">
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-sm font-extrabold text-slate-700">
                      Previous referral completed
                    </p>

                    <p className="mt-1 text-[11px] font-medium text-slate-400">
                      Was the patient able to reach the referred facility?
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <YesNoButton
                      value="Yes"
                      selected={form.referralCompleted === true}
                      onClick={() =>
                        updateField("referralCompleted", true)
                      }
                    />

                    <YesNoButton
                      value="No"
                      selected={form.referralCompleted === false}
                      onClick={() =>
                        updateField("referralCompleted", false)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Visit Notes */}
          <section className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
            <SectionHeader
              icon={FileText}
              title="Visit Notes"
              description="Add observations or important context from this visit."
              iconClass="bg-violet-50 text-violet-600"
            />

            <textarea
              value={form.notes}
              onChange={(event) =>
                updateField("notes", event.target.value)
              }
              rows={5}
              placeholder="Enter visit observations..."
              className="mt-6 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm font-medium leading-6 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-pink-300 focus:bg-white focus:ring-4 focus:ring-pink-100"
            />

            <div className="mt-3 flex items-start gap-2 rounded-2xl bg-violet-50 p-3.5">
              <Info size={15} className="mt-0.5 shrink-0 text-violet-500" />

              <p className="text-[11px] font-medium leading-5 text-violet-700">
                Include observations that may help explain changes in the
                patient's condition. Avoid entering unnecessary sensitive
                information.
              </p>
            </div>
          </section>

          {/* AI Analysis Preview */}
          <section className="overflow-hidden rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-pink-50 p-5 sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                <Sparkles size={21} />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-black text-slate-800">
                    Ready for CuraFlow AI Analysis
                  </h3>

                  <span className="rounded-full bg-violet-100 px-2 py-1 text-[9px] font-black text-violet-600">
                    DECISION SUPPORT
                  </span>
                </div>

                <p className="mt-1 text-xs font-medium leading-5 text-slate-500">
                  The assessment will be analyzed using structured health
                  indicators to generate an explainable care priority and
                  recommended next actions.
                </p>
              </div>
            </div>
          </section>

          {/* Actions */}
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onBack}
              className="rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-extrabold text-slate-600 transition hover:bg-slate-50"
            >
              Save & Exit
            </button>

            <button
              type="button"
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#ED4B7D] to-[#E85B91] px-7 py-3.5 text-sm font-black text-white shadow-lg shadow-pink-200 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isAnalyzing ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Sparkles size={17} />
                  Analyze with CuraFlow AI
                  <ChevronRight size={17} />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 flex items-start justify-center gap-2 px-4 text-center">
          <Info size={13} className="mt-0.5 shrink-0 text-slate-300" />

          <p className="max-w-2xl text-[10px] font-medium leading-5 text-slate-400">
            CuraFlow AI is a clinical decision-support prototype. Its
            assessments and recommendations are intended to assist trained
            healthcare workers and do not replace professional medical
            judgement, diagnosis, or emergency care.
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-8 border-t border-slate-100 py-6 text-center">
          <div className="flex items-center justify-center gap-2">
            <UserRound size={13} className="text-pink-400" />

            <p className="text-[11px] font-bold text-slate-400">
              ASHA Worker · Anitha
            </p>
          </div>

          <p className="mt-1 text-[10px] font-medium text-slate-300">
            CuraFlow AI · Maternal Care Decision Support
          </p>
        </footer>
      </main>
    </div>
  );
}

export default VisitAssessment;