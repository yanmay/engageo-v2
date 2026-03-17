import React, { useState, useEffect, useRef } from 'react';
import { motion as Motion, useInView as UseInView } from 'framer-motion';
import { useModal } from '../context/ModalContext';
import gsap from 'gsap';
import { NumberTicker } from './ui/NumberTicker';

// ─── Main component ───────────────────────────────────────────────────────────
function Slider({ value, min, max, step, onChange, label, format }) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-baseline">
        <label className="font-data text-[10px] tracking-widest text-white/40 font-bold">
          {label}
        </label>
        <span className="font-sans text-xl font-bold text-white tracking-tight">
          {format(value)}
        </span>
      </div>

      <div className="relative h-1.5 bg-white/10 overflow-visible rounded-full">
        {/* Filled track */}
        <div
          className="absolute top-0 left-0 h-full bg-[var(--recovery-blue)] transition-all duration-300 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.3)]"
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
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-[var(--recovery-blue)] rounded-full pointer-events-none transition-all duration-200 shadow-lg"
          style={{ left: `${pct}%` }}
        />
      </div>

      <div className="flex justify-between">
        <span className="font-data text-[9px] text-white/20 font-bold">{format(min)}</span>
        <span className="font-data text-[9px] text-white/20 font-bold">{format(max)}</span>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function ROICalculator() {
  useModal();
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  
  const [specialty, setSpecialty] = useState('Hair Transplant');
  const [monthlyCalls, setMonthlyCalls] = useState(120);
  const [missRate, setMissRate] = useState(25);

  // ── Specialty Config ──────────────────────────────────────────────────────
  const specialtyConfig = {
    'Hair Transplant': { avgValue: 80000, color: '#2563EB' },
    'Dental Implants': { avgValue: 60000, color: '#10B981' },
    'Dermatology': { avgValue: 15000, color: '#D97706' },
    'IVF / Fertility': { avgValue: 150000, color: '#7C3AED' }
  };

  const avgCaseValue = specialtyConfig[specialty]?.avgValue || 18000;

  // ── Math Logic (PRD 5.1 & 7.1) ─────────────────────────────────────────────
  const RECOVERY_RATE = 0.68;       // 68% recovery rate (from pilot data)
  const ENGAGEO_COST = 25000;       // Tier 1 price

  const monthlyMissed = Math.round((monthlyCalls * missRate) / 100);
  const monthlyLoss = monthlyMissed * avgCaseValue;
  const annualLoss = monthlyLoss * 12;
  const engageoRecovers = Math.round(monthlyLoss * RECOVERY_RATE);
  const netGain = engageoRecovers - ENGAGEO_COST;
  const roiMultiple = (engageoRecovers / ENGAGEO_COST).toFixed(1);

  // Intensity for background animations
  const lossIntensity = Math.min(monthlyLoss / 1_000_000, 1); 

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-calc-header", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      gsap.from(cardRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-24 md:py-40 px-6 md:px-24 bg-[var(--command-black)] relative overflow-hidden"
    >
      {/* Dynamic Background Flare using Recovery Blue */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] rounded-full pointer-events-none blur-[120px]"
        style={{
          background: `radial-gradient(ellipse, var(--recovery-blue) 0%, transparent 65%)`,
          opacity: 0.03 + lossIntensity * 0.04,
          transition: 'background 0.8s ease, opacity 0.8s ease',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header (PRD Tone: "Silent Loss") */}
        <div className="text-center mb-16 md:mb-24 reveal-calc-header">
          <div className="font-data text-[var(--recovery-blue)] text-[10px] tracking-widest mb-4 font-bold">Revenue leakage diagnostic</div>
          <h2 className="text-4xl md:text-6xl text-white mb-8 tracking-tighter italic font-drama">
            End the bleed. <br />
            <span className="text-[var(--loss-red)] not-italic underline decoration-[var(--loss-red)]/30 underline-offset-8">Calculate your recovery.</span>
          </h2>
          <p className="max-w-xl mx-auto text-white/40 text-lg font-medium leading-relaxed">
            Adjust the metrics to match your current clinic operations. See why missing 1 in 4 calls is costing you more than your ad spend.
          </p>
        </div>

        {/* Diagnostic Interface */}
        <div 
          ref={cardRef}
          className="bg-white/[0.03] rounded-premium border border-white/10 shadow-[0_32px_80px_-16px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left: Configuration Panel */}
            <div className="lg:col-span-5 p-8 md:p-12 space-y-12 bg-white/[0.02] border-b lg:border-b-0 lg:border-r border-white/10">
              
              <div className="space-y-4">
                <label className="font-data text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
                  Clinical Specialty
                </label>
                <div className="relative group">
                  <select 
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 font-sans text-sm font-bold text-white focus:outline-none focus:border-[var(--recovery-blue)] transition-all cursor-pointer appearance-none shadow-sm"
                  >
                    {Object.keys(specialtyConfig).map(s => (
                      <option key={s} value={s} className="bg-[var(--command-black)]">{s}</option>
                    ))}
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>

              <Slider
                value={monthlyCalls}
                min={20}
                max={400}
                step={10}
                onChange={setMonthlyCalls}
                label="Monthly Inbound Volume"
                format={(v) => `${v} calls/mo`}
              />

              <Slider
                value={missRate}
                min={10}
                max={45}
                step={1}
                onChange={setMissRate}
                label="Estimated Miss Rate (%)"
                format={(v) => `${v}%`}
              />

              <div className="pt-8 border-t border-white/10">
                <p className="text-[11px] text-white/40 leading-relaxed italic font-medium">
                  Average Procedure Value: <span className="text-white font-bold">₹{avgCaseValue.toLocaleString('en-IN')}</span> <br />
                  Engageo Success Rate: <span className="text-[var(--recovery-blue)] font-bold">68% recovery avg.</span>
                </p>
              </div>
            </div>

            {/* Right: Results Dashboard */}
            <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-between overflow-hidden relative">
              {/* Scanline pattern for diagnostic look */}
              <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
              
              <div className="space-y-16">
                {/* Metric 1: Loss */}
                <div className="group">
                  <div className="font-data text-[10px] tracking-widest text-white/40 font-bold mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--loss-red)] shadow-[0_0_8px_var(--loss-red)]" />
                    Monthly revenue at risk
                  </div>
                  <div className="text-6xl md:text-8xl font-bold tracking-tighter text-white transition-colors duration-500 group-hover:text-[var(--loss-red)] flex items-baseline tabular-nums">
                    <span className="mr-2">₹</span>
                    <NumberTicker value={monthlyLoss} />
                  </div>
                  <div className="mt-4 flex items-center gap-6">
                    <div className="font-data text-[11px] font-bold text-white/20 uppercase tracking-widest">
                      Annual Loss: <span className="text-white">₹{(annualLoss/100000).toFixed(1)}L</span>
                    </div>
                    <div className="h-4 w-[1px] bg-white/10" />
                    <div className="font-data text-[11px] font-bold text-white/20 uppercase tracking-widest">
                      Missed Leads: <span className="text-white">{monthlyMissed}</span>
                    </div>
                  </div>
                </div>

                {/* Metric 2: Recovery */}
                <div className="p-8 md:p-10 rounded-[2rem] bg-[var(--signal-green)]/10 border border-[var(--signal-green)]/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--signal-green)]/10 blur-3xl rounded-full" />
                  
                  <div className="relative z-10">
                    <div className="font-data text-[10px] tracking-widest text-[var(--signal-green)] font-bold mb-4 flex items-center gap-2">
                      Engageo monthly recovery
                    </div>
                    <div className="text-5xl md:text-7xl font-bold tracking-tighter text-[var(--signal-green)] mb-6 flex items-baseline tabular-nums">
                      <span className="mr-2">₹</span>
                      <NumberTicker value={engageoRecovers} />
                    </div>
                    <div className="flex flex-wrap gap-x-8 gap-y-2">
                       <div className="text-xs font-bold text-white/70 flex items-center gap-2">
                          Net Gain: <span className="text-white">₹{netGain.toLocaleString('en-IN')}</span>
                       </div>
                       <div className="text-xs font-bold text-[var(--signal-green)] flex items-center gap-2">
                          ROI Multiple: <span className="bg-[var(--signal-green)] text-white px-2 py-0.5 rounded text-[10px]">{roiMultiple}x</span>
                       </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA (PRD Requirement) */}
              <div className="mt-16 pt-8 border-t border-white/10">
                <button 
                  onClick={useModal().openModal}
                  className="btn-magnetic group w-full py-5 bg-[var(--recovery-blue)] text-white rounded-full font-bold text-[11px] tracking-[0.2em] uppercase relative shadow-2xl overflow-hidden shadow-blue-500/10 transition-colors"
                >
                  <span className="relative z-10">Recover This Revenue →</span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
                <p className="text-center font-data text-[9px] text-white/20 uppercase tracking-widest mt-6 font-bold italic">
                  * This is what Engageo recovers for you. No setup fees. No long contracts.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
