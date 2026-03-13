import React from 'react';
import { Link } from 'react-router-dom';

export default function CinematicFooter() {
    return (
        <footer className="bg-[var(--command-black)] pt-32 pb-16 px-8 md:px-24 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="text-white text-4xl font-bold tracking-tighter mb-8 italic block w-fit hover:text-[var(--recovery-blue)] transition-colors">Engageo</Link>
                        <p className="text-white/40 max-w-sm leading-relaxed mb-12 text-lg">
                            We answer the calls your clinic misses. Autonomous missed-call recovery for high-ticket Indian specialists.
                        </p>
                        <div className="flex items-center gap-4 py-3 px-5 rounded-full bg-white/[0.03] border border-white/5 w-fit">
                            <div className="w-2 h-2 rounded-full bg-[var(--signal-green)] animate-pulse shadow-[0_0_12px_var(--signal-green)]" />
                            <span className="font-data text-[10px] text-[var(--signal-green)] tracking-[0.2em] font-bold">SYSTEM_OPERATIONAL_V4.2</span>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-data text-[10px] text-white/40 tracking-[0.3em] uppercase mb-10 font-bold">Platform</h4>
                        <ul className="space-y-5 text-sm font-semibold tracking-tight">
                            <li><Link to="/how-it-works" className="text-white/60 hover:text-[var(--primary)] transition-colors">How It Works</Link></li>
                            <li><Link to="/pricing" className="text-white/60 hover:text-[var(--primary)] transition-colors">Pricing</Link></li>
                            <li><Link to="/compare" className="text-white/60 hover:text-[var(--primary)] transition-colors">Compare</Link></li>
                            <li><Link to="/faq" className="text-white/60 hover:text-[var(--primary)] transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-data text-[10px] text-white/40 tracking-[0.3em] uppercase mb-10 font-bold">Legal</h4>
                        <ul className="space-y-5 text-sm font-semibold tracking-tight">
                            <li><a href="#" className="text-white/60 hover:text-[var(--primary)] transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-white/60 hover:text-[var(--primary)] transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="text-white/60 hover:text-[var(--primary)] transition-colors">DPDP Act 2023</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
                    <div className="flex items-center gap-8">
                        <p className="text-white/20 text-[10px] font-bold tracking-[0.2em] uppercase">
                            &copy; {new Date().getFullYear()} Engageo.
                        </p>
                        <p className="text-white/20 text-[10px] font-bold tracking-[0.2em] uppercase">
                            Built for Indian Specialists.
                        </p>
                    </div>
                    <div className="text-white/10 text-[9px] font-bold tracking-[0.2em] uppercase italic">
                        Strictly Clinical Scheduling Protocol. No Medical Advice.
                    </div>
                </div>
            </div>
        </footer>
    );
}

