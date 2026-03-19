---
layout: page
title: "Handover Packet + Backlog Format"
permalink: /templates/handover-packet/
---

# Structured Handover Packet + Delivery-Ready Backlog

## Practical Meaning
- What this is: the final consolidation artifact for the discovery effort.
- What it is for: turn discovery outputs into something a delivery team can actually pick up and refine.
- Why it is needed: without it, discovery knowledge stays scattered across notes, workshops, and chats, and implementation starts with re-discovery and avoidable churn.

## Minimum Required For Any Handover
- Problem and outcome summary
- MVP scope boundaries
- At least the key workflow slices
- Main dependencies and constraints
- A first-pass backlog with acceptance criteria seeds

## Optional For More Complex Deals
- Full decision log references
- Detailed NFR coverage
- Security readiness detail
- Cross-team dependency planning

## Goal
Turn discovery outputs into delivery-ready backlog items with acceptance criteria and dependencies.

## When to use
- When discovery is ending and delivery preparation is starting
- When multiple outputs need to be consolidated into one packet
- When a delivery team should be able to pick up the work without re-running discovery

## Owner
Product Manager / Delivery Lead, with SA and Engineering input.

## Inputs required
- Discovery Summary v0
- Workflow workshop output
- Technical deep dive output
- Security / procurement status
- PoV findings if applicable
- Decision log + open questions + risk register

## Outputs produced
- Structured handover packet
- Prioritized backlog v1
- Refinement cadence and ownership model

## Timebox
30-60 minutes for walkthrough plus async consolidation.

## Handover packet sections
### 1) Executive context
- Problem statement:
- Why now:
- Outcomes and success metrics:

### 2) Scope
- MVP in scope:
- Out of scope:
- Later-phase ideas:

### 3) Workflow model
- Workflow artifact reference:
- Key happy paths:
- Important exceptions:

### 4) Backlog
- Prioritized backlog reference:
- Highest-risk or highest-value items:

### 5) Integrations and data
- Integration map reference:
- Data dependencies:
- Access plan and owners:

### 6) NFR scenarios
- MVP-critical scenarios:
- Other important constraints:

### 7) Security / procurement status
- Evidence readiness:
- Blockers:
- Constraints that affect delivery:

### 8) Decisions, open questions, and risks
- Decisions already made:
- Open questions + owners:
- Top risks + mitigation:

## Traceability Map
| Outcome ID | Workflow ID | Backlog ID | NFR / Risk / Integration IDs | Notes |
|---|---|---|---|---|
| OUT-01 | WF-01 | B-01 | NFR-01, R-01, INT-01 |  |

## Backlog item format
- ID:
- Title:
- User story / use-case slice:
- Linked outcome IDs:
- Source workflow / phase:
- Acceptance criteria (Given/When/Then preferred):
- Dependencies (integration, data, security):
- NFR constraints (scenario references):
- Owner needed for decisions:
- Priority (MoSCoW or similar) + rationale:
- Estimate placeholder (TBD):

## Ready-for-refinement checklist
- The item is tied to a real workflow or use-case slice.
- Acceptance criteria are specific enough to test.
- Dependencies are visible.
- Open questions have owners.
- Security, data, and NFR implications are called out where relevant.

## Refinement cadence (default)
- Weekly refinement (30–60 min) with Product + Eng + SA.
- Customer product owner / business owner joins when decisions are needed.

## Final handover check
- Delivery team understands the problem and intended outcomes.
- Scope boundaries are explicit.
- Remaining risks are visible rather than hidden.
- The next refinement session is scheduled.

## Recommended Next Step
- Use the traceability map and backlog IDs in the first refinement session.
- Keep unresolved questions and risks active in the [Decision log + open questions + risk register]({{ "/templates/decision-log-risk-register/" | relative_url }}).
