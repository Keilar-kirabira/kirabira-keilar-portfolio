export const projects = [
  {
    id: 1,
    title: 'Grocery Buddy',
    description:
      'A full-stack grocery management application to help users track grocery lists and manage daily expenditures more effectively, with category-based organization and dashboard analytics.',
    features: [
      'Secure JWT authentication',
      'CRUD for grocery items',
      'Category-based organization',
      'Dashboard analytics (completed vs pending)',
      'Mobile-first responsive interface',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'Bootstrap'],
    challenge:
      'Structuring PostgreSQL data models to support category-based organization and analytics while keeping the interface responsive across web and mobile.',
    github: 'https://github.com/keilarkirabira',
    demo: '#',
    image: null, // Replace with imported screenshot
  },
  {
    id: 2,
    title: 'Personal Portfolio Website',
    description:
      'A responsive personal portfolio site showcasing projects, skills, and experience, built with a mobile-first design approach and refined for SEO and navigation.',
    features: [
      'Mobile-first responsive design',
      'SEO-optimized structure',
      'Clean, recruiter-friendly navigation',
      'Cross-device compatibility',
    ],
    tech: ['HTML5', 'Tailwind CSS', 'JavaScript'],
    challenge:
      'Improving SEO and UI structure to make the site more visible and easier to navigate for recruiters, while maintaining a consistent mobile-first layout.',
    github: 'https://github.com/keilarkirabira',
    demo: '#',
    image: null,
  },
  {
    id: 3,
    title: 'Mayondo Wood and Furniture Ltd',
    description:
      'A full-stack B2B inventory and business management system built to replace manual record-keeping and improve tracking of sales, stock, and customer data.',
    features: [
      'Admin dashboard modules',
      'Secure backend with JWT authentication',
      'Sales and inventory tracking',
      'Customer data management',
      'Responsive, user-friendly interface',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Bootstrap'],
    challenge:
      'Designing secure backend services and an admin dashboard that could reliably replace manual record-keeping for sales, stock, and customer tracking.',
    github: 'https://github.com/keilarkirabira',
    demo: '#',
    image: null,
  },
]