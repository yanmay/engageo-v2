import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useModal } from '../context/ModalContext';

export default function CinematicGuarantee() {
  const sectionRef = useRef(null);
  const { openModal } = useModal();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-guarantee", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-32 md:py-48 px-6 bg-[var(--command-black)] text-white relative overflow-hidden border-y border-[var(--sovereign-gold)]/20"
    >
      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay opacity-20 pointer-events-none" />
      
      {/* Sovereign gold accent glow */}
      <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-[var(--sovereign-gold)]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="reveal-guarantee font-data text-[10px] text-[var(--sovereign-gold)] font-bold tracking-[0.4em] uppercase mb-10">The Performance Shield</div>
        
        <h2 className="reveal-guarantee text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-12 leading-[1.1]">
          15 Confirmed Bookings <br className="hidden md:block" />
          in 30 Days — <span className="text-[var(--sovereign-gold)] italic">or we keep going for free.</span>
        </h2>
        
        <div className="reveal-guarantee flex flex-col items-center justify-center gap-12">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
                <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--sovereign-gold)]" />
                    <span className="font-data text-[10px] text-white/40 uppercase tracking-widest font-bold">No Asterisks</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--sovereign-gold)]" />
                    <span className="font-data text-[10px] text-white/40 uppercase tracking-widest font-bold">No Footnotes</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--sovereign-gold)]" />
                    <span className="font-data text-[10px] text-white/40 uppercase tracking-widest font-bold">No Conditions</span>
                </div>
            </div>

            <button 
                onClick={openModal}
                className="px-16 py-6 bg-white text-[var(--command-black)] rounded-full font-bold text-xs tracking-[0.4em] uppercase hover:scale-105 transition-transform active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
                Secure Your Guarantee →
            </button>
        </div>
      </div>

      {/* Side gold accents (brackets) */}
      <div className="absolute top-1/2 left-8 md:left-24 -translate-y-1/2 w-4 h-[60%] border-l-2 border-y-2 border-[var(--sovereign-gold)]/20 hidden lg:block" />
      <div className="absolute top-1/2 right-8 md:right-24 -translate-y-1/2 w-4 h-[60%] border-r-2 border-y-2 border-[var(--sovereign-gold)]/20 hidden lg:block" />
    </section>
  );
}
