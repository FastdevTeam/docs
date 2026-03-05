---
layout: page
title: "Technical Deep Dive + NFR Scenarios"
permalink: /templates/technical-deep-dive/
---

# Technical Deep Dive + NFR Scenarios (Mini workshop)

## Goal
Validate feasibility (integrations, data, environments) and turn NFRs into measurable scenarios.

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

## NFR scenario template (copy/paste)
For each scenario:
- Quality attribute: (Performance / Availability / Security / Scalability / Auditability / Usability / etc.)
- Source of stimulus:
- Stimulus:
- Environment: (normal / peak / degraded / disaster)
- Artifact: (service, database, API, UI, integration)
- Response:
- Response measure: (latency, throughput, RTO/RPO, accuracy, etc.)
- Priority (H/M/L):
- Notes/assumptions:

## Output
- Integration map + access plan
- Prioritized NFR scenarios
- Technical risks and recommended PoV spikes
