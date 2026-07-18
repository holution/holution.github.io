/**
 * Scroll — progress bar, scroll-to-top, nav state, smooth anchors
 */
(function () {
    'use strict';

    const bar = document.getElementById('scroll-progress');
    const top = document.getElementById('scroll-top');
    const nav = document.getElementById('navbar');
    const links = document.querySelectorAll('.nav-link[href^="#"]');
    const sections = document.querySelectorAll('.section, #hero');

    function update() {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        const y = window.scrollY;

        if (bar) bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
        top?.classList.toggle('visible', y > 400);
        nav?.classList.toggle('scrolled', y > 40);

        let cur = '';
        sections.forEach((s) => { if (y >= s.offsetTop - 200) cur = s.id; });
        links.forEach((l) => {
            l.classList.toggle('active', l.getAttribute('href') === '#' + cur);
        });
    }

    let tick = false;
    window.addEventListener('scroll', () => {
        if (!tick) { requestAnimationFrame(() => { update(); tick = false; }); tick = true; }
    }, { passive: true });

    top?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    function closeMobile() {
        const m = document.querySelector('.mobile-menu');
        const h = document.querySelector('.hamburger');
        if (m?.classList.contains('active')) {
            m.classList.remove('active');
            h?.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    document.querySelectorAll('.nav-link[href^="#"], .mobile-menu .nav-link').forEach((l) => {
        l.addEventListener('click', (e) => {
            e.preventDefault();
            const t = document.querySelector(l.getAttribute('href'));
            if (t) {
                closeMobile();
                setTimeout(() => window.scrollTo({ top: t.offsetTop - 72, behavior: 'smooth' }), 100);
            }
        });
    });

    update();
})();
