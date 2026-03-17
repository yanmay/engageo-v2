import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CinematicNavbar from './components/CinematicNavbar';
import Audit from './pages/Audit';
import CinematicFooter from './components/CinematicFooter';
import { ModalProvider } from './context/ModalContext';
import AuditModal from './components/AuditModal';
import './index.css';

const navRoot = document.getElementById('react-audit-navbar');
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

const rootElement = document.getElementById('react-audit-root');
if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
            <BrowserRouter>
                <ModalProvider>
                    <Audit />
                    <AuditModal />
                </ModalProvider>
            </BrowserRouter>
        </StrictMode>
    );
}

const footerRoot = document.getElementById('react-audit-footer');
if (footerRoot) {
  createRoot(footerRoot).render(
    <StrictMode>
        <BrowserRouter>
            <CinematicFooter />
        </BrowserRouter>
    </StrictMode>
  );
}
