# Cofacility Landing Page

A modern, responsive landing page for Facility Hub, built with Vue 3, Vite, and Tailwind CSS.

## Features

- **Responsive Design:** Looks great on all devices.
- **Smooth Section Navigation:** Navbar links scroll smoothly to About and Features sections.
- **Vue Router (Hash Mode):** SPA navigation works on GitHub Pages and Netlify.
- **Modern UI:** Clean layout, bold call-to-action, and easy-to-read sections.
- **Easy Deployment:** Ready for GitHub Pages or Netlify.

## Tech Stack

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [@fontsource/inter](https://github.com/fontsource/fontsource) for modern fonts

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)

### Installation


npm install
```

### Development

```sh
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Deployment

### GitHub Pages

1. Set `base` in `vite.config.js` to your repo name (e.g. `/cofacility-landing/`).
2. Install `gh-pages`:
    ```sh
    npm install --save-dev gh-pages
    ```
3. Add to `package.json`:
    ```json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
    ```
4. Deploy:
    ```sh
    npm run deploy
    ```

### Netlify

1. Connect your repo on Netlify.
2. Set build command to `npm run build` and publish directory to `dist`.
3. Make sure `@fontsource/inter` is installed (`npm install @fontsource/inter`).

## Project Structure

```
src/
  assets/         # Images and static assets
  components/     # Vue components
  views/          # Page views (Home.vue, etc.)
  router/         # Vue Router setup
  App.vue         # Main app shell
  main.js         # App entry point
  style.css       # Global styles
vite.config.js    # Vite config (with base for GitHub Pages)
```

## Font

This project uses [Inter](https://fonts.google.com/specimen/Inter) via [@fontsource/inter](https://github.com/fontsource/fontsource):

```js
import '@fontsource/inter'
```

## License

MIT
