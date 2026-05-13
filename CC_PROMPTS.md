# CLAUDE CODE (CC) PROMPTS — ecole313-site
# Webna V3.0 aligned | 6 sprints | Copy-paste each prompt into `claude` CLI
# Rule: complete each sprint in order. Do NOT skip to next sprint until gate passes.
# Reference: RESUME.md (master plan) + WEBNA_AUDIT.md (full audit) + docs/WEBNA-V3-Rulebook.docx

---

## HOW TO USE
1. Open terminal in the ecole313-site/ directory
2. Run `claude` to start Claude Code
3. Paste each prompt below one at a time
4. Wait for completion before moving to next prompt
5. After each sprint, run the gate check prompt
6. Only proceed to next sprint if gate passes

---

## ════════════════════════════════════════
## SPRINT 1: FOUNDATION (→ Webna Gate 1)
## ════════════════════════════════════════

### CC Prompt 1.1 — Git init + .gitignore
```
Read RESUME.md for project context. Initialize a git repo in this directory. Create a .gitignore that excludes: .DS_Store, node_modules/, .env*, *.log, .vscode/, .idea/, dist/, *.swp. Make the initial commit with message "feat: ecole313-site v0.9-alpha — 3D cosmic disc of sacred traditions". Do NOT push yet.
```

### CC Prompt 1.2 — WebGL detection + CDN fallback
```
Read RESUME.md and WEBNA_AUDIT.md for context. In index.html, add WebGL detection before Three.js initialization. If WebGL is not supported, show a styled fallback message: "Votre navigateur ne supporte pas WebGL. Veuillez utiliser Chrome, Firefox ou Safari récent." with a link to switch to the Timeline view. Also wrap the entire Three.js initialization block (scene, camera, renderer, markers, connections, raycaster, animation) in a try/catch — if Three.js fails to load from CDN, show: "Erreur de chargement 3D. Basculez sur la vue Timeline." Style the fallback message to match the existing dark theme (--bg, --accent, --font-display). This is Webna Phase 6 (Error Hardening) — zero unhandled errors in production.
```

### CC Prompt 1.3 — Fix contrast (WCAG AA)
```
In index.html, the CSS variable --text-dim is currently #8a8678 which fails WCAG AA 4.5:1 contrast ratio against the dark background #0a0a12. Change --text-dim to #9e9a8e (which achieves ~4.6:1 ratio). This fixes Webna Cross-Cutting Check A (Contrast & Readability). Commit with message "fix: bump --text-dim to #9e9a8e for WCAG AA 4.5:1 compliance".
```

### CC Prompt 1.4 — Push to GitHub
```
Create a new public GitHub repository called "ecole313-site" under your account. Add the remote and push the main branch. If you don't have GitHub credentials configured, tell me and I'll set up the remote manually. Commit message for any remaining changes: "chore: prepare for GitHub push". Update RESUME.md status to reflect GitHub is connected.
```

### CC Prompt — GATE 1 CHECK
```
Run the Webna Gate 1 (Foundation) verification:
1. Verify git status is clean (no uncommitted changes)
2. Verify index.html opens without errors: python3 -m http.server 4000 & sleep 1 && curl -s -o /dev/null -w "%{http_code}" http://localhost:4000/ (expect 200)
3. Verify js/data.js serves: curl -s -o /dev/null -w "%{http_code}" http://localhost:4000/js/data.js (expect 200)
4. Verify no secrets: grep -rn "sk_live\|AKIA\|ghp_\|password\|apiKey\|secret" . --include="*.html" --include="*.js" (expect empty)
5. Report: "GATE 1: PASS" or "GATE 1: FAIL — [reason]"
Kill the server after checks.
```

---

## ════════════════════════════════════════
## SPRINT 2: ACCESSIBILITY + RESPONSIVE (→ Webna Gate 2)
## ════════════════════════════════════════

### CC Prompt 2.1 — Accessibility landmarks + ARIA
```
Read RESUME.md and WEBNA_AUDIT.md. In index.html, add accessibility improvements per Webna Check I:

1. Add <a href="#timeline-view" class="skip-link">Passer au contenu</a> as first child of <body> (visually hidden, visible on focus)
2. Add role="application" and aria-label="Carte cosmique 3D des traditions sacrées" to the canvas container area
3. Add aria-label to all buttons: btn-3d → "Vue 3D", btn-timeline → "Vue chronologique"
4. Add aria-label="Fermer le panneau" to the close button in info-panel
5. Add aria-live="polite" to info-panel so screen readers announce when content changes
6. Add aria-label="Curseur temporel — filtrer par époque" to the time slider
7. Add <main>, <nav>, <aside> landmarks where appropriate
8. Style the skip-link: position absolute, top -40px, on :focus move to top 0, z-index 9999, background var(--accent), color var(--bg), padding 8px 16px

Commit: "feat: add ARIA labels, landmarks, skip-link (Webna Check I)"
```

### CC Prompt 2.2 — Keyboard navigation
```
In index.html, add keyboard navigation per Webna Check F:

1. Make timeline entries focusable: add tabindex="0" to each .tl-entry in the buildTimeline() function
2. Add keydown handler: Enter/Space on .tl-entry triggers the same action as click (switch to 3D + show panel)
3. Add Escape key handler: closes the info panel (calls closePanel())
4. Add :focus-visible styles for ALL interactive elements (buttons, slider, .tl-entry, .conn-item):
   outline: 2px solid var(--accent); outline-offset: 2px; border-radius: 2px;
5. Remove default outline only when :focus-visible is supported (use :focus:not(:focus-visible) { outline: none; })

Commit: "feat: keyboard nav + focus-visible states (Webna Check F)"
```

### CC Prompt 2.3 — Responsive mobile fix
```
In index.html, fix responsive layout per Webna Check E:

1. Info panel (#info-panel): on screens ≤480px, change to bottom sheet:
   - position: fixed; bottom: 0; left: 0; right: 0; top: auto;
   - width: 100%; max-height: 50vh; border-radius: 12px 12px 0 0;
   - Remove right: 1.5rem and width: 340px
   - Add overscroll-behavior: contain;

2. Ensure all touch targets are ≥44px:
   - .view-toggle button: min-height: 44px; min-width: 44px;
   - .close-btn: min-width: 44px; min-height: 44px;
   - #time-slider thumb: already 14px, increase to 20px on mobile
   - .tl-entry: min-height: 44px;
   - .conn-item: min-height: 44px; padding: 8px 0;

3. Add -webkit-backdrop-filter: blur(20px) alongside backdrop-filter on #info-panel (Safari fix, Webna Check L)

4. Test mentally at 375/768/1024/1440px — no horizontal scroll at any breakpoint.

Use @media (max-width: 480px) for mobile overrides. Keep existing desktop styles as default.

Commit: "fix: responsive bottom sheet + touch targets + Safari backdrop (Webna Checks E/L)"
```

### CC Prompt — GATE 2 CHECK
```
Run the Webna Gate 2 (Data Integrity) verification:
1. Start server: python3 -m http.server 4000 &
2. Verify HTML is valid: curl -s http://localhost:4000/ | grep -c "aria-label" (expect ≥5)
3. Verify focus styles exist: grep -c "focus-visible" index.html (expect ≥2)
4. Verify responsive: grep -c "@media" index.html (expect ≥1)
5. Verify skip-link: grep -c "skip-link" index.html (expect ≥1)
6. Verify WebGL fallback: grep -c "WebGL\|webgl" index.html (expect ≥1)
7. Verify touch targets: grep -c "44px" index.html (expect ≥1)
8. Verify no JS errors by checking the try/catch exists around Three.js init
9. Report: "GATE 2: PASS" or "GATE 2: FAIL — [reason]"
Kill the server after checks.
```

---

## ════════════════════════════════════════
## SPRINT 3: SECURITY + SEO (→ Webna Gate 3)
## ════════════════════════════════════════

### CC Prompt 3.1 — OG meta tags + canonical
```
In index.html <head>, add Open Graph and Twitter Card meta tags per Webna Check J:

<meta property="og:title" content="AKH 313 — Carte Cosmique des Traditions Sacrées">
<meta property="og:description" content="Visualisation 3D interactive de 24 écoles de pensée à travers 12 000 ans d'histoire. 48 livres, 50+ civilisations.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://YOUR-DOMAIN/"> (placeholder, update after deploy)
<meta property="og:image" content="https://YOUR-DOMAIN/og-image.png"> (placeholder)
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="AKH 313 — Carte Cosmique">
<meta name="twitter:description" content="24 écoles de pensée. 48 livres. 12 000 ans. Une carte.">
<link rel="canonical" href="https://YOUR-DOMAIN/">

Commit: "feat: add OG tags + Twitter Card + canonical (Webna Check J)"
```

### CC Prompt 3.2 — SRI hashes on CDN imports
```
Per Webna Check R (Supply-Chain Hygiene), add Subresource Integrity to CDN imports.

1. Generate SRI hash for Three.js CDN: fetch https://cdn.jsdelivr.net/npm/three@0.164.1/build/three.module.js, compute sha384 hash
2. Since we use ES module importmap, SRI on importmaps is not yet standardized in browsers. Instead, add a comment documenting the expected hashes, and add a runtime integrity check: after import, verify THREE.REVISION === '164'
3. For Google Fonts CSS, SRI is not practical (content varies by user-agent). Document this exception.
4. Create a SECURITY.md file documenting:
   - CDN dependencies and their pinned versions
   - SRI status and exceptions
   - Security contact info
   - Content Security Policy intent

Commit: "feat: SRI verification + SECURITY.md (Webna Check R)"
```

### CC Prompt 3.3 — Security headers config
```
Create deployment security headers per Webna Phase 7:

1. Create a vercel.json file with headers configuration:
   - Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.jsdelivr.net https://esm.sh; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self';
   - X-Content-Type-Options: nosniff
   - X-Frame-Options: DENY
   - Referrer-Policy: strict-origin-when-cross-origin
   - Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
   - X-DNS-Prefetch-Control: off

2. Also create a _headers file (for Netlify/Cloudflare Pages compatibility) with the same headers.

3. NOTE: HSTS (Strict-Transport-Security) will be added AFTER confirming HTTPS works in production. Do NOT add HSTS before deploy — it can lock out HTTP access permanently.

Commit: "feat: security headers for Vercel + Netlify (Webna Phase 7, Check P)"
```

### CC Prompt — GATE 3 CHECK
```
Run the Webna Gate 3 (Security) verification:
1. Verify OG tags: grep -c 'og:' index.html (expect ≥4)
2. Verify canonical: grep -c 'canonical' index.html (expect 1)
3. Verify vercel.json exists and contains CSP: cat vercel.json | grep -c "Content-Security-Policy" (expect 1)
4. Verify _headers exists: test -f _headers && echo "EXISTS" || echo "MISSING"
5. Verify SECURITY.md exists: test -f SECURITY.md && echo "EXISTS" || echo "MISSING"
6. Verify no secrets: grep -rn "sk_live\|AKIA\|ghp_\|password" . --include="*.html" --include="*.js" --include="*.json" (expect empty)
7. Verify Three.js version pin: grep "0.164.1" index.html (expect match)
8. Report: "GATE 3: PASS" or "GATE 3: FAIL — [reason]"
Note: Observatory A+ score can only be verified after deployment (Sprint 4).
```

---

## ════════════════════════════════════════
## SPRINT 4: DEPLOY + LEGAL (→ Webna Gate 4)
## ════════════════════════════════════════

### CC Prompt 4.1 — Deploy to Vercel
```
Deploy ecole313-site to Vercel:

1. If Vercel CLI is not installed: npm i -g vercel
2. Run: vercel --prod
3. Follow prompts: link to project, set root directory to current, no build command (static), output directory is current directory
4. After deploy, note the production URL
5. Update OG meta tags and canonical URL in index.html with the real production URL
6. Commit: "feat: deploy to Vercel + update canonical URL"
7. Push to GitHub and redeploy

If Vercel is not available, use GitHub Pages instead:
- git branch gh-pages
- Push to gh-pages branch
- Enable Pages in repo settings → gh-pages branch, root /
```

### CC Prompt 4.2 — Legal pages
```
Create two new HTML files matching the existing dark theme design:

1. privacy.html — Privacy policy in French:
   - Title: "Politique de confidentialité — AKH 313"
   - Content: This site does not collect personal data. No cookies. No tracking. No analytics. No forms. Static educational content only. Contact email for questions. Hosted on [Vercel/GitHub Pages]. GDPR compliant by design.
   - Back link to index.html

2. terms.html — Terms of use in French:
   - Title: "Conditions d'utilisation — AKH 313"
   - Content: Educational use. Content is licensed CC-BY-NC-SA 4.0. 3D visualization code is MIT licensed. Source data references 48-book curriculum of École de Pensée AKH 313. No warranty. Original source credit: AlanSpaceAudits for Three.js architecture inspiration.
   - Back link to index.html

3. Add a subtle footer to index.html with links to both pages:
   position: fixed; bottom: 0; left: 0; right: 0 (above time controls, or in a corner)
   Font: 0.6rem, color: var(--text-dim), links to privacy.html and terms.html

Style both pages to match: --bg background, --accent headings, --font-display for titles, --font-body for text, max-width: 700px centered, padding: 2rem.

Commit: "feat: add privacy policy + terms of use (Webna Phase 10)"
```

### CC Prompt 4.3 — HSTS + final security headers
```
Now that the site is live on HTTPS, add HSTS:

1. In vercel.json headers, add: Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
2. In _headers, add the same HSTS header
3. Commit: "feat: add HSTS header (Webna Phase 7 complete)"
4. Push and redeploy

Then verify with Mozilla Observatory:
- Go to https://observatory.mozilla.org and scan the production URL
- Target: Grade A minimum
- If any header is missing or misconfigured, fix and redeploy
```

### CC Prompt — GATE 4 CHECK
```
Run the Webna Gate 4 (Deploy) verification:
1. Verify HTTPS: curl -sI https://YOUR-PRODUCTION-URL | grep -i "strict-transport\|content-security\|x-content-type\|x-frame" (expect all 4 headers)
2. Verify page load <3s: curl -w "%{time_total}" -o /dev/null -s https://YOUR-PRODUCTION-URL (expect <3.0)
3. Verify privacy page: curl -s -o /dev/null -w "%{http_code}" https://YOUR-PRODUCTION-URL/privacy.html (expect 200)
4. Verify terms page: curl -s -o /dev/null -w "%{http_code}" https://YOUR-PRODUCTION-URL/terms.html (expect 200)
5. Verify no 404s on key assets: curl https://YOUR-PRODUCTION-URL/js/data.js -o /dev/null -w "%{http_code}" (expect 200)
6. Report: "GATE 4: PASS — Ready to ship v1.0.0" or "GATE 4: FAIL — [reason]"
```

---

## ════════════════════════════════════════
## SPRINT 5: MONITOR + SHIP v1.0.0
## ════════════════════════════════════════

### CC Prompt 5.1 — Monitoring setup
```
Set up basic monitoring per Webna Phase 11:

1. UptimeRobot: Sign up at uptimerobot.com, add HTTPS monitor for production URL, set 5-minute interval, email alerts
2. Sentry: Create project at sentry.io (free tier), get DSN
3. In index.html, add Sentry browser SDK (minimal, just error tracking):
   <script src="https://browser.sentry-cdn.com/7.x/bundle.tracing.min.js" crossorigin="anonymous"></script>
   <script>Sentry.init({ dsn: 'YOUR-DSN', tracesSampleRate: 0.1 });</script>
   Place BEFORE the Three.js script block so it catches initialization errors.
4. Update CSP in vercel.json to allow sentry-cdn.com and *.sentry.io in script-src and connect-src
5. Commit: "feat: add Sentry error tracking + UptimeRobot (Webna Phase 11)"
```

### CC Prompt 5.2 — Tag and ship v1.0.0
```
Ship the first release per Webna Phase 12:

1. Update RESUME.md: change status to "v1.0.0 — LIVE" and update all Sprint 1-5 items to ✅
2. Commit: "release: v1.0.0 — Webna Gates 1-4 passed"
3. Tag: git tag -a v1.0.0 -m "v1.0.0 — AKH 313 Carte Cosmique — First public release. Webna V3.0 Gates 1-4 passed. 50+ civilizations, 37 connection chains, 24 schools of thought, 48 books."
4. Push tag: git push origin v1.0.0
5. Create GitHub Release from the tag with release notes
6. Push to production: vercel --prod (or push to gh-pages)
```

---

## ════════════════════════════════════════
## SPRINT 6: POLISH + FEATURES (post-v1.0)
## ════════════════════════════════════════

### CC Prompt 6.1 — AKH 313 central node
```
Read RESUME.md. In index.html, make the AKH 313 marker special:

1. In the marker creation loop, when civ.id === 'akh313':
   - Use MeshStandardMaterial with emissive gold (#d4a574), emissiveIntensity 1.2
   - Scale: 0.8 (already set in data) but add a pulsing animation in the animate() loop: scale oscillates between 0.7 and 0.9 using sin(time)
   - Add a glowing ring around it: THREE.RingGeometry(0.9, 1.1, 32) with gold MeshBasicMaterial, transparent, opacity 0.3, also pulsing
   - Add a vertical light beam: thin CylinderGeometry from y=0 to y=3, gold, transparent, opacity 0.15

Commit: "feat: AKH 313 central node with pulsing glow (Sprint 6)"
```

### CC Prompt 6.2 — Search/filter
```
Add a search input to filter civilizations per RESUME.md Sprint 6:

1. Add search input in the header area (between title and view toggle):
   <input type="text" id="search" placeholder="Rechercher..." aria-label="Rechercher une civilisation">
   Style: dark bg, border var(--border), font var(--font-body), 0.8rem, width 200px, padding 6px 12px

2. On input event, filter markers: hide markers whose civ.name doesn't contain the search text (case-insensitive). Also filter timeline entries.

3. When search is cleared, show all markers again.

4. Add keyboard shortcut: Ctrl+K or / to focus the search input.

Commit: "feat: search/filter civilizations (Sprint 6)"
```

### CC Prompt 6.3 — Hover tooltips
```
Add hover tooltips on 3D markers:

1. Create a tooltip div: position fixed, pointer-events none, z-index 300, styled like a mini version of the info panel (dark bg, accent border, font 0.75rem)
2. On mousemove over canvas, raycast to find hovered marker
3. If hovering a marker: show tooltip near cursor with civ.name and formatted dates
4. If not hovering: hide tooltip
5. On mobile (touch), skip tooltips (they interfere with tap-to-select)

Commit: "feat: hover tooltips on 3D markers (Sprint 6)"
```

### CC Prompt 6.4 — Lighthouse audit
```
Run a Lighthouse audit on the production URL:
1. Install lighthouse CLI: npm i -g lighthouse
2. Run: lighthouse https://YOUR-PRODUCTION-URL --output html --output-path ./lighthouse-report.html
3. Check scores: target 90+ on Performance, Accessibility, Best Practices, SEO
4. List any items scoring below 90 and suggest fixes
5. Commit the report: "docs: Lighthouse audit report (Webna Phase 23)"
```

---

## ════════════════════════════════════════
## NOTES FOR CLAUDE CODE SESSIONS
## ════════════════════════════════════════

# Context loading: Always start CC sessions with:
# "Read RESUME.md and WEBNA_AUDIT.md for full project context. We're on Sprint [N]."

# If a gate fails: fix the failing check, then re-run the gate check prompt.
# Never skip a gate — Webna V3.0 is sequential by design.

# After each sprint: push to GitHub and update RESUME.md sprint status.

# Reference files:
# - RESUME.md → master plan + current status
# - WEBNA_AUDIT.md → full compliance report
# - docs/WEBNA-V3-Rulebook.docx → the complete Webna V3.0 framework
# - SECURITY.md → security posture documentation (created in Sprint 3)
