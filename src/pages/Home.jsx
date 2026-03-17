import React from 'react';
import CinematicHero from '../components/CinematicHero';
import CinematicFeatures from '../components/CinematicFeatures';
import Philosophy from '../components/Philosophy';
import CinematicProtocol from '../components/CinematicProtocol';
import ThreeCardSection from '../components/ThreeCardSection';
import CinematicGuarantee from '../components/CinematicGuarantee';
import CinematicLogos from '../components/CinematicLogos';
import CinematicTestimonials from '../components/CinematicTestimonials';
import CinematicFAQ from '../components/CinematicFAQ';
import ROICalculator from '../components/ROICalculator';

export default function Home() {
  return (
    <div className="flex flex-col w-full relative">
      <div id="hero">
        <CinematicHero />
      </div>

      <div id="logos">
        <CinematicLogos />
      </div>

      <div id="philosophy">
        <Philosophy />
      </div>

      <div id="features">
        <CinematicFeatures />
      </div>

      <div id="protocol">
        <CinematicProtocol />
      </div>

      <div id="roi-calculator">
        <ROICalculator />
      </div>

      <div id="three-cards-restored" className="relative z-10 bg-[var(--clinic-white)]">
        <ThreeCardSection />
      </div>

      <div id="guarantee">
        <CinematicGuarantee />
      </div>

      <div id="proof">
        <CinematicTestimonials />
      </div>

      <div id="faq">
        <CinematicFAQ />
      </div>
    </div>
  );
}

