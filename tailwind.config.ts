import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#22A4F4',
          50: '#EAF6FE',
          100: '#D4EDFD',
          200: '#A9DBFB',
          300: '#7EC9F9',
          400: '#53B7F7',
          500: '#22A4F4',
          600: '#0B8CDB',
          700: '#086DAB',
          800: '#064F7B',
          900: '#03304B',
        },
        navy: {
          DEFAULT: '#0E2A47',
          50: '#E8EDF3',
          100: '#C5D1DF',
          500: '#0E2A47',
          900: '#06182A',
        },
        skyblue: {
          DEFAULT: '#E8F4FB',
          light: '#F2F9FD',
        },
        success: '#22C55E',
        danger: '#EF4444',
        warning: '#F59E0B',
        topbar: '#0A0F1C',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'pill': '9999px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(14, 42, 71, 0.06)',
        'card-hover': '0 4px 16px rgba(14, 42, 71, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
