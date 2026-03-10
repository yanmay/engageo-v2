import React from 'react';
import { Link } from 'react-router-dom';

export default function HomepagePricingTeaser() {
  return (
    <section
      id="pricing-preview"
      className="w-full flex justify-center py-[60px] md:py-[96px]"
      style={{ backgroundColor: 'var(--parchment)' }}
    >
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center">

        {/* Header */}
        <div
          className="font-mono uppercase font-bold mb-4 tracking-[2px] text-center"
          style={{
            color: 'var(--ink-muted)',
            fontSize: '11px'
          }}
        >
          INVESTMENT
        </div>
        <h2
          className="font-sans font-bold leading-tight mb-12 text-center text-[28px] md:text-[40px]"
          style={{ color: 'var(--ink)' }}
        >
          Three tiers. One guarantee.
        </h2>

        {/* 3 Rows Container */}
        <div className="w-full flex flex-col mb-8">

          {/* Row 1 */}
          <div
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-[20px] w-full"
            style={{ borderBottom: '1px solid var(--ink-faint)' }}
          >
            <div
              className="font-mono uppercase font-bold"
              style={{ color: 'var(--ink-muted)', fontSize: '11px', letterSpacing: '2px' }}
            >
              TIER 1 — RECOVER
            </div>
            <div
              className="font-sans font-bold"
              style={{ color: 'var(--ink)', fontSize: '18px' }}
            >
              ₹25,000/month
            </div>
          </div>

          {/* Row 2 */}
          <div
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-[20px] w-full"
            style={{ borderBottom: '1px solid var(--ink-faint)' }}
          >
            <div
              className="font-mono uppercase font-bold"
              style={{ color: 'var(--ink-muted)', fontSize: '11px', letterSpacing: '2px' }}
            >
              TIER 2 — GROW
            </div>
            <div
              className="font-sans font-bold"
              style={{ color: 'var(--ink)', fontSize: '18px' }}
            >
              ₹55,000/month + ad spend
            </div>
          </div>

          {/* Row 3 */}
          <div
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-[20px] w-full"
            style={{ borderBottom: '1px solid var(--ink-faint)' }}
          >
            <div className="flex items-center flex-wrap gap-2">
              <div
                className="font-mono uppercase font-bold"
                style={{ color: 'var(--ink-muted)', fontSize: '11px', letterSpacing: '2px' }}
              >
                TIER 3 — DOMINATE
              </div>
              <div
                className="font-mono uppercase font-bold"
                style={{
                  backgroundColor: 'var(--gold)',
                  color: 'var(--parchment)',
                  borderRadius: '2px',
                  padding: '2px 6px',
                  fontSize: '10px'
                }}
              >
                BY APPLICATION
              </div>
            </div>
            <div
              className="font-sans font-bold"
              style={{ color: 'var(--ink)', fontSize: '18px' }}
            >
              ₹1,20,000/month + ad spend
            </div>
          </div>

        </div>

        {/* Footer Texts */}
        <div
          className="font-sans font-medium text-center mb-6"
          style={{ color: 'var(--ink-muted)', fontSize: '13px', marginTop: '16px' }}
        >
          All tiers include the 15-booking guarantee.
        </div>

        <Link
          to="/pricing"
          className="font-sans font-bold transition-all hover:underline text-center"
          style={{
            color: 'var(--green)',
            textDecorationColor: 'var(--green)',
            fontSize: '15px'
          }}
        >
          See what's included in each tier →
        </Link>

      </div>
    </section>
  );
}
