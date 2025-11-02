# Documentation Standards

## Code Documentation (MANDATORY)
- ALL classes MUST have JSDoc comments
- ALL public methods MUST be documented
- COMPLEX logic MUST have inline comments
- USE clear, descriptive variable names

```typescript
/**
 * Manages form validation and submission
 * Handles user input validation, error display, and form submission
 */
class FormPageManager {
  /**
   * Validates email format
   * @param email - Email address to validate
   * @returns True if email format is valid
   */
  private validateEmail(email: string): boolean {
    // Use RFC 5322 compliant regex for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}
```

## File Headers
- ALL files MUST have descriptive headers
- INCLUDE purpose and main functionality
- DOCUMENT dependencies and requirements

```typescript
/**
 * Contact Form Page Manager
 * Handles contact form validation, submission, and user feedback
 * 
 * Dependencies:
 * - constants.ts (form selectors and messages)
 * - utils.ts (DOM utilities and error handling)
 * 
 * Features:
 * - Real-time form validation
 * - Accessible error messaging
 * - Loading states and feedback
 */
```

## README Updates
- UPDATE README when adding new pages
- DOCUMENT new features and components
- INCLUDE setup instructions for new dependencies
- MAINTAIN accurate file structure documentation

## CSS Documentation
- DOCUMENT complex CSS calculations
- EXPLAIN browser-specific workarounds
- DESCRIBE component variations and usage

```css
/**
 * Modal Component
 * 
 * Usage:
 * <div class="modal modal--large">
 *   <div class="modal__content">...</div>
 * </div>
 * 
 * Modifiers:
 * --large: Increased width for forms
 * --fullscreen: Full viewport coverage
 */
.modal {
  /* Implementation */
}
```

## HTML Documentation
- COMMENT complex HTML structures
- EXPLAIN accessibility patterns
- DOCUMENT data attribute usage

```html
<!-- 
  Collapsible FAQ Section
  Uses ARIA attributes for screen reader support
  JavaScript handles expand/collapse via data-target
-->
<div class="faq-item">
  <button 
    class="faq-item__header" 
    data-target="faq-1"
    aria-expanded="false"
    aria-controls="faq-1"
  >
    Question text
  </button>
  <div id="faq-1" class="faq-item__content" aria-hidden="true">
    Answer content
  </div>
</div>
```

## API Documentation
- DOCUMENT all data attributes and their expected values
- EXPLAIN event handling patterns
- DESCRIBE component lifecycle

## NEVER DO
- Leave TODO comments in production code
- Use vague variable names (data, item, thing)
- Skip documentation for "obvious" code
- Write comments that repeat the code
- Forget to update docs when changing functionality