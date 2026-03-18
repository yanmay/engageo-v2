import React, { useState } from 'react';
import { motion } from 'framer-motion';

const specialties = [
  { id: 'hair', name: 'Hair Transplant', avgVal: 80000 },
  { id: 'dental', name: 'Dental Implants', avgVal: 60000 },
  { id: 'ivf', name: 'IVF / Fertility', avgVal: 150000 },
  { id: 'derm', name: 'Dermatology', avgVal: 15000 },
];

const fmt = (val) =>
  new Intl.NumberFormat('en-IN').format(val);

// Isolated animated number — spring transition on key change
const AnimatedNumber = React.memo(function AnimatedNumber({ value, prefix, className }) {
  return (
    <motion.span
      key={value}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 24 }}
      className={className}
    >
      {prefix}{fmt(value)}
    </motion.span>
  );
});

export default function Calculator() {
  const [specialtyIdx, setSpecialtyIdx] = useState(0);
  const [calls, setCalls] = useState(100);
  const [missRate, setMissRate] = useState(25);

  const spec = specialties[specialtyIdx];
  const missed = Math.floor(calls * (missRate / 100));
  const monthly = missed * spec.avgVal;
  const annual = monthly * 12;
  const recoverable = Math.floor(monthly * 0.43);

  return (
    <section className="w-full bg-command-black py-32 md:py-40 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-1/2 h-1/2 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at top left, rgba(196,33,38,0.07) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 w-full">
        {/* Header — left-aligned */}
        <div className="mb-16 max-w-2xl">
          <span className="font-mono text-[10px] uppercase tracking-widest mb-4 block" style={{ color: '#C42126' }}>
            Leakage Analysis
          </span>
          <h2 className="text-4xl md:text-[52px] font-semibold text-white tracking-tight leading-tight text-balance">
            Find out exactly how much you&rsquo;re losing.
          </h2>
        </div>

        {/* Asymmetric layout: 3/5 input + 2/5 output — proper CSS Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Input panel — 3 cols */}
          <div className="lg:col-span-3 space-y-8">

            {/* Specialty selector */}
            <div className="space-y-4">
              <label className="font-mono text-[10px] uppercase tracking-widest text-slate-500 block">
                Select specialty
              </label>
              <div className="grid grid-cols-2 gap-2">
                {specialties.map((s, idx) => (
                  <button
                    key={s.id}
                    id={`specialty-${s.id}`}
                    onClick={() => setSpecialtyIdx(idx)}
                    className={`py-3.5 px-4 rounded-xl border font-sans text-sm font-medium transition-all duration-200 text-left ${
                      specialtyIdx === idx
                        ? 'border-recovery-blue bg-recovery-dim text-recovery-blue'
                        : 'border-white/[.07] bg-command-surface/50 text-slate-400 hover:border-white/[.15] hover:text-slate-200'
                    }`}
                    aria-pressed={specialtyIdx === idx}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Calls slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label htmlFor="calls-slider" className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  Monthly inbound calls
                </label>
                <span className="font-mono text-lg font-semibold text-white tabular-nums">{calls}</span>
              </div>
              <input
                id="calls-slider"
                type="range"
                min="20"
                max="300"
                step="5"
                value={calls}
                onChange={(e) => setCalls(Number(e.target.value))}
                className="w-full cursor-pointer h-1.5 rounded-pill appearance-none"
                style={{ accentColor: '#2457D9' }}
              />
              <div className="flex justify-between font-mono text-[10px] text-slate-600">
                <span>20</span><span>300</span>
              </div>
            </div>

            {/* Miss rate slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label htmlFor="miss-slider" className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  Estimated miss rate
                </label>
                <span className="font-mono text-lg font-semibold text-white tabular-nums">{missRate}%</span>
              </div>
              <input
                id="miss-slider"
                type="range"
                min="10"
                max="50"
                step="1"
                value={missRate}
                onChange={(e) => setMissRate(Number(e.target.value))}
                className="w-full cursor-pointer h-1.5 rounded-pill appearance-none"
                style={{ accentColor: '#2457D9' }}
              />
              <div className="flex justify-between font-mono text-[10px] text-slate-600">
                <span>10%</span><span>50%</span>
              </div>
            </div>
          </div>

          {/* Output panel — 2 cols */}
          <div className="lg:col-span-2 liquid-glass-dark rounded-card p-8 flex flex-col gap-7">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-widest text-slate-500 mb-2">
                Monthly revenue at risk
              </p>
              <AnimatedNumber
                value={monthly}
                prefix="₹"
                className="font-mono text-4xl lg:text-5xl font-semibold tabular-nums block"
                style={{ color: '#C42126' }}
              />
              <p className="font-mono text-[9px] uppercase tracking-widest text-slate-600 mt-2">
                {missed} missed bookings · ₹{fmt(spec.avgVal)} avg value
              </p>
            </div>

            <div className="border-t border-white/[.07] pt-6">
              <p className="font-mono text-[9px] uppercase tracking-widest text-slate-500 mb-2">
                Annual pipeline loss
              </p>
              <AnimatedNumber
                value={annual}
                prefix="₹"
                className="font-mono text-2xl font-semibold text-slate-400 tabular-nums block"
              />
            </div>

            <div className="border-t border-white/[.07] pt-6">
              <p className="font-mono text-[9px] uppercase tracking-widest text-slate-500 mb-2">
                Engageo recovers in month 1
              </p>
              <AnimatedNumber
                value={recoverable}
                prefix="₹"
                className="font-mono text-2xl font-semibold text-signal-green tabular-nums block"
              />
            </div>

            <a href="/audit" className="btn-primary w-full justify-center py-4 text-sm mt-auto">
              Recover this revenue &rarr;
            </a>
          </div>

        </div>
      </div>

      {/* Red tint on big number since Tailwind can't do inline color via class on dynamic component */}
      <style>{`.loss-red { color: #C42126; }`}</style>
    </section>
  );
}
