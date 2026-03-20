//Dynamic Footer Year
document.getElementById("year").textContent = new Date().getFullYear();

/* ==========================================
   Global Variables & Initialization
   ========================================== */
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const header = document.querySelector('.header');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/* ==========================================
   Custom Cursor Logic
   ========================================== */
window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Add slight delay to outline for smoother effect
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Interactive element hover effects for cursor
const interactiveElements = document.querySelectorAll('a, button, .interactive');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorOutline.style.width = '60px';
        cursorOutline.style.height = '60px';
        cursorOutline.style.backgroundColor = 'var(--primary-color-glow)';
    });
    el.addEventListener('mouseleave', () => {
        cursorOutline.style.width = '40px';
        cursorOutline.style.height = '40px';
        cursorOutline.style.backgroundColor = 'transparent';
    });
});

/* ==========================================
   Theme Toggle Logic
   ========================================== */
// Check local storage for theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = 'dark';

    if (currentTheme === 'dark') {
        newTheme = 'light';
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

/* ==========================================
   Mobile Navigation
   ========================================== */
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    const icon = navToggle.querySelector('i');
    if (navMenu.classList.contains('show')) {
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
    }
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
        navToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
    });
});

/* ==========================================
   Header Scroll Effect
   ========================================== */
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

/* ==========================================
   Project Filtering
   ========================================== */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.classList.remove('hide');
                // GSAP pop-in animation
                gsap.fromTo(card,
                    { scale: 0.8, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
                );
            } else {
                card.classList.add('hide');
            }
        });
    });
});

document.querySelectorAll('.automation-card').forEach(card => {
    card.style.opacity = 1;
    card.style.transform = 'none';
});
/* ==========================================
   GSAP Scroll Animations
   ========================================== */
// Hero Animations
gsap.from('.hero-title .greeting', { opacity: 0, y: 30, duration: 1, delay: 0.2, clearProps: "all" });
gsap.from('.hero-title .name', { opacity: 0, y: 50, duration: 1, delay: 0.4, clearProps: "all" });
gsap.from('.hero-subtitle', { opacity: 0, y: 30, duration: 1, delay: 0.6, clearProps: "all" });
gsap.from('.hero-desc', { opacity: 0, y: 30, duration: 1, delay: 0.8, clearProps: "all" });
gsap.from('.hero-cta', { opacity: 0, y: 30, duration: 1, delay: 1, clearProps: "all" });

// Section Titles
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        clearProps: "all"
    });
});

// About Section
gsap.from('.about-text p', {
    scrollTrigger: {
        trigger: '.about-grid',
        start: "top 75%"
    },
    opacity: 0,
    x: -50,
    duration: 1,
    stagger: 0.1,
    clearProps: "all"
});

gsap.from('.stat-item', {
    scrollTrigger: {
        trigger: '.about-stats',
        start: "top 85%"
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.1,
    clearProps: "all"
});

gsap.from('.image-wrapper', {
    scrollTrigger: {
        trigger: '.about-image',
        start: "top 75%"
    },
    opacity: 0,
    x: 50,
    duration: 1,
    rotation: 5,
    clearProps: "all"
});

// Skills Section
gsap.from('.skill-category', {
    scrollTrigger: {
        trigger: '.skills-container',
        start: "top 80%"
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.1,
    clearProps: "all"
});

// Projects Section
gsap.from('.project-card', {
    scrollTrigger: {
        trigger: '.projects-grid',
        start: "top 80%"
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.1,
    clearProps: "all"
});

// Automations Section
gsap.from('.automation-card', {
    scrollTrigger: {
        trigger: '#automations',
        start: "top 85%",
        toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.1,
    clearProps: "all"
});


// Timeline Section
gsap.from('.timeline-item', {
    scrollTrigger: {
        trigger: '.timeline',
        start: "top 80%"
    },
    opacity: 0,
    x: -50,
    duration: 0.8,
    stagger: 0.3,
    clearProps: "all"
});

// Contact Section
gsap.from('.contact-info', {
    scrollTrigger: {
        trigger: '.contact-grid',
        start: "top 80%"
    },
    opacity: 0,
    x: -50,
    duration: 1,
    clearProps: "all"
});

gsap.from('.contact-form', {
    scrollTrigger: {
        trigger: '.contact-grid',
        start: "top 80%"
    },
    opacity: 0,
    x: 50,
    duration: 1,
    clearProps: "all"
});

document.querySelectorAll('.expand-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const details = btn.nextElementSibling;

        if (details.style.maxHeight) {
            details.style.maxHeight = null;
            btn.textContent = "View All Workflows";
        } else {
            details.style.maxHeight = details.scrollHeight + "px";
            btn.textContent = "Hide Workflows";
        }
    });
});

const counters = document.querySelectorAll(".stat-num");

const startCounter = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute("data-val");
        let count = 0;

        const update = () => {
            const increment = target / 50;

            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count) + "+";;
                setTimeout(update, 30);
            } else {
                counter.innerText = target + "+";;
            }
        };

        update();
    });
};

// Run when section is visible
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounter();
            observer.disconnect(); // run once
        }
    });
});

observer.observe(document.querySelector(".about-stats"));

window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});


ScrollTrigger.refresh();
