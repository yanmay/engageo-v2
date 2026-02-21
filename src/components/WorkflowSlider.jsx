import React from 'react';
import { motion } from 'framer-motion';

export default function WorkflowSlider() {
  const steps = [
    { num: '01', title: 'Call Missed', desc: 'Patient dials. Line is busy or ringing. Receptionist is occupied.' },
    { num: '02', title: 'AI Intercept', desc: 'Engageo identifies the drop and calls the patient back in 8 seconds.' },
    { num: '03', title: 'Voice Qualification', desc: 'AI handles the conversation, answers FAQs, and qualifies intent.' },
    { num: '04', title: 'Schedule Sync', desc: 'AI checks your real-time Google/HMS calendar for open slots.' },
    { num: '05', title: 'Slot Secured', desc: 'Appointment is booked. Patient receives instant WhatsApp confirmation.' },
    { num: '06', title: 'Staff Notified', desc: 'Receptionist sees the recovered booking on the dashboard.' },
  ];

  return (
    <section className="py-24 bg-white border-y border-border/50 relative z-10 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-sans text-3xl md:text-5xl font-bold text-obsidian tracking-tighter mb-4">
            Total Recovery.{' '}
            <span className="gradient-text">Zero Friction.</span>
          </h2>
          <p className="text-subtle text-base md:text-lg max-w-2xl">
            Engageo replaces the "forgotten" missed call with a revenue-generating conversation.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="flex flex-col lg:flex-row gap-4 xl:gap-5 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                className="flex-1 relative group"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
                }}
              >
                {/* Connector line (desktop) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-[3rem] right-0 w-[calc(100%-2.5rem)] h-px bg-border z-0 pointer-events-none">
                    <motion.div
                      className="h-full bg-gradient-to-r from-brand to-brand/40 origin-left"
                      variants={{
                        hidden: { scaleX: 0 },
                        visible: { scaleX: 1, transition: { duration: 0.8, ease: 'easeOut' } },
                      }}
                    />
                  </div>
                )}

                {/* Step number badge */}
                <div className="w-10 h-10 rounded-lg bg-brand text-white flex items-center justify-center mb-5 relative z-10 shadow-brand-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-brand">
                  <span className="font-mono text-xs font-bold">{step.num}</span>
                </div>

                {/* Content */}
                <div className="pr-4">
                  <h3 className="font-sans text-[15px] font-bold text-obsidian mb-2 tracking-tight">{step.title}</h3>
                  <p className="text-[13px] text-subtle leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
