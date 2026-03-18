import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'My receptionist misses calls whenever I\'m with a patient. With Engageo, every missed call gets picked up in seconds. We\'ve recovered 3 full months of lost consultations since going live.',
    name: 'Dr. Suresh Mehta',
    role: 'Dental Implant Specialist',
    location: 'Gurgaon, NCR',
    stat: '₹4.1L recovered',
    hue: 200,
  },
  {
    quote: 'IVF patients are anxious — they won\'t wait. If they call and get voicemail, they move on. Engageo answered 23 calls I would have lost in the first week alone.',
    name: 'Dr. Priya Nair',
    role: 'Fertility Consultant',
    location: 'Bangalore',
    stat: '23 bookings, week 1',
    hue: 160,
  },
  {
    quote: 'I\'m in OT from 8 AM to 2 PM every day. That\'s 6 hours of unanswered calls. Engageo handles every single one automatically. Not one patient reaches voicemail now.',
    name: 'Dr. Anil Khanna',
    role: 'Orthopaedic Surgeon',
    location: 'Noida',
    stat: '6hr daily coverage',
    hue: 240,
  },
  {
    quote: 'I was sceptical about AI because I\'m not a tech person. The Engageo team did the entire setup in 4 days. I didn\'t have to touch a single setting.',
    name: 'Dr. Kavita Singh',
    role: 'Dermatologist',
    location: 'Pune',
    stat: '4-day setup',
    hue: 280,
  },
  {
    quote: 'I got a WhatsApp summary one Sunday evening: three cataract consultations booked while I was at my daughter\'s school event. That\'s when I understood what this product actually does.',
    name: 'Dr. Ravi Patelkar',
    role: 'Ophthalmologist',
    location: 'Hyderabad',
    stat: '₹2.7L, month 1',
    hue: 30,
  },
  {
    quote: 'My OPD was running below capacity despite a long waiting list — because follow-up calls were never made. Engageo recovered ₹6.2L in month one. I keep the dashboard open all day.',
    name: 'Dr. Meena Chandran',
    role: 'Gynaecologist',
    location: 'Chennai',
    stat: '₹6.2L, month 1',
    hue: 340,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 110, damping: 20 },
  },
};

export default function Testimonials() {
  return (
    <section className="w-full bg-clinic-white py-32 md:py-40 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-1/2 h-2/5 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at top right, rgba(16,185,129,0.04) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 w-full">
        <div className="mb-16">
          <span className="section-label">Clinic Owners on Engageo</span>
          <h2 className="text-4xl md:text-[52px] font-semibold text-slate-900 tracking-tight leading-tight text-balance">
            Don&rsquo;t take our word for it.
          </h2>
        </div>

        {/* CSS masonry via columns — BANNED: 3-card equal-height carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          className="columns-1 md:columns-2 lg:columns-2 gap-6"
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="break-inside-avoid mb-6 p-7 bg-white border border-slate-200 rounded-card hover:border-slate-300 hover:shadow-diffusion-light transition-all duration-300"
            >
              {/* Stat badge */}
              <div className="mb-5">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-pill font-mono text-[10px] uppercase tracking-widest"
                  style={{
                    color: '#10B981',
                    background: 'rgba(16,185,129,0.08)',
                    border: '1px solid rgba(16,185,129,0.2)',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-signal-green shrink-0" aria-hidden="true" />
                  {t.stat}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="font-sans text-base text-slate-700 leading-relaxed mb-7 text-pretty">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                {/* Squircle initial avatar — not generic SVG egg */}
                <div
                  className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl font-sans font-semibold text-sm text-white"
                  style={{ background: `hsl(${t.hue}, 40%, 35%)` }}
                  aria-hidden="true"
                >
                  {t.name.split(' ').filter(Boolean).map((n) => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <div className="font-sans font-semibold text-sm text-slate-900 tracking-tight">
                    {t.name}
                  </div>
                  <div className="font-sans text-xs text-slate-400">
                    {t.role} &mdash; {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
