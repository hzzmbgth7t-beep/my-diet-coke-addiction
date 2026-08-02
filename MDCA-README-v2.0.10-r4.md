# MDCA README v2.0.10-r4-VERIFIED

**Document version:** v2.0.10-r4-VERIFIED  
**Application:** My Diet Coke Addiction  
**Status:** Verified production baseline  
**Feature scope:** Home Quick Entry and shared navigation headers  
**Active verified baseline:** `v2.0.10-r4-VERIFIED`  
**Canonical baseline archive:** `MDCA-v2.0.10-r4-VERIFIED.zip`  
**Canonical baseline SHA-256:** Recorded in `MDCA-v2.0.10-r4-VERIFIED.zip.sha256`  
**Immediate rollback baseline:** `v2.0.9-r3-VERIFIED`  
**Immediate rollback archive:** `MDCA-v2.0.9-r3-VERIFIED-DOCFIX1.zip`  
**Immediate rollback SHA-256:** `5de930b57377b220989a48a54a1d648746ae88b1656cbd21b8b701eded9d851f`  
**Previous rollback baseline:** `v2.0.8-r10-VERIFIED`  
**Rejected candidates:** `v2.0.10-r1`, `v2.0.10-r2`, `v2.0.10-r3`  
**Approved candidate:** `v2.0.10-r4`  
**Source candidate archive:** `MDCA-v2.0.10-r4-RC.zip`  
**Source candidate SHA-256:** `02e1141ddd32bcb630568b28d62e0c6a4ac2f594be300822de23d77942d48fa3`  
**Owner approval:** 2026-08-01T20:48:00-05:00

## URLs

**Repository:** https://github.com/hzzmbgth7t-beep/my-diet-coke-addiction

**Live application:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/

`v2.0.10-r4-VERIFIED` is the active verified production baseline.

## Verified Release Scope

The approved release moves Quick Entry to Home and standardizes navigation
across every non-Home screen.

### Home Actions

Home contains one equal three-column action row:

1. Settings
2. Quick Entry
3. Reports

All three buttons have matching color, shape, size, font, alignment, and
spacing. Quick Entry uses two lines and opens Log Beverage directly from
Home.

### Shared Navigation Headers

Every non-Home screen has:

- Back on the left;
- a mathematically centered page name;
- a solid house icon on the right only when the screen is more than one Back
  action from Home.

Settings displays `v2.0.10-r4` beneath its centered title.

### Navigation and Form Safety

The navigation stack preserves the actual preceding screen.

- Back returns to the preceding screen.
- Home resets navigation and returns directly to Home.
- Back and Home both request confirmation before discarding modified Log
  Beverage or Beverage Setup forms.
- Cancel preserves the form and current navigation path.
- Confirm completes the requested navigation.

### Preserved Features

The release retains:

- shared Home and Log Beverage totals cards;
- rounded Carbonated, Caffeinated, and Caffeine values;
- corrected Date, Time, Ounces, Name, and Caffeine fields;
- saved-beverage entry, Quick Entry, and entry editing;
- unlimited saved beverages;
- reports and calculations;
- import, export, and recovery;
- local-storage keys and data schema;
- service-worker update and offline behavior;
- manifest and icon assets.

## Verification Record

Automated release-candidate verification completed with **64/64 PASS**.

Owner device testing completed successfully for:

- Safari;
- the installed Home Screen app;
- Home actions and shared navigation headers;
- Back and Home behavior;
- unsaved-change confirmations;
- Entry and Beverage Setup workflows;
- Reports and Data Tools;
- offline operation;
- data integrity.

Owner approval was recorded at `2026-08-01T20:48:00-05:00`.

## Promotion Integrity

Promotion from `v2.0.10-r4` to `v2.0.10-r4-VERIFIED` changes documentation
only.

These files are byte-for-byte identical to the approved r4 candidate:

- `index.html`;
- `manifest.json`;
- `service-worker.js`;
- `icon.png`;
- `apple-touch-icon.png`;
- `icon-192.png`;
- `icon-512.png`.

Runtime identities remain:

- visible version: `v2.0.10-r4`;
- export version: `2.0.10`;
- export revision: `r4`;
- service-worker cache: `MDCA-v2.0.10-r4`;
- reload key: `MDCA-sw-reload-v2.0.10-r4`.

## Package

The canonical verified archive contains exactly 10 complete flat root files:

1. `README.md`
2. `MDCA-README-v2.0.10-r4.md`
3. `MDCA-RELEASE-v2.0.10-r4.md`
4. `index.html`
5. `manifest.json`
6. `service-worker.js`
7. `icon.png`
8. `apple-touch-icon.png`
9. `icon-192.png`
10. `icon-512.png`

The two README files are byte-for-byte identical.

## Recovery

On failure, restore all 10 files from
`MDCA-v2.0.9-r3-VERIFIED-DOCFIX1.zip`, activate its verified service worker, and
verify Safari, the installed Home Screen app, saved data, Reports, and
offline launch.
