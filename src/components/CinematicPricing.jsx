import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PricingCard = React.forwardRef(({ name, price, desc, features, highlighted = false, badge = null, subNote = null }, ref) => {
    const { openModal } = useModal();
    return (
        <div 
            ref={ref}
            className={`p-10 rounded-premium border transition-all duration-500 hover:-translate-y-4 flex flex-col h-full relative group ${highlighted
                ? 'bg-white/[0.05] text-white border-[var(--recovery-blue)]/30 shadow-3xl lg:scale-105 z-10'
                : 'bg-white/[0.02] text-white border-white/10 shadow-sm hover:border-white/20'
            }`}>
            
            {badge && (
                <div className={`absolute top-6 right-6 px-3 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase ${
                    highlighted ? 'bg-[var(--primary)] text-white' : 'bg-[var(--primary)]/10 text-[var(--primary)]'
                }`}>
                    {badge}
                </div>
            )}

            <div className="font-data text-[11px] tracking-[0.3em] uppercase mb-10 text-white/40 font-bold">{name}</div>
            
            <div className="flex items-baseline gap-1 mb-4">
                <span className="text-5xl md:text-6xl font-bold tracking-tighter text-white">{price}</span>
                <span className="text-base font-medium text-white/30">/mo</span>
            </div>

            {subNote && (
                <div className="font-data text-[10px] uppercase tracking-widest text-white/40 mb-8 font-bold italic">
                    {subNote}
                </div>
            )}
            
            <div className="text-sm font-medium text-white/60 mb-12 min-h-[3rem] leading-relaxed tracking-tight">{desc}</div>
            
            <div className="space-y-5 mb-16 flex-1">
                {features.map((f, i) => (
                    <div key={i} className="flex items-start gap-4 text-xs font-semibold tracking-tight group/item">
                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-300 group-hover/item:scale-150 ${
                            highlighted 
                                ? 'bg-[var(--recovery-blue)] shadow-[0_0_12px_var(--recovery-blue)]' 
                                : 'bg-[var(--recovery-blue)]/40 shadow-[0_0_8px_rgba(37,99,235,0.2)]'
                        }`} />
                        <span className="text-white/70">{f}</span>
                    </div>
                ))}
            </div>

            <button 
                onClick={openModal}
                className={`w-full py-5 rounded-full font-bold text-[11px] tracking-[0.2em] uppercase transition-all duration-300 text-center ${highlighted
                    ? 'bg-[var(--recovery-blue)] text-white hover:bg-white hover:text-black shadow-xl'
                    : 'bg-white/10 text-white hover:bg-[var(--recovery-blue)]'
                }`}
            >
                Get Started →
            </button>
        </div>
    );
});

export default function CinematicPricing({ hideLink = false }) {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".reveal-pricing-header", {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            cardsRef.current.forEach((card, i) => {
                if (!card) return;
                gsap.from(card, {
                    y: 60,
                    opacity: 0,
                    duration: 1.4,
                    ease: "power4.out",
                    delay: i * 0.2,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                    }
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="pricing" ref={sectionRef} className="py-32 md:py-48 px-6 md:px-24 bg-[var(--command-black)] overflow-hidden relative">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="max-w-3xl mb-24 md:mb-32 reveal-pricing-header">
                    <div className="font-data text-[var(--recovery-blue)] text-[11px] tracking-[0.4em] uppercase mb-8 font-bold">Investment Architecture</div>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-10 tracking-tighter leading-[0.9]">
                        Transparent Pricing. <span className="text-[var(--recovery-blue)] font-drama italic lowercase">One Guarantee.</span>
                    </h2>
                    <p className="text-white/60 text-xl md:text-2xl leading-relaxed max-w-xl font-medium">
                        Fixed monthly retainers. No success fees. Scaled for every clinic type.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-stretch pt-8">
                    <PricingCard
                        ref={el => cardsRef.current[0] = el}
                        name="Recover"
                        price="₹25K"
                        subNote="One-Time Setup Included"
                        desc="Missed call recovery. Answered, qualified, and booked in under 8s."
                        features={["Missed Call Intercept", "AI Localized Voice", "WhatsApp Automations", "Calendar Integration"]}
                    />
                    <PricingCard
                        ref={el => cardsRef.current[1] = el}
                        name="Grow"
                        price="₹55K"
                        desc="Lead Generation + Recovery. We run ads, you stay in the OT."
                        features={["All in Recover", "Facebook/Google Ad Mgmt", "Priority Lead Routing", "15 Booking Guarantee"]}
                        highlighted={true}
                        badge="MOST POPULAR"
                    />
                    <PricingCard
                        ref={el => cardsRef.current[2] = el}
                        name="Dominate"
                        price="₹1.2L"
                        desc="Full Clinic Growth System. Be the first choice in your city."
                        features={["All in Grow", "SEO Authority Builder", "Content Engine", "Direct ROI Dashboards"]}
                    />
                </div>

                <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-10 border-t border-white/5 pt-16">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[var(--recovery-blue)]/5 flex items-center justify-center">
                            <span className="text-[var(--recovery-blue)] text-xl">🛡️</span>
                        </div>
                        <p className="font-data text-[10px] text-white/40 tracking-widest uppercase text-left">
                            All tiers protected by our <br />
                            <span className="text-white font-bold">15-booking guarantee.</span>
                        </p>
                    </div>
                    
                    {!hideLink && (
                        <Link to="/pricing" className="group flex items-center gap-3 text-[var(--recovery-blue)] text-[11px] font-bold tracking-[0.3em] uppercase border-b-2 border-transparent hover:border-[var(--recovery-blue)] transition-all pb-1">
                            Full Comparison Matrix
                            <span className="transition-transform group-hover:translate-x-2">→</span>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}

