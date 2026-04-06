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
        accent: "#D4A053",
        "accent-dim": "rgba(212,160,83,0.10)",
        "accent-glow": "rgba(212,160,83,0.20)",
        muted: "#9A9490",
        "muted-light": "#7A7470",
        border: "rgba(212,160,83,0.12)",
        "border-hover": "rgba(212,160,83,0.3)",
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
        'surreal-float': 'surreal-float 8s ease-in-out infinite',
        'shimmer': 'shimmer 4s linear infinite',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'surreal-float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-12px) rotate(2deg)' },
          '50%': { transform: 'translateY(-6px) rotate(-1deg)' },
          '75%': { transform: 'translateY(-15px) rotate(1.5deg)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundImage: {
        'gradient-surreal': 'linear-gradient(135deg, #E8C580, #D4A053, #B8862D)',
      },
    },
  },
  plugins: [],
}
