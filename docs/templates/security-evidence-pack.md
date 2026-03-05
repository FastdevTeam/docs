---
layout: page
title: "Security / Procurement Evidence Pack"
permalink: /templates/security-evidence-pack/
---

# Security / Procurement Evidence Pack + Questionnaire Mapping

## Goal
Prevent security/procurement from blocking delivery late. Map customer questionnaires to a single evidence pack.

## Inputs to request early
- The questionnaire (SIG/CAIQ/custom)
- Minimum required evidence list (SOC 2, pen test, etc.)
- Data residency and regulatory requirements
- Vendor onboarding timeline and steps

## Evidence pack index (template)
1. Organization & governance (policies, contacts, training overview)
2. Architecture & data flows (high-level diagram, data flow diagram, sub-processors)
3. Identity & access management (SSO/MFA/RBAC, admin controls)
4. Logging, monitoring, audit (coverage, retention, alerting)
5. Secure SDLC (CI/CD controls, vuln management)
6. Incident response & resilience (IR plan, RTO/RPO targets where defined)
7. Compliance attestations (SOC 2 if applicable, pen test summary)

## Questionnaire mapping table (template)
| Domain | Question IDs | Evidence section(s) | Owner | Status | Notes |
|---|---|---|---|---|---|
| IAM |  | 3 | SA + Security |  |  |
| Logging/Audit |  | 4 | SA |  |  |

## Output
- Evidence pack v1 + mapping status + blockers list
