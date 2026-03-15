import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function CinematicNavbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();


    const handleHomeClick = (e) => {
        setMobileMenuOpen(false);
        if (location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        // Scroll logic removed - status bar is now static black as per Task 20/21 audit
    }, []);

    const navLinks = [
        { name: 'Home', path: 'index.html' },
        { name: 'Features', path: 'index.html#features' },
        { name: 'Pricing', path: 'pricing.html' },
        { name: 'How It Works', path: 'how-it-works.html' },
        { name: 'Compare', path: 'compare.html' },
        { name: 'FAQ', path: 'faq.html' },
    ];

    const openAuditModal = (e) => {
        if (location.pathname === '/' || location.pathname === '/index.html') {
            e.preventDefault();
            window.dispatchEvent(new CustomEvent('open-audit-modal'));
        }
    };

    return (
        <nav 
            className="fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out py-5 border-b border-white/5 bg-[var(--command-black)]"
        >
            <div className="max-w-7xl mx-auto px-8 md:px-12 flex items-center justify-between">
                {/* Logo Mark: Wordmark only */}
                <a href="index.html" onClick={handleHomeClick} className="group flex items-center gap-1">
                    <span className="font-bold text-2xl tracking-tighter transition-colors text-white group-hover:text-[var(--recovery-blue)]">
                        Engageo
                    </span>
                </a>

                {/* Desktop Nav Links */}
                <div className="hidden lg:flex items-center gap-12 font-data">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.path}
                            onClick={link.name === 'Home' ? handleHomeClick : undefined}
                            className="text-[11px] font-bold tracking-[0.2em] uppercase transition-all hover:tracking-[0.25em] text-white/50 hover:text-white"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Right Side: Login + Audit Button */}
                <div className="hidden lg:flex items-center gap-10">
                    <button className="text-[11px] font-bold tracking-[0.2em] uppercase transition-colors text-white/30 hover:text-white">
                        Login
                    </button>
                    <a 
                        href="free-audit.html"
                        onClick={openAuditModal}
                        className="btn-magnetic group px-8 py-3 bg-[var(--recovery-blue)] text-white rounded-full font-bold text-[10px] tracking-[0.2em] uppercase overflow-hidden relative shadow-lg shadow-blue-500/10 hover:shadow-blue-500/30 transition-all"
                    >
                        <span className="relative z-10">Get Free Audit →</span>
                        <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-white/10 transition-transform duration-500" />
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button 
                    className="lg:hidden flex flex-col gap-2 relative z-50 p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <span className={`w-6 h-0.5 bg-white transition-all duration-500 ${mobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                    <span className={`w-4 h-0.5 bg-white transition-all duration-300 ml-auto ${mobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                    <span className={`w-6 h-0.5 bg-white transition-all duration-500 ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
                </button>
            </div>

            {/* Mobile Full-Screen Overlay */}
            <div 
                className={`fixed inset-0 bg-[var(--command-black)] z-40 lg:hidden flex flex-col items-center justify-center gap-12 transition-all duration-700 ease-[cubic-bezier(0.85, 0, 0.15, 1)] ${
                    mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                }`}
            >
                <div className="flex flex-col items-center gap-8">
                    {navLinks.map((link, i) => (
                        <a 
                            key={link.name} 
                            href={link.path}
                            onClick={handleHomeClick}
                            className="text-white text-3xl md:text-5xl font-bold tracking-tighter hover:text-[var(--recovery-blue)] transition-colors"
                            style={{ transitionDelay: `${i * 50}ms` }}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
                
                <div className="flex flex-col items-center gap-6 mt-8 w-full px-12 max-w-sm">
                    <a 
                        href="free-audit.html"
                        onClick={openAuditModal}
                        className="w-full text-center px-12 py-5 bg-[var(--recovery-blue)] text-white rounded-full font-bold text-xs tracking-[0.2em] uppercase shadow-2xl"
                    >
                        Get Free Audit →
                    </a>
                    <button className="text-white/40 font-bold tracking-[0.2em] uppercase text-[10px]">
                        Already have an account? Login
                    </button>
                </div>
            </div>
        </nav>
    );
}
