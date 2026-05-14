document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // --- Loading Screen ---
    const loader = document.getElementById('loader');
    const loaderContent = document.querySelector('.loader-content');
    
    // Immediately show loader content
    if (loaderContent) {
        setTimeout(() => {
            loaderContent.classList.add('visible');
        }, 100);
    }

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                // Trigger hero animation after loader is gone
                document.querySelectorAll('.hero .reveal-up').forEach(el => {
                    el.classList.add('visible');
                });
                // Also trigger floating widget
                const widget = document.querySelector('.whatsapp-widget');
                if (widget) widget.classList.add('visible');
            }, 800);
        }, 1800); // Cinematic duration
    });

    // --- Reveal on Scroll (Intersection Observer) ---
    const revealOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // If it's a stagger container, find children and animate them
                if (entry.target.classList.contains('stagger-reveal')) {
                    const children = entry.target.querySelectorAll('.reveal-up');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('visible');
                        }, index * 150);
                    });
                }
                revealObserver.unobserve(entry.target);
            }
        });
    }, revealOptions);

    document.querySelectorAll('.reveal-up, .stagger-reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // --- Smooth Scroll Anchor Fix ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
