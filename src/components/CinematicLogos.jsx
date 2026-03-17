import React from 'react';

const CLINICS = [
  "Apollo Health", "Fortis Escorts", "Medanta", "Max Healthcare", 
  "Cloudnine Clinics", "Skin City", "Clove Dental", "Kaya Clinic"
];

export default function CinematicLogos() {
  const doubled = [...CLINICS, ...CLINICS];

  return (
    <section className="py-12 bg-[var(--command-black)] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-24">
        <div className="flex flex-col items-center gap-10">
          
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--recovery-blue)]/40 shadow-[0_0_8px_rgba(0,113,255,0.2)]" />
            <span className="font-data text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">
              Trusted by Leading Indian Clinics
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--recovery-blue)]/40 shadow-[0_0_8px_rgba(0,113,255,0.2)]" />
          </div>

          <div className="w-full relative">
            {/* Masked edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--command-black)] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--command-black)] to-transparent z-10 pointer-events-none" />

            <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
              {doubled.map((name, i) => (
                <span
                  key={i}
                  className="font-bold text-xl text-white/10 hover:text-[var(--recovery-blue)] transition-all duration-500 cursor-default uppercase tracking-tighter"
                >
                  {name}
                </span>
              ))}
            </div>
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
          animation: marquee 30s linear infinite;
        }
      `}} />
    </section>
  );
}
