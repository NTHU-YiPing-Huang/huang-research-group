import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isProjectSite = repository && !repository.endsWith('.github.io');
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://example.github.io',
  base: process.env.BASE_PATH ?? (isProjectSite ? `/${repository}` : '/'),
  output: 'static',
  trailingSlash: 'always'
});
