import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[var(--command-black)] pt-40 pb-24 px-8 md:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="font-data text-[10px] text-[var(--recovery-blue)] font-bold tracking-[0.3em] uppercase mb-8">Legal_Documentation_v1.0</div>
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-16">Privacy Policy.</h1>
        
        <div className="space-y-12 text-white/60 text-lg leading-relaxed font-medium">
          <section>
            <h2 className="text-2xl text-white font-bold mb-6 tracking-tight">Data Collection & Interception</h2>
            <p>
              Engageo ("we," "us," or "our") operates as an autonomous recovery node. We collect phone call metadata, patient contact information, and interaction history solely for the purpose of missed-call recovery and clinical appointment scheduling.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl text-white font-bold mb-6 tracking-tight">Sovereign Data Protection</h2>
            <p>
              Your clinic's data is sovereign. We do not sell, trade, or otherwise transfer your patient data to outside parties. All data is encrypted at rest and in transit using industry-standard protocols.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white font-bold mb-6 tracking-tight">AI Interaction Logs</h2>
            <p>
              Calls handled by our AI agents are recorded and transcribed for quality assurance and training purposes. These logs are stored securely and are accessible only to authorized clinic personnel via your dashboard.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
