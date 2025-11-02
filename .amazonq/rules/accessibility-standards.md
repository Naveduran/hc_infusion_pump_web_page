# Accessibility Standards

## WCAG 2.1 Compliance (MANDATORY)
- ALL content MUST be accessible to screen readers
- ALL interactive elements MUST be keyboard navigable
- MAINTAIN proper color contrast ratios
- PROVIDE alternative text for all images

## Semantic HTML Requirements
```html
<!-- Use proper heading hierarchy -->
<h1>Page Title</h1>
  <h2>Section Title</h2>
    <h3>Subsection Title</h3>

<!-- Use semantic elements -->
<header>Site header</header>
<nav>Navigation</nav>
<main>Main content</main>
<section>Content section</section>
<article>Article content</article>
<aside>Sidebar content</aside>
<footer>Site footer</footer>
```

## Form Accessibility
```html
<form class="contact-form">
  <!-- Always associate labels with inputs -->
  <label for="name" class="contact-form__label">
    Full Name
    <span class="contact-form__required" aria-label="required">*</span>
  </label>
  <input 
    type="text" 
    id="name" 
    name="name" 
    class="contact-form__input"
    required
    aria-describedby="name-help name-error"
  >
  <div id="name-help" class="contact-form__help">
    Enter your full name
  </div>
  <div id="name-error" class="contact-form__error" role="alert" aria-live="polite">
    <!-- Error message appears here -->
  </div>
</form>
```

## Button and Link Accessibility
```html
<!-- Descriptive button text -->
<button class="btn btn--primary" aria-label="Submit contact form">
  Submit
</button>

<!-- External links -->
<a href="https://external.com" 
   target="_blank" 
   rel="noopener noreferrer"
   aria-label="Visit external site (opens in new tab)">
  Visit Site
</a>

<!-- Icon buttons -->
<button class="btn btn--icon" aria-label="Close modal">
  <span aria-hidden="true">×</span>
</button>
```

## Image Accessibility
```html
<!-- Informative images -->
<img src="chart.png" alt="Patient cortisol levels showing 40% improvement">

<!-- Decorative images -->
<img src="decoration.png" alt="" role="presentation">

<!-- Complex images -->
<img src="complex-chart.png" alt="Detailed cortisol data" aria-describedby="chart-description">
<div id="chart-description">
  Detailed description of the chart data...
</div>
```

## Interactive Element States
```html
<!-- Focus indicators -->
<button class="btn" tabindex="0">Focusable Button</button>

<!-- Disabled states -->
<button class="btn" disabled aria-disabled="true">Disabled Button</button>

<!-- Loading states -->
<button class="btn" aria-busy="true" aria-label="Loading, please wait">
  Loading...
</button>
```

## ARIA Attributes Usage
- `role="alert"` for error messages
- `aria-label` for descriptive labels
- `aria-describedby` to associate help text
- `aria-expanded` for collapsible content
- `aria-hidden="true"` for decorative elements
- `aria-live="polite"` for dynamic content updates

## Keyboard Navigation
- ALL interactive elements MUST be reachable via Tab
- PROVIDE visible focus indicators
- IMPLEMENT logical tab order
- SUPPORT Enter and Space for activation
- INCLUDE skip links for main content

## Color and Contrast
- NEVER rely on color alone to convey information
- MAINTAIN minimum 4.5:1 contrast ratio for normal text
- MAINTAIN minimum 3:1 contrast ratio for large text
- PROVIDE alternative indicators (icons, text) alongside color