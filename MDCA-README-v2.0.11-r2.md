# MDCA README v2.0.11-r2

**Document version:** v2.0.11-r2  
**Application:** My Diet Coke Addiction  
**Status:** Release candidate  
**Feature scope:** Custom-report selector sizing correction  
**Active verified baseline:** `v2.0.10-r4-VERIFIED`  
**Canonical baseline archive:** `MDCA-v2.0.10-r4-VERIFIED.zip`  
**Canonical baseline SHA-256:** `7af7c4b8872f69133d2a99b9ca0caf11978d67d9500bcd84807d26492183df82`  
**Immediate rollback baseline:** `v2.0.10-r4-VERIFIED`  
**Previous rollback baseline:** `v2.0.9-r3-VERIFIED`  
**Rejected candidate:** `v2.0.11-r1`  
**Candidate archive:** `MDCA-v2.0.11-r2-RC.zip`  
**Candidate SHA-256:** Recorded in `MDCA-v2.0.11-r2-RC.zip.sha256`  
**Build timestamp:** 2026-08-02T10:48:00-05:00

## URLs

**Repository:** https://github.com/hzzmbgth7t-beep/my-diet-coke-addiction

**Live application:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/

**Candidate verification URL:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?v=2.0.11-r2

The active verified production baseline remains `v2.0.10-r4-VERIFIED`
until this exact candidate passes device verification and owner approval.

## Revision Scope

Device review of r1 found that the native selector field exceeded its card
on Custom Day. Custom Week and Custom Month used the same unconstrained
control structure and therefore required the same correction.

r2 applies one shared custom-report form-control style to:

- Custom Day;
- Custom Week;
- Custom Month.

## Standard Form Styling

Each custom selector now matches the standard Entry form control:

- 46-pixel height and minimum height;
- 16-pixel font;
- 24-pixel line height;
- 14-pixel border radius inherited from the common input style;
- centered label and selected value;
- 13-pixel centered label;
- 6-pixel label spacing;
- full card-content width;
- zero intrinsic minimum width;
- maximum width constrained to the parent;
- hidden parent overflow as a final containment safeguard.

Native `date`, `week`, and `month` input types remain unchanged so their
platform pickers continue to operate.

## Preserved r1 Report Design

The r1 report redesign remains unchanged across Yesterday, Last Week, Last
Month, Custom Day, Custom Week, and Custom Month.

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

- controlled r1 archive checksum verification;
- selector styling and containment verification;
- exact Entry-control style comparison;
- 320-, 375-, 390-, 414-, and 430-pixel geometry checks;
- Custom Day, Custom Week, and Custom Month visibility checks;
- input height, width, label, and no-overlap checks;
- all-six-report rendering regression;
- Totals and Servings calculation regression;
- JavaScript and service-worker syntax checks;
- release-identity and flat-package checks;
- manifest and icon byte-preservation checks.

Still required:

- Safari and installed Home Screen visual review;
- native date, week, and month picker interaction;
- custom selector acceptance on physical devices;
- all-six-report review using real data;
- Reports navigation and entry-list regression;
- offline and data-integrity regression;
- explicit owner approval.

## Package

The candidate contains exactly 10 complete flat root-level files:

1. `README.md`
2. `MDCA-README-v2.0.11-r2.md`
3. `MDCA-RELEASE-v2.0.11-r2.md`
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
