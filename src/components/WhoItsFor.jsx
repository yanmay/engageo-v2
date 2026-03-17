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
    badgeColor: 'bg-[var(--signal-green)]/10 text-[var(--signal-green)]',
    badgeBorder: 'border-l-2 border-[var(--signal-green)]',
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
    accent: 'var(--recovery-blue)',
    visual: 'pulse',
  },
  {
    id: 'dental-derm',
    index: '02',
    title: 'Dental & Dermatology Clinics',
    tagBadge: 'Best Fit',
    badgeColor: 'bg-[var(--recovery-blue)]/10 text-[var(--recovery-blue)]',
    badgeBorder: 'border-l-2 border-[var(--recovery-blue)]',
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
    accent: 'var(--recovery-blue)',
    visual: 'bars',
  },
  {
    id: 'fertility',
    index: '03',
    title: 'Fertility & IVF Clinics',
    tagBadge: 'Month 2+',
    badgeColor: 'bg-[var(--recovery-blue)]/8 text-[var(--recovery-blue)]/80',
    badgeBorder: 'border-l-2 border-[var(--recovery-blue)]/50',
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
    accent: 'var(--recovery-blue)',
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
            background: `rgba(37,99,235,${active ? 0.45 + (h / 21) * 0.55 : 0.12})`,
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
    <div className="flex flex-col gap-6 pt-4">
      <p className="text-sm text-white/50 leading-relaxed font-medium">{a.summary}</p>
      <div className="grid grid-cols-1 gap-4">
        <div className="p-5 bg-red-500/5 border border-red-500/10 rounded-2xl">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500/40 shrink-0" />
            <span className="font-data text-[9px] text-red-500/60 uppercase tracking-widest font-bold">The Reality</span>
          </div>
          <p className="text-[13px] text-white/40 leading-relaxed">{a.pain}</p>
        </div>
        <div className="p-5 bg-[var(--recovery-blue)]/5 border border-[var(--recovery-blue)]/10 rounded-2xl">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--recovery-blue)] shrink-0" />
            <span className="font-data text-[9px] text-[var(--recovery-blue)] uppercase tracking-widest font-bold">What Changes</span>
          </div>
          <p className="text-[13px] text-white/80 leading-relaxed">{a.gain}</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5">
        <div className="flex gap-8 flex-wrap">
          {a.metrics.map((m) => (
            <div key={m.label} className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-white tracking-tighter leading-none">{m.value}</span>
              <span className="font-data text-[9px] text-white/20 uppercase tracking-widest">{m.label}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col shrink-0 w-full sm:w-auto mt-4 sm:mt-0">
          <button
            onClick={openModal}
            className="group bg-[var(--recovery-blue)] text-white text-[13px] font-bold px-8 py-4 border border-white/10 rounded-full shadow-2xl shadow-blue-500/20 flex items-center justify-center gap-2 hover:scale-[1.03] transition-all duration-200 active:scale-[0.98] whitespace-nowrap w-full sm:w-auto"
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
      className="py-16 md:py-32 px-4 md:px-8 lg:px-16 xl:px-20 relative z-10 bg-[var(--command-black)]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">

        {/* ── Section Header ── */}
        <div
          className="mb-10 md:mb-20 max-w-2xl"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div className="section-label mb-5 text-[var(--recovery-blue)]/60 font-data tracking-[0.4em]">Honest Fit</div>
          <h2 className="font-sans text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-[1.05]">
            Three clinics. <br />
            <span className="italic block mt-2 text-[var(--recovery-blue)] font-drama lowercase">That's the whole list.</span>
          </h2>
          <p className="text-white/60 text-lg md:text-2xl leading-relaxed max-w-xl font-medium">
            Engageo works best where the doctor is the decision-maker and every
            missed call has a face attached to it. That narrows the field — intentionally.
          </p>
        </div>

        {/* Disqualifier Strip */}
        <div
          className="flex items-center w-full mb-16 opacity-30"
          style={{ opacity: revealed ? 0.3 : 0, transition: 'opacity 0.6s ease 0.15s' }}
        >
          <div className="flex-1 h-[1px] bg-white/10"></div>
          <p
            className="px-8 text-center font-data text-[10px] uppercase tracking-widest text-white/40"
          >
            NOT FOR: General practices under 50 calls/month · Hospital chains · Clinics with full-time call teams · Anyone who wants a chatbot
          </p>
          <div className="flex-1 h-[1px] bg-white/10"></div>
        </div>

        <div
          className="hidden lg:grid lg:grid-cols-3 gap-5 xl:gap-6"
          style={{ opacity: revealed ? 1 : 0, transition: 'opacity 0.6s ease 0.15s' }}
        >
            {audiences.map((a, i) => (
            <div
              key={a.id}
              className="flex flex-col bg-white/[0.03] border border-white/10 overflow-hidden rounded-premium shadow-2xl group hover:border-[var(--recovery-blue)]/30 transition-colors"
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.55s ease ${0.08 + i * 0.1}s, transform 0.55s ease ${0.08 + i * 0.1}s`,
              }}
            >
              {/* Top accent bar */}
              <div className="h-[2px] w-full" style={{ background: a.accent }} />

              <div className="p-8 flex flex-col gap-6 flex-1">
                {/* Header */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-data text-[10px] font-bold text-white/20 tabular-nums tracking-widest">{a.index}</span>
                    <span className={`font-data text-[8px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 rounded-sm ${a.badgeColor} ${a.badgeBorder}`}>
                      {a.tagBadge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-2 leading-tight">
                    {a.title}
                  </h3>
                  <p className="text-sm font-medium text-white/60 leading-relaxed mb-4">
                    {a.tagline}
                  </p>
                </div>

                <p className="text-xs text-white/40 leading-relaxed border-t border-white/5 pt-6">
                  {a.summary}
                </p>

                {/* Reality / What Changes */}
                <div className="flex flex-col gap-3">
                  <div className="px-4 py-4 bg-red-500/5 border border-red-500/10 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500/40 shrink-0" />
                      <span className="font-data text-[8px] text-red-500/60 uppercase tracking-widest font-bold">The Reality</span>
                    </div>
                    <p className="text-[11px] text-white/40 leading-relaxed">{a.pain}</p>
                  </div>
                  <div className="px-4 py-4 bg-[var(--recovery-blue)]/5 border border-[var(--recovery-blue)]/10 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--recovery-blue)] shrink-0 shadow-[0_0_8px_var(--recovery-blue)]" />
                      <span className="font-data text-[8px] text-[var(--recovery-blue)] uppercase tracking-widest font-bold">What Changes</span>
                    </div>
                    <p className="text-[11px] text-white/80 leading-relaxed">{a.gain}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-6 border-t border-white/5 pt-6">
                  {a.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col gap-1">
                      <span className="text-xl font-bold text-white tracking-tighter leading-none">{m.value}</span>
                      <span className="font-data text-[8px] text-white/20 uppercase tracking-widest leading-snug">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA — pushed to bottom */}
                <div className="mt-auto pt-4">
                  <button
                    onClick={openModal}
                    className="group w-full bg-[var(--recovery-blue)] text-white text-[11px] font-bold py-4 rounded-full flex items-center justify-center gap-2 hover:bg-white hover:text-[var(--command-black)] transition-all duration-300 shadow-lg shadow-blue-500/10"
                  >
                    <span>Get Free Audit</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div className="text-center mt-3 font-data text-[9px] uppercase tracking-widest text-white/20">
                    {a.ctaSubtext}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Not for you — full-width below grid */}
          <div
            className="col-span-3 bg-white/[0.02] border border-white/5 px-10 py-6 flex items-center justify-between gap-10 rounded-2xl"
            style={{ opacity: revealed ? 1 : 0, transition: 'opacity 0.6s ease 0.5s' }}
          >
            <div className="flex items-center gap-6">
              <div className="w-8 h-8 flex items-center justify-center text-white/20 text-xs font-bold shrink-0 border border-white/10 rounded-full">✕</div>
              <p className="text-[13px] text-white/40 leading-relaxed font-data uppercase tracking-widest">
                <span className="text-white font-bold italic">Not for you if:</span>{' '}
                Practice &lt; 50 calls/mo · Hospital Committees · full-time teams · chatbot fans.
              </p>
            </div>
            <button onClick={openModal} className="text-[11px] font-bold text-[var(--recovery-blue)] hover:text-white transition-colors shrink-0 whitespace-nowrap uppercase tracking-[0.2em] border-b border-transparent hover:border-white/20 pb-1">
              Check Eligibility →
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
                className={`border bg-white/[0.03] overflow-hidden transition-all duration-300 ${isOpen ? 'border-[var(--recovery-blue)]/30' : 'border-white/5'}`}
                style={{
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 0.55s ease ${0.08 + i * 0.08}s, transform 0.55s ease ${0.08 + i * 0.08}s, border-color 0.25s`,
                }}
              >
                <button
                  onClick={() => toggleMobile(i)}
                  className="w-full text-left p-6 flex items-center gap-4"
                  aria-expanded={isOpen}
                >
                  <span className={`font-data text-xs font-bold tabular-nums shrink-0 ${isOpen ? 'text-[var(--recovery-blue)]' : 'text-white/20'}`}>{a.index}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className={`text-base font-bold tracking-tight ${isOpen ? 'text-white' : 'text-white/80'}`}>{a.title}</span>
                      <span className={`font-data text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm ${a.badgeColor} ${a.badgeBorder}`}>{a.tagBadge}</span>
                    </div>
                    {!isOpen && <p className="text-xs text-white/40 leading-relaxed line-clamp-1">{a.tagline}</p>}
                  </div>
                  <svg
                    className={`w-5 h-5 text-white/20 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[var(--recovery-blue)]' : ''}`}
                    fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div style={{ maxHeight: isOpen ? '900px' : '0', overflow: 'hidden', transition: 'max-height 0.45s cubic-bezier(0.25,1,0.5,1)' }}>
                  <div className="px-6 pb-8 border-t border-white/5">
                    <MobileDetail a={a} openModal={openModal} />
                  </div>
                </div>
              </div>
            );
          })}

          {/* Mobile: Not for you bar */}
          <div
            className="bg-white/[0.03] border border-white/10 px-6 py-8 flex flex-col items-center text-center gap-6 rounded-3xl"
            style={{ opacity: revealed ? 1 : 0, transition: 'opacity 0.6s ease 0.5s' }}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/20 text-sm shrink-0">✕</div>
              <p className="text-sm text-white/40 leading-relaxed font-data uppercase tracking-widest">
                <span className="text-white font-bold">Not for you if:</span><br />
                General Practice &lt; 50 calls/mo · Hospital chains · Clinics with call teams.
              </p>
            </div>
            <button
              onClick={openModal}
              className="w-full py-4 text-[11px] font-bold text-white bg-[var(--recovery-blue)] rounded-full uppercase tracking-widest shadow-lg shadow-blue-500/10"
            >
              Check Eligibility →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
