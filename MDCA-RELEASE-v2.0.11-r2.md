# MDCA Release Record v2.0.11-r2

**Application:** My Diet Coke Addiction  
**Release:** v2.0.11-r2  
**Status:** Release candidate  
**Scope:** Custom-report selector sizing correction  
**Active verified baseline:** `v2.0.10-r4-VERIFIED`  
**Canonical baseline archive:** `MDCA-v2.0.10-r4-VERIFIED.zip`  
**Canonical baseline SHA-256:** `7af7c4b8872f69133d2a99b9ca0caf11978d67d9500bcd84807d26492183df82`  
**Rejected candidate:** `v2.0.11-r1`  
**Candidate archive:** `MDCA-v2.0.11-r2-RC.zip`  
**Candidate SHA-256:** Recorded externally  
**Build timestamp:** 2026-08-02T10:48:00-05:00

## Reason for Revision

Physical-device review showed the Custom Day date field wider and taller
than its containing card. The shared Custom Week and Custom Month selector
structure had the same risk.

r1 is rejected. r2 replaces it with a shared constrained selector style.

## Selector Correction

Custom Day, Custom Week, and Custom Month now use:

- a 46-pixel standard field height;
- a 16-pixel font and 24-pixel line height;
- centered labels and values;
- width constrained to the card-content area;
- zero minimum width to override native intrinsic sizing;
- maximum width of 100 percent;
- parent overflow containment.

The native input types remain `date`, `week`, and `month`.

## Preserved Release Scope

The r1 Totals and Servings redesign is retained unchanged for all six report
types.

No calculation, report range, entry list, navigation, storage, import/export,
or offline behavior was intentionally changed.

## Release Identity

- visible version: `v2.0.11-r2`;
- export version: `2.0.11`;
- export revision: `r2`;
- backup prefix: `MDCA-backup-v2.0.11-`;
- service-worker cache: `MDCA-v2.0.11-r2`;
- reload key: `MDCA-sw-reload-v2.0.11-r2`.

## Changed Files

- `README.md`;
- `MDCA-README-v2.0.11-r2.md`;
- `MDCA-RELEASE-v2.0.11-r2.md`;
- `index.html`;
- `service-worker.js`.

## Preserved Files

These remain byte-for-byte identical to r1:

- `manifest.json`;
- `icon.png`;
- `apple-touch-icon.png`;
- `icon-192.png`;
- `icon-512.png`.

## Device Verification Required

Verify all three custom selectors, native picker interaction, all six report
types, Totals, Servings, Caffeine Stats, Drink Breakdown, Report Entries,
navigation, offline behavior, data integrity, and owner approval.
