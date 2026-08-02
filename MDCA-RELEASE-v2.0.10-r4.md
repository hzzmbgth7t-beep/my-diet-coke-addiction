# MDCA Release Record v2.0.10-r4-VERIFIED

**Application:** My Diet Coke Addiction  
**Release:** v2.0.10-r4  
**Baseline designation:** `v2.0.10-r4-VERIFIED`  
**Status:** Verified production baseline  
**Scope:** Home Quick Entry and shared navigation headers  
**Canonical archive:** `MDCA-v2.0.10-r4-VERIFIED.zip`  
**Canonical SHA-256:** Recorded externally  
**Source candidate:** `MDCA-v2.0.10-r4-RC.zip`  
**Source candidate SHA-256:** `02e1141ddd32bcb630568b28d62e0c6a4ac2f594be300822de23d77942d48fa3`  
**Immediate rollback baseline:** `v2.0.9-r3-VERIFIED`  
**Immediate rollback archive:** `MDCA-v2.0.9-r3-VERIFIED-DOCFIX1.zip`  
**Immediate rollback SHA-256:** `5de930b57377b220989a48a54a1d648746ae88b1656cbd21b8b701eded9d851f`  
**Owner approval:** 2026-08-01T20:48:00-05:00

## Promotion Decision

The owner reported all device tests successful and explicitly approved
`v2.0.10-r4` for promotion.

The candidate is promoted to the active verified production baseline:
`v2.0.10-r4-VERIFIED`.

## Verified Changes

### Home

Home displays equal Settings, Quick Entry, and Reports buttons. Quick Entry
uses a two-line label and is no longer located in Settings.

### Shared Headers

Every non-Home screen displays Back on the left and a centered page name.
A solid house icon appears on deeper navigation paths and returns directly to
Home.

### Navigation Safety

Back follows the actual navigation path. Back and Home both protect modified
Log Beverage and Beverage Setup forms with a discard confirmation.

### Settings

Settings is centered in the shared header and displays `v2.0.10-r4` instead
of the former description.

## Verification

Automated candidate verification: **64/64 PASS**.

Owner device verification: **PASS**.

Verified areas include Safari, installed Home Screen operation, Home actions,
headers, Back/Home navigation, unsaved-change prompts, Entry and Beverage
workflows, Reports, Data Tools, offline operation, and data integrity.

## Runtime Identity

- visible version: `v2.0.10-r4`;
- export version: `2.0.10`;
- export revision: `r4`;
- backup prefix: `MDCA-backup-v2.0.10-`;
- service-worker cache: `MDCA-v2.0.10-r4`;
- reload key: `MDCA-sw-reload-v2.0.10-r4`.

## Promotion Changes

Documentation changed:

- `README.md`;
- `MDCA-README-v2.0.10-r4.md`;
- `MDCA-RELEASE-v2.0.10-r4.md`.

Runtime and assets remain byte-for-byte identical to the approved r4
candidate.
