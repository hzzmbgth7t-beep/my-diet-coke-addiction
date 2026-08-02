# MDCA Release Record v2.0.10-r4

**Application:** My Diet Coke Addiction  
**Release:** v2.0.10-r4  
**Status:** Release candidate  
**Scope:** Home Quick Entry and shared navigation headers  
**Active verified baseline:** `v2.0.9-r3-VERIFIED`  
**Canonical baseline archive:** `MDCA-v2.0.9-r3-VERIFIED-DOCFIX1.zip`  
**Canonical baseline SHA-256:** `5de930b57377b220989a48a54a1d648746ae88b1656cbd21b8b701eded9d851f`  
**Rejected candidates:** `v2.0.10-r1`, `v2.0.10-r2`, `v2.0.10-r3`  
**Candidate archive:** `MDCA-v2.0.10-r4-RC.zip`  
**Candidate SHA-256:** Recorded externally  
**Build timestamp:** 2026-08-01T20:32:00-05:00

## Approved Changes

### Home

Home now contains equal Settings, Quick Entry, and Reports buttons. Quick
Entry uses a two-line label and opens Log Beverage directly from Home.

Quick Entry is no longer displayed on Settings.

### Settings

Settings uses the shared centered navigation header. Its description is
replaced by `v2.0.10-r4`.

### Shared Headers

Every non-Home page has:

- Back on the left;
- a centered page name;
- a solid house icon on the right when the navigation depth is greater than
  one Back action.

The Home icon is hidden on first-level pages.

### Navigation and Form Safety

A navigation stack preserves the true preceding page.

Back and Home both display `Discard unsaved changes?` before leaving a
modified Log Beverage or Beverage Setup form. Cancel keeps the user and
navigation stack on the current page. Confirm completes the requested
navigation.

## Release Identity

- visible version: `v2.0.10-r4`;
- export version: `2.0.10`;
- export revision: `r4`;
- backup prefix: `MDCA-backup-v2.0.10-`;
- service-worker cache: `MDCA-v2.0.10-r4`;
- reload key: `MDCA-sw-reload-v2.0.10-r4`.

## Changed Files

- `README.md`
- `MDCA-README-v2.0.10-r4.md`
- `MDCA-RELEASE-v2.0.10-r4.md`
- `index.html`
- `service-worker.js`

## Preserved Files

These remain byte-for-byte identical to r3:

- `manifest.json`;
- `icon.png`;
- `apple-touch-icon.png`;
- `icon-192.png`;
- `icon-512.png`.

## Device Verification Required

Verify the three Home actions, shared headers, centered titles, Back paths,
deep Home paths, unsaved-change prompts, all Entry and Beverage workflows,
Reports, Data Tools, offline operation, data integrity, and owner approval.
