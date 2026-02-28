import React from 'react';
import { useModal } from '../context/ModalContext';

export default function Pricing() {
  const { openModal } = useModal();
  return (
    <section className="py-32 px-6 md:px-12 lg:px-20 border-b border-border relative z-10 bg-canvas">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16">
          <div className="section-label justify-center mb-6">Investment</div>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-obsidian tracking-tighter mb-4">
            Two Ways We Work With You
          </h2>
          <p className="text-subtle text-base max-w-xl mx-auto">
            Choose the path that fits where your clinic is right now.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-start">

          {/* PATH A */}
          <div className="group relative p-8 flex flex-col transition-all duration-200 bg-white border-2 border-obsidian retro-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
            {/* Brand line accent at top */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand" />

            <div className="mb-5 pt-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand block mb-2 font-mono">PATH A</span>
              <span className="text-xl font-bold text-obsidian tracking-tight">Missed Call Recovery</span>
            </div>

            <p className="text-sm text-subtle mb-6 leading-relaxed">
              You already get inbound calls. We make sure none go unanswered. Every missed call is answered by AI, qualified, and booked to your calendar automatically.
            </p>

            <div className="mb-8 flex flex-col gap-1">
              <span className="text-3xl font-bold text-obsidian tracking-tighter">₹20,000 – ₹35,000</span>
              <span className="text-sm text-subtle">/ month</span>
            </div>

            <ul className="space-y-3 mb-8 flex-1 border-t-2 border-obsidian/10 pt-6">
              {['AI voice callback in 8 seconds', 'Google Calendar booking', 'WhatsApp confirmation sent', '24-hour appointment reminder', 'Live monitoring dashboard'].map((f) => (
                <li key={f} className="flex gap-3 text-sm text-subtle items-start">
                  <span className="text-brand font-bold mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <button
              onClick={openModal}
              className="w-full py-3.5 text-sm font-bold transition-all border-2 border-brand text-brand bg-white hover:bg-brand hover:text-white duration-150">
              Start Recovery →
            </button>
          </div>

          {/* PATH B */}
          <div className="group relative p-8 flex flex-col transition-all duration-200 overflow-hidden border-2 border-obsidian"
            style={{
              background: '#1E1A16',
              boxShadow: '6px 6px 0px 0px #3D5AFE',
            }}
          >
            {/* Dot grid overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

            {/* Best value badge */}
            <div className="absolute -top-px right-6">
              <span className="inline-block bg-brand text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 shadow-sm font-mono border-2 border-white/20">
                Most Popular
              </span>
            </div>

            <div className="mb-5 relative z-10 pt-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand block mb-2 font-mono">PATH B</span>
              <span className="text-xl font-bold text-white tracking-tight">Lead Gen + Recovery</span>
            </div>

            <p className="text-sm text-white/60 mb-6 leading-relaxed relative z-10">
              We run your Meta and Google Ads, drive inbound calls, and our system converts every single one into a confirmed booking.
            </p>

            <div className="mb-8 flex flex-col gap-1 relative z-10">
              <span className="text-3xl font-bold text-white tracking-tighter">₹45,000 – ₹90,000</span>
              <span className="text-sm text-white/50">/ month (incl. ad spend)</span>
              <span className="text-[10px] text-white/30 italic">Ad spend passed through at cost. No markup.</span>
            </div>

            <ul className="space-y-3 mb-8 flex-1 border-t-2 border-white/10 pt-6 relative z-10">
              {['Everything in Path A', 'Meta & Google Ads management', 'Full-funnel WhatsApp automation', 'Weekly ROI report', 'Campaign optimisation'].map((f) => (
                <li key={f} className="flex gap-3 text-sm text-white/80 items-start">
                  <span className="text-brand font-bold mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <button
              onClick={openModal}
              className="w-full py-3.5 text-sm font-bold relative z-10 transition-all bg-brand text-white border-2 border-white/20 hover:translate-x-[2px] hover:translate-y-[2px] duration-150">
              Book a Strategy Call →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
