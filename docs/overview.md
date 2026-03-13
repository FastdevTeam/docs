---
layout: page
title: "Common Overview"
permalink: /overview/
---

# Requirements Discovery & Validation Overview

## Purpose
This document provides a **shared, plain-English overview** of how we will discover, validate, and document requirements:
- why the process is phased,
- which sessions exist and who participates,
- what evidence we need to de-risk scope, integrations, NFRs, and security/procurement gates,
- what “done” looks like (outputs).

## Audience
**Customer**
- Executive sponsor / business sponsor
- Product owner / business owner
- Business SMEs / power users
- IT / architecture / operations
- Security / Compliance
- Procurement (if applicable)

**Vendor**
- Sales / Account Executive
- Solutions Architect (SA)
- Product Manager / Delivery Lead
- Engineering
- Security / Compliance / GRC (if applicable)

Use the [role-based guides]({{ "/audiences/" | relative_url }}) to brief each audience on what they own, where they participate, and why their involvement matters.

## Core principles
1. **Outcomes before features**  
   We align on business outcomes and user workflows first, then derive features and acceptance criteria.
2. **Right people, right questions**  
   Some answers require IT, Security, or Operations; we don’t expect the product owner to answer everything.
3. **Evidence-based decisions**  
   We prefer examples (screenshots, docs, sample data) over assumptions.
4. **Verifiable requirements**  
   “Fast/secure/easy” must be translated into measurable scenarios and acceptance criteria.
5. **Continuous refinement**  
   Requirements are refined iteratively; after each session we confirm what we captured.


## Commercial boundary (free vs paid)
Discovery can range from light qualification to delivery-grade specification. To keep expectations clear, we separate:
- **Pre-sales discovery (usually free):** outcomes + workflows + MVP hypothesis + directional plan.
- **Delivery-grade discovery (paid):** detailed requirements, integration specifics, measurable NFRs, security evidence, and custom PoV work.

See: [Commercial boundary details]({{ "/commercial-boundary/" | relative_url }})

## The phased process (high level)
- **Phase 0 — Pre-work intake** (Sales-led): collect context; identify stakeholders; request evidence.
- **Phase 1 — Sales discovery call** (Sales-led, SA optional): outcomes, urgency, stakeholders, decision process.
- **Phase 2 — Workflow workshop** (Product + SA-led): map end-to-end workflows; identify exceptions; define MVP slice.
- **Phase 3 — Technical deep dive + NFR scenarios** (SA-led): integrations, data, environments; make NFRs measurable.
- **Phase 4 — Security/procurement track** (Security / Compliance / GRC-led + SA): questionnaire mapping + evidence pack.
- **Phase 5 — Prototype / PoV** (Product/Eng-led + SA): validate riskiest assumptions with a thin end-to-end slice.
- **Phase 6 — Structured handover + backlog refinement** (Product Manager / Delivery Lead-led): delivery-ready backlog and cadence.

## What “done” looks like (outputs)
- Confirmed problem statement, outcomes, and success metrics
- Defined MVP scope + what is explicitly out of scope
- Workflow model (story map or use-case slices)
- Integration map + data requirements + owners + access plan
- Prioritized NFR scenarios (performance, availability, security, etc.)
- Security/procurement status (evidence pack readiness + blockers)
- PoV plan and success criteria (if used)
- Handover packet + delivery-ready backlog format + refinement cadence
