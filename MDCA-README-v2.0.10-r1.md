# MDCA README v2.0.10-r1

**Document version:** v2.0.10-r1  
**Application:** My Diet Coke Addiction  
**Status:** Release candidate  
**Feature scope:** Entry Screen layout  
**Active verified baseline:** `v2.0.9-r3-VERIFIED`  
**Canonical baseline archive:** `MDCA-v2.0.9-r3-VERIFIED-DOCFIX1.zip`  
**Canonical baseline SHA-256:** `5de930b57377b220989a48a54a1d648746ae88b1656cbd21b8b701eded9d851f`  
**Immediate rollback baseline:** `v2.0.9-r3-VERIFIED`  
**Previous rollback baseline:** `v2.0.8-r10-VERIFIED`  
**Candidate archive:** `MDCA-v2.0.10-r1-RC.zip`  
**Candidate SHA-256:** Recorded in `MDCA-v2.0.10-r1-RC.zip.sha256`  
**Build timestamp:** 2026-08-01T18:08:00-05:00

## URLs

**Repository:** https://github.com/hzzmbgth7t-beep/my-diet-coke-addiction

**Live application:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/

**Candidate verification URL:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?v=2.0.10-r1

The live application remains on `v2.0.9-r3-VERIFIED` until this exact
candidate is deployed and all blocking device checks pass.

## Release Scope

v2.0.10-r1 changes the shared Entry Screen used by saved-beverage entry,
Quick Entry, and existing-entry editing.

### Header

- place Back and the fixed `Log Beverage` title on the same top row;
- keep `Log Beverage` visually centered independently of Back-button width;
- remove the changing beverage/edit title and subtitle.

### Selected-Date Totals

- retain the selected-date title;
- show Carbonated, Caffeinated, and Caffeine from left to right;
- use the same 68-pixel card height, typography, colors, and centering as Home;
- place labels above values;
- show rounded whole-number Carbonated and Caffeinated totals followed by
  `oz`;
- show rounded whole-number Caffeine followed by `mg`;
- show no `/ 400` text and no progress bar.

### Entry Fields

- first row: Date, Time, and Ounces in three equal-width fields;
- second row: Name and Caffeine in two equal-width fields;
- use the exact short labels Date, Time, Ounces, Name, and Caffeine;
- display a fixed `mg` suffix inside the Caffeine field while preserving a
  numeric input value;
- retain the Ounces heading and existing 8, 12, 16, and 20 ounce buttons;
- place Carbonated, Caffeinated, and Clear toggle groups in one equal-width
  row;
- use toggle labels without question marks;
- retain existing Yes/No behavior.

### Preserved Controls

- Save Entry, Save Changes, and Cancel Edit behavior;
- selected-date historical entry section;
- entry persistence, validation, and automatic caffeine scaling;
- editing, copying, and deletion;
- Home, Settings, Reports, import/export, and offline behavior;
- local-storage keys and data schema;
- Home Screen layout;
- manifest and icon assets.

Only normal release identity changes occur outside the Entry Screen.

## Verification

Completed:

- live `main` review before build;
- canonical archive checksum verification;
- Entry Screen structure, labels, units, ordering, and rounding checks;
- field-grid, suffix, and toggle-grid checks;
- Ounces, Save, and historical-section preservation checks;
- JavaScript and service-worker syntax checks;
- release-identity and flat-package checks;
- manifest and icon byte-preservation checks.

Still required:

- Safari and installed Home Screen visual review;
- saved-beverage entry, Quick Entry, and edit-entry workflows;
- native Date and Time field fit on the smallest available iPhone;
- ounce buttons, manual ounces, all toggles, Save, Save Changes, Cancel Edit,
  and historical entries;
- offline regression and data-integrity confirmation;
- explicit owner approval.

## Package

The candidate contains exactly 10 flat root-level files:

1. `README.md`
2. `MDCA-README-v2.0.10-r1.md`
3. `MDCA-RELEASE-v2.0.10-r1.md`
4. `index.html`
5. `manifest.json`
6. `service-worker.js`
7. `icon.png`
8. `apple-touch-icon.png`
9. `icon-192.png`
10. `icon-512.png`

The two README files are byte-for-byte identical.

## Deployment and Recovery

Deploy only the exact candidate files and test with the candidate verification
URL. Do not promote if any Entry Screen, data-integrity, or offline check
fails.

On failure, restore all 10 files from
`MDCA-v2.0.9-r3-VERIFIED-DOCFIX1.zip`, activate the r3 service worker, and
verify Safari, the installed Home Screen app, saved data, Reports, and
offline launch.
