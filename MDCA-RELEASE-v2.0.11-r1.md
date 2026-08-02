# MDCA Release Record v2.0.11-r1

**Application:** My Diet Coke Addiction  
**Release:** v2.0.11-r1  
**Status:** Release candidate  
**Scope:** Unified report totals and serving calculations  
**Active verified baseline:** `v2.0.10-r4-VERIFIED`  
**Canonical baseline archive:** `MDCA-v2.0.10-r4-VERIFIED.zip`  
**Canonical baseline SHA-256:** `7af7c4b8872f69133d2a99b9ca0caf11978d67d9500bcd84807d26492183df82`  
**Candidate archive:** `MDCA-v2.0.11-r1-RC.zip`  
**Candidate SHA-256:** Recorded externally  
**Build timestamp:** 2026-08-02T08:56:00-05:00

## Approved Scope

All six report-detail types use the same two-row summary.

### Totals

- Carbonated: rounded whole ounces plus inline `oz`;
- Caffeinated: rounded whole ounces plus inline `oz`;
- Caffeine: rounded whole milligrams plus inline `mg`;
- no `/ 400`;
- no right-pinned unit.

### Servings

- Carbonated: carbonated ounces ÷ 12, nearest 0.5;
- Caffeinated: caffeine milligrams ÷ 53, nearest whole number;
- Clear: clear ounces ÷ 12, nearest 0.5.

The Servings row matches the Totals row card dimensions.

## Calculation Examples

Automated test data produced:

- 18 carbonated ounces → `18 oz` and `1.5` servings;
- 18 caffeinated ounces → `18 oz`;
- 79.5 caffeine milligrams → `80 mg` and `2` caffeinated servings;
- 12 clear ounces → `1` clear serving.

These are test values only and are not embedded as application totals.

## Release Identity

- visible version: `v2.0.11-r1`;
- export version: `2.0.11`;
- export revision: `r1`;
- backup prefix: `MDCA-backup-v2.0.11-`;
- service-worker cache: `MDCA-v2.0.11-r1`;
- reload key: `MDCA-sw-reload-v2.0.11-r1`.

## Changed Files

- `README.md`
- `MDCA-README-v2.0.11-r1.md`
- `MDCA-RELEASE-v2.0.11-r1.md`
- `index.html`
- `service-worker.js`

## Preserved Files

These remain byte-for-byte identical to `v2.0.10-r4-VERIFIED`:

- `manifest.json`;
- `icon.png`;
- `apple-touch-icon.png`;
- `icon-192.png`;
- `icon-512.png`.

## Device Verification Required

Verify the two report rows, all six report types, serving calculations,
navigation, entry lists, offline operation, data integrity, and owner
approval.
