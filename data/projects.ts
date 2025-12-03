export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: "frontend" | "backend" | "fullstack";
  image: string;
  github: string;
  demo?: string;
  featured: boolean;
  date: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Jeelwork",
    slug: "jeelwork",
    description: "Responsive showcase website connecting artisans and clients",
    longDescription: `Jeelwork is a modern showcase website built with Next.js using Static Site Generation for optimal performance and SEO.

Key features:
- Server-side rendering for fast page loads
- SEO optimized for better visibility
- Responsive design for all devices
- Clean and professional interface
- Contact forms and service presentation

Technical stack:
- Next.js with SSG for static generation
- TypeScript for type safety
- Tailwind CSS for styling
- Optimized images and assets`,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "SSG", "SEO"],
    category: "frontend",
    image: "/images/projects/jeelwork.png",
    github: "https://github.com/nadir-ammisaid/",
    demo: "https://www.jeelwork.com",
    featured: true,
    date: "2024-05",
  },
  {
    id: "2",
    title: "Task Connect",
    slug: "task-connect",
    description:
      "Platform connecting individuals and service providers for household services",
    longDescription: `Task Connect is a complete platform allowing individuals to find local service providers for various household services like cleaning, handyman work, and more.
    
Key features:
- Secure authentication with JWT
- Full CRUD announcement system
- Customizable user profiles
- Advanced search and filters
- Responsive interface
- Real-time notifications

Technical challenges:
- User session management
- MySQL query optimization
- API endpoint security
- Image upload and storage`,
    tags: ["React", "Node.js", "Express", "MySQL", "TypeScript"],
    category: "fullstack",
    image: "/images/projects/task-connect.png",
    github: "https://github.com/nadir-ammisaid/Task-Connect",
    demo: "https://www.taskconnect.fr",
    featured: true,
    date: "2024-12",
  },
  {
    id: "3",
    title: "Aventurier",
    slug: "aventurier",
    description:
      "Interactive Java/React game with dynamic ASCII map and REST API for server logic",
    longDescription: `Modern text adventure game combining an elegant React interface and robust Java Spring Boot server logic.

Architecture:
- React frontend for ASCII map display
- Spring Boot REST API for game logic
- Collision and wall management
- Game state persistence
- Hero movement via API calls

Key learnings:
- MVC architecture on backend
- Real-time client-server communication
- Complex state management
- RESTful API design`,
    tags: ["Java", "Spring Boot", "React", "TypeScript", "MVC", "REST API"],
    category: "fullstack",
    image: "/images/projects/aventurier.png",
    github: "https://github.com/nadir-ammisaid/Aventurier_Java_React",
    demo: "https://github.com/nadir-ammisaid/Aventurier_Java_React",
    featured: true,
    date: "2025-04",
  },
  {
    id: "4",
    title: "Smart Choice Hub",
    slug: "smart-choice-hub",
    description:
      "Collaborative platform with authentication, CRUD decision management and WYSIWYG editor",
    longDescription: `Collaborative web application allowing teams to create, share and vote on decisions together.

Tech stack:
- React and TypeScript for frontend
- Node.js/Express for API
- MySQL for persistence
- Jest for testing
- WYSIWYG editor for rich text

Teamwork:
- 5 developers
- 7 Agile sprints
- 100+ Pull Requests
- Systematic code reviews
- Agile methodology with daily standups`,
    tags: ["React", "TypeScript", "Node.js", "MySQL", "Jest", "Agile"],
    category: "fullstack",
    image: "/images/projects/smart-choice-hub.png",
    github: "https://github.com/nadir-ammisaid/smart-choice-hub",
    demo: "https://github.com/nadir-ammisaid/smart-choice-hub",
    featured: true,
    date: "2024-12",
  },
  {
    id: "5",
    title: "Kebab Monsters",
    slug: "kebab-monsters",
    description:
      "Responsive web app connected to Yelp API to locate the best kebabs on interactive map",
    longDescription: `Web application to discover the best kebabs nearby using real-time data from Yelp.

Features:
- Yelp API integration
- Interactive map with geolocation
- City-based search
- Favorites system
- Responsive interface
- Real-time data updates

Hackathon constraints:
- 2 days development
- Team of 4 developers
- 16 Pull Requests
- Fast-paced environment`,
    tags: ["React", "TypeScript", "Node.js", "Yelp API", "Geolocation"],
    category: "frontend",
    image: "/images/projects/kebab-monsters.png",
    github: "https://github.com/nadir-ammisaid/kebab_monsters",
    demo: "https://github.com/nadir-ammisaid/kebab_monsters",
    featured: true,
    date: "2024-12",
  },
  {
    id: "6",
    title: "We Art",
    slug: "we-art",
    description:
      "Responsive web app connected to Metropolitan Museum API to explore artworks",
    longDescription: `Web application to explore the Metropolitan Museum of Art collection with detailed artwork information.

Features:
- Metropolitan Museum API connection
- Artwork search with filters
- Favorites system
- Complete artwork details
- Responsive interface
- Image gallery

Team:
- 3 developers
- 1 month development
- 50+ Pull Requests
- Scrum methodology
- Sprint planning and retrospectives`,
    tags: ["React", "TypeScript", "REST API", "Scrum"],
    category: "frontend",
    image: "/images/projects/we-art.png",
    github:
      "https://github.com/WildCodeSchool-2024-09/js-lyon-2024-09-jaune-P2-WeArt",
    demo: "https://github.com/WildCodeSchool-2024-09/js-lyon-2024-09-jaune-P2-WeArt",
    featured: true,
    date: "2024-11",
  },
  {
    id: "7",
    title: "Flag Master",
    slug: "flag-master",
    description:
      "Interactive game to identify country flags with scoring and difficulty levels",
    longDescription: `Educational game allowing users to test their knowledge of world flags.

Features:
- Multiple difficulty levels
- Score tracking
- Timer for each round
- Hints system
- Responsive design
- Country information display

Technical aspects:
- React for UI
- State management for game logic
- API integration for flag data
- Performance optimization`,
    tags: ["React", "TypeScript", "Game Development"],
    category: "frontend",
    image: "/images/projects/flag-master.png",
    github: "https://github.com/nadir-ammisaid/Flag-Master",
    demo: "https://github.com/nadir-ammisaid/Flag-Master",
    featured: true,
    date: "2024-10",
  },
];
