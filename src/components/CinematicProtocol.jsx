import React, { useState, useEffect, useRef } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { Terminal, Calendar, Layers, CheckCircle2, AlertCircle, Clock } from 'lucide-react';

// ─── Card 1: Diagnostic Shuffler ─────────────────────────────────────────────
const ShufflerCard = () => {
  const [items, setItems] = useState([
    { id: 1, label: "Silent Leak Detected", status: "₹4.2L Loss", type: "error" },
    { id: 2, label: "AI Sensor Engaged", status: "0.4s Latency", type: "active" },
    { id: 3, label: "Recovery Success", status: "₹80k Saved", type: "success" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => {
        const newArr = [...prev];
        const last = newArr.pop();
        newArr.unshift(last);
        return newArr;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[280px] w-full flex items-center justify-center perspective-1000">
      <AnimatePresence mode="popLayout">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{
              opacity: 1 - index * 0.25,
              y: index * -30,
              scale: 1 - index * 0.05,
              zIndex: items.length - index,
            }}
            exit={{ opacity: 0, y: -50, scale: 1.1 }}
            transition={{ type: "spring", damping: 15, stiffness: 100 }}
            className={`absolute w-full max-w-[320px] p-6 rounded-3xl border shadow-2xl backdrop-blur-xl ${index === 0
                ? 'bg-white/10 border-white/20'
                : 'bg-white/5 border-white/10 pointer-events-none'
              }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg ${item.type === 'error' ? 'bg-[var(--loss-red)]/20 text-[var(--loss-red)]' :
                  item.type === 'active' ? 'bg-[var(--recovery-blue)]/20 text-[var(--recovery-blue)]' :
                    'bg-[var(--signal-green)]/20 text-[var(--signal-green)]'
                }`}>
                {item.type === 'error' ? <AlertCircle size={16} /> :
                  item.type === 'active' ? <Layers size={16} /> :
                    <CheckCircle2 size={16} />}
              </div>
              <span className="font-data text-[10px] tracking-widest text-white/20">NODE_0{item.id}</span>
            </div>
            <h4 className="text-white font-bold text-lg mb-1">{item.label}</h4>
            <p className={`font-data text-sm font-bold ${item.type === 'error' ? 'text-[var(--loss-red)]' :
                item.type === 'active' ? 'text-[var(--recovery-blue)]' :
                  'text-[var(--signal-green)]'
              }`}>{item.status}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

// ─── Card 2: Telemetry Typewriter ────────────────────────────────────────────
const MESSAGES = [
  "> SCANNING_INBOUND_TRUNK...",
  "> MISSED_CALL_DETECTED: +91 987xx xxxxx",
  "> TRIGGERING_RECOVERY_V3.2",
  "> VOICEMAIL_BYPASS_INITIATED",
  "> VAPI_Hinglish_AGENT: CONNECTED",
  "> CONVERSATION_INTENT: [Appointment_HT]",
  "> STATUS: SLOT_RESERVED"
];

const TypewriterCard = () => {
  const [text, setText] = useState("");
  const [msgIndex, setMsgIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < MESSAGES[msgIndex].length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + MESSAGES[msgIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setMsgIndex(prev => (prev + 1) % MESSAGES.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, msgIndex]);

  return (
    <div className="w-full h-[280px] bg-black/40 rounded-3xl border border-white/5 p-6 font-data text-xs relative overflow-hidden">
      <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
        <div className="w-2 h-2 rounded-full bg-[var(--recovery-blue)] animate-pulse shadow-[0_0_8px_var(--recovery-blue)]" />
        <span className="text-white/40 tracking-widest font-bold">Live telemetry feed</span>
      </div>
      <div className="text-[var(--recovery-blue)]/80 leading-relaxed font-bold">
        {text}
        <span className="w-2 h-4 bg-[var(--recovery-blue)] inline-block ml-1 animate-[pulse_0.8s_infinite]" />
      </div>
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center opacity-20">
        <span className="text-[8px] text-white tracking-widest font-bold font-data tabular-nums">Latency: 0.12ms</span>
        <span className="text-[8px] text-white tracking-widest font-bold font-data tabular-nums">Uptime: 99.998%</span>
      </div>
    </div>
  );
};

// ─── Card 3: Cursor Protocol Scheduler ───────────────────────────────────────
const SchedulerCard = () => {
  const [activeDay, setActiveDay] = useState(null);
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const gridRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const runAnimation = () => {
      const tl = gsap.timeline({ repeat: -1 });
      const cells = gridRef.current.querySelectorAll('.day-cell');
      const targetCell = cells[2]; // Tuesday

      tl.set(cursorRef.current, { x: 50, y: 150, opacity: 0 })
        .to(cursorRef.current, { opacity: 1, duration: 0.5 })
        .to(cursorRef.current, {
          x: targetCell.offsetLeft + 15,
          y: targetCell.offsetTop + 15,
          duration: 1.5,
          ease: "power2.inOut"
        })
        .to(targetCell, { scale: 0.95, duration: 0.1 })
        .add(() => setActiveDay(2))
        .to(targetCell, { scale: 1, duration: 0.2 })
        .to(cursorRef.current, { x: 220, y: 220, duration: 1, delay: 0.5 })
        .to(".save-btn", { scale: 0.95, duration: 0.1 })
        .to(".save-btn", { scale: 1, duration: 0.2 })
        .to(cursorRef.current, { opacity: 0, duration: 0.3, delay: 1 })
        .add(() => setActiveDay(null));
    };
    runAnimation();
  }, []);

  return (
    <div className="w-full h-[280px] bg-white/[0.02] rounded-3xl border border-white/5 p-8 relative overflow-hidden group">
      <div className="flex items-center gap-2 mb-8">
        <Calendar size={14} className="text-[var(--recovery-blue)]" />
        <span className="font-data text-[10px] text-white/40 tracking-widest font-bold">Autonomous scheduler</span>
      </div>

      <div ref={gridRef} className="grid grid-cols-7 gap-3 mb-10 relative">
        {days.map((day, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <span className="font-data text-[8px] text-white/20 font-bold">{day}</span>
            <div className={`day-cell w-full aspect-square rounded-lg border transition-all duration-300 ${activeDay === i
                ? 'bg-[var(--recovery-blue)] border-[var(--recovery-blue)] shadow-[0_0_15px_var(--recovery-blue)]'
                : 'bg-white/5 border-white/10'
              }`} />
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <div className="save-btn px-8 py-2.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-data font-bold text-white/40 tracking-widest hover:text-white transition-all cursor-pointer">
          Confirm slot_
        </div>
      </div>

      <div ref={cursorRef} className="absolute pointer-events-none z-50">
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
          <path d="M7 2l18 11.5-7.5 2 7.5 9.5-4 2.5-7.5-9.5-6.5 6V2z" fill="white" stroke="black" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};

export default function CinematicProtocol() {
  return (
    <section id="protocol" className="relative py-24 md:py-40 px-6 md:px-24 bg-[var(--command-black)]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <div className="font-data text-[var(--recovery-blue)] text-[10px] tracking-widest mb-6 font-bold">The protocol</div>
          <h2 className="text-4xl md:text-6xl lg:text-8xl text-white font-bold tracking-tighter leading-[0.9] max-w-4xl italic mb-10">
            From Missed Call to Confirmed Booking in <span className="text-[var(--recovery-blue)] not-italic">Under 4 Minutes.</span>
          </h2>
          <p className="max-w-xl text-white/40 text-lg md:text-xl font-medium leading-relaxed">
            Three core technologies running in perfect sync to secure your clinic's revenue before it leaks to competitors.
          </p>
        </div>

        <div className="relative">
          {/* Scroll-driven SVG Connection Path */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none hidden lg:block z-0">
            <svg width="100%" height="100%" viewBox="0 0 1200 600" fill="none" preserveAspectRatio="none">
              <motion.path 
                d="M 200 150 Q 600 300 1000 150"
                stroke="var(--recovery-blue)"
                strokeWidth="2"
                strokeDasharray="10 10"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.2 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{ once: true, margin: "-20%" }}
              />
              <motion.path 
                d="M 200 150 Q 600 0 1000 150"
                stroke="var(--recovery-blue)"
                strokeWidth="1"
                opacity="0.1"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
                viewport={{ once: true }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10">
            {/* Card 1 - Shifted Up */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-4 space-y-8 lg:-mt-12"
            >
              <ShufflerCard />
              <div className="px-2">
                <h3 className="text-white font-bold text-2xl tracking-tighter mb-4">Diagnostic shuffler</h3>
                <p className="text-white/40 text-sm leading-relaxed font-medium max-w-xs">
                  Autonomous detection engine that identifies silent revenue leaks and initiates recovery protocols in milliseconds.
                </p>
              </div>
            </motion.div>
  
            {/* Card 2 - Centered Baseline */}
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-4 lg:col-start-5 space-y-8"
            >
              <TypewriterCard />
              <div className="px-2">
                <h3 className="text-white font-bold text-2xl tracking-tighter mb-4">Telemetry typewriter</h3>
                <p className="text-white/40 text-sm leading-relaxed font-medium max-w-xs">
                  Live monitoring of Hinglish voice sessions, capturing patient intent and emotional cues with high-fidelity accuracy.
                </p>
              </div>
            </motion.div>
  
            {/* Card 3 - Shifted Down & Offset */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:col-span-4 lg:col-start-9 space-y-8 lg:mt-24"
            >
              <SchedulerCard />
              <div className="px-2">
                <h3 className="text-white font-bold text-2xl tracking-tighter mb-4">Protocol scheduler</h3>
                <p className="text-white/40 text-sm leading-relaxed font-medium max-w-xs">
                  Intelligent sync logic that maps patients to your best clinical slots without ever needing human intervention.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
