# MDCA README v2.0.8-r10

**Document version:** v2.0.8-r10  
**Application:** My Diet Coke Addiction  
**Status:** Verified production release  
**Active verified production baseline:** v2.0.8-r10  
**Previous verified production baseline:** v2.0.8-r6  
**Designated rollback baseline:** v2.0.7-r2  
**Promotion source:** `MDCA-v2.0.8-r10-RC.zip`  
**Promotion-source SHA-256:** `8f3ba1e81b127f856812f45995bb5ca6306dbefa1235643ffae9ccaca5fb122d`  
**Verified archive:** `MDCA-v2.0.8-r10-VERIFIED.zip`  
**Verified archive SHA-256:** Recorded in the external `.sha256` file  
**Gate C:** PASS  
**Owner promotion approval:** APPROVED  
**Promotion timestamp:** 2026-07-31T22:38:00-05:00

## Quick Launch

**Live application:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/

**Release cache-buster:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?v=2.0.8-r10

The deployed Safari page and Home Screen application were owner-confirmed as displaying v2.0.8-r10.

## Release Scope

v2.0.8-r10 is the verified production culmination of the v2.0.8 maintenance line. It retains the approved maintenance corrections completed through r10:

- validated transactional import with rollback protection;
- exact import added, duplicate, and rejected counts;
- impossible ISO calendar-date rejection;
- export feedback and release identity;
- date/time validation and timestamp preservation;
- ISO week boundaries;
- safe previous-calendar-month boundaries;
- Custom Day inclusion through `23:59:59.999`;
- user-controlled service-worker activation;
- MDCA-scoped cache cleanup;
- resolved r6 provenance evidence;
- consistent r10 visible, export, reload-key, cache, and documentation identities.

No page-layout change, product feature, data-schema change, manifest change, icon change, or unrelated refactoring is included.

## Verification

The exact r10 release candidate passed:

- import suite: 10 of 10 tests and 91 of 91 observations;
- remaining Gate B suite: 11 of 11 tests and 118 of 118 observations;
- combined automated verification: 21 of 21 tests and 209 of 209 observations;
- static, syntax, package, identity, preserved-file, and checksum controls.

Gate C passed based on:

- live r10 deployment identity;
- Safari update and activation;
- Home Screen launch and persistence;
- offline launch and persistence;
- test-entry cleanup;
- totals and data-integrity confirmation;
- post-verification backup;
- explicit owner approval.

The deployment commit identifier was not included in the supplied evidence and remains **UNVERIFIED**. This does not alter the observed live identity or owner-confirmed Gate C result.

## Package

The verified release contains exactly 10 flat root-level files:

1. `README.md`
2. `MDCA-README-v2.0.8-r10.md`
3. `MDCA-RELEASE-v2.0.8-r10.md`
4. `index.html`
5. `manifest.json`
6. `service-worker.js`
7. `icon.png`
8. `apple-touch-icon.png`
9. `icon-192.png`
10. `icon-512.png`

`README.md` and `MDCA-README-v2.0.8-r10.md` are byte-for-byte identical.

All operational and asset files are byte-for-byte identical to the tested r10 release candidate. Only the three current-version documentation files changed during promotion.

## Baseline and Recovery

The active verified production baseline is v2.0.8-r10.

The previous verified production archive remains:

- `MDCA-v2.0.8-r6-VERIFIED.zip`
- SHA-256: `4eb09dbacf4b2620000ca0cd6baee0024a6ed5a4dd6fd4da84f90ff73b343d73`

The designated rollback baseline remains v2.0.7-r2.

Preserve the r10 release-candidate archive, r10 verified archive, r6 verified archive, checksums, Gate C record, and external verification evidence.
