import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border/50 py-20 px-6 md:px-12 lg:px-20 relative z-10">
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-dot" />
            <span className="font-mono text-[10px] text-emerald-700 font-semibold uppercase tracking-widest">System Operational</span>
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
