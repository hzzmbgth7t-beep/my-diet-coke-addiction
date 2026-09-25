# MDCA Product and UI Standards

**Edition:** 2026-08-02 Approved  
**Status:** Approved canonical standard

## 1. Shared Totals Component

Home, Log Beverage, detailed reports, and Reports-page Yesterday’s Totals use the same three-card pattern:

- Carbonated: rounded whole ounces with inline `oz`;
- Caffeinated: rounded whole ounces with inline `oz`;
- Caffeine: rounded whole milligrams with inline `mg`;
- no fractions;
- no `/400`;
- no right-pinned units.

Cards are equal, centered, contained, and responsive.

## 2. Reports Page

Order:

1. Yesterday’s Totals
2. Paired report-selection section with two columns:
   - Quick Reports | Custom Reports
   - Yesterday | Custom Day
   - Last Week | Custom Week
   - Last Month | Custom Month
3. Entries

Yesterday’s Totals is informational, uses the previous local calendar day, refreshes on Reports open and after save/edit/copy/delete/import/initialization, and matches the detailed Yesterday report.

## 3. Report Servings

- Carbonated = carbonated ounces / 12, nearest 0.5.
- Caffeinated = caffeine milligrams / 53, nearest whole number.
- Clear = clear ounces / 12, nearest 0.5.

Whole servings omit `.0`; half servings show `.5`.

## 4. Custom Report Selectors

Custom Day, Week, and Month use a centered visible field, 220-pixel maximum width, exact 46-pixel height, compact card, transparent native input overlay, and native `date`, `week`, and `month` controls.

Display formats: `Aug 1, 2026`, `Week 31, 2026`, and `August 2026`.

## 5. Navigation

Non-Home pages use centered headers, Back left, and a solid Home button right only when more than one Back action from Home. The stack follows actual previous pages. Back/Home prompt before discarding modified Log Beverage or Beverage Setup data.

## 6. Home and Settings

Home has equal blue Settings, two-line Quick Entry, and Reports buttons. Quick
Entry is not duplicated in Settings. Settings centers its title and shows the
complete visible application version beneath it. Data Tools also shows the same
complete visible version in place of a descriptive subtitle.

## 7. Data and Preservation

Unless explicitly in scope, preserve storage keys/schema, saved beverages, entry flows, import/export/recovery, Caffeine Stats, Drink Breakdown, Report Entries, service-worker update behavior, offline launch, manifest, and icons.

## 8. Shared Component Rule

Change a shared component once and reuse it. Duplicated approved components inherit the same rounding, labels, units, dimensions, and responsive behavior unless the owner explicitly approves a deviation.
