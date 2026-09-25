# MDCA Documentation and Communication Standard

**Edition:** 2026-08-02 Approved  
**Status:** Approved canonical standard

## 1. Release README

Include document version, application, status, scope, active baseline, canonical archive/checksum, rollback, candidate or approved production archive, timestamp, URLs near the beginning, release scope, preserved features, completed and remaining verification, package reference, and recovery.

Candidate documentation must state that the prior approved production baseline remains active until device testing and owner approval.

## 2. Release Record

Keep it concise: identity, status, scope, archives/checksums, baseline/rollback, promotion or rejection decision, verification, runtime identities, and changed/preserved files.

## 3. Build Evidence

Record source/output archives and checksums, result, test matrix or summary, preserved hashes where relevant, and remaining UNVERIFIED items.

## 4. Status Reporting

Lead with PASS, FAIL, CLEANUP REQUIRED, DEVICE TEST REQUIRED, APPROVAL REQUIRED, or UNVERIFIED. Separate verified facts from assumptions.

## 5. Artifact Links

Use direct selectable links exactly like:

`[Download filename.zip](sandbox:/mnt/data/filename.zip)`

Never insert citations or unrelated text into the sandbox path, split the link, or assume a malformed link is usable.

## 6. Mobile-Friendly Instructions

The owner works primarily on iPhone or iPad. Say “upload to the GitHub repository,” use short sequential instructions and direct links, and avoid wide tables, ordinary-text code fences, “iPad upload,” and repeated upload directions after PASS.

## 7. Conversation Command Rules

- `A` selects option a.
- Interpret lettered selections from the immediately preceding options.
- Check the repository after a selection only when that selected option includes repository work.
- Lettered options must represent complete actions or complete user states.
- Do not offer an external-action option that then requires the user to type an additional acknowledgment such as `uploaded`, `done`, or `deleted`.
- When owner action is external, provide a completion-state option that immediately authorizes the next step, for example: `The files have been uploaded and are ready for fresh live review.`
- `uploaded`, `loaded`, `done`, `committed`, and equivalent repository affirmations trigger immediate live verification.
- `Passed` records the identified test as passed.
- `Approved` authorizes the stated promotion.
- Never broaden a one-word acknowledgment beyond the offered action.

## 8. Follow-Up Options

Offer concise lettered options only when they help advance the workflow. When
external owner action is required, include both the action and an immediately
selectable completion-state option when appropriate. Do not request work
already verified complete.

## 9. Honesty and Scope

State limitations when live hashes were not computed, device behavior was not observed, an original document is unavailable verbatim, a web view may be cached, or evidence is local rather than uploaded.

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
