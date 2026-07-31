# DEPLOYMENT — My Diet Coke Addiction v2.0.7

**Deployment status:** Prepared; not yet confirmed deployed  
**Package date:** July 30, 2026  
**Package revision:** r2  
**Repository:** `hzzmbgth7t-beep/my-diet-coke-addiction`  
**GitHub Pages URL:** `https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/`

## 1. Pre-Deployment Backup

Before replacing any files:

1. Open the currently working application.
2. Open **Data Tools**.
3. Select **Backup Now**.
4. Confirm the downloaded filename.
5. Keep the backup outside the GitHub repository.

**Required backup filename:**

`MDCA-backup-v2.0.7-YYYY-MM-DD.json`

**Backup created:** Not yet confirmed  
**Backup filename:** To be recorded before deployment

## 2. Files to Upload

Upload the unzipped package contents to the repository root:

- `index.html`
- `manifest.json`
- `service-worker.js`
- `icon.png`
- `apple-touch-icon.png`
- `icons/icon-180.png`
- `icons/icon-192.png`
- `icons/icon-512.png`
- `README.md`
- `README-v2.0.7.md`
- `README-v2.0.6.md`
- `LOCKED-REQUIREMENTS-v2.0.6.md`
- `CHANGELOG-v2.0.7.md`
- `FIXNOTES-v2.0.7.md`
- `DEPLOYMENT-v2.0.7.md`
- `RELEASE-VERIFICATION-v2.0.7.md`
- `RELEASE-MANIFEST-v2.0.7.sha256`

## 3. Replacement Record

- `index.html` replaced: Required
- README uploaded: Required
- version README uploaded: Required
- changelog uploaded: Required
- fix notes uploaded: Required
- deployment record uploaded: Required
- `icon.png` changed: No; accepted source icon retained
- derived PWA icons added: Yes
- service worker replaced: Yes
- manifest replaced: Yes

## 4. GitHub Upload Procedure

1. Open the repository.
2. Select **Add file** → **Upload files**.
3. Upload the unzipped files and the `icons` folder.
4. Confirm the repository root contains `index.html`.
5. Commit with a message such as:

   `Complete v2.0.7 PWA release package`

6. Wait for GitHub Pages deployment to finish.
7. Open the GitHub Pages URL in a new Safari tab.

## 5. Cache-Clearing and Update Steps

Because a service worker may retain older files:

1. Close all open application tabs.
2. Reopen the GitHub Pages URL in Safari.
3. Refresh the page.
4. Open the cache-buster URL: `https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?v=2.0.7-r2`.
5. Confirm **Version 2.0.7** appears below the title.
6. For an existing Home Screen installation:
   - open it once while online;
   - close it completely;
   - reopen it;
   - confirm Version 2.0.7.
7. If the prior version remains:
   - remove the Home Screen icon;
   - clear the site’s Safari website data if appropriate;
   - reload the GitHub Pages URL;
   - add it to the Home Screen again.

## 6. Post-Deployment Verification

Record each result as PASS or FAIL.

- GitHub Pages launch: Pending
- Home Screen launch: Pending
- Version 2.0.7 visible: Pending
- Existing data visible: Pending
- New entry saves: Pending
- `✓ Entry Saved` appears: Pending
- Edited entry saves: Pending
- `✓ Changes Saved` appears: Pending
- Entry time persists: Pending
- Caffeine scaling is correct: Pending
- Backup export succeeds: Pending
- Backup filename is correct: Pending
- Import succeeds: Pending
- Offline launch succeeds after one online load: Pending
- Safari/Home Screen transfer workflow succeeds: Pending

## 7. Rollback

If deployment fails:

1. Restore the previous repository commit.
2. Allow GitHub Pages to redeploy.
3. Reopen the prior application.
4. Import the pre-deployment backup only if data is missing.
5. Record the failure in `FIXNOTES-v2.0.7.md`.

## 8. Known Deployment Issues

None confirmed yet. Manual deployment verification remains pending.


## 9. README Launch-Link Verification

Before deployment approval, confirm `README.md` begins with:

- Live Application: `https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/`
- Cache-Buster Launch: `https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?v=2.0.7-r2`

This requirement is governed by `README-STANDARD.md` and rule
`MDCA-RA-001-E`.
