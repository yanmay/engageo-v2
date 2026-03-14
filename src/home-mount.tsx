import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CinematicLogos from './components/CinematicLogos';
import CinematicTestimonials from './components/CinematicTestimonials';
import WhoItsFor from './components/WhoItsFor';
import FinalCTASection from './components/FinalCTASection';
import CinematicFooter from './components/CinematicFooter';
import DefensibleDecision from './components/DefensibleDecision';
import Philosophy from './components/Philosophy';
import CinematicFeatures from './components/CinematicFeatures';
import CinematicProtocol from './components/CinematicProtocol';
import CinematicPricing from './components/CinematicPricing';
import DecisionLifecycle from './components/DecisionLifecycle';
import CinematicHero from './components/CinematicHero';
import CinematicNavbar from './components/CinematicNavbar';
import ROICalculator from './components/ROICalculator';
import { ModalProvider } from './context/ModalContext';
import AuditModal from './components/AuditModal';
import './index.css';

const navbarRoot = document.getElementById('react-home-navbar');
if (navbarRoot) {
    createRoot(navbarRoot).render(
        <StrictMode>
            <BrowserRouter>
                <CinematicNavbar />
            </BrowserRouter>
        </StrictMode>
    );
}

const heroRoot = document.getElementById('react-home-hero');
if (heroRoot) {
    createRoot(heroRoot).render(
        <StrictMode>
            <ModalProvider>
                <CinematicHero />
                <AuditModal />
            </ModalProvider>
        </StrictMode>
    );
}

const logosRoot = document.getElementById('react-home-logos');
if (logosRoot) {
    createRoot(logosRoot).render(
        <StrictMode>
            <CinematicLogos />
        </StrictMode>
    );
}

const philosophyRoot = document.getElementById('react-home-philosophy');
if (philosophyRoot) {
    createRoot(philosophyRoot).render(
        <StrictMode>
            <BrowserRouter>
                <Philosophy />
            </BrowserRouter>
        </StrictMode>
    );
}

const featuresRoot = document.getElementById('react-home-features');
if (featuresRoot) {
    createRoot(featuresRoot).render(
        <StrictMode>
            <BrowserRouter>
                <CinematicFeatures />
            </BrowserRouter>
        </StrictMode>
    );
}

const testimonialsRoot = document.getElementById('react-home-testimonials');
if (testimonialsRoot) {
    createRoot(testimonialsRoot).render(
        <StrictMode>
            <CinematicTestimonials />
        </StrictMode>
    );
}

const protocolRoot = document.getElementById('react-home-protocols');
if (protocolRoot) {
    createRoot(protocolRoot).render(
        <StrictMode>
            <BrowserRouter>
                <CinematicProtocol />
            </BrowserRouter>
        </StrictMode>
    );
}

const whoRoot = document.getElementById('react-home-who');
if (whoRoot) {
    createRoot(whoRoot).render(
        <StrictMode>
            <ModalProvider>
                <WhoItsFor />
            </ModalProvider>
        </StrictMode>
    );
}

const lifecycleRoot = document.getElementById('react-home-lifecycle');
if (lifecycleRoot) {
    createRoot(lifecycleRoot).render(
        <StrictMode>
            <DecisionLifecycle />
        </StrictMode>
    );
}

const pricingRoot = document.getElementById('react-home-pricing');
if (pricingRoot) {
    createRoot(pricingRoot).render(
        <StrictMode>
            <BrowserRouter>
                <CinematicPricing hideLink={false} />
            </BrowserRouter>
        </StrictMode>
    );
}


const guaranteeRoot = document.getElementById('react-home-guarantee');
if (guaranteeRoot) {
    createRoot(guaranteeRoot).render(
        <StrictMode>
            <BrowserRouter>
                <DefensibleDecision />
            </BrowserRouter>
        </StrictMode>
    );
}

const calculatorRoot = document.getElementById('react-home-calculator');
if (calculatorRoot) {
    createRoot(calculatorRoot).render(
        <StrictMode>
            <ModalProvider>
                <ROICalculator />
            </ModalProvider>
        </StrictMode>
    );
}

const finalCtaRoot = document.getElementById('react-home-final-cta');
if (finalCtaRoot) {
    createRoot(finalCtaRoot).render(
        <StrictMode>
            <BrowserRouter>
                <FinalCTASection />
            </BrowserRouter>
        </StrictMode>
    );
}

const footerRoot = document.getElementById('react-home-footer');
if (footerRoot) {
    createRoot(footerRoot).render(
        <StrictMode>
            <BrowserRouter>
                <CinematicFooter />
            </BrowserRouter>
        </StrictMode>
    );
}
