# MDCA README v2.0.9-r2

**Document version:** v2.0.9-r2  
**Application:** My Diet Coke Addiction  
**Status:** Release candidate  
**Scope:** Home Screen layout and supporting Settings navigation  
**Active verified production baseline:** v2.0.8-r10  
**Previous verified production baseline:** v2.0.8-r6  
**Designated rollback baseline:** v2.0.7-r2  
**Baseline archive:** `MDCA-v2.0.8-r10-VERIFIED.zip`  
**Baseline SHA-256:** `6e67e03b80e02658c2a6f33ec720146031e49a2f9110745a82e9b45dd6602144`  
**Candidate archive:** `MDCA-v2.0.9-r2-RC.zip`  
**Candidate SHA-256:** Recorded in `MDCA-v2.0.9-r2-RC.zip.sha256`  
**Build timestamp:** 2026-08-01T05:43:00-05:00

## URLs

**Repository:** https://github.com/hzzmbgth7t-beep/my-diet-coke-addiction

**Live application:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/

**Candidate verification URL:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?v=2.0.9-r2

The live application remains on verified v2.0.8-r10 until the exact r2
candidate is deployed. Use the candidate verification URL only after
deployment.

## Release Scope

v2.0.9-r2 is rebuilt directly from verified v2.0.8-r10. It supersedes the
rejected v2.0.9-r1 candidate, which must not be deployed.

### Home Screen

- remove the title and description;
- show `v2.0.9-r2` directly beneath the existing icon;
- show Carbonated, Caffeinated, and Caffeine from left to right;
- use complete labels without abbreviations or the word “ounces”;
- retain the existing summary-card appearance;
- retain the existing orange Caffeine-card appearance;
- retain `XX / 400 mg`;
- remove the caffeine progress bar;
- give the three Today cards equal width and minimum height;
- display saved beverage buttons only;
- render no Add Beverage placeholders;
- remove Quick Entry from the beverage grid;
- preserve the two-column beverage grid on phone and iPad;
- place Settings and Reports beneath beverage selection;
- place Settings on the left and Reports on the right;
- reuse the existing blue Reports style for both buttons;
- give both buttons equal width and the same minimum height as Today cards.

### Settings

Settings contains Manage Beverages, Quick Entry, and Data Tools.

Manage Beverages opens Add Beverage. Existing beverages remain editable by
long-pressing their Home buttons. Beverage save, Back, and delete return to
the page that opened the editor.

## Preserved Behavior

The candidate preserves local-storage keys, the data schema, entry behavior,
saved-beverage tap and long-press behavior, report calculations, import and
export behavior, service-worker controls, offline behavior, manifest files,
icons, global body padding, global application width, and the two-column
beverage grid.

No global iPad layout, report layout, entry layout, beverage-form layout,
data schema, manifest, or icon change is included.

## Verification

Completed:

- JavaScript syntax checks;
- exact flat-package checks;
- release-identity checks;
- README URL presence and near-top ordering checks;
- Home Screen structure and label checks;
- original Caffeine and Reports style reuse checks;
- Home-scoped CSS checks;
- two-column beverage-grid preservation checks;
- Settings navigation-binding checks;
- manifest and icon byte-preservation checks.

Still required:

- Safari review on iPhone and iPad;
- Home Screen review;
- tap and long-press testing;
- Settings and Reports navigation testing;
- offline regression;
- data-integrity confirmation;
- explicit owner approval.

The active verified production baseline remains v2.0.8-r10 until all
blocking checks pass.

## Package

The candidate contains exactly 10 flat root-level files:

1. `README.md`
2. `MDCA-README-v2.0.9-r2.md`
3. `MDCA-RELEASE-v2.0.9-r2.md`
4. `index.html`
5. `manifest.json`
6. `service-worker.js`
7. `icon.png`
8. `apple-touch-icon.png`
9. `icon-192.png`
10. `icon-512.png`

The two README files are byte-for-byte identical.

## Deployment Control

1. Preserve the current verified r10 repository state and backup.
2. Confirm the r2 archive against its external SHA-256 file.
3. Extract the archive.
4. Upload only the 10 root files.
5. Commit without editing those files in GitHub.
6. open the r2 candidate verification URL;
7. complete Safari, Home Screen, navigation, integrity, and offline checks;
8. promote only after explicit owner approval.

Do not reuse r1 verification results as r2 evidence.

## Baseline and Recovery

The active verified production baseline is v2.0.8-r10.

The previous verified production archive is
`MDCA-v2.0.8-r6-VERIFIED.zip`, SHA-256
`4eb09dbacf4b2620000ca0cd6baee0024a6ed5a4dd6fd4da84f90ff73b343d73`.

The designated rollback baseline remains v2.0.7-r2.

If r2 fails a blocking control:

1. stop verification and preserve failure evidence;
2. restore all 10 verified v2.0.8-r10 root files;
3. commit the restoration;
4. load an r10 cache-busted URL;
5. activate the waiting service worker;
6. verify Safari, Home Screen, data integrity, Reports, and offline launch;
7. keep r2 rejected until corrected under a new revision.

Preserve the r10 and r6 verified archives, r2 candidate, checksums, source
diff, build evidence, and final device-verification record.
