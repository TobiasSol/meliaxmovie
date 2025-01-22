/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'shine-banner': 'shine-diagonal 8s linear infinite',
        'shine-button': 'shine-sweep 2s linear infinite',
        'shine-navbar': 'shine-sweep 12s linear infinite',
        'neonBorder': 'neonPulse 2s infinite',
        'fadeIn': 'fadeIn 0.5s ease-in',
        colorChange: 'colorChange 4s ease-in-out infinite',
        'gradient-x': 'gradient 3s linear infinite',
        'sparkle': 'sparkle 2s linear infinite',
      },
      keyframes: {
        'shine-diagonal': {
          '0%': { transform: 'translateX(-100%) translateY(-100%)' },
          '100%': { transform: 'translateX(100%) translateY(100%)' }
        },
        'shine-sweep': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(300%)' }
        },
        neonPulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        colorChange: {
          '0%, 100%': { color: 'rgb(255, 255, 255)' },
          '50%': { color: 'rgb(239, 68, 68)' }, // text-red-500
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        sparkle: {
          '0%': {
            transform: 'scale(0) rotate(0deg)',
            opacity: 0
          },
          '50%': {
            transform: 'scale(1) rotate(180deg)',
            opacity: 0.8
          },
          '100%': {
            transform: 'scale(0) rotate(360deg)',
            opacity: 0
          }
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide'),
  ],
} 