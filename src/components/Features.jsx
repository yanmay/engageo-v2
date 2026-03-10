import React from 'react';
import { GitBranch, History, FileText } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-12 lg:px-20 relative z-10">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            {/* Editorial tag */}
            <div className="section-label mb-6">Platform Capabilities</div>
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-obsidian tracking-tighter mb-5 leading-[1.05]">
              One missed call.{' '}
              <span className="serif-hero text-brand">Seven automatic actions.</span>
            </h2>
            <p className="text-subtle text-lg leading-relaxed">
              Most clinics patch one hole. Engageo closes the entire leak.
            </p>
          </div>
          <a href="#" className="link-underline pb-1 text-sm font-semibold text-subtle hover:text-obsidian transition-colors mb-2 shrink-0">
            Explore Platform →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

          {/* Card 1 — Revenue from Day 1 */}
          <div
            className="md:col-span-8 bg-[var(--parchment)] border border-[var(--ink-faint)] rounded-[2rem] group relative overflow-hidden shadow-sm"
            style={{ color: 'var(--recovery-blue)' /* used by ::before left-border */ }}
          >
            <div className="relative z-10 p-6 md:p-10 h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="max-w-md">
                  {/* Numeral anchor */}
                  <div className="card-numeral mb-2">01</div>
                  <h3 className="text-2xl font-bold text-obsidian mb-3 tracking-tight">
                    Revenue from Day 1
                  </h3>
                  <p className="text-subtle leading-relaxed text-sm">
                    System goes live in 4 days. Intercepts calls, routes via logic, and books appointments seamlessly — zero manual setup required.
                  </p>
                </div>
                <div className="hidden lg:flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="font-mono text-[10px] text-muted uppercase tracking-wider">Live Tracking</span>
                </div>
              </div>

              {/* Revenue bar chart — daily recovered revenue */}
              <div className="mt-10 pt-6">
                <div className="flex items-end gap-2 h-20">
                  {[42, 68, 55, 80, 73, 91, 88, 95, 78, 100, 85, 97].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm transition-all duration-700 ease-out group-hover:opacity-100"
                      style={{
                        height: `${h}%`,
                        background: i >= 9
                          ? 'linear-gradient(180deg,var(--recovery-blue) 0%,var(--recovery-blue-glow) 100%)'
                          : 'rgba(61,90,254,0.12)',
                        opacity: 0.5 + (i / 18),
                        transitionDelay: `${i * 40}ms`,
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  <span className="font-mono text-[9px] text-muted">DAY 1</span>
                  <span className="font-mono text-[9px] text-brand font-semibold">DAY 4 — GO LIVE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 — Lowest Risk Entry */}
          <div
            className="md:col-span-4 bg-[var(--parchment)] border border-[var(--ink-faint)] rounded-[2rem] group relative overflow-hidden flex flex-col shadow-sm"
            style={{ color: 'var(--loss-red)' /* rust left-border */ }}
          >
            <div className="p-6 md:p-10 relative z-10 flex flex-col h-full">
              <div className="card-numeral mb-2" style={{ color: 'rgba(232,85,42,0.1)' }}>02</div>
              <h3 className="text-xl font-bold text-obsidian mb-3 tracking-tight">
                Lowest Risk Entry
              </h3>
              <p className="text-sm text-subtle leading-relaxed mb-8">
                We keep going for free. If your clinic doesn't receive 15 confirmed bookings in the first 30 days, we extend the service at zero cost until we hit that number. No invoices. Just the number we promised.
              </p>

              <div className="mt-auto relative w-full h-32 flex flex-col justify-end items-center">
                <div className="absolute w-[80%] h-12 bg-sand border border-border rounded-t-xl top-4 scale-90 opacity-0 group-hover:opacity-100 group-hover:top-0 transition-all duration-500 ease-out" />
                <div className="absolute w-[90%] h-12 bg-canvas border border-border rounded-t-xl top-8 scale-95 opacity-50 group-hover:opacity-80 group-hover:top-6 transition-all duration-500 ease-out delay-75" />
                <div className="relative w-full h-16 glass-card rounded-xl flex items-center px-4 gap-3 z-10 transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full pulse-dot shrink-0" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[10px] font-bold text-obsidian uppercase tracking-wide">Guarantee Status</span>
                      <span className="text-[10px] font-mono text-brand font-bold">Active</span>
                    </div>
                    <div className="h-[2px] w-full bg-border rounded-full overflow-hidden">
                      <div className="h-full w-[0%] bg-gradient-to-r from-brand to-brand/60 group-hover:w-[80%] transition-all duration-700 ease-out delay-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 — Proven Infrastructure */}
          <div
            className="md:col-span-12 bg-[var(--clinic-white)] border-2 border-obsidian retro-shadow group relative overflow-hidden"
            style={{ color: 'var(--command-surface)' /* charcoal left-border */ }}
          >
            <div className="p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-1 max-w-lg">
                <div className="card-numeral mb-2" style={{ color: 'rgba(30,26,22,0.07)' }}>03</div>
                <h3 className="text-xl font-bold text-obsidian mb-3 tracking-tight">
                  Proven Infrastructure
                </h3>
                <p className="text-subtle leading-relaxed text-sm">
                  The same AI voice + WhatsApp funnel recovering ₹5–20L/month across 47 clinics. A voice call gets the patient. WhatsApp keeps them.
                </p>
              </div>

              <div className="flex-1 w-full flex items-center justify-center gap-8 h-32 relative">
                <div className="flex flex-col gap-2 relative">
                  <div className="w-10 h-12 bg-white border-2 border-obsidian retro-shadow flex items-center justify-center transition-all duration-700 ease-in-out group-hover:translate-x-14 group-hover:opacity-0 group-hover:scale-75">
                    <div className="w-4 h-0.5 bg-obsidian/40" />
                  </div>
                  <div className="w-10 h-12 bg-white border-2 border-obsidian retro-shadow flex items-center justify-center absolute top-2 left-2 transition-all duration-700 ease-in-out delay-100 group-hover:translate-x-12 group-hover:opacity-0 group-hover:scale-75">
                    <div className="w-4 h-0.5 bg-obsidian/40" />
                  </div>
                </div>

                <div className="w-14 h-14 rounded-full border border-dashed border-brand/30 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border-2 border-t-brand border-r-transparent border-b-transparent border-l-transparent animate-spin [animation-duration:2.5s] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand/50 group-hover:text-brand transition-colors"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 12" /><path d="M3 3v9h9" /></svg>
                </div>

                <div className="w-24 h-32 glass-card rounded-xl p-4 space-y-3 transition-all duration-500 group-hover:shadow-brand group-hover:scale-105 group-hover:border-brand/20">
                  <div className="w-6 h-6 rounded-md bg-[var(--green)]/10" />
                  <div className="space-y-2">
                    {[100, 75, 83].map((w, i) => (
                      <div key={i} className="h-[3px] bg-border rounded-full overflow-hidden">
                        <div className="h-full bg-[var(--green)]/70 w-0 group-hover:w-full transition-all duration-700 ease-out rounded-full"
                          style={{ transitionDelay: `${300 + i * 150}ms`, maxWidth: `${w}%` }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 — WhatsApp That Does the Work */}
          <div
            className="md:col-span-12 bg-[var(--clinic-white)] border-2 border-obsidian retro-shadow group relative overflow-hidden"
            style={{ color: 'var(--signal-green)' /* emerald left-border */ }}
          >
            <div className="p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 relative z-10">
              <div className="flex-1 max-w-lg">
                <div className="flex justify-between items-start mb-2">
                  <div className="card-numeral mb-0" style={{ color: 'rgba(5,150,105,0.1)' }}>04</div>
                  <div className="flex items-center gap-1.5 md:hidden">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="font-mono text-[10px] text-muted uppercase tracking-wider font-bold">Live Tracking</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-obsidian mb-3 tracking-tight">
                  WhatsApp That Does the Work
                </h3>
                <p className="text-subtle leading-relaxed text-sm">
                  The moment a slot is booked, the patient gets a confirmation. 24 hours before, they get a reminder. If they miss it, a recovery message fires. All on WhatsApp. Zero manual effort from your team.
                </p>
              </div>

              <div className="flex-1 w-full bg-canvas/50 border border-obsidian/10 rounded-2xl p-6 relative">
                <div className="hidden md:flex absolute top-4 right-4 items-center gap-1.5 bg-white px-2 py-1 border border-obsidian/10 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-dot" />
                  <span className="font-mono text-[9px] text-obsidian uppercase tracking-wider font-bold">Live Tracking</span>
                </div>
                <div className="flex flex-col gap-0 mt-2 md:mt-6 w-full">
                  <div className="flex items-center justify-between p-3 border-b border-obsidian/10 hover:bg-white/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="font-mono text-[11px] font-bold text-obsidian uppercase tracking-wider">Instant</span>
                    </div>
                    <span className="text-[13px] text-subtle font-medium">Booking Confirmation</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border-b border-obsidian/10 hover:bg-white/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[var(--green)]" />
                      <span className="font-mono text-[11px] font-bold text-obsidian uppercase tracking-wider">T-24 HRS</span>
                    </div>
                    <span className="text-[13px] text-subtle font-medium">Automated Reminder</span>
                  </div>
                  <div className="flex items-center justify-between p-3 hover:bg-white/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span className="font-mono text-[11px] font-bold text-obsidian uppercase tracking-wider">No-Show</span>
                    </div>
                    <span className="text-[13px] text-subtle font-medium">Recovery Sequence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
