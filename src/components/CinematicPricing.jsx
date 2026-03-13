import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const PricingCard = React.forwardRef(({ name, price, desc, features, highlighted = false }, ref) => (
    <div 
        ref={ref}
        className={`p-6 md:p-10 rounded-premium border transition-all duration-500 hover:-translate-y-4 flex flex-col h-full ${highlighted
            ? 'bg-[var(--surface-dark)] text-white border-white/10 shadow-3xl lg:scale-105 z-10'
            : 'bg-white text-[var(--text)] border-[var(--primary)]/5 shadow-sm'
        }`}>
        <div className="font-data text-[10px] tracking-[0.2em] uppercase mb-8 md:mb-10 opacity-60 font-bold">{name}</div>
        <div className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
            {price}<span className="text-base font-medium opacity-40 ml-1">/mo</span>
        </div>
        <div className="text-sm font-medium opacity-60 mb-8 md:mb-12 min-h-[3rem] tracking-tight">{desc}</div>
        <div className="space-y-4 md:space-y-5 mb-12 md:mb-16 flex-1">
            {features.map((f, i) => (
                <div key={i} className="flex items-start gap-4 text-xs font-semibold tracking-tight">
                    <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${highlighted ? 'bg-[var(--primary)] shadow-[0_0_8px_var(--primary)]' : 'bg-[var(--primary)]/30'}`} />
                    <span className={highlighted ? 'text-white/80' : 'text-[var(--text)]/60'}>{f}</span>
                </div>
            ))}
        </div>
        <button className={`w-full py-4 md:py-5 rounded-full font-bold text-[11px] tracking-[0.15em] uppercase transition-all duration-300 ${highlighted
                ? 'bg-[var(--primary)] text-white hover:bg-white hover:text-[var(--command-black)] shadow-[0_8px_24px_-8px_rgba(37,99,235,0.4)]'
                : 'bg-[var(--command-black)] text-white hover:bg-[var(--primary)]'
            }`}>
            Get Started
        </button>
    </div>
));

export default function CinematicPricing({ hideLink = false }) {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".reveal-pricing-header", {
                y: 40,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            cardsRef.current.forEach((card, i) => {
                gsap.from(card, {
                    y: 60,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    delay: i * 0.15,
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
        <section id="pricing" ref={sectionRef} className="py-24 md:py-32 px-6 md:px-24 bg-[var(--background)] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl mb-16 md:mb-24 reveal-pricing-header">
                    <div className="font-data text-[var(--primary)] text-[10px] tracking-[0.2em] uppercase mb-4 font-bold">Investment</div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--command-black)] mb-8 tracking-tighter italic">
                        Transparent Pricing. <span className="text-[var(--primary)] not-italic">One Guarantee.</span>
                    </h2>
                    <p className="text-[var(--command-black)]/60 text-lg md:text-xl leading-relaxed max-w-xl">
                        Fixed monthly retainers. No success fees. No hidden setup costs. Scaled for every clinic stage.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-stretch pt-8">
                    <PricingCard
                        ref={el => cardsRef.current[0] = el}
                        name="Recover"
                        price="₹25K"
                        desc="Missed call recovery. Answered, qualified, and booked in under 8s."
                        features={["Missed Call Intercept", "AI Localized Voice", "WhatsApp Confirmations", "Unified Calendar Sync"]}
                    />
                    <PricingCard
                        ref={el => cardsRef.current[1] = el}
                        name="Grow"
                        price="₹55K"
                        desc="Lead Generation + Recovery. We run ads, you stay in the OT."
                        features={["All in Recover", "Facebook/Google Ad Mgmt", "Priority Lead Routing", "15 Booking Guarantee"]}
                        highlighted={true}
                    />
                    <PricingCard
                        ref={el => cardsRef.current[2] = el}
                        name="Dominate"
                        price="₹1.2L"
                        desc="Full Clinic Growth System. Be the first choice in your city."
                        features={["All in Grow", "SEO Mastery", "Content Engine", "Direct ROI Dashboards"]}
                    />
                </div>

                <div className="mt-20 flex flex-col md:flex-row items-center justify-end gap-10 border-t border-[var(--primary)]/5 pt-12">
                    {!hideLink && (
                        <Link to="/pricing" className="text-[var(--primary)] text-xs font-bold tracking-widest uppercase border-b-2 border-transparent hover:border-[var(--primary)] transition-all pb-1">
                            Full Breakdown & Comparison →
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}

