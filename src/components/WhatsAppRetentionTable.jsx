import React from 'react';
import { Link } from 'react-router-dom';

const ROWS = [
  {
    num: "01",
    trigger: "INSTANT",
    sub: "Right after the call ends",
    desc: "Confirms the booking with date, time, doctor name, and clinic address.",
    pill: "Slot Locked",
    pillBg: "var(--recovered-tint)",
    pillColor: "var(--recovered-green)",
    active: false
  },
  {
    num: "02",
    trigger: "T-24 HRS",
    sub: "Day before appointment",
    desc: "Reminds the patient and asks for a CONFIRM reply.",
    pill: "Reply Rate: 71%",
    pillBg: "var(--recovered-tint)",
    pillColor: "var(--recovered-green)",
    active: true
  },
  {
    num: "03",
    trigger: "T-2 HRS",
    sub: "Morning of appointment",
    desc: "Sends directions and what to bring.",
    pill: "No-Show Risk ↓",
    pillBg: "var(--recovery-blue-tint)",
    pillColor: "var(--recovery-blue)",
    active: false
  },
  {
    num: "04",
    trigger: "NO-SHOW",
    sub: "If patient doesn't arrive",
    desc: "Offers 3 rescheduled slots for the same week.",
    pill: "Rebooking",
    pillBg: "var(--clinic-mist)",
    pillColor: "var(--clinic-slate)",
    active: false
  }
];

export default function WhatsAppRetentionTable() {
  return (
    <section
      className="w-full flex justify-center py-[60px] md:py-[96px]"
      style={{ backgroundColor: 'var(--parchment)' }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* ── LEFT COLUMN (40%) ── */}
        <div className="lg:col-span-5 flex flex-col items-start w-full">
          {/* Section Label */}
          <div
            className="font-mono uppercase font-bold mb-6"
            style={{
              color: 'var(--clinic-stone)',
              letterSpacing: '2px',
              fontSize: '11px'
            }}
          >
            THE SECOND LAYER
          </div>

          {/* Headlines */}
          <h2
            className="font-sans font-bold leading-none mb-1 text-[28px] md:text-[40px]"
            style={{ color: 'var(--ink)' }}
          >
            The call recovers.
          </h2>
          <h2
            className="font-serif italic leading-none mb-6 text-[28px] md:text-[40px]"
            style={{ color: 'var(--signal-green)' }}
          >
            WhatsApp retains.
          </h2>

          {/* Body Text */}
          <p
            className="font-sans font-medium mb-10 text-[16px]"
            style={{
              color: 'var(--clinic-slate)',
              lineHeight: '1.6',
              maxWidth: '320px'
            }}
          >
            94% of your patients are on WhatsApp. They open it within 3 minutes. We use that to make sure the patient you just recovered actually shows up.
          </p>

          {/* Large Stat */}
          <div className="mb-8">
            <div
              className="font-sans font-bold leading-none mb-2 text-[72px]"
              style={{ color: 'var(--green)' }}
            >
              40%
            </div>
            <div
              className="font-sans font-medium text-[13px]"
              style={{ color: 'var(--clinic-stone)', maxWidth: '200px', lineHeight: '1.4' }}
            >
              average drop in no-shows within 30 days
            </div>
          </div>

          {/* Text Link */}
          <Link
            to="/how-it-works"
            className="font-sans font-bold transition-all hover:underline text-[14px]"
            style={{
              color: 'var(--recovery-blue)',
              textDecorationColor: 'var(--recovery-blue)'
            }}
          >
            See the full funnel →
          </Link>
        </div>

        {/* ── RIGHT COLUMN (60%) ── */}
        <div className="lg:col-span-7 flex flex-col w-full">

          {/* Status Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 mb-0" style={{ borderBottom: '1px solid var(--clinic-silver)' }}>
            <div className="flex items-center gap-2">
              <div
                className="pulse-dot shrink-0"
                style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--signal-green)' }}
              />
              <span
                className="font-mono font-bold uppercase"
                style={{ color: 'var(--signal-green)', letterSpacing: '0.05em', fontSize: '11px' }}
              >
                WHATSAPP SEQUENCE ACTIVE
              </span>
            </div>
            <div
              className="font-sans font-medium"
              style={{ color: 'var(--clinic-stone)', fontSize: '12px' }}
            >
              Smile Dental Clinic · 47 patients in sequence
            </div>
          </div>

          {/* 4-Row Flat Table */}
          <div className="w-full flex flex-col">
            {ROWS.map((row) => (
              <div
                key={row.num}
                className="flex flex-col sm:flex-row sm:items-center gap-4 py-[16px] w-full relative transition duration-150 hover:bg-[var(--clinic-mist)]"
                style={{
                  borderBottom: '1px solid var(--clinic-silver)',
                  borderLeft: row.active ? '3px solid var(--signal-green)' : '3px solid transparent',
                  backgroundColor: row.active ? 'var(--signal-green-tint)' : 'transparent',
                  paddingLeft: row.active ? '13px' : '16px', // Compensate for 3px border to keep alignment
                  paddingRight: '16px'
                }}
              >

                {/* Col 1: Step Number */}
                <div
                  className="font-mono font-bold leading-none shrink-0"
                  style={{
                    color: 'var(--clinic-silver)',
                    fontSize: '48px',
                    opacity: 0.4,
                    minWidth: '48px'
                  }}
                >
                  {row.num}
                </div>

                {/* Col 2: Trigger Label + Sub */}
                <div className="flex flex-col shrink-0 sm:w-[130px] lg:w-[160px]">
                  <span
                    className="font-mono uppercase font-bold mb-1"
                    style={{ color: 'var(--clinic-ink)', fontSize: '11px', letterSpacing: '2px' }}
                  >
                    {row.trigger}
                  </span>
                  <span
                    className="font-sans font-medium"
                    style={{ color: 'var(--clinic-stone)', fontSize: '12px' }}
                  >
                    {row.sub}
                  </span>
                </div>

                {/* Col 3: Description */}
                <div className="flex-1 min-w-[150px]">
                  <p
                    className="font-sans font-medium"
                    style={{ color: 'var(--clinic-slate)', fontSize: '14px', lineHeight: '1.4' }}
                  >
                    {row.desc}
                  </p>
                </div>

                {/* Col 4: Outcome Pill */}
                <div className="shrink-0 sm:ml-auto pt-2 sm:pt-0">
                  <span
                    className="font-sans font-bold whitespace-nowrap inline-block"
                    style={{
                      backgroundColor: row.pillBg,
                      color: row.pillColor,
                      borderRadius: '20px',
                      padding: '4px 10px',
                      fontSize: '11px'
                    }}
                  >
                    {row.pill}
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
