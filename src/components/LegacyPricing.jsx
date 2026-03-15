import React from 'react';
import { useModal } from '../context/ModalContext';

const TechnicalBadge = ({ label, value }) => (
    <div className="flex flex-col gap-1 p-3 bg-white/5 border border-white/10 rounded-xl">
        <span className="font-data text-[8px] text-white/30 uppercase tracking-[0.2em]">{label}</span>
        <span className="font-mono text-xs text-[var(--recovery-blue)] font-bold">{value}</span>
    </div>
);

const CallInitiatedAnimation = () => (
    <div className="relative w-full h-48 bg-black/5 rounded-2xl border border-black/5 overflow-hidden flex items-center justify-center group">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(var(--recovery-blue) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
        
        {/* Radar Blips */}
        <div className="absolute w-32 h-32 border border-[var(--recovery-blue)]/30 rounded-full animate-ping" />
        
        <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 bg-[var(--recovery-blue)] rounded-full flex items-center justify-center shadow-[0_0_30px_var(--recovery-blue)]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            </div>
            <span className="mt-4 font-data text-[10px] text-[var(--command-black)] tracking-[0.3em] uppercase animate-pulse">Initiating_Recovery...</span>
        </div>

        {/* Technical Stats Overlay */}
        <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-2">
            <TechnicalBadge label="CPU Usage" value="1.2%_IDLE" />
            <TechnicalBadge label="Net_Latency" value="14ms_STABLE" />
        </div>
    </div>
);

const PricingCard = ({ tier, highlighted = false }) => {
    const { openModal } = useModal();
    return (
        <div 
            className={`p-10 rounded-[32px] border flex flex-col h-full relative group transition-all duration-500 ${
                highlighted 
                ? 'bg-[var(--command-black)] border-white/10 shadow-3xl lg:scale-105 z-10' 
                : 'bg-white border-black/5 shadow-sm hover:border-[var(--recovery-blue)]/20'
            }`}
        >
            {highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--recovery-blue)] text-white text-[9px] font-bold tracking-[0.3em] uppercase px-6 py-2 rounded-full shadow-xl">
                    Most Advanced
                </div>
            )}

            <div className={`font-data text-[10px] tracking-[0.4em] uppercase mb-8 font-bold ${highlighted ? 'text-white/30' : 'text-black/30'}`}>
                {tier.label}
            </div>

            <div className="flex items-baseline gap-2 mb-4">
                <span className={`text-6xl font-bold tracking-tighter ${highlighted ? 'text-white' : 'text-black'}`}>{tier.price}</span>
                <span className={`text-base font-medium ${highlighted ? 'text-white/30' : 'text-black/30'}`}>/mo</span>
            </div>

            <div className={`text-sm font-medium mb-10 leading-relaxed ${highlighted ? 'text-white/60' : 'text-black/60'}`}>
                {tier.description}
            </div>

            {/* Middle Card Special Content */}
            {tier.id === 'grow' && <div className="mb-10"><CallInitiatedAnimation /></div>}

            <div className="space-y-4 mb-12 flex-1">
                {tier.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-4 text-xs font-semibold group/item">
                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 transition-transform group-hover/item:scale-150 ${
                            highlighted ? 'bg-[var(--recovery-blue)]' : 'bg-black/20'
                        }`} />
                        <span className={highlighted ? 'text-white/70' : 'text-black/60'}>{f}</span>
                    </div>
                ))}
            </div>

            <button 
                onClick={openModal}
                className={`w-full py-5 rounded-2xl font-bold text-[11px] tracking-[0.2em] uppercase transition-all duration-300 ${
                    highlighted
                    ? 'bg-white text-black hover:bg-[var(--recovery-blue)] hover:text-white'
                    : 'bg-black text-white hover:bg-[var(--recovery-blue)]'
                }`}
            >
                Get Started →
            </button>
        </div>
    );
};

export default function LegacyPricing() {
    const tiers = [
        {
            id: 'recover',
            label: 'Node_01 // Recover',
            price: '₹25K',
            description: 'The foundation of clinic recovery. Intercepts every missed patient call.',
            features: ['8-second AI callback', 'Google Calendar Sync', 'Basic WhatsApp', 'Weekly Reports']
        },
        {
            id: 'grow',
            label: 'Node_02 // Alpha_Grow',
            price: '₹55K',
            description: 'Advanced lead generation combined with recovery. The complete growth engine.',
            features: ['All Node_01 features', 'Ad Traffic Management', 'Priority Routing', '15-booking Guarantee']
        },
        {
            id: 'dominate',
            label: 'Node_03 // Overlord',
            price: '₹1.2L',
            description: 'The full-scale digital sovereignty system for market-leading clinics.',
            features: ['All Node_02 features', 'Content Strategy', 'SEO Authority', 'Custom Dashboards']
        }
    ];

    return (
        <section id="pricing" className="py-32 md:py-48 px-6 md:px-24 bg-[var(--clinic-white)] relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl mb-24 reveal-header">
                    <div className="font-data text-[var(--recovery-blue)] text-[11px] tracking-[0.4em] uppercase mb-8 font-bold">Investment Architecture</div>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-10 tracking-tighter leading-[0.9]">
                        Transparent Pricing. <span className="font-drama italic text-[var(--recovery-blue)]">one guarantee.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-8">
                    {tiers.map((tier, i) => (
                        <PricingCard key={tier.id} tier={tier} highlighted={i === 1} />
                    ))}
                </div>
            </div>
        </section>
    );
}
