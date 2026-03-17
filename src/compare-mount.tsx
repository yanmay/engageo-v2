import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CinematicNavbar from './components/CinematicNavbar';
import CinematicFooter from './components/CinematicFooter';
import Compare from './pages/Compare';
import { ModalProvider } from './context/ModalContext';
import AuditModal from './components/AuditModal';
import './index.css';

const navRoot = document.getElementById('react-compare-navbar');
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

const rootElement = document.getElementById('react-compare-root');
if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
            <BrowserRouter>
                <ModalProvider>
                    <Compare />
                    <AuditModal />
                </ModalProvider>
            </BrowserRouter>
        </StrictMode>
    );
}

const footerRoot = document.getElementById('react-compare-footer');
if (footerRoot) {
    createRoot(footerRoot).render(
        <StrictMode>
            <BrowserRouter>
                <CinematicFooter />
            </BrowserRouter>
        </StrictMode>
    );
}
