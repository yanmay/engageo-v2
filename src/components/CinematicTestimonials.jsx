import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "Recovered ₹6.2L in the first month. The speed of the AI callback is what changed the game for our OPD.",
        name: "Dr. Suresh Mehta",
        specialty: "Implant Specialist",
        city: "Pune",
        value: "₹6.2L Recovered"
    },
    {
        quote: "23 patients booked in Week 1. My receptionist is now focused on patients in the clinic, not just answering phones.",
        name: "Dr. Kavita Singh",
        specialty: "Dermatologist",
        city: "Mumbai",
        value: "23 Bookings/wk"
    }
];

const ClinicBadge = ({ city, type }) => (
    <div className="flex flex-col items-center justify-center p-6 border border-white/5 rounded-[2rem] bg-white/[0.02] backdrop-blur-xl shadow-2xl transition-all duration-500 hover:bg-white/[0.05] hover:border-white/10">
        <div className="font-data text-[10px] text-white/30 tracking-widest mb-2 font-bold">Verified clinic</div>
        <div className="text-white/80 font-bold text-sm tracking-tight">{type}</div>
        <div className="text-[var(--recovery-blue)] text-[10px] font-bold tracking-widest mt-3 italic">{city}</div>
    </div>
);

export default function CinematicTestimonials() {
    return (
        <section id="proof" className="py-24 bg-[var(--command-black)] relative overflow-hidden">
            {/* Grain Overlay handled by global class */}
            <div className="max-w-7xl mx-auto px-8 md:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Featured Pull Quote */}
                    <div className="relative">
                        <Quote size={80} className="absolute -top-10 -left-10 text-white/[0.03]" />
                        <div className="font-data text-[var(--recovery-blue)] text-[10px] tracking-widest mb-8 font-bold">Social proof</div>

                        <div className="space-y-16">
                            {testimonials.map((t, i) => (
                                <div key={i} className="group transition-all duration-500">
                                    <blockquote className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tighter leading-tight italic">
                                        "{t.quote}"
                                    </blockquote>
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 rounded-full border border-[var(--recovery-blue)]/30 bg-[var(--recovery-blue)]/10 flex items-center justify-center text-white font-bold text-sm">
                                            {t.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <div className="text-white font-bold text-lg tracking-tight">{t.name}</div>
                                            <div className="font-data text-white/30 text-[10px] tracking-widest font-bold">
                                                {t.specialty} · {t.city}
                                            </div>
                                        </div>
                                        <div className="ml-auto">
                                            <div className="px-4 py-2 bg-[var(--signal-green)]/10 border border-[var(--signal-green)]/20 rounded-full">
                                                <span className="text-[var(--signal-green)] text-xs font-bold font-data tabular-nums">{t.value}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Clinic Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <ClinicBadge type="Hair Transplant" city="Delhi NCR" />
                        <ClinicBadge type="Dental Implants" city="Mumbai" />
                        <ClinicBadge type="IVF Specialist" city="Bangalore" />
                        <ClinicBadge type="Dermatology" city="Pune" />

                        <div className="col-span-2 mt-8 p-10 border border-[var(--recovery-blue)]/20 bg-[var(--recovery-blue)]/5 rounded-premium text-center shadow-2xl backdrop-blur-sm">
                            <div className="text-4xl font-bold text-white mb-2 tracking-tighter italic font-drama tabular-nums">₹2.4 Crore</div>
                            <div className="font-data text-[var(--recovery-blue)] text-[10px] tracking-widest font-bold">Total revenue recovered this quarter</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
