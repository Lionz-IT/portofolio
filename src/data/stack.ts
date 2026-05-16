export interface StackItem {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'database';
  color?: string;
  icon: string;
}

export const stack: StackItem[] = [
  { name: 'Next.js 14/15', category: 'framework', color: '#ffffff', icon: 'simple-icons:nextdotjs' },
  { name: 'Laravel', category: 'framework', color: '#FF2D20', icon: 'simple-icons:laravel' },
  { name: 'Flutter', category: 'framework', color: '#02569B', icon: 'simple-icons:flutter' },
  { name: 'React.js', category: 'framework', color: '#61DAFB', icon: 'simple-icons:react' },
  { name: 'Node.js', category: 'framework', color: '#339933', icon: 'simple-icons:nodedotjs' },
  { name: 'Tailwind CSS', category: 'framework', color: '#06B6D4', icon: 'simple-icons:tailwindcss' },
  { name: 'Bootstrap', category: 'framework', color: '#7952B3', icon: 'simple-icons:bootstrap' },
  { name: 'Git', category: 'tool', color: '#F05032', icon: 'simple-icons:git' },
  { name: 'GitHub', category: 'tool', color: '#ffffff', icon: 'simple-icons:github' },
  { name: 'Figma (UI/UX)', category: 'tool', color: '#F24E1E', icon: 'simple-icons:figma' },
  { name: 'Supabase', category: 'tool', color: '#3FCF8E', icon: 'simple-icons:supabase' },
  { name: 'AWS', category: 'tool', color: '#FF9900', icon: 'simple-icons:amazonaws' },
  { name: 'Vercel', category: 'tool', color: '#ffffff', icon: 'simple-icons:vercel' },
  { name: 'Render', category: 'tool', color: '#46E3B7', icon: 'simple-icons:render' },
  { name: 'MySQL', category: 'database', color: '#4479A1', icon: 'simple-icons:mysql' },
  { name: 'PostgreSQL', category: 'database', color: '#4169E1', icon: 'simple-icons:postgresql' },
  { name: 'JavaScript (ES6+)', category: 'language', color: '#F7DF1E', icon: 'simple-icons:javascript' },
  { name: 'TypeScript', category: 'language', color: '#3178C6', icon: 'simple-icons:typescript' },
  { name: 'PHP', category: 'language', color: '#777BB4', icon: 'simple-icons:php' },
  { name: 'Python', category: 'language', color: '#3776AB', icon: 'simple-icons:python' },
  { name: 'Java', category: 'language', color: '#007396', icon: 'simple-icons:openjdk' },
  { name: 'Dart', category: 'language', color: '#0175C2', icon: 'simple-icons:dart' },
  { name: 'HTML5', category: 'language', color: '#E34F26', icon: 'simple-icons:html5' },
  { name: 'CSS3', category: 'language', color: '#1572B6', icon: 'simple-icons:css3' },
];
