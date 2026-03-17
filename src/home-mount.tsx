import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CinematicLogos from './components/CinematicLogos';
import FinalCTASection from './components/FinalCTASection';
import CinematicFooter from './components/CinematicFooter';
import CinematicGuarantee from './components/CinematicGuarantee';
import Philosophy from './components/Philosophy';
import CinematicFeatures from './components/CinematicFeatures';
import CinematicProtocol from './components/CinematicProtocol';
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




const guaranteeRoot = document.getElementById('react-home-guarantee');
if (guaranteeRoot) {
    createRoot(guaranteeRoot).render(
        <StrictMode>
            <BrowserRouter>
                <CinematicGuarantee />
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
