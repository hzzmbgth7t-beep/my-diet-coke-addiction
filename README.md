# MDCA README v2.0.12-r2-RC

## URLs

**Repository:** https://github.com/hzzmbgth7t-beep/my-diet-coke-addiction

**Live application:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/

**Cache Buster:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?cb=v2.0.12-r2-RC

**Document version:** v2.0.12-r2-RC  
**Application:** My Diet Coke Addiction  
**Status:** Release candidate — repository verification, device testing, and owner approval required  
**Scope:** Behavior-preserving security, data-boundary, storage, and service-worker hardening  
**Active verified baseline:** `v2.0.12-r1-VERIFIED`  
**Canonical baseline archive:** `MDCA-v2.0.12-r1-VERIFIED.zip`  
**Canonical baseline SHA-256:** `32c744c80a648d27ef1419c68ca7319e1a5e6f06f0cde70f292a7b3ab22007e9`  
**Immediate rollback baseline:** `v2.0.11-r3-VERIFIED`  
**Immediate rollback SHA-256:** `0f076a21e138346b171f5fbc55ed4a7bc6a6c717afb6b92a626c999c493e68b0`  
**Candidate:** `v2.0.12-r2`  
**Candidate archive:** `MDCA-v2.0.12-r2-RC.zip`  
**Candidate SHA-256:** Recorded externally in `MDCA-v2.0.12-r2-RC.zip.sha256`  
**Built:** 2026-08-12  
**Owner approval:** Pending

`v2.0.12-r1-VERIFIED` remains the active verified production baseline until
`v2.0.12-r2` passes repository verification, required physical-device tests,
and explicit owner approval.

## Candidate Scope

`v2.0.12-r2` hardens existing boundaries without redesigning MDCA.

- Dynamic entry actions use inert `data-*` metadata instead of inline JavaScript handlers.
- Entry and beverage records are validated and canonicalized at storage/import boundaries.
- Invalid storage mirrors are not rewritten automatically; a valid compatibility mirror is used when available.
- Import remains transactional: failed persistence does not become authoritative in-memory state.
- Beverage images are restricted to bounded local raster data.
- Failed or cross-origin navigation responses cannot replace the known-good cached application shell.
- Existing calculations, date/report logic, navigation design, and storage keys are preserved.

## Preserved Architecture

- Static dependency-free PWA
- Exactly 10 flat production files
- Inline application JavaScript and CSS
- Local-first `localStorage` persistence
- Existing five storage keys and backup compatibility
- Existing report and serving calculations
- Existing Safari and installed Home Screen workflows
- Existing manifest and icon assets

## Verification

Local automated/source verification is required before repository upload.

Still required before promotion:

- live repository verification;
- deployed cache-buster verification;
- Safari physical-device testing;
- installed Home Screen testing;
- offline/update testing;
- owner approval.

This document does not claim those gates have passed.

## Package

The RC archive contains exactly 10 complete flat root files.

The ZIP checksum is intentionally stored outside the ZIP. Embedding a ZIP's
own SHA-256 inside a file contained by that ZIP would change the archive and
invalidate that checksum.

## Recovery

The active verified baseline remains `v2.0.12-r1-VERIFIED`.

Restore `MDCA-v2.0.11-r3-VERIFIED.zip` if the immediate rollback baseline is required.
