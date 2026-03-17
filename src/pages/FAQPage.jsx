import React, { useEffect, useRef } from 'react';
import CinematicFAQ from '../components/CinematicFAQ';
import gsap from 'gsap';

export default function FAQPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const ctx = gsap.context(() => {
      gsap.from(".reveal-faq-hero", {
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
          <div className="font-data text-[10px] font-bold text-[var(--recovery-blue)] tracking-[0.35em] uppercase mb-8 reveal-faq-hero">Information Archive</div>
          <h1 
            className="font-sans font-bold tracking-tighter mb-8 leading-[0.9] mx-auto flex flex-col items-center justify-center gap-1 reveal-faq-hero text-white"
            style={{ fontSize: 'clamp(48px, 8vw, 84px)' }}
          >
            <span>Your Questions.</span>
            <span className="font-drama italic text-[var(--recovery-blue)]">
              Direct Answers.
            </span>
          </h1>
          <p 
            className="font-sans font-medium max-w-2xl mx-auto leading-relaxed mt-4 text-xl text-white/60 reveal-faq-hero"
          >
            Everything you need to know about autonomous missed-call recovery, integration, and legal compliance.
          </p>
        </div>
      </section>

      {/* 2) Main FAQ Section */}
      <CinematicFAQ />

      {/* 4) Bottom CTA */}
      <section
        className="py-40 px-6 text-center w-full bg-[var(--command-black)] text-white relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none noise-overlay" />
        <div className="max-w-4xl mx-auto relative z-10">
            <h2
            className="text-4xl md:text-7xl font-bold tracking-tight mb-12 leading-[1.1]"
            >
            Still have <span className="text-[var(--recovery-blue)] italic font-drama">questions?</span>
            </h2>
            <p className="text-white/40 text-xl font-medium mb-12">Our team is available 24/7 on WhatsApp for clinic owners.</p>
            <a
            href="https://wa.me/911234567890"
            className="inline-flex items-center justify-center font-bold tracking-[0.2em] uppercase transition-all hover:scale-105 active:scale-95 bg-[var(--recovery-blue)] text-white rounded-full px-12 py-5 shadow-2xl shadow-blue-500/40 text-xs"
            >
            Chat on WhatsApp →
            </a>
        </div>
      </section>
    </div>
  );
}
