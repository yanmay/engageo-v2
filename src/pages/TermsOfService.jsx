import React from 'react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[var(--command-black)] pt-40 pb-24 px-8 md:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="font-data text-[10px] text-[var(--recovery-blue)] font-bold tracking-[0.3em] uppercase mb-8">Service_Agreement_v1.0</div>
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-16">Terms of Service.</h1>
        
        <div className="space-y-12 text-white/60 text-lg leading-relaxed font-medium">
          <section>
            <h2 className="text-2xl text-white font-bold mb-6 tracking-tight">1. Infrastructure Provision</h2>
            <p>
              Engageo provides autonomous missed-call recovery services. By integrating our node, you authorize us to intercept missed calls and initiate recovery sequences via automated voice and messaging protocols.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl text-white font-bold mb-6 tracking-tight">2. Performance Guarantee</h2>
            <p>
              Our "Guarantee Shield" policy applies strictly to clinic partners who maintain active node status for at least 30 consecutive days. If the minimum booking threshold is not met, a full refund of the deployment fee will be issued.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white font-bold mb-6 tracking-tight">3. Data Ownership</h2>
            <p>
              The clinic retains full ownership of all patient and call data processed by Engageo. Engageo retains ownership of the underlying AI models, deployment architecture, and proprietary recovery logic.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
