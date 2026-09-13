import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  HeartPulse,
  Info,
  MapPin,
  Phone,
  Send,
  Sparkles,
  UserRound,
} from "lucide-react";
import { useState } from "react";

const facilities = [
  {
    name: "Kovilur Primary Health Centre",
    type: "Primary Health Centre",
    distance: "2.4 km",
    phone: "+91 44 2XXX XXXX",
  },
  {
    name: "Government Community Health Centre",
    type: "Community Health Centre",
    distance: "6.8 km",
    phone: "+91 44 2XXX XXXX",
  },
  {
    name: "District Government Hospital",
    type: "Government Hospital",
    distance: "14.2 km",
    phone: "+91 44 2XXX XXXX",
  },
];

function Referral({ onBack, onNavigate }) {
  const [facility, setFacility] = useState(facilities[0].name);
  const [urgency, setUrgency] = useState("Urgent");
  const [reason, setReason] = useState(
    "Elevated blood pressure (158/102 mmHg), low hemoglobin (7.8 g/dL), severe headache and swelling.",
  );
  const [notes, setNotes] = useState(
    "Patient requires prompt clinical evaluation. Previous referral remains pending.",
  );
  const [submitted, setSubmitted] = useState(false);

  const selectedFacility =
    facilities.find((item) => item.name === facility) || facilities[0];

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleFollowUp = () => {
    if (onNavigate) {
      onNavigate("followup");
    }
  };

  if (submitted) {
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
                Referral Created
              </h1>
              <p className="text-xs font-medium text-slate-400">
                Referral successfully added to the patient record
              </p>
            </div>
          </div>
        </header>

        <main className="mx-auto flex max-w-[800px] flex-col items-center px-4 py-10 sm:px-6 lg:py-16">
          <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-emerald-100 text-emerald-600">
            <CheckCircle2 size={40} />
          </div>

          <h2 className="mt-6 text-center text-3xl font-black tracking-tight text-slate-800">
            Referral successfully created
          </h2>

          <p className="mt-3 max-w-lg text-center text-sm font-medium leading-6 text-slate-500">
            Lakshmi Devi's referral has been recorded and can now be tracked
            through the CuraFlow follow-up system.
          </p>

          <div className="mt-8 w-full rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
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

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Referral Facility
                </p>
                <p className="mt-2 text-sm font-black text-slate-700">
                  {selectedFacility.name}
                </p>
              </div>

              <div className="rounded-2xl bg-rose-50 p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Priority
                </p>
                <p className="mt-2 text-sm font-black text-rose-600">
                  {urgency}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Referral Status
                </p>
                <p className="mt-2 text-sm font-black text-orange-600">
                  Pending
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Created
                </p>
                <p className="mt-2 text-sm font-black text-slate-700">
                  13 Sep 2026
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleFollowUp}
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#ED4B7D] px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-pink-200 transition hover:bg-[#d93e6d]"
            >
              Schedule Follow-up
              <ArrowRight size={17} />
            </button>

            <button
              type="button"
              onClick={onBack}
              className="rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-extrabold text-slate-600 transition hover:bg-slate-50"
            >
              Back to Analysis
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
                <div className="hidden h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-orange-600 sm:flex">
                  <Send size={18} />
                </div>

                <h1 className="truncate text-lg font-black text-slate-800">
                  Generate Referral
                </h1>
              </div>

              <p className="mt-0.5 hidden text-xs font-medium text-slate-400 sm:block">
                Coordinate the patient's next level of care
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-3 py-2 text-xs font-bold text-orange-600">
            <Clock3 size={13} />
            Action Required
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
                AI Priority
              </p>
              <p className="mt-1 text-lg font-black text-rose-600">
                96 / 100
              </p>
            </div>
          </div>
        </section>

        {/* Alert */}
        <section className="mt-6 flex items-start gap-3 rounded-3xl border border-rose-200 bg-rose-50 p-5">
          <div className="rounded-xl bg-rose-100 p-2.5 text-rose-600">
            <AlertCircle size={19} />
          </div>

          <div>
            <h3 className="text-sm font-black text-rose-700">
              Prompt referral recommended
            </h3>

            <p className="mt-1 text-xs font-medium leading-5 text-rose-600/80">
              CuraFlow identified multiple indicators that may require
              clinical evaluation. The referral below records the care
              coordination action for the healthcare team.
            </p>
          </div>
        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          {/* Referral Form */}
          <section className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-orange-50 p-2.5 text-orange-600">
                <FileText size={18} />
              </div>

              <div>
                <h2 className="text-base font-black text-slate-800">
                  Referral Details
                </h2>

                <p className="mt-0.5 text-xs font-medium text-slate-400">
                  Complete the referral information
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              {/* Facility */}
              <div>
                <label
                  htmlFor="facility"
                  className="mb-2 block text-xs font-extrabold text-slate-600"
                >
                  Referral Facility
                </label>

                <div className="relative">
                  <Building2
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <select
                    id="facility"
                    value={facility}
                    onChange={(event) => setFacility(event.target.value)}
                    className="w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50/50 py-3.5 pl-11 pr-10 text-sm font-bold text-slate-700 outline-none transition focus:border-pink-300 focus:bg-white focus:ring-4 focus:ring-pink-100"
                  >
                    {facilities.map((item) => (
                      <option key={item.name} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>

                  <ArrowRight
                    size={15}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-slate-400"
                  />
                </div>
              </div>

              {/* Urgency */}
              <div>
                <p className="mb-2 text-xs font-extrabold text-slate-600">
                  Referral Priority
                </p>

                <div className="grid grid-cols-3 gap-2">
                  {["Routine", "Urgent", "Immediate"].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setUrgency(option)}
                      className={`rounded-xl border px-3 py-3 text-xs font-extrabold transition ${
                        urgency === option
                          ? option === "Immediate"
                            ? "border-rose-300 bg-rose-50 text-rose-600"
                            : option === "Urgent"
                              ? "border-orange-300 bg-orange-50 text-orange-600"
                              : "border-emerald-300 bg-emerald-50 text-emerald-600"
                          : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
                      }`}
                    >
                      {urgency === option && (
                        <CheckCircle2 size={13} className="mr-1 inline" />
                      )}
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reason */}
              <div>
                <label
                  htmlFor="reason"
                  className="mb-2 block text-xs font-extrabold text-slate-600"
                >
                  Reason for Referral
                </label>

                <textarea
                  id="reason"
                  value={reason}
                  onChange={(event) => setReason(event.target.value)}
                  rows={4}
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm font-medium leading-6 text-slate-700 outline-none transition focus:border-pink-300 focus:bg-white focus:ring-4 focus:ring-pink-100"
                />
              </div>

              {/* Notes */}
              <div>
                <label
                  htmlFor="notes"
                  className="mb-2 block text-xs font-extrabold text-slate-600"
                >
                  Additional Notes
                </label>

                <textarea
                  id="notes"
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  rows={4}
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm font-medium leading-6 text-slate-700 outline-none transition focus:border-pink-300 focus:bg-white focus:ring-4 focus:ring-pink-100"
                />
              </div>

              {/* Submit */}
              <button
                type="button"
                onClick={handleSubmit}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#ED4B7D] px-6 py-4 text-sm font-black text-white shadow-lg shadow-pink-200 transition hover:-translate-y-0.5 hover:bg-[#d93e6d] hover:shadow-xl"
              >
                <Send size={17} />
                Create Referral
                <ArrowRight size={17} />
              </button>
            </div>
          </section>

          {/* Facility Info */}
          <div className="space-y-5">
            <section className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-50 p-2.5 text-emerald-600">
                  <Building2 size={18} />
                </div>

                <div>
                  <h2 className="text-sm font-black text-slate-800">
                    Selected Facility
                  </h2>
                  <p className="text-xs font-medium text-slate-400">
                    Referral destination
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                <h3 className="text-sm font-black leading-5 text-slate-700">
                  {selectedFacility.name}
                </h3>

                <p className="mt-1 text-xs font-medium text-slate-400">
                  {selectedFacility.type}
                </p>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                    <MapPin size={14} className="text-pink-500" />
                    {selectedFacility.distance}
                  </div>

                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                    <Phone size={14} className="text-emerald-500" />
                    {selectedFacility.phone}
                  </div>
                </div>
              </div>
            </section>

            {/* Patient Indicators */}
            <section className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-pink-50 p-2.5 text-pink-600">
                  <HeartPulse size={18} />
                </div>

                <div>
                  <h2 className="text-sm font-black text-slate-800">
                    Key Indicators
                  </h2>

                  <p className="text-xs font-medium text-slate-400">
                    From today's assessment
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <div className="flex items-center justify-between rounded-xl bg-rose-50 px-3 py-3">
                  <span className="text-xs font-bold text-slate-500">
                    Blood Pressure
                  </span>
                  <span className="text-xs font-black text-rose-600">
                    158/102
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-orange-50 px-3 py-3">
                  <span className="text-xs font-bold text-slate-500">
                    Hemoglobin
                  </span>
                  <span className="text-xs font-black text-orange-600">
                    7.8 g/dL
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-rose-50 px-3 py-3">
                  <span className="text-xs font-bold text-slate-500">
                    Severe Headache
                  </span>
                  <span className="text-xs font-black text-rose-600">
                    Present
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-rose-50 px-3 py-3">
                  <span className="text-xs font-bold text-slate-500">
                    Swelling
                  </span>
                  <span className="text-xs font-black text-rose-600">
                    Present
                  </span>
                </div>
              </div>
            </section>

            {/* AI Note */}
            <section className="rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 to-pink-50 p-5">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-violet-100 p-2.5 text-violet-600">
                  <Sparkles size={17} />
                </div>

                <div>
                  <h3 className="text-sm font-black text-slate-800">
                    AI-assisted referral
                  </h3>

                  <p className="mt-1 text-[11px] font-medium leading-5 text-slate-500">
                    Referral details are informed by the explainable priority
                    assessment. The final referral decision remains with the
                    healthcare worker and clinical team.
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
            CuraFlow records and coordinates referrals; it does not replace
            emergency services or clinical decision-making. Follow local
            healthcare protocols for urgent or emergency situations.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-8 border-t border-slate-100 py-6 text-center">
          <p className="text-[11px] font-bold text-slate-400">
            CuraFlow AI · Referral Management
          </p>

          <p className="mt-1 text-[10px] font-medium text-slate-300">
            Maternal care coordination · ASHA worker workflow
          </p>
        </footer>
      </main>
    </div>
  );
}

export default Referral;