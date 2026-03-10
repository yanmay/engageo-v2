const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\noobg\\engageo';
const files = ['index.html', 'how-it-works.html', 'pricing.html', 'compare.html', 'faq.html', 'free-audit.html'];

const standardNav = `    <nav class="fixed top-0 w-full z-50 bg-transparent transition-all duration-300" id="navbar">
        <div class="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">
            <div class="flex items-center gap-2">
                <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span class="material-symbols-outlined text-white text-xl">call_missed_outgoing</span>
                </div>
                <a href="/index.html" class="text-2xl font-display font-bold tracking-tight hover:opacity-80 transition-opacity">Engageo</a>
            </div>
            <div class="hidden md:flex items-center gap-8">
                <a class="text-sm font-medium hover:text-primary transition-colors" href="/how-it-works.html">How It Works</a>
                <a class="text-sm font-medium hover:text-primary transition-colors" href="/pricing.html">Pricing</a>
                <a class="text-sm font-medium hover:text-primary transition-colors" href="/compare.html">Compare</a>
                <a class="text-sm font-medium hover:text-primary transition-colors" href="/faq.html">FAQ</a>
            </div>
            <button class="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20" onclick="window.location.href='/free-audit.html'">
                Get Free Audit
            </button>
        </div>
    </nav>`;

files.forEach(file => {
    let filePath = path.join(dir, file);
    if (!fs.existsSync(filePath)) return;
    let html = fs.readFileSync(filePath, 'utf8');

    // Remove the existing nav (handling different tag classes and structures)
    // We assume there's only one <nav... </nav> block that is the main header
    html = html.replace(/<nav[\s\S]*?<\/nav>/, standardNav);

    // Fix the CSS error in faq.html
    html = html.replace(/dark:bg-background-dark\/70/g, 'dark:bg-slate-900/80');

    fs.writeFileSync(filePath, html);
    console.log(`Updated navbar and fixed CSS in ${file}`);
});
