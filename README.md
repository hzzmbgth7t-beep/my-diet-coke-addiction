# MDCA README v2.0.12-r2-VERIFIED

## URLs

**Repository:** https://github.com/hzzmbgth7t-beep/my-diet-coke-addiction

**Live application:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/

**Cache Buster:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?cb=v2.0.12-r2-VERIFIED

**Document version:** v2.0.12-r2-VERIFIED  
**Application:** My Diet Coke Addiction  
**Status:** Verified production baseline  
**Scope:** Behavior-preserving security, data-boundary, storage, and service-worker hardening  
**Active verified baseline:** `v2.0.12-r2-VERIFIED`  
**Canonical archive:** `MDCA-v2.0.12-r2-VERIFIED.zip`  
**Canonical SHA-256:** Recorded externally in `MDCA-v2.0.12-r2-VERIFIED.zip.sha256`  
**Source candidate:** `v2.0.12-r2-RC`  
**Source candidate archive:** `MDCA-v2.0.12-r2-RC.zip`  
**Source candidate SHA-256:** `d4907a448f0abd1812c1d9775aabaa8371733d0a79fd4832099b3815d6068780`  
**Immediate rollback baseline:** `v2.0.12-r1-VERIFIED`  
**Rollback archive:** `MDCA-v2.0.12-r1-VERIFIED.zip`  
**Rollback SHA-256:** `32c744c80a648d27ef1419c68ca7319e1a5e6f06f0cde70f292a7b3ab22007e9`  
**Previous rollback baseline:** `v2.0.11-r3-VERIFIED`  
**Previous rollback SHA-256:** `0f076a21e138346b171f5fbc55ed4a7bc6a6c717afb6b92a626c999c493e68b0`  
**Promoted:** 2026-08-12  
**Owner approval:** Approved in conversation on 2026-08-12

## Verified Release Scope

`v2.0.12-r2` hardens existing boundaries without redesigning MDCA.

- Dynamic entry actions use inert `data-*` metadata instead of inline JavaScript handlers.
- Entry and beverage records are validated and canonicalized at storage/import boundaries.
- Invalid storage mirrors are not rewritten automatically; a valid compatibility mirror is used when available.
- Import remains transactional: failed persistence does not become authoritative in-memory state.
- Beverage images are restricted to bounded local raster data.
- Failed or cross-origin navigation responses cannot replace the known-good cached application shell.
- Existing calculations, date/report logic, navigation design, and storage keys are preserved.

## Verification Record

Home Screen physical-device acceptance completed **15/15 PASS**.

Verified device coverage included:

- startup and existing-data preservation;
- entry add, edit, copy, and delete;
- historical Selected Date actions;
- Reports and custom report navigation;
- Back/Home and unsaved-change handling;
- beverage editing and existing-image preservation;
- backup export/import round trip;
- offline Home Screen launch;
- reconnect/service-worker controller stability;
- final data-integrity review.

Owner approval for promotion was explicitly granted on 2026-08-12.

## Promotion Integrity

Promotion is documentation-only. These runtime/assets remain byte-for-byte
identical to the approved `v2.0.12-r2-RC` candidate:

- `index.html`
- `manifest.json`
- `service-worker.js`
- `icon.png`
- `apple-touch-icon.png`
- `icon-192.png`
- `icon-512.png`

Runtime identities remain:

- visible version: `v2.0.12-r2`
- export version: `2.0.12`
- export revision: `r2`
- backup prefix: `MDCA-backup-v2.0.12-`
- service-worker cache: `MDCA-v2.0.12-r2`
- reload key: `MDCA-sw-reload-v2.0.12-r2`

## Package

The verified archive contains exactly 10 complete flat root files.

The archive SHA-256 is stored externally because embedding an archive's own
final checksum inside that archive would change the bytes being hashed.

## Recovery

The immediate rollback baseline is `v2.0.12-r1-VERIFIED`.

If a rollback is required, restore the complete
`MDCA-v2.0.12-r1-VERIFIED.zip` package and verify application, data, and
offline behavior.
