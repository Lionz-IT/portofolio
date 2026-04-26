export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    role: 'Co-Founder',
    company: 'Komunitas Discord Mercenary',
    period: 'Feb 2026 - Present',
    description: 'Merancang arsitektur server dan mengelola operasional teknis untuk Mercenary. Mengimplementasikan sistem otomasi bot untuk manajemen peran, moderasi otomatis, dan kurasi konten guna menciptakan ekosistem digital yang efisien.',
  },
  {
    role: 'Member',
    company: 'Komunitas Gamekita',
    period: 'Aug 2024 - Present',
    description: 'Berpartisipasi dalam forum dan diskusi komunitas daring. Rutin mengikuti tren industri game, bertukar wawasan mekanika permainan, dan memberikan umpan balik konstruktif dalam komunitas pengembang game.',
  },
  {
    role: 'Member - Game Programmer',
    company: 'UKM Gamespace',
    period: 'Jul 2024 - Jul 2025',
    description: 'Berkolaborasi mengeksplorasi dan mengimplementasikan pemrograman game serta desain logika. Berkontribusi dalam scripting mekanika dan integrasi aset 3D untuk membangun lingkungan permainan interaktif.',
  },
  {
    role: 'Member',
    company: 'GDGOC ITS',
    period: 'Dec 2024 - Mar 2025',
    description: 'Terlibat dalam lokakarya teknologi perangkat lunak modern. Aktif mempelajari dan berbagi praktik terbaik dalam membangun solusi software yang praktis dan skalabel di ekosistem kolaboratif.',
  },
];
