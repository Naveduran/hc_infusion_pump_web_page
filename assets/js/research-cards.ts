/**
 * Research Cards Component
 * Handles expandable research cards functionality
 */

interface ResearchCard {
  element: HTMLElement;
  isExpanded: boolean;
}

interface TopicSection {
  element: HTMLElement;
  isExpanded: boolean;
}

class ResearchCardsManager {
  private cards: ResearchCard[] = [];
  private topicSections: TopicSection[] = [];

  constructor() {
    this.init();
  }

  private init(): void {
    this.bindEvents();
  }

  private bindEvents(): void {
    this.bindCardEvents();
    this.bindTopicEvents();
  }

  private bindCardEvents(): void {
    const cardElements = document.querySelectorAll<HTMLElement>('.research-card');
    
    cardElements.forEach((cardElement) => {
      const card: ResearchCard = {
        element: cardElement,
        isExpanded: false
      };
      
      this.cards.push(card);
      
      cardElement.addEventListener('click', (event) => {
        this.handleCardClick(event, card);
      });
    });
  }

  private bindTopicEvents(): void {
    const topicElements = document.querySelectorAll<HTMLElement>('.topic-section');
    
    topicElements.forEach((topicElement) => {
      const topic: TopicSection = {
        element: topicElement,
        isExpanded: true // Start expanded by default
      };
      
      this.topicSections.push(topic);
      
      const header = topicElement.querySelector('.topic-header');
      if (header) {
        header.addEventListener('click', () => {
          this.toggleTopic(topic);
        });
      }
    });
  }

  private handleCardClick(event: Event, card: ResearchCard): void {
    // Prevent expansion when clicking on buttons
    const target = event.target as HTMLElement;
    if (target.closest('.research-card__buttons')) {
      return;
    }

    this.toggleCard(card);
  }

  private toggleCard(card: ResearchCard): void {
    card.isExpanded = !card.isExpanded;
    
    if (card.isExpanded) {
      card.element.classList.add('expanded');
    } else {
      card.element.classList.remove('expanded');
    }
  }

  /**
   * Expand a specific card by index
   */
  public expandCard(index: number): void {
    if (this.cards[index] && !this.cards[index].isExpanded) {
      this.toggleCard(this.cards[index]);
    }
  }

  /**
   * Collapse a specific card by index
   */
  public collapseCard(index: number): void {
    if (this.cards[index] && this.cards[index].isExpanded) {
      this.toggleCard(this.cards[index]);
    }
  }

  /**
   * Collapse all cards
   */
  public collapseAll(): void {
    this.cards.forEach(card => {
      if (card.isExpanded) {
        this.toggleCard(card);
      }
    });
  }

  private toggleTopic(topic: TopicSection): void {
    topic.isExpanded = !topic.isExpanded;
    
    if (topic.isExpanded) {
      topic.element.classList.add('expanded');
    } else {
      topic.element.classList.remove('expanded');
    }
  }

  /**
   * Expand a specific topic by index
   */
  public expandTopic(index: number): void {
    if (this.topicSections[index] && !this.topicSections[index].isExpanded) {
      this.toggleTopic(this.topicSections[index]);
    }
  }

  /**
   * Collapse a specific topic by index
   */
  public collapseTopic(index: number): void {
    if (this.topicSections[index] && this.topicSections[index].isExpanded) {
      this.toggleTopic(this.topicSections[index]);
    }
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ResearchCardsManager();
});