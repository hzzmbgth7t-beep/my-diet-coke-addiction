# MDCA README v2.0.10-r3

**Document version:** v2.0.10-r3  
**Application:** My Diet Coke Addiction  
**Status:** Release candidate  
**Feature scope:** Shared Home and Entry totals-card correction  
**Active verified baseline:** `v2.0.9-r3-VERIFIED`  
**Canonical baseline archive:** `MDCA-v2.0.9-r3-VERIFIED-DOCFIX1.zip`  
**Canonical baseline SHA-256:** `5de930b57377b220989a48a54a1d648746ae88b1656cbd21b8b701eded9d851f`  
**Immediate rollback baseline:** `v2.0.9-r3-VERIFIED`  
**Previous rollback baseline:** `v2.0.8-r10-VERIFIED`  
**Rejected candidates:** `v2.0.10-r1`, `v2.0.10-r2`  
**Candidate archive:** `MDCA-v2.0.10-r3-RC.zip`  
**Candidate SHA-256:** Recorded in `MDCA-v2.0.10-r3-RC.zip.sha256`  
**Build timestamp:** 2026-08-01T19:55:00-05:00

## URLs

**Repository:** https://github.com/hzzmbgth7t-beep/my-diet-coke-addiction

**Live application:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/

**Candidate verification URL:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?v=2.0.10-r3

The active verified production baseline remains `v2.0.9-r3-VERIFIED`
until this exact r3 candidate passes device verification and owner approval.

## Revision Scope

Device review of r2 confirmed that the corrected Entry fields fit properly,
but identified inconsistent totals-card value typography. On the Home Screen,
the labels also crowded each other and Caffeine still displayed `/ 400`.

r3 replaces the separate Home and Entry totals implementations with one
shared card component.

### Shared Totals Cards

Both Home and Log Beverage use the same:

- three equal-width columns;
- 68-pixel minimum card height;
- label font family, responsive size, weight, line height, and centering;
- value font family, 16-pixel size, normal weight, line height, black color,
  and centering;
- red Carbonated and Caffeinated labels;
- orange Caffeine label and card styling;
- card padding, spacing, and vertical alignment.

The responsive label size prevents Carbonated and Caffeinated from colliding
on narrow iPhones while remaining the same on both screens.

### Displayed Values

The values are calculated from current saved data and are not hard-coded.

Both screens display:

- Carbonated: rounded whole-number total followed by `oz`;
- Caffeinated: rounded whole-number total followed by `oz`;
- Caffeine: rounded whole-number total followed by `mg`.

The Home Caffeine card no longer displays `/ 400`.

### Preserved r2 Entry Corrections

- equal-width Date, Time, and Ounces fields;
- 46-pixel field height;
- `MM/DD/YY` Date display over the native Date picker;
- native Time picker and 12-hour display;
- centered Ounces and Name fields;
- centered inline Caffeine value such as `53 mg`;
- entry validation, scaling, Save, editing, toggles, and history.

### Preserved Application Controls

- Home beverage grid and unlimited saved beverages;
- Settings and Reports navigation;
- import, export, and recovery behavior;
- local-storage keys and data schema;
- update workflow and offline behavior;
- manifest and icon assets.

## Verification

Completed for this candidate:

- live `main` r2 review before build;
- r2 source archive checksum verification;
- shared Home/Entry component verification;
- identical value typography across all three cards;
- dynamic rounding and unit checks;
- Home `/ 400` removal check;
- narrow-iPhone label-boundary and card-overlap checks;
- r2 Entry-field preservation checks;
- JavaScript and service-worker syntax checks;
- release-identity and flat-package checks;
- manifest and icon byte-preservation checks.

Still required:

- Safari and installed Home Screen visual review;
- Home totals review with actual device data;
- Log Beverage totals review;
- saved-beverage, Quick Entry, and edit-entry workflows;
- Date and Time picker interaction;
- Save, history, offline, and data-integrity regression;
- explicit owner approval.

## Package

The candidate contains exactly 10 complete flat root-level files:

1. `README.md`
2. `MDCA-README-v2.0.10-r3.md`
3. `MDCA-RELEASE-v2.0.10-r3.md`
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
`MDCA-v2.0.9-r3-VERIFIED-DOCFIX1.zip`, activate the r3 verified service worker, and verify
Safari, the installed Home Screen app, saved data, Reports, and offline
launch.
