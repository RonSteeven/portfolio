# CLAUDE.md — Portfolio Project Guide

This file is the source of truth for all contributors and AI models working on this project.
Read it fully before writing any code.

---

## Project Overview

Personal portfolio for **Ronaldo Monserrate** — Fullstack Developer.
Inspired by [alejandro-lopez-analyst.vercel.app](https://alejandro-lopez-analyst.vercel.app).
Deployed to **GitHub Pages**. Written in **English** with an EN ↔ ES translation toggle via GTranslate.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Language | TypeScript (strict mode) |
| Build tool | Vite |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Testing | Jest + React Testing Library |
| Linting | ESLint + Prettier + Husky |
| Deployment | GitHub Pages via gh-pages + GitHub Actions |

**No class components.** Functional components + hooks only.

---

## Folder Structure

```
src/
├── assets/          # Static assets (images, icons, fonts)
├── components/      # Reusable UI components (Button, Card, Tag, SectionHeader, IconLink)
├── constants/       # Shared config: section IDs, animation config, nav links
├── data/            # All content as typed constants (projects, skills, experience, contact)
├── hooks/           # Custom React hooks (useActiveSection, useScrollAnimation)
├── sections/        # Page sections (Hero, About, Skills, Projects, Contact)
└── types/           # Shared TypeScript interfaces and types
```

---

## Component Conventions

Every component lives in its own folder:

```
src/components/Button/
├── index.tsx        # JSX — the component
├── types.ts         # Props interface
└── index.test.tsx   # Unit tests
```

- One component per file, one concern per component (**Single Responsibility**)
- Barrel exports via `src/components/index.ts`
- Props must **always** be typed via a dedicated interface in `types.ts`
- Components are extended via props, never modified (**Open/Closed**)

---

## DRY & SOLID Rules

1. **No hardcoded content in JSX.** All text, URLs, and data come from `src/data/`.
2. **All props must be typed.** No `any`, no implicit types.
3. **One responsibility per component.** If a component does two things, split it.
4. **Logic goes in hooks.** No business logic inside section components.
5. **No magic strings or numbers.** Use constants from `src/constants/`.
6. **Reuse base components.** Never duplicate markup — use `Button`, `Card`, `Tag`, `SectionHeader`, `IconLink`.

---

## ESLint & Prettier

Config files: `.eslintrc.cjs` and `.prettierrc`

Key rules:
- `@typescript-eslint/no-explicit-any`: error
- `@typescript-eslint/explicit-function-return-type`: warn
- `react-hooks/rules-of-hooks`: error
- `react-hooks/exhaustive-deps`: warn
- Prettier: single quotes, 2-space indent, trailing commas (ES5), 100-char line width

**Husky** runs ESLint + Prettier on pre-push. No push succeeds with lint errors.

---

## Git Branching Strategy

Every task has its own branch. **Never commit directly to `main`.**

### Naming convention
```
p{phase}-{priority}-{short-description}
# Examples:
p1-3-tailwind-setup
p2-9-navbar
p3-14-hero-section
```

### Workflow
```bash
# 1. Start a task
git checkout main && git pull
git checkout -b p1-3-tailwind-setup

# 2. Do the work, then commit
git add .
git commit -m "feat: install and configure Tailwind CSS"

# 3. Push and open PR to main
git push origin p1-3-tailwind-setup
# Open PR → review → merge → delete branch
```

### Commit message format
```
feat:     new feature or section
fix:      bug fix
chore:    config, tooling, dependencies
test:     adding or updating tests
docs:     CLAUDE.md, README, comments
refactor: code change with no behavior change
```

This ensures:
- Each task is isolated and reviewable before merging
- No conflicting rewrites over unfinished files
- A clean, linear history on `main`

---

## Testing

- Test files live next to the component: `ComponentName/index.test.tsx`
- Run tests: `npm test`
- Coverage: `npm run test:coverage`
- Tests must pass before any PR is merged (enforced by GitHub Actions)

### What to test
- Components render without crashing
- Key text/elements are present
- Links have correct `href` attributes
- Interactive elements (hamburger menu) behave correctly

---

## Deployment

GitHub Actions auto-deploys on every push to `main`:
1. Runs `npm test` — blocks deploy on failure
2. Runs `npm run build`
3. Publishes `dist/` to `gh-pages` branch

Local deploy: `npm run deploy` (uses `gh-pages` package directly)

---

## Key Content References

- **Name:** Ronaldo Monserrate
- **Title:** Fullstack Developer
- **Location:** Ecuador
- **Email:** ro_sml15@hotmail.com
- **GitHub:** github.com/[your-handle]
- **LinkedIn:** [your-linkedin-url]

### Projects with live links
| Project | URL |
|---|---|
| Parent Portal | https://www.lightspeedsystems.com/security-compliance/lightspeed-parent-portal/ |
| Classroom Management | https://www.lightspeedsystems.com/products/lightspeed-classroom-management/ |
| Neos Assembly Legal | https://assemblysoftware.com/neos |
| Somos Uno | https://www.linkdigital.es/en/work/corporacion-favorita |
| Sebioca | http://www.sebioca.espol.edu.ec/ |
