/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Soft blush tones lifted from the badger's face highlights.
        cream: {
          50: '#fffafb',
          100: '#fde8ec',
          200: '#fadadd',
        },
        // Brand red family (name retained as `badger` for minimal churn).
        // Primary = #A60000, deeper shades from the logo's shadow work.
        badger: {
          DEFAULT: '#a60000',
          600: '#850000',
          700: '#660000',
        },
        // Vibrant glow red used for accents / hover pops.
        gold: {
          DEFAULT: '#ff3333',
          light: '#ff6b6b',
        },
        // Near-black surfaces — warmed toward maroon so blacks read as "brand."
        ink: {
          DEFAULT: '#1a0000',
          soft: '#2b0a0a',
          muted: '#3d1616',
        },
        // Light surface — barely-there blush.
        paper: {
          DEFAULT: '#fff5f6',
          dim: '#ffe6ea',
        },
        mist: '#d8b8bc',
        accent: {
          DEFAULT: '#ff3333',
          glow: 'rgba(255, 51, 51, 0.4)',
        },
        // Shifted from cool mint to warm coral so all secondary pops stay on-brand.
        mint: '#ff8080',
        // Explicit tokens matching the logo palette exactly.
        brand: {
          red: '#a60000',
          maroon: '#660000',
          glow: '#ff3333',
          blush: '#fadadd',
        },
      },
      fontFamily: {
        display: ['"Rubik"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Rubik"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-fine':
          'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
        'hero-glow':
          'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(255, 51, 51, 0.28), transparent 55%), radial-gradient(ellipse 50% 40% at 100% 50%, rgba(250, 218, 221, 0.16), transparent 50%)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      boxShadow: {
        lift: '0 24px 80px -20px rgba(26, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.06)',
        card: '0 4px 24px -4px rgba(26, 0, 0, 0.14), 0 0 0 1px rgba(166, 0, 0, 0.08)',
        'card-hover': '0 12px 40px -8px rgba(26, 0, 0, 0.22), 0 0 0 1px rgba(255, 51, 51, 0.35)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        shimmer: 'shimmer 8s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
};
