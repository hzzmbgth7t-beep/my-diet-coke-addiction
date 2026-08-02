# MDCA README v2.0.11-r1

**Document version:** v2.0.11-r1  
**Application:** My Diet Coke Addiction  
**Status:** Release candidate  
**Feature scope:** Unified report totals and serving calculations  
**Active verified baseline:** `v2.0.10-r4-VERIFIED`  
**Canonical baseline archive:** `MDCA-v2.0.10-r4-VERIFIED.zip`  
**Canonical baseline SHA-256:** `7af7c4b8872f69133d2a99b9ca0caf11978d67d9500bcd84807d26492183df82`  
**Immediate rollback baseline:** `v2.0.10-r4-VERIFIED`  
**Previous rollback baseline:** `v2.0.9-r3-VERIFIED`  
**Candidate archive:** `MDCA-v2.0.11-r1-RC.zip`  
**Candidate SHA-256:** Recorded in `MDCA-v2.0.11-r1-RC.zip.sha256`  
**Build timestamp:** 2026-08-02T08:56:00-05:00

## URLs

**Repository:** https://github.com/hzzmbgth7t-beep/my-diet-coke-addiction

**Live application:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/

**Candidate verification URL:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?v=2.0.11-r1

The active verified production baseline remains `v2.0.10-r4-VERIFIED`
until this exact candidate passes device verification and owner approval.

## Revision Scope

The report-detail summary used by Yesterday, Last Week, Last Month, Custom
Day, Custom Week, and Custom Month now matches the shared card design used
by Home and Log Beverage.

### Totals Row

The first row contains three equal cards:

1. Carbonated — rounded whole-number carbonated ounces followed by `oz`;
2. Caffeinated — rounded whole-number caffeinated ounces followed by `oz`;
3. Caffeine — rounded whole-number caffeine total followed by `mg`.

The Caffeine card does not display `/ 400`. Its `mg` unit is inline with the
calculated value and is not pinned to the right.

All values are calculated from the selected report period. No reference-image
numbers are hard-coded.

### Servings Row

A `Servings` title appears above a second equal three-card row:

1. Carbonated — carbonated ounces divided by 12 and rounded to the nearest
   half serving;
2. Caffeinated — caffeine milligrams divided by 53 and rounded to the nearest
   whole serving;
3. Clear — clear ounces divided by 12 and rounded to the nearest half
   serving.

Whole half-serving results display without `.0`, while half values retain
`.5`.

### Report Scope

The two-row design and calculations apply consistently to all six reports:

- Yesterday;
- Last Week;
- Last Month;
- Custom Day;
- Custom Week;
- Custom Month.

### Preserved Features

The release preserves:

- Caffeine Stats;
- Drink Breakdown;
- Report Entries and entry count;
- Home and Log Beverage totals cards;
- Quick Entry, saved beverages, and entry editing;
- shared Back and Home navigation;
- unsaved-change protection;
- local-storage keys and data schema;
- import, export, and recovery;
- service-worker update and offline behavior;
- manifest and icon assets.

## Verification

Completed:

- live verified-baseline review before build;
- canonical baseline checksum verification;
- report first-row shared-card verification;
- second-row equal-size verification;
- dynamic whole-number totals checks;
- 12-ounce half-serving calculations;
- 53-milligram whole-serving calculation;
- all-six-report rendering checks;
- 320-, 375-, 390-, and 430-pixel mobile geometry checks;
- no-overlap and inline-unit checks;
- JavaScript and service-worker syntax checks;
- release-identity and flat-package checks;
- manifest and icon byte-preservation checks.

Still required:

- Safari and installed Home Screen visual review;
- Yesterday, Last Week, Last Month, and custom-report review using real data;
- serving-calculation acceptance on device;
- Reports navigation and entry-list regression;
- offline and data-integrity regression;
- explicit owner approval.

## Package

The candidate contains exactly 10 complete flat root-level files:

1. `README.md`
2. `MDCA-README-v2.0.11-r1.md`
3. `MDCA-RELEASE-v2.0.11-r1.md`
4. `index.html`
5. `manifest.json`
6. `service-worker.js`
7. `icon.png`
8. `apple-touch-icon.png`
9. `icon-192.png`
10. `icon-512.png`

The two README files are byte-for-byte identical.

## Recovery

On failure, restore all 10 files from
`MDCA-v2.0.10-r4-VERIFIED.zip`, activate its verified service worker, and
verify Safari, the installed Home Screen app, saved data, Reports, and
offline launch.
