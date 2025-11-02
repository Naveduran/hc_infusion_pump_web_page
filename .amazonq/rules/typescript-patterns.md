# TypeScript Implementation Patterns

## Required Class Structure Template
```typescript
/**
 * [Page/Component] Manager
 * [Brief description of functionality]
 */

import { SELECTORS, CSS_CLASSES, TIMEOUTS, MESSAGES } from './constants.js';
import { DOMUtils, ErrorHandler } from './utils.js';

interface [Name]Element extends HTMLElement {
  dataset: DOMStringMap & {
    [property]?: string;
  };
}

class [Name]PageManager {
  constructor() {
    this.init();
  }

  private init(): void {
    try {
      this.bind[Elements]();
      // Add other bind methods
    } catch (error) {
      ErrorHandler.logError('[ClassName] init', error);
    }
  }

  private bind[Elements](): void {
    try {
      const elements = document.querySelectorAll<[Type]>(SELECTORS.[CONSTANT]);
      elements.forEach(element => {
        element.addEventListener('[event]', this.handle[Action].bind(this));
      });
    } catch (error) {
      ErrorHandler.logError('[ClassName] bind[Elements]', error);
    }
  }

  private handle[Action](event: Event): void {
    const element = event.currentTarget as [Type];
    // Implementation using DOMUtils and constants
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new [Name]PageManager();
});
```

## Constants Update Pattern
ALWAYS update constants.ts FIRST:
```typescript
// Add to SELECTORS
[NEW_SELECTOR]: '.new-selector',

// Add to CSS_CLASSES  
[NEW_CLASS]: 'new-class',

// Add to TIMEOUTS if needed
[NEW_TIMEOUT]: 1000,

// Add to MESSAGES if needed
[NEW_MESSAGE]: 'New message text'
```

## Utility Function Pattern
Add to utils.ts if reusable:
```typescript
static [functionName](param: Type): ReturnType {
  // Implementation
}
```

## NEVER DO
- Direct console.log/warn/error
- Hardcoded strings or numbers
- Inline CSS class names
- Duplicate DOM manipulation logic
- Object literal patterns (use classes)
- Missing error handling