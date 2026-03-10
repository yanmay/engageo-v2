const fs = require('fs');

let html = fs.readFileSync('C:/Users/noobg/engageo/how-it-works.html', 'utf8');

let startIdx = html.indexOf('<section class="py-16 px-6 relative max-w-6xl mx-auto">');
let endIdx = html.indexOf('</section>', startIdx) + 10;

let newSection = `
        <section class="py-24 px-6 relative max-w-6xl mx-auto" id="timeline-section">
            <div class="absolute left-1/2 -translate-x-1/2 top-12 bottom-12 w-1 bg-slate-100 hidden md:block rounded-full"></div>
            <div class="absolute left-1/2 -translate-x-1/2 top-12 w-1 bg-primary hidden md:block rounded-full origin-top z-0" id="timeline-fill" style="height: 0%"></div>
            
            <div class="space-y-24 md:space-y-12 relative z-10 w-full overflow-hidden">
                <!-- Row 1 (Left) -->
                <div class="flex flex-col md:flex-row items-center w-full min-h-[250px] relative timeline-row">
                    <div class="w-full md:w-1/2 md:pr-16 md:text-right group z-10 relative">
                        <div class="ringg-card bg-white border-none p-10 relative overflow-hidden timeline-card">
                            <span class="absolute -right-4 -bottom-6 text-8xl font-mono text-slate-100 font-bold select-none group-hover:text-primary/5 transition-colors duration-500">01</span>
                            <div class="flex flex-col md:items-end relative z-10">
                                <span class="material-symbols-outlined text-primary text-4xl mb-4 bg-orange-50 p-4 rounded-2xl shadow-sm">phone_disabled</span>
                                <h3 class="text-2xl font-display font-bold text-slate-900 mb-3">Missed Call Detected</h3>
                                <p class="text-slate-600 leading-relaxed text-lg">Engageo instantly monitors your clinic lines. Within milliseconds of a missed call, the system triggers the recovery sequence.</p>
                            </div>
                        </div>
                    </div>
                    <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-20" style="top:50%; transform:translate(-50%,-50%);">
                        <div class="timeline-dot size-6 rounded-full bg-white border-4 border-slate-200 transition-all duration-500 shadow-sm"></div>
                    </div>
                    <div class="w-full md:w-1/2"></div>
                </div>

                <!-- Row 2 (Right) -->
                <div class="flex flex-col md:flex-row items-center w-full min-h-[250px] relative timeline-row">
                    <div class="w-full md:w-1/2"></div>
                    <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-20" style="top:50%; transform:translate(-50%,-50%);">
                        <div class="timeline-dot size-6 rounded-full bg-white border-4 border-slate-200 transition-all duration-500 shadow-sm"></div>
                    </div>
                    <div class="w-full md:w-1/2 md:pl-16 group z-10 relative">
                        <div class="ringg-card bg-white border-none p-10 relative overflow-hidden timeline-card">
                            <span class="absolute -left-4 -bottom-6 text-8xl font-mono text-slate-100 font-bold select-none group-hover:text-primary/5 transition-colors duration-500">02</span>
                            <div class="flex flex-col relative z-10">
                                <span class="material-symbols-outlined text-primary text-4xl mb-4 bg-orange-50 p-4 rounded-2xl shadow-sm">smart_toy</span>
                                <h3 class="text-2xl font-display font-bold text-slate-900 mb-3">AI Calls Back in 8 Seconds</h3>
                                <p class="text-slate-600 leading-relaxed text-lg">Before the patient can call a competitor, our human-sounding AI assistant calls them back to assist with their inquiry.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Row 3 (Left) -->
                <div class="flex flex-col md:flex-row items-center w-full min-h-[250px] relative timeline-row">
                    <div class="w-full md:w-1/2 md:pr-16 md:text-right group z-10 relative">
                        <div class="ringg-card bg-white border-none p-10 relative overflow-hidden timeline-card">
                            <span class="absolute -right-4 -bottom-6 text-8xl font-mono text-slate-100 font-bold select-none group-hover:text-primary/5 transition-colors duration-500">03</span>
                            <div class="flex flex-col md:items-end relative z-10">
                                <span class="material-symbols-outlined text-primary text-4xl mb-4 bg-orange-50 p-4 rounded-2xl shadow-sm">record_voice_over</span>
                                <h3 class="text-2xl font-display font-bold text-slate-900 mb-3">Hinglish Qualification</h3>
                                <p class="text-slate-600 leading-relaxed text-lg">The AI converses naturally in Hindi, English, or Hinglish to understand their symptoms and urgency level.</p>
                            </div>
                        </div>
                    </div>
                    <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-20" style="top:50%; transform:translate(-50%,-50%);">
                        <div class="timeline-dot size-6 rounded-full bg-white border-4 border-slate-200 transition-all duration-500 shadow-sm"></div>
                    </div>
                    <div class="w-full md:w-1/2"></div>
                </div>

                <!-- Row 4 (Right) -->
                <div class="flex flex-col md:flex-row items-center w-full min-h-[250px] relative timeline-row">
                    <div class="w-full md:w-1/2"></div>
                    <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-20" style="top:50%; transform:translate(-50%,-50%);">
                        <div class="timeline-dot size-6 rounded-full bg-white border-4 border-slate-200 transition-all duration-500 shadow-sm"></div>
                    </div>
                    <div class="w-full md:w-1/2 md:pl-16 group z-10 relative">
                        <div class="ringg-card bg-white border-none p-10 relative overflow-hidden timeline-card">
                            <span class="absolute -left-4 -bottom-6 text-8xl font-mono text-slate-100 font-bold select-none group-hover:text-primary/5 transition-colors duration-500">04</span>
                            <div class="flex flex-col relative z-10">
                                <span class="material-symbols-outlined text-primary text-4xl mb-4 bg-orange-50 p-4 rounded-2xl shadow-sm">calendar_month</span>
                                <h3 class="text-2xl font-display font-bold text-slate-900 mb-3">Live Calendar Check</h3>
                                <p class="text-slate-600 leading-relaxed text-lg">Integrated directly with your HMS or Google Calendar, the AI finds available slots and offers them to the patient in real-time.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Row 5 (Left) -->
                <div class="flex flex-col md:flex-row items-center w-full min-h-[250px] relative timeline-row">
                    <div class="w-full md:w-1/2 md:pr-16 md:text-right group z-10 relative">
                        <div class="ringg-card bg-white border-none p-10 relative overflow-hidden timeline-card">
                            <span class="absolute -right-4 -bottom-6 text-8xl font-mono text-slate-100 font-bold select-none group-hover:text-primary/5 transition-colors duration-500">05</span>
                            <div class="flex flex-col md:items-end relative z-10">
                                <span class="material-symbols-outlined text-primary text-4xl mb-4 bg-orange-50 p-4 rounded-2xl shadow-sm">check_circle</span>
                                <h3 class="text-2xl font-display font-bold text-slate-900 mb-3">Appointment Confirmed</h3>
                                <p class="text-slate-600 leading-relaxed text-lg">The appointment is booked. No manual entry needed. The clinic reception gets an instant notification of the new patient.</p>
                            </div>
                        </div>
                    </div>
                    <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-20" style="top:50%; transform:translate(-50%,-50%);">
                        <div class="timeline-dot size-6 rounded-full bg-white border-4 border-slate-200 transition-all duration-500 shadow-sm"></div>
                    </div>
                    <div class="w-full md:w-1/2"></div>
                </div>

                <!-- Row 6 (Right) -->
                <div class="flex flex-col md:flex-row items-center w-full min-h-[250px] relative timeline-row">
                    <div class="w-full md:w-1/2"></div>
                    <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-20" style="top:50%; transform:translate(-50%,-50%);">
                        <div class="timeline-dot size-6 rounded-full bg-white border-4 border-slate-200 transition-all duration-500 shadow-sm"></div>
                    </div>
                    <div class="w-full md:w-1/2 md:pl-16 group z-10 relative">
                        <div class="ringg-card bg-white border-none p-10 relative overflow-hidden timeline-card">
                            <span class="absolute -left-4 -bottom-6 text-8xl font-mono text-slate-100 font-bold select-none group-hover:text-primary/5 transition-colors duration-500">06</span>
                            <div class="flex flex-col relative z-10">
                                <span class="material-symbols-outlined text-primary text-4xl mb-4 bg-orange-50 p-4 rounded-2xl shadow-sm">chat</span>
                                <h3 class="text-2xl font-display font-bold text-slate-900 mb-3">WhatsApp Sequence Starts</h3>
                                <p class="text-slate-600 leading-relaxed text-lg">Nurture the patient until they arrive. Automated reminders, clinic directions, and prep instructions sent via WhatsApp.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
`.trim();

html = html.substring(0, startIdx) + "\\n" + newSection + "\\n" + html.substring(endIdx);

if (!html.includes('gsap.min.js')) {
    html = html.replace('</body>', `
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            if(typeof gsap !== 'undefined') {
                gsap.registerPlugin(ScrollTrigger);

                // Animate the line
                gsap.to("#timeline-fill", {
                    height: "100%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#timeline-section",
                        start: "top center",
                        end: "bottom center",
                        scrub: true
                    }
                });

                // Animate dots lighting up
                const dots = gsap.utils.toArray('.timeline-dot');
                dots.forEach(dot => {
                    ScrollTrigger.create({
                        trigger: dot,
                        start: "top center",
                        onEnter: () => {
                            dot.classList.remove('border-slate-200', 'bg-white');
                            dot.classList.add('border-primary', 'bg-primary');
                            dot.style.boxShadow = '0 0 0 6px rgba(239, 111, 57, 0.2)';
                            dot.style.transform = 'scale(1.2)';
                        },
                        onLeaveBack: () => {
                            dot.classList.add('border-slate-200', 'bg-white');
                            dot.classList.remove('border-primary', 'bg-primary');
                            dot.style.boxShadow = 'none';
                            dot.style.transform = 'scale(1)';
                        }
                    });
                });

                // Cards sliding in
                const cards = gsap.utils.toArray('.timeline-card');
                cards.forEach((card, i) => {
                    const isLeft = i % 2 === 0;
                    gsap.fromTo(card, {
                        x: isLeft ? 100 : -100,
                        opacity: 0
                    }, {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    });
                });
            }
        });
    </script>
</body>`);
}

fs.writeFileSync('C:/Users/noobg/engageo/how-it-works.html', html);
