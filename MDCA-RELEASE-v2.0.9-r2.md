# MDCA Release Record v2.0.9-r2

**Document version:** v2.0.9-r2  
**Application:** My Diet Coke Addiction  
**Release type:** Corrected Home Screen feature candidate  
**Status:** Release candidate  
**Build timestamp:** 2026-08-01T05:43:00-05:00  
**Active verified production baseline:** v2.0.8-r10  
**Previous verified production baseline:** v2.0.8-r6  
**Designated rollback baseline:** v2.0.7-r2  
**Baseline archive:** `MDCA-v2.0.8-r10-VERIFIED.zip`  
**Baseline SHA-256:** `6e67e03b80e02658c2a6f33ec720146031e49a2f9110745a82e9b45dd6602144`  
**Candidate archive:** `MDCA-v2.0.9-r2-RC.zip`  
**Candidate SHA-256:** Recorded in `MDCA-v2.0.9-r2-RC.zip.sha256`  
**Supersedes:** Rejected candidate v2.0.9-r1

## Purpose

This candidate corrects the r1 documentation and scope defects while
implementing the approved Home Screen design. Rejected r1 remains immutable
and must not be deployed.

## Approved Home Screen Controls

- icon retained;
- title and description removed;
- `v2.0.9-r2` directly beneath the icon;
- Today order: Carbonated, Caffeinated, Caffeine;
- exactly three equal-width Today cards;
- shared 92-pixel minimum height;
- original summary-card and orange Caffeine styles reused;
- `XX / 400 mg` retained;
- progress bar removed;
- saved beverage buttons only;
- no Add Beverage placeholders;
- no Home Quick Entry button;
- two-column beverage grid retained on phone and iPad;
- Settings left and Reports right below beverages;
- original blue Reports style reused by both actions;
- equal action widths and 92-pixel minimum height.

## Approved Settings Controls

Settings contains Manage Beverages, Quick Entry, and Data Tools.

Settings Back returns Home. Manage Beverages opens Add Beverage. Beverage
save, Back, and delete return to the opening page. Quick Entry Back returns
Settings. A saved new Quick Entry returns Home, preserving existing behavior.
Data Tools Back returns Settings. Reports Back returns Home.

## Documentation Corrections

Both identical README files place `## URLs` near the beginning, immediately
after the release-status block and before release scope. The section contains
the repository, live application, and r2 verification URLs.

The documentation also restores active, previous, and rollback baselines,
external checksum control, deployment steps, and rollback steps.

## Changed Operational Files

- `index.html`
- `service-worker.js`

The service worker changes only its cache identity.

## Preserved Files

These files are byte-for-byte identical to verified v2.0.8-r10:

- `manifest.json`
- `icon.png`
- `apple-touch-icon.png`
- `icon-192.png`
- `icon-512.png`

No global body padding, global application width, report layout, entry
layout, beverage-form layout, data schema, manifest, or icon change is
included.

## Release Identity

- visible version: `v2.0.9-r2`;
- export version: `2.0.9`;
- export revision: `r2`;
- backup prefix: `MDCA-backup-v2.0.9-`;
- cache: `MDCA-v2.0.9-r2`;
- reload key: `MDCA-sw-reload-v2.0.9-r2`.

## Package

Exactly 10 flat root-level files:

1. `README.md`
2. `MDCA-README-v2.0.9-r2.md`
3. `MDCA-RELEASE-v2.0.9-r2.md`
4. `index.html`
5. `manifest.json`
6. `service-worker.js`
7. `icon.png`
8. `apple-touch-icon.png`
9. `icon-192.png`
10. `icon-512.png`

## Verification Status

Automated source, syntax, documentation-order, identity, preservation, and
package checks are recorded externally.

Safari, Home Screen, touch, navigation, offline, data-integrity, and owner
approval checks remain **UNVERIFIED**.

## Failure and Rollback

Any blocking failure rejects r2. Restore the exact verified v2.0.8-r10
10-file root, commit the restoration, activate the r10 service worker, and
verify Safari, Home Screen, saved data, Reports, and offline launch.
