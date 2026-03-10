const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\noobg\\engageo';
const files = ['how-it-works.html', 'pricing.html', 'faq.html', 'free-audit.html', 'compare.html'];

files.forEach(file => {
    let filePath = path.join(dir, file);
    if (!fs.existsSync(filePath)) return;
    let html = fs.readFileSync(filePath, 'utf8');

    // 1. Replace Generic Cards
    html = html.replace(/class="bg-white rounded-xl border border-slate-200 p-8 flex flex-col hover:shadow-xl transition-shadow"/g, 'class="ringg-card flex flex-col space-y-4"');
    html = html.replace(/class="relative bg-white rounded-xl border-2 border-primary p-8 flex flex-col shadow-2xl shadow-primary\/10 transform scale-105 z-10"/g, 'class="ringg-card border-2 border-primary flex flex-col space-y-4 relative transform md:-translate-y-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)]"');
    html = html.replace(/class="max-w-7xl mx-auto rounded-2xl border-l-8 border-emerald-500 bg-emerald-50 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"/g, 'class="ringg-card bg-emerald-50/50 flex flex-col md:flex-row items-center justify-between gap-8 border-l-[6px] border-l-emerald-500"');
    html = html.replace(/class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white p-8 md:p-16 rounded-3xl border border-slate-100 shadow-sm"/g, 'class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center ringg-card md:!p-16"');
    html = html.replace(/class="bg-slate-50 p-8 rounded-2xl border border-slate-200"/g, 'class="ringg-card bg-slate-50 border-none hover:-translate-y-1 transition-transform"');

    // Free Audit Form specific
    html = html.replace(/class="mt-12 w-full max-w-\[560px\] bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl shadow-primary\/5 border border-primary\/10"/g, 'class="mt-12 w-full max-w-[560px] ringg-card"');

    // Replace basic pills where applicable
    html = html.replace(/class="px-3 py-1 bg-accent-green\/10 text-accent-green text-\[10px\] font-bold rounded-full"/g, 'class="ringg-pill ringg-pill-green"');

    // Top headers or generic "verified" badges
    html = html.replace(/class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary\/10 border border-primary\/20 text-primary text-sm font-bold mb-6"/g, 'class="ringg-pill ringg-pill-orange mb-6 text-[12px] px-4 py-2"');

    fs.writeFileSync(filePath, html);
    console.log('✅ Injected premium tokens into ' + file);
});
