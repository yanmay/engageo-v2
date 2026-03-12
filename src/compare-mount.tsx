import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ComparisonTable from './components/ComparisonTable';
import { ModalProvider } from './context/ModalContext';
import AuditModal from './components/AuditModal';
import './index.css';

const rootElement = document.getElementById('react-compare-root');
if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
            <ModalProvider>
                <ComparisonTable showHeaderAndFooter={false} />
                <AuditModal />
            </ModalProvider>
        </StrictMode>
    );
}
