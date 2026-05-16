# Security Policy — ecole313-site

## Architecture

Static single-page application. No backend, no authentication, no database, no cookies, no tracking.

## CDN Dependencies

| Dependency | Version | Source | SRI |
|---|---|---|---|
| Three.js | r164 (0.164.1) | cdn.jsdelivr.net | Pending (S3.3) |
| OrbitControls | r164 (0.164.1) | cdn.jsdelivr.net | Pending (S3.3) |
| Google Fonts | Cormorant Garamond, Outfit, JetBrains Mono | fonts.googleapis.com | N/A (CSS) |

SRI hashes will be generated and added to the importmap and font link once deployment URL is confirmed.

## Content Security Policy

CSP is configured in `vercel.json` for the production deployment:

- `default-src 'self'` — restrict all resources to same origin by default
- `script-src 'self' cdn.jsdelivr.net esm.sh` — allow scripts from CDN
- `style-src 'self' 'unsafe-inline' fonts.googleapis.com` — inline styles required for single-file app
- `font-src fonts.gstatic.com` — Google Fonts delivery
- `img-src 'self' data:` — local images and data URIs
- `connect-src 'self'` — no external API calls

## Additional Headers

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()`
- `Strict-Transport-Security` — will be enabled after HTTPS deployment is confirmed (S3.5)

## Security Contact

Report vulnerabilities to: algoq2039@proton.me

## Threat Model

- **No user data collected** — zero PII, zero cookies, zero analytics
- **No server-side code** — no injection surface (SQLi, XSS via stored data)
- **CDN dependency** — mitigated by pinned versions + planned SRI
- **XSS via DOM** — mitigated by no `innerHTML` with user input (data is static)
