import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".philosophy-reveal", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-8 md:px-24 bg-[var(--charcoal)] overflow-hidden"
    >
      {/* Organic texture background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1550686041-366ad85a1355?q=80&w=2574&auto=format&fit=crop")', // Abstract organic
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-24">
        <div className="flex flex-col gap-6 max-w-2xl">
          <p className="philosophy-reveal font-data text-white/40 text-xs tracking-widest uppercase">The Perspective</p>
          <div className="philosophy-reveal text-white/60 text-xl leading-relaxed">
            Most clinics focus on: <span className="text-white">Acquiring new leads while letting high-intent callers slip away.</span>
          </div>
        </div>

        <div className="philosophy-reveal flex flex-col items-start md:items-end">
          <h2 className="text-white/40 text-lg md:text-xl font-medium mb-4">We focus on:</h2>
          <div className="font-drama text-6xl md:text-8xl lg:text-9xl text-[var(--clay)] text-right leading-tight italic">
            Recovering every <br />missed booking.
          </div>
        </div>
      </div>
    </section>
  );
}
