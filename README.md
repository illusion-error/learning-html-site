# Learning HTML

A small English learning website built for the Web Technologies course. It contains an overview page, fifteen original notes, five project ideas, and an interactive useless machine with a keyboard-friendly game.

## Run locally

From this folder, start a local server:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8000/`. Do not open the HTML files directly with a `file://` URL: the shared navigation uses `fetch("nav.html")` and needs a local server.

## Project structure

```text
index.html       Home page
quotes.html      Fifteen original editorial notes and a random hero note
project.html     Five project ideas
machine.html     Useless machine and interactive game
nav.html          Navigation written once
nav.js            Shared-navigation loader and current-page state
machine.js        Machine and game behaviour
quotes.js         Random hero note behaviour
style.css         Shared responsive styles
```

## Local final checks

- Four pages resolve from the shared navigation.
- All images, scripts and stylesheets return HTTP 200 from the local server.
- The homepage image, favicon, app icon and Open Graph cover are original project assets.
- The machine can turn itself off; the game supports mouse, touch, Tab, Enter and Space.
- The layout has a mobile breakpoint, visible keyboard focus, and reduced-motion support.

## Deployment note

This local repository is intentionally not connected or pushed to GitHub yet. Before the course submission, publish this repository at its own public address, then replace the Open Graph image path with its final absolute HTTPS URL if the chosen host requires one.
