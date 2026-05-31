# COPA ITI Website - Technical Specification

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.0 | UI framework |
| react-dom | ^19.0 | React DOM renderer |
| lucide-react | ^0.460 | Icons (BookOpen, Download, ExternalLink, CheckCircle, etc.) |
| tailwindcss | ^3.4 | Utility-first CSS |
| @tailwindcss/typography | ^0.5 | Prose styling for content sections |

## Component Inventory

### Layout
| Component | Source | Reuse |
|-----------|--------|-------|
| Navbar | Custom | Single instance, sticky |
| Footer | Custom | Single instance |
| MobileMenu | Custom | Used inside Navbar |
| ScrollToTop | Custom | Single instance |

### Sections
| Component | Source | Notes |
|-----------|--------|-------|
| HeroSection | Custom | Two-column, stat cards row |
| AboutSection | Custom | Two-column with info cards grid |
| SyllabusSection | Custom | Tabbed interface (Sem 1 / Sem 2) |
| BooksSection | Custom | Card grid + e-learning banner |
| CareerSection | Custom | Job cards + govt jobs + timeline + higher education |
| AdmissionSection | Custom | Two-column, process steps |
| LinksSection | Custom | 4-column card grid |

### Reusable Components
| Component | Source | Used By |
|-----------|--------|---------|
| SectionTitle | Custom | All sections |
| RevealOnScroll | Custom | All sections (wrapper) |
| InfoCard | Custom | About, Stats |
| BookCard | Custom | Books section |
| JobCard | Custom | Career section |
| LinkCard | Custom | Links section |
| StatCounter | Custom | Hero section |
| VerticalTimeline | Custom | Career section |

## Animation Implementation

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Section reveal on scroll | Native (Intersection Observer + CSS) | Custom hook useInView triggers CSS class toggle | Low |
| Tab content fade | Native (CSS transition) | Opacity transition 0→1 on content swap | Low |
| Stats counter | Native (requestAnimationFrame) | Custom hook, counts from 0 to target over 1.5s | Medium |
| Book card hover lift | Native (CSS transition) | translateY + box-shadow on :hover | Low |
| Mobile menu slide | Native (CSS transition) | translateX 100%→0 with backdrop fade | Low |
| Scroll-to-top button | Native (CSS transition) | Opacity fade in/out based on scroll position | Low |

## State & Logic Plan

### Active Tab State (Syllabus)
- useState for activeSemester (1 | 2)
- Content swap with fade transition via CSS class

### Mobile Menu State
- useState isOpen boolean
- Toggle on hamburger click
- Close on link click or backdrop click

### Scroll-Triggered Reveals
- Custom useInView hook: Intersection Observer with threshold 0.2
- Adds "revealed" CSS class when intersecting
- One-shot (does not re-hide on scroll out)

### Sticky Navbar Shadow
- useState hasScrolled boolean
- Scroll listener adds shadow after 50px scroll

### Counter Animation
- Custom hook that triggers on intersection
- Uses requestAnimationFrame for smooth counting
- Easing: ease-out via quadratic formula

## Other Key Decisions

- **Single-page app**: All sections on one page with anchor navigation
- **No routing library**: Simple anchor links (#about, #syllabus, etc.)
- **No animation library**: All animations are CSS-based or simple JS
- **Responsive**: Mobile-first with Tailwind breakpoints
- **Semantic HTML**: Proper heading hierarchy, landmark elements
- **Accessibility**: Proper contrast, focus states, aria labels
