import React, { useEffect, useRef, useState } from 'react';
import { CircleDashed, Check } from 'lucide-react';

const STEPS = [
  {
    num: "01",
    label: "Detection",
    title: "The Silent Loss Begins",
    desc: "A patient called. Your receptionist was busy. That patient is now searching for another clinic.",
    type: "card",
    text: "Revenue alert: +91 9876XXXXXX dropped at 14:32. Estimated value: ₹22,000. Recovery initiated.",
  },
  {
    num: "02",
    label: "Routing",
    title: "Intent Identified",
    desc: "We know why they called. Specialty matched. Priority assigned. No human needed.",
    type: "text",
    cardLabel: "Action",
    text: "High-intent implant patient. AI callback queued. WhatsApp pre-message drafted. Est. case value: ₹85,000.",
  },
  {
    num: "03",
    label: "Engagement",
    title: "AI Calls Them Back First",
    desc: "Not a message. Not a form. A real voice call in 8 seconds — before they open Google and find your competitor.",
    type: "metric",
    cardLabel: "Response Time",
    metric: "< 8 sec",
  },
  {
    num: "04",
    label: "Qualification",
    title: "The Patient Doesn't Know It's AI",
    desc: "Natural voice. Real questions. Specialty-specific answers. Your clinic's name, your doctor's schedule, your slot.",
    type: "dots",
    text: "Patient confirmed: Saturday 11 AM. Dr. Mehta. Implant consultation. Deposit intent: Yes.",
  },
  {
    num: "05",
    label: "Conversion",
    title: "The Slot Is Filled",
    desc: "Slot locked to your clinical calendar. Patient gets a WhatsApp confirmation in 90 seconds — with their doctor's name, time, and clinic address. A reminder fires 24 hours before. No-shows drop. You just recovered ₹22,000 without lifting a finger.",
    type: "whatsapp",
    text: "Slot Confirmed",
    cardLabel: "Booking locked. No manual action required.",
  },
  {
    num: "06",
    label: "Archive",
    title: "Your Weekly Revenue Report",
    desc: "Every recovery logged. Every rupee tracked. Friday report lands in your WhatsApp.",
    type: "hash",
    text: "This week — Dr. Sharma's Clinic\n11 recoveries. ₹2,64,000 secured.\n3 no-shows prevented by reminder.\nSent via WhatsApp · Every Friday · 9 AM",
  },
];

export default function DecisionLifecycle() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      if (!sectionRef.current) {
        ticking = false;
        return;
      }
      const rect = sectionRef.current.getBoundingClientRect();
      const viewH = window.innerHeight;
      const travelDistance = rect.height - viewH;
      const scrolled = -rect.top;
      let p = scrolled / travelDistance;
      p = Math.max(0, Math.min(1, p));
      setProgress(p);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine which step is currently active based on scroll progress
  const activeIdx = STEPS.reduce((acc, step, idx) => {
    const stepThreshold = idx / STEPS.length;
    return progress >= stepThreshold ? idx : acc;
  }, 0);

  return (
    <section
      ref={sectionRef}
      id="decision-lifecycle"
      className="relative w-full z-10"
      style={{ background: 'var(--command-black)' }}
    >
      {/* ── Section Header ── */}
      <div className="py-16 md:py-24 text-center px-4">
        <span className="section-label" style={{ color: 'var(--signal-green)' }}>Live Demo</span>
        <h2 className="font-sans text-2xl md:text-4xl font-bold text-white tracking-tight mt-4 mb-3 px-4">
          Watch a Real Recovery in 8 Seconds
        </h2>
        <p className="text-white/40 text-sm md:text-base text-center max-w-md mx-auto leading-relaxed">
          From revenue lost to revenue secured — automatically.
        </p>
      </div>

      {/* ── Adaptive Timeline ── */}
      <div className="relative max-w-4xl mx-auto px-4 md:px-8 pb-16 md:pb-32">

        {/* ── Central vertical line ── */}
        {/* Mobile: left-6 | Desktop: centered */}
        <div
          className="absolute top-0 bottom-0 left-6 md:left-1/2 md:-translate-x-1/2 w-px"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        >
          {/* Progress fill */}
          <div
            className="w-full bg-[var(--signal-green)] transition-all duration-300 ease-out origin-top"
            style={{ height: `${progress * 100}%` }}
          />
        </div>

        {/* ── Timeline Steps ── */}
        <div className="space-y-12 md:space-y-24 relative z-10">
          {STEPS.map((step, idx) => {
            const isActive = idx <= activeIdx;
            const isLeft = idx % 2 === 0; // Desktop zig-zag: even = left, odd = right

            return (
              <div
                key={idx}
                className={`
                  relative
                  /* Mobile: all items flow to the right of the left-aligned line */
                  pl-14 md:pl-0
                  /* Desktop: alternating layout */
                  md:flex md:items-start
                  ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}
                `}
                style={{
                  opacity: isActive ? 1 : 0.3,
                  transition: 'opacity 0.5s ease',
                }}
              >
                {/* ── Node dot on the line ── */}
                {/* Mobile: positioned on the left line (left-6 → center at left-[18px]) */}
                {/* Desktop: centered on the md:left-1/2 line */}
                <div
                  className={`
                    absolute
                    left-[14px] md:left-1/2
                    -translate-x-1/2
                    top-0
                    w-10 h-10
                    flex items-center justify-center
                    border-2 transition-all duration-300 z-10
                    ${isActive
                      ? 'bg-[var(--recovery-blue)] border-[var(--recovery-blue)] text-white shadow-[0_0_16px_var(--recovery-blue)]/20'
                      : 'bg-[var(--command-black)] border-white/10 text-white/20'
                    }
                  `}
                >
                  <span className="font-data text-xs font-bold">{step.num}</span>
                </div>

                {/* ── Content card ── */}
                {/* Mobile: full width to the right of the line (already via pl-14) */}
                {/* Desktop: takes up ~45% width on alternating sides */}
                <div
                  className={`
                    w-full
                    md:w-[calc(50%-2.5rem)]
                    ${isLeft ? 'md:mr-auto md:text-right md:pr-6' : 'md:ml-auto md:text-left md:pl-6'}
                    text-left
                  `}
                >
                  {/* Step label */}
                  <span
                    className={`
                      inline-block font-data text-[10px] uppercase tracking-widest mb-2
                      ${isActive ? 'text-[var(--recovery-blue)]' : 'text-white/10'}
                    `}
                  >
                    {step.num} {step.label}
                  </span>

                  {/* Title */}
                  <h3
                    className={`
                      font-sans text-base md:text-xl font-bold tracking-tight mb-2 leading-snug
                      ${isActive ? 'text-white' : 'text-white/30'}
                    `}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`
                      text-sm md:text-base leading-relaxed mb-4
                      ${isActive ? 'text-white/60' : 'text-white/15'}
                    `}
                  >
                    {step.desc}
                  </p>

                  {/* Visual widget — always rendered to prevent layout shift jitter */}
                  <div
                    className={`mt-2 ${isLeft ? 'md:ml-auto' : ''} transition-opacity duration-300`}
                    style={{ opacity: isActive ? 1 : 0 }}
                  >
                    <StepVisual
                      type={step.type}
                      label={step.cardLabel}
                      text={step.text}
                      metric={step.metric}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StepVisual({ type, label, text, metric }) {
  const cardBase = {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '1.5rem',
  };

  if (type === 'card') {
    return (
      <div className="p-4 md:p-5 text-left w-full max-w-sm" style={cardBase}>
        <div className="flex items-start gap-4">
          <CircleDashed size={15} className="text-[var(--recovery-blue)] mt-1 shrink-0" />
          <span className="text-xs md:text-sm font-medium text-white/60 leading-relaxed">{text}</span>
        </div>
      </div>
    );
  }
  if (type === 'text') {
    return (
      <div className="p-4 md:p-5 text-left w-full max-w-sm" style={cardBase}>
        {label && <span className="text-[10px] text-[var(--recovery-blue)] uppercase tracking-[0.2em] block mb-2 font-bold">{label}</span>}
        <span className="text-xs md:text-sm font-medium text-white/80">{text}</span>
      </div>
    );
  }
  if (type === 'metric') {
    return (
      <div className="p-4 md:p-5 inline-flex items-center gap-4 md:gap-5" style={cardBase}>
        <div className="w-10 h-10 md:w-12 md:h-12 bg-[var(--signal-green)]/10 flex items-center justify-center border border-[var(--signal-green)]/20 rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--signal-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
        </div>
        <div className="text-left">
          <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-1 font-bold">{label}</div>
          <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">{metric}</div>
        </div>
      </div>
    );
  }
  if (type === 'dots') {
    return (
      <div className="p-4 md:p-5 text-left w-full max-w-sm" style={cardBase}>
        <div className="flex gap-2 mb-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--signal-green)]Shadow-[0_0_8px_var(--signal-green)]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--signal-green)]Shadow-[0_0_8px_var(--signal-green)]" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
        <span className="text-xs md:text-sm font-medium text-white/60 leading-relaxed">{text}</span>
      </div>
    );
  }
  if (type === 'approved') {
    return (
      <div className="flex flex-col items-start md:items-center gap-3">
        <span
          className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-[var(--signal-green)] text-white text-xs md:text-sm font-bold rounded-full"
          style={{ boxShadow: '0 4px 12px rgba(16,185,129,0.2)' }}
        >
          <span>{text}</span>
          <Check size={14} strokeWidth={3} />
        </span>
        {label && <span className="text-[10px] md:text-[11px] text-white/30 font-data uppercase tracking-widest font-bold">{label}</span>}
      </div>
    );
  }
  if (type === 'whatsapp') {
    return (
      <div className="flex flex-col items-start gap-3 w-full max-w-sm">
        <div className="p-5 text-left w-full bg-white/[0.03] border border-white/10 rounded-2xl">
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/5">
            <div className="w-2 h-2 rounded-full bg-[var(--signal-green)]" />
            <span className="text-[10px] font-data font-bold text-white/40 uppercase tracking-widest">Clinic_Automata_v4.2</span>
          </div>
          <p className="text-[13px] font-medium text-white/60 leading-relaxed whitespace-pre-wrap">
            ✅ Appointment Confirmed!{"\n"}
            Hi Priya, your implant consultation is booked for Saturday, 11 AM.{"\n"}
            📍 Sector 18, Noida{"\n"}
            👨‍⚕️ Dr. Mehta{"\n"}
            Reply CONFIRM or call us to reschedule.
          </p>
        </div>
        {label && <span className="text-[10px] md:text-[11px] text-white/30 font-data uppercase tracking-widest font-bold">{label}</span>}
      </div>
    );
  }
  if (type === 'hash') {
    return (
      <div className="p-4 md:p-5 text-left w-full max-w-sm" style={cardBase}>
        <span className="font-data text-xs md:text-sm text-white/40 whitespace-pre-wrap">{text}</span>
      </div>
    );
  }
  return null;
}
