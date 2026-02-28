import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '../context/ModalContext';

/* ─── Data ───────────────────────────────────────────────────── */
const BLEED_CALLS = [
  { id: 1, time: '09:12', name: 'Priya S.', procedure: 'Dental Implant', value: 28000 },
  { id: 2, time: '10:34', name: 'Rahul K.', procedure: 'IVF Consultation', value: 85000 },
  { id: 3, time: '11:07', name: 'Anjali M.', procedure: 'Laser Vision', value: 22000 },
];
const RECOVERY_CALLS = [
  { id: 4, time: '12:45', name: 'Vikram D.', procedure: 'Rhinoplasty', value: 120000, secs: 6 },
  { id: 5, time: '14:18', name: 'Sonal R.', procedure: 'Mouth Rehab', value: 65000, secs: 8 },
  { id: 6, time: '15:44', name: 'Meera T.', procedure: 'IVF Consultation', value: 85000, secs: 7 },
];

/* ─── Single ledger row ──────────────────────────────────────── */
function LedgerRow({ call, isRecovery }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, ease: [0.25, 1, 0.5, 1] }}
      className="flex items-center px-4 py-3 rounded-2xl transition-colors duration-150"
      style={{ background: 'transparent' }}
      onMouseEnter={e => e.currentTarget.style.background = '#F7F5F2'}
      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
    >
      {/* Time */}
      <span className="font-mono text-[10px] text-muted tabular-nums shrink-0 w-11">{call.time}</span>

      {/* Name + procedure */}
      <div className="flex-1 min-w-0 px-3">
        <p className="font-sans text-[12px] font-semibold text-obsidian truncate">{call.name}</p>
        <p className="font-mono text-[9px] text-muted truncate mt-0.5">{call.procedure}</p>
      </div>

      {/* Response badge — recovery only */}
      {isRecovery && (
        <span
          className="font-mono text-[9px] px-1.5 py-0.5 rounded-lg mr-3 shrink-0"
          style={{ background: 'rgba(61,90,254,0.07)', color: '#3D5AFE' }}
        >
          {call.secs}s
        </span>
      )}

      {/* Amount */}
      <span
        className="font-mono text-[12px] font-bold tabular-nums shrink-0"
        style={{ color: isRecovery ? '#3D5AFE' : '#DC2626' }}
      >
        {isRecovery ? '+' : '−'}₹{call.value.toLocaleString('en-IN')}
      </span>
    </motion.div>
  );
}

/* ─── Typewriter Effect ──────────────────────────────────────── */
const HERO_WORDS = [
  "₹3L every month.",
  "70% of missed calls.",
  "patients to rivals."
];

function TypewriterText({ words }) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer;
    const currentWord = words[loopNum % words.length];
    
    if (isDeleting) {
      timer = setTimeout(() => setText(currentWord.substring(0, text.length - 1)), 35);
    } else {
      timer = setTimeout(() => setText(currentWord.substring(0, text.length + 1)), 65);
    }

    if (!isDeleting && text === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(prev => prev + 1);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words]);

  return (
    <span className="inline">
      <span>{text}</span>
      <span 
        className="inline-block bg-brand animate-pulse ml-1" 
        style={{ width: '0.06em', height: '0.9em', verticalAlign: 'baseline', transform: 'translateY(0.1em)', animationDuration: '0.8s' }} 
      />
    </span>
  );
}

/* ─── Main dashboard ─────────────────────────────────────────── */
function LiveDashboard() {
  const [phase, setPhase] = useState(1);
  const [activating, setActivating] = useState(false);
  const [visibleCalls, setVisibleCalls] = useState([]);
  const [total, setTotal] = useState(0);
  const [incoming, setIncoming] = useState(null);
  const timerRef = useRef(null);

  const clear = () => clearTimeout(timerRef.current);

  const runPhase = (calls, nextFn) => {
    let i = 0;
    const step = () => {
      if (i >= calls.length) { timerRef.current = setTimeout(nextFn, 800); return; }
      const call = calls[i];
      setIncoming(call);
      timerRef.current = setTimeout(() => {
        setIncoming(null);
        setVisibleCalls(prev => [call, ...prev]);
        setTotal(prev => prev + call.value);
        i++;
        timerRef.current = setTimeout(step, 1000);
      }, 1500);
    };
    timerRef.current = setTimeout(step, 700);
  };

  const startPhase1 = () => {
    setPhase(1); setVisibleCalls([]); setTotal(0); setIncoming(null);
    runPhase(BLEED_CALLS, () => {
      setActivating(true);
      timerRef.current = setTimeout(() => {
        setActivating(false);
        setVisibleCalls([]); setTotal(0); setIncoming(null);
        startPhase2();
      }, 2000);
    });
  };

  const startPhase2 = () => {
    setPhase(2);
    runPhase(RECOVERY_CALLS, () => {
      timerRef.current = setTimeout(startPhase1, 3000);
    });
  };

  useEffect(() => { startPhase1(); return clear; }, []);

  const isRecovery = phase === 2;
  const accentColor = isRecovery ? '#3D5AFE' : '#DC2626';

  /* ── Activation screen ── */
  if (activating) {
    return (
      <div
        className="w-full overflow-hidden flex items-center justify-center"
        style={{
          background: '#FFFFFF',
          border: '2px solid #0F0D0B',
          boxShadow: '12px 12px 0px 0px #3D5AFE',
          minHeight: 360,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-5 px-10 text-center"
        >
          <div className="relative">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(61,90,254,0.07)' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="#3D5AFE" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div
              className="absolute inset-0 rounded-full animate-ping opacity-20"
              style={{ background: '#3D5AFE' }}
            />
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] mb-2" style={{ color: '#3D5AFE' }}>
              Engageo Activating
            </p>
            <p className="font-sans text-sm font-semibold text-obsidian">Taking control of your calls</p>
            <p className="font-mono text-[9px] text-muted mt-1.5">Every future call answered in &lt; 8 seconds</p>
          </div>
          <div
            className="w-40 h-[2px] rounded-full overflow-hidden mt-1"
            style={{ background: '#F2F0EB' }}
          >
            <motion.div
              style={{ background: '#3D5AFE', height: '100%' }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`phase-${isRecovery ? 2 : 1}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        style={{
          background: '#FFFFFF',
          overflow: 'hidden',
          border: '2px solid #0F0D0B',
          boxShadow: isRecovery
            ? '12px 12px 0px 0px #3D5AFE'
            : '12px 12px 0px 0px #DC2626',
          transition: 'box-shadow 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
          minHeight: 360,
        }}
      >
        {/* Top colour tag — replaces the border accent */}
        <div style={{ height: 3, background: accentColor, opacity: 0.9, borderRadius: '28px 28px 0 0' }} />

        {/* Header — uses background tint instead of border-bottom */}
        <div
          className="flex items-center justify-between px-5 pt-4 pb-3.5"
          style={{ background: isRecovery ? 'rgba(61,90,254,0.03)' : 'rgba(220,38,38,0.025)' }}
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                style={{ background: accentColor }}
              />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: accentColor }} />
            </span>
            <span
              className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em]"
              style={{ color: accentColor }}
            >
              {isRecovery ? 'Engageo Active' : 'Without Engageo'}
            </span>
          </div>
          <span
            className="font-mono text-[9px] px-2 py-0.5 rounded-lg font-medium"
            style={{
              color: accentColor,
              background: isRecovery ? 'rgba(61,90,254,0.08)' : 'rgba(220,38,38,0.07)',
            }}
          >
            {isRecovery ? 'LIVE' : 'TODAY'}
          </span>
        </div>

        {/* Incoming flash */}
        <div
          className="overflow-hidden transition-all duration-300 mx-4"
          style={{ maxHeight: incoming ? 56 : 0, opacity: incoming ? 1 : 0, marginTop: incoming ? 10 : 0 }}
        >
          <div
            className="flex items-center gap-3 px-4 py-2.5 rounded-2xl"
            style={{ background: isRecovery ? 'rgba(61,90,254,0.06)' : 'rgba(220,38,38,0.05)' }}
          >
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: accentColor }} />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: accentColor }} />
            </span>
            <span className="font-sans text-[11px] font-medium text-obsidian truncate flex-1">
              {isRecovery ? 'Intercepting' : 'Incoming'}: <strong>{incoming?.name}</strong> · {incoming?.procedure}
            </span>
            <span className="font-mono text-[11px] font-bold shrink-0" style={{ color: accentColor }}>
              ₹{incoming?.value?.toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        {/* Column headers */}
        <div className="flex items-center px-4 pt-5 pb-2">
          <span className="font-mono text-[9px] text-muted uppercase tracking-[0.12em] w-11">Time</span>
          <span className="font-mono text-[9px] text-muted uppercase tracking-[0.12em] flex-1 px-3">Patient</span>
          <span className="font-mono text-[9px] text-muted uppercase tracking-[0.12em]">Amount</span>
        </div>

        {/* Thin rule under headers — the one line I'm keeping since it's functional */}
        <div className="mx-4" style={{ height: 1, background: '#F2F0EB' }} />

        {/* Call rows */}
        <div className="px-2 pt-1 pb-2" style={{ minHeight: 130 }}>
          {visibleCalls.length === 0 && !incoming && (
            <div className="flex items-center justify-center h-28">
              <p className="font-mono text-[9px] text-muted uppercase tracking-[0.12em]">
                {isRecovery ? 'Ready to intercept…' : 'Monitoring calls…'}
              </p>
            </div>
          )}
          {[...visibleCalls].reverse().map(call => (
            <LedgerRow key={call.id} call={call} isRecovery={isRecovery} />
          ))}
        </div>

        {/* Footer total — background tint, no border */}
        <div
          className="px-5 py-4 mx-4 mb-4 rounded-2xl flex items-center justify-between"
          style={{ background: '#F7F5F2' }}
        >
          <div>
            <p className="font-mono text-[9px] text-muted uppercase tracking-[0.12em] mb-0.5">
              {isRecovery ? 'Revenue Secured' : 'Revenue Lost'}
            </p>
            <p className="font-mono text-[9px]" style={{ color: isRecovery ? 'rgba(61,90,254,0.45)' : 'rgba(220,38,38,0.45)' }}>
              {isRecovery ? "Calls that would've been missed." : "And it's not even noon yet."}
            </p>
          </div>
          <motion.p
            key={total}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.25 }}
            className="font-mono font-bold tabular-nums"
            style={{ fontSize: 22, color: accentColor, letterSpacing: '-0.02em' }}
          >
            {isRecovery ? '+' : '−'}₹{total.toLocaleString('en-IN')}
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Metrics ────────────────────────────────────────────────── */
const metrics = [
  { label: 'Avg Recovery', value: '₹24K' },
  { label: 'Response Time', value: '< 8s' },
  { label: 'Clinics Live', value: '47+' },
];

export default function Hero() {
  const { openModal } = useModal();

  const scrollToLifecycle = () => {
    document.querySelector('#lifecycle')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-[92vh] flex flex-col lg:flex-row items-center justify-between px-5 md:px-12 lg:px-20 pt-24 md:pt-32 pb-16 md:pb-20 gap-12 md:gap-16">
      {/* Copy */}
      <div className="w-full max-w-2xl space-y-8 md:space-y-10 relative z-10 mx-auto md:mx-0">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="section-label mb-6 text-xs md:text-sm">Live in 47 Indian Clinics</div>

          <h1 className="tracking-tighter leading-[1]">
            <span className="font-sans text-4xl md:text-6xl lg:text-[5.5rem] font-bold text-obsidian block mb-1 md:mb-2 leading-[1.1]">
              Your clinic is losing
            </span>
            <span
              className="font-sans font-bold block tracking-tight text-brand leading-[1.1] min-h-[1.2em]"
              style={{ fontSize: 'clamp(2.75rem, 8vw, 7.5rem)' }}
            >
              <TypewriterText words={HERO_WORDS} />
            </span>
          </h1>

          <p className="max-w-[19rem] md:max-w-md font-sans text-[15px] md:text-base text-subtle leading-relaxed">
            Every call your receptionist misses is a patient your competitor books. Engageo
            intercepts that call in 8 seconds — qualifies the patient, books the slot, sends
            the WhatsApp confirmation. While you're with your next patient.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
        >
          <button
            onClick={openModal}
            className="group flex flex-1 justify-center items-center gap-2 bg-brand text-white text-[12px] md:text-[13px] font-bold tracking-wide px-4 md:px-8 py-3.5 md:py-4 border-2 border-obsidian retro-shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-200 active:scale-[0.98]"
          >
            <span className="whitespace-nowrap">See What You're Losing — Free Audit</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
          </button>
          <button
            onClick={scrollToLifecycle}
            className="px-4 md:px-7 py-3.5 md:py-4 flex-1 justify-center text-obsidian bg-white border-2 border-obsidian retro-shadow text-[12px] md:text-[13px] font-bold tracking-wide hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-200 whitespace-nowrap"
          >
            Watch a Real Recovery Call
          </button>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3 pt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          {metrics.map((m) => (
            <div
              key={m.label}
              className="flex items-center gap-3 px-4 md:px-5 py-2 md:py-2.5 bg-white border-2 border-obsidian/15 retro-shadow flex-1 md:flex-auto justify-center"
            >
              <span className="font-sans text-sm md:text-base font-bold text-obsidian tracking-tight whitespace-nowrap">{m.value}</span>
              <span className="font-mono text-[9px] md:text-[10px] text-muted uppercase tracking-widest whitespace-nowrap">{m.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dashboard */}
      <motion.div
        className="relative w-full max-w-md"
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="absolute -inset-8 bg-gradient-to-tr from-brand/6 via-transparent to-red-400/4 blur-3xl rounded-3xl pointer-events-none" />
        <div className="relative">
          <LiveDashboard />
        </div>
      </motion.div>
    </section>
  );
}
