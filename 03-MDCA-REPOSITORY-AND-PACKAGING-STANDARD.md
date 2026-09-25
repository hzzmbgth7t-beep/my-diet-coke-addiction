# MDCA Repository and Packaging Standard

**Edition:** 2026-08-02 Approved  
**Status:** Approved canonical standard

## 1. Live Repository Verification

For repository-related acknowledgments such as `A`, `uploaded`, `loaded`, `done`, `committed`, `approved`, `go`, `continue`, or `yes`, inspect the live repository immediately when the selected action includes repository work.

Do not infer upload success from a local archive, screenshot, prior check, or statement alone. Use cache-busted views when GitHub caching is possible.

## 2. Contextual Meaning of `A`

`A` means “select option a.” It triggers a live repository check only when option a includes repository work.

## 3. Repository Source of Truth

Verify the `main` branch root file list, README, versioned README, release record, `index.html`, and `service-worker.js`.

If views disagree because of caching, re-fetch with a unique query parameter and report the inconsistency until resolved.

## 4. Required Production Package

A release package contains exactly 10 complete, flat, root-level files:

1. `README.md`
2. `MDCA-README-v<release>.md`
3. `MDCA-RELEASE-v<release>.md`
4. `index.html`
5. `manifest.json`
6. `service-worker.js`
7. `icon.png`
8. `apple-touch-icon.png`
9. `icon-192.png`
10. `icon-512.png`

No folders, snippets, omitted unchanged files, legacy duplicates, or obsolete versioned documents are allowed. The package is a complete replacement set.

## 5. Documentation File Identity

`README.md` and the versioned README must be byte-for-byte identical. `## URLs` must appear at the top/near the beginning (target line 3) and include Repository, Live Application, and a revision-specific Cache Buster URL.

## 6. Release Identities

Visible version, export version/revision, backup prefix, service-worker cache,
reload key, README identity, and release-record identity must be consistent.
Non-production visible versions include their suffix/descriptor; approved
production visible versions use only the version/revision. Data Tools displays
the same complete visible identity.

The cache and reload key change for every deployed runtime revision.

## 7. Required Build Artifacts

Produce the complete ZIP, ZIP SHA-256 file, per-file SHA-256 manifest, build evidence, source or promotion diff, and optional standalone index/screenshots. Supporting artifacts are not included in the 10 production files.

## 8. Post-Upload Verification

Verify exact root count and names, removal of superseded files, document status/baseline, runtime identity, service-worker identity, and release feature implementation.

After PASS, state that no further upload or deletion is required. Do not request a repeated upload unless current evidence proves it is needed.

## 9. Byte Equivalence

“Runtime unchanged” may be claimed after local candidate-to-production comparison. “Live files exactly match the ZIP” may be claimed only after comparing every live file.

## Artifact Filename Date/Time Standard

Every newly created backup, save, archive, handoff, evidence, checksum, export,
snapshot, and other generated artifact filename must include a timestamp in the
form `YYYY-MM-DD-HHMM`.

`HHMM` is always 24-hour U.S. Eastern Time. The timezone is defined by this
governance standard and therefore is not written into the filename.

The current date and Eastern Time must be obtained from a live/system time
source each time an artifact is created. Never guess the date or time, and
never derive it from conversation history or a previous artifact.

Existing historical filenames are not renamed retroactively. This rule applies
to newly generated artifacts and supersedes any prior instruction to append
`-ET` to filenames.
