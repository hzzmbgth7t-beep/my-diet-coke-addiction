# MDCA README v2.0.12-r1

**Document version:** v2.0.12-r1  
**Application:** My Diet Coke Addiction  
**Status:** Release candidate  
**Feature scope:** Yesterday’s Totals summary on Reports  
**Active verified baseline:** `v2.0.11-r3-VERIFIED`  
**Canonical baseline archive:** `MDCA-v2.0.11-r3-VERIFIED.zip`  
**Canonical baseline SHA-256:** `0f076a21e138346b171f5fbc55ed4a7bc6a6c717afb6b92a626c999c493e68b0`  
**Immediate rollback baseline:** `v2.0.11-r3-VERIFIED`  
**Previous rollback baseline:** `v2.0.10-r4-VERIFIED`  
**Candidate archive:** `MDCA-v2.0.12-r1-RC.zip`  
**Candidate SHA-256:** Recorded in `MDCA-v2.0.12-r1-RC.zip.sha256`  
**Build timestamp:** 2026-08-02T15:09:00-05:00

## URLs

**Repository:** https://github.com/hzzmbgth7t-beep/my-diet-coke-addiction

**Live application:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/

**Candidate verification URL:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?v=2.0.12-r1

The active verified production baseline remains `v2.0.11-r3-VERIFIED`
until this exact candidate passes device verification and owner approval.

## Release Scope

The Reports page now begins with a separate informational container titled
**Yesterday’s Totals**.

The new container copies the approved three-card Totals component used by
Home, Log Beverage, and report details.

It contains:

- Carbonated: yesterday’s rounded whole-number ounces plus inline `oz`;
- Caffeinated: yesterday’s rounded whole-number ounces plus inline `oz`;
- Caffeine: yesterday’s rounded whole-number milligrams plus inline `mg`.

Values are calculated dynamically from entries belonging to the previous
local calendar day. No reference-image values are hard-coded.

The summary contains no navigation action because the existing Yesterday
Quick Report directly below it opens the detailed report.

## Reports Page Order

The Reports page displays:

1. Yesterday’s Totals
2. Quick Reports
   - Yesterday
   - Last Week
   - Last Month
3. Custom Reports
   - Custom Day
   - Custom Week
   - Custom Month

All six existing report buttons, labels, descriptions, and destinations are
unchanged.

## Refresh Behavior

Yesterday’s Totals refreshes whenever:

- the Reports page opens;
- an entry is saved or edited;
- an entry is copied;
- an entry is deleted;
- backup data is imported;
- the app initializes.

This prevents the summary from retaining stale values.

## Preserved Features

The release retains:

- all six detailed report types;
- Totals and Servings calculations;
- compact custom-report selectors;
- Caffeine Stats;
- Drink Breakdown;
- Report Entries;
- Home, Log Beverage, Settings, and navigation behavior;
- storage, import, export, and recovery;
- service-worker update and offline behavior;
- manifest and icon assets.

## Verification

Completed:

- controlled verified-baseline archive checksum verification;
- new container placement and page-order checks;
- shared three-card class and geometry checks;
- dynamic previous-day filtering and rounding checks;
- current-day exclusion checks;
- automatic refresh checks;
- all-six-report button preservation checks;
- report-detail structure and formula regression;
- 320-, 375-, 390-, 414-, and 430-pixel viewport checks;
- JavaScript and service-worker syntax checks;
- release-identity and flat-package checks;
- manifest and icon byte-preservation checks.

Still required:

- Safari and installed Home Screen visual review;
- real-data Yesterday’s Totals review;
- Yesterday report comparison;
- all-six-report navigation regression;
- offline and data-integrity regression;
- explicit owner approval.

## Package

The candidate contains exactly 10 complete flat root-level files:

1. `README.md`
2. `MDCA-README-v2.0.12-r1.md`
3. `MDCA-RELEASE-v2.0.12-r1.md`
4. `index.html`
5. `manifest.json`
6. `service-worker.js`
7. `icon.png`
8. `apple-touch-icon.png`
9. `icon-192.png`
10. `icon-512.png`

The two README files are byte-for-byte identical.

## Recovery

On failure, restore all 10 files from `MDCA-v2.0.11-r3-VERIFIED.zip`, activate its
verified service worker, and verify Safari, the installed Home Screen app,
saved data, Reports, and offline launch.
