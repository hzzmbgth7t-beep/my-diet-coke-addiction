# MDCA README v2.0.12-r3-RC

## URLs

**Repository:** https://github.com/hzzmbgth7t-beep/my-diet-coke-addiction

**Live application:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/

**Cache Buster:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?cb=v2.0.12-r3-RC

**Document version:** v2.0.12-r3-RC  
**Application:** My Diet Coke Addiction  
**Status:** Release candidate — deployment/device testing and owner approval required  
**Scope:** Shared Entries sections on Home/Reports plus standardized Entries show/hide scrolling  
**Active verified baseline:** `v2.0.12-r2-VERIFIED`  
**Canonical baseline archive:** `MDCA-v2.0.12-r2-VERIFIED.zip`  
**Canonical baseline SHA-256:** `5945ca62bfae7170bc99b44c5789be06b3cda777f010d5ccffa98a54b09db27d`  
**Immediate rollback baseline:** `v2.0.12-r1-VERIFIED`  
**Immediate rollback SHA-256:** `32c744c80a648d27ef1419c68ca7319e1a5e6f06f0cde70f292a7b3ab22007e9`  
**Candidate:** `v2.0.12-r3`  
**Candidate archive:** `MDCA-v2.0.12-r3-RC.zip`  
**Candidate SHA-256:** Recorded externally in `MDCA-v2.0.12-r3-RC.zip.sha256`  
**Built:** 2026-08-12  
**Owner approval:** Pending

`v2.0.12-r2-VERIFIED` remains the active verified production baseline until
this candidate passes live deployment verification, required Home Screen
device testing, and explicit owner approval.

## Candidate Scope

- Add an Entries section at the bottom of Home containing the current local day's entries.
- Add an Entries section at the bottom of Reports containing the previous local day's entries.
- Preserve Reports order as Yesterday's Totals, Quick Reports, Custom Reports, then Entries.
- Reuse the established Entries bar, entry-row layout, and Edit/Copy/Delete behavior.
- Standardize Entries show/hide behavior across Home, Reports, Log Beverage, Yesterday,
  Last Week, Last Month, Custom Day, Custom Week, and Custom Month.
- On Show Entries, make the complete expanded bar/panel visible when it fits; otherwise
  align the top of the Entries bar with the top of the viewport.
- On Hide Entries, collapse the panel and scroll the page to the top.

## Preserved Behavior

- Existing Home and report calculations
- Yesterday/date/range semantics
- Serving formulas and Drink Breakdown
- Entry CRUD and persistence contracts
- Storage keys and import/export format
- Beverage behavior and image handling
- Navigation/unsaved-change behavior
- Manifest and icon assets
- Dependency-free static PWA architecture

## Runtime Identities

- visible version while this package is an RC: `v2.0.12-r3-RC`
- export version: `2.0.12`
- export revision: `r3`
- backup prefix: `MDCA-backup-v2.0.12-`
- service-worker cache: `MDCA-v2.0.12-r3`
- reload key: `MDCA-sw-reload-v2.0.12-r3`

## Verification Status

Local source/package verification is required before upload.

Still required before promotion:

- fresh live repository verification after upload;
- Cache Buster deployment verification;
- Home Screen device testing of all new/shared Entries behavior;
- offline/reconnection smoke testing;
- explicit owner approval.

## Package

The RC contains exactly 10 complete flat production files.

The final ZIP checksum is stored externally because embedding an archive's own
checksum inside that archive would change the archive bytes.

## Recovery

The active verified baseline remains `v2.0.12-r2-VERIFIED`.

If the candidate fails, restore the complete verified baseline rather than
partially reverting individual runtime files.

## Version Identity Convention

Visible in-app version identity must include any non-production suffix or
descriptor. Release candidates therefore display `-RC`. A verified production
release displays only its actual version/revision with no `-VERIFIED` suffix.
The Data Tools page displays the same complete visible identity in place of its
descriptive subtitle.
