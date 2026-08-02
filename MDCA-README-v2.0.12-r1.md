# MDCA README v2.0.12-r1-VERIFIED

**Document version:** v2.0.12-r1-VERIFIED  
**Application:** My Diet Coke Addiction  
**Status:** Verified production baseline  
**Feature scope:** Yesterday’s Totals summary on Reports  
**Active verified baseline:** `v2.0.12-r1-VERIFIED`  
**Canonical baseline archive:** `MDCA-v2.0.12-r1-VERIFIED.zip`  
**Canonical baseline SHA-256:** Recorded in `MDCA-v2.0.12-r1-VERIFIED.zip.sha256`  
**Immediate rollback baseline:** `v2.0.11-r3-VERIFIED`  
**Immediate rollback archive:** `MDCA-v2.0.11-r3-VERIFIED.zip`  
**Immediate rollback SHA-256:** `0f076a21e138346b171f5fbc55ed4a7bc6a6c717afb6b92a626c999c493e68b0`  
**Previous rollback baseline:** `v2.0.10-r4-VERIFIED`  
**Approved candidate:** `v2.0.12-r1`  
**Source candidate archive:** `MDCA-v2.0.12-r1-RC.zip`  
**Source candidate SHA-256:** `80d92e854383daa7b7577ad764c3c060f9be5ab0e044e3eddee037bb26920f48`  
**Owner approval:** 2026-08-02T16:08:00-05:00

## URLs

**Repository:** https://github.com/hzzmbgth7t-beep/my-diet-coke-addiction

**Live application:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/

`v2.0.12-r1-VERIFIED` is the active verified production baseline.

## Verified Release Scope

The Reports page begins with a separate informational **Yesterday’s Totals**
container using the shared three-card Totals design.

- Carbonated: previous-day rounded whole ounces plus inline `oz`
- Caffeinated: previous-day rounded whole ounces plus inline `oz`
- Caffeine: previous-day rounded whole milligrams plus inline `mg`

The Reports page order remains:

1. Yesterday’s Totals
2. Quick Reports
3. Custom Reports

All six report destinations remain unchanged.

## Verification Record

Automated candidate verification completed with **58/58 PASS**.

Owner device testing passed for:

- Yesterday’s Totals appearance and values
- comparison with the detailed Yesterday report
- Reports navigation
- Safari and installed Home Screen operation

Owner approval was recorded at `2026-08-02T16:08:00-05:00`.

## Promotion Integrity

Promotion changes documentation only. These files remain byte-for-byte
identical to the approved candidate:

- `index.html`
- `manifest.json`
- `service-worker.js`
- `icon.png`
- `apple-touch-icon.png`
- `icon-192.png`
- `icon-512.png`

Runtime identities remain:

- visible version: `v2.0.12-r1`
- export version: `2.0.12`
- export revision: `r1`
- backup prefix: `MDCA-backup-v2.0.12-`
- service-worker cache: `MDCA-v2.0.12-r1`
- reload key: `MDCA-sw-reload-v2.0.12-r1`

## Package

The canonical verified archive contains exactly 10 complete flat root files.

## Recovery

Restore `MDCA-v2.0.11-r3-VERIFIED.zip` if rollback is required.
