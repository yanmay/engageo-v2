# SPEC.md — Project Specification

> **Status**: `FINALIZED`
>
> ⚠️ **Planning Lock**: No code may be written until this spec is marked `FINALIZED`.

## Vision
Engageo is a fully managed, AI-powered missed call recovery and automated patient booking system built exclusively for high-ticket Indian specialist clinics. It intercepts missed calls, performs sub-8-second Hinglish AI callbacks, qualifies leads, and books appointments directly into Google Calendar with automated WhatsApp follow-ups.

## Goals
1. **Automate Missed Call Recovery** — Intercept and call back missed clinic calls within 8 seconds using AI.
2. **Increase Conversion** — Qualify patients in Hinglish and book slots directly into clinic calendars.
3. **Enhance Patient Retention** — Automate 4-step WhatsApp sequences (Confirmation, Reminder, Pre-visit, No-show recovery).
4. **Reduce Administrative Burden** — Zero manual action required from clinic receptionists for the core booking flow.

## Non-Goals (Out of Scope)
- Patient-facing portal, booking widget, or mobile app.
- AI-generated medical advice, diagnoses, or treatment recommendations.
- Payment collection, deposits, or invoicing via the AI voice agent.
- Direct integration with HMS platforms (Healthplix, eVitalRx, Practo) in v1.
- Native iOS or Android receptionist dashboard application.

## Constraints
- **Specialty Focus** — Optimized for Hair Transplant, Dental Implants, Dermatology, and IVF centers.
- **Geography** — Targeted at Tier 1 and Tier 2 Indian cities.
- **Compliance** — Must comply with India's Digital Personal Data Protection (DPDP) Act.
- **Technology Stack** — Powered by Vapi, MSG91, n8n, Google Calendar, and WATI.

## Success Criteria
- [x] Missed call callback speed: < 8 seconds from disconnect.
- [ ] Booking conversion rate: > 40% of intercepted calls result in a booking.
- [ ] WhatsApp delivery rate: > 98% of confirmation messages delivered.
- [ ] Onboarding to live time: < 4 calendar days from payment received.
- [ ] Guarantee hit rate: 100% of clients hit 15 bookings in 30 days.

## Technical Requirements

| Requirement | Priority | Notes |
|-------------|----------|-------|
| Missed Call Detection | Must-have | MSG91 captures unanswered calls and fires webhooks to n8n. |
| AI Voice Callback | Must-have | Vapi outbound calls within 8s using clinic's caller ID. |
| Hinglish Voice Qual | Must-have | Natural conversation in mixed English/Hindi. |
| Calendar Sync/Write | Must-have | Real-time Google Calendar read/write via n8n. |
| WhatsApp Sequence | Must-have | 4-step automated sequence via WATI. |
| Receptionist Dashboard| Must-have | Web view for intercepted calls and booking status. |
| DPDP Compliance | Must-have | No sensitive medical data storage; compliant with Indian law. |

---

*Last updated: 2026-03-10*
