import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const faqs = [
  {
    q: 'Is it legal to use AI for medical calls in India?',
    a: 'Yes. Engageo handles administrative scheduling calls — not clinical consultations. This falls squarely within the category of appointment management tools, no different from an IVR system or a front-desk CRM. No HIPAA or DPDP Act provisions are violated. We do not record, store, or process clinical data — only name, phone number, and appointment preference.',
  },
  {
    q: 'What if the patient figures out it\'s AI?',
    a: 'In 47 clinics and 12,000+ recovered calls, fewer than 0.3% of patients pushed back on the AI. Our voice is natural, conversational, and trained on real clinic reception dialogue. Patients care about one thing: getting their appointment booked quickly. Engageo does exactly that in under 90 seconds.',
  },
  {
    q: 'Does it integrate with my HMS or Practo?',
    a: 'Engageo natively integrates with Google Calendar (for slot syncing), WhatsApp Business (for confirmations), and can sync with Practo, Doctify, and most HMS systems via our API bridge. Setup takes 4 days. Our onboarding team does it for you — you don\'t need a tech person.',
  },
  {
    q: 'What happens if the AI can\'t answer the patient\'s question?',
    a: 'If a query falls outside the booking flow (e.g., clinical queries, pricing disputes, insurance questions), the AI gracefully escalates: it logs the call, sends your receptionist a WhatsApp alert with the patient\'s number and query summary, and schedules a manual callback. Nothing falls through the cracks.',
  },
  {
    q: 'How long does it take to go live?',
    a: '4 business days. Day 1: intake form + calendar access. Day 2: AI voice training on your specialty and FAQ set. Day 3: test run with your team. Day 4: go live. You don\'t need a developer, and there\'s nothing to install on your end.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const { openModal } = useModal();

  return (
    <section className="py-32 px-6 md:px-12 lg:px-20 relative z-10 bg-white border-t border-border/50">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-canvas border border-border mb-6">
            <span className="font-mono text-[10px] text-subtle uppercase tracking-widest font-semibold">Common Objections</span>
          </div>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-obsidian tracking-tighter mb-4">
            Your Questions,{' '}
            <span className="gradient-text">Answered Directly</span>
          </h2>
          <p className="text-subtle text-base max-w-lg mx-auto">
            No vague marketing answers. Here's exactly what clinic owners ask before signing up.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isOpen
                    ? 'bg-white border-brand/25 shadow-[0_0_0_1px_rgba(61,90,254,0.15),0_8px_24px_-4px_rgba(61,90,254,0.1)]'
                    : 'bg-white border-border hover:border-brand/20 hover:shadow-card'
                }`}
                onClick={() => setOpen(isOpen ? -1 : idx)}
              >
                <div className="flex items-start justify-between gap-4 p-6">
                  <div className="flex items-start gap-4">
                    <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 transition-colors duration-300 ${
                      isOpen ? 'bg-brand' : 'bg-canvas border border-border'
                    }`}>
                      <Check size={12} strokeWidth={3} className={isOpen ? 'text-white' : 'text-subtle'} />
                    </div>
                    <span className="font-sans font-semibold text-obsidian text-[15px] leading-snug">{faq.q}</span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-subtle mt-0.5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand' : ''}`}
                  />
                </div>

                <div
                  className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  style={{ maxHeight: isOpen ? '400px' : '0px' }}
                >
                  <p className="px-6 pb-6 pl-16 text-sm text-subtle leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-subtle mb-4">Still have a question?</p>
          <button
            onClick={openModal}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-brand/20 text-brand text-sm font-semibold hover:bg-brand/5 hover:border-brand/40 transition-all duration-300"
          >
            Talk to a human →
          </button>
        </div>

      </div>
    </section>
  );
}
