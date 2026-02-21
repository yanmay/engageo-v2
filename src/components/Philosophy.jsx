import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax Background
      gsap.to('.parallax-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      // Text Reveal Animation (SplitText alternative with simple stagger)
      gsap.from('.reveal-text', {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.manifesto-container',
          start: 'top 70%',
        }
      });
      
      gsap.from('.reveal-large', {
        y: 60,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.manifesto-container',
          start: 'top 50%',
        }
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen py-32 flex items-center overflow-hidden bg-dark text-primary">
      {/* Background Parallax */}
      <div className="absolute inset-0 w-full h-[130%] -top-[15%] pointer-events-none z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop" 
          alt="Raw concrete texture" 
          className="parallax-bg w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark"></div>
      </div>

      <div className="manifesto-container relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 flex flex-col items-center justify-center text-center">
        
        <p className="reveal-text font-mono text-sm md:text-base tracking-widest uppercase text-primary/60 mb-6 font-semibold">
          Most clinics focus on:
        </p>
        
        <h3 className="reveal-text font-sans font-bold text-2xl md:text-4xl text-primary/80 max-w-3xl leading-tight mb-20">
          Acquiring new leads while letting high-intent callers slip away.
        </h3>

        <p className="reveal-large font-mono text-sm tracking-widest uppercase text-accent mb-6 font-bold flex items-center justify-center gap-4">
          <span className="w-12 h-px bg-accent"></span>
          We focus on
          <span className="w-12 h-px bg-accent"></span>
        </p>
        
        <h2 className="reveal-large font-serif italic text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] max-w-5xl tracking-normal text-primary">
          Recovering <span className="text-accent underline decoration-4 underline-offset-[16px]">every</span> missed booking.
        </h2>
        
      </div>
    </section>
  );
}
