import React from 'react';
import { ModalProvider } from './context/ModalContext';
import AuditModal from './components/AuditModal';
import Header from './components/Header';
import Hero from './components/Hero';
import Logos from './components/Logos';
import DecisionLifecycle from './components/DecisionLifecycle';
import Features from './components/Features';
import WorkflowSlider from './components/WorkflowSlider';
import ComparisonTable from './components/ComparisonTable';
import ROICalculator from './components/ROICalculator';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import DefensibleDecision from './components/DefensibleDecision';
import Footer from './components/Footer';

function App() {
  return (
    <ModalProvider>
      <div className="w-full relative bg-canvas">
        {/* Fixed Backgrounds */}
        <div className="fixed inset-0 z-0 technical-grid pointer-events-none" />

        {/* Modal — lives outside content flow */}
        <AuditModal />

        <Header />

        {/* Content Wrapper */}
        <div className="z-10 flex flex-col w-full relative">
          <div id="home"><Hero /></div>
          <Logos />
          <div id="lifecycle"><DecisionLifecycle /></div>
          <div id="features"><Features /></div>
          <div id="workflow"><WorkflowSlider /></div>
          <div id="proof"><ComparisonTable /></div>
          <div id="calculator"><ROICalculator /></div>
          <div id="testimonials"><Testimonials /></div>
          <div id="pricing"><Pricing /></div>
          <div id="faq"><FAQ /></div>
          <DefensibleDecision />
          <Footer />
        </div>
      </div>
    </ModalProvider>
  );
}

export default App;
