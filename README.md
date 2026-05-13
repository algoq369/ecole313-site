# École de Pensée AKH 313 — Carte Cosmique des Traditions Sacrées

An interactive 3D visualization of sacred traditions across space and time, built with [Three.js](https://threejs.org/). 48 books, 24 schools of thought — from Göbekli Tepe (9600 BCE) to the present.

## Live demo

Hosted on GitHub Pages (deploy from `main` branch).

## Running locally

No build step. Static site with ES modules:

```bash
python3 -m http.server 4000
```

Then open [http://localhost:4000](http://localhost:4000).

## Features

- **3D Cosmic Disc** — Civilizations plotted on a temporal disc (center = oldest, outer = present)
- **Interactive Time Slider** — Scrub through 12,000 years of human history
- **Clickable Markers** — Each civilization shows description, dates, and curriculum book references
- **Connection Lines** — Transmission chains between traditions (Kemet → Hermès → Islam, etc.)
- **Scrollable Timeline** — Traditional timeline view as fallback
- **Geographic Sectors** — Angular position maps to world regions
- **Responsive** — Works on mobile and desktop

## Architecture

```
ecole313-site/
├── index.html          # Main 3D visualization (Three.js)
├── js/
│   └── data.js         # Civilization data, connections, types
├── README.md
└── RESUME.md           # Project tracking (for AI sessions)
```

## Data

All civilization data lives in `js/data.js` — 50+ entries with:
- Temporal range (start/end years)
- Geographic region
- Tradition type (religion, civilization, philosophy, etc.)
- Description and curriculum book references
- Connection data for transmission chains

## Tech Stack

- **Three.js** (r164) — 3D rendering via ES module CDN import
- **OrbitControls** — Camera navigation
- **Pure HTML/CSS/JS** — No build tools, no frameworks
- **GitHub Pages** — Static hosting

## Credits

Inspired by [AlanSpaceAudits/conceptual_flat_earth_model](https://github.com/AlanSpaceAudits/conceptual_flat_earth_model) for the Three.js architecture and interactive disc visualization approach.

## License

Educational use. Part of the École de Pensée AKH 313 curriculum project.
