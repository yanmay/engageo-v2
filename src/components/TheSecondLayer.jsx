import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TheSecondLayer() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const itemsRef = useRef([]);
  itemsRef.current = [];

  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the line drawing down
      gsap.fromTo(
        trackRef.current,
        { height: '0%' },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
            end: 'bottom bottom',
            scrub: true,
          }
        }
      );

      // Stagger items as they enter
      itemsRef.current.forEach((item, i) => {
        gsap.fromTo(item, 
          { opacity: 0, x: -30 }, 
          {
            opacity: 1, 
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
            }
          }
        );
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  const steps = [
    {
      time: "T-0:00",
      tag: "INSTANT CONFIRMATION",
      title: "Locking the Slot",
      desc: "Immediate WhatsApp dispatch securely locking the appointment in your HMS. The patient receives exact time, maps link, and practitioner details immediately.",
      metric: "94% Open Rate"
    },
    {
      time: "T-24:00",
      tag: "THE DAY PRIOR",
      title: "Predictive Nudge",
      desc: "Our algorithms identify high-risk no-show profiles, triggering personalized reminders specifically calibrated to confirm attendance 24 hours prior.",
      metric: "Required Response"
    },
    {
      time: "T-02:00",
      tag: "FINAL SYNC",
      title: "Friction Removal",
      desc: "A pre-visit contextual sync containing granular parking instructions and necessary intake documents, eliminating last-minute patient friction.",
      metric: "Location Ping"
    },
    {
      time: "T+00:15",
      tag: "IF NO-SHOW",
      title: "Immediate Recovery",
      desc: "If a patient misses their slot, a silent multi-touch sequence attempts to reschedule them immediately before the lead goes cold.",
      metric: "Automated Rebooking"
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 relative z-10 bg-[#FAF8F5] border-t border-border/50 overflow-hidden" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-24 mb-20 md:mb-32">
          <div className="flex-1">
            <h2 className="font-sans text-[2.5rem] md:text-[4rem] font-bold text-obsidian tracking-tighter leading-[1] mb-6 md:mb-0">
              The call recovers.<br />
              <span className="serif-hero font-light text-brand italic">WhatsApp retains.</span>
            </h2>
          </div>
          <div className="flex-1 flex flex-col justify-end">
            <div className="border-l-2 border-brand/30 pl-6 md:pl-8">
              <p className="text-obsidian font-medium text-lg leading-relaxed max-w-md">
                A recovered call is only revenue if the patient shows up. We run a silent 4-step retention protocol in the background.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="relative pl-6 md:pl-20 max-w-4xl mx-auto">
          {/* Vertical Track Background */}
          <div className="absolute left-[11px] md:left-[39px] top-6 bottom-6 w-[2px] bg-obsidian/5" />
          
          {/* Animated Track Fill */}
          <div 
            ref={trackRef}
            className="absolute left-[11px] md:left-[39px] top-6 w-[2px] bg-brand origin-top" 
          />

          <div className="flex flex-col gap-16 md:gap-24">
            {steps.map((step, i) => (
              <div key={i} className="relative" ref={addToRefs}>
                
                {/* Timeline Dot */}
                <div className="absolute -left-6 md:-left-20 top-2 w-[22px] h-[22px] md:w-6 md:h-6 rounded-full bg-[#FAF8F5] border-2 border-brand flex items-center justify-center z-10 shadow-[0_0_0_4px_#FAF8F5]">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-12 pl-4 md:pl-0">
                  {/* Left Column: Time & Tag */}
                  <div className="flex flex-row md:flex-col items-baseline md:items-start gap-3 md:gap-2 pt-1.5">
                    <span className="font-mono text-sm md:text-base font-bold text-obsidian">{step.time}</span>
                    <span className="font-mono text-[9px] md:text-[10px] text-brand uppercase tracking-widest font-semibold">{step.tag}</span>
                  </div>

                  {/* Right Column: Content */}
                  <div className="bg-white border border-obsidian/10 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand/20 to-brand/60 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                    
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <h3 className="font-sans text-xl md:text-2xl font-bold text-obsidian tracking-tight">
                        {step.title}
                      </h3>
                      <div className="flex items-center gap-2 self-start shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand pulse-dot" />
                        <span className="font-mono text-[10px] uppercase tracking-widest text-brand font-bold">
                          {step.metric}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-subtle text-[14px] md:text-[15px] leading-relaxed max-w-2xl">
                      {step.desc}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
