import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Isolated perpetual typewriter — memoized, never causes parent re-renders
const CyclingText = React.memo(function CyclingText({ items }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), 2800);
    return () => clearInterval(t);
  }, [items.length]);

  return (
    <span
      className="relative inline-block overflow-hidden align-middle"
      style={{ minWidth: '15ch', verticalAlign: 'bottom' }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={items[index]}
          className="inline-block text-recovery-blue"
          initial={{ y: 32, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -32, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 180, damping: 22 }}
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
});

// Floating stat card — isolated leaf component
const FloatingStat = React.memo(function FloatingStat({ title, desc, delay, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 18, delay }}
      className={`absolute liquid-glass-dark rounded-card p-5 w-56 ${className}`}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1.5 h-1.5 rounded-full bg-signal-green animate-pulse-subtle" />
        <span className="font-mono text-[9px] font-medium tracking-widest text-slate-500 uppercase">
          Live
        </span>
      </div>
      <div className="font-mono text-xl font-semibold text-white tracking-tight mb-1 tabular-nums">
        {title}
      </div>
      <div className="font-sans text-xs text-slate-400 leading-snug">{desc}</div>
    </motion.div>
  );
});

// Perpetual mesh blob — GPU-only via CSS animations on transform
const MeshBlob = React.memo(function MeshBlob() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div
        className="absolute top-[-20%] right-[-10%] w-[65%] h-[65%] rounded-full animate-float opacity-25"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(36,87,217,0.3) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute bottom-[-15%] left-[-5%] w-[45%] h-[45%] rounded-full animate-float-delayed opacity-20"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(16,185,129,0.25) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />
    </div>
  );
});

export default function Hero() {
  const cycleItems = ['₹3L every month.', '70% of missed calls.', 'patients to rivals.'];

  return (
    <section
      id="main-content"
      className="relative w-full min-h-[100dvh] bg-command-black flex items-center pt-28 pb-20 overflow-hidden"
    >
      <MeshBlob />

      {/* Noise grain — pointer-events-none, low z-index, does NOT block interaction */}
      <div className="noise-grain" aria-hidden="true" />

      <div className="max-w-[1400px] w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative z-10">
        {/* Left: 7 columns — strict left-aligned, DESIGN_VARIANCE=8 */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Pre-title badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pill border border-white/[.07] bg-white/[.04]">
              <span className="w-1.5 h-1.5 rounded-full bg-signal-green animate-pulse-subtle" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                Live in 47 Indian Clinics
              </span>
            </div>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-[60px] font-semibold text-white leading-[1.07] tracking-tight mb-6 text-balance"
          >
            Your clinic is losing{' '}
            <br className="hidden md:block" />
            <CyclingText items={cycleItems} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-slate-400 leading-relaxed max-w-[560px] mb-10 text-pretty"
          >
            Every call your receptionist misses is a patient your competitor books. Engageo
            intercepts that call in{' '}
            <span className="text-white font-medium">8 seconds</span> — qualifies, books, sends
            the WhatsApp confirmation. While you&rsquo;re with your next patient.
          </motion.p>

          {/* Inline metrics strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-x-10 gap-y-4 mb-12 pt-8 border-t border-white/[.07]"
          >
            {[
              { val: '₹24K', label: 'Avg monthly recovery' },
              { val: '< 8s', label: 'Response time' },
              { val: '47+', label: 'Clinics live now' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="font-mono text-2xl font-semibold text-white tracking-tight tabular-nums">
                  {stat.val}
                </span>
                <span className="font-sans text-xs text-slate-500">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <a
              href="/audit"
              className="btn-primary py-4 px-8 text-base w-full sm:w-auto justify-center"
            >
              See what you&rsquo;re losing &mdash; Free Audit
            </a>
            <a
              href="/how-it-works"
              className="btn-ghost-dark py-4 px-8 text-base w-full sm:w-auto justify-center"
            >
              Watch a real recovery call
            </a>
          </motion.div>
        </div>

        {/* Right: 5 columns — orbital ring with floating stats */}
        <div className="lg:col-span-5 relative w-full min-h-[380px] lg:min-h-0 flex items-center justify-center mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.4 }}
            className="relative w-[320px] h-[320px] lg:w-[380px] lg:h-[380px]"
          >
            {/* Concentric rings */}
            <div className="absolute inset-0 rounded-full border border-dashed border-white/[.07] animate-[spin_90s_linear_infinite]" />
            <div
              className="absolute inset-[14%] rounded-full border border-white/[.05] animate-[spin_60s_linear_infinite_reverse]"
              style={{ borderStyle: 'dashed' }}
            />
            <div
              className="absolute inset-[30%] rounded-full border border-recovery-blue/20"
              style={{
                background: 'radial-gradient(circle, rgba(36,87,217,0.08) 0%, transparent 70%)',
              }}
            />
            {/* Center dot */}
            <div className="absolute inset-[42%] rounded-full bg-recovery-blue/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-recovery-blue animate-pulse-subtle" />
            </div>
            {/* Floating stats */}
            <FloatingStat
              title="8 seconds"
              desc="AI callback latency, preventing patient bounce."
              delay={0.65}
              className="-top-8 -left-20 lg:-left-24"
            />
            <FloatingStat
              title="₹2.4Cr"
              desc="Revenue recovered across 47 clinics so far."
              delay={0.8}
              className="-bottom-8 -right-20 lg:-right-20"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
