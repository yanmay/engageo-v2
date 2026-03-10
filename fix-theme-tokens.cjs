const fs = require('fs');

function applyThemeFixes() {
    // 1. Fix old variables in all pages
    const files = ['gen-compare.cjs', 'gen-faq-audit.cjs', 'gen-hiw.cjs'];
    const map = {
        'var(--border)': 'var(--rule)',
        'var(--border-light)': 'var(--rule)',
        'var(--warm-white)': 'var(--surface)',
        'var(--muted)': 'var(--ink-muted)',
        'var(--mid)': 'var(--ink)',
        'var(--cream)': 'var(--surface-deep)',
        'var(--sand)': 'var(--surface)',
        'var(--obsidian)': 'var(--deep)'
    };

    files.forEach(f => {
        if (!fs.existsSync(f)) return;
        let code = fs.readFileSync(f, 'utf8');
        for (const [k, v] of Object.entries(map)) {
            code = code.split(k).join(v);
        }

        // Also fix the Free Audit HTML generation in gen-faq-audit.cjs
        if (f === 'gen-faq-audit.cjs') {
            code = code.replace(/<link rel="stylesheet" href="\/shared.css"\/>/,
                `<link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;0,9..144,900;1,9..144,300;1,9..144,900&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="engageo.css"/>`);
            // Fix free audit background
            code = code.replace(/<body class="dark-theme">/g, `<body>`);
        }

        fs.writeFileSync(f, code);
        console.log('Fixed variables in', f);
    });

    // 2. Fix pricing page hardcoded dark mode
    let pricing = fs.readFileSync('gen-pricing.cjs', 'utf8');

    // Fix NAV - ensuring standard eg-nav structure
    pricing = pricing.replace(/const NAV = \(active\) => `<nav class="eg-nav" id="top-nav"[^>]*>([\s\S]*?)<\/nav>`;/,
        `const NAV = (active) => \`<nav class="eg-nav" id="top-nav">
    <a href="/index.html" class="eg-nav__logo">Engageo</a>
    <ul class="eg-nav__links">
        <li><a href="/how-it-works.html"\${active === 'hiw' ? ' style="color:var(--ink);"' : ''}>How It Works</a></li>
        <li><a href="/compare.html"\${active === 'compare' ? ' style="color:var(--ink);"' : ''}>Compare</a></li>
        <li><a href="/pricing.html"\${active === 'pricing' ? ' style="color:var(--ink);border-bottom:1px solid var(--green);"' : ''}>Pricing</a></li>
        <li><a href="/faq.html"\${active === 'faq' ? ' style="color:var(--ink);"' : ''}>FAQ</a></li>
    </ul>
    <a href="/free-audit.html" class="eg-nav__cta">Get the Audit</a>
</nav>\`;`);

    // Fix body style explicitly
    pricing = pricing.replace(/<body style="[^"]*">/, `<body>`);

    // Mapping over specific dark hex colors to engageo.css variables
    const colorMap = {
        '#141210': 'var(--parchment)',
        '#F5F0E8': 'var(--ink)',
        '#2E2A26': 'var(--surface)',
        '#201D1A': 'var(--surface-deep)',
        'rgba(245,240,232,0.55)': 'var(--ink-muted)',
        'rgba(245,240,232,0.65)': 'var(--ink)',
        'rgba(245,240,232,0.30)': 'var(--ink-muted)',
        'rgba(245,240,232,0.3)': 'var(--ink-faint)',
        'rgba(245,240,232,0.4)': 'var(--ink-muted)',
        'rgba(245,240,232,0.8)': 'var(--ink-muted)',
        'rgba(255,255,255,0.08)': 'var(--rule)',
        'rgba(255,255,255,0.06)': 'var(--rule)',
        'rgba(255,255,255,0.04)': 'var(--rule)',
        'rgba(255,255,255,0.2)': 'var(--ink-faint)',
        '#1C1916': 'var(--surface)'
    };

    // Split and join to replace all occurrences
    Object.keys(colorMap).forEach(k => {
        pricing = pricing.split(k).join(colorMap[k]);
    });

    fs.writeFileSync('gen-pricing.cjs', pricing);
    console.log('Fixed pricing CSS variables');
}

applyThemeFixes();
