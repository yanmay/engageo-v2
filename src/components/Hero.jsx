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
          className="font-mono text-[9px] px-1.5 py-[1px] border border-[#3D5AFE]/30 uppercase tracking-widest font-semibold mr-3 shrink-0"
          style={{ color: '#3D5AFE', background: 'transparent' }}
        >
          {call.secs}S
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

const HERO_WORDS = [
  "We answer. We qualify. We book. We follow up — automatically."
];

// ← The longest phrase determines container height. Update if you add a longer one.
const LONGEST_WORD = "We answer. We qualify. We book. We follow up — automatically.";

function TypewriterText({ words }) {
  const [text, setText] = useState(words[0]);
  const [phase, setPhase] = useState('pause');
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    let timer;
    const currentWord = words[wordIdx % words.length];

    if (phase === 'typing') {
      if (text.length < currentWord.length) {
        timer = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), 60);
      } else {
        timer = setTimeout(() => setPhase('pause'), 5000);
      }
    } else if (phase === 'pause') {
      timer = setTimeout(() => setPhase('deleting'), 200);
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timer = setTimeout(() => setText(text.slice(0, -1)), 30);
      } else {
        const next = (wordIdx + 1) % words.length;
        setWordIdx(next);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timer);
  }, [text, phase, wordIdx, words]);

  return (
    <span className="relative block whitespace-normal md:whitespace-nowrap">
      <span className="invisible select-none pointer-events-none" aria-hidden="true">
        {LONGEST_WORD}
      </span>
      <span className="absolute top-0 left-0">
        {text}
        <span
          className="inline-block bg-brand ml-1"
          style={{ width: '3px', height: '0.85em', verticalAlign: 'text-bottom', animation: 'caretBlink 1s step-end infinite' }}
        />
      </span>
    </span>
  );
}

/* ─── Main dashboard ─────────────────────────────────────────── */
function LiveDashboard() {
  return (
    <div
      style={{
        background: '#FFFFFF',
        overflow: 'hidden',
        border: '2px solid #0F0D0B',
        boxShadow: '12px 12px 0px 0px #3D5AFE',
        minHeight: 360,
      }}
      className="flex flex-col h-full rounded-xl w-full"
    >
      <div className="flex h-full min-h-[360px]">
        {/* Left Column */}
        <div className="flex-1 flex flex-col border-r border-obsidian/10">
          <div className="px-4 py-3 bg-[#DC2626]/5 border-b border-obsidian/10">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#DC2626]">
              WITHOUT ENGAGEO
            </span>
          </div>
          <div className="p-4 flex flex-col gap-3 flex-1">
            <div className="bg-[#DC2626]/5 p-3 rounded-lg border border-[#DC2626]/10">
              <span className="text-[11px] text-muted block mb-1">Patient</span>
              <span className="text-[13px] font-bold text-obsidian block">Priya S.</span>
              <span className="text-[11px] text-charcoal block mt-0.5">Dental Implant</span>
            </div>
            <div className="mt-auto">
              <span className="text-[10px] uppercase text-muted tracking-widest block mb-1">Lost Revenue</span>
              <span className="text-xl font-bold font-mono text-[#DC2626]">−₹28,000</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col bg-[#3D5AFE]/[0.02]">
          <div className="px-4 py-3 bg-[#3D5AFE]/[0.06] border-b border-obsidian/10 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 bg-[#3D5AFE]" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3D5AFE]" />
            </span>
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#3D5AFE]">
              WITH ENGAGEO
            </span>
          </div>
          <div className="p-4 flex flex-col gap-3 flex-1 justify-center">
            <div className="flex items-start gap-2">
              <span className="text-[13px]">📞</span>
              <span className="text-[13px] font-medium text-obsidian leading-snug">Call missed → AI answers in 8s</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[13px]">💬</span>
              <span className="text-[13px] font-medium text-obsidian leading-snug">WhatsApp confirmation sent</span>
            </div>
            <div className="flex items-start gap-2 mt-2 bg-[#3D5AFE]/10 p-2.5 rounded-lg border border-[#3D5AFE]/20">
              <span className="text-[13px]">✅</span>
              <span className="text-[13px] font-bold text-[#3D5AFE] leading-snug">Slot locked. ₹28,000 recovered.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Metrics ────────────────────────────────────────────────── */
const metrics = [
  { label: 'AVG RECOVERY', value: '₹24K' },
  { label: 'CALL RECOVERY', value: '<8s' },
  { label: 'WHATSAPP OPEN RATE', value: '94%' },
  { label: 'CLINICS LIVE', value: '47+' },
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
          <div className="section-label mb-6 text-xs md:text-sm">● Voice + WhatsApp Recovery — Live in 47 Clinics</div>

          <h1 className="tracking-tighter text-left">
            <div className="font-sans text-[2.5rem] md:text-6xl lg:text-[5rem] font-bold text-obsidian mb-2 leading-[1.05] w-full">
              Your clinic is<br />
              {/* Aggressive optical alignment to match stem of 'l' with edge of 'Y' */}
              <span className="-ml-[0.05em] inline-block tracking-tight">losing</span><br />
              patients to silence.
            </div>
            {/* Typewriter line — controlled size so all phrases stay on 1 line,
                preventing the phantom-spacer from leaving visible blank space */}
            <span
              className="font-sans font-bold text-brand tracking-tight"
              style={{
                fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                display: 'block',
                lineHeight: 1.15,
              }}
            >
              <TypewriterText words={HERO_WORDS} />
            </span>
          </h1>

          <p className="max-w-[19rem] md:max-w-md font-sans text-[15px] md:text-base text-subtle leading-relaxed mt-4">
            Every missed call triggers a full recovery sequence — AI voice 
            callback in 8 seconds, patient qualified, slot booked to your 
            calendar, WhatsApp confirmation sent, 24-hour reminder fired. 
            While you're with your next patient.
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
