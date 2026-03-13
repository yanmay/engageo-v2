import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import TierSelector from './components/TierSelector';
import DefensibleDecision from './components/DefensibleDecision';
import CinematicPricing from './components/CinematicPricing';
import './index.css';

const selectorRoot = document.getElementById('react-pricing-selector');
if (selectorRoot) {
    createRoot(selectorRoot).render(
        <StrictMode>
            <TierSelector />
        </StrictMode>
    );
}

const pricingCardsRoot = document.getElementById('react-pricing-cards');
if (pricingCardsRoot) {
    createRoot(pricingCardsRoot).render(
        <StrictMode>
            <BrowserRouter>
                <CinematicPricing hideLink={true} />
            </BrowserRouter>
        </StrictMode>
    );
}

const guaranteeRoot = document.getElementById('react-pricing-guarantee');
if (guaranteeRoot) {
    createRoot(guaranteeRoot).render(
        <StrictMode>
            <BrowserRouter>
                <DefensibleDecision />
            </BrowserRouter>
        </StrictMode>
    );
}
