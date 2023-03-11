/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/*.{html,js}', './src/*.{html,js}'],
  theme: {
    extend: {

      screens: {},
      colors: {},
      fontFamily: {},
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {}
      },
    },
    plugins: [require("daisyui")],
    daisyui: {
      styled: true,
      themes: true,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      prefix: "",
      darkTheme: "dark",
    },
  }
}
