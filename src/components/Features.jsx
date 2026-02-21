import React from 'react';
import { GitBranch, History, FileText } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-20 relative z-10 bg-canvas">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-obsidian tracking-tighter mb-6 leading-[1.05]">
              Flawless execution.
              <span className="gradient-text block">Not just chatbots.</span>
            </h2>
            <p className="text-subtle text-lg leading-relaxed">
              Bridge the gap between raw missed calls and confirmed hospital pipeline
              with a platform designed for clinical precision.
            </p>
          </div>
          <a href="#" className="link-underline pb-1 text-sm font-semibold text-obsidian hover:text-brand transition-colors mb-2 shrink-0">
            Explore Platform Features →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

          {/* Card 1: 4 Day Tracker */}
          <div className="md:col-span-8 feature-card group relative rounded-2xl overflow-hidden">
            <div className="relative z-10 p-10 h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="max-w-md">
                  <div className="icon-box mb-6">
                    <GitBranch size={18} strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-obsidian mb-3 tracking-tight">
                    Revenue from Day 1
                  </h3>
                  <p className="text-subtle leading-relaxed text-sm">
                    System goes live in 4 days. Intercepts calls, routes via logic, and books appointments seamlessly.
                  </p>
                </div>
                <div className="hidden lg:block">
                  <div className="px-3 py-1 bg-brand/8 border border-brand/20 rounded-lg text-[10px] font-mono text-brand uppercase tracking-wider">
                    Live Tracking
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className="mt-12 h-32 w-full relative flex items-center border-t border-border/40 pt-6 overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 600 100" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <marker id="arrow-head" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
                      <path d="M0,0 L4,2 L0,4" fill="#3D5AFE" />
                    </marker>
                  </defs>
                  <path d="M20,50 C100,50 120,20 200,20 C280,20 300,80 380,80 C460,80 480,50 560,50" fill="none" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path d="M20,50 C100,50 120,20 200,20 C280,20 300,80 380,80 C460,80 480,50 560,50" fill="none" stroke="#3D5AFE" strokeWidth="2" strokeDasharray="600" strokeDashoffset="600" className="transition-all duration-[1500ms] ease-in-out group-hover:stroke-dashoffset-0" markerEnd="url(#arrow-head)" />

                  {[{ cx: 20, cy: 50, label: 'DAY 1', solid: true }, { cx: 200, cy: 20, label: 'DAY 2', solid: false }, { cx: 380, cy: 80, label: 'DAY 3', solid: false }, { cx: 560, cy: 50, label: 'GO LIVE', solid: true }].map((pt, i) => (
                    <g key={i} className={`transition-all duration-500 opacity-${i === 0 ? '100' : '40'} group-hover:opacity-100 origin-center`} style={{ transitionDelay: `${i * 300}ms` }}>
                      <circle cx={pt.cx} cy={pt.cy} r="5" fill={pt.solid ? '#3D5AFE' : '#fff'} stroke="#3D5AFE" strokeWidth="1.5" />
                      <text x={pt.cx} y={pt.cy + 20} textAnchor="middle" fontFamily="'JetBrains Mono', monospace" fontSize="8" fontWeight="600" fill="#94A3B8" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">{pt.label}</text>
                    </g>
                  ))}
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2: Lowest Risk Entry */}
          <div className="md:col-span-4 feature-card group relative rounded-2xl overflow-hidden flex flex-col">
            <div className="p-10 relative z-10 flex flex-col h-full">
              <div className="icon-box mb-6">
                <History size={18} />
              </div>
              <h3 className="text-xl font-bold text-obsidian mb-3 tracking-tight">
                Lowest Risk Entry
              </h3>
              <p className="text-sm text-subtle leading-relaxed mb-8">
                Don't hit 15 confirmed, calendar-booked appointments in 30 days? We extend your service free for another 30 days until we do.
              </p>

              <div className="mt-auto relative w-full h-32 flex flex-col justify-end items-center">
                <div className="absolute w-[80%] h-12 bg-border/30 border border-border rounded-t-xl top-4 scale-90 opacity-0 group-hover:opacity-100 group-hover:top-0 transition-all duration-500 ease-out" />
                <div className="absolute w-[90%] h-12 bg-canvas border border-border rounded-t-xl top-8 scale-95 opacity-50 group-hover:opacity-80 group-hover:top-6 transition-all duration-500 ease-out delay-75" />
                <div className="relative w-full h-16 glass-card rounded-xl flex items-center px-4 gap-3 z-10 transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full pulse-dot shrink-0" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[10px] font-bold text-obsidian uppercase tracking-wide">Refund Status</span>
                      <span className="text-[10px] font-mono text-brand font-bold">Secured</span>
                    </div>
                    <div className="h-1 w-full bg-canvas rounded-full overflow-hidden">
                      <div className="h-full w-[0%] bg-gradient-to-r from-brand to-brand/60 group-hover:w-[80%] transition-all duration-700 ease-out delay-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Proven Infrastructure */}
          <div className="md:col-span-12 feature-card group relative rounded-2xl overflow-hidden">
            <div className="p-10 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 max-w-lg">
                <div className="icon-box mb-6">
                  <FileText size={18} />
                </div>
                <h3 className="text-xl font-bold text-obsidian mb-3 tracking-tight">
                  Proven Infrastructure
                </h3>
                <p className="text-subtle leading-relaxed text-sm">
                  Turn complex WhatsApp chat streams into clean calendar invites automatically. The same AI voice + WhatsApp automation stack recovering ₹5–20L/month.
                </p>
              </div>

              <div className="flex-1 w-full flex items-center justify-center gap-8 h-32 relative">
                <div className="flex flex-col gap-2 relative">
                  <div className="w-10 h-12 glass-card rounded-lg flex items-center justify-center transition-all duration-700 ease-in-out group-hover:translate-x-14 group-hover:opacity-0 group-hover:scale-75">
                    <div className="w-4 h-0.5 bg-subtle/20 rounded" />
                  </div>
                  <div className="w-10 h-12 glass-card rounded-lg flex items-center justify-center absolute top-2 left-2 transition-all duration-700 ease-in-out delay-100 group-hover:translate-x-12 group-hover:opacity-0 group-hover:scale-75">
                    <div className="w-4 h-0.5 bg-subtle/20 rounded" />
                  </div>
                </div>

                <div className="w-16 h-16 rounded-full border-2 border-dashed border-brand/30 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border-2 border-t-brand border-r-transparent border-b-transparent border-l-transparent animate-spin [animation-duration:2.5s] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand/50 group-hover:text-brand transition-colors"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 12"/><path d="M3 3v9h9"/></svg>
                </div>

                <div className="w-24 h-32 glass-card rounded-xl p-4 space-y-3 transition-all duration-500 group-hover:shadow-brand group-hover:scale-105">
                  <div className="w-6 h-6 rounded-md bg-brand/10" />
                  <div className="space-y-2">
                    {[100, 75, 83].map((w, i) => (
                      <div key={i} className="h-1.5 bg-border rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r from-brand to-brand/60 w-0 group-hover:w-[${w}%] transition-all duration-700 ease-out`} style={{ transitionDelay: `${300 + i * 200}ms` }} />
                      </div>
                    ))}
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
