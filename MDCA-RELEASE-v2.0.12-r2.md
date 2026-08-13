# MDCA Release Record v2.0.12-r2-RC

**Application:** My Diet Coke Addiction  
**Status:** Release candidate — not verified production  
**Source baseline:** `v2.0.12-r1-VERIFIED`  
**Source SHA-256:** `32c744c80a648d27ef1419c68ca7319e1a5e6f06f0cde70f292a7b3ab22007e9`  
**Candidate archive:** `MDCA-v2.0.12-r2-RC.zip`  
**Candidate SHA-256:** Recorded externally in `MDCA-v2.0.12-r2-RC.zip.sha256`  
**Immediate rollback:** `v2.0.11-r3-VERIFIED`  
**Built:** 2026-08-12

## URLs

**Repository:** https://github.com/hzzmbgth7t-beep/my-diet-coke-addiction

**Live application:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/

**Cache Buster:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?cb=v2.0.12-r2-RC

## Scope

Behavior-preserving hardening only:

- safe dynamic entry action dispatch;
- entry/beverage validation at external boundaries;
- storage mirror integrity and recovery behavior;
- transactional import/persistence protection;
- bounded local-only beverage image handling;
- service-worker navigation cache integrity.

## Preserved

- report/date/calculation algorithms;
- user-visible application architecture and navigation;
- storage keys and compatible backup structures;
- `manifest.json`;
- `icon.png`;
- `apple-touch-icon.png`;
- `icon-192.png`;
- `icon-512.png`;
- flat 10-file deployment topology.

## Promotion Status

This is an RC. Repository verification, deployed cache-buster verification,
physical Safari/Home Screen tests, offline/update tests, and explicit owner
approval remain required before `-VERIFIED` promotion.

## Recovery

`v2.0.12-r1-VERIFIED` remains the active verified baseline.
Immediate rollback remains `v2.0.11-r3-VERIFIED`.
