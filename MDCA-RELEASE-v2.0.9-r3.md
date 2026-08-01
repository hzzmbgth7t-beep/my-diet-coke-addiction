# MDCA Release Record v2.0.9-r3

**Application:** My Diet Coke Addiction  
**Release:** v2.0.9-r3  
**Status:** Verified production  
**Active verified baseline:** `v2.0.9-r3-VERIFIED`  
**Immediate rollback baseline:** `v2.0.8-r10-VERIFIED`  
**Promotion timestamp:** 2026-08-01T08:45:00-05:00  
**Tested RC:** `MDCA-v2.0.9-r3-RC.zip`  
**Tested RC SHA-256:** `c65910f3307d69a8a8f6c087cf66c9813c5748e45dce2c1ce697892349e0ed69`  
**Canonical verified archive:** `MDCA-v2.0.9-r3-VERIFIED-DOCFIX1.zip`  
**Canonical archive SHA-256:** Recorded externally in the matching `.sha256` file  
**Superseded archive:** `MDCA-v2.0.9-r3-VERIFIED.zip`  
**Superseded archive SHA-256:** `6cc68ec6ae5356634b96e8c8510820f64f33300fe76ef64a2491e2bcd72a01f3`  
**Documentation correction:** `DOCFIX1` at 2026-08-01T13:06:00-05:00

## Promotion Decision

**Gate C: PASS**  
**Owner approval: APPROVED**

The owner reported that all Safari, Home Screen, unlimited-beverage,
navigation, import/export, data-integrity, and offline tests completed
successfully. Promotion was explicitly approved on 2026-08-01T08:45:00-05:00.

## Documentation Correction

`DOCFIX1` corrects a stale post-promotion paragraph that instructed
the owner to perform a repository upload which had already been completed.

This is a documentation-only correction. No runtime file, asset, release
identity, verification result, baseline designation, or rollback designation
changed.

The original verified archive is superseded only as the canonical
documentation package. Its seven operational and asset files remain the
verified runtime files.

## Production Changes

- simplified Home header;
- redesigned three-card daily totals;
- removed Home section headings and beverage instructions;
- moved Manage Beverages, Quick Entry, and Data Tools into Settings;
- placed Settings and Reports beneath saved beverages;
- removed the six-beverage rendering limit;
- displayed every saved beverage in stored order;
- preserved two-column beverage layout on phone and iPad.

## Release Identity

- visible version: `v2.0.9-r3`;
- export version: `2.0.9`;
- export revision: `r3`;
- backup filename prefix: `MDCA-backup-v2.0.9-`;
- service-worker cache: `MDCA-v2.0.9-r3`;
- reload key: `MDCA-sw-reload-v2.0.9-r3`.

## Verification Evidence

Completed:

- 63/63 automated candidate checks;
- repository root and r3 identity review;
- Safari visual and functional testing;
- installed Home Screen visual and functional testing;
- adding a beverage beyond position six;
- reload persistence;
- editing and deleting beverages;
- Settings and Reports navigation;
- import/export and data-integrity checks;
- offline launch and persistence;
- explicit owner approval.

The final verified archive changes only the three documentation files.
`index.html`, `manifest.json`, `service-worker.js`, and all four icon files
remain byte-for-byte identical to the tested RC.

## Baselines

- active verified baseline: `v2.0.9-r3-VERIFIED`;
- immediate rollback baseline: `v2.0.8-r10-VERIFIED`;
- previous historical verified archive: `MDCA-v2.0.8-r6-VERIFIED.zip`;
- legacy rollback baseline: `v2.0.7-r2`.

v2.0.9-r1 and v2.0.9-r2 remain rejected candidates.

## Repository Status

The verified-production repository finalization upload was completed before
this documentation correction.

Upload of the corrected documentation package replaces the stale release
record only. The supplied 10-file sync root preserves every operational file
and asset byte-for-byte.
