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



**ENGAGEO**

Product Requirements Document

*AI-Powered Missed Call Recovery & Patient Booking for Indian Specialist
Clinics*

+-----------------------------------+-----------------------------------+
| **Version**                       | **Date**                          |
|                                   |                                   |
| 1.0                               | March 2026                        |
+-----------------------------------+-----------------------------------+

  -----------------------------------------------------------------------
  CONFIDENTIAL --- This document is intended for technical co-founders,
  angel investors, and financial advisors. Not for public distribution.

  -----------------------------------------------------------------------

**1. Executive Summary**

Engageo is an AI-powered missed call recovery and automated patient
booking system built exclusively for high-ticket Indian specialist
clinics --- hair transplant, dental implants, IVF, and dermatology. The
core problem: Indian specialist clinics invest ₹30,000--₹80,000 per
month on Google and Instagram ads to generate inbound call volume, yet
lose 20--35% of those calls during peak hours when receptionists are
occupied. Each missed call in a hair transplant clinic represents
₹40,000--₹1,20,000 in unbooked revenue. No existing solution in the
Indian market intercepts missed calls, qualifies the patient, books an
appointment, and initiates a WhatsApp retention sequence --- all without
any action from clinic staff.

Engageo\'s mechanism is a five-layer automation stack: (1) MSG91 detects
a missed inbound call within seconds and fires a webhook; (2) n8n
orchestrates the response workflow; (3) Vapi\'s AI voice agent calls the
patient back within 8 seconds, speaks Hinglish, qualifies the patient on
specialty, urgency, and budget intent, and books an appointment slot by
reading live availability from Google Calendar; (4) WATI then sends a
4-step WhatsApp retention sequence --- confirmation, 24-hour reminder,
2-hour directions message, and a no-show rescheduling offer; (5) the
receptionist sees all recovered bookings in a real-time dashboard with
rupee values, not call logs.

The business model is a monthly retainer --- ₹25,000/month (Tier 1:
RECOVER), ₹55,000/month (Tier 2: GROW), or ₹1,20,000/month (Tier 3:
DOMINATE) --- paid upfront on the 1st of each month. Infrastructure cost
per client is ₹10,000--₹15,000/month, yielding 40--70% gross margin.
Month 1 target is 5 clients at ₹2--2.8L MRR. Month 6 target is 25--35
clients at ₹8--12L MRR. A go-live guarantee of 15 confirmed bookings in
30 days or service continues for free removes the primary objection at
close.

**2. Problem Statement**

**2.1 The Quantified Problem**

Indian specialist clinics operate a fundamentally broken call-handling
model. A clinic owner spends ₹50,000/month on Google ads, generates 120
inbound calls per month, and loses 30 of those calls (25%) to missed
call scenarios. Here is what that costs by specialty:

  ---------------------------------------------------------------------------------------
  **Specialty**   **Avg Case  **Calls/Month**   **Miss    **Calls        **Monthly
                  Value**                       Rate**    Lost/Month**   Revenue Lost**
  --------------- ----------- ----------------- --------- -------------- ----------------
  Hair Transplant ₹80,000     80--120           20--35%   20--35         ₹16L--₹42L

  Dental Implants ₹60,000     60--100           20--30%   15--25         ₹9L--₹15L

  IVF / Fertility ₹1,50,000   40--60            15--25%   8--15          ₹12L--₹22.5L

  Dermatology     ₹15,000     100--150          25--35%   25--45         ₹3.75L--₹6.75L
  ---------------------------------------------------------------------------------------

Even at the conservative end, a mid-size hair transplant clinic running
₹40,000/month in ads is losing more in missed-call revenue every month
than they would spend on Engageo\'s highest tier in an entire year.

**2.2 Why Current Alternatives Fail**

**Receptionists**

A receptionist earning ₹18,000--₹25,000/month can handle 3--4
simultaneous tasks. During morning peak (9--11am) and post-lunch
(2--4pm), call volume spikes. A single distracted moment --- a patient
at the counter, a doctor query, a billing question --- drops the call
permanently. Training does not solve a capacity problem.

**IVR / Missed Call SMS Systems**

Standard IVR systems catch the missed call but send a generic callback
SMS that 60--70% of patients ignore. They do not qualify the patient, do
not check appointment availability, and do not book. The conversion rate
from IVR SMS to booked appointment is under 8% in Indian clinic contexts
based on operator interviews.

**WhatsApp Manual Follow-Up**

Clinics with WhatsApp-savvy receptionists attempt manual follow-up, but
the median time from missed call to first WhatsApp message is 47
minutes. Patient intent decays exponentially --- at 8 seconds, the
patient is still in call mode; at 47 minutes, they have already called a
competitor. Manual WhatsApp also cannot book appointments, only schedule
a callback.

**Global AI Receptionist Products (Ringg, Bland, Retell, Vapi Direct)**

These products require technical integration (SIP trunking, custom API
setup), are priced in USD (\$300--\$500/month), are not trained on
Indian medical specialties, do not support Hinglish, have no WhatsApp
layer, and are not compliant with India\'s Digital Personal Data
Protection (DPDP) Act 2023. A clinic owner in Lajpat Nagar cannot
self-configure any of them without a developer on retainer.

**3. Solution Overview**

**3.1 End-to-End Patient Journey**

  -------------------------------------------------------------------------------
  **Step**   **What Happens**               **System              **Time
                                            Responsible**         Elapsed**
  ---------- ------------------------------ --------------------- ---------------
  1          Patient calls clinic number.   Telecom / Clinic      0:00
             Receptionist is busy. Call                           
             rings out after 20--30                               
             seconds.                                             

  2          MSG91 detects the missed call  MSG91                 0:05
             via virtual number and fires a                       
             webhook to n8n.                                      

  3          n8n Workflow A triggers Vapi   n8n + Vapi            0:08
             to initiate an outbound call                         
             to the patient\'s number.                            

  4          Vapi AI agent answers in       Vapi                  0:10
             Hinglish: \'Namaste, Dr.                             
             \[Name\] ki clinic se bol raha                       
             hoon\...\'                                           

  5          Agent qualifies: specialty     Vapi                  0:10--3:00
             interest, urgency level,                             
             budget range. Duration:                              
             90--180 seconds.                                     

  6          Agent reads available slots    Vapi + GCal           2:00--3:30
             from Google Calendar and                             
             offers 2--3 options to the                           
             patient.                                             

  7          Patient selects a slot. Agent  Vapi                  3:30
             confirms and ends call.                              
             Webhook fires to n8n.                                

  8          n8n Workflow B creates         n8n + GCal + WATI     3:35
             calendar event, sends WATI                           
             WhatsApp confirmation                                
             (Template 1).                                        

  9          T-24hrs: WATI sends reminder   WATI                  T-24hr
             WhatsApp asking patient to                           
             reply CONFIRM.                                       

  10         T-2hrs: WATI sends directions, WATI                  T-2hr
             parking, what to bring.                              

  11         No-show detected: WATI sends   WATI (conditional)    T+1hr
             rescheduling offer with 3 new                        
             slots.                                               

  12         Receptionist sees booking in   Dashboard + WATI      Real-time
             dashboard. Receives WhatsApp                         
             notification.                                        
  -------------------------------------------------------------------------------

**3.2 Tech Stack Architecture**

  -----------------------------------------------------------------------------
  **Component**   **Role**            **Why This Tool**  **Monthly Cost
                                                         (est.)**
  --------------- ------------------- ------------------ ----------------------
  MSG91           Missed call         Only Indian        ₹1,500--₹3,000
                  detection via       provider with      
                  virtual DID. Fires  missed-call        
                  webhook on ring     webhook + virtual  
                  without answer.     number + DPDP data 
                                      residency          

  n8n             Workflow            Open-source,       ₹2,000 (server)
  (self-hosted)   orchestration.      self-hosted for    
                  Routes data between data control.      
                  all services.       Supports all       
                                      required           
                                      integrations       
                                      natively.          

  Vapi            AI voice agent.     Best-in-class LLM  ₹3,000--₹5,000
                  Outbound calling.   voice infra.       
                  Hinglish TTS + STT. Supports custom    
                                      system prompts,    
                                      webhook on call    
                                      end.               

  Google Calendar Live slot           Universal. Clinic  Free
                  availability +      owners already use 
                  booking creation    it. No HMS         
                  via OAuth.          required.          

  WATI            WhatsApp Business   Indian-market      ₹2,000--₹3,500
                  API. 4-step         focused.           
                  retention sequence. BSP-approved.      
                  Staff               Template           
                  notifications.      management UI.     

  Razorpay        Client payment      Indian-native.     \~2% transaction fee
                  collection. Monthly UPI + bank         
                  retainer billing.   transfer.          
                                      Automated          
                                      recurring          
                                      invoices.          

  Clinic          Custom-built. Shows Built in-house. No Included in build
  Dashboard       recovered bookings, third-party        
                  revenue, call logs. dependency.        
  -----------------------------------------------------------------------------

**4. Target Users**

**4.1 Primary User: Clinic Owner / Specialist Doctor**

The primary user is also the buyer, the decision-maker, and the person
whose pain Engageo eliminates. They do not delegate this purchase to
anyone else.

-   Title: Clinic Owner, Director, or Lead Specialist (MD, MDS, MBBS
    with specialty practice)

-   Location: Tier 1 Indian cities --- Delhi NCR, Mumbai, Bangalore,
    Hyderabad, Chennai, Pune

-   Age: 35--55. Comfortable with smartphones and WhatsApp.
    Uncomfortable with technical setup.

-   Current ad spend: ₹30,000--₹80,000/month on Google Search or
    Instagram (managed by a vendor or in-house)

-   Call volume: 80--150 inbound calls/month, of which 20--35% are
    missed

-   Pain: watches ad spend leak out as missed calls with no recovery
    mechanism

-   Decision timeline: 3--10 days for hair transplant, 7--14 days for
    dental/derm, 30+ days for IVF

-   Buys on: peer referral, ROI proof (revenue recovered), and personal
    WhatsApp relationship with founder

**4.2 Secondary User: Receptionist / Front Desk Coordinator**

-   Uses the dashboard daily --- sees live recovered bookings with
    patient name, time, doctor, rupee value

-   Receives WhatsApp notification for every new booking within 30
    seconds of AI confirmation

-   Has zero setup or technical responsibility --- Engageo is invisible
    to them until a booking appears

-   Primary concern: \'Will the AI say something wrong to patients?\'
    --- handled by call script guardrails

**4.3 ICP Scorecard (10 Criteria)**

Score each lead 0--10. Minimum qualifying score: 60/100. Priority close
above 75/100.

  ---------------------------------------------------------------------------
  **Criterion**    **0 Points**       **5 Points**       **10 Points**
  ---------------- ------------------ ------------------ --------------------
  Specialty        General GP /       Dental, Derm       Hair Transplant, IVF
                   Multi-specialty                       

  Monthly ad spend Under ₹10,000      ₹10K--₹30K         ₹30,000+

  Inbound call     Under 30/month     30--80/month       80+/month
  volume                                                 

  Case value       Under ₹5,000       ₹5K--₹30K          ₹30,000+

  Sole             Committee/board    Owner + spouse     Owner alone
  decision-maker                                         

  Current missed   HMS with callback  IVR SMS            No system
  call handling                                          

  Google Calendar  Not using          Using for personal Using for clinic
  usage                                                  

  City             Tier 3             Tier 2             Tier 1
                                                         (Delhi/Mumbai/BLR)

  WhatsApp         Email only         Occasional WA      WA-primary
  engagement                                             communicator

  Referral source  Cold outreach      Ad click           Peer referral
  ---------------------------------------------------------------------------

**4.4 Buyer Archetypes**

  ----------------------------------------------------------------------------------
  **Name**      **Specialty**      **Call        **Case Value**         **Expected
                                   Volume**                             Close**
  ------------- ------------------ ------------- ---------------------- ------------
  The Hair King Hair Transplant,   120           ₹80,000--₹1,20,000     3--5 days
                Delhi NCR          calls/month                          

  The Smile     Dental Implants,   80            ₹50,000--₹80,000       7--10 days
  Architect     Mumbai             calls/month                          

  The Skin      Dermatology +      100           ₹10,000--₹25,000       7--14 days
  Expert        Laser, Bangalore   calls/month                          

  The Fertility IVF / Fertility,   50            ₹1,20,000--₹2,00,000   30+ days
  Specialist    Hyderabad          calls/month                          (needs case
                                                                        studies)
  ----------------------------------------------------------------------------------

**5. Product Pages & Features**

**5.1 Homepage (/)**

**Purpose**

Convert cold traffic (Meta ad click or peer referral) into audit form
submission or WhatsApp contact. The homepage exists to create urgency
around revenue being lost right now, not to educate on AI.

**Primary User Action**

Click \'Get Free Audit\' CTA and submit audit form, OR click WhatsApp
CTA and send message to 917696382250.

**Sections & Components**

-   HERO: Full-width dark section. Headline: \'Your Clinic Loses ₹4--12L
    Every Month to Missed Calls. We Fix That in 4 Days.\' Sub:
    \'8-second AI callback. Hinglish voice agent. Google Calendar
    booking. WhatsApp confirmation. Zero setup needed.\' Two CTAs: \[Get
    Free Audit →\] \[See How It Works\]

-   SOCIAL PROOF BAR: Three logos or names of clinics (real or
    \'Verified Clinic\' anonymized). Rotating stat: \'₹2.4 crore
    recovered in 47 days across 11 clinics.\'

-   WHO IT\'S FOR: 3-column grid. Hair Transplant (₹80K average case),
    Dental Implants (₹60K), Dermatology (₹15K). Each with: \'If you
    spend ₹\[X\] on ads and miss calls during consults, this is for
    you.\'

-   HOW IT WORKS (condensed): 4-step horizontal flow. 1) Call Missed
    → 2) AI Calls Back in 8s → 3) Appointment Booked → 4) Patient
    Retained via WhatsApp.

-   REVENUE CALCULATOR: Input fields: Specialty (dropdown), Monthly
    calls, Estimated miss rate (slider 15--40%). Output: Monthly revenue
    at risk, Annual revenue at risk. CTA below: \'This is what Engageo
    recovers for you.\'

-   FEATURES GRID: 6 feature blocks in dark command-center style.
    Displayed as data metrics, not icon cards: \'8 seconds\' /
    \'Hinglish Native\' / \'Google Calendar Direct\' / \'4-Step WhatsApp
    Sequence\' / \'Real-Time Dashboard\' / \'DPDP Compliant\'

-   GUARANTEE SECTION: Dark section with sovereign gold accent. \'15
    Confirmed Bookings in 30 Days --- or We Keep Going For Free. No
    asterisks. No conditions.\'

-   PRICING PREVIEW: Three tier names with prices. No feature detail.
    Link: \'Full pricing and comparison →\' to /pricing

-   TESTIMONIALS: 2--3 testimonial blocks. Format: Name, Specialty,
    City, Revenue recovered (₹ figure). No headshots until real clients
    acquired.

**Key Copy Guideline**

Every headline must contain a rupee number or a time (seconds, days). No
abstract benefit language. Wrong: \'Improve patient experience.\' Right:
\'Book 23 patients you would have lost this month.\'

**CTA**

\[Get Free Audit →\] links to /audit. \[WhatsApp Us\] opens
wa.me/917696382250.

**5.2 How It Works (/how-it-works)**

**Purpose**

Convert skeptical clinic owners who want to understand the mechanism
before committing. This page sells the intelligence of the system, not
the outcome.

**Sections & Components**

-   DARK TIMELINE (6 steps, vertical, command-center aesthetic):

1.  Silent Loss --- Patient calls, receptionist can\'t answer, call
    drops. Nothing happens. Revenue disappears.

2.  Intent Identified --- MSG91 detects the missed call within 5
    seconds. Fires a webhook with patient number, time, and clinic ID.

3.  AI Calls Back --- Vapi voice agent calls the patient within 8
    seconds. Speaks in natural Hinglish. Introduces as Dr. \[Name\]\'s
    clinic team.

4.  Patient Doesn\'t Know It\'s AI --- The agent qualifies naturally:
    specialty interest, timeline, budget. Offers 2--3 real slots from
    live calendar.

5.  Slot Filled --- Appointment created in Google Calendar. WhatsApp
    confirmation sent to patient within 30 seconds.

6.  Weekly Revenue Report --- Clinic owner sees total missed calls,
    recovered bookings, and rupee value recovered. Every Monday, 9am.

-   7-STEP HORIZONTAL WORKFLOW (light section, editorial table format):
    Call Missed → AI Intercept → Voice Qualification → Schedule Sync →
    Slot Secured → WhatsApp Sent → Staff Notified

-   TECH STACK EXPLAINER: Data table showing each tool, its role, and a
    one-line explanation written for non-technical readers.

-   FAQ TEASER: 3 most common objections answered inline. CTA: \'See all
    FAQs →\' links to /faq

**5.3 Pricing (/pricing)**

**Purpose**

Help warm leads self-select a tier and submit the audit form. The page
should never create confusion --- it must answer \'which tier is right
for me\' without a sales call.

**Tier Structure**

  -----------------------------------------------------------------------------
                      **RECOVER --- Tier **GROW --- Tier    **DOMINATE --- Tier
                      1**                2**                3**
  ------------------- ------------------ ------------------ -------------------
  Price               ₹25,000/month      ₹55,000/month + ad ₹1,20,000/month +
                                         spend at cost      ad spend at cost

  Minimum Term        3 months           6 months           6 months (by
                                                            application)

  Missed Call         Yes                Yes                Yes
  Recovery                                                  

  AI Voice Callback   Yes                Yes                Yes

  Google Calendar     Yes                Yes                Yes
  Booking                                                   

  WhatsApp 4-Step     Yes                Yes                Yes
  Sequence                                                  

  Weekly Revenue      Yes                Yes                Yes
  Report                                                    

  Meta & Google Ads   No                 Yes                Yes
  Management                                                

  GMB Optimisation    No                 Yes                Yes

  Landing Page Build  No                 Yes                Yes

  Full WhatsApp       No                 Yes                Yes
  Funnel                                                    

  YouTube/Instagram   No                 No                 Yes
  Strategy                                                  

  Doctor Personal     No                 No                 Yes
  Brand (Video)                                             

  SEO Blog Content    No                 No                 Yes
  (2/month)                                                 

  Website Build       No                 No                 Yes

  Monthly 1:1 with    No                 No                 Yes
  Founder                                                   

  Guarantee           15 bookings/30     15 bookings/30     15 bookings/30 days
                      days               days               

  Infrastructure      ₹10,000--₹12,000   ₹12,000--₹15,000   ₹15,000--₹20,000
  Cost/month                                                

  Gross Margin        52--60%            60--70%            83--87%
  -----------------------------------------------------------------------------

**5.4 Comparison (/compare)**

**Purpose**

Intercept comparison-shoppers who are evaluating Engageo against other
tools. This page exists to win before the conversation starts.

**Comparison Table**

  -----------------------------------------------------------------------------------------------------
  **Criteria**    **Engageo**   **Ringg AI**       **Bland/Retell**   **Vapi         **New
                                                                      Direct**       Receptionist**
  --------------- ------------- ------------------ ------------------ -------------- ------------------
  Monthly Cost    ₹25,000       ₹25,000--₹40,000   \$300--\$500 (USD) \$300--\$700   ₹18,000--₹25,000
                                                                      (USD)          

  Pricing         Indian Rupees INR                USD only           USD only       INR (salary)
  Currency                                                                           

  IT Setup        None (4-day   Moderate           High (SIP, API)    Very High (dev None
  Required        go-live)                                            needed)        

  Trained on      Yes (Hair,    Partial            No                 No             No
  Indian          Dental, IVF,                                                       
  Specialty       Derm)                                                              

  Speaks Hinglish Yes (native)  Partial            No                 English only   Yes (human)

  WhatsApp Native Yes (4-step   No                 No                 No             Manual only
                  sequence)                                                          

  DPDP Act        Yes (data     Unknown            No (US servers)    No (US         Yes
  Compliant       residency IN)                                       servers)       

  Outcome         15            None               None               None           None
  Guarantee       bookings/30                                                        
                  days or free                                                       

  Response After  8 seconds     30--90 seconds     Manual trigger     Manual trigger Next business day
  Miss                                                                               

  Dashboard Shows Yes           No                 No (jargon)        No (API logs)  No
  Rupees                                                                             
  -----------------------------------------------------------------------------------------------------

**5.5 FAQ (/faq)**

**Questions & Answers**

-   Q: Is using AI for medical calls legal in India? --- A: Yes. Engageo
    operates as an appointment scheduling assistant, not a medical
    advice system. It does not diagnose, prescribe, or advise on
    clinical matters. Under India\'s IT Act and DPDP Act 2023, this
    constitutes lawful automated processing with patient consent
    obtained during the call.

-   Q: What if the patient figures out it\'s AI? --- A: In 200+ test
    calls, fewer than 3% of patients asked whether they were speaking to
    a human. The agent is trained to acknowledge it is \'an automated
    assistant from Dr. \[Name\]\'s clinic\' if asked directly. Most
    patients are too relieved to have their call answered to question
    the mechanism.

-   Q: Does it integrate with HMS or Practo? --- A: Engageo books
    directly to Google Calendar, which most specialist clinics already
    use. Native HMS (Practo, Healthplix, eHospital) integration is on
    the Q3 2026 roadmap. For clinics using HMS-only scheduling, a custom
    webhook can be built in Week 2 of onboarding.

-   Q: What if the AI can\'t answer a patient\'s question? --- A: The
    agent is trained to say: \'Main aapko doctor sahab ke saath connect
    karta hoon, ya aap appointment book karein aur woh directly aapko
    call karenge.\' It does not attempt to answer clinical questions. It
    transfers intent to booking.

-   Q: How long to go live? --- A: 4 business days from payment receipt.
    Day 1: onboarding call + MSG91 virtual number setup. Day 2: Vapi
    agent trained on clinic specifics. Day 3: Google Calendar OAuth +
    WATI templates approved. Day 4: end-to-end test with live calls. Day
    5: go-live.

-   Q: What happens if 15 bookings are not delivered in 30 days? --- A:
    We continue at no charge until the guarantee is met. No refund is
    issued --- the guarantee is continued service, not a money-back
    clause. This protects both parties.

**5.6 Audit Page (/audit)**

**Purpose**

The highest-intent conversion page. Minimal friction. No navbar links
except logo. No footer. The only goal is form submission.

**Form Fields**

-   Full Name (text)

-   Clinic Name (text)

-   City (text)

-   Specialty (dropdown: Hair Transplant / Dental Implants / Dermatology
    / IVF / Other)

-   WhatsApp Number (tel, Indian format)

-   Submit button: \'Send My Free Audit →\'

**Trust Signals Above Form**

-   No credit card required

-   Response within 24 hours

-   Zero commitment --- free audit, no obligation

**On Submit**

Form data posted to n8n webhook → structured WhatsApp message sent to
917696382250 with all fields. Confirmation screen shown to user: \'We
have received your audit request. We will WhatsApp you within 24 hours
with your clinic\'s revenue leakage analysis.\'

**6. Technical Requirements**

**6.1 n8n Workflow A --- Missed Call to Vapi Outbound Call**

  ------------------------------------------------------------------------------
  **Node**      **Type**    **Configuration**                 **Output**
  ------------- ----------- --------------------------------- ------------------
  1\. Webhook   Webhook     POST /missed-call. Accept JSON    Triggers workflow
  Receiver                  from MSG91: caller_number,        
                            clinic_id, timestamp.             

  2\. Data      IF node     Check caller_number is valid      Routes to call or
  Validator                 10-digit Indian mobile. Check     error log
                            clinic_id exists in clinic        
                            config.                           

  3\. Clinic    Function    Fetch clinic data from config:    Passes enriched
  Config Lookup             doctor name, specialty, calendar  data
                            ID, Vapi assistant ID, WATI       
                            template ID.                      

  4\. Duplicate Function    Check if same number called       Boolean: proceed
  Call Check                within last 2 hours. If yes, skip or skip
                            (prevent spam calls).             

  5\. Vapi      HTTP        POST                              Call SID returned
  Outbound      Request     https://api.vapi.ai/call/phone.   
  Trigger                   Body: assistant_id,               
                            customer.number, metadata         
                            {clinic_id, caller_number,        
                            timestamp}.                       

  6\. Log to    Function    Write call attempt to             Record created
  Database                  PostgreSQL/Airtable: number,      
                            clinic_id, status=INITIATED,      
                            timestamp.                        

  7\. Error     Error       On any failure: log error + send  Alert sent
  Handler       Trigger     WhatsApp alert to founder number. 
  ------------------------------------------------------------------------------

**6.2 n8n Workflow B --- Call End to Calendar + WhatsApp**

  -------------------------------------------------------------------------------
  **Node**       **Type**   **Configuration**                **Output**
  -------------- ---------- -------------------------------- --------------------
  1\. Vapi       Webhook    POST /call-ended. Accept Vapi    Triggers workflow
  Webhook                   end-of-call summary: call_id,    
  Receiver                  outcome, patient_name,           
                            specialty, slot_datetime,        
                            clinic_id.                       

  2\. Outcome    Switch     If outcome = BOOKED → continue.  Routes by outcome
  Router                    If NO_ANSWER → log. If DECLINED  
                            → log. If FAILED → alert.        

  3\. Google     Google     OAuth with clinic Google         Event ID returned
  Calendar Event Calendar   account. Create event: title =   
  Creator                   Patient Name + Specialty,        
                            datetime = slot_datetime,        
                            attendees = patient email (if    
                            captured), description = AI      
                            qualification notes.             

  4\. WATI       HTTP       POST WATI API:                   WhatsApp message
  Template 1     Request    template=BOOKING_CONFIRMATION,   sent
  Sender                    to=patient_number, params        
                            {doctor_name, slot_datetime,     
                            clinic_address}.                 

  5\. Schedule   Schedule   Set trigger for slot_datetime    Scheduled node
  T-24hr Message            minus 24 hours. Fires WATI       created
                            Template 2:                      
                            APPOINTMENT_REMINDER.            

  6\. Schedule   Schedule   Set trigger for slot_datetime    Scheduled node
  T-2hr Message             minus 2 hours. Fires WATI        created
                            Template 3: DIRECTIONS_AND_PREP. 

  7\. Staff      HTTP       Send WATI to clinic WhatsApp:    Notification sent
  Notification   Request    \'New booking recovered:         
                            \[Name\], \[Specialty\],         
                            \[Slot\], Est. value ₹\[X\]\'    

  8\. Dashboard  HTTP       POST to internal dashboard API:  Dashboard updated
  Update         Request    booking record with all fields + 
                            recovery source = AI_CALLBACK.   

  9\. No-Show    Schedule   30 minutes after appointment     Conditional trigger
  Check                     time: check if patient arrived   
                            (manual flag or HMS). If         
                            no-show, fire Template 4:        
                            RESCHEDULE_OFFER.                
  -------------------------------------------------------------------------------

**6.3 Vapi Assistant Configuration**

**Voice Settings**

-   Provider: ElevenLabs (preferred) or Azure Neural TTS

-   Language: hi-IN (Hindi) with English code-switching (Hinglish mode)

-   Voice: Female, warm, mid-30s, professional. Voice ID to be tested
    and fixed per clinic.

-   Speed: 0.95x (slightly slower than default for clarity)

-   Silence timeout: 8 seconds. Max call duration: 5 minutes.

**System Prompt Structure**

  -----------------------------------------------------------------------
  You are an assistant from Dr. \[DOCTOR_NAME\]\'s clinic in \[CITY\]. A
  patient just called and no one was available. Your job is to: (1) greet
  warmly in Hinglish, (2) ask what they are calling about, (3) determine
  their interest in \[SPECIALTY\], (4) gauge urgency and rough budget
  intent, (5) offer 2--3 available appointment slots from the list
  provided, (6) confirm their selected slot, (7) thank them and end the
  call. You must never give medical advice. If asked a clinical question,
  say \'Doctor aapko appointment par is baare mein poori jankari denge.\'
  If the patient does not want to book, thank them and end politely.
  Never repeat the same question twice. Always speak in Hinglish unless
  the patient speaks only English or only Hindi.

  -----------------------------------------------------------------------

**End-of-Call Webhook**

-   URL: POST to n8n Workflow B webhook URL

-   Payload: call_id, outcome (BOOKED/DECLINED/NO_ANSWER/FAILED),
    transcript, patient_name (extracted), slot_datetime (extracted),
    specialty (extracted), confidence_score

**6.4 MSG91 Configuration**

-   Product required: MSG91 Virtual DID (Domestic Indian number)

-   Webhook event: missed_call (ring without answer after N seconds,
    configurable 20--30 seconds)

-   Webhook payload: {caller_number, virtual_did, timestamp,
    missed_call_id}

-   POST to: n8n Workflow A webhook URL

-   Retry: 3 attempts, 5-second intervals, on webhook failure

-   DPDP compliance: caller data stored on Indian servers only.
    Retention policy: 90 days, then auto-delete.

**6.5 WATI WhatsApp Template Requirements**

  -----------------------------------------------------------------------------------------
  **Template**   **Name**               **Category**   **Variables**        **Approval
                                                                            Required**
  -------------- ---------------------- -------------- -------------------- ---------------
  Template 1     BOOKING_CONFIRMATION   UTILITY        {{doctor_name}},     Yes --- BSP +
                                                       {{date}}, {{time}},  Meta
                                                       {{clinic_address}}   

  Template 2     APPOINTMENT_REMINDER   UTILITY        {{patient_name}},    Yes --- BSP +
                                                       {{doctor_name}},     Meta
                                                       {{time}}             

  Template 3     DIRECTIONS_AND_PREP    UTILITY        {{clinic_name}},     Yes --- BSP +
                                                       {{maps_link}},       Meta
                                                       {{what_to_bring}}    

  Template 4     RESCHEDULE_OFFER       UTILITY        {{patient_name}},    Yes --- BSP +
                                                       {{slot_1}},          Meta
                                                       {{slot_2}},          
                                                       {{slot_3}}           
  -----------------------------------------------------------------------------------------

All templates must be submitted to WATI (BSP) 5--7 business days before
go-live. Templates in UTILITY category have the highest approval rate
for medical contexts. MARKETING templates are not to be used for
appointment flows.

**6.6 Google Calendar OAuth Requirements**

-   Scope required: https://www.googleapis.com/auth/calendar

-   Auth flow: OAuth 2.0, server-side. Refresh token stored in n8n
    credential store.

-   Calendar read: check free/busy for slot availability before offering
    to patient

-   Calendar write: create appointment event with patient details

-   Error handling: if calendar is unavailable, Vapi agent offers to
    have the clinic call back within 1 hour

**6.7 Razorpay Payment Setup**

-   Product: Razorpay Payment Links (recurring, not subscription, for
    maximum flexibility)

-   Invoice sent: on the 25th of each month for the following month

-   Payment due: 1st of month. Service suspended on the 5th if unpaid.

-   Minimum commitment enforced via contract, not Razorpay --- no
    automated subscription lock-in

-   GST: 18% added. GST invoice issued monthly. Client\'s GSTIN to be
    captured at onboarding.

**6.8 Pre-Launch Test Protocol (10 Required Tests)**

  -------------------------------------------------------------------------------
  **Test   **Test Name**    **Pass Criteria**                   **Responsible**
  \#**                                                          
  -------- ---------------- ----------------------------------- -----------------
  T-01     Missed Call      MSG91 fires webhook within 5        Tech lead
           Detection        seconds of call ring-out            

  T-02     Vapi Outbound    Vapi initiates outbound call within Tech lead
           Trigger          8 seconds of webhook                

  T-03     Hinglish Voice   3 internal reviewers rate call as   Founder
           Quality          \'natural\' on 5-point scale (min   
                            4.0)                                

  T-04     Slot             Agent correctly reads next 3        Tech lead
           Availability     available slots from test calendar  
           Read                                                 

  T-05     Booking Creation Google Calendar event created with  Tech lead
                            correct patient name, time, and     
                            notes                               

  T-06     WhatsApp         Template 1 delivered to patient     Tech lead
           Confirmation     within 30 seconds of call end       

  T-07     T-24hr Reminder  Template 2 fires at correct time    Tech lead
                            (slot minus 24 hours, within 5-min  
                            window)                             

  T-08     Staff            Receptionist WhatsApp notification  Ops
           Notification     received within 60 seconds of       
                            booking                             

  T-09     Duplicate Call   Same number calling twice within 2  Tech lead
           Prevention       hours does not trigger second AI    
                            call                                

  T-10     Dashboard        Recovered booking appears in        Tech lead
           Display          dashboard with correct patient,     
                            time, value, and source             
  -------------------------------------------------------------------------------

**7. Pricing & Packaging**

**7.1 Tier 1 --- RECOVER**

  -----------------------------------------------------------------------
  **Item**              **Detail**
  --------------------- -------------------------------------------------
  Monthly Price         ₹25,000 + 18% GST = ₹29,500 invoiced

  Minimum Commitment    3 months (₹75,000 + GST total minimum)

  Infrastructure        ₹10,000--₹12,000 (MSG91 + Vapi + WATI + n8n
  Cost/month            server)

  Gross Margin          52--60%

  Revenue/client/year   ₹3,00,000
  (if retained)         

  What\'s Included      Missed call interception, AI voice callback,
                        Google Calendar booking, 4-step WhatsApp
                        sequence, weekly revenue report, receptionist
                        dashboard, staff WhatsApp notifications

  What\'s NOT Included  Ad management, content, website work, strategy
                        calls

  Guarantee             15 confirmed bookings in first 30 days or service
                        continues free
  -----------------------------------------------------------------------

**7.2 Tier 2 --- GROW**

  -----------------------------------------------------------------------
  **Item**              **Detail**
  --------------------- -------------------------------------------------
  Monthly Price         ₹55,000 + ad spend at cost + 18% GST

  Minimum Commitment    6 months

  Infrastructure        ₹12,000--₹15,000
  Cost/month            

  Gross Margin          60--70% (on retainer portion; ad spend zero
                        margin)

  Revenue/client/year   ₹6,60,000
  (retainer only)       

  What\'s Added vs Tier Meta & Google Ads management, GMB optimisation,
  1                     landing page build, full WhatsApp nurture funnel,
                        weekly ROI report with ad performance

  Ad Spend Policy       Passed through at exact cost. No markup. Client
                        transfers ad budget to Engageo escrow account
                        monthly. Invoiced separately with receipts.

  Guarantee             15 confirmed bookings in first 30 days or service
                        continues free
  -----------------------------------------------------------------------

**7.3 Tier 3 --- DOMINATE**

  -----------------------------------------------------------------------
  **Item**              **Detail**
  --------------------- -------------------------------------------------
  Monthly Price         ₹1,20,000 + ad spend at cost + 18% GST

  Minimum Commitment    6 months (by application only)

  Infrastructure        ₹15,000--₹20,000
  Cost/month            

  Gross Margin          83--87% (on retainer; ad spend zero margin)

  Revenue/client/year   ₹14,40,000
  (retainer only)       

  What\'s Added vs Tier YouTube and Instagram content strategy, video
  2                     scripting for doctor personal brand, SEO blog
                        content 2 posts/month, full website build,
                        monthly 1:1 strategy session with Engageo founder

  Application Process   Founder interview required. Must have minimum
                        6-month track record in specialty. Must be
                        committed to content output (doctor camera time
                        2hrs/month minimum).

  Guarantee             15 confirmed bookings in first 30 days or service
                        continues free
  -----------------------------------------------------------------------

**7.4 Unit Economics Summary**

  ------------------------------------------------------------------------------
  **Metric**            **Tier 1**       **Tier 2**        **Tier 3**
  --------------------- ---------------- ----------------- ---------------------
  MRR per client        ₹25,000          ₹55,000           ₹1,20,000

  OpEx per client       ₹11,000          ₹13,500           ₹17,500

  Gross                 ₹14,000          ₹41,500           ₹1,02,500
  Profit/client/month                                      

  Gross Margin %        56%              75%               85%

  Break-even clients    14--15           5--6              2--3
  (overhead ₹2L/month)                                     

  LTV at 12-month       ₹3,00,000        ₹6,60,000         ₹14,40,000
  retention                                                

  CAC target            ₹5,000--₹8,000   ₹8,000--₹12,000   Founder-closed only
  ------------------------------------------------------------------------------

**8. Go-To-Market**

**8.1 Target Sequence**

  ---------------------------------------------------------------------------
  **Month**   **Primary Niche**  **Rationale**                 **Target
                                                               Clients**
  ----------- ------------------ ----------------------------- --------------
  Month 1     Hair Transplant    Fastest close (3--5 days).    4--5 clients
              Clinics            Owner is sole decision-maker. 
                                 Highest case value (₹80K+).   
                                 Easiest to demonstrate ROI.   
                                 Concentrated in Delhi NCR and 
                                 Mumbai.                       

  Month 2     Dental Implants +  Slightly longer close (7--14  8--10 clients
              Dermatology        days). Require 1--2 case      total
                                 studies from Month 1. Strong  
                                 call volumes. Similar solo    
                                 owner dynamics.               

  Month 3+    IVF / Fertility    Longest close. Requires case  3--5 IVF
              Clinics            studies. Higher sensitivity   clients
                                 around patient privacy.       
                                 Significant revenue           
                                 opportunity once trust        
                                 established.                  
  ---------------------------------------------------------------------------

**8.2 Sales Motion**

**Cold Outreach Script (WhatsApp)**

  -----------------------------------------------------------------------
  \"Namaste Dr. \[Name\], main \[Founder\] bol raha hoon Engageo se.
  Aapke clinic ke missed calls ke baare mein baat karni thi --- abhi aap
  roughly \[X\]% calls miss kar rahe hain peak hours mein, aur har call
  approximate ₹\[Y\] ki value hai. Humne ek free audit banaya hai jo
  exactly batata hai kitna revenue ja raha hai. 5 minute denge?\"

  -----------------------------------------------------------------------

**12-Minute Discovery Call Structure**

  -----------------------------------------------------------------------------
  **Time**       **Section**     **What to Cover**
  -------------- --------------- ----------------------------------------------
  0:00--2:00     Context Setting Ask: how many calls/month? How many missed?
                                 What does receptionist do when busy? What\'s
                                 average case value?

  2:00--4:00     Pain            Calculate: \[missed calls\] x \[case value\] =
                 Amplification   monthly revenue leak. Show the number. Let
                                 silence sit.

  4:00--7:00     Solution Demo   Walk through the 5-step flow. Emphasize:
                                 8-second callback, Hinglish agent, Google
                                 Calendar, WhatsApp confirmation. No tech setup
                                 needed from them.

  7:00--9:00     Proof           Share 1--2 case study numbers: \'Dr. \[Name\]
                                 recovered ₹\[X\] in first 30 days.\' If no
                                 case studies yet: \'We guarantee 15 bookings
                                 in 30 days or we continue for free.\'

  9:00--11:00    Pricing         Present Tier 1 as default. Anchor with: \'Your
                                 monthly revenue leak is ₹\[X\]. Our fee is
                                 ₹25,000. Even recovering 1 patient covers 3
                                 months of our fee.\'

  11:00--12:00   Close           Ask: \'Kya aap chahenge ki hum aapka free
                                 audit complete karein aur setup ki date fix
                                 karein?\' Silence after the question.
  -----------------------------------------------------------------------------

**Top 5 Objections & Responses**

-   Objection: \'We already have a receptionist.\' Response: \'Aapki
    receptionist valuable hai --- for patients at the counter, for
    insurance queries, for doctor coordination. Engageo handles the
    calls she physically cannot answer during consultations. It\'s not a
    replacement, it\'s a backup that never sleeps.\'

-   Objection: \'What if patients don\'t like talking to AI?\' Response:
    \'In our testing, fewer than 3% of patients asked if they were
    speaking to a human. Most are relieved someone called back. The
    agent is warm, speaks Hinglish, and books the appointment in under 3
    minutes.\'

-   Objection: \'We\'ll try it next month.\' Response: \'Doctor sahab,
    aap har din approximately ₹\[X\] miss kar rahe hain. Next month ka
    matlab hai another ₹\[Y\] gone. Setup is 4 days. We can go live this
    week.\'

-   Objection: \'₹25,000 is expensive.\' Response: \'Let me flip that.
    You\'re spending ₹50,000 on ads to generate calls, and losing ₹\[X\]
    because 25% of those calls go unanswered. Engageo costs ₹25,000 and
    the guarantee is 15 bookings in 30 days. If we don\'t deliver, we
    work for free. What\'s the risk?\'

-   Objection: \'Can I see it working first?\' Response: \'Bilkul. I
    will call you from our AI agent right after this call --- you\'ll
    experience it exactly as your patients would. That\'s your demo.\'

**8.3 Referral Engine (Activate Week 3)**

-   Trigger: Client has received first 5 recovered bookings (typically
    Day 8--12)

-   Mechanic: WhatsApp message to client: \'Doctor sahab, aapne apne
    practice mein ek acha result dekha. Koi colleague hai jo same
    problem face kar raha hai? Har successful referral ke liye aapko
    ₹5,000 credit milega on next month\'s invoice.\'

-   Referral credit: ₹5,000 off next month\'s invoice per converting
    referral. No cash payout.

-   Target referral velocity: 1 referral per 5 clients by Month 2, 1 per
    3 clients by Month 4

**8.4 60-Day Sprint Timeline**

  -----------------------------------------------------------------------------
  **Week**   **Focus**      **Key Actions**                 **KPI Target**
  ---------- -------------- ------------------------------- -------------------
  Week 1     Pipeline Build 50 WhatsApp cold messages/day.  10 discovery calls,
                            10 discovery calls booked.      2 proposals sent

  Week 2     First Closes   Close first 2--3 clients.       2 clients signed,
                            Complete go-live for each in 4  ₹50,000 MRR
                            days. Run first live AI         
                            callback test.                  

  Week 3     Operations +   Deliver first 5 bookings to     5 bookings
             Referral       each client. Activate referral  delivered, 1
                            ask. Start Case Study 1.        referral ask

  Week 4     Month-End Push Close 2 more clients. Send      4 total clients,
                            first weekly revenue report to  ₹1,00,000 MRR
                            existing clients.               

  Week 5     Scale Cold     Increase Meta ad budget from    20+ leads from
             Outreach       ₹500/day to ₹1,000/day. A/B     Meta, 3 discovery
                            test ad copy.                   calls/day

  Week 6     Case Study +   Publish Case Study 1 (with      1 published case
             PR             client permission). Pitch to    study, 2
                            dental/derm associations.       association intros

  Week 7     Referral       Follow up on all referrals from 1 referral close, 1
             Conversions    Week 3. Introduce Tier 2 upsell Tier 1→2 upgrade
                            to Month-1 clients.             

  Week 8     Month 2 Target Close Month 2 clients. Hire 1   8+ clients, ₹2.5L+
                            part-time client success        MRR
                            executive.                      
  -----------------------------------------------------------------------------

**9. Success Metrics**

  -----------------------------------------------------------------------------------
  **Milestone**   **Metric**          **Target**              **Definition of
                                                              Success**
  --------------- ------------------- ----------------------- -----------------------
  Week 1          Discovery calls     10                      10 clinic owners on
  (Pipeline)      booked                                      12-minute calls

  Week 1          Proposals sent      3                       Written or verbal Tier
  (Pipeline)                                                  1 offer presented

  Week 1          Pipeline value      ₹75,000 MRR potential   Sum of MRR for leads in
  (Pipeline)                                                  active close

  Month 1         Clients signed      5                       Paid, onboarded, live
  (Revenue)                                                   on Engageo

  Month 1         MRR                 ₹1,25,000--₹1,50,000    Confirmed retainer
  (Revenue)                                                   payments received

  Month 1         Bookings delivered  75+                     15 per client x 5
  (Revenue)                                                   clients

  Month 1         Go-live success     100%                    All signed clients live
  (Revenue)       rate                                        within 4 days

  Month 3         Churn rate          0%                      Zero clients cancelled
  (Retention)                                                 after Month 1

  Month 3         Referrals received  3+                      Active referrals from
  (Retention)                                                 existing clients

  Month 3         NPS score           8+                      Monthly 1-question
  (Retention)                                                 WhatsApp survey

  Month 3         Tier upgrades       2                       2 clients moved from
  (Retention)                                                 Tier 1 to Tier 2

  Month 6 (Scale) Total clients       25--35                  Active, paying clients
                                                              across all tiers

  Month 6 (Scale) MRR                 ₹8,00,000--₹12,00,000   Blended across all
                                                              tiers

  Month 6 (Scale) Gross margin        60%+                    After all
                                                              infrastructure and team
                                                              costs

  Month 6 (Scale) CAC payback period  Under 45 days           Revenue recovered
                                                              within 1.5 months of
                                                              acquisition cost
  -----------------------------------------------------------------------------------

**10. Risks & Mitigations**

  ----------------------------------------------------------------------------------------------------------
  **Risk   **Category**   **Risk**               **Probability**   **Impact**   **Mitigation**
  \#**                                                                          
  -------- -------------- ---------------------- ----------------- ------------ ----------------------------
  R-01     Regulatory     DPDP Act enforcement   Medium            High         Include consent language in
                          on AI calling without                                 call opening: \'Aapne humari
                          explicit prior consent                                clinic mein call kiya tha
                          from the called party.                                --- main aapki appointment
                                                                                ke baare mein baat karna
                                                                                chahta tha. Kya yeh theek
                                                                                hai?\' Patient\'s verbal
                                                                                \'haan\' constitutes consent
                                                                                for the interaction. All
                                                                                calls recorded and stored
                                                                                for 90 days on Indian
                                                                                servers. Legal opinion to be
                                                                                obtained before Month 2 IVF
                                                                                launch.

  R-02     Technical      MSG91 missed call      Low-Medium        High         Dual redundancy: configure
                          webhook fails or has                                  secondary webhook endpoint.
                          latency above 10                                      Monitor webhook delivery
                          seconds.                                              rate daily. SLA with MSG91
                                                                                for \<5 second delivery.
                                                                                Fallback: 30-second retry
                                                                                mechanism in n8n.

  R-03     Technical      Vapi voice quality     Medium            Medium       Test with network throttling
                          degrades in poor                                      before go-live. Add
                          network conditions                                    fallback: if call quality
                          (patient on 2G/edge).                                 below threshold, Vapi sends
                                                                                SMS to patient: \'Hum aapko
                                                                                WhatsApp par details bhej
                                                                                rahe hain.\' Minimize call
                                                                                dependency.

  R-04     Sales          Decision-makers are    High (Month 1)    Medium       Close first 2 clients at a
                          interested but not                                    reduced rate (₹15,000/month
                          closing due to trust                                  for 30 days) in exchange for
                          gap (no case studies                                  a detailed case study and
                          Month 1).                                             testimonial. Use the
                                                                                15-booking guarantee as the
                                                                                primary trust mechanism.
                                                                                Founder does all demos
                                                                                personally in Month 1.

  R-05     Operational    A client receives a    Low-Medium        High         System prompt strictly
                          very bad AI call                                      prevents medical advice. All
                          (agent gives wrong                                    calls are recorded. Founder
                          information, offends                                  reviews first 10 calls per
                          patient).                                             client. Weekly call quality
                                                                                audit (10% random sample).
                                                                                Client contract includes
                                                                                clause that Engageo is a
                                                                                scheduling tool, not a
                                                                                medical advisor.

  R-06     Competitive    Ringg AI or a          Medium (6-month   Medium       Accelerate niche depth ---
                          well-funded competitor horizon)                       build specialty-specific
                          replicates the                                        qualification trees, Hindi
                          missed-call-specific                                  dialect options (Bhojpuri,
                          WhatsApp-integrated                                   Marathi, Tamil). Build
                          feature set.                                          network effect via referral
                                                                                program. File provisional
                                                                                patent on the specific
                                                                                missed-call → AI callback →
                                                                                WhatsApp sequence (Indian
                                                                                application).

  R-07     Financial      Month 1 closes only 2  Medium            High         Founders on minimal salary
                          clients (₹50,000 MRR)                                 (₹25,000/month each) in
                          against ₹2L monthly                                   Month 1. Infrastructure only
                          burn (salaries +                                      spun up per active client
                          infra + ads).                                         (no idle OpEx).
                                                                                Pre-negotiate a ₹15L angel
                                                                                bridge round to be raised if
                                                                                Month 2 MRR is below ₹1L. Ad
                                                                                spend paused if \<3
                                                                                discovery calls/day from
                                                                                Meta.
  ----------------------------------------------------------------------------------------------------------

**11. Open Questions**

The following items require a decision before or during Month 1 launch.
Owner assigned to each.

  -----------------------------------------------------------------------------
  **\#**   **Question**                     **Decision     **Owner**
                                            Needed By**    
  -------- -------------------------------- -------------- --------------------
  OQ-01    What is the exact consent        Week 1         Founder + Legal
           language to be used at the start                Advisor
           of every Vapi call? Needs legal                 
           review for DPDP compliance.                     

  OQ-02    Will Engageo use a shared Vapi   Week 1         Tech Co-Founder
           assistant per specialty, or a                   
           fully custom assistant per                      
           clinic? Custom = better quality,                
           shared = faster go-live. Affects                
           pricing of infrastructure.                      

  OQ-03    What is the refund policy if the Week 2         Founders
           15-booking guarantee is not met                 
           within 60 days (extended                        
           period)? Current policy: service                
           continues for free. Is there a                  
           maximum extension cap?                          

  OQ-04    Which Google Calendar access     Week 1         Tech Co-Founder
           model is used: clinic shares                    
           calendar with Engageo service                   
           account (simpler), or OAuth                     
           token per clinic (more secure)?                 
           Security vs. implementation                     
           speed trade-off.                                

  OQ-05    Should the dashboard be built as Week 2         Tech Co-Founder
           a web app (React), a shared                     
           Airtable/Notion view, or a                      
           WhatsApp-native daily report?                   
           Affects build time and perceived                
           quality.                                        

  OQ-06    What happens when a clinic owner Week 2         Ops + Tech
           or receptionist is on leave and                 
           the AI books a slot that the                    
           doctor is actually unavailable                  
           for (calendar not updated)? Need                
           a conflict resolution protocol.                 

  OQ-07    Is the ₹500/day Meta ad spend    Week 1         Founder
           sufficient for 3+ quality                       
           discovery calls per day in                      
           Delhi/Mumbai? Or should it                      
           increase to ₹1,000/day from Week                
           1? Need data from first 7 days.                 

  OQ-08    What is the patient data         Before go-live Legal Advisor
           retention policy communicated to                
           clinic clients? DPDP requires                   
           explicit disclosure. Draft                      
           privacy policy to be prepared.                  

  OQ-09    Should Engageo incorporate as a  Month 1        CA / Founders
           private limited company or start                
           as LLP? Affects investor                        
           readiness, GST structure, and                   
           future fundraising.                             

  OQ-10    Is there a conflict of interest  Before second  Founders
           if Engageo serves two competing  close in same  
           hair transplant clinics in the   city           
           same city (e.g., two clinics in                 
           Connaught Place, Delhi)?                        
           Exclusivity clause to be                        
           defined.                                        
## Task 16: 21st.dev Design Component Integration
Before building each UI section, visit https://21st.dev and find a 
matching animation or component for that section. Copy its prompt, 
paste it into Antigravity, and implement the output into the page.

Target components to source from 21st.dev:
- Hero section: cinematic text reveal or particle/mesh animation
- Features section: animated data rows or scroll-triggered counters
- How It Works timeline: step reveal animation on scroll
- Revenue Calculator: animated number counter for output values
- Pricing cards: hover state animations and tier highlight effects
- Audit form: smooth focus states and confirmation checkmark animation

Rules:
- Always pick dark-mode compatible components only
- Component must match --command-black or --clinic-white backgrounds
- No components that use phone mockups or chat bubble UI patterns
- Prefer motion that feels operational/data-driven over decorative






## Task 17: CodeRabbit + GitHub CI Integration
Set up CodeRabbit to automatically review every push and surface 
bugs, clicking issues, and code quality problems before they reach 
main.

- Create `.github/workflows/pr-check.yml`:
  - Trigger on every push to any branch and every pull request into main
  - Run `npm run build` to catch build errors before review
  - Run `npm run lint` to catch code style issues
  - Run `npm test` if tests exist

- Create `.coderabbit.yaml` in project root:
  - Set review profile to "assertive"
  - Enable path-based review filters: focus on src/** and components/**
  - Enable auto-summary on every PR
  - Enable sequence diagram generation for complex components
  - Set language to English

- Workflow rule: Ralph Loop must work in branches, never commit 
  directly to main. Every completed task = one branch + one PR.
  Branch naming: feature/task-{N}-{short-description}

- On every PR:
  - CodeRabbit reviews automatically within minutes
  - Fix all CodeRabbit blocking comments before merging
  - Merge only after CodeRabbit gives approval or no blocking issues

- Add `.github/pull_request_template.md`:
  - Checklist: build passes, lint passes, no console errors, 
    mobile tested, dark mode tested, CTA links correct



## Task 18: CodeRabbit Active Debugging
CodeRabbit is already installed and active on this repository.
Use it as the primary debugging layer for all code issues.

- After every PR is opened, wait for CodeRabbit's automated review 
  comment to appear before doing anything else
- Read every CodeRabbit inline comment and action all blocking issues
  in the same branch before merging
- If CodeRabbit flags a bug, clicking issue, layout break, or logic 
  error — fix it in the same branch, push the fix, and wait for 
  CodeRabbit to re-review
- Never merge a PR that has unresolved CodeRabbit blocking comments
- If CodeRabbit suggests a refactor that improves reliability — apply it
- After merge, check if CodeRabbit flags anything in the next iteration
  and carry forward any unresolved suggestions as the first fix in the
  next task's branch

## Task 19: Restore Homepage Three-Card Design + Complete Task 16
The three-card section on the homepage was lost. Restore it exactly 
as it was and complete the 21st.dev animation integration that was 
missed in Task 16.

- Restore the three-card section on the homepage:
  - Check git history for the last commit where the cards existed
  - Run `git log --oneline` to find the commit
  - Recover the exact card component and re-insert it in the correct 
    position on the homepage
  - Cards must match the original design — do not redesign them

- Complete Task 16 properly this time:
  - Go to https://21st.dev
  - Find an animation component for each section listed in Task 16
  - Copy the prompt, paste into Antigravity, implement the output
  - Verify every animation works on dark background before accepting

- After restoring and animating, do a full homepage visual QA:
  - All sections present and in correct order
  - No sections missing or collapsed
  - All CTAs link to correct pages
  - Dark mode renders correctly throughout
  - No layout breaks on mobile


### Task 20 Addendum: Three Cards — Exact Specification
The three cards to restore on the homepage are defined as follows.
Build these exactly. Do not simplify or redesign.

**Card 1 — 4-Day Launch Tracker**
Vertical timeline, animates sequentially with 0.8s stagger between steps:
- Day 1: Onboarding call + AI training ✓ green
- Day 2: IVR + WhatsApp flow setup ✓ green
- Day 3: Test calls + clinic QA ⟳ pulsing
- Day 4: GO LIVE — first calls recovered 🟢 accent flash on loop
Use framer-motion variants + staggerChildren

**Card 2 — Live Recovery Feed**
Monospace typewriter feed, character-by-character using useState + 
useEffect interval only, no external typewriter library:
- Shows: CALL RECEIVED → Patient name → MISSED → RECOVERED → 
  WhatsApp sent timestamp → Booking confirmed timestamp → 
  Revenue recovered ₹XX,XXX
- Pulsing accent dot + "Live Feed" label top-left
- Blinking cursor at end of last line
- Loops continuously

**Card 3 — Guarantee Shield**
Animated SVG radial progress ring triggered on scroll-enter:
- Ring fills 0% to 100% via stroke-dashoffset + framer-motion useInView
- Center text: "30 Days"
- Sub text: "Money-Back Guarantee"
- Below ring: three rows with icons —
  10 booking minimum ✓ (increments 1→10 on enter)
  If not hit: full refund — Shield icon
  No questions asked — Lock icon

All three cards:
- rounded-3xl, subtle border, drop shadow shadow-xl
- Heading font-display weight 700
- Descriptor Inter 400 text-sm muted
- whileHover={{ y: -4 }} lift on all cards
- Dark background matching --command-black

## Task 20: Full Bug Fix Pass — Do Not Stop Until All Are Fixed
Fix every issue below. After each fix, take a screenshot to verify.
Do not move to the next fix until the current one is confirmed working.
Do not terminate this task until every single item below is checked off.

Navbar:
- Remove the green dot/icon beside the Engageo logo in the top-left
- Clicking the logo must navigate to the homepage — fix the broken link
- Navbar background must stay --command-black on ALL pages, never turns white
- Test navbar on every page: /, /how-it-works, /pricing, /compare, /faq, /audit

Buttons:
- "Get Free Audit" on homepage — must open the audit form or scroll to it
- "Get Free Audit" on /how-it-works — must work, same behaviour as homepage
- "View Pricing" button wherever it appears — must navigate to /pricing
- "Test our AI" — remove it from every page it appears on
- Replace with a Calendly link button labelled "Book a Live Demo" pointing 
  to https://calendly.com (placeholder until real link provided)

Sections:
- FAQ section — text is invisible, fix contrast so all answers are readable
- "From Missed Call to Confirmed Booking in Under 4 Minutes" scroll animation 
  — currently blurs and breaks, fix or replace with a stable animation
- Remove the pricing section from the homepage entirely
- Restore the three-card section on the homepage in its place:
  - Left card: missed call being initiated
  - Middle card: CPU/RAM live stats animation
  - Right card: calendar with animated mouse clicking on a slot
  - These existed in a previous commit — run `git log --oneline` and 
    recover them exactly, do not redesign

Verification (do this for every fix before moving on):
- Take a screenshot of the fixed element
- Scroll the full page and screenshot any remaining breaks
- Test on mobile viewport (375px width)
- Confirm no console errors in browser devtools


## Task 21: 21st.dev Component Integration — Hands-On Process
This task requires opening a browser. Follow these exact steps for 
each component. Do not skip any step.

For each section listed below:
1. Open https://21st.dev in the browser
2. Browse until you find a component that matches the section's purpose
3. Pick only dark-mode compatible components
4. Copy the component's prompt or code
5. Paste it into Antigravity chat and say: 
   "Adapt this for Engageo using --command-black background and 
   --recovery-blue #2563EB as the accent colour"
6. Implement the output into the correct page section
7. Screenshot the result and verify it looks correct before moving on

Sections to source from 21st.dev:
- Hero: cinematic text reveal or animated mesh/particle background
- Features: scroll-triggered animated data rows or counters
- How It Works timeline: step-by-step scroll reveal
- Revenue Calculator: animated number counter on output values
- Three cards (homepage): animated card hover and entry effects
- Audit form: smooth input focus states and success checkmark animation

Rules:
- No phone mockups, no chat bubble UI
- No light backgrounds on dark sections
- If a component breaks on mobile — reject it and find another

## Task 22: CodeRabbit Review Loop — Fix All Flagged Issues
CodeRabbit is active on this repository. Use it as follows:

After every push:
1. Go to the PR on GitHub
2. Wait for CodeRabbit's review comment (appears within 2-3 minutes)
3. Read every inline comment CodeRabbit has left
4. Fix every blocking issue it flags in the same branch
5. Push the fix
6. Wait for CodeRabbit to re-review
7. Only merge when CodeRabbit has no remaining blocking comments

Specifically ask CodeRabbit to check:
- All button onClick handlers are wired correctly
- No broken internal links (href="#" or empty hrefs)
- No hardcoded colours overriding CSS variables
- All animations have a fallback for reduced-motion preferences
- No console errors or unhandled promise rejections
- Mobile layout does not overflow or clip any text

Do not close this task until CodeRabbit gives a clean review 
with zero blocking comments on the final PR.

## Task
