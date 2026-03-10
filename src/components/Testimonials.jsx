import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const testimonials = [
  {
    quote:
      'My receptionist misses calls whenever I\'m with a patient. With Engageo, every missed call gets picked up in seconds and the patient gets a WhatsApp confirmation before they even open Google to find another clinic.',
    name: 'Dr. Suresh Mehta',
    specialty: 'Implant Specialist',
    city: 'Pune',
    initials: 'SM',
    tag: 'Dental',
  },
  {
    quote:
      'IVF patients are anxious — they won\'t wait. If they call and get voicemail, they move on. Engageo solved that for us completely. Our consultation rate has noticeably improved since we went live.',
    name: 'Dr. Priya Nair',
    specialty: 'Fertility & IVF Specialist',
    city: 'Bangalore',
    initials: 'PN',
    tag: 'Fertility',
  },
  {
    quote:
      'I\'m in OT from 8 AM to 2 PM every day. That\'s 6 hours of unanswered calls. Engageo handles every single one automatically and books them to my calendar. I see the summary on my phone after I scrub out.',
    name: 'Dr. Anil Khanna',
    specialty: 'Orthopaedic Surgeon',
    city: 'New Delhi',
    initials: 'AK',
    tag: 'Orthopaedics',
  },
  {
    quote:
      'I was sceptical about AI because I\'m not a tech person. But the setup was done entirely by the Engageo team — I didn\'t touch a single setting. It just started working. My fill rate is the highest it\'s ever been.',
    name: 'Dr. Kavita Singh',
    specialty: 'Dermatologist & Cosmetologist',
    city: 'Mumbai',
    initials: 'KS',
    tag: 'Dermatology',
  },
  {
    quote:
      'I got a WhatsApp summary one Sunday evening: multiple cataract consultations booked while I was at my daughter\'s school event. I hadn\'t touched my phone. Engageo handled the calls, bookings, and pre-visit instructions.',
    name: 'Dr. Ravi Patelkar',
    specialty: 'Ophthalmologist',
    city: 'Ahmedabad',
    initials: 'RP',
    tag: 'Ophthalmology',
  },
  {
    quote:
      'My OPD was running below capacity despite a long waiting list — because follow-up calls were never made. Engageo automated the entire loop. My patients think I upgraded my front desk. They have no idea it\'s AI.',
    name: 'Dr. Meena Chandran',
    specialty: 'Gynaecologist',
    city: 'Chennai',
    initials: 'MC',
    tag: 'Gynaecology',
  },
];

const SLIDE_INTERVAL = 5000;

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={11} fill="var(--green)" stroke="none" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const { openModal } = useModal();
  const timerRef = useRef(null);

  // Auto-slide
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setActive((v) => (v + 1) % testimonials.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  const t = testimonials[active];

  return (
    <section className="py-28 px-6 md:px-12 lg:px-20 relative z-10 bg-[var(--parchment)] border-t border-[var(--ink-faint)] overflow-hidden">

      {/* Subtle bg glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, var(--green) 0%, transparent 70%)', opacity: 0.05 }} />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label mb-6">Clinic Owners on Engageo</div>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-obsidian tracking-tighter">
            Don't take our word for it.
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="bg-[var(--surface)] border border-[var(--ink-faint)] rounded-[2rem] p-8 md:p-12 relative overflow-hidden cursor-default shadow-sm"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Quote icon */}
          <Quote size={36} className="text-brand/10 mb-6" fill="currentColor" stroke="none" />

          {/* Specialty tag */}
          <span className="inline-block font-mono text-[9px] uppercase tracking-widest text-obsidian bg-white border-2 border-obsidian px-3 py-1.5 mb-6 font-bold">
            {t.tag}
          </span>

          {/* Quote */}
          <blockquote
            key={active}
            className="text-obsidian text-lg md:text-xl font-medium leading-relaxed mb-10"
            style={{ animation: 'fadeUp 0.4s ease both' }}
          >
            "{t.quote}"
          </blockquote>

          {/* Author */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[var(--green)] text-[var(--parchment)] border border-[var(--ink-faint)] rounded-full flex items-center justify-center shrink-0">
                <span className="font-sans text-xs font-bold">{t.initials}</span>
              </div>
              <div>
                <div className="font-sans font-bold text-sm text-obsidian">{t.name}</div>
                <div className="font-mono text-[10px] text-subtle uppercase tracking-widest">
                  {t.specialty} · {t.city}
                </div>
                <div className="mt-1"><Stars /></div>
              </div>
            </div>

            {/* Progress dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActive(i); setPaused(true); setTimeout(() => setPaused(false), 8000); }}
                  className={`h-2 transition-all duration-300 border border-[var(--ink-faint)] rounded-full ${i === active ? 'w-6 bg-[var(--green)]' : 'w-2 bg-[var(--ink)] opacity-10'
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Progress bar */}
          {!paused && (
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-border/40 overflow-hidden rounded-b-3xl">
              <div
                key={`${active}-bar`}
                className="h-full bg-brand origin-left"
                style={{ animation: `progressBar ${SLIDE_INTERVAL}ms linear` }}
              />
            </div>
          )}
        </div>

        {/* Pause hint */}
        <p className="text-center font-mono text-[9px] text-muted mt-4 uppercase tracking-widest">
          hover to pause · click dots to jump
        </p>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={openModal}
            className="group inline-flex items-center gap-2 bg-[var(--green)] text-[var(--parchment)] text-[13px] font-bold tracking-wide px-10 py-4 border border-[var(--ink-faint)] rounded-full hover:scale-[1.03] transition-all duration-200 active:scale-[0.98] shadow-lg"
          >
            <span>Book Your Free Strategy Call →</span>
          </button>
        </div>

      </div>
    </section>
  );
}
