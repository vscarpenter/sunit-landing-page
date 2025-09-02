# Repository Guidelines

## Project Structure & Module Organization
- App lives in `sunit-landing/` (Next.js App Router).
- Key paths: `src/app/` (routes, layout), `src/components/` (UI + sections), `src/hooks/`, `src/constants/`, `src/lib/`, `public/` (assets), `types/`.
- Import alias: `@/*` maps to `sunit-landing/src/*` (see `tsconfig.json`). Example: `import { Button } from '@/components/ui/button'`.

## Build, Test, and Development Commands
- `cd sunit-landing`
- `npm run dev`: Start local dev at `http://localhost:3000`.
- `npm run build`: Production build (`.next/`).
- `npm start`: Run production server.
- `npm run lint`: Run ESLint checks. Add `--fix` for autofixes.

## Coding Style & Naming Conventions
- Language: TypeScript (strict). Indentation: 2 spaces.
- Components: PascalCase files in `src/components/sections` (e.g., `Hero.tsx`). UI primitives in `src/components/ui` use lowercase filenames (e.g., `button.tsx`).
- Hooks: `src/hooks` with `use*` names (e.g., `useScrollAnimation.ts`).
- Utilities: `src/lib` (use `cn` from `src/lib/utils.ts` for class merging).
- Styling: Tailwind CSS v4; keep class lists readable and leverage variants/utilities.
- Linting: ESLint with Next config (`eslint.config.mjs`). No Prettier configured.

## Testing Guidelines
- No test framework is configured yet. If adding tests, prefer Vitest or Jest + React Testing Library.
- Place tests as `*.test.ts(x)` next to source files or under `src/__tests__/`.
- Add a `test` script in `package.json` when introducing tests and target meaningful component coverage.

## Commit & Pull Request Guidelines
- Commits: Use Conventional Commits (e.g., `feat: add Skills section`, `fix: correct sitemap path`).
- PRs: Include summary, linked issues, screenshots/GIFs for UI changes, and note any config/env impacts. Ensure `npm run lint` passes.

## Security & Configuration Tips
- Store secrets in `.env.local`; never commit env files. Example:
  - `NEXT_PUBLIC_SITE_URL=...`
- Review `next.config.ts` and `public/` for assets before publishing.
- Prefer external links and public assets for resumes or images when possible.
