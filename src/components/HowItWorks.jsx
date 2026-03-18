import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Integration',
    desc: 'AI voice and WhatsApp connect seamlessly to your existing clinic phone system and calendar. No HMS change required.',
    tag: '4-DAY SETUP',
  },
  {
    num: '02',
    title: 'Instant recovery',
    desc: 'Every missed call triggers an immediate callback — a localized AI voice agent calls back in under 8 seconds, in Hinglish.',
    tag: 'LATENCY < 8s',
  },
  {
    num: '03',
    title: 'Confirmed bookings',
    desc: 'High-intent patients are scheduled automatically onto Google Calendar and receive a 4-step WhatsApp confirmation sequence.',
    tag: 'ZERO STAFF INPUT',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 18 },
  },
};

export default function HowItWorks() {
  return (
    <section className="w-full bg-clinic-white py-32 md:py-40 relative overflow-hidden">
      {/* Decorative asymmetric radial */}
      <div
        className="absolute top-0 right-0 w-2/5 h-3/5 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at top right, rgba(36,87,217,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 w-full">
        {/* Header — left-aligned only, DESIGN_VARIANCE=8 anti-center-bias */}
        <div className="mb-20 max-w-xl">
          <span className="section-label">System Workflow</span>
          <h2 className="text-4xl md:text-[52px] font-semibold text-slate-900 tracking-tight leading-tight text-balance">
            From missed call to confirmed booking. Under 4 minutes.
          </h2>
        </div>

        {/* BANNED: 4 equal circles → REPLACED: Asymmetric zig-zag timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          className="flex flex-col"
        >
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={step.num}
                variants={itemVariants}
                className={`flex flex-col md:flex-row items-start gap-8 md:gap-16 py-14 border-b border-slate-200 last:border-b-0 ${
                  !isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Number block — 28% width */}
                <div className="md:w-[28%] shrink-0 flex flex-col gap-3">
                  <span
                    className="font-mono font-semibold text-slate-100 leading-none tracking-tighter select-none"
                    style={{ fontSize: 'clamp(60px, 8vw, 96px)' }}
                    aria-hidden="true"
                  >
                    {step.num}
                  </span>
                  <span className="inline-flex w-fit px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest border border-slate-200 rounded-pill text-slate-400">
                    {step.tag}
                  </span>
                </div>

                {/* Content block — 72% width */}
                <div className="md:w-[72%] flex flex-col justify-center">
                  <h3 className="font-sans font-semibold text-2xl md:text-3xl text-slate-900 tracking-tight mb-4">
                    {step.title}
                  </h3>
                  <p className="font-sans text-base text-slate-500 leading-relaxed max-w-[480px] text-pretty">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-16">
          <a
            href="/how-it-works"
            className="font-sans text-sm font-medium text-recovery-blue hover:text-recovery-hover transition-colors duration-200 inline-flex items-center gap-1.5 group"
          >
            See the full technical diagram
            <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
