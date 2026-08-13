# MDCA Release Record v2.0.12-r3-VERIFIED

**Application:** My Diet Coke Addiction  
**Status:** Verified production baseline  
**Runtime identity:** `v2.0.12-r3`  
**Verified designation:** `v2.0.12-r3-VERIFIED`  
**Source candidate:** `v2.0.12-r3-RC`  
**Source candidate SHA-256:** `73706f95d243e84df78e5f45a9e6c1b0d58111f4f038e3447cc6a0eb15227df6`  
**Immediate rollback:** `v2.0.12-r2-VERIFIED`  
**Rollback SHA-256:** `5945ca62bfae7170bc99b44c5789be06b3cda777f010d5ccffa98a54b09db27d`  
**Owner approval:** Approved 2026-08-12

## URLs

**Repository:** https://github.com/hzzmbgth7t-beep/my-diet-coke-addiction

**Live application:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/

**Cache Buster:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?cb=v2.0.12-r3-VERIFIED

## Verification

Home Screen r3 acceptance: **8/8 PASS**.

Promotion removes the `-RC` suffix from visible in-app identity. No
`-VERIFIED` suffix is displayed in production. All other runtime feature logic
remains identical to the approved RC.

## Recovery

Immediate rollback: `v2.0.12-r2-VERIFIED`.
