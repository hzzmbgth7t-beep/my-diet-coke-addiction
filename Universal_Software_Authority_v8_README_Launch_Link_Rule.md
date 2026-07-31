# Universal Software Authority — MDCA README Launch-Link Rule

**Authority Version:** v8  
**Document Version:** 1.7  
**Effective:** July 30, 2026  
**Status:** Controlling authority addendum

## MDCA-RA-001-E — README Launch Links

Every My Diet Coke Addiction root `README.md` shall begin with a
**Quick Launch** section.

The section shall contain:

- the canonical live application URL;
- a release-specific cache-buster URL;
- a short instruction explaining when the cache-buster URL should be used.

Current canonical URL:

`https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/`

Current v2.0.7 release-package cache-buster URL:

`https://hzzmbgth7t-beep.github.io/my-diet-coke-addiction/?v=2.0.7-r2`

The cache-buster query value shall match the release and package revision.

A package shall fail release-document review if the Quick Launch section is
absent, incorrect, outdated, or located below other README content.

This rule applies to v2.0.7 revision r2 and all future MDCA releases.
