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

## TODO Items

Outstanding tasks and improvements identified in the codebase:

### Configuration & Deployment

- **astro.config.mjs:11** - Change site URL to real domain for sitemap generation
- **src/layouts/BaseLayout.astro:16** - Change favicon to the logo

### Internationalization & Content

- **src/pages/[lang]/contact/index.astro:26** - Translate page titles
- **src/pages/[lang]/contact/index.astro:35** - Add contact information
- **src/pages/index.astro:10** - Use client's browser requested language for automatic locale detection
- **src/pages/[lang]/ecommerce-insights/[...slug].astro:80** - Add Google Translate button for blog posts where translation is unavailable
- **src/layouts/MarkdownPostLayout.astro:20** - Implement tag translation system
- **src/layouts/MarkdownPostLayout.astro:21** - Add date formatting for blog post frontmatter

### Blog & Content Management

- **src/layouts/MarkdownPostLayout.astro:17** - Consider switching to MDX for React components in markdown posts
- **src/layouts/MarkdownPostLayout.astro:18** - Generate SEO title & description from posting frontmatter
- **src/layouts/MarkdownPostLayout.astro:19** - Implement proper date handling in frontmatter
- **src/layouts/MarkdownPostLayout.astro:22** - Add pagination for blog posts

### TypeScript & Code Quality

- **src/layouts/MarkdownPostLayout.astro:11** - Fix frontmatter type definition
- **src/lib/i18n/utils.ts:22** - Fix types in i18n utilities
- **src/pages/index.astro:9** - Implement TypeScript type tips from Astro documentation

### UI & UX Enhancements

- **src/layouts/BaseLayout.astro:15** - Consider using Astro Theme instead of custom Tailwind UI
- **src/layouts/BaseLayout.astro:19** - Implement SEO fields using astro-seo
- **public/cookieconsent-config.js:21** - Improve consent modal description for EN & DE

### Development & Monitoring

- **src/layouts/BaseLayout.astro:20** - Add console logging with global switch in astro.config.js
- **src/layouts/BaseLayout.astro:21** - Add client-side logging with Papertrail or Bugsnag

### Known Issues (FIXME)

- **public/cookieconsent-config.js:26** - German settings dialog is broken ([Bug report](https://github.com/orestbida/cookieconsent/issues/693))
- **src/lib/i18n/utils.test.ts:36** - Astro testing issue ([Bug report](https://github.com/withastro/astro/issues/11175))

## Important Notes

- The site is configured for GitHub Pages deployment with base path `/astro-blog-tutorial`
- Uses PNPM workspace configuration - always use `pnpm` instead of `npm`
- Content should maintain the dual-language structure when adding new blog posts
- When working with i18n, use the utility functions in `src/lib/i18n/utils.ts` rather than implementing custom logic