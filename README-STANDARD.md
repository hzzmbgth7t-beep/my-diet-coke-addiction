# MDCA README Launch-Link Standard

**Rule ID:** MDCA-RA-001-E  
**Effective:** July 30, 2026  
**Status:** Controlling release-process rule

## Requirement

Every root `README.md` for My Diet Coke Addiction shall begin with a
**Quick Launch** section containing:

1. the canonical live application URL;
2. a release-specific cache-buster URL;
3. a brief instruction explaining when to use the cache-buster URL.

## Required Format

```markdown
# Quick Launch

**Live Application:** [CANONICAL_URL](CANONICAL_URL)

**Cache-Buster Launch:** [CANONICAL_URL?v=VERSION-REVISION](CANONICAL_URL?v=VERSION-REVISION)

Use the cache-buster link immediately after deployment or whenever the browser
appears to be showing an older cached release.
```

## Current Values

- Canonical URL: `https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/`
- v2.0.7 cache-buster URL: `https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?v=2.0.7-r2`

## Versioning Rule

The cache-buster query value shall identify the deployed release and package
revision, for example:

`?v=2.0.7-r2`

The README links must be updated before every deployment package is approved.

## Acceptance Rule

A release package fails README review when:

- the Quick Launch section is absent;
- the live URL is incorrect;
- the cache-buster URL is absent;
- the cache-buster value does not match the release package revision;
- the Quick Launch section is not at the beginning of `README.md`.
