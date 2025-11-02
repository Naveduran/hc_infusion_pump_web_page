# Performance Standards

## DOM Optimization (MANDATORY)
- CACHE DOM queries in variables
- USE event delegation for multiple similar elements
- MINIMIZE DOM manipulations in loops
- BATCH DOM updates when possible

```typescript
// Good - Cache DOM queries
const buttons = document.querySelectorAll('.btn');
const container = document.getElementById('container');

// Good - Event delegation
container.addEventListener('click', (event) => {
  if (event.target.matches('.btn')) {
    // Handle button click
  }
});

// Bad - Repeated DOM queries
document.querySelectorAll('.btn').forEach(btn => {
  document.getElementById('container').appendChild(btn);
});
```

## Async Operations
- USE async/await for better readability
- HANDLE loading states for user feedback
- IMPLEMENT proper error boundaries
- AVOID blocking the main thread

## Image Optimization
- USE appropriate image formats (WebP, AVIF)
- IMPLEMENT lazy loading for images
- PROVIDE proper alt text and dimensions
- USE responsive images with srcset

```html
<!-- Good - Responsive lazy loading -->
<img 
  src="image-small.webp" 
  srcset="image-small.webp 400w, image-large.webp 800w"
  sizes="(max-width: 768px) 400px, 800px"
  alt="Descriptive alt text"
  loading="lazy"
  width="400" 
  height="300"
>
```

## CSS Performance
- MINIMIZE CSS specificity
- USE CSS custom properties for dynamic values
- AVOID deep nesting (max 2 levels)
- GROUP related properties together

## JavaScript Performance
- DEBOUNCE expensive operations (scroll, resize)
- USE requestAnimationFrame for animations
- MINIMIZE bundle size with tree shaking
- LAZY load non-critical JavaScript

## Memory Management
- REMOVE event listeners when elements are destroyed
- CLEAR timeouts and intervals
- AVOID memory leaks in closures
- USE WeakMap/WeakSet for object references

## NEVER DO
- Inline styles (use CSS classes)
- Synchronous operations that block UI
- Large images without optimization
- Unnecessary DOM queries in loops
- Missing cleanup in event handlers