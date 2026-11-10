import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isProjectSite = repository && !repository.endsWith('.github.io');
export default defineConfig({
  site: 'https://nthu-yiping-huang.github.io',
  base: '/huang-research-group',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
