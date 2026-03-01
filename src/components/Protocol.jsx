import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Protocol() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      
      cards.forEach((card, i) => {
        if (i === 0) return; // Skip first card
        
        const previousCards = cards.slice(0, i);
        
        gsap.to(previousCards, {
          scale: 0.9,
          opacity: 0.5,
          filter: 'blur(20px)',
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'top top',
            scrub: true
          }
        });
      });
      
      // Pinning each card
      cards.forEach((card) => {
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          end: '+=100%',
          pin: true,
          pinSpacing: false
        });
      });
      
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  const steps = [
    {
      id: '01',
      title: 'Integration',
      desc: 'AI voice & WhatsApp connect seamlessly to your existing clinic phone system and CRM.',
      anim: (
        // Rotating geometric motif
        <svg className="w-full h-full text-accent animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="50" cy="50" r="40" strokeDasharray="4 8" />
          <circle cx="50" cy="50" r="25" strokeDasharray="16 4" className="animate-[spin_15s_linear_infinite_reverse] origin-center" />
          <polygon points="50,15 80,85 20,85" strokeWidth="1" className="opacity-50" />
        </svg>
      )
    },
    {
      id: '02',
      title: 'Immediate Recovery',
      desc: 'Instant callback to any missed patient call using localized AI voice agents.',
      anim: (
        // Scanning laser line
        <div className="relative w-full h-full border border-dark/20 rounded-lg overflow-hidden bg-primary/20">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-accent shadow-[0_0_15px_#E63B2E] animate-[ping_2s_ease-in-out_infinite_alternate]" style={{animation: 'scan 3s ease-in-out infinite alternate'}}></div>
          <style>{`
            @keyframes scan {
              0% { top: 0; }
              100% { top: 100%; }
            }
          `}</style>
          <div className="grid grid-cols-10 grid-rows-10 w-full h-full gap-[1px] opacity-10">
            {Array.from({length: 100}).map((_, i) => <div key={i} className="bg-dark"></div>)}
          </div>
        </div>
      )
    },
    {
      id: '03',
      title: 'Confirmed Bookings',
      desc: 'High-ticket patients scheduled automatically onto your calendar without staff lifting a finger.',
      anim: (
        // Pulsing waveform (EKG style)
        <svg className="w-full h-full text-accent" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="2">
          <path 
            className="animate-[dash_2s_linear_infinite]" 
            d="M0,25 L20,25 L25,10 L35,45 L45,5 L55,35 L60,25 L100,25" 
            strokeDasharray="100" 
            strokeDashoffset="100"
          />
          <style>{`
            @keyframes dash {
              to { stroke-dashoffset: 0; }
            }
          `}</style>
        </svg>
      )
    }
  ];

  return (
    <section id="protocol" ref={containerRef} className="relative bg-dark text-primary" style={{ paddingBottom: '100svh' }}>
      {steps.map((step, index) => (
        <div 
          key={step.id} 
          className="protocol-card w-full sticky top-0 flex items-center justify-center p-4 md:p-16"
          style={{ height: '100svh', zIndex: index + 1 }}
        >
          <div className="w-full max-w-6xl bg-primary text-dark rounded-[2rem] md:rounded-[3rem] p-6 md:p-20 shadow-2xl border border-dark/10 flex flex-col md:flex-row gap-8 md:gap-16 items-center" style={{ minHeight: '60svh', maxHeight: '85svh' }}>
            
            <div className="flex-1 space-y-4 md:space-y-8">
              <span className="font-mono text-lg md:text-2xl tracking-widest text-accent font-bold">[{step.id}]</span>
              <h2 className="font-sans font-bold text-2xl md:text-5xl lg:text-7xl tracking-tighter leading-none">
                {step.title}
              </h2>
              <p className="font-sans text-base md:text-xl lg:text-2xl opacity-80 max-w-lg leading-relaxed">
                {step.desc}
              </p>
            </div>

            <div className="flex-1 w-full h-64 md:h-full bg-background rounded-3xl p-8 flex items-center justify-center border border-dark/5 shadow-inner relative overflow-hidden">
              <div className="w-48 h-48 md:w-64 md:h-64 relative z-10">
                {step.anim}
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent z-0 pointer-events-none"></div>
            </div>

          </div>
        </div>
      ))}
    </section>
  );
}
