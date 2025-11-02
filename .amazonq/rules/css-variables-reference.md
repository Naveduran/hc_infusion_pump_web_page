# CSS Variables Reference

## Available CSS Custom Properties

### Colors
```css
/* Primary Colors */
--primary-blue: #1e40af
--primary-orange: #ea580c
--primary-orange-dark: #c2410c
--secondary-yellow: #f59e0b

/* Status Colors */
--success-green: #16a34a
--danger-red: #dc2626
--warning-blue: #2563eb

/* Gray Scale */
--gray-50: #f8fafc    (lightest)
--gray-100: #f1f5f9
--gray-200: #e2e8f0
--gray-300: #cbd5e1
--gray-400: #94a3b8
--gray-500: #64748b   (medium)
--gray-600: #475569
--gray-700: #334155
--gray-800: #1e293b
--gray-900: #0f172a   (darkest)

/* State Colors */
--danger-light: #fee2e2
--danger-medium: #fca5a5
--info-light: #dbeafe
--info-medium: #93c5fd
--warning-light: #fef3c7
--warning-medium: #fbbf24
```

### Typography
```css
--font-family: 'Inter', sans-serif
--font-size-xs: 0.75rem
--font-size-sm: 0.875rem
--font-size-base: 1rem
--font-size-lg: 1.125rem
--font-size-xl: 1.25rem
--font-size-2xl: 1.5rem
--font-size-3xl: 1.875rem
--font-size-4xl: 2.25rem
```

### Spacing
```css
--space-1: 0.25rem    (4px)
--space-2: 0.5rem     (8px)
--space-3: 0.75rem    (12px)
--space-4: 1rem       (16px)
--space-5: 1.25rem    (20px)
--space-6: 1.5rem     (24px)
--space-8: 2rem       (32px)
--space-10: 2.5rem    (40px)
--space-12: 3rem      (48px)
--space-16: 4rem      (64px)
```

### Layout & Effects
```css
--container-max-width: 1200px
--border-radius: 8px
--border-radius-lg: 12px
--header-height: 80px
--avatar-size: 40px
--timeline-label-width: 60px

--shadow: 0 2px 10px rgba(0,0,0,0.1)
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
--shadow-lg: 0 4px 15px rgba(0,0,0,0.1)

--transition-fast: 0.15s
--transition-base: 0.2s
--transition-slow: 0.3s
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