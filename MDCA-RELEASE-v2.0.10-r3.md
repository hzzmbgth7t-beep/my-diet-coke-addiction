# MDCA Release Record v2.0.10-r3

**Application:** My Diet Coke Addiction  
**Release:** v2.0.10-r3  
**Status:** Release candidate  
**Scope:** Shared Home and Entry totals-card correction  
**Active verified baseline:** `v2.0.9-r3-VERIFIED`  
**Canonical baseline archive:** `MDCA-v2.0.9-r3-VERIFIED-DOCFIX1.zip`  
**Canonical baseline SHA-256:** `5de930b57377b220989a48a54a1d648746ae88b1656cbd21b8b701eded9d851f`  
**Rejected candidates:** `v2.0.10-r1`, `v2.0.10-r2`  
**Candidate archive:** `MDCA-v2.0.10-r3-RC.zip`  
**Candidate SHA-256:** Recorded externally  
**Build timestamp:** 2026-08-01T19:55:00-05:00

## Reason for Revision

r2 corrected the Entry field geometry. Device review then found:

- Carbonated and Caffeinated values did not visually match Caffeine;
- Home labels crowded each other;
- Home values did not include the same units as Log Beverage;
- Home Caffeine still displayed `/ 400`.

r2 remains rejected. r3 is the replacement Entry Screen candidate.

## Shared Totals Component

Home and Log Beverage now use the same card classes and CSS rules.

Each screen displays:

1. Carbonated — rounded total plus `oz`;
2. Caffeinated — rounded total plus `oz`;
3. Caffeine — rounded total plus `mg`.

All three values use the same computed font family, size, weight, line height,
black color, and centering. No displayed value is hard-coded.

The Home Caffeine card contains no `/ 400` value.

## Preserved Entry Fields

The r2 Date, Time, Ounces, Name, and Caffeine field correction is retained
without layout or behavior changes.

## Release Identity

- visible version: `v2.0.10-r3`;
- export version: `2.0.10`;
- export revision: `r3`;
- backup prefix: `MDCA-backup-v2.0.10-`;
- service-worker cache: `MDCA-v2.0.10-r3`;
- reload key: `MDCA-sw-reload-v2.0.10-r3`.

## Changed Files

- `README.md`
- `MDCA-README-v2.0.10-r3.md`
- `MDCA-RELEASE-v2.0.10-r3.md`
- `index.html`
- `service-worker.js`

## Preserved Files

These remain byte-for-byte identical to r2:

- `manifest.json`;
- `icon.png`;
- `apple-touch-icon.png`;
- `icon-192.png`;
- `icon-512.png`.

## Device Verification Required

Verify Home and Log Beverage totals, narrow-screen labels, dynamic values,
Entry fields, all three Entry modes, Save and history, offline operation,
data integrity, and owner approval.
