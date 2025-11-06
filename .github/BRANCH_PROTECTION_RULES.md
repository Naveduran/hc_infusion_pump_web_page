# Branch Protection Rules

## Main Branch Protection

To protect the main branch and ensure quality deployments, configure the following branch protection rules in GitHub:

### Settings → Branches → Add Rule for `main`

1. **Restrict pushes that create files**
   - ✅ Require a pull request before merging
   - ✅ Require approvals: 1
   - ✅ Dismiss stale PR approvals when new commits are pushed

2. **Require status checks to pass before merging**
   - ✅ Require branches to be up to date before merging
   - ✅ Required status checks:
     - `check-test-deployment`
     - `build project`

3. **Restrict pushes**
   - ✅ Restrict pushes that create files
   - ✅ Do not allow bypassing the above settings

### Test Branch Workflow

1. **Development Flow:**
   ```
   feature-branch → test → main
   ```

2. **Test Branch Requirements:**
   - All changes must be tested in `test` branch first
   - Test deployment must be successful and accessible
   - Only after successful test deployment can PR to main be created

3. **Automatic Deployments:**
   - `test` branch → deploys to `/test/` subdirectory
   - `main` branch → deploys to root directory

### Manual Setup Required

Since branch protection rules cannot be automated via files, manually configure in GitHub:

1. Go to **Settings** → **Branches**
2. Click **Add rule**
3. Branch name pattern: `main`
4. Enable the settings listed above
5. Save the rule

This ensures:
- No direct pushes to main
- All changes go through test branch first
- Test deployment must be successful before main merge
- Quality control through required reviews