import React from 'react';
import { Link } from 'react-router-dom';

const tiers = [
  {
    id: 'recover',
    label: 'TIER 1 — RECOVER',
    title: 'Missed Call Recovery',
    description: 'Your clinic already gets inbound calls. We make sure not one of them goes to voicemail. Answered, qualified, and booked — in under 8 seconds.',
    price: '₹25,000',
    priceSub: ' / month',
    priceNote: null,
    features: [
      'AI voice callback in 8 seconds',
      'Google Calendar booking',
      'WhatsApp confirmation sequence (booking + reminder)',
      'Weekly recovery report',
    ],
    cta: 'Start Recovery →',
    badge: null,
    theme: 'light',
  },
  {
    id: 'grow',
    label: 'TIER 2 — GROW',
    title: 'Lead Gen + Recovery',
    description: 'We run your ads, drive inbound calls, and convert every single one into a confirmed booking. You stay in the consultation room. We make sure it stays full.',
    price: '₹55,000',
    priceSub: ' / month + your ad spend',
    priceNote: 'Ad spend passed through at cost. No markup.',
    features: [
      'Everything in Tier 1',
      'Meta & Google Ads management',
      'Google My Business optimisation',
      '4-touchpoint WhatsApp patient journey (confirmation, reminder, pre-visit, no-show recovery)',
      'Landing page (we build it)',
      'Weekly ROI report',
    ],
    cta: 'Book a Strategy Call →',
    badge: 'MOST POPULAR',
    theme: 'dark',
  },
  {
    id: 'dominate',
    label: 'TIER 3 — DOMINATE',
    title: 'Full Clinic Growth System',
    description: 'Every patient searching your specialty in your city finds you first. Full-stack digital presence.',
    price: '₹1,20,000',
    priceSub: ' / month + ad spend',
    priceNote: 'Includes one-time website build. No extra invoice.',
    features: [
      'Everything in Tier 2',
      'YouTube & Instagram content strategy',
      "Video scripting for doctor's personal brand",
      'SEO blog content (2 posts/month)',
      'Website build or redesign (included)',
      'Monthly 1:1 strategy session with founder',
    ],
    cta: 'Apply for Dominate →',
    badge: 'BY APPLICATION ONLY',
    theme: 'darkest',
  },
];

function CheckIcon({ color }) {
  return (
    <span className="font-bold mt-0.5 shrink-0 text-sm" style={{ color }}>✓</span>
  );
}

export default function Pricing({ isPreview = false }) {
  return (
    <section id="pricing" className="py-20 md:py-32 px-4 md:px-8 lg:px-16 xl:px-20 relative z-10" style={{ backgroundColor: 'var(--clinic-white)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier) => {
            const isDark = tier.theme !== 'light';
            const isGrow = tier.theme === 'dark';

            const cardStyle = isDark
              ? { backgroundColor: 'var(--command-black)', color: 'var(--clinic-white)', borderColor: 'var(--command-black)' }
              : { backgroundColor: 'var(--clinic-white)', color: 'var(--command-black)', borderColor: 'var(--clinic-silver)' };

            const accentColor = isGrow ? 'var(--signal-green)' : (isDark ? 'var(--sovereign-gold)' : 'var(--recovery-blue)');

            return (
              <div
                key={tier.id}
                className="relative flex flex-col overflow-hidden border p-8 rounded-[24px]"
                style={cardStyle}
              >
                {/* Badge */}
                {tier.badge && (
                  <div className="absolute top-4 right-4 z-20">
                    <span
                      className="inline-block text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
                      style={
                        isGrow
                          ? { background: 'var(--signal-green)', color: '#1A1A1A' }
                          : { background: 'transparent', color: 'var(--sovereign-gold)', border: '1px solid var(--sovereign-gold)' }
                      }
                    >
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="flex flex-col flex-1 gap-0 relative z-10">
                  <div className="mb-1">
                    <span className="font-data text-[10px] font-bold uppercase tracking-widest" style={{ color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(26,26,26,0.5)' }}>
                      {tier.label}
                    </span>
                  </div>

                  <div className="mb-2">
                    <h3 className="text-3xl font-bold tracking-tight leading-tight">
                      {tier.title}
                    </h3>
                  </div>

                  <div className="min-h-[88px] mb-5">
                    <p className="text-sm leading-relaxed" style={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(26,26,26,0.7)' }}>
                      {tier.description}
                    </p>
                  </div>

                  <div className="min-h-[72px] mb-5">
                    <span className="text-[40px] font-bold tracking-tighter block font-data">
                      {tier.price}
                    </span>
                    <span className="font-data text-xs block mt-0.5 uppercase tracking-widest" style={{ color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(26,26,26,0.5)' }}>
                      {tier.priceSub}
                    </span>
                    {tier.priceNote ? (
                      <span className="font-data text-[10px] italic block mt-1" style={{ color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(26,26,26,0.4)' }}>
                        {tier.priceNote}
                      </span>
                    ) : (
                      <span className="block h-[18px]" />
                    )}
                  </div>

                  <hr className="w-full mb-5" style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(26,26,26,0.1)' }} />

                  <ul className="flex flex-col gap-3 flex-1">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex gap-3 text-sm items-start font-medium" style={{ color: isDark ? 'rgba(255,255,255,0.8)' : 'var(--clinic-ink)' }}>
                        <CheckIcon color={accentColor} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {tier.id === 'grow' && (
                    <p className="text-[12px] italic mt-4 mb-2 text-center" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      Clinics on this tier see 40% fewer no-shows within 30 days.
                    </p>
                  )}

                  {!isPreview && (
                    <Link
                      to="/audit"
                      className="block text-center w-full py-4 text-[13px] tracking-widest uppercase font-bold mt-6 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/10"
                      style={
                        isDark
                          ? { background: accentColor, color: (isGrow ? 'var(--command-black)' : 'white') }
                          : { background: 'var(--command-black)', color: 'white' }
                      }
                    >
                      {tier.cta}
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {!isPreview && (
          <div className="mt-20 p-10 border border-white/10 rounded-[3rem] bg-[var(--signal-green)]/5 text-center max-w-4xl mx-auto backdrop-blur-sm relative overflow-hidden group">
            {/* Subtle light leak inside the banner */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-[var(--signal-green)]/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center gap-4">
              <span className="font-data text-[10px] font-bold text-[var(--signal-green)] tracking-[0.3em] uppercase">The Defensible Guarantee</span>
              <p className="text-[17px] md:text-[22px] font-sans font-bold leading-tight max-w-2xl tracking-tight" style={{ color: 'var(--command-black)' }}>
                30-day risk-free implementation. <br className="hidden md:block" />
                <span className="text-[var(--signal-green)] font-bold italic">15 confirmed bookings or we work for free.</span>
              </p>
              <p className="text-xs text-[var(--clinic-stone)] font-medium">No negotiation. No fine print. Verified clinic-side results.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
