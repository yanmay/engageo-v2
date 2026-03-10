import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CinematicHero() {
    const heroRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Staggered reveal
            gsap.from(".reveal-item", {
                y: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: "power3.out",
                delay: 0.5
            });

            // Subtle parallax on mouse move
            const handleMouseMove = (e) => {
                const { clientX, clientY } = e;
                const xPos = (clientX / window.innerWidth - 0.5) * 20;
                const yPos = (clientY / window.innerHeight - 0.5) * 20;

                gsap.to(".hero-bg", {
                    x: xPos,
                    y: yPos,
                    duration: 1,
                    ease: "power2.out"
                });
            };

            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative w-full h-[100dvh] overflow-hidden bg-[var(--command-black)] noise-overlay"
        >
            {/* Background / Pipeline Visual */}
            <div className="absolute inset-0 flex items-center justify-end overflow-hidden">
                <div 
                    className="hero-bg w-1/2 h-full opacity-60 scale-110"
                    style={{
                        backgroundImage: 'url("/assets/automation-pipeline.png")',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center right',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
            </div>

            {/* Heavy Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--command-black)] via-[var(--command-black)]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--command-black)] via-[var(--command-black)]/20 to-transparent opacity-90" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-24 lg:p-32 max-w-7xl mx-auto">
                <div ref={contentRef} className="max-w-3xl">
                    <div className="reveal-item font-data flex items-center gap-3 text-[var(--recovery-blue)] text-xs tracking-[0.3em] uppercase mb-8">
                        <span className="w-2 h-2 rounded-full bg-[var(--recovery-blue)] animate-pulse" />
                        Autonomous Recovery Systems Active
                    </div>

                    <h1 className="reveal-item mb-12">
                        <span className="block text-4xl md:text-5xl lg:text-7xl text-white font-bold tracking-tight mb-4">
                            Your clinic loses ₹4–12L
                        </span>
                        <span className="block text-4xl md:text-5xl lg:text-6xl text-white/40 font-bold tracking-tight mb-6">
                            to missed calls every month.
                        </span>
                        <span className="font-drama block text-7xl md:text-8xl lg:text-[9rem] text-white leading-[0.8] drop-shadow-2xl">
                            We Fix That.
                        </span>
                    </h1>

                    <p className="reveal-item max-w-lg text-white/70 text-lg md:text-xl leading-relaxed mb-12 font-medium">
                        8-second AI callback. Hinglish voice agent. Google Calendar booking. WhatsApp confirmation. Zero setup needed.
                    </p>

                    <div className="reveal-item flex flex-wrap gap-6 font-data">
                        <button className="btn-magnetic group px-10 py-5 bg-[var(--recovery-blue)] text-white rounded-full font-bold text-sm tracking-widest uppercase relative shadow-lg shadow-blue-500/20">
                            <span className="relative z-10">Get Free Audit →</span>
                        </button>

                        <button className="px-10 py-5 border border-white/20 text-white rounded-full font-bold text-sm tracking-widest uppercase backdrop-blur-md hover:bg-white/5 transition-all">
                            See how it works
                        </button>
                    </div>
                </div>
            </div>

            {/* Key Metrics Floating */}
            <div className="absolute bottom-12 right-12 z-10 flex flex-col gap-8 items-end">
                {[
                    { label: "AI Response", val: "8 seconds" },
                    { label: "Industry Avg Recovered", val: "₹2.4 Crore" },
                    { label: "Clinic Miss Rate", val: "23%" }
                ].map((stat, i) => (
                    <div key={i} className="reveal-item font-data text-right border-r-2 border-[var(--recovery-blue)] pr-6 py-1 bg-white/5 backdrop-blur-sm p-4 rounded-lg">
                        <div className="text-white/40 text-[10px] uppercase tracking-widest mb-1">{stat.label}</div>
                        <div className="text-white text-2xl font-bold">{stat.val}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
