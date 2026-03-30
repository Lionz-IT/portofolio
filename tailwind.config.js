/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0B0A10",
        "dark-100": "#141220",
        "dark-200": "#1A1528",
        light: "#F5F0E8",
        primary: "#D4A053",
        "primary-dim": "rgba(212,160,83,0.10)",
        "primary-glow": "rgba(212,160,83,0.20)",
        accent: "#7B6CB7",
        "accent-dim": "rgba(123,108,183,0.10)",
        "accent-glow": "rgba(123,108,183,0.20)",
        rose: "#C56B8A",
        "rose-dim": "rgba(197,107,138,0.10)",
        muted: "#8A8298",
        "muted-light": "#6B6480",
        border: "rgba(212,160,83,0.12)",
        "border-hover": "rgba(123,108,183,0.3)",
      },
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['Space Mono', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.05em',
        superwide: '0.4em',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'cursor-blink': 'cursor-blink 1s step-end infinite',
        'glow-pulse': 'glow-pulse 6s ease-in-out infinite',
        'surreal-float': 'surreal-float 8s ease-in-out infinite',
        'surreal-drift': 'surreal-drift 12s ease-in-out infinite',
        'surreal-morph': 'surreal-morph 15s ease-in-out infinite',
        'surreal-breathe': 'surreal-breathe 5s ease-in-out infinite',
        'surreal-rotate': 'surreal-rotate-slow 30s linear infinite',
        'shimmer': 'shimmer 4s linear infinite',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        },
        'surreal-float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-12px) rotate(2deg)' },
          '50%': { transform: 'translateY(-6px) rotate(-1deg)' },
          '75%': { transform: 'translateY(-15px) rotate(1.5deg)' },
        },
        'surreal-drift': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(10px, -15px) rotate(3deg)' },
          '66%': { transform: 'translate(-8px, -8px) rotate(-2deg)' },
        },
        'surreal-morph': {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '50%': { borderRadius: '50% 60% 40% 60% / 40% 70% 40% 60%' },
          '75%': { borderRadius: '40% 60% 60% 40% / 60% 40% 60% 40%' },
        },
        'surreal-breathe': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.08)', opacity: '1' },
        },
        'surreal-rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundImage: {
        'gradient-surreal': 'linear-gradient(135deg, #D4A053, #C56B8A, #7B6CB7)',
      },
    },
  },
  plugins: [],
}
