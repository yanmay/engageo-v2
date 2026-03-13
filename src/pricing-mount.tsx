import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import PricingPage from './pages/PricingPage';
import './index.css';

const root = document.getElementById('react-pricing-root');
if (root) {
  createRoot(root).render(
    <StrictMode>
      <BrowserRouter>
        <PricingPage />
      </BrowserRouter>
    </StrictMode>
  );
}
