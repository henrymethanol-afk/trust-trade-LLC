import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1628',
          light: '#0D1E38',
          dark: '#060F1A',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#D4B86A',
          dark: '#A8883A',
        },
        bgLight: '#F4F6F9',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #D4B86A 50%, #A8883A 100%)',
        'navy-gradient': 'linear-gradient(135deg, #0A1628 0%, #0D1E38 100%)',
        'hero-gradient': 'radial-gradient(ellipse at top left, #1a2d4a 0%, #0A1628 60%, #060F1A 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'ken-burns': 'kenBurns 8s ease-out forwards',
        'ken-burns-alt': 'kenBurnsAlt 8s ease-out forwards',
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
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1) translate(0px, 0px)' },
          '100%': { transform: 'scale(1.15) translate(-18px, -8px)' },
        },
        kenBurnsAlt: {
          '0%': { transform: 'scale(1.05) translate(0px, 0px)' },
          '100%': { transform: 'scale(1.2) translate(15px, -12px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
