import React from 'react';

export default function CinematicFooter() {
    return (
        <footer className="bg-[var(--charcoal)] pt-24 pb-12 px-8 md:px-24 rounded-t-[4rem]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
                    <div className="col-span-1 md:col-span-2">
                        <div className="text-white text-3xl font-bold tracking-tighter mb-6">Engageo</div>
                        <p className="text-white/40 max-w-sm leading-relaxed mb-8">
                            We answer the calls your clinic misses. Autonomous missed-call recovery for high-ticket Indian specialists.
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                            <span className="font-data text-[10px] text-emerald-500 tracking-[0.2em] font-bold">SYSTEM OPERATIONAL</span>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Platform</h4>
                        <ul className="space-y-4 text-sm text-white/40">
                            <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Compare</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm text-white/40">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">DPDP Act</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
                    <p className="text-white/20 text-[10px] font-medium tracking-widest uppercase">
                        &copy; {new Date().getFullYear()} Engageo. Built for India.
                    </p>
                    <div className="text-white/20 text-[10px] font-medium tracking-widest uppercase">
                        Strictly No Medical Advice Provided.
                    </div>
                </div>
            </div>
        </footer>
    );
}
