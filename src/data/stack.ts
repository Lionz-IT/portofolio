import * as icons from 'simple-icons';

export interface StackItem {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'database';
  color?: string;
  icon?: string;
}

export const stack: StackItem[] = [
  { name: 'Next.js 14/15', category: 'framework', color: `#${icons.siNextdotjs.hex}`, icon: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="${icons.siNextdotjs.path}"/></svg>` },
  { name: 'Laravel', category: 'framework', color: `#${icons.siLaravel.hex}`, icon: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="${icons.siLaravel.path}"/></svg>` },
  { name: 'Flutter', category: 'framework', color: `#${icons.siFlutter.hex}`, icon: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="${icons.siFlutter.path}"/></svg>` },
  { name: 'React.js', category: 'framework', color: `#${icons.siReact.hex}`, icon: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="${icons.siReact.path}"/></svg>` },
  { name: 'Node.js', category: 'framework', color: `#${icons.siNodedotjs.hex}`, icon: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="${icons.siNodedotjs.path}"/></svg>` },
  { name: 'Tailwind CSS', category: 'framework', color: `#${icons.siTailwindcss.hex}`, icon: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="${icons.siTailwindcss.path}"/></svg>` },
  { name: 'Bootstrap', category: 'framework', color: `#${icons.siBootstrap.hex}`, icon: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="${icons.siBootstrap.path}"/></svg>` },
  { name: 'Git', category: 'tool', color: `#${icons.siGit.hex}`, icon: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="${icons.siGit.path}"/></svg>` },
  { name: 'GitHub', category: 'tool', color: `#${icons.siGithub.hex}`, icon: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="${icons.siGithub.path}"/></svg>` },
  { name: 'Figma (UI/UX)', category: 'tool', color: `#${icons.siFigma.hex}`, icon: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="${icons.siFigma.path}"/></svg>` },
  { name: 'Supabase', category: 'tool', color: `#${icons.siSupabase.hex}`, icon: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="${icons.siSupabase.path}"/></svg>` },
  { name: 'AWS', category: 'tool', color: '#FF9900', icon: '<svg viewBox="0 0 128 128"><path fill="currentColor" d="M86.5 90c-15.6 11.5-35.3 15.6-54 11.4 20-3.3 39-11.4 54-24.4zm1.9-5.1c11.6 1.7 18.8 6.7 19.6 13.9.7-7.6-3.8-15-11.3-19.6zm-17.1-23.7c1.7 3.8 2.6 8 2.6 12.3 0 10.9-5.3 21-14.3 27.2l8.8 8.8c11.3-8.1 18.2-21 18.2-34.9 0-5.7-1.3-11.2-3.8-16.2z"/></svg>' },
  { name: 'Vercel', category: 'tool', color: `#${icons.siVercel.hex}`, icon: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="${icons.siVercel.path}"/></svg>` },
  { name: 'Render', category: 'tool', color: `#${icons.siRender.hex}`, icon: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="${icons.siRender.path}"/></svg>` },
  { name: 'MySQL', category: 'database', color: `#${icons.siMysql.hex}`, icon: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="${icons.siMysql.path}"/></svg>` },
  { name: 'PostgreSQL', category: 'database', color: `#${icons.siPostgresql.hex}`, icon: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="${icons.siPostgresql.path}"/></svg>` },
  { name: 'JavaScript (ES6+)', category: 'language', color: `#${icons.siJavascript.hex}`, icon: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="${icons.siJavascript.path}"/></svg>` },
  { name: 'TypeScript', category: 'language', color: `#${icons.siTypescript.hex}`, icon: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="${icons.siTypescript.path}"/></svg>` },
  { name: 'PHP', category: 'language', color: `#${icons.siPhp.hex}`, icon: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="${icons.siPhp.path}"/></svg>` },
  { name: 'Python', category: 'language', color: `#${icons.siPython.hex}`, icon: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="${icons.siPython.path}"/></svg>` },
  { name: 'Java', category: 'language', color: `#${icons.siOpenjdk.hex}`, icon: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="${icons.siOpenjdk.path}"/></svg>` },
  { name: 'Dart', category: 'language', color: `#${icons.siDart.hex}`, icon: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="${icons.siDart.path}"/></svg>` },
  { name: 'HTML5', category: 'language', color: `#${icons.siHtml5.hex}`, icon: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="${icons.siHtml5.path}"/></svg>` },
  { name: 'CSS3', category: 'language', color: `#${icons.siCss.hex}`, icon: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="${icons.siCss.path}"/></svg>` },
];
