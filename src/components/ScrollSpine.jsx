import React, { useEffect, useState, useCallback } from 'react';

const SECTIONS = [
  { id: 'home',         label: 'Hero' },
  { id: 'who',          label: "Who It's For" },
  { id: 'lifecycle',    label: 'How It Works' },
  { id: 'features',     label: 'Platform' },
  { id: 'workflow',     label: 'Workflow' },
  { id: 'calculator',   label: 'ROI Calculator' },
  { id: 'proof',        label: 'Proof' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'pricing',      label: 'Pricing' },
  { id: 'faq',          label: 'FAQ' },
];

export default function ScrollSpine() {
  const [scrollPct, setScrollPct] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredDot, setHoveredDot] = useState(null);
  const [visible, setVisible] = useState(false);

  const calcProgress = useCallback(() => {
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docH > 0 ? Math.min(window.scrollY / docH, 1) : 0;
    setScrollPct(pct);
    setVisible(window.scrollY > 200);

    // Find active section
    let current = SECTIONS[0].id;
    for (const section of SECTIONS) {
      const el = document.getElementById(section.id);
      if (el) {
        const top = el.getBoundingClientRect().top;
        if (top <= window.innerHeight * 0.45) current = section.id;
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', calcProgress, { passive: true });
    calcProgress();
    return () => window.removeEventListener('scroll', calcProgress);
  }, [calcProgress]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className="fixed left-5 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-0 transition-all duration-500"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {/* Spine track */}
      <div className="relative flex flex-col items-center gap-0" style={{ height: `${SECTIONS.length * 28}px` }}>

        {/* Background line */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border"
        />

        {/* Progress fill */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-px bg-brand origin-top transition-all duration-150 ease-out"
          style={{ height: `${scrollPct * 100}%` }}
        />

        {/* Section dots */}
        {SECTIONS.map((s, i) => {
          const isActive = activeSection === s.id;
          const isPast = SECTIONS.findIndex(x => x.id === activeSection) > i;
          return (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              onMouseEnter={() => setHoveredDot(s.id)}
              onMouseLeave={() => setHoveredDot(null)}
              className="relative flex items-center justify-center w-5 cursor-pointer group"
              style={{ height: '28px' }}
              aria-label={`Scroll to ${s.label}`}
            >
              {/* Dot */}
              <div
                className="rounded-full transition-all duration-300"
                style={{
                  width: isActive ? '8px' : '5px',
                  height: isActive ? '8px' : '5px',
                  background: isActive ? '#3D5AFE' : isPast ? '#3D5AFE' : '#CBD5E1',
                  boxShadow: isActive ? '0 0 0 3px rgba(61,90,254,0.2)' : 'none',
                }}
              />

              {/* Label tooltip */}
              <div
                className="absolute left-6 whitespace-nowrap pointer-events-none transition-all duration-200"
                style={{
                  opacity: hoveredDot === s.id ? 1 : 0,
                  transform: hoveredDot === s.id ? 'translateX(0)' : 'translateX(-4px)',
                }}
              >
                <span className="glass-card px-2.5 py-1 rounded-lg font-sans text-[10px] font-semibold text-obsidian shadow-card">
                  {s.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
