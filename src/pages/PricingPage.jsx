import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Pricing from '../components/Pricing';

const faqs = [
  {
    q: "Can I upgrade later?",
    a: "Yes. Most clinics start at Recover and move to Grow within 60 days. No contract renegotiation — just a new invoice and expanded scope the following month."
  },
  {
    q: "What does 'ad spend passed through' mean?",
    a: "You pay Meta or Google directly via your own ad account. We manage the campaigns. Your invoice to us is only our management fee. No markup on ad spend. Ever."
  },
  {
    q: "Is there a contract?",
    a: "Tier 1 is a 3-month minimum. Tiers 2 and 3 are 6-month minimum. All tiers include the 15-booking guarantee — if we don't hit 15 bookings in Month 1, we keep going free until we do."
  }
];

function PricingFAQ() {
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
    <section className="py-[80px] md:py-[120px] px-6 md:px-12 w-full" style={{ backgroundColor: '#F2F0E9', borderTop: '1px solid rgba(26,26,26,0.1)' }}>
      <div className="max-w-3xl mx-auto flex flex-col">
        {/* Header */}
        <div className="text-center mb-[48px] md:mb-[64px]">
          <div
            className="font-mono uppercase font-bold mb-4 sm:mb-6 tracking-[2px] mx-auto"
            style={{ color: 'rgba(26,26,26,0.5)', fontSize: '11px' }}
          >
            QUICK ANSWERS
          </div>
          <h2
            className="text-[32px] md:text-[40px] font-bold tracking-tighter"
            style={{ color: '#1A1A1A', fontFamily: '"Fraunces", serif' }}
          >
            Before you decide.
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openSet.has(idx);

            return (
              <div
                key={idx}
                className="transition-all duration-300 cursor-pointer border"
                style={{
                  backgroundColor: isOpen ? '#FFFFFF' : 'transparent',
                  borderColor: isOpen ? 'rgba(26,26,26,0.1)' : 'transparent',
                  borderLeft: isOpen ? '3px solid #1A1A1A' : '3px solid transparent',
                  boxShadow: isOpen ? '0 8px 30px -12px rgba(0,0,0,0.08)' : 'none',
                  transform: isOpen ? 'translateY(-2px)' : 'none',
                }}
                onMouseEnter={(e) => {
                  if (!isOpen) {
                    e.currentTarget.style.backgroundColor = 'rgba(26,26,26,0.02)';
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
                    style={{ color: '#1A1A1A', fontSize: '15.5px' }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className="shrink-0 transition-transform duration-300"
                    style={{
                      color: isOpen ? '#1A1A1A' : 'rgba(26,26,26,0.4)',
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
                    style={{ color: 'rgba(26,26,26,0.7)' }}
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
  );
}

export default function PricingPage() {
  return (
    <div className="w-full flex-1 flex flex-col pt-[80px]" style={{ backgroundColor: '#F2F0E9' }}>

      {/* 1) Page Hero */}
      <section
        className="w-full text-center px-6 md:px-12 relative z-10 pt-[60px] pb-[20px]"
        style={{ backgroundColor: '#F2F0E9' }}
      >
        <div
          className="font-mono uppercase font-bold mb-6 tracking-[2px]"
          style={{ color: 'rgba(26,26,26,0.5)', fontSize: '11px' }}
        >
          INVESTMENT
        </div>
        <h1
          className="font-bold tracking-tight mb-4 leading-tight mx-auto"
          style={{
            color: '#1A1A1A',
            fontFamily: '"Fraunces", serif',
            fontSize: 'clamp(36px, 5vw, 56px)'
          }}
        >
          Transparent pricing.<br />No hidden fees.
        </h1>
        <p
          className="font-sans font-medium max-w-xl mx-auto leading-relaxed"
          style={{ color: 'rgba(26,26,26,0.6)', fontSize: '18px' }}
        >
          INR pricing only. Ad spend passed through at cost. No markups. No lock-in contracts.
        </p>
      </section>

      {/* 2) Main 3-card Pricing block */}
      <div className="mt-[20px]">
        <Pricing isPreview={false} />
      </div>

      {/* 3) Accordion FAQ */}
      <PricingFAQ />

      {/* 4) Bottom CTA */}
      <section
        className="py-[80px] px-6 text-center"
        style={{ backgroundColor: '#F2F0E9', borderTop: '1px solid rgba(26,26,26,0.1)' }}
      >
        <p
          className="font-sans font-medium mb-6 max-w-sm mx-auto leading-relaxed"
          style={{ color: 'rgba(26,26,26,0.7)', fontSize: '16px' }}
        >
          Not sure which tier? Book a 12-minute call and we'll tell you exactly which one fits.
        </p>
        <Link
          to="/audit"
          className="inline-flex justify-center items-center h-[48px] px-8 rounded-lg font-bold transition-transform hover:scale-[1.02]"
          style={{
            backgroundColor: '#1A1A1A',
            color: '#FFFFFF',
            fontSize: '15px'
          }}
        >
          Start with Free Audit &rarr;
        </Link>
      </section>

    </div>
  );
}
