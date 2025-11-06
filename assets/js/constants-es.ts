/**
 * Constantes Compartidas - Español
 * Configuración centralizada para la aplicación en español
 */

export const SELECTORS = {
  // Elementos colapsables
  COLLAPSIBLE_HEADER: '.collapsible-header',
  COLLAPSIBLE_ICON: '.collapsible-icon',
  RESEARCH_TITLE: '.research-title',
  
  // Página de fuentes
  SOURCES_TOPIC_HEADER: '.sources-topic__header',
  SOURCES_TOPIC: '.sources-topic',
  SOURCES_ARTICLE: '.sources-article',
  SOURCES_ARTICLE_ACTIONS: '.sources-article__actions',
  
  // Botones
  COPY_BUTTON: '[data-action="copy-link"]',
  EXTERNAL_BUTTON: '[data-action="external-redirect"]',
  
  // Página de investigación
  EXPANDABLE_TRIGGER: '[data-action="toggle-expandable"]'
} as const;

export const CSS_CLASSES = {
  // Estados de botones
  BTN_LOADING: 'btn--loading',
  BTN_SUCCESS: 'btn--success',
  BTN_ERROR: 'btn--error',
  
  // Estados expandidos
  SOURCES_TOPIC_EXPANDED: 'sources-topic--expanded',
  SOURCES_ARTICLE_EXPANDED: 'sources-article--expanded'
} as const;

export const TIMEOUTS = {
  BUTTON_FEEDBACK: 2000,
  EXTERNAL_LINK: 1000
} as const;

export const MESSAGES = {
  ERRORS: {
    INIT_FAILED: 'Error al inicializar',
    BIND_FAILED: 'Error al vincular manejadores de eventos',
    COPY_FAILED: 'Error al hacer clic en el botón de copiar',
    ELEMENT_NOT_FOUND: 'Elemento requerido no encontrado'
  },
  WARNINGS: {
    NO_TARGET: 'No se especificó objetivo',
    NO_URL: 'No se proporcionó URL',
    ELEMENT_MISSING: 'Elemento no encontrado'
  },
  SUCCESS: {
    COPY_SUCCESS: 'URL copiada al portapapeles exitosamente',
    LINK_OPENED: 'Enlace externo abierto exitosamente'
  }
} as const;