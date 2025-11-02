# Branch Protection Configuration

## Required GitHub Repository Settings

### 1. Branch Protection Rules for `main`

Go to **Settings** → **Branches** → **Add rule** and configure:

**Branch name pattern:** `main`

**Protect matching branches:**
- ✅ Require a pull request before merging
  - ✅ Require approvals: `1`
  - ✅ Dismiss stale PR approvals when new commits are pushed
  - ✅ Require review from code owners (if CODEOWNERS file exists)
- ✅ Require status checks to pass before merging
  - ✅ Require branches to be up to date before merging
  - **Required status checks:**
    - `build-and-deploy` (from deploy.yml)
    - `validate-test-deployment` (from test-deployment.yml)
- ✅ Require conversation resolution before merging
- ✅ Restrict pushes that create files larger than 100MB
- ✅ Block force pushes
- ✅ Do not allow deletions

### 2. Branch Protection Rules for `test`

**Branch name pattern:** `test`

**Protect matching branches:**
- ✅ Require status checks to pass before merging
  - ✅ Require branches to be up to date before merging
  - **Required status checks:**
    - `build-and-deploy` (from deploy.yml)
- ✅ Block force pushes
- ✅ Do not allow deletions

### 3. Repository Settings

**Settings** → **General**:
- ✅ Allow merge commits
- ✅ Allow squash merging
- ✅ Allow rebase merging
- ✅ Always suggest updating pull request branches
- ✅ Automatically delete head branches

**Settings** → **Pages**:
- **Source:** GitHub Actions
- **Custom domain:** (if applicable)

## Workflow Summary

1. **Development Flow:**
   ```
   feature-branch → test → main
   ```

2. **Test Branch:**
   - Deploys to: `https://[username].github.io/[repo]/test/`
   - Automatic deployment on push
   - Protected from force pushes

3. **Main Branch:**
   - Deploys to: `https://[username].github.io/[repo]/`
   - Requires PR from test branch
   - Requires successful test deployment
   - Requires code review approval

4. **Pull Request Requirements:**
   - Must pass all status checks
   - Must have successful test deployment
   - Must be reviewed and approved
   - Must be up to date with target branch

## Setup Instructions

1. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Set Source to "GitHub Actions"

2. **Create test branch:**
   ```bash
   git checkout -b test
   git push -u origin test
   ```

3. **Configure branch protection rules** using the settings above

4. **Test the workflow:**
   - Make changes in a feature branch
   - Create PR to test branch
   - Verify test deployment works
   - Create PR from test to main
   - Verify all checks pass before merge

## Deployment URLs

- **Production (main):** `https://[username].github.io/[repo]/`
- **Testing (test):** `https://[username].github.io/[repo]/test/`