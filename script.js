// =========================
// Triplepower - Main Script
// =========================

document.addEventListener('DOMContentLoaded', function () {

    // ---- Smooth scroll for anchor links ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ---- Scroll effect on navbar ----
    // const navContainer = document.querySelector('.nav-container');
    // if (navContainer) {
    //     window.addEventListener('scroll', function () {
    //         if (window.pageYOffset > 50) {
    //             navContainer.style.background = 'rgba(10, 15, 30, 0.92)';
    //             navContainer.style.boxShadow = '0 8px 30px rgba(0,0,0,0.35)';
    //         } else {
    //             navContainer.style.background = 'rgba(15, 23, 42, 0.22)';
    //             navContainer.style.boxShadow = '0 12px 32px rgba(2, 6, 23, 0.30)';
    //         }
    //     });
    // }

    // ---- Intersection Observer: fade-in cards ----
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedEls = document.querySelectorAll('.project-card, .skill-category, .hero-left, .hero-right, .ai-content, .about-content');
    animatedEls.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(28px)';
        el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
        observer.observe(el);
    });

});
