import { validateEmail, validateRequired, showError, hideError } from '../utils/helpers.js';

/**
 * Form handler for collaboration form with validation and CSRF protection
 */
export class FormHandler {
  private form: HTMLFormElement | null;
  private csrfToken: string;
  private formLoadTime: number;
  private readonly SUBMISSION_LIMIT = 3;
  private readonly MIN_SUBMISSION_INTERVAL = 60000; // 1 minute
  private readonly STORAGE_KEY = 'form_submissions';

  constructor() {
    this.form = document.querySelector('#collaborate-form');
    this.csrfToken = this.generateCSRFToken();
    this.formLoadTime = Date.now();
    this.init();
  }

  /**
   * Initialize form event listeners and CSRF protection
   */
  private init(): void {
    if (this.form) {
      this.setupCSRFProtection();
      this.form.addEventListener('submit', this.handleSubmit.bind(this));
      
      // Add real-time validation
      const inputs = this.form.querySelectorAll('input[required], textarea[required]') as NodeListOf<HTMLInputElement | HTMLTextAreaElement>;
      inputs.forEach(input => {
        input.addEventListener('blur', () => this.validateField(input));
        input.addEventListener('input', () => this.clearFieldError(input));
      });
      
      // Enable submit button after minimum time
      setTimeout(() => {
        const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement;
        if (submitBtn) submitBtn.disabled = false;
      }, 3000);
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
   * Generate CSRF token for static site protection
   */
  private generateCSRFToken(): string {
    const timestamp = Date.now().toString();
    const random = Math.random().toString(36).substring(2);
    const origin = window.location.origin;
    return btoa(`${timestamp}-${random}-${origin}`);
  }

  /**
   * Setup CSRF protection fields
   */
  private setupCSRFProtection(): void {
    if (!this.form) return;
    
    const csrfInput = this.form.querySelector('#csrf-token') as HTMLInputElement;
    const originInput = this.form.querySelector('input[name="_form_origin"]') as HTMLInputElement;
    const timestampInput = this.form.querySelector('input[name="_timestamp"]') as HTMLInputElement;
    
    if (csrfInput) csrfInput.value = this.csrfToken;
    if (originInput) originInput.value = window.location.origin;
    if (timestampInput) timestampInput.value = this.formLoadTime.toString();
  }

  /**
   * Validate CSRF protection
   */
  private validateCSRF(): boolean {
    const timeSinceLoad = Date.now() - this.formLoadTime;
    const minTime = 3000; // 3 seconds minimum
    const maxTime = 1800000; // 30 minutes maximum
    
    if (timeSinceLoad < minTime) {
      alert('Please wait a moment before submitting.');
      return false;
    }
    
    if (timeSinceLoad > maxTime) {
      alert('Form session expired. Please refresh the page.');
      return false;
    }
    
    return true;
  }

  /**
   * Check honeypot field for spam
   */
  private validateHoneypot(): boolean {
    if (!this.form) return false;
    
    const honeypot = this.form.querySelector('input[name="website"]') as HTMLInputElement;
    if (honeypot && honeypot.value.trim() !== '') {
      // Bot detected - silently reject
      console.log('Spam detected via honeypot');
      return false;
    }
    
    return true;
  }

  /**
   * Check submission rate limits
   */
  private validateRateLimit(): boolean {
    const now = Date.now();
    const submissions = this.getSubmissionHistory();
    
    // Clean old submissions (older than 24 hours)
    const dayAgo = now - (24 * 60 * 60 * 1000);
    const recentSubmissions = submissions.filter(time => time > dayAgo);
    
    // Check submission count limit
    if (recentSubmissions.length >= this.SUBMISSION_LIMIT) {
      alert('Too many submissions. Please try again later.');
      return false;
    }
    
    // Check minimum interval between submissions
    const lastSubmission = Math.max(...recentSubmissions, 0);
    if (now - lastSubmission < this.MIN_SUBMISSION_INTERVAL) {
      alert('Please wait before submitting again.');
      return false;
    }
    
    return true;
  }

  /**
   * Get submission history from localStorage
   */
  private getSubmissionHistory(): number[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  /**
   * Record new submission timestamp
   */
  private recordSubmission(): void {
    try {
      const submissions = this.getSubmissionHistory();
      submissions.push(Date.now());
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(submissions));
    } catch {
      // localStorage not available, continue anyway
    }
  }

  /**
   * Handle form submission
   * @param e - Form submit event
   */
  private handleSubmit(e: Event): void {
    e.preventDefault();
    
    try {
      // Spam protection validations
      if (!this.validateHoneypot()) {
        return; // Silently reject spam
      }
      
      if (!this.validateCSRF()) {
        return;
      }
      
      if (!this.validateRateLimit()) {
        return;
      }
      
      if (!this.validateForm()) {
        // Focus first invalid field
        const firstInvalid = this.form?.querySelector('[aria-invalid=\"true\"]') as HTMLElement;
        firstInvalid?.focus();
        return;
      }

      if (!this.form) return;

      // Record submission for rate limiting
      this.recordSubmission();
      
      // Submit to Formspree
      const formData = new FormData(this.form);
      
      fetch(this.form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          alert('Thank you! Your collaboration request has been sent.');
          this.form?.reset();
        } else {
          throw new Error('Network response was not ok');
        }
      }).catch(() => {
        alert('There was an error submitting the form. Please try again.');
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  }
}