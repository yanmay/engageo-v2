import React from 'react';
import { useModal } from '../context/ModalContext';

export default function DefensibleDecision() {
  const { openModal } = useModal();
  return (
    <section
      className="py-36 relative overflow-hidden z-10 text-center bg-obsidian border-t-2 border-white/10"
    >
      {/* Brand glow blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(61,90,254,0.18) 0%, rgba(61,90,254,0.05) 40%, transparent 70%)' }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center justify-center gap-8">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-white/20 bg-white/5 mb-4">
          <span className="w-1.5 h-1.5 bg-emerald-400 pulse-dot" />
          <span className="font-mono text-[10px] text-white/70 font-bold uppercase tracking-widest">Our Promise to You</span>
        </div>

        {/* Headline */}
        <h2 className="font-sans text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.05]">
          15 Booked Appointments<br />
          in 30 Days — <br/>
          <span className="serif-hero italic block mt-2" style={{color: '#3D5AFE'}}>Or We Keep Going, Free.</span>
        </h2>

        {/* Body */}
        <div className="max-w-2xl space-y-4">
          <p className="text-lg md:text-xl text-white/60 leading-relaxed">
            Not revenue projections. Not "up to" numbers.{' '}
            <span className="text-white font-semibold">15 real patients, confirmed in your calendar, in your first month.</span>{' '}
            If we fall short, we extend at zero cost until we get there.
          </p>
          <p className="text-base text-white/40 leading-relaxed">
            No renegotiation. No invoice. Just the number we promised.
          </p>
        </div>

        {/* Eligibility note */}
        <div className="inline-flex items-start gap-2.5 px-5 py-3.5 border-2 border-white/20 bg-white/5 text-left max-w-sm">
          <span className="text-white/30 mt-0.5 shrink-0">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M7 4.5v3M7 9.5h.01" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </span>
          <p className="font-mono text-[10px] text-white/35 leading-relaxed uppercase tracking-wide">
            Applies to clinics with 30+ monthly inbound calls. Verified before we start.
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={openModal}
          className="group relative isolate overflow-hidden bg-brand text-white text-[13px] font-bold tracking-wide px-10 py-4 border-2 border-white/10 hover:border-white transition-all duration-200 active:scale-[0.98]"
        >
          <span className="relative z-20">Claim Your 15-Appointment Guarantee →</span>
        </button>
      </div>
    </section>
  );
}
