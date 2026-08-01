# MDCA Release Record v2.0.9-r1

**Document version:** v2.0.9-r1  
**Application:** My Diet Coke Addiction  
**Release type:** Home Screen layout feature candidate  
**Status:** Release candidate  
**Build timestamp:** 2026-08-01T00:24:00-05:00  
**Verified production baseline:** v2.0.8-r10  
**Baseline archive:** `MDCA-v2.0.8-r10-VERIFIED.zip`  
**Baseline SHA-256:** `6e67e03b80e02658c2a6f33ec720146031e49a2f9110745a82e9b45dd6602144`  
**Candidate archive:** `MDCA-v2.0.9-r1-RC.zip`

## Approved Scope

Only the Home Screen layout and the supporting Settings navigation are changed.

### Home Screen acceptance criteria

- icon remains centered;
- title and description are absent;
- `v2.0.9-r1` appears directly beneath the icon;
- Today row order is Carbonated, Caffeinated, Caffeine;
- all three Today cards use equal grid width and minimum height;
- Carbonated and Caffeinated show their current volume totals;
- labels are not abbreviated;
- labels do not contain “ounces”;
- Caffeine retains the orange card appearance;
- Caffeine displays the existing value format `XX / 400 mg`;
- no caffeine progress bar is rendered;
- the beverage grid contains saved beverages only;
- no Add Beverage placeholder is rendered;
- Quick Entry is absent from the beverage grid;
- Settings and Reports appear beneath beverage selection;
- Settings is left and Reports is right;
- both action buttons are equal width, equal height, and blue;
- Reports text is exactly `Reports`.

### Settings acceptance criteria

- Settings opens from Home;
- Back returns from Settings to Home;
- Manage Beverages opens Add Beverage;
- Quick Entry opens the one-time entry workflow;
- backing out of Settings Quick Entry returns to Settings;
- Data Tools opens from Settings;
- Data Tools Back returns to Settings.

## Changed Files

- `index.html`
- `service-worker.js`
- `README.md`
- `MDCA-README-v2.0.9-r1.md`
- `MDCA-RELEASE-v2.0.9-r1.md`

## Preserved Files

The following are byte-for-byte identical to the verified v2.0.8-r10 baseline:

- `manifest.json`
- `icon.png`
- `apple-touch-icon.png`
- `icon-192.png`
- `icon-512.png`

## Release Identity

- visible Home version: `v2.0.9-r1`;
- export version: `2.0.9`;
- export revision: `r1`;
- backup filename prefix: `MDCA-backup-v2.0.9-`;
- service-worker cache: `MDCA-v2.0.9-r1`;
- reload key: `MDCA-sw-reload-v2.0.9-r1`.

## Candidate Verification

Static and syntax verification are recorded in the external build evidence.

Device-level visual, touch, Home Screen, and offline tests remain **UNVERIFIED** until executed against this exact candidate checksum.

## Promotion Control

Do not modify or silently replace the candidate after its checksum is recorded.

Production promotion requires:

1. deployment of the exact 10-file candidate;
2. Safari and Home Screen visual acceptance;
3. tap and long-press beverage regression checks;
4. Settings and Reports navigation checks;
5. offline regression verification;
6. data-integrity confirmation;
7. explicit owner approval;
8. creation of a separately documented verified archive.
