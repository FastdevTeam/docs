---
layout: page
title: "Phase 3 — Technical Deep Dive + NFR Review"
permalink: /phases/technical-deep-dive/
---

# Phase 3 — Technical Deep Dive + NFR Review

## Practical Meaning
- What this phase is: the structured technical review that turns system assumptions into explicit constraints, dependencies, and measurable quality targets.
- What it is for: determine whether the proposed scope is actually feasible and what technical risks must be handled.
- Why it is needed: without it, integrations, environments, and NFRs remain vague until the team is already trying to build.

## At A Glance
- Who leads it: Solutions Architect
- Typical duration: 60–90 minutes for the deep dive, plus 45–60 minutes for the NFR review if run separately
- Commercial model: usually paid discovery because this phase creates delivery-grade feasibility artifacts; a very light systems-only check can stay in pre-sales
- Use these templates: [Technical deep dive + NFR scenarios]({{ "/templates/technical-deep-dive/" | relative_url }}) and [Decision log + open questions + risk register]({{ "/templates/decision-log-risk-register/" | relative_url }})

## Minimum Required
- Relevant customer technical stakeholders
- A working view of the MVP or key workflows
- The main systems or integrations in scope
- At least the MVP-critical NFRs and technical risks

## Optional For More Complex Deals
- Detailed data-object mapping
- Deployment-window, residency, or tenant-model constraints
- Broader NFR coverage beyond the MVP-critical scenarios

## Use This Phase When
- Integrations, identity, environments, or delivery constraints could materially change scope.
- The customer is asking for performance, reliability, or security commitments.
- A PoV or implementation would fail without better technical clarity.

## Do Not Use This Phase When
- Discovery is still at a very early qualification stage with no technical signals yet.
- The conversation is only about business problem framing and not feasibility.
- The customer cannot provide any relevant technical stakeholder yet and the session would be pure guesswork.

## Before You Start
- Business outcomes and the initial workflow/MVP hypothesis are understood.
- Technical stakeholders have been identified.
- There is agreement that the effort has crossed into technical discovery, whether light pre-sales or paid.

## Who Should Be Involved
- Customer IT / architecture (required)
- Customer operations / support (strongly recommended)
- Customer product owner / business owner (recommended for priority tradeoffs)

## What To Cover
1. Deployment constraints and environments.
2. Integrations inventory, systems of record, and data flows.
3. Identity, SSO, and access model.
4. NFR scenarios: brainstorm, consolidate, and prioritize.
5. Risks, missing evidence, and next steps.

## Ask For These Inputs
- System inventory + owners
- API docs/sandbox access plan (if integrations)
- Sample exports / representative datasets
- Identity requirements (SSO protocols, MFA, RBAC expectations)

## What Good Looks Like At The End
- The main systems, constraints, and access dependencies are visible.
- Important NFRs are specific enough to test or estimate against.
- Technical risks and follow-up actions have owners.
- The team knows whether to proceed to security review, PoV, or handover.
- The conversation has moved from assumptions to explicit technical decisions.

## Next Likely Phase
- [Phase 4 — Security / procurement track]({{ "/phases/security-procurement/" | relative_url }})
- [Phase 5 — Prototype / PoV]({{ "/phases/pov/" | relative_url }})
- [Phase 6 — Handover to delivery]({{ "/phases/handover/" | relative_url }}) if technical uncertainty is already low

## Red Flags And What To Do
- No sandbox access and no plan → PoV/integration spikes will fail.
- “Real-time everywhere” with legacy constraints → negotiate cadence and scope.
- NFRs only as adjectives → require scenario + measure format.
