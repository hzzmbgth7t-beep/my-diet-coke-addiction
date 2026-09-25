# MDCA Architecture and Coding Standards

**Version:** 1.0  
**Edition:** 2026-08-02 Approved  
**Status:** Approved canonical standard  
**Owner approval:** 2026-08-02 18:12 CDT  
**Application:** My Diet Coke Addiction

## 1. Purpose and Authority

This document is the canonical implementation standard for MDCA.

It governs:

- application architecture;
- file responsibilities;
- HTML, CSS, and JavaScript organization;
- application state and persistence;
- data contracts and compatibility;
- calculations and local date handling;
- service-worker behavior;
- security, privacy, accessibility, and performance;
- refactoring and architectural migration controls.

It does not redefine:

- release packaging, governed by the Repository and Packaging Standard;
- release gates, governed by the Verification and Acceptance Standard;
- product behavior, governed by the Product and UI Standards;
- current release identities, governed by Current Status.

When guidance conflicts, the Charter's precedence rules apply.

## 2. Architectural Baseline

MDCA is a static, local-first, offline-capable progressive web application.

The approved architecture is:

- a single-page application;
- hosted as static files;
- usable in Safari and as an installed Home Screen app;
- dependent only on browser-native APIs;
- free of server-side application code;
- free of external runtime libraries, frameworks, fonts, analytics, and
  trackers;
- persistent through local browser storage;
- installable through a web app manifest;
- offline-capable through a service worker.

The application must not transmit entries, beverages, backups, images, or
usage information to a remote service unless the owner approves a new
architecture and privacy model.

## 3. Deployment Topology

The production application remains the approved 10-file package defined by
the Repository and Packaging Standard.

### `index.html`

Contains:

- document metadata;
- application CSS;
- all page markup;
- application state;
- persistence logic;
- calculations;
- render functions;
- event handling;
- import and export;
- service-worker registration and update UI.

CSS and application JavaScript remain inline until an explicit governance
amendment changes the deployment topology.

Do not add `app.js`, `styles.css`, `sw.js`, framework bundles, source maps,
or other runtime files without owner approval and a packaging-standard
update.

### `manifest.json`

Contains install metadata, identity, scope, start URL, display mode,
orientation, theme colors, and icon declarations.

### `service-worker.js`

Owns:

- application-shell precaching;
- navigation fallback;
- same-origin runtime caching;
- old MDCA cache cleanup;
- update activation messaging.

### Icons

The four approved icon files are presentation assets. Do not re-encode,
resize, or replace them outside an approved icon change.

### Governance and evidence

Governance, build evidence, checksums, diffs, screenshots, and archives are
not application-shell files and must not be added to the production package.

## 4. Page and Navigation Architecture

The established page containers are:

- `homePage`;
- `settingsPage`;
- `entryPage`;
- `beverageEditPage`;
- `reportsHomePage`;
- `reportDetailPage`;
- `dataToolsPage`.

Rules:

1. Every screen container uses `class="page"`.
2. Exactly one page is active through `class="active"`.
3. Page changes go through shared navigation functions.
4. `navigationStack` represents the actual visited path.
5. Back and Home use the approved navigation functions.
6. Unsaved-entry and unsaved-beverage checks run before destructive
   navigation.
7. New pages require stable lower-camel-case IDs and regression testing for
   Back, Home, unsaved changes, and scroll reset.
8. Do not introduce hash routing, history routing, or a client router without
   an approved architecture change.

## 5. Application State

Authoritative in-memory state includes:

- entries;
- beverages;
- active and editing identifiers;
- form snapshots;
- report selection;
- navigation stack;
- temporary UI state.

### Persistent mutation pattern

Every persistent mutation follows this sequence:

1. read and validate input;
2. construct the complete proposed next state;
3. preserve current values for recovery when needed;
4. persist through the shared persistence layer;
5. update authoritative in-memory state only after persistence succeeds;
6. render every affected view;
7. show a meaningful success or failure message.

Do not mutate authoritative state first and attempt persistence afterward.

Prefer immutable array operations such as `map`, `filter`, and spread-based
copies when constructing next state.

### Rendering

Render functions derive the interface from authoritative state.

Entry or beverage changes must refresh every affected view, including:

- Home totals;
- Yesterday's Totals;
- active report details;
- selected-date entries;
- beverage buttons;
- data-tools counts.

Avoid hidden dependencies where one screen updates only because an unrelated
renderer happens to execute.

## 6. Persistence and Compatibility

### Approved storage keys

- `dietCokeEntriesV2`;
- `dietCokeTracker`;
- `myDietCokeAddictionEntries`;
- `dietCokeBeveragesV2`;
- `myDietCokeLastBackup`.

The three entry keys are compatibility mirrors.

Do not remove, rename, or change their meaning without:

- a migration plan;
- backward-compatible loading;
- rollback protection;
- import and export tests;
- owner approval.

### Persistence safety

A storage write must:

- serialize complete next-state payloads;
- capture previous values;
- attempt all required writes;
- restore previous values after a partial failure when possible;
- preserve in-memory state when persistence fails;
- tell the user whether recovery may be incomplete.

Do not silently discard storage exceptions.

### Browser-context separation

Safari and the installed Home Screen app may maintain separate local storage.

The application must continue to support export from one context and import
into the other. No feature may assume that a Safari save is automatically
visible in the installed app.

## 7. Data Contracts

### Entry record

An entry contains:

- `id`: stable unique identifier;
- `beverageId`: matching beverage identifier or `null`;
- `name`: nonempty display name;
- `ounces`: finite positive number;
- `caffeinated`: `"Yes"` or `"No"`;
- `caffeineMg`: finite nonnegative number;
- `carbonated`: `"Yes"` or `"No"`;
- `clear`: `"Yes"` or `"No"`;
- `createdAt`: valid date-time value.

### Beverage record

A beverage contains:

- `id`: stable unique identifier;
- `name`: nonempty display name;
- `image`: optional local image data;
- `initials`: optional fallback label;
- `defaultOz`: finite nonnegative number;
- `caffeinated`: `"Yes"` or `"No"`;
- `caffeineMg`: finite nonnegative number;
- `carbonated`: `"Yes"` or `"No"`;
- `clear`: `"Yes"` or `"No"`.

### Backup envelope

A current backup contains:

- `app`;
- `applicationName`;
- `version`;
- `releaseRevision`;
- `exportedAt`;
- `entries`;
- `beverages`.

The importer must continue to accept the current envelope, legacy entry-array
backups, and approved legacy field aliases.

### Schema changes

A schema change requires:

1. an explicit versioning decision;
2. backward-compatible loading;
3. canonical export of the new schema;
4. import validation;
5. migration and rollback tests;
6. release documentation.

Do not silently replace established `"Yes"` and `"No"` values with booleans
without a migration.

## 8. Validation and Error Handling

Validate every external boundary:

- form input;
- local storage;
- imported JSON;
- native date, week, and month values;
- image input;
- service-worker messages.

Reject:

- missing required names;
- nonfinite numbers;
- negative caffeine;
- nonpositive logged ounces;
- impossible calendar dates;
- unsupported backup structures.

User-facing failures must explain what failed, whether existing data changed,
and the recovery action when relevant.

Do not use raw exception text as the only user message.

Expected update-check failures may remain nonblocking, but data writes,
imports, exports, and navigation-loss risks must not fail silently.

## 9. Calculations and Rounding

Calculation functions remain centralized and reusable.

Rules:

- convert persisted numeric fields with `Number`;
- reject nonfinite values at input and import boundaries;
- preserve calculation precision internally;
- round persisted scaled values through the shared two-decimal helper;
- apply display rounding only at the presentation boundary;
- do not duplicate formulas inside page-specific handlers.

The shared totals calculation is the source for total ounces, carbonated
ounces, caffeinated ounces, caffeine milligrams, clear ounces, and counts.

The canonical serving formulas remain defined by the Product and UI
Standards and must use one shared report-servings function.

Summary and detailed-report values for the same period must use the same
filtered entries and calculation functions.

A calculation change requires fixtures for zero, normal, fractional, mixed,
and rounding-boundary values.

## 10. Date and Time Handling

Reports use the user's local calendar.

Rules:

- construct date keys from local year, month, and day components;
- do not derive local report dates by truncating UTC ISO strings;
- Yesterday means the previous local calendar day;
- Last Month means the previous complete local calendar month;
- week reports use ISO weeks, Monday through Sunday;
- native week values use `YYYY-Www`;
- ranges include the full start and end days;
- persisted `createdAt` values remain parseable;
- editing preserves the user's selected local date and time.

Date tests cover:

- month and year boundaries;
- leap days;
- daylight-saving transitions where supported;
- ISO week 1 and week 52 or 53;
- invalid week 53 values;
- current-day exclusion from Yesterday.

## 11. JavaScript Standards

### Language and dependencies

- Use browser-native JavaScript supported by current Safari and Chromium.
- Keep `"use strict"`.
- Do not add runtime dependencies without owner approval.
- Do not use `eval`, `new Function`, or dynamically downloaded code.

### Naming

- functions and variables: `lowerCamelCase`;
- constants: `UPPER_SNAKE_CASE`;
- classes, when justified: `UpperCamelCase`;
- DOM IDs: `lowerCamelCase`;
- CSS classes: `kebab-case`;
- storage and exported schema names: preserve compatibility.

### Function design

Prefer:

- small functions with one responsibility;
- pure functions for dates, calculations, formatting, and validation;
- explicit parameters and return values;
- early returns for invalid states;
- shared helpers instead of copied formulas.

Separate:

- calculation from rendering;
- validation from persistence;
- persistence from user messaging;
- navigation decisions from presentation.

### Global state

The inline architecture uses intentional top-level functions and state. New
top-level mutable variables require a clear application-wide purpose.

Declare every variable with `const` or `let`. Never create implicit globals.

### DOM interaction

- Use `textContent` for plain text.
- Escape user-controlled text before using `innerHTML`.
- Use stable IDs for unique fields.
- Use `data-*` attributes for repeated actions.
- Attach events in initialization code.
- Do not add inline event-handler attributes.

### Comments and documentation

Names and structure should explain normal behavior.

Comments explain why a nonobvious constraint exists, not what a line does.
Release rationale belongs in release documentation.

## 12. `index.html` Organization

Within the single-file architecture, maintain this logical order:

1. metadata, manifest, and icon links;
2. CSS variables and base rules;
3. shared components;
4. page-specific and responsive CSS;
5. page markup;
6. constants and authoritative state;
7. generic utilities;
8. persistence and compatibility;
9. navigation and unsaved-change protection;
10. calculations and date helpers;
11. render functions;
12. entry and beverage operations;
13. reports;
14. import and export;
15. event binding and initialization;
16. service-worker registration and update handling.

Do not reformat unrelated code solely to satisfy ordering. New and refactored
code should move toward this structure without changing behavior.

## 13. CSS Standards

- Define reusable colors and tokens in `:root`.
- Use `box-sizing: border-box`.
- Design mobile-first.
- Keep application content width constrained.
- Reuse shared component classes.
- Do not copy an approved component into divergent page-specific styles.
- Use grid or flexbox for layout.
- Avoid fixed widths that overflow supported mobile viewports.
- Use `min-width: 0` where grid content may overflow.
- Keep native form controls at least 16 CSS pixels to prevent iOS zoom.
- Target at least 44 by 44 CSS pixels for interactive controls.
- Preserve visible focus treatment.
- Do not encode important meaning through color alone.
- Add responsive rules only when the base layout cannot adapt naturally.

A shared component change must be tested on every page that uses it.

## 14. HTML and Accessibility Standards

- Use buttons for actions and links for external navigation.
- Every form control needs an associated label or accessible name.
- Icon-only buttons require `aria-label` and `title`.
- Decorative SVGs and images use appropriate hidden or empty-alt treatment.
- Status and error messages must not rely only on color.
- Reading and tab order match visual order.
- Hidden pages and controls must not remain interactable.
- Confirm before discarding modified forms.
- Text remains readable at device text scaling and supported widths.

Accessibility regression testing is required for shared controls, navigation
headers, dialogs, form fields, and dynamic status messages.

## 15. Security and Privacy

- Keep data local by default.
- Do not add analytics, advertising, telemetry, remote logging, or tracking.
- Do not load third-party scripts, styles, fonts, or images at runtime.
- Escape user-controlled text before HTML insertion.
- Validate imported JSON before committing it.
- Reject malformed records without altering current data.
- Revoke temporary object URLs after export.
- Do not place entry data in URLs, query strings, console logs, or cache keys.
- Cache only successful same-origin responses.
- Do not cache imported backups or generated exports.
- Treat beverage images as untrusted local input.

Any networked feature requires an approved privacy, security, failure, and
data-deletion design before implementation.

## 16. Service-Worker Standards

The service worker remains small and deterministic.

Required behavior:

- revision-specific `CACHE_NAME`;
- explicit application-shell list;
- shell precaching during installation;
- deletion of older `MDCA-` caches during activation;
- network-first navigation with cached `index.html` fallback;
- cache-first same-origin static GET handling;
- no caching of failed or cross-origin responses;
- controlled `SKIP_WAITING` activation;
- reload-loop protection;
- user-visible update availability.

Every deployed runtime revision changes both the cache identity and the page
reload-session identity.

Service-worker changes require tests for first online load, update discovery,
activation, one-time reload, old-cache cleanup, offline navigation, cached
icons and manifest, and fallback messaging.

## 17. Performance and Storage

MDCA must remain responsive on current iPhone and iPad hardware.

Rules:

- no external runtime dependency downloads;
- avoid repeated full-DOM reconstruction when a targeted render is clearer;
- avoid interleaving layout reads and writes inside loops;
- use event delegation for repeated dynamic controls when practical;
- sort and filter data once per render path where possible;
- release temporary object URLs;
- bound persisted image dimensions and data size;
- do not persist derived report values that can become stale;
- do not add large binary assets without size review;
- keep the service-worker shell limited to required application files.

A feature that materially increases startup work, render time, storage use,
or application size requires measured evidence and an approved tradeoff.

## 18. Refactoring and Architectural Change

Refactoring preserves observable behavior unless behavior change is the
approved scope.

Required sequence:

1. establish baseline tests;
2. isolate one concern;
3. preserve storage keys and schemas;
4. preserve DOM IDs used by rendering and tests;
5. preserve runtime identities until release packaging;
6. compare calculations and navigation;
7. run full regression tests;
8. document changed and preserved files.

Do not combine a broad refactor with an unrelated feature when separate
revisions reduce risk.

The following require explicit owner approval and a governance amendment:

- adding runtime files;
- introducing a framework, package manager, or build system;
- adding a backend or cloud synchronization;
- changing storage technology;
- changing routing architecture;
- changing the 10-file deployment topology;
- adding external dependencies;
- changing the privacy model.

A migration proposal must include benefits, risks, rollback, data migration,
mobile deployment impact, offline impact, and revised verification rules.

## 19. Testing Requirements by Layer

### Persistence changes

Test successful save, partial failure, rollback, reload, browser-context
separation, and import/export compatibility.

### Calculation changes

Test zero, fractional, rounding-boundary, mixed-attribute, and matching
summary/detail results.

### Navigation changes

Test direct opening path, Back, Home, stack depth, unsaved changes, repeated
navigation, and scroll reset.

### Shared UI changes

Test every consuming page at 320, 375, 390, 414, and 430 CSS pixels.

### Service-worker changes

Test online, update, offline, and recovery behavior on a physical device.

## 20. Definition of Done

An implementation change is complete only when:

- requirements are traceable to code and tests;
- the verified baseline checksum was confirmed before building;
- architecture and data-contract rules were followed;
- no unrelated package files were added;
- syntax and feature tests pass;
- affected mobile widths pass;
- preserved features were regression-tested;
- build evidence records verified and unverified items;
- the repository was checked after upload;
- required device tests passed;
- the owner approved promotion;
- promotion did not alter runtime files;
- final live repository verification passed;
- Current Status and the Handoff were updated when the baseline changed.
