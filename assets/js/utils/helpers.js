export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

export const showError = (element, message) => {
  const errorElement = element.parentNode.querySelector('.error-message');
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }
};

export const hideError = (element) => {
  const errorElement = element.parentNode.querySelector('.error-message');
  if (errorElement) {
    errorElement.style.display = 'none';
  }
};

export const smoothScroll = (target) => {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};