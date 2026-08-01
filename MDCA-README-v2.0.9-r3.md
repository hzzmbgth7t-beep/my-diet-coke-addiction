# MDCA README v2.0.9-r3

**Document version:** v2.0.9-r3  
**Application:** My Diet Coke Addiction  
**Status:** Release candidate  
**Scope:** Home Screen layout and unlimited saved-beverage rendering  
**Active verified baseline:** v2.0.8-r10-VERIFIED  
**Previous verified production baseline:** v2.0.8-r6  
**Designated rollback baseline:** v2.0.7-r2  
**Baseline archive:** `MDCA-v2.0.8-r10-VERIFIED.zip`  
**Baseline SHA-256:** `6e67e03b80e02658c2a6f33ec720146031e49a2f9110745a82e9b45dd6602144`  
**Candidate archive:** `MDCA-v2.0.9-r3-RC.zip`  
**Candidate SHA-256:** Recorded in `MDCA-v2.0.9-r3-RC.zip.sha256`  
**Build timestamp:** 2026-08-01T07:55:00-05:00

## URLs

**Repository:** https://github.com/hzzmbgth7t-beep/my-diet-coke-addiction

**Live application:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/

**Candidate verification URL:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?v=2.0.9-r3

The repository may contain a deployed release candidate, but the active
verified baseline remains `v2.0.8-r10-VERIFIED` until the exact r3 candidate
passes all blocking verification and receives explicit owner approval.

## Release Scope

v2.0.9-r3 is rebuilt directly from `v2.0.8-r10-VERIFIED`. It supersedes the
rejected v2.0.9-r1 and v2.0.9-r2 candidates. Neither rejected candidate may
be promoted as verified production.

### Home Header

- retain the existing MDCA icon;
- remove the Home title and description;
- display `v2.0.9-r3` directly beneath the icon.

### Daily Totals

- keep the existing outer white container;
- remove the `Today` heading;
- show Carbonated, Caffeinated, and Caffeine from left to right;
- use three equal-width cards with a 68-pixel minimum height;
- place every label above its value;
- use matching label sizes, value sizes, line heights, and centering;
- use the existing MDCA red for Carbonated and Caffeinated labels;
- use black for Carbonated and Caffeinated values;
- retain the existing orange Caffeine label and black caffeine value;
- retain the `XX / 400 mg` format;
- remove the caffeine progress bar.

### Saved Beverages

- keep the existing outer white container;
- remove the `Beverages` heading;
- remove the tap and long-press instructions;
- preserve the existing two-column grid on phone and iPad;
- display every saved beverage in stored order;
- impose no application-level beverage maximum;
- render no Add Beverage placeholder;
- render no Quick Entry button in the beverage grid;
- show a non-button empty state when no beverages are saved.

Browser storage capacity remains the only practical storage limit.

### Home Actions and Settings

- place Settings on the left and Reports on the right below beverages;
- retain equal widths, the existing blue style, and the existing 18-pixel labels;
- use the original compact 15-pixel vertical padding with no tall-button override;
- Settings contains Manage Beverages, Quick Entry, and Data Tools;
- Manage Beverages is the workflow for adding a saved beverage;
- existing beverages remain editable by long-pressing their Home buttons.

## Preserved Behavior

The candidate preserves:

- all local-storage keys and the data schema;
- entry creation, editing, copying, deletion, and calculations;
- saved-beverage tap and long-press behavior;
- report calculations and report-detail layouts;
- transactional import, export, and recovery behavior;
- service-worker update controls and offline behavior;
- manifest and icon assets;
- global body padding and application width;
- the two-column beverage grid at every viewport width.

No report, entry-form, beverage-form, data-schema, manifest, icon, or global
iPad layout redesign is included.

## Verification

Completed against this exact candidate source:

- JavaScript syntax verification;
- flat 10-file package verification;
- release-identity verification;
- README URL presence and near-top placement verification;
- exact baseline-designation verification;
- rejected-r1 and rejected-r2 documentation verification;
- daily-card ordering, typography, colors, alignment, and height verification;
- heading and instruction removal verification;
- compact action-button verification;
- Settings navigation-binding verification;
- unlimited rendering tests at 0, 1, 6, 7, 12, 25, and 100 beverages;
- rendering-order verification beyond position six;
- removal of the six-slot constant, slicing, and placeholders;
- manifest and four icon files preserved byte-for-byte.

Still required before production promotion:

- Safari visual review on iPhone and iPad;
- Home Screen visual review;
- saved-beverage tap and long-press checks;
- adding, reloading, editing, and deleting beverages beyond position six;
- export/import verification with more than six beverages;
- Settings and Reports navigation checks;
- offline regression;
- data-integrity confirmation;
- explicit owner approval.

## Package

The candidate contains exactly 10 flat root-level files:

1. `README.md`
2. `MDCA-README-v2.0.9-r3.md`
3. `MDCA-RELEASE-v2.0.9-r3.md`
4. `index.html`
5. `manifest.json`
6. `service-worker.js`
7. `icon.png`
8. `apple-touch-icon.png`
9. `icon-192.png`
10. `icon-512.png`

`README.md` and `MDCA-README-v2.0.9-r3.md` are byte-for-byte identical.

## Deployment Control

1. Export and preserve a backup from every device containing important data.
2. Preserve the exact `v2.0.8-r10-VERIFIED` archive and checksum.
3. Confirm the r3 archive against its external SHA-256 file.
4. Extract r3 and upload only its 10 root files.
5. Remove superseded versioned r2 documents from the repository root.
6. Commit without editing the candidate files.
7. Open the r3 candidate verification URL.
8. Complete Safari, Home Screen, unlimited-beverage, navigation, data-integrity,
   import/export, and offline checks.
9. Promote only after explicit owner approval.

Do not reuse r1 or r2 device results as final r3 evidence.

## Baseline and Recovery

The active verified baseline is `v2.0.8-r10-VERIFIED`.

The previous verified production archive is
`MDCA-v2.0.8-r6-VERIFIED.zip`, SHA-256
`4eb09dbacf4b2620000ca0cd6baee0024a6ed5a4dd6fd4da84f90ff73b343d73`.

The designated rollback baseline remains v2.0.7-r2.

If r3 fails a blocking control:

1. stop verification and preserve failure evidence;
2. restore all 10 files from `MDCA-v2.0.8-r10-VERIFIED.zip`;
3. commit the restoration;
4. load an r10 cache-busted URL;
5. activate the waiting r10 service worker;
6. verify Safari, Home Screen, saved data, Reports, and offline launch;
7. keep r3 rejected until corrected under a new revision.
