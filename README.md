# Vertex Agents Website

[![Deploy to GitHub Pages](https://github.com/vertexagents/vertexagents.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/vertexagents/vertexagents.github.io/actions/workflows/deploy.yml)

Marketing website for Vertex Agents built with React, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 3
- Framer Motion
- ESLint 9

## Project Structure

```text
src/
	components/
		common/        # shared UI primitives (buttons, wrappers, headings)
		layout/        # persistent layout parts (navbar, footer, theme toggle)
		pages/         # route-level page composition (home, gallery)
		sections/      # marketing content sections
	data/            # static content model for sections/nav
	utils/           # shared helpers (navigation/path mapping)
	assets/          # logos, hero media, gallery placeholders
```

## Scripts

- `npm run dev` - start local development server
- `npm run build` - create production build
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint checks

## Optimization Notes

- Route-level code splitting is enabled through lazy-loaded page components.
- Image loading strategy is tuned:
  - Hero image uses eager loading and high fetch priority.
  - Gallery and portfolio images use lazy loading.
- Manual chunking in `vite.config.js` separates major dependencies for better caching.
- Theme and content are componentized for maintainability and future scaling.

## Conventions

- Keep section copy inside `src/data/siteContent.js`.
- Prefer shared utilities in `src/utils` over duplicated logic across components.
- Keep layout concerns in `components/layout` and page composition in `components/pages`.
