import React, { useEffect, useRef, useState } from 'react';
import { CircleDashed, Check } from 'lucide-react';

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
      className="relative w-full z-10"
      style={{ height: '320vh', background: '#1E1A16' }}
    >
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
        {/* Subtle dot grid on dark bg */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />
        {/* Soft radial glow centre */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand/5 rounded-full blur-3xl pointer-events-none" />

        {/* ── Scroll hint — visible only before any scroll ── */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-6 pointer-events-none z-20"
          style={{ opacity: progress < 0.02 ? 1 : 0, transition: 'opacity 0.5s' }}
        >
          <div className="flex flex-col items-center gap-3">
            <span className="section-label" style={{ color: '#3D5AFE' }}>Live Demo</span>
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-white tracking-tight text-center px-6">
              Watch a Real Recovery in 8 Seconds
            </h2>
            <p className="text-white/40 text-sm text-center max-w-xs">
              Scroll slowly to see exactly what happens after a missed call.
            </p>
          </div>
          <div className="flex flex-col items-center gap-1 mt-2">
            <span className="font-mono text-[9px] uppercase tracking-widest text-white/30">Scroll down</span>
            <div style={{ animation: 'bounceArrow 1.4s ease-in-out infinite' }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 4v12M5 11l5 5 5-5" stroke="#3D5AFE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <div
          className="max-w-2xl w-full px-6 md:px-12 relative z-10 flex flex-col items-center text-center gap-10"
          style={{ opacity: progress > 0.01 ? 1 : 0, transition: 'opacity 0.7s' }}
        >
          {/* Section header */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-3">What Happens in 8 Seconds</p>
            <h2 className="font-sans text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2">
              From revenue lost to revenue secured — automatically.
            </h2>
          </div>

          {/* Active step — re-mounts on step change for animation */}
          <div
            key={activeIdx}
            className="flex flex-col items-center gap-5 w-full lifecycle-step-anim"
          >
            <span className="font-mono text-[10px] text-brand uppercase tracking-widest bg-brand/10 px-3 py-1 border border-brand/20">
              {activeStep.num}
            </span>
            <h3 className="font-sans text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              {activeStep.title}
            </h3>
            <p className="text-white/50 text-sm max-w-md leading-relaxed">
              {activeStep.desc}
            </p>

            {/* Visual widget */}
            <div className="mt-4 w-full max-w-md">
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
                  width: i === activeIdx ? '28px' : '6px',
                  height: '6px',
                  backgroundColor: i <= activeIdx ? '#3D5AFE' : 'rgba(255,255,255,0.15)',
                }}
              />
            ))}
          </div>

          {activeIdx < steps.length - 1 && (
            <p className="text-[10px] text-white/20 uppercase tracking-widest animate-pulse">
              Scroll to continue
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function StepVisual({ type, label, text, metric }) {
  const cardBase = {
    background: '#FFFFFF',
    border: '2px solid #1E1A16',
    boxShadow: '4px 4px 0px 0px rgba(61,90,254,0.35)',
  };
  if (type === 'card') {
    return (
      <div className="p-5 text-left w-full" style={cardBase}>
        <div className="flex items-start gap-3">
          <CircleDashed size={15} className="text-brand mt-0.5 shrink-0" />
          <span className="text-sm font-medium text-obsidian leading-relaxed">{text}</span>
        </div>
      </div>
    );
  }
  if (type === 'text') {
    return (
      <div className="p-5 text-left w-full" style={cardBase}>
        {label && <span className="text-[10px] text-brand uppercase tracking-wider block mb-2 font-bold">{label}</span>}
        <span className="text-sm font-medium text-obsidian">{text}</span>
      </div>
    );
  }
  if (type === 'metric') {
    return (
      <div className="p-5 inline-flex items-center gap-5" style={cardBase}>
        <div className="w-12 h-12 bg-brand/10 flex items-center justify-center border border-brand/20">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3D5AFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
        </div>
        <div className="text-left">
          <div className="text-[10px] text-subtle uppercase tracking-wider mb-1">{label}</div>
          <div className="text-3xl font-bold text-obsidian tracking-tight">{metric}</div>
        </div>
      </div>
    );
  }
  if (type === 'dots') {
    return (
      <div className="p-5 text-left w-full" style={cardBase}>
        <div className="flex gap-2 mb-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/30 border border-white/20" />
        </div>
        <span className="text-sm font-medium text-obsidian leading-relaxed">{text}</span>
      </div>
    );
  }
  if (type === 'approved') {
    return (
      <div className="flex flex-col items-center gap-3">
        <span
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white text-sm font-bold border-2 border-obsidian"
          style={{ boxShadow: '4px 4px 0px 0px #3D5AFE' }}
        >
          <span>{text}</span>
          <Check size={14} strokeWidth={3} />
        </span>
        {label && <span className="text-[11px] text-white/40 font-mono uppercase tracking-widest">{label}</span>}
      </div>
    );
  }
  if (type === 'hash') {
    return (
      <div className="p-5 text-left w-full" style={cardBase}>
        <span className="font-mono text-sm text-obsidian">{text}</span>
      </div>
    );
  }
  return null;
}
