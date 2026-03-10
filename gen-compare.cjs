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

// ━━━ COMPARE PAGE ━━━
const compare = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Compare &mdash; Engageo vs Receptionist vs Bots</title>
<meta name="description" content="How Engageo compares to a full-time receptionist, a generic chatbot, and doing nothing. Data-led comparison for Indian specialist clinics."/>
<link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;0,9..144,900;1,9..144,300;1,9..144,900&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="engageo.css"/>
<style>
.page-hero{padding:160px 0 72px;}
.comp-table{width:100%;border:1px solid var(--rule);border-radius:12px;overflow:hidden;border-collapse:collapse;}
.comp-table th{padding:16px;font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;text-align:left;border-bottom:1px solid var(--rule);background:var(--surface);color:var(--ink-muted);}
.comp-table th.eng{background:var(--deep);color:rgba(255,255,255,0.6);}
.comp-table td{padding:14px 16px;font-size:14px;color:var(--ink);border-bottom:1px solid var(--rule);vertical-align:top;}
.comp-table tr:last-child td{border-bottom:none;}
.comp-table td.feat{font-weight:600;color:var(--ink);background:var(--surface-deep);}
.comp-table td.eng-col{background:rgba(42,43,42,0.03);}
.yes{color:var(--green);font-weight:700;}
.no{color:var(--red);}
.par{color:var(--gold);}
.cat-row td{background:var(--surface);font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink-muted);padding:8px 16px;}
/* Cost comparison */
.cost-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:48px;}
.cost-card{background:var(--surface);border:1px solid var(--rule);border-radius:12px;padding:24px;}
.cost-card.eng{background:var(--deep);}
.cost-title{font-size:13px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:8px;}
.cost-card.eng .cost-title{color:rgba(255,255,255,0.5);}
.cost-num{font-size:24px;font-weight:700;color:var(--ink);letter-spacing:-0.02em;}
.cost-card.eng .cost-num{color:#fff;}
.cost-note{font-size:12px;color:var(--ink-muted);margin-top:4px;line-height:1.5;}
.cost-card.eng .cost-note{color:rgba(255,255,255,0.4);}
@media(max-width:900px){.comp-table{display:block;overflow-x:auto;white-space:nowrap;}.cost-grid{grid-template-columns:1fr 1fr;}}
@media(max-width:600px){.cost-grid{grid-template-columns:1fr;}}
</style>
</head>
<body>
${NAV('compare')}
<section class="page-hero" style="padding:160px 0 0px">
<div class="container">
  <div style="display:flex;justify-content:space-between;align-items:flex-end;gap:40px;border-bottom:1px solid var(--rule);padding-bottom:48px;margin-bottom:48px;flex-wrap:wrap">
    <div style="flex:1;min-width:300px">
      <div class="label" style="padding:0;border:none;margin-bottom:24px;letter-spacing:0.15em">Compare</div>
      <h1 class="reveal f-h2" style="font-size:56px;color:var(--ink)">Every clinic already has<br>a solution. It&rsquo;s not working.</h1>
      <p style="font-size:17px;color:var(--ink);max-width:520px;margin-top:16px" class="reveal">A full-time receptionist costs &#x20B9;3&ndash;5L/year and misses 38% of peak-hour calls. A generic bot gets hung up on. Doing nothing costs &#x20B9;5&ndash;40L in missed revenue annually. Here&rsquo;s the full comparison.</p>
    </div>
  </div>
</div>
</section>
<section class="section-sm">
<div class="container">
  <div class="cost-grid reveal">
    <div class="cost-card"><div class="cost-title">Full-time Receptionist</div><div class="cost-num">&#x20B9;3&ndash;5L/yr</div><p class="cost-note">Misses 38% of calls at peak. Takes sick leave. Doesn&rsquo;t work nights or weekends.</p></div>
    <div class="cost-card"><div class="cost-title">Generic Chatbot</div><div class="cost-num">&#x20B9;0&ndash;3K/mo</div><p class="cost-note">Answers on WhatsApp only. Can&rsquo;t call back. Can&rsquo;t qualify. Can&rsquo;t book real slots.</p></div>
    <div class="cost-card"><div class="cost-title">Doing Nothing</div><div class="cost-num">&#x20B9;5&ndash;40L/yr</div><p class="cost-note">The actual cost in missed bookings based on 47 clinic audits at &#x20B9;24K avg recovery per call.</p></div>
    <div class="cost-card eng"><div class="cost-title">Engageo Recover</div><div class="cost-num">&#x20B9;25K/mo</div><p class="cost-note">24/7 coverage. 8s callback. Runs when you&rsquo;re with patients. No sick days. No peak-hour gaps.</p></div>
  </div>
  <div class="reveal" style="margin-top:64px">
    <div class="label">Feature Comparison</div>
    <h2 style="font-size:36px;margin-bottom:32px">Side by side</h2>
  </div>
  <table class="comp-table reveal">
    <thead>
      <tr>
        <th style="width:260px">Feature</th>
        <th>Full Receptionist</th>
        <th>Generic Bot</th>
        <th>Doing Nothing</th>
        <th class="eng">Engageo</th>
      </tr>
    </thead>
    <tbody>
      <tr class="cat-row"><td colspan="5">Availability</td></tr>
      <tr><td class="feat">Answers missed calls</td><td><span class="par">&#x25B2; During hours</span></td><td><span class="no">&#x2715; Only chat</span></td><td><span class="no">&#x2715; Never</span></td><td class="eng-col"><span class="yes">&#x2713; 24/7</span></td></tr>
      <tr><td class="feat">Responds in under 30s</td><td><span class="no">&#x2715; Often misses</span></td><td><span class="no">&#x2715; No voice</span></td><td><span class="no">&#x2715;</span></td><td class="eng-col"><span class="yes">&#x2713; Under 8s</span></td></tr>
      <tr><td class="feat">Works nights &amp; weekends</td><td><span class="no">&#x2715;</span></td><td><span class="par">&#x25B2; Partial</span></td><td><span class="no">&#x2715;</span></td><td class="eng-col"><span class="yes">&#x2713; Always</span></td></tr>
      <tr class="cat-row"><td colspan="5">Qualification</td></tr>
      <tr><td class="feat">Qualifies the patient</td><td><span class="yes">&#x2713; If trained</span></td><td><span class="no">&#x2715;</span></td><td><span class="no">&#x2715;</span></td><td class="eng-col"><span class="yes">&#x2713; Always</span></td></tr>
      <tr><td class="feat">Speaks Hinglish naturally</td><td><span class="yes">&#x2713;</span></td><td><span class="no">&#x2715;</span></td><td><span class="no">&#x2715;</span></td><td class="eng-col"><span class="yes">&#x2713;</span></td></tr>
      <tr><td class="feat">Handles 100 calls/day</td><td><span class="no">&#x2715; Max 30&ndash;50</span></td><td><span class="no">&#x2715;</span></td><td><span class="no">&#x2715;</span></td><td class="eng-col"><span class="yes">&#x2713; Unlimited</span></td></tr>
      <tr class="cat-row"><td colspan="5">Booking</td></tr>
      <tr><td class="feat">Books into Google Calendar</td><td><span class="yes">&#x2713;</span></td><td><span class="no">&#x2715;</span></td><td><span class="no">&#x2715;</span></td><td class="eng-col"><span class="yes">&#x2713;</span></td></tr>
      <tr><td class="feat">Sends WhatsApp confirmation</td><td><span class="par">&#x25B2; Manual</span></td><td><span class="par">&#x25B2; Template only</span></td><td><span class="no">&#x2715;</span></td><td class="eng-col"><span class="yes">&#x2713; Automatic</span></td></tr>
      <tr><td class="feat">24hr + 2hr reminders</td><td><span class="par">&#x25B2; If remembered</span></td><td><span class="par">&#x25B2; Partial</span></td><td><span class="no">&#x2715;</span></td><td class="eng-col"><span class="yes">&#x2713;</span></td></tr>
      <tr><td class="feat">Reschedules no-shows</td><td><span class="par">&#x25B2; Sometimes</span></td><td><span class="no">&#x2715;</span></td><td><span class="no">&#x2715;</span></td><td class="eng-col"><span class="yes">&#x2713; Automatic</span></td></tr>
      <tr class="cat-row"><td colspan="5">Reporting</td></tr>
      <tr><td class="feat">Weekly revenue report</td><td><span class="no">&#x2715;</span></td><td><span class="no">&#x2715;</span></td><td><span class="no">&#x2715;</span></td><td class="eng-col"><span class="yes">&#x2713; Every Friday</span></td></tr>
      <tr><td class="feat">Per-call tracking</td><td><span class="no">&#x2715;</span></td><td><span class="no">&#x2715;</span></td><td><span class="no">&#x2715;</span></td><td class="eng-col"><span class="yes">&#x2713;</span></td></tr>
      <tr class="cat-row"><td colspan="5">Cost</td></tr>
      <tr><td class="feat">Monthly cost</td><td><span>&#x20B9;25&ndash;35K/mo</span></td><td><span>&#x20B9;0&ndash;3K/mo</span></td><td><span class="yes">&#x20B9;0</span></td><td class="eng-col">&#x20B9;25K/mo</td></tr>
      <tr><td class="feat">Sick leave / gaps</td><td><span class="no">Yes</span></td><td><span class="yes">No</span></td><td><span class="yes">N/A</span></td><td class="eng-col"><span class="yes">No</span></td></tr>
      <tr><td class="feat">30-day guarantee</td><td><span class="no">&#x2715;</span></td><td><span class="no">&#x2715;</span></td><td><span class="no">&#x2715;</span></td><td class="eng-col"><span class="yes">&#x2713; 15 bookings</span></td></tr>
    </tbody>
  </table>
  <div class="reveal" style="margin-top:48px;text-align:center">
    <a href="/free-audit.html" class="btn btn-hero">See How Many Calls You&rsquo;re Missing &rarr;</a>
    <p style="font-size:12px;color:var(--ink-muted);margin-top:12px">Free audit. 24 hours. No commitment.</p>
  </div>
</div>
</section>
${FOOT()}${JS()}</body></html>`;

fs.writeFileSync(path.join(__dirname, 'compare.html'), compare, 'utf8');
console.log('compare.html written:', compare.length, 'bytes');
