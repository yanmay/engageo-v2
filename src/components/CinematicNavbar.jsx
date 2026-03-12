import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';

export default function CinematicNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Features', path: '/#features' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'How It Works', path: '/how-it-works' },
        { name: 'Compare', path: '/compare' },
        { name: 'FAQ', path: '/faq' },
    ];

    const isHeroVisible = !scrolled && location.pathname === '/';

    return (
        <nav 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
                scrolled 
                    ? 'bg-[var(--command-black)]/80 backdrop-blur-xl py-4 border-b border-white/5 shadow-2xl' 
                    : 'bg-transparent py-10'
            }`}
        >
            <div className="max-w-7xl mx-auto px-8 md:px-12 flex items-center justify-between">
                {/* Logo Mark: Wordmark only */}
                <Link to="/" className="group flex items-center gap-1">
                    <span className="text-white font-bold text-2xl tracking-tighter uppercase transition-colors group-hover:text-[var(--recovery-blue)]">
                        Engageo
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--recovery-blue)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden lg:flex items-center gap-12 font-data">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            to={link.path}
                            className="text-white/50 hover:text-white text-[11px] font-bold tracking-[0.2em] uppercase transition-all hover:tracking-[0.25em]"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right Side: Login + Audit Button */}
                <div className="hidden lg:flex items-center gap-10">
                    <button className="text-white/30 hover:text-white text-[11px] font-bold tracking-[0.2em] uppercase transition-colors">
                        Login
                    </button>
                    <Link 
                        to="/audit"
                        className="btn-magnetic group px-8 py-3 bg-[var(--recovery-blue)] text-white rounded-full font-bold text-[10px] tracking-[0.2em] uppercase overflow-hidden relative shadow-lg shadow-blue-500/10 hover:shadow-blue-500/30 transition-all"
                    >
                        <span className="relative z-10">Get Free Audit →</span>
                        <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-white/10 transition-transform duration-500" />
                    </Link>
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
                        <Link 
                            key={link.name} 
                            to={link.path}
                            className="text-white text-3xl md:text-5xl font-bold tracking-tighter hover:text-[var(--recovery-blue)] transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                            style={{ transitionDelay: `${i * 50}ms` }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                
                <div className="flex flex-col items-center gap-6 mt-8 w-full px-12 max-w-sm">
                    <Link 
                        to="/audit"
                        className="w-full text-center px-12 py-5 bg-[var(--recovery-blue)] text-white rounded-full font-bold text-xs tracking-[0.2em] uppercase shadow-2xl"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Get Free Audit →
                    </Link>
                    <button className="text-white/40 font-bold tracking-[0.2em] uppercase text-[10px]">
                        Already have an account? Login
                    </button>
                </div>
            </div>
        </nav>
    );
}
