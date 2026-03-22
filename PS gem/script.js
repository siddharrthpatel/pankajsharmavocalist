// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if(mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('is-active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    mobileMenu.classList.remove('is-active');
    navMenu.classList.remove('active');
}));

// Scroll Animations
const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));