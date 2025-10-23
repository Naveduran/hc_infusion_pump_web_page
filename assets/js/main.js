import { Navigation } from './components/navigation.js';
import { FormHandler } from './components/forms.js';
import { smoothScroll } from './utils/helpers.js';

class App {
  constructor() {
    this.init();
  }

  init() {
    // Initialize components when DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
      try {
        new Navigation();
        new FormHandler();
        this.initSmoothScrolling();
      } catch (error) {
        console.error('Error initializing app:', error);
      }
    });
  }

  initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        smoothScroll(target);
      });
    });
  }
}

// Initialize the app
new App();