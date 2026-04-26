export interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  url?: string;
  github?: string;
  year: string;
}

export const projects: Project[] = [
  {
    title: 'DailyVit',
    description: 'Web dashboard pemantauan kesehatan interaktif. Terintegrasi dengan API Huawei Health Kit untuk memproses data biometrik smartwatch menjadi visualisasi metrik fisik dan rekomendasi gaya hidup preventif.',
    tech: ['API Integration', 'Data Visualization'],
    url: 'https://dailyvit.vercel.app/',
    year: '2026',
  },
  {
    title: 'Tuberku',
    description: 'Aplikasi mobile sistem informasi pemantauan kasus Tuberkulosis (TBC). Dirancang untuk memfasilitasi petugas kesehatan dalam melacak, memonitor, dan mengelola data pasien secara efektif.',
    tech: ['Full-stack', 'Mobile Dev', 'UI/UX'],
    year: '2026',
  },
  {
    title: 'SELA - Landing Page',
    description: 'Landing page yang optimal dan responsif lintas perangkat untuk aplikasi SELA, dengan fokus pada performa pemuatan halaman dan daya tarik visual.',
    tech: ['Frontend', 'Performance Optimization'],
    url: 'https://sela.web.id/',
    year: '2026',
  },
  {
    title: 'SELA - Task Management',
    description: 'Aplikasi mobile manajemen tugas dengan antarmuka interaktif yang memudahkan pengguna melacak dan mengelola produktivitas secara terpusat.',
    tech: ['Frontend Mobile', 'UI Implementation'],
    url: 'https://play.google.com/store/apps/details?id=com.pdbl.sela',
    year: '2026',
  },
  {
    title: 'Campus Pre-loved',
    description: 'Platform e-commerce C2C untuk ekosistem kampus. Memiliki antarmuka dinamis dan arsitektur basis data terintegrasi untuk transaksi barang pre-loved yang aman.',
    tech: ['Next.js', 'Tailwind CSS', 'Supabase'],
    year: '2026',
  },
  {
    title: 'Washup',
    description: 'Aplikasi manajemen operasional laundry. Meliputi perancangan UI panel admin dan pengembangan frontend yang dioptimalkan kecepatannya menggunakan Bun.',
    tech: ['Frontend', 'UI Design', 'Bun'],
    year: '2025 - 2026',
  },
];
