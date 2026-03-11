import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProtocolCard = ({ step, title, desc, children }) => (
  <div className="protocol-card sticky top-0 w-full h-screen flex items-center justify-center bg-[var(--command-black)] border-t border-white/5 overflow-hidden">
    {/* Subtle grid background for the card */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
         style={{ backgroundImage: 'radial-gradient(var(--recovery-blue) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl px-8 md:px-24 relative z-10 w-full">
      <div className="flex flex-col justify-center">
        <div className="font-data text-[var(--recovery-blue)] text-xs tracking-[0.3em] mb-6 uppercase font-bold">Protocol Node_{step}</div>
        <h3 className="text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-8 tracking-tighter leading-none">
          {title}
        </h3>
        <p className="text-white/50 text-lg md:text-xl leading-relaxed max-w-md font-medium">
          {desc}
        </p>
        
        <div className="mt-12 flex items-center gap-4">
          <div className="w-12 h-[1px] bg-[var(--recovery-blue)]/30" />
          <span className="font-data text-[10px] text-white/20 uppercase tracking-widest">System_Active_v1.0</span>
        </div>
      </div>
      
      <div className="flex items-center justify-center p-4 md:p-12 bg-white/[0.02] rounded-premium backdrop-blur-md border border-white/10 shadow-2xl group relative aspect-square md:aspect-auto">
        {/* Decorative corner accents */}
        <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-[var(--recovery-blue)]/40" />
        <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-[var(--recovery-blue)]/40" />
        
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default function CinematicProtocol() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".protocol-card");

      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          gsap.to(card, {
            scale: 0.9,
            opacity: 0.2,
            filter: "blur(12px)",
            y: -50,
            scrollTrigger: {
              trigger: cards[i + 1],
              start: "top center",
              end: "top top",
              scrub: true,
            }
          });
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-[var(--command-black)]">
      <ProtocolCard
        step="01"
        title={<>Deep<br /><span className="text-[var(--recovery-blue)]">Integration.</span></>}
        desc="AI voice & WhatsApp connect seamlessly to your existing clinic phone system and Google Calendar."
      >
        <div className="relative w-64 h-64">
           {/* Animated Orbitals */}
           <div className="absolute inset-0 border border-[var(--recovery-blue)]/10 rounded-full animate-[spin_20s_linear_infinite]" />
           <div className="absolute inset-8 border border-[var(--recovery-blue)]/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
           <div className="absolute inset-16 border border-[var(--recovery-blue)]/30 rounded-full animate-[spin_10s_linear_infinite]" />
           
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[var(--recovery-blue)] rounded-full shadow-[0_0_15px_var(--recovery-blue)]" />
           <div className="absolute bottom-1/4 left-0 -translate-x-1/2 w-2 h-2 bg-white rounded-full opacity-50" />
           <div className="absolute top-1/4 right-0 translate-x-1/2 w-2 h-2 bg-[var(--signal-green)] rounded-full opacity-50" />
           
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-[var(--recovery-blue)]/20 rounded-2xl backdrop-blur-xl border border-white/20 flex items-center justify-center">
                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
           </div>
        </div>
      </ProtocolCard>

      <ProtocolCard
        step="02"
        title={<>Instant<br /><span className="text-[var(--recovery-blue)]">Recovery.</span></>}
        desc="Instant Hinglish callback to any missed patient call. No more lost leads during peak clinic hours."
      >
        <div className="relative w-full max-w-[280px] aspect-video bg-black/40 rounded-xl overflow-hidden border border-white/10 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <div className="font-data text-[8px] text-white/40 uppercase tracking-widest">Live_Call_Intercept</div>
          </div>
          
          <div className="space-y-3">
             <div className="h-2 w-3/4 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[var(--recovery-blue)] w-[60%] animate-[pulse_2s_infinite]" />
             </div>
             <div className="h-2 w-1/2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[var(--recovery-blue)] w-[40%] animate-[pulse_2s_infinite_0.5s]" />
             </div>
             <div className="h-2 w-2/3 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[var(--recovery-blue)] w-[80%] animate-[pulse_2s_infinite_1s]" />
             </div>
          </div>
          
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center font-data text-[10px] text-[var(--recovery-blue)]">
             <span>QUALIFYING...</span>
             <span>8.2s</span>
          </div>
          
          {/* Scanline effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--recovery-blue)]/5 to-transparent h-1/4 w-full animate-[scan_4s_linear_infinite] pointer-events-none" />
        </div>
      </ProtocolCard>

      <ProtocolCard
        step="03"
        title={<>Automated<br /><span className="text-[var(--recovery-blue)]">Bookings.</span></>}
        desc="High-ticket patients scheduled onto your calendar automatically. Followed by an airtight WhatsApp sequence."
      >
        <div className="relative py-8">
           <svg width="240" height="120" viewBox="0 0 240 120" className="drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]">
              <path 
                d="M0,60 Q30,60 40,30 T80,30 T120,90 T160,30 T200,60 L240,60" 
                fill="none" 
                stroke="var(--recovery-blue)" 
                strokeWidth="3" 
                className="animate-[dash_3s_ease-in-out_infinite]"
                strokeDasharray="400"
                strokeDashoffset="400"
              />
              <path 
                d="M0,60 Q30,60 40,30 T80,30 T120,90 T160,30 T200,60 L240,60" 
                fill="none" 
                stroke="white" 
                strokeWidth="1" 
                className="opacity-20"
              />
           </svg>
           
           <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between pointer-events-none p-2 font-data text-[7px] text-white/20">
              <div className="flex justify-between"><span>+40K VAL</span><span>SYNCED</span></div>
              <div className="flex justify-between"><span>CAL_PUSH</span><span>02:14 PM</span></div>
           </div>
           
           <style>{`
             @keyframes dash {
               0% { stroke-dashoffset: 400; }
               50% { stroke-dashoffset: 0; }
               100% { stroke-dashoffset: -400; }
             }
           `}</style>
        </div>
      </ProtocolCard>
    </section>
  );
}
