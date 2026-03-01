import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const SECTIONS = [
  { id: 'home',         label: 'Hero'          },
  { id: 'who',          label: "Who It's For"   },
  { id: 'lifecycle',    label: 'How It Works'   },
  { id: 'features',     label: 'Features'       },
  { id: 'workflow',     label: 'Workflow'        },
  { id: 'calculator',   label: 'Calculator'     },
  { id: 'proof',        label: 'Proof'          },
  { id: 'testimonials', label: 'Testimonials'   },
  { id: 'pricing',      label: 'Pricing'        },
  { id: 'faq',          label: 'FAQ'            },
];

function jumpTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const OFFSET = 80; // fixed header (56px) + stripe (12px) + breathing room
  const top = el.getBoundingClientRect().top + window.scrollY - OFFSET;
  if (window.lenis) {
    window.lenis.scrollTo(el, { offset: -OFFSET });
  } else {
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }
}

export default function Header() {
  const [scrolled,    setScrolled]   = useState(false);
  const [mobileOpen,  setMobileOpen] = useState(false);
  const [activeId,    setActiveId]   = useState('home');
  const [scrollPct,   setScrollPct]  = useState(0);
  const chipsRef  = useRef(null);
  const activeRef = useRef(null);
  const { openModal } = useModal();

  /* ── Track scroll: progress + active section ── */
  useEffect(() => {
    const sectionElements = SECTIONS.map(s => ({
      id: s.id,
      el: document.getElementById(s.id)
    }));

    let ticking = false;
    let cachedDocH = document.documentElement.scrollHeight - window.innerHeight;

    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setScrollPct(cachedDocH > 0 ? y / cachedDocH : 0);

      const mid = y + window.innerHeight * 0.35;
      let cur = SECTIONS[0].id;
      
      for (let i = 0; i < sectionElements.length; i++) {
        const item = sectionElements[i];
        if (item.el && item.el.offsetTop <= mid) {
          cur = item.id;
        }
      }
      setActiveId(cur);
      ticking = false;
    };

    const handle = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    const handleResize = () => {
      cachedDocH = document.documentElement.scrollHeight - window.innerHeight;
      handle();
    };

    window.addEventListener('scroll', handle, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    update();
    
    return () => {
      window.removeEventListener('scroll', handle);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  /* ── Auto-scroll active chip into view ── */
  useEffect(() => {
    if (activeRef.current && chipsRef.current) {
      const c = chipsRef.current;
      const chip = activeRef.current;
      c.scrollTo({ left: chip.offsetLeft - c.offsetWidth / 2 + chip.offsetWidth / 2, behavior: 'smooth' });
    }
  }, [activeId]);

  /* ── Mobile helpers ── */
  useEffect(() => {
    const close = () => window.innerWidth >= 768 && setMobileOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e, id) => { e.preventDefault(); jumpTo(id); setMobileOpen(false); };

  return (
    <>
      {/* ── Decorative top stripe (Importism-style) ── */}
      <div className="fixed top-0 left-0 right-0 z-[52] flex flex-col pointer-events-none">
        <div style={{ height: 3, background: '#3D5AFE' }} />
        <div style={{ height: 3, background: '#E8552A' }} />
        <div style={{ height: 3, background: '#C97B2A' }} />
        <div style={{ height: 3, background: '#1E1A16' }} />
      </div>

      {/* ── Scroll progress bar at top window edge ── */}
      <div className="fixed top-[12px] left-0 right-0 h-[2px] bg-border/40 z-[51] pointer-events-none">
        <div
          className="h-full bg-brand transition-none"
          style={{ width: `${scrollPct * 100}%` }}
        />
      </div>

      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none px-4 md:px-8">
        <header
          className={`pointer-events-auto flex items-center justify-between w-full transition-all duration-[400ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
            scrolled
              ? 'max-w-[1200px] bg-[#FBF9F6]/95 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(15,13,11,0.12)] border border-obsidian/10 rounded-full mt-6 h-[56px] px-4'
              : 'max-w-[1280px] bg-transparent mt-5 h-16 md:px-2'
          }`}
        >
          {/* Brand — left */}
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center gap-1.5 shrink-0 pl-2">
            <span className="font-sans text-[17px] font-bold tracking-tighter text-obsidian">Engageo</span>
            <span className="w-1.5 h-1.5 rounded-sm bg-brand rotate-45 inline-block" />
          </a>

          {/* Section chips — center */}
          <div
            ref={chipsRef}
            className="hidden md:flex flex-1 mx-4 items-center justify-center overflow-x-auto"
            style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {SECTIONS.map((s) => {
              const active = activeId === s.id;
              return (
                <button
                  key={s.id}
                  ref={active ? activeRef : null}
                  onClick={() => jumpTo(s.id)}
                  className="shrink-0 px-3.5 py-1.5 text-[13px] whitespace-nowrap transition-all duration-200 relative"
                  style={{
                    color:      active ? '#0F0D0B' : '#736B63',
                    fontWeight: active ? 600       : 500,
                  }}
                >
                  {s.label}
                  {active && (
                    <span className="absolute bottom-1.5 left-3.5 right-3.5 h-[2px] bg-brand rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* CTA — right */}
          <button
            onClick={openModal}
            className="hidden md:flex shrink-0 items-center justify-center gap-1.5 bg-obsidian text-white text-[12px] font-bold hover:bg-[#201D19] active:scale-[0.98] transition-transform duration-200 rounded-full h-[40px] px-5"
          >
            <span>Free Audit</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden ml-auto shrink-0 w-[42px] h-[42px] flex items-center justify-center rounded-full bg-white border border-border text-obsidian hover:border-brand/40 transition-colors shadow-sm"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </header>
      </div>

      {/* ── Mobile Nav Overlay ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-obsidian/40 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 bottom-0 z-40 w-72 bg-white shadow-2xl flex flex-col p-8 gap-6 transition-transform duration-300 md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="font-sans text-xl font-bold tracking-tighter text-obsidian">Engageo</span>
          <button onClick={() => setMobileOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-xl bg-canvas border border-border">
            <X size={14} className="text-subtle" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 mt-2">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={(e) => { handleNavClick(e, s.id); }}
              className={`text-left font-sans text-sm font-medium py-3 px-4 rounded-xl transition-colors ${
                activeId === s.id ? 'bg-brand/10 text-brand' : 'text-obsidian hover:bg-canvas'
              }`}
            >
              {s.label}
            </button>
          ))}
        </nav>
        <div className="mt-auto">
          <button
            onClick={() => { setMobileOpen(false); openModal(); }}
            className="w-full py-4 rounded-xl bg-brand text-white text-sm font-bold glow-brand-sm hover:scale-[1.02] transition-transform"
          >
            Claim Your Free Audit →
          </button>
          <p className="text-[10px] text-center text-muted mt-2">No commitment · Results in 24 hrs</p>
        </div>
      </div>
    </>
  );
}
