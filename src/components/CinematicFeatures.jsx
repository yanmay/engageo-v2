import React from 'react';
import { motion as Motion } from 'framer-motion';

const FEATURE_DATA = [
  {
    name: <span className="font-data tabular-nums">8 Seconds</span>,
    desc: "AI calls back before the patient dials a competitor. In the high-ticket medical world, the first human-sounding voice wins the patient.",
    stat: "RESPONSE_GAP"
  },
  {
    name: "Hinglish native",
    desc: "Speaks the way your patients actually talk. Seamlessly mixes English and Hindi nuances to build trust instantly without sounding like a bot.",
    stat: "VOICE_V4.2"
  },
  {
    name: "Proprietary scheduling",
    desc: "Reads live slots and books confirmed appointments without needing an HMS. No manual staff entry or double-booking errors.",
    stat: "SYNC_ACTIVE"
  },
  {
    name: "4-Step WhatsApp Sequence",
    desc: "Automated booking, 24hr reminder, clinic directions, and no-show rescheduling fire automatically without any manual effort.",
    stat: "RETENTION_LOOP"
  },
  {
    name: "Real-time dashboard",
    desc: "Shows exactly how many rupees were recovered this month. Not call logs, but actual revenue secured in your hospital pipeline.",
    stat: "ROI_TRACKER"
  },
  {
    name: "DPDP compliant",
    desc: "Strict Indian data residency and consent-first calling. Your patient data never leaves Indian borders, meeting all 2023 regulations.",
    stat: "SECURE_NODE"
  }
];

export default function CinematicFeatures() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad-like
      },
    },
  };

  return (
    <section
      id="platform"
      className="py-24 md:py-40 px-6 md:px-24 bg-[var(--ethereal-white)] relative overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--clinical-blue)]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--premium-clay)]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-32"
        >
          <Motion.div variants={itemVariants} className="font-data text-[var(--clinical-blue)] text-[10px] tracking-widest mb-6 font-bold uppercase">Platform Capabilities</Motion.div>
          <Motion.h2 
            variants={itemVariants} 
            className="text-4xl md:text-5xl lg:text-7xl text-[var(--ink-black)] mb-8 tracking-tighter max-w-4xl relative font-bold"
          >
            <span className="relative inline-block">
                Flawless Execution.
            </span>
            <br />
            <span className="text-[var(--clinical-blue)] font-drama font-normal italic">
                Not Just Chatbots.
            </span>
          </Motion.h2>
          <Motion.p variants={itemVariants} className="max-w-2xl text-[var(--ink-black)]/60 text-lg md:text-xl leading-relaxed">
            Bridge the gap between raw missed calls and confirmed hospital pipeline with a platform designed for clinical precision.
          </Motion.p>
        </Motion.div>

        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {FEATURE_DATA.map((f, i) => (
            <Motion.div
              key={i}
              variants={itemVariants}
              className="group glass-premium p-10 rounded-[2.5rem] border border-black/5 hover:border-[var(--clinical-blue)]/20 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] relative overflow-hidden flex flex-col h-full"
            >
              {/* Subtle Icon/Marker */}
              <div className="mb-8 flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-[var(--clinical-blue)]/5 flex items-center justify-center text-[var(--clinical-blue)] group-hover:bg-[var(--clinical-blue)] group-hover:text-white transition-all duration-500">
                  <span className="font-data text-xs font-bold">0{i + 1}</span>
                </div>
                <span className="font-data text-[10px] text-[var(--ink-black)]/20 font-bold tracking-widest uppercase">
                  {f.stat}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[var(--ink-black)] tracking-tight mb-4 group-hover:text-[var(--clinical-blue)] transition-colors">
                {f.name}
              </h3>

              <p className="text-[var(--ink-black)]/60 text-base leading-relaxed mb-8 flex-grow">
                {f.desc}
              </p>

              <div className="pt-6 border-t border-black/5 mt-auto">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[var(--clinical-blue)]" />
                  <span className="font-data text-[9px] text-[var(--ink-black)]/40 font-bold tracking-[0.2em] uppercase">SYSTEM_READY</span>
                </div>
              </div>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}
