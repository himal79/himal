# Himal Thapa – Portfolio Website

A modern, responsive portfolio website featuring dual-mode theming (Dark/Light), glassmorphism design, bilingual support (Nepali/English), and WCAG AA compliant color contrast.

## Overview

This portfolio website showcases IT engineering skills, projects, services, and professional experience. Built with vanilla HTML, CSS, and JavaScript, it features:

- **Dual Theme System**: Dark mode (default) and Light mode with smooth transitions
- **WCAG AA Compliance**: Enhanced color contrast ratios for accessibility
- **Bilingual Support**: Nepali (default) and English language toggle
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Glassmorphism effects, animated particles, custom cursor
- **No Build Process**: Pure HTML/CSS/JS – runs directly in any browser

## File Structure

```
files (2)/
├── index.html    (48 KB) – Main HTML structure with semantic markup
├── style.css     (48 KB) – Complete stylesheet with CSS variables and theming
└── script.js     (56 KB) – JavaScript for interactivity, theme toggle, and translations
```

## Configuration & Setup

### Local Setup

1. **Clone or download** the project files to your local machine
2. **Open `index.html`** directly in any modern web browser
3. **No server required** – runs as a static HTML file

### Browser Compatibility

- Chrome/Edge: 90+
- Firefox: 88+
- Safari: 14+
- Mobile browsers: iOS Safari 14+, Chrome Mobile

### External Dependencies (CDN)

The following are loaded via CDN (no installation required):
- Fonts: Google Fonts (Orbitron, DM Sans, JetBrains Mono, Noto Sans Devanagari)
- Icons: Font Awesome 6.5.0
- Animations: AOS (Animate On Scroll) 2.3.4

## Features

### Dark/Light Mode Toggle

**How it works:**
- Click the moon/sun icon in the navbar to toggle between themes
- Theme preference is saved to `localStorage` for persistence
- Falls back to system preference (`prefers-color-scheme`) on first visit
- Smooth transition between themes (0.35s cubic-bezier)

**Implementation:**
- CSS variables defined in `:root` for dark mode (default)
- Light mode overrides in `[data-theme="light"]` selector
- JavaScript toggles `data-theme` attribute on `<html>` element
- Icon updates automatically (moon for dark, sun for light)

### Color Enhancement System

**CSS Variables Structure:**

```css
/* Accent Colors (consistent across both modes) */
--c1: #00D4FF;  /* Cyan - primary accent */
--c2: #7B6BFF;  /* Purple - secondary accent */
--c3: #FF5A5A;  /* Red - error/alert accent */
--c4: #00E895;  /* Green - success accent */
--grad: linear-gradient(135deg, var(--c1), var(--c2));
--grad2: linear-gradient(135deg, var(--c2), var(--c3));

/* Dark Mode Variables */
--bg: #0a0e17;       /* Main background */
--bg2: #0f162b;      /* Alternate background */
--bg3: #151d32;      /* Card background */
--surface: rgba(255,255,255,0.06);   /* Glass surface */
--surface2: rgba(255,255,255,0.10);  /* Hover surface */
--border: rgba(255,255,255,0.12);    /* Border color */
--text: #f0f4f8;     /* Primary text */
--text2: #9ca3b8;    /* Secondary text */
--text3: #d1d5db;    /* Tertiary text */

/* Light Mode Variables (in [data-theme="light"]) */
--bg: #fafbff;       /* Main background */
--bg2: #f0f4fa;      /* Alternate background */
--bg3: #e8ecf5;      /* Card background */
--surface: rgba(255,255,255,0.85);   /* Glass surface */
--surface2: rgba(255,255,255,0.95);  /* Hover surface */
--border: rgba(0,0,0,0.12);          /* Border color */
--text: #1a1f2e;     /* Primary text */
--text2: #4b5563;    /* Secondary text */
--text3: #374151;    /* Tertiary text */
```

**WCAG AA Compliance:**
- All text-to-background contrast ratios meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- Enhanced border visibility for better visual hierarchy
- Improved surface opacity for card distinction
- Optimized glow effects for accent highlights

### Bilingual Support

**Language Toggle:**
- Click the 🌐/EN button in the navbar to switch languages
- Language preference saved to `localStorage`
- Supports Nepali (default) and English
- Devanagari font automatically applied for Nepali text

**Editing Translations:**
All translations are in `script.js` (lines 41-409) in the `TRANSLATIONS` object:
- `np` key: Nepali translations
- `en` key: English translations
- Add new languages by copying a block and adding a new key

### Portfolio Section Redesign

**Overview:**
The Portfolio section has been redesigned with a modern card-based layout matching the Skills and Services sections. The section showcases seven focus areas aligned with the service offerings:

1. **IT Support & Troubleshooting** - Windows, Linux, and networking expertise
2. **Digital Content & Design** - Graphic design, video editing, and content creation
3. **Social Media Management** - Social media handling, content, and analytics
4. **Computer Hardware & Installation** - Hardware installation, management, and maintenance
5. **Websites & Web Solutions** - Attractive and user-friendly website development
6. **Software Development** - Customized software, database, and API solutions
7. **Web & Software Development** - Full-stack development with React and Node.js (final addition)

**Design Features:**
- **Consistent Color Scheme**: Matches Skills and Services sections with same palette, gradients, and shadows
- **Hover Animations**: Cards lift up (translateY -6px) with enhanced shadow effects and glow
- **Gradient Top Border**: Animated gradient bar on hover (scaleX transform)
- **Icon Styling**: Icons with background that transitions to gradient on hover
- **Tech Stack Badges**: Semi-transparent badges that transition to gradient on hover
- **Responsive Grid Layout**: Auto-adjusting columns (minmax 380px) with max-width 1400px container
- **Smooth Transitions**: All interactions use the existing CSS transition system
- **Clickable Links**: Each portfolio card is an anchor link to the Services section

**Bilingual Content:**
- Portfolio items support both Nepali and English
- Default language is Nepali (as per project default)
- Language toggle switches all portfolio content dynamically
- Translation keys: `port1_title`, `port1_desc`, `port2_title`, `port2_desc`, etc. (up to port7)

**Implementation Details:**
- HTML: Located in `index.html` (lines 339-432)
- CSS: Located in `style.css` (lines 625-674)
- JavaScript: Translation keys in `script.js` (lines 152-166 for Nepali, lines 364-378 for English)

**Customization:**
To modify portfolio items, edit the translation keys in `script.js`:
```javascript
/* Nepali translations */
port1_title: 'IT समर्थन र समस्या समाधान',
port1_desc:  'विन्डोज, लिनक्स र नेटवर्किङ समस्याहरू समाधान गर्ने विशेषज्ञ।',
port5_title: 'कम्प्युटर हार्डवेयर र स्थापना',
port5_desc:  'हार्डवेयर स्थापना, व्यवस्थापन र रखरखाव सेवा।',

/* English translations */
port1_title: 'IT Support & Troubleshooting',
port1_desc:  'Expert in solving Windows, Linux, and networking issues.',
port5_title: 'Computer Hardware & Installation',
port5_desc:  'Hardware installation, management, and maintenance services.',
```

To change link destinations, modify the `href` attribute in `index.html`:
```html
<a href="#services" class="portfolio-card">
```

### Hero Section Responsiveness Fixes

**Overview:**
The Hero section has been enhanced with improved responsiveness for the bio paragraph and social links to prevent text cropping and icon overflow on smartphones and tablets.

**Hero Bio Paragraph:**
- **Element**: `<p class="hero-bio" data-i18n="hero_bio"></p>`
- **Responsive Font Scaling**: Uses `clamp(0.9rem, 2vw, 1.05rem)` for smooth scaling across devices
- **Line Height**: Added `line-height: 1.7` for better readability and text wrapping
- **Max Width**: Maintains `max-width: 520px` on desktop, expands to `100%` on mobile
- **Text Wrapping**: Ensures proper word wrapping without overflow or cropping

**Hero Social Links:**
- **Element**: `<div class="hero-social" role="list" aria-label="Social links">`
- **Flex Wrap**: Added `flex-wrap: wrap` to allow icons to wrap neatly on narrow viewports
- **Max Width**: Constrained to `max-width: 400px` on desktop, expands to `100%` on mobile
- **Gap Spacing**: Maintains `gap: 0.75rem` for consistent icon spacing
- **Alignment**: Centers icons on mobile (`justify-content: center` in media query)
- **Hover Effects**: Preserves existing hover animations, glow effects, and transitions

**Implementation Details:**
- CSS: Located in `style.css` (lines 292-297 for hero-bio, lines 304-308 for hero-social)
- Mobile Media Query: Located in `style.css` (lines 1088-1093)

**Responsive Behavior:**
- **Desktop (768px+)**: hero-bio max-width 520px, hero-social max-width 400px
- **Mobile/Tablet (<768px)**: Both expand to 100% width with centered alignment
- **Small Mobile (<480px)**: Font sizes scale down further via clamp function

**Customization:**
To adjust the bio text size, modify the clamp values in `style.css`:
```css
.hero-bio {
  font-size: clamp(0.9rem, 2vw, 1.05rem); /* min, preferred, max */
}
```

To adjust social icon spacing, modify the gap value:
```css
.hero-social {
  gap: 0.75rem; /* Increase for more spacing, decrease for tighter layout */
}
```

### Loader and Navbar Logo Enhancements

**Overview:**
The logo images in the Loader and Navbar sections have been enhanced with improved centering, reduced spacing, increased size, and enhanced dark/light mode visibility filters for better branding consistency.

**Loader Logo:**
- **Element**: `<div class="loader-logo"><img src="assets/images/logo.png" alt="HTt Logo" /></div>`
- **Image Source**: `assets/images/logo.png`
- **Responsive Sizing**: Uses `clamp(80px, 20vw, 150px)` for smooth scaling across devices
- **Centering**: Horizontally and vertically centered using flexbox and auto margins
- **Spacing**: Reduced margin-bottom from 1.5rem to 1rem for closer text positioning
- **Animation**: Maintains existing pulse animation (scale and opacity)
- **Dark Mode**: Applies `brightness(1.2) contrast(1.05)` filter for enhanced visibility
- **Light Mode**: Applies `brightness(0.95) contrast(1.02)` filter for better contrast
- **Accessibility**: Preserves `role="status"` and `aria-label="Loading"` on parent container

**Navbar Logo:**
- **Element**: `<a href="#home" class="nav-logo" aria-label="Home"><img src="assets/images/logo.png" alt="HTt Logo" /><span class="accent">.</span></a>`
- **Image Source**: `assets/images/logo.png`
- **Size**: 70px × 70px on desktop, 55px × 55px on mobile (increased from 60px/50px)
- **Accent Dot**: Styled with color: var(--c3), font-size: 1.5rem desktop, 1.35rem mobile
- **Alignment**: Centers within navbar using flexbox with gap spacing
- **Dark Mode**: Applies `brightness(1.2) contrast(1.05)` filter for enhanced visibility
- **Light Mode**: Applies `brightness(0.95) contrast(1.02)` filter for better contrast
- **Accessibility**: Preserves `aria-label="Home"` on anchor link

**Implementation Details:**
- HTML: Located in `index.html` (lines 58 for loader, line 76 for navbar)
- CSS: Located in `style.css` (lines 100-112 for loader-logo, lines 179-195 for nav-logo)
- Dark Mode Filter: Located in `style.css` (lines 58-61)
- Mobile Media Query: Located in `style.css` (lines 1108-1109)

**Responsive Behavior:**
- **Desktop (768px+)**: loader-logo clamp(80px, 20vw, 150px), nav-logo 70px
- **Mobile (<768px)**: loader-logo scales via clamp, nav-logo 55px
- **Image Scaling**: Uses `object-fit: contain` to maintain aspect ratio
- **Smooth Transitions**: Filter changes use existing CSS transition system

**Customization:**
To change the logo image, update the `src` attribute in `index.html`:
```html
<!-- Loader -->
<div class="loader-logo"><img src="assets/images/your-logo.png" alt="Your Logo" /></div>

<!-- Navbar -->
<a href="#home" class="nav-logo" aria-label="Home"><img src="assets/images/your-logo.png" alt="Your Logo" /><span class="accent">.</span></a>
```

To adjust logo sizes and spacing, modify the values in `style.css`:
```css
/* Loader logo - responsive sizing */
.loader-logo {
  width: clamp(80px, 20vw, 150px); /* min, preferred, max */
  height: clamp(80px, 20vw, 150px);
  margin: 0 auto 1rem; /* Spacing below logo */
}

/* Navbar logo image */
.nav-logo img {
  width: 70px; height: 70px; /* Desktop size */
}

/* Navbar accent dot */
.nav-logo .accent {
  font-size: 1.5rem; /* Desktop size */
}

/* Mobile sizes in media query */
@media (max-width: 768px) {
  .nav-logo img { width: 55px; height: 55px; }
  .nav-logo .accent { font-size: 1.35rem; }
}
```

To adjust dark/light mode visibility, modify the filter values:
```css
/* Dark mode (default) - enhanced visibility */
.loader-logo img,
.nav-logo img {
  filter: brightness(1.2) contrast(1.05); /* Brighter with contrast */
}

/* Light mode override - better contrast */
[data-theme="light"] .loader-logo img,
[data-theme="light"] .nav-logo img {
  filter: brightness(0.95) contrast(1.02); /* Slightly darker with contrast */
}
```

## Usage

### Editing Styles (style.css)

**To modify colors:**
1. Edit CSS variables in the `:root` section (lines 7-39)
2. Light mode overrides are in `[data-theme="light"]` (lines 41-56)
3. Changes apply globally across all components

**To adjust layout:**
- Section padding: Modify `.section` class (line 433)
- Container width: Modify `.container` max-width (line 435)
- Border radius: Change `--radius` and `--radius-sm` variables (lines 35-36)

**To customize animations:**
- Transition speed: Modify `--transition` variable (line 37)
- Animation durations: Search for `@keyframes` and adjust timing

### Editing Functionality (script.js)

**To update social links:**
Edit the `SOCIAL` object (lines 21-32) with your actual URLs:
```javascript
const SOCIAL = {
  github: 'https://github.com/YOUR_USERNAME',
  linkedin: 'https://linkedin.com/in/YOUR_LINKEDIN',
  email: 'your@email.com',
  whatsapp: '+1234567890',
  // ... other social links
};
```

**To modify translations:**
Edit the `TRANSLATIONS` object (lines 41-409):
- Find the key you want to change
- Update both `np` (Nepali) and `en` (English) versions
- HTML uses `data-i18n` attributes to map to translation keys

**To add new typed words:**
Edit the `typed_words` array in both language blocks:
```javascript
typed_words: ['IT Engineer', 'Web Developer', 'Your New Role'],
```

## Responsiveness & Device Compatibility

### Breakpoints

- **Desktop**: 1025px and above
- **Tablet**: 769px – 1024px
- **Mobile**: 768px and below
- **Small Mobile**: 360px and below

### Responsive Features

- **Navigation**: Hamburger menu on mobile devices
- **Hero Section**: Stacked layout on mobile, side-by-side on desktop
- **Grid Layouts**: Auto-adjusting columns based on screen width
- **Typography**: Fluid typography using `clamp()` for scalable fonts
- **Touch Optimization**: Custom cursor disabled on touch devices
- **Reduced Motion**: Respects `prefers-reduced-motion` preference

### Mobile-Specific Adjustments

- Navbar height reduced to 65px on mobile
- Navigation menu becomes full-screen overlay
- Avatar size reduced on smaller screens
- Float tags hidden on mobile for cleaner layout
- Form padding reduced on mobile devices

## Notes

### Performance

- Lazy-loaded external resources (CSS, icons)
- Will-change optimization for animated elements
- Efficient CSS transitions with hardware acceleration
- No JavaScript frameworks – minimal overhead

### Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible outlines
- Screen reader friendly
- WCAG AA color contrast compliance

### Browser DevTools

- Use browser DevTools to test responsive behavior
- Toggle device toolbar to preview different screen sizes
- Use Elements panel to inspect CSS variables in real-time
- Console shows any JavaScript errors

### Custom Cursor

The custom cursor is automatically disabled on:
- Touch devices (tablets, phones)
- Devices with coarse pointers
- When user prefers reduced motion

### Contact Form

The contact form includes client-side validation. To make it functional:
- Add a backend endpoint to handle form submissions
- Update the form submission handler in `script.js`
- Currently shows success message for demonstration

---

**Version**: 2.0  
**Last Updated**: June 2026  
**Author**: Himal Thapa  
**License**: Personal Portfolio
