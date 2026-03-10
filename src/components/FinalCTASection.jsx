import React from 'react';
import { Link } from 'react-router-dom';

export default function FinalCTASection() {
  return (
    <section
      className="w-full flex justify-center py-[48px] md:py-[80px]"
      style={{ backgroundColor: 'var(--surface)' }}
    >
      <div className="w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center">

        <h2
          className="font-sans font-bold leading-tight mb-4 text-[28px] md:text-[40px]"
          style={{ color: 'var(--clinic-ink)' }}
        >
          Your next 15 patients are already calling.
        </h2>

        <p
          className="font-sans font-medium mb-10 text-[18px]"
          style={{ color: 'var(--clinic-slate)' }}
        >
          Let's make sure none of them go unanswered.
        </p>

        <Link
          to="/audit"
          className="w-full md:w-auto font-sans font-bold transition-transform active:scale-[0.98] mb-6"
          style={{
            backgroundColor: 'var(--green)',
            color: 'var(--parchment)',
            borderRadius: '9999px',
            padding: '16px 40px',
            fontSize: '18px'
          }}
        >
          Book a 12-Minute Audit Call — Free →
        </Link>

        <div
          className="flex flex-col md:flex-row items-center gap-3 md:gap-4 font-sans font-medium"
          style={{ color: 'var(--clinic-slate)', fontSize: '13px' }}
        >
          <span>✓ No credit card</span>
          <span className="hidden md:inline">|</span>
          <span>✓ 24hr WhatsApp response</span>
          <span className="hidden md:inline">|</span>
          <span>✓ 15-booking guarantee</span>
        </div>

      </div>
    </section>
  );
}
