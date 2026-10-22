// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages 주소: https://<GitHub 아이디>.github.io
// 저장소 이름을 <GitHub 아이디>.github.io 로 만들면 base 설정은 필요 없습니다.
export default defineConfig({
  site: 'https://JaeFree.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
