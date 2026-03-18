import React from 'react';
import { motion } from 'framer-motion';

const clinicBadges = [
  'Verified Hair Transplant, Delhi NCR',
  'Premium IVF Clinic, Bangalore',
  'Top Dental Implants, Mumbai',
  'Advanced Dermatology, Hyderabad',
  'Orthopaedic Specialists, Chennai',
  'Ophthalmology Centre, Pune',
];

// Isolated perpetual marquee — GPU-only via CSS transform, memoized
const MarqueeTrack = React.memo(function MarqueeTrack({ items }) {
  return (
    <div className="flex w-full overflow-hidden relative">
      <div
        className="absolute left-0 top-0 bottom-0 w-16 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to right, #080d1a, transparent)',
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-16 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to left, #080d1a, transparent)',
        }}
      />
      <div className="flex items-center gap-3 w-max animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 flex items-center gap-2 px-4 py-2 border border-white/[.07] rounded-pill font-mono text-[11px] text-slate-400 tracking-widest uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-recovery-blue/60 shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
});

export default function LogoBar() {
  return (
    <section
      className="w-full bg-command-black border-y border-white/[.06] py-5 lg:py-7 relative z-20 overflow-hidden"
      aria-label="Verified clinic partners"
    >
      <div className="max-w-[1400px] w-full mx-auto px-6 flex flex-col xl:flex-row items-center gap-8">
        {/* Pull quote — left-aligned, asymmetric layout */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0 flex items-center gap-4 py-2"
        >
          <div className="w-0.5 h-12 bg-signal-green rounded-full" aria-hidden="true" />
          <div className="flex flex-col gap-1">
            <span className="font-sans font-medium text-white italic text-lg tracking-tight leading-snug max-w-xs text-pretty">
              &ldquo;Recovered ₹6.2L in the first month.&rdquo;
            </span>
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
              Dr. Siddharth Rao — Hair Transplant, Delhi NCR
            </span>
          </div>
        </motion.div>

        {/* Kinetic marquee */}
        <div className="flex-1 w-full xl:w-auto min-w-0">
          <MarqueeTrack items={clinicBadges} />
        </div>
      </div>
    </section>
  );
}
