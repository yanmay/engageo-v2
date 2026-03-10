import React, { useEffect, useRef, useState } from 'react';

const SECTIONS = [
  { id: 'home',        label: 'Hero'         },
  { id: 'who',         label: "Who It's For"  },
  { id: 'lifecycle',   label: 'How It Works'  },
  { id: 'features',    label: 'Features'      },
  { id: 'workflow',    label: 'Workflow'       },
  { id: 'calculator',  label: 'Calculator'    },
  { id: 'proof',       label: 'Proof'         },
  { id: 'testimonials',label: 'Testimonials'  },
  { id: 'pricing',     label: 'Pricing'       },
  { id: 'faq',         label: 'FAQ'           },
];

export default function SectionNav() {
  const [activeId, setActiveId]   = useState('');
  const [visible,  setVisible]    = useState(false);
  const scrollRef                  = useRef(null);
  const activeRef                  = useRef(null);

  useEffect(() => {
    // Cache elements to prevent DOM querying on every scroll tick
    const sectionElements = SECTIONS.map(s => ({
      id: s.id,
      el: document.getElementById(s.id)
    }));

    let ticking = false;

    const update = () => {
      const scrollY = window.scrollY;
      const innerH = window.innerHeight;
      
      // Show strip only after hero
      setVisible(scrollY > innerH * 0.6);

      // Determine active section using cached elements
      const mid = scrollY + innerH * 0.35;
      let current = SECTIONS[0].id;
      
      for (let i = 0; i < sectionElements.length; i++) {
        const item = sectionElements[i];
        if (item.el && item.el.offsetTop <= mid) {
          current = item.id;
        }
      }
      setActiveId(current);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    update();
    
    // Re-cache elements on resize in case offsets change
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Auto-scroll the active chip into view within the strip
  useEffect(() => {
    if (activeRef.current && scrollRef.current) {
      const container = scrollRef.current;
      const chip = activeRef.current;
      const chipLeft = chip.offsetLeft;
      const chipW    = chip.offsetWidth;
      const contW    = container.offsetWidth;
      const target   = chipLeft - contW / 2 + chipW / 2;
      container.scrollTo({ left: target, behavior: 'smooth' });
    }
  }, [activeId]);

  const jumpTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      if (window.lenis) window.lenis.scrollTo(el);
      else el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className="fixed z-40 left-0 right-0 transition-all duration-500"
      style={{
        top: '64px', // sits flush under header
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(-6px)',
      }}
    >
      {/* Frosted strip */}
      <div className="bg-white/70 backdrop-blur-lg border-b border-border/50 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.07)]">
        {/* Section chips — horizontally scrollable */}
        <div
          ref={scrollRef}
          className="flex items-center gap-1 px-4 md:px-8 overflow-x-auto scrollbar-none py-2"
          style={{ scrollbarWidth: 'none' }}
        >
          {SECTIONS.map((s) => {
            const isActive = activeId === s.id;
            return (
              <button
                key={s.id}
                ref={isActive ? activeRef : null}
                onClick={() => jumpTo(s.id)}
                className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium transition-all duration-250 whitespace-nowrap"
                style={{
                  backgroundColor: isActive ? 'var(--recovery-blue)' : 'transparent',
                  color: isActive ? '#FFFFFF' : 'var(--clinic-slate)',
                  fontWeight: isActive ? 600 : 500,
                }}
              >
                {/* Active pulse dot */}
                {isActive && (
                  <span className="w-1 h-1 rounded-full bg-white/70 inline-block" />
                )}
                {s.label}
              </button>
            );
          })}

          {/* Trailing scroll-progress bar underneath chips */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent pointer-events-none">
            <ScrollFill />
          </div>
        </div>
      </div>
    </div>
  );
}

function ScrollFill() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    let ticking = false;
    let cachedDocH = document.documentElement.scrollHeight - window.innerHeight;

    const update = () => {
      setPct(cachedDocH > 0 ? window.scrollY / cachedDocH : 0);
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
  return (
    <div
      className="h-full bg-gradient-to-r from-brand to-brand/60 transition-none"
      style={{ width: `${pct * 100}%` }}
    />
  );
}
