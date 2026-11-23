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
    // 사진·영상: public/ 안의 경로 (예: projects/home-sensing.jpg)
    // type이 video면 poster(미리보기 사진)를 함께 적으면 카드에 그 사진이 보입니다.
    media: z
      .object({
        type: z.enum(['image', 'video']),
        src: z.string(),
        poster: z.string().optional(),
        alt: z.string(),
      })
      .optional(),
  }),
});

export const collections = { projects };
