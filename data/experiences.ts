export interface Experience {
  id: string;
  company: string;
  logo?: string;
  position: string;
  location: string;
  period: string;
  description: string;
  tasks: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Worldline Group",
    position: "Full Stack Developer - Apprenticeship",
    location: "Lyon, France",
    period: "January 2026 - September 2028",
    description:
      "Full-stack application development for Cykleo mobility solution",
    tasks: [
      "Develop Java/Spring Boot and JavaScript/EmberJS applications",
      "Design REST APIs and integrate payment services",
      "Participate in version upgrades and deployments",
      "Provide data center maintenance and production support",
      "Work in Agile Kanban team of 8 people using Jira and GitLab CI/CD",
    ],
    skills: [
      "Java",
      "Spring Boot",
      "EmberJS",
      "MySQL",
      "Jira",
      "GitLab CI/CD",
      "Agile Kanban",
    ],
  },
  {
    id: "2",
    company: "JeelWork",
    position: "Full Stack Developer - Freelance",
    location: "Lyon, France",
    period: "November 2024 - Present",
    description:
      "End-to-end development of a showcase website connecting artisans and clients",
    tasks: [
      "Built landing page with optimized SEO and performance",
      "Developed responsive homepage with modern UI/UX",
      "Created admin dashboard for content management",
      "Implemented contact forms and service presentation pages",
      "Deployed production-ready application with Next.js SSG",
    ],
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SEO",
      "Responsive Design",
      "SSG",
    ],
  },
  {
    id: "3",
    company: "Alptis Group",
    position: "Account Manager",
    location: "Lyon, France",
    period: "December 2019 - September 2024",
    description:
      "Reimbursement management and third-party payment optimization",
    tasks: [
      "Managed 400+ weekly reimbursements with zero error tolerance",
      "Resolved 150+ anomalies systematically",
      "Reduced customer complaints by 30%",
      "Optimized processing times by 15%",
      "Implemented process improvements for efficiency",
    ],
    skills: [
      "Rigor",
      "Time management",
      "Problem solving",
      "Customer service",
      "Process optimization",
    ],
  },
  {
    id: "4",
    company: "Fortrade",
    position: "Account Manager",
    location: "Istanbul, Turkey",
    period: "October 2017 - September 2019",
    description:
      "Portfolio management and active prospecting in financial services",
    tasks: [
      "Managed portfolio worth 150K dollars",
      "Maintained relationships with 600+ investors",
      "Achieved 22% portfolio growth",
      "Increased profitability by 20%",
      "Awarded multiple times as Top 5 Account Manager and Salesman of the month",
    ],
    skills: [
      "Portfolio management",
      "Client relations",
      "Sales",
      "Financial analysis",
      "Prospecting",
    ],
  },
];
