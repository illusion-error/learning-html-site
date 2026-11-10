# Copilot instructions for this repo

## Project shape
- This is a static HTML/CSS/JS learning site, not a framework app. Pages live at the repo root (`index.html`, `quotes.html`, `project.html`, `machine.html`) and are served by GitHub Pages from the `main` branch root.
- Shared design and behavior come from `style.css`, `nav.html`, and `nav.js`. Most pages follow the same shell: header, brand link, `#site-nav`, main content, footer, and page-specific script at the end of the body.
- Keep asset paths relative (`assets/images/...`, `favicon-32.png`, etc.) because the site is deployed as a static root site.

## Architectural patterns to preserve
- `nav.js` is the main cross-page integration: it fetches `nav.html`, injects it into `#site-nav`, and adds `aria-current="page"` to the active link by matching `window.location.pathname.split('/').pop()`.
- Page scripts are small, self-invoking modules at the bottom of the document (`quotes.js`, `machine.js`). They guard with `if (!element)` checks and exit early when their target DOM is absent.
- `machine.js` owns the interactive logic for the useless machine and the catch-the-switch game; it uses direct DOM queries (`#machine-switch`, `#start-game`, `#runaway-switch`) and updates text, class names, timers, and `aria-live` regions in place.
- `quotes.js` follows the same pattern: choose a random quote from an array and render it into `#random-quote` without introducing framework conventions.

## Styling and accessibility conventions
- Do not abandon the shared visual language in `style.css`: design tokens in `:root`, flexible grid layouts, focus-visible outlines, a mobile breakpoint, and reduced-motion rules.
- Preserve the current accessibility pattern: skip link, semantic headings, buttons with clear labels, `aria-live` for status messages, and keyboard-friendly controls (Tab/Enter/Space).
- The machine game explicitly supports mouse, touch, Tab, Enter and Space; keep that behavior if you touch the game UI.

## Workflow and validation
- There is no build toolchain or test suite in this repo. The normal validation is browser-based and content-focused: open the pages locally or serve the folder statically, then check navigation, layout, and interactive controls.
- A simple local check is to run a static server from the project root, e.g. `python -m http.server` (or a similar static server) and open `http://localhost:8000`.
- When editing page content, keep visual consistency with the existing card/quote/theme styles and avoid changing the site structure unless the page is intentionally being refactored.

## Good examples to follow
- `quotes.html` + `quotes.js` demonstrates a simple content page with a small randomized interaction.
- `machine.html` + `machine.js` demonstrates page-specific DOM wiring and accessible UI updates.
- `nav.html` + `nav.js` demonstrates the repo’s shared nav pattern and cross-page consistency.
