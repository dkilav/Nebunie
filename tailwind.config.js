 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","./node_modules/tw-elements/dist/js/**/*.js"],
  darkMode:'class',
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}
