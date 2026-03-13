import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const col1 = [
    { label: 'Home', path: '/' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Compare', path: '/compare' },
  ];

  const col2 = [
    { label: 'Pricing', path: '/pricing' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Free Audit', path: '/audit' },
  ];

  return (
    <footer className="bg-white border-t-2 border-obsidian/10 py-16 md:py-20 px-4 md:px-12 lg:px-20 relative z-10">
      {/* 4-stripe top accent */}
      <div className="absolute top-0 left-0 right-0 flex h-[3px]">
        <div style={{ flex: 1, background: 'var(--command-surface)' }} />
        <div style={{ flex: 1, background: 'var(--green)' }} />
        <div style={{ flex: 1, background: 'var(--loss-red)' }} />
        <div style={{ flex: 1, background: '#C97B2A' }} />
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">

        {/* Brand */}
        <div className="max-w-xs space-y-5">
          <div className="flex items-center gap-2">
            <span className="font-sans text-xl font-bold tracking-tighter text-obsidian">Engageo</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] pulse-dot" />
          </div>
          <p className="text-xs text-subtle leading-relaxed">
            We answer the calls your clinic misses.
            <br />
            Every missed call is a patient lost to a competitor.
          </p>

          {/* Status indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-obsidian/10 bg-emerald-50/50">
            <span className="w-1.5 h-1.5 bg-emerald-500 pulse-dot" />
            <span className="font-mono text-[10px] text-emerald-800 font-bold uppercase tracking-widest">System Operational</span>
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-16 md:gap-24">
          <div className="flex flex-col">
            <h4 className="font-sans font-bold mb-4" style={{ color: 'var(--clinic-ink)', fontSize: '15px' }}>Pages</h4>
            <ul className="space-y-3 font-medium flex flex-col items-start text-left">
              {col1.map(({ label, path }) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="transition-colors text-left"
                    style={{ color: 'var(--clinic-stone)', fontSize: '14px', textDecoration: 'none' }}
                    onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline'; e.currentTarget.style.color = 'var(--clinic-ink)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none'; e.currentTarget.style.color = 'var(--clinic-stone)'; }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <h4 className="font-sans font-bold mb-4" style={{ color: 'var(--clinic-ink)', fontSize: '15px' }}>Get Started</h4>
            <ul className="space-y-3 font-medium flex flex-col items-start text-left">
              {col2.map(({ label, path }) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="transition-colors text-left"
                    style={{ color: 'var(--clinic-stone)', fontSize: '14px', textDecoration: 'none' }}
                    onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline'; e.currentTarget.style.color = 'var(--clinic-ink)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none'; e.currentTarget.style.color = 'var(--clinic-stone)'; }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border/40 flex items-center justify-between flex-wrap gap-4">
        <span className="font-sans" style={{ color: 'var(--clinic-stone)', fontSize: '13px' }}>
          © 2025 Engageo · Built for Indian specialist clinics · We answer the calls your clinic misses.
        </span>
      </div>
    </footer>
  );
}
