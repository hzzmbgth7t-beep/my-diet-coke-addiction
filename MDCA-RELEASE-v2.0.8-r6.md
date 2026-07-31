# MDCA Release Record v2.0.8-r6

**Document version:** v2.0.8-r6  
**Application:** My Diet Coke Addiction  
**Release type:** Maintenance-only  
**Status:** Release candidate  
**Live URL:** `https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/`  
**Cache-Buster URL:** `https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?v=2.0.8-r6`  
**Rollback baseline:** v2.0.7-r2

## Documentation Change

This release includes both:

- `README.md`, for GitHub automatic display;
- `MDCA-README-v2.0.8-r6.md`, for the permanent versioned record.

The two README files are identical when the package is created.

`README.md` is the only documentation filename exempt from the version-number rule.

## Package Contents

Exactly 10 root-level files:

1. `index.html`
2. `manifest.json`
3. `service-worker.js`
4. `icon.png`
5. `apple-touch-icon.png`
6. `icon-192.png`
7. `icon-512.png`
8. `README.md`
9. `MDCA-README-v2.0.8-r6.md`
10. `MDCA-RELEASE-v2.0.8-r6.md`

No folders and no previous-version documents are included.

## Deployment

1. Export a backup from v2.0.7-r2.
2. Unzip `MDCA-v2.0.8-r6-SLIM.zip`.
3. Upload all 10 files to the repository root.
4. Delete obsolete r5 documentation.
5. Commit with `Deploy MDCA v2.0.8-r6 slim maintenance release`.
6. Open `https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?v=2.0.8-r6` after GitHub Pages deploys.

## Verification

- [ ] GitHub displays `README.md`
- [ ] Both README files show v2.0.8-r6
- [ ] Both README files match
- [ ] App shows `MDCA · Version 2.0.8-r6`
- [ ] Existing data remains visible
- [ ] Save, edit, reports, import, export, Home Screen, offline, and update checks pass

## Permanent Rule

For every future MDCA release:

- include `README.md`;
- include the matching versioned README;
- keep both README files synchronized;
- version every other documentation filename;
- exclude prior-version and redundant documentation.
