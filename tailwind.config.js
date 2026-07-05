/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: '#010a07',
          900: '#02150e',
          800: '#041f15',
        },
        gold: {
          DEFAULT: '#d4af37',
          50: '#fffbf0',
          100: '#ffe8b1',
          200: '#ffdf8c',
          300: '#ffd366',
          400: '#ffc140',
          500: '#d4af37',
          600: '#b8942a',
          700: '#94741f',
          800: '#705616',
          900: '#4d3a0f',
        }
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Poppins', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
