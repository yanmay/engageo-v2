const fs = require('fs');

const NEW_FOOTER = `const FOOT = () => \\\`<footer class="eg-footer"><div class="eg-footer__top"><div class="eg-footer__brand"><span class="eg-footer__logo" style="font-family:var(--serif);font-size:20px;font-weight:700;color:var(--parchment)">Engageo</span><p style="margin-top:12px">We answer the calls your clinic misses. Autonomous missed-call recovery for high-ticket Indian specialists.</p><div style="margin-top:24px;display:flex;align-items:center;gap:8px"><span style="width:8px;height:8px;border-radius:50%;background:var(--teal);display:inline-block"></span><span class="f-label" style="font-size:10px;color:var(--teal)">SYSTEMS OPERATIONAL</span></div></div><div class="eg-footer__links" style="display:flex;gap:40px;flex-wrap:wrap"><div class="eg-footer__col" style="display:flex;flex-direction:column;gap:12px"><strong style="color:var(--parchment)">Platform</strong><a href="/how-it-works.html">How It Works</a><a href="/pricing.html">Pricing</a><a href="/compare.html">Compare</a><a href="/faq.html">FAQ</a></div><div class="eg-footer__col" style="display:flex;flex-direction:column;gap:12px"><strong style="color:var(--parchment)">Clinic Types</strong><span>Hair Transplant</span><span>Dental & Implants</span><span>IVF & Fertility</span><span>Dermatology</span></div><div class="eg-footer__col" style="display:flex;flex-direction:column;gap:12px"><strong style="color:var(--parchment)">Legal</strong><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">DPDP Act Compliance</a></div></div></div><div class="eg-footer__bottom" style="border-top:1px solid rgba(245,240,232,0.1);padding-top:24px;margin-top:40px;display:flex;justify-content:space-between;font-size:12px;color:rgba(245,240,232,0.4)"><span>&copy; <script>document.write(new Date().getFullYear())</script> Engageo. Built for India.</span><span>Strictly No Medical Advice Provided.</span></div></footer>\\\`;`;

const files = ['gen-pricing.cjs', 'gen-compare.cjs', 'gen-faq-audit.cjs', 'gen-hiw.cjs'];

files.forEach(f => {
    if (!fs.existsSync(f)) return;
    let code = fs.readFileSync(f, 'utf8');
    // Match any FOOT definition pattern
    code = code.replace(/const FOOT = \(\) => \\`<footer.*?<\/footer>\\`;/s, NEW_FOOTER);
    fs.writeFileSync(f, code);
    console.log('Fixed footer in', f);
});
