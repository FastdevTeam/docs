---
layout: page
title: "Phase 5 — Prototype / Proof-of-Value (PoV)"
permalink: /phases/pov/
---

# Phase 5 — Prototype / Proof-of-Value (PoV)

## Lead
Vendor Product Manager / Delivery Lead (problem framing) + Engineering (build) + SA (technical risks).

## Recommended timebox
1–3 weeks (timeboxed).

## Typical commercial model
- **Paid (default):** custom PoV/prototype work is delivery effort.
- **Free exception:** demonstrating existing product capability (no customer-specific build, no customer data/system access).

**Convert to paid when (practical triggers):**
- any engineering build is required,
- PoV touches customer integrations/data/identity,
- PoV success criteria must be proven with measurable NFR scenarios.

## Purpose
- Validate the highest-risk assumptions quickly (value, usability, feasibility).
- Demonstrate a thin end-to-end slice (“walking skeleton”).
- Produce evidence for scope agreement and estimating.

## Use this phase when
- The most important unknowns cannot be resolved through workshops alone.
- The customer needs proof on value, usability, feasibility, or security viability.
- A timeboxed thin slice will reduce risk faster than more abstract discussion.

## Do not use this phase when
- The PoV is becoming a disguised implementation project.
- Success criteria, reviewers, or scope boundaries are not agreed.
- The same question could be answered faster with a workshop, demo, or technical spike.

## Entry criteria
- Clear hypotheses exist.
- Success criteria are explicit.
- Required customer reviewers are named.
- Access, data, or a mock/stub plan is defined.

## Template(s) to use
- [Prototype / PoV plan]({{ "/templates/pov-plan/" | relative_url }})
- [Decision log + open questions + risk register]({{ "/templates/decision-log-risk-register/" | relative_url }})

## Required customer attendees
- Customer product owner / business owner (required)
- 1–2 business SMEs / power users (required)
- Customer IT / architecture / operations (if integrations)
- Customer Security (if PoV touches security concerns)

## Agenda
1. Confirm PoV hypotheses and success criteria
2. Define scope: one end-to-end workflow slice
3. Identify required access/data
4. Build and iterate with at least one mid-point check-in
5. Demo and capture findings → update backlog

## Inputs to request (evidence)
- Sandbox/API access or alternative exports
- Representative sample data
- Clear PoV success criteria and demo scenarios
- Named customer feedback participants

## Outputs
- PoV demo + findings (validated/invalidated assumptions)
- Updated MVP scope and backlog
- Updated risk register and next steps

## Exit criteria
- The PoV has a clear outcome: proceed, revise, or stop.
- Validated and invalidated assumptions are recorded.
- Scope, backlog, and risk posture are updated based on findings.

## Next likely phase
- [Phase 6 — Structured handover + backlog refinement]({{ "/phases/handover/" | relative_url }})
- In some cases, return to [Phase 2 — Workflow workshop]({{ "/phases/workflow-workshop/" | relative_url }}) or [Phase 3 — Technical deep dive]({{ "/phases/technical-deep-dive/" | relative_url }}) if the PoV changed the problem framing substantially

## Red flags (and what to do)
- PoV becomes “mini full build” → enforce timebox and scope.
- No customer feedback scheduled → PoV will miss the mark.
- Access not granted → replace with mock/stub plan or pause.
