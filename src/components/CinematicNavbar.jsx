import React, { useRef } from 'react';
import gsap from 'gsap';

export default function MagneticButton({ children, className = "", onClick, accent = false }) {
    const btnRef = useRef(null);
    const layerRef = useRef(null);

    const handleMouseEnter = () => {
        gsap.to(btnRef.current, { scale: 1.03, duration: 0.4, ease: "power3.out" });
        gsap.to(layerRef.current, { y: "0%", duration: 0.5, ease: "power3.out" });
    };

    const handleMouseLeave = () => {
        gsap.to(btnRef.current, { scale: 1, duration: 0.4, ease: "power3.out" });
        gsap.to(layerRef.current, { y: "100%", duration: 0.5, ease: "power3.in" });
    };

    return (
        <button
            ref={btnRef}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`btn-magnetic group px-8 py-3 rounded-full font-bold text-sm tracking-tight border border-[var(--charcoal)]/10 bg-white/5 backdrop-blur-sm relative ${className} ${accent ? 'text-white' : 'text-[var(--charcoal)]'}`}
        >
            <span
                ref={layerRef}
                className={`bg-layer absolute inset-0 -z-10 translate-y-full transition-none ${accent ? 'bg-[var(--clay)]' : 'bg-[var(--moss)]'}`}
            />
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                {children}
            </span>
        </button>
    );
}
