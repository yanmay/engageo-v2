import React, { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STEP_COUNT = 4;
const SCROLL_PER_CARD = 1100;

export default function TheSecondLayer() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  // Stable ref callback — collects DOM nodes during render
  const setCardRef = useCallback((el, i) => {
    if (el) cardsRef.current[i] = el;
  }, []);

  useEffect(() => {
    // Wait one frame so refs are populated after render
    const frameId = requestAnimationFrame(() => {
      const cards = cardsRef.current.filter(Boolean);
      if (!cards.length || !containerRef.current) return;

      const ctx = gsap.context(() => {
        // Pin the entire section so it stays on screen while cards scroll
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: `+=${cards.length * SCROLL_PER_CARD}`,
          pin: true,
          pinSpacing: true,
        });

        cards.forEach((card, i) => {
          // Skip the very first card for entrance animation, it's already there
          if (i > 0) {
            gsap.fromTo(card,
              { y: "150vh" },
              {
                y: "0vh",
                ease: "none",
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: `top+=${i * SCROLL_PER_CARD - SCROLL_PER_CARD} top`,
                  end: `top+=${i * SCROLL_PER_CARD} top`,
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
                start: `top+=${(i + 1) * SCROLL_PER_CARD - SCROLL_PER_CARD} top`,
                end: `top+=${(i + 1) * SCROLL_PER_CARD} top`,
                scrub: true,
              }
            });
          }
        });
      }, containerRef);

      // Store ctx for cleanup
      containerRef._gsapCtx = ctx;
    });

    return () => {
      cancelAnimationFrame(frameId);
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
    <section className="bg-[#FAF8F5] relative overflow-hidden h-screen flex flex-col justify-center" ref={containerRef}>
      
      {/* Background Section Title Header */}
      <div className="absolute top-8 md:top-16 left-0 right-0 px-6 md:px-12 lg:px-20 z-0 opacity-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <h2 className="font-sans text-5xl md:text-7xl font-bold text-obsidian tracking-tighter leading-[0.9]">
            The call recovers.<br />
            <span className="serif-hero font-light italic">WhatsApp retains.</span>
          </h2>
          <p className="font-mono text-xs uppercase tracking-widest font-bold max-w-xs text-right hidden md:block">
            04 Step WhatsApp <br/>retention protocol
          </p>
        </div>
      </div>

      <div className="absolute inset-0 z-10 w-full h-full flex items-center justify-center px-4 md:px-12 pt-24 md:pt-[15vh]">
        <div className="w-full max-w-4xl h-[70vh] md:h-[65vh] relative perspective-[1000px]">
          
          {steps.map((step, i) => (
            <div 
              key={i} 
              ref={(el) => setCardRef(el, i)}
              className="absolute top-0 left-0 w-full h-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-[#0B3D2C]/20 will-change-transform origin-top flex flex-col"
              style={{ zIndex: i }}
            >
              
              {/* ── Step Identity Banner ── */}
              <div className="shrink-0 px-5 md:px-8 py-3 md:py-4 flex items-center justify-between" style={{ backgroundColor: step.accentColor }}>
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="font-mono text-2xl md:text-3xl font-bold text-white/30 leading-none">{step.num}</span>
                  <div>
                    <p className="text-white font-bold text-sm md:text-base tracking-tight">{step.label}</p>
                    <p className="text-white/60 text-[11px] md:text-xs font-medium">{step.timing}</p>
                  </div>
                </div>
                <span className="font-mono text-[10px] md:text-xs text-white/40 uppercase tracking-widest hidden md:block">WhatsApp Protocol</span>
              </div>

              {/* ── WhatsApp Header Bar ── */}
              <div className="bg-[#075E54] px-4 md:px-8 py-2.5 md:py-3 flex items-center gap-3 md:gap-4 shrink-0">
                {/* Back arrow */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white/80 shrink-0 hidden md:block">
                  <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {/* Avatar */}
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#128C7E] flex items-center justify-center text-white font-bold text-xs shrink-0">
                  SD
                </div>
                {/* Name & status */}
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm truncate">{step.headerName}</p>
                  <p className="text-[#25D366] text-[11px]">{step.headerStatus}</p>
                </div>
                {/* Icons */}
                <div className="flex items-center gap-3 text-white/70 shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="5" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="19" r="1" fill="currentColor"/></svg>
                </div>
              </div>

              {/* ── Chat Body (WhatsApp chat background) ── */}
              <div className="flex-1 px-3 md:px-6 py-4 md:py-6 overflow-y-auto flex flex-col gap-1.5 md:gap-2" style={{ backgroundColor: '#ECE5DD', backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4ccc2' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
                
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
