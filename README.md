# OpenCortisol Project Website

Website to collaboratively develop an open-source hydrocortisone pump.

## Instructions for developers

### Initial Setup

**Install Prerequisites**

- Node.js (v16 or higher)
- Git

**Clone and configure:**
   ```bash
   # Download repository
   git clone https://github.com/Naveduran/open_cortisol.git
   cd open_cortisol
   
   # Configure Git for cross-platform compatibility
   git config core.autocrlf false
   git config core.eol lf

   # Install dependencies
   npm install
   ```

### Build and Test Locally

- Run `git checkout test` to be able to propose changes in this webpage.

- Run `npm run build` to build the files
- Run `python -m http.server 8000 -d dist` to create a local server for development
- Check the page in  `http://localhost:8000`.
- Re-run `npm run build` to implement new changes.

- Use `git add [filename]`, `git commit -m "[message]"`, and `git push` to run test deploy on github pages.

### Deployment

- **Check production environment in**: `https://naveduran.github.io/open_cortisol/`
- **Check test environment in**: `https://naveduran.github.io/open_cortisol/test/`
