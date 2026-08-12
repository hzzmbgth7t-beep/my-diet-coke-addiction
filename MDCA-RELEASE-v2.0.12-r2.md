# MDCA Release Record v2.0.12-r2-RC

**Application:** My Diet Coke Addiction  
**Release:** v2.0.12-r2  
**Status:** Release candidate — not verified  
**Scope:** Security, external-boundary, storage, image, and service-worker hardening  
**Source baseline:** `v2.0.12-r1-VERIFIED`  
**Source archive SHA-256:** `32c744c80a648d27ef1419c68ca7319e1a5e6f06f0cde70f292a7b3ab22007e9`  
**Candidate archive:** `MDCA-v2.0.12-r2-RC.zip`  
**Candidate SHA-256:** Recorded in `MDCA-v2.0.12-r2-RC.zip.sha256`  
**Immediate rollback baseline:** `v2.0.11-r3-VERIFIED`  
**Owner approval:** Pending

## Decision

This package is an RC only. `v2.0.12-r1-VERIFIED` remains the active
verified production baseline until all acceptance gates and explicit owner
approval pass.

## Runtime Identity

- visible version: `v2.0.12-r2`
- export version: `2.0.12`
- export revision: `r2`
- service-worker cache: `MDCA-v2.0.12-r2`
- reload key: `MDCA-sw-reload-v2.0.12-r2`

## Changed Runtime Files

- `index.html`
- `service-worker.js`

## Preserved Runtime Assets

- `manifest.json`
- `icon.png`
- `apple-touch-icon.png`
- `icon-192.png`
- `icon-512.png`

## Documentation

- `README.md`
- `MDCA-README-v2.0.12-r2.md`
- `MDCA-RELEASE-v2.0.12-r2.md`

## Verification

Local automated verification and checksums are supplied as external build
evidence. Repository verification and physical-device acceptance remain
required and UNVERIFIED.
