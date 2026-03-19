---
layout: page
title: "Phase 5 — Prototype / Proof of Value (PoV)"
permalink: /phases/pov/
---

# Phase 5 — Prototype / Proof of Value (PoV)

## Practical Meaning
- What this phase is: the timeboxed proof step where the riskiest assumptions are tested in a thin end-to-end slice.
- What it is for: replace debate with evidence on value, usability, feasibility, or security viability.
- Why it is needed: without it, teams either overbuild too early or keep discussing questions that only a concrete test can answer.

## At A Glance
- Who leads it: Product Manager / Delivery Lead, Engineering, and Solutions Architect
- Typical duration: 1–3 weeks, timeboxed
- Commercial model: customer-specific PoV work is usually paid; only a standard product demo with no custom build or customer access should stay free
- Use these templates: [Prototype / PoV plan]({{ "/templates/pov-plan/" | relative_url }}) and [Decision log + open questions + risk register]({{ "/templates/decision-log-risk-register/" | relative_url }})

## Minimum Required
- Clear hypotheses
- Clear success criteria
- One bounded slice to test
- Named reviewers who will decide what the result means

## Optional For More Complex Deals
- Integration spikes
- Security viability checks
- Mid-point reviews and structured findings capture

## Use This Phase When
- The most important unknowns cannot be resolved through workshops alone.
- The customer needs proof on value, usability, feasibility, or security viability.
- A timeboxed thin slice will reduce risk faster than more abstract discussion.

## Do Not Use This Phase When
- The PoV is becoming a disguised implementation project.
- Success criteria, reviewers, or scope boundaries are not agreed.
- The same question could be answered faster with a workshop, demo, or technical spike.

## Before You Start
- Clear hypotheses exist.
- Success criteria are explicit.
- Required customer reviewers are named.
- Access, data, or a mock/stub plan is defined.

## Who Should Be Involved
- Customer product owner / business owner (required)
- 1–2 business SMEs / power users (required)
- Customer IT / architecture / operations (if integrations)
- Customer Security (if PoV touches security concerns)

## What To Cover
1. Confirm the hypotheses and success criteria.
2. Define one bounded end-to-end slice.
3. Identify required access, data, or mocks.
4. Build and iterate with at least one mid-point check-in.
5. Demo the result and capture findings.

## Ask For These Inputs
- Sandbox/API access or alternative exports
- Representative sample data
- Clear PoV success criteria and demo scenarios
- Named customer feedback participants

## What Good Looks Like At The End
- The PoV has a clear outcome: proceed, revise, or stop.
- Validated and invalidated assumptions are recorded.
- Scope, backlog, and risk posture are updated based on findings.
- The team learned something concrete that a workshop alone could not have resolved.

## Next Likely Phase
- [Phase 6 — Handover to delivery]({{ "/phases/handover/" | relative_url }})
- In some cases, return to [Phase 2 — Workflow workshop]({{ "/phases/workflow-workshop/" | relative_url }}) or [Phase 3 — Technical deep dive]({{ "/phases/technical-deep-dive/" | relative_url }}) if the PoV changed the problem framing substantially

## Red Flags And What To Do
- PoV becomes “mini full build” → enforce timebox and scope.
- No customer feedback scheduled → PoV will miss the mark.
- Access not granted → replace with mock/stub plan or pause.
