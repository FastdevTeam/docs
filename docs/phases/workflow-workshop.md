---
layout: page
title: "Phase 2 — Workflow Workshop (Story Mapping / Use-Case Slicing)"
permalink: /phases/workflow-workshop/
---

# Phase 2 — Workflow Workshop (Story Mapping / Use-Case Slicing)

## Lead
Vendor Product Manager / Delivery Lead + SA (co-leads). Sales supports.

## Recommended timebox
90–120 minutes.

## Typical commercial model
- **Free (pre-sales):** *light* workshop to define 3 core journeys and an MVP slice.
- **Paid discovery:** when capturing full exceptions/edge cases, writing acceptance criteria at scale, or producing a delivery-ready backlog.

**Convert to paid when (practical triggers):**
- >10–15 backlog items need detailed acceptance criteria,
- multiple business units/roles require separate workflows,
- workflow depends on integrations/data that require concrete contracts.

## Purpose
- Map end-to-end workflows (happy path + key exceptions).
- Define MVP slice and explicit out-of-scope.
- Seed acceptance criteria for top workflows.

## Use this phase when
- The customer can explain the problem but the real workflow is still fuzzy.
- “Requirements” are appearing as a feature list instead of end-to-end tasks.
- The team needs an MVP slice before deeper technical or delivery planning.

## Do not use this phase when
- There is no empowered customer product owner / business owner.
- The discussion is still too early and the business problem is not yet clear.
- The effort is purely technical due diligence with little workflow uncertainty.

## Entry criteria
- A sales discovery summary exists.
- Core user roles are known.
- A customer product owner / business owner and SMEs are available.

## Template(s) to use
- [Workflow workshop pack]({{ "/templates/workflow-workshop/" | relative_url }})
- [Decision log + open questions + risk register]({{ "/templates/decision-log-risk-register/" | relative_url }})

## Required customer attendees
- Customer product owner / business owner (required)
- 1–2 business SMEs / power users (required)
- Optional: IT / architecture / operations if the workflow crosses systems

## Agenda
1. Align on personas + scope of the workshop
2. Map happy-path workflow end-to-end
3. Capture exceptions + business rules
4. Slice MVP (release slice / use-case slices)
5. Draft acceptance criteria seeds for 1–2 top slices

## Inputs to request (evidence)
- 1–2 real examples (forms, tickets, spreadsheets)
- Role list and who performs each step
- Required fields (even rough)
- Known exceptions that happen weekly/monthly

## Outputs
- Story map or use-case model
- MVP slice with in/out boundaries
- Draft acceptance criteria bullets for top flows
- Open questions + owners

## Exit criteria
- The team agrees on the workflow spine and important exceptions.
- MVP in-scope vs later is explicit.
- Top open questions have owners.
- The next technical, security, or PoV decision is clearer.

## Next likely phase
- [Phase 3 — Technical deep dive + NFR scenarios]({{ "/phases/technical-deep-dive/" | relative_url }})
- [Phase 4 — Security / procurement track]({{ "/phases/security-procurement/" | relative_url }}) if workflow introduces compliance or onboarding concerns
- [Phase 5 — Prototype / PoV]({{ "/phases/pov/" | relative_url }}) if a thin slice needs proof

## Red flags (and what to do)
- No empowered product owner / business owner → the workshop becomes a “wish list”; escalate.
- Only features, no workflow spine → re-focus on end-to-end tasks.
- Exceptions ignored but frequent → capture mitigation or include in scope.
