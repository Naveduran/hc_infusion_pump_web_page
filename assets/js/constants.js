/**
 * Shared Constants
 * Centralized configuration for the application
 */
export const SELECTORS = {
    // Sources page
    SOURCES_TOPIC_HEADER: '.sources-topic__header',
    SOURCES_TOPIC: '.sources-topic',
    SOURCES_ARTICLE: '.sources-article',
    SOURCES_ARTICLE_ACTIONS: '.sources-article__actions',
    // Buttons
    COPY_BUTTON: '[data-action="copy-link"]',
    EXTERNAL_BUTTON: '[data-action="external-redirect"]',
    // Research page
    EXPANDABLE_TRIGGER: '[data-action="toggle-expandable"]'
};
export const CSS_CLASSES = {
    // Button states
    BTN_LOADING: 'btn--loading',
    BTN_SUCCESS: 'btn--success',
    BTN_ERROR: 'btn--error',
    // Expanded states
    SOURCES_TOPIC_EXPANDED: 'sources-topic--expanded',
    SOURCES_ARTICLE_EXPANDED: 'sources-article--expanded'
};
export const TIMEOUTS = {
    BUTTON_FEEDBACK: 2000,
    EXTERNAL_LINK: 1000
};
export const MESSAGES = {
    ERRORS: {
        INIT_FAILED: 'Failed to initialize',
        BIND_FAILED: 'Failed to bind event handlers',
        COPY_FAILED: 'Copy button click failed',
        ELEMENT_NOT_FOUND: 'Required element not found'
    },
    WARNINGS: {
        NO_TARGET: 'No target specified',
        NO_URL: 'No URL provided',
        ELEMENT_MISSING: 'Element not found'
    },
    SUCCESS: {
        COPY_SUCCESS: 'URL copied to clipboard successfully',
        LINK_OPENED: 'External link opened successfully'
    }
};
