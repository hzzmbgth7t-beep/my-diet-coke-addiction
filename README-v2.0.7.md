# My Diet Coke Addiction - Version 2.0.7

## Changes in V2.0.7

- Improved Save Entry confirmation
- After saving a new entry:
  - App returns to the Home screen
  - A larger “✓ Entry Saved” message appears near the top
  - The message remains visible longer
- Backup filename changed to:

MDCA-backup-v2.0.7-YYYY-MM-DD.json

Example:

MDCA-backup-v2.0.7-2026-06-03.json

## Still Included

- Clean V2 build foundation
- Carbonated ounces summary
- Beverage buttons
- Quick Entry
- Beverage setup/editing
- Entry Date and Entry Time
- Historical date/time editing
- Copy Entry
- Caffeine scaling by ounces
- Caffeine rounded to 2 decimal places
- Import/Export backup
- Safari vs Home Screen storage note

## Files

- index.html
- README.md
- README-v2.0.7.md
- LOCKED-REQUIREMENTS-v2.0.6.md

Keep your icon file named:

icon.png

## Install

Upload the unzipped files to GitHub.

Do not upload the ZIP itself.

## PWA Release Packaging Completion

This release package also includes:

- linked `manifest.json`
- registered `service-worker.js`
- release-specific cache `my-diet-coke-addiction-v2.0.7-r1`
- `apple-touch-icon.png`
- `icons/icon-180.png`
- `icons/icon-192.png`
- `icons/icon-512.png`
- visible Version 2.0.7 identifier on the Home screen

These changes complete the installable/offline package without changing the
accepted entry, beverage, report, import, export, or migration data model.
