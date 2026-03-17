import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import CinematicPricing from '../components/CinematicPricing';
import TierSelector from '../components/TierSelector';
import TierComparisonTable from '../components/TierComparisonTable';
import PricingFAQTeaser from '../components/PricingFAQTeaser';
import gsap from 'gsap';

import CinematicGuarantee from '../components/CinematicGuarantee';

export default function PricingPage() {
  const containerRef = useRef(null);
  const { openModal } = useModal();

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
        className="w-full text-center px-6 md:px-12 relative z-10 pt-[180px] pb-[100px]"
      >
        <div className="max-w-5xl mx-auto">
          <div className="font-data text-[10px] font-bold text-[var(--recovery-blue)] tracking-widest mb-8 reveal-price-hero uppercase">Investment Structure</div>
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
      <section className="bg-transparent pb-32">
        <CinematicPricing isPreview={false} />
      </section>

      {/* 4) Comparisons Table */}
      <section className="py-24 md:py-32 px-6 bg-black/[0.02]">
        <div className="max-w-7xl mx-auto mb-20 text-center">
            <div className="font-data text-[10px] font-bold text-[var(--recovery-blue)] tracking-widest mb-4 uppercase">Deep Dive</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter italic">
                Feature <span className="text-[var(--recovery-blue)] not-italic">matrix</span>
            </h2>
        </div>
        <div className="max-w-7xl mx-auto border border-white/10 bg-white/5 backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.5)] rounded-[3rem] p-8 md:p-16">
            <TierComparisonTable />
        </div>
      </section>

      {/* 5) FAQ Section (Teaser only as per PRD) */}
      <section className="border-t border-black/5">
        <PricingFAQTeaser />
      </section>


      {/* 6) Guarantee Banner */}
      <CinematicGuarantee />

    </div>
  );
}
