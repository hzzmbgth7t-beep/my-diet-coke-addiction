# My Diet Coke Addiction — V2.0.6 Locked Requirements Checklist

## Build Approach
- Clean rebuild from requirements, not patching older files.
- Package includes index.html, README-v2.0.6.md, and this checklist.
- Existing icon remains external as icon.png.

## Data / Migration
- Read existing entries from dietCokeEntriesV2, dietCokeTracker, and myDietCokeAddictionEntries.
- Save entries back to all existing entry keys.
- Save beverage buttons to dietCokeBeveragesV2.
- Backup includes both entries and beverage button setup.
- Import restores both entries and beverage button setup.
- Include Safari/Home Screen storage note.

## Home Screen
- Show app icon and title.
- Show Today summary using Carbonated Ounces instead of Total Ounces.
- Summary boxes: Carb Oz, Entries, Caf, Caf Oz.
- Show Today’s Caffeine mg with 400 mg reference.
- Show View Reports button.
- Show 2 columns x 3 rows of saved beverage slots.
- Empty beverage slots show plus sign.
- Quick Entry button present.
- Manage Beverages and Data Tools shortcuts present.

## Beverage Buttons
- Short press saved beverage opens Entry screen with defaults.
- Long press saved beverage opens Beverage Setup/Edit.
- Plus slot opens Beverage Setup.
- Quick Entry opens blank Entry screen.
- Quick Entry has no long-press behavior.

## Beverage Setup
- Beverage Name.
- Button Image.
- Initials.
- Default Size/Ounces.
- Caffeinated Yes/No.
- Default Caffeine mg.
- Carbonated Yes/No.
- Clear Yes/No.
- Save Beverage.
- Delete Beverage for existing buttons.
- Beverage statistics for existing beverages.
- Editing beverage offers Future Entries Only or All Existing Entries.

## Entry Screen
- Entry Date.
- Entry Time.
- Drink Name.
- 8, 12, 16, 20 ounce buttons.
- Manual Ounces.
- Caffeinated Yes/No.
- Carbonated Yes/No.
- Clear Yes/No.
- Caffeine mg.
- Helper text: Auto-calculated from beverage default. You can edit it.
- Selected-date summary uses Carbonated Ounces.
- Entries for selected date are collapsible.
- Entry list includes Edit, Copy, Delete.

## Save Flow
- Save Entry shows “✓ Save Complete,” resets form, then returns Home.
- Save Changes shows “✓ Changes Saved,” resets edit state, stays on Entry screen.
- After Save Changes, selected-date entry list remains expanded.

## Copy Entry
- Copy duplicates selected entry.
- Copy sets copied entry time to current time.
- Copy opens duplicate for review/editing.

## Caffeine Rules
- Formula: logged ounces ÷ default ounces × default caffeine mg.
- Round caffeine to 2 decimals using standard math rules.
- Store rounded caffeine value.
- Manual caffeine override allowed.

## Reports
- Quick Reports: Yesterday, Last Week, Last Month.
- Custom Reports: Custom Day, Custom Week, Custom Month.
- Report totals: Carb Oz, Entries, Caf, Caf Oz.
- Report includes Total Caffeine mg.
- Report includes Carbonated count and Clear count.
- Report includes Average Daily Caffeine.
- Report includes Highest Caffeine Day.
- Report includes Drink Breakdown.
- Report entries collapsible and editable/copy/delete.

## Data Tools
- Storage note.
- Backup Now.
- Last Backup timestamp.
- Import backup JSON.
- Current data summary.
