import React, { useState, useEffect, useRef } from 'react';
import { motion as Motion, useInView as UseInView } from 'framer-motion';
import { CheckCircle2, Shield, Lock, Activity, MousePointer2 } from 'lucide-react';

/* 
   ThreeCardSection
   Spec: Task 20 Addendum
   Restores three exact components:
   1. 4-Day Launch Tracker
   2. Live Recovery Feed
   3. Guarantee Shield
*/

const useMousePosition = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };
    return { mousePos, handleMouseMove };
};

const BorderBeam = ({ duration = 8, size = 150, delay = 0, colorFrom = "transparent", colorTo = "var(--recovery-blue)" }) => (
    <div className="border-beam-container">
        <div
            className="border-beam"
            style={{
                "--duration": `${duration}s`,
                "--size": `${size}px`,
                "--delay": `${delay}s`,
                "--color-from": colorFrom,
                "--color-to": colorTo
            }}
        />
    </div>
);

const CardContainer = ({ children, className = "", delay = 0, beamColor = "var(--recovery-blue)" }) => {
    const { mousePos, handleMouseMove } = useMousePosition();
    const ref = useRef(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    const handleMouseMoveLocal = (e) => {
        handleMouseMove(e);
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        const factor = 0.05;
        setRotateX(-mouseY * factor);
        setRotateY(mouseX * factor);
    };

    return (
        <Motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 1.5,
                delay,
                ease: [0.22, 1, 0.36, 1]
            }}
            onMouseMove={handleMouseMoveLocal}
            onMouseLeave={handleMouseLeave}
            animate={{ rotateX, rotateY }}
            whileHover={{ y: -12 }}
            className={`cyber-bento-card bg-black border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl flex flex-col h-full relative overflow-hidden group transition-colors hover:border-[var(--recovery-blue)]/30 ${className}`}
            style={{
                "--mouse-x": `${mousePos.x}px`,
                "--mouse-y": `${mousePos.y}px`,
                perspective: "1200px"
            }}
        >
            {/* Spotlight Glow Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(37, 99, 235, 0.1) 0%, transparent 60%)`
                }} />

            {/* Border Beam */}
            <BorderBeam colorTo={beamColor} duration={8} />

            {children}
        </Motion.div>
    );
};

const CardHeading = ({ children }) => (
    <h3 className="text-white text-2xl font-bold font-sans tracking-tight mb-2 relative z-10">
        {children}
    </h3>
);

const CardDescriptor = ({ children }) => (
    <p className="text-white/40 text-sm font-sans mb-8 leading-relaxed relative z-10">
        {children}
    </p>
);

// Card 1 — 4-Day Launch Tracker
const LaunchTracker = () => {
    const steps = [
        { day: 'Day 1', label: 'Onboarding call + AI training', status: 'completed' },
        { day: 'Day 2', label: 'IVR + WhatsApp flow setup', status: 'completed' },
        { day: 'Day 3', label: 'Test calls + clinic QA', status: 'pulsing' },
        { day: 'Day 4', label: 'GO LIVE — first calls recovered', status: 'flash' }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.8
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    return (
        <CardContainer delay={0} className="md:col-span-1 border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <div className="flex items-center gap-2 mb-4 relative z-10">
                <Activity size={14} className="text-[var(--recovery-blue)]" />
                <span className="font-data text-[10px] uppercase tracking-[0.2em] text-[var(--recovery-blue)]">Deployment_Spine</span>
            </div>
            <CardHeading>4-Day Launch Tracker</CardHeading>
            <CardDescriptor>Sub-second deployment architecture for immediate revenue recovery.</CardDescriptor>

            <Motion.div
                className="flex-1 space-y-6 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Connecting Line */}
                <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-white/5" />

                {steps.map((step, idx) => (
                    <Motion.div key={idx} variants={itemVariants} className="flex gap-4 items-start relative z-10">
                        <div className="mt-1">
                            {step.status === 'completed' && (
                                <div className="w-6 h-6 rounded-full bg-[var(--signal-green)]/20 border border-[var(--signal-green)]/40 flex items-center justify-center">
                                    <CheckCircle2 size={12} className="text-[var(--signal-green)]" />
                                </div>
                            )}
                            {step.status === 'pulsing' && (
                                <div className="w-6 h-6 rounded-full bg-[var(--sovereign-gold)]/20 border border-[var(--sovereign-gold)]/40 flex items-center justify-center relative">
                                    <div className="absolute inset-0 rounded-full bg-[var(--sovereign-gold)]/40 animate-ping" />
                                    <div className="w-2 h-2 rounded-full bg-[var(--sovereign-gold)] relative z-10" />
                                </div>
                            )}
                            {step.status === 'flash' && (
                                <div className="w-6 h-6 rounded-full bg-[var(--recovery-blue)]/20 border border-[var(--recovery-blue)]/40 flex items-center justify-center relative shadow-[0_0_15px_rgba(37,99,235,0.4)] animate-pulse">
                                    <div className="w-2 h-2 rounded-full bg-[var(--recovery-blue)]" />
                                </div>
                            )}
                        </div>
                        <div>
                            <div className="font-data text-[10px] uppercase text-white/30 tracking-widest">{step.day}</div>
                            <div className={`text-sm font-semibold ${step.status === 'flash' ? 'text-[var(--recovery-blue)]' : 'text-white/80'}`}>
                                {step.label}
                            </div>
                        </div>
                    </Motion.div>
                ))}
            </Motion.div>
        </CardContainer>
    );
};

const RECOVERY_MESSAGES = [
    "CALL RECEIVED",
    "Patient: Rahul Sharma",
    "Status: MISSED",
    "Action: RECOVERED",
    "WhatsApp: Sent @ 14:32:04",
    "Booking: CONFIRMED @ 14:35:12",
    "REVENUE: ₹85,000",
    "----------------",
    "CALL RECEIVED",
    "Patient: Dr. Anjali",
    "Status: MISSED",
    "Action: RECOVERED",
    "WhatsApp: Sent @ 15:40:11",
    "Booking: CONFIRMED @ 15:44:02",
    "REVENUE: ₹42,500",
    "----------------"
];

// Card 2 — Live Recovery Feed
const LiveRecoveryFeed = () => {

    const [displayText, setDisplayText] = useState([]);
    const [msgIndex, setMsgIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const fullText = RECOVERY_MESSAGES[msgIndex];
        if (charIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => {
                    const lastMsg = prev[prev.length - 1] || "";
                    const newPrev = prev.length > 0 ? prev.slice(0, -1) : [];
                    return [...newPrev, lastMsg + fullText[charIndex]];
                });
                setCharIndex(prev => prev + 1);
            }, 30);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                if (msgIndex < RECOVERY_MESSAGES.length - 1) {
                    setDisplayText(prev => [...prev, ""]);
                    setMsgIndex(prev => prev + 1);
                    setCharIndex(0);
                } else {
                    // Loop back after a delay
                    setTimeout(() => {
                        setDisplayText([""]);
                        setMsgIndex(0);
                        setCharIndex(0);
                    }, 2000);
                }
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [charIndex, msgIndex]);

    return (
        <CardContainer delay={0.2} className="md:col-span-2 border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[var(--recovery-blue)] animate-pulse shadow-[0_0_8px_var(--recovery-blue)]" />
                    <span className="font-data text-[10px] uppercase tracking-widest text-white/50">Live Feed</span>
                </div>
                <div className="font-data text-[8px] text-white/20">NODE_VAPI_INTENT</div>
            </div>
            <CardHeading>Live Recovery Feed</CardHeading>
            <CardDescriptor>Real-time autonomous interception protocols in action.</CardDescriptor>

            <div className="relative z-10 flex-1 bg-black/40 rounded-xl p-5 font-data text-[11px] leading-relaxed border border-white/5 overflow-y-auto custom-scrollbar">
                <div className="text-[var(--recovery-blue)] space-y-1">
                    {displayText.map((line, i) => (
                        <div key={i} className={line.includes('REVENUE') ? 'text-[var(--signal-green)] font-bold' : ''}>
                            {line}
                            {i === displayText.length - 1 && (
                                <span className="inline-block w-1.5 h-3 bg-[var(--recovery-blue)] ml-1 animate-pulse" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </CardContainer>
    );
};

// Card 3 — Guarantee Shield
const GuaranteeShield = () => {
    const ref = useRef(null);
    const isInView = UseInView(ref, { once: true, amount: 0.5 });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = 10;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [isInView]);

    const radius = 40;
    const circumference = 2 * Math.PI * radius;

    return (
        <CardContainer className="border-[var(--sovereign-gold)]/20 shadow-[0_8px_32px_rgba(217,119,6,0.1)] md:col-span-1 lg:col-span-1" delay={0.4} beamColor="var(--sovereign-gold)">
            <div className="flex items-center gap-2 mb-4 relative z-10">
                <Shield size={14} className="text-[var(--sovereign-gold)]" />
                <span className="font-data text-[10px] uppercase tracking-[0.2em] text-[var(--sovereign-gold)]">Fiscal_Assurance</span>
            </div>
            <CardHeading>Guarantee Shield</CardHeading>
            <CardDescriptor>Sovereign-grade conversion security for every clinic partner.</CardDescriptor>

            <div ref={ref} className="relative z-10 flex-1 flex flex-col items-center justify-center py-4">
                {/* Progress Ring */}
                <div className="relative w-40 h-40 flex items-center justify-center mb-8">
                    <svg width="160" height="160" className="transform -rotate-90">
                        <circle
                            cx="80"
                            cy="80"
                            r={radius}
                            stroke="rgba(217, 119, 6, 0.1)"
                            strokeWidth="8"
                            fill="transparent"
                        />
                        <Motion.circle
                            cx="80"
                            cy="80"
                            r={radius}
                            stroke="var(--sovereign-gold)"
                            strokeWidth="8"
                            fill="transparent"
                            strokeDasharray={circumference}
                            initial={{ strokeDashoffset: circumference }}
                            animate={isInView ? { strokeDashoffset: 0 } : {}}
                            transition={{ duration: 2, ease: "easeOut" }}
                            strokeLinecap="round"
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold text-white tracking-tighter italic font-drama">30 Days</span>
                    </div>
                </div>

                <div className="text-center mb-10">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--sovereign-gold)] font-bold">Money-Back Guarantee</div>
                </div>

                <div className="w-full space-y-4">
                    <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
                        <div className="flex items-center gap-2 text-white/50">
                            <CheckCircle2 size={14} className="text-[var(--signal-green)]" />
                            <span>10 booking minimum</span>
                        </div>
                        <span className="text-white font-data">{count} ✓</span>
                    </div>
                    <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
                        <div className="flex items-center gap-2 text-white/50">
                            <Shield size={14} className="text-[var(--sovereign-gold)]" />
                            <span>If not hit: full refund</span>
                        </div>
                        <span className="text-white font-data">PROTECTED</span>
                    </div>
                    <div className="flex items-center justify-between text-xs pb-2">
                        <div className="flex items-center gap-2 text-white/50">
                            <Lock size={14} className="text-white/30" />
                            <span>No questions asked</span>
                        </div>
                        <span className="text-white font-data">LOCKED</span>
                    </div>
                </div>
            </div>
        </CardContainer>
    );
};

export default function ThreeCardSection() {
    return (
        <section id="three-cards-restored" className="py-24 md:py-48 bg-[var(--background)] relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.02]"
                style={{ backgroundImage: 'radial-gradient(var(--text) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="mb-20">
                    <div className="font-data text-xs text-[var(--clay)] font-bold tracking-[0.4em] uppercase mb-8 flex items-center gap-4">
                        <div className="w-10 h-[1px] bg-[var(--clay)]" />
                        Trust & Deployment
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[var(--text)] leading-[0.9] italic">
                        The Infrastructure <br />
                        <span className="text-[var(--moss)] not-italic underline decoration-[var(--clay)] decoration-2 underline-offset-8">of Growth.</span>
                    </h2>
                </div>

                <div className="cyber-bento-grid grid grid-cols-1 md:grid-cols-3 gap-8">
                    <LaunchTracker />
                    <LiveRecoveryFeed />
                    <GuaranteeShield />
                </div>
            </div>
        </section>
    );
}
