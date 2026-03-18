import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { List, X } from '@phosphor-icons/react';

const navLinks = [
  { to: '/features', label: 'Features' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/compare', label: 'Compare' },
  { to: '/faq', label: 'FAQ' },
];

// Magnetic CTA — useMotionValue OUTSIDE render cycle, never useState for animation
function MagneticCTA({ to, children }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const translateX = useTransform(x, [-50, 50], [-6, 6]);
  const translateY = useTransform(y, [-25, 25], [-3, 3]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ translateX, translateY }}
    >
      <Link to={to} className="btn-primary py-2.5 px-6 text-sm">
        {children}
      </Link>
    </motion.div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <>
      <a href="#main-content" className="skip-to-content" tabIndex={1}>
        Skip to content
      </a>

      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-command-black/90 backdrop-blur-2xl border-b border-white/[.07] shadow-diffusion-dark'
            : 'bg-transparent border-b border-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-[1400px] mx-auto px-6 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-white font-sans font-semibold tracking-tight text-xl transition-opacity duration-200 hover:opacity-75"
            aria-label="Engageo home"
          >
            Engageo
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2 font-sans text-sm font-medium rounded-pill transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/[.08]'
                      : 'text-slate-400 hover:text-white hover:bg-white/[.05]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-recovery-blue"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-2 font-sans text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 rounded-pill hover:bg-white/[.05]"
            >
              Log in
            </Link>
            <MagneticCTA to="/audit">Get Free Audit &rarr;</MagneticCTA>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((p) => !p)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors rounded-lg"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[68px] left-0 right-0 z-40 bg-command-black/95 backdrop-blur-2xl border-b border-white/[.07] md:hidden"
          >
            <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.to}
                    className={`block px-4 py-3 font-sans text-base font-medium rounded-xl transition-colors duration-200 ${
                      location.pathname === link.to
                        ? 'text-white bg-white/[.08]'
                        : 'text-slate-400 hover:text-white hover:bg-white/[.05]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 border-t border-white/[.07] mt-2">
                <Link to="/audit" className="btn-primary w-full justify-center py-3.5 text-base">
                  Get Free Audit &rarr;
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
