import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TheSecondLayer() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  // Clear refs on re-render to avoid duplicates
  cardsRef.current = [];

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = cardsRef.current;
      
      // Pin the entire section so it stays on screen while cards scroll
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${cards.length * 900}`, // long scroll distance
        pin: true,
        pinSpacing: true,
      });

      cards.forEach((card, i) => {
        // Skip the very first card for entrance animation, it's already there
        if (i > 0) {
          gsap.fromTo(card, 
            { y: "150vh" }, // start hidden below
            {
              y: "0vh",   // slide up into view
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: `top+=${i * 900 - 900} top`, 
                end: `top+=${i * 900} top`,
                scrub: true,
              }
            }
          );
        }

        // When the *next* card slides up over this one,
        // this card scales down, fades out slightly, and blurs.
        if (i < cards.length - 1) {
          gsap.to(card, {
            scale: 0.9,
            opacity: 0.4,
            filter: "blur(10px)",
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: `top+=${(i + 1) * 900 - 900} top`,
              end: `top+=${(i + 1) * 900} top`,
              scrub: true,
            }
          });
        }
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  const steps = [
    {
      time: "T-0:00",
      tag: "INSTANT CONFIRMATION",
      title: "Locking the Slot",
      desc: "Immediate WhatsApp dispatch securely locking the appointment in your HMS. The patient receives exact time, maps link, and practitioner details.",
      bg: "bg-obsidian border-obsidian",
      text: "text-white"
    },
    {
      time: "T-24:00",
      tag: "THE DAY PRIOR",
      title: "Predictive Nudge",
      desc: "Our algorithms identify high-risk no-show profiles, triggering personalized reminders specifically calibrated to confirm attendance.",
      bg: "bg-[#111111] border-[#222]",
      text: "text-white"
    },
    {
      time: "T-02:00",
      tag: "FINAL SYNC",
      title: "Friction Removal",
      desc: "A pre-visit contextual sync containing parking instructions and necessary intake documents, eliminating last-minute patient friction.",
      bg: "bg-[#1C1C24] border-[#2D2D38]",
      text: "text-white"
    },
    {
      time: "T+00:15",
      tag: "IF NO-SHOW",
      title: "Immediate Recovery",
      desc: "If a patient misses their slot, a silent multi-touch sequence attempts to reschedule them immediately before the lead goes cold.",
      bg: "bg-brand border-brand/50",
      text: "text-white"
    }
  ];

  return (
    <section className="bg-[#FAF8F5] relative overflow-hidden h-screen flex flex-col justify-center" ref={containerRef}>
      
      {/* Background Section Title Header */}
      <div className="absolute top-8 md:top-16 left-0 right-0 px-6 md:px-12 lg:px-20 z-0 opacity-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <h2 className="font-sans text-5xl md:text-7xl font-bold text-obsidian tracking-tighter leading-[0.9]">
            The call recovers.<br />
            <span className="serif-hero font-light italic">WhatsApp retains.</span>
          </h2>
          <p className="font-mono text-xs uppercase tracking-widest font-bold max-w-xs text-right hidden md:block">
            04 Step background <br/>retention protocol
          </p>
        </div>
      </div>

      <div className="absolute inset-0 z-10 w-full h-full flex items-center justify-center px-4 md:px-12 pt-24 md:pt-[15vh]">
        <div className="w-full max-w-4xl h-[70vh] md:h-[65vh] relative perspective-[1000px]">
          
          {steps.map((step, i) => (
            <div 
              key={i} 
              ref={addToRefs}
              className={`absolute top-0 left-0 w-full h-full rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 flex flex-col justify-between shadow-2xl border ${step.bg} ${step.text} will-change-transform origin-top`}
              style={{ zIndex: i }}
            >
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-8">
                <span className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] font-bold opacity-80 border border-white/20 px-4 py-2 rounded-full">
                  {step.tag}
                </span>
                <span className="font-mono text-[2.5rem] md:text-[4rem] font-bold tabular-nums tracking-tighter opacity-90 leading-none">
                  {step.time}
                </span>
              </div>

              <div className="mt-auto">
                <h3 className="font-sans text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tighter mb-4 leading-[1.05]">
                  {step.title}
                </h3>
                <p className="text-lg md:text-xl opacity-70 leading-relaxed max-w-2xl font-medium">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
