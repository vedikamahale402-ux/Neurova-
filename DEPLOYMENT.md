# Deployment Guide

This guide explains how to deploy the StrokeAware platform to various hosting services.

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Vercel** offers free hosting for static sites and works perfectly with Vite.

#### Steps:

1. **Create account:**
   - Go to https://vercel.com
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

3. **Deploy:**
   ```bash
   # In your project folder
   vercel
   ```

4. **Follow prompts:**
   - Set up and deploy: Yes
   - Which scope: Your account
   - Link to existing project: No
   - Project name: strokeaware-education-platform
   - Directory: ./
   - Build command: `npm run build`
   - Output directory: dist

5. **Done!** Your site is now live at `https://your-project.vercel.app`

---

### Option 2: Netlify

**Netlify** is another excellent free hosting option.

#### Via Netlify CLI:

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build your project:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

4. **Follow prompts:**
   - Publish directory: `dist`

#### Via Netlify Drop:

1. Build your project: `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag the `dist` folder to the upload area
4. Done!

---

### Option 3: GitHub Pages

Host for free on GitHub Pages.

#### Steps:

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts:**
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.ts:**
   ```typescript
   export default defineConfig({
     base: '/strokeaware-education-platform/',
     // ... rest of config
   })
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to your repo settings
   - Pages section
   - Source: gh-pages branch
   - Save

---

### Option 4: Firebase Hosting

Google's Firebase offers free hosting.

#### Steps:

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login:**
   ```bash
   firebase login
   ```

3. **Initialize:**
   ```bash
   firebase init hosting
   ```

4. **Configure:**
   - Public directory: `dist`
   - Single-page app: Yes
   - GitHub auto-builds: No

5. **Build and deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

---

### Option 5: Render

**Render** provides free static site hosting.

#### Steps:

1. Go to https://render.com
2. Sign up and create a new Static Site
3. Connect your Git repository
4. Configure:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
5. Deploy!

---

## 📝 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] `npm run build` works without errors
- [ ] All images load correctly
- [ ] All links work
- [ ] Responsive design works on mobile
- [ ] Browser console has no errors
- [ ] TypeScript compiles: `npm run lint`

---

## 🔧 Build Configuration

### Environment Variables

If you need environment variables:

1. Create `.env.production`:
   ```bash
   VITE_API_URL=https://api.yourdomain.com
   ```

2. In your hosting platform, add environment variables

3. Access in code:
   ```typescript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

### Custom Domain

Most platforms allow custom domains:

1. **Buy a domain** (e.g., from Namecheap, GoDaddy)
2. **Add domain in hosting settings**
3. **Update DNS records** as instructed by your host
4. **Wait for SSL certificate** (usually automatic)

---

## 📊 Performance Optimization

Before deploying, optimize:

### 1. Image Optimization

Consider using optimized image services:
- Cloudinary
- ImgIx
- Unsplash's built-in optimization (already used)

### 2. Code Splitting

Vite does this automatically, but verify:
```bash
npm run build
```

Check the `dist` folder - you should see chunked JavaScript files.

### 3. Compression

Most hosts enable gzip/brotli compression automatically.

### 4. Caching

Configure in your hosting platform:
- Static assets: 1 year
- HTML: No cache or short cache
- Images: 1 month

---

## 🚀 Continuous Deployment

Set up auto-deployment when you push code:

### Vercel/Netlify:
Automatically deploys on git push when connected to Git repo

### GitHub Actions:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 🔒 Security

### HTTPS

All recommended platforms provide free SSL certificates.

### Headers

Configure security headers in your hosting:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

---

## 📈 Monitoring

After deployment, monitor:

1. **Google Analytics** - Track visitors
2. **Sentry** - Error tracking
3. **Lighthouse** - Performance scores

---

## 🆘 Troubleshooting

### Build fails
- Check Node.js version matches (18.x+)
- Clear cache: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npm run lint`

### 404 on routes
- Configure SPA fallback to index.html
- For Netlify: Create `_redirects` in public folder:
  ```
  /*    /index.html   200
  ```

### Blank page after deployment
- Check browser console for errors
- Verify `base` in vite.config.ts is correct
- Check all import paths are correct

### Images not loading
- Use absolute URLs for external images
- Ensure images are in the `public` folder
- Check image URLs in browser DevTools

---

## 💰 Cost Comparison

| Platform | Free Tier | Bandwidth | Build Minutes |
|----------|-----------|-----------|---------------|
| Vercel | ✅ Yes | 100GB/mo | 6000 min/mo |
| Netlify | ✅ Yes | 100GB/mo | 300 min/mo |
| GitHub Pages | ✅ Yes | Unlimited* | N/A |
| Firebase | ✅ Yes | 10GB/mo | N/A |
| Render | ✅ Yes | 100GB/mo | 500 min/mo |

*Subject to fair use

---

## ✅ Recommended Setup for Production

1. **Host on Vercel** - Best developer experience
2. **Custom domain** - Professional appearance
3. **Analytics** - Google Analytics or Plausible
4. **Error tracking** - Sentry (free tier)
5. **CDN** - Automatic with Vercel/Netlify
6. **Monitoring** - UptimeRobot (free)

---

## 🎓 Learning Resources

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **Vite Deployment:** https://vitejs.dev/guide/static-deploy.html

---

**Ready to deploy?** Choose a platform and follow the steps above!

Your site will be live in minutes! 🚀
