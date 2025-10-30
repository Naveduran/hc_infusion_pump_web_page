/**
 * Topics Component
 * Handles topic section expand/collapse functionality
 */

interface TopicSection {
  element: HTMLElement;
  isExpanded: boolean;
}

class TopicsManager {
  private topics: TopicSection[] = [];

  constructor() {
    this.init();
  }

  private init(): void {
    this.bindTopicHeaders();
  }

  private bindTopicHeaders(): void {
    const topicHeaders = document.querySelectorAll<HTMLElement>('.topic-header');
    
    topicHeaders.forEach(header => {
      const topicSection = header.closest<HTMLElement>('.topic-section');
      if (!topicSection) return;

      const topic: TopicSection = {
        element: topicSection,
        isExpanded: topicSection.classList.contains('expanded')
      };

      this.topics.push(topic);

      header.addEventListener('click', () => {
        this.toggleTopic(topic);
      });
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
    if (this.topics[index] && !this.topics[index].isExpanded) {
      this.toggleTopic(this.topics[index]);
    }
  }

  /**
   * Collapse a specific topic by index
   */
  public collapseTopic(index: number): void {
    if (this.topics[index] && this.topics[index].isExpanded) {
      this.toggleTopic(this.topics[index]);
    }
  }

  /**
   * Collapse all topics
   */
  public collapseAll(): void {
    this.topics.forEach(topic => {
      if (topic.isExpanded) {
        this.toggleTopic(topic);
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new TopicsManager();
});