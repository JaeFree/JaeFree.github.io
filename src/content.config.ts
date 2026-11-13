import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 프로젝트 하나 = src/content/projects/ 안의 Markdown 파일 하나
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    period: z.string(),
    startDate: z.coerce.date(), // 최신순 정렬에 사용
    team: z.string(),
    role: z.string(),
    tags: z.array(z.string()),
    badge: z.string().optional(),
    github: z.string().url().optional(),
    video: z.string().url().optional(),
  }),
});

export const collections = { projects };
