import { Navigation } from './components/navigation.js';
import { FormHandler } from './components/forms.js';
import { smoothScroll } from './utils/helpers.js';

/**
 * Main application class
 */
class App {
  constructor() {
    this.init();
  }

  /**
   * Initialize application components
   */
  private init(): void {
    // Initialize components when DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
      try {
        new Navigation();
        new FormHandler();
        this.initSmoothScrolling();
        this.initLazyLoading();
      } catch (error) {
        console.error('Error initializing app:', error);
      }
    });
  }

  /**
   * Initialize smooth scrolling for anchor links
   */
  private initSmoothScrolling(): void {
    const anchorLinks = document.querySelectorAll('a[href^=\"#\"]') as NodeListOf<HTMLAnchorElement>;
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        if (target) {
          smoothScroll(target);
        }
      });
    });
  }

  /**
   * Initialize intersection observer for lazy loading
   */
  private initLazyLoading(): void {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      const lazyImages = document.querySelectorAll('img[data-src]') as NodeListOf<HTMLImageElement>;
      lazyImages.forEach(img => imageObserver.observe(img));
    }
  }
}

// Initialize the app
new App();