---
layout: page
title: "Example — Initial Discovery Intake Form"
permalink: /examples/initial-discovery-intake/
---

# Example — Initial Discovery Intake Form

This is a fictional but realistic example of a completed initial discovery intake form.

## Practical Meaning
- What this example is: a realistic example of the kind of short customer response Sales should hope to receive before the first serious discovery call.
- What it shows: enough business, workflow, stakeholder, and timing detail to qualify the opportunity and plan the next conversation.
- Why it is useful: it gives Sales and the customer a concrete bar for what "helpful enough" looks like.

## How To Use This Example
- Compare this example to the real responses you receive and note what is still missing.
- Use it as a quality bar, not a script. Real customer language should stay natural.
- If the real intake is much thinner than this, use the first discovery call to close the gaps.

## Based On
- [Initial Discovery Intake Form]({{ "/templates/initial-discovery-intake-form/" | relative_url }})

## Example Scenario
- Customer: Northwind Distribution
- Initiative: Credit Approval Workflow Modernization

## 1) What are you trying to improve?
- We want to replace our manual customer credit approval process, which currently runs through email, spreadsheets, and ERP notes.
- This is important now because we are expanding into three regions and our finance team has flagged approval delays and inconsistent audit history.
- If nothing changes in the next 6-12 months, approval times will stay slow, finance workload will keep growing, and we risk more audit findings around approval traceability.

## 2) What would success look like?
- Outcomes that matter most: faster approval turnaround, fewer incomplete requests, clear audit history, less manual follow-up between Sales and Finance.
- We would consider this successful 90 days after go-live if median approval time is under 4 hours, fewer than 5% of requests are returned for missing information, and every decision is traceable.
- If tradeoffs are required, the most important outcome is same-day approval with a full audit trail.

## 3) Who is involved?
- Executive sponsor / business sponsor: Sarah Lindholm, CFO
- Day-to-day product owner / business owner: Daniel Ekstrom, Finance Operations Manager
- Business SMEs / power users: AR Team Lead, Sales Operations Specialist, Regional Finance Analyst
- IT / security / procurement contacts: Enterprise Architect, IAM Administrator, Security Analyst, Procurement Manager

## 4) How does the work happen today?
- Primary user roles: Sales reps, Finance analysts, approving managers
- Top 3 tasks:
  - submit a customer credit request
  - review supporting evidence and route to approver
  - approve or reject and notify Sales
- Current tools and systems: Outlook shared mailbox, Excel tracker, ERP, Teams, SharePoint
- Where the process breaks: requests arrive incomplete, approvers are chased manually, and decision history is split across email and ERP notes
- Rough scale: about 45 active users across 3 business units

## 5) What needs to work first?
- Version 1 must support request submission, document attachment, routing to approver, approve/reject decision, comments, and audit history.
- Later work can include ERP write-back, delegation rules, advanced reporting, and mobile approvals.

## 6) What systems, constraints, and dates should we know about?
- Systems and data involved: ERP, Azure AD, SharePoint, email, internal customer master data
- Hard constraints: SSO is required, data must stay in the EU, and access must follow existing manager hierarchy
- Vendor onboarding / security review: yes, standard security review usually takes 2-3 weeks and happens before production access
- Target go-live date: September 1, 2026, before Q4 planning and budgeting
- Key internal decision date: May 15, 2026
- Who approves purchase / who can block it: CFO approves; IT Security and Procurement can block

## Helpful attachments before the call
- Current request form screenshot
- Spreadsheet tracker sample
- One-page process overview from Finance Ops

## Helpful attachments later if needed
- Sample request export with anonymized data
- ERP integration owner list
- Standard vendor onboarding questionnaire

## Recommended Next Example
- See how this intake becomes an internal summary in [Example — Discovery Summary v0]({{ "/examples/discovery-summary/" | relative_url }}).
