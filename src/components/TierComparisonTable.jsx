import React from 'react';
import { Check, Minus } from 'lucide-react';

const tiers = [
  { id: 'recover', name: 'Recover', price: '₹25K/mo' },
  { id: 'grow', name: 'Grow', price: '₹55K/mo', highlight: true },
  { id: 'dominate', name: 'Dominate', price: '₹1.2L/mo' },
];

const featureGroups = [
  {
    group: "Investment & Terms",
    features: [
      { name: "Monthly Retainer", recover: "₹25,000", grow: "₹55,000", dominate: "₹1,20,000" },
      { name: "Minimum Commitment", recover: "3 Months", grow: "6 Months", dominate: "6 Months" },
      { name: "Outcome Guarantee", recover: "15 Bookings", grow: "15 Bookings", dominate: "15 Bookings" },
    ]
  },
  {
    group: "Core Recovery (Included in All)",
    features: [
      { name: "AI voice callback (<8s)", recover: true, grow: true, dominate: true },
      { name: "Hinglish AI qualification", recover: true, grow: true, dominate: true },
      { name: "Google Calendar sync", recover: true, grow: true, dominate: true },
      { name: "WhatsApp 4-Step Sequence", recover: true, grow: true, dominate: true },
      { name: "Weekly Revenue Report", recover: true, grow: true, dominate: true },
    ]
  },
  {
    group: "Growth & Customer Acquisition",
    features: [
      { name: "Meta & Google Ads management", recover: false, grow: true, dominate: true },
      { name: "Landing page build", recover: false, grow: true, dominate: true },
      { name: "Google My Business optimization", recover: false, grow: true, dominate: true },
      { name: "Full WhatsApp Funnel build", recover: false, grow: true, dominate: true },
    ]
  },
  {
    group: "Enterprise Authority (Dominate Only)",
    features: [
      { name: "YouTube & Instagram video strategy", recover: false, grow: false, dominate: true },
      { name: "Doctor Personal Brand (Video)", recover: false, grow: false, dominate: true },
      { name: "SEO Blog Content (2/month)", recover: false, grow: false, dominate: true },
      { name: "Full Website Build / Redesign", recover: false, grow: false, dominate: true },
      { name: "Monthly 1:1 Strategy with Founder", recover: false, grow: false, dominate: true },
    ]
  }
];

export default function TierComparisonTable() {
  return (
    <div className="w-full overflow-x-auto pb-12">
      <div className="min-w-[800px] border-t border-white/10">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="py-10 px-6 text-left w-1/4">
                <div className="font-data text-[10px] uppercase tracking-[0.2em] text-[var(--recovery-blue)] font-bold">Feature Matrix</div>
              </th>
              {tiers.map((tier) => (
                <th key={tier.id} className={`py-10 px-6 text-center transition-colors duration-300 ${tier.highlight ? 'bg-white/[0.03]' : tier.id === 'dominate' ? 'bg-[var(--sovereign-gold)]/[0.04]' : ''}`}>
                  <div className={`font-sans font-bold text-xl tracking-tight mb-1 ${tier.id === 'dominate' ? 'text-[var(--sovereign-gold)]' : 'text-white'}`}>{tier.name}</div>
                  <div className={`font-data text-[11px] font-bold uppercase tracking-widest leading-none mt-2 ${tier.id === 'dominate' ? 'text-[var(--sovereign-gold)]/50' : 'text-white/40'}`}>Level {tier.id === 'recover' ? '01' : tier.id === 'grow' ? '02' : '03'}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {featureGroups.map((group, groupIdx) => (
              <React.Fragment key={groupIdx}>
                <tr className="bg-white/[0.02]">
                  <td colSpan={4} className="py-4 px-6">
                    <div className="font-data text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold">{group.group}</div>
                  </td>
                </tr>
                {group.features.map((feature, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-6 px-6 text-sm font-bold text-white/80 tracking-tight">
                      {feature.name}
                    </td>
                    {tiers.map((tier) => (
                      <td key={tier.id} className={`py-6 px-6 text-center ${tier.highlight ? 'bg-white/[0.03]' : tier.id === 'dominate' ? 'bg-[var(--sovereign-gold)]/[0.02]' : ''}`}>
                        {feature[tier.id] === true ? (
                          <div className="flex justify-center">
                            <Check size={18} className={tier.id === 'dominate' ? 'text-[var(--sovereign-gold)]' : 'text-[var(--signal-green)]'} strokeWidth={3} />
                          </div>
                        ) : feature[tier.id] === false ? (
                          <div className="flex justify-center">
                            <Minus size={18} className="text-white/10" strokeWidth={2} />
                          </div>
                        ) : (
                          <span className={`text-xs font-data font-bold ${tier.id === 'dominate' ? 'text-[var(--sovereign-gold)]' : 'text-white'}`}>{feature[tier.id]}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}

              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

