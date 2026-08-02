# MDCA README v2.0.10-r2

**Document version:** v2.0.10-r2  
**Application:** My Diet Coke Addiction  
**Status:** Release candidate  
**Feature scope:** Entry Screen field-layout correction  
**Active verified baseline:** `v2.0.9-r3-VERIFIED`  
**Canonical baseline archive:** `MDCA-v2.0.9-r3-VERIFIED-DOCFIX1.zip`  
**Canonical baseline SHA-256:** `5de930b57377b220989a48a54a1d648746ae88b1656cbd21b8b701eded9d851f`  
**Immediate rollback baseline:** `v2.0.9-r3-VERIFIED`  
**Previous rollback baseline:** `v2.0.8-r10-VERIFIED`  
**Rejected candidate:** `v2.0.10-r1`  
**Candidate archive:** `MDCA-v2.0.10-r2-RC.zip`  
**Candidate SHA-256:** Recorded in `MDCA-v2.0.10-r2-RC.zip.sha256`  
**Build timestamp:** 2026-08-01T18:30:00-05:00

## URLs

**Repository:** https://github.com/hzzmbgth7t-beep/my-diet-coke-addiction

**Live application:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/

**Candidate verification URL:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?v=2.0.10-r2

The active verified production baseline remains `v2.0.9-r3-VERIFIED`
until this exact r2 candidate passes device verification and owner approval.

## Correction Scope

v2.0.10-r1 was rejected after iPhone testing showed overlapping Date, Time,
and Ounces controls, inconsistent field heights, and a Caffeine unit fixed
at the field's far-right edge.

v2.0.10-r2 corrects those Entry Screen defects.

### Date, Time, and Ounces

- retain one equal-width three-column row;
- use a 46-pixel visible height for all three fields;
- retain native iOS Date and Time pickers;
- prevent native picker controls from imposing intrinsic grid widths;
- display Date as `MM/DD/YY`;
- retain the current 12-hour Time display;
- center Ounces content;
- preserve ISO date and 24-hour time values used by storage.

### Name and Caffeine

- retain one equal-width two-column row;
- center Name content;
- center Caffeine as one inline group;
- place `mg` directly after the number with normal spacing;
- retain numeric validation and automatic Caffeine scaling.

### Preserved Controls

- Back and centered `Log Beverage`;
- selected-date totals and historical information;
- Ounces heading and preset buttons;
- Carbonated, Caffeinated, and Clear toggles;
- Save Entry, Save Changes, and Cancel Edit;
- saved-beverage entry, Quick Entry, and editing;
- Home, Settings, Reports, import/export, and offline behavior;
- local-storage keys, data schema, manifest, and icons.

## Verification

Completed:

- live `main` r1 review before build;
- r1 source checksum verification;
- equal-height and non-overlap geometry checks at a 390px mobile viewport;
- `MM/DD/YY` Date display check;
- native Date and Time value-preservation checks;
- centered Ounces, Name, and inline Caffeine checks;
- JavaScript and service-worker syntax checks;
- release-identity and flat-package checks;
- manifest and icon byte-preservation checks.

Still required:

- Safari and installed Home Screen visual review;
- native Date and Time picker interaction on iPhone;
- saved-beverage, Quick Entry, and edit-entry workflows;
- Ounces presets and manual Ounces;
- automatic Caffeine scaling;
- Save, toggles, historical information, offline, and data integrity;
- explicit owner approval.

## Package

The candidate contains exactly 10 complete flat root-level files:

1. `README.md`
2. `MDCA-README-v2.0.10-r2.md`
3. `MDCA-RELEASE-v2.0.10-r2.md`
4. `index.html`
5. `manifest.json`
6. `service-worker.js`
7. `icon.png`
8. `apple-touch-icon.png`
9. `icon-192.png`
10. `icon-512.png`

The two README files are byte-for-byte identical.

## Deployment and Recovery

Deploy the complete 10-file candidate. On failure, restore all 10 files from
`MDCA-v2.0.9-r3-VERIFIED-DOCFIX1.zip`, activate the r3 service worker, and
verify Safari, the installed Home Screen app, saved data, Reports, and
offline launch.
