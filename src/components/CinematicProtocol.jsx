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
  const spineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".protocol-card");

      // Pin the whole container or just handle individual reveals
      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          gsap.to(card, {
            scale: 0.9,
            opacity: 0.1,
            filter: "blur(18px)",
            y: -80,
            scrollTrigger: {
              trigger: cards[i + 1],
              start: "top center",
              end: "top top",
              scrub: true,
            }
          });
        }
      });

      // Operational Spine Animation
      gsap.fromTo(spineRef.current, 
        { height: "0%" },
        { 
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-[var(--command-black)]">
      {/* The Operational Spine */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[1px] bg-white/5 z-20 hidden md:block">
        <div ref={spineRef} className="absolute top-0 left-0 w-full bg-[var(--recovery-blue)] shadow-[0_0_15px_var(--recovery-blue)]" />
      </div>

      <ProtocolCard
        step="01"
        title={<>Deep<br /><span className="text-[var(--recovery-blue)]">Integration.</span></>}
        desc="Connects seamlessly to your clinic's existing phone system and Google Calendar. Zero IT effort required."
      >
        <div className="relative w-64 h-64">
           {/* Animated Orbitals */}
           <div className="absolute inset-0 border border-[var(--recovery-blue)]/10 rounded-full animate-[spin_20s_linear_infinite]" />
           <div className="absolute inset-8 border border-[var(--recovery-blue)]/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
           <div className="absolute inset-16 border border-[var(--recovery-blue)]/30 rounded-full animate-[spin_10s_linear_infinite]" />
           
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[var(--recovery-blue)] rounded-full shadow-[0_0_15px_var(--recovery-blue)]" />
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
        desc="8-second callback. Hinglish voice. Captures intent the moment a call is missed."
      >
        <div className="relative w-full max-w-[300px] aspect-video bg-white/[0.03] rounded-2xl overflow-hidden border border-white/10 p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-[var(--recovery-blue)] animate-pulse shadow-[0_0_8px_var(--recovery-blue)]" />
               <div className="font-data text-[10px] text-white/40 uppercase tracking-widest">Live_Response</div>
            </div>
            <span className="font-data text-[10px] text-[var(--recovery-blue)]">00:08.24s</span>
          </div>
          
          <div className="space-y-4">
             <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-[var(--recovery-blue)] w-[70%] animate-[shimmer_2s_infinite]" />
             </div>
             <div className="h-1.5 w-4/5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-[var(--recovery-blue)] w-[45%] animate-[shimmer_2s_infinite_0.4s]" />
             </div>
             <div className="h-1.5 w-3/4 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-[var(--recovery-blue)] w-[90%] animate-[shimmer_2s_infinite_0.8s]" />
             </div>
          </div>

          <style>{`
            @keyframes shimmer {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }
          `}</style>
        </div>
      </ProtocolCard>

      <ProtocolCard
        step="03"
        title={<>Smart<br /><span className="text-[var(--recovery-blue)]">Scheduling.</span></>}
        desc="Direct calendar synchronization. Secured slots for high-ticket procedures without human intervention."
      >
        <div className="bg-white/[0.03] p-8 rounded-2xl border border-white/10 w-full max-w-[320px]">
           <div className="grid grid-cols-7 gap-2 mb-6">
              {[...Array(14)].map((_, i) => (
                <div key={i} className={`h-6 rounded-md border ${i === 8 ? 'bg-[var(--recovery-blue)] border-[var(--recovery-blue)] shadow-[0_0_15px_var(--recovery-blue)]' : 'border-white/5 bg-white/5'}`} />
              ))}
           </div>
           <div className="space-y-3">
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                 <span className="font-data text-[10px] text-white/40">APPT_CONFIRMED</span>
                 <span className="font-data text-[10px] text-[var(--recovery-blue)]">2:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-3">
                 <span className="font-data text-[10px] text-white/40">RECOVERY_VALUE</span>
                 <span className="font-data text-[10px] text-[var(--signal-green)]">+₹80,000</span>
              </div>
           </div>
        </div>
      </ProtocolCard>

      <ProtocolCard
        step="04"
        title={<>Airtight<br /><span className="text-[var(--recovery-blue)]">Retention.</span></>}
        desc="Automated WhatsApp sequence ensures 0% no-show rates through persistent, clinical follow-ups."
      >
        <div className="flex flex-col gap-4 w-full max-w-[280px]">
           {[
             { text: "Namaste Dr. Arora's clinic...", delay: "0s", side: "left" },
             { text: "Yes, I need to book hair transplant.", delay: "1.5s", side: "right" },
             { text: "Confirmed for Tuesday 2 PM.", delay: "3s", side: "left" }
           ].map((msg, i) => (
             <div 
               key={i} 
               className={`p-4 rounded-2xl text-[11px] font-sans max-w-[80%] ${msg.side === 'left' ? 'bg-[var(--recovery-blue)]/20 text-white self-start border border-white/10' : 'bg-white/5 text-white/60 self-end border border-white/5'}`}
               style={{ animation: `fade-in 0.5s ease-out forwards ${msg.delay}`, opacity: 0 }}
             >
                {msg.text}
             </div>
           ))}
        </div>
      </ProtocolCard>
    </section>
  );
}
