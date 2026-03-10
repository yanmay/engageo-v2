import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProtocolCard = ({ step, title, desc, children }) => (
    <div className="protocol-card sticky top-0 w-full h-screen flex items-center justify-center bg-[var(--charcoal)] border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl px-8 md:px-24">
            <div className="flex flex-col justify-center">
                <div className="font-data text-[var(--clay)] text-sm mb-6">[{step}]</div>
                <h3 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-8">{title}</h3>
                <p className="text-white/60 text-lg leading-relaxed max-w-md">{desc}</p>
            </div>
            <div className="flex items-center justify-center p-8 bg-white/5 rounded-premium backdrop-blur-sm border border-white/10">
                {children}
            </div>
        </div>
    </div>
);

export default function ProtocolStack() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".protocol-card");

            cards.forEach((card, i) => {
                if (i < cards.length - 1) {
                    gsap.to(card, {
                        scale: 0.9,
                        opacity: 0.5,
                        filter: "blur(20px)",
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
        <div ref={containerRef} className="bg-[var(--charcoal)]">
            <ProtocolCard
                step="01"
                title="Integration"
                desc="AI voice & WhatsApp connect seamlessly to your existing clinic phone system and CRM."
            >
                <svg width="200" height="200" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="80" stroke="var(--clay)" strokeWidth="0.5" fill="none" opacity="0.3" />
                    <g className="animate-spin-slow origin-center" style={{ animationDuration: '20s' }}>
                        {[...Array(12)].map((_, i) => (
                            <circle key={i} cx={100 + 80 * Math.cos(i * Math.PI / 6)} cy={100 + 80 * Math.sin(i * Math.PI / 6)} r="4" fill="var(--clay)" />
                        ))}
                    </g>
                </svg>
            </ProtocolCard>

            <ProtocolCard
                step="02"
                title="Immediate Recovery"
                desc="Instant callback to any missed patient call using localized AI voice agents."
            >
                <div className="relative w-64 h-32 bg-white/5 rounded-xl overflow-hidden border border-white/10">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[var(--clay)] shadow-[0_0_20px_var(--clay)] animate-scan" />
                    <div className="grid grid-cols-10 grid-rows-5 gap-2 p-4 h-full opacity-20">
                        {[...Array(50)].map((_, i) => <div key={i} className="bg-white rounded-full h-1 w-1" />)}
                    </div>
                </div>
            </ProtocolCard>

            <ProtocolCard
                step="03"
                title="Confirmed Bookings"
                desc="High-ticket patients scheduled automatically onto your calendar without staff lifting a finger."
            >
                <svg width="300" height="100" viewBox="0 0 300 100">
                    <path
                        className="animate-pulse-draw"
                        d="M0,50 L50,50 L60,20 L80,80 L90,50 L150,50 L160,10 L180,90 L190,50 L300,50"
                        stroke="var(--clay)"
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray="1000"
                        strokeDashoffset="1000"
                    />
                </svg>
            </ProtocolCard>
        </div>
    );
}
