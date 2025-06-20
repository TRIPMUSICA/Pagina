/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'trip-black': '#0A0A0A',
        'trip-dark': '#121212',
        'trip-gray': '#1E1E1E',
        'trip-light': '#2D2D2D', 
        'trip-accent': '#FF3D00',
        'trip-accent-alt': '#00E5FF',
        'trip-yellow': '#FFD600',
        'trip-purple': '#9C27B0',
        'trip-success': '#00C853',
        'trip-warning': '#FFD600',
        'trip-error': '#FF1744',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Monument Extended', 'Inter', 'system-ui', 'sans-serif'],
        'mono': ['Space Mono', 'monospace']
      },
      fontSize: {
        'display': ['clamp(2.25rem, 8vw, 5rem)', '1.1'],
        'headline': ['clamp(1.75rem, 5vw, 3.5rem)', '1.2'],
        'title': ['clamp(1.25rem, 3vw, 2rem)', '1.2'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      spacing: {
        '128': '32rem',
        'header': '72px',
      }
    },
  },
  plugins: [],
}