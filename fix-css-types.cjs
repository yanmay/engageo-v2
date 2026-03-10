const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\noobg\\engageo';
const files = ['index.html', 'how-it-works.html', 'pricing.html', 'compare.html', 'faq.html', 'free-audit.html'];

files.forEach(file => {
    let filePath = path.join(dir, file);
    if (!fs.existsSync(filePath)) return;
    let html = fs.readFileSync(filePath, 'utf8');

    // Remove nav.scrolled or .nav-scrolled from inline <style> since it's in styles.css
    html = html.replace(/(\.nav-scrolled|nav\.scrolled)\s*\{[\s\S]*?\}/g, '');

    // Replace theme() in compare.html
    html = html.replace(/theme\('colors\.brand-orange-highlight'\)/g, 'rgba(255, 107, 43, 0.05)');

    // Convert <style type="text/tailwindcss"> to <style>
    html = html.replace(/<style type="text\/tailwindcss">/g, '<style>');

    fs.writeFileSync(filePath, html);
    console.log(`Removed text/tailwindcss styles in ${file}`);
});
