export interface TechItem {
  name: string;
  icon: string;
  level: "Beginner" | "Intermediate" | "Expert";
  category: string;
}

export const techStackData: Record<string, TechItem[]> = {
"Backend": [
  {
    name: "NodeJs",
    icon: "devicon:nodejs",
    level: "Expert",
    category: "Backend"
  },
  {
    name: "Fastify",
    icon: "devicon:fastify",
    level: "Intermediate",
    category: "Backend"
  },
  {
    name: "Express",
    icon: "skill-icons:expressjs-dark",
    level: "Expert",
    category: "Backend"
  },
  {
    name: "Socket.io",
    icon: "simple-icons:socketdotio",
    level: "Intermediate",
    category: "Backend"
  },
  {
    name: "Bull Mq",
    icon: "devicon:redis",
    level: "Beginner",
    category: "Database"
  },
],

"Frontend": [
  {
    name: "React",
    icon: "skill-icons:react-dark",
    level: "Expert",
    category: "Frontend"
  },
  {
    name: "Next.js",
    icon: "devicon:nextjs",
    level: "Expert",
    category: "Intermediate"
  },
  {
    name: "TypeScript",
    icon: "devicon:typescript",
    level: "Intermediate",
    category: "Frontend"
  },
  {
    name: "JavaScript",
    icon: "devicon:javascript",
    level: "Expert",
    category: "Frontend"
  },
  {
    name: "Tailwind CSS",
    icon: "logos:tailwindcss-icon",
    level: "Expert",
    category: "Frontend"
  },
  {
    name: "Zustand",
    icon: "devicon:zustand",
    level: "Expert",
    category: "Frontend"
  },
],

"Database": [
  {
    name: "PostgreSQL",
    icon: "logos:postgresql",
    level: "Beginner",
    category: "Database"
  },
  {
    name: "MongoDB",
    icon: "devicon:mongodb",
    level: "Expert",
    category: "Database"
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
    level: "Intermediate",
    category: "Database"
  },
  
],

"Cloud & DevOps": [
  {
    name: "AWS",
    icon: "skill-icons:aws-light",
    level: "Beginner",
    category: "Cloud & DevOps"
  },
  {
    name: "Docker",
    icon: "devicon:docker",
    level: "Intermediate",
    category: "Cloud & DevOps"
  },
  {
    name: "Git",
    icon: "devicon:git",
    level: "Expert",
    category: "Cloud & DevOps"
  },
],

  
};

