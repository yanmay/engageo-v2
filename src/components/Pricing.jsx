import React from 'react';
import { useModal } from '../context/ModalContext';

export default function Pricing() {
  const { openModal } = useModal();
  return (
    <section className="py-32 px-6 md:px-12 lg:px-20 border-b border-border relative z-10 bg-canvas">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-obsidian tracking-tighter mb-4">
            Two Ways We Work With You
          </h2>
          <p className="text-subtle text-base max-w-xl mx-auto">
            Choose the path that fits where your clinic is right now.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-start">

          {/* PATH A */}
          <div className="group relative p-8 rounded-2xl flex flex-col transition-all duration-400 bg-white border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1">
            {/* Pinstripe accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand/40 via-brand/20 to-transparent rounded-l-2xl" />

            <div className="mb-5 pl-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand block mb-2 font-mono">PATH A</span>
              <span className="text-xl font-bold text-obsidian tracking-tight">Missed Call Recovery</span>
            </div>

            <p className="text-sm text-subtle mb-6 leading-relaxed pl-2">
              You already get inbound calls. We make sure none go unanswered. Every missed call is answered by AI, qualified, and booked to your calendar automatically.
            </p>

            <div className="mb-8 flex flex-col gap-1 pl-2">
              <span className="text-3xl font-bold text-obsidian tracking-tighter">₹20,000 – ₹35,000</span>
              <span className="text-sm text-subtle">/ month</span>
            </div>

            <ul className="space-y-3 mb-8 flex-1 border-t border-border/60 pt-6">
              {['AI voice callback in 8 seconds', 'Google Calendar booking', 'WhatsApp confirmation sent', '24-hour appointment reminder', 'Live monitoring dashboard'].map((f) => (
                <li key={f} className="flex gap-3 text-sm text-subtle items-start">
                  <span className="text-brand font-bold mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <button
              onClick={openModal}
              className="w-full py-3.5 rounded-xl text-sm font-semibold transition-all bg-white border-2 border-brand/20 text-brand hover:bg-brand/5 hover:border-brand/40 hover:shadow-brand-sm">
              Start Recovery →
            </button>
          </div>

          {/* PATH B */}
          <div className="group relative p-8 rounded-2xl flex flex-col transition-all duration-400 overflow-hidden shadow-brand-lg hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(61,90,254,0.4)]"
            style={{ background: 'linear-gradient(145deg, #3D5AFE 0%, #2541E0 60%, #1A30CC 100%)' }}
          >
            {/* Glass glare */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/15 to-transparent pointer-events-none rounded-t-2xl" />
            {/* Subtle grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-50" />

            {/* Best value badge */}
            <div className="absolute -top-px right-6">
              <span className="inline-block bg-white text-brand text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-b-lg shadow-sm font-mono">
                Most Popular
              </span>
            </div>

            <div className="mb-5 relative z-10">
              <span className="text-[10px] uppercase font-bold tracking-widest text-white/60 block mb-2 font-mono">PATH B</span>
              <span className="text-xl font-bold text-white tracking-tight">Lead Gen + Recovery</span>
            </div>

            <p className="text-sm text-white/75 mb-6 leading-relaxed relative z-10">
              We run your Meta and Google Ads, drive inbound calls, and our system converts every single one into a confirmed booking.
            </p>

            <div className="mb-8 flex flex-col gap-1 relative z-10">
              <span className="text-3xl font-bold text-white tracking-tighter">₹45,000 – ₹90,000</span>
              <span className="text-sm text-white/60">/ month (incl. ad spend)</span>
              <span className="text-[10px] text-white/40 italic">Ad spend passed through at cost. No markup.</span>
            </div>

            <ul className="space-y-3 mb-8 flex-1 border-t border-white/15 pt-6 relative z-10">
              {['Everything in Path A', 'Meta & Google Ads management', 'Full-funnel WhatsApp automation', 'Weekly ROI report', 'Campaign optimisation'].map((f) => (
                <li key={f} className="flex gap-3 text-sm text-white/90 items-start">
                  <span className="text-white font-bold mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <button
              onClick={openModal}
              className="w-full py-3.5 rounded-xl text-sm font-bold relative z-10 transition-all bg-white text-brand shadow-[0_4px_20px_rgba(255,255,255,0.3)] hover:bg-white/90 hover:shadow-[0_8px_32px_rgba(255,255,255,0.4)] hover:scale-[1.02]">
              Book a Strategy Call →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
