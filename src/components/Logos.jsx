import React from 'react';

const CLINICS = [
  "Nuvance Health", "Apollo Health", "Fortis Escorts", "Medanta The Medicity",
  "Max Healthcare", "Aster DM Healthcare", "Cloudnine", "Motherhood",
  "Clove Dental", "Sabka Dentist", "Skin City", "Kaya Clinic"
];

export default function Logos() {
  const doubled = [...CLINICS, ...CLINICS, ...CLINICS];

  return (
    <section className="relative py-12 bg-[var(--deep)] overflow-hidden border-y border-[var(--parchment)]/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">

        {/* Label */}
        <div className="flex items-center gap-3 opacity-40">
          <div className="w-1 h-1 rounded-full bg-[var(--parchment)]" />
          <span className="font-mono text-[9px] font-bold text-[var(--parchment)] uppercase tracking-[0.3em]">
            Trusted by Leading Medical Institutions
          </span>
          <div className="w-1 h-1 rounded-full bg-[var(--parchment)]" />
        </div>

        {/* Infinite Marquee */}
        <div className="w-full relative">
          {/* Masked edges for smooth fade */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--deep)] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--deep)] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
            {doubled.map((name, i) => (
              <span
                key={i}
                className="font-display font-bold text-lg md:text-xl text-[var(--parchment)] opacity-20 hover:opacity-100 transition-opacity duration-500 cursor-default uppercase tracking-tight"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}} />
    </section>
  );
}
