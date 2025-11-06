/**
 * Language Switcher
 * Handles language switching between English and Spanish pages
 */

import { ErrorHandler } from './utils.js';

class LanguageSwitcher {
  private readonly baseUrl = 'https://naveduran.github.io/open_cortisol';

  constructor() {
    this.init();
  }

  private init(): void {
    try {
      this.bindLanguageLinks();
    } catch (error) {
      ErrorHandler.logError('LanguageSwitcher init', error);
    }
  }

  private bindLanguageLinks(): void {
    try {
      const languageLinks = document.querySelectorAll<HTMLAnchorElement>('.nav__link--lang, .nav__mobile-link--lang');
      
      languageLinks.forEach(link => {
        link.addEventListener('click', this.handleLanguageSwitch.bind(this));
      });
    } catch (error) {
      ErrorHandler.logError('LanguageSwitcher bindLanguageLinks', error);
    }
  }

  private handleLanguageSwitch(event: Event): void {
    event.preventDefault();
    
    try {
      const currentPath = window.location.pathname;
      const currentPage = this.getCurrentPageName(currentPath);
      const isSpanishPage = currentPath.includes('/es/');
      
      const targetUrl = isSpanishPage 
        ? `${this.baseUrl}/${currentPage}` 
        : `${this.baseUrl}/es/${currentPage}`;
      
      window.location.href = targetUrl;
    } catch (error) {
      ErrorHandler.logError('LanguageSwitcher handleLanguageSwitch', error);
    }
  }

  private getCurrentPageName(path: string): string {
    const segments = path.split('/').filter(Boolean);
    const lastSegment = segments[segments.length - 1];
    
    if (!lastSegment || lastSegment === 'es') {
      return 'index.html';
    }
    
    return lastSegment.endsWith('.html') ? lastSegment : 'index.html';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new LanguageSwitcher();
});