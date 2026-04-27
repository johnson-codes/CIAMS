# CIAMS prototype

Static homepage prototype for [ciams.ca](https://ciams.ca/) layout and structure: Vite, React 19, TypeScript, Tailwind CSS v4.

## Run locally

```bash
cd /Users/johnson/Me/CIAMS-prototype
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build   # production bundle to dist/
npm run preview # serve dist locally
```

## Where content lives

- **Copy and navigation:** [`src/data/site.ts`](src/data/site.ts) — nav tree, hero text, promo tiles, post list, sidebar strings and social URLs.
- **Layout / sections:** [`src/components/`](src/components/) — `layout/SiteHeader`, `home/*` for hero, tiles, posts, donate strip, sidebar, and `HomePage` composition.

Hero background uses the same image URL as the live WordPress site for visual parity; everything else is placeholder or links to real social profiles only where noted in `site.ts`.

This is a **prototype**: no WordPress, PayPal, translate widget, or email backend.

## GitHub Pages (branch publish — not the Pages “Actions artifact” flow)

This repo uses a different approach: CI builds Vite, then **pushes only `dist/`** to an orphan branch **`gh-pages`** ([`publish-gh-pages.yml`](.github/workflows/publish-gh-pages.yml)). No `deploy-pages` job, no `github-pages` environment approval.

1. Push `main` (or run the workflow manually: **Actions → “Publish site to gh-pages branch” → Run workflow**).
2. **Settings → Pages → Build and deployment → Source:** choose **Deploy from a branch** (yes, the classic option).
3. Set **Branch** to **`gh-pages`**, folder **`/ (root)`**, Save.

Build uses `VITE_BASE_PATH=/CIAMS/` so asset URLs match the project site.

**Live URL:** [https://johnson-codes.github.io/CIAMS/](https://johnson-codes.github.io/CIAMS/)

After the first successful run, wait a minute and hard-refresh. **View source** should show `/CIAMS/assets/…js`, not `/src/main.tsx`.

## Remote

```text
https://github.com/johnson-codes/CIAMS.git
```

Push updates from this directory when ready.
