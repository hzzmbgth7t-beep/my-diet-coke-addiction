# MDCA New Conversation Handoff

Continue development of My Diet Coke Addiction using this governance package as
the canonical operating standard.

**Repository:** https://github.com/hzzmbgth7t-beep/my-diet-coke-addiction  
**Live app:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/  
**Production Cache Buster:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?cb=v2.0.12-r4  
**Current approved production baseline:** `v2.0.12-r4`  
**Canonical archive:** `MDCA-v2.0.12-r4.zip`  
**Canonical SHA-256:** `36309845a7abe421958732f4c02e8ca45a78740389d2f8a9f70e22e3fea981dd`  
**Immediate rollback:** historical `v2.0.12-r3-VERIFIED`  
**Immediate rollback SHA-256:** `e3e66b174ad4877b2be17f51fa22061646311558200331d40d9491e59b6d64cf`

## Required Rules

- Read the complete governance package before release work.
- Before any repository-state claim, perform a fresh live verification of the
  current repository.
- Never use cached pages, archived/indexed results, previous fetches, or stale
  listings as evidence of current repository state.
- If a fresh live directory listing is unavailable, do not infer the root file
  count.
- Ask for explicit owner approval before making repository changes when write
  access is available.
- Build only from the canonical approved production archive after SHA-256
  verification.
- Every production/candidate package contains exactly 10 complete flat root
  files.
- README and versioned README are byte-identical.
- Put `## URLs` at the top/near the beginning (target line 3) and include
  Repository, Live Application, and a revision-specific Cache Buster URL.
- Use complete replacement files, never snippets.
- Automated PASS does not replace required device testing.
- Production promotion requires explicit owner approval.
- Non-production builds display their complete suffix/descriptor in-app.
- Approved production builds display only the version/revision, with no status
  suffix. Do not use `-VERIFIED` for new production releases.
- Historical `-VERIFIED` releases retain their historical names/checksums.
- Data Tools displays the same complete visible version identity.
- Local ZIPs are not proof of live repository state.
- Do not claim exact live byte equivalence unless computed.
- Lettered options must be complete actions or complete user states.
- Do not require a second acknowledgment after a selected option. For external
  owner actions, include a directly selectable completion-state option.
- The owner primarily operates MDCA as an installed Home Screen app.

- Every newly generated artifact filename must include `YYYY-MM-DD-HHMM`, where
  `HHMM` is 24-hour U.S. Eastern Time obtained from a live/system time source at
  creation time. Never guess or reuse a prior time. Do not append `-ET`; the
  timezone is defined by governance. Historical filenames remain unchanged.

## Current Approved Release

`v2.0.12-r4` is the approved production release.

Reports uses one paired two-column selection card:

- Quick Reports | Custom Reports
- Yesterday | Custom Day
- Last Week | Custom Week
- Last Month | Custom Month

The old standalone Custom Reports section is removed. All six report
destinations remain unchanged.

The owner reported complete r4 testing and accepted the candidate on
2026-08-13.

The current production application identity is `v2.0.12-r4`.

## Existing Product Standards

- Reports begins with Yesterday's Totals.
- The paired report-selection section follows Yesterday's Totals.
- Entries remains below report selection.
- Home Entries shows the current local day's records.
- Reports Entries shows the previous local day's records.
- Entries bars share Show/Hide scrolling behavior.
- Hide Entries collapses and returns the page to the top.
- Preserve approved totals, servings, navigation, storage, import/export,
  beverage handling, offline behavior, manifest, and icons unless explicitly
  in scope.

## Implementation Standard

Before modifying `index.html`, `service-worker.js`, storage behavior,
calculations, application structure, or shared components, read
`10-MDCA-ARCHITECTURE-AND-CODING-STANDARDS.md`.

The dependency-free static PWA and 10-file deployment topology remain the
approved architecture unless the owner explicitly approves a migration.
