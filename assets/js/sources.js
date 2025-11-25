/**
 * Sources Page Manager
 * Handles topic and article collapsible functionality
 */
import { SELECTORS, CSS_CLASSES, MESSAGES } from './constants.js';
import { ErrorHandler } from './utils.js';
class SourcesPageManager {
    constructor() {
        this.init();
    }
    init() {
        try {
            this.bindTopicHeaders();
            this.bindArticleCards();
        }
        catch (error) {
            ErrorHandler.logError('SourcesPageManager.init', error);
        }
    }
    bindTopicHeaders() {
        try {
            const topicHeaders = document.querySelectorAll(SELECTORS.SOURCES_TOPIC_HEADER);
            if (topicHeaders.length === 0) {
                ErrorHandler.logWarning('SourcesPageManager.bindTopicHeaders', 'No topic headers found');
                return;
            }
            topicHeaders.forEach(header => {
                header.addEventListener('click', this.handleTopicToggle.bind(this));
            });
        }
        catch (error) {
            ErrorHandler.logError('SourcesPageManager.bindTopicHeaders', error);
        }
    }
    bindArticleCards() {
        try {
            const articleCards = document.querySelectorAll(SELECTORS.SOURCES_ARTICLE);
            if (articleCards.length === 0) {
                ErrorHandler.logWarning('SourcesPageManager.bindArticleCards', 'No article cards found');
                return;
            }
            articleCards.forEach(card => {
                card.addEventListener('click', this.handleArticleToggle.bind(this));
            });
        }
        catch (error) {
            ErrorHandler.logError('SourcesPageManager.bindArticleCards', error);
        }
    }
    handleTopicToggle(event) {
        if (!event.currentTarget) {
            ErrorHandler.logWarning('SourcesPageManager.handleTopicToggle', 'Event target is null');
            return;
        }
        const header = event.currentTarget;
        const topic = header.closest(SELECTORS.SOURCES_TOPIC);
        if (!topic || !topic.classList) {
            ErrorHandler.logWarning('SourcesPageManager.handleTopicToggle', 'Topic element or classList missing');
            return;
        }
        topic.classList.toggle(CSS_CLASSES.SOURCES_TOPIC_EXPANDED);
    }
    handleArticleToggle(event) {
        if (!event.target || !event.currentTarget) {
            ErrorHandler.logWarning('SourcesPageManager.handleArticleToggle', 'Event target is null');
            return;
        }
        const target = event.target;
        // Don't toggle if clicking on action buttons
        if (target.closest(SELECTORS.SOURCES_ARTICLE_ACTIONS)) {
            return;
        }
        const article = event.currentTarget;
        if (!article) {
            ErrorHandler.logWarning('SourcesPageManager.handleArticleToggle', MESSAGES.WARNINGS.ELEMENT_MISSING);
            return;
        }
        article.classList.toggle(CSS_CLASSES.SOURCES_ARTICLE_EXPANDED);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new SourcesPageManager();
});
