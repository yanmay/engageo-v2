import React, { useEffect } from 'react';
import { X, Calendar, Check } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const CALENDLY_URL =
  'https://calendly.com/engageoagency/30min?embed_type=Inline&hide_gdpr_banner=1&background_color=ffffff&text_color=0B1221&primary_color=3D5AFE';

export default function AuditModal() {
  const { open, closeModal } = useModal();

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={closeModal}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-obsidian/60 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative w-full max-w-5xl bg-white border-2 border-obsidian retro-shadow-amber flex flex-col md:flex-row h-[90svh] md:h-auto"
        style={{ md: { maxHeight: '90vh', minHeight: '600px' } }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 flex h-[3px] z-20 pointer-events-none">
          <div style={{ flex: 1, background: '#1E1A16' }} />
          <div style={{ flex: 1, background: '#3D5AFE' }} />
          <div style={{ flex: 1, background: '#E8552A' }} />
          <div style={{ flex: 1, background: '#C97B2A' }} />
        </div>

        {/* Close Button (Absolute Top Right) */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center bg-white border-2 border-obsidian retro-shadow hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
        >
          <X size={16} className="text-obsidian" strokeWidth={3} />
        </button>

        {/* Left Column (Value Prop) - Hidden on mobile for compactness */}
        <div className="hidden md:flex w-5/12 bg-canvas border-r-2 border-obsidian p-8 lg:p-12 flex-col justify-between shrink-0 overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 mb-10">
              <span className="font-sans text-xl font-bold tracking-tighter text-obsidian">Engageo</span>
              <span className="w-1.5 h-1.5 bg-brand pulse-dot" />
            </div>

            <h2 className="font-sans text-3xl lg:text-4xl font-bold text-obsidian tracking-tighter leading-tight mb-4">
              Stop losing <br />
              <span className="text-brand">₹3L+ every month.</span>
            </h2>
            
            <p className="text-subtle text-[13px] leading-relaxed mb-8">
              Book your free 30-minute strategy session. We'll audit your current front-desk performance and map out exactly how Engageo can recover your missed patient revenue.
            </p>

            <div className="space-y-4">
              {[
                'Deep dive into your missed call metrics',
                'Custom ROI & recovery projection',
                'Live demonstration of the AI system',
                'Zero commitment required'
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 border-2 border-obsidian bg-white flex items-center justify-center mt-0.5">
                    <Check size={12} strokeWidth={3} className="text-obsidian" />
                  </div>
                  <span className="font-sans text-xs font-bold text-obsidian mt-1">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t-2 border-obsidian/10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brand text-white border-2 border-obsidian flex items-center justify-center shrink-0">
                <span className="font-sans text-xs font-bold">SM</span>
              </div>
              <p className="font-sans text-[11px] font-bold text-obsidian leading-snug">
                "We went from missing 20% of calls to recovering ₹2.4L in the first month."
                <span className="block mt-1 text-brand">— Dr. Suresh Mehta</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Column (Calendly) */}
        <div className="w-full md:w-7/12 flex-1 relative bg-white flex flex-col">
          <iframe
            src={CALENDLY_URL}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Book a call with Engageo"
            style={{ minHeight: '600px', display: 'block' }}
          />
        </div>
      </div>
    </div>
  );
}
