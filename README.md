# SAM - A Brotherhood for Fathers

A beautiful, mobile-responsive website for SAM, a community for intentional fathers. Designed to mirror the aesthetic of [joinhampton.com](https://joinhampton.com).

## 🚀 Live Demo

Deploy to GitHub Pages to see the live site.

## ✨ Features

- **Responsive Design**: Fully mobile-responsive, matching Hampton's mobile experience
- **Modern Typography**: Uses Playfair Display (serif) for headlines and DM Sans for body text
- **Hampton-Inspired Color Palette**: 
  - Dark teal primary: `rgb(3, 37, 40)`
  - Cream background: `rgb(241, 242, 239)`
  - Tan accent: `rgb(209, 191, 174)`
- **Smooth Animations**: Intersection Observer animations for scroll effects
- **FAQ Accordion**: Interactive expandable FAQ section
- **Mobile Menu**: Hamburger menu with smooth transitions

## 📁 Project Structure

```
sam/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # JavaScript for interactivity
├── assets/
│   └── favicon.svg     # Site favicon
└── README.md           # This file
```

## 🌐 Deploy to GitHub Pages

### Option 1: Using GitHub UI

1. Push this repository to GitHub
2. Go to **Settings** > **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select the **main** branch and **/ (root)** folder
5. Click **Save**
6. Your site will be live at `https://yourusername.github.io/sam/`

### Option 2: Using GitHub CLI

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - SAM website"

# Create repo and push (requires GitHub CLI)
gh repo create sam --public --push --source=.
```

Then enable GitHub Pages in the repository settings.

## 🎨 Design Details

This website mimics the joinhampton.com design with:

- Fixed header with navigation and CTA buttons
- Full-width hero section with large serif headline
- Alternating light/dark sections
- Card-based testimonials and features
- Step-by-step process grid
- Expandable FAQ section
- Multi-column footer

## 📱 Mobile Responsive

The site is fully responsive with:
- Hamburger menu on mobile
- Adjusted typography scales
- Stack layouts for cards and grids
- Touch-friendly tap targets

## 🛠 Customization

### Colors
Edit the CSS variables in `css/style.css`:

```css
:root {
  --color-dark-teal: rgb(3, 37, 40);
  --color-tan: rgb(209, 191, 174);
  --color-cream: rgb(241, 242, 239);
  /* ... */
}
```

### Content
Edit `index.html` to update:
- Headings and copy
- Testimonials
- FAQ items
- Navigation links
- Footer content

## 📄 License

MIT License - Feel free to use and modify for your own projects.

