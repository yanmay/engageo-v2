import React from 'react';
import { Link } from 'react-router-dom';
import { WhatsappLogo } from '@phosphor-icons/react';

const navGroups = [
  {
    label: 'Product',
    links: [
      { to: '/features', label: 'Features' },
      { to: '/how-it-works', label: 'How it works' },
      { to: '/pricing', label: 'Pricing' },
      { to: '/compare', label: 'Compare' },
    ],
  },
  {
    label: 'Company',
    links: [
      { to: '/faq', label: 'FAQ' },
      { to: '/audit', label: 'Free audit' },
    ],
  },
  {
    label: 'Legal',
    links: [
      { to: '/privacy', label: 'Privacy policy' },
      { to: '/terms', label: 'Terms of service' },
      { to: '/dpdp', label: 'DPDP compliance' },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="w-full bg-command-black"
      role="contentinfo"
      style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
    >
      {/* Main body */}
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Brand — 4 cols */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <Link
              to="/"
              className="text-white font-sans font-semibold text-xl tracking-tight hover:opacity-75 transition-opacity w-fit"
              aria-label="Engageo home"
            >
              Engageo
            </Link>
            <p className="font-sans text-sm text-slate-400 leading-relaxed max-w-[280px] text-pretty">
              Missed call recovery and AI patient booking for Indian specialist clinics. Live in 47 clinics.
            </p>
            <a
              href="https://wa.me/917696382250"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 w-fit px-4 py-2.5 rounded-pill font-sans font-medium text-sm transition-all duration-200"
              style={{
                color: '#25D366',
                border: '1px solid rgba(37,211,102,0.25)',
                background: 'rgba(37,211,102,0.08)',
              }}
            >
              <WhatsappLogo size={16} weight="fill" />
              WhatsApp us directly
            </a>
          </div>

          {/* Nav groups — 8 cols across 3 sub-columns */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {navGroups.map((group) => (
              <div key={group.label} className="flex flex-col gap-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                  {group.label}
                </span>
                <nav aria-label={`${group.label} links`}>
                  <ul className="flex flex-col gap-3">
                    {group.links.map((link) => (
                      <li key={link.to}>
                        <Link
                          to={link.to}
                          className="font-sans text-sm text-slate-400 hover:text-white transition-colors duration-200"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-[1400px] mx-auto px-6 py-6 w-full flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        <p className="font-sans text-xs text-slate-600">
          &copy; {new Date().getFullYear()} Engageo. All rights reserved. Built for Indian clinics.
        </p>
        <p className="font-mono text-[10px] uppercase tracking-widest text-slate-700">
          DPDP Compliant &mdash; ISO 27001 Infrastructure
        </p>
      </div>
    </footer>
  );
}
