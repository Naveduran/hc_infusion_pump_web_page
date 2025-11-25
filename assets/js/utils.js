/**
 * Utility Functions
 * Shared helper functions for DOM manipulation and common operations
 */
import { CSS_CLASSES, TIMEOUTS } from './constants.js';
export class DOMUtils {
    /**
     * Safely toggle element visibility between block and none
     * @param element - The HTML element to toggle
     */
    static toggleElementVisibility(element) {
        if (!element) {
            ErrorHandler.logWarning('DOMUtils.toggleElementVisibility', 'Element is null or undefined');
            return;
        }
        if (!element.style) {
            ErrorHandler.logWarning('DOMUtils.toggleElementVisibility', 'Element has no style property');
            return;
        }
        try {
            const isHidden = element.style.display === 'none' || !element.style.display;
            element.style.display = isHidden ? 'block' : 'none';
        }
        catch (error) {
            ErrorHandler.logError('DOMUtils.toggleElementVisibility', error);
        }
    }
    /**
     * Toggle icon rotation between 0deg and 180deg for collapsible elements
     * @param icon - The icon element to rotate (can be null)
     */
    static toggleIcon(icon) {
        if (!icon) {
            return; // Silent fail for optional icon
        }
        if (!icon.style) {
            ErrorHandler.logWarning('DOMUtils.toggleIcon', 'Icon has no style property');
            return;
        }
        try {
            const currentTransform = icon.style.transform || '';
            const isRotated = currentTransform.includes('rotate(180deg)');
            icon.style.transform = isRotated ? 'rotate(0deg)' : 'rotate(180deg)';
        }
        catch (error) {
            ErrorHandler.logError('DOMUtils.toggleIcon', error);
        }
    }
    /**
     * Add temporary CSS class with automatic removal after specified duration
     * @param element - The HTML element to add class to
     * @param className - The CSS class name to add
     * @param duration - Duration in milliseconds before removal (default: BUTTON_FEEDBACK)
     */
    static addTemporaryClass(element, className, duration = TIMEOUTS.BUTTON_FEEDBACK) {
        if (!element || !className) {
            ErrorHandler.logWarning('DOMUtils.addTemporaryClass', 'Invalid element or className');
            return;
        }
        try {
            element.classList.add(className);
            setTimeout(() => {
                try {
                    element.classList.remove(className);
                }
                catch (error) {
                    ErrorHandler.logError('DOMUtils.addTemporaryClass.timeout', error);
                }
            }, duration);
        }
        catch (error) {
            ErrorHandler.logError('DOMUtils.addTemporaryClass', error);
        }
    }
    /**
     * Set button loading state with appropriate ARIA attributes
     * @param button - The button element to modify
     * @param loading - Whether to set loading state (true) or remove it (false)
     */
    static setButtonLoading(button, loading) {
        if (!button) {
            ErrorHandler.logWarning('DOMUtils.setButtonLoading', 'Button element is null');
            return;
        }
        if (!button.classList || typeof button.setAttribute !== 'function') {
            ErrorHandler.logWarning('DOMUtils.setButtonLoading', 'Button missing required DOM methods');
            return;
        }
        try {
            if (loading) {
                button.classList.add(CSS_CLASSES.BTN_LOADING);
                button.setAttribute('aria-busy', 'true');
            }
            else {
                button.classList.remove(CSS_CLASSES.BTN_LOADING);
                button.setAttribute('aria-busy', 'false');
            }
        }
        catch (error) {
            ErrorHandler.logError('DOMUtils.setButtonLoading', error);
        }
    }
}
export class ErrorHandler {
    /**
     * Log error with context
     */
    static logError(context, error) {
        const sanitizedContext = String(context).replace(/[\r\n]/g, '');
        console.error('[ERROR]', sanitizedContext, error);
    }
    /**
     * Log warning with context
     */
    static logWarning(context, message) {
        const sanitizedContext = String(context).replace(/[\r\n]/g, '');
        const sanitizedMessage = String(message).replace(/[\r\n]/g, '');
        console.warn('[WARNING]', sanitizedContext, sanitizedMessage);
    }
    /**
     * Log success with context
     */
    static logSuccess(context, message) {
        const sanitizedContext = String(context).replace(/[\r\n]/g, '');
        const sanitizedMessage = String(message).replace(/[\r\n]/g, '');
        console.info('[SUCCESS]', sanitizedContext, sanitizedMessage);
    }
}
