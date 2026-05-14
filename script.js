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
            // Step 1: Start the slow fade out
            loader.style.opacity = '0';
            loader.style.pointerEvents = 'none'; 
            
            setTimeout(() => {
                // Step 2: Only after the fade is done, remove loader and trigger site
                loader.style.display = 'none';
                
                document.querySelectorAll('.hero .reveal-up').forEach(el => {
                    el.classList.add('visible');
                });
                // Also trigger floating widget
                const widget = document.querySelector('.whatsapp-widget');
                if (widget) widget.classList.add('visible');
            }, 1500); // The precise duration of the CSS transition
        }, 2200); 
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

    // --- The Master Smooth Scroll Engine ---
    // Manually handles frame-by-frame scrolling for maximum stability and premium feel.
    function animateScroll(targetId) {
        const target = document.querySelector(targetId);
        if (!target) return;

        const navHeight = window.innerWidth <= 768 ? 60 : 80;
        const targetRect = target.getBoundingClientRect();
        const absoluteTargetTop = targetRect.top + window.pageYOffset;
        
        // Surgical Top-Landing
        const targetPosition = Math.max(absoluteTargetTop - navHeight, 0);
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1200;
        let start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const t = Math.min(progress / duration, 1);
            const ease = 1 - Math.pow(1 - t, 5);
            
            window.scrollTo(0, startPosition + distance * ease);

            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;
            
            e.preventDefault(); // Stop simulator resets
            animateScroll(targetId);
        });
    });
});
