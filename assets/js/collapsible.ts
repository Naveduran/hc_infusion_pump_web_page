/**
 * Collapsible Components
 * Handles collapsible headers and research items
 */

interface CollapsibleElement extends HTMLElement {
  dataset: DOMStringMap & {
    target?: string;
  };
}

class CollapsibleManager {
  constructor() {
    this.init();
  }

  private init(): void {
    this.bindCollapsibleHeaders();
    this.bindResearchTitles();
  }

  private bindCollapsibleHeaders(): void {
    const headers = document.querySelectorAll<CollapsibleElement>('.collapsible-header');
    headers.forEach(header => {
      header.addEventListener('click', () => {
        this.toggleCollapsibleContent(header);
      });
    });
  }

  private bindResearchTitles(): void {
    const researchTitles = document.querySelectorAll<HTMLElement>('.research-title');
    researchTitles.forEach(title => {
      title.addEventListener('click', () => {
        this.toggleResearchDetails(title);
      });
    });
  }

  private toggleCollapsibleContent(header: CollapsibleElement): void {
    const targetId = header.dataset.target;
    if (!targetId) return;

    const content = document.getElementById(targetId);
    const icon = header.querySelector<HTMLElement>('.collapsible-icon');
    
    if (!content) return;

    const isHidden = content.style.display === 'none' || !content.style.display;
    
    content.style.display = isHidden ? 'block' : 'none';
    
    if (icon) {
      icon.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
    }
  }

  private toggleResearchDetails(title: HTMLElement): void {
    const details = title.nextElementSibling as HTMLElement;
    if (!details) return;

    const isHidden = details.style.display === 'none' || !details.style.display;
    details.style.display = isHidden ? 'block' : 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new CollapsibleManager();
});