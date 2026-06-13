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
