# 김재표 포트폴리오 사이트

Astro + Tailwind CSS로 만든 개인 포트폴리오입니다. `main`에 push하면 GitHub Actions가 빌드해서 GitHub Pages에 올립니다.

## 내 컴퓨터에서 실행

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # dist/ 에 정적 파일 생성
```

## 프로젝트 추가하기

`src/content/projects/` 에 Markdown 파일 하나를 만들고 위쪽 설정(제목, 기간, 팀, 맡은 일, 태그)을 채우면 목록과 상세 페이지가 자동으로 생깁니다. 기존 파일을 복사해서 고치면 가장 쉽습니다.

## 처음 배포할 때

1. GitHub에서 `JaeFree.github.io` 이름으로 공개 저장소를 만듭니다.
2. (완료) `astro.config.mjs`와 `src/pages/index.astro`에 아이디 `JaeFree`가 들어가 있습니다.
3. 이 폴더를 그 저장소의 `main` 브랜치에 push합니다.
4. 저장소 Settings → Pages → Source를 **GitHub Actions**로 바꿉니다.
5. Actions 탭에서 배포가 끝나면 `https://JaeFree.github.io` 에서 확인합니다.
