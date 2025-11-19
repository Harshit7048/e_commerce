# GitHub Pages Deployment Guide

## Repository Configuration
- Repository Name: `e_commerce`
- GitHub Pages URL: `https://harshit7048.github.io/e_commerce`

## Deployment Steps

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

   This will:
   - Build the project (via `predeploy` script)
   - Deploy the `dist` folder to the `gh-pages` branch
   - Make your site available at `https://harshit7048.github.io/e_commerce`

## Important Notes

1. **Base Path**: The `vite.config.js` has `base: "/e_commerce/"` which matches your repository name.

2. **HashRouter**: The app uses `HashRouter` which is perfect for GitHub Pages as it doesn't require server-side routing configuration.

3. **GitHub Pages Settings**: 
   - Go to your repository settings
   - Navigate to "Pages" section
   - Source should be set to "Deploy from a branch"
   - Branch should be `gh-pages` with folder `/ (root)`

4. **After Deployment**:
   - Wait a few minutes for GitHub Pages to update
   - Visit: `https://harshit7048.github.io/e_commerce`
   - Note: The first load might take a moment

## Troubleshooting

If the site doesn't load:
1. Check that the `gh-pages` branch exists and has the `dist` contents
2. Verify GitHub Pages is enabled in repository settings
3. Check the base path matches your repository name exactly
4. Clear browser cache and try again



