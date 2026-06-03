# Himal Thapa - Portfolio Website

A premium, modern, and fully responsive personal portfolio website for Himal Thapa, IT Engineer.

## Features

- **Modern Design**: Glassmorphism + Gradient design with neon glow effects
- **Fully Responsive**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes with persistence
- **Smooth Animations**: AOS scroll animations, parallax effects, and transitions
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, and structured data
- **Performance**: Optimized for fast loading with lazy loading and debouncing
- **Accessibility**: WCAG compliant with proper focus states and ARIA labels
- **Social Integration**: Deep linking for mobile apps (Facebook, Instagram, YouTube, TikTok, WhatsApp)

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

- **HTML5**: Semantic markup
- **CSS3**: Modern CSS with variables, flexbox, grid, and animations
- **JavaScript (Vanilla)**: No frameworks required
- **AOS Library**: Scroll animations
- **Font Awesome**: Icon library
- **Google Fonts**: Poppins and Space Grotesk

## Configuration

### Social Media Links

Edit the `CONFIG` object in `script.js` to add your social media URLs:

```javascript
const CONFIG = {
    social: {
        facebook: 'YOUR_FACEBOOK_URL',
        youtube: 'YOUR_YOUTUBE_URL',
        tiktok: 'YOUR_TIKTOK_URL',
        instagram: 'YOUR_INSTAGRAM_URL',
        github: 'YOUR_GITHUB_URL',
        linkedin: 'YOUR_LINKEDIN_URL',
        email: 'YOUR_EMAIL_ADDRESS',
        whatsapp: 'YOUR_WHATSAPP_NUMBER'
    },
    resume: 'path/to/resume.pdf'
};
```

### Email Placeholders

Replace `EMAIL_ADDRESS` in the HTML with your actual email address.

### WhatsApp Number

Replace `YOUR_NUMBER` in WhatsApp links with your actual phone number (include country code without +).

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
├── index.html          # Main HTML file
├── style.css           # All styles and animations
├── script.js           # All JavaScript functionality
├── robots.txt          # Search engine instructions
├── sitemap.xml         # XML sitemap
├── README.md           # This file
└── assets/             # (Create this folder for images)
    ├── certificates/   # Certificate images
    ├── projects/       # Project screenshots
    └── profile/        # Profile photo
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

## License

© 2026 Himal Thapa. All Rights Reserved.

## Support

For questions or issues, please contact through the contact form on the website.

---

Built with ❤️ using HTML, CSS, and JavaScript
