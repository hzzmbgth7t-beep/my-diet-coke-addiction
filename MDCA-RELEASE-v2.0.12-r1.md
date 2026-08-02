# MDCA Release Record v2.0.12-r1

**Application:** My Diet Coke Addiction  
**Release:** v2.0.12-r1  
**Status:** Release candidate  
**Scope:** Yesterday’s Totals summary on Reports  
**Active verified baseline:** `v2.0.11-r3-VERIFIED`  
**Canonical baseline archive:** `MDCA-v2.0.11-r3-VERIFIED.zip`  
**Canonical baseline SHA-256:** `0f076a21e138346b171f5fbc55ed4a7bc6a6c717afb6b92a626c999c493e68b0`  
**Candidate archive:** `MDCA-v2.0.12-r1-RC.zip`  
**Candidate SHA-256:** Recorded externally  
**Build timestamp:** 2026-08-02T15:09:00-05:00

## Approved Change

A new independent **Yesterday’s Totals** container appears first on the
Reports page.

It uses the same shared three-card component as the report-detail Totals row:

1. Carbonated — rounded yesterday ounces plus `oz`;
2. Caffeinated — rounded yesterday ounces plus `oz`;
3. Caffeine — rounded yesterday milligrams plus `mg`.

The values are dynamically calculated from the previous local calendar day.

## Page Order

The existing Quick Reports and Custom Reports containers follow the new
summary without changes.

Quick Reports retains:

- Yesterday;
- Last Week;
- Last Month.

Custom Reports retains:

- Custom Day;
- Custom Week;
- Custom Month.

## Refresh Rules

The summary updates when Reports opens and when entry data changes through
save, edit, copy, delete, or import operations.

## Release Identity

- visible version: `v2.0.12-r1`;
- export version: `2.0.12`;
- export revision: `r1`;
- backup prefix: `MDCA-backup-v2.0.12-`;
- service-worker cache: `MDCA-v2.0.12-r1`;
- reload key: `MDCA-sw-reload-v2.0.12-r1`.

## Changed Files

- `README.md`;
- `MDCA-README-v2.0.12-r1.md`;
- `MDCA-RELEASE-v2.0.12-r1.md`;
- `index.html`;
- `service-worker.js`.

## Preserved Files

These remain byte-for-byte identical to `v2.0.11-r3-VERIFIED`:

- `manifest.json`;
- `icon.png`;
- `apple-touch-icon.png`;
- `icon-192.png`;
- `icon-512.png`.

## Device Verification Required

Verify the new summary, its comparison to the detailed Yesterday report,
all six report buttons, navigation, offline operation, data integrity, and
owner approval.
