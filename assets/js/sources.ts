const SourcesPage = {
  init(): void {
    try {
      this.bindTopicHeaders();
      this.bindArticleCards();
    } catch (error) {
      console.error('Failed to initialize sources page:', error);
    }
  },

  bindTopicHeaders(): void {
    try {
      const topicHeaders = document.querySelectorAll('.sources-topic__header');
      topicHeaders.forEach(header => {
        header.addEventListener('click', this.handleTopicToggle.bind(this));
      });
    } catch (error) {
      console.error('Failed to bind topic headers:', error);
    }
  },

  bindArticleCards(): void {
    try {
      const articleCards = document.querySelectorAll('.sources-article');
      articleCards.forEach(card => {
        card.addEventListener('click', this.handleArticleToggle.bind(this));
      });
    } catch (error) {
      console.error('Failed to bind article cards:', error);
    }
  },

  handleTopicToggle(event: Event): void {
    const header = event.currentTarget as HTMLElement;
    const topic = header?.closest('.sources-topic');
    if (topic) {
      topic.classList.toggle('sources-topic--expanded');
    }
  },

  handleArticleToggle(event: Event): void {
    const target = event.target as HTMLElement;
    if (target?.closest('.sources-article__actions')) {
      return;
    }
    const article = event.currentTarget as HTMLElement;
    if (article) {
      article.classList.toggle('sources-article--expanded');
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  SourcesPage.init();
});