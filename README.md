# August Herrström – CV Website

This project is a personal CV website for [August Herrström](https://www.linkedin.com/in/august-herrstr%C3%B6m-3a04547a/), built with [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), and [daisyUI](https://daisyui.com/). It features a clean, responsive design, dark/light theme toggle, and automated PDF export using Puppeteer.

## ✨ Features

- **Markdown-powered CV**: Easily edit your CV in Markdown (`src/pages/index.md`)
- **Modern stack**: Astro, Tailwind CSS, daisyUI, and Vite
- **Dark/Light mode**: Toggle theme with smooth transitions
- **Responsive design**: Looks great on all devices and prints cleanly
- **Automated PDF export**: Generates a PDF version of the CV using Puppeteer
- **GitHub Actions**: Deploys to GitHub Pages and creates PDF releases automatically

## 📦 Project Structure

```
/
├── src/
│   ├── assets/         # CSS & JS (theme toggle, Tailwind config)
│   ├── components/     # Reusable Astro components (footer, etc.)
│   ├── layouts/        # Markdown layout with theme toggle
│   └── pages/          # Main CV content in Markdown
├── public/             # Static assets (favicon, etc.)
├── puppeteer/          # Puppeteer script for PDF generation
├── .github/workflows/  # GitHub Actions for deploy & PDF
├── astro.config.mjs    # Astro config
├── package.json        # Project dependencies & scripts
└── ...
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)

### Install dependencies

```sh
npm install
```

### Start development server

```sh
npm run dev
```

Visit [http://localhost:4321](http://localhost:4321) to view the site.

### Build for production

```sh
npm run build
```

### Preview production build

```sh
npm run preview
```

## 🖨️ Generate PDF

To generate a PDF version of the CV:

```sh
cd puppeteer
npm install
npm start
```

This will create `August-Herrström-CV.pdf` in the `dist/` directory.

## ⚙️ Deployment

- **GitHub Actions**: On push to `main`, the site is built and deployed to GitHub Pages.

See [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) for details.

## 📝 Customization

- **Edit your CV**: Update [`src/pages/index.md`](src/pages/index.md)
- **Change styles**: Edit [`src/assets/app.css`](src/assets/app.css)
- **Modify layout**: Update [`src/layouts/markdown.astro`](src/layouts/markdown.astro)

## 📄 License

[MIT](LICENSE) © August Herrström

---

> Built with ❤️ using [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), and [daisyUI](https://daisyui.com/)