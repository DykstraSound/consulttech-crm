# ConsultTech CRM - Professional Consultancy Website

## Overview
A professional consultancy website for ConsultTech CRM, showcasing expertise in Salesforce, StoreConnect, other CRM platforms, and AWS. The site features multiple pages with integrated Google Calendar booking functionality.

## Project State
**Status:** Complete MVP with working contact form

## Recent Changes
- November 2024: Initial build with multi-page structure
- Added headshot photo to About Me page
- Updated AWS certification text to "Certified Solutions Architect - Associate"
- Applied consistent orange-dominant theme across all pages
- Connected contact form to backend API

## User Preferences
- Primary brand color: Orange (#FF9933)
- Secondary/accent color: Blue (#00C9E6)
- Large logos (300%+ increase from default)
- Multi-page navigation structure (not single-page scrolling)
- Gradient backgrounds on all sections

## Project Architecture

### Frontend (client/src/)
- **Framework:** React with Vite, TypeScript, Tailwind CSS
- **Routing:** wouter for client-side routing
- **State Management:** TanStack Query for server state
- **UI Components:** shadcn/ui with custom theming

### Pages (client/src/pages/)
- `home.tsx` - Landing page with Hero section
- `about-us.tsx` - Company information and expertise
- `about-me.tsx` - Consultant profile with certifications and photo
- `services.tsx` - Service offerings (Salesforce, StoreConnect, AWS, etc.)
- `contact.tsx` - Contact form and booking integration

### Components (client/src/components/)
- `Navigation.tsx` - Header with navigation links
- `Hero.tsx` - Main hero section with CTA
- `AboutUs.tsx` - Company about section
- `AboutMe.tsx` - Personal profile with headshot
- `Services.tsx` - Services display
- `Contact.tsx` - Contact form with API integration
- `Footer.tsx` - Site footer

### Backend (server/)
- **Framework:** Express.js with TypeScript
- **Storage:** In-memory storage (MemStorage)
- **API Routes:**
  - `POST /api/contact` - Submit contact form
  - `GET /api/contact` - Retrieve submissions (admin)

### Shared (shared/)
- `schema.ts` - Data models using Drizzle ORM patterns
  - `contactSubmissions` table for form data

## Key Features
1. **Multi-page navigation** - Clean routing between pages
2. **Contact form** - Backend-connected form submissions
3. **Google Calendar integration** - Booking link: https://calendar.app.google/BJd5zjhMD5ZXctAx8
4. **Responsive design** - Mobile-friendly layout
5. **Theme consistency** - Orange/blue gradient theme throughout

## Assets
- Logo files (transparent and non-transparent versions)
- Professional headshot for About Me page
- Stock hero background image

## Environment
- No database required - uses in-memory storage
- No authentication required for MVP
- SESSION_SECRET available in secrets

## Future Enhancements
- Testimonials section (planned)
- LinkedIn integration
- Email notifications for contact submissions
