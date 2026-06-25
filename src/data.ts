export const profile = {
  name: 'Mohamed AbdElhamed',
  title: 'Frontend Developer',
  location: 'Cairo, Egypt',
  email: 'mohamedelanby@icloud.com',
  phone: '+20 101 901 5842',
  github: 'https://github.com/Mohamed2243',
  linkedin: 'https://www.linkedin.com/in/mohamed-abdelhamed-2a7ba1246/',
  summary:
    'React Frontend Developer with hands-on experience building responsive web applications using React.js, TypeScript, and JavaScript. Experienced in developing reusable UI components, integrating REST APIs, implementing JWT authentication, and building clean, maintainable user interfaces for real business applications.',
}

export const projects = [
  {
    title: 'Elite Coach CRM',
    role: 'Frontend Developer',
    description:
      'Responsive dashboards for coaches and clients with workout plans, nutrition plans, client history, and profile management. JWT auth and protected routes.',
    stack: ['React.js', 'TypeScript', 'ASP.NET Core', 'SQL Server'],
    demo: 'https://omarharery.com',
    featured: true,
  },
  {
    title: 'Gossor Translation',
    role: 'Frontend Developer',
    description:
      'Business website with reusable UI components, responsive layout, and SEO best practices for improved search visibility.',
    stack: ['React.js', 'TypeScript'],
    demo: 'https://gossortranslation.com',
    featured: true,
  },
  {
    title: 'Radiology Center Booking',
    role: 'Full-Stack Developer',
    description:
      'Appointment and patient management system integrated with REST APIs, SQL Server, and Firebase for healthcare workflows.',
    stack: ['Angular', 'ASP.NET Core', 'SQL Server', 'Firebase'],
    featured: false,
  },
  {
    title: 'Pharmacy Marketplace',
    role: 'Full-Stack Developer',
    description:
      'Pharmacy management modules with order workflows and responsive interfaces for daily business operations.',
    stack: ['Angular', 'ASP.NET Core', 'SQL Server'],
    featured: false,
  },
  {
    title: 'Laboratory Management System',
    role: 'Developer',
    description: 'Client project for lab workflows and business operations management.',
    stack: ['Angular', 'ASP.NET Core', 'SQL Server'],
    featured: false,
  },
  {
    title: 'Fingerprint Attendance System',
    role: 'Developer',
    description: 'Attendance tracking solution integrated with business HR workflows.',
    stack: ['ASP.NET Core', 'SQL Server'],
    featured: false,
  },
  {
    title: 'Pharmaceutical Factory ERP',
    role: 'Developer',
    description: 'Enterprise resource planning system for pharmaceutical manufacturing operations.',
    stack: ['Angular', 'ASP.NET Core', 'SQL Server'],
    featured: false,
  },
]

export const skillGroups = [
  {
    label: 'Frontend',
    skills: [
      'React.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'React Hooks',
      'Responsive Design',
    ],
  },
  {
    label: 'Backend',
    skills: ['ASP.NET Core', 'REST APIs', 'JWT Authentication', 'Entity Framework Core'],
  },
  {
    label: 'Database',
    skills: ['SQL Server', 'Firebase'],
  },
  {
    label: 'Tools',
    skills: ['Git', 'Azure DevOps', 'Jenkins', 'Visual Studio', 'VS Code'],
  },
]

export const education = {
  degree: 'Faculty of Arts, English Language & Translation',
  school: 'Tanta University',
  period: '2019 — 2023',
}

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]
