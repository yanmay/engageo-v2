import React, { useEffect, useState } from 'react';

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

  useEffect(() => {
    const sectionElements = SECTIONS.map(s => ({
      id: s.id,
      el: document.getElementById(s.id)
    }));

    let ticking = false;
    let cachedDocH = document.documentElement.scrollHeight - window.innerHeight;
    let cachedWinH = window.innerHeight;

    const update = () => {
      const scrollY = window.scrollY;
      const pct = cachedDocH > 0 ? Math.min(scrollY / cachedDocH, 1) : 0;
      setScrollPct(pct);
      setVisible(scrollY > 200);

      // Determine active section without getBoundingClientRect thrashing
      const mid = scrollY + cachedWinH * 0.45;
      let current = SECTIONS[0].id;
      
      for (let i = 0; i < sectionElements.length; i++) {
        const item = sectionElements[i];
        if (item.el && item.el.offsetTop <= mid) {
          current = item.id;
        }
      }
      
      setActiveSection(current);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    const handleResize = () => {
      cachedDocH = document.documentElement.scrollHeight - window.innerHeight;
      cachedWinH = window.innerHeight;
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    update();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      if (window.lenis) window.lenis.scrollTo(el);
      else el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
                  background: isActive ? 'var(--recovery-blue)' : isPast ? 'var(--recovery-blue)' : 'var(--clinic-stone)',
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
