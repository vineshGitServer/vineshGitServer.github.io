# 🚀 How to Deploy Your Website to GitHub Pages

## Step-by-Step Instructions

### Step 1: Create GitHub Repository (On GitHub Website)

1. Go to: https://github.com/new
2. **Repository name**: Type exactly: `Triplepower.github.io`
   - ⚠️ IMPORTANT: Must match your GitHub username + `.github.io`
3. Make it **Public** (required for free GitHub Pages)
4. **DO NOT** check "Add a README file"
5. Click **"Create repository"**

### Step 2: Open Terminal/Command Prompt (On Your Computer)

**On Windows:**
- Press `Windows Key + R`
- Type: `powershell` and press Enter
- OR search for "PowerShell" in Start menu

### Step 3: Navigate to Your Project Folder

In PowerShell, type these commands one by one:

```powershell
# First, find where your project is located
# If it's in Documents, type:
cd Documents

# Then navigate to your project folder
cd Triplepower.github.io

# Verify you're in the right place (should show your files)
dir
```

You should see: `index.html`, `styles.css`, `script.js`, etc.

### Step 4: Initialize Git and Push Code

**Copy and paste these commands ONE BY ONE** in PowerShell:

```powershell
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit"

# Set main branch
git branch -M main

# Connect to your GitHub repository (replace Triplepower with YOUR username)
git remote add origin https://github.com/Triplepower/Triplepower.github.io.git

# Push code to GitHub
git push -u origin main
```

**Note:** When you run `git push`, GitHub will ask for your username and password. 
- Username: Your GitHub username
- Password: Use a **Personal Access Token** (not your GitHub password)
  - How to create: https://github.com/settings/tokens
  - Click "Generate new token (classic)"
  - Give it a name, check "repo" permission, click "Generate"
  - Copy the token and use it as password

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/Triplepower/Triplepower.github.io`
2. Click **"Settings"** (top menu)
3. Scroll down to **"Pages"** (left sidebar)
4. Under **"Source"**, select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **"Save"**

### Step 6: Wait and Visit Your Site

- Wait 1-2 minutes for GitHub to build your site
- Visit: `https://triplepower.github.io`
- 🎉 Your website is live!

---

## ⚠️ Common Issues

**Problem:** "Repository not found"
- **Solution:** Make sure repository name is exactly `YourUsername.github.io`

**Problem:** "Authentication failed"
- **Solution:** Use Personal Access Token instead of password

**Problem:** "Branch main does not exist"
- **Solution:** Make sure you ran `git branch -M main` before pushing

**Problem:** Site shows 404
- **Solution:** Wait 2-3 minutes, GitHub Pages takes time to deploy

---

## 📝 Quick Reference

**Where to run commands:** PowerShell/Command Prompt on your computer (NOT on GitHub)

**Where to create repository:** GitHub website (github.com)

**Where to enable Pages:** Repository Settings → Pages (on GitHub website)

