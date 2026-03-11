import React, { useState, useEffect } from 'react';
import { X, Check, Phone, QrCode } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export default function AuditModal() {
  const { open, closeModal } = useModal();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      setIsSubmitted(false);
      setPhoneNumber('');
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length >= 10) {
      setIsSubmitted(true);
      // Logic for demo call trigger would go here
      console.log("Demo call requested for:", phoneNumber);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-12"
      onClick={closeModal}
    >
      {/* Backdrop with heavy blur */}
      <div className="absolute inset-0 bg-[var(--command-black)]/60 backdrop-blur-xl transition-all duration-500" />

      {/* Modal Container */}
      <div
        className="relative w-full max-w-5xl bg-[var(--command-black)] border border-white/10 rounded-premium overflow-hidden shadow-[0_0_80px_rgba(37,99,235,0.15)] flex flex-col md:flex-row min-h-[500px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle noise background */}
        <div className="absolute inset-0 noise-overlay opacity-20 pointer-events-none" />
        
        {/* Left Column: WhatsApp QR Demo */}
        <div className="w-full md:w-5/12 border-b md:border-b-0 md:border-r border-white/5 p-8 md:p-12 flex flex-col justify-between relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-12">
               <span className="font-sans text-xl font-bold tracking-tighter text-white uppercase">Engageo</span>
               <div className="w-1.5 h-1.5 bg-[var(--recovery-blue)] rounded-full pulse-dot" />
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tighter leading-tight mb-6">
              Experience the <br />
              <span className="text-[var(--recovery-blue)]">Recovery Engine.</span>
            </h2>

            <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-sm">
              Scan the code to try our WhatsApp retention flow, or enter your number to receive an 8-second AI callback.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <div className="w-40 h-40 bg-white p-3 rounded-2xl mb-4 relative group">
               <div className="w-full h-full flex items-center justify-center border-2 border-[var(--command-black)]/5 rounded-xl">
                  <QrCode size={100} className="text-[var(--command-black)]" />
               </div>
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-2xl pointer-events-none">
                  <span className="font-data text-[10px] font-bold text-[var(--recovery-blue)] tracking-widest text-center px-4">WA.ME/DEMO</span>
               </div>
            </div>
            <span className="font-data text-[10px] text-white/30 uppercase tracking-[0.2em]">Scan for WhatsApp Flow</span>
          </div>
        </div>

        {/* Right Column: AI Call Demo Form */}
        <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center relative z-10">
          <button
            onClick={closeModal}
            className="absolute top-8 right-8 text-white/20 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          {!isSubmitted ? (
            <div className="max-w-md mx-auto w-full">
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-8 h-8 rounded-full bg-[var(--recovery-blue)]/10 flex items-center justify-center border border-[var(--recovery-blue)]/20">
                    <Phone size={14} className="text-[var(--recovery-blue)]" />
                 </div>
                 <span className="font-data text-[10px] text-[var(--recovery-blue)] uppercase tracking-widest font-bold">Live AI Callback</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl text-white font-bold tracking-tight mb-8">
                Send a demo call to <br />
                <span className="text-white/40">your phone right now.</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-premium px-8 py-5 text-white font-sans text-lg focus:outline-none focus:border-[var(--recovery-blue)]/50 focus:bg-white/[0.08] transition-all"
                    required
                  />
                  {phoneNumber.length >= 10 && (
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[var(--signal-green)] animate-fade-in">
                      <Check size={20} />
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={phoneNumber.length < 10}
                  className={`w-full py-5 rounded-full font-bold text-sm tracking-[0.2em] uppercase transition-all duration-500 shadow-2xl ${
                    phoneNumber.length >= 10 
                      ? 'bg-[var(--recovery-blue)] text-white shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98]' 
                      : 'bg-white/10 text-white/20 cursor-not-allowed'
                  }`}
                >
                  Send Me The Demo →
                </button>

                <p className="text-[10px] text-white/20 leading-relaxed text-center px-4">
                  By submitting, you consent to receive a demo callback and WhatsApp message from Engageo. Your data is handled per DPDP Act 2023. Reply STOP to opt out.
                </p>
              </form>
            </div>
          ) : (
            <div className="max-w-md mx-auto w-full text-center py-12 animate-fade-in">
               <div className="w-20 h-20 bg-[var(--signal-green)]/10 border border-[var(--signal-green)]/20 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                  <Check size={40} className="text-[var(--signal-green)]" />
                  <div className="absolute inset-0 rounded-full bg-[var(--signal-green)]/20 animate-ping opacity-20" />
               </div>
               <h3 className="text-3xl text-white font-bold tracking-tight mb-4">Connecting...</h3>
               <p className="text-white/40 text-lg leading-relaxed mb-10">
                  Our system is initiating the callback. Please have your phone ready — it should ring in less than 8 seconds.
               </p>
               <button 
                onClick={closeModal}
                className="text-[var(--recovery-blue)] font-bold tracking-widest text-xs uppercase hover:underline"
               >
                 Return to Home
               </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

