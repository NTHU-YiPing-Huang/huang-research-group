import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const common = z.object({ lang: z.enum(['en','zh']), order: z.number(), title: z.string(), description: z.string(), slug: z.string() });
const research = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/research' }), schema: common.extend({ icon: z.string() }) });
const highlights = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/highlights' }), schema: common.extend({ tag: z.string() }) });
export const collections = { research, highlights };
