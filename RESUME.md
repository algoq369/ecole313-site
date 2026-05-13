# MASTER PLAN — ECOLE313-SITE
# Last updated: 2026-05-13 | Framework: WEBNA V3.0
# Rulebook: docs/WEBNA-V3-Rulebook.docx | Audit: WEBNA_AUDIT.md

## STATUS: v0.9-alpha — PRE-DEPLOY
- Root: ecole313-site/
- Start: `python3 -m http.server 4000`
- Build: CLEAN (static, zero deps, zero build step)
- GitHub: ✅ github.com/algoq369/ecole313-site (public)
- Webna gate: Gate 1 candidate (S1.1–S1.5 ✅)

## FILES (DO NOT RE-VERIFY)
index.html (904L) — Three.js 3D viz + CSS + JS in single file
js/data.js (586L) — 50+ civs, 37 connections, 8 types, 7 regions
README.md (62L) — project docs
RESUME.md — this file
WEBNA_AUDIT.md — full compliance report
docs/WEBNA-V3-Rulebook.docx — the rulebook

## COMPLETED FEATURES
F1-F12 ✅ All core features built (3D disc, markers, connections, time slider, timeline view, legend, loading, responsive, view toggle, OrbitControls, connection highlighting)

## COMPLETED (Ecosystem)
D1-D8 ✅ AKH 313 synthesis, 48-book curriculum, Paris itinerary, Efesia letter, QPV strategy, funding guide, 36-month blueprint, Efesia audit

## ═══════════════════════════════════════
## WEBNA MASTER PLAN — 6 SPRINTS TO v1.0
## ═══════════════════════════════════════

### SPRINT 1: Foundation (→ Gate 1)
Webna Phases 2-3 | Goal: clean repo, error-free, Git committed
- S1.1 ✅ Git init, .gitignore, initial commit
- S1.2 ✅ WebGL detection: show fallback message if no WebGL
- S1.3 ✅ try/catch around Three.js init (CDN fail → graceful error)
- S1.4 ✅ Fix --text-dim #8a8678 → #9e9a8e (WCAG AA 4.5:1)
- S1.5 ✅ Push to GitHub (public repo: ecole313-site → github.com/algoq369/ecole313-site)
► GATE 1 CHECK: builds? renders? git committed? → PASS

### SPRINT 2: Accessibility + Responsive (→ Gate 2)
Webna Phase 5-6, Checks A/E/F/I | Goal: zero errors, accessible, responsive
- S2.1 ✅ Accessibility: add role="application" to canvas, aria-labels on all interactive elements, aria-live region for info panel, skip-link to timeline view
- S2.2 🔲 Keyboard nav: Tab through view toggle → time slider → timeline entries. Esc closes panel
- S2.3 🔲 Focus states: :focus-visible with --accent outline on all buttons, slider, entries
- S2.4 🔲 Responsive: info panel → bottom sheet on <480px (width:100%, max-height:50vh). Touch targets ≥44px
- S2.5 🔲 Safari fix: add -webkit-backdrop-filter alongside backdrop-filter
- S2.6 🔲 Test at 375/768/1024/1440px — no horizontal scroll
► GATE 2 CHECK: zero errors? responsive? graceful failures? → PASS

### SPRINT 3: Security + SEO (→ Gate 3)
Webna Phase 7, Checks J/P/R | Goal: security headers ready, SEO complete
- S3.1 🔲 Add OG meta tags (og:title, og:description, og:image, og:url, twitter:card)
- S3.2 🔲 Add canonical URL meta tag
- S3.3 🔲 Generate SRI hashes for Three.js CDN imports, add integrity="" + crossorigin
- S3.4 🔲 Create vercel.json OR _headers file with: CSP, X-Content-Type-Options: nosniff, X-Frame-Options: DENY, Referrer-Policy: strict-origin-when-cross-origin, Permissions-Policy: camera=(), microphone=(), geolocation=()
- S3.5 🔲 HSTS header (max-age=63072000; includeSubDomains; preload) — only after HTTPS confirmed
► GATE 3 CHECK: headers configured? CSP ready? SRI on CDN? → PASS

### SPRINT 4: Deploy + Legal (→ Gate 4)
Webna Phases 8-10 | Goal: LIVE on HTTPS with legal pages
- S4.1 🔲 Deploy to Vercel (or GitHub Pages) — auto-deploy from main
- S4.2 🔲 Verify HTTPS, <3s load, no 404s
- S4.3 🔲 Create privacy.html (GDPR: no cookies, no tracking, no personal data collected)
- S4.4 🔲 Create terms.html (educational use, CC-BY-NC-SA license for content)
- S4.5 🔲 Add footer links to privacy + terms on index.html
- S4.6 🔲 Verify all security headers active (Mozilla Observatory target: A)
► GATE 4 CHECK: HTTPS? <3s? legal pages? monitoring? → PASS → TAG v1.0.0

### SPRINT 5: Monitor + Ship (Webna Phases 11-12)
- S5.1 🔲 UptimeRobot: monitor production URL, email alerts
- S5.2 🔲 Sentry: free tier, error tracking on JS errors
- S5.3 🔲 Tag release v1.0.0 on GitHub
- S5.4 🔲 Share with AKH 313 community
- S5.5 🔲 Monitor 24h, fix critical issues
► SHIP v1.0.0

### SPRINT 6: Polish + Features (post-v1.0)
- S6.1 🔲 AKH 313 central node — pulsing gold glow, larger marker
- S6.2 🔲 Search/filter: type-to-filter civilizations
- S6.3 🔲 Hover tooltips on markers (name preview)
- S6.4 🔲 Region labels on 3D disc
- S6.5 🔲 Mobile pinch-to-zoom
- S6.6 🔲 Custom domain + DNS (Phase 9)
- S6.7 🔲 Lighthouse audit → target 90+ all categories
- S6.8 🔲 OG image: generate a screenshot of the 3D disc for social preview

## ═══════════════════════════
## BROADER ROADMAP (post-site)
## ═══════════════════════════

### ASSOCIATION (Weeks 1-4)
A1 🔲 Formal creation asso loi 1901 (QPV Créteil domicile)
A2 🔲 Convention de partenariat Efesia + Gérard Testard
A3 🔲 Bank account (Crédit Coopératif / Qonto Asso)

### FUNDING (Months 1-3)
F1 🔲 FDVA fonctionnement | F2 🔲 FONJEP | F3 🔲 FIPD
F4 🔲 QPV politique de la ville | F5 🔲 Fondations privées
F6 🔲 FSE+ / Erasmus+ / CERV

### TECH PLATFORM — Webna Part 2-3 (Months 2-6)
T1 🔲 Migrate to Next.js (Webna Phase 25) → unlocks Phases 13-24
T2 🔲 Sovereign LLM: Ollama + LlamaIndex RAG (Phase 34)
T3 🔲 Auth: Passkeys + OAuth 2.1 (Phase 14)
T4 🔲 Encrypted comms: Matrix/Element
T5 🔲 Self-hosted Hetzner (€110-165/mois)
T6 🔲 @algoq/stdlib integration (20 patterns)
T7 🔲 Security Shield Score pipeline (Phase 36)

### SCALE (Months 6-36)
L1 🔲 Full platform (LMS, library, marketplace)
L2 🔲 TROC mutual credit | L3 🔲 DAO governance
L4 🔲 International (Swiss Verein / Marshall Islands)
L5 🔲 Community → 2,000+ members

## KEY CONSTANTS
Three.js r164 | Range: -10000→2026 | Disc r=30 | Marker 0.4 (0.8 AKH)
50+ civs, 37 connections, 8 types, 7 regions
Dark #0a0a12 | Gold #d4a574 | Teal #4ecdc4
Fonts: Cormorant Garamond / Outfit / JetBrains Mono
--text-dim target: #9e9a8e (post-fix)

## RULES FOR AI SESSIONS
1. Read THIS file first — not the full code
2. Trust status above — do NOT re-verify
3. Follow Webna sprint order — no skipping gates
4. Update this file BEFORE context fills
5. CC prompts: see CC_PROMPTS.md for step-by-step commands
