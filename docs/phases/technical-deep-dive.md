---
layout: page
title: "Phase 3 — Technical Deep Dive + NFR Scenario Workshop"
permalink: /phases/technical-deep-dive/
---

# Phase 3 — Technical Deep Dive + NFR Scenario Workshop

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

## Required customer attendees
- Customer IT/Architecture (required)
- Customer Ops/Support (strongly recommended)
- Customer PO (recommended for priority tradeoffs)

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

## Red flags (and what to do)
- No sandbox access and no plan → PoV/integration spikes will fail.
- “Real-time everywhere” with legacy constraints → negotiate cadence and scope.
- NFRs only as adjectives → require scenario + measure format.
