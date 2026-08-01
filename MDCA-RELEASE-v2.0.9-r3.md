# MDCA Release Record v2.0.9-r3

**Document version:** v2.0.9-r3  
**Application:** My Diet Coke Addiction  
**Release type:** Corrected Home Screen and beverage-rendering candidate  
**Status:** Release candidate  
**Build timestamp:** 2026-08-01T07:55:00-05:00  
**Active verified baseline:** v2.0.8-r10-VERIFIED  
**Previous verified production baseline:** v2.0.8-r6  
**Designated rollback baseline:** v2.0.7-r2  
**Baseline archive:** `MDCA-v2.0.8-r10-VERIFIED.zip`  
**Baseline SHA-256:** `6e67e03b80e02658c2a6f33ec720146031e49a2f9110745a82e9b45dd6602144`  
**Candidate archive:** `MDCA-v2.0.9-r3-RC.zip`  
**Candidate SHA-256:** Recorded in `MDCA-v2.0.9-r3-RC.zip.sha256`  
**Supersedes:** Rejected candidates v2.0.9-r1 and v2.0.9-r2

## Purpose

r3 corrects the hidden seventh-beverage defect in r2 and applies the approved
Home Screen refinements. It is rebuilt directly from the active verified
baseline rather than from either rejected candidate.

## Unlimited Beverage Control

The application no longer defines `MAX_BEVERAGE_SLOTS`, slices the saved
beverage array, or generates placeholder slots. `renderBeverageGrid()` loops
over every saved beverage in stored order.

The application imposes no numeric beverage maximum. Browser storage
capacity remains the practical limit.

Required verification counts are 0, 1, 6, 7, 12, 25, and 100 saved
beverages. Device acceptance additionally requires adding, reloading,
editing, deleting, exporting, and importing beverages beyond position six.

## Daily Totals Acceptance Criteria

- outer white container retained;
- `Today` heading absent;
- order is Carbonated, Caffeinated, Caffeine;
- three equal-width cards;
- 68-pixel minimum card height;
- labels above values;
- matching 16-pixel label and value sizes;
- matching line height and centered alignment;
- Carbonated and Caffeinated labels use MDCA red;
- Carbonated and Caffeinated values use black;
- Caffeine label retains orange;
- Caffeine value remains black;
- `XX / 400 mg` retained;
- progress bar absent.

## Beverage Section Acceptance Criteria

- outer white container retained;
- `Beverages` heading absent;
- tap and long-press instructions absent;
- two-column grid retained on phone and iPad;
- every saved beverage displayed;
- stored ordering retained;
- no Add Beverage placeholders;
- no Home Quick Entry button;
- empty-state text shown only when the saved list is empty.

## Home Action Acceptance Criteria

- Settings left and Reports right;
- both use the original blue `report-main` style;
- both use the original 18-pixel label size;
- both use original 15-pixel vertical padding;
- both have equal grid width;
- no 68-pixel or 92-pixel minimum-height override.

## Settings and Navigation

Settings contains Manage Beverages, Quick Entry, and Data Tools.

Settings Back returns Home. Manage Beverages opens Add Beverage. Beverage
save, Back, and delete return to the opening page. Quick Entry Back returns
Settings. A newly saved Quick Entry returns Home, preserving existing save
behavior. Data Tools Back returns Settings. Reports Back returns Home.

## Changed Operational Files

- `index.html`
- `service-worker.js`

The service worker changes only its cache identity.

## Preserved Files

These files are byte-for-byte identical to `v2.0.8-r10-VERIFIED`:

- `manifest.json`
- `icon.png`
- `apple-touch-icon.png`
- `icon-192.png`
- `icon-512.png`

## Release Identity

- visible version: `v2.0.9-r3`;
- export version: `2.0.9`;
- export revision: `r3`;
- backup prefix: `MDCA-backup-v2.0.9-`;
- cache: `MDCA-v2.0.9-r3`;
- reload key: `MDCA-sw-reload-v2.0.9-r3`.

## Verification Status

Automated source, syntax, documentation-order, identity, preservation,
package, and multi-count rendering checks are recorded externally.

Safari appearance, Home Screen appearance, touch behavior, persistence,
import/export with more than six beverages, offline behavior, data integrity,
and owner approval remain **UNVERIFIED**.

## Failure and Rollback

Any blocking failure rejects r3. Restore the exact 10-file
`v2.0.8-r10-VERIFIED` root, commit the restoration, activate the r10 service
worker, and verify Safari, Home Screen, saved data, Reports, and offline
launch.
