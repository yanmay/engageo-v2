import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

export default function CinematicNavbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = window.location.pathname;
    const { openModal } = useModal();

    const handleHomeClick = (e) => {
        setMobileMenuOpen(false);
        if (pathname === '/' || pathname === '/index.html' || pathname === '') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Features', path: '/#platform' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'How it works', path: '/how-it-works' },
        { name: 'Proof', path: '/#proof' },
        { name: 'FAQ', path: '/faq' },
    ];

    const isHomePage = pathname === '/' || pathname === '/index.html' || pathname === '';

    return (
        <nav 
            className="fixed top-0 left-0 w-full z-[10000] transition-all duration-500 ease-out py-4 bg-black/40 backdrop-blur-xl border-b border-white/5"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo Mark: Wordmark only */}
                <a href="/" onClick={handleHomeClick} className="group flex items-center gap-1 relative z-[110]">
                    <span className="font-bold text-2xl tracking-tighter transition-colors text-white group-hover:text-[var(--recovery-blue)]">
                        Engageo
                    </span>
                </a>

                {/* Desktop Nav Links */}
                <div className="hidden lg:flex items-center gap-10 font-data">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.path || (link.path === '/' && (pathname === '/index.html' || pathname === ''));
                        return (
                            <a 
                                key={link.name} 
                                href={link.path}
                                className={`text-[10px] font-bold tracking-widest transition-all hover:tracking-widest relative group/link ${
                                    isActive ? 'text-[var(--recovery-blue)]' : 'text-white/60 hover:text-white'
                                }`}
                            >
                                {link.name}
                                {isActive && (
                                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[var(--recovery-blue)]/40 shadow-[0_0_8px_rgba(0,113,255,0.2)]" />
                                )}
                            </a>
                        );
                    })}
                </div>

                {/* Right Side: Login + Audit Button */}
                <div className="hidden lg:flex items-center gap-8">
                    <button className="text-[10px] font-bold tracking-[0.2em] uppercase transition-colors text-white/30 hover:text-white">
                        Login
                    </button>
                    <button 
                        onClick={openModal}
                        className="btn-magnetic group px-7 py-2.5 bg-[var(--recovery-blue)] text-white rounded-full font-bold text-[9px] tracking-[0.2em] uppercase overflow-hidden relative shadow-lg shadow-blue-500/5 hover:shadow-blue-500/20 transition-all font-sans"
                    >
                        <span className="relative z-10">Get free audit →</span>
                        <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-white/10 transition-transform duration-500" />
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button 
                    className="lg:hidden flex flex-col gap-2 relative z-[110] p-2"
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
                className={`fixed inset-0 bg-[var(--command-black)] z-[100] lg:hidden flex flex-col items-center justify-center gap-12 transition-all duration-700 ease-[cubic-bezier(0.85, 0, 0.15, 1)] ${
                    mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                }`}
            >
                <div className="flex flex-col items-center gap-8">
                    {navLinks.map((link, i) => (
                        <a 
                            key={link.name} 
                            href={link.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-white text-3xl md:text-5xl font-bold tracking-tighter hover:text-[var(--recovery-blue)] transition-colors"
                            style={{ transitionDelay: `${i * 50}ms` }}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
                
                <div className="flex flex-col items-center gap-6 mt-8 w-full px-12 max-sm:px-6 max-w-sm">
                    <button 
                        onClick={() => {
                            setMobileMenuOpen(false);
                            openModal();
                        }}
                        className="w-full text-center px-12 py-5 bg-[var(--recovery-blue)] text-white rounded-full font-bold text-xs tracking-[0.2em] uppercase shadow-2xl"
                    >
                        Get Free Audit →
                    </button>
                    <button className="text-white/40 font-bold tracking-[0.2em] uppercase text-[10px]">
                        Already have an account? Login
                    </button>
                </div>
            </div>
        </nav>
    );
}
