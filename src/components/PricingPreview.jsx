import React from 'react';
import { motion } from 'framer-motion';

// BANNED: 3 equal-column card layout. REPLACEMENT: Proper CSS Grid with emphasized recommended tier
const tiers = [
  {
    name: 'RECOVER',
    value: 'Missed Call Recovery',
    price: '₹25,000',
    period: '/month',
    desc: 'Your clinic already gets inbound calls. We make sure not one of them goes to voicemail. Answered, qualified, and booked in under 8 seconds.',
    features: [
      'AI voice callback system',
      '4-step WhatsApp sequence',
      'Google Calendar booking',
      'Real-time dashboard',
    ],
    cta: 'Start with Recover',
    href: '/pricing',
    highlighted: false,
  },
  {
    name: 'GROW',
    value: 'Lead Gen + Recovery',
    price: '₹55,000',
    period: '/month + ad spend',
    desc: 'We run your ads, drive inbound calls, and convert every single one into a confirmed booking. Your consultation room stays full.',
    features: [
      'Everything in Recover',
      'Performance ad management',
      'Funnel build and optimisation',
      'Weekly growth reporting',
    ],
    cta: 'Start with Grow',
    href: '/audit',
    highlighted: true,
  },
  {
    name: 'DOMINATE',
    value: 'Full Clinic Growth System',
    price: '₹1,20,000',
    period: '/month + ad spend',
    desc: 'Every patient in your city who searches your specialty finds you first, trusts you immediately, and calls you directly.',
    features: [
      'Everything in Grow',
      'Citywide share-of-voice',
      'Reputation and review engine',
      'Dedicated growth manager',
    ],
    cta: 'View Details',
    href: '/pricing',
    highlighted: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

export default function PricingPreview() {
  return (
    <section className="w-full flex flex-col">

      {/* Guarantee block */}
      <div className="w-full bg-command-black py-24 md:py-32 relative overflow-hidden border-t border-white/[.06]">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(196,125,14,0.06) 0%, transparent 65%)',
          }}
        />
        <div className="max-w-[900px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          >
            <span className="section-label-gold">The Engageo Guarantee</span>
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-semibold text-white tracking-tight leading-tight mb-6 text-balance">
              15 confirmed bookings in 30 days
              <span className="text-slate-500"> &mdash; or we keep going for free.</span>
            </h2>
            <p className="font-mono text-[10px] text-slate-600 uppercase tracking-widest">
              No asterisks. No footnotes. No conditions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Pricing grid — light section */}
      <div className="w-full bg-clinic-white py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">

          <div className="mb-16">
            <span className="section-label">Investment</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
              Pick your growth stage
            </h2>
            <p className="font-sans text-base text-slate-500 mt-3 max-w-xl">
              Most clinics start at Recover. Most stay for Dominate.
            </p>
          </div>

          {/* Asymmetric: recommended tier is wider via explicit grid-template-columns */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-8%' }}
            className="grid grid-cols-1 gap-6"
            style={{
              gridTemplateColumns: 'repeat(1, 1fr)',
            }}
          >
            {/* Use md: breakpoint for the 3-col asymmetric layout */}
            <div className="grid grid-cols-1 md:grid-cols-11 gap-6">
              {tiers.map((tier) => (
                <motion.div
                  key={tier.name}
                  variants={cardVariants}
                  className={`flex flex-col p-8 rounded-card transition-all duration-300 relative ${
                    tier.highlighted
                      ? 'bg-command-black text-white border border-white/[.07] shadow-diffusion-dark md:col-span-4'
                      : 'bg-white border border-slate-200 shadow-diffusion-light hover:border-slate-300 md:col-span-3 md:col-span-3'
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-8">
                      <span className="inline-flex items-center px-3 py-1 rounded-pill bg-recovery-blue text-white font-mono text-[9px] uppercase tracking-widest font-medium">
                        Most chosen
                      </span>
                    </div>
                  )}

                  {/* Tier */}
                  <div className="mb-5">
                    <span className={`font-mono text-[10px] uppercase tracking-widest font-semibold ${
                      tier.highlighted ? 'text-recovery-blue' : 'text-slate-400'
                    }`}>
                      {tier.name}
                    </span>
                    <p className={`font-sans text-xs mt-0.5 ${tier.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
                      {tier.value}
                    </p>
                  </div>

                  {/* Price */}
                  <div
                    className="mb-6 pb-6"
                    style={{ borderBottom: `1px solid ${tier.highlighted ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}` }}
                  >
                    <div className="flex items-baseline gap-1">
                      <span className={`font-mono text-3xl lg:text-4xl font-semibold tracking-tighter tabular-nums ${
                        tier.highlighted ? 'text-white' : 'text-slate-900'
                      }`}>
                        {tier.price}
                      </span>
                      <span className={`font-sans text-xs ${tier.highlighted ? 'text-slate-500' : 'text-slate-400'}`}>
                        {tier.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`font-sans text-sm leading-relaxed mb-8 flex-1 text-pretty ${
                    tier.highlighted ? 'text-slate-300' : 'text-slate-500'
                  }`}>
                    {tier.desc}
                  </p>

                  {/* Feature list */}
                  <ul className="mb-8 flex flex-col gap-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                          tier.highlighted ? 'bg-signal-green' : 'bg-slate-300'
                        }`} aria-hidden="true" />
                        <span className={`font-sans text-sm ${tier.highlighted ? 'text-slate-300' : 'text-slate-600'}`}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA pinned to bottom */}
                  <a
                    href={tier.href}
                    className={`w-full py-3.5 px-6 text-center font-sans font-medium text-sm rounded-pill transition-all duration-200 active:scale-[0.97] ${
                      tier.highlighted
                        ? 'bg-recovery-blue text-white hover:bg-recovery-hover'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {tier.cta}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="mt-12 text-center">
            <a
              href="/pricing"
              className="font-sans text-sm font-medium text-slate-400 hover:text-slate-700 transition-colors duration-200 inline-flex items-center gap-1.5 group"
            >
              Full pricing breakdown and comparison
              <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
