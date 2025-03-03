/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rethink-medium': ['var(--font-rethink-sans-medium)'],
        'rethink-bold': ['var(--font-rethink-sans-bold)'],
      },
      animation: {
        'gradient-x': 'gradient-x 3s linear infinite',
        'border-light': 'border-light 4s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'border-light': {
          '0%': { 
            'background-position': '0% 0%',
            'background-image': 'linear-gradient(90deg, transparent 80%, rgba(152, 68, 255, 0.6), rgba(255, 255, 255, 0.8), rgba(152, 68, 255, 0.6), transparent 80%)',
          },
          '25%': { 
            'background-position': '100% 0%',
            'background-image': 'linear-gradient(180deg, transparent 80%, rgba(152, 68, 255, 0.6), rgba(255, 255, 255, 0.8), rgba(152, 68, 255, 0.6), transparent 80%)',
          },
          '50%': { 
            'background-position': '100% 100%',
            'background-image': 'linear-gradient(270deg, transparent 80%, rgba(152, 68, 255, 0.6), rgba(255, 255, 255, 0.8), rgba(152, 68, 255, 0.6), transparent 80%)',
          },
          '75%': { 
            'background-position': '0% 100%',
            'background-image': 'linear-gradient(360deg, transparent 80%, rgba(152, 68, 255, 0.6), rgba(255, 255, 255, 0.8), rgba(152, 68, 255, 0.6), transparent 80%)',
          },
          '100%': { 
            'background-position': '0% 0%',
            'background-image': 'linear-gradient(90deg, transparent 80%, rgba(152, 68, 255, 0.6), rgba(255, 255, 255, 0.8), rgba(152, 68, 255, 0.6), transparent 80%)',
          }
        }
      },
    },
  },
  plugins: [],
}; 