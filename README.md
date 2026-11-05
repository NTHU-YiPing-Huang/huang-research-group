# Yi-Ping Huang Research Group / 黃一平研究團隊

A bilingual (English / Traditional Chinese) Astro research-group website, deployable to GitHub Pages.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Visit http://localhost:4321.

## Publish to GitHub Pages

1. Create a GitHub repository, e.g. `huang-research-group`.
2. Push all files to the `main` branch.
3. Under **Settings → Pages → Build and deployment**, choose **GitHub Actions**.
4. The workflow deploys automatically after each push.
5. The site will be at `https://YOUR_USERNAME.github.io/huang-research-group/` (or at the root for a repository named `YOUR_USERNAME.github.io`).

The Astro configuration automatically detects the repository name on GitHub Actions. For a custom domain, update `site` and `base` accordingly.

## Edit the content

- `src/data/site.ts`: navigation, bilingual text, research areas and highlights.
- `src/data/updates.ts`: news announcements. Starts empty deliberately.
- `src/components/Home.astro`: homepage sections.
- `src/components/InnerPage.astro`: secondary page template.
- `src/styles/global.css`: appearance and responsive layout.

**Before launch:** Replace placeholder pages with verified publications, group members, contact information, and original research figures. Do not treat the illustrative highlight text as a complete publication list.

## Languages

English: `/en/` · Traditional Chinese: `/zh/`. Language switching preserves the current section.
