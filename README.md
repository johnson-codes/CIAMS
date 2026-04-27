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

## GitHub Pages

After you push to `main`, enable deployment in the repository:

1. Open **GitHub** → repo **johnson-codes/CIAMS** → **Settings** → **Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).

The workflow [`.github/workflows/deploy-github-pages.yml`](.github/workflows/deploy-github-pages.yml) builds with `VITE_BASE_PATH=/CIAMS/` so assets resolve under the project site path.

**Live URL:** [https://johnson-codes.github.io/CIAMS/](https://johnson-codes.github.io/CIAMS/)

The first run may need you to approve the `github-pages` environment if GitHub prompts for it.

## Remote

```text
https://github.com/johnson-codes/CIAMS.git
```

Push updates from this directory when ready.
