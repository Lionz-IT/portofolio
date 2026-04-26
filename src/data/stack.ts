export interface StackItem {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'database';
}

export const stack: StackItem[] = [
  { name: 'Next.js 14/15', category: 'framework' },
  { name: 'Laravel', category: 'framework' },
  { name: 'Flutter', category: 'framework' },
  { name: 'React.js', category: 'framework' },
  { name: 'Node.js', category: 'framework' },
  { name: 'Tailwind CSS', category: 'framework' },
  { name: 'Bootstrap', category: 'framework' },
  { name: 'Git', category: 'tool' },
  { name: 'GitHub', category: 'tool' },
  { name: 'Figma (UI/UX)', category: 'tool' },
  { name: 'Supabase', category: 'tool' },
  { name: 'AWS', category: 'tool' },
  { name: 'Vercel', category: 'tool' },
  { name: 'Render', category: 'tool' },
  { name: 'MySQL', category: 'database' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'JavaScript (ES6+)', category: 'language' },
  { name: 'TypeScript', category: 'language' },
  { name: 'PHP', category: 'language' },
  { name: 'Python', category: 'language' },
  { name: 'Java', category: 'language' },
  { name: 'Dart', category: 'language' },
  { name: 'HTML5', category: 'language' },
  { name: 'CSS3', category: 'language' },
];
