# MDCA Release Lifecycle

**Edition:** 2026-08-02 Approved  
**Status:** Approved canonical standard

## 1. Version Model

Application releases use `vMAJOR.MINOR.PATCH-rREVISION`.

Candidate archive: `MDCA-vMAJOR.MINOR.PATCH-rREVISION-RC.zip`

Approved production archive: `MDCA-vMAJOR.MINOR.PATCH-rREVISION.zip`

Approved production designation: `vMAJOR.MINOR.PATCH-rREVISION`

Non-production builds must display their complete suffix or descriptor in-app.
Release candidates display `-RC`. Approved production releases use only the
version/revision with no status suffix. New production releases do not use a
`-VERIFIED` suffix in-app, filenames, README titles, baseline names, or normal
release terminology. Historical releases retain their original historical
names and checksums.

## 2. Build Baseline

Every candidate must be built from the current canonical approved production archive, not an unverified repository snapshot or earlier candidate.

Before modification:

1. verify the archive exists;
2. verify its SHA-256;
3. verify its expected file set;
4. record the baseline in build evidence.

## 3. Candidate Lifecycle

1. Requirements confirmed.
2. Candidate built.
3. Automated verification.
4. Candidate archive issued.
5. Repository upload.
6. Live repository verification.
7. Physical-device testing.
8. Owner approval or rejection.
9. Approved production promotion package.
10. Production package upload.
11. Final live verification.
12. Current Status and Handoff updated.

No candidate becomes active before device testing and owner approval.

## 4. Revision Rules

A correction gets a new revision. Rejected revisions remain rejected and are never retroactively verified. Record the rejection reason and correcting revision.

## 5. Approval Semantics

- **Passed** records the stated test result.
- **Approved** authorizes promotion.
- `A` selects only option a.
- If option a is promotion, `A` authorizes promotion.
- If option a is testing, `A` authorizes testing, not promotion.

## 6. Promotion

Promotion normally preserves all tested feature logic and assets. The specifically
authorized removal of a non-production status suffix from visible version
identity (for example `-RC`) is permitted during promotion. Any other runtime
change requires a new candidate revision and test cycle.

## 7. Baselines and Rollback

Always record the active production baseline, immediate rollback baseline, canonical archive names, and SHA-256 values. The immediate rollback is normally the previously active production baseline.

## 8. Rejection and Recovery

On failure, mark the candidate REJECTED, preserve the reason, restore the complete approved rollback package when necessary, activate its service worker, verify app/data/offline behavior, and create a new revision.
