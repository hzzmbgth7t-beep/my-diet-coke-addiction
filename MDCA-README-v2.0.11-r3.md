# MDCA README v2.0.11-r3-VERIFIED

**Document version:** v2.0.11-r3-VERIFIED  
**Application:** My Diet Coke Addiction  
**Status:** Verified production baseline  
**Feature scope:** Report Totals, Servings, and compact custom selectors  
**Active verified baseline:** `v2.0.11-r3-VERIFIED`  
**Canonical baseline archive:** `MDCA-v2.0.11-r3-VERIFIED.zip`  
**Canonical baseline SHA-256:** Recorded in `MDCA-v2.0.11-r3-VERIFIED.zip.sha256`  
**Immediate rollback baseline:** `v2.0.10-r4-VERIFIED`  
**Immediate rollback archive:** `MDCA-v2.0.10-r4-VERIFIED.zip`  
**Immediate rollback SHA-256:** `7af7c4b8872f69133d2a99b9ca0caf11978d67d9500bcd84807d26492183df82`  
**Previous rollback baseline:** `v2.0.9-r3-VERIFIED`  
**Rejected candidates:** `v2.0.11-r1`, `v2.0.11-r2`  
**Approved candidate:** `v2.0.11-r3`  
**Source candidate archive:** `MDCA-v2.0.11-r3-RC.zip`  
**Source candidate SHA-256:** `bd247c67e2c70ea5106c82182a5ae26e8444ed11969a4752f9c73dd9fcfc3637`  
**Owner approval:** 2026-08-02T14:49:00-05:00

## URLs

**Repository:** https://github.com/hzzmbgth7t-beep/my-diet-coke-addiction

**Live application:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/

`v2.0.11-r3-VERIFIED` is the active verified production baseline.

## Verified Release Scope

This release standardizes report summaries and adds compact custom-report
selectors.

### Totals

Yesterday, Last Week, Last Month, Custom Day, Custom Week, and Custom Month
use the same three-card design as Home and Log Beverage:

- Carbonated: rounded whole ounces plus inline `oz`;
- Caffeinated: rounded whole ounces plus inline `oz`;
- Caffeine: rounded whole milligrams plus inline `mg`;
- no `/ 400`;
- no right-pinned unit.

### Servings

All six reports include a three-card Servings row:

- Carbonated: carbonated ounces divided by 12 and rounded to the nearest 0.5;
- Caffeinated: caffeine milligrams divided by 53 and rounded to a whole number;
- Clear: clear ounces divided by 12 and rounded to the nearest 0.5.

### Compact Custom Selectors

Custom Day, Custom Week, and Custom Month use:

- a centered visible field;
- a maximum width of 220 pixels;
- an exact 46-pixel height;
- compact content-driven card height;
- formatted display values;
- transparent native `date`, `week`, and `month` picker overlays.

Visible formats are:

- `Aug 1, 2026`;
- `Week 31, 2026`;
- `August 2026`.

## Preserved Features

The release retains:

- Home, Log Beverage, Settings, and navigation behavior;
- Caffeine Stats;
- Drink Breakdown;
- Report Entries;
- saved-beverage entry, Quick Entry, and entry editing;
- local-storage keys and data schema;
- import, export, and recovery;
- service-worker update and offline behavior;
- manifest and icon assets.

## Verification Record

Automated release-candidate verification completed with **181/181 PASS**.

The automated verification covered:

- 320-, 375-, 390-, 414-, and 430-pixel viewports;
- compact selector width, height, centering, and containment;
- native picker overlay geometry and native input types;
- all-six-report structure;
- Totals and Servings calculations;
- JavaScript and service-worker syntax;
- release identity and package integrity;
- manifest and icon preservation.

The owner completed physical-device review of the compact Custom Day, Custom
Week, and Custom Month selectors and approved the candidate at
`2026-08-02T14:49:00-05:00`.

## Promotion Integrity

Promotion from `v2.0.11-r3` to `v2.0.11-r3-VERIFIED` changes documentation
only.

These files are byte-for-byte identical to the approved r3 candidate:

- `index.html`;
- `manifest.json`;
- `service-worker.js`;
- `icon.png`;
- `apple-touch-icon.png`;
- `icon-192.png`;
- `icon-512.png`.

Runtime identities remain:

- visible version: `v2.0.11-r3`;
- export version: `2.0.11`;
- export revision: `r3`;
- backup prefix: `MDCA-backup-v2.0.11-`;
- service-worker cache: `MDCA-v2.0.11-r3`;
- reload key: `MDCA-sw-reload-v2.0.11-r3`.

## Package

The canonical verified archive contains exactly 10 complete flat root files:

1. `README.md`
2. `MDCA-README-v2.0.11-r3.md`
3. `MDCA-RELEASE-v2.0.11-r3.md`
4. `index.html`
5. `manifest.json`
6. `service-worker.js`
7. `icon.png`
8. `apple-touch-icon.png`
9. `icon-192.png`
10. `icon-512.png`

The two README files are byte-for-byte identical.

## Recovery

On failure, restore all 10 files from `MDCA-v2.0.10-r4-VERIFIED.zip`, activate
its verified service worker, and verify Safari, the installed Home Screen
app, saved data, Reports, and offline launch.
