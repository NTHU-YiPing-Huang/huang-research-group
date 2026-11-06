import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isProjectSite = repository && !repository.endsWith('.github.io');
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://example.github.io',
  base: process.env.BASE_PATH ?? (isProjectSite ? `/${repository}` : '/'),
  output: 'static',
  markdown: { remarkPlugins: [remarkMath], rehypePlugins: [[rehypeKatex, { macros: { '\\ket': '\\left|#1\\right\\rangle', '\\bra': '\\left\\langle#1\\right|', '\\braket': '\\left\\langle#1\\right\\rangle' } }]] },
  trailingSlash: 'always'
});
