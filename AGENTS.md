# Repository Guidelines

## Project Structure & Module Organization
- `app/`: Next.js App Router routes, pages, and layout components.
- `components/`: shared React components; `components/ui/` contains UI primitives.
- `content/` and `docs/`: editorial content and planning documents (Markdown/CSV).
- `public/`: static assets served at the site root.
- `scripts/`: build helpers like sitemap generation and public asset copying.
- `styles/`: global CSS/Tailwind layers.
- `lib/`, `hooks/`, `contexts/`, `config/`: shared utilities, hooks, and configuration.

## Build, Test, and Development Commands
- `npm run dev`: start local development server.
- `npm run build`: production build; also runs `scripts/generate-sitemap.js` and `scripts/copy-public.js`.
- `npm run start`: serve the production build locally.
- `npm run lint`: run Next.js linting checks.

## Coding Style & Naming Conventions
- TypeScript + React + Next.js; follow existing patterns in `app/` and `components/`.
- Indentation: 2 spaces; strings use single quotes in TS/TSX.
- Component files use kebab-case (example: `components/ui/aspect-ratio.tsx`); component names use PascalCase.
- Keep UI primitives generic and reusable; feature-specific code lives closer to `app/` routes.

## Testing Guidelines
- No dedicated test framework is configured in this repo.
- Use `npm run lint` before pushing.
- If you add tests later, place them near the related module or under a `__tests__/` folder and document the new command here.

## Commit & Pull Request Guidelines
- Commit messages follow a conventional pattern seen in history: `feat: ...`, `fix: ...`, etc.
- PRs should include: a concise description, linked issue (if applicable), and screenshots for UI changes.

## Security & Configuration Tips
- Keep secrets out of the repo; use `.env.local` for local environment variables.
- Document any new environment variables in `README.md` and note defaults.
