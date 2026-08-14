import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const privacySchema = z
  .object({
    sensitivity: z.enum(['low', 'medium', 'high']).default('low'),
    approved: z.boolean().default(true),
    note: z.string().optional(),
  })
  .default({ sensitivity: 'low', approved: true });

const works = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.enum([
      'hydraulic-engineering',
      'business-planning',
      'campus-leadership',
      'voice-expression',
      'photography-visual',
      'ai-technology',
    ]),
    summary: z.string(),
    cover: z.string().default('/images/og/default-cover.svg'),
    date: z.string(),
    role: z.string().default(''),
    status: z.enum(['public', 'draft', 'private']).default('public'),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    links: z
      .array(z.object({ label: z.string(), url: z.string() }))
      .default([]),
    metrics: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .default([]),
    privacy: privacySchema,
  }),
});

const voice = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/voice' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    program: z.string().default('川雅颂'),
    cover: z.string().default('/images/og/default-cover.svg'),
    audio: z.string().optional(),
    duration: z.string().default(''),
    date: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    privacy: privacySchema,
  }),
});

const photography = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/photography' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.enum([
      'portrait',
      'campus',
      'travel',
      'light',
      'rework',
      'nature',
      'flora',
      'heritage',
      'urban',
      'animals',
    ]),
    cover: z.string(),
    location: z.string().default(''),
    date: z.string(),
    summary: z.string(),
    images: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
    tags: z.array(z.string()).default([]),
    privacy: privacySchema,
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.enum(['learning', 'project', 'campus', 'ai', 'reflection']),
    date: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    status: z.enum(['public', 'draft']).default('public'),
  }),
});

export const collections = { works, voice, photography, notes };
