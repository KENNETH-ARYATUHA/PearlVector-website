# PearlVector Website — Complete Build Guide (Copy & Paste)

This is a start-to-finish, copy-and-paste guide to building the PearlVector
company website yourself: React + Vite + Tailwind CSS, one page, ten
sections, front-end only. Every command and every file's full code is here,
in the exact order you'll type/create them.

**How to use this guide:** work top to bottom. Each "Step" is either a
terminal command (run it) or a file (create it, then paste the code block
under it). Don't skip steps — later files import things created in earlier
ones.

---

## 0. Before you start

Install these once, if you don't already have them:

1. **Node.js** (version 18 or newer) — download from https://nodejs.org
   Check it's installed:
   ```bash
   node -v
   npm -v
   ```
2. **Git** — download from https://git-scm.com
   Check it's installed:
   ```bash
   git --version
   ```
3. **A code editor** — VS Code (https://code.visualstudio.com) is a good free choice.
4. **A GitHub account** — https://github.com/join
5. **A Vercel account** — https://vercel.com/signup (you can sign up with GitHub)
6. **Your logo file** — have `peralvector_Logo.jpg` somewhere you can find it
   (e.g. your Desktop or Downloads folder). You'll copy it into the project
   in Step 6.

---

## 1. Create the project folder

Open your terminal, go to wherever you keep your projects (e.g. `Desktop` or
`Documents`), and run:

```bash
cd Desktop
npm create vite@latest pearlvector-website -- --template react
```

When it finishes, move into the new folder and install the base packages:

```bash
cd pearlvector-website
npm install
```

At this point you have a working (blank) React app. Confirm it runs:

```bash
npm run dev
```

Open the link it prints (usually `http://localhost:5173`) — you should see
the default Vite + React starter page. Stop the server with `Ctrl + C` once
you've confirmed it, then continue.

---

## 2. Install Tailwind CSS and the icon library

Still inside the `pearlvector-website` folder, run:

```bash
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

This creates two new files for you automatically: `tailwind.config.js` and
`postcss.config.js`. You'll replace the contents of `tailwind.config.js` in
the next step.

Now install the icon library the site uses for all its icons:

```bash
npm install lucide-react
```

---

## 3. Configure Tailwind — `tailwind.config.js`

Open `tailwind.config.js` (it already exists — created in Step 2) and
**replace its entire contents** with this. This is where the brand colors
(navy, green, "pearl" off-white) and fonts are defined — every component
pulls its colors from here.

```js
/** @type {import('tailwindcss').Config} */
export default {
  // Tell Tailwind which files to scan for class names so it can
  // generate the smallest possible CSS bundle.
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette, lifted directly from the PearlVector logo/poster:
        // deep navy + emerald green, bridged by a "pearl" off-white.
        navy: {
          DEFAULT: "#0B2A4A", // primary brand navy (headings, header bg)
          dark: "#071A30",    // darker navy for footers / deep sections
          light: "#123A63",   // lighter navy for cards/hovers
        },
        emerald: {
          DEFAULT: "#12703F", // primary brand green (CTAs, accents)
          light: "#1E8F52",
          dark: "#0B4D2B",
        },
        pearl: {
          DEFAULT: "#F6F3EC", // warm pearl-white background
          dim: "#EDE9DE",
          line: "#E1DCCC",
        },
        ink: "#0F1B24", // near-black text color, softer than pure black
      },
      fontFamily: {
        // Display face: geometric + techy, used sparingly for headings.
        display: ["'Space Grotesk'", "sans-serif"],
        // Body face: neutral, highly legible workhorse.
        body: ["'Inter'", "sans-serif"],
      },
      backgroundImage: {
        // The signature gradient reused across the site (buttons, dividers,
        // placeholder blocks) -- it mirrors the two-tone "V" in the logo.
        "brand-gradient": "linear-gradient(135deg, #0B2A4A 0%, #12703F 100%)",
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(11, 42, 74, 0.25)",
      },
    },
  },
  plugins: [],
};
```

---

## 4. Check `postcss.config.js`

This file was also auto-created in Step 2 — open it and confirm it looks
like this (no changes needed, just verify):

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

## 5. Set up `index.html`

Open `index.html` in the project's root folder and **replace its entire
contents** with this. This adds the page title, a description for search
engines, and loads the two Google Fonts the design uses (Space Grotesk for
headings, Inter for body text).

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/jpeg" href="/favicon.jpg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Basic SEO metadata -->
    <title>PearlVector | Digital Solutions for Africa</title>
    <meta
      name="description"
      content="PearlVector is a technology company delivering innovative, reliable and affordable digital solutions — AI, software, mobile apps, cybersecurity, cloud and more — that solve real African challenges."
    />

    <!-- Google Fonts: Space Grotesk (display) + Inter (body) -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## 6. Add your logo and favicon

1. In the project, create a new folder path: `src/assets/images/`
2. Copy your logo file into it and rename it to **`logo.jpg`**, so the
   final path is:
   ```
   src/assets/images/logo.jpg
   ```
3. Also copy the same logo file into the `public/` folder and rename it to
   **`favicon.jpg`**, so the final path is:
   ```
   public/favicon.jpg
   ```
4. Delete the default Vite files you no longer need:
   ```bash
   rm public/favicon.svg
   rm src/assets/react.svg
   ```
   (On Windows, just delete those two files in File Explorer instead.)

---

## 7. Global styles — `src/index.css`

Open `src/index.css` and **replace its entire contents** with this. This is
where Tailwind is switched on, plus a few small global rules (smooth
scrolling for the nav links, visible keyboard focus rings, and respecting
"reduce motion" accessibility settings).

```css
/* ------------------------------------------------------------------ */
/* Tailwind directives -- these get expanded into the full utility CSS */
/* ------------------------------------------------------------------ */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ------------------------------------------------------------------ */
/* Small set of global, hand-written styles that sit "below" Tailwind */
/* ------------------------------------------------------------------ */
html {
  scroll-behavior: smooth; /* smooth in-page jumps for the nav links */
}

body {
  @apply bg-pearl text-ink font-body antialiased;
}

h1, h2, h3, h4 {
  @apply font-display;
}

/* Respect users who have asked their OS to reduce motion */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Visible keyboard focus ring everywhere (accessibility) */
a:focus-visible,
button:focus-visible {
  outline: 2px solid #12703F;
  outline-offset: 3px;
}
```

---

## 8. App entry point — `src/main.jsx`

Open `src/main.jsx` and **replace its entire contents** with this. This is
the file that actually mounts your React app onto the page.

```jsx
// Entry point: mounts the <App /> component into the #root div in index.html
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

## 9. Site content — `src/data/content.js`

This is the most important file to understand: **all the text on the
site** — nav links, the 10 services, industries, team members, the vision
and mission statements, and contact details — lives here in one place.
Every component below just reads from this file. If you only ever edit one
file to update the site later, it'll be this one.

Create a new folder `src/data/`, then inside it create a new file called
`content.js` with this content:

```js
// ------------------------------------------------------------------------
// Central place for site copy & structured content.
// Editing THIS file is usually all you need to do to update text across
// the whole site -- components just map over these arrays.
// ------------------------------------------------------------------------

import {
  GraduationCap,
  Home,
  BrainCircuit,
  Laptop,
  Smartphone,
  Globe,
  Cloud,
  ShieldCheck,
  Glasses,
  MessagesSquare,
  Lightbulb,
  ShieldHalf,
  Users,
  TrendingUp,
  HeartPulse,
  Sprout,
  Building2,
  Landmark,
  Camera,
  Bus,
  Banknote,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "What We Do", href: "#services" },
  { label: "Why PearlVector", href: "#why-us" },
  { label: "Vision & Mission", href: "#vision-mission" },
  { label: "Industries", href: "#industries" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

// The four "trust pill" badges shown under the hero.
export const TRUST_POINTS = [
  { icon: Lightbulb, label: "Innovative Solutions" },
  { icon: ShieldHalf, label: "Reliable & Secure" },
  { icon: Users, label: "Client Focused" },
  { icon: TrendingUp, label: "Impact Driven" },
];

// "What We Do" -- the ten service lines from the PearlVector brand poster.
export const SERVICES = [
  {
    icon: GraduationCap,
    title: "Education Tech",
    description:
      "School management systems, learning management platforms, and examination & attendance solutions.",
  },
  {
    icon: Home,
    title: "Property Tech",
    description:
      "Hostel management, smart rentals, and property analytics for landlords and estate managers.",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "AI chatbots, computer vision, predictive analytics, and business intelligence tools.",
  },
  {
    icon: Laptop,
    title: "Business Software",
    description:
      "ERP systems, HR platforms, inventory management, accounting, and custom business applications.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Android & iOS apps for healthcare, agriculture, education, transport, tourism, and more.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Responsive websites, e-commerce platforms, booking systems, and government portals.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Cloud migration, hosting, API development, and scalable database solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Security audits, penetration testing, and user awareness training for organizations of any size.",
  },
  {
    icon: Glasses,
    title: "Virtual Reality",
    description:
      "Immersive VR experiences for training, education, simulation, tourism, and real estate.",
  },
  {
    icon: MessagesSquare,
    title: "Digital Consulting",
    description:
      "Helping organizations digitize processes, modernize workflows, and achieve operational excellence.",
  },
];

// "Why Choose PearlVector" checklist.
export const WHY_US = [
  "Deep understanding of Africa's challenges and opportunities",
  "Cutting-edge technologies and best practices",
  "Scalable, secure and cost-effective solutions",
  "Passionate team committed to your success",
];

// Industries served -- icon + label, mirrors the poster's industry strip.
export const INDUSTRIES = [
  { icon: GraduationCap, label: "Education" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Sprout, label: "Agriculture" },
  { icon: Building2, label: "Real Estate" },
  { icon: Landmark, label: "Government" },
  { icon: Camera, label: "Tourism" },
  { icon: Bus, label: "Transport" },
  { icon: Banknote, label: "Finance" },
];

// Founding / core team. Update names, roles, or add a `photo` key (an
// imported image) once real headshots are available.
export const TEAM = [
  {
    name: "Aryatuha Kenneth",
    role: "Co-Founder",
    title: "Full-Stack Developer | AI & Machine Learning Practitioner",
  },
  {
    name: "Openy Martin",
    role: "Co-Founder",
    title: "Cybersecurity & Network Administrator",
  },
  {
    name: "Kulabako Arnold Odongo",
    role: "Co-Founder",
    title: "Systems Administrator",
  },
  {
    name: "Ashemeza Rabecca",
    role: "Team Member",
    title: "Full-Stack Developer",
  },
];

// Vision: newly proposed -- describes the long-term future PearlVector
// is working toward.
export const VISION =
  "A digitally empowered Africa where every business, institution and community — from a rural school to a national ministry — runs on secure, intelligent, homegrown technology.";

// Mission: revised from the original poster copy. The original read:
// "To design, develop and deploy scalable digital technologies that
// improve lives, empower businesses and accelerate sustainable
// development across Africa."
// The version below keeps that intent but names HOW PearlVector does it
// (its actual service lines) and WHO it serves, making the statement more
// concrete and distinct from a generic tech-company mission.
export const MISSION =
  "We design, build and support secure, scalable digital solutions — spanning AI, software, mobile apps, cloud and cybersecurity — that solve real African problems and give businesses, institutions and communities the confidence to grow.";

export const CONTACT = {
  phone: "+256 749 537 430",
  email: "info@pearlvector.com",
  website: "www.pearlvector.com",
  location: "Kampala, Uganda",
  socials: [
    { label: "Facebook", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Twitter / X", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
  ],
};
```

**A note on the Vision and Mission statements above:** the original poster
only had a Mission line. This guide adds a new **Vision** statement, and
lightly revises the Mission to name PearlVector's actual service lines
(AI, software, mobile, cloud, cybersecurity) instead of staying generic.
Both are just plain strings in this file — change the wording any time.

---

## 10. Components

Create a new folder `src/components/`. You'll create ten files inside it,
one at a time. Order doesn't matter for creation, but it's listed here in
the order each one appears on the page.

### 10.1 `src/components/ImagePlaceholder.jsx`

This is a small reusable component used **everywhere** a real photo will
eventually go (hero image, team photos, industry photos). Instead of a
broken image link, it shows a styled brand-colored block with a label, so
the site always looks finished. Later, once you have real photos, you
replace `<ImagePlaceholder label="..." />` with a normal `<img src={...} />`.

```jsx
import { ImageIcon } from "lucide-react";

/**
 * ImagePlaceholder
 * -----------------
 * A stand-in for real photography. Every spot on the site that should
 * eventually hold a client photo (hero shot, team headshots, industry
 * photos, etc.) uses this component instead of a hard-coded <img>.
 *
 * WHY a component instead of a broken <img src="team-1.jpg">?
 *  - It never 404s, so the site always looks finished during review.
 *  - It's styled with the brand gradient, so the "gaps" still look
 *    intentional rather than like missing assets.
 *  - Swapping in real photos later is a one-line change per usage:
 *      replace <ImagePlaceholder label="..." /> with <img src="..." />
 *
 * Props:
 *  - label:      short caption describing what image belongs here
 *  - className:  extra Tailwind classes (controls size/shape from the parent)
 *  - rounded:    Tailwind rounding class, defaults to "rounded-2xl"
 */
export default function ImagePlaceholder({
  label = "Image placeholder",
  className = "",
  rounded = "rounded-2xl",
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 bg-brand-gradient text-pearl/90 overflow-hidden ${rounded} ${className}`}
      role="img"
      aria-label={label}
    >
      {/* Faint circuit-dot pattern in the corner, echoing the logo's motif */}
      <svg
        className="absolute -right-4 -top-4 h-24 w-24 opacity-20"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="10" cy="10" r="4" fill="currentColor" />
        <circle cx="30" cy="10" r="2" fill="currentColor" />
        <path d="M10 10 L10 30 L30 50" stroke="currentColor" strokeWidth="2" />
      </svg>

      <ImageIcon className="h-7 w-7 opacity-80" strokeWidth={1.5} />
      <span className="px-4 text-center text-xs font-medium tracking-wide opacity-80">
        {label}
      </span>
    </div>
  );
}
```

### 10.2 `src/components/Navbar.jsx`

The sticky top navigation bar: logo, in-page links, a "Let's Talk" button,
and a mobile hamburger menu.

```jsx
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/content";
import logo from "../assets/images/logo.jpg";

export default function Navbar() {
  // Tracks whether the mobile ("hamburger") menu is open.
  const [menuOpen, setMenuOpen] = useState(false);
  // Tracks scroll position so we can add a shadow/solid background once
  // the user scrolls past the very top of the page.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu whenever a link is clicked.
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? "bg-pearl/95 shadow-card backdrop-blur" : "bg-pearl/70 backdrop-blur"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        {/* Logo + wordmark */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="PearlVector logo"
            className="h-10 w-10 rounded-md object-cover"
          />
          <span className="font-display text-lg font-semibold text-navy">
            Pearl<span className="text-emerald">Vector</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-navy/80 transition-colors hover:text-emerald"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA button */}
        <a
          href="#contact"
          className="hidden rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-pearl shadow-card transition-transform hover:scale-[1.03] lg:inline-block"
        >
          Let's Talk
        </a>

        {/* Mobile menu toggle */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-navy lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="border-t border-pearl-line bg-pearl px-6 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-navy hover:bg-pearl-dim"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={closeMenu}
                className="block rounded-full bg-brand-gradient px-4 py-2.5 text-center text-sm font-semibold text-pearl"
              >
                Let's Talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
```

### 10.3 `src/components/Hero.jsx`

The top banner section: headline, intro paragraph, two call-to-action
buttons, the four "trust pills" (Innovative / Reliable / Client Focused /
Impact Driven), and a placeholder hero image.

```jsx
import { ArrowRight, PlayCircle } from "lucide-react";
import { TRUST_POINTS } from "../data/content";
import ImagePlaceholder from "./ImagePlaceholder";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy pt-32 pb-20 text-pearl lg:pt-40 lg:pb-28"
    >
      {/* Ambient background: faint radial glow + circuit-style dot grid,
          echoing the "connected Africa" artwork from the brand poster. */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-emerald/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        {/* Left column: copy */}
        <div>
          <p className="mb-4 inline-block rounded-full border border-emerald-light/40 bg-emerald/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-light">
            Digital Solutions for Africa
          </p>

          <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Empowering Africa through{" "}
            <span className="text-emerald-light">innovative digital</span>{" "}
            solutions
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pearl/80">
            PearlVector is a technology company delivering innovative,
            reliable and affordable digital solutions that solve real African
            challenges and drive growth, efficiency and transformation.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold shadow-card transition-transform hover:scale-[1.03]"
            >
              Let's Build Together
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-pearl/30 px-6 py-3 text-sm font-semibold text-pearl transition-colors hover:bg-pearl/10"
            >
              <PlayCircle className="h-4 w-4" />
              Explore What We Do
            </a>
          </div>

          {/* Trust pills */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {TRUST_POINTS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 rounded-xl border border-pearl/10 bg-pearl/5 px-3 py-4 text-center"
              >
                <Icon className="h-5 w-5 text-emerald-light" strokeWidth={1.75} />
                <span className="text-xs font-medium text-pearl/80">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: hero visual placeholder */}
        <div className="relative">
          <ImagePlaceholder
            label="Hero photo — team using VR / laptops with African connectivity map backdrop"
            className="aspect-[4/5] w-full lg:aspect-square"
          />
        </div>
      </div>
    </section>
  );
}
```

### 10.4 `src/components/Services.jsx`

The "What We Do" grid — all ten PearlVector service lines as cards.

```jsx
import { SERVICES } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="bg-pearl py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald">
            What We Do
          </p>
          <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
            One team, ten capabilities
          </h2>
          <p className="mt-4 text-ink/70">
            From classrooms to cloud infrastructure, PearlVector builds the
            technology stack African organizations need to operate securely
            and grow sustainably.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-pearl-line bg-white p-6 shadow-card transition-transform hover:-translate-y-1"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-pearl">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-base font-semibold text-navy">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 10.5 `src/components/WhyUs.jsx`

The "Why Choose PearlVector" section, with the checklist from the poster
and a placeholder team photo.

```jsx
import { CheckCircle2 } from "lucide-react";
import { WHY_US } from "../data/content";
import ImagePlaceholder from "./ImagePlaceholder";

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        {/* Placeholder photo of the team at work */}
        <ImagePlaceholder
          label="Team at work / office photo"
          className="aspect-[4/3] w-full order-2 lg:order-1"
        />

        {/* Copy + checklist */}
        <div className="order-1 lg:order-2">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald">
            Why Choose PearlVector
          </p>
          <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
            Built for African realities, not adapted from them
          </h2>
          <p className="mt-4 text-ink/70">
            We don't retrofit foreign software for African markets — we
            design from the ground up around local infrastructure,
            connectivity, and business context.
          </p>

          <ul className="mt-8 space-y-4">
            {WHY_US.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald"
                  strokeWidth={1.75}
                />
                <span className="text-ink/80">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
```

### 10.6 `src/components/VisionMission.jsx`

Three cards side by side: Vision, Mission, and the pull-quote ("Building
Africa's digital future...") from the poster.

```jsx
import { Eye, Target, Quote } from "lucide-react";
import { VISION, MISSION } from "../data/content";

export default function VisionMission() {
  return (
    <section id="vision-mission" className="bg-navy py-24 text-pearl">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Vision card */}
          <div className="rounded-2xl border border-pearl/10 bg-pearl/5 p-8">
            <Eye className="h-7 w-7 text-emerald-light" strokeWidth={1.5} />
            <h3 className="mt-4 font-display text-xl font-semibold">
              Our Vision
            </h3>
            <p className="mt-3 leading-relaxed text-pearl/80">{VISION}</p>
          </div>

          {/* Mission card */}
          <div className="rounded-2xl border border-pearl/10 bg-pearl/5 p-8">
            <Target className="h-7 w-7 text-emerald-light" strokeWidth={1.5} />
            <h3 className="mt-4 font-display text-xl font-semibold">
              Our Mission
            </h3>
            <p className="mt-3 leading-relaxed text-pearl/80">{MISSION}</p>
          </div>

          {/* Pull quote, matching the poster's callout */}
          <div className="flex flex-col justify-between rounded-2xl bg-brand-gradient p-8">
            <Quote className="h-8 w-8 opacity-70" strokeWidth={1.5} />
            <p className="mt-4 font-display text-xl font-medium leading-snug">
              Building Africa's digital future with{" "}
              <span className="text-white">
                innovation, integrity and impact.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### 10.7 `src/components/Industries.jsx`

The strip of industries served (Education, Healthcare, Agriculture, etc.).

```jsx
import { INDUSTRIES } from "../data/content";

export default function Industries() {
  return (
    <section id="industries" className="bg-pearl-dim py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="mb-10 text-center font-display text-2xl font-semibold text-navy sm:text-3xl">
          Industries We Serve
        </h2>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
          {INDUSTRIES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-xl bg-white p-5 text-center shadow-card"
            >
              <Icon className="h-6 w-6 text-emerald" strokeWidth={1.5} />
              <span className="text-xs font-semibold text-navy/80">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 10.8 `src/components/Team.jsx`

The team section, showing your four team members and roles with
placeholder headshots.

```jsx
import { TEAM } from "../data/content";
import ImagePlaceholder from "./ImagePlaceholder";

export default function Team() {
  return (
    <section id="team" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald">
            Meet the Team
          </p>
          <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
            The people behind PearlVector
          </h2>
          <p className="mt-4 text-ink/70">
            A small, hands-on founding team covering full-stack development,
            AI/ML, cybersecurity and systems administration.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <div key={member.name} className="text-center">
              <ImagePlaceholder
                label={`Photo of ${member.name}`}
                className="aspect-square w-full"
              />
              <h3 className="mt-4 font-display text-base font-semibold text-navy">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-emerald">
                {member.role}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-ink/60">
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 10.9 `src/components/Contact.jsx`

Contact details plus a working front-end contact form. **Note:** this form
doesn't send a real email yet — it just shows a "Message ready to send"
confirmation. There's a `TODO` comment inside showing exactly how to
connect a real service (like Formspree or EmailJS) later.

```jsx
import { useState } from "react";
import { Phone, Mail, Globe, MapPin, Send } from "lucide-react";
import { CONTACT } from "../data/content";

export default function Contact() {
  // Simple local state for the form fields. Since this is a front-end-only
  // build, submission doesn't hit a real API yet -- see the comment on
  // handleSubmit below for how to wire one up later (e.g. Formspree,
  // EmailJS, or a custom backend endpoint).
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace this with a real request once a backend/email service
    // is connected, e.g.:
    //   fetch("https://formspree.io/f/your-id", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(form),
    //   });
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-pearl-dim py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:px-10">
        {/* Left: contact details */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald">
            Let's Build the Future Together
          </p>
          <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
            Talk to PearlVector
          </h2>
          <p className="mt-4 max-w-md text-ink/70">
            Have a project in mind, or just want to know more about what we
            do? Reach us directly, or send a message using the form.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-emerald" strokeWidth={1.75} />
              <a href={`tel:${CONTACT.phone}`} className="text-ink/80 hover:text-emerald">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-emerald" strokeWidth={1.75} />
              <a href={`mailto:${CONTACT.email}`} className="text-ink/80 hover:text-emerald">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-emerald" strokeWidth={1.75} />
              <span className="text-ink/80">{CONTACT.website}</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-emerald" strokeWidth={1.75} />
              <span className="text-ink/80">{CONTACT.location}</span>
            </li>
          </ul>
        </div>

        {/* Right: contact form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-8 shadow-card"
        >
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center gap-2 py-12 text-center">
              <Send className="h-8 w-8 text-emerald" />
              <p className="font-display text-lg font-semibold text-navy">
                Message ready to send
              </p>
              <p className="text-sm text-ink/60">
                Front-end only demo — connect a form service or backend to
                actually deliver this message.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-5">
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-pearl-line bg-pearl px-4 py-2.5 text-sm text-ink focus:border-emerald focus:outline-none"
                  placeholder="Your full name"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-pearl-line bg-pearl px-4 py-2.5 text-sm text-ink focus:border-emerald focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-pearl-line bg-pearl px-4 py-2.5 text-sm text-ink focus:border-emerald focus:outline-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-pearl transition-transform hover:scale-[1.01]"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
```

### 10.10 `src/components/Footer.jsx`

The footer: logo, quick links, contact info, and social links (shown as
simple text badges — `f`, `in`, `X`, `ig`, `yt` — rather than brand logos,
since those need licensed assets).

```jsx
import { NAV_LINKS, CONTACT } from "../data/content";
import logo from "../assets/images/logo.jpg";

// Short text badges instead of brand logos: lucide-react no longer ships
// trademarked brand icons, and plain initials keep the footer
// dependency-free and trademark-safe. Swap these for real logo SVGs/images
// whenever the client provides brand-approved assets.
const SOCIAL_INITIALS = {
  Facebook: "f",
  LinkedIn: "in",
  "Twitter / X": "X",
  Instagram: "ig",
  YouTube: "yt",
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark py-14 text-pearl/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="PearlVector logo"
                className="h-9 w-9 rounded-md object-cover"
              />
              <span className="font-display text-base font-semibold text-pearl">
                PearlVector
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Digital solutions for Africa — innovative, reliable and
              affordable technology that drives real transformation.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-pearl">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-emerald-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + socials */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-pearl">
              Connect With Us
            </h4>
            <ul className="space-y-2 text-sm">
              <li>{CONTACT.phone}</li>
              <li>{CONTACT.email}</li>
              <li>{CONTACT.location}</li>
            </ul>

            <div className="mt-5 flex gap-3">
              {CONTACT.socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-pearl/20 text-xs font-semibold transition-colors hover:border-emerald-light hover:text-emerald-light"
                >
                  {SOCIAL_INITIALS[label]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-pearl/10 pt-6 text-center text-xs text-pearl/50">
          © {year} PearlVector. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
```

---

## 11. Assemble the page — `src/App.jsx`

Open `src/App.jsx` and **replace its entire contents** with this. This is
what stacks every section, in order, into the final page.

```jsx
// App.jsx
// --------
// Top-level layout: stacks every section of the one-page site in order.
// Each section is its own component under src/components/, and the nav
// bar's in-page links (see src/data/content.js -> NAV_LINKS) point at the
// matching section's id.

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import VisionMission from "./components/VisionMission";
import Industries from "./components/Industries";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <VisionMission />
        <Industries />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

---

## 12. Clean up leftover starter files

Delete the default Vite starter styling file (Tailwind replaces it):

```bash
rm src/App.css
```

If your Vite scaffold created any of these (some versions do), delete them
too since nothing in the site references them:

```bash
rm -f src/assets/react.svg src/assets/hero.png src/assets/vite.svg public/icons.svg
```

---

## 13. Run it locally

```bash
npm run dev
```

Open the printed URL (usually `http://localhost:5173`). You should see the
full PearlVector site: navbar, hero, services grid, why-us, vision/mission,
industries, team, contact form, footer.

Try resizing your browser window narrow to check the mobile menu, and check
that every nav link scrolls to the right section.

When you're happy, stop the server with `Ctrl + C`.

---

## 14. Build the production version

```bash
npm run build
```

This creates a `dist/` folder with the optimized, production-ready files.
You can preview exactly what will be deployed with:

```bash
npm run preview
```

---

## 15. Push the project to GitHub

```bash
# 1. Initialize git in this folder
git init

# 2. Stage and commit everything
git add .
git commit -m "Initial commit: PearlVector website"
```

Now create the remote repository:

1. Go to https://github.com/new
2. Name it `pearlvector-website`
3. Leave it **empty** — do NOT check "Add a README" or "Add .gitignore"
   (Vite already created a `.gitignore` for you)
4. Click **Create repository**

GitHub will show you a URL like
`https://github.com/<your-username>/pearlvector-website.git`. Use it here:

```bash
git remote add origin https://github.com/<your-username>/pearlvector-website.git
git branch -M main
git push -u origin main
```

If it asks for a password, GitHub now requires a **Personal Access Token**
instead — create one at https://github.com/settings/tokens and paste it in
when prompted.

Refresh the GitHub page — your code should now be there.

---

## 16. Deploy to Vercel

1. Go to https://vercel.com and log in (using your GitHub account is easiest).
2. Click **Add New... → Project**.
3. Under "Import Git Repository", select `pearlvector-website`.
4. Vercel will auto-detect **Vite** as the framework. Leave the defaults:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**.

After about a minute, you'll get a live link, e.g.
`https://pearlvector-website.vercel.app` — your site is now online.

From now on, every time you `git push` to the `main` branch on GitHub,
Vercel automatically rebuilds and redeploys the site.

---

## 17. What to do next

- **Real photos:** search each component for `<ImagePlaceholder ... />` and
  replace it with a real `<img src={...} alt="..." />`, importing the image
  file the same way `logo.jpg` is imported at the top of `Navbar.jsx`.
- **Real contact form:** open `src/components/Contact.jsx`, find the
  `handleSubmit` function, and follow the `TODO` comment to connect a
  service like Formspree or EmailJS.
- **Custom domain:** in your Vercel project, go to Settings → Domains and
  add `pearlvector.com` (or whichever domain you own).
- **Real social links:** in `src/data/content.js`, find `CONTACT.socials`
  and replace the `href: "#"` placeholders with your real profile URLs.

You now have the complete PearlVector website, built by hand, deployed and
live.
