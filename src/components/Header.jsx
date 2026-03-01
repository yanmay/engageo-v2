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
      <div className="fixed top-0 left-0 right-0 z-[51] flex flex-col pointer-events-none">
        <div style={{ height: 3, background: '#3D5AFE' }} />
        <div style={{ height: 3, background: '#E8552A' }} />
        <div style={{ height: 3, background: '#C97B2A' }} />
        <div style={{ height: 3, background: '#1E1A16' }} />
      </div>

      <header
        className={`fixed top-3 left-0 right-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? 'bg-[#FBF9F6]/90 backdrop-blur-xl shadow-[0_1px_0_rgba(15,13,11,0.06),0_4px_16px_-4px_rgba(15,13,11,0.07)]'
            : 'bg-transparent'
        }`}
      >
        {/* ── Single unified row ── */}
        <div className="flex items-center gap-4 px-5 md:px-10 h-14">

          {/* Brand — always visible */}
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center gap-1.5 shrink-0">
            <span className="font-sans text-base font-bold tracking-tighter text-obsidian">Engageo</span>
            <span className="w-1.5 h-1.5 rounded-sm bg-brand rotate-45 inline-block" />
          </a>

          {/* Section chips — centered, scrollable, hidden on mobile */}
          <div
            ref={chipsRef}
            className="hidden md:flex flex-1 items-center justify-center gap-0.5 overflow-x-auto"
            style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {SECTIONS.map((s) => {
              const active = activeId === s.id;
              return (
                <button
                  key={s.id}
                  ref={active ? activeRef : null}
                  onClick={() => jumpTo(s.id)}
                  className="shrink-0 px-3 py-1.5 text-[12.5px] whitespace-nowrap transition-all duration-200 relative"
                  style={{
                    color:      active ? '#0F0D0B' : '#A09890',
                    fontWeight: active ? 700       : 500,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {s.label}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-brand rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* CTA — desktop only */}
          <button
            onClick={openModal}
            className="hidden md:flex shrink-0 items-center gap-1.5 bg-brand text-white text-[11px] font-bold px-4 py-2 border-2 border-obsidian retro-shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150 active:scale-[0.97] rounded-none"
          >
            <span>Free Audit →</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden ml-auto shrink-0 w-11 h-11 flex items-center justify-center rounded-lg bg-canvas border border-border text-obsidian hover:border-brand/30 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

        {/* ── Scroll progress bar — flush at bottom of header ── */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-border/30">
          <div
            className="h-full bg-gradient-to-r from-brand to-brand/50 transition-none"
            style={{ width: `${scrollPct * 100}%` }}
          />
        </div>
      </header>

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
