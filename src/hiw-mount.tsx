import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CinematicNavbar from './components/CinematicNavbar';
import CinematicFooter from './components/CinematicFooter';
import HowItWorks from './pages/HowItWorks';
import { ModalProvider } from './context/ModalContext';
import AuditModal from './components/AuditModal';
import './index.css';

const navRoot = document.getElementById('react-hiw-navbar');
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

const root = document.getElementById('react-hiw-root');
if (root) {
    createRoot(root).render(
        <StrictMode>
            <BrowserRouter>
                <ModalProvider>
                    <HowItWorks />
                    <AuditModal />
                </ModalProvider>
            </BrowserRouter>
        </StrictMode>
    );
}

const footerRoot = document.getElementById('react-hiw-footer');
if (footerRoot) {
    createRoot(footerRoot).render(
        <StrictMode>
            <BrowserRouter>
                <CinematicFooter />
            </BrowserRouter>
        </StrictMode>
    );
}
