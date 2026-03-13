import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const pricingFaqs = [
    {
        q: "What happens if 15 bookings are not delivered?",
        a: "Our guarantee is absolute. If we don't deliver at least 15 confirmed bookings in your first 30 days, we continue providing our full service at zero cost until the goal is met. No extensions, no fine print—just results."
    },
    {
        q: "How long does it take to go live?",
        a: "We operate at surgical speed. Onboarding happens on Day 1, AI training on Day 2, integration on Day 3, and you go live on Day 4. We handle 100% of the technical heavy lifting."
    },
    {
        q: "Does it integrate with my existing HMS?",
        a: "Engageo syncs directly with Google Calendar, which is the universal standard for specialist clinics in India. We can also push data to other platforms via custom webhooks if your clinical workflow requires it."
    }
];

export default function PricingFAQTeaser() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 md:py-32 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="font-data text-[var(--primary)] text-[10px] tracking-[0.2em] uppercase mb-4 font-bold">Frequently Asked Questions</div>
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--command-black)] tracking-tighter italic mb-6">
                        Common <span className="text-[var(--primary)] not-italic">Hesitations.</span>
                    </h2>
                    <p className="text-[var(--command-black)]/40 text-lg font-medium">Quick answers for those evaluation our investment tiers.</p>
                </div>

                <div className="space-y-4">
                    {pricingFaqs.map((faq, i) => (
                        <div key={i} className={`border border-[var(--primary)]/5 rounded-[2rem] overflow-hidden transition-all duration-300 ${openIndex === i ? 'bg-[var(--primary)]/[0.02] border-[var(--primary)]/20 shadow-xl shadow-blue-500/5' : 'bg-white'}`}>
                            <button 
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full p-8 md:p-10 flex items-center justify-between text-left group"
                            >
                                <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${openIndex === i ? 'text-[var(--primary)]' : 'text-[var(--command-black)]'}`}>
                                    {faq.q}
                                </span>
                                <div className={`shrink-0 ml-4 transition-all duration-500 ${openIndex === i ? 'rotate-180 text-[var(--primary)]' : 'text-[var(--command-black)]/30'}`}>
                                    {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-[400px] px-8 md:px-10 pb-8 md:pb-10' : 'max-h-0'}`}>
                                <p className="text-[var(--command-black)]/60 text-lg leading-relaxed">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <a href="/faq.html" className="text-[var(--primary)] text-xs font-bold tracking-[0.3em] uppercase hover:underline">
                        View Full Technical FAQ →
                    </a>
                </div>
            </div>
        </section>
    );
}
