import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import HowItWorks from './pages/HowItWorks';
import './index.css';

const root = document.getElementById('react-hiw-root');
if (root) {
    createRoot(root).render(
        <StrictMode>
            <BrowserRouter>
                <HowItWorks />
            </BrowserRouter>
        </StrictMode>
    );
}
