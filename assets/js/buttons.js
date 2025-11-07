/**
 * Button Page Manager
 * Handles copy link and external redirect functionality
 */
import { SELECTORS, CSS_CLASSES, TIMEOUTS, MESSAGES } from './constants.js';
import { DOMUtils, ErrorHandler } from './utils.js';
class ButtonPageManager {
    constructor() {
        this.init();
    }
    init() {
        try {
            this.bindCopyButtons();
            this.bindExternalButtons();
        }
        catch (error) {
            ErrorHandler.logError('ButtonPageManager.init', error);
        }
    }
    bindCopyButtons() {
        try {
            const copyButton = document.querySelector(SELECTORS.COPY_BUTTON);
            if (!copyButton) {
                ErrorHandler.logWarning('ButtonPageManager.bindCopyButtons', 'No copy button found');
                return;
            }
            copyButton.addEventListener('click', this.createCopyClickHandler());
        }
        catch (error) {
            ErrorHandler.logError('ButtonPageManager.bindCopyButtons', error);
        }
    }
    bindExternalButtons() {
        try {
            const externalButtons = document.querySelectorAll(SELECTORS.EXTERNAL_BUTTON);
            if (externalButtons.length === 0) {
                ErrorHandler.logWarning('ButtonPageManager.bindExternalButtons', 'No external buttons found');
                return;
            }
            externalButtons.forEach(button => {
                button.addEventListener('click', this.createExternalClickHandler());
            });
        }
        catch (error) {
            ErrorHandler.logError('ButtonPageManager.bindExternalButtons', error);
        }
    }
    async handleCopyClick(button) {
        if (!button) {
            ErrorHandler.logWarning('ButtonPageManager.handleCopyClick', 'Button element is null');
            return;
        }
        const url = button.dataset.url;
        if (!url) {
            ErrorHandler.logWarning('ButtonPageManager.handleCopyClick', MESSAGES.WARNINGS.NO_URL);
            return;
        }
        DOMUtils.setButtonLoading(button, true);
        try {
            await navigator.clipboard.writeText(url);
            ErrorHandler.logSuccess('ButtonPageManager', MESSAGES.SUCCESS.COPY_SUCCESS);
            DOMUtils.setButtonLoading(button, false);
            DOMUtils.addTemporaryClass(button, CSS_CLASSES.BTN_SUCCESS, TIMEOUTS.BUTTON_FEEDBACK);
        }
        catch (error) {
            ErrorHandler.logError('ButtonPageManager copy', error);
            DOMUtils.setButtonLoading(button, false);
            DOMUtils.addTemporaryClass(button, CSS_CLASSES.BTN_ERROR, TIMEOUTS.BUTTON_FEEDBACK);
        }
    }
    createCopyClickHandler() {
        return async (event) => {
            try {
                const target = event.currentTarget;
                if (!target) {
                    ErrorHandler.logWarning('ButtonPageManager.copyClickHandler', 'Event target is null');
                    return;
                }
                await this.handleCopyClick(target);
            }
            catch (error) {
                ErrorHandler.logError('ButtonPageManager.copyClickHandler', error);
            }
        };
    }
    createExternalClickHandler() {
        return (event) => {
            try {
                const target = event.currentTarget;
                if (!target) {
                    ErrorHandler.logWarning('ButtonPageManager.externalClickHandler', 'Event target is null');
                    return;
                }
                this.handleExternalClick(target);
            }
            catch (error) {
                ErrorHandler.logError('ButtonPageManager.externalClickHandler', error);
            }
        };
    }
    handleExternalClick(button) {
        if (!button) {
            ErrorHandler.logWarning('ButtonPageManager.handleExternalClick', 'Button element is null');
            return;
        }
        const url = button.dataset.url;
        if (!url) {
            ErrorHandler.logWarning('ButtonPageManager.handleExternalClick', MESSAGES.WARNINGS.NO_URL);
            return;
        }
        DOMUtils.setButtonLoading(button, true);
        try {
            window.open(url, '_blank', 'noopener,noreferrer');
            ErrorHandler.logSuccess('ButtonPageManager', MESSAGES.SUCCESS.LINK_OPENED);
        }
        catch (error) {
            ErrorHandler.logError('ButtonPageManager external link', error);
            DOMUtils.addTemporaryClass(button, CSS_CLASSES.BTN_ERROR, TIMEOUTS.BUTTON_FEEDBACK);
        }
        setTimeout(() => {
            try {
                DOMUtils.setButtonLoading(button, false);
            }
            catch (error) {
                ErrorHandler.logError('ButtonPageManager.handleExternalClick.timeout', error);
            }
        }, TIMEOUTS.EXTERNAL_LINK);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new ButtonPageManager();
});
