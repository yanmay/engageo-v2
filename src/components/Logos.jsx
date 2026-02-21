import React from 'react';

const clinics = ['NDMR Fertility', 'Apollo Dental', 'Elite Hair Clinic', 'Clove Dental', 'Nova IVF', 'Fortis Ortho', 'Skin & You'];

export default function Logos() {
  const doubled = [...clinics, ...clinics];

  return (
    <section className="border-y border-border/50 py-14 bg-white/60 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">

        {/* Label */}
        <div className="flex items-center gap-2 whitespace-nowrap shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-brand pulse-dot" />
          <p className="font-mono text-[10px] font-semibold text-subtle uppercase tracking-widest">
            Powering clinics across India
          </p>
        </div>

        {/* Marquee */}
        <div className="w-full md:flex-1 overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee w-max gap-x-12 items-center">
            {doubled.map((name, i) => (
              <span
                key={i}
                className="font-sans text-sm font-semibold text-obsidian/50 tracking-tight whitespace-nowrap hover:text-obsidian transition-colors duration-300 px-1"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
