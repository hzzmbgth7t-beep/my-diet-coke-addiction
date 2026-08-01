# MDCA Release Record v2.0.8-r10

**Document version:** v2.0.8-r10  
**Application:** My Diet Coke Addiction  
**Release type:** Maintenance-only evidence-alignment revision  
**Status:** Release candidate  
**Build timestamp:** 2026-07-31T20:27:00-05:00  
**Active verified production baseline:** v2.0.8-r6  
**Rollback baseline:** v2.0.7-r2  
**Immediate build source:** `MDCA-v2.0.8-r9-RC.zip`  
**Immediate build-source SHA-256:** `8b2e29b0a5ac227a846faee63906f8f6ee4fd499d2bd47ca1d204177e171e393`  
**Canonical verified baseline archive:** `MDCA-v2.0.8-r6-VERIFIED.zip`  
**Canonical baseline SHA-256:** `4eb09dbacf4b2620000ca0cd6baee0024a6ed5a4dd6fd4da84f90ff73b343d73`  
**Baseline provenance:** RESOLVED — canonical operational baseline  
**Candidate archive:** `MDCA-v2.0.8-r10-RC.zip`

## Reason for Revision

The exact r9 candidate passed its automated suites, but its current-version documentation still stated that r6 baseline provenance was **UNVERIFIED**. Canonical r6 provenance was resolved after the r9 checksum was locked.

Editing r9 would have invalidated its evidence and silently replaced an already tested candidate. r10 therefore supersedes r9 with current provenance statements and a new release identity.

## Approved Correction

### D012 — Provenance evidence alignment

- identify `MDCA-v2.0.8-r6-VERIFIED.zip` as the canonical r6 operational baseline;
- record canonical r6 SHA-256 `4eb09dbacf4b2620000ca0cd6baee0024a6ed5a4dd6fd4da84f90ff73b343d73`;
- remove stale claims that r6 provenance is unresolved;
- retain r6 as the active verified production baseline until r10 completes Gate C and owner promotion.

### Release identity

- visible application label: `MDCA · Version 2.0.8-r10`;
- export version: `2.0.8`;
- export revision: `r10`;
- reload key: `MDCA-sw-reload-v2.0.8-r10`;
- service-worker cache: `MDCA-v2.0.8-r10`;
- cache-buster: `?v=2.0.8-r10`.

## Retained Corrections

The r10 candidate retains:

- the single validated transactional import path;
- exact imported beverage added-count reporting;
- impossible ISO calendar-date rejection;
- persistence rollback protection;
- file-read and storage-failure recovery;
- ISO week validation and boundaries;
- safe previous-calendar-month boundaries;
- Custom Day inclusion through `23:59:59.999`;
- user-controlled service-worker activation;
- MDCA-scoped cache cleanup.

## Changed Files

Relative to the exact r9 candidate:

- `index.html` — release identity only;
- `service-worker.js` — cache identity only;
- `README.md`;
- `MDCA-README-v2.0.8-r10.md`;
- `MDCA-RELEASE-v2.0.8-r10.md`.

## Byte-Preserved Files

The following files are byte-for-byte identical to the exact r9 candidate:

- `manifest.json`;
- `icon.png`;
- `apple-touch-icon.png`;
- `icon-192.png`;
- `icon-512.png`.

Except for required release-identity replacements, application logic in `index.html` is byte-for-byte inherited from r9.

## Package Contents

Exactly 10 flat root-level files:

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

No folder, prior-version document, test fixture, development checklist, or redundant release record is included.

## Automated Verification Results

The exact final r10 archive passed:

### Import suite

- 10 of 10 tests;
- 91 of 91 observations;
- IV-01 through IV-07;
- exact import counts, impossible-date rejection, malformed-file recovery, unsupported-structure recovery, transactional rollback, and file-read failure recovery.

### Remaining Gate B logic suite

- 11 of 11 tests;
- 118 of 118 observations;
- PV-01 through PV-03;
- EV-01 through EV-03;
- DV-01 through DV-03;
- GR-01 and GR-02.

### Static controls

- exact flat 10-file package;
- byte-identical README files;
- JavaScript syntax PASS;
- r10 operational identities PASS;
- r9 logic retained except required release-identity replacements;
- manifest and four icons preserved byte-for-byte;
- resolved r6 provenance recorded without a stale current-state conflict.

The external evidence bundle records the final candidate checksum and individual observations. No PASS from another candidate checksum is reused.

## Controlled Deployment Gate

The candidate is authorized only for controlled repository deployment. Production promotion still requires:

1. export and checksum a current production-data backup;
2. replace the repository root with the exact r10 10-file state;
3. verify normal and cache-buster URLs serve r10;
4. verify update-from-r6 behavior and exactly one activation reload;
5. verify Safari browser and iOS/iPadOS Home Screen workflows;
6. verify offline launch and persistence;
7. verify production data remains intact;
8. obtain owner approval;
9. create `MDCA-v2.0.8-r10-VERIFIED.zip` from the verified deployed state.

## Rollback

If a Blocking deployment or runtime check fails:

1. stop promotion;
2. preserve failure evidence;
3. restore the canonical r6 10-file state from `MDCA-v2.0.8-r6-VERIFIED.zip`;
4. verify visible r6 identity and existing data;
5. retain v2.0.7-r2 as the designated rollback baseline;
6. create a new revision for any additional correction.

Do not modify or silently replace the verified r6 archive or any already tested candidate.
