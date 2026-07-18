export type Project = {
  id: string
  title: string
  category: string
  role: string
  description: string
  stack: string[]
  featured: boolean
  cover: string
  liveUrl?: string
  publicUrl?: string
  videoUrl?: string
  videoPoster?: string
  gallery?: string[]
  highlights: string[]
}

const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

export const profile = {
  name: 'Mohamed Abdelhamed',
  title: 'React Frontend Engineer',
  location: 'Egypt',
  summary:
    'I build responsive, production-ready web applications for healthcare, business management, and client-facing platforms, with a focus on clean interfaces, reliable API integration, and maintainable code.',
  email: 'mohamed.elanby@icloud.com',
  phone: '+20 01019 015 842',
  linkedin: 'https://www.linkedin.com/in/mohamed-abdelhamed-2a7ba1246',
  github: 'https://github.com/Mohamed2243',
  resume: asset('cv/Mohamed_Abdelhamed.pdf'),
}

export const education = {
  degree: 'Bachelor of Arts — English & Translation',
  school: 'Tanta University',
  period: '2019 — 2023',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const projects: Project[] = [
  {
    id: 'radiology-platform',
    title: 'Radiology Management Platform',
    category: 'Healthcare Management System',
    role: 'Frontend & Backend Developer',
    description:
      'A healthcare operations platform for managing radiology appointments, insurance workflows, users, pharmacy and laboratory contracts, administrative processes, and real-time notifications.',
    stack: [
      'React',
      'JavaScript',
      'ASP.NET Core',
      'SQL Server',
      'Firebase',
      'REST APIs',
      'JWT',
    ],
    featured: true,
    cover: asset('projects/radiology/image.png'),
    publicUrl: 'https://www.khaleddewan.info/',
    videoUrl: asset('projects/radiology/demo.mp4'),
    videoPoster: asset('projects/radiology/poster.png'),
    gallery: [
      asset('projects/radiology/gallery-1.webp'),
      asset('projects/radiology/gallery-2.webp'),
    ],
    highlights: [
      'Appointment booking and management',
      'Insurance workflows and contract management',
      'User roles, permissions, and Firebase notifications',
      'Integration with the mobile application',
    ],
  },
  {
    id: 'elite-coach-crm',
    title: 'Elite Coach CRM',
    category: 'Fitness Coaching Platform',
    role: 'Full Stack Developer',
    description:
      'A complete coaching platform that streamlines the client journey from online registration to personalized workout plans, nutrition programs, recipes, progress tracking, and coach-client communication.',
    stack: [
      'React',
      'TypeScript',
      'ASP.NET Core',
      'SQL Server',
      'REST APIs',
      'JWT',
    ],
    featured: true,
    cover: asset('projects/elite-coach/cover.png'),
    liveUrl: 'https://omarharery.com/',
    videoUrl: asset('projects/elite-coach/demo.mp4'),
    videoPoster: asset('projects/elite-coach/poster.png'),
    gallery: [
      asset('projects/elite-coach/gallery-1.webp'),
      asset('projects/elite-coach/gallery-2.webp'),
    ],
    highlights: [
      'Public client onboarding',
      'Workout & nutrition management',
      'Coach dashboard',
      'Client progress tracking',
    ],
  },
  {
    id: 'docway-platform',
    title: 'DOC WAY Healthcare Platform',
    category: 'Medical Marketplace & Operations',
    role: 'Angular Frontend & Backend Developer',
    description:
      'A medical ecosystem supporting medical property sales and rentals, medicine requests, jobs and training opportunities, contracts, customers, user types, permissions, and administrative workflows.',
    stack: [
      'Angular',
      'TypeScript',
      'ASP.NET Core',
      'SQL Server',
      'REST APIs',
      'JWT',
    ],
    featured: true,
    cover: asset('projects/docway/image.png'),
    publicUrl: 'https://docway.org/',
    videoUrl: asset('projects/docway/demo.mp4'),
    videoPoster: asset('projects/docway/poster.png'),
    gallery: [
      asset('projects/docway/gallery-1.webp'),
      asset('projects/docway/gallery-2.webp'),
    ],
    highlights: [
      'Medical property sales and rentals',
      'Medicine requests and marketplace workflows',
      'Jobs and training opportunities',
      'Contracts, customers, roles, and permissions',
    ],
  },
  {
    id: 'gossor-translation',
    title: 'Gossor Translation Website',
    category: 'Client-Facing Business Website',
    role: 'React Frontend Developer',
    description:
      'A responsive Arabic website for a certified translation office, designed to present services clearly, build trust, and simplify customer inquiries.',
    stack: [
      'React',
      'JavaScript',
      'Vite',
      'Responsive Design',
      'SEO',
    ],
    featured: true,
    cover: asset('projects/gossor/image.png'),
    liveUrl: 'https://gossortranslation.com/',
    gallery: [
      asset('projects/gossor/desktop.webp'),
      asset('projects/gossor/mobile.webp'),
      asset('projects/gossor/gallery-1.webp'),
    ],
    highlights: [
      'Responsive Arabic interface',
      'Mobile-friendly navigation',
      'Clear service presentation',
      'SEO-friendly public website structure',
    ],
  },
]

export const skillGroups = [
  {
    label: 'Frontend',
    skills: [
      'React',
      'JavaScript',
      'TypeScript',
      'Angular',
      'HTML5',
      'CSS3',
      'Responsive Design',
      'Vite',
    ],
  },
  {
    label: 'Backend',
    skills: [
      'ASP.NET Core',
      'C#',
      'Entity Framework Core',
      'Dapper',
    ],
  },
  {
    label: 'Database',
    skills: [
      'SQL Server',
      'Relational Data Modeling',
      'Query Optimization',
    ],
  },
  {
    label: 'APIs & Auth',
    skills: [
      'REST APIs',
      'GraphQL',
      'JWT',
      'Identity',
      'Firebase Notifications',
    ],
  },
  {
    label: 'Tools',
    skills: [
      'Git',
      'GitHub',
      'Postman',
      'Figma',
      'VS Code',
      'Rider',
    ],
  },
  {
    label: 'DevOps',
    skills: [
      'Azure DevOps',
      'CI/CD Pipelines',
      'Jenkins Exposure',
      'Production Deployment',
    ],
  },
]
