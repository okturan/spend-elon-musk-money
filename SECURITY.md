# Security policy

## Supported version

Security fixes target the `main` branch and the current deployment linked from
the README. Historical commits and modified deployments are not supported
separately.

## Reporting a vulnerability

Please use [GitHub's private vulnerability reporting form](https://github.com/okturan/spend-elon-musk-money/security/advisories/new)
instead of opening a public issue. Include the affected view or catalog record,
clear reproduction steps, the browser you tested, and the impact.

This is a static, fictional spending simulator. Useful reports include:

- script or markup injection through catalog data, quantities, or receipt
  output;
- simulated purchase state leaving the browser despite the client-only model;
- a dependency, build, or deployment weakness with a demonstrated impact;
- an input sequence that crosses a browser security boundary rather than only
  producing an incorrect simulated total.

Catalog prices, the fixed budget, arithmetic defects, artwork attribution, and
claims about real-world net worth are ordinary product or content issues. The
application does not accept payments, collect account details, or purchase
anything.

Use synthetic quantities and do not submit credentials, financial information,
or destructive payloads. The maintainer will coordinate validation,
remediation, and disclosure through the private advisory.
