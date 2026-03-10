import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Audit() {
  const [formData, setFormData] = useState({
    name: '',
    clinic: '',
    specialty: '',
    whatsapp: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Audit Form Submitted:", formData);
    // Real endpoint connection logic to go here separately
  };

  return (
    <div className="w-full flex-1 flex flex-col items-center" style={{ backgroundColor: 'var(--clinic-white)', minHeight: '100vh' }}>
      
      {/* Isolated Navbar (Logo Only) */}
      <header className="w-full flex items-center px-6 md:px-12 lg:px-20 h-[72px]">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-sans font-bold text-xl tracking-tight" style={{ color: 'var(--command-black)' }}>
            Engageo
          </span>
          <span 
            className="rounded-full pulse-dot shrink-0" 
            style={{ 
              width: '8px', 
              height: '8px', 
              backgroundColor: 'var(--signal-green)'
            }}
          />
        </Link>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-[1100px] mx-auto px-6 py-[60px] flex flex-col md:flex-row gap-[48px] items-start">
        
        {/* ── LEFT COLUMN: THE FORM (560px max) ── */}
        <div className="w-full md:w-[560px] flex flex-col shrink-0">
          
          {/* Trust Signal Badges */}
          <div className="flex flex-row flex-wrap items-center gap-[8px] mb-8">
            {["✓ No credit card", "✓ 24hr response", "✓ Zero commitment"].map((badge, idx) => (
              <span 
                key={idx}
                className="font-sans font-medium"
                style={{ 
                  backgroundColor: 'var(--clinic-mist)', 
                  color: 'var(--clinic-slate)',
                  borderRadius: '20px',
                  padding: '6px 14px',
                  fontSize: '12px'
                }}
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Headlines */}
          <h1 
            className="font-sans font-bold tracking-tighter mb-4 leading-tight"
            style={{ color: 'var(--clinic-ink)', fontSize: 'clamp(26px, 4vw, 36px)' }}
          >
            See Exactly What Your Clinic Is Losing.
          </h1>
          <p 
            className="font-sans font-medium mb-[40px] leading-[1.6]"
            style={{ color: 'var(--clinic-slate)', fontSize: '16px' }}
          >
            In 24 hours, we'll show you the exact number of calls your clinic missed this month and what they cost you. No pitch. No pressure. Just the number.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-[20px]">
            
            {/* Field 1: Name */}
            <div className="flex flex-col">
              <label 
                htmlFor="name" 
                className="font-sans" 
                style={{ color: 'var(--clinic-slate)', fontSize: '13px', fontWeight: 500, marginBottom: '6px' }}
              >
                Your Name
              </label>
              <input 
                type="text" 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Dr. Sharma"
                required
                className="audit-input"
              />
            </div>

            {/* Field 2: Clinic & City */}
            <div className="flex flex-col">
              <label 
                htmlFor="clinic" 
                className="font-sans" 
                style={{ color: 'var(--clinic-slate)', fontSize: '13px', fontWeight: 500, marginBottom: '6px' }}
              >
                Clinic Name & City
              </label>
              <input 
                type="text" 
                id="clinic"
                name="clinic"
                value={formData.clinic}
                onChange={handleChange}
                placeholder="Smile Dental, Delhi"
                required
                className="audit-input"
              />
            </div>

            {/* Field 3: Specialty */}
            <div className="flex flex-col">
              <label 
                htmlFor="specialty" 
                className="font-sans" 
                style={{ color: 'var(--clinic-slate)', fontSize: '13px', fontWeight: 500, marginBottom: '6px' }}
              >
                Specialty
              </label>
              <select 
                id="specialty"
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
                required
                className="audit-input"
                style={{ appearance: 'none' }} // Ensure cross-browser consistency
              >
                <option value="" disabled>Select your specialty</option>
                <option value="Hair Transplant">Hair Transplant</option>
                <option value="Dental & Dermatology">Dental & Dermatology</option>
                <option value="Fertility & IVF">Fertility & IVF</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Field 4: WhatsApp */}
            <div className="flex flex-col mb-4">
              <label 
                htmlFor="whatsapp" 
                className="font-sans" 
                style={{ color: 'var(--clinic-slate)', fontSize: '13px', fontWeight: 500, marginBottom: '6px' }}
              >
                WhatsApp Number
              </label>
              <input 
                type="tel" 
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                required
                className="audit-input"
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col mt-2">
              <button 
                type="submit"
                className="group flex items-center justify-center font-sans transition-colors cursor-pointer"
                style={{
                  width: '100%',
                  height: '52px',
                  backgroundColor: 'var(--recovery-blue)',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 600,
                  borderRadius: '4px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--recovery-blue-deep)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--recovery-blue)'}
              >
                Send My Audit Request →
              </button>
              <p 
                className="font-sans"
                style={{ 
                  color: 'var(--clinic-stone)', 
                  fontSize: '12px', 
                  textAlign: 'center', 
                  marginTop: '12px',
                  lineHeight: '1.4'
                }}
              >
                We respond within 24 hours on WhatsApp.<br className="md:hidden" /> No spam. No cold calls unless you ask.
              </p>
            </div>

          </form>
        </div>

        {/* ── RIGHT COLUMN: WHAT YOU'LL RECEIVE (Desktop Only) ── */}
        <div className="hidden md:flex flex-col w-full flex-1">
          <div 
            className="w-full flex flex-col"
            style={{ 
              border: '1px solid var(--clinic-silver)', 
              borderRadius: '8px', 
              padding: '24px' 
            }}
          >
            {/* Card Label */}
            <div 
              className="font-mono font-bold mb-6 uppercase"
              style={{ color: 'var(--clinic-stone)', fontSize: '11px', letterSpacing: '2px' }}
            >
              WHAT YOU'LL RECEIVE
            </div>

            {/* WhatsApp Mockup */}
            <div 
              className="w-full flex flex-col"
              style={{
                backgroundColor: 'var(--signal-green-tint)',
                borderRadius: '8px',
                padding: '16px'
              }}
            >
              <div 
                className="font-sans mb-3 flex items-center gap-1.5"
                style={{ color: 'var(--signal-green)', fontSize: '13px', fontWeight: 600 }}
              >
                🟢 Engageo
              </div>
              <div 
                className="font-sans whitespace-pre-wrap mb-2"
                style={{ color: 'var(--clinic-ink)', fontSize: '14px', lineHeight: '1.6' }}
              >
                {`Hi Dr. Sharma! We've reviewed your clinic's missed call data.

Estimated missed calls last month: 43
Estimated revenue impact: ₹3,44,000

Want to see how we recover this?
Here's a 12-min slot: [calendly link]`}
              </div>
              <div 
                className="font-sans font-medium w-full text-right uppercase"
                style={{ color: 'var(--clinic-stone)', fontSize: '11px' }}
              >
                Delivered ✓✓
              </div>
            </div>

            {/* Bullet Points */}
            <div className="flex flex-col gap-[8px] mt-[24px]">
              {[
                "Sent to your WhatsApp within 24 hours",
                "Your real numbers, not generic estimates",
                "No sales call unless you ask for one"
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="shrink-0 mt-0.5" style={{ color: 'var(--recovered-green)' }}>✓</span>
                  <span className="font-sans font-medium" style={{ color: 'var(--clinic-slate)', fontSize: '14px' }}>
                    {bullet}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </main>

      {/* Embedded CSS for custom input styling and states */}
      <style>{`
        .audit-input {
          width: 100%;
          height: 48px;
          border: 1.5px solid var(--clinic-silver);
          border-radius: 4px;
          padding: 0 14px;
          font-size: 16px; 
          color: var(--clinic-ink);
          background-color: white;
          outline: none;
          transition: all 0.2s ease;
        }
        .audit-input:focus {
          border-color: var(--recovery-blue);
          box-shadow: 0 0 0 3px var(--hover-glow);
        }
        .audit-input::placeholder {
          color: var(--clinic-stone);
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
}
