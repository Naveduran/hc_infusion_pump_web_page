# OpenCortisol Project Website

Open-source hydrocortisone pump technology website built with modular BEM CSS and template system.

## Local Development

### Prerequisites
- Node.js

### Build and Test Locally

1. **Build the site:**
   ```bash
   node build.js
   ```

2. **View the website:**
   - Open `dist/index.html` in your browser
   - Or serve the `dist/` folder with any local server

3. **Make changes:**
   - Edit HTML files (they use template placeholders)
   - Edit `_includes/header.html` or `_includes/footer.html` for navigation changes
   - Edit CSS in `assets/css/` directory
   - Run `node build.js` again to rebuild

## File Structure

```
├── _includes/           # Template fragments
│   ├── header.html     # Navigation header
│   └── footer.html     # Site footer
├── assets/css/         # Modular BEM CSS
├── dist/              # Built files (created by build.js)
├── *.html             # Source HTML files with placeholders
└── build.js           # Build script
```

## Deployment

Push to `main` branch - GitHub Actions automatically builds and deploys to GitHub Pages.

## CSS Architecture

Uses BEM methodology with CSS custom properties. All styles in `assets/css/` with modular imports.