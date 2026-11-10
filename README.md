# Learning HTML

A small English learning website built for the Web Technologies course. It contains an overview page, fifteen original notes, five project ideas, and an interactive useless machine with a keyboard-friendly game.

## Live site

Open the deployed site directly in your browser:

**https://illusion-error.github.io/learning-html-site/**

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

## Final checks

- Four pages resolve from the shared navigation.
- All images, scripts and stylesheets return HTTP 200 from the deployed site.
- The homepage image, favicon, app icon and Open Graph cover are original project assets.
- The machine can turn itself off; the game supports mouse, touch, Tab, Enter and Space.
- The layout has a mobile breakpoint, visible keyboard focus, and reduced-motion support.

## Deployment

The site is published with GitHub Pages from the `main` branch root. Every push to `main` triggers a redeploy; the live address is https://illusion-error.github.io/learning-html-site/.
