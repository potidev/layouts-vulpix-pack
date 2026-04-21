# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

`@potidev/layouts-vulpix-pack` is a React/Next.js component library (npm package) that provides page layout primitives for admin dashboards. It is a peer-dependent companion to `@potidev/react-vulpix-pack` (base UI components like `Button`, `Card`, `cn`, etc.) and uses Tailwind CSS v4 for styling.

## Commands

```bash
# Build (copies src → dist, resolves path aliases)
npm run build

# Watch mode (rebuild on file changes)
npm run watch

# Build to local preview app (../exemples/dashboard)
npm run build-preview

# Watch mode for preview
npm run preview-watch

# Storybook dev server
npm run storybook

# Publish (runs build first)
npm publish
```

There are no test commands — the project uses Storybook + Vitest browser tests configured in `.storybook/vitest.setup.ts`, but no `test` script is wired up in `package.json`.

## Build System

The build does **not** use a bundler (no Vite/Rollup/esbuild for output). Instead `build.js`:
1. Clears `dist/`
2. Copies `src/` → `dist/` verbatim (TypeScript source ships as-is)
3. Runs `tscpaths` to rewrite `@/*` path aliases to relative paths

The package's `main`/`exports` point directly to `dist/index.ts` — consumers must transpile the source themselves (Next.js via `transpilePackages`).

## Path Aliases

`tsconfig.json` sets `baseUrl: "src"` with `"@/*": ["*"]`. Always use `@/` for imports within `src/`. The build step rewrites these for the dist output.

## Architecture

### Source layout

```
src/
  layouts/       # Page-level layout components (main exports)
  components/    # Sub-components used by layouts
  utils/         # ColumnTemplates helper for TanStack Table
  index.ts       # Re-exports layouts + components

stories/         # Storybook stories + mock data (not shipped)
```

### Layout components (`src/layouts/`)

| Component | Purpose |
|-----------|---------|
| `ListPageLayout` / `TablePageLayout` | List/table pages with header, create button, extra buttons/content |
| `TableLayout` | Wraps a TanStack Table with pagination, search, filters, column controls |
| `FormPageLayout` | Form pages with back button, delete button, wraps children in a `Card` |
| `FormLayout` | Form body layout (sections) |
| `FormSectionLayout` | A named section within a form |
| `DetailsPageLayout` | Detail view with edit/delete action buttons |

`TablePageLayout` is a re-export alias of `ListPageLayout`.

### Sub-components (`src/components/`)

Grouped by category:
- `@atom` — `BackButton`, `SearchButton`
- `@page` — `PageHeader`, `PageMaxContent` (max-width content wrapper)
- `@table` — `TableSearch`, `TableLimit`, `TableSelect`, `TableTotal`, `TableActiveFilters`, `TableColumnsControl`, `TableDownloadReport`
- `PaginationControl`

### Styling

Tailwind v4 (`@tailwindcss/postcss`). Classes come from `@potidev/react-vulpix-pack` primitives + local Tailwind utilities. Consumers must add the following to their global CSS so Tailwind scans this package:

```css
@source "../node_modules/@potidev/layouts-vulpix-pack";
```

### Client components

`FormPageLayout` and `DetailsPageLayout` are `"use client"` (they use `useRouter` from Next.js). Other layouts are server-compatible.
