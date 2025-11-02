# Development Workflow Rules

## Before Adding ANY New Functionality
1. Check `constants.ts` for existing selectors/classes/timeouts
2. Check `utils.ts` for existing helper functions
3. Follow established patterns in existing `*PageManager` classes
4. Update constants files FIRST, then implement functionality

## When Creating New Pages
1. Create CSS file in `assets/css/pages/[page-name].css`
2. Add CSS import to `assets/css/main.css`
3. Create TypeScript file as `assets/js/[page-name]-page.ts`
4. Follow `*PageManager` class pattern exactly
5. Add all selectors to `constants.ts` SELECTORS object
6. Add all CSS classes to `constants.ts` CSS_CLASSES object

## When Adding New Components
1. Create CSS file in `assets/css/components/[component-name].css`
2. Add CSS import to `assets/css/main.css`
3. Add component utilities to `utils.ts` if reusable
4. Add component constants to `constants.ts`

## Code Review Checklist (MANDATORY)
Every code change MUST pass this checklist:
- [ ] No hardcoded strings (use MESSAGES constants)
- [ ] No hardcoded selectors (use SELECTORS constants)
- [ ] No hardcoded CSS classes (use CSS_CLASSES constants)
- [ ] No magic numbers (use TIMEOUTS constants)
- [ ] Uses ErrorHandler for all logging
- [ ] Uses DOMUtils for common DOM operations
- [ ] Follows established naming conventions
- [ ] Has proper error handling with try-catch
- [ ] Imports from constants.ts and utils.ts
- [ ] Follows class-based architecture pattern