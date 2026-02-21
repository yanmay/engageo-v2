import React, { useEffect, useRef, useState } from 'react';
import { CircleDashed, Check } from 'lucide-react';

export default function DecisionLifecycle() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewH = window.innerHeight;
      const travelDistance = rect.height - viewH;
      const scrolled = -rect.top;
      let p = scrolled / travelDistance;
      p = Math.max(0, Math.min(1, p));
      setProgress(p);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      threshold: 0.05,
      num: "01 Detection",
      title: "The Silent Loss Begins",
      desc: "A patient called. Your receptionist was busy. That patient is now searching for another clinic.",
      type: "card",
      text: "Revenue alert: +91 9876XXXXXX dropped at 14:32. Estimated value: ₹22,000. Recovery initiated.",
    },
    {
      threshold: 0.22,
      num: "02 Routing",
      title: "Intent Identified",
      desc: "We know why they called. Specialty matched. Priority assigned. No human needed.",
      type: "text",
      label: "Action",
      text: "High-intent implant patient. Callback queued. Est. case value: ₹85,000.",
    },
    {
      threshold: 0.39,
      num: "03 Engagement",
      title: "AI Calls Them Back First",
      desc: "Not a message. A voice call — in 8 seconds. Before they open Google and find your competitor.",
      type: "metric",
      label: "Response Time",
      metric: "< 8 sec",
    },
    {
      threshold: 0.56,
      num: "04 Qualification",
      title: "The Patient Doesn't Know It's AI",
      desc: "Natural voice. Real questions. Specialty-specific answers. Your clinic's name, your doctor's schedule, your slot.",
      type: "dots",
      text: "Patient confirmed: Saturday 11 AM. Dr. Mehta. Implant consultation. Deposit intent: Yes.",
    },
    {
      threshold: 0.73,
      num: "05 Conversion",
      title: "The Slot Is Filled",
      desc: "Google Calendar updated. Patient receives WhatsApp confirmation. Receptionist notified. You just recovered ₹22,000 without lifting a finger.",
      type: "approved",
      text: "Slot Confirmed",
      label: "Booking locked. No manual action required.",
    },
    {
      threshold: 0.88,
      num: "06 Archive",
      title: "Your Weekly Revenue Report",
      desc: "Every recovery logged. Every rupee tracked. Friday report lands in your WhatsApp.",
      type: "hash",
      text: "This week: 11 recoveries. ₹2,64,000 secured. 3 no-shows prevented.",
    },
  ];

  // Determine which step is currently active
  const activeIdx = steps.reduce((acc, step, idx) =>
    progress >= step.threshold ? idx : acc, 0);
  const activeStep = steps[activeIdx];

  return (
    <section
      ref={sectionRef}
      id="decision-lifecycle"
      className="relative w-full bg-canvas border-b border-border/60 z-10"
      style={{ height: '500vh' }}
    >
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        {/* ── Scroll hint — visible only before any scroll ── */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-5 pointer-events-none z-20"
          style={{ opacity: progress < 0.02 ? 1 : 0, transition: 'opacity 0.5s' }}
        >
          <div className="flex flex-col items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand font-semibold">Live Demo</span>
            <h2 className="font-sans text-2xl md:text-3xl font-bold text-obsidian tracking-tight text-center px-6">
              Watch a Real Recovery in 8 Seconds
            </h2>
            <p className="text-subtle text-sm text-center max-w-xs">
              Scroll slowly to see exactly what happens after a missed call.
            </p>
          </div>
          {/* Animated scroll arrow */}
          <div className="flex flex-col items-center gap-1 mt-2">
            <span className="font-mono text-[9px] uppercase tracking-widest text-muted">Scroll down</span>
            <div style={{ animation: 'bounceArrow 1.4s ease-in-out infinite' }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 4v12M5 11l5 5 5-5" stroke="#3D5AFE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <div
          className="max-w-xl w-full px-6 md:px-12 relative z-10 flex flex-col items-center text-center gap-10"
          style={{ opacity: progress > 0.01 ? 1 : 0, transition: 'opacity 0.7s' }}
        >
          {/* Section header */}
          <div>
            <h2 className="font-sans text-2xl md:text-3xl font-semibold text-obsidian tracking-tight mb-2">
              What Happens in 8 Seconds
            </h2>
            <p className="text-subtle text-sm">
              From revenue lost to revenue secured — automatically.
            </p>
          </div>

          {/* Active step — re-mounts on step change for animation */}
          <div
            key={activeIdx}
            className="flex flex-col items-center gap-5 w-full lifecycle-step-anim"
          >
            <span className="font-mono text-[10px] text-brand uppercase tracking-widest">
              {activeStep.num}
            </span>
            <h3 className="font-sans text-3xl md:text-4xl font-semibold text-obsidian tracking-tight leading-tight">
              {activeStep.title}
            </h3>
            <p className="text-subtle text-sm max-w-sm leading-relaxed">
              {activeStep.desc}
            </p>

            {/* Visual widget */}
            <div className="mt-2">
              <StepVisual
                type={activeStep.type}
                label={activeStep.label}
                text={activeStep.text}
                metric={activeStep.metric}
              />
            </div>
          </div>

          {/* Progress dots */}
          <div className="flex items-center gap-2">
            {steps.map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-400"
                style={{
                  width: i === activeIdx ? '24px' : '6px',
                  height: '6px',
                  backgroundColor: i <= activeIdx ? '#3D5AFE' : '#E5E5E5',
                }}
              />
            ))}
          </div>

          {/* Scroll nudge */}
          {activeIdx < steps.length - 1 && (
            <p className="text-[10px] text-subtle/50 uppercase tracking-widest animate-pulse">
              Scroll to continue
            </p>
          )}
        </div>
      </div>

      <style>{`
        .lifecycle-step-anim {
          animation: lifecycleFadeUp 0.45s cubic-bezier(0.25, 1, 0.5, 1) both;
        }
        @keyframes lifecycleFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

function StepVisual({ type, label, text, metric }) {
  if (type === 'card') {
    return (
      <div className="bg-white border border-border p-4 rounded-lg shadow-sm text-left max-w-sm w-full">
        <div className="flex items-start gap-2">
          <CircleDashed size={14} className="text-brand mt-0.5 shrink-0" />
          <span className="text-xs font-medium text-obsidian leading-relaxed">{text}</span>
        </div>
      </div>
    );
  }
  if (type === 'text') {
    return (
      <div className="bg-white border border-border p-4 rounded-lg shadow-sm text-left max-w-sm w-full">
        {label && <span className="text-[10px] text-brand uppercase tracking-wider block mb-1 font-semibold">{label}</span>}
        <span className="text-xs font-medium text-obsidian">{text}</span>
      </div>
    );
  }
  if (type === 'metric') {
    return (
      <div className="bg-white border border-border p-4 rounded-lg shadow-sm inline-flex items-center gap-4">
        <div className="w-10 h-10 bg-brand/10 rounded flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3D5AFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
        </div>
        <div className="text-left">
          <div className="text-[10px] text-subtle uppercase tracking-wider">{label}</div>
          <div className="text-2xl font-bold text-obsidian">{metric}</div>
        </div>
      </div>
    );
  }
  if (type === 'dots') {
    return (
      <div className="bg-white border border-border p-4 rounded-lg shadow-sm text-left max-w-sm w-full">
        <div className="flex gap-1.5 mb-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <div className="w-2 h-2 rounded-full bg-border" />
        </div>
        <span className="text-xs font-medium text-obsidian leading-relaxed">{text}</span>
      </div>
    );
  }
  if (type === 'approved') {
    return (
      <div className="flex flex-col items-center gap-2">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand text-white text-sm font-semibold shadow-lg shadow-brand/25">
          <span>{text}</span>
          <Check size={14} strokeWidth={3} />
        </span>
        {label && <span className="text-[11px] text-subtle">{label}</span>}
      </div>
    );
  }
  if (type === 'hash') {
    return (
      <div className="bg-white border border-border p-4 rounded-lg shadow-sm text-left max-w-sm w-full">
        <span className="font-mono text-xs text-obsidian">{text}</span>
      </div>
    );
  }
  return null;
}
