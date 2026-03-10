import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const faqs = [
  {
    q: 'Is it legal to use AI for medical calls in India?',
    a: 'Yes. Engageo handles administrative scheduling calls — not clinical consultations. This falls squarely within the category of appointment management tools, no different from an IVR system or a front-desk CRM. No HIPAA or DPDP Act provisions are violated. We do not record, store, or process clinical data — only name, phone number, and appointment preference.',
  },
  {
    q: "What happens if it doesn't work?",
    a: "We keep going for free. If your clinic doesn't receive 15 confirmed bookings in the first 30 days, we extend the service at zero cost until we hit that number. No refund negotiation. No invoices. Just the number we promised.",
  },
  {
    q: "What if the patient figures out it's AI?",
    a: "Most don't. And those who do don't mind — they got a response in 8 seconds instead of a voicemail. We're solving a speed problem, not trying to impersonate a human.",
  },
  {
    q: 'Does it integrate with HMS or Practo?',
    a: "We work on top of Google Calendar, not inside your HMS. If your team manages appointments from Google Calendar, you're ready. Practo integration is on our roadmap.",
  },
  {
    q: "What happens if the AI can't answer?",
    a: "It doesn't guess. It captures the patient's name and number, tells them the clinic team will call back within the hour, and sends you an instant WhatsApp alert. No patient is left without a response.",
  },
  {
    q: 'How long to go live?',
    a: "4 days from the moment you sign. Day 1–2 we configure. Day 3 we test with you. Day 4 you're live.",
  },
];

export default function FAQ() {
  // Multi-open: track a Set of open indices
  const [openSet, setOpenSet] = useState(new Set([0]));
  const { openModal } = useModal();

  const toggle = (idx) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  return (
    <section className="py-20 md:py-32 px-4 md:px-12 lg:px-20 relative z-10 bg-[var(--parchment)] border-t border-[var(--ink-faint)]">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mb-6">Common Objections</div>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-[var(--ink)] tracking-tighter mb-4">
            Your Questions,{' '}
            <span className="italic text-[var(--green)] font-drama">Answered Directly</span>
          </h2>
          <p className="text-subtle text-base max-w-lg mx-auto">
            No vague marketing answers. Here's exactly what clinic owners ask before signing up.
          </p>
        </div>

        {/* Accordion — multi-open */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openSet.has(idx);
            return (
              <div
                key={idx}
                className={`transition-all duration-300 cursor-pointer border-b border-[var(--ink-faint)] ${isOpen
                    ? 'bg-[var(--surface)] border-l-[3px] !border-l-[var(--green)]'
                    : 'bg-transparent hover:bg-[var(--surface-deep)]/30'
                  }`}
                onClick={() => toggle(idx)}
              >
                <div className="flex items-center justify-between gap-4 p-6 min-h-[56px]">
                  <span className="font-sans font-semibold text-obsidian text-[15.5px] leading-snug pr-4">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-subtle transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand' : ''}`}
                  />
                </div>

                <div
                  className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  style={{ maxHeight: isOpen ? '500px' : '0px' }}
                >
                  <p className="px-6 pb-6 text-[14.5px] text-subtle leading-relaxed pr-12">
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
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white border-2 border-obsidian retro-shadow-hard text-obsidian text-[13px] font-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-200"
          >
            Talk to a human →
          </button>
        </div>

      </div>
    </section>
  );
}
