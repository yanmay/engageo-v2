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
    <section className="py-[80px] md:py-[120px] px-6 md:px-12 w-full" style={{ backgroundColor: 'var(--clinic-mist)', borderTop: '1px solid var(--clinic-silver)' }}>
      <div className="max-w-3xl mx-auto flex flex-col">
        {/* Header */}
        <div className="text-center mb-[48px] md:mb-[64px]">
          <div
            className="font-data uppercase font-bold mb-4 sm:mb-6 tracking-[2px] mx-auto"
            style={{ color: 'var(--clinic-stone)', fontSize: '11px' }}
          >
            QUICK ANSWERS
          </div>
          <h2
            className="text-[32px] md:text-[40px] font-bold tracking-tighter"
            style={{ color: 'var(--clinic-ink)' }}
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
                  backgroundColor: isOpen ? 'var(--clinic-white)' : 'transparent',
                  borderColor: isOpen ? 'var(--clinic-silver)' : 'transparent',
                  borderLeft: isOpen ? '3px solid var(--command-black)' : '3px solid transparent',
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
                      color: isOpen ? 'var(--clinic-ink)' : 'var(--clinic-stone)',
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
  );
}

function TierSelector() {
  const [selections, setSelections] = useState({
    calls: '80-150',
    ads: 'No',
    content: 'No'
  });

  const getRecommendation = () => {
    if (selections.content === 'Yes') return { name: 'DOMINATE', color: 'var(--sovereign-gold)' };
    if (selections.ads === 'Yes' || selections.calls === '150+') return { name: 'GROW', color: 'var(--signal-green)' };
    return { name: 'RECOVER', color: 'var(--recovery-blue)' };
  };

  const recommendation = getRecommendation();

  return (
    <div 
      className="w-full max-w-4xl p-8 md:p-12 border border-[var(--clinic-silver)] rounded-[2rem] bg-[var(--clinic-mist)]/50"
    >
      <h3 className="text-xl font-bold mb-8 text-center" style={{ color: 'var(--clinic-ink)' }}>Which tier is right for me?</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Question 1 */}
        <div className="flex flex-col gap-3">
          <label className="font-data text-[10px] font-bold uppercase tracking-widest text-[var(--clinic-stone)]">Monthly Calls</label>
          <select 
            className="bg-white border border-[var(--clinic-silver)] p-3 rounded-lg font-sans text-sm font-bold outline-none focus:border-[var(--recovery-blue)]"
            value={selections.calls}
            onChange={(e) => setSelections({...selections, calls: e.target.value})}
          >
            <option value="0-80">Under 80</option>
            <option value="80-150">80 - 150</option>
            <option value="150+">150+</option>
          </select>
        </div>

        {/* Question 2 */}
        <div className="flex flex-col gap-3">
          <label className="font-data text-[10px] font-bold uppercase tracking-widest text-[var(--clinic-stone)]">Need Ads?</label>
          <select 
            className="bg-white border border-[var(--clinic-silver)] p-3 rounded-lg font-sans text-sm font-bold outline-none focus:border-[var(--recovery-blue)]"
            value={selections.ads}
            onChange={(e) => setSelections({...selections, ads: e.target.value})}
          >
            <option value="No">No, I have ads</option>
            <option value="Yes">Yes, I need ads</option>
          </select>
        </div>

        {/* Question 3 */}
        <div className="flex flex-col gap-3">
          <label className="font-data text-[10px] font-bold uppercase tracking-widest text-[var(--clinic-stone)]">Content Ready?</label>
          <select 
            className="bg-white border border-[var(--clinic-silver)] p-3 rounded-lg font-sans text-sm font-bold outline-none focus:border-[var(--recovery-blue)]"
            value={selections.content}
            onChange={(e) => setSelections({...selections, content: e.target.value})}
          >
            <option value="No">Not now</option>
            <option value="Yes">Yes, want video/SEO</option>
          </select>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-[var(--clinic-silver)] flex flex-col items-center">
        <span className="font-data text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--clinic-stone)] mb-2">Recommended Tier</span>
        <div className="text-3xl font-bold tracking-tighter animate-fade-in" style={{ color: recommendation.color }}>
          {recommendation.name}
        </div>
        <p className="text-xs text-[var(--clinic-slate)] mt-4 font-medium">Recommended based on your current volume and growth goals.</p>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="w-full flex-1 flex flex-col pt-[80px]" style={{ backgroundColor: 'var(--clinic-white)' }}>

      {/* 1) Page Hero */}
      <section
        className="w-full text-center px-6 md:px-12 relative z-10 pt-[60px] pb-[20px]"
        style={{ backgroundColor: 'var(--clinic-white)' }}
      >
        <div
          className="font-data uppercase font-bold mb-6 tracking-[2px]"
          style={{ color: 'var(--clinic-stone)', fontSize: '11px' }}
        >
          INVESTMENT
        </div>
        <h1
          className="font-bold tracking-tight mb-4 leading-tight mx-auto"
          style={{
            color: 'var(--clinic-ink)',
            fontSize: 'clamp(36px, 5vw, 56px)'
          }}
        >
          Transparent pricing.<br />
          <span className="font-drama italic text-[var(--recovered-green)]">No hidden fees.</span>
        </h1>
        <p
          className="font-sans font-medium max-w-xl mx-auto leading-relaxed"
          style={{ color: 'var(--clinic-slate)', fontSize: '18px' }}
        >
          INR pricing only. Ad spend passed through at cost. No markups. No lock-in contracts.
        </p>
      </section>

      {/* 1.5) Tier Selector (Interactive Recommendation) */}
      <section className="py-12 px-6 md:px-12 flex justify-center">
        <TierSelector />
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
        style={{ backgroundColor: 'var(--clinic-white)', borderTop: '1px solid var(--clinic-silver)' }}
      >
        <p
          className="font-sans font-medium mb-6 max-w-sm mx-auto leading-relaxed"
          style={{ color: 'var(--clinic-slate)', fontSize: '16px' }}
        >
          Not sure which tier? Book a 12-minute call and we'll tell you exactly which one fits.
        </p>
        <Link
          to="/audit"
          className="inline-flex justify-center items-center h-[52px] px-10 rounded-lg font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/10"
          style={{
            backgroundColor: 'var(--recovery-blue)',
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
