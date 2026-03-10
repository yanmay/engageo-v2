import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero';
import DefensibleDecision from './components/DefensibleDecision';
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
