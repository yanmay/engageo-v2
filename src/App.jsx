import React, { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import { ModalProvider } from './context/ModalContext';
import AuditModal from './components/AuditModal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import CinematicNavbar from './components/CinematicNavbar';
import CinematicFooter from './components/CinematicFooter';

import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import PricingPage from './pages/PricingPage';
import Compare from './pages/Compare';
import FAQPage from './pages/FAQPage';
import Audit from './pages/Audit';
import NotFound from './pages/NotFound';
import CookieConsent from './components/CookieConsent';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function Layout({ children }) {
  const location = useLocation();
  const isAudit = location.pathname === '/audit';

  return (
    <>
      <CinematicNavbar />

      <main className="flex flex-col w-full relative flex-1">
        {children}
      </main>

      {!isAudit && <CinematicFooter />}
    </>
  );
}

function App() {
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      window.lenis = null;
      return;
    }

    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Heavy ease-out
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1.2,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      wheelMultiplier: 0.8, // cinematic friction
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    window.lenis = lenis;

    window._lenisCleanup = () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
      window.lenis = null;
    };

    return () => {
      if (window._lenisCleanup) {
        window._lenisCleanup();
        window._lenisCleanup = null;
      }
    };
  }, []);

  return (
    <ModalProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="w-full relative bg-[var(--clinic-white)] overflow-x-hidden min-h-screen flex flex-col">
          {/* Grain texture overlay — replaces dot grid */}
          <div className="grain-texture" />

          {/* Modal */}
          <AuditModal />

          {/* Cookie Consent */}
          <CookieConsent />

          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/audit" element={<Audit />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </div>
      </BrowserRouter>
    </ModalProvider>
  );
}

export default App;
