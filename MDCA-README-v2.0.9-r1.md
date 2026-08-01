# MDCA README v2.0.9-r1

**Document version:** v2.0.9-r1  
**Application:** My Diet Coke Addiction  
**Status:** Release candidate  
**Feature scope:** Home Screen layout and Settings navigation  
**Verified production baseline:** v2.0.8-r10  
**Baseline archive:** `MDCA-v2.0.8-r10-VERIFIED.zip`  
**Baseline SHA-256:** `6e67e03b80e02658c2a6f33ec720146031e49a2f9110745a82e9b45dd6602144`  
**Build timestamp:** 2026-08-01T00:24:00-05:00

## Scope

v2.0.9-r1 changes the Home Screen presentation and introduces a Settings page.

### Home Screen

- remove the Home Screen title and description;
- display `v2.0.9-r1` directly beneath the MDCA icon;
- show only Carbonated, Caffeinated, and Caffeine in the Today row;
- use complete labels without abbreviations or the word “ounces”;
- retain the orange Caffeine appearance and `XX / 400 mg` value;
- remove the caffeine progress bar;
- give all three Today cards equal width and height;
- display only saved beverage buttons;
- remove Add Beverage placeholders and Quick Entry from the beverage grid;
- add an equal-width Settings and Reports row beneath the beverage buttons;
- place Settings on the left and Reports on the right;
- retain the existing blue Reports appearance for both buttons;
- make both action buttons equal in height to the Today cards.

### Settings

Settings contains:

- Manage Beverages;
- Quick Entry;
- Data Tools.

Manage Beverages is the Home workflow for adding a new beverage. Existing saved beverages remain editable by long-pressing their Home Screen buttons.

## Preserved Behavior

The release preserves:

- local-storage keys and data schema;
- entry creation, editing, copying, and deletion;
- new-entry save return to Home;
- saved-beverage long-press editing;
- reports and calculations;
- import, export, and recovery behavior;
- service-worker update workflow;
- offline behavior;
- manifest and icon assets.

No report-layout, entry-layout, beverage-form, data-schema, icon, or manifest redesign is included.

## Package

The candidate contains exactly 10 flat root-level files:

1. `README.md`
2. `MDCA-README-v2.0.9-r1.md`
3. `MDCA-RELEASE-v2.0.9-r1.md`
4. `index.html`
5. `manifest.json`
6. `service-worker.js`
7. `icon.png`
8. `apple-touch-icon.png`
9. `icon-192.png`
10. `icon-512.png`

`README.md` and `MDCA-README-v2.0.9-r1.md` are byte-for-byte identical.

## Verification Status

Completed:

- JavaScript syntax verification;
- exact flat-package verification;
- release-identity verification;
- Home Screen structure and label verification;
- Settings navigation-binding verification;
- removal of placeholder and Home Quick Entry rendering;
- preservation of manifest and four icon files.

Still required before production promotion:

- Safari visual review;
- Home Screen visual review;
- saved-beverage tap and long-press checks;
- Settings navigation checks on device;
- Reports navigation check;
- offline regression check;
- owner approval.

The active verified production baseline remains v2.0.8-r10 until all Blocking verification passes.
