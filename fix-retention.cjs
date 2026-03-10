const fs = require('fs');

let html = fs.readFileSync('C:/Users/noobg/engageo/how-it-works.html', 'utf8');

const searchStr = '<div class="grid grid-cols-1 md:grid-cols-2 gap-8">';
const startIdx = html.indexOf(searchStr);
const endIdx = html.indexOf('</section>', startIdx);

if (startIdx !== -1 && endIdx !== -1) {
    const newSection = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-16" id="retention-grid">
                <div class="ringg-card bg-white border border-slate-100 p-8 retention-card opacity-0 translate-y-12 transition-none">
                    <span class="ringg-pill ringg-pill-orange mb-6">INSTANT</span>
                    <div class="premium-chat premium-chat-green p-6 max-w-full">
                        <p class="text-[15px] font-medium leading-relaxed text-slate-800">Namaste Amit! 🙏 Your appointment with Dr. Sharma is confirmed for tomorrow at 10:30 AM. Here is the location: <span class="text-[#10B981] font-bold cursor-pointer">[Maps Link]</span></p>
                        <span class="block text-[10px] font-bold tracking-widest text-[#10B981] uppercase text-right mt-4">10:45 AM ✓✓</span>
                    </div>
                </div>

                <div class="ringg-card bg-white border border-slate-100 p-8 retention-card opacity-0 translate-y-12 transition-none mt-0 md:mt-12">
                    <span class="ringg-pill ringg-pill-orange bg-amber-500/10 text-amber-600 border-amber-500 mb-6">24 HRS BEFORE</span>
                    <div class="premium-chat premium-chat-green p-6 max-w-full">
                        <p class="text-[15px] font-medium leading-relaxed text-slate-800">Reminder: See you tomorrow! Please carry your previous reports if any. To reschedule, reply <span class="font-bold">'RE'</span>. 👋</p>
                        <span class="block text-[10px] font-bold tracking-widest text-[#10B981] uppercase text-right mt-4">09:00 AM ✓✓</span>
                    </div>
                </div>

                <div class="ringg-card bg-white border border-slate-100 p-8 retention-card opacity-0 translate-y-12 transition-none">
                    <span class="ringg-pill ringg-pill-green mb-6">2 HRS BEFORE</span>
                    <div class="premium-chat premium-chat-green p-6 max-w-full">
                        <p class="text-[15px] font-medium leading-relaxed text-slate-800">Doctor is on track! You are next in line. Please reach the clinic by 10:20 AM to complete registration. 🏥</p>
                        <span class="block text-[10px] font-bold tracking-widest text-[#10B981] uppercase text-right mt-4">08:30 AM ✓✓</span>
                    </div>
                </div>

                <div class="ringg-card bg-white border border-slate-100 p-8 retention-card opacity-0 translate-y-12 transition-none mt-0 md:mt-12">
                    <span class="ringg-pill mb-6 border-slate-800 text-slate-800 bg-slate-50">POST-VISIT</span>
                    <div class="premium-chat premium-chat-green p-6 max-w-full">
                        <p class="text-[15px] font-medium leading-relaxed text-slate-800">How was your experience today? Tap here to leave a Google Review and help us grow! ⭐⭐⭐⭐⭐</p>
                        <span class="block text-[10px] font-bold tracking-widest text-[#10B981] uppercase text-right mt-4">01:15 PM ✓✓</span>
                    </div>
                </div>
            </div>
    `;

    html = html.substring(0, startIdx) + newSection.trim() + "\n        " + html.substring(endIdx);
}

// Inject GSAP
if (!html.includes("retention-card")) {
    console.log("Could not find retention-card in output html");
}

if (!html.includes("retentionCards") && html.includes("gsap.registerPlugin(ScrollTrigger);")) {
    const gsapReplacement = `
                // Retention Cards staggered reveal
                const retentionCards = gsap.utils.toArray('.retention-card');
                if(retentionCards.length > 0) {
                    gsap.to(retentionCards, {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        stagger: 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: "#retention-grid",
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    });
                }
            }
        });
    </script>`;
    html = html.replace(/            }\s+}\);\s+<\/script>/g, gsapReplacement.trim());
}

fs.writeFileSync('C:/Users/noobg/engageo/how-it-works.html', html);
console.log('Done replacing retention cards.');
