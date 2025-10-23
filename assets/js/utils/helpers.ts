/**
 * Validates email format using regex pattern
 * @param email - Email string to validate
 * @returns True if email format is valid
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates that a value is not empty or whitespace only
 * @param value - String value to validate
 * @returns True if value is not empty
 */
export const validateRequired = (value: string): boolean => {
  return value && value.trim().length > 0;
};

/**
 * Shows error message for form field
 * @param element - Form input element
 * @param message - Error message to display
 */
export const showError = (element: HTMLElement, message: string): void => {
  const errorElement = element.parentNode?.querySelector('.error-message') as HTMLElement;
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }
};

/**
 * Hides error message for form field
 * @param element - Form input element
 */
export const hideError = (element: HTMLElement): void => {
  const errorElement = element.parentNode?.querySelector('.error-message') as HTMLElement;
  if (errorElement) {
    errorElement.style.display = 'none';
  }
};

/**
 * Smoothly scrolls to target element
 * @param target - CSS selector for target element
 */
export const smoothScroll = (target: string): void => {
  const element = document.querySelector(target) as HTMLElement;
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};