import React from 'react';

export default function WorkflowSlider() {
  const steps = [
    { num: '01', title: 'Call Missed', desc: 'Patient dials. Line is busy or ringing. Receptionist is occupied.' },
    { num: '02', title: 'AI Intercept', desc: 'Engageo identifies the drop and calls the patient back in 8 seconds.' },
    { num: '03', title: 'Voice Qualification', desc: 'AI handles the conversation, answers FAQs, and qualifies intent.' },
    { num: '04', title: 'Schedule Sync', desc: 'AI checks your real-time Google/HMS calendar for open slots.' },
    { num: '05', title: 'Slot Secured', desc: 'Appointment is booked. Patient receives instant WhatsApp confirmation.' },
    { num: '06', title: 'WhatsApp Sent', desc: 'Patient receives booking confirmation on WhatsApp in 90 seconds. 24-hour reminder fires automatically. No-show rate drops.' },
    { num: '07', title: 'Staff Notified', desc: 'Receptionist sees the recovered booking on the dashboard.' },
  ];

  return (
    <section className="py-20 md:py-32 border-y-2 border-obsidian/10 relative z-10 bg-canvas">
      <div className="max-w-[90rem] mx-auto px-4 md:px-12">

        <div className="mb-16 md:mb-24">
          <div className="section-label mb-6">The Recovery Workflow</div>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-obsidian tracking-tighter mb-4 leading-tight">
            Total Recovery.<br className="md:hidden" />
            <span className="gradient-text ml-0 md:ml-3">Zero Friction.</span>
          </h2>
          <p className="text-subtle text-lg max-w-2xl leading-relaxed">
            Engageo runs the entire patient recovery sequence — voice call, qualification, booking, WhatsApp confirmation, reminder — while you focus on the patient in front of you.
          </p>
        </div>

        {/* Desktop View: Horizontal Grid */}
        <div className="hidden lg:flex flex-row gap-5 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 relative group">
              {/* Connector line (desktop) */}
              {idx < steps.length - 1 && (
                <div className="absolute top-[20px] left-[3rem] right-0 w-[calc(100%-2.5rem)] h-[2px] bg-obsidian/10 z-0 pointer-events-none">
                  <div className="h-full bg-[var(--green)] w-0 group-hover:w-full transition-all duration-700 ease-out" />
                </div>
              )}

              {/* Step number badge */}
              <div className="w-10 h-10 bg-white text-obsidian border-2 border-obsidian flex items-center justify-center mb-6 relative z-10 retro-shadow transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-brand">
                <span className="font-mono text-xs font-semibold">{step.num}</span>
              </div>

              {/* Content */}
              <div className="pr-4">
                <h3 className="font-sans text-base font-bold text-obsidian mb-2 tracking-tight">{step.title}</h3>
                <p className="text-sm text-subtle leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View: Vertical Sticky Scroll */}
        <div className="block lg:hidden relative border-l-2 border-obsidian/10 ml-5 pb-8">
          <div className="flex flex-col gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="relative pl-10">
                {/* Node */}
                <div className="absolute -left-[21px] top-0 w-10 h-10 bg-white text-obsidian border-2 border-obsidian flex items-center justify-center retro-shadow">
                  <span className="font-mono text-xs font-bold text-brand">{step.num}</span>
                </div>

                {/* Content Card */}
                <div className="bg-white border-2 border-obsidian retro-shadow p-6 mt-1">
                  <h3 className="font-sans text-lg font-bold text-obsidian mb-2 tracking-tight">{step.title}</h3>
                  <p className="text-sm text-subtle leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
