# CSS Development Workflow

## Before Adding ANY New Styles
1. Check `base/variables.css` for existing CSS custom properties
2. Check existing components for similar patterns
3. Determine if it's a component or page-specific style
4. Follow mobile-first approach

## Creating New Page Styles
1. Create file: `assets/css/pages/[page-name].css`
2. Add import to `assets/css/main.css` in pages section
3. Use BEM naming: `.page-name__element--modifier`
4. Start with mobile styles, add desktop with media queries

## Creating New Component Styles
1. Create file: `assets/css/components/[component-name].css`
2. Add import to `assets/css/main.css` in components section
3. Use BEM naming: `.component-name__element--modifier`
4. Make it reusable across pages

## CSS File Structure Requirements
```
assets/css/
├── base/
│   ├── variables.css    (CSS custom properties)
│   ├── reset.css        (normalize/reset)
│   ├── typography.css   (font styles)
│   └── utilities.css    (utility classes)
├── layout/
│   ├── grid.css         (grid system)
│   ├── header.css       (site header)
│   └── footer.css       (site footer)
├── components/
│   └── [component].css  (reusable components)
├── pages/
│   └── [page].css       (page-specific styles)
└── main.css             (imports all files)
```

## CSS Quality Checklist (MANDATORY)
Every CSS change MUST pass:
- [ ] Uses BEM methodology
- [ ] Uses CSS custom properties (no hardcoded values)
- [ ] Mobile-first responsive design
- [ ] Proper file location (components vs pages)
- [ ] Added to main.css imports
- [ ] Follows property order convention
- [ ] No nesting beyond 2 levels
- [ ] Includes hover/focus states where needed