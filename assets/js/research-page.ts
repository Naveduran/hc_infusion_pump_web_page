/**
 * Research Page Manager
 * Handles expandable sections functionality
 */

import { SELECTORS, CSS_CLASSES, MESSAGES } from './constants.js';
import { ErrorHandler } from './utils.js';

interface ExpandableElement extends HTMLElement {
  dataset: DOMStringMap;
}

class ResearchPageManager {
  constructor() {
    this.init();
  }

  private init(): void {
    try {
      this.bindExpandableTriggers();
    } catch (error) {
      ErrorHandler.logError('ResearchPageManager init', error);
    }
  }

  private bindExpandableTriggers(): void {
    try {
      const triggers = document.querySelectorAll<ExpandableElement>(SELECTORS.EXPANDABLE_TRIGGER);
      if (triggers.length === 0) {
        ErrorHandler.logWarning('ResearchPageManager.bindExpandableTriggers', 'No expandable triggers found');
        return;
      }
      
      triggers.forEach(trigger => {
        trigger.addEventListener('click', this.handleExpandableToggle.bind(this));
      });
    } catch (error) {
      ErrorHandler.logError('ResearchPageManager.bindExpandableTriggers', error);
    }
  }

  private handleExpandableToggle(event: Event): void {
    if (!event.currentTarget) {
      ErrorHandler.logWarning('ResearchPageManager.handleExpandableToggle', 'Event target is null');
      return;
    }
    
    const trigger = event.currentTarget as ExpandableElement;
    if (!trigger.nextElementSibling) {
      ErrorHandler.logWarning('ResearchPageManager.handleExpandableToggle', 'No content element found');
      return;
    }
    
    const content = trigger.nextElementSibling as HTMLElement;
    const icon = trigger.querySelector('.expandable__icon') as HTMLElement;
    
    if (!content.classList) {
      ErrorHandler.logWarning('ResearchPageManager.handleExpandableToggle', 'Content element missing classList');
      return;
    }

    try {
      content.classList.toggle('expanded');
      if (icon && icon.classList) {
        icon.classList.toggle('rotated');
      }
    } catch (error) {
      ErrorHandler.logError('ResearchPageManager.handleExpandableToggle', error);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ResearchPageManager();
});