# MDCA Release Record v2.0.11-r3-VERIFIED

**Application:** My Diet Coke Addiction  
**Release:** v2.0.11-r3  
**Baseline designation:** `v2.0.11-r3-VERIFIED`  
**Status:** Verified production baseline  
**Scope:** Report Totals, Servings, and compact custom selectors  
**Canonical archive:** `MDCA-v2.0.11-r3-VERIFIED.zip`  
**Canonical SHA-256:** Recorded externally  
**Source candidate:** `MDCA-v2.0.11-r3-RC.zip`  
**Source candidate SHA-256:** `bd247c67e2c70ea5106c82182a5ae26e8444ed11969a4752f9c73dd9fcfc3637`  
**Immediate rollback baseline:** `v2.0.10-r4-VERIFIED`  
**Immediate rollback archive:** `MDCA-v2.0.10-r4-VERIFIED.zip`  
**Immediate rollback SHA-256:** `7af7c4b8872f69133d2a99b9ca0caf11978d67d9500bcd84807d26492183df82`  
**Owner approval:** 2026-08-02T14:49:00-05:00

## Promotion Decision

The owner approved `v2.0.11-r3` after physical-device review.

The candidate is promoted to the active verified production baseline:
`v2.0.11-r3-VERIFIED`.

## Verified Changes

### Report Totals

All six report types use equal Carbonated, Caffeinated, and Caffeine cards
with rounded values and inline units.

### Servings

All six report types show Carbonated, Caffeinated, and Clear servings using
the approved 12-ounce and 53-milligram formulas.

### Compact Selectors

Custom Day, Custom Week, and Custom Month use centered 220-pixel maximum-width
fields, exact 46-pixel heights, compact cards, formatted visible values, and
transparent native picker overlays.

## Verification

Automated candidate verification: **181/181 PASS**.

Owner physical-device review and approval: **PASS**.

## Runtime Identity

- visible version: `v2.0.11-r3`;
- export version: `2.0.11`;
- export revision: `r3`;
- backup prefix: `MDCA-backup-v2.0.11-`;
- service-worker cache: `MDCA-v2.0.11-r3`;
- reload key: `MDCA-sw-reload-v2.0.11-r3`.

## Promotion Changes

Documentation changed:

- `README.md`;
- `MDCA-README-v2.0.11-r3.md`;
- `MDCA-RELEASE-v2.0.11-r3.md`.

Runtime and assets remain byte-for-byte identical to the approved r3
candidate.
