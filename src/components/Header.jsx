import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'How It Works', path: '/how-it-works' },
  { label: "Who It's For", path: '/#who-its-for', hash: 'who-its-for' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Results', path: '/#testimonials', hash: 'testimonials' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isAudit = location.pathname === '/audit';
  const isInner = !isHome && !isAudit;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  // Handle cross-page hash navigation back to homepage sections
  useEffect(() => {
    if (isHome && location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          const OFFSET = 80;
          const top = el.getBoundingClientRect().top + window.scrollY - OFFSET;
          if (window.lenis) {
            window.lenis.scrollTo(el, { offset: -OFFSET });
          } else {
            window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
          }
        }
      }, 100);
    }
  }, [isHome, location.hash]);

  const handleNavClick = (e, path, hash) => {
    setMobileOpen(false);
    if (hash && location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) {
        const OFFSET = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - OFFSET;
        if (window.lenis) {
          window.lenis.scrollTo(el, { offset: -OFFSET });
        } else {
          window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <style>{`
        @keyframes headerCtaPulse {
          0% { box-shadow: 0 0 0 0 rgba(26,122,74,0.3); animation-timing-function: ease-out; }
          7.5% { box-shadow: 0 0 0 16px rgba(26,122,74,0); }
          100% { box-shadow: 0 0 0 0 rgba(26,122,74,0); }
        }
        .header-cta-pulse {
          animation: headerCtaPulse 8s infinite;
        }
      `}</style>

      <header
        className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 lg:px-20 transition-all duration-200"
        style={{
          backgroundColor: scrolled ? 'var(--clinic-white)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--clinic-silver)' : '1px solid transparent',
          height: scrolled ? '56px' : '72px'
        }}
      >
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-sans font-bold text-xl tracking-tight" style={{ color: 'var(--command-black)' }}>
            Engageo
          </span>
        </Link>

        {/* Center: Desktop Links (Home ONLY) */}
        {isHome && (
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <Link
                key={link.label}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path, link.hash)}
                className="font-medium transition-opacity hover:opacity-70"
                style={{ color: 'var(--clinic-ink)', fontSize: '14px' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        {/* Right side area */}
        {!isAudit && (
          <div className="flex items-center gap-6">
            {/* Back to Home Link for inner pages */}
            {isInner && (
              <Link
                to="/"
                className="font-sans transition-colors hidden md:block"
                style={{ color: 'var(--clinic-stone)', fontSize: '13px', textDecoration: 'none' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--clinic-ink)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--clinic-stone)'}
              >
                ← Back to Home
              </Link>
            )}

            {/* CTA Button */}
            <Link
              to="/audit"
              className="hidden md:flex items-center justify-center font-bold tracking-wide transition-all hover:scale-[1.02] header-cta-pulse"
              style={{
                backgroundColor: 'var(--green)',
                color: 'var(--parchment)',
                borderRadius: '9999px',
                padding: '10px 24px',
                fontSize: '14px'
              }}
            >
              {isInner ? "Free Audit →" : "Book Free Audit →"}
            </Link>

            {/* Mobile Hamburger (Home ONLY) */}
            {isHome && (
              <button
                className="md:hidden flex items-center justify-center min-w-[44px] min-h-[44px]"
                onClick={() => setMobileOpen(true)}
                style={{ color: 'var(--command-black)' }}
                aria-label="Open navigation menu"
              >
                <Menu />
              </button>
            )}

            {/* Mobile Inner CTA Fallback */}
            {isInner && (
              <Link
                to="/audit"
                className="md:hidden flex items-center justify-center font-bold tracking-wide text-sm"
                style={{
                  color: 'var(--green)',
                }}
              >
                Free Audit →
              </Link>
            )}
          </div>
        )}
      </header>

      {/* Mobile Drawer Overlay (Home ONLY) */}
      {isHome && mobileOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col pt-6 px-6 md:hidden overflow-hidden"
          style={{ backgroundColor: 'var(--clinic-white)' }}
        >
          <div className="flex items-center justify-between w-full mb-12" style={{ height: '44px' }}>
            <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
              <span className="font-sans font-bold text-xl tracking-tight" style={{ color: 'var(--command-black)' }}>
                Engageo
              </span>
            </Link>
            <button
              className="flex items-center justify-end min-w-[44px] min-h-[44px]"
              onClick={() => setMobileOpen(false)}
              style={{ color: 'var(--command-black)' }}
              aria-label="Close navigation menu"
            >
              <X />
            </button>
          </div>

          <nav className="flex flex-col gap-6 flex-1">
            {NAV_LINKS.map(link => (
              <Link
                key={link.label}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path, link.hash)}
                className="font-medium transition-opacity hover:opacity-70"
                style={{ fontSize: '18px', color: 'var(--clinic-ink)' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pb-10 pt-6 mt-auto">
            <Link
              to="/audit"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-full font-bold transition-transform active:scale-[0.98]"
              style={{
                backgroundColor: 'var(--green)',
                color: 'var(--parchment)',
                borderRadius: '9999px',
                padding: '16px 20px',
                fontSize: '16px'
              }}
            >
              Book Free Audit →
            </Link>
            <p
              className="w-full text-center mt-4 font-sans font-medium"
              style={{ color: 'var(--clinic-stone)', fontSize: '12px' }}
            >
              We respond within 24 hours on WhatsApp
            </p>
          </div>
        </div>
      )}
    </>
  );
}
