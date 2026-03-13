---
layout: page
title: "Solutions Architect Guide"
permalink: /audiences/solutions-architect/
---

# Solutions Architect Guide

## Why your role matters
- You make technical risk explicit before it turns into scope mistakes.
- You separate assumptions from evidence on integrations, data, identity, and environments.
- You turn vague quality requests into measurable scenarios the team can build against.

## What you own
- Validate feasibility: integrations, data, environments, identity, constraints.
- Convert “quality adjectives” into **measurable NFR scenarios**.
- Identify architectural drivers and major risks early.
- Partner with Security / Compliance / GRC to answer questionnaires with accurate technical evidence.

## Decisions you should make
- Which risks are serious enough to block estimating or require a PoV.
- Which technical questions need evidence versus directional assumptions.
- When a request has crossed into paid, delivery-grade discovery.

## Where you are needed by phase

| Phase | Your involvement | Why it matters |
|---|---|---|
| 0. Intake | Review as needed | Catches hard constraints early when they are visible |
| 1. Sales discovery | Optional | Useful for complex deals with obvious technical risk |
| 2. Workflow workshop | Support | Helps spot cross-system implications while scope is still flexible |
| 3. Technical deep dive | Lead | This is the main session for your role |
| 4. Security / procurement | Co-own technical evidence | Prevents inaccurate or hand-wavy questionnaire answers |
| 5. Prototype / PoV | Co-design and validate | Ensures the PoV tests the riskiest assumptions, not the easiest path |
| 6. Handover | Review | Confirms backlog items reflect real dependencies and constraints |

## Key facilitation techniques
- Integration inventory (systems of record, data ownership, direction, frequency).
- NFR scenario workshop (stimulus → response → measure).
- Risk register: top risks, mitigation, owner, due date.

## What you need from the customer
- Technical owners for each relevant system.
- API docs, sandbox details, or a realistic access plan.
- Sample data and identity requirements.
- Clear statements of any hosting, residency, or operational constraints.

## Your outputs
- Integration map + owners + access plan.
- Prioritized NFR scenarios and “MVP-critical NFRs”.
- Technical risks and recommended PoV spikes.
- Contribution to handover packet sections.

## What good looks like
- Risks are explicit, prioritized, and owned.
- NFRs are measurable enough to test.
- The delivery team can see what depends on access, evidence, or further validation.

## Commercial boundary (your responsibility)
Phase 3+ outputs are often **delivery-grade**. Call out when a request crosses from “directional pre-sales” into paid discovery (integration specifics, measurable NFR targets, security evidence, or custom PoV work).
See: [Commercial boundary]({{ "/commercial-boundary/" | relative_url }})

## Practical checklists
See [Templates → Technical Deep Dive]({{ "/templates/technical-deep-dive/" | relative_url }}).
