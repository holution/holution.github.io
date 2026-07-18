/**
 * Main — Loading, nav, form, init
 */
(function () {
    'use strict';

    /* Loading screen */
    const loading = document.getElementById('loading');
    const bar = document.querySelector('.load-bar');
    let pct = 0;

    function tick() {
        pct += Math.random() * 20 + 8;
        if (pct > 100) pct = 100;
        if (bar) bar.style.width = pct + '%';
        if (pct < 100) {
            setTimeout(tick, 120 + Math.random() * 150);
        } else {
            setTimeout(() => loading?.classList.add('done'), 350);
        }
    }

    setTimeout(tick, 200);

    /* Hamburger */
    const ham = document.querySelector('.hamburger');
    const mob = document.querySelector('.mobile-menu');

    if (ham && mob) {
        ham.addEventListener('click', () => {
            ham.classList.toggle('active');
            mob.classList.toggle('active');
            document.body.style.overflow = mob.classList.contains('active') ? 'hidden' : '';
        });
    }

    /* Form validation */
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let ok = true;

            const fields = [
                { id: 'c-name', min: 2 },
                { id: 'c-email', regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
                { id: 'c-msg', min: 10 },
            ];

            fields.forEach(({ id, min, regex }) => {
                const el = document.getElementById(id);
                const g = el?.closest('.form-group');
                const val = el?.value?.trim() || '';
                const valid = regex ? regex.test(val) : val.length >= min;
                g?.classList.toggle('error', !valid);
                if (!valid) ok = false;
            });

            if (ok) {
                const btn = form.querySelector('.btn-submit');
                if (btn) {
                    btn.textContent = 'Sent ✓';
                    btn.style.background = '#059669';
                    setTimeout(() => {
                        btn.textContent = 'Send Message';
                        btn.style.background = '';
                        form.reset();
                    }, 2500);
                }
            }
        });

        form.querySelectorAll('input, textarea').forEach((el) => {
            el.addEventListener('input', () => el.closest('.form-group')?.classList.remove('error'));
        });
    }

    /* Year */
    const yr = document.getElementById('year');
    if (yr) yr.textContent = new Date().getFullYear();
})();
