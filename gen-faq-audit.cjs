const fs = require('fs'), path = require('path');

const NAV = (active) => `<nav class="eg-nav" id="top-nav">
    <a href="/index.html" class="eg-nav__logo">Engageo</a>
    <ul class="eg-nav__links">
        <li><a href="/how-it-works.html"${active === 'hiw' ? ' style="color:var(--ink);"' : ''}>How It Works</a></li>
        <li><a href="/compare.html"${active === 'compare' ? ' style="color:var(--ink);"' : ''}>Compare</a></li>
        <li><a href="/pricing.html"${active === 'pricing' ? ' style="color:var(--ink);"' : ''}>Pricing</a></li>
        <li><a href="/faq.html"${active === 'faq' ? ' style="color:var(--ink);"' : ''}>FAQ</a></li>
    </ul>
    <a href="/free-audit.html" class="eg-nav__cta">Get the Audit</a>
</nav>`;
const FOOT = () => `<footer class="eg-footer"><div class="eg-footer__top"><div class="eg-footer__brand"><span class="eg-footer__logo" style="font-family:var(--serif);font-size:20px;font-weight:700;color:var(--parchment)">Engageo</span><p style="margin-top:12px">We answer the calls your clinic misses. Autonomous missed-call recovery for high-ticket Indian specialists.</p><div style="margin-top:24px;display:flex;align-items:center;gap:8px"><span style="width:8px;height:8px;border-radius:50%;background:var(--teal);display:inline-block"></span><span class="f-label" style="font-size:10px;color:var(--teal)">SYSTEMS OPERATIONAL</span></div></div><div class="eg-footer__links" style="display:flex;gap:40px;flex-wrap:wrap"><div class="eg-footer__col" style="display:flex;flex-direction:column;gap:12px"><strong style="color:var(--parchment)">Platform</strong><a href="/how-it-works.html">How It Works</a><a href="/pricing.html">Pricing</a><a href="/compare.html">Compare</a><a href="/faq.html">FAQ</a></div><div class="eg-footer__col" style="display:flex;flex-direction:column;gap:12px"><strong style="color:var(--parchment)">Clinic Types</strong><span>Hair Transplant</span><span>Dental & Implants</span><span>IVF & Fertility</span><span>Dermatology</span></div><div class="eg-footer__col" style="display:flex;flex-direction:column;gap:12px"><strong style="color:var(--parchment)">Legal</strong><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">DPDP Act Compliance</a></div></div></div><div class="eg-footer__bottom" style="border-top:1px solid rgba(245,240,232,0.1);padding-top:24px;margin-top:40px;display:flex;justify-content:space-between;font-size:12px;color:rgba(245,240,232,0.4)"><span>&copy; <script>document.write(new Date().getFullYear())</script> Engageo. Built for India.</span><span>Strictly No Medical Advice Provided.</span></div></footer>`;
const JS = () => `<script>(function(){var n=document.getElementById('navPill'),m=document.getElementById('mobileMenu');window.addEventListener('scroll',function(){if(n)n.classList.toggle('scrolled',window.scrollY>20);});var b=document.getElementById('hamburgerBtn'),c=document.getElementById('mobileClose');function op(){m.classList.add('open');document.body.style.overflow='hidden';}function cl(){m.classList.remove('open');document.body.style.overflow='';}if(b)b.addEventListener('click',op);if(c)c.addEventListener('click',cl);if(m)m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',cl);});window.toggleFaq=function(el){el.parentElement.classList.toggle('open');};var obs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('active');obs.unobserve(e.target);}});},{threshold:0.08,rootMargin:'0px 0px -32px 0px'});document.querySelectorAll('.reveal').forEach(function(el){obs.observe(el);});}());</script>`;
const FAQ_STYLE = `<style>.faq-item.open .faq-chevron{transform:rotate(180deg)!important}.faq-item.open .faq-answer{max-height:400px!important}</style>`;

const faqData = [
  ['Is using AI for medical calls legal in India?', 'Yes. Engageo is a scheduling and qualification system — it does not provide medical advice, diagnoses, or treatment recommendations. It is compliant with the IT Act, the Digital Personal Data Protection Act 2023 (DPDP), and Telemedicine Guidelines 2020. All recordings are stored in Indian data centers.'],
  ['What if the patient figures out it\'s AI?', 'Most don\'t. And those who do don\'t mind — they got a callback in 8 seconds instead of a voicemail. We\'re solving a speed problem, not impersonating a doctor.'],
  ['What happens if we don\'t hit 15 bookings in 30 days?', 'We keep going for free until we do. No refund negotiation. No invoices. Just the number we promised you. This applies to all three tiers.'],
  ['Does Engageo integrate with Practo or HMS software?', 'We work on top of Google Calendar, not inside your HMS. If your front desk uses Google Calendar to manage appointments, you\'re ready. Practo integration is on our roadmap for Q3 2025.'],
  ['What if the AI can\'t answer a patient\'s question?', 'It doesn\'t guess. It captures the patient\'s name and number, tells them the clinic team will call back within the hour, and sends you an instant WhatsApp alert. No patient is left without a response.'],
  ['How long does setup take?', '4 days from signature. Day 1–2 we configure the AI with your clinic details, doctor schedule, and specialties. Day 3 we test with you over a live call. Day 4 you\'re live. No IT team required on your end.'],
  ['Can Engageo handle multiple doctors or clinics?', 'Yes. Engageo is configured per clinic, per doctor, per specialty. If you have 3 doctors with different schedules, we configure 3 independent qualification flows that all feed into your Google Calendar.'],
  ['Can I pause during a holiday or leave?', 'Yes. You can pause or redirect calls with a simple WhatsApp message to your account manager. There\'s no penalty for pausing — we bill by the month.'],
  ['Is WhatsApp Business required?', 'Yes, for the WhatsApp sequence. You\'ll need a WhatsApp Business account. If you don\'t have one, we help set it up during onboarding. There\'s no extra charge.'],
  ['What about patient data privacy?', 'All data is stored in Indian data centers. We do not share patient data with third parties. Recordings are encrypted and available for download for 90 days before automatic deletion. We sign a Data Processing Agreement (DPA) with every clinic.'],
  ['Does Engageo replace my receptionist?', 'No. Engageo fills the gap your receptionist physically can\'t cover: missed calls during consultations, after-hours inquiries, and the 30-second window between a call going unanswered and a patient dialling your competitor. Your receptionist stays.'],
  ['How does the pricing work if I run ads too?', 'On the Grow tier, your ad spend is passed through at exact cost — you see every invoice, there is no markup. Our fee of ₹55K/mo covers management. You own the ad account.'],
];

const cat = (label) => `<div style="font-family:var(--sans);font-size:13px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:var(--ink);padding:36px 0 12px;border-bottom:2px solid var(--ink);margin-bottom:8px">${label}</div>`;
const faqItem = ([q, a]) => `<div class="faq-item"><div class="faq-question" onclick="toggleFaq(this)" style="display:flex;justify-content:space-between;align-items:center;gap:16px;padding:20px 0;cursor:pointer;font-size:16px;font-weight:700;color:var(--ink);border-bottom:1px solid var(--rule)">${q}<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="faq-chevron" style="flex-shrink:0;transition:transform 0.25s"><polyline points="6 9 12 15 18 9"/></svg></div><div class="faq-answer" style="max-height:0;overflow:hidden;transition:max-height 0.4s 0.05s,padding 0.3s"><div style="font-size:14px;color:var(--ink);line-height:1.7;padding:0 0 20px">${a}</div></div></div>`;

const faq = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>FAQ &mdash; Engageo</title>
<meta name="description" content="Answers to every question Indian specialist clinic owners ask before signing up with Engageo. Legal compliance, pricing, integration, setup time, and more."/>
<link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;0,9..144,900;1,9..144,300;1,9..144,900&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="engageo.css"/>
</head>
<body>
<div id="react-faq-root"></div>
<script type="module" src="/src/faq-mount.tsx"></script>
</body></html>`;

fs.writeFileSync(path.join(__dirname, 'faq.html'), faq, 'utf8');
console.log('faq.html written:', faq.length, 'bytes');

// ━━━ FREE AUDIT PAGE ━━━
const audit = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Free Missed Call Audit &mdash; Engageo</title>
<meta name="description" content="Get a free missed call audit for your specialist clinic. In 24 hours, we show you exactly how many calls you're missing and what they're worth."/>
<link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;0,9..144,900;1,9..144,300;1,9..144,900&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="engageo.css"/>
</head>
<body>
<div id="react-audit-root"></div>
<script type="module" src="/src/audit-mount.tsx"></script>
</body></html>`;

fs.writeFileSync(path.join(__dirname, 'free-audit.html'), audit, 'utf8');
console.log('free-audit.html written:', audit.length, 'bytes');
