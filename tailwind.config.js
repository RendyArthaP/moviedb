module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      "white": "#F4F4F4",
      "orange": "#FF7314",
      "blackLight": "#393534",
      "black": "#22211F"
    }),
    textColor: {
      "white": "#F4F4F4",
      "orange": "#FF7314",
      "blackLight": "#393534",
      "black": "#22211F"
    },
    borderColor: theme => ({
      "white": "#F4F4F4",
      "orange": "#FF7314",
      "blackLight": "#393534",
      "black": "#22211F"
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
