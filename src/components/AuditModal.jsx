import React, { useState, useEffect } from 'react';
import { X, Check, Phone, QrCode } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export default function AuditModal() {
  const { open, closeModal } = useModal();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        setPhoneNumber('');
      }, 0);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phoneNumber.length >= 10) {
      setIsSubmitted(true);
      try {
        await fetch("https://primary-production-47c3.up.railway.app/webhook/audit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            phoneNumber,
            source: "Demo Modal",
            timestamp: new Date().toISOString()
          })
        });
      } catch (err) {
        console.error("Demo webhook submission failed:", err);
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-12"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-2xl transition-all duration-500" />

      <div
        className="relative w-full max-w-5xl bg-black border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(37,99,235,0.2)] flex flex-col md:row min-h-[600px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cloud Watch Grid Background */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="flex flex-col md:flex-row w-full h-full relative z-10">
          {/* Left Column */}
          <div className="w-full md:w-5/12 border-b md:border-b-0 md:border-r border-white/10 p-10 md:p-14 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-16">
                <span className="font-sans text-xl font-bold tracking-tighter text-white">Engageo</span>
                <div className="px-2 py-0.5 rounded-full border border-[var(--recovery-blue)]/30 text-[8px] font-data text-[var(--recovery-blue)] tracking-widest whitespace-nowrap">v2.1_Stable</div>
              </div>

              <div className="mb-10">
                <h2 id="modal-title" className="text-4xl lg:text-5xl font-bold text-white tracking-tighter leading-tight italic font-drama">
                  Experience the <br /> recovery engine.
                </h2>
              </div>

              <p className="text-white/60 text-sm leading-relaxed mb-10 max-w-sm font-medium">
                Scan the code to try our WhatsApp retention flow, or enter your number to receive an <span className="text-white tabular-nums">8-second</span> AI callback.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="w-44 h-44 bg-white p-4 rounded-[2rem] mb-4 relative group shadow-2xl">
                <div className="w-full h-full flex items-center justify-center border-2 border-black/5 rounded-[1.5rem]">
                  <QrCode size={110} className="text-black" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 rounded-[2rem] pointer-events-none">
                  <span className="font-data text-[10px] font-bold text-[var(--recovery-blue)] tracking-widest text-center px-4">Begin_session</span>
                </div>
              </div>
               <span className="font-data text-[10px] text-white/50 tracking-widest font-bold uppercase transition-all">Node_demo_WA_v4</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-7/12 p-10 md:p-14 flex flex-col justify-center relative">
            <button
              onClick={closeModal}
               className="absolute top-10 right-10 text-white/40 hover:text-white transition-colors"
            >
              <X size={28} />
            </button>

            {!isSubmitted ? (
              <div className="max-w-md mx-auto w-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--recovery-blue)]/10 flex items-center justify-center border border-[var(--recovery-blue)]/20 shadow-[0_0_15px_rgba(37,99,235,0.1)]">
                    <Phone size={16} className="text-[var(--recovery-blue)]" />
                  </div>
                  <span className="font-data text-[10px] text-[var(--recovery-blue)] uppercase tracking-[0.3em] font-bold">System_Outbound_Active</span>
                </div>

                <h3 className="text-3xl text-white font-bold tracking-tight mb-10 leading-tight">
                  Send a demo call to <br />
                  <span className="text-white/30 italic font-drama">your phone right now.</span>
                </h3>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--recovery-blue)] to-transparent opacity-10 group-focus-within:opacity-30 transition rounded-3xl blur-sm" />
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="relative w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-6 text-white font-sans text-xl focus:outline-none focus:border-[var(--recovery-blue)]/50 focus:bg-white/[0.08] transition-all shadow-inner"
                      required
                    />
                    {phoneNumber.length >= 10 && (
                      <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[var(--signal-green)]">
                        <Check size={24} className="stroke-[3px]" />
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={phoneNumber.length < 10}
                    className={`w-full py-6 rounded-full font-bold text-xs tracking-[0.3em] uppercase transition-all duration-700 relative overflow-hidden group ${phoneNumber.length >= 10
                        ? 'bg-[var(--recovery-blue)] text-white shadow-[0_20px_40px_rgba(37,99,235,0.3)]'
                        : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/5'
                      }`}
                  >
                    <span className="relative z-10">Initialize Recovery Sequence →</span>
                    {phoneNumber.length >= 10 && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    )}
                  </button>

                   <p className="text-[9px] text-white/40 leading-relaxed text-center px-6 font-medium">
                    By submitting, you consent to receive a demo callback and WhatsApp message from Engageo. Your data is handled per DPDP Act 2023. Reply STOP to opt out.
                  </p>
                </form>
              </div>
            ) : (
              <div className="max-w-md mx-auto w-full text-center py-16">
                <div className="w-24 h-24 bg-[var(--signal-green)]/10 border border-[var(--signal-green)]/20 rounded-full flex items-center justify-center mx-auto mb-10 relative">
                  <Check size={48} className="text-[var(--signal-green)]" />
                  <div className="absolute inset-0 rounded-full bg-[var(--signal-green)]/20 animate-ping opacity-30" />
                </div>
                <h3 className="text-4xl text-white font-bold tracking-tight mb-6">Connecting Node...</h3>
                 <p className="text-white/65 text-xl leading-relaxed mb-12 font-medium">
                  Our system is initiating the callback. Please have your phone ready — it should ring in less than <span className="text-white">8 seconds.</span>
                </p>
                <button
                  onClick={closeModal}
                  className="font-data text-[10px] text-[var(--recovery-blue)] font-bold tracking-[0.3em] uppercase hover:tracking-[0.4em] transition-all"
                >
                  [ Exit_Diagnostic ]
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
