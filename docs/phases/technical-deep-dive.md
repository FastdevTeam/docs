---
layout: page
title: "Phase 3 — Technical Deep Dive + NFR Scenario Workshop"
permalink: /phases/technical-deep-dive/
---

# Phase 3 — Technical Deep Dive + NFR Scenario Workshop

## Practical Meaning
- What this phase is: the structured technical review that turns system assumptions into explicit constraints, dependencies, and measurable quality targets.
- What it is for: determine whether the proposed scope is actually feasible and what technical risks must be handled.
- Why it is needed: without it, integrations, environments, and NFRs remain vague until the team is already trying to build.

## Minimum Required To Run This Well
- Relevant customer technical stakeholders
- A working view of the MVP or key workflows
- The main systems or integrations in scope
- At least the MVP-critical NFRs and technical risks

## Optional For More Complex Deals
- Detailed data-object mapping
- Deployment-window, residency, or tenant-model constraints
- Broader NFR coverage beyond the MVP-critical scenarios

## Lead
Vendor Solutions Architect (lead), Engineering/Product support as needed.

## Recommended timebox
60–90 minutes (deep dive) + 45–60 minutes (NFR scenarios); may be combined.

## Typical commercial model
- **Paid discovery (default):** this phase produces feasibility artifacts (integration map, measurable NFR scenarios) that are delivery-grade.
- **Exception:** a *very light* technical check can be included in pre-sales if it stays directional (systems list only).

**Convert to paid when (practical triggers):**
- moving from “systems involved” to “endpoints/auth/data contracts”,
- requesting sandbox access or sample data extracts,
- defining measurable performance/availability/security targets.

## Purpose
- Validate feasibility: integrations, data, environments, delivery constraints.
- Convert vague NFRs (fast/secure/reliable) into measurable scenarios.
- Produce integration map + prioritized NFR scenario list.

## Use this phase when
- Integrations, identity, environments, or delivery constraints could materially change scope.
- The customer is asking for performance, reliability, or security commitments.
- A PoV or implementation would fail without better technical clarity.

## Do not use this phase when
- Discovery is still at a very early qualification stage with no technical signals yet.
- The conversation is only about business problem framing and not feasibility.
- The customer cannot provide any relevant technical stakeholder yet and the session would be pure guesswork.

## Entry criteria
- Business outcomes and the initial workflow/MVP hypothesis are understood.
- Technical stakeholders have been identified.
- There is agreement that the effort has crossed into technical discovery, whether light pre-sales or paid.

## Template(s) to use
- [Technical deep dive + NFR scenarios]({{ "/templates/technical-deep-dive/" | relative_url }})
- [Decision log + open questions + risk register]({{ "/templates/decision-log-risk-register/" | relative_url }})

## Required customer attendees
- Customer IT / architecture (required)
- Customer operations / support (strongly recommended)
- Customer product owner / business owner (recommended for priority tradeoffs)

## Agenda
1. Deployment constraints and environments
2. Integrations inventory (systems of record, data flows)
3. Identity/SSO and access model
4. NFR scenarios: brainstorm → consolidate → prioritize
5. Risks, evidence needed, next steps

## Inputs to request (evidence)
- System inventory + owners
- API docs/sandbox access plan (if integrations)
- Sample exports / representative datasets
- Identity requirements (SSO protocols, MFA, RBAC expectations)

## Outputs
- Integration map (direction, frequency, auth, owner)
- Data requirements + access plan
- Prioritized NFR scenarios with measures
- Technical risk register

## Exit criteria
- The main systems, constraints, and access dependencies are visible.
- Important NFRs are measurable enough to test or estimate against.
- Technical risks and follow-up actions are owned.
- The team knows whether to proceed to security review, PoV, or handover.

## Next likely phase
- [Phase 4 — Security / procurement track]({{ "/phases/security-procurement/" | relative_url }})
- [Phase 5 — Prototype / PoV]({{ "/phases/pov/" | relative_url }})
- [Phase 6 — Structured handover + backlog refinement]({{ "/phases/handover/" | relative_url }}) if technical uncertainty is already low

## Red flags (and what to do)
- No sandbox access and no plan → PoV/integration spikes will fail.
- “Real-time everywhere” with legacy constraints → negotiate cadence and scope.
- NFRs only as adjectives → require scenario + measure format.
