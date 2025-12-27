# Triplepower.github.io

A beautiful, modern website inspired by Apple's design language, hosted on GitHub Pages.

## 🚀 Live Site

Visit: https://triplepower.github.io

## 📁 Project Structure

```
Triplepower.github.io/
├── index.html      # Main HTML file
├── styles.css      # All CSS styles
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## 🛠️ Setup & Deployment

### Local Development

1. Clone this repository:
```bash
git clone https://github.com/Triplepower/Triplepower.github.io.git
cd Triplepower.github.io
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

3. Visit `http://localhost:8000` in your browser

### Deploy to GitHub Pages

1. **Create a new repository** on GitHub named `Triplepower.github.io`
   - The repository name must match your GitHub username + `.github.io`

2. **Push your code** to the repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Triplepower/Triplepower.github.io.git
git push -u origin main
```

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Your site will be live** at: `https://triplepower.github.io`

## 🎨 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Inspired by Apple's clean design language
- **Smooth Animations**: Fade-in effects and hover interactions
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Fast Loading**: Optimized CSS and JavaScript
- **SEO Friendly**: Semantic HTML structure

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🔧 Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #0071e3;
    --text-primary: #1d1d1f;
    --text-secondary: #86868b;
    /* ... */
}
```

### Content
Edit `index.html` to update:
- Navigation links
- Hero section text
- Cards and content sections
- Footer information

## 📝 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this repository and customize it for your own use!

