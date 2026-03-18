import React from 'react';
import { motion } from 'framer-motion';

const fits = [
  {
    num: '01',
    title: 'Hair Transplant Clinics',
    label: 'First close',
    desc: '60–120 calls a day. One receptionist. The math doesn\'t work — and you already know it. Engageo intercepts every overflow call before the patient moves on.',
    stat: '120+ calls/day handled',
  },
  {
    num: '02',
    title: 'Dental and Dermatology Clinics',
    label: 'Best fit',
    desc: 'You\'re paying ₹8,000 per click on Google. Your receptionist is letting those patients go to voicemail. We recover that spend, not just the call.',
    stat: '₹8K+ per lead protected',
  },
  {
    num: '03',
    title: 'Fertility and IVF Clinics',
    label: 'Month 2 onwards',
    desc: 'IVF patients call three clinics in one evening. The first voice they hear wins the cycle. Our Hinglish AI voice answers with empathy, not a menu.',
    stat: 'First voice wins',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 120, damping: 20 },
  },
};

export default function WhoItsFor() {
  return (
    <section className="w-full bg-command-black py-32 md:py-40 relative overflow-hidden">
      <div
        className="absolute bottom-0 left-0 w-2/5 h-1/2 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at bottom left, rgba(36,87,217,0.07) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10">
        <div className="mb-20 max-w-xl">
          <span className="section-label">Honest Fit</span>
          <h2 className="text-4xl md:text-[52px] font-semibold text-white tracking-tight leading-tight text-balance">
            Three clinics. That&rsquo;s the whole list.
          </h2>
        </div>

        {/* Asymmetric 12-col divide-y list — not equal cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          className="flex flex-col border-t"
          style={{ borderColor: 'rgba(255,255,255,0.07)' }}
        >
          {fits.map((fit) => (
            <motion.div
              key={fit.num}
              variants={itemVariants}
              className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start group"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
            >
              {/* Step number — 1 col */}
              <div className="md:col-span-1">
                <span className="font-mono text-xs text-slate-600 font-semibold">{fit.num}</span>
              </div>

              {/* Content — 6 cols */}
              <div className="md:col-span-6">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-sans font-semibold text-xl text-white tracking-tight">
                    {fit.title}
                  </h3>
                  <span
                    className="inline-flex px-2.5 py-1 rounded-pill font-mono text-[9px] uppercase tracking-widest text-slate-500"
                    style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.03)' }}
                  >
                    {fit.label}
                  </span>
                </div>
                <p className="font-sans text-sm text-slate-400 leading-relaxed max-w-[480px] text-pretty">
                  {fit.desc}
                </p>
              </div>

              {/* Stat — 5 cols, right-aligned */}
              <div className="md:col-span-5 flex md:justify-end items-start">
                <div
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl"
                  style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.03)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-signal-green animate-pulse-subtle shrink-0" aria-hidden="true" />
                  <span className="font-mono text-xs text-slate-400 whitespace-nowrap">{fit.stat}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Not for you */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="mt-16 p-8 rounded-card"
          style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}
        >
          <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600 mb-3">Not for you if</p>
          <p className="font-sans text-sm text-slate-400 leading-relaxed max-w-[640px] text-pretty">
            You run a general practice with under 50 calls a month, a hospital with a procurement
            committee, or a clinic that already has a full-time call centre. Engageo is not the
            right product for you, and we&rsquo;d rather tell you now.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
