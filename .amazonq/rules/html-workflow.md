# HTML Development Workflow

## Before Creating ANY New HTML File
1. Check existing pages for similar patterns
2. Determine page-specific CSS and JS needs
3. Plan BEM class structure
4. Follow template system requirements

## Creating New Pages
1. Create HTML file in root directory: `[page-name].html`
2. Use template structure with placeholders
3. Create corresponding CSS file: `assets/css/pages/[page-name].css`
4. Create corresponding JS file: `assets/js/[page-name]-page.ts`
5. Add CSS import to `assets/css/main.css`
6. Update build.js htmlFiles array if needed

## HTML File Structure Requirements
```
project-root/
├── index.html           (homepage)
├── about.html          (about page)
├── contact.html        (contact page)
├── [page-name].html    (new pages)
├── _includes/
│   ├── header.html     (shared header)
│   └── footer.html     (shared footer)
└── assets/
    ├── css/pages/[page-name].css
    └── js/[page-name]-page.ts
```

## Template Placeholder System
- ALWAYS use `<!-- HEADER_PLACEHOLDER -->` and `<!-- /HEADER_PLACEHOLDER -->`
- ALWAYS use `<!-- FOOTER_PLACEHOLDER -->` and `<!-- /FOOTER_PLACEHOLDER -->`
- Build system automatically replaces with actual content
- NEVER put header/footer content directly in pages

## Page Content Structure
```html
<main>
  <!-- Hero section (if needed) -->
  <section class="hero">
    <div class="container">
      <h1 class="hero__title">[Page Title]</h1>
      <p class="hero__description">[Page description]</p>
    </div>
  </section>
  
  <!-- Main content sections -->
  <section class="[page-name]-content">
    <div class="container">
      <!-- Content here -->
    </div>
  </section>
</main>
```

## Component Integration
- USE existing components from `assets/css/components/`
- FOLLOW established button patterns
- MAINTAIN consistent spacing with container classes
- APPLY proper BEM classes

## HTML Quality Checklist (MANDATORY)
Every HTML file MUST have:
- [ ] Template placeholders for header/footer
- [ ] Proper DOCTYPE and meta tags
- [ ] BEM class naming throughout
- [ ] Semantic HTML5 elements
- [ ] Accessibility attributes (alt, aria-label, etc.)
- [ ] Proper form labels and structure
- [ ] Data attributes for JavaScript functionality
- [ ] Corresponding CSS and JS files created
- [ ] No inline styles or scripts