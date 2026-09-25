# MDCA Governance Charter

**Edition:** 2026-08-02 Approved  
**Status:** Approved canonical standard

## 1. Purpose

This Charter governs development, release preparation, repository operations, verification, promotion, rollback, documentation, and communication for My Diet Coke Addiction.

The goals are to protect the verified production baseline, prevent mixing candidates and verified releases, make repository status independently verifiable, preserve user data and offline behavior, and keep instructions concise and mobile-friendly.

## 2. Roles

### Owner

Defines requirements, performs or accepts physical-device testing, approves or rejects candidates, and authorizes promotion.

### Builder

Analyzes requirements, creates complete replacement packages, performs automated verification, records evidence, and reports uncertainty honestly.

### Live Repository

The live GitHub `main` branch is the source of truth for what is currently uploaded.

### Verified Archive

The canonical verified ZIP and SHA-256 are the source of truth for approved release contents used as the next build baseline.

## 3. Authority and Precedence

When sources conflict, use this order:

1. explicit current owner instruction;
2. the approved Governance Charter and stable policy documents;
3. `07-MDCA-CURRENT-STATUS.md` for mutable release facts;
4. the canonical verified archive and checksum for approved file contents;
5. cache-busted live repository inspection for current uploaded contents;
6. release documentation and build evidence;
7. prior conversation statements and historical notes.

An owner instruction overrides policy only when the override is explicit. An ambiguous acknowledgment does not silently waive integrity, verification, or rollback requirements.

## 4. Conflict Handling

When a conflict is detected:

1. identify the conflicting sources;
2. do not silently choose the convenient interpretation;
3. apply the precedence rules;
4. record any permanent policy change in the Decision and Change Log;
5. update only the document responsible for that information type.

## 5. Stable Policy Versus Mutable Status

Stable policy must not hard-code the current baseline except as an example.

Current release facts belong only in `07-MDCA-CURRENT-STATUS.md`, including active baseline, rollback baseline, candidate, checksums, live file set, and runtime identities.

## 6. Required Status Vocabulary

- **DRAFT** — requirements or documents are under review.
- **BUILT** — files were generated but not fully checked.
- **AUTOMATED PASS** — defined automated checks passed.
- **DEPLOYED** — files are visible in the live repository.
- **DEVICE PASS** — owner completed the specified physical-device checks.
- **APPROVED** — owner authorized promotion.
- **VERIFIED** — approved candidate was promoted and the live repository was checked.
- **REJECTED** — candidate must not be promoted.
- **FAIL** — a required check failed.
- **UNVERIFIED** — no reliable evidence was obtained.

“Passed” does not automatically mean “Approved” unless the offered action explicitly defines it that way.

## 7. Evidence Rules

Never claim a live repository state without checking it, exact byte-for-byte live equivalence without computing it, device behavior without owner device evidence, offline success without an offline test, or a checksum without calculating it.

Local files and ZIPs are build evidence, not proof of the current repository.

## 8. Governance Maintenance

Every permanent rule change requires revised policy text, a dated log entry, an updated Handoff when operations change, and removal of superseded wording rather than preservation of conflicting variants.

## 9. Architecture and Coding Authority

`10-MDCA-ARCHITECTURE-AND-CODING-STANDARDS.md` is the canonical
implementation standard.

Product behavior and visual requirements remain governed by
`06-MDCA-PRODUCT-AND-UI-STANDARDS.md`.

The Architecture and Coding Standards may not change the approved
deployment file set, privacy model, release gates, or product behavior
without an explicit owner-approved governance amendment.
