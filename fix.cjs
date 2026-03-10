const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\noobg\\engageo';
const files = ['index.html', 'how-it-works.html', 'pricing.html', 'compare.html', 'faq.html', 'free-audit.html'];

const fontLink = '<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&family=Nunito+Sans:wght@300;400;600;700&display=swap" rel="stylesheet"/>\n<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>';

files.forEach(file => {
    let filePath = path.join(dir, file);
    if (!fs.existsSync(filePath)) return;
    let html = fs.readFileSync(filePath, 'utf8');

    // 1. Replace Google Fonts
    html = html.replace(/<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=[^>]+>/g, '');
    html = html.replace(/<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=Material\+Symbols[^>]+>/g, '');

    // Insert new fonts before </head>
    if (!html.includes('family=Space+Grotesk')) {
        html = html.replace('</head>', `    ${fontLink}\n</head>`);
    }

    // 2. Insert styles.css
    if (!html.includes('href="/styles.css"')) {
        html = html.replace('</head>', `    <link rel="stylesheet" href="/styles.css">\n</head>`);
    }

    // 3. Update Tailwind config mapping for fonts (some files have wrong ones)
    html = html.replace(/"display":\s*\["Manrope"/g, '"display": ["Space Grotesk"');
    html = html.replace(/"display":\s*\["Nunito Sans"/g, '"display": ["Space Grotesk"');

    // 4. Link mapping replacements
    const links = [
        { regex: /href="#"([^>]*)>([^<]*)(How It Works|How it works)([^<]*)<\/a>/gi, replace: 'href="/how-it-works.html"$1>$2$3$4</a>' },
        { regex: /href="#"([^>]*)>([^<]*)Pricing([^<]*)<\/a>/gi, replace: 'href="/pricing.html"$1>$2Pricing$3</a>' },
        { regex: /href="#"([^>]*)>([^<]*)Compare([^<]*)<\/a>/gi, replace: 'href="/compare.html"$1>$2Compare$3</a>' },
        { regex: /href="#"([^>]*)>([^<]*)FAQ([^<]*)<\/a>/gi, replace: 'href="/faq.html"$1>$2FAQ$3</a>' },
        { regex: /href="#"([^>]*)>([^<]*)Contact([^<]*)<\/a>/gi, replace: 'href="mailto:hello@engageo.com"$1>$2Contact$3</a>' },
        { regex: /href="#"([^>]*)>([^<]*)Privacy Policy([^<]*)<\/a>/gi, replace: 'href="/#"$1>$2Privacy Policy$3</a>' },
        { regex: /href="#"([^>]*)>([^<]*)Terms of Service([^<]*)<\/a>/gi, replace: 'href="/#"$1>$2Terms of Service$3</a>' }
    ];

    links.forEach(l => {
        html = html.replace(l.regex, l.replace);
    });

    // Make "Get Free Audit" buttons functional
    html = html.replace(/<button([^>]*)>(\s*Get Free Audit\s*)<\/button>/gi, '<button$1 onclick="window.location.href=\'/free-audit.html\'">$2</button>');
    html = html.replace(/<button([^>]*)>(\s*Start Free Trial\s*)<\/button>/gi, '<button$1 onclick="window.location.href=\'/pricing.html\'">$2</button>');

    // Make Logo functional
    html = html.replace(/<span class="text-2xl font-display font-bold tracking-tight">Engageo<\/span>/g, '<a href="/" class="text-2xl font-display font-bold tracking-tight hover:opacity-80 transition-opacity">Engageo</a>');

    // Clean up empty href="#" that wasn't processed above
    html = html.replace(/href="#"/g, 'href="javascript:void(0)"');

    fs.writeFileSync(filePath, html);
    console.log(`Processed ${file}`);
});
