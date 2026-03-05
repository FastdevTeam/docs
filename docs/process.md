---
layout: page
title: "How to Run the Process"
permalink: /process/
---

# How to Run Requirements Discovery (Plan + Cadence)

## Not one meeting
A common failure mode is treating discovery as a single “requirements meeting”.
Instead, use **timeboxed sessions** where each session has:
- a specific decision goal,
- the right attendees,
- explicit inputs (evidence),
- explicit outputs (artifacts),
- and a short confirmation loop after the session.

## Roles and responsibilities
- **Sales**: leads early discovery, stakeholder alignment, and next steps; ensures the right customer roles are invited.
- **Solutions Architect (SA)**: leads technical feasibility, integrations, constraints, and NFR scenario elicitation.
- **Product/Delivery**: leads workflow modeling, MVP slicing, acceptance criteria framing, and handover to delivery.
- **Security/GRC**: leads security questionnaires and evidence pack management (enterprise customers especially).
- **Customer PO / Sponsor**: decides priorities/scope tradeoffs and confirms outcomes.
- **Power users / SMEs**: validate workflows, exceptions, and usability needs.
- **Customer IT / Ops**: validate integrations, environments, operational needs, and NFRs.

## A practical cadence (default)
### Compressed (≈2 weeks, low complexity)
1. Intake (async) → Sales discovery
2. Workflow workshop
3. Technical deep dive + mini NFR scenarios
4. Light security intake (if needed)
5. Handover packet + backlog v1

### Ideal (≈6–8 weeks, enterprise / integration-heavy)
- Run **security/procurement in parallel** with workflow + technical tracks.
- Use a **PoV** to validate highest-risk assumptions before committing to full build.

## Confirmation loop after every session (mandatory)
Within 24–48 hours after each session:
- send a short “what we heard” summary,
- highlight decisions made and decisions pending,
- list open questions + owners,
- and request missing evidence.

## Outputs and traceability
Keep a simple chain of traceability:
Outcome → Workflow → Backlog item → Acceptance criteria → Tests/verification.
This prevents “lost intent” between sales discovery and delivery.
