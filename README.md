# Karma91430.github.io

Arthur Delerue's personal portfolio — Vite + React + TypeScript, deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev        # local dev with HMR
npm run build      # production build to ./dist
npm run preview    # serve ./dist on :4321
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`:
1. Build the Vite app into `./dist`.
2. Upload as a Pages artifact.
3. Deploy via `actions/deploy-pages`.

In the repo settings, **Pages → Build and deployment → Source** must be set to **GitHub Actions** (one-time).

## Structure

```
src/
  App.tsx              # composition root
  components/          # one file per section
  data.ts              # projects, experience, stack
  hooks/useReveal.ts   # IntersectionObserver helper
  styles/portfolio.css # all styles, design tokens at the top
public/images/         # served at /images/*
legacy-static/         # previous static HTML site (kept as backup)
```
