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
                    <div className="reveal-fade font-data flex items-center gap-3 text-[var(--recovery-blue)] text-xs tracking-[0.3em] uppercase mb-10">
                        <div className="relative flex items-center justify-center">
                            <span className="w-2 h-2 rounded-full bg-[var(--recovery-blue)] relative z-10" />
                            <span className="live-pulse absolute w-2 h-2 rounded-full bg-[var(--recovery-blue)]" />
                        </div>
                        Autonomous Recovery Systems Active
                    </div>

                    <h1 className="mb-14">
                        <div className="overflow-hidden mb-2">
                            <span className="reveal-line block text-4xl md:text-5xl lg:text-7xl text-white font-bold tracking-tight">
                                Your clinic loses ₹4–12L
                            </span>
                        </div>
                        <div className="overflow-hidden mb-6">
                            <span className="reveal-line block text-4xl md:text-5xl lg:text-6xl text-white/40 font-bold tracking-tight">
                                to missed calls every month.
                            </span>
                        </div>
                        <div className="overflow-hidden">
                            <span className="reveal-line font-drama block text-7xl md:text-8xl lg:text-[11rem] text-white leading-[0.85] drop-shadow-2xl">
                                We Fix That.
                            </span>
                        </div>
                    </h1>

                    <p className="reveal-fade max-w-lg text-white/70 text-lg md:text-xl leading-relaxed mb-14 font-medium italic border-l border-[var(--recovery-blue)] pl-6">
                        8-second AI callback. Hinglish voice agent. Unified scheduling. Messaging confirmation.
                    </p>

                    <div className="reveal-fade flex flex-wrap gap-6 font-data items-center">
                        <button 
                            onClick={openModal}
                            className="btn-magnetic group px-12 py-6 bg-[var(--recovery-blue)] text-white rounded-full font-bold text-sm tracking-widest uppercase relative shadow-2xl shadow-blue-500/20"
                        >
                            <span className="relative z-10">Get Free Audit →</span>
                        </button>



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
            </div>

            {/* Key Metrics Floating */}
            <div className="absolute bottom-12 right-12 z-10 hidden lg:flex flex-col gap-8 items-end reveal-fade">
                {[
                    { label: "AI Response", val: "8 seconds" },
                    { label: "Industry Avg Recovered", val: "₹2.4 Crore" },
                    { label: "Clinic Miss Rate", val: "23%" }
                ].map((stat, i) => (
                    <div key={i} className="font-data text-right border-r-2 border-[var(--recovery-blue)] pr-6 py-1 bg-white/5 backdrop-blur-sm p-4 rounded-lg lift-on-hover">
                        <div className="text-white/40 text-[10px] uppercase tracking-widest mb-1">{stat.label}</div>
                        <div className="text-white text-2xl font-bold">{stat.val}</div>
                    </div>
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4 opacity-30 reveal-fade">
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
                <span className="font-data text-[8px] tracking-[0.4em] uppercase text-white animate-pulse">Scroll</span>
            </div>
        </section>
    );
}
