const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\noobg\\engageo';
const files = ['index.html', 'how-it-works.html', 'pricing.html', 'compare.html', 'faq.html', 'free-audit.html'];

const premiumNav = `    <nav class="fixed z-50 nav-pill px-6 lg:px-10 h-[64px] flex items-center justify-between" id="navbar">
        <div class="flex items-center gap-2">
            <div class="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <span class="material-symbols-outlined text-white text-[20px] md:text-[24px]">call_missed_outgoing</span>
            </div>
            <a href="/index.html" class="text-xl md:text-2xl font-display font-bold tracking-tight text-slate-900 hover:opacity-80 transition-opacity">Engageo</a>
        </div>
        <div class="hidden lg:flex items-center gap-8">
            <a class="text-sm font-bold text-slate-600 hover:text-primary transition-colors hover:-translate-y-0.5 transform inline-block" href="/how-it-works.html">How It Works</a>
            <a class="text-sm font-bold text-slate-600 hover:text-primary transition-colors hover:-translate-y-0.5 transform inline-block" href="/pricing.html">Pricing</a>
            <a class="text-sm font-bold text-slate-600 hover:text-primary transition-colors hover:-translate-y-0.5 transform inline-block" href="/compare.html">Compare</a>
            <a class="text-sm font-bold text-slate-600 hover:text-primary transition-colors hover:-translate-y-0.5 transform inline-block" href="/faq.html">FAQ</a>
        </div>
        <button class="magnetic-btn bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 hidden md:block" onclick="window.location.href='/free-audit.html'">
            Get Free Audit
        </button>
    </nav>`;

const premiumFooter = `    <footer class="bg-[#11181C] text-slate-400 py-16 px-6 lg:px-20 border-t border-slate-800/50 mt-20 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-[#1a2329] to-[#11181C] pointer-events-none z-0"></div>
        <div class="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
            <div class="space-y-6">
                <div class="flex items-center gap-2 text-white">
                    <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
                        <span class="material-symbols-outlined text-white text-xl">call_missed_outgoing</span>
                    </div>
                    <a href="/index.html" class="text-2xl font-display font-bold tracking-tight hover:opacity-80 transition-opacity">Engageo</a>
                </div>
                <p class="text-sm leading-relaxed text-slate-400 max-w-sm">
                    The premium AI voice and messaging platform engineered to recover missed bookings for Indian specialist clinics.
                </p>
                <div class="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full w-fit">
                    <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span class="text-xs font-bold text-emerald-500">System Operational</span>
                </div>
            </div>
            <div>
                <h5 class="text-white font-bold mb-6 tracking-wide">Product</h5>
                <ul class="space-y-4 text-sm font-medium">
                    <li><a class="hover:text-primary hover:translate-x-1 transition-all inline-block" href="/how-it-works.html">How It Works</a></li>
                    <li><a class="hover:text-primary hover:translate-x-1 transition-all inline-block" href="/pricing.html">Pricing Plans</a></li>
                    <li><a class="hover:text-primary hover:translate-x-1 transition-all inline-block" href="/compare.html">Competitor Compare</a></li>
                    <li><a class="hover:text-primary hover:translate-x-1 transition-all inline-block" href="/free-audit.html">Free Clinic Audit</a></li>
                </ul>
            </div>
            <div>
                <h5 class="text-white font-bold mb-6 tracking-wide">Company</h5>
                <ul class="space-y-4 text-sm font-medium">
                    <li><a class="hover:text-primary hover:translate-x-1 transition-all inline-block" href="/faq.html">FAQ</a></li>
                    <li><a class="hover:text-primary hover:translate-x-1 transition-all inline-block" href="javascript:void(0);">Case Studies</a></li>
                    <li><a class="hover:text-primary hover:translate-x-1 transition-all inline-block" href="mailto:hello@engageo.com">Contact Support</a></li>
                </ul>
            </div>
            <div>
                <h5 class="text-white font-bold mb-6 tracking-wide">Legal</h5>
                <ul class="space-y-4 text-sm font-medium">
                    <li><a class="hover:text-primary hover:translate-x-1 transition-all inline-block" href="javascript:void(0);">Privacy Policy</a></li>
                    <li><a class="hover:text-primary hover:translate-x-1 transition-all inline-block" href="javascript:void(0);">Terms of Service</a></li>
                    <li><a class="hover:text-primary hover:translate-x-1 transition-all inline-block" href="javascript:void(0);">DPDP Act Compliance</a></li>
                </ul>
            </div>
        </div>
        <div class="max-w-[1200px] mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium relative z-10">
            <p>© 2024 Engageo Healthcare Technologies Pvt Ltd.</p>
            <div class="flex gap-6">
                <a class="hover:text-white transition-colors" href="javascript:void(0);">LinkedIn</a>
                <a class="hover:text-white transition-colors" href="javascript:void(0);">Twitter</a>
            </div>
        </div>
    </footer>`;

const premiumScript = `
    <!-- Premium Interactions Script -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // Navbar Scroll
            const nav = document.getElementById('navbar');
            if (nav) {
                window.addEventListener('scroll', () => {
                    if (window.scrollY > 40) nav.classList.add('scrolled');
                    else nav.classList.remove('scrolled');
                });
            }

            // Magnetic Buttons (Ringg.ai style)
            const magneticElements = document.querySelectorAll('button, .magnetic-btn, .hover\\\\:-translate-y-1');
            magneticElements.forEach(el => {
                if(!el.classList.contains('magnetic-btn')) el.classList.add('magnetic-btn');
            });

            // Scroll Reveal (Progressive Fade-Up)
            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-revealed');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const sections = document.querySelectorAll('section, .reveal-up');
            sections.forEach((sec, index) => {
                // Ignore the very first hero section as it should be visible immediately
                if (window.scrollY === 0 && sec.getBoundingClientRect().top < window.innerHeight) {
                    sec.classList.add('is-revealed');
                } else {
                    sec.classList.add('reveal-up');
                    revealObserver.observe(sec);
                }
            });
        });
    </script>
`;

files.forEach(file => {
    let filePath = path.join(dir, file);
    if (!fs.existsSync(filePath)) return;
    let html = fs.readFileSync(filePath, 'utf8');

    // 1. Unify Nav
    html = html.replace(/<nav[\s\S]*?<\/nav>/, premiumNav);

    // 2. Unify Footer
    html = html.replace(/<footer[\s\S]*?<\/footer>/, premiumFooter);

    // 3. Clean up bad hrefs
    html = html.replace(/href="\/#"/g, 'href="javascript:void(0);"');
    html = html.replace(/href="#"/g, 'href="javascript:void(0);"');

    // 4. Inject Premium Script Before </body>
    // First, remove old script if it exists to prevent duplicates on rerun
    html = html.replace(/<!-- Premium Interactions Script -->[\s\S]*?<\/script>/, '');
    html = html.replace(/<\/body>/, premiumScript + '\\n</body>');

    fs.writeFileSync(filePath, html);
    console.log('✅ Refactored DOM and Injected Premium Logic into ' + file);
});
