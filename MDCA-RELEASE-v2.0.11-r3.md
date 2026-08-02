# MDCA Release Record v2.0.11-r3

**Application:** My Diet Coke Addiction  
**Release:** v2.0.11-r3  
**Status:** Release candidate  
**Scope:** Compact custom-report selectors  
**Active verified baseline:** `v2.0.10-r4-VERIFIED`  
**Canonical baseline archive:** `MDCA-v2.0.10-r4-VERIFIED.zip`  
**Canonical baseline SHA-256:** `7af7c4b8872f69133d2a99b9ca0caf11978d67d9500bcd84807d26492183df82`  
**Rejected candidates:** `v2.0.11-r1`, `v2.0.11-r2`  
**Candidate archive:** `MDCA-v2.0.11-r3-RC.zip`  
**Candidate SHA-256:** Recorded externally  
**Build timestamp:** 2026-08-02T14:15:00-05:00

## Reason for Revision

r2 removed selector overflow, but device review found the native selector
field and its card substantially larger than their content required.

r3 replaces the visible native rendering with a compact display field and a
transparent native picker overlay.

## Selector Configuration

Custom Day, Custom Week, and Custom Month now share:

- 220-pixel maximum width;
- responsive width up to 100 percent of available content space;
- 46-pixel field height;
- centered 16-pixel display text;
- compact card padding;
- content-driven card height;
- native picker input covering the visible field.

The platform controls retain their native input types:

- `date`;
- `week`;
- `month`.

## Preserved Release Scope

The report Totals and Servings design and formulas remain unchanged across
all six report types.

No report range, calculation, entry-list, navigation, storage, import/export,
or offline behavior was intentionally changed.

## Release Identity

- visible version: `v2.0.11-r3`;
- export version: `2.0.11`;
- export revision: `r3`;
- backup prefix: `MDCA-backup-v2.0.11-`;
- service-worker cache: `MDCA-v2.0.11-r3`;
- reload key: `MDCA-sw-reload-v2.0.11-r3`.

## Changed Files

- `README.md`;
- `MDCA-README-v2.0.11-r3.md`;
- `MDCA-RELEASE-v2.0.11-r3.md`;
- `index.html`;
- `service-worker.js`.

## Preserved Files

These remain byte-for-byte identical to r2:

- `manifest.json`;
- `icon.png`;
- `apple-touch-icon.png`;
- `icon-192.png`;
- `icon-512.png`.

## Device Verification Required

Verify compact sizing, all three native pickers, all six reports, Totals,
Servings, Caffeine Stats, Drink Breakdown, Report Entries, navigation,
offline behavior, data integrity, and owner approval.
