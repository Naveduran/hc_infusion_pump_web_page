# OpenCortisol Project Website

Open-source hydrocortisone pump technology website built with modular BEM CSS and template system.

## Local Development

### Prerequisites
- Node.js (v16 or higher)
- Git

### Initial Setup

1. **Clone and configure:**
   ```bash
   git clone https://github.com/Naveduran/open_cortisol.git
   cd open_cortisol
   
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

### Deployment
- **Production**: `https://naveduran.github.io/open_cortisol/`
- **Test**: `https://naveduran.github.io/open_cortisol/test/`

### Setup
```bash
# Enable GitHub Pages: Settings → Pages → Source: "GitHub Actions"
git checkout -b test
git push -u origin test
```

See `.github/DEPLOYMENT.md` for detailed setup instructions.

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

## Available Pages

### English Version
- **Home** (`index.html`) - Landing page with project overview
- **My story** (`mystory.html`) - Personal journey and scientific discovery
- **Team** (`team.html`) - Meet the team and join our mission
- **Support** (`support.html`) - Ways to support with PayPal integration
- **Sources** (`sources.html`) - Scientific research and references

### Spanish Version (`/es/`)
- **Inicio** (`es/index.html`) - Página principal del proyecto
- **Mi historia** (`es/mystory.html`) - Viaje personal y descubrimiento científico
- **Equipo** (`es/team.html`) - Conoce al equipo y únete
- **Apoyo** (`es/support.html`) - Formas de apoyar con integración PayPal
- **Recursos** (`es/sources.html`) - Investigación científica
