import React, { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import { ModalProvider } from './context/ModalContext';
import AuditModal from './components/AuditModal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });
import Header from './components/Header';
import Hero from './components/Hero';
import Logos from './components/Logos';
import WhoItsFor from './components/WhoItsFor';
import DecisionLifecycle from './components/DecisionLifecycle';
import Features from './components/Features';
import WorkflowSlider from './components/WorkflowSlider';
import ROICalculator from './components/ROICalculator';
import TheSecondLayer from './components/TheSecondLayer';
import ComparisonTable from './components/ComparisonTable';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import DefensibleDecision from './components/DefensibleDecision';
import Footer from './components/Footer';

import FloatingCTA from './components/FloatingCTA';

function App() {
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
      window.lenis = null;
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
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
      <div className="w-full relative bg-canvas overflow-x-hidden">
        {/* Grain texture overlay — replaces dot grid */}
        <div className="grain-texture" />

        {/* Modal */}
        <AuditModal />

        <FloatingCTA />

        <Header />

        {/* Content — Narrative Arc Order */}
        <div className="z-10 flex flex-col w-full relative">
          {/* 1. Hook */}
          <div id="home"><Hero /></div>

          {/* 2. Instant social proof */}
          <Logos />

          {/* 3. "Is this for me?" — audience qualification */}
          <div id="who"><WhoItsFor /></div>

          {/* 4. "How does it work?" — now they care */}
          <div id="lifecycle"><DecisionLifecycle /></div>

          {/* 5. Platform depth */}
          <div id="features" style={{ background: '#EDE9E0' }}><Features /></div>

          {/* 6. Workflow clarity */}
          <div id="workflow"><WorkflowSlider /></div>

          {/* 7. Make it personal — addictive calculator */}
          <div id="calculator" className="bg-surface"><ROICalculator /></div>

          {/* 7.5 WhatsApp Layer */}
          <TheSecondLayer />

          {/* 8. Objection handling */}
          <div id="proof"><ComparisonTable /></div>

          {/* 9. Social proof */}
          <div id="testimonials" className="bg-surface"><Testimonials /></div>

          {/* 10. Commitment */}
          <div id="pricing" style={{ background: '#EDE9E0' }}><Pricing /></div>

          {/* 11. Tail — FAQ + guarantee + footer */}
          <div id="faq" className="bg-surface"><FAQ /></div>
          <DefensibleDecision />
          <Footer />
        </div>
      </div>
    </ModalProvider>
  );
}

export default App;
