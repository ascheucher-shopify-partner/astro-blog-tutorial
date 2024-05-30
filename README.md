# SaaSQuadrat Homepage / Blog Template

## Features

* i18n
  * manual language switch de/en
  * pages
  * blog posts
    * post without current lang versions will be listed & shown in the other language
* Google / SEO optimisations
  * hreflang attributes
  * sitemap
  * robots.txt
* favicon
* Blog
  * markdown post
  * 

## Checks to run through

* [i18n hreflang check](https://app.hreflang.org/)
  * test with the finished online version. GitHub pages seem to do a 301 redirect from https://example.com/path -> https://example.com/path/ which is indicated as hreflang error.
* [Bing Webmaster Tools](https://www.bing.com/webmasters/about)

# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Debug

[How to debug client and server side in VSC](https://blogthedata.com/post/how-to-debug-an-astro-app/)

## TypeScript

* [Astro & TypeScript](https://docs.astro.build/en/guides/typescript/)