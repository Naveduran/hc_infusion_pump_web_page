/**
 * Button Event Handlers
 * Handles copy link and external redirect functionality
 */

interface ButtonElement extends HTMLElement {
  dataset: DOMStringMap & {
    url?: string;
    action?: string;
  };
}

class ButtonManager {
  constructor() {
    this.init();
  }

  private init(): void {
    this.bindCopyButton();
    this.bindExternalButtons();
  }

  private bindCopyButton(): void {
    const copyButton = document.querySelector<ButtonElement>('[data-action="copy-link"]');
    if (copyButton) {
      copyButton.addEventListener('click', async (event) => {
        await this.handleCopyClick(event.target as ButtonElement);
      });
    }
  }

  private bindExternalButtons(): void {
    const externalButtons = document.querySelectorAll<ButtonElement>('[data-action="external-redirect"]');
    externalButtons.forEach(button => {
      button.addEventListener('click', () => {
        this.handleExternalClick(button);
      });
    });
  }

  private async handleCopyClick(button: ButtonElement): Promise<void> {
    const url = button.dataset.url;
    if (!url) {
      console.error('No URL provided for copy action');
      return;
    }
    
    button.classList.add('btn--loading');
    button.setAttribute('aria-busy', 'true');
    
    try {
      await navigator.clipboard.writeText(url);
      button.classList.remove('btn--loading');
      button.classList.add('btn--success');
      
      setTimeout(() => {
        button.classList.remove('btn--success');
        button.setAttribute('aria-busy', 'false');
      }, 2000);
    } catch (error) {
      button.classList.remove('btn--loading');
      button.classList.add('btn--error');
      
      setTimeout(() => {
        button.classList.remove('btn--error');
        button.setAttribute('aria-busy', 'false');
      }, 2000);
    }
  }

  private handleExternalClick(button: ButtonElement): void {
    const url = button.dataset.url;
    if (!url) {
      console.error('No URL provided for external redirect');
      return;
    }
    
    button.classList.add('btn--loading');
    button.setAttribute('aria-busy', 'true');
    
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Failed to open external link:', error);
    }
    
    setTimeout(() => {
      button.classList.remove('btn--loading');
      button.setAttribute('aria-busy', 'false');
    }, 1000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ButtonManager();
});