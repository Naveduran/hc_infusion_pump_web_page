// Button event handlers
document.addEventListener('DOMContentLoaded', function() {
  // Copy link functionality
  const copyButton = document.querySelector('[data-action="copy-link"]');
  if (copyButton) {
    copyButton.addEventListener('click', async function() {
      const url = this.dataset.url;
      if (!url) {
        console.error('No URL provided for copy action');
        return;
      }
      
      this.classList.add('btn--loading');
      this.setAttribute('aria-busy', 'true');
      
      try {
        await navigator.clipboard.writeText(url);
        this.classList.remove('btn--loading');
        this.classList.add('btn--success');
        
        setTimeout(() => {
          this.classList.remove('btn--success');
          this.setAttribute('aria-busy', 'false');
        }, 2000);
      } catch (error) {
        this.classList.remove('btn--loading');
        this.classList.add('btn--error');
        
        setTimeout(() => {
          this.classList.remove('btn--error');
          this.setAttribute('aria-busy', 'false');
        }, 2000);
      }
    });
  }

  // External redirect buttons with loading states
  const externalButtons = document.querySelectorAll('[data-action="external-redirect"]');
  externalButtons.forEach(button => {
    button.addEventListener('click', function() {
      const url = this.dataset.url;
      if (!url) {
        console.error('No URL provided for external redirect');
        return;
      }
      
      this.classList.add('btn--loading');
      this.setAttribute('aria-busy', 'true');
      
      // Open external link
      try {
        window.open(url, '_blank', 'noopener,noreferrer');
      } catch (error) {
        console.error('Failed to open external link:', error);
      }
      
      // Reset button after short delay
      setTimeout(() => {
        this.classList.remove('btn--loading');
        this.setAttribute('aria-busy', 'false');
      }, 1000);
    });
  });
});