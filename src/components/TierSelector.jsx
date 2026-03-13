import React, { useState } from 'react';

const TierSelector = () => {
  const [answers, setAnswers] = useState({
    volume: '',
    spend: '',
    content: ''
  });

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
        description: 'The full clinic growth engines. Recommended for specialists scaling to ₹50L+ MRR.'
      };
    }
    
    if (answers.spend !== 'none' || answers.volume === 'high' || answers.volume === 'mid') {
      return {
        id: 'grow',
        name: 'Grow',
        description: 'Our most common tier. We drive the leads AND recover the calls.'
      };
    }
    
    return {
      id: 'recover',
      name: 'Recover',
      description: 'The foundation. High-fidelity missed call recovery for established clinics.'
    };
  };

  const recommendation = getRecommendation();

  return (
    <div style={{ maxWidth: '820px', margin: '0 auto', background: 'var(--surface)', border: '1px solid var(--rule)', borderRadius: '24px', padding: '48px' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: '16px' }}>Selector</div>
        <h2 style={{ fontSize: '32px', fontFamily: 'var(--serif)', color: 'var(--ink)', letterSpacing: '-0.02em' }}>Which tier is right for you?</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', marginBottom: '48px' }}>
        {questions.map((q) => (
          <div key={q.id}>
            <p style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px', color: 'var(--ink)' }}>{q.label}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {q.options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setAnswers({ ...answers, [q.id]: opt.value })}
                  style={{
                    padding: '12px 16px',
                    fontSize: '13px',
                    textAlign: 'left',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: answers[q.id] === opt.value ? 'var(--green)' : 'var(--rule)',
                    background: answers[q.id] === opt.value ? 'rgba(26, 122, 74, 0.05)' : 'transparent',
                    color: answers[q.id] === opt.value ? 'var(--green)' : 'var(--ink)',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontFamily: 'var(--mono)'
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {recommendation ? (
        <div style={{ background: 'var(--surface-deep)', borderRadius: '16px', padding: '32px', textAlign: 'center', border: '1px solid var(--green)', animation: 'slideUp 0.4s ease-out' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--green)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.1em' }}>Recommended Tier</div>
          <h3 style={{ fontSize: '28px', color: 'var(--ink)', marginBottom: '12px' }}>Tier {recommendation.id === 'dominate' ? '3' : recommendation.id === 'grow' ? '2' : '1'} &mdash; {recommendation.name}</h3>
          <p style={{ color: 'var(--ink-muted)', fontSize: '15px', maxWidth: '480px', margin: '0 auto 24px', lineHeight: '1.6' }}>{recommendation.description}</p>
          <a href="/free-audit.html" className="btn btn-hero" style={{ background: 'var(--green)', color: '#fff', padding: '12px 32px', borderRadius: '4px', textDecoration: 'none', fontWeight: '700', fontSize: '14px', display: 'inline-block' }}>Get Started with {recommendation.name} &rarr;</a>
        </div>
      ) : (
        <div style={{ textAlign: 'center', color: 'var(--ink-muted)', fontSize: '14px', fontStyle: 'italic' }}>
          Answer the questions above to see our recommendation.
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default TierSelector;
