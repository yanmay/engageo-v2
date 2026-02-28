import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-obsidian/10 py-20 px-6 md:px-12 lg:px-20 relative z-10">
      {/* 4-stripe top accent */}
      <div className="absolute top-0 left-0 right-0 flex h-[3px]">
        <div style={{ flex: 1, background: '#1E1A16' }} />
        <div style={{ flex: 1, background: '#3D5AFE' }} />
        <div style={{ flex: 1, background: '#E8552A' }} />
        <div style={{ flex: 1, background: '#C97B2A' }} />
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">

        {/* Brand */}
        <div className="max-w-xs space-y-5">
          <div className="flex items-center gap-2">
            <span className="font-sans text-xl font-bold tracking-tighter text-obsidian">Engageo</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand pulse-dot" />
          </div>
          <p className="text-xs text-subtle leading-relaxed">
            Every missed call is a patient lost to a competitor.
            <br />
            We secure your revenue, while you treat your patients.
          </p>

          {/* Status indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-obsidian/10 bg-emerald-50/50">
            <span className="w-1.5 h-1.5 bg-emerald-500 pulse-dot" />
            <span className="font-mono text-[10px] text-emerald-800 font-bold uppercase tracking-widest">System Operational</span>
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-16">
          <div>
            <ul className="space-y-4 text-sm font-medium flex flex-col items-start text-left">
              {['How It Works', "Who It's For", 'Free Audit', 'Privacy'].map((link) => (
                <li key={link}>
                  <a href="#" className="link-underline text-subtle hover:text-obsidian transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border/40 flex items-center justify-between">
        <span className="text-[11px] text-muted font-mono">© 2025 Engageo. High-fidelity recovery for specialist clinics.</span>
        <span className="text-[11px] text-muted font-mono">v2.1.0</span>
      </div>
    </footer>
  );
}
