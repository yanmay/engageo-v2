import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Zap, Shield, Calendar, MessageSquare, Phone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CinematicNavbar from '../components/CinematicNavbar';
import CinematicFooter from '../components/CinematicFooter';

gsap.registerPlugin(ScrollTrigger);

const TIMELINE_STEPS = [
  {
    num: "01",
    phase: "Silent Loss",
    title: "The Inbound Leak",
    desc: "A patient calls your clinic. Your receptionist is on another line, or it's after hours. The call rings out. ₹8,000 in potential revenue just vanished.",
    accent: "text-red-500"
  },
  {
    num: "02",
    phase: "Intercept",
    title: "Intent Identified",
    desc: "MSG91 detects the missed call within 5 seconds. A webhook fires directly into the Engageo engine, identifying the patient and their billing intent.",
    accent: "text-[var(--recovery-blue)]"
  },
  {
    num: "03",
    phase: "Reaction",
    title: "AI Callback (8s)",
    desc: "Our Vapi-powered AI voice agent initiates an outbound call. In under 8 seconds, the patient's phone rings. Speed is the only factor in recovery.",
    accent: "text-[var(--recovery-blue)]"
  },
  {
    num: "04",
    phase: "Interaction",
    title: "Natural Qualification",
    desc: "The agent speaks warm, professional Hinglish. It qualifies for specialty, urgency, and budget. The patient feels heard, not sold to.",
    accent: "text-[var(--recovery-blue)]"
  },
  {
    num: "05",
    phase: "Conversion",
    title: "Automatic Booking",
    desc: "The agent reads your live Google Calendar. 2-3 slots are offered. The patient selects one. A calendar event is created instantly.",
    accent: "text-[var(--recovery-blue)]"
  },
  {
    num: "06",
    phase: "Retention",
    title: "WhatsApp Locking",
    desc: "WATI triggers a 4-step sequence: Confirmation, 24h reminder, Directions, and No-show recovery. Your patient is locked into the consultation.",
    accent: "text-[var(--signal-green)]"
  }
];

const VerticalTimeline = () => {
    const containerRef = useRef(null);
  
    useEffect(() => {
      const ctx = gsap.context(() => {
        const items = gsap.utils.toArray(".timeline-item");
        items.forEach((item) => {
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
      <div ref={containerRef} className="space-y-32 md:space-y-56 relative">
        {/* Central Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 md:-translate-x-1/2" />
        
        {TIMELINE_STEPS.map((step, i) => (
          <div key={i} className={`timeline-item relative flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-32`}>
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[var(--recovery-blue)] md:-translate-x-1/2 z-10 shadow-[0_0_20px_var(--recovery-blue)]" />
            
            {/* Content */}
            <div className={`flex-1 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
              <div className={`font-data text-[10px] tracking-[0.4em] uppercase mb-4 font-bold ${step.accent}`}>Phase_{step.num} // {step.phase}</div>
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter leading-none">{step.title}</h3>
              <p className={`text-white/40 text-lg leading-relaxed max-w-md ${i % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[var(--command-black)] min-h-screen relative">
      <div className="fixed inset-0 pointer-events-none noise-overlay opacity-20 z-0" />
      <CinematicNavbar />
      
      <div className="max-w-7xl mx-auto px-8 md:px-24 pt-48 pb-32 relative z-10">
        
        {/* Hero */}
        <div className="max-w-4xl mb-48">
          <div className="font-data text-[var(--recovery-blue)] text-xs tracking-[0.4em] uppercase mb-10 font-bold">System Architecture</div>
          <h1 className="text-5xl md:text-8xl lg:text-9xl text-white font-bold tracking-tight mb-10 leading-[0.85]">
            The 4-Minute <br />
            <span className="text-white/10 italic">Recovery Protocol.</span>
          </h1>
          <p className="text-white/40 text-xl md:text-2xl leading-relaxed max-w-2xl font-medium">
            A six-layer automation stack that turns missed calls into confirmed bookings without your team lifting a finger. 100% autonomous. 100% compliant.
          </p>
        </div>

        {/* Timeline */}
        <VerticalTimeline />

        {/* Execution Table Section */}
        <section className="mt-64 bg-white rounded-[4rem] p-12 md:p-24 overflow-hidden shadow-2xl">
           <div className="max-w-5xl mx-auto">
              <div className="mb-20">
                 <div className="font-data text-[var(--recovery-blue)] text-[10px] tracking-[0.3em] uppercase mb-4 font-bold">Latency Standards</div>
                 <h2 className="text-4xl md:text-6xl font-bold text-[var(--command-black)] tracking-tighter italic leading-none">The <span className="text-[var(--primary)] not-italic">Execution Table</span></h2>
                 <p className="text-[var(--clinic-slate)] mt-6 text-lg font-medium max-w-xl">Sequential step-by-step logic breakdown with sub-second SLA targets.</p>
              </div>
              <div className="overflow-x-auto pb-6">
                 <table className="w-full text-left font-data text-[11px] border-collapse min-w-[600px]">
                    <thead>
                       <tr className="bg-[var(--command-black)] text-white uppercase tracking-[0.2em] font-bold">
                          <th className="py-6 px-10">Step</th>
                          <th className="py-6 px-10">Action</th>
                          <th className="py-6 px-10">Infrastructure</th>
                          <th className="py-6 px-10">SLA Target</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--command-black)]/5 text-[var(--command-black)]/70">
                       {[
                          ["01", "Missed Call Detection", "MSG91 Domestic DID", "5.0s"],
                          ["02", "Autonomous Intercept", "Vapi Orchestrator", "8.0s"],
                          ["03", "Natural Language Resolve", "Llama-3 / GPT-4o", "120s"],
                          ["04", "Calendar Sync (Live)", "Google Calendar API", "< 1.4s"],
                          ["05", "Booking Creation", "G-Suite Workspace", "< 1.0s"],
                          ["06", "WhatsApp Confirmation", "Meta Cloud API", "15.0s"],
                          ["07", "Staff Notification", "WATI Concierge", "30.0s"]
                       ].map(([step, action, system, sla]) => (
                          <tr key={step} className="hover:bg-[var(--primary)]/[0.02] transition-colors border-b border-[var(--primary)]/5">
                             <td className="py-8 px-10 font-bold text-[var(--recovery-blue)]">{step}</td>
                             <td className="py-8 px-10 text-[var(--command-black)] font-bold text-sm tracking-tight">{action}</td>
                             <td className="py-8 px-10 font-bold uppercase tracking-wider opacity-60">{system}</td>
                             <td className="py-8 px-10 text-[var(--recovered-green)] font-bold">{sla}</td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* Tech Stack Explainer */}
        <section className="mt-64 border border-white/10 bg-white/[0.02] rounded-[4rem] p-12 md:p-24 backdrop-blur-xl">
            <div className="max-w-5xl mx-auto">
                <div className="mb-20 text-center">
                    <div className="font-data text-[var(--recovery-blue)] text-[10px] tracking-[0.4em] uppercase mb-6 font-bold">Under the hood</div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter italic">Protocol <span className="not-italic text-[var(--primary)]">Architecture</span></h2>
                    <p className="text-white/40 mt-6 text-lg font-medium max-w-2xl mx-auto">Enterprise-grade tools, woven into one seamless, autonomous recovery engine.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { tool: "MSG91", role: "Detection", desc: "Monitors your clinic line via virtual domestic DID. Fires instantly on every ring-out." },
                        { tool: "Vapi", role: "Voice AI", desc: "The brain of the callback. Natural Hinglish voice with sub-800ms response latency." },
                        { tool: "n8n", role: "Orchestration", desc: "The central nervous system connecting phones, calendar, and WhatsApp." },
                        { tool: "WATI", role: "Patient Comms", desc: "High-deliverability WhatsApp API for confirmations, reminders, and directions." },
                        { tool: "Google Calendar", role: "Inventory", desc: "Universal availability management. Syncs directly with doctor's actual slots." },
                        { tool: "Razorpay", role: "Billing", desc: "Automated monthly subscription handling for zero administrative friction." }
                    ].map((item, i) => (
                        <div key={i} className="p-10 border border-white/5 bg-white/[0.01] rounded-[2.5rem] hover:border-white/20 transition-all group hover:bg-white/[0.03]">
                            <div className="font-data text-[var(--recovery-blue)] text-xs font-bold mb-4 tracking-[0.2em] uppercase">{item.tool} // {item.role}</div>
                            <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* FAQ Preview */}
        <section className="mt-64 pt-32 border-t border-white/10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6 italic">Common <span className="text-[var(--primary)] not-italic">Hesitations</span></h2>
                    <p className="text-white/40 text-lg font-medium">Quick answers for skeptical clinic owners.</p>
                </div>

                <div className="space-y-6">
                    {[
                        { q: "Is it legal under medical rules?", a: "Yes. Engageo handles administrative scheduling only. It complies with IT Act, DPDP 2023, and NHM guidelines for non-clinical automation." },
                        { q: "What if it figure out it's AI?", a: "Speed beats skepticism. Most patients are just relieved to have their call answered in under 8 seconds. If asked, the agent identifies as an automated assistant." },
                        { q: "Does it work with my HMS?", a: "It syncs via Google Calendar — the most universal tool used by Indian specialist clinics. Custom exports are available for EMR updates." }
                    ].map((faq, i) => (
                        <div key={i} className="p-10 border border-white/5 rounded-[2.5rem] bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                            <h3 className="text-white font-bold mb-4 text-xl flex gap-6 items-start leading-tight">
                                <span className="text-[var(--primary)] font-data text-sm mt-1 shrink-0">0{i+1}</span>
                                {faq.q}
                            </h3>
                            <p className="text-white/40 text-lg leading-relaxed pl-12">{faq.a}</p>
                        </div>
                    ))}
                </div>
                
                <div className="text-center mt-20">
                    <Link to="/faq" className="text-[var(--primary)] text-xs font-bold tracking-[0.3em] uppercase hover:underline">
                        See all technical FAQs →
                    </Link>
                </div>
            </div>
        </section>

        {/* Closing CTA */}
        <div className="mt-64 flex flex-col items-center text-center">
            <div className="w-16 h-[1px] bg-[var(--primary)]/30 mb-20" />
            <h2 className="text-5xl md:text-8xl text-white font-bold tracking-tighter mb-16 leading-[0.9]">
                Ready to secure <br />
                <span className="text-white/10">the pipeline?</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
                <Link to="/audit" className="px-16 py-6 bg-[var(--recovery-blue)] text-white rounded-full font-bold text-xs tracking-[0.3em] uppercase hover:scale-105 transition-transform active:scale-95 shadow-2xl shadow-blue-500/20">
                    Get Free Audit →
                </Link>
                <Link to="/pricing" className="px-16 py-6 border border-white/10 text-white rounded-full font-bold text-xs tracking-[0.3em] uppercase hover:bg-white/5 transition-colors">
                    View Pricing
                </Link>
            </div>
        </div>

      </div>
      <CinematicFooter />
    </div>
  );
}
