import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ComparisonTable from '../components/ComparisonTable';
import CinematicNavbar from '../components/CinematicNavbar';
import CinematicFooter from '../components/CinematicFooter';

export default function Compare() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[var(--clinic-white)] flex flex-col">
      <CinematicNavbar />
      
      {/* 1) Page Hero */}
      <section
        className="w-full text-center px-6 md:px-12 relative z-10 pt-[180px] pb-[100px]"
        style={{ backgroundColor: 'var(--clinic-mist)' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="font-data text-[10px] font-bold text-[var(--primary)] tracking-[0.35em] uppercase mb-8">Competitive Landscape</div>
          <h1
            className="font-sans font-bold tracking-tighter mb-4 leading-[0.9] mx-auto flex flex-col items-center justify-center gap-1"
            style={{
              color: 'var(--clinic-ink)',
              fontSize: 'clamp(48px, 8vw, 84px)'
            }}
          >
            <span>Every Alternative</span>
          </h1>
          <h2
            className="font-drama italic tracking-tighter mb-8 mx-auto leading-tight"
            style={{ color: 'var(--recovery-blue)', fontSize: 'clamp(28px, 4vw, 42px)' }}
          >
            Built for Developers. Not Doctors.
          </h2>

          <p
            className="font-sans font-medium max-w-2xl mx-auto leading-relaxed text-xl text-[var(--clinic-slate)]"
          >
            Ringg, Bland, Retell, and VAPI are voice AI infrastructure tools. Engageo is the only system built from the ground up for an Indian clinic owner who needs results in 4 days, not a 6-month integration project.
          </p>
        </div>
      </section>

      {/* 2) Main Comparison Table */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto border border-[var(--primary)]/5 bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-blue-500/5">
            <ComparisonTable showHeaderAndFooter={false} />
        </div>
      </section>

      {/* 3) Bottom CTA */}
      <section
        className="py-40 px-6 text-center w-full bg-[var(--command-black)] text-white relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none noise-overlay" />
        <div className="max-w-4xl mx-auto relative z-10">
            <h2
            className="text-4xl md:text-7xl font-bold tracking-tight mb-12 leading-[1.1]"
            >
            Get the <span className="text-[var(--primary)] italic font-drama">clinic-ready</span> system.
            </h2>
            <Link
            to="/audit"
            className="inline-flex items-center justify-center font-bold tracking-[0.2em] uppercase transition-all hover:scale-105 active:scale-95 bg-[var(--recovery-blue)] text-white rounded-full px-12 py-5 shadow-2xl shadow-blue-500/40 text-xs"
            >
            Free Audit →
            </Link>
        </div>
      </section>

      <CinematicFooter />
    </div>
  );
}
