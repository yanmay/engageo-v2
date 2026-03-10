import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import DemoPage from './components/ui/demo';
import './index.css';

const root = document.getElementById('react-demo-root');
if (root) {
    createRoot(root).render(
        <StrictMode>
            <DemoPage />
        </StrictMode>
    );
}
