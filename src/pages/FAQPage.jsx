import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const QA_LIST = [
  {
    q: "What happens if it doesn't work?",
    a: "We keep going for free. If your clinic doesn't receive 15 confirmed bookings in the first 30 days, we extend the service at zero cost until we hit that number. No refund negotiation. No invoices. Just the number we promised."
  },
  {
    q: "What if the patient figures out it's AI?",
    a: "Most don't. And those who do don't mind — they got a response in 8 seconds instead of a voicemail. We're solving a speed problem, not trying to impersonate a human."
  },
  {
    q: "What happens if the AI can't answer the question?",
    a: "It doesn't guess. It captures the patient's name and number, tells them the clinic team will call back within the hour, and sends you an instant WhatsApp alert. No patient ever leaves without a response."
  },
  {
    q: "How long does it take to go live?",
    a: "4 days from the moment you sign. Day 1–2 we configure. Day 3 we test with you. Day 4 you're live."
  },
  {
    q: "Is it legal under Indian healthcare regulations?",
    a: "Yes. Engageo handles administrative scheduling calls — not clinical consultations. This falls squarely within the category of appointment management tools, no different from an IVR system or a front-desk CRM. No HIPAA or DPDP Act provisions are violated. We do not record, store, or process clinical data — only name, phone number, and appointment preference."
  },
  {
    q: "Does it integrate with HMS or Practo?",
    a: "We work on top of Google Calendar, not inside your HMS. If your team manages appointments from Google Calendar, you're ready. Practo integration is on our roadmap."
  }
];

export default function FAQPage() {
  const [openSet, setOpenSet] = useState(new Set([0]));

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
    <div className="w-full flex-1 flex flex-col" style={{ backgroundColor: 'var(--clinic-white)' }}>

      {/* 1) Page Hero */}
      <section
        className="w-full text-center px-6 md:px-12 relative z-10 pt-[140px] pb-[80px]"
        style={{ backgroundColor: 'var(--clinic-mist)' }}
      >
        <h1
          className="font-sans font-bold tracking-tighter mb-4 leading-tight mx-auto flex flex-col items-center justify-center gap-1"
          style={{
            color: 'var(--clinic-ink)',
            fontSize: 'clamp(32px, 5vw, 48px)'
          }}
        >
          <span>Your Questions,</span>
          <span className="font-drama italic" style={{ color: 'var(--recovered-green)' }}>
            Answered Directly.
          </span>
        </h1>
        <p
          className="font-sans font-medium max-w-xl mx-auto leading-relaxed mt-4"
          style={{ color: 'var(--clinic-slate)', fontSize: '16px' }}
        >
          No vague marketing answers. Here's exactly what clinic owners ask before signing up.
        </p>
      </section>

      {/* 2) Main Accordion Content */}
      <section className="py-[80px] px-6 md:px-12 lg:px-20 w-full" style={{ backgroundColor: 'var(--clinic-white)', borderTop: '1px solid var(--clinic-silver)' }}>
        <div className="max-w-3xl mx-auto flex flex-col">

          {/* Accordion List */}
          <div className="space-y-3">
            {QA_LIST.map((faq, idx) => {
              const isOpen = openSet.has(idx);

              return (
                <div
                  key={idx}
                  className="transition-all duration-300 cursor-pointer border"
                  style={{
                    backgroundColor: isOpen ? 'var(--clinic-white)' : 'transparent',
                    borderColor: isOpen ? 'var(--clinic-silver)' : 'transparent',
                    borderLeft: isOpen ? '3px solid var(--signal-green)' : '3px solid transparent',
                    boxShadow: isOpen ? '0 8px 30px -12px rgba(0,0,0,0.08)' : 'none',
                    transform: isOpen ? 'translateY(-2px)' : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!isOpen) {
                      e.currentTarget.style.backgroundColor = 'var(--clinic-mist)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isOpen) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                  onClick={() => toggle(idx)}
                >
                  <div className="flex items-center justify-between gap-4 p-6 min-h-[56px]">
                    <span
                      className="font-sans font-bold leading-snug pr-4"
                      style={{ color: 'var(--clinic-ink)', fontSize: '15.5px' }}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={20}
                      className="shrink-0 transition-transform duration-300"
                      style={{
                        color: isOpen ? 'var(--signal-green)' : 'var(--clinic-stone)',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    />
                  </div>

                  <div
                    className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    style={{ maxHeight: isOpen ? '500px' : '0px' }}
                  >
                    <p
                      className="px-6 pb-6 text-[14.5px] leading-relaxed pr-12 font-medium"
                      style={{ color: 'var(--clinic-slate)' }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3) Bottom CTA */}
      <section
        className="pb-[120px] px-6 text-center"
        style={{ backgroundColor: 'var(--clinic-white)' }}
      >
        <a
          href="https://wa.me/917696382250"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans font-bold transition-all hover:underline"
          style={{
            color: 'var(--signal-green)',
            textDecorationColor: 'var(--signal-green)',
            fontSize: '16px'
          }}
        >
          Still have a question? WhatsApp us directly →
        </a>
      </section>

    </div>
  );
}
