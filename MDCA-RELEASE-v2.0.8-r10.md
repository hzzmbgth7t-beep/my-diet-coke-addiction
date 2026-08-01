# MDCA Release Record v2.0.8-r10

**Document version:** v2.0.8-r10  
**Application:** My Diet Coke Addiction  
**Release type:** Verified maintenance release  
**Status:** Verified production release  
**Promotion timestamp:** 2026-07-31T22:38:00-05:00  
**Active verified production baseline:** v2.0.8-r10  
**Previous verified production baseline:** v2.0.8-r6  
**Designated rollback baseline:** v2.0.7-r2  
**Candidate archive:** `MDCA-v2.0.8-r10-RC.zip`  
**Candidate SHA-256:** `8f3ba1e81b127f856812f45995bb5ca6306dbefa1235643ffae9ccaca5fb122d`  
**Verified archive:** `MDCA-v2.0.8-r10-VERIFIED.zip`  
**Verified archive SHA-256:** Recorded in `MDCA-v2.0.8-r10-VERIFIED.zip.sha256`  
**Gate C:** PASS  
**Owner promotion approval:** APPROVED  
**Deployment commit:** **UNVERIFIED** — not recorded in the supplied evidence

## Promotion Summary

The exact tested r10 candidate completed automated Gate B verification, was deployed, and passed owner-confirmed Gate C checks in Safari, from the Home Screen, and offline.

The candidate archive remains immutable. Promotion to the verified archive changes only the three current-version documentation files:

- `README.md`;
- `MDCA-README-v2.0.8-r10.md`;
- `MDCA-RELEASE-v2.0.8-r10.md`.

The seven operational and asset files are byte-for-byte identical to the tested candidate.

## Maintenance Corrections Included

The verified release contains the approved v2.0.8 maintenance corrections completed through r10:

### Persistence and recovery

- transactional persistence;
- rollback after storage failure;
- import validation and recovery protection;
- file-read failure handling;
- non-blocking import and export feedback.

### Import correctness

- one active validated import implementation;
- exact beverage and entry added counts;
- duplicate and rejected-record accounting;
- impossible ISO calendar-date rejection;
- preservation of valid timestamps.

### Date and report correctness

- strict local date/time validation;
- unchanged timestamp preservation;
- ISO week boundaries and valid week 53 handling;
- safe previous-calendar-month calculation at month end;
- Custom Day end boundary of `23:59:59.999`.

### Offline and release identity

- user-controlled service-worker update activation;
- exactly one activation reload in the confirmed device workflow;
- MDCA-scoped cache cleanup;
- aligned visible, export, reload-key, cache, and documentation identities;
- resolved canonical r6 provenance.

No page-layout work, product feature, data-schema change, manifest change, icon change, or unrelated refactoring is included.

## Candidate Verification

The exact candidate SHA-256 `8f3ba1e81b127f856812f45995bb5ca6306dbefa1235643ffae9ccaca5fb122d` passed:

| Suite | Result |
|---|---:|
| Import tests | 10/10 PASS |
| Import observations | 91/91 PASS |
| Remaining Gate B tests | 11/11 PASS |
| Remaining Gate B observations | 118/118 PASS |
| Combined tests | 21/21 PASS |
| Combined observations | 209/209 PASS |
| Static and syntax controls | PASS |
| Flat 10-file package | PASS |
| README identity | PASS |
| Preserved manifest and icons | PASS |

No PASS result from a different candidate checksum was reused as final-candidate evidence.

## Gate C Verification

| Control | Result | Evidence |
|---|---:|---|
| Public application displays r10 | PASS | Live retrieval and owner confirmation |
| Repository source identifies r10 | PASS | Raw-source retrieval |
| Safari update prompt and activation | PASS | Owner screenshot and confirmation |
| Home Screen launch and persistence | PASS | Owner confirmation |
| Offline launch and persistence | PASS | Owner confirmation |
| Test-entry cleanup | PASS | Owner confirmation |
| Totals and data integrity | PASS | Owner confirmation |
| Post-verification backup | PASS | Owner confirmation |
| Owner promotion approval | PASS | Explicit owner confirmation |

The external record `MDCA-GATE-C-RESULT-v2.0.8-r10-FINAL.md` is the controlling Gate C evidence artifact and is intentionally excluded from the 10-file release root.

## Candidate-to-Verified Changes

### Documentation changed

- release status changed from Release candidate to Verified production release;
- active verified production baseline changed from r6 to r10;
- Gate C and owner approval recorded;
- deployment and recovery language changed from pending to completed;
- verified package identity added.

### Operational files preserved byte-for-byte

- `index.html`;
- `manifest.json`;
- `service-worker.js`;
- `icon.png`;
- `apple-touch-icon.png`;
- `icon-192.png`;
- `icon-512.png`.

## Verified Package Contents

Exactly 10 flat root-level files:

1. `README.md`
2. `MDCA-README-v2.0.8-r10.md`
3. `MDCA-RELEASE-v2.0.8-r10.md`
4. `index.html`
5. `manifest.json`
6. `service-worker.js`
7. `icon.png`
8. `apple-touch-icon.png`
9. `icon-192.png`
10. `icon-512.png`

No folder, prior-version document, test fixture, checklist, evidence file, or redundant release record is included.

## Production Status

v2.0.8-r10 is the active verified production baseline.

The previous verified production baseline is v2.0.8-r6. The designated rollback baseline remains v2.0.7-r2.

The deployment commit identifier is **UNVERIFIED** because it was not supplied. All other promotion claims above are limited to recorded automated evidence, live-source retrieval, and owner-confirmed device observations.

## Recovery

If a future release introduces a Blocking regression:

1. export and preserve the current production data when possible;
2. preserve failure evidence;
3. restore an approved known-good flat 10-file release;
4. verify visible release identity and existing data;
5. retain the immutable r10 verified archive and checksum;
6. perform additional corrections under a new revision or version.

Do not modify or silently replace the r10 release-candidate archive, r10 verified archive, or prior verified archives.
