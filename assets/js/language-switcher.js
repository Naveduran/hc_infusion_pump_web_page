/**
 * Language Switcher
 * Handles language switching between English and Spanish pages
 */
import { ErrorHandler } from './utils.js';
class LanguageSwitcher {
    constructor() {
        this.baseUrl = 'https://naveduran.github.io/open_cortisol';
        this.init();
    }
    init() {
        try {
            this.bindLanguageLinks();
        }
        catch (error) {
            ErrorHandler.logError('LanguageSwitcher init', error);
        }
    }
    bindLanguageLinks() {
        try {
            const languageLinks = document.querySelectorAll('.nav__link--lang, .nav__mobile-link--lang');
            languageLinks.forEach(link => {
                link.addEventListener('click', this.handleLanguageSwitch.bind(this));
            });
        }
        catch (error) {
            ErrorHandler.logError('LanguageSwitcher bindLanguageLinks', error);
        }
    }
    handleLanguageSwitch(event) {
        event.preventDefault();
        try {
            const currentPath = window.location.pathname;
            const currentPage = this.getCurrentPageName(currentPath);
            const isSpanishPage = currentPath.includes('/es/');
            const targetUrl = isSpanishPage
                ? `${this.baseUrl}/${currentPage}`
                : `${this.baseUrl}/es/${currentPage}`;
            window.location.href = targetUrl;
        }
        catch (error) {
            ErrorHandler.logError('LanguageSwitcher handleLanguageSwitch', error);
        }
    }
    getCurrentPageName(path) {
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
