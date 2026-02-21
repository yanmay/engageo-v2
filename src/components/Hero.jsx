import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, PhoneMissed, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';
import { useModal } from '../context/ModalContext';

/* ─── Live 2-Phase Dashboard ─────────────────────────────────── */
const BLEED_CALLS = [
  { time: '9:12 AM', name: 'Priya S.', procedure: 'Dental Implant', value: 28000 },
  { time: '10:34 AM', name: 'Rahul K.', procedure: 'IVF Consultation', value: 85000 },
  { time: '11:07 AM', name: 'Anjali M.', procedure: 'Laser Correction', value: 22000 },
];

const RECOVERY_CALLS = [
  { time: '12:45 PM', name: 'Vikram D.', procedure: 'Rhinoplasty', value: 120000, secs: 6 },
  { time: '2:18 PM', name: 'Sonal R.', procedure: 'Full Mouth Rehab', value: 65000, secs: 8 },
  { time: '3:44 PM', name: 'Meera T.', procedure: 'IVF Consultation', value: 85000, secs: 7 },
];

// PHASE 1 = bleeding (without Engageo), PHASE 2 = recovery (with Engageo)
function LiveBleedDashboard() {
  const [phase, setPhase] = useState(1); // 1 = bleed, 2 = recover
  const [activating, setActivating] = useState(false);
  // Phase 1 state
  const [missedList, setMissedList] = useState([]);
  const [totalLost, setTotalLost] = useState(0);
  const [incomingBleed, setIncomingBleed] = useState(null);
  // Phase 2 state
  const [recoveredList, setRecoveredList] = useState([]);
  const [totalRecovered, setTotalRecovered] = useState(0);
  const [incomingRecover, setIncomingRecover] = useState(null);

  const stepRef = useRef(0);
  const timerRef = useRef(null);

  const runPhase1 = () => {
    let step = 0;
    const run = () => {
      if (step >= BLEED_CALLS.length) {
        // Phase 1 done → activate Engageo
        setActivating(true);
        timerRef.current = setTimeout(() => {
          setActivating(false);
          setPhase(2);
          setMissedList([]);
          setTotalLost(0);
          setIncomingBleed(null);
          runPhase2();
        }, 2000);
        return;
      }
      const call = BLEED_CALLS[step];
      setIncomingBleed(call);
      timerRef.current = setTimeout(() => {
        setIncomingBleed(null);
        setMissedList(prev => [call, ...prev]);
        setTotalLost(prev => prev + call.value);
        step++;
        timerRef.current = setTimeout(run, 1000);
      }, 1600);
    };
    timerRef.current = setTimeout(run, 800);
  };

  const runPhase2 = () => {
    let step = 0;
    const run = () => {
      if (step >= RECOVERY_CALLS.length) {
        // Phase 2 done → reset back to phase 1
        timerRef.current = setTimeout(() => {
          setPhase(1);
          setRecoveredList([]);
          setTotalRecovered(0);
          setIncomingRecover(null);
          runPhase1();
        }, 2500);
        return;
      }
      const call = RECOVERY_CALLS[step];
      setIncomingRecover(call);
      timerRef.current = setTimeout(() => {
        setIncomingRecover(null);
        setRecoveredList(prev => [call, ...prev]);
        setTotalRecovered(prev => prev + call.value);
        step++;
        timerRef.current = setTimeout(run, 1000);
      }, 1800);
    };
    timerRef.current = setTimeout(run, 600);
  };

  useEffect(() => {
    runPhase1();
    return () => clearTimeout(timerRef.current);
  }, []);

  /* ── Phase 1 UI — Bleed ── */
  if (activating) {
    return (
      <div className="premium-card w-full rounded-2xl overflow-hidden relative flex flex-col items-center justify-center" style={{ minHeight: '380px' }}>
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand via-brand/60 to-transparent" />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center gap-4 px-8 text-center"
        >
          <div className="w-14 h-14 rounded-full bg-brand/10 border border-brand/30 flex items-center justify-center relative">
            <div className="absolute inset-0 rounded-full border border-brand/40 animate-ping" />
            <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p className="font-mono text-[10px] text-brand uppercase tracking-widest mb-1">Engageo Activating</p>
            <p className="font-sans text-sm font-bold text-obsidian">Intercepting your missed calls</p>
            <p className="font-mono text-[9px] text-subtle mt-1">Every future call gets answered in &lt;8 sec</p>
          </div>
          <div className="w-48 h-1 bg-border rounded-full overflow-hidden mt-2">
            <motion.div
              className="h-full bg-brand rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    );
  }

  if (phase === 1) {
    return (
      <div className="premium-card w-full rounded-2xl overflow-hidden relative flex flex-col" style={{ minHeight: '380px' }}>
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-500 via-red-400 to-transparent" />
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-border/50">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 pulse-dot" />
            <span className="font-mono text-[10px] font-bold text-red-500 uppercase tracking-widest">Without Engageo</span>
          </div>
          <span className="font-mono text-[9px] text-muted bg-red-50 border border-red-100 px-2 py-0.5 rounded">TODAY</span>
        </div>

        {/* Incoming alert */}
        <div className="mx-4 mt-3 overflow-hidden transition-all duration-300" style={{ maxHeight: incomingBleed ? '72px' : '0px', opacity: incomingBleed ? 1 : 0 }}>
          <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-2.5 flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center shrink-0">
              <PhoneCall size={12} className="text-red-500 animate-bounce" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-sans text-[11px] font-bold text-red-700 truncate">{incomingBleed?.name} — {incomingBleed?.procedure}</p>
              <p className="font-mono text-[9px] text-red-400">Ringing… no answer</p>
            </div>
            <span className="font-sans text-xs font-bold text-red-600 shrink-0">₹{incomingBleed?.value?.toLocaleString('en-IN')}</span>
          </div>
        </div>

        {/* Missed log */}
        <div className="flex-1 px-4 py-3 flex flex-col gap-2">
          {missedList.length === 0 && !incomingBleed && (
            <div className="flex-1 flex items-center justify-center">
              <p className="font-mono text-[10px] text-muted uppercase tracking-widest">Calls incoming…</p>
            </div>
          )}
          {missedList.map((call, i) => (
            <motion.div key={`${call.time}-${i}`} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1 - i * 0.2, x: 0 }} transition={{ duration: 0.3 }}
              className="flex items-center gap-3 px-3 py-2 rounded-xl bg-red-50/70 border border-red-100">
              <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                <PhoneMissed size={10} className="text-red-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-sans text-[11px] font-semibold text-obsidian truncate">{call.name}</p>
                <p className="font-mono text-[9px] text-subtle truncate">{call.procedure}</p>
              </div>
              <span className="font-sans text-xs font-bold text-red-500 shrink-0">−₹{call.value.toLocaleString('en-IN')}</span>
            </motion.div>
          ))}
        </div>

        {/* Footer counter */}
        <div className="px-4 pb-4 pt-2 border-t border-border/50">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[9px] text-muted uppercase tracking-widest">Lost today</span>
            <motion.span key={totalLost} initial={{ scale: 1.2 }} animate={{ scale: 1 }} className="font-sans text-lg font-bold text-red-500">
              −₹{totalLost.toLocaleString('en-IN')}
            </motion.span>
          </div>
          <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
            <motion.div className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full"
              animate={{ width: `${Math.min((totalLost / 135000) * 100, 98)}%` }}
              transition={{ duration: 0.5 }} />
          </div>
          <p className="font-mono text-[9px] text-red-400/70 mt-1">And it's not even noon yet.</p>
        </div>
      </div>
    );
  }

  /* ── Phase 2 UI — Recovery ── */
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="premium-card w-full rounded-2xl overflow-hidden relative flex flex-col"
      style={{ minHeight: '380px' }}
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-emerald-500 via-emerald-400 to-transparent" />
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-border/50">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-dot" />
          <span className="font-mono text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Engageo Active</span>
        </div>
        <span className="font-mono text-[9px] bg-emerald-50 border border-emerald-200 text-emerald-600 px-2 py-0.5 rounded">LIVE</span>
      </div>

      {/* Incoming intercept alert */}
      <div className="mx-4 mt-3 overflow-hidden transition-all duration-300" style={{ maxHeight: incomingRecover ? '72px' : '0px', opacity: incomingRecover ? 1 : 0 }}>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2.5 flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
            <PhoneCall size={12} className="text-emerald-600 animate-bounce" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-sans text-[11px] font-bold text-emerald-700 truncate">Intercepting: {incomingRecover?.name} — {incomingRecover?.procedure}</p>
            <p className="font-mono text-[9px] text-emerald-500">AI answering in &lt;{incomingRecover?.secs} sec · booking slot…</p>
          </div>
          <span className="font-sans text-xs font-bold text-emerald-600 shrink-0">₹{incomingRecover?.value?.toLocaleString('en-IN')}</span>
        </div>
      </div>

      {/* Recovery log */}
      <div className="flex-1 px-4 py-3 flex flex-col gap-2">
        {recoveredList.length === 0 && !incomingRecover && (
          <div className="flex-1 flex items-center justify-center">
            <p className="font-mono text-[10px] text-muted uppercase tracking-widest">Awaiting calls…</p>
          </div>
        )}
        {recoveredList.map((call, i) => (
          <motion.div key={`${call.time}-${i}`} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1 - i * 0.2, x: 0 }} transition={{ duration: 0.3 }}
            className="flex items-center gap-3 px-3 py-2 rounded-xl bg-emerald-50/70 border border-emerald-100">
            <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
              <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-sans text-[11px] font-semibold text-obsidian truncate">{call.name} · Booked ✓</p>
              <p className="font-mono text-[9px] text-subtle truncate">{call.procedure} · answered in {call.secs}s</p>
            </div>
            <span className="font-sans text-xs font-bold text-emerald-600 shrink-0">+₹{call.value.toLocaleString('en-IN')}</span>
          </motion.div>
        ))}
      </div>

      {/* Footer counter */}
      <div className="px-4 pb-4 pt-2 border-t border-border/50">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[9px] text-muted uppercase tracking-widest">Recovered today</span>
          <motion.span key={totalRecovered} initial={{ scale: 1.2 }} animate={{ scale: 1 }} className="font-sans text-lg font-bold text-emerald-600">
            +₹{totalRecovered.toLocaleString('en-IN')}
          </motion.span>
        </div>
        <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
          <motion.div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"
            animate={{ width: `${Math.min((totalRecovered / 270000) * 100, 98)}%` }}
            transition={{ duration: 0.5 }} />
        </div>
        <p className="font-mono text-[9px] text-emerald-500/80 mt-1">Revenue that would've been lost. Secured.</p>
      </div>
    </motion.div>
  );
}

const metrics = [
  { label: 'Avg Recovery', value: '₹24,000' },
  { label: 'Response Time', value: '< 8 sec' },
  { label: 'Clinics Live', value: '47+' },
];

export default function Hero() {
  const { openModal } = useModal();

  const scrollToCalculator = () => {
    document.querySelector('#calculator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToLifecycle = () => {
    document.querySelector('#lifecycle')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <section className="relative min-h-[92vh] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-32 pb-20 gap-16">
      {/* Content */}
      <div className="max-w-2xl space-y-10 relative z-10">
        <motion.div
          className="space-y-7"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-border shadow-card">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-dot" />
            <span className="font-sans text-[11px] font-semibold text-subtle tracking-tight">
              Live in 47 Indian Clinics
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-sans text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-obsidian leading-[0.92]">
            Your Clinic Is Losing
            <br />
            <span className="gradient-text">₹3L Every Month.</span>
          </h1>

          {/* Sub */}
          <p className="max-w-md font-sans text-base text-subtle leading-relaxed">
            Every call your receptionist misses is a patient your competitor books. Engageo
            intercepts that call in 8 seconds — qualifies the patient, books the slot, sends
            the WhatsApp confirmation. While you're with your next patient.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
        >
          <button
            onClick={openModal}
            className="group relative isolate overflow-hidden bg-brand text-white text-sm font-semibold px-7 py-3.5 rounded-xl glow-brand-sm ring-1 ring-brand/20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.04] hover:shadow-brand-lg hover:ring-brand/30 active:scale-[0.97] focus:outline-none flex items-center gap-2">
            <div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent z-0 pointer-events-none" />
            <span className="relative z-10">See What You're Losing — Free Audit</span>
            <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onClick={scrollToLifecycle}
            className="px-7 py-3.5 glass-card text-obsidian border border-border text-sm font-medium rounded-xl transition-all duration-300 hover:border-brand/30 hover:text-brand">
            Watch a Real Recovery Call
          </button>
        </motion.div>

        {/* Metric pills */}
        <motion.div
          className="flex flex-wrap gap-3 pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          {metrics.map((m) => (
            <div key={m.label} className="glass-card flex items-center gap-3 px-4 py-2.5 rounded-xl">
              <span className="font-sans text-lg font-bold text-obsidian tracking-tight">{m.value}</span>
              <span className="font-mono text-[10px] text-subtle uppercase tracking-widest">{m.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Visual card */}
      <motion.div
        className="relative w-full max-w-lg flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.93 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-red-500/5 via-white/20 to-transparent blur-3xl rounded-3xl" />
        <div className="w-full relative">
          <LiveBleedDashboard />
        </div>
      </motion.div>
    </section>
  );
}
