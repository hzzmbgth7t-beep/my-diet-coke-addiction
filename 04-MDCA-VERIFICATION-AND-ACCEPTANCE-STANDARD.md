# MDCA Verification and Acceptance Standard

**Edition:** 2026-08-02 Approved  
**Status:** Approved canonical standard

## 1. Verification Layers

Verification has four separate layers:

1. source and package integrity;
2. automated runtime and geometry checks;
3. live repository verification;
4. physical-device acceptance.

Passing one layer does not imply another.

## 2. Minimum Automated Checks

As applicable, every runtime candidate verifies source checksum, exact file set, flat ZIP, README identity and URL placement, JavaScript and service-worker syntax, all release identities, preserved assets, feature calculations, refresh behavior, preserved navigation/storage/import/export/offline structure, and mobile geometry at 320, 375, 390, 414, and 430 CSS pixels.

Report the number of checks passed, but do not treat the count alone as proof of sufficient coverage.

## 3. Physical-Device Checks

Relevant owner tests include Safari, installed Home Screen app, real saved data, navigation and prompts, native picker activation, add/edit/copy/delete, import/export, data integrity, offline launch, and service-worker update.

## 4. Acceptance Gate

Promotion requires automated PASS, repository deployment and verification, required device PASS, and explicit owner approval.

Anything not tested remains UNVERIFIED.

## 5. Visual Evidence

Screenshots can verify size, alignment, overflow, labels, and visible values. They do not prove interaction, navigation, persistence, offline behavior, or service-worker replacement.

## 6. Test Data Rules

Include normal values, zero values, rounding boundaries, local date boundaries, current-day exclusion for yesterday calculations, mutations proving refresh, and summary/detail comparisons. Never hard-code screenshot values into production logic.

## 7. Failure Handling

Identify the failed gate, reject the candidate when acceptance is affected, preserve evidence without carrying forward an overall PASS, create a new revision, and rerun regressions.
