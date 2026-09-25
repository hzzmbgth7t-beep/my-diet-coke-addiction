# MDCA Governance Index

**Edition:** 2026-08-02 Approved  
**Status:** Approved canonical standard  
**Owner approval:** 2026-08-02 18:12 CDT  
**Application:** My Diet Coke Addiction

## Purpose

This set consolidates the operating rules, architecture, release
controls, repository practices, testing standards, communication
conventions, and durable product guidelines established during the
development conversation.

Stable policy, mutable status, historical decisions, and implementation
standards are kept separate to prevent duplication and conflicts.

## Document Set

1. `01-MDCA-GOVERNANCE-CHARTER.md`
   - authority, scope, precedence, terminology, conflict resolution
2. `02-MDCA-RELEASE-LIFECYCLE.md`
   - candidate, testing, approval, promotion, verification, rollback
3. `03-MDCA-REPOSITORY-AND-PACKAGING-STANDARD.md`
   - live checks, package composition, identities, checksums
4. `04-MDCA-VERIFICATION-AND-ACCEPTANCE-STANDARD.md`
   - automated checks, device checks, evidence, gates
5. `05-MDCA-DOCUMENTATION-AND-COMMUNICATION-STANDARD.md`
   - release documents, status language, links, conversation commands
6. `06-MDCA-PRODUCT-AND-UI-STANDARDS.md`
   - durable application behavior and visual rules
7. `07-MDCA-CURRENT-STATUS.md`
   - current baseline, rollback, live file set, runtime identities
8. `08-MDCA-DECISION-AND-CHANGE-LOG.md`
   - amendments, rationale, baseline history
9. `09-MDCA-NEW-CONVERSATION-HANDOFF.md`
   - minimum context for continuing work
10. `10-MDCA-ARCHITECTURE-AND-CODING-STANDARDS.md`
    - implementation architecture, data contracts, coding rules,
      security, accessibility, performance, and refactoring controls

## Canonical Use

- The Charter governs interpretation.
- Release and repository policy belongs in documents 02 through 05.
- Durable product behavior belongs in document 06.
- Mutable release facts belong only in document 07.
- Historical rationale belongs only in document 08.
- Conversation bootstrap guidance belongs in document 09.
- Implementation architecture and coding rules belong only in document 10.
- The Handoff must be regenerated whenever Current Status or operational
  rules change.

These governance files are separate from the production application's
required 10-file deployment package. Adding governance files or new
runtime files to the application root requires an explicit governance
amendment.

## 2026-09-25-1721 Governance Update

Artifact filenames now require a live-obtained `YYYY-MM-DD-HHMM` timestamp in
24-hour U.S. Eastern Time. The timezone is governed and is not appended to the
filename.
