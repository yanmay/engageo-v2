import React, { useRef, useEffect, useState } from 'react';
import { useModal } from '../context/ModalContext';

/* ─── Audience data ──────────────────────────────────────────── */
const audiences = [
  {
    id: 'dental-derm',
    index: '01',
    title: 'Dental & Dermatology Clinics',
    tagline: 'High-ticket. Appointment-driven. Every missed call = lost procedure.',
    pain: 'You spend ₹8,000 on a Google Ad. Your receptionist misses the callback. The patient books your competitor.',
    gain: 'Engageo intercepts in 8 seconds, qualifies the lead, books the slot, sends the WhatsApp confirmation.',
    metrics: [
      { value: '₹5–15K', label: 'per recovered consultation' },
      { value: '38%', label: 'avg calls missed at peak' },
      { value: '4 days', label: 'to go live' },
    ],
    accent: '#3D5AFE',
    badge: 'Best Fit',
    badgeColor: 'bg-brand/10 text-brand border-brand/20',
    visual: 'pulse',
  },
  {
    id: 'fertility',
    index: '02',
    title: 'Fertility & IVF Clinics',
    tagline: 'Patients call in emotional distress. Every miss is permanent loss.',
    pain: 'Your patient called on a Sunday night at 11 PM. You were asleep. They booked Nova IVF by morning.',
    gain: 'Engageo answers 24/7, captures intent, and schedules the consultation — no human needed.',
    metrics: [
      { value: '₹1–5L', label: 'revenue per IVF cycle' },
      { value: '72hrs', label: 'avg decision window' },
      { value: '91%', label: 'booking rate after intercept' },
    ],
    accent: '#7C3AED',
    badge: 'High Impact',
    badgeColor: 'bg-violet-500/10 text-violet-600 border-violet-500/20',
    visual: 'wave',
  },
  {
    id: 'diagnostics',
    index: '03',
    title: 'Diagnostic Lab Chains',
    tagline: 'Hundreds of test bookings daily. Front desk is overwhelmed.',
    pain: 'SRL franchisees, Metropolis branches — 3–15 locations, one overloaded receptionist per branch.',
    gain: 'Engageo handles overflow volume across all your locations simultaneously. One AI. Every branch.',
    metrics: [
      { value: '300+', label: 'calls / day handled' },
      { value: '15', label: 'locations, one system' },
      { value: '0', label: 'additional staff needed' },
    ],
    accent: '#0891B2',
    badge: 'Volume Play',
    badgeColor: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20',
    visual: 'grid',
  },
  {
    id: 'hospital-opd',
    index: '04',
    title: 'Hospital OPD Desks (Tier 2)',
    tagline: 'Modernizing without enterprise budgets. The exact wedge.',
    pain: 'Hospitals in Indore, Surat, Nagpur losing 30–50 calls/day. No CRM. No automation. No time.',
    gain: 'Engageo deploys in 4 days. Zero IT team required. Immediate OPD pipeline recovery.',
    metrics: [
      { value: '50+', label: 'calls recovered daily' },
      { value: '₹0', label: 'IT spend to deploy' },
      { value: '4x', label: 'ROI in 30 days' },
    ],
    accent: '#059669',
    badge: 'Dark Horse',
    badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
    visual: 'bars',
  },
  {
    id: 'aggregators',
    index: '05',
    title: 'Clinic Aggregators & Networks',
    tagline: 'Pristyn Care. Practo. DocPrime. One deal = hundreds of clinics.',
    pain: 'You run a network of 50–500 clinics. The booking drop-off at the call layer is bleeding millions.',
    gain: 'Engageo as your B2B2C intelligence layer. We become the backend for every clinic in your network.',
    metrics: [
      { value: '500+', label: 'clinics, one contract' },
      { value: '₹Cr', label: 'network revenue unlocked' },
      { value: '24hr', label: 'network-wide go-live' },
    ],
    accent: '#DC2626',
    badge: 'Dream Target',
    badgeColor: 'bg-red-500/10 text-red-600 border-red-500/20',
    visual: 'rings',
  },
];

/* ─── Animated visuals per card ─────────────────────────────── */
function PulseVisual({ active }) {
  return (
    <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute rounded-full border border-brand/30 transition-all duration-700"
          style={{
            width: `${40 + i * 24}px`,
            height: `${40 + i * 24}px`,
            opacity: active ? 0.6 - i * 0.15 : 0.1,
            animation: active ? `pulse-dot ${1.5 + i * 0.4}s ease-in-out infinite` : 'none',
          }}
        />
      ))}
      <div
        className="w-4 h-4 rounded-full bg-brand transition-all duration-500"
        style={{ boxShadow: active ? '0 0 16px rgba(61,90,254,0.6)' : 'none' }}
      />
    </div>
  );
}

function WaveVisual({ active }) {
  return (
    <div className="w-24 h-16 flex items-end gap-[3px] shrink-0">
      {[6, 10, 14, 18, 22, 18, 14, 10, 6, 10, 14, 18, 22].map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm transition-all duration-500 ease-out"
          style={{
            height: active ? `${h * 0.9}px` : '4px',
            background: `rgba(124,58,237,${active ? 0.5 + (h / 22) * 0.5 : 0.15})`,
            transitionDelay: `${i * 40}ms`,
          }}
        />
      ))}
    </div>
  );
}

function GridVisual({ active }) {
  return (
    <div className="grid grid-cols-5 gap-1 shrink-0">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="w-3.5 h-3.5 rounded-sm transition-all duration-300"
          style={{
            background: active && i < 14 ? 'rgba(8,145,178,0.6)' : 'rgba(226,232,240,0.6)',
            transitionDelay: `${i * 30}ms`,
            transform: active && i < 14 ? 'scale(1)' : 'scale(0.8)',
          }}
        />
      ))}
    </div>
  );
}

function BarsVisual({ active }) {
  const heights = [40, 60, 80, 55, 90, 70, 50];
  return (
    <div className="w-24 h-16 flex items-end gap-1.5 shrink-0">
      {heights.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-sm transition-all duration-500 ease-out"
          style={{
            height: active ? `${h * 0.64}px` : '3px',
            background: `rgba(5,150,105,${0.4 + (h / 90) * 0.6})`,
            transitionDelay: `${i * 60}ms`,
          }}
        />
      ))}
    </div>
  );
}

function RingsVisual({ active }) {
  return (
    <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
      <div
        className="absolute inset-0 rounded-full border-2 border-dashed border-red-400/40 transition-all duration-700"
        style={{
          transform: active ? 'rotate(45deg) scale(1)' : 'rotate(0deg) scale(0.8)',
          opacity: active ? 1 : 0.2,
          animation: active ? 'spin 6s linear infinite' : 'none',
        }}
      />
      <div
        className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/40 transition-all duration-500"
        style={{ transform: active ? 'scale(1.2)' : 'scale(1)' }}
      />
    </div>
  );
}

function VisualFor({ type, active }) {
  if (type === 'pulse') return <PulseVisual active={active} />;
  if (type === 'wave') return <WaveVisual active={active} />;
  if (type === 'grid') return <GridVisual active={active} />;
  if (type === 'bars') return <BarsVisual active={active} />;
  if (type === 'rings') return <RingsVisual active={active} />;
  return null;
}

/* ─── Main Section ───────────────────────────────────────────── */
export default function WhoItsFor() {
  const { openModal } = useModal();
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const current = audiences[activeCard];

  return (
    <section
      ref={sectionRef}
      id="who"
      className="py-32 px-6 md:px-12 lg:px-20 relative z-10 bg-canvas"
    >
      {/* Subtle top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto">

        {/* ── Section Header ── */}
        <div
          className="mb-20 max-w-2xl transition-all duration-700"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border shadow-card mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand pulse-dot" />
            <span className="font-mono text-[10px] font-semibold text-subtle uppercase tracking-widest">
              Precision Targeting
            </span>
          </div>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-obsidian tracking-tighter mb-6 leading-[1.05]">
            Built for clinics that
            <span className="gradient-text block">can't afford to miss.</span>
          </h2>
          <p className="text-subtle text-lg leading-relaxed max-w-lg">
            Engageo isn't for everyone. It's precision-built for five types of healthcare operators
            where a single recovered call changes the economics of the business.
          </p>
        </div>

        {/* ── Main Layout: Left list + Right detail ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* ── Left: Audience Selector ── */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {audiences.map((a, i) => (
              <button
                key={a.id}
                onClick={() => setActiveCard(i)}
                className={`group w-full text-left p-5 rounded-2xl border transition-all duration-300 ease-out ${
                  activeCard === i
                    ? 'bg-white border-brand/20 shadow-card-hover'
                    : 'bg-white/50 border-border hover:bg-white hover:border-border hover:shadow-card'
                }`}
                style={{
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.3s ease-out, opacity 0.6s ease ${0.1 + i * 0.08}s, transform 0.6s ease ${0.1 + i * 0.08}s`,
                }}
              >
                <div className="flex items-center gap-4">
                  {/* Index number */}
                  <span
                    className={`font-mono text-xs font-bold tabular-nums transition-colors duration-300 ${
                      activeCard === i ? 'text-brand' : 'text-muted'
                    }`}
                  >
                    {a.index}
                  </span>

                  {/* Title + badge */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                      <span
                        className={`font-sans text-sm font-semibold tracking-tight transition-colors duration-300 ${
                          activeCard === i ? 'text-obsidian' : 'text-charcoal'
                        }`}
                      >
                        {a.title}
                      </span>
                      <span
                        className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${a.badgeColor}`}
                      >
                        {a.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-subtle leading-tight line-clamp-1">
                      {a.tagline}
                    </p>
                  </div>

                  {/* Active indicator */}
                  <div
                    className={`w-1.5 h-6 rounded-full transition-all duration-300 shrink-0 ${
                      activeCard === i ? 'bg-brand' : 'bg-transparent'
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* ── Right: Detail Pane ── */}
          <div
            key={current.id}
            className="lg:col-span-8 feature-card rounded-3xl overflow-hidden"
            style={{ animation: 'fadeInUp 0.4s cubic-bezier(0.25, 1, 0.5, 1) both' }}
          >
            <div className="p-10 md:p-12 h-full flex flex-col gap-10">

              {/* Top: Header */}
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[10px] text-muted uppercase tracking-widest">
                      {current.index} / {String(audiences.length).padStart(2, '0')}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${current.badgeColor}`}
                    >
                      {current.badge}
                    </span>
                  </div>
                  <h3 className="font-sans text-2xl md:text-3xl font-bold text-obsidian tracking-tighter mb-3 leading-tight">
                    {current.title}
                  </h3>
                  <p className="text-subtle text-sm leading-relaxed max-w-lg">
                    {current.tagline}
                  </p>
                </div>
                <VisualFor type={current.visual} active={true} />
              </div>

              {/* Middle: Pain → Gain */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Pain */}
                <div className="glass-card rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <span className="font-mono text-[10px] text-red-400 uppercase tracking-widest font-bold">
                      The Problem
                    </span>
                  </div>
                  <p className="text-sm text-charcoal leading-relaxed">
                    {current.pain}
                  </p>
                </div>

                {/* Gain */}
                <div
                  className="rounded-2xl p-6 border"
                  style={{
                    background: 'rgba(61,90,254,0.04)',
                    borderColor: 'rgba(61,90,254,0.15)',
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand pulse-dot" />
                    <span className="font-mono text-[10px] text-brand uppercase tracking-widest font-bold">
                      The Fix
                    </span>
                  </div>
                  <p className="text-sm text-charcoal leading-relaxed">
                    {current.gain}
                  </p>
                </div>
              </div>

              {/* Bottom: Metrics + CTA */}
              <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                {/* Metrics */}
                <div className="flex gap-6 flex-wrap">
                  {current.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col gap-1">
                      <span className="font-sans text-2xl font-bold text-obsidian tracking-tighter">
                        {m.value}
                      </span>
                      <span className="font-mono text-[9px] text-subtle uppercase tracking-widest">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={openModal}
                  className="group relative isolate overflow-hidden bg-brand text-white text-xs font-semibold px-6 py-3 rounded-xl glow-brand-sm ring-1 ring-brand/30 transition-all duration-400 hover:scale-[1.04] hover:glow-brand active:scale-[0.97] shrink-0 flex items-center gap-2"
                >
                  <div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 pointer-events-none" />
                  <span className="relative z-20">Get Free Audit</span>
                  <svg className="relative z-20 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom: Compact "not right for" signal ── */}
        <div
          className="mt-12 glass-card rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s',
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-canvas border border-border flex items-center justify-center text-subtle text-sm">✕</div>
            <p className="font-sans text-sm text-subtle">
              <span className="text-obsidian font-semibold">Not for you if:</span> You're a single-doctor general physician with under 20 calls/day,
              or a hospital already running a full enterprise CRM stack.
            </p>
          </div>
          <button
            onClick={openModal}
            className="font-sans text-xs font-semibold text-brand hover:text-obsidian transition-colors shrink-0 link-underline pb-0.5"
          >
            Check if you qualify →
          </button>
        </div>

      </div>
    </section>
  );
}
