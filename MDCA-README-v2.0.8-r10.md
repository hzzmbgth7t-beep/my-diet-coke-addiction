# MDCA README v2.0.8-r10

**Document version:** v2.0.8-r10  
**Application:** My Diet Coke Addiction  
**Status:** Release candidate  
**Active verified production baseline:** v2.0.8-r6  
**Rollback baseline:** v2.0.7-r2  
**Immediate build source:** `MDCA-v2.0.8-r9-RC.zip`  
**Immediate build-source SHA-256:** `8b2e29b0a5ac227a846faee63906f8f6ee4fd499d2bd47ca1d204177e171e393`  
**Canonical verified baseline archive:** `MDCA-v2.0.8-r6-VERIFIED.zip`  
**Canonical baseline SHA-256:** `4eb09dbacf4b2620000ca0cd6baee0024a6ed5a4dd6fd4da84f90ff73b343d73`  
**Baseline provenance:** RESOLVED — canonical operational baseline

## Quick Launch

**Live application:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/

**Candidate cache-buster:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?v=2.0.8-r10

The candidate URL becomes valid only after r10 is deployed. Until promotion is completed, v2.0.8-r6 remains the active verified production baseline.

## Approved Scope

v2.0.8-r10 supersedes the undeployed r9 candidate and makes only these evidence-alignment changes:

- D012: replace stale r9 provenance statements with the resolved canonical r6 baseline archive and checksum;
- update visible, export, reload-key, cache, and current-version documentation identities from r9 to r10.

All r7, r8, and r9 maintenance corrections are retained. No page-layout change, product feature, data-schema change, manifest change, icon change, report-logic change, import-logic change, or unrelated refactoring is included.

## Baseline Provenance

The controlling r6 operational baseline is:

- archive: `MDCA-v2.0.8-r6-VERIFIED.zip`;
- SHA-256: `4eb09dbacf4b2620000ca0cd6baee0024a6ed5a4dd6fd4da84f90ff73b343d73`;
- status: canonical verified operational baseline.

The canonical archive is a byte-for-byte filename copy of the uploaded r6 deployment-source archive. Its provenance resolution and per-file manifests are maintained as external evidence and are not included in the 10-file application root.

## Package

The release candidate contains exactly 10 flat root-level files:

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

`README.md` and `MDCA-README-v2.0.8-r10.md` are byte-for-byte identical when packaged.

## Verification Status

The exact packaged r10 candidate passed:

- the controlled import suite: 10 of 10 tests and 91 of 91 observations;
- the remaining automated Gate B logic suite: 11 of 11 tests and 118 of 118 observations;
- JavaScript syntax, flat-package, identity, source-scope, README-identity, preserved-file, and checksum controls.

The external r10 evidence bundle records the final candidate checksum and individual observations. No r9 test result is reused as r10 evidence.

r10 is authorized for controlled repository deployment. Production promotion remains blocked until update-from-r6, Safari, Home Screen, offline, production-data-preservation, and owner-approval checks pass against the exact deployed r10 state.

See `MDCA-RELEASE-v2.0.8-r10.md` for scope, deployment, promotion, and rollback controls.
