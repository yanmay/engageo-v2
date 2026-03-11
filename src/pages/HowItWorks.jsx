import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Zap, Shield, Calendar, MessageSquare, Phone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TIMELINE_STEPS = [
  {
    num: "01",
    title: "Silent Loss",
    desc: "A patient calls your clinic. Your receptionist is on another line, or it's after hours. The call rings out. 23% of your ad spend just vanished.",
    accent: "text-red-500"
  },
  {
    num: "02",
    title: "Intent Identified",
    desc: "MSG91 detects the missed call within 5 seconds. A webhook fires directly into the Engageo engine, identifying the patient and their intent.",
    accent: "text-[var(--recovery-blue)]"
  },
  {
    num: "03",
    title: "AI Callback (8s)",
    desc: "Our Vapi-powered AI voice agent initiates an outbound call. In under 8 seconds, the patient's phone rings. Speed is the only factor in recovery.",
    accent: "text-[var(--recovery-blue)]"
  },
  {
    num: "04",
    title: "Natural Qualification",
    desc: "The agent speaks warm, professional Hinglish. It qualifies for specialty, urgency, and budget. The patient feels heard, not sold to.",
    accent: "text-[var(--recovery-blue)]"
  },
  {
    num: "05",
    title: "Automatic Booking",
    desc: "The agent reads your live Google Calendar. 2-3 slots are offered. The patient selects one. A calendar event is created instantly.",
    accent: "text-[var(--recovery-blue)]"
  },
  {
    num: "06",
    title: "WhatsApp Retention",
    desc: "WATI triggers a 4-step sequence: Confirmation, 24h reminder, Directions, and No-show recovery. Your patient is locked in.",
    accent: "text-[var(--signal-green)]"
  }
];

const VerticalTimeline = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".timeline-item");
      items.forEach((item, i) => {
        gsap.from(item, {
          y: 60,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="space-y-24 md:space-y-40 relative">
      {/* Central Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 md:-translate-x-1/2" />
      
      {TIMELINE_STEPS.map((step, i) => (
        <div key={i} className={`timeline-item relative flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}>
          {/* Dot */}
          <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[var(--recovery-blue)] md:-translate-x-1/2 z-10 shadow-[0_0_15px_var(--recovery-blue)]" />
          
          {/* Content */}
          <div className="flex-1 pl-12 md:pl-0 text-left md:text-right">
            <div className={`font-data text-[10px] tracking-widest uppercase mb-4 ${step.accent}`}>Phase_{step.num}</div>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tighter">{step.title}</h3>
            <p className="text-white/40 text-lg leading-relaxed max-w-md ml-auto mr-0 md:mr-0 md:ml-auto">
              {step.desc}
            </p>
          </div>
          
          {/* Visual Spacer */}
          <div className="flex-1 hidden md:block" />
        </div>
      ))}
    </div>
  );
};

export default function HowItWorks() {
  return (
    <div className="w-full bg-[var(--command-black)] noise-overlay min-h-screen pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-8 md:px-24">
        
        {/* Hero */}
        <div className="max-w-3xl mb-32">
          <div className="font-data text-[var(--recovery-blue)] text-xs tracking-[0.3em] uppercase mb-8">System Architecture</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-bold tracking-tight mb-8 leading-[0.9]">
            The 4-Minute <br />
            <span className="text-white/20">Recovery Protocol.</span>
          </h1>
          <p className="text-white/50 text-xl leading-relaxed max-w-xl">
            A six-layer automation stack that turns missed calls into confirmed bookings without your team lifting a finger. 100% autonomous. 100% compliant.
          </p>
        </div>

        {/* Timeline */}
        <VerticalTimeline />

        {/* Horizontal Workflow Table - Light Section as per PRD */}
        <section className="mt-64 bg-[var(--clinic-mist)] rounded-[3rem] p-12 overflow-hidden">
           <div className="max-w-5xl mx-auto">
              <div className="mb-12">
                 <h2 className="text-3xl font-bold text-[var(--command-black)] tracking-tight">The Execution Table</h2>
                 <p className="text-[var(--clinic-slate)] mt-2 font-medium">Sequential step-by-step logic breakdown.</p>
              </div>
              <div className="overflow-x-auto overflow-y-hidden custom-scrollbar pb-6">
                 <table className="w-full text-left font-data text-xs border-collapse">
                    <thead>
                       <tr className="bg-[var(--command-black)]/5 text-[var(--command-black)] uppercase tracking-widest font-bold border-b border-[var(--command-black)]/10">
                          <th className="py-6 px-10">Step</th>
                          <th className="py-6 px-10">Action</th>
                          <th className="py-6 px-10">System</th>
                          <th className="py-6 px-10">SLA</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--command-black)]/5 text-[var(--command-black)]/70">
                       {[
                          ["01", "Missed Call Detection", "MSG91 Domestic DID", "5.0s"],
                          ["02", "Autonomous Intercept", "Vapi / n8n Orchestrator", "8.0s"],
                          ["03", "Hinglish NLP Qualify", "Llama 3 / GPT-4o Mix", "90-180s"],
                          ["04", "Calendar Sync (Live)", "Google Calendar OAuth", "< 1.0s"],
                          ["05", "Booking Creation", "G-Suite API Interface", "< 1.0s"],
                          ["06", "WhatsApp Confirmation", "WATI / Meta API", "30.0s"],
                          ["07", "Staff Notified", "WATI Concierge", "30.0s"]
                       ].map(([step, action, system, sla]) => (
                          <tr key={step} className="hover:bg-[var(--command-black)]/5 transition-colors">
                             <td className="py-8 px-10 font-bold text-[var(--recovery-blue)]">{step}</td>
                             <td className="py-8 px-10 text-[var(--command-black)] font-bold text-sm">{action}</td>
                             <td className="py-8 px-10 font-bold">{system}</td>
                             <td className="py-8 px-10 text-[var(--recovered-green)] font-bold">{sla}</td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* Tech Stack Explainer - Dark Section */}
        <section className="mt-64 border border-white/10 bg-white/[0.02] rounded-[3rem] p-12 backdrop-blur-md">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12 text-center">
                    <div className="font-data text-[var(--recovery-blue)] text-[10px] tracking-[0.3em] uppercase mb-4">Under the hood</div>
                    <h2 className="text-3xl font-bold text-white tracking-tight">Tech Stack Architecture</h2>
                    <p className="text-white/40 mt-2 font-medium">Enterprise-grade tools, woven into one autonomous system.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { tool: "MSG91", role: "Missed Call Detection", desc: "Monitors your clinic line via virtual DID. Fires instantly on ring-out." },
                        { tool: "Vapi", role: "AI Voice Agent", desc: "The brain of the callback. Natural Hinglish voice with < 1s latency." },
                        { tool: "n8n", role: "Workflow Engine", desc: "The orchestrator connecting your phones, calendar, and WhatsApp." },
                        { tool: "WATI", role: "WhatsApp API", desc: "Reliable patient communication for confirmations and retention." },
                        { tool: "Google Calendar", role: "Schedule Sync", desc: "Live availability management. No secondary dashboard needed." },
                        { tool: "Razorpay", role: "Payment Layer", desc: "Secure monthly retainer handling on autopilot." }
                    ].map((item, i) => (
                        <div key={i} className="p-8 border border-white/5 bg-white/[0.02] rounded-3xl hover:border-white/20 transition-all group">
                            <div className="font-data text-[var(--recovery-blue)] text-xs font-bold mb-3 tracking-widest">{item.tool}</div>
                            <div className="text-white font-bold mb-3 tracking-tight">{item.role}</div>
                            <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* FAQ Teaser */}
        <section className="mt-64 pt-32 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white tracking-tight mb-4">Common Objections</h2>
                    <p className="text-white/40 font-medium">Quick answers for skeptical clinic owners.</p>
                </div>

                <div className="space-y-4">
                    {[
                        { q: "Is it legal under medical rules?", a: "Yes. Engageo handles scheduling, not clinical advice. It complies with IT Act & DPDP 2023 residency." },
                        { q: "What if it figure out it's AI?", a: "Only 3% of patients ask. Most are just relieved to have their call answered in under 8 seconds." },
                        { q: "Does it work with my HMS?", a: "It syncs via Google Calendar — the most universal tool used by Indian specialist clinics." }
                    ].map((faq, i) => (
                        <div key={i} className="p-8 border border-white/5 rounded-3xl bg-white/[0.02]">
                            <h3 className="text-white font-bold mb-3 text-sm flex gap-4">
                                <span className="text-[var(--primary)] font-data">?</span>
                                {faq.q}
                            </h3>
                            <p className="text-white/40 text-sm leading-relaxed pl-7">{faq.a}</p>
                        </div>
                    ))}
                </div>
                
                <div className="text-center mt-12">
                    <Link to="/faq" className="text-[var(--primary)] text-xs font-bold tracking-widest uppercase hover:underline">
                        See all FAQs →
                    </Link>
                </div>
            </div>
        </section>

        {/* Closing CTA */}
        <div className="mt-64 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-6xl text-white font-bold tracking-tighter mb-12">Ready to secure the pipeline?</h2>
            <div className="flex gap-6">
                <Link to="/audit" className="px-12 py-5 bg-[var(--recovery-blue)] text-white rounded-full font-bold text-xs tracking-widest uppercase hover:scale-105 transition-transform active:scale-95 shadow-2xl">
                    Get Free Audit →
                </Link>
                <Link to="/pricing" className="px-12 py-5 border border-white/20 text-white rounded-full font-bold text-xs tracking-widest uppercase hover:bg-white/5 transition-colors">
                    View Pricing
                </Link>
            </div>
        </div>

      </div>
    </div>
  );
}
