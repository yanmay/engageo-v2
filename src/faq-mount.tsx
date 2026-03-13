import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CinematicFAQ from './components/CinematicFAQ';
import './index.css';

const root = document.getElementById('react-faq-root');
if (root) {
    createRoot(root).render(
        <StrictMode>
            <BrowserRouter>
                <CinematicFAQ />
            </BrowserRouter>
        </StrictMode>
    );
}
