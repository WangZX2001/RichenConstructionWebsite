# Richen Construction Website

A professional website for Richen Construction Company, a building facade specialist.

## 🚀 Deploy to GitHub Pages

### Important: GitHub Pages Requires a Public Repository
⚠️ Your repository "RichenConstructionWebsite" is currently **private**. GitHub Pages only works with:
- **Public repositories** (free)
- **Private repositories** (requires GitHub Pro, Team, or Enterprise)

**You need to make your repository public to use GitHub Pages on a free account.**

### Step 1: Make Repository Public
1. Go to your repository: `https://github.com/YOUR_USERNAME/RichenConstructionWebsite`
2. Click **Settings** (top menu)
3. Scroll to the bottom → **Danger Zone**
4. Click **Change repository visibility** → Select **Public**
5. Confirm the change

### Step 2: Enable GitHub Pages
1. In **Settings**, click **Pages** (left sidebar)
2. Under "Build and deployment":
   - Source: Select **GitHub Actions**

### Step 3: Push Your Changes
The `vite.config.ts` is already configured for your repository name. Simply push:
```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push
```

### Step 4: Access Your Website
After 2-3 minutes, your site will be live at:
```
https://YOUR_USERNAME.github.io/RichenConstructionWebsite/
```

## 🔄 Future Updates

Whenever you make changes:
```bash
git add .
git commit -m "Describe your changes"
git push
```
The site will automatically redeploy!

## 💻 Local Development

```bash
npm install
npm run dev
```

## 📦 Features

- **Multi-page routing**: Home, About, Projects, Services, Contact
- **Responsive design**: Works on all devices
- **Smooth animations**: Scroll-triggered fade-ins
- **Custom branding**: Richen Construction logo and colors
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS

---

**Need help?** Check the [GitHub Pages documentation](https://docs.github.com/en/pages)