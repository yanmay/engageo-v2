import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ─── Timeline Data ────────────────────────────────────────────── */
const TIMELINE_STEPS = [
  {
    num: "01",
    trigger: "INSTANT",
    timing: "Right after the call ends",
    desc: "Confirms the booking with date, time, doctor name, and clinic address.",
    pillFormat: { text: "Slot Locked", bg: "var(--recovered-tint)", color: "var(--recovered-green)" },
    active: false,
  },
  {
    num: "02",
    trigger: "T-24 HRS",
    timing: "Day before appointment",
    desc: "Reminds the patient and asks for a CONFIRM reply.",
    pillFormat: { text: "Reply Rate: 71%", bg: "var(--recovered-tint)", color: "var(--recovered-green)" },
    active: true,
  },
  {
    num: "03",
    trigger: "T-2 HRS",
    timing: "Morning of appointment",
    desc: "Sends directions and what to bring.",
    pillFormat: { text: "No-Show Risk ↓", bg: "var(--recovered-tint)", color: "var(--recovered-green)" },
    active: false,
  },
  {
    num: "04",
    trigger: "NO-SHOW",
    timing: "If patient doesn't arrive",
    desc: "Offers 3 rescheduled slots for the same week.",
    pillFormat: { text: "Rebooking", bg: "var(--clinic-mist)", color: "var(--clinic-slate)" },
    active: false,
  }
];

export default function TheSecondLayer() {
  return (
    <section className="bg-[var(--clinic-white)] py-20 md:py-32 overflow-hidden border-t border-[var(--clinic-mist)]">
      <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-20">

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* ─── Left Column (40%) ─── */}
          <div className="w-full lg:w-[40%] flex flex-col items-start pt-4 relative z-10">
            {/* Section Label */}
            <div className="section-label mb-8 text-xs md:text-sm">● THE SECOND LAYER</div>

            <h2 className="font-sans text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.05] font-bold text-obsidian tracking-tighter mb-6 relative">
              The call recovers.<br />
              <span className="serif-hero font-light italic text-[var(--signal-green)] inline-block mt-2">
                WhatsApp retains.
              </span>
            </h2>

            <p className="font-sans text-[15px] md:text-base text-[var(--clinic-slate)] leading-relaxed max-w-sm md:max-w-md mb-12">
              94% of your patients are on WhatsApp. They open it within 3 minutes.
              We use that to make sure the patient you just recovered actually shows up.
            </p>

            {/* Raw Stat */}
            <div className="mb-12">
              <div className="font-mono text-[4rem] leading-none font-bold tracking-tighter text-[var(--recovered-green)] mb-3">
                40%
              </div>
              <div className="font-mono text-[11px] md:text-xs uppercase tracking-widest font-semibold text-[var(--clinic-stone)] max-w-[200px] leading-tight">
                average drop in no-shows within 30 days
              </div>
            </div>

            <Link
              to="/how-it-works"
              className="group flex items-center gap-2 font-sans font-bold text-[13px] md:text-[14px] text-obsidian tracking-wide uppercase link-underline pb-1 transition-all"
            >
              See the Full Funnel <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* ─── Right Column (60%) ─── */}
          <div className="w-full lg:w-[60%] flex flex-col pt-4">

            {/* Status Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 mt-8 lg:mt-0 xl:mt-8">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 bg-[var(--signal-green)]" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--signal-green)]" />
                </span>
                <span className="font-mono text-[11px] md:text-xs font-bold uppercase tracking-[0.12em] text-[var(--signal-green)]">
                  WhatsApp Sequence Active
                </span>
              </div>
              <div className="font-sans text-xs font-medium text-[var(--clinic-stone)]">
                Smile Dental Clinic · 47 patients in sequence
              </div>
            </div>

            {/* Top Border */}
            <div className="w-full h-[1px] bg-[var(--clinic-silver)]" />

            {/* Table Rows */}
            <div className="flex flex-col flex-1">
              {TIMELINE_STEPS.map((step, i) => (
                <div
                  key={i}
                  className={`group flex items-center gap-4 md:gap-6 lg:gap-8 px-4 py-5 md:py-6 lg:py-8 border-b border-[var(--clinic-silver)] transition-colors duration-150 relative ${step.active ? 'bg-[var(--signal-green-tint)]' : 'hover:bg-[var(--clinic-mist)]'
                    }`}
                >
                  {/* Active Indicator Line */}
                  {step.active && (
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--signal-green)]" />
                  )}

                  {/* Col 1: Ghost Number */}
                  <div className="w-12 md:w-16 shrink-0 pt-1">
                    <span
                      className="card-numeral tracking-tighter"
                      style={{
                        fontSize: 'clamp(3rem, 5vw, 4rem)',
                        color: 'var(--ink-faint)',
                        opacity: 0.6
                      }}
                    >
                      {step.num}
                    </span>
                  </div>

                  {/* Col 2: Trigger & Timing */}
                  <div className="w-[110px] sm:w-[130px] lg:w-[150px] shrink-0 flex flex-col gap-1.5 md:gap-2">
                    <span className="section-label !gap-0 !text-[10px] md:!text-[11px] !text-obsidian !before:hidden">
                      {step.trigger}
                    </span>
                    <span className="font-sans text-[12px] md:text-[13px] text-[var(--clinic-stone)] leading-tight mr-2">
                      {step.timing}
                    </span>
                  </div>

                  {/* Col 3: Description */}
                  <div className="flex-1 min-w-[120px] pr-2">
                    <p className="font-sans text-[13px] md:text-[15px] text-[var(--clinic-slate)] leading-snug">
                      {step.desc}
                    </p>
                  </div>

                  {/* Col 4: Outcome Pill */}
                  <div className="shrink-0 flex items-center justify-end w-[90px] md:w-[120px]">
                    <span
                      className="font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-wider px-2 md:px-3 py-1 md:py-1.5 rounded-full text-center whitespace-nowrap"
                      style={{
                        backgroundColor: step.pillFormat.bg,
                        color: step.pillFormat.color,
                      }}
                    >
                      {step.pillFormat.text}
                    </span>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
