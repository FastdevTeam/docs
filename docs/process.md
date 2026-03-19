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
- **Sales / Account Executive**: leads early discovery, stakeholder alignment, and next steps; ensures the right customer roles are invited.
- **Solutions Architect (SA)**: leads technical feasibility, integrations, constraints, and NFR scenario elicitation.
- **Product Manager / Delivery Lead**: leads workflow modeling, MVP slicing, acceptance criteria framing, and handover to delivery.
- **Security / Compliance / GRC**: leads security questionnaires and evidence pack management (enterprise customers especially).
- **Executive sponsor / business sponsor**: backs the initiative, helps secure support, and escalates stalled decisions.
- **Customer product owner / business owner**: decides priorities and scope tradeoffs, and confirms outcomes.
- **Business SMEs / power users**: validate workflows, exceptions, and usability needs.
- **Customer IT / architecture / operations**: validate integrations, environments, operational needs, and NFRs.

Use the [role-based guides]({{ "/audiences/" | relative_url }}) to brief each audience before sessions so ownership and expectations are clear.


## Commercial boundary (when to stay free vs when to charge)
Discovery is not “all free by default”. Use a clear boundary:

- **Pre-sales discovery (usually free):** enough to confirm fit and propose a credible MVP and plan.
- **Paid discovery:** when outputs become reusable project assets (detailed workflows, integration specs, measurable NFRs, security evidence, custom PoV).

### Practical conversion test (use internally)
Move to **paid discovery** when **any 2** are true:
1) More than ~2–4 hours beyond initial sessions  
2) Multiple stakeholder groups are required (IT/Security/Ops)  
3) You need access to customer systems/data (sandbox, extracts, keys)  
4) Deliverables become implementation-grade (stories + acceptance criteria, data contracts, NFR targets)

See: [Commercial boundary details]({{ "/commercial-boundary/" | relative_url }}) and the [Sales talk track template]({{ "/templates/commercial-boundary/" | relative_url }}).

## A practical cadence (default)
### Compressed (≈2 weeks, low complexity)
1. Intake (async) → Sales discovery
2. Workflow workshop
3. Technical deep dive + mini NFR review
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
