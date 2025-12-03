export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "database" | "tools" | "methodologies";
}

export const skills: Skill[] = [
  { name: "React", level: 85, category: "frontend" },
  { name: "TypeScript", level: 75, category: "frontend" },
  { name: "Next.js", level: 75, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 65, category: "frontend" },

  { name: "Java", level: 60, category: "backend" },
  { name: "Spring Boot", level: 60, category: "backend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 80, category: "backend" },

  { name: "MySQL", level: 75, category: "database" },
  { name: "PostgreSQL", level: 60, category: "database" },

  { name: "Git", level: 90, category: "tools" },
  { name: "GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 50, category: "tools" },
  { name: "Figma", level: 70, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  { name: "IntelliJ", level: 70, category: "tools" },
  { name: "Puppeteer", level: 65, category: "tools" },

  { name: "Agile Scrum", level: 90, category: "methodologies" },
  { name: "OOP", level: 70, category: "methodologies" },
  { name: "MVC", level: 75, category: "methodologies" },
  { name: "REST API", level: 80, category: "methodologies" },
];
