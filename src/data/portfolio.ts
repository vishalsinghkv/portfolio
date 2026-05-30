export const profile = {
  name: 'Vishal Kumar Singh',
  title: 'SDE-II',
  tagline:
    'Full-stack engineer crafting scalable products — from fintech workflows to performant UIs.',
  email: 'vishalsingh.vs519@gmail.com',
  phone: '7054014234',
  linkedin: 'https://linkedin.com/in/vishal-kumar-singh-478141173',
  github: 'https://github.com/vishalsinghkv',
} as const

/** Served from `public/` — replace `public/resume.pdf` with your latest resume. */
export const resume = {
  /** Path segment only; full URL is built with `import.meta.env.BASE_URL` in ResumeDownload. */
  path: 'resume.pdf',
  downloadFilename: 'Vishal-Kumar-Singh-Resume.pdf',
} as const

export const skillCategories = [
  {
    label: 'Frontend',
    skills: ['React', 'Angular', 'Next.js', 'Redux', 'Zustand', 'Tailwind', 'Vite'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Spring Boot', 'JPA/Hibernate', 'Kafka', 'REST API'],
  },
  {
    label: 'Infrastructure',
    skills: ['Docker', 'Kubernetes'],
  },
  {
    label: 'Languages & Data',
    skills: ['Java', 'MySQL', 'MongoDB', 'C++', 'Python'],
  },
] as const

export const experience = [
  {
    company: 'Cars24',
    role: 'SDE-II',
    period: 'Sep 2024 – Jan 2026',
    highlights: [
      'Led partner onboarding and loan disbursement workflows, cutting manual processing time by ~30%.',
      'Built Holdback Management with Maker-Checker workflow, RBAC, and lifecycle state management — ~25% fewer approval errors.',
      'Shipped RBI compliance (PAN masking, consent management, CIBIL expiry) with 100% compliance coverage.',
      'Integrated Google Analytics for data-driven decisions; user engagement up ~15%.',
      'Refactored UI and optimized workflows; page load time down ~20%.',
      'Executed zero-downtime data migration for systems handling thousands of records.',
      'Reduced MTTR on high-priority production issues by ~40%; mentored 2–3 interns.',
    ],
  },
  {
    company: 'Lendingkart',
    role: 'SDE-I',
    period: 'Jan 2022 – Sep 2024',
    highlights: [
      'Built loan agreement generation with Angular and Node.js — ~50% less manual effort.',
      'Developed Ask Management System (React, Spring Boot) handling 1000+ monthly queries.',
      'Streamlined lender onboarding; onboarding time down ~25%.',
      'Delivered features and fixes across dashboards; load time improved ~15%.',
    ],
  },
  {
    company: 'HummingWave Technologies',
    role: 'SDE-I',
    period: 'Sep 2021 – Jan 2022',
    highlights: [
      'Shipped responsive Next.js apps; mobile usability and engagement up ~20%.',
      'Built reusable React components and performance optimizations on SmartKarrot.',
      'Integrated Salesforce via LWC and Apex — ~30% less manual data handling.',
    ],
  },
] as const

export const projects = [
  {
    name: 'Untrash',
    description:
      'Analytics platform for eco-friendly product insights with a fast, responsive experience.',
    tech: ['React', 'Tailwind CSS'],
    highlights: [
      'Responsive UI with ~25% faster page loads.',
      'Reusable components and optimized state management.',
    ],
  },
  {
    name: 'GoogleKeep Clone',
    description:
      'Full-stack note-taking app inspired by Google Keep with search and full CRUD.',
    tech: ['React', 'Spring Boot', 'Java', 'Hibernate', 'MySQL'],
    highlights: [
      'REST APIs for create, edit, delete, and search.',
      'End-to-end note lifecycle with persistent storage.',
    ],
  },
] as const

export const education = {
  degree: 'Bachelor of Technology — Computer Science and Engineering',
  institution: 'Madan Mohan Malaviya University of Technology',
  location: 'Gorakhpur, India',
  period: 'Jul 2017 – Jun 2021',
} as const

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const
