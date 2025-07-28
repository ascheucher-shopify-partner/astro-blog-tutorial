# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This project uses **pnpm** as the package manager. All commands should be run from the project root:

- `pnpm dev` - Start development server (runs NODE_ENV=development astro dev)
- `pnpm build` - Build production site to ./dist/
- `pnpm preview` - Preview production build locally
- `pnpm test` - Run tests with Vitest
- `pnpm astro` - Run Astro CLI commands

## Project Architecture

This is an **Astro-based multilingual blog/homepage** for SaaSQuadrat with the following key architectural patterns:

### Internationalization (i18n)

- **Two languages**: English (default) and German
- **Routing**: Uses Astro's built-in i18n with prefixed locales (`/en/` and `/de/`)
- **Content structure**: Blog posts organized in `src/content/posts/[lang]/` directories
- **i18n utilities**: Located in `src/lib/i18n/` with functions for language switching, content filtering, and hreflang generation
- **Smart fallback**: Posts without translations in the current language will display in the available language

### Content Management

- **Astro Content Collections**: Defined in `src/content/config.ts` using Zod schemas
- **Blog posts**: Markdown files with frontmatter (id, title, pubDate, description, author, image, tags)
- **Post filtering**: `filterPostsForLang()` function handles cross-language post display
- **SEO optimization**: Automatic sitemap generation, hreflang attributes, robots.txt

### TypeScript Configuration

- **Path aliases** configured for clean imports:
  - `@components/*` → `src/components/*`
  - `@layouts/*` → `src/layouts/*`  
  - `@styles/*` → `src/styles/*`
  - `@lib/*` → `src/lib/*`
  - `@content/*` → `src/content/*`

### Component Architecture

- **Framework**: Astro components with Preact integration for interactive elements
- **Layouts**: `BaseLayout.astro` and `MarkdownPostLayout.astro` for consistent page structure
- **Components**: Standard components in `src/components/` including navigation, header, footer, and blog post lists

### Key Features

- **Cookie consent**: Implemented with vanilla-cookieconsent library (config files in public/)
- **Google Analytics**: Integrated for tracking
- **Dynamic routing**: Uses `[...slug].astro` pattern for blog posts with tag filtering
- **Contact pages**: Organized under `/contact/` directory structure

### Testing

- **Vitest**: Configured for unit testing with Astro integration
- **Test files**: Located alongside source files (e.g., `src/lib/i18n/utils.test.ts`)

## Important Notes

- The site is configured for GitHub Pages deployment with base path `/astro-blog-tutorial`
- Uses PNPM workspace configuration - always use `pnpm` instead of `npm`
- Content should maintain the dual-language structure when adding new blog posts
- When working with i18n, use the utility functions in `src/lib/i18n/utils.ts` rather than implementing custom logic