import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CinematicNavbar from './components/CinematicNavbar';
import CinematicFooter from './components/CinematicFooter';
import PricingPage from './pages/PricingPage';
import { ModalProvider } from './context/ModalContext';
import AuditModal from './components/AuditModal';
import './index.css';

const navRoot = document.getElementById('react-pricing-navbar');
if (navRoot) {
  createRoot(navRoot).render(
    <StrictMode>
      <BrowserRouter>
        <ModalProvider>
          <CinematicNavbar />
          <AuditModal />
        </ModalProvider>
      </BrowserRouter>
    </StrictMode>
  );
}

const root = document.getElementById('react-pricing-root');
if (root) {
  createRoot(root).render(
    <StrictMode>
      <BrowserRouter>
        <ModalProvider>
          <PricingPage />
          <AuditModal />
        </ModalProvider>
      </BrowserRouter>
    </StrictMode>
  );
}

const footerRoot = document.getElementById('react-pricing-footer');
if (footerRoot) {
  createRoot(footerRoot).render(
    <StrictMode>
      <BrowserRouter>
        <CinematicFooter />
      </BrowserRouter>
    </StrictMode>
  );
}
