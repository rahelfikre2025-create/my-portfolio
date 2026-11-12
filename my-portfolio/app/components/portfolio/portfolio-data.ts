export type IconName = 'arrow' | 'github' | 'linkedin' | 'download' | 'menu' | 'close' | 'code' | 'mail'

export type Project = {
  title: string
  category: string
  description: string
  tags: string[]
  images: string[]
  liveUrl: string
  codeUrl: string
}

export const skillGroups = [
  { name: 'Frontend', icon: '⚛', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Responsive Design'], status: 'Used in Projects' },
  { name: 'Backend', icon: '⚙', items: ['Node.js', 'REST APIs', 'Authentication', 'Server-side Development'], status: 'Currently Learning' },
  { name: 'Database', icon: '◇', items: ['MongoDB', 'Database Fundamentals'], status: 'Currently Learning' },
  { name: 'Tools', icon: '⌁', items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Deployment Platforms'], status: 'Used in Projects' },
  { name: 'Learning Next', icon: '→', items: ['TypeScript', 'Express.js', 'PostgreSQL', 'Docker'], status: 'Currently Learning' },
]

export const projects = [
  {
    title: 'Addis Eats',
    category: 'Food Ordering Web Application · Next.js',
    description: 'A food ordering platform featuring menu browsing, search and category filters, cart management, checkout, order workflows, and an administrative interface.',
    tags: ['Next.js', 'React', 'JavaScript'],
    images: ['/image/addiseatsnext1.png', '/image/addiseatsnxt2.png'],
    liveUrl: 'https://addis-eats-next-two.vercel.app/',
    codeUrl: 'https://github.com/rahelfikre2025-create',
  },
  {
    title: 'Addis Eats',
    category: 'Food Ordering Web Application · React',
    description: 'A React version of the Addis Eats ordering experience, with food discovery, cart management, and an easy checkout flow.',
    tags: ['React', 'JavaScript', 'CSS'],
    images: ['/image/addiseatsreact1.png', '/image/addiseatsreact2.png'],
    liveUrl: 'https://addis-eats-react-project.vercel.app/',
    codeUrl: 'https://github.com/rahelfikre2025-create',
  },
  {
    title: 'Job Portal',
    category: 'Job Search Platform',
    description: 'A job portal that helps people explore opportunities and connect with relevant openings.',
    tags: ['React', 'JavaScript', 'Web Development'],
    images: ['/image/jobportal1.png', '/image/jobportal2.png'],
    liveUrl: 'https://job-portal-z2uj.vercel.app/',
    codeUrl: 'https://github.com/rahelfikre2025-create',
  },
  {
    title: 'Sheggar Wheels',
    category: 'Peer-to-Peer Car Rental Platform',
    description: 'A car rental application for Addis Ababa, allowing renters to explore vehicles, submit booking requests, and manage reservations through role-specific dashboards.',
    tags: ['Next.js', 'React', 'JavaScript', 'Local Storage'],
    images: ['/image/sheggarwheels1.png', '/image/sheggarwheels2.png'],
    liveUrl: 'https://sheggar-wheels-gules.vercel.app/',
    codeUrl: 'https://github.com/rahelfikre2025-create',
  },
] satisfies Project[]

export const journey = [
  ['2026', 'BSc in Computer Science', 'Mekdela Amba University'],
  ['2026', 'IBT – QIYAS Advanced Digital Skills Training Program', 'Frontend Development'],
  ['2026', 'Hands-on Projects', 'Addis Eats, Sheggar Wheels'],
  ['Next', 'Backend Development', '& Full-Stack Engineering'],
]

export const developmentProcess = [
  ['01', 'Understand the Problem', 'Analyze requirements and define the goal.'],
  ['02', 'Plan the User Experience', 'Design a clear and intuitive flow.'],
  ['03', 'Build the Interface', 'Create responsive and accessible UI.'],
  ['04', 'Develop Application Logic', 'Implement features and integrate APIs.'],
  ['05', 'Test, Refine, and Deploy', 'Fix issues, improve performance, ship.'],
]

export const experience = [
  ['2026', 'Education', 'BSc in Computer Science · Mekdela Amba University', 'Graduated with a CGPA of 3.56'],
  ['2026', 'Professional Training', 'IBT – QIYAS Advanced Digital Skills Training Program', 'Six-month Full-Stack Software Development program · Addis Ababa, Ethiopia'],
  ['2026', 'Selected Development Projects', 'Addis Eats · Sheggar Wheels', 'Frontend development with React, Next.js, JavaScript, and Tailwind CSS'],
  ['Current', 'Professional Development', 'Backend & Full-Stack Engineering', 'Building expertise in Node.js, MongoDB, and API development'],
]
