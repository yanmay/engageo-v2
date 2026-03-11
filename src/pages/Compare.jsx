import React from 'react';
import { Link } from 'react-router-dom';
import ComparisonTable from '../components/ComparisonTable';

export default function Compare() {
  return (
    <div className="w-full flex-1 flex flex-col" style={{ backgroundColor: 'var(--clinic-white)' }}>

      {/* 1) Page Hero */}
      <section
        className="w-full text-center px-6 md:px-12 relative z-10 pt-[140px] pb-[80px]"
        style={{ backgroundColor: 'var(--clinic-mist)' }}
      >
        <h1
          className="font-sans font-bold tracking-tighter mb-2 leading-tight mx-auto flex flex-col items-center justify-center gap-1"
          style={{
            color: 'var(--clinic-ink)',
            fontSize: 'clamp(32px, 5vw, 48px)'
          }}
        >
          Every Alternative
        </h1>
        <h2
          className="font-drama italic tracking-tighter mb-6 mx-auto leading-tight"
          style={{ color: 'var(--signal-green)', fontSize: 'clamp(22px, 3.5vw, 32px)' }}
        >
          Built for Developers. Not Doctors.
        </h2>

        <p
          className="font-sans font-medium max-w-[640px] mx-auto leading-relaxed"
          style={{ color: 'var(--clinic-slate)', fontSize: '16px' }}
        >
          Ringg, Bland, Retell, and VAPI are voice AI infrastructure tools. Engageo is the only system built from the ground up for an Indian clinic owner who needs results in 4 days, not a 6-month integration project.
        </p>
      </section>

      {/* 2) Main Comparison Table */}
      <ComparisonTable showHeaderAndFooter={false} />

      {/* 3) Bottom CTA */}
      <section
        className="py-[60px] px-6 text-center w-full"
        style={{ backgroundColor: 'var(--clinic-mist)' }}
      >
        <h2
          className="font-sans font-bold mb-6 mx-auto leading-tight tracking-tight"
          style={{ color: 'var(--clinic-ink)', fontSize: '28px' }}
        >
          Get the clinic-ready system.
        </h2>
        <Link
          to="/audit"
          className="inline-flex items-center justify-center font-bold tracking-wide transition-all hover:scale-[1.02] active:scale-[0.98]"
          style={{
            backgroundColor: 'var(--signal-green)',
            color: 'white',
            borderRadius: '9999px',
            padding: '16px 32px',
            fontSize: '18px'
          }}
        >
          Free Audit →
        </Link>
      </section>

    </div>
  );
}
