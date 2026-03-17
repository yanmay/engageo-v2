import React from 'react';
import { useModal } from '../context/ModalContext';

export default function FinalCTASection() {
  const { openModal } = useModal();
  return (
    <section
      className="w-full flex justify-center py-[80px] md:py-[120px] bg-[var(--command-black)] relative overflow-hidden"
    >
      <div className="absolute inset-0 noise-overlay opacity-10 pointer-events-none" />
      <div className="w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">

        <h2
          className="font-sans font-bold leading-tight mb-6 text-[32px] md:text-[56px] text-white tracking-tighter"
        >
          Your next 15 patients are already calling.
        </h2>

        <p
          className="font-sans font-medium mb-12 text-[18px] md:text-[22px] text-white/40 max-w-2xl"
        >
          Let's make sure none of them go unanswered. Secure your revenue pipeline with autonomous recovery.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6 mb-12 w-full md:w-auto">
          <button
            onClick={openModal}
            className="w-full md:w-auto text-center font-sans font-bold transition-all hover:scale-[1.02] active:scale-[0.98] bg-[var(--recovery-blue)] text-white rounded-full px-12 py-5 text-[15px] tracking-[0.1em] shadow-2xl shadow-blue-500/20"
          >
            Get Free Audit →
          </button>
          
          <a 
            href="https://calendly.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto font-sans font-bold transition-all hover:bg-white/5 border border-white/20 text-white rounded-full px-12 py-5 text-[15px] tracking-[0.1em]"
          >
            Book a Live Demo →
          </a>
        </div>

        <div
          className="flex flex-col md:flex-row items-center gap-4 md:gap-8 font-data text-[10px] uppercase tracking-widest text-white/30"
        >
          <div className="flex items-center gap-2">
            <span className="text-[var(--signal-green)]">✓</span> No credit card 
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[var(--signal-green)]">✓</span> 24hr WhatsApp response
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[var(--signal-green)]">✓</span> 15-booking guarantee
          </div>
        </div>

      </div>
    </section>
  );
}
