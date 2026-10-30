# Agent & Developer Guide: Suraj Anand Portfolio

This document provides a comprehensive architectural overview, code standards, and step-by-step extension guides for AI agents and human engineers working on this repository.

---

## 1. Architecture Overview

This project is a high-performance personal engineering portfolio built with **React 19**, **Vite**, and **Vanilla CSS**. It adheres strictly to modern frontend engineering standards, including **logic/data segregation**, **mobile-first responsive design**, **WCAG 2.1 AA accessibility**, and **Vercel React Best Practices**.

### Directory Structure

```
portfolio/
├── .agents/                 # Workspace skills & instructions
├── public/                  # Public static assets
├── src/
│   ├── assets/              # Static media assets
│   │   └── images/
│   │       ├── certifications/  # Cert screenshots & badges (AZ-900, DP-900, etc.)
│   │       ├── logo/            # Technology & company brand logos
│   │       └── portfolio/       # Project cover previews
│   ├── components/          # Reusable UI presentation components
│   │   ├── sections/        # Section-specific components
│   │   │   ├── About.jsx            # Bio, impact metrics, core pillars, education
│   │   │   ├── Certification.jsx    # Smooth scrollable credentials carousel
│   │   │   ├── Contact.jsx          # Direct communication channels, map, contact form
│   │   │   ├── Experience.jsx       # Career path timeline and achievement cards
│   │   │   ├── Footer.jsx           # Terminal-styled quote, social pills, copyright
│   │   │   ├── Hero.jsx             # Typing animation greeting, banner
│   │   │   ├── Portfolio.jsx        # Project showcases & GitHub/live links
│   │   │   └── Skills.jsx           # Category-filtered skill badge grid
│   │   ├── index.js         # Centralized barrel export for all components
│   │   ├── LazyBackgroundImage.jsx # Progressive background image loader
│   │   └── NavBar.jsx       # Floating glassmorphic header with scrollspy & mobile menu
│   ├── data/                # Segregated Data & Content Layer (Pure Data, zero markup bloat)
│   │   ├── aboutData.js         # IMPACT_METRICS, CORE_PILLARS, CREDENTIALS
│   │   ├── certificationsData.js# CERTIFICATIONS array with verification URLs
│   │   ├── contactData.js       # CONTACT_CHANNELS, SOCIAL_LINKS
│   │   ├── experienceData.jsx   # EXPERIENCE_DATA timeline with highlighted bullets
│   │   ├── navigationData.js    # NAV_ITEMS with anchor IDs and section order
│   │   ├── portfolioData.js     # PORTFOLIO_DATA list & RESUME_PDF_HYPERLINK
│   │   ├── skillsData.js        # ALL_SKILLS array & CATEGORY_TABS
│   │   └── index.js             # Centralized re-export barrel for all data
│   ├── global/
│   │   └── constants.jsx    # Backward-compatible re-exports from src/data/
│   ├── pages/               # Top-level view containers
│   │   ├── HomePage.jsx     # Main landing page assembling sections in order
│   │   └── NotFound.jsx     # Fallback 404 screen
│   ├── styles/              # Design system & stylesheets
│   │   ├── App.css          # Glassmorphic tokens, animations, responsive media queries
│   │   └── index.css        # Root resets & base font styles
│   ├── App.jsx              # React Router configuration & stylesheet imports
│   └── index.jsx            # React root mount
├── AGENTS.md                # This developer/agent guide
├── jsconfig.json            # Base URL configuration (enables direct "data/...", "components" imports)
├── package.json             # Dependencies and scripts
└── vite.config.js           # Vite build pipeline with tsconfigPaths plugin
```

---

## 2. Core Architectural Principles

### 2.1 Logic & Data Segregation
- **Never embed large static arrays or business data directly in JSX components.**
- All content (bullet points, company names, project descriptions, skill tags, credentials) lives in `src/data/`.
- Components in `src/components/sections/` receive data via clean imports and focus purely on rendering, interactivity, and accessibility.

### 2.2 Preserving Visual & Layout Integrity
- Existing CSS classes, HTML layout hierarchies, and textual content are strictly maintained.
- When reorganizing code or adding new features, **do not alter the DOM tree or rename classes** that could cause styling regressions.

### 2.3 Import Paths & Aliasing
- `jsconfig.json` sets `"baseUrl": "./src"`, which is wired up in `vite.config.js` via `tsconfigPaths()`.
- You can import cleanly without complex relative nesting:
  ```javascript
  import { EXPERIENCE_DATA } from 'data/experienceData'
  import { Hero, NavBar, About } from 'components'
  import selfImg from 'assets/images/self-01.jpg'
  ```

### 2.4 Vercel React Best Practices
1. **Hoist Static Objects & Data**: Never declare static arrays or configs inside render functions; define them outside or import them from `src/data/`.
2. **Stable Callbacks**: Use `useCallback` for event handlers passed down or referenced in effect dependency arrays (e.g., carousel navigation).
3. **Offload Heavy Observers**: Use `IntersectionObserver` instead of raw window scroll handlers where possible (e.g., in `NavBar.jsx` for 60fps scrollspy).

---

## 3. How to Extend the Application

### 3.1 Adding a New Section to the Home Page

Follow this 5-step workflow:

1. **Create the Data File**:
   Create a new file in `src/data/newSectionData.js`:
   ```javascript
   export const NEW_SECTION_DATA = [
     { id: 1, title: 'Item 1', description: '...' },
   ]
   ```
   Re-export it in `src/data/index.js`:
   ```javascript
   export * from './newSectionData'
   ```

2. **Create the Presentation Component**:
   Create `src/components/sections/NewSection.jsx`:
   ```jsx
   import React from 'react'
   import { NEW_SECTION_DATA } from 'data/newSectionData'

   function NewSection() {
     return (
       <section id="new-section" className="new-section">
         <div className="container">
           <div className="section-header" data-aos="fade-up">
             <span className="section-eyebrow mono">// SECTION SUBTITLE</span>
             <h2 className="section-title">Section Heading</h2>
             <div className="title-underline"></div>
           </div>
           {/* Section content */}
         </div>
       </section>
     )
   }

   export default NewSection
   ```

3. **Export from Components Barrel**:
   In `src/components/index.js`:
   ```javascript
   export { default as NewSection } from './sections/NewSection'
   ```

4. **Add to Navigation (if applicable)**:
   In `src/data/navigationData.js`, add the navigation item:
   ```javascript
   { label: 'New Section', href: '#new-section', id: 'new-section', index: '06' }
   ```

5. **Mount in `src/pages/HomePage.jsx`**:
   Import `NewSection` from `../components` and insert it into the JSX flow.

---

### 3.2 Adding a New Page & Route

1. **Create the Page Component**:
   In `src/pages/BlogPage.jsx`:
   ```jsx
   import React from 'react'
   import { NavBar, Footer } from '../components'

   function BlogPage() {
     return (
       <>
         <NavBar color="#02F2E1" />
         <main className="container pt-5">
           <h1>Articles & Notes</h1>
         </main>
         <Footer />
       </>
     )
   }

   export default BlogPage
   ```

2. **Register the Route in `src/App.jsx`**:
   ```jsx
   import { BrowserRouter, Routes, Route } from "react-router-dom";
   import HomePage from "./pages/HomePage";
   import BlogPage from "./pages/BlogPage";
   import "./styles/App.css";

   function App() {
     return (
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/blog" element={<BlogPage />} />
           <Route path="*" element={<HomePage />} />
         </Routes>
       </BrowserRouter>
     );
   }

   export default App;
   ```

---

### 3.3 Adding or Updating Certifications

1. Add the certificate badge/document image to `src/assets/images/certifications/`.
2. Open `src/data/certificationsData.js`.
3. Add the entry to the `CERTIFICATIONS` array:
   ```javascript
   {
     id: 'cert-id',
     provider: 'Provider Name',
     icon: ReactIconComponent,
     accentColor: '#hexColor',
     certImg: certAssetImport,
     alt: 'Descriptive Alt Text',
     verifyUrl: 'https://...', // Optional credential verification link
   }
   ```
4. The carousel in `src/components/sections/Certification.jsx` will automatically reflect the new certificate, updating count indicators and dots dynamically.

---

### 3.4 Adding or Updating Skills

1. Place logos in `src/assets/images/logo/`.
2. Open `src/data/skillsData.js`.
3. Add the skill item to `ALL_SKILLS`:
   ```javascript
   { name: 'GraphQL', logo: graphqlLogo, category: 'Backend', group: 'Backend', highlight: true }
   ```
4. If introducing a new category, add an entry to `CATEGORY_TABS`. The filter bar and badge count will update automatically.

---

## 4. Design System Tokens & Classes

The styling follows a dark futuristic cyber/glassmorphic aesthetic configured in `src/styles/App.css`:

| Element / Utility | Class Name | Description |
|---|---|---|
| Monospace Accents | `.mono` | JetBrains Mono / SFMono styling for labels, indexes, tags |
| Highlighted Keywords | `.highlight-text` | Cyan/accent gradient text emphasis for key metrics & skills |
| Glassmorphic Card | `.experience-glass-card`, `.skill-glass-card`, `.portfolio-glass-card` | Semi-transparent background with `backdrop-filter: blur()`, subtle 1px border |
| Section Eyebrow | `.section-eyebrow` | Monospace category pill above section titles (e.g. `// CAREER PATH`) |
| Section Title | `.section-title` | Bold h2 heading with gradient highlight |
| Title Underline | `.title-underline` | Animated horizontal gradient bar beneath headings |
| Gradient Orbs | `.gradient-orb .orb-1`, `.orb-2` | Subtle glowing ambient background spheres |

### Responsive Breakpoints
- **Mobile (< 768px)**: Single column layouts, compact cards with safe horizontal padding (`1rem`), mobile hamburger dropdown menu.
- **Tablet (768px - 1024px)**: 2-column grids for cards and portfolio items.
- **Desktop (> 1024px)**: Full bento-grid layouts, sticky desktop navigation bar, multi-column flex timelines.

---

## 5. Build, Lint & Verification Commands

Always run these commands to ensure code quality before submitting changes:

```bash
# Start local development server (runs with HMR)
npm run start
# or
npm run dev

# Run full production build (checks bundling, JSX parsing, asset references)
npm run build

# Run linter
npm run lint

# Deploy to GitHub Pages (production)
./deployment/deploy.sh
# or dry-run without pushing:
./deployment/deploy.sh --no-push
```

