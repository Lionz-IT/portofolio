export interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  url?: string;
  github?: string;
  year: string;
  gallery?: string[];
}

export const projects: Project[] = [
  {
    title: 'DailyVit',
    description: 'Interactive health monitoring web dashboard. Integrated with the Huawei Health Kit API to process smartwatch biometric data into physical metric visualizations and preventive lifestyle recommendations.',
    tech: ['API Integration', 'Data Visualization'],
    url: 'https://dailyvit.vercel.app/',
    year: '2026',
  },
  {
    title: 'Tuberku',
    description: 'Tuberculosis (TB) case monitoring information system mobile app. Designed to facilitate healthcare workers in tracking, monitoring, and managing patient data effectively.',
    tech: ['Full-stack', 'Mobile Dev', 'UI/UX'],
    year: '2026',
  },
  {
    title: 'SELA - Landing Page',
    description: 'Optimized and responsive cross-device landing page for the SELA application, focusing on page load performance and visual appeal.',
    tech: ['Frontend', 'Performance Optimization'],
    url: 'https://sela.web.id/',
    year: '2026',
  },
  {
    title: 'SELA - Task Management',
    description: 'Task management mobile app with an interactive interface that makes it easy for users to centrally track and manage productivity.',
    tech: ['Frontend Mobile', 'UI Implementation'],
    url: 'https://play.google.com/store/apps/details?id=com.pdbl.sela',
    year: '2026',
  },
  {
    title: 'Campus Pre-loved',
    description: 'C2C e-commerce platform for the campus ecosystem. Features a dynamic interface and integrated database architecture for secure pre-loved goods transactions.',
    tech: ['Next.js', 'Tailwind CSS', 'Supabase'],
    year: '2026',
  },
  {
    title: 'Washup',
    description: 'Laundry operational management app. Includes admin panel UI design and frontend development with speed optimization using Bun.',
    tech: ['Frontend', 'UI Design', 'Bun'],
    year: '2025 - 2026',
    image: '/washup/Dashboard.png',
    gallery: [
      '/washup/Dashboard.png',
      '/washup/Add Employee.jpg',
      '/washup/Create Service.jpg',
      '/washup/Create Voucher.jpg',
      '/washup/Customer List.jpg',
      '/washup/Detail Customers.jpg',
      '/washup/Employee List.jpg',
      '/washup/Voucher List.jpg'
    ]
  },
];
