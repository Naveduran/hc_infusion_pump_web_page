export class Navigation {
  constructor() {
    this.menuToggle = document.querySelector('.nav__toggle');
    this.mobileMenu = document.querySelector('.nav__mobile');
    this.init();
  }

  init() {
    console.log('Navigation init called');
    console.log('Menu toggle:', this.menuToggle);
    console.log('Mobile menu:', this.mobileMenu);
    
    if (this.menuToggle && this.mobileMenu) {
      this.menuToggle.addEventListener('click', this.toggleMenu.bind(this));
      
      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav')) {
          this.closeMenu();
        }
      });
    }
  }

  toggleMenu() {
    console.log('Toggle menu called');
    try {
      this.mobileMenu.classList.toggle('nav__mobile--active');
      console.log('Menu classes:', this.mobileMenu.className);
    } catch (error) {
      console.error('Error toggling menu:', error);
    }
  }

  closeMenu() {
    try {
      this.mobileMenu.classList.remove('nav__mobile--active');
    } catch (error) {
      console.error('Error closing menu:', error);
    }
  }
}