import React from 'react';
import CinematicHero from '../components/CinematicHero';
import CinematicFeatures from '../components/CinematicFeatures';
import Philosophy from '../components/Philosophy';
import ProtocolStack from '../components/ProtocolStack';
import CinematicPricing from '../components/CinematicPricing';

export default function Home() {
  return (
    <div className="flex flex-col w-full relative bg-[var(--cream)]">
      <div id="hero">
        <CinematicHero />
      </div>

      <div id="features">
        <CinematicFeatures />
      </div>

      <div id="philosophy">
        <Philosophy />
      </div>

      <div id="protocol">
        <ProtocolStack />
      </div>

      <div id="pricing">
        <CinematicPricing />
      </div>
    </div>
  );
}
