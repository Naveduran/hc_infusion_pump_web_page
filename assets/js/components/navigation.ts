/**
 * Navigation component for mobile menu toggle functionality
 */
export class Navigation {
  private menuToggle: HTMLElement | null;
  private mobileMenu: HTMLElement | null;

  constructor() {
    this.menuToggle = document.querySelector('.nav__toggle');
    this.mobileMenu = document.querySelector('.nav__mobile');
    this.init();
  }

  /**
   * Initialize navigation event listeners
   */
  private init(): void {
    if (this.menuToggle && this.mobileMenu) {
      this.menuToggle.addEventListener('click', this.toggleMenu.bind(this));
      
      // Close menu when clicking outside
      document.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLElement;
        if (!target.closest('.nav')) {
          this.closeMenu();
        }
      });

      // Close menu on escape key
      document.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          this.closeMenu();
        }
      });
    }
  }

  /**
   * Toggle mobile menu visibility
   */
  private toggleMenu(): void {
    try {
      if (this.mobileMenu) {
        this.mobileMenu.classList.toggle('nav__mobile--active');
        
        // Update ARIA attributes for accessibility
        const isOpen = this.mobileMenu.classList.contains('nav__mobile--active');
        this.menuToggle?.setAttribute('aria-expanded', isOpen.toString());
      }
    } catch (error) {
      console.error('Error toggling menu:', error);
    }
  }

  /**
   * Close mobile menu
   */
  private closeMenu(): void {
    try {
      if (this.mobileMenu) {
        this.mobileMenu.classList.remove('nav__mobile--active');
        this.menuToggle?.setAttribute('aria-expanded', 'false');
      }
    } catch (error) {
      console.error('Error closing menu:', error);
    }
  }
}