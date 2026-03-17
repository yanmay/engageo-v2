import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import HowItWorks from './pages/HowItWorks';
import { ModalProvider } from './context/ModalContext';
import AuditModal from './components/AuditModal';
import './index.css';

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
