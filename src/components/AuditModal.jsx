import React, { useEffect } from 'react';
import { X, Calendar } from 'lucide-react';
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
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-[0_32px_80px_-12px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col"
        style={{ maxHeight: '90vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand to-brand/40 z-10" />

        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center">
              <Calendar size={14} className="text-brand" />
            </div>
            <div>
              <p className="font-sans text-sm font-bold text-obsidian tracking-tight">Book Your Free Strategy Call</p>
              <p className="font-mono text-[9px] text-subtle uppercase tracking-widest">30 min · No commitment · Free</p>
            </div>
          </div>
          <button
            onClick={closeModal}
            className="w-8 h-8 rounded-full bg-canvas hover:bg-border flex items-center justify-center transition-colors"
          >
            <X size={14} className="text-subtle" />
          </button>
        </div>

        {/* Calendly inline embed */}
        <div className="flex-1 overflow-hidden" style={{ minHeight: '580px' }}>
          <iframe
            src={CALENDLY_URL}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Book a call with Engageo"
            style={{ border: 'none', minHeight: '580px' }}
          />
        </div>
      </div>
    </div>
  );
}
