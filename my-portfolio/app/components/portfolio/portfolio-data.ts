export type IconName = 'arrow' | 'github' | 'linkedin' | 'download' | 'menu' | 'close' | 'code' | 'mail'

export type Project = {
  title: string
  category: string
  description: string
  tags: string[]
  image: string
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
    title: 'Job Portal',
    category: 'Job Search Platform',
    description: 'A job portal that helps people explore opportunities and connect with relevant openings.',
    tags: ['React', 'JavaScript', 'Web Development'],
    image: '/image/jobportal.png',
    liveUrl: 'https://job-portal-z2uj.vercel.app/',
    codeUrl: 'https://github.com/rahelfikre2025-create',
  },
  {
    title: 'Sheggar Wheels',
    category: 'Peer-to-Peer Car Rental Platform',
    description: 'A car rental application for Addis Ababa, allowing renters to explore vehicles, submit booking requests, and manage reservations through role-specific dashboards.',
    tags: ['Next.js', 'React', 'JavaScript', 'Local Storage'],
    image: '/image/sheggarwheels2.png',
    liveUrl: 'https://sheggar-wheels-gules.vercel.app/',
    codeUrl: 'https://github.com/rahelfikre2025-create',
  },
  {
    title: 'Addis Eats Next.js',
    category: 'Food Ordering Web Application',
    description: 'A food ordering platform featuring menu browsing, search and category filters, cart management, checkout, order workflows, and an administrative interface.',
    tags: ['Next.js', 'React', 'JavaScript'],
    image: '/image/addiseatsnext1.png',
    liveUrl: 'https://addis-eats-next-two.vercel.app/',
    codeUrl: 'https://github.com/rahelfikre2025-create',
  },
  {
    title: 'Addis Eats React',
    category: 'Food Ordering Web Application',
    description: 'A React version of the Addis Eats ordering experience, with food discovery, cart management, and an easy checkout flow.',
    tags: ['React', 'JavaScript', 'CSS'],
    image: '/image/addiseatsreact2.png',
    liveUrl: 'https://addis-eats-react-project.vercel.app/',
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
  {
    date: 'Oct 2026 – Present', category: 'Internship', title: 'Healthcare Job Matching Platform', organization: 'Rohobot Healthcare',
    summary: 'Working with a five-person team on a healthcare job-matching platform, with a focus on backend testing and API integration.',
    details: ['Collaborate with a team of five to develop a platform connecting healthcare professionals with relevant opportunities.', 'Contribute to backend testing and API integration as part of the product workflow.'],
  },
  {
    date: 'Jul 2026 – Dec 2026', category: 'Professional Training', title: 'Advanced Digital Skills Training Program', organization: 'IBT – QIYAS',
    summary: 'Six-month software development program covering frontend development and ongoing backend training.',
    details: ['Completed the frontend phase using HTML, CSS, JavaScript, React, and Next.js.', 'Built responsive applications through practical and team projects, applying component-based development, routing, state, and API concepts.', 'Currently developing backend skills with Node.js, Express.js, and MongoDB.'],
  },
  {
    date: 'Oct 2026', category: 'Training Project', title: 'Sheggar Wheels', organization: 'Peer-to-peer car rental platform',
    summary: 'Built a car rental experience for the Addis market, including vehicle browsing, booking requests, and owner workflows.',
    details: ['Developed responsive interfaces with Next.js, React, JavaScript, and Tailwind CSS.', 'Created renter and owner experiences for vehicle discovery, reservation requests, and booking management.', 'Used browser storage for application data and Recharts for dashboard visualizations.'],
  },
  {
    date: 'Oct 2026', category: 'Personal Project', title: 'Addis Eats', organization: 'Restaurant ordering platform',
    summary: 'Created customer and admin experiences for discovering food, managing orders, and maintaining a restaurant menu.',
    details: ['Built with Next.js, React, JavaScript, and Tailwind CSS.', 'Implemented menu search, category filters, pagination, cart and checkout flows, and order tracking.', 'Added admin tools for menu management and order workflows using Next.js routes and browser storage.'],
  },
  {
    date: 'Mar 2026', category: 'Final-Year Project', title: 'Online Job Portal', organization: 'University team project · Team of four',
    summary: 'Led a team project to build a job portal supporting job discovery and recruitment workflows.',
    details: ['Coordinated a four-person team through planning and development.', 'Built the application with MongoDB, Express, React, and Node.js, using MongoDB Atlas for hosted data.'],
  },
  {
    date: 'Mar 2026', category: 'Education', title: 'BSc in Computer Science', organization: 'Mekdela Amba University',
    summary: 'Graduated with a CGPA of 3.56/4.00 and a National Exit Exam score of 75%.',
    details: ['Completed a Bachelor of Science degree in Computer Science.', 'Graduated in March 2026 with a CGPA of 3.56/4.00.'],
  },
]
