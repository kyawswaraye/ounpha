module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
      "title": ['Playfair', 'sans-serif'],
    },
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        mdmax: {
          max: "768px"
        },
        lgmax: {
          max: "1024px"
        },
        xlmax: {
          max: "1280px"
        }
      },
      container: {
        padding: '2rem',
      },
      colors: {
        'primary': '#18191a',
        'secondary': '#1c1e21',
        'color-secondary': '#ffeb3b',
        'light-primary': '#d1411e',
        'light-secondary': '#1eaed1',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
