# OpenCortisol Project Website

Open-source hydrocortisone pump technology website built with modular BEM CSS and template system.

## Local Development

### Prerequisites
- Node.js (v16 or higher)
- Git

### Initial Setup

1. **Clone and configure:**
   ```bash
   git clone <repository-url>
   cd hc_infusion_pump_web_page
   
   # Configure Git for cross-platform compatibility
   git config core.autocrlf false
   git config core.eol lf
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Build and Test Locally

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **View the website:**
   - Open `dist/index.html` in your browser
   - Or run `npm run dev` to build and serve locally

3. **Make changes:**
   - Edit HTML files (they use template placeholders)
   - Edit `_includes/header.html` or `_includes/footer.html` for navigation changes
   - Edit CSS in `assets/css/` directory
   - Edit TypeScript in `assets/js/` directory

   - Run `npm run build` again to rebuild

## File Structure

```
├── _includes/           # Template fragments
│   ├── header.html     # Navigation header
│   └── footer.html     # Site footer
├── assets/
│   ├── css/            # Modular BEM CSS
│   └── js/             # TypeScript source files
├── dist/              # Built files (auto-generated)
├── *.html             # Source HTML files with placeholders
├── build.js           # Build script
├── package.json       # Dependencies
└── tsconfig.json      # TypeScript config
```

## Deployment

### Branch Strategy
- **Main**: `https://[username].github.io/hc_infusion_pump_web_page/` (production)
- **Test**: `https://[username].github.io/hc_infusion_pump_web_page/test/` (testing)

### Setup Test Branch
```bash
git checkout -b test
git push -u origin test
```

### GitHub Settings
1. **Settings** → **Pages** → **Source**: "GitHub Actions"
2. Push to any branch triggers auto-deployment
3. `dist/` folder and `gh-pages` branches are auto-managed

### Local Testing
```bash
# Serve locally (optional)
python -m http.server 8000 -d dist
# Or: npx http-server dist
```

### Cross-Platform Notes

**Windows Users:**
- The repository is configured to handle line endings automatically
- `desktop.ini` files are ignored by Git
- No additional setup required

**macOS/Linux Users:**
- `.DS_Store` files are ignored by Git
- No additional setup required

**If you encounter OS file conflicts:**
```bash
# Clean up any tracked OS files
git rm --cached **/desktop.ini 2>/dev/null || true
git rm --cached **/.DS_Store 2>/dev/null || true
```

## CSS Architecture

Uses BEM methodology with CSS custom properties. All styles in `assets/css/` with modular imports.