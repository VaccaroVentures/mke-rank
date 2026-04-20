/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fbfcff',
          100: '#eef1fa',
          200: '#dde3f2',
        },
        // Brand dark blue (was dark green). Primary surface/text color.
        badger: {
          DEFAULT: '#21346e',
          600: '#1a2a5c',
          700: '#131e42',
        },
        // Warm accent kept for highlights/hovers, retuned to sit well on blue.
        gold: {
          DEFAULT: '#f0b744',
          light: '#ffd581',
        },
        // Near-black surface used in hero/footer.
        ink: {
          DEFAULT: '#0c1024',
          soft: '#161a20',
          muted: '#242937',
        },
        // Light surface.
        paper: {
          DEFAULT: '#f6f8fd',
          dim: '#e8ecf5',
        },
        mist: '#c4cce0',
        accent: {
          DEFAULT: '#f0b744',
          glow: 'rgba(240, 183, 68, 0.35)',
        },
        // Used for subtle brand hint, now a cool periwinkle.
        mint: '#8aa4ff',
        // Explicit brand shade for hero fallback & accents.
        royal: {
          DEFAULT: '#21346e',
          deep: '#161e44',
          soft: '#3a4f9e',
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
          'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(138, 164, 255, 0.25), transparent 55%), radial-gradient(ellipse 50% 40% at 100% 50%, rgba(240, 183, 68, 0.14), transparent 50%)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      boxShadow: {
        lift: '0 24px 80px -20px rgba(12, 16, 36, 0.55), 0 0 0 1px rgba(255,255,255,0.06)',
        card: '0 4px 24px -4px rgba(12, 16, 36, 0.14), 0 0 0 1px rgba(33, 52, 110, 0.08)',
        'card-hover': '0 12px 40px -8px rgba(12, 16, 36, 0.22), 0 0 0 1px rgba(240, 183, 68, 0.28)',
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
