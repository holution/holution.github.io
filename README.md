# Holution — Developer Portfolio

A modern, premium developer portfolio website built with **pure HTML5, CSS3, and Vanilla JavaScript** — no frameworks, no libraries.

![Status](https://img.shields.io/badge/status-live-brightgreen)
![Tech](https://img.shields.io/badge/tech-HTML%20%7C%20CSS%20%7C%20JS-blue)

---

## ✨ Features

- **Interactive SVG Character** — Eyes track cursor, auto-blink, idle floating, smile on hover proximity
- **GitHub API Integration** — Live repo data via `fetch()` with search, filter, and sort
- **Canvas Particle System** — Floating particles, connections, and periodic shooting stars
- **Custom Cursor** — Smooth-following dot + ring + glow with context-aware hover states
- **20+ Animations** — Scroll reveals, parallax, card tilt, magnetic buttons, typing effect, counters
- **Loading Screen** — Animated progress bar with fade-out transition
- **Glassmorphism Design** — Frosted glass navbar, project cards, and UI elements
- **Dark Futuristic Theme** — Deep blacks, electric blues, and cyan glow accents
- **Fully Responsive** — Desktop, tablet, and mobile with hamburger menu
- **Accessibility** — `prefers-reduced-motion` support, semantic HTML, ARIA labels

---

## 🎨 Design System

| Token      | Value                      |
| ---------- | -------------------------- |
| Background | `#09090B`                  |
| Surface    | `#111827`                  |
| Primary    | `#3B82F6`                  |
| Secondary  | `#8B5CF6`                  |
| Accent     | `#06B6D4` (Cyan Glow)     |
| Text       | `#FFFFFF` / `#94A3B8`      |
| Font       | Inter + JetBrains Mono     |

---

## 📁 Project Structure

```
/
├── index.html            # Main HTML (all sections)
├── css/
│   ├── style.css         # Design tokens, components, layout
│   ├── animation.css     # @keyframes, reveal classes, effects
│   └── responsive.css    # Tablet & mobile breakpoints
├── js/
│   ├── particles.js      # Canvas particles + shooting stars
│   ├── character.js      # Interactive SVG character
│   ├── cursor.js         # Custom cursor system
│   ├── scroll.js         # Progress bar, scroll-to-top, nav
│   ├── animation.js      # IntersectionObserver, tilt, parallax
│   ├── github.js         # GitHub API fetch + render
│   └── main.js           # Loading screen, form, typing effect
└── README.md
```

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/holution/HolutionWeb.git
   cd HolutionWeb
   ```

2. **Open in browser**
   ```bash
   open index.html
   ```
   Or use any local server (e.g., VS Code Live Server, `python -m http.server`).

3. **Customise**
   - Update `GITHUB_USERNAME` in `js/github.js`
   - Edit hero text, about section, and social links in `index.html`
   - Modify skills grid in `index.html`
   - Adjust colours via CSS custom properties in `css/style.css`

---

## 🛠️ Technologies

- **HTML5** — Semantic structure
- **CSS3** — Custom properties, Flexbox, Grid, `backdrop-filter`, `@keyframes`
- **JavaScript (ES6+)** — `fetch()`, `IntersectionObserver`, `requestAnimationFrame`, Canvas API

**Zero dependencies.** No build step. No npm. Just open `index.html`.

---

## 📄 License

GPL © Holution
