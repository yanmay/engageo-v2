const fs = require('fs'), path = require('path');

const NAV = (active) => `<nav class="eg-nav" id="top-nav">
    <a href="/index.html" class="eg-nav__logo">Engageo</a>
    <ul class="eg-nav__links">
        <li><a href="/how-it-works.html"${active === 'hiw' ? ' style="color:var(--ink);border-bottom:1px solid var(--green);"' : ''}>How It Works</a></li>
        <li><a href="/compare.html"${active === 'compare' ? ' style="color:var(--ink);"' : ''}>Compare</a></li>
        <li><a href="/pricing.html"${active === 'pricing' ? ' style="color:var(--ink);"' : ''}>Pricing</a></li>
        <li><a href="/faq.html"${active === 'faq' ? ' style="color:var(--ink);"' : ''}>FAQ</a></li>
    </ul>
    <a href="/free-audit.html" class="eg-nav__cta">Get the Audit</a>
</nav>`;
const FOOT = () => `<footer class="eg-footer"><div class="eg-footer__top"><div class="eg-footer__brand"><span class="eg-footer__logo" style="font-family:var(--serif);font-size:20px;font-weight:700;color:var(--parchment)">Engageo</span><p style="margin-top:12px">We answer the calls your clinic misses. Autonomous missed-call recovery for high-ticket Indian specialists.</p><div style="margin-top:24px;display:flex;align-items:center;gap:8px"><span style="width:8px;height:8px;border-radius:50%;background:var(--teal);display:inline-block"></span><span class="f-label" style="font-size:10px;color:var(--teal)">SYSTEMS OPERATIONAL</span></div></div><div class="eg-footer__links" style="display:flex;gap:40px;flex-wrap:wrap"><div class="eg-footer__col" style="display:flex;flex-direction:column;gap:12px"><strong style="color:var(--parchment)">Platform</strong><a href="/how-it-works.html">How It Works</a><a href="/pricing.html">Pricing</a><a href="/compare.html">Compare</a><a href="/faq.html">FAQ</a></div><div class="eg-footer__col" style="display:flex;flex-direction:column;gap:12px"><strong style="color:var(--parchment)">Clinic Types</strong><span>Hair Transplant</span><span>Dental & Implants</span><span>IVF & Fertility</span><span>Dermatology</span></div><div class="eg-footer__col" style="display:flex;flex-direction:column;gap:12px"><strong style="color:var(--parchment)">Legal</strong><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">DPDP Act Compliance</a></div></div></div><div class="eg-footer__bottom" style="border-top:1px solid rgba(245,240,232,0.1);padding-top:24px;margin-top:40px;display:flex;justify-content:space-between;font-size:12px;color:rgba(245,240,232,0.4)"><span>&copy; <script>document.write(new Date().getFullYear())</script> Engageo. Built for India.</span><span>Strictly No Medical Advice Provided.</span></div></footer>`;
const JS = () => `<script>(function(){var n=document.getElementById('navPill'),m=document.getElementById('mobileMenu');window.addEventListener('scroll',function(){if(n)n.classList.toggle('scrolled',window.scrollY>20);});var b=document.getElementById('hamburgerBtn'),c=document.getElementById('mobileClose');function op(){m.classList.add('open');document.body.style.overflow='hidden';}function cl(){m.classList.remove('open');document.body.style.overflow='';}if(b)b.addEventListener('click',op);if(c)c.addEventListener('click',cl);if(m)m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',cl);});window.toggleFaq=function(el){el.parentElement.classList.toggle('open');};var obs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('active');obs.unobserve(e.target);}});},{threshold:0.08,rootMargin:'0px 0px -32px 0px'});document.querySelectorAll('.reveal').forEach(function(el){obs.observe(el);});}());</script>`;

const FAQ_CSS = `<style>.faq-item.open .faq-chevron{transform:rotate(180deg)}.faq-item.open .faq-answer{max-height:400px!important}</style>`;
const FAQ_Q = (q, a) => `<div class="faq-item"><div class="faq-question" onclick="toggleFaq(this)" style="display:flex;justify-content:space-between;align-items:center;gap:16px;padding:20px 0;cursor:pointer;font-size:16px;font-weight:700;color:var(--ink);border-bottom:1px solid var(--rule)">${q}<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="faq-chevron" style="flex-shrink:0;transition:transform 0.25s"><polyline points="6 9 12 15 18 9"/></svg></div><div class="faq-answer" style="max-height:0;overflow:hidden;transition:max-height 0.4s,padding 0.3s"><div style="font-size:14px;color:var(--ink);line-height:1.7;padding:0 0 20px">${a}</div></div></div>`;

const hiw = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>How It Works &mdash; Engageo</title>
<meta name="description" content="How Engageo's AI missed-call recovery works, step by step. From missed call to confirmed booking in under 2 minutes."/>
<link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link rel="stylesheet" href="engageo.css"/>
<style>
.page-hero{padding:160px 0 72px;}
.timeline{display:flex;flex-direction:column;gap:0;border:1px solid var(--rule);border-radius:16px;overflow:hidden;max-width:900px;margin:0 auto;}
.tl-row{display:grid;grid-template-columns:80px 1fr 1fr;border-bottom:1px solid var(--rule);transition:background 0.12s;}
.tl-row:last-child{border-bottom:none;}
.tl-row:hover{background:var(--surface);}
.tl-num{display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:rgba(17,24,28,0.1);border-right:1px solid var(--rule);padding:28px 0;}
.tl-info{padding:28px 24px;border-right:1px solid var(--rule);}
.tl-tag{font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:6px;}
.tl-title{font-size:18px;font-weight:700;letter-spacing:-0.01em;color:var(--ink);margin-bottom:6px;}
.tl-body{font-size:13px;color:var(--ink);line-height:1.6;}
.tl-demo{padding:28px 24px;display:flex;align-items:center;}
.demo-card{background:var(--surface);border:1px solid var(--rule);border-radius:8px;padding:14px 16px;width:100%;}
.demo-label{font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:6px;}
.demo-val{font-size:13px;color:var(--ink);line-height:1.5;}
.demo-sub{font-size:11px;color:var(--ink-muted);margin-top:4px;}
.demo-miss{color:var(--red);font-size:11px;margin-top:4px;font-weight:700;}
.demo-big{font-size:28px;font-weight:700;color:var(--green);}
.demo-card.g{background:rgba(34,197,94,0.06);border-color:rgba(34,197,94,0.2);}
/* WhatsApp seq */
.wa-section{background:var(--deep);padding:80px 0;}
.wa-table{border:1px solid rgba(255,255,255,0.08);border-radius:12px;overflow:hidden;max-width:860px;margin:40px auto 0;}
.wa-row{display:grid;grid-template-columns:60px 140px 1fr 130px;border-bottom:1px solid rgba(255,255,255,0.06);}
.wa-row:last-child{border-bottom:none;}
.wa-row.active{border-left:2px solid var(--green);background:rgba(34,197,94,0.05);}
.wa-cell{padding:16px 14px;font-size:13px;color:rgba(255,255,255,0.5);}
.wa-num{font-size:22px;font-weight:700;color:rgba(255,255,255,0.12);text-align:center;display:flex;align-items:center;justify-content:center;}
.wa-trig{font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#fff;}
.wa-trig-sub{font-size:11px;color:rgba(255,255,255,0.4);margin-top:2px;}
.wa-pill{font-size:11px;font-weight:700;padding:3px 8px;border-radius:9999px;white-space:nowrap;display:inline-block;}
.pill-g{background:#D1FAE5;color:#059669;}
.pill-b{background:rgba(59,130,246,0.15);color:#60A5FA;}
.pill-s{background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.5);}
/* Workflow */
.wf-grid{display:grid;grid-template-columns:repeat(7,1fr);border:1px solid var(--rule);border-radius:12px;overflow:hidden;margin-top:40px;}
.wf-step{padding:24px 14px;border-right:1px solid var(--rule);}
.wf-step:last-child{border-right:none;}
.wf-step.active{background:var(--deep);}
.wf-n{font-size:10px;font-weight:700;letter-spacing:0.1em;color:var(--ink-muted);margin-bottom:8px;}
.wf-step.active .wf-n{color:rgba(255,255,255,0.35);}
.wf-t{font-size:12px;font-weight:800;color:var(--ink);margin-bottom:5px;letter-spacing:-0.01em;}
.wf-step.active .wf-t{color:#fff;}
.wf-b{font-size:11px;color:var(--ink);line-height:1.5;}
.wf-step.active .wf-b{color:rgba(255,255,255,0.5);}
@media(max-width:900px){.tl-row{grid-template-columns:60px 1fr;}.tl-demo{display:none;}.wf-grid{grid-template-columns:repeat(2,1fr);}.wa-row{grid-template-columns:48px 120px 1fr;}.wa-row .wa-cell:last-child{display:none;}}
</style>
</head>
<body>
${NAV('hiw')}
<section class="page-hero" style="padding-top:160px">
<div class="container">
  <div class="f-label" style="margin-bottom:20px;display:inline-block">How It Works</div>
  <h1 class="f-h2 reveal" style="font-size:clamp(40px, 4.5vw, 68px)">From missed call to<br><em class="f-italic" style="color:var(--green)">confirmed booking.</em></h1>
  <p class="f-body reveal" style="color:var(--ink-muted);max-width:520px;margin-top:16px">Two minutes from missed call to WhatsApp confirmation. Fully automated. No human intervention required.</p>
</div>
</section>
<section class="section-sm">
<div class="container">
  <div class="reveal" style="text-align:center;margin-bottom:40px">
    <div class="f-label" style="margin-bottom:12px">The Recovery Sequence</div>
    <h2 class="f-h2">Step by step</h2>
  </div>
  <div class="timeline reveal">
    <div class="tl-row"><div class="tl-num">01</div><div class="tl-info"><div class="tl-tag">Detection</div><div class="tl-title">Missed Call Detected</div><p class="tl-body">Your receptionist is mid-consultation. A patient calls during peak hours. The call rings out. Engageo detects the missed call in real time.</p></div><div class="tl-demo"><div class="demo-card"><div class="demo-label">Incoming Call</div><div class="demo-val">+91 9876&thinsp;XXXXXX &mdash; unanswered at 14:30</div><div class="demo-miss">&#x25CF; Missed</div></div></div></div>
    <div class="tl-row"><div class="tl-num">02</div><div class="tl-info"><div class="tl-tag">AI Intercept</div><div class="tl-title">Callback in 8 Seconds</div><p class="tl-body">Not a text. Not a bot menu. A real-sounding voice call back to the patient &mdash; before they&rsquo;ve had time to search Google for your competitor.</p></div><div class="tl-demo"><div class="demo-card"><div class="demo-label">Response Time</div><div class="demo-big">8s</div><div class="demo-sub">avg callback speed across 47 clinics</div></div></div></div>
    <div class="tl-row"><div class="tl-num">03</div><div class="tl-info"><div class="tl-tag">Qualification</div><div class="tl-title">Qualification in Hinglish</div><p class="tl-body">The AI knows your clinic name, your doctor&rsquo;s schedule, your specialty, and available slots. It speaks naturally. It builds trust before the patient even meets the doctor.</p></div><div class="tl-demo"><div class="demo-card"><div class="demo-label">Sample Conversation</div><div class="demo-val" style="font-style:italic">&ldquo;Aapko implant ke baare mein consult chahiye tha? Dr. Mehta Saturday 11 AM free hain &mdash; confirm karein?&rdquo;</div></div></div></div>
    <div class="tl-row"><div class="tl-num">04</div><div class="tl-info"><div class="tl-tag">Booking</div><div class="tl-title">Slot Locked to Calendar</div><p class="tl-body">The patient confirms verbally. Engageo writes the appointment to Google Calendar, blocks the slot, and triggers the WhatsApp confirmation within 90 seconds.</p></div><div class="tl-demo"><div class="demo-card g"><div class="demo-label">&#x1F7E2; WhatsApp Sent</div><div class="demo-val">&#x2705; Appointment confirmed. Saturday 11 AM with Dr. Mehta. &#x1F4CD; Sector 18, Noida. Reply CONFIRM to lock.</div></div></div></div>
    <div class="tl-row"><div class="tl-num">05</div><div class="tl-info"><div class="tl-tag">Reporting</div><div class="tl-title">Weekly Revenue Report</div><p class="tl-body">Every Friday at 9 AM, a WhatsApp summary lands in your inbox: calls recovered, slots booked, revenue recovered, no-shows prevented. One number to own.</p></div><div class="tl-demo"><div class="demo-card"><div class="demo-label">&#x1F4CA; Friday Report</div><div class="demo-val"><strong>11 recoveries &middot; &#x20B9;2,64,000</strong></div><div class="demo-sub">3 no-shows prevented &middot; Fri 9AM via WhatsApp</div></div></div></div>
  </div>
</div>
</section>
<!-- WhatsApp sequence section -->
<section class="wa-section">
<div class="container">
  <div class="f-label reveal" style="color:rgba(255,255,255,0.4);margin-bottom:12px">The Second Layer</div>
  <h2 class="f-h2 reveal" style="max-width:520px;color:var(--parchment)">The call recovers.<br><em style="color:#059669;font-style:italic" class="f-italic">WhatsApp retains.</em></h2>
  <p class="reveal" style="color:rgba(255,255,255,0.55);max-width:440px;margin-top:12px">94% of your patients open WhatsApp within 3 minutes. We send 4 timed messages that drive confirmations, cut no-shows, and rescue the ones who don&rsquo;t show.</p>
  <div class="wa-table reveal">
    <div class="wa-row"><div class="wa-num">01</div><div class="wa-cell"><div class="wa-trig">Instant</div><div class="wa-trig-sub">After call ends</div></div><div class="wa-cell">Confirms booking with doctor name, time, clinic address, and a CONFIRM reply prompt.</div><div class="wa-cell" style="display:flex;align-items:center"><span class="wa-pill pill-g">Slot Locked</span></div></div>
    <div class="wa-row active"><div class="wa-num">02</div><div class="wa-cell"><div class="wa-trig">T-24 HRS</div><div class="wa-trig-sub">Day before</div></div><div class="wa-cell">Reminder message asking the patient to reply CONFIRM. 71% of patients reply. No-show risk drops sharply.</div><div class="wa-cell" style="display:flex;align-items:center"><span class="wa-pill pill-b">71% Reply Rate</span></div></div>
    <div class="wa-row"><div class="wa-num">03</div><div class="wa-cell"><div class="wa-trig">T-2 HRS</div><div class="wa-trig-sub">Morning of</div></div><div class="wa-cell">Sends directions, what documents to bring, parking info if applicable.</div><div class="wa-cell" style="display:flex;align-items:center"><span class="wa-pill pill-b">No-Show &darr;</span></div></div>
    <div class="wa-row"><div class="wa-num">04</div><div class="wa-cell"><div class="wa-trig">No-Show</div><div class="wa-trig-sub">If patient absent</div></div><div class="wa-cell">Offers 3 alternative slots for the same week. Converts no-shows into rescheduled appointments.</div><div class="wa-cell" style="display:flex;align-items:center"><span class="wa-pill pill-s">Rebook</span></div></div>
  </div>
  <div class="reveal" style="margin-top:24px;font-size:13px;color:rgba(255,255,255,0.35);text-align:center">40% drop in no-shows within 30 days across clinics on the full sequence.</div>
</div>
</section>
<!-- Workflow grid (React Sub-App) -->
<section class="section" style="background:var(--surface)">
<div class="container">
  <div class="f-label reveal" style="margin-bottom:12px">End to End</div>
  <h2 class="f-h2 reveal">The full recovery loop</h2>
  <div id="react-demo-root" class="reveal w-full mt-10"></div>
</div>
</section>
<!-- CTA -->
<section style="background:var(--surface);padding:80px 0;text-align:center">
<div class="container">
  <h2 class="f-h2 reveal">Ready to go live in 4 days?</h2>
  <p class="f-body reveal" style="color:var(--ink-muted);margin-top:12px;max-width:400px;margin-left:auto;margin-right:auto">No IT team required. We configure everything. You go live over a test call.</p>
</div>
</section>
${FOOT()}${JS()}<script type="module" src="/src/hiw-mount.tsx"></script></body></html>`;

fs.writeFileSync(path.join(__dirname, 'how-it-works.html'), hiw, 'utf8');
console.log('how-it-works.html written:', hiw.length, 'bytes');
