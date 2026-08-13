# MDCA README v2.0.12-r4-RC

## URLs

**Repository:** https://github.com/hzzmbgth7t-beep/my-diet-coke-addiction

**Live application:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/

**Cache Buster:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?cb=v2.0.12-r4-RC

**Document version:** v2.0.12-r4-RC  
**Application:** My Diet Coke Addiction  
**Status:** Release candidate — deployment/device testing and owner approval required  
**Scope:** Reports page Quick/Custom two-column layout  
**Active verified baseline:** `v2.0.12-r3-VERIFIED`  
**Canonical baseline archive:** `MDCA-v2.0.12-r3-VERIFIED.zip`  
**Canonical baseline SHA-256:** `e3e66b174ad4877b2be17f51fa22061646311558200331d40d9491e59b6d64cf`  
**Immediate rollback baseline:** `v2.0.12-r2-VERIFIED`  
**Immediate rollback SHA-256:** `5945ca62bfae7170bc99b44c5789be06b3cda777f010d5ccffa98a54b09db27d`  
**Candidate:** `v2.0.12-r4-RC`  
**Candidate archive:** `MDCA-v2.0.12-r4-RC.zip`  
**Candidate SHA-256:** Recorded externally in `MDCA-v2.0.12-r4-RC.zip.sha256`  
**Built:** 2026-08-12  
**Owner approval:** Pending

## Candidate Scope

The Reports page now uses one paired two-column report-selection section:

| Quick Reports | Custom Reports |
|---|---|
| Yesterday | Custom Day |
| Last Week | Custom Week |
| Last Month | Custom Month |

Each button occupies one half of its row. The previous standalone Custom Reports
section is removed.

All six existing report destinations and their report logic remain unchanged.

## Preserved Behavior

- Yesterday's Totals section
- Reports Entries section
- Report date/range calculations
- Serving formulas and Drink Breakdown
- Entry CRUD and shared Entries scrolling
- Storage/import/export contracts
- Beverage behavior
- Service-worker behavior except required r4 cache identity
- Manifest and icon assets
- Dependency-free static PWA architecture

## Version Identity

This RC displays `v2.0.12-r4-RC` in-app, including Data Tools.

Verified production will display `v2.0.12-r4` with no `-VERIFIED` suffix.

## Verification Status

Still required before promotion:

- fresh live repository verification after upload;
- Cache Buster deployment verification;
- Home Screen layout testing at device width;
- all six Reports navigation targets;
- Entries/offline smoke testing;
- explicit owner approval.

## Package

The RC contains exactly 10 complete flat production files.

## Recovery

The active verified baseline remains `v2.0.12-r3-VERIFIED`.
