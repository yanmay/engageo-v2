import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal the small labels
      gsap.from(".reveal-label", {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      // Reveal the main manifesto text with a "staggered word" effect
      const words = textRef.current?.querySelectorAll('.word');
      if (words && words.length > 0) {
        gsap.from(words, {
          y: 40,
          opacity: 0,
          rotateX: -30,
          stagger: 0.05,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
          }
        });
      }

      // Reveal the big drama text
      gsap.from(".reveal-drama", {
        y: 100,
        opacity: 0,
        skewY: 5,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".reveal-drama",
          start: "top 90%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const manifestoText = "In a world where clinics spend lakhs on ads, but lose thousands on missed calls. Every ring is a relationship. Every missed call is a business failure.";

  return (
    <section
      ref={sectionRef}
      className="relative py-40 px-8 md:px-24 bg-[var(--command-black)] overflow-hidden border-t border-white/5"
    >
      {/* Local Noise Overlay */}
      <div className="absolute inset-0 noise-overlay opacity-10 pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Context */}
          <div className="lg:col-span-6 flex flex-col gap-12">
            <div className="reveal-label font-data text-[var(--recovery-blue)] text-xs tracking-[0.3em] uppercase flex items-center gap-4">
               <span className="w-10 h-[1px] bg-[var(--recovery-blue)]" />
               The Contrast
            </div>
            
            <div ref={textRef} className="flex flex-col gap-8">
              <p className="text-white/80 text-lg md:text-xl leading-relaxed font-medium italic reveal-text">
                "Most clinics focus on acquiring new leads while letting high-intent callers slip away."
              </p>
              <p className="text-white text-3xl md:text-4xl lg:text-5xl leading-[1.1] font-bold tracking-tight">
                {manifestoText.split(" ").map((word, i) => (
                  <span key={i} className="word inline-block mr-[0.3em]">{word}</span>
                ))}
              </p>
            </div>
          </div>

          {/* Right Column: Manifesto Action */}
          <div className="lg:col-span-6 flex flex-col items-start lg:items-end lg:text-right pt-6 lg:pt-48">
            <div className="reveal-label font-data text-white/30 text-xs tracking-[0.3em] uppercase mb-12">
               The Mission
            </div>
            
            <div className="reveal-drama">
               <h2 className="text-white/70 text-2xl md:text-3xl font-medium mb-8">Instead, we focus on:</h2>
               <div className="font-drama text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] text-white leading-[0.9] drop-shadow-2xl">
                  Recovering <br className="hidden md:block" /> Every Booking.
               </div>
            </div>
            
            <div className="reveal-label mt-24 flex items-center justify-end gap-8 text-white/20 font-data text-[10px] tracking-widest uppercase italic">
                <span>// Zero-Leakage Protocol</span>
                <span>// Clinical Precision</span>
                <span>// Patient-First AI</span>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--recovery-blue)]/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
