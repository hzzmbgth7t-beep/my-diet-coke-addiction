# FIXNOTES — My Diet Coke Addiction v2.0.7

**Package date:** July 30, 2026  
**Status:** Corrected package prepared; live deployment testing pending

## Bugs Discovered

1. `index.html` did not link `manifest.json`.
2. `index.html` did not register `service-worker.js`.
3. The manifest referenced missing 192 and 512 pixel icon files.
4. The service worker referenced missing icon assets.
5. The service-worker cache name remained
   `my-diet-coke-addiction-v1`.
6. The recovered page filename was `index(2).html` instead of
   the deployable `index.html`.
7. The live release had no visible version identifier inside the application.

## Root Cause

The accepted core v2.0.7 application files were recovered individually
rather than as one complete deployment package. The PWA metadata, registration,
icon assets, and canonical filenames were therefore incomplete or inconsistent.

## Resolution

- Created canonical `index.html`.
- Linked `manifest.json`.
- Registered `service-worker.js` with scope `./`.
- Generated 180, 192, and 512 pixel icons from the accepted `icon.png`.
- Added `apple-touch-icon.png`.
- Replaced the cache identifier with
  `my-diet-coke-addiction-v2.0.7-r1`.
- Rebuilt the service-worker asset list using only included files.
- Added network-first navigation with offline fallback.
- Added a visible Version 2.0.7 label.
- Added required release documentation.

## Testing Performed

Automated package checks completed:

- application inline JavaScript syntax validation;
- service-worker JavaScript syntax validation;
- manifest JSON parsing;
- manifest linkage check;
- service-worker registration check;
- required icon dimension verification;
- service-worker asset existence verification;
- release filename verification;
- backup filename source verification;
- export version source verification.

## Known Issues Still Open

The following require testing after files are uploaded to GitHub Pages:

- Safari launch;
- Home Screen installation and launch;
- offline launch;
- service-worker update behavior;
- existing-data visibility;
- new-entry and edited-entry save notices;
- backup export;
- import into a clean storage context;
- Safari-to-Home-Screen transfer using export/import.

## Release Package Revision r2

### Bug Discovered

The root README did not provide an immediate live launch link or a
release-specific cache-buster link.

### Resolution

- Added both links at the beginning of `README.md`.
- Added a permanent README launch-link standard.
- Aligned the service-worker cache revision with the cache-buster value.

### Testing Performed

- Confirmed the Quick Launch section is the first README section.
- Confirmed both URLs use the canonical GitHub Pages address.
- Confirmed the cache-buster and service-worker cache both use `2.0.7-r2`.
