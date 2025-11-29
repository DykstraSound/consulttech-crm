# ConsultTech CRM Website Design Guidelines

## Design Approach
**System-Based Professional Consultancy Design** - Drawing from Material Design and enterprise UI patterns to establish credibility and trust. Clean, modern aesthetic that emphasizes expertise and professionalism without unnecessary visual noise.

## Typography System

**Font Stack**: 
- Primary: Inter or DM Sans via Google Fonts CDN
- Headings: Font weight 700, sizes from text-4xl (hero) down to text-xl (section headers)
- Body: Font weight 400-500, text-base to text-lg for readability
- Certifications/credentials: Font weight 600, text-sm with letter-spacing tracking-wide for authority

**Hierarchy**:
- Hero headline: text-5xl lg:text-6xl, font-bold
- Section headers: text-3xl lg:text-4xl, font-bold
- Subsections: text-xl lg:text-2xl, font-semibold
- Body text: text-lg, leading-relaxed for professional content
- Small text (captions/labels): text-sm

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 lg:py-24
- Component spacing: gap-8 to gap-12
- Content max-width: max-w-6xl for full sections, max-w-4xl for text-heavy content

**Grid Strategy**:
- Services section: 2-column grid (md:grid-cols-2) 
- Certifications display: 3-column grid (md:grid-cols-3 lg:grid-cols-4) for credential badges
- About sections: Single column with max-w-4xl for readability
- Contact form: 2-column split (lg:grid-cols-2) - form on left, info/calendar link on right

## Component Library

**Navigation**:
- Fixed header with logo (left), navigation links (center/right), "Schedule Call" CTA button
- Smooth scroll anchors to sections
- Mobile: Hamburger menu

**Hero Section**:
- Full-width section with professional hero image (background: modern office, technology, or abstract tech visualization)
- Centered content over image with backdrop blur on text container
- Logo display, compelling headline, 2-line value proposition
- Two CTAs: Primary "Schedule a Call" (links to Google Calendar), Secondary "Learn More" (scrolls to About)
- Height: min-h-[600px] lg:min-h-[700px]

**About Us Section**:
- Single column layout, max-w-4xl
- Mission statement in larger text (text-xl)
- Service overview in 2-column grid highlighting Salesforce, StoreConnect, AWS, Other CRMs
- Professional, trust-building language

**About Me Section**:
- Professional headshot image (circular, w-48 h-48) floated left on desktop
- Personal introduction with paragraph spacing
- Certifications grid: 4 certification cards displaying badge icons (use Heroicons for shields/stars) with cert names
- Layout: Image + text flow on desktop, stacked on mobile

**Services Section**:
- 2-column card layout
- Each card: Icon (Heroicons cloud/cog/database), service name, 2-3 sentence description
- Primary services (Salesforce, StoreConnect) more prominent than secondary

**Contact Section**:
- 2-column split (desktop)
- Left: Contact form with fields (name, email, company, message textarea), submit button
- Right: Contact information, office hours placeholder, prominent "Schedule a Call" button with calendar icon
- Form styling: Consistent input heights (h-12), proper label spacing (mb-2), focus states

**Footer**:
- Logo, tagline, contact email
- Quick links to sections
- Copyright notice
- LinkedIn/professional social links placeholder

## Images

**Hero Image**: 
- Professional technology/office workspace or abstract cloud/data visualization
- Placement: Full-width background with overlay for text readability
- Suggested: Modern office with laptops, cloud computing visualization, or professional workspace

**About Me Image**:
- Professional headshot, circular treatment
- Placement: Floated left in About Me section (desktop), centered above text (mobile)

**Service Icons**: 
- Use Heroicons CDN - cloud, cog, database, server icons for different services
- Size: w-12 h-12 in service cards

## Animations
Minimal, professional animations only:
- Smooth scroll behavior for navigation
- Subtle fade-in for sections on scroll (optional, use sparingly)
- Button hover states (built-in, no custom animations needed)

## Key Design Principles
1. **Credibility First**: Certifications and credentials prominently displayed
2. **Clear Hierarchy**: Easy scanning of services and expertise
3. **Professional Polish**: Consistent spacing, alignment, and typography
4. **Action-Oriented**: Multiple clear paths to schedule consultation
5. **Mobile-First Responsive**: All sections stack gracefully on mobile