import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

/* Custom Slider Component using pure CSS variables */
function CustomSlider({ label, min, max, step, value, onChange, valueDisplay }) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col mb-10 w-full group">
      <div className="flex justify-between items-center mb-4">
        <label className="font-sans font-bold text-[13px] tracking-widest uppercase text-white">
          {label}
        </label>
        <div className="font-mono font-bold text-[18px] text-white">
          {valueDisplay}
        </div>
      </div>

      <div className="relative w-full h-[1px] bg-white/10 rounded-full flex items-center">
        <div
          className="absolute left-0 top-0 h-full rounded-full pointer-events-none"
          style={{ backgroundColor: '#4F46E5', width: `${percentage}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute w-full h-full opacity-0 cursor-pointer z-10 touch-pan-x"
        />
        <div
          className="absolute w-[18px] h-[18px] rounded-full pointer-events-none transition-transform group-active:scale-125"
          style={{
            backgroundColor: '#6366F1', // Indigo/Purple thumb matching screenshot
            left: `calc(${percentage}% - 9px)`,
            top: '50%',
            transform: 'translateY(-50%)',
            boxShadow: '0 0 16px rgba(99, 102, 241, 0.8), 0 0 32px rgba(99, 102, 241, 0.4)'
          }}
        />
      </div>

      <div className="flex justify-between mt-3">
        <span className="font-mono text-[10px] text-white/40">{min}{label.includes('CALLS') ? ' calls' : 'K'}</span>
        <span className="font-mono text-[10px] text-white/40">{max}{label.includes('CALLS') ? ' calls' : 'K'}</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const [inboundCalls, setInboundCalls] = useState(20);
  const [caseValue, setCaseValue] = useState(18000);

  // Math logic matching screenshot
  const monthlyMissed = inboundCalls * 4;
  const totalLost = monthlyMissed * caseValue;

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN').format(val);
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-32 pb-20 bg-[#0B0C10] overflow-hidden">

      <style>
        {`
        @keyframes grid-scan {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .hero-grid {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          mask-image: radial-gradient(circle at center, black 10%, transparent 70%);
          -webkit-mask-image: radial-gradient(circle at center, black 10%, transparent 70%);
        }
        .laser-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #6366F1, transparent);
          box-shadow: 0 0 15px #6366F1, 0 0 30px #6366F1;
          animation: grid-scan 6s linear infinite;
        }
        `}
      </style>

      {/* Cybernetic Grid Background */}
      <div className="absolute inset-0 hero-grid pointer-events-none mix-blend-screen overflow-hidden">
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="laser-line"></div>
        </div>
      </div>

      {/* Background abstract texture/glow */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#6366F1] blur-[140px] mix-blend-screen pointer-events-none rounded-full"
      />

      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#34D399] blur-[150px] mix-blend-screen pointer-events-none rounded-full"
      />

      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

        {/* Left Column - Inputs */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="font-mono uppercase text-[10px] tracking-[0.2em] font-medium text-white/50 mb-6">
            LOSS CALCULATOR
          </div>

          <h1 className="font-serif text-[42px] md:text-[56px] lg:text-[64px] font-bold text-white leading-[1.05] tracking-tight mb-2">
            Exactly how much is
            <br />
            <span className="italic font-light text-[#E63B2E]" style={{ textShadow: '0 0 30px rgba(230,59,46,0.3)' }}>your receptionist missing?</span>
          </h1>

          <p className="font-sans text-[15px] md:text-[16px] text-white/60 leading-relaxed max-w-md mt-6 mb-16">
            Use your real clinic numbers. If you spend on Google or Meta Ads, this is the revenue you are actively throwing away every single month.
          </p>

          <div className="w-full max-w-[400px]">
            <CustomSlider
              label="MISSED CALLS PER WEEK"
              min={5} max={100} step={1} value={inboundCalls}
              onChange={setInboundCalls}
              valueDisplay={`${inboundCalls} calls`}
            />
            <CustomSlider
              label="AVERAGE CASE VALUE (₹)"
              min={2000} max={150000} step={1000} value={caseValue}
              onChange={setCaseValue}
              valueDisplay={`₹${caseValue / 1000}K`}
            />
          </div>

          <p className="font-mono text-[11px] text-white/40 leading-relaxed max-w-[380px] mt-12">
            Based on recovery data from <span className="text-white font-bold">47 Indian specialist clinics</span>. Engageo's average call-back success rate is <span className="text-[#6366F1]">68%</span>.
          </p>
        </motion.div>

        {/* Right Column - Output Card */}
        <motion.div
          className="w-full flex justify-center lg:justify-end relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
        >
          {/* Floating Accents */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 bg-[#0B0C10]/80 border border-white/10 text-white/80 font-mono text-[10px] tracking-widest px-4 py-2 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-20 hidden md:flex items-center gap-2 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 bg-[#E63B2E] rounded-full animate-pulse shadow-[0_0_8px_#E63B2E]"></span>
            Missed Call Detected
          </motion.div>

          <motion.div
            animate={{ y: [8, -8, 8] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-8 -right-8 bg-[#34D399]/10 border border-[#34D399]/30 text-[#34D399] font-mono text-[10px] tracking-widest px-4 py-2 rounded-full shadow-[0_10px_30px_rgba(52,211,153,0.15)] z-20 hidden md:flex items-center gap-2 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 bg-[#34D399] rounded-full shadow-[0_0_8px_#34D399]"></span>
            AI Recovery Triggered
          </motion.div>

          <div className="w-full max-w-[460px] bg-[#F5F3ED] rounded-[32px] p-8 md:p-12 shadow-[0_30px_100px_-20px_rgba(99,102,241,0.25)] relative border border-white/5">

            <div className="text-center w-full">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8C857B] mb-4">
                GROSS REVENUE LOST THIS MONTH
              </p>

              <AnimatePresence mode="popLayout">
                <motion.div
                  key={totalLost}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="font-mono text-[48px] md:text-[64px] font-bold text-[#D95D39] leading-none mb-3 tracking-tighter"
                >
                  ₹{formatCurrency(totalLost)}
                </motion.div>
              </AnimatePresence>

              <p className="font-mono text-[12px] text-[#8C857B] mb-10">
                That's ~ <span className="font-bold">{monthlyMissed} patients</span> booking with competitors.
              </p>
            </div>

            {/* Inner White Box */}
            <div className="w-full bg-white rounded-[20px] p-6 shadow-sm border border-[#E8E6E1]">
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] font-semibold text-[#A39D94] mb-3">
                THE FIX
              </p>

              <p className="font-mono text-[13px] text-[#1A1A1A] leading-[1.6] mb-8">
                Engageo costs ₹25,000/mo. You only need to recover <span className="font-bold">{(25000 / caseValue).toFixed(0) || 2}</span> of those {monthlyMissed} patients to break entirely even.
              </p>

              <a
                href="/free-audit.html"
                className="w-full flex justify-center bg-[#111111] hover:bg-[#222222] text-white font-sans text-[14px] font-bold py-4 rounded-xl transition-all hover:-translate-y-0.5"
              >
                Claim Free Audit &rarr;
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
