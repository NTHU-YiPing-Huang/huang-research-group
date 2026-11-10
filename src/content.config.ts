
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Shared schema for bilingual content
const common = z.object({
  lang: z.enum(['en', 'zh']),
  order: z.number(),
  title: z.string(),
  description: z.string(),
  slug: z.string(),
});

// Generate unique IDs using the language folder and filename.
// Example:
// en/spin-liquids.md -> en/spin-liquids
// zh/spin-liquids.md -> zh/spin-liquids
const generateId = ({ entry }: { entry: string }) => {
  return entry.replace(/\.md$/i, '');
};

// Research collection
const research = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/research',
    generateId,
  }),
  schema: common.extend({
    icon: z.string(),
  }),
});

// Highlights collection
const highlights = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/highlights',
    generateId,
  }),
  schema: common.extend({
    tag: z.string(),
  }),
});

export const collections = {
  research,
  highlights,
};
