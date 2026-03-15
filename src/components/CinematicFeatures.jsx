import React from 'react';
import { motion as Motion } from 'framer-motion';

const FEATURE_DATA = [
  {
    name: "8 Seconds",
    desc: "AI calls back before the patient dials a competitor. In the high-ticket medical world, the first human-sounding voice wins the patient.",
    stat: "RESPONSE_GAP"
  },
  {
    name: "Hinglish Native",
    desc: "Speaks the way your patients actually talk. Seamlessly mixes English and Hindi nuances to build trust instantly without sounding like a bot.",
    stat: "VOICE_V4.2"
  },
  {
    name: "Proprietary Scheduling",
    desc: "Reads live slots and books confirmed appointments without needing an HMS. No manual staff entry or double-booking errors.",
    stat: "SYNC_ACTIVE"
  },
  {
    name: "4-Step WhatsApp Sequence",
    desc: "Automated booking, 24hr reminder, clinic directions, and no-show rescheduling fire automatically without any manual effort.",
    stat: "RETENTION_LOOP"
  },
  {
    name: "Real-Time Dashboard",
    desc: "Shows exactly how many rupees were recovered this month. Not call logs, but actual revenue secured in your hospital pipeline.",
    stat: "ROI_TRACKER"
  },
  {
    name: "DPDP Compliant",
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
      className="py-24 md:py-40 px-6 md:px-24 bg-[var(--background)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <Motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-24"
        >
          <Motion.div variants={itemVariants} className="font-data text-[var(--primary)] text-[10px] tracking-[0.2em] uppercase mb-6 font-bold">Platform Capabilities</Motion.div>
          <Motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-7xl text-[var(--command-black)] mb-8 tracking-tighter max-w-4xl">
            Everything You Need.<br />
            <span className="text-[var(--primary)]">Everything You Didn't Know You Needed.</span>
          </Motion.h2>
          <Motion.p variants={itemVariants} className="max-w-2xl text-[var(--command-black)]/60 text-lg md:text-xl leading-relaxed">
            Bridge the gap between raw missed calls and confirmed hospital pipeline with a platform designed for clinical precision.
          </Motion.p>
        </Motion.div>

        <Motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="features-container border-t border-[var(--command-black)]/10"
        >
          {FEATURE_DATA.map((f, i) => (
            <Motion.div 
              key={i} 
              variants={itemVariants}
              className="feature-row border-b border-[var(--command-black)]/10 py-10 md:py-16 hover:bg-[var(--primary)]/[0.01] transition-colors group"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Left: Feature Name */}
                <div className="md:col-span-4 lg:col-span-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--command-black)] tracking-tighter group-hover:text-[var(--primary)] transition-colors">
                    {f.name}
                  </h3>
                </div>

                {/* Right: Feature Description */}
                <div className="md:col-span-6 lg:col-span-7">
                  <p className="text-[var(--command-black)]/60 text-base md:text-lg leading-relaxed max-w-2xl">
                    {f.desc}
                  </p>
                </div>

                {/* Far Right: Monospace Stat */}
                <div className="md:col-span-2 text-right hidden md:block">
                  <span className="font-data text-[10px] text-[var(--primary)]/[0.3] font-bold tracking-[0.2em] group-hover:text-[var(--primary)] transition-colors">
                    {f.stat}
                  </span>
                </div>
              </div>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}
