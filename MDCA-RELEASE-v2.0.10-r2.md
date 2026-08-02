# MDCA Release Record v2.0.10-r2

**Application:** My Diet Coke Addiction  
**Release:** v2.0.10-r2  
**Status:** Release candidate  
**Scope:** Entry Screen field-layout correction  
**Active verified baseline:** `v2.0.9-r3-VERIFIED`  
**Canonical baseline archive:** `MDCA-v2.0.9-r3-VERIFIED-DOCFIX1.zip`  
**Rejected candidate:** `v2.0.10-r1`  
**Candidate archive:** `MDCA-v2.0.10-r2-RC.zip`  
**Candidate SHA-256:** Recorded externally  
**Build timestamp:** 2026-08-01T18:30:00-05:00

## Reason for Revision

Device testing rejected r1 because Date and Time overlapped Ounces, the three
controls did not share a standard height, Date did not use `MM/DD/YY`, and
the Caffeine `mg` suffix was pinned to the right edge.

## Corrected Layout

- Date, Time, and Ounces remain three equal-width columns.
- All three visible fields are 46 pixels high.
- Date and Time use controlled displays over native picker inputs.
- Date displays as `MM/DD/YY`.
- Time retains 12-hour display.
- Ounces and Name are centered.
- Caffeine is centered as an inline number followed by `mg`.

## Data Preservation

The native Date input continues to store `YYYY-MM-DD`. The native Time input
continues to store `HH:MM`. Entry persistence, editing, validation, reports,
import/export, automatic Caffeine scaling, and the storage schema are
unchanged.

## Release Identity

- visible version: `v2.0.10-r2`;
- export version: `2.0.10`;
- export revision: `r2`;
- backup prefix: `MDCA-backup-v2.0.10-`;
- cache: `MDCA-v2.0.10-r2`;
- reload key: `MDCA-sw-reload-v2.0.10-r2`.

## Changed Files

- `README.md`
- `MDCA-README-v2.0.10-r2.md`
- `MDCA-RELEASE-v2.0.10-r2.md`
- `index.html`
- `service-worker.js`

## Preserved Files

`manifest.json` and all four icon files remain byte-for-byte unchanged.

## Device Verification Required

Verify visual fit, Date and Time pickers, centered values, automatic Caffeine
scaling, all three Entry modes, Save and history, offline operation, data
integrity, and owner approval.
