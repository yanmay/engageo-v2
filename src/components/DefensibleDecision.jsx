import React from 'react';
import { Link } from 'react-router-dom';

export default function DefensibleDecision() {
  return (
    <section
      className="py-24 relative overflow-hidden z-10 text-center bg-[var(--surface)] border-y border-[var(--rule)]"
    >
      {/* Brand glow blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(26,122,74,0.08) 0%, rgba(26,122,74,0.02) 40%, transparent 70%)' }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center justify-center gap-8">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--rule)] bg-[var(--parchment)] mb-2 shadow-sm rounded-sm">
          <span className="w-1.5 h-1.5 bg-[var(--green)] pulse-dot" />
          <span className="font-mono text-[10px] text-[var(--ink-muted)] font-bold uppercase tracking-widest">Our Promise to You</span>
        </div>

        {/* Headline */}
        <h2 className="font-sans text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-[var(--ink)] leading-[1.05]">
          15 Confirmed Bookings.<br />
          <span className="serif-hero italic block mt-2 text-[var(--green)]">Or we keep going. Free.</span>
        </h2>

        {/* Body */}
        <div className="max-w-2xl space-y-4">
          <p className="text-lg md:text-xl text-[var(--ink)] opacity-80 leading-relaxed font-mono">
            If your clinic doesn't receive 15 confirmed bookings in the first 30 days, we extend the service at zero cost until we hit that number. No refund negotiation. No invoices. Just the number we promised.
          </p>
        </div>

        {/* Eligibility note */}
        <div className="inline-flex items-start gap-2.5 px-5 py-3.5 border border-[var(--rule)] bg-[var(--parchment)] text-left max-w-sm rounded-[2px]">
          <span className="text-[var(--ink-faint)] mt-0.5 shrink-0">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
              <path d="M7 4.5v3M7 9.5h.01" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </span>
          <p className="font-mono text-[10px] text-[var(--ink-muted)] leading-relaxed uppercase tracking-wide">
            Applies to clinics with 30+ monthly inbound calls. Verified before we start.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center mt-4">
          <Link
            to="/audit"
            className="group relative isolate overflow-hidden bg-[var(--ink)] text-[var(--parchment)] text-[13px] font-bold tracking-wide px-10 py-4 border border-[var(--ink)] hover:bg-[var(--green)] hover:border-[var(--green)] transition-all duration-200 active:scale-[0.98] shadow-md uppercase font-mono"
            style={{ borderRadius: '2px' }}
          >
            <span className="relative z-20">Claim Your Guarantee &rarr;</span>
          </Link>
          <div
            className="font-mono text-center mt-4 tracking-tighter"
            style={{ color: 'var(--ink-muted)', fontSize: '11px' }}
          >
            No credit card to book. 24-hour WhatsApp response.
          </div>
        </div>
      </div>
    </section>
  );
}
