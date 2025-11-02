/**
 * Team Page Manager
 * Handles team-specific functionality
 */

import { ErrorHandler } from './utils.js';

class TeamPageManager {
  constructor() {
    this.init();
  }

  private init(): void {
    try {
      this.bindTeamCards();
    } catch (error) {
      ErrorHandler.logError('TeamPageManager.init', error);
    }
  }

  private bindTeamCards(): void {
    try {
      const teamCards = document.querySelectorAll('.card--team');
      if (teamCards.length === 0) {
        return; // Silent return when no cards found
      }
      
      this.initializeTeamCards(teamCards);
    } catch (error) {
      ErrorHandler.logError('TeamPageManager.bindTeamCards', error);
    }
  }

  private initializeTeamCards(cards: NodeListOf<Element>): void {
    // Team-specific functionality can be added here in the future
    // Cards are ready for interaction
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new TeamPageManager();
});