const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\noobg\\engageo';
const files = ['index.html', 'how-it-works.html', 'pricing.html', 'compare.html', 'faq.html', 'free-audit.html'];

files.forEach(file => {
    let filePath = path.join(dir, file);
    if (!fs.existsSync(filePath)) return;
    let html = fs.readFileSync(filePath, 'utf8');

    // Strip ALL global inline <style> tags between the head tags
    html = html.replace(/<style>[\s\S]*?<\/style>/, '');

    fs.writeFileSync(filePath, html);
    console.log(`Cleaned redundant inline CSS from ${file}`);
});
