/**
 * Animations — IntersectionObserver reveals, counters
 */
(function () {
    'use strict';

    /* Scroll reveal */
    const obs = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
            if (e.isIntersecting) { e.target.classList.add('active'); obs.unobserve(e.target); }
        }),
        { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => obs.observe(el));

    /* Counter */
    const cObs = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
            if (e.isIntersecting) { countUp(e.target); cObs.unobserve(e.target); }
        }),
        { threshold: 0.5 }
    );

    document.querySelectorAll('.counter').forEach((c) => cObs.observe(c));

    function countUp(el) {
        const target = parseInt(el.dataset.target, 10) || 0;
        const start = performance.now();
        const dur = 1500;
        (function step(now) {
            const p = Math.min((now - start) / dur, 1);
            el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target);
            if (p < 1) requestAnimationFrame(step); else el.textContent = target;
        })(start);
    }

    /* Public */
    window.Anim = {
        observe: (el) => obs.observe(el),
        counter: (el) => cObs.observe(el),
    };
})();
