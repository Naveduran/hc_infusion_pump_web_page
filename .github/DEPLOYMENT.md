# Deployment Guide

## Quick Setup

1. **Enable GitHub Pages:** Settings → Pages → Source: "GitHub Actions"
2. **Create test branch:** `git checkout -b test && git push -u origin test`
3. **Configure branch protection:** Settings → Branches
   - **Main:** Require PR + 1 approval + status checks (`build`, `deploy-main`)
   - **Test:** Require status checks (`build`, `deploy-test`)

## Deployment Flow

```
feature-branch → test → main
```

- **Test:** `https://naveduran.github.io/hc_infusion_pump_web_page/test/`
- **Production:** `https://naveduran.github.io/hc_infusion_pump_web_page/`

## How It Works

- Push to `test` → builds + deploys to test URL (gh-pages-test branch)
- Push to `main` → builds + deploys to production URL (github-pages environment)
- Workflow automatically handles both branches with separate jobs

Single workflow file handles everything: `.github/workflows/deploy.yml`