# MDCA Release Record v2.0.12-r3-RC

**Application:** My Diet Coke Addiction  
**Status:** Release candidate — not verified production  
**Source baseline:** `v2.0.12-r2-VERIFIED`  
**Source baseline SHA-256:** `5945ca62bfae7170bc99b44c5789be06b3cda777f010d5ccffa98a54b09db27d`  
**Candidate archive:** `MDCA-v2.0.12-r3-RC.zip`  
**Candidate SHA-256:** Recorded externally in `MDCA-v2.0.12-r3-RC.zip.sha256`  
**Immediate rollback:** `v2.0.12-r1-VERIFIED`  
**Built:** 2026-08-12

## URLs

**Repository:** https://github.com/hzzmbgth7t-beep/my-diet-coke-addiction

**Live application:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/

**Cache Buster:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?cb=v2.0.12-r3-RC

## Scope

- Home Entries shows today's local-calendar entries.
- Reports Entries shows yesterday's local-calendar entries.
- Both new sections reuse the existing Entries bar/list presentation.
- Existing Selected Date and Report Entries controls use the same shared
  toggle/render/scroll functions.
- Show Entries scrolls the expanded section fully into view when possible;
  oversized sections align the Entries bar with the top of the viewport.
- Hide Entries collapses and scrolls to page top.

## Preserved

Calculation/date-range functions were preserved unchanged from
`v2.0.12-r2-VERIFIED`. Storage/import/export schemas, manifest, icons,
service-worker behavior, and PWA architecture are unchanged except for required
r3 release/cache identity.

## Promotion Status

Repository deployment verification, Home Screen device testing, offline smoke
testing, and explicit owner approval remain required.

## Version Identity Convention

Visible in-app version identity must include any non-production suffix or
descriptor. Release candidates therefore display `-RC`. A verified production
release displays only its actual version/revision with no `-VERIFIED` suffix.
The Data Tools page displays the same complete visible identity in place of its
descriptive subtitle.
