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
            // Staggered reveal of headline lines
            gsap.from(".reveal-line", {
                y: "105%",
                opacity: 0,
                rotateX: 45,
                duration: 1.8,
                stagger: 0.15,
                ease: "expo.out",
                delay: 0.2
            });

            // Fade in and lift for supporting elements
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
                            <span className="font-data text-[10px] uppercase tracking-[0.4em] text-white/50">Autonomous_Node_Active</span>
                        </div>
                    </div>

                    <h1 className="mb-14 relative group">
                        {/* Cinematic Scanline Effect */}
                        <div className="absolute -inset-x-8 -inset-y-4 bg-[var(--recovery-blue)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl" />
                        
                        <div className="overflow-hidden mb-2">
                            <span className="reveal-line block text-4xl md:text-6xl lg:text-8xl text-white font-bold tracking-tighter leading-[0.9]">
                                Your clinic loses ₹4–12L
                            </span>
                        </div>
                        <div className="overflow-hidden mb-8">
                            <span className="reveal-line block text-4xl md:text-6xl lg:text-7xl text-white/40 font-bold tracking-tighter leading-[0.9]">
                                to missed calls every month.
                            </span>
                        </div>
                        <div className="overflow-hidden relative">
                            <span className="reveal-line font-drama block text-7xl md:text-9xl lg:text-[13rem] text-white leading-[0.8] drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                                We Fix That.
                            </span>
                        </div>
                    </h1>

                    <p className="reveal-fade max-w-xl text-white/60 text-lg md:text-2xl leading-relaxed mb-16 font-medium italic border-l-2 border-[var(--recovery-blue)] pl-10">
                        8-second AI callback. Hinglish voice agent. <br className="hidden md:block" />
                        Unified scheduling. Messaging confirmation.
                    </p>

                    <div className="reveal-fade flex flex-wrap gap-6 font-data items-center">
                        <button 
                            onClick={openModal}
                            className="btn-magnetic group px-12 py-6 bg-[var(--recovery-blue)] text-white rounded-full font-bold text-sm tracking-widest uppercase relative shadow-2xl shadow-blue-500/20"
                        >
                            <span className="relative z-10">Get Free Audit →</span>
                        </button>

                        <a 
                            href="https://calendly.com/engageo/demo" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-magnetic group px-12 py-6 border border-white/20 text-white rounded-full font-bold text-sm tracking-widest uppercase relative hover:bg-white/5 transition-colors flex items-center justify-center"
                        >
                            <span className="relative z-10">Book a Live Demo →</span>
                        </a>

                        <button 
                            onClick={() => {
                                const el = document.getElementById('protocol');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="w-full md:w-auto text-white/40 hover:text-white transition-colors text-[10px] font-bold tracking-[0.2em] uppercase ml-0 md:ml-4"
                        >
                            See how it works
                        </button>
                    </div>
                </div>

                {/* Floating Stat Cards (PRD Task 3) */}
                <div className="hidden lg:block absolute right-32 top-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none">
                    <div className="relative w-full h-full">
                        {/* Card 1 */}
                        <div className="absolute top-0 right-0 reveal-fade bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl skew-x-[-12deg] hover:skew-x-0 transition-transform duration-700 group hover:bg-white/10" style={{ transitionDelay: '0.1s' }}>
                            <div className="font-data text-[10px] text-[var(--recovery-blue)] font-bold tracking-widest uppercase mb-2">Response Speed</div>
                            <div className="text-5xl font-bold text-white tracking-tighter mb-1">8 Seconds</div>
                            <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">AI calls back immediately</div>
                        </div>

                        {/* Card 2 */}
                        <div className="absolute bottom-10 left-0 reveal-fade bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl skew-x-[12deg] hover:skew-x-0 transition-transform duration-700 group hover:bg-white/10" style={{ transitionDelay: '0.3s' }}>
                            <div className="font-data text-[10px] text-[var(--signal-green)] font-bold tracking-widest uppercase mb-2">Total Recovered</div>
                            <div className="text-5xl font-bold text-white tracking-tighter mb-1">₹2.4 Crore</div>
                            <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">In the last 47 days</div>
                        </div>

                        {/* Card 3 */}
                        <div className="absolute top-1/3 left-1/4 reveal-fade bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-700 group hover:bg-white/10" style={{ transitionDelay: '0.5s' }}>
                            <div className="font-data text-[10px] text-[var(--sovereign-gold)] font-bold tracking-widest uppercase mb-2">Industry Avg</div>
                            <div className="text-4xl font-bold text-white tracking-tighter mb-1">23% Miss Rate</div>
                            <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Recovered by Engageo</div>
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
