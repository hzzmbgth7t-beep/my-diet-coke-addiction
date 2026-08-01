# MDCA Release Record v2.0.10-r1

**Application:** My Diet Coke Addiction  
**Release:** v2.0.10-r1  
**Status:** Release candidate  
**Release type:** Entry Screen layout candidate  
**Build timestamp:** 2026-08-01T18:08:00-05:00  
**Active verified baseline:** `v2.0.9-r3-VERIFIED`  
**Canonical baseline archive:** `MDCA-v2.0.9-r3-VERIFIED-DOCFIX1.zip`  
**Canonical baseline SHA-256:** `5de930b57377b220989a48a54a1d648746ae88b1656cbd21b8b701eded9d851f`  
**Candidate archive:** `MDCA-v2.0.10-r1-RC.zip`  
**Candidate SHA-256:** Recorded externally in the matching `.sha256` file

## Approved Scope

The shared Entry Screen is redesigned for saved-beverage entry, Quick Entry,
and editing an existing entry.

## Acceptance Criteria

- Back and fixed `Log Beverage` share the top row.
- The selected-date title remains.
- Totals appear as Carbonated, Caffeinated, and Caffeine in three equal 68px
  cards matching Home.
- Totals use rounded whole-number `oz`, `oz`, and `mg` values.
- Date, Time, and Ounces share one equal-width row.
- Name and Caffeine share one equal-width row.
- Caffeine has a fixed visual `mg` suffix while its stored value remains
  numeric.
- The existing Ounces title and preset buttons remain unchanged.
- Carbonated, Caffeinated, and Clear toggle groups share one equal-width row
  and use labels without question marks.
- Save controls and the final historical section remain unchanged.

## Scope Boundary

Operational changes are limited to `index.html` and the service-worker cache
identity. Documentation changes are limited to the three r1 release
documents. The manifest and all four icon files are byte-for-byte preserved.

No data-schema, storage-key, report, Home layout, beverage-management,
import/export, or service-worker workflow change is included.

## Release Identity

- visible Home version: `v2.0.10-r1`;
- export version: `2.0.10`;
- export revision: `r1`;
- backup filename prefix: `MDCA-backup-v2.0.10-`;
- service-worker cache: `MDCA-v2.0.10-r1`;
- reload key: `MDCA-sw-reload-v2.0.10-r1`.

## Verification Status

Automated source, syntax, structure, preservation, identity, and package
checks are recorded in `MDCA-BUILD-EVIDENCE-v2.0.10-r1.md`.

Device appearance, native field fit, touch behavior, persistence, offline
behavior, and owner approval remain **UNVERIFIED**.

## Promotion Control

The active verified baseline remains `v2.0.9-r3-VERIFIED`. Promotion requires
deployment of the exact candidate, complete Safari and Home Screen testing,
data-integrity and offline checks, and explicit owner approval.
