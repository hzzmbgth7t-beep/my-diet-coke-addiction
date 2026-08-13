# MDCA README v2.0.12-r4

## URLs

**Repository:** https://github.com/hzzmbgth7t-beep/my-diet-coke-addiction

**Live application:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/

**Cache Buster:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?cb=v2.0.12-r4

**Document version:** v2.0.12-r4  
**Application:** My Diet Coke Addiction  
**Status:** Approved production release  
**Scope:** Reports page Quick/Custom two-column layout  
**Active production baseline:** `v2.0.12-r4`  
**Canonical archive:** `MDCA-v2.0.12-r4.zip`  
**Canonical SHA-256:** Recorded externally in `MDCA-v2.0.12-r4.zip.sha256`  
**Source candidate:** `v2.0.12-r4-RC`  
**Source candidate SHA-256:** `43cfc938765dfeac750b149c9f923b3ffc4be3c3df8cc5c4f8957fe27597600d`  
**Immediate rollback baseline:** `v2.0.12-r3-VERIFIED`  
**Immediate rollback archive:** `MDCA-v2.0.12-r3-VERIFIED.zip`  
**Immediate rollback SHA-256:** `e3e66b174ad4877b2be17f51fa22061646311558200331d40d9491e59b6d64cf`  
**Previous rollback baseline:** `v2.0.12-r2-VERIFIED`  
**Owner approval:** Accepted after complete owner testing on 2026-08-13  
**Promoted:** 2026-08-13

## Production Scope

The Reports page uses a paired two-column report-selection layout:

| Quick Reports | Custom Reports |
|---|---|
| Yesterday | Custom Day |
| Last Week | Custom Week |
| Last Month | Custom Month |

Each button occupies one half of its row. The prior standalone Custom Reports
section is removed.

All six report destinations and report logic remain unchanged.

## Acceptance Record

The owner reported complete testing and accepted `v2.0.12-r4-RC` on 2026-08-13.

## Version Identity Convention

Any non-production build must display its complete suffix or descriptor in-app.

Approved production releases use only the version/revision with no status
suffix. Therefore this release displays `v2.0.12-r4`.

The `-VERIFIED` designation is not used for new production release identities,
filenames, README titles, or normal release terminology. Historical releases
retain their original historical names.

Data Tools displays the same complete visible identity.

## Promotion Integrity

Promotion changes documentation plus the specifically authorized visible
identity only:

- `v2.0.12-r4-RC` → `v2.0.12-r4`

The tested Reports layout, report logic, calculations, storage behavior,
Entries behavior, service-worker behavior, manifest, and icons are otherwise
unchanged from the accepted RC.

Runtime identities:

- visible production version: `v2.0.12-r4`
- export version: `2.0.12`
- export revision: `r4`
- backup prefix: `MDCA-backup-v2.0.12-`
- service-worker cache: `MDCA-v2.0.12-r4`
- reload key: `MDCA-sw-reload-v2.0.12-r4`

## Package

The production archive contains exactly 10 complete flat production files.

## Recovery

Immediate rollback remains the historical `v2.0.12-r3-VERIFIED` package.
