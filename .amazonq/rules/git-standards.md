# Git Standards

## Commit Message Format (MANDATORY)
```
type(scope): description

[optional body]

[optional footer]
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples
```
feat(contact): add contact form validation
fix(buttons): resolve copy button accessibility issue
docs(readme): update installation instructions
style(css): improve button component spacing
refactor(utils): extract common DOM utilities
```

## Branch Naming
- `feature/description` - New features
- `fix/description` - Bug fixes
- `refactor/description` - Code improvements
- `docs/description` - Documentation updates

## File Organization in Commits
- GROUP related changes together
- SEPARATE feature additions from refactoring
- COMMIT CSS, HTML, and JS changes together for features
- KEEP dependency updates separate

## What to Commit Together
```
# Good - Complete feature
feat(newsletter): add newsletter signup component
- Add newsletter form HTML structure
- Implement form validation logic
- Style newsletter component
- Add form submission handling

# Bad - Incomplete feature
feat(newsletter): add newsletter form
- Add newsletter form HTML structure
```

## Commit Size Guidelines
- MAKE atomic commits (one logical change)
- AVOID large commits with multiple unrelated changes
- COMMIT working code (don't break builds)
- INCLUDE tests with feature commits

## Pre-commit Checklist
- [ ] Code follows established patterns
- [ ] All files use proper naming conventions
- [ ] No hardcoded values (use constants)
- [ ] Proper error handling implemented
- [ ] Documentation updated if needed
- [ ] No console.log statements left in code

## NEVER DO
- Commit broken code
- Mix unrelated changes in one commit
- Use vague commit messages ("fix stuff", "updates")
- Commit sensitive data or credentials
- Skip testing before committing