# Sign Digital - Codebase Documentation

## Project Overview

**Sign Digital** is a professional digital agency portfolio website built with Next.js 14, showcasing design services, portfolio projects, team members, and client testimonials. The site features smooth animations using Framer Motion and a responsive design optimized for all devices.

- **Live Demo**: [https://sign-eta-liart.vercel.app](https://sign-eta-liart.vercel.app)
- **Repository**: JulietaSargsyan/Sign
- **Framework**: Next.js 14.2.5 (App Router)
- **Primary Language**: JavaScript (React 18)
- **Animation Library**: Framer Motion 12.15.0

---

## Repository Information

- **Owner**: Julieta Sargsyan (julietasargsian@gmail.com)
- **Created**: December 22, 2024
- **Last Updated**: January 20, 2026
- **Repository Size**: 41.6 MB
- **Stars**: 0 | **Forks**: 0 | **Open Issues**: 0
- **Branches**:
  - `main` (default, production)
  - `test` (testing/development)

---

## Tech Stack

### Core Dependencies
- **Next.js**: 14.2.5 - React framework with SSR and static generation
- **React**: 18 - UI library
- **React DOM**: 18 - React rendering engine
- **Framer Motion**: 12.15.0 - Animation library for smooth transitions
- **ESLint**: Code quality and linting

### Build & Development Tools
- **Node.js**: Required runtime environment
- **npm**: Package manager
- **Vercel**: Deployment platform

---

## Project Structure

```
sign/
├── .github/                # GitHub workflows and configurations
├── .eslintrc.json         # ESLint configuration
├── .gitignore             # Git ignore rules
├── jsconfig.json          # JavaScript/path alias configuration
├── next.config.mjs        # Next.js configuration
├── package.json           # Dependencies and npm scripts
├── package-lock.json      # Locked dependency versions
├── public/                # Static assets served directly
│   └── fonts/             # Custom font files (Mosk, Noto Sans)
├── src/                   # Source code
│   ├── app/               # Next.js 14 App Router pages
│   │   ├── layout.js      # Root layout with providers
│   │   ├── page.js        # Home page
│   │   ├── about/         # About/Team page
│   │   ├── contact/       # Contact page
│   │   ├── portfolio/     # Portfolio listing & detail pages
│   │   │   └── [slug]/    # Dynamic portfolio item pages
│   │   └── services/      # Services page
│   ├── assets/            # Images, logos, portfolio photos
│   ├── components/        # Reusable React components
│   │   ├── Button.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── NavBar.jsx
│   │   ├── Section.jsx
│   │   ├── SideBar.jsx
│   │   ├── serviceItem/
│   │   └── teamMemberCard/
│   ├── context/           # React Context providers
│   │   └── SectionContext.js
│   ├── lib/               # Data and utilities
│   │   └── data.js        # Portfolio data
│   └── globals.css        # Global styles
└── README.md
```

---

## Key Features

### 1. Pages & Routes
- **Home** (`/`) - Hero section, portfolio showcase, services overview
- **About** (`/about`) - Team members and company information
- **Portfolio** (`/portfolio`) - Grid of all portfolio projects
- **Portfolio Detail** (`/portfolio/[slug]`) - Individual project case studies
- **Services** (`/services`) - Service offerings with animated cards
- **Contact** (`/contact`) - Contact information with downloadable client brief

### 2. UI Components

#### **Header** ([src/components/Header.jsx](src/components/Header.jsx))
- Logo and navigation menu
- Integrates with SectionContext for scroll tracking

#### **Footer** ([src/components/Footer.jsx](src/components/Footer.jsx))
- Social media links (Instagram, Facebook, Behance)
- Copyright information

#### **SideBar** ([src/components/SideBar.jsx](src/components/SideBar.jsx))
- Responsive burger menu
- Touch device detection
- Mobile navigation

#### **Button** ([src/components/Button.jsx](src/components/Button.jsx))
- Supports internal routing, external links, and file downloads
- Ripple wave effect on hover
- Configurable variants (primary, secondary)

#### **CustomCursor** ([src/components/CustomCursor.jsx](src/components/CustomCursor.jsx))
- Custom mouse cursor (desktop only)
- Disabled on touch devices

#### **Section** ([src/components/Section.jsx](src/components/Section.jsx))
- Wrapper for page sections
- Dynamic light/dark theming

### 3. Context & State Management

#### **SectionContext** ([src/context/SectionContext.js](src/context/SectionContext.js))
- Manages current section state across the app
- Used for scroll tracking and navigation highlighting
- Provides `currentSection` and `setCurrentSection`

### 4. Animations
- Framer Motion used throughout for smooth transitions
- Scroll-triggered animations
- Card hover effects
- Page transition animations

### 5. Responsive Design
- Touch device detection
- Mobile-first approach
- Breakpoint-based layouts
- CSS Modules for scoped styling

---

## Configuration Files

### [next.config.mjs](next.config.mjs)
```javascript
- Image optimization disabled (unoptimized: true)
- Webpack alias: @ → ./src
- Prepared for static export
```

### [jsconfig.json](jsconfig.json)
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]  // Enables @/ imports from root
    }
  }
}
```

### [package.json](package.json)
Key scripts:
- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks
- `npm run export` - Export static HTML
- `npm run deploy` - Build, export, and deploy to GitHub Pages

---

## Data Structure

### Portfolio Data ([src/lib/data.js](src/lib/data.js))
Portfolio items include:
- **slug**: URL-friendly identifier
- **client**: Client name
- **category**: Project type
- **mainImage**: Hero image path
- **images**: Array of project images
- **content**: Project description
- **challenge**: Client challenge/problem
- **results**: Project outcomes/results

Current portfolio items:
1. Consulting Group
2. Amigurumi
3. Sound Byte

---

## Development Workflow

### Initial Setup
```bash
# Clone the repository
git clone https://github.com/JulietaSargsyan/Sign.git
cd sign

# Install dependencies
npm install

# Start development server
npm run dev
```

### Testing & Quality Checks
```bash
# Run linter
npm run lint

# Build for production
npm run build

# Test production build locally
npm run start
```

### Deployment
The project is deployed on Vercel with automatic deployments from the `main` branch.

Manual deployment to GitHub Pages:
```bash
npm run deploy
```

---

## Current Issues & Recommendations

### ESLint Warnings
Two React Hook warnings detected:
- [src/app/about/page.js:59](src/app/about/page.js#L59) - Missing `setCurrentSection` dependency
- [src/app/page.js:61](src/app/page.js#L61) - Missing `setCurrentSection` dependency

**Recommendation**: Add `setCurrentSection` to useEffect dependency arrays or use `useCallback` to memoize the function.

### npm Vulnerabilities
- 9 vulnerabilities detected (1 low, 3 moderate, 4 high, 1 critical)
- Run `npm audit fix` to address non-breaking issues
- Review critical vulnerabilities individually

### Deprecated Dependencies
- `inflight@1.0.6` - Memory leak issues
- `rimraf@3.0.2` - Version < v4 unsupported
- `glob@7.2.3` - Version < v9 unsupported
- ESLint humanwho codes packages deprecated

**Recommendation**: Update to Next.js 15.x and latest dependencies.

### Performance Optimization
- Missing `sharp` package for Image Optimization
- Run `npm i sharp` for better production performance
- Update browserslist database: `npx update-browserslist-db@latest`

---

## Git Branches & Workflow

### Current Branch: `test`
Checked out from `origin/test` for testing and development.

### Main Branch: `main`
Production-ready code, deployed to Vercel.

### Recent Commits (Last 5)
1. `590147b` - Add portfolio data
2. `56a411b` - Update employees
3. `7741896` - Remove
4. `b36192a` - Update assets
5. `6dc7aa9` - Update home page portfolio

---

## Font Assets

### Custom Fonts ([public/fonts/](public/fonts/))
1. **Mosk Font Family** - 8 weights:
   - Thin (100)
   - Light (300)
   - Normal (400)
   - Medium (500)
   - Semi-Bold (600)
   - Bold (700)
   - Extra-Bold (800)
   - Ultra-Bold (900)

2. **Noto Sans** - Multiple weights and styles
   - Loaded via `next/font/google` in [src/app/layout.js](src/app/layout.js)

Formats: WOFF and WOFF2 for cross-browser compatibility.

---

## Build Output

### Production Build Stats
```
Route (app)                    Size     First Load JS
┌ ○ /                         3.37 kB         145 kB
├ ○ /about                    3.86 kB         103 kB
├ ○ /contact                  1.53 kB        95.4 kB
├ ○ /portfolio                  532 B         142 kB
├ ● /portfolio/[slug]         4.42 kB        96.6 kB
└ ○ /services                 2.66 kB         131 kB

First Load JS shared by all: 87.1 kB
```

- **○** Static - Prerendered as static content
- **●** SSG - Static generation with getStaticProps

---

## Contact & Support

**Developer**: Julieta Sargsyan
**Email**: julietasargsian@gmail.com
**GitHub**: [@JulietaSargsyan](https://github.com/JulietaSargsyan)

For issues or feature requests, contact the repository owner directly.

---

## License

No license specified. Contact the repository owner for usage rights.

---

## Next Steps for Development

1. Fix ESLint warnings in useEffect hooks
2. Install `sharp` for Image Optimization: `npm i sharp`
3. Update deprecated dependencies
4. Address npm security vulnerabilities
5. Update browserslist database
6. Consider upgrading to Next.js 15.x
7. Add unit/integration tests
8. Implement error boundaries
9. Add loading states for dynamic content
10. Optimize bundle size

---

**Last Updated**: January 20, 2026
**Documentation Generated**: Claude Code
