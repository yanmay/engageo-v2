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
${FAQ_STYLE}
</head>
<body>
${NAV('faq')}
<section style="padding:160px 0 0px">
<div class="container">
  <div style="display:flex;justify-content:space-between;align-items:flex-end;gap:40px;border-bottom:1px solid var(--rule);padding-bottom:48px;margin-bottom:64px;flex-wrap:wrap">
    <div style="flex:1;min-width:300px">
      <div class="label" style="padding:0;border:none;margin-bottom:24px;letter-spacing:0.15em">FAQ</div>
      <h1 class="reveal f-h2" style="font-size:56px;color:var(--ink)">Your questions,<br>answered directly.</h1>
      <p style="font-size:17px;color:var(--ink);margin-top:16px;max-width:520px" class="reveal">No vague marketing answers. Here&rsquo;s exactly what clinic owners ask before going live. If you don&rsquo;t find your answer, <a href="https://wa.me/917696382250" style="color:var(--blue);text-decoration:underline;text-underline-offset:2px">message us on WhatsApp</a>.</p>
    </div>
  </div>
</div>
</section>
<section style="padding:0 0 80px">
<div class="container">
<div style="max-width:820px">
  ${cat('Legal &amp; Compliance')}
  ${faqData.slice(0, 2).map(faqItem).join('')}
  ${cat('The Guarantee')}
  ${faqItem(faqData[2])}
  ${cat('Technical')}
  ${faqData.slice(3, 7).map(faqItem).join('')}
  ${cat('Operations')}
  ${faqData.slice(7, 10).map(faqItem).join('')}
  ${cat('Product &amp; Pricing')}
  ${faqData.slice(10).map(faqItem).join('')}
  <div style="margin-top:64px;background:var(--surface);border:1px solid var(--rule);border-radius:16px;padding:32px;text-align:center" class="reveal">
    <h3 style="font-size:24px;margin-bottom:12px">Still have questions?</h3>
    <p style="color:var(--ink);margin-bottom:24px">Message us directly on WhatsApp. We respond in under 4 hours on weekdays.</p>
    <a href="https://wa.me/917696382250" target="_blank" class="btn btn-hero">WhatsApp Us &rarr;</a>
  </div>
</div>
</div>
</section>
${FOOT()}${JS()}</body></html>`;

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
<link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;0,9..144,900;1,9..144,300;1,9..144,900&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="engageo.css"/>
<style>
.audit-layout{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;padding-top:160px;padding-bottom:80px;}
.audit-left{position:sticky;top:100px;}
.audit-left h1{font-size:42px;}
.audit-left p{font-size:17px;color:var(--ink);line-height:1.6;margin:16px 0 32px;}
.benefit-list{display:flex;flex-direction:column;gap:14px;margin-bottom:32px;}
.benefit{display:flex;align-items:flex-start;gap:12px;font-size:14px;color:var(--ink);line-height:1.5;}
.benefit-icon{width:20px;height:20px;border-radius:6px;background:var(--green);display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700;flex-shrink:0;margin-top:1px;}
.guarantee-card{background:var(--deep);border-radius:12px;padding:20px 24px;}
.guarantee-card h4{font-size:14px;font-weight:700;color:#fff;margin-bottom:6px;}
.guarantee-card p{font-size:12px;color:rgba(255,255,255,0.5);line-height:1.5;}
.form-card{background:var(--surface);border:1px solid var(--rule);border-radius:16px;padding:36px;}
.form-title{font-size:20px;font-weight:700;color:var(--ink);margin-bottom:6px;}
.form-sub{font-size:13px;color:var(--ink-muted);margin-bottom:28px;}
.field{display:flex;flex-direction:column;gap:6px;margin-bottom:16px;}
.f-label{font-size:13px;font-weight:600;color:var(--ink);}
.submit-btn{width:100%;height:52px;background:var(--black);color:#fff;border:none;border-radius:8px;font-size:16px;font-weight:600;cursor:pointer;font-family:var(--font);transition:background 0.25s;margin-top:8px;}
.submit-btn:hover{background:var(--green);}
.form-fine{font-size:11px;color:var(--ink-muted);text-align:center;margin-top:12px;line-height:1.5;}
.trust-bar{display:flex;justify-content:center;gap:24px;flex-wrap:wrap;margin-top:40px;}
.trust-item{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--ink-muted);font-weight:600;}
@media(max-width:900px){.audit-layout{grid-template-columns:1fr;padding-top:120px;gap:40px;}.audit-left{position:static;}}
</style>
</head>
<body>
${NAV('')}
<section>
<div class="container">
<div class="audit-layout">
  <div class="audit-left reveal">
    <div class="f-label" style="margin-bottom:20px;display:inline-block">Free Audit</div>
    <h1 class="f-h2" style="font-size:clamp(36px, 4.5vw, 48px);line-height:1.1;letter-spacing:-0.03em;margin-bottom:16px;color:var(--ink)">Find out exactly what you&rsquo;re losing.</h1>
    <p class="f-body" style="color:var(--ink-muted);margin:16px 0 32px">In 24 hours, we&rsquo;ll tell you how many calls your clinic is missing, what each missed call costs on average, and what your monthly recovery potential is. No commitment. No sales pressure unless you want it.</p>
    <div class="benefit-list">
      <div class="benefit"><div class="benefit-icon">&#x2713;</div><div class="f-body"><strong style="color:var(--ink)">Missed call count</strong> &mdash; We review your phone data and estimate how many calls went unanswered in the last 30 days.</div></div>
      <div class="benefit"><div class="benefit-icon">&#x2713;</div><div class="f-body"><strong style="color:var(--ink)">Revenue at risk</strong> &mdash; Based on your specialty and average procedure value, we calculate what those calls are worth.</div></div>
      <div class="benefit"><div class="benefit-icon">&#x2713;</div><div class="f-body"><strong style="color:var(--ink)">Recovery plan</strong> &mdash; We show you which tier would cover your volume and what your first-month ROI would look like.</div></div>
      <div class="benefit"><div class="benefit-icon">&#x2713;</div><div class="f-body"><strong style="color:var(--ink)">No obligation</strong> &mdash; You get the audit report whether or not you decide to use Engageo.</div></div>
    </div>
    <div class="guarantee-card">
      <h4 style="font-family:var(--mono);font-size:14px;font-weight:700;color:var(--white);margin-bottom:6px">The 15-Booking Guarantee</h4>
      <p style="font-family:var(--mono);font-size:12px;color:rgba(255,255,255,0.5);line-height:1.5">If your clinic doesn&rsquo;t receive 15 confirmed bookings in the first 30 days, we extend the service at zero cost until we hit that number. No negotiation. No invoices.</p>
    </div>
  </div>
  <div class="reveal">
    <div class="form-card">
      <div class="form-title f-card-title">Request Your Free Audit</div>
      <div class="form-sub f-body" style="font-size:13px;color:var(--ink-muted);margin-bottom:28px">Delivered via WhatsApp in 24 hours or less.</div>
      <div class="field"><label class="f-label" for="fName">Your Name</label><input id="fName" type="text" style="width:100%;height:44px;padding:0 14px;border:1px solid var(--rule);border-radius:8px;background:#fff;font-family:var(--mono);font-size:13px;color:var(--ink)" placeholder="Dr. Sharma"/></div>
      <div class="field"><label class="f-label" for="fClinic">Clinic Name &amp; City</label><input id="fClinic" type="text" style="width:100%;height:44px;padding:0 14px;border:1px solid var(--rule);border-radius:8px;background:#fff;font-family:var(--mono);font-size:13px;color:var(--ink)" placeholder="Smile Dental Clinic, New Delhi"/></div>
      <div class="field"><label class="f-label" for="fSpec">Specialty</label><select id="fSpec" style="width:100%;height:44px;padding:0 14px;border:1px solid var(--rule);border-radius:8px;background:#fff;font-family:var(--mono);font-size:13px;color:var(--ink)"><option value="">Select your specialty</option><option>Hair Transplant</option><option>Dental &amp; Oral Surgery</option><option>Dermatology</option><option>Fertility &amp; IVF</option><option>Orthopaedics</option><option>Ophthalmology</option><option>Cosmetic Surgery</option><option>ENT</option><option>Other</option></select></div>
      <div class="field"><label class="f-label" for="fCalls">Approximate calls per day</label><select id="fCalls" style="width:100%;height:44px;padding:0 14px;border:1px solid var(--rule);border-radius:8px;background:#fff;font-family:var(--mono);font-size:13px;color:var(--ink)"><option value="">Select range</option><option>Under 20</option><option>20&ndash;50</option><option>50&ndash;100</option><option>100+</option></select></div>
      <div class="field"><label class="f-label" for="fPhone">WhatsApp Number</label><input id="fPhone" type="tel" style="width:100%;height:44px;padding:0 14px;border:1px solid var(--rule);border-radius:8px;background:#fff;font-family:var(--mono);font-size:13px;color:var(--ink)" placeholder="+91 98765 43210"/></div>
      <a href="https://wa.me/917696382250" target="_blank" rel="noopener">
        <button class="btn btn-primary" type="button" style="width:100%;justify-content:center;margin-top:16px">Send My Audit Request &rarr;</button>
      </a>
      <p class="form-fine" style="font-family:var(--mono);font-size:11px;color:var(--ink-muted);text-align:center;margin-top:16px;line-height:1.5">By submitting, you&rsquo;ll receive the audit report on WhatsApp within 24 hours. We don&rsquo;t share your data with anyone. No spam.</p>
    </div>
    <div class="trust-bar">
      <div class="trust-item"><span style="color:var(--green)">&#x2713;</span> No credit card</div>
      <div class="trust-item"><span style="color:var(--green)">&#x2713;</span> DPDP Act compliant</div>
      <div class="trust-item"><span style="color:var(--green)">&#x2713;</span> 24hr response</div>
      <div class="trust-item"><span style="color:var(--green)">&#x2713;</span> 47+ clinics live</div>
    </div>
  </div>
</div>
</div>
</section>
${FOOT()}${JS()}</body></html>`;

fs.writeFileSync(path.join(__dirname, 'free-audit.html'), audit, 'utf8');
console.log('free-audit.html written:', audit.length, 'bytes');
