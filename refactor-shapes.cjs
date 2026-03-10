const fs = require('fs');
const glob = require('glob');

const cssPath = 'C:/Users/noobg/engageo/styles.css';
let css = fs.readFileSync(cssPath, 'utf8');

// Update Fonts
css = css.replace(/font-family:\s*'Space Grotesk',\s*sans-serif;/g, "font-family: 'Nunito Sans', sans-serif;");

// Update capsule shapes in CSS
css = css.replace(/\.ringg-pill\s*\{[^}]*border-radius:\s*9999px;/g, (match) => match.replace('9999px', '6px'));
css = css.replace(/\.nav-pill\s*\{[^}]*border-radius:\s*9999px\s*!important;/g, (match) => match.replace('9999px', '20px'));

fs.writeFileSync(cssPath, css);

const files = fs.readdirSync('C:/Users/noobg/engageo').filter(f => f.endsWith('.html'));

files.forEach(file => {
    let filePath = 'C:/Users/noobg/engageo/' + file;
    let html = fs.readFileSync(filePath, 'utf8');

    // Convert inline rounded-full capsules to rounded-md or rounded-xl
    // Buttons and badges usually have px- and py- combined with rounded-full
    html = html.replace(/rounded-full/g, (match, offset, str) => {
        // If it looks like a perfect circle (w-8 h-8 rounded-full), keep it full.
        // Otherwise, it's a capsule (px-4 py-2 rounded-full).
        const prefix = str.substring(Math.max(0, offset - 50), offset);
        const suffix = str.substring(offset, Math.min(str.length, offset + 50));
        const context = prefix + suffix;

        if (context.match(/size-\d|w-\d+\s+h-\d+|rounded-full\s+w-\d+\s+h-\d+/)) {
            return 'rounded-full'; // Keep true circles
        } else if (context.includes('bg-') && context.includes('text-white') && context.includes('uppercase')) {
            return 'rounded-md'; // Capsule badge
        } else if (context.includes('magnetic-btn') || context.includes('button')) {
            return 'rounded-xl'; // Button capsule
        } else if (context.match(/px-\d+\s+py-\d+/)) {
            // Random variation to make it look "not AI generated" - mix of md and lg
            return Math.random() > 0.5 ? 'rounded-lg' : 'rounded-md';
        }
        return 'rounded-md'; // Default fallback for capsules
    });

    // Enforce Nunito Sans in tailwind config inside HTML
    html = html.replace(/"display":\s*\["Space Grotesk",\s*"sans-serif"\]/g, '"display": ["Nunito Sans", "sans-serif"]');

    fs.writeFileSync(filePath, html);
});

console.log('Fonts and shapes refactored.');
