import React, { useEffect, useState } from 'react';
import { useModal } from '../context/ModalContext';

export default function FloatingCTA() {
  const { openModal } = useModal();
  const [visible, setVisible] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);

  useEffect(() => {
    let ticking = false;
    let cachedDocH = document.documentElement.scrollHeight;
    let cachedWinH = window.innerHeight;

    const update = () => {
      const scrollY = window.scrollY;
      setVisible(scrollY > 600);
      setNearFooter(scrollY + cachedWinH > cachedDocH - 400);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    const handleResize = () => {
      cachedDocH = document.documentElement.scrollHeight;
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

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const show = visible && !nearFooter;

  return (
    <>
      {/* ── DESKTOP floating pill — bottom-right ── */}
      <div
        className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-2 pointer-events-none"
        aria-hidden={!show}
      >
        {/* Main CTA pill */}
        <div
          className="pointer-events-auto flex items-center gap-0 overflow-hidden rounded-2xl shadow-brand-lg transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{
            opacity: show ? 1 : 0,
            transform: show ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.92)',
          }}
        >
          {/* Audit button */}
          <button
            onClick={openModal}
            className="group relative isolate overflow-hidden bg-brand text-white text-xs font-bold px-5 py-3.5 transition-all duration-300 hover:bg-[#2d4ae8] active:scale-[0.97] flex items-center gap-2"
          >
            <div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 pointer-events-none" />
            <span className="relative z-20 whitespace-nowrap">Claim Free Audit</span>
            <svg className="relative z-20 w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Divider */}
          <div className="w-px h-9 bg-white/20" />

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="bg-brand text-white p-3.5 transition-all duration-300 hover:bg-[#2d4ae8] active:scale-[0.97]"
            aria-label="Scroll to top"
          >
            <svg className="w-3.5 h-3.5 transition-transform duration-300 hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Subtle label */}
        <span
          className="pointer-events-none font-mono text-[9px] text-subtle uppercase tracking-widest transition-all duration-500"
          style={{ opacity: show ? 0.7 : 0 }}
        >
          No commitment · 24hr results
        </span>
      </div>

      {/* ── MOBILE floating bar — full-width bottom strip ── */}
      {/* Only shows on mobile (md:hidden), appears after scrolling past hero */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{
          opacity: show ? 1 : 0,
          transform: show ? 'translateY(0)' : 'translateY(100%)',
          pointerEvents: show ? 'auto' : 'none',
        }}
      >
        <button
          onClick={openModal}
          className="w-full bg-brand text-white text-sm font-bold py-4 flex items-center justify-center gap-2 active:bg-[#2d4ae8] active:scale-[0.99] transition-all duration-150"
          style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
        >
          <span>Book Free Audit →</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </>
  );
}
