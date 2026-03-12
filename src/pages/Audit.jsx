import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Check } from 'lucide-react';

export default function Audit() {
  const [formData, setFormData] = useState({
    name: '',
    clinicName: '',
    city: '',
    specialty: '',
    whatsapp: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        gsap.from(".reveal-audit", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        });
    }, containerRef);
    return () => ctx.revert();
  }, [isSubmitted]); // Re-run animation on state change

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Audit Form Submitted:", formData);
    
    // Optimistically show success but keep loading state if needed
    // For this cinematic UI, we go straight to success view and fire the webhook in background
    setIsSubmitted(true);
    
    try {
      await fetch("https://primary-production-47c3.up.railway.app/webhook/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "Audit Page",
          timestamp: new Date().toISOString()
        })
      });
    } catch (err) {
      console.error("Webhook submission failed:", err);
    }
  };

  return (
    <div ref={containerRef} className="w-full flex-1 flex flex-col items-center" style={{ backgroundColor: 'var(--clinic-white)', minHeight: '100vh' }}>
      
      {/* Isolated Navbar (Logo Only) */}
      <header className="w-full flex items-center px-6 md:px-12 lg:px-20 h-[72px]">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-sans font-bold text-xl tracking-tight" style={{ color: 'var(--command-black)' }}>
            Engageo
          </span>
          <div 
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
        
        {/* ── LEFT COLUMN: THE FORM ── */}
        <div className="w-full md:w-[560px] flex flex-col shrink-0">
          
          {!isSubmitted ? (
            <>
              {/* Trust Signal Badges */}
              <div className="flex flex-row flex-wrap items-center gap-[8px] mb-8 reveal-audit">
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
                className="font-sans font-bold tracking-tighter mb-4 leading-tight reveal-audit"
                style={{ color: 'var(--clinic-ink)', fontSize: 'clamp(32px, 5vw, 42px)' }}
              >
                See Exactly What <br />
                <span className="text-[var(--recovery-blue)]">Your Clinic Is Losing.</span>
              </h1>
              <p 
                className="font-sans font-medium mb-[40px] leading-[1.6] reveal-audit text-lg"
                style={{ color: 'var(--clinic-slate)' }}
              >
                In 24 hours, we'll show you the exact number of calls your clinic missed this month and what they cost you. No pitch. No pressure. Just the number.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-[20px] reveal-audit">
                
                {/* Field 1: Full Name */}
                <div className="flex flex-col">
                  <label 
                    htmlFor="name" 
                    className="font-data uppercase tracking-widest" 
                    style={{ color: 'var(--clinic-slate)', fontSize: '11px', fontWeight: 700, marginBottom: '8px' }}
                  >
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Dr. Rohan Sharma"
                    required
                    className="audit-input"
                  />
                </div>

                {/* Field 2: Clinic Name */}
                <div className="flex flex-col">
                  <label 
                    htmlFor="clinicName" 
                    className="font-data uppercase tracking-widest" 
                    style={{ color: 'var(--clinic-slate)', fontSize: '11px', fontWeight: 700, marginBottom: '8px' }}
                  >
                    Clinic Name
                  </label>
                  <input 
                    type="text" 
                    id="clinicName"
                    name="clinicName"
                    value={formData.clinicName}
                    onChange={handleChange}
                    placeholder="e.g. Apex Hair Transplant"
                    required
                    className="audit-input"
                  />
                </div>

                {/* Field 2.5: City */}
                <div className="flex flex-col">
                  <label 
                    htmlFor="city" 
                    className="font-data uppercase tracking-widest" 
                    style={{ color: 'var(--clinic-slate)', fontSize: '11px', fontWeight: 700, marginBottom: '8px' }}
                  >
                    City
                  </label>
                  <input 
                    type="text" 
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Delhi"
                    required
                    className="audit-input"
                  />
                </div>

                {/* Field 3: Specialty */}
                <div className="flex flex-col">
                  <label 
                    htmlFor="specialty" 
                    className="font-data uppercase tracking-widest" 
                    style={{ color: 'var(--clinic-slate)', fontSize: '11px', fontWeight: 700, marginBottom: '8px' }}
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
                    style={{ appearance: 'none' }}
                  >
                    <option value="" disabled>Select your specialty</option>
                    <option value="Hair Transplant">Hair Transplant</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Dermatology & Laser">Dermatology & Laser</option>
                    <option value="Fertility & IVF">Fertility & IVF</option>
                    <option value="Other High-Ticket Specialty">Other High-Ticket Specialty</option>
                  </select>
                </div>

                {/* Field 4: WhatsApp */}
                <div className="flex flex-col mb-4">
                  <label 
                    htmlFor="whatsapp" 
                    className="font-data uppercase tracking-widest" 
                    style={{ color: 'var(--clinic-slate)', fontSize: '11px', fontWeight: 700, marginBottom: '8px' }}
                  >
                    WhatsApp Number (Indian)
                  </label>
                  <input 
                    type="tel" 
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="+91 91769 00000"
                    required
                    className="audit-input"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col mt-2">
                  <button 
                    type="submit"
                    className="group flex items-center justify-center font-sans transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                    style={{
                      width: '100%',
                      height: '56px',
                      backgroundColor: 'var(--recovery-blue)',
                      color: 'white',
                      fontSize: '15px',
                      fontWeight: 700,
                      borderRadius: '4px',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase'
                    }}
                  >
                    Verify Revenue Leakage →
                  </button>
                  <p 
                    className="font-sans"
                    style={{ 
                      color: 'var(--clinic-stone)', 
                      fontSize: '12px', 
                      textAlign: 'center', 
                      marginTop: '16px',
                      lineHeight: '1.5'
                    }}
                  >
                    We respond within 24 hours on WhatsApp.<br /> Your data is processed per DPDP Act 2023 residency requirements.
                  </p>
                </div>
              </form>
            </>
          ) : (
            <div className="reveal-audit pt-12">
               <div className="w-20 h-20 bg-[var(--signal-green)]/10 border border-[var(--signal-green)]/20 rounded-full flex items-center justify-center mb-8">
                  <div className="w-10 h-10 bg-[var(--signal-green)] rounded-full flex items-center justify-center">
                    <Check size={24} className="text-white" />
                  </div>
               </div>
               <h2 className="text-4xl md:text-5xl font-bold text-[var(--clinic-ink)] tracking-tighter mb-6 leading-tight">
                 Audit Request <br />
                 <span className="text-[var(--signal-green)]">Received.</span>
               </h2>
               <p className="text-[var(--clinic-slate)] text-lg leading-relaxed mb-10 max-w-sm font-medium">
                  We've received your request for <span className="text-[var(--clinic-ink)] font-bold">{formData.clinicName}</span>. Our team will WhatsApp you within 24 hours with your clinic's revenue leakage analysis.
               </p>
               <Link to="/" className="text-[var(--recovery-blue)] font-bold tracking-widest text-xs uppercase hover:underline">
                 Return to Home Page
               </Link>
            </div>
          )}
        </div>

        {/* ── RIGHT COLUMN: WHAT YOU'LL RECEIVE (Desktop Only) ── */}
        <div className="hidden md:flex flex-col w-full flex-1 reveal-audit">
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
