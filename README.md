# Portfolio Nadir AMMI SAID

![Next.js](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-v4-38bdf8)

Professional portfolio showcasing my full-stack development skills and projects. Built with **Next.js 14** using the **App Router** and **TypeScript**, optimized for performance, SEO, and accessibility.

**Live Demo:** **[https://portfolio-nad.vercel.app](https://portfolio-nad.vercel.app)**

<!-- ## Preview

Add screenshot here -->

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/) or [yarn](https://yarnpkg.com/)
- Git

### Installation

Clone the repository and install dependencies:

```bash
# SSH
git clone git@github.com:nadir-ammisaid/nadir-dev-portfolio.git

# or HTTPS
git clone https://github.com/nadir-ammisaid/nadir-dev-portfolio.git
```

```bash
cd nadir-dev-portfolio
```

```bash
npm install
```

### Environment Setup

Create a `.env.local` file at the root of the project:

```bash
cp .env.example .env.local
```

Then configure the following variables:

- **EmailJS:** Create an account at [emailjs.com](https://www.emailjs.com/) and get your service ID, template ID, and public key
- **reCAPTCHA:** Create a site at [google.com/recaptcha/admin](https://www.google.com/recaptcha/admin) and get your site key

Update `.env.local` with your actual credentials.

### Development Server

Run the development server locally:

```bash
npm run dev
```

Visit http://localhost:3000 in your browser.

### Available Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Project Structure

This project uses **Next.js App Router** with the following structure:

```
nadir-dev-portfolio
├── public/                    # Static assets
│   ├── images/
│   ├── resume.pdf
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/                   # App Router (Next.js 14)
│   │   ├── about/             # About page
│   │   │   └── page.tsx
│   │   ├── contact/           # Contact page
│   │   │   └── page.tsx
│   │   ├── experience/        # Experience page
│   │   │   └── page.tsx
│   │   ├── projects/          # Projects pages
│   │   │   ├── [slug]/        # Dynamic project detail
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx       # Projects list
│   │   ├── services/          # Services page
│   │   │   └── page.tsx
│   │   ├── skills/            # Skills page
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/            # Reusable components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProjectCard.tsx
│   │   └── ...
│   ├── data/
│   │   ├── projects.ts        # Projects data
│   │   ├── experiences.ts     # Experiences data
│   │   └── skills.ts          # Skills data
│   └── lib/
│       └── utils.ts           # Utility functions
├── .eslintrc.json
├── .gitignore
├── next.config.ts             # Next.js configuration
├── package.json
├── README.md
├── tailwind.config.ts         # Tailwind CSS v4 configuration
└── tsconfig.json
```

## Features

- Static Site Generation (SSG) for optimal performance
- SEO optimization with dynamic metadata
- Mobile-first responsive design
- Accessibility support (ARIA roles, keyboard navigation)
- Optimized images with next/image
- Contact form with EmailJS integration
- Smooth scrolling navigation
- Dark mode support
- Professional design with Tailwind CSS v4

## Pages Overview

### Homepage (/)

Hero section with introduction, featured projects, and call-to-action.

### About (/about)

Detailed background, education timeline, languages, and soft skills.

### Projects (/projects)

Grid of projects with filtering by technology and search functionality. Each project includes detailed information, tech stack, GitHub links, and live demos.

### Experience (/experience)

Professional timeline with detailed descriptions of roles and achievements.

### Skills (/skills)

Visual representation of technical skills organized by category (Frontend, Backend, Tools, Methodologies).

### Services (/services)

Overview of services offered with pricing calculator and availability status.

### Contact (/contact)

Contact form with validation, social media links, and location information.

## Tech Stack

**Frontend:**

- Next.js 14 (App Router)
- TypeScript
- React
- Tailwind CSS v4

**Form Handling:**

- React Hook Form
- Zod (validation)
- EmailJS

**Development Tools:**

- ESLint
- Git / GitHub
- VS Code

## Author

Personal project developed by [**Nadir AMMI SAID**](https://www.linkedin.com/in/nadir-ammisaid/) to showcase my full-stack development skills and provide a platform for professional opportunities.

🔗 Discover the project online: **[https://portfolio-nad.vercel.app](https://portfolio-nad.vercel.app)**

**Contact me on LinkedIn:** **[https://linkedin.com/in/nadir-ammisaid/](https://www.linkedin.com/in/nadir-ammisaid/)**

<!--
## Contribution

Contributions are welcome! To contribute:

1. **Fork** the repository
2. **Clone** your fork to your local machine
3. Create a new branch (git switch -c feature/your-feature)
4. **Commit** your changes (git commit -m 'Add feature')
5. **Push** to your branch (git push origin feature/your-feature)
6. Create a **Pull Request**

**Best practices:**
- Run `npm run lint` before pushing changes
- Follow clean code principles
- Write clear commit messages
- Test thoroughly before submitting PR -->
