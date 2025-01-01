/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B52A1D',
        secondary: '#FAF3E0',
        accent: '#FFC107',
      },
      fontFamily: {
        heading: ['Bebas Neue','ui-sans-serif', 'system-ui'],
        body: ['Roboto', 'ui-sans-serif', 'system-ui'],
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
    },
  },
  plugins: [],
}

