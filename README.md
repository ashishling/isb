# Modular AI Workshop Proposal Microsite

A reusable, visually minimal, and modern Astro-based microsite for pitching AI workshops. Each instance of the site presents a tailored proposal with modular content via a config file.

## Features

- 🚀 Built with Astro for ultra-fast performance
- 🎨 Clean, modern Apple-style aesthetic
- 📱 Fully responsive design
- ⚡ Minimal JavaScript usage
- 🔧 Easy configuration via `siteconfig.ts`
- 🔒 Optional Netlify password protection

## Quick Start

1. Clone the repository:
```bash
git clone [repository-url]
cd [repository-name]
```

2. Install dependencies:
```bash
npm install
```

3. Update the configuration:
Edit `src/config/siteconfig.ts` with your workshop details.

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## Customization

### Site Configuration

Update `src/config/siteconfig.ts` with your:
- Workshop title
- Client and host logos
- Section content
- Contact information
- Social links

### Styling

- Uses TailwindCSS for styling
- Inter font family by default
- Easy to customize via Tailwind configuration

### Deployment

The site is configured for deployment on Netlify:

1. Push to GitHub
2. Connect to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## License

MIT

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

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
