# Anand Harikrishnan - Portfolio Website

A modern, responsive portfolio website showcasing my professional experience, projects, and technical skills. Built with HTML, CSS, and vanilla JavaScript, featuring a premium dark mode design with glassmorphism effects and smooth animations.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Mode**: Toggle between light and dark themes with localStorage persistence
- **Smooth Animations**: Intersection Observer API for scroll-triggered animations
- **Glassmorphism UI**: Modern glass-effect cards with backdrop blur
- **Interactive Elements**: Hover effects, parallax orbs, and smooth scrolling navigation
- **SEO Optimized**: Proper meta tags, semantic HTML, and heading hierarchy
- **Accessibility**: ARIA labels, keyboard navigation, and reduced motion support

## 🚀 Deployment to GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Create a new repository** on GitHub:
   - Go to [github.com](https://github.com) and sign in
   - Click the "+" icon in the top right and select "New repository"
   - Name it `portfolio` (or any name you prefer)
   - Make it public
   - Don't initialize with README (we already have files)

2. **Upload your files**:
   - Click "uploading an existing file"
   - Drag and drop all files (`index.html`, `styles.css`, `script.js`, `README.md`)
   - Commit the changes

3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll down to "Pages" section
   - Under "Source", select "main" branch
   - Click Save
   - Your site will be live at `https://yourusername.github.io/portfolio/`

### Method 2: Using Git Command Line

1. **Initialize Git repository** (in the Portfolio folder):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   ```

2. **Connect to GitHub**:
   ```bash
   git remote add origin https://github.com/yourusername/portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Follow step 3 from Method 1 above

## 🚀 Deployment to Vercel

Vercel is a great alternative for fast, automated deployments.

### Method 1: Via GitHub (Recommended)

1. **Push your code to GitHub** (follow the steps above).
2. **Sign in to Vercel**: Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
3. **Import Project**:
   - Click "Add New" -> "Project"
   - Find your `portfolio` repository and click "Import"
4. **Deploy**:
   - Vercel will automatically detect that it's a static site.
   - Click "Deploy".
5. **Auto-updates**: Every time you `git push` new changes to GitHub, Vercel will automatically rebuild and redeploy your site.

### Method 2: Via Vercel CLI (No GitHub needed)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```
2. **Deploy**:
   - Open a terminal in your project folder.
   - Run the command:
     ```bash
     vercel
     ```
   - Follow the prompts (login if needed).
3. **Production**: To deploy to your production URL, run:
   ```bash
   vercel --prod
   ```

### Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file with your domain name
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use your custom domain

## 💻 Local Development

To run the portfolio locally:

1. **Simple Method**: Just open `index.html` in your web browser

2. **Using a Local Server** (recommended for testing):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (install http-server globally first)
   npx http-server
   ```
   Then open `http://localhost:8000` in your browser

## 🛠️ Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript**: ES6+, Intersection Observer API
- **Google Fonts**: Inter font family

## 📝 Customization

### Updating Content

- **Personal Information**: Edit the text in `index.html`
- **Projects**: Add/modify project cards in the Projects section
- **Skills**: Update skill tags in the Skills section
- **Links**: Replace placeholder `#` links with actual URLs

### Styling

- **Colors**: Modify CSS custom properties in `:root` in `styles.css`
- **Fonts**: Change the Google Fonts import in `index.html`
- **Animations**: Adjust transition timings in CSS variables

### Adding New Sections

1. Add the HTML structure in `index.html`
2. Style it in `styles.css`
3. Add navigation link in the navbar
4. Update smooth scrolling in `script.js` if needed

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available for personal use.

## 📧 Contact

- **Email**: anandharikrishnan14@gmail.com
- **LinkedIn**: [linkedin.com/in/anandharikrishnan14](https://linkedin.com/in/anandharikrishnan14)
- **GitHub**: [github.com/anandharikrishnan14](https://github.com/anandharikrishnan14)

---

Built with ❤️ by Anand Harikrishnan
