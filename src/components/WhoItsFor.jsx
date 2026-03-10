import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useModal } from '../context/ModalContext';

/* ─── Audience data (honest, current-state targeting) ───────── */
/* Badge style note: sharp flat mono tags — no pills, no radius */
const audiences = [
  {
    id: 'hair-transplant',
    index: '01',
    title: 'Hair Transplant Clinics',
    tagBadge: 'First Close',
    badgeColor: 'bg-[var(--green)]/10 text-[var(--green)]',
    badgeBorder: 'border-l-2 border-[var(--green)]',
    tagline: '60–120 calls a day. One receptionist. The math doesn’t work.',
    summary:
      "Your Instagram leads call on impulse — they cool off in 4 hours. Your receptionist is mid-consultation. By the time she calls back, that patient has booked the clinic that picked up first. Engageo answers in 8 seconds, qualifies intent, and drops a confirmed slot on your calendar before the lead goes cold.",
    pain: "The Instagram lead called at 2 PM when your receptionist was mid-consultation. By 6 PM they had booked a clinic in the next lane.",
    gain: "Engageo picks up in 8 seconds. Qualifies. Books. Sends the WhatsApp confirmation. The lead never had a chance to go cold.",
    metrics: [
      { value: '₹80K–2L', label: 'revenue per procedure' },
      { value: '4 hrs', label: 'lead cooling window' },
      { value: '4 days', label: 'days to go live' },
    ],
    ctaSubtext: "Most hair transplant clinics go live in 3 days.",
    accent: 'var(--green)',
    visual: 'pulse',
  },
  {
    id: 'dental-derm',
    index: '02',
    title: 'Dental & Dermatology Clinics',
    tagBadge: 'Best Fit',
    badgeColor: 'bg-emerald-500/8 text-emerald-700',
    badgeBorder: 'border-l-2 border-emerald-500',
    tagline: 'You’re paying ₹8,000 per click. Your receptionist is letting those patients go to voicemail.',
    summary:
      "Every Google Ad click that goes unanswered is a double loss — you paid for the patient and you lost them to the competitor who picked up. Engageo sits between your ad spend and your front desk. Every inbound call answered in seconds, procedure qualified, slot confirmed. You see the ROI before the end of Week 1.",
    pain: "You spent ₹8,000 on a Google Ad. Your receptionist missed the callback. The patient booked your competitor down the road.",
    gain: "Engageo answers before your receptionist even sees the missed call notification. Lead qualified. Slot booked. Ad spend justified.",
    metrics: [
      { value: '₹5–15K', label: 'per recovered consultation' },
      { value: '38%', label: 'avg calls missed at peak hours' },
      { value: '4 days', label: 'to go live' },
    ],
    ctaSubtext: "ROI visible before end of Week 1.",
    accent: 'var(--signal-green)',
    visual: 'bars',
  },
  {
    id: 'fertility',
    index: '03',
    title: 'Fertility & IVF Clinics',
    tagBadge: 'Month 2+',
    badgeColor: 'bg-violet-500/8 text-violet-700',
    badgeBorder: 'border-l-2 border-violet-500',
    tagline: 'IVF patients call three clinics in one evening. The first voice they hear wins the cycle.',
    summary:
      "At ₹1L–₹5L per cycle, one recovered call pays for Engageo for a year. These patients don't leave voicemails — they move on. Engageo answers at 11 PM on a Sunday with the right tone, captures the consultation intent, and schedules it. No patient ever hits your voicemail during the hardest decision of their life.",
    pain: "Your patient called Sunday night at 11 PM in a vulnerable moment. You were asleep. They booked Nova IVF by morning.",
    gain: "Engageo answers at 11 PM with warmth, not a hold tone. Captures the intent. Books the consultation. You wake up to a confirmed appointment, not a lost patient.",
    metrics: [
      { value: '₹1–5L', label: 'revenue per IVF cycle' },
      { value: '72 hrs', label: 'avg patient decision window' },
      { value: '24/7', label: 'always answered' },
    ],
    ctaSubtext: "Setup takes 4 days. Recovery starts the same night.",
    accent: 'var(--loss-red)',
    visual: 'wave',
  },
];


/* ─── Animated visuals ──────────────────────────────────────── */
function PulseVisual({ active }) {
  return (
    <div className="relative w-20 h-20 flex items-center justify-center">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute rounded-full border border-brand/30"
          style={{
            width: `${32 + i * 22}px`,
            height: `${32 + i * 22}px`,
            opacity: active ? 0.65 - i * 0.18 : 0.08,
            animation: active ? `pulse-dot ${1.4 + i * 0.35}s ease-in-out infinite` : 'none',
            transition: 'opacity 0.5s',
          }}
        />
      ))}
      <div
        className="w-4 h-4 rounded-full bg-[var(--green)]"
        style={{ boxShadow: active ? '0 0 18px var(--green)' : 'none', transition: 'box-shadow 0.5s' }}
      />
    </div>
  );
}

function WaveVisual({ active }) {
  const heights = [5, 9, 13, 17, 21, 17, 13, 9, 5, 9, 13, 17, 21];
  return (
    <div className="w-20 h-14 flex items-end gap-px">
      {heights.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm"
          style={{
            height: active ? `${h * 0.85}px` : '3px',
            background: `rgba(26,122,74,${active ? 0.45 + (h / 21) * 0.55 : 0.12})`,
            transition: `height 0.5s cubic-bezier(0.25,1,0.5,1) ${i * 35}ms, background 0.4s`,
          }}
        />
      ))}
    </div>
  );
}

function BarsVisual({ active }) {
  const heights = [40, 60, 80, 55, 90, 70, 50];
  return (
    <div className="w-20 h-14 flex items-end gap-1">
      {heights.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-[2px]"
          style={{
            height: active ? `${h * 0.6}px` : '3px',
            background: `rgba(5,150,105,${0.38 + (h / 90) * 0.62})`,
            transition: `height 0.52s cubic-bezier(0.25,1,0.5,1) ${i * 55}ms`,
          }}
        />
      ))}
    </div>
  );
}

function VisualFor({ type, active }) {
  if (type === 'pulse') return <PulseVisual active={active} />;
  if (type === 'wave') return <WaveVisual active={active} />;
  if (type === 'bars') return <BarsVisual active={active} />;
  return null;
}

/* ─── Mobile detail content ─────────────────────────────────── */
function MobileDetail({ a, openModal }) {
  return (
    <div className="flex flex-col gap-5 pt-2">
      <p className="text-sm text-subtle leading-relaxed">{a.summary}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="p-4 border-2 border-red-200" style={{ background: 'var(--loss-tint)' }}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
            <span className="font-mono text-[9px] text-red-500 uppercase tracking-widest font-bold">The Reality</span>
          </div>
          <p className="text-[13px] text-charcoal leading-relaxed">{a.pain}</p>
        </div>
        <div className="p-4 border border-[var(--ink-faint)] bg-[var(--green)]/5 rounded-2xl">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--green)] pulse-dot shrink-0" />
            <span className="font-mono text-[9px] text-brand uppercase tracking-widest font-bold">What Changes</span>
          </div>
          <p className="text-[13px] text-charcoal leading-relaxed">{a.gain}</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5">
        <div className="flex gap-6 flex-wrap">
          {a.metrics.map((m) => (
            <div key={m.label} className="flex flex-col gap-1">
              <span className="font-sans text-xl font-bold text-obsidian tracking-tighter leading-none">{m.value}</span>
              <span className="font-mono text-[9px] text-subtle uppercase tracking-widest">{m.label}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col shrink-0 w-full sm:w-auto mt-4 sm:mt-0">
          <button
            onClick={openModal}
            className="group bg-[var(--green)] text-[var(--parchment)] text-[13px] font-bold px-8 py-4 border border-[var(--ink-faint)] rounded-full shadow-lg flex items-center justify-center gap-2 hover:scale-[1.03] transition-all duration-200 active:scale-[0.98] whitespace-nowrap w-full sm:w-auto"
          >
            <span>Get Free Audit</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="text-center mt-2" style={{ color: 'var(--clinic-stone)', fontSize: '12px' }}>
            {a.ctaSubtext}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Section ───────────────────────────────────────────── */
export default function WhoItsFor() {
  const { openModal } = useModal();
  const [revealed, setRevealed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(null);
  const sectionRef = useRef(null);
  const fadeTimer = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.07 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => () => { if (fadeTimer.current) clearTimeout(fadeTimer.current); }, []);

  const toggleMobile = useCallback((i) => {
    setMobileOpen((prev) => (prev === i ? null : i));
  }, []);
  return (
    <section
      ref={sectionRef}
      id="who"
      className="py-16 md:py-24 px-4 md:px-8 lg:px-16 xl:px-20 relative z-10 bg-[var(--parchment)]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto">

        {/* ── Section Header ── */}
        <div
          className="mb-10 md:mb-14 max-w-xl"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div className="section-label mb-5 text-[var(--ink-muted)]">Honest Fit</div>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] tracking-tighter mb-5 leading-[1.05]">
            Three clinics.
            <span className="italic block mt-1 text-[var(--green)]">That's the whole list.</span>
          </h2>
          <p className="text-[var(--ink)] opacity-70 text-base md:text-lg leading-relaxed">
            Engageo works best where the doctor is the decision-maker and every
            missed call has a face attached to it. That narrows the field — intentionally.
          </p>
        </div>

        {/* Disqualifier Strip */}
        <div
          className="flex items-center w-full mb-8"
          style={{ opacity: revealed ? 1 : 0, transition: 'opacity 0.6s ease 0.15s' }}
        >
          <div className="flex-1 h-px" style={{ backgroundColor: 'var(--clinic-silver)' }}></div>
          <p
            className="px-4 text-center"
            style={{ color: 'var(--clinic-stone)', fontSize: '12px' }}
          >
            NOT FOR: General practices under 50 calls/month · Hospital chains · Clinics with full-time call teams · Anyone who wants a chatbot
          </p>
          <div className="flex-1 h-px" style={{ backgroundColor: 'var(--clinic-silver)' }}></div>
        </div>

        <div
          className="hidden lg:grid lg:grid-cols-3 gap-5 xl:gap-6"
          style={{ opacity: revealed ? 1 : 0, transition: 'opacity 0.6s ease 0.15s' }}
        >
          {audiences.map((a, i) => (
            <div
              key={a.id}
              className="flex flex-col bg-[var(--surface)] border border-[var(--ink-faint)] overflow-hidden rounded-[2rem] shadow-sm"
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.55s ease ${0.08 + i * 0.1}s, transform 0.55s ease ${0.08 + i * 0.1}s`,
              }}
            >
              {/* Top accent bar */}
              <div className="h-[3px] w-full" style={{ background: a.accent }} />

              <div className="p-5 flex flex-col gap-4 flex-1">
                {/* Header */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[10px] font-bold text-muted tabular-nums">{a.index}</span>
                    <span className={`font-mono text-[9px] font-bold uppercase tracking-wider px-1.5 py-px ${a.badgeColor} ${a.badgeBorder}`}>
                      {a.tagBadge}
                    </span>
                  </div>
                  <h3 className="font-sans text-base font-bold text-obsidian tracking-tight mb-1 leading-snug">
                    {a.title}
                  </h3>
                  <p className="font-sans text-sm font-medium text-charcoal leading-snug">
                    {a.tagline}
                  </p>
                </div>

                <p className="text-[13px] text-subtle leading-relaxed border-t border-border pt-3">
                  {a.summary}
                </p>

                {/* Reality / What Changes */}
                <div className="flex flex-col gap-2">
                  <div className="px-3 py-2.5 border border-red-200" style={{ background: 'var(--loss-tint)' }}>
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="w-1 h-1 rounded-full bg-red-400 shrink-0" />
                      <span className="font-mono text-[8px] text-red-500 uppercase tracking-widest font-bold">The Reality</span>
                    </div>
                    <p className="text-xs text-charcoal leading-relaxed">{a.pain}</p>
                  </div>
                  <div className="px-3 py-2.5 border border-brand/20 bg-brand/[0.03]">
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="w-1 h-1 rounded-full bg-brand shrink-0" />
                      <span className="font-mono text-[8px] text-brand uppercase tracking-widest font-bold">What Changes</span>
                    </div>
                    <p className="text-xs text-charcoal leading-relaxed">{a.gain}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 border-t border-border pt-3">
                  {a.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col gap-0.5">
                      <span className="font-sans text-lg font-bold text-obsidian tracking-tighter leading-none">{m.value}</span>
                      <span className="font-mono text-[8px] text-muted uppercase tracking-wide leading-snug">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA — pushed to bottom */}
                <div className="mt-auto pt-2">
                  <button
                    onClick={openModal}
                    className="group w-full bg-[var(--green)] text-[var(--parchment)] text-[12px] font-bold py-3.5 border border-[var(--ink-faint)] rounded-full flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform duration-150 active:scale-[0.98]"
                    style={{ boxShadow: '3px 3px 0px 0px var(--command-black)' }}
                  >
                    <span>Get Free Audit</span>
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div className="text-center mt-2" style={{ color: 'var(--clinic-stone)', fontSize: '12px' }}>
                    {a.ctaSubtext}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Not for you — full-width below grid */}
          <div
            className="col-span-3 bg-white border-2 border-border px-6 py-4 flex items-center justify-between gap-6"
            style={{ opacity: revealed ? 1 : 0, transition: 'opacity 0.6s ease 0.5s' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 flex items-center justify-center text-muted text-xs font-bold shrink-0">✕</div>
              <p className="font-sans text-[13px] text-subtle leading-relaxed">
                <span className="text-obsidian font-semibold">Not for you if:</span>{' '}
                You run a general practice with under 50 calls/month, a hospital with a procurement committee, or a clinic that already has a full-time call team. Engageo works where the doctor is the decision-maker and every missed call is a lost procedure — not a lost number in a CRM.
              </p>
            </div>
            <button onClick={openModal} className="font-sans text-xs font-semibold text-brand hover:text-obsidian transition-colors shrink-0 whitespace-nowrap link-underline pb-0.5">
              Check if you qualify →
            </button>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            MOBILE — accordion, lg hidden
        ══════════════════════════════════════════════════════ */}
        <div
          className="flex flex-col gap-3 lg:hidden"
          style={{ opacity: revealed ? 1 : 0, transition: 'opacity 0.6s ease 0.15s' }}
        >
          {audiences.map((a, i) => {
            const isOpen = mobileOpen === i;
            return (
              <div
                key={a.id}
                className={`border-2 bg-white overflow-hidden transition-all duration-300 ${isOpen ? 'border-obsidian retro-shadow-amber' : 'border-border hover:border-obsidian/30'}`}
                style={{
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 0.55s ease ${0.08 + i * 0.08}s, transform 0.55s ease ${0.08 + i * 0.08}s, border-color 0.25s`,
                }}
              >
                <button
                  onClick={() => toggleMobile(i)}
                  className="w-full text-left p-4 flex items-center gap-3"
                  aria-expanded={isOpen}
                >
                  <span className={`font-mono text-xs font-bold tabular-nums shrink-0 ${isOpen ? 'text-brand' : 'text-muted'}`}>{a.index}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <span className={`font-sans text-sm font-semibold tracking-tight ${isOpen ? 'text-obsidian' : 'text-charcoal'}`}>{a.title}</span>
                      <span className={`font-mono text-[9px] font-bold uppercase tracking-wider px-1.5 py-px ${a.badgeColor} ${a.badgeBorder}`}>{a.tagBadge}</span>
                    </div>
                    {!isOpen && <p className="text-[11px] text-subtle leading-tight line-clamp-1">{a.tagline}</p>}
                  </div>
                  <svg
                    className={`w-4 h-4 text-muted shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand' : ''}`}
                    fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div style={{ maxHeight: isOpen ? '900px' : '0', overflow: 'hidden', transition: 'max-height 0.45s cubic-bezier(0.25,1,0.5,1)' }}>
                  <div className="px-4 pb-6 border-t border-border">
                    <MobileDetail a={a} openModal={openModal} />
                  </div>
                </div>
              </div>
            );
          })}

          {/* Mobile: Not for you bar */}
          <div
            className="bg-white border-2 border-obsidian retro-shadow px-5 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{ opacity: revealed ? 1 : 0, transition: 'opacity 0.6s ease 0.5s' }}
          >
            <div className="flex items-start sm:items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-canvas border border-black/8 flex items-center justify-center text-subtle text-sm shrink-0">✕</div>
              <p className="font-sans text-sm text-subtle leading-relaxed">
                <span className="text-obsidian font-semibold">Not for you if:</span>{' '}
                You run a general practice with under 50 calls/month, a hospital with a procurement committee, or a clinic that already has a full-time call team. Engageo works where the doctor is the decision-maker and every missed call is a lost procedure — not a lost number in a CRM.
              </p>
            </div>
            <button
              onClick={openModal}
              className="font-sans text-xs font-semibold text-brand hover:text-obsidian transition-colors shrink-0 link-underline pb-0.5 whitespace-nowrap"
            >
              Check if you qualify →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
