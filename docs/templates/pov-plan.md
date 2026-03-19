---
layout: page
title: "Prototype / PoV Plan"
permalink: /templates/pov-plan/
---

# Prototype / Proof-of-Value (PoV) Plan

## Practical Meaning
- What this is: the scope and control document for a timeboxed PoV.
- What it is for: prove or disprove the riskiest assumptions with clear boundaries and success criteria.
- Why it is needed: without it, PoVs expand into mini-projects, success becomes subjective, and teams finish the work without a clear decision.

## Minimum Required For Any PoV
- One uncertainty to validate
- One end-to-end slice
- Named reviewers
- Explicit success criteria
- A clear proceed / revise / stop decision at the end

## Optional For More Complex Deals
- Integration spikes
- Security viability checks
- Mid-point reviews
- Separate technical vs business success criteria

## Example Of A Strong Success Criterion
- Business: "The customer product owner agrees the flow is good enough to pilot."
- Technical: "Decision sync completes with correct data in under 10 seconds."
- Security: "The flow uses approved authentication and produces an audit event."

## Goal
Validate the highest-risk assumptions quickly using a thin end-to-end slice (“walking skeleton”).

## When to use
- When the biggest unknowns cannot be resolved through discussion alone
- When the customer needs proof on value, usability, feasibility, or security viability
- When you can timebox the work around explicit success criteria

## Owner
Product Manager / Delivery Lead with Engineering and SA support.

## Inputs required
- Confirmed workflow slice
- Named customer reviewers
- Access/data plan or mock/stub plan
- Agreed hypotheses and decision criteria

## Outputs produced
- PoV findings
- Updated MVP scope and backlog
- Decision to proceed, revise, or stop

## Timebox
Usually 1-3 weeks.

## Problem to validate
- What uncertainty is this PoV meant to reduce?:

## PoV hypotheses (fill in)
- Value hypothesis:
- Usability hypothesis:
- Feasibility hypothesis (integration/data/NFR):
- Viability hypothesis (security/procurement):

## Non-goals
- What this PoV will not prove:
- What is explicitly out of scope:

## PoV scope
- One end-to-end workflow slice:
- Representative data approach:
- Required integrations or stubs:
- Minimum logging / audit behavior needed:

## Dependencies and assumptions
- Access needed:
- Data needed:
- Environment / tooling assumptions:
- Customer dependencies:

## Demo scenarios (2–3)
- Scenario 1:
- Scenario 2:
- Scenario 3:

## Success criteria
- Customer product owner / business owner sign-off criteria:
- Technical criteria (latency, reliability, data correctness):
- Security viability criteria:

## Timeline and review cadence
- Start date:
- Mid-point review:
- Demo date:
- Named reviewers:

## Findings log
- What was validated:
- What was invalidated:
- New risks discovered:

## Final decision
- Proceed / revise / stop:
- Scope changes:
- Follow-up actions:

## Recommended Next Step
- If successful, carry findings into the [handover packet]({{ "/templates/handover-packet/" | relative_url }}).
- If the PoV invalidates key assumptions, return to the [workflow workshop]({{ "/templates/workflow-workshop/" | relative_url }}) or [technical deep dive]({{ "/templates/technical-deep-dive/" | relative_url }}) with the updated facts.
