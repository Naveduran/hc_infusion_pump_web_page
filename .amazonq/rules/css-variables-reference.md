# CSS Variables Reference

## Available CSS Custom Properties

### Colors
```css
/* Primary Colors */
--primary-blue
--primary-orange
--primary-orange-dark
--secondary-yellow

/* Status Colors */
--success-green
--danger-red
--warning-blue

/* Gray Scale */
--gray-50    (lightest)
--gray-100
--gray-200
--gray-300
--gray-400
--gray-500   (medium)
--gray-600
--gray-700
--gray-800
--gray-900   (darkest)

/* State Colors */
--danger-light
--danger-medium
--info-light
--info-medium
--warning-light
--warning-medium
```

### Typography
```css
--font-family
--font-size-xs
--font-size-sm
--font-size-base
--font-size-lg
--font-size-xl
--font-size-2xl
--font-size-3xl
--font-size-4xl
```

### Spacing
```css
--space-1    (smallest)
--space-2
--space-3
--space-4    (base unit)
--space-5
--space-6
--space-8
--space-10
--space-12
--space-16   (largest)
```

### Layout & Effects
```css
--container-max-width
--border-radius
--border-radius-lg
--header-height
--avatar-size
--timeline-label-width

--shadow
--shadow-md
--shadow-lg

--transition-fast
--transition-base
--transition-slow
```

## Usage Examples
```css
/* Good */
.button {
  padding: var(--space-3) var(--space-6);
  background: var(--primary-blue);
  border-radius: var(--border-radius);
  transition: background var(--transition-base);
}

/* Bad */
.button {
  padding: 12px 24px;
  background: #1e40af;
  border-radius: 8px;
  transition: background 0.2s;
}
```

## Adding New Variables
When adding new CSS variables:
1. Add to `assets/css/base/variables.css`
2. Follow existing naming patterns
3. Group with related variables
4. Update this reference file