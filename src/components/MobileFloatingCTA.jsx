import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function MobileFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const sentinelRef = useRef(null);

  const isAudit = location.pathname === '/audit';

  useEffect(() => {
    // Only run intersection observer if window exists
    if (!sentinelRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the sentinel (at top: 100vh) is above the bottom of the viewport,
        // it means we've scrolled past 100vh.
        // entry.boundingClientRect.top < window.innerHeight
        if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        // 0 means it triggers as soon as even 1px is visible/hidden
        threshold: 0,
        // No root margin
        rootMargin: '0px'
      }
    );

    // More precise approach: Just use a scroll listener since we might jump around with anchors
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  // Handle padding-bottom on body
  useEffect(() => {
    // Only apply below 768px and when visible
    const isMobile = window.innerWidth < 768;
    if (isVisible && isMobile) {
      document.body.style.paddingBottom = '60px';
    } else {
      document.body.style.paddingBottom = '0px';
    }

    // Cleanup
    return () => {
      document.body.style.paddingBottom = '0px';
    };
  }, [isVisible]);

  if (isAudit) return null;

  return (
    <>
      {/* Sentinel element placed exactly at 100vh from top of document 
          (Left here in case we want to revert from scroll listener back to IO) */}
      <div
        ref={sentinelRef}
        className="absolute left-0 w-full h-px pointer-events-none"
        style={{ top: '100vh' }}
      />

      <Link
        to="/audit"
        className={`md:hidden fixed bottom-0 left-0 w-[100vw] h-[60px] flex flex-col items-center justify-center gap-[2px] z-[1000] transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
        style={{
          backgroundColor: 'var(--green)',
        }}
      >
        <div
          className="font-sans font-bold leading-none"
          style={{ color: 'white', fontSize: '16px' }}
        >
          Claim Free Audit →
        </div>
        <div
          className="font-sans font-medium leading-none"
          style={{ color: 'white', opacity: 0.75, fontSize: '11px' }}
        >
          No commitment · 24hr response
        </div>
      </Link>
    </>
  );
}
