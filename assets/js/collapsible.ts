/**
 * Collapsible Page Manager
 * Handles collapsible headers and research items
 */

import { SELECTORS, MESSAGES } from './constants.js';
import { DOMUtils, ErrorHandler } from './utils.js';

interface CollapsibleHeaderElement extends HTMLElement {
  dataset: DOMStringMap & {
    target?: string;
  };
}

class CollapsiblePageManager {
  constructor() {
    this.init();
  }

  private init(): void {
    try {
      this.bindHeaders();
      this.bindTitles();
    } catch (error) {
      ErrorHandler.logError('CollapsiblePageManager.init', error);
    }
  }

  private bindHeaders(): void {
    try {
      const headers = document.querySelectorAll<CollapsibleHeaderElement>(SELECTORS.COLLAPSIBLE_HEADER);
      if (headers.length === 0) {
        ErrorHandler.logWarning('CollapsiblePageManager.bindHeaders', 'No collapsible headers found');
        return;
      }
      
      headers.forEach(header => {
        header.addEventListener('click', this.handleHeaderClick.bind(this));
      });
    } catch (error) {
      ErrorHandler.logError('CollapsiblePageManager.bindHeaders', error);
    }
  }

  private bindTitles(): void {
    try {
      const titles = document.querySelectorAll<HTMLElement>(SELECTORS.RESEARCH_TITLE);
      if (titles.length === 0) {
        ErrorHandler.logWarning('CollapsiblePageManager.bindTitles', 'No research titles found');
        return;
      }
      
      titles.forEach(title => {
        title.addEventListener('click', this.handleTitleClick.bind(this));
      });
    } catch (error) {
      ErrorHandler.logError('CollapsiblePageManager.bindTitles', error);
    }
  }

  private handleHeaderClick(event: Event): void {
    if (!event.currentTarget) {
      ErrorHandler.logWarning('CollapsiblePageManager.handleHeaderClick', 'Event target is null');
      return;
    }
    const header = event.currentTarget as CollapsibleHeaderElement;
    this.toggleContent(header);
  }

  private handleTitleClick(event: Event): void {
    if (!event.currentTarget) {
      ErrorHandler.logWarning('CollapsiblePageManager.handleTitleClick', 'Event target is null');
      return;
    }
    const title = event.currentTarget as HTMLElement;
    this.toggleDetails(title);
  }

  private toggleContent(header: CollapsibleHeaderElement): void {
    const targetId = header.dataset.target;
    if (!targetId) {
      ErrorHandler.logWarning('CollapsiblePageManager.toggleContent', MESSAGES.WARNINGS.NO_TARGET);
      return;
    }

    const content = document.getElementById(targetId);
    if (!content) {
      ErrorHandler.logWarning('CollapsiblePageManager.toggleContent', MESSAGES.WARNINGS.ELEMENT_MISSING);
      return;
    }

    const icon = header.querySelector<HTMLElement>(SELECTORS.COLLAPSIBLE_ICON);
    
    DOMUtils.toggleElementVisibility(content);
    DOMUtils.toggleIcon(icon);
  }

  private toggleDetails(title: HTMLElement): void {
    if (!title || !title.nextElementSibling) {
      ErrorHandler.logWarning('CollapsiblePageManager.toggleDetails', 'Title or details element missing');
      return;
    }
    
    const details = title.nextElementSibling as HTMLElement;
    DOMUtils.toggleElementVisibility(details);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new CollapsiblePageManager();
});