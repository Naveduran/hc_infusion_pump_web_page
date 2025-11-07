# CSS Page Isolation Rules

## MANDATORY: Page-Specific CSS Scoping
- ALL page styles MUST be prefixed with `.page-[pagename]`
- NO generic selectors that can affect multiple pages
- EVERY HTML page MUST have `<body class="page-[name]">`

## Page Class Naming Convention
```
index.html → page-home
support.html → page-support  
team.html → page-team
mystory.html → page-mystory
sources.html → page-sources
```

## CSS Selector Examples
```css
/* CORRECT - Page isolated */
.page-support .card p { text-align: center; }
.page-team .card--team { padding: var(--space-6); }

/* WRONG - Affects all pages */
.card p { text-align: center; }
.section .card:last-child p { padding: 0; }
```

## HTML Body Class Examples
```html
<!-- CORRECT -->
<body class="page-support">
<body class="page-team">

<!-- WRONG -->
<body>
<body class="support-page">
```

## Why This Matters
- Prevents support.css from affecting team.html
- Prevents team.css from affecting support.html  
- Allows safe style modifications without cross-page conflicts
- Maintains predictable styling behavior

## Enforcement Checklist
- [ ] Page CSS file uses `.page-[name]` prefix on ALL selectors
- [ ] HTML body has correct `class="page-[name]"`
- [ ] No generic selectors without page prefix
- [ ] Tested that changes don't affect other pages
