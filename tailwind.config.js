/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        lime: {
          150: '#E1F5AC', // Custom light lime for badges
          450: '#BADA5F', // Custom logo green
        },
        neutral: {
          850: '#1A1A1A',
          900: '#121212',
          950: '#0A0A0A',
        }
      },
      fontSize: {
        '7xl-tight': ['4.5rem', { lineHeight: '1' }],
      }
    },
  },
  plugins: [],
}
