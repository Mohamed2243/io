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
  title: 'Full Stack .NET Developer',
  location: 'Egypt',
  summary:
    'I build production business applications — healthcare systems, CRM platforms, and secure REST APIs — using ASP.NET Core, SQL Server, and modern frontends with Angular and React.',
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
    role: 'Full Stack .NET Developer',
    description:
      'A production healthcare platform for radiology appointments, insurance workflows, pharmacy and laboratory contracts, and administrative operations. I contributed across ASP.NET Core APIs, SQL Server, and a React frontend — including JWT authentication, role-based access, and real-time notifications.',
    stack: [
      'ASP.NET Core',
      'C#',
      'SQL Server',
      'REST APIs',
      'JWT',
      'React',
      'JavaScript',
      'Firebase',
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
      'REST API endpoints for appointments and insurance workflows',
      'Role-based permissions and JWT authentication',
      'SQL Server data models for contracts and operations',
      'React UI integrated with backend services and Firebase notifications',
    ],
  },
  {
    id: 'elite-coach-crm',
    title: 'Elite Coach CRM',
    category: 'Fitness Coaching Platform',
    role: 'Full Stack .NET Developer',
    description:
      'A fitness coaching CRM covering client onboarding, workout and nutrition plans, progress tracking, and coach-client communication. I worked on ASP.NET Core APIs, SQL Server persistence, and React dashboards with secure authentication and role-based features.',
    stack: [
      'ASP.NET Core',
      'C#',
      'SQL Server',
      'REST APIs',
      'JWT',
      'React',
      'TypeScript',
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
      'Client registration and onboarding APIs',
      'Workout and nutrition modules with SQL Server backend',
      'Coach dashboard with role-based access',
      'Progress tracking integrated through REST APIs',
    ],
  },
  {
    id: 'docway-platform',
    title: 'DOC WAY Healthcare Platform',
    category: 'Medical Marketplace & Operations',
    role: 'Full Stack .NET Developer',
    description:
      'A healthcare marketplace and operations platform for medical properties, medicine requests, jobs, contracts, and user permissions. I built features using ASP.NET Core, Angular, SQL Server, and REST APIs with JWT-based authentication and role-based administration.',
    stack: [
      'ASP.NET Core',
      'C#',
      'SQL Server',
      'REST APIs',
      'JWT',
      'Angular',
      'TypeScript',
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
      'Marketplace and property modules backed by ASP.NET Core APIs',
      'Medicine request workflows with SQL Server data layer',
      'Angular admin interfaces for contracts and customers',
      'User roles, permissions, and JWT-secured endpoints',
    ],
  },
  {
    id: 'gossor-translation',
    title: 'Gossor Translation Website',
    category: 'Client-Facing Business Website',
    role: 'React Frontend Developer',
    description:
      'A responsive Arabic client-facing website for a certified translation office, focused on clear service presentation, trust-building content, and a mobile-friendly inquiry experience.',
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
    label: 'API & Security',
    skills: [
      'REST APIs',
      'JWT',
      'Identity',
      'Firebase Notifications',
    ],
  },
  {
    label: 'Frontend',
    skills: [
      'Angular',
      'React',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Responsive Design',
      'Vite',
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
]