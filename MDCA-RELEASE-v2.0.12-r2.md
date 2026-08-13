# MDCA Release Record v2.0.12-r2-VERIFIED

**Application:** My Diet Coke Addiction  
**Status:** Verified production baseline  
**Runtime identity:** `v2.0.12-r2`  
**Verified designation:** `v2.0.12-r2-VERIFIED`  
**Canonical archive:** `MDCA-v2.0.12-r2-VERIFIED.zip`  
**Canonical SHA-256:** Recorded externally in `MDCA-v2.0.12-r2-VERIFIED.zip.sha256`  
**Source candidate archive:** `MDCA-v2.0.12-r2-RC.zip`  
**Source candidate SHA-256:** `d4907a448f0abd1812c1d9775aabaa8371733d0a79fd4832099b3815d6068780`  
**Immediate rollback:** `v2.0.12-r1-VERIFIED`  
**Rollback SHA-256:** `32c744c80a648d27ef1419c68ca7319e1a5e6f06f0cde70f292a7b3ab22007e9`  
**Previous rollback:** `v2.0.11-r3-VERIFIED`  
**Owner approval:** Approved 2026-08-12  
**Promoted:** 2026-08-12

## URLs

**Repository:** https://github.com/hzzmbgth7t-beep/my-diet-coke-addiction

**Live application:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/

**Cache Buster:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?cb=v2.0.12-r2-VERIFIED

## Scope

Behavior-preserving hardening:

- safe dynamic entry action dispatch;
- entry/beverage validation at external boundaries;
- storage mirror integrity and recovery behavior;
- transactional import/persistence protection;
- bounded local-only beverage image handling;
- service-worker navigation cache integrity.

## Verification

- local automated/source verification: PASS;
- Home Screen device acceptance: **15/15 PASS**;
- backup export/import round trip: PASS;
- offline launch: PASS;
- reconnect/controller stability: PASS;
- final data-integrity review: PASS;
- explicit owner promotion approval: PASS.

## Promotion Integrity

Promotion changes documentation only. Runtime and asset files are byte-for-byte
identical to the approved candidate.

## Recovery

Immediate rollback is `v2.0.12-r1-VERIFIED`.
Previous rollback is `v2.0.11-r3-VERIFIED`.
