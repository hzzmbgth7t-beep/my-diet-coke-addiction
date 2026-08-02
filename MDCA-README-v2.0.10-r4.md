# MDCA README v2.0.10-r4

**Document version:** v2.0.10-r4  
**Application:** My Diet Coke Addiction  
**Status:** Release candidate  
**Feature scope:** Home Quick Entry and shared navigation headers  
**Active verified baseline:** `v2.0.9-r3-VERIFIED`  
**Canonical baseline archive:** `MDCA-v2.0.9-r3-VERIFIED-DOCFIX1.zip`  
**Canonical baseline SHA-256:** `5de930b57377b220989a48a54a1d648746ae88b1656cbd21b8b701eded9d851f`  
**Immediate rollback baseline:** `v2.0.9-r3-VERIFIED`  
**Previous rollback baseline:** `v2.0.8-r10-VERIFIED`  
**Rejected candidates:** `v2.0.10-r1`, `v2.0.10-r2`, `v2.0.10-r3`  
**Candidate archive:** `MDCA-v2.0.10-r4-RC.zip`  
**Candidate SHA-256:** Recorded in `MDCA-v2.0.10-r4-RC.zip.sha256`  
**Build timestamp:** 2026-08-01T20:32:00-05:00

## URLs

**Repository:** https://github.com/hzzmbgth7t-beep/my-diet-coke-addiction

**Live application:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/

**Candidate verification URL:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?v=2.0.10-r4

The active verified production baseline remains `v2.0.9-r3-VERIFIED`
until the exact r4 candidate passes device verification and owner approval.

## Revision Scope

r4 moves Quick Entry back to Home and standardizes navigation on every
non-Home page. r3 remains rejected because its navigation and Quick Entry
placement were superseded before production promotion.

### Home Actions

Home displays one three-column row in this order:

1. Settings
2. Quick Entry
3. Reports

All three buttons use the same:

- equal-width grid column;
- 54-pixel minimum height;
- blue background;
- border radius;
- 18-pixel font;
- font weight;
- alignment and spacing.

Quick Entry uses two fixed lines:

`Quick`  
`Entry`

Quick Entry opens Log Beverage directly from Home. It is removed from
Settings.

### Shared Non-Home Header

Every non-Home page contains one shared header:

- Back is always on the left;
- the page name is mathematically centered;
- a solid house icon is on the right only when the current page is more than
  one Back action from Home.

The header is used by:

- Settings;
- Log Beverage;
- Beverage Setup;
- Reports;
- Report Detail;
- Data Tools.

Settings displays `v2.0.10-r4` beneath its centered page name. Its prior
description is removed.

### Navigation Rules

A navigation stack records the actual page path.

- Back returns to the actual preceding page.
- Home resets the stack and returns directly to Home.
- Home is hidden on pages one Back action from Home.
- Home is shown on deeper pages such as Report Detail, Data Tools, and
  Beverage Setup opened from Settings.
- Beverage Setup opened directly by a Home long-press does not show Home.

### Unsaved Changes

Back and Home both ask for confirmation before leaving modified forms on:

- Log Beverage;
- Beverage Setup.

No confirmation appears when the form has not changed or after a successful
save.

### Preserved Controls

r4 preserves:

- the shared Home and Entry totals cards;
- rounded `oz`, `oz`, and `mg` totals;
- the corrected Date, Time, Ounces, Name, and Caffeine fields;
- saved-beverage entry, Quick Entry, and entry editing;
- unlimited saved beverages;
- reports and calculations;
- import/export and recovery;
- local-storage keys and data schema;
- service-worker update and offline behavior;
- manifest and icon assets.

## Verification

Completed:

- live `main` r3 review before build;
- controlled r3 archive checksum verification;
- three-button Home geometry at 320, 375, 390, and 430 pixels;
- equal color, shape, size, typography, and non-overlap checks;
- fixed two-line Quick Entry check;
- shared header presence on all six non-Home pages;
- centered Settings title and r4 version check;
- navigation-depth Home visibility checks;
- actual-stack Back behavior checks;
- unsaved-change cancellation and acceptance checks for Entry and Beverage
  Setup;
- successful Entry and Beverage save-navigation checks;
- r3 Entry-field and totals-card preservation checks;
- JavaScript and service-worker syntax checks;
- release-identity and flat-package checks;
- manifest and icon byte-preservation checks.

Still required:

- Safari and installed Home Screen visual review;
- solid Home icon touch behavior;
- all Back paths and deep Home paths on device;
- unsaved-change confirmation on device;
- saved-beverage, Quick Entry, edit-entry, and Beverage Setup workflows;
- Reports, Data Tools, offline, and data-integrity regression;
- explicit owner approval.

## Package

The candidate contains exactly 10 complete flat root-level files:

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

## Deployment and Recovery

Deploy the complete 10-file candidate. On failure, restore all 10 files from
`MDCA-v2.0.9-r3-VERIFIED-DOCFIX1.zip`, activate the verified r3 service worker, and verify
Safari, the installed Home Screen app, saved data, Reports, and offline
launch.
