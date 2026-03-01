import React from 'react';

export default function TheSecondLayer() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-12 lg:px-20 relative z-10 bg-[#EDE9E0] border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="section-label mb-6">THE SECOND LAYER</div>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-obsidian tracking-tighter mb-4 leading-[1.05]">
            The Call Recovers the Patient.<br />
            <span className="serif-hero text-brand">WhatsApp Keeps Them.</span>
          </h2>
          <p className="text-subtle text-lg max-w-2xl leading-relaxed">
            A recovered call is only valuable if the patient shows up. Engageo sends the right WhatsApp at the right moment — so your calendar stays full and your no-show rate drops.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {/* Card 1 */}
          <div className="bg-white border-2 border-obsidian retro-shadow p-6 md:p-8 flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand font-bold">SENT IMMEDIATELY</span>
            <p className="text-[15px] font-medium text-obsidian leading-relaxed bg-[#F5F8FF] p-4 rounded-xl border border-brand/20">
              Hi Priya ✅ Your implant consultation is confirmed for Saturday, 11 AM with Dr. Mehta. Reply CONFIRM.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border-2 border-obsidian retro-shadow p-6 md:p-8 flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand font-bold">24 HOURS BEFORE</span>
            <p className="text-[15px] font-medium text-obsidian leading-relaxed bg-[#F5F8FF] p-4 rounded-xl border border-brand/20">
              Reminder: Your appointment is tomorrow at 11 AM. Dr. Mehta's clinic, Sector 18, Noida. See you then!
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border-2 border-obsidian retro-shadow p-6 md:p-8 flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand font-bold">2 HOURS BEFORE</span>
            <p className="text-[15px] font-medium text-obsidian leading-relaxed bg-[#F5F8FF] p-4 rounded-xl border border-brand/20">
              Heading over? Here's the address and what to bring to your consultation today.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border-2 border-obsidian retro-shadow p-6 md:p-8 flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand font-bold">IF NO-SHOW</span>
            <p className="text-[15px] font-medium text-obsidian leading-relaxed bg-[#F5F8FF] p-4 rounded-xl border border-brand/20">
              We missed you today. Want to reschedule? Here are 3 available slots this week.
            </p>
          </div>
        </div>

        <p className="text-center font-mono text-[11px] text-muted max-w-xl mx-auto uppercase tracking-wide leading-relaxed">
          94% WhatsApp open rate vs. 22% email. Your patients are already there. We meet them there.
        </p>
      </div>
    </section>
  );
}
