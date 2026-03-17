import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Audit from './pages/Audit';
import { ModalProvider } from './context/ModalContext';
import AuditModal from './components/AuditModal';
import './index.css';

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
