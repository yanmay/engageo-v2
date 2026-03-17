import React, { useEffect, useRef } from 'react';
import { useModal } from '../context/ModalContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PricingCard = React.forwardRef(({ name, price, desc, features, highlighted = false, badge = null, subNote = null }, ref) => {
    const { openModal } = useModal();
    return (
        <div 
            ref={ref}
            className={`p-12 rounded-[3rem] border transition-all duration-700 hover:-translate-y-4 flex flex-col h-full relative group overflow-hidden ${highlighted
                ? 'bg-white/10 text-white border-[var(--recovery-blue)]/30 shadow-[0_40px_100px_rgba(0,0,0,0.5)] lg:scale-105 z-10'
                : 'bg-white/5 text-white border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] glass-premium'
            }`}>
            
            {/* Inner Glow/Variance */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none ${
                highlighted ? 'bg-gradient-to-br from-[var(--clinical-blue)]/5 to-transparent' : 'bg-gradient-to-br from-[var(--clinical-blue)]/2 to-transparent'
            }`} />

            {badge && (
                <div className={`absolute top-8 right-8 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase ${
                    highlighted ? 'bg-[var(--clinical-blue)] text-white shadow-[0_10px_30px_rgba(0,71,255,0.2)]' : 'bg-black/5 text-[var(--ink-black)]/40 border border-black/5'
                }`}>
                    {badge}
                </div>
            )}

            <div className="font-data text-[10px] tracking-[0.4em] uppercase mb-12 text-white/20 font-bold">{name}</div>
            
            <div className="flex items-baseline gap-2 mb-4">
                <span className="text-6xl md:text-7xl font-bold tracking-tighter text-white">{price}</span>
                <span className="text-lg font-medium text-white/20">/mo</span>
            </div>

            {subNote && (
                <div className="font-data text-[9px] uppercase tracking-[0.3em] text-[var(--clinical-blue)] mb-8 font-bold italic">
                    {subNote}
                </div>
            )}
            
            <div className="text-base font-medium text-white/60 mb-12 min-h-[3rem] leading-relaxed tracking-tight">{desc}</div>
            
            <div className="space-y-6 mb-16 flex-1">
                {features.map((f, i) => (
                    <div key={i} className="flex items-start gap-4 text-xs font-bold tracking-tight group/item">
                        <div className={`mt-1.5 w-1 h-1 rounded-full shrink-0 transition-all duration-500 group-hover/item:scale-[2.5] ${
                            highlighted 
                                ? 'bg-[var(--recovery-blue)] shadow-[0_0_15px_var(--recovery-blue)]' 
                                : 'bg-white/10'
                        }`} />
                        <span className="text-white/60 group-hover/item:text-white transition-colors duration-300">{f}</span>
                    </div>
                ))}
            </div>

            <button 
                onClick={openModal}
                className={`w-full py-6 rounded-full font-bold text-[10px] tracking-[0.3em] uppercase transition-all duration-500 text-center relative overflow-hidden group/btn ${highlighted
                    ? 'bg-[var(--recovery-blue)] text-white shadow-[0_20px_40px_rgba(0,71,255,0.2)] hover:shadow-[0_25px_50px_rgba(0,71,255,0.3)]'
                    : 'bg-white/5 text-white/40 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
            >
                <span className="relative z-10 font-sans">Get Started →</span>
                {highlighted && <div className="absolute inset-0 translate-y-full group-hover/btn:translate-y-0 bg-white/10 transition-transform duration-500" />}
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
        <section id="pricing" ref={sectionRef} className="py-32 md:py-48 px-6 md:px-24 bg-transparent overflow-hidden relative">
            {/* Subtle Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--clinical-blue)]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--premium-clay)]/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="max-w-3xl mb-24 md:mb-32 reveal-pricing-header">
                    <div className="font-data text-[var(--recovery-blue)] text-[11px] tracking-[0.4em] uppercase mb-8 font-bold">Investment Architecture</div>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-10 tracking-tighter leading-[0.9]">
                        Transparent Pricing. <span className="text-[var(--recovery-blue)] font-drama italic lowercase">One Guarantee.</span>
                    </h2>
                    <p className="text-white/60 text-xl md:text-2xl leading-relaxed max-w-xl font-medium italic">
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

                <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-10 border-t border-black/5 pt-16">
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
                        <a href="/pricing" className="group flex items-center gap-3 text-[var(--clinical-blue)] text-[11px] font-bold tracking-[0.3em] uppercase border-b-2 border-transparent hover:border-[var(--clinical-blue)] transition-all pb-1">
                            Full Comparison Matrix
                            <span className="transition-transform group-hover:translate-x-2">→</span>
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
}

