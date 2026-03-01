import React from 'react';
import { useModal } from '../context/ModalContext';

const tiers = [
  {
    id: 'recover',
    label: 'TIER 1 — RECOVER',
    title: 'Missed Call Recovery',
    description:
      'Your clinic already gets inbound calls. We make sure not one of them goes to voicemail. Answered, qualified, and booked — in under 8 seconds.',
    price: '₹25,000',
    priceSub: '/ month',
    priceNote: null,
    features: [
      'AI voice callback in 8 seconds',
      'Google Calendar booking',
      'WhatsApp confirmation sent',
      '24-hour appointment reminder',
      'Weekly recovery report',
    ],
    cta: 'Start Recovery →',
    badge: null,
    theme: 'light',
    accentColor: '#3D5AFE',
    checkColor: '#3D5AFE',
  },
  {
    id: 'grow',
    label: 'TIER 2 — GROW',
    title: 'Lead Gen + Recovery',
    description:
      'We run your ads, drive inbound calls, and convert every single one into a confirmed booking. You stay in the consultation room. We make sure it stays full.',
    price: '₹55,000',
    priceSub: '/ month + your ad spend',
    priceNote: 'Ad spend passed through at cost. No markup.',
    features: [
      'Everything in Tier 1',
      'Meta & Google Ads management',
      'Google My Business optimisation',
      'Full-funnel WhatsApp automation',
      'Landing page (we build it)',
      'Weekly ROI report',
    ],
    cta: 'Book a Strategy Call →',
    badge: 'MOST POPULAR',
    badgeStyle: 'blue',
    theme: 'dark',
    accentColor: '#3D5AFE',
    checkColor: '#3D5AFE',
  },
  {
    id: 'dominate',
    label: 'TIER 3 — DOMINATE',
    title: 'Full Clinic Growth System',
    description:
      'Every patient in your city who searches your specialty should find you first, trust you immediately, and call you directly. We build that system.',
    price: '₹1,20,000',
    priceSub: '/ month + ad spend',
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
    badgeStyle: 'amber',
    theme: 'darkest',
    accentColor: '#C9A84C',
    checkColor: '#C9A84C',
  },
];

const THEMES = {
  light: {
    card: { background: '#ffffff', boxShadow: '4px 4px 0px 0px rgba(61,90,254,0.25)' },
    border: 'border-brand',
    label: { color: '#3D5AFE' },
    title: 'text-obsidian',
    desc: 'text-subtle',
    pricePrimary: 'text-obsidian',
    priceSub: 'text-muted',
    priceNote: { color: 'rgba(0,0,0,0.35)' },
    divider: { borderColor: 'rgba(0,0,0,0.08)' },
    featureText: 'text-subtle',
    ctaClass: 'border-2 border-brand text-brand bg-white hover:bg-brand hover:text-white transition-colors duration-150',
  },
  dark: {
    card: { background: '#16161E', boxShadow: '6px 6px 0px 0px #3D5AFE' },
    border: 'border-obsidian',
    label: { color: '#3D5AFE' },
    title: 'text-white',
    desc: 'text-white/55',
    pricePrimary: 'text-white',
    priceSub: 'text-white/45',
    priceNote: { color: 'rgba(255,255,255,0.3)' },
    divider: { borderColor: 'rgba(255,255,255,0.1)' },
    featureText: 'text-white/75',
    ctaClass: 'bg-brand text-white border-2 border-white/15 hover:translate-x-[2px] hover:translate-y-[2px] transition-transform duration-150',
    texture: 'bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:18px_18px]',
  },
  darkest: {
    card: { background: '#0D0D12', boxShadow: '6px 6px 0px 0px #C9A84C' },
    border: 'border-obsidian',
    label: { color: '#C9A84C' },
    title: 'text-white',
    desc: 'text-white/50',
    pricePrimary: 'text-white',
    priceSub: { color: 'rgba(255,255,255,0.4)' },
    priceNote: { color: 'rgba(201,168,76,0.65)' },
    divider: { borderColor: 'rgba(255,255,255,0.08)' },
    featureText: 'text-white/70',
    ctaStyle: { background: '#C9A84C', color: '#0D0D12', borderColor: 'rgba(201,168,76,0.4)' },
    ctaClass: 'border-2 hover:translate-x-[2px] hover:translate-y-[2px] transition-transform duration-150',
    texture: null,
    diagonalTexture: true,
  },
};

function CheckIcon({ color }) {
  return (
    <span className="font-bold mt-0.5 shrink-0 text-sm" style={{ color }}>✓</span>
  );
}

export default function Pricing() {
  const { openModal } = useModal();

  return (
    <section
      id="pricing"
      className="py-20 md:py-32 px-4 md:px-8 lg:px-16 xl:px-20 border-b border-border relative z-10 bg-canvas"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label justify-center mb-6">Investment</div>
          <h2 className="font-sans text-3xl md:text-5xl font-bold text-obsidian tracking-tighter mb-4 leading-[1.05]">
            Pick Your Growth Stage
          </h2>
          <p className="text-subtle text-base md:text-lg max-w-md mx-auto">
            Most clinics start at Recover. Most stay for Dominate.
          </p>
        </div>

        {/* Cards grid — items-stretch ensures equal height */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier) => {
            const th = THEMES[tier.theme];
            const isDark = tier.theme !== 'light';

            return (
              <div
                key={tier.id}
                className={`relative flex flex-col overflow-hidden border-2 ${th.border}`}
                style={th.card}
              >
                {/* Dark texture overlays */}
                {th.texture && (
                  <div className={`absolute inset-0 pointer-events-none ${th.texture}`} />
                )}
                {th.diagonalTexture && (
                  <div
                    className="absolute inset-0 pointer-events-none opacity-[0.04]"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(45deg,#C9A84C 0px,#C9A84C 1px,transparent 1px,transparent 12px)',
                    }}
                  />
                )}

                {/* Badge */}
                {tier.badge && (
                  <div className="absolute -top-px right-5 z-20">
                    {tier.badgeStyle === 'blue' ? (
                      <span className="inline-block bg-brand text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 font-mono border-2 border-white/10">
                        {tier.badge}
                      </span>
                    ) : (
                      <span
                        className="inline-block text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 font-mono border-2"
                        style={{ background: '#C9A84C', color: '#0D0D12', borderColor: 'rgba(201,168,76,0.3)' }}
                      >
                        {tier.badge}
                      </span>
                    )}
                  </div>
                )}

                {/* Top accent bar */}
                <div className="h-[3px] w-full" style={{ background: tier.accentColor }} />

                <div className="p-7 flex flex-col flex-1 gap-0 relative z-10">

                  {/* ① Label — fixed height row */}
                  <div className="h-8 flex items-center mb-1">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest" style={th.label}>
                      {tier.label}
                    </span>
                  </div>

                  {/* ② Title — fixed height row */}
                  <div className="h-9 flex items-start mb-2">
                    <h3 className={`font-sans text-xl font-bold tracking-tight leading-tight ${th.title}`}>
                      {tier.title}
                    </h3>
                  </div>

                  {/* ③ Description — fixed min-height so all 3 align below */}
                  <div className="min-h-[88px] mb-5">
                    <p className={`text-sm leading-relaxed ${th.desc}`}>{tier.description}</p>
                  </div>

                  {/* ④ Price block — fixed min-height */}
                  <div className="min-h-[72px] mb-5">
                    <span className={`font-sans text-3xl font-bold tracking-tighter block ${th.pricePrimary}`}>
                      {tier.price}
                    </span>
                    <span
                      className="font-mono text-xs block mt-0.5"
                      style={typeof th.priceSub === 'object' ? th.priceSub : undefined}
                    >
                      <span className={typeof th.priceSub === 'string' ? th.priceSub : ''}>
                        {tier.priceSub}
                      </span>
                    </span>
                    {tier.priceNote ? (
                      <span className="font-mono text-[10px] italic block mt-1" style={th.priceNote}>
                        {tier.priceNote}
                      </span>
                    ) : (
                      <span className="block h-[18px]" />
                    )}
                  </div>

                  {/* ⑤ Features — flex-1 so CTA stays at bottom */}
                  <ul
                    className="flex flex-col gap-2.5 pt-5 flex-1"
                    style={{ borderTop: `2px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)'}` }}
                  >
                    {tier.features.map((f) => (
                      <li key={f} className={`flex gap-2.5 text-sm items-start ${th.featureText}`}>
                        <CheckIcon color={tier.checkColor} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Tier 2 social proof nudge */}
                  {tier.id === 'grow' && (
                    <p className="text-[11px] italic mt-3" style={{ color: 'rgba(255,255,255,0.38)' }}>
                      Most clinics recover their fee in the first week.
                    </p>
                  )}

                  {/* ⑥ CTA */}
                  <button
                    onClick={openModal}
                    className={`w-full py-3.5 text-sm font-bold mt-6 cursor-pointer ${th.ctaClass}`}
                    style={th.ctaStyle}
                  >
                    {tier.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Performance guarantee */}
        <p className="text-center text-[13px] text-muted mt-10 max-w-2xl mx-auto leading-relaxed">
          <span className="font-semibold text-obsidian">The 15-Booking Guarantee:</span> We keep going for free. If your clinic doesn't receive 15 confirmed bookings in the first 30 days, we extend the service at zero cost until we hit that number. No refund negotiation. No invoices. Just the number we promised.
        </p>

      </div>
    </section>
  );
}
