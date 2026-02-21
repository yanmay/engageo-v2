import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const navLinks = [
  { label: 'How It Works', href: '#workflow' },
  { label: "Who It's For", href: '#who' },
  { label: 'Proof', href: '#proof' },
];

function scrollTo(id) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav on resize to desktop
  useEffect(() => {
    const close = () => window.innerWidth >= 768 && setMobileOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  // Trap scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    scrollTo(href);
    setMobileOpen(false);
  };

  const handleWatchClick = (e) => {
    e.preventDefault();
    scrollTo('#lifecycle');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full px-6 py-4 md:px-12 flex justify-between items-center transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06),0_4px_16px_-4px_rgba(0,0,0,0.08)]'
            : 'bg-transparent'
        }`}
      >
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2"
        >
          <span className="font-sans text-xl font-bold tracking-tighter text-obsidian">
            Engageo
          </span>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-brand pulse-dot" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="link-underline font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="#lifecycle"
            onClick={handleWatchClick}
            className="link-underline font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors"
          >
            Watch a Live Recovery
          </a>

          <button
            onClick={openModal}
            className="group relative isolate overflow-hidden bg-brand text-white text-xs font-semibold px-5 py-2.5 rounded-lg glow-brand-sm ring-1 ring-brand/30 transition-all duration-400 hover:scale-[1.05] hover:glow-brand active:scale-[0.97] focus:outline-none"
          >
            <div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 pointer-events-none" />
            <span className="relative z-20">Claim Your Free Audit →</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-canvas border border-border text-obsidian hover:border-brand/30 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </header>

      {/* Mobile Nav Overlay */}
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
        {/* Mobile brand */}
        <div className="flex items-center justify-between">
          <span className="font-sans text-xl font-bold tracking-tighter text-obsidian">Engageo</span>
          <button onClick={() => setMobileOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-xl bg-canvas border border-border">
            <X size={14} className="text-subtle" />
          </button>
        </div>

        {/* Mobile links */}
        <nav className="flex flex-col gap-1 mt-2">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="font-sans text-sm font-medium text-obsidian py-3 px-4 rounded-xl hover:bg-canvas transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#lifecycle"
            onClick={handleWatchClick}
            className="font-sans text-sm font-medium text-subtle py-3 px-4 rounded-xl hover:bg-canvas transition-colors"
          >
            Watch a Live Recovery
          </a>
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
