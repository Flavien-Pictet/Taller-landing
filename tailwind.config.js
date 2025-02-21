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
    },
  },
  plugins: [],
}; 