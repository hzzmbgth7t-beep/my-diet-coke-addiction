# MDCA README v2.0.12-r3-VERIFIED

## URLs

**Repository:** https://github.com/hzzmbgth7t-beep/my-diet-coke-addiction

**Live application:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/

**Cache Buster:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?cb=v2.0.12-r3-VERIFIED

**Document version:** v2.0.12-r3-VERIFIED  
**Application:** My Diet Coke Addiction  
**Status:** Verified production baseline  
**Scope:** Shared Entries sections and standardized Entries scrolling  
**Active verified baseline:** `v2.0.12-r3-VERIFIED`  
**Canonical archive:** `MDCA-v2.0.12-r3-VERIFIED.zip`  
**Canonical SHA-256:** Recorded externally in `MDCA-v2.0.12-r3-VERIFIED.zip.sha256`  
**Source candidate:** `v2.0.12-r3-RC`  
**Source candidate SHA-256:** `73706f95d243e84df78e5f45a9e6c1b0d58111f4f038e3447cc6a0eb15227df6`  
**Immediate rollback baseline:** `v2.0.12-r2-VERIFIED`  
**Immediate rollback SHA-256:** `5945ca62bfae7170bc99b44c5789be06b3cda777f010d5ccffa98a54b09db27d`  
**Previous rollback baseline:** `v2.0.12-r1-VERIFIED`  
**Owner approval:** Approved 2026-08-12  
**Promoted:** 2026-08-12

## Verified Scope

- Home Entries shows the current local day's entries.
- Reports Entries shows the previous local day's entries.
- Reports order is Yesterday's Totals, Quick Reports, Custom Reports, Entries.
- Entries bars use shared rendering, toggle, and scrolling behavior.
- Show Entries exposes the complete panel when possible; oversized panels align the bar to the viewport top.
- Hide Entries collapses the panel and scrolls the page to the top.
- Existing entry Edit/Copy/Delete behavior is preserved.
- Data Tools displays the complete in-app version identity.

## Acceptance Record

Home Screen acceptance completed **8/8 PASS** for the r3 feature scope:

- Home Entries;
- Reports Entries;
- long-panel scrolling;
- Home Entries CRUD;
- Reports Entries CRUD;
- existing Entries bars;
- Data Tools version identity;
- offline/reconnection behavior.

Explicit owner approval for promotion was granted on 2026-08-12.

## Version Identity Convention

Non-production builds display their complete suffix or descriptor in-app.
Release candidates display `-RC`.

Verified production builds display only the actual version/revision, with no
`-VERIFIED` suffix. Therefore this verified release displays `v2.0.12-r3`.

Data Tools displays the same complete visible identity.

## Promotion Integrity

Promotion changes documentation plus the specifically authorized visible
identity only:

- `v2.0.12-r3-RC` → `v2.0.12-r3`

No feature logic, calculations, storage behavior, report behavior, service
worker behavior, manifest, or icon assets are changed during promotion.

Runtime identities:

- visible production version: `v2.0.12-r3`
- export version: `2.0.12`
- export revision: `r3`
- backup prefix: `MDCA-backup-v2.0.12-`
- service-worker cache: `MDCA-v2.0.12-r3`
- reload key: `MDCA-sw-reload-v2.0.12-r3`

## Package

The verified archive contains exactly 10 complete flat production files.

## Recovery

Immediate rollback is `v2.0.12-r2-VERIFIED`.
Previous rollback is `v2.0.12-r1-VERIFIED`.
