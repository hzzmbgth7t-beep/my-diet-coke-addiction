# MDCA README v2.0.9-r3

**Document version:** v2.0.9-r3  
**Application:** My Diet Coke Addiction  
**Status:** Verified production  
**Active verified baseline:** `v2.0.9-r3-VERIFIED`  
**Immediate rollback baseline:** `v2.0.8-r10-VERIFIED`  
**Previous verified archive:** `MDCA-v2.0.8-r10-VERIFIED.zip`  
**Previous verified archive SHA-256:** `6e67e03b80e02658c2a6f33ec720146031e49a2f9110745a82e9b45dd6602144`  
**Canonical verified archive:** `MDCA-v2.0.9-r3-VERIFIED-DOCFIX1.zip`  
**Canonical archive SHA-256:** Recorded externally in `MDCA-v2.0.9-r3-VERIFIED-DOCFIX1.zip.sha256`  
**Superseded archive:** `MDCA-v2.0.9-r3-VERIFIED.zip`  
**Superseded archive SHA-256:** `6cc68ec6ae5356634b96e8c8510820f64f33300fe76ef64a2491e2bcd72a01f3`  
**Supersession reason:** Documentation-only correction; runtime verification remains valid  
**Tested release candidate:** `MDCA-v2.0.9-r3-RC.zip`  
**Tested candidate SHA-256:** `c65910f3307d69a8a8f6c087cf66c9813c5748e45dce2c1ce697892349e0ed69`  
**Promotion timestamp:** 2026-08-01T08:45:00-05:00  
**Documentation correction:** `DOCFIX1` at 2026-08-01T13:06:00-05:00

## URLs

**Repository:** https://github.com/hzzmbgth7t-beep/my-diet-coke-addiction

**Live application:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/

**Verified-release URL:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?v=2.0.9-r3

## Documentation Correction

`DOCFIX1` removes stale repository-finalization instructions from the
release record after that upload had already been completed.

This correction changes documentation only. The tested runtime, release
identity, Gate C result, owner approval, active baseline, and rollback
baseline are unchanged.

The original `MDCA-v2.0.9-r3-VERIFIED.zip` archive is superseded as a
canonical documentation artifact. It is not rejected as a tested runtime
artifact.

## Verified Release Scope

v2.0.9-r3 is the verified production release for the Home Screen layout and
unlimited saved-beverage work. It was rebuilt from
`v2.0.8-r10-VERIFIED`, deployed, tested in Safari and the installed Home
Screen app, and explicitly approved by the owner.

Rejected candidates v2.0.9-r1 and v2.0.9-r2 remain rejected and must not be
used as verified baselines.

### Home Header

- retain the MDCA icon;
- remove the Home title and description;
- display `v2.0.9-r3` directly beneath the icon.

### Daily Totals

- retain the outer white container;
- remove the `Today` heading;
- show Carbonated, Caffeinated, and Caffeine from left to right;
- use equal-width cards with a 68-pixel minimum height;
- place labels above values;
- use matching typography and centering;
- use MDCA red labels and black values for Carbonated and Caffeinated;
- retain the orange Caffeine label and black `XX / 400 mg` value;
- render no caffeine progress bar.

### Saved Beverages

- retain the outer white container;
- remove the `Beverages` heading and usage instructions;
- retain the two-column grid on phone and iPad;
- display every saved beverage in stored order;
- impose no application-level beverage maximum;
- render no Add Beverage placeholder;
- render no Quick Entry button in the beverage grid;
- show a non-button empty state when no beverages exist.

Browser storage capacity is the practical storage limit.

### Home Actions and Settings

- place Settings left and Reports right beneath beverages;
- retain equal widths, blue styling, and 18-pixel labels;
- use compact button height;
- Settings contains Manage Beverages, Quick Entry, and Data Tools;
- beverage save, Back, and delete return to the page that opened the editor.

## Verification Result

**Gate C: PASS**

The owner reported all required testing successful and then explicitly
approved promotion.

Verified workflows include:

- Safari and installed Home Screen appearance;
- saved-beverage rendering beyond six items;
- adding, reloading, editing, and deleting beverages;
- Settings and Reports navigation;
- import/export and data integrity;
- offline launch and offline persistence.

The repository root and key r3 identities were also remotely checked before
promotion. Exact remote blob-byte comparison against the RC archive was not
independently available through the public interface; the final verified
archive preserves all seven operational and asset files byte-for-byte from
the tested RC.

## Package Integrity

The verified archive contains exactly 10 flat root files:

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

Only the three documentation files changed during promotion and this
documentation correction. The seven operational and asset files are
byte-for-byte identical to both the tested r3 RC and the superseded verified
archive.

## Recovery

The immediate rollback baseline is `v2.0.8-r10-VERIFIED`.

If rollback is required:

1. export current data from affected environments;
2. restore all 10 files from `MDCA-v2.0.8-r10-VERIFIED.zip`;
3. commit the restoration;
4. open the application with an r10 cache-buster;
5. activate the waiting r10 service worker;
6. verify Safari, Home Screen, saved data, Reports, and offline launch.

Historical controls retained for recovery provenance:

- previous verified production archive:
  `MDCA-v2.0.8-r6-VERIFIED.zip`;
- r6 SHA-256:
  `4eb09dbacf4b2620000ca0cd6baee0024a6ed5a4dd6fd4da84f90ff73b343d73`;
- legacy designated rollback baseline:
  `v2.0.7-r2`.
