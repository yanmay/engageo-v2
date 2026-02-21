import React from 'react';
import { Check, X, AlertTriangle } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const columns = [
  { key: 'engageo', label: 'Engageo', sub: 'Built for Indian Clinics', highlight: true },
  { key: 'ringg', label: 'Ringg AI', sub: 'Enterprise AI Platform' },
  { key: 'bland', label: 'Bland / Retell', sub: 'Developer AI Tools' },
  { key: 'vapi', label: 'VAPI', sub: 'Developer Infrastructure' },
  { key: 'receptionist', label: 'New Receptionist', sub: 'Human Staff' },
];

const rows = [
  {
    factor: 'What you pay each month',
    factorNote: 'Can you predict your bill?',
    engageo:      { v: '₹20,000 – ₹35,000 flat', note: 'One number. Always.' },
    ringg:        { v: '~₹7–10/min × every call', warn: 'Unpredictable bills' },
    bland:        { v: '~₹8–9/min + voice + AI fees', warn: 'Hidden add-on charges' },
    vapi:         { v: '~₹5–12/min (modular pricing)', warn: '4 separate fee lines' },
    receptionist: { v: '₹25,000 – ₹40,000', warn: '+ PF, leave, training costs' },
  },
  {
    factor: 'Pricing currency',
    factorNote: 'Billed in rupees?',
    engageo:      { v: '₹ — always', note: 'No forex surprises' },
    ringg:        { v: '$ USD', warn: true },
    bland:        { v: '$ USD', warn: true },
    vapi:         { v: '$ USD', warn: true },
    receptionist: { v: '₹ — yes', warn: false },
  },
  {
    factor: 'Setup — do you need an IT person?',
    factorNote: 'Can a doctor set this up?',
    engageo:      { v: 'No. Live in 4 days.', note: 'We do everything for you' },
    ringg:        { v: 'Needs developer + API setup', warn: true },
    bland:        { v: 'Requires API integration', warn: true },
    vapi:         { v: 'Full developer required', warn: true },
    receptionist: { v: '2–6 weeks (hiring + training)', warn: 'Slow to start' },
  },
  {
    factor: 'Trained on your specialty',
    factorNote: 'Does it know dental vs. fertility vs. ortho?',
    engageo:      { v: true, note: 'Implant, IVF, ortho, skin — AI knows the difference' },
    ringg:        { v: 'Generic script', warn: true },
    bland:        { v: 'Generic script', warn: true },
    vapi:         { v: 'Custom-built required', warn: true },
    receptionist: { v: 'Trained manually by you', warn: 'Takes months, knowledge leaves if they quit' },
  },
  {
    factor: 'WhatsApp booking confirmation',
    factorNote: 'How Indian patients actually communicate',
    engageo:      { v: true, note: 'Confirmation + reminder + pre-visit message' },
    ringg:        { v: false },
    bland:        { v: false },
    vapi:         { v: false },
    receptionist: { v: 'Manual, often forgotten', warn: 'Inconsistent' },
  },
  {
    factor: 'Hindi & regional language support',
    factorNote: 'Speaks your patient\'s language?',
    engageo:      { v: true, note: 'Hindi, Tamil, Telugu, Marathi — included' },
    ringg:        { v: 'Yes (enterprise plan)', warn: 'Higher tier needed' },
    bland:        { v: 'Extra $/min charge', warn: true },
    vapi:         { v: 'Depends on provider', warn: true },
    receptionist: { v: 'Depends on who you hire', warn: 'Not guaranteed' },
  },
  {
    factor: 'What the dashboard shows',
    factorNote: 'Do you see rupees or jargon?',
    engageo:      { v: '₹ recovered this week', note: '"₹2.4L secured" — not "132 calls handled"' },
    ringg:        { v: 'Call volume & handle time', warn: true },
    bland:        { v: 'API logs via developer', warn: true },
    vapi:         { v: 'Developer dashboards', warn: true },
    receptionist: { v: 'No dashboard at all', warn: 'You rely on memory' },
  },
  {
    factor: 'Outcome guarantee',
    factorNote: 'What if it doesn\'t work?',
    engageo:      { v: '15 booked appts in 30 days — or we extend free', note: 'Extra 30 days at zero cost if needed' },
    ringg:        { v: '$10 free trial credits', warn: true },
    bland:        { v: '$2 free trial credits', warn: true },
    vapi:         { v: '$10 free trial credits', warn: true },
    receptionist: { v: 'None — salary regardless of performance', warn: true },
  },
  {
    factor: 'Indian data law compliant',
    factorNote: 'DPDP Act 2023 — India\'s patient privacy law',
    engageo:      { v: true, note: 'Built for India from day 1' },
    ringg:        { v: 'ISO, SOC2 (US-focused)', warn: 'Not DPDP specific' },
    bland:        { v: 'HIPAA, GDPR (US/EU)', warn: 'Not DPDP specific' },
    vapi:         { v: 'GDPR (EU-focused)', warn: 'Not DPDP specific' },
    receptionist: { v: 'Verbal only — no audit trail', warn: 'No compliance record' },
  },
  {
    factor: 'Response speed after missed call',
    factorNote: 'Before the patient calls a competitor',
    engageo:      { v: '< 8 seconds', note: 'Before they even open Google' },
    ringg:        { v: '< 350ms voice latency', warn: 'Not built for missed-call recovery' },
    bland:        { v: '400ms voice latency', warn: 'Not missed-call focused' },
    vapi:         { v: '800ms voice latency', warn: 'Not missed-call focused' },
    receptionist: { v: 'Next working hour — if remembered', warn: 'Often next day or never' },
  },
];

function Cell({ data, isEngageo }) {
  if (!data) return <span className="text-muted text-xs">—</span>;

  const { v, note, warn } = data;

  return (
    <div className="flex flex-col gap-1">
      {v === true ? (
        <div className="flex items-center gap-1.5">
          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${isEngageo ? 'bg-brand/15' : 'bg-emerald-50'}`}>
            <Check size={11} strokeWidth={3} className={isEngageo ? 'text-brand' : 'text-emerald-600'} />
          </div>
          {isEngageo && note && <span className="text-[11px] text-brand font-semibold">{note}</span>}
        </div>
      ) : v === false ? (
        <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center">
          <X size={11} strokeWidth={2.5} className="text-red-400" />
        </div>
      ) : (
        <span className={`text-xs leading-snug ${isEngageo ? 'font-bold text-obsidian' : warn ? 'text-subtle' : 'text-subtle'}`}>
          {v}
        </span>
      )}

      {/* Sub-note */}
      {isEngageo && note && v !== true && (
        <span className="text-[10px] text-brand/80 font-medium">{note}</span>
      )}
      {!isEngageo && warn && typeof warn === 'string' && (
        <span className="text-[10px] text-amber-500 flex items-center gap-0.5">
          <AlertTriangle size={9} /> {warn}
        </span>
      )}
      {!isEngageo && warn === true && typeof v === 'string' && (
        <span className="text-[10px] text-red-400/80 flex items-center gap-0.5">
          <AlertTriangle size={9} /> Not for Indian clinics
        </span>
      )}
    </div>
  );
}

export default function ComparisonTable() {
  const { openModal } = useModal();
  return (
    <section className="py-32 px-6 md:px-8 lg:px-16 relative z-10 bg-canvas border-t border-border/50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-border shadow-card mb-6">
            <span className="font-mono text-[10px] text-subtle uppercase tracking-widest font-semibold">Direct Comparison</span>
          </div>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-obsidian tracking-tighter mb-4">
            Every Alternative
            <span className="gradient-text block">Built for Developers. Not Doctors.</span>
          </h2>
          <p className="text-subtle text-base max-w-xl mx-auto leading-relaxed">
            Ringg, Bland, Retell, and VAPI are voice AI infrastructure tools. 
            Engageo is the only system built from the ground up for an Indian clinic owner.
          </p>
        </div>

        {/* Table */}
        <div className="rounded-3xl overflow-hidden border border-border shadow-card overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse">

            {/* Col headers */}
            <thead>
              <tr className="bg-white border-b border-border">
                <th className="p-5 text-left border-r border-border w-[26%]">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Factor</span>
                </th>
                {columns.map((col) => (
                  <th key={col.key} className={`p-5 text-left border-r last:border-r-0 border-border relative ${col.highlight ? 'bg-brand/5' : ''}`}>
                    {col.highlight && (
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand to-brand/50" />
                    )}
                    <div className="space-y-1">
                      <div className="font-sans font-bold text-sm text-obsidian">{col.label}</div>
                      <div className={`font-mono text-[9px] uppercase tracking-wider ${col.highlight ? 'text-brand' : 'text-muted'}`}>{col.sub}</div>
                      {col.highlight && (
                        <span className="inline-block bg-brand/10 text-brand text-[9px] font-bold font-mono px-1.5 py-0.5 rounded tracking-widest">
                          RECOMMENDED
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Rows */}
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-border/50 last:border-b-0 transition-colors duration-200 hover:bg-white/70 ${idx % 2 === 0 ? 'bg-white' : 'bg-canvas/40'}`}
                >
                  <td className="p-5 border-r border-border/50 align-top">
                    <div className="font-sans text-xs font-semibold text-obsidian leading-snug mb-0.5">{row.factor}</div>
                    {row.factorNote && (
                      <div className="font-mono text-[9px] text-muted italic">{row.factorNote}</div>
                    )}
                  </td>
                  {columns.map((col) => (
                    <td key={col.key} className={`p-5 border-r last:border-r-0 border-border/50 align-top ${col.highlight ? 'bg-brand/[0.025]' : ''}`}>
                      <Cell data={row[col.key]} isEngageo={col.highlight} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-sm text-subtle max-w-lg mx-auto">
            Other tools give you the parts. Engageo gives you the outcome — 
            <span className="font-semibold text-obsidian"> guaranteed in rupees.</span>
          </p>
          <button
            onClick={openModal}
            className="group relative isolate overflow-hidden bg-brand text-white text-sm font-bold px-10 py-4 rounded-2xl glow-brand-sm transition-all duration-400 hover:scale-[1.04] hover:shadow-brand-lg active:scale-[0.98]">
            <div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent z-0 pointer-events-none" />
            <span className="relative z-10">Get the Clinic-Ready System — Free Audit →</span>
          </button>
          <p className="text-[11px] text-muted">15 confirmed bookings guaranteed · No developer needed · 4-day setup</p>
        </div>

      </div>
    </section>
  );
}
