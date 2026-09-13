import {
  ArrowRight,
  Heart,
  HeartPulse,
  Lock,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import { useState } from "react";

export default function Login({ onLogin }) {
  const [workerId, setWorkerId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo authentication for now.
    // Real authentication will be connected to Spring Boot later.
    onLogin();
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#fffafd] text-[#202a43]">
      <div className="grid min-h-screen lg:grid-cols-[1.05fr_0.95fr]">

        {/* LEFT — BRAND / VISUAL */}
        <section className="relative hidden overflow-hidden bg-gradient-to-br from-[#ffdce8] via-[#fff0f5] to-[#e3f8f0] lg:flex">
          
          {/* Decorative circles */}
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#ff9ab5]/30" />

          <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[#bcebd9]/40" />

          <div className="absolute right-24 top-24 h-20 w-20 rounded-full bg-[#fff]/40" />

          <div className="relative z-10 flex w-full flex-col justify-between p-10 xl:p-14">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f04d7e] to-[#ff9fb8] text-white shadow-lg shadow-pink-200">
                <HeartPulse size={26} />
              </div>

              <div>
                <p className="text-xl font-bold tracking-tight text-[#18223a]">
                  CuraFlow
                </p>

                <p className="text-[10px] text-[#7f8999]">
                  Care for every tomorrow
                </p>
              </div>
            </div>

            {/* Main visual */}
            <div className="relative mx-auto w-full max-w-xl">

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-2 text-xs font-semibold text-[#6a7588] backdrop-blur">
                <Sparkles size={14} className="text-[#e84276]" />
                AI-powered maternal care
              </div>

              <h1 className="max-w-xl text-5xl font-light leading-[1.08] tracking-tight text-[#313b54] xl:text-6xl">
                Care that knows
                <br />
                <span className="font-bold text-[#18223a]">
                  who needs you
                </span>{" "}
                most.
              </h1>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#69758a]">
                CuraFlow helps ASHA workers identify priority cases,
                manage follow-ups and make informed care decisions —
                even when resources are limited.
              </p>

              {/* Floating cards */}
              <div className="relative mt-10 h-56">

                {/* Main AI card */}
                <div className="absolute left-2 top-3 w-72 rounded-3xl border border-white bg-white/80 p-5 shadow-xl shadow-pink-100/60 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ffe0ea] text-[#e93469]">
                        <Sparkles size={17} />
                      </div>

                      <div>
                        <p className="text-xs font-bold text-[#273149]">
                          AI Intervention
                        </p>

                        <p className="text-[9px] text-[#9aa2af]">
                          Priority queue
                        </p>
                      </div>
                    </div>

                    <span className="rounded-full bg-[#ffe0e8] px-2 py-1 text-[9px] font-bold text-[#e63269]">
                      AI
                    </span>
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#ffcbd9] to-[#d9f3e8] text-xs font-bold text-[#536074]">
                      LD
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-bold text-[#303a52]">
                        Lakshmi Devi
                      </p>

                      <p className="text-[10px] text-[#8e98a7]">
                        32 weeks • Kovilur
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-xl font-bold text-[#e63269]">
                        96
                      </p>

                      <p className="text-[8px] text-[#9aa2af]">
                        Priority
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <span className="rounded-full bg-[#ffe5eb] px-2 py-1 text-[9px] font-semibold text-[#e63269]">
                      Critical
                    </span>

                    <span className="rounded-full bg-[#fff4df] px-2 py-1 text-[9px] font-semibold text-[#df8612]">
                      Referral
                    </span>
                  </div>
                </div>

                {/* Health score */}
                <div className="absolute bottom-0 right-4 w-48 rounded-3xl border border-white bg-white/85 p-5 shadow-xl shadow-green-100/60 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-[#536075]">
                      Care Overview
                    </p>

                    <Heart
                      size={17}
                      className="text-[#ee4a79]"
                      fill="currentColor"
                    />
                  </div>

                  <div className="mt-4 flex items-end gap-2">
                    <span className="text-3xl font-bold text-[#202b44]">
                      24
                    </span>

                    <span className="mb-1 text-[10px] text-[#8e98a7]">
                      mothers
                    </span>
                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#f0edf1]">
                    <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-[#f05a88] to-[#66c6a4]" />
                  </div>

                  <p className="mt-2 text-[9px] text-[#929baa]">
                    72% routine care on track
                  </p>
                </div>

                {/* Decorative heart */}
                <div className="absolute right-20 top-[-30px] flex h-14 w-14 rotate-12 items-center justify-center rounded-2xl bg-white/70 text-[#f05a87] shadow-lg">
                  <Heart size={25} fill="currentColor" />
                </div>

                {/* Small flower */}
                <div className="absolute bottom-2 left-[-25px] text-4xl">
                  🌸
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="flex items-center gap-2 text-xs text-[#758093]">
              <ShieldCheck size={15} className="text-[#28af87]" />
              Built for frontline maternal care
            </div>
          </div>
        </section>

        {/* RIGHT — LOGIN */}
        <section className="relative flex min-h-screen items-center justify-center px-6 py-10">

          {/* Mobile logo */}
          <div className="absolute left-6 top-6 flex items-center gap-2.5 lg:hidden">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#f04d7e] to-[#ff9fb8] text-white">
              <HeartPulse size={21} />
            </div>

            <div>
              <p className="font-bold text-[#18223a]">
                CuraFlow
              </p>

              <p className="text-[8px] text-[#929aa8]">
                Care for every tomorrow
              </p>
            </div>
          </div>

          <div className="w-full max-w-md">

            {/* Heading */}
            <div className="mb-9">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffe0e9] to-[#e2f7ef] text-[#e73b70] lg:hidden">
                <HeartPulse size={27} />
              </div>

              <p className="text-sm font-semibold text-[#e63a70]">
                Welcome back 👋
              </p>

              <h2 className="mt-2 text-4xl font-light tracking-tight text-[#344058]">
                Sign in to{" "}
                <span className="font-bold text-[#18223a]">
                  CuraFlow
                </span>
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#8791a2]">
                Access your maternal care dashboard and today's
                intervention priorities.
              </p>
            </div>

            {/* Login card */}
            <div className="rounded-[32px] border border-[#eee5eb] bg-white p-7 shadow-xl shadow-[#e8dce3]/40 sm:p-9">

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Worker ID */}
                <div>
                  <label className="mb-2.5 block text-xs font-bold text-[#4c586e]">
                    ASHA Worker ID
                  </label>

                  <div className="relative">
                    <UserRound
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a2a9b5]"
                    />

                    <input
                      type="text"
                      value={workerId}
                      onChange={(e) => setWorkerId(e.target.value)}
                      placeholder="Enter your worker ID"
                      className="w-full rounded-2xl border border-[#e8e2e7] bg-[#fffafd] py-3.5 pl-11 pr-4 text-sm text-[#303b53] outline-none transition placeholder:text-[#aab0bb] focus:border-[#f19ab2] focus:bg-white focus:ring-4 focus:ring-[#ffe5ed]"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="mb-2.5 flex items-center justify-between">
                    <label className="block text-xs font-bold text-[#4c586e]">
                      Password
                    </label>

                    <button
                      type="button"
                      className="text-[10px] font-semibold text-[#e33a6c] hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <div className="relative">
                    <Lock
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a2a9b5]"
                    />

                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full rounded-2xl border border-[#e8e2e7] bg-[#fffafd] py-3.5 pl-11 pr-4 text-sm text-[#303b53] outline-none transition placeholder:text-[#aab0bb] focus:border-[#f19ab2] focus:bg-white focus:ring-4 focus:ring-[#ffe5ed]"
                    />
                  </div>
                </div>

                {/* Remember */}
                <label className="flex cursor-pointer items-center gap-2.5">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-[#ddd4db] accent-[#ed4b7d]"
                  />

                  <span className="text-xs text-[#798497]">
                    Keep me signed in
                  </span>
                </label>

                {/* Button */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#ed4b7d] via-[#ed4679] to-[#d83e70] py-4 text-sm font-bold text-white shadow-lg shadow-[#f4b8c9]/60 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#f0aabc]/60 active:translate-y-0"
                >
                  Sign in to CuraFlow

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </form>

              {/* Demo */}
              <div className="mt-6 rounded-2xl border border-[#f4e8ee] bg-gradient-to-r from-[#fff4f7] to-[#f1fbf7] p-4">
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-[#e94475] shadow-sm">
                    <Sparkles size={15} />
                  </div>

                  <div>
                    <p className="text-[11px] font-bold text-[#4b566b]">
                      Demo Mode
                    </p>

                    <p className="mt-1 text-[10px] leading-5 text-[#8d96a5]">
                      Enter any Worker ID and password to explore
                      CuraFlow. Authentication will be connected to
                      the backend later.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-7 flex items-center justify-center gap-2 text-[10px] text-[#a0a7b2]">
              <ShieldCheck size={13} className="text-[#29af87]" />
              Your care data is protected
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}