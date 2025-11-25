/**
 * Mystory Page Manager
 * Handles expandable sections functionality
 */
import { SELECTORS } from './constants.js';
import { ErrorHandler } from './utils.js';
class MystoryPageManager {
    constructor() {
        this.init();
    }
    init() {
        try {
            this.bindExpandableTriggers();
        }
        catch (error) {
            ErrorHandler.logError('MystoryPageManager init', error);
        }
    }
    bindExpandableTriggers() {
        try {
            const triggers = document.querySelectorAll(SELECTORS.EXPANDABLE_TRIGGER);
            if (triggers.length === 0) {
                ErrorHandler.logWarning('MystoryPageManager.bindExpandableTriggers', 'No expandable triggers found');
                return;
            }
            triggers.forEach(trigger => {
                trigger.addEventListener('click', this.handleExpandableToggle.bind(this));
            });
        }
        catch (error) {
            ErrorHandler.logError('MystoryPageManager.bindExpandableTriggers', error);
        }
    }
    handleExpandableToggle(event) {
        if (!event.currentTarget) {
            ErrorHandler.logWarning('MystoryPageManager.handleExpandableToggle', 'Event target is null');
            return;
        }
        const trigger = event.currentTarget;
        if (!trigger.nextElementSibling) {
            ErrorHandler.logWarning('MystoryPageManager.handleExpandableToggle', 'No content element found');
            return;
        }
        const content = trigger.nextElementSibling;
        const icon = trigger.querySelector('.expandable__icon');
        if (!content.classList) {
            ErrorHandler.logWarning('MystoryPageManager.handleExpandableToggle', 'Content element missing classList');
            return;
        }
        try {
            content.classList.toggle('expanded');
            if (icon && icon.classList) {
                icon.classList.toggle('rotated');
            }
        }
        catch (error) {
            ErrorHandler.logError('MystoryPageManager.handleExpandableToggle', error);
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new MystoryPageManager();
});
