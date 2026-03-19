---
layout: page
title: "Example — Discovery Summary v0"
permalink: /examples/discovery-summary/
---

# Example — Discovery Summary v0

This is a fictional but realistic example of a completed discovery summary after the first serious sales call.

## Practical Meaning
- What this example is: a short internal write-up Sales could produce after the first meaningful customer conversation.
- What it shows: how intake answers and call notes get turned into outcomes, workflow IDs, risks, and next steps.
- Why it is useful: it shows the level of clarity needed before moving into workshops, technical discovery, or a PoV.

## How To Use This Example
- Use it as a model for structure and level of detail, not as fixed wording.
- Check whether your own summary names the sponsor, business owner, outcomes, MVP hypothesis, and next session plan this clearly.
- Send a customer confirmation note if any part of the summary still feels inferred rather than explicitly confirmed.

## Based On
- [Discovery Summary v0]({{ "/templates/discovery-summary/" | relative_url }})
- [Example — Initial Discovery Intake Form]({{ "/examples/initial-discovery-intake/" | relative_url }})

## Example Scenario
- Customer: Northwind Distribution
- Initiative: Credit Approval Workflow Modernization

## 1) Opportunity snapshot
- Customer / account: Northwind Distribution
- Date: March 19, 2026
- Prepared by: Alex Morgan
- Opportunity / deal name: Credit Approval Workflow Modernization
- Stage: Discovery

## 2) Problem and why now
- Problem statement: Customer credit approvals are handled across email, spreadsheets, and ERP notes, causing delays, inconsistent routing, and weak auditability.
- Trigger event / reason this matters now: Northwind is expanding into three regions and Finance leadership wants a more controlled process before peak Q4 demand.
- Cost of doing nothing: approval delays remain high, Finance headcount pressure increases, and audit issues continue.

## 3) Outcomes and success measures
- Primary business outcome (OUT-01): Reduce approval turnaround from 2 business days to same day
- Secondary outcomes (OUT-02, OUT-03 if needed):
  - OUT-02: Create a complete audit trail for every approval decision
  - OUT-03: Reduce rework caused by incomplete requests
- Success measures:
  - median approval turnaround under 4 hours
  - fewer than 5% of requests returned for missing information
  - 100% of approval decisions visible in audit history

## 4) Users and workflows
- Primary user roles: Sales reps, Finance analysts, approving managers
- Top workflows discussed (WF-01, WF-02 if useful):
  - WF-01: Submit customer credit request
  - WF-02: Review, approve, or reject request
- Current pain points: incomplete submissions, manual chasing of approvers, and fragmented decision history

## 5) MVP hypothesis
- What must work in v1: request submission, evidence attachment, route to approver, approve/reject decision, audit history, basic notifications
- What can wait until later: ERP write-back, delegated approvals, advanced reporting
- Key assumptions:
  - existing manager hierarchy can drive routing
  - customer is willing to keep some reporting manual in v1

## 6) Stakeholders and decision mechanics
- Executive sponsor / business sponsor: Sarah Lindholm, CFO
- Customer product owner / business owner: Daniel Ekstrom, Finance Operations Manager
- SMEs / power users: AR Team Lead, Sales Operations Specialist
- IT / architecture / operations contacts: Enterprise Architect, IAM Administrator
- Security / procurement contacts: Security Analyst, Procurement Manager
- Who approves: CFO + Procurement
- Who can block: Security, Procurement, Enterprise Architecture if SSO or residency requirements are not met

## 7) Risks, blockers, and unknowns
- Known blockers:
  - security review required before production access
  - manager hierarchy source of truth not yet confirmed
- Risks / unknowns:
  - ERP ownership for future write-back is still unclear
  - approval rules may vary by region
- Evidence still needed:
  - sample request form
  - current-state tracker
  - IAM ownership confirmation

## 8) Recommended next step
- Recommended next phase: Workflow workshop followed by technical deep dive
- Sessions to schedule:
  - workflow workshop with business owner + 2 SMEs
  - technical deep dive with IT / IAM / enterprise architect
- Required attendees:
  - Daniel Ekstrom
  - AR Team Lead
  - Sales Operations Specialist
  - Enterprise Architect
  - IAM Administrator
- Decision needed before proceeding: confirm who owns approval routing logic and who should approve MVP scope

## 9) Customer confirmation note
- Please confirm the problem statement, the same-day approval target, the MVP must-haves, and the list of stakeholders needed for the next sessions.

## Recommended Next Example
- See how this summary turns into delivery preparation in [Example — Handover Packet + Backlog Format]({{ "/examples/handover-packet/" | relative_url }}).
