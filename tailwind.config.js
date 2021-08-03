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
          bright: "#FFAA0A",
          list: "#FEF5E6",
          book: "#F29F05",
          desc: "#707070",
          btn: "#F4F4F4"
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
