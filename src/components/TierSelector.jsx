import React, { useState, useRef } from 'react';

const TierSelector = () => {
    const [answers, setAnswers] = useState({
        volume: '',
        spend: '',
        content: ''
    });
    const containerRef = useRef(null);

    const questions = [
        {
            id: 'volume',
            label: 'Monthly inbound call volume?',
            options: [
                { value: 'low', label: 'Under 50 calls' },
                { value: 'mid', label: '50–120 calls' },
                { value: 'high', label: 'Over 120 calls' }
            ]
        },
        {
            id: 'spend',
            label: 'Monthly digital ad spend?',
            options: [
                { value: 'none', label: 'Under ₹10,000' },
                { value: 'mid', label: '₹10k – ₹50,000' },
                { value: 'high', label: 'Over ₹50,000' }
            ]
        },
        {
            id: 'content',
            label: 'Ready for video content & branding?',
            options: [
                { value: 'no', label: 'No, focus on calls' },
                { value: 'maybe', label: 'Maybe later' },
                { value: 'yes', label: 'Yes, I am ready' }
            ]
        }
    ];

    const getRecommendation = () => {
        if (!answers.volume || !answers.spend || !answers.content) return null;

        if (answers.content === 'yes' && answers.spend === 'high') {
            return {
                id: 'dominate',
                name: 'Dominate',
                tier: '3',
                description: 'The full clinic growth engine. Recommended for specialists scaling to ₹50L+ MRR.'
            };
        }

        if (answers.spend !== 'none' || answers.volume === 'high' || answers.volume === 'mid') {
            return {
                id: 'grow',
                name: 'Grow',
                tier: '2',
                description: 'Our most common tier. We drive the leads AND recover the calls.'
            };
        }

        return {
            id: 'recover',
            name: 'Recover',
            tier: '1',
            description: 'The foundation. High-fidelity missed call recovery for established clinics.'
        };
    };

    const recommendation = getRecommendation();

    return (
        <div ref={containerRef} className="w-full max-w-5xl mx-auto p-10 md:p-16 border border-[var(--primary)]/10 rounded-[3rem] bg-[var(--primary)]/[0.01] backdrop-blur-sm">
            <div className="text-center mb-16">
                <div className="font-data text-[10px] uppercase font-bold text-[var(--primary)] tracking-[0.3em] mb-4">Discovery Engine</div>
                <h2 className="text-3xl md:text-5xl font-bold text-[var(--command-black)] tracking-tighter mb-4 italic">Which tier is <span className="text-[var(--primary)] not-italic">right for you?</span></h2>
                <p className="text-[var(--command-black)]/40 text-sm font-medium">Answer 3 questions to see our technical recommendation.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                {questions.map((q) => (
                    <div key={q.id} className="flex flex-col">
                        <p className="font-data text-[11px] font-bold text-[var(--command-black)]/60 uppercase tracking-widest mb-6">{q.label}</p>
                        <div className="flex flex-col gap-3">
                            {q.options.map((opt) => (
                                <button
                                    key={opt.value}
                                    onClick={() => setAnswers({ ...answers, [q.id]: opt.value })}
                                    className={`p-5 text-xs text-left rounded-2xl border transition-all duration-300 font-bold tracking-tight ${
                                        answers[q.id] === opt.value
                                            ? 'border-[var(--primary)] bg-[var(--primary)]/5 text-[var(--primary)] scale-[1.02] shadow-lg shadow-blue-500/5'
                                            : 'border-[var(--primary)]/5 bg-white text-[var(--command-black)]/40 hover:border-[var(--primary)]/20 hover:text-[var(--command-black)]/60'
                                    }`}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="min-h-[220px] flex items-center justify-center">
                {recommendation ? (
                    <div className="w-full p-10 md:p-12 border-2 border-[var(--primary)]/20 bg-white rounded-[2.5rem] shadow-2xl shadow-blue-500/10 flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <div className="font-data text-[10px] text-[var(--recovered-green)] font-bold uppercase tracking-[0.4em] mb-6">Expert Recommendation</div>
                        <h3 className="text-3xl md:text-5xl font-bold text-[var(--command-black)] tracking-tighter mb-6">
                            Tier {recommendation.tier} — <span className="italic text-[var(--primary)]">{recommendation.name}</span>
                        </h3>
                        <p className="text-[var(--command-black)]/60 text-lg font-medium max-w-xl mb-12 leading-relaxed">
                            {recommendation.description}
                        </p>
                        <a 
                            href="/free-audit.html" 
                            className="px-12 py-5 bg-[var(--recovery-blue)] text-white rounded-full font-bold text-xs tracking-[0.2em] uppercase hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 transition-all active:scale-95"
                        >
                            Get Started with {recommendation.name} →
                        </a>
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-4 py-12 px-8 border border-dashed border-[var(--primary)]/20 rounded-[2.5rem]">
                        <div className="w-2 h-2 rounded-full bg-[var(--primary)]/20 animate-pulse" />
                        <span className="font-data text-[10px] text-[var(--command-black)]/20 font-bold uppercase tracking-widest text-center">
                            Awaiting response sequence completion...
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TierSelector;
