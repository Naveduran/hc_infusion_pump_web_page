import { validateEmail, validateRequired, showError, hideError } from '../utils/helpers.js';

/**
 * Form handler for collaboration form with validation
 */
export class FormHandler {
  private form: HTMLFormElement | null;

  constructor() {
    this.form = document.querySelector('#collaborate-form');
    this.init();
  }

  /**
   * Initialize form event listeners
   */
  private init(): void {
    if (this.form) {
      this.form.addEventListener('submit', this.handleSubmit.bind(this));
      
      // Add real-time validation
      const inputs = this.form.querySelectorAll('input[required], textarea[required]') as NodeListOf<HTMLInputElement | HTMLTextAreaElement>;
      inputs.forEach(input => {
        input.addEventListener('blur', () => this.validateField(input));
        input.addEventListener('input', () => this.clearFieldError(input));
      });
    }
  }

  /**
   * Validate individual form field
   * @param field - Form input element to validate
   * @returns True if field is valid
   */
  private validateField(field: HTMLInputElement | HTMLTextAreaElement): boolean {
    const value = field.value.trim();
    let isValid = true;
    let message = '';

    hideError(field);

    if (field.hasAttribute('required') && !validateRequired(value)) {
      isValid = false;
      message = 'This field is required';
    } else if (field.type === 'email' && value && !validateEmail(value)) {
      isValid = false;
      message = 'Please enter a valid email address';
    }

    if (!isValid) {
      showError(field, message);
      field.setAttribute('aria-invalid', 'true');
    } else {
      field.setAttribute('aria-invalid', 'false');
    }

    return isValid;
  }

  /**
   * Clear error message for field
   * @param field - Form input element
   */
  private clearFieldError(field: HTMLInputElement | HTMLTextAreaElement): void {
    hideError(field);
    field.setAttribute('aria-invalid', 'false');
  }

  /**
   * Validate entire form
   * @returns True if all fields are valid
   */
  private validateForm(): boolean {
    if (!this.form) return false;
    
    const inputs = this.form.querySelectorAll('input[required], textarea[required]') as NodeListOf<HTMLInputElement | HTMLTextAreaElement>;
    let isValid = true;

    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });

    return isValid;
  }

  /**
   * Handle form submission
   * @param e - Form submit event
   */
  private handleSubmit(e: Event): void {
    e.preventDefault();
    
    try {
      if (!this.validateForm()) {
        // Focus first invalid field
        const firstInvalid = this.form?.querySelector('[aria-invalid=\"true\"]') as HTMLElement;
        firstInvalid?.focus();
        return;
      }

      if (!this.form) return;

      const formData = new FormData(this.form);
      const contributions = formData.getAll('contribution') as string[];
      
      const emailBody = `
New Collaboration Request:

Name: ${formData.get('name')}
Email: ${formData.get('email')}
Profession: ${formData.get('profession')}
Experience: ${formData.get('experience')}
Contributions: ${contributions.join(', ')}
Availability: ${formData.get('availability')}
Location: ${formData.get('location')}
Additional Info: ${formData.get('additional-info')}
`;
      
      const mailtoLink = `mailto:nverad@unal.edu.co?subject=OpenCortisol Collaboration Request&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  }
}