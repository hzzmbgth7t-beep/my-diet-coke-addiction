# MDCA Decision and Change Log

**Edition:** 2026-08-02 Approved  
**Status:** Approved canonical standard

## Reconstructed Opening Governance

The initial operating model established these durable principles:

- build from a controlled verified baseline;
- issue complete replacement packages;
- use candidate revisions before verified promotion;
- preserve rollback capability;
- require automated and physical-device verification;
- keep release documentation and checksums;
- protect storage, navigation, and offline behavior.

The exact verbatim text of any opening governance files not present in the current visible context is not reproduced. This set consolidates their preserved operational substance.

## Amendments and Additions

### Repository verification after acknowledgments

Repository-related acknowledgments now trigger immediate live verification.

### Contextual `A`

`A` selects option a and triggers repository verification only when that option includes repository work.

### Live repository versus local archive

Local ZIPs prove build output; cache-busted live inspection proves current uploaded contents.

### Exact 10-file package

Legacy `app.js`, `styles.css`, and `sw.js` caused cleanup. The approved root is now exactly 10 flat files with no obsolete documents.

### Complete replacement files

Packages contain complete files, never snippets.

### README consistency

README and versioned README are byte-identical; `## URLs` appears near the beginning.

### Candidate correction and rejection

Failed revisions remain rejected. Corrections receive a new revision and full regression testing.

### Device acceptance before promotion

Automated PASS and deployment are insufficient. Device PASS and explicit owner approval are required.

### Documentation-only promotion

Approved runtime/assets remain unchanged during promotion. Runtime changes require a new candidate.

### Direct artifact links

A malformed link led to the exact sandbox-link rule.

### Mobile terminology

Use “GitHub repository upload,” not “iPad upload,” and keep instructions suitable for iPhone/iPad.

### No repeated upload instructions

After live PASS, do not request another upload or deletion without new evidence.

### Precise evidence claims

Do not claim exact live byte equivalence unless every live file was compared.

### Stable policy separated from status

Stable governance contains policy; Current Status contains mutable facts; release records contain historical evidence.


### Architecture and coding standard

Release governance defined packaging and acceptance but did not provide
one implementation standard for the static PWA, data contracts, state
mutations, storage compatibility, code structure, security,
accessibility, performance, and controlled refactoring.

`10-MDCA-ARCHITECTURE-AND-CODING-STANDARDS.md` is now the canonical
implementation standard. It preserves the approved dependency-free,
static-PWA and 10-file deployment architecture unless the owner approves
an architectural migration.

**Approved:** 2026-08-02 18:12 CDT


### v2.0.12-r2 hardening and promotion

A behavior-preserving hardening review identified external-boundary, storage,
dynamic event-dispatch, beverage-image, and service-worker cache-integrity
improvements. The work was isolated in `v2.0.12-r2-RC` without changing the
approved static PWA architecture or report/calculation semantics.

Home Screen physical-device acceptance completed 15/15 PASS. The owner
explicitly approved promotion on 2026-08-12. Promotion to
`v2.0.12-r2-VERIFIED` was documentation-only; runtime and asset files remained
byte-for-byte identical to the approved RC.

After promotion:

- active verified baseline: `v2.0.12-r2-VERIFIED`;
- immediate rollback: `v2.0.12-r1-VERIFIED`;
- previous rollback: `v2.0.11-r3-VERIFIED`.

### Fresh live repository evidence rule

Repository-state commentary must always be preceded by a fresh live
verification of the current repository. Cached, archived, indexed, or
previously retrieved repository state is not acceptable evidence. If fresh
verification is unavailable, current repository state must be reported as
unverified rather than inferred.


### v2.0.12-r3 Entries expansion and version identity

`v2.0.12-r3` added Entries sections to Home (current local day) and Reports
(previous local day), while standardizing Entries show/hide scrolling across
the existing Entries views. Show exposes the complete panel when possible or
aligns the Entries bar to the viewport top when the panel is too tall. Hide
collapses and returns the page to the top.

The owner established a permanent visible-version rule: non-production builds
must display their complete suffix/descriptor (for example `-RC`). Verified
production builds display only the actual version/revision and never display
`-VERIFIED` in-app. Data Tools displays the same complete visible identity.

Home Screen r3 acceptance completed 8/8 PASS and explicit promotion approval
was granted on 2026-08-12.

After promotion:

- active verified baseline: `v2.0.12-r3-VERIFIED`;
- immediate rollback: `v2.0.12-r2-VERIFIED`;
- previous rollback: `v2.0.12-r1-VERIFIED`.


### v2.0.12-r4 Reports layout

The Reports selection area was consolidated into one two-column card. Quick
Reports occupies the left column and Custom Reports the right column, pairing
Yesterday/Custom Day, Last Week/Custom Week, and Last Month/Custom Month. The
standalone Custom Reports card was removed. The owner reported complete testing
and accepted the r4 candidate on 2026-08-13.

### Production version naming

Beginning with `v2.0.12-r4`, approved production releases use only their
version/revision, for example `v2.0.12-r4`. New production releases do not use a
`-VERIFIED` suffix in-app, archive filenames, README titles, baseline names, or
normal release terminology. Non-production builds must display an explicit
suffix/descriptor such as `-RC`. Historical releases retain their original
historical names and checksums.

### Complete-action option semantics

Lettered workflow options must represent complete actions or complete user
states. An option must not require a second acknowledgment such as `uploaded`,
`done`, or `deleted` before the assistant can continue. For external owner
actions, provide a completion-state option that directly triggers the next
verification step.

## Baseline Progression

- `v2.0.8-r10-VERIFIED`
- `v2.0.9-r3-VERIFIED`
- `v2.0.10-r4-VERIFIED`
- `v2.0.11-r3-VERIFIED`
- `v2.0.12-r1-VERIFIED`
- `v2.0.12-r2-VERIFIED`
- `v2.0.12-r3-VERIFIED`
- `v2.0.12-r4`

Rejected candidates: `v2.0.11-r1`, `v2.0.11-r2`.

## Redundancy Removed

Command semantics appear only in the Communication Standard, package rules only in the Packaging Standard, acceptance gates only in the Verification Standard, mutable facts only in Current Status, durable UI behavior only in Product Standards, implementation rules only in the Architecture and Coding Standards, and full historical rationale only in this log.

### 2026-09-25-1721 — Artifact filename timestamp standard

All newly generated backup, save, archive, handoff, evidence, checksum, export,
snapshot, and other artifact filenames must include `YYYY-MM-DD-HHMM`, using
24-hour U.S. Eastern Time. The current date/time must be obtained from a
live/system time source at creation time and must never be guessed. The timezone
is understood from governance and is not included as `-ET` in filenames.
Historical filenames remain unchanged.
