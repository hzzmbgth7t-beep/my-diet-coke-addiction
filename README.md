# MDCA README v2.0.11-r3

**Document version:** v2.0.11-r3  
**Application:** My Diet Coke Addiction  
**Status:** Release candidate  
**Feature scope:** Compact custom-report selectors  
**Active verified baseline:** `v2.0.10-r4-VERIFIED`  
**Canonical baseline archive:** `MDCA-v2.0.10-r4-VERIFIED.zip`  
**Canonical baseline SHA-256:** `7af7c4b8872f69133d2a99b9ca0caf11978d67d9500bcd84807d26492183df82`  
**Immediate rollback baseline:** `v2.0.10-r4-VERIFIED`  
**Previous rollback baseline:** `v2.0.9-r3-VERIFIED`  
**Rejected candidates:** `v2.0.11-r1`, `v2.0.11-r2`  
**Candidate archive:** `MDCA-v2.0.11-r3-RC.zip`  
**Candidate SHA-256:** Recorded in `MDCA-v2.0.11-r3-RC.zip.sha256`  
**Build timestamp:** 2026-08-02T14:15:00-05:00

## URLs

**Repository:** https://github.com/hzzmbgth7t-beep/my-diet-coke-addiction

**Live application:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/

**Candidate verification URL:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?v=2.0.11-r3

The active verified production baseline remains `v2.0.10-r4-VERIFIED`
until this exact candidate passes device verification and owner approval.

## Revision Scope

r1 introduced the report Totals and Servings redesign. Device review found
the custom selector overflowing its card.

r2 constrained the selector, but physical-device review found that the native
date, week, and month rendering still consumed excessive horizontal and
vertical space.

r3 replaces the visible native control with the same visible-field and
transparent-native-picker configuration used successfully by the Entry
screen.

## Compact Selector Design

Custom Day, Custom Week, and Custom Month now use:

- a centered visible field;
- a maximum width of 220 pixels;
- responsive shrinking when less space is available;
- an exact 46-pixel field height;
- a 16-pixel centered value;
- a 14-pixel field radius;
- a 15-pixel centered section label;
- compact 12-pixel card padding;
- content-driven card height with no fixed or minimum-height spacer.

Visible values are formatted as:

- `Aug 1, 2026`;
- `Week 31, 2026`;
- `August 2026`.

The native `date`, `week`, and `month` inputs remain as transparent overlays,
so tapping anywhere on the compact visible field invokes the platform picker.

## Preserved Report Design

The Totals and Servings redesign remains unchanged for all six report types.

### Totals

- Carbonated: rounded whole ounces plus inline `oz`;
- Caffeinated: rounded whole ounces plus inline `oz`;
- Caffeine: rounded whole milligrams plus inline `mg`;
- no `/ 400`;
- no right-pinned unit.

### Servings

- Carbonated: carbonated ounces divided by 12, nearest 0.5;
- Caffeinated: caffeine milligrams divided by 53, nearest whole number;
- Clear: clear ounces divided by 12, nearest 0.5.

Caffeine Stats, Drink Breakdown, Report Entries, navigation, storage,
import/export, offline behavior, and data calculations remain unchanged.

## Verification

Completed:

- controlled r2 archive checksum verification;
- compact selector structure and formatting verification;
- native overlay geometry verification;
- 320-, 375-, 390-, 414-, and 430-pixel viewport checks;
- 46-pixel field-height checks;
- 220-pixel maximum-width checks;
- compact content-driven card-height checks;
- no-overflow and no-overlap checks;
- all-six-report structure regression;
- Totals and Servings calculation regression;
- JavaScript and service-worker syntax checks;
- release-identity and flat-package checks;
- manifest and icon byte-preservation checks.

Still required:

- native iOS date, week, and month picker interaction;
- Safari and installed Home Screen visual acceptance;
- physical-device compact sizing acceptance;
- all-six-report review using real data;
- navigation, offline, and data-integrity regression;
- explicit owner approval.

## Package

The candidate contains exactly 10 complete flat root-level files:

1. `README.md`
2. `MDCA-README-v2.0.11-r3.md`
3. `MDCA-RELEASE-v2.0.11-r3.md`
4. `index.html`
5. `manifest.json`
6. `service-worker.js`
7. `icon.png`
8. `apple-touch-icon.png`
9. `icon-192.png`
10. `icon-512.png`

The two README files are byte-for-byte identical.

## Recovery

On failure, restore all 10 files from `MDCA-v2.0.10-r4-VERIFIED.zip`, activate its
verified service worker, and verify Safari, the installed Home Screen app,
saved data, Reports, and offline launch.
