---
layout: page
title: "Technical Deep Dive + NFR Scenarios"
permalink: /templates/technical-deep-dive/
---

# Technical Deep Dive + NFR Scenarios (Mini workshop)

## Practical Meaning
- What this is: the working document for technical discovery.
- What it is for: map systems, integrations, access, environments, and measurable non-functional requirements.
- Why it is needed: without it, technical assumptions stay vague, NFRs remain adjectives, and delivery risk is discovered too late.

## Minimum Required For Any Technical Review
- Main systems in scope
- Main integration or identity dependency
- Known access or environment constraints
- Top 3 MVP-critical NFR scenarios
- Main technical risks

## Optional For More Complex Deals
- Multiple environments or deployment windows
- Detailed data-object mapping
- Multi-region, residency, or tenant complexity
- A broader set of NFR scenarios beyond MVP-critical ones

## Example Of A Useful NFR Scenario
- `NFR-01`
- Linked workflow ID: `WF-01`
- Quality attribute: Performance
- Scenario: "When a manager approves a request during normal load, the decision appears in the UI and audit log within 5 seconds."
- Response measure: "P95 under 5 seconds"

## Goal
Validate feasibility (integrations, data, environments) and turn NFRs into measurable scenarios.

## When to use
- After workflow and scope are clear enough to discuss real technical dependencies
- When integrations, identity, environments, or NFRs could materially affect scope
- Before a PoV or delivery commitment that depends on technical evidence

## Owner
Solutions Architect, with Product and Engineering support as needed.

## Inputs required
- Discovery Summary v0
- Workflow workshop output or MVP hypothesis
- Customer IT / architecture stakeholders
- Any known system docs, sandbox info, or security constraints

## Outputs produced
- System inventory and integration map
- Access and dependency view
- Prioritized NFR scenarios
- Technical risks, assumptions, and recommended spikes

## Timebox
60-90 minutes for the deep dive plus 45-60 minutes for NFRs if run separately.

## Preparation
- Ask for technical stakeholders, not just business stakeholders.
- Collect API docs or system lists ahead of time where possible.
- Open the [Decision log + open questions + risk register]({{ "/templates/decision-log-risk-register/" | relative_url }}) alongside this workshop.

## System inventory
| SYS ID | System | Purpose | System of record for what | Owner | Notes |
|---|---|---|---|---|---|
| SYS-01 |  |  |  |  |  |

## Integration matrix
| INT ID | Source | Target | Data / event | Direction | Frequency | Auth | Owner | Open issues |
|---|---|---|---|---|---|---|---|---|
| INT-01 |  |  |  |  |  |  |  |  |

## Key data objects
| OBJ ID | Object | Source of record | Key identifiers | Sensitivity | Sample available? | Notes |
|---|---|---|---|---|---|---|
| OBJ-01 |  |  |  |  |  |  |

## Checklist: Integrations & data
- Systems of record for key objects (customer, invoice, ticket, etc.)
- Sync style: real-time / near-real-time / batch / manual import-export
- Identifiers: what unique keys exist, stability, mapping rules
- API access: docs, auth method, sandbox availability
- Data ownership: who approves access and provides sample exports

## Checklist: Identity & access
- SSO required? Protocol (SAML/OIDC)? IdP?
- MFA requirements
- RBAC model: roles, permissions boundaries, admin roles
- Tenant model (single vs multi-org, data separation)

## Checklist: Environments & delivery constraints
- SaaS vs on-prem constraints
- Required environments (dev/test/prod)
- Change windows / deployment restrictions
- Data residency requirements (if any)

## Operations and support expectations
- Monitoring / alerting expectations:
- Logging / audit expectations:
- Support model and hours:
- RTO / RPO or resilience expectations:

## NFR scenario table
| NFR ID | Linked workflow / integration IDs | Quality attribute | Scenario | Response measure | Priority | Owner | Notes / assumptions |
|---|---|---|---|---|---|---|---|
| NFR-01 | WF-01 / INT-01 | Performance |  |  | H/M/L |  |  |

## Risks, assumptions, and recommended spikes
- Top risks:
- Key assumptions:
- Evidence still needed:
- Recommended PoV or spike work:

## Close-out
- Decisions made:
- Open questions + owners:
- Recommended next phase:

## Recommended Next Step
- Carry integration IDs and NFR IDs into the [PoV plan]({{ "/templates/pov-plan/" | relative_url }}) or [handover packet]({{ "/templates/handover-packet/" | relative_url }}).
- If security or procurement constraints are active, open the [security evidence pack]({{ "/templates/security-evidence-pack/" | relative_url }}) in parallel.
