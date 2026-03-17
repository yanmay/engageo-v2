import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useModal } from '../context/ModalContext';
import ThreeBackground from './ThreeBackground';

export default function CinematicHero() {
    const heroRef = useRef(null);
    const contentRef = useRef(null);
    const { openModal } = useModal();

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Staggered reveal of remaining elements (headline now handled by MagicTextReveal)
            gsap.from(".reveal-fade", {
                opacity: 0,
                y: 20,
                duration: 1.2,
                stagger: 0.1,
                ease: "power2.out",
                delay: 1.0
            });

            // Pulse for the "Live" indicator
            gsap.to(".live-pulse", {
                scale: 1.5,
                opacity: 0,
                duration: 2,
                repeat: -1,
                ease: "power2.out"
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative w-full h-[100dvh] overflow-hidden bg-[var(--command-black)] noise-overlay"
        >
            {/* Mesh Animation Background */}
            <ThreeBackground />

            {/* Heavy Gradient Overlays for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--command-black)] via-[var(--command-black)]/40 to-transparent z-[1]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--command-black)] via-[var(--command-black)]/10 to-transparent opacity-90 z-[1]" />

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-24 lg:p-32 max-w-7xl mx-auto">
                <div ref={contentRef} className="max-w-4xl">


                    <div className="reveal-fade mb-10 overflow-hidden">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[var(--recovery-blue)] live-pulse" />
                            <span className="font-data text-[10px] tracking-widest font-bold text-white/40">Autonomous Node Active</span>
                        </div>
                    </div>

                    <div className="mb-14">
                        <h2 className="reveal-fade text-white font-bold tracking-tighter leading-none mb-4" style={{ fontSize: 'min(70px, 12vw)' }}>
                            Your clinic loses ₹4–12L
                        </h2>
                        <div className="reveal-fade text-white/40 font-bold tracking-tighter leading-none mb-10" style={{ fontSize: 'min(50px, 8vw)' }}>
                            to missed calls every month.
                        </div>
                        <div className="reveal-fade text-white font-bold italic tracking-tighter leading-none italic" style={{ fontSize: 'min(120px, 18vw)', fontFamily: 'Cormorant Garamond, serif' }}>
                            We Fix That.
                        </div>
                    </div>

                    <p className="reveal-fade max-w-xl text-white/60 text-lg md:text-2xl leading-relaxed mb-16 font-medium italic border-l-2 border-[var(--recovery-blue)] pl-10">
                        8-second AI callback. Hinglish voice agent. <br className="hidden md:block" />
                        Unified scheduling. Messaging confirmation.
                    </p>

                    <div className="reveal-fade flex flex-wrap gap-6 font-data items-center">
                        <button
                            onClick={openModal}
                            className="btn-magnetic group px-12 py-6 bg-[var(--recovery-blue)] text-white rounded-full font-bold text-sm tracking-wide relative shadow-[0_20px_40px_rgba(37,99,235,0.25)] inline-flex items-center justify-center transition-all duration-500 hover:shadow-[0_25px_50px_rgba(37,99,235,0.4)]"
                        >
                            <span className="relative z-10">Get free audit →</span>
                        </button>

                        <a
                            href="https://calendly.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-magnetic group px-12 py-6 border border-white/10 text-white rounded-full font-bold text-sm tracking-wide relative hover:bg-white/5 transition-all duration-500 backdrop-blur-sm flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[var(--recovery-blue)] outline-none"
                        >
                            <span className="relative z-10">Book a live demo →</span>
                        </a>

                        <button
                            onClick={() => {
                                const el = document.getElementById('protocol');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="w-full md:w-auto text-white/40 hover:text-white transition-colors text-[10px] font-bold tracking-widest ml-0 md:ml-4"
                        >
                            See how it works
                        </button>
                    </div>
                </div>

                {/* Floating Stat Cards (PRD Task 3) */}
                <div className="hidden lg:block absolute right-32 top-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none">
                    <div className="relative w-full h-full">
                        {/* Card 1 */}
                        <div className="absolute top-0 right-0 reveal-fade bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] skew-x-[-6deg] hover:skew-x-0 transition-all duration-700 group hover:bg-white/[0.06]" style={{ transitionDelay: '0.1s' }}>
                            <div className="font-data text-[10px] text-[var(--recovery-blue)] font-bold tracking-widest mb-3">Response speed</div>
                            <div className="text-5xl font-bold text-white tracking-tighter mb-1 font-data tabular-nums">8 Seconds</div>
                            <div className="text-[10px] text-white/40 font-medium tracking-wide">AI calls back immediately</div>
                        </div>

                        {/* Card 2 */}
                        <div className="absolute bottom-10 left-0 reveal-fade bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] skew-x-[6deg] hover:skew-x-0 transition-all duration-700 group hover:bg-white/[0.06]" style={{ transitionDelay: '0.3s' }}>
                            <div className="font-data text-[10px] text-[var(--signal-green)] font-bold tracking-widest mb-3">Total recovered</div>
                            <div className="text-5xl font-bold text-white tracking-tighter mb-1 font-data tabular-nums">₹2.4 Crore</div>
                            <div className="text-[10px] text-white/40 font-medium tracking-wide">In the last 47 days</div>
                        </div>

                        {/* Card 3 */}
                        <div className="absolute top-1/3 left-1/4 reveal-fade bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-6 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 hover:translate-y-[-4px] transition-all duration-700 group hover:bg-white/[0.06]" style={{ transitionDelay: '0.5s' }}>
                            <div className="font-data text-[10px] text-[var(--sovereign-gold)] font-bold tracking-widest mb-3">Industry avg</div>
                            <div className="text-4xl font-bold text-white tracking-tighter mb-1 font-data tabular-nums">23% Miss rate</div>
                            <div className="text-[10px] text-white/40 font-medium tracking-wide">Recovered by Engageo</div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4 opacity-30 reveal-fade">
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
                <span className="font-data text-[8px] tracking-[0.4em] uppercase text-white animate-pulse">Scroll</span>
            </div>
        </section>
    );
}
