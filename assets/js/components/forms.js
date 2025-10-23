import { validateEmail, validateRequired, showError, hideError } from '../utils/helpers.js';

export class FormHandler {
  constructor() {
    this.form = document.querySelector('#collaborate-form');
    this.init();
  }

  init() {
    if (this.form) {
      this.form.addEventListener('submit', this.handleSubmit.bind(this));
      
      // Add real-time validation
      const inputs = this.form.querySelectorAll('input[required], textarea[required]');
      inputs.forEach(input => {
        input.addEventListener('blur', () => this.validateField(input));
      });
    }
  }

  validateField(field) {
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
    }

    return isValid;
  }

  validateForm() {
    const inputs = this.form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });

    return isValid;
  }

  handleSubmit(e) {
    e.preventDefault();
    
    try {
      if (!this.validateForm()) {
        return;
      }

      const formData = new FormData(this.form);
      const contributions = formData.getAll('contribution');
      
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