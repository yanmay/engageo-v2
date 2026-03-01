import React, { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TheSecondLayer() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    // Small delay ensures DOM is fully painted and external scroll libs are ready
    const timerId = setTimeout(() => {
      if (!containerRef.current) return;

      const ctx = gsap.context(() => {
        // Use GSAP's selector scoped to this component, bypassing React strict-mode ref array bugs
        const cards = gsap.utils.toArray('.whatsapp-card');
        if (cards.length === 0) return;

        // One timeline synchronizes all the card animations mathematically across the scroll distance
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            // Lightning fast responsiveness: 500px per card for rapid mouse-wheel transitions
            end: `+=${cards.length * 500}`,
            // BEAST MODE: Instant tracking native to touch scrolling
            scrub: true, 
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
          }
        });

        cards.forEach((card, i) => {
          // Force hardware acceleration on the card
          gsap.set(card, { force3D: true, z: 0.1 });
          
          const chatBody = card.querySelector('.chat-scrollbar');

          if (i > 0) {
            // Adds a minimal pause before sliding the next card
            tl.to({}, { duration: 0.1 });

            // Animate ALL previous cards down the stack dynamically
            for (let j = 0; j < i; j++) {
               const depth = i - j; // e.g., if i=1, j=0, depth=1
               tl.to(cards[j], {
                 scale: 1 - (depth * 0.05),
                 y: `-${depth * 3}vh`, // Responsive step gap so they tuck gracefully on small heights
                 opacity: Math.max(0, 1 - (depth * 0.35)),
                 ease: "power2.out"
               }, `card${i}`);
            }

            // Current card sweeps up from below container perfectly overlapping
            tl.fromTo(card,
              { y: "120%", opacity: 0 },
              { y: "0%", opacity: 1, ease: "power2.out" },
              `card${i}`
            );
          }

          // Cinematic chat scrolling automated by page scroll
          if (chatBody) {
             let maxScroll = 0;
             const scrollProxy = { y: 0 };
             tl.to(scrollProxy, {
                y: 100, // Evaluates 0 to 100 percentage
                ease: "none",
                duration: 0.8, // Reduced duration for faster scroll interaction
                onStart: () => {
                    // CACHE: Read DOM layout once when tween starts to prevent 60fps synchronous layout thrashing!
                    maxScroll = chatBody.scrollHeight - chatBody.clientHeight;
                },
                onUpdate: () => {
                    if (maxScroll > 0) {
                      chatBody.scrollTop = (scrollProxy.y / 100) * maxScroll;
                    }
                }
             }, `scroll${i}`); 
          }
        });
      }, containerRef);

      containerRef._gsapCtx = ctx;
    }, 150);

    return () => {
      clearTimeout(timerId);
      if (containerRef._gsapCtx) containerRef._gsapCtx.revert();
    };
  }, []);

  /* ── Double-tick SVG component ── */
  const BlueTick = () => (
    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" className="inline-block ml-1 shrink-0">
      <path d="M11.071 0.653L4.714 7.01L2.429 4.724L1 6.153L4.714 9.867L12.5 2.082L11.071 0.653Z" fill="#53BDEB"/>
      <path d="M14.071 0.653L7.714 7.01L6.786 6.082L5.357 7.51L7.714 9.867L15.5 2.082L14.071 0.653Z" fill="#53BDEB"/>
    </svg>
  );

  const steps = [
    {
      num: "01",
      label: "Instant Confirmation",
      timing: "Right after the call",
      headerName: "Smile Dental Clinic",
      headerStatus: "online",
      accentColor: "#25D366",
      messages: [
        { type: "system", text: "Today" },
        { type: "outgoing", text: "Hi Priya! Your appointment with Dr. Mehta is confirmed.", time: "09:12" },
        { type: "outgoing", text: "📅 Tomorrow, 10:30 AM\n📍 Smile Dental, Koramangala\n👨‍⚕️ Dr. Arun Mehta — Implant Specialist", time: "09:12" },
        { type: "incoming", text: "Got it, thank you! 🙏", time: "09:14" },
        { type: "outgoing", text: "You're all set! Reply CANCEL anytime to reschedule.", time: "09:14" },
      ],
    },
    {
      num: "02",
      label: "Smart Reminder",
      timing: "24 hours before",
      headerName: "Smile Dental Clinic",
      headerStatus: "online",
      accentColor: "#128C7E",
      messages: [
        { type: "system", text: "1 Day Before Appointment" },
        { type: "outgoing", text: "Hi Priya, just a friendly reminder about your appointment tomorrow!", time: "10:30" },
        { type: "outgoing", text: "📅 Tomorrow, 10:30 AM\n⏱️ Arrive 10 mins early for paperwork\n🅿️ Free parking at Gate 2", time: "10:30" },
        { type: "incoming", text: "Yes, I'll be there!", time: "10:45" },
        { type: "outgoing", text: "Great! See you tomorrow, Priya ✨", time: "10:45" },
      ],
    },
    {
      num: "03",
      label: "Pre-Visit Sync",
      timing: "2 hours before",
      headerName: "Smile Dental Clinic",
      headerStatus: "online",
      accentColor: "#075E54",
      messages: [
        { type: "system", text: "2 Hours Before Appointment" },
        { type: "outgoing", text: "Hi Priya! Your appointment is in 2 hours. Here's everything you need:", time: "08:30" },
        { type: "outgoing", text: "📋 Pre-visit form: engageo.in/form/3xK\n🗺️ Google Maps: maps.gl/SmileDntal\n🪪 Bring: Aadhaar + Insurance Card", time: "08:30" },
        { type: "incoming", text: "On my way, filled the form already!", time: "08:52" },
        { type: "outgoing", text: "Perfect! Dr. Mehta is ready for you 👋", time: "08:52" },
      ],
    },
    {
      num: "04",
      label: "No-Show Recovery",
      timing: "If they don't show up",
      headerName: "Smile Dental Clinic",
      headerStatus: "online",
      accentColor: "#DC2626",
      messages: [
        { type: "system", text: "15 Minutes After Missed Slot" },
        { type: "outgoing", text: "Hi Priya, we noticed you couldn't make it today. No worries at all!", time: "10:45" },
        { type: "outgoing", text: "Would you like to reschedule? Here are the next available slots:", time: "10:45" },
        { type: "outgoing", text: "🔹 Tomorrow, 11:00 AM\n🔹 Thursday, 2:30 PM\n🔹 Friday, 9:00 AM\n\nReply with the number to book.", time: "10:46" },
        { type: "incoming", text: "2", time: "11:02" },
        { type: "outgoing", text: "Done! Thursday 2:30 PM with Dr. Mehta. See you then! ✅", time: "11:02" },
      ],
    }
  ];

  return (
    <section className="bg-[#FAF8F5] relative overflow-hidden h-[100svh] flex flex-col" ref={containerRef}>
      
      {/* Inject custom scrollbar for the internal chat UI */}
      <style>{`
        .chat-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .chat-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .chat-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
        }
      `}</style>
      
      {/* Section Title Header (IN-FLOW Element prevents ALL overlap possibility natively) */}
      <div className="w-full px-5 md:px-12 lg:px-20 z-0 shrink-0 pt-[10vh] md:pt-[8vh] pb-4 flex flex-col md:flex-row items-start md:items-end justify-between gap-4 relative top-0 max-w-7xl mx-auto">
        <h2 className="font-sans text-4xl leading-[1.05] md:text-5xl lg:text-[4.5rem] font-bold text-obsidian tracking-tighter md:leading-[1]">
          The call recovers.<br className="hidden md:block"/>
          <span className="serif-hero font-light italic text-[#25D366] [text-shadow:0_0_35px_rgba(37,211,102,0.4)] drop-shadow-sm md:ml-4 inline-block mt-1">
            WhatsApp retains.
          </span>
        </h2>
        <p className="font-mono text-[10px] md:text-sm uppercase tracking-widest font-bold text-[#1A1A1A]/30 text-left md:text-right hidden md:block pb-2">
          04 Step WhatsApp <br/>Retention Protocol
        </p>
      </div>

      {/* Cards container automatically takes the REMAINING height securely without clipping */}
      <div className="flex-1 min-h-0 w-full z-10 flex flex-col items-center justify-end md:justify-end px-3 md:px-12 pb-6 md:pb-8">
        <div className="w-full max-w-[26rem] md:max-w-[48rem] lg:max-w-3xl h-full max-h-[60vh] md:max-h-[58vh] relative perspective-[1000px] mt-auto">
          
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="whatsapp-card absolute top-0 left-0 w-full h-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-[#0B3D2C]/20 will-change-transform origin-top flex flex-col"
              style={{ zIndex: i }}
            >
              
              {/* ── Step Identity Banner ── */}
              <div className="shrink-0 px-5 md:px-8 py-3 md:py-4 flex items-center justify-between" style={{ backgroundColor: step.accentColor }}>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="font-mono text-2xl md:text-3xl font-light text-white/40 tracking-tighter">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-sans text-white font-bold text-base md:text-lg leading-tight tracking-tight">
                      {step.label}
                    </h3>
                    <p className="text-white/80 text-xs md:text-sm font-medium">
                      {step.timing}
                    </p>
                  </div>
                </div>
              </div>

              {/* ── WhatsApp Header ── */}
              <div className="shrink-0 bg-[#075E54] px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm md:text-base border border-white/10 shrink-0">
                    {step.headerName.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-white font-semibold text-sm md:text-base truncate tracking-tight">{step.headerName}</h3>
                    <p className="text-white/70 text-xs truncate mt-0.5">{step.headerStatus}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-5 text-white/90 shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/></svg>
                </div>
              </div>

              {/* ── Chat Body ── */}
              <div className="flex-1 px-3 md:px-6 py-4 md:py-6 overflow-y-auto chat-scrollbar flex flex-col gap-1.5 md:gap-2 bg-[#ECE5DD]">
                
                {step.messages.map((msg, mi) => {
                  if (msg.type === "system") {
                    return (
                      <div key={mi} className="flex justify-center my-2">
                        <span className="bg-[#E1F2FB] text-[#54656F] text-[11px] md:text-xs px-3 py-1 rounded-lg shadow-sm font-medium">
                          {msg.text}
                        </span>
                      </div>
                    );
                  }

                  const isOutgoing = msg.type === "outgoing";
                  return (
                    <div key={mi} className={`flex ${isOutgoing ? 'justify-end' : 'justify-start'}`}>
                      <div 
                        className={`relative max-w-[85%] md:max-w-[70%] px-3 md:px-4 py-2 md:py-2.5 rounded-xl shadow-sm ${
                          isOutgoing 
                            ? 'bg-[#DCF8C6] rounded-tr-sm' 
                            : 'bg-white rounded-tl-sm'
                        }`}
                      >
                        <p className="text-[#111B21] text-[13px] md:text-sm leading-relaxed whitespace-pre-line">{msg.text}</p>
                        <div className={`flex items-center gap-1 mt-0.5 ${isOutgoing ? 'justify-end' : 'justify-start'}`}>
                          <span className="text-[10px] md:text-[11px] text-[#667781]">{msg.time}</span>
                          {isOutgoing && <BlueTick />}
                        </div>
                      </div>
                    </div>
                  );
                })}

              </div>

              {/* ── WhatsApp Input Bar ── */}
              <div className="bg-[#F0F0F0] px-3 md:px-6 py-2 md:py-3 flex items-center gap-2 md:gap-3 shrink-0">
                <div className="flex items-center gap-2 text-[#54656F] shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="9" cy="10" r="1" fill="currentColor"/><circle cx="15" cy="10" r="1" fill="currentColor"/></svg>
                </div>
                <div className="flex-1 bg-white rounded-full px-4 py-2 md:py-2.5 text-[13px] md:text-sm text-[#667781]">
                  Type a message
                </div>
                <div className="w-9 h-9 md:w-10 md:h-10 bg-[#128C7E] rounded-full flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="none"/><path d="M6 12L18 6L14 13L6 12Z" fill="white"/><path d="M14 13L18 6L14 20L14 13Z" fill="white" opacity="0.7"/></svg>
                </div>
              </div>



            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
