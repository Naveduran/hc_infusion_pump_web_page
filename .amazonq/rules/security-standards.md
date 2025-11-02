# Security Standards

## Input Validation (MANDATORY)
- ALL user inputs MUST be validated and sanitized
- NO direct DOM insertion of user content
- USE textContent instead of innerHTML for user data
- VALIDATE all form inputs before processing

## XSS Prevention
```typescript
// Good - Safe text insertion
element.textContent = userInput;

// Bad - Vulnerable to XSS
element.innerHTML = userInput;

// Good - Sanitized HTML if needed
element.innerHTML = DOMPurify.sanitize(userInput);
```

## URL Handling
- ALL external URLs MUST use `rel="noopener noreferrer"`
- VALIDATE URLs before opening
- NO direct window.open() with user input

```html
<!-- Good -->
<a href="https://trusted-site.com" target="_blank" rel="noopener noreferrer">
  External Link
</a>

<!-- Good - JavaScript -->
window.open(validatedUrl, '_blank', 'noopener,noreferrer');
```

## Data Attributes Security
- NO sensitive data in data attributes
- VALIDATE data attribute values before use
- USE constants for action names

## Content Security Policy
- NO inline scripts or styles
- ALL JavaScript MUST be in external files
- USE nonce or hash for any required inline content

## NEVER DO
- innerHTML with user input
- eval() or Function() constructor
- Inline event handlers (onclick, onload, etc.)
- Storing sensitive data in localStorage/sessionStorage
- Direct URL construction from user input