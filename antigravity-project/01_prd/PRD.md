# PRD: Engageo Cinematic Landing Page

## Overview
Build a high-fidelity, conversion-focused marketing website for Engageo modelled on the OneText.com aesthetic seen in the reference screenshots. The site uses a dark command-center design language with large typography-led heroes, floating 3D data cards, editorial proof sections, and frictionless CTAs. No phone mockups with chat bubbles — data tables, operational dashboards, and raw numbers only. The primary conversion goal on every page is audit form submission or WhatsApp contact.

---

## Task 1: Global Design System & CSS Tokens
Define and implement the full design system before any page work begins.
- **Color tokens:**
  - `--recovery-blue: #2563EB` — primary CTAs, links, active states
  - `--command-black: #0A0F1E` — dark section backgrounds
  - `--clinic-white: #F8F9FB` — page background
  - `--signal-green: #10B981` — WhatsApp layer accents
  - `--recovered-green: #059669` — revenue recovered numbers
  - `--loss-red: #DC2626` — revenue lost indicators
  - `--sovereign-gold: #D97706` — Tier 3 Dominate accents
- **Typography stack:** Plus Jakarta Sans (headings), Outfit (UI labels), Cormorant Garamond (editorial pullquotes), IBM Plex Mono (data/numbers)
- **Global noise overlay:** subtle CSS grain texture on all dark sections (matches OneText dark hero aesthetic)
- **Floating data card component:** glassmorphism card with large bold stat, small descriptor label, coloured dot indicator — used across hero and feature sections (reference: "35% more carts", "16x recoveries", "Drive up to 15%" cards in screenshot 2)
- **Section rhythm:** dark sections alternate with light sections. Dark = technical/process content. Light = social proof, features, pricing.
- **No decorative card borders** on feature items — display data raw against background

## Task 2: Navigation
Build a minimal fixed navbar matching the OneText reference (screenshot 1).
- Logo mark left-aligned (wordmark only, no icon)
- Nav links: Features · Pricing · How It Works · Compare · FAQ
- Right side: Login (ghost) + "Get Free Audit →" (filled blue pill button)
- Transparent on hero, solid `--command-black` on scroll
- Mobile: hamburger menu, full-screen overlay
- No mega menus, no dropdowns

## Task 3: Homepage Hero Section
Build the primary hero matching the dark cinematic aesthetic of screenshot 1.
- Full-viewport dark section (`--command-black` background)
- **Headline** (large, left-aligned, white): "Your Clinic Loses ₹4–12L Every Month to Missed Calls. We Fix That in 4 Days."
- **Subheadline:** "8-second AI callback. Hinglish voice agent. Google Calendar booking. WhatsApp confirmation. Zero setup needed."
- **Two CTAs:** `[Get Free Audit →]` (blue filled) + `[See How It Works]` (ghost)
- **Right side:** 3D abstract visual or animated node/wire mesh (reference: OneText marble-run 3D object) — represents the automation pipeline visually
- **Floating stat cards** overlaid on the visual (reference screenshot 2): e.g. "8 seconds / AI calls back", "₹2.4Cr / recovered in 47 days", "23% / average miss rate recovered"
- Below hero fold: scrolling logo bar of clinic names or "Verified Clinic ✓" anonymised badges

## Task 4: AI Demo Trigger Modal
Build the interactive demo modal matching screenshot 3.
- Triggered by "Test our AI →" CTA or "Get Free Audit" button
- Modal overlays the hero with blur backdrop
- Header: "Experience Engageo for [Your Clinic]"
- **Left panel:** QR code linking to a WhatsApp demo flow
- **OR divider**
- **Right panel:** phone number input field + "Send Me the Demo →" button
- On submit: show confirmation state — checkmark icon + "We're sending you a demo call right now."
- Back link returns to homepage without page reload
- Consent copy below input (DPDP compliant): "By submitting, you consent to receive a demo callback and WhatsApp message from Engageo. Reply STOP to opt out."

## Task 5: Social Proof & Logo Bar Section
Build the trust section directly below the hero (reference screenshot 1 bottom strip).
- Dark background strip
- Left: large pull-quote — `"Recovered ₹6.2L in the first month"` — Name, Specialty, City
- Right: 4 clinic name badges or anonymised "Verified Hair Transplant Clinic, Delhi" tiles
- Tiles are pill-shaped, dark border, white text — matches OneText brand strip style
- Scrolling marquee animation on mobile

## Task 6: Features Section
Build the features grid in a dark command-center aesthetic (reference screenshot 4).
- Section headline: "Everything You Need. Everything You Didn't Know You Needed."
- **Not a card grid** — use a 2-column editorial layout with large feature names left and descriptions right
- 6 features displayed as operational data rows:
  - `8 seconds` — AI calls back before the patient dials a competitor
  - `Hinglish Native` — speaks the way your patients actually talk
  - `Google Calendar Direct` — reads live slots, books without HMS
  - `4-Step WhatsApp Sequence` — confirmation, reminder, directions, rescheduling
  - `Real-Time Dashboard` — shows rupees recovered, not call logs
  - `DPDP Compliant` — Indian data residency, consent-first calling
- Each feature row has a monospace number/stat on the far right (IBM Plex Mono)
- Subtle horizontal rule dividers between rows, no boxes or shadows

## Task 7: How It Works Section (Homepage Condensed)
Build the 4-step horizontal workflow preview on the homepage.
- Light background section
- Headline: "From Missed Call to Confirmed Booking in Under 4 Minutes"
- 4 steps in horizontal flow with connecting line:
  1. Call Missed → 2. AI Calls Back in 8s → 3. Slot Booked → 4. WhatsApp Sent
- Each step: step number (monospace), bold title, one-line description
- CTA below: "See the full system →" links to /how-it-works

## Task 8: Revenue Calculator Section
Build an interactive calculator that outputs personalised revenue loss numbers.
- Light section, centred layout
- Headline: "Find Out Exactly How Much You're Losing"
- **Inputs:**
  - Specialty (dropdown: Hair Transplant / Dental / Dermatology / IVF)
  - Monthly inbound calls (number input or slider: 20–200)
  - Estimated miss rate (slider: 10%–40%)
- **Output (live, updates on input change):**
  - Monthly revenue at risk: `₹X,XX,XXX` (displayed in `--loss-red`, large monospace)
  - Annual revenue at risk: `₹XX,XX,XXX`
  - "Engageo recovers an estimated ₹X,XX,XXX of this in Month 1"
- CTA: "Recover This Revenue →" links to /audit

## Task 9: Guarantee & Pricing Preview Section
Build the guarantee block and condensed pricing preview before the footer.
- **Guarantee block:** dark section, sovereign gold accent border
  - Headline: "15 Confirmed Bookings in 30 Days — or We Keep Going For Free."
  - No asterisks. No footnotes. No conditions.
- **Pricing preview:** 3-column light section, one card per tier
  - RECOVER ₹25,000/mo · GROW ₹55,000/mo · DOMINATE ₹1,20,000/mo
  - Each card: tier name, price, 3-word value prop, single CTA
  - Link below: "Full pricing breakdown and comparison →" to /pricing
  - Matching screenshot 6 layout: clean white cards, blue CTA button, feature checklist

## Task 10: Footer
Build a minimal footer.
- Dark background
- Left: Engageo wordmark + one-line description
- Centre: nav links (Features / Pricing / Compare / FAQ / Audit)
- Right: WhatsApp contact button + "Built for Indian clinics"
- Bottom strip: Privacy Policy · DPDP Compliance Statement · © 2026 Engageo
- No social icons except WhatsApp

## Task 11: /how-it-works Page
Build the full system explainer page.
- **Dark vertical timeline (6 steps):**
  1. Silent Loss — call drops, revenue disappears, nothing happens
  2. Intent Identified — MSG91 detects missed call within 5 seconds
  3. AI Calls Back — Vapi agent calls patient within 8 seconds in Hinglish
  4. Patient Doesn't Know It's AI — natural qualification, real slot offered
  5. Slot Filled — Google Calendar event created, WhatsApp confirmation sent
  6. Weekly Revenue Report — rupee value recovered, every Monday 9am
- Each step: large step number (monospace), bold title, 2-line description, subtle connecting line
- **7-step horizontal workflow** (light section, editorial table — no chat bubbles):
  Call Missed → AI Intercept → Voice Qualification → Schedule Sync → Slot Secured → WhatsApp Sent → Staff Notified
- **Tech stack table** (non-technical language): tool name, plain-English role, one-line "why this"
- CTA at bottom: "See pricing →" and "Get Free Audit →"

## Task 12: /pricing Page
Build the full pricing page with tier comparison.
- Page headline: "Transparent Pricing. One Guarantee."
- **3-tier comparison table** (reference screenshot 6):
  - Columns: RECOVER / GROW / DOMINATE
  - Rows: price, minimum term, all features (checkmark or dash), guarantee
  - DOMINATE column uses `--sovereign-gold` accent
- **"Which tier is right for me?" selector:** 3 questions (call volume, ad spend, content readiness) → auto-highlights recommended tier
- Guarantee callout block below table (same as homepage)
- FAQ teaser: 3 most common pricing questions inline
- CTA: "Start with a Free Audit →" links to /audit

## Task 13: /compare Page
Build the competitive comparison page.
- Headline: "Why Clinics Switch to Engageo"
- Full comparison table — Engageo vs Ringg AI vs Bland/Retell vs Vapi Direct vs New Receptionist:
  - Monthly cost
  - Pricing currency (INR vs USD)
  - IT setup required
  - Trained on Indian specialty
  - Speaks Hinglish
  - WhatsApp native
  - DPDP Act compliant
  - Outcome guarantee
  - Response speed after missed call
  - Dashboard shows rupees not jargon
- Engageo column highlighted in `--recovery-blue`
- No editorial bias copy — let the table speak
- CTA below: "Get Free Audit →"

## Task 14: /faq Page
Build the FAQ page with 6 core questions.
- Accordion-style expand/collapse, light background
- Questions:
  1. Is using AI for medical calls legal in India?
  2. What if the patient figures out it's AI?
  3. Does it integrate with HMS or Practo?
  4. What if the AI can't answer a patient's question?
  5. How long does it take to go live?
  6. What happens if 15 bookings are not delivered in 30 days?
- Each answer: 3–5 sentences, plain language, no jargon
- CTA after last answer: "Still have questions? WhatsApp us →"

## Task 15: /audit Page (Lead Capture)
Build the minimal high-intent conversion page.
- **No navbar links except logo** — nothing to click away to
- **No footer**
- Page headline: "Get Your Free Missed Call Audit"
- Subheadline: "We'll show you exactly how much revenue your clinic is losing — in rupees, not percentages."
- **3 trust signals above form** (icon + text, horizontal row):
  - No credit card required
  - Response within 24 hours
  - Zero commitment
- **Form fields:**
  - Full Name
  - Clinic Name
  - City
  - Specialty (dropdown: Hair Transplant / Dental Implants / Dermatology / IVF / Other)
  - WhatsApp Number
- **Submit CTA:** "Send My Free Audit →" (full-width blue button)
- On submit: POST to n8n webhook → WhatsApp message to 917696382250 with all fields
- **Confirmation state** (replaces form, no page reload):
  - Checkmark animation
  - "Audit request received. We'll WhatsApp you within 24 hours with your clinic's revenue leakage analysis."
  - No redirect, no email required