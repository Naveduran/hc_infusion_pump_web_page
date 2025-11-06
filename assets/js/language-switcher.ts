/**
 * Language Switcher
 * Handles language switching between English and Spanish pages
 */

import { ErrorHandler } from './utils.js';

class LanguageSwitcher {
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
      
      let targetUrl: string;
      
      if (isSpanishPage) {
        // Switch from Spanish to English
        targetUrl = currentPage === 'index.html' ? '../index.html' : `../${currentPage}`;
      } else {
        // Switch from English to Spanish
        targetUrl = `es/${currentPage}`;
      }
      
      window.location.href = targetUrl;
    } catch (error) {
      ErrorHandler.logError('LanguageSwitcher handleLanguageSwitch', error);
    }
  }

  private getCurrentPageName(path: string): string {
    // Extract page name from path
    const segments = path.split('/');
    const lastSegment = segments[segments.length - 1];
    
    // If empty or ends with /, it's index
    if (!lastSegment || lastSegment === '' || path.endsWith('/')) {
      return 'index.html';
    }
    
    // If it's a .html file, return it
    if (lastSegment.endsWith('.html')) {
      return lastSegment;
    }
    
    // Default to index
    return 'index.html';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new LanguageSwitcher();
});