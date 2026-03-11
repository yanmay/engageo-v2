import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero';
import DefensibleDecision from './components/DefensibleDecision';
import Philosophy from './components/Philosophy';
import CinematicFeatures from './components/CinematicFeatures';
import CinematicProtocol from './components/CinematicProtocol';
import DecisionLifecycle from './components/DecisionLifecycle';
import './index.css';

const heroRoot = document.getElementById('react-home-hero');
if (heroRoot) {
    createRoot(heroRoot).render(
        <StrictMode>
            <BrowserRouter>
                <Hero />
            </BrowserRouter>
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

const lifecycleRoot = document.getElementById('react-home-lifecycle');
if (lifecycleRoot) {
    createRoot(lifecycleRoot).render(
        <StrictMode>
            <DecisionLifecycle />
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
