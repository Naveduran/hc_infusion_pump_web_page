/**
 * Button Page Manager
 * Handles copy link and external redirect functionality
 */

import { SELECTORS, CSS_CLASSES, TIMEOUTS, MESSAGES } from './constants.js';
import { DOMUtils, ErrorHandler } from './utils.js';

interface ActionButtonElement extends HTMLElement {
  dataset: DOMStringMap & {
    url?: string;
    action?: string;
  };
}

class ButtonPageManager {
  constructor() {
    this.init();
  }

  private init(): void {
    try {
      this.bindCopyButtons();
      this.bindExternalButtons();
    } catch (error) {
      ErrorHandler.logError('ButtonPageManager.init', error);
    }
  }

  private bindCopyButtons(): void {
    try {
      const copyButton = document.querySelector<ActionButtonElement>(SELECTORS.COPY_BUTTON);
      if (!copyButton) {
        ErrorHandler.logWarning('ButtonPageManager.bindCopyButtons', 'No copy button found');
        return;
      }
      
      copyButton.addEventListener('click', this.createCopyClickHandler());
    } catch (error) {
      ErrorHandler.logError('ButtonPageManager.bindCopyButtons', error);
    }
  }

  private bindExternalButtons(): void {
    try {
      const externalButtons = document.querySelectorAll<ActionButtonElement>(SELECTORS.EXTERNAL_BUTTON);
      if (externalButtons.length === 0) {
        ErrorHandler.logWarning('ButtonPageManager.bindExternalButtons', 'No external buttons found');
        return;
      }
      
      externalButtons.forEach(button => {
        button.addEventListener('click', this.createExternalClickHandler());
      });
    } catch (error) {
      ErrorHandler.logError('ButtonPageManager.bindExternalButtons', error);
    }
  }

  private async handleCopyClick(button: ActionButtonElement): Promise<void> {
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
    } catch (error) {
      ErrorHandler.logError('ButtonPageManager copy', error);
      
      DOMUtils.setButtonLoading(button, false);
      DOMUtils.addTemporaryClass(button, CSS_CLASSES.BTN_ERROR, TIMEOUTS.BUTTON_FEEDBACK);
    }
  }

  private createCopyClickHandler() {
    return async (event: Event) => {
      try {
        const target = event.currentTarget as ActionButtonElement;
        if (!target) {
          ErrorHandler.logWarning('ButtonPageManager.copyClickHandler', 'Event target is null');
          return;
        }
        await this.handleCopyClick(target);
      } catch (error) {
        ErrorHandler.logError('ButtonPageManager.copyClickHandler', error);
      }
    };
  }

  private createExternalClickHandler() {
    return (event: Event) => {
      try {
        const target = event.currentTarget as ActionButtonElement;
        if (!target) {
          ErrorHandler.logWarning('ButtonPageManager.externalClickHandler', 'Event target is null');
          return;
        }
        this.handleExternalClick(target);
      } catch (error) {
        ErrorHandler.logError('ButtonPageManager.externalClickHandler', error);
      }
    };
  }

  private handleExternalClick(button: ActionButtonElement): void {
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
    } catch (error) {
      ErrorHandler.logError('ButtonPageManager external link', error);
      DOMUtils.addTemporaryClass(button, CSS_CLASSES.BTN_ERROR, TIMEOUTS.BUTTON_FEEDBACK);
    }
    
    setTimeout(() => {
      try {
        DOMUtils.setButtonLoading(button, false);
      } catch (error) {
        ErrorHandler.logError('ButtonPageManager.handleExternalClick.timeout', error);
      }
    }, TIMEOUTS.EXTERNAL_LINK);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ButtonPageManager();
});