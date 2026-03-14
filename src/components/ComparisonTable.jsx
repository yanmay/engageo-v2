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
    engageo: { v: '₹20,000 – ₹35,000 flat', note: 'One number. Always.' },
    ringg: { v: '~₹7–10/min × every call', warn: 'Unpredictable bills' },
    bland: { v: '~₹8–9/min + voice + AI fees', warn: 'Hidden add-on charges' },
    vapi: { v: '~₹5–12/min (modular pricing)', warn: '4 separate fee lines' },
    receptionist: { v: '₹25,000 – ₹40,000', warn: '+ PF, leave, training costs' },
  },
  {
    factor: 'Pricing currency',
    factorNote: 'Billed in rupees?',
    engageo: { v: '₹ — always', note: 'No forex surprises' },
    ringg: { v: '$ USD', warn: true },
    bland: { v: '$ USD', warn: true },
    vapi: { v: '$ USD', warn: true },
    receptionist: { v: '₹ — yes', warn: false },
  },
  {
    factor: 'Setup — do you need an IT person?',
    factorNote: 'Can a doctor set this up?',
    engageo: { v: 'No. Live in 4 days.', note: 'We do everything for you' },
    ringg: { v: 'Needs developer + API setup', warn: true },
    bland: { v: 'Requires API integration', warn: true },
    vapi: { v: 'Full developer required', warn: true },
    receptionist: { v: '2–6 weeks (hiring + training)', warn: 'Slow to start' },
  },
  {
    factor: 'Trained on your specialty',
    factorNote: 'Does it know dental vs. fertility vs. ortho?',
    engageo: { v: true, note: 'Implant, IVF, ortho, skin — AI knows the difference' },
    ringg: { v: 'Generic script', warn: true },
    bland: { v: 'Generic script', warn: true },
    vapi: { v: 'Custom-built required', warn: true },
    receptionist: { v: 'Trained manually by you', warn: 'Takes months, knowledge leaves if they quit' },
  },
  {
    factor: 'WhatsApp patient journey\nConfirmation → Reminder → Pre-visit → No-show recovery',
    factorNote: '',
    engageo: { v: true, note: '✅ Booking confirmation (instant)\n✅ 24hr appointment reminder\n✅ Pre-visit directions message\n✅ No-show recovery message' },
    ringg: { v: false },
    bland: { v: false },
    vapi: { v: false },
    receptionist: { v: 'Manual, often forgotten', warn: 'Inconsistent' },
  },
  {
    factor: 'Hindi & regional language support',
    factorNote: 'Speaks your patient\'s language?',
    engageo: { v: true, note: 'Hindi, Tamil, Telugu, Marathi — included' },
    ringg: { v: 'Yes (enterprise plan)', warn: 'Higher tier needed' },
    bland: { v: 'Extra $/min charge', warn: true },
    vapi: { v: 'Depends on provider', warn: true },
    receptionist: { v: 'Depends on who you hire', warn: 'Not guaranteed' },
  },
  {
    factor: 'What the dashboard shows',
    factorNote: 'Do you see rupees or jargon?',
    engageo: { v: '₹ recovered this week', note: '"₹2.4L secured" — not "132 calls handled"' },
    ringg: { v: 'Call volume & handle time', warn: true },
    bland: { v: 'API logs via developer', warn: true },
    vapi: { v: 'Developer dashboards', warn: true },
    receptionist: { v: 'No dashboard at all', warn: 'You rely on memory' },
  },
  {
    factor: 'Outcome guarantee',
    factorNote: 'What if it doesn\'t work?',
    engageo: { v: '15 booked appts in 30 days — or we keep going for free', note: 'Extended at zero cost until we hit 15' },
    ringg: { v: '$10 free trial credits', warn: true },
    bland: { v: '$2 free trial credits', warn: true },
    vapi: { v: '$10 free trial credits', warn: true },
    receptionist: { v: 'None — salary regardless of performance', warn: true },
  },
  {
    factor: 'Indian data law compliant',
    factorNote: 'DPDP Act 2023 — India\'s patient privacy law',
    engageo: { v: true, note: 'Built for India from day 1' },
    ringg: { v: 'ISO, SOC2 (US-focused)', warn: 'Not DPDP specific' },
    bland: { v: 'HIPAA, GDPR (US/EU)', warn: 'Not DPDP specific' },
    vapi: { v: 'GDPR (EU-focused)', warn: 'Not DPDP specific' },
    receptionist: { v: 'Verbal only — no audit trail', warn: 'No compliance record' },
  },
  {
    factor: 'Response speed after missed call',
    factorNote: 'Before the patient calls a competitor',
    engageo: { v: '< 8 seconds', note: 'Before they even open Google' },
    ringg: { v: '< 350ms voice latency', warn: 'Not built for missed-call recovery' },
    bland: { v: '400ms voice latency', warn: 'Not missed-call focused' },
    vapi: { v: '800ms voice latency', warn: 'Not missed-call focused' },
    receptionist: { v: 'Next working hour — if remembered', warn: 'Often next day or never' },
  },
];

function Cell({ data, isEngageo }) {
  if (!data) return <span className="text-[var(--clinic-stone)] text-[13px] font-medium">—</span>;

  const { v, note, warn } = data;

  return (
    <div className="flex flex-col gap-2">
      {v === true ? (
        <div className="flex items-center gap-3">
          <div className={`w-6 h-6 border border-[var(--clinic-silver)] rounded-full flex items-center justify-center shrink-0 ${isEngageo ? 'bg-[var(--signal-green)] text-white shadow-sm' : 'bg-[var(--clinic-mist)] text-[var(--recovered-green)]'}`}>
            <Check size={14} strokeWidth={3} className={isEngageo ? 'text-white' : 'text-[var(--recovered-green)]'} />
          </div>
          {isEngageo && note && <span className="text-xs text-[var(--recovered-green)] font-bold leading-tight whitespace-pre-wrap">{note}</span>}
        </div>
      ) : v === false ? (
        <div className="w-5 h-5 border-2 border-[var(--command-black)] bg-white flex items-center justify-center shrink-0">
          <X size={12} strokeWidth={3} className="text-[var(--command-black)]" />
        </div>
      ) : (
        <span className={`text-[13px] leading-snug ${isEngageo ? 'font-bold text-[var(--command-black)] text-[14px]' : warn ? 'text-[var(--clinic-slate)]' : 'text-[var(--command-black)] font-medium'}`}>
          {v}
        </span>
      )}

      {/* Sub-note */}
      {isEngageo && note && v !== true && (
        <span className="text-[11px] text-[var(--recovered-green)] font-bold leading-tight mt-0.5">{note}</span>
      )}
      {!isEngageo && warn && typeof warn === 'string' && (
        <span className="text-[11px] text-[var(--clinic-slate)] font-semibold flex items-center gap-1.5 mt-0.5">
          <AlertTriangle size={10} className="text-[var(--sovereign-gold)] shrink-0" />
          <span className="leading-tight">{warn}</span>
        </span>
      )}
      {!isEngageo && warn === true && typeof v === 'string' && (
        <span className="text-[11px] text-[var(--loss-red)]/80 font-bold flex items-center gap-1.5 mt-0.5">
          <AlertTriangle size={10} className="shrink-0" /> Not for India
        </span>
      )}
    </div>
  );
}

export default function ComparisonTable({ showHeaderAndFooter = true }) {
  const { openModal } = useModal();
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-16 xl:px-20 relative z-10 bg-[var(--clinic-white)] lg:border-t-0 border-[var(--clinic-silver)]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        {showHeaderAndFooter && (
          <div className="text-center mb-16">
            <div className="font-data text-[10px] tracking-widest uppercase text-[var(--clinic-stone)] mb-6">Direct Comparison</div>
            <h2 className="font-sans text-4xl md:text-6xl font-bold text-[var(--command-black)] tracking-tighter mb-4">
              Every Alternative. <br />
              <span className="text-[var(--signal-green)] font-drama italic">Built for Developers. Not Doctors.</span>
            </h2>
            <p className="text-[var(--clinic-slate)] text-lg max-w-2xl mx-auto leading-relaxed">
              Ringg, Bland, Retell, and VAPI are voice AI infrastructure tools.
              Engageo is the only system built from the ground up for an Indian clinic owner.
            </p>
          </div>
        )}

        {/* ── Table View: Horizontal Scroll on Mobile, Full Width on Desktop ── */}
        <div className="overflow-x-auto pb-6 -mx-4 px-4 lg:mx-0 lg:px-0 lg:pb-0 hide-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>
          <div className="min-w-[1000px] lg:min-w-0 bg-white border border-[var(--command-black)]/10 rounded-2xl overflow-hidden shadow-2xl relative mb-4">
            <table className="w-full border-collapse">

              {/* Col headers */}
              <thead>
                <tr className="bg-[var(--clinic-mist)] border-b border-[var(--command-black)]/10 w-full">
                  <th className="p-6 text-left border-r last:border-r-0 border-[var(--command-black)]/10 w-[24%] align-bottom">
                    <span className="font-data text-[10px] uppercase tracking-widest text-[var(--clinic-stone)] font-bold">Comparison Factor</span>
                  </th>
                  {columns.map((col) => (
                    <th key={col.key} className={`p-6 text-left border-r last:border-r-0 border-[var(--command-black)]/10 relative align-top ${col.highlight ? 'bg-white' : ''}`}>
                      {col.highlight && (
                        <div className="absolute top-0 left-0 right-0 h-[4px] bg-[var(--recovery-blue)]" />
                      )}
                      <div className="space-y-1.5 relative z-10">
                        <div className="font-sans font-bold text-[15px] text-[var(--command-black)] uppercase tracking-tight">{col.label}</div>
                        <div className={`font-data text-[9px] uppercase tracking-wider ${col.highlight ? 'text-[var(--recovery-blue)] font-bold' : 'text-[var(--clinic-stone)]'}`}>{col.sub}</div>
                        {col.highlight && (
                          <div className="pt-2">
                            <span className="inline-block bg-[var(--recovery-blue)] text-white rounded-full text-[9px] font-bold font-data px-2.5 py-1 tracking-widest uppercase">
                              Clinic-Ready
                            </span>
                          </div>
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
                    className={`border-b border-[var(--command-black)]/5 last:border-b-0 transition-colors duration-200 hover:bg-[var(--clinic-mist)] ${idx % 2 === 0 ? 'bg-transparent' : 'bg-[var(--clinic-white)]'}`}
                  >
                    <td className="p-6 border-r border-[var(--command-black)]/5 align-top w-[26%]">
                      <div className="font-sans text-[13px] md:text-[14px] font-bold text-[var(--command-black)] leading-snug mb-1.5 whitespace-pre-wrap">{row.factor}</div>
                      {row.factorNote && (
                        <div className="font-data text-[10px] text-[var(--clinic-stone)] italic leading-relaxed whitespace-pre-wrap">{row.factorNote}</div>
                      )}
                    </td>
                    {columns.map((col) => (
                      <td key={col.key} className={`p-6 border-r last:border-r-0 border-[var(--command-black)]/5 align-top ${col.highlight ? 'bg-white' : ''}`}>
                        <Cell data={row[col.key]} isEngageo={col.highlight} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA */}
        {showHeaderAndFooter && (
          <div className="mt-12 text-center space-y-4">
            <p className="text-sm text-[var(--clinic-slate)] max-w-lg mx-auto font-medium">
              Other tools give you the parts. Engageo gives you the outcome —
              <span className="font-bold text-[var(--command-black)] font-drama italic"> guaranteed in rupees.</span>
            </p>
            <button
              onClick={openModal}
              className="group inline-flex items-center gap-2 bg-[var(--recovery-blue)] text-white text-[11px] font-bold tracking-[0.2em] uppercase px-12 py-5 rounded-full hover:scale-[1.03] transition-all duration-200 active:scale-[0.98] shadow-2xl shadow-blue-500/20"
            >
              <span>Verified Revenue Audit →</span>
            </button>
            <p className="text-[10px] font-data text-[var(--clinic-stone)] tracking-widest uppercase">15 bookings guaranteed · No developer needed · 4-day setup</p>
          </div>
        )}

      </div>
    </section>
  );
}
