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

### Navbar Hamburger Menu Fix

**Overview:**
The hamburger menu button has been fixed to properly toggle between hamburger icon (three lines) and cross icon (X) when opening/closing the mobile navigation menu. The JavaScript now correctly applies the CSS class that triggers the icon transformation.

**Hamburger Button Behavior:**
- **Element**: `<button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="nav-links" type="button">`
- **Closed State**: Shows three horizontal lines (hamburger icon)
- **Open State**: Transforms to X (cross) icon with smooth animation
- **Accessibility**: Updates `aria-label` and `aria-expanded` attributes dynamically

**Implementation Details:**
- HTML: Located in `index.html` (lines 99-101)
- CSS: Located in `style.css` (lines 229-248)
- JavaScript: Located in `script.js` (lines 637-663)

**CSS Transformation:**
- Uses CSS transforms to animate span elements into X shape
- First span: `translateY(7px) rotate(45deg)` - rotates to diagonal
- Second span: `opacity: 0; transform: scaleX(0)` - fades out
- Third span: `translateY(-7px) rotate(-45deg)` - rotates to opposite diagonal
- All transitions use existing `var(--transition)` for smooth animation

**JavaScript Updates:**
- Changed class toggle from `active` to `open` to match CSS selector
- Added dynamic `aria-label` updates: "Open menu" when closed, "Close menu" when open
- Maintains `aria-expanded` state updates for screen readers
- Closes menu on link click and outside click with proper state reset

**Responsive Behavior:**
- Hamburger button displays only on mobile (`display: flex` in media query at 768px)
- Aligns properly within nav-actions container
- No cropping or misalignment on mobile devices
- Smooth menu open/close animations

**Customization:**
To adjust hamburger button styling, modify in `style.css`:
```css
.hamburger {
  padding: 8px; /* Button padding */
  background: var(--surface); /* Background color */
  border: 1px solid var(--border); /* Border styling */
}

.hamburger span {
  width: 24px; /* Line width */
  height: 2px; /* Line height */
  gap: 5px; /* Spacing between lines */
}
```

To adjust cross icon animation, modify the transform values:
```css
.hamburger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg); /* Top line */
}
.hamburger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg); /* Bottom line */
}
```

### Navbar Mobile Menu Alignment Fix

**Overview:**
The mobile hamburger menu alignment and active element underline positioning have been fixed to ensure proper spacing, alignment, and visual consistency across all devices.

**Mobile Menu Alignment:**
- **Padding**: Reduced from `1.5rem 2rem` to `1.5rem 1.5rem` for better viewport fit
- **Gap**: Increased from `0.25rem` to `0.5rem` for better item separation
- **Nav-link Padding**: Increased from `0.75rem 0` to `1rem 0.5rem` for better touch targets
- **Scroll Support**: Added `max-height: calc(100vh - var(--nav-h))` and `overflow-y: auto` to handle long menus
- **Alignment**: Maintains left-aligned text with proper spacing from edges

**Active Element Underline:**
- **Position**: Changed from `bottom: -2px` to `bottom: 0` for direct text alignment
- **Behavior**: Underline now sits directly beneath the active link text
- **Animation**: Maintains smooth expand/collapse animation (left/right from 50% to 10%)

**Implementation Details:**
- CSS: Located in `style.css` (lines 208-212 for underline, lines 1103-1115 for mobile menu)

**Responsive Behavior:**
- **Desktop (768px+)**: Horizontal navigation with centered underline
- **Mobile (<768px)**: Vertical dropdown menu with proper spacing and scroll support
- **All Devices**: Underline positioned directly beneath text for consistency

**Customization:**
To adjust mobile menu spacing, modify in `style.css`:
```css
@media (max-width: 768px) {
  .nav-links {
    padding: 1.5rem 1.5rem; /* Menu container padding */
    gap: 0.5rem; /* Spacing between menu items */
  }
  .nav-link {
    padding: 1rem 0.5rem; /* Individual item padding */
  }
}
```

To adjust underline positioning, modify in `style.css`:
```css
.nav-link::after {
  bottom: 0; /* Position directly beneath text */
  height: 2px; /* Underline thickness */
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

## Final Optimizations & Enhancements

### Code Cleanup

**Removed Unused Code:**
- Removed unused portfolio filter JavaScript function (`initPortfolioFilter`) that referenced non-existent `.project-card` elements
- Removed empty CSS rule `[data-lang="en"] .lang-label { }` that had no effect
- All remaining CSS and JavaScript is actively used and functional

**Benefits:**
- Reduced JavaScript file size by ~18 lines of unused code
- Eliminated potential confusion from non-functional portfolio filter
- Cleaner, more maintainable codebase

### Performance Enhancements

**Image Lazy Loading:**
- Critical images (loader logo, navbar logo) use `loading="eager"` for immediate display
- Non-critical images (profile images in hero and about sections) use `loading="lazy"` for deferred loading
- Improves initial page load time by prioritizing above-the-fold content

**Implementation:**
```html
<!-- Critical images - load immediately -->
<img src="assets/images/logo.png" alt="HTt Logo" loading="eager" />

<!-- Non-critical images - load when needed -->
<img src="assets/images/profile.png" alt="Himal Thapa Profile" loading="lazy" />
```

**Existing Performance Features:**
- Lazy-loaded external resources (CSS, icons via media="print" onload)
- Will-change optimization for animated elements only
- Efficient CSS transitions with hardware acceleration
- No JavaScript frameworks – minimal overhead
- Particle canvas pauses when tab is hidden (visibilitychange event)

### SEO & Indexing

**Sitemap.xml:**
- Created comprehensive sitemap covering all major sections
- Includes homepage, all section anchors (#home, #about, #skills, etc.)
- Configured with appropriate priority levels (1.0 for home, 0.6-0.9 for sections)
- Set lastmod date to 2026-06-30
- Configured change frequencies (weekly for home/blog, monthly for other sections)

**Robots.txt:**
- Allows all crawlers to access the site
- Disallows private directories (/admin/, /private/, /assets/certificate/)
- Includes sitemap reference for search engines
- Sets crawl-delay of 1 second for respectful crawling

**Enhanced Meta Tags:**
- Added comprehensive keywords including IT Support, Web Development, Digital Content
- Added language meta tag specifying Nepali and English
- Added geographic metadata (geo.region: NP-BAG, geo.placename: Kathmandu)
- Added canonical URL to prevent duplicate content issues
- Enhanced Open Graph tags with image dimensions, locale, and site name
- Enhanced Twitter Card tags with site and creator handles
- Added hreflang tags for multilingual SEO (ne, en, x-default)

**Implementation Details:**
- Files created: `sitemap.xml`, `robots.txt`
- Meta tags updated in `index.html` (lines 10-41)
- Hreflang tags support Nepali (ne) and English (en) with x-default fallback

### Accessibility & Best Practices

**ARIA Labels and Roles:**
- All interactive elements have appropriate ARIA labels
- Navigation has `role="navigation"` and `aria-label="Main navigation"`
- Social links have `role="list"` and individual `aria-label` attributes
- Loader has `role="status"` and `aria-label="Loading"`
- Modal has `role="dialog"`, `aria-modal="true"`, and `aria-labelledby`
- Testimonial navigation has `role="tablist"` and `aria-label`
- All buttons have appropriate `aria-label` or text content

**Keyboard Navigation:**
- All interactive elements are keyboard accessible
- Focus visible outlines implemented with `:focus-visible` pseudo-class
- Modal closes on Escape key press
- Cert cards respond to Enter and Space keys
- Smooth scroll behavior for anchor links
- Tab order follows logical document structure

**Contrast Ratios:**
- WCAG AA compliant color contrast ratios maintained
- Dark mode: Enhanced text colors (#f0f4f8, #9ca3b8) on dark backgrounds (#0a0e17)
- Light mode: Enhanced text colors (#1a1f2e, #4b5563) on light backgrounds (#fafbff)
- Logo filters adjusted for visibility in both modes (brightness/contrast)
- All interactive elements have sufficient contrast for accessibility

**Additional Accessibility Features:**
- Reduced motion support via `prefers-reduced-motion` media query
- Custom cursor disabled on touch devices
- Screen reader friendly with semantic HTML
- Alt text provided for all images
- Form validation with accessible error messages

### Maintenance Instructions

**Updating Sitemap:**
- Edit `sitemap.xml` when adding new sections or pages
- Update `lastmod` date when making significant changes
- Adjust `priority` and `changefreq` based on content importance

**Updating Robots.txt:**
- Add disallow rules for any new private directories
- Update sitemap URL if domain changes
- Adjust crawl-delay if server load is a concern

**Updating Meta Tags:**
- Update Open Graph image URL when creating new og-image.jpg
- Update Twitter handles when social media accounts change
- Update geographic metadata if location changes
- Add new hreflang tags when adding more languages

### Open Graph (OG) Image Setup

**Overview:**
The portfolio includes comprehensive Open Graph meta tags for optimal social media preview on Facebook, LinkedIn, Twitter, and other platforms. The OG image setup includes primary and fallback images with proper dimensions and metadata.

**Current OG Image Configuration:**

**Primary OG Image:**
- **File**: `public_assets/og-im.png`
- **URL**: `https://himal522.com.np/public_assets/og-im.png`
- **Dimensions**: 1200x630 pixels (Facebook recommended size)
- **Type**: PNG
- **Alt Text**: "Himal Thapa Portfolio - IT Engineer & Developer"

**Fallback OG Image:**
- **File**: `public_assets/icon-512.png`
- **URL**: `https://himal522.com.np/public_assets/icon-512.png`
- **Dimensions**: 512x512 pixels
- **Type**: PNG
- **Alt Text**: "Himal Thapa Portfolio Logo"
- **Purpose**: Serves as backup if primary image fails to load

**Meta Tags Implementation:**
```html
<!-- Primary OG Image -->
<meta property="og:image" content="https://himal522.com.np/public_assets/og-im.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:type" content="image/png" />
<meta property="og:image:alt" content="Himal Thapa Portfolio - IT Engineer & Developer" />

<!-- Fallback OG Image -->
<meta property="og:image" content="https://himal522.com.np/public_assets/icon-512.png" />
<meta property="og:image:width" content="512" />
<meta property="og:image:height" content="512" />
<meta property="og:image:type" content="image/png" />
<meta property="og:image:alt" content="Himal Thapa Portfolio Logo" />
```

**Twitter Card Consistency:**
Twitter card tags mirror OG tags for consistent social previews:
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://himal522.com.np/public_assets/og-im.png" />
<meta name="twitter:image:alt" content="Himal Thapa Portfolio - IT Engineer & Developer" />
```

**Absolute URL Requirement:**
- All OG image URLs must use absolute URLs (full domain path)
- Relative URLs (e.g., `/public_assets/og-im.png`) will not work for social media crawlers
- Ensure domain is correct: `https://himal522.com.np/`

**Facebook Crawler Testing:**
To verify OG image displays correctly on Facebook:

1. **Facebook Sharing Debugger:**
   - Visit: https://developers.facebook.com/tools/debug/
   - Enter your URL: `https://himal522.com.np/`
   - Click "Debug" to see how Facebook interprets your meta tags
   - Check "Scrape Again" if you've recently updated the image

2. **Expected Results:**
   - OG image should display at 1200x630 pixels
   - Title: "Himal Thapa | IT Engineer"
   - Description: Full portfolio description
   - Site name: "Himal Thapa Portfolio"

3. **Common Issues:**
   - If image doesn't appear: Check absolute URL is accessible
   - If old image shows: Clear Facebook cache using "Scrape Again"
   - If dimensions wrong: Verify image is exactly 1200x630 pixels

**Caching Considerations:**
- Facebook caches OG data for up to 30 days
- Use Facebook Sharing Debugger to force cache refresh
- Other platforms (LinkedIn, Twitter) have similar caching
- Update `lastmod` date in sitemap.xml after OG image changes

**Server Requirements:**
Ensure your server allows Facebook crawler access:
- No authentication required for `public_assets/` directory
- Proper MIME types served for PNG files (`image/png`)
- No partial content responses (full image must be served)
- Accept requests from Facebook crawler user agent

**Mobile Preview Compatibility:**
- OG image dimensions (1200x630) work on both desktop and mobile
- Facebook automatically scales for mobile devices
- Fallback image (512x512) ensures square preview if needed
- Test on actual mobile devices for final verification

**Creating New OG Images:**
When replacing the OG image:
1. Create image at 1200x630 pixels (PNG or JPG)
2. Save as `public_assets/og-im.png` (or update meta tag with new filename)
3. Update meta tag URL in `index.html` if filename changes
4. Test with Facebook Sharing Debugger
5. Clear cache on other social platforms if needed

**Image Best Practices:**
- Use PNG or JPG format (PNG recommended for text/graphics)
- Keep file size under 5MB for faster loading
- Include important text/branding in center 80% (safe zone)
- Use high contrast for readability on small previews
- Test on both light and dark backgrounds

**Multilingual Support:**
OG tags support both Nepali and English:
- Primary locale: `ne_NP` (Nepali)
- Alternate locale: `en_US` (English)
- Description text works in both languages
- Image should be language-neutral or include both languages

### Bilingual Resume Download

**Overview:**
The resume download button in the Hero section automatically switches between language-specific resume files based on the current language selection. This ensures users download the resume in their preferred language.

**File Naming Convention:**
- **Nepali Resume**: `assets/files/htcvn.pdf` (HT = Himal Thapa, CV = Curriculum Vitae, N = Nepali)
- **English Resume**: `assets/files/htcve.pdf` (HT = Himal Thapa, CV = Curriculum Vitae, E = English)

**Implementation Details:**

**HTML Structure:**
```html
<a id="resume-download-btn" class="btn btn-primary magnetic" download aria-label="Download CV">
  <i class="fas fa-download" aria-hidden="true"></i>
  <span data-i18n="btn_resume"></span>
</a>
```

**JavaScript Logic:**
Located in `script.js` (lines 542-549):
```javascript
/** Update resume download link based on current language */
function updateResumeDownloadLink(lang) {
  const resumeBtn = document.getElementById('resume-download-btn');
  if (!resumeBtn) return;
  
  const resumeFile = lang === 'np' ? 'assets/files/htcvn.pdf' : 'assets/files/htcve.pdf';
  resumeBtn.href = resumeFile;
}
```

**Language Switching:**
- Function called on page load to set initial resume file
- Function called whenever language toggle is clicked
- Instant switching without page reload
- Language preference saved to localStorage for persistence

**Behavior:**
- **Nepali Mode (default)**: Downloads `htcvn.pdf`
- **English Mode**: Downloads `htcve.pdf`
- **Button Text**: Changes based on language (CV डाउनलोड / Download CV)
- **Accessibility**: Maintains `aria-label="Download CV"` for screen readers

**Performance:**
- Instant file path update (no network request)
- No page reload required
- Minimal JavaScript overhead
- Works on all devices (mobile, tablet, desktop)

**Adding New Language-Specific Resumes:**
To add support for additional languages:

1. **Create new resume file** following naming convention:
   - Hindi: `assets/files/htcvh.pdf`
   - Spanish: `assets/files/htcvs.pdf`
   - Format: `htcv[L].pdf` where L is language code

2. **Update JavaScript function** in `script.js`:
```javascript
function updateResumeDownloadLink(lang) {
  const resumeBtn = document.getElementById('resume-download-btn');
  if (!resumeBtn) return;
  
  const resumeFiles = {
    'np': 'assets/files/htcvn.pdf',
    'en': 'assets/files/htcve.pdf',
    'hi': 'assets/files/htcvh.pdf',  // Add new language
    'es': 'assets/files/htcvs.pdf'   // Add new language
  };
  
  resumeBtn.href = resumeFiles[lang] || resumeFiles['np'];
}
```

3. **Update language toggle** to include new language option in `script.js` (line 549)

4. **Add translations** for button text in `TRANSLATIONS` object

**File Placement:**
- Resume files must be in: `assets/files/` directory
- Ensure files are publicly accessible (no authentication required)
- Use PDF format for universal compatibility
- Keep file sizes reasonable for fast downloads

**Testing:**
1. Load page in default (Nepali) mode - verify `htcvn.pdf` downloads
2. Click language toggle to switch to English - verify `htcve.pdf` downloads
3. Refresh page - verify language preference persists
4. Test on mobile devices - verify download works correctly
5. Test with screen reader - verify accessibility labels work

**Troubleshooting:**
- **Wrong file downloads**: Check language state in localStorage
- **Download fails**: Verify file exists in correct directory
- **Button not updating**: Check JavaScript console for errors
- **Language not persisting**: Verify localStorage is enabled

### WhatsApp Contact Form Integration

**Overview:**
The contact form in the Contact section integrates with WhatsApp to send form submissions directly to the specified WhatsApp number. This provides instant communication and is particularly useful for mobile users who frequently use WhatsApp.

**Current Configuration:**
- **WhatsApp Number**: +9779851214522
- **Message Format**: Structured with name, email, subject, and message fields
- **Fallback**: Shows success message if WhatsApp is unavailable

**Implementation Details:**

**Form Fields:**
- Name (required, min 2 characters)
- Email (required, valid email format)
- Subject (required, min 3 characters)
- Message (required, min 10 characters)

**WhatsApp Message Format:**
```
*New Contact Form Submission*

*Name:* [User Name]
*Email:* [User Email]
*Subject:* [Subject]

*Message:*
[Message Content]
```

**JavaScript Logic:**
Located in `script.js` (lines 1039-1084):
```javascript
let isSubmitting = false;

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!validate()) return;
  if (isSubmitting) return;

  isSubmitting = true;
  
  // Collect form data
  const name    = sanitize(form.name.value);
  const email   = form.email.value.trim();
  const subject = sanitize(form.subject.value);
  const message = sanitize(form.message.value);

  // Construct WhatsApp message with proper line breaks
  const whatsappMessage = `*New Contact Form Submission*

*Name:* ${name}
*Email:* ${email}
*Subject:* ${subject}

*Message:*
${message}`;

  const whatsappNumber = SOCIAL.whatsapp.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Try to open WhatsApp
  const whatsappOpened = window.open(whatsappUrl, '_blank');
  
  // Show success message after WhatsApp attempt
  // (Form data is preserved in WhatsApp URL, user can send if opened)
  setTimeout(() => {
    // Reset button and show success
    form.reset();
    isSubmitting = false;
  }, 1000);
});
```

**Behavior:**
1. **Validation**: Form validates all fields before submission
2. **WhatsApp Attempt**: Opens WhatsApp with pre-filled message in new tab
3. **Success Message**: Shows success message and resets form after 1 second
4. **Fallback**: If WhatsApp is blocked by popup blocker, user can still access via URL in browser history
5. **Duplicate Prevention**: `isSubmitting` flag prevents multiple submissions

**Performance:**
- Instant response on button click
- Optimized for mobile devices (WhatsApp is most commonly used on mobile)
- No page reload required
- Minimal JavaScript overhead

**Changing WhatsApp Number:**
To update the WhatsApp number, edit the `SOCIAL` object in `script.js` (line 21):
```javascript
const SOCIAL = {
  whatsapp: '+9779851214522',  // Change this number
  // ... other social links
};
```

**Customizing Message Format:**
To change the WhatsApp message format, edit the message template in `script.js` (lines 1061-1068):
```javascript
const whatsappMessage = `*Your Custom Format*

*Field 1:* ${value1}
*Field 2:* ${value2}

*Message:*
${message}`;
```

**Fallback Mechanism:**
If WhatsApp is blocked by popup blocker or unavailable:
- WhatsApp URL is still constructed and attempted via `window.open()`
- Form data is preserved in the WhatsApp URL parameter
- User can manually access the WhatsApp link from browser history if needed
- Success message shows regardless (form submission was processed)
- No data loss - all form data is in the encoded URL

**Accessibility:**
- Form maintains `aria-label="Contact form"`
- All fields have proper labels and error messages
- Success/error messages use `role="alert"`
- Button disabled during submission to prevent double-clicks
- Screen reader friendly with proper ARIA attributes

**Testing:**
1. Fill form with valid data and submit - verify WhatsApp opens with message
2. Test on mobile device - verify WhatsApp app opens
3. Test on desktop - verify WhatsApp Web opens
4. Submit invalid data - verify validation errors show
5. Click submit multiple times - verify duplicate submission prevention
6. Test with screen reader - verify accessibility

**Troubleshooting:**
- **WhatsApp doesn't open**: Check if WhatsApp is installed on device
- **Wrong number**: Verify `SOCIAL.whatsapp` in script.js
- **Message not formatted**: Check message template in script.js
- **Form not submitting**: Check browser console for JavaScript errors
- **Validation not working**: Ensure all required fields are filled correctly

**Security:**
- Input sanitization prevents XSS attacks
- Email validation ensures proper email format
- Character limits prevent excessively long inputs
- No sensitive data stored in localStorage

**Browser Compatibility:**
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (iOS and macOS)
- Mobile browsers: Full support (opens WhatsApp app if installed)

**SEO & Indexing:**
- Contact form remains indexable by search engines
- Form structure unchanged (semantic HTML maintained)
- No impact on existing SEO configuration
- sitemap.xml and robots.txt do not require updates

**Monitoring Performance:**
- Use browser DevTools Network tab to monitor load times
- Check Lighthouse scores for performance, accessibility, and SEO
- Monitor Google Search Console for indexing issues
- Test lazy loading behavior on slow connections

**Testing Accessibility:**
- Use keyboard-only navigation to verify all features work
- Test with screen reader (NVDA, JAWS, VoiceOver)
- Check contrast ratios with online tools (WebAIM Contrast Checker)
- Verify focus indicators are visible on all interactive elements

## Notes

### Performance

- Lazy-loaded external resources (CSS, icons)
- Image lazy loading for non-critical content
- Will-change optimization for animated elements
- Efficient CSS transitions with hardware acceleration
- No JavaScript frameworks – minimal overhead
- Particle canvas pauses when tab is hidden

### Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible outlines
- Screen reader friendly
- WCAG AA color contrast compliance
- Reduced motion support

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
