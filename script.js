/* ============================================
   Initialize AOS Animation Library
   ============================================ */
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

/* ============================================
   DOM Elements
   ============================================ */
const loader = document.getElementById('loader');
const scrollProgress = document.getElementById('scrollProgress');
const backToTop = document.getElementById('backToTop');
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-link');
const particles = document.getElementById('particles');
const typingText = document.querySelector('.typing-text');
const contactForm = document.getElementById('contactForm');
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const certModal = document.getElementById('certModal');
const modalClose = document.getElementById('modalClose');
const modalImage = document.getElementById('modalImage');
const certViewBtns = document.querySelectorAll('.cert-view-btn');
const prevTestimonial = document.getElementById('prevTestimonial');
const nextTestimonial = document.getElementById('nextTestimonial');
const testimonialTrack = document.querySelector('.testimonial-track');
const testimonialDots = document.getElementById('testimonialDots');

/* ============================================
   Language State Management
   ============================================ */
let currentLanguage = localStorage.getItem('language') || CONFIG.settings.defaultLanguage;

/* ============================================
   Language Switching Function
   ============================================ */
function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key);
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Update language toggle button
    updateLangToggle();
    
    // Update typing animation words
    updateTypingWords();
    
    // Update form placeholders
    updateFormPlaceholders();
    
    // Update filter buttons
    updateFilterButtons();
}

/* ============================================
   Get Translation Function
   ============================================ */
function getTranslation(key) {
    const keys = key.split('.');
    let value = CONFIG.translations[currentLanguage];
    
    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            return null;
        }
    }
    
    return value;
}

/* ============================================
   Update Language Toggle Button
   ============================================ */
function updateLangToggle() {
    const langCurrent = langToggle.querySelector('.lang-current');
    const langSwitch = langToggle.querySelector('.lang-switch');
    
    if (currentLanguage === 'ne') {
        langCurrent.textContent = 'ने';
        langSwitch.textContent = '/ EN';
    } else {
        langCurrent.textContent = 'EN';
        langSwitch.textContent = '/ ने';
    }
}

/* ============================================
   Update Typing Words
   ============================================ */
function updateTypingWords() {
    typingWords = CONFIG.translations[currentLanguage].hero.typing;
}

/* ============================================
   Update Form Placeholders
   ============================================ */
function updateFormPlaceholders() {
    const t = CONFIG.translations[currentLanguage].contact;
    
    document.getElementById('name').placeholder = t.namePlaceholder;
    document.getElementById('email').placeholder = t.emailPlaceholder;
    document.getElementById('subject').placeholder = t.subjectPlaceholder;
    document.getElementById('message').placeholder = t.messagePlaceholder;
    
    // Update labels
    document.querySelector('label[for="name"]').textContent = t.name;
    document.querySelector('label[for="email"]').textContent = t.emailLabel;
    document.querySelector('label[for="subject"]').textContent = t.subject;
    document.querySelector('label[for="message"]').textContent = t.message;
}

/* ============================================
   Update Filter Buttons
   ============================================ */
function updateFilterButtons() {
    const t = CONFIG.translations[currentLanguage].portfolio;
    
    filterBtns.forEach(btn => {
        const filter = btn.getAttribute('data-filter');
        switch (filter) {
            case 'all':
                btn.textContent = t.all;
                break;
            case 'web':
                btn.textContent = t.web;
                break;
            case 'app':
                btn.textContent = t.app;
                break;
            case 'uiux':
                btn.textContent = t.uiux;
                break;
            case 'software':
                btn.textContent = t.software;
                break;
        }
    });
}

/* ============================================
   Language Toggle Click Handler
   ============================================ */
langToggle.addEventListener('click', () => {
    const newLang = currentLanguage === 'ne' ? 'en' : 'ne';
    switchLanguage(newLang);
});

/* ============================================
   Initialize Language on Page Load
   ============================================ */
function initializeLanguage() {
    switchLanguage(currentLanguage);
}

/* ============================================
   Loading Animation
   ============================================ */
window.addEventListener('load', () => {
    // Initialize language on page load
    initializeLanguage();
    
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1000);
});

/* ============================================
   Scroll Progress Indicator
   ============================================ */
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
});

/* ============================================
   Back To Top Button
   ============================================ */
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/* ============================================
   Theme Toggle (Dark/Light Mode)
   ============================================ */
// Check for saved theme preference or default to dark mode
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

/* ============================================
   Navbar Scroll Effect
   ============================================ */
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

/* ============================================
   Mobile Menu Toggle
   ============================================ */
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

/* ============================================
   Active Menu Highlight on Scroll
   ============================================ */
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

/* ============================================
   Smooth Scrolling
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

/* ============================================
   Particle Effect
   ============================================ */
function createParticles() {
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        
        particles.appendChild(particle);
    }
}

createParticles();

/* ============================================
   Typing Animation
   ============================================ */
let typingWords = CONFIG.translations[currentLanguage].hero.typing;

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = typingWords[wordIndex];
    
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % typingWords.length;
        typeSpeed = 500;
    }
    
    setTimeout(typeEffect, typeSpeed);
}

typeEffect();

/* ============================================
   Skill Progress Bar Animation
   ============================================ */
const skillProgressBars = document.querySelectorAll('.skill-progress');

function animateSkillBars() {
    skillProgressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        const rect = bar.getBoundingClientRect();
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            bar.style.width = progress + '%';
        }
    });
}

window.addEventListener('scroll', animateSkillBars);
animateSkillBars();

/* ============================================
   Counter Animation
   ============================================ */
const counters = document.querySelectorAll('.stat-number[data-count]');
let countersAnimated = false;

function animateCounters() {
    if (countersAnimated) return;
    
    const statsSection = document.querySelector('.statistics');
    if (!statsSection) return;
    
    const rect = statsSection.getBoundingClientRect();
    
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        countersAnimated = true;
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target + '+';
                }
            };
            
            updateCounter();
        });
    }
}

window.addEventListener('scroll', animateCounters);

/* ============================================
   Portfolio Filtering
   ============================================ */
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            const category = item.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                item.classList.remove('hidden');
                item.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

/* ============================================
   Certificate Modal
   ============================================ */
certViewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const cert = btn.getAttribute('data-cert');
        // In production, replace with actual certificate images
        modalImage.src = `assets/certificates/${cert}.jpg`;
        certModal.classList.add('active');
    });
});

modalClose.addEventListener('click', () => {
    certModal.classList.remove('active');
});

certModal.addEventListener('click', (e) => {
    if (e.target === certModal) {
        certModal.classList.remove('active');
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && certModal.classList.contains('active')) {
        certModal.classList.remove('active');
    }
});

/* ============================================
   Testimonials Carousel
   ============================================ */
let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');

// Create dots
testimonialCards.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.classList.add('carousel-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToTestimonial(index));
    testimonialDots.appendChild(dot);
});

const dots = document.querySelectorAll('.carousel-dot');

function goToTestimonial(index) {
    currentTestimonial = index;
    const scrollPosition = index * testimonialCards[0].offsetWidth;
    testimonialTrack.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

prevTestimonial.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
    goToTestimonial(currentTestimonial);
});

nextTestimonial.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    goToTestimonial(currentTestimonial);
});

// Auto-slide testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    goToTestimonial(currentTestimonial);
}, 5000);

// Update dots on scroll
testimonialTrack.addEventListener('scroll', () => {
    const scrollPosition = testimonialTrack.scrollLeft;
    const cardWidth = testimonialCards[0].offsetWidth;
    const index = Math.round(scrollPosition / cardWidth);
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
});

/* ============================================
   Contact Form Validation
   ============================================ */
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;
    const formData = new FormData(contactForm);
    const t = CONFIG.translations[currentLanguage].validation;
    
    // Reset errors
    document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error');
        group.querySelector('.form-error').textContent = '';
    });
    
    // Validate name
    const name = formData.get('name');
    if (name.trim().length < 2) {
        showError('name', t.nameRequired);
        isValid = false;
    }
    
    // Validate email
    const email = formData.get('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('email', t.emailInvalid);
        isValid = false;
    }
    
    // Validate subject
    const subject = formData.get('subject');
    if (subject.trim().length < 3) {
        showError('subject', t.subjectRequired);
        isValid = false;
    }
    
    // Validate message
    const message = formData.get('message');
    if (message.trim().length < 10) {
        showError('message', t.messageRequired);
        isValid = false;
    }
    
    if (isValid) {
        // In production, send form data to server
        alert(CONFIG.translations[currentLanguage].contact.successMessage);
        contactForm.reset();
    }
});

function showError(fieldName, message) {
    const field = document.getElementById(fieldName);
    const formGroup = field.closest('.form-group');
    const errorElement = formGroup.querySelector('.form-error');
    
    formGroup.classList.add('error');
    errorElement.textContent = message;
}

/* ============================================
   Social Media Deep Linking
   ============================================ */
function openSocialApp(platform, fallbackUrl) {
    let appUrl = '';
    
    switch (platform) {
        case 'facebook':
            appUrl = 'fb://profile';
            break;
        case 'instagram':
            appUrl = 'instagram://user';
            break;
        case 'youtube':
            appUrl = 'vnd.youtube://';
            break;
        case 'tiktok':
            appUrl = 'snssdk1233://';
            break;
        case 'whatsapp':
            appUrl = `whatsapp://send?phone=${CONFIG.personal.whatsapp}&text=Hy`;
            break;
        default:
            window.open(fallbackUrl, '_blank');
            return;
    }
    
    // Try to open app
    const start = Date.now();
    const timeout = setTimeout(() => {
        if (Date.now() - start < 2000) {
            window.open(fallbackUrl, '_blank');
        }
    }, 1000);
    
    window.location.href = appUrl;
    
    // Clear timeout if app opens successfully
    window.addEventListener('blur', () => {
        clearTimeout(timeout);
    }, { once: true });
}

// Add click handlers to social icons
document.querySelectorAll('[data-social]').forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = element.getAttribute('data-social');
        
        switch (platform) {
            case 'facebook':
                openSocialApp('facebook', CONFIG.social.facebook);
                break;
            case 'instagram':
                openSocialApp('instagram', CONFIG.social.instagram);
                break;
            case 'youtube':
                openSocialApp('youtube', CONFIG.social.youtube);
                break;
            case 'tiktok':
                openSocialApp('tiktok', CONFIG.social.tiktok);
                break;
            case 'whatsapp':
                openSocialApp('whatsapp', `https://wa.me/${CONFIG.personal.whatsapp}?text=Hy`);
                break;
            case 'github':
                window.open(CONFIG.social.github, '_blank');
                break;
            case 'linkedin':
                window.open(CONFIG.social.linkedin, '_blank');
                break;
            default:
                window.open(element.getAttribute('href'), '_blank');
        }
    });
});

// Replace email placeholders
document.querySelectorAll('a[href="mailto:EMAIL_ADDRESS"]').forEach(link => {
    link.href = `mailto:${CONFIG.personal.email}`;
    link.textContent = CONFIG.personal.email;
});

// WhatsApp button handler
document.querySelectorAll('[data-social="whatsapp"]').forEach(link => {
    link.href = `https://wa.me/${CONFIG.personal.whatsapp}?text=Hy`;
});

/* ============================================
   Resume Download
   ============================================ */
document.getElementById('resumeBtn').addEventListener('click', (e) => {
    e.preventDefault();
    // In production, replace with actual resume path
    window.open(CONFIG.assets.resume, '_blank');
});

/* ============================================
   Magnetic Button Effect
   ============================================ */
document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
    });
});

/* ============================================
   Parallax Effect
   ============================================ */
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    
    document.querySelectorAll('.shape').forEach((shape, index) => {
        const speed = (index + 1) * 0.1;
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

/* ============================================
   Mouse Interactive Effect on Hero
   ============================================ */
const hero = document.querySelector('.hero');

if (hero) {
    hero.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        
        document.querySelectorAll('.shape').forEach((shape, index) => {
            const factor = (index + 1) * 0.5;
            shape.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
        });
    });
}

/* ============================================
   Ripple Effect on Buttons
   ============================================ */
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            width: 100px;
            height: 100px;
            left: ${x - 50}px;
            top: ${y - 50}px;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

/* ============================================
   Intersection Observer for Animations
   ============================================ */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.glass-card, .skill-card, .service-card, .portfolio-card').forEach(el => {
    observer.observe(el);
});

/* ============================================
   Lazy Loading Images
   ============================================ */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

/* ============================================
   Performance: Debounce Function
   ============================================ */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/* ============================================
   Performance: Throttle Function
   ============================================ */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/* ============================================
   Optimize Scroll Events
   ============================================ */
const handleScroll = throttle(() => {
    // Scroll progress
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
    
    // Back to top button
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
    
    // Navbar scroll effect
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Active menu highlight
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
    
    // Skill bars animation
    animateSkillBars();
    
    // Counter animation
    animateCounters();
}, 100);

window.addEventListener('scroll', handleScroll);

/* ============================================
   Security: XSS Prevention
   ============================================ */
function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// Apply to form inputs
document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('blur', function() {
        this.value = escapeHTML(this.value);
    });
});

/* ============================================
   Service Worker Registration (Optional)
   ============================================ */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}

/* ============================================
   Console Welcome Message
   ============================================ */
console.log('%c Welcome to Himal Thapa Portfolio! ', 'background: linear-gradient(135deg, #00E5FF, #6C63FF); color: #050810; font-size: 16px; font-weight: bold; padding: 10px; border-radius: 5px;');
console.log('%c Built with ❤️ using HTML, CSS, and JavaScript ', 'color: #00FFA3; font-size: 12px;');

/* ============================================
   Initialize Everything
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all animations and interactions
    animateSkillBars();
    animateCounters();
    
    // Add fade-in class to body
    document.body.style.opacity = '1';
});

/* ============================================
   Error Handling
   ============================================ */
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.message);
});

/* ============================================
   End of Script
   ============================================ */
