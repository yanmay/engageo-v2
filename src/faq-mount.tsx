import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import FAQPage from './pages/FAQPage';
import { ModalProvider } from './context/ModalContext';
import AuditModal from './components/AuditModal';
import './index.css';

const root = document.getElementById('react-faq-root');
if (root) {
    createRoot(root).render(
        <StrictMode>
            <BrowserRouter>
                <ModalProvider>
                    <FAQPage />
                    <AuditModal />
                </ModalProvider>
            </BrowserRouter>
        </StrictMode>
    );
}
