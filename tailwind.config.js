module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        px: {
          base: "#4D4D4D",
          pri: "#E39400",
          body: "#FFFDF7",
          fade: "#4D4D4D"
        }
      },
      screens: {
        big: '1320px'
      },
      borderRadius: {
        'cus': '10px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
