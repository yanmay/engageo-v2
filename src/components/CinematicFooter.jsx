import React from 'react';
import { useLocation } from 'react-router-dom';

export default function CinematicFooter() {
    const location = useLocation();
    const isHomePage = location.pathname === '/' || location.pathname === '/index.html' || location.pathname.endsWith('/');

    const handleLogoClick = (e) => {
        if (isHomePage) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-[var(--command-black)] pt-32 pb-16 px-8 md:px-24 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
                    <div className="col-span-1 md:col-span-2">
                        <a 
                            href="/" 
                            onClick={handleLogoClick}
                            className="text-white text-4xl font-bold tracking-tighter mb-8 italic block w-fit hover:text-[var(--recovery-blue)] transition-colors"
                        >
                            Engageo
                        </a>
                        <p className="text-white/70 max-w-sm leading-relaxed mb-12 text-lg">
                            We answer the calls your clinic misses. Autonomous missed-call recovery for high-ticket Indian specialists.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-data text-[10px] text-white/60 tracking-widest mb-10 font-bold uppercase">Platform</h4>
                        <ul className="space-y-5 text-sm font-semibold tracking-tight">
                            <li><a href="/how-it-works" className="text-white/80 hover:text-[var(--recovery-blue)] transition-colors">How it works</a></li>
                            <li><a href="/pricing" className="text-white/80 hover:text-[var(--recovery-blue)] transition-colors">Pricing</a></li>
                            <li><a href="/compare" className="text-white/80 hover:text-[var(--recovery-blue)] transition-colors">Compare</a></li>
                            <li><a href="/faq" className="text-white/80 hover:text-[var(--recovery-blue)] transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-data text-[10px] text-white/60 tracking-widest mb-10 font-bold uppercase">Legal</h4>
                        <ul className="space-y-5 text-sm font-semibold tracking-tight">
                            <li><a href="/privacy" className="text-white/80 hover:text-[var(--recovery-blue)] transition-colors">Privacy policy</a></li>
                            <li><a href="/terms" className="text-white/80 hover:text-[var(--recovery-blue)] transition-colors">Terms of service</a></li>
                            <li><a href="/dpdp" className="text-white/80 hover:text-[var(--recovery-blue)] transition-colors">DPDP act 2023</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
                    <div className="flex items-center gap-8">
                        <p className="text-white/40 text-[10px] font-bold tracking-widest tabular-nums">
                            &copy; {new Date().getFullYear()} Engageo.
                        </p>
                        <p className="text-white/40 text-[10px] font-bold tracking-widest">
                            Built for Indian specialists.
                        </p>
                    </div>
                    <div className="text-white/30 text-[9px] font-bold tracking-widest italic font-drama uppercase">
                        Strictly clinical scheduling protocol. No medical advice.
                    </div>
                </div>
            </div>
        </footer>
    );
}

