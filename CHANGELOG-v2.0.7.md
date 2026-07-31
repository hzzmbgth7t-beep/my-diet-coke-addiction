# CHANGELOG — My Diet Coke Addiction v2.0.7

**Release:** v2.0.7  
**Release package date:** July 30, 2026  
**Status:** Prepared for deployment

## New Features

- Added a visible Version 2.0.7 identifier on the Home screen.
- Added installable PWA metadata through `manifest.json`.
- Added service-worker registration and offline application-shell caching.
- Added complete 180, 192, and 512 pixel icon assets.

## Enhancements

- Improved the new-entry save confirmation:
  - returns to the Home screen;
  - displays a larger `✓ Entry Saved` notice;
  - keeps the notice visible longer.
- Standardized backup filenames as:
  - `MDCA-backup-v2.0.7-YYYY-MM-DD.json`
- Updated the service-worker cache identity to:
  - `my-diet-coke-addiction-v2.0.7-r1`
- Added network-first navigation handling so deployed updates are preferred
  while the cached application remains available offline.

## Behavioral Changes

- The application can now register its service worker after page load.
- Navigation requests use the network when available and fall back to the
  cached `index.html` when offline.
- Static same-origin assets are cached after first retrieval.

## Corrected Behavior

- Corrected missing manifest linkage.
- Corrected missing service-worker registration.
- Corrected missing PWA icon assets.
- Corrected the stale `my-diet-coke-addiction-v1` cache identity.
- Corrected the release package so the main page is named `index.html`.

## Removed Features

- None.

## Data-Migration Changes

- None.
- Existing entry keys remain supported:
  - `dietCokeEntriesV2`
  - `dietCokeTracker`
  - `myDietCokeAddictionEntries`
- Beverage configuration remains stored in:
  - `dietCokeBeveragesV2`

## Release Package Revision r2

- Added canonical live application URL to the beginning of `README.md`.
- Added release-specific cache-buster launch URL:
  - `https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?v=2.0.7-r2`
- Added `README-STANDARD.md`.
- Established `MDCA-RA-001-E` as the permanent README launch-link rule.
- Updated the service-worker cache identity to:
  - `my-diet-coke-addiction-v2.0.7-r2`
