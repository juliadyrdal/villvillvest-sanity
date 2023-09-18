/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3D66F2',
          base: '#3D66F2',
          dark: '#2c4dbd'
        },
        secondary: {
          light: '#6084ff',
          base: '#24f509',
          dark: '#32c120'
        },
      },
      fontFamily: {
        display: ['"Druk Wide Super"', 'serif'],
        'display-medium': ['"Druk Wide Medium"', 'serif'],
      },
    },
  },
  plugins: [],
}

