# MDCA Release Record v2.0.12-r4

**Application:** My Diet Coke Addiction  
**Status:** Approved production release  
**Production identity:** `v2.0.12-r4`  
**Canonical archive:** `MDCA-v2.0.12-r4.zip`  
**Canonical SHA-256:** Recorded externally in `MDCA-v2.0.12-r4.zip.sha256`  
**Source candidate:** `v2.0.12-r4-RC`  
**Source candidate SHA-256:** `43cfc938765dfeac750b149c9f923b3ffc4be3c3df8cc5c4f8957fe27597600d`  
**Immediate rollback:** `v2.0.12-r3-VERIFIED`  
**Rollback SHA-256:** `e3e66b174ad4877b2be17f51fa22061646311558200331d40d9491e59b6d64cf`  
**Owner acceptance:** 2026-08-13

## URLs

**Repository:** https://github.com/hzzmbgth7t-beep/my-diet-coke-addiction

**Live application:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/

**Cache Buster:** https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?cb=v2.0.12-r4

## Scope

Reports layout only:

- Quick Reports left column;
- Custom Reports right column;
- Yesterday / Custom Day;
- Last Week / Custom Week;
- Last Month / Custom Month;
- former standalone Custom Reports section removed.

## Version Convention

New approved production releases use the version/revision only, without a
`-VERIFIED` suffix. Historical release names are retained as historical records.

## Promotion Integrity

Only the RC suffix was removed from visible in-app identity. All tested feature
logic remains unchanged from the accepted RC.

## Recovery

Immediate rollback: `v2.0.12-r3-VERIFIED`.

## Artifact Filename and Full-Update Standard

Every newly created backup, save, archive, handoff, evidence, checksum, export,
snapshot, and other generated artifact filename must include `YYYY-MM-DD-HHMM`.
`HHMM` is 24-hour U.S. Eastern Time. The current date and Eastern Time must be
obtained from a live/system time source each time an artifact is created; never
guess, infer, or reuse the date/time from conversation history or an earlier
artifact. The timezone is defined by governance, so `-ET` is not appended.

Existing historical filenames remain unchanged.

No update may be treated as complete when only part of the applicable
documentation or governed artifact set has been updated. Every change to a
requirement, standard, release fact, naming convention, workflow rule, or other
governed behavior requires one synchronized full update of every applicable
item. This includes the production README, versioned README, release record,
affected governance standards, Current Status, Decision/Change Log, Handoff,
and any other document or artifact to which the change applies. Cross-document
consistency must be verified before the update is declared complete.
