const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\noobg\\engageo';
const files = ['index.html', 'how-it-works.html', 'pricing.html', 'faq.html', 'free-audit.html', 'compare.html'];

files.forEach(file => {
    let filePath = path.join(dir, file);
    if (!fs.existsSync(filePath)) return;
    let html = fs.readFileSync(filePath, 'utf8');

    // 1. FAQ Green Banner -> Minimalist Banner
    html = html.replace(/class="bg-\[#25D366\] rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden shadow-2xl shadow-\[#25D366\]\/20"/g, 'class="ringg-card bg-slate-50 border-none p-8 md:p-12 text-slate-900 text-center relative overflow-hidden hover:-translate-y-1 transition-transform"');
    html = html.replace(/class="px-8 py-4 bg-white text-\[#25D366\] rounded-xl font-bold hover:shadow-lg transition-shadow"/g, 'class="magnetic-btn px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold shadow-[0_10px_20px_-10px_rgba(16,185,129,0.5)]"');

    // 2. Global Footer CTA (Bright Orange -> Premium Dark Float)
    html = html.replace(/<section class="bg-primary py-20 px-6 lg:px-20 text-center relative overflow-hidden">/g, '<section class="ringg-card bg-slate-900 border-none text-white py-20 px-6 lg:px-20 text-center relative overflow-hidden max-w-6xl mx-auto mb-20 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]">');
    // Inside the Dark Float CTA, turn the button from white/primary to pure white with dark text
    html = html.replace(/class="px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:shadow-xl transition-shadow"/g, 'class="magnetic-btn px-8 py-4 bg-white text-slate-900 rounded-xl font-bold text-lg shadow-[0_10px_20px_-10px_rgba(255,255,255,0.2)]"');

    // 3. Fix Index.html Chat Bubble text colors (since background is now white)
    if (file === 'index.html') {
        html = html.replace(/text-white text-\[15px\] leading-relaxed font-medium/g, 'text-slate-800 text-[15px] leading-relaxed font-medium');
        html = html.replace(/text-\[10px\] font-bold tracking-widest text-green-100 uppercase opacity-90/g, 'text-[10px] font-bold tracking-widest text-[#10B981] uppercase');
    }

    // 4. Any rogue "/>" next to standard tags (just cleaning up possible artifacts mentioned by subagent)
    html = html.replace(/<\/a>\/>/g, '</a>');

    fs.writeFileSync(filePath, html);
    console.log('✅ Polished colors/CTA banners in ' + file);
});
