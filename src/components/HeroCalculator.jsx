import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/* Custom Slider Component using pure CSS variables */
function CustomSlider({ label, min, max, step, value, onChange, valueDisplay }) {
  // Calculate percentage for the track gradient fill
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col mb-8 last:mb-0 w-full group">
      <div className="flex justify-between items-center mb-3">
        <label className="font-sans font-semibold text-[14px] md:text-[15px]" style={{ color: 'var(--ink)' }}>
          {label}
        </label>
        <div className="font-sans font-bold text-[15px] md:text-[16px]" style={{ color: 'var(--green)' }}>
          {valueDisplay}
        </div>
      </div>

      {/* Range input container */}
      <div className="relative w-full h-2 rounded-full flex items-center" style={{ backgroundColor: 'var(--ink-faint)' }}>
        {/* Active track fill */}
        <div
          className="absolute left-0 top-0 h-full rounded-full pointer-events-none"
          style={{
            backgroundColor: 'var(--green)',
            width: `${percentage}%`
          }}
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
        {/* Custom thumb (visually bound to the input value via absolute positioning) */}
        <div
          className="absolute w-5 h-5 rounded-full shadow-sm pointer-events-none transition-transform group-active:scale-110"
          style={{
            backgroundColor: 'var(--recovery-blue)',
            left: `calc(${percentage}% - 10px)`, // center the 20px thumb
            top: '50%',
            transform: 'translateY(-50%)'
          }}
        />
      </div>
    </div>
  );
}

export default function HeroCalculator() {
  const [inboundCalls, setInboundCalls] = useState(150);
  const [caseValue, setCaseValue] = useState(65000);
  const [missedPercent, setMissedPercent] = useState(35);

  // lost = (slider1 × (slider3/100)) × (slider2 × 0.20)
  // Round to nearest 1000
  const rawLost = (inboundCalls * (missedPercent / 100)) * (caseValue * 0.20);
  const totalLost = Math.round(rawLost / 1000) * 1000;

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN').format(val);
  };

  const getCtaProps = (lost) => {
    if (lost < 100000) {
      return { text: "See how much you're actually losing →" };
    } else if (lost <= 300000) {
      return { text: "Recover this revenue — Free Audit →" };
    } else {
      // > 300000
      const lakhs = (lost / 100000).toFixed(1).replace('.0', '');
      return { text: `₹${lakhs}L is worth a 12-minute call — Book Now →` };
    }
  };

  const cta = getCtaProps(totalLost);

  return (
    <section
      className="w-full flex justify-center py-[48px] md:py-[80px]"
      style={{ backgroundColor: 'var(--parchment)' }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

        {/* Left/Top Content */}
        <div className="lg:col-span-5 flex flex-col items-start w-full">
          <div
            className="font-mono uppercase font-bold mb-4"
            style={{
              color: 'var(--clinic-stone)',
              letterSpacing: '2px',
              fontSize: '11px'
            }}
          >
            — YOUR NUMBER
          </div>
          <h2
            className="font-sans font-bold leading-[1.1] mb-4 text-[28px] md:text-[40px]"
            style={{ color: 'var(--ink)' }}
          >
            What is your clinic actually losing?
          </h2>
          <p
            className="font-sans leading-relaxed text-[16px]"
            style={{ color: 'var(--clinic-slate)' }}
          >
            Adjust the sliders. The number that appears is money that left your clinic last month.
          </p>
        </div>

        {/* Right/Bottom Calculator Card */}
        <div className="lg:col-span-7 w-full">
          <div
            className="w-full bg-white shadow-sm flex flex-col p-[24px] md:p-[40px]"
            style={{
              border: '1px solid var(--clinic-silver)',
              borderRadius: '8px'
            }}
          >

            {/* Sliders Container */}
            <div className="w-full flex flex-col mb-10 pb-8" style={{ borderBottom: '1px solid var(--ink-faint)' }}>
              <CustomSlider
                label="Monthly inbound calls"
                min={50} max={500} step={10} value={inboundCalls}
                onChange={setInboundCalls}
                valueDisplay={`${inboundCalls} calls`}
              />
              <CustomSlider
                label="Average case value"
                min={10000} max={200000} step={5000} value={caseValue}
                onChange={setCaseValue}
                valueDisplay={`₹${formatCurrency(caseValue)}`}
              />
              <CustomSlider
                label="Calls missed at peak"
                min={10} max={60} step={5} value={missedPercent}
                onChange={setMissedPercent}
                valueDisplay={`${missedPercent}%`}
              />
            </div>

            {/* Output Display */}
            <div className="w-full flex flex-col items-center text-center">
              <div
                className="font-sans font-bold leading-none mb-2 tracking-tight flex flex-col md:flex-row items-center gap-2 text-[36px] md:text-[56px]"
                style={{ color: 'var(--loss-red)' }}
              >
                ₹{formatCurrency(totalLost)}
                <span
                  className="font-normal tracking-normal text-[20px] ml-0 md:ml-1 mt-1 md:mt-2"
                  style={{ color: 'var(--ink)', opacity: 0.6 }}
                >
                  lost last month
                </span>
              </div>

              <div
                className="font-sans font-medium mb-6 text-[13px]"
                style={{ color: 'var(--clinic-stone)' }}
              >
                Based on a 20% conversion rate from answered call to booking.
              </div>

              <Link
                to="/audit"
                className="font-sans font-bold transition-all hover:underline text-[16px]"
                style={{
                  color: 'var(--recovery-blue)',
                  textDecorationColor: 'var(--recovery-blue)'
                }}
              >
                {cta.text}
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
