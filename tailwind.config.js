/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.vue',
    './content/**/*.md',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
