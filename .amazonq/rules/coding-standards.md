# OpenCortisol Project Coding Standards

## Architecture Requirements
- ALL TypeScript files MUST use class-based architecture with `*PageManager` naming
- ALL new functionality MUST import from `constants.ts` and `utils.ts`
- NO hardcoded strings, selectors, or magic numbers - use constants
- ALL classes MUST follow the established pattern: constructor → init() → bind*() → handle*()

## Error Handling Standards
- ALL methods MUST use try-catch with ErrorHandler.logError()
- ALL DOM queries MUST check for null/undefined with ErrorHandler.logWarning()
- NO console.log/warn/error directly - use ErrorHandler methods

## Code Organization Rules
- NEW pages MUST create corresponding CSS file in `assets/css/pages/`
- NEW components MUST create corresponding CSS file in `assets/css/components/`
- ALL selectors MUST be added to SELECTORS constant in `constants.ts`
- ALL CSS classes MUST be added to CSS_CLASSES constant in `constants.ts`
- ALL timeouts/delays MUST be added to TIMEOUTS constant in `constants.ts`

## Naming Conventions
- Classes: `*PageManager` (e.g., ContactPageManager)
- Methods: `bind*()`, `handle*()`, `toggle*()` 
- Interfaces: `*Element` (e.g., ContactFormElement)
- Constants: SCREAMING_SNAKE_CASE

## Import Standards
```typescript
import { SELECTORS, CSS_CLASSES, TIMEOUTS, MESSAGES } from './constants.js';
import { DOMUtils, ErrorHandler } from './utils.js';
```

## File Structure Requirements
```
assets/js/
├── constants.ts     (shared constants)
├── utils.ts         (shared utilities)  
├── *-page.ts        (page managers)
└── components/      (reusable components)
```

## Quality Checklist
Before submitting ANY code, verify:
- [ ] Uses existing constants instead of hardcoded values
- [ ] Follows established naming patterns
- [ ] Has proper error handling with ErrorHandler
- [ ] Imports shared utilities instead of duplicating code
- [ ] Follows class-based architecture
- [ ] Has consistent method organization