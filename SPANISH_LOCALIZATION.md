# Spanish Localization Implementation

## Structure Created

```
/
├── es/                          # Spanish subdirectory
│   ├── _includes/
│   │   ├── header.html         # Spanish navigation
│   │   └── footer.html         # Spanish footer
│   ├── index.html              # Spanish homepage
│   └── coming_soon.html        # Spanish placeholder page
├── assets/js/constants-es.ts   # Spanish constants/messages
└── build.js                    # Updated to handle Spanish files
```

## Features Implemented

### ✅ Subdirectory Structure
- Spanish pages in `/es/` subdirectory
- Proper relative paths to shared assets (`../assets/`)
- Language-specific templates in `es/_includes/`

### ✅ Language Switching
- English header: "Español" link to Spanish version
- Spanish header: "English" link to English version
- Available in both desktop and mobile menus

### ✅ Build Process
- Updated `build.js` to process Spanish files
- Automatic template replacement for Spanish pages
- Maintains existing English build process

### ✅ Translated Content
- **Homepage**: Fully translated Spanish version
- **Navigation**: All menu items translated
- **Constants**: Spanish error/success messages
- **SEO**: Proper `lang="es"` and translated meta descriptions

## URLs Structure

- English: `https://domain.com/index.html`
- Spanish: `https://domain.com/es/index.html`

## Next Steps

To complete the Spanish localization:

1. **Translate remaining pages**:
   - `es/research.html`
   - `es/team.html` 
   - `es/support.html`
   - `es/sources.html`

2. **Add hreflang attributes** for SEO:
   ```html
   <link rel="alternate" hreflang="en" href="../index.html">
   <link rel="alternate" hreflang="es" href="index.html">
   ```

3. **Test all functionality** with Spanish constants file

## Usage

Build with: `npm run build`

The Spanish site will be available at `/es/` in the dist folder.