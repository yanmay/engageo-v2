import React from 'react';

const PricingCard = ({ name, price, desc, features, highlighted = false }) => (
    <div className={`p-10 rounded-premium border transition-all duration-500 hover:-translate-y-4 ${highlighted
            ? 'bg-[var(--moss)] text-white border-[var(--moss)] shadow-2xl scale-105 z-10'
            : 'bg-white text-[var(--charcoal)] border-[var(--moss)]/5'
        }`}>
        <div className="font-data text-xs tracking-widest uppercase mb-8 opacity-60">{name}</div>
        <div className="text-4xl md:text-5xl font-bold mb-4">{price}</div>
        <div className="text-sm opacity-60 mb-10 min-h-[3rem]">{desc}</div>
        <div className="space-y-4 mb-12">
            {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                    <div className={`w-1.5 h-1.5 rounded-full ${highlighted ? 'bg-[var(--clay)]' : 'bg-[var(--moss)]'}`} />
                    {f}
                </div>
            ))}
        </div>
        <button className={`w-full py-4 rounded-full font-bold text-xs tracking-widest uppercase transition-all ${highlighted
                ? 'bg-[var(--clay)] text-white hover:bg-white hover:text-[var(--moss)]'
                : 'bg-[var(--charcoal)] text-white hover:bg-[var(--moss)]'
            }`}>
            Get Started
        </button>
    </div>
);

export default function CinematicPricing() {
    return (
        <section id="pricing" className="py-32 px-8 md:px-24 bg-[var(--cream)]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <div className="font-data text-[var(--clay)] text-xs tracking-widest uppercase mb-4">Investment</div>
                    <h2 className="text-5xl md:text-6xl font-bold text-[var(--charcoal)] mb-6">Pick Your Growth Stage</h2>
                    <p className="text-[var(--charcoal)]/60 max-w-lg mx-auto">Most clinics start at Recover.<br />Most stay for Dominate.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <PricingCard
                        name="Recover"
                        price="₹25K/mo"
                        desc="Missed call recovery. Answered, qualified, and booked in under 8s."
                        features={["Missed Call Intercept", "AI Localized Voice", "WhatsApp Confirmations", "Google Calendar Sync"]}
                    />
                    <PricingCard
                        name="Grow"
                        price="₹55K/mo"
                        desc="Lead Generation + Recovery. We run ads, you stay in the OT."
                        features={["All in Recover", "Facebook/Google Ad Mgmt", "Priority Lead Routing", "15 Matching Guarantee"]}
                        highlighted={true}
                    />
                    <PricingCard
                        name="Dominate"
                        price="₹1.2L/mo"
                        desc="Full Clinic Growth System. Be the first choice in your city."
                        features={["All in Grow", "SEO Mastery", "Content Engine", "Direct ROI Dashboards"]}
                    />
                </div>

                <p className="mt-20 text-center text-[var(--charcoal)]/40 text-xs font-medium max-w-2xl mx-auto italic">
                    * The 15-Booking Guarantee: If your clinic doesn't receive 15 confirmed bookings in the first 30 days, we extend service at zero cost until we hit that number.
                </p>
            </div>
        </section>
    );
}
