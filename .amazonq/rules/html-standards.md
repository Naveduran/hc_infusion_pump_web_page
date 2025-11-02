# HTML Coding Standards

## Template Structure (MANDATORY)
- ALL HTML files MUST use header/footer placeholders
- NO direct header/footer content in pages
- FOLLOW established template pattern

## Required HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Page Title] - OpenCortisol</title>
  <link rel="stylesheet" href="assets/css/main.css">
</head>
<body>
  <!-- HEADER_PLACEHOLDER -->
  <!-- /HEADER_PLACEHOLDER -->
  
  <main>
    <!-- Page content here -->
  </main>
  
  <!-- FOOTER_PLACEHOLDER -->
  <!-- /FOOTER_PLACEHOLDER -->
  
  <script type="module" src="assets/js/[page-name]-page.js"></script>
</body>
</html>
```

## BEM Class Usage (MANDATORY)
- ALL CSS classes MUST follow BEM: `.block__element--modifier`
- USE semantic HTML5 elements
- CONSISTENT class naming with CSS files

## Accessibility Requirements
- ALL images MUST have alt attributes
- ALL forms MUST have proper labels
- ALL interactive elements MUST be keyboard accessible
- USE semantic HTML elements (header, nav, main, section, article, aside, footer)
- INCLUDE proper ARIA attributes where needed

## Data Attributes
- USE data attributes for JavaScript functionality
- FOLLOW pattern: `data-action="action-name"` `data-url="url"`
- NO inline JavaScript

## Form Standards
```html
<form class="contact-form" data-action="submit-form">
  <div class="contact-form__field">
    <label for="email" class="contact-form__label">Email</label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      class="contact-form__input"
      required
      aria-describedby="email-error"
    >
    <span id="email-error" class="contact-form__error" role="alert"></span>
  </div>
  
  <button type="submit" class="btn btn--primary contact-form__submit">
    Submit
  </button>
</form>
```

## Button Standards
```html
<!-- Action buttons -->
<button 
  class="btn btn--primary" 
  data-action="copy-link" 
  data-url="https://example.com"
  aria-label="Copy link to clipboard"
>
  Copy Link
</button>

<!-- External links -->
<button 
  class="btn btn--secondary" 
  data-action="external-redirect" 
  data-url="https://external.com"
  aria-label="Open external link"
>
  Visit Site
</button>
```

## NEVER DO
- Inline styles
- Inline JavaScript
- Missing alt attributes on images
- Non-semantic HTML structure
- Missing form labels
- Hardcoded header/footer content
- Non-BEM class names