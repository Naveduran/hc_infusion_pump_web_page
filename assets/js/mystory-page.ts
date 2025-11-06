/**
 * Mystory Page Manager
 * Handles expandable sections functionality
 */

import { SELECTORS, CSS_CLASSES, MESSAGES } from './constants.js';
import { ErrorHandler } from './utils.js';

interface ExpandableElement extends HTMLElement {
  dataset: DOMStringMap;
}

class MystoryPageManager {
  constructor() {
    this.init();
  }

  private init(): void {
    try {
      this.bindExpandableTriggers();
    } catch (error) {
      ErrorHandler.logError('MystoryPageManager init', error);
    }
  }

  private bindExpandableTriggers(): void {
    try {
      const triggers = document.querySelectorAll<ExpandableElement>(SELECTORS.EXPANDABLE_TRIGGER);
      if (triggers.length === 0) {
        ErrorHandler.logWarning('MystoryPageManager.bindExpandableTriggers', 'No expandable triggers found');
        return;
      }
      
      triggers.forEach(trigger => {
        trigger.addEventListener('click', this.handleExpandableToggle.bind(this));
      });
    } catch (error) {
      ErrorHandler.logError('MystoryPageManager.bindExpandableTriggers', error);
    }
  }

  private handleExpandableToggle(event: Event): void {
    if (!event.currentTarget) {
      ErrorHandler.logWarning('MystoryPageManager.handleExpandableToggle', 'Event target is null');
      return;
    }
    
    const trigger = event.currentTarget as ExpandableElement;
    if (!trigger.nextElementSibling) {
      ErrorHandler.logWarning('MystoryPageManager.handleExpandableToggle', 'No content element found');
      return;
    }
    
    const content = trigger.nextElementSibling as HTMLElement;
    const icon = trigger.querySelector('.expandable__icon') as HTMLElement;
    
    if (!content.classList) {
      ErrorHandler.logWarning('MystoryPageManager.handleExpandableToggle', 'Content element missing classList');
      return;
    }

    try {
      content.classList.toggle('expanded');
      if (icon && icon.classList) {
        icon.classList.toggle('rotated');
      }
    } catch (error) {
      ErrorHandler.logError('MystoryPageManager.handleExpandableToggle', error);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new MystoryPageManager();
});