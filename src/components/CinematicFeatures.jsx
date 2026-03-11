import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

// Card 1: Diagnostic Shuffler (Task 3.1)
const ShufflerCard = () => {
    const [items, setItems] = useState([
        "Intercepting Call...",
        "Qualifying Patient...",
        "Booking Slot..."
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setItems(prev => {
                const next = [...prev];
                next.unshift(next.pop());
                return next;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-48 w-full flex items-center justify-center overflow-hidden bg-[var(--background)]/50">
            {items.map((item, i) => (
                <div
                    key={item}
                    className="absolute w-[85%] h-14 bg-white border border-[var(--primary)]/10 rounded-2xl flex items-center px-6 shadow-[0_4px_12px_rgba(37,99,235,0.05)] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                    style={{
                        transform: `translateY(${(i - 1) * 64}px) scale(${1 - Math.abs(i - 1) * 0.08})`,
                        opacity: i === 1 ? 1 : 0.4,
                        zIndex: i === 1 ? 20 : 10,
                        borderLeft: i === 1 ? '4px solid var(--primary)' : '1px solid var(--primary)/10'
                    }}
                >
                    <div className="w-2 h-2 rounded-full bg-[var(--primary)] mr-4 animate-pulse" />
                    <span className="font-data text-[10px] tracking-wider text-[var(--command-black)] uppercase">{item}</span>
                </div>
            ))}
        </div>
    );
};

// Card 2: Telemetry Typewriter (Task 3.2)
const TypewriterCard = () => {
    const [lines, setLines] = useState([]);
    const [activeLine, setActiveLine] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [recoveryValue, setRecoveryValue] = useState(0);
    const scrollRef = useRef(null);

    const fullLines = [
        { label: "INIT", text: "Engageo Protocol v1.4.2 Booting...", color: "text-white/20" },
        { label: "SCAN", text: "Missed Call Detected: CID-8842", color: "text-white/40" },
        { label: "SYNC", text: "Phone ID: +91 97xxx 38xxx", color: "text-[var(--primary)]" },
        { label: "AI_V", text: "Synthesizing Hinglish voice agent...", color: "text-[var(--sovereign-gold)]" },
        { label: "VOIC", text: "Namaste! Dr. Arora's clinic here...", color: "text-white/60" },
        { label: "QUAL", text: "Qualification: Dental Implant Intent", color: "text-[var(--primary)]" },
        { label: "GCAL", text: "Checking availability... Slot found.", color: "text-white/40" },
        { label: "BOOK", text: "Slot secured: Today 2:00 PM", color: "text-[var(--signal-green)]" },
        { label: "WAT1", text: "WhatsApp confirmation dispatched.", color: "text-[var(--signal-green)]" },
        { label: "RECO", text: "Value Recovered: ", value: 45000, color: "text-[var(--recovered-green)] font-bold text-base mt-2" }
    ];

    useEffect(() => {
        let timer;
        if (activeLine < fullLines.length) {
            const currentLine = fullLines[activeLine];
            const targetText = currentLine.text;
            
            if (charIndex < targetText.length) {
                // Organic typing: faster for long words, pauses for punctuation
                const isPunctuation = [".", ":", "!", ","].includes(targetText[charIndex-1]);
                const delay = isPunctuation ? 400 : Math.random() * 30 + 10;
                
                timer = setTimeout(() => {
                    setCharIndex(prev => prev + 1);
                }, delay);
            } else {
                // Line completed
                timer = setTimeout(() => {
                    setLines(prev => [...prev, fullLines[activeLine]]);
                    setActiveLine(prev => prev + 1);
                    setCharIndex(0);
                    
                    // Trigger recovery counter if it's the last line
                    if (activeLine === fullLines.length - 1) {
                         const start = 0;
                         const end = fullLines[activeLine].value;
                         const duration = 1500;
                         let startTime = null;

                         const animateValue = (timestamp) => {
                             if (!startTime) startTime = timestamp;
                             const progress = Math.min((timestamp - startTime) / duration, 1);
                             setRecoveryValue(Math.floor(progress * end));
                             if (progress < 1) requestAnimationFrame(animateValue);
                         };
                         requestAnimationFrame(animateValue);
                    }
                }, 600);
            }
        } else {
            // Wait and restart
            timer = setTimeout(() => {
                setLines([]);
                setActiveLine(0);
                setCharIndex(0);
                setRecoveryValue(0);
            }, 8000);
        }
        return () => clearTimeout(timer);
    }, [activeLine, charIndex]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [lines, charIndex]);

    return (
        <div className="bg-[var(--command-black)] p-5 rounded-2xl h-64 flex flex-col font-data text-[10px] border border-white/10 shadow-3xl overflow-hidden relative group">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/[0.02] to-transparent h-full w-full animate-scan z-10" />
            
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3 relative z-20">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                    <span className="text-white/40 tracking-[0.2em] uppercase text-[9px] font-bold">Protocol_Telemetry</span>
                </div>
                <div className="flex gap-2">
                    <div className="px-2 py-0.5 rounded bg-white/5 text-[var(--primary)] text-[8px] font-bold">STREAM_LIVE</div>
                </div>
            </div>
            
            <div ref={scrollRef} className="flex-1 space-y-2 relative z-20 overflow-y-auto pr-2 custom-scrollbar">
                {lines.map((line, i) => (
                    <div key={i} className="flex gap-3 items-baseline animate-fade-in py-0.5">
                        <span className="text-white/5 text-[8px] w-4 shrink-0 font-bold">{(i + 1).toString().padStart(2, '0')}</span>
                        <span className="text-white/20 font-bold w-10 text-center bg-white/5 rounded-[2px] shrink-0 text-[7px] uppercase tracking-tighter">{line.label}</span>
                        <span className={`${line.color} tracking-tight leading-relaxed`}>
                            {line.text}
                            {line.value && `₹${line.value.toLocaleString()}`}
                        </span>
                    </div>
                ))}
                
                {activeLine < fullLines.length && (
                    <div className="flex gap-3 items-baseline py-0.5">
                        <span className="text-white/5 text-[8px] w-4 shrink-0 font-bold">{(activeLine + 1).toString().padStart(2, '0')}</span>
                        <span className="text-white/20 font-bold w-10 text-center bg-white/5 rounded-[2px] shrink-0 text-[7px] uppercase tracking-tighter">{fullLines[activeLine].label}</span>
                        <span className={`${fullLines[activeLine].color} tracking-tight inline-flex items-center`}>
                            {fullLines[activeLine].text.slice(0, charIndex)}
                            {fullLines[activeLine].value && activeLine === fullLines.length - 1 && charIndex === fullLines[activeLine].text.length && `₹${recoveryValue.toLocaleString()}`}
                            <span className="inline-block w-1.5 h-3 bg-[var(--primary)] ml-1 shadow-[0_0_8px_var(--primary)] animate-pulse" />
                        </span>
                    </div>
                )}
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[8px] text-white/30 font-bold relative z-20 uppercase tracking-widest">
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <div className="flex items-end gap-[1px] h-2">
                            {[1, 2, 3].map(bar => (
                                <div key={bar} className="w-[2px] bg-[var(--primary)]/50 animate-pulse" style={{ height: `${Math.random() * 100}%` }} />
                            ))}
                        </div>
                        <span className="text-[var(--primary)]">ACTIVE</span>
                    </div>
                    <span>NODE: DL_S14</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-[var(--signal-green)]" />
                    <span>SECURE_SHELL</span>
                </div>
            </div>
            
        </div>
    );
};


// Card 3: Protocol Scheduler (Task 3.3)
const SchedulerCard = () => {
    const cursorRef = useRef(null);
    const clickRippleRef = useRef(null);
    const toastRef = useRef(null);
    const [activeDay, setActiveDay] = useState(2); // Tuesday
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [confirmed, setConfirmed] = useState(false);

    const timeSlots = ['09:00 AM', '11:30 AM', '02:00 PM', '04:15 PM'];

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });

        // Reset state
        tl.set([cursorRef.current], { x: 10, y: 150, opacity: 1, scale: 1 })
          .set(toastRef.current, { y: 20, opacity: 0 })
          .set(clickRippleRef.current, { scale: 0, opacity: 0 })
          .call(() => {
              setSelectedSlot(null);
              setConfirmed(false);
          });

        // Move cursor to a slot
        tl.to(cursorRef.current, { x: 90, y: 85, duration: 1.2, ease: "power2.inOut", delay: 0.5 })
          
          // Click down
          .to(cursorRef.current, { scale: 0.85, duration: 0.15 })
          .call(() => setSelectedSlot(2)) // select 02:00 PM
          
          // Ripple effect
          .set(clickRippleRef.current, { x: 90, y: 85 })
          .to(clickRippleRef.current, { scale: 2.5, opacity: 0, duration: 0.6, ease: "power2.out" }, "<")
          
          // Click up
          .to(cursorRef.current, { scale: 1, duration: 0.15 }, "-=0.4")
          
          // Move cursor to "Confirm" button
          .to(cursorRef.current, { x: 190, y: 195, duration: 1, ease: "power2.inOut" })
          
          // Click Confirm
          .to(cursorRef.current, { scale: 0.85, duration: 0.1 })
          .call(() => setConfirmed(true))
          
          // Show Toast
          .to(toastRef.current, { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.7)" })
          
          // Cursor fade out
          .to(cursorRef.current, { opacity: 0, duration: 0.3 })
          
          // Hold
          .to({}, { duration: 2.5 })
          
          // Hide toast and reset
          .to(toastRef.current, { opacity: 0, y: -10, duration: 0.3 });

        return () => tl.kill();
    }, []);

    return (
        <div className="relative bg-[#FAFAFA] p-5 rounded-2xl h-64 flex flex-col border border-[var(--primary)]/10 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-blue-100 flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    </div>
                    <div>
                        <div className="text-[12px] font-bold text-gray-800 tracking-tight">Dr. Arora</div>
                        <div className="text-[9px] font-medium text-gray-400">Google Calendar Sync</div>
                    </div>
                </div>
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-1.5 mb-3">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                    <div
                        key={i}
                        className={`h-7 flex items-center justify-center rounded-[6px] text-[9px] font-bold transition-all duration-300 ${activeDay === i ? 'bg-[var(--primary)] text-white shadow-sm' : 'bg-white text-gray-400 border border-gray-100'}`}
                    >
                        {day}
                    </div>
                ))}
            </div>

            {/* Slots Grid */}
            <div className="grid grid-cols-2 gap-2 mb-4">
                {timeSlots.map((time, i) => (
                    <div 
                        key={i}
                        className={`h-8 flex items-center justify-center rounded-lg text-[10px] font-bold transition-all duration-300 border ${
                            selectedSlot === i 
                                ? 'bg-blue-50/50 border-[var(--primary)] text-[var(--primary)]' 
                                : confirmed 
                                    ? 'bg-gray-50 border-gray-100 text-gray-300' 
                                    : 'bg-white border-gray-100 text-gray-500 hover:border-blue-200'
                        }`}
                    >
                        {time}
                    </div>
                ))}
            </div>

            {/* Footer Action */}
            <div className="mt-auto flex justify-between items-center pt-2 border-t border-gray-100">
                <div className="text-[9px] text-gray-400 font-medium">Slot ID: #9942</div>
                <div className={`px-4 py-1.5 text-[10px] font-bold rounded-lg transition-all duration-300 ${
                    confirmed ? 'bg-[var(--signal-green)] text-white shadow-md' : selectedSlot !== null ? 'bg-[var(--primary)] text-white' : 'bg-gray-200 text-gray-400'
                }`}>
                    {confirmed ? 'Secured' : 'Confirm'}
                </div>
            </div>

            {/* Success Toast */}
            <div 
                ref={toastRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--command-black)] text-white text-[10px] px-4 py-2 rounded-full font-bold shadow-2xl border border-white/20 whitespace-nowrap flex items-center gap-2 z-40"
            >
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--signal-green)] animate-pulse" />
                WhatsApp Dispatched
            </div>

            {/* Click Ripple */}
            <div 
                ref={clickRippleRef}
                className="absolute w-4 h-4 rounded-full border-2 border-[var(--primary)] opacity-0 pointer-events-none z-20"
                style={{ transform: 'translate(-50%, -50%)' }}
            />

            {/* SVG Cursor */}
            <svg
                ref={cursorRef}
                className="absolute pointer-events-none z-30 drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)] origin-top-left"
                width="22" height="22" viewBox="0 0 20 20" fill="none"
            >
                <path d="M5 2L15 12L10 13L9 18L5 2Z" fill="#1A1A1A" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
        </div>
    );
};

export default function CinematicFeatures() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    const features = [
        {
            title: "Instant Response",
            desc: "Intercepts calls within 5 seconds. Our AI calls back while patient intent is at its peak — recovering what would be lost revenue.",
            visual: <ShufflerCard />
        },
        {
            title: "Real-time Intelligence",
            desc: "Watch the platform qualify specialty interest, gauge urgency, and confirm budget — all processed with clinical terminology.",
            visual: <TypewriterCard />
        },
        {
            title: "Seamless Integration",
            desc: "Direct synchronization with your Google Calendar and automated WhatsApp follow-ups. No manual data entry for your staff.",
            visual: <SchedulerCard />
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".reveal-header", {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            cardsRef.current.forEach((card, i) => {
                gsap.from(card, {
                    y: 60,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    }
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section 
            id="platform" 
            ref={sectionRef}
            className="py-24 px-6 md:px-24 bg-[var(--background)] relative overflow-hidden"
        >
            {/* Subtle background flare */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-20 reveal-header">
                    <div className="font-data text-[var(--primary)] text-[10px] tracking-[0.2em] uppercase mb-4 font-bold">Platform Capabilities</div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl text-[var(--command-black)] mb-8 tracking-tighter">Flawless execution.<br /><span className="text-[var(--primary)]">Not just chatbots.</span></h2>
                    <p className="max-w-2xl text-[var(--command-black)]/60 text-lg md:text-xl leading-relaxed">
                        Bridge the gap between raw missed calls and confirmed hospital pipeline with a platform designed for clinical precision.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {features.map((f, i) => (
                        <div 
                            key={i} 
                            ref={el => cardsRef.current[i] = el}
                            className="group bg-white rounded-premium border border-[var(--primary)]/5 p-6 md:p-10 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-3"
                        >
                            <div className="mb-8 md:mb-12 overflow-hidden rounded-[1.5rem] border border-[var(--primary)]/5 shadow-inner">
                                {f.visual}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-[var(--command-black)] mb-4 tracking-tight">{f.title}</h3>
                            <p className="text-[var(--command-black)]/50 text-sm md:text-base leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
