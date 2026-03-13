const siteName = 'Engageo';

function generateHTML() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
    <title>Pricing — ${siteName}</title>
    <meta name="description" content="Transparent pricing for autonomous missed-call recovery. 15 confirmed bookings guaranteed in 30 days or we work for free."/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&family=IBM+Plex+Mono:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="engageo.css"/>
</head>
<body class="bg-[var(--clinic-white)]">
    <div id="react-pricing-root"></div>
    <script type="module" src="/src/pricing-mount.tsx"></script>
</body></html>`;
}

const fs = require('fs');
fs.writeFileSync('pricing.html', generateHTML());
console.log('pricing.html regenerated successfully.');
