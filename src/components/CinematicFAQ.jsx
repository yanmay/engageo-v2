import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import gsap from 'gsap';

const faqs = [
    {
        q: "Is using AI for medical calls legal in India?",
        a: "Yes. Engageo operates as an appointment scheduling assistant, not a medical advice system. It does not diagnose or prescribe. Under India's IT Act and DPDP Act 2023, this constitutes lawful automated processing with patient intent captured on call."
    },
    {
        q: "What if the patient figures out it's AI?",
        a: "In 200+ test calls, fewer than 3% of patients asked. The agent is trained to acknowledge it is 'an automated assistant' if asked directly. Most patients are too relieved to have their call answered to question the mechanism."
    },
    {
        q: "Does it integrate with HMS or Practo?",
        a: "Engageo books directly to your clinical scheduling system, which most specialist clinics already use. Native integration with popular HMS platforms is on the roadmap. For clinics using proprietary HMS-only, a custom webhook can be configured during onboarding."
    },
    {
        q: "What if the AI can't answer a question?",
        a: "The agent is trained to say: 'Main aapko doctor sahab ke saath connect karta hoon, ya aap appointment book karein aur woh directly aapko call karenge.' It transfers intent to booking rather than guessing."
    },
    {
        q: "How long does it take to go live?",
        a: "4 business days from payment. Day 1: onboarding. Day 2: AI training. Day 3: Scheduling & Messaging sync. Day 4: End-to-end testing and go-live. We handle 100% of the technical setup."
    },
    {
        q: "What happens if 15 bookings are not delivered?",
        a: "We continue at no charge until the guarantee is met. No refund negotiations—just consistent work until we deliver the patients we promised."
    }
];

const AccordionItem = React.forwardRef(({ q, a, isOpen, onClick }, ref) => (
    <div ref={ref} className={`border-b border-[var(--primary)]/10 transition-all duration-500 ${isOpen ? 'bg-[var(--primary)]/[0.02]' : ''}`}>
        <button 
            onClick={onClick}
            className="w-full py-6 md:py-8 flex items-center justify-between text-left group"
        >
            <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-[var(--primary)]' : 'text-[var(--command-black)]'}`}>
                {q}
            </span>
            <div className={`shrink-0 ml-4 transition-all duration-500 ${isOpen ? 'rotate-180 text-[var(--primary)]' : 'text-[var(--command-black)]/30 group-hover:text-[var(--primary)]'}`}>
                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
            </div>
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen ? 'max-h-[400px] pb-8 md:pb-10' : 'max-h-0'}`}>
            <p className="text-[var(--command-black)]/60 text-base md:text-lg leading-relaxed max-w-2xl">
                {a}
            </p>
        </div>
    </div>
));

export default function CinematicFAQ() {
    const [openIndex, setOpenIndex] = useState(0);
    const sectionRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".reveal-faq-header", {
                x: -30,
                opacity: 0,
                duration: 1.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            itemsRef.current.forEach((item, i) => {
                gsap.from(item, {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 90%",
                    }
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="faq" ref={sectionRef} className="py-24 md:py-32 px-6 md:px-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
                    
                    {/* Left: Header */}
                    <div className="lg:col-span-4 reveal-faq-header">
                        <div className="lg:sticky lg:top-32">
                            <div className="font-data text-[var(--primary)] text-[10px] tracking-[0.2em] uppercase mb-4 font-bold">Objections</div>
                            <h2 className="text-4xl md:text-5xl font-bold text-[var(--command-black)] mb-6 md:mb-8 tracking-tighter leading-tight italic">
                                Your Questions, <span className="text-[var(--primary)] not-italic">Answered Directly.</span>
                            </h2>
                            <p className="text-[var(--command-black)]/60 text-lg leading-relaxed mb-10">
                                No vague marketing answers. Here's exactly what clinic owners ask before signing up.
                            </p>
                            <button className="flex items-center gap-3 text-[var(--primary)] text-[10px] font-bold uppercase tracking-[0.2em] hover:gap-5 transition-all duration-300">
                                Still have questions? WhatsApp us <span className="text-lg">→</span>
                            </button>
                        </div>
                    </div>

                    {/* Right: FAQ List */}
                    <div className="lg:col-span-8">
                        <div className="border-t border-[var(--primary)]/10">
                            {faqs.map((faq, i) => (
                                <AccordionItem 
                                    key={i} 
                                    ref={el => itemsRef.current[i] = el}
                                    {...faq} 
                                    isOpen={openIndex === i} 
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)} 
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
