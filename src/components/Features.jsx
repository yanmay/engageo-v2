import React from 'react';
import { motion } from 'framer-motion';

const featureRows = [
  {
    title: '8 seconds',
    desc: 'AI calls back before the patient dials a competitor. Latency measured at network edge, not call center.',
    stat: 'LATENCY < 8s',
  },
  {
    title: 'Hinglish native',
    desc: 'Speaks the way your patients actually talk — switching between Hindi and English mid-sentence, naturally.',
    stat: 'MODEL V4.1',
  },
  {
    title: 'Google Calendar direct',
    desc: 'Reads live slots, books without HMS integration. No new software for your front desk to learn.',
    stat: 'OAUTH 2.0',
  },
  {
    title: '4-step WhatsApp sequence',
    desc: 'Confirmation, reminder, directions, rescheduling — all automated. Meta WABA certified.',
    stat: 'META WABA',
  },
  {
    title: 'Real-time dashboard',
    desc: 'Shows rupees recovered, not abstract call logs. Revenue in, revenue out — nothing else.',
    stat: 'LIVE SYNC',
  },
  {
    title: 'DPDP compliant',
    desc: 'Indian data residency, consent-first calling, full audit log. No patient data leaves Indian servers.',
    stat: 'ISO 27001',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 140, damping: 20 },
  },
};

export default function Features() {
  return (
    <section className="w-full bg-command-black py-32 md:py-40 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-2/5 h-2/5 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at top right, rgba(36,87,217,0.07) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-[1100px] w-full mx-auto px-6 relative z-10">
        {/* Asymmetric header — headline left, description right */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <span className="section-label">Platform Capabilities</span>
            <h2 className="text-4xl md:text-[50px] font-semibold text-white tracking-tight leading-tight text-balance">
              Flawless execution. Not just chatbots.
            </h2>
          </div>
          <p className="font-sans text-base text-slate-400 leading-relaxed text-pretty md:ml-auto max-w-sm">
            Bridge the gap between raw missed calls and confirmed hospital pipeline with a platform
            built for clinical precision.
          </p>
        </div>

        {/* Feature rows — divide-y, no card boxes (VISUAL_DENSITY=4) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          className="divide-y border-t"
          style={{ borderColor: 'rgba(255,255,255,0.07)' }}
        >
          {featureRows.map((item, idx) => (
            <motion.div
              key={idx}
              variants={rowVariants}
              className="flex flex-col md:flex-row items-start md:items-center py-7 gap-4 md:gap-8 group cursor-default rounded-xl transition-colors duration-200"
              style={{ borderColor: 'rgba(255,255,255,0.07)' }}
            >
              {/* Title 35% */}
              <div className="md:w-[35%] font-sans font-semibold text-xl text-white tracking-tight transition-colors duration-200 group-hover:text-recovery-blue">
                {item.title}
              </div>
              {/* Desc 45% */}
              <div className="md:w-[45%] font-sans text-sm text-slate-400 leading-relaxed text-pretty">
                {item.desc}
              </div>
              {/* Badge 20% */}
              <div className="md:w-[20%] flex md:justify-end">
                <span className="inline-flex items-center px-3 py-1.5 font-mono text-[9px] tracking-widest uppercase border rounded-pill text-slate-500 whitespace-nowrap transition-all duration-200 group-hover:text-recovery-blue"
                  style={{ borderColor: 'rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}
                >
                  {item.stat}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
