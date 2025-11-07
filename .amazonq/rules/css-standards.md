# CSS Coding Standards

## BEM Methodology (MANDATORY)
- ALL CSS classes MUST follow BEM: `.block__element--modifier`
- NO nested selectors beyond 2 levels
- NO ID selectors for styling

## CSS Organization Rules
- NEW page styles MUST go in `assets/css/pages/[page-name].css`
- NEW component styles MUST go in `assets/css/components/[component-name].css`
- ALL new CSS files MUST be imported in `assets/css/main.css`
- MAINTAIN import order: base → layout → components → pages

## CSS Custom Properties (MANDATORY)
- USE existing CSS variables from `base/variables.css`
- NO hardcoded colors, spacing, or font sizes
- ADD new variables to `base/variables.css` if needed

## Page-Specific CSS Isolation (MANDATORY)
- ALL page styles MUST be prefixed with `.page-[pagename]`
- NO generic selectors that affect multiple pages
- ALWAYS scope styles to prevent cross-page conflicts

## Required CSS Structure Template
```css
/* [Page] Page Styles - Mobile First */

/* Page-specific styles - ALWAYS prefix with .page-[name] */
.page-[name] .[block] {
  /* Layout properties first */
  display: flex;
  /* Spacing */
  padding: var(--space-4);
  /* Visual properties */
  background: var(--color-primary);
  /* Transitions last */
  transition: var(--transition-base);
}

/* Elements */
.page-[name] .[block]__[element] {
  /* Properties */
}

/* Modifiers */
.page-[name] .[block]--[modifier] {
  /* Override properties */
}

/* States */
.page-[name] .[block]:hover,
.page-[name] .[block]:focus {
  /* State changes */
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .page-[name] .[block] {
    /* Mobile overrides */
  }
}
```

## CSS Property Order
1. Layout (display, position, flex, grid)
2. Box model (width, height, margin, padding)
3. Typography (font-*, text-*, line-height)
4. Visual (color, background, border, box-shadow)
5. Transforms & transitions

## CSS Variable Usage
- Spacing: `var(--space-1)` to `var(--space-8)`
- Colors: `var(--primary-*)`, `var(--gray-*)`, `var(--secondary-*)`
- Typography: `var(--font-size-*)`, `var(--font-weight-*)`
- Borders: `var(--border-radius)`, `var(--border-width)`
- Transitions: `var(--transition-base)`, `var(--transition-slow)`

## NEVER DO
- Hardcoded pixel values (use CSS variables)
- Inline styles in HTML
- !important declarations
- Deep nesting (max 2 levels)
- Non-BEM class names
- Missing mobile responsiveness