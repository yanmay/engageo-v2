import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Compare from './pages/Compare';
import { ModalProvider } from './context/ModalContext';
import AuditModal from './components/AuditModal';
import './index.css';

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
