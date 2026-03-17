import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import CinematicPricing from '../components/CinematicPricing';
import TierSelector from '../components/TierSelector';
import TierComparisonTable from '../components/TierComparisonTable';
import PricingFAQTeaser from '../components/PricingFAQTeaser';
import gsap from 'gsap';

export default function PricingPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const ctx = gsap.context(() => {
      gsap.from(".reveal-price-hero", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out"
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-[var(--command-black)] min-h-screen">
      
      {/* 1) Page Hero */}
      <section 
        className="w-full text-center px-6 md:px-12 relative z-10 pt-[180px] pb-[100px] bg-[var(--command-black)]"
      >
        <div className="max-w-5xl mx-auto">
          <div className="font-data text-[10px] font-bold text-[var(--recovery-blue)] tracking-widest mb-8 reveal-price-hero">Investment structure</div>
          <h1 
            className="font-sans font-bold tracking-tighter mb-8 leading-[0.9] mx-auto flex flex-col items-center justify-center gap-1 reveal-price-hero text-white"
            style={{ fontSize: 'clamp(48px, 8vw, 84px)' }}
          >
            <span>Transparent pricing.</span>
            <span className="font-drama italic text-[var(--recovery-blue)]">
              One Guarantee.
            </span>
          </h1>
          <p 
            className="font-sans font-medium max-w-2xl mx-auto leading-relaxed mt-4 text-xl text-white/60 reveal-price-hero"
          >
            Choose the tier that matches your clinic's volume. 15 confirmed bookings guaranteed in your first 30 days, or we work for free.
          </p>
        </div>
      </section>

      {/* 2) Tier Selector (Discovery) */}
      <section className="py-24 md:py-32 px-6">
        <TierSelector />
      </section>

      {/* 3) Main Pricing Cards */}
      <section className="bg-[var(--command-black)]">
        <CinematicPricing isPreview={false} />
      </section>

      {/* 4) Comparisons Table */}
      <section className="py-24 md:py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto mb-20 text-center">
            <div className="font-data text-[10px] font-bold text-[var(--recovery-blue)] tracking-widest mb-4">Deep dive</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter italic">
                Feature <span className="text-[var(--recovery-blue)] not-italic">matrix</span>
            </h2>
        </div>
        <div className="max-w-7xl mx-auto border border-white/10 bg-white/[0.03] rounded-[3rem] p-8 md:p-16 shadow-2xl">
            <TierComparisonTable />
        </div>
      </section>

      {/* 5) FAQ Section (Teaser only as per PRD) */}
      <section className="border-t border-white/5">
        <PricingFAQTeaser />
      </section>


      {/* 6) Guarantee Banner */}
      <section className="py-40 px-6 bg-[var(--command-black)] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none noise-overlay" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="font-data text-[10px] text-[var(--signal-green)] font-bold tracking-widest mb-10">The defensible promise</div>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-12 leading-[1.1]">
                If we don't deliver <span className="text-[var(--signal-green)] italic">15 patients</span> in 30 days, <br className="hidden md:block" />
                you don't pay a single rupee.
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <button 
                  onClick={useModal().openModal}
                  className="px-12 py-5 bg-[var(--recovery-blue)] text-white rounded-full font-bold text-xs tracking-[0.2em] uppercase shadow-2xl shadow-blue-500/40 hover:scale-105 transition-transform active:scale-95"
                >
                    Claim your guarantee →
                </button>
                <p className="font-data text-[10px] text-white/40 tracking-widest">No negotiation · No fine print · Pure performance</p>
            </div>
        </div>
      </section>

    </div>
  );
}
