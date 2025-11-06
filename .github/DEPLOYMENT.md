# Deployment Guide

**Branch protection settings: (Settings → Branches):**
   - **Main branch:** Require PR + 1 approval + status checks
   - **Test branch:** Require status checks only

## Deployment Flow
```
feature-branch → test → main
```

- **Test:** `https://naveduran.github.io/hc_infusion_pump_web_page/test/`
- **Production:** `https://naveduran.github.io/hc_infusion_pump_web_page/`

## How It Works

- Push to `test` → deploys to test URL
- PR from `test` to `main` → requires approval + successful test deployment
- Merge to `main` → deploys to production URL

Single workflow file (`.github/workflows/deploy.yml`) handles both branches automatically.