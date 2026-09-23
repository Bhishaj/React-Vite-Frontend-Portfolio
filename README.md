# Bhishaj Kumar Sharma — Portfolio Website

A modern, single-page portfolio built with **React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion**, covering every section of a professional Network Security / Zero Trust engineer's portfolio: Hero, About, Skills, Experience, Projects, Security Labs, Certifications, Education, Technical Blog, Resume, and Contact.

![tech](https://img.shields.io/badge/React-18-61DAFB?logo=react) ![tech](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript) ![tech](https://img.shields.io/badge/Tailwind-3-38BDF8?logo=tailwindcss) ![tech](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)

---

## ✨ Features

- **Component-based architecture** — every section is its own component, all content lives in typed `src/data/*.ts` files so you never touch JSX to update your bio, skills, or experience.
- **Dark, cybersecurity-themed UI** — navy/black palette with cyan accent glow, subtle grid background, and glass-morphism cards.
- **Scroll-spy navigation** — the navbar highlights the active section automatically using `IntersectionObserver` (no router needed).
- **Framer Motion micro-animations** — fade/slide-in on scroll, floating badge, animated mobile menu.
- **Fully responsive** — mobile hamburger menu, responsive grids everywhere.
- **Zero-backend contact form** — works instantly via a `mailto:` fallback; swap in Formspree/EmailJS/Netlify Forms in 5 minutes (instructions below).
- **Resume section** — inline PDF viewer + "View Online" + "Download PDF", both driven by a single file.
- **Type-safe** — written entirely in TypeScript with shared interfaces in `src/types`.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node)

### Install & Run
```bash
# 1. Extract this project, then from inside the folder:
npm install

# 2. Start the local dev server (hot reload)
npm run dev
# → open the URL it prints, usually http://localhost:5173

# 3. Build for production
npm run build
# → outputs static files to /dist

# 4. Preview the production build locally
npm run preview
```

That's it — no separate backend, no database. It's a fully static site once built.

---

## 🖊️ How to Personalize (do this first!)

Everything you need to edit lives in **`src/data/`** — you should not need to touch component files at all for basic personalization.

| File | What to edit |
|---|---|
| `src/data/profile.ts` | Your name, title, tagline, email, resume path, LinkedIn/GitHub links, summary, specialization, career focus |
| `src/data/skills.ts` | Technical skill categories and items |
| `src/data/experience.ts` | Work history, responsibilities, achievements, technologies |
| `src/data/projects.ts` | Featured + other projects, tech stack, features, GitHub/demo links |
| `src/data/labs.ts` | Security lab categories and exercises |
| `src/data/certifications.ts` | Certifications with status: `completed` / `in-progress` / `planned` |
| `src/data/education.ts` | Degrees, institutions, coursework |
| `src/data/blog.ts` | Technical notes / knowledge posts (expandable cards) |

### Assets to replace
| Path | Purpose |
|---|---|
| `public/assets/resume.pdf` | **Replace this placeholder with your real resume PDF.** The Hero button, Resume section, and inline viewer all read from this one file. |
| `public/assets/hero-bg.jpg` | Hero section background image |
| `public/assets/badge-icon.png` | Decorative floating shield badge in the Hero |
| `public/assets/ztna-architecture.png` | Architecture diagram shown in the Featured Project — swap for your own project's diagram/screenshot |
| `public/favicon.svg` | Browser tab icon |

### Things marked `TODO` that you must fill in
Search the codebase for `TODO` — these are placeholders I couldn't fill in for you (real email address, LinkedIn/GitHub URLs, GitHub repo links for projects, diploma details, credential URLs for certifications). They're concentrated almost entirely in `src/data/profile.ts`, `src/data/certifications.ts`, `src/data/education.ts` and `src/data/projects.ts`.

> ⚠️ **Security note carried over from your Zero Trust SWG project**: only add a public GitHub link for the `ztna-swg` project once secrets have been fully removed from `application.properties` **and** git history, and rotated as needed. Keep `githubUrl: ''` (private) until then.

---

## 🎨 Customizing the Look

- **Colors**: edit the `navy` and `cyan` palette in `tailwind.config.js`.
- **Fonts**: `Inter` (body) and `JetBrains Mono` (headings/labels) are loaded via Google Fonts in `index.html` — swap the `<link>` and `fontFamily` in `tailwind.config.js` to change them.
- **Section order**: reorder the component list in `src/App.tsx`.
- **Add a new section**: create a component in `src/components/sections/`, add a matching `<section id="...">`, then add it to `navLinks` in `src/data/profile.ts` and to `src/App.tsx`.

---

## 📬 Wiring the Contact Form to a Real Inbox

By default, submitting the contact form opens the visitor's email client with a pre-filled message (no backend required). To capture messages directly into an inbox/dashboard instead, pick one:

1. **[Formspree](https://formspree.io/)** (easiest, free tier available)
   ```tsx
   // In src/components/sections/Contact.tsx, replace handleSubmit with:
   const handleSubmit = async (e: FormEvent) => {
     e.preventDefault()
     await fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
       body: JSON.stringify(form),
     })
     setSent(true)
   }
   ```
2. **[EmailJS](https://www.emailjs.com/)** — send straight from the browser with an API key, no server needed.
3. **Netlify Forms** — if you deploy on Netlify, just add `data-netlify="true"` to the `<form>` tag and Netlify handles the rest automatically.

---

## 🌐 Deploying for Free

Any of these work great for a static Vite build:

### Vercel (recommended, zero config)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop the /dist folder onto https://app.netlify.com/drop
```

### GitHub Pages
```bash
npm run build
# Push the contents of /dist to a `gh-pages` branch, or use the
# "gh-pages" npm package / GitHub Actions to automate it.
```

Once deployed, put the live URL front-and-center on your LinkedIn and resume — it's a strong signal for recruiters evaluating Network Security / Zero Trust candidates.

---

## 🗂️ Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── assets/                 # images + resume.pdf (replace these)
├── src/
│   ├── main.tsx                # React entry point
│   ├── App.tsx                 # Assembles all sections in order
│   ├── index.css               # Tailwind + global styles
│   ├── data/                   # ← EDIT THESE to personalize content
│   ├── types/                  # Shared TypeScript interfaces
│   ├── hooks/
│   │   └── useActiveSection.ts # Scroll-spy navigation logic
│   └── components/
│       ├── layout/              # Navbar, Footer
│       ├── sections/            # Hero, About, Skills, Experience, Projects,
│       │                        # Labs, Certifications, Education, Blog,
│       │                        # Resume, Contact
│       └── ui/                  # Reusable Card, Badge, Button, Timeline, etc.
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Vite](https://vitejs.dev/) | Build tool / dev server |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon set (Font Awesome) |

---

Built for **Bhishaj Kumar Sharma** — Network Security Engineer specializing in Zero Trust, SASE, and Zscaler.
