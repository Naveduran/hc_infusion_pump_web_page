# Testing Standards

## Code Testability (MANDATORY)
- ALL functions MUST be pure when possible
- SEPARATE business logic from DOM manipulation
- USE dependency injection for external services
- MAKE functions return values instead of side effects

```typescript
// Good - Testable function
function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Good - Testable with dependency injection
class FormValidator {
  constructor(private emailService: EmailService) {}
  
  async validateForm(data: FormData): Promise<ValidationResult> {
    // Testable logic
  }
}

// Bad - Hard to test
function validateAndSubmitForm() {
  const email = document.getElementById('email').value;
  if (email.includes('@')) {
    fetch('/submit', { method: 'POST' });
  }
}
```

## Error Handling for Testing
- THROW specific error types
- PROVIDE meaningful error messages
- USE error codes for different scenarios
- LOG errors with context for debugging

## DOM Testing Considerations
- USE data-testid attributes for test selectors
- AVOID testing implementation details
- FOCUS on user interactions and outcomes
- MAKE components work without JavaScript (progressive enhancement)

```html
<!-- Good - Test-friendly markup -->
<button 
  class="btn btn--primary" 
  data-testid="submit-button"
  data-action="submit-form"
>
  Submit
</button>
```

## Async Testing Support
- RETURN promises from async functions
- USE proper error handling in async operations
- PROVIDE loading states for testing
- IMPLEMENT timeout handling

## Mock-Friendly Code
- AVOID direct browser API calls in business logic
- USE wrapper functions for external dependencies
- IMPLEMENT interfaces for services
- SEPARATE configuration from implementation

## Documentation for Testing
- DOCUMENT expected inputs and outputs
- PROVIDE examples of usage
- DESCRIBE error conditions
- INCLUDE performance expectations

## NEVER DO
- Mix business logic with DOM manipulation
- Use global variables for state
- Ignore error cases
- Write functions with multiple responsibilities
- Skip input validation