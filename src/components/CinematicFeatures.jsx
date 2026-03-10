import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

// Card 1: Diagnostic Shuffler
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
        <div className="relative h-48 w-full flex items-center justify-center overflow-hidden">
            {items.map((item, i) => (
                <div
                    key={item}
                    className="absolute w-[80%] h-12 bg-white border border-[var(--moss)]/10 rounded-xl flex items-center px-6 shadow-sm transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                    style={{
                        transform: `translateY(${(i - 1) * 60}px) scale(${1 - Math.abs(i - 1) * 0.1})`,
                        opacity: i === 1 ? 1 : 0.4,
                        zIndex: i === 1 ? 20 : 10
                    }}
                >
                    <div className="w-2 h-2 rounded-full bg-[var(--moss)] mr-4 animate-pulse" />
                    <span className="font-data text-xs text-[var(--charcoal)]">{item}</span>
                </div>
            ))}
        </div>
    );
};

// Card 2: Telemetry Typewriter
const TypewriterCard = () => {
    const [text, setText] = useState("");
    const fullText = "Incoming call from +91 98XXX XXX01... [RECOVERED] Patient: Mrs. Sharma. Slot: 4:30 PM Tomorrow.";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i));
            i = (i + 1) % (fullText.length + 5);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-[var(--charcoal)] p-6 rounded-2xl h-48 flex flex-col font-data text-[10px]">
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
                <span className="text-white/40 tracking-widest uppercase">Live Telemetry</span>
                <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--clay)] animate-pulse" />
                    <span className="text-[var(--clay)]">Feed Active</span>
                </div>
            </div>
            <div className="text-[var(--cream)]/80 leading-relaxed">
                {text}
                <span className="inline-block w-1 h-3 bg-[var(--clay)] ml-1 animate-ping" />
            </div>
        </div>
    );
};

// Card 3: Protocol Scheduler
const SchedulerCard = () => {
    const cursorRef = useRef(null);
    const [activeDay, setActiveDay] = useState(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });

        tl.to(cursorRef.current, { x: 40, y: 30, duration: 1, ease: "power2.inOut" })
            .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
            .call(() => setActiveDay(2)) // Highlight Tuesday
            .to(cursorRef.current, { scale: 1, duration: 0.1 })
            .to(cursorRef.current, { x: 120, y: 70, duration: 1.2, ease: "power2.inOut", delay: 0.5 })
            .to(cursorRef.current, { opacity: 0, duration: 0.3 });

        return () => tl.kill();
    }, []);

    return (
        <div className="relative bg-white p-6 rounded-2xl h-48 flex flex-col border border-[var(--moss)]/10">
            <div className="grid grid-cols-7 gap-2 mb-4">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                    <div
                        key={i}
                        className={`h-8 flex items-center justify-center rounded-lg text-[10px] font-bold transition-colors ${activeDay === i ? 'bg-[var(--clay)] text-white' : 'bg-[var(--cream)] text-[var(--charcoal)]/40'}`}
                    >
                        {day}
                    </div>
                ))}
            </div>
            <div className="mt-auto flex justify-end">
                <div className="px-4 py-2 bg-[var(--moss)] text-white text-[10px] font-bold rounded-lg opacity-50">Save Slot</div>
            </div>
            {/* SVG Cursor */}
            <svg
                ref={cursorRef}
                className="absolute pointer-events-none z-30"
                width="20" height="20" viewBox="0 0 20 20" fill="none"
            >
                <path d="M5 2L15 12L10 13L9 18L5 2Z" fill="black" stroke="white" strokeWidth="1.5" />
            </svg>
        </div>
    );
};

export default function CinematicFeatures() {
    const features = [
        {
            title: "Revenue from Day 1",
            desc: "Intercepts calls, routes via logic, and books appointments seamlessly.",
            visual: <ShufflerCard />
        },
        {
            title: "Lowest Risk Entry",
            desc: "15 confirmed bookings in 30 days or we extend service at zero cost.",
            visual: <TypewriterCard />
        },
        {
            title: "Proven Infrastructure",
            desc: "The same AI-voice tech recovering ₹5–20L/month across clinics.",
            visual: <SchedulerCard />
        }
    ];

    return (
        <section id="platform" className="py-24 px-8 md:px-24 bg-[var(--cream)]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <div className="font-data text-[var(--clay)] text-xs tracking-widest uppercase mb-4">Platform Capabilities</div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--charcoal)] mb-6">Flawless execution.<br />Not just chatbots.</h2>
                    <p className="max-w-2xl text-[var(--charcoal)]/60 text-lg leading-relaxed">
                        Bridge the gap between raw missed calls and confirmed hospital pipeline with a platform designed for clinical precision.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="group bg-white rounded-premium border border-[var(--moss)]/5 p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            <div className="mb-10 overflow-hidden rounded-2xl">
                                {f.visual}
                            </div>
                            <h3 className="text-2xl font-bold text-[var(--charcoal)] mb-4">{f.title}</h3>
                            <p className="text-[var(--charcoal)]/60 text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
