import React from 'react';
import { Link } from 'react-router-dom';

/* ─── Data ───────────────────────────────────────────────────────── */
const PREVIEW_STEPS = [
  {
    num: "01",
    title: "MISSED CALL DETECTED",
    body: "Your receptionist is busy. The call drops. Engageo intercepts in real time."
  },
  {
    num: "02",
    title: "AI CALLS BACK IN 8 SECONDS",
    body: "Before the patient opens Google. Voice call, qualification, slot booked."
  },
  {
    num: "03",
    title: "WHATSAPP DOES THE REST",
    body: "Confirmation sent. Reminder fired 24 hours before. No-show? Recovery message triggered automatically."
  }
];

export default function CondensedSystemPreview() {
  return (
    <section
      className="w-full flex justify-center py-[48px] md:py-[80px]"
      style={{ backgroundColor: 'var(--parchment)' }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center">

        {/* Header */}
        <div
          className="font-mono uppercase font-bold mb-4 tracking-[2px] text-center"
          style={{
            color: 'var(--clinic-stone)',
            fontSize: '11px'
          }}
        >
          THE SYSTEM
        </div>
        <h2
          className="font-sans font-bold leading-tight mb-16 text-center text-[28px] md:text-[40px]"
          style={{ color: 'var(--clinic-ink)' }}
        >
          Three steps. Fully automatic.
        </h2>

        {/* 3-Step Row/Stack */}
        <div className="w-full flex flex-col md:flex-row relative">
          {PREVIEW_STEPS.map((step, i) => (
            <React.Fragment key={step.num}>

              {/* Item Card */}
              <div className="flex-1 flex flex-col relative px-0 md:px-8 py-8 md:py-0 first:md:pl-0 last:md:pr-0">

                {/* Ghost Numeral */}
                <div
                  className="font-mono font-bold leading-none mb-4 md:-ml-1 pointer-events-none select-none"
                  style={{
                    color: 'var(--ink-faint)',
                    fontSize: '80px',
                    opacity: 0.5,
                    letterSpacing: '-0.05em'
                  }}
                >
                  {step.num}
                </div>

                {/* Content */}
                <div
                  className="font-mono font-bold uppercase tracking-[2px] mb-3"
                  style={{ color: 'var(--clinic-stone)', fontSize: '11px' }}
                >
                  {step.title}
                </div>
                <p
                  className="font-sans font-medium"
                  style={{
                    color: 'var(--clinic-slate)',
                    fontSize: '15px',
                    lineHeight: '1.5',
                    maxWidth: '280px'
                  }}
                >
                  {step.body}
                </p>

              </div>

              {/* Dividers */}
              {i < PREVIEW_STEPS.length - 1 && (
                <>
                  {/* Desktop vertical divider */}
                  <div className="hidden md:block w-[1px] shrink-0 my-auto h-[60%]" style={{ backgroundColor: 'var(--clinic-silver)' }} />
                  {/* Mobile horizontal divider */}
                  <div className="block md:hidden h-[1px] w-full shrink-0" style={{ backgroundColor: 'var(--clinic-silver)' }} />
                </>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Link Out */}
        <Link
          to="/how-it-works"
          className="mt-16 font-sans font-bold transition-all hover:underline text-[15px]"
          style={{
            color: 'var(--recovery-blue)',
            textDecorationColor: 'var(--recovery-blue)'
          }}
        >
          See every step in detail →
        </Link>

      </div>
    </section>
  );
}
