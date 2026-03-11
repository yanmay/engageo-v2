import React, { useState, useEffect, useRef } from 'react';
import { useModal } from '../context/ModalContext';

// ─── Animated number counter ──────────────────────────────────────────────────
function AnimatedNumber({ value, prefix = '', suffix = '' }) {
  const [display, setDisplay] = useState(value);
  const prevRef = useRef(value);
  const rafRef = useRef(null);

  useEffect(() => {
    const start = prevRef.current;
    const end = value;
    const duration = 600;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out expo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(start + (end - start) * eased);
      setDisplay(current);
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
      else prevRef.current = end;
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [value]);

  return (
    <span>
      {prefix}
      {display.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}

// ─── Custom slider ────────────────────────────────────────────────────────────
function Slider({ value, min, max, step, onChange, label, format }) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-baseline">
        <label className="font-mono text-[10px] uppercase tracking-widest text-subtle font-semibold">
          {label}
        </label>
        <span className="font-sans text-lg font-bold text-obsidian tracking-tight">
          {format(value)}
        </span>
      </div>

      <div className="relative h-2 bg-obsidian/5 overflow-visible border border-obsidian/20">
        {/* Filled track */}
        <div
          className="absolute top-0 left-0 h-full bg-[var(--green)] transition-none"
          style={{ width: `${pct}%` }}
        />
        {/* Native input overlaid for interaction */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        />
        {/* Thumb */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-white border-2 border-obsidian retro-shadow pointer-events-none transition-none"
          style={{ left: `${pct}%` }}
        />
      </div>

      <div className="flex justify-between">
        <span className="font-mono text-[9px] text-muted">{format(min)}</span>
        <span className="font-mono text-[9px] text-muted">{format(max)}</span>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function ROICalculator() {
  const { openModal } = useModal();
  const [specialty, setSpecialty] = useState('Hair Transplant');
  const [monthlyCalls, setMonthlyCalls] = useState(120);
  const [missRate, setMissRate] = useState(25);

  // ── Specialty Config ──────────────────────────────────────────────────────
  const specialtyConfig = {
    'Hair Transplant': { avgValue: 80000 },
    'Dental Implants': { avgValue: 60000 },
    'Dermatology': { avgValue: 15000 },
    'IVF / Fertility': { avgValue: 150000 }
  };

  const avgCaseValue = specialtyConfig[specialty]?.avgValue || 18000;

  // ── Math ──────────────────────────────────────────────────────────────────
  const RECOVERY_RATE = 0.68;       // 68% recovery rate (from pilot data)
  const ENGAGEO_COST = 25000;       // Tier 1 price

  const monthlyMissed = Math.round((monthlyCalls * missRate) / 100);
  const monthlyLoss = monthlyMissed * avgCaseValue;
  const annualLoss = monthlyLoss * 12;
  const engageoRecovers = Math.round(monthlyLoss * RECOVERY_RATE);
  const netGain = engageoRecovers - ENGAGEO_COST;
  const roiMultiple = (engageoRecovers / ENGAGEO_COST).toFixed(1);

  // intensity band for colour
  const lossIntensity = Math.min(monthlyLoss / 1_000_000, 1); // caps at 10L

  return (
    <section className="py-32 px-6 md:px-12 lg:px-20 relative z-10 overflow-hidden">

      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(ellipse, var(--green) 0%, transparent 65%)`,
          opacity: 0.04 + lossIntensity * 0.06,
          transition: 'background 0.8s ease, opacity 0.8s ease',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="section-label mb-6">Revenue Calculator</div>
          <h2 className="font-sans text-3xl md:text-5xl font-bold text-obsidian tracking-tighter mb-4">
            See What You're{' '}
            <span className="gradient-text">Actually Losing</span>
          </h2>
          <p className="text-subtle text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Adjust the sliders to match your clinic. Watch your number appear.
          </p>
        </div>

        {/* Card */}
        <div className="bg-[var(--surface)] border border-[var(--ink-faint)] rounded-[2.5rem] relative overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x divide-obsidian/5 border-b lg:border-b-0 border-obsidian/10 lg:border-obsidian/5">

            {/* Left — inputs */}
            <div className="p-6 md:p-10 space-y-8 md:space-y-10 border-b lg:border-b-0 border-obsidian/10">
              {/* Specialty Dropdown */}
              <div className="space-y-3">
                <label className="font-mono text-[10px] uppercase tracking-widest text-subtle font-semibold">
                  Select Specialty
                </label>
                <select 
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="w-full bg-white border border-obsidian/20 rounded-lg px-4 py-3 font-sans text-sm font-bold text-obsidian focus:outline-none focus:border-[var(--recovery-blue)] transition-all"
                  style={{ appearance: 'none' }}
                >
                  {Object.keys(specialtyConfig).map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <Slider
                value={monthlyCalls}
                min={20}
                max={200}
                step={5}
                onChange={setMonthlyCalls}
                label="Monthly Inbound Calls"
                format={(v) => `${v} calls/mo`}
              />
              <Slider
                value={missRate}
                min={10}
                max={45}
                step={1}
                onChange={setMissRate}
                label="Estimated Miss Rate"
                format={(v) => `${v}%`}
              />

              {/* Context line */}
              <p className="text-[11px] text-muted leading-relaxed">
                Avg. case value for {specialty}: <span className="text-obsidian font-semibold">₹{avgCaseValue.toLocaleString('en-IN')}</span>.
                Engageo's average call-back success rate is <span className="text-brand font-semibold">68%</span>.
              </p>
            </div>

            {/* Right — output */}
            <div className="p-6 md:p-10 flex flex-col justify-between gap-6 md:gap-8">

              {/* Loss card */}
              <div className="space-y-1">
                <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-subtle font-semibold">
                  Monthly revenue at risk
                </span>
                <div className="text-4xl md:text-5xl font-bold tracking-tighter text-obsidian leading-none">
                  <AnimatedNumber value={monthlyLoss} prefix="₹" />
                </div>
                <div className="mt-2 flex flex-col gap-1">
                  <p className="text-[11px] md:text-xs text-muted">
                    Annual revenue at risk: <span className="text-obsidian font-semibold">₹{annualLoss.toLocaleString('en-IN')}</span>
                  </p>
                  <p className="text-[11px] md:text-[10px] text-muted/60 bg-obsidian/5 rounded px-2 py-0.5 w-fit">
                    Based on {monthlyMissed} missed calls/mo
                  </p>
                </div>
              </div>

              {/* Divider with arrow */}
              <div className="flex items-center gap-3 py-2 md:py-0">
                <div className="flex-1 h-px bg-obsidian/10" />
                <div className="w-8 h-8 rounded-full bg-[var(--green)]/5 border border-[var(--green)]/20 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 2v8M3 7l3 3 3-3" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex-1 h-px bg-obsidian/10" />
              </div>

              {/* Recovery card */}
              <div className="space-y-1">
                <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-[var(--green)] font-semibold">
                  Engageo recovers for you
                </span>
                <div className="text-4xl md:text-5xl font-bold tracking-tighter leading-none text-[var(--green)] py-1 md:py-0">
                  <AnimatedNumber value={engageoRecovers} prefix="₹" />
                </div>
                <p className="text-[11px] md:text-xs text-[var(--ink)] opacity-70 leading-relaxed md:leading-normal mt-1 md:mt-0">
                  Net gain after Engageo fee:{' '}
                  <span className="font-semibold text-[var(--ink)]">
                    <AnimatedNumber value={netGain} prefix="₹" />
                  </span>{' '}
                  <span className="hidden md:inline">·</span> <br className="block md:hidden" />
                  <span className="text-[var(--green)] font-bold">{roiMultiple}× ROI</span>
                </p>
              </div>

              {/* CTA */}
              <div className="pt-2 md:pt-0">
                <button
                  onClick={openModal}
                  className="group w-full py-3.5 md:py-4 bg-[var(--green)] text-[var(--parchment)] text-[12px] md:text-[13px] font-bold tracking-wide border border-[var(--ink-faint)] rounded-full flex items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-200 active:scale-[0.98] shadow-lg"
                >
                  <span>Get My Free Recovery Audit →</span>
                </button>

                <p className="text-[10px] text-center text-muted/60 mt-3 md:mt-2">
                  Free audit · No credit card · Results in 24 hrs
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
