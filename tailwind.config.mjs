/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfcf8',
          100: '#f7f4e8',
          200: '#ebe4d0',
        },
        badger: {
          DEFAULT: '#0f3d2e',
          600: '#0c3226',
          700: '#0a281e',
        },
        gold: {
          DEFAULT: '#d4a012',
          light: '#f0c94a',
        },
        ink: {
          DEFAULT: '#070a08',
          soft: '#121916',
          muted: '#1c2420',
        },
        paper: {
          DEFAULT: '#f6f4ef',
          dim: '#ebe8e0',
        },
        mist: '#d4cfc3',
        accent: {
          DEFAULT: '#c9a227',
          glow: 'rgba(201, 162, 39, 0.35)',
        },
        mint: '#6bc4a6',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-fine':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'hero-glow':
          'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(201, 162, 39, 0.22), transparent 55%), radial-gradient(ellipse 50% 40% at 100% 50%, rgba(107, 196, 166, 0.12), transparent 50%)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      boxShadow: {
        lift: '0 24px 80px -20px rgba(7, 10, 8, 0.45), 0 0 0 1px rgba(255,255,255,0.06)',
        card: '0 4px 24px -4px rgba(7, 10, 8, 0.12), 0 0 0 1px rgba(15, 61, 46, 0.06)',
        'card-hover': '0 12px 40px -8px rgba(7, 10, 8, 0.18), 0 0 0 1px rgba(201, 162, 39, 0.25)',
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
