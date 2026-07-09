# Ronaldo Monserrate — Portfolio

Personal portfolio site for Ronaldo Monserrate, Fullstack Developer.
Built with React + TypeScript + Vite + Tailwind CSS. Deployed to GitHub Pages.

**Live site:** https://[your-github-username].github.io/portfolio/

---

## Stack

- **React 18** + **TypeScript** (strict)
- **Vite** — build tool
- **Tailwind CSS** — styling
- **Framer Motion** — animations
- **Jest** + **React Testing Library** — unit tests
- **ESLint** + **Prettier** + **Husky** — code quality
- **GitHub Actions** — CI/CD to GitHub Pages

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Run tests
npm test

# Lint
npm run lint

# Format
npm run format
```

---

## Build & Deploy

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy manually to GitHub Pages
npm run deploy
```

Automatic deploys trigger on every push to `main` via GitHub Actions (`.github/workflows/deploy.yml`).
Tests must pass before the build runs.

---

## Git Branching Workflow

Every task has its own branch. **Never commit directly to `main`.**

### Branch naming
```
p{phase}-{priority}-{short-description}

# Examples:
p1-3-tailwind-setup
p2-9-navbar
p3-14-hero-section
```

### Per-task workflow
```bash
# 1. Start from main
git checkout main && git pull

# 2. Create task branch
git checkout -b p2-9-navbar

# 3. Work, then commit
git add .
git commit -m "feat: build responsive Navbar component"

# 4. Push and open PR
git push origin p2-9-navbar
# → Open PR on GitHub → review → merge → delete branch
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

---

## Project Structure

```
src/
├── assets/       # Static assets (images, icons)
├── components/   # Reusable UI: Button, Card, Tag, SectionHeader, IconLink
├── constants/    # Section IDs, animation config, nav links
├── data/         # All content as typed constants (projects, skills, contact)
├── hooks/        # Custom hooks: useActiveSection, useScrollAnimation
├── sections/     # Page sections: Hero, About, Skills, Projects, Contact
└── types/        # Shared TypeScript interfaces
```

See `CLAUDE.md` for full architecture guide, DRY/SOLID rules, and conventions.

---

## GitHub Repository Setup

Before first deploy:

1. Create a repo on GitHub named `portfolio`
2. Add remote: `git remote add origin https://github.com/[your-username]/portfolio.git`
3. Push main: `git push -u origin main`
4. In repo **Settings → Pages**, set source to `gh-pages` branch
5. Push to `main` — GitHub Actions handles the rest
