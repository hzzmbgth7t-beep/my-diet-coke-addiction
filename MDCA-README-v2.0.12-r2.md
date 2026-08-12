# MDCA README v2.0.12-r2-RC

**Document version:** v2.0.12-r2-RC  
**Application:** My Diet Coke Addiction  
**Status:** Release candidate — device testing and owner approval required  
**Scope:** Behavior-preserving security, data-boundary, and service-worker hardening  
**Active verified baseline:** `v2.0.12-r1-VERIFIED`  
**Canonical baseline archive:** `MDCA-v2.0.12-r1-VERIFIED.zip`  
**Canonical baseline SHA-256:** `32c744c80a648d27ef1419c68ca7319e1a5e6f06f0cde70f292a7b3ab22007e9`  
**Immediate rollback baseline:** `v2.0.11-r3-VERIFIED`  
**Immediate rollback SHA-256:** `0f076a21e138346b171f5fbc55ed4a7bc6a6c717afb6b92a626c999c493e68b0`  
**Candidate:** `v2.0.12-r2`  
**Candidate archive:** `MDCA-v2.0.12-r2-RC.zip`  
**Candidate SHA-256:** Recorded in `MDCA-v2.0.12-r2-RC.zip.sha256`  
**Built:** 2026-08-07  
**Owner approval:** Pending

## URLs

**Repository:** https://github.com/hzzmbgth7t-beep/my-diet-coke-addiction

**Live application:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/

`v2.0.12-r1-VERIFIED` remains the active verified production baseline until
`v2.0.12-r2` passes repository verification, required physical-device tests,
and explicit owner approval.

## Candidate Scope

`v2.0.12-r2` hardens existing boundaries without redesigning MDCA.

- Dynamic entry actions use inert `data-*` metadata instead of inline JavaScript handlers.
- Entry and beverage records are validated and canonicalized at storage/import boundaries.
- Invalid storage mirrors are not rewritten automatically; a valid compatibility mirror is used when available.
- Imported beverage records are constructed only from supported fields.
- Beverage images are restricted to local JPEG, PNG, or WebP data and bounded by file size, encoded data size, and dimensions before new persistence.
- Unsafe stored beverage image sources are blocked from rendering without rewriting the stored value.
- Import remains transactional and validates records before persistence.
- Service-worker navigation caching accepts only successful same-origin responses.

## Explicitly Preserved

- 10-file static PWA architecture
- no runtime dependencies or external services
- existing storage keys
- current backup envelope and approved legacy entry aliases
- all calculation and serving formulas
- Reports order and date behavior
- Add/Edit/Copy/Delete behavior
- navigation stack, Back, Home, and unsaved-change prompts
- Safari/Home Screen separation
- offline/update architecture
- manifest and all four icon assets

No broad `renderReport()` refactor, totals optimization, UI redesign, source
reformat, or new feature is included in this candidate.

## Image Policy

New or imported beverage images are limited by named policy constants:

- maximum source file: 500 KiB
- maximum dimensions: 1024 × 1024 pixels
- maximum decoded persisted image data: 700 KiB
- supported raster formats: JPEG, PNG, WebP

Invalid images are rejected or blocked without overwriting an existing saved
beverage.

## Runtime Identity

- visible version: `v2.0.12-r2`
- export version: `2.0.12`
- export revision: `r2`
- backup prefix: `MDCA-backup-v2.0.12-`
- service-worker cache: `MDCA-v2.0.12-r2`
- reload key: `MDCA-sw-reload-v2.0.12-r2`

## Verification Status

Completed local verification is recorded in the external build-evidence
artifact accompanying the candidate.

Still required before promotion:

- repository upload and live repository verification
- physical-device Safari testing
- installed Home Screen testing
- offline/update testing on device
- real-data import/export confirmation
- explicit owner approval

Automated PASS does not promote this RC to `-VERIFIED`.

## Package

The candidate archive contains exactly 10 complete flat root files.
`README.md` and `MDCA-README-v2.0.12-r2.md` are byte-for-byte identical.

## Recovery

If the candidate fails any acceptance gate, keep
`v2.0.12-r1-VERIFIED` active. Restore `v2.0.11-r3-VERIFIED` only if rollback
from the active verified baseline itself is required.
