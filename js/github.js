/**
 * GitHub API — load from local data, render minimal list
 */
(function () {
    'use strict';

    const grid = document.getElementById('projects-grid');
    const search = document.getElementById('project-search');
    const filterWrap = document.getElementById('lang-filters');

    // Use the globally loaded data
    let repos = window.PROJECTS_DATA || [];
    let filter = 'all';
    let query = '';

    function card(r) {
        return `
        <div class="project-item reveal">
            <div class="project-item-left">
                <a href="${r.html_url}" target="_blank" rel="noopener" class="project-name">${r.name}</a>
                <p class="project-desc">${r.description || 'No description.'}</p>
            </div>
            <div class="project-meta">
                ${r.language ? `<span>${r.language}</span>` : ''}
                <span>★ ${r.stargazers_count}</span>
            </div>
        </div>`;
    }

    function render() {
        if (!grid) return;
        let list = [...repos];
        if (filter !== 'all') list = list.filter(r => r.language?.toLowerCase() === filter);
        if (query) {
            const q = query.toLowerCase();
            list = list.filter(r => r.name?.toLowerCase().includes(q) || r.description?.toLowerCase().includes(q));
        }
        
        list.sort((a, b) => b.stargazers_count - a.stargazers_count);

        if (!list.length) {
            grid.innerHTML = '<div style="padding:2rem 0;color:var(--text-muted)">No projects found.</div>';
            return;
        }
        grid.innerHTML = list.map(card).join('');
        grid.querySelectorAll('.reveal').forEach(el => window.Anim?.observe(el));
    }

    function buildFilters() {
        if (!filterWrap) return;
        const langs = [...new Set(repos.map(r => r.language).filter(Boolean))].sort();
        langs.slice(0, 4).forEach(l => {
            const b = document.createElement('button');
            b.className = 'filter-btn';
            b.textContent = l;
            b.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(x => x.classList.remove('active'));
                filter = filter === l.toLowerCase() ? 'all' : l.toLowerCase();
                (filter === 'all' ? document.querySelector('[data-f="all"]') : b)?.classList.add('active');
                render();
            });
            filterWrap.appendChild(b);
        });
    }

    function setStats() {
        const set = (id, v) => {
            const el = document.getElementById(id);
            if (el) { el.dataset.target = v; el.textContent = '0'; window.Anim?.counter(el); }
        };
        set('s-repos', repos.length);
        set('s-stars', repos.reduce((s, r) => s + r.stargazers_count, 0));
        set('s-forks', repos.reduce((s, r) => s + r.forks_count, 0));
    }

    function load() {
        if (!repos.length) {
            if (grid) grid.innerHTML = '<div style="padding:2rem 0;color:var(--text-muted)">No projects configured.</div>';
            return;
        }
        buildFilters();
        setStats();
        render();
    }

    let timer;
    search?.addEventListener('input', e => { clearTimeout(timer); timer = setTimeout(() => { query = e.target.value; render(); }, 250); });
    document.querySelector('[data-f="all"]')?.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(x => x.classList.remove('active'));
        document.querySelector('[data-f="all"]')?.classList.add('active');
        filter = 'all'; render();
    });

    load();
})();
