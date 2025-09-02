# Sunit Carpenter - Professional Landing Page

[![Deploy static site to GitHub Pages](https://img.shields.io/github/actions/workflow/status/OWNER/REPO/deploy-pages.yml?branch=main&label=Deploy%20Pages)](https://github.com/OWNER/REPO/actions/workflows/deploy-pages.yml)

Live site: https://OWNER.github.io/REPO/

Replace OWNER/REPO with your GitHub org/user and repository name. For user/org pages (OWNER.github.io repository), the live site will be https://OWNER.github.io/ (no repo subpath).

A modern, responsive personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS, showcasing the professional experience and expertise of Sunit S. Carpenter, Principal Data Scientist & Solutions Architect at Microsoft.

## 🌟 Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Sections**: 
  - Hero section with animated background
  - About section with achievements and statistics
  - Timeline-based experience section
  - Interactive skills showcase with categorization
  - Education and certifications display
  - Contact form with validation
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **SEO Friendly**: Proper meta tags, sitemap, and structured data
- **Accessibility**: WCAG compliant with keyboard navigation support
- **Type Safe**: Written in TypeScript for better development experience

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 📁 Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main page component
│   └── sitemap.ts         # SEO sitemap
├── components/            # React components
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx       # Hero section
│   │   ├── About.tsx      # About section
│   │   ├── Experience.tsx # Experience timeline
│   │   ├── Skills.tsx     # Skills showcase
│   │   ├── Education.tsx  # Education & certifications
│   │   └── Contact.tsx    # Contact form
│   ├── ui/                # Shadcn/ui components
│   ├── Navigation.tsx     # Navigation header
│   └── Footer.tsx         # Footer component
├── constants/             # Data and configuration
│   └── data.ts            # Professional information
├── hooks/                 # Custom React hooks
│   └── useScrollAnimation.ts # Animation utilities
└── types/                 # TypeScript type definitions
    └── index.ts           # Professional data types
```

## 🛠 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sunit-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npm i -g vercel
   vercel login
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

### Deploy to Other Platforms

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `out` folder** to your hosting provider

## 🎨 Customization

### Updating Content

1. **Personal Information**: Edit `src/constants/data.ts`
2. **Professional Experience**: Update the `experiences` array
3. **Skills**: Modify the `skills` array with categories
4. **Education**: Update the `education` and `certifications` arrays

### Styling

1. **Colors**: Modify Tailwind CSS variables in `src/app/globals.css`
2. **Components**: Update individual component styles
3. **Animations**: Adjust Framer Motion configurations in `src/hooks/useScrollAnimation.ts`

### SEO

1. **Metadata**: Update `src/app/layout.tsx`
2. **Sitemap**: Modify `src/app/sitemap.ts`
3. **Robots.txt**: Edit `public/robots.txt`

## 📱 Sections Overview

### Hero Section
- Professional headshot placeholder
- Name and title with animated text
- Call-to-action buttons
- Contact information
- Skill tags

### About Section
- Professional summary
- Key statistics
- Core values
- Major achievements
- Personal interests

### Experience Section
- Timeline-based layout
- Company logos and descriptions
- Key responsibilities and achievements
- Technology tags
- Career highlights

### Skills Section
- Categorized skill display
- Interactive skill exploration
- Proficiency levels
- Expandable categories

### Education & Certifications
- Academic background
- Professional certifications
- Security clearances
- Institutional affiliations

### Contact Section
- Contact form with validation
- Contact methods
- Response time information
- Areas of expertise

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific configurations:

```env
NEXT_PUBLIC_SITE_URL=https://sunitcarpenter.com
NEXT_PUBLIC_CONTACT_EMAIL=sunitc@microsoft.com
```

### Google Analytics (Optional)

Add your Google Analytics tracking ID to `src/app/layout.tsx`.

## 📄 Content Sources

This landing page was built using content extracted from:
- Professional resume (PDF)
- LinkedIn profile
- Career achievements and certifications

## 🎯 Performance Features

- **Optimized Images**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting with Next.js
- **SEO Optimization**: Meta tags, sitemap, and structured data
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Performance Monitoring**: Built-in Next.js analytics

## 🔐 Security

- **Type Safety**: Full TypeScript implementation
- **Form Validation**: Client-side form validation
- **Secure Headers**: Next.js security headers
- **No Sensitive Data**: All content is publicly available information

## 📞 Support

For questions or support regarding this project, please contact:

- **Email**: sunitc@microsoft.com
- **LinkedIn**: [linkedin.com/in/sunitcarpenter](https://linkedin.com/in/sunitcarpenter)

## 📝 License

This project is built for Sunit S. Carpenter's personal portfolio. The code structure can be used as a template for similar projects.

---

**Built with ❤️ using modern web technologies**
