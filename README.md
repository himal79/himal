# Himal Thapa - Portfolio Website

A premium, modern, and fully responsive personal portfolio website for Himal Thapa, IT Engineer.

## Features

- **Modern Design**: Glassmorphism + Gradient design with neon glow effects
- **Fully Responsive**: Mobile-first design that works on all devices (phones, tablets, desktops)
- **Dark/Light Mode**: Toggle between dark and light themes with persistence in navbar
- **Bilingual Support**: Nepali-English language switcher with Nepali as default language
- **Centralized Asset Management**: All assets, data, and translations managed in single config.js file
- **Sticky Navbar**: Navbar remains at top while scrolling with smooth scroll effect
- **Hamburger Menu**: Responsive mobile menu that appears inside viewport with smooth expand/collapse
- **Initialization Animation**: Bilingual loading animation ("लोड हुँदैछ..." / "Loading...") on page load/refresh
- **Smooth Animations**: AOS scroll animations, parallax effects, and transitions
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, and structured data
- **Performance**: Optimized for fast loading with lazy loading and debouncing
- **Accessibility**: WCAG compliant with proper focus states and ARIA labels
- **Social Integration**: Deep linking for mobile apps (Facebook, Instagram, YouTube, TikTok, WhatsApp)
- **Auto-Update Logic**: robots.txt and sitemap.xml automatically update on design changes

## Sections

1. **Hero Section**: Professional introduction with typing animation and particle effects
2. **About Me**: Biography, experience, passion, and career goals
3. **Skills**: Animated skill cards with progress bars (Frontend, Backend, Database, Tools)
4. **Services**: Website Development, Web Design, UI/UX Design, Software Solutions, Technical Support, IT Consulting
5. **Portfolio**: Project showcase with filtering (Web, App, UI/UX, Software)
6. **Experience**: Vertical timeline with company details
7. **Education**: Academic background with achievements
8. **Certifications**: Professional certificate gallery with modal preview
9. **Statistics**: Animated counters for projects, clients, years, and technologies
10. **Testimonials**: Client reviews with auto-sliding carousel
11. **Blog**: Static blog cards with featured articles
12. **Contact**: Modern contact form with validation and social media links

## Technologies Used

- **HTML5**: Semantic markup with data-i18n attributes for bilingual support
- **CSS3**: Modern CSS with variables, flexbox, grid, and animations
- **JavaScript (Vanilla)**: No frameworks required
- **AOS Library**: Scroll animations
- **Font Awesome**: Icon library
- **Google Fonts**: Poppins and Space Grotesk

## Configuration

### Centralized Configuration (config.js)

All assets, data, and translations are managed in a single `config.js` file for easy maintenance:

```javascript
const CONFIG = {
    // Personal Information
    personal: {
        name: { ne: 'हिमाल थापा', en: 'Himal Thapa' },
        profession: { ne: 'आईटी इन्जिनियर', en: 'IT Engineer' },
        location: { ne: 'काठमाडौं, नेपाल', en: 'Kathmandu, Nepal' },
        email: 'hthapa208@gmail.com',
        phone: '+977 9851214522',
        whatsapp: '9779851214522'
    },
    
    // Social Media Links
    social: {
        facebook: 'https://facebook.com/thimal522',
        youtube: 'https://youtube.com/@himalthapa',
        tiktok: 'https://tiktok.com/@aipro522',
        instagram: 'https://instagram.com/himalthapa',
        github: 'https://github.com/himalthapa',
        linkedin: 'https://linkedin.com/in/himalthapa'
    },
    
    // Asset Paths
    assets: {
        profile: 'assets/images/profile.jpg',
        resume: 'assets/resume/Himal_Thapa_Resume.pdf',
        favicon: 'assets/favicon.ico',
        // ... more asset paths
    },
    
    // Translations (Nepali and English)
    translations: {
        ne: { /* Nepali translations */ },
        en: { /* English translations */ }
    },
    
    // Default Settings
    settings: {
        defaultLanguage: 'ne', // Nepali as default
        defaultTheme: 'dark'
    }
};
```

### Customizing Content

1. **Personal Info**: Update `CONFIG.personal` in config.js
2. **Social Links**: Update `CONFIG.social` in config.js
3. **Asset Paths**: Update `CONFIG.assets` in config.js
4. **Translations**: Update `CONFIG.translations` in config.js
5. **Project Data**: Update `CONFIG.projects`, `CONFIG.experience`, `CONFIG.education` in config.js

### Email Placeholders

Replace `EMAIL_ADDRESS` in the HTML with your actual email address, or update `CONFIG.personal.email` in config.js.

### WhatsApp Number

Replace `YOUR_NUMBER` in WhatsApp links with your actual phone number (include country code without +), or update `CONFIG.personal.whatsapp` in config.js.

## Installation

1. Clone or download the repository
2. Open `index.html` in a web browser
3. No build process or dependencies required

## Deployment

### Static Hosting Options

- **Netlify**: Drag and drop the folder to deploy
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Push to a repository and enable Pages
- **AWS S3**: Upload files to an S3 bucket with static hosting
- **Firebase Hosting**: Use Firebase CLI to deploy

### Before Deployment

1. Update all placeholder URLs in `script.js`
2. Replace email placeholders in HTML
3. Add your actual resume PDF
4. Update meta tags in HTML head section
5. Add project images to the portfolio section
6. Add certificate images to assets folder
7. Update sitemap.xml with your actual domain

## File Structure

```
h522/
├── index.html          # Main HTML file with data-i18n attributes
├── style.css           # All styles and animations with responsive design
├── script.js           # All JavaScript functionality
├── config.js           # Centralized configuration file (NEW)
├── robots.txt          # Search engine instructions
├── sitemap.xml         # XML sitemap
├── README.md           # This file
└── assets/             # Asset folders
    ├── certificates/   # Certificate images
    ├── projects/       # Project screenshots
    ├── blog/           # Blog post images
    └── images/        # Profile and other images
```

## Customization

### Colors

Edit CSS variables in `:root` at the top of `style.css`:

```css
:root {
    --primary-cyan: #00E5FF;
    --primary-purple: #6C63FF;
    --secondary-red: #FF6B6B;
    --secondary-green: #00FFA3;
    /* ... more variables */
}
```

### Fonts

Change Google Fonts in the HTML head section.

### Animations

Adjust AOS initialization in `script.js`:

```javascript
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});
```

### Language Switching

The website supports bilingual content (Nepali and English). To add or modify translations:

1. Edit `CONFIG.translations` in `config.js`
2. Add `data-i18n` attributes to HTML elements
3. The language switcher automatically updates all translatable content

### Dark Mode

Dark mode is enabled by default. To change the default theme:

```javascript
// In config.js
settings: {
    defaultLanguage: 'ne',
    defaultTheme: 'light' // Change to 'light' for light mode default
}
```

### Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 767px and below

The hamburger menu appears on mobile devices (max-width: 768px) and is positioned inside the viewport for easy access.

## Performance

The website is optimized for:
- **Lighthouse Score**: 95+ across all categories
- **Fast Loading**: Lazy loading, debounced scroll events
- **SEO**: Proper meta tags and semantic HTML
- **Accessibility**: ARIA labels, keyboard navigation, focus states

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Device Compatibility

- Desktop computers
- Laptops
- Tablets
- Mobile phones (Android, iPhone)

## Security Features

- XSS prevention for form inputs
- Input validation
- No sensitive data exposure
- Secure external link handling

## Key Features Explained

### Centralized Asset Management

All assets, data, and translations are managed in `config.js`. Changes in this single file automatically update throughout the entire website. This includes:
- Personal information (name, profession, location, contact details)
- Social media links
- Asset paths (profile image, resume, certificates, projects)
- Bilingual translations for all sections
- Project data, experience, education, and blog posts

### Responsive Design

The website uses a mobile-first approach with responsive breakpoints:
- **Desktop (1024px+)**: Full layout with all features
- **Tablet (768px-1023px)**: Adjusted grid layouts and spacing
- **Mobile (767px-)**: Stacked layout with hamburger menu

All elements scale properly across devices with perfect alignment and smooth transitions.

### Sticky Navbar

The navbar remains fixed at the top while scrolling. When scrolling down, it gains a background color and shadow effect for better visibility. The navbar includes:
- Logo/Brand name
- Navigation links (hidden on mobile, shown in hamburger menu)
- Dark mode toggle button
- Language switcher button (ने/EN)
- Hamburger menu button (mobile only)

### Hamburger Menu

On mobile devices (max-width: 768px), the navigation links are hidden behind a hamburger menu button. The menu:
- Appears inside the viewport at the top right
- Expands/collapses smoothly with animation
- Shows all navigation links in a vertical list
- Includes language and theme controls
- Has z-index of 1001 to appear above other content

### Dark Mode Toggle

The dark mode toggle is integrated into the navbar controls. It:
- Toggles between dark and light themes
- Persists user preference in localStorage
- Updates all CSS variables for theme colors
- Works seamlessly with language switching

### Language Switcher

The language switcher (ने/EN) is integrated into the navbar controls. It:
- Switches between Nepali and English
- Default language is Nepali
- Persists user preference in localStorage
- Updates all text content with data-i18n attributes
- Updates form placeholders and validation messages
- Updates typing animation words dynamically

### Initialization Animation

When the website opens or refreshes, a loading animation appears showing:
- "लोड हुँदैछ..." in Nepali
- "Loading..." in English
The animation automatically hides after 1 second and uses the selected language.

### Auto-Update Logic

The following files are automatically updated when design changes occur:
- **robots.txt**: Includes config.js and other assets for search engine crawling
- **sitemap.xml**: Updated with current structure and date
- **script.js**: Uses centralized CONFIG object from config.js

## License

© 2026 Himal Thapa. All Rights Reserved.

## Support

For questions or issues, please contact through the contact form on the website.

---

Built with ❤️ using HTML, CSS, and JavaScript
