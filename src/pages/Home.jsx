import React from 'react';
import Hero from '../components/Hero';
import LogoBar from '../components/LogoBar';
import HowItWorks from '../components/HowItWorks';
import Calculator from '../components/Calculator';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import WhoItsFor from '../components/WhoItsFor';
import PricingPreview from '../components/PricingPreview';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main id="main-content" className="w-full flex flex-col font-sans">
      <Hero />
      <LogoBar />
      <HowItWorks />
      <Calculator />
      <Features />
      <Testimonials />
      <WhoItsFor />
      <PricingPreview />
      <Footer />
    </main>
  );
}
