const fs = require('fs');

const fonts = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;0,9..144,900;1,9..144,300;1,9..144,900&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet">`;

const head = (title, desc = '') => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} | Engageo</title>
<meta name="description" content="${desc || 'AI missed-call recovery for Indian specialist clinics.'}">
${fonts}
<link rel="stylesheet" href="engageo.css">
</head>
<body>`;

const nav = `
<nav class="eg-nav" id="top-nav">
    <a href="index.html" class="eg-nav__logo">Engageo</a>
    <ul class="eg-nav__links">
        <li><a href="how-it-works.html">How It Works</a></li>
        <li><a href="compare.html">Compare</a></li>
        <li><a href="pricing.html">Pricing</a></li>
        <li><a href="faq.html">FAQ</a></li>
    </ul>
    <a href="free-audit.html" class="eg-nav__cta">Get the Audit</a>
</nav>`;

const foot = `
<footer class="eg-footer">
    <div class="eg-footer__top">
        <span class="eg-footer__brand">Engageo</span>
        <span class="eg-footer__em">&mdash; AI missed-call recovery for Indian specialist clinics.</span>
        <span style="margin-left:auto;display:flex;align-items:center;gap:8px;font-family:var(--mono);font-size:11px;color:rgba(245,240,232,0.35)">
            <span class="live-dot"></span> System Operational
        </span>
    </div>
    <div class="eg-footer__cols">
        <div class="eg-footer__col">
            <p class="eg-footer__col-title">Platform</p>
            <ul>
                <li><a href="how-it-works.html">How It Works</a></li>
                <li><a href="compare.html">Compare</a></li>
                <li><a href="pricing.html">Pricing</a></li>
                <li><a href="faq.html">FAQ</a></li>
            </ul>
        </div>
        <div class="eg-footer__col">
            <p class="eg-footer__col-title">Start Here</p>
            <ul>
                <li><a href="free-audit.html">Free 30-Day Audit</a></li>
                <li><a href="free-audit.html">Book a Demo Call</a></li>
            </ul>
        </div>
        <div class="eg-footer__col">
            <p class="eg-footer__col-title">Legal</p>
            <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
            </ul>
        </div>
    </div>
    <div class="eg-footer__bottom">
        <p>&copy; 2025 Engageo. All rights reserved.</p>
        <p>hello@engageo.in</p>
    </div>
</footer>
<script>
(function() {
    var revealEls = document.querySelectorAll('.reveal');
    if (window.IntersectionObserver) {
        var revealObs = new IntersectionObserver(function(entries) {
            entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('active'); });
        }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });
        revealEls.forEach(function(el) { revealObs.observe(el); });
    } else {
        revealEls.forEach(function(el) { el.classList.add('active'); });
    }

    var timelineRows = document.querySelectorAll('.timeline-row');
    if (window.IntersectionObserver && timelineRows.length) {
        var tlObs = new IntersectionObserver(function(entries) {
            entries.forEach(function(e) {
                if (e.isIntersecting) {
                    e.target.classList.add('tl-active');
                    tlObs.unobserve(e.target);
                }
            });
        }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });
        timelineRows.forEach(function(row) { tlObs.observe(row); });
    } else {
        timelineRows.forEach(function(row) { row.classList.add('tl-active'); });
    }

    var timeline = document.querySelector('.timeline');
    if (timeline) {
        var rail = document.createElement('div');
        rail.className = 'timeline-rail';
        timeline.appendChild(rail);
        function updateRail() {
            var tlRect = timeline.getBoundingClientRect();
            var start = tlRect.top - window.innerHeight;
            var current = -start;
            var progress = Math.min(1, Math.max(0, current / (tlRect.bottom - start)));
            rail.style.height = (progress * 100) + '%';
            rail.style.transform = 'none';
        }
        window.addEventListener('scroll', updateRail, { passive: true });
        updateRail();
    }

    var pricingRows = document.querySelectorAll('.pricing-row');
    if (window.IntersectionObserver && pricingRows.length) {
        var priceObs = new IntersectionObserver(function(entries) {
            entries.forEach(function(e) {
                if (e.isIntersecting) {
                    e.target.classList.add('tl-active');
                    priceObs.unobserve(e.target);
                }
            });
        }, { threshold: 0.15 });
        pricingRows.forEach(function(row) { priceObs.observe(row); });
    } else {
        pricingRows.forEach(function(row) { row.classList.add('tl-active'); });
    }

    var perfRow = document.querySelector('.pricing-row--dark');
    if (perfRow) {
        perfRow.style.position = 'relative';
        var tab = document.createElement('div');
        tab.className = 'pricing-row--recommended-tab';
        perfRow.prepend(tab);
        var firstCol = perfRow.querySelector('.pricing-col');
        if (firstCol) {
            var badge = document.createElement('span');
            badge.style.cssText = 'display:inline-flex;align-items:center;gap:5px;margin-top:12px;font-family:var(--mono);font-size:10px;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;color:var(--teal)';
            badge.innerHTML = '<span class="live-dot" style="background:var(--teal)"></span>Recommended';
            firstCol.appendChild(badge);
        }
    }

    document.querySelectorAll('.faq-q').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var item = btn.closest('.faq-item');
            var wasOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item.open').forEach(function(el) { el.classList.remove('open'); });
            if (!wasOpen) item.classList.add('open');
        });
    });
})();
</script>
</body></html>`;

// ─── PAGE HERO (for sub-pages) ────────────────────────────────────────────
const pageHero = (tag, h2, sub) => `
<section style="padding:120px 40px 80px;border-bottom:var(--rule);background:var(--parchment)">
    <div class="section__inner" style="padding:0 40px">
        <span class="section__tag">${tag}</span>
        <h1 class="f-h2" style="color:var(--ink);max-width:680px;margin-top:8px">${h2}</h1>
        ${sub ? `<p class="f-body" style="color:var(--ink-muted);max-width:520px;margin-top:20px;line-height:1.75">${sub}</p>` : ''}
    </div>
</section>`;

// ─── HOW IT WORKS ─────────────────────────────────────────────────────────────
const hiw = head("How It Works", "From missed call to confirmed appointment — fully autonomous in under 60 seconds.") + nav +
    pageHero("The Recovery Sequence", "Zero latency.<br><em class=\"f-italic\" style=\"font-variation-settings:'opsz' 9\">Every time.</em>",
        "Every missed call triggers a 7-step recovery sequence — voice call, qualification, booking, WhatsApp confirmation, 24-hour reminder. Under 60 seconds, zero staff.") + `
<section style="padding:0">
        <div class="timeline-row reveal">
            <div class="timeline-ghost">01</div>
            <span class="timeline-num">01</span>
            <div class="timeline-title">Call Missed &amp; Intercepted</div>
            <div class="timeline-body">Your reception rings out — busy, after-hours, or just unanswered. Before the caller hears a dead tone, Engageo intercepts the event via SIP-trunk integration. <strong>The patient is still reachable.</strong></div>
            <div class="timeline-card">
                <span class="timeline-tag">● TRIGGER // 0ms</span>
                <p class="highlight">EVENT CAPTURED<br>Caller: Priya S.<br>Number: +91 9876 5XXXXX<br>Time: 18:03:41<br>Status: <span style="color:var(--teal)">QUEUED</span></p>
            </div>
        </div>
        <div class="timeline-row reveal">
            <div class="timeline-ghost">02</div>
            <span class="timeline-num">02</span>
            <div class="timeline-title">Intent Identified</div>
            <div class="timeline-body">Call history and clinic specialisation are cross-referenced. If the caller has previously enquired about a specific treatment, the AI pre-loads that context. <strong>High-intent implant patient. AI callback queued. WhatsApp pre-message drafted. Est. case value: ₹85,000.</strong></div>
            <div class="timeline-card">
                <span class="timeline-tag">● CLASSIFY // 0.5s</span>
                <p>Specialisation: Dental Implants<br>Intent score: <span class="highlight">HIGH</span><br>Est. value: <span class="highlight">₹85,000</span><br>WhatsApp draft: ready<br>Callback: <span style="color:var(--teal)">INITIATING</span></p>
            </div>
        </div>
        <div class="timeline-row reveal">
            <div class="timeline-ghost">03</div>
            <span class="timeline-num">03</span>
            <div class="timeline-title">AI Calls Them Back First</div>
            <div class="timeline-body">Not a message. Not a form. A real voice call in 8 seconds — before they open Google and find your competitor. The AI speaks naturally in Hindi or English, introduces itself as your clinic's assistant, and handles objections. <strong>It doesn't read from a script. It qualifies.</strong></div>
            <div class="timeline-card">
                <span class="timeline-tag">● AI_VOICE // 8s</span>
                <p class="highlight">"Hello, this is Priya calling regarding dental implants—"</p>
                <p style="margin-top:8px">AI: "Yes, Dr. Mehta specialises in implants. A consultation is free this week. Shall I book Saturday 11 AM?"</p>
                <p style="margin-top:8px">Status: <span class="highlight">BOOKING</span></p>
            </div>
        </div>
        <div class="timeline-row reveal">
            <div class="timeline-ghost">04</div>
            <span class="timeline-num">04</span>
            <div class="timeline-title">Slot Locked to Calendar</div>
            <div class="timeline-body">The appointment syncs to your Google Calendar, Outlook 365, or Practo dashboard <strong>before the call ends.</strong> Your front desk opens their screen and the slot is already there. No re-entry, no missed notes, no double-booking risk.</div>
            <div class="timeline-card">
                <span class="timeline-tag">● CALENDAR // 35s</span>
                <p class="highlight">Dr. Mehta — 11:00 AM<br>Saturday, 12 April<br>Priya S. — Implant Consult</p>
                <p style="margin-top:8px">Calendar: <span style="color:var(--teal)">WRITTEN</span></p>
            </div>
        </div>
        <div class="timeline-row reveal">
            <div class="timeline-ghost">05</div>
            <span class="timeline-num">05</span>
            <div class="timeline-title">Slot Locked to Calendar</div>
            <div class="timeline-body">Slot locked to Google Calendar. Patient gets a WhatsApp confirmation in 90 seconds — with their doctor's name, time, and clinic address. A reminder fires 24 hours before. No-shows drop. <strong>You just recovered ₹22,000 without lifting a finger.</strong></div>
            <div class="timeline-card" style="background:#fff;border:1px solid rgba(28,25,22,0.15)">
                <span class="timeline-tag">● SENT // 90s</span>
                <p style="color:var(--ink);font-weight:500;margin-bottom:8px">&#128994; Dr. Mehta's Dental Clinic</p>
                <p style="color:rgba(28,25,22,0.7);line-height:1.7">
                    &#9989; Appointment Confirmed!<br>
                    Hi Priya, your implant consultation is booked for Saturday, 11 AM.<br>
                    &#128205; Sector 18, Noida<br>
                    &#128104;&#8205;&#9877;&#65039; Dr. Mehta<br>
                    Reply CONFIRM or call us to reschedule.
                </p>
                <p class="f-label" style="font-size:9px;color:var(--ink-muted);margin-top:12px;border-top:1px solid rgba(28,25,22,0.1);padding-top:8px">BOOKING LOCKED. NO MANUAL ACTION REQUIRED.</p>
            </div>
        </div>
        <div class="timeline-row reveal">
            <div class="timeline-ghost">06</div>
            <span class="timeline-num">06</span>
            <div class="timeline-title">WhatsApp Sent</div>
            <div class="timeline-body">Patient receives booking confirmation on WhatsApp in 90 seconds. 24-hour reminder fires automatically. <strong>No-show rate drops.</strong></div>
            <div class="timeline-card">
                <span class="timeline-tag">● RETENTION // T-24</span>
                <p class="highlight">Reminder sent to +91 9876 5XXXXX<br>Status: <span style="color:var(--teal)">DELIVERED</span><br>Action: <span style="color:var(--green)">CONFIRMED</span></p>
            </div>
        </div>
        <div class="timeline-row reveal">
            <div class="timeline-ghost">07</div>
            <span class="timeline-num">07</span>
            <div class="timeline-title">Staff Notified</div>
            <div class="timeline-body">The call recovers the patient. WhatsApp retains them. <strong>Your weekly revenue report arrives every Friday at 9 AM — on WhatsApp.</strong></div>
            <div class="timeline-card">
                <span class="timeline-tag">● REPORT // FRIDAY 09:00</span>
                <p class="highlight">This week &mdash; Dr. Sharma's Clinic<br><br>11 recoveries. ₹2,64,000 secured.<br>3 no-shows prevented by reminder.</p>
                <p style="margin-top:8px;color:rgba(245,240,232,0.4);font-size:11px">Sent via WhatsApp · Every Friday · 9 AM</p>
            </div>
        </div>
    </div>
</section>
</section>
<section class="section" id="use-cases" style="background:var(--parchment)">
    <div class="section__header reveal">
      <span class="section__tag">Who It's For</span>
      <h2 class="f-h2" style="color:var(--ink)">Every specialist clinic leaks revenue the same way.</h2>
    </div>

    <!-- Strip 1: Hair Transplant -->
    <div class="strip reveal">
      <div class="strip__inner">
        <div class="strip__left">
          <span class="section__tag" style="margin-bottom:16px">Hair Transplant Clinics</span>
          <h3 class="f-card-title" style="margin-bottom:20px">A ₹1.8L FUE enquiry<br><em class="f-italic">called at 7
              PM.</em></h3>
          <p class="f-small" style="color:var(--ink-muted)">Hair transplant patients are researchers. They call 3–4
            clinics before deciding. The window to win them is 8 minutes. Your receptionist went home at 6. Engageo
            didn't.</p>
        </div>
        <div class="strip__right">
          <div class="strip__spec strip__spec--bad">
            <p class="strip__spec-label">The Reality</p>
            <div class="strip__spec-body">
              Patient calls at 7:03 PM. <strong>Missed.</strong> They Google the next clinic. You never hear from them
              again. <strong>₹1,80,000 gone.</strong> This happens on average <strong>4 times per week.</strong>
            </div>
          </div>
          <div class="strip__spec strip__spec--good">
            <p class="strip__spec-label">What Changes</p>
            <div class="strip__spec-body">
              Engageo calls back in 8 seconds. AI confirms it's an FUE clinic, books a consultation, sends WhatsApp.
              Patient shows up. <strong>₹1,80,000 recovered.</strong>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Strip 2: IVF / Fertility -->
    <div class="strip reveal">
      <div class="strip__inner">
        <div class="strip__left">
          <span class="section__tag" style="margin-bottom:16px">IVF &amp; Fertility Clinics</span>
          <h3 class="f-card-title" style="margin-bottom:20px">The most emotionally<br><em class="f-italic">charged call
              in medicine.</em></h3>
          <p class="f-small" style="color:var(--ink-muted)">IVF patients are anxious and need to feel heard instantly. A
            missed call isn't just a lost booking — it breaks trust before the relationship has started. Speed + empathy
            is the entire game.</p>
        </div>
        <div class="strip__right">
          <div class="strip__spec strip__spec--bad">
            <p class="strip__spec-label">The Reality</p>
            <div class="strip__spec-body">
              Couple calls during lunch break. <strong>Missed.</strong> Voicemail goes unread until end-of-day. They've
              already booked a consultation at another centre. <strong>₹3,40,000 treatment cycle lost.</strong>
            </div>
          </div>
          <div class="strip__spec strip__spec--good">
            <p class="strip__spec-label">What Changes</p>
            <div class="strip__spec-body">
              AI responds in 8 seconds, speaks with warmth, books the initial consultation. WhatsApp reminder 24 hours
              before. <strong>Appointment shows. Trust established.</strong>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Strip 3: Dental Implants -->
    <div class="strip reveal">
      <div class="strip__inner">
        <div class="strip__left">
          <span class="section__tag" style="margin-bottom:16px">Dental Implant Practices</span>
          <h3 class="f-card-title" style="margin-bottom:20px">77 missed calls.<br><em class="f-italic">₹18L
              unrecovered.</em></h3>
          <p class="f-small" style="color:var(--ink-muted)">Most dental practices don't know how many calls they miss.
            When we run the free audit, the number shocks every clinic owner we show it to. The recovery math is simple
            — just never done before.</p>
        </div>
        <div class="strip__right">
          <div class="strip__spec strip__spec--bad">
            <p class="strip__spec-label">The Reality</p>
            <div class="strip__spec-body">
              Average dental clinic misses <strong>77 calls per month.</strong> Average implant case: ₹28,000. That's
              <strong>₹21L/month walking out</strong> — before considering crowns, veneers, or full-arch cases.
            </div>
          </div>
          <div class="strip__spec strip__spec--good">
            <p class="strip__spec-label">What Changes</p>
            <div class="strip__spec-body">
              Engageo recovers an average <strong>47% of missed calls</strong> to confirmed bookings in month one. On
              the Performance plan: <strong>15 confirmed bookings guaranteed</strong> — or we keep going free.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<section class="section reveal" style="border-top:var(--rule);background:var(--parchment)">
    <div class="stat-anchor">
        <div class="stat-anchor__num">8s</div>
        <div class="stat-anchor__caption">
            <span class="stat-anchor__label">Average callback time from missed ring</span>
            <p class="stat-anchor__body">Before the patient opens Google. Before they try another clinic. Eight seconds is the difference between a ₹40,000 consultation and a dead lead.</p>
        </div>
    </div>
</section>` + foot;

// ─── COMPARE ──────────────────────────────────────────────────────────────────
const compare = head("Compare", "How AI voice + WhatsApp recovery outperforms manual and chatbot methods for Indian specialist clinics.") + nav +
    pageHero("The Data", "Why AI beats<br><em class=\"f-italic\" style=\"font-variation-settings:'opsz' 9\">manual recovery.</em>",
        "How an autonomous voice + WhatsApp framework outperforms humans and chatbots at the moment of patient intent.") + `
<section class="section section--surface reveal" style="background:var(--surface);padding:0">
    <div class="section__inner" style="padding:56px 40px">
        <table class="wa-table" style="width:100%">
            <thead class="wa-table__head">
                <tr>
                    <th>#</th>
                    <th>Feature</th>
                    <th>Receptionist</th>
                    <th>Chatbot</th>
                    <th>Engageo AI</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>01</td><td style="color:var(--ink);font-weight:500">Response Time</td><td>15 min – 4 hrs</td><td>Instant (text only)</td><td style="color:var(--green);font-weight:500">8 Seconds (Voice)</td></tr>
                <tr><td>02</td><td style="color:var(--ink);font-weight:500">Available 24/7</td><td>No</td><td>Yes</td><td style="color:var(--green);font-weight:500">Yes, always</td></tr>
                <tr><td>03</td><td style="color:var(--ink);font-weight:500">Language</td><td>1–2 languages</td><td>Limited text</td><td style="color:var(--green);font-weight:500">Hindi, English, Hinglish</td></tr>
                <tr><td>04</td><td style="color:var(--ink);font-weight:500">Medical Context</td><td>Basic</td><td>None</td><td style="color:var(--green);font-weight:500">Specialist-trained (FUE, IVF, implants)</td></tr>
                <tr><td>05</td><td style="color:var(--ink);font-weight:500">Calendar Sync</td><td>Manual entry</td><td>None</td><td style="color:var(--green);font-weight:500">Automatic, real-time</td></tr>
                <tr class="active-row"><td>06</td><td style="color:var(--ink);font-weight:500">WhatsApp patient journey<br><span style="font-weight:400;font-size:12px;color:var(--ink-muted)">Confirmation → Reminder → Pre-visit → No-show recovery</span></td><td>Manual / ad-hoc</td><td>None</td><td style="font-size:12px;line-height:1.8"><span style="color:var(--green)">— Booking confirmation (instant)<br>— 24hr appointment reminder<br>— Pre-visit directions message<br>— No-show recovery message</span></td></tr>
                <tr><td>07</td><td style="color:var(--ink);font-weight:500">Monthly Cost</td><td>₹25,000+ salary</td><td>₹5,000–10,000</td><td style="color:var(--green);font-weight:500">From ₹14,999/mo</td></tr>
                <tr><td>08</td><td style="color:var(--ink);font-weight:500">Performance Guarantee</td><td>None</td><td>None</td><td style="color:var(--green);font-weight:500">15 confirmed bookings in 30 days or we keep going free</td></tr>
            </tbody>
        </table>
    </div>
</section>
<section style="background:var(--parchment);padding:72px 40px;border-top:var(--rule)">
    <div style="max-width:1200px;margin:0 auto">
        <div class="stat-anchor" style="padding:0;margin:0">
            <div class="stat-anchor__num" style="color:var(--green)">40%</div>
            <div class="stat-anchor__caption">
                <span class="stat-anchor__label">Fewer no-shows on Performance plan within 30 days</span>
                <p class="stat-anchor__body">The WhatsApp journey alone changes patient behaviour. An empty slot costs more than the reminder costs. Most clinics have never done the arithmetic.</p>
                <a href="free-audit.html" class="btn btn-primary" style="margin-top:24px;display:inline-block">Get Your Free Audit</a>
            </div>
        </div>
    </div>
</section>` + foot;

// ─── PRICING ──────────────────────────────────────────────────────────────────
const pricing = head("Pricing", "Fixed monthly pricing. No percentages. You keep all the revenue you recover.") + nav +
    pageHero("Pricing", "Scale without<br><em class=\"f-italic\" style=\"font-variation-settings:'opsz' 9\">surprises.</em>",
        "Fixed monthly. No percentages. No per-call fees. You keep every rupee you recover.") + `
<section class="section" style="padding:0">
    <div class="pricing-row reveal">
        <div class="pricing-ghost">01</div>
        <div class="pricing-col pricing-col--border-r">
            <p class="pricing-tier-name f-label" style="font-family:var(--mono)">Recover</p>
            <p class="pricing-tier-title">Starter</p>
            <p class="f-small" style="color:var(--ink-muted);margin-top:8px">For single-reception clinics. The essentials to stop bleeding revenue.</p>
        </div>
        <div class="pricing-col pricing-col--border-r">
            <ul class="pricing-features">
                <li>Up to 200 missed calls/mo</li>
                <li>AI voice callback in 8 seconds</li>
                <li>Hindi &amp; English voice</li>
                <li>Google Calendar sync</li>
                <li>24hr appointment reminder</li>
                <li>WhatsApp confirmation + reminder</li>
            </ul>
        </div>
        <div class="pricing-col">
            <p class="pricing-price">&#x20B9;14,999</p>
            <p class="pricing-period f-label">/month + GST &bull; Cancel anytime</p>
            <a href="free-audit.html" class="btn btn-ghost">Start Free Trial</a>
        </div>
    </div>
    <div class="pricing-row pricing-row--dark reveal">
        <div class="pricing-ghost">02</div>
        <div class="pricing-col pricing-col--border-r">
            <p class="pricing-tier-name f-label" style="font-family:var(--mono)">Grow</p>
            <p class="pricing-tier-title">Performance</p>
            <p class="f-small" style="color:rgba(245,240,232,0.4);margin-top:8px">The full recovery + retention engine. Includes the 15-booking guarantee.</p>
        </div>
        <div class="pricing-col pricing-col--border-r">
            <ul class="pricing-features">
                <li>Up to 800 missed calls/mo</li>
                <li>Dynamic rescheduling AI</li>
                <li>CRM integration</li>
                <li>Hinglish + regional languages</li>
                <li>4-touchpoint WhatsApp patient journey</li>
                <li>15-booking guarantee</li>
                <li>Weekly revenue report — WhatsApp</li>
                <li>Specialty-trained qualification</li>
            </ul>
            <p class="pricing-note f-small" style="margin-top:16px;font-style:italic">Clinics on this tier see 40% fewer no-shows within 30 days.</p>
        </div>
        <div class="pricing-col">
            <p class="pricing-price">&#x20B9;24,999</p>
            <p class="pricing-period f-label">/month + GST &bull; incl. guarantee</p>
            <a href="free-audit.html" class="btn btn-inv">Claim Guarantee</a>
        </div>
    </div>
    <div class="pricing-row pricing-row--darkest reveal">
        <div class="pricing-ghost" style="font-family:var(--serif)">03</div>
        <div class="pricing-col pricing-col--border-r">
            <p class="pricing-tier-name f-label" style="font-family:var(--mono)">Dominate</p>
            <p class="pricing-tier-title">Enterprise</p>
            <p class="f-small" style="color:rgba(245,240,232,0.35);margin-top:8px">Multi-location clinic brands at full scale.</p>
        </div>
        <div class="pricing-col pricing-col--border-r">
            <ul class="pricing-features">
                <li>Unlimited locations + calls</li>
                <li>Custom voice persona (your brand)</li>
                <li>4-touchpoint WhatsApp journey</li>
                <li>Dedicated account manager</li>
                <li>SLA + priority support 24/7</li>
                <li>Bespoke integration scope</li>
            </ul>
        </div>
        <div class="pricing-col">
            <p class="pricing-price">Custom</p>
            <p class="pricing-period f-label">tailored proposal</p>
            <a href="free-audit.html" class="btn btn-gold">Contact Sales</a>
        </div>
    </div>
</section>
<section class="guarantee reveal" style="padding:96px 40px">
    <div class="guarantee__num">15</div>
    <p class="guarantee__label f-label">Confirmed bookings in 30 days — or we keep going free</p>
    <h2 class="guarantee__h">If we don't hit the number, you don't pay a rupee more.</h2>
    <p class="guarantee__body">No refund negotiation. No invoices. Just the number we promised.</p>
    <a href="free-audit.html" class="btn btn-primary" style="background:var(--green)">Get Your Free Audit</a>
</section>` + foot;

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqs = [
    ["What exactly does Engageo do?",
        "When a patient calls your clinic and no one answers — after hours, during lunch, or when the line is busy — Engageo calls them back within 8 seconds using an AI voice agent. The AI qualifies the patient, books the appointment into your calendar, and sends a WhatsApp confirmation. Then it fires a reminder 24 hours before the appointment. No staff involved."],
    ["How fast does the AI call the patient?",
        "8 seconds from the moment the call is missed. Before the patient even opens Google to search for another clinic."],
    ["Will patients know it's AI?",
        "Most don't. And those who do don't mind — they got a response in 8 seconds instead of a voicemail. We're solving a speed problem, not trying to impersonate a human."],
    ["What if the AI can't answer the patient's question?",
        "It doesn't guess. It captures the patient's name and number, tells them the clinic team will call back within the hour, and sends you an instant WhatsApp alert. No patient is left without a response."],
    ["How long does it take to go live?",
        "4 days from the moment you sign. Day 1–2 we configure. Day 3 we test with you. Day 4 you're live."],
    ["Can it handle multiple doctors?",
        "Yes. The AI checks each doctor's calendar independently and matches the patient to the right specialist based on their stated treatment interest and availability."],
    ["What happens if it doesn't work?",
        "We keep going for free. If your clinic doesn't receive 15 confirmed bookings in the first 30 days, we extend the service at zero cost until we hit that number. No refund negotiation. No invoices. Just the number we promised."],
    ["Does it work with my existing calendar?",
        "Yes. Engageo connects to Google Calendar, Outlook 365, and Practo. Simple API link — no new software, no new hardware, no IT team. Setup is complete in under 2 hours."]
];

const faq = head("FAQ", "Everything you need to know before booking an audit.") + nav +
    pageHero("Knowledge Base", "Before you<br><em class=\"f-italic\" style=\"font-variation-settings:'opsz' 9\">sign anything.</em>",
        "Every question a clinic owner has asked us. Written clearly, without sales language.") + `
<section style="padding:48px 0 96px;background:var(--parchment)">
    <div style="max-width:900px;margin:0 auto">
        ${faqs.map(([q, a]) => `
        <div class="faq-item reveal">
            <button class="faq-q"><span>${q}</span><span class="faq-marker">+</span></button>
            <div class="faq-a"><p>${a}</p></div>
        </div>`).join('')}
    </div>
</section>` + foot;

// ─── FREE AUDIT ────────────────────────────────────────────────────────────────
const audit = head("Free Audit", "A free 30-day missed call audit. We calculate exactly how much revenue is leaking from your clinic.") + nav + `
<section style="min-height:100vh;padding-top:52px;display:grid;grid-template-columns:50fr 50fr;border-bottom:var(--rule)">
    <div style="padding:80px 56px 80px 40px;border-right:var(--rule);background:var(--surface)">
        <span class="section__tag" style="margin-bottom:16px">Free Audit</span>
        <h1 class="f-h2" style="color:var(--ink);margin-bottom:20px">Run the numbers.<br><em class="f-italic" style="font-variation-settings:'opsz' 9">Stop the leak.</em></h1>
        <p class="f-body" style="color:var(--ink-muted);line-height:1.75;margin-bottom:40px">A free 30-day missed call audit. We'll calculate exactly how much revenue is leaking — and show you what recovery looks like for your specialisation. No commitment. No sales call unless you want one.</p>
        <div style="display:flex;flex-direction:column;gap:24px">
            <div style="border-left:3px solid var(--green);padding-left:16px">
                <p class="f-label" style="color:var(--green);margin-bottom:6px">14-Day Audit Result</p>
                <p class="f-small" style="color:var(--ink-muted)">A full breakdown of missed calls, estimated revenue loss, and a recovery projection for your specialisation.</p>
            </div>
            <div style="border-left:3px solid var(--blue);padding-left:16px">
                <p class="f-label" style="color:var(--blue);margin-bottom:6px">Live AI Demo</p>
                <p class="f-small" style="color:var(--ink-muted)">Hear the AI make a call to your number. Takes 3 minutes. No setup required.</p>
            </div>
        </div>
        <div style="margin-top:48px;padding-top:24px;border-top:var(--rule)">
            <div style="display:flex;gap:32px">
                <div><span class="f-stat" style="font-size:40px;color:var(--ink)">15</span><span class="f-label" style="color:var(--ink-muted);display:block;margin-top:4px">Booking guarantee</span></div>
                <div><span class="f-stat" style="font-size:40px;color:var(--ink)">4</span><span class="f-label" style="color:var(--ink-muted);display:block;margin-top:4px">Days to go live</span></div>
                <div><span class="f-stat" style="font-size:40px;color:var(--ink)">8s</span><span class="f-label" style="color:var(--ink-muted);display:block;margin-top:4px">AI callback</span></div>
            </div>
        </div>
    </div>
    <div style="padding:80px 40px 80px 56px;background:var(--parchment)">
        <h2 class="f-card-title" style="margin-bottom:6px">Audit Request</h2>
        <p class="f-small" style="color:var(--ink-muted);margin-bottom:40px">Takes 2 minutes. No sales call unless you want one.</p>
        <div style="display:flex;flex-direction:column;gap:24px">
            <div>
                <label class="f-label" style="color:var(--ink-muted);display:block;margin-bottom:8px">Clinic / Doctor Name</label>
                <input type="text" placeholder="Dr. Mehta's Dental Clinic" style="width:100%;padding:12px 16px;background:transparent;border:1px solid rgba(28,25,22,0.18);font-family:var(--mono);font-size:14px;color:var(--ink);outline:none;border-radius:2px">
            </div>
            <div>
                <label class="f-label" style="color:var(--ink-muted);display:block;margin-bottom:8px">WhatsApp Number</label>
                <input type="tel" placeholder="+91 98765 43210" style="width:100%;padding:12px 16px;background:transparent;border:1px solid rgba(28,25,22,0.18);font-family:var(--mono);font-size:14px;color:var(--ink);outline:none;border-radius:2px">
            </div>
            <div>
                <label class="f-label" style="color:var(--ink-muted);display:block;margin-bottom:8px">Specialisation</label>
                <select style="width:100%;padding:12px 16px;background:var(--parchment);border:1px solid rgba(28,25,22,0.18);font-family:var(--mono);font-size:14px;color:var(--ink);outline:none;border-radius:2px;appearance:none">
                    <option>Hair Transplant</option>
                    <option>Dental / Implants</option>
                    <option>IVF / Fertility</option>
                    <option>Dermatology</option>
                    <option>Orthopaedics</option>
                    <option>Ophthalmology</option>
                    <option>Cosmetic Surgery</option>
                    <option>ENT Specialists</option>
                    <option>Other</option>
                </select>
            </div>
            <div>
                <label class="f-label" style="color:var(--ink-muted);display:block;margin-bottom:8px">What would you like?</label>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
                    <label style="cursor:pointer">
                        <input type="radio" name="session" style="display:none" checked>
                        <div class="audit-option" style="padding:14px;border:1px solid var(--ink);background:transparent">
                            <p class="f-label" style="margin-bottom:4px">Missed Call Audit</p>
                            <p class="f-small" style="color:var(--ink-muted)">14-day free audit</p>
                        </div>
                    </label>
                    <label style="cursor:pointer">
                        <input type="radio" name="session" style="display:none">
                        <div class="audit-option" style="padding:14px;border:1px solid rgba(28,25,22,0.15);background:transparent">
                            <p class="f-label" style="margin-bottom:4px">Live Demo Call</p>
                            <p class="f-small" style="color:var(--ink-muted)">Hear the AI in 15 min</p>
                        </div>
                    </label>
                </div>
            </div>
            <div>
                <label class="f-label" style="color:var(--ink-muted);display:block;margin-bottom:8px">Anything to add? <span style="font-weight:400;text-transform:none;letter-spacing:0">(optional)</span></label>
                <textarea rows="3" placeholder="Call volume, current software, anything useful..." style="width:100%;padding:12px 16px;background:transparent;border:1px solid rgba(28,25,22,0.18);font-family:var(--mono);font-size:14px;color:var(--ink);outline:none;resize:none;border-radius:2px"></textarea>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center">
                <p class="f-small" style="color:var(--ink-muted)">100% Confidential</p>
                <button type="button" class="btn btn-primary">Submit Request &rarr;</button>
            </div>
        </div>
    </div>
</section>
<style>
@media(max-width:900px){section[style*="grid-template-columns:50fr"]{display:block}section[style*="grid-template-columns:50fr"] > div{border-right:none;border-bottom:var(--rule)}}
</style>` + foot;

fs.writeFileSync('how-it-works.html', hiw, 'utf8');
fs.writeFileSync('compare.html', compare, 'utf8');
fs.writeFileSync('pricing.html', pricing, 'utf8');
fs.writeFileSync('faq.html', faq, 'utf8');
fs.writeFileSync('free-audit.html', audit, 'utf8');
console.log('All 5 sub-pages rebuilt with new Warm Command design system.');
