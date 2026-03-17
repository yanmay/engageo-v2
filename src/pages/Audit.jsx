import React, { useState, useEffect, useRef } from 'react';
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
    <div ref={containerRef} className="w-full flex-1 flex flex-col items-center bg-[var(--command-black)] min-h-screen">
      

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
                    className="font-sans font-medium bg-white/5 text-white/40 rounded-full px-4 py-1.5 text-xs"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Headlines */}
              <h1 
                className="font-sans font-bold tracking-tighter mb-4 leading-tight reveal-audit text-white"
                style={{ fontSize: 'clamp(32px, 5vw, 42px)' }}
              >
                See Exactly What <br />
                <span className="text-[var(--recovery-blue)]">Your Clinic Is Losing.</span>
              </h1>
              <p 
                className="font-sans font-medium mb-[40px] leading-[1.6] reveal-audit text-lg text-white/40"
              >
                In 24 hours, we'll show you the exact number of calls your clinic missed this month and what they cost you. No pitch. No pressure. Just the number.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-[20px] reveal-audit">
                
                {/* Field 1: Full Name */}
                <div className="flex flex-col">
                  <label 
                    htmlFor="name" 
                    className="font-data uppercase tracking-widest text-white/30 text-[11px] font-bold mb-2"
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
                    className="font-data uppercase tracking-widest text-white/30 text-[11px] font-bold mb-2"
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
                    className="font-data uppercase tracking-widest text-white/30 text-[11px] font-bold mb-2"
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
                    className="font-data uppercase tracking-widest text-white/30 text-[11px] font-bold mb-2"
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
                    className="font-data uppercase tracking-widest text-white/30 text-[11px] font-bold mb-2"
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
                    className="group w-full h-[56px] bg-[var(--recovery-blue)] text-white text-[15px] font-bold rounded-full tracking-[0.05em] uppercase transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99] shadow-2xl shadow-blue-500/20"
                  >
                    Verify Revenue Leakage →
                  </button>
                  <p 
                    className="font-sans text-white/20 text-[12px] text-center mt-4 leading-relaxed"
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
               <a href="/" className="text-[var(--recovery-blue)] font-bold tracking-widest text-xs uppercase hover:underline">
                 Return to Home Page
               </a>
            </div>
          )}
        </div>

        {/* ── RIGHT COLUMN: WHAT YOU'LL RECEIVE (Desktop Only) ── */}
        <div className="hidden md:flex flex-col w-full flex-1 reveal-audit">
          <div 
            className="w-full flex flex-col border border-white/10 rounded-2xl p-6 bg-white/[0.02]"
          >
            {/* Card Label */}
            <div 
              className="font-mono font-bold mb-6 uppercase text-white/20 text-[11px] tracking-[2px]"
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
                className="font-sans mb-3 flex items-center gap-1.5 text-[var(--signal-green)] text-[13px] font-semibold"
              >
                🟢 Engageo
              </div>
              <div 
                className="font-sans whitespace-pre-wrap mb-2 text-white/80 text-[14px] leading-relaxed"
              >
                {`Hi Dr. Sharma! We've reviewed your clinic's missed call data.

Estimated missed calls last month: 43
Estimated revenue impact: ₹3,44,000

Want to see how we recover this?
Here's a 12-min slot: [calendly link]`}
              </div>
              <div 
                className="font-sans font-medium w-full text-right uppercase text-white/20 text-[11px]"
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
                  <span className="shrink-0 mt-0.5 text-[var(--signal-green)]">✓</span>
                  <span className="font-sans font-medium text-white/40 text-[14px]">
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
          border: 1.5px solid rgba(255,255,255,0.1);
          border-radius: 4px;
          padding: 0 14px;
          font-size: 16px; 
          color: white;
          background-color: rgba(255,255,255,0.05);
          outline: none;
          transition: all 0.2s ease;
        }
        .audit-input:focus {
          border-color: var(--recovery-blue);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
        }
        .audit-input::placeholder {
          color: rgba(255,255,255,0.2);
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
}
